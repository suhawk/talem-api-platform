import{aF as Ce,ba as _,y,bb as W,bc as ke,bd as Q,a1 as K,be as Y,a0 as _e,T as U,b6 as He,s as we,v as V,c as B,a as k,ag as M,av as Ke,bf as qe,d as ee,u as H,b as xe,aA as We,e as z,bg as Ye,f as Ue,an as Ve,g as Pe,h as l,q,ae as T,N as Xe,B as ie,p as se,af as Ge,I as le,S as Ze,W as Je,E as Qe,l as et,bh as tt,t as X,n as G,bi as Re,z as D,bj as ot,bk as nt,bl as it,bm as st,b3 as lt,at,ac as rt,aq as Z,ar as ae,aO as ct,bn as dt,aY as Se,aZ as ut,A as J,a4 as ft,a3 as re,bo as vt,bp as ht,aP as gt,bq as mt,aT as pt,br as bt,bs as yt,bt as Ct,G as N,a$ as kt}from"./index-4_JkqOaq.js";import{e as wt}from"./DataTable-DmJZvFZY.js";const j=y(null);function ce(e){if(e.clientX>0||e.clientY>0)j.value={x:e.clientX,y:e.clientY};else{const{target:t}=e;if(t instanceof Element){const{left:n,top:i,width:u,height:d}=t.getBoundingClientRect();n>0||i>0?j.value={x:n+u/2,y:i+d/2}:j.value={x:0,y:0}}else j.value=null}}let A=0,de=!0;function xt(){if(!Ce)return _(y(null));A===0&&W("click",document,ce,!0);const e=()=>{A+=1};return de&&(de=ke())?(Q(e),K(()=>{A-=1,A===0&&Y("click",document,ce,!0)})):e(),_(j)}const Pt=y(void 0);let L=0;function ue(){Pt.value=Date.now()}let fe=!0;function Rt(e){if(!Ce)return _(y(!1));const t=y(!1);let n=null;function i(){n!==null&&window.clearTimeout(n)}function u(){i(),t.value=!0,n=window.setTimeout(()=>{t.value=!1},e)}L===0&&W("click",window,ue,!0);const d=()=>{L+=1,W("click",window,u,!0)};return fe&&(fe=ke())?(Q(d),K(()=>{L-=1,L===0&&Y("click",window,ue,!0),Y("click",window,u,!0),i()})):d(),_(t)}let F=0,ve="",he="",ge="",me="";const pe=y("0px");function St(e){if(typeof document>"u")return;const t=document.documentElement;let n,i=!1;const u=()=>{t.style.marginRight=ve,t.style.overflow=he,t.style.overflowX=ge,t.style.overflowY=me,pe.value="0px"};_e(()=>{n=U(e,d=>{if(d){if(!F){const a=window.innerWidth-t.offsetWidth;a>0&&(ve=t.style.marginRight,t.style.marginRight=`${a}px`,pe.value=`${a}px`),he=t.style.overflow,ge=t.style.overflowX,me=t.style.overflowY,t.style.overflow="hidden",t.style.overflowX="hidden",t.style.overflowY="hidden"}i=!0,F++}else F--,F||u(),i=!1},{immediate:!0})}),K(()=>{n==null||n(),i&&(F--,F||u(),i=!1)})}const te=y(!1);function be(){te.value=!0}function ye(){te.value=!1}let E=0;function Bt(){return He&&(Q(()=>{E||(window.addEventListener("compositionstart",be),window.addEventListener("compositionend",ye)),E++}),K(()=>{E<=1?(window.removeEventListener("compositionstart",be),window.removeEventListener("compositionend",ye),E=0):E--})),te}const oe={icon:Function,type:{type:String,default:"default"},title:[String,Function],closable:{type:Boolean,default:!0},negativeText:String,positiveText:String,positiveButtonProps:Object,negativeButtonProps:Object,content:[String,Function],action:Function,showIcon:{type:Boolean,default:!0},loading:Boolean,bordered:Boolean,iconPlacement:String,titleClass:[String,Array],titleStyle:[String,Object],contentClass:[String,Array],contentStyle:[String,Object],actionClass:[String,Array],actionStyle:[String,Object],onPositiveClick:Function,onNegativeClick:Function,onClose:Function},Ot=we(oe),$t=V([B("dialog",`
 --n-icon-margin: var(--n-icon-margin-top) var(--n-icon-margin-right) var(--n-icon-margin-bottom) var(--n-icon-margin-left);
 word-break: break-word;
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,[k("icon",{color:"var(--n-icon-color)"}),M("bordered",{border:"var(--n-border)"}),M("icon-top",[k("close",{margin:"var(--n-close-margin)"}),k("icon",{margin:"var(--n-icon-margin)"}),k("content",{textAlign:"center"}),k("title",{justifyContent:"center"}),k("action",{justifyContent:"center"})]),M("icon-left",[k("icon",{margin:"var(--n-icon-margin)"}),M("closable",[k("title",`
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]),k("close",`
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `),k("content",`
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `,[M("last","margin-bottom: 0;")]),k("action",`
 display: flex;
 justify-content: flex-end;
 `,[V("> *:not(:last-child)",`
 margin-right: var(--n-action-space);
 `)]),k("icon",`
 font-size: var(--n-icon-size);
 transition: color .3s var(--n-bezier);
 `),k("title",`
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),B("dialog-icon-container",`
 display: flex;
 justify-content: center;
 `)]),Ke(B("dialog",`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)),B("dialog",[qe(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]),Tt={default:()=>l(le,null),info:()=>l(le,null),success:()=>l(Ze,null),warning:()=>l(Je,null),error:()=>l(Qe,null)},Ft=ee({name:"Dialog",alias:["NimbusConfirmCard","Confirm"],props:Object.assign(Object.assign({},H.props),oe),setup(e){const{mergedComponentPropsRef:t,mergedClsPrefixRef:n,inlineThemeDisabled:i,mergedRtlRef:u}=xe(e),d=We("Dialog",u,n),a=z(()=>{var v,h;const{iconPlacement:C}=e;return C||((h=(v=t==null?void 0:t.value)===null||v===void 0?void 0:v.Dialog)===null||h===void 0?void 0:h.iconPlacement)||"left"});function p(v){const{onPositiveClick:h}=e;h&&h(v)}function b(v){const{onNegativeClick:h}=e;h&&h(v)}function x(){const{onClose:v}=e;v&&v()}const P=H("Dialog","-dialog",$t,Ye,e,n),R=z(()=>{const{type:v}=e,h=a.value,{common:{cubicBezierEaseInOut:C},self:{fontSize:r,lineHeight:g,border:c,titleTextColor:O,textColor:S,color:m,closeBorderRadius:o,closeColorHover:s,closeColorPressed:w,closeIconColor:$,closeIconColorHover:Be,closeIconColorPressed:Oe,closeIconSize:$e,borderRadius:Te,titleFontWeight:Fe,titleFontSize:ze,padding:Me,iconSize:Ee,actionSpace:je,contentMargin:Ie,closeSize:Ne,[h==="top"?"iconMarginIconTop":"iconMargin"]:Ae,[h==="top"?"closeMarginIconTop":"closeMargin"]:Le,[Ue("iconColor",v)]:De}}=P.value,I=Ve(Ae);return{"--n-font-size":r,"--n-icon-color":De,"--n-bezier":C,"--n-close-margin":Le,"--n-icon-margin-top":I.top,"--n-icon-margin-right":I.right,"--n-icon-margin-bottom":I.bottom,"--n-icon-margin-left":I.left,"--n-icon-size":Ee,"--n-close-size":Ne,"--n-close-icon-size":$e,"--n-close-border-radius":o,"--n-close-color-hover":s,"--n-close-color-pressed":w,"--n-close-icon-color":$,"--n-close-icon-color-hover":Be,"--n-close-icon-color-pressed":Oe,"--n-color":m,"--n-text-color":S,"--n-border-radius":Te,"--n-padding":Me,"--n-line-height":g,"--n-border":c,"--n-content-margin":Ie,"--n-title-font-size":ze,"--n-title-font-weight":Fe,"--n-title-text-color":O,"--n-action-space":je}}),f=i?Pe("dialog",z(()=>`${e.type[0]}${a.value[0]}`),R,e):void 0;return{mergedClsPrefix:n,rtlEnabled:d,mergedIconPlacement:a,mergedTheme:P,handlePositiveClick:p,handleNegativeClick:b,handleCloseClick:x,cssVars:i?void 0:R,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender}},render(){var e;const{bordered:t,mergedIconPlacement:n,cssVars:i,closable:u,showIcon:d,title:a,content:p,action:b,negativeText:x,positiveText:P,positiveButtonProps:R,negativeButtonProps:f,handlePositiveClick:v,handleNegativeClick:h,mergedTheme:C,loading:r,type:g,mergedClsPrefix:c}=this;(e=this.onRender)===null||e===void 0||e.call(this);const O=d?l(Xe,{clsPrefix:c,class:`${c}-dialog__icon`},{default:()=>q(this.$slots.icon,m=>m||(this.icon?T(this.icon):Tt[this.type]()))}):null,S=q(this.$slots.action,m=>m||P||x||b?l("div",{class:[`${c}-dialog__action`,this.actionClass],style:this.actionStyle},m||(b?[T(b)]:[this.negativeText&&l(ie,Object.assign({theme:C.peers.Button,themeOverrides:C.peerOverrides.Button,ghost:!0,size:"small",onClick:h},f),{default:()=>T(this.negativeText)}),this.positiveText&&l(ie,Object.assign({theme:C.peers.Button,themeOverrides:C.peerOverrides.Button,size:"small",type:g==="default"?"primary":g,disabled:r,loading:r,onClick:v},R),{default:()=>T(this.positiveText)})])):null);return l("div",{class:[`${c}-dialog`,this.themeClass,this.closable&&`${c}-dialog--closable`,`${c}-dialog--icon-${n}`,t&&`${c}-dialog--bordered`,this.rtlEnabled&&`${c}-dialog--rtl`],style:i,role:"dialog"},u?q(this.$slots.close,m=>{const o=[`${c}-dialog__close`,this.rtlEnabled&&`${c}-dialog--rtl`];return m?l("div",{class:o},m):l(Ge,{clsPrefix:c,class:o,onClick:this.handleCloseClick})}):null,d&&n==="top"?l("div",{class:`${c}-dialog-icon-container`},O):null,l("div",{class:[`${c}-dialog__title`,this.titleClass],style:this.titleStyle},d&&n==="left"?O:null,se(this.$slots.header,()=>[T(a)])),l("div",{class:[`${c}-dialog__content`,S?"":`${c}-dialog__content--last`,this.contentClass],style:this.contentStyle},se(this.$slots.default,()=>[T(p)])),S)}}),zt=et("n-dialog-provider"),ne=Object.assign(Object.assign({},tt),oe),Mt=we(ne),Et=ee({name:"ModalBody",inheritAttrs:!1,props:Object.assign(Object.assign({show:{type:Boolean,required:!0},preset:String,displayDirective:{type:String,required:!0},trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},blockScroll:Boolean},ne),{renderMask:Function,onClickoutside:Function,onBeforeLeave:{type:Function,required:!0},onAfterLeave:{type:Function,required:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0},onClose:{type:Function,required:!0},onAfterEnter:Function,onEsc:Function}),setup(e){const t=y(null),n=y(null),i=y(e.show),u=y(null),d=y(null);U(X(e,"show"),r=>{r&&(i.value=!0)}),St(z(()=>e.blockScroll&&i.value));const a=G(Re);function p(){if(a.transformOriginRef.value==="center")return"";const{value:r}=u,{value:g}=d;if(r===null||g===null)return"";if(n.value){const c=n.value.containerScrollTop;return`${r}px ${g+c}px`}return""}function b(r){if(a.transformOriginRef.value==="center")return;const g=a.getMousePosition();if(!g||!n.value)return;const c=n.value.containerScrollTop,{offsetLeft:O,offsetTop:S}=r;if(g){const m=g.y,o=g.x;u.value=-(O-o),d.value=-(S-m-c)}r.style.transformOrigin=p()}function x(r){re(()=>{b(r)})}function P(r){r.style.transformOrigin=p(),e.onBeforeLeave()}function R(){i.value=!1,u.value=null,d.value=null,e.onAfterLeave()}function f(){const{onClose:r}=e;r&&r()}function v(){e.onNegativeClick()}function h(){e.onPositiveClick()}const C=y(null);return U(C,r=>{r&&re(()=>{const g=r.el;g&&t.value!==g&&(t.value=g)})}),D(ot,t),D(nt,null),D(it,null),{mergedTheme:a.mergedThemeRef,appear:a.appearRef,isMounted:a.isMountedRef,mergedClsPrefix:a.mergedClsPrefixRef,bodyRef:t,scrollbarRef:n,displayed:i,childNodeRef:C,handlePositiveClick:h,handleNegativeClick:v,handleCloseClick:f,handleAfterLeave:R,handleBeforeLeave:P,handleEnter:x}},render(){const{$slots:e,$attrs:t,handleEnter:n,handleAfterLeave:i,handleBeforeLeave:u,preset:d,mergedClsPrefix:a}=this;let p=null;if(!d){if(p=st(e),!p){lt("modal","default slot is empty");return}p=at(p),p.props=rt({class:`${a}-modal`},t,p.props||{})}return this.displayDirective==="show"||this.displayed||this.show?Z(l("div",{role:"none",class:`${a}-modal-body-wrapper`},l(ct,{ref:"scrollbarRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:`${a}-modal-scroll-content`},{default:()=>{var b;return[(b=this.renderMask)===null||b===void 0?void 0:b.call(this),l(dt,{disabled:!this.trapFocus,active:this.show,onEsc:this.onEsc,autoFocus:this.autoFocus},{default:()=>{var x;return l(Se,{name:"fade-in-scale-up-transition",appear:(x=this.appear)!==null&&x!==void 0?x:this.isMounted,onEnter:n,onAfterEnter:this.onAfterEnter,onAfterLeave:i,onBeforeLeave:u},{default:()=>{const P=[[ae,this.show]],{onClickoutside:R}=this;return R&&P.push([ut,this.onClickoutside,void 0,{capture:!0}]),Z(this.preset==="confirm"||this.preset==="dialog"?l(Ft,Object.assign({},this.$attrs,{class:[`${a}-modal`,this.$attrs.class],ref:"bodyRef",theme:this.mergedTheme.peers.Dialog,themeOverrides:this.mergedTheme.peerOverrides.Dialog},J(this.$props,Ot),{"aria-modal":"true"}),e):this.preset==="card"?l(ft,Object.assign({},this.$attrs,{ref:"bodyRef",class:[`${a}-modal`,this.$attrs.class],theme:this.mergedTheme.peers.Card,themeOverrides:this.mergedTheme.peerOverrides.Card},J(this.$props,vt),{"aria-modal":"true",role:"dialog"}),e):this.childNodeRef=p,P)}})}})]}})),[[ae,this.displayDirective==="if"||this.displayed||this.show]]):null}}),jt=V([B("modal-container",`
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `),B("modal-mask",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `,[ht({enterDuration:".25s",leaveDuration:".25s",enterCubicBezier:"var(--n-bezier-ease-out)",leaveCubicBezier:"var(--n-bezier-ease-out)"})]),B("modal-body-wrapper",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `,[B("modal-scroll-content",`
 min-height: 100%;
 display: flex;
 position: relative;
 `)]),B("modal",`
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `,[gt({duration:".25s",enterScale:".5"})])]),It=Object.assign(Object.assign(Object.assign(Object.assign({},H.props),{show:Boolean,unstableShowMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},preset:String,to:[String,Object],displayDirective:{type:String,default:"if"},transformOrigin:{type:String,default:"mouse"},zIndex:Number,autoFocus:{type:Boolean,default:!0},trapFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0}}),ne),{onEsc:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onBeforeLeave:Function,onAfterLeave:Function,onClose:Function,onPositiveClick:Function,onNegativeClick:Function,onMaskClick:Function,internalDialog:Boolean,internalModal:Boolean,internalAppear:{type:Boolean,default:void 0},overlayStyle:[String,Object],onBeforeHide:Function,onAfterHide:Function,onHide:Function}),Lt=ee({name:"Modal",inheritAttrs:!1,props:It,setup(e){const t=y(null),{mergedClsPrefixRef:n,namespaceRef:i,inlineThemeDisabled:u}=xe(e),d=H("Modal","-modal",jt,mt,e,n),a=Rt(64),p=xt(),b=pt(),x=e.internalDialog?G(zt,null):null,P=e.internalModal?G(bt,null):null,R=Bt();function f(o){const{onUpdateShow:s,"onUpdate:show":w,onHide:$}=e;s&&N(s,o),w&&N(w,o),$&&!o&&$(o)}function v(){const{onClose:o}=e;o?Promise.resolve(o()).then(s=>{s!==!1&&f(!1)}):f(!1)}function h(){const{onPositiveClick:o}=e;o?Promise.resolve(o()).then(s=>{s!==!1&&f(!1)}):f(!1)}function C(){const{onNegativeClick:o}=e;o?Promise.resolve(o()).then(s=>{s!==!1&&f(!1)}):f(!1)}function r(){const{onBeforeLeave:o,onBeforeHide:s}=e;o&&N(o),s&&s()}function g(){const{onAfterLeave:o,onAfterHide:s}=e;o&&N(o),s&&s()}function c(o){var s;const{onMaskClick:w}=e;w&&w(o),e.maskClosable&&!((s=t.value)===null||s===void 0)&&s.contains(kt(o))&&f(!1)}function O(o){var s;(s=e.onEsc)===null||s===void 0||s.call(e),e.show&&e.closeOnEsc&&wt(o)&&(R.value||f(!1))}D(Re,{getMousePosition:()=>{const o=x||P;if(o){const{clickedRef:s,clickedPositionRef:w}=o;if(s.value&&w.value)return w.value}return a.value?p.value:null},mergedClsPrefixRef:n,mergedThemeRef:d,isMountedRef:b,appearRef:X(e,"internalAppear"),transformOriginRef:X(e,"transformOrigin")});const S=z(()=>{const{common:{cubicBezierEaseOut:o},self:{boxShadow:s,color:w,textColor:$}}=d.value;return{"--n-bezier-ease-out":o,"--n-box-shadow":s,"--n-color":w,"--n-text-color":$}}),m=u?Pe("theme-class",void 0,S,e):void 0;return{mergedClsPrefix:n,namespace:i,isMounted:b,containerRef:t,presetProps:z(()=>J(e,Mt)),handleEsc:O,handleAfterLeave:g,handleClickoutside:c,handleBeforeLeave:r,doUpdateShow:f,handleNegativeClick:C,handlePositiveClick:h,handleCloseClick:v,cssVars:u?void 0:S,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender}},render(){const{mergedClsPrefix:e}=this;return l(Ct,{to:this.to,show:this.show},{default:()=>{var t;(t=this.onRender)===null||t===void 0||t.call(this);const{unstableShowMask:n}=this;return Z(l("div",{role:"none",ref:"containerRef",class:[`${e}-modal-container`,this.themeClass,this.namespace],style:this.cssVars},l(Et,Object.assign({style:this.overlayStyle},this.$attrs,{ref:"bodyWrapper",displayDirective:this.displayDirective,show:this.show,preset:this.preset,autoFocus:this.autoFocus,trapFocus:this.trapFocus,blockScroll:this.blockScroll},this.presetProps,{onEsc:this.handleEsc,onClose:this.handleCloseClick,onNegativeClick:this.handleNegativeClick,onPositiveClick:this.handlePositiveClick,onBeforeLeave:this.handleBeforeLeave,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave,onClickoutside:n?void 0:this.handleClickoutside,renderMask:n?()=>{var i;return l(Se,{name:"fade-in-transition",key:"mask",appear:(i=this.internalAppear)!==null&&i!==void 0?i:this.isMounted},{default:()=>this.show?l("div",{"aria-hidden":!0,ref:"containerRef",class:`${e}-modal-mask`,onClick:this.handleClickoutside}):null})}:void 0}),this.$slots)),[[yt,{zIndex:this.zIndex,enabled:this.show}]])}})}});export{Lt as N};
