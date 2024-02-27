import { defineConfig, type DefaultTheme } from "vitepress";

// https://vitepress.dev/reference/site-config

const unclassified: DefaultTheme.SidebarItem[] = [
  {
    text: "公共",
    items: [
      { text: "git常见命令", link: "/unclassified/common/git" },
      { text: "nodejs常见命令", link: "/unclassified/common/nodejs" },
      { text: "stylelint", link: "/unclassified/common/stylelint" },
      { text: "eslint(vue3)", link: "/unclassified/common/eslint-vue3" },
      { text: "wsl", link: "/unclassified/common/wsl" },
    ],
  },
  {
    text: "乱七八糟",
    items: [
      { text: "如何卸载vscode", link: "/unclassified/sundry/uninstall-vscode" },
      { text: "Wangjunjun`s homework", link: "/unclassified/sundry/homework" },
      { text: "pnpm monorepo", link: "/unclassified/sundry/pnpm-monorepo" },
      { text: "VsCode 配置第三方终端 Cmder", link: "/unclassified/sundry/vscode-cmder" },
    ],
  },
];

const classified: DefaultTheme.SidebarItem[] = [
  {
    text: "javascript",
    items: [
      { text: "ruoyi list 接口排序", link: "/classified/js/ruoyi-sort" },
      { text: "cesium 天气特效", link: "/classified/js/cesium-weather-effect" },
      { text: "cesium-overlay 组件", link: "/classified/js/cesium-overlay" },
    ],
  },
  {
    text: "typescript",
    items: [
      { text: "tsconfig.json", link: "/classified/ts/tsconfig.json" },
      { text: "奇怪的类型", link: "/classified/ts/types" },
      { text: "promise 报错", link: "/classified/ts/promise-error" },
      { text: "filter 过滤类型", link: "/classified/ts/filter" },
      { text: "extends  用法", link: "/classified/ts/extends" },
      { text: "自定义类型保护函数", link: "/classified/ts/type-predicate-function" },
    ],
  },
  {
    text: "electron",
    items: [{ text: "electron打包错误", link: "/classified/electron/error" }],
  },
  {
    text: "code",
    items: [
      { text: "useCache", link: "/classified/code/useCache" },
      { text: "is", link: "/classified/code/is" },
    ],
  },
  {
    text: "npm",
    items: [{ text: "npm包推荐", link: "/classified/node/recommend" }],
  },
];
export default defineConfig({
  title: "小本本",
  description: "zd@小本本",
  themeConfig: {
    logo: "/static/jbj.png",
    logoLink: "/",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      {
        text: "unclassified",
        link: '/unclassified/common/git',
        activeMatch: '/unclassified/'
      },
      {
        text: "classified",
        link: '/classified/js/ruoyi-sort',
        activeMatch: '/classified/'
      },
  
    ],
    search: {
      provider: "local",
    },
    sidebar: {
      "/unclassified": {
        base:'/',
        items:unclassified
      },
      "/classified":  {
        base:'/',
        items:classified
      },
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © zd",
    },
  },
});
