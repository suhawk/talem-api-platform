import{d as z,h as a,c as v,v as u,ag as N,a as f,u as R,b as V,c7 as A,z as O,t as F,e as y,g as j,l as D,y as M,a0 as K,b$ as U,b6 as J,n as q,p as G,c8 as Q,aA as X,N as Y,b9 as Z,o as w,i as H,w as g,j as S,c9 as W,ca as ee,U as L,H as te,ad as re,au as ae,k as T,aD as E,b1 as $,J as oe,a4 as ne,cb as se}from"./index-lwLXK7_U.js";const le=z({name:"ArrowBack",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},a("path",{d:"M0 0h24v24H0V0z",fill:"none"}),a("path",{d:"M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"}))}}),ie=v("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[u("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),u("a",`
 color: inherit;
 text-decoration: inherit;
 `),v("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[v("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),u("&:not(:last-child)",[N("clickable",[f("link",`
 cursor: pointer;
 `,[u("&:hover",`
 background-color: var(--n-item-color-hover);
 `),u("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),f("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[u("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[v("icon",`
 color: var(--n-item-text-color-hover);
 `)]),u("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[v("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),f("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),u("&:last-child",[f("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[v("icon",`
 color: var(--n-item-text-color-active);
 `)]),f("separator",`
 display: none;
 `)])])]),I=D("n-breadcrumb"),ce=Object.assign(Object.assign({},R.props),{separator:{type:String,default:"/"}}),de=z({name:"Breadcrumb",props:ce,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:s}=V(e),n=R("Breadcrumb","-breadcrumb",ie,A,e,o);O(I,{separatorRef:F(e,"separator"),mergedClsPrefixRef:o});const d=y(()=>{const{common:{cubicBezierEaseInOut:r},self:{separatorColor:l,itemTextColor:i,itemTextColorHover:c,itemTextColorPressed:m,itemTextColorActive:b,fontSize:p,fontWeightActive:h,itemBorderRadius:_,itemColorHover:x,itemColorPressed:k,itemLineHeight:C}}=n.value;return{"--n-font-size":p,"--n-bezier":r,"--n-item-text-color":i,"--n-item-text-color-hover":c,"--n-item-text-color-pressed":m,"--n-item-text-color-active":b,"--n-separator-color":l,"--n-item-color-hover":x,"--n-item-color-pressed":k,"--n-item-border-radius":_,"--n-font-weight-active":h,"--n-item-line-height":C}}),t=s?j("breadcrumb",void 0,d,e):void 0;return{mergedClsPrefix:o,cssVars:s?void 0:d,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),a("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},a("ul",null,this.$slots))}});function ue(e=J?window:null){const o=()=>{const{hash:d,host:t,hostname:r,href:l,origin:i,pathname:c,port:m,protocol:b,search:p}=(e==null?void 0:e.location)||{};return{hash:d,host:t,hostname:r,href:l,origin:i,pathname:c,port:m,protocol:b,search:p}},s=M(o()),n=()=>{s.value=o()};return K(()=>{e&&(e.addEventListener("popstate",n),e.addEventListener("hashchange",n))}),U(()=>{e&&(e.removeEventListener("popstate",n),e.removeEventListener("hashchange",n))}),s}const he={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},me=z({name:"BreadcrumbItem",props:he,setup(e,{slots:o}){const s=q(I,null);if(!s)return()=>null;const{separatorRef:n,mergedClsPrefixRef:d}=s,t=ue(),r=y(()=>e.href?"a":"span"),l=y(()=>t.value.href===e.href?"location":null);return()=>{const{value:i}=d;return a("li",{class:[`${i}-breadcrumb-item`,e.clickable&&`${i}-breadcrumb-item--clickable`]},a(r.value,{class:`${i}-breadcrumb-item__link`,"aria-current":l.value,href:e.href,onClick:e.onClick},o),a("span",{class:`${i}-breadcrumb-item__separator`,"aria-hidden":"true"},G(o.separator,()=>{var c;return[(c=e.separator)!==null&&c!==void 0?c:n.value]})))}}}),be=u([v("page-header-header",`
 margin-bottom: 20px;
 `),v("page-header",`
 display: flex;
 align-items: center;
 justify-content: space-between;
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[f("main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 `),f("back",`
 display: flex;
 margin-right: 16px;
 font-size: var(--n-back-size);
 cursor: pointer;
 color: var(--n-back-color);
 transition: color .3s var(--n-bezier);
 `,[u("&:hover","color: var(--n-back-color-hover);"),u("&:active","color: var(--n-back-color-pressed);")]),f("avatar",`
 display: flex;
 margin-right: 12px
 `),f("title",`
 margin-right: 16px;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),f("subtitle",`
 font-size: 14px;
 transition: color .3s var(--n-bezier);
 color: var(--n-subtitle-text-color);
 `)]),v("page-header-content",`
 font-size: var(--n-font-size);
 `,[u("&:not(:first-child)","margin-top: 20px;")]),v("page-header-footer",`
 font-size: var(--n-font-size);
 `,[u("&:not(:first-child)","margin-top: 20px;")])]),pe=Object.assign(Object.assign({},R.props),{title:String,subtitle:String,extra:String,onBack:Function}),ve=z({name:"PageHeader",props:pe,setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:s,inlineThemeDisabled:n}=V(e),d=R("PageHeader","-page-header",be,Q,e,o),t=X("PageHeader",s,o),r=y(()=>{const{self:{titleTextColor:i,subtitleTextColor:c,backColor:m,fontSize:b,titleFontSize:p,backSize:h,titleFontWeight:_,backColorHover:x,backColorPressed:k},common:{cubicBezierEaseInOut:C}}=d.value;return{"--n-title-text-color":i,"--n-title-font-size":p,"--n-title-font-weight":_,"--n-font-size":b,"--n-back-size":h,"--n-subtitle-text-color":c,"--n-back-color":m,"--n-back-color-hover":x,"--n-back-color-pressed":k,"--n-bezier":C}}),l=n?j("page-header",void 0,r,e):void 0;return{rtlEnabled:t,mergedClsPrefix:o,cssVars:n?void 0:r,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{onBack:o,title:s,subtitle:n,extra:d,mergedClsPrefix:t,cssVars:r,$slots:l}=this;(e=this.onRender)===null||e===void 0||e.call(this);const{title:i,subtitle:c,extra:m,default:b,header:p,avatar:h,footer:_,back:x}=l,k=o,C=s||i,B=n||c,P=d||m;return a("div",{style:r,class:[`${t}-page-header-wrapper`,this.themeClass,this.rtlEnabled&&`${t}-page-header-wrapper--rtl`]},p?a("div",{class:`${t}-page-header-header`,key:"breadcrumb"},p()):null,(k||h||C||B||P)&&a("div",{class:`${t}-page-header`,key:"header"},a("div",{class:`${t}-page-header__main`,key:"back"},k?a("div",{class:`${t}-page-header__back`,onClick:o},x?x():a(Y,{clsPrefix:t},{default:()=>a(le,null)})):null,h?a("div",{class:`${t}-page-header__avatar`},h()):null,C?a("div",{class:`${t}-page-header__title`,key:"title"},s||i()):null,B?a("div",{class:`${t}-page-header__subtitle`,key:"subtitle"},n||c()):null),P?a("div",{class:`${t}-page-header__extra`},d||m()):null),b?a("div",{class:`${t}-page-header-content`,key:"content"},b()):null,_?a("div",{class:`${t}-page-header-footer`,key:"footer"},_()):null)}}),fe={class:"content-layout-content"},_e={__name:"ContentLayout",props:{title:{type:String,default:""},subtitle:{type:String},breadcrumb:{type:Array,default:()=>[]}},setup(e){const o=e,s=y(()=>[{label:"Home",key:"home"},...o.breadcrumb.map(r=>({label:r.label,key:r.key}))]),n=y(()=>{const r={};return o.subtitle&&(r.subtitle=o.subtitle),r}),d=Z(),t=r=>{r.key==="calllist"&&d.push("/calllist")};return(r,l)=>{const i=me,c=de,m=ve,b=ne,p=se;return w(),H(p,{embedded:"","content-style":"padding: 24px;"},{default:g(()=>[S(b,null,{default:g(()=>[S(m,W(ee(L(n))),{header:g(()=>[S(c,null,{default:g(()=>[(w(!0),te(re,null,ae(L(s),h=>(w(),H(i,{key:h.key,onClick:_=>t(h)},{default:g(()=>[T(E(h.label),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),title:g(()=>[T(E(e.title),1)]),extra:g(()=>[$(r.$slots,"extra")]),default:g(()=>[$(r.$slots,"body")]),_:3},16),oe("div",fe,[$(r.$slots,"default")])]),_:3})]),_:3})}}};export{_e as _};
