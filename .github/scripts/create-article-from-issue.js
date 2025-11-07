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
    const title = issue.title
    const body = issue.body
    const issueNumber = issue.number
    const labels = issue.labels.map((label) => label.name)

    console.log(`Processing issue #${issueNumber}: ${title}`)
    console.log(`Issue labels: ${labels.join(', ')}`)

    // ✅ 自动分类逻辑
    let category = 'blog'
    if (labels.includes('record')) category = 'record'
    else if (labels.includes('blog')) category = 'blog'

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

    // ✅ 分支名（基础名）
    const safeBranchName = cleanTitle
      .toLowerCase()
      .replace(/[^a-z0-9\u4e00-\u9fa5]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
    const baseBranchName = `article/issue-${issueNumber}-${safeBranchName || 'untitled'}`

    // ✅ 检查远程是否已有同名分支，如果有则自动递增命名
    let branchName = baseBranchName
    let counter = 1
    while (await branchExists(branchName)) {
      branchName = `${baseBranchName}-${counter++}`
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

    // ✅ 配置 Git
    await exec('git', ['config', 'user.name', 'github-actions[bot]'])
    await exec('git', ['config', 'user.email', 'github-actions[bot]@users.noreply.github.com'])

    // ✅ 获取最新 main 分支
    await exec('git', ['fetch', '--all'])
    await exec('git', ['checkout', 'main'])
    await exec('git', ['pull', 'origin', 'main'])

    // ✅ 创建新分支
    await exec('git', ['checkout', '-b', branchName])
    console.log(`Created new branch: ${branchName}`)

    // ✅ 确保目录存在
    const dir = path.dirname(filePath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
      console.log(`Created directory: ${dir}`)
    }

    // ✅ 写入文件
    fs.writeFileSync(filePath, articleContent)
    console.log(`Created article file: ${filePath}`)

    // ✅ 提交更改
    await exec('git', ['add', filePath])
    await exec('git', ['commit', '-m', `Add article: ${title} (Issue #${issueNumber})`])

    // ✅ 推送新分支（不使用 force）
    await exec('git', ['push', 'origin', branchName])
    console.log(`Pushed branch: ${branchName}`)

    // ✅ 输出到 GitHub Actions
    core.setOutput('branch-name', branchName)
    core.setOutput('file-path', filePath)
    core.setOutput('article-title', title)
    core.setOutput('issue-number', issueNumber.toString())
    core.setOutput('article-category', category)

    // ✅ 创建 Pull Request
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    })

    const { data: pullRequest } = await octokit.pulls.create({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
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

    console.log(`Created PR: ${pullRequest.html_url}`)
    core.setOutput('pull-request-url', pullRequest.html_url)

    // ✅ 评论 Issue
    await octokit.issues.createComment({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      issue_number: issueNumber,
      body: `🎉 文章已自动创建！

**分类**: ${category}
**文件路径**: \`${filePath}\`

已创建 Pull Request: ${pullRequest.html_url}

请检查并合并到 main 分支。

感谢你的贡献！ 🚀`,
    })

    console.log('✅ Article creation completed successfully!')
  } catch (error) {
    core.setFailed(`❌ Action failed: ${error.message}`)
    console.error('Error details:', error)
  }
}

run()
