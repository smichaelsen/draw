(()=>{"use strict";var r={85092:(r,e,t)=>{t.d(e,{u:()=>o});let o=({pots:r,groups:e,picked:t,predicate:o})=>{let s=r.flat();return e.findIndex((r,n)=>(function r(e,t,o,s,n){if(!n(o,t,s))return!1;if(0===e.length)return!0;let i=t.with(s,[o,...t[s]]),[l,...a]=e;return i.some((e,t)=>r(a,i,l,t,n))})(s,e,t,n,o))}},97543:(r,e,t)=>{t.d(e,{Z:()=>p});var o=t(62603),s=t(39506);let n=(r,e)=>{let t=r.length>>1,o=e<t?0:t;return r.slice(o,o+t)};var i=t(80411);let l=new Set(["Belarus","Estonia","Faroe Islands","Finland","Iceland","Kazakhstan","Latvia","Lithuania","Norway","Russia","Sweden"]),a=r=>r=>l.has(r.country),c=r=>e=>e.country===r,u=r=>c(r.country),p=(r,e)=>{let t=(0,i.Z)(r),l=function(r,e){let t=e-(e>>1),s=a(r),n=r=>s(r)?1:0;return r=>(0,o.Z)(r,n)<=t}(r,e);return(r,e,o)=>{let i=e[o],a=(0,s.Z)(e);return!(i.length>a||i.some(u(r))||i.some(t(r))||!l([...i,r])||r.pairing&&n(e,o).some(function(r){let e=function(r){let{id:e}=r;return r=>r.id===e}(r);return r=>r.some(e)}(r.pairing)))}}},80411:(r,e,t)=>{t.d(e,{Z:()=>u});var o,s=t(7979),n=t(46338);let i=[{countries:["Russia","Ukraine"],predicate:(o=Number.MAX_SAFE_INTEGER,r=>r>=2014&&r<=o)},{countries:["Azerbaijan","Armenia"]},{countries:["Serbia","Kosovo"]},{countries:["Bosnia & Herzegovina","Kosovo"]},{countries:["Spain","Gibraltar"]}],l={predicate:n.Z},a=i.map(r=>({...l,...r})),c=r=>{let e=a.filter(e=>e.predicate(r)).map(r=>r.countries),t=e.map(r=>r.toReversed()),o=function(r){let e=new Map;for(let[t,o]of r)e.has(t)||e.set(t,new Set),e.get(t).add(o);return e}([...e,...t]);return o.get.bind(o)},u=r=>{let e=c(r);return r=>{let t=e(r.country);return void 0===t?s.Z:r=>t.has(r.country)}}},23091:(r,e,t)=>{var o=t(30845),s=t(85092),n=t(97543),i=t(70990);let l=([r,e])=>JSON.stringify({year:r,groupSize:e}),a=(0,o.Z)(n.Z,(r,e)=>l(r)===l(e));(0,i.Z)(r=>{let{season:e,pots:t,groups:o,selectedTeam:n}=r,i=a(e,t.length);return(0,s.u)({pots:t,groups:o,picked:n,predicate:i})})},39506:(r,e,t)=>{t.d(e,{Z:()=>o});let o=r=>r.reduce((r,e)=>Math.min(e.length,r),Number.MAX_SAFE_INTEGER)},70990:(r,e,t)=>{t.d(e,{Z:()=>o});let o=r=>{addEventListener("message",e=>{let{correlationId:t,data:o}=e.data,s=r(o);postMessage({correlationId:t,data:s})})}}},e={};function t(o){var s=e[o];if(void 0!==s)return s.exports;var n=e[o]={exports:{}};return r[o](n,n.exports,t),n.exports}t.m=r,t.x=()=>{var r=t.O(void 0,[3748,6902,7180,3520,4833],()=>t(23091));return t.O(r)},(()=>{var r=[];t.O=(e,o,s,n)=>{if(o){n=n||0;for(var i=r.length;i>0&&r[i-1][2]>n;i--)r[i]=r[i-1];r[i]=[o,s,n];return}for(var l=1/0,i=0;i<r.length;i++){for(var[o,s,n]=r[i],a=!0,c=0;c<o.length;c++)l>=n&&Object.keys(t.O).every(r=>t.O[r](o[c]))?o.splice(c--,1):(a=!1,n<l&&(l=n));if(a){r.splice(i--,1);var u=s();void 0!==u&&(e=u)}}return e}})(),t.d=(r,e)=>{for(var o in e)t.o(e,o)&&!t.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:e[o]})},t.f={},t.e=r=>Promise.all(Object.keys(t.f).reduce((e,o)=>(t.f[o](r,e),e),[])),t.u=r=>""+({3520:"vendors-cl-gs-allPossibleGroupsWorker~cl-gs-firstPossibleGroupWorker~el-gs-worker~wc-gs-worker~~~~",3748:"vendors-cl-gs~cl-gs-allPossibleGroupsWorker~cl-gs-firstPossibleGroupWorker~cl-ko~cl-ko-worker~el-gs~el-gs-worker~el-ko~el-ko-worker~wc-gs~wc-gs-worker~~~~~~",4833:"vendors-",6902:"vendors-cl-gs~cl-gs-allPossibleGroupsWorker~cl-gs-firstPossibleGroupWorker~cl-ko~el-gs~el-gs-worker~el-ko~wc-gs~wc-gs-worker~~~~",7180:"vendors-cl-gs-allPossibleGroupsWorker~cl-gs-firstPossibleGroupWorker~cl-ko-worker~el-gs-worker~el-ko-worker~wc-gs-worker~~~~~~"})[r]+"."+({3520:"ca6d1ae3",3748:"853ad294",4833:"289714ef",6902:"8daa7180",7180:"99211f36"})[r]+".js",t.miniCssF=r=>{},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(r){if("object"==typeof window)return window}}(),t.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),t.j=3091,(()=>{t.g.importScripts&&(r=t.g.location+"");var r,e=t.g.document;if(!r&&e&&(e.currentScript&&(r=e.currentScript.src),!r)){var o=e.getElementsByTagName("script");if(o.length)for(var s=o.length-1;s>-1&&!r;)r=o[s--].src}if(!r)throw Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=r})(),(()=>{var r={3091:1,4194:1};t.f.i=(e,o)=>{r[e]||importScripts(t.p+t.u(e))};var e=self.webpackChunkdraw=self.webpackChunkdraw||[],o=e.push.bind(e);e.push=e=>{var[s,n,i]=e;for(var l in n)t.o(n,l)&&(t.m[l]=n[l]);for(i&&i(t);s.length;)r[s.pop()]=1;o(e)}})(),(()=>{var r=t.x;t.x=()=>Promise.all([3748,6902,7180,3520,4833].map(t.e,t)).then(r)})(),t.x()})();