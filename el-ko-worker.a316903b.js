"use strict";(self.webpackChunkdraw=self.webpackChunkdraw||[]).push([[425,2061],{62311:(e,n,t)=>{function r(e,[n,t],s,o){const a=s.findIndex((e=>1===e.length));if(!o(e,s,a))return!1;const c=[...s],i=c[a][0];c[a]=[i,e];return a+1===c.length||function([e,n],t,s){const o=t.findIndex((e=>!e.length)),[a,...c]=n,i=[...t];return i[o]=[a],e.some((n=>r(n,[e,c],i,s)))}([n.filter((n=>n!==e)),t],c,o)}t.d(n,{Z:()=>s});const s=([e,n],t,s)=>e.map(((e,n)=>n)).filter((o=>r(e[o],[e,n],t,s)))},60402:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(1479);const s=e=>{const n=(0,r.Z)(e),t=(e,t)=>{return 0===e.length||1===e.length&&(r=t,s=e[0],r.country!==s.country&&r.group!==s.group&&!n(r)(s));var r,s};return(e,n,r)=>t(n[r],e)}},1479:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(95062),s=t.n(r),o=t(97527),a=t.n(o);const c=[{countries:["Russia","Ukraine"],predicate:(i=2014,u=Number.MAX_SAFE_INTEGER,e=>e>=i&&e<=u)},{countries:["Azerbaijan","Armenia"]},{countries:["Serbia","Kosovo"]},{countries:["Bosnia & Herzegovina","Kosovo"]},{countries:["Spain","Gibraltar"]}];var i,u;const d={predicate:a()},p=c.map((e=>({...d,...e})));const g=e=>{const n=p.filter((n=>n.predicate(e))).map((e=>e.countries)),t=n.map((e=>e.slice().reverse())),r=function(e){const n=new Map;for(const[t,r]of e)n.has(t)||n.set(t,new Set),n.get(t).add(r);return n}([...n,...t]);return r.get.bind(r)},f=e=>{const n=g(e);return e=>{const t=n(e.country);return void 0===t?s():e=>t.has(e.country)}}},12061:(e,n,t)=>{t.r(n);var r=t(30845),s=t(62311),o=t(60402);const a=([e])=>JSON.stringify({year:e}),c=(0,r.Z)(o.Z,((e,n)=>a(e)===a(n)));addEventListener("message",(e=>{const{messageId:n,data:{season:t,pots:r,matchups:o}}=e.data,a=c(t),i=(0,s.Z)(r,o,a);postMessage({messageId:n,data:{possiblePairings:i}})}))}}]);