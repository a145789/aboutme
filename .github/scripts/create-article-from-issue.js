import { exec } from '@actions/exec'
import * as core from '@actions/core'
import * as github from '@actions/github'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { Octokit } from '@octokit/rest'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function run() {
  try {
    const issue = github.context.payload.issue
    const action = github.context.payload.action
    const owner = github.context.repo.owner
    const repo = github.context.repo.repo
    const title = issue.title || ''
    const body = issue.body || ''
    const issueNumber = issue.number
    const labels = (issue.labels || []).map((label) => label.name)

    console.log(`Processing issue #${issueNumber}: ${title}`)
    console.log(`Issue labels: ${labels.join(', ')}`)

    const validLabels = labels.filter((l) => l === 'blog' || l === 'record')
    const hasSingleValid = validLabels.length === 1 && labels.length === 1
    if (!hasSingleValid) {
      core.notice(`Skipping: invalid label state for issue #${issueNumber}. labels=[${labels.join(', ')}], action=${action}`)
      core.setOutput('skip-reason', 'invalid-label-state')
      core.setOutput('issue-number', issueNumber.toString())
      return
    }
    const category = validLabels[0]
    console.log(`Article category: ${category}`)

    // ✅ 清理标题非法字符
    const cleanTitle = title.replace(/[<>:"/\\|?*]/g, '').trim()
    if (!cleanTitle) throw new Error('文章标题不能为空或只包含特殊字符')

    const fileName = `${cleanTitle}.md`
    const filePath = `src/content/${category}/${fileName}`
    console.log(`Article file path: ${filePath}`)

    // ✅ 文章内容
    const articleContent = `${body}

---
*原文来自 [Issue #${issueNumber}](${issue.html_url})*
`

    const safeBranchName = cleanTitle
      .toLowerCase()
      .replace(/[^a-z0-9\u4e00-\u9fa5]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
    const baseBranchName = `article/issue-${issueNumber}-${safeBranchName || 'untitled'}`
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    })
    const { data: openPRs } = await octokit.pulls.list({ owner, repo, state: 'open', per_page: 100 })
    const prPrefix = `article/issue-${issueNumber}-`
    const existingPR = openPRs.find((pr) => pr.head.ref.startsWith(prPrefix))
    let branchName = existingPR?.head?.ref || baseBranchName
    if (!existingPR) {
      let counter = 1
      while (await branchExists(branchName)) {
        branchName = `${baseBranchName}-${counter++}`
      }
    }
    async function branchExists(name) {
      try {
        await exec('git', ['ls-remote', '--exit-code', 'origin', name])
        console.log(`Remote branch exists: ${name}`)
        return true
      } catch {
        return false
      }
    }

    console.log(`Final branch name: ${branchName}`)

    await exec('git', ['config', 'user.name', 'github-actions[bot]'])
    await exec('git', ['config', 'user.email', 'github-actions[bot]@users.noreply.github.com'])

    await exec('git', ['fetch', '--all'])
    await exec('git', ['checkout', 'main'])
    await exec('git', ['pull', 'origin', 'main'])
    if (existingPR) {
      await exec('git', ['fetch', 'origin', branchName])
      await exec('git', ['checkout', branchName])
      console.log(`Using existing branch: ${branchName}`)
    } else {
      await exec('git', ['checkout', '-b', branchName])
      console.log(`Created new branch: ${branchName}`)
    }

    const dir = path.dirname(filePath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
      console.log(`Created directory: ${dir}`)
    }
    fs.writeFileSync(filePath, articleContent)
    console.log(`Created article file: ${filePath}`)

    let previousFilePath = null
    if (existingPR && existingPR.body) {
      const m = existingPR.body.match(/文件路径[^`]*`([^`]+)`/)
      if (m && m[1]) previousFilePath = m[1]
    }
    if (previousFilePath && previousFilePath !== filePath && fs.existsSync(previousFilePath)) {
      await exec('git', ['rm', '-f', previousFilePath])
      console.log(`Removed previous article file: ${previousFilePath}`)
    }

    await exec('git', ['add', filePath])
    const commitMsgPrefix = existingPR ? 'Update' : 'Add'
    await exec('git', ['commit', '-m', `${commitMsgPrefix} article: ${title} (Issue #${issueNumber})`])
    await exec('git', ['push', 'origin', branchName])
    console.log(`Pushed branch: ${branchName}`)

    // ✅ 输出到 GitHub Actions
    core.setOutput('branch-name', branchName)
    core.setOutput('file-path', filePath)
    core.setOutput('article-title', title)
    core.setOutput('issue-number', issueNumber.toString())
    core.setOutput('article-category', category)

    let pullRequest
    if (existingPR) {
      const { data: updatedPR } = await octokit.pulls.update({
        owner,
        repo,
        pull_number: existingPR.number,
        title: `📝 Update article: ${title}`,
        body: `## 新文章更新

这个 PR 更新了来自 Issue #${issueNumber} 的文章。
**Merge will Closes #${issueNumber}**

### 文章信息
- **标题**: ${title}
- **分类**: ${category}
- **来源**: Issue #${issueNumber}
- **文件路径**: \`${filePath}\`

### 审核清单
- [ ] 文章内容格式正确
- [ ] 分类正确（${category}）
- [ ] 合并到 main 分支

---
*这个 PR 是由 GitHub Actions 自动更新的*`,
      })
      pullRequest = updatedPR
      console.log(`Updated PR: ${pullRequest.html_url}`)
    } else {
      const { data: createdPR } = await octokit.pulls.create({
        owner,
        repo,
        title: `📝 Add new article: ${title}`,
        head: branchName,
        base: 'main',
        body: `## 新文章提交

这个 PR 自动创建了来自 Issue #${issueNumber} 的文章。
**Merge will Closes #${issueNumber}**

### 文章信息
- **标题**: ${title}
- **分类**: ${category}
- **来源**: Issue #${issueNumber}
- **文件路径**: \`${filePath}\`

### 审核清单
- [ ] 文章内容格式正确
- [ ] 分类正确（${category}）
- [ ] 合并到 main 分支

---
*这个 PR 是由 GitHub Actions 自动创建的*`,
      })
      pullRequest = createdPR
      console.log(`Created PR: ${pullRequest.html_url}`)
    }
    core.setOutput('pull-request-url', pullRequest.html_url)

    await octokit.issues.createComment({
      owner,
      repo,
      issue_number: issueNumber,
      body: existingPR
        ? `🛠 文章已更新！\n\n**分类**: ${category}\n**文件路径**: \`${filePath}\`\n\n已更新 Pull Request: ${pullRequest.html_url}\n\n请检查并合并到 main 分支。`
        : `🎉 文章已自动创建！\n\n**分类**: ${category}\n**文件路径**: \`${filePath}\`\n\n已创建 Pull Request: ${pullRequest.html_url}\n\n请检查并合并到 main 分支。\n\n感谢你的贡献！ 🚀`,
    })

    console.log('✅ Article creation completed successfully!')
  } catch (error) {
    core.setFailed(`❌ Action failed: ${error.message}`)
    console.error('Error details:', error)
  }
}

run()
