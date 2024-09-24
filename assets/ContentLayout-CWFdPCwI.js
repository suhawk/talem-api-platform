import{d as z,h as a,c as b,C as d,D as N,a as p,u as w,b as V,bV as O,Y as A,T as F,e as y,g as j,Q as D,n as M,x as K,bP as U,z as Y,U as Q,O as X,bW as Z,H as q,N as G,o as R,i as H,w as f,j as S,bX as J,bY as W,aB as L,as as ee,aK as te,aV as re,k as T,b0 as E,bZ as B,at as ae,ac as oe,b_ as ne}from"./index-BGGUROfO.js";const se=z({name:"ArrowBack",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},a("path",{d:"M0 0h24v24H0V0z",fill:"none"}),a("path",{d:"M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"}))}}),ie=b("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[d("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),d("a",`
 color: inherit;
 text-decoration: inherit;
 `),b("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[b("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),d("&:not(:last-child)",[N("clickable",[p("link",`
 cursor: pointer;
 `,[d("&:hover",`
 background-color: var(--n-item-color-hover);
 `),d("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),p("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[d("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[b("icon",`
 color: var(--n-item-text-color-hover);
 `)]),d("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[b("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),p("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),d("&:last-child",[p("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[b("icon",`
 color: var(--n-item-text-color-active);
 `)]),p("separator",`
 display: none;
 `)])])]),I=D("n-breadcrumb"),le=Object.assign(Object.assign({},w.props),{separator:{type:String,default:"/"}}),ce=z({name:"Breadcrumb",props:le,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:i}=V(e),n=w("Breadcrumb","-breadcrumb",ie,O,e,o);A(I,{separatorRef:F(e,"separator"),mergedClsPrefixRef:o});const r=y(()=>{const{common:{cubicBezierEaseInOut:u},self:{separatorColor:s,itemTextColor:l,itemTextColorHover:c,itemTextColorPressed:h,itemTextColorActive:m,fontSize:v,fontWeightActive:g,itemBorderRadius:_,itemColorHover:x,itemColorPressed:k,itemLineHeight:C}}=n.value;return{"--n-font-size":v,"--n-bezier":u,"--n-item-text-color":l,"--n-item-text-color-hover":c,"--n-item-text-color-pressed":h,"--n-item-text-color-active":m,"--n-separator-color":s,"--n-item-color-hover":x,"--n-item-color-pressed":k,"--n-item-border-radius":_,"--n-font-weight-active":g,"--n-item-line-height":C}}),t=i?j("breadcrumb",void 0,r,e):void 0;return{mergedClsPrefix:o,cssVars:i?void 0:r,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),a("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},a("ul",null,this.$slots))}});function de(e=Y?window:null){const o=()=>{const{hash:r,host:t,hostname:u,href:s,origin:l,pathname:c,port:h,protocol:m,search:v}=(e==null?void 0:e.location)||{};return{hash:r,host:t,hostname:u,href:s,origin:l,pathname:c,port:h,protocol:m,search:v}},i=M(o()),n=()=>{i.value=o()};return K(()=>{e&&(e.addEventListener("popstate",n),e.addEventListener("hashchange",n))}),U(()=>{e&&(e.removeEventListener("popstate",n),e.removeEventListener("hashchange",n))}),i}const ue={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},me=z({name:"BreadcrumbItem",props:ue,setup(e,{slots:o}){const i=Q(I,null);if(!i)return()=>null;const{separatorRef:n,mergedClsPrefixRef:r}=i,t=de(),u=y(()=>e.href?"a":"span"),s=y(()=>t.value.href===e.href?"location":null);return()=>{const{value:l}=r;return a("li",{class:[`${l}-breadcrumb-item`,e.clickable&&`${l}-breadcrumb-item--clickable`]},a(u.value,{class:`${l}-breadcrumb-item__link`,"aria-current":s.value,href:e.href,onClick:e.onClick},o),a("span",{class:`${l}-breadcrumb-item__separator`,"aria-hidden":"true"},X(o.separator,()=>{var c;return[(c=e.separator)!==null&&c!==void 0?c:n.value]})))}}}),he=d([b("page-header-header",`
 margin-bottom: 20px;
 `),b("page-header",`
 display: flex;
 align-items: center;
 justify-content: space-between;
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[p("main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 `),p("back",`
 display: flex;
 margin-right: 16px;
 font-size: var(--n-back-size);
 cursor: pointer;
 color: var(--n-back-color);
 transition: color .3s var(--n-bezier);
 `,[d("&:hover","color: var(--n-back-color-hover);"),d("&:active","color: var(--n-back-color-pressed);")]),p("avatar",`
 display: flex;
 margin-right: 12px
 `),p("title",`
 margin-right: 16px;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),p("subtitle",`
 font-size: 14px;
 transition: color .3s var(--n-bezier);
 color: var(--n-subtitle-text-color);
 `)]),b("page-header-content",`
 font-size: var(--n-font-size);
 `,[d("&:not(:first-child)","margin-top: 20px;")]),b("page-header-footer",`
 font-size: var(--n-font-size);
 `,[d("&:not(:first-child)","margin-top: 20px;")])]),be=Object.assign(Object.assign({},w.props),{title:String,subtitle:String,extra:String,onBack:Function}),pe=z({name:"PageHeader",props:be,setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:i,inlineThemeDisabled:n}=V(e),r=w("PageHeader","-page-header",he,Z,e,o),t=q("PageHeader",i,o),u=y(()=>{const{self:{titleTextColor:l,subtitleTextColor:c,backColor:h,fontSize:m,titleFontSize:v,backSize:g,titleFontWeight:_,backColorHover:x,backColorPressed:k},common:{cubicBezierEaseInOut:C}}=r.value;return{"--n-title-text-color":l,"--n-title-font-size":v,"--n-title-font-weight":_,"--n-font-size":m,"--n-back-size":g,"--n-subtitle-text-color":c,"--n-back-color":h,"--n-back-color-hover":x,"--n-back-color-pressed":k,"--n-bezier":C}}),s=n?j("page-header",void 0,u,e):void 0;return{rtlEnabled:t,mergedClsPrefix:o,cssVars:n?void 0:u,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;const{onBack:o,title:i,subtitle:n,extra:r,mergedClsPrefix:t,cssVars:u,$slots:s}=this;(e=this.onRender)===null||e===void 0||e.call(this);const{title:l,subtitle:c,extra:h,default:m,header:v,avatar:g,footer:_,back:x}=s,k=o,C=i||l,$=n||c,P=r||h;return a("div",{style:u,class:[`${t}-page-header-wrapper`,this.themeClass,this.rtlEnabled&&`${t}-page-header-wrapper--rtl`]},v?a("div",{class:`${t}-page-header-header`,key:"breadcrumb"},v()):null,(k||g||C||$||P)&&a("div",{class:`${t}-page-header`,key:"header"},a("div",{class:`${t}-page-header__main`,key:"back"},k?a("div",{class:`${t}-page-header__back`,onClick:o},x?x():a(G,{clsPrefix:t},{default:()=>a(se,null)})):null,g?a("div",{class:`${t}-page-header__avatar`},g()):null,C?a("div",{class:`${t}-page-header__title`,key:"title"},i||l()):null,$?a("div",{class:`${t}-page-header__subtitle`,key:"subtitle"},n||c()):null),P?a("div",{class:`${t}-page-header__extra`},r||h()):null),m?a("div",{class:`${t}-page-header-content`,key:"content"},m()):null,_?a("div",{class:`${t}-page-header-footer`,key:"footer"},_()):null)}}),ve={class:"content-layout-content"},ge={__name:"ContentLayout",props:{title:{type:String,default:""},subtitle:{type:String},breadcrumb:{type:Array,default:()=>[]}},setup(e){const o=e,i=y(()=>[{label:"Home",key:"home"},...o.breadcrumb.map(r=>({label:r.label,key:r.key}))]),n=y(()=>{const r={};return o.subtitle&&(r.subtitle=o.subtitle),r});return(r,t)=>{const u=me,s=ce,l=pe,c=oe,h=ne;return R(),H(h,{embedded:"","content-style":"padding: 24px;"},{default:f(()=>[S(c,null,{default:f(()=>[S(l,J(W(L(n))),{header:f(()=>[S(s,null,{default:f(()=>[(R(!0),ee(te,null,re(L(i),m=>(R(),H(u,{key:m.key,to:{name:m.key}},{default:f(()=>[T(E(m.label),1)]),_:2},1032,["to"]))),128))]),_:1})]),title:f(()=>[T(E(e.title),1)]),extra:f(()=>[B(r.$slots,"extra")]),default:f(()=>[B(r.$slots,"grid")]),_:3},16),ae("div",ve,[B(r.$slots,"default")])]),_:3})]),_:3})}}};export{ge as _};
