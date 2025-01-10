"use strict";(self.webpackChunkzhuddan_github_io=self.webpackChunkzhuddan_github_io||[]).push([[2968],{2714:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"mini/update","title":"\u66f4\u65b0\u68c0\u6d4b","description":"\u53c2\u8003https://developers.weixin.qq.com/miniprogram/dev/api/base/update/wx.getUpdateManager.html","source":"@site/archived/mini/update.md","sourceDirName":"mini","slug":"/mini/update","permalink":"/docs/mini/update","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"archived","previous":{"title":"\u5c0f\u7a0b\u5e8f","permalink":"/docs/category/\u5c0f\u7a0b\u5e8f"},"next":{"title":"\u84dd\u7259\u6a21\u5757","permalink":"/docs/mini/bluetooth"}}');var r=t(6070),o=t(8637);const i={sidebar_position:1},s="\u66f4\u65b0\u68c0\u6d4b",d={},p=[];function c(e){const n={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u66f4\u65b0\u68c0\u6d4b",children:"\u66f4\u65b0\u68c0\u6d4b"})}),"\n",(0,r.jsxs)(n.p,{children:["\u53c2\u8003",(0,r.jsx)(n.a,{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/update/wx.getUpdateManager.html",children:"https://developers.weixin.qq.com/miniprogram/dev/api/base/update/wx.getUpdateManager.html"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="\u4ee5 Taro \u4e3a\u4f8b"',children:"import Taro from '@tarojs/taro'\nimport logger from './logger'\nimport { showModal } from './ui'\n\n/**\n * \u68c0\u67e5\u66f4\u65b0\n */\nexport async function updateApp() {\n  const updateManager = Taro.getUpdateManager()\n  updateManager.onCheckForUpdate((res) => {\n    if (res.hasUpdate) {\n      logger.info(`\u68c0\u6d4b\u5230\u65b0\u7684\u66f4\u65b0`)\n    }\n  })\n  updateManager.onUpdateReady(async () => {\n    try {\n      await showModal('\u65b0\u7248\u672c\u5df2\u7ecf\u51c6\u5907\u597d\uff0c\u662f\u5426\u91cd\u542f\u5e94\u7528\uff1f', '\u66f4\u65b0\u63d0\u793a')\n      updateManager.applyUpdate()\n    }\n    catch {\n      logger.warn('\u7528\u6237\u53d6\u6d88\u66f4\u65b0')\n    }\n  })\n  updateManager.onUpdateFailed(() => {\n    logger.error('\u65b0\u7248\u672c\u4e0b\u8f7d\u5931\u8d25')\n  })\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8637:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var a=t(758);const r={},o=a.createContext(r);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);