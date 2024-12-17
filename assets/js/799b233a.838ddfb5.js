"use strict";(self.webpackChunkzhuddan_github_io=self.webpackChunkzhuddan_github_io||[]).push([[7119],{3779:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"ts/types","title":"\u7c7b\u578b\u4f53\u64cd","description":"1. \u67d0\u4e2a\u7c7b\u578b\u524d\u9762\u76f4\u63a5\u52a0good_\u524d\u7f00","source":"@site/archived/ts/types.md","sourceDirName":"ts","slug":"/ts/types","permalink":"/docs/ts/types","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"archived","previous":{"title":"\u7c7b\u578b\u5b88\u536b\u51fd\u6570","permalink":"/docs/ts/type-predicate-function"},"next":{"title":"react","permalink":"/docs/category/react"}}');var d=s(6070),r=s(2790);const i={},a="\u7c7b\u578b\u4f53\u64cd",l={},c=[{value:"1. \u67d0\u4e2a\u7c7b\u578b\u524d\u9762\u76f4\u63a5\u52a0<code>good_</code>\u524d\u7f00",id:"1-\u67d0\u4e2a\u7c7b\u578b\u524d\u9762\u76f4\u63a5\u52a0good_\u524d\u7f00",level:2},{value:"2. \u628a\u6a2a\u7ebf\u547d\u540d\u7684\u5b57\u7b26\u4e32\u7c7b\u540d\u8f6c\u5316\u4e3a\u9a7c\u5cf0\u547d\u540d CamelCase",id:"2-\u628a\u6a2a\u7ebf\u547d\u540d\u7684\u5b57\u7b26\u4e32\u7c7b\u540d\u8f6c\u5316\u4e3a\u9a7c\u5cf0\u547d\u540d-camelcase",level:2},{value:"3. \u5bf9\u8c61\u5408\u5e76",id:"3-\u5bf9\u8c61\u5408\u5e76",level:2},{value:"4. \u70b9\u70b9\u83b7\u53d6\u5bf9\u8c61\u7684key",id:"4-\u70b9\u70b9\u83b7\u53d6\u5bf9\u8c61\u7684key",level:2},{value:"5. Merge\u7c7b\u578b",id:"5-merge\u7c7b\u578b",level:2},{value:"6. \u6307\u5b9a\u67d0\u4e00\u4e2a\u5c5e\u6027\u4e3a\u5fc5\u9009\u53c2\u6570",id:"6-\u6307\u5b9a\u67d0\u4e00\u4e2a\u5c5e\u6027\u4e3a\u5fc5\u9009\u53c2\u6570",level:2},{value:"7. \u53bb\u9664undefined",id:"7-\u53bb\u9664undefined",level:2},{value:"8. \u53bb\u9664 readonly",id:"8-\u53bb\u9664-readonly",level:2},{value:"9. \u7c7b\u578b",id:"9-\u7c7b\u578b",level:2},{value:"10. \u83b7\u53d6\u51fd\u6570key",id:"10-\u83b7\u53d6\u51fd\u6570key",level:2},{value:"11. \u83b7\u53d6\u51fd\u6570\u540d\u79f0",id:"11-\u83b7\u53d6\u51fd\u6570\u540d\u79f0",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"\u7c7b\u578b\u4f53\u64cd",children:"\u7c7b\u578b\u4f53\u64cd"})}),"\n",(0,d.jsxs)(n.h2,{id:"1-\u67d0\u4e2a\u7c7b\u578b\u524d\u9762\u76f4\u63a5\u52a0good_\u524d\u7f00",children:["1. \u67d0\u4e2a\u7c7b\u578b\u524d\u9762\u76f4\u63a5\u52a0",(0,d.jsx)(n.code,{children:"good_"}),"\u524d\u7f00"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type AppendGood<T> = {\n  [P in keyof T as `good_${string & P}`]: T[P];\n}\n"})}),"\n",(0,d.jsx)(n.h2,{id:"2-\u628a\u6a2a\u7ebf\u547d\u540d\u7684\u5b57\u7b26\u4e32\u7c7b\u540d\u8f6c\u5316\u4e3a\u9a7c\u5cf0\u547d\u540d-camelcase",children:"2. \u628a\u6a2a\u7ebf\u547d\u540d\u7684\u5b57\u7b26\u4e32\u7c7b\u540d\u8f6c\u5316\u4e3a\u9a7c\u5cf0\u547d\u540d CamelCase"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export type CamelCase<S extends string> =\n  S extends `${infer Head}-${infer Rest}`\n    ? `${Lowercase<Head>}${CamelCase<Capitalize<Rest>>}`\n    : S\n\ntype A = 'list-change'\n\ntype B = CamelCase<A> // ==> listChange\n\n"})}),"\n",(0,d.jsx)(n.h2,{id:"3-\u5bf9\u8c61\u5408\u5e76",children:"3. \u5bf9\u8c61\u5408\u5e76"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"export type Merge<A, B> = {\n  [K in keyof (A & B)]: K extends keyof B\n    ? B[K]\n    : K extends keyof A\n      ? A[K]\n      : never\n}\n"})}),"\n",(0,d.jsx)(n.h2,{id:"4-\u70b9\u70b9\u83b7\u53d6\u5bf9\u8c61\u7684key",children:"4. \u70b9\u70b9\u83b7\u53d6\u5bf9\u8c61\u7684key"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type Primitive = string | boolean | number | bigint | symbol | undefined | null\n\ntype DeepKeys<T, P extends string | number | symbol = ''> = {\n  [K in keyof T]-?: T[K] extends Primitive\n    ? `${P extends '' ? '' : `${P & string}.`}${K & string}`\n    : `${P extends '' ? '' : `${P & string}.`}${K & string}` | DeepKeys<T[K], `${P & string}.${K & string}`>\n}[keyof T]\n\ninterface Data {\n  foo: {\n    bar: {\n      value: 'foobar'\n    }\n    count: 6\n    included: true\n  }\n  hello: 'world'\n}\n\ntype Keys = DeepKeys<Data>\n"})}),"\n",(0,d.jsx)(n.h2,{id:"5-merge\u7c7b\u578b",children:"5. Merge\u7c7b\u578b"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type Merge<A, B> = {\n  [K in keyof (A & B)]: K extends keyof B\n    ? B[K]\n    : K extends keyof A\n      ? A[K]\n      : never\n}\n"})}),"\n",(0,d.jsx)(n.h2,{id:"6-\u6307\u5b9a\u67d0\u4e00\u4e2a\u5c5e\u6027\u4e3a\u5fc5\u9009\u53c2\u6570",children:"6. \u6307\u5b9a\u67d0\u4e00\u4e2a\u5c5e\u6027\u4e3a\u5fc5\u9009\u53c2\u6570"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type MakeOptionalPropertyRequired<T, K extends keyof T> = T & Required<Pick<T, K>>\n"})}),"\n",(0,d.jsx)(n.h2,{id:"7-\u53bb\u9664undefined",children:"7. \u53bb\u9664undefined"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type WithoutUndefined<T> = T extends undefined ? never : T\n"})}),"\n",(0,d.jsx)(n.h2,{id:"8-\u53bb\u9664-readonly",children:"8. \u53bb\u9664 readonly"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type RemoveReadonly<T> = {\n  -readonly [K in keyof T]: T[K];\n}\n"})}),"\n",(0,d.jsx)(n.h2,{id:"9-\u7c7b\u578b",children:"9. \u7c7b\u578b"}),"\n",(0,d.jsx)(n.p,{children:"\u4e09\u4e2ats\u4e2d\u7684\u7c7b\u578b"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type c = string\n\ntype d = c[]\n\ntype e = number[]\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u6211\u671f\u671b\u628atype e \u6539\u4e3a\u4e00\u4e2a\u6cdb\u578b\uff0c\u63a5\u53d7d\uff0c\u7136\u540ee\u7684\u6bcf\u4e00\u9879\u90fd\u662fd\u7684\u6bcf\u4e00\u9879\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type c = string\ntype d = c[]\ntype e<T extends string[]> = {\n  [K in keyof T]: T[K]['length'];\n}\n\n// \u793a\u4f8b\u7528\u6cd5\nconst exampleArray: d = ['apple', 'banana', 'orange']\nconst result: e<d> = [5, 6, 6] // e<d> \u7684\u6bcf\u4e00\u9879\u90fd\u662f d \u4e2d\u6bcf\u4e00\u9879\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\n"})}),"\n",(0,d.jsx)(n.h2,{id:"10-\u83b7\u53d6\u51fd\u6570key",children:"10. \u83b7\u53d6\u51fd\u6570key"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type GetFunctionKeys<T> = {\n  [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never\n}[keyof T]\ntype Fn = GetFunctionKeys<{\n  done: () => void\n  msg: () => void\n  name: void\n}> // ===> 'done' | 'msg'\n"})}),"\n",(0,d.jsx)(n.h2,{id:"11-\u83b7\u53d6\u51fd\u6570\u540d\u79f0",children:"11. \u83b7\u53d6\u51fd\u6570\u540d\u79f0"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"type FunctionKeys<T> = {\n  [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never;\n}[keyof T]\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},2790:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var t=s(758);const d={},r=t.createContext(d);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);