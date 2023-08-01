import{e as Ea,r as J,m as Sa,i as qe,w as Se,a as mt,b as Dt,c as Aa,t as Gi,h as Ji,g as Xi,o as Qi,n as Oa,d as Zi,f as H,j as it,k as Me,l as w,p as re,s as eo,u as Ue,q as to,v as Yn,x as Kn,y as un,z as A,E as Gn,A as $,B as Te,C as Jn,D as Xn,F as Ca,G as no,H as ro,I as Qn,J as ao,K as Pa,L as Ra,M as Na,N as io,O as Nt,P as be,Q as kr,R as Ta,S as Ia,T as oo,U as so,V as co,W as lo,X as uo}from"./element-plus-5c15db03.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var fo=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let La;const Vt=e=>La=e,Ma=Symbol();function En(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var et;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(et||(et={}));function mo(){const e=Ea(!0),t=e.run(()=>J({}));let n=[],r=[];const a=Sa({install(i){Vt(a),a._a=i,i.provide(Ma,a),i.config.globalProperties.$pinia=a,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!fo?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return a}const za=()=>{};function xr(e,t,n,r=za){e.push(t);const a=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&Xi()&&Qi(a),a}function Fe(e,...t){e.slice().forEach(n=>{n(...t)})}const po=e=>e();function Sn(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],a=e[n];En(a)&&En(r)&&e.hasOwnProperty(n)&&!Dt(r)&&!Aa(r)?e[n]=Sn(a,r):e[n]=r}return e}const ho=Symbol();function vo(e){return!En(e)||!e.hasOwnProperty(ho)}const{assign:xe}=Object;function go(e){return!!(Dt(e)&&e.effect)}function yo(e,t,n,r){const{state:a,actions:i,getters:o}=t,s=n.state.value[e];let c;function l(){s||(n.state.value[e]=a?a():{});const u=Zi(n.state.value[e]);return xe(u,i,Object.keys(o||{}).reduce((f,d)=>(f[d]=Sa(H(()=>{Vt(n);const m=n._s.get(e);return o[d].call(m,m)})),f),{}))}return c=Fa(e,l,t,n,r,!0),c}function Fa(e,t,n={},r,a,i){let o;const s=xe({actions:{}},n),c={deep:!0};let l,u,f=[],d=[],m;const h=r.state.value[e];!i&&!h&&(r.state.value[e]={}),J({});let b;function _(M){let O;l=u=!1,typeof M=="function"?(M(r.state.value[e]),O={type:et.patchFunction,storeId:e,events:m}):(Sn(r.state.value[e],M),O={type:et.patchObject,payload:M,storeId:e,events:m});const G=b=Symbol();Oa().then(()=>{b===G&&(l=!0)}),u=!0,Fe(f,O,r.state.value[e])}const v=i?function(){const{state:O}=n,G=O?O():{};this.$patch(ie=>{xe(ie,G)})}:za;function y(){o.stop(),f=[],d=[],r._s.delete(e)}function C(M,O){return function(){Vt(r);const G=Array.from(arguments),ie=[],ye=[];function Pe(X){ie.push(X)}function an(X){ye.push(X)}Fe(d,{args:G,name:M,store:R,after:Pe,onError:an});let le;try{le=O.apply(this&&this.$id===e?this:R,G)}catch(X){throw Fe(ye,X),X}return le instanceof Promise?le.then(X=>(Fe(ie,X),X)).catch(X=>(Fe(ye,X),Promise.reject(X))):(Fe(ie,le),le)}}const N={_p:r,$id:e,$onAction:xr.bind(null,d),$patch:_,$reset:v,$subscribe(M,O={}){const G=xr(f,M,O.detached,()=>ie()),ie=o.run(()=>Se(()=>r.state.value[e],ye=>{(O.flush==="sync"?u:l)&&M({storeId:e,type:et.direct,events:m},ye)},xe({},c,O)));return G},$dispose:y},R=mt(N);r._s.set(e,R);const D=r._a&&r._a.runWithContext||po,j=r._e.run(()=>(o=Ea(),D(()=>o.run(t))));for(const M in j){const O=j[M];if(Dt(O)&&!go(O)||Aa(O))i||(h&&vo(O)&&(Dt(O)?O.value=h[M]:Sn(O,h[M])),r.state.value[e][M]=O);else if(typeof O=="function"){const G=C(M,O);j[M]=G,s.actions[M]=O}}return xe(R,j),xe(Gi(R),j),Object.defineProperty(R,"$state",{get:()=>r.state.value[e],set:M=>{_(O=>{xe(O,M)})}}),r._p.forEach(M=>{xe(R,o.run(()=>M({store:R,app:r._a,pinia:r,options:s})))}),h&&i&&n.hydrate&&n.hydrate(R.$state,h),l=!0,u=!0,R}function Da(e,t,n){let r,a;const i=typeof t=="function";typeof e=="string"?(r=e,a=i?n:t):(a=e,r=e.id);function o(s,c){const l=Ji();return s=s||(l?qe(Ma,null):null),s&&Vt(s),s=La,s._s.has(r)||(i?Fa(r,t,a,s):yo(r,a,s)),s._s.get(r)}return o.$id=r,o}const pt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},bo={};function wo(e,t){const n=it("RouterView");return re(),Me("div",null,[w(n)])}const _o=pt(bo,[["render",wo]]);/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const De=typeof window<"u";function ko(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const z=Object.assign;function fn(e,t){const n={};for(const r in t){const a=t[r];n[r]=ae(a)?a.map(e):e(a)}return n}const tt=()=>{},ae=Array.isArray,xo=/\/$/,Eo=e=>e.replace(xo,"");function dn(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let c=t.indexOf("?");return s<c&&s>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=Co(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function So(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Er(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ao(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&He(t.matched[r],n.matched[a])&&ja(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function He(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ja(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Oo(e[n],t[n]))return!1;return!0}function Oo(e,t){return ae(e)?Sr(e,t):ae(t)?Sr(t,e):e===t}function Sr(e,t){return ae(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Co(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),a=r[r.length-1];(a===".."||a===".")&&r.push("");let i=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==".")if(s==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var ot;(function(e){e.pop="pop",e.push="push"})(ot||(ot={}));var nt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(nt||(nt={}));function Po(e){if(!e)if(De){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Eo(e)}const Ro=/^[^#]+#/;function No(e,t){return e.replace(Ro,"#")+t}function To(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Wt=()=>({left:window.pageXOffset,top:window.pageYOffset});function Io(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=To(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ar(e,t){return(history.state?history.state.position-t:-1)+e}const An=new Map;function Lo(e,t){An.set(e,t)}function Mo(e){const t=An.get(e);return An.delete(e),t}let zo=()=>location.protocol+"//"+location.host;function Ba(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,c=a.slice(s);return c[0]!=="/"&&(c="/"+c),Er(c,"")}return Er(n,e)+r+a}function Fo(e,t,n,r){let a=[],i=[],o=null;const s=({state:d})=>{const m=Ba(e,location),h=n.value,b=t.value;let _=0;if(d){if(n.value=m,t.value=d,o&&o===h){o=null;return}_=b?d.position-b.position:0}else r(m);a.forEach(v=>{v(n.value,h,{delta:_,type:ot.pop,direction:_?_>0?nt.forward:nt.back:nt.unknown})})};function c(){o=n.value}function l(d){a.push(d);const m=()=>{const h=a.indexOf(d);h>-1&&a.splice(h,1)};return i.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(z({},d.state,{scroll:Wt()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function Or(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Wt():null}}function Do(e){const{history:t,location:n}=window,r={value:Ba(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:zo()+e+c;try{t[u?"replaceState":"pushState"](l,"",d),a.value=l}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(c,l){const u=z({},t.state,Or(a.value.back,c,a.value.forward,!0),l,{position:a.value.position});i(c,u,!0),r.value=c}function s(c,l){const u=z({},a.value,t.state,{forward:c,scroll:Wt()});i(u.current,u,!0);const f=z({},Or(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:a,push:s,replace:o}}function jo(e){e=Po(e);const t=Do(e),n=Fo(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=z({location:"",base:e,go:r,createHref:No.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function Bo(e){return typeof e=="string"||e&&typeof e=="object"}function Ua(e){return typeof e=="string"||typeof e=="symbol"}const we={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},$a=Symbol("");var Cr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Cr||(Cr={}));function Ve(e,t){return z(new Error,{type:e,[$a]:!0},t)}function ue(e,t){return e instanceof Error&&$a in e&&(t==null||!!(e.type&t))}const Pr="[^/]+?",Uo={sensitive:!1,strict:!1,start:!0,end:!0},$o=/[.+*?^${}()[\]/\\]/g;function qo(e,t){const n=z({},Uo,t),r=[];let a=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(a+="/");for(let f=0;f<l.length;f++){const d=l[f];let m=40+(n.sensitive?.25:0);if(d.type===0)f||(a+="/"),a+=d.value.replace($o,"\\$&"),m+=40;else if(d.type===1){const{value:h,repeatable:b,optional:_,regexp:v}=d;i.push({name:h,repeatable:b,optional:_});const y=v||Pr;if(y!==Pr){m+=10;try{new RegExp(`(${y})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${h}" (${y}): `+N.message)}}let C=b?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(C=_&&l.length<2?`(?:/${C})`:"/"+C),_&&(C+="?"),a+=C,m+=20,_&&(m+=-8),b&&(m+=-20),y===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(l){const u=l.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",h=i[d-1];f[h.name]=m&&h.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const d of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:h,repeatable:b,optional:_}=m,v=h in l?l[h]:"";if(ae(v)&&!b)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const y=ae(v)?v.join("/"):v;if(!y)if(_)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${h}"`);u+=y}}return u||"/"}return{re:o,score:r,keys:i,parse:s,stringify:c}}function Ho(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Vo(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=Ho(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Rr(r))return 1;if(Rr(a))return-1}return a.length-r.length}function Rr(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Wo={type:0,value:""},Yo=/[a-zA-Z0-9_]/;function Ko(e){if(!e)return[[]];if(e==="/")return[[Wo]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;s<e.length;){if(c=e[s++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:Yo.test(c)?d():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&s--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&s--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),a}function Go(e,t,n){const r=qo(Ko(e.path),n),a=z(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function Jo(e,t){const n=[],r=new Map;t=Ir({strict:!1,end:!0,sensitive:!1},t);function a(u){return r.get(u)}function i(u,f,d){const m=!d,h=Xo(u);h.aliasOf=d&&d.record;const b=Ir(t,u),_=[h];if("alias"in u){const C=typeof u.alias=="string"?[u.alias]:u.alias;for(const N of C)_.push(z({},h,{components:d?d.record.components:h.components,path:N,aliasOf:d?d.record:h}))}let v,y;for(const C of _){const{path:N}=C;if(f&&N[0]!=="/"){const R=f.record.path,D=R[R.length-1]==="/"?"":"/";C.path=f.record.path+(N&&D+N)}if(v=Go(C,f,b),d?d.alias.push(v):(y=y||v,y!==v&&y.alias.push(v),m&&u.name&&!Tr(v)&&o(u.name)),h.children){const R=h.children;for(let D=0;D<R.length;D++)i(R[D],v,d&&d.children[D])}d=d||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&c(v)}return y?()=>{o(y)}:tt}function o(u){if(Ua(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function s(){return n}function c(u){let f=0;for(;f<n.length&&Vo(u,n[f])>=0&&(u.record.path!==n[f].record.path||!qa(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Tr(u)&&r.set(u.record.name,u)}function l(u,f){let d,m={},h,b;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Ve(1,{location:u});b=d.record.name,m=z(Nr(f.params,d.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&Nr(u.params,d.keys.map(y=>y.name))),h=d.stringify(m)}else if("path"in u)h=u.path,d=n.find(y=>y.re.test(h)),d&&(m=d.parse(h),b=d.record.name);else{if(d=f.name?r.get(f.name):n.find(y=>y.re.test(f.path)),!d)throw Ve(1,{location:u,currentLocation:f});b=d.record.name,m=z({},f.params,u.params),h=d.stringify(m)}const _=[];let v=d;for(;v;)_.unshift(v.record),v=v.parent;return{name:b,path:h,params:m,matched:_,meta:Zo(_)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Nr(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Xo(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Qo(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Qo(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Tr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Zo(e){return e.reduce((t,n)=>z(t,n.meta),{})}function Ir(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function qa(e,t){return t.children.some(n=>n===e||qa(e,n))}const Ha=/#/g,es=/&/g,ts=/\//g,ns=/=/g,rs=/\?/g,Va=/\+/g,as=/%5B/g,is=/%5D/g,Wa=/%5E/g,os=/%60/g,Ya=/%7B/g,ss=/%7C/g,Ka=/%7D/g,cs=/%20/g;function Zn(e){return encodeURI(""+e).replace(ss,"|").replace(as,"[").replace(is,"]")}function ls(e){return Zn(e).replace(Ya,"{").replace(Ka,"}").replace(Wa,"^")}function On(e){return Zn(e).replace(Va,"%2B").replace(cs,"+").replace(Ha,"%23").replace(es,"%26").replace(os,"`").replace(Ya,"{").replace(Ka,"}").replace(Wa,"^")}function us(e){return On(e).replace(ns,"%3D")}function fs(e){return Zn(e).replace(Ha,"%23").replace(rs,"%3F")}function ds(e){return e==null?"":fs(e).replace(ts,"%2F")}function jt(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function ms(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Va," "),o=i.indexOf("="),s=jt(o<0?i:i.slice(0,o)),c=o<0?null:jt(i.slice(o+1));if(s in t){let l=t[s];ae(l)||(l=t[s]=[l]),l.push(c)}else t[s]=c}return t}function Lr(e){let t="";for(let n in e){const r=e[n];if(n=us(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(ae(r)?r.map(i=>i&&On(i)):[r&&On(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function ps(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=ae(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const hs=Symbol(""),Mr=Symbol(""),er=Symbol(""),Ga=Symbol(""),Cn=Symbol("");function Xe(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Ee(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const c=f=>{f===!1?s(Ve(4,{from:n,to:t})):f instanceof Error?s(f):Bo(f)?s(Ve(2,{from:t,to:f})):(i&&r.enterCallbacks[a]===i&&typeof f=="function"&&i.push(f),o())},l=e.call(r&&r.instances[a],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(f=>s(f))})}function mn(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(vs(s)){const l=(s.__vccOpts||s)[t];l&&a.push(Ee(l,n,r,i,o))}else{let c=s();a.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=ko(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[t];return d&&Ee(d,n,r,i,o)()}))}}return a}function vs(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function zr(e){const t=qe(er),n=qe(Ga),r=H(()=>t.resolve(Ue(e.to))),a=H(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(He.bind(null,u));if(d>-1)return d;const m=Fr(c[l-2]);return l>1&&Fr(u)===m&&f[f.length-1].path!==m?f.findIndex(He.bind(null,c[l-2])):d}),i=H(()=>a.value>-1&&ws(n.params,r.value.params)),o=H(()=>a.value>-1&&a.value===n.matched.length-1&&ja(n.params,r.value.params));function s(c={}){return bs(c)?t[Ue(e.replace)?"replace":"push"](Ue(e.to)).catch(tt):Promise.resolve()}return{route:r,href:H(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const gs=Yn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zr,setup(e,{slots:t}){const n=mt(zr(e)),{options:r}=qe(er),a=H(()=>({[Dr(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Dr(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Kn("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),ys=gs;function bs(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ws(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!ae(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Fr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Dr=(e,t,n)=>e??t??n,_s=Yn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=qe(Cn),a=H(()=>e.route||r.value),i=qe(Mr,0),o=H(()=>{let l=Ue(i);const{matched:u}=a.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),s=H(()=>a.value.matched[o.value]);un(Mr,H(()=>o.value+1)),un(hs,s),un(Cn,a);const c=J();return Se(()=>[c.value,s.value,e.name],([l,u,f],[d,m,h])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!He(u,m)||!d)&&(u.enterCallbacks[f]||[]).forEach(b=>b(l))},{flush:"post"}),()=>{const l=a.value,u=e.name,f=s.value,d=f&&f.components[u];if(!d)return jr(n.default,{Component:d,route:l});const m=f.props[u],h=m?m===!0?l.params:typeof m=="function"?m(l):m:null,_=Kn(d,z({},h,t,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return jr(n.default,{Component:_,route:l})||_}}});function jr(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ks=_s;function xs(e){const t=Jo(e.routes,e),n=e.parseQuery||ms,r=e.stringifyQuery||Lr,a=e.history,i=Xe(),o=Xe(),s=Xe(),c=eo(we);let l=we;De&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=fn.bind(null,g=>""+g),f=fn.bind(null,ds),d=fn.bind(null,jt);function m(g,E){let k,P;return Ua(g)?(k=t.getRecordMatcher(g),P=E):P=g,t.addRoute(P,k)}function h(g){const E=t.getRecordMatcher(g);E&&t.removeRoute(E)}function b(){return t.getRoutes().map(g=>g.record)}function _(g){return!!t.getRecordMatcher(g)}function v(g,E){if(E=z({},E||c.value),typeof g=="string"){const T=dn(n,g,E.path),W=t.resolve({path:T.path},E),Je=a.createHref(T.fullPath);return z(T,W,{params:d(W.params),hash:jt(T.hash),redirectedFrom:void 0,href:Je})}let k;if("path"in g)k=z({},g,{path:dn(n,g.path,E.path).path});else{const T=z({},g.params);for(const W in T)T[W]==null&&delete T[W];k=z({},g,{params:f(T)}),E.params=f(E.params)}const P=t.resolve(k,E),F=g.hash||"";P.params=u(d(P.params));const V=So(r,z({},g,{hash:ls(F),path:P.path})),I=a.createHref(V);return z({fullPath:V,hash:F,query:r===Lr?ps(g.query):g.query||{}},P,{redirectedFrom:void 0,href:I})}function y(g){return typeof g=="string"?dn(n,g,c.value.path):z({},g)}function C(g,E){if(l!==g)return Ve(8,{from:E,to:g})}function N(g){return j(g)}function R(g){return N(z(y(g),{replace:!0}))}function D(g){const E=g.matched[g.matched.length-1];if(E&&E.redirect){const{redirect:k}=E;let P=typeof k=="function"?k(g):k;return typeof P=="string"&&(P=P.includes("?")||P.includes("#")?P=y(P):{path:P},P.params={}),z({query:g.query,hash:g.hash,params:"path"in P?{}:g.params},P)}}function j(g,E){const k=l=v(g),P=c.value,F=g.state,V=g.force,I=g.replace===!0,T=D(k);if(T)return j(z(y(T),{state:typeof T=="object"?z({},F,T.state):F,force:V,replace:I}),E||k);const W=k;W.redirectedFrom=E;let Je;return!V&&Ao(r,P,k)&&(Je=Ve(16,{to:W,from:P}),wr(P,P,!0,!1)),(Je?Promise.resolve(Je):G(W,P)).catch(Q=>ue(Q)?ue(Q,2)?Q:sn(Q):on(Q,W,P)).then(Q=>{if(Q){if(ue(Q,2))return j(z({replace:I},y(Q.to),{state:typeof Q.to=="object"?z({},F,Q.to.state):F,force:V}),E||W)}else Q=ye(W,P,!0,I,F);return ie(W,P,Q),Q})}function M(g,E){const k=C(g,E);return k?Promise.reject(k):Promise.resolve()}function O(g){const E=_t.values().next().value;return E&&typeof E.runWithContext=="function"?E.runWithContext(g):g()}function G(g,E){let k;const[P,F,V]=Es(g,E);k=mn(P.reverse(),"beforeRouteLeave",g,E);for(const T of P)T.leaveGuards.forEach(W=>{k.push(Ee(W,g,E))});const I=M.bind(null,g,E);return k.push(I),ze(k).then(()=>{k=[];for(const T of i.list())k.push(Ee(T,g,E));return k.push(I),ze(k)}).then(()=>{k=mn(F,"beforeRouteUpdate",g,E);for(const T of F)T.updateGuards.forEach(W=>{k.push(Ee(W,g,E))});return k.push(I),ze(k)}).then(()=>{k=[];for(const T of V)if(T.beforeEnter)if(ae(T.beforeEnter))for(const W of T.beforeEnter)k.push(Ee(W,g,E));else k.push(Ee(T.beforeEnter,g,E));return k.push(I),ze(k)}).then(()=>(g.matched.forEach(T=>T.enterCallbacks={}),k=mn(V,"beforeRouteEnter",g,E),k.push(I),ze(k))).then(()=>{k=[];for(const T of o.list())k.push(Ee(T,g,E));return k.push(I),ze(k)}).catch(T=>ue(T,8)?T:Promise.reject(T))}function ie(g,E,k){s.list().forEach(P=>O(()=>P(g,E,k)))}function ye(g,E,k,P,F){const V=C(g,E);if(V)return V;const I=E===we,T=De?history.state:{};k&&(P||I?a.replace(g.fullPath,z({scroll:I&&T&&T.scroll},F)):a.push(g.fullPath,F)),c.value=g,wr(g,E,k,I),sn()}let Pe;function an(){Pe||(Pe=a.listen((g,E,k)=>{if(!_r.listening)return;const P=v(g),F=D(P);if(F){j(z(F,{replace:!0}),P).catch(tt);return}l=P;const V=c.value;De&&Lo(Ar(V.fullPath,k.delta),Wt()),G(P,V).catch(I=>ue(I,12)?I:ue(I,2)?(j(I.to,P).then(T=>{ue(T,20)&&!k.delta&&k.type===ot.pop&&a.go(-1,!1)}).catch(tt),Promise.reject()):(k.delta&&a.go(-k.delta,!1),on(I,P,V))).then(I=>{I=I||ye(P,V,!1),I&&(k.delta&&!ue(I,8)?a.go(-k.delta,!1):k.type===ot.pop&&ue(I,20)&&a.go(-1,!1)),ie(P,V,I)}).catch(tt)}))}let le=Xe(),X=Xe(),wt;function on(g,E,k){sn(g);const P=X.list();return P.length?P.forEach(F=>F(g,E,k)):console.error(g),Promise.reject(g)}function Ki(){return wt&&c.value!==we?Promise.resolve():new Promise((g,E)=>{le.add([g,E])})}function sn(g){return wt||(wt=!g,an(),le.list().forEach(([E,k])=>g?k(g):E()),le.reset()),g}function wr(g,E,k,P){const{scrollBehavior:F}=e;if(!De||!F)return Promise.resolve();const V=!k&&Mo(Ar(g.fullPath,0))||(P||!k)&&history.state&&history.state.scroll||null;return Oa().then(()=>F(g,E,V)).then(I=>I&&Io(I)).catch(I=>on(I,g,E))}const cn=g=>a.go(g);let ln;const _t=new Set,_r={currentRoute:c,listening:!0,addRoute:m,removeRoute:h,hasRoute:_,getRoutes:b,resolve:v,options:e,push:N,replace:R,go:cn,back:()=>cn(-1),forward:()=>cn(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:X.add,isReady:Ki,install(g){const E=this;g.component("RouterLink",ys),g.component("RouterView",ks),g.config.globalProperties.$router=E,Object.defineProperty(g.config.globalProperties,"$route",{enumerable:!0,get:()=>Ue(c)}),De&&!ln&&c.value===we&&(ln=!0,N(a.location).catch(F=>{}));const k={};for(const F in we)Object.defineProperty(k,F,{get:()=>c.value[F],enumerable:!0});g.provide(er,E),g.provide(Ga,to(k)),g.provide(Cn,c);const P=g.unmount;_t.add(g),g.unmount=function(){_t.delete(g),_t.size<1&&(l=we,Pe&&Pe(),Pe=null,c.value=we,ln=!1,wt=!1),P()}}};function ze(g){return g.reduce((E,k)=>E.then(()=>O(k)),Promise.resolve())}return _r}function Es(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(l=>He(l,s))?r.push(s):n.push(s));const c=e.matched[o];c&&(t.matched.find(l=>He(l,c))||a.push(c))}return[n,r,a]}const Br="hcaptcha-api-script-id",Ja="_hcaptchaOnLoad";let Pn,Xa;const pn=new Promise((e,t)=>{Pn=e,Xa=t});function Ss(e){if(window.hcaptcha)return Pn(),pn;if(document.getElementById(Br))return pn;window[Ja]=Pn;const t=As(e),n=document.createElement("script");return n.id=Br,n.src=t,n.async=!0,n.defer=!0,n.onerror=r=>{console.error("Failed to load api: "+t,r),Xa("Failed to load api.js")},document.head.appendChild(n),pn}function As(e){let t=e.apiEndpoint;return t=fe(t,"render","explicit"),t=fe(t,"onload",Ja),t=fe(t,"recaptchacompat",e.reCaptchaCompat===!1?"off":null),t=fe(t,"hl",e.language),t=fe(t,"sentry",e.sentry),t=fe(t,"endpoint",e.endpoint),t=fe(t,"assethost",e.assethost),t=fe(t,"imghost",e.imghost),t=fe(t,"reportapi",e.reportapi),t}function fe(e,t,n){if(n!=null){const r=e.includes("?")?"&":"?";return e+r+t+"="+encodeURIComponent(n)}return e}var Os=(e,t)=>{for(const[n,r]of t)e[n]=r;return e};const Cs={name:"VueHcaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String,default:void 0},size:{type:String,default:void 0},tabindex:{type:String,default:void 0},language:{type:String,default:void 0},reCaptchaCompat:{type:Boolean,default:!0},challengeContainer:{type:String,default:void 0},rqdata:{type:String,default:void 0},sentry:{type:Boolean,default:!0},apiEndpoint:{type:String,default:"https://hcaptcha.com/1/api.js"},endpoint:{type:String,default:void 0},reportapi:{type:String,default:void 0},assethost:{type:String,default:void 0},imghost:{type:String,default:void 0}},data:()=>({widgetId:null,hcaptcha:null,renderedCb:null}),mounted(){return Ss(this.$props).then(this.onApiLoaded).catch(this.onError)},unmounted(){this.teardown()},destroyed(){this.teardown()},methods:{teardown(){this.widgetId&&(this.hcaptcha.reset(this.widgetId),this.hcaptcha.remove(this.widgetId))},onApiLoaded(){this.hcaptcha=window.hcaptcha;const e={sitekey:this.sitekey,theme:this.theme,size:this.size,tabindex:this.tabindex,callback:this.onVerify,"expired-callback":this.onExpired,"chalexpired-callback":this.onChallengeExpired,"error-callback":this.onError,"open-callback":this.onOpen,"close-callback":this.onClose};this.challengeContainer&&(e["challenge-container"]=this.challengeContainer),this.widgetId=this.hcaptcha.render(this.$el,e),this.rqdata&&this.hcaptcha.setData(this.widgetId,{rqdata:this.rqdata}),this.onRendered()},execute(){this.widgetId?(this.hcaptcha.execute(this.widgetId),this.onExecuted()):this.renderedCb=()=>{this.renderedCb=null,this.execute()}},executeAsync(){if(this.widgetId)return this.onExecuted(),this.hcaptcha.execute(this.widgetId,{async:!0});let e;const t=new Promise(n=>{e=n});return this.renderedCb=()=>{this.renderedCb=null,e()},t.then(this.executeAsync)},reset(){this.widgetId?(this.hcaptcha.reset(this.widgetId),this.onReset()):this.$emit("error","Element is not rendered yet and thus cannot reset it. Wait for `rendered` event to safely call reset.")},onRendered(){this.$emit("rendered"),this.renderedCb&&this.renderedCb()},onExecuted(){this.$emit("executed")},onReset(){this.$emit("reset")},onError(e){this.$emit("error",e),this.reset()},onVerify(){const e=this.hcaptcha.getResponse(this.widgetId),t=this.hcaptcha.getRespKey(this.widgetId);this.$emit("verify",e,t)},onExpired(){this.$emit("expired")},onChallengeExpired(){this.$emit("challengeExpired")},onOpen(){this.$emit("opened")},onClose(){this.$emit("closed")}}},Ps={id:"hcap-script"};function Rs(e,t,n,r,a,i){return re(),Me("div",Ps)}var Ns=Os(Cs,[["render",Rs]]);function Qa(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ts}=Object.prototype,{getPrototypeOf:tr}=Object,Yt=(e=>t=>{const n=Ts.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ce=e=>(e=e.toLowerCase(),t=>Yt(t)===e),Kt=e=>t=>typeof t===e,{isArray:Ke}=Array,st=Kt("undefined");function Is(e){return e!==null&&!st(e)&&e.constructor!==null&&!st(e.constructor)&&te(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Za=ce("ArrayBuffer");function Ls(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Za(e.buffer),t}const Ms=Kt("string"),te=Kt("function"),ei=Kt("number"),Gt=e=>e!==null&&typeof e=="object",zs=e=>e===!0||e===!1,Tt=e=>{if(Yt(e)!=="object")return!1;const t=tr(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Fs=ce("Date"),Ds=ce("File"),js=ce("Blob"),Bs=ce("FileList"),Us=e=>Gt(e)&&te(e.pipe),$s=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||te(e.append)&&((t=Yt(e))==="formdata"||t==="object"&&te(e.toString)&&e.toString()==="[object FormData]"))},qs=ce("URLSearchParams"),Hs=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ht(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,a;if(typeof e!="object"&&(e=[e]),Ke(e))for(r=0,a=e.length;r<a;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let s;for(r=0;r<o;r++)s=i[r],t.call(null,e[s],s,e)}}function ti(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,a;for(;r-- >0;)if(a=n[r],t===a.toLowerCase())return a;return null}const ni=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),ri=e=>!st(e)&&e!==ni;function Rn(){const{caseless:e}=ri(this)&&this||{},t={},n=(r,a)=>{const i=e&&ti(t,a)||a;Tt(t[i])&&Tt(r)?t[i]=Rn(t[i],r):Tt(r)?t[i]=Rn({},r):Ke(r)?t[i]=r.slice():t[i]=r};for(let r=0,a=arguments.length;r<a;r++)arguments[r]&&ht(arguments[r],n);return t}const Vs=(e,t,n,{allOwnKeys:r}={})=>(ht(t,(a,i)=>{n&&te(a)?e[i]=Qa(a,n):e[i]=a},{allOwnKeys:r}),e),Ws=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ys=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Ks=(e,t,n,r)=>{let a,i,o;const s={};if(t=t||{},e==null)return t;do{for(a=Object.getOwnPropertyNames(e),i=a.length;i-- >0;)o=a[i],(!r||r(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&tr(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Gs=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Js=e=>{if(!e)return null;if(Ke(e))return e;let t=e.length;if(!ei(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Xs=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&tr(Uint8Array)),Qs=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let a;for(;(a=r.next())&&!a.done;){const i=a.value;t.call(e,i[0],i[1])}},Zs=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},ec=ce("HTMLFormElement"),tc=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,a){return r.toUpperCase()+a}),Ur=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),nc=ce("RegExp"),ai=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ht(n,(a,i)=>{t(a,i,e)!==!1&&(r[i]=a)}),Object.defineProperties(e,r)},rc=e=>{ai(e,(t,n)=>{if(te(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(te(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ac=(e,t)=>{const n={},r=a=>{a.forEach(i=>{n[i]=!0})};return Ke(e)?r(e):r(String(e).split(t)),n},ic=()=>{},oc=(e,t)=>(e=+e,Number.isFinite(e)?e:t),hn="abcdefghijklmnopqrstuvwxyz",$r="0123456789",ii={DIGIT:$r,ALPHA:hn,ALPHA_DIGIT:hn+hn.toUpperCase()+$r},sc=(e=16,t=ii.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function cc(e){return!!(e&&te(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const lc=e=>{const t=new Array(10),n=(r,a)=>{if(Gt(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[a]=r;const i=Ke(r)?[]:{};return ht(r,(o,s)=>{const c=n(o,a+1);!st(c)&&(i[s]=c)}),t[a]=void 0,i}}return r};return n(e,0)},uc=ce("AsyncFunction"),fc=e=>e&&(Gt(e)||te(e))&&te(e.then)&&te(e.catch),p={isArray:Ke,isArrayBuffer:Za,isBuffer:Is,isFormData:$s,isArrayBufferView:Ls,isString:Ms,isNumber:ei,isBoolean:zs,isObject:Gt,isPlainObject:Tt,isUndefined:st,isDate:Fs,isFile:Ds,isBlob:js,isRegExp:nc,isFunction:te,isStream:Us,isURLSearchParams:qs,isTypedArray:Xs,isFileList:Bs,forEach:ht,merge:Rn,extend:Vs,trim:Hs,stripBOM:Ws,inherits:Ys,toFlatObject:Ks,kindOf:Yt,kindOfTest:ce,endsWith:Gs,toArray:Js,forEachEntry:Qs,matchAll:Zs,isHTMLForm:ec,hasOwnProperty:Ur,hasOwnProp:Ur,reduceDescriptors:ai,freezeMethods:rc,toObjectSet:ac,toCamelCase:tc,noop:ic,toFiniteNumber:oc,findKey:ti,global:ni,isContextDefined:ri,ALPHABET:ii,generateString:sc,isSpecCompliantForm:cc,toJSONObject:lc,isAsyncFn:uc,isThenable:fc};function L(e,t,n,r,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),a&&(this.response=a)}p.inherits(L,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:p.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const oi=L.prototype,si={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{si[e]={value:e}});Object.defineProperties(L,si);Object.defineProperty(oi,"isAxiosError",{value:!0});L.from=(e,t,n,r,a,i)=>{const o=Object.create(oi);return p.toFlatObject(e,o,function(c){return c!==Error.prototype},s=>s!=="isAxiosError"),L.call(o,e.message,t,n,r,a),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const dc=null;function Nn(e){return p.isPlainObject(e)||p.isArray(e)}function ci(e){return p.endsWith(e,"[]")?e.slice(0,-2):e}function qr(e,t,n){return e?e.concat(t).map(function(a,i){return a=ci(a),!n&&i?"["+a+"]":a}).join(n?".":""):t}function mc(e){return p.isArray(e)&&!e.some(Nn)}const pc=p.toFlatObject(p,{},null,function(t){return/^is[A-Z]/.test(t)});function Jt(e,t,n){if(!p.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=p.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,_){return!p.isUndefined(_[b])});const r=n.metaTokens,a=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&p.isSpecCompliantForm(t);if(!p.isFunction(a))throw new TypeError("visitor must be a function");function l(h){if(h===null)return"";if(p.isDate(h))return h.toISOString();if(!c&&p.isBlob(h))throw new L("Blob is not supported. Use a Buffer instead.");return p.isArrayBuffer(h)||p.isTypedArray(h)?c&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function u(h,b,_){let v=h;if(h&&!_&&typeof h=="object"){if(p.endsWith(b,"{}"))b=r?b:b.slice(0,-2),h=JSON.stringify(h);else if(p.isArray(h)&&mc(h)||(p.isFileList(h)||p.endsWith(b,"[]"))&&(v=p.toArray(h)))return b=ci(b),v.forEach(function(C,N){!(p.isUndefined(C)||C===null)&&t.append(o===!0?qr([b],N,i):o===null?b:b+"[]",l(C))}),!1}return Nn(h)?!0:(t.append(qr(_,b,i),l(h)),!1)}const f=[],d=Object.assign(pc,{defaultVisitor:u,convertValue:l,isVisitable:Nn});function m(h,b){if(!p.isUndefined(h)){if(f.indexOf(h)!==-1)throw Error("Circular reference detected in "+b.join("."));f.push(h),p.forEach(h,function(v,y){(!(p.isUndefined(v)||v===null)&&a.call(t,v,p.isString(y)?y.trim():y,b,d))===!0&&m(v,b?b.concat(y):[y])}),f.pop()}}if(!p.isObject(e))throw new TypeError("data must be an object");return m(e),t}function Hr(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function nr(e,t){this._pairs=[],e&&Jt(e,this,t)}const li=nr.prototype;li.append=function(t,n){this._pairs.push([t,n])};li.toString=function(t){const n=t?function(r){return t.call(this,r,Hr)}:Hr;return this._pairs.map(function(a){return n(a[0])+"="+n(a[1])},"").join("&")};function hc(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ui(e,t,n){if(!t)return e;const r=n&&n.encode||hc,a=n&&n.serialize;let i;if(a?i=a(t,n):i=p.isURLSearchParams(t)?t.toString():new nr(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class vc{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){p.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Vr=vc,fi={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},gc=typeof URLSearchParams<"u"?URLSearchParams:nr,yc=typeof FormData<"u"?FormData:null,bc=typeof Blob<"u"?Blob:null,wc=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),_c=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),oe={isBrowser:!0,classes:{URLSearchParams:gc,FormData:yc,Blob:bc},isStandardBrowserEnv:wc,isStandardBrowserWebWorkerEnv:_c,protocols:["http","https","file","blob","url","data"]};function kc(e,t){return Jt(e,new oe.classes.URLSearchParams,Object.assign({visitor:function(n,r,a,i){return oe.isNode&&p.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function xc(e){return p.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Ec(e){const t={},n=Object.keys(e);let r;const a=n.length;let i;for(r=0;r<a;r++)i=n[r],t[i]=e[i];return t}function di(e){function t(n,r,a,i){let o=n[i++];const s=Number.isFinite(+o),c=i>=n.length;return o=!o&&p.isArray(a)?a.length:o,c?(p.hasOwnProp(a,o)?a[o]=[a[o],r]:a[o]=r,!s):((!a[o]||!p.isObject(a[o]))&&(a[o]=[]),t(n,r,a[o],i)&&p.isArray(a[o])&&(a[o]=Ec(a[o])),!s)}if(p.isFormData(e)&&p.isFunction(e.entries)){const n={};return p.forEachEntry(e,(r,a)=>{t(xc(r),a,n,0)}),n}return null}const Sc={"Content-Type":void 0};function Ac(e,t,n){if(p.isString(e))try{return(t||JSON.parse)(e),p.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Xt={transitional:fi,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",a=r.indexOf("application/json")>-1,i=p.isObject(t);if(i&&p.isHTMLForm(t)&&(t=new FormData(t)),p.isFormData(t))return a&&a?JSON.stringify(di(t)):t;if(p.isArrayBuffer(t)||p.isBuffer(t)||p.isStream(t)||p.isFile(t)||p.isBlob(t))return t;if(p.isArrayBufferView(t))return t.buffer;if(p.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return kc(t,this.formSerializer).toString();if((s=p.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Jt(s?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||a?(n.setContentType("application/json",!1),Ac(t)):t}],transformResponse:[function(t){const n=this.transitional||Xt.transitional,r=n&&n.forcedJSONParsing,a=this.responseType==="json";if(t&&p.isString(t)&&(r&&!this.responseType||a)){const o=!(n&&n.silentJSONParsing)&&a;try{return JSON.parse(t)}catch(s){if(o)throw s.name==="SyntaxError"?L.from(s,L.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:oe.classes.FormData,Blob:oe.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};p.forEach(["delete","get","head"],function(t){Xt.headers[t]={}});p.forEach(["post","put","patch"],function(t){Xt.headers[t]=p.merge(Sc)});const rr=Xt,Oc=p.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Cc=e=>{const t={};let n,r,a;return e&&e.split(`
`).forEach(function(o){a=o.indexOf(":"),n=o.substring(0,a).trim().toLowerCase(),r=o.substring(a+1).trim(),!(!n||t[n]&&Oc[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Wr=Symbol("internals");function Qe(e){return e&&String(e).trim().toLowerCase()}function It(e){return e===!1||e==null?e:p.isArray(e)?e.map(It):String(e)}function Pc(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Rc=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function vn(e,t,n,r,a){if(p.isFunction(r))return r.call(this,t,n);if(a&&(t=n),!!p.isString(t)){if(p.isString(r))return t.indexOf(r)!==-1;if(p.isRegExp(r))return r.test(t)}}function Nc(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Tc(e,t){const n=p.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(a,i,o){return this[r].call(this,t,a,i,o)},configurable:!0})})}class Qt{constructor(t){t&&this.set(t)}set(t,n,r){const a=this;function i(s,c,l){const u=Qe(c);if(!u)throw new Error("header name must be a non-empty string");const f=p.findKey(a,u);(!f||a[f]===void 0||l===!0||l===void 0&&a[f]!==!1)&&(a[f||c]=It(s))}const o=(s,c)=>p.forEach(s,(l,u)=>i(l,u,c));return p.isPlainObject(t)||t instanceof this.constructor?o(t,n):p.isString(t)&&(t=t.trim())&&!Rc(t)?o(Cc(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=Qe(t),t){const r=p.findKey(this,t);if(r){const a=this[r];if(!n)return a;if(n===!0)return Pc(a);if(p.isFunction(n))return n.call(this,a,r);if(p.isRegExp(n))return n.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Qe(t),t){const r=p.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||vn(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let a=!1;function i(o){if(o=Qe(o),o){const s=p.findKey(r,o);s&&(!n||vn(r,r[s],s,n))&&(delete r[s],a=!0)}}return p.isArray(t)?t.forEach(i):i(t),a}clear(t){const n=Object.keys(this);let r=n.length,a=!1;for(;r--;){const i=n[r];(!t||vn(this,this[i],i,t,!0))&&(delete this[i],a=!0)}return a}normalize(t){const n=this,r={};return p.forEach(this,(a,i)=>{const o=p.findKey(r,i);if(o){n[o]=It(a),delete n[i];return}const s=t?Nc(i):String(i).trim();s!==i&&delete n[i],n[s]=It(a),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return p.forEach(this,(r,a)=>{r!=null&&r!==!1&&(n[a]=t&&p.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(a=>r.set(a)),r}static accessor(t){const r=(this[Wr]=this[Wr]={accessors:{}}).accessors,a=this.prototype;function i(o){const s=Qe(o);r[s]||(Tc(a,o),r[s]=!0)}return p.isArray(t)?t.forEach(i):i(t),this}}Qt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);p.freezeMethods(Qt.prototype);p.freezeMethods(Qt);const me=Qt;function gn(e,t){const n=this||rr,r=t||n,a=me.from(r.headers);let i=r.data;return p.forEach(e,function(s){i=s.call(n,i,a.normalize(),t?t.status:void 0)}),a.normalize(),i}function mi(e){return!!(e&&e.__CANCEL__)}function vt(e,t,n){L.call(this,e??"canceled",L.ERR_CANCELED,t,n),this.name="CanceledError"}p.inherits(vt,L,{__CANCEL__:!0});function Ic(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new L("Request failed with status code "+n.status,[L.ERR_BAD_REQUEST,L.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Lc=oe.isStandardBrowserEnv?function(){return{write:function(n,r,a,i,o,s){const c=[];c.push(n+"="+encodeURIComponent(r)),p.isNumber(a)&&c.push("expires="+new Date(a).toGMTString()),p.isString(i)&&c.push("path="+i),p.isString(o)&&c.push("domain="+o),s===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Mc(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function zc(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function pi(e,t){return e&&!Mc(t)?zc(e,t):t}const Fc=oe.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function a(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=a(window.location.href),function(o){const s=p.isString(o)?a(o):o;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function Dc(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function jc(e,t){e=e||10;const n=new Array(e),r=new Array(e);let a=0,i=0,o;return t=t!==void 0?t:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[a]=c,r[a]=l;let f=i,d=0;for(;f!==a;)d+=n[f++],f=f%e;if(a=(a+1)%e,a===i&&(i=(i+1)%e),l-o<t)return;const m=u&&l-u;return m?Math.round(d*1e3/m):void 0}}function Yr(e,t){let n=0;const r=jc(50,250);return a=>{const i=a.loaded,o=a.lengthComputable?a.total:void 0,s=i-n,c=r(s),l=i<=o;n=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:s,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:a};u[t?"download":"upload"]=!0,e(u)}}const Bc=typeof XMLHttpRequest<"u",Uc=Bc&&function(e){return new Promise(function(n,r){let a=e.data;const i=me.from(e.headers).normalize(),o=e.responseType;let s;function c(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}p.isFormData(a)&&(oe.isStandardBrowserEnv||oe.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.setContentType("multipart/form-data;",!1));let l=new XMLHttpRequest;if(e.auth){const m=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(m+":"+h))}const u=pi(e.baseURL,e.url);l.open(e.method.toUpperCase(),ui(u,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function f(){if(!l)return;const m=me.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),b={data:!o||o==="text"||o==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:m,config:e,request:l};Ic(function(v){n(v),c()},function(v){r(v),c()},b),l=null}if("onloadend"in l?l.onloadend=f:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(f)},l.onabort=function(){l&&(r(new L("Request aborted",L.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new L("Network Error",L.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let h=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const b=e.transitional||fi;e.timeoutErrorMessage&&(h=e.timeoutErrorMessage),r(new L(h,b.clarifyTimeoutError?L.ETIMEDOUT:L.ECONNABORTED,e,l)),l=null},oe.isStandardBrowserEnv){const m=(e.withCredentials||Fc(u))&&e.xsrfCookieName&&Lc.read(e.xsrfCookieName);m&&i.set(e.xsrfHeaderName,m)}a===void 0&&i.setContentType(null),"setRequestHeader"in l&&p.forEach(i.toJSON(),function(h,b){l.setRequestHeader(b,h)}),p.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),o&&o!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",Yr(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",Yr(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=m=>{l&&(r(!m||m.type?new vt(null,e,l):m),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const d=Dc(u);if(d&&oe.protocols.indexOf(d)===-1){r(new L("Unsupported protocol "+d+":",L.ERR_BAD_REQUEST,e));return}l.send(a||null)})},Lt={http:dc,xhr:Uc};p.forEach(Lt,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const $c={getAdapter:e=>{e=p.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let a=0;a<t&&(n=e[a],!(r=p.isString(n)?Lt[n.toLowerCase()]:n));a++);if(!r)throw r===!1?new L(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(p.hasOwnProp(Lt,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!p.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Lt};function yn(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new vt(null,e)}function Kr(e){return yn(e),e.headers=me.from(e.headers),e.data=gn.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),$c.getAdapter(e.adapter||rr.adapter)(e).then(function(r){return yn(e),r.data=gn.call(e,e.transformResponse,r),r.headers=me.from(r.headers),r},function(r){return mi(r)||(yn(e),r&&r.response&&(r.response.data=gn.call(e,e.transformResponse,r.response),r.response.headers=me.from(r.response.headers))),Promise.reject(r)})}const Gr=e=>e instanceof me?e.toJSON():e;function We(e,t){t=t||{};const n={};function r(l,u,f){return p.isPlainObject(l)&&p.isPlainObject(u)?p.merge.call({caseless:f},l,u):p.isPlainObject(u)?p.merge({},u):p.isArray(u)?u.slice():u}function a(l,u,f){if(p.isUndefined(u)){if(!p.isUndefined(l))return r(void 0,l,f)}else return r(l,u,f)}function i(l,u){if(!p.isUndefined(u))return r(void 0,u)}function o(l,u){if(p.isUndefined(u)){if(!p.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function s(l,u,f){if(f in t)return r(l,u);if(f in e)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(l,u)=>a(Gr(l),Gr(u),!0)};return p.forEach(Object.keys(Object.assign({},e,t)),function(u){const f=c[u]||a,d=f(e[u],t[u],u);p.isUndefined(d)&&f!==s||(n[u]=d)}),n}const hi="1.4.0",ar={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ar[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Jr={};ar.transitional=function(t,n,r){function a(i,o){return"[Axios v"+hi+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,s)=>{if(t===!1)throw new L(a(o," has been removed"+(n?" in "+n:"")),L.ERR_DEPRECATED);return n&&!Jr[o]&&(Jr[o]=!0,console.warn(a(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,s):!0}};function qc(e,t,n){if(typeof e!="object")throw new L("options must be an object",L.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let a=r.length;for(;a-- >0;){const i=r[a],o=t[i];if(o){const s=e[i],c=s===void 0||o(s,i,e);if(c!==!0)throw new L("option "+i+" must be "+c,L.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new L("Unknown option "+i,L.ERR_BAD_OPTION)}}const Tn={assertOptions:qc,validators:ar},_e=Tn.validators;class Bt{constructor(t){this.defaults=t,this.interceptors={request:new Vr,response:new Vr}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=We(this.defaults,n);const{transitional:r,paramsSerializer:a,headers:i}=n;r!==void 0&&Tn.assertOptions(r,{silentJSONParsing:_e.transitional(_e.boolean),forcedJSONParsing:_e.transitional(_e.boolean),clarifyTimeoutError:_e.transitional(_e.boolean)},!1),a!=null&&(p.isFunction(a)?n.paramsSerializer={serialize:a}:Tn.assertOptions(a,{encode:_e.function,serialize:_e.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&p.merge(i.common,i[n.method]),o&&p.forEach(["delete","get","head","post","put","patch","common"],h=>{delete i[h]}),n.headers=me.concat(o,i);const s=[];let c=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(c=c&&b.synchronous,s.unshift(b.fulfilled,b.rejected))});const l=[];this.interceptors.response.forEach(function(b){l.push(b.fulfilled,b.rejected)});let u,f=0,d;if(!c){const h=[Kr.bind(this),void 0];for(h.unshift.apply(h,s),h.push.apply(h,l),d=h.length,u=Promise.resolve(n);f<d;)u=u.then(h[f++],h[f++]);return u}d=s.length;let m=n;for(f=0;f<d;){const h=s[f++],b=s[f++];try{m=h(m)}catch(_){b.call(this,_);break}}try{u=Kr.call(this,m)}catch(h){return Promise.reject(h)}for(f=0,d=l.length;f<d;)u=u.then(l[f++],l[f++]);return u}getUri(t){t=We(this.defaults,t);const n=pi(t.baseURL,t.url);return ui(n,t.params,t.paramsSerializer)}}p.forEach(["delete","get","head","options"],function(t){Bt.prototype[t]=function(n,r){return this.request(We(r||{},{method:t,url:n,data:(r||{}).data}))}});p.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,s){return this.request(We(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Bt.prototype[t]=n(),Bt.prototype[t+"Form"]=n(!0)});const Mt=Bt;class ir{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(a=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](a);r._listeners=null}),this.promise.then=a=>{let i;const o=new Promise(s=>{r.subscribe(s),i=s}).then(a);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,s){r.reason||(r.reason=new vt(i,o,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ir(function(a){t=a}),cancel:t}}}const Hc=ir;function Vc(e){return function(n){return e.apply(null,n)}}function Wc(e){return p.isObject(e)&&e.isAxiosError===!0}const In={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(In).forEach(([e,t])=>{In[t]=e});const Yc=In;function vi(e){const t=new Mt(e),n=Qa(Mt.prototype.request,t);return p.extend(n,Mt.prototype,t,{allOwnKeys:!0}),p.extend(n,t,null,{allOwnKeys:!0}),n.create=function(a){return vi(We(e,a))},n}const Y=vi(rr);Y.Axios=Mt;Y.CanceledError=vt;Y.CancelToken=Hc;Y.isCancel=mi;Y.VERSION=hi;Y.toFormData=Jt;Y.AxiosError=L;Y.Cancel=Y.CanceledError;Y.all=function(t){return Promise.all(t)};Y.spread=Vc;Y.isAxiosError=Wc;Y.mergeConfig=We;Y.AxiosHeaders=me;Y.formToJSON=e=>di(p.isHTMLForm(e)?new FormData(e):e);Y.HttpStatusCode=Yc;Y.default=Y;const or=Y,Kc=Da("loginStatus",()=>({isAuthenticated:J(!1)}));const Gc=e=>(no("data-v-9f6f0888"),e=e(),ro(),e),Jc={class:"login-container"},Xc=Gc(()=>Te("h1",{class:"login-title"},"Welcome to Fei Yang",-1)),Qc="10000000-ffff-ffff-ffff-000000000001",Zc={__name:"login-1",setup(e){const t=Kc(),n=J(null),r=mt({username:"",password:"",token:""});function a(s){console.log(s),r.token=s}function i(){console.log(JSON.stringify(r)),r.username==""||r.password==""?n.value.textContent="请将用户名和密码填写完整！":r.token==""?n.value.textContent="请通过验证！":(n.value.textContent="",or.post("/login",r).then(function(s){const{captchaValid:c,accountValid:l,token:u}=s.data;c==="true"?n.value.textContent="":n.value.textContent="验证失败，请重试",l==="true"?n.value.textContent="":n.value.textContent="账号或者密码错误，请重试",c==="true"&&l==="true"&&u?(localStorage.setItem("jwtToken",u),t.isAuthenticated="true",Ln.push("/main")):console.log("token为空！"),console.log(s)}).catch(function(s){console.log(s)}))}function o(){Ln.push("/main")}return(s,c)=>{const l=Jn,u=Xn,f=Ca,d=Gn;return re(),Me("div",Jc,[w(d,{class:"login-form",model:r},{default:A(()=>[Xc,w(u,{label:"用户名"},{default:A(()=>[w(l,{modelValue:r.username,"onUpdate:modelValue":c[0]||(c[0]=m=>r.username=m)},null,8,["modelValue"])]),_:1}),w(u,{label:"密码"},{default:A(()=>[w(l,{modelValue:r.password,"onUpdate:modelValue":c[1]||(c[1]=m=>r.password=m)},null,8,["modelValue"])]),_:1}),w(Ue(Ns),{sitekey:Qc,onVerify:a}),w(u,null,{default:A(()=>[w(f,{type:"primary",onClick:i},{default:A(()=>[$("登录")]),_:1})]),_:1}),w(u,null,{default:A(()=>[w(f,{type:"primary",onClick:o},{default:A(()=>[$("去主界面（test）")]),_:1})]),_:1}),Te("p",{ref_key:"info",ref:n,class:"warning"},null,512)]),_:1},8,["model"])])}}},el=pt(Zc,[["__scopeId","data-v-9f6f0888"]]),tl={__name:"Test",setup(e){const t=mt({name:""});return(n,r)=>{const a=Jn,i=Xn,o=Gn;return re(),Me(Qn,null,[$(" 123 "),w(o,{model:t},{default:A(()=>[w(i,{label:"Activity name"},{default:A(()=>[w(a,{modelValue:t.name,"onUpdate:modelValue":r[0]||(r[0]=s=>t.name=s)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])],64)}}},nl={class:"pagination-block"},rl={__name:"usersTable",setup(e){const t=J([]);ao(()=>{or.post("/getUsers").then(function(o){t.value=o.data,console.log(o)}).catch(function(o){console.log(o)})});const n=H(()=>(console.log(t.value.length),t.value.length)),r=J(10);Se(()=>r.value,o=>{r.value=o,console.log("newSize: "+o)});const a=J(1);Se(()=>a.value,o=>{a.value=o,console.log("newPage: "+o)});const i=H(()=>{const o=(a.value-1)*r.value,s=o+r.value;return t.value.slice(o,s)});return(o,s)=>{const c=Na,l=Pa,u=Ra;return re(),Me(Qn,null,[w(l,{data:i.value,style:{width:"100%"}},{default:A(()=>[w(c,{prop:"user_id",label:"用户ID"}),w(c,{prop:"username",label:"用户名"}),w(c,{prop:"phone_no",label:"电话号码"}),w(c,{prop:"qq_no",label:"QQ号码"})]),_:1},8,["data"]),Te("div",nl,[w(u,{layout:" sizes, prev, pager, next, jumper, total",total:n.value,"page-size":r.value,"onUpdate:pageSize":s[0]||(s[0]=f=>r.value=f),"current-page":a.value,"onUpdate:currentPage":s[1]||(s[1]=f=>a.value=f)},null,8,["total","page-size","current-page"])])],64)}}},al=[{technician_id:"1",realname:"Ruby Schmidt",nickname:"Ruby Schmidt",phone_no:"(121) 876 3922",qq_no:"S9byHlGf1d"},{technician_id:"10",realname:"Morita Rena",nickname:"Morita Rena",phone_no:"312-129-6394",qq_no:"ZKLdnz3s71"},{technician_id:"11",realname:"Kwan Sze Kwan",nickname:"Kwan Sze Kwan",phone_no:"7194 412406",qq_no:"q0B6S3C6gg"},{technician_id:"12",realname:"Yamaguchi Yuna",nickname:"Yamaguchi Yuna",phone_no:"213-309-4672",qq_no:"OwfmUrxj4Y"},{technician_id:"13",realname:"Kathy Garcia",nickname:"Kathy Garcia",phone_no:"140-3654-8943",qq_no:"XiQ8etqx6S"},{technician_id:"14",realname:"Ueno Ayato",nickname:"Ueno Ayato",phone_no:"614-944-8734",qq_no:"Ckaim8zlix"},{technician_id:"15",realname:"Sheila Griffin",nickname:"Sheila Griffin",phone_no:"74-838-7766",qq_no:"owgcIYusCH"},{technician_id:"16",realname:"Ng Cho Yee",nickname:"Ng Cho Yee",phone_no:"3-2449-8003",qq_no:"WIhV148nnE"},{technician_id:"17",realname:"Bryan Sanders",nickname:"Bryan Sanders",phone_no:"28-255-7849",qq_no:"ZmibG0UxQk"},{technician_id:"18",realname:"Shing Hok Yau",nickname:"Shing Hok Yau",phone_no:"70-5762-1348",qq_no:"OnQYZOIbam"},{technician_id:"19",realname:"Marjorie Bailey",nickname:"Marjorie Bailey",phone_no:"(1865) 12 5007",qq_no:"gb5lqevWsz"},{technician_id:"2",realname:"He Xiuying",nickname:"He Xiuying",phone_no:"80-5298-8509",qq_no:"0lxHVrKoGz"},{technician_id:"20",realname:"Okamoto Sara",nickname:"Okamoto Sara",phone_no:"330-060-8038",qq_no:"60BzBPXW8d"},{technician_id:"21",realname:"Cheng Shihan",nickname:"Cheng Shihan",phone_no:"166-8178-3373",qq_no:"eLRlW5WRzO"},{technician_id:"22",realname:"Heung Chun Yu",nickname:"Heung Chun Yu",phone_no:"20-217-2225",qq_no:"mOqqRuDPN0"},{technician_id:"23",realname:"Qin Rui",nickname:"Qin Rui",phone_no:"66-950-4680",qq_no:"JmaJ7a05tA"},{technician_id:"24",realname:"Margaret King",nickname:"Margaret King",phone_no:"(151) 735 7685",qq_no:"3pNgd92f5U"},{technician_id:"25",realname:"Yamada Airi",nickname:"Yamada Airi",phone_no:"614-401-3402",qq_no:"wV12CRwy16"},{technician_id:"26",realname:"Jose Walker",nickname:"Jose Walker",phone_no:"312-941-4100",qq_no:"VZ6cSkraMX"},{technician_id:"27",realname:"Judith Brown",nickname:"Judith Brown",phone_no:"213-850-0310",qq_no:"tpSD37D8E3"},{technician_id:"28",realname:"Louise Wagner",nickname:"Louise Wagner",phone_no:"330-857-0803",qq_no:"G6pUaxCJ0j"},{technician_id:"29",realname:"Wei Rui",nickname:"Wei Rui",phone_no:"614-938-9111",qq_no:"l0Q4XR0dAf"},{technician_id:"3",realname:"Miu Ka Ming",nickname:"Miu Ka Ming",phone_no:"74-131-2544",qq_no:"u6PaUi9kFb"},{technician_id:"30",realname:"Nicholas Tucker",nickname:"Nicholas Tucker",phone_no:"(151) 354 6718",qq_no:"9ONvpCT78v"},{technician_id:"4",realname:"Tian Anqi",nickname:"Tian Anqi",phone_no:"176-6850-7695",qq_no:"6d5lF06rdE"},{technician_id:"5",realname:"Hsuan Ka Ming",nickname:"Hsuan Ka Ming",phone_no:"28-5867-7389",qq_no:"3ovQ5v8SA8"},{technician_id:"6",realname:"Gao Anqi",nickname:"Gao Anqi",phone_no:"196-8865-1100",qq_no:"VhHLTSnMqo"},{technician_id:"7",realname:"Judith Miller",nickname:"Judith Miller",phone_no:"614-692-8390",qq_no:"YjKblpKaW5"},{technician_id:"8",realname:"Sakamoto Ayano",nickname:"Sakamoto Ayano",phone_no:"74-593-4412",qq_no:"mfek7nKMlE"},{technician_id:"9",realname:"Sara Torres",nickname:"Sara Torres",phone_no:"(121) 075 6908",qq_no:"3aUT0PtaO4"}],il=Te("p",null,"123",-1),ol={class:"dialog-footer"},sl=Te("span",null,"确定要删除该技术员信息吗？",-1),cl={class:"dialog-footer"},ll={__name:"techniciansTable",setup(e){const t=J([]);t.value=al;const n=H(()=>t.value.length),r=J(10);Se(()=>r.value,b=>{r.value=b});const a=J(1);Se(()=>a.value,b=>{a.value=b});const i=H(()=>{const b=(a.value-1)*r.value,_=b+r.value;return t.value.slice(b,_)});function o(b){console.log(JSON.stringify(b.row))}const s=J(!1);function c(b){s.value=!0,console.log(b),l.technician_id=b.row.technician_id,l.realname=b.row.realname}const l=mt({technician_id:"",realname:""});function u(){s.value=!1}const f=J(!1);var d="";function m(b){f.value=!0,d=b.row,console.log(d)}function h(){f.value=!1,or.post("/deleteTechnician",d)}return(b,_)=>{const v=Na,y=Ca,C=Pa,N=Ra,R=Jn,D=Xn,j=Gn,M=io;return re(),Me(Qn,null,[w(C,{data:i.value,style:{width:"100%"}},{default:A(()=>[w(v,{prop:"technician_id",label:"技术员编号"}),w(v,{prop:"realname",label:"真实姓名"}),w(v,{prop:"nickname",label:"昵称"}),w(v,{prop:"phone_no",label:"电话号码"}),w(v,{prop:"qq_no",label:"QQ号码"}),w(v,{fixed:"right",label:"操作"},{default:A(O=>[w(y,{link:"",type:"primary",size:"small",onClick:G=>o(O)},{default:A(()=>[$("Detail")]),_:2},1032,["onClick"]),w(y,{link:"",type:"primary",size:"small",onClick:G=>c(O)},{default:A(()=>[$("Edit")]),_:2},1032,["onClick"]),w(y,{link:"",type:"primary",size:"small",onClick:G=>m(O)},{default:A(()=>[$("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),w(N,{layout:" sizes, prev, pager, next, jumper, total",total:n.value,"page-size":r.value,"onUpdate:pageSize":_[0]||(_[0]=O=>r.value=O),"current-page":a.value,"onUpdate:currentPage":_[1]||(_[1]=O=>a.value=O)},null,8,["total","page-size","current-page"]),w(M,{modelValue:s.value,"onUpdate:modelValue":_[5]||(_[5]=O=>s.value=O),title:"修改信息",width:"50%"},{footer:A(()=>[Te("span",ol,[w(y,{onClick:_[4]||(_[4]=O=>s.value=!1)},{default:A(()=>[$("取消")]),_:1}),w(y,{type:"primary",onClick:u},{default:A(()=>[$(" 确认 ")]),_:1})])]),default:A(()=>[il,w(j,{model:l},{default:A(()=>[w(D,{label:"技术员编号"},{default:A(()=>[w(R,{modelValue:l.technician_id,"onUpdate:modelValue":_[2]||(_[2]=O=>l.technician_id=O),disabled:""},null,8,["modelValue"])]),_:1}),w(D,{label:"技术员姓名"},{default:A(()=>[w(R,{modelValue:l.realname,"onUpdate:modelValue":_[3]||(_[3]=O=>l.realname=O),disabled:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),w(M,{modelValue:f.value,"onUpdate:modelValue":_[7]||(_[7]=O=>f.value=O),title:"Tips",width:"30%"},{footer:A(()=>[Te("span",cl,[w(y,{onClick:_[6]||(_[6]=O=>f.value=!1)},{default:A(()=>[$("取消")]),_:1}),w(y,{type:"primary",onClick:h},{default:A(()=>[$(" 确认 ")]),_:1})])]),default:A(()=>[sl]),_:1},8,["modelValue"])],64)}}},gi=Da("asideWidth",()=>{const e=J("240px");function t(n){e.value=n}return{width:e,setWidth:t}});const ul={__name:"aside",setup(e){const t=gi(),n=J(!1),r=()=>{n.value=!n.value,t.width=n.value?"64px":"240px"};return(a,i)=>{const o=it("font-awesome-icon"),s=Ta,c=it("RouterLink"),l=Ia;return re(),Nt(l,{mode:"vertical","default-active":"1"},{default:A(()=>[w(s,{index:"0",onClick:r,class:"first"},be({default:A(()=>[n.value?kr("",!0):(re(),Nt(o,{key:0,icon:"fa-solid fa-circle-arrow-left",size:"lg",class:"icon"})),n.value?(re(),Nt(o,{key:1,icon:"fa-solid fa-circle-arrow-right",size:"lg",class:"icon"})):kr("",!0)]),_:2},[n.value?void 0:{name:"title",fn:A(()=>[]),key:"0"}]),1024),w(s,{index:"1"},be({default:A(()=>[w(o,{icon:"fa-solid fa-user-secret",class:"icon"})]),_:2},[n.value?void 0:{name:"title",fn:A(()=>[$("Navigator One")]),key:"0"}]),1024),w(s,{index:"2"},be({default:A(()=>[w(o,{icon:"fa-solid fa-user-secret",class:"icon"})]),_:2},[n.value?void 0:{name:"title",fn:A(()=>[$("Navigator Two")]),key:"0"}]),1024),w(c,{to:"/main/users",class:"router-a"},{default:A(()=>[w(s,{index:"3"},be({default:A(()=>[w(o,{icon:"fa-solid fa-users",size:"lg",class:"icon"})]),_:2},[n.value?void 0:{name:"title",fn:A(()=>[$("用户列表")]),key:"0"}]),1024)]),_:1}),w(c,{to:"/main/technicians",class:"router-a"},{default:A(()=>[w(s,{index:"4"},be({default:A(()=>[w(o,{icon:"fa-solid fa-users-gear",size:"lg",class:"icon"})]),_:2},[n.value?void 0:{name:"title",fn:A(()=>[$("技术员列表")]),key:"0"}]),1024)]),_:1}),w(c,{to:"/main",class:"router-a"},{default:A(()=>[w(s,{index:"6"},be({default:A(()=>[w(o,{icon:"fa-solid fa-user-secret",size:"lg",class:"icon"})]),_:2},[n.value?void 0:{name:"title",fn:A(()=>[$("/main")]),key:"0"}]),1024)]),_:1}),w(c,{to:"/login1",class:"router-a"},{default:A(()=>[w(s,{index:"7"},be({default:A(()=>[w(o,{icon:"fa-solid fa-user-secret",size:"lg",class:"icon"})]),_:2},[n.value?void 0:{name:"title",fn:A(()=>[$("退出登录")]),key:"0"}]),1024)]),_:1}),w(c,{to:"/test",class:"router-a"},{default:A(()=>[w(s,{index:"7"},be({default:A(()=>[w(o,{icon:"fa-solid fa-user-secret",size:"lg",class:"icon"})]),_:2},[n.value?void 0:{name:"title",fn:A(()=>[$("test")]),key:"0"}]),1024)]),_:1})]),_:1})}}},fl=pt(ul,[["__scopeId","data-v-144b4041"]]);const dl={__name:"header",setup(e){const t=J("-1");return(n,r)=>{const a=it("font-awesome-icon"),i=Ta,o=Ia;return re(),Nt(o,{mode:"horizontal","default-active":t.value,class:"custom-menu"},{default:A(()=>[w(i,{index:"-1",class:"logo"},{default:A(()=>[w(a,{icon:"fa-solid fa-bars",size:"lg"}),$(" ​ ")]),_:1}),w(i,{index:"0"},{default:A(()=>[$("LOGO")]),_:1}),w(i,{index:"1"},{default:A(()=>[$("系统开发中，仅为临时页面，不代表最终品质")]),_:1}),w(i,{index:"2",class:"to-right"},{default:A(()=>[$("Processing Center")]),_:1}),w(i,{index:"3"},{default:A(()=>[$("nickname")]),_:1})]),_:1},8,["default-active"])}}},ml=pt(dl,[["__scopeId","data-v-40ddda77"]]);const pl={class:"common-layout"},hl={__name:"layout",setup(e){const t=gi();console.log("aside初始"+t.width),Se(()=>t.width,r=>{n.value=r});const n=J(t.width);return(r,a)=>{const i=so,o=co,s=it("RouterView"),c=lo,l=oo;return re(),Me("div",pl,[w(l,{class:"custom-container"},{default:A(()=>[w(i,{width:n.value,class:"custom-aside"},{default:A(()=>[w(fl)]),_:1},8,["width"]),w(l,null,{default:A(()=>[w(o,{class:"custom-header"},{default:A(()=>[w(ml)]),_:1}),w(c,null,{default:A(()=>[w(s)]),_:1})]),_:1})]),_:1})])}}},vl=pt(hl,[["__scopeId","data-v-03555fe2"]]),gl=[{path:"/",redirect:"/login1"},{path:"/login1",name:"LoginPage",component:el},{path:"/main",component:vl,children:[{path:""},{path:"users",component:rl},{path:"technicians",component:ll}]},{path:"/test",component:tl}],Ln=xs({history:jo(),routes:gl});function Xr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xr(Object(n),!0).forEach(function(r){K(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xr(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ut(e){"@babel/helpers - typeof";return Ut=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ut(e)}function yl(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Qr(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function bl(e,t,n){return t&&Qr(e.prototype,t),n&&Qr(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sr(e,t){return _l(e)||xl(e,t)||yi(e,t)||Sl()}function gt(e){return wl(e)||kl(e)||yi(e)||El()}function wl(e){if(Array.isArray(e))return Mn(e)}function _l(e){if(Array.isArray(e))return e}function kl(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xl(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(c){i=!0,s=c}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function yi(e,t){if(e){if(typeof e=="string")return Mn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mn(e,t)}}function Mn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function El(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Sl(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Zr=function(){},cr={},bi={},wi=null,_i={mark:Zr,measure:Zr};try{typeof window<"u"&&(cr=window),typeof document<"u"&&(bi=document),typeof MutationObserver<"u"&&(wi=MutationObserver),typeof performance<"u"&&(_i=performance)}catch{}var Al=cr.navigator||{},ea=Al.userAgent,ta=ea===void 0?"":ea,Ae=cr,U=bi,na=wi,kt=_i;Ae.document;var ge=!!U.documentElement&&!!U.head&&typeof U.addEventListener=="function"&&typeof U.createElement=="function",ki=~ta.indexOf("MSIE")||~ta.indexOf("Trident/"),xt,Et,St,At,Ot,pe="___FONT_AWESOME___",zn=16,xi="fa",Ei="svg-inline--fa",Ie="data-fa-i2svg",Fn="data-fa-pseudo-element",Ol="data-fa-pseudo-element-pending",lr="data-prefix",ur="data-icon",ra="fontawesome-i2svg",Cl="async",Pl=["HTML","HEAD","STYLE","SCRIPT"],Si=function(){try{return!0}catch{return!1}}(),B="classic",q="sharp",fr=[B,q];function yt(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[B]}})}var ct=yt((xt={},K(xt,B,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),K(xt,q,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),xt)),lt=yt((Et={},K(Et,B,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),K(Et,q,{solid:"fass",regular:"fasr",light:"fasl"}),Et)),ut=yt((St={},K(St,B,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),K(St,q,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),St)),Rl=yt((At={},K(At,B,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),K(At,q,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),At)),Nl=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Ai="fa-layers-text",Tl=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Il=yt((Ot={},K(Ot,B,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),K(Ot,q,{900:"fass",400:"fasr",300:"fasl"}),Ot)),Oi=[1,2,3,4,5,6,7,8,9,10],Ll=Oi.concat([11,12,13,14,15,16,17,18,19,20]),Ml=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Re={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ft=new Set;Object.keys(lt[B]).map(ft.add.bind(ft));Object.keys(lt[q]).map(ft.add.bind(ft));var zl=[].concat(fr,gt(ft),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Re.GROUP,Re.SWAP_OPACITY,Re.PRIMARY,Re.SECONDARY]).concat(Oi.map(function(e){return"".concat(e,"x")})).concat(Ll.map(function(e){return"w-".concat(e)})),rt=Ae.FontAwesomeConfig||{};function Fl(e){var t=U.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Dl(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(U&&typeof U.querySelector=="function"){var jl=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];jl.forEach(function(e){var t=sr(e,2),n=t[0],r=t[1],a=Dl(Fl(n));a!=null&&(rt[r]=a)})}var Ci={styleDefault:"solid",familyDefault:"classic",cssPrefix:xi,replacementClass:Ei,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};rt.familyPrefix&&(rt.cssPrefix=rt.familyPrefix);var Ye=x(x({},Ci),rt);Ye.autoReplaceSvg||(Ye.observeMutations=!1);var S={};Object.keys(Ci).forEach(function(e){Object.defineProperty(S,e,{enumerable:!0,set:function(n){Ye[e]=n,at.forEach(function(r){return r(S)})},get:function(){return Ye[e]}})});Object.defineProperty(S,"familyPrefix",{enumerable:!0,set:function(t){Ye.cssPrefix=t,at.forEach(function(n){return n(S)})},get:function(){return Ye.cssPrefix}});Ae.FontAwesomeConfig=S;var at=[];function Bl(e){return at.push(e),function(){at.splice(at.indexOf(e),1)}}var ke=zn,se={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ul(e){if(!(!e||!ge)){var t=U.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=U.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return U.head.insertBefore(t,r),e}}var $l="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function dt(){for(var e=12,t="";e-- >0;)t+=$l[Math.random()*62|0];return t}function Ge(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function dr(e){return e.classList?Ge(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Pi(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ql(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Pi(e[n]),'" ')},"").trim()}function Zt(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function mr(e){return e.size!==se.size||e.x!==se.x||e.y!==se.y||e.rotate!==se.rotate||e.flipX||e.flipY}function Hl(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:c,path:l}}function Vl(e){var t=e.transform,n=e.width,r=n===void 0?zn:n,a=e.height,i=a===void 0?zn:a,o=e.startCentered,s=o===void 0?!1:o,c="";return s&&ki?c+="translate(".concat(t.x/ke-r/2,"em, ").concat(t.y/ke-i/2,"em) "):s?c+="translate(calc(-50% + ".concat(t.x/ke,"em), calc(-50% + ").concat(t.y/ke,"em)) "):c+="translate(".concat(t.x/ke,"em, ").concat(t.y/ke,"em) "),c+="scale(".concat(t.size/ke*(t.flipX?-1:1),", ").concat(t.size/ke*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var Wl=`:root, :host {
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
}`;function Ri(){var e=xi,t=Ei,n=S.cssPrefix,r=S.replacementClass,a=Wl;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var aa=!1;function bn(){S.autoAddCss&&!aa&&(Ul(Ri()),aa=!0)}var Yl={mixout:function(){return{dom:{css:Ri,insertCss:bn}}},hooks:function(){return{beforeDOMElementCreation:function(){bn()},beforeI2svg:function(){bn()}}}},he=Ae||{};he[pe]||(he[pe]={});he[pe].styles||(he[pe].styles={});he[pe].hooks||(he[pe].hooks={});he[pe].shims||(he[pe].shims=[]);var ne=he[pe],Ni=[],Kl=function e(){U.removeEventListener("DOMContentLoaded",e),$t=1,Ni.map(function(t){return t()})},$t=!1;ge&&($t=(U.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(U.readyState),$t||U.addEventListener("DOMContentLoaded",Kl));function Gl(e){ge&&($t?setTimeout(e,0):Ni.push(e))}function bt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Pi(e):"<".concat(t," ").concat(ql(r),">").concat(i.map(bt).join(""),"</").concat(t,">")}function ia(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Jl=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},wn=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Jl(n,a):n,c,l,u;for(r===void 0?(c=1,u=t[i[0]]):(c=0,u=r);c<o;c++)l=i[c],u=s(u,t[l],l,t);return u};function Xl(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Dn(e){var t=Xl(e);return t.length===1?t[0].toString(16):null}function Ql(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function oa(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function jn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=oa(t);typeof ne.hooks.addPack=="function"&&!a?ne.hooks.addPack(e,oa(t)):ne.styles[e]=x(x({},ne.styles[e]||{}),i),e==="fas"&&jn("fa",t)}var Ct,Pt,Rt,je=ne.styles,Zl=ne.shims,eu=(Ct={},K(Ct,B,Object.values(ut[B])),K(Ct,q,Object.values(ut[q])),Ct),pr=null,Ti={},Ii={},Li={},Mi={},zi={},tu=(Pt={},K(Pt,B,Object.keys(ct[B])),K(Pt,q,Object.keys(ct[q])),Pt);function nu(e){return~zl.indexOf(e)}function ru(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!nu(a)?a:null}var Fi=function(){var t=function(i){return wn(je,function(o,s,c){return o[c]=wn(s,i,{}),o},{})};Ti=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(c){return typeof c=="number"});s.forEach(function(c){a[c.toString(16)]=o})}return a}),Ii=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(c){return typeof c=="string"});s.forEach(function(c){a[c]=o})}return a}),zi=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(c){a[c]=o}),a});var n="far"in je||S.autoFetchSvg,r=wn(Zl,function(a,i){var o=i[0],s=i[1],c=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:c}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:c}),a},{names:{},unicodes:{}});Li=r.names,Mi=r.unicodes,pr=en(S.styleDefault,{family:S.familyDefault})};Bl(function(e){pr=en(e.styleDefault,{family:S.familyDefault})});Fi();function hr(e,t){return(Ti[e]||{})[t]}function au(e,t){return(Ii[e]||{})[t]}function Ne(e,t){return(zi[e]||{})[t]}function Di(e){return Li[e]||{prefix:null,iconName:null}}function iu(e){var t=Mi[e],n=hr("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Oe(){return pr}var vr=function(){return{prefix:null,iconName:null,rest:[]}};function en(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?B:n,a=ct[r][e],i=lt[r][e]||lt[r][a],o=e in ne.styles?e:null;return i||o||null}var sa=(Rt={},K(Rt,B,Object.keys(ut[B])),K(Rt,q,Object.keys(ut[q])),Rt);function tn(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},K(t,B,"".concat(S.cssPrefix,"-").concat(B)),K(t,q,"".concat(S.cssPrefix,"-").concat(q)),t),o=null,s=B;(e.includes(i[B])||e.some(function(l){return sa[B].includes(l)}))&&(s=B),(e.includes(i[q])||e.some(function(l){return sa[q].includes(l)}))&&(s=q);var c=e.reduce(function(l,u){var f=ru(S.cssPrefix,u);if(je[u]?(u=eu[s].includes(u)?Rl[s][u]:u,o=u,l.prefix=u):tu[s].indexOf(u)>-1?(o=u,l.prefix=en(u,{family:s})):f?l.iconName=f:u!==S.replacementClass&&u!==i[B]&&u!==i[q]&&l.rest.push(u),!a&&l.prefix&&l.iconName){var d=o==="fa"?Di(l.iconName):{},m=Ne(l.prefix,l.iconName);d.prefix&&(o=null),l.iconName=d.iconName||m||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!je.far&&je.fas&&!S.autoFetchSvg&&(l.prefix="fas")}return l},vr());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&s===q&&(je.fass||S.autoFetchSvg)&&(c.prefix="fass",c.iconName=Ne(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=Oe()||"fas"),c}var ou=function(){function e(){yl(this,e),this.definitions={}}return bl(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=x(x({},n.definitions[s]||{}),o[s]),jn(s,o[s]);var c=ut[B][s];c&&jn(c,o[s]),Fi()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,c=o.iconName,l=o.icon,u=l[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[s][f]=l)}),n[s][c]=l}),n}}]),e}(),ca=[],Be={},$e={},su=Object.keys($e);function cu(e,t){var n=t.mixoutsTo;return ca=e,Be={},Object.keys($e).forEach(function(r){su.indexOf(r)===-1&&delete $e[r]}),ca.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Ut(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Be[o]||(Be[o]=[]),Be[o].push(i[o])})}r.provides&&r.provides($e)}),n}function Bn(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Be[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Le(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Be[e]||[];a.forEach(function(i){i.apply(null,n)})}function ve(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return $e[e]?$e[e].apply(null,t):void 0}function Un(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Oe();if(t)return t=Ne(n,t)||t,ia(ji.definitions,n,t)||ia(ne.styles,n,t)}var ji=new ou,lu=function(){S.autoReplaceSvg=!1,S.observeMutations=!1,Le("noAuto")},uu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ge?(Le("beforeI2svg",t),ve("pseudoElements2svg",t),ve("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,Gl(function(){du({autoReplaceSvgRoot:n}),Le("watch",t)})}},fu={icon:function(t){if(t===null)return null;if(Ut(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ne(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=en(t[0]);return{prefix:r,iconName:Ne(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(S.cssPrefix,"-"))>-1||t.match(Nl))){var a=tn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Oe(),iconName:Ne(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Oe();return{prefix:i,iconName:Ne(i,t)||t}}}},ee={noAuto:lu,config:S,dom:uu,parse:fu,library:ji,findIconDefinition:Un,toHtml:bt},du=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?U:n;(Object.keys(ne.styles).length>0||S.autoFetchSvg)&&ge&&S.autoReplaceSvg&&ee.dom.i2svg({node:r})};function nn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return bt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(ge){var r=U.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function mu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(mr(o)&&n.found&&!r.found){var s=n.width,c=n.height,l={x:s/c/2,y:.5};a.style=Zt(x(x({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function pu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(S.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:x(x({},a),{},{id:o}),children:r}]}]}function gr(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,c=e.title,l=e.maskId,u=e.titleId,f=e.extra,d=e.watchable,m=d===void 0?!1:d,h=r.found?r:n,b=h.width,_=h.height,v=a==="fak",y=[S.replacementClass,i?"".concat(S.cssPrefix,"-").concat(i):""].filter(function(O){return f.classes.indexOf(O)===-1}).filter(function(O){return O!==""||!!O}).concat(f.classes).join(" "),C={children:[],attributes:x(x({},f.attributes),{},{"data-prefix":a,"data-icon":i,class:y,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(_)})},N=v&&!~f.classes.indexOf("fa-fw")?{width:"".concat(b/_*16*.0625,"em")}:{};m&&(C.attributes[Ie]=""),c&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(u||dt())},children:[c]}),delete C.attributes.title);var R=x(x({},C),{},{prefix:a,iconName:i,main:n,mask:r,maskId:l,transform:o,symbol:s,styles:x(x({},N),f.styles)}),D=r.found&&n.found?ve("generateAbstractMask",R)||{children:[],attributes:{}}:ve("generateAbstractIcon",R)||{children:[],attributes:{}},j=D.children,M=D.attributes;return R.children=j,R.attributes=M,s?pu(R):mu(R)}function la(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,c=s===void 0?!1:s,l=x(x(x({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});c&&(l[Ie]="");var u=x({},o.styles);mr(a)&&(u.transform=Vl({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=Zt(u);f.length>0&&(l.style=f);var d=[];return d.push({tag:"span",attributes:l,children:[t]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function hu(e){var t=e.content,n=e.title,r=e.extra,a=x(x(x({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Zt(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var _n=ne.styles;function $n(e){var t=e[0],n=e[1],r=e.slice(4),a=sr(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(S.cssPrefix,"-").concat(Re.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(Re.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(Re.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var vu={found:!1,width:512,height:512};function gu(e,t){!Si&&!S.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function qn(e,t){var n=t;return t==="fa"&&S.styleDefault!==null&&(t=Oe()),new Promise(function(r,a){if(ve("missingIconAbstract"),n==="fa"){var i=Di(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&_n[t]&&_n[t][e]){var o=_n[t][e];return r($n(o))}gu(e,t),r(x(x({},vu),{},{icon:S.showMissingIcons&&e?ve("missingIconAbstract")||{}:{}}))})}var ua=function(){},Hn=S.measurePerformance&&kt&&kt.mark&&kt.measure?kt:{mark:ua,measure:ua},Ze='FA "6.4.0"',yu=function(t){return Hn.mark("".concat(Ze," ").concat(t," begins")),function(){return Bi(t)}},Bi=function(t){Hn.mark("".concat(Ze," ").concat(t," ends")),Hn.measure("".concat(Ze," ").concat(t),"".concat(Ze," ").concat(t," begins"),"".concat(Ze," ").concat(t," ends"))},yr={begin:yu,end:Bi},zt=function(){};function fa(e){var t=e.getAttribute?e.getAttribute(Ie):null;return typeof t=="string"}function bu(e){var t=e.getAttribute?e.getAttribute(lr):null,n=e.getAttribute?e.getAttribute(ur):null;return t&&n}function wu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(S.replacementClass)}function _u(){if(S.autoReplaceSvg===!0)return Ft.replace;var e=Ft[S.autoReplaceSvg];return e||Ft.replace}function ku(e){return U.createElementNS("http://www.w3.org/2000/svg",e)}function xu(e){return U.createElement(e)}function Ui(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?ku:xu:n;if(typeof e=="string")return U.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Ui(o,{ceFn:r}))}),a}function Eu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ft={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Ui(a),n)}),n.getAttribute(Ie)===null&&S.keepOriginalSource){var r=U.createComment(Eu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~dr(n).indexOf(S.replacementClass))return Ft.replace(t);var a=new RegExp("".concat(S.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,c){return c===S.replacementClass||c.match(a)?s.toSvg.push(c):s.toNode.push(c),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return bt(s)}).join(`
`);n.setAttribute(Ie,""),n.innerHTML=o}};function da(e){e()}function $i(e,t){var n=typeof t=="function"?t:zt;if(e.length===0)n();else{var r=da;S.mutateApproach===Cl&&(r=Ae.requestAnimationFrame||da),r(function(){var a=_u(),i=yr.begin("mutate");e.map(a),i(),n()})}}var br=!1;function qi(){br=!0}function Vn(){br=!1}var qt=null;function ma(e){if(na&&S.observeMutations){var t=e.treeCallback,n=t===void 0?zt:t,r=e.nodeCallback,a=r===void 0?zt:r,i=e.pseudoElementsCallback,o=i===void 0?zt:i,s=e.observeMutationsRoot,c=s===void 0?U:s;qt=new na(function(l){if(!br){var u=Oe();Ge(l).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!fa(f.addedNodes[0])&&(S.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&S.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&fa(f.target)&&~Ml.indexOf(f.attributeName))if(f.attributeName==="class"&&bu(f.target)){var d=tn(dr(f.target)),m=d.prefix,h=d.iconName;f.target.setAttribute(lr,m||u),h&&f.target.setAttribute(ur,h)}else wu(f.target)&&a(f.target)})}}),ge&&qt.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Su(){qt&&qt.disconnect()}function Au(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Ou(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=tn(dr(e));return a.prefix||(a.prefix=Oe()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=au(a.prefix,e.innerText)||hr(a.prefix,Dn(e.innerText))),!a.iconName&&S.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Cu(e){var t=Ge(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return S.autoA11y&&(n?t["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(r||dt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Pu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:se,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function pa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ou(e),r=n.iconName,a=n.prefix,i=n.rest,o=Cu(e),s=Bn("parseNodeAttributes",{},e),c=t.styleParser?Au(e):[];return x({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:se,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},s)}var Ru=ne.styles;function Hi(e){var t=S.autoReplaceSvg==="nest"?pa(e,{styleParser:!1}):pa(e);return~t.extra.classes.indexOf(Ai)?ve("generateLayersText",e,t):ve("generateSvgReplacementMutation",e,t)}var Ce=new Set;fr.map(function(e){Ce.add("fa-".concat(e))});Object.keys(ct[B]).map(Ce.add.bind(Ce));Object.keys(ct[q]).map(Ce.add.bind(Ce));Ce=gt(Ce);function ha(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ge)return Promise.resolve();var n=U.documentElement.classList,r=function(f){return n.add("".concat(ra,"-").concat(f))},a=function(f){return n.remove("".concat(ra,"-").concat(f))},i=S.autoFetchSvg?Ce:fr.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Ru));i.includes("fa")||i.push("fa");var o=[".".concat(Ai,":not([").concat(Ie,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Ie,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ge(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var c=yr.begin("onTree"),l=s.reduce(function(u,f){try{var d=Hi(f);d&&u.push(d)}catch(m){Si||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise(function(u,f){Promise.all(l).then(function(d){$i(d,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),c(),u()})}).catch(function(d){c(),f(d)})})}function Nu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Hi(e).then(function(n){n&&$i([n],t)})}function Tu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Un(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Un(a||{})),e(r,x(x({},n),{},{mask:a}))}}var Iu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?se:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,c=s===void 0?null:s,l=n.maskId,u=l===void 0?null:l,f=n.title,d=f===void 0?null:f,m=n.titleId,h=m===void 0?null:m,b=n.classes,_=b===void 0?[]:b,v=n.attributes,y=v===void 0?{}:v,C=n.styles,N=C===void 0?{}:C;if(t){var R=t.prefix,D=t.iconName,j=t.icon;return nn(x({type:"icon"},t),function(){return Le("beforeDOMElementCreation",{iconDefinition:t,params:n}),S.autoA11y&&(d?y["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(h||dt()):(y["aria-hidden"]="true",y.focusable="false")),gr({icons:{main:$n(j),mask:c?$n(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:R,iconName:D,transform:x(x({},se),a),symbol:o,title:d,maskId:u,titleId:h,extra:{attributes:y,styles:N,classes:_}})})}},Lu={mixout:function(){return{icon:Tu(Iu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ha,n.nodeCallback=Nu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?U:r,i=n.callback,o=i===void 0?function(){}:i;return ha(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,c=r.transform,l=r.symbol,u=r.mask,f=r.maskId,d=r.extra;return new Promise(function(m,h){Promise.all([qn(a,s),u.iconName?qn(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(b){var _=sr(b,2),v=_[0],y=_[1];m([n,gr({icons:{main:v,mask:y},prefix:s,iconName:a,transform:c,symbol:l,maskId:f,title:i,titleId:o,extra:d,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,c=Zt(s);c.length>0&&(a.style=c);var l;return mr(o)&&(l=ve("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(l||i.icon),{children:r,attributes:a}}}},Mu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return nn({type:"layer"},function(){Le("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(c){o=o.concat(c.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(S.cssPrefix,"-layers")].concat(gt(i)).join(" ")},children:o}]})}}}},zu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,c=r.attributes,l=c===void 0?{}:c,u=r.styles,f=u===void 0?{}:u;return nn({type:"counter",content:n},function(){return Le("beforeDOMElementCreation",{content:n,params:r}),hu({content:n.toString(),title:i,extra:{attributes:l,styles:f,classes:["".concat(S.cssPrefix,"-layers-counter")].concat(gt(s))}})})}}}},Fu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?se:a,o=r.title,s=o===void 0?null:o,c=r.classes,l=c===void 0?[]:c,u=r.attributes,f=u===void 0?{}:u,d=r.styles,m=d===void 0?{}:d;return nn({type:"text",content:n},function(){return Le("beforeDOMElementCreation",{content:n,params:r}),la({content:n,transform:x(x({},se),i),title:s,extra:{attributes:f,styles:m,classes:["".concat(S.cssPrefix,"-layers-text")].concat(gt(l))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,c=null;if(ki){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/l,c=u.height/l}return S.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,la({content:n.innerHTML,width:s,height:c,transform:i,title:a,extra:o,watchable:!0})])}}},Du=new RegExp('"',"ug"),va=[1105920,1112319];function ju(e){var t=e.replace(Du,""),n=Ql(t,0),r=n>=va[0]&&n<=va[1],a=t.length===2?t[0]===t[1]:!1;return{value:Dn(a?t[0]:t),isSecondary:r||a}}function ga(e,t){var n="".concat(Ol).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ge(e.children),o=i.filter(function(j){return j.getAttribute(Fn)===t})[0],s=Ae.getComputedStyle(e,t),c=s.getPropertyValue("font-family").match(Tl),l=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!c)return e.removeChild(o),r();if(c&&u!=="none"&&u!==""){var f=s.getPropertyValue("content"),d=~["Sharp"].indexOf(c[2])?q:B,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?lt[d][c[2].toLowerCase()]:Il[d][l],h=ju(f),b=h.value,_=h.isSecondary,v=c[0].startsWith("FontAwesome"),y=hr(m,b),C=y;if(v){var N=iu(b);N.iconName&&N.prefix&&(y=N.iconName,m=N.prefix)}if(y&&!_&&(!o||o.getAttribute(lr)!==m||o.getAttribute(ur)!==C)){e.setAttribute(n,C),o&&e.removeChild(o);var R=Pu(),D=R.extra;D.attributes[Fn]=t,qn(y,m).then(function(j){var M=gr(x(x({},R),{},{icons:{main:j,mask:vr()},prefix:m,iconName:C,extra:D,watchable:!0})),O=U.createElement("svg");t==="::before"?e.insertBefore(O,e.firstChild):e.appendChild(O),O.outerHTML=M.map(function(G){return bt(G)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Bu(e){return Promise.all([ga(e,"::before"),ga(e,"::after")])}function Uu(e){return e.parentNode!==document.head&&!~Pl.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Fn)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ya(e){if(ge)return new Promise(function(t,n){var r=Ge(e.querySelectorAll("*")).filter(Uu).map(Bu),a=yr.begin("searchPseudoElements");qi(),Promise.all(r).then(function(){a(),Vn(),t()}).catch(function(){a(),Vn(),n()})})}var $u={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ya,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?U:r;S.searchPseudoElements&&ya(a)}}},ba=!1,qu={mixout:function(){return{dom:{unwatch:function(){qi(),ba=!0}}}},hooks:function(){return{bootstrap:function(){ma(Bn("mutationObserverCallbacks",{}))},noAuto:function(){Su()},watch:function(n){var r=n.observeMutationsRoot;ba?Vn():ma(Bn("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},wa=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Hu={mixout:function(){return{parse:{transform:function(n){return wa(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=wa(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(a.x*32,", ").concat(a.y*32,") "),l="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(c," ").concat(l," ").concat(u)},d={transform:"translate(".concat(o/2*-1," -256)")},m={outer:s,inner:f,path:d};return{tag:"g",attributes:x({},m.outer),children:[{tag:"g",attributes:x({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:x(x({},r.icon.attributes),m.path)}]}]}}}},kn={x:0,y:0,width:"100%",height:"100%"};function _a(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Vu(e){return e.tag==="g"?e.children:[e]}var Wu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?tn(a.split(" ").map(function(o){return o.trim()})):vr();return i.prefix||(i.prefix=Oe()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,c=n.transform,l=i.width,u=i.icon,f=o.width,d=o.icon,m=Hl({transform:c,containerWidth:f,iconWidth:l}),h={tag:"rect",attributes:x(x({},kn),{},{fill:"white"})},b=u.children?{children:u.children.map(_a)}:{},_={tag:"g",attributes:x({},m.inner),children:[_a(x({tag:u.tag,attributes:x(x({},u.attributes),m.path)},b))]},v={tag:"g",attributes:x({},m.outer),children:[_]},y="mask-".concat(s||dt()),C="clip-".concat(s||dt()),N={tag:"mask",attributes:x(x({},kn),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,v]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:Vu(d)},N]};return r.push(R,{tag:"rect",attributes:x({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(y,")")},kn)}),{children:r,attributes:a}}}},Yu={provides:function(t){var n=!1;Ae.matchMedia&&(n=Ae.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:x(x({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=x(x({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:x(x({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:x(x({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:x(x({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:x(x({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:x(x({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:x(x({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:x(x({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Ku={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Gu=[Yl,Lu,Mu,zu,Fu,$u,qu,Hu,Wu,Yu,Ku];cu(Gu,{mixoutsTo:ee});ee.noAuto;ee.config;var Ju=ee.library;ee.dom;var Wn=ee.parse;ee.findIconDefinition;ee.toHtml;var Xu=ee.icon;ee.layer;ee.text;ee.counter;function ka(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ka(Object(n),!0).forEach(function(r){Z(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ka(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ht(e){"@babel/helpers - typeof";return Ht=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ht(e)}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Qu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Zu(e,t){if(e==null)return{};var n=Qu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var ef=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Vi={exports:{}};(function(e){(function(t){var n=function(v,y,C){if(!l(y)||f(y)||d(y)||m(y)||c(y))return y;var N,R=0,D=0;if(u(y))for(N=[],D=y.length;R<D;R++)N.push(n(v,y[R],C));else{N={};for(var j in y)Object.prototype.hasOwnProperty.call(y,j)&&(N[v(j,C)]=n(v,y[j],C))}return N},r=function(v,y){y=y||{};var C=y.separator||"_",N=y.split||/(?=[A-Z])/;return v.split(N).join(C)},a=function(v){return h(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(y,C){return C?C.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var y=a(v);return y.substr(0,1).toUpperCase()+y.substr(1)},o=function(v,y){return r(v,y).toLowerCase()},s=Object.prototype.toString,c=function(v){return typeof v=="function"},l=function(v){return v===Object(v)},u=function(v){return s.call(v)=="[object Array]"},f=function(v){return s.call(v)=="[object Date]"},d=function(v){return s.call(v)=="[object RegExp]"},m=function(v){return s.call(v)=="[object Boolean]"},h=function(v){return v=v-0,v===v},b=function(v,y){var C=y&&"process"in y?y.process:y;return typeof C!="function"?v:function(N,R){return C(N,v,R)}},_={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,y){return n(b(a,y),v)},decamelizeKeys:function(v,y){return n(b(o,y),v,y)},pascalizeKeys:function(v,y){return n(b(i,y),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=_:t.humps=_})(ef)})(Vi);var tf=Vi.exports,nf=["class","style"];function rf(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=tf.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function af(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Wi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(c){return Wi(c)}),a=Object.keys(e.attributes||{}).reduce(function(c,l){var u=e.attributes[l];switch(l){case"class":c.class=af(u);break;case"style":c.style=rf(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Zu(n,nf);return Kn(e.tag,de(de(de({},t),{},{class:a.class,style:de(de({},a.style),o)},a.attrs),s),r)}var Yi=!1;try{Yi=!0}catch{}function of(){if(!Yi&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function xn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Z({},e,t):{}}function sf(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Z(t,"fa-".concat(e.size),e.size!==null),Z(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),Z(t,"fa-pull-".concat(e.pull),e.pull!==null),Z(t,"fa-swap-opacity",e.swapOpacity),Z(t,"fa-bounce",e.bounce),Z(t,"fa-shake",e.shake),Z(t,"fa-beat",e.beat),Z(t,"fa-fade",e.fade),Z(t,"fa-beat-fade",e.beatFade),Z(t,"fa-flash",e.flash),Z(t,"fa-spin-pulse",e.spinPulse),Z(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function xa(e){if(e&&Ht(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Wn.icon)return Wn.icon(e);if(e===null)return null;if(Ht(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var cf=Yn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=H(function(){return xa(t.icon)}),i=H(function(){return xn("classes",sf(t))}),o=H(function(){return xn("transform",typeof t.transform=="string"?Wn.transform(t.transform):t.transform)}),s=H(function(){return xn("mask",xa(t.mask))}),c=H(function(){return Xu(a.value,de(de(de(de({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Se(c,function(u){if(!u)return of("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var l=H(function(){return c.value?Wi(c.value.abstract[0],{},r):null});return function(){return l.value}}}),lf={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},uf={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"]},ff={prefix:"fas",iconName:"circle-arrow-left",icon:[512,512,["arrow-circle-left"],"f0a8","M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM231 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71L376 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-182.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L119 273c-9.4-9.4-9.4-24.6 0-33.9L231 127z"]},df={prefix:"fas",iconName:"circle-arrow-right",icon:[512,512,["arrow-circle-right"],"f0a9","M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z"]},mf={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},pf={prefix:"fas",iconName:"users-gear",icon:[640,512,["users-cog"],"f509","M144 160A80 80 0 1 0 144 0a80 80 0 1 0 0 160zm368 0A80 80 0 1 0 512 0a80 80 0 1 0 0 160zM0 298.7C0 310.4 9.6 320 21.3 320H234.7c.2 0 .4 0 .7 0c-26.6-23.5-43.3-57.8-43.3-96c0-7.6 .7-15 1.9-22.3c-13.6-6.3-28.7-9.7-44.6-9.7H106.7C47.8 192 0 239.8 0 298.7zM320 320c24 0 45.9-8.8 62.7-23.3c2.5-3.7 5.2-7.3 8-10.7c2.7-3.3 5.7-6.1 9-8.3C410 262.3 416 243.9 416 224c0-53-43-96-96-96s-96 43-96 96s43 96 96 96zm65.4 60.2c-10.3-5.9-18.1-16.2-20.8-28.2H261.3C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7H455.2c-2.1-5.2-3.2-10.9-3.2-16.4v-3c-1.3-.7-2.7-1.5-4-2.3l-2.6 1.5c-16.8 9.7-40.5 8-54.7-9.7c-4.5-5.6-8.6-11.5-12.4-17.6l-.1-.2-.1-.2-2.4-4.1-.1-.2-.1-.2c-3.4-6.2-6.4-12.6-9-19.3c-8.2-21.2 2.2-42.6 19-52.3l2.7-1.5c0-.8 0-1.5 0-2.3s0-1.5 0-2.3l-2.7-1.5zM533.3 192H490.7c-15.9 0-31 3.5-44.6 9.7c1.3 7.2 1.9 14.7 1.9 22.3c0 17.4-3.5 33.9-9.7 49c2.5 .9 4.9 2 7.1 3.3l2.6 1.5c1.3-.8 2.6-1.6 4-2.3v-3c0-19.4 13.3-39.1 35.8-42.6c7.9-1.2 16-1.9 24.2-1.9s16.3 .6 24.2 1.9c22.5 3.5 35.8 23.2 35.8 42.6v3c1.3 .7 2.7 1.5 4 2.3l2.6-1.5c16.8-9.7 40.5-8 54.7 9.7c2.3 2.8 4.5 5.8 6.6 8.7c-2.1-57.1-49-102.7-106.6-102.7zm91.3 163.9c6.3-3.6 9.5-11.1 6.8-18c-2.1-5.5-4.6-10.8-7.4-15.9l-2.3-4c-3.1-5.1-6.5-9.9-10.2-14.5c-4.6-5.7-12.7-6.7-19-3L574.4 311c-8.9-7.6-19.1-13.6-30.4-17.6v-21c0-7.3-4.9-13.8-12.1-14.9c-6.5-1-13.1-1.5-19.9-1.5s-13.4 .5-19.9 1.5c-7.2 1.1-12.1 7.6-12.1 14.9v21c-11.2 4-21.5 10-30.4 17.6l-18.2-10.5c-6.3-3.6-14.4-2.6-19 3c-3.7 4.6-7.1 9.5-10.2 14.6l-2.3 3.9c-2.8 5.1-5.3 10.4-7.4 15.9c-2.6 6.8 .5 14.3 6.8 17.9l18.2 10.5c-1 5.7-1.6 11.6-1.6 17.6s.6 11.9 1.6 17.5l-18.2 10.5c-6.3 3.6-9.5 11.1-6.8 17.9c2.1 5.5 4.6 10.7 7.4 15.8l2.4 4.1c3 5.1 6.4 9.9 10.1 14.5c4.6 5.7 12.7 6.7 19 3L449.6 457c8.9 7.6 19.2 13.6 30.4 17.6v21c0 7.3 4.9 13.8 12.1 14.9c6.5 1 13.1 1.5 19.9 1.5s13.4-.5 19.9-1.5c7.2-1.1 12.1-7.6 12.1-14.9v-21c11.2-4 21.5-10 30.4-17.6l18.2 10.5c6.3 3.6 14.4 2.6 19-3c3.7-4.6 7.1-9.4 10.1-14.5l2.4-4.2c2.8-5.1 5.3-10.3 7.4-15.8c2.6-6.8-.5-14.3-6.8-17.9l-18.2-10.5c1-5.7 1.6-11.6 1.6-17.5s-.6-11.9-1.6-17.6l18.2-10.5zM472 384a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z"]},hf={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};Ju.add(mf,hf,lf,ff,df,uf,pf);const rn=uo(_o),vf=mo();rn.use(Ln);rn.use(vf);rn.component("font-awesome-icon",cf);rn.mount("#app");
