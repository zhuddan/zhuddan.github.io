"use strict";(self.webpackChunkzhuddan_github_io=self.webpackChunkzhuddan_github_io||[]).push([[5645],{7698:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"misc/git/git","title":"git \u5e38\u7528\u547d\u4ee4","description":"git \u521d\u59cb\u5316\u914d\u7f6e","source":"@site/archived/misc/git/git.md","sourceDirName":"misc/git","slug":"/misc/git/","permalink":"/docs/misc/git/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"git","permalink":"/docs/tags/git"}],"version":"current","frontMatter":{"tags":["git"]},"sidebar":"archived","previous":{"title":"git","permalink":"/docs/category/git"},"next":{"title":"github \u5de5\u4f5c\u6d41","permalink":"/docs/misc/git/github-workflows"}}');var l=t(6070),s=t(8637);const o={tags:["git"]},c="git \u5e38\u7528\u547d\u4ee4",r={},a=[{value:"git \u521d\u59cb\u5316\u914d\u7f6e",id:"git-\u521d\u59cb\u5316\u914d\u7f6e",level:2},{value:"git \u4ee3\u7406\u914d\u7f6e \u9488\u5bf9\u68af\u5b50",id:"git-\u4ee3\u7406\u914d\u7f6e-\u9488\u5bf9\u68af\u5b50",level:2},{value:"git \u5927\u5c0f\u5199\u4e0d\u654f\u611f",id:"git-\u5927\u5c0f\u5199\u4e0d\u654f\u611f",level:2},{value:"\u5ffd\u7565\u5df2\u7ecf\u5728\u4ed3\u5e93\u4e2d\u7684\u6587\u4ef6",id:"\u5ffd\u7565\u5df2\u7ecf\u5728\u4ed3\u5e93\u4e2d\u7684\u6587\u4ef6",level:2}];function g(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"git-\u5e38\u7528\u547d\u4ee4",children:"git \u5e38\u7528\u547d\u4ee4"})}),"\n",(0,l.jsx)(n.h2,{id:"git-\u521d\u59cb\u5316\u914d\u7f6e",children:"git \u521d\u59cb\u5316\u914d\u7f6e"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'git config --global user.name "zd"\ngit config --global user.email "yobaci@163.com"\n'})}),"\n",(0,l.jsx)(n.h2,{id:"git-\u4ee3\u7406\u914d\u7f6e-\u9488\u5bf9\u68af\u5b50",children:"git \u4ee3\u7406\u914d\u7f6e \u9488\u5bf9\u68af\u5b50"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Failed to connect to github.com port 443 after 21072 ms: Timed out"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'git config --global http.sslVerify "false"\ngit config --global https.sslVerify "false"\n# \u8bbe\u7f6e\u4ee3\u7406\ngit config --global http.proxy 127.0.0.1:7890\ngit config --global https.proxy 127.0.0.1:7890\n# \u53d6\u6d88\u4ee3\u7406\ngit config --global --unset http.proxy\ngit config --global --unset https.proxy\n\n# \u53d6\u6d88\u5168\u5c40\u4ee3\u7406\uff1a\ngit config --global --unset http.proxy\ngit config --global --unset https.proxy\n'})}),"\n",(0,l.jsx)(n.h2,{id:"git-\u5927\u5c0f\u5199\u4e0d\u654f\u611f",children:"git \u5927\u5c0f\u5199\u4e0d\u654f\u611f"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"git config core.ignorecase  false\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5ffd\u7565\u5df2\u7ecf\u5728\u4ed3\u5e93\u4e2d\u7684\u6587\u4ef6",children:"\u5ffd\u7565\u5df2\u7ecf\u5728\u4ed3\u5e93\u4e2d\u7684\u6587\u4ef6"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5728 ",(0,l.jsx)(n.code,{children:"gitignore"})," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u8981\u5ffd\u7565\u7684\u6587\u4ef6\u6216\u6587\u4ef6\u5939\u8def\u5f84\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",metastring:'title=".gitignore"',children:"\n/path/to/ignored_file\n\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"\u5220\u9664\u6587\u4ef6\u5e76\u4fdd\u7559\u672c\u5730\u526f\u672c\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"\ngit rm --cached /path/to/ignored_file\n\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsx)(n.li,{children:"\u5220\u9664\u6587\u4ef6\u5e76\u4ece\u672c\u5730\u548c\u8fdc\u7a0b\u4ed3\u5e93\u4e2d\u5b8c\u5168\u79fb\u9664"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"\ngit rm -r --cached /path/to/ignored_file\n\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(g,{...e})}):g(e)}},8637:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(758);const l={},s=i.createContext(l);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);