"use strict";(self.webpackChunkzhuddan_github_io=self.webpackChunkzhuddan_github_io||[]).push([[2539],{4112:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"js/js-libs/electron/build-options","title":"\u6253\u5305\u53c2\u6570\u8bf4\u660e","description":"","source":"@site/archived/js/js-libs/electron/build-options.md","sourceDirName":"js/js-libs/electron","slug":"/js/js-libs/electron/build-options","permalink":"/docs/js/js-libs/electron/build-options","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"archived","previous":{"title":"\u6253\u5305\u5931\u8d25","permalink":"/docs/js/js-libs/electron/build-error"},"next":{"title":"ipcRenderer \u5f15\u5165\u62a5\u9519","permalink":"/docs/js/js-libs/electron/ipcRenderer"}}');var s=t(6070),o=t(8637);const r={},c="\u6253\u5305\u53c2\u6570\u8bf4\u660e",l={},a=[];function u(n){const e={code:"code",h1:"h1",header:"header",pre:"pre",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"\u6253\u5305\u53c2\u6570\u8bf4\u660e",children:"\u6253\u5305\u53c2\u6570\u8bf4\u660e"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-jsonc",children:'{\n\n  "build": {\n    "productName": "XXX", // \u9879\u76ee\u540d \u8fd9\u4e5f\u662f\u751f\u6210\u7684exe\u6587\u4ef6\u7684\u524d\u7f00\u540d\n    "appId": "com.aimooc.xxxxx", // \u5305\u540d\n    "copyright": "xxxx", // \u7248\u6743 \u4fe1\u606f\n    "directories": { // \u8f93\u51fa\u6587\u4ef6\u5939\n      "output": "builder"// \u9ed8\u8ba4\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684dist\n    },\n    "nsis": {\n      "oneClick": false, // \u662f\u5426\u4e00\u952e\u5b89\u88c5\n      "allowElevation": true, // \u5141\u8bb8\u8bf7\u6c42\u63d0\u5347\u3002 \u5982\u679c\u4e3afalse\uff0c\u5219\u7528\u6237\u5fc5\u987b\u4f7f\u7528\u63d0\u5347\u7684\u6743\u9650\u91cd\u65b0\u542f\u52a8\u5b89\u88c5\u7a0b\u5e8f\u3002\n      "allowToChangeInstallationDirectory": true, // \u5141\u8bb8\u4fee\u6539\u5b89\u88c5\u76ee\u5f55\n      "installerIcon": "./build/icons/aaa.ico", // \u5b89\u88c5\u56fe\u6807\u8def\u5f84\n      "uninstallerIcon": "./build/icons/bbb.ico", // \u5378\u8f7d\u56fe\u6807\n      "installerHeaderIcon": "./build/icons/aaa.ico", // \u5b89\u88c5\u65f6\u5934\u90e8\u56fe\u6807\n      "createDesktopShortcut": true, // \u521b\u5efa\u684c\u9762\u56fe\u6807\n      "createStartMenuShortcut": true, // \u521b\u5efa\u5f00\u59cb\u83dc\u5355\u56fe\u6807\n      "shortcutName": "xxxx", // \u56fe\u6807\u540d\u79f0\n      "include": "build/script/installer.nsh" // \u5305\u542b\u7684\u81ea\u5b9a\u4e49nsis\u811a\u672c,\u8fd9\u4e2a\u5bf9\u4e8e\u6784\u5efa\u9700\u6c42\u4e25\u683c\u5f97\u5b89\u88c5\u8fc7\u7a0b\u76f8\u5f53\u6709\u7528\u3002\n    },\n    // \u66f4\u65b0\u7528\u7684\u914d\u7f6e\uff0c\u4e3b\u8981\u662f\u4e3a\u4e86\u751f\u6210lastest.yaml\u914d\u7f6e\u6587\u4ef6\n    "publish": [\n      {\n        "provider": "generic", // \u670d\u52a1\u5668\u63d0\u4f9b\u5546 \u4e5f\u53ef\u4ee5\u662fGitHub\u7b49\u7b49\n        "url": "http://xxxxx/" // \u670d\u52a1\u5668\u5730\u5740\n      }\n    ],\n    "files": [\n      "./dist/main.js" // dist\u6587\u4ef6\u7684\u5165\u53e3\u4e3b\u6587\u4ef6\n    ],\n    "dmg": {\n      "contents": [\n        {\n          "x": 410,\n          "y": 150,\n          "type": "link",\n          "path": "/Applications"\n        },\n        {\n          "x": 130,\n          "y": 150,\n          "type": "file"\n        }\n      ]\n    },\n    "mac": {\n      "icon": "build/icons/icon.icns"\n    },\n    "win": {\n      "icon": "build/icons/aims.ico",\n      "target": [\n        {\n          "target": "nsis",\n          "arch": [\n            // \u6253\u51fa\u676532 bit + 64 bit\u7684\u5305(\u8fd9\u6837\u7684\u5b89\u88c5\u5305\u4f53\u79ef\u8f83\u5927\uff0c\u5efa\u8bae\u76f4\u63a5\u625332\u7684\u5305\u3002\n          // "x64", // \u4e00\u822c\u5efa\u8bae\u53bb\u6389\n            "ia32"\n          ]\n        }\n      ]\n    },\n    "linux": {\n      "icon": "build/icons"\n    }\n  }\n\n}\n'})})]})}function d(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},8637:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>c});var i=t(758);const s={},o=i.createContext(s);function r(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);