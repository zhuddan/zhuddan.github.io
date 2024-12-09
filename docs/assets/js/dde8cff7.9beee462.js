"use strict";(self.webpackChunkzhuddan_github_io=self.webpackChunkzhuddan_github_io||[]).push([[6846],{5895:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"ts/assertion","title":"\u65ad\u8a00","description":"1. \u7c7b\u578b\u65ad\u8a00 (as)\uff1a \u8fd9\u662f\u6700\u5e38\u89c1\u7684\u7c7b\u578b\u65ad\u8a00\u5f62\u5f0f\u3002\u5b83\u544a\u8bc9\u7f16\u8bd1\u5668\uff0c\u4f60\u786e\u5207\u5730\u77e5\u9053\u4e00\u4e2a\u503c\u7684\u7c7b\u578b\uff0c\u5e76\u5e0c\u671b\u5728\u8fd9\u4e2a\u4e0a\u4e0b\u6587\u4e2d\u5c06\u5176\u89c6\u4e3a\u8fd9\u4e2a\u7c7b\u578b\u3002","source":"@site/archived/ts/assertion.md","sourceDirName":"ts","slug":"/ts/assertion","permalink":"/docs/ts/assertion","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"archived","previous":{"title":"tsconfig.json","permalink":"/docs/ts/tsconfig"},"next":{"title":"\u62d3\u5c55\u7b2c\u4e09\u65b9\u5e93\u58f0\u660e","permalink":"/docs/ts/expand"}}');var r=t(6070),i=t(2790);const o={},c="\u65ad\u8a00",l={},a=[];function d(n){const e={code:"code",h1:"h1",header:"header",li:"li",ol:"ol",pre:"pre",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"\u65ad\u8a00",children:"\u65ad\u8a00"})}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u7c7b\u578b\u65ad\u8a00 (as)\uff1a \u8fd9\u662f\u6700\u5e38\u89c1\u7684\u7c7b\u578b\u65ad\u8a00\u5f62\u5f0f\u3002\u5b83\u544a\u8bc9\u7f16\u8bd1\u5668\uff0c\u4f60\u786e\u5207\u5730\u77e5\u9053\u4e00\u4e2a\u503c\u7684\u7c7b\u578b\uff0c\u5e76\u5e0c\u671b\u5728\u8fd9\u4e2a\u4e0a\u4e0b\u6587\u4e2d\u5c06\u5176\u89c6\u4e3a\u8fd9\u4e2a\u7c7b\u578b\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"const someValue: any = 'this is a string'\r\nconst strLength: number = (someValue as string).length\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"2",children:["\n",(0,r.jsx)(e.li,{children:"\u975e\u7a7a\u65ad\u8a00 (!)\uff1a \u975e\u7a7a\u65ad\u8a00\u544a\u8bc9 TypeScript \u4e00\u4e2a\u8868\u8fbe\u5f0f\u7684\u503c\u4e0d\u4e3a null \u6216 undefined\u3002\u5b83\u53ef\u4ee5\u7528\u4e8e\u4ece\u4e00\u4e2a\u53ef\u80fd\u4e3a null \u6216 undefined \u7684\u503c\u4e2d\u53bb\u9664\u8fd9\u4e9b\u7c7b\u578b\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"function getStringLength(input: string | null | undefined): number {\r\n  // \u975e\u7a7a\u65ad\u8a00\r\n  return input!.length\r\n}\r\n\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"3",children:["\n",(0,r.jsx)(e.li,{children:"\u7c7b\u578b\u65ad\u8a00\u51fd\u6570\uff1a TypeScript \u4e5f\u5141\u8bb8\u901a\u8fc7\u5b9a\u4e49\u7279\u5b9a\u5f62\u5f0f\u7684\u51fd\u6570\u6765\u6267\u884c\u81ea\u5b9a\u4e49\u7684\u7c7b\u578b\u65ad\u8a00\u3002\u8fd9\u79cd\u65b9\u6cd5\u5bf9\u4e8e\u590d\u6742\u7684\u7c7b\u578b\u8f6c\u6362\u6216\u6821\u9a8c\u975e\u5e38\u6709\u7528\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"function assert(condition: any, msg?: string): asserts condition {\r\n  if (!condition) {\r\n    throw new Error(msg || 'Assertion failed')\r\n  }\r\n}\r\n\r\nconst x: number | null = Math.random() > 0.5 ? 10 : null\r\nassert(x !== null)\r\nconst y: number = x // TypeScript \u73b0\u5728\u77e5\u9053 x \u4e0d\u53ef\u80fd\u4e3a null\n"})})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},2790:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>c});var s=t(758);const r={},i=s.createContext(r);function o(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);