import { defineConfig, type DefaultTheme } from "vitepress";
import fs from "fs-extra";
// https://vitepress.dev/reference/site-config

const sundry: DefaultTheme.SidebarItem[] = [
  { text: "git常见命令", link: "git" },
  { text: "nodejs常见命令", link: "nodejs" },
  { text: "stylelint", link: "stylelint" },
  { text: "eslint(vue3)", link: "eslint-vue3" },
  { text: "wsl", link: "wsl" },
  { text: "如何卸载vscode", link: "uninstall-vscode" },
  { text: "Wangjunjun`s homework", link: "homework" },
  { text: "pnpm monorepo", link: "pnpm-monorepo" },
  { text: "VsCode 配置第三方终端 Cmder", link: "vscode-cmder" },
  { text: "ruoyi list 接口排序", link: "ruoyi-sort" },
  { text: "谷歌浏览器静默打印", link: "chrome-kiosk-printing" },
  { text: "地图", link: "map" },
];

const classified: DefaultTheme.SidebarItem[] = [
  {
    text: "typescript",
    items: [
      { text: "tsconfig.json", link: "ts/tsconfig-json" },
      { text: "奇怪的类型", link: "ts/types" },
      { text: "promise 报错", link: "ts/promise-error" },
      { text: "filter 过滤类型", link: "ts/filter" },
      { text: "extends  用法", link: "ts/extends" },
      { text: "自定义类型保护函数", link: "ts/type-predicate-function" },
      { text: "ts 拓展第三方库声明", link: "ts/expand" },
    ],
  },
  {
    text: "css",
    items: [
      { text: "16进制透明度", link: "css/color-opacity" },
      { text: "阻止所有事件", link: "css/disable-events" },
    ],
  },
  {
    text: "javascript",
    items: [
      { text: "cesium 天气特效", link: "js/cesium-weather-effect" },
      { text: "cesium-overlay 组件", link: "js/cesium-overlay" },
      { text: "element-ui 自定义表单组件校验", link: "js/ele2-elFormItem" },
      { text: "js模块", link: "js/modules" },
    ],
  },
  {
    text: "electron",
    items: [
      { text: "electron打包错误", link: "electron/error" },
      { text: "ipcRenderer 引入报错", link: "electron/ipcRenderer-error" },
      { text: "静默打印bug", link: "electron/print-error" },
    ],
  },
  {
    text: "code",
    items: [
      { text: "异步指南", link: "code/async" },
      // { text: "useCache", link: "code/useCache" },
      // { text: "is", link: "code/is" },
    ],
  },
  {
    text: "npm",
    items: [{ text: "npm包推荐", link: "node/recommend" }],
  },
].map((e) => {
  return {
    ...e,
    collapsed: true,
  };
});

export default defineConfig({
  title: "笔记",
  description: "zd@笔记",
  themeConfig: {
    // logo: "/static/jbj.png",
    // logoLink: "/",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      {
        text: "杂项",
        link: "/sundry/git",
        activeMatch: "/sundry/",
      },
      {
        text: "分类",
        link: "/classified/ts/tsconfig-json",
        activeMatch: "/classified/",
      },
    ],
    search: {
      provider: "local",
    },
    sidebar: {
      "/sundry": {
        base: "/sundry/",
        items: sundry,
      },
      "/classified": {
        base: "/classified/",
        items: classified,
      },
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/zhuddan/zhuddan.github.io" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © zd",
    },
  },
  outDir: "./docs",
  async buildEnd(siteConfig) {
    fs.copySync("./static", "./docs/static");
  },
});
