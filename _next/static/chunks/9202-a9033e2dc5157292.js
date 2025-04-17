"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9202],{5845:(e,t,n)=>{n.d(t,{i:()=>i});var r=n(12115),u=n(39033);function i({prop:e,defaultProp:t,onChange:n=()=>{}}){let[i,o]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[i]=n,o=r.useRef(i),a=(0,u.c)(t);return r.useEffect(()=>{o.current!==i&&(a(i),o.current=i)},[i,o,a]),n}({defaultProp:t,onChange:n}),a=void 0!==e,l=a?e:i,s=(0,u.c)(n);return[l,r.useCallback(t=>{if(a){let n="function"==typeof t?t(e):t;n!==e&&s(n)}else o(t)},[a,e,o,s])]}},6101:(e,t,n)=>{n.d(t,{s:()=>o,t:()=>i});var r=n(12115);function u(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function i(...e){return t=>{let n=!1,r=e.map(e=>{let r=u(e,t);return n||"function"!=typeof r||(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];"function"==typeof n?n():u(e[t],null)}}}}function o(...e){return r.useCallback(i(...e),e)}},28905:(e,t,n)=>{n.d(t,{C:()=>o});var r=n(12115),u=n(6101),i=n(52712),o=e=>{let{present:t,children:n}=e,o=function(e){var t,n;let[u,o]=r.useState(),l=r.useRef({}),s=r.useRef(e),c=r.useRef("none"),[d,f]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=a(l.current);c.current="mounted"===d?e:"none"},[d]),(0,i.N)(()=>{let t=l.current,n=s.current;if(n!==e){let r=c.current,u=a(t);e?f("MOUNT"):"none"===u||(null==t?void 0:t.display)==="none"?f("UNMOUNT"):n&&r!==u?f("ANIMATION_OUT"):f("UNMOUNT"),s.current=e}},[e,f]),(0,i.N)(()=>{if(u){var e;let t;let n=null!==(e=u.ownerDocument.defaultView)&&void 0!==e?e:window,r=e=>{let r=a(l.current).includes(e.animationName);if(e.target===u&&r&&(f("ANIMATION_END"),!s.current)){let e=u.style.animationFillMode;u.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===u.style.animationFillMode&&(u.style.animationFillMode=e)})}},i=e=>{e.target===u&&(c.current=a(l.current))};return u.addEventListener("animationstart",i),u.addEventListener("animationcancel",r),u.addEventListener("animationend",r),()=>{n.clearTimeout(t),u.removeEventListener("animationstart",i),u.removeEventListener("animationcancel",r),u.removeEventListener("animationend",r)}}f("ANIMATION_END")},[u,f]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:r.useCallback(e=>{e&&(l.current=getComputedStyle(e)),o(e)},[])}}(t),l="function"==typeof n?n({present:o.isPresent}):r.Children.only(n),s=(0,u.s)(o.ref,function(e){var t,n;let r=null===(t=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===t?void 0:t.get,u=r&&"isReactWarning"in r&&r.isReactWarning;return u?e.ref:(u=(r=null===(n=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(l));return"function"==typeof n||o.isPresent?r.cloneElement(l,{ref:s}):null};function a(e){return(null==e?void 0:e.animationName)||"none"}o.displayName="Presence"},39033:(e,t,n)=>{n.d(t,{c:()=>u});var r=n(12115);function u(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},46081:(e,t,n)=>{n.d(t,{A:()=>o,q:()=>i});var r=n(12115),u=n(95155);function i(e,t){let n=r.createContext(t),i=e=>{let{children:t,...i}=e,o=r.useMemo(()=>i,Object.values(i));return(0,u.jsx)(n.Provider,{value:o,children:t})};return i.displayName=e+"Provider",[i,function(u){let i=r.useContext(n);if(i)return i;if(void 0!==t)return t;throw Error(`\`${u}\` must be used within \`${e}\``)}]}function o(e,t=[]){let n=[],i=()=>{let t=n.map(e=>r.createContext(e));return function(n){let u=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:u}}),[n,u])}};return i.scopeName=e,[function(t,i){let o=r.createContext(i),a=n.length;n=[...n,i];let l=t=>{let{scope:n,children:i,...l}=t,s=n?.[e]?.[a]||o,c=r.useMemo(()=>l,Object.values(l));return(0,u.jsx)(s.Provider,{value:c,children:i})};return l.displayName=t+"Provider",[l,function(n,u){let l=u?.[e]?.[a]||o,s=r.useContext(l);if(s)return s;if(void 0!==i)return i;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let u=n.reduce((t,{useScope:n,scopeName:r})=>{let u=n(e)[`__scope${r}`];return{...t,...u}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:u}),[u])}};return n.scopeName=t.scopeName,n}(i,...t)]}},49189:(e,t,n)=>{},49949:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(79600),u=n(12115),i=n(95155),o=(0,u.forwardRef)(({href:e="#",external:t=!(e.startsWith("/")||e.startsWith("#")||e.startsWith(".")),prefetch:n,...u},o)=>t?(0,i.jsx)("a",{ref:o,href:e,rel:"noreferrer noopener",target:"_blank",...u,children:u.children}):(0,i.jsx)(r.N_,{ref:o,href:e,prefetch:n,...u}));o.displayName="Link",n(49189)},50344:(e,t,n)=>{n.d(t,{Image:()=>r._V,a8:()=>r.a8,q6:()=>r.q6,rd:()=>r.rd});var r=n(79600);n(49189)},52712:(e,t,n)=>{n.d(t,{N:()=>u});var r=n(12115),u=globalThis?.document?r.useLayoutEffect:()=>{}},61285:(e,t,n)=>{n.d(t,{B:()=>l});var r,u=n(12115),i=n(52712),o=(r||(r=n.t(u,2)))[" useId ".trim().toString()]||(()=>void 0),a=0;function l(e){let[t,n]=u.useState(o());return(0,i.N)(()=>{e||n(e=>e??String(a++))},[e]),e||(t?`radix-${t}`:"")}},63655:(e,t,n)=>{n.d(t,{hO:()=>l,sG:()=>a});var r=n(12115),u=n(47650),i=n(99708),o=n(95155),a=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=(0,i.TL)(`Primitive.${t}`),u=r.forwardRef((e,r)=>{let{asChild:u,...i}=e;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,o.jsx)(u?n:t,{...i,ref:r})});return u.displayName=`Primitive.${t}`,{...e,[t]:u}},{});function l(e,t){e&&u.flushSync(()=>e.dispatchEvent(t))}},79600:(e,t,n)=>{n.d(t,{N_:()=>d,Uy:()=>a,_V:()=>c,a8:()=>l,q6:()=>f,rd:()=>s});var r=n(12115),u=n(95155),i=()=>{throw Error("You need to wrap your application inside `FrameworkProvider`.")},o=f("FrameworkContext",{useParams:i,useRouter:i,usePathname:i});function a({children:e,...t}){let n=r.useMemo(()=>({usePathname:t.usePathname,useRouter:t.useRouter,Link:t.Link,Image:t.Image,useParams:t.useParams}),[t.Link,t.usePathname,t.useRouter,t.useParams,t.Image]);return(0,u.jsx)(o.Provider,{value:n,children:e})}function l(){return o.use().usePathname()}function s(){return o.use().useRouter()}function c(e){let{Image:t}=o.use();if(!t){let{src:t,alt:n,priority:r,...i}=e;return(0,u.jsx)("img",{alt:n,src:t,fetchPriority:r?"high":"auto",...i})}return(0,u.jsx)(t,{...e})}function d(e){let{Link:t}=o.use();if(!t){let{href:t,prefetch:n,...r}=e;return(0,u.jsx)("a",{href:t,...r})}return(0,u.jsx)(t,{...e})}function f(e,t){let n=r.createContext(t);return{Provider:e=>(0,u.jsx)(n.Provider,{value:e.value,children:e.children}),use:t=>{let u=r.useContext(n);if(!u)throw Error(t??`Provider of ${e} is required but missing.`);return u}}}},85185:(e,t,n)=>{n.d(t,{m:()=>r});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}},94315:(e,t,n)=>{n.d(t,{FX:()=>o,jH:()=>a});var r=n(12115),u=n(95155),i=r.createContext(void 0),o=e=>{let{dir:t,children:n}=e;return(0,u.jsx)(i.Provider,{value:t,children:n})};function a(e){let t=r.useContext(i);return e||t||"ltr"}},99708:(e,t,n)=>{n.d(t,{TL:()=>o});var r=n(12115),u=n(6101),i=n(95155);function o(e){let t=function(e){let t=r.forwardRef((e,t)=>{let{children:n,...i}=e;if(r.isValidElement(n)){var o;let e,a;let l=(o=n,(a=(e=Object.getOwnPropertyDescriptor(o.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?o.ref:(a=(e=Object.getOwnPropertyDescriptor(o,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?o.props.ref:o.props.ref||o.ref),s=function(e,t){let n={...t};for(let r in t){let u=e[r],i=t[r];/^on[A-Z]/.test(r)?u&&i?n[r]=(...e)=>{i(...e),u(...e)}:u&&(n[r]=u):"style"===r?n[r]={...u,...i}:"className"===r&&(n[r]=[u,i].filter(Boolean).join(" "))}return{...e,...n}}(i,n.props);return n.type!==r.Fragment&&(s.ref=t?(0,u.t)(t,l):l),r.cloneElement(n,s)}return r.Children.count(n)>1?r.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}(e),n=r.forwardRef((e,n)=>{let{children:u,...o}=e,a=r.Children.toArray(u),s=a.find(l);if(s){let e=s.props.children,u=a.map(t=>t!==s?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,i.jsx)(t,{...o,ref:n,children:r.isValidElement(e)?r.cloneElement(e,void 0,u):null})}return(0,i.jsx)(t,{...o,ref:n,children:u})});return n.displayName=`${e}.Slot`,n}var a=Symbol("radix.slottable");function l(e){return r.isValidElement(e)&&"function"==typeof e.type&&"__radixId"in e.type&&e.type.__radixId===a}}}]);