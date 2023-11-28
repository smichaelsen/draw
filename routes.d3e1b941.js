(self.webpackChunkdraw=self.webpackChunkdraw||[]).push([[7770],{14855:(e,s,o)=>{"use strict";o.d(s,{Z:()=>t});let t={Albania:{confederation:"UEFA",bert:"alb",flag:"al"},Andorra:{confederation:"UEFA",bert:"and",flag:"ad"},Armenia:{confederation:"UEFA",bert:"arm",flag:"am"},Austria:{confederation:"UEFA",bert:"aut",flag:"at"},Azerbaijan:{confederation:"UEFA",bert:"azb",flag:"az"},Belgium:{confederation:"UEFA",bert:"bel",flag:"be"},Belarus:{confederation:"UEFA",bert:"bls",flag:"by"},"Bosnia & Herzegovina":{confederation:"UEFA",bert:"bos",flag:"ba"},Bulgaria:{confederation:"UEFA",bert:"bul",flag:"bg"},Croatia:{confederation:"UEFA",bert:"cro",flag:"hr"},Cyprus:{confederation:"UEFA",bert:"cyp",flag:"cy"},Czechia:{confederation:"UEFA",bert:"cze",flag:"cz"},Denmark:{confederation:"UEFA",bert:"den",flag:"dk"},England:{confederation:"UEFA",bert:"eng",flag:"gb-eng"},Spain:{confederation:"UEFA",bert:"esp",flag:"es"},Estonia:{confederation:"UEFA",bert:"est",flag:"ee"},"Faroe Islands":{confederation:"UEFA",bert:"far",flag:"fo"},Finland:{confederation:"UEFA",bert:"fin",flag:"fi"},France:{confederation:"UEFA",bert:"fra",flag:"fr"},Georgia:{confederation:"UEFA",bert:"geo",flag:"ge"},Germany:{confederation:"UEFA",bert:"ger",flag:"de"},Gibraltar:{confederation:"UEFA",bert:"gib",flag:"gi"},Greece:{confederation:"UEFA",bert:"gre",flag:"gr"},Hungary:{confederation:"UEFA",bert:"hun",flag:"hu"},Ireland:{confederation:"UEFA",bert:"irl",flag:"ie"},Iceland:{confederation:"UEFA",bert:"isl",flag:"is"},Israel:{confederation:"UEFA",bert:"isr",flag:"il"},Italy:{confederation:"UEFA",bert:"ita",flag:"it"},Kazakhstan:{confederation:"UEFA",bert:"kaz",flag:"kz"},Kosovo:{confederation:"UEFA",bert:"kos",flag:"xk"},Latvia:{confederation:"UEFA",bert:"lat",flag:"lv"},Liechtenstein:{confederation:"UEFA",bert:"lie",flag:"li"},Lithuania:{confederation:"UEFA",bert:"lit",flag:"lt"},Luxembourg:{confederation:"UEFA",bert:"lux",flag:"lu"},"North Macedonia":{confederation:"UEFA",bert:"mac",flag:"mk"},Malta:{confederation:"UEFA",bert:"mlt",flag:"mt"},Moldova:{confederation:"UEFA",bert:"mol",flag:"md"},Montenegro:{confederation:"UEFA",bert:"mon",flag:"me"},Netherlands:{confederation:"UEFA",bert:"ned",flag:"nl"},"Northern Ireland":{confederation:"UEFA",bert:"nir",flag:"gb-nir"},Norway:{confederation:"UEFA",bert:"nor",flag:"no"},Poland:{confederation:"UEFA",bert:"pol",flag:"pl"},Portugal:{confederation:"UEFA",bert:"por",flag:"pt"},Romania:{confederation:"UEFA",bert:"rom",flag:"ro"},Russia:{confederation:"UEFA",bert:"rus",flag:"ru"},Scotland:{confederation:"UEFA",bert:"sco",flag:"gb-sct"},Slovenia:{confederation:"UEFA",bert:"slo",flag:"si"},"San Marino":{confederation:"UEFA",bert:"sma",flag:"sm"},Serbia:{confederation:"UEFA",bert:"srb",flag:"rs"},Switzerland:{confederation:"UEFA",bert:"sui",flag:"ch"},Slovakia:{confederation:"UEFA",bert:"svk",flag:"sk"},Sweden:{confederation:"UEFA",bert:"swe",flag:"se"},Turkey:{confederation:"UEFA",bert:"tur",flag:"tr"},Ukraine:{confederation:"UEFA",bert:"ukr",flag:"ua"},Wales:{confederation:"UEFA",bert:"wal",flag:"gb-wls"},Brazil:{flag:"br",confederation:"CONMEBOL"},Uruguay:{flag:"uy",confederation:"CONMEBOL"},Argentina:{flag:"ar",confederation:"CONMEBOL"},Peru:{flag:"pe",confederation:"CONMEBOL"},Colombia:{flag:"co",confederation:"CONMEBOL"},Chile:{flag:"cl",confederation:"CONMEBOL"},Ecuador:{flag:"ec",confederation:"CONMEBOL"},Mexico:{flag:"mx",confederation:"CONCACAF"},"Costa Rica":{flag:"cr",confederation:"CONCACAF"},Panama:{flag:"pa",confederation:"CONCACAF"},Canada:{flag:"ca",confederation:"CONCACAF"},"United States":{flag:"us",confederation:"CONCACAF"},Tunisia:{flag:"tn",confederation:"CAF"},Egypt:{flag:"eg",confederation:"CAF"},Senegal:{flag:"sn",confederation:"CAF"},Nigeria:{flag:"ng",confederation:"CAF"},Morocco:{flag:"ma",confederation:"CAF"},Algeria:{flag:"dz",confederation:"CAF"},Ghana:{flag:"gh",confederation:"CAF"},Cameroon:{flag:"cm",confederation:"CAF"},Iran:{flag:"ir",confederation:"AFC"},Australia:{flag:"au",confederation:"AFC"},Japan:{flag:"jp",confederation:"AFC"},"South Korea":{flag:"kr",confederation:"AFC"},"Saudi Arabia":{flag:"sa",confederation:"AFC"},Qatar:{flag:"qa",confederation:"AFC"},"New Zealand":{flag:"nz",confederation:"OFC"}}},55323:(e,s,o)=>{"use strict";o.r(s),o.d(s,{default:()=>ez});var t,n=o(85893),r=o(67294),a=o(89250),l=o(21487),g=o(27603),i=o(56285),c=o(70394);let v=c.ZP.div`
  visibility: ${e=>e.$visible?"":"hidden"};
`,d={bertHost:"https://kassiesa.net/uefa",defaultTournament:"cl",defaultStage:"gs",currentSeason:{wc:2022,uefa:{cl:{gs:2023,ko:2022},el:{gs:2023,ko:2022},ecl:{gs:2023,ko:2020}}}};var f=o(64593);let u=(t={cl:{title:"CL draw simulator",favicon:"//img.uefa.com/imgml/favicon/comp/ucl.ico",themeColor:"#00336a",description:"Champions League draw simulator"},el:{title:"EL draw simulator",favicon:"//img.uefa.com/imgml/favicon/comp/uefacup.ico",themeColor:"#f68e00",description:"Europa League draw simulator"},ecl:{title:"ECL draw simulator",favicon:"//img.uefa.com/imgml/uefacom/uecl/favicon.ico",themeColor:"#1cbc28",description:"Europa Conference League draw simulator"},wc:{title:"FIFA World Cup draw simulator",favicon:"//img.fifa.com/image/upload/t_fe-auto/assets/img/icons/favicon.ico",themeColor:"#326295",description:"FIFA World Cup draw simulator"}},e=>t[e]),p={path:"/:tournament/*",sensitive:!0},m=(0,r.memo)(function(){let e=(0,a.bS)(p),s=e?.params?.tournament,o=s&&u(s)||null;return o&&(0,n.jsxs)(f.q,{children:[(0,n.jsx)("title",{children:o.title}),(0,n.jsx)("link",{rel:"icon",type:"image/x-icon",href:o.favicon}),(0,n.jsx)("meta",{name:"theme-color",content:o.themeColor}),(0,n.jsx)("meta",{name:"description",content:o.description})]})});var h=o(65600),b=o(12185),k=o(43761);let j=c.ZP.label`
  display: flex;
  align-items: center;
  margin-right: 3px;
  margin-left: 3px;
  cursor: pointer;
`,x=c.ZP.input.attrs({type:"checkbox"})`
  cursor: pointer;
  ${e=>e.theme.isDarkMode&&(0,c.iv)`
    border: ${e.theme.border};
    background-color: #246;
  `}
`,w=c.ZP.div`
  margin-left: 0.5rem;
  user-select: none;
`,A=(0,r.memo)(function({children:e,value:s,onChange:o,...t}){let a=(0,r.useCallback)(e=>{o(e.target.checked)},[o]);return(0,n.jsxs)(j,{children:[(0,n.jsx)(x,{checked:s,onChange:a,...t}),(0,n.jsx)(w,{children:e})]})}),F=c.ZP.button`
  border-radius: 3px;
  border: ${e=>e.theme.border};
  background-color: ${e=>e.theme.isDarkMode?"#246":"white"};
  color: ${e=>e.theme.isDarkMode?"white":""};
  font-weight: normal;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    ${e=>e.theme.isDarkMode?(0,c.iv)`
      background-color: #468;
    `:(0,c.iv)`
      border-color: black;
    `}
  }
`;var C=o(32108),E=o(96446);let y=c.ZP.div`
  display: inline;
  margin-right: 3px;
  margin-left: 3px;
`,U=c.ZP.label`
  display: none;
`,Z=c.ZP.select`
  border-radius: 3px;
  border: ${e=>e.theme.border};
  background-color: ${e=>e.theme.isDarkMode?"#246":"white"};
  color: ${e=>e.theme.isDarkMode?"white":""};
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    ${e=>e.theme.isDarkMode?(0,c.iv)`
      background-color: #468;
    `:(0,c.iv)`
      border-color: black;
    `}
  }
`,O=(0,r.memo)(function({label:e,children:s,...o}){let t=(0,r.useId)();return(0,n.jsxs)(y,{children:[(0,n.jsx)(U,{htmlFor:t,children:e}),(0,n.jsx)(Z,{id:t,title:e,...o,children:s})]})}),{wc:$,uefa:M}=d.currentSeason,N=(e,s)=>"wc"===e?$:M[e||"cl"][s||"gs"],P=e=>`${e}/${((e+1)%100).toString().padStart(2,"0")}`,S=(e,s)=>"wc"===e?s:P(s),z={cl:2e3,el:2009,ecl:2021,wc:2018},L=(0,r.memo)(function({tournament:e,stage:s,season:o,onChange:t}){let a=(0,r.useCallback)(o=>{t(e,s,+o.target.value)},[e,s,t]),l=(0,r.useCallback)(e=>{let o=e.target.value;t(o,s,N(o,s))},[s,t]),g=(0,r.useCallback)(s=>{let o=s.target.value;t(e,o,N(e,o))},[e,t]),i=z[e];return(0,n.jsxs)("div",{children:[(0,n.jsxs)(O,{label:"tournament",onChange:l,value:e,children:[(0,n.jsx)("option",{value:"cl",children:"Champions League"}),(0,n.jsx)("option",{value:"el",children:"Europa League"}),(0,n.jsx)("option",{value:"ecl",children:"Europa Conference League"}),(0,n.jsx)("option",{value:"wc",children:"World Cup"})]}),(0,n.jsxs)(O,{label:"stage",onChange:g,value:s,children:[(0,n.jsx)("option",{value:"gs",children:"Group Stage"}),"wc"!==e&&(0,n.jsx)("option",{value:"ko",children:"Knockout Stage"})]}),(0,n.jsx)(O,{label:"season",onChange:a,value:o,children:(0,E.Z)(N(e,s),i-1,"wc"===e?-4:-1).map(s=>(0,n.jsx)("option",{value:s,children:S(e,s)},s))})]})}),D=(0,r.memo)(function({value:e,onChange:s}){let o=(0,r.useCallback)(e=>{s(e.target.value)},[s]);return(0,n.jsx)("div",{children:(0,n.jsxs)(O,{label:"Theme",onChange:o,value:e,children:[(0,n.jsx)("option",{value:"light",children:"Light theme"}),(0,n.jsx)("option",{value:"dark",children:"Dark theme"}),(0,n.jsx)("option",{value:"auto",children:"System theme"})]})})});var B=o(62719);let I=c.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 170px;

  > * {
    margin-left: 5px;
  }
`,T=(0,r.memo)(function(){let{isDarkMode:e}=(0,r.useContext)(c.Ni)??{};return(0,n.jsxs)(I,{children:[(0,n.jsx)(B.Z,{href:"https://github.com/inker/draw/issues","data-icon":"octicon-issue-opened","data-show-count":!0,"aria-label":"Issues on GitHub","data-color-scheme":e?"dark":"light",children:"Issues"}),(0,n.jsx)(B.Z,{href:"https://github.com/inker/draw","data-icon":"octicon-star","data-show-count":!0,"aria-label":"Star on GitHub","data-color-scheme":e?"dark":"light",children:"Star"})]})}),W=c.ZP.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
  height: 24px;
  padding-right: 10px;
  font-size: 14px;

  > * {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    &:not(:last-child) {
      margin-right: 15px;
    }

    > * {
      margin-left: 5px;

      &:not(:last-child) {
        margin-right: 5px;
      }
    }
  }

  @media (max-width: 999px) {
    justify-content: center;
    margin-top: 5px;
    font-family: 'Roboto Condensed', RobotoCondensed, RobotoCondensed-Regular, Roboto, sans-serif;
    font-size: 10px;
  }
`,_=(0,r.memo)(function({season:e,tournament:s,stage:o,onSeasonChange:t}){let[a,l]=(0,h.Z)(),[c,v]=(0,k.Z)(),[,d]=(0,g.Z)(),[f,u]=(0,i.Z)(),p=(0,b.Z)("(min-width: 900px)"),m=(0,b.Z)("(min-width: 700px)"),j=(0,r.useCallback)(()=>{u(!1),d()},[]),x=(0,r.useCallback)(()=>{u(!0)},[]);return(0,n.jsxs)(W,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(F,{onClick:j,children:"Restart"}),(0,n.jsx)(F,{disabled:f,onClick:x,children:"Fast draw"}),(0,n.jsx)(L,{tournament:s,stage:o,season:e,onChange:t}),(0,n.jsx)(A,{value:c,onChange:v,children:"X-ray"}),(0,n.jsx)(D,{value:a,onChange:l})]}),(0,n.jsxs)("div",{children:[p&&(0,n.jsx)(T,{}),(0,n.jsxs)("small",{children:[m?"Crafted with ♡ by":"©"," ",(0,n.jsx)(C.Z,{href:"https://github.com/inker",target:"_blank",rel:"noopener",children:"inker"})]})]})]})});var G=o(26962),R=o.n(G),q=o(66749);class K{constructor(e){this.id=(0,q.Z)("team-"),this.name=e}}class H extends K{constructor(e,s,o){super(e),this.coefficient=s,this.confederations=new Set(o)}}var J=o(51206);let Q=o.n(J)().getParser(window.navigator.userAgent);Q.getPlatformType();let X="Firefox"===Q.getBrowserName(),V=["cl","el","ecl","wc"],Y=e=>V.includes(e),ee=["gs","ko"],es=e=>ee.includes(e),eo=async(e,s)=>{if(!Y(e))throw Error(`Invalid tournament: ${e}`);if(!es(s))throw Error(`Invalid stage: ${s}`);let t="ecl"===e?"el":e;return o(79526)(`./${t}/${s}`).then(e=>e?.default).catch(console.error)};var et=o(42454);let en=JSON.parse('[["Real Madrid","Barcelona"],["Real Madrid","Atlético"],["Man City","Man United"],["Chelsea","Arsenal"],["Chelsea","Tottenham"],["Arsenal","Tottenham"],["Milan","Internazionale"],["Bayern","Dortmund"],["Benfica","Porto"],["Benfica","Sporting"],["CSKA","Spartak"],["CSKA","Zenit"],["Zenit","Spartak"],["Shakhtar","Dinamo Kiev"],["Olympiakos","Panathinaikos"]]'),er=async(e,s)=>{try{return(await o(20773)(`./${s}/gs/${e}/pairings.txt`)).default.trim().split("\n\n").map(e=>e.trim().split("\n"))}catch{console.error("pairings for",s,e,"do not exist, using the default ones")}return en};class ea extends K{constructor(e,s,o){super(e),this.country=s,this.shortName=o}}class el extends ea{constructor(e,s,o,t,n){super(e,s,t),this.coefficient=o,this.pairing=n}}var eg=o(15174);let ei=(e,s)=>{let o=e.slice();for(let[e,t]of s){let s=o.find(s=>s.shortName===e),n=o.find(e=>e.shortName===t);if(s&&n){if(s.country!==n.country)throw Error(`teams ${s.name} & ${n.name} cannot be paired up`);s.pairing=n,n.pairing=s,(0,eg.Z)(o,s),(0,eg.Z)(o,n)}}o.sort((e,s)=>s.coefficient-e.coefficient);let t=o.length,n=t-1;for(let e=0;e<n;++e){let s=o[e];if(!s.pairing)for(let n=e+1;n<t;++n){let e=o[n];if(!e.pairing&&s.country===e.country){s.pairing=e,e.pairing=s;break}}}},ec=e=>new el(e.name,e.country,e.coeffient,e.name),ev=e=>e.map(ec),ed=(e,s)=>{let o=e.map(ev);return ei(o.flat(1),s),o};class ef extends ea{constructor(e,s,o,t){super(e,s,t),this.group=o}}let eu=e=>new ef(e.name,e.country,e.group,e.name),ep=e=>e.map(eu),em=e=>e.map(ep);async function eh(e,s,t){let[n,r]=await Promise.all([o(93225)(`./${e}/${s}/${t}/pots.json`).then(e=>e.default),er(t,e)]);return"ko"===s?em(n):ed(n,r)}let eb=(0,et.Z)(eh,(...e)=>e.join(":"));var ek=o(81075),ej=o(14855);class ex extends K{constructor(e,s,o,t){super(e),this.coefficient=s,this.confederation=o,this.host=t}}let ew=e=>s=>{let o=ej.Z[s];return o?new ex(s,0,o.confederation,e):new H(s,0,s.split("/"))},eA=ew(!0),eF=ew(!1),eC=(e,s)=>{let o=[...e.map(eA),...s.map(eF)];return(0,ek.Z)(o,8)};async function eE(e){let[s,t]=(await o(50333)(`./wc-${e}.txt`)).default.trim().split("\n\n").map(e=>e.trim().split("\n"));return eC(s,t)}let ey=(0,et.Z)(eE);var eU=o(50755);let eZ=(0,et.Z)(function(e){let s=document.createElement("link");return s.rel="preload",s.as="image",s.onerror=console.error,new Promise(o=>{s.onload=o,s.href=e,document.head.appendChild(s)})}),eO=e=>(0,eU.Z)(e.country??e.name),e$=e=>Promise.all(e.flatMap(e=>e.map(eO).map(eZ))),eM={Page:null,pots:null,season:N("cl","gs")},eN=(0,r.memo)(function({drawId:e,tournament:s,stage:o,season:t,onSeasonChange:g}){let i=(0,a.UO)(),[,c]=(0,l.Z)(),[{Page:v,pots:d},f]=(0,r.useState)(eM),u=async()=>{c({waiting:!0});try{let e="wc"===s?ey(t):eb(s,o,t),n=await eo(s,o),r=await e;if(!X){let e=[r.flat().filter(e=>!(e instanceof H))];await Promise.race([e$(e),R()(5e3)])}f({Page:n,pots:r,season:t}),c({waiting:!1,error:null})}catch(n){console.error(n),c({waiting:!1,error:"Could not fetch data"}),await R()(1e3);let{tournament:e,stage:s}=i,o=d&&t!==N(e,s)?t:void 0;g(e,s,o),c({error:null})}};(0,r.useEffect)(()=>{u()},[t,o,s]);let p="cl"===s||"el"===s||"ecl"===s;return d&&v&&(0,n.jsx)(v,{tournament:i.tournament,stage:i.stage,season:t,pots:d,isFirstPotShortDraw:p&&t>=2021},e)}),{defaultTournament:eP,defaultStage:eS}=d,ez=(0,r.memo)(function(){let e=(0,a.s0)(),[s,o]=(0,g.Z)(),[t]=(0,l.Z)(),[,c]=(0,i.Z)(),d=function(){let e=(0,a.bS)(":tournament/:stage/*"),s=e?.params,{tournament:o,stage:t}=s??{},n=s?+(s["*"]||N(o||null,t||null)):N(eP,eS);return(0,r.useMemo)(()=>({season:n,tournament:o,stage:t}),[n,o,t])}();(0,r.useEffect)(()=>{c(!1),o()},[d]);let{tournament:f,stage:u,season:p}=d,h=(0,r.useCallback)((s,o,t)=>{e(`/${s}/${o}${t?`/${t}`:""}`)},[]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m,{}),(0,n.jsx)(v,{$visible:!t.initial,children:(0,n.jsx)(_,{season:p,tournament:f,stage:u,onSeasonChange:h})}),f&&u?(0,n.jsx)(eN,{drawId:s,tournament:f,stage:u,season:p,onSeasonChange:h}):null,(0,n.jsxs)(a.Z5,{children:[(0,n.jsx)(a.AW,{path:"wc/ko/:season",element:(0,n.jsx)(a.Fg,{to:`/wc/${eS}`,replace:!0})}),(0,n.jsx)(a.AW,{path:"wc/ko",element:(0,n.jsx)(a.Fg,{to:`/wc/${eS}`,replace:!0})}),(0,n.jsx)(a.AW,{path:"wc",element:(0,n.jsx)(a.Fg,{to:`/wc/${eS}`,replace:!0})}),(0,n.jsx)(a.AW,{path:"el",element:(0,n.jsx)(a.Fg,{to:`/el/${eS}`,replace:!0})}),(0,n.jsx)(a.AW,{path:"cl",element:(0,n.jsx)(a.Fg,{to:`/cl/${eS}`,replace:!0})}),(0,n.jsx)(a.AW,{path:"/",element:(0,n.jsx)(a.Fg,{to:`/${eP}`,replace:!0})})]})]})})},27603:(e,s,o)=>{"use strict";o.d(s,{Z:()=>a});var t=o(67294),n=o(66749);let r=(0,o(37728).Z)((0,n.Z)("draw-")),a=()=>{let[e,s]=r();return[e,(0,t.useCallback)(()=>{s((0,n.Z)("draw-"))},[s])]}},56285:(e,s,o)=>{"use strict";o.d(s,{Z:()=>t});let t=(0,o(37728).Z)(!1)},43761:(e,s,o)=>{"use strict";o.d(s,{Z:()=>t});let t=(0,o(10659).Z)("store:xray",!1)},32108:(e,s,o)=>{"use strict";o.d(s,{T:()=>n,Z:()=>r});var t=o(70394);let n=(0,t.iv)`
  color: ${e=>e.theme.isDarkMode?"#f70":"blue"};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`,r=t.ZP.a`
  ${n}
`},50755:(e,s,o)=>{"use strict";o.d(s,{Z:()=>g});var t=o(42454),n=o(14855);let r=o(78635),a=o(89907),l={Belarus:a("./bcb.svg"),Moldova:a("./mda.svg")},g=(0,t.Z)(function(e){let s=l[e];if(s)return s;let o=n.Z[e]?.flag;return o?r(`./${o}.svg`):void 0})},78635:(e,s,o)=>{var t={"./ad.svg":25167,"./ae.svg":6952,"./af.svg":2629,"./ag.svg":96415,"./ai.svg":53286,"./al.svg":5527,"./am.svg":60224,"./ao.svg":24800,"./aq.svg":29665,"./ar.svg":69965,"./arab.svg":45867,"./as.svg":2037,"./at.svg":36867,"./au.svg":21517,"./aw.svg":28083,"./ax.svg":57852,"./az.svg":75412,"./ba.svg":86485,"./bb.svg":8838,"./bd.svg":39706,"./be.svg":24910,"./bf.svg":64131,"./bg.svg":65613,"./bh.svg":93322,"./bi.svg":38471,"./bj.svg":70121,"./bl.svg":5243,"./bm.svg":40305,"./bn.svg":82452,"./bo.svg":71942,"./bq.svg":23701,"./br.svg":43710,"./bs.svg":52741,"./bt.svg":6610,"./bv.svg":29408,"./bw.svg":59978,"./by.svg":47420,"./bz.svg":17041,"./ca.svg":98496,"./cc.svg":7209,"./cd.svg":1361,"./cefta.svg":97136,"./cf.svg":5575,"./cg.svg":47095,"./ch.svg":40231,"./ci.svg":50448,"./ck.svg":17495,"./cl.svg":80450,"./cm.svg":53525,"./cn.svg":44265,"./co.svg":83158,"./cp.svg":59038,"./cr.svg":74965,"./cu.svg":97004,"./cv.svg":38687,"./cw.svg":97871,"./cx.svg":73375,"./cy.svg":26865,"./cz.svg":57585,"./de.svg":19835,"./dg.svg":39081,"./dj.svg":48941,"./dk.svg":10685,"./dm.svg":88320,"./do.svg":14651,"./dz.svg":59692,"./eac.svg":15526,"./ec.svg":86859,"./ee.svg":15712,"./eg.svg":56059,"./eh.svg":3751,"./er.svg":26393,"./es-ct.svg":48451,"./es-ga.svg":35982,"./es-pv.svg":98378,"./es.svg":29600,"./et.svg":56054,"./eu.svg":76953,"./fi.svg":87263,"./fj.svg":23402,"./fk.svg":73278,"./fm.svg":98852,"./fo.svg":81673,"./fr.svg":2781,"./ga.svg":28098,"./gb-eng.svg":40275,"./gb-nir.svg":64492,"./gb-sct.svg":96922,"./gb-wls.svg":87064,"./gb.svg":83246,"./gd.svg":74941,"./ge.svg":50787,"./gf.svg":90133,"./gg.svg":21347,"./gh.svg":9120,"./gi.svg":21554,"./gl.svg":26625,"./gm.svg":62070,"./gn.svg":86678,"./gp.svg":21013,"./gq.svg":13384,"./gr.svg":11394,"./gs.svg":38866,"./gt.svg":2258,"./gu.svg":27576,"./gw.svg":25118,"./gy.svg":96688,"./hk.svg":25156,"./hm.svg":47191,"./hn.svg":76190,"./hr.svg":21423,"./ht.svg":3935,"./hu.svg":14993,"./ic.svg":53934,"./id.svg":84623,"./ie.svg":53088,"./il.svg":2419,"./im.svg":99127,"./in.svg":45827,"./io.svg":27072,"./iq.svg":10878,"./ir.svg":60009,"./is.svg":70284,"./it.svg":40777,"./je.svg":82443,"./jm.svg":36606,"./jo.svg":41026,"./jp.svg":8334,"./ke.svg":23871,"./kg.svg":8061,"./kh.svg":71340,"./ki.svg":71559,"./km.svg":542,"./kn.svg":48354,"./kp.svg":48788,"./kr.svg":75205,"./kw.svg":14253,"./ky.svg":91700,"./kz.svg":84499,"./la.svg":14051,"./lb.svg":21408,"./lc.svg":34978,"./li.svg":3409,"./lk.svg":79092,"./lr.svg":4686,"./ls.svg":79654,"./lt.svg":40645,"./lu.svg":48596,"./lv.svg":67921,"./ly.svg":80635,"./ma.svg":7419,"./mc.svg":57144,"./md.svg":49351,"./me.svg":55991,"./mf.svg":91406,"./mg.svg":25755,"./mh.svg":98980,"./mk.svg":98110,"./ml.svg":28619,"./mm.svg":31070,"./mn.svg":45299,"./mo.svg":90938,"./mp.svg":99148,"./mq.svg":42215,"./mr.svg":9209,"./ms.svg":35002,"./mt.svg":17022,"./mu.svg":33908,"./mv.svg":66106,"./mw.svg":24314,"./mx.svg":43360,"./my.svg":73352,"./mz.svg":19983,"./na.svg":47159,"./nc.svg":95511,"./ne.svg":72931,"./nf.svg":97816,"./ng.svg":83042,"./ni.svg":47750,"./nl.svg":70751,"./no.svg":29835,"./np.svg":5232,"./nr.svg":83260,"./nu.svg":84815,"./nz.svg":31090,"./om.svg":70984,"./pa.svg":59580,"./pc.svg":95150,"./pe.svg":85603,"./pf.svg":78377,"./pg.svg":70695,"./ph.svg":12212,"./pk.svg":78457,"./pl.svg":52488,"./pm.svg":98238,"./pn.svg":7054,"./pr.svg":86611,"./ps.svg":88099,"./pt.svg":91086,"./pw.svg":76489,"./py.svg":66261,"./qa.svg":30811,"./re.svg":24898,"./ro.svg":23501,"./rs.svg":94694,"./ru.svg":93129,"./rw.svg":60603,"./sa.svg":53262,"./sb.svg":50858,"./sc.svg":42950,"./sd.svg":33771,"./se.svg":27380,"./sg.svg":31686,"./sh-ac.svg":75602,"./sh-hl.svg":94287,"./sh-ta.svg":67861,"./sh.svg":15980,"./si.svg":28133,"./sj.svg":35341,"./sk.svg":32696,"./sl.svg":18240,"./sm.svg":19010,"./sn.svg":89458,"./so.svg":94373,"./sr.svg":77312,"./ss.svg":70146,"./st.svg":70947,"./sv.svg":73068,"./sx.svg":45775,"./sy.svg":9856,"./sz.svg":89276,"./tc.svg":58241,"./td.svg":34770,"./tf.svg":66238,"./tg.svg":99571,"./th.svg":53823,"./tj.svg":44623,"./tk.svg":15726,"./tl.svg":94918,"./tm.svg":67874,"./tn.svg":25790,"./to.svg":78243,"./tr.svg":38573,"./tt.svg":15871,"./tv.svg":29842,"./tw.svg":84355,"./tz.svg":44074,"./ua.svg":54778,"./ug.svg":42829,"./um.svg":24974,"./un.svg":6348,"./us.svg":45630,"./uy.svg":58835,"./uz.svg":13398,"./va.svg":66362,"./vc.svg":5384,"./ve.svg":29040,"./vg.svg":86998,"./vi.svg":31064,"./vn.svg":38638,"./vu.svg":58270,"./wf.svg":19174,"./ws.svg":63309,"./xk.svg":17676,"./xx.svg":61388,"./ye.svg":29645,"./yt.svg":12129,"./za.svg":74062,"./zm.svg":1079,"./zw.svg":61312};function n(e){return o(r(e))}function r(e){if(!o.o(t,e)){var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t[e]}n.keys=function(){return Object.keys(t)},n.resolve=r,e.exports=n,n.id=78635},89907:(e,s,o)=>{var t={"./bcb.svg":23703,"./mda.svg":91136,"assets/altFlags/bcb.svg":23703,"assets/altFlags/mda.svg":91136};function n(e){return o(r(e))}function r(e){if(!o.o(t,e)){var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t[e]}n.keys=function(){return Object.keys(t)},n.resolve=r,e.exports=n,n.id=89907},93225:(e,s,o)=>{var t={"./cl/gs/2000/pots.json":[58371,5227],"./cl/gs/2001/pots.json":[65046,1016],"./cl/gs/2002/pots.json":[98154,3466],"./cl/gs/2003/pots.json":[5305,1297],"./cl/gs/2004/pots.json":[37175,4338],"./cl/gs/2005/pots.json":[40423,3237],"./cl/gs/2006/pots.json":[47083,2434],"./cl/gs/2007/pots.json":[60553,2356],"./cl/gs/2008/pots.json":[59890,9104],"./cl/gs/2009/pots.json":[550,4238],"./cl/gs/2010/pots.json":[79859,8771],"./cl/gs/2011/pots.json":[39889,7326],"./cl/gs/2012/pots.json":[66348,6138],"./cl/gs/2013/pots.json":[36995,2635],"./cl/gs/2014/pots.json":[51441,970],"./cl/gs/2015/pots.json":[81438,1322],"./cl/gs/2016/pots.json":[3456,6987],"./cl/gs/2017/pots.json":[1256,9353],"./cl/gs/2018/pots.json":[26388,5045],"./cl/gs/2019/pots.json":[94262,395],"./cl/gs/2020/pots.json":[55678,1770],"./cl/gs/2021/pots.json":[40504,1821],"./cl/gs/2022/pots.json":[60856,6860],"./cl/gs/2023/pots.json":[69480,7892],"./cl/ko/2003/pots.json":[5894,9927],"./cl/ko/2004/pots.json":[2463,1338],"./cl/ko/2005/pots.json":[47554,7269],"./cl/ko/2006/pots.json":[95845,4204],"./cl/ko/2007/pots.json":[20587,6195],"./cl/ko/2008/pots.json":[43087,1652],"./cl/ko/2009/pots.json":[69345,2732],"./cl/ko/2010/pots.json":[11675,6066],"./cl/ko/2011/pots.json":[73775,351],"./cl/ko/2012/pots.json":[69985,3104],"./cl/ko/2013/pots.json":[79102,7478],"./cl/ko/2014/pots.json":[74744,9949],"./cl/ko/2015/pots.json":[26656,9258],"./cl/ko/2016/pots.json":[76387,4524],"./cl/ko/2017/pots.json":[41747,7711],"./cl/ko/2018/pots.json":[92870,894],"./cl/ko/2019/pots.json":[72017,8712],"./cl/ko/2020/pots.json":[9555,4487],"./cl/ko/2021/pots.json":[39196,2819],"./cl/ko/2022/pots.json":[81698,8118],"./ecl/gs/2021/pots.json":[20563,3126],"./ecl/gs/2022/pots.json":[16346,7508],"./ecl/gs/2023/pots.json":[19018,6315],"./el/gs/2009/pots.json":[23782,7633],"./el/gs/2010/pots.json":[74813,3652],"./el/gs/2011/pots.json":[12523,3592],"./el/gs/2012/pots.json":[97891,6810],"./el/gs/2013/pots.json":[54976,8515],"./el/gs/2014/pots.json":[28486,1765],"./el/gs/2015/pots.json":[44046,3554],"./el/gs/2016/pots.json":[45678,4724],"./el/gs/2017/pots.json":[76191,3669],"./el/gs/2018/pots.json":[94676,7352],"./el/gs/2019/pots.json":[86293,1600],"./el/gs/2020/pots.json":[38280,8914],"./el/gs/2021/pots.json":[36915,2455],"./el/gs/2022/pots.json":[46778,6369],"./el/gs/2023/pots.json":[70401,3549],"./el/ko/2009/pots.json":[80577,8635],"./el/ko/2010/pots.json":[50017,8422],"./el/ko/2011/pots.json":[35351,8711],"./el/ko/2012/pots.json":[60060,1854],"./el/ko/2013/pots.json":[37469,2261],"./el/ko/2014/pots.json":[79614,5230],"./el/ko/2015/pots.json":[70794,2565],"./el/ko/2016/pots.json":[65490,4933],"./el/ko/2017/pots.json":[92148,1007],"./el/ko/2018/pots.json":[18414,1728],"./el/ko/2019/pots.json":[73444,604],"./el/ko/2020/pots.json":[70738,8540],"./el/ko/2021/pots.json":[60949,5782]};function n(e){if(!o.o(t,e))return Promise.resolve().then(()=>{var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s});var s=t[e],n=s[0];return o.e(s[1]).then(()=>o.t(n,19))}n.keys=()=>Object.keys(t),n.id=93225,e.exports=n},20773:(e,s,o)=>{var t={"./cl/gs/2018/pairings.txt":[20401,5557],"./cl/gs/2019/pairings.txt":[91099,6299],"./cl/gs/2020/pairings.txt":[72021,7941],"./cl/gs/2021/pairings.txt":[72717,9802],"./cl/gs/2022/pairings.txt":[60005,6698],"./cl/gs/2023/pairings.txt":[44210,6530],"./el/gs/2018/pairings.txt":[31221,2210],"./el/gs/2019/pairings.txt":[73092,135],"./el/gs/2020/pairings.txt":[53610,1675]};function n(e){if(!o.o(t,e))return Promise.resolve().then(()=>{var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s});var s=t[e],n=s[0];return o.e(s[1]).then(()=>o.t(n,17))}n.keys=()=>Object.keys(t),n.id=20773,e.exports=n},50333:(e,s,o)=>{var t={"./wc-2018.txt":[18688,7413],"./wc-2022.txt":[32500,671]};function n(e){if(!o.o(t,e))return Promise.resolve().then(()=>{var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s});var s=t[e],n=s[0];return o.e(s[1]).then(()=>o.t(n,17))}n.keys=()=>Object.keys(t),n.id=50333,e.exports=n},79526:(e,s,o)=>{var t={"./cl/gs":[45290,3748,6902,8235,3703,3561,1739],"./cl/gs/":[45290,3748,6902,8235,3703,3561,1739],"./cl/gs/allPossibleGroupsWorker":[67685,3748,6902,7180,3520,1839],"./cl/gs/allPossibleGroupsWorker.ts":[67685,3748,6902,7180,3520,1839],"./cl/gs/firstPossibleGroupWorker":[23407,3748,6902,7180,3520,9039],"./cl/gs/firstPossibleGroupWorker.ts":[23407,3748,6902,7180,3520,9039],"./cl/gs/index":[45290,3748,6902,8235,3703,3561,1739],"./cl/gs/index.tsx":[45290,3748,6902,8235,3703,3561,1739],"./cl/ko":[37158,3748,6902,8235,3561,6593],"./cl/ko/":[37158,3748,6902,8235,3561,6593],"./cl/ko/index":[37158,3748,6902,8235,3561,6593],"./cl/ko/index.tsx":[37158,3748,6902,8235,3561,6593],"./cl/ko/worker":[87600,3748,7180,6525],"./cl/ko/worker.ts":[87600,3748,7180,6525],"./el/gs":[71158,3748,6902,8235,3561,3602],"./el/gs/":[71158,3748,6902,8235,3561,3602],"./el/gs/index":[71158,3748,6902,8235,3561,3602],"./el/gs/index.tsx":[71158,3748,6902,8235,3561,3602],"./el/gs/worker":[23091,3748,6902,7180,3520,4194],"./el/gs/worker.ts":[23091,3748,6902,7180,3520,4194],"./el/ko":[27045,3748,6902,8235,3561,6349],"./el/ko/":[27045,3748,6902,8235,3561,6349],"./el/ko/index":[27045,3748,6902,8235,3561,6349],"./el/ko/index.tsx":[27045,3748,6902,8235,3561,6349],"./el/ko/worker":[97074,3748,7180,425],"./el/ko/worker.ts":[97074,3748,7180,425],"./wc/gs":[72331,3748,6902,8235,3561,5527],"./wc/gs/":[72331,3748,6902,8235,3561,5527],"./wc/gs/index":[72331,3748,6902,8235,3561,5527],"./wc/gs/index.tsx":[72331,3748,6902,8235,3561,5527],"./wc/gs/worker":[3930,3748,6902,7180,3520,3413,8654],"./wc/gs/worker.ts":[3930,3748,6902,7180,3520,3413,8654]};function n(e){if(!o.o(t,e))return Promise.resolve().then(()=>{var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s});var s=t[e],n=s[0];return Promise.all(s.slice(1).map(o.e)).then(()=>o(n))}n.keys=()=>Object.keys(t),n.id=79526,e.exports=n},23703:(e,s,o)=>{"use strict";e.exports=o.p+"images/bcb.60cf72b1.svg"},91136:(e,s,o)=>{"use strict";e.exports=o.p+"images/mda.44107261.svg"}}]);