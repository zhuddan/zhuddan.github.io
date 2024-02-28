import { defineConfig, type DefaultTheme } from "vitepress";

// https://vitepress.dev/reference/site-config

const unclassified: DefaultTheme.SidebarItem[] = [
  {
    text: "公共",
    items: [
      { text: "git常见命令", link: "common/git" },
      { text: "nodejs常见命令", link: "common/nodejs" },
      { text: "stylelint", link: "common/stylelint" },
      { text: "eslint(vue3)", link: "common/eslint-vue3" },
      { text: "wsl", link: "common/wsl" },
    ],
  },
  {
    text: "乱七八糟",
    items: [
      { text: "如何卸载vscode", link: "sundry/uninstall-vscode" },
      { text: "Wangjunjun`s homework", link: "sundry/homework" },
      { text: "pnpm monorepo", link: "sundry/pnpm-monorepo" },
      { text: "VsCode 配置第三方终端 Cmder", link: "sundry/vscode-cmder" },
      { text: "ruoyi list 接口排序", link: "sundry/ruoyi-sort" },
    ],
  },
];

const classified: DefaultTheme.SidebarItem[] = [
  {
    text: "typescript",
    items: [
      { text: "tsconfig.json", link: "ts/ts 拓展第三方库声明" },
      { text: "奇怪的类型", link: "ts/types" },
      { text: "promise 报错", link: "ts/promise-error" },
      { text: "filter 过滤类型", link: "ts/filter" },
      { text: "extends  用法", link: "ts/extends" },
      { text: "自定义类型保护函数", link: "ts/type-predicate-function" },
      { text: "ts 拓展第三方库声明", link: "ts/expand" },
    ],
  },
  {
    text: "javascript",
    items: [
      { text: "cesium 天气特效", link: "js/cesium-weather-effect" },
      { text: "cesium-overlay 组件", link: "js/cesium-overlay" },
    ],
  },
  {
    text: "electron",
    items: [{ text: "electron打包错误", link: "electron/error" }],
  },
  {
    text: "code",
    items: [
      { text: "useCache", link: "code/useCache" },
      { text: "is", link: "code/is" },
    ],
  },
  {
    text: "npm",
    items: [{ text: "npm包推荐", link: "node/recommend" }],
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
        link: '/classified/ts/tsconfig.json',
        activeMatch: '/classified/'
      },
  
    ],
    search: {
      provider: "local",
    },
    sidebar: {
      "/unclassified": {
        base:'/unclassified/',
        items:unclassified
      },
      "/classified":  {
        base:'/classified/',
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
