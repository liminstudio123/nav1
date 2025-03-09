import{d as X,f as Y,h as Z,i as tt,j as et,k as it,l as nt}from"./chunk-2KCL6SJA.js";import"./chunk-TQ7SW6CR.js";import{l as K,m as Q}from"./chunk-6ZVSXYSU.js";import"./chunk-6QKLA2OT.js";import{F as C}from"./chunk-PCOEAP7T.js";import{f as H,i as J}from"./chunk-IB4EOQSZ.js";import{a as $,b as B,c as W}from"./chunk-RFBZGZS5.js";import"./chunk-4TCGRM5D.js";import"./chunk-BS5BF2CU.js";import{b as F}from"./chunk-DNUSNGB5.js";import{Hb as q,Xb as x,jb as A,mb as j,pb as U,xb as R,zb as G}from"./chunk-ZKP6CMDV.js";import{Ca as d,Cb as L,Da as g,Dc as z,Ec as S,Ed as P,Fc as b,Gc as V,Ib as y,Ob as p,_d as O,a as M,ac as m,b as N,bc as o,gc as v,he as I,jc as f,lc as c,od as D,oe as u,pd as k,qb as n,vb as T,xc as l,xd as E,yc as _,zc as h}from"./chunk-U2Z2BAUP.js";function rt(a,e){if(a&1&&(m(0,"div",6),l(1),o()),a&2){let t=c();n(),h(" ",t.$t("_buildTip"),`
`)}}function at(a,e){if(a&1&&(m(0,"div"),l(1),o()),a&2){let t=c().$implicit;n(),_(t.desc)}}function mt(a,e){if(a&1){let t=v();m(0,"input",17),b("ngModelChange",function(r){d(t);let s=c().$implicit;return S(s.desc,r)||(s.desc=r),g(r)}),o()}if(a&2){let t=c().$implicit;z("ngModel",t.desc)}}function st(a,e){if(a&1){let t=v();m(0,"a",18),f("nzOnConfirm",function(){d(t);let r=c().index,s=c();return g(s.handleDelete(r))}),l(1),o()}if(a&2){let t=c(2);p("nzPopconfirmTitle",t.$t("_confirmDel")),n(),h(" ",t.$t("_del")," ")}}function lt(a,e){if(a&1){let t=v();m(0,"tr")(1,"td",7)(2,"input",8),b("ngModelChange",function(r){let s=d(t).$implicit;return S(s.name,r)||(s.name=r),g(r)}),o()(),m(3,"td",9)(4,"input",10),f("change",function(r){let s=d(t).index,ot=c();return g(ot.onColorChange(r,s))}),o(),l(5),o(),m(6,"td",11),y(7,at,2,1,"div",12)(8,mt,1,1,"input",13),o(),m(9,"td")(10,"a",14),f("click",function(){let r=d(t).index,s=c();return g(s.moveUp(r))}),l(11),o(),m(12,"a",15),f("click",function(){let r=d(t).index,s=c();return g(s.moveDown(r))}),l(13),o(),y(14,st,2,2,"a",16),o()()}if(a&2){let t=e.$implicit,i=c();n(2),z("ngModel",t.name),n(2),p("value",t.color),n(),h(" - ",t.color," "),n(2),p("ngIf",t.isInner),n(),p("ngIf",!t.isInner),n(3),_(i.$t("_moveUp")),n(2),_(i.$t("_moveDown")),n(),p("ngIf",!t.isInner)}}var w=class a{constructor(e,t){this.message=e;this.modal=t}$t=u;isSelfDevelop=O;tagList=I;submitting=!1;incrementId=Math.max(...I.map(e=>Number(e.id)))+1;ngOnInit(){}moveUp(e){if(e===0)return;let t=this.tagList[e],i=this.tagList[e-1];this.tagList[e-1]=t,this.tagList[e]=i}moveDown(e){if(e===this.tagList.length-1)return;let t=this.tagList[e],i=this.tagList[e+1];this.tagList[e+1]=t,this.tagList[e]=i}onColorChange(e,t){let i=e.target.value;this.tagList[t].color=i}handleAdd(){this.tagList.some(t=>!t.name.trim())||(this.incrementId+=1,this.tagList.unshift({id:this.incrementId,name:"",color:"#f50000",desc:"",isInner:!1}))}handleDelete(e){this.tagList.splice(e,1)}handleSubmit(){if(this.submitting)return;let e={};if(this.tagList.forEach(t=>{t.name?.trim?.()&&(e[t.name]=N(M({},t),{name:void 0}))}),Object.keys(e).length!==this.tagList.length){this.message.error(u("_repeatAdd"));return}this.modal.info({nzTitle:u("_syncDataOut"),nzOkText:u("_confirmSync"),nzContent:u("_confirmSyncTip"),nzOnOk:()=>{this.submitting=!0,q({message:"update tag",content:JSON.stringify(this.tagList),path:P}).then(()=>{this.message.success(u("_saveSuccess"))}).finally(()=>{this.submitting=!1})}})}trackByItem(e,t){return t.id}static \u0275fac=function(t){return new(t||a)(T(x),T(C))};static \u0275cmp=L({type:a,selectors:[["system-tag"]],features:[V([C,x])],decls:19,vars:12,consts:[["basicTable",""],["nz-button","",1,"add-btn",3,"click","nzLoading"],["nz-button","","nzType","primary",3,"click","nzLoading"],["class","mb-4 color-red font-bold",4,"ngIf"],[3,"nzData"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"mb-4","color-red","font-bold"],["width","150px"],["nz-input","","maxlength","10",3,"ngModelChange","ngModel"],["width","160px"],["type","color",3,"change","value"],["width","200px"],[4,"ngIf"],["nz-input","","maxlength","20",3,"ngModel","ngModelChange",4,"ngIf"],[3,"click"],[1,"mx-2.5",3,"click"],["nz-popconfirm","","nzOkType","danger","nzPopconfirmPlacement","bottom","class","color-red",3,"nzPopconfirmTitle","nzOnConfirm",4,"ngIf"],["nz-input","","maxlength","20",3,"ngModelChange","ngModel"],["nz-popconfirm","","nzOkType","danger","nzPopconfirmPlacement","bottom",1,"color-red",3,"nzOnConfirm","nzPopconfirmTitle"]],template:function(t,i){if(t&1){let r=v();m(0,"button",1),f("click",function(){return d(r),g(i.handleAdd())}),l(1),o(),m(2,"button",2),f("click",function(){return d(r),g(i.handleSubmit())}),l(3),o(),y(4,rt,2,1,"div",3),m(5,"nz-table",4,0)(7,"thead")(8,"tr")(9,"th"),l(10),o(),m(11,"th"),l(12),o(),m(13,"th"),l(14),o(),m(15,"th"),l(16),o()()(),m(17,"tbody"),y(18,lt,15,8,"tr",5),o()()}t&2&&(p("nzLoading",i.submitting),n(),h(" ",i.$t("_addRow"),`
`),n(),p("nzLoading",i.submitting),n(),h(" ",i.$t("_save"),`
`),n(),p("ngIf",!i.isSelfDevelop),n(),p("nzData",i.tagList),n(5),_(i.$t("_tagName")),n(2),_(i.$t("_color")),n(2),_(i.$t("_remark")),n(2),_(i.$t("_action")),n(2),p("ngForOf",i.tagList)("ngForTrackBy",i.trackByItem))},dependencies:[G,A,j,R,U,E,D,k,W,B,$,F,J,H,nt,tt,X,Y,it,Z,et,Q,K],styles:[".add-btn[_ngcontent-%COMP%]{margin-bottom:20px;margin-right:20px}"]})};export{w as default};
