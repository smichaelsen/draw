"use strict";(self.webpackChunkdraw=self.webpackChunkdraw||[]).push([[1839],{49283:(n,e)=>{e.up=e.UR=void 0;const t=n=>n.length>0;function s(n,e,r,o,a){if(!a(r,e,o))return!1;const i=n.findIndex(t);if(i<0)return!0;const c=e.slice(),u=c[o];c[o]=[r,...u];const d=n.slice(),[p,...l]=d[i];return d[i]=l,c.some(((n,e)=>s(d,c,p,e,a)))}e.UR=(n,e,t,r)=>e.map(((n,e)=>e)).filter((o=>s(n,e,t,o,r)));e.up=(n,e,t,r)=>e.findIndex(((o,a)=>s(n,e,t,a,r)))},97532:(n,e,t)=>{t.d(e,{Z:()=>u});var s=t(73303),r=t.n(s),o=t(16746);var a=t(76303);const i=new Set(["Kazakhstan","Russia","Belarus","Lithuania","Latvia","Estonia","Norway","Finland","Sweden","Iceland","Faroe Islands"]);function c(n,e){const t=e-(e>>1),s=n=>i.has(n.country),o=n=>s(n)?1:0;return n=>r()(n,o)<=t}const u=(n,e)=>{const t=(0,a.Z)(n),s=c(0,e);return(n,e,r)=>{const a=e[r],i=(0,o.Z)(e);var c;return!(a.length>i||a.some((c=n.country,n=>n.country===c))||a.some(t(n))||!s([...a,n])||n.pairing&&((n,e)=>{const t=n.length>>1,s=e<t?0:t;return n.slice(s,s+t)})(e,r).some(function(n){const e=function(n){const{id:e}=n;return n=>n.id===e}(n);return n=>n.some(e)}(n.pairing)))}}},76303:(n,e,t)=>{t.d(e,{Z:()=>l});var s=t(95062),r=t.n(s),o=t(97527),a=t.n(o);const i=[{countries:["Russia","Ukraine"],predicate:(c=2014,u=Number.MAX_SAFE_INTEGER,n=>n>=c&&n<=u)},{countries:["Azerbaijan","Armenia"]},{countries:["Serbia","Kosovo"]},{countries:["Bosnia & Herzegovina","Kosovo"]},{countries:["Spain","Gibraltar"]}];var c,u;const d={predicate:a()},p=i.map((n=>({...d,...n}))),l=n=>{const e=(n=>{const e=new Map;for(const{countries:t,predicate:s}of p)s(n)&&(e.set(t[0],t[1]),e.set(t[1],t[0]));return e.get.bind(e)})(n);return n=>{const t=e(n.country);return void 0===t?r():n=>n.country===t}}},14069:(n,e,t)=>{t.r(e);var s=t(30845),r=t(49283),o=t(97532);const a=([n,e])=>JSON.stringify({year:n,groupSize:e}),i=(0,s.Z)(o.Z,((n,e)=>a(n)===a(e)));addEventListener("message",(n=>{const{messageId:e,data:{season:t,pots:s,groups:o,selectedTeam:a}}=n.data,c=i(t,s.length),u=(0,r.UR)(s,o,a,c);postMessage({messageId:e,data:{possibleGroups:u}})}))}}]);