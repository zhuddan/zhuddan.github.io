"use strict";(self.webpackChunkzhuddan_github_io=self.webpackChunkzhuddan_github_io||[]).push([[1452],{1241:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"react/overreacted","title":"\u8fc7\u5ea6\u53cd\u5e94","description":"state \u53d8\u5316\u65f6","source":"@site/archived/react/overreacted.mdx","sourceDirName":"react","slug":"/react/overreacted","permalink":"/docs/react/overreacted","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"archived","previous":{"title":"react","permalink":"/docs/category/react"},"next":{"title":"\u8def\u7531\u62e6\u622a","permalink":"/docs/react/protected-route"}}');var o=t(6070),s=t(8637),a=t(3061),c=t(3526),l=t(758);const i=function(e){let{children:n,showCodeEditor:t=!0,template:r="vanilla-ts",ReactStrictMode:s=!0}=e;const i=(0,l.useMemo)((()=>{function e(n){if(n.props.children){const t=n.props.children;if("string"!=typeof t)return e(t);{const e=n.props.className.replace("language-","")||"typescript",t=n.props.children,r=n.props.metastring.match(/title="([^"]+)"/)?.[1],o=n.props.metastring.match(/entry="([^"]+)"/)?.[1],s=n.props.metastring.match(/readOnly="([^"]+)"/)?.[1];return{language:e,code:t,fileName:r,entry:o,readOnly:s}}}}return function(n){const t={},r=Array.isArray(n)?n:[n];for(let o=0;o<r.length;o++){const n=e(r[o]);if(n){const e=n.entry,r=n.entry;t[n.fileName]={code:n.code,active:e,readOnly:!!r},e&&("html"!==n.language?t["index.ts"]={code:`import './${n.fileName}'`,hidden:!0,active:!1}:t["index.ts"]={code:" ",hidden:!0,active:!1})}}return t}(n)}),[n]);return console.log(i),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a.l5,{files:{...i,...r?.includes("react")&&!1===s?{"/index.js":{code:'\n              import React from "react";\n              import ReactDOM from "react-dom/client";\n              import App from "./App";\n              ReactDOM.createRoot(document.getElementById(\'root\')).render(\n                <App />,\n              );\n             ',hidden:!0}}:{}},theme:"light",template:r,customSetup:{entry:'console.log("x")'},options:{},children:(0,o.jsxs)(a.am,{className:(0,c.A)("md:!grid  grid-cols-2 grid-rows-2 md:h-[500px]","grid-rows-[auto_1fr]"),children:[t&&(0,o.jsx)(a.cW,{showTabs:!0,className:"row-span-3 md:!h-full",showRunButton:!0}),(0,o.jsx)(a.G5,{showOpenInCodeSandbox:!1,showNavigator:!1,className:"col-start-2"}),(0,o.jsx)(a.X2,{showHeader:!0,className:"row-start-2 col-start-2 md:!h-full"})]})})})},d={},u="\u8fc7\u5ea6\u53cd\u5e94",p={},m=[{value:"state \u53d8\u5316\u65f6",id:"state-\u53d8\u5316\u65f6",level:2},{value:"state\u53d8\u5316\u65f6,\u4e0d\u4f9d\u8d56state\u7684\u5b50\u7ec4\u4ef6",id:"state\u53d8\u5316\u65f6\u4e0d\u4f9d\u8d56state\u7684\u5b50\u7ec4\u4ef6",level:2},{value:"props \u53d8\u5316\u65f6",id:"props-\u53d8\u5316\u65f6",level:2},{value:"context \u53d8\u5316\u65f6",id:"context-\u53d8\u5316\u65f6",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"\u8fc7\u5ea6\u53cd\u5e94",children:"\u8fc7\u5ea6\u53cd\u5e94"})}),"\n","\n",(0,o.jsx)(n.h2,{id:"state-\u53d8\u5316\u65f6",children:"state \u53d8\u5316\u65f6"}),"\n",(0,o.jsx)(i,{template:"react",ReactStrictMode:!1,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="App.js"',children:"import { useState, useEffect } from 'react'\n\nexport default function App() {\n  const [value, setValue] = useState('')\n  useEffect(() => {\n    console.log('render app')\n  })\n  return (\n    <input\n      placeholder=\"please input\"\n      onChange={e => setValue(e.currentTarget.value)}\n      value={value}\n    />\n  )\n}\n"})})}),"\n",(0,o.jsx)(n.h2,{id:"state\u53d8\u5316\u65f6\u4e0d\u4f9d\u8d56state\u7684\u5b50\u7ec4\u4ef6",children:"state\u53d8\u5316\u65f6,\u4e0d\u4f9d\u8d56state\u7684\u5b50\u7ec4\u4ef6"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u9664",(0,o.jsx)(n.code,{children:"memo"}),"\u7684\u7ec4\u4ef6",(0,o.jsx)(n.code,{children:"<Woo/>"}),"\u4e4b\u5916\uff0c\u5176\u4ed6\u7ec4\u4ef6\u90fd\u4f1a\u6e32\u67d3"]}),"\n"]}),"\n",(0,o.jsxs)(i,{template:"react",ReactStrictMode:!1,children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="App.js"',children:"  import { useState } from 'react'\n  import Bar from './bar.js'\n  import Woo from './woo.js'\n\n  export default function App() {\n    const [value, setValue] = useState('')\n    return (\n      <>\n        <input\n          placeholder=\"please input\"\n          onChange={e => setValue(e.currentTarget.value)}\n          value={value}\n        />\n        <Bar />\n        <Woo />\n      </>\n    )\n  }\n"})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="bar.js"',children:"  import { memo, useEffect } from 'react'\n\n  function Bar() {\n    useEffect(() => {\n      console.log('render bar')\n    })\n    return <h1>bar</h1>\n  }\n\n  export default Bar\n"})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="woo.js"',children:"  import { memo, useEffect } from 'react'\n  function Woo() {\n    useEffect(() => {\n      console.log('render woo')\n    })\n    return <h1>woo</h1>\n  }\n\n  export default memo(Woo)\n"})})]}),"\n",(0,o.jsx)(n.h2,{id:"props-\u53d8\u5316\u65f6",children:"props \u53d8\u5316\u65f6"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u9664",(0,o.jsx)(n.code,{children:"memo"}),"\u7684\u7ec4\u4ef6",(0,o.jsx)(n.code,{children:"<Woo/>"}),"\u4e4b\u5916\uff0c\u5176\u4ed6\u7ec4\u4ef6\u90fd\u4f1a\u6e32\u67d3"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"<Foo/>"}),"\u7ec4\u4ef6\u4e0d\u63a5\u6536\u4efb\u4f55",(0,o.jsx)(n.code,{children:"props"}),", ",(0,o.jsx)(n.a,{href:"#state%E5%8F%98%E5%8C%96%E6%97%B6%E4%B8%8D%E4%BE%9D%E8%B5%96state%E7%9A%84%E5%AD%90%E7%BB%84%E4%BB%B6",children:"\u53c2\u8003"}),"\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(i,{template:"react",ReactStrictMode:!1,children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="App.js"',children:"  import { useEffect, useState } from 'react'\n  import Bar from './bar.js'\n  import Woo from './woo.js'\n  import Foo from './foo.js'\n\n  export default function App() {\n    const [value, setValue] = useState('')\n    return (\n      <>\n        <input\n          placeholder=\"please input\"\n          onChange={e => setValue(e.currentTarget.value)}\n          value={value}\n        />\n        <Bar name={value} />\n        <Foo />\n        <Woo />\n      </>\n    )\n  }\n"})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="bar.js"',children:"  import { useEffect } from 'react'\n  export default function Bar({ name }) {\n    useEffect(() => {\n      console.log('render bar')\n    })\n    return <h1>{name}</h1>\n  }\n"})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="foo.js"',children:"  import { useEffect } from 'react'\n\n  function Foo() {\n    useEffect(() => {\n      console.log('render foo')\n    })\n    return <h1>foo</h1>\n  }\n\n  export default Foo\n"})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="woo.js"',children:"  import { memo, useEffect } from 'react'\n\n  function Woo() {\n    useEffect(() => {\n      console.log('render woo')\n    })\n    return <h1>woo</h1>\n  }\n\n  export default memo(Woo)\n"})})]}),"\n",(0,o.jsx)(n.h2,{id:"context-\u53d8\u5316\u65f6",children:"context \u53d8\u5316\u65f6"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["context\u672c\u8d28\u4e0a\u4e5f\u662f\u4e00\u79cd",(0,o.jsx)(n.a,{href:"https://react.dev/reference/react/useContext#passing-data-deeply-into-the-tree",children:"props"}),"\uff0c\u53ea\u662f\u4e0d\u7528\u663e\u5f0f\u7684\u4f20\u9012props\uff0c\u6240\u4ee5\u5b83\u7684\u66f4\u65b0\u60c5\u51b5\u548c",(0,o.jsx)(n.code,{children:"props"}),"\u662f\u4e00\u6837\u7684"]}),"\n"]}),"\n",(0,o.jsxs)(i,{template:"react",ReactStrictMode:!1,children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="App.js"',children:"  import { createContext, useContext, useState } from 'react'\n  import { Context } from './context'\n  import Bar from './bar'\n  import Foo from './foo'\n  import Woo from './woo'\n\n  export default function App() {\n    const [value, setValue] = useState('')\n    return (\n      <>\n        <input\n          placeholder=\"please input\"\n          onChange={e => setValue(e.currentTarget.value)}\n          value={value}\n        />\n        <Context.Provider value={value}>\n          <Bar />\n          <Woo />\n        </Context.Provider>\n        <Foo />\n        <Woo />\n      </>\n    )\n  }\n"})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="context.js"',children:"  import { createContext } from 'react'\n  \n  export const Context = createContext(null)\n"})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="foo.js"',children:"  import { useEffect } from 'react'\n\n  function Foo() {\n    useEffect(() => {\n      console.log('render foo')\n    })\n    return <h1>foo</h1>\n  }\n\n  export default Foo\n"})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="bar.js"',children:"  import { Context } from './context'\n  import { useContext, useEffect } from 'react'\n  \n  export default function Bar({ name }) {\n    const value = useContext(Context)\n    useEffect(() => {\n      console.log('render bar')\n    })\n    return <h1>{value}</h1>\n  }\n"})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="woo.js"',children:"  import { memo, useEffect } from 'react'\n\n  function Woo() {\n    useEffect(() => {\n      console.log('render woo')\n    })\n    return <h1>woo</h1>\n  }\n\n  export default memo(Woo)\n"})})]})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);