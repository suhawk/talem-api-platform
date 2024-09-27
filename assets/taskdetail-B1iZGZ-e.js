import{v as h,c as t,ah as se,ag as y,a as x,av as X,aw as Y,d as V,u as Z,b as ee,ax as le,e as O,f as K,g as te,aj as ae,ak as ne,h as l,ay as ie,az as de,aA as ce,aB as ue,z as pe,t as be,l as me,n as ge,ab as _e,_ as fe,aC as he,y as ve,a0 as xe,o as E,i as M,w as u,j as _,U as i,k as w,aD as z,aE as W,a4 as G,H as ye,au as Ce,ad as ke,B as we,J as q}from"./index-lwLXK7_U.js";import{_ as ze}from"./ContentLayout-CPPz0-OS.js";import{N as J}from"./Tag-DQGUknXo.js";import{_ as Se}from"./Space-BBL9RdZF.js";function Q(e,r="default",n=[]){const{children:d}=e;if(d!==null&&typeof d=="object"&&!Array.isArray(d)){const p=d[r];if(typeof p=="function")return p()}return n}const oe="DESCRIPTION_ITEM_FLAG";function $e(e){return typeof e=="object"&&e&&!Array.isArray(e)?e.type&&e.type[oe]:!1}const Te=h([t("descriptions",{fontSize:"var(--n-font-size)"},[t("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),t("descriptions-table-wrapper",[t("descriptions-table",[t("descriptions-table-row",[t("descriptions-table-header",{padding:"var(--n-th-padding)"}),t("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),se("bordered",[t("descriptions-table-wrapper",[t("descriptions-table",[t("descriptions-table-row",[h("&:last-child",[t("descriptions-table-content",{paddingBottom:0})])])])])]),y("left-label-placement",[t("descriptions-table-content",[h("> *",{verticalAlign:"top"})])]),y("left-label-align",[h("th",{textAlign:"left"})]),y("center-label-align",[h("th",{textAlign:"center"})]),y("right-label-align",[h("th",{textAlign:"right"})]),y("bordered",[t("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[t("descriptions-table",[t("descriptions-table-row",[h("&:not(:last-child)",[t("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),t("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),t("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[h("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),t("descriptions-table-content",[h("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),t("descriptions-header",`
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
 `))]),Re=Object.assign(Object.assign({},Z.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]}),Pe=V({name:"Descriptions",props:Re,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=ee(e),d=Z("Descriptions","-descriptions",Te,le,e,r),p=O(()=>{const{size:m,bordered:b}=e,{common:{cubicBezierEaseInOut:c},self:{titleTextColor:f,thColor:g,thColorModal:a,thColorPopover:k,thTextColor:v,thFontWeight:T,tdTextColor:D,tdColor:L,tdColorModal:I,tdColorPopover:s,borderColor:S,borderColorModal:N,borderColorPopover:C,borderRadius:R,lineHeight:B,[K("fontSize",m)]:A,[K(b?"thPaddingBordered":"thPadding",m)]:P,[K(b?"tdPaddingBordered":"tdPadding",m)]:j}}=d.value;return{"--n-title-text-color":f,"--n-th-padding":P,"--n-td-padding":j,"--n-font-size":A,"--n-bezier":c,"--n-th-font-weight":T,"--n-line-height":B,"--n-th-text-color":v,"--n-td-text-color":D,"--n-th-color":g,"--n-th-color-modal":a,"--n-th-color-popover":k,"--n-td-color":L,"--n-td-color-modal":I,"--n-td-color-popover":s,"--n-border-radius":R,"--n-border-color":S,"--n-border-color-modal":N,"--n-border-color-popover":C}}),o=n?te("descriptions",O(()=>{let m="";const{size:b,bordered:c}=e;return c&&(m+="a"),m+=b[0],m}),p,e):void 0;return{mergedClsPrefix:r,cssVars:n?void 0:p,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender,compitableColumn:ae(e,["columns","column"]),inlineThemeDisabled:n}},render(){const e=this.$slots.default,r=e?ne(e()):[];r.length;const{contentClass:n,labelClass:d,compitableColumn:p,labelPlacement:o,labelAlign:m,size:b,bordered:c,title:f,cssVars:g,mergedClsPrefix:a,separator:k,onRender:v}=this;v==null||v();const T=r.filter(s=>$e(s)),D={span:0,row:[],secondRow:[],rows:[]},I=T.reduce((s,S,N)=>{const C=S.props||{},R=T.length-1===N,B=["label"in C?C.label:Q(S,"label")],A=[Q(S)],P=C.span||1,j=s.span;s.span+=P;const H=C.labelStyle||C["label-style"]||this.labelStyle,F=C.contentStyle||C["content-style"]||this.contentStyle;if(o==="left")c?s.row.push(l("th",{class:[`${a}-descriptions-table-header`,d],colspan:1,style:H},B),l("td",{class:[`${a}-descriptions-table-content`,n],colspan:R?(p-j)*2+1:P*2-1,style:F},A)):s.row.push(l("td",{class:`${a}-descriptions-table-content`,colspan:R?(p-j)*2:P*2},l("span",{class:[`${a}-descriptions-table-content__label`,d],style:H},[...B,k&&l("span",{class:`${a}-descriptions-separator`},k)]),l("span",{class:[`${a}-descriptions-table-content__content`,n],style:F},A)));else{const U=R?(p-j)*2:P*2;s.row.push(l("th",{class:[`${a}-descriptions-table-header`,d],colspan:U,style:H},B)),s.secondRow.push(l("td",{class:[`${a}-descriptions-table-content`,n],colspan:U,style:F},A))}return(s.span>=p||R)&&(s.span=0,s.row.length&&(s.rows.push(s.row),s.row=[]),o!=="left"&&s.secondRow.length&&(s.rows.push(s.secondRow),s.secondRow=[])),s},D).rows.map(s=>l("tr",{class:`${a}-descriptions-table-row`},s));return l("div",{style:g,class:[`${a}-descriptions`,this.themeClass,`${a}-descriptions--${o}-label-placement`,`${a}-descriptions--${m}-label-align`,`${a}-descriptions--${b}-size`,c&&`${a}-descriptions--bordered`]},f||this.$slots.header?l("div",{class:`${a}-descriptions-header`},f||de(this,"header")):null,l("div",{class:`${a}-descriptions-table-wrapper`},l("table",{class:`${a}-descriptions-table`},l("tbody",null,o==="top"&&l("tr",{class:`${a}-descriptions-table-row`,style:{visibility:"collapse"}},ie(p*2,l("td",null))),I))))}}),De={label:String,span:{type:Number,default:1},labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]},$=V({name:"DescriptionsItem",[oe]:!0,props:De,render(){return null}}),Ie=h([t("list",`
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
 `,[y("show-divider",[t("list-item",[h("&:not(:last-child)",[x("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),y("clickable",[t("list-item",`
 cursor: pointer;
 `)]),y("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),y("hoverable",[t("list-item",`
 border-radius: var(--n-border-radius);
 `,[h("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[x("divider",`
 background-color: transparent;
 `)])])]),y("bordered, hoverable",[t("list-item",`
 padding: 12px 20px;
 `),x("header, footer",`
 padding: 12px 20px;
 `)]),x("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[h("&:not(:last-child)",`
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
 `))]),Ne=Object.assign(Object.assign({},Z.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),re=me("n-list"),Be=V({name:"List",props:Ne,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:n,mergedRtlRef:d}=ee(e),p=ce("List",d,r),o=Z("List","-list",Ie,ue,e,r);pe(re,{showDividerRef:be(e,"showDivider"),mergedClsPrefixRef:r});const m=O(()=>{const{common:{cubicBezierEaseInOut:c},self:{fontSize:f,textColor:g,color:a,colorModal:k,colorPopover:v,borderColor:T,borderColorModal:D,borderColorPopover:L,borderRadius:I,colorHover:s,colorHoverModal:S,colorHoverPopover:N}}=o.value;return{"--n-font-size":f,"--n-bezier":c,"--n-text-color":g,"--n-color":a,"--n-border-radius":I,"--n-border-color":T,"--n-border-color-modal":D,"--n-border-color-popover":L,"--n-color-modal":k,"--n-color-popover":v,"--n-color-hover":s,"--n-color-hover-modal":S,"--n-color-hover-popover":N}}),b=n?te("list",void 0,m,e):void 0;return{mergedClsPrefix:r,rtlEnabled:p,cssVars:n?void 0:m,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){var e;const{$slots:r,mergedClsPrefix:n,onRender:d}=this;return d==null||d(),l("ul",{class:[`${n}-list`,this.rtlEnabled&&`${n}-list--rtl`,this.bordered&&`${n}-list--bordered`,this.showDivider&&`${n}-list--show-divider`,this.hoverable&&`${n}-list--hoverable`,this.clickable&&`${n}-list--clickable`,this.themeClass],style:this.cssVars},r.header?l("div",{class:`${n}-list__header`},r.header()):null,(e=r.default)===null||e===void 0?void 0:e.call(r),r.footer?l("div",{class:`${n}-list__footer`},r.footer()):null)}}),Ae=V({name:"ListItem",setup(){const e=ge(re,null);return e||_e("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:e.showDividerRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:r}=this;return l("li",{class:`${r}-list-item`},e.prefix?l("div",{class:`${r}-list-item__prefix`},e.prefix()):null,e.default?l("div",{class:`${r}-list-item__main`},e):null,e.suffix?l("div",{class:`${r}-list-item__suffix`},e.suffix()):null,this.showDivider&&l("div",{class:`${r}-list-item__divider`}))}}),je={style:{"margin-left":"10px"}},Ee={style:{float:"right"}},Le={__name:"taskdetail",setup(e){const r={completed:{type:"success",label:"Task Completed"},running:{type:"info",label:"Running"},error:{type:"error",label:"Error"},waiting:{type:"primary",label:"Waiting"},cancelled:{type:"default",label:"Declined"},timeout:{type:"warning",label:"SnapSheet API Timeout"}},d=he().query.call_id,p=[{call_id:1,task_id:1001,claim_number:"CN001",success_count:1,failure_count:0,status:"completed",updated_at:"2024-06-01 12:00:00"},{call_id:2,task_id:1002,claim_number:"CN002",success_count:0,failure_count:2,status:"completed",updated_at:"2024-06-02 13:00:00"},{call_id:3,task_id:1003,claim_number:"CN003",success_count:0,failure_count:5,status:"error",updated_at:"2024-06-03 14:00:00"},{call_id:4,task_id:1004,claim_number:"CN004",success_count:0,failure_count:1,status:"waiting",updated_at:"2024-06-04 15:00:00"},{call_id:5,task_id:1005,claim_number:"CN005",success_count:0,failure_count:1,status:"cancelled",updated_at:"2024-06-05 16:00:00"},{call_id:6,task_id:1006,claim_number:"CN006",success_count:2,failure_count:1,status:"timeout",updated_at:"2024-07-01 10:00:00"},{call_id:7,task_id:1007,claim_number:"CN007",success_count:1,failure_count:3,status:"running",updated_at:"2024-07-15 11:30:00"},{call_id:8,task_id:1008,claim_number:"CN008",success_count:0,failure_count:4,status:"error",updated_at:"2024-08-05 09:45:00"},{call_id:9,task_id:1009,claim_number:"CN009",success_count:3,failure_count:0,status:"completed",updated_at:"2024-08-20 14:20:00"},{call_id:10,task_id:1010,claim_number:"CN010",success_count:1,failure_count:2,status:"completed",updated_at:"2024-09-01 16:00:00"},{call_id:11,task_id:1011,claim_number:"CN011",success_count:0,failure_count:5,status:"error",updated_at:"2024-09-10 13:50:00"},{call_id:12,task_id:1012,claim_number:"CN012",success_count:2,failure_count:1,status:"completed",updated_at:"2024-09-20 08:30:00"},{call_id:13,task_id:1013,claim_number:"CN013",success_count:1,failure_count:3,status:"completed",updated_at:"2024-10-01 12:15:00"},{call_id:14,task_id:1014,claim_number:"CN014",success_count:0,failure_count:2,status:"cancelled",updated_at:"2024-10-10 17:40:00"},{call_id:15,task_id:1015,claim_number:"CN015",success_count:3,failure_count:0,status:"completed",updated_at:"2024-10-15 19:05:00"}],o=O(()=>{var f;return(f=p.filter(({call_id:g})=>g==d))==null?void 0:f[0]}),m=()=>{const{label:f,...g}=r[o.value.status];return l(J,g,f)},b=[{label:"Tasks List",key:"calllist"},{label:`Task ID: ${d}`,key:"taskdetail"}],c=ve([{log_id:1,log_info:{status:"success",message:"Task execution started",timestamp:"2023-10-20T08:30:00Z"}},{log_id:2,log_info:{status:"error",message:"Network connection timeout",errorCode:"NET_TIMEOUT",timestamp:"2023-10-20T08:35:15Z"}}]);return xe(()=>{o.value.status==="completed"?c.value.push({log_id:4,log_info:{status:"success",message:"Data processing completed",processedItems:150,timestamp:"2023-10-20T09:00:30Z"}}):o.value.status==="cancelled"?(c.value[1]={log_id:7,log_info:{status:"error",message:"Technical Issues",timestamp:"2023-10-20T09:25:00Z"}},c.value.push({log_id:5,log_info:{status:"cancelled",message:"Manually declined",timestamp:"2023-10-20T09:10:00Z"}})):o.value.status==="waiting"?c.value[1]={log_id:7,log_info:{status:"error",message:"Poor Images",timestamp:"2023-10-20T09:25:00Z"}}:o.value.status==="error"?c.value[1]={log_id:7,log_info:{status:"error",message:"ICD missing",timestamp:"2023-10-20T09:25:00Z"}}:o.value.status==="timeout"?c.value[1]={log_id:8,log_info:{status:"error",message:"SnapSheet API call timeout",timestamp:"2023-10-20T09:30:00Z"}}:o.value.status==="running"&&(c.value=[{log_id:1,log_info:{status:"success",message:"Task execution started",timestamp:"2023-10-20T08:30:00Z"}}])}),(f,g)=>{const a=we,k=Se;return E(),M(ze,{title:"Task Detail",subtitle:"Details of the selected task",breadcrumb:b},{default:u(()=>[_(i(G),null,{default:u(()=>[_(i(Pe),{title:`Task ID: ${i(o).task_id}`},{default:u(()=>[_(i($),{label:"Task ID"},{default:u(()=>[w(z(i(o).task_id),1)]),_:1}),_(i($),{label:"Claim Number"},{default:u(()=>[w(z(i(o).claim_number),1)]),_:1}),_(i($),{label:"Success Amount"},{default:u(()=>[w(z(i(o).success_count),1)]),_:1}),_(i($),{label:"Failure Amount"},{default:u(()=>[w(z(i(o).failure_count),1)]),_:1}),_(i($),{label:"Status"},{default:u(()=>[_(m)]),_:1}),_(i($),{label:"Created Date"},{default:u(()=>[w(z(i(o).created_at),1)]),_:1}),i(o).status==="completed"?(E(),M(i($),{key:0,label:"Completed Date"},{default:u(()=>[w(z(i(o).created_at),1)]),_:1})):W("",!0)]),_:1},8,["title"])]),_:1}),_(i(G),{title:"Files",style:{"margin-top":"20px"}},{default:u(()=>[_(k,null,{default:u(()=>[_(a,{type:"info",secondary:"",onClick:f.handleDownload},{default:u(()=>g[0]||(g[0]=[w(" Image 1 ")])),_:1},8,["onClick"])]),_:1})]),_:1}),_(i(G),{title:"Logs",style:{"margin-top":"20px"}},{default:u(()=>[_(i(Be),null,{default:u(()=>[(E(!0),ye(ke,null,Ce(c.value,v=>(E(),M(i(Ae),{key:v.log_id},{default:u(()=>[v.log_info.status==="error"?(E(),M(i(J),{key:0,type:"error"},{default:u(()=>g[1]||(g[1]=[w("error")])),_:1})):W("",!0),q("span",je,z(v.log_info.message),1),q("span",Ee,z(v.log_info.timestamp),1)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})}}},He=fe(Le,[["__scopeId","data-v-ec74e026"]]);export{He as default};
