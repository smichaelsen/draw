(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{10:function(e,t,n){"use strict";var a=n(0),l=n(14);t.a=e=>{let t=e instanceof Function?e():e;const n=[];return()=>{const e=Object(a.useState)(t)[1];Object(a.useEffect)(()=>(n.push(e),()=>{l(n,e)}),[]);const c=Object(a.useCallback)(e=>{t=e instanceof Function?e(t):e;for(const e of n)e(t)},[t,n]);return[t,c]}}},2:function(e,t,n){"use strict";var a=n(0),l=n(10);const c=Object(l.a)({initial:!0,waiting:!0,error:null});t.a=()=>{const[e,t]=c();var n;return[e,Object(a.useCallback)((n=t,Object(a.useCallback)(e=>n(t=>({...t,...e instanceof Function?e(t):e})),[n])),[t])]}},58:function(e,t,n){"use strict";n.r(t);n(28),n(31);var a=n(0),l=n.n(a),c=n(13),i=n.n(c),r=n(1),o=n(2);var s=r.a`
  body {
    font-family: Tahoma, Arial, sans-serif;
  }
`;var u=r.c.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${1e8};
`;const m=r.d`
  from {
    opacity: 0;
  }
  to {}
`;var b=Object(r.c)(u)`
  background-color: white;
  opacity: 0.75;

  ${e=>e.animate&&r.b`
    animation: ${m} 0.25s ease-out;
  `}
`;var f=Object(r.c)(u)`
  display: flex;
  justify-content: center;
  align-items: center;
`;var E=Object(a.memo)(({noAnimation:e,children:t})=>l.a.createElement("div",null,l.a.createElement(b,{animate:!e}),l.a.createElement(f,null,t)));const d=r.c.div`
  font-size: 5vw;
  color: #808080;
  user-select: none;

  @media (max-width: 999px) {
    font-size: 8vw;
  }
`;var j=Object(a.memo)(({noAnimation:e,children:t})=>l.a.createElement(E,{noAnimation:e},l.a.createElement(d,null,t)));const v=r.c.span`
  opacity: 0;
`;var p=Object(a.memo)(({num:e,interval:t})=>{const[n,c]=Object(a.useState)(e);return Object(a.useEffect)(()=>{let n;const a=()=>{n=setTimeout(()=>{c(t=>(t+1)%(e+1)),a()},t)};return a(),()=>{clearTimeout(n)}},[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("span",null,".".repeat(n)),l.a.createElement(v,null,".".repeat(e-n)))});var O=Object(a.memo)(()=>{const[e]=Object(o.a)(),t=Object(a.useCallback)(t=>l.a.createElement(j,Object.assign({},t,{noAnimation:e.initial})),[e.initial]),{error:n,waiting:c}=e;return navigator.onLine?n?l.a.createElement(t,null,n):c?l.a.createElement(t,null,"wait",l.a.createElement(p,{num:3,interval:1e3})):null:l.a.createElement(t,null,"you're offline")});const w=Promise.all([n.e(8),n.e(78)]).then(n.bind(null,530)),g=Promise.all([n.e(8),n.e(82)]).then(n.bind(null,529)),h=Object(a.lazy)(()=>w),y=Object(a.lazy)(()=>g),k=r.c.div`
  & * {
    box-sizing: border-box;
  }
`;var x=()=>{const[e,t]=Object(o.a)();return Object(a.useEffect)(()=>{e.initial&&!e.waiting&&t({initial:!1})},[e.waiting]),l.a.createElement(l.a.Fragment,null,l.a.createElement(s,null),l.a.createElement(k,null,l.a.createElement(O,null),l.a.createElement(a.Suspense,{fallback:!1},l.a.createElement(h,null)),l.a.createElement(a.Suspense,{fallback:!1},l.a.createElement(y,null))))};i.a.render(l.a.createElement(x,null),document.getElementById("app"))}},[[58,79,77,81]]]);