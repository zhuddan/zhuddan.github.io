---
sidebar_position: 3
---

# pnpm-monorepo

## 简介

- pnpm 是一种节省磁盘空间并提升安装速度的包管理工具，它通过使用硬链接和符号链接来避免重复下载依赖。
- Monorepo 是一种将多个项目放在同一个代码仓库中的管理方式，它可以提高代码复用、协作、测试和发布的效率。
- typescript 是一种支持静态类型检查的 JavaScript 超集，它可以帮助你编写更健壮、更可维护的代码。
- vite 是一种基于 ES Module 的轻量级前端开发和构建工具，它可以提供快速的开发体验和高性能的生产环境。

## 开始

- 在根目录下创建一个 `pnpm-workspace.yaml` 文件来定义工作区范围。
- 在根目录下创建一个 `tsconfig.json` 文件来定义公共的 typescript 配置，并使用 `references` 字段来指定子项目之间的依赖关系。
- 在每个子项目下创建一个 `tsconfig.json` 文件来继承公共配置，并使用 `paths` 字段来映射本地模块路径。
- 使用 `pnpm install` 命令来安装所有依赖，并使用 `pnpm run` 命令来执行各个子项目的脚本。

要在 Monorepo 中使用 vite 和 vue3 ，你可能需要以下几个步骤：

- 在每个子项目下创建一个 `vite.config.ts` 文件来定义 vite 的配置，并使用 `root` 字段来指定项目根目录，以及使用 `resolve.alias` 字段来映射本地模块路径。
- 在每个子项目下创建一个 `main.ts` 文件作为入口文件，并使用 `createApp()` 函数来创建 vue 应用实例，并挂载到 DOM 元素上。
- 在每个子项目下创建一个或多个 `.vue` 文件作为组件文件，并使用 `<script setup>` 标签和 `<template>` 标签来编写组件逻辑和模板。
- 使用 `pnpm dev --filter <project-name>` 命令来启动开发服务器，并使用 `pnpm build --filter <project-name>` 命令来构建生产环境。

参考

- [Vite+Vue3+TypeScript+Pnpm搭建企业级轻量框架实践](https://juejin.cn/post/7063251095526572039)
- [从零单排：使用pnpm创建monorepo](https://juejin.cn/post/7145010706063523854)
- [TypeScript Monorepo](https://juejin.cn/post/7136832425807577124)
