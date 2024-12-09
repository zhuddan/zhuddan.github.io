"use strict";(self.webpackChunkzhuddan_github_io=self.webpackChunkzhuddan_github_io||[]).push([[9514],{4045:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>q,contentTitle:()=>S,default:()=>E,frontMatter:()=>T,metadata:()=>n,toc:()=>C});const n=JSON.parse('{"id":"js/abortcontroller","title":"\u975edom\u73af\u5883\u4e0b\u4f7f\u7528abortcontroller","description":"\u5728\u4f7f\u7528 tarojs+react-query \u65f6\uff0c\u53d1\u73b0\u5c0f\u7a0b\u5e8f\u6ca1\u6709AbortController\u5bfc\u81f4react-query\u4e0d\u80fd\u6b63\u5e38\u8fd0\u884c\u3002","source":"@site/archived/js/abortcontroller.md","sourceDirName":"js","slug":"/js/abortcontroller","permalink":"/docs/js/abortcontroller","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"archived","previous":{"title":"js\u6a21\u5757\u8bf4\u660e","permalink":"/docs/js/modules"},"next":{"title":"tsconfig.json","permalink":"/docs/ts/tsconfig"}}');var o=t(6070),l=t(2790),a=t(758),s=t(3526),i=t(8946),c=t(5557),u=t(1409),d=t(7975),p=t(7948),h=t(3881);function b(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??function(e){return b(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:o}}=e;return{value:r,label:t,attributes:n,default:o}}))}(t);return function(e){const r=(0,p.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function m(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function v(e){let{queryString:r=!1,groupId:t}=e;const n=(0,c.W6)(),o=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,d.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(n.location.search);r.set(o,e),n.replace({...n.location,search:r.toString()})}),[o,n])]}function x(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,o=f(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:o}))),[i,c]=v({queryString:t,groupId:n}),[d,p]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,o]=(0,h.Dv)(t);return[n,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:n}),b=(()=>{const e=i??d;return m({value:e,tabValues:o})?e:null})();(0,u.A)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),p(e)}),[c,p,o]),tabValues:o}}var j=t(9699);const g={tabList:"tabList_RgFs",tabItem:"tabItem_GX7l"};function y(e){let{className:r,block:t,selectedValue:n,selectValue:l,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),d=e=>{const r=e.currentTarget,t=c.indexOf(r),o=a[t].value;o!==n&&(u(r),l(o))},p=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}r?.focus()};return(0,o.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},r),children:a.map((e=>{let{value:r,label:t,attributes:l}=e;return(0,o.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>c.push(e),onKeyDown:p,onClick:d,...l,className:(0,s.A)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function w(e){let{lazy:r,children:t,selectedValue:n}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,o.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function I(e){const r=x(e);return(0,o.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,o.jsx)(y,{...r,...e}),(0,o.jsx)(w,{...r,...e})]})}function A(e){const r=(0,j.A)();return(0,o.jsx)(I,{...e,children:b(e.children)},String(r))}const V={tabItem:"tabItem_TKiz"};function k(e){let{children:r,hidden:t,className:n}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.A)(V.tabItem,n),hidden:t,children:r})}const T={sidebar_position:2},S="\u975edom\u73af\u5883\u4e0b\u4f7f\u7528abortcontroller",q={},C=[{value:"\u4e0b\u8f7d abortcontroller-polyfill",id:"\u4e0b\u8f7d-abortcontroller-polyfill",level:2},{value:"\u5728\u5165\u53e3\u6587\u4ef6\u5bfc\u5165",id:"\u5728\u5165\u53e3\u6587\u4ef6\u5bfc\u5165",level:2}];function N(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"\u975edom\u73af\u5883\u4e0b\u4f7f\u7528abortcontroller",children:"\u975edom\u73af\u5883\u4e0b\u4f7f\u7528abortcontroller"})}),"\n",(0,o.jsxs)(r.p,{children:["\u5728\u4f7f\u7528 ",(0,o.jsx)(r.code,{children:"tarojs"}),"+",(0,o.jsx)(r.code,{children:"react-query"})," \u65f6\uff0c\u53d1\u73b0\u5c0f\u7a0b\u5e8f\u6ca1\u6709",(0,o.jsx)(r.code,{children:"AbortController"}),"\u5bfc\u81f4",(0,o.jsx)(r.code,{children:"react-query"}),"\u4e0d\u80fd\u6b63\u5e38\u8fd0\u884c\u3002"]}),"\n",(0,o.jsx)(r.h2,{id:"\u4e0b\u8f7d-abortcontroller-polyfill",children:"\u4e0b\u8f7d abortcontroller-polyfill"}),"\n",(0,o.jsxs)(A,{children:[(0,o.jsx)(k,{value:"npm",label:"npm",children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"  npm i abortcontroller-polyfill\n"})})}),(0,o.jsx)(k,{value:"yarn",label:"yarn",children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"  yarn add abortcontroller-polyfill\n"})})}),(0,o.jsx)(k,{value:"pnpm",label:"pnpm",default:!0,children:(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"  pnpm add abortcontroller-polyfill\n"})})})]}),"\n",(0,o.jsx)(r.h2,{id:"\u5728\u5165\u53e3\u6587\u4ef6\u5bfc\u5165",children:"\u5728\u5165\u53e3\u6587\u4ef6\u5bfc\u5165"}),"\n",(0,o.jsx)(r.admonition,{type:"note",children:(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"abortcontroller"}),"\u5fc5\u987b\u5728\u5165\u53e3\u9876\u90e8\u5bfc\u5165\uff01"]})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-tsx",metastring:'title="src/app.tsx"',children:"// highlight-start\nimport abortcontroller from 'abortcontroller-polyfill/dist/abortcontroller'\n/* eslint-disable import/first */\nif (typeof window !== 'undefined' && !window.AbortController) {\n  globalThis.AbortController = abortcontroller\n}\n// highlight-end\nimport { StrictMode } from 'react'\nimport './app.scss'\nimport '@/utils/printAppInfo'\n\nfunction App({ children }: { children: React.ReactNode }) {\n  return (\n    <StrictMode>\n      {children}\n    </StrictMode>\n  )\n}\n\nexport default App\n"})})]})}function E(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(N,{...e})}):N(e)}},2790:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>s});var n=t(758);const o={},l=n.createContext(o);function a(e){const r=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);