import{bU as b,bV as g,dj as $,bY as P,ak as I,dk as G,b$ as m,a as l,bL as T,bC as j,dl as q,cJ as k,bW as z,dm as F,c8 as h,b_ as J,x as v,a$ as N,cR as w,cq as O,c1 as Q,dn as U,c4 as W,c5 as _,dp as Y,ca as H,cd as K,aQ as M,dq as X,dr as Z,c6 as ee,ds as ae,c7 as ne,dt as le,bg as t}from"./index-B2HYbJQK.js";const p=Symbol.for("vuetify:v-expansion-panel"),A=b({...g(),...$()},"VExpansionPanelText"),S=P()({name:"VExpansionPanelText",props:A(),setup(e,d){let{slots:n}=d;const a=I(p);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:o,onAfterLeave:u}=G(e,a.isSelected);return m(()=>l(q,{onAfterLeave:u},{default:()=>{var i;return[T(l("div",{class:["v-expansion-panel-text",e.class],style:e.style},[n.default&&o.value&&l("div",{class:"v-expansion-panel-text__wrapper"},[(i=n.default)==null?void 0:i.call(n)])]),[[j,a.isSelected.value]])]}})),{}}}),B=b({color:String,expandIcon:{type:k,default:"$expand"},collapseIcon:{type:k,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...g(),...z()},"VExpansionPanelTitle"),C=P()({name:"VExpansionPanelTitle",directives:{Ripple:F},props:B(),setup(e,d){let{slots:n}=d;const a=I(p);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:o,backgroundColorStyles:u}=h(e,"color"),{dimensionStyles:i}=J(e),r=v(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})),y=v(()=>a.isSelected.value?e.collapseIcon:e.expandIcon);return m(()=>{var x;return T(l("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},o.value,e.class],style:[u.value,i.value,e.style],type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[l("span",{class:"v-expansion-panel-title__overlay"},null),(x=n.default)==null?void 0:x.call(n,r.value),!e.hideActions&&l(w,{defaults:{VIcon:{icon:y.value}}},{default:()=>{var f;return[l("span",{class:"v-expansion-panel-title__icon"},[((f=n.actions)==null?void 0:f.call(n,r.value))??l(O,null,null)])]}})]),[[N("ripple"),e.ripple]])}),{}}}),D=b({title:String,text:String,bgColor:String,...Q(),...U(),...W(),..._(),...B(),...A()},"VExpansionPanel"),ie=P()({name:"VExpansionPanel",props:D(),emits:{"group:selected":e=>!0},setup(e,d){let{slots:n}=d;const a=Y(e,p),{backgroundColorClasses:o,backgroundColorStyles:u}=h(e,"bgColor"),{elevationClasses:i}=H(e),{roundedClasses:r}=K(e),y=v(()=>(a==null?void 0:a.disabled.value)||e.disabled),x=v(()=>a.group.items.value.reduce((c,s,V)=>(a.group.selected.value.includes(s.id)&&c.push(V),c),[])),f=v(()=>{const c=a.group.items.value.findIndex(s=>s.id===a.id);return!a.isSelected.value&&x.value.some(s=>s-c===1)}),R=v(()=>{const c=a.group.items.value.findIndex(s=>s.id===a.id);return!a.isSelected.value&&x.value.some(s=>s-c===-1)});return M(p,a),m(()=>{const c=!!(n.text||e.text),s=!!(n.title||e.title),V=C.filterProps(e),L=S.filterProps(e);return l(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":f.value,"v-expansion-panel--after-active":R.value,"v-expansion-panel--disabled":y.value},r.value,o.value,e.class],style:[u.value,e.style]},{default:()=>[l("div",{class:["v-expansion-panel__shadow",...i.value]},null),l(w,{defaults:{VExpansionPanelTitle:{...V},VExpansionPanelText:{...L}}},{default:()=>{var E;return[s&&l(C,{key:"title"},{default:()=>[n.title?n.title():e.title]}),c&&l(S,{key:"text"},{default:()=>[n.text?n.text():e.text]}),(E=n.default)==null?void 0:E.call(n)]}})]})}),{groupItem:a}}}),te=["default","accordion","inset","popout"],se=b({flat:Boolean,...X(),...Z(D(),["bgColor","collapseIcon","color","eager","elevation","expandIcon","focusable","hideActions","readonly","ripple","rounded","tile","static"]),...ee(),...g(),..._(),variant:{type:String,default:"default",validator:e=>te.includes(e)}},"VExpansionPanels"),ce=P()({name:"VExpansionPanels",props:se(),emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:n}=d;const{next:a,prev:o}=ae(e,p),{themeClasses:u}=ne(e),i=v(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return le({VExpansionPanel:{bgColor:t(e,"bgColor"),collapseIcon:t(e,"collapseIcon"),color:t(e,"color"),eager:t(e,"eager"),elevation:t(e,"elevation"),expandIcon:t(e,"expandIcon"),focusable:t(e,"focusable"),hideActions:t(e,"hideActions"),readonly:t(e,"readonly"),ripple:t(e,"ripple"),rounded:t(e,"rounded"),static:t(e,"static")}}),m(()=>l(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},u.value,i.value,e.class],style:e.style},{default:()=>{var r;return[(r=n.default)==null?void 0:r.call(n,{prev:o,next:a})]}})),{next:a,prev:o}}});export{ce as V,ie as a,C as b,S as c};
