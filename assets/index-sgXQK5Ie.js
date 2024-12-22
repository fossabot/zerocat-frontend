import{a as I,_ as N}from"./Comment-D-9P23FV.js";import{_ as A}from"./NewProjectList-CP9Nqvar.js";import{_ as B,H as h,J as _,o as n,e as p,a as t,w as e,S as v,T as R,R as L,am as U,O as i,U as l,an as G,aa as J,G as w,c as m,L as a,M as k,Q as P,$ as j,N as b}from"./index-0PIbxfJS.js";import{V as O}from"./VDialog-pCsDy7L9.js";import{P as S}from"./ProjectRunner-DfNzkZyJ.js";import{o as Q}from"./openEdit-DBNuVmNU.js";import{a as g,V as Z}from"./VRow-FS9GjTh2.js";import{V as x,e as C,c as T,d as D}from"./VCard-tHK_FF4Q.js";import{V as d}from"./VChip-k2PkLAQI.js";import{V as q}from"./VContainer-BYFFn_HF.js";import"./VForm-eOXXV7o7.js";import"./VTextarea-3aoXdSek.js";import"./VSpacer-SjNTJIHs.js";/* empty css              */import"./VExpansionPanels-D2eiPPgf.js";const z={components:{NewProjectList:A},name:"addtolist",data(){return{localuser:h,userinfo:h.user,newProjectListDialog:!1,projectLists:[]}},methods:{async getProjectList(){this.projectLists=(await _({url:"/projectlist/check?projectid="+this.$route.params.id,method:"get"})).data},async addProjectToList(u){await _({url:"/projectlist/add",data:{userid:this.userinfo.id,projectid:this.$route.params.id,listid:u},method:"post"}).then(s=>{this.$toast.add({severity:"info",summary:"info",detail:s.message,life:3e3}),this.getProjectList()})},async removeProjectFromList(u){await _({url:"/projectlist/remove",data:{projectid:this.$route.params.id,listid:u},method:"post"}).then(s=>{this.$toast.add({severity:"info",summary:"info",detail:s.message,life:3e3}),this.getProjectList()})}},mounted(){this.getProjectList()}};function K(u,s,F,H,o,c){const f=A;return n(),p(v,null,[t(J,null,{default:e(()=>[(n(!0),p(v,null,R(o.projectLists,r=>(n(),p("div",{key:r.id},[t(L,{"append-icon":r.include==!0?"mdi-minus-circle":"mdi-plus-circle",active:r.include==!0,color:"primary",onClick:y=>r.include==!0?c.removeProjectFromList(r.id):c.addProjectToList(r.id)},{default:e(()=>[t(U,null,{default:e(()=>[i(l(r.title),1)]),_:2},1024),t(G,null,{default:e(()=>[i(l(r.description),1)]),_:2},1024)]),_:2},1032,["append-icon","active","onClick"])]))),128)),t(L,{onClick:s[0]||(s[0]=r=>o.newProjectListDialog=!0)},{default:e(()=>s[2]||(s[2]=[i("新建列表")])),_:1})]),_:1}),t(O,{modelValue:o.newProjectListDialog,"onUpdate:modelValue":s[1]||(s[1]=r=>o.newProjectListDialog=r)},{default:e(()=>[t(f,{listid:u.editlistid,close:()=>o.newProjectListDialog=!1,callback:c.getProjectList},null,8,["listid","close","callback"])]),_:1},8,["modelValue"])],64)}const E=B(z,[["render",K]]),W={components:{ProjectRunner:S,TimeAgo:I,Comment:N,AddTolist:E},data(){return{project:{id:1,authorid:1,time:"2000-01-01T00:00:00.000Z",view_count:0,like_count:0,type:"text",favo_count:0,title:"加载中",state:"public",description:"加载中",license:"MIT",tags:"",likeid:"",favoid:"",author:{id:1,display_name:"加载中",images:"加载中"}},openEditor:Q,localuser:h}},setup(){w({title:"项目"})},async created(){await this.getproject()},methods:{async getproject(){this.project=await _({url:"/project/"+this.$route.params.id,method:"get"}),w({title:""+this.project.title}),console.log(this.project)}}},X={class:"px-4 d-flex ga-2 mb-2"},Y={class:"px-4 d-flex ga-2 mb-2"},$={class:"px-4 d-flex ga-2 mb-2"},tt={class:"px-4 d-flex ga-2 mb-2"},et={class:"px-4 d-flex ga-2 mb-2"},ot={class:"px-4"};function st(u,s,F,H,o,c){const f=S,r=I,y=E,M=N;return n(),m(q,null,{default:e(()=>[t(Z,null,{default:e(()=>[t(g,{xs:"12",sm:"12",md:"8",lg:"8",xl:"8",xxl:"8",cols:"12"},{default:e(()=>[t(f,{type:o.project.type,id:o.project.id},null,8,["type","id"])]),_:1}),t(g,{xs:"12",sm:"12",md:"4",lg:"4",xl:"4",xxl:"8",cols:"12"},{default:e(()=>[t(x,{hover:"",border:""},{default:e(()=>[t(C,null,{default:e(()=>[t(T,null,{default:e(()=>[i(l(o.project.title),1)]),_:1}),t(D,null,{default:e(()=>[i(l(o.project.description),1)]),_:1})]),_:1}),a("div",X,[t(d,{pill:""},{default:e(()=>[t(k,{start:""},{default:e(()=>[t(P,{src:"https://s4-1.wuyuan.1r.ink/user/"+o.project.author.images},null,8,["src"])]),_:1}),i(l(o.project.author.display_name),1)]),_:1})]),a("div",Y,[t(d,{pill:"","prepend-icon":"mdi-eye"},{default:e(()=>[i(l(o.project.view_count)+"浏览",1)]),_:1}),t(d,{pill:"","prepend-icon":"mdi-clock"},{default:e(()=>[t(r,{date:o.project.time},null,8,["date"])]),_:1})]),a("div",$,[o.project.state=="public"?(n(),m(d,{key:0,pill:"","prepend-icon":"mdi-xml"},{default:e(()=>s[1]||(s[1]=[i("开源作品")])),_:1})):j("",!0),o.project.state=="private"?(n(),m(d,{key:1,pill:"","prepend-icon":"mdi-xml"},{default:e(()=>s[2]||(s[2]=[i("私密作品")])),_:1})):j("",!0),t(d,{pill:"","prepend-icon":"mdi-application"},{default:e(()=>[i(l(o.project.type),1)]),_:1})]),a("div",tt,[(n(!0),p(v,null,R(o.project.tags,V=>(n(),p("div",null,[t(d,null,{default:e(()=>[i(l(V.name),1)]),_:2},1024)]))),256))]),a("div",et,[t(b,{onClick:s[0]||(s[0]=V=>o.openEditor(o.project.id,o.project.type)),variant:"text"},{default:e(()=>s[3]||(s[3]=[i("打开创造页")])),_:1}),o.project.authorid!=o.localuser.user.id?(n(),m(b,{key:0,to:"/projects/"+o.project.id+"/fork",variant:"text"},{default:e(()=>s[4]||(s[4]=[i("改编")])),_:1},8,["to"])):j("",!0)]),a("div",ot,[t(x,{hover:"",to:"/user/"+o.project.authorid,border:""},{default:e(()=>[t(C,null,{prepend:e(()=>[t(k,null,{default:e(()=>[t(P,{alt:o.project.author.display_name,src:"https://s4-1.wuyuan.1r.ink/user/"+o.project.author.images},null,8,["alt","src"])]),_:1})]),default:e(()=>[t(T,{class:"text-white"},{default:e(()=>[i(l(o.project.author.display_name),1)]),_:1}),t(D,{class:"text-white"},{default:e(()=>[i(l(o.project.author.motto),1)]),_:1})]),_:1})]),_:1},8,["to"])]),s[5]||(s[5]=a("br",null,null,-1))]),_:1}),s[6]||(s[6]=a("br",null,null,-1)),t(x,{hover:"",border:""},{default:e(()=>[t(y)]),_:1})]),_:1}),t(g,{xxl:"8",xl:"8",lg:"8",md:"8",sm:"12",xs:"12",cols:"12"},{default:e(()=>[t(M,{url:"project-"+u.$route.params.id,name:"项目"},null,8,["url"])]),_:1})]),_:1})]),_:1})}const ht=B(W,[["render",st]]);export{ht as default};
