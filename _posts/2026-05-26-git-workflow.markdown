---
layout: post
title: "Git 工作流最佳实践"
date:   2026-05-26 14:00:00 +0000
categories: 工具 Git
tags: Git 版本控制 工作流
---

## Git 工作流概述

良好的 Git 工作流是团队协作的基础。本文介绍几种常见的 Git 工作流模式及其适用场景。

### 1. Git Flow

Git Flow 是一种经典的工作流模式，适合大型项目和严格的发布周期。

**核心分支：**
- `main` - 生产环境代码
- `develop` - 开发分支
- `feature/*` - 功能分支
- `release/*` - 发布分支
- `hotfix/*` - 紧急修复分支

**工作流程：**
1. 从 `develop` 分支创建 `feature` 分支
2. 完成功能后合并回 `develop`
3. 创建 `release` 分支进行测试
4. 合并到 `main` 并打标签
5. 如有问题使用 `hotfix` 分支修复

### 2. GitHub Flow

GitHub Flow 是一种更简单的工作流，适合持续部署的项目。

**工作流程：**
1. 从 `main` 创建功能分支
2. 提交代码并推送到远程
3. 创建 Pull Request
4. 代码审查和测试
5. 合并到 `main` 并部署

### 3. Trunk-Based Development

Trunk-Based Development 适合需要频繁部署的团队。

**特点：**
- 所有开发者共享一个 `main` 分支
- 使用短生命周期的特性分支
- 频繁合并到主干
- 依赖自动化测试

### 提交信息规范

使用约定式提交（Conventional Commits）：

```
feat: 添加用户登录功能
fix: 修复登录页面样式问题
docs: 更新 API 文档
refactor: 重构用户模块代码
test: 添加单元测试
chore: 更新依赖版本
```

### Git 常用命令

```bash
# 创建并切换分支
git checkout -b feature/login

# 查看状态
git status

# 暂存文件
git add .

# 提交
git commit -m "feat: 添加登录表单"

# 推送分支
git push origin feature/login

# 合并分支
git checkout main
git merge feature/login
```

### 总结

选择合适的工作流取决于团队规模、项目复杂度和发布频率。无论选择哪种工作流，保持一致性和良好的提交规范是关键。