import{bS as h,ce as g,cg as u,o as m,c as p,w as s,a,cq as _,O as l,cj as d,A as C,aZ as x,F as $,cm as y,aw as k,cD as v,G as O,bc as V,cE as P,cr as T,cs as b,cu as w}from"./index-B2HYbJQK.js";import{V as L,a as N}from"./VRow-CEXFBg7K.js";import{V as B}from"./VContainer-WBUV_8zJ.js";import{V as D}from"./VDialog-BBabz6Wh.js";import{V as E}from"./VSpacer-DekRO9kK.js";/* empty css              */const S={data(){return{totpList:[],loading:!1,renameDialog:!1,deleteDialog:!1,selectedTOTPId:null,newName:"",renameError:"",nameRules:[t=>t?!0:"Name is required.",t=>(t==null?void 0:t.length)<=100?!0:"Name must be less than 10 characters."]}},setup(){g({title:"验证器"})},methods:{async fetchTOTPList(){this.loading=!0;try{const t=await u.get("/account/totp/list");t.status==="success"?this.totpList=t.data.list:this.$toast.add({severity:"error",summary:"错误",detail:t.message,life:3e3})}catch(t){this.$toast.add({severity:"error",summary:"错误",detail:t.message,life:3e3})}finally{this.loading=!1}},async renameTOTP(t,e){if(e==""){this.renameError="名称不能为空";return}try{const i=await u.post("/account/totp/rename",{totp_id:t,name:e});i.status==="success"?(this.fetchTOTPList(),this.$toast.add({severity:"success",summary:"成功",detail:"验证器重命名成功",life:3e3})):this.$toast.add({severity:"error",summary:"错误",detail:i.message,life:3e3})}catch(i){this.$toast.add({severity:"error",summary:"错误",detail:i.message,life:3e3})}},async deleteTOTP(t){try{const e=await u.post("/account/totp/delete",{totp_id:t});e.status==="success"?(this.fetchTOTPList(),this.$toast.add({severity:"success",summary:"成功",detail:"验证器删除成功",life:3e3})):this.$toast.add({severity:"error",summary:"错误",detail:e.message,life:3e3})}catch(e){this.$toast.add({severity:"error",summary:"错误",detail:e.message,life:3e3})}}},mounted(){this.fetchTOTPList()}},q={class:"headline"};function F(t,e,i,I,c,f){return m(),p(B,null,{default:s(()=>[a(d,{to:"./totp/add",color:"primary",class:"mb-4"},{default:s(()=>[a(_,{left:""},{default:s(()=>e[0]||(e[0]=[l("mdi-plus")])),_:1}),e[1]||(e[1]=l("新的验证器 "))]),_:1}),a(L,null,{default:s(()=>[(m(!0),C($,null,x(c.totpList,r=>(m(),p(N,{key:r.id,cols:"12",md:"4"},{default:s(()=>[a(D,{"max-width":"500"},{activator:s(({props:n})=>[a(y,k({border:"",ref_for:!0},n),{default:s(()=>[a(v,null,{default:s(()=>[O("span",q,V(r.name),1)]),_:2},1024),a(P,null,{default:s(()=>[l(V(r.status),1)]),_:2},1024),a(T,null,{default:s(()=>e[2]||(e[2]=[l(" 点击打开管理 ")])),_:1})]),_:2},1040)]),default:s(({isActive:n})=>[a(y,{title:r.name,border:""},{default:s(()=>[a(T,null,{default:s(()=>[a(b,{modelValue:r.name,"onUpdate:modelValue":o=>r.name=o,counter:100,rules:c.nameRules,label:"验证器名称",required:""},null,8,["modelValue","onUpdate:modelValue","rules"]),a(d,{color:"primary",onClick:o=>f.renameTOTP(r.id,r.name)},{default:s(()=>e[3]||(e[3]=[l("重命名")])),_:2},1032,["onClick"])]),_:2},1024),a(w,null,{default:s(()=>[a(d,{color:"error",variant:"text",onClick:o=>f.deleteTOTP(r.id),border:""},{default:s(()=>e[4]||(e[4]=[l("删除")])),_:2},1032,["onClick"]),a(E),a(d,{text:"关闭",onClick:o=>n.value=!1},null,8,["onClick"])]),_:2},1024)]),_:2},1032,["title"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}const Z=h(S,[["render",F]]);export{Z as default};
