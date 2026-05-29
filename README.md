# 🪴 ZhongShurong的技术小站

> 分享学习日常与小笔记，记录点滴成长

[![Deploy Jekyll to GitHub Pages](https://github.com/Supowe/Supowe.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/Supowe/Supowe.github.io/actions/workflows/deploy.yml)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-brightgreen)](https://supowe.github.io/)
[![Jekyll](https://img.shields.io/badge/Jekyll-4.3-red)](https://jekyllrb.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## 🌐 在线访问

博客地址：[https://supowe.github.io/](https://supowe.github.io/)

## ✨ 特性

- 🎨 **可爱清新风格** - 柔和配色，圆角设计，毛玻璃效果
- 🚀 **丰富动画效果** - 入场动画、悬停效果、滚动视差
- 📱 **响应式设计** - 完美适配各种设备
- 🎯 **完整功能模块** - 侧边栏卡片、文章元信息、页脚内容
- ⚡ **自动化部署** - GitHub Actions 自动编译部署
- 🌈 **自定义光标** - 粒子效果、磁力吸附交互

## 📂 项目结构

```
blog/
├── _config.yml          # Jekyll 配置文件
├── _layouts/            # 布局模板
│   ├── default.html     # 默认布局
│   ├── home.html        # 首页布局
│   └── post.html        # 文章布局
├── _includes/           # 组件模块
│   ├── header.html      # 导航栏
│   ├── footer.html      # 页脚
│   ├── hero.html        # 首页英雄区
│   └── sidebar/         # 侧边栏组件
│       ├── about.html       # 关于博主
│       ├── categories.html  # 文章分类
│       ├── tags.html        # 标签云
│       ├── recent.html      # 最新文章
│       └── projects.html    # 精选项目
├── _posts/              # 文章目录
├── assets/              # 静态资源
│   ├── css/style.css    # 样式文件
│   └── js/main.js       # JavaScript 文件
└── .github/workflows/   # GitHub Actions 配置
    └── deploy.yml       # 自动部署工作流
```

## 🛠️ 本地开发

### 环境要求

- Ruby 3.0+
- Jekyll 4.3+
- Bundler

### 安装依赖

```bash
bundle install
```

### 本地运行

```bash
bundle exec jekyll serve
```

访问 `http://localhost:4000` 查看博客。

### 构建生产版本

```bash
bundle exec jekyll build
```

编译后的文件在 `_site` 目录。

## 📝 写文章

在 `_posts` 目录创建新文章，文件名格式：

```
YYYY-MM-DD-title.markdown
```

文章模板：

```markdown
---
layout: post
title: "文章标题"
date: 2026-05-29
categories: [分类]
tags: [标签1, 标签2]
---

文章内容...
```

## 🚀 部署流程

### 自动部署（推荐）

1. 推送代码到 `master` 分支
2. GitHub Actions 自动触发构建
3. 编译后的网站自动部署到 `gh-pages` 分支
4. GitHub Pages 自动更新

### 手动部署

```bash
# 构建网站
bundle exec jekyll build

# 切换到 gh-pages 分支
git checkout gh-pages

# 复制编译后的文件
cp -r _site/* .

# 提交并推送
git add .
git commit -m "Update site"
git push origin gh-pages

# 切回主分支
git checkout master
```

## 🎨 自定义配置

### 修改博客信息

编辑 `_config.yml`：

```yaml
title: "你的博客标题"
description: "你的博客描述"
email: your-email@example.com
github_username: your-username
```

### 修改主题颜色

编辑 `assets/css/style.css` 中的 CSS 变量：

```css
:root {
  --primary-color: #ff8fab;    /* 主色 */
  --secondary-color: #ff6b9d;  /* 次色 */
  --mint-color: #7dd3c0;       /* 薄荷绿 */
  --lavender-color: #c9a7eb;   /* 薰衣草紫 */
}
```

## 📊 技术栈

- **前端框架**: Jekyll (静态网站生成器)
- **样式**: CSS3 (动画、渐变、毛玻璃效果)
- **交互**: JavaScript (原生)
- **图标**: Font Awesome 6
- **头像**: DiceBear API
- **部署**: GitHub Pages + GitHub Actions

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

- [Jekyll](https://jekyllrb.com/) - 静态网站生成器
- [GitHub Pages](https://pages.github.com/) - 免费托管
- [Font Awesome](https://fontawesome.com/) - 图标库
- [DiceBear](https://dicebear.com/) - 头像生成

---

⭐ 如果这个项目对你有帮助，欢迎 Star！

Made with ❤️ by ZhongShurong