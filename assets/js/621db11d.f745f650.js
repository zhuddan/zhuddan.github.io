"use strict";(self.webpackChunkzhuddan_github_io=self.webpackChunkzhuddan_github_io||[]).push([[4212],{8667:(t,e,s)=>{s.r(e),s.d(e,{default:()=>m});s(758);var o=s(3526),a=s(9887),r=s(7898),u=s(8176),n=s(6245),i=s(1096),l=s(3982),h=s(5721);const c={authorListItem:"authorListItem_OPzq"};var g=s(6070);function p(t){let{author:e}=t;return(0,g.jsx)("li",{className:c.authorListItem,children:(0,g.jsx)(h.A,{as:"h2",author:e,count:e.count})})}function d(t){let{authors:e}=t;return(0,g.jsx)("section",{className:(0,o.A)("margin-vert--lg",c.authorsListSection),children:(0,g.jsx)("ul",{children:e.map((t=>(0,g.jsx)(p,{author:t},t.key)))})})}function m(t){let{authors:e,sidebar:s}=t;const h=(0,u.uz)();return(0,g.jsxs)(a.e3,{className:(0,o.A)(r.G.wrapper.blogPages,r.G.page.blogAuthorsListPage),children:[(0,g.jsx)(a.be,{title:h}),(0,g.jsx)(i.A,{tag:"blog_authors_list"}),(0,g.jsxs)(n.A,{sidebar:s,children:[(0,g.jsx)(l.A,{as:"h1",children:h}),(0,g.jsx)(d,{authors:e})]})]})}},8176:(t,e,s)=>{s.d(e,{Y4:()=>h,np:()=>l,uz:()=>i,wI:()=>n});s(758);var o=s(3462),a=s(6852),r=s(6070);function u(){const{selectMessage:t}=(0,a.W)();return e=>t(e,(0,o.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}function n(t){const e=u();return(0,o.T)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:e(t.count),authorName:t.name||t.key})}const i=()=>(0,o.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function l(){return(0,r.jsx)(o.A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}function h(){return(0,r.jsx)(o.A,{id:"theme.blog.author.noPosts",description:"The text for authors with 0 blog post",children:"This author has not written any posts yet."})}}}]);