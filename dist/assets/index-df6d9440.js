import{e as ba,r as ee,m as wa,i as Be,w as $e,a as Vn,b as Ft,c as xa,t as $i,h as Ui,g as Hi,o as Wi,n as Ea,d as Vi,f as W,j as rt,k as ft,l as O,p as de,s as qi,u as je,q as Yi,v as qn,x as Yn,y as cn,z as N,E as Gi,A as Q,B as Gn,C as Ki,D as Ji,F as Xi,G as Qi,H as Zi,I as eo,J as to,K as no,L as ro,M as ao,N as Pt,O as Ce,P as gr,Q as ka,R as _a,S as io,T as oo,U as so,V as co,W as lo}from"./element-plus-7e807976.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var uo=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Sa;const Ht=e=>Sa=e,Aa=Symbol();function En(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Qe;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Qe||(Qe={}));function fo(){const e=ba(!0),t=e.run(()=>ee({}));let n=[],r=[];const a=wa({install(i){Ht(a),a._a=i,i.provide(Aa,a),i.config.globalProperties.$pinia=a,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!uo?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return a}const Oa=()=>{};function yr(e,t,n,r=Oa){e.push(t);const a=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&Hi()&&Wi(a),a}function Le(e,...t){e.slice().forEach(n=>{n(...t)})}const mo=e=>e();function kn(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],a=e[n];En(a)&&En(r)&&e.hasOwnProperty(n)&&!Ft(r)&&!xa(r)?e[n]=kn(a,r):e[n]=r}return e}const po=Symbol();function ho(e){return!En(e)||!e.hasOwnProperty(po)}const{assign:Ee}=Object;function vo(e){return!!(Ft(e)&&e.effect)}function go(e,t,n,r){const{state:a,actions:i,getters:o}=t,s=n.state.value[e];let c;function l(){s||(n.state.value[e]=a?a():{});const u=Vi(n.state.value[e]);return Ee(u,i,Object.keys(o||{}).reduce((f,d)=>(f[d]=wa(W(()=>{Ht(n);const m=n._s.get(e);return o[d].call(m,m)})),f),{}))}return c=Ca(e,l,t,n,r,!0),c}function Ca(e,t,n={},r,a,i){let o;const s=Ee({actions:{}},n),c={deep:!0};let l,u,f=[],d=[],m;const h=r.state.value[e];!i&&!h&&(r.state.value[e]={}),ee({});let b;function _(F){let P;l=u=!1,typeof F=="function"?(F(r.state.value[e]),P={type:Qe.patchFunction,storeId:e,events:m}):(kn(r.state.value[e],F),P={type:Qe.patchObject,payload:F,storeId:e,events:m});const G=b=Symbol();Ea().then(()=>{b===G&&(l=!0)}),u=!0,Le(f,P,r.state.value[e])}const g=i?function(){const{state:P}=n,G=P?P():{};this.$patch(ae=>{Ee(ae,G)})}:Oa;function y(){o.stop(),f=[],d=[],r._s.delete(e)}function A(F,P){return function(){Ht(r);const G=Array.from(arguments),ae=[],ye=[];function Oe(K){ae.push(K)}function nn(K){ye.push(K)}Le(d,{args:G,name:F,store:C,after:Oe,onError:nn});let ce;try{ce=P.apply(this&&this.$id===e?this:C,G)}catch(K){throw Le(ye,K),K}return ce instanceof Promise?ce.then(K=>(Le(ae,K),K)).catch(K=>(Le(ye,K),Promise.reject(K))):(Le(ae,ce),ce)}}const T={_p:r,$id:e,$onAction:yr.bind(null,d),$patch:_,$reset:g,$subscribe(F,P={}){const G=yr(f,F,P.detached,()=>ae()),ae=o.run(()=>$e(()=>r.state.value[e],ye=>{(P.flush==="sync"?u:l)&&F({storeId:e,type:Qe.direct,events:m},ye)},Ee({},c,P)));return G},$dispose:y},C=Vn(T);r._s.set(e,C);const $=r._a&&r._a.runWithContext||mo,B=r._e.run(()=>(o=ba(),$(()=>o.run(t))));for(const F in B){const P=B[F];if(Ft(P)&&!vo(P)||xa(P))i||(h&&ho(P)&&(Ft(P)?P.value=h[F]:kn(P,h[F])),r.state.value[e][F]=P);else if(typeof P=="function"){const G=A(F,P);B[F]=G,s.actions[F]=P}}return Ee(C,B),Ee($i(C),B),Object.defineProperty(C,"$state",{get:()=>r.state.value[e],set:F=>{_(P=>{Ee(P,F)})}}),r._p.forEach(F=>{Ee(C,o.run(()=>F({store:C,app:r._a,pinia:r,options:s})))}),h&&i&&n.hydrate&&n.hydrate(C.$state,h),l=!0,u=!0,C}function Pa(e,t,n){let r,a;const i=typeof t=="function";typeof e=="string"?(r=e,a=i?n:t):(a=e,r=e.id);function o(s,c){const l=Ui();return s=s||(l?Be(Aa,null):null),s&&Ht(s),s=Sa,s._s.has(r)||(i?Ca(r,t,a,s):go(r,a,s)),s._s.get(r)}return o.$id=r,o}const dt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},yo={};function bo(e,t){const n=rt("RouterView");return de(),ft("div",null,[O(n)])}const wo=dt(yo,[["render",bo]]);/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Me=typeof window<"u";function xo(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const M=Object.assign;function ln(e,t){const n={};for(const r in t){const a=t[r];n[r]=re(a)?a.map(e):e(a)}return n}const Ze=()=>{},re=Array.isArray,Eo=/\/$/,ko=e=>e.replace(Eo,"");function un(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let c=t.indexOf("?");return s<c&&s>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=Oo(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function _o(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function br(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function So(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Ue(t.matched[r],n.matched[a])&&Ra(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Ue(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ra(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Ao(e[n],t[n]))return!1;return!0}function Ao(e,t){return re(e)?wr(e,t):re(t)?wr(t,e):e===t}function wr(e,t){return re(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Oo(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),a=r[r.length-1];(a===".."||a===".")&&r.push("");let i=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==".")if(s==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var at;(function(e){e.pop="pop",e.push="push"})(at||(at={}));var et;(function(e){e.back="back",e.forward="forward",e.unknown=""})(et||(et={}));function Co(e){if(!e)if(Me){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ko(e)}const Po=/^[^#]+#/;function Ro(e,t){return e.replace(Po,"#")+t}function No(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Wt=()=>({left:window.pageXOffset,top:window.pageYOffset});function To(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=No(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function xr(e,t){return(history.state?history.state.position-t:-1)+e}const _n=new Map;function Io(e,t){_n.set(e,t)}function Lo(e){const t=_n.get(e);return _n.delete(e),t}let Mo=()=>location.protocol+"//"+location.host;function Na(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,c=a.slice(s);return c[0]!=="/"&&(c="/"+c),br(c,"")}return br(n,e)+r+a}function Fo(e,t,n,r){let a=[],i=[],o=null;const s=({state:d})=>{const m=Na(e,location),h=n.value,b=t.value;let _=0;if(d){if(n.value=m,t.value=d,o&&o===h){o=null;return}_=b?d.position-b.position:0}else r(m);a.forEach(g=>{g(n.value,h,{delta:_,type:at.pop,direction:_?_>0?et.forward:et.back:et.unknown})})};function c(){o=n.value}function l(d){a.push(d);const m=()=>{const h=a.indexOf(d);h>-1&&a.splice(h,1)};return i.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(M({},d.state,{scroll:Wt()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function Er(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Wt():null}}function zo(e){const{history:t,location:n}=window,r={value:Na(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:Mo()+e+c;try{t[u?"replaceState":"pushState"](l,"",d),a.value=l}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(c,l){const u=M({},t.state,Er(a.value.back,c,a.value.forward,!0),l,{position:a.value.position});i(c,u,!0),r.value=c}function s(c,l){const u=M({},a.value,t.state,{forward:c,scroll:Wt()});i(u.current,u,!0);const f=M({},Er(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:a,push:s,replace:o}}function jo(e){e=Co(e);const t=zo(e),n=Fo(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=M({location:"",base:e,go:r,createHref:Ro.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function Do(e){return typeof e=="string"||e&&typeof e=="object"}function Ta(e){return typeof e=="string"||typeof e=="symbol"}const be={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ia=Symbol("");var kr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(kr||(kr={}));function He(e,t){return M(new Error,{type:e,[Ia]:!0},t)}function le(e,t){return e instanceof Error&&Ia in e&&(t==null||!!(e.type&t))}const _r="[^/]+?",Bo={sensitive:!1,strict:!1,start:!0,end:!0},$o=/[.+*?^${}()[\]/\\]/g;function Uo(e,t){const n=M({},Bo,t),r=[];let a=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(a+="/");for(let f=0;f<l.length;f++){const d=l[f];let m=40+(n.sensitive?.25:0);if(d.type===0)f||(a+="/"),a+=d.value.replace($o,"\\$&"),m+=40;else if(d.type===1){const{value:h,repeatable:b,optional:_,regexp:g}=d;i.push({name:h,repeatable:b,optional:_});const y=g||_r;if(y!==_r){m+=10;try{new RegExp(`(${y})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${h}" (${y}): `+T.message)}}let A=b?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(A=_&&l.length<2?`(?:/${A})`:"/"+A),_&&(A+="?"),a+=A,m+=20,_&&(m+=-8),b&&(m+=-20),y===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(l){const u=l.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",h=i[d-1];f[h.name]=m&&h.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const d of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:h,repeatable:b,optional:_}=m,g=h in l?l[h]:"";if(re(g)&&!b)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const y=re(g)?g.join("/"):g;if(!y)if(_)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${h}"`);u+=y}}return u||"/"}return{re:o,score:r,keys:i,parse:s,stringify:c}}function Ho(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Wo(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=Ho(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Sr(r))return 1;if(Sr(a))return-1}return a.length-r.length}function Sr(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Vo={type:0,value:""},qo=/[a-zA-Z0-9_]/;function Yo(e){if(!e)return[[]];if(e==="/")return[[Vo]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;s<e.length;){if(c=e[s++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:qo.test(c)?d():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&s--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&s--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),a}function Go(e,t,n){const r=Uo(Yo(e.path),n),a=M(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function Ko(e,t){const n=[],r=new Map;t=Cr({strict:!1,end:!0,sensitive:!1},t);function a(u){return r.get(u)}function i(u,f,d){const m=!d,h=Jo(u);h.aliasOf=d&&d.record;const b=Cr(t,u),_=[h];if("alias"in u){const A=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of A)_.push(M({},h,{components:d?d.record.components:h.components,path:T,aliasOf:d?d.record:h}))}let g,y;for(const A of _){const{path:T}=A;if(f&&T[0]!=="/"){const C=f.record.path,$=C[C.length-1]==="/"?"":"/";A.path=f.record.path+(T&&$+T)}if(g=Go(A,f,b),d?d.alias.push(g):(y=y||g,y!==g&&y.alias.push(g),m&&u.name&&!Or(g)&&o(u.name)),h.children){const C=h.children;for(let $=0;$<C.length;$++)i(C[$],g,d&&d.children[$])}d=d||g,(g.record.components&&Object.keys(g.record.components).length||g.record.name||g.record.redirect)&&c(g)}return y?()=>{o(y)}:Ze}function o(u){if(Ta(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function s(){return n}function c(u){let f=0;for(;f<n.length&&Wo(u,n[f])>=0&&(u.record.path!==n[f].record.path||!La(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Or(u)&&r.set(u.record.name,u)}function l(u,f){let d,m={},h,b;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw He(1,{location:u});b=d.record.name,m=M(Ar(f.params,d.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&Ar(u.params,d.keys.map(y=>y.name))),h=d.stringify(m)}else if("path"in u)h=u.path,d=n.find(y=>y.re.test(h)),d&&(m=d.parse(h),b=d.record.name);else{if(d=f.name?r.get(f.name):n.find(y=>y.re.test(f.path)),!d)throw He(1,{location:u,currentLocation:f});b=d.record.name,m=M({},f.params,u.params),h=d.stringify(m)}const _=[];let g=d;for(;g;)_.unshift(g.record),g=g.parent;return{name:b,path:h,params:m,matched:_,meta:Qo(_)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Ar(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Jo(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Xo(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Xo(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Or(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Qo(e){return e.reduce((t,n)=>M(t,n.meta),{})}function Cr(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function La(e,t){return t.children.some(n=>n===e||La(e,n))}const Ma=/#/g,Zo=/&/g,es=/\//g,ts=/=/g,ns=/\?/g,Fa=/\+/g,rs=/%5B/g,as=/%5D/g,za=/%5E/g,is=/%60/g,ja=/%7B/g,os=/%7C/g,Da=/%7D/g,ss=/%20/g;function Kn(e){return encodeURI(""+e).replace(os,"|").replace(rs,"[").replace(as,"]")}function cs(e){return Kn(e).replace(ja,"{").replace(Da,"}").replace(za,"^")}function Sn(e){return Kn(e).replace(Fa,"%2B").replace(ss,"+").replace(Ma,"%23").replace(Zo,"%26").replace(is,"`").replace(ja,"{").replace(Da,"}").replace(za,"^")}function ls(e){return Sn(e).replace(ts,"%3D")}function us(e){return Kn(e).replace(Ma,"%23").replace(ns,"%3F")}function fs(e){return e==null?"":us(e).replace(es,"%2F")}function zt(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function ds(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Fa," "),o=i.indexOf("="),s=zt(o<0?i:i.slice(0,o)),c=o<0?null:zt(i.slice(o+1));if(s in t){let l=t[s];re(l)||(l=t[s]=[l]),l.push(c)}else t[s]=c}return t}function Pr(e){let t="";for(let n in e){const r=e[n];if(n=ls(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(re(r)?r.map(i=>i&&Sn(i)):[r&&Sn(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function ms(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=re(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const ps=Symbol(""),Rr=Symbol(""),Jn=Symbol(""),Ba=Symbol(""),An=Symbol("");function Ke(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function ke(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const c=f=>{f===!1?s(He(4,{from:n,to:t})):f instanceof Error?s(f):Do(f)?s(He(2,{from:t,to:f})):(i&&r.enterCallbacks[a]===i&&typeof f=="function"&&i.push(f),o())},l=e.call(r&&r.instances[a],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(f=>s(f))})}function fn(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(hs(s)){const l=(s.__vccOpts||s)[t];l&&a.push(ke(l,n,r,i,o))}else{let c=s();a.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=xo(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[t];return d&&ke(d,n,r,i,o)()}))}}return a}function hs(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Nr(e){const t=Be(Jn),n=Be(Ba),r=W(()=>t.resolve(je(e.to))),a=W(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Ue.bind(null,u));if(d>-1)return d;const m=Tr(c[l-2]);return l>1&&Tr(u)===m&&f[f.length-1].path!==m?f.findIndex(Ue.bind(null,c[l-2])):d}),i=W(()=>a.value>-1&&bs(n.params,r.value.params)),o=W(()=>a.value>-1&&a.value===n.matched.length-1&&Ra(n.params,r.value.params));function s(c={}){return ys(c)?t[je(e.replace)?"replace":"push"](je(e.to)).catch(Ze):Promise.resolve()}return{route:r,href:W(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const vs=qn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Nr,setup(e,{slots:t}){const n=Vn(Nr(e)),{options:r}=Be(Jn),a=W(()=>({[Ir(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ir(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Yn("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),gs=vs;function ys(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function bs(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!re(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Tr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ir=(e,t,n)=>e??t??n,ws=qn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Be(An),a=W(()=>e.route||r.value),i=Be(Rr,0),o=W(()=>{let l=je(i);const{matched:u}=a.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),s=W(()=>a.value.matched[o.value]);cn(Rr,W(()=>o.value+1)),cn(ps,s),cn(An,a);const c=ee();return $e(()=>[c.value,s.value,e.name],([l,u,f],[d,m,h])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!Ue(u,m)||!d)&&(u.enterCallbacks[f]||[]).forEach(b=>b(l))},{flush:"post"}),()=>{const l=a.value,u=e.name,f=s.value,d=f&&f.components[u];if(!d)return Lr(n.default,{Component:d,route:l});const m=f.props[u],h=m?m===!0?l.params:typeof m=="function"?m(l):m:null,_=Yn(d,M({},h,t,{onVnodeUnmounted:g=>{g.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Lr(n.default,{Component:_,route:l})||_}}});function Lr(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const xs=ws;function Es(e){const t=Ko(e.routes,e),n=e.parseQuery||ds,r=e.stringifyQuery||Pr,a=e.history,i=Ke(),o=Ke(),s=Ke(),c=qi(be);let l=be;Me&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ln.bind(null,v=>""+v),f=ln.bind(null,fs),d=ln.bind(null,zt);function m(v,E){let w,S;return Ta(v)?(w=t.getRecordMatcher(v),S=E):S=v,t.addRoute(S,w)}function h(v){const E=t.getRecordMatcher(v);E&&t.removeRoute(E)}function b(){return t.getRoutes().map(v=>v.record)}function _(v){return!!t.getRecordMatcher(v)}function g(v,E){if(E=M({},E||c.value),typeof v=="string"){const R=un(n,v,E.path),V=t.resolve({path:R.path},E),Ge=a.createHref(R.fullPath);return M(R,V,{params:d(V.params),hash:zt(R.hash),redirectedFrom:void 0,href:Ge})}let w;if("path"in v)w=M({},v,{path:un(n,v.path,E.path).path});else{const R=M({},v.params);for(const V in R)R[V]==null&&delete R[V];w=M({},v,{params:f(R)}),E.params=f(E.params)}const S=t.resolve(w,E),z=v.hash||"";S.params=u(d(S.params));const H=_o(r,M({},v,{hash:cs(z),path:S.path})),I=a.createHref(H);return M({fullPath:H,hash:z,query:r===Pr?ms(v.query):v.query||{}},S,{redirectedFrom:void 0,href:I})}function y(v){return typeof v=="string"?un(n,v,c.value.path):M({},v)}function A(v,E){if(l!==v)return He(8,{from:E,to:v})}function T(v){return B(v)}function C(v){return T(M(y(v),{replace:!0}))}function $(v){const E=v.matched[v.matched.length-1];if(E&&E.redirect){const{redirect:w}=E;let S=typeof w=="function"?w(v):w;return typeof S=="string"&&(S=S.includes("?")||S.includes("#")?S=y(S):{path:S},S.params={}),M({query:v.query,hash:v.hash,params:"path"in S?{}:v.params},S)}}function B(v,E){const w=l=g(v),S=c.value,z=v.state,H=v.force,I=v.replace===!0,R=$(w);if(R)return B(M(y(R),{state:typeof R=="object"?M({},z,R.state):z,force:H,replace:I}),E||w);const V=w;V.redirectedFrom=E;let Ge;return!H&&So(r,S,w)&&(Ge=He(16,{to:V,from:S}),hr(S,S,!0,!1)),(Ge?Promise.resolve(Ge):G(V,S)).catch(J=>le(J)?le(J,2)?J:an(J):rn(J,V,S)).then(J=>{if(J){if(le(J,2))return B(M({replace:I},y(J.to),{state:typeof J.to=="object"?M({},z,J.to.state):z,force:H}),E||V)}else J=ye(V,S,!0,I,z);return ae(V,S,J),J})}function F(v,E){const w=A(v,E);return w?Promise.reject(w):Promise.resolve()}function P(v){const E=bt.values().next().value;return E&&typeof E.runWithContext=="function"?E.runWithContext(v):v()}function G(v,E){let w;const[S,z,H]=ks(v,E);w=fn(S.reverse(),"beforeRouteLeave",v,E);for(const R of S)R.leaveGuards.forEach(V=>{w.push(ke(V,v,E))});const I=F.bind(null,v,E);return w.push(I),Ie(w).then(()=>{w=[];for(const R of i.list())w.push(ke(R,v,E));return w.push(I),Ie(w)}).then(()=>{w=fn(z,"beforeRouteUpdate",v,E);for(const R of z)R.updateGuards.forEach(V=>{w.push(ke(V,v,E))});return w.push(I),Ie(w)}).then(()=>{w=[];for(const R of H)if(R.beforeEnter)if(re(R.beforeEnter))for(const V of R.beforeEnter)w.push(ke(V,v,E));else w.push(ke(R.beforeEnter,v,E));return w.push(I),Ie(w)}).then(()=>(v.matched.forEach(R=>R.enterCallbacks={}),w=fn(H,"beforeRouteEnter",v,E),w.push(I),Ie(w))).then(()=>{w=[];for(const R of o.list())w.push(ke(R,v,E));return w.push(I),Ie(w)}).catch(R=>le(R,8)?R:Promise.reject(R))}function ae(v,E,w){s.list().forEach(S=>P(()=>S(v,E,w)))}function ye(v,E,w,S,z){const H=A(v,E);if(H)return H;const I=E===be,R=Me?history.state:{};w&&(S||I?a.replace(v.fullPath,M({scroll:I&&R&&R.scroll},z)):a.push(v.fullPath,z)),c.value=v,hr(v,E,w,I),an()}let Oe;function nn(){Oe||(Oe=a.listen((v,E,w)=>{if(!vr.listening)return;const S=g(v),z=$(S);if(z){B(M(z,{replace:!0}),S).catch(Ze);return}l=S;const H=c.value;Me&&Io(xr(H.fullPath,w.delta),Wt()),G(S,H).catch(I=>le(I,12)?I:le(I,2)?(B(I.to,S).then(R=>{le(R,20)&&!w.delta&&w.type===at.pop&&a.go(-1,!1)}).catch(Ze),Promise.reject()):(w.delta&&a.go(-w.delta,!1),rn(I,S,H))).then(I=>{I=I||ye(S,H,!1),I&&(w.delta&&!le(I,8)?a.go(-w.delta,!1):w.type===at.pop&&le(I,20)&&a.go(-1,!1)),ae(S,H,I)}).catch(Ze)}))}let ce=Ke(),K=Ke(),yt;function rn(v,E,w){an(v);const S=K.list();return S.length?S.forEach(z=>z(v,E,w)):console.error(v),Promise.reject(v)}function Bi(){return yt&&c.value!==be?Promise.resolve():new Promise((v,E)=>{ce.add([v,E])})}function an(v){return yt||(yt=!v,nn(),ce.list().forEach(([E,w])=>v?w(v):E()),ce.reset()),v}function hr(v,E,w,S){const{scrollBehavior:z}=e;if(!Me||!z)return Promise.resolve();const H=!w&&Lo(xr(v.fullPath,0))||(S||!w)&&history.state&&history.state.scroll||null;return Ea().then(()=>z(v,E,H)).then(I=>I&&To(I)).catch(I=>rn(I,v,E))}const on=v=>a.go(v);let sn;const bt=new Set,vr={currentRoute:c,listening:!0,addRoute:m,removeRoute:h,hasRoute:_,getRoutes:b,resolve:g,options:e,push:T,replace:C,go:on,back:()=>on(-1),forward:()=>on(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:K.add,isReady:Bi,install(v){const E=this;v.component("RouterLink",gs),v.component("RouterView",xs),v.config.globalProperties.$router=E,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>je(c)}),Me&&!sn&&c.value===be&&(sn=!0,T(a.location).catch(z=>{}));const w={};for(const z in be)Object.defineProperty(w,z,{get:()=>c.value[z],enumerable:!0});v.provide(Jn,E),v.provide(Ba,Yi(w)),v.provide(An,c);const S=v.unmount;bt.add(v),v.unmount=function(){bt.delete(v),bt.size<1&&(l=be,Oe&&Oe(),Oe=null,c.value=be,sn=!1,yt=!1),S()}}};function Ie(v){return v.reduce((E,w)=>E.then(()=>P(w)),Promise.resolve())}return vr}function ks(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(l=>Ue(l,s))?r.push(s):n.push(s));const c=e.matched[o];c&&(t.matched.find(l=>Ue(l,c))||a.push(c))}return[n,r,a]}const Mr="hcaptcha-api-script-id",$a="_hcaptchaOnLoad";let On,Ua;const dn=new Promise((e,t)=>{On=e,Ua=t});function _s(e){if(window.hcaptcha)return On(),dn;if(document.getElementById(Mr))return dn;window[$a]=On;const t=Ss(e),n=document.createElement("script");return n.id=Mr,n.src=t,n.async=!0,n.defer=!0,n.onerror=r=>{console.error("Failed to load api: "+t,r),Ua("Failed to load api.js")},document.head.appendChild(n),dn}function Ss(e){let t=e.apiEndpoint;return t=ue(t,"render","explicit"),t=ue(t,"onload",$a),t=ue(t,"recaptchacompat",e.reCaptchaCompat===!1?"off":null),t=ue(t,"hl",e.language),t=ue(t,"sentry",e.sentry),t=ue(t,"endpoint",e.endpoint),t=ue(t,"assethost",e.assethost),t=ue(t,"imghost",e.imghost),t=ue(t,"reportapi",e.reportapi),t}function ue(e,t,n){if(n!=null){const r=e.includes("?")?"&":"?";return e+r+t+"="+encodeURIComponent(n)}return e}var As=(e,t)=>{for(const[n,r]of t)e[n]=r;return e};const Os={name:"VueHcaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String,default:void 0},size:{type:String,default:void 0},tabindex:{type:String,default:void 0},language:{type:String,default:void 0},reCaptchaCompat:{type:Boolean,default:!0},challengeContainer:{type:String,default:void 0},rqdata:{type:String,default:void 0},sentry:{type:Boolean,default:!0},apiEndpoint:{type:String,default:"https://hcaptcha.com/1/api.js"},endpoint:{type:String,default:void 0},reportapi:{type:String,default:void 0},assethost:{type:String,default:void 0},imghost:{type:String,default:void 0}},data:()=>({widgetId:null,hcaptcha:null,renderedCb:null}),mounted(){return _s(this.$props).then(this.onApiLoaded).catch(this.onError)},unmounted(){this.teardown()},destroyed(){this.teardown()},methods:{teardown(){this.widgetId&&(this.hcaptcha.reset(this.widgetId),this.hcaptcha.remove(this.widgetId))},onApiLoaded(){this.hcaptcha=window.hcaptcha;const e={sitekey:this.sitekey,theme:this.theme,size:this.size,tabindex:this.tabindex,callback:this.onVerify,"expired-callback":this.onExpired,"chalexpired-callback":this.onChallengeExpired,"error-callback":this.onError,"open-callback":this.onOpen,"close-callback":this.onClose};this.challengeContainer&&(e["challenge-container"]=this.challengeContainer),this.widgetId=this.hcaptcha.render(this.$el,e),this.rqdata&&this.hcaptcha.setData(this.widgetId,{rqdata:this.rqdata}),this.onRendered()},execute(){this.widgetId?(this.hcaptcha.execute(this.widgetId),this.onExecuted()):this.renderedCb=()=>{this.renderedCb=null,this.execute()}},executeAsync(){if(this.widgetId)return this.onExecuted(),this.hcaptcha.execute(this.widgetId,{async:!0});let e;const t=new Promise(n=>{e=n});return this.renderedCb=()=>{this.renderedCb=null,e()},t.then(this.executeAsync)},reset(){this.widgetId?(this.hcaptcha.reset(this.widgetId),this.onReset()):this.$emit("error","Element is not rendered yet and thus cannot reset it. Wait for `rendered` event to safely call reset.")},onRendered(){this.$emit("rendered"),this.renderedCb&&this.renderedCb()},onExecuted(){this.$emit("executed")},onReset(){this.$emit("reset")},onError(e){this.$emit("error",e),this.reset()},onVerify(){const e=this.hcaptcha.getResponse(this.widgetId),t=this.hcaptcha.getRespKey(this.widgetId);this.$emit("verify",e,t)},onExpired(){this.$emit("expired")},onChallengeExpired(){this.$emit("challengeExpired")},onOpen(){this.$emit("opened")},onClose(){this.$emit("closed")}}},Cs={id:"hcap-script"};function Ps(e,t,n,r,a,i){return de(),ft("div",Cs)}var Rs=As(Os,[["render",Ps]]);function Ha(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ns}=Object.prototype,{getPrototypeOf:Xn}=Object,Vt=(e=>t=>{const n=Ns.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),se=e=>(e=e.toLowerCase(),t=>Vt(t)===e),qt=e=>t=>typeof t===e,{isArray:qe}=Array,it=qt("undefined");function Ts(e){return e!==null&&!it(e)&&e.constructor!==null&&!it(e.constructor)&&te(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Wa=se("ArrayBuffer");function Is(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Wa(e.buffer),t}const Ls=qt("string"),te=qt("function"),Va=qt("number"),Yt=e=>e!==null&&typeof e=="object",Ms=e=>e===!0||e===!1,Rt=e=>{if(Vt(e)!=="object")return!1;const t=Xn(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Fs=se("Date"),zs=se("File"),js=se("Blob"),Ds=se("FileList"),Bs=e=>Yt(e)&&te(e.pipe),$s=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||te(e.append)&&((t=Vt(e))==="formdata"||t==="object"&&te(e.toString)&&e.toString()==="[object FormData]"))},Us=se("URLSearchParams"),Hs=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function mt(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,a;if(typeof e!="object"&&(e=[e]),qe(e))for(r=0,a=e.length;r<a;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let s;for(r=0;r<o;r++)s=i[r],t.call(null,e[s],s,e)}}function qa(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,a;for(;r-- >0;)if(a=n[r],t===a.toLowerCase())return a;return null}const Ya=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ga=e=>!it(e)&&e!==Ya;function Cn(){const{caseless:e}=Ga(this)&&this||{},t={},n=(r,a)=>{const i=e&&qa(t,a)||a;Rt(t[i])&&Rt(r)?t[i]=Cn(t[i],r):Rt(r)?t[i]=Cn({},r):qe(r)?t[i]=r.slice():t[i]=r};for(let r=0,a=arguments.length;r<a;r++)arguments[r]&&mt(arguments[r],n);return t}const Ws=(e,t,n,{allOwnKeys:r}={})=>(mt(t,(a,i)=>{n&&te(a)?e[i]=Ha(a,n):e[i]=a},{allOwnKeys:r}),e),Vs=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),qs=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Ys=(e,t,n,r)=>{let a,i,o;const s={};if(t=t||{},e==null)return t;do{for(a=Object.getOwnPropertyNames(e),i=a.length;i-- >0;)o=a[i],(!r||r(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&Xn(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Gs=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ks=e=>{if(!e)return null;if(qe(e))return e;let t=e.length;if(!Va(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Js=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Xn(Uint8Array)),Xs=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let a;for(;(a=r.next())&&!a.done;){const i=a.value;t.call(e,i[0],i[1])}},Qs=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Zs=se("HTMLFormElement"),ec=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,a){return r.toUpperCase()+a}),Fr=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),tc=se("RegExp"),Ka=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};mt(n,(a,i)=>{t(a,i,e)!==!1&&(r[i]=a)}),Object.defineProperties(e,r)},nc=e=>{Ka(e,(t,n)=>{if(te(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(te(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},rc=(e,t)=>{const n={},r=a=>{a.forEach(i=>{n[i]=!0})};return qe(e)?r(e):r(String(e).split(t)),n},ac=()=>{},ic=(e,t)=>(e=+e,Number.isFinite(e)?e:t),mn="abcdefghijklmnopqrstuvwxyz",zr="0123456789",Ja={DIGIT:zr,ALPHA:mn,ALPHA_DIGIT:mn+mn.toUpperCase()+zr},oc=(e=16,t=Ja.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function sc(e){return!!(e&&te(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const cc=e=>{const t=new Array(10),n=(r,a)=>{if(Yt(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[a]=r;const i=qe(r)?[]:{};return mt(r,(o,s)=>{const c=n(o,a+1);!it(c)&&(i[s]=c)}),t[a]=void 0,i}}return r};return n(e,0)},lc=se("AsyncFunction"),uc=e=>e&&(Yt(e)||te(e))&&te(e.then)&&te(e.catch),p={isArray:qe,isArrayBuffer:Wa,isBuffer:Ts,isFormData:$s,isArrayBufferView:Is,isString:Ls,isNumber:Va,isBoolean:Ms,isObject:Yt,isPlainObject:Rt,isUndefined:it,isDate:Fs,isFile:zs,isBlob:js,isRegExp:tc,isFunction:te,isStream:Bs,isURLSearchParams:Us,isTypedArray:Js,isFileList:Ds,forEach:mt,merge:Cn,extend:Ws,trim:Hs,stripBOM:Vs,inherits:qs,toFlatObject:Ys,kindOf:Vt,kindOfTest:se,endsWith:Gs,toArray:Ks,forEachEntry:Xs,matchAll:Qs,isHTMLForm:Zs,hasOwnProperty:Fr,hasOwnProp:Fr,reduceDescriptors:Ka,freezeMethods:nc,toObjectSet:rc,toCamelCase:ec,noop:ac,toFiniteNumber:ic,findKey:qa,global:Ya,isContextDefined:Ga,ALPHABET:Ja,generateString:oc,isSpecCompliantForm:sc,toJSONObject:cc,isAsyncFn:lc,isThenable:uc};function L(e,t,n,r,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),a&&(this.response=a)}p.inherits(L,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:p.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Xa=L.prototype,Qa={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Qa[e]={value:e}});Object.defineProperties(L,Qa);Object.defineProperty(Xa,"isAxiosError",{value:!0});L.from=(e,t,n,r,a,i)=>{const o=Object.create(Xa);return p.toFlatObject(e,o,function(c){return c!==Error.prototype},s=>s!=="isAxiosError"),L.call(o,e.message,t,n,r,a),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const fc=null;function Pn(e){return p.isPlainObject(e)||p.isArray(e)}function Za(e){return p.endsWith(e,"[]")?e.slice(0,-2):e}function jr(e,t,n){return e?e.concat(t).map(function(a,i){return a=Za(a),!n&&i?"["+a+"]":a}).join(n?".":""):t}function dc(e){return p.isArray(e)&&!e.some(Pn)}const mc=p.toFlatObject(p,{},null,function(t){return/^is[A-Z]/.test(t)});function Gt(e,t,n){if(!p.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=p.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,_){return!p.isUndefined(_[b])});const r=n.metaTokens,a=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&p.isSpecCompliantForm(t);if(!p.isFunction(a))throw new TypeError("visitor must be a function");function l(h){if(h===null)return"";if(p.isDate(h))return h.toISOString();if(!c&&p.isBlob(h))throw new L("Blob is not supported. Use a Buffer instead.");return p.isArrayBuffer(h)||p.isTypedArray(h)?c&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function u(h,b,_){let g=h;if(h&&!_&&typeof h=="object"){if(p.endsWith(b,"{}"))b=r?b:b.slice(0,-2),h=JSON.stringify(h);else if(p.isArray(h)&&dc(h)||(p.isFileList(h)||p.endsWith(b,"[]"))&&(g=p.toArray(h)))return b=Za(b),g.forEach(function(A,T){!(p.isUndefined(A)||A===null)&&t.append(o===!0?jr([b],T,i):o===null?b:b+"[]",l(A))}),!1}return Pn(h)?!0:(t.append(jr(_,b,i),l(h)),!1)}const f=[],d=Object.assign(mc,{defaultVisitor:u,convertValue:l,isVisitable:Pn});function m(h,b){if(!p.isUndefined(h)){if(f.indexOf(h)!==-1)throw Error("Circular reference detected in "+b.join("."));f.push(h),p.forEach(h,function(g,y){(!(p.isUndefined(g)||g===null)&&a.call(t,g,p.isString(y)?y.trim():y,b,d))===!0&&m(g,b?b.concat(y):[y])}),f.pop()}}if(!p.isObject(e))throw new TypeError("data must be an object");return m(e),t}function Dr(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Qn(e,t){this._pairs=[],e&&Gt(e,this,t)}const ei=Qn.prototype;ei.append=function(t,n){this._pairs.push([t,n])};ei.toString=function(t){const n=t?function(r){return t.call(this,r,Dr)}:Dr;return this._pairs.map(function(a){return n(a[0])+"="+n(a[1])},"").join("&")};function pc(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ti(e,t,n){if(!t)return e;const r=n&&n.encode||pc,a=n&&n.serialize;let i;if(a?i=a(t,n):i=p.isURLSearchParams(t)?t.toString():new Qn(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class hc{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){p.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Br=hc,ni={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},vc=typeof URLSearchParams<"u"?URLSearchParams:Qn,gc=typeof FormData<"u"?FormData:null,yc=typeof Blob<"u"?Blob:null,bc=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),wc=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),ie={isBrowser:!0,classes:{URLSearchParams:vc,FormData:gc,Blob:yc},isStandardBrowserEnv:bc,isStandardBrowserWebWorkerEnv:wc,protocols:["http","https","file","blob","url","data"]};function xc(e,t){return Gt(e,new ie.classes.URLSearchParams,Object.assign({visitor:function(n,r,a,i){return ie.isNode&&p.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Ec(e){return p.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function kc(e){const t={},n=Object.keys(e);let r;const a=n.length;let i;for(r=0;r<a;r++)i=n[r],t[i]=e[i];return t}function ri(e){function t(n,r,a,i){let o=n[i++];const s=Number.isFinite(+o),c=i>=n.length;return o=!o&&p.isArray(a)?a.length:o,c?(p.hasOwnProp(a,o)?a[o]=[a[o],r]:a[o]=r,!s):((!a[o]||!p.isObject(a[o]))&&(a[o]=[]),t(n,r,a[o],i)&&p.isArray(a[o])&&(a[o]=kc(a[o])),!s)}if(p.isFormData(e)&&p.isFunction(e.entries)){const n={};return p.forEachEntry(e,(r,a)=>{t(Ec(r),a,n,0)}),n}return null}const _c={"Content-Type":void 0};function Sc(e,t,n){if(p.isString(e))try{return(t||JSON.parse)(e),p.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Kt={transitional:ni,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",a=r.indexOf("application/json")>-1,i=p.isObject(t);if(i&&p.isHTMLForm(t)&&(t=new FormData(t)),p.isFormData(t))return a&&a?JSON.stringify(ri(t)):t;if(p.isArrayBuffer(t)||p.isBuffer(t)||p.isStream(t)||p.isFile(t)||p.isBlob(t))return t;if(p.isArrayBufferView(t))return t.buffer;if(p.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return xc(t,this.formSerializer).toString();if((s=p.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Gt(s?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||a?(n.setContentType("application/json",!1),Sc(t)):t}],transformResponse:[function(t){const n=this.transitional||Kt.transitional,r=n&&n.forcedJSONParsing,a=this.responseType==="json";if(t&&p.isString(t)&&(r&&!this.responseType||a)){const o=!(n&&n.silentJSONParsing)&&a;try{return JSON.parse(t)}catch(s){if(o)throw s.name==="SyntaxError"?L.from(s,L.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ie.classes.FormData,Blob:ie.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};p.forEach(["delete","get","head"],function(t){Kt.headers[t]={}});p.forEach(["post","put","patch"],function(t){Kt.headers[t]=p.merge(_c)});const Zn=Kt,Ac=p.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Oc=e=>{const t={};let n,r,a;return e&&e.split(`
`).forEach(function(o){a=o.indexOf(":"),n=o.substring(0,a).trim().toLowerCase(),r=o.substring(a+1).trim(),!(!n||t[n]&&Ac[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},$r=Symbol("internals");function Je(e){return e&&String(e).trim().toLowerCase()}function Nt(e){return e===!1||e==null?e:p.isArray(e)?e.map(Nt):String(e)}function Cc(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Pc=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function pn(e,t,n,r,a){if(p.isFunction(r))return r.call(this,t,n);if(a&&(t=n),!!p.isString(t)){if(p.isString(r))return t.indexOf(r)!==-1;if(p.isRegExp(r))return r.test(t)}}function Rc(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Nc(e,t){const n=p.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(a,i,o){return this[r].call(this,t,a,i,o)},configurable:!0})})}class Jt{constructor(t){t&&this.set(t)}set(t,n,r){const a=this;function i(s,c,l){const u=Je(c);if(!u)throw new Error("header name must be a non-empty string");const f=p.findKey(a,u);(!f||a[f]===void 0||l===!0||l===void 0&&a[f]!==!1)&&(a[f||c]=Nt(s))}const o=(s,c)=>p.forEach(s,(l,u)=>i(l,u,c));return p.isPlainObject(t)||t instanceof this.constructor?o(t,n):p.isString(t)&&(t=t.trim())&&!Pc(t)?o(Oc(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=Je(t),t){const r=p.findKey(this,t);if(r){const a=this[r];if(!n)return a;if(n===!0)return Cc(a);if(p.isFunction(n))return n.call(this,a,r);if(p.isRegExp(n))return n.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Je(t),t){const r=p.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||pn(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let a=!1;function i(o){if(o=Je(o),o){const s=p.findKey(r,o);s&&(!n||pn(r,r[s],s,n))&&(delete r[s],a=!0)}}return p.isArray(t)?t.forEach(i):i(t),a}clear(t){const n=Object.keys(this);let r=n.length,a=!1;for(;r--;){const i=n[r];(!t||pn(this,this[i],i,t,!0))&&(delete this[i],a=!0)}return a}normalize(t){const n=this,r={};return p.forEach(this,(a,i)=>{const o=p.findKey(r,i);if(o){n[o]=Nt(a),delete n[i];return}const s=t?Rc(i):String(i).trim();s!==i&&delete n[i],n[s]=Nt(a),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return p.forEach(this,(r,a)=>{r!=null&&r!==!1&&(n[a]=t&&p.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(a=>r.set(a)),r}static accessor(t){const r=(this[$r]=this[$r]={accessors:{}}).accessors,a=this.prototype;function i(o){const s=Je(o);r[s]||(Nc(a,o),r[s]=!0)}return p.isArray(t)?t.forEach(i):i(t),this}}Jt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);p.freezeMethods(Jt.prototype);p.freezeMethods(Jt);const me=Jt;function hn(e,t){const n=this||Zn,r=t||n,a=me.from(r.headers);let i=r.data;return p.forEach(e,function(s){i=s.call(n,i,a.normalize(),t?t.status:void 0)}),a.normalize(),i}function ai(e){return!!(e&&e.__CANCEL__)}function pt(e,t,n){L.call(this,e??"canceled",L.ERR_CANCELED,t,n),this.name="CanceledError"}p.inherits(pt,L,{__CANCEL__:!0});function Tc(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new L("Request failed with status code "+n.status,[L.ERR_BAD_REQUEST,L.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Ic=ie.isStandardBrowserEnv?function(){return{write:function(n,r,a,i,o,s){const c=[];c.push(n+"="+encodeURIComponent(r)),p.isNumber(a)&&c.push("expires="+new Date(a).toGMTString()),p.isString(i)&&c.push("path="+i),p.isString(o)&&c.push("domain="+o),s===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Lc(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Mc(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function ii(e,t){return e&&!Lc(t)?Mc(e,t):t}const Fc=ie.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function a(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=a(window.location.href),function(o){const s=p.isString(o)?a(o):o;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function zc(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function jc(e,t){e=e||10;const n=new Array(e),r=new Array(e);let a=0,i=0,o;return t=t!==void 0?t:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[a]=c,r[a]=l;let f=i,d=0;for(;f!==a;)d+=n[f++],f=f%e;if(a=(a+1)%e,a===i&&(i=(i+1)%e),l-o<t)return;const m=u&&l-u;return m?Math.round(d*1e3/m):void 0}}function Ur(e,t){let n=0;const r=jc(50,250);return a=>{const i=a.loaded,o=a.lengthComputable?a.total:void 0,s=i-n,c=r(s),l=i<=o;n=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:s,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:a};u[t?"download":"upload"]=!0,e(u)}}const Dc=typeof XMLHttpRequest<"u",Bc=Dc&&function(e){return new Promise(function(n,r){let a=e.data;const i=me.from(e.headers).normalize(),o=e.responseType;let s;function c(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}p.isFormData(a)&&(ie.isStandardBrowserEnv||ie.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.setContentType("multipart/form-data;",!1));let l=new XMLHttpRequest;if(e.auth){const m=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(m+":"+h))}const u=ii(e.baseURL,e.url);l.open(e.method.toUpperCase(),ti(u,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function f(){if(!l)return;const m=me.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),b={data:!o||o==="text"||o==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:m,config:e,request:l};Tc(function(g){n(g),c()},function(g){r(g),c()},b),l=null}if("onloadend"in l?l.onloadend=f:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(f)},l.onabort=function(){l&&(r(new L("Request aborted",L.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new L("Network Error",L.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let h=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const b=e.transitional||ni;e.timeoutErrorMessage&&(h=e.timeoutErrorMessage),r(new L(h,b.clarifyTimeoutError?L.ETIMEDOUT:L.ECONNABORTED,e,l)),l=null},ie.isStandardBrowserEnv){const m=(e.withCredentials||Fc(u))&&e.xsrfCookieName&&Ic.read(e.xsrfCookieName);m&&i.set(e.xsrfHeaderName,m)}a===void 0&&i.setContentType(null),"setRequestHeader"in l&&p.forEach(i.toJSON(),function(h,b){l.setRequestHeader(b,h)}),p.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),o&&o!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",Ur(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",Ur(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=m=>{l&&(r(!m||m.type?new pt(null,e,l):m),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const d=zc(u);if(d&&ie.protocols.indexOf(d)===-1){r(new L("Unsupported protocol "+d+":",L.ERR_BAD_REQUEST,e));return}l.send(a||null)})},Tt={http:fc,xhr:Bc};p.forEach(Tt,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const $c={getAdapter:e=>{e=p.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let a=0;a<t&&(n=e[a],!(r=p.isString(n)?Tt[n.toLowerCase()]:n));a++);if(!r)throw r===!1?new L(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(p.hasOwnProp(Tt,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!p.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Tt};function vn(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new pt(null,e)}function Hr(e){return vn(e),e.headers=me.from(e.headers),e.data=hn.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),$c.getAdapter(e.adapter||Zn.adapter)(e).then(function(r){return vn(e),r.data=hn.call(e,e.transformResponse,r),r.headers=me.from(r.headers),r},function(r){return ai(r)||(vn(e),r&&r.response&&(r.response.data=hn.call(e,e.transformResponse,r.response),r.response.headers=me.from(r.response.headers))),Promise.reject(r)})}const Wr=e=>e instanceof me?e.toJSON():e;function We(e,t){t=t||{};const n={};function r(l,u,f){return p.isPlainObject(l)&&p.isPlainObject(u)?p.merge.call({caseless:f},l,u):p.isPlainObject(u)?p.merge({},u):p.isArray(u)?u.slice():u}function a(l,u,f){if(p.isUndefined(u)){if(!p.isUndefined(l))return r(void 0,l,f)}else return r(l,u,f)}function i(l,u){if(!p.isUndefined(u))return r(void 0,u)}function o(l,u){if(p.isUndefined(u)){if(!p.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function s(l,u,f){if(f in t)return r(l,u);if(f in e)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(l,u)=>a(Wr(l),Wr(u),!0)};return p.forEach(Object.keys(Object.assign({},e,t)),function(u){const f=c[u]||a,d=f(e[u],t[u],u);p.isUndefined(d)&&f!==s||(n[u]=d)}),n}const oi="1.4.0",er={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{er[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Vr={};er.transitional=function(t,n,r){function a(i,o){return"[Axios v"+oi+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,s)=>{if(t===!1)throw new L(a(o," has been removed"+(n?" in "+n:"")),L.ERR_DEPRECATED);return n&&!Vr[o]&&(Vr[o]=!0,console.warn(a(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,s):!0}};function Uc(e,t,n){if(typeof e!="object")throw new L("options must be an object",L.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let a=r.length;for(;a-- >0;){const i=r[a],o=t[i];if(o){const s=e[i],c=s===void 0||o(s,i,e);if(c!==!0)throw new L("option "+i+" must be "+c,L.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new L("Unknown option "+i,L.ERR_BAD_OPTION)}}const Rn={assertOptions:Uc,validators:er},we=Rn.validators;class jt{constructor(t){this.defaults=t,this.interceptors={request:new Br,response:new Br}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=We(this.defaults,n);const{transitional:r,paramsSerializer:a,headers:i}=n;r!==void 0&&Rn.assertOptions(r,{silentJSONParsing:we.transitional(we.boolean),forcedJSONParsing:we.transitional(we.boolean),clarifyTimeoutError:we.transitional(we.boolean)},!1),a!=null&&(p.isFunction(a)?n.paramsSerializer={serialize:a}:Rn.assertOptions(a,{encode:we.function,serialize:we.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&p.merge(i.common,i[n.method]),o&&p.forEach(["delete","get","head","post","put","patch","common"],h=>{delete i[h]}),n.headers=me.concat(o,i);const s=[];let c=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(c=c&&b.synchronous,s.unshift(b.fulfilled,b.rejected))});const l=[];this.interceptors.response.forEach(function(b){l.push(b.fulfilled,b.rejected)});let u,f=0,d;if(!c){const h=[Hr.bind(this),void 0];for(h.unshift.apply(h,s),h.push.apply(h,l),d=h.length,u=Promise.resolve(n);f<d;)u=u.then(h[f++],h[f++]);return u}d=s.length;let m=n;for(f=0;f<d;){const h=s[f++],b=s[f++];try{m=h(m)}catch(_){b.call(this,_);break}}try{u=Hr.call(this,m)}catch(h){return Promise.reject(h)}for(f=0,d=l.length;f<d;)u=u.then(l[f++],l[f++]);return u}getUri(t){t=We(this.defaults,t);const n=ii(t.baseURL,t.url);return ti(n,t.params,t.paramsSerializer)}}p.forEach(["delete","get","head","options"],function(t){jt.prototype[t]=function(n,r){return this.request(We(r||{},{method:t,url:n,data:(r||{}).data}))}});p.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,s){return this.request(We(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}jt.prototype[t]=n(),jt.prototype[t+"Form"]=n(!0)});const It=jt;class tr{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(a=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](a);r._listeners=null}),this.promise.then=a=>{let i;const o=new Promise(s=>{r.subscribe(s),i=s}).then(a);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,s){r.reason||(r.reason=new pt(i,o,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new tr(function(a){t=a}),cancel:t}}}const Hc=tr;function Wc(e){return function(n){return e.apply(null,n)}}function Vc(e){return p.isObject(e)&&e.isAxiosError===!0}const Nn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Nn).forEach(([e,t])=>{Nn[t]=e});const qc=Nn;function si(e){const t=new It(e),n=Ha(It.prototype.request,t);return p.extend(n,It.prototype,t,{allOwnKeys:!0}),p.extend(n,t,null,{allOwnKeys:!0}),n.create=function(a){return si(We(e,a))},n}const q=si(Zn);q.Axios=It;q.CanceledError=pt;q.CancelToken=Hc;q.isCancel=ai;q.VERSION=oi;q.toFormData=Gt;q.AxiosError=L;q.Cancel=q.CanceledError;q.all=function(t){return Promise.all(t)};q.spread=Wc;q.isAxiosError=Vc;q.mergeConfig=We;q.AxiosHeaders=me;q.formToJSON=e=>ri(p.isHTMLForm(e)?new FormData(e):e);q.HttpStatusCode=qc;q.default=q;const ci=q;const Yc=e=>(Qi("data-v-b508853e"),e=e(),Zi(),e),Gc={class:"login-container"},Kc=Yc(()=>Gn("h1",{class:"login-title"},"Welcome to Fei Yang",-1)),Jc="10000000-ffff-ffff-ffff-000000000001",Xc={__name:"login-1",setup(e){const t=ee(null),n=Vn({username:"",password:"",token:""});function r(o){console.log(o),n.token=o}function a(){console.log(JSON.stringify(n)),n.username==""||n.password==""?t.value.textContent="请将用户名和密码填写完整！":n.token==""?t.value.textContent="请通过验证！":(t.value.textContent="",ci.post("/login",n).then(function(o){const{captchaValid:s,accountValid:c,token:l}=o.data;s==="true"?t.value.textContent="":t.value.textContent="验证失败，请重试",c==="true"?t.value.textContent="":t.value.textContent="账号或者密码错误，请重试",l?(localStorage.setItem("jwtToken",l),Tn.push("/main")):console.log("token为空！"),console.log(o)}).catch(function(o){console.log(o)}))}function i(){Tn.push("/main")}return(o,s)=>{const c=Ki,l=Ji,u=Xi,f=Gi;return de(),ft("div",Gc,[O(f,{class:"login-form",model:n},{default:N(()=>[Kc,O(l,{label:"用户名"},{default:N(()=>[O(c,{modelValue:n.username,"onUpdate:modelValue":s[0]||(s[0]=d=>n.username=d)},null,8,["modelValue"])]),_:1}),O(l,{label:"密码"},{default:N(()=>[O(c,{modelValue:n.password,"onUpdate:modelValue":s[1]||(s[1]=d=>n.password=d)},null,8,["modelValue"])]),_:1}),O(je(Rs),{sitekey:Jc,onVerify:r}),O(l,null,{default:N(()=>[O(u,{type:"primary",onClick:a},{default:N(()=>[Q("登录")]),_:1})]),_:1}),O(l,null,{default:N(()=>[O(u,{type:"primary",onClick:i},{default:N(()=>[Q("去主界面（test）")]),_:1})]),_:1}),Gn("p",{ref_key:"info",ref:t,class:"warning"},null,512)]),_:1},8,["model"])])}}},Qc=dt(Xc,[["__scopeId","data-v-b508853e"]]);Pa("counter",()=>{const e=ee(0),t=W(()=>e.value*2);function n(){e.value++}return{count:e,doubleCount:t,increment:n}});const Zc={class:"pagination-block"},el={__name:"usersTable",setup(e){const t=ee([]);eo(()=>{ci.post("/getUsers").then(function(o){t.value=o.data,console.log(o)}).catch(function(o){console.log(o)})});const n=W(()=>(console.log(t.value.length),t.value.length)),r=ee(10),a=ee(1),i=W(()=>{const o=(a.value-1)*r.value,s=o+r.value;return t.value.slice(o,s)});return $e(()=>a.value,o=>{a.value=o,console.log("newPage: "+o)}),$e(()=>r.value,o=>{r.value=o,console.log("newSize: "+o)}),(o,s)=>{const c=ao,l=no,u=ro;return de(),ft(to,null,[O(l,{data:i.value,style:{width:"100%"}},{default:N(()=>[O(c,{prop:"user_id",label:"用户ID"}),O(c,{prop:"username",label:"用户名"}),O(c,{prop:"phone_no",label:"电话号码"}),O(c,{prop:"qq_no",label:"QQ号码"})]),_:1},8,["data"]),Gn("div",Zc,[O(u,{layout:" sizes, prev, pager, next, jumper, total","page-size":r.value,"onUpdate:pageSize":s[0]||(s[0]=f=>r.value=f),total:n.value,"current-page":a.value,"onUpdate:currentPage":s[1]||(s[1]=f=>a.value=f)},null,8,["page-size","total","current-page"])])],64)}}},li=Pa("asideWidth",()=>{const e=ee("240px");function t(n){e=n,console.log("newWidth:"+n+e)}return{width:e,setWidth:t}});const tl={__name:"aside",setup(e){const t=li(),n=ee(!1),r=()=>{n.value=!n.value,t.width=n.value?"64px":"240px"};return(a,i)=>{const o=rt("font-awesome-icon"),s=ka,c=rt("RouterLink"),l=_a;return de(),Pt(l,{mode:"vertical","default-active":"1"},{default:N(()=>[O(s,{index:"0",onClick:r,class:"first"},Ce({default:N(()=>[n.value?gr("",!0):(de(),Pt(o,{key:0,icon:"fa-solid fa-circle-arrow-left",size:"lg",class:"icon"})),n.value?(de(),Pt(o,{key:1,icon:"fa-solid fa-circle-arrow-right",size:"lg",class:"icon"})):gr("",!0)]),_:2},[n.value?void 0:{name:"title",fn:N(()=>[]),key:"0"}]),1024),O(s,{index:"1"},Ce({default:N(()=>[O(o,{icon:"fa-solid fa-user-secret",class:"icon"})]),_:2},[n.value?void 0:{name:"title",fn:N(()=>[Q("Navigator One")]),key:"0"}]),1024),O(s,{index:"2"},Ce({default:N(()=>[O(o,{icon:"fa-solid fa-user-secret",class:"icon"})]),_:2},[n.value?void 0:{name:"title",fn:N(()=>[Q("Navigator Two")]),key:"0"}]),1024),O(c,{to:"/main/users",class:"router-a"},{default:N(()=>[O(s,{index:"3"},Ce({default:N(()=>[O(o,{icon:"fa-solid fa-users",size:"lg",class:"icon"})]),_:2},[n.value?void 0:{name:"title",fn:N(()=>[Q("用户列表")]),key:"0"}]),1024)]),_:1}),O(c,{to:"/main",class:"router-a"},{default:N(()=>[O(s,{index:"4"},Ce({default:N(()=>[O(o,{icon:"fa-solid fa-users-gear",size:"lg",class:"icon"})]),_:2},[n.value?void 0:{name:"title",fn:N(()=>[Q("技术员列表")]),key:"0"}]),1024)]),_:1}),O(c,{to:"/main",class:"router-a"},{default:N(()=>[O(s,{index:"6"},Ce({default:N(()=>[O(o,{icon:"fa-solid fa-user-secret",size:"lg",class:"icon"})]),_:2},[n.value?void 0:{name:"title",fn:N(()=>[Q("/main")]),key:"0"}]),1024)]),_:1}),O(c,{to:"/login1",class:"router-a"},{default:N(()=>[O(s,{index:"6"},Ce({default:N(()=>[O(o,{icon:"fa-solid fa-user-secret",size:"lg",class:"icon"})]),_:2},[n.value?void 0:{name:"title",fn:N(()=>[Q("退出登录")]),key:"0"}]),1024)]),_:1})]),_:1})}}},nl=dt(tl,[["__scopeId","data-v-dbc9450d"]]);const rl={__name:"header",setup(e){const t=ee("-1");return(n,r)=>{const a=rt("font-awesome-icon"),i=ka,o=_a;return de(),Pt(o,{mode:"horizontal","default-active":t.value,class:"custom-menu"},{default:N(()=>[O(i,{index:"-1",class:"logo"},{default:N(()=>[O(a,{icon:"fa-solid fa-bars",size:"lg"}),Q(" ​ ")]),_:1}),O(i,{index:"0"},{default:N(()=>[Q("LOGO")]),_:1}),O(i,{index:"1"},{default:N(()=>[Q("系统开发中，仅为临时页面，不代表最终品质")]),_:1}),O(i,{index:"2",class:"to-right"},{default:N(()=>[Q("Processing Center")]),_:1}),O(i,{index:"3"},{default:N(()=>[Q("nickname")]),_:1})]),_:1},8,["default-active"])}}},al=dt(rl,[["__scopeId","data-v-40ddda77"]]);const il={class:"common-layout"},ol={__name:"layout",setup(e){const t=li();console.log("aside初始"+t.width),$e(()=>t.width,r=>{n.value=r});const n=ee(t.width);return(r,a)=>{const i=oo,o=so,s=rt("RouterView"),c=co,l=io;return de(),ft("div",il,[O(l,{class:"custom-container"},{default:N(()=>[O(i,{width:n.value,class:"custom-aside"},{default:N(()=>[O(nl)]),_:1},8,["width"]),O(l,null,{default:N(()=>[O(o,{class:"custom-header"},{default:N(()=>[O(al)]),_:1}),O(c,null,{default:N(()=>[O(s)]),_:1})]),_:1})]),_:1})])}}},sl=dt(ol,[["__scopeId","data-v-03555fe2"]]),cl=[{path:"/",redirect:"/login1"},{path:"/login1",component:Qc},{path:"/main",component:sl,children:[{path:""},{path:"users",component:el}]}],Tn=Es({history:jo(),routes:cl});function qr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qr(Object(n),!0).forEach(function(r){Y(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qr(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Dt(e){"@babel/helpers - typeof";return Dt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Dt(e)}function ll(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Yr(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ul(e,t,n){return t&&Yr(e.prototype,t),n&&Yr(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nr(e,t){return dl(e)||pl(e,t)||ui(e,t)||vl()}function ht(e){return fl(e)||ml(e)||ui(e)||hl()}function fl(e){if(Array.isArray(e))return In(e)}function dl(e){if(Array.isArray(e))return e}function ml(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function pl(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(c){i=!0,s=c}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function ui(e,t){if(e){if(typeof e=="string")return In(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return In(e,t)}}function In(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function hl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vl(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Gr=function(){},rr={},fi={},di=null,mi={mark:Gr,measure:Gr};try{typeof window<"u"&&(rr=window),typeof document<"u"&&(fi=document),typeof MutationObserver<"u"&&(di=MutationObserver),typeof performance<"u"&&(mi=performance)}catch{}var gl=rr.navigator||{},Kr=gl.userAgent,Jr=Kr===void 0?"":Kr,_e=rr,D=fi,Xr=di,wt=mi;_e.document;var ge=!!D.documentElement&&!!D.head&&typeof D.addEventListener=="function"&&typeof D.createElement=="function",pi=~Jr.indexOf("MSIE")||~Jr.indexOf("Trident/"),xt,Et,kt,_t,St,pe="___FONT_AWESOME___",Ln=16,hi="fa",vi="svg-inline--fa",Ne="data-fa-i2svg",Mn="data-fa-pseudo-element",yl="data-fa-pseudo-element-pending",ar="data-prefix",ir="data-icon",Qr="fontawesome-i2svg",bl="async",wl=["HTML","HEAD","STYLE","SCRIPT"],gi=function(){try{return!0}catch{return!1}}(),j="classic",U="sharp",or=[j,U];function vt(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[j]}})}var ot=vt((xt={},Y(xt,j,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Y(xt,U,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),xt)),st=vt((Et={},Y(Et,j,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Y(Et,U,{solid:"fass",regular:"fasr",light:"fasl"}),Et)),ct=vt((kt={},Y(kt,j,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Y(kt,U,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),kt)),xl=vt((_t={},Y(_t,j,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Y(_t,U,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),_t)),El=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,yi="fa-layers-text",kl=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,_l=vt((St={},Y(St,j,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Y(St,U,{900:"fass",400:"fasr",300:"fasl"}),St)),bi=[1,2,3,4,5,6,7,8,9,10],Sl=bi.concat([11,12,13,14,15,16,17,18,19,20]),Al=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Pe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},lt=new Set;Object.keys(st[j]).map(lt.add.bind(lt));Object.keys(st[U]).map(lt.add.bind(lt));var Ol=[].concat(or,ht(lt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Pe.GROUP,Pe.SWAP_OPACITY,Pe.PRIMARY,Pe.SECONDARY]).concat(bi.map(function(e){return"".concat(e,"x")})).concat(Sl.map(function(e){return"w-".concat(e)})),tt=_e.FontAwesomeConfig||{};function Cl(e){var t=D.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Pl(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(D&&typeof D.querySelector=="function"){var Rl=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Rl.forEach(function(e){var t=nr(e,2),n=t[0],r=t[1],a=Pl(Cl(n));a!=null&&(tt[r]=a)})}var wi={styleDefault:"solid",familyDefault:"classic",cssPrefix:hi,replacementClass:vi,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};tt.familyPrefix&&(tt.cssPrefix=tt.familyPrefix);var Ve=x(x({},wi),tt);Ve.autoReplaceSvg||(Ve.observeMutations=!1);var k={};Object.keys(wi).forEach(function(e){Object.defineProperty(k,e,{enumerable:!0,set:function(n){Ve[e]=n,nt.forEach(function(r){return r(k)})},get:function(){return Ve[e]}})});Object.defineProperty(k,"familyPrefix",{enumerable:!0,set:function(t){Ve.cssPrefix=t,nt.forEach(function(n){return n(k)})},get:function(){return Ve.cssPrefix}});_e.FontAwesomeConfig=k;var nt=[];function Nl(e){return nt.push(e),function(){nt.splice(nt.indexOf(e),1)}}var xe=Ln,oe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Tl(e){if(!(!e||!ge)){var t=D.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=D.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return D.head.insertBefore(t,r),e}}var Il="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ut(){for(var e=12,t="";e-- >0;)t+=Il[Math.random()*62|0];return t}function Ye(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function sr(e){return e.classList?Ye(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function xi(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ll(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(xi(e[n]),'" ')},"").trim()}function Xt(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function cr(e){return e.size!==oe.size||e.x!==oe.x||e.y!==oe.y||e.rotate!==oe.rotate||e.flipX||e.flipY}function Ml(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:c,path:l}}function Fl(e){var t=e.transform,n=e.width,r=n===void 0?Ln:n,a=e.height,i=a===void 0?Ln:a,o=e.startCentered,s=o===void 0?!1:o,c="";return s&&pi?c+="translate(".concat(t.x/xe-r/2,"em, ").concat(t.y/xe-i/2,"em) "):s?c+="translate(calc(-50% + ".concat(t.x/xe,"em), calc(-50% + ").concat(t.y/xe,"em)) "):c+="translate(".concat(t.x/xe,"em, ").concat(t.y/xe,"em) "),c+="scale(".concat(t.size/xe*(t.flipX?-1:1),", ").concat(t.size/xe*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var zl=`:root, :host {
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
}`;function Ei(){var e=hi,t=vi,n=k.cssPrefix,r=k.replacementClass,a=zl;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Zr=!1;function gn(){k.autoAddCss&&!Zr&&(Tl(Ei()),Zr=!0)}var jl={mixout:function(){return{dom:{css:Ei,insertCss:gn}}},hooks:function(){return{beforeDOMElementCreation:function(){gn()},beforeI2svg:function(){gn()}}}},he=_e||{};he[pe]||(he[pe]={});he[pe].styles||(he[pe].styles={});he[pe].hooks||(he[pe].hooks={});he[pe].shims||(he[pe].shims=[]);var ne=he[pe],ki=[],Dl=function e(){D.removeEventListener("DOMContentLoaded",e),Bt=1,ki.map(function(t){return t()})},Bt=!1;ge&&(Bt=(D.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(D.readyState),Bt||D.addEventListener("DOMContentLoaded",Dl));function Bl(e){ge&&(Bt?setTimeout(e,0):ki.push(e))}function gt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?xi(e):"<".concat(t," ").concat(Ll(r),">").concat(i.map(gt).join(""),"</").concat(t,">")}function ea(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var $l=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},yn=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?$l(n,a):n,c,l,u;for(r===void 0?(c=1,u=t[i[0]]):(c=0,u=r);c<o;c++)l=i[c],u=s(u,t[l],l,t);return u};function Ul(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Fn(e){var t=Ul(e);return t.length===1?t[0].toString(16):null}function Hl(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ta(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function zn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ta(t);typeof ne.hooks.addPack=="function"&&!a?ne.hooks.addPack(e,ta(t)):ne.styles[e]=x(x({},ne.styles[e]||{}),i),e==="fas"&&zn("fa",t)}var At,Ot,Ct,Fe=ne.styles,Wl=ne.shims,Vl=(At={},Y(At,j,Object.values(ct[j])),Y(At,U,Object.values(ct[U])),At),lr=null,_i={},Si={},Ai={},Oi={},Ci={},ql=(Ot={},Y(Ot,j,Object.keys(ot[j])),Y(Ot,U,Object.keys(ot[U])),Ot);function Yl(e){return~Ol.indexOf(e)}function Gl(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Yl(a)?a:null}var Pi=function(){var t=function(i){return yn(Fe,function(o,s,c){return o[c]=yn(s,i,{}),o},{})};_i=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(c){return typeof c=="number"});s.forEach(function(c){a[c.toString(16)]=o})}return a}),Si=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(c){return typeof c=="string"});s.forEach(function(c){a[c]=o})}return a}),Ci=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(c){a[c]=o}),a});var n="far"in Fe||k.autoFetchSvg,r=yn(Wl,function(a,i){var o=i[0],s=i[1],c=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:c}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:c}),a},{names:{},unicodes:{}});Ai=r.names,Oi=r.unicodes,lr=Qt(k.styleDefault,{family:k.familyDefault})};Nl(function(e){lr=Qt(e.styleDefault,{family:k.familyDefault})});Pi();function ur(e,t){return(_i[e]||{})[t]}function Kl(e,t){return(Si[e]||{})[t]}function Re(e,t){return(Ci[e]||{})[t]}function Ri(e){return Ai[e]||{prefix:null,iconName:null}}function Jl(e){var t=Oi[e],n=ur("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Se(){return lr}var fr=function(){return{prefix:null,iconName:null,rest:[]}};function Qt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?j:n,a=ot[r][e],i=st[r][e]||st[r][a],o=e in ne.styles?e:null;return i||o||null}var na=(Ct={},Y(Ct,j,Object.keys(ct[j])),Y(Ct,U,Object.keys(ct[U])),Ct);function Zt(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},Y(t,j,"".concat(k.cssPrefix,"-").concat(j)),Y(t,U,"".concat(k.cssPrefix,"-").concat(U)),t),o=null,s=j;(e.includes(i[j])||e.some(function(l){return na[j].includes(l)}))&&(s=j),(e.includes(i[U])||e.some(function(l){return na[U].includes(l)}))&&(s=U);var c=e.reduce(function(l,u){var f=Gl(k.cssPrefix,u);if(Fe[u]?(u=Vl[s].includes(u)?xl[s][u]:u,o=u,l.prefix=u):ql[s].indexOf(u)>-1?(o=u,l.prefix=Qt(u,{family:s})):f?l.iconName=f:u!==k.replacementClass&&u!==i[j]&&u!==i[U]&&l.rest.push(u),!a&&l.prefix&&l.iconName){var d=o==="fa"?Ri(l.iconName):{},m=Re(l.prefix,l.iconName);d.prefix&&(o=null),l.iconName=d.iconName||m||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!Fe.far&&Fe.fas&&!k.autoFetchSvg&&(l.prefix="fas")}return l},fr());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&s===U&&(Fe.fass||k.autoFetchSvg)&&(c.prefix="fass",c.iconName=Re(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=Se()||"fas"),c}var Xl=function(){function e(){ll(this,e),this.definitions={}}return ul(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=x(x({},n.definitions[s]||{}),o[s]),zn(s,o[s]);var c=ct[j][s];c&&zn(c,o[s]),Pi()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,c=o.iconName,l=o.icon,u=l[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[s][f]=l)}),n[s][c]=l}),n}}]),e}(),ra=[],ze={},De={},Ql=Object.keys(De);function Zl(e,t){var n=t.mixoutsTo;return ra=e,ze={},Object.keys(De).forEach(function(r){Ql.indexOf(r)===-1&&delete De[r]}),ra.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Dt(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){ze[o]||(ze[o]=[]),ze[o].push(i[o])})}r.provides&&r.provides(De)}),n}function jn(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=ze[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Te(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=ze[e]||[];a.forEach(function(i){i.apply(null,n)})}function ve(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return De[e]?De[e].apply(null,t):void 0}function Dn(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Se();if(t)return t=Re(n,t)||t,ea(Ni.definitions,n,t)||ea(ne.styles,n,t)}var Ni=new Xl,eu=function(){k.autoReplaceSvg=!1,k.observeMutations=!1,Te("noAuto")},tu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ge?(Te("beforeI2svg",t),ve("pseudoElements2svg",t),ve("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;k.autoReplaceSvg===!1&&(k.autoReplaceSvg=!0),k.observeMutations=!0,Bl(function(){ru({autoReplaceSvgRoot:n}),Te("watch",t)})}},nu={icon:function(t){if(t===null)return null;if(Dt(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Re(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Qt(t[0]);return{prefix:r,iconName:Re(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(k.cssPrefix,"-"))>-1||t.match(El))){var a=Zt(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Se(),iconName:Re(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Se();return{prefix:i,iconName:Re(i,t)||t}}}},Z={noAuto:eu,config:k,dom:tu,parse:nu,library:Ni,findIconDefinition:Dn,toHtml:gt},ru=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?D:n;(Object.keys(ne.styles).length>0||k.autoFetchSvg)&&ge&&k.autoReplaceSvg&&Z.dom.i2svg({node:r})};function en(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return gt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(ge){var r=D.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function au(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(cr(o)&&n.found&&!r.found){var s=n.width,c=n.height,l={x:s/c/2,y:.5};a.style=Xt(x(x({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function iu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(k.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:x(x({},a),{},{id:o}),children:r}]}]}function dr(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,c=e.title,l=e.maskId,u=e.titleId,f=e.extra,d=e.watchable,m=d===void 0?!1:d,h=r.found?r:n,b=h.width,_=h.height,g=a==="fak",y=[k.replacementClass,i?"".concat(k.cssPrefix,"-").concat(i):""].filter(function(P){return f.classes.indexOf(P)===-1}).filter(function(P){return P!==""||!!P}).concat(f.classes).join(" "),A={children:[],attributes:x(x({},f.attributes),{},{"data-prefix":a,"data-icon":i,class:y,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(_)})},T=g&&!~f.classes.indexOf("fa-fw")?{width:"".concat(b/_*16*.0625,"em")}:{};m&&(A.attributes[Ne]=""),c&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(u||ut())},children:[c]}),delete A.attributes.title);var C=x(x({},A),{},{prefix:a,iconName:i,main:n,mask:r,maskId:l,transform:o,symbol:s,styles:x(x({},T),f.styles)}),$=r.found&&n.found?ve("generateAbstractMask",C)||{children:[],attributes:{}}:ve("generateAbstractIcon",C)||{children:[],attributes:{}},B=$.children,F=$.attributes;return C.children=B,C.attributes=F,s?iu(C):au(C)}function aa(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,c=s===void 0?!1:s,l=x(x(x({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});c&&(l[Ne]="");var u=x({},o.styles);cr(a)&&(u.transform=Fl({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=Xt(u);f.length>0&&(l.style=f);var d=[];return d.push({tag:"span",attributes:l,children:[t]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function ou(e){var t=e.content,n=e.title,r=e.extra,a=x(x(x({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Xt(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var bn=ne.styles;function Bn(e){var t=e[0],n=e[1],r=e.slice(4),a=nr(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(k.cssPrefix,"-").concat(Pe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(k.cssPrefix,"-").concat(Pe.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(k.cssPrefix,"-").concat(Pe.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var su={found:!1,width:512,height:512};function cu(e,t){!gi&&!k.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function $n(e,t){var n=t;return t==="fa"&&k.styleDefault!==null&&(t=Se()),new Promise(function(r,a){if(ve("missingIconAbstract"),n==="fa"){var i=Ri(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&bn[t]&&bn[t][e]){var o=bn[t][e];return r(Bn(o))}cu(e,t),r(x(x({},su),{},{icon:k.showMissingIcons&&e?ve("missingIconAbstract")||{}:{}}))})}var ia=function(){},Un=k.measurePerformance&&wt&&wt.mark&&wt.measure?wt:{mark:ia,measure:ia},Xe='FA "6.4.0"',lu=function(t){return Un.mark("".concat(Xe," ").concat(t," begins")),function(){return Ti(t)}},Ti=function(t){Un.mark("".concat(Xe," ").concat(t," ends")),Un.measure("".concat(Xe," ").concat(t),"".concat(Xe," ").concat(t," begins"),"".concat(Xe," ").concat(t," ends"))},mr={begin:lu,end:Ti},Lt=function(){};function oa(e){var t=e.getAttribute?e.getAttribute(Ne):null;return typeof t=="string"}function uu(e){var t=e.getAttribute?e.getAttribute(ar):null,n=e.getAttribute?e.getAttribute(ir):null;return t&&n}function fu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(k.replacementClass)}function du(){if(k.autoReplaceSvg===!0)return Mt.replace;var e=Mt[k.autoReplaceSvg];return e||Mt.replace}function mu(e){return D.createElementNS("http://www.w3.org/2000/svg",e)}function pu(e){return D.createElement(e)}function Ii(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?mu:pu:n;if(typeof e=="string")return D.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Ii(o,{ceFn:r}))}),a}function hu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Mt={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Ii(a),n)}),n.getAttribute(Ne)===null&&k.keepOriginalSource){var r=D.createComment(hu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~sr(n).indexOf(k.replacementClass))return Mt.replace(t);var a=new RegExp("".concat(k.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,c){return c===k.replacementClass||c.match(a)?s.toSvg.push(c):s.toNode.push(c),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return gt(s)}).join(`
`);n.setAttribute(Ne,""),n.innerHTML=o}};function sa(e){e()}function Li(e,t){var n=typeof t=="function"?t:Lt;if(e.length===0)n();else{var r=sa;k.mutateApproach===bl&&(r=_e.requestAnimationFrame||sa),r(function(){var a=du(),i=mr.begin("mutate");e.map(a),i(),n()})}}var pr=!1;function Mi(){pr=!0}function Hn(){pr=!1}var $t=null;function ca(e){if(Xr&&k.observeMutations){var t=e.treeCallback,n=t===void 0?Lt:t,r=e.nodeCallback,a=r===void 0?Lt:r,i=e.pseudoElementsCallback,o=i===void 0?Lt:i,s=e.observeMutationsRoot,c=s===void 0?D:s;$t=new Xr(function(l){if(!pr){var u=Se();Ye(l).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!oa(f.addedNodes[0])&&(k.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&k.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&oa(f.target)&&~Al.indexOf(f.attributeName))if(f.attributeName==="class"&&uu(f.target)){var d=Zt(sr(f.target)),m=d.prefix,h=d.iconName;f.target.setAttribute(ar,m||u),h&&f.target.setAttribute(ir,h)}else fu(f.target)&&a(f.target)})}}),ge&&$t.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function vu(){$t&&$t.disconnect()}function gu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function yu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Zt(sr(e));return a.prefix||(a.prefix=Se()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Kl(a.prefix,e.innerText)||ur(a.prefix,Fn(e.innerText))),!a.iconName&&k.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function bu(e){var t=Ye(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return k.autoA11y&&(n?t["aria-labelledby"]="".concat(k.replacementClass,"-title-").concat(r||ut()):(t["aria-hidden"]="true",t.focusable="false")),t}function wu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:oe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function la(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=yu(e),r=n.iconName,a=n.prefix,i=n.rest,o=bu(e),s=jn("parseNodeAttributes",{},e),c=t.styleParser?gu(e):[];return x({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:oe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},s)}var xu=ne.styles;function Fi(e){var t=k.autoReplaceSvg==="nest"?la(e,{styleParser:!1}):la(e);return~t.extra.classes.indexOf(yi)?ve("generateLayersText",e,t):ve("generateSvgReplacementMutation",e,t)}var Ae=new Set;or.map(function(e){Ae.add("fa-".concat(e))});Object.keys(ot[j]).map(Ae.add.bind(Ae));Object.keys(ot[U]).map(Ae.add.bind(Ae));Ae=ht(Ae);function ua(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ge)return Promise.resolve();var n=D.documentElement.classList,r=function(f){return n.add("".concat(Qr,"-").concat(f))},a=function(f){return n.remove("".concat(Qr,"-").concat(f))},i=k.autoFetchSvg?Ae:or.map(function(u){return"fa-".concat(u)}).concat(Object.keys(xu));i.includes("fa")||i.push("fa");var o=[".".concat(yi,":not([").concat(Ne,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Ne,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ye(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var c=mr.begin("onTree"),l=s.reduce(function(u,f){try{var d=Fi(f);d&&u.push(d)}catch(m){gi||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise(function(u,f){Promise.all(l).then(function(d){Li(d,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),c(),u()})}).catch(function(d){c(),f(d)})})}function Eu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Fi(e).then(function(n){n&&Li([n],t)})}function ku(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Dn(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Dn(a||{})),e(r,x(x({},n),{},{mask:a}))}}var _u=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?oe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,c=s===void 0?null:s,l=n.maskId,u=l===void 0?null:l,f=n.title,d=f===void 0?null:f,m=n.titleId,h=m===void 0?null:m,b=n.classes,_=b===void 0?[]:b,g=n.attributes,y=g===void 0?{}:g,A=n.styles,T=A===void 0?{}:A;if(t){var C=t.prefix,$=t.iconName,B=t.icon;return en(x({type:"icon"},t),function(){return Te("beforeDOMElementCreation",{iconDefinition:t,params:n}),k.autoA11y&&(d?y["aria-labelledby"]="".concat(k.replacementClass,"-title-").concat(h||ut()):(y["aria-hidden"]="true",y.focusable="false")),dr({icons:{main:Bn(B),mask:c?Bn(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:$,transform:x(x({},oe),a),symbol:o,title:d,maskId:u,titleId:h,extra:{attributes:y,styles:T,classes:_}})})}},Su={mixout:function(){return{icon:ku(_u)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ua,n.nodeCallback=Eu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?D:r,i=n.callback,o=i===void 0?function(){}:i;return ua(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,c=r.transform,l=r.symbol,u=r.mask,f=r.maskId,d=r.extra;return new Promise(function(m,h){Promise.all([$n(a,s),u.iconName?$n(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(b){var _=nr(b,2),g=_[0],y=_[1];m([n,dr({icons:{main:g,mask:y},prefix:s,iconName:a,transform:c,symbol:l,maskId:f,title:i,titleId:o,extra:d,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,c=Xt(s);c.length>0&&(a.style=c);var l;return cr(o)&&(l=ve("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(l||i.icon),{children:r,attributes:a}}}},Au={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return en({type:"layer"},function(){Te("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(c){o=o.concat(c.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(k.cssPrefix,"-layers")].concat(ht(i)).join(" ")},children:o}]})}}}},Ou={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,c=r.attributes,l=c===void 0?{}:c,u=r.styles,f=u===void 0?{}:u;return en({type:"counter",content:n},function(){return Te("beforeDOMElementCreation",{content:n,params:r}),ou({content:n.toString(),title:i,extra:{attributes:l,styles:f,classes:["".concat(k.cssPrefix,"-layers-counter")].concat(ht(s))}})})}}}},Cu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?oe:a,o=r.title,s=o===void 0?null:o,c=r.classes,l=c===void 0?[]:c,u=r.attributes,f=u===void 0?{}:u,d=r.styles,m=d===void 0?{}:d;return en({type:"text",content:n},function(){return Te("beforeDOMElementCreation",{content:n,params:r}),aa({content:n,transform:x(x({},oe),i),title:s,extra:{attributes:f,styles:m,classes:["".concat(k.cssPrefix,"-layers-text")].concat(ht(l))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,c=null;if(pi){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/l,c=u.height/l}return k.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,aa({content:n.innerHTML,width:s,height:c,transform:i,title:a,extra:o,watchable:!0})])}}},Pu=new RegExp('"',"ug"),fa=[1105920,1112319];function Ru(e){var t=e.replace(Pu,""),n=Hl(t,0),r=n>=fa[0]&&n<=fa[1],a=t.length===2?t[0]===t[1]:!1;return{value:Fn(a?t[0]:t),isSecondary:r||a}}function da(e,t){var n="".concat(yl).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ye(e.children),o=i.filter(function(B){return B.getAttribute(Mn)===t})[0],s=_e.getComputedStyle(e,t),c=s.getPropertyValue("font-family").match(kl),l=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!c)return e.removeChild(o),r();if(c&&u!=="none"&&u!==""){var f=s.getPropertyValue("content"),d=~["Sharp"].indexOf(c[2])?U:j,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?st[d][c[2].toLowerCase()]:_l[d][l],h=Ru(f),b=h.value,_=h.isSecondary,g=c[0].startsWith("FontAwesome"),y=ur(m,b),A=y;if(g){var T=Jl(b);T.iconName&&T.prefix&&(y=T.iconName,m=T.prefix)}if(y&&!_&&(!o||o.getAttribute(ar)!==m||o.getAttribute(ir)!==A)){e.setAttribute(n,A),o&&e.removeChild(o);var C=wu(),$=C.extra;$.attributes[Mn]=t,$n(y,m).then(function(B){var F=dr(x(x({},C),{},{icons:{main:B,mask:fr()},prefix:m,iconName:A,extra:$,watchable:!0})),P=D.createElement("svg");t==="::before"?e.insertBefore(P,e.firstChild):e.appendChild(P),P.outerHTML=F.map(function(G){return gt(G)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Nu(e){return Promise.all([da(e,"::before"),da(e,"::after")])}function Tu(e){return e.parentNode!==document.head&&!~wl.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Mn)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ma(e){if(ge)return new Promise(function(t,n){var r=Ye(e.querySelectorAll("*")).filter(Tu).map(Nu),a=mr.begin("searchPseudoElements");Mi(),Promise.all(r).then(function(){a(),Hn(),t()}).catch(function(){a(),Hn(),n()})})}var Iu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ma,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?D:r;k.searchPseudoElements&&ma(a)}}},pa=!1,Lu={mixout:function(){return{dom:{unwatch:function(){Mi(),pa=!0}}}},hooks:function(){return{bootstrap:function(){ca(jn("mutationObserverCallbacks",{}))},noAuto:function(){vu()},watch:function(n){var r=n.observeMutationsRoot;pa?Hn():ca(jn("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ha=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Mu={mixout:function(){return{parse:{transform:function(n){return ha(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=ha(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(a.x*32,", ").concat(a.y*32,") "),l="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(c," ").concat(l," ").concat(u)},d={transform:"translate(".concat(o/2*-1," -256)")},m={outer:s,inner:f,path:d};return{tag:"g",attributes:x({},m.outer),children:[{tag:"g",attributes:x({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:x(x({},r.icon.attributes),m.path)}]}]}}}},wn={x:0,y:0,width:"100%",height:"100%"};function va(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Fu(e){return e.tag==="g"?e.children:[e]}var zu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Zt(a.split(" ").map(function(o){return o.trim()})):fr();return i.prefix||(i.prefix=Se()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,c=n.transform,l=i.width,u=i.icon,f=o.width,d=o.icon,m=Ml({transform:c,containerWidth:f,iconWidth:l}),h={tag:"rect",attributes:x(x({},wn),{},{fill:"white"})},b=u.children?{children:u.children.map(va)}:{},_={tag:"g",attributes:x({},m.inner),children:[va(x({tag:u.tag,attributes:x(x({},u.attributes),m.path)},b))]},g={tag:"g",attributes:x({},m.outer),children:[_]},y="mask-".concat(s||ut()),A="clip-".concat(s||ut()),T={tag:"mask",attributes:x(x({},wn),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,g]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:Fu(d)},T]};return r.push(C,{tag:"rect",attributes:x({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(y,")")},wn)}),{children:r,attributes:a}}}},ju={provides:function(t){var n=!1;_e.matchMedia&&(n=_e.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:x(x({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=x(x({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:x(x({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:x(x({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:x(x({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:x(x({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:x(x({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:x(x({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:x(x({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Du={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Bu=[jl,Su,Au,Ou,Cu,Iu,Lu,Mu,zu,ju,Du];Zl(Bu,{mixoutsTo:Z});Z.noAuto;Z.config;var $u=Z.library;Z.dom;var Wn=Z.parse;Z.findIconDefinition;Z.toHtml;var Uu=Z.icon;Z.layer;Z.text;Z.counter;function ga(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ga(Object(n),!0).forEach(function(r){X(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ga(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ut(e){"@babel/helpers - typeof";return Ut=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ut(e)}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Hu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Wu(e,t){if(e==null)return{};var n=Hu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Vu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},zi={exports:{}};(function(e){(function(t){var n=function(g,y,A){if(!l(y)||f(y)||d(y)||m(y)||c(y))return y;var T,C=0,$=0;if(u(y))for(T=[],$=y.length;C<$;C++)T.push(n(g,y[C],A));else{T={};for(var B in y)Object.prototype.hasOwnProperty.call(y,B)&&(T[g(B,A)]=n(g,y[B],A))}return T},r=function(g,y){y=y||{};var A=y.separator||"_",T=y.split||/(?=[A-Z])/;return g.split(T).join(A)},a=function(g){return h(g)?g:(g=g.replace(/[\-_\s]+(.)?/g,function(y,A){return A?A.toUpperCase():""}),g.substr(0,1).toLowerCase()+g.substr(1))},i=function(g){var y=a(g);return y.substr(0,1).toUpperCase()+y.substr(1)},o=function(g,y){return r(g,y).toLowerCase()},s=Object.prototype.toString,c=function(g){return typeof g=="function"},l=function(g){return g===Object(g)},u=function(g){return s.call(g)=="[object Array]"},f=function(g){return s.call(g)=="[object Date]"},d=function(g){return s.call(g)=="[object RegExp]"},m=function(g){return s.call(g)=="[object Boolean]"},h=function(g){return g=g-0,g===g},b=function(g,y){var A=y&&"process"in y?y.process:y;return typeof A!="function"?g:function(T,C){return A(T,g,C)}},_={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(g,y){return n(b(a,y),g)},decamelizeKeys:function(g,y){return n(b(o,y),g,y)},pascalizeKeys:function(g,y){return n(b(i,y),g)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=_:t.humps=_})(Vu)})(zi);var qu=zi.exports,Yu=["class","style"];function Gu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=qu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Ku(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ji(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(c){return ji(c)}),a=Object.keys(e.attributes||{}).reduce(function(c,l){var u=e.attributes[l];switch(l){case"class":c.class=Ku(u);break;case"style":c.style=Gu(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Wu(n,Yu);return Yn(e.tag,fe(fe(fe({},t),{},{class:a.class,style:fe(fe({},a.style),o)},a.attrs),s),r)}var Di=!1;try{Di=!0}catch{}function Ju(){if(!Di&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function xn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?X({},e,t):{}}function Xu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},X(t,"fa-".concat(e.size),e.size!==null),X(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),X(t,"fa-pull-".concat(e.pull),e.pull!==null),X(t,"fa-swap-opacity",e.swapOpacity),X(t,"fa-bounce",e.bounce),X(t,"fa-shake",e.shake),X(t,"fa-beat",e.beat),X(t,"fa-fade",e.fade),X(t,"fa-beat-fade",e.beatFade),X(t,"fa-flash",e.flash),X(t,"fa-spin-pulse",e.spinPulse),X(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ya(e){if(e&&Ut(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Wn.icon)return Wn.icon(e);if(e===null)return null;if(Ut(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Qu=qn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=W(function(){return ya(t.icon)}),i=W(function(){return xn("classes",Xu(t))}),o=W(function(){return xn("transform",typeof t.transform=="string"?Wn.transform(t.transform):t.transform)}),s=W(function(){return xn("mask",ya(t.mask))}),c=W(function(){return Uu(a.value,fe(fe(fe(fe({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});$e(c,function(u){if(!u)return Ju("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var l=W(function(){return c.value?ji(c.value.abstract[0],{},r):null});return function(){return l.value}}}),Zu={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},ef={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"]},tf={prefix:"fas",iconName:"circle-arrow-left",icon:[512,512,["arrow-circle-left"],"f0a8","M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM231 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71L376 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-182.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L119 273c-9.4-9.4-9.4-24.6 0-33.9L231 127z"]},nf={prefix:"fas",iconName:"circle-arrow-right",icon:[512,512,["arrow-circle-right"],"f0a9","M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z"]},rf={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},af={prefix:"fas",iconName:"users-gear",icon:[640,512,["users-cog"],"f509","M144 160A80 80 0 1 0 144 0a80 80 0 1 0 0 160zm368 0A80 80 0 1 0 512 0a80 80 0 1 0 0 160zM0 298.7C0 310.4 9.6 320 21.3 320H234.7c.2 0 .4 0 .7 0c-26.6-23.5-43.3-57.8-43.3-96c0-7.6 .7-15 1.9-22.3c-13.6-6.3-28.7-9.7-44.6-9.7H106.7C47.8 192 0 239.8 0 298.7zM320 320c24 0 45.9-8.8 62.7-23.3c2.5-3.7 5.2-7.3 8-10.7c2.7-3.3 5.7-6.1 9-8.3C410 262.3 416 243.9 416 224c0-53-43-96-96-96s-96 43-96 96s43 96 96 96zm65.4 60.2c-10.3-5.9-18.1-16.2-20.8-28.2H261.3C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7H455.2c-2.1-5.2-3.2-10.9-3.2-16.4v-3c-1.3-.7-2.7-1.5-4-2.3l-2.6 1.5c-16.8 9.7-40.5 8-54.7-9.7c-4.5-5.6-8.6-11.5-12.4-17.6l-.1-.2-.1-.2-2.4-4.1-.1-.2-.1-.2c-3.4-6.2-6.4-12.6-9-19.3c-8.2-21.2 2.2-42.6 19-52.3l2.7-1.5c0-.8 0-1.5 0-2.3s0-1.5 0-2.3l-2.7-1.5zM533.3 192H490.7c-15.9 0-31 3.5-44.6 9.7c1.3 7.2 1.9 14.7 1.9 22.3c0 17.4-3.5 33.9-9.7 49c2.5 .9 4.9 2 7.1 3.3l2.6 1.5c1.3-.8 2.6-1.6 4-2.3v-3c0-19.4 13.3-39.1 35.8-42.6c7.9-1.2 16-1.9 24.2-1.9s16.3 .6 24.2 1.9c22.5 3.5 35.8 23.2 35.8 42.6v3c1.3 .7 2.7 1.5 4 2.3l2.6-1.5c16.8-9.7 40.5-8 54.7 9.7c2.3 2.8 4.5 5.8 6.6 8.7c-2.1-57.1-49-102.7-106.6-102.7zm91.3 163.9c6.3-3.6 9.5-11.1 6.8-18c-2.1-5.5-4.6-10.8-7.4-15.9l-2.3-4c-3.1-5.1-6.5-9.9-10.2-14.5c-4.6-5.7-12.7-6.7-19-3L574.4 311c-8.9-7.6-19.1-13.6-30.4-17.6v-21c0-7.3-4.9-13.8-12.1-14.9c-6.5-1-13.1-1.5-19.9-1.5s-13.4 .5-19.9 1.5c-7.2 1.1-12.1 7.6-12.1 14.9v21c-11.2 4-21.5 10-30.4 17.6l-18.2-10.5c-6.3-3.6-14.4-2.6-19 3c-3.7 4.6-7.1 9.5-10.2 14.6l-2.3 3.9c-2.8 5.1-5.3 10.4-7.4 15.9c-2.6 6.8 .5 14.3 6.8 17.9l18.2 10.5c-1 5.7-1.6 11.6-1.6 17.6s.6 11.9 1.6 17.5l-18.2 10.5c-6.3 3.6-9.5 11.1-6.8 17.9c2.1 5.5 4.6 10.7 7.4 15.8l2.4 4.1c3 5.1 6.4 9.9 10.1 14.5c4.6 5.7 12.7 6.7 19 3L449.6 457c8.9 7.6 19.2 13.6 30.4 17.6v21c0 7.3 4.9 13.8 12.1 14.9c6.5 1 13.1 1.5 19.9 1.5s13.4-.5 19.9-1.5c7.2-1.1 12.1-7.6 12.1-14.9v-21c11.2-4 21.5-10 30.4-17.6l18.2 10.5c6.3 3.6 14.4 2.6 19-3c3.7-4.6 7.1-9.4 10.1-14.5l2.4-4.2c2.8-5.1 5.3-10.3 7.4-15.8c2.6-6.8-.5-14.3-6.8-17.9l-18.2-10.5c1-5.7 1.6-11.6 1.6-17.5s-.6-11.9-1.6-17.6l18.2-10.5zM472 384a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z"]},of={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};$u.add(rf,of,Zu,tf,nf,ef,af);const tn=lo(wo),sf=fo();tn.use(Tn);tn.use(sf);tn.component("font-awesome-icon",Qu);tn.mount("#app");
