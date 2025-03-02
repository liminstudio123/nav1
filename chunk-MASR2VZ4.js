import{a as zt}from"./chunk-XQ2UZ7H5.js";import{a as Yt}from"./chunk-DMJENXYN.js";import{n as Tt,o as kt}from"./chunk-SDYW5S2J.js";import{$ as V}from"./chunk-MZGUJUYM.js";import{$d as It,Ac as dt,Cb as D,Ib as E,Mc as Dt,Nc as Pt,Ob as I,Pb as v,Pc as $t,Qb as Q,_d as St,ac as m,bc as p,cc as J,d as Qt,dc as vt,ec as xt,f as ht,ie as F,jc as Ct,lc as N,mb as gt,nd as bt,od as ot,qb as f,qc as Mt,rc as _t,sc as Ot,vb as yt,wc as wt,wd as at,xc as h,yc as O,zc as T}from"./chunk-A4ETL4PD.js";var ft=Qt((ct,lt)=>{"use strict";(function(s,i){typeof ct=="object"&&typeof lt<"u"?lt.exports=i():typeof define=="function"&&define.amd?define(i):(s=typeof globalThis<"u"?globalThis:s||self).dayjs=i()})(ct,function(){"use strict";var s=1e3,i=6e4,e=36e5,t="millisecond",x="second",P="minute",z="hour",b="day",R="week",$="month",K="quarter",k="year",H="date",pt="Invalid Date",Wt=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,At=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Jt={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(d){var a=["th","st","nd","rd"],n=d%100;return"["+d+(a[(n-20)%10]||a[n]||a[0])+"]"}},rt=function(d,a,n){var r=String(d);return!r||r.length>=a?d:""+Array(a+1-r.length).join(n)+d},Ut={s:rt,z:function(d){var a=-d.utcOffset(),n=Math.abs(a),r=Math.floor(n/60),o=n%60;return(a<=0?"+":"-")+rt(r,2,"0")+":"+rt(o,2,"0")},m:function d(a,n){if(a.date()<n.date())return-d(n,a);var r=12*(n.year()-a.year())+(n.month()-a.month()),o=a.clone().add(r,$),c=n-o<0,l=a.clone().add(r+(c?-1:1),$);return+(-(r+(n-o)/(c?o-l:l-o))||0)},a:function(d){return d<0?Math.ceil(d)||0:Math.floor(d)},p:function(d){return{M:$,y:k,w:R,d:b,D:H,h:z,m:P,s:x,ms:t,Q:K}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(d){return d===void 0}},q="en",L={};L[q]=Jt;var mt="$isDayjsObject",st=function(d){return d instanceof nt||!(!d||!d[mt])},et=function d(a,n,r){var o;if(!a)return q;if(typeof a=="string"){var c=a.toLowerCase();L[c]&&(o=c),n&&(L[c]=n,o=c);var l=a.split("-");if(!o&&l.length>1)return d(l[0])}else{var g=a.name;L[g]=a,o=g}return!r&&o&&(q=o),o||!r&&q},C=function(d,a){if(st(d))return d.clone();var n=typeof a=="object"?a:{};return n.date=d,n.args=arguments,new nt(n)},u=Ut;u.l=et,u.i=st,u.w=function(d,a){return C(d,{locale:a.$L,utc:a.$u,x:a.$x,$offset:a.$offset})};var nt=function(){function d(n){this.$L=et(n.locale,null,!0),this.parse(n),this.$x=this.$x||n.x||{},this[mt]=!0}var a=d.prototype;return a.parse=function(n){this.$d=function(r){var o=r.date,c=r.utc;if(o===null)return new Date(NaN);if(u.u(o))return new Date;if(o instanceof Date)return new Date(o);if(typeof o=="string"&&!/Z$/i.test(o)){var l=o.match(Wt);if(l){var g=l[2]-1||0,y=(l[7]||"0").substring(0,3);return c?new Date(Date.UTC(l[1],g,l[3]||1,l[4]||0,l[5]||0,l[6]||0,y)):new Date(l[1],g,l[3]||1,l[4]||0,l[5]||0,l[6]||0,y)}}return new Date(o)}(n),this.init()},a.init=function(){var n=this.$d;this.$y=n.getFullYear(),this.$M=n.getMonth(),this.$D=n.getDate(),this.$W=n.getDay(),this.$H=n.getHours(),this.$m=n.getMinutes(),this.$s=n.getSeconds(),this.$ms=n.getMilliseconds()},a.$utils=function(){return u},a.isValid=function(){return this.$d.toString()!==pt},a.isSame=function(n,r){var o=C(n);return this.startOf(r)<=o&&o<=this.endOf(r)},a.isAfter=function(n,r){return C(n)<this.startOf(r)},a.isBefore=function(n,r){return this.endOf(r)<C(n)},a.$g=function(n,r,o){return u.u(n)?this[r]:this.set(o,n)},a.unix=function(){return Math.floor(this.valueOf()/1e3)},a.valueOf=function(){return this.$d.getTime()},a.startOf=function(n,r){var o=this,c=!!u.u(r)||r,l=u.p(n),g=function(A,w){var j=u.w(o.$u?Date.UTC(o.$y,w,A):new Date(o.$y,w,A),o);return c?j:j.endOf(b)},y=function(A,w){return u.w(o.toDate()[A].apply(o.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(w)),o)},M=this.$W,_=this.$M,S=this.$D,U="set"+(this.$u?"UTC":"");switch(l){case k:return c?g(1,0):g(31,11);case $:return c?g(1,_):g(0,_+1);case R:var W=this.$locale().weekStart||0,G=(M<W?M+7:M)-W;return g(c?S-G:S+(6-G),_);case b:case H:return y(U+"Hours",0);case z:return y(U+"Minutes",1);case P:return y(U+"Seconds",2);case x:return y(U+"Milliseconds",3);default:return this.clone()}},a.endOf=function(n){return this.startOf(n,!1)},a.$set=function(n,r){var o,c=u.p(n),l="set"+(this.$u?"UTC":""),g=(o={},o[b]=l+"Date",o[H]=l+"Date",o[$]=l+"Month",o[k]=l+"FullYear",o[z]=l+"Hours",o[P]=l+"Minutes",o[x]=l+"Seconds",o[t]=l+"Milliseconds",o)[c],y=c===b?this.$D+(r-this.$W):r;if(c===$||c===k){var M=this.clone().set(H,1);M.$d[g](y),M.init(),this.$d=M.set(H,Math.min(this.$D,M.daysInMonth())).$d}else g&&this.$d[g](y);return this.init(),this},a.set=function(n,r){return this.clone().$set(n,r)},a.get=function(n){return this[u.p(n)]()},a.add=function(n,r){var o,c=this;n=Number(n);var l=u.p(r),g=function(_){var S=C(c);return u.w(S.date(S.date()+Math.round(_*n)),c)};if(l===$)return this.set($,this.$M+n);if(l===k)return this.set(k,this.$y+n);if(l===b)return g(1);if(l===R)return g(7);var y=(o={},o[P]=i,o[z]=e,o[x]=s,o)[l]||1,M=this.$d.getTime()+n*y;return u.w(M,this)},a.subtract=function(n,r){return this.add(-1*n,r)},a.format=function(n){var r=this,o=this.$locale();if(!this.isValid())return o.invalidDate||pt;var c=n||"YYYY-MM-DDTHH:mm:ssZ",l=u.z(this),g=this.$H,y=this.$m,M=this.$M,_=o.weekdays,S=o.months,U=o.meridiem,W=function(w,j,X,it){return w&&(w[j]||w(r,c))||X[j].slice(0,it)},G=function(w){return u.s(g%12||12,w,"0")},A=U||function(w,j,X){var it=w<12?"AM":"PM";return X?it.toLowerCase():it};return c.replace(At,function(w,j){return j||function(X){switch(X){case"YY":return String(r.$y).slice(-2);case"YYYY":return u.s(r.$y,4,"0");case"M":return M+1;case"MM":return u.s(M+1,2,"0");case"MMM":return W(o.monthsShort,M,S,3);case"MMMM":return W(S,M);case"D":return r.$D;case"DD":return u.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return W(o.weekdaysMin,r.$W,_,2);case"ddd":return W(o.weekdaysShort,r.$W,_,3);case"dddd":return _[r.$W];case"H":return String(g);case"HH":return u.s(g,2,"0");case"h":return G(1);case"hh":return G(2);case"a":return A(g,y,!0);case"A":return A(g,y,!1);case"m":return String(y);case"mm":return u.s(y,2,"0");case"s":return String(r.$s);case"ss":return u.s(r.$s,2,"0");case"SSS":return u.s(r.$ms,3,"0");case"Z":return l}return null}(w)||l.replace(":","")})},a.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},a.diff=function(n,r,o){var c,l=this,g=u.p(r),y=C(n),M=(y.utcOffset()-this.utcOffset())*i,_=this-y,S=function(){return u.m(l,y)};switch(g){case k:c=S()/12;break;case $:c=S();break;case K:c=S()/3;break;case R:c=(_-M)/6048e5;break;case b:c=(_-M)/864e5;break;case z:c=_/e;break;case P:c=_/i;break;case x:c=_/s;break;default:c=_}return o?c:u.a(c)},a.daysInMonth=function(){return this.endOf($).$D},a.$locale=function(){return L[this.$L]},a.locale=function(n,r){if(!n)return this.$L;var o=this.clone(),c=et(n,r,!0);return c&&(o.$L=c),o},a.clone=function(){return u.w(this.$d,this)},a.toDate=function(){return new Date(this.valueOf())},a.toJSON=function(){return this.isValid()?this.toISOString():null},a.toISOString=function(){return this.$d.toISOString()},a.toString=function(){return this.$d.toUTCString()},d}(),ut=nt.prototype;return C.prototype=ut,[["$ms",t],["$s",x],["$m",P],["$H",z],["$W",b],["$M",$],["$y",k],["$D",H]].forEach(function(d){ut[d[1]]=function(a){return this.$g(a,d[0],d[1])}}),C.extend=function(d,a){return d.$i||(d(a,nt,C),d.$i=!0),C},C.locale=et,C.isDayjs=st,C.unix=function(d){return C(1e3*d)},C.en=L[q],C.Ls=L,C.p={},C})});var Ht=class s{data;date="";day="";week="";dayOfYear="";constructor(){let i=kt();this.date=F("_calendarDate",{year:i.year,month:i.month}),this.day=i.zeroDate,this.week=i.dayText,this.dayOfYear=F("_dayOfYear",{day:Tt()})}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=D({type:s,selectors:[["app-calendar"]],inputs:{data:"data"},decls:11,vars:10,consts:[[1,"calendar","family","citems"],[1,"ctop"],[1,"box"],[1,"cday"],[1,"cdate"],[1,"mr-1.5"]],template:function(e,t){e&1&&(m(0,"div",0)(1,"div",1),h(2),p(),m(3,"div",2)(4,"div",3),h(5),p(),m(6,"div",4)(7,"span",5),h(8),p(),m(9,"span"),h(10),p()()()()),e&2&&(v("zoom",t.data.zoom),f(),v("background",t.data.topColor),f(),T(" ",t.date," "),f(),v("background",t.data.bgColor),f(2),O(t.day),f(3),O(t.dayOfYear),f(2),O(t.week))},styles:[".calendar[_ngcontent-%COMP%]{width:130px;height:var(--componentHeight);max-height:100%;border-radius:12px;text-align:center;overflow:hidden;color:#fff;box-shadow:0 0 8px #0006;display:flex;flex-direction:column}.calendar[_ngcontent-%COMP%]   .ctop[_ngcontent-%COMP%]{font-size:17px;height:40px;line-height:0;display:flex;align-items:center;justify-content:center;font-weight:500}.calendar[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{flex:1}.calendar[_ngcontent-%COMP%]   .cday[_ngcontent-%COMP%]{font-weight:700;font-size:40px;line-height:1;padding:24px 0 5px}.calendar[_ngcontent-%COMP%]   .cdate[_ngcontent-%COMP%]{color:#ffffffb3;font-size:13px}"]})};var Et=class s{data;runDays=0;unit="";constructor(){let i=Date.now()-It.runtime;i=i<0?0:i;let e=Math.floor(i/(1e3*60*60*24*365));e>0?(this.runDays=e,this.unit=F("_year")):(this.runDays=Math.floor(i/(1e3*60*60*24)),this.unit=F("_day"))}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=D({type:s,selectors:[["app-runtime"]],inputs:{data:"data"},decls:9,vars:5,consts:[[1,"runtime","family","citems"],[1,"title"],[1,"days"],[1,"day"],[1,"unit"],["src","https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/runtime.svg",1,"img"]],template:function(e,t){e&1&&(m(0,"div",0)(1,"div",1),h(2),p(),m(3,"div",2)(4,"span",3),h(5),p(),m(6,"span",4),h(7),p()(),J(8,"img",5),p()),e&2&&(v("zoom",t.data.zoom),f(2),O(t.data.title),f(3),O(t.runDays),f(2),O(t.unit))},styles:[".runtime[_ngcontent-%COMP%]{pointer-events:none;position:relative;width:230px;height:var(--componentHeight);max-height:100%;border-radius:12px;overflow:hidden;color:#fff;box-shadow:0 0 15px #0003;display:flex;justify-content:center;padding:30px;flex-direction:column;background:linear-gradient(135deg,#8bc6ec,#9599e2);font-weight:700}.runtime[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{z-index:2;position:relative;font-size:18px;color:#f9f6f6}.runtime[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]{z-index:2;position:relative;margin-top:10px;font-size:48px;line-height:1;color:#d67272}.runtime[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]{vertical-align:text-bottom}.runtime[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%]{font-size:15px;margin-left:2px;margin-bottom:2px;font-weight:500}.runtime[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{position:absolute;bottom:30px;right:30px;width:70px}"]})};function Zt(s,i){if(s&1&&(m(0,"div",5),h(1),p()),s&2){let e=N();f(),O(e.countdownStr)}}function Bt(s,i){s&1&&J(0,"img",6)}function Kt(s,i){s&1&&J(0,"img",6)}var Nt=class s{data;countdownStr="";isRest=!1;timer;constructor(){document.addEventListener("visibilitychange",this.visibilitychange.bind(this))}ngOnInit(){this.init(),V.on("COMPONENT_OK",()=>{clearTimeout(this.timer),setTimeout(()=>{this.init()},100)})}ngOnDestroy(){clearTimeout(this.timer),document.removeEventListener("visibilitychange",this.visibilitychange)}visibilitychange(i){i.target.hidden?clearTimeout(this.timer):this.init()}init(){if(this.data){let i=new Date,e=i.getTime(),t=new Date(this.data.startDate);t.setFullYear(i.getFullYear()),t.setMonth(i.getMonth()),t.setDate(i.getDate());let x=t.getTime(),P=new Date(this.data.date);P.setFullYear(i.getFullYear()),P.setMonth(i.getMonth()),P.setDate(i.getDate());let z=P.getTime(),b=(z-e)/1e3,R=b/(60*60),$=Math.floor(R%1*10)/10,K=Math.floor(b/60%60),k=Math.floor(b%60),H=Math.floor(R)+$;if(e>=x&&e<=z)H>=1?this.countdownStr=`${H}\u5C0F\u65F6`:K>0?this.countdownStr=`${K}\u5206\u949F`:k>=0&&(this.countdownStr=`${k}\u79D2`);else return this.isRest=!0,clearTimeout(this.timer);this.isRest=!1}this.timer=setTimeout(()=>this.init(),1e3)}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=D({type:s,selectors:[["app-offwork"]],inputs:{data:"data"},decls:7,vars:8,consts:[["other",""],[1,"offwork","family","citems"],[1,"title"],["class","coutdown",4,"ngIf"],["src","https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/rest.svg","class","img",4,"ngIf","ngIfElse"],[1,"coutdown"],["src","https://gcore.jsdelivr.net/gh/xjh22222228/public@gh-pages/nav/rest.svg",1,"img"]],template:function(e,t){if(e&1&&(m(0,"div",1)(1,"div",2),h(2),p(),E(3,Zt,2,1,"div",3)(4,Bt,1,0,"img",4)(5,Kt,1,0,"ng-template",null,0,$t),p()),e&2){let x=wt(6);v("zoom",t.data.zoom),Q("rest",t.isRest),f(2),T(" ",t.isRest?t.data.restTitle:t.data.workTitle," "),f(),I("ngIf",!t.isRest),f(),I("ngIf",t.isRest)("ngIfElse",x)}},dependencies:[at,ot],styles:[".offwork[_ngcontent-%COMP%]{pointer-events:none;position:relative;width:170px;height:var(--componentHeight);max-height:100%;border-radius:12px;overflow:hidden;box-shadow:0 0 15px #0003;display:flex;align-items:center;flex-direction:column;font-weight:700;background-color:#fff}.offwork.rest[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:22px;color:#666}.offwork[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-top:20px;z-index:2;position:relative;font-size:14px;color:gray;text-align:center}.offwork[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{position:absolute;left:0;bottom:0;width:100%}.offwork[_ngcontent-%COMP%]   .coutdown[_ngcontent-%COMP%]{z-index:2;position:relative;font-size:24px;color:#666}"]})};var jt=class s{constructor(i){this.jumpService=i}data;static \u0275fac=function(e){return new(e||s)(yt(Yt))};static \u0275cmp=D({type:s,selectors:[["app-image"]],inputs:{data:"data"},decls:3,vars:7,consts:[[1,"cimage","family","citems",3,"click"],[1,"text"]],template:function(e,t){e&1&&(m(0,"div",0),Ct("click",function(P){return t.jumpService.goUrl(P,t.data.go)}),m(1,"div",1),h(2),p()()),e&2&&(v("background-image",t.data.url&&"url("+t.data.url+")")("zoom",t.data.zoom),Q("cursor-pointer",t.data.go),f(2),O(t.data.text))},styles:[".cimage[_ngcontent-%COMP%]{position:relative;width:170px;height:var(--componentHeight);max-height:100%;border-radius:12px;overflow:hidden;color:#fff;box-shadow:0 0 15px #0003;background-size:cover}.cimage[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{position:absolute;bottom:5px;left:0;width:100%;font-size:12px;text-align:center;font-weight:500}"]})};var tt=ht(ft());var Ft=class s{data;component={};constructor(){}ngOnInit(){this.init(),V.on("COMPONENT_OK",()=>{setTimeout(()=>{this.init()},100)})}init(){let i={};this.data.date&&(i.dateStr=(0,tt.default)(this.data.date).format("YYYY.MM.DD"),i.dayStr=(0,tt.default)((0,tt.default)(this.data.date).format("YYYY-MM-DD")).diff((0,tt.default)().format("YYYY-MM-DD"),"day"),i.dayStr=i.dayStr<0?0:i.dayStr,i.dayStr=i.dayStr>9999?9999:i.dayStr),this.component=i}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=D({type:s,selectors:[["app-countdown"]],inputs:{data:"data"},decls:8,vars:15,consts:[[1,"holiday","family","citems"],[1,"top"],[1,"box"],[1,"days"],[1,"date"]],template:function(e,t){e&1&&(m(0,"div",0)(1,"div",1),h(2),p(),m(3,"div",2)(4,"div",3),h(5),p(),m(6,"div",4),h(7),p()()()),e&2&&(v("zoom",t.data.zoom),f(),v("background",t.data.topColor),f(),T(" ",t.data.title," "),f(),v("background-image",t.data.url&&"url("+t.data.url+")")("background-color",t.data.bgColor),f(),v("color",t.data.dayColor),f(),T(" ",t.component.dayStr," "),f(),v("color",t.data.dateColor),f(),T(" - ",t.component.dateStr," - "))},styles:[".holiday[_ngcontent-%COMP%]{position:relative;width:160px;height:var(--componentHeight);max-height:100%;border-radius:12px;overflow:hidden;color:#fff;box-shadow:0 0 15px #0003;display:flex;flex-direction:column;text-align:center}.holiday[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{padding:6px 10px;font-weight:500}.holiday[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{position:relative;flex:1;background-size:cover}.holiday[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]{font-weight:700;font-size:50px;margin-top:16px}.holiday[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{position:absolute;bottom:5px;left:0;width:100%;font-weight:500}"]})};var qt=["root"],Rt=class s{data;root;constructor(){}ngAfterViewInit(){this.parseDescription()}parseDescription(){St(this.root?.nativeElement,`!${this.data.html}`)}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=D({type:s,selectors:[["app-html"]],viewQuery:function(e,t){if(e&1&&Mt(qt,5),e&2){let x;_t(x=Ot())&&(t.root=x.first)}},inputs:{data:"data"},decls:3,vars:7,consts:[["root",""],[1,"html","family","citems",3,"innerHTML"]],template:function(e,t){e&1&&(J(0,"div",1,0),Dt(2,"safeHtml")),e&2&&(v("zoom",t.data.zoom)("width",t.data.width+"px"),I("innerHTML",Pt(2,5,t.data.html),gt))},dependencies:[zt],styles:[".html[_ngcontent-%COMP%]{position:relative;height:var(--componentHeight)!important;max-height:100%;border-radius:12px;overflow:hidden;box-shadow:0 0 15px #0003}"]})};var Y=ht(ft());function Gt(s,i){if(s&1&&(m(0,"span",10),h(1),p()),s&2){let e=N(2);f(),O(e.$t("_rest"))}}function Xt(s,i){if(s&1&&(vt(0),h(1),xt()),s&2){let e=N(2);f(),T("- ",e.items[0].afterDay,"")}}function te(s,i){if(s&1&&(m(0,"span",10),h(1),p()),s&2){let e=N(3);f(),O(e.$t("_rest"))}}function ee(s,i){if(s&1&&(m(0,"div",14),h(1),p()),s&2){let e=N().$implicit,t=N(2);f(),dt(" ",e.diffDay,"",t.$t("_day")," ")}}function ne(s,i){if(s&1&&(m(0,"div",11)(1,"div",12),h(2),E(3,te,2,1,"span",6),p(),E(4,ee,2,2,"div",13),p()),s&2){let e=i.$implicit;f(2),dt(" ",e.title," ",e.dateStr,""),f(),I("ngIf",e.day>0),f(),I("ngIf",e.diffDay>0)}}function ie(s,i){if(s&1&&(m(0,"div",1)(1,"div",2)(2,"div",3),h(3),p(),m(4,"div",4),h(5),p(),m(6,"div",5),E(7,Gt,2,1,"span",6),m(8,"span"),h(9),E(10,Xt,2,1,"ng-container",7),p()()(),m(11,"div",8),E(12,ne,5,4,"div",9),p()()),s&2){let e=N();v("zoom",e.data.zoom),f(),Q("today",e.items[0].isToday||e.items[0].isRest),f(2),T(" ",e.items[0].isToday||e.items[0].isRest?e.$t("_dayIs"):e.$t("_distance")+e.items[0].title," "),f(2),O(e.items[0].diffStr),f(2),I("ngIf",e.items[0].day>0),f(2),T("",e.items[0].dateStr," "),f(),I("ngIf",e.items[0].afterDay),f(2),I("ngForOf",e.items)}}var Lt=class s{data;items=[];$t=F;constructor(){}ngOnInit(){this.init(),V.on("COMPONENT_OK",()=>{setTimeout(()=>{this.init()},100)})}init(){let i={},e=(0,Y.default)((0,Y.default)().format("YYYY-MM-DD"));this.data.items&&(i=[...this.data.items].filter(t=>{t.date=(0,Y.default)(t.date).format("YYYY-MM-DD");let x=(0,Y.default)(t.date);return t.day>0&&(x=x.add(t.day-1,"day")),!x.isBefore(e)}).slice(0,4).map(t=>(t.dateStr=(0,Y.default)(t.date).format("MM.DD"),t.diffDay=(0,Y.default)((0,Y.default)(t.date).format("YYYY-MM-DD")).diff(e,"day"),t.diffDay=t.diffDay<0?0:t.diffDay,t.diffDay=t.diffDay>999?999:t.diffDay,t.diffStr=t.diffDay,t.day>0&&(t.afterDay=(0,Y.default)(t.date).add(t.day-1,"day").format("MM.DD"),t.afterDay===t.dateStr&&(t.afterDay=null)),t.isToday=t.dateStr===(0,Y.default)().format("MM.DD"),t.diffDay<=0&&(t.isToday?t.diffStr=t.title:(t.isRest=!0,t.diffStr="\u4F11\u606F\u65E5")),t))),this.items=i}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=D({type:s,selectors:[["app-holiday"]],inputs:{data:"data"},decls:1,vars:1,consts:[["class","holiday family citems",3,"zoom",4,"ngIf"],[1,"holiday","family","citems"],[1,"left"],[1,"title"],[1,"days"],[1,"flex","items-center","justify-center","whitespace-nowrap"],["class","tag",4,"ngIf"],[4,"ngIf"],[1,"right"],["class","items",4,"ngFor","ngForOf"],[1,"tag"],[1,"items"],[1,"cleft"],["class","cright",4,"ngIf"],[1,"cright"]],template:function(e,t){e&1&&E(0,ie,13,10,"div",0),e&2&&I("ngIf",t.items.length)},dependencies:[at,bt,ot],styles:[".holiday[_ngcontent-%COMP%]{position:relative;width:320px;height:var(--componentHeight);max-height:100%;border-radius:12px;overflow:hidden;box-shadow:0 0 15px #0003;display:flex;background-color:#fff;color:#666}.holiday[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:500;font-size:16px}.holiday[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{width:140px;padding:12px 0 12px 12px;display:flex;flex-direction:column}.holiday[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]{font-size:46px;text-align:center;font-weight:700;color:#000000d9;flex:1;display:flex;align-items:center;justify-content:center}.holiday[_ngcontent-%COMP%]   .left.today[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]{font-size:30px}.holiday[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]{background-color:#dffcea;color:#55aa6f;font-size:10px;font-weight:500;padding:1px 2px;border-radius:2px;display:inline-flex;align-items:center;justify-content:center;margin-right:3px;margin-left:2px}.holiday[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{flex:1;padding:12px}.holiday[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:4px 0;color:#000c}.holiday[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]:not(:nth-last-child(1)){margin-bottom:3px;border-bottom:1px solid #eee}.holiday[_ngcontent-%COMP%]   .cleft[_ngcontent-%COMP%]{position:relative;white-space:nowrap;display:flex;align-items:center}.holiday[_ngcontent-%COMP%]   .cleft[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]{position:absolute;top:50%;left:-5px;transform:translate(-100%,-50%)}.holiday[_ngcontent-%COMP%]   .cright[_ngcontent-%COMP%]{font-weight:500}"]})};export{Ht as a,Et as b,Nt as c,jt as d,ft as e,Ft as f,Rt as g,Lt as h};
