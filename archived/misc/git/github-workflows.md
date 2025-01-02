---
tags: [git]
---

# github 工作流

## 打包到其他分支

本项目是使用[github page](https://pages.github.com/)部署的。

如果每次更新都要把打包的代码提交在服务器会很繁琐，另外[github page](https://pages.github.com/)默认的入口只能是`/`或者`/docs`，打包到`/`自然不可能，打包到`/docs`又影响美观。最好的方法是重新开个分支，专门用于存储打包的产物。

使用工作流就可以很好解决：

```yml title=".github/workflows/deploy.yml"
name: Deploy to GitHub Pages
#  highlight-start
on:
  push:
    branches:
      - master
#  highlight-end

jobs:
  deploy:
    name: Deploy to GitHub Pages
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8

      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: pnpm

      - name: Install dependencies
        run: pnpm install

      - name: Build website
        run: pnpm build
      #  highlight-start
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GH_DEPLOY_TOKEN }}
          publish_dir: ./build # Docusaurus默认构建目录
          publish_branch: gh-pages # 部署到的分支
      # highlight-end
```