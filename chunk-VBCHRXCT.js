import{b as S,c as z,d as O,g as w}from"./chunk-WWFLJTGB.js";import{b as x,e as g,l as E,m as _,r as b}from"./chunk-KOOWWPIN.js";import{e as p,g as h}from"./chunk-Z5BOMFLJ.js";import{$ as i}from"./chunk-XNNPDGJB.js";import{Yd as y,Zd as f,_d as v,fe as l,g as a,le as c,ma as I,oe as r,ra as u}from"./chunk-GJRXY6XC.js";var A=class d{constructor(e,t){this.router=e;this.activatedRoute=t;let o=()=>{let{id:s,q:m}=g(),{oneIndex:T,twoIndex:k,threeIndex:C}=b(s);this.oneIndex=T,this.twoIndex=k,this.selectedThreeIndex=C,this.searchKeyword=m,m?this.currentList=x(c,m):this.currentList=E()},n=()=>{this.activatedRoute.queryParams.subscribe(()=>{this.sliceMax=0,o(),setTimeout(()=>{this.sliceMax=Number.MAX_SAFE_INTEGER},100)})};window.__FINISHED__?n():i.on("WEB_FINISH",()=>{n()}),i.on("WEB_REFRESH",()=>{o()})}isLogin=y;settings=l;permissions=f(l);title=l.title.trim().split(/\s/)[0];websiteList=c;currentList=[];twoIndex=0;oneIndex=0;sliceMax=0;selectedThreeIndex=0;searchKeyword="";overIndex=Number.MAX_SAFE_INTEGER;handleClickClass(e){this.router.navigate([this.router.url.split("?")[0]],{queryParams:{id:e,_:Date.now()}}),i.emit("SEARCH_FOCUS")}onCollapseAll=e=>{e?.stopPropagation(),z(c)};trackByItem(e,t){return t.title}trackByItemWeb(e,t){return t.id}get collapsed(){try{return!!c[this.oneIndex].nav[this.twoIndex].collapsed}catch{return!1}}onCollapse=e=>{e.collapsed=!e.collapsed,v||S(this.websiteList)};getOverIndex(e){queueMicrotask(()=>{let t=_(e);this.overIndex!==t&&(this.overIndex=t)})}setOverIndex(){this.overIndex=Number.MAX_SAFE_INTEGER}deleteWebByIds(e,t){return a(this,null,function*(){let o=this.isLogin&&t?.rId;return new Promise(n=>{i.emit("MODAL",{nzTitle:r("_confirmDel"),nzContent:`ID${o?`(${r("_quote")})`:""}: ${e.join(",")}`,nzWidth:350,nzOkType:"primary",nzOkDanger:!0,nzOkText:r("_del"),nzOnOk:()=>a(this,null,function*(){let s=yield O(e);s&&i.emit("MESSAGE",{type:"success",content:r("_delSuccess")}),n(s)}),nzOnCancel:()=>{n(!1)}})})})}deleteClassByIds(e,t){return a(this,null,function*(){let o=this.isLogin&&t?.rId;return new Promise(n=>{i.emit("MODAL",{nzTitle:r("_confirmDel"),nzContent:`ID${o?`(${r("_quote")})`:""}: ${e.join(",")}`,nzWidth:350,nzOkType:"primary",nzOkDanger:!0,nzOkText:r("_del"),nzOnOk:()=>a(this,null,function*(){let s=yield w(e);s&&i.emit("MESSAGE",{type:"success",content:r("_delSuccess")}),n(s)}),nzOnCancel:()=>{n(!1)}})})})}static \u0275fac=function(t){return new(t||d)(u(h),u(p))};static \u0275prov=I({token:d,factory:d.\u0275fac,providedIn:"root"})};export{A as a};
