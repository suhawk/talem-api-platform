import{v as f,c as t,ah as le,ag as C,a as x,av as X,aw as Y,d as V,u as H,b as ee,ax as se,e as O,f as Z,g as te,aj as ae,ak as ne,h as l,ay as ie,az as de,aA as ce,aB as ue,z as pe,t as be,l as me,n as _e,ab as ge,_ as fe,aC as he,y as ve,a0 as xe,o as E,i as M,w as c,j as _,U as i,k as w,aD as z,aE as W,a4 as G,H as Ce,au as ye,ad as ke,B as we,J as q}from"./index-4_JkqOaq.js";import{_ as ze}from"./ContentLayout-0EYTWc5r.js";import{N as J}from"./Tag-DmRPqP8o.js";import{_ as Se}from"./Space-6QgMfiDm.js";function Q(e,r="default",n=[]){const{children:d}=e;if(d!==null&&typeof d=="object"&&!Array.isArray(d)){const u=d[r];if(typeof u=="function")return u()}return n}const re="DESCRIPTION_ITEM_FLAG";function $e(e){return typeof e=="object"&&e&&!Array.isArray(e)?e.type&&e.type[re]:!1}const Re=f([t("descriptions",{fontSize:"var(--n-font-size)"},[t("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),t("descriptions-table-wrapper",[t("descriptions-table",[t("descriptions-table-row",[t("descriptions-table-header",{padding:"var(--n-th-padding)"}),t("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),le("bordered",[t("descriptions-table-wrapper",[t("descriptions-table",[t("descriptions-table-row",[f("&:last-child",[t("descriptions-table-content",{paddingBottom:0})])])])])]),C("left-label-placement",[t("descriptions-table-content",[f("> *",{verticalAlign:"top"})])]),C("left-label-align",[f("th",{textAlign:"left"})]),C("center-label-align",[f("th",{textAlign:"center"})]),C("right-label-align",[f("th",{textAlign:"right"})]),C("bordered",[t("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[t("descriptions-table",[t("descriptions-table-row",[f("&:not(:last-child)",[t("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),t("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),t("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[f("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),t("descriptions-table-content",[f("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),t("descriptions-header",`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),t("descriptions-table-wrapper",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[t("descriptions-table",`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[t("descriptions-table-row",`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[t("descriptions-table-header",`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),t("descriptions-table-content",`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[x("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),x("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),t("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),X(t("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),Y(t("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),Ne=Object.assign(Object.assign({},H.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]}),Pe=V({name:"Descriptions",props:Ne,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=ee(e),d=H("Descriptions","-descriptions",Re,se,e,r),u=O(()=>{const{size:b,bordered:p}=e,{common:{cubicBezierEaseInOut:v},self:{titleTextColor:g,thColor:m,thColorModal:s,thColorPopover:k,thTextColor:h,thFontWeight:R,tdTextColor:D,tdColor:L,tdColorModal:I,tdColorPopover:o,borderColor:S,borderColorModal:T,borderColorPopover:y,borderRadius:N,lineHeight:B,[Z("fontSize",b)]:j,[Z(p?"thPaddingBordered":"thPadding",b)]:P,[Z(p?"tdPaddingBordered":"tdPadding",b)]:A}}=d.value;return{"--n-title-text-color":g,"--n-th-padding":P,"--n-td-padding":A,"--n-font-size":j,"--n-bezier":v,"--n-th-font-weight":R,"--n-line-height":B,"--n-th-text-color":h,"--n-td-text-color":D,"--n-th-color":m,"--n-th-color-modal":s,"--n-th-color-popover":k,"--n-td-color":L,"--n-td-color-modal":I,"--n-td-color-popover":o,"--n-border-radius":N,"--n-border-color":S,"--n-border-color-modal":T,"--n-border-color-popover":y}}),a=n?te("descriptions",O(()=>{let b="";const{size:p,bordered:v}=e;return v&&(b+="a"),b+=p[0],b}),u,e):void 0;return{mergedClsPrefix:r,cssVars:n?void 0:u,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender,compitableColumn:ae(e,["columns","column"]),inlineThemeDisabled:n}},render(){const e=this.$slots.default,r=e?ne(e()):[];r.length;const{contentClass:n,labelClass:d,compitableColumn:u,labelPlacement:a,labelAlign:b,size:p,bordered:v,title:g,cssVars:m,mergedClsPrefix:s,separator:k,onRender:h}=this;h==null||h();const R=r.filter(o=>$e(o)),D={span:0,row:[],secondRow:[],rows:[]},I=R.reduce((o,S,T)=>{const y=S.props||{},N=R.length-1===T,B=["label"in y?y.label:Q(S,"label")],j=[Q(S)],P=y.span||1,A=o.span;o.span+=P;const F=y.labelStyle||y["label-style"]||this.labelStyle,K=y.contentStyle||y["content-style"]||this.contentStyle;if(a==="left")v?o.row.push(l("th",{class:[`${s}-descriptions-table-header`,d],colspan:1,style:F},B),l("td",{class:[`${s}-descriptions-table-content`,n],colspan:N?(u-A)*2+1:P*2-1,style:K},j)):o.row.push(l("td",{class:`${s}-descriptions-table-content`,colspan:N?(u-A)*2:P*2},l("span",{class:[`${s}-descriptions-table-content__label`,d],style:F},[...B,k&&l("span",{class:`${s}-descriptions-separator`},k)]),l("span",{class:[`${s}-descriptions-table-content__content`,n],style:K},j)));else{const U=N?(u-A)*2:P*2;o.row.push(l("th",{class:[`${s}-descriptions-table-header`,d],colspan:U,style:F},B)),o.secondRow.push(l("td",{class:[`${s}-descriptions-table-content`,n],colspan:U,style:K},j))}return(o.span>=u||N)&&(o.span=0,o.row.length&&(o.rows.push(o.row),o.row=[]),a!=="left"&&o.secondRow.length&&(o.rows.push(o.secondRow),o.secondRow=[])),o},D).rows.map(o=>l("tr",{class:`${s}-descriptions-table-row`},o));return l("div",{style:m,class:[`${s}-descriptions`,this.themeClass,`${s}-descriptions--${a}-label-placement`,`${s}-descriptions--${b}-label-align`,`${s}-descriptions--${p}-size`,v&&`${s}-descriptions--bordered`]},g||this.$slots.header?l("div",{class:`${s}-descriptions-header`},g||de(this,"header")):null,l("div",{class:`${s}-descriptions-table-wrapper`},l("table",{class:`${s}-descriptions-table`},l("tbody",null,a==="top"&&l("tr",{class:`${s}-descriptions-table-row`,style:{visibility:"collapse"}},ie(u*2,l("td",null))),I))))}}),De={label:String,span:{type:Number,default:1},labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]},$=V({name:"DescriptionsItem",[re]:!0,props:De,render(){return null}}),Ie=f([t("list",`
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
 `,[C("show-divider",[t("list-item",[f("&:not(:last-child)",[x("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),C("clickable",[t("list-item",`
 cursor: pointer;
 `)]),C("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),C("hoverable",[t("list-item",`
 border-radius: var(--n-border-radius);
 `,[f("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[x("divider",`
 background-color: transparent;
 `)])])]),C("bordered, hoverable",[t("list-item",`
 padding: 12px 20px;
 `),x("header, footer",`
 padding: 12px 20px;
 `)]),x("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[f("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),t("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[x("prefix",`
 margin-right: 20px;
 flex: 0;
 `),x("suffix",`
 margin-left: 20px;
 flex: 0;
 `),x("main",`
 flex: 1;
 `),x("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),X(t("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),Y(t("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),Te=Object.assign(Object.assign({},H.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),oe=me("n-list"),Be=V({name:"List",props:Te,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:n,mergedRtlRef:d}=ee(e),u=ce("List",d,r),a=H("List","-list",Ie,ue,e,r);pe(oe,{showDividerRef:be(e,"showDivider"),mergedClsPrefixRef:r});const b=O(()=>{const{common:{cubicBezierEaseInOut:v},self:{fontSize:g,textColor:m,color:s,colorModal:k,colorPopover:h,borderColor:R,borderColorModal:D,borderColorPopover:L,borderRadius:I,colorHover:o,colorHoverModal:S,colorHoverPopover:T}}=a.value;return{"--n-font-size":g,"--n-bezier":v,"--n-text-color":m,"--n-color":s,"--n-border-radius":I,"--n-border-color":R,"--n-border-color-modal":D,"--n-border-color-popover":L,"--n-color-modal":k,"--n-color-popover":h,"--n-color-hover":o,"--n-color-hover-modal":S,"--n-color-hover-popover":T}}),p=n?te("list",void 0,b,e):void 0;return{mergedClsPrefix:r,rtlEnabled:u,cssVars:n?void 0:b,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender}},render(){var e;const{$slots:r,mergedClsPrefix:n,onRender:d}=this;return d==null||d(),l("ul",{class:[`${n}-list`,this.rtlEnabled&&`${n}-list--rtl`,this.bordered&&`${n}-list--bordered`,this.showDivider&&`${n}-list--show-divider`,this.hoverable&&`${n}-list--hoverable`,this.clickable&&`${n}-list--clickable`,this.themeClass],style:this.cssVars},r.header?l("div",{class:`${n}-list__header`},r.header()):null,(e=r.default)===null||e===void 0?void 0:e.call(r),r.footer?l("div",{class:`${n}-list__footer`},r.footer()):null)}}),je=V({name:"ListItem",setup(){const e=_e(oe,null);return e||ge("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:e.showDividerRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:r}=this;return l("li",{class:`${r}-list-item`},e.prefix?l("div",{class:`${r}-list-item__prefix`},e.prefix()):null,e.default?l("div",{class:`${r}-list-item__main`},e):null,e.suffix?l("div",{class:`${r}-list-item__suffix`},e.suffix()):null,this.showDivider&&l("div",{class:`${r}-list-item__divider`}))}}),Ae={style:{"margin-left":"10px"}},Ee={style:{float:"right"}},Le={__name:"taskdetail",setup(e){const r={completed:{type:"success",label:"Task Completed"},running:{type:"info",label:"Running"},error:{type:"error",label:"Error"},waiting:{type:"warning",label:"Waiting"},cancelled:{type:"default",label:"Cancelled"},send:{type:"primary",label:"Calculation Completed"}},d=he().query.call_id,u=[{call_id:1,task_id:1001,claim_number:"CN001",success_count:1,failure_count:0,status:"completed",created_at:"2023-06-01 10:00:00",updated_at:"2023-06-01 12:00:00"},{call_id:2,task_id:1002,claim_number:"CN002",success_count:0,failure_count:2,status:"running",created_at:"2023-06-02 11:00:00",updated_at:"2023-06-02 13:00:00"},{call_id:3,task_id:1003,claim_number:"CN003",success_count:0,failure_count:5,status:"error",created_at:"2023-06-03 12:00:00",updated_at:"2023-06-03 14:00:00"},{call_id:4,task_id:1004,claim_number:"CN004",success_count:0,failure_count:1,status:"waiting",created_at:"2023-06-04 13:00:00",updated_at:"2023-06-04 15:00:00"},{call_id:5,task_id:1005,claim_number:"CN005",success_count:0,failure_count:1,status:"cancelled",created_at:"2023-06-05 14:00:00",updated_at:"2023-06-05 16:00:00"},{call_id:6,task_id:1006,claim_number:"CN006",success_count:2,failure_count:1,status:"send",created_at:"2023-07-01 08:00:00",updated_at:"2023-07-01 10:00:00"},{call_id:7,task_id:1007,claim_number:"CN007",success_count:1,failure_count:3,status:"running",created_at:"2023-07-15 09:30:00",updated_at:"2023-07-15 11:30:00"},{call_id:8,task_id:1008,claim_number:"CN008",success_count:0,failure_count:4,status:"error",created_at:"2023-08-05 07:45:00",updated_at:"2023-08-05 09:45:00"},{call_id:9,task_id:1009,claim_number:"CN009",success_count:3,failure_count:0,status:"completed",created_at:"2023-08-20 12:20:00",updated_at:"2023-08-20 14:20:00"},{call_id:10,task_id:1010,claim_number:"CN010",success_count:1,failure_count:2,status:"waiting",created_at:"2023-09-01 14:00:00",updated_at:"2023-09-01 16:00:00"},{call_id:11,task_id:1011,claim_number:"CN011",success_count:0,failure_count:5,status:"error",created_at:"2023-09-10 11:50:00",updated_at:"2023-09-10 13:50:00"},{call_id:12,task_id:1012,claim_number:"CN012",success_count:2,failure_count:1,status:"completed",created_at:"2023-09-20 06:30:00",updated_at:"2023-09-20 08:30:00"},{call_id:13,task_id:1013,claim_number:"CN013",success_count:1,failure_count:3,status:"running",created_at:"2023-10-01 10:15:00",updated_at:"2023-10-01 12:15:00"},{call_id:14,task_id:1014,claim_number:"CN014",success_count:0,failure_count:2,status:"cancelled",created_at:"2023-10-10 15:40:00",updated_at:"2023-10-10 17:40:00"},{call_id:15,task_id:1015,claim_number:"CN015",success_count:3,failure_count:0,status:"completed",created_at:"2023-10-15 17:05:00",updated_at:"2023-10-15 19:05:00"}],a=O(()=>{var g;return(g=u.filter(({call_id:m})=>m==d))==null?void 0:g[0]}),b=()=>{const{label:g,...m}=r[a.value.status];return l(J,m,g)},p=[{label:"API Call List",key:"calllist",to:{name:"calllist"}},{label:`Task ID: ${d.value}`,key:"taskdetail"}],v=ve([{log_id:1,log_info:{status:"success",message:"Task execution started",timestamp:"2023-10-20T08:30:00Z"}},{log_id:2,log_info:{status:"error",message:"Network connection timeout",errorCode:"NET_TIMEOUT",timestamp:"2023-10-20T08:35:15Z"}},{log_id:3,log_info:{status:"success",message:"Data processing completed",processedItems:150,timestamp:"2023-10-20T09:00:30Z"}}]);return xe(()=>{}),(g,m)=>{const s=we,k=Se;return E(),M(ze,{title:"Task Detail",subtitle:"Details of the selected task",breadcrumb:p},{default:c(()=>[_(i(G),null,{default:c(()=>[_(i(Pe),{title:`Task ID: ${i(a).task_id}`},{default:c(()=>[_(i($),{label:"Task ID"},{default:c(()=>[w(z(i(a).task_id),1)]),_:1}),_(i($),{label:"Claim Number"},{default:c(()=>[w(z(i(a).claim_number),1)]),_:1}),_(i($),{label:"Success Amount"},{default:c(()=>[w(z(i(a).success_count),1)]),_:1}),_(i($),{label:"Failure Amount"},{default:c(()=>[w(z(i(a).failure_count),1)]),_:1}),_(i($),{label:"Status"},{default:c(()=>[_(b)]),_:1}),_(i($),{label:"Created Date"},{default:c(()=>[w(z(i(a).created_at),1)]),_:1}),i(a).status==="completed"?(E(),M(i($),{key:0,label:"Completed Date"},{default:c(()=>[w(z(i(a).created_at),1)]),_:1})):W("",!0)]),_:1},8,["title"])]),_:1}),_(i(G),{title:"Files",style:{"margin-top":"20px"}},{default:c(()=>[_(k,null,{default:c(()=>[_(s,{type:"info",secondary:"",onClick:g.handleDownload},{default:c(()=>m[0]||(m[0]=[w(" Image 1 ")])),_:1},8,["onClick"])]),_:1})]),_:1}),_(i(G),{title:"Logs",style:{"margin-top":"20px"}},{default:c(()=>[_(i(Be),null,{default:c(()=>[(E(!0),Ce(ke,null,ye(v.value,h=>(E(),M(i(je),{key:h.log_id},{default:c(()=>[h.log_info.status==="error"?(E(),M(i(J),{key:0,type:"error"},{default:c(()=>m[1]||(m[1]=[w("error")])),_:1})):W("",!0),q("span",Ae,z(h.log_info.message),1),q("span",Ee,z(h.log_info.timestamp),1)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})}}},Fe=fe(Le,[["__scopeId","data-v-d536ef92"]]);export{Fe as default};
