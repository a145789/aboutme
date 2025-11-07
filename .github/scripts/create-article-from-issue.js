import { exec } from '@actions/exec'
import * as core from '@actions/core'
import * as github from '@actions/github'
import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// 在 ESM 中获取 __dirname 的等效方式
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

    // 根据标签自动判断分类
    let category = 'blog' // 默认分类

    if (labels.includes('record')) {
      category = 'record'
    } else if (labels.includes('blog')) {
      category = 'blog'
    }
    // 如果没有 blog 或 record 标签，保持默认的 blog 分类

    console.log(`Article category: ${category}`)

    // 清理标题，移除文件系统不支持的字符
    const cleanTitle = title.replace(/[<>:"/\\|?*]/g, '').trim()

    if (!cleanTitle) {
      throw new Error('文章标题不能为空或只包含特殊字符')
    }

    // 生成文件名
    const fileName = `${cleanTitle}.md`
    const filePath = `src/content/${category}/${fileName}`

    console.log(`Article file path: ${filePath}`)

    // 创建文章内容 - 简单格式，不包含复杂的元数据
    const articleContent = `# ${title}

${body}

---
*原文来自 [Issue #${issueNumber}](${issue.html_url})*
`

    // 创建分支名称（简化版）
    const safeBranchName = cleanTitle
      .toLowerCase()
      .replace(/[^a-z0-9\u4e00-\u9fa5]/g, '-') // 保留中文和英文数字
      .replace(/-+/g, '-') // 合并多个连字符
      .replace(/^-|-$/g, '') // 移除开头结尾的连字符

    const branchName = `article/issue-${issueNumber}-${safeBranchName || 'untitled'}`

    console.log(`Branch name: ${branchName}`)

    // 配置 Git
    await exec.exec('git', ['config', 'user.name', 'github-actions[bot]'])
    await exec.exec('git', ['config', 'user.email', 'github-actions[bot]@users.noreply.github.com'])

    // 创建并切换到新分支
    await exec.exec('git', ['checkout', '-b', branchName])

    // 确保目录存在
    const dir = path.dirname(filePath)
    try {
      await fs.access(dir)
    } catch {
      await fs.mkdir(dir, { recursive: true })
      console.log(`Created directory: ${dir}`)
    }

    // 写入文件
    await fs.writeFile(filePath, articleContent)
    console.log(`Created article file: ${filePath}`)

    // 提交更改
    await exec.exec('git', ['add', filePath])
    await exec.exec('git', ['commit', '-m', `Add article: ${title} (Issue #${issueNumber})`])

    // 推送分支
    await exec.exec('git', ['push', 'origin', branchName])
    console.log(`Pushed branch: ${branchName}`)

    // 设置输出
    core.setOutput('branch-name', branchName)
    core.setOutput('file-path', filePath)
    core.setOutput('article-title', title)
    core.setOutput('issue-number', issueNumber.toString())
    core.setOutput('article-category', category)

    // 创建 Pull Request
    const { Octokit } = await import('@octokit/rest')
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

    // 在 Issue 中添加评论
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
