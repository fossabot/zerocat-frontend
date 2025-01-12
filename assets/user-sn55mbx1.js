import{l as y,d as U}from"./db-CM6QAmPf.js";import{f as h,a as C,r as v,b as D,l as _}from"./user-CWwSvDcR.js";import{_ as k,o,c as m,w as s,a as t,O as r,Z as p,N as n,aa as I,e as S,T as N,S as x,L,U as d,$ as w,R as Q,ac as T,ad as g}from"./index-aJtoyxvm.js";import{c,a as V,V as b}from"./VCard-DznyS40J.js";import{V as F}from"./VForm-CKgMtX2L.js";import{V as B}from"./VAlert-DDPbQe-R.js";import{V as A}from"./VContainer-BwFXm2yi.js";/* empty css              */const O={data(){return{inputValue:"",users:[],status:"",UserID:0,liveQuerySubscription:null}},methods:{async fetchUsers(){const l=this.inputValue.split(",").map(f=>Number(f.trim())),e=await h(l);typeof e=="object"&&!Array.isArray(e)?this.users=[e]:this.users=e},async addUser(){const l={id:Number(this.UserID),display_name:"测试用户",motto:"这是一个测试",images:[],regTime:new Date().toISOString(),sex:"未知",username:"testuser"};this.status=await C(l)},async removeUser(){this.status=await v(Number(this.UserID)),this.UserID=0},async refreshUser(){this.status=await D(Number(this.UserID))},startLiveFetch(){const l=this.inputValue.split(",").map(e=>Number(e.trim()));this.liveQuerySubscription&&this.liveQuerySubscription.unsubscribe(),this.liveQuerySubscription=_(l,e=>{this.users=e})}},mounted(){y(()=>U.users.toArray()).subscribe(l=>{this.users=l})},beforeDestroy(){this.liveQuerySubscription&&this.liveQuerySubscription.unsubscribe()}},j={class:"d-flex gap-2"};function q(l,e,f,E,a,u){return o(),m(A,null,{default:s(()=>[t(b,{border:""},{default:s(()=>[t(c,null,{default:s(()=>e[2]||(e[2]=[r("获取数据")])),_:1}),t(V,null,{default:s(()=>[t(p,{modelValue:a.inputValue,"onUpdate:modelValue":e[0]||(e[0]=i=>a.inputValue=i),label:"输入ID",class:"mb-4"},null,8,["modelValue"]),t(n,{onClick:u.startLiveFetch,color:"primary",class:"mb-4"},{default:s(()=>e[3]||(e[3]=[r("实时获取数据")])),_:1},8,["onClick"]),t(I,null,{default:s(()=>[(o(!0),S(x,null,N(a.users,i=>(o(),m(Q,{key:i.id},{default:s(()=>[t(T,null,{default:s(()=>[r(d(i.display_name||"未缓存"),1)]),_:2},1024),t(g,null,{default:s(()=>[r(d(i.motto||""),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),t(b,{class:"mt-4",border:""},{default:s(()=>[t(c,null,{default:s(()=>e[4]||(e[4]=[r("添加数据")])),_:1}),t(V,null,{default:s(()=>[t(F,null,{default:s(()=>[t(p,{modelValue:a.UserID,"onUpdate:modelValue":e[1]||(e[1]=i=>a.UserID=i),label:"ID",type:"number",required:""},null,8,["modelValue"]),L("div",j,[t(n,{onClick:u.addUser,color:"primary"},{default:s(()=>e[5]||(e[5]=[r("添加")])),_:1},8,["onClick"]),t(n,{onClick:u.removeUser,color:"error"},{default:s(()=>e[6]||(e[6]=[r("删除")])),_:1},8,["onClick"]),t(n,{onClick:u.refreshUser,color:"info"},{default:s(()=>e[7]||(e[7]=[r("刷新")])),_:1},8,["onClick"])]),a.status?(o(),m(B,{key:0,type:a.status.includes("成功")?"success":"error",class:"mt-4"},{default:s(()=>[r(d(a.status),1)]),_:1},8,["type"])):w("",!0)]),_:1})]),_:1})]),_:1})]),_:1})}const P=k(O,[["render",q]]);export{P as default};
