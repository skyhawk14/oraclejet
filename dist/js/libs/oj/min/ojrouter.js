/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","knockout","signals","promise"],function(a,g,c){(function(){function b(a){var b={};if(a=a.split("?")[1])a=a.split("\x26"),a.forEach(function(a){var c=a.split(/\=(.+)?/);a=c[0];a.length&&(b[a]||(b[a]=[]),c=c[1]&&decodeURIComponent(c[1]),b[a].push(c))});return b}function d(b,c){var d=document.createElement("a");d.href=da.href;void 0!==b.search&&(d.search=b.search);void 0!==b.pathname&&(d.pathname=b.pathname);var e=d.search,f="",g;g=e.indexOf("oj_Router\x3d");if(-1!==g){var h=e.indexOf("\x26",
g);-1===h&&(h=e.length);g=e.substring(0,g);e=e.substr(h)}else g=e+(-1===e.indexOf("?")?"?":"\x26"),e="";if(c&&0<Object.getOwnPropertyNames(c).length){var h=JSON.stringify(c),f=encodeURIComponent(h),h=a.A6.gPa(h),k=!1,q="oj_Router\x3d";h.length<=f.length&&(k=!0);q=k?q+("1"+h):q+("0"+f);if(1024<q.length)throw Error("Size of bookmarkable data is too big.");f=q}else g=g.substring(0,g.length-1);d.search=g+f+e;return d.href.replace(/\?$/,"")}function e(b,c){var d;c&&b.kv&&(a.A.Us(c),b.kv.every(function(a){return a.bn===
c?(d=a,!1):!0}));return d}function f(a){return a.Fs?f(a.Fs)+"."+a.Eh:a.Eh}function h(a){var b;if(a){if(b=h(a.Fs))b=(a=a.Hh())?b+(a+"/"):void 0}else b="/";return b}function k(a,b){var c;a.Mi.every(function(a){return a.Gs&&a.Gs!==b?!0:(c=a,!1)});return c}function l(b){b=b.filter(function(a){return a.value!==a.hd.Hh()});a.C.option("level")===a.C.Hw&&(a.C.info("Potential changes are: "),b.forEach(function(b){a.C.info("   { router: %s, value: %s }",f(b.hd),b.value)}));return b}function m(a){var b=this[a.hd.Eh];
void 0!==b&&(a.hd.Wm=b)}function p(){return Z[0]&&Z[0].cancel}function t(b){var c=b.charAt(0);b=b.slice(1);if("0"===c)b=decodeURIComponent(b);else if("1"===c)b=a.A6.JPa(b);else throw Error("Error retrieving bookmarkable data. Format is invalid");b=JSON.parse(b);if(a.C.option("level")===a.C.Hw){var d;a.C.info("Bookmarkable data: ");for(d in b)a.C.info("   { router: %s, value: %s }",d,b[d])}return b}function s(a,b,c){var d;a.Mi.every(function(a){return a.Gs&&a.Gs!==c||!a.zp(b)?!0:(d=a,!1)});return d}
function n(a){var b=[];a.HF()&&(b.push({hd:a,qXa:a.Hh()}),a.Mi.forEach(function(a){b=b.concat(n(a))}));return b}function r(a){if(!a)return{title:"",UD:""};var b=r(k(a,a.Hh()));if(""===b.title&&(a=a.HF())){var c=a.xC;void 0!==c?("function"===typeof c&&(c=c()),b.title=String(c)):(c=a.l_,void 0!==c&&(c=String(c),""!==b.UD&&(c+=" | "+b.UD),b.UD=c))}return b}function q(a){var b=a[a.length-1],c;b?(c=b.hd,b=b.value):(c=S,(b=S.Vm)&&a.push({value:b,hd:c}));for(;c=k(c,b);)(b=c.Vm)&&a.push({value:b,hd:c});var d=
[];n(S).forEach(function(b,c){var e=a[c];e&&b.hd===e.hd||d.unshift(b)});return a=d.concat(a)}function u(a,b){var c=[],d=[],e=a,f=b.split("/"),g,h,k;for(f.splice(0,1);e;)d.unshift(e),e=e.Fs;for(;g=f.shift();){e=d.shift();if(!e){if(e=s(h,g,k),!e){Y=b;break}}else if(!e.zp(g))throw Error('Invalid path "'+b+'". State id "'+g+'" does not exist on router "'+e.Eh+'".');c.push({hd:e,value:g});h=e;k=g}return c}function v(b,c,d){(b=b())||a.C.info("%s is false for state: %s",c,d);return b}function w(a,b,c,d){"function"===
typeof a&&(b=b?b.then(function(b){b&&(b=v(a,c,d));return b}):new Promise(function(b){b(v(a,c,d))}));return b}function y(a,b){var c=a.HF(),d;if(c){for(d=0;d<a.Mi.length;d++)b=y(a.Mi[d],b);d=c.pw&&c.pw.canExit?c.pw.canExit:c.tF;b=w(d,b,"canExit",c.bn)}return b}function x(b){if(p())return Promise.resolve(!1);a.C.info("Start _canExit.");b?(b=y(b,null),b=null===b?Promise.resolve(!0):b.then(function(a){return a&&!p()})):b=Promise.resolve(!0);return b}function z(b,c){if(p())return Promise.resolve();a.C.info("Start _canEnter.");
var d=null;b.forEach(function(a){(a=a.hd.zp(a.value))&&(d=w(a.sF,d,"canEnter",a.bn))});return d=null===d?Promise.resolve({u2:b,origin:c}):d.then(function(a){var d;a&&!p()&&(d={u2:b,origin:c});return d})}function A(b,c){var d=b.hd.zp(b.hd.Hh()),e=b.value?b.hd.zp(b.value):void 0;return Promise.resolve().then(function(){a.C.option("level")===a.C.Hw&&a.C.info("Updating state of %s to %s.",f(b.hd),b.value)}).then(d?d.QF:void 0).then(function(){var a=b.hd,d,e,f;if("popState"===c){e=a.WB.length;for(d=e-
1;0<=d;d--)if(a.WB[d]===b.value){f=!0;a.WB.splice(d,e-d);break}1===e-d&&(a.dH="back")}f||(delete a.dH,a.WB.push(a.Hh()));a.Hh(b.value)}).then(e?e.OF:void 0)}function G(b){if(!b)return Promise.resolve(R);var c=Promise.resolve().then(function(){a.C.info("Entering _updateAll.");a.Yb.PP=!0});b.u2.forEach(function(a){c=c.then(function(){if(!p())return A(a,b.origin)})});return c.then(function(){var c=0<b.u2.length&&!p();a.Yb.PP=!1;a.C.info("_updateAll returns %s.",String(c));return{hasChanged:c}},function(b){a.Yb.PP=
!1;return Promise.reject(b)})}function D(a){var b;try{b=P.parse(),b=l(b)}catch(c){return Promise.reject(c)}return z(b,a).then(G)}function C(b,c){a.C.option("level")===a.C.Hw&&a.C.info("\x3e\x3e %s: origin\x3d%s router\x3d%s %s %s",b,c.origin,c.hd?f(c.hd):"null",c.path?"path\x3d"+c.path:"",c.R2?"deferredHandling\x3dtrue":"")}function J(a){C("Executing",a);if(!a.R2){if("sync"===a.origin)return D();if("popState"===a.origin)return x(a.hd).then(function(b){return b?D(a.origin):Promise.resolve(R)})}return a.hd.RDa(a)}
function E(){var b=Z[0];C("Resolving",b);b.cancel?(C("Cancelled",b),b=Promise.resolve(R)):b=J(b);return b.then(function(b){var c=Z.shift();C("Done with",c);if(!0===b.hasChanged){var c=r(S),d;""!==c.title?d=c.title:L&&0<L.length?(d=L,""!==c.UD&&(d+=" | "+c.UD)):d=c.UD;d!==window.document.title&&(window.document.title=d)}a.Yb.BC.dispatch(b);return b},function(b){Z=[];a.C.error("Error when executing transition: %o",b||"Unknown");a.Yb.BC.dispatch(R);return Promise.reject(b)})}function B(a){C("Queuing  ",
a);a=Z.push(a);1===a?ga=E():(a=Z[a-2],a.R2||(C("Cancelling",a),a.cancel=!0),ga=ga.then(E));return ga}function H(){var b,c,d=S.Hh(),e=null;a.C.info("Handling popState event with URL: %s",da.href);if(d)for(b=0;b<S.Mi.length;b++)if(c=S.Mi[b],d===c.Gs){e=c;break}B({hd:e,origin:"popState"})}function F(){O||(P||(P=new a.Yb.E5),P.An(N),L=window.document.title,window.addEventListener("popstate",H,!1),a.C.info("Initializing rootInstance."),a.C.info("Base URL is %s",N),a.C.info("Current URL is %s",da.href),
O=!0)}var N="/",L,P,R={hasChanged:!1},O=!1,Y,Z=[],ga,da=window.location,S;a.Yb=function(a,b,c){var d=this;this.Eh=a;this.Gs=c||(b?b.Hh():void 0);this.Fs=b;this.Mi=[];this.Wm=void 0;this.Hh=g.observable();this.YMa=g.pureComputed({read:function(){return this.Hh()},write:function(a){this.go(a).then(null,function(a){throw a;})},owner:d});this.kv=null;this.Vm=void 0;this.HF=g.pureComputed(function(){return g.ignoreDependencies(d.zp,d,[d.Hh()])});this.$za=g.pureComputed(function(){var a,b=g.ignoreDependencies(d.zp,
d,[d.Hh()]);b&&(a=b.value);return a});this.dH=void 0;this.WB=[];this.vIa=Object.create(null,{name:{value:g.pureComputed(function(){var a,b;b=this.Hh()||this.Vm||this.kv[0];if(b=this.zp(b))a=b.value,a&&"string"===typeof a||(a=b.bn);return a},d),enumerable:!0},params:{value:Object.create(null,{ojRouter:{value:new function(){Object.defineProperties(this,{parentRouter:{value:d,enumerable:!0},direction:{get:function(){return d.dH},enumerable:!0}})},enumerable:!0}}),enumerable:!0},lifecycleListener:{value:Object.create(null,
{attached:{value:function(a){var b=g.unwrap(a.valueAccessor()).params.ojRouter.parentRouter.HF();b&&(b.pw=a.viewModel)},writable:!0,enumerable:!0}}),enumerable:!0}});Object.defineProperties(this,{parent:{value:this.Fs,enumerable:!0}})};o_("Router",a.Yb,a);Object.defineProperties(a.Yb.prototype,{name:{get:function(){return this.Eh},enumerable:!0},states:{get:function(){return this.kv},enumerable:!0},stateId:{get:function(){return this.YMa},enumerable:!0},currentState:{get:function(){return this.HF},
enumerable:!0},currentValue:{get:function(){return this.$za},enumerable:!0},defaultStateId:{get:function(){return this.Vm},set:function(a){this.Vm=a},enumerable:!0},moduleConfig:{get:function(){return this.vIa},enumerable:!0}});S=new a.Yb("root",void 0,void 0);a.Yb.prototype.Vma=function(a){var b;a&&"string"===typeof a&&(a=a.trim(),0<a.length&&this.Mi.every(function(c){return c.Eh===a?(b=c,!1):!0}));return b};a.f.j("Router.prototype.getChildRouter",{Vma:a.Yb.prototype.Vma});a.Yb.prototype.jma=function(b,
c){var d,e;a.A.Us(b);c=c||this.Hh();b=encodeURIComponent(b.trim());for(d=0;d<this.Mi.length;d++){e=this.Mi[d];if(e.Eh===b)throw Error('Invalid router name "'+b+'", it already exists.');if(e.Gs===c)throw Error('Cannot create more than one child router for parent state id "'+e.Gs+'".');}d=new a.Yb(b,this,c);this.Mi.push(d);return d};a.f.j("Router.prototype.createChildRouter",{jma:a.Yb.prototype.jma});a.Yb.prototype.zp=function(a){return e(this,a)};a.Yb.prototype.ama=function(b){this.Hh(void 0);delete this.Vm;
this.dH=void 0;this.WB=[];"function"===typeof b?(this.kv=null,this.zp=b):(this.kv=[],delete this.zp,Object.keys(b).forEach(function(c){var d=b[c];this.kv.push(new a.kA(c,d,this));"boolean"===typeof d.isDefault&&d.isDefault&&(this.Vm=c)},this));return this};a.f.j("Router.prototype.configure",{ama:a.Yb.prototype.ama});a.Yb.prototype.Lna=function(a){return this.zp(a)};a.f.j("Router.prototype.getState",{Lna:a.Yb.prototype.Lna});a.Yb.prototype.go=function(a,b){F();b=b||[];return B({hd:this,path:a,origin:"go",
xoa:b.historyUpdate})};a.f.j("Router.prototype.go",{go:a.Yb.prototype.go});a.Yb.prototype.RDa=function(b){var c,d=!0,e=b.path,g=!1,k=!1;switch(b.xoa){case "skip":k=!0;break;case "replace":g=!0}if(e)if("string"===typeof e)d=!1;else return Promise.reject(Error("Invalid object type for state id."));if(d&&(e=this.Vm,!e))return a.C.option("level")===a.C.Hw&&a.C.info("Undefined state id with no default id on router %s",f(this)),Promise.resolve(R);if("/"===e.charAt(0))b=e;else{b=h(this.Fs);if(!b)return Promise.reject(Error('Invalid path "'+
e+'". The parent router does not have a current state.'));b+=e}a.C.info("Destination path: %s",b);try{c=u(this,b),c=q(c)}catch(m){return Promise.reject(m)}var r=l(c);return g||0<r.length?(a.C.info("Deferred mode or new state is different."),x(this).then(function(b){return b?z(r).then(G).then(function(b){if(b.hasChanged)if(k)a.C.info("Skip history update.");else{var d=P.Ola(c);a.C.info("%s URL to %s",g?"Replacing":"Pushing",d);window.history[g?"replaceState":"pushState"](null,"",d)}return b}):Promise.resolve(R)})):
Promise.resolve(R)};a.Yb.prototype.gra=function(a){this.Wm=a;a={};for(var b=this;b;)void 0!==b.Wm&&(a[b.Eh]=b.Wm),b=b.Fs;for(var b=this,c,e,f;b;){for(e=0;e<b.Mi.length;e++)if(f=b.Mi[e],b.Hh()&&b.Hh()===f.Gs){void 0!==f.Wm&&(a[f.Eh]=f.Wm);c=f;break}b=c;c=void 0}window.history.replaceState(null,"",d({},a))};a.f.j("Router.prototype.store",{gra:a.Yb.prototype.gra});a.Yb.prototype.Dqa=function(){return this.Wm};a.f.j("Router.prototype.retrieve",{Dqa:a.Yb.prototype.Dqa});a.Yb.prototype.OC=function(){for(var b,
c;0<this.Mi.length;)this.Mi[0].OC();if(this.Fs){b=this.Fs.Mi;for(c=0;c<b.length;c++)if(b[c].Eh===this.Eh){b.splice(c,1);break}delete this.Gs}else N="/",P=null,this.Eh="root",window.document.title=L,window.removeEventListener("popstate",H),a.Yb.BC.removeAll(),O=!1;delete this.dH;this.WB=[];this.kv=null;delete this.Vm;delete this.Wm};a.f.j("Router.prototype.dispose",{OC:a.Yb.prototype.OC});a.Yb.BC=new c.Signal;a.Yb.PP=!1;Object.defineProperties(a.Yb,{rootInstance:{value:S,enumerable:!0},transitionedToState:{value:a.Yb.BC,
enumerable:!0}});a.Yb.td={};o_("Router.defaults",a.Yb.td,a);Object.defineProperties(a.Yb.td,{urlAdapter:{get:function(){P||(P=new a.Yb.E5);return P},set:function(a){if(O)throw Error("Incorrect operation. Cannot change URL adapter after calling sync() or go().");P=a},enumerable:!0,dS:!1},baseUrl:{get:function(){return N},set:function(a){if(O)throw Error("Incorrect operation. Cannot change base URL after calling sync() or go().");N=a?a.match(/[^?#]+/)[0]:"/"},enumerable:!0,dS:!1},rootInstanceName:{get:function(){return S.Eh},
set:function(b){if(O)throw Error("Incorrect operation. Cannot change the name of the root instance after calling sync() or go().");a.A.Us(b);S.Eh=encodeURIComponent(b.trim())},enumerable:!0,dS:!1}});a.Yb.Ht=function(){var b={hd:S,origin:"sync"};F();a.C.info("Entering sync with URL: %s",da.href);return Y?(b.path=Y,b.R2=!0,b.xoa="replace",Y=void 0,B(b)):a.Yb.PP?(a.C.info("Sync called while updating, waiting for updates to end."),new Promise(function(b){a.Yb.BC.addOnce(function(c){a.C.info("Sync updates done.");
b(c)})})):B(b)};o_("Router.sync",a.Yb.Ht,a);a.Yb.E5=function(){var b="";this.An=function(a){var c=document.createElement("a");c.href=a;a=c.pathname;a=a.replace(/^([^\/])/,"/$1");"/"!==a.slice(-1)&&(a+="/");b=a};this.parse=function(){var c=S,d=da.pathname.replace(b,""),e=d.split("/"),f=[],g;for(a.C.info("Parsing: %s",d);c&&(g=e.shift());)f.push({value:g,hd:c}),c=k(c,g);f=q(f);(c=da.search.split("oj_Router\x3d")[1])&&(c=c.split("\x26")[0])&&f.forEach(m,t(c));return f};this.Ola=function(a){for(var c,
e=!1,f="",g={};c=a.pop();)c.value&&(e||c.value!==c.hd.Vm)&&(f=""===f?c.value:c.value+"/"+f,e=!0),void 0!==c.hd.Wm&&(g[c.hd.Eh]=c.hd.Wm);return d({pathname:b+f},g)}};o_("Router.urlPathAdapter",a.Yb.E5,a);a.Yb.YUa=function(){this.An=function(){};this.parse=function(){var c=da.search,d=b(c),e=S,f=[];for(a.C.info("Parsing: %s",c);e;)(c=d[e.Eh])&&(c=c[0]),(c=c||e.Vm)&&f.push({value:c,hd:e}),e=k(e,c);f=q(f);(d=d.oj_Router)&&f.forEach(m,t(d[0]));return f};this.Ola=function(a){for(var b,c=!1,e="",f={};b=
a.pop();)b.value&&(c||b.value!==b.hd.Vm)&&(e="\x26"+b.hd.Eh+"\x3d"+b.value+e,c=!0),void 0!==b.hd.Wm&&(f[b.hd.Eh]=b.hd.Wm);e&&(e="?"+e.substr(1));return d({search:e},f)}};o_("Router.urlParamAdapter",a.Yb.YUa,a);return S})();(function(){a.kA=function(b,c,e){c=c||{};a.A.Us(b);this.bn=encodeURIComponent(b.trim());(this.sF=c.canEnter)&&a.A.HC(this.sF);(this.OF=c.enter)&&a.A.HC(this.OF);(this.tF=c.canExit)&&a.A.HC(this.tF);(this.QF=c.exit)&&a.A.HC(this.QF);this.xf=c.value;this.l_=c.label;this.xC=c.title;
this.gP=e;this.pw=void 0;Object.defineProperties(this,{id:{value:this.bn,enumerable:!0},value:{get:function(){return this.xf},set:function(a){this.xf=a},enumerable:!0},label:{get:function(){return this.l_},set:function(a){this.l_=a},enumerable:!0},title:{get:function(){return this.xC},set:function(a){this.xC=a},enumerable:!0},canEnter:{get:function(){return this.sF},set:function(a){this.sF=a},enumerable:!0},enter:{get:function(){return this.OF},set:function(a){this.OF=a},enumerable:!0},canExit:{get:function(){return this.tF},
set:function(a){this.tF=a},enumerable:!0},exit:{get:function(){return this.QF},set:function(a){this.QF=a},enumerable:!0}})};o_("RouterState",a.kA,a);a.kA.prototype.go=function(){return this.gP?this.gP.go(this.bn):(a.Yb.BC.dispatch({hasChanged:!1}),Promise.reject(Error("Router is not defined for this RouterState object.")))};a.f.j("RouterState.prototype.go",{go:a.kA.prototype.go});a.kA.prototype.Joa=function(){if(!this.gP)throw Error("Router is not defined for this RouterState object.");return this.gP.Hh()===
this.bn};a.f.j("RouterState.prototype.isCurrent",{Joa:a.kA.prototype.Joa})})();(function(){function b(a,b){if(null===a)return"";var c,d,e={},f={},g="",h=2,q=3,u=2,v="",w=0,y=0,x,z,A,G=a.length;for(A=0;A<G;A++)if(x=a[A],Object.prototype.hasOwnProperty.call(e,x)||(e[x]=q++,f[x]=!0),z=g+x,Object.prototype.hasOwnProperty.call(e,z))g=z;else{if(Object.prototype.hasOwnProperty.call(f,g)){if(256>g.charCodeAt(0)){for(c=u;c--;)w<<=1,5==y?(y=0,v+=b(w),w=0):y++;d=g.charCodeAt(0);c=8}else{d=1;for(c=u;c--;)w=w<<
1|d,5==y?(y=0,v+=b(w),w=0):y++,d=0;d=g.charCodeAt(0);c=16}for(;c--;)w=w<<1|d&1,5==y?(y=0,v+=b(w),w=0):y++,d>>=1;h--;0==h&&(h=Math.pow(2,u),u++);delete f[g]}else for(d=e[g],c=u;c--;)w=w<<1|d&1,5==y?(y=0,v+=b(w),w=0):y++,d>>=1;h--;0==h&&(h=Math.pow(2,u),u++);e[z]=q++;g=String(x)}if(""!==g){if(Object.prototype.hasOwnProperty.call(f,g)){if(256>g.charCodeAt(0)){for(c=u;c--;)w<<=1,5==y?(y=0,v+=b(w),w=0):y++;d=g.charCodeAt(0);c=8}else{d=1;for(c=u;c--;)w=w<<1|d,5==y?(y=0,v+=b(w),w=0):y++,d=0;d=g.charCodeAt(0);
c=16}for(;c--;)w=w<<1|d&1,5==y?(y=0,v+=b(w),w=0):y++,d>>=1;h--;0==h&&(h=Math.pow(2,u),u++);delete f[g]}else for(d=e[g],c=u;c--;)w=w<<1|d&1,5==y?(y=0,v+=b(w),w=0):y++,d>>=1;h--;0==h&&u++}d=2;for(c=u;c--;)w=w<<1|d&1,5==y?(y=0,v+=b(w),w=0):y++,d>>=1;for(;;)if(w<<=1,5==y){v+=b(w);break}else y++;return v}function c(a,b){for(var d=[],f=4,g=4,h=3,n="",r="",q,u,v,w,y,x={val:b(0),position:32,index:1},r=0;3>r;r+=1)d[r]=r;n=0;v=Math.pow(2,2);for(w=1;w!=v;)u=x.val&x.position,x.position>>=1,0==x.position&&(x.position=
32,x.val=b(x.index++)),n|=(0<u?1:0)*w,w<<=1;switch(n){case 0:n=0;v=Math.pow(2,8);for(w=1;w!=v;)u=x.val&x.position,x.position>>=1,0==x.position&&(x.position=32,x.val=b(x.index++)),n|=(0<u?1:0)*w,w<<=1;y=e(n);break;case 1:n=0;v=Math.pow(2,16);for(w=1;w!=v;)u=x.val&x.position,x.position>>=1,0==x.position&&(x.position=32,x.val=b(x.index++)),n|=(0<u?1:0)*w,w<<=1;y=e(n);break;case 2:return""}for(q=r=d[3]=y;;){if(x.index>a)return"";n=0;v=Math.pow(2,h);for(w=1;w!=v;)u=x.val&x.position,x.position>>=1,0==x.position&&
(x.position=32,x.val=b(x.index++)),n|=(0<u?1:0)*w,w<<=1;switch(y=n){case 0:n=0;v=Math.pow(2,8);for(w=1;w!=v;)u=x.val&x.position,x.position>>=1,0==x.position&&(x.position=32,x.val=b(x.index++)),n|=(0<u?1:0)*w,w<<=1;d[g++]=e(n);y=g-1;f--;break;case 1:n=0;v=Math.pow(2,16);for(w=1;w!=v;)u=x.val&x.position,x.position>>=1,0==x.position&&(x.position=32,x.val=b(x.index++)),n|=(0<u?1:0)*w,w<<=1;d[g++]=e(n);y=g-1;f--;break;case 2:return r}0==f&&(f=Math.pow(2,h),h++);if(d[y])n=d[y];else if(y===g)n=q+q[0];else return null;
r+=n;d[g++]=q+n[0];f--;q=n;0==f&&(f=Math.pow(2,h),h++)}}a.A6={gPa:function(a){return null===a?"":b(a,function(a){return f.charAt(a)})},JPa:function(a){return null===a?"":""===a?null:c(a.length,function(b){var c=f;b=a.charAt(b);var d;g||(g={});if(!g[c])for(g[c]={},d=0;d<c.length;d++)g[c][c[d]]=d;return g[c][b]})}};var e=String.fromCharCode,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",g})()});