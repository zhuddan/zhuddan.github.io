"use strict";(self.webpackChunkzhuddan_github_io=self.webpackChunkzhuddan_github_io||[]).push([[1762],{3551:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"ts/type-predicate-function","title":"\u7c7b\u578b\u5b88\u536b\u51fd\u6570","description":"\u4f7f\u7528 A as B \u5b9e\u73b0\u81ea\u5b9a\u4e49\u7c7b\u578b\u4fdd\u62a4\u51fd\u6570","source":"@site/archived/ts/type-predicate-function.md","sourceDirName":"ts","slug":"/ts/type-predicate-function","permalink":"/docs/ts/type-predicate-function","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"archived","previous":{"title":"\u9519\u8bef\u5904\u7406","permalink":"/docs/ts/promise-error"},"next":{"title":"\u7c7b\u578b\u4f53\u64cd","permalink":"/docs/ts/types"}}');var o=t(6070),s=t(2790);const r={},i="\u7c7b\u578b\u5b88\u536b\u51fd\u6570",c={},d=[];function u(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"\u7c7b\u578b\u5b88\u536b\u51fd\u6570",children:"\u7c7b\u578b\u5b88\u536b\u51fd\u6570"})}),"\n",(0,o.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"A as B"})," \u5b9e\u73b0\u81ea\u5b9a\u4e49\u7c7b\u578b\u4fdd\u62a4\u51fd\u6570"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// \u81ea\u5b9a\u4e49\u7c7b\u578b\u4fdd\u62a4\u51fd\u6570\nfunction isWxLoginData1(data: WxLoginData): data is WxLoginData1 {\n  return (data as WxLoginData1).code !== undefined\n}\n\nfunction processLoginData(data: WxLoginData) {\n  // \u4f7f\u7528\u81ea\u5b9a\u4e49\u7c7b\u578b\u4fdd\u62a4\u51fd\u6570\n  if (isWxLoginData1(data)) {\n    console.log(data.code)\n  }\n  else {\n    console.log((data as WxLoginData2).phone)\n  }\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},2790:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var a=t(758);const o={},s=a.createContext(o);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);