import{e as Pa,r as Q,m as Ra,i as qe,w as We,a as gt,b as de,c as Na,t as eo,h as to,g as no,o as ro,n as Ta,d as ao,f as G,j as Ye,k as xe,l as g,p as re,s as io,u as J,q as oo,v as Kn,x as Xn,y as dn,z as Lt,A as x,B as Ee,C as Or,D as H,E as Ia,F as La,G as so,H as lo,I as co,J as uo,K as Jn,L as ce,M as Qn,N as Zn,O as za,P as Ma,Q as Fa,R as Yt,S as er,T as tr,U as nr,V as rr,W as fo,X as mo}from"./element-plus-298dfb06.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var po=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Da;const Gt=e=>Da=e,ja=Symbol();function An(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var it;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(it||(it={}));function ho(){const e=Pa(!0),t=e.run(()=>Q({}));let n=[],r=[];const a=Ra({install(i){Gt(a),a._a=i,i.provide(ja,a),i.config.globalProperties.$pinia=a,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!po?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return a}const Ua=()=>{};function Cr(e,t,n,r=Ua){e.push(t);const a=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&no()&&ro(a),a}function Ue(e,...t){e.slice().forEach(n=>{n(...t)})}const vo=e=>e();function On(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],a=e[n];An(a)&&An(r)&&e.hasOwnProperty(n)&&!de(r)&&!Na(r)?e[n]=On(a,r):e[n]=r}return e}const go=Symbol();function bo(e){return!An(e)||!e.hasOwnProperty(go)}const{assign:Ce}=Object;function yo(e){return!!(de(e)&&e.effect)}function wo(e,t,n,r){const{state:a,actions:i,getters:o}=t,s=n.state.value[e];let l;function u(){s||(n.state.value[e]=a?a():{});const c=ao(n.state.value[e]);return Ce(c,i,Object.keys(o||{}).reduce((f,d)=>(f[d]=Ra(G(()=>{Gt(n);const m=n._s.get(e);return o[d].call(m,m)})),f),{}))}return l=$a(e,u,t,n,r,!0),l}function $a(e,t,n={},r,a,i){let o;const s=Ce({actions:{}},n),l={deep:!0};let u,c,f=[],d=[],m;const p=r.state.value[e];!i&&!p&&(r.state.value[e]={}),Q({});let _;function O(M){let R;u=c=!1,typeof M=="function"?(M(r.state.value[e]),R={type:it.patchFunction,storeId:e,events:m}):(On(r.state.value[e],M),R={type:it.patchObject,payload:M,storeId:e,events:m});const j=_=Symbol();Ta().then(()=>{_===j&&(u=!0)}),c=!0,Ue(f,R,r.state.value[e])}const y=i?function(){const{state:R}=n,j=R?R():{};this.$patch(ne=>{Ce(ne,j)})}:Ua;function v(){o.stop(),f=[],d=[],r._s.delete(e)}function w(M,R){return function(){Gt(r);const j=Array.from(arguments),ne=[],ie=[];function N(Z){ne.push(Z)}function De(Z){ie.push(Z)}Ue(d,{args:j,name:M,store:P,after:N,onError:De});let pe;try{pe=R.apply(this&&this.$id===e?this:P,j)}catch(Z){throw Ue(ie,Z),Z}return pe instanceof Promise?pe.then(Z=>(Ue(ne,Z),Z)).catch(Z=>(Ue(ie,Z),Promise.reject(Z))):(Ue(ne,pe),pe)}}const T={_p:r,$id:e,$onAction:Cr.bind(null,d),$patch:O,$reset:y,$subscribe(M,R={}){const j=Cr(f,M,R.detached,()=>ne()),ne=o.run(()=>We(()=>r.state.value[e],ie=>{(R.flush==="sync"?c:u)&&M({storeId:e,type:it.direct,events:m},ie)},Ce({},l,R)));return j},$dispose:v},P=gt(T);r._s.set(e,P);const F=r._a&&r._a.runWithContext||vo,$=r._e.run(()=>(o=Pa(),F(()=>o.run(t))));for(const M in $){const R=$[M];if(de(R)&&!yo(R)||Na(R))i||(p&&bo(R)&&(de(R)?R.value=p[M]:On(R,p[M])),r.state.value[e][M]=R);else if(typeof R=="function"){const j=w(M,R);$[M]=j,s.actions[M]=R}}return Ce(P,$),Ce(eo(P),$),Object.defineProperty(P,"$state",{get:()=>r.state.value[e],set:M=>{O(R=>{Ce(R,M)})}}),r._p.forEach(M=>{Ce(P,o.run(()=>M({store:P,app:r._a,pinia:r,options:s})))}),p&&i&&n.hydrate&&n.hydrate(P.$state,p),u=!0,c=!0,P}function Ha(e,t,n){let r,a;const i=typeof t=="function";typeof e=="string"?(r=e,a=i?n:t):(a=e,r=e.id);function o(s,l){const u=to();return s=s||(u?qe(ja,null):null),s&&Gt(s),s=Da,s._s.has(r)||(i?$a(r,t,a,s):wo(r,a,s)),s._s.get(r)}return o.$id=r,o}const Qe=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},_o={};function xo(e,t){const n=Ye("RouterView");return re(),xe("div",null,[g(n)])}const ko=Qe(_o,[["render",xo]]);/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const $e=typeof window<"u";function Eo(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const D=Object.assign;function mn(e,t){const n={};for(const r in t){const a=t[r];n[r]=le(a)?a.map(e):e(a)}return n}const ot=()=>{},le=Array.isArray,So=/\/$/,Ao=e=>e.replace(So,"");function pn(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=Ro(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function Oo(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Pr(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Co(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Ge(t.matched[r],n.matched[a])&&Ba(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Ge(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ba(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Po(e[n],t[n]))return!1;return!0}function Po(e,t){return le(e)?Rr(e,t):le(t)?Rr(t,e):e===t}function Rr(e,t){return le(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Ro(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),a=r[r.length-1];(a===".."||a===".")&&r.push("");let i=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==".")if(s==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var ut;(function(e){e.pop="pop",e.push="push"})(ut||(ut={}));var st;(function(e){e.back="back",e.forward="forward",e.unknown=""})(st||(st={}));function No(e){if(!e)if($e){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ao(e)}const To=/^[^#]+#/;function Io(e,t){return e.replace(To,"#")+t}function Lo(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Kt=()=>({left:window.pageXOffset,top:window.pageYOffset});function zo(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=Lo(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Nr(e,t){return(history.state?history.state.position-t:-1)+e}const Cn=new Map;function Mo(e,t){Cn.set(e,t)}function Fo(e){const t=Cn.get(e);return Cn.delete(e),t}let Do=()=>location.protocol+"//"+location.host;function Va(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),Pr(l,"")}return Pr(n,e)+r+a}function jo(e,t,n,r){let a=[],i=[],o=null;const s=({state:d})=>{const m=Va(e,location),p=n.value,_=t.value;let O=0;if(d){if(n.value=m,t.value=d,o&&o===p){o=null;return}O=_?d.position-_.position:0}else r(m);a.forEach(y=>{y(n.value,p,{delta:O,type:ut.pop,direction:O?O>0?st.forward:st.back:st.unknown})})};function l(){o=n.value}function u(d){a.push(d);const m=()=>{const p=a.indexOf(d);p>-1&&a.splice(p,1)};return i.push(m),m}function c(){const{history:d}=window;d.state&&d.replaceState(D({},d.state,{scroll:Kt()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:u,destroy:f}}function Tr(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Kt():null}}function Uo(e){const{history:t,location:n}=window,r={value:Va(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,u,c){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+l:Do()+e+l;try{t[c?"replaceState":"pushState"](u,"",d),a.value=u}catch(m){console.error(m),n[c?"replace":"assign"](d)}}function o(l,u){const c=D({},t.state,Tr(a.value.back,l,a.value.forward,!0),u,{position:a.value.position});i(l,c,!0),r.value=l}function s(l,u){const c=D({},a.value,t.state,{forward:l,scroll:Kt()});i(c.current,c,!0);const f=D({},Tr(r.value,l,null),{position:c.position+1},u);i(l,f,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function $o(e){e=No(e);const t=Uo(e),n=jo(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=D({location:"",base:e,go:r,createHref:Io.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function Ho(e){return typeof e=="string"||e&&typeof e=="object"}function qa(e){return typeof e=="string"||typeof e=="symbol"}const Se={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Wa=Symbol("");var Ir;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ir||(Ir={}));function Ke(e,t){return D(new Error,{type:e,[Wa]:!0},t)}function he(e,t){return e instanceof Error&&Wa in e&&(t==null||!!(e.type&t))}const Lr="[^/]+?",Bo={sensitive:!1,strict:!1,start:!0,end:!0},Vo=/[.+*?^${}()[\]/\\]/g;function qo(e,t){const n=D({},Bo,t),r=[];let a=n.start?"^":"";const i=[];for(const u of e){const c=u.length?[]:[90];n.strict&&!u.length&&(a+="/");for(let f=0;f<u.length;f++){const d=u[f];let m=40+(n.sensitive?.25:0);if(d.type===0)f||(a+="/"),a+=d.value.replace(Vo,"\\$&"),m+=40;else if(d.type===1){const{value:p,repeatable:_,optional:O,regexp:y}=d;i.push({name:p,repeatable:_,optional:O});const v=y||Lr;if(v!==Lr){m+=10;try{new RegExp(`(${v})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${p}" (${v}): `+T.message)}}let w=_?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;f||(w=O&&u.length<2?`(?:/${w})`:"/"+w),O&&(w+="?"),a+=w,m+=20,O&&(m+=-8),_&&(m+=-20),v===".*"&&(m+=-50)}c.push(m)}r.push(c)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(u){const c=u.match(o),f={};if(!c)return null;for(let d=1;d<c.length;d++){const m=c[d]||"",p=i[d-1];f[p.name]=m&&p.repeatable?m.split("/"):m}return f}function l(u){let c="",f=!1;for(const d of e){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const m of d)if(m.type===0)c+=m.value;else if(m.type===1){const{value:p,repeatable:_,optional:O}=m,y=p in u?u[p]:"";if(le(y)&&!_)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const v=le(y)?y.join("/"):y;if(!v)if(O)d.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${p}"`);c+=v}}return c||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function Wo(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Yo(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=Wo(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(zr(r))return 1;if(zr(a))return-1}return a.length-r.length}function zr(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Go={type:0,value:""},Ko=/[a-zA-Z0-9_]/;function Xo(e){if(!e)return[[]];if(e==="/")return[[Go]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,u="",c="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function d(){u+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:Ko.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),o(),a}function Jo(e,t,n){const r=qo(Xo(e.path),n),a=D(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function Qo(e,t){const n=[],r=new Map;t=Dr({strict:!1,end:!0,sensitive:!1},t);function a(c){return r.get(c)}function i(c,f,d){const m=!d,p=Zo(c);p.aliasOf=d&&d.record;const _=Dr(t,c),O=[p];if("alias"in c){const w=typeof c.alias=="string"?[c.alias]:c.alias;for(const T of w)O.push(D({},p,{components:d?d.record.components:p.components,path:T,aliasOf:d?d.record:p}))}let y,v;for(const w of O){const{path:T}=w;if(f&&T[0]!=="/"){const P=f.record.path,F=P[P.length-1]==="/"?"":"/";w.path=f.record.path+(T&&F+T)}if(y=Jo(w,f,_),d?d.alias.push(y):(v=v||y,v!==y&&v.alias.push(y),m&&c.name&&!Fr(y)&&o(c.name)),p.children){const P=p.children;for(let F=0;F<P.length;F++)i(P[F],y,d&&d.children[F])}d=d||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&l(y)}return v?()=>{o(v)}:ot}function o(c){if(qa(c)){const f=r.get(c);f&&(r.delete(c),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(c);f>-1&&(n.splice(f,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let f=0;for(;f<n.length&&Yo(c,n[f])>=0&&(c.record.path!==n[f].record.path||!Ya(c,n[f]));)f++;n.splice(f,0,c),c.record.name&&!Fr(c)&&r.set(c.record.name,c)}function u(c,f){let d,m={},p,_;if("name"in c&&c.name){if(d=r.get(c.name),!d)throw Ke(1,{location:c});_=d.record.name,m=D(Mr(f.params,d.keys.filter(v=>!v.optional).map(v=>v.name)),c.params&&Mr(c.params,d.keys.map(v=>v.name))),p=d.stringify(m)}else if("path"in c)p=c.path,d=n.find(v=>v.re.test(p)),d&&(m=d.parse(p),_=d.record.name);else{if(d=f.name?r.get(f.name):n.find(v=>v.re.test(f.path)),!d)throw Ke(1,{location:c,currentLocation:f});_=d.record.name,m=D({},f.params,c.params),p=d.stringify(m)}const O=[];let y=d;for(;y;)O.unshift(y.record),y=y.parent;return{name:_,path:p,params:m,matched:O,meta:ts(O)}}return e.forEach(c=>i(c)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Mr(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Zo(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:es(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function es(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Fr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ts(e){return e.reduce((t,n)=>D(t,n.meta),{})}function Dr(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ya(e,t){return t.children.some(n=>n===e||Ya(e,n))}const Ga=/#/g,ns=/&/g,rs=/\//g,as=/=/g,is=/\?/g,Ka=/\+/g,os=/%5B/g,ss=/%5D/g,Xa=/%5E/g,ls=/%60/g,Ja=/%7B/g,cs=/%7C/g,Qa=/%7D/g,us=/%20/g;function ar(e){return encodeURI(""+e).replace(cs,"|").replace(os,"[").replace(ss,"]")}function fs(e){return ar(e).replace(Ja,"{").replace(Qa,"}").replace(Xa,"^")}function Pn(e){return ar(e).replace(Ka,"%2B").replace(us,"+").replace(Ga,"%23").replace(ns,"%26").replace(ls,"`").replace(Ja,"{").replace(Qa,"}").replace(Xa,"^")}function ds(e){return Pn(e).replace(as,"%3D")}function ms(e){return ar(e).replace(Ga,"%23").replace(is,"%3F")}function ps(e){return e==null?"":ms(e).replace(rs,"%2F")}function $t(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function hs(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Ka," "),o=i.indexOf("="),s=$t(o<0?i:i.slice(0,o)),l=o<0?null:$t(i.slice(o+1));if(s in t){let u=t[s];le(u)||(u=t[s]=[u]),u.push(l)}else t[s]=l}return t}function jr(e){let t="";for(let n in e){const r=e[n];if(n=ds(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(le(r)?r.map(i=>i&&Pn(i)):[r&&Pn(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function vs(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=le(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const gs=Symbol(""),Ur=Symbol(""),ir=Symbol(""),Za=Symbol(""),Rn=Symbol("");function nt(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Pe(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=f=>{f===!1?s(Ke(4,{from:n,to:t})):f instanceof Error?s(f):Ho(f)?s(Ke(2,{from:t,to:f})):(i&&r.enterCallbacks[a]===i&&typeof f=="function"&&i.push(f),o())},u=e.call(r&&r.instances[a],t,n,l);let c=Promise.resolve(u);e.length<3&&(c=c.then(l)),c.catch(f=>s(f))})}function hn(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(bs(s)){const u=(s.__vccOpts||s)[t];u&&a.push(Pe(u,n,r,i,o))}else{let l=s();a.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const c=Eo(u)?u.default:u;i.components[o]=c;const d=(c.__vccOpts||c)[t];return d&&Pe(d,n,r,i,o)()}))}}return a}function bs(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function $r(e){const t=qe(ir),n=qe(Za),r=G(()=>t.resolve(J(e.to))),a=G(()=>{const{matched:l}=r.value,{length:u}=l,c=l[u-1],f=n.matched;if(!c||!f.length)return-1;const d=f.findIndex(Ge.bind(null,c));if(d>-1)return d;const m=Hr(l[u-2]);return u>1&&Hr(c)===m&&f[f.length-1].path!==m?f.findIndex(Ge.bind(null,l[u-2])):d}),i=G(()=>a.value>-1&&xs(n.params,r.value.params)),o=G(()=>a.value>-1&&a.value===n.matched.length-1&&Ba(n.params,r.value.params));function s(l={}){return _s(l)?t[J(e.replace)?"replace":"push"](J(e.to)).catch(ot):Promise.resolve()}return{route:r,href:G(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const ys=Kn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$r,setup(e,{slots:t}){const n=gt($r(e)),{options:r}=qe(ir),a=G(()=>({[Br(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Br(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Xn("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),ws=ys;function _s(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function xs(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!le(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Hr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Br=(e,t,n)=>e??t??n,ks=Kn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=qe(Rn),a=G(()=>e.route||r.value),i=qe(Ur,0),o=G(()=>{let u=J(i);const{matched:c}=a.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),s=G(()=>a.value.matched[o.value]);dn(Ur,G(()=>o.value+1)),dn(gs,s),dn(Rn,a);const l=Q();return We(()=>[l.value,s.value,e.name],([u,c,f],[d,m,p])=>{c&&(c.instances[f]=u,m&&m!==c&&u&&u===d&&(c.leaveGuards.size||(c.leaveGuards=m.leaveGuards),c.updateGuards.size||(c.updateGuards=m.updateGuards))),u&&c&&(!m||!Ge(c,m)||!d)&&(c.enterCallbacks[f]||[]).forEach(_=>_(u))},{flush:"post"}),()=>{const u=a.value,c=e.name,f=s.value,d=f&&f.components[c];if(!d)return Vr(n.default,{Component:d,route:u});const m=f.props[c],p=m?m===!0?u.params:typeof m=="function"?m(u):m:null,O=Xn(d,D({},p,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(f.instances[c]=null)},ref:l}));return Vr(n.default,{Component:O,route:u})||O}}});function Vr(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Es=ks;function Ss(e){const t=Qo(e.routes,e),n=e.parseQuery||hs,r=e.stringifyQuery||jr,a=e.history,i=nt(),o=nt(),s=nt(),l=io(Se);let u=Se;$e&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=mn.bind(null,b=>""+b),f=mn.bind(null,ps),d=mn.bind(null,$t);function m(b,S){let k,C;return qa(b)?(k=t.getRecordMatcher(b),C=S):C=b,t.addRoute(C,k)}function p(b){const S=t.getRecordMatcher(b);S&&t.removeRoute(S)}function _(){return t.getRoutes().map(b=>b.record)}function O(b){return!!t.getRecordMatcher(b)}function y(b,S){if(S=D({},S||l.value),typeof b=="string"){const I=pn(n,b,S.path),Y=t.resolve({path:I.path},S),tt=a.createHref(I.fullPath);return D(I,Y,{params:d(Y.params),hash:$t(I.hash),redirectedFrom:void 0,href:tt})}let k;if("path"in b)k=D({},b,{path:pn(n,b.path,S.path).path});else{const I=D({},b.params);for(const Y in I)I[Y]==null&&delete I[Y];k=D({},b,{params:f(I)}),S.params=f(S.params)}const C=t.resolve(k,S),U=b.hash||"";C.params=c(d(C.params));const W=Oo(r,D({},b,{hash:fs(U),path:C.path})),L=a.createHref(W);return D({fullPath:W,hash:U,query:r===jr?vs(b.query):b.query||{}},C,{redirectedFrom:void 0,href:L})}function v(b){return typeof b=="string"?pn(n,b,l.value.path):D({},b)}function w(b,S){if(u!==b)return Ke(8,{from:S,to:b})}function T(b){return $(b)}function P(b){return T(D(v(b),{replace:!0}))}function F(b){const S=b.matched[b.matched.length-1];if(S&&S.redirect){const{redirect:k}=S;let C=typeof k=="function"?k(b):k;return typeof C=="string"&&(C=C.includes("?")||C.includes("#")?C=v(C):{path:C},C.params={}),D({query:b.query,hash:b.hash,params:"path"in C?{}:b.params},C)}}function $(b,S){const k=u=y(b),C=l.value,U=b.state,W=b.force,L=b.replace===!0,I=F(k);if(I)return $(D(v(I),{state:typeof I=="object"?D({},U,I.state):U,force:W,replace:L}),S||k);const Y=k;Y.redirectedFrom=S;let tt;return!W&&Co(r,C,k)&&(tt=Ke(16,{to:Y,from:C}),Sr(C,C,!0,!1)),(tt?Promise.resolve(tt):j(Y,C)).catch(ee=>he(ee)?he(ee,2)?ee:cn(ee):ln(ee,Y,C)).then(ee=>{if(ee){if(he(ee,2))return $(D({replace:L},v(ee.to),{state:typeof ee.to=="object"?D({},U,ee.to.state):U,force:W}),S||Y)}else ee=ie(Y,C,!0,L,U);return ne(Y,C,ee),ee})}function M(b,S){const k=w(b,S);return k?Promise.reject(k):Promise.resolve()}function R(b){const S=Et.values().next().value;return S&&typeof S.runWithContext=="function"?S.runWithContext(b):b()}function j(b,S){let k;const[C,U,W]=As(b,S);k=hn(C.reverse(),"beforeRouteLeave",b,S);for(const I of C)I.leaveGuards.forEach(Y=>{k.push(Pe(Y,b,S))});const L=M.bind(null,b,S);return k.push(L),je(k).then(()=>{k=[];for(const I of i.list())k.push(Pe(I,b,S));return k.push(L),je(k)}).then(()=>{k=hn(U,"beforeRouteUpdate",b,S);for(const I of U)I.updateGuards.forEach(Y=>{k.push(Pe(Y,b,S))});return k.push(L),je(k)}).then(()=>{k=[];for(const I of W)if(I.beforeEnter)if(le(I.beforeEnter))for(const Y of I.beforeEnter)k.push(Pe(Y,b,S));else k.push(Pe(I.beforeEnter,b,S));return k.push(L),je(k)}).then(()=>(b.matched.forEach(I=>I.enterCallbacks={}),k=hn(W,"beforeRouteEnter",b,S),k.push(L),je(k))).then(()=>{k=[];for(const I of o.list())k.push(Pe(I,b,S));return k.push(L),je(k)}).catch(I=>he(I,8)?I:Promise.reject(I))}function ne(b,S,k){s.list().forEach(C=>R(()=>C(b,S,k)))}function ie(b,S,k,C,U){const W=w(b,S);if(W)return W;const L=S===Se,I=$e?history.state:{};k&&(C||L?a.replace(b.fullPath,D({scroll:L&&I&&I.scroll},U)):a.push(b.fullPath,U)),l.value=b,Sr(b,S,k,L),cn()}let N;function De(){N||(N=a.listen((b,S,k)=>{if(!Ar.listening)return;const C=y(b),U=F(C);if(U){$(D(U,{replace:!0}),C).catch(ot);return}u=C;const W=l.value;$e&&Mo(Nr(W.fullPath,k.delta),Kt()),j(C,W).catch(L=>he(L,12)?L:he(L,2)?($(L.to,C).then(I=>{he(I,20)&&!k.delta&&k.type===ut.pop&&a.go(-1,!1)}).catch(ot),Promise.reject()):(k.delta&&a.go(-k.delta,!1),ln(L,C,W))).then(L=>{L=L||ie(C,W,!1),L&&(k.delta&&!he(L,8)?a.go(-k.delta,!1):k.type===ut.pop&&he(L,20)&&a.go(-1,!1)),ne(C,W,L)}).catch(ot)}))}let pe=nt(),Z=nt(),kt;function ln(b,S,k){cn(b);const C=Z.list();return C.length?C.forEach(U=>U(b,S,k)):console.error(b),Promise.reject(b)}function Zi(){return kt&&l.value!==Se?Promise.resolve():new Promise((b,S)=>{pe.add([b,S])})}function cn(b){return kt||(kt=!b,De(),pe.list().forEach(([S,k])=>b?k(b):S()),pe.reset()),b}function Sr(b,S,k,C){const{scrollBehavior:U}=e;if(!$e||!U)return Promise.resolve();const W=!k&&Fo(Nr(b.fullPath,0))||(C||!k)&&history.state&&history.state.scroll||null;return Ta().then(()=>U(b,S,W)).then(L=>L&&zo(L)).catch(L=>ln(L,b,S))}const un=b=>a.go(b);let fn;const Et=new Set,Ar={currentRoute:l,listening:!0,addRoute:m,removeRoute:p,hasRoute:O,getRoutes:_,resolve:y,options:e,push:T,replace:P,go:un,back:()=>un(-1),forward:()=>un(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:Z.add,isReady:Zi,install(b){const S=this;b.component("RouterLink",ws),b.component("RouterView",Es),b.config.globalProperties.$router=S,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>J(l)}),$e&&!fn&&l.value===Se&&(fn=!0,T(a.location).catch(U=>{}));const k={};for(const U in Se)Object.defineProperty(k,U,{get:()=>l.value[U],enumerable:!0});b.provide(ir,S),b.provide(Za,oo(k)),b.provide(Rn,l);const C=b.unmount;Et.add(b),b.unmount=function(){Et.delete(b),Et.size<1&&(u=Se,N&&N(),N=null,l.value=Se,fn=!1,kt=!1),C()}}};function je(b){return b.reduce((S,k)=>S.then(()=>R(k)),Promise.resolve())}return Ar}function As(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(u=>Ge(u,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(u=>Ge(u,l))||a.push(l))}return[n,r,a]}const ei=Ha("asideWidth",()=>{const e=Q("240px");function t(n){e.value=n}return{width:e,setWidth:t}});const Os={__name:"aside",setup(e){const t=ei(),n=Q(!1),r=()=>{n.value=!n.value,t.width=n.value?"64px":"240px"};return(a,i)=>{const o=Ye("font-awesome-icon"),s=Ia,l=Ye("RouterLink"),u=La;return re(),Lt(u,{mode:"vertical","default-active":"1"},{default:x(()=>[g(s,{index:"0",onClick:r,class:"first"},Ee({default:x(()=>[n.value?Or("",!0):(re(),Lt(o,{key:0,icon:"fa-solid fa-circle-arrow-left",size:"lg",class:"icon"})),n.value?(re(),Lt(o,{key:1,icon:"fa-solid fa-circle-arrow-right",size:"lg",class:"icon"})):Or("",!0)]),_:2},[n.value?void 0:{name:"title",fn:x(()=>[]),key:"0"}]),1024),g(l,{to:"/main/",class:"router-a"},{default:x(()=>[g(s,{index:"1"},Ee({default:x(()=>[g(o,{icon:"fa-solid fa-house",size:"lg",class:"icon"})]),_:2},[n.value?void 0:{name:"title",fn:x(()=>[H("首页")]),key:"0"}]),1024)]),_:1}),g(s,{index:"2"},Ee({default:x(()=>[g(o,{icon:"fa-solid fa-user-secret",class:"icon"})]),_:2},[n.value?void 0:{name:"title",fn:x(()=>[H("Navigator Two")]),key:"0"}]),1024),g(l,{to:"/main/users",class:"router-a"},{default:x(()=>[g(s,{index:"3"},Ee({default:x(()=>[g(o,{icon:"fa-solid fa-users",size:"lg",class:"icon"})]),_:2},[n.value?void 0:{name:"title",fn:x(()=>[H("用户列表")]),key:"0"}]),1024)]),_:1}),g(l,{to:"/main/technicians",class:"router-a"},{default:x(()=>[g(s,{index:"4"},Ee({default:x(()=>[g(o,{icon:"fa-solid fa-users-gear",size:"lg",class:"icon"})]),_:2},[n.value?void 0:{name:"title",fn:x(()=>[H("技术员列表")]),key:"0"}]),1024)]),_:1}),g(l,{to:"/main/orders",class:"router-a"},{default:x(()=>[g(s,{index:"6"},Ee({default:x(()=>[g(o,{icon:"fa-solid fa-file-lines",size:"lg",class:"icon"})]),_:2},[n.value?void 0:{name:"title",fn:x(()=>[H("维修订单列表")]),key:"0"}]),1024)]),_:1}),g(l,{to:"/login1",class:"router-a"},{default:x(()=>[g(s,{index:"7"},Ee({default:x(()=>[g(o,{icon:"fa-solid fa-user-secret",size:"lg",class:"icon"})]),_:2},[n.value?void 0:{name:"title",fn:x(()=>[H("退出登录")]),key:"0"}]),1024)]),_:1}),g(l,{to:"/test",class:"router-a"},{default:x(()=>[g(s,{index:"7"},Ee({default:x(()=>[g(o,{icon:"fa-solid fa-user-secret",size:"lg",class:"icon"})]),_:2},[n.value?void 0:{name:"title",fn:x(()=>[H("test")]),key:"0"}]),1024)]),_:1})]),_:1})}}},Cs=Qe(Os,[["__scopeId","data-v-b1d152d4"]]);const Ps={__name:"header",setup(e){const t=Q("-1");return(n,r)=>{const a=Ye("font-awesome-icon"),i=Ia,o=La;return re(),Lt(o,{mode:"horizontal","default-active":t.value,class:"custom-menu"},{default:x(()=>[g(i,{index:"-1",class:"logo"},{default:x(()=>[g(a,{icon:"fa-solid fa-bars",size:"lg"}),H(" ​ ")]),_:1}),g(i,{index:"0"},{default:x(()=>[H("LOGO")]),_:1}),g(i,{index:"1"},{default:x(()=>[H("系统开发中，仅为临时页面，不代表最终品质")]),_:1}),g(i,{index:"2",class:"to-right"},{default:x(()=>[H("Processing Center")]),_:1}),g(i,{index:"3"},{default:x(()=>[H("nickname")]),_:1})]),_:1},8,["default-active"])}}},Rs=Qe(Ps,[["__scopeId","data-v-63fa21f4"]]);const Ns={class:"common-layout"},Ts={__name:"layout",setup(e){const t=ei();console.log("aside初始"+t.width),We(()=>t.width,r=>{n.value=r});const n=Q(t.width);return(r,a)=>{const i=lo,o=co,s=Ye("RouterView"),l=uo,u=so;return re(),xe("div",Ns,[g(u,{class:"custom-container"},{default:x(()=>[g(i,{width:n.value,class:"custom-aside"},{default:x(()=>[g(Cs)]),_:1},8,["width"]),g(u,null,{default:x(()=>[g(o,{class:"custom-header"},{default:x(()=>[g(Rs)]),_:1}),g(l,null,{default:x(()=>[g(s)]),_:1})]),_:1})]),_:1})])}}},Is=Qe(Ts,[["__scopeId","data-v-5a7df853"]]),qr="hcaptcha-api-script-id",ti="_hcaptchaOnLoad";let Nn,ni;const vn=new Promise((e,t)=>{Nn=e,ni=t});function Ls(e){if(window.hcaptcha)return Nn(),vn;if(document.getElementById(qr))return vn;window[ti]=Nn;const t=zs(e),n=document.createElement("script");return n.id=qr,n.src=t,n.async=!0,n.defer=!0,n.onerror=r=>{console.error("Failed to load api: "+t,r),ni("Failed to load api.js")},document.head.appendChild(n),vn}function zs(e){let t=e.apiEndpoint;return t=ve(t,"render","explicit"),t=ve(t,"onload",ti),t=ve(t,"recaptchacompat",e.reCaptchaCompat===!1?"off":null),t=ve(t,"hl",e.language),t=ve(t,"sentry",e.sentry),t=ve(t,"endpoint",e.endpoint),t=ve(t,"assethost",e.assethost),t=ve(t,"imghost",e.imghost),t=ve(t,"reportapi",e.reportapi),t}function ve(e,t,n){if(n!=null){const r=e.includes("?")?"&":"?";return e+r+t+"="+encodeURIComponent(n)}return e}var Ms=(e,t)=>{for(const[n,r]of t)e[n]=r;return e};const Fs={name:"VueHcaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String,default:void 0},size:{type:String,default:void 0},tabindex:{type:String,default:void 0},language:{type:String,default:void 0},reCaptchaCompat:{type:Boolean,default:!0},challengeContainer:{type:String,default:void 0},rqdata:{type:String,default:void 0},sentry:{type:Boolean,default:!0},apiEndpoint:{type:String,default:"https://hcaptcha.com/1/api.js"},endpoint:{type:String,default:void 0},reportapi:{type:String,default:void 0},assethost:{type:String,default:void 0},imghost:{type:String,default:void 0}},data:()=>({widgetId:null,hcaptcha:null,renderedCb:null}),mounted(){return Ls(this.$props).then(this.onApiLoaded).catch(this.onError)},unmounted(){this.teardown()},destroyed(){this.teardown()},methods:{teardown(){this.widgetId&&(this.hcaptcha.reset(this.widgetId),this.hcaptcha.remove(this.widgetId))},onApiLoaded(){this.hcaptcha=window.hcaptcha;const e={sitekey:this.sitekey,theme:this.theme,size:this.size,tabindex:this.tabindex,callback:this.onVerify,"expired-callback":this.onExpired,"chalexpired-callback":this.onChallengeExpired,"error-callback":this.onError,"open-callback":this.onOpen,"close-callback":this.onClose};this.challengeContainer&&(e["challenge-container"]=this.challengeContainer),this.widgetId=this.hcaptcha.render(this.$el,e),this.rqdata&&this.hcaptcha.setData(this.widgetId,{rqdata:this.rqdata}),this.onRendered()},execute(){this.widgetId?(this.hcaptcha.execute(this.widgetId),this.onExecuted()):this.renderedCb=()=>{this.renderedCb=null,this.execute()}},executeAsync(){if(this.widgetId)return this.onExecuted(),this.hcaptcha.execute(this.widgetId,{async:!0});let e;const t=new Promise(n=>{e=n});return this.renderedCb=()=>{this.renderedCb=null,e()},t.then(this.executeAsync)},reset(){this.widgetId?(this.hcaptcha.reset(this.widgetId),this.onReset()):this.$emit("error","Element is not rendered yet and thus cannot reset it. Wait for `rendered` event to safely call reset.")},onRendered(){this.$emit("rendered"),this.renderedCb&&this.renderedCb()},onExecuted(){this.$emit("executed")},onReset(){this.$emit("reset")},onError(e){this.$emit("error",e),this.reset()},onVerify(){const e=this.hcaptcha.getResponse(this.widgetId),t=this.hcaptcha.getRespKey(this.widgetId);this.$emit("verify",e,t)},onExpired(){this.$emit("expired")},onChallengeExpired(){this.$emit("challengeExpired")},onOpen(){this.$emit("opened")},onClose(){this.$emit("closed")}}},Ds={id:"hcap-script"};function js(e,t,n,r,a,i){return re(),xe("div",Ds)}var Us=Ms(Fs,[["render",js]]);function ri(e,t){return function(){return e.apply(t,arguments)}}const{toString:$s}=Object.prototype,{getPrototypeOf:or}=Object,Xt=(e=>t=>{const n=$s.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),me=e=>(e=e.toLowerCase(),t=>Xt(t)===e),Jt=e=>t=>typeof t===e,{isArray:Ze}=Array,ft=Jt("undefined");function Hs(e){return e!==null&&!ft(e)&&e.constructor!==null&&!ft(e.constructor)&&oe(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ai=me("ArrayBuffer");function Bs(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ai(e.buffer),t}const Vs=Jt("string"),oe=Jt("function"),ii=Jt("number"),Qt=e=>e!==null&&typeof e=="object",qs=e=>e===!0||e===!1,zt=e=>{if(Xt(e)!=="object")return!1;const t=or(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ws=me("Date"),Ys=me("File"),Gs=me("Blob"),Ks=me("FileList"),Xs=e=>Qt(e)&&oe(e.pipe),Js=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||oe(e.append)&&((t=Xt(e))==="formdata"||t==="object"&&oe(e.toString)&&e.toString()==="[object FormData]"))},Qs=me("URLSearchParams"),Zs=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function bt(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,a;if(typeof e!="object"&&(e=[e]),Ze(e))for(r=0,a=e.length;r<a;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let s;for(r=0;r<o;r++)s=i[r],t.call(null,e[s],s,e)}}function oi(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,a;for(;r-- >0;)if(a=n[r],t===a.toLowerCase())return a;return null}const si=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),li=e=>!ft(e)&&e!==si;function Tn(){const{caseless:e}=li(this)&&this||{},t={},n=(r,a)=>{const i=e&&oi(t,a)||a;zt(t[i])&&zt(r)?t[i]=Tn(t[i],r):zt(r)?t[i]=Tn({},r):Ze(r)?t[i]=r.slice():t[i]=r};for(let r=0,a=arguments.length;r<a;r++)arguments[r]&&bt(arguments[r],n);return t}const el=(e,t,n,{allOwnKeys:r}={})=>(bt(t,(a,i)=>{n&&oe(a)?e[i]=ri(a,n):e[i]=a},{allOwnKeys:r}),e),tl=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),nl=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},rl=(e,t,n,r)=>{let a,i,o;const s={};if(t=t||{},e==null)return t;do{for(a=Object.getOwnPropertyNames(e),i=a.length;i-- >0;)o=a[i],(!r||r(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&or(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},al=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},il=e=>{if(!e)return null;if(Ze(e))return e;let t=e.length;if(!ii(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},ol=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&or(Uint8Array)),sl=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let a;for(;(a=r.next())&&!a.done;){const i=a.value;t.call(e,i[0],i[1])}},ll=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},cl=me("HTMLFormElement"),ul=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,a){return r.toUpperCase()+a}),Wr=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),fl=me("RegExp"),ci=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};bt(n,(a,i)=>{t(a,i,e)!==!1&&(r[i]=a)}),Object.defineProperties(e,r)},dl=e=>{ci(e,(t,n)=>{if(oe(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(oe(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ml=(e,t)=>{const n={},r=a=>{a.forEach(i=>{n[i]=!0})};return Ze(e)?r(e):r(String(e).split(t)),n},pl=()=>{},hl=(e,t)=>(e=+e,Number.isFinite(e)?e:t),gn="abcdefghijklmnopqrstuvwxyz",Yr="0123456789",ui={DIGIT:Yr,ALPHA:gn,ALPHA_DIGIT:gn+gn.toUpperCase()+Yr},vl=(e=16,t=ui.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function gl(e){return!!(e&&oe(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const bl=e=>{const t=new Array(10),n=(r,a)=>{if(Qt(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[a]=r;const i=Ze(r)?[]:{};return bt(r,(o,s)=>{const l=n(o,a+1);!ft(l)&&(i[s]=l)}),t[a]=void 0,i}}return r};return n(e,0)},yl=me("AsyncFunction"),wl=e=>e&&(Qt(e)||oe(e))&&oe(e.then)&&oe(e.catch),h={isArray:Ze,isArrayBuffer:ai,isBuffer:Hs,isFormData:Js,isArrayBufferView:Bs,isString:Vs,isNumber:ii,isBoolean:qs,isObject:Qt,isPlainObject:zt,isUndefined:ft,isDate:Ws,isFile:Ys,isBlob:Gs,isRegExp:fl,isFunction:oe,isStream:Xs,isURLSearchParams:Qs,isTypedArray:ol,isFileList:Ks,forEach:bt,merge:Tn,extend:el,trim:Zs,stripBOM:tl,inherits:nl,toFlatObject:rl,kindOf:Xt,kindOfTest:me,endsWith:al,toArray:il,forEachEntry:sl,matchAll:ll,isHTMLForm:cl,hasOwnProperty:Wr,hasOwnProp:Wr,reduceDescriptors:ci,freezeMethods:dl,toObjectSet:ml,toCamelCase:ul,noop:pl,toFiniteNumber:hl,findKey:oi,global:si,isContextDefined:li,ALPHABET:ui,generateString:vl,isSpecCompliantForm:gl,toJSONObject:bl,isAsyncFn:yl,isThenable:wl};function z(e,t,n,r,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),a&&(this.response=a)}h.inherits(z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:h.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const fi=z.prototype,di={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{di[e]={value:e}});Object.defineProperties(z,di);Object.defineProperty(fi,"isAxiosError",{value:!0});z.from=(e,t,n,r,a,i)=>{const o=Object.create(fi);return h.toFlatObject(e,o,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),z.call(o,e.message,t,n,r,a),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const _l=null;function In(e){return h.isPlainObject(e)||h.isArray(e)}function mi(e){return h.endsWith(e,"[]")?e.slice(0,-2):e}function Gr(e,t,n){return e?e.concat(t).map(function(a,i){return a=mi(a),!n&&i?"["+a+"]":a}).join(n?".":""):t}function xl(e){return h.isArray(e)&&!e.some(In)}const kl=h.toFlatObject(h,{},null,function(t){return/^is[A-Z]/.test(t)});function Zt(e,t,n){if(!h.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=h.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,O){return!h.isUndefined(O[_])});const r=n.metaTokens,a=n.visitor||c,i=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&h.isSpecCompliantForm(t);if(!h.isFunction(a))throw new TypeError("visitor must be a function");function u(p){if(p===null)return"";if(h.isDate(p))return p.toISOString();if(!l&&h.isBlob(p))throw new z("Blob is not supported. Use a Buffer instead.");return h.isArrayBuffer(p)||h.isTypedArray(p)?l&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function c(p,_,O){let y=p;if(p&&!O&&typeof p=="object"){if(h.endsWith(_,"{}"))_=r?_:_.slice(0,-2),p=JSON.stringify(p);else if(h.isArray(p)&&xl(p)||(h.isFileList(p)||h.endsWith(_,"[]"))&&(y=h.toArray(p)))return _=mi(_),y.forEach(function(w,T){!(h.isUndefined(w)||w===null)&&t.append(o===!0?Gr([_],T,i):o===null?_:_+"[]",u(w))}),!1}return In(p)?!0:(t.append(Gr(O,_,i),u(p)),!1)}const f=[],d=Object.assign(kl,{defaultVisitor:c,convertValue:u,isVisitable:In});function m(p,_){if(!h.isUndefined(p)){if(f.indexOf(p)!==-1)throw Error("Circular reference detected in "+_.join("."));f.push(p),h.forEach(p,function(y,v){(!(h.isUndefined(y)||y===null)&&a.call(t,y,h.isString(v)?v.trim():v,_,d))===!0&&m(y,_?_.concat(v):[v])}),f.pop()}}if(!h.isObject(e))throw new TypeError("data must be an object");return m(e),t}function Kr(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function sr(e,t){this._pairs=[],e&&Zt(e,this,t)}const pi=sr.prototype;pi.append=function(t,n){this._pairs.push([t,n])};pi.toString=function(t){const n=t?function(r){return t.call(this,r,Kr)}:Kr;return this._pairs.map(function(a){return n(a[0])+"="+n(a[1])},"").join("&")};function El(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function hi(e,t,n){if(!t)return e;const r=n&&n.encode||El,a=n&&n.serialize;let i;if(a?i=a(t,n):i=h.isURLSearchParams(t)?t.toString():new sr(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Sl{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){h.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Xr=Sl,vi={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Al=typeof URLSearchParams<"u"?URLSearchParams:sr,Ol=typeof FormData<"u"?FormData:null,Cl=typeof Blob<"u"?Blob:null,Pl=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Rl=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),ue={isBrowser:!0,classes:{URLSearchParams:Al,FormData:Ol,Blob:Cl},isStandardBrowserEnv:Pl,isStandardBrowserWebWorkerEnv:Rl,protocols:["http","https","file","blob","url","data"]};function Nl(e,t){return Zt(e,new ue.classes.URLSearchParams,Object.assign({visitor:function(n,r,a,i){return ue.isNode&&h.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Tl(e){return h.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Il(e){const t={},n=Object.keys(e);let r;const a=n.length;let i;for(r=0;r<a;r++)i=n[r],t[i]=e[i];return t}function gi(e){function t(n,r,a,i){let o=n[i++];const s=Number.isFinite(+o),l=i>=n.length;return o=!o&&h.isArray(a)?a.length:o,l?(h.hasOwnProp(a,o)?a[o]=[a[o],r]:a[o]=r,!s):((!a[o]||!h.isObject(a[o]))&&(a[o]=[]),t(n,r,a[o],i)&&h.isArray(a[o])&&(a[o]=Il(a[o])),!s)}if(h.isFormData(e)&&h.isFunction(e.entries)){const n={};return h.forEachEntry(e,(r,a)=>{t(Tl(r),a,n,0)}),n}return null}const Ll={"Content-Type":void 0};function zl(e,t,n){if(h.isString(e))try{return(t||JSON.parse)(e),h.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const en={transitional:vi,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",a=r.indexOf("application/json")>-1,i=h.isObject(t);if(i&&h.isHTMLForm(t)&&(t=new FormData(t)),h.isFormData(t))return a&&a?JSON.stringify(gi(t)):t;if(h.isArrayBuffer(t)||h.isBuffer(t)||h.isStream(t)||h.isFile(t)||h.isBlob(t))return t;if(h.isArrayBufferView(t))return t.buffer;if(h.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Nl(t,this.formSerializer).toString();if((s=h.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Zt(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||a?(n.setContentType("application/json",!1),zl(t)):t}],transformResponse:[function(t){const n=this.transitional||en.transitional,r=n&&n.forcedJSONParsing,a=this.responseType==="json";if(t&&h.isString(t)&&(r&&!this.responseType||a)){const o=!(n&&n.silentJSONParsing)&&a;try{return JSON.parse(t)}catch(s){if(o)throw s.name==="SyntaxError"?z.from(s,z.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ue.classes.FormData,Blob:ue.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};h.forEach(["delete","get","head"],function(t){en.headers[t]={}});h.forEach(["post","put","patch"],function(t){en.headers[t]=h.merge(Ll)});const lr=en,Ml=h.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Fl=e=>{const t={};let n,r,a;return e&&e.split(`
`).forEach(function(o){a=o.indexOf(":"),n=o.substring(0,a).trim().toLowerCase(),r=o.substring(a+1).trim(),!(!n||t[n]&&Ml[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Jr=Symbol("internals");function rt(e){return e&&String(e).trim().toLowerCase()}function Mt(e){return e===!1||e==null?e:h.isArray(e)?e.map(Mt):String(e)}function Dl(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const jl=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function bn(e,t,n,r,a){if(h.isFunction(r))return r.call(this,t,n);if(a&&(t=n),!!h.isString(t)){if(h.isString(r))return t.indexOf(r)!==-1;if(h.isRegExp(r))return r.test(t)}}function Ul(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function $l(e,t){const n=h.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(a,i,o){return this[r].call(this,t,a,i,o)},configurable:!0})})}class tn{constructor(t){t&&this.set(t)}set(t,n,r){const a=this;function i(s,l,u){const c=rt(l);if(!c)throw new Error("header name must be a non-empty string");const f=h.findKey(a,c);(!f||a[f]===void 0||u===!0||u===void 0&&a[f]!==!1)&&(a[f||l]=Mt(s))}const o=(s,l)=>h.forEach(s,(u,c)=>i(u,c,l));return h.isPlainObject(t)||t instanceof this.constructor?o(t,n):h.isString(t)&&(t=t.trim())&&!jl(t)?o(Fl(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=rt(t),t){const r=h.findKey(this,t);if(r){const a=this[r];if(!n)return a;if(n===!0)return Dl(a);if(h.isFunction(n))return n.call(this,a,r);if(h.isRegExp(n))return n.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=rt(t),t){const r=h.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||bn(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let a=!1;function i(o){if(o=rt(o),o){const s=h.findKey(r,o);s&&(!n||bn(r,r[s],s,n))&&(delete r[s],a=!0)}}return h.isArray(t)?t.forEach(i):i(t),a}clear(t){const n=Object.keys(this);let r=n.length,a=!1;for(;r--;){const i=n[r];(!t||bn(this,this[i],i,t,!0))&&(delete this[i],a=!0)}return a}normalize(t){const n=this,r={};return h.forEach(this,(a,i)=>{const o=h.findKey(r,i);if(o){n[o]=Mt(a),delete n[i];return}const s=t?Ul(i):String(i).trim();s!==i&&delete n[i],n[s]=Mt(a),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return h.forEach(this,(r,a)=>{r!=null&&r!==!1&&(n[a]=t&&h.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(a=>r.set(a)),r}static accessor(t){const r=(this[Jr]=this[Jr]={accessors:{}}).accessors,a=this.prototype;function i(o){const s=rt(o);r[s]||($l(a,o),r[s]=!0)}return h.isArray(t)?t.forEach(i):i(t),this}}tn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);h.freezeMethods(tn.prototype);h.freezeMethods(tn);const be=tn;function yn(e,t){const n=this||lr,r=t||n,a=be.from(r.headers);let i=r.data;return h.forEach(e,function(s){i=s.call(n,i,a.normalize(),t?t.status:void 0)}),a.normalize(),i}function bi(e){return!!(e&&e.__CANCEL__)}function yt(e,t,n){z.call(this,e??"canceled",z.ERR_CANCELED,t,n),this.name="CanceledError"}h.inherits(yt,z,{__CANCEL__:!0});function Hl(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new z("Request failed with status code "+n.status,[z.ERR_BAD_REQUEST,z.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Bl=ue.isStandardBrowserEnv?function(){return{write:function(n,r,a,i,o,s){const l=[];l.push(n+"="+encodeURIComponent(r)),h.isNumber(a)&&l.push("expires="+new Date(a).toGMTString()),h.isString(i)&&l.push("path="+i),h.isString(o)&&l.push("domain="+o),s===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Vl(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ql(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function yi(e,t){return e&&!Vl(t)?ql(e,t):t}const Wl=ue.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function a(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=a(window.location.href),function(o){const s=h.isString(o)?a(o):o;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function Yl(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Gl(e,t){e=e||10;const n=new Array(e),r=new Array(e);let a=0,i=0,o;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=r[i];o||(o=u),n[a]=l,r[a]=u;let f=i,d=0;for(;f!==a;)d+=n[f++],f=f%e;if(a=(a+1)%e,a===i&&(i=(i+1)%e),u-o<t)return;const m=c&&u-c;return m?Math.round(d*1e3/m):void 0}}function Qr(e,t){let n=0;const r=Gl(50,250);return a=>{const i=a.loaded,o=a.lengthComputable?a.total:void 0,s=i-n,l=r(s),u=i<=o;n=i;const c={loaded:i,total:o,progress:o?i/o:void 0,bytes:s,rate:l||void 0,estimated:l&&o&&u?(o-i)/l:void 0,event:a};c[t?"download":"upload"]=!0,e(c)}}const Kl=typeof XMLHttpRequest<"u",Xl=Kl&&function(e){return new Promise(function(n,r){let a=e.data;const i=be.from(e.headers).normalize(),o=e.responseType;let s;function l(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}h.isFormData(a)&&(ue.isStandardBrowserEnv||ue.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(e.auth){const m=e.auth.username||"",p=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(m+":"+p))}const c=yi(e.baseURL,e.url);u.open(e.method.toUpperCase(),hi(c,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function f(){if(!u)return;const m=be.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),_={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:m,config:e,request:u};Hl(function(y){n(y),l()},function(y){r(y),l()},_),u=null}if("onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(f)},u.onabort=function(){u&&(r(new z("Request aborted",z.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new z("Network Error",z.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let p=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const _=e.transitional||vi;e.timeoutErrorMessage&&(p=e.timeoutErrorMessage),r(new z(p,_.clarifyTimeoutError?z.ETIMEDOUT:z.ECONNABORTED,e,u)),u=null},ue.isStandardBrowserEnv){const m=(e.withCredentials||Wl(c))&&e.xsrfCookieName&&Bl.read(e.xsrfCookieName);m&&i.set(e.xsrfHeaderName,m)}a===void 0&&i.setContentType(null),"setRequestHeader"in u&&h.forEach(i.toJSON(),function(p,_){u.setRequestHeader(_,p)}),h.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),o&&o!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Qr(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Qr(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=m=>{u&&(r(!m||m.type?new yt(null,e,u):m),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const d=Yl(c);if(d&&ue.protocols.indexOf(d)===-1){r(new z("Unsupported protocol "+d+":",z.ERR_BAD_REQUEST,e));return}u.send(a||null)})},Ft={http:_l,xhr:Xl};h.forEach(Ft,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Jl={getAdapter:e=>{e=h.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let a=0;a<t&&(n=e[a],!(r=h.isString(n)?Ft[n.toLowerCase()]:n));a++);if(!r)throw r===!1?new z(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(h.hasOwnProp(Ft,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!h.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Ft};function wn(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new yt(null,e)}function Zr(e){return wn(e),e.headers=be.from(e.headers),e.data=yn.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Jl.getAdapter(e.adapter||lr.adapter)(e).then(function(r){return wn(e),r.data=yn.call(e,e.transformResponse,r),r.headers=be.from(r.headers),r},function(r){return bi(r)||(wn(e),r&&r.response&&(r.response.data=yn.call(e,e.transformResponse,r.response),r.response.headers=be.from(r.response.headers))),Promise.reject(r)})}const ea=e=>e instanceof be?e.toJSON():e;function Xe(e,t){t=t||{};const n={};function r(u,c,f){return h.isPlainObject(u)&&h.isPlainObject(c)?h.merge.call({caseless:f},u,c):h.isPlainObject(c)?h.merge({},c):h.isArray(c)?c.slice():c}function a(u,c,f){if(h.isUndefined(c)){if(!h.isUndefined(u))return r(void 0,u,f)}else return r(u,c,f)}function i(u,c){if(!h.isUndefined(c))return r(void 0,c)}function o(u,c){if(h.isUndefined(c)){if(!h.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function s(u,c,f){if(f in t)return r(u,c);if(f in e)return r(void 0,u)}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(u,c)=>a(ea(u),ea(c),!0)};return h.forEach(Object.keys(Object.assign({},e,t)),function(c){const f=l[c]||a,d=f(e[c],t[c],c);h.isUndefined(d)&&f!==s||(n[c]=d)}),n}const wi="1.4.0",cr={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{cr[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ta={};cr.transitional=function(t,n,r){function a(i,o){return"[Axios v"+wi+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,s)=>{if(t===!1)throw new z(a(o," has been removed"+(n?" in "+n:"")),z.ERR_DEPRECATED);return n&&!ta[o]&&(ta[o]=!0,console.warn(a(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,s):!0}};function Ql(e,t,n){if(typeof e!="object")throw new z("options must be an object",z.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let a=r.length;for(;a-- >0;){const i=r[a],o=t[i];if(o){const s=e[i],l=s===void 0||o(s,i,e);if(l!==!0)throw new z("option "+i+" must be "+l,z.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new z("Unknown option "+i,z.ERR_BAD_OPTION)}}const Ln={assertOptions:Ql,validators:cr},Ae=Ln.validators;class Ht{constructor(t){this.defaults=t,this.interceptors={request:new Xr,response:new Xr}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Xe(this.defaults,n);const{transitional:r,paramsSerializer:a,headers:i}=n;r!==void 0&&Ln.assertOptions(r,{silentJSONParsing:Ae.transitional(Ae.boolean),forcedJSONParsing:Ae.transitional(Ae.boolean),clarifyTimeoutError:Ae.transitional(Ae.boolean)},!1),a!=null&&(h.isFunction(a)?n.paramsSerializer={serialize:a}:Ln.assertOptions(a,{encode:Ae.function,serialize:Ae.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&h.merge(i.common,i[n.method]),o&&h.forEach(["delete","get","head","post","put","patch","common"],p=>{delete i[p]}),n.headers=be.concat(o,i);const s=[];let l=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(n)===!1||(l=l&&_.synchronous,s.unshift(_.fulfilled,_.rejected))});const u=[];this.interceptors.response.forEach(function(_){u.push(_.fulfilled,_.rejected)});let c,f=0,d;if(!l){const p=[Zr.bind(this),void 0];for(p.unshift.apply(p,s),p.push.apply(p,u),d=p.length,c=Promise.resolve(n);f<d;)c=c.then(p[f++],p[f++]);return c}d=s.length;let m=n;for(f=0;f<d;){const p=s[f++],_=s[f++];try{m=p(m)}catch(O){_.call(this,O);break}}try{c=Zr.call(this,m)}catch(p){return Promise.reject(p)}for(f=0,d=u.length;f<d;)c=c.then(u[f++],u[f++]);return c}getUri(t){t=Xe(this.defaults,t);const n=yi(t.baseURL,t.url);return hi(n,t.params,t.paramsSerializer)}}h.forEach(["delete","get","head","options"],function(t){Ht.prototype[t]=function(n,r){return this.request(Xe(r||{},{method:t,url:n,data:(r||{}).data}))}});h.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,s){return this.request(Xe(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Ht.prototype[t]=n(),Ht.prototype[t+"Form"]=n(!0)});const Dt=Ht;class ur{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(a=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](a);r._listeners=null}),this.promise.then=a=>{let i;const o=new Promise(s=>{r.subscribe(s),i=s}).then(a);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,s){r.reason||(r.reason=new yt(i,o,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ur(function(a){t=a}),cancel:t}}}const Zl=ur;function ec(e){return function(n){return e.apply(null,n)}}function tc(e){return h.isObject(e)&&e.isAxiosError===!0}const zn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(zn).forEach(([e,t])=>{zn[t]=e});const nc=zn;function _i(e){const t=new Dt(e),n=ri(Dt.prototype.request,t);return h.extend(n,Dt.prototype,t,{allOwnKeys:!0}),h.extend(n,t,null,{allOwnKeys:!0}),n.create=function(a){return _i(Xe(e,a))},n}const K=_i(lr);K.Axios=Dt;K.CanceledError=yt;K.CancelToken=Zl;K.isCancel=bi;K.VERSION=wi;K.toFormData=Zt;K.AxiosError=z;K.Cancel=K.CanceledError;K.all=function(t){return Promise.all(t)};K.spread=ec;K.isAxiosError=tc;K.mergeConfig=Xe;K.AxiosHeaders=be;K.formToJSON=e=>gi(h.isHTMLForm(e)?new FormData(e):e);K.HttpStatusCode=nc;K.default=K;const Ie=K,rc=Ha("loginStatus",()=>({isAuthenticated:Q(!1)}));const ac=e=>(Ma("data-v-9f6f0888"),e=e(),Fa(),e),ic={class:"login-container"},oc=ac(()=>ce("h1",{class:"login-title"},"Welcome to Fei Yang",-1)),sc="10000000-ffff-ffff-ffff-000000000001",lc={__name:"login-1",setup(e){const t=rc(),n=Q(null),r=gt({username:"",password:"",token:""});function a(s){console.log(s),r.token=s}function i(){console.log(JSON.stringify(r)),r.username==""||r.password==""?n.value.textContent="请将用户名和密码填写完整！":r.token==""?n.value.textContent="请通过验证！":(n.value.textContent="",Ie.post("/login",r).then(function(s){const{captchaValid:l,accountValid:u,token:c}=s.data;l==="true"?n.value.textContent="":n.value.textContent="验证失败，请重试",u==="true"?n.value.textContent="":n.value.textContent="账号或者密码错误，请重试",l==="true"&&u==="true"&&c?(localStorage.setItem("jwtToken",c),t.isAuthenticated="true",Mn.push("/main")):console.log("token为空！"),console.log(s)}).catch(function(s){console.log(s)}))}function o(){Mn.push("/main")}return(s,l)=>{const u=Qn,c=Zn,f=za,d=Jn;return re(),xe("div",ic,[g(d,{class:"login-form",model:r},{default:x(()=>[oc,g(c,{label:"用户名"},{default:x(()=>[g(u,{modelValue:r.username,"onUpdate:modelValue":l[0]||(l[0]=m=>r.username=m)},null,8,["modelValue"])]),_:1}),g(c,{label:"密码"},{default:x(()=>[g(u,{modelValue:r.password,"onUpdate:modelValue":l[1]||(l[1]=m=>r.password=m)},null,8,["modelValue"])]),_:1}),g(J(Us),{sitekey:sc,onVerify:a}),g(c,null,{default:x(()=>[g(f,{type:"primary",onClick:i},{default:x(()=>[H("登录")]),_:1})]),_:1}),g(c,null,{default:x(()=>[g(f,{type:"primary",onClick:o},{default:x(()=>[H("去主界面（test）")]),_:1})]),_:1}),ce("p",{ref_key:"info",ref:n,class:"warning"},null,512)]),_:1},8,["model"])])}}},cc=Qe(lc,[["__scopeId","data-v-9f6f0888"]]),uc={__name:"Test",setup(e){const t=gt({name:""});return(n,r)=>{const a=Qn,i=Zn,o=Jn;return re(),xe(Yt,null,[H(" 123 "),g(o,{model:t},{default:x(()=>[g(i,{label:"Activity name"},{default:x(()=>[g(a,{modelValue:t.name,"onUpdate:modelValue":r[0]||(r[0]=s=>t.name=s)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])],64)}}};function fr(e){const t=G(()=>e.value.length),n=Q(10);We(()=>n.value,i=>{n.value=i});const r=Q(1);We(()=>r.value,i=>{r.value=i});const a=G(()=>{const i=(r.value-1)*n.value,o=i+n.value;return e.value.slice(i,o)});return{total:t,pageSize:n,currentPage:r,currentPageData:a}}const fc={class:"pagination-block"},dc={__name:"usersTable",setup(e){const t=Q([]);er(()=>{Ie.post("/getUsers").then(function(o){t.value=o.data,console.log(o)}).catch(function(o){console.log(o)})});const{total:n,pageSize:r,currentPage:a,currentPageData:i}=fr(t);return(o,s)=>{const l=rr,u=tr,c=nr;return re(),xe(Yt,null,[g(u,{data:J(i),style:{width:"100%"}},{default:x(()=>[g(l,{prop:"user_id",label:"用户ID"}),g(l,{prop:"username",label:"用户名"}),g(l,{prop:"phone_no",label:"电话号码"}),g(l,{prop:"qq_no",label:"QQ号码"})]),_:1},8,["data"]),ce("div",fc,[g(c,{layout:" sizes, prev, pager, next, jumper, total",total:J(n),"page-size":J(r),"onUpdate:pageSize":s[0]||(s[0]=f=>de(r)?r.value=f:null),"current-page":J(a),"onUpdate:currentPage":s[1]||(s[1]=f=>de(a)?a.value=f:null)},null,8,["total","page-size","current-page"])])],64)}}};const xi=e=>(Ma("data-v-30776d1f"),e=e(),Fa(),e),mc={class:"dialog-footer"},pc=xi(()=>ce("p",null,"123",-1)),hc={class:"dialog-footer"},vc=xi(()=>ce("span",null,"确定要删除该技术员信息吗？",-1)),gc={class:"dialog-footer"},bc={__name:"techniciansTable",setup(e){const t=Q([]);console.log(t),er(()=>{Ie.post("/getTechnicians").then(function(v){t.value=v.data,console.log(v)})});const{total:n,pageSize:r,currentPage:a,currentPageData:i}=fr(t),o=gt({technician_id:"",realname:"",nickname:"",phone_no:"",qq_no:""}),s=Q(!1);function l(){s.value=!0,Object.keys(o).forEach(v=>{o[v]=""})}function u(){s.value=!1,Ie.post("/addTechnician",o).catch(v=>{console.log(v)})}function c(v){}const f=Q(!1);function d(v){Object.keys(o).forEach(w=>{o[w]=v.row[w]}),f.value=!0}function m(){f.value=!1,Ie.post("/updateTechnician",o).catch(v=>{console.log(v)})}const p=Q(!1);var _="";function O(v){p.value=!0,_=v.row.technician_id}function y(){p.value=!1,Ie.post("/deleteTechnician",_).catch(v=>{console.log(v)})}return(v,w)=>{const T=Ye("font-awesome-icon"),P=za,F=rr,$=tr,M=nr,R=Qn,j=Zn,ne=Jn,ie=fo;return re(),xe(Yt,null,[ce("span",null,[g(P,{type:"primary",onClick:l},{default:x(()=>[g(T,{icon:"fa-solid fa-plus",class:"icon"}),H("添加新技术员")]),_:1})]),g($,{data:J(i),style:{width:"100%"}},{default:x(()=>[g(F,{prop:"technician_id",label:"技术员编号"}),g(F,{prop:"realname",label:"真实姓名"}),g(F,{prop:"nickname",label:"昵称"}),g(F,{prop:"phone_no",label:"电话号码"}),g(F,{prop:"qq_no",label:"QQ号码"}),g(F,{fixed:"right",label:"操作"},{default:x(N=>[g(P,{link:"",type:"primary",size:"small",onClick:De=>void 0},{default:x(()=>[H("查看详细")]),_:2},1032,["onClick"]),g(P,{link:"",type:"primary",size:"small",onClick:De=>d(N)},{default:x(()=>[H("编辑")]),_:2},1032,["onClick"]),g(P,{link:"",type:"primary",size:"small",onClick:De=>O(N)},{default:x(()=>[H("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),g(M,{layout:" sizes, prev, pager, next, jumper, total",total:J(n),"page-size":J(r),"onUpdate:pageSize":w[0]||(w[0]=N=>de(r)?r.value=N:null),"current-page":J(a),"onUpdate:currentPage":w[1]||(w[1]=N=>de(a)?a.value=N:null)},null,8,["total","page-size","current-page"]),g(ie,{modelValue:s.value,"onUpdate:modelValue":w[8]||(w[8]=N=>s.value=N),title:"添加新技术员",width:"50%"},{footer:x(()=>[ce("span",mc,[g(P,{onClick:w[7]||(w[7]=N=>s.value=!1)},{default:x(()=>[H("取消")]),_:1}),g(P,{type:"primary",onClick:u},{default:x(()=>[H(" 提交 ")]),_:1})])]),default:x(()=>[g(ne,{model:o,"label-width":"120px","label-position":"left"},{default:x(()=>[g(j,{label:"技术员编号"},{default:x(()=>[g(R,{modelValue:o.technician_id,"onUpdate:modelValue":w[2]||(w[2]=N=>o.technician_id=N)},null,8,["modelValue"])]),_:1}),g(j,{label:"真实姓名"},{default:x(()=>[g(R,{modelValue:o.realname,"onUpdate:modelValue":w[3]||(w[3]=N=>o.realname=N)},null,8,["modelValue"])]),_:1}),g(j,{label:"昵称"},{default:x(()=>[g(R,{modelValue:o.nickname,"onUpdate:modelValue":w[4]||(w[4]=N=>o.nickname=N)},null,8,["modelValue"])]),_:1}),g(j,{label:"电话号码"},{default:x(()=>[g(R,{modelValue:o.phone_no,"onUpdate:modelValue":w[5]||(w[5]=N=>o.phone_no=N)},null,8,["modelValue"])]),_:1}),g(j,{label:"QQ号码"},{default:x(()=>[g(R,{modelValue:o.qq_no,"onUpdate:modelValue":w[6]||(w[6]=N=>o.qq_no=N)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),g(ie,{modelValue:f.value,"onUpdate:modelValue":w[15]||(w[15]=N=>f.value=N),title:"修改信息",width:"50%"},{footer:x(()=>[ce("span",hc,[g(P,{onClick:w[14]||(w[14]=N=>f.value=!1)},{default:x(()=>[H("取消")]),_:1}),g(P,{type:"primary",onClick:m},{default:x(()=>[H(" 确认 ")]),_:1})])]),default:x(()=>[pc,g(ne,{model:o},{default:x(()=>[g(j,{label:"技术员编号"},{default:x(()=>[g(R,{modelValue:o.technician_id,"onUpdate:modelValue":w[9]||(w[9]=N=>o.technician_id=N),disabled:""},null,8,["modelValue"])]),_:1}),g(j,{label:"技术员姓名"},{default:x(()=>[g(R,{modelValue:o.realname,"onUpdate:modelValue":w[10]||(w[10]=N=>o.realname=N),disabled:""},null,8,["modelValue"])]),_:1}),g(j,{label:"昵称"},{default:x(()=>[g(R,{modelValue:o.nickname,"onUpdate:modelValue":w[11]||(w[11]=N=>o.nickname=N)},null,8,["modelValue"])]),_:1}),g(j,{label:"电话号码"},{default:x(()=>[g(R,{modelValue:o.phone_no,"onUpdate:modelValue":w[12]||(w[12]=N=>o.phone_no=N)},null,8,["modelValue"])]),_:1}),g(j,{label:"QQ号码"},{default:x(()=>[g(R,{modelValue:o.qq_no,"onUpdate:modelValue":w[13]||(w[13]=N=>o.qq_no=N)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),g(ie,{modelValue:p.value,"onUpdate:modelValue":w[17]||(w[17]=N=>p.value=N),title:"Tips",width:"30%"},{footer:x(()=>[ce("span",gc,[g(P,{onClick:w[16]||(w[16]=N=>p.value=!1)},{default:x(()=>[H("取消")]),_:1}),g(P,{type:"primary",onClick:y},{default:x(()=>[H(" 确认 ")]),_:1})])]),default:x(()=>[vc]),_:1},8,["modelValue"])],64)}}},yc=Qe(bc,[["__scopeId","data-v-30776d1f"]]),wc={class:"pagination-block"},_c={__name:"ordersTable",setup(e){const t=Q([]);er(()=>{Ie.post("/getOrders").then(function(o){t.value=o.data,console.log(o)}).catch(function(o){console.log(o)})});const{total:n,pageSize:r,currentPage:a,currentPageData:i}=fr(t);return(o,s)=>{const l=rr,u=tr,c=nr;return re(),xe(Yt,null,[g(u,{data:J(i),style:{width:"100%"}},{default:x(()=>[g(l,{prop:"order_id",label:"订单编号"}),g(l,{prop:"user_id",label:"用户编号"}),g(l,{prop:"technician_id",label:"技术员编号"}),g(l,{prop:"created_at",label:"创建时间"}),g(l,{prop:"completed_at",label:"完成时间"}),g(l,{prop:"status",label:"订单状态"})]),_:1},8,["data"]),ce("div",wc,[g(c,{layout:" sizes, prev, pager, next, jumper, total",total:J(n),"page-size":J(r),"onUpdate:pageSize":s[0]||(s[0]=f=>de(r)?r.value=f:null),"current-page":J(a),"onUpdate:currentPage":s[1]||(s[1]=f=>de(a)?a.value=f:null)},null,8,["total","page-size","current-page"])])],64)}}};const xc={id:"weeklyOrder"},kc={__name:"showData",setup(e){return(t,n)=>(re(),xe("div",xc))}},Ec=[{path:"/",redirect:"/login1"},{path:"/login1",name:"LoginPage",component:cc},{path:"/main",component:Is,children:[{path:"",component:kc},{path:"users",component:dc},{path:"technicians",component:yc},{path:"orders",component:_c}]},{path:"/test",component:uc}],Mn=Ss({history:$o(),routes:Ec});function na(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?na(Object(n),!0).forEach(function(r){X(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):na(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Bt(e){"@babel/helpers - typeof";return Bt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bt(e)}function Sc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ra(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ac(e,t,n){return t&&ra(e.prototype,t),n&&ra(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function dr(e,t){return Cc(e)||Rc(e,t)||ki(e,t)||Tc()}function wt(e){return Oc(e)||Pc(e)||ki(e)||Nc()}function Oc(e){if(Array.isArray(e))return Fn(e)}function Cc(e){if(Array.isArray(e))return e}function Pc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Rc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function ki(e,t){if(e){if(typeof e=="string")return Fn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fn(e,t)}}function Fn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Nc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Tc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var aa=function(){},mr={},Ei={},Si=null,Ai={mark:aa,measure:aa};try{typeof window<"u"&&(mr=window),typeof document<"u"&&(Ei=document),typeof MutationObserver<"u"&&(Si=MutationObserver),typeof performance<"u"&&(Ai=performance)}catch{}var Ic=mr.navigator||{},ia=Ic.userAgent,oa=ia===void 0?"":ia,Re=mr,V=Ei,sa=Si,St=Ai;Re.document;var ke=!!V.documentElement&&!!V.head&&typeof V.addEventListener=="function"&&typeof V.createElement=="function",Oi=~oa.indexOf("MSIE")||~oa.indexOf("Trident/"),At,Ot,Ct,Pt,Rt,ye="___FONT_AWESOME___",Dn=16,Ci="fa",Pi="svg-inline--fa",Me="data-fa-i2svg",jn="data-fa-pseudo-element",Lc="data-fa-pseudo-element-pending",pr="data-prefix",hr="data-icon",la="fontawesome-i2svg",zc="async",Mc=["HTML","HEAD","STYLE","SCRIPT"],Ri=function(){try{return!0}catch{return!1}}(),B="classic",q="sharp",vr=[B,q];function _t(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[B]}})}var dt=_t((At={},X(At,B,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),X(At,q,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),At)),mt=_t((Ot={},X(Ot,B,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),X(Ot,q,{solid:"fass",regular:"fasr",light:"fasl"}),Ot)),pt=_t((Ct={},X(Ct,B,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),X(Ct,q,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Ct)),Fc=_t((Pt={},X(Pt,B,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),X(Pt,q,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Pt)),Dc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Ni="fa-layers-text",jc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Uc=_t((Rt={},X(Rt,B,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),X(Rt,q,{900:"fass",400:"fasr",300:"fasl"}),Rt)),Ti=[1,2,3,4,5,6,7,8,9,10],$c=Ti.concat([11,12,13,14,15,16,17,18,19,20]),Hc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Le={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ht=new Set;Object.keys(mt[B]).map(ht.add.bind(ht));Object.keys(mt[q]).map(ht.add.bind(ht));var Bc=[].concat(vr,wt(ht),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Le.GROUP,Le.SWAP_OPACITY,Le.PRIMARY,Le.SECONDARY]).concat(Ti.map(function(e){return"".concat(e,"x")})).concat($c.map(function(e){return"w-".concat(e)})),lt=Re.FontAwesomeConfig||{};function Vc(e){var t=V.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function qc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(V&&typeof V.querySelector=="function"){var Wc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Wc.forEach(function(e){var t=dr(e,2),n=t[0],r=t[1],a=qc(Vc(n));a!=null&&(lt[r]=a)})}var Ii={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ci,replacementClass:Pi,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};lt.familyPrefix&&(lt.cssPrefix=lt.familyPrefix);var Je=E(E({},Ii),lt);Je.autoReplaceSvg||(Je.observeMutations=!1);var A={};Object.keys(Ii).forEach(function(e){Object.defineProperty(A,e,{enumerable:!0,set:function(n){Je[e]=n,ct.forEach(function(r){return r(A)})},get:function(){return Je[e]}})});Object.defineProperty(A,"familyPrefix",{enumerable:!0,set:function(t){Je.cssPrefix=t,ct.forEach(function(n){return n(A)})},get:function(){return Je.cssPrefix}});Re.FontAwesomeConfig=A;var ct=[];function Yc(e){return ct.push(e),function(){ct.splice(ct.indexOf(e),1)}}var Oe=Dn,fe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Gc(e){if(!(!e||!ke)){var t=V.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=V.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return V.head.insertBefore(t,r),e}}var Kc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function vt(){for(var e=12,t="";e-- >0;)t+=Kc[Math.random()*62|0];return t}function et(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function gr(e){return e.classList?et(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Li(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Xc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Li(e[n]),'" ')},"").trim()}function nn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function br(e){return e.size!==fe.size||e.x!==fe.x||e.y!==fe.y||e.rotate!==fe.rotate||e.flipX||e.flipY}function Jc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function Qc(e){var t=e.transform,n=e.width,r=n===void 0?Dn:n,a=e.height,i=a===void 0?Dn:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Oi?l+="translate(".concat(t.x/Oe-r/2,"em, ").concat(t.y/Oe-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Oe,"em), calc(-50% + ").concat(t.y/Oe,"em)) "):l+="translate(".concat(t.x/Oe,"em, ").concat(t.y/Oe,"em) "),l+="scale(".concat(t.size/Oe*(t.flipX?-1:1),", ").concat(t.size/Oe*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Zc=`:root, :host {
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
}`;function zi(){var e=Ci,t=Pi,n=A.cssPrefix,r=A.replacementClass,a=Zc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ca=!1;function _n(){A.autoAddCss&&!ca&&(Gc(zi()),ca=!0)}var eu={mixout:function(){return{dom:{css:zi,insertCss:_n}}},hooks:function(){return{beforeDOMElementCreation:function(){_n()},beforeI2svg:function(){_n()}}}},we=Re||{};we[ye]||(we[ye]={});we[ye].styles||(we[ye].styles={});we[ye].hooks||(we[ye].hooks={});we[ye].shims||(we[ye].shims=[]);var se=we[ye],Mi=[],tu=function e(){V.removeEventListener("DOMContentLoaded",e),Vt=1,Mi.map(function(t){return t()})},Vt=!1;ke&&(Vt=(V.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V.readyState),Vt||V.addEventListener("DOMContentLoaded",tu));function nu(e){ke&&(Vt?setTimeout(e,0):Mi.push(e))}function xt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Li(e):"<".concat(t," ").concat(Xc(r),">").concat(i.map(xt).join(""),"</").concat(t,">")}function ua(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ru=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},xn=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?ru(n,a):n,l,u,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)u=i[l],c=s(c,t[u],u,t);return c};function au(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Un(e){var t=au(e);return t.length===1?t[0].toString(16):null}function iu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function fa(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function $n(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=fa(t);typeof se.hooks.addPack=="function"&&!a?se.hooks.addPack(e,fa(t)):se.styles[e]=E(E({},se.styles[e]||{}),i),e==="fas"&&$n("fa",t)}var Nt,Tt,It,He=se.styles,ou=se.shims,su=(Nt={},X(Nt,B,Object.values(pt[B])),X(Nt,q,Object.values(pt[q])),Nt),yr=null,Fi={},Di={},ji={},Ui={},$i={},lu=(Tt={},X(Tt,B,Object.keys(dt[B])),X(Tt,q,Object.keys(dt[q])),Tt);function cu(e){return~Bc.indexOf(e)}function uu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!cu(a)?a:null}var Hi=function(){var t=function(i){return xn(He,function(o,s,l){return o[l]=xn(s,i,{}),o},{})};Fi=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Di=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),$i=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in He||A.autoFetchSvg,r=xn(ou,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});ji=r.names,Ui=r.unicodes,yr=rn(A.styleDefault,{family:A.familyDefault})};Yc(function(e){yr=rn(e.styleDefault,{family:A.familyDefault})});Hi();function wr(e,t){return(Fi[e]||{})[t]}function fu(e,t){return(Di[e]||{})[t]}function ze(e,t){return($i[e]||{})[t]}function Bi(e){return ji[e]||{prefix:null,iconName:null}}function du(e){var t=Ui[e],n=wr("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ne(){return yr}var _r=function(){return{prefix:null,iconName:null,rest:[]}};function rn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?B:n,a=dt[r][e],i=mt[r][e]||mt[r][a],o=e in se.styles?e:null;return i||o||null}var da=(It={},X(It,B,Object.keys(pt[B])),X(It,q,Object.keys(pt[q])),It);function an(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},X(t,B,"".concat(A.cssPrefix,"-").concat(B)),X(t,q,"".concat(A.cssPrefix,"-").concat(q)),t),o=null,s=B;(e.includes(i[B])||e.some(function(u){return da[B].includes(u)}))&&(s=B),(e.includes(i[q])||e.some(function(u){return da[q].includes(u)}))&&(s=q);var l=e.reduce(function(u,c){var f=uu(A.cssPrefix,c);if(He[c]?(c=su[s].includes(c)?Fc[s][c]:c,o=c,u.prefix=c):lu[s].indexOf(c)>-1?(o=c,u.prefix=rn(c,{family:s})):f?u.iconName=f:c!==A.replacementClass&&c!==i[B]&&c!==i[q]&&u.rest.push(c),!a&&u.prefix&&u.iconName){var d=o==="fa"?Bi(u.iconName):{},m=ze(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||m||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!He.far&&He.fas&&!A.autoFetchSvg&&(u.prefix="fas")}return u},_r());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===q&&(He.fass||A.autoFetchSvg)&&(l.prefix="fass",l.iconName=ze(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ne()||"fas"),l}var mu=function(){function e(){Sc(this,e),this.definitions={}}return Ac(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),$n(s,o[s]);var l=pt[B][s];l&&$n(l,o[s]),Hi()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[s][f]=u)}),n[s][l]=u}),n}}]),e}(),ma=[],Be={},Ve={},pu=Object.keys(Ve);function hu(e,t){var n=t.mixoutsTo;return ma=e,Be={},Object.keys(Ve).forEach(function(r){pu.indexOf(r)===-1&&delete Ve[r]}),ma.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Bt(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Be[o]||(Be[o]=[]),Be[o].push(i[o])})}r.provides&&r.provides(Ve)}),n}function Hn(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Be[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Fe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Be[e]||[];a.forEach(function(i){i.apply(null,n)})}function _e(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ve[e]?Ve[e].apply(null,t):void 0}function Bn(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ne();if(t)return t=ze(n,t)||t,ua(Vi.definitions,n,t)||ua(se.styles,n,t)}var Vi=new mu,vu=function(){A.autoReplaceSvg=!1,A.observeMutations=!1,Fe("noAuto")},gu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ke?(Fe("beforeI2svg",t),_e("pseudoElements2svg",t),_e("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;A.autoReplaceSvg===!1&&(A.autoReplaceSvg=!0),A.observeMutations=!0,nu(function(){yu({autoReplaceSvgRoot:n}),Fe("watch",t)})}},bu={icon:function(t){if(t===null)return null;if(Bt(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ze(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=rn(t[0]);return{prefix:r,iconName:ze(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(A.cssPrefix,"-"))>-1||t.match(Dc))){var a=an(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ne(),iconName:ze(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ne();return{prefix:i,iconName:ze(i,t)||t}}}},ae={noAuto:vu,config:A,dom:gu,parse:bu,library:Vi,findIconDefinition:Bn,toHtml:xt},yu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?V:n;(Object.keys(se.styles).length>0||A.autoFetchSvg)&&ke&&A.autoReplaceSvg&&ae.dom.i2svg({node:r})};function on(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return xt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(ke){var r=V.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function wu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(br(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=nn(E(E({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function _u(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(A.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function xr(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,d=e.watchable,m=d===void 0?!1:d,p=r.found?r:n,_=p.width,O=p.height,y=a==="fak",v=[A.replacementClass,i?"".concat(A.cssPrefix,"-").concat(i):""].filter(function(R){return f.classes.indexOf(R)===-1}).filter(function(R){return R!==""||!!R}).concat(f.classes).join(" "),w={children:[],attributes:E(E({},f.attributes),{},{"data-prefix":a,"data-icon":i,class:v,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(O)})},T=y&&!~f.classes.indexOf("fa-fw")?{width:"".concat(_/O*16*.0625,"em")}:{};m&&(w.attributes[Me]=""),l&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(c||vt())},children:[l]}),delete w.attributes.title);var P=E(E({},w),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:E(E({},T),f.styles)}),F=r.found&&n.found?_e("generateAbstractMask",P)||{children:[],attributes:{}}:_e("generateAbstractIcon",P)||{children:[],attributes:{}},$=F.children,M=F.attributes;return P.children=$,P.attributes=M,s?_u(P):wu(P)}function pa(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[Me]="");var c=E({},o.styles);br(a)&&(c.transform=Qc({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=nn(c);f.length>0&&(u.style=f);var d=[];return d.push({tag:"span",attributes:u,children:[t]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function xu(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=nn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var kn=se.styles;function Vn(e){var t=e[0],n=e[1],r=e.slice(4),a=dr(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(A.cssPrefix,"-").concat(Le.GROUP)},children:[{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(Le.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(Le.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var ku={found:!1,width:512,height:512};function Eu(e,t){!Ri&&!A.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function qn(e,t){var n=t;return t==="fa"&&A.styleDefault!==null&&(t=Ne()),new Promise(function(r,a){if(_e("missingIconAbstract"),n==="fa"){var i=Bi(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&kn[t]&&kn[t][e]){var o=kn[t][e];return r(Vn(o))}Eu(e,t),r(E(E({},ku),{},{icon:A.showMissingIcons&&e?_e("missingIconAbstract")||{}:{}}))})}var ha=function(){},Wn=A.measurePerformance&&St&&St.mark&&St.measure?St:{mark:ha,measure:ha},at='FA "6.4.0"',Su=function(t){return Wn.mark("".concat(at," ").concat(t," begins")),function(){return qi(t)}},qi=function(t){Wn.mark("".concat(at," ").concat(t," ends")),Wn.measure("".concat(at," ").concat(t),"".concat(at," ").concat(t," begins"),"".concat(at," ").concat(t," ends"))},kr={begin:Su,end:qi},jt=function(){};function va(e){var t=e.getAttribute?e.getAttribute(Me):null;return typeof t=="string"}function Au(e){var t=e.getAttribute?e.getAttribute(pr):null,n=e.getAttribute?e.getAttribute(hr):null;return t&&n}function Ou(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(A.replacementClass)}function Cu(){if(A.autoReplaceSvg===!0)return Ut.replace;var e=Ut[A.autoReplaceSvg];return e||Ut.replace}function Pu(e){return V.createElementNS("http://www.w3.org/2000/svg",e)}function Ru(e){return V.createElement(e)}function Wi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Pu:Ru:n;if(typeof e=="string")return V.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Wi(o,{ceFn:r}))}),a}function Nu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ut={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Wi(a),n)}),n.getAttribute(Me)===null&&A.keepOriginalSource){var r=V.createComment(Nu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~gr(n).indexOf(A.replacementClass))return Ut.replace(t);var a=new RegExp("".concat(A.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===A.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return xt(s)}).join(`
`);n.setAttribute(Me,""),n.innerHTML=o}};function ga(e){e()}function Yi(e,t){var n=typeof t=="function"?t:jt;if(e.length===0)n();else{var r=ga;A.mutateApproach===zc&&(r=Re.requestAnimationFrame||ga),r(function(){var a=Cu(),i=kr.begin("mutate");e.map(a),i(),n()})}}var Er=!1;function Gi(){Er=!0}function Yn(){Er=!1}var qt=null;function ba(e){if(sa&&A.observeMutations){var t=e.treeCallback,n=t===void 0?jt:t,r=e.nodeCallback,a=r===void 0?jt:r,i=e.pseudoElementsCallback,o=i===void 0?jt:i,s=e.observeMutationsRoot,l=s===void 0?V:s;qt=new sa(function(u){if(!Er){var c=Ne();et(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!va(f.addedNodes[0])&&(A.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&A.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&va(f.target)&&~Hc.indexOf(f.attributeName))if(f.attributeName==="class"&&Au(f.target)){var d=an(gr(f.target)),m=d.prefix,p=d.iconName;f.target.setAttribute(pr,m||c),p&&f.target.setAttribute(hr,p)}else Ou(f.target)&&a(f.target)})}}),ke&&qt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Tu(){qt&&qt.disconnect()}function Iu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Lu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=an(gr(e));return a.prefix||(a.prefix=Ne()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=fu(a.prefix,e.innerText)||wr(a.prefix,Un(e.innerText))),!a.iconName&&A.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function zu(e){var t=et(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return A.autoA11y&&(n?t["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(r||vt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Mu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:fe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ya(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Lu(e),r=n.iconName,a=n.prefix,i=n.rest,o=zu(e),s=Hn("parseNodeAttributes",{},e),l=t.styleParser?Iu(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:fe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Fu=se.styles;function Ki(e){var t=A.autoReplaceSvg==="nest"?ya(e,{styleParser:!1}):ya(e);return~t.extra.classes.indexOf(Ni)?_e("generateLayersText",e,t):_e("generateSvgReplacementMutation",e,t)}var Te=new Set;vr.map(function(e){Te.add("fa-".concat(e))});Object.keys(dt[B]).map(Te.add.bind(Te));Object.keys(dt[q]).map(Te.add.bind(Te));Te=wt(Te);function wa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ke)return Promise.resolve();var n=V.documentElement.classList,r=function(f){return n.add("".concat(la,"-").concat(f))},a=function(f){return n.remove("".concat(la,"-").concat(f))},i=A.autoFetchSvg?Te:vr.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Fu));i.includes("fa")||i.push("fa");var o=[".".concat(Ni,":not([").concat(Me,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Me,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=et(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=kr.begin("onTree"),u=s.reduce(function(c,f){try{var d=Ki(f);d&&c.push(d)}catch(m){Ri||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(d){Yi(d,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(d){l(),f(d)})})}function Du(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ki(e).then(function(n){n&&Yi([n],t)})}function ju(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Bn(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Bn(a||{})),e(r,E(E({},n),{},{mask:a}))}}var Uu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?fe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,f=n.title,d=f===void 0?null:f,m=n.titleId,p=m===void 0?null:m,_=n.classes,O=_===void 0?[]:_,y=n.attributes,v=y===void 0?{}:y,w=n.styles,T=w===void 0?{}:w;if(t){var P=t.prefix,F=t.iconName,$=t.icon;return on(E({type:"icon"},t),function(){return Fe("beforeDOMElementCreation",{iconDefinition:t,params:n}),A.autoA11y&&(d?v["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(p||vt()):(v["aria-hidden"]="true",v.focusable="false")),xr({icons:{main:Vn($),mask:l?Vn(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:F,transform:E(E({},fe),a),symbol:o,title:d,maskId:c,titleId:p,extra:{attributes:v,styles:T,classes:O}})})}},$u={mixout:function(){return{icon:ju(Uu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=wa,n.nodeCallback=Du,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?V:r,i=n.callback,o=i===void 0?function(){}:i;return wa(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,d=r.extra;return new Promise(function(m,p){Promise.all([qn(a,s),c.iconName?qn(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var O=dr(_,2),y=O[0],v=O[1];m([n,xr({icons:{main:y,mask:v},prefix:s,iconName:a,transform:l,symbol:u,maskId:f,title:i,titleId:o,extra:d,watchable:!0})])}).catch(p)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=nn(s);l.length>0&&(a.style=l);var u;return br(o)&&(u=_e("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},Hu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return on({type:"layer"},function(){Fe("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(A.cssPrefix,"-layers")].concat(wt(i)).join(" ")},children:o}]})}}}},Bu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return on({type:"counter",content:n},function(){return Fe("beforeDOMElementCreation",{content:n,params:r}),xu({content:n.toString(),title:i,extra:{attributes:u,styles:f,classes:["".concat(A.cssPrefix,"-layers-counter")].concat(wt(s))}})})}}}},Vu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?fe:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,d=r.styles,m=d===void 0?{}:d;return on({type:"text",content:n},function(){return Fe("beforeDOMElementCreation",{content:n,params:r}),pa({content:n,transform:E(E({},fe),i),title:s,extra:{attributes:f,styles:m,classes:["".concat(A.cssPrefix,"-layers-text")].concat(wt(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Oi){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return A.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,pa({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},qu=new RegExp('"',"ug"),_a=[1105920,1112319];function Wu(e){var t=e.replace(qu,""),n=iu(t,0),r=n>=_a[0]&&n<=_a[1],a=t.length===2?t[0]===t[1]:!1;return{value:Un(a?t[0]:t),isSecondary:r||a}}function xa(e,t){var n="".concat(Lc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=et(e.children),o=i.filter(function($){return $.getAttribute(jn)===t})[0],s=Re.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(jc),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=s.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?q:B,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?mt[d][l[2].toLowerCase()]:Uc[d][u],p=Wu(f),_=p.value,O=p.isSecondary,y=l[0].startsWith("FontAwesome"),v=wr(m,_),w=v;if(y){var T=du(_);T.iconName&&T.prefix&&(v=T.iconName,m=T.prefix)}if(v&&!O&&(!o||o.getAttribute(pr)!==m||o.getAttribute(hr)!==w)){e.setAttribute(n,w),o&&e.removeChild(o);var P=Mu(),F=P.extra;F.attributes[jn]=t,qn(v,m).then(function($){var M=xr(E(E({},P),{},{icons:{main:$,mask:_r()},prefix:m,iconName:w,extra:F,watchable:!0})),R=V.createElement("svg");t==="::before"?e.insertBefore(R,e.firstChild):e.appendChild(R),R.outerHTML=M.map(function(j){return xt(j)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Yu(e){return Promise.all([xa(e,"::before"),xa(e,"::after")])}function Gu(e){return e.parentNode!==document.head&&!~Mc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(jn)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ka(e){if(ke)return new Promise(function(t,n){var r=et(e.querySelectorAll("*")).filter(Gu).map(Yu),a=kr.begin("searchPseudoElements");Gi(),Promise.all(r).then(function(){a(),Yn(),t()}).catch(function(){a(),Yn(),n()})})}var Ku={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ka,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?V:r;A.searchPseudoElements&&ka(a)}}},Ea=!1,Xu={mixout:function(){return{dom:{unwatch:function(){Gi(),Ea=!0}}}},hooks:function(){return{bootstrap:function(){ba(Hn("mutationObserverCallbacks",{}))},noAuto:function(){Tu()},watch:function(n){var r=n.observeMutationsRoot;Ea?Yn():ba(Hn("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Sa=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Ju={mixout:function(){return{parse:{transform:function(n){return Sa(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Sa(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(o/2*-1," -256)")},m={outer:s,inner:f,path:d};return{tag:"g",attributes:E({},m.outer),children:[{tag:"g",attributes:E({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),m.path)}]}]}}}},En={x:0,y:0,width:"100%",height:"100%"};function Aa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Qu(e){return e.tag==="g"?e.children:[e]}var Zu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?an(a.split(" ").map(function(o){return o.trim()})):_r();return i.prefix||(i.prefix=Ne()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,c=i.icon,f=o.width,d=o.icon,m=Jc({transform:l,containerWidth:f,iconWidth:u}),p={tag:"rect",attributes:E(E({},En),{},{fill:"white"})},_=c.children?{children:c.children.map(Aa)}:{},O={tag:"g",attributes:E({},m.inner),children:[Aa(E({tag:c.tag,attributes:E(E({},c.attributes),m.path)},_))]},y={tag:"g",attributes:E({},m.outer),children:[O]},v="mask-".concat(s||vt()),w="clip-".concat(s||vt()),T={tag:"mask",attributes:E(E({},En),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,y]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:Qu(d)},T]};return r.push(P,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(v,")")},En)}),{children:r,attributes:a}}}},ef={provides:function(t){var n=!1;Re.matchMedia&&(n=Re.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},tf={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},nf=[eu,$u,Hu,Bu,Vu,Ku,Xu,Ju,Zu,ef,tf];hu(nf,{mixoutsTo:ae});ae.noAuto;ae.config;var rf=ae.library;ae.dom;var Gn=ae.parse;ae.findIconDefinition;ae.toHtml;var af=ae.icon;ae.layer;ae.text;ae.counter;function Oa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ge(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Oa(Object(n),!0).forEach(function(r){te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oa(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Wt(e){"@babel/helpers - typeof";return Wt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wt(e)}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function of(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function sf(e,t){if(e==null)return{};var n=of(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var lf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xi={exports:{}};(function(e){(function(t){var n=function(y,v,w){if(!u(v)||f(v)||d(v)||m(v)||l(v))return v;var T,P=0,F=0;if(c(v))for(T=[],F=v.length;P<F;P++)T.push(n(y,v[P],w));else{T={};for(var $ in v)Object.prototype.hasOwnProperty.call(v,$)&&(T[y($,w)]=n(y,v[$],w))}return T},r=function(y,v){v=v||{};var w=v.separator||"_",T=v.split||/(?=[A-Z])/;return y.split(T).join(w)},a=function(y){return p(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(v,w){return w?w.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var v=a(y);return v.substr(0,1).toUpperCase()+v.substr(1)},o=function(y,v){return r(y,v).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},c=function(y){return s.call(y)=="[object Array]"},f=function(y){return s.call(y)=="[object Date]"},d=function(y){return s.call(y)=="[object RegExp]"},m=function(y){return s.call(y)=="[object Boolean]"},p=function(y){return y=y-0,y===y},_=function(y,v){var w=v&&"process"in v?v.process:v;return typeof w!="function"?y:function(T,P){return w(T,y,P)}},O={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,v){return n(_(a,v),y)},decamelizeKeys:function(y,v){return n(_(o,v),y,v)},pascalizeKeys:function(y,v){return n(_(i,v),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=O:t.humps=O})(lf)})(Xi);var cf=Xi.exports,uf=["class","style"];function ff(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=cf.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function df(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ji(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ji(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.class=df(c);break;case"style":l.style=ff(c);break;default:l.attrs[u]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=sf(n,uf);return Xn(e.tag,ge(ge(ge({},t),{},{class:a.class,style:ge(ge({},a.style),o)},a.attrs),s),r)}var Qi=!1;try{Qi=!0}catch{}function mf(){if(!Qi&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Sn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?te({},e,t):{}}function pf(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},te(t,"fa-".concat(e.size),e.size!==null),te(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),te(t,"fa-pull-".concat(e.pull),e.pull!==null),te(t,"fa-swap-opacity",e.swapOpacity),te(t,"fa-bounce",e.bounce),te(t,"fa-shake",e.shake),te(t,"fa-beat",e.beat),te(t,"fa-fade",e.fade),te(t,"fa-beat-fade",e.beatFade),te(t,"fa-flash",e.flash),te(t,"fa-spin-pulse",e.spinPulse),te(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ca(e){if(e&&Wt(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Gn.icon)return Gn.icon(e);if(e===null)return null;if(Wt(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var hf=Kn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=G(function(){return Ca(t.icon)}),i=G(function(){return Sn("classes",pf(t))}),o=G(function(){return Sn("transform",typeof t.transform=="string"?Gn.transform(t.transform):t.transform)}),s=G(function(){return Sn("mask",Ca(t.mask))}),l=G(function(){return af(a.value,ge(ge(ge(ge({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});We(l,function(c){if(!c)return mf("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=G(function(){return l.value?Ji(l.value.abstract[0],{},r):null});return function(){return u.value}}}),vf={prefix:"fas",iconName:"file-lines",icon:[384,512,[128441,128462,61686,"file-alt","file-text"],"f15c","M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},gf={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},bf={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"]},yf={prefix:"fas",iconName:"circle-arrow-left",icon:[512,512,["arrow-circle-left"],"f0a8","M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM231 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71L376 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-182.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L119 273c-9.4-9.4-9.4-24.6 0-33.9L231 127z"]},wf={prefix:"fas",iconName:"circle-arrow-right",icon:[512,512,["arrow-circle-right"],"f0a9","M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z"]},_f={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},xf={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},kf={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},Ef={prefix:"fas",iconName:"users-gear",icon:[640,512,["users-cog"],"f509","M144 160A80 80 0 1 0 144 0a80 80 0 1 0 0 160zm368 0A80 80 0 1 0 512 0a80 80 0 1 0 0 160zM0 298.7C0 310.4 9.6 320 21.3 320H234.7c.2 0 .4 0 .7 0c-26.6-23.5-43.3-57.8-43.3-96c0-7.6 .7-15 1.9-22.3c-13.6-6.3-28.7-9.7-44.6-9.7H106.7C47.8 192 0 239.8 0 298.7zM320 320c24 0 45.9-8.8 62.7-23.3c2.5-3.7 5.2-7.3 8-10.7c2.7-3.3 5.7-6.1 9-8.3C410 262.3 416 243.9 416 224c0-53-43-96-96-96s-96 43-96 96s43 96 96 96zm65.4 60.2c-10.3-5.9-18.1-16.2-20.8-28.2H261.3C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7H455.2c-2.1-5.2-3.2-10.9-3.2-16.4v-3c-1.3-.7-2.7-1.5-4-2.3l-2.6 1.5c-16.8 9.7-40.5 8-54.7-9.7c-4.5-5.6-8.6-11.5-12.4-17.6l-.1-.2-.1-.2-2.4-4.1-.1-.2-.1-.2c-3.4-6.2-6.4-12.6-9-19.3c-8.2-21.2 2.2-42.6 19-52.3l2.7-1.5c0-.8 0-1.5 0-2.3s0-1.5 0-2.3l-2.7-1.5zM533.3 192H490.7c-15.9 0-31 3.5-44.6 9.7c1.3 7.2 1.9 14.7 1.9 22.3c0 17.4-3.5 33.9-9.7 49c2.5 .9 4.9 2 7.1 3.3l2.6 1.5c1.3-.8 2.6-1.6 4-2.3v-3c0-19.4 13.3-39.1 35.8-42.6c7.9-1.2 16-1.9 24.2-1.9s16.3 .6 24.2 1.9c22.5 3.5 35.8 23.2 35.8 42.6v3c1.3 .7 2.7 1.5 4 2.3l2.6-1.5c16.8-9.7 40.5-8 54.7 9.7c2.3 2.8 4.5 5.8 6.6 8.7c-2.1-57.1-49-102.7-106.6-102.7zm91.3 163.9c6.3-3.6 9.5-11.1 6.8-18c-2.1-5.5-4.6-10.8-7.4-15.9l-2.3-4c-3.1-5.1-6.5-9.9-10.2-14.5c-4.6-5.7-12.7-6.7-19-3L574.4 311c-8.9-7.6-19.1-13.6-30.4-17.6v-21c0-7.3-4.9-13.8-12.1-14.9c-6.5-1-13.1-1.5-19.9-1.5s-13.4 .5-19.9 1.5c-7.2 1.1-12.1 7.6-12.1 14.9v21c-11.2 4-21.5 10-30.4 17.6l-18.2-10.5c-6.3-3.6-14.4-2.6-19 3c-3.7 4.6-7.1 9.5-10.2 14.6l-2.3 3.9c-2.8 5.1-5.3 10.4-7.4 15.9c-2.6 6.8 .5 14.3 6.8 17.9l18.2 10.5c-1 5.7-1.6 11.6-1.6 17.6s.6 11.9 1.6 17.5l-18.2 10.5c-6.3 3.6-9.5 11.1-6.8 17.9c2.1 5.5 4.6 10.7 7.4 15.8l2.4 4.1c3 5.1 6.4 9.9 10.1 14.5c4.6 5.7 12.7 6.7 19 3L449.6 457c8.9 7.6 19.2 13.6 30.4 17.6v21c0 7.3 4.9 13.8 12.1 14.9c6.5 1 13.1 1.5 19.9 1.5s13.4-.5 19.9-1.5c7.2-1.1 12.1-7.6 12.1-14.9v-21c11.2-4 21.5-10 30.4-17.6l18.2 10.5c6.3 3.6 14.4 2.6 19-3c3.7-4.6 7.1-9.4 10.1-14.5l2.4-4.2c2.8-5.1 5.3-10.3 7.4-15.8c2.6-6.8-.5-14.3-6.8-17.9l-18.2-10.5c1-5.7 1.6-11.6 1.6-17.5s-.6-11.9-1.6-17.6l18.2-10.5zM472 384a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z"]},Sf={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};rf.add(_f,Sf,gf,yf,wf,bf,Ef,kf,vf,xf);const sn=mo(ko),Af=ho();sn.use(Mn);sn.use(Af);sn.component("font-awesome-icon",hf);sn.mount("#app");
