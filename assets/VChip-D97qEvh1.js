import{p as Y,af as w,m as J,bc as ge,v as Z,b7 as re,i as ee,bb as Se,bd as Ce,b9 as de,aH as G,a6 as k,be as le,bf as xe,aO as te,aM as Ie,k as ve,a as i,bg as ae,Y as E,bh as Ve,bi as Pe,x as fe,ah as pe,y as he,ba as ze,A as L,a7 as X,bj as ne,l as Ae,ag as _e,n as we,b4 as Ee,t as Re,bk as Te,bl as Fe,b2 as Be,al as Ge,B as Oe,ai as Me,aj as De,C as We,F as Le,bm as He,a3 as $e,b5 as qe,bn as Ke,as as se,b3 as je,am as Ne,bo as Ue,an as H,at as Qe,S as ie,M as oe}from"./index-aJtoyxvm.js";function Xe(e){let{selectedElement:n,containerElement:a,isRtl:u,isHorizontal:o}=e;const b=O(o,a),c=be(o,u,a),y=O(o,n),v=ye(o,n),g=y*.4;return c>v?v-g:c+b<v+y?v-b+y+g:c}function Ye(e){let{selectedElement:n,containerElement:a,isHorizontal:u}=e;const o=O(u,a),b=ye(u,n),c=O(u,n);return b-o/2+c/2}function ce(e,n){const a=e?"scrollWidth":"scrollHeight";return(n==null?void 0:n[a])||0}function Je(e,n){const a=e?"clientWidth":"clientHeight";return(n==null?void 0:n[a])||0}function be(e,n,a){if(!a)return 0;const{scrollLeft:u,offsetWidth:o,scrollWidth:b}=a;return e?n?b-o+u:u:a.scrollTop}function O(e,n){const a=e?"offsetWidth":"offsetHeight";return(n==null?void 0:n[a])||0}function ye(e,n){const a=e?"offsetLeft":"offsetTop";return(n==null?void 0:n[a])||0}const Ze=Symbol.for("vuetify:v-slide-group"),me=Y({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Ze},nextIcon:{type:w,default:"$next"},prevIcon:{type:w,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...J(),...ge({mobile:null}),...Z(),...re({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),ue=ee()({name:"VSlideGroup",props:me(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{isRtl:u}=Se(),{displayClasses:o,mobile:b}=Ce(e),c=de(e,e.symbol),y=G(!1),v=G(0),g=G(0),x=G(0),d=k(()=>e.direction==="horizontal"),{resizeRef:f,contentRect:R}=le(),{resizeRef:p,contentRect:V}=le(),s=xe(),m=k(()=>({container:f.el,duration:200,easing:"easeOutQuart"})),$=k(()=>c.selected.value.length?c.items.value.findIndex(l=>l.id===c.selected.value[0]):-1),S=k(()=>c.selected.value.length?c.items.value.findIndex(l=>l.id===c.selected.value[c.selected.value.length-1]):-1);if(te){let l=-1;Ie(()=>[c.selected.value,R.value,V.value,d.value],()=>{cancelAnimationFrame(l),l=requestAnimationFrame(()=>{if(R.value&&V.value){const t=d.value?"width":"height";g.value=R.value[t],x.value=V.value[t],y.value=g.value+1<x.value}if($.value>=0&&p.el){const t=p.el.children[S.value];T(t,e.centerActive)}})})}const P=G(!1);function T(l,t){let r=0;t?r=Ye({containerElement:f.el,isHorizontal:d.value,selectedElement:l}):r=Xe({containerElement:f.el,isHorizontal:d.value,isRtl:u.value,selectedElement:l}),M(r)}function M(l){if(!te||!f.el)return;const t=O(d.value,f.el),r=be(d.value,u.value,f.el);if(!(ce(d.value,f.el)<=t||Math.abs(l-r)<16)){if(d.value&&u.value&&f.el){const{scrollWidth:W,offsetWidth:Q}=f.el;l=W-Q-l}d.value?s.horizontal(l,m.value):s(l,m.value)}}function h(l){const{scrollTop:t,scrollLeft:r}=l.target;v.value=d.value?r:t}function I(l){if(P.value=!0,!(!y.value||!p.el)){for(const t of l.composedPath())for(const r of p.el.children)if(r===t){T(r);return}}}function q(l){P.value=!1}let F=!1;function D(l){var t;!F&&!P.value&&!(l.relatedTarget&&((t=p.el)!=null&&t.contains(l.relatedTarget)))&&C(),F=!1}function B(){F=!0}function K(l){if(!p.el)return;function t(r){l.preventDefault(),C(r)}d.value?l.key==="ArrowRight"?t(u.value?"prev":"next"):l.key==="ArrowLeft"&&t(u.value?"next":"prev"):l.key==="ArrowDown"?t("next"):l.key==="ArrowUp"&&t("prev"),l.key==="Home"?t("first"):l.key==="End"&&t("last")}function C(l){var r,_;if(!p.el)return;let t;if(!l)t=Ve(p.el)[0];else if(l==="next"){if(t=(r=p.el.querySelector(":focus"))==null?void 0:r.nextElementSibling,!t)return C("first")}else if(l==="prev"){if(t=(_=p.el.querySelector(":focus"))==null?void 0:_.previousElementSibling,!t)return C("last")}else l==="first"?t=p.el.firstElementChild:l==="last"&&(t=p.el.lastElementChild);t&&t.focus({preventScroll:!0})}function z(l){const t=d.value&&u.value?-1:1,r=(l==="prev"?-t:t)*g.value;let _=v.value+r;if(d.value&&u.value&&f.el){const{scrollWidth:W,offsetWidth:Q}=f.el;_+=W-Q}M(_)}const A=k(()=>({next:c.next,prev:c.prev,select:c.select,isSelected:c.isSelected})),j=k(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!b.value;case!0:return y.value||Math.abs(v.value)>0;case"mobile":return b.value||y.value||Math.abs(v.value)>0;default:return!b.value&&(y.value||Math.abs(v.value)>0)}}),N=k(()=>Math.abs(v.value)>1),U=k(()=>{if(!f.value)return!1;const l=ce(d.value,f.el),t=Je(d.value,f.el);return l-t-Math.abs(v.value)>1});return ve(()=>i(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!d.value,"v-slide-group--has-affixes":j.value,"v-slide-group--is-overflowing":y.value},o.value,e.class],style:e.style,tabindex:P.value||c.selected.value.length?-1:0,onFocus:D},{default:()=>{var l,t,r;return[j.value&&i("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!N.value}],onMousedown:B,onClick:()=>N.value&&z("prev")},[((l=a.prev)==null?void 0:l.call(a,A.value))??i(ae,null,{default:()=>[i(E,{icon:u.value?e.nextIcon:e.prevIcon},null)]})]),i("div",{key:"container",ref:f,class:"v-slide-group__container",onScroll:h},[i("div",{ref:p,class:"v-slide-group__content",onFocusin:I,onFocusout:q,onKeydown:K},[(t=a.default)==null?void 0:t.call(a,A.value)])]),j.value&&i("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!U.value}],onMousedown:B,onClick:()=>U.value&&z("next")},[((r=a.next)==null?void 0:r.call(a,A.value))??i(ae,null,{default:()=>[i(E,{icon:u.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:c.selected,scrollTo:z,scrollOffset:v,focus:C,hasPrev:N,hasNext:U}}}),ke=Symbol.for("vuetify:v-chip-group"),el=Y({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Pe},...me(),...J(),...re({selectedClass:"v-chip--selected"}),...Z(),...fe(),...pe({variant:"tonal"})},"VChipGroup"),al=ee()({name:"VChipGroup",props:el(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{themeClasses:u}=he(e),{isSelected:o,select:b,next:c,prev:y,selected:v}=de(e,ke);return ze({VChip:{color:L(e,"color"),disabled:L(e,"disabled"),filter:L(e,"filter"),variant:L(e,"variant")}}),ve(()=>{const g=ue.filterProps(e);return i(ue,X(g,{class:["v-chip-group",{"v-chip-group--column":e.column},u.value,e.class],style:e.style}),{default:()=>{var x;return[(x=a.default)==null?void 0:x.call(a,{isSelected:o,select:b,next:c,prev:y,selected:v.value})]}})}),{}}}),ll=Y({activeClass:String,appendAvatar:String,appendIcon:w,closable:Boolean,closeIcon:{type:w,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:w,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:w,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:ne(),onClickOnce:ne(),...Ae(),...J(),..._e(),...we(),...Ee(),...Re(),...Te(),...Fe(),...Z({tag:"span"}),...fe(),...pe({variant:"tonal"})},"VChip"),nl=ee()({name:"VChip",directives:{Ripple:Be},props:ll(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,n){let{attrs:a,emit:u,slots:o}=n;const{t:b}=Ge(),{borderClasses:c}=Oe(e),{colorClasses:y,colorStyles:v,variantClasses:g}=Me(e),{densityClasses:x}=De(e),{elevationClasses:d}=We(e),{roundedClasses:f}=Le(e),{sizeClasses:R}=He(e),{themeClasses:p}=he(e),V=$e(e,"modelValue"),s=qe(e,ke,!1),m=Ke(e,a),$=k(()=>e.link!==!1&&m.isLink.value),S=k(()=>!e.disabled&&e.link!==!1&&(!!s||e.link||m.isClickable.value)),P=k(()=>({"aria-label":b(e.closeLabel),onClick(h){h.preventDefault(),h.stopPropagation(),V.value=!1,u("click:close",h)}}));function T(h){var I;u("click",h),S.value&&((I=m.navigate)==null||I.call(m,h),s==null||s.toggle())}function M(h){(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),T(h))}return()=>{var z;const h=m.isLink.value?"a":e.tag,I=!!(e.appendIcon||e.appendAvatar),q=!!(I||o.append),F=!!(o.close||e.closable),D=!!(o.filter||e.filter)&&s,B=!!(e.prependIcon||e.prependAvatar),K=!!(B||o.prepend),C=!s||s.isSelected.value;return V.value&&se(i(h,X({class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":S.value,"v-chip--filter":D,"v-chip--pill":e.pill,[`${e.activeClass}`]:e.activeClass&&((z=m.isActive)==null?void 0:z.value)},p.value,c.value,C?y.value:void 0,x.value,d.value,f.value,R.value,g.value,s==null?void 0:s.selectedClass.value,e.class],style:[C?v.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,tabindex:S.value?0:void 0,onClick:T,onKeydown:S.value&&!$.value&&M},m.linkProps),{default:()=>{var A;return[Ne(S.value,"v-chip"),D&&i(Ue,{key:"filter"},{default:()=>[se(i("div",{class:"v-chip__filter"},[o.filter?i(H,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},o.filter):i(E,{key:"filter-icon",icon:e.filterIcon},null)]),[[Qe,s.isSelected.value]])]}),K&&i("div",{key:"prepend",class:"v-chip__prepend"},[o.prepend?i(H,{key:"prepend-defaults",disabled:!B,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},o.prepend):i(ie,null,[e.prependIcon&&i(E,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&i(oe,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),i("div",{class:"v-chip__content","data-no-activator":""},[((A=o.default)==null?void 0:A.call(o,{isSelected:s==null?void 0:s.isSelected.value,selectedClass:s==null?void 0:s.selectedClass.value,select:s==null?void 0:s.select,toggle:s==null?void 0:s.toggle,value:s==null?void 0:s.value.value,disabled:e.disabled}))??e.text]),q&&i("div",{key:"append",class:"v-chip__append"},[o.append?i(H,{key:"append-defaults",disabled:!I,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},o.append):i(ie,null,[e.appendIcon&&i(E,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&i(oe,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),F&&i("button",X({key:"close",class:"v-chip__close",type:"button","data-testid":"close-chip"},P.value),[o.close?i(H,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},o.close):i(E,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[je("ripple"),S.value&&e.ripple,null]])}}});export{nl as V,al as a,ue as b,me as m};
