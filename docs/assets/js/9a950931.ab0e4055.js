"use strict";(self.webpackChunkzhuddan_github_io=self.webpackChunkzhuddan_github_io||[]).push([[1762],{8701:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"ts/type-predicate-function","title":"\u7c7b\u578b\u5b88\u536b\u51fd\u6570","description":"\u4f7f\u7528 A as B \u5b9e\u73b0\u81ea\u5b9a\u4e49\u7c7b\u578b\u4fdd\u62a4\u51fd\u6570","source":"@site/archived/ts/type-predicate-function.md","sourceDirName":"ts","slug":"/ts/type-predicate-function","permalink":"/docs/ts/type-predicate-function","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"archived","previous":{"title":"\u9519\u8bef\u5904\u7406","permalink":"/docs/ts/promise-error"},"next":{"title":"\u7c7b\u578b\u4f53\u64cd","permalink":"/docs/ts/types"}}');var a=t(6070),o=t(2790);const s={},i="\u7c7b\u578b\u5b88\u536b\u51fd\u6570",c={},d=[];function u(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"\u7c7b\u578b\u5b88\u536b\u51fd\u6570",children:"\u7c7b\u578b\u5b88\u536b\u51fd\u6570"})}),"\n",(0,a.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"A as B"})," \u5b9e\u73b0\u81ea\u5b9a\u4e49\u7c7b\u578b\u4fdd\u62a4\u51fd\u6570"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"// \u81ea\u5b9a\u4e49\u7c7b\u578b\u4fdd\u62a4\u51fd\u6570\r\nfunction isWxLoginData1(data: WxLoginData): data is WxLoginData1 {\r\n  return (data as WxLoginData1).code !== undefined\r\n}\r\n\r\nfunction processLoginData(data: WxLoginData) {\r\n  // \u4f7f\u7528\u81ea\u5b9a\u4e49\u7c7b\u578b\u4fdd\u62a4\u51fd\u6570\r\n  if (isWxLoginData1(data)) {\r\n    console.log(data.code)\r\n  }\r\n  else {\r\n    console.log((data as WxLoginData2).phone)\r\n  }\r\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},2790:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(758);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);