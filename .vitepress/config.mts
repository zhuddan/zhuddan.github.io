import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "notebook",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' },
      //   ]
      // },
      {
        text: '公共',
        items: [
          { text: 'git常见命令', link: '/common/git.md' },
          { text: 'nodejs常见命令', link: '/common/nodejs.md' },
          { text: 'stylelint', link: '/common/stylelint.md' },
          { text: 'eslint(vue3)', link: '/common/eslint-vue3.md' },
          { text: 'wsl', link: '/common/wsl.md' },
        ]
      },
      {
        text: '乱七八糟',
        items: [
          { text: '如何卸载vscode', link: '/sundry/uninstall-vscode.md' },
          { text: 'Wangjunjun`s homework', link: '/sundry/homework.md' },
          { text: 'pnpm monorepo', link: '/sundry/pnpm-monorepo.md' },
          { text: 'VsCode 配置第三方终端 Cmder', link: '/sundry/vscode-cmder.md' },
        ]
      },
      {
        text: 'javascript',
        items: [
          { text: 'ruoyi list 接口排序', link: '/js/ruoyi-sort.md' },
          { text: 'cesium 天气特效', link: '/js/cesium-weather-effect.md' },
          { text: 'cesium-overlay 组件', link: '/js/cesium-overlay.md' },
        ]
      },
      {
        text: 'typescript',
        items: [
          { text: 'tsconfig.json', link: '/ts/tsconfig.json.md' },
          { text: '奇怪的类型', link: '/ts/types.md' },
          { text: 'promise 报错', link: '/ts/promise-error.md' },
          { text: 'filter 过滤类型', link: '/ts/filter.md' },
          { text: 'extends  用法', link: '/ts/extends.md' },
          { text: '自定义类型保护函数.md', link: '/ts/type-predicate-function.md' },
        ]
      },
      {
        text: 'electron',
        items: [
          { text: 'electron打包错误', link: '/electron/error.md' },
        ]
      },
      {
        text: 'code',
        items: [
          { text: 'useCache', link: '/code/useCache.md' },
          { text: 'is', link: '/code/is.md' },
        ]
      },
     
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
