import{R as W,S as G,ga as H}from"./chunk-YLE2URNI.js";import{Ca as $,K as b,Mb as O,Nb as f,Pb as w,Qc as B,R as x,Rb as d,Uc as R,X as I,Xc as g,Yb as m,Yc as U,bc as r,cc as p,dc as E,fa as N,ga as T,ha as l,mc as z,nc as F,oa as D,oc as k,pb as s,q as _,qb as c,r as C,s as y,ud as V,w as v,x as h,xb as j,xc as L,yb as M,yc as A,zc as P}from"./chunk-XXFAJXER.js";var q=["*"];function J(t,a){t&1&&(r(0,"span",2),E(1,"i",3)(2,"i",3)(3,"i",3)(4,"i",3),p())}function K(t,a){}function Q(t,a){if(t&1&&(r(0,"div",6),A(1),p()),t&2){let i=z(2);s(),P(i.nzTip)}}function X(t,a){if(t&1&&(r(0,"div")(1,"div",4),f(2,K,0,0,"ng-template",5)(3,Q,2,1,"div",6),p()()),t&2){let i=z(),u=L(1);s(),d("ant-spin-rtl",i.dir==="rtl")("ant-spin-spinning",i.isLoading)("ant-spin-lg",i.nzSize==="large")("ant-spin-sm",i.nzSize==="small")("ant-spin-show-text",i.nzTip),s(),w("ngTemplateOutlet",i.nzIndicator||u),s(),m(i.nzTip?3:-1)}}function Y(t,a){if(t&1&&(r(0,"div",7),k(1),p()),t&2){let i=z();d("ant-spin-blur",i.isLoading)}}var Z="spin",un=(()=>{let t,a=[],i=[];return class S{static{let o=typeof Symbol=="function"&&Symbol.metadata?Object.create(null):void 0;t=[G()],v(null,null,t,{kind:"field",name:"nzIndicator",static:!1,private:!1,access:{has:n=>"nzIndicator"in n,get:n=>n.nzIndicator,set:(n,e)=>{n.nzIndicator=e}},metadata:o},a,i),o&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:o})}constructor(o,n,e){this.nzConfigService=o,this.cdr=n,this.directionality=e,this._nzModuleName=Z,this.nzIndicator=h(this,a,null),this.nzSize=(h(this,i),"default"),this.nzTip=null,this.nzDelay=0,this.nzSimple=!1,this.nzSpinning=!0,this.destroy$=new _,this.spinning$=new C(this.nzSpinning),this.delay$=new y(1),this.isLoading=!1,this.dir="ltr"}ngOnInit(){this.delay$.pipe(N(this.nzDelay),I(),T(n=>n===0?this.spinning$:this.spinning$.pipe(x(e=>b(e?n:0)))),l(this.destroy$)).subscribe(n=>{this.isLoading=n,this.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent(Z).pipe(l(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.directionality.change?.pipe(l(this.destroy$)).subscribe(n=>{this.dir=n,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(o){let{nzSpinning:n,nzDelay:e}=o;n&&this.spinning$.next(this.nzSpinning),e&&this.delay$.next(this.nzDelay)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static{this.\u0275fac=function(n){return new(n||S)(c(W),c(R),c(H))}}static{this.\u0275cmp=j({type:S,selectors:[["nz-spin"]],hostVars:2,hostBindings:function(n,e){n&2&&d("ant-spin-nested-loading",!e.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:[2,"nzDelay","nzDelay",U],nzSimple:[2,"nzSimple","nzSimple",g],nzSpinning:[2,"nzSpinning","nzSpinning",g]},exportAs:["nzSpin"],features:[O,$],ngContentSelectors:q,decls:4,vars:2,consts:[["defaultTemplate",""],[1,"ant-spin-container",3,"ant-spin-blur"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function(n,e){n&1&&(F(),f(0,J,5,0,"ng-template",null,0,B)(2,X,4,12,"div")(3,Y,2,2,"div",1)),n&2&&(s(2),m(e.isLoading?2:-1),s(),m(e.nzSimple?-1:3))},dependencies:[V],encapsulation:2})}}})(),hn=(()=>{class t{static{this.\u0275fac=function(u){return new(u||t)}}static{this.\u0275mod=M({type:t})}static{this.\u0275inj=D({})}}return t})();export{un as a,hn as b};
