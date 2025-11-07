# GitHub Issues 自动转文章流程

## 使用方法

### 1. 创建 Issue
在你的仓库中创建一个新的 Issue，标题就是文章标题，内容就是文章内容。

### 2. 添加标签
给 Issue 添加 `article` 标签，这将触发自动流程。

### 3. 可选的元数据
你可以在 Issue 内容开头添加元数据块来控制文章的属性：

```markdown
---
category: blog
date: 2024-01-15
tags: [vue, javascript, tutorial]
description: "这是一个示例文章"
---

这里是你的文章内容...
```

支持的元数据：
- `category`: 文章分类，支持 `blog` 或 `record` (默认: blog)
- `date`: 发布日期，格式 YYYY-MM-DD (默认: 当天)
- `tags`: 标签数组 (可选)
- `description`: 文章描述 (可选)

### 4. 自动化流程
添加 `article` 标签后，GitHub Actions 会自动：
1. 解析 Issue 内容和元数据
2. 创建新的 Git 分支
3. 生成 Markdown 文章文件
4. 提交更改并推送分支
5. 创建 Pull Request
6. 在 Issue 中评论 PR 链接

### 5. 审核和合并
检查自动创建的 PR，如果内容正确就合并到 main 分支。

## 示例

### 简单使用
**Issue 标题**: 我的第一篇博客文章
**Issue 内容**: 这是我的博客文章内容...
**标签**: article

### 高级使用
**Issue 标题**: Vue 3 组合式 API 详解
**Issue 内容**: 
```markdown
---
category: blog
date: 2024-01-20
tags: [vue, composition-api, frontend]
description: "深入探讨 Vue 3 的组合式 API 使用方法"
---

# Vue 3 组合式 API 详解

Vue 3 引入了组合式 API，这是一个重大的改进...
```
**标签**: article

## 注意事项

1. 确保 Issue 标题不包含特殊字符（如 `<>:"/\\|?*`）
2. 分类必须是 `blog` 或 `record`
3. 日期格式必须是 `YYYY-MM-DD`
4. 标签应该是有效的数组格式
5. 文章会自动添加到对应的分类目录中

## 文件结构

创建的文章会保存在：
- `src/content/blog/` - 博客文章
- `src/content/record/` - 记录类文章

每个文章文件会包含：
- YAML 前置元数据（日期、分类、标签等）
- 文章标题
- Issue 原文内容
- 来源引用

## 故障排除

如果自动化流程失败：
1. 检查 Issue 是否有 `article` 标签
2. 查看 GitHub Actions 运行日志
3. 确保仓库有正确的权限设置
4. 检查文章标题是否包含非法字符