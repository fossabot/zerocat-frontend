import{_ as d,h as u,o as c,c as i,w as s,a as t,s as r,m,p as V,q as j}from"./index-CI638llS.js";import{V as a}from"./VTextarea-BcvEfa28.js";import{V as f}from"./VContainer-Da4iChQS.js";const x={data(){return{proejct:{indexhtml:"",stylecss:"",scriptjs:""}}},methods:{async save(){await u({url:"/project/update/148",data:{"index.html":this.proejct.indexhtml,"style.css":this.proejct.stylecss,"script.js":this.proejct.scriptjs},method:"post"}).then(n=>{console.log(n)})}}};function y(n,e,_,h,l,p){return c(),i(f,null,{default:s(()=>[t(j,null,{default:s(()=>[t(r,{cols:"6"},{default:s(()=>[t(a,{modelValue:l.proejct.indexhtml,"onUpdate:modelValue":e[0]||(e[0]=o=>l.proejct.indexhtml=o)},null,8,["modelValue"])]),_:1}),t(r,{cols:"6"},{default:s(()=>[t(a,{modelValue:l.proejct.stylecss,"onUpdate:modelValue":e[1]||(e[1]=o=>l.proejct.stylecss=o)},null,8,["modelValue"])]),_:1}),t(r,{cols:"6"},{default:s(()=>[t(a,{modelValue:l.proejct.scriptjs,"onUpdate:modelValue":e[2]||(e[2]=o=>l.proejct.scriptjs=o)},null,8,["modelValue"])]),_:1}),t(r,{cols:"3"},{default:s(()=>[t(m,{onClick:e[3]||(e[3]=o=>p.save())},{default:s(()=>e[4]||(e[4]=[V(" 搜索 ")])),_:1})]),_:1})]),_:1})]),_:1})}const v=d(x,[["render",y]]);export{v as default};
