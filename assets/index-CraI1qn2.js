import{_ as St}from"./ContentLayout-0EYTWc5r.js";import{d as U,y as A,a5 as wt,a6 as Ct,h as c,a7 as Ce,a8 as Tt,a9 as ee,aa as Rt,l as zt,n as Ee,ab as $t,e as K,ac as Pt,ad as pe,N as kt,ae as At,af as Wt,C as Bt,c as n,ag as i,v as C,a as B,ah as Et,u as Le,b as Lt,ai as It,aj as Te,ak as re,al as jt,T as oe,a0 as Ot,z as Ht,t as L,am as Ft,$ as Mt,f as I,an as Q,g as Vt,q as Re,ao as ie,G as Z,ap as Nt,a3 as se,aq as Dt,ar as Kt,as as Ut,at as Xt,_ as Gt,o as D,i as le,w as N,j as de,k as qt,H as ze,au as $e,B as Yt,J as Jt,U as ce,O as Qt,Q as Zt}from"./index-4_JkqOaq.js";const ea=Ce(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[Ce("&::-webkit-scrollbar",{width:0,height:0})]),ta=U({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=A(null);function r(s){!(s.currentTarget.offsetWidth<s.currentTarget.scrollWidth)||s.deltaY===0||(s.currentTarget.scrollLeft+=s.deltaY+s.deltaX,s.preventDefault())}const l=wt();return ea.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:Ct,ssr:l}),Object.assign({selfRef:e,handleWheel:r},{scrollTo(...s){var g;(g=e.value)===null||g===void 0||g.scrollTo(...s)}})},render(){return c("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var aa=/\s/;function na(e){for(var r=e.length;r--&&aa.test(e.charAt(r)););return r}var ra=/^\s+/;function oa(e){return e&&e.slice(0,na(e)+1).replace(ra,"")}var Pe=NaN,ia=/^[-+]0x[0-9a-f]+$/i,sa=/^0b[01]+$/i,la=/^0o[0-7]+$/i,da=parseInt;function ke(e){if(typeof e=="number")return e;if(Tt(e))return Pe;if(ee(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=ee(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=oa(e);var l=sa.test(e);return l||la.test(e)?da(e.slice(2),l?2:8):ia.test(e)?Pe:+e}var be=function(){return Rt.Date.now()},ca="Expected a function",ba=Math.max,fa=Math.min;function ua(e,r,l){var p,s,g,f,u,y,h=0,m=!1,R=!1,z=!0;if(typeof e!="function")throw new TypeError(ca);r=ke(r)||0,ee(l)&&(m=!!l.leading,R="maxWait"in l,g=R?ba(ke(l.maxWait)||0,r):g,z="trailing"in l?!!l.trailing:z);function x(b){var T=p,F=s;return p=s=void 0,h=b,f=e.apply(F,T),f}function _(b){return h=b,u=setTimeout(k,r),m?x(b):f}function S(b){var T=b-y,F=b-h,X=r-T;return R?fa(X,g-F):X}function P(b){var T=b-y,F=b-h;return y===void 0||T>=r||T<0||R&&F>=g}function k(){var b=be();if(P(b))return $(b);u=setTimeout(k,S(b))}function $(b){return u=void 0,z&&p?x(b):(p=s=void 0,f)}function H(){u!==void 0&&clearTimeout(u),h=0,p=y=s=u=void 0}function W(){return u===void 0?f:$(be())}function v(){var b=be(),T=P(b);if(p=arguments,s=this,y=b,T){if(u===void 0)return _(y);if(R)return clearTimeout(u),u=setTimeout(k,r),x(y)}return u===void 0&&(u=setTimeout(k,r)),f}return v.cancel=H,v.flush=W,v}var pa="Expected a function";function fe(e,r,l){var p=!0,s=!0;if(typeof e!="function")throw new TypeError(pa);return ee(l)&&(p="leading"in l?!!l.leading:p,s="trailing"in l?!!l.trailing:s),ua(e,r,{leading:p,maxWait:r,trailing:s})}const va=U({name:"Add",render(){return c("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),ge=zt("n-tabs"),Ie={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},ga=U({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Ie,setup(e){const r=Ee(ge,null);return r||$t("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:r.paneStyleRef,class:r.paneClassRef,mergedClsPrefix:r.mergedClsPrefixRef}},render(){return c("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),ha=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Bt(Ie,["displayDirective"])),ve=U({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:ha,setup(e){const{mergedClsPrefixRef:r,valueRef:l,typeRef:p,closableRef:s,tabStyleRef:g,addTabStyleRef:f,tabClassRef:u,addTabClassRef:y,tabChangeIdRef:h,onBeforeLeaveRef:m,triggerRef:R,handleAdd:z,activateTab:x,handleClose:_}=Ee(ge);return{trigger:R,mergedClosable:K(()=>{if(e.internalAddable)return!1;const{closable:S}=e;return S===void 0?s.value:S}),style:g,addStyle:f,tabClass:u,addTabClass:y,clsPrefix:r,value:l,type:p,handleClose(S){S.stopPropagation(),!e.disabled&&_(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){z();return}const{name:S}=e,P=++h.id;if(S!==l.value){const{value:k}=m;k?Promise.resolve(k(e.name,l.value)).then($=>{$&&h.id===P&&x(S)}):x(S)}}}},render(){const{internalAddable:e,clsPrefix:r,name:l,disabled:p,label:s,tab:g,value:f,mergedClosable:u,trigger:y,$slots:{default:h}}=this,m=s??g;return c("div",{class:`${r}-tabs-tab-wrapper`},this.internalLeftPadded?c("div",{class:`${r}-tabs-tab-pad`}):null,c("div",Object.assign({key:l,"data-name":l,"data-disabled":p?!0:void 0},Pt({class:[`${r}-tabs-tab`,f===l&&`${r}-tabs-tab--active`,p&&`${r}-tabs-tab--disabled`,u&&`${r}-tabs-tab--closable`,e&&`${r}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:y==="click"?this.activateTab:void 0,onMouseenter:y==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),c("span",{class:`${r}-tabs-tab__label`},e?c(pe,null,c("div",{class:`${r}-tabs-tab__height-placeholder`}," "),c(kt,{clsPrefix:r},{default:()=>c(va,null)})):h?h():typeof m=="object"?m:At(m??l)),u&&this.type==="card"?c(Wt,{clsPrefix:r,class:`${r}-tabs-tab__close`,onClick:this.handleClose,disabled:p}):null))}}),ma=n("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[i("segment-type",[n("tabs-rail",[C("&.transition-disabled",[n("tabs-capsule",`
 transition: none;
 `)])])]),i("top",[n("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),i("left",[n("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),i("left, right",`
 flex-direction: row;
 `,[n("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),n("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),i("right",`
 flex-direction: row-reverse;
 `,[n("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),n("tabs-bar",`
 left: 0;
 `)]),i("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[n("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),n("tabs-bar",`
 top: 0;
 `)]),n("tabs-rail",`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[n("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),n("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[n("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[i("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),C("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),i("flex",[n("tabs-nav",`
 width: 100%;
 position: relative;
 `,[n("tabs-wrapper",`
 width: 100%;
 `,[n("tabs-tab",`
 margin-right: 0;
 `)])])]),n("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[B("prefix, suffix",`
 display: flex;
 align-items: center;
 `),B("prefix","padding-right: 16px;"),B("suffix","padding-left: 16px;")]),i("top, bottom",[n("tabs-nav-scroll-wrapper",[C("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),C("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),i("shadow-start",[C("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),i("shadow-end",[C("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),i("left, right",[n("tabs-nav-scroll-content",`
 flex-direction: column;
 `),n("tabs-nav-scroll-wrapper",[C("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),C("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),i("shadow-start",[C("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),i("shadow-end",[C("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),n("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[n("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[C("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),C("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),n("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),n("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),n("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),n("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[i("disabled",{cursor:"not-allowed"}),B("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),B("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),n("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[C("&.transition-disabled",`
 transition: none;
 `),i("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),n("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),n("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[C("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),C("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),C("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),C("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),C("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),n("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),i("line-type, bar-type",[n("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[C("&:hover",{color:"var(--n-tab-text-color-hover)"}),i("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),i("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),n("tabs-nav",[i("line-type",[i("top",[B("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 bottom: -1px;
 `)]),i("left",[B("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 right: -1px;
 `)]),i("right",[B("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 left: -1px;
 `)]),i("bottom",[B("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 top: -1px;
 `)]),B("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-bar",`
 border-radius: 0;
 `)]),i("card-type",[B("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[i("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[B("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),Et("disabled",[C("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),i("closable","padding-right: 8px;"),i("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),i("disabled","color: var(--n-tab-text-color-disabled);")]),n("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),i("left, right",[n("tabs-wrapper",`
 flex-direction: column;
 `,[n("tabs-tab-wrapper",`
 flex-direction: column;
 `,[n("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]),i("top",[i("card-type",[n("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-bottom: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),i("left",[i("card-type",[n("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-right: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),n("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),i("right",[i("card-type",[n("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-left: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),n("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),i("bottom",[i("card-type",[n("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-top: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),n("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),xa=Object.assign(Object.assign({},Le.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),ya=U({name:"Tabs",props:xa,setup(e,{slots:r}){var l,p,s,g;const{mergedClsPrefixRef:f,inlineThemeDisabled:u}=Lt(e),y=Le("Tabs","-tabs",ma,It,e,f),h=A(null),m=A(null),R=A(null),z=A(null),x=A(null),_=A(null),S=A(!0),P=A(!0),k=Te(e,["labelSize","size"]),$=Te(e,["activeName","value"]),H=A((p=(l=$.value)!==null&&l!==void 0?l:e.defaultValue)!==null&&p!==void 0?p:r.default?(g=(s=re(r.default())[0])===null||s===void 0?void 0:s.props)===null||g===void 0?void 0:g.name:null),W=jt($,H),v={id:0},b=K(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});oe(W,()=>{v.id=0,G(),me()});function T(){var t;const{value:a}=W;return a===null?null:(t=h.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function F(t){if(e.type==="card")return;const{value:a}=m;if(!a)return;const o=a.style.opacity==="0";if(t){const d=`${f.value}-tabs-bar--disabled`,{barWidth:w,placement:E}=e;if(t.dataset.disabled==="true"?a.classList.add(d):a.classList.remove(d),["top","bottom"].includes(E)){if(he(["top","maxHeight","height"]),typeof w=="number"&&t.offsetWidth>=w){const O=Math.floor((t.offsetWidth-w)/2)+t.offsetLeft;a.style.left=`${O}px`,a.style.maxWidth=`${w}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",o&&(a.style.transition="none"),a.offsetWidth,o&&(a.style.transition="",a.style.opacity="1")}else{if(he(["left","maxWidth","width"]),typeof w=="number"&&t.offsetHeight>=w){const O=Math.floor((t.offsetHeight-w)/2)+t.offsetTop;a.style.top=`${O}px`,a.style.maxHeight=`${w}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",o&&(a.style.transition="none"),a.offsetHeight,o&&(a.style.transition="",a.style.opacity="1")}}}function X(){if(e.type==="card")return;const{value:t}=m;t&&(t.style.opacity="0")}function he(t){const{value:a}=m;if(a)for(const o of t)a.style[o]=""}function G(){if(e.type==="card")return;const t=T();t?F(t):X()}function me(){var t;const a=(t=x.value)===null||t===void 0?void 0:t.$el;if(!a)return;const o=T();if(!o)return;const{scrollLeft:d,offsetWidth:w}=a,{offsetLeft:E,offsetWidth:O}=o;d>E?a.scrollTo({top:0,left:E,behavior:"smooth"}):E+O>d+w&&a.scrollTo({top:0,left:E+O-w,behavior:"smooth"})}const q=A(null);let te=0,j=null;function je(t){const a=q.value;if(a){te=t.getBoundingClientRect().height;const o=`${te}px`,d=()=>{a.style.height=o,a.style.maxHeight=o};j?(d(),j(),j=null):j=d}}function Oe(t){const a=q.value;if(a){const o=t.getBoundingClientRect().height,d=()=>{document.body.offsetHeight,a.style.maxHeight=`${o}px`,a.style.height=`${Math.max(te,o)}px`};j?(j(),j=null,d()):j=d}}function He(){const t=q.value;if(t){t.style.maxHeight="",t.style.height="";const{paneWrapperStyle:a}=e;if(typeof a=="string")t.style.cssText=a;else if(a){const{maxHeight:o,height:d}=a;o!==void 0&&(t.style.maxHeight=o),d!==void 0&&(t.style.height=d)}}}const xe={value:[]},ye=A("next");function Fe(t){const a=W.value;let o="next";for(const d of xe.value){if(d===a)break;if(d===t){o="prev";break}}ye.value=o,Me(t)}function Me(t){const{onActiveNameChange:a,onUpdateValue:o,"onUpdate:value":d}=e;a&&Z(a,t),o&&Z(o,t),d&&Z(d,t),H.value=t}function Ve(t){const{onClose:a}=e;a&&Z(a,t)}function _e(){const{value:t}=m;if(!t)return;const a="transition-disabled";t.classList.add(a),G(),t.classList.remove(a)}const M=A(null);function ae({transitionDisabled:t}){const a=h.value;if(!a)return;t&&a.classList.add("transition-disabled");const o=T();o&&M.value&&(M.value.style.width=`${o.offsetWidth}px`,M.value.style.height=`${o.offsetHeight}px`,M.value.style.transform=`translateX(${o.offsetLeft-Nt(getComputedStyle(a).paddingLeft)}px)`,t&&M.value.offsetWidth),t&&a.classList.remove("transition-disabled")}oe([W],()=>{e.type==="segment"&&se(()=>{ae({transitionDisabled:!1})})}),Ot(()=>{e.type==="segment"&&ae({transitionDisabled:!0})});let Se=0;function Ne(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||Se===t.contentRect.width)return;Se=t.contentRect.width;const{type:o}=e;if((o==="line"||o==="bar")&&_e(),o!=="segment"){const{placement:d}=e;ne((d==="top"||d==="bottom"?(a=x.value)===null||a===void 0?void 0:a.$el:_.value)||null)}}const De=fe(Ne,64);oe([()=>e.justifyContent,()=>e.size],()=>{se(()=>{const{type:t}=e;(t==="line"||t==="bar")&&_e()})});const Y=A(!1);function Ke(t){var a;const{target:o,contentRect:{width:d}}=t,w=o.parentElement.offsetWidth;if(!Y.value)w<d&&(Y.value=!0);else{const{value:E}=z;if(!E)return;w-d>E.$el.offsetWidth&&(Y.value=!1)}ne(((a=x.value)===null||a===void 0?void 0:a.$el)||null)}const Ue=fe(Ke,64);function Xe(){const{onAdd:t}=e;t&&t(),se(()=>{const a=T(),{value:o}=x;!a||!o||o.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function ne(t){if(!t)return;const{placement:a}=e;if(a==="top"||a==="bottom"){const{scrollLeft:o,scrollWidth:d,offsetWidth:w}=t;S.value=o<=0,P.value=o+w>=d}else{const{scrollTop:o,scrollHeight:d,offsetHeight:w}=t;S.value=o<=0,P.value=o+w>=d}}const Ge=fe(t=>{ne(t.target)},64);Ht(ge,{triggerRef:L(e,"trigger"),tabStyleRef:L(e,"tabStyle"),tabClassRef:L(e,"tabClass"),addTabStyleRef:L(e,"addTabStyle"),addTabClassRef:L(e,"addTabClass"),paneClassRef:L(e,"paneClass"),paneStyleRef:L(e,"paneStyle"),mergedClsPrefixRef:f,typeRef:L(e,"type"),closableRef:L(e,"closable"),valueRef:W,tabChangeIdRef:v,onBeforeLeaveRef:L(e,"onBeforeLeave"),activateTab:Fe,handleClose:Ve,handleAdd:Xe}),Ft(()=>{G(),me()}),Mt(()=>{const{value:t}=R;if(!t)return;const{value:a}=f,o=`${a}-tabs-nav-scroll-wrapper--shadow-start`,d=`${a}-tabs-nav-scroll-wrapper--shadow-end`;S.value?t.classList.remove(o):t.classList.add(o),P.value?t.classList.remove(d):t.classList.add(d)});const qe={syncBarPosition:()=>{G()}},Ye=()=>{ae({transitionDisabled:!0})},we=K(()=>{const{value:t}=k,{type:a}=e,o={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],d=`${t}${o}`,{self:{barColor:w,closeIconColor:E,closeIconColorHover:O,closeIconColorPressed:Je,tabColor:Qe,tabBorderColor:Ze,paneTextColor:et,tabFontWeight:tt,tabBorderRadius:at,tabFontWeightActive:nt,colorSegment:rt,fontWeightStrong:ot,tabColorSegment:it,closeSize:st,closeIconSize:lt,closeColorHover:dt,closeColorPressed:ct,closeBorderRadius:bt,[I("panePadding",t)]:J,[I("tabPadding",d)]:ft,[I("tabPaddingVertical",d)]:ut,[I("tabGap",d)]:pt,[I("tabGap",`${d}Vertical`)]:vt,[I("tabTextColor",a)]:gt,[I("tabTextColorActive",a)]:ht,[I("tabTextColorHover",a)]:mt,[I("tabTextColorDisabled",a)]:xt,[I("tabFontSize",t)]:yt},common:{cubicBezierEaseInOut:_t}}=y.value;return{"--n-bezier":_t,"--n-color-segment":rt,"--n-bar-color":w,"--n-tab-font-size":yt,"--n-tab-text-color":gt,"--n-tab-text-color-active":ht,"--n-tab-text-color-disabled":xt,"--n-tab-text-color-hover":mt,"--n-pane-text-color":et,"--n-tab-border-color":Ze,"--n-tab-border-radius":at,"--n-close-size":st,"--n-close-icon-size":lt,"--n-close-color-hover":dt,"--n-close-color-pressed":ct,"--n-close-border-radius":bt,"--n-close-icon-color":E,"--n-close-icon-color-hover":O,"--n-close-icon-color-pressed":Je,"--n-tab-color":Qe,"--n-tab-font-weight":tt,"--n-tab-font-weight-active":nt,"--n-tab-padding":ft,"--n-tab-padding-vertical":ut,"--n-tab-gap":pt,"--n-tab-gap-vertical":vt,"--n-pane-padding-left":Q(J,"left"),"--n-pane-padding-right":Q(J,"right"),"--n-pane-padding-top":Q(J,"top"),"--n-pane-padding-bottom":Q(J,"bottom"),"--n-font-weight-strong":ot,"--n-tab-color-segment":it}}),V=u?Vt("tabs",K(()=>`${k.value[0]}${e.type[0]}`),we,e):void 0;return Object.assign({mergedClsPrefix:f,mergedValue:W,renderedNames:new Set,segmentCapsuleElRef:M,tabsPaneWrapperRef:q,tabsElRef:h,barElRef:m,addTabInstRef:z,xScrollInstRef:x,scrollWrapperElRef:R,addTabFixed:Y,tabWrapperStyle:b,handleNavResize:De,mergedSize:k,handleScroll:Ge,handleTabsResize:Ue,cssVars:u?void 0:we,themeClass:V==null?void 0:V.themeClass,animationDirection:ye,renderNameListRef:xe,yScrollElRef:_,handleSegmentResize:Ye,onAnimationBeforeLeave:je,onAnimationEnter:Oe,onAnimationAfterEnter:He,onRender:V==null?void 0:V.onRender},qe)},render(){const{mergedClsPrefix:e,type:r,placement:l,addTabFixed:p,addable:s,mergedSize:g,renderNameListRef:f,onRender:u,paneWrapperClass:y,paneWrapperStyle:h,$slots:{default:m,prefix:R,suffix:z}}=this;u==null||u();const x=m?re(m()).filter(v=>v.type.__TAB_PANE__===!0):[],_=m?re(m()).filter(v=>v.type.__TAB__===!0):[],S=!_.length,P=r==="card",k=r==="segment",$=!P&&!k&&this.justifyContent;f.value=[];const H=()=>{const v=c("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},$?null:c("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),S?x.map((b,T)=>(f.value.push(b.props.name),ue(c(ve,Object.assign({},b.props,{internalCreatedByPane:!0,internalLeftPadded:T!==0&&(!$||$==="center"||$==="start"||$==="end")}),b.children?{default:b.children.tab}:void 0)))):_.map((b,T)=>(f.value.push(b.props.name),ue(T!==0&&!$?Be(b):b))),!p&&s&&P?We(s,(S?x.length:_.length)!==0):null,$?null:c("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return c("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},P&&s?c(ie,{onResize:this.handleTabsResize},{default:()=>v}):v,P?c("div",{class:`${e}-tabs-pad`}):null,P?null:c("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},W=k?"top":l;return c("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${r}-type`,`${e}-tabs--${g}-size`,$&&`${e}-tabs--flex`,`${e}-tabs--${W}`],style:this.cssVars},c("div",{class:[`${e}-tabs-nav--${r}-type`,`${e}-tabs-nav--${W}`,`${e}-tabs-nav`]},Re(R,v=>v&&c("div",{class:`${e}-tabs-nav__prefix`},v)),k?c(ie,{onResize:this.handleSegmentResize},{default:()=>c("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},c("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},c("div",{class:`${e}-tabs-wrapper`},c("div",{class:`${e}-tabs-tab`}))),S?x.map((v,b)=>(f.value.push(v.props.name),c(ve,Object.assign({},v.props,{internalCreatedByPane:!0,internalLeftPadded:b!==0}),v.children?{default:v.children.tab}:void 0))):_.map((v,b)=>(f.value.push(v.props.name),b===0?v:Be(v))))}):c(ie,{onResize:this.handleNavResize},{default:()=>c("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(W)?c(ta,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:H}):c("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},H()))}),p&&s&&P?We(s,!0):null,Re(z,v=>v&&c("div",{class:`${e}-tabs-nav__suffix`},v))),S&&(this.animated&&(W==="top"||W==="bottom")?c("div",{ref:"tabsPaneWrapperRef",style:h,class:[`${e}-tabs-pane-wrapper`,y]},Ae(x,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Ae(x,this.mergedValue,this.renderedNames)))}});function Ae(e,r,l,p,s,g,f){const u=[];return e.forEach(y=>{const{name:h,displayDirective:m,"display-directive":R}=y.props,z=_=>m===_||R===_,x=r===h;if(y.key!==void 0&&(y.key=h),x||z("show")||z("show:lazy")&&l.has(h)){l.has(h)||l.add(h);const _=!z("if");u.push(_?Dt(y,[[Kt,x]]):y)}}),f?c(Ut,{name:`${f}-transition`,onBeforeLeave:p,onEnter:s,onAfterEnter:g},{default:()=>u}):u}function We(e,r){return c(ve,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:r,disabled:typeof e=="object"&&e.disabled})}function Be(e){const r=Xt(e);return r.props?r.props.internalLeftPadded=!0:r.props={internalLeftPadded:!0},r}function ue(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const _a={class:"settings-container"},Sa={__name:"index",setup(e){const r=[{label:"Settings",key:"settings"}],l=A([{config_id:1,config_key:"Snapsheet API Key",config_value:"",description:"Snapsheet API Key"},{config_id:2,config_key:"Talem API Key",config_value:"",description:"Talem API Key"},{config_id:3,config_key:"S3 Access Key",config_value:"",description:"S3 Access Key"},{config_id:4,config_key:"S3 Secret Key",config_value:"",description:"S3 Secret Key"},{config_id:5,config_key:"S3 Bucket",config_value:"",description:"S3 Bucket"},{config_id:6,config_key:"S3 Region",config_value:"",description:"S3 Region"},{config_id:7,config_key:"S3 Endpoint",config_value:"",description:"S3 Endpoint"},{config_id:8,config_key:"API Call Cron",config_value:"",description:"Cron"},{config_id:9,config_key:"API Running Timeout",config_value:"",description:"API Running Timeout"},{config_id:10,config_key:"Email Sending Token",config_value:"",description:"Authentication token for email sending service"}]),p={"Snapsheet API Key":["Snapsheet API Key"],"Talem API Key":["Talem API Key"],S3:["S3 Access Key","S3 Secret Key","S3 Bucket","S3 Region","S3 Endpoint"],Cron:["API Call Cron","API Running Timeout"],Email:["Email Sending Token"]},s=K(()=>l.value.reduce((g,f)=>(g[f.config_key]=f,g),{}));return(g,f)=>{const u=Qt,y=Zt,h=ga,m=ya,R=Yt,z=St;return D(),le(z,{title:"Settings",subtitle:"Manage settings",breadcrumb:r},{extra:N(()=>[de(R,{type:"primary",onClick:g.saveSettings},{default:N(()=>f[0]||(f[0]=[qt("Save")])),_:1},8,["onClick"])]),default:N(()=>[de(m,{placement:"top",type:"card"},{default:N(()=>[(D(!0),ze(pe,null,$e(Object.keys(p),x=>(D(),le(h,{name:x,tab:x},{default:N(()=>[Jt("div",_a,[(D(!0),ze(pe,null,$e(p[x],_=>(D(),le(y,{key:_,label:_,path:_},{default:N(()=>[de(u,{modelValue:ce(s)[_].config_value,"onUpdate:modelValue":S=>ce(s)[_].config_value=S,placeholder:`Please enter the ${ce(s)[_].description}`},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["label","path"]))),128))])]),_:2},1032,["name","tab"]))),256))]),_:1})]),_:1})}}},Ta=Gt(Sa,[["__scopeId","data-v-1e3d8009"]]);export{Ta as default};
