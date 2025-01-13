var ee=Object.defineProperty;var te=(t,e,r)=>e in t?ee(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var S=(t,e,r)=>te(t,typeof e!="symbol"?e+"":e,r);import{bS as re,ce as ae,r as C,o as j,c as I,w as p,a as g,cs as ne,cp as se,A as oe,aZ as ie,F as ce,G as le,O as V,cl as W,cj as ue,z as de,cm as me,cF as fe,cD as he,bc as F,cE as ge}from"./index-B2HYbJQK.js";import{_ as pe}from"./43-lazyload-CBkwrR6M.js";import{V as U,a as B}from"./VRow-CEXFBg7K.js";import{V as ye}from"./VPagination-HufVOtbT.js";import{V as _e}from"./VContainer-WBUV_8zJ.js";/* empty css              */function Pe(){function t(e){return new Promise(r=>{let a=new XMLHttpRequest;a.open(e.method,e.url,!0),Object.keys(e.headers).forEach(s=>a.setRequestHeader(s,e.headers[s]));let n=(s,o)=>setTimeout(()=>{a.abort(),r({status:0,content:o,isTimedOut:!0})},s),l=n(e.connectTimeout,"Connection timeout"),i;a.onreadystatechange=()=>{a.readyState>a.OPENED&&i===void 0&&(clearTimeout(l),i=n(e.responseTimeout,"Socket timeout"))},a.onerror=()=>{a.status===0&&(clearTimeout(l),clearTimeout(i),r({content:a.responseText||"Network request failed",status:a.status,isTimedOut:!1}))},a.onload=()=>{clearTimeout(l),clearTimeout(i),r({content:a.responseText,status:a.status,isTimedOut:!1})},a.send(e.data)})}return{send:t}}function be(t){let e;const r=`algolia-client-js-${t.key}`;function a(){return e===void 0&&(e=t.localStorage||window.localStorage),e}function n(){return JSON.parse(a().getItem(r)||"{}")}function l(s){a().setItem(r,JSON.stringify(s))}function i(){const s=t.timeToLive?t.timeToLive*1e3:null,o=n(),f=Object.fromEntries(Object.entries(o).filter(([,m])=>m.timestamp!==void 0));if(l(f),!s)return;const d=Object.fromEntries(Object.entries(f).filter(([,m])=>{const _=new Date().getTime();return!(m.timestamp+s<_)}));l(d)}return{get(s,o,f={miss:()=>Promise.resolve()}){return Promise.resolve().then(()=>(i(),n()[JSON.stringify(s)])).then(d=>Promise.all([d?d.value:o(),d!==void 0])).then(([d,m])=>Promise.all([d,m||f.miss(d)])).then(([d])=>d)},set(s,o){return Promise.resolve().then(()=>{const f=n();return f[JSON.stringify(s)]={timestamp:new Date().getTime(),value:o},a().setItem(r,JSON.stringify(f)),o})},delete(s){return Promise.resolve().then(()=>{const o=n();delete o[JSON.stringify(s)],a().setItem(r,JSON.stringify(o))})},clear(){return Promise.resolve().then(()=>{a().removeItem(r)})}}}function we(){return{get(t,e,r={miss:()=>Promise.resolve()}){return e().then(n=>Promise.all([n,r.miss(n)])).then(([n])=>n)},set(t,e){return Promise.resolve(e)},delete(t){return Promise.resolve()},clear(){return Promise.resolve()}}}function E(t){const e=[...t.caches],r=e.shift();return r===void 0?we():{get(a,n,l={miss:()=>Promise.resolve()}){return r.get(a,n,l).catch(()=>E({caches:e}).get(a,n,l))},set(a,n){return r.set(a,n).catch(()=>E({caches:e}).set(a,n))},delete(a){return r.delete(a).catch(()=>E({caches:e}).delete(a))},clear(){return r.clear().catch(()=>E({caches:e}).clear())}}}function $(t={serializable:!0}){let e={};return{get(r,a,n={miss:()=>Promise.resolve()}){const l=JSON.stringify(r);if(l in e)return Promise.resolve(t.serializable?JSON.parse(e[l]):e[l]);const i=a();return i.then(s=>n.miss(s)).then(()=>i)},set(r,a){return e[JSON.stringify(r)]=t.serializable?JSON.stringify(a):a,Promise.resolve(a)},delete(r){return delete e[JSON.stringify(r)],Promise.resolve()},clear(){return e={},Promise.resolve()}}}function ve(t){const e={value:`Algolia for JavaScript (${t})`,add(r){const a=`; ${r.segment}${r.version!==void 0?` (${r.version})`:""}`;return e.value.indexOf(a)===-1&&(e.value=`${e.value}${a}`),e}};return e}function Te(t,e,r="WithinHeaders"){const a={"x-algolia-api-key":e,"x-algolia-application-id":t};return{headers(){return r==="WithinHeaders"?a:{}},queryParameters(){return r==="WithinQueryParameters"?a:{}}}}function Se({algoliaAgents:t,client:e,version:r}){const a=ve(r).add({segment:e,version:r});return t.forEach(n=>a.add(n)),a}function Ae(){return{debug(t,e){return Promise.resolve()},info(t,e){return Promise.resolve()},error(t,e){return Promise.resolve()}}}var G=2*60*1e3;function Q(t,e="up"){const r=Date.now();function a(){return e==="up"||Date.now()-r>G}function n(){return e==="timed out"&&Date.now()-r<=G}return{...t,status:e,lastUpdate:r,isUp:a,isTimedOut:n}}var K=class extends Error{constructor(e,r){super(e);S(this,"name","AlgoliaError");r&&(this.name=r)}},X=class extends K{constructor(e,r,a){super(e,a);S(this,"stackTrace");this.stackTrace=r}},xe=class extends X{constructor(t){super("Unreachable hosts - your application id may be incorrect. If the error persists, please reach out to the Algolia Support team: https://alg.li/support.",t,"RetryError")}},J=class extends X{constructor(e,r,a,n="ApiError"){super(e,a,n);S(this,"status");this.status=r}},Ee=class extends K{constructor(e,r){super(e,"DeserializationError");S(this,"response");this.response=r}},Ne=class extends J{constructor(e,r,a,n){super(e,r,n,"DetailedApiError");S(this,"error");this.error=a}};function Ce(t){const e=t;for(let r=t.length-1;r>0;r--){const a=Math.floor(Math.random()*(r+1)),n=t[r];e[r]=t[a],e[a]=n}return e}function ke(t,e,r){const a=Oe(r);let n=`${t.protocol}://${t.url}${t.port?`:${t.port}`:""}/${e.charAt(0)==="/"?e.substring(1):e}`;return a.length&&(n+=`?${a}`),n}function Oe(t){return Object.keys(t).filter(e=>t[e]!==void 0).sort().map(e=>`${e}=${encodeURIComponent(Object.prototype.toString.call(t[e])==="[object Array]"?t[e].join(","):t[e]).replace(/\+/g,"%20")}`).join("&")}function qe(t,e){if(t.method==="GET"||t.data===void 0&&e.data===void 0)return;const r=Array.isArray(t.data)?t.data:{...t.data,...e.data};return JSON.stringify(r)}function je(t,e,r){const a={Accept:"application/json",...t,...e,...r},n={};return Object.keys(a).forEach(l=>{const i=a[l];n[l.toLowerCase()]=i}),n}function Ve(t){try{return JSON.parse(t.content)}catch(e){throw new Ee(e.message,t)}}function $e({content:t,status:e},r){try{const a=JSON.parse(t);return"error"in a?new Ne(a.message,e,a.error,r):new J(a.message,e,r)}catch{}return new J(t,e,r)}function Je({isTimedOut:t,status:e}){return!t&&~~e===0}function Re({isTimedOut:t,status:e}){return t||Je({isTimedOut:t,status:e})||~~(e/100)!==2&&~~(e/100)!==4}function ze({status:t}){return~~(t/100)===2}function De(t){return t.map(e=>Y(e))}function Y(t){const e=t.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return{...t,request:{...t.request,headers:{...t.request.headers,...e}}}}function Le({hosts:t,hostsCache:e,baseHeaders:r,logger:a,baseQueryParameters:n,algoliaAgent:l,timeouts:i,requester:s,requestsCache:o,responsesCache:f}){async function d(c){const u=await Promise.all(c.map(h=>e.get(h,()=>Promise.resolve(Q(h))))),P=u.filter(h=>h.isUp()),b=u.filter(h=>h.isTimedOut()),A=[...P,...b];return{hosts:A.length>0?A:c,getTimeout(h,v){return(b.length===0&&h===0?1:b.length+3+h)*v}}}async function m(c,u,P=!0){const b=[],A=qe(c,u),w=je(r,c.headers,u.headers),h=c.method==="GET"?{...c.data,...u.data}:{},v={...n,...c.queryParameters,...h};if(l.value&&(v["x-algolia-agent"]=l.value),u&&u.queryParameters)for(const y of Object.keys(u.queryParameters))!u.queryParameters[y]||Object.prototype.toString.call(u.queryParameters[y])==="[object Object]"?v[y]=u.queryParameters[y]:v[y]=u.queryParameters[y].toString();let N=0;const R=async(y,k)=>{const x=y.pop();if(x===void 0)throw new xe(De(b));const O={...i,...u.timeouts},D={data:A,headers:w,method:c.method,url:ke(x,c.path,v),connectTimeout:k(N,O.connect),responseTimeout:k(N,P?O.read:O.write)},L=q=>{const H={request:D,response:q,host:x,triesLeft:y.length};return b.push(H),H},T=await s.send(D);if(Re(T)){const q=L(T);return T.isTimedOut&&N++,a.info("Retryable failure",Y(q)),await e.set(x,Q(x,T.isTimedOut?"timed out":"down")),R(y,k)}if(ze(T))return Ve(T);throw L(T),$e(T,b)},M=t.filter(y=>y.accept==="readWrite"||(P?y.accept==="read":y.accept==="write")),z=await d(M);return R([...z.hosts].reverse(),z.getTimeout)}function _(c,u={}){const P=c.useReadTransporter||c.method==="GET";if(!P)return m(c,u,P);const b=()=>m(c,u);if((u.cacheable||c.cacheable)!==!0)return b();const w={request:c,requestOptions:u,transporter:{queryParameters:n,headers:r}};return f.get(w,()=>o.get(w,()=>o.set(w,b()).then(h=>Promise.all([o.delete(w),h]),h=>Promise.all([o.delete(w),Promise.reject(h)])).then(([h,v])=>v)),{miss:h=>f.set(w,h)})}return{hostsCache:e,requester:s,timeouts:i,logger:a,algoliaAgent:l,baseHeaders:r,baseQueryParameters:n,hosts:t,request:_,requestsCache:o,responsesCache:f}}var Z="5.19.0";function He(t){return[{url:`${t}-dsn.algolia.net`,accept:"read",protocol:"https"},{url:`${t}.algolia.net`,accept:"write",protocol:"https"}].concat(Ce([{url:`${t}-1.algolianet.com`,accept:"readWrite",protocol:"https"},{url:`${t}-2.algolianet.com`,accept:"readWrite",protocol:"https"},{url:`${t}-3.algolianet.com`,accept:"readWrite",protocol:"https"}]))}function Ie({appId:t,apiKey:e,authMode:r,algoliaAgents:a,...n}){const l=Te(t,e,r),i=Le({hosts:He(t),...n,algoliaAgent:Se({algoliaAgents:a,client:"Lite",version:Z}),baseHeaders:{"content-type":"text/plain",...l.headers(),...n.baseHeaders},baseQueryParameters:{...l.queryParameters(),...n.baseQueryParameters}});return{transporter:i,appId:t,apiKey:e,clearCache(){return Promise.all([i.requestsCache.clear(),i.responsesCache.clear()]).then(()=>{})},get _ua(){return i.algoliaAgent.value},addAlgoliaAgent(s,o){i.algoliaAgent.add({segment:s,version:o})},setClientApiKey({apiKey:s}){!r||r==="WithinHeaders"?i.baseHeaders["x-algolia-api-key"]=s:i.baseQueryParameters["x-algolia-api-key"]=s},searchForHits(s,o){return this.search(s,o)},searchForFacets(s,o){return this.search(s,o)},customPost({path:s,parameters:o,body:f},d){if(!s)throw new Error("Parameter `path` is required when calling `customPost`.");const u={method:"POST",path:"/{path}".replace("{path}",s),queryParameters:o||{},headers:{},data:f||{}};return i.request(u,d)},getRecommendations(s,o){if(s&&Array.isArray(s)&&(s={requests:s}),!s)throw new Error("Parameter `getRecommendationsParams` is required when calling `getRecommendations`.");if(!s.requests)throw new Error("Parameter `getRecommendationsParams.requests` is required when calling `getRecommendations`.");const _={method:"POST",path:"/1/indexes/*/recommendations",queryParameters:{},headers:{},data:s,useReadTransporter:!0,cacheable:!0};return i.request(_,o)},search(s,o){if(s&&Array.isArray(s)&&(s={requests:s.map(({params:u,...P})=>P.type==="facet"?{...P,...u,type:"facet"}:{...P,...u,facet:void 0,maxFacetHits:void 0,facetQuery:void 0})}),!s)throw new Error("Parameter `searchMethodParams` is required when calling `search`.");if(!s.requests)throw new Error("Parameter `searchMethodParams.requests` is required when calling `search`.");const _={method:"POST",path:"/1/indexes/*/queries",queryParameters:{},headers:{},data:s,useReadTransporter:!0,cacheable:!0};return i.request(_,o)}}}function We(t,e,r){return Ie({appId:t,apiKey:e,timeouts:{connect:1e3,read:2e3,write:3e4},logger:Ae(),requester:Pe(),algoliaAgents:[{segment:"Browser"}],authMode:"WithinQueryParameters",responsesCache:$(),requestsCache:$({serializable:!1}),hostsCache:E({caches:[be({key:`${Z}-${t}`}),$()]}),...r})}const Fe="/assets/Algolia-logo-blue-BPCoiGTx.svg",Ue={setup(){ae({title:"Algolia Search"})},data(){return{algolia_index_name:"zerocat",algolia_app_id:"EC82GCN8JL",algolia_api_key:"bb7a110561bf44209973e461d82987b9",searchClient:We("EC82GCN8JL","bb7a110561bf44209973e461d82987b9")}}};function Be(t,e,r,a,n,l){const i=C("ais-search-box"),s=C("ais-hits"),o=C("ais-pagination"),f=C("ais-instant-search");return n.algolia_app_id&&n.algolia_api_key&&n.algolia_index_name?(j(),I(_e,{key:0},{default:p(()=>[g(f,{"search-client":n.searchClient,"index-name":n.algolia_index_name},{default:p(()=>[g(i,null,{default:p(({isSearchStalled:d,refine:m})=>[g(ne,{clearable:"",label:"键入以搜索",variant:"solo-filled",onInput:_=>m(_.target.value)},{loader:p(()=>[g(se,{active:d,indeterminate:""},null,8,["active"])]),_:2},1032,["onInput"])]),_:1}),g(s,null,{default:p(({items:d})=>[g(U,null,{default:p(()=>[(j(!0),oe(ce,null,ie(d,m=>(j(),I(B,{cols:"12",xs:"12",sm:"6",md:"4",lg:"3",xl:"2",xxl:"2",key:m.objectID},{default:p(()=>[g(me,{to:"/projects/"+m.id,style:{"aspect-ratio":"4/3"},rounded:"lg"},{default:p(()=>[g(W,{src:"https://s4-1.wuyuan.1r.ink/scratch_slt/"+m.id,class:"align-end","lazy-src":pe,height:"100%",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",cover:""},{default:p(()=>[g(fe,null,{default:p(()=>[g(he,null,{default:p(()=>[V(F(m.title),1)]),_:2},1024),g(ge,null,{default:p(()=>[V(F(m.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["src"])]),_:2},1032,["to"])]),_:2},1024))),128))]),_:2},1024)]),_:1}),g(U,null,{default:p(()=>[g(B,null,{default:p(()=>[g(o,null,{default:p(({currentRefinement:d,nbPages:m,refine:_})=>[g(ye,{length:m,rounded:"circle","v-model":d,"onUpdate:modelValue":c=>_(c),onInput:c=>_(c)},null,8,["length","v-model","onUpdate:modelValue","onInput"])]),_:1})]),_:1})]),_:1})]),_:1},8,["search-client","index-name"]),e[0]||(e[0]=le("br",null,null,-1)),e[1]||(e[1]=V("Search by ")),g(ue,{variant:"text",href:"https://algolia.com/",target:"_blank",rel:"noopener noreferrer"},{default:p(()=>[g(W,{src:Fe,height:"1.5rem",width:"5rem"})]),_:1})]),_:1})):de("",!0)}const et=re(Ue,[["render",Be]]);export{et as default};
