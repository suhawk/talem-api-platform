import{C as p,c as o,aL as re,D as f,a as m,F as U,aW as X,d as E,u as M,b as Z,aX as te,e as G,f as H,g as q,aN as le,aO as ne,h as s,aY as se,aZ as ie,H as ae,a_ as de,Y as ce,T as be,Q as pe,U as ue,aJ as he,_ as ge,a$ as ve,n as F,x as me,o as K,i as Y,w as u,j as v,aB as g,k as C,b0 as w,ac as J,as as fe,aV as xe,aK as _e}from"./index-BGGUROfO.js";import{_ as ye}from"./ContentLayout-CWFdPCwI.js";function Q(e,r="default",n=[]){const{children:t}=e;if(t!==null&&typeof t=="object"&&!Array.isArray(t)){const a=t[r];if(typeof a=="function")return a()}return n}const ee="DESCRIPTION_ITEM_FLAG";function Ce(e){return typeof e=="object"&&e&&!Array.isArray(e)?e.type&&e.type[ee]:!1}const we=p([o("descriptions",{fontSize:"var(--n-font-size)"},[o("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),o("descriptions-table-wrapper",[o("descriptions-table",[o("descriptions-table-row",[o("descriptions-table-header",{padding:"var(--n-th-padding)"}),o("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),re("bordered",[o("descriptions-table-wrapper",[o("descriptions-table",[o("descriptions-table-row",[p("&:last-child",[o("descriptions-table-content",{paddingBottom:0})])])])])]),f("left-label-placement",[o("descriptions-table-content",[p("> *",{verticalAlign:"top"})])]),f("left-label-align",[p("th",{textAlign:"left"})]),f("center-label-align",[p("th",{textAlign:"center"})]),f("right-label-align",[p("th",{textAlign:"right"})]),f("bordered",[o("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[o("descriptions-table",[o("descriptions-table-row",[p("&:not(:last-child)",[o("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),o("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),o("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[p("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),o("descriptions-table-content",[p("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),o("descriptions-header",`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),o("descriptions-table-wrapper",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[o("descriptions-table",`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[o("descriptions-table-row",`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[o("descriptions-table-header",`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),o("descriptions-table-content",`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[m("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),m("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),o("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),U(o("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),X(o("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),ze=Object.assign(Object.assign({},M.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]}),$e=E({name:"Descriptions",props:ze,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=Z(e),t=M("Descriptions","-descriptions",we,te,e,r),a=G(()=>{const{size:b,bordered:c}=e,{common:{cubicBezierEaseInOut:h},self:{titleTextColor:z,thColor:D,thColorModal:i,thColorPopover:$,thTextColor:_,thFontWeight:S,tdTextColor:I,tdColor:O,tdColorModal:L,tdColorPopover:l,borderColor:y,borderColorModal:B,borderColorPopover:x,borderRadius:k,lineHeight:T,[H("fontSize",b)]:j,[H(c?"thPaddingBordered":"thPadding",b)]:R,[H(c?"tdPaddingBordered":"tdPadding",b)]:A}}=t.value;return{"--n-title-text-color":z,"--n-th-padding":R,"--n-td-padding":A,"--n-font-size":j,"--n-bezier":h,"--n-th-font-weight":S,"--n-line-height":T,"--n-th-text-color":_,"--n-td-text-color":I,"--n-th-color":D,"--n-th-color-modal":i,"--n-th-color-popover":$,"--n-td-color":O,"--n-td-color-modal":L,"--n-td-color-popover":l,"--n-border-radius":k,"--n-border-color":y,"--n-border-color-modal":B,"--n-border-color-popover":x}}),d=n?q("descriptions",G(()=>{let b="";const{size:c,bordered:h}=e;return h&&(b+="a"),b+=c[0],b}),a,e):void 0;return{mergedClsPrefix:r,cssVars:n?void 0:a,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender,compitableColumn:le(e,["columns","column"]),inlineThemeDisabled:n}},render(){const e=this.$slots.default,r=e?ne(e()):[];r.length;const{contentClass:n,labelClass:t,compitableColumn:a,labelPlacement:d,labelAlign:b,size:c,bordered:h,title:z,cssVars:D,mergedClsPrefix:i,separator:$,onRender:_}=this;_==null||_();const S=r.filter(l=>Ce(l)),I={span:0,row:[],secondRow:[],rows:[]},L=S.reduce((l,y,B)=>{const x=y.props||{},k=S.length-1===B,T=["label"in x?x.label:Q(y,"label")],j=[Q(y)],R=x.span||1,A=l.span;l.span+=R;const N=x.labelStyle||x["label-style"]||this.labelStyle,V=x.contentStyle||x["content-style"]||this.contentStyle;if(d==="left")h?l.row.push(s("th",{class:[`${i}-descriptions-table-header`,t],colspan:1,style:N},T),s("td",{class:[`${i}-descriptions-table-content`,n],colspan:k?(a-A)*2+1:R*2-1,style:V},j)):l.row.push(s("td",{class:`${i}-descriptions-table-content`,colspan:k?(a-A)*2:R*2},s("span",{class:[`${i}-descriptions-table-content__label`,t],style:N},[...T,$&&s("span",{class:`${i}-descriptions-separator`},$)]),s("span",{class:[`${i}-descriptions-table-content__content`,n],style:V},j)));else{const W=k?(a-A)*2:R*2;l.row.push(s("th",{class:[`${i}-descriptions-table-header`,t],colspan:W,style:N},T)),l.secondRow.push(s("td",{class:[`${i}-descriptions-table-content`,n],colspan:W,style:V},j))}return(l.span>=a||k)&&(l.span=0,l.row.length&&(l.rows.push(l.row),l.row=[]),d!=="left"&&l.secondRow.length&&(l.rows.push(l.secondRow),l.secondRow=[])),l},I).rows.map(l=>s("tr",{class:`${i}-descriptions-table-row`},l));return s("div",{style:D,class:[`${i}-descriptions`,this.themeClass,`${i}-descriptions--${d}-label-placement`,`${i}-descriptions--${b}-label-align`,`${i}-descriptions--${c}-size`,h&&`${i}-descriptions--bordered`]},z||this.$slots.header?s("div",{class:`${i}-descriptions-header`},z||ie(this,"header")):null,s("div",{class:`${i}-descriptions-table-wrapper`},s("table",{class:`${i}-descriptions-table`},s("tbody",null,d==="top"&&s("tr",{class:`${i}-descriptions-table-row`,style:{visibility:"collapse"}},se(a*2,s("td",null))),L))))}}),Se={label:String,span:{type:Number,default:1},labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]},P=E({name:"DescriptionsItem",[ee]:!0,props:Se,render(){return null}}),ke=p([o("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[f("show-divider",[o("list-item",[p("&:not(:last-child)",[m("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),f("clickable",[o("list-item",`
 cursor: pointer;
 `)]),f("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),f("hoverable",[o("list-item",`
 border-radius: var(--n-border-radius);
 `,[p("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[m("divider",`
 background-color: transparent;
 `)])])]),f("bordered, hoverable",[o("list-item",`
 padding: 12px 20px;
 `),m("header, footer",`
 padding: 12px 20px;
 `)]),m("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[p("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),o("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[m("prefix",`
 margin-right: 20px;
 flex: 0;
 `),m("suffix",`
 margin-left: 20px;
 flex: 0;
 `),m("main",`
 flex: 1;
 `),m("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),U(o("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),X(o("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),Re=Object.assign(Object.assign({},M.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),oe=pe("n-list"),Pe=E({name:"List",props:Re,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:n,mergedRtlRef:t}=Z(e),a=ae("List",t,r),d=M("List","-list",ke,de,e,r);ce(oe,{showDividerRef:be(e,"showDivider"),mergedClsPrefixRef:r});const b=G(()=>{const{common:{cubicBezierEaseInOut:h},self:{fontSize:z,textColor:D,color:i,colorModal:$,colorPopover:_,borderColor:S,borderColorModal:I,borderColorPopover:O,borderRadius:L,colorHover:l,colorHoverModal:y,colorHoverPopover:B}}=d.value;return{"--n-font-size":z,"--n-bezier":h,"--n-text-color":D,"--n-color":i,"--n-border-radius":L,"--n-border-color":S,"--n-border-color-modal":I,"--n-border-color-popover":O,"--n-color-modal":$,"--n-color-popover":_,"--n-color-hover":l,"--n-color-hover-modal":y,"--n-color-hover-popover":B}}),c=n?q("list",void 0,b,e):void 0;return{mergedClsPrefix:r,rtlEnabled:a,cssVars:n?void 0:b,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var e;const{$slots:r,mergedClsPrefix:n,onRender:t}=this;return t==null||t(),s("ul",{class:[`${n}-list`,this.rtlEnabled&&`${n}-list--rtl`,this.bordered&&`${n}-list--bordered`,this.showDivider&&`${n}-list--show-divider`,this.hoverable&&`${n}-list--hoverable`,this.clickable&&`${n}-list--clickable`,this.themeClass],style:this.cssVars},r.header?s("div",{class:`${n}-list__header`},r.header()):null,(e=r.default)===null||e===void 0?void 0:e.call(r),r.footer?s("div",{class:`${n}-list__footer`},r.footer()):null)}}),De=E({name:"ListItem",setup(){const e=ue(oe,null);return e||he("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:e.showDividerRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:r}=this;return s("li",{class:`${r}-list-item`},e.prefix?s("div",{class:`${r}-list-item__prefix`},e.prefix()):null,e.default?s("div",{class:`${r}-list-item__main`},e):null,e.suffix?s("div",{class:`${r}-list-item__suffix`},e.suffix()):null,this.showDivider&&s("div",{class:`${r}-list-item__divider`}))}}),Ie={__name:"taskdetail",setup(e){const r=ve(),n=F(r.params.call_id),t=F({}),a=F([]),d=[{label:"API Call List",key:"calllist",to:{name:"calllist"}},{label:`Task ID: ${n.value}`,key:"taskdetail"}];return me(()=>{t.value={task_id:n.value,claim_number:"CN001",success_count:5,failure_count:0,status:"completed",created_at:"2023-06-01 12:00:00"},a.value=[{log_id:1,log_content:"Log entry 1"},{log_id:2,log_content:"Log entry 2"},{log_id:3,log_content:"Log entry 3"}]}),(b,c)=>(K(),Y(ye,{title:"Task Detail",subtitle:"Details of the selected task",breadcrumb:d},{default:u(()=>[v(g(J),null,{default:u(()=>[v(g($e),{title:`Task ID: ${t.value.task_id}`},{default:u(()=>[v(g(P),{label:"Task ID"},{default:u(()=>[C(w(t.value.task_id),1)]),_:1}),v(g(P),{label:"Claim Number"},{default:u(()=>[C(w(t.value.claim_number),1)]),_:1}),v(g(P),{label:"Success Count"},{default:u(()=>[C(w(t.value.success_count),1)]),_:1}),v(g(P),{label:"Failure Count"},{default:u(()=>[C(w(t.value.failure_count),1)]),_:1}),v(g(P),{label:"Status"},{default:u(()=>[C(w(t.value.status),1)]),_:1}),v(g(P),{label:"Created At"},{default:u(()=>[C(w(t.value.created_at),1)]),_:1})]),_:1},8,["title"])]),_:1}),v(g(J),{title:"Logs",style:{"margin-top":"20px"}},{default:u(()=>[v(g(Pe),null,{default:u(()=>[(K(!0),fe(_e,null,xe(a.value,h=>(K(),Y(g(De),{key:h.log_id},{default:u(()=>[C(w(h.log_id),1)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}))}},Te=ge(Ie,[["__scopeId","data-v-a173e975"]]);export{Te as default};
