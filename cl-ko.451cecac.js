"use strict";(self.webpackChunkdraw=self.webpackChunkdraw||[]).push([[6593],{37158:(e,t,s)=>{s.r(t),s.d(t,{default:()=>y});var n=s(85893),l=s(67294),r=s(21225),i=s(96446),a=s(80676),o=s(40339),u=s(27603),c=s(56285),d=s(43761),m=s(43510),p=s(72723),f=s(11726),Z=s(31294),h=s(85704),x=s(18753),j=s(40410),b=s(98514),g=s(12365);let k=()=>new Worker(new URL(s.p+s.u(7600),s.b));function w(e){return{currentMatchupNum:0,currentPotNum:1,possiblePairings:null,pots:e.map(e=>(0,r.Z)(e)),matchups:(0,i.Z)(8).map(()=>[])}}let y=(0,l.memo)(function({season:e,pots:t}){let[s,r]=(0,u.Z)(),[i,y]=(0,c.Z)(),[{currentMatchupNum:P,currentPotNum:C,possiblePairings:N,pots:E,matchups:v},T]=(0,l.useState)(()=>w(t));(0,l.useEffect)(()=>{T(w(t))},[t,s]);let[,M]=(0,o.Z)(),[R]=(0,d.Z)(),S=(0,m.Z)(k),$=(0,l.useRef)(null),F=(0,l.useCallback)(async(t,s)=>{try{let n=await S({season:e,pots:t,matchups:s});return n.possiblePairings}catch(e){throw M({error:"Could not determine possible pairings"}),e}},[e,S]),G=(0,l.useCallback)(async e=>{let t=N?N[e]:e,s=E[C][t],n=E.slice();n[C]=n[C].filter((e,s)=>s!==t);let l=v.slice();l[P]=[...l[P],s];let r=1===C?await F(n,l):null,i=P-C+1;T({currentPotNum:1-C,currentMatchupNum:i,possiblePairings:r,pots:n,matchups:l})},[E,v,C,P,N]),A=()=>{if(i)return;let e=N?.length===1||1===C&&1===E[1].length;e&&G(0)};(0,l.useEffect)(()=>{setTimeout(A,250)},[C]);let D=(0,l.useMemo)(()=>N&&E[0].filter((e,t)=>N.includes(t)),[N]),W=P>=t[0].length;(0,l.useEffect)(()=>{if(i){let e=D??E[1],t=e.length;if(t>0){let e=(0,a.Z)(t-1);G(e)}}},[i,C]),(0,l.useEffect)(()=>{W&&i&&y(!1)},[W,i]);let L=N?N.map(e=>E[0][e]):[];return(0,n.jsxs)(p.Z,{children:[(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(f.Z,{selectedTeams:L,initialPots:t,pots:E,currentPotNum:C}),(0,n.jsx)(Z.Z,{ref:$,matchups:v})]}),(0,n.jsxs)(x.Z,{children:[!i&&(0,n.jsxs)(n.Fragment,{children:[!W&&(0,n.jsx)(b.Z,{children:"Runners-up"}),(0,n.jsx)(j.Z,{forceNoSelect:0===C,display:!W,displayTeams:R,selectedTeam:null,pot:E[1],onPick:G}),!W&&(0,n.jsx)(b.Z,{children:"Group Winners"}),D&&(0,n.jsx)(j.Z,{forceNoSelect:1===C,display:!W,displayTeams:R,selectedTeam:null,pot:D,onPick:G})]}),W&&(0,n.jsx)(g.Z,{long:!1,completed:W,selectedTeam:null,pickedGroup:null,possibleGroups:null,numGroups:0,groupsElement:$,reset:r})]})]})})},31294:(e,t,s)=>{s.d(t,{Z:()=>C});var n=s(85893),l=s(67294),r=s(70394),i=s(46202),a=s(1850),o=s(8360),u=s(73995),c=s(90595),d=s(63835),m=s(63494),p=s(79633),f=s(88834),Z=s(43955);let h=(0,r.F4)`
  from {
    background-color: rgb(255 255 0 / 0.5);
  }
`,x=(0,r.F4)`
  from {
    background-color: rgb(192 224 255 / 0.5);
  }
`,j=(0,r.iv)`
  animation: ${e=>e.theme.isDarkMode?x:h} 3s ease-out normal forwards;
`,b=(0,r.ZP)(o.Z)`
  width: 150px;
  ${e=>e.picked&&j}
  ${e=>e.styles}
`,g=(0,l.memo)(function({team:e}){let t=(0,c.Z)(e),[s,i]=(0,l.useState)(e),[a,o]=(0,l.useState)(!1),u=(0,l.useContext)(r.Ni),h=(0,l.useRef)(null),x=(0,l.useCallback)(()=>o(!1),[]),j=(0,l.useCallback)(()=>{i(e),o(!0)},[e]);return(0,d.Z)(()=>{x()},[u]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b,{picked:a&&!!s,onAnimationEnd:x,children:s?(0,n.jsx)(p.Z,{country:(0,m.Z)(s),children:s.shortName??s.name}):(0,n.jsx)(f.Z,{ref:h})}),e&&e!==t&&(0,n.jsx)(Z.Z,{from:`[data-cellid='${e.id}']`,to:h,duration:350,team:e,onAnimationEnd:j})]})}),k=(0,r.ZP)(u.Z)`
  justify-content: center;
  width: 23px;
  color: ${e=>e.theme.isDarkMode?"#ccc":"#333"};

  &::before {
    content: 'v';
  }
`,w=(0,l.memo)(function({teams:e}){let[t,s]=e??[];return(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(g,{team:t}),(0,n.jsx)(o.Z,{children:(0,n.jsx)(k,{})}),(0,n.jsx)(g,{team:s})]})}),y=(0,r.ZP)(i.Z)`
  align-self: center;
  width: auto;
  max-width: initial;
`,P=(0,l.forwardRef)(({matchups:e},t)=>(0,n.jsx)(y,{ref:t,children:(0,n.jsx)("tbody",{children:e?.map((e,t)=>n.jsx(w,{teams:e},t))})})),C=(0,l.memo)(P)},98514:(e,t,s)=>{s.d(t,{Z:()=>r});var n=s(70394);let l=n.ZP.div`
  margin-top: 10px;
  margin-bottom: 5px;
  user-select: none;
`,r=l}}]);