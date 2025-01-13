import{m as Se,u as xe,a as Ce}from"./VSelect-si5Zptta.js";import{bU as re,aW as R,x,bl as H,bG as pe,d8 as q,dh as Me,cv as Ie,d6 as Ae,cS as Pe,bY as _e,cP as De,b8 as E,cx as Z,d7 as Ke,cO as Re,d9 as Le,bF as W,ax as te,db as Oe,b$ as Te,cs as ae,a as c,F as $,dc as Ee,aw as K,cB as Be,cn as ue,ci as Ne,cq as ne,dd as Ue,cR as je,O as ze,de as He,cA as We,df as $e,di as oe}from"./index-B2HYbJQK.js";import{V as Ge}from"./VCheckboxBtn-DJAa7ZWT.js";import{V as Qe}from"./VChip-BaaJjW8W.js";const Ye=(e,s,t)=>e==null||s==null?-1:e.toString().toLocaleLowerCase().indexOf(s.toString().toLocaleLowerCase()),Je=re({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function Xe(e,s,t){var M;const S=[],m=(t==null?void 0:t.default)??Ye,g=t!=null&&t.filterKeys?q(t.filterKeys):!1,y=Object.keys((t==null?void 0:t.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return S;e:for(let b=0;b<e.length;b++){const[w,I=w]=q(e[b]),r={},o={};let V=-1;if((s||y>0)&&!(t!=null&&t.noFilter)){if(typeof w=="object"){const L=g||Object.keys(I);for(const C of L){const B=Me(I,C),O=(M=t==null?void 0:t.customKeyFilter)==null?void 0:M[C];if(V=O?O(B,s,w):m(B,s,w),V!==-1&&V!==!1)O?r[C]=V:o[C]=V;else if((t==null?void 0:t.filterMode)==="every")continue e}}else V=m(w,s,w),V!==-1&&V!==!1&&(o.title=V);const A=Object.keys(o).length,P=Object.keys(r).length;if(!A&&!P||(t==null?void 0:t.filterMode)==="union"&&P!==y&&!A||(t==null?void 0:t.filterMode)==="intersection"&&(P!==y||!A))continue}S.push({index:b,matches:{...o,...r}})}return S}function Ze(e,s,t,S){const m=R([]),g=R(new Map),y=x(()=>H(s));pe(()=>{const b=typeof t=="function"?t():H(t),w=typeof b!="string"&&typeof b!="number"?"":String(b),I=Xe(y.value,w,{customKeyFilter:{...e.customKeyFilter,...H(S==null?void 0:S.customKeyFilter)},default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}),r=H(s),o=[],V=new Map;I.forEach(A=>{let{index:P,matches:L}=A;const C=r[P];o.push(C),V.set(C.value,L)}),m.value=o,g.value=V});function M(b){return g.value.get(b.value)}return{filteredItems:m,filteredMatches:g,getMatches:M}}function qe(e,s,t){if(s==null)return e;if(Array.isArray(s))throw new Error("Multiple matches is not implemented");return typeof s=="number"&&~s?c($,null,[c("span",{class:"v-autocomplete__unmask"},[e.substr(0,s)]),c("span",{class:"v-autocomplete__mask"},[e.substr(s,t)]),c("span",{class:"v-autocomplete__unmask"},[e.substr(s+t)])]):e}const el=re({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...Je({filterKeys:["title"]}),...Se(),...Ie(Ae({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Pe({transition:!1})},"VAutocomplete"),nl=_e()({name:"VAutocomplete",props:el(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,s){let{slots:t}=s;const{t:S}=De(),m=R(),g=E(!1),y=E(!0),M=E(!1),b=R(),w=R(),I=Z(e,"menu"),r=x({get:()=>I.value,set:l=>{var a;I.value&&!l&&((a=b.value)!=null&&a.ΨopenChildren.size)||(I.value=l)}}),o=E(-1),V=x(()=>{var l;return(l=m.value)==null?void 0:l.color}),A=x(()=>r.value?e.closeText:e.openText),{items:P,transformIn:L,transformOut:C}=Ke(e),{textColorClasses:B,textColorStyles:O}=Re(V),f=Z(e,"search",""),n=Z(e,"modelValue",[],l=>L(l===null?[null]:q(l)),l=>{const a=C(l);return e.multiple?a:a[0]??null}),ce=x(()=>typeof e.counterValue=="function"?e.counterValue(n.value):typeof e.counterValue=="number"?e.counterValue:n.value.length),N=Le(e),{filteredItems:G,getMatches:ie}=Ze(e,P,()=>y.value?"":f.value),p=x(()=>e.hideSelected?G.value.filter(l=>!n.value.some(a=>a.value===l.value)):G.value),U=x(()=>!!(e.chips||t.chip)),T=x(()=>U.value||!!t.selection),se=x(()=>n.value.map(l=>l.props.value)),Q=x(()=>{var a;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&f.value===((a=p.value[0])==null?void 0:a.title))&&p.value.length>0&&!y.value&&!M.value}),Y=x(()=>e.hideNoData&&!p.value.length||N.isReadonly.value||N.isDisabled.value),J=R(),ve=xe(J,m);function fe(l){e.openOnClear&&(r.value=!0),f.value=""}function de(){Y.value||(r.value=!0)}function me(l){Y.value||(g.value&&(l.preventDefault(),l.stopPropagation()),r.value=!r.value)}function he(l){var a;$e(l)&&((a=m.value)==null||a.focus())}function ge(l){var u,i,k;if(N.isReadonly.value)return;const a=m.value.selectionStart,v=n.value.length;if((o.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(r.value=!0),["Escape"].includes(l.key)&&(r.value=!1),Q.value&&["Enter","Tab"].includes(l.key)&&!n.value.some(d=>{let{value:h}=d;return h===p.value[0].value})&&_(p.value[0]),l.key==="ArrowDown"&&Q.value&&((u=J.value)==null||u.focus("next")),["Backspace","Delete"].includes(l.key)){if(!e.multiple&&T.value&&n.value.length>0&&!f.value)return _(n.value[0],!1);if(~o.value){const d=o.value;_(n.value[o.value],!1),o.value=d>=v-1?v-2:d}else l.key==="Backspace"&&!f.value&&(o.value=v-1)}if(e.multiple){if(l.key==="ArrowLeft"){if(o.value<0&&a>0)return;const d=o.value>-1?o.value-1:v-1;n.value[d]?o.value=d:(o.value=-1,m.value.setSelectionRange((i=f.value)==null?void 0:i.length,(k=f.value)==null?void 0:k.length))}if(l.key==="ArrowRight"){if(o.value<0)return;const d=o.value+1;n.value[d]?o.value=d:(o.value=-1,m.value.setSelectionRange(0,0))}}}function ye(l){if(oe(m.value,":autofill")||oe(m.value,":-webkit-autofill")){const a=P.value.find(v=>v.title===l.target.value);a&&_(a)}}function Ve(){var l;e.eager&&((l=w.value)==null||l.calculateVisibleItems())}function be(){var l;g.value&&(y.value=!0,(l=m.value)==null||l.focus())}function ke(l){g.value=!0,setTimeout(()=>{M.value=!0})}function Fe(l){M.value=!1}function we(l){(l==null||l===""&&!e.multiple&&!T.value)&&(n.value=[])}const X=E(!1);function _(l){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!l||l.props.disabled))if(e.multiple){const v=n.value.findIndex(i=>e.valueComparator(i.value,l.value)),u=a??!~v;if(~v){const i=u?[...n.value,l]:[...n.value];i.splice(v,1),n.value=i}else u&&(n.value=[...n.value,l]);e.clearOnSelect&&(f.value="")}else{const v=a!==!1;n.value=v?[l]:[],f.value=v&&!T.value?l.title:"",te(()=>{r.value=!1,y.value=!0})}}return W(g,(l,a)=>{var v;l!==a&&(l?(X.value=!0,f.value=e.multiple||T.value?"":String(((v=n.value.at(-1))==null?void 0:v.props.title)??""),y.value=!0,te(()=>X.value=!1)):(!e.multiple&&f.value==null&&(n.value=[]),r.value=!1,n.value.some(u=>{let{title:i}=u;return i===f.value})||(f.value=""),o.value=-1))}),W(f,l=>{!g.value||X.value||(l&&(r.value=!0),y.value=!l)}),W(r,()=>{if(!e.hideSelected&&r.value&&n.value.length){const l=p.value.findIndex(a=>n.value.some(v=>a.value===v.value));Oe&&window.requestAnimationFrame(()=>{var a;l>=0&&((a=w.value)==null||a.scrollToIndex(l))})}}),W(()=>e.items,(l,a)=>{r.value||g.value&&!a.length&&l.length&&(r.value=!0)}),Te(()=>{const l=!!(!e.hideNoData||p.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),a=n.value.length>0,v=ae.filterProps(e);return c(ae,K({ref:m},v,{modelValue:f.value,"onUpdate:modelValue":[u=>f.value=u,we],focused:g.value,"onUpdate:focused":u=>g.value=u,validationValue:n.externalValue,counterValue:ce.value,dirty:a,onChange:ye,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":r.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!T.value,"v-autocomplete--selecting-index":o.value>-1},e.class],style:e.style,readonly:N.isReadonly.value,placeholder:a?void 0:e.placeholder,"onClick:clear":fe,"onMousedown:control":de,onKeydown:ge}),{...t,default:()=>c($,null,[c(Ee,K({ref:b,modelValue:r.value,"onUpdate:modelValue":u=>r.value=u,activator:"parent",contentClass:"v-autocomplete__content",disabled:Y.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterEnter:Ve,onAfterLeave:be},e.menuProps),{default:()=>[l&&c(Be,K({ref:J,selected:se.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:u=>u.preventDefault(),onKeydown:he,onFocusin:ke,onFocusout:Fe,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},ve,e.listProps),{default:()=>{var u,i,k;return[(u=t["prepend-item"])==null?void 0:u.call(t),!p.value.length&&!e.hideNoData&&(((i=t["no-data"])==null?void 0:i.call(t))??c(ue,{key:"no-data",title:S(e.noDataText)},null)),c(Ce,{ref:w,renderless:!0,items:p.value},{default:d=>{var le;let{item:h,index:D,itemRef:F}=d;const ee=K(h.props,{ref:F,key:h.value,active:Q.value&&D===0?!0:void 0,onClick:()=>_(h,null)});return((le=t.item)==null?void 0:le.call(t,{item:h,index:D,props:ee}))??c(ue,K(ee,{role:"option"}),{prepend:j=>{let{isSelected:z}=j;return c($,null,[e.multiple&&!e.hideSelected?c(Ge,{key:h.value,modelValue:z,ripple:!1,tabindex:"-1"},null):void 0,h.props.prependAvatar&&c(Ne,{image:h.props.prependAvatar},null),h.props.prependIcon&&c(ne,{icon:h.props.prependIcon},null)])},title:()=>{var j,z;return y.value?h.title:qe(h.title,(j=ie(h))==null?void 0:j.title,((z=f.value)==null?void 0:z.length)??0)}})}}),(k=t["append-item"])==null?void 0:k.call(t)]}})]}),n.value.map((u,i)=>{function k(F){F.stopPropagation(),F.preventDefault(),_(u,!1)}const d={"onClick:close":k,onKeydown(F){F.key!=="Enter"&&F.key!==" "||(F.preventDefault(),F.stopPropagation(),k(F))},onMousedown(F){F.preventDefault(),F.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},h=U.value?!!t.chip:!!t.selection,D=h?Ue(U.value?t.chip({item:u,index:i,props:d}):t.selection({item:u,index:i})):void 0;if(!(h&&!D))return c("div",{key:u.value,class:["v-autocomplete__selection",i===o.value&&["v-autocomplete__selection--selected",B.value]],style:i===o.value?O.value:{}},[U.value?t.chip?c(je,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:u.title}}},{default:()=>[D]}):c(Qe,K({key:"chip",closable:e.closableChips,size:"small",text:u.title,disabled:u.props.disabled},d),null):D??c("span",{class:"v-autocomplete__selection-text"},[u.title,e.multiple&&i<n.value.length-1&&c("span",{class:"v-autocomplete__selection-comma"},[ze(",")])])])})]),"append-inner":function(){var d;for(var u=arguments.length,i=new Array(u),k=0;k<u;k++)i[k]=arguments[k];return c($,null,[(d=t["append-inner"])==null?void 0:d.call(t,...i),e.menuIcon?c(ne,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:me,onClick:He,"aria-label":S(A.value),title:S(A.value),tabindex:"-1"},null):void 0])}})}),We({isFocused:g,isPristine:y,menu:r,search:f,filteredItems:G,select:_},m)}});export{nl as V,Je as m,Ze as u};
