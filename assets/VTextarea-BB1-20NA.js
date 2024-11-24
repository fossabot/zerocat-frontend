import{L as p,aB as ee,bv as te,O as ae,bw as ne,P as le,aD as oe,S as y,f as v,aK as ue,a_ as ie,bx as re,aP as x,by as se,U as ce,aE as de,aF as _,bz as fe,a as l,bA as ve,T as k,F as I,b6 as D,ba as xe,bB as me,bC as ge,W as he,aR as S,bD as we,bp as Ve,bE as ye}from"./index-Dnyw85MB.js";const be=p({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...ee(),...te()},"VTextarea"),Pe=ae()({name:"VTextarea",directives:{Intersect:ne},inheritAttrs:!1,props:be(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,E){let{attrs:b,emit:B,slots:i}=E;const o=le(e,"modelValue"),{isFocused:f,focus:G,blur:U}=oe(e),O=y(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),$=y(()=>{if(b.maxlength)return b.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function j(t,n){var a,u;!e.autofocus||!t||(u=(a=n[0].target)==null?void 0:a.focus)==null||u.call(a)}const M=v(),m=v(),z=ue(""),g=v(),K=y(()=>e.persistentPlaceholder||f.value||e.active);function F(){var t;g.value!==document.activeElement&&((t=g.value)==null||t.focus()),f.value||G()}function L(t){F(),B("click:control",t)}function W(t){B("mousedown:control",t)}function q(t){t.stopPropagation(),F(),S(()=>{o.value="",we(e["onClick:clear"],t)})}function J(t){var a;const n=t.target;if(o.value=n.value,(a=e.modelModifiers)!=null&&a.trim){const u=[n.selectionStart,n.selectionEnd];S(()=>{n.selectionStart=u[0],n.selectionEnd=u[1]})}}const c=v(),h=v(+e.rows),P=y(()=>["plain","underlined"].includes(e.variant));ie(()=>{e.autoGrow||(h.value=+e.rows)});function d(){e.autoGrow&&S(()=>{if(!c.value||!m.value)return;const t=getComputedStyle(c.value),n=getComputedStyle(m.value.$el),a=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),u=c.value.scrollHeight,w=parseFloat(t.lineHeight),C=Math.max(parseFloat(e.rows)*w+a,parseFloat(n.getPropertyValue("--v-input-control-height"))),R=parseFloat(e.maxRows)*w+a||1/0,s=ye(u??0,C,R);h.value=Math.floor((s-a)/w),z.value=Ve(s)})}re(d),x(o,d),x(()=>e.rows,d),x(()=>e.maxRows,d),x(()=>e.density,d);let r;return x(c,t=>{t?(r=new ResizeObserver(d),r.observe(c.value)):r==null||r.disconnect()}),se(()=>{r==null||r.disconnect()}),ce(()=>{const t=!!(i.counter||e.counter||e.counterValue),n=!!(t||i.details),[a,u]=de(b),{modelValue:w,...C}=_.filterProps(e),R=fe(e);return l(_,k({ref:M,modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":P.value},e.class],style:e.style},a,C,{centerAffix:h.value===1&&!P.value,focused:f.value}),{...i,default:s=>{let{id:V,isDisabled:A,isDirty:H,isReadonly:Q,isValid:X}=s;return l(ve,k({ref:m,style:{"--v-textarea-control-height":z.value},onClick:L,onMousedown:W,"onClick:clear":q,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},R,{id:V.value,active:K.value||H.value,centerAffix:h.value===1&&!P.value,dirty:H.value||e.dirty,disabled:A.value,focused:f.value,error:X.value===!1}),{...i,default:Y=>{let{props:{class:N,...T}}=Y;return l(I,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),D(l("textarea",k({ref:g,class:N,value:o.value,onInput:J,autofocus:e.autofocus,readonly:Q.value,disabled:A.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:F,onBlur:U},T,u),null),[[xe("intersect"),{handler:j},null,{once:!0}]]),e.autoGrow&&D(l("textarea",{class:[N,"v-textarea__sizer"],id:`${T.id}-sizer`,"onUpdate:modelValue":Z=>o.value=Z,ref:c,readonly:!0,"aria-hidden":"true"},null),[[me,o.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:n?s=>{var V;return l(I,null,[(V=i.details)==null?void 0:V.call(i,s),t&&l(I,null,[l("span",null,null),l(ge,{active:e.persistentCounter||f.value,value:O.value,max:$.value,disabled:e.disabled},i.counter)])])}:void 0})}),he({},M,m,g)}});export{Pe as V};
