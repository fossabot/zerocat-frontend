import{a as F,_ as I}from"./Comment-DcKopndo.js";import{N as L}from"./NewProjectList-CoS8Poxw.js";import{_ as P,H as f,J as p,o as n,e as m,a as t,w as e,S as j,T as B,R as C,ac as J,O as i,U as a,ad as M,aa as O,N as y,c as h,L as u,M as S,Q as T,$ as g,G as Q}from"./index-aJtoyxvm.js";import{V as Z}from"./VDialog-BAHtFo__.js";import{P as R}from"./ProjectRunner--qnMTRiR.js";import{o as q}from"./openEdit-DBNuVmNU.js";import{l as z,b as K}from"./project-C9zSdVj8.js";import{l as W,b as X}from"./user-CWwSvDcR.js";import{a as x,V as Y}from"./VRow-CezgLdW5.js";import{V as v,e as D,c as N,d as A}from"./VCard-DznyS40J.js";import{V as d}from"./VChip-D97qEvh1.js";import{V as $}from"./VContainer-BwFXm2yi.js";import"./VForm-CKgMtX2L.js";import"./VTextarea-sWFi5CUP.js";import"./VSpacer-BGIwCnfp.js";/* empty css              */import"./VExpansionPanels-Bdz21Nz9.js";import"./db-CM6QAmPf.js";const tt={components:{NewProjectList:L},name:"addtolist",data(){return{localuser:f,userinfo:f.user,newProjectListDialog:!1,projectLists:[]}},methods:{async getProjectList(){this.projectLists=(await p({url:"/projectlist/check?projectid="+this.$route.params.id,method:"get"})).data},async addProjectToList(s){await p({url:"/projectlist/add",data:{userid:this.userinfo.id,projectid:this.$route.params.id,listid:s},method:"post"}).then(r=>{this.$toast.add({severity:"info",summary:"info",detail:r.message,life:3e3}),this.getProjectList()})},async removeProjectFromList(s){await p({url:"/projectlist/remove",data:{projectid:this.$route.params.id,listid:s},method:"post"}).then(r=>{this.$toast.add({severity:"info",summary:"info",detail:r.message,life:3e3}),this.getProjectList()})}},mounted(){this.getProjectList()}};function et(s,r,V,w,o,c){const _=L;return n(),m(j,null,[t(O,null,{default:e(()=>[(n(!0),m(j,null,B(o.projectLists,l=>(n(),m("div",{key:l.id},[t(C,{"append-icon":l.include==!0?"mdi-minus-circle":"mdi-plus-circle",active:l.include==!0,color:"primary",onClick:k=>l.include==!0?c.removeProjectFromList(l.id):c.addProjectToList(l.id)},{default:e(()=>[t(J,null,{default:e(()=>[i(a(l.title),1)]),_:2},1024),t(M,null,{default:e(()=>[i(a(l.description),1)]),_:2},1024)]),_:2},1032,["append-icon","active","onClick"])]))),128)),t(C,{onClick:r[0]||(r[0]=l=>o.newProjectListDialog=!0)},{default:e(()=>r[2]||(r[2]=[i("新建列表")])),_:1})]),_:1}),t(Z,{modelValue:o.newProjectListDialog,"onUpdate:modelValue":r[1]||(r[1]=l=>o.newProjectListDialog=l)},{default:e(()=>[t(_,{listid:s.editlistid,close:()=>o.newProjectListDialog=!1,callback:c.getProjectList},null,8,["listid","close","callback"])]),_:1},8,["modelValue"])],64)}const U=P(tt,[["render",et]]),ot={components:{NewProjectList:L},name:"addtolist",data(){return{localuser:f,userinfo:f.user,newProjectListDialog:!1,projectLists:"",star:!1}},methods:{getStarStatus(){p({url:`/projectlist/checkstar?projectid=${this.$route.params.id}`,method:"get"}).then(s=>{this.star=s.star})},ToggleStarProject(){this.star==0?p({url:"/projectlist/star",method:"post",data:{projectid:this.$route.params.id}}).then(s=>{this.star=s.star}):p({url:"/projectlist/unstar",method:"post",data:{projectid:this.$route.params.id}}).then(s=>{this.star=s.star})}},mounted(){this.getStarStatus()}};function rt(s,r,V,w,o,c){return n(),m(j,null,[t(y,{onClick:r[0]||(r[0]=_=>c.ToggleStarProject()),color:o.star?"yellow":"","prepend-icon":"mdi-star",variant:"tonal"},{default:e(()=>r[1]||(r[1]=[i("Star")])),_:1},8,["color"]),i(a(o.projectLists),1)],64)}const E=P(ot,[["render",rt]]),st={components:{ProjectRunner:R,TimeAgo:F,Comment:I,AddTolist:U,ProjectStar:E},data(){return{projectid:this.$route.params.id,project:{id:1,authorid:1,time:"2000-01-01T00:00:00.000Z",view_count:0,like_count:0,type:"text",favo_count:0,title:"",state:"public",description:"",license:"",tags:"",likeid:"",favoid:""},author:{id:1,display_name:"",motto:"",images:""},communityinfo:{stars:""},openEditor:q,localuser:f}},async mounted(){this.startLiveFetch(),await this.refreshProject(),await this.refreshAuthor()},methods:{startLiveFetch(){z([Number(this.$route.params.id)],s=>{s.length>0&&(this.project=s[0],Q({title:""+this.project.title}))}),W([Number(this.project.authorid)],s=>{s.length>0&&(this.author=s[0])})},async refreshProject(){await K(this.$route.params.id)},async refreshAuthor(){await X(this.project.authorid)}}},it={class:"px-4 d-flex ga-2 mb-2"},lt={class:"px-4 d-flex ga-2 mb-2"},at={class:"px-4 d-flex ga-2 mb-2"},nt={class:"px-4 d-flex ga-2 mb-2"},ut={class:"px-4 d-flex ga-2 mb-2"},dt={class:"px-4"};function ct(s,r,V,w,o,c){const _=R,l=F,k=E,H=U,G=I;return n(),h($,null,{default:e(()=>[t(Y,null,{default:e(()=>[t(x,{xs:"12",sm:"12",md:"8",lg:"8",xl:"8",xxl:"8",cols:"12"},{default:e(()=>[t(_,{type:o.project.type,id:o.project.id},null,8,["type","id"])]),_:1}),t(x,{xs:"12",sm:"12",md:"4",lg:"4",xl:"4",xxl:"8",cols:"12"},{default:e(()=>[t(v,{hover:"",border:""},{default:e(()=>[t(D,null,{default:e(()=>[t(N,null,{default:e(()=>[i(a(o.project.title),1)]),_:1}),t(A,null,{default:e(()=>[i(a(o.project.description),1)]),_:1})]),_:1}),u("div",it,[t(d,{pill:""},{default:e(()=>[t(S,{start:""},{default:e(()=>[t(T,{src:"https://s4-1.wuyuan.1r.ink/user/"+o.author.images},null,8,["src"])]),_:1}),i(a(o.author.display_name),1)]),_:1})]),u("div",lt,[t(d,{pill:"","prepend-icon":"mdi-eye"},{default:e(()=>[i(a(o.project.view_count)+"浏览",1)]),_:1}),t(d,{pill:"","prepend-icon":"mdi-star"},{default:e(()=>[i(a(o.communityinfo.stars)+" Star",1)]),_:1}),t(d,{pill:"","prepend-icon":"mdi-clock"},{default:e(()=>[t(l,{date:o.project.time},null,8,["date"])]),_:1})]),u("div",at,[o.project.state=="public"?(n(),h(d,{key:0,pill:"","prepend-icon":"mdi-xml"},{default:e(()=>r[1]||(r[1]=[i("开源作品")])),_:1})):g("",!0),o.project.state=="private"?(n(),h(d,{key:1,pill:"","prepend-icon":"mdi-xml"},{default:e(()=>r[2]||(r[2]=[i("私密作品")])),_:1})):g("",!0),t(d,{pill:"","prepend-icon":"mdi-application"},{default:e(()=>[i(a(o.project.type),1)]),_:1})]),u("div",nt,[(n(!0),m(j,null,B(o.project.tags,b=>(n(),m("div",null,[t(d,null,{default:e(()=>[i(a(b.name),1)]),_:2},1024)]))),256))]),u("div",ut,[t(k),t(y,{onClick:r[0]||(r[0]=b=>o.openEditor(o.project.id,o.project.type)),variant:"text"},{default:e(()=>r[3]||(r[3]=[i("打开创造页")])),_:1}),o.project.authorid!=o.localuser.user.id?(n(),h(y,{key:0,to:"/projects/"+o.projectid+"/fork",variant:"text"},{default:e(()=>r[4]||(r[4]=[i("改编")])),_:1},8,["to"])):g("",!0)]),u("div",dt,[t(v,{hover:"",to:"/user/"+o.project.authorid,border:""},{default:e(()=>[t(D,null,{prepend:e(()=>[t(S,null,{default:e(()=>[t(T,{alt:o.author.display_name,src:"https://s4-1.wuyuan.1r.ink/user/"+o.author.images},null,8,["alt","src"])]),_:1})]),default:e(()=>[t(N,{class:"text-white"},{default:e(()=>[i(a(o.author.display_name),1)]),_:1}),t(A,{class:"text-white"},{default:e(()=>[i(a(o.author.motto),1)]),_:1})]),_:1})]),_:1},8,["to"])]),r[5]||(r[5]=u("br",null,null,-1))]),_:1}),r[6]||(r[6]=u("br",null,null,-1)),t(v,{hover:"",border:""},{default:e(()=>[t(H)]),_:1})]),_:1}),t(x,{xxl:"8",xl:"8",lg:"8",md:"8",sm:"12",xs:"12",cols:"12"},{default:e(()=>[t(G,{url:"project-"+s.$route.params.id,name:"项目"},null,8,["url"])]),_:1})]),_:1})]),_:1})}const Tt=P(st,[["render",ct]]);export{Tt as default};
