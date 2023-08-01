import{e as Er,r as X,m as Sr,i as He,w as Ve,a as gt,b as Ce,c as Ar,t as Zi,h as eo,g as to,o as no,n as Or,d as ao,f as K,j as We,k as ze,l as b,p as se,s as ro,u as te,q as io,v as Kn,x as Gn,y as fn,z as k,E as Jn,A as B,B as ve,C as Xn,D as Qn,F as Cr,G as Pr,H as Rr,I as Zn,J as oo,K as Nr,L as Tr,M as Ir,N as so,O as Lt,P as ke,Q as ka,R as Lr,S as Mr,T as lo,U as co,V as uo,W as fo,X as mo}from"./element-plus-5c15db03.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();var po=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let zr;const Yt=e=>zr=e,Fr=Symbol();function Sn(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var rt;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(rt||(rt={}));function ho(){const e=Er(!0),t=e.run(()=>X({}));let n=[],a=[];const r=Sr({install(i){Yt(r),r._a=i,i.provide(Fr,r),i.config.globalProperties.$pinia=r,a.forEach(o=>n.push(o)),a=[]},use(i){return!this._a&&!po?a.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return r}const Dr=()=>{};function xa(e,t,n,a=Dr){e.push(t);const r=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),a())};return!n&&to()&&no(r),r}function je(e,...t){e.slice().forEach(n=>{n(...t)})}const vo=e=>e();function An(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,a)=>e.set(a,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const a=t[n],r=e[n];Sn(r)&&Sn(a)&&e.hasOwnProperty(n)&&!Ce(a)&&!Ar(a)?e[n]=An(r,a):e[n]=a}return e}const go=Symbol();function yo(e){return!Sn(e)||!e.hasOwnProperty(go)}const{assign:Ae}=Object;function bo(e){return!!(Ce(e)&&e.effect)}function wo(e,t,n,a){const{state:r,actions:i,getters:o}=t,s=n.state.value[e];let l;function u(){s||(n.state.value[e]=r?r():{});const c=ao(n.state.value[e]);return Ae(c,i,Object.keys(o||{}).reduce((f,d)=>(f[d]=Sr(K(()=>{Yt(n);const m=n._s.get(e);return o[d].call(m,m)})),f),{}))}return l=jr(e,u,t,n,a,!0),l}function jr(e,t,n={},a,r,i){let o;const s=Ae({actions:{}},n),l={deep:!0};let u,c,f=[],d=[],m;const p=a.state.value[e];!i&&!p&&(a.state.value[e]={}),X({});let _;function O(z){let R;u=c=!1,typeof z=="function"?(z(a.state.value[e]),R={type:rt.patchFunction,storeId:e,events:m}):(An(a.state.value[e],z),R={type:rt.patchObject,payload:z,storeId:e,events:m});const j=_=Symbol();Or().then(()=>{_===j&&(u=!0)}),c=!0,je(f,R,a.state.value[e])}const y=i?function(){const{state:R}=n,j=R?R():{};this.$patch(ne=>{Ae(ne,j)})}:Dr;function v(){o.stop(),f=[],d=[],a._s.delete(e)}function w(z,R){return function(){Yt(a);const j=Array.from(arguments),ne=[],re=[];function N(Q){ne.push(Q)}function Fe(Q){re.push(Q)}je(d,{args:j,name:z,store:P,after:N,onError:Fe});let de;try{de=R.apply(this&&this.$id===e?this:P,j)}catch(Q){throw je(re,Q),Q}return de instanceof Promise?de.then(Q=>(je(ne,Q),Q)).catch(Q=>(je(re,Q),Promise.reject(Q))):(je(ne,de),de)}}const T={_p:a,$id:e,$onAction:xa.bind(null,d),$patch:O,$reset:y,$subscribe(z,R={}){const j=xa(f,z,R.detached,()=>ne()),ne=o.run(()=>Ve(()=>a.state.value[e],re=>{(R.flush==="sync"?c:u)&&z({storeId:e,type:rt.direct,events:m},re)},Ae({},l,R)));return j},$dispose:v},P=gt(T);a._s.set(e,P);const F=a._a&&a._a.runWithContext||vo,q=a._e.run(()=>(o=Er(),F(()=>o.run(t))));for(const z in q){const R=q[z];if(Ce(R)&&!bo(R)||Ar(R))i||(p&&yo(R)&&(Ce(R)?R.value=p[z]:An(R,p[z])),a.state.value[e][z]=R);else if(typeof R=="function"){const j=w(z,R);q[z]=j,s.actions[z]=R}}return Ae(P,q),Ae(Zi(P),q),Object.defineProperty(P,"$state",{get:()=>a.state.value[e],set:z=>{O(R=>{Ae(R,z)})}}),a._p.forEach(z=>{Ae(P,o.run(()=>z({store:P,app:a._a,pinia:a,options:s})))}),p&&i&&n.hydrate&&n.hydrate(P.$state,p),u=!0,c=!0,P}function Ur(e,t,n){let a,r;const i=typeof t=="function";typeof e=="string"?(a=e,r=i?n:t):(r=e,a=e.id);function o(s,l){const u=eo();return s=s||(u?He(Fr,null):null),s&&Yt(s),s=zr,s._s.has(a)||(i?jr(a,t,r,s):wo(a,r,s)),s._s.get(a)}return o.$id=a,o}const Xe=(e,t)=>{const n=e.__vccOpts||e;for(const[a,r]of t)n[a]=r;return n},_o={};function ko(e,t){const n=We("RouterView");return se(),ze("div",null,[b(n)])}const xo=Xe(_o,[["render",ko]]);/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ue=typeof window<"u";function Eo(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const D=Object.assign;function dn(e,t){const n={};for(const a in t){const r=t[a];n[a]=le(r)?r.map(e):e(r)}return n}const it=()=>{},le=Array.isArray,So=/\/$/,Ao=e=>e.replace(So,"");function mn(e,t,n="/"){let a,r={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(a=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),r=e(i)),s>-1&&(a=a||t.slice(0,s),o=t.slice(s,t.length)),a=Ro(a??t,n),{fullPath:a+(i&&"?")+i+o,path:a,query:r,hash:o}}function Oo(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ea(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Co(e,t,n){const a=t.matched.length-1,r=n.matched.length-1;return a>-1&&a===r&&Ye(t.matched[a],n.matched[r])&&qr(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Ye(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function qr(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Po(e[n],t[n]))return!1;return!0}function Po(e,t){return le(e)?Sa(e,t):le(t)?Sa(t,e):e===t}function Sa(e,t){return le(t)?e.length===t.length&&e.every((n,a)=>n===t[a]):e.length===1&&e[0]===t}function Ro(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),a=e.split("/"),r=a[a.length-1];(r===".."||r===".")&&a.push("");let i=n.length-1,o,s;for(o=0;o<a.length;o++)if(s=a[o],s!==".")if(s==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+a.slice(o-(o===a.length?1:0)).join("/")}var ut;(function(e){e.pop="pop",e.push="push"})(ut||(ut={}));var ot;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ot||(ot={}));function No(e){if(!e)if(Ue){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ao(e)}const To=/^[^#]+#/;function Io(e,t){return e.replace(To,"#")+t}function Lo(e,t){const n=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-n.left-(t.left||0),top:a.top-n.top-(t.top||0)}}const Kt=()=>({left:window.pageXOffset,top:window.pageYOffset});function Mo(e){let t;if("el"in e){const n=e.el,a=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?a?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=Lo(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Aa(e,t){return(history.state?history.state.position-t:-1)+e}const On=new Map;function zo(e,t){On.set(e,t)}function Fo(e){const t=On.get(e);return On.delete(e),t}let Do=()=>location.protocol+"//"+location.host;function Br(e,t){const{pathname:n,search:a,hash:r}=t,i=e.indexOf("#");if(i>-1){let s=r.includes(e.slice(i))?e.slice(i).length:1,l=r.slice(s);return l[0]!=="/"&&(l="/"+l),Ea(l,"")}return Ea(n,e)+a+r}function jo(e,t,n,a){let r=[],i=[],o=null;const s=({state:d})=>{const m=Br(e,location),p=n.value,_=t.value;let O=0;if(d){if(n.value=m,t.value=d,o&&o===p){o=null;return}O=_?d.position-_.position:0}else a(m);r.forEach(y=>{y(n.value,p,{delta:O,type:ut.pop,direction:O?O>0?ot.forward:ot.back:ot.unknown})})};function l(){o=n.value}function u(d){r.push(d);const m=()=>{const p=r.indexOf(d);p>-1&&r.splice(p,1)};return i.push(m),m}function c(){const{history:d}=window;d.state&&d.replaceState(D({},d.state,{scroll:Kt()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:u,destroy:f}}function Oa(e,t,n,a=!1,r=!1){return{back:e,current:t,forward:n,replaced:a,position:window.history.length,scroll:r?Kt():null}}function Uo(e){const{history:t,location:n}=window,a={value:Br(e,n)},r={value:t.state};r.value||i(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,u,c){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+l:Do()+e+l;try{t[c?"replaceState":"pushState"](u,"",d),r.value=u}catch(m){console.error(m),n[c?"replace":"assign"](d)}}function o(l,u){const c=D({},t.state,Oa(r.value.back,l,r.value.forward,!0),u,{position:r.value.position});i(l,c,!0),a.value=l}function s(l,u){const c=D({},r.value,t.state,{forward:l,scroll:Kt()});i(c.current,c,!0);const f=D({},Oa(a.value,l,null),{position:c.position+1},u);i(l,f,!1),a.value=l}return{location:a,state:r,push:s,replace:o}}function qo(e){e=No(e);const t=Uo(e),n=jo(e,t.state,t.location,t.replace);function a(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=D({location:"",base:e,go:a,createHref:Io.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Bo(e){return typeof e=="string"||e&&typeof e=="object"}function $r(e){return typeof e=="string"||typeof e=="symbol"}const xe={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Hr=Symbol("");var Ca;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ca||(Ca={}));function Ke(e,t){return D(new Error,{type:e,[Hr]:!0},t)}function me(e,t){return e instanceof Error&&Hr in e&&(t==null||!!(e.type&t))}const Pa="[^/]+?",$o={sensitive:!1,strict:!1,start:!0,end:!0},Ho=/[.+*?^${}()[\]/\\]/g;function Vo(e,t){const n=D({},$o,t),a=[];let r=n.start?"^":"";const i=[];for(const u of e){const c=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const d=u[f];let m=40+(n.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(Ho,"\\$&"),m+=40;else if(d.type===1){const{value:p,repeatable:_,optional:O,regexp:y}=d;i.push({name:p,repeatable:_,optional:O});const v=y||Pa;if(v!==Pa){m+=10;try{new RegExp(`(${v})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${p}" (${v}): `+T.message)}}let w=_?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;f||(w=O&&u.length<2?`(?:/${w})`:"/"+w),O&&(w+="?"),r+=w,m+=20,O&&(m+=-8),_&&(m+=-20),v===".*"&&(m+=-50)}c.push(m)}a.push(c)}if(n.strict&&n.end){const u=a.length-1;a[u][a[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function s(u){const c=u.match(o),f={};if(!c)return null;for(let d=1;d<c.length;d++){const m=c[d]||"",p=i[d-1];f[p.name]=m&&p.repeatable?m.split("/"):m}return f}function l(u){let c="",f=!1;for(const d of e){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const m of d)if(m.type===0)c+=m.value;else if(m.type===1){const{value:p,repeatable:_,optional:O}=m,y=p in u?u[p]:"";if(le(y)&&!_)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const v=le(y)?y.join("/"):y;if(!v)if(O)d.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${p}"`);c+=v}}return c||"/"}return{re:o,score:a,keys:i,parse:s,stringify:l}}function Wo(e,t){let n=0;for(;n<e.length&&n<t.length;){const a=t[n]-e[n];if(a)return a;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Yo(e,t){let n=0;const a=e.score,r=t.score;for(;n<a.length&&n<r.length;){const i=Wo(a[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-a.length)===1){if(Ra(a))return 1;if(Ra(r))return-1}return r.length-a.length}function Ra(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ko={type:0,value:""},Go=/[a-zA-Z0-9_]/;function Jo(e){if(!e)return[[]];if(e==="/")return[[Ko]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,a=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let s=0,l,u="",c="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function d(){u+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){a=n,n=4;continue}switch(n){case 0:l==="/"?(u&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=a;break;case 1:l==="("?n=2:Go.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),o(),r}function Xo(e,t,n){const a=Vo(Jo(e.path),n),r=D(a,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Qo(e,t){const n=[],a=new Map;t=Ia({strict:!1,end:!0,sensitive:!1},t);function r(c){return a.get(c)}function i(c,f,d){const m=!d,p=Zo(c);p.aliasOf=d&&d.record;const _=Ia(t,c),O=[p];if("alias"in c){const w=typeof c.alias=="string"?[c.alias]:c.alias;for(const T of w)O.push(D({},p,{components:d?d.record.components:p.components,path:T,aliasOf:d?d.record:p}))}let y,v;for(const w of O){const{path:T}=w;if(f&&T[0]!=="/"){const P=f.record.path,F=P[P.length-1]==="/"?"":"/";w.path=f.record.path+(T&&F+T)}if(y=Xo(w,f,_),d?d.alias.push(y):(v=v||y,v!==y&&v.alias.push(y),m&&c.name&&!Ta(y)&&o(c.name)),p.children){const P=p.children;for(let F=0;F<P.length;F++)i(P[F],y,d&&d.children[F])}d=d||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&l(y)}return v?()=>{o(v)}:it}function o(c){if($r(c)){const f=a.get(c);f&&(a.delete(c),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(c);f>-1&&(n.splice(f,1),c.record.name&&a.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let f=0;for(;f<n.length&&Yo(c,n[f])>=0&&(c.record.path!==n[f].record.path||!Vr(c,n[f]));)f++;n.splice(f,0,c),c.record.name&&!Ta(c)&&a.set(c.record.name,c)}function u(c,f){let d,m={},p,_;if("name"in c&&c.name){if(d=a.get(c.name),!d)throw Ke(1,{location:c});_=d.record.name,m=D(Na(f.params,d.keys.filter(v=>!v.optional).map(v=>v.name)),c.params&&Na(c.params,d.keys.map(v=>v.name))),p=d.stringify(m)}else if("path"in c)p=c.path,d=n.find(v=>v.re.test(p)),d&&(m=d.parse(p),_=d.record.name);else{if(d=f.name?a.get(f.name):n.find(v=>v.re.test(f.path)),!d)throw Ke(1,{location:c,currentLocation:f});_=d.record.name,m=D({},f.params,c.params),p=d.stringify(m)}const O=[];let y=d;for(;y;)O.unshift(y.record),y=y.parent;return{name:_,path:p,params:m,matched:O,meta:ts(O)}}return e.forEach(c=>i(c)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:s,getRecordMatcher:r}}function Na(e,t){const n={};for(const a of t)a in e&&(n[a]=e[a]);return n}function Zo(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:es(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function es(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const a in e.components)t[a]=typeof n=="object"?n[a]:n;return t}function Ta(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ts(e){return e.reduce((t,n)=>D(t,n.meta),{})}function Ia(e,t){const n={};for(const a in e)n[a]=a in t?t[a]:e[a];return n}function Vr(e,t){return t.children.some(n=>n===e||Vr(e,n))}const Wr=/#/g,ns=/&/g,as=/\//g,rs=/=/g,is=/\?/g,Yr=/\+/g,os=/%5B/g,ss=/%5D/g,Kr=/%5E/g,ls=/%60/g,Gr=/%7B/g,cs=/%7C/g,Jr=/%7D/g,us=/%20/g;function ea(e){return encodeURI(""+e).replace(cs,"|").replace(os,"[").replace(ss,"]")}function fs(e){return ea(e).replace(Gr,"{").replace(Jr,"}").replace(Kr,"^")}function Cn(e){return ea(e).replace(Yr,"%2B").replace(us,"+").replace(Wr,"%23").replace(ns,"%26").replace(ls,"`").replace(Gr,"{").replace(Jr,"}").replace(Kr,"^")}function ds(e){return Cn(e).replace(rs,"%3D")}function ms(e){return ea(e).replace(Wr,"%23").replace(is,"%3F")}function ps(e){return e==null?"":ms(e).replace(as,"%2F")}function qt(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function hs(e){const t={};if(e===""||e==="?")return t;const a=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<a.length;++r){const i=a[r].replace(Yr," "),o=i.indexOf("="),s=qt(o<0?i:i.slice(0,o)),l=o<0?null:qt(i.slice(o+1));if(s in t){let u=t[s];le(u)||(u=t[s]=[u]),u.push(l)}else t[s]=l}return t}function La(e){let t="";for(let n in e){const a=e[n];if(n=ds(n),a==null){a!==void 0&&(t+=(t.length?"&":"")+n);continue}(le(a)?a.map(i=>i&&Cn(i)):[a&&Cn(a)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function vs(e){const t={};for(const n in e){const a=e[n];a!==void 0&&(t[n]=le(a)?a.map(r=>r==null?null:""+r):a==null?a:""+a)}return t}const gs=Symbol(""),Ma=Symbol(""),ta=Symbol(""),Xr=Symbol(""),Pn=Symbol("");function tt(){let e=[];function t(a){return e.push(a),()=>{const r=e.indexOf(a);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Oe(e,t,n,a,r){const i=a&&(a.enterCallbacks[r]=a.enterCallbacks[r]||[]);return()=>new Promise((o,s)=>{const l=f=>{f===!1?s(Ke(4,{from:n,to:t})):f instanceof Error?s(f):Bo(f)?s(Ke(2,{from:t,to:f})):(i&&a.enterCallbacks[r]===i&&typeof f=="function"&&i.push(f),o())},u=e.call(a&&a.instances[r],t,n,l);let c=Promise.resolve(u);e.length<3&&(c=c.then(l)),c.catch(f=>s(f))})}function pn(e,t,n,a){const r=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(ys(s)){const u=(s.__vccOpts||s)[t];u&&r.push(Oe(u,n,a,i,o))}else{let l=s();r.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const c=Eo(u)?u.default:u;i.components[o]=c;const d=(c.__vccOpts||c)[t];return d&&Oe(d,n,a,i,o)()}))}}return r}function ys(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function za(e){const t=He(ta),n=He(Xr),a=K(()=>t.resolve(te(e.to))),r=K(()=>{const{matched:l}=a.value,{length:u}=l,c=l[u-1],f=n.matched;if(!c||!f.length)return-1;const d=f.findIndex(Ye.bind(null,c));if(d>-1)return d;const m=Fa(l[u-2]);return u>1&&Fa(c)===m&&f[f.length-1].path!==m?f.findIndex(Ye.bind(null,l[u-2])):d}),i=K(()=>r.value>-1&&ks(n.params,a.value.params)),o=K(()=>r.value>-1&&r.value===n.matched.length-1&&qr(n.params,a.value.params));function s(l={}){return _s(l)?t[te(e.replace)?"replace":"push"](te(e.to)).catch(it):Promise.resolve()}return{route:a,href:K(()=>a.value.href),isActive:i,isExactActive:o,navigate:s}}const bs=Kn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:za,setup(e,{slots:t}){const n=gt(za(e)),{options:a}=He(ta),r=K(()=>({[Da(e.activeClass,a.linkActiveClass,"router-link-active")]:n.isActive,[Da(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Gn("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),ws=bs;function _s(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ks(e,t){for(const n in t){const a=t[n],r=e[n];if(typeof a=="string"){if(a!==r)return!1}else if(!le(r)||r.length!==a.length||a.some((i,o)=>i!==r[o]))return!1}return!0}function Fa(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Da=(e,t,n)=>e??t??n,xs=Kn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const a=He(Pn),r=K(()=>e.route||a.value),i=He(Ma,0),o=K(()=>{let u=te(i);const{matched:c}=r.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),s=K(()=>r.value.matched[o.value]);fn(Ma,K(()=>o.value+1)),fn(gs,s),fn(Pn,r);const l=X();return Ve(()=>[l.value,s.value,e.name],([u,c,f],[d,m,p])=>{c&&(c.instances[f]=u,m&&m!==c&&u&&u===d&&(c.leaveGuards.size||(c.leaveGuards=m.leaveGuards),c.updateGuards.size||(c.updateGuards=m.updateGuards))),u&&c&&(!m||!Ye(c,m)||!d)&&(c.enterCallbacks[f]||[]).forEach(_=>_(u))},{flush:"post"}),()=>{const u=r.value,c=e.name,f=s.value,d=f&&f.components[c];if(!d)return ja(n.default,{Component:d,route:u});const m=f.props[c],p=m?m===!0?u.params:typeof m=="function"?m(u):m:null,O=Gn(d,D({},p,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(f.instances[c]=null)},ref:l}));return ja(n.default,{Component:O,route:u})||O}}});function ja(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Es=xs;function Ss(e){const t=Qo(e.routes,e),n=e.parseQuery||hs,a=e.stringifyQuery||La,r=e.history,i=tt(),o=tt(),s=tt(),l=ro(xe);let u=xe;Ue&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=dn.bind(null,g=>""+g),f=dn.bind(null,ps),d=dn.bind(null,qt);function m(g,S){let x,C;return $r(g)?(x=t.getRecordMatcher(g),C=S):C=g,t.addRoute(C,x)}function p(g){const S=t.getRecordMatcher(g);S&&t.removeRoute(S)}function _(){return t.getRoutes().map(g=>g.record)}function O(g){return!!t.getRecordMatcher(g)}function y(g,S){if(S=D({},S||l.value),typeof g=="string"){const I=mn(n,g,S.path),Y=t.resolve({path:I.path},S),et=r.createHref(I.fullPath);return D(I,Y,{params:d(Y.params),hash:qt(I.hash),redirectedFrom:void 0,href:et})}let x;if("path"in g)x=D({},g,{path:mn(n,g.path,S.path).path});else{const I=D({},g.params);for(const Y in I)I[Y]==null&&delete I[Y];x=D({},g,{params:f(I)}),S.params=f(S.params)}const C=t.resolve(x,S),U=g.hash||"";C.params=c(d(C.params));const W=Oo(a,D({},g,{hash:fs(U),path:C.path})),L=r.createHref(W);return D({fullPath:W,hash:U,query:a===La?vs(g.query):g.query||{}},C,{redirectedFrom:void 0,href:L})}function v(g){return typeof g=="string"?mn(n,g,l.value.path):D({},g)}function w(g,S){if(u!==g)return Ke(8,{from:S,to:g})}function T(g){return q(g)}function P(g){return T(D(v(g),{replace:!0}))}function F(g){const S=g.matched[g.matched.length-1];if(S&&S.redirect){const{redirect:x}=S;let C=typeof x=="function"?x(g):x;return typeof C=="string"&&(C=C.includes("?")||C.includes("#")?C=v(C):{path:C},C.params={}),D({query:g.query,hash:g.hash,params:"path"in C?{}:g.params},C)}}function q(g,S){const x=u=y(g),C=l.value,U=g.state,W=g.force,L=g.replace===!0,I=F(x);if(I)return q(D(v(I),{state:typeof I=="object"?D({},U,I.state):U,force:W,replace:L}),S||x);const Y=x;Y.redirectedFrom=S;let et;return!W&&Co(a,C,x)&&(et=Ke(16,{to:Y,from:C}),wa(C,C,!0,!1)),(et?Promise.resolve(et):j(Y,C)).catch(Z=>me(Z)?me(Z,2)?Z:ln(Z):sn(Z,Y,C)).then(Z=>{if(Z){if(me(Z,2))return q(D({replace:L},v(Z.to),{state:typeof Z.to=="object"?D({},U,Z.to.state):U,force:W}),S||Y)}else Z=re(Y,C,!0,L,U);return ne(Y,C,Z),Z})}function z(g,S){const x=w(g,S);return x?Promise.reject(x):Promise.resolve()}function R(g){const S=Et.values().next().value;return S&&typeof S.runWithContext=="function"?S.runWithContext(g):g()}function j(g,S){let x;const[C,U,W]=As(g,S);x=pn(C.reverse(),"beforeRouteLeave",g,S);for(const I of C)I.leaveGuards.forEach(Y=>{x.push(Oe(Y,g,S))});const L=z.bind(null,g,S);return x.push(L),De(x).then(()=>{x=[];for(const I of i.list())x.push(Oe(I,g,S));return x.push(L),De(x)}).then(()=>{x=pn(U,"beforeRouteUpdate",g,S);for(const I of U)I.updateGuards.forEach(Y=>{x.push(Oe(Y,g,S))});return x.push(L),De(x)}).then(()=>{x=[];for(const I of W)if(I.beforeEnter)if(le(I.beforeEnter))for(const Y of I.beforeEnter)x.push(Oe(Y,g,S));else x.push(Oe(I.beforeEnter,g,S));return x.push(L),De(x)}).then(()=>(g.matched.forEach(I=>I.enterCallbacks={}),x=pn(W,"beforeRouteEnter",g,S),x.push(L),De(x))).then(()=>{x=[];for(const I of o.list())x.push(Oe(I,g,S));return x.push(L),De(x)}).catch(I=>me(I,8)?I:Promise.reject(I))}function ne(g,S,x){s.list().forEach(C=>R(()=>C(g,S,x)))}function re(g,S,x,C,U){const W=w(g,S);if(W)return W;const L=S===xe,I=Ue?history.state:{};x&&(C||L?r.replace(g.fullPath,D({scroll:L&&I&&I.scroll},U)):r.push(g.fullPath,U)),l.value=g,wa(g,S,x,L),ln()}let N;function Fe(){N||(N=r.listen((g,S,x)=>{if(!_a.listening)return;const C=y(g),U=F(C);if(U){q(D(U,{replace:!0}),C).catch(it);return}u=C;const W=l.value;Ue&&zo(Aa(W.fullPath,x.delta),Kt()),j(C,W).catch(L=>me(L,12)?L:me(L,2)?(q(L.to,C).then(I=>{me(I,20)&&!x.delta&&x.type===ut.pop&&r.go(-1,!1)}).catch(it),Promise.reject()):(x.delta&&r.go(-x.delta,!1),sn(L,C,W))).then(L=>{L=L||re(C,W,!1),L&&(x.delta&&!me(L,8)?r.go(-x.delta,!1):x.type===ut.pop&&me(L,20)&&r.go(-1,!1)),ne(C,W,L)}).catch(it)}))}let de=tt(),Q=tt(),xt;function sn(g,S,x){ln(g);const C=Q.list();return C.length?C.forEach(U=>U(g,S,x)):console.error(g),Promise.reject(g)}function Qi(){return xt&&l.value!==xe?Promise.resolve():new Promise((g,S)=>{de.add([g,S])})}function ln(g){return xt||(xt=!g,Fe(),de.list().forEach(([S,x])=>g?x(g):S()),de.reset()),g}function wa(g,S,x,C){const{scrollBehavior:U}=e;if(!Ue||!U)return Promise.resolve();const W=!x&&Fo(Aa(g.fullPath,0))||(C||!x)&&history.state&&history.state.scroll||null;return Or().then(()=>U(g,S,W)).then(L=>L&&Mo(L)).catch(L=>sn(L,g,S))}const cn=g=>r.go(g);let un;const Et=new Set,_a={currentRoute:l,listening:!0,addRoute:m,removeRoute:p,hasRoute:O,getRoutes:_,resolve:y,options:e,push:T,replace:P,go:cn,back:()=>cn(-1),forward:()=>cn(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:Q.add,isReady:Qi,install(g){const S=this;g.component("RouterLink",ws),g.component("RouterView",Es),g.config.globalProperties.$router=S,Object.defineProperty(g.config.globalProperties,"$route",{enumerable:!0,get:()=>te(l)}),Ue&&!un&&l.value===xe&&(un=!0,T(r.location).catch(U=>{}));const x={};for(const U in xe)Object.defineProperty(x,U,{get:()=>l.value[U],enumerable:!0});g.provide(ta,S),g.provide(Xr,io(x)),g.provide(Pn,l);const C=g.unmount;Et.add(g),g.unmount=function(){Et.delete(g),Et.size<1&&(u=xe,N&&N(),N=null,l.value=xe,un=!1,xt=!1),C()}}};function De(g){return g.reduce((S,x)=>S.then(()=>R(x)),Promise.resolve())}return _a}function As(e,t){const n=[],a=[],r=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(u=>Ye(u,s))?a.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(u=>Ye(u,l))||r.push(l))}return[n,a,r]}const Ua="hcaptcha-api-script-id",Qr="_hcaptchaOnLoad";let Rn,Zr;const hn=new Promise((e,t)=>{Rn=e,Zr=t});function Os(e){if(window.hcaptcha)return Rn(),hn;if(document.getElementById(Ua))return hn;window[Qr]=Rn;const t=Cs(e),n=document.createElement("script");return n.id=Ua,n.src=t,n.async=!0,n.defer=!0,n.onerror=a=>{console.error("Failed to load api: "+t,a),Zr("Failed to load api.js")},document.head.appendChild(n),hn}function Cs(e){let t=e.apiEndpoint;return t=pe(t,"render","explicit"),t=pe(t,"onload",Qr),t=pe(t,"recaptchacompat",e.reCaptchaCompat===!1?"off":null),t=pe(t,"hl",e.language),t=pe(t,"sentry",e.sentry),t=pe(t,"endpoint",e.endpoint),t=pe(t,"assethost",e.assethost),t=pe(t,"imghost",e.imghost),t=pe(t,"reportapi",e.reportapi),t}function pe(e,t,n){if(n!=null){const a=e.includes("?")?"&":"?";return e+a+t+"="+encodeURIComponent(n)}return e}var Ps=(e,t)=>{for(const[n,a]of t)e[n]=a;return e};const Rs={name:"VueHcaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String,default:void 0},size:{type:String,default:void 0},tabindex:{type:String,default:void 0},language:{type:String,default:void 0},reCaptchaCompat:{type:Boolean,default:!0},challengeContainer:{type:String,default:void 0},rqdata:{type:String,default:void 0},sentry:{type:Boolean,default:!0},apiEndpoint:{type:String,default:"https://hcaptcha.com/1/api.js"},endpoint:{type:String,default:void 0},reportapi:{type:String,default:void 0},assethost:{type:String,default:void 0},imghost:{type:String,default:void 0}},data:()=>({widgetId:null,hcaptcha:null,renderedCb:null}),mounted(){return Os(this.$props).then(this.onApiLoaded).catch(this.onError)},unmounted(){this.teardown()},destroyed(){this.teardown()},methods:{teardown(){this.widgetId&&(this.hcaptcha.reset(this.widgetId),this.hcaptcha.remove(this.widgetId))},onApiLoaded(){this.hcaptcha=window.hcaptcha;const e={sitekey:this.sitekey,theme:this.theme,size:this.size,tabindex:this.tabindex,callback:this.onVerify,"expired-callback":this.onExpired,"chalexpired-callback":this.onChallengeExpired,"error-callback":this.onError,"open-callback":this.onOpen,"close-callback":this.onClose};this.challengeContainer&&(e["challenge-container"]=this.challengeContainer),this.widgetId=this.hcaptcha.render(this.$el,e),this.rqdata&&this.hcaptcha.setData(this.widgetId,{rqdata:this.rqdata}),this.onRendered()},execute(){this.widgetId?(this.hcaptcha.execute(this.widgetId),this.onExecuted()):this.renderedCb=()=>{this.renderedCb=null,this.execute()}},executeAsync(){if(this.widgetId)return this.onExecuted(),this.hcaptcha.execute(this.widgetId,{async:!0});let e;const t=new Promise(n=>{e=n});return this.renderedCb=()=>{this.renderedCb=null,e()},t.then(this.executeAsync)},reset(){this.widgetId?(this.hcaptcha.reset(this.widgetId),this.onReset()):this.$emit("error","Element is not rendered yet and thus cannot reset it. Wait for `rendered` event to safely call reset.")},onRendered(){this.$emit("rendered"),this.renderedCb&&this.renderedCb()},onExecuted(){this.$emit("executed")},onReset(){this.$emit("reset")},onError(e){this.$emit("error",e),this.reset()},onVerify(){const e=this.hcaptcha.getResponse(this.widgetId),t=this.hcaptcha.getRespKey(this.widgetId);this.$emit("verify",e,t)},onExpired(){this.$emit("expired")},onChallengeExpired(){this.$emit("challengeExpired")},onOpen(){this.$emit("opened")},onClose(){this.$emit("closed")}}},Ns={id:"hcap-script"};function Ts(e,t,n,a,r,i){return se(),ze("div",Ns)}var Is=Ps(Rs,[["render",Ts]]);function ei(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ls}=Object.prototype,{getPrototypeOf:na}=Object,Gt=(e=>t=>{const n=Ls.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),fe=e=>(e=e.toLowerCase(),t=>Gt(t)===e),Jt=e=>t=>typeof t===e,{isArray:Qe}=Array,ft=Jt("undefined");function Ms(e){return e!==null&&!ft(e)&&e.constructor!==null&&!ft(e.constructor)&&ie(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ti=fe("ArrayBuffer");function zs(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ti(e.buffer),t}const Fs=Jt("string"),ie=Jt("function"),ni=Jt("number"),Xt=e=>e!==null&&typeof e=="object",Ds=e=>e===!0||e===!1,Mt=e=>{if(Gt(e)!=="object")return!1;const t=na(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},js=fe("Date"),Us=fe("File"),qs=fe("Blob"),Bs=fe("FileList"),$s=e=>Xt(e)&&ie(e.pipe),Hs=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||ie(e.append)&&((t=Gt(e))==="formdata"||t==="object"&&ie(e.toString)&&e.toString()==="[object FormData]"))},Vs=fe("URLSearchParams"),Ws=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function yt(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let a,r;if(typeof e!="object"&&(e=[e]),Qe(e))for(a=0,r=e.length;a<r;a++)t.call(null,e[a],a,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let s;for(a=0;a<o;a++)s=i[a],t.call(null,e[s],s,e)}}function ai(e,t){t=t.toLowerCase();const n=Object.keys(e);let a=n.length,r;for(;a-- >0;)if(r=n[a],t===r.toLowerCase())return r;return null}const ri=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),ii=e=>!ft(e)&&e!==ri;function Nn(){const{caseless:e}=ii(this)&&this||{},t={},n=(a,r)=>{const i=e&&ai(t,r)||r;Mt(t[i])&&Mt(a)?t[i]=Nn(t[i],a):Mt(a)?t[i]=Nn({},a):Qe(a)?t[i]=a.slice():t[i]=a};for(let a=0,r=arguments.length;a<r;a++)arguments[a]&&yt(arguments[a],n);return t}const Ys=(e,t,n,{allOwnKeys:a}={})=>(yt(t,(r,i)=>{n&&ie(r)?e[i]=ei(r,n):e[i]=r},{allOwnKeys:a}),e),Ks=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Gs=(e,t,n,a)=>{e.prototype=Object.create(t.prototype,a),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Js=(e,t,n,a)=>{let r,i,o;const s={};if(t=t||{},e==null)return t;do{for(r=Object.getOwnPropertyNames(e),i=r.length;i-- >0;)o=r[i],(!a||a(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&na(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Xs=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const a=e.indexOf(t,n);return a!==-1&&a===n},Qs=e=>{if(!e)return null;if(Qe(e))return e;let t=e.length;if(!ni(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Zs=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&na(Uint8Array)),el=(e,t)=>{const a=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=a.next())&&!r.done;){const i=r.value;t.call(e,i[0],i[1])}},tl=(e,t)=>{let n;const a=[];for(;(n=e.exec(t))!==null;)a.push(n);return a},nl=fe("HTMLFormElement"),al=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,a,r){return a.toUpperCase()+r}),qa=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),rl=fe("RegExp"),oi=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),a={};yt(n,(r,i)=>{t(r,i,e)!==!1&&(a[i]=r)}),Object.defineProperties(e,a)},il=e=>{oi(e,(t,n)=>{if(ie(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const a=e[n];if(ie(a)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ol=(e,t)=>{const n={},a=r=>{r.forEach(i=>{n[i]=!0})};return Qe(e)?a(e):a(String(e).split(t)),n},sl=()=>{},ll=(e,t)=>(e=+e,Number.isFinite(e)?e:t),vn="abcdefghijklmnopqrstuvwxyz",Ba="0123456789",si={DIGIT:Ba,ALPHA:vn,ALPHA_DIGIT:vn+vn.toUpperCase()+Ba},cl=(e=16,t=si.ALPHA_DIGIT)=>{let n="";const{length:a}=t;for(;e--;)n+=t[Math.random()*a|0];return n};function ul(e){return!!(e&&ie(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const fl=e=>{const t=new Array(10),n=(a,r)=>{if(Xt(a)){if(t.indexOf(a)>=0)return;if(!("toJSON"in a)){t[r]=a;const i=Qe(a)?[]:{};return yt(a,(o,s)=>{const l=n(o,r+1);!ft(l)&&(i[s]=l)}),t[r]=void 0,i}}return a};return n(e,0)},dl=fe("AsyncFunction"),ml=e=>e&&(Xt(e)||ie(e))&&ie(e.then)&&ie(e.catch),h={isArray:Qe,isArrayBuffer:ti,isBuffer:Ms,isFormData:Hs,isArrayBufferView:zs,isString:Fs,isNumber:ni,isBoolean:Ds,isObject:Xt,isPlainObject:Mt,isUndefined:ft,isDate:js,isFile:Us,isBlob:qs,isRegExp:rl,isFunction:ie,isStream:$s,isURLSearchParams:Vs,isTypedArray:Zs,isFileList:Bs,forEach:yt,merge:Nn,extend:Ys,trim:Ws,stripBOM:Ks,inherits:Gs,toFlatObject:Js,kindOf:Gt,kindOfTest:fe,endsWith:Xs,toArray:Qs,forEachEntry:el,matchAll:tl,isHTMLForm:nl,hasOwnProperty:qa,hasOwnProp:qa,reduceDescriptors:oi,freezeMethods:il,toObjectSet:ol,toCamelCase:al,noop:sl,toFiniteNumber:ll,findKey:ai,global:ri,isContextDefined:ii,ALPHABET:si,generateString:cl,isSpecCompliantForm:ul,toJSONObject:fl,isAsyncFn:dl,isThenable:ml};function M(e,t,n,a,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),a&&(this.request=a),r&&(this.response=r)}h.inherits(M,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:h.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const li=M.prototype,ci={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ci[e]={value:e}});Object.defineProperties(M,ci);Object.defineProperty(li,"isAxiosError",{value:!0});M.from=(e,t,n,a,r,i)=>{const o=Object.create(li);return h.toFlatObject(e,o,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),M.call(o,e.message,t,n,a,r),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const pl=null;function Tn(e){return h.isPlainObject(e)||h.isArray(e)}function ui(e){return h.endsWith(e,"[]")?e.slice(0,-2):e}function $a(e,t,n){return e?e.concat(t).map(function(r,i){return r=ui(r),!n&&i?"["+r+"]":r}).join(n?".":""):t}function hl(e){return h.isArray(e)&&!e.some(Tn)}const vl=h.toFlatObject(h,{},null,function(t){return/^is[A-Z]/.test(t)});function Qt(e,t,n){if(!h.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=h.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,O){return!h.isUndefined(O[_])});const a=n.metaTokens,r=n.visitor||c,i=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&h.isSpecCompliantForm(t);if(!h.isFunction(r))throw new TypeError("visitor must be a function");function u(p){if(p===null)return"";if(h.isDate(p))return p.toISOString();if(!l&&h.isBlob(p))throw new M("Blob is not supported. Use a Buffer instead.");return h.isArrayBuffer(p)||h.isTypedArray(p)?l&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function c(p,_,O){let y=p;if(p&&!O&&typeof p=="object"){if(h.endsWith(_,"{}"))_=a?_:_.slice(0,-2),p=JSON.stringify(p);else if(h.isArray(p)&&hl(p)||(h.isFileList(p)||h.endsWith(_,"[]"))&&(y=h.toArray(p)))return _=ui(_),y.forEach(function(w,T){!(h.isUndefined(w)||w===null)&&t.append(o===!0?$a([_],T,i):o===null?_:_+"[]",u(w))}),!1}return Tn(p)?!0:(t.append($a(O,_,i),u(p)),!1)}const f=[],d=Object.assign(vl,{defaultVisitor:c,convertValue:u,isVisitable:Tn});function m(p,_){if(!h.isUndefined(p)){if(f.indexOf(p)!==-1)throw Error("Circular reference detected in "+_.join("."));f.push(p),h.forEach(p,function(y,v){(!(h.isUndefined(y)||y===null)&&r.call(t,y,h.isString(v)?v.trim():v,_,d))===!0&&m(y,_?_.concat(v):[v])}),f.pop()}}if(!h.isObject(e))throw new TypeError("data must be an object");return m(e),t}function Ha(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(a){return t[a]})}function aa(e,t){this._pairs=[],e&&Qt(e,this,t)}const fi=aa.prototype;fi.append=function(t,n){this._pairs.push([t,n])};fi.toString=function(t){const n=t?function(a){return t.call(this,a,Ha)}:Ha;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function gl(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function di(e,t,n){if(!t)return e;const a=n&&n.encode||gl,r=n&&n.serialize;let i;if(r?i=r(t,n):i=h.isURLSearchParams(t)?t.toString():new aa(t,n).toString(a),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class yl{constructor(){this.handlers=[]}use(t,n,a){return this.handlers.push({fulfilled:t,rejected:n,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){h.forEach(this.handlers,function(a){a!==null&&t(a)})}}const Va=yl,mi={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},bl=typeof URLSearchParams<"u"?URLSearchParams:aa,wl=typeof FormData<"u"?FormData:null,_l=typeof Blob<"u"?Blob:null,kl=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),xl=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),ce={isBrowser:!0,classes:{URLSearchParams:bl,FormData:wl,Blob:_l},isStandardBrowserEnv:kl,isStandardBrowserWebWorkerEnv:xl,protocols:["http","https","file","blob","url","data"]};function El(e,t){return Qt(e,new ce.classes.URLSearchParams,Object.assign({visitor:function(n,a,r,i){return ce.isNode&&h.isBuffer(n)?(this.append(a,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Sl(e){return h.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Al(e){const t={},n=Object.keys(e);let a;const r=n.length;let i;for(a=0;a<r;a++)i=n[a],t[i]=e[i];return t}function pi(e){function t(n,a,r,i){let o=n[i++];const s=Number.isFinite(+o),l=i>=n.length;return o=!o&&h.isArray(r)?r.length:o,l?(h.hasOwnProp(r,o)?r[o]=[r[o],a]:r[o]=a,!s):((!r[o]||!h.isObject(r[o]))&&(r[o]=[]),t(n,a,r[o],i)&&h.isArray(r[o])&&(r[o]=Al(r[o])),!s)}if(h.isFormData(e)&&h.isFunction(e.entries)){const n={};return h.forEachEntry(e,(a,r)=>{t(Sl(a),r,n,0)}),n}return null}const Ol={"Content-Type":void 0};function Cl(e,t,n){if(h.isString(e))try{return(t||JSON.parse)(e),h.trim(e)}catch(a){if(a.name!=="SyntaxError")throw a}return(n||JSON.stringify)(e)}const Zt={transitional:mi,adapter:["xhr","http"],transformRequest:[function(t,n){const a=n.getContentType()||"",r=a.indexOf("application/json")>-1,i=h.isObject(t);if(i&&h.isHTMLForm(t)&&(t=new FormData(t)),h.isFormData(t))return r&&r?JSON.stringify(pi(t)):t;if(h.isArrayBuffer(t)||h.isBuffer(t)||h.isStream(t)||h.isFile(t)||h.isBlob(t))return t;if(h.isArrayBufferView(t))return t.buffer;if(h.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(a.indexOf("application/x-www-form-urlencoded")>-1)return El(t,this.formSerializer).toString();if((s=h.isFileList(t))||a.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Qt(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||r?(n.setContentType("application/json",!1),Cl(t)):t}],transformResponse:[function(t){const n=this.transitional||Zt.transitional,a=n&&n.forcedJSONParsing,r=this.responseType==="json";if(t&&h.isString(t)&&(a&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(t)}catch(s){if(o)throw s.name==="SyntaxError"?M.from(s,M.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ce.classes.FormData,Blob:ce.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};h.forEach(["delete","get","head"],function(t){Zt.headers[t]={}});h.forEach(["post","put","patch"],function(t){Zt.headers[t]=h.merge(Ol)});const ra=Zt,Pl=h.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Rl=e=>{const t={};let n,a,r;return e&&e.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),a=o.substring(r+1).trim(),!(!n||t[n]&&Pl[n])&&(n==="set-cookie"?t[n]?t[n].push(a):t[n]=[a]:t[n]=t[n]?t[n]+", "+a:a)}),t},Wa=Symbol("internals");function nt(e){return e&&String(e).trim().toLowerCase()}function zt(e){return e===!1||e==null?e:h.isArray(e)?e.map(zt):String(e)}function Nl(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let a;for(;a=n.exec(e);)t[a[1]]=a[2];return t}const Tl=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function gn(e,t,n,a,r){if(h.isFunction(a))return a.call(this,t,n);if(r&&(t=n),!!h.isString(t)){if(h.isString(a))return t.indexOf(a)!==-1;if(h.isRegExp(a))return a.test(t)}}function Il(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,a)=>n.toUpperCase()+a)}function Ll(e,t){const n=h.toCamelCase(" "+t);["get","set","has"].forEach(a=>{Object.defineProperty(e,a+n,{value:function(r,i,o){return this[a].call(this,t,r,i,o)},configurable:!0})})}class en{constructor(t){t&&this.set(t)}set(t,n,a){const r=this;function i(s,l,u){const c=nt(l);if(!c)throw new Error("header name must be a non-empty string");const f=h.findKey(r,c);(!f||r[f]===void 0||u===!0||u===void 0&&r[f]!==!1)&&(r[f||l]=zt(s))}const o=(s,l)=>h.forEach(s,(u,c)=>i(u,c,l));return h.isPlainObject(t)||t instanceof this.constructor?o(t,n):h.isString(t)&&(t=t.trim())&&!Tl(t)?o(Rl(t),n):t!=null&&i(n,t,a),this}get(t,n){if(t=nt(t),t){const a=h.findKey(this,t);if(a){const r=this[a];if(!n)return r;if(n===!0)return Nl(r);if(h.isFunction(n))return n.call(this,r,a);if(h.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=nt(t),t){const a=h.findKey(this,t);return!!(a&&this[a]!==void 0&&(!n||gn(this,this[a],a,n)))}return!1}delete(t,n){const a=this;let r=!1;function i(o){if(o=nt(o),o){const s=h.findKey(a,o);s&&(!n||gn(a,a[s],s,n))&&(delete a[s],r=!0)}}return h.isArray(t)?t.forEach(i):i(t),r}clear(t){const n=Object.keys(this);let a=n.length,r=!1;for(;a--;){const i=n[a];(!t||gn(this,this[i],i,t,!0))&&(delete this[i],r=!0)}return r}normalize(t){const n=this,a={};return h.forEach(this,(r,i)=>{const o=h.findKey(a,i);if(o){n[o]=zt(r),delete n[i];return}const s=t?Il(i):String(i).trim();s!==i&&delete n[i],n[s]=zt(r),a[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return h.forEach(this,(a,r)=>{a!=null&&a!==!1&&(n[r]=t&&h.isArray(a)?a.join(", "):a)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const a=new this(t);return n.forEach(r=>a.set(r)),a}static accessor(t){const a=(this[Wa]=this[Wa]={accessors:{}}).accessors,r=this.prototype;function i(o){const s=nt(o);a[s]||(Ll(r,o),a[s]=!0)}return h.isArray(t)?t.forEach(i):i(t),this}}en.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);h.freezeMethods(en.prototype);h.freezeMethods(en);const ge=en;function yn(e,t){const n=this||ra,a=t||n,r=ge.from(a.headers);let i=a.data;return h.forEach(e,function(s){i=s.call(n,i,r.normalize(),t?t.status:void 0)}),r.normalize(),i}function hi(e){return!!(e&&e.__CANCEL__)}function bt(e,t,n){M.call(this,e??"canceled",M.ERR_CANCELED,t,n),this.name="CanceledError"}h.inherits(bt,M,{__CANCEL__:!0});function Ml(e,t,n){const a=n.config.validateStatus;!n.status||!a||a(n.status)?e(n):t(new M("Request failed with status code "+n.status,[M.ERR_BAD_REQUEST,M.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const zl=ce.isStandardBrowserEnv?function(){return{write:function(n,a,r,i,o,s){const l=[];l.push(n+"="+encodeURIComponent(a)),h.isNumber(r)&&l.push("expires="+new Date(r).toGMTString()),h.isString(i)&&l.push("path="+i),h.isString(o)&&l.push("domain="+o),s===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const a=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Fl(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Dl(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function vi(e,t){return e&&!Fl(t)?Dl(e,t):t}const jl=ce.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let a;function r(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return a=r(window.location.href),function(o){const s=h.isString(o)?r(o):o;return s.protocol===a.protocol&&s.host===a.host}}():function(){return function(){return!0}}();function Ul(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function ql(e,t){e=e||10;const n=new Array(e),a=new Array(e);let r=0,i=0,o;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=a[i];o||(o=u),n[r]=l,a[r]=u;let f=i,d=0;for(;f!==r;)d+=n[f++],f=f%e;if(r=(r+1)%e,r===i&&(i=(i+1)%e),u-o<t)return;const m=c&&u-c;return m?Math.round(d*1e3/m):void 0}}function Ya(e,t){let n=0;const a=ql(50,250);return r=>{const i=r.loaded,o=r.lengthComputable?r.total:void 0,s=i-n,l=a(s),u=i<=o;n=i;const c={loaded:i,total:o,progress:o?i/o:void 0,bytes:s,rate:l||void 0,estimated:l&&o&&u?(o-i)/l:void 0,event:r};c[t?"download":"upload"]=!0,e(c)}}const Bl=typeof XMLHttpRequest<"u",$l=Bl&&function(e){return new Promise(function(n,a){let r=e.data;const i=ge.from(e.headers).normalize(),o=e.responseType;let s;function l(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}h.isFormData(r)&&(ce.isStandardBrowserEnv||ce.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(e.auth){const m=e.auth.username||"",p=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(m+":"+p))}const c=vi(e.baseURL,e.url);u.open(e.method.toUpperCase(),di(c,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function f(){if(!u)return;const m=ge.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),_={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:m,config:e,request:u};Ml(function(y){n(y),l()},function(y){a(y),l()},_),u=null}if("onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(f)},u.onabort=function(){u&&(a(new M("Request aborted",M.ECONNABORTED,e,u)),u=null)},u.onerror=function(){a(new M("Network Error",M.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let p=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const _=e.transitional||mi;e.timeoutErrorMessage&&(p=e.timeoutErrorMessage),a(new M(p,_.clarifyTimeoutError?M.ETIMEDOUT:M.ECONNABORTED,e,u)),u=null},ce.isStandardBrowserEnv){const m=(e.withCredentials||jl(c))&&e.xsrfCookieName&&zl.read(e.xsrfCookieName);m&&i.set(e.xsrfHeaderName,m)}r===void 0&&i.setContentType(null),"setRequestHeader"in u&&h.forEach(i.toJSON(),function(p,_){u.setRequestHeader(_,p)}),h.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),o&&o!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Ya(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Ya(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=m=>{u&&(a(!m||m.type?new bt(null,e,u):m),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const d=Ul(c);if(d&&ce.protocols.indexOf(d)===-1){a(new M("Unsupported protocol "+d+":",M.ERR_BAD_REQUEST,e));return}u.send(r||null)})},Ft={http:pl,xhr:$l};h.forEach(Ft,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Hl={getAdapter:e=>{e=h.isArray(e)?e:[e];const{length:t}=e;let n,a;for(let r=0;r<t&&(n=e[r],!(a=h.isString(n)?Ft[n.toLowerCase()]:n));r++);if(!a)throw a===!1?new M(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(h.hasOwnProp(Ft,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!h.isFunction(a))throw new TypeError("adapter is not a function");return a},adapters:Ft};function bn(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new bt(null,e)}function Ka(e){return bn(e),e.headers=ge.from(e.headers),e.data=yn.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Hl.getAdapter(e.adapter||ra.adapter)(e).then(function(a){return bn(e),a.data=yn.call(e,e.transformResponse,a),a.headers=ge.from(a.headers),a},function(a){return hi(a)||(bn(e),a&&a.response&&(a.response.data=yn.call(e,e.transformResponse,a.response),a.response.headers=ge.from(a.response.headers))),Promise.reject(a)})}const Ga=e=>e instanceof ge?e.toJSON():e;function Ge(e,t){t=t||{};const n={};function a(u,c,f){return h.isPlainObject(u)&&h.isPlainObject(c)?h.merge.call({caseless:f},u,c):h.isPlainObject(c)?h.merge({},c):h.isArray(c)?c.slice():c}function r(u,c,f){if(h.isUndefined(c)){if(!h.isUndefined(u))return a(void 0,u,f)}else return a(u,c,f)}function i(u,c){if(!h.isUndefined(c))return a(void 0,c)}function o(u,c){if(h.isUndefined(c)){if(!h.isUndefined(u))return a(void 0,u)}else return a(void 0,c)}function s(u,c,f){if(f in t)return a(u,c);if(f in e)return a(void 0,u)}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(u,c)=>r(Ga(u),Ga(c),!0)};return h.forEach(Object.keys(Object.assign({},e,t)),function(c){const f=l[c]||r,d=f(e[c],t[c],c);h.isUndefined(d)&&f!==s||(n[c]=d)}),n}const gi="1.4.0",ia={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ia[e]=function(a){return typeof a===e||"a"+(t<1?"n ":" ")+e}});const Ja={};ia.transitional=function(t,n,a){function r(i,o){return"[Axios v"+gi+"] Transitional option '"+i+"'"+o+(a?". "+a:"")}return(i,o,s)=>{if(t===!1)throw new M(r(o," has been removed"+(n?" in "+n:"")),M.ERR_DEPRECATED);return n&&!Ja[o]&&(Ja[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,s):!0}};function Vl(e,t,n){if(typeof e!="object")throw new M("options must be an object",M.ERR_BAD_OPTION_VALUE);const a=Object.keys(e);let r=a.length;for(;r-- >0;){const i=a[r],o=t[i];if(o){const s=e[i],l=s===void 0||o(s,i,e);if(l!==!0)throw new M("option "+i+" must be "+l,M.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new M("Unknown option "+i,M.ERR_BAD_OPTION)}}const In={assertOptions:Vl,validators:ia},Ee=In.validators;class Bt{constructor(t){this.defaults=t,this.interceptors={request:new Va,response:new Va}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Ge(this.defaults,n);const{transitional:a,paramsSerializer:r,headers:i}=n;a!==void 0&&In.assertOptions(a,{silentJSONParsing:Ee.transitional(Ee.boolean),forcedJSONParsing:Ee.transitional(Ee.boolean),clarifyTimeoutError:Ee.transitional(Ee.boolean)},!1),r!=null&&(h.isFunction(r)?n.paramsSerializer={serialize:r}:In.assertOptions(r,{encode:Ee.function,serialize:Ee.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&h.merge(i.common,i[n.method]),o&&h.forEach(["delete","get","head","post","put","patch","common"],p=>{delete i[p]}),n.headers=ge.concat(o,i);const s=[];let l=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(n)===!1||(l=l&&_.synchronous,s.unshift(_.fulfilled,_.rejected))});const u=[];this.interceptors.response.forEach(function(_){u.push(_.fulfilled,_.rejected)});let c,f=0,d;if(!l){const p=[Ka.bind(this),void 0];for(p.unshift.apply(p,s),p.push.apply(p,u),d=p.length,c=Promise.resolve(n);f<d;)c=c.then(p[f++],p[f++]);return c}d=s.length;let m=n;for(f=0;f<d;){const p=s[f++],_=s[f++];try{m=p(m)}catch(O){_.call(this,O);break}}try{c=Ka.call(this,m)}catch(p){return Promise.reject(p)}for(f=0,d=u.length;f<d;)c=c.then(u[f++],u[f++]);return c}getUri(t){t=Ge(this.defaults,t);const n=vi(t.baseURL,t.url);return di(n,t.params,t.paramsSerializer)}}h.forEach(["delete","get","head","options"],function(t){Bt.prototype[t]=function(n,a){return this.request(Ge(a||{},{method:t,url:n,data:(a||{}).data}))}});h.forEach(["post","put","patch"],function(t){function n(a){return function(i,o,s){return this.request(Ge(s||{},{method:t,headers:a?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Bt.prototype[t]=n(),Bt.prototype[t+"Form"]=n(!0)});const Dt=Bt;class oa{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const a=this;this.promise.then(r=>{if(!a._listeners)return;let i=a._listeners.length;for(;i-- >0;)a._listeners[i](r);a._listeners=null}),this.promise.then=r=>{let i;const o=new Promise(s=>{a.subscribe(s),i=s}).then(r);return o.cancel=function(){a.unsubscribe(i)},o},t(function(i,o,s){a.reason||(a.reason=new bt(i,o,s),n(a.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new oa(function(r){t=r}),cancel:t}}}const Wl=oa;function Yl(e){return function(n){return e.apply(null,n)}}function Kl(e){return h.isObject(e)&&e.isAxiosError===!0}const Ln={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ln).forEach(([e,t])=>{Ln[t]=e});const Gl=Ln;function yi(e){const t=new Dt(e),n=ei(Dt.prototype.request,t);return h.extend(n,Dt.prototype,t,{allOwnKeys:!0}),h.extend(n,t,null,{allOwnKeys:!0}),n.create=function(r){return yi(Ge(e,r))},n}const G=yi(ra);G.Axios=Dt;G.CanceledError=bt;G.CancelToken=Wl;G.isCancel=hi;G.VERSION=gi;G.toFormData=Qt;G.AxiosError=M;G.Cancel=G.CanceledError;G.all=function(t){return Promise.all(t)};G.spread=Yl;G.isAxiosError=Kl;G.mergeConfig=Ge;G.AxiosHeaders=ge;G.formToJSON=e=>pi(h.isHTMLForm(e)?new FormData(e):e);G.HttpStatusCode=Gl;G.default=G;const st=G,Jl=Ur("loginStatus",()=>({isAuthenticated:X(!1)}));const Xl=e=>(Pr("data-v-9f6f0888"),e=e(),Rr(),e),Ql={class:"login-container"},Zl=Xl(()=>ve("h1",{class:"login-title"},"Welcome to Fei Yang",-1)),ec="10000000-ffff-ffff-ffff-000000000001",tc={__name:"login-1",setup(e){const t=Jl(),n=X(null),a=gt({username:"",password:"",token:""});function r(s){console.log(s),a.token=s}function i(){console.log(JSON.stringify(a)),a.username==""||a.password==""?n.value.textContent="请将用户名和密码填写完整！":a.token==""?n.value.textContent="请通过验证！":(n.value.textContent="",st.post("/login",a).then(function(s){const{captchaValid:l,accountValid:u,token:c}=s.data;l==="true"?n.value.textContent="":n.value.textContent="验证失败，请重试",u==="true"?n.value.textContent="":n.value.textContent="账号或者密码错误，请重试",l==="true"&&u==="true"&&c?(localStorage.setItem("jwtToken",c),t.isAuthenticated="true",Mn.push("/main")):console.log("token为空！"),console.log(s)}).catch(function(s){console.log(s)}))}function o(){Mn.push("/main")}return(s,l)=>{const u=Xn,c=Qn,f=Cr,d=Jn;return se(),ze("div",Ql,[b(d,{class:"login-form",model:a},{default:k(()=>[Zl,b(c,{label:"用户名"},{default:k(()=>[b(u,{modelValue:a.username,"onUpdate:modelValue":l[0]||(l[0]=m=>a.username=m)},null,8,["modelValue"])]),_:1}),b(c,{label:"密码"},{default:k(()=>[b(u,{modelValue:a.password,"onUpdate:modelValue":l[1]||(l[1]=m=>a.password=m)},null,8,["modelValue"])]),_:1}),b(te(Is),{sitekey:ec,onVerify:r}),b(c,null,{default:k(()=>[b(f,{type:"primary",onClick:i},{default:k(()=>[B("登录")]),_:1})]),_:1}),b(c,null,{default:k(()=>[b(f,{type:"primary",onClick:o},{default:k(()=>[B("去主界面（test）")]),_:1})]),_:1}),ve("p",{ref_key:"info",ref:n,class:"warning"},null,512)]),_:1},8,["model"])])}}},nc=Xe(tc,[["__scopeId","data-v-9f6f0888"]]),ac={__name:"Test",setup(e){const t=gt({name:""});return(n,a)=>{const r=Xn,i=Qn,o=Jn;return se(),ze(Zn,null,[B(" 123 "),b(o,{model:t},{default:k(()=>[b(i,{label:"Activity name"},{default:k(()=>[b(r,{modelValue:t.name,"onUpdate:modelValue":a[0]||(a[0]=s=>t.name=s)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])],64)}}};function bi(e){const t=K(()=>e.value.length),n=X(10);Ve(()=>n.value,i=>{n.value=i});const a=X(1);Ve(()=>a.value,i=>{a.value=i});const r=K(()=>{const i=(a.value-1)*n.value,o=i+n.value;return e.value.slice(i,o)});return{total:t,pageSize:n,currentPage:a,currentPageData:r}}const rc={class:"pagination-block"},ic={__name:"usersTable",setup(e){const t=X([]);oo(()=>{st.post("/getUsers").then(function(o){t.value=o.data,console.log(o)}).catch(function(o){console.log(o)})});const{total:n,pageSize:a,currentPage:r,currentPageData:i}=bi(t);return(o,s)=>{const l=Ir,u=Nr,c=Tr;return se(),ze(Zn,null,[b(u,{data:te(i),style:{width:"100%"}},{default:k(()=>[b(l,{prop:"user_id",label:"用户ID"}),b(l,{prop:"username",label:"用户名"}),b(l,{prop:"phone_no",label:"电话号码"}),b(l,{prop:"qq_no",label:"QQ号码"})]),_:1},8,["data"]),ve("div",rc,[b(c,{layout:" sizes, prev, pager, next, jumper, total",total:te(n),"page-size":te(a),"onUpdate:pageSize":s[0]||(s[0]=f=>Ce(a)?a.value=f:null),"current-page":te(r),"onUpdate:currentPage":s[1]||(s[1]=f=>Ce(r)?r.value=f:null)},null,8,["total","page-size","current-page"])])],64)}}},oc=[{technician_id:"1",realname:"Ruby Schmidt",nickname:"Ruby Schmidt",phone_no:"(121) 876 3922",qq_no:"S9byHlGf1d"},{technician_id:"10",realname:"Morita Rena",nickname:"Morita Rena",phone_no:"312-129-6394",qq_no:"ZKLdnz3s71"},{technician_id:"11",realname:"Kwan Sze Kwan",nickname:"Kwan Sze Kwan",phone_no:"7194 412406",qq_no:"q0B6S3C6gg"},{technician_id:"12",realname:"Yamaguchi Yuna",nickname:"Yamaguchi Yuna",phone_no:"213-309-4672",qq_no:"OwfmUrxj4Y"},{technician_id:"13",realname:"Kathy Garcia",nickname:"Kathy Garcia",phone_no:"140-3654-8943",qq_no:"XiQ8etqx6S"},{technician_id:"14",realname:"Ueno Ayato",nickname:"Ueno Ayato",phone_no:"614-944-8734",qq_no:"Ckaim8zlix"},{technician_id:"15",realname:"Sheila Griffin",nickname:"Sheila Griffin",phone_no:"74-838-7766",qq_no:"owgcIYusCH"},{technician_id:"16",realname:"Ng Cho Yee",nickname:"Ng Cho Yee",phone_no:"3-2449-8003",qq_no:"WIhV148nnE"},{technician_id:"17",realname:"Bryan Sanders",nickname:"Bryan Sanders",phone_no:"28-255-7849",qq_no:"ZmibG0UxQk"},{technician_id:"18",realname:"Shing Hok Yau",nickname:"Shing Hok Yau",phone_no:"70-5762-1348",qq_no:"OnQYZOIbam"},{technician_id:"19",realname:"Marjorie Bailey",nickname:"Marjorie Bailey",phone_no:"(1865) 12 5007",qq_no:"gb5lqevWsz"},{technician_id:"2",realname:"He Xiuying",nickname:"He Xiuying",phone_no:"80-5298-8509",qq_no:"0lxHVrKoGz"},{technician_id:"20",realname:"Okamoto Sara",nickname:"Okamoto Sara",phone_no:"330-060-8038",qq_no:"60BzBPXW8d"},{technician_id:"21",realname:"Cheng Shihan",nickname:"Cheng Shihan",phone_no:"166-8178-3373",qq_no:"eLRlW5WRzO"},{technician_id:"22",realname:"Heung Chun Yu",nickname:"Heung Chun Yu",phone_no:"20-217-2225",qq_no:"mOqqRuDPN0"},{technician_id:"23",realname:"Qin Rui",nickname:"Qin Rui",phone_no:"66-950-4680",qq_no:"JmaJ7a05tA"},{technician_id:"24",realname:"Margaret King",nickname:"Margaret King",phone_no:"(151) 735 7685",qq_no:"3pNgd92f5U"},{technician_id:"25",realname:"Yamada Airi",nickname:"Yamada Airi",phone_no:"614-401-3402",qq_no:"wV12CRwy16"},{technician_id:"26",realname:"Jose Walker",nickname:"Jose Walker",phone_no:"312-941-4100",qq_no:"VZ6cSkraMX"},{technician_id:"27",realname:"Judith Brown",nickname:"Judith Brown",phone_no:"213-850-0310",qq_no:"tpSD37D8E3"},{technician_id:"28",realname:"Louise Wagner",nickname:"Louise Wagner",phone_no:"330-857-0803",qq_no:"G6pUaxCJ0j"},{technician_id:"29",realname:"Wei Rui",nickname:"Wei Rui",phone_no:"614-938-9111",qq_no:"l0Q4XR0dAf"},{technician_id:"3",realname:"Miu Ka Ming",nickname:"Miu Ka Ming",phone_no:"74-131-2544",qq_no:"u6PaUi9kFb"},{technician_id:"30",realname:"Nicholas Tucker",nickname:"Nicholas Tucker",phone_no:"(151) 354 6718",qq_no:"9ONvpCT78v"},{technician_id:"4",realname:"Tian Anqi",nickname:"Tian Anqi",phone_no:"176-6850-7695",qq_no:"6d5lF06rdE"},{technician_id:"5",realname:"Hsuan Ka Ming",nickname:"Hsuan Ka Ming",phone_no:"28-5867-7389",qq_no:"3ovQ5v8SA8"},{technician_id:"6",realname:"Gao Anqi",nickname:"Gao Anqi",phone_no:"196-8865-1100",qq_no:"VhHLTSnMqo"},{technician_id:"7",realname:"Judith Miller",nickname:"Judith Miller",phone_no:"614-692-8390",qq_no:"YjKblpKaW5"},{technician_id:"8",realname:"Sakamoto Ayano",nickname:"Sakamoto Ayano",phone_no:"74-593-4412",qq_no:"mfek7nKMlE"},{technician_id:"9",realname:"Sara Torres",nickname:"Sara Torres",phone_no:"(121) 075 6908",qq_no:"3aUT0PtaO4"}];const wi=e=>(Pr("data-v-1473a7be"),e=e(),Rr(),e),sc={class:"dialog-footer"},lc=wi(()=>ve("p",null,"123",-1)),cc={class:"dialog-footer"},uc=wi(()=>ve("span",null,"确定要删除该技术员信息吗？",-1)),fc={class:"dialog-footer"},dc={__name:"techniciansTable",setup(e){const t=X([]);t.value=oc;const{total:n,pageSize:a,currentPage:r,currentPageData:i}=bi(t),o=gt({technician_id:"",realname:"",nickname:"",phone_no:"",qq_no:""}),s=X(!1);function l(){s.value=!0,Object.keys(o).forEach(v=>{o[v]=""})}function u(){s.value=!1,st.post("/addTechnician",o).catch(v=>{console.log(v)})}function c(v){}const f=X(!1);function d(v){Object.keys(o).forEach(w=>{o[w]=v.row[w]}),f.value=!0}function m(){f.value=!1,st.post("/updateTechnician",o).catch(v=>{console.log(v)})}const p=X(!1);var _="";function O(v){p.value=!0,_=v.row.technician_id}function y(){p.value=!1,st.post("/deleteTechnician",_).catch(v=>{console.log(v)})}return(v,w)=>{const T=We("font-awesome-icon"),P=Cr,F=Ir,q=Nr,z=Tr,R=Xn,j=Qn,ne=Jn,re=so;return se(),ze(Zn,null,[ve("span",null,[b(P,{type:"primary",onClick:l},{default:k(()=>[b(T,{icon:"fa-solid fa-plus",class:"icon"}),B("添加新技术员")]),_:1})]),b(q,{data:te(i),style:{width:"100%"}},{default:k(()=>[b(F,{prop:"technician_id",label:"技术员编号"}),b(F,{prop:"realname",label:"真实姓名"}),b(F,{prop:"nickname",label:"昵称"}),b(F,{prop:"phone_no",label:"电话号码"}),b(F,{prop:"qq_no",label:"QQ号码"}),b(F,{fixed:"right",label:"操作"},{default:k(N=>[b(P,{link:"",type:"primary",size:"small",onClick:Fe=>void 0},{default:k(()=>[B("查看详细")]),_:2},1032,["onClick"]),b(P,{link:"",type:"primary",size:"small",onClick:Fe=>d(N)},{default:k(()=>[B("编辑")]),_:2},1032,["onClick"]),b(P,{link:"",type:"primary",size:"small",onClick:Fe=>O(N)},{default:k(()=>[B("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),b(z,{layout:" sizes, prev, pager, next, jumper, total",total:te(n),"page-size":te(a),"onUpdate:pageSize":w[0]||(w[0]=N=>Ce(a)?a.value=N:null),"current-page":te(r),"onUpdate:currentPage":w[1]||(w[1]=N=>Ce(r)?r.value=N:null)},null,8,["total","page-size","current-page"]),b(re,{modelValue:s.value,"onUpdate:modelValue":w[8]||(w[8]=N=>s.value=N),title:"添加新技术员",width:"50%"},{footer:k(()=>[ve("span",sc,[b(P,{onClick:w[7]||(w[7]=N=>s.value=!1)},{default:k(()=>[B("取消")]),_:1}),b(P,{type:"primary",onClick:u},{default:k(()=>[B(" 提交 ")]),_:1})])]),default:k(()=>[b(ne,{model:o,"label-width":"120px","label-position":"left"},{default:k(()=>[b(j,{label:"技术员编号"},{default:k(()=>[b(R,{modelValue:o.technician_id,"onUpdate:modelValue":w[2]||(w[2]=N=>o.technician_id=N)},null,8,["modelValue"])]),_:1}),b(j,{label:"真实姓名"},{default:k(()=>[b(R,{modelValue:o.realname,"onUpdate:modelValue":w[3]||(w[3]=N=>o.realname=N)},null,8,["modelValue"])]),_:1}),b(j,{label:"昵称"},{default:k(()=>[b(R,{modelValue:o.nickname,"onUpdate:modelValue":w[4]||(w[4]=N=>o.nickname=N)},null,8,["modelValue"])]),_:1}),b(j,{label:"电话号码"},{default:k(()=>[b(R,{modelValue:o.phone_no,"onUpdate:modelValue":w[5]||(w[5]=N=>o.phone_no=N)},null,8,["modelValue"])]),_:1}),b(j,{label:"QQ号码"},{default:k(()=>[b(R,{modelValue:o.qq_no,"onUpdate:modelValue":w[6]||(w[6]=N=>o.qq_no=N)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),b(re,{modelValue:f.value,"onUpdate:modelValue":w[15]||(w[15]=N=>f.value=N),title:"修改信息",width:"50%"},{footer:k(()=>[ve("span",cc,[b(P,{onClick:w[14]||(w[14]=N=>f.value=!1)},{default:k(()=>[B("取消")]),_:1}),b(P,{type:"primary",onClick:m},{default:k(()=>[B(" 确认 ")]),_:1})])]),default:k(()=>[lc,b(ne,{model:o},{default:k(()=>[b(j,{label:"技术员编号"},{default:k(()=>[b(R,{modelValue:o.technician_id,"onUpdate:modelValue":w[9]||(w[9]=N=>o.technician_id=N),disabled:""},null,8,["modelValue"])]),_:1}),b(j,{label:"技术员姓名"},{default:k(()=>[b(R,{modelValue:o.realname,"onUpdate:modelValue":w[10]||(w[10]=N=>o.realname=N),disabled:""},null,8,["modelValue"])]),_:1}),b(j,{label:"昵称"},{default:k(()=>[b(R,{modelValue:o.nickname,"onUpdate:modelValue":w[11]||(w[11]=N=>o.nickname=N)},null,8,["modelValue"])]),_:1}),b(j,{label:"电话号码"},{default:k(()=>[b(R,{modelValue:o.phone_no,"onUpdate:modelValue":w[12]||(w[12]=N=>o.phone_no=N)},null,8,["modelValue"])]),_:1}),b(j,{label:"QQ号码"},{default:k(()=>[b(R,{modelValue:o.qq_no,"onUpdate:modelValue":w[13]||(w[13]=N=>o.qq_no=N)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),b(re,{modelValue:p.value,"onUpdate:modelValue":w[17]||(w[17]=N=>p.value=N),title:"Tips",width:"30%"},{footer:k(()=>[ve("span",fc,[b(P,{onClick:w[16]||(w[16]=N=>p.value=!1)},{default:k(()=>[B("取消")]),_:1}),b(P,{type:"primary",onClick:y},{default:k(()=>[B(" 确认 ")]),_:1})])]),default:k(()=>[uc]),_:1},8,["modelValue"])],64)}}},mc=Xe(dc,[["__scopeId","data-v-1473a7be"]]),_i=Ur("asideWidth",()=>{const e=X("240px");function t(n){e.value=n}return{width:e,setWidth:t}});const pc={__name:"aside",setup(e){const t=_i(),n=X(!1),a=()=>{n.value=!n.value,t.width=n.value?"64px":"240px"};return(r,i)=>{const o=We("font-awesome-icon"),s=Lr,l=We("RouterLink"),u=Mr;return se(),Lt(u,{mode:"vertical","default-active":"1"},{default:k(()=>[b(s,{index:"0",onClick:a,class:"first"},ke({default:k(()=>[n.value?ka("",!0):(se(),Lt(o,{key:0,icon:"fa-solid fa-circle-arrow-left",size:"lg",class:"icon"})),n.value?(se(),Lt(o,{key:1,icon:"fa-solid fa-circle-arrow-right",size:"lg",class:"icon"})):ka("",!0)]),_:2},[n.value?void 0:{name:"title",fn:k(()=>[]),key:"0"}]),1024),b(s,{index:"1"},ke({default:k(()=>[b(o,{icon:"fa-solid fa-user-secret",class:"icon"})]),_:2},[n.value?void 0:{name:"title",fn:k(()=>[B("Navigator One")]),key:"0"}]),1024),b(s,{index:"2"},ke({default:k(()=>[b(o,{icon:"fa-solid fa-user-secret",class:"icon"})]),_:2},[n.value?void 0:{name:"title",fn:k(()=>[B("Navigator Two")]),key:"0"}]),1024),b(l,{to:"/main/users",class:"router-a"},{default:k(()=>[b(s,{index:"3"},ke({default:k(()=>[b(o,{icon:"fa-solid fa-users",size:"lg",class:"icon"})]),_:2},[n.value?void 0:{name:"title",fn:k(()=>[B("用户列表")]),key:"0"}]),1024)]),_:1}),b(l,{to:"/main/technicians",class:"router-a"},{default:k(()=>[b(s,{index:"4"},ke({default:k(()=>[b(o,{icon:"fa-solid fa-users-gear",size:"lg",class:"icon"})]),_:2},[n.value?void 0:{name:"title",fn:k(()=>[B("技术员列表")]),key:"0"}]),1024)]),_:1}),b(l,{to:"/main",class:"router-a"},{default:k(()=>[b(s,{index:"6"},ke({default:k(()=>[b(o,{icon:"fa-solid fa-user-secret",size:"lg",class:"icon"})]),_:2},[n.value?void 0:{name:"title",fn:k(()=>[B("/main")]),key:"0"}]),1024)]),_:1}),b(l,{to:"/login1",class:"router-a"},{default:k(()=>[b(s,{index:"7"},ke({default:k(()=>[b(o,{icon:"fa-solid fa-user-secret",size:"lg",class:"icon"})]),_:2},[n.value?void 0:{name:"title",fn:k(()=>[B("退出登录")]),key:"0"}]),1024)]),_:1}),b(l,{to:"/test",class:"router-a"},{default:k(()=>[b(s,{index:"7"},ke({default:k(()=>[b(o,{icon:"fa-solid fa-user-secret",size:"lg",class:"icon"})]),_:2},[n.value?void 0:{name:"title",fn:k(()=>[B("test")]),key:"0"}]),1024)]),_:1})]),_:1})}}},hc=Xe(pc,[["__scopeId","data-v-2fc8a97d"]]);const vc={__name:"header",setup(e){const t=X("-1");return(n,a)=>{const r=We("font-awesome-icon"),i=Lr,o=Mr;return se(),Lt(o,{mode:"horizontal","default-active":t.value,class:"custom-menu"},{default:k(()=>[b(i,{index:"-1",class:"logo"},{default:k(()=>[b(r,{icon:"fa-solid fa-bars",size:"lg"}),B(" ​ ")]),_:1}),b(i,{index:"0"},{default:k(()=>[B("LOGO")]),_:1}),b(i,{index:"1"},{default:k(()=>[B("系统开发中，仅为临时页面，不代表最终品质")]),_:1}),b(i,{index:"2",class:"to-right"},{default:k(()=>[B("Processing Center")]),_:1}),b(i,{index:"3"},{default:k(()=>[B("nickname")]),_:1})]),_:1},8,["default-active"])}}},gc=Xe(vc,[["__scopeId","data-v-63fa21f4"]]);const yc={class:"common-layout"},bc={__name:"layout",setup(e){const t=_i();console.log("aside初始"+t.width),Ve(()=>t.width,a=>{n.value=a});const n=X(t.width);return(a,r)=>{const i=co,o=uo,s=We("RouterView"),l=fo,u=lo;return se(),ze("div",yc,[b(u,{class:"custom-container"},{default:k(()=>[b(i,{width:n.value,class:"custom-aside"},{default:k(()=>[b(hc)]),_:1},8,["width"]),b(u,null,{default:k(()=>[b(o,{class:"custom-header"},{default:k(()=>[b(gc)]),_:1}),b(l,null,{default:k(()=>[b(s)]),_:1})]),_:1})]),_:1})])}}},wc=Xe(bc,[["__scopeId","data-v-5a7df853"]]),_c=[{path:"/",redirect:"/login1"},{path:"/login1",name:"LoginPage",component:nc},{path:"/main",component:wc,children:[{path:""},{path:"users",component:ic},{path:"technicians",component:mc}]},{path:"/test",component:ac}],Mn=Ss({history:qo(),routes:_c});function Xa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xa(Object(n),!0).forEach(function(a){J(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xa(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function $t(e){"@babel/helpers - typeof";return $t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$t(e)}function kc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Qa(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function xc(e,t,n){return t&&Qa(e.prototype,t),n&&Qa(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sa(e,t){return Sc(e)||Oc(e,t)||ki(e,t)||Pc()}function wt(e){return Ec(e)||Ac(e)||ki(e)||Cc()}function Ec(e){if(Array.isArray(e))return zn(e)}function Sc(e){if(Array.isArray(e))return e}function Ac(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Oc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(e);!(r=(o=n.next()).done)&&(a.push(o.value),!(t&&a.length===t));r=!0);}catch(l){i=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function ki(e,t){if(e){if(typeof e=="string")return zn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zn(e,t)}}function zn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Cc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Za=function(){},la={},xi={},Ei=null,Si={mark:Za,measure:Za};try{typeof window<"u"&&(la=window),typeof document<"u"&&(xi=document),typeof MutationObserver<"u"&&(Ei=MutationObserver),typeof performance<"u"&&(Si=performance)}catch{}var Rc=la.navigator||{},er=Rc.userAgent,tr=er===void 0?"":er,Pe=la,H=xi,nr=Ei,St=Si;Pe.document;var _e=!!H.documentElement&&!!H.head&&typeof H.addEventListener=="function"&&typeof H.createElement=="function",Ai=~tr.indexOf("MSIE")||~tr.indexOf("Trident/"),At,Ot,Ct,Pt,Rt,ye="___FONT_AWESOME___",Fn=16,Oi="fa",Ci="svg-inline--fa",Le="data-fa-i2svg",Dn="data-fa-pseudo-element",Nc="data-fa-pseudo-element-pending",ca="data-prefix",ua="data-icon",ar="fontawesome-i2svg",Tc="async",Ic=["HTML","HEAD","STYLE","SCRIPT"],Pi=function(){try{return!0}catch{return!1}}(),$="classic",V="sharp",fa=[$,V];function _t(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[$]}})}var dt=_t((At={},J(At,$,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),J(At,V,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),At)),mt=_t((Ot={},J(Ot,$,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),J(Ot,V,{solid:"fass",regular:"fasr",light:"fasl"}),Ot)),pt=_t((Ct={},J(Ct,$,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),J(Ct,V,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Ct)),Lc=_t((Pt={},J(Pt,$,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),J(Pt,V,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Pt)),Mc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Ri="fa-layers-text",zc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Fc=_t((Rt={},J(Rt,$,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),J(Rt,V,{900:"fass",400:"fasr",300:"fasl"}),Rt)),Ni=[1,2,3,4,5,6,7,8,9,10],Dc=Ni.concat([11,12,13,14,15,16,17,18,19,20]),jc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Te={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ht=new Set;Object.keys(mt[$]).map(ht.add.bind(ht));Object.keys(mt[V]).map(ht.add.bind(ht));var Uc=[].concat(fa,wt(ht),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Te.GROUP,Te.SWAP_OPACITY,Te.PRIMARY,Te.SECONDARY]).concat(Ni.map(function(e){return"".concat(e,"x")})).concat(Dc.map(function(e){return"w-".concat(e)})),lt=Pe.FontAwesomeConfig||{};function qc(e){var t=H.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Bc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(H&&typeof H.querySelector=="function"){var $c=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];$c.forEach(function(e){var t=sa(e,2),n=t[0],a=t[1],r=Bc(qc(n));r!=null&&(lt[a]=r)})}var Ti={styleDefault:"solid",familyDefault:"classic",cssPrefix:Oi,replacementClass:Ci,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};lt.familyPrefix&&(lt.cssPrefix=lt.familyPrefix);var Je=E(E({},Ti),lt);Je.autoReplaceSvg||(Je.observeMutations=!1);var A={};Object.keys(Ti).forEach(function(e){Object.defineProperty(A,e,{enumerable:!0,set:function(n){Je[e]=n,ct.forEach(function(a){return a(A)})},get:function(){return Je[e]}})});Object.defineProperty(A,"familyPrefix",{enumerable:!0,set:function(t){Je.cssPrefix=t,ct.forEach(function(n){return n(A)})},get:function(){return Je.cssPrefix}});Pe.FontAwesomeConfig=A;var ct=[];function Hc(e){return ct.push(e),function(){ct.splice(ct.indexOf(e),1)}}var Se=Fn,ue={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Vc(e){if(!(!e||!_e)){var t=H.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=H.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return H.head.insertBefore(t,a),e}}var Wc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function vt(){for(var e=12,t="";e-- >0;)t+=Wc[Math.random()*62|0];return t}function Ze(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function da(e){return e.classList?Ze(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ii(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Yc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ii(e[n]),'" ')},"").trim()}function tn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ma(e){return e.size!==ue.size||e.x!==ue.x||e.y!==ue.y||e.rotate!==ue.rotate||e.flipX||e.flipY}function Kc(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:u}}function Gc(e){var t=e.transform,n=e.width,a=n===void 0?Fn:n,r=e.height,i=r===void 0?Fn:r,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Ai?l+="translate(".concat(t.x/Se-a/2,"em, ").concat(t.y/Se-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Se,"em), calc(-50% + ").concat(t.y/Se,"em)) "):l+="translate(".concat(t.x/Se,"em, ").concat(t.y/Se,"em) "),l+="scale(".concat(t.size/Se*(t.flipX?-1:1),", ").concat(t.size/Se*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Jc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Li(){var e=Oi,t=Ci,n=A.cssPrefix,a=A.replacementClass,r=Jc;if(n!==e||a!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var rr=!1;function wn(){A.autoAddCss&&!rr&&(Vc(Li()),rr=!0)}var Xc={mixout:function(){return{dom:{css:Li,insertCss:wn}}},hooks:function(){return{beforeDOMElementCreation:function(){wn()},beforeI2svg:function(){wn()}}}},be=Pe||{};be[ye]||(be[ye]={});be[ye].styles||(be[ye].styles={});be[ye].hooks||(be[ye].hooks={});be[ye].shims||(be[ye].shims=[]);var oe=be[ye],Mi=[],Qc=function e(){H.removeEventListener("DOMContentLoaded",e),Ht=1,Mi.map(function(t){return t()})},Ht=!1;_e&&(Ht=(H.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(H.readyState),Ht||H.addEventListener("DOMContentLoaded",Qc));function Zc(e){_e&&(Ht?setTimeout(e,0):Mi.push(e))}function kt(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?Ii(e):"<".concat(t," ").concat(Yc(a),">").concat(i.map(kt).join(""),"</").concat(t,">")}function ir(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var eu=function(t,n){return function(a,r,i,o){return t.call(n,a,r,i,o)}},_n=function(t,n,a,r){var i=Object.keys(t),o=i.length,s=r!==void 0?eu(n,r):n,l,u,c;for(a===void 0?(l=1,c=t[i[0]]):(l=0,c=a);l<o;l++)u=i[l],c=s(c,t[u],u,t);return c};function tu(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function jn(e){var t=tu(e);return t.length===1?t[0].toString(16):null}function nu(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function or(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function Un(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=or(t);typeof oe.hooks.addPack=="function"&&!r?oe.hooks.addPack(e,or(t)):oe.styles[e]=E(E({},oe.styles[e]||{}),i),e==="fas"&&Un("fa",t)}var Nt,Tt,It,qe=oe.styles,au=oe.shims,ru=(Nt={},J(Nt,$,Object.values(pt[$])),J(Nt,V,Object.values(pt[V])),Nt),pa=null,zi={},Fi={},Di={},ji={},Ui={},iu=(Tt={},J(Tt,$,Object.keys(dt[$])),J(Tt,V,Object.keys(dt[V])),Tt);function ou(e){return~Uc.indexOf(e)}function su(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!ou(r)?r:null}var qi=function(){var t=function(i){return _n(qe,function(o,s,l){return o[l]=_n(s,i,{}),o},{})};zi=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),Fi=t(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),Ui=t(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in qe||A.autoFetchSvg,a=_n(au,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});Di=a.names,ji=a.unicodes,pa=nn(A.styleDefault,{family:A.familyDefault})};Hc(function(e){pa=nn(e.styleDefault,{family:A.familyDefault})});qi();function ha(e,t){return(zi[e]||{})[t]}function lu(e,t){return(Fi[e]||{})[t]}function Ie(e,t){return(Ui[e]||{})[t]}function Bi(e){return Di[e]||{prefix:null,iconName:null}}function cu(e){var t=ji[e],n=ha("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Re(){return pa}var va=function(){return{prefix:null,iconName:null,rest:[]}};function nn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,a=n===void 0?$:n,r=dt[a][e],i=mt[a][e]||mt[a][r],o=e in oe.styles?e:null;return i||o||null}var sr=(It={},J(It,$,Object.keys(pt[$])),J(It,V,Object.keys(pt[V])),It);function an(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(t={},J(t,$,"".concat(A.cssPrefix,"-").concat($)),J(t,V,"".concat(A.cssPrefix,"-").concat(V)),t),o=null,s=$;(e.includes(i[$])||e.some(function(u){return sr[$].includes(u)}))&&(s=$),(e.includes(i[V])||e.some(function(u){return sr[V].includes(u)}))&&(s=V);var l=e.reduce(function(u,c){var f=su(A.cssPrefix,c);if(qe[c]?(c=ru[s].includes(c)?Lc[s][c]:c,o=c,u.prefix=c):iu[s].indexOf(c)>-1?(o=c,u.prefix=nn(c,{family:s})):f?u.iconName=f:c!==A.replacementClass&&c!==i[$]&&c!==i[V]&&u.rest.push(c),!r&&u.prefix&&u.iconName){var d=o==="fa"?Bi(u.iconName):{},m=Ie(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||m||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!qe.far&&qe.fas&&!A.autoFetchSvg&&(u.prefix="fas")}return u},va());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===V&&(qe.fass||A.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ie(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Re()||"fas"),l}var uu=function(){function e(){kc(this,e),this.definitions={}}return xc(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),Un(s,o[s]);var l=pt[$][s];l&&Un(l,o[s]),qi()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[s][f]=u)}),n[s][l]=u}),n}}]),e}(),lr=[],Be={},$e={},fu=Object.keys($e);function du(e,t){var n=t.mixoutsTo;return lr=e,Be={},Object.keys($e).forEach(function(a){fu.indexOf(a)===-1&&delete $e[a]}),lr.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),$t(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){Be[o]||(Be[o]=[]),Be[o].push(i[o])})}a.provides&&a.provides($e)}),n}function qn(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=Be[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(a))}),t}function Me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=Be[e]||[];r.forEach(function(i){i.apply(null,n)})}function we(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return $e[e]?$e[e].apply(null,t):void 0}function Bn(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Re();if(t)return t=Ie(n,t)||t,ir($i.definitions,n,t)||ir(oe.styles,n,t)}var $i=new uu,mu=function(){A.autoReplaceSvg=!1,A.observeMutations=!1,Me("noAuto")},pu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _e?(Me("beforeI2svg",t),we("pseudoElements2svg",t),we("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;A.autoReplaceSvg===!1&&(A.autoReplaceSvg=!0),A.observeMutations=!0,Zc(function(){vu({autoReplaceSvgRoot:n}),Me("watch",t)})}},hu={icon:function(t){if(t===null)return null;if($t(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ie(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=nn(t[0]);return{prefix:a,iconName:Ie(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(A.cssPrefix,"-"))>-1||t.match(Mc))){var r=an(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||Re(),iconName:Ie(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=Re();return{prefix:i,iconName:Ie(i,t)||t}}}},ae={noAuto:mu,config:A,dom:pu,parse:hu,library:$i,findIconDefinition:Bn,toHtml:kt},vu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?H:n;(Object.keys(oe.styles).length>0||A.autoFetchSvg)&&_e&&A.autoReplaceSvg&&ae.dom.i2svg({node:a})};function rn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return kt(a)})}}),Object.defineProperty(e,"node",{get:function(){if(_e){var a=H.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function gu(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(ma(o)&&n.found&&!a.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};r.style=tn(E(E({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function yu(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(A.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},r),{},{id:o}),children:a}]}]}function ga(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,d=e.watchable,m=d===void 0?!1:d,p=a.found?a:n,_=p.width,O=p.height,y=r==="fak",v=[A.replacementClass,i?"".concat(A.cssPrefix,"-").concat(i):""].filter(function(R){return f.classes.indexOf(R)===-1}).filter(function(R){return R!==""||!!R}).concat(f.classes).join(" "),w={children:[],attributes:E(E({},f.attributes),{},{"data-prefix":r,"data-icon":i,class:v,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(O)})},T=y&&!~f.classes.indexOf("fa-fw")?{width:"".concat(_/O*16*.0625,"em")}:{};m&&(w.attributes[Le]=""),l&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(c||vt())},children:[l]}),delete w.attributes.title);var P=E(E({},w),{},{prefix:r,iconName:i,main:n,mask:a,maskId:u,transform:o,symbol:s,styles:E(E({},T),f.styles)}),F=a.found&&n.found?we("generateAbstractMask",P)||{children:[],attributes:{}}:we("generateAbstractIcon",P)||{children:[],attributes:{}},q=F.children,z=F.attributes;return P.children=q,P.attributes=z,s?yu(P):gu(P)}function cr(e){var t=e.content,n=e.width,a=e.height,r=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[Le]="");var c=E({},o.styles);ma(r)&&(c.transform=Gc({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);var f=tn(c);f.length>0&&(u.style=f);var d=[];return d.push({tag:"span",attributes:u,children:[t]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function bu(e){var t=e.content,n=e.title,a=e.extra,r=E(E(E({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=tn(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var kn=oe.styles;function $n(e){var t=e[0],n=e[1],a=e.slice(4),r=sa(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(A.cssPrefix,"-").concat(Te.GROUP)},children:[{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(Te.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(Te.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var wu={found:!1,width:512,height:512};function _u(e,t){!Pi&&!A.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Hn(e,t){var n=t;return t==="fa"&&A.styleDefault!==null&&(t=Re()),new Promise(function(a,r){if(we("missingIconAbstract"),n==="fa"){var i=Bi(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&kn[t]&&kn[t][e]){var o=kn[t][e];return a($n(o))}_u(e,t),a(E(E({},wu),{},{icon:A.showMissingIcons&&e?we("missingIconAbstract")||{}:{}}))})}var ur=function(){},Vn=A.measurePerformance&&St&&St.mark&&St.measure?St:{mark:ur,measure:ur},at='FA "6.4.0"',ku=function(t){return Vn.mark("".concat(at," ").concat(t," begins")),function(){return Hi(t)}},Hi=function(t){Vn.mark("".concat(at," ").concat(t," ends")),Vn.measure("".concat(at," ").concat(t),"".concat(at," ").concat(t," begins"),"".concat(at," ").concat(t," ends"))},ya={begin:ku,end:Hi},jt=function(){};function fr(e){var t=e.getAttribute?e.getAttribute(Le):null;return typeof t=="string"}function xu(e){var t=e.getAttribute?e.getAttribute(ca):null,n=e.getAttribute?e.getAttribute(ua):null;return t&&n}function Eu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(A.replacementClass)}function Su(){if(A.autoReplaceSvg===!0)return Ut.replace;var e=Ut[A.autoReplaceSvg];return e||Ut.replace}function Au(e){return H.createElementNS("http://www.w3.org/2000/svg",e)}function Ou(e){return H.createElement(e)}function Vi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?Au:Ou:n;if(typeof e=="string")return H.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(Vi(o,{ceFn:a}))}),r}function Cu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ut={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(Vi(r),n)}),n.getAttribute(Le)===null&&A.keepOriginalSource){var a=H.createComment(Cu(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~da(n).indexOf(A.replacementClass))return Ut.replace(t);var r=new RegExp("".concat(A.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,l){return l===A.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return kt(s)}).join(`
`);n.setAttribute(Le,""),n.innerHTML=o}};function dr(e){e()}function Wi(e,t){var n=typeof t=="function"?t:jt;if(e.length===0)n();else{var a=dr;A.mutateApproach===Tc&&(a=Pe.requestAnimationFrame||dr),a(function(){var r=Su(),i=ya.begin("mutate");e.map(r),i(),n()})}}var ba=!1;function Yi(){ba=!0}function Wn(){ba=!1}var Vt=null;function mr(e){if(nr&&A.observeMutations){var t=e.treeCallback,n=t===void 0?jt:t,a=e.nodeCallback,r=a===void 0?jt:a,i=e.pseudoElementsCallback,o=i===void 0?jt:i,s=e.observeMutationsRoot,l=s===void 0?H:s;Vt=new nr(function(u){if(!ba){var c=Re();Ze(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!fr(f.addedNodes[0])&&(A.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&A.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&fr(f.target)&&~jc.indexOf(f.attributeName))if(f.attributeName==="class"&&xu(f.target)){var d=an(da(f.target)),m=d.prefix,p=d.iconName;f.target.setAttribute(ca,m||c),p&&f.target.setAttribute(ua,p)}else Eu(f.target)&&r(f.target)})}}),_e&&Vt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Pu(){Vt&&Vt.disconnect()}function Ru(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Nu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=an(da(e));return r.prefix||(r.prefix=Re()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=lu(r.prefix,e.innerText)||ha(r.prefix,jn(e.innerText))),!r.iconName&&A.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Tu(e){var t=Ze(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return A.autoA11y&&(n?t["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(a||vt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Iu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ue,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function pr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Nu(e),a=n.iconName,r=n.prefix,i=n.rest,o=Tu(e),s=qn("parseNodeAttributes",{},e),l=t.styleParser?Ru(e):[];return E({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:ue,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Lu=oe.styles;function Ki(e){var t=A.autoReplaceSvg==="nest"?pr(e,{styleParser:!1}):pr(e);return~t.extra.classes.indexOf(Ri)?we("generateLayersText",e,t):we("generateSvgReplacementMutation",e,t)}var Ne=new Set;fa.map(function(e){Ne.add("fa-".concat(e))});Object.keys(dt[$]).map(Ne.add.bind(Ne));Object.keys(dt[V]).map(Ne.add.bind(Ne));Ne=wt(Ne);function hr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_e)return Promise.resolve();var n=H.documentElement.classList,a=function(f){return n.add("".concat(ar,"-").concat(f))},r=function(f){return n.remove("".concat(ar,"-").concat(f))},i=A.autoFetchSvg?Ne:fa.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Lu));i.includes("fa")||i.push("fa");var o=[".".concat(Ri,":not([").concat(Le,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Le,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ze(e.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=ya.begin("onTree"),u=s.reduce(function(c,f){try{var d=Ki(f);d&&c.push(d)}catch(m){Pi||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(d){Wi(d,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(d){l(),f(d)})})}function Mu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ki(e).then(function(n){n&&Wi([n],t)})}function zu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:Bn(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Bn(r||{})),e(a,E(E({},n),{},{mask:r}))}}var Fu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?ue:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,f=n.title,d=f===void 0?null:f,m=n.titleId,p=m===void 0?null:m,_=n.classes,O=_===void 0?[]:_,y=n.attributes,v=y===void 0?{}:y,w=n.styles,T=w===void 0?{}:w;if(t){var P=t.prefix,F=t.iconName,q=t.icon;return rn(E({type:"icon"},t),function(){return Me("beforeDOMElementCreation",{iconDefinition:t,params:n}),A.autoA11y&&(d?v["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(p||vt()):(v["aria-hidden"]="true",v.focusable="false")),ga({icons:{main:$n(q),mask:l?$n(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:F,transform:E(E({},ue),r),symbol:o,title:d,maskId:c,titleId:p,extra:{attributes:v,styles:T,classes:O}})})}},Du={mixout:function(){return{icon:zu(Fu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=hr,n.nodeCallback=Mu,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?H:a,i=n.callback,o=i===void 0?function(){}:i;return hr(r,o)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,l=a.transform,u=a.symbol,c=a.mask,f=a.maskId,d=a.extra;return new Promise(function(m,p){Promise.all([Hn(r,s),c.iconName?Hn(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var O=sa(_,2),y=O[0],v=O[1];m([n,ga({icons:{main:y,mask:v},prefix:s,iconName:r,transform:l,symbol:u,maskId:f,title:i,titleId:o,extra:d,watchable:!0})])}).catch(p)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,l=tn(s);l.length>0&&(r.style=l);var u;return ma(o)&&(u=we("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(u||i.icon),{children:a,attributes:r}}}},ju={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return rn({type:"layer"},function(){Me("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(A.cssPrefix,"-layers")].concat(wt(i)).join(" ")},children:o}]})}}}},Uu={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,u=l===void 0?{}:l,c=a.styles,f=c===void 0?{}:c;return rn({type:"counter",content:n},function(){return Me("beforeDOMElementCreation",{content:n,params:a}),bu({content:n.toString(),title:i,extra:{attributes:u,styles:f,classes:["".concat(A.cssPrefix,"-layers-counter")].concat(wt(s))}})})}}}},qu={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?ue:r,o=a.title,s=o===void 0?null:o,l=a.classes,u=l===void 0?[]:l,c=a.attributes,f=c===void 0?{}:c,d=a.styles,m=d===void 0?{}:d;return rn({type:"text",content:n},function(){return Me("beforeDOMElementCreation",{content:n,params:a}),cr({content:n,transform:E(E({},ue),i),title:s,extra:{attributes:f,styles:m,classes:["".concat(A.cssPrefix,"-layers-text")].concat(wt(u))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,l=null;if(Ai){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return A.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,cr({content:n.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},Bu=new RegExp('"',"ug"),vr=[1105920,1112319];function $u(e){var t=e.replace(Bu,""),n=nu(t,0),a=n>=vr[0]&&n<=vr[1],r=t.length===2?t[0]===t[1]:!1;return{value:jn(r?t[0]:t),isSecondary:a||r}}function gr(e,t){var n="".concat(Nc).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var i=Ze(e.children),o=i.filter(function(q){return q.getAttribute(Dn)===t})[0],s=Pe.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(zc),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),a();if(l&&c!=="none"&&c!==""){var f=s.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?V:$,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?mt[d][l[2].toLowerCase()]:Fc[d][u],p=$u(f),_=p.value,O=p.isSecondary,y=l[0].startsWith("FontAwesome"),v=ha(m,_),w=v;if(y){var T=cu(_);T.iconName&&T.prefix&&(v=T.iconName,m=T.prefix)}if(v&&!O&&(!o||o.getAttribute(ca)!==m||o.getAttribute(ua)!==w)){e.setAttribute(n,w),o&&e.removeChild(o);var P=Iu(),F=P.extra;F.attributes[Dn]=t,Hn(v,m).then(function(q){var z=ga(E(E({},P),{},{icons:{main:q,mask:va()},prefix:m,iconName:w,extra:F,watchable:!0})),R=H.createElement("svg");t==="::before"?e.insertBefore(R,e.firstChild):e.appendChild(R),R.outerHTML=z.map(function(j){return kt(j)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Hu(e){return Promise.all([gr(e,"::before"),gr(e,"::after")])}function Vu(e){return e.parentNode!==document.head&&!~Ic.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Dn)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function yr(e){if(_e)return new Promise(function(t,n){var a=Ze(e.querySelectorAll("*")).filter(Vu).map(Hu),r=ya.begin("searchPseudoElements");Yi(),Promise.all(a).then(function(){r(),Wn(),t()}).catch(function(){r(),Wn(),n()})})}var Wu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=yr,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?H:a;A.searchPseudoElements&&yr(r)}}},br=!1,Yu={mixout:function(){return{dom:{unwatch:function(){Yi(),br=!0}}}},hooks:function(){return{bootstrap:function(){mr(qn("mutationObserverCallbacks",{}))},noAuto:function(){Pu()},watch:function(n){var a=n.observeMutationsRoot;br?Wn():mr(qn("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},wr=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},Ku={mixout:function(){return{parse:{transform:function(n){return wr(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=wr(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(o/2*-1," -256)")},m={outer:s,inner:f,path:d};return{tag:"g",attributes:E({},m.outer),children:[{tag:"g",attributes:E({},m.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:E(E({},a.icon.attributes),m.path)}]}]}}}},xn={x:0,y:0,width:"100%",height:"100%"};function _r(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Gu(e){return e.tag==="g"?e.children:[e]}var Ju={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?an(r.split(" ").map(function(o){return o.trim()})):va();return i.prefix||(i.prefix=Re()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,c=i.icon,f=o.width,d=o.icon,m=Kc({transform:l,containerWidth:f,iconWidth:u}),p={tag:"rect",attributes:E(E({},xn),{},{fill:"white"})},_=c.children?{children:c.children.map(_r)}:{},O={tag:"g",attributes:E({},m.inner),children:[_r(E({tag:c.tag,attributes:E(E({},c.attributes),m.path)},_))]},y={tag:"g",attributes:E({},m.outer),children:[O]},v="mask-".concat(s||vt()),w="clip-".concat(s||vt()),T={tag:"mask",attributes:E(E({},xn),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,y]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:Gu(d)},T]};return a.push(P,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(v,")")},xn)}),{children:a,attributes:r}}}},Xu={provides:function(t){var n=!1;Pe.matchMedia&&(n=Pe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:E(E({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:E(E({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:E(E({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Qu={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Zu=[Xc,Du,ju,Uu,qu,Wu,Yu,Ku,Ju,Xu,Qu];du(Zu,{mixoutsTo:ae});ae.noAuto;ae.config;var ef=ae.library;ae.dom;var Yn=ae.parse;ae.findIconDefinition;ae.toHtml;var tf=ae.icon;ae.layer;ae.text;ae.counter;function kr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function he(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kr(Object(n),!0).forEach(function(a){ee(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kr(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Wt(e){"@babel/helpers - typeof";return Wt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wt(e)}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nf(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function af(e,t){if(e==null)return{};var n=nf(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var rf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Gi={exports:{}};(function(e){(function(t){var n=function(y,v,w){if(!u(v)||f(v)||d(v)||m(v)||l(v))return v;var T,P=0,F=0;if(c(v))for(T=[],F=v.length;P<F;P++)T.push(n(y,v[P],w));else{T={};for(var q in v)Object.prototype.hasOwnProperty.call(v,q)&&(T[y(q,w)]=n(y,v[q],w))}return T},a=function(y,v){v=v||{};var w=v.separator||"_",T=v.split||/(?=[A-Z])/;return y.split(T).join(w)},r=function(y){return p(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(v,w){return w?w.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var v=r(y);return v.substr(0,1).toUpperCase()+v.substr(1)},o=function(y,v){return a(y,v).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},c=function(y){return s.call(y)=="[object Array]"},f=function(y){return s.call(y)=="[object Date]"},d=function(y){return s.call(y)=="[object RegExp]"},m=function(y){return s.call(y)=="[object Boolean]"},p=function(y){return y=y-0,y===y},_=function(y,v){var w=v&&"process"in v?v.process:v;return typeof w!="function"?y:function(T,P){return w(T,y,P)}},O={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,v){return n(_(r,v),y)},decamelizeKeys:function(y,v){return n(_(o,v),y,v)},pascalizeKeys:function(y,v){return n(_(i,v),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=O:t.humps=O})(rf)})(Gi);var of=Gi.exports,sf=["class","style"];function lf(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=of.camelize(n.slice(0,a)),i=n.slice(a+1).trim();return t[r]=i,t},{})}function cf(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ji(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(l){return Ji(l)}),r=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.class=cf(c);break;case"style":l.style=lf(c);break;default:l.attrs[u]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=af(n,sf);return Gn(e.tag,he(he(he({},t),{},{class:r.class,style:he(he({},r.style),o)},r.attrs),s),a)}var Xi=!1;try{Xi=!0}catch{}function uf(){if(!Xi&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function En(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ee({},e,t):{}}function ff(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ee(t,"fa-".concat(e.size),e.size!==null),ee(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ee(t,"fa-pull-".concat(e.pull),e.pull!==null),ee(t,"fa-swap-opacity",e.swapOpacity),ee(t,"fa-bounce",e.bounce),ee(t,"fa-shake",e.shake),ee(t,"fa-beat",e.beat),ee(t,"fa-fade",e.fade),ee(t,"fa-beat-fade",e.beatFade),ee(t,"fa-flash",e.flash),ee(t,"fa-spin-pulse",e.spinPulse),ee(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function xr(e){if(e&&Wt(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Yn.icon)return Yn.icon(e);if(e===null)return null;if(Wt(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var df=Kn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var a=n.attrs,r=K(function(){return xr(t.icon)}),i=K(function(){return En("classes",ff(t))}),o=K(function(){return En("transform",typeof t.transform=="string"?Yn.transform(t.transform):t.transform)}),s=K(function(){return En("mask",xr(t.mask))}),l=K(function(){return tf(r.value,he(he(he(he({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Ve(l,function(c){if(!c)return uf("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var u=K(function(){return l.value?Ji(l.value.abstract[0],{},a):null});return function(){return u.value}}}),mf={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},pf={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"]},hf={prefix:"fas",iconName:"circle-arrow-left",icon:[512,512,["arrow-circle-left"],"f0a8","M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM231 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71L376 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-182.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L119 273c-9.4-9.4-9.4-24.6 0-33.9L231 127z"]},vf={prefix:"fas",iconName:"circle-arrow-right",icon:[512,512,["arrow-circle-right"],"f0a9","M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z"]},gf={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},yf={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},bf={prefix:"fas",iconName:"users-gear",icon:[640,512,["users-cog"],"f509","M144 160A80 80 0 1 0 144 0a80 80 0 1 0 0 160zm368 0A80 80 0 1 0 512 0a80 80 0 1 0 0 160zM0 298.7C0 310.4 9.6 320 21.3 320H234.7c.2 0 .4 0 .7 0c-26.6-23.5-43.3-57.8-43.3-96c0-7.6 .7-15 1.9-22.3c-13.6-6.3-28.7-9.7-44.6-9.7H106.7C47.8 192 0 239.8 0 298.7zM320 320c24 0 45.9-8.8 62.7-23.3c2.5-3.7 5.2-7.3 8-10.7c2.7-3.3 5.7-6.1 9-8.3C410 262.3 416 243.9 416 224c0-53-43-96-96-96s-96 43-96 96s43 96 96 96zm65.4 60.2c-10.3-5.9-18.1-16.2-20.8-28.2H261.3C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7H455.2c-2.1-5.2-3.2-10.9-3.2-16.4v-3c-1.3-.7-2.7-1.5-4-2.3l-2.6 1.5c-16.8 9.7-40.5 8-54.7-9.7c-4.5-5.6-8.6-11.5-12.4-17.6l-.1-.2-.1-.2-2.4-4.1-.1-.2-.1-.2c-3.4-6.2-6.4-12.6-9-19.3c-8.2-21.2 2.2-42.6 19-52.3l2.7-1.5c0-.8 0-1.5 0-2.3s0-1.5 0-2.3l-2.7-1.5zM533.3 192H490.7c-15.9 0-31 3.5-44.6 9.7c1.3 7.2 1.9 14.7 1.9 22.3c0 17.4-3.5 33.9-9.7 49c2.5 .9 4.9 2 7.1 3.3l2.6 1.5c1.3-.8 2.6-1.6 4-2.3v-3c0-19.4 13.3-39.1 35.8-42.6c7.9-1.2 16-1.9 24.2-1.9s16.3 .6 24.2 1.9c22.5 3.5 35.8 23.2 35.8 42.6v3c1.3 .7 2.7 1.5 4 2.3l2.6-1.5c16.8-9.7 40.5-8 54.7 9.7c2.3 2.8 4.5 5.8 6.6 8.7c-2.1-57.1-49-102.7-106.6-102.7zm91.3 163.9c6.3-3.6 9.5-11.1 6.8-18c-2.1-5.5-4.6-10.8-7.4-15.9l-2.3-4c-3.1-5.1-6.5-9.9-10.2-14.5c-4.6-5.7-12.7-6.7-19-3L574.4 311c-8.9-7.6-19.1-13.6-30.4-17.6v-21c0-7.3-4.9-13.8-12.1-14.9c-6.5-1-13.1-1.5-19.9-1.5s-13.4 .5-19.9 1.5c-7.2 1.1-12.1 7.6-12.1 14.9v21c-11.2 4-21.5 10-30.4 17.6l-18.2-10.5c-6.3-3.6-14.4-2.6-19 3c-3.7 4.6-7.1 9.5-10.2 14.6l-2.3 3.9c-2.8 5.1-5.3 10.4-7.4 15.9c-2.6 6.8 .5 14.3 6.8 17.9l18.2 10.5c-1 5.7-1.6 11.6-1.6 17.6s.6 11.9 1.6 17.5l-18.2 10.5c-6.3 3.6-9.5 11.1-6.8 17.9c2.1 5.5 4.6 10.7 7.4 15.8l2.4 4.1c3 5.1 6.4 9.9 10.1 14.5c4.6 5.7 12.7 6.7 19 3L449.6 457c8.9 7.6 19.2 13.6 30.4 17.6v21c0 7.3 4.9 13.8 12.1 14.9c6.5 1 13.1 1.5 19.9 1.5s13.4-.5 19.9-1.5c7.2-1.1 12.1-7.6 12.1-14.9v-21c11.2-4 21.5-10 30.4-17.6l18.2 10.5c6.3 3.6 14.4 2.6 19-3c3.7-4.6 7.1-9.4 10.1-14.5l2.4-4.2c2.8-5.1 5.3-10.3 7.4-15.8c2.6-6.8-.5-14.3-6.8-17.9l-18.2-10.5c1-5.7 1.6-11.6 1.6-17.5s-.6-11.9-1.6-17.6l18.2-10.5zM472 384a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z"]},wf={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};ef.add(gf,wf,mf,hf,vf,pf,bf,yf);const on=mo(xo),_f=ho();on.use(Mn);on.use(_f);on.component("font-awesome-icon",df);on.mount("#app");
