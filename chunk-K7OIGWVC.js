import{a as $}from"./chunk-44TNQEOO.js";import{l as J,m as H}from"./chunk-P3JGTPWR.js";import{V as N,X as V}from"./chunk-O4U75T7F.js";import{$b as P,Ba as m,Ca as g,Cc as D,Dc as I,Hb as _,Hc as E,Ia as f,Jb as c,Kd as F,Lb as h,Mb as M,Td as W,Xb as a,Yb as l,Yd as j,Zb as k,_b as w,bc as y,ec as d,fd as L,gc as r,gd as C,hb as b,kd as O,lb as p,mb as T,oc as S,od as z,pc as x,rc as v,tb as u}from"./chunk-33DP4OTC.js";var K=(n,t,e,i,o)=>({width:n,height:t,minWidth:e,minHeight:i,borderRadius:o}),Q=(n,t,e,i)=>({width:n,height:t,minWidth:e,minHeight:i});function X(n,t){if(n&1&&k(0,"img",2),n&2){let e=r();c("src",e.src,b)("ngStyle",I(3,K,e.size===0?"":e.size+"px",e.size===0?"":e.size+"px",e.size+"px",e.size+"px",e.radius+"px"))("alt",e.name?e.name[0]:"")}}function Y(n,t){if(n&1&&(a(0,"div",3),x(1),l()),n&2){let e=r();c("ngStyle",D(2,Q,e.size===0?"":e.size+"px",e.size===0?"":e.size+"px",e.size+"px",e.size+"px")),p(),v(" ",e.name?e.name[0]:""," ")}}var R=class n{src="";name="";size=35;radius=3;check=!0;constructor(){}ngOnInit(){}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=u({type:n,selectors:[["app-logo"]],inputs:{src:"src",name:"name",size:"size",radius:"radius",check:"check"},decls:3,vars:2,consts:[["noSrc",""],["class","icon common-icon","draggable","false","loading","lazy",3,"src","ngStyle","alt",4,"ngIf","ngIfElse"],["draggable","false","loading","lazy",1,"icon","common-icon",3,"src","ngStyle","alt"],[1,"circle","common-icon",3,"ngStyle"]],template:function(e,i){if(e&1&&_(0,X,1,9,"img",1)(1,Y,2,7,"ng-template",null,0,E),e&2){let o=S(2);c("ngIf",i.src)("ngIfElse",o)}},dependencies:[z,C,O],styles:['.icon[_ngcontent-%COMP%]{position:relative;display:inline-block;vertical-align:middle;pointer-events:none;background-color:#eee;border-radius:3px;object-fit:cover;transition:all .12s linear}.icon[_ngcontent-%COMP%]:after{content:"" attr(alt);z-index:2;position:absolute;top:0;left:0;width:100%;height:100%;background-color:#1890ff;color:#fff;display:flex;align-items:center;justify-content:center;font-size:18px}.circle[_ngcontent-%COMP%]{color:#fff;display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:#1890ff;font-size:18px}'],changeDetection:0})};function Z(n,t){if(n&1){let e=y();a(0,"div",3),d("click",function(o){let s=m(e).$implicit,q=r();return g(q.jumpService.goUrl(o,s.url))}),x(1),l()}if(n&2){let e=t.$implicit,i=r();M("background-color: "+(i.tagMap[e.id]&&i.tagMap[e.id].color)),h("cursor-pointer",e.url),p(),v(" ",i.tagMap[e.id]&&i.tagMap[e.id].name," ")}}function ee(n,t){if(n&1){let e=y();w(0),a(1,"div",4),d("click",function(o){m(e);let s=r();return g(s.openEditWebMoal(o))}),l(),a(2,"div",5),d("click",function(o){m(e);let s=r();return g(s.openMoveWebModal(o))}),l(),a(3,"div",6),d("nzOnConfirm",function(){m(e);let o=r();return g(o.confirmDel())})("click",function(o){m(e);let s=r();return g(s.handleClick(o))}),l(),P()}if(n&2){let e=r();p(3),c("nzPopconfirmTitle",e.$t("_confirmDel"))}}var U=class n{constructor(t){this.jumpService=t}data=[];action=!1;onDelete=new f;onMove=new f;onEdit=new f;$t=j;isLogin=F;tagMap=W;handleClick(t){t.stopPropagation(),t.preventDefault()}openEditWebMoal(t){t.stopPropagation(),t.preventDefault(),this.onEdit.emit()}confirmDel(){this.onDelete.emit()}openMoveWebModal(t){t.stopPropagation(),t.preventDefault(),this.onMove.emit()}static \u0275fac=function(e){return new(e||n)(T($))};static \u0275cmp=u({type:n,selectors:[["tag-list"]],inputs:{data:"data",action:"action"},outputs:{onDelete:"onDelete",onMove:"onMove",onEdit:"onEdit"},decls:3,vars:2,consts:[[1,"tagbox"],["class","tag-item",3,"cursor-pointer","style","click",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"tag-item",3,"click"],["nz-icon","","nzType","edit","nzTheme","outline",1,"tag-item","cursor-pointer","tag-action",2,"background-color","#1f883d",3,"click"],["nz-icon","","nzType","swap","nzTheme","outline",1,"tag-item","cursor-pointer","tag-action",2,"background-color","#108ee9",3,"click"],["nz-icon","","nzType","delete","nzTheme","outline","nz-popconfirm","","nzPopconfirmPlacement","rightTop","nzOkType","danger","nzPopconfirmPlacement","bottom",1,"tag-item","cursor-pointer","tag-action",2,"background-color","red",3,"nzOnConfirm","click","nzPopconfirmTitle"]],template:function(e,i){e&1&&(a(0,"div",0),_(1,Z,2,5,"div",1)(2,ee,4,1,"ng-container",2),l()),e&2&&(p(),c("ngForOf",i.data),p(),c("ngIf",i.action&&i.isLogin))},dependencies:[z,L,C,V,N,H,J],styles:[".tagbox[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:6px}.tag-item[_ngcontent-%COMP%]{padding:0 6px;border-radius:2px;font-size:12px;display:flex;align-items:center;transition:all .1s linear;color:#fff;min-height:15px}.tag-item[_ngcontent-%COMP%]:hover{opacity:.8}.tag-action[_ngcontent-%COMP%]{display:none}"]})};export{R as a,U as b};
