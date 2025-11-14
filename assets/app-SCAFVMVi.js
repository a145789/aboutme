const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/_id_-6Qp2R2Pu.js","assets/_id_-BtHzYGCi.css"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(t,n={},r){for(let i in t){let a=t[i],o=r?`${r}:${i}`:i;typeof a==`object`&&a?e(a,n,o):typeof a==`function`&&(n[o]=a)}return n}var t={run:e=>e()},n=console.createTask===void 0?()=>t:console.createTask;function r(e,t){let r=n(t.shift());return e.reduce((e,n)=>e.then(()=>r.run(()=>n(...t))),Promise.resolve())}function i(e,t){let r=n(t.shift());return Promise.all(e.map(e=>r.run(()=>e(...t))))}function a(e,t){for(let n of[...e])n(t)}var o=class{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,t,n={}){if(!e||typeof t!=`function`)return()=>{};let r=e,i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!n.allowDeprecated){let e=i.message;e||=`${r} hook has been deprecated`+(i.to?`, please use ${i.to}`:``),this._deprecatedMessages||=new Set,this._deprecatedMessages.has(e)||(console.warn(e),this._deprecatedMessages.add(e))}if(!t.name)try{Object.defineProperty(t,`name`,{get:()=>`_`+e.replace(/\W+/g,`_`)+`_hook_cb`,configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(t),()=>{t&&=(this.removeHook(e,t),void 0)}}hookOnce(e,t){let n,r=(...e)=>(typeof n==`function`&&n(),n=void 0,r=void 0,t(...e));return n=this.hook(e,r),n}removeHook(e,t){if(this._hooks[e]){let n=this._hooks[e].indexOf(t);n!==-1&&this._hooks[e].splice(n,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,t){this._deprecatedHooks[e]=typeof t==`string`?{to:t}:t;let n=this._hooks[e]||[];delete this._hooks[e];for(let t of n)this.hook(e,t)}deprecateHooks(e){for(let t in Object.assign(this._deprecatedHooks,e),e)this.deprecateHook(t,e[t])}addHooks(t){let n=e(t),r=Object.keys(n).map(e=>this.hook(e,n[e]));return()=>{for(let e of r.splice(0,r.length))e()}}removeHooks(t){let n=e(t);for(let e in n)this.removeHook(e,n[e])}removeAllHooks(){for(let e in this._hooks)delete this._hooks[e]}callHook(e,...t){return t.unshift(e),this.callHookWith(r,e,...t)}callHookParallel(e,...t){return t.unshift(e),this.callHookWith(i,e,...t)}callHookWith(e,t,...n){let r=this._before||this._after?{name:t,args:n,context:{}}:void 0;this._before&&a(this._before,r);let i=e(t in this._hooks?[...this._hooks[t]]:[],n);return i instanceof Promise?i.finally(()=>{this._after&&r&&a(this._after,r)}):(this._after&&r&&a(this._after,r),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){let t=this._before.indexOf(e);t!==-1&&this._before.splice(t,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){let t=this._after.indexOf(e);t!==-1&&this._after.splice(t,1)}}}};function s(){return new o}var c=new Set([`link`,`style`,`script`,`noscript`]),l=new Set([`title`,`titleTemplate`,`script`,`style`,`noscript`]),u=new Set([`base`,`meta`,`link`,`style`,`script`,`noscript`]),d=new Set([`title`,`base`,`htmlAttrs`,`bodyAttrs`,`meta`,`link`,`style`,`script`,`noscript`]),f=new Set([`base`,`title`,`titleTemplate`,`bodyAttrs`,`htmlAttrs`,`templateParams`]),p=new Set([`key`,`tagPosition`,`tagPriority`,`tagDuplicateStrategy`,`innerHTML`,`textContent`,`processTemplateParams`]),m=new Set([`templateParams`,`htmlAttrs`,`bodyAttrs`]),h=new Set([`theme-color`,`google-site-verification`,`og`,`article`,`book`,`profile`,`twitter`,`author`]),g=[`name`,`property`,`http-equiv`],_=new Set([`viewport`,`description`,`keywords`,`robots`]);function v(e){let t=e.split(`:`);return t.length?h.has(t[1]):!1}function y(e){let{props:t,tag:n}=e;if(f.has(n))return n;if(n===`link`&&t.rel===`canonical`)return`canonical`;if(t.charset)return`charset`;if(e.tag===`meta`){for(let r of g)if(t[r]!==void 0){let i=t[r],a=i.includes(`:`),o=_.has(i);return`${n}:${i}${!(a||o)&&e.key?`:key:${e.key}`:``}`}}if(e.key)return`${n}:key:${e.key}`;if(t.id)return`${n}:id:${t.id}`;if(l.has(n)){let t=e.textContent||e.innerHTML;if(t)return`${n}:content:${t}`}}function b(e){return e._h||e._d||e.textContent||e.innerHTML||`${e.tag}:${Object.entries(e.props).map(([e,t])=>`${e}:${String(t)}`).join(`,`)}`}function x(e,t,n){typeof e==`function`&&(!n||n!==`titleTemplate`&&!(n[0]===`o`&&n[1]===`n`))&&(e=e());let r;if(t&&(r=t(n,e)),Array.isArray(r))return r.map(e=>x(e,t));if(r?.constructor===Object){let e={};for(let n of Object.keys(r))e[n]=x(r[n],t,n);return e}return r}function S(e,t){let n=e===`style`?new Map:new Set;function r(t){let r=t.trim();if(r)if(e===`style`){let[e,...t]=r.split(`:`).map(e=>e.trim());e&&t.length&&n.set(e,t.join(`:`))}else r.split(` `).filter(Boolean).forEach(e=>n.add(e))}return typeof t==`string`?e===`style`?t.split(`;`).forEach(r):r(t):Array.isArray(t)?t.forEach(e=>r(e)):t&&typeof t==`object`&&Object.entries(t).forEach(([t,i])=>{i&&i!==`false`&&(e===`style`?n.set(t.trim(),i):r(t))}),n}function C(e,t){return e.props=e.props||{},t?e.tag===`templateParams`?(e.props=t,e):(Object.entries(t).forEach(([n,r])=>{if(r===null){e.props[n]=null;return}if(n===`class`||n===`style`){e.props[n]=S(n,r);return}if(p.has(n)){if([`textContent`,`innerHTML`].includes(n)&&typeof r==`object`){let i=t.type;if(t.type||(i=`application/json`),!i?.endsWith(`json`)&&i!==`speculationrules`)return;t.type=i,e.props.type=i,e[n]=JSON.stringify(r)}else e[n]=r;return}let i=String(r),a=n.startsWith(`data-`);i===`true`||i===``?e.props[n]=a?i:!0:!r&&a&&i===`false`?e.props[n]=`false`:r!==void 0&&(e.props[n]=r)}),e):e}function ee(e,t){let n=C({tag:e,props:{}},typeof t==`object`&&typeof t!=`function`?t:{[e===`script`||e===`noscript`||e===`style`?`innerHTML`:`textContent`]:t});return n.key&&c.has(n.tag)&&(n.props[`data-hid`]=n._h=n.key),n.tag===`script`&&typeof n.innerHTML==`object`&&(n.innerHTML=JSON.stringify(n.innerHTML),n.props.type=n.props.type||`application/json`),Array.isArray(n.props.content)?n.props.content.map(e=>({...n,props:{...n.props,content:e}})):n}function te(e,t){if(!e)return[];typeof e==`function`&&(e=e());let n=(e,n)=>{for(let r=0;r<t.length;r++)n=t[r](e,n);return n};e=n(void 0,e);let r=[];return e=x(e,n),Object.entries(e||{}).forEach(([e,t])=>{if(t!==void 0)for(let n of Array.isArray(t)?t:[t])r.push(ee(e,n))}),r.flat()}var w=(e,t)=>e._w===t._w?e._p-t._p:e._w-t._w,T={base:-10,title:10},ne={critical:-8,high:-1,low:2},re={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},ie=/@import/,E=e=>e===``||e===!0;function ae(e,t){if(typeof t.tagPriority==`number`)return t.tagPriority;let n=100,r=ne[t.tagPriority]||0,i=e.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:re;if(t.tag in T)n=T[t.tag];else if(t.tag===`meta`){let e=t.props[`http-equiv`]===`content-security-policy`?`content-security-policy`:t.props.charset?`charset`:t.props.name===`viewport`?`viewport`:null;e&&(n=re.meta[e])}else t.tag===`link`&&t.props.rel?n=i.link[t.props.rel]:t.tag===`script`?E(t.props.async)?n=i.script.async:t.props.src&&!E(t.props.defer)&&!E(t.props.async)&&t.props.type!==`module`&&!t.props.type?.endsWith(`json`)?n=i.script.sync:E(t.props.defer)&&t.props.src&&!E(t.props.async)&&(n=i.script.defer):t.tag===`style`&&(n=t.innerHTML&&ie.test(t.innerHTML)?i.style.imported:i.style.sync);return(n||100)+r}function oe(e,t){let n=typeof t==`function`?t(e):t,r=n.key||String(e.plugins.size+1);e.plugins.get(r)||(e.plugins.set(r,n),e.hooks.addHooks(n.hooks||{}))}function se(e={}){let t=s();t.addHooks(e.hooks||{});let n=!e.document,r=new Map,i=new Map,a=new Set,o={_entryCount:1,plugins:i,dirty:!1,resolvedOptions:e,hooks:t,ssr:n,entries:r,headEntries(){return[...r.values()]},use:e=>oe(o,e),push(e,i){let s={...i||{}};delete s.head;let c=s._index??o._entryCount++,l={_i:c,input:e,options:s},u={_poll(e=!1){o.dirty=!0,!e&&a.add(c),t.callHook(`entries:updated`,o)},dispose(){r.delete(c)&&o.invalidate()},patch(e){(!s.mode||s.mode===`server`&&n||s.mode===`client`&&!n)&&(l.input=e,r.set(c,l),u._poll())}};return u.patch(e),u},async resolveTags(){let n={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await t.callHook(`entries:resolve`,n);a.size;){let n=a.values().next().value;a.delete(n);let i=r.get(n);if(i){let n={tags:te(i.input,e.propResolvers||[]).map(e=>Object.assign(e,i.options)),entry:i};await t.callHook(`entries:normalize`,n),i._tags=n.tags.map((e,t)=>(e._w=ae(o,e),e._p=(i._i<<10)+t,e._d=y(e),e))}}let i=!1;n.entries.flatMap(e=>(e._tags||[]).map(e=>({...e,props:{...e.props}}))).sort(w).reduce((e,t)=>{let n=String(t._d||t._p);if(!e.has(n))return e.set(n,t);let r=e.get(n);if((t?.tagDuplicateStrategy||(m.has(t.tag)?`merge`:null)||(t.key&&t.key===r.key?`merge`:null))===`merge`){let i={...r.props};Object.entries(t.props).forEach(([e,t])=>i[e]=e===`style`?new Map([...r.props.style||new Map,...t]):e===`class`?new Set([...r.props.class||new Set,...t]):t),e.set(n,{...t,props:i})}else t._p>>10==r._p>>10&&t.tag===`meta`&&v(n)?(e.set(n,Object.assign([...Array.isArray(r)?r:[r],t],t)),i=!0):(t._w===r._w?t._p>r._p:t?._w<r?._w)&&e.set(n,t);return e},n.tagMap);let s=n.tagMap.get(`title`),c=n.tagMap.get(`titleTemplate`);if(o._title=s?.textContent,c){let e=c?.textContent;if(o._titleTemplate=e,e){let t=typeof e==`function`?e(s?.textContent):e;typeof t==`string`&&!o.plugins.has(`template-params`)&&(t=t.replace(`%s`,s?.textContent||``)),s?t===null?n.tagMap.delete(`title`):n.tagMap.set(`title`,{...s,textContent:t}):(c.tag=`title`,c.textContent=t)}}n.tags=Array.from(n.tagMap.values()),i&&(n.tags=n.tags.flat().sort(w)),await t.callHook(`tags:beforeResolve`,n),await t.callHook(`tags:resolve`,n),await t.callHook(`tags:afterResolve`,n);let l=[];for(let e of n.tags){let{innerHTML:t,tag:n,props:r}=e;d.has(n)&&(Object.keys(r).length===0&&!e.innerHTML&&!e.textContent||n===`meta`&&!r.content&&!r[`http-equiv`]&&!r.charset||(n===`script`&&t&&(r.type?.endsWith(`json`)?e.innerHTML=(typeof t==`string`?t:JSON.stringify(t)).replace(/</g,`\\u003C`):typeof t==`string`&&(e.innerHTML=t.replace(RegExp(`</${n}`,`g`),`<\\/${n}`)),e._d=y(e)),l.push(e)))}return l},invalidate(){for(let e of r.values())a.add(e._i);o.dirty=!0,t.callHook(`entries:updated`,o)}};return(e?.plugins||[]).forEach(e=>oe(o,e)),o.hooks.callHook(`init`,o),e.init?.forEach(e=>e&&o.push(e)),o}async function ce(e,t={}){let n=t.document||e.resolvedOptions.document;if(!n||!e.dirty)return;let r={shouldRender:!0,tags:[]};if(await e.hooks.callHook(`dom:beforeRender`,r),r.shouldRender)return e._domUpdatePromise||=new Promise(async t=>{let r=new Map,i=new Promise(t=>{e.resolveTags().then(e=>{t(e.map(e=>{let t=r.get(e._d)||0,n={tag:e,id:(t?`${e._d}:${t}`:e._d)||b(e),shouldRender:!0};return e._d&&v(e._d)&&r.set(e._d,t+1),n}))})}),a=e._dom;if(!a){a={title:n.title,elMap:new Map().set(`htmlAttrs`,n.documentElement).set(`bodyAttrs`,n.body)};for(let e of[`body`,`head`]){let t=n[e]?.children;for(let e of t){let t=e.tagName.toLowerCase();if(!u.has(t))continue;let n=C({tag:t,props:{}},{innerHTML:e.innerHTML,...e.getAttributeNames().reduce((t,n)=>(t[n]=e.getAttribute(n),t),{})||{}});if(n.key=e.getAttribute(`data-hid`)||void 0,n._d=y(n)||b(n),a.elMap.has(n._d)){let t=1,r=n._d;for(;a.elMap.has(r);)r=`${n._d}:${t++}`;a.elMap.set(r,e)}else a.elMap.set(n._d,e)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function o(e,t,n){let r=`${e}:${t}`;a.sideEffects[r]=n,delete a.pendingSideEffects[r]}function s({id:e,$el:t,tag:r}){let i=r.tag.endsWith(`Attrs`);for(let s in a.elMap.set(e,t),i||(r.textContent&&r.textContent!==t.textContent&&(t.textContent=r.textContent),r.innerHTML&&r.innerHTML!==t.innerHTML&&(t.innerHTML=r.innerHTML),o(e,`el`,()=>{t?.remove(),a.elMap.delete(e)})),r.props){if(!Object.prototype.hasOwnProperty.call(r.props,s))continue;let a=r.props[s];if(s.startsWith(`on`)&&typeof a==`function`){let e=t?.dataset;if(e&&e[`${s}fired`]){let e=s.slice(0,-5);a.call(t,new Event(e.substring(2)))}t.getAttribute(`data-${s}`)!==``&&((r.tag===`bodyAttrs`?n.defaultView:t).addEventListener(s.substring(2),a.bind(t)),t.setAttribute(`data-${s}`,``));continue}let c=`attr:${s}`;if(s===`class`){if(!a)continue;for(let n of a)i&&o(e,`${c}:${n}`,()=>t.classList.remove(n)),!t.classList.contains(n)&&t.classList.add(n)}else if(s===`style`){if(!a)continue;for(let[n,r]of a)o(e,`${c}:${n}`,()=>{t.style.removeProperty(n)}),t.style.setProperty(n,r)}else a!==!1&&a!==null&&(t.getAttribute(s)!==a&&t.setAttribute(s,a===!0?``:String(a)),i&&o(e,c,()=>t.removeAttribute(s)))}}let c=[],l={bodyClose:void 0,bodyOpen:void 0,head:void 0},d=await i;for(let e of d){let{tag:t,shouldRender:r,id:i}=e;if(r){if(t.tag===`title`){n.title=t.textContent,o(`title`,``,()=>n.title=a.title);continue}e.$el=e.$el||a.elMap.get(i),e.$el?s(e):u.has(t.tag)&&c.push(e)}}for(let e of c){let t=e.tag.tagPosition||`head`;e.$el=n.createElement(e.tag.tag),s(e),l[t]=l[t]||n.createDocumentFragment(),l[t].appendChild(e.$el)}for(let t of d)await e.hooks.callHook(`dom:renderTag`,t,n,o);for(let e in l.head&&n.head.appendChild(l.head),l.bodyOpen&&n.body.insertBefore(l.bodyOpen,n.body.firstChild),l.bodyClose&&n.body.appendChild(l.bodyClose),a.pendingSideEffects)a.pendingSideEffects[e]();e._dom=a,await e.hooks.callHook(`dom:rendered`,{renders:d}),t()}).finally(()=>{e._domUpdatePromise=void 0,e.dirty=!1}),e._domUpdatePromise}function le(e={}){let t=e.domOptions?.render||ce;e.document=e.document||(typeof window<`u`?document:void 0);let n=e.document?.head.querySelector(`script[id="unhead:payload"]`)?.innerHTML||!1;return se({...e,plugins:[...e.plugins||[],{key:`client`,hooks:{"entries:updated":t}}],init:[n?JSON.parse(n):!1,...e.init||[]]})}function ue(e,t){let n=0;return()=>{let r=++n;t(()=>{n===r&&e()})}}
/**
* @vue/shared v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function D(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var O={},de=[],k=()=>{},fe=()=>!1,pe=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),me=e=>e.startsWith(`onUpdate:`),A=Object.assign,he=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},ge=Object.prototype.hasOwnProperty,j=(e,t)=>ge.call(e,t),M=Array.isArray,_e=e=>Ce(e)===`[object Map]`,ve=e=>Ce(e)===`[object Set]`,ye=e=>Ce(e)===`[object Date]`,N=e=>typeof e==`function`,P=e=>typeof e==`string`,be=e=>typeof e==`symbol`,F=e=>typeof e==`object`&&!!e,xe=e=>(F(e)||N(e))&&N(e.then)&&N(e.catch),Se=Object.prototype.toString,Ce=e=>Se.call(e),we=e=>Ce(e).slice(8,-1),Te=e=>Ce(e)===`[object Object]`,Ee=e=>P(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,De=D(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),Oe=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ke=/-\w/g,Ae=Oe(e=>e.replace(ke,e=>e.slice(1).toUpperCase())),je=/\B([A-Z])/g,Me=Oe(e=>e.replace(je,`-$1`).toLowerCase()),Ne=Oe(e=>e.charAt(0).toUpperCase()+e.slice(1)),Pe=Oe(e=>e?`on${Ne(e)}`:``),Fe=(e,t)=>!Object.is(e,t),Ie=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Le=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Re=e=>{let t=parseFloat(e);return isNaN(t)?e:t},ze=e=>{let t=P(e)?Number(e):NaN;return isNaN(t)?e:t},Be,Ve=()=>Be||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function He(e){if(M(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=P(r)?Ke(r):He(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(P(e)||F(e))return e}var Ue=/;(?![^(]*\))/g,We=/:([^]+)/,Ge=/\/\*[^]*?\*\//g;function Ke(e){let t={};return e.replace(Ge,``).split(Ue).forEach(e=>{if(e){let n=e.split(We);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function qe(e){let t=``;if(P(e))t=e;else if(M(e))for(let n=0;n<e.length;n++){let r=qe(e[n]);r&&(t+=r+` `)}else if(F(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var Je=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,Ye=D(Je);Je+``;function Xe(e){return!!e||e===``}function Ze(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Qe(e[r],t[r]);return n}function Qe(e,t){if(e===t)return!0;let n=ye(e),r=ye(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=be(e),r=be(t),n||r)return e===t;if(n=M(e),r=M(t),n||r)return n&&r?Ze(e,t):!1;if(n=F(e),r=F(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!Qe(e[n],t[n]))return!1}}return String(e)===String(t)}var $e=e=>!!(e&&e.__v_isRef===!0),et=e=>P(e)?e:e==null?``:M(e)||F(e)&&(e.toString===Se||!N(e.toString))?$e(e)?et(e.value):JSON.stringify(e,tt,2):String(e),tt=(e,t)=>$e(t)?tt(e,t.value):_e(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[nt(t,r)+` =>`]=n,e),{})}:ve(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>nt(e))}:be(t)?nt(t):F(t)&&!M(t)&&!Te(t)?String(t):t,nt=(e,t=``)=>be(e)?`Symbol(${e.description??t})`:e,I,rt=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=I,!e&&I&&(this.index=(I.scopes||=[]).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){let t=I;try{return I=this,e()}finally{I=t}}}on(){++this._on===1&&(this.prevScope=I,I=this)}off(){this._on>0&&--this._on===0&&(I=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function it(){return I}var L,at=new WeakSet,ot=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,I&&I.active&&I.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,at.has(this)&&(at.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ut(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ct(this),pt(this);let e=L,t=yt;L=this,yt=!0;try{return this.fn()}finally{mt(this),L=e,yt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)_t(e);this.deps=this.depsTail=void 0,Ct(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?at.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ht(this)&&this.run()}get dirty(){return ht(this)}},st=0,ct,lt;function ut(e,t=!1){if(e.flags|=8,t){e.next=lt,lt=e;return}e.next=ct,ct=e}function dt(){st++}function ft(){if(--st>0)return;if(lt){let e=lt;for(lt=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;ct;){let t=ct;for(ct=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function pt(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function mt(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),_t(r),vt(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function ht(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(gt(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function gt(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===wt)||(e.globalVersion=wt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ht(e))))return;e.flags|=2;let t=e.dep,n=L,r=yt;L=e,yt=!0;try{pt(e);let n=e.fn(e._value);(t.version===0||Fe(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{L=n,yt=r,mt(e),e.flags&=-3}}function _t(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)_t(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function vt(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var yt=!0,bt=[];function xt(){bt.push(yt),yt=!1}function St(){let e=bt.pop();yt=e===void 0?!0:e}function Ct(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=L;L=void 0;try{t()}finally{L=e}}}var wt=0,Tt=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Et=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!L||!yt||L===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==L)t=this.activeLink=new Tt(L,this),L.deps?(t.prevDep=L.depsTail,L.depsTail.nextDep=t,L.depsTail=t):L.deps=L.depsTail=t,Dt(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=L.depsTail,t.nextDep=void 0,L.depsTail.nextDep=t,L.depsTail=t,L.deps===t&&(L.deps=e)}return t}trigger(e){this.version++,wt++,this.notify(e)}notify(e){dt();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{ft()}}};function Dt(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Dt(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Ot=new WeakMap,kt=Symbol(``),At=Symbol(``),jt=Symbol(``);function R(e,t,n){if(yt&&L){let t=Ot.get(e);t||Ot.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Et),r.map=t,r.key=n),r.track()}}function Mt(e,t,n,r,i,a){let o=Ot.get(e);if(!o){wt++;return}let s=e=>{e&&e.trigger()};if(dt(),t===`clear`)o.forEach(s);else{let i=M(e),a=i&&Ee(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===jt||!be(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(jt)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(kt)),_e(e)&&s(o.get(At)));break;case`delete`:i||(s(o.get(kt)),_e(e)&&s(o.get(At)));break;case`set`:_e(e)&&s(o.get(kt));break}}ft()}function Nt(e){let t=z(e);return t===e?t:(R(t,`iterate`,jt),yn(e)?t:t.map(B))}function Pt(e){return R(e=z(e),`iterate`,jt),e}var Ft={__proto__:null,[Symbol.iterator](){return It(this,Symbol.iterator,B)},concat(...e){return Nt(this).concat(...e.map(e=>M(e)?Nt(e):e))},entries(){return It(this,`entries`,e=>(e[1]=B(e[1]),e))},every(e,t){return Rt(this,`every`,e,t,void 0,arguments)},filter(e,t){return Rt(this,`filter`,e,t,e=>e.map(B),arguments)},find(e,t){return Rt(this,`find`,e,t,B,arguments)},findIndex(e,t){return Rt(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return Rt(this,`findLast`,e,t,B,arguments)},findLastIndex(e,t){return Rt(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return Rt(this,`forEach`,e,t,void 0,arguments)},includes(...e){return Bt(this,`includes`,e)},indexOf(...e){return Bt(this,`indexOf`,e)},join(e){return Nt(this).join(e)},lastIndexOf(...e){return Bt(this,`lastIndexOf`,e)},map(e,t){return Rt(this,`map`,e,t,void 0,arguments)},pop(){return Vt(this,`pop`)},push(...e){return Vt(this,`push`,e)},reduce(e,...t){return zt(this,`reduce`,e,t)},reduceRight(e,...t){return zt(this,`reduceRight`,e,t)},shift(){return Vt(this,`shift`)},some(e,t){return Rt(this,`some`,e,t,void 0,arguments)},splice(...e){return Vt(this,`splice`,e)},toReversed(){return Nt(this).toReversed()},toSorted(e){return Nt(this).toSorted(e)},toSpliced(...e){return Nt(this).toSpliced(...e)},unshift(...e){return Vt(this,`unshift`,e)},values(){return It(this,`values`,B)}};function It(e,t,n){let r=Pt(e),i=r[t]();return r!==e&&!yn(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var Lt=Array.prototype;function Rt(e,t,n,r,i,a){let o=Pt(e),s=o!==e&&!yn(e),c=o[t];if(c!==Lt[t]){let t=c.apply(e,a);return s?B(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,B(t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function zt(e,t,n,r){let i=Pt(e),a=n;return i!==e&&(yn(e)?n.length>3&&(a=function(t,r,i){return n.call(this,t,r,i,e)}):a=function(t,r,i){return n.call(this,t,B(r),i,e)}),i[t](a,...r)}function Bt(e,t,n){let r=z(e);R(r,`iterate`,jt);let i=r[t](...n);return(i===-1||i===!1)&&bn(n[0])?(n[0]=z(n[0]),r[t](...n)):i}function Vt(e,t,n=[]){xt(),dt();let r=z(e)[t].apply(e,n);return ft(),St(),r}var Ht=D(`__proto__,__v_isRef,__isVue`),Ut=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(be));function Wt(e){be(e)||(e=String(e));let t=z(this);return R(t,`has`,e),t.hasOwnProperty(e)}var Gt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?un:ln:i?cn:sn).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=M(e);if(!r){let e;if(a&&(e=Ft[t]))return e;if(t===`hasOwnProperty`)return Wt}let o=Reflect.get(e,t,V(e)?e:n);if((be(t)?Ut.has(t):Ht(t))||(r||R(e,`get`,t),i))return o;if(V(o)){let e=a&&Ee(t)?o:o.value;return r&&F(e)?hn(e):e}return F(o)?r?hn(o):pn(o):o}},Kt=class extends Gt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t];if(!this._isShallow){let t=vn(i);if(!yn(n)&&!vn(n)&&(i=z(i),n=z(n)),!M(e)&&V(i)&&!V(n))return t||(i.value=n),!0}let a=M(e)&&Ee(t)?Number(t)<e.length:j(e,t),o=Reflect.set(e,t,n,V(e)?e:r);return e===z(r)&&(a?Fe(n,i)&&Mt(e,`set`,t,n,i):Mt(e,`add`,t,n)),o}deleteProperty(e,t){let n=j(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&Mt(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!be(t)||!Ut.has(t))&&R(e,`has`,t),n}ownKeys(e){return R(e,`iterate`,M(e)?`length`:kt),Reflect.ownKeys(e)}},qt=class extends Gt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},Jt=new Kt,Yt=new qt,Xt=new Kt(!0),Zt=e=>e,Qt=e=>Reflect.getPrototypeOf(e);function $t(e,t,n){return function(...r){let i=this.__v_raw,a=z(i),o=_e(a),s=e===`entries`||e===Symbol.iterator&&o,c=e===`keys`&&o,l=i[e](...r),u=n?Zt:t?Sn:B;return!t&&R(a,`iterate`,c?At:kt),{next(){let{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:s?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function en(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function tn(e,t){let n={get(n){let r=this.__v_raw,i=z(r),a=z(n);e||(Fe(n,a)&&R(i,`get`,n),R(i,`get`,a));let{has:o}=Qt(i),s=t?Zt:e?Sn:B;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&R(z(t),`iterate`,kt),t.size},has(t){let n=this.__v_raw,r=z(n),i=z(t);return e||(Fe(t,i)&&R(r,`has`,t),R(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=z(a),s=t?Zt:e?Sn:B;return!e&&R(o,`iterate`,kt),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return A(n,e?{add:en(`add`),set:en(`set`),delete:en(`delete`),clear:en(`clear`)}:{add(e){!t&&!yn(e)&&!vn(e)&&(e=z(e));let n=z(this);return Qt(n).has.call(n,e)||(n.add(e),Mt(n,`add`,e,e)),this},set(e,n){!t&&!yn(n)&&!vn(n)&&(n=z(n));let r=z(this),{has:i,get:a}=Qt(r),o=i.call(r,e);o||=(e=z(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?Fe(n,s)&&Mt(r,`set`,e,n,s):Mt(r,`add`,e,n),this},delete(e){let t=z(this),{has:n,get:r}=Qt(t),i=n.call(t,e);i||=(e=z(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&Mt(t,`delete`,e,void 0,a),o},clear(){let e=z(this),t=e.size!==0,n=e.clear();return t&&Mt(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=$t(r,e,t)}),n}function nn(e,t){let n=tn(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(j(n,r)&&r in t?n:t,r,i)}var rn={get:nn(!1,!1)},an={get:nn(!1,!0)},on={get:nn(!0,!1)},sn=new WeakMap,cn=new WeakMap,ln=new WeakMap,un=new WeakMap;function dn(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function fn(e){return e.__v_skip||!Object.isExtensible(e)?0:dn(we(e))}function pn(e){return vn(e)?e:gn(e,!1,Jt,rn,sn)}function mn(e){return gn(e,!1,Xt,an,cn)}function hn(e){return gn(e,!0,Yt,on,ln)}function gn(e,t,n,r,i){if(!F(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let a=fn(e);if(a===0)return e;let o=i.get(e);if(o)return o;let s=new Proxy(e,a===2?r:n);return i.set(e,s),s}function _n(e){return vn(e)?_n(e.__v_raw):!!(e&&e.__v_isReactive)}function vn(e){return!!(e&&e.__v_isReadonly)}function yn(e){return!!(e&&e.__v_isShallow)}function bn(e){return e?!!e.__v_raw:!1}function z(e){let t=e&&e.__v_raw;return t?z(t):e}function xn(e){return!j(e,`__v_skip`)&&Object.isExtensible(e)&&Le(e,`__v_skip`,!0),e}var B=e=>F(e)?pn(e):e,Sn=e=>F(e)?hn(e):e;function V(e){return e?e.__v_isRef===!0:!1}function Cn(e){return Tn(e,!1)}function wn(e){return Tn(e,!0)}function Tn(e,t){return V(e)?e:new En(e,t)}var En=class{constructor(e,t){this.dep=new Et,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:z(e),this._value=t?e:B(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||yn(e)||vn(e);e=n?e:z(e),Fe(e,t)&&(this._rawValue=e,this._value=n?e:B(e),this.dep.trigger())}};function Dn(e){return V(e)?e.value:e}var On={get:(e,t,n)=>t===`__v_raw`?e:Dn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return V(i)&&!V(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function kn(e){return _n(e)?e:new Proxy(e,On)}var An=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Et(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=wt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&L!==this)return ut(this,!0),!0}get value(){let e=this.dep.track();return gt(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function jn(e,t,n=!1){let r,i;return N(e)?r=e:(r=e.get,i=e.set),new An(r,i,n)}var Mn={},Nn=new WeakMap,Pn=void 0;function Fn(e,t=!1,n=Pn){if(n){let t=Nn.get(n);t||Nn.set(n,t=[]),t.push(e)}}function In(e,t,n=O){let{immediate:r,deep:i,once:a,scheduler:o,augmentJob:s,call:c}=n,l=e=>i?e:yn(e)||i===!1||i===0?Ln(e,1):Ln(e),u,d,f,p,m=!1,h=!1;if(V(e)?(d=()=>e.value,m=yn(e)):_n(e)?(d=()=>l(e),m=!0):M(e)?(h=!0,m=e.some(e=>_n(e)||yn(e)),d=()=>e.map(e=>{if(V(e))return e.value;if(_n(e))return l(e);if(N(e))return c?c(e,2):e()})):d=N(e)?t?c?()=>c(e,2):e:()=>{if(f){xt();try{f()}finally{St()}}let t=Pn;Pn=u;try{return c?c(e,3,[p]):e(p)}finally{Pn=t}}:k,t&&i){let e=d,t=i===!0?1/0:i;d=()=>Ln(e(),t)}let g=it(),_=()=>{u.stop(),g&&g.active&&he(g.effects,u)};if(a&&t){let e=t;t=(...t)=>{e(...t),_()}}let v=h?Array(e.length).fill(Mn):Mn,y=e=>{if(!(!(u.flags&1)||!u.dirty&&!e))if(t){let e=u.run();if(i||m||(h?e.some((e,t)=>Fe(e,v[t])):Fe(e,v))){f&&f();let n=Pn;Pn=u;try{let n=[e,v===Mn?void 0:h&&v[0]===Mn?[]:v,p];v=e,c?c(t,3,n):t(...n)}finally{Pn=n}}}else u.run()};return s&&s(y),u=new ot(d),u.scheduler=o?()=>o(y,!1):y,p=e=>Fn(e,!1,u),f=u.onStop=()=>{let e=Nn.get(u);if(e){if(c)c(e,4);else for(let t of e)t();Nn.delete(u)}},t?r?y(!0):v=u.run():o?o(y.bind(null,!0),!0):u.run(),_.pause=u.pause.bind(u),_.resume=u.resume.bind(u),_.stop=_,_}function Ln(e,t=1/0,n){if(t<=0||!F(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,V(e))Ln(e.value,t,n);else if(M(e))for(let r=0;r<e.length;r++)Ln(e[r],t,n);else if(ve(e)||_e(e))e.forEach(e=>{Ln(e,t,n)});else if(Te(e)){for(let r in e)Ln(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Ln(e[r],t,n)}return e}
/**
* @vue/runtime-core v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Rn(e,t,n,r){try{return r?e(...r):e()}catch(e){Bn(e,t,n)}}function zn(e,t,n,r){if(N(e)){let i=Rn(e,t,n,r);return i&&xe(i)&&i.catch(e=>{Bn(e,t,n)}),i}if(M(e)){let i=[];for(let a=0;a<e.length;a++)i.push(zn(e[a],t,n,r));return i}}function Bn(e,t,n,r=!0){let i=t?t.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||O;if(t){let r=t.parent,i=t.proxy,o=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){let t=r.ec;if(t){for(let n=0;n<t.length;n++)if(t[n](e,i,o)===!1)return}r=r.parent}if(a){xt(),Rn(a,null,10,[e,i,o]),St();return}}Vn(e,n,i,r,o)}function Vn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var H=[],Hn=-1,Un=[],Wn=null,Gn=0,Kn=Promise.resolve(),qn=null;function Jn(e){let t=qn||Kn;return e?t.then(this?e.bind(this):e):t}function Yn(e){let t=Hn+1,n=H.length;for(;t<n;){let r=t+n>>>1,i=H[r],a=tr(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function Xn(e){if(!(e.flags&1)){let t=tr(e),n=H[H.length-1];!n||!(e.flags&2)&&t>=tr(n)?H.push(e):H.splice(Yn(t),0,e),e.flags|=1,Zn()}}function Zn(){qn||=Kn.then(nr)}function Qn(e){M(e)?Un.push(...e):Wn&&e.id===-1?Wn.splice(Gn+1,0,e):e.flags&1||(Un.push(e),e.flags|=1),Zn()}function $n(e,t,n=Hn+1){for(;n<H.length;n++){let t=H[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;H.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function er(e){if(Un.length){let e=[...new Set(Un)].sort((e,t)=>tr(e)-tr(t));if(Un.length=0,Wn){Wn.push(...e);return}for(Wn=e,Gn=0;Gn<Wn.length;Gn++){let e=Wn[Gn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Wn=null,Gn=0}}var tr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function nr(e){try{for(Hn=0;Hn<H.length;Hn++){let e=H[Hn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Rn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Hn<H.length;Hn++){let e=H[Hn];e&&(e.flags&=-2)}Hn=-1,H.length=0,er(e),qn=null,(H.length||Un.length)&&nr(e)}}var U=null,rr=null;function ir(e){let t=U;return U=e,rr=e&&e.type.__scopeId||null,t}function ar(e,t=U,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Ia(-1);let i=ir(t),a;try{a=e(...n)}finally{ir(i),r._d&&Ia(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function or(e,t){if(U===null)return e;let n=yo(U),r=e.dirs||=[];for(let e=0;e<t.length;e++){let[i,a,o,s=O]=t[e];i&&(N(i)&&(i={mounted:i,updated:i}),i.deep&&Ln(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:o,modifiers:s}))}return e}function sr(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(xt(),zn(c,n,8,[e.el,s,e,t]),St())}}var cr=Symbol(`_vte`),lr=e=>e.__isTeleport,ur=Symbol(`_leaveCb`);function dr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,dr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function fr(e,t){return N(e)?(()=>A({name:e.name},t,{setup:e}))():e}function pr(e){e.ids=[e.ids[0]+ e.ids[2]+++`-`,0,0]}var mr=new WeakMap;function hr(e,t,n,r,i=!1){if(M(e)){e.forEach((e,a)=>hr(e,t&&(M(t)?t[a]:t),n,r,i));return}if(Dr(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&hr(e,t,n,r.component.subTree);return}let a=r.shapeFlag&4?yo(r.component):r.el,o=i?null:a,{i:s,r:c}=e,l=t&&t.r,u=s.refs===O?s.refs={}:s.refs,d=s.setupState,f=z(d),p=d===O?fe:e=>j(f,e),m=e=>!0;if(l!=null&&l!==c){if(gr(t),P(l))u[l]=null,p(l)&&(d[l]=null);else if(V(l)){m(l)&&(l.value=null);let e=t;e.k&&(u[e.k]=null)}}if(N(c))Rn(c,s,12,[o,u]);else{let t=P(c),r=V(c);if(t||r){let s=()=>{if(e.f){let n=t?p(c)?d[c]:u[c]:m(c)||!e.k?c.value:u[e.k];if(i)M(n)&&he(n,a);else if(M(n))n.includes(a)||n.push(a);else if(t)u[c]=[a],p(c)&&(d[c]=u[c]);else{let t=[a];m(c)&&(c.value=t),e.k&&(u[e.k]=t)}}else t?(u[c]=o,p(c)&&(d[c]=o)):r&&(m(c)&&(c.value=o),e.k&&(u[e.k]=o))};if(o){let t=()=>{s(),mr.delete(e)};t.id=-1,mr.set(e,t),G(t,n)}else gr(e),s()}}}function gr(e){let t=mr.get(e);t&&(t.flags|=8,mr.delete(e))}var _r=!1,vr=()=>{_r||=(console.error(`Hydration completed but contains mismatches.`),!0)},yr=e=>e.namespaceURI.includes(`svg`)&&e.tagName!==`foreignObject`,br=e=>e.namespaceURI.includes(`MathML`),xr=e=>{if(e.nodeType===1){if(yr(e))return`svg`;if(br(e))return`mathml`}},Sr=e=>e.nodeType===8;function Cr(e){let{mt:t,p:n,o:{patchProp:r,createText:i,nextSibling:a,parentNode:o,remove:s,insert:c,createComment:l}}=e,u=(e,t)=>{if(!t.hasChildNodes()){n(null,e,t),er(),t._vnode=e;return}d(t.firstChild,e,null,null,null),er(),t._vnode=e},d=(n,r,s,l,u,y=!1)=>{y||=!!r.dynamicChildren;let b=Sr(n)&&n.data===`[`,x=()=>h(n,r,s,l,u,b),{type:S,ref:C,shapeFlag:ee,patchFlag:te}=r,w=n.nodeType;r.el=n,te===-2&&(y=!1,r.dynamicChildren=null);let T=null;switch(S){case ka:w===3?(n.data!==r.children&&(vr(),n.data=r.children),T=a(n)):r.children===``?(c(r.el=i(``),o(n),n),T=n):T=x();break;case Aa:v(n)?(T=a(n),_(r.el=n.content.firstChild,n,s)):T=w!==8||b?x():a(n);break;case ja:if(b&&(n=a(n),w=n.nodeType),w===1||w===3){T=n;let e=!r.children.length;for(let t=0;t<r.staticCount;t++)e&&(r.children+=T.nodeType===1?T.outerHTML:T.data),t===r.staticCount-1&&(r.anchor=T),T=a(T);return b?a(T):T}else x();break;case Oa:T=b?m(n,r,s,l,u,y):x();break;default:if(ee&1)T=(w!==1||r.type.toLowerCase()!==n.tagName.toLowerCase())&&!v(n)?x():f(n,r,s,l,u,y);else if(ee&6){r.slotScopeIds=u;let e=o(n);if(T=b?g(n):Sr(n)&&n.data===`teleport start`?g(n,n.data,`teleport end`):a(n),t(r,e,null,s,l,xr(e),y),Dr(r)&&!r.type.__asyncResolved){let t;b?(t=q(Oa),t.anchor=T?T.previousSibling:e.lastChild):t=n.nodeType===3?Ja(``):q(`div`),t.el=n,r.component.subTree=t}}else ee&64?T=w===8?r.type.hydrate(n,r,s,l,u,y,e,p):x():ee&128&&(T=r.type.hydrate(n,r,s,l,xr(o(n)),u,y,e,d))}return C!=null&&hr(C,null,l,r),T},f=(e,t,n,i,a,o)=>{o||=!!t.dynamicChildren;let{type:c,props:l,patchFlag:u,shapeFlag:d,dirs:f,transition:m}=t,h=c===`input`||c===`option`;if(h||u!==-1){f&&sr(t,null,n,`created`);let c=!1;if(v(e)){c=Gi(null,m)&&n&&n.vnode.props&&n.vnode.props.appear;let r=e.content.firstChild;if(c){let e=r.getAttribute(`class`);e&&(r.$cls=e),m.beforeEnter(r)}_(r,e,n),t.el=e=r}if(d&16&&!(l&&(l.innerHTML||l.textContent))){let r=p(e.firstChild,t,e,n,i,a,o);for(;r;){Er(e,1)||vr();let t=r;r=r.nextSibling,s(t)}}else if(d&8){let n=t.children;n[0]===`
`&&(e.tagName===`PRE`||e.tagName===`TEXTAREA`)&&(n=n.slice(1));let{textContent:r}=e;r!==n&&r!==n.replace(/\r\n|\r/g,`
`)&&(Er(e,0)||vr(),e.textContent=t.children)}if(l){if(h||!o||u&48){let t=e.tagName.includes(`-`);for(let i in l)(h&&(i.endsWith(`value`)||i===`indeterminate`)||pe(i)&&!De(i)||i[0]===`.`||t)&&r(e,i,null,l[i],void 0,n)}else if(l.onClick)r(e,`onClick`,null,l.onClick,void 0,n);else if(u&4&&_n(l.style))for(let e in l.style)l.style[e]}let g;(g=l&&l.onVnodeBeforeMount)&&$a(g,n,t),f&&sr(t,null,n,`beforeMount`),((g=l&&l.onVnodeMounted)||f||c)&&Ta(()=>{g&&$a(g,n,t),c&&m.enter(e),f&&sr(t,null,n,`mounted`)},i)}return e.nextSibling},p=(e,t,r,o,s,l,u)=>{u||=!!t.dynamicChildren;let f=t.children,p=f.length;for(let t=0;t<p;t++){let m=u?f[t]:f[t]=J(f[t]),h=m.type===ka;e?(h&&!u&&t+1<p&&J(f[t+1]).type===ka&&(c(i(e.data.slice(m.children.length)),r,a(e)),e.data=m.children),e=d(e,m,o,s,l,u)):h&&!m.children?c(m.el=i(``),r):(Er(r,1)||vr(),n(null,m,r,null,o,s,xr(r),l))}return e},m=(e,t,n,r,i,s)=>{let{slotScopeIds:u}=t;u&&(i=i?i.concat(u):u);let d=o(e),f=p(a(e),t,d,n,r,i,s);return f&&Sr(f)&&f.data===`]`?a(t.anchor=f):(vr(),c(t.anchor=l(`]`),d,f),f)},h=(e,t,r,i,c,l)=>{if(Er(e.parentElement,1)||vr(),t.el=null,l){let t=g(e);for(;;){let n=a(e);if(n&&n!==t)s(n);else break}}let u=a(e),d=o(e);return s(e),n(null,t,d,u,r,i,xr(d),c),r&&(r.vnode.el=t.el,ma(r,t.el)),u},g=(e,t=`[`,n=`]`)=>{let r=0;for(;e;)if(e=a(e),e&&Sr(e)&&(e.data===t&&r++,e.data===n)){if(r===0)return a(e);r--}return e},_=(e,t,n)=>{let r=t.parentNode;r&&r.replaceChild(e,t);let i=n;for(;i;)i.vnode.el===t&&(i.vnode.el=i.subTree.el=e),i=i.parent},v=e=>e.nodeType===1&&e.tagName===`TEMPLATE`;return[u,d]}var wr=`data-allow-mismatch`,Tr={0:`text`,1:`children`,2:`class`,3:`style`,4:`attribute`};function Er(e,t){if(t===0||t===1)for(;e&&!e.hasAttribute(wr);)e=e.parentElement;let n=e&&e.getAttribute(wr);if(n==null)return!1;if(n===``)return!0;{let e=n.split(`,`);return t===0&&e.includes(`children`)?!0:e.includes(Tr[t])}}Ve().requestIdleCallback,Ve().cancelIdleCallback;var Dr=e=>!!e.type.__asyncLoader,Or=e=>e.type.__isKeepAlive;function kr(e,t){jr(e,`a`,t)}function Ar(e,t){jr(e,`da`,t)}function jr(e,t,n=Y){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(Nr(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Or(e.parent.vnode)&&Mr(r,t,n,e),e=e.parent}}function Mr(e,t,n,r){let i=Nr(t,e,r,!0);Br(()=>{he(r[t],i)},n)}function Nr(e,t,n=Y,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{xt();let i=oo(n),a=zn(t,n,e,r);return i(),St(),a};return r?i.unshift(a):i.push(a),a}}var Pr=e=>(t,n=Y)=>{(!lo||e===`sp`)&&Nr(e,(...e)=>t(...e),n)},Fr=Pr(`bm`),Ir=Pr(`m`),Lr=Pr(`bu`),Rr=Pr(`u`),zr=Pr(`bum`),Br=Pr(`um`),Vr=Pr(`sp`),Hr=Pr(`rtg`),Ur=Pr(`rtc`);function Wr(e,t=Y){Nr(`ec`,e,t)}var Gr=`components`;function Kr(e,t){return Jr(Gr,e,!0,t)||e}var qr=Symbol.for(`v-ndc`);function Jr(e,t,n=!0,r=!1){let i=U||Y;if(i){let n=i.type;if(e===Gr){let e=bo(n,!1);if(e&&(e===t||e===Ae(t)||e===Ne(Ae(t))))return n}let a=Yr(i[e]||n[e],t)||Yr(i.appContext[e],t);return!a&&r?n:a}}function Yr(e,t){return e&&(e[t]||e[Ae(t)]||e[Ne(Ae(t))])}function Xr(e,t,n,r){let i,a=n&&n[r],o=M(e);if(o||P(e)){let n=o&&_n(e),r=!1,s=!1;n&&(r=!yn(e),s=vn(e),e=Pt(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Sn(B(e[n])):B(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(F(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}var Zr=e=>e?co(e)?yo(e):Zr(e.parent):null,Qr=A(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Zr(e.parent),$root:e=>Zr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>si(e),$forceUpdate:e=>e.f||=()=>{Xn(e.update)},$nextTick:e=>e.n||=Jn.bind(e.proxy),$watch:e=>ta.bind(e)}),$r=(e,t)=>e!==O&&!e.__isScriptSetup&&j(e,t),ei={get({_:e},t){if(t===`__v_skip`)return!0;let{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:c}=e,l;if(t[0]!==`$`){let s=o[t];if(s!==void 0)switch(s){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else if($r(r,t))return o[t]=1,r[t];else if(i!==O&&j(i,t))return o[t]=2,i[t];else if((l=e.propsOptions[0])&&j(l,t))return o[t]=3,a[t];else if(n!==O&&j(n,t))return o[t]=4,n[t];else ni&&(o[t]=0)}let u=Qr[t],d,f;if(u)return t===`$attrs`&&R(e.attrs,`get`,``),u(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==O&&j(n,t))return o[t]=4,n[t];if(f=c.config.globalProperties,j(f,t))return f[t]},set({_:e},t,n){let{data:r,setupState:i,ctx:a}=e;return $r(i,t)?(i[t]=n,!0):r!==O&&j(r,t)?(r[t]=n,!0):j(e.props,t)||t[0]===`$`&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a,type:o}},s){let c,l;return!!(n[s]||e!==O&&s[0]!==`$`&&j(e,s)||$r(t,s)||(c=a[0])&&j(c,s)||j(r,s)||j(Qr,s)||j(i.config.globalProperties,s)||(l=o.__cssModules)&&l[s])},defineProperty(e,t,n){return n.get==null?j(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function ti(e){return M(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var ni=!0;function ri(e){let t=si(e),n=e.proxy,r=e.ctx;ni=!1,t.beforeCreate&&ai(t.beforeCreate,e,`bc`);let{data:i,computed:a,methods:o,watch:s,provide:c,inject:l,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:m,activated:h,deactivated:g,beforeDestroy:_,beforeUnmount:v,destroyed:y,unmounted:b,render:x,renderTracked:S,renderTriggered:C,errorCaptured:ee,serverPrefetch:te,expose:w,inheritAttrs:T,components:ne,directives:re,filters:ie}=t;if(l&&ii(l,r,null),o)for(let e in o){let t=o[e];N(t)&&(r[e]=t.bind(n))}if(i){let t=i.call(n,n);F(t)&&(e.data=pn(t))}if(ni=!0,a)for(let e in a){let t=a[e],i=So({get:N(t)?t.bind(n,n):N(t.get)?t.get.bind(n,n):k,set:!N(t)&&N(t.set)?t.set.bind(n):k});Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e})}if(s)for(let e in s)oi(s[e],r,n,e);if(c){let e=N(c)?c.call(n):c;Reflect.ownKeys(e).forEach(t=>{bi(t,e[t])})}u&&ai(u,e,`c`);function E(e,t){M(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(E(Fr,d),E(Ir,f),E(Lr,p),E(Rr,m),E(kr,h),E(Ar,g),E(Wr,ee),E(Ur,S),E(Hr,C),E(zr,v),E(Br,b),E(Vr,te),M(w))if(w.length){let t=e.exposed||={};w.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};x&&e.render===k&&(e.render=x),T!=null&&(e.inheritAttrs=T),ne&&(e.components=ne),re&&(e.directives=re),te&&pr(e)}function ii(e,t,n=k){for(let n in M(e)&&(e=fi(e)),e){let r=e[n],i;i=F(r)?`default`in r?xi(r.from||n,r.default,!0):xi(r.from||n):xi(r),V(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function ai(e,t,n){zn(M(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function oi(e,t,n,r){let i=r.includes(`.`)?na(n,r):()=>n[r];if(P(e)){let n=t[e];N(n)&&$i(i,n)}else if(N(e))$i(i,e.bind(n));else if(F(e))if(M(e))e.forEach(e=>oi(e,t,n,r));else{let r=N(e.handler)?e.handler.bind(n):t[e.handler];N(r)&&$i(i,r,e)}}function si(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>ci(c,e,o,!0)),ci(c,t,o)),F(t)&&a.set(t,c),c}function ci(e,t,n,r=!1){let{mixins:i,extends:a}=t;for(let o in a&&ci(e,a,n,!0),i&&i.forEach(t=>ci(e,t,n,!0)),t)if(!(r&&o===`expose`)){let r=li[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}var li={data:ui,props:mi,emits:mi,methods:pi,computed:pi,beforeCreate:W,created:W,beforeMount:W,mounted:W,beforeUpdate:W,updated:W,beforeDestroy:W,beforeUnmount:W,destroyed:W,unmounted:W,activated:W,deactivated:W,errorCaptured:W,serverPrefetch:W,components:pi,directives:pi,watch:hi,provide:ui,inject:di};function ui(e,t){return t?e?function(){return A(N(e)?e.call(this,this):e,N(t)?t.call(this,this):t)}:t:e}function di(e,t){return pi(fi(e),fi(t))}function fi(e){if(M(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function W(e,t){return e?[...new Set([].concat(e,t))]:t}function pi(e,t){return e?A(Object.create(null),e,t):t}function mi(e,t){return e?M(e)&&M(t)?[...new Set([...e,...t])]:A(Object.create(null),ti(e),ti(t??{})):t}function hi(e,t){if(!e)return t;if(!t)return e;let n=A(Object.create(null),e);for(let r in t)n[r]=W(e[r],t[r]);return n}function gi(){return{app:null,config:{isNativeTag:fe,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var _i=0;function vi(e,t){return function(n,r=null){N(n)||(n=A({},n)),r!=null&&!F(r)&&(r=null);let i=gi(),a=new WeakSet,o=[],s=!1,c=i.app={_uid:_i++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:wo,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&N(e.install)?(a.add(e),e.install(c,...t)):N(e)&&(a.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(a,o,l){if(!s){let u=c._ceVNode||q(n,r);return u.appContext=i,l===!0?l=`svg`:l===!1&&(l=void 0),o&&t?t(u,a):e(u,a,l),s=!0,c._container=a,a.__vue_app__=c,yo(u.component)}},onUnmount(e){o.push(e)},unmount(){s&&(zn(o,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c},runWithContext(e){let t=yi;yi=c;try{return e()}finally{yi=t}}};return c}}var yi=null;function bi(e,t){if(Y){let n=Y.provides,r=Y.parent&&Y.parent.provides;r===n&&(n=Y.provides=Object.create(r)),n[e]=t}}function xi(e,t,n=!1){let r=ro();if(r||yi){let i=yi?yi._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&N(t)?t.call(r&&r.proxy):t}}var Si={},Ci=()=>Object.create(Si),wi=e=>Object.getPrototypeOf(e)===Si;function Ti(e,t,n,r=!1){let i={},a=Ci();for(let n in e.propsDefaults=Object.create(null),Di(e,t,i,a),e.propsOptions[0])n in i||(i[n]=void 0);n?e.props=r?i:mn(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function Ei(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=z(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(sa(e.emitsOptions,o))continue;let u=t[o];if(c)if(j(a,o))u!==a[o]&&(a[o]=u,l=!0);else{let t=Ae(o);i[t]=Oi(c,s,t,u,e,!1)}else u!==a[o]&&(a[o]=u,l=!0)}}}else{Di(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!j(t,a)&&((r=Me(a))===a||!j(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=Oi(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!j(t,e))&&(delete a[e],l=!0)}l&&Mt(e.attrs,`set`,``)}function Di(e,t,n,r){let[i,a]=e.propsOptions,o=!1,s;if(t)for(let c in t){if(De(c))continue;let l=t[c],u;i&&j(i,u=Ae(c))?!a||!a.includes(u)?n[u]=l:(s||={})[u]=l:sa(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(a){let t=z(n),r=s||O;for(let o=0;o<a.length;o++){let s=a[o];n[s]=Oi(i,t,s,r[s],e,!j(r,s))}}return o}function Oi(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=j(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&N(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=oo(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===Me(n))&&(r=!0))}return r}var ki=new WeakMap;function Ai(e,t,n=!1){let r=n?ki:t.propsCache,i=r.get(e);if(i)return i;let a=e.props,o={},s=[],c=!1;if(!N(e)){let r=e=>{c=!0;let[n,r]=Ai(e,t,!0);A(o,n),r&&s.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!a&&!c)return F(e)&&r.set(e,de),de;if(M(a))for(let e=0;e<a.length;e++){let t=Ae(a[e]);ji(t)&&(o[t]=O)}else if(a)for(let e in a){let t=Ae(e);if(ji(t)){let n=a[e],r=o[t]=M(n)||N(n)?{type:n}:A({},n),i=r.type,c=!1,l=!0;if(M(i))for(let e=0;e<i.length;++e){let t=i[e],n=N(t)&&t.name;if(n===`Boolean`){c=!0;break}else n===`String`&&(l=!1)}else c=N(i)&&i.name===`Boolean`;r[0]=c,r[1]=l,(c||j(r,`default`))&&s.push(t)}}let l=[o,s];return F(e)&&r.set(e,l),l}function ji(e){return e[0]!==`$`&&!De(e)}var Mi=e=>e===`_`||e===`_ctx`||e===`$stable`,Ni=e=>M(e)?e.map(J):[J(e)],Pi=(e,t,n)=>{if(t._n)return t;let r=ar((...e)=>Ni(t(...e)),n);return r._c=!1,r},Fi=(e,t,n)=>{let r=e._ctx;for(let n in e){if(Mi(n))continue;let i=e[n];if(N(i))t[n]=Pi(n,i,r);else if(i!=null){let e=Ni(i);t[n]=()=>e}}},Ii=(e,t)=>{let n=Ni(t);e.slots.default=()=>n},Li=(e,t,n)=>{for(let r in t)(n||!Mi(r))&&(e[r]=t[r])},Ri=(e,t,n)=>{let r=e.slots=Ci();if(e.vnode.shapeFlag&32){let e=t._;e?(Li(r,t,n),n&&Le(r,`_`,e,!0)):Fi(t,r)}else t&&Ii(e,t)},zi=(e,t,n)=>{let{vnode:r,slots:i}=e,a=!0,o=O;if(r.shapeFlag&32){let e=t._;e?n&&e===1?a=!1:Li(i,t,n):(a=!t.$stable,Fi(t,i)),o=t}else t&&(Ii(e,t),o={default:1});if(a)for(let e in i)!Mi(e)&&o[e]==null&&delete i[e]},G=Ta;function Bi(e){return Hi(e)}function Vi(e){return Hi(e,Cr)}function Hi(e,t){let n=Ve();n.__VUE__=!0;let{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=k,insertStaticContent:m}=e,h=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Va(e,t)&&(r=he(e),D(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case ka:g(e,t,n,r);break;case Aa:_(e,t,n,r);break;case ja:e??v(t,n,r,o);break;case Oa:ne(e,t,n,r,i,a,o,s,c);break;default:d&1?x(e,t,n,r,i,a,o,s,c):d&6?re(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,M)}u!=null&&i?hr(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&hr(e.ref,null,a,e,!0)},g=(e,t,n,i)=>{if(e==null)r(t.el=s(t.children),n,i);else{let n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},_=(e,t,n,i)=>{e==null?r(t.el=c(t.children||``),n,i):t.el=e.el},v=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},y=({el:e,anchor:t},n,i)=>{let a;for(;e&&e!==t;)a=f(e),r(e,n,i),e=a;r(t,n,i)},b=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=f(e),i(e),e=n;i(t)},x=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)S(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),te(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},S=(e,t,n,i,s,c,l,d)=>{let f,p,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(f=e.el=o(e.type,c,m&&m.is,m),h&8?u(f,e.children):h&16&&ee(e.children,f,null,i,s,Ui(e,c),l,d),_&&sr(e,null,i,`created`),C(f,e,e.scopeId,l,i),m){for(let e in m)e!==`value`&&!De(e)&&a(f,e,null,m[e],c,i);`value`in m&&a(f,`value`,null,m.value,c),(p=m.onVnodeBeforeMount)&&$a(p,i,e)}_&&sr(e,null,i,`beforeMount`);let v=Gi(s,g);v&&g.beforeEnter(f),r(f,t,n),((p=m&&m.onVnodeMounted)||v||_)&&G(()=>{p&&$a(p,i,e),v&&g.enter(f),_&&sr(e,null,i,`mounted`)},s)},C=(e,t,n,r,i)=>{if(n&&p(e,n),r)for(let t=0;t<r.length;t++)p(e,r[t]);if(i){let n=i.subTree;if(t===n||ha(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;C(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},ee=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++)h(null,e[l]=s?Xa(e[l]):J(e[l]),t,n,r,i,a,o,s)},te=(e,t,n,r,i,o,s)=>{let c=t.el=e.el,{patchFlag:l,dynamicChildren:d,dirs:f}=t;l|=e.patchFlag&16;let p=e.props||O,m=t.props||O,h;if(n&&Wi(n,!1),(h=m.onVnodeBeforeUpdate)&&$a(h,n,t,e),f&&sr(t,e,n,`beforeUpdate`),n&&Wi(n,!0),(p.innerHTML&&m.innerHTML==null||p.textContent&&m.textContent==null)&&u(c,``),d?w(e.dynamicChildren,d,c,n,r,Ui(t,i),o):s||se(e,t,c,null,n,r,Ui(t,i),o,!1),l>0){if(l&16)T(c,p,m,n,i);else if(l&2&&p.class!==m.class&&a(c,`class`,null,m.class,i),l&4&&a(c,`style`,p.style,m.style,i),l&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let r=e[t],o=p[r],s=m[r];(s!==o||r===`value`)&&a(c,r,o,s,i,n)}}l&1&&e.children!==t.children&&u(c,t.children)}else !s&&d==null&&T(c,p,m,n,i);((h=m.onVnodeUpdated)||f)&&G(()=>{h&&$a(h,n,t,e),f&&sr(t,e,n,`updated`)},r)},w=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s];h(c,l,c.el&&(c.type===Oa||!Va(c,l)||c.shapeFlag&198)?d(c.el):n,null,r,i,a,o,!0)}},T=(e,t,n,r,i)=>{if(t!==n){if(t!==O)for(let o in t)!De(o)&&!(o in n)&&a(e,o,t[o],null,i,r);for(let o in n){if(De(o))continue;let s=n[o],c=t[o];s!==c&&o!==`value`&&a(e,o,c,s,i,r)}`value`in n&&a(e,`value`,t.value,n.value,i)}},ne=(e,t,n,i,a,o,c,l,u)=>{let d=t.el=e?e.el:s(``),f=t.anchor=e?e.anchor:s(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(l=l?l.concat(h):h),e==null?(r(d,n,i),r(f,n,i),ee(t.children||[],n,f,a,o,c,l,u)):p>0&&p&64&&m&&e.dynamicChildren?(w(e.dynamicChildren,m,n,a,o,c,l),(t.key!=null||a&&t===a.subTree)&&Ki(e,t,!0)):se(e,t,n,f,a,o,c,l,u)},re=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):ie(t,n,r,i,a,o,c):E(e,t,c)},ie=(e,t,n,r,i,a,o)=>{let s=e.component=no(e,r,i);if(Or(e)&&(s.ctx.renderer=M),uo(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,ae,o),!e.el){let r=s.subTree=q(Aa);_(null,r,t,n),e.placeholder=r.el}}else ae(s,e,t,n,i,a,o)},E=(e,t,n)=>{let r=t.component=e.component;if(fa(e,t,n))if(r.asyncDep&&!r.asyncResolved){oe(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},ae=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:c,vnode:l}=e;{let n=Ji(e);if(n){t&&(t.el=l.el,oe(e,t,o)),n.asyncDep.then(()=>{e.isUnmounted||s()});return}}let u=t,f;Wi(e,!1),t?(t.el=l.el,oe(e,t,o)):t=l,n&&Ie(n),(f=t.props&&t.props.onVnodeBeforeUpdate)&&$a(f,c,t,l),Wi(e,!0);let p=ca(e),m=e.subTree;e.subTree=p,h(m,p,d(m.el),he(m),e,i,a),t.el=p.el,u===null&&ma(e,p.el),r&&G(r,i),(f=t.props&&t.props.onVnodeUpdated)&&G(()=>$a(f,c,t,l),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=Dr(t);if(Wi(e,!1),l&&Ie(l),!m&&(o=c&&c.onVnodeBeforeMount)&&$a(o,d,t),Wi(e,!0),s&&ve){let t=()=>{e.subTree=ca(e),ve(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._def.shadowRoot!==!1&&f.ce._injectChildStyle(p);let o=e.subTree=ca(e);h(null,o,n,r,e,i,a),t.el=o.el}if(u&&G(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;G(()=>$a(o,d,e),i)}(t.shapeFlag&256||d&&Dr(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&G(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new ot(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>Xn(u),Wi(e,!0),l()},oe=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,Ei(e,t.props,r,n),zi(e,t.children,n),xt(),$n(e),St()},se=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,d=e?e.shapeFlag:0,f=t.children,{patchFlag:p,shapeFlag:m}=t;if(p>0){if(p&128){le(l,f,n,r,i,a,o,s,c);return}else if(p&256){ce(l,f,n,r,i,a,o,s,c);return}}m&8?(d&16&&A(l,i,a),f!==l&&u(n,f)):d&16?m&16?le(l,f,n,r,i,a,o,s,c):A(l,i,a,!0):(d&8&&u(n,``),m&16&&ee(f,n,r,i,a,o,s,c))},ce=(e,t,n,r,i,a,o,s,c)=>{e||=de,t||=de;let l=e.length,u=t.length,d=Math.min(l,u),f;for(f=0;f<d;f++){let r=t[f]=c?Xa(t[f]):J(t[f]);h(e[f],r,n,null,i,a,o,s,c)}l>u?A(e,i,a,!0,!1,d):ee(t,n,r,i,a,o,s,c,d)},le=(e,t,n,r,i,a,o,s,c)=>{let l=0,u=t.length,d=e.length-1,f=u-1;for(;l<=d&&l<=f;){let r=e[l],u=t[l]=c?Xa(t[l]):J(t[l]);if(Va(r,u))h(r,u,n,null,i,a,o,s,c);else break;l++}for(;l<=d&&l<=f;){let r=e[d],l=t[f]=c?Xa(t[f]):J(t[f]);if(Va(r,l))h(r,l,n,null,i,a,o,s,c);else break;d--,f--}if(l>d){if(l<=f){let e=f+1,d=e<u?t[e].el:r;for(;l<=f;)h(null,t[l]=c?Xa(t[l]):J(t[l]),n,d,i,a,o,s,c),l++}}else if(l>f)for(;l<=d;)D(e[l],i,a,!0),l++;else{let p=l,m=l,g=new Map;for(l=m;l<=f;l++){let e=t[l]=c?Xa(t[l]):J(t[l]);e.key!=null&&g.set(e.key,l)}let _,v=0,y=f-m+1,b=!1,x=0,S=Array(y);for(l=0;l<y;l++)S[l]=0;for(l=p;l<=d;l++){let r=e[l];if(v>=y){D(r,i,a,!0);continue}let u;if(r.key!=null)u=g.get(r.key);else for(_=m;_<=f;_++)if(S[_-m]===0&&Va(r,t[_])){u=_;break}u===void 0?D(r,i,a,!0):(S[u-m]=l+1,u>=x?x=u:b=!0,h(r,t[u],n,null,i,a,o,s,c),v++)}let C=b?qi(S):de;for(_=C.length-1,l=y-1;l>=0;l--){let e=m+l,d=t[e],f=t[e+1],p=e+1<u?f.el||f.placeholder:r;S[l]===0?h(null,d,n,p,i,a,o,s,c):b&&(_<0||l!==C[_]?ue(d,n,p,2):_--)}}},ue=(e,t,n,a,o=null)=>{let{el:s,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){ue(e.component.subTree,t,n,a);return}if(d&128){e.suspense.move(t,n,a);return}if(d&64){c.move(e,t,n,M);return}if(c===Oa){r(s,t,n);for(let e=0;e<u.length;e++)ue(u[e],t,n,a);r(e.anchor,t,n);return}if(c===ja){y(e,t,n);return}if(a!==2&&d&1&&l)if(a===0)l.beforeEnter(s),r(s,t,n),G(()=>l.enter(s),o);else{let{leave:a,delayLeave:o,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?i(s):r(s,t,n)},d=()=>{s._isLeaving&&s[ur](!0),a(s,()=>{u(),c&&c()})};o?o(s,u,d):d()}else r(s,t,n)},D=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p}=e;if(d===-2&&(i=!1),s!=null&&(xt(),hr(s,null,n,e,!0),St()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let m=u&1&&f,h=!Dr(e),g;if(h&&(g=o&&o.onVnodeBeforeUnmount)&&$a(g,t,e),u&6)me(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}m&&sr(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,M,r):l&&!l.hasOnce&&(a!==Oa||d>0&&d&64)?A(l,t,n,!1,!0):(a===Oa&&d&384||!i&&u&16)&&A(c,t,n),r&&fe(e)}(h&&(g=o&&o.onVnodeUnmounted)||m)&&G(()=>{g&&$a(g,t,e),m&&sr(e,null,t,`unmounted`)},n)},fe=e=>{let{type:t,el:n,anchor:r,transition:a}=e;if(t===Oa){pe(n,r);return}if(t===ja){b(e);return}let o=()=>{i(n),a&&!a.persisted&&a.afterLeave&&a.afterLeave()};if(e.shapeFlag&1&&a&&!a.persisted){let{leave:t,delayLeave:r}=a,i=()=>t(n,o);r?r(e.el,o,i):i()}else o()},pe=(e,t)=>{let n;for(;e!==t;)n=f(e),i(e),e=n;i(t)},me=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Yi(c),Yi(l),r&&Ie(r),i.stop(),a&&(a.flags|=8,D(o,e,t,n)),s&&G(s,t),G(()=>{e.isUnmounted=!0},t)},A=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)D(e[o],t,n,r,i)},he=e=>{if(e.shapeFlag&6)return he(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=f(e.anchor||e.el),n=t&&t[cr];return n?f(n):t},ge=!1,j=(e,t,n)=>{e==null?t._vnode&&D(t._vnode,null,null,!0):h(t._vnode||null,e,t,null,null,null,n),t._vnode=e,ge||=(ge=!0,$n(),er(),!1)},M={p:h,um:D,m:ue,r:fe,mt:ie,mc:ee,pc:se,pbc:w,n:he,o:e},_e,ve;return t&&([_e,ve]=t(M)),{render:j,hydrate:_e,createApp:vi(j,_e)}}function Ui({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function Wi({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Gi(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ki(e,t,n=!1){let r=e.children,i=t.children;if(M(r)&&M(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=Xa(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&Ki(t,a)),a.type===ka&&a.patchFlag!==-1&&(a.el=t.el),a.type===Aa&&!a.el&&(a.el=t.el)}}function qi(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function Ji(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ji(t)}function Yi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}var Xi=Symbol.for(`v-scx`),Zi=()=>xi(Xi);function Qi(e,t){return ea(e,null,t)}function $i(e,t,n){return ea(e,t,n)}function ea(e,t,n=O){let{immediate:r,deep:i,flush:a,once:o}=n,s=A({},n),c=t&&r||!t&&a!==`post`,l;if(lo){if(a===`sync`){let e=Zi();l=e.__watcherHandles||=[]}else if(!c){let e=()=>{};return e.stop=k,e.resume=k,e.pause=k,e}}let u=Y;s.call=(e,t,n)=>zn(e,u,t,n);let d=!1;a===`post`?s.scheduler=e=>{G(e,u&&u.suspense)}:a!==`sync`&&(d=!0,s.scheduler=(e,t)=>{t?e():Xn(e)}),s.augmentJob=e=>{t&&(e.flags|=4),d&&(e.flags|=2,u&&(e.id=u.uid,e.i=u))};let f=In(e,t,s);return lo&&(l?l.push(f):c&&f()),f}function ta(e,t,n){let r=this.proxy,i=P(e)?e.includes(`.`)?na(r,e):()=>r[e]:e.bind(r,r),a;N(t)?a=t:(a=t.handler,n=t);let o=oo(this),s=ea(i,a.bind(r),n);return o(),s}function na(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var ra=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ae(t)}Modifiers`]||e[`${Me(t)}Modifiers`];function ia(e,t,...n){if(e.isUnmounted)return;let r=e.vnode.props||O,i=n,a=t.startsWith(`update:`),o=a&&ra(r,t.slice(7));o&&(o.trim&&(i=n.map(e=>P(e)?e.trim():e)),o.number&&(i=n.map(Re)));let s,c=r[s=Pe(t)]||r[s=Pe(Ae(t))];!c&&a&&(c=r[s=Pe(Me(t))]),c&&zn(c,e,6,i);let l=r[s+`Once`];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,zn(l,e,6,i)}}var aa=new WeakMap;function oa(e,t,n=!1){let r=n?aa:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},s=!1;if(!N(e)){let r=e=>{let n=oa(e,t,!0);n&&(s=!0,A(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!s?(F(e)&&r.set(e,null),null):(M(a)?a.forEach(e=>o[e]=null):A(o,a),F(e)&&r.set(e,o),o)}function sa(e,t){return!e||!pe(t)?!1:(t=t.slice(2).replace(/Once$/,``),j(e,t[0].toLowerCase()+t.slice(1))||j(e,Me(t))||j(e,t))}function ca(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:s,emit:c,render:l,renderCache:u,props:d,data:f,setupState:p,ctx:m,inheritAttrs:h}=e,g=ir(e),_,v;try{if(n.shapeFlag&4){let e=i||r,t=e;_=J(l.call(t,e,u,d,p,f,m)),v=s}else{let e=t;_=J(e.length>1?e(d,{attrs:s,slots:o,emit:c}):e(d,null)),v=t.props?s:ua(s)}}catch(t){Ma.length=0,Bn(t,e,1),_=q(Aa)}let y=_;if(v&&h!==!1){let e=Object.keys(v),{shapeFlag:t}=y;e.length&&t&7&&(a&&e.some(me)&&(v=da(v,a)),y=qa(y,v,!1,!0))}return n.dirs&&(y=qa(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&dr(y,n.transition),_=y,ir(g),_}function la(e,t=!0){let n;for(let t=0;t<e.length;t++){let r=e[t];if(Ba(r)){if(r.type!==Aa||r.children===`v-if`){if(n)return;n=r}}else return}return n}var ua=e=>{let t;for(let n in e)(n===`class`||n===`style`||pe(n))&&((t||={})[n]=e[n]);return t},da=(e,t)=>{let n={};for(let r in e)(!me(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function fa(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?pa(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(o[n]!==r[n]&&!sa(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?pa(r,o,l):!0:!!o;return!1}function pa(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(t[a]!==e[a]&&!sa(n,a))return!0}return!1}function ma({vnode:e,parent:t},n){for(;t;){let r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}var ha=e=>e.__isSuspense,ga=0,_a={name:`Suspense`,__isSuspense:!0,process(e,t,n,r,i,a,o,s,c,l){if(e==null)ya(t,n,r,i,a,o,s,c,l);else{if(a&&a.deps>0&&!e.suspense.isInFallback){t.suspense=e.suspense,t.suspense.vnode=t,t.el=e.el;return}ba(e,t,n,r,i,o,s,c,l)}},hydrate:Sa,normalize:Ca};function va(e,t){let n=e.props&&e.props[t];N(n)&&n()}function ya(e,t,n,r,i,a,o,s,c){let{p:l,o:{createElement:u}}=c,d=u(`div`),f=e.suspense=xa(e,i,r,t,d,n,a,o,s,c);l(null,f.pendingBranch=e.ssContent,d,null,r,f,a,o),f.deps>0?(va(e,`onPending`),va(e,`onFallback`),l(null,e.ssFallback,t,n,r,null,a,o),Ea(f,e.ssFallback)):f.resolve(!1,!0)}function ba(e,t,n,r,i,a,o,s,{p:c,um:l,o:{createElement:u}}){let d=t.suspense=e.suspense;d.vnode=t,t.el=e.el;let f=t.ssContent,p=t.ssFallback,{activeBranch:m,pendingBranch:h,isInFallback:g,isHydrating:_}=d;if(h)d.pendingBranch=f,Va(h,f)?(c(h,f,d.hiddenContainer,null,i,d,a,o,s),d.deps<=0?d.resolve():g&&(_||(c(m,p,n,r,i,null,a,o,s),Ea(d,p)))):(d.pendingId=ga++,_?(d.isHydrating=!1,d.activeBranch=h):l(h,i,d),d.deps=0,d.effects.length=0,d.hiddenContainer=u(`div`),g?(c(null,f,d.hiddenContainer,null,i,d,a,o,s),d.deps<=0?d.resolve():(c(m,p,n,r,i,null,a,o,s),Ea(d,p))):m&&Va(m,f)?(c(m,f,n,r,i,d,a,o,s),d.resolve(!0)):(c(null,f,d.hiddenContainer,null,i,d,a,o,s),d.deps<=0&&d.resolve()));else if(m&&Va(m,f))c(m,f,n,r,i,d,a,o,s),Ea(d,f);else if(va(t,`onPending`),d.pendingBranch=f,f.shapeFlag&512?d.pendingId=f.component.suspenseId:d.pendingId=ga++,c(null,f,d.hiddenContainer,null,i,d,a,o,s),d.deps<=0)d.resolve();else{let{timeout:e,pendingId:t}=d;e>0?setTimeout(()=>{d.pendingId===t&&d.fallback(p)},e):e===0&&d.fallback(p)}}function xa(e,t,n,r,i,a,o,s,c,l,u=!1){let{p:d,m:f,um:p,n:m,o:{parentNode:h,remove:g}}=l,_,v=Da(e);v&&t&&t.pendingBranch&&(_=t.pendingId,t.deps++);let y=e.props?ze(e.props.timeout):void 0,b=a,x={vnode:e,parent:t,parentComponent:n,namespace:o,container:r,hiddenContainer:i,deps:0,pendingId:ga++,timeout:typeof y==`number`?y:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(e=!1,n=!1){let{vnode:r,activeBranch:i,pendingBranch:o,pendingId:s,effects:c,parentComponent:l,container:u,isInFallback:d}=x,g=!1;x.isHydrating?x.isHydrating=!1:e||(g=i&&o.transition&&o.transition.mode===`out-in`,g&&(i.transition.afterLeave=()=>{s===x.pendingId&&(f(o,u,a===b?m(i):a,0),Qn(c),d&&r.ssFallback&&(r.ssFallback.el=null))}),i&&(h(i.el)===u&&(a=m(i)),p(i,l,x,!0),!g&&d&&r.ssFallback&&(r.ssFallback.el=null)),g||f(o,u,a,0)),Ea(x,o),x.pendingBranch=null,x.isInFallback=!1;let y=x.parent,S=!1;for(;y;){if(y.pendingBranch){y.effects.push(...c),S=!0;break}y=y.parent}!S&&!g&&Qn(c),x.effects=[],v&&t&&t.pendingBranch&&_===t.pendingId&&(t.deps--,t.deps===0&&!n&&t.resolve()),va(r,`onResolve`)},fallback(e){if(!x.pendingBranch)return;let{vnode:t,activeBranch:n,parentComponent:r,container:i,namespace:a}=x;va(t,`onFallback`);let o=m(n),l=()=>{x.isInFallback&&(d(null,e,i,o,r,null,a,s,c),Ea(x,e))},u=e.transition&&e.transition.mode===`out-in`;u&&(n.transition.afterLeave=l),x.isInFallback=!0,p(n,r,null,!0),u||l()},move(e,t,n){x.activeBranch&&f(x.activeBranch,e,t,n),x.container=e},next(){return x.activeBranch&&m(x.activeBranch)},registerDep(e,t,n){let r=!!x.pendingBranch;r&&x.deps++;let i=e.vnode.el;e.asyncDep.catch(t=>{Bn(t,e,0)}).then(a=>{if(e.isUnmounted||x.isUnmounted||x.pendingId!==e.suspenseId)return;e.asyncResolved=!0;let{vnode:s}=e;po(e,a,!1),i&&(s.el=i);let c=!i&&e.subTree.el;t(e,s,h(i||e.subTree.el),i?null:m(e.subTree),x,o,n),c&&(s.placeholder=null,g(c)),ma(e,s.el),r&&--x.deps===0&&x.resolve()})},unmount(e,t){x.isUnmounted=!0,x.activeBranch&&p(x.activeBranch,n,e,t),x.pendingBranch&&p(x.pendingBranch,n,e,t)}};return x}function Sa(e,t,n,r,i,a,o,s,c){let l=t.suspense=xa(t,r,n,e.parentNode,document.createElement(`div`),null,i,a,o,s,!0),u=c(e,l.pendingBranch=t.ssContent,n,l,a,o);return l.deps===0&&l.resolve(!1,!0),u}function Ca(e){let{shapeFlag:t,children:n}=e,r=t&32;e.ssContent=wa(r?n.default:n),e.ssFallback=r?wa(n.fallback):q(Aa)}function wa(e){let t;if(N(e)){let n=Fa&&e._c;n&&(e._d=!1,Na()),e=e(),n&&(e._d=!0,t=K,Pa())}return M(e)&&(e=la(e)),e=J(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(t=>t!==e)),e}function Ta(e,t){t&&t.pendingBranch?M(e)?t.effects.push(...e):t.effects.push(e):Qn(e)}function Ea(e,t){e.activeBranch=t;let{vnode:n,parentComponent:r}=e,i=t.el;for(;!i&&t.component;)t=t.component.subTree,i=t.el;n.el=i,r&&r.subTree===n&&(r.vnode.el=i,ma(r,i))}function Da(e){let t=e.props&&e.props.suspensible;return t!=null&&t!==!1}var Oa=Symbol.for(`v-fgt`),ka=Symbol.for(`v-txt`),Aa=Symbol.for(`v-cmt`),ja=Symbol.for(`v-stc`),Ma=[],K=null;function Na(e=!1){Ma.push(K=e?null:[])}function Pa(){Ma.pop(),K=Ma[Ma.length-1]||null}var Fa=1;function Ia(e,t=!1){Fa+=e,e<0&&K&&t&&(K.hasOnce=!0)}function La(e){return e.dynamicChildren=Fa>0?K||de:null,Pa(),Fa>0&&K&&K.push(e),e}function Ra(e,t,n,r,i,a){return La(Wa(e,t,n,r,i,a,!0))}function za(e,t,n,r,i){return La(q(e,t,n,r,i,!0))}function Ba(e){return e?e.__v_isVNode===!0:!1}function Va(e,t){return e.type===t.type&&e.key===t.key}var Ha=({key:e})=>e??null,Ua=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:P(e)||V(e)||N(e)?{i:U,r:e,k:t,f:!!n}:e);function Wa(e,t=null,n=null,r=0,i=null,a=e===Oa?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ha(t),ref:t&&Ua(t),scopeId:rr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:U};return s?(Za(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=P(n)?8:16),Fa>0&&!o&&K&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&K.push(c),c}var q=Ga;function Ga(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===qr)&&(e=Aa),Ba(e)){let r=qa(e,t,!0);return n&&Za(r,n),Fa>0&&!a&&K&&(r.shapeFlag&6?K[K.indexOf(e)]=r:K.push(r)),r.patchFlag=-2,r}if(xo(e)&&(e=e.__vccOpts),t){t=Ka(t);let{class:e,style:n}=t;e&&!P(e)&&(t.class=qe(e)),F(n)&&(bn(n)&&!M(n)&&(n=A({},n)),t.style=He(n))}let o=P(e)?1:ha(e)?128:lr(e)?64:F(e)?4:N(e)?2:0;return Wa(e,t,n,r,i,o,a,!0)}function Ka(e){return e?bn(e)||wi(e)?A({},e):e:null}function qa(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?Qa(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Ha(l),ref:t&&t.ref?n&&a?M(a)?a.concat(Ua(t)):[a,Ua(t)]:Ua(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Oa?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&qa(e.ssContent),ssFallback:e.ssFallback&&qa(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&dr(u,c.clone(u)),u}function Ja(e=` `,t=0){return q(ka,null,e,t)}function Ya(e,t){let n=q(ja,null,e);return n.staticCount=t,n}function J(e){return e==null||typeof e==`boolean`?q(Aa):M(e)?q(Oa,null,e.slice()):Ba(e)?Xa(e):q(ka,null,String(e))}function Xa(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:qa(e)}function Za(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(M(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),Za(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!wi(t)?t._ctx=U:r===3&&U&&(U.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else N(t)?(t={default:t,_ctx:U},n=32):(t=String(t),r&64?(n=16,t=[Ja(t)]):n=8);e.children=t,e.shapeFlag|=n}function Qa(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=qe([t.class,r.class]));else if(e===`style`)t.style=He([t.style,r.style]);else if(pe(e)){let n=t[e],i=r[e];i&&n!==i&&!(M(n)&&n.includes(i))&&(t[e]=n?[].concat(n,i):i)}else e!==``&&(t[e]=r[e])}return t}function $a(e,t,n,r=null){zn(e,t,7,[n,r])}var eo=gi(),to=0;function no(e,t,n){let r=e.type,i=(t?t.appContext:e.appContext)||eo,a={uid:to++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new rt(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ai(r,i),emitsOptions:oa(r,i),emit:null,emitted:null,propsDefaults:O,inheritAttrs:r.inheritAttrs,ctx:O,data:O,props:O,attrs:O,slots:O,refs:O,setupState:O,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=ia.bind(null,a),e.ce&&e.ce(a),a}var Y=null,ro=()=>Y||U,io,ao;{let e=Ve(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};io=t(`__VUE_INSTANCE_SETTERS__`,e=>Y=e),ao=t(`__VUE_SSR_SETTERS__`,e=>lo=e)}var oo=e=>{let t=Y;return io(e),e.scope.on(),()=>{e.scope.off(),io(t)}},so=()=>{Y&&Y.scope.off(),io(null)};function co(e){return e.vnode.shapeFlag&4}var lo=!1;function uo(e,t=!1,n=!1){t&&ao(t);let{props:r,children:i}=e.vnode,a=co(e);Ti(e,r,a,t),Ri(e,i,n||t);let o=a?fo(e,t):void 0;return t&&ao(!1),o}function fo(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ei);let{setup:r}=n;if(r){xt();let n=e.setupContext=r.length>1?vo(e):null,i=oo(e),a=Rn(r,e,0,[e.props,n]),o=xe(a);if(St(),i(),(o||e.sp)&&!Dr(e)&&pr(e),o){if(a.then(so,so),t)return a.then(n=>{po(e,n,t)}).catch(t=>{Bn(t,e,0)});e.asyncDep=a}else po(e,a,t)}else go(e,t)}function po(e,t,n){N(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:F(t)&&(e.setupState=kn(t)),go(e,n)}var mo,ho;function go(e,t,n){let r=e.type;if(!e.render){if(!t&&mo&&!r.render){let t=r.template||si(e).template;if(t){let{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:o}=r;r.render=mo(t,A(A({isCustomElement:n,delimiters:a},i),o))}}e.render=r.render||k,ho&&ho(e)}{let t=oo(e);xt();try{ri(e)}finally{St(),t()}}}var _o={get(e,t){return R(e,`get`,``),e[t]}};function vo(e){return{attrs:new Proxy(e.attrs,_o),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function yo(e){return e.exposed?e.exposeProxy||=new Proxy(kn(xn(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Qr)return Qr[n](e)},has(e,t){return t in e||t in Qr}}):e.proxy}function bo(e,t=!0){return N(e)?e.displayName||e.name:e.name||t&&e.__name}function xo(e){return N(e)&&`__vccOpts`in e}var So=(e,t)=>jn(e,t,lo);function Co(e,t,n){try{Ia(-1);let r=arguments.length;return r===2?F(t)&&!M(t)?Ba(t)?q(e,null,[t]):q(e,t):q(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ba(n)&&(n=[n]),q(e,t,n))}finally{Ia(1)}}var wo=`3.5.24`,To=void 0,Eo=typeof window<`u`&&window.trustedTypes;if(Eo)try{To=Eo.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Do=To?e=>To.createHTML(e):e=>e,Oo=`http://www.w3.org/2000/svg`,ko=`http://www.w3.org/1998/Math/MathML`,Ao=typeof document<`u`?document:null,jo=Ao&&Ao.createElement(`template`),Mo={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?Ao.createElementNS(Oo,e):t===`mathml`?Ao.createElementNS(ko,e):n?Ao.createElement(e,{is:n}):Ao.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>Ao.createTextNode(e),createComment:e=>Ao.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ao.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{jo.innerHTML=Do(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=jo.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},No=Symbol(`_vtc`);function Po(e,t,n){let r=e[No];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Fo=Symbol(`_vod`),Io=Symbol(`_vsh`),Lo=Symbol(``),Ro=/(?:^|;)\s*display\s*:/;function zo(e,t,n){let r=e.style,i=P(n),a=!1;if(n&&!i){if(t)if(P(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Vo(r,t,``)}else for(let e in t)n[e]??Vo(r,e,``);for(let e in n)e===`display`&&(a=!0),Vo(r,e,n[e])}else if(i){if(t!==n){let e=r[Lo];e&&(n+=`;`+e),r.cssText=n,a=Ro.test(n)}}else t&&e.removeAttribute(`style`);Fo in e&&(e[Fo]=a?r.display:``,e[Io]&&(r.display=`none`))}var Bo=/\s*!important$/;function Vo(e,t,n){if(M(n))n.forEach(n=>Vo(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=Wo(e,t);Bo.test(n)?e.setProperty(Me(r),n.replace(Bo,``),`important`):e[r]=n}}var Ho=[`Webkit`,`Moz`,`ms`],Uo={};function Wo(e,t){let n=Uo[t];if(n)return n;let r=Ae(t);if(r!==`filter`&&r in e)return Uo[t]=r;r=Ne(r);for(let n=0;n<Ho.length;n++){let i=Ho[n]+r;if(i in e)return Uo[t]=i}return t}var Go=`http://www.w3.org/1999/xlink`;function Ko(e,t,n,r,i,a=Ye(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Go,t.slice(6,t.length)):e.setAttributeNS(Go,t,n):n==null||a&&!Xe(n)?e.removeAttribute(t):e.setAttribute(t,a?``:be(n)?String(n):n)}function qo(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Do(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=Xe(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Jo(e,t,n,r){e.addEventListener(t,n,r)}function Yo(e,t,n,r){e.removeEventListener(t,n,r)}var Xo=Symbol(`_vei`);function Zo(e,t,n,r,i=null){let a=e[Xo]||(e[Xo]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=$o(t);r?Jo(e,n,a[t]=rs(r,i),s):o&&(Yo(e,n,o,s),a[t]=void 0)}}var Qo=/(?:Once|Passive|Capture)$/;function $o(e){let t;if(Qo.test(e)){t={};let n;for(;n=e.match(Qo);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):Me(e.slice(2)),t]}var es=0,ts=Promise.resolve(),ns=()=>es||=(ts.then(()=>es=0),Date.now());function rs(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;zn(is(e,n.value),t,5,[e])};return n.value=e,n.attached=ns(),n}function is(e,t){if(M(t)){let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}else return t}var as=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,os=(e,t,n,r,i,a)=>{let o=i===`svg`;t===`class`?Po(e,r,o):t===`style`?zo(e,n,r):pe(t)?me(t)||Zo(e,t,n,r,a):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):ss(e,t,r,o))?(qo(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Ko(e,t,r,o,a,t!==`value`)):e._isVueCE&&(/[A-Z]/.test(t)||!P(r))?qo(e,Ae(t),r,a,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Ko(e,t,r,o))};function ss(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&as(t)&&N(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return as(t)&&P(n)?!1:t in e}var cs=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return M(t)?e=>Ie(t,e):t},ls=Symbol(`_assign`),us={created(e,{value:t},n){e.checked=Qe(t,n.props.value),e[ls]=cs(n),Jo(e,`change`,()=>{e[ls](ds(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e[ls]=cs(r),t!==n&&(e.checked=Qe(t,r.props.value))}};function ds(e){return`_value`in e?e._value:e.value}var fs=A({patchProp:os},Mo),ps,ms=!1;function hs(){return ps||=Bi(fs)}function gs(){return ps=ms?ps:Vi(fs),ms=!0,ps}var _s=((...e)=>{let t=hs().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=bs(e);if(!r)return;let i=t._component;!N(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,ys(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t}),vs=((...e)=>{let t=gs().createApp(...e),{mount:n}=t;return t.mount=e=>{let t=bs(e);if(t)return n(t,!0,ys(t))},t});function ys(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function bs(e){return P(e)?document.querySelector(e):e}var xs=`usehead`;function Ss(e){return{install(t){t.config.globalProperties.$unhead=e,t.config.globalProperties.$head=e,t.provide(xs,e)}}.install}function Cs(e={}){let t=le({domOptions:{render:ue(()=>ce(t),e=>setTimeout(e,0))},...e});return t.install=Ss(t),t}var ws=`modulepreload`,Ts=function(e){return`/aboutme/`+e},Es={};const Ds=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=Ts(t,n),t in Es)return;Es[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:ws,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};var Os=typeof document<`u`;function ks(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function As(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&ks(e.default)}var X=Object.assign;function js(e,t){let n={};for(let r in t){let i=t[r];n[r]=Ns(i)?i.map(e):e(i)}return n}var Ms=()=>{},Ns=Array.isArray;function Ps(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var Fs=/#/g,Is=/&/g,Ls=/\//g,Rs=/=/g,zs=/\?/g,Bs=/\+/g,Vs=/%5B/g,Hs=/%5D/g,Us=/%5E/g,Ws=/%60/g,Gs=/%7B/g,Ks=/%7C/g,qs=/%7D/g,Js=/%20/g;function Ys(e){return e==null?``:encodeURI(``+e).replace(Ks,`|`).replace(Vs,`[`).replace(Hs,`]`)}function Xs(e){return Ys(e).replace(Gs,`{`).replace(qs,`}`).replace(Us,`^`)}function Zs(e){return Ys(e).replace(Bs,`%2B`).replace(Js,`+`).replace(Fs,`%23`).replace(Is,`%26`).replace(Ws,"`").replace(Gs,`{`).replace(qs,`}`).replace(Us,`^`)}function Qs(e){return Zs(e).replace(Rs,`%3D`)}function $s(e){return Ys(e).replace(Fs,`%23`).replace(zs,`%3F`)}function ec(e){return $s(e).replace(Ls,`%2F`)}function tc(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var nc=/\/$/,rc=e=>e.replace(nc,``);function ic(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=fc(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:tc(o)}}function ac(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function oc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function sc(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&cc(t.matched[r],n.matched[i])&&lc(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function cc(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function lc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(!uc(e[n],t[n]))return!1;return!0}function uc(e,t){return Ns(e)?dc(e,t):Ns(t)?dc(t,e):e===t}function dc(e,t){return Ns(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function fc(e,t){if(e.startsWith(`/`))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`)if(s===`..`)a>1&&a--;else break;return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var pc={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0},mc=function(e){return e.pop=`pop`,e.push=`push`,e}({}),hc=function(e){return e.back=`back`,e.forward=`forward`,e.unknown=``,e}({});function gc(e){if(!e)if(Os){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^\/]+/,``)}else e=`/`;return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),rc(e)}var _c=/^[^#]+#/;function vc(e,t){return e.replace(_c,`#`)+t}function yc(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var bc=()=>({left:window.scrollX,top:window.scrollY});function xc(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=yc(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function Sc(e,t){return(history.state?history.state.position-t:-1)+e}var Cc=new Map;function wc(e,t){Cc.set(e,t)}function Tc(e){let t=Cc.get(e);return Cc.delete(e),t}function Ec(e){return typeof e==`string`||e&&typeof e==`object`}function Dc(e){return typeof e==`string`||typeof e==`symbol`}var Z=function(e){return e[e.MATCHER_NOT_FOUND=1]=`MATCHER_NOT_FOUND`,e[e.NAVIGATION_GUARD_REDIRECT=2]=`NAVIGATION_GUARD_REDIRECT`,e[e.NAVIGATION_ABORTED=4]=`NAVIGATION_ABORTED`,e[e.NAVIGATION_CANCELLED=8]=`NAVIGATION_CANCELLED`,e[e.NAVIGATION_DUPLICATED=16]=`NAVIGATION_DUPLICATED`,e}({}),Oc=Symbol(``);Z.MATCHER_NOT_FOUND,Z.NAVIGATION_GUARD_REDIRECT,Z.NAVIGATION_ABORTED,Z.NAVIGATION_CANCELLED,Z.NAVIGATION_DUPLICATED;function kc(e,t){return X(Error(),{type:e,[Oc]:!0},t)}function Ac(e,t){return e instanceof Error&&Oc in e&&(t==null||!!(e.type&t))}function jc(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(Bs,` `),i=r.indexOf(`=`),a=tc(i<0?r:r.slice(0,i)),o=i<0?null:tc(r.slice(i+1));if(a in t){let e=t[a];Ns(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function Mc(e){let t=``;for(let n in e){let r=e[n];if(n=Qs(n),r==null){r!==void 0&&(t+=(t.length?`&`:``)+n);continue}(Ns(r)?r.map(e=>e&&Zs(e)):[r&&Zs(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function Nc(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=Ns(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}var Pc=Symbol(``),Fc=Symbol(``),Ic=Symbol(``),Lc=Symbol(``),Rc=Symbol(``);function zc(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Bc(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(kc(Z.NAVIGATION_ABORTED,{from:n,to:t})):e instanceof Error?c(e):Ec(e)?c(kc(Z.NAVIGATION_GUARD_REDIRECT,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function Vc(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(!(t!==`beforeRouteEnter`&&!o.instances[e]))if(ks(s)){let c=(s.__vccOpts||s)[t];c&&a.push(Bc(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=As(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&Bc(c,n,r,o,e,i)()}))}}return a}function Hc(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>cc(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>cc(e,s))||i.push(s))}return[n,r,i]}
/*!
* vue-router v4.6.3
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
var Uc=()=>location.protocol+`//`+location.host;function Wc(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),oc(n,``)}return oc(n,e)+r+i}function Gc(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=Wc(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:mc.pop,direction:u?u>0?hc.forward:hc.back:hc.unknown})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){if(document.visibilityState===`hidden`){let{history:e}=window;if(!e.state)return;e.replaceState(X({},e.state,{scroll:bc()}),``)}}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u),document.removeEventListener(`visibilitychange`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),document.addEventListener(`visibilitychange`,u),{pauseListeners:c,listen:l,destroy:d}}function Kc(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?bc():null}}function qc(e){let{history:t,location:n}=window,r={value:Wc(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:Uc()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,X({},t.state,Kc(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=X({},i.value,t.state,{forward:e,scroll:bc()});a(o.current,o,!0),a(e,X({},Kc(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function Jc(e){e=gc(e);let t=qc(e),n=Gc(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=X({location:``,base:e,go:r,createHref:vc.bind(null,e)},t,n);return Object.defineProperty(i,`location`,{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,`state`,{enumerable:!0,get:()=>t.state.value}),i}var Yc=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.Group=2]=`Group`,e}({}),Q=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.ParamRegExp=2]=`ParamRegExp`,e[e.ParamRegExpEnd=3]=`ParamRegExpEnd`,e[e.EscapeNext=4]=`EscapeNext`,e}(Q||{}),Xc={type:Yc.Static,value:``},Zc=/[a-zA-Z0-9_]/;function Qc(e){if(!e)return[[]];if(e===`/`)return[[Xc]];if(!e.startsWith(`/`))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=Q.Static,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===Q.Static?a.push({type:Yc.Static,value:l}):n===Q.Param||n===Q.ParamRegExp||n===Q.ParamRegExpEnd?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:Yc.Param,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;){if(c=e[s++],c===`\\`&&n!==Q.ParamRegExp){r=n,n=Q.EscapeNext;continue}switch(n){case Q.Static:c===`/`?(l&&d(),o()):c===`:`?(d(),n=Q.Param):f();break;case Q.EscapeNext:f(),n=r;break;case Q.Param:c===`(`?n=Q.ParamRegExp:Zc.test(c)?f():(d(),n=Q.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case Q.ParamRegExp:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=Q.ParamRegExpEnd:u+=c;break;case Q.ParamRegExpEnd:d(),n=Q.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`);break}}return n===Q.ParamRegExp&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var $c=`[^/]+?`,el={sensitive:!1,strict:!1,start:!0,end:!0},$=function(e){return e[e._multiplier=10]=`_multiplier`,e[e.Root=90]=`Root`,e[e.Segment=40]=`Segment`,e[e.SubSegment=30]=`SubSegment`,e[e.Static=40]=`Static`,e[e.Dynamic=20]=`Dynamic`,e[e.BonusCustomRegExp=10]=`BonusCustomRegExp`,e[e.BonusWildcard=-50]=`BonusWildcard`,e[e.BonusRepeatable=-20]=`BonusRepeatable`,e[e.BonusOptional=-8]=`BonusOptional`,e[e.BonusStrict=.7000000000000001]=`BonusStrict`,e[e.BonusCaseSensitive=.25]=`BonusCaseSensitive`,e}($||{}),tl=/[.+*?^${}()[\]/\\]/g;function nl(e,t){let n=X({},el,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[$.Root];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=$.Segment+(n.sensitive?$.BonusCaseSensitive:0);if(o.type===Yc.Static)r||(i+=`/`),i+=o.value.replace(tl,`\\$&`),s+=$.Static;else if(o.type===Yc.Param){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||$c;if(u!==$c){s+=$.BonusCustomRegExp;try{`${u}`}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=$.Dynamic,c&&(s+=$.BonusOptional),n&&(s+=$.BonusRepeatable),u===`.*`&&(s+=$.BonusWildcard)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=$.BonusStrict}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){(!r||!n.endsWith(`/`))&&(n+=`/`),r=!1;for(let e of i)if(e.type===Yc.Static)n+=e.value;else if(e.type===Yc.Param){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(Ns(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=Ns(c)?c.join(`/`):c;if(!l)if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`);n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function rl(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===$.Static+$.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===$.Static+$.Segment?1:-1:0}function il(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=rl(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(al(r))return 1;if(al(i))return-1}return i.length-r.length}function al(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var ol={strict:!1,end:!0,sensitive:!1};function sl(e,t,n){let r=X(nl(Qc(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function cl(e,t){let n=[],r=new Map;t=Ps(ol,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=ul(e);s.aliasOf=r&&r.record;let l=Ps(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(ul(X({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&u[0]!==`/`){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=sl(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!fl(d)&&o(e.name)),gl(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:Ms}function o(e){if(Dc(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=ml(e,n);n.splice(t,0,e),e.record.name&&!fl(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw kc(Z.MATCHER_NOT_FOUND,{location:e});s=i.record.name,a=X(ll(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&ll(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw kc(Z.MATCHER_NOT_FOUND,{location:e,currentLocation:t});s=i.record.name,a=X({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:pl(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function ll(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function ul(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:dl(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,`mods`,{value:{}}),t}function dl(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function fl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function pl(e){return e.reduce((e,t)=>X(e,t.meta),{})}function ml(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;il(e,t[i])<0?r=i:n=i+1}let i=hl(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function hl(e){let t=e;for(;t=t.parent;)if(gl(t)&&il(e,t)===0)return t}function gl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function _l(e){let t=xi(Ic),n=xi(Lc),r=So(()=>{let n=Dn(e.to);return t.resolve(n)}),i=So(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(cc.bind(null,i));if(o>-1)return o;let s=Sl(e[t-2]);return t>1&&Sl(i)===s&&a[a.length-1].path!==s?a.findIndex(cc.bind(null,e[t-2])):o}),a=So(()=>i.value>-1&&xl(n.params,r.value.params)),o=So(()=>i.value>-1&&i.value===n.matched.length-1&&lc(n.params,r.value.params));function s(n={}){if(bl(n)){let n=t[Dn(e.replace)?`replace`:`push`](Dn(e.to)).catch(Ms);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:So(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function vl(e){return e.length===1?e[0]:e}var yl=fr({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:_l,setup(e,{slots:t}){let n=pn(_l(e)),{options:r}=xi(Ic),i=So(()=>({[Cl(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[Cl(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&vl(t.default(n));return e.custom?r:Co(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function bl(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function xl(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(!Ns(i)||i.length!==r.length||r.some((e,t)=>e!==i[t]))return!1}return!0}function Sl(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var Cl=(e,t,n)=>e??t??n,wl=fr({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=xi(Rc),i=So(()=>e.route||r.value),a=xi(Fc,0),o=So(()=>{let e=Dn(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=So(()=>i.value.matched[o.value]);bi(Fc,So(()=>o.value+1)),bi(Pc,s),bi(Rc,i);let c=Cn();return $i(()=>[c.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),e&&t&&(!i||!cc(t,i)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,l=o&&o.components[a];if(!l)return Tl(n.default,{Component:l,route:r});let u=o.props[a],d=Co(l,X({},u?u===!0?r.params:typeof u==`function`?u(r):u:null,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:c}));return Tl(n.default,{Component:d,route:r})||d}}});function Tl(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var El=wl;function Dl(e){let t=cl(e.routes,e),n=e.parseQuery||jc,r=e.stringifyQuery||Mc,i=e.history,a=zc(),o=zc(),s=zc(),c=wn(pc),l=pc;Os&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let u=js.bind(null,e=>``+e),d=js.bind(null,ec),f=js.bind(null,tc);function p(e,n){let r,i;return Dc(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function m(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function h(){return t.getRoutes().map(e=>e.record)}function g(e){return!!t.getRecordMatcher(e)}function _(e,a){if(a=X({},a||c.value),typeof e==`string`){let r=ic(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return X(r,o,{params:f(o.params),hash:tc(r.hash),redirectedFrom:void 0,href:s})}let o;if(e.path!=null)o=X({},e,{path:ic(n,e.path,a.path).path});else{let t=X({},e.params);for(let e in t)t[e]??delete t[e];o=X({},e,{params:d(t)}),a.params=d(a.params)}let s=t.resolve(o,a),l=e.hash||``;s.params=u(f(s.params));let p=ac(r,X({},e,{hash:Xs(l),path:s.path})),m=i.createHref(p);return X({fullPath:p,hash:l,query:r===Mc?Nc(e.query):e.query||{}},s,{redirectedFrom:void 0,href:m})}function v(e){return typeof e==`string`?ic(n,e,c.value.path):X({},e)}function y(e,t){if(l!==e)return kc(Z.NAVIGATION_CANCELLED,{from:t,to:e})}function b(e){return C(e)}function x(e){return b(X(v(e),{replace:!0}))}function S(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=v(i):{path:i},i.params={}),X({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function C(e,t){let n=l=_(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,u=S(n,i);if(u)return C(X(v(u),{state:typeof u==`object`?X({},a,u.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&sc(r,i,n)&&(f=kc(Z.NAVIGATION_DUPLICATED,{to:d,from:i}),ue(i,i,!0,!1)),(f?Promise.resolve(f):w(d,i)).catch(e=>Ac(e)?Ac(e,Z.NAVIGATION_GUARD_REDIRECT)?e:le(e):se(e,d,i)).then(e=>{if(e){if(Ac(e,Z.NAVIGATION_GUARD_REDIRECT))return C(X({replace:s},v(e.to),{state:typeof e.to==`object`?X({},a,e.to.state):a,force:o}),t||d)}else e=ne(d,i,!0,s,a);return T(d,i,e),e})}function ee(e,t){let n=y(e,t);return n?Promise.reject(n):Promise.resolve()}function te(e){let t=de.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function w(e,t){let n,[r,i,s]=Hc(e,t);n=Vc(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(Bc(r,e,t))});let c=ee.bind(null,e,t);return n.push(c),fe(n).then(()=>{n=[];for(let r of a.list())n.push(Bc(r,e,t));return n.push(c),fe(n)}).then(()=>{n=Vc(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(Bc(r,e,t))});return n.push(c),fe(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter)if(Ns(r.beforeEnter))for(let i of r.beforeEnter)n.push(Bc(i,e,t));else n.push(Bc(r.beforeEnter,e,t));return n.push(c),fe(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=Vc(s,`beforeRouteEnter`,e,t,te),n.push(c),fe(n))).then(()=>{n=[];for(let r of o.list())n.push(Bc(r,e,t));return n.push(c),fe(n)}).catch(e=>Ac(e,Z.NAVIGATION_CANCELLED)?e:Promise.reject(e))}function T(e,t,n){s.list().forEach(r=>te(()=>r(e,t,n)))}function ne(e,t,n,r,a){let o=y(e,t);if(o)return o;let s=t===pc,l=Os?history.state:{};n&&(r||s?i.replace(e.fullPath,X({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,ue(e,t,n,s),le()}let re;function ie(){re||=i.listen((e,t,n)=>{if(!k.listening)return;let r=_(e),a=S(r,k.currentRoute.value);if(a){C(X(a,{replace:!0,force:!0}),r).catch(Ms);return}l=r;let o=c.value;Os&&wc(Sc(o.fullPath,n.delta),bc()),w(r,o).catch(e=>Ac(e,Z.NAVIGATION_ABORTED|Z.NAVIGATION_CANCELLED)?e:Ac(e,Z.NAVIGATION_GUARD_REDIRECT)?(C(X(v(e.to),{force:!0}),r).then(e=>{Ac(e,Z.NAVIGATION_ABORTED|Z.NAVIGATION_DUPLICATED)&&!n.delta&&n.type===mc.pop&&i.go(-1,!1)}).catch(Ms),Promise.reject()):(n.delta&&i.go(-n.delta,!1),se(e,r,o))).then(e=>{e||=ne(r,o,!1),e&&(n.delta&&!Ac(e,Z.NAVIGATION_CANCELLED)?i.go(-n.delta,!1):n.type===mc.pop&&Ac(e,Z.NAVIGATION_ABORTED|Z.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),T(r,o,e)}).catch(Ms)})}let E=zc(),ae=zc(),oe;function se(e,t,n){le(e);let r=ae.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function ce(){return oe&&c.value!==pc?Promise.resolve():new Promise((e,t)=>{E.add([e,t])})}function le(e){return oe||(oe=!e,ie(),E.list().forEach(([t,n])=>e?n(e):t()),E.reset()),e}function ue(t,n,r,i){let{scrollBehavior:a}=e;if(!Os||!a)return Promise.resolve();let o=!r&&Tc(Sc(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return Jn().then(()=>a(t,n,o)).then(e=>e&&xc(e)).catch(e=>se(e,t,n))}let D=e=>i.go(e),O,de=new Set,k={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:h,resolve:_,options:e,push:b,replace:x,go:D,back:()=>D(-1),forward:()=>D(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:ae.add,isReady:ce,install(e){e.component(`RouterLink`,yl),e.component(`RouterView`,El),e.config.globalProperties.$router=k,Object.defineProperty(e.config.globalProperties,`$route`,{enumerable:!0,get:()=>Dn(c)}),Os&&!O&&c.value===pc&&(O=!0,b(i.location).catch(e=>{}));let t={};for(let e in pc)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(Ic,k),e.provide(Lc,mn(t)),e.provide(Rc,c);let n=e.unmount;de.add(e),e.unmount=function(){de.delete(e),de.size<1&&(l=pc,re&&re(),re=null,c.value=pc,O=!1,oe=!1),n()}}};function fe(e){return e.reduce((e,t)=>e.then(()=>te(t)),Promise.resolve())}return k}function Ol(e){return xi(Lc)}function kl(e){return document.readyState===`loading`?new Promise(t=>{document.addEventListener(`DOMContentLoaded`,()=>t(e))}):Promise.resolve(e)}var Al=fr({setup(e,{slots:t}){let n=Cn(!1);return Ir(()=>n.value=!0),()=>n.value?t.default&&t.default({}):t.placeholder&&t.placeholder({})}});function jl(e){try{return JSON.parse(e||`{}`)}catch(t){return console.error(`[SSG] On state deserialization -`,t,e),{}}}function Ml(e,t,n,r){let{transformState:i,registerComponents:a=!0,useHead:o=!0,rootContainer:s=`#app`}=r??{};async function c(s){let c=r?.hydration?vs(e):_s(e),l;o&&c.use(l=Cs());let u=Dl({history:Jc(t.base),...t}),{routes:d}=t;a&&c.component(`ClientOnly`,Al);let f=[],p={app:c,head:l,isClient:!0,router:u,routes:d,onSSRAppRendered:()=>{},triggerOnSSRAppRendered:()=>Promise.all(f.map(e=>e())),initialState:{},transformState:i,routePath:s};await kl(),p.initialState=i?.(window.__INITIAL_STATE__||{})||jl(window.__INITIAL_STATE__),await n?.(p),c.use(u);let m,h=!0;u.beforeEach((e,t,n)=>{(h||m&&m===e.path)&&(h=!1,m=e.path,e.meta.state=p.initialState),n()});let g=p.initialState;return{...p,initialState:g}}return(async()=>{let{app:e,router:t}=await c();await t.isReady(),e.mount(s,!0)})(),c}var Nl={class:`mx-auto w-full p-4 md:max-w-[56%] md:p-8`},Pl=fr({__name:`App`,setup(e){return(e,t)=>(Na(),Ra(`main`,Nl,[(Na(),za(_a,null,{fallback:ar(()=>[...t[0]||=[Wa(`div`,null,`loading...`,-1)]]),default:ar(()=>[q(Dn(El))]),_:1}))]))}});const Fl=[{path:`/`,name:`/`,component:()=>Ds(()=>import(`./pages-CTvbBCbB.js`),[])},{path:`/:id`,name:`/[id]`,component:()=>Ds(()=>import(`./_id_-6Qp2R2Pu.js`),__vite__mapDeps([0,1]))}];var Il={items:[{path:`/home/runner/work/aboutme/aboutme/src/content/record/2023-4-18.md`,raw:`---
date: 2023/04/18 10:56
---

行情比预想的要差，简历发出去约不到面试，竟然在家呆了快一个月，难以想象。目前没有太多想做的，专心搞面试题。
`,title:`2023-4-18`,date:`2023/04/18 10:56`,year:2023,category:`record`,render:`<p>行情比预想的要差，简历发出去约不到面试，竟然在家呆了快一个月，难以想象。目前没有太多想做的，专心搞面试题。</p>
`},{path:`/home/runner/work/aboutme/aboutme/src/content/record/2023-4-21.md`,raw:`---
date: 2023/04/21 11:42
---

依旧找不到面试，修改了简历，等待下周再试，五一前大概是约不到面试了。今天下小雨，突然得知了一个消息，心情变得很糟糕。还要改 \`Varlet\` 的 \`input\` ，陷入困局，希望一切都好。
`,title:`2023-4-21`,date:`2023/04/21 11:42`,year:2023,category:`record`,render:`<p>依旧找不到面试，修改了简历，等待下周再试，五一前大概是约不到面试了。今天下小雨，突然得知了一个消息，心情变得很糟糕。还要改 <code>Varlet</code> 的 <code>input</code> ，陷入困局，希望一切都好。</p>
`},{path:`/home/runner/work/aboutme/aboutme/src/content/record/2023-4-3.md`,raw:`---
date: 2023/04/03 19:46
---

天气不是很好，下了一天的雨，虽然对我也没什么影响。

回家有 10 天了，感觉什么都没做，今天开放了简历，明天开始正式找工作，希望一切能 ok，也许困难很多，但也得去做。

列一下要做的事：

- 第一要紧的是找工作，优先投递简历。
- 明天写一下 \`computed\` 为什么会缓存数据。
- 看面经。
- 搞 \`varlet\` 的 \`input\` 和 \`select\` 组件。
`,title:`2023-4-3`,date:`2023/04/03 19:46`,year:2023,category:`record`,render:`<p>天气不是很好，下了一天的雨，虽然对我也没什么影响。</p>
<p>回家有 10 天了，感觉什么都没做，今天开放了简历，明天开始正式找工作，希望一切能 ok，也许困难很多，但也得去做。</p>
<p>列一下要做的事：</p>
<ul>
<li>第一要紧的是找工作，优先投递简历。</li>
<li>明天写一下 <code>computed</code> 为什么会缓存数据。</li>
<li>看面经。</li>
<li>搞 <code>varlet</code> 的 <code>input</code> 和 <code>select</code> 组件。</li>
</ul>
`},{path:`/home/runner/work/aboutme/aboutme/src/content/record/2025-11-14.md`,raw:`---
date: 2025/11/14 11:32
---

天气不错，很好很好很好

---
*原文来自 [Issue #12](https://github.com/a145789/aboutme/issues/12)*
`,title:`2025-11-14`,date:`2025/11/14 11:32`,year:2025,category:`record`,render:`<p>天气不错，很好很好很好</p>
<hr>
<p><em>原文来自 <a href="https://github.com/a145789/aboutme/issues/12" target="_blank" rel="noopener noreferrer">Issue #12</a></em></p>
`},{path:`/home/runner/work/aboutme/aboutme/src/content/record/2025-11-7.md`,raw:`---
date: 2025/11/07 21:16
---

下了一点雨

---
*原文来自 [Issue #10](https://github.com/a145789/aboutme/issues/10)*
`,title:`2025-11-7`,date:`2025/11/07 21:16`,year:2025,category:`record`,render:`<p>下了一点雨</p>
<hr>
<p><em>原文来自 <a href="https://github.com/a145789/aboutme/issues/10" target="_blank" rel="noopener noreferrer">Issue #10</a></em></p>
`},{path:`/home/runner/work/aboutme/aboutme/src/content/record/first.md`,raw:`---
date: 2023/03/25 14:02
---

天气一般，博客基本完成。
`,title:`first`,date:`2023/03/25 14:02`,year:2023,category:`record`,render:`<p>天气一般，博客基本完成。</p>
`},{path:`/home/runner/work/aboutme/aboutme/src/content/blog/Object.defineProperty Vs Proxy性能比较.md`,raw:`---
date: 2024/01/16 09:52
---

逛掘金的时候经常能刷到关于 \`Vue\` 响应式原理的文章， 经常能看到 \`Vue3\` 弃用 \`Object.defineProperty\` 转而使用 \`Proxy\` 来实现的原因是 \`Proxy 性能更好\` 。看的多了还能刷到一些文章认为 \`Object.defineProperty\` 性能更好，因此自己创建了一个小 [demo](https://github.com/a145789/object-defineproperty-vs-proxy) 来对比二者在不同场景下的性能。

> 以下测试仅在 \`谷歌浏览器\` 中进行，不同浏览器内核不同，结果可能有差异。可以访问此 [在线地址](https://a145789.github.io/object-defineproperty-vs-proxy/) 测试其他环境下的性能。

# 封装响应式

本文不会详细解析基于 \`Object.defineProperty\` 和 \`Proxy\` 的封装代码，这些内容在多数文章中已有介绍。\`Vue3\` 对嵌套对象的响应式处理进行了优化，采用了一种\`惰性添加\`的方式，仅在对象被访问时才添加响应式。相比之下，\`Vue2\` 采用了一次性递归处理整个对象的方式添加响应式。为了确保比较的公平性，本文下面的 \`Object.defineProperty\` 代码也采用了相同的惰性添加策略。

## Object.defineProperty

\`\`\`js
/** Object.defineProperty 深度监听 */
export function deepDefObserve(obj, week) {
  const keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    let value = obj[key]

    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      get() {
        if (typeof value === 'object' && value !== null && week && !week.has(value)) {
          week.set(value, true)
          deepDefObserve(value)
        }
        return value
      },
      set(newValue) {
        value = newValue
      },
    })
  }
  return obj
}
\`\`\`

## Proxy

\`\`\`js
/** Proxy 深度监听 */
export function deepProxy(obj, proxyWeek) {
  const myProxy = new Proxy(obj, {
    get(target, property) {
      const res = Reflect.get(target, property)
      if (typeof res === 'object' && res !== null && proxyWeek && !proxyWeek.has(res)) {
        proxyWeek.set(res, true)
        return deepProxy(res)
      }
      return res
    },
    set(target, property, value) {
      return Reflect.set(target, property, value)
    },
  })
  return myProxy
}
\`\`\`

# 测试性能

测试场景有五个：

1. 使用两个 \`API\` 创建响应式对象的耗时，即 \`const obj = reactive({})\` 的耗时
2. 测量对已创建的响应式对象的属性进行访问的速度，即 \`obj.a\` 的读取时间。
3. 测量修改响应式对象属性值的耗时，即执行 \`obj.a = 1\` 所需的时间。
4. 创建多个响应式对象，并模拟访问和修改它们属性的操作，以评估在多对象场景下的性能表现。
5. 针对嵌套对象进行响应式性能测试，以评估在复杂数据结构下的性能表现。

## 初始化性能

\`\`\`js
const _0_calling = {
  useObjectDefineProperty() {
    const data = { a: 1, b: 1, c: 1, d: 1, e: 1 }
    const keys = Object.keys(data)
    for (let i = 0; i < keys.length; i++) {
      Object.defineProperty(data, keys[i], {
        get() {},
        set() {},
      })
    }
  },
  useProxy() {
    const data = { a: 1, b: 1, c: 1, d: 1, e: 1 }
    const proxy = new Proxy(data, {
      get() {},
      set() {},
    })
  },
}
\`\`\`

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1ede8a5c56604d7da9cec5ca81b3a845~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1160&h=474&s=47379&e=png&b=ffffff)

很明显，\`Proxy\` 的性能优于 \`Object.defineProperty\`。

## 读取性能

\`\`\`js
const readDefData = deepDefObserve({ a: 1, b: 1, c: 1, d: 1, e: 1 })
const readProxyData = deepProxy({ a: 1, b: 1, c: 1, d: 1, e: 1 })
export const _1_read = {
  useObjectDefineProperty() {
    readDefData.a
    readDefData.b
    readDefData.e
  },
  useProxy() {
    readProxyData.a
    readProxyData.b
    readProxyData.e
  },
}
\`\`\`

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4408d9066b7c42629b18d408cba16967~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1172&h=488&s=48433&e=png&b=ffffff)

\`Object.defineProperty\` 明显优于 \`Proxy\`。

## 写入性能

\`\`\`js
const writeDefData = deepDefObserve({ a: 1, b: 1, c: 1, d: 1, e: 1 })
const writeProxyData = deepProxy({ a: 1, b: 1, c: 1, d: 1, e: 1 })
export const _2_write = {
  count: 2,
  useObjectDefineProperty() {
    writeDefData.a = _2_write.count++
    writeDefData.b = _2_write.count++
  },
  useProxy() {
    writeProxyData.a = _2_write.count++
    writeProxyData.b = _2_write.count++
  },
}
\`\`\`

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/550fda8e434041d2beb66c7e8131be1c~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1161&h=481&s=48286&e=png&b=ffffff)

\`Object.defineProperty\` 优于 \`Proxy\`，不过差距不大。

## 多次创建及读写

\`\`\`js
export const _4_create_read_write = {
  count: 2,
  useObjectDefineProperty() {
    const data = { a: 1, b: 1, c: 1, d: 1, e: 1 }
    deepDefObserve(data)
    data.a = _4_create_read_write.count++
    data.b = _4_create_read_write.count++
    data.a
    data.c
  },
  proxyWeek: new WeakMap(),
  useProxy() {
    const data = { a: 1, b: 1, c: 1, d: 1, e: 1 }
    const proxy = deepProxy(data, _4_create_read_write.proxyWeek)
    proxy.a = _4_create_read_write.count++
    proxy.b = _4_create_read_write.count++
    proxy.a
    proxy.c
  },
}
\`\`\`

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c29719b242b840c383a5848de73b3a4f~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1164&h=474&s=50534&e=png&b=ffffff)

\`Proxy\` 优势更大，但这个场景并不多见，很少会出现一次性创建大量响应式对象的情况，对属性的读写场景更多。

## 对嵌套对象的性能

### 对内部的每个属性都进行读或写操作

\`\`\`js
const deepProxyWeek = new WeakMap()
const defWeek = new WeakMap()
export const _5_deep_read_write = {
  count: 2,
  defData: deepDefObserve(
    {
      res: {
        code: 200,
        message: {
          error: null,
        },
        data: [
          {
            id: 1,
            name: '1',
          },
          {
            id: 2,
            name: '2',
          },
        ],
      },
    },
    defWeek,
  ),
  useObjectDefineProperty() {
    _5_deep_read_write.defData.res.code = _5_deep_read_write.count++
    _5_deep_read_write.defData.res.data[0].id = _5_deep_read_write.count++
    _5_deep_read_write.defData.res.message.error
    _5_deep_read_write.defData.res.data[0].id
    _5_deep_read_write.defData.res.data[0].name
    _5_deep_read_write.defData.res.data[1].id
    _5_deep_read_write.defData.res.data[1].name
  },
  proxyData: deepProxy(
    {
      res: {
        code: 200,
        message: {
          error: null,
        },
        data: [
          {
            id: 1,
            name: '1',
          },
          {
            id: 2,
            name: '2',
          },
        ],
      },
    },
    deepProxyWeek,
  ),
  useProxy() {
    _5_deep_read_write.proxyData.res.code = _5_deep_read_write.count++
    _5_deep_read_write.proxyData.res.data[0].id = _5_deep_read_write.count++
    _5_deep_read_write.proxyData.res.message.error
    _5_deep_read_write.proxyData.res.data[0].id
    _5_deep_read_write.proxyData.res.data[0].name
    _5_deep_read_write.proxyData.res.data[1].id
    _5_deep_read_write.proxyData.res.data[1].name
  },
}
\`\`\`

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6abc1694b9714c69baa7f414e84cf1b7~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1163&h=474&s=50864&e=png&b=ffffff)

\`Object.defineProperty\` 会稍好一些，但两者的差距不大。

### 只读取修改嵌套对象的浅层属性

\`\`\`js
const _6_deepProxyWeek = new WeakMap()
const _6_defWeek = new WeakMap()
export const _6_update_top_level = {
  count: 2,
  defData: deepDefObserve(
    {
      res: {
        code: 200,
        message: {
          error: null,
        },
        data: [
          {
            id: 1,
            name: '1',
          },
          {
            id: 2,
            name: '2',
          },
        ],
      },
    },
    _6_deepProxyWeek,
  ),
  useObjectDefineProperty() {
    _6_update_top_level.defData.res.code = _6_update_top_level.count++
    _6_update_top_level.defData.res.message.error
  },
  proxyData: deepProxy(
    {
      res: {
        code: 200,
        message: {
          error: null,
        },
        data: [
          {
            id: 1,
            name: '1',
          },
          {
            id: 2,
            name: '2',
          },
        ],
      },
    },
    _6_defWeek,
  ),
  useProxy() {
    _6_update_top_level.proxyData.res.code = _6_update_top_level.count++
    _6_update_top_level.proxyData.res.message.error
  },
}
\`\`\`

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/511ce2bf724a4a2b903973b39aecee6a~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1138&h=457&s=49562&e=png&b=ffffff)

这个场景 \`Proxy\` 略优于 \`Object.defineProperty\` 。

# 总结

\`Proxy\` 在对象创建时的性能明显优于\`Object.defineProperty\`。而在浅层对象的读写性能方面，\`Object.defineProperty\` 表现更好。但是当对象的嵌套深度增加时，\`Object.defineProperty\` 的优势会逐渐减弱。尽管在性能测试中，\`Object.defineProperty\` 的读写优势可能更适合实际开发场景，但在 \`谷歌浏览器\` 中，\`Proxy\` 的性能与 \`Object.defineProperty\` 并没有拉开太大差距。因此，\`Vue3\` 选择 \`Proxy\` 不仅仅基于性能考量，还因为 \`Proxy\` 提供了更为友好、现代且强大的 \`API\` ，使得操作更加灵活。
`,title:`Object.defineProperty Vs Proxy性能比较`,date:`2024/01/16 09:52`,year:2024,category:`blog`,render:`<p>逛掘金的时候经常能刷到关于 <code>Vue</code> 响应式原理的文章， 经常能看到 <code>Vue3</code> 弃用 <code>Object.defineProperty</code> 转而使用 <code>Proxy</code> 来实现的原因是 <code>Proxy 性能更好</code> 。看的多了还能刷到一些文章认为 <code>Object.defineProperty</code> 性能更好，因此自己创建了一个小 <a href="https://github.com/a145789/object-defineproperty-vs-proxy" target="_blank" rel="noopener noreferrer">demo</a> 来对比二者在不同场景下的性能。</p>
<blockquote>
<p>以下测试仅在 <code>谷歌浏览器</code> 中进行，不同浏览器内核不同，结果可能有差异。可以访问此 <a href="https://a145789.github.io/object-defineproperty-vs-proxy/" target="_blank" rel="noopener noreferrer">在线地址</a> 测试其他环境下的性能。</p>
</blockquote>
<h1>封装响应式</h1>
<p>本文不会详细解析基于 <code>Object.defineProperty</code> 和 <code>Proxy</code> 的封装代码，这些内容在多数文章中已有介绍。<code>Vue3</code> 对嵌套对象的响应式处理进行了优化，采用了一种<code>惰性添加</code>的方式，仅在对象被访问时才添加响应式。相比之下，<code>Vue2</code> 采用了一次性递归处理整个对象的方式添加响应式。为了确保比较的公平性，本文下面的 <code>Object.defineProperty</code> 代码也采用了相同的惰性添加策略。</p>
<h2>Object.defineProperty</h2>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-js"><span class="line"><span style="color:#0008">/**</span><span style="color:#0004"> Object.defineProperty 深度监听 </span><span style="color:#0008">*/</span></span>
<span class="line"><span style="color:#0008">export</span><span style="color:#0008"> function</span><span style="color:#000;--shiki-light-font-weight:bold"> deepDefObserve</span><span style="color:#0008">(</span><span style="color:#000">obj</span><span style="color:#0008">,</span><span style="color:#000"> week</span><span style="color:#0008">)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">  const</span><span style="color:#000"> keys </span><span style="color:#0008">=</span><span style="color:#000"> Object</span><span style="color:#0008">.</span><span style="color:#000">keys</span><span style="color:#0008">(</span><span style="color:#000">obj</span><span style="color:#0008">)</span></span>
<span class="line"><span style="color:#0008">  for</span><span style="color:#0008"> (let</span><span style="color:#000"> i </span><span style="color:#0008">=</span><span style="color:#0008"> 0;</span><span style="color:#000"> i </span><span style="color:#0008">&#x3C;</span><span style="color:#000"> keys</span><span style="color:#0008">.</span><span style="color:#000">length</span><span style="color:#0008">;</span><span style="color:#000"> i</span><span style="color:#0008">++)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">    const</span><span style="color:#000"> key </span><span style="color:#0008">=</span><span style="color:#000"> keys</span><span style="color:#0008">[</span><span style="color:#000">i</span><span style="color:#0008">]</span></span>
<span class="line"><span style="color:#0008">    let</span><span style="color:#000"> value </span><span style="color:#0008">=</span><span style="color:#000"> obj</span><span style="color:#0008">[</span><span style="color:#000">key</span><span style="color:#0008">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000">    Object</span><span style="color:#0008">.</span><span style="color:#000">defineProperty</span><span style="color:#0008">(</span><span style="color:#000">obj</span><span style="color:#0008">,</span><span style="color:#000"> key</span><span style="color:#0008">,</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">      configurable</span><span style="color:#0008">:</span><span style="color:#0008"> true,</span></span>
<span class="line"><span style="color:#000">      enumerable</span><span style="color:#0008">:</span><span style="color:#0008"> true,</span></span>
<span class="line"><span style="color:#000;--shiki-light-font-weight:bold">      get</span><span style="color:#0008">()</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">        if</span><span style="color:#0008"> (typeof</span><span style="color:#000"> value </span><span style="color:#0008">===</span><span style="color:#0008"> 'object'</span><span style="color:#0008"> &#x26;&#x26;</span><span style="color:#000"> value </span><span style="color:#0008">!==</span><span style="color:#0008"> null</span><span style="color:#0008"> &#x26;&#x26;</span><span style="color:#000"> week </span><span style="color:#0008">&#x26;&#x26;</span><span style="color:#0008"> !</span><span style="color:#000">week</span><span style="color:#0008">.</span><span style="color:#000">has</span><span style="color:#0008">(</span><span style="color:#000">value</span><span style="color:#0008">))</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">          week</span><span style="color:#0008">.</span><span style="color:#000">set</span><span style="color:#0008">(</span><span style="color:#000">value</span><span style="color:#0008">,</span><span style="color:#0008"> true)</span></span>
<span class="line"><span style="color:#000">          deepDefObserve</span><span style="color:#0008">(</span><span style="color:#000">value</span><span style="color:#0008">)</span></span>
<span class="line"><span style="color:#0008">        }</span></span>
<span class="line"><span style="color:#0008">        return</span><span style="color:#000"> value</span></span>
<span class="line"><span style="color:#0008">      },</span></span>
<span class="line"><span style="color:#000;--shiki-light-font-weight:bold">      set</span><span style="color:#0008">(</span><span style="color:#000">newValue</span><span style="color:#0008">)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">        value </span><span style="color:#0008">=</span><span style="color:#000"> newValue</span></span>
<span class="line"><span style="color:#0008">      },</span></span>
<span class="line"><span style="color:#0008">    })</span></span>
<span class="line"><span style="color:#0008">  }</span></span>
<span class="line"><span style="color:#0008">  return</span><span style="color:#000"> obj</span></span>
<span class="line"><span style="color:#0008">}</span></span></code></pre>
<h2>Proxy</h2>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-js"><span class="line"><span style="color:#0008">/**</span><span style="color:#0004"> Proxy 深度监听 </span><span style="color:#0008">*/</span></span>
<span class="line"><span style="color:#0008">export</span><span style="color:#0008"> function</span><span style="color:#000;--shiki-light-font-weight:bold"> deepProxy</span><span style="color:#0008">(</span><span style="color:#000">obj</span><span style="color:#0008">,</span><span style="color:#000"> proxyWeek</span><span style="color:#0008">)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">  const</span><span style="color:#000"> myProxy </span><span style="color:#0008">=</span><span style="color:#0008"> new</span><span style="color:#000"> Proxy</span><span style="color:#0008">(</span><span style="color:#000">obj</span><span style="color:#0008">,</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000;--shiki-light-font-weight:bold">    get</span><span style="color:#0008">(</span><span style="color:#000">target</span><span style="color:#0008">,</span><span style="color:#000"> property</span><span style="color:#0008">)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">      const</span><span style="color:#000"> res </span><span style="color:#0008">=</span><span style="color:#000"> Reflect</span><span style="color:#0008">.</span><span style="color:#000">get</span><span style="color:#0008">(</span><span style="color:#000">target</span><span style="color:#0008">,</span><span style="color:#000"> property</span><span style="color:#0008">)</span></span>
<span class="line"><span style="color:#0008">      if</span><span style="color:#0008"> (typeof</span><span style="color:#000"> res </span><span style="color:#0008">===</span><span style="color:#0008"> 'object'</span><span style="color:#0008"> &#x26;&#x26;</span><span style="color:#000"> res </span><span style="color:#0008">!==</span><span style="color:#0008"> null</span><span style="color:#0008"> &#x26;&#x26;</span><span style="color:#000"> proxyWeek </span><span style="color:#0008">&#x26;&#x26;</span><span style="color:#0008"> !</span><span style="color:#000">proxyWeek</span><span style="color:#0008">.</span><span style="color:#000">has</span><span style="color:#0008">(</span><span style="color:#000">res</span><span style="color:#0008">))</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">        proxyWeek</span><span style="color:#0008">.</span><span style="color:#000">set</span><span style="color:#0008">(</span><span style="color:#000">res</span><span style="color:#0008">,</span><span style="color:#0008"> true)</span></span>
<span class="line"><span style="color:#0008">        return</span><span style="color:#000"> deepProxy</span><span style="color:#0008">(</span><span style="color:#000">res</span><span style="color:#0008">)</span></span>
<span class="line"><span style="color:#0008">      }</span></span>
<span class="line"><span style="color:#0008">      return</span><span style="color:#000"> res</span></span>
<span class="line"><span style="color:#0008">    },</span></span>
<span class="line"><span style="color:#000;--shiki-light-font-weight:bold">    set</span><span style="color:#0008">(</span><span style="color:#000">target</span><span style="color:#0008">,</span><span style="color:#000"> property</span><span style="color:#0008">,</span><span style="color:#000"> value</span><span style="color:#0008">)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">      return</span><span style="color:#000"> Reflect</span><span style="color:#0008">.</span><span style="color:#000">set</span><span style="color:#0008">(</span><span style="color:#000">target</span><span style="color:#0008">,</span><span style="color:#000"> property</span><span style="color:#0008">,</span><span style="color:#000"> value</span><span style="color:#0008">)</span></span>
<span class="line"><span style="color:#0008">    },</span></span>
<span class="line"><span style="color:#0008">  })</span></span>
<span class="line"><span style="color:#0008">  return</span><span style="color:#000"> myProxy</span></span>
<span class="line"><span style="color:#0008">}</span></span></code></pre>
<h1>测试性能</h1>
<p>测试场景有五个：</p>
<ol>
<li>使用两个 <code>API</code> 创建响应式对象的耗时，即 <code>const obj = reactive({})</code> 的耗时</li>
<li>测量对已创建的响应式对象的属性进行访问的速度，即 <code>obj.a</code> 的读取时间。</li>
<li>测量修改响应式对象属性值的耗时，即执行 <code>obj.a = 1</code> 所需的时间。</li>
<li>创建多个响应式对象，并模拟访问和修改它们属性的操作，以评估在多对象场景下的性能表现。</li>
<li>针对嵌套对象进行响应式性能测试，以评估在复杂数据结构下的性能表现。</li>
</ol>
<h2>初始化性能</h2>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-js"><span class="line"><span style="color:#0008">const</span><span style="color:#000"> _0_calling </span><span style="color:#0008">=</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000;--shiki-light-font-weight:bold">  useObjectDefineProperty</span><span style="color:#0008">()</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">    const</span><span style="color:#000"> data </span><span style="color:#0008">=</span><span style="color:#0008"> {</span><span style="color:#000"> a</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> b</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> c</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> d</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> e</span><span style="color:#0008">:</span><span style="color:#0008"> 1</span><span style="color:#0008"> }</span></span>
<span class="line"><span style="color:#0008">    const</span><span style="color:#000"> keys </span><span style="color:#0008">=</span><span style="color:#000"> Object</span><span style="color:#0008">.</span><span style="color:#000">keys</span><span style="color:#0008">(</span><span style="color:#000">data</span><span style="color:#0008">)</span></span>
<span class="line"><span style="color:#0008">    for</span><span style="color:#0008"> (let</span><span style="color:#000"> i </span><span style="color:#0008">=</span><span style="color:#0008"> 0;</span><span style="color:#000"> i </span><span style="color:#0008">&#x3C;</span><span style="color:#000"> keys</span><span style="color:#0008">.</span><span style="color:#000">length</span><span style="color:#0008">;</span><span style="color:#000"> i</span><span style="color:#0008">++)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">      Object</span><span style="color:#0008">.</span><span style="color:#000">defineProperty</span><span style="color:#0008">(</span><span style="color:#000">data</span><span style="color:#0008">,</span><span style="color:#000"> keys</span><span style="color:#0008">[</span><span style="color:#000">i</span><span style="color:#0008">],</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000;--shiki-light-font-weight:bold">        get</span><span style="color:#0008">()</span><span style="color:#0008"> {},</span></span>
<span class="line"><span style="color:#000;--shiki-light-font-weight:bold">        set</span><span style="color:#0008">()</span><span style="color:#0008"> {},</span></span>
<span class="line"><span style="color:#0008">      })</span></span>
<span class="line"><span style="color:#0008">    }</span></span>
<span class="line"><span style="color:#0008">  },</span></span>
<span class="line"><span style="color:#000;--shiki-light-font-weight:bold">  useProxy</span><span style="color:#0008">()</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">    const</span><span style="color:#000"> data </span><span style="color:#0008">=</span><span style="color:#0008"> {</span><span style="color:#000"> a</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> b</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> c</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> d</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> e</span><span style="color:#0008">:</span><span style="color:#0008"> 1</span><span style="color:#0008"> }</span></span>
<span class="line"><span style="color:#0008">    const</span><span style="color:#000"> proxy </span><span style="color:#0008">=</span><span style="color:#0008"> new</span><span style="color:#000"> Proxy</span><span style="color:#0008">(</span><span style="color:#000">data</span><span style="color:#0008">,</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000;--shiki-light-font-weight:bold">      get</span><span style="color:#0008">()</span><span style="color:#0008"> {},</span></span>
<span class="line"><span style="color:#000;--shiki-light-font-weight:bold">      set</span><span style="color:#0008">()</span><span style="color:#0008"> {},</span></span>
<span class="line"><span style="color:#0008">    })</span></span>
<span class="line"><span style="color:#0008">  },</span></span>
<span class="line"><span style="color:#0008">}</span></span></code></pre>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1ede8a5c56604d7da9cec5ca81b3a845~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1160&amp;h=474&amp;s=47379&amp;e=png&amp;b=ffffff" alt="image.png"></p>
<p>很明显，<code>Proxy</code> 的性能优于 <code>Object.defineProperty</code>。</p>
<h2>读取性能</h2>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-js"><span class="line"><span style="color:#0008">const</span><span style="color:#000"> readDefData </span><span style="color:#0008">=</span><span style="color:#000"> deepDefObserve</span><span style="color:#0008">({</span><span style="color:#000"> a</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> b</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> c</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> d</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> e</span><span style="color:#0008">:</span><span style="color:#0008"> 1</span><span style="color:#0008"> })</span></span>
<span class="line"><span style="color:#0008">const</span><span style="color:#000"> readProxyData </span><span style="color:#0008">=</span><span style="color:#000"> deepProxy</span><span style="color:#0008">({</span><span style="color:#000"> a</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> b</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> c</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> d</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> e</span><span style="color:#0008">:</span><span style="color:#0008"> 1</span><span style="color:#0008"> })</span></span>
<span class="line"><span style="color:#0008">export</span><span style="color:#0008"> const</span><span style="color:#000"> _1_read </span><span style="color:#0008">=</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000;--shiki-light-font-weight:bold">  useObjectDefineProperty</span><span style="color:#0008">()</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">    readDefData</span><span style="color:#0008">.</span><span style="color:#000">a</span></span>
<span class="line"><span style="color:#000">    readDefData</span><span style="color:#0008">.</span><span style="color:#000">b</span></span>
<span class="line"><span style="color:#000">    readDefData</span><span style="color:#0008">.</span><span style="color:#000">e</span></span>
<span class="line"><span style="color:#0008">  },</span></span>
<span class="line"><span style="color:#000;--shiki-light-font-weight:bold">  useProxy</span><span style="color:#0008">()</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">    readProxyData</span><span style="color:#0008">.</span><span style="color:#000">a</span></span>
<span class="line"><span style="color:#000">    readProxyData</span><span style="color:#0008">.</span><span style="color:#000">b</span></span>
<span class="line"><span style="color:#000">    readProxyData</span><span style="color:#0008">.</span><span style="color:#000">e</span></span>
<span class="line"><span style="color:#0008">  },</span></span>
<span class="line"><span style="color:#0008">}</span></span></code></pre>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4408d9066b7c42629b18d408cba16967~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1172&amp;h=488&amp;s=48433&amp;e=png&amp;b=ffffff" alt="image.png"></p>
<p><code>Object.defineProperty</code> 明显优于 <code>Proxy</code>。</p>
<h2>写入性能</h2>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-js"><span class="line"><span style="color:#0008">const</span><span style="color:#000"> writeDefData </span><span style="color:#0008">=</span><span style="color:#000"> deepDefObserve</span><span style="color:#0008">({</span><span style="color:#000"> a</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> b</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> c</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> d</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> e</span><span style="color:#0008">:</span><span style="color:#0008"> 1</span><span style="color:#0008"> })</span></span>
<span class="line"><span style="color:#0008">const</span><span style="color:#000"> writeProxyData </span><span style="color:#0008">=</span><span style="color:#000"> deepProxy</span><span style="color:#0008">({</span><span style="color:#000"> a</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> b</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> c</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> d</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> e</span><span style="color:#0008">:</span><span style="color:#0008"> 1</span><span style="color:#0008"> })</span></span>
<span class="line"><span style="color:#0008">export</span><span style="color:#0008"> const</span><span style="color:#000"> _2_write </span><span style="color:#0008">=</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">  count</span><span style="color:#0008">:</span><span style="color:#0008"> 2,</span></span>
<span class="line"><span style="color:#000;--shiki-light-font-weight:bold">  useObjectDefineProperty</span><span style="color:#0008">()</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">    writeDefData</span><span style="color:#0008">.</span><span style="color:#000">a </span><span style="color:#0008">=</span><span style="color:#000"> _2_write</span><span style="color:#0008">.</span><span style="color:#000">count</span><span style="color:#0008">++</span></span>
<span class="line"><span style="color:#000">    writeDefData</span><span style="color:#0008">.</span><span style="color:#000">b </span><span style="color:#0008">=</span><span style="color:#000"> _2_write</span><span style="color:#0008">.</span><span style="color:#000">count</span><span style="color:#0008">++</span></span>
<span class="line"><span style="color:#0008">  },</span></span>
<span class="line"><span style="color:#000;--shiki-light-font-weight:bold">  useProxy</span><span style="color:#0008">()</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">    writeProxyData</span><span style="color:#0008">.</span><span style="color:#000">a </span><span style="color:#0008">=</span><span style="color:#000"> _2_write</span><span style="color:#0008">.</span><span style="color:#000">count</span><span style="color:#0008">++</span></span>
<span class="line"><span style="color:#000">    writeProxyData</span><span style="color:#0008">.</span><span style="color:#000">b </span><span style="color:#0008">=</span><span style="color:#000"> _2_write</span><span style="color:#0008">.</span><span style="color:#000">count</span><span style="color:#0008">++</span></span>
<span class="line"><span style="color:#0008">  },</span></span>
<span class="line"><span style="color:#0008">}</span></span></code></pre>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/550fda8e434041d2beb66c7e8131be1c~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1161&amp;h=481&amp;s=48286&amp;e=png&amp;b=ffffff" alt="image.png"></p>
<p><code>Object.defineProperty</code> 优于 <code>Proxy</code>，不过差距不大。</p>
<h2>多次创建及读写</h2>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-js"><span class="line"><span style="color:#0008">export</span><span style="color:#0008"> const</span><span style="color:#000"> _4_create_read_write </span><span style="color:#0008">=</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">  count</span><span style="color:#0008">:</span><span style="color:#0008"> 2,</span></span>
<span class="line"><span style="color:#000;--shiki-light-font-weight:bold">  useObjectDefineProperty</span><span style="color:#0008">()</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">    const</span><span style="color:#000"> data </span><span style="color:#0008">=</span><span style="color:#0008"> {</span><span style="color:#000"> a</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> b</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> c</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> d</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> e</span><span style="color:#0008">:</span><span style="color:#0008"> 1</span><span style="color:#0008"> }</span></span>
<span class="line"><span style="color:#000">    deepDefObserve</span><span style="color:#0008">(</span><span style="color:#000">data</span><span style="color:#0008">)</span></span>
<span class="line"><span style="color:#000">    data</span><span style="color:#0008">.</span><span style="color:#000">a </span><span style="color:#0008">=</span><span style="color:#000"> _4_create_read_write</span><span style="color:#0008">.</span><span style="color:#000">count</span><span style="color:#0008">++</span></span>
<span class="line"><span style="color:#000">    data</span><span style="color:#0008">.</span><span style="color:#000">b </span><span style="color:#0008">=</span><span style="color:#000"> _4_create_read_write</span><span style="color:#0008">.</span><span style="color:#000">count</span><span style="color:#0008">++</span></span>
<span class="line"><span style="color:#000">    data</span><span style="color:#0008">.</span><span style="color:#000">a</span></span>
<span class="line"><span style="color:#000">    data</span><span style="color:#0008">.</span><span style="color:#000">c</span></span>
<span class="line"><span style="color:#0008">  },</span></span>
<span class="line"><span style="color:#000">  proxyWeek</span><span style="color:#0008">:</span><span style="color:#0008"> new</span><span style="color:#000"> WeakMap</span><span style="color:#0008">(),</span></span>
<span class="line"><span style="color:#000;--shiki-light-font-weight:bold">  useProxy</span><span style="color:#0008">()</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">    const</span><span style="color:#000"> data </span><span style="color:#0008">=</span><span style="color:#0008"> {</span><span style="color:#000"> a</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> b</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> c</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> d</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span><span style="color:#000"> e</span><span style="color:#0008">:</span><span style="color:#0008"> 1</span><span style="color:#0008"> }</span></span>
<span class="line"><span style="color:#0008">    const</span><span style="color:#000"> proxy </span><span style="color:#0008">=</span><span style="color:#000"> deepProxy</span><span style="color:#0008">(</span><span style="color:#000">data</span><span style="color:#0008">,</span><span style="color:#000"> _4_create_read_write</span><span style="color:#0008">.</span><span style="color:#000">proxyWeek</span><span style="color:#0008">)</span></span>
<span class="line"><span style="color:#000">    proxy</span><span style="color:#0008">.</span><span style="color:#000">a </span><span style="color:#0008">=</span><span style="color:#000"> _4_create_read_write</span><span style="color:#0008">.</span><span style="color:#000">count</span><span style="color:#0008">++</span></span>
<span class="line"><span style="color:#000">    proxy</span><span style="color:#0008">.</span><span style="color:#000">b </span><span style="color:#0008">=</span><span style="color:#000"> _4_create_read_write</span><span style="color:#0008">.</span><span style="color:#000">count</span><span style="color:#0008">++</span></span>
<span class="line"><span style="color:#000">    proxy</span><span style="color:#0008">.</span><span style="color:#000">a</span></span>
<span class="line"><span style="color:#000">    proxy</span><span style="color:#0008">.</span><span style="color:#000">c</span></span>
<span class="line"><span style="color:#0008">  },</span></span>
<span class="line"><span style="color:#0008">}</span></span></code></pre>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c29719b242b840c383a5848de73b3a4f~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1164&amp;h=474&amp;s=50534&amp;e=png&amp;b=ffffff" alt="image.png"></p>
<p><code>Proxy</code> 优势更大，但这个场景并不多见，很少会出现一次性创建大量响应式对象的情况，对属性的读写场景更多。</p>
<h2>对嵌套对象的性能</h2>
<h3>对内部的每个属性都进行读或写操作</h3>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-js"><span class="line"><span style="color:#0008">const</span><span style="color:#000"> deepProxyWeek </span><span style="color:#0008">=</span><span style="color:#0008"> new</span><span style="color:#000"> WeakMap</span><span style="color:#0008">()</span></span>
<span class="line"><span style="color:#0008">const</span><span style="color:#000"> defWeek </span><span style="color:#0008">=</span><span style="color:#0008"> new</span><span style="color:#000"> WeakMap</span><span style="color:#0008">()</span></span>
<span class="line"><span style="color:#0008">export</span><span style="color:#0008"> const</span><span style="color:#000"> _5_deep_read_write </span><span style="color:#0008">=</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">  count</span><span style="color:#0008">:</span><span style="color:#0008"> 2,</span></span>
<span class="line"><span style="color:#000">  defData</span><span style="color:#0008">:</span><span style="color:#000"> deepDefObserve</span><span style="color:#0008">(</span></span>
<span class="line"><span style="color:#0008">    {</span></span>
<span class="line"><span style="color:#000">      res</span><span style="color:#0008">:</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">        code</span><span style="color:#0008">:</span><span style="color:#0008"> 200,</span></span>
<span class="line"><span style="color:#000">        message</span><span style="color:#0008">:</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">          error</span><span style="color:#0008">:</span><span style="color:#0008"> null,</span></span>
<span class="line"><span style="color:#0008">        },</span></span>
<span class="line"><span style="color:#000">        data</span><span style="color:#0008">:</span><span style="color:#0008"> [</span></span>
<span class="line"><span style="color:#0008">          {</span></span>
<span class="line"><span style="color:#000">            id</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span></span>
<span class="line"><span style="color:#000">            name</span><span style="color:#0008">:</span><span style="color:#0008"> '1'</span><span style="color:#0008">,</span></span>
<span class="line"><span style="color:#0008">          },</span></span>
<span class="line"><span style="color:#0008">          {</span></span>
<span class="line"><span style="color:#000">            id</span><span style="color:#0008">:</span><span style="color:#0008"> 2,</span></span>
<span class="line"><span style="color:#000">            name</span><span style="color:#0008">:</span><span style="color:#0008"> '2'</span><span style="color:#0008">,</span></span>
<span class="line"><span style="color:#0008">          },</span></span>
<span class="line"><span style="color:#0008">        ],</span></span>
<span class="line"><span style="color:#0008">      },</span></span>
<span class="line"><span style="color:#0008">    },</span></span>
<span class="line"><span style="color:#000">    defWeek</span><span style="color:#0008">,</span></span>
<span class="line"><span style="color:#0008">  ),</span></span>
<span class="line"><span style="color:#000;--shiki-light-font-weight:bold">  useObjectDefineProperty</span><span style="color:#0008">()</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">    _5_deep_read_write</span><span style="color:#0008">.</span><span style="color:#000">defData</span><span style="color:#0008">.</span><span style="color:#000">res</span><span style="color:#0008">.</span><span style="color:#000">code </span><span style="color:#0008">=</span><span style="color:#000"> _5_deep_read_write</span><span style="color:#0008">.</span><span style="color:#000">count</span><span style="color:#0008">++</span></span>
<span class="line"><span style="color:#000">    _5_deep_read_write</span><span style="color:#0008">.</span><span style="color:#000">defData</span><span style="color:#0008">.</span><span style="color:#000">res</span><span style="color:#0008">.</span><span style="color:#000">data</span><span style="color:#0008">[0].</span><span style="color:#000">id </span><span style="color:#0008">=</span><span style="color:#000"> _5_deep_read_write</span><span style="color:#0008">.</span><span style="color:#000">count</span><span style="color:#0008">++</span></span>
<span class="line"><span style="color:#000">    _5_deep_read_write</span><span style="color:#0008">.</span><span style="color:#000">defData</span><span style="color:#0008">.</span><span style="color:#000">res</span><span style="color:#0008">.</span><span style="color:#000">message</span><span style="color:#0008">.</span><span style="color:#000">error</span></span>
<span class="line"><span style="color:#000">    _5_deep_read_write</span><span style="color:#0008">.</span><span style="color:#000">defData</span><span style="color:#0008">.</span><span style="color:#000">res</span><span style="color:#0008">.</span><span style="color:#000">data</span><span style="color:#0008">[0].</span><span style="color:#000">id</span></span>
<span class="line"><span style="color:#000">    _5_deep_read_write</span><span style="color:#0008">.</span><span style="color:#000">defData</span><span style="color:#0008">.</span><span style="color:#000">res</span><span style="color:#0008">.</span><span style="color:#000">data</span><span style="color:#0008">[0].</span><span style="color:#000">name</span></span>
<span class="line"><span style="color:#000">    _5_deep_read_write</span><span style="color:#0008">.</span><span style="color:#000">defData</span><span style="color:#0008">.</span><span style="color:#000">res</span><span style="color:#0008">.</span><span style="color:#000">data</span><span style="color:#0008">[1].</span><span style="color:#000">id</span></span>
<span class="line"><span style="color:#000">    _5_deep_read_write</span><span style="color:#0008">.</span><span style="color:#000">defData</span><span style="color:#0008">.</span><span style="color:#000">res</span><span style="color:#0008">.</span><span style="color:#000">data</span><span style="color:#0008">[1].</span><span style="color:#000">name</span></span>
<span class="line"><span style="color:#0008">  },</span></span>
<span class="line"><span style="color:#000">  proxyData</span><span style="color:#0008">:</span><span style="color:#000"> deepProxy</span><span style="color:#0008">(</span></span>
<span class="line"><span style="color:#0008">    {</span></span>
<span class="line"><span style="color:#000">      res</span><span style="color:#0008">:</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">        code</span><span style="color:#0008">:</span><span style="color:#0008"> 200,</span></span>
<span class="line"><span style="color:#000">        message</span><span style="color:#0008">:</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">          error</span><span style="color:#0008">:</span><span style="color:#0008"> null,</span></span>
<span class="line"><span style="color:#0008">        },</span></span>
<span class="line"><span style="color:#000">        data</span><span style="color:#0008">:</span><span style="color:#0008"> [</span></span>
<span class="line"><span style="color:#0008">          {</span></span>
<span class="line"><span style="color:#000">            id</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span></span>
<span class="line"><span style="color:#000">            name</span><span style="color:#0008">:</span><span style="color:#0008"> '1'</span><span style="color:#0008">,</span></span>
<span class="line"><span style="color:#0008">          },</span></span>
<span class="line"><span style="color:#0008">          {</span></span>
<span class="line"><span style="color:#000">            id</span><span style="color:#0008">:</span><span style="color:#0008"> 2,</span></span>
<span class="line"><span style="color:#000">            name</span><span style="color:#0008">:</span><span style="color:#0008"> '2'</span><span style="color:#0008">,</span></span>
<span class="line"><span style="color:#0008">          },</span></span>
<span class="line"><span style="color:#0008">        ],</span></span>
<span class="line"><span style="color:#0008">      },</span></span>
<span class="line"><span style="color:#0008">    },</span></span>
<span class="line"><span style="color:#000">    deepProxyWeek</span><span style="color:#0008">,</span></span>
<span class="line"><span style="color:#0008">  ),</span></span>
<span class="line"><span style="color:#000;--shiki-light-font-weight:bold">  useProxy</span><span style="color:#0008">()</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">    _5_deep_read_write</span><span style="color:#0008">.</span><span style="color:#000">proxyData</span><span style="color:#0008">.</span><span style="color:#000">res</span><span style="color:#0008">.</span><span style="color:#000">code </span><span style="color:#0008">=</span><span style="color:#000"> _5_deep_read_write</span><span style="color:#0008">.</span><span style="color:#000">count</span><span style="color:#0008">++</span></span>
<span class="line"><span style="color:#000">    _5_deep_read_write</span><span style="color:#0008">.</span><span style="color:#000">proxyData</span><span style="color:#0008">.</span><span style="color:#000">res</span><span style="color:#0008">.</span><span style="color:#000">data</span><span style="color:#0008">[0].</span><span style="color:#000">id </span><span style="color:#0008">=</span><span style="color:#000"> _5_deep_read_write</span><span style="color:#0008">.</span><span style="color:#000">count</span><span style="color:#0008">++</span></span>
<span class="line"><span style="color:#000">    _5_deep_read_write</span><span style="color:#0008">.</span><span style="color:#000">proxyData</span><span style="color:#0008">.</span><span style="color:#000">res</span><span style="color:#0008">.</span><span style="color:#000">message</span><span style="color:#0008">.</span><span style="color:#000">error</span></span>
<span class="line"><span style="color:#000">    _5_deep_read_write</span><span style="color:#0008">.</span><span style="color:#000">proxyData</span><span style="color:#0008">.</span><span style="color:#000">res</span><span style="color:#0008">.</span><span style="color:#000">data</span><span style="color:#0008">[0].</span><span style="color:#000">id</span></span>
<span class="line"><span style="color:#000">    _5_deep_read_write</span><span style="color:#0008">.</span><span style="color:#000">proxyData</span><span style="color:#0008">.</span><span style="color:#000">res</span><span style="color:#0008">.</span><span style="color:#000">data</span><span style="color:#0008">[0].</span><span style="color:#000">name</span></span>
<span class="line"><span style="color:#000">    _5_deep_read_write</span><span style="color:#0008">.</span><span style="color:#000">proxyData</span><span style="color:#0008">.</span><span style="color:#000">res</span><span style="color:#0008">.</span><span style="color:#000">data</span><span style="color:#0008">[1].</span><span style="color:#000">id</span></span>
<span class="line"><span style="color:#000">    _5_deep_read_write</span><span style="color:#0008">.</span><span style="color:#000">proxyData</span><span style="color:#0008">.</span><span style="color:#000">res</span><span style="color:#0008">.</span><span style="color:#000">data</span><span style="color:#0008">[1].</span><span style="color:#000">name</span></span>
<span class="line"><span style="color:#0008">  },</span></span>
<span class="line"><span style="color:#0008">}</span></span></code></pre>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6abc1694b9714c69baa7f414e84cf1b7~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1163&amp;h=474&amp;s=50864&amp;e=png&amp;b=ffffff" alt="image.png"></p>
<p><code>Object.defineProperty</code> 会稍好一些，但两者的差距不大。</p>
<h3>只读取修改嵌套对象的浅层属性</h3>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-js"><span class="line"><span style="color:#0008">const</span><span style="color:#000"> _6_deepProxyWeek </span><span style="color:#0008">=</span><span style="color:#0008"> new</span><span style="color:#000"> WeakMap</span><span style="color:#0008">()</span></span>
<span class="line"><span style="color:#0008">const</span><span style="color:#000"> _6_defWeek </span><span style="color:#0008">=</span><span style="color:#0008"> new</span><span style="color:#000"> WeakMap</span><span style="color:#0008">()</span></span>
<span class="line"><span style="color:#0008">export</span><span style="color:#0008"> const</span><span style="color:#000"> _6_update_top_level </span><span style="color:#0008">=</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">  count</span><span style="color:#0008">:</span><span style="color:#0008"> 2,</span></span>
<span class="line"><span style="color:#000">  defData</span><span style="color:#0008">:</span><span style="color:#000"> deepDefObserve</span><span style="color:#0008">(</span></span>
<span class="line"><span style="color:#0008">    {</span></span>
<span class="line"><span style="color:#000">      res</span><span style="color:#0008">:</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">        code</span><span style="color:#0008">:</span><span style="color:#0008"> 200,</span></span>
<span class="line"><span style="color:#000">        message</span><span style="color:#0008">:</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">          error</span><span style="color:#0008">:</span><span style="color:#0008"> null,</span></span>
<span class="line"><span style="color:#0008">        },</span></span>
<span class="line"><span style="color:#000">        data</span><span style="color:#0008">:</span><span style="color:#0008"> [</span></span>
<span class="line"><span style="color:#0008">          {</span></span>
<span class="line"><span style="color:#000">            id</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span></span>
<span class="line"><span style="color:#000">            name</span><span style="color:#0008">:</span><span style="color:#0008"> '1'</span><span style="color:#0008">,</span></span>
<span class="line"><span style="color:#0008">          },</span></span>
<span class="line"><span style="color:#0008">          {</span></span>
<span class="line"><span style="color:#000">            id</span><span style="color:#0008">:</span><span style="color:#0008"> 2,</span></span>
<span class="line"><span style="color:#000">            name</span><span style="color:#0008">:</span><span style="color:#0008"> '2'</span><span style="color:#0008">,</span></span>
<span class="line"><span style="color:#0008">          },</span></span>
<span class="line"><span style="color:#0008">        ],</span></span>
<span class="line"><span style="color:#0008">      },</span></span>
<span class="line"><span style="color:#0008">    },</span></span>
<span class="line"><span style="color:#000">    _6_deepProxyWeek</span><span style="color:#0008">,</span></span>
<span class="line"><span style="color:#0008">  ),</span></span>
<span class="line"><span style="color:#000;--shiki-light-font-weight:bold">  useObjectDefineProperty</span><span style="color:#0008">()</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">    _6_update_top_level</span><span style="color:#0008">.</span><span style="color:#000">defData</span><span style="color:#0008">.</span><span style="color:#000">res</span><span style="color:#0008">.</span><span style="color:#000">code </span><span style="color:#0008">=</span><span style="color:#000"> _6_update_top_level</span><span style="color:#0008">.</span><span style="color:#000">count</span><span style="color:#0008">++</span></span>
<span class="line"><span style="color:#000">    _6_update_top_level</span><span style="color:#0008">.</span><span style="color:#000">defData</span><span style="color:#0008">.</span><span style="color:#000">res</span><span style="color:#0008">.</span><span style="color:#000">message</span><span style="color:#0008">.</span><span style="color:#000">error</span></span>
<span class="line"><span style="color:#0008">  },</span></span>
<span class="line"><span style="color:#000">  proxyData</span><span style="color:#0008">:</span><span style="color:#000"> deepProxy</span><span style="color:#0008">(</span></span>
<span class="line"><span style="color:#0008">    {</span></span>
<span class="line"><span style="color:#000">      res</span><span style="color:#0008">:</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">        code</span><span style="color:#0008">:</span><span style="color:#0008"> 200,</span></span>
<span class="line"><span style="color:#000">        message</span><span style="color:#0008">:</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">          error</span><span style="color:#0008">:</span><span style="color:#0008"> null,</span></span>
<span class="line"><span style="color:#0008">        },</span></span>
<span class="line"><span style="color:#000">        data</span><span style="color:#0008">:</span><span style="color:#0008"> [</span></span>
<span class="line"><span style="color:#0008">          {</span></span>
<span class="line"><span style="color:#000">            id</span><span style="color:#0008">:</span><span style="color:#0008"> 1,</span></span>
<span class="line"><span style="color:#000">            name</span><span style="color:#0008">:</span><span style="color:#0008"> '1'</span><span style="color:#0008">,</span></span>
<span class="line"><span style="color:#0008">          },</span></span>
<span class="line"><span style="color:#0008">          {</span></span>
<span class="line"><span style="color:#000">            id</span><span style="color:#0008">:</span><span style="color:#0008"> 2,</span></span>
<span class="line"><span style="color:#000">            name</span><span style="color:#0008">:</span><span style="color:#0008"> '2'</span><span style="color:#0008">,</span></span>
<span class="line"><span style="color:#0008">          },</span></span>
<span class="line"><span style="color:#0008">        ],</span></span>
<span class="line"><span style="color:#0008">      },</span></span>
<span class="line"><span style="color:#0008">    },</span></span>
<span class="line"><span style="color:#000">    _6_defWeek</span><span style="color:#0008">,</span></span>
<span class="line"><span style="color:#0008">  ),</span></span>
<span class="line"><span style="color:#000;--shiki-light-font-weight:bold">  useProxy</span><span style="color:#0008">()</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">    _6_update_top_level</span><span style="color:#0008">.</span><span style="color:#000">proxyData</span><span style="color:#0008">.</span><span style="color:#000">res</span><span style="color:#0008">.</span><span style="color:#000">code </span><span style="color:#0008">=</span><span style="color:#000"> _6_update_top_level</span><span style="color:#0008">.</span><span style="color:#000">count</span><span style="color:#0008">++</span></span>
<span class="line"><span style="color:#000">    _6_update_top_level</span><span style="color:#0008">.</span><span style="color:#000">proxyData</span><span style="color:#0008">.</span><span style="color:#000">res</span><span style="color:#0008">.</span><span style="color:#000">message</span><span style="color:#0008">.</span><span style="color:#000">error</span></span>
<span class="line"><span style="color:#0008">  },</span></span>
<span class="line"><span style="color:#0008">}</span></span></code></pre>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/511ce2bf724a4a2b903973b39aecee6a~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1138&amp;h=457&amp;s=49562&amp;e=png&amp;b=ffffff" alt="image.png"></p>
<p>这个场景 <code>Proxy</code> 略优于 <code>Object.defineProperty</code> 。</p>
<h1>总结</h1>
<p><code>Proxy</code> 在对象创建时的性能明显优于<code>Object.defineProperty</code>。而在浅层对象的读写性能方面，<code>Object.defineProperty</code> 表现更好。但是当对象的嵌套深度增加时，<code>Object.defineProperty</code> 的优势会逐渐减弱。尽管在性能测试中，<code>Object.defineProperty</code> 的读写优势可能更适合实际开发场景，但在 <code>谷歌浏览器</code> 中，<code>Proxy</code> 的性能与 <code>Object.defineProperty</code> 并没有拉开太大差距。因此，<code>Vue3</code> 选择 <code>Proxy</code> 不仅仅基于性能考量，还因为 <code>Proxy</code> 提供了更为友好、现代且强大的 <code>API</code> ，使得操作更加灵活。</p>
`},{path:`/home/runner/work/aboutme/aboutme/src/content/blog/computed 为啥可以缓存.md`,raw:`---
date: 2023/04/05 17:12
---

# 源码解析

\`\`\`js
const a = computed(() => {
  return b.value + 1
})
\`\`\`

往 \`computed\` 中传入一个 \`getter\`，对应的 \`Vue\` 源码为

\`\`\`ts
// 简化后的代码
export function computed<T>(getterOrOptions: ComputedGetter<T> | WritableComputedOptions<T>) {
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR)

  return cRef as any
}
\`\`\`

通过初始化 \`ComputedRefImpl\` 得到一个实例。

\`\`\`ts
export class ComputedRefImpl<T> {
  private _value!: T
  public readonly effect: ReactiveEffect<T>

  public _dirty = true

  constructor(getter: ComputedGetter<T>) {
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true
        triggerRefValue(this)
      }
    })
    this.effect.computed = this
  }

  get value() {
    // the computed ref may get wrapped by other proxies e.g. readonly() #3376
    const self = toRaw(this)
    trackRefValue(self)
    if (self._dirty || !self._cacheable) {
      self._dirty = false
      self._value = self.effect.run()!
    }
    return self._value
  }
}
\`\`\`

\`ComputedRefImpl\` 内部有两个属性：一个是 \`_value\`，一个是 \`_dirty\`。

当访问 \`a.value\` 时，会触发 \`get value()\`，

\`\`\`ts
export class ComputedRefImpl<T> {
  private _value!: T
  public _dirty = true

  get value() {
    const self = toRaw(this)
    if (self._dirty) {
      self._dirty = false
      self._value = self.effect.run()!
    }
    return self._value
  }
}
\`\`\`

> 如果 \`_dirty\` 为 \`true\`，代表需要获取新值，则重新执行 \`getter\` 获取到新值赋值到 \`_value\` 上，并且把 \`_dirty\` 变为 \`false\` ，下次再获取这个值的时候就用缓存的值。

而初始化的时候会在 \`constructor\` 中实例化一个 \`ReactiveEffect\`，其作用是将实例化后得出来的 \`effect\` 作为 \`dep\` 添加到依赖的响应式数据中，一旦响应式数据变更，触发此 \`dep\`，\`ReactiveEffect\` 接受两个参数，第一个是 \`fn\`，第二个是 \`scheduler\`，一个可以自定义的调用函数。

响应式数据变化后的流程为：

\`\`\`ts
const b = ref(0)
const a = computed(() => {
  return b.value + 1
})

b.value = 10

// b.value 变更，触发 a 放在 b.value 的 dep ，即 ReactiveEffect 实例化出的 effect
// effect 暴露出一个 run 函数，调用 run 函数会调用传入 ReactiveEffect 的 \`fn\`
// 如果传入 ReactiveEffect 的第二个参数有值，会优先调用 scheduler，即

class ReactiveEffect {
  constructor(fn, scheduler) {
    this.fn = fn
    this.scheduler = scheduler
  }

  run() {
    return this.fn()
  }
}

const effect = new ReactiveEffect(getter, () => {
  if (!this._dirty) {
    this._dirty = true
  }
})

if (effect.scheduler) {
  effect.scheduler()
} else {
  effect.run()
}
\`\`\`

数据变更后，当前 \`_dirty\` 为 \`false\` ，代表缓存状态，将 \`_dirty\` 为 \`true\`，然后依赖此\`computed\` 数据的其他监听者重新执行， \`a.value\` 调用 \`get value()\`。

# 总结

主要相关的就三个 \`_dirty\` \`_value\` \`传入 ReactiveEffect 的第二个参数\`，访问 \`computed\` 数据的时候，如果 \`_dirty\` 不为真，就使用缓存值，\`computed\` 监听的响应式数据变更，调用传入 ReactiveEffect 的第二个参数，将\`_dirty\`变为真，再次访问 \`computed\` 数据就重新获取值
`,title:`computed 为啥可以缓存`,date:`2023/04/05 17:12`,year:2023,category:`blog`,render:`<h1>源码解析</h1>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-js"><span class="line"><span style="color:#0008">const</span><span style="color:#000"> a </span><span style="color:#0008">=</span><span style="color:#000"> computed</span><span style="color:#0008">(()</span><span style="color:#0008"> =></span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">  return</span><span style="color:#000"> b</span><span style="color:#0008">.</span><span style="color:#000">value </span><span style="color:#0008">+</span><span style="color:#0008"> 1</span></span>
<span class="line"><span style="color:#0008">})</span></span></code></pre>
<p>往 <code>computed</code> 中传入一个 <code>getter</code>，对应的 <code>Vue</code> 源码为</p>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-ts"><span class="line"><span style="color:#0008">//</span><span style="color:#0004"> 简化后的代码</span></span>
<span class="line"><span style="color:#0008">export</span><span style="color:#0008"> function</span><span style="color:#000;--shiki-light-font-weight:bold"> computed</span><span style="color:#0008">&#x3C;</span><span style="color:#000;--shiki-light-font-weight:bold">T</span><span style="color:#0008">>(</span><span style="color:#000">getterOrOptions</span><span style="color:#0008">:</span><span style="color:#000;--shiki-light-font-weight:bold"> ComputedGetter</span><span style="color:#0008">&#x3C;</span><span style="color:#000;--shiki-light-font-weight:bold">T</span><span style="color:#0008">></span><span style="color:#0008"> |</span><span style="color:#000;--shiki-light-font-weight:bold"> WritableComputedOptions</span><span style="color:#0008">&#x3C;</span><span style="color:#000;--shiki-light-font-weight:bold">T</span><span style="color:#0008">>)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">  const</span><span style="color:#000"> cRef </span><span style="color:#0008">=</span><span style="color:#0008"> new</span><span style="color:#000"> ComputedRefImpl</span><span style="color:#0008">(</span><span style="color:#000">getter</span><span style="color:#0008">,</span><span style="color:#000"> setter</span><span style="color:#0008">,</span><span style="color:#000"> onlyGetter </span><span style="color:#0008">||</span><span style="color:#0008"> !</span><span style="color:#000">setter</span><span style="color:#0008">,</span><span style="color:#000"> isSSR</span><span style="color:#0008">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0008">  return</span><span style="color:#000"> cRef </span><span style="color:#0008">as</span><span style="color:#000"> any</span></span>
<span class="line"><span style="color:#0008">}</span></span></code></pre>
<p>通过初始化 <code>ComputedRefImpl</code> 得到一个实例。</p>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-ts"><span class="line"><span style="color:#0008">export</span><span style="color:#0008"> class</span><span style="color:#000;--shiki-light-font-weight:bold"> ComputedRefImpl</span><span style="color:#0008">&#x3C;</span><span style="color:#000;--shiki-light-font-weight:bold">T</span><span style="color:#0008">></span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">  private</span><span style="color:#000"> _value</span><span style="color:#0008">!:</span><span style="color:#000;--shiki-light-font-weight:bold"> T</span></span>
<span class="line"><span style="color:#0008">  public</span><span style="color:#0008"> readonly</span><span style="color:#000"> effect</span><span style="color:#0008">:</span><span style="color:#000;--shiki-light-font-weight:bold"> ReactiveEffect</span><span style="color:#0008">&#x3C;</span><span style="color:#000;--shiki-light-font-weight:bold">T</span><span style="color:#0008">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#0008">  public</span><span style="color:#000"> _dirty </span><span style="color:#0008">=</span><span style="color:#0008"> true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0008">  constructor(</span><span style="color:#000">getter</span><span style="color:#0008">:</span><span style="color:#000;--shiki-light-font-weight:bold"> ComputedGetter</span><span style="color:#0008">&#x3C;</span><span style="color:#000;--shiki-light-font-weight:bold">T</span><span style="color:#0008">>)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">    this</span><span style="color:#0008">.</span><span style="color:#000">effect </span><span style="color:#0008">=</span><span style="color:#0008"> new</span><span style="color:#000"> ReactiveEffect</span><span style="color:#0008">(</span><span style="color:#000">getter</span><span style="color:#0008">,</span><span style="color:#0008"> ()</span><span style="color:#0008"> =></span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">      if</span><span style="color:#0008"> (!</span><span style="color:#000">this</span><span style="color:#0008">.</span><span style="color:#000">_dirty</span><span style="color:#0008">)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">        this</span><span style="color:#0008">.</span><span style="color:#000">_dirty </span><span style="color:#0008">=</span><span style="color:#0008"> true</span></span>
<span class="line"><span style="color:#000">        triggerRefValue</span><span style="color:#0008">(</span><span style="color:#000">this</span><span style="color:#0008">)</span></span>
<span class="line"><span style="color:#0008">      }</span></span>
<span class="line"><span style="color:#0008">    })</span></span>
<span class="line"><span style="color:#000">    this</span><span style="color:#0008">.</span><span style="color:#000">effect</span><span style="color:#0008">.</span><span style="color:#000">computed </span><span style="color:#0008">=</span><span style="color:#000"> this</span></span>
<span class="line"><span style="color:#0008">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0008">  get</span><span style="color:#000;--shiki-light-font-weight:bold"> value</span><span style="color:#0008">()</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">    //</span><span style="color:#0004"> the computed ref may get wrapped by other proxies e.g. readonly() #3376</span></span>
<span class="line"><span style="color:#0008">    const</span><span style="color:#000"> self </span><span style="color:#0008">=</span><span style="color:#000"> toRaw</span><span style="color:#0008">(</span><span style="color:#000">this</span><span style="color:#0008">)</span></span>
<span class="line"><span style="color:#000">    trackRefValue</span><span style="color:#0008">(</span><span style="color:#000">self</span><span style="color:#0008">)</span></span>
<span class="line"><span style="color:#0008">    if</span><span style="color:#0008"> (</span><span style="color:#000">self</span><span style="color:#0008">.</span><span style="color:#000">_dirty </span><span style="color:#0008">||</span><span style="color:#0008"> !</span><span style="color:#000">self</span><span style="color:#0008">.</span><span style="color:#000">_cacheable</span><span style="color:#0008">)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">      self</span><span style="color:#0008">.</span><span style="color:#000">_dirty </span><span style="color:#0008">=</span><span style="color:#0008"> false</span></span>
<span class="line"><span style="color:#000">      self</span><span style="color:#0008">.</span><span style="color:#000">_value </span><span style="color:#0008">=</span><span style="color:#000"> self</span><span style="color:#0008">.</span><span style="color:#000">effect</span><span style="color:#0008">.</span><span style="color:#000">run</span><span style="color:#0008">()!</span></span>
<span class="line"><span style="color:#0008">    }</span></span>
<span class="line"><span style="color:#0008">    return</span><span style="color:#000"> self</span><span style="color:#0008">.</span><span style="color:#000">_value</span></span>
<span class="line"><span style="color:#0008">  }</span></span>
<span class="line"><span style="color:#0008">}</span></span></code></pre>
<p><code>ComputedRefImpl</code> 内部有两个属性：一个是 <code>_value</code>，一个是 <code>_dirty</code>。</p>
<p>当访问 <code>a.value</code> 时，会触发 <code>get value()</code>，</p>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-ts"><span class="line"><span style="color:#0008">export</span><span style="color:#0008"> class</span><span style="color:#000;--shiki-light-font-weight:bold"> ComputedRefImpl</span><span style="color:#0008">&#x3C;</span><span style="color:#000;--shiki-light-font-weight:bold">T</span><span style="color:#0008">></span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">  private</span><span style="color:#000"> _value</span><span style="color:#0008">!:</span><span style="color:#000;--shiki-light-font-weight:bold"> T</span></span>
<span class="line"><span style="color:#0008">  public</span><span style="color:#000"> _dirty </span><span style="color:#0008">=</span><span style="color:#0008"> true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0008">  get</span><span style="color:#000;--shiki-light-font-weight:bold"> value</span><span style="color:#0008">()</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">    const</span><span style="color:#000"> self </span><span style="color:#0008">=</span><span style="color:#000"> toRaw</span><span style="color:#0008">(</span><span style="color:#000">this</span><span style="color:#0008">)</span></span>
<span class="line"><span style="color:#0008">    if</span><span style="color:#0008"> (</span><span style="color:#000">self</span><span style="color:#0008">.</span><span style="color:#000">_dirty</span><span style="color:#0008">)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">      self</span><span style="color:#0008">.</span><span style="color:#000">_dirty </span><span style="color:#0008">=</span><span style="color:#0008"> false</span></span>
<span class="line"><span style="color:#000">      self</span><span style="color:#0008">.</span><span style="color:#000">_value </span><span style="color:#0008">=</span><span style="color:#000"> self</span><span style="color:#0008">.</span><span style="color:#000">effect</span><span style="color:#0008">.</span><span style="color:#000">run</span><span style="color:#0008">()!</span></span>
<span class="line"><span style="color:#0008">    }</span></span>
<span class="line"><span style="color:#0008">    return</span><span style="color:#000"> self</span><span style="color:#0008">.</span><span style="color:#000">_value</span></span>
<span class="line"><span style="color:#0008">  }</span></span>
<span class="line"><span style="color:#0008">}</span></span></code></pre>
<blockquote>
<p>如果 <code>_dirty</code> 为 <code>true</code>，代表需要获取新值，则重新执行 <code>getter</code> 获取到新值赋值到 <code>_value</code> 上，并且把 <code>_dirty</code> 变为 <code>false</code> ，下次再获取这个值的时候就用缓存的值。</p>
</blockquote>
<p>而初始化的时候会在 <code>constructor</code> 中实例化一个 <code>ReactiveEffect</code>，其作用是将实例化后得出来的 <code>effect</code> 作为 <code>dep</code> 添加到依赖的响应式数据中，一旦响应式数据变更，触发此 <code>dep</code>，<code>ReactiveEffect</code> 接受两个参数，第一个是 <code>fn</code>，第二个是 <code>scheduler</code>，一个可以自定义的调用函数。</p>
<p>响应式数据变化后的流程为：</p>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-ts"><span class="line"><span style="color:#0008">const</span><span style="color:#000"> b </span><span style="color:#0008">=</span><span style="color:#000"> ref</span><span style="color:#0008">(0)</span></span>
<span class="line"><span style="color:#0008">const</span><span style="color:#000"> a </span><span style="color:#0008">=</span><span style="color:#000"> computed</span><span style="color:#0008">(()</span><span style="color:#0008"> =></span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">  return</span><span style="color:#000"> b</span><span style="color:#0008">.</span><span style="color:#000">value </span><span style="color:#0008">+</span><span style="color:#0008"> 1</span></span>
<span class="line"><span style="color:#0008">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000">b</span><span style="color:#0008">.</span><span style="color:#000">value </span><span style="color:#0008">=</span><span style="color:#0008"> 10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0008">//</span><span style="color:#0004"> b.value 变更，触发 a 放在 b.value 的 dep ，即 ReactiveEffect 实例化出的 effect</span></span>
<span class="line"><span style="color:#0008">//</span><span style="color:#0004"> effect 暴露出一个 run 函数，调用 run 函数会调用传入 ReactiveEffect 的 \`fn\`</span></span>
<span class="line"><span style="color:#0008">//</span><span style="color:#0004"> 如果传入 ReactiveEffect 的第二个参数有值，会优先调用 scheduler，即</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0008">class</span><span style="color:#000;--shiki-light-font-weight:bold"> ReactiveEffect</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">  constructor(</span><span style="color:#000">fn</span><span style="color:#0008">,</span><span style="color:#000"> scheduler</span><span style="color:#0008">)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">    this</span><span style="color:#0008">.</span><span style="color:#000">fn </span><span style="color:#0008">=</span><span style="color:#000"> fn</span></span>
<span class="line"><span style="color:#000">    this</span><span style="color:#0008">.</span><span style="color:#000">scheduler </span><span style="color:#0008">=</span><span style="color:#000"> scheduler</span></span>
<span class="line"><span style="color:#0008">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000;--shiki-light-font-weight:bold">  run</span><span style="color:#0008">()</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">    return</span><span style="color:#000"> this</span><span style="color:#0008">.</span><span style="color:#000">fn</span><span style="color:#0008">()</span></span>
<span class="line"><span style="color:#0008">  }</span></span>
<span class="line"><span style="color:#0008">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0008">const</span><span style="color:#000"> effect </span><span style="color:#0008">=</span><span style="color:#0008"> new</span><span style="color:#000"> ReactiveEffect</span><span style="color:#0008">(</span><span style="color:#000">getter</span><span style="color:#0008">,</span><span style="color:#0008"> ()</span><span style="color:#0008"> =></span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">  if</span><span style="color:#0008"> (!</span><span style="color:#000">this</span><span style="color:#0008">.</span><span style="color:#000">_dirty</span><span style="color:#0008">)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">    this</span><span style="color:#0008">.</span><span style="color:#000">_dirty </span><span style="color:#0008">=</span><span style="color:#0008"> true</span></span>
<span class="line"><span style="color:#0008">  }</span></span>
<span class="line"><span style="color:#0008">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0008">if</span><span style="color:#0008"> (</span><span style="color:#000">effect</span><span style="color:#0008">.</span><span style="color:#000">scheduler</span><span style="color:#0008">)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">  effect</span><span style="color:#0008">.</span><span style="color:#000">scheduler</span><span style="color:#0008">()</span></span>
<span class="line"><span style="color:#0008">}</span><span style="color:#0008"> else</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">  effect</span><span style="color:#0008">.</span><span style="color:#000">run</span><span style="color:#0008">()</span></span>
<span class="line"><span style="color:#0008">}</span></span></code></pre>
<p>数据变更后，当前 <code>_dirty</code> 为 <code>false</code> ，代表缓存状态，将 <code>_dirty</code> 为 <code>true</code>，然后依赖此<code>computed</code> 数据的其他监听者重新执行， <code>a.value</code> 调用 <code>get value()</code>。</p>
<h1>总结</h1>
<p>主要相关的就三个 <code>_dirty</code> <code>_value</code> <code>传入 ReactiveEffect 的第二个参数</code>，访问 <code>computed</code> 数据的时候，如果 <code>_dirty</code> 不为真，就使用缓存值，<code>computed</code> 监听的响应式数据变更，调用传入 ReactiveEffect 的第二个参数，将<code>_dirty</code>变为真，再次访问 <code>computed</code> 数据就重新获取值</p>
`},{path:`/home/runner/work/aboutme/aboutme/src/content/blog/nextTick 原理及使用.md`,raw:"---\ndate: 2023/04/03 15:20\n---\n\n# nextTick 作用\n\n`vue` 官网对 [nextTick](https://cn.vuejs.org/api/general.html#nexttick) 的介绍为 **等待下一次 `DOM` 更新刷新的工具方法**。首先什么是 `DOM` 更新。\n\n## Dom 更新\n\n```js\ndocument.querySelector('div').innerHTML = 'Dom 更新'\nconsole.log(document.querySelector('div').innerHTML) // 会输出 Dom 更新\n```\n\n`Dom` 更新需要先对 `Dom` 对象上的属性做修改，例如修改某个节点 `innerHTML`，这一步是同步的，然后浏览器会异步更新 `DOM`。但对于 `Vue` 而言，响应式更新帮我们隐去了这一步。\n\n```html\n<template>\n  <div class=\"aka\">{{a}}</div>\n  <button @click=\"fn\">click</button>\n</template>\n\n<script setup>\n  const a = ref('')\n\n  function fn() {\n    a.value = 'Dom 更新'\n  }\n<\/script>\n```\n\n每次点击 `button` 更改 `a.value` 就会触发 `Dom` 更新。但如上文更改 `Dom` 属性是同步的，倘若代码是这样的\n\n```html\n<template>\n  <div>{{a}}|{{b}}</div>\n  <button @click=\"fn\">click</button>\n</template>\n\n<script setup>\n  const a = ref('')\n  const b = ref('')\n\n  function fn() {\n    for (let i = 1; i <= 1000; i++) {\n      a.value = `Dom 更新, ${i}`\n      b.value = `Dom 更新, ${i}`\n    }\n  }\n<\/script>\n```\n\n意味着需要修改 `Dom` 属性 `1000` 次，这显然极其浪费性能而且是无意义的，因为对于浏览器来说在执行异步的渲染任务前即便修改了 `1000` 次 `Dom`，也只会渲染 `Dom 更新, 1000` 这最后一次修改。所以 `Vue` 内部也采用了一样的办法，异步的更新 `Dom` 属性。\n\n## Vue 内部的异步更新\n\n当模板上这样展示 `{{ a }}` ，即在编译好的渲染函数中访问响应式变量 `a`， 会为 `a` 添加一个 dep，当 `a` 变更后重新执行此 `dep`。在 [源码](https://github.com/vuejs/core/blob/59e828448e7f37643cd0eaea924a764e9d314448/packages/runtime-core/src/renderer.ts#L1545) 中\n\n```ts\nconst update: SchedulerJob = () => effect.run()\nupdate.id = instance.uid\n// create reactive effect for rendering\nconst effect = (instance.effect = new ReactiveEffect(\n  componentUpdateFn,\n  () => queueJob(update),\n  instance.scope, // track it in component's effect scope\n))\n```\n\n先通过 `new ReactiveEffect` 生成一个 `effect` ，传入的第一个参数会在 `ReactiveEffect` 内部保存为一个 `fn`，然后 `ReactiveEffect` 返回一个 `run` 函数，执行 `effect.run()`，就会执行内部的 `this.fn()` 即 `componentUpdateFn`，把这个 `effect` 当做 `dep` 添加到响应式变量 `a` 的 `deps` 中，`a` 变更后再执行 `dep.run()` 。但这仍然是同步更改，`a.value` 被赋值 `1000` 次，就会执行 `1000` 次 `componentUpdateFn` 。所以 `ReactiveEffect` 可以传入第二个变量，允许你自定义怎么调用 `effect.run()`，在内部保存为 `scheduler`。源码中将 `effect.run()` 传入到 `queueJob` 函数，而 `queueJob` 函数就可以异步的延迟调用 `effect.run()`。[源码](https://github.com/vuejs/core/blob/59e828448e7f37643cd0eaea924a764e9d314448/packages/runtime-core/src/scheduler.ts#LL79-L107C2)：\n\n```ts\nexport function queueJob(job: SchedulerJob) {\n  if (\n    !queue.length ||\n    !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)\n  ) {\n    if (job.id == null) {\n      queue.push(job)\n    } else {\n      queue.splice(findInsertionIndex(job.id), 0, job)\n    }\n    queueFlush()\n  }\n}\n\nfunction queueFlush() {\n  if (!isFlushing && !isFlushPending) {\n    isFlushPending = true\n    currentFlushPromise = resolvedPromise.then(flushJobs)\n  }\n}\n```\n\n首先 `effect.run()` 会被当做一个 `job` 传入到 `queueJob` 函数，如果 `a.value` 变更后，传入的 `job` 不在 `queue` 中，那么此 `job` 就会被添加到 `queue` 并且调用 `queueFlush` 函数，这样即便触发了 `1000` 次更新，只要 `queue` 包含这个更新，只执行一次就可以了，并且同一任务内 `b.value` 变更也不会再存入一个 `job`，因为渲染函数存入 `a` `b` 的 `dep` 是相同的。其实从这里就可以解决多次触发的问题，但是同步更新 `Dom` 可能会引起回流或者重绘，因此 `Vue` 通过 [resolvedPromise](https://github.com/vuejs/core/blob/59e828448e7f37643cd0eaea924a764e9d314448/packages/runtime-core/src/scheduler.ts#L47) 创建了一个微任务，将所有的更新推迟到微任务中，一次性更新 `Dom` 。\n\n## nextTick\n\n讲到这里，`nextTick` 的作用就出来了，当 `Vue` 在微任务中修改 `Dom` 属性后，在当前任务中是拿不到被修改后的 `Dom` 属性的。\n\n```html\n<template>\n  <div>{{a}}</div>\n  <button @click=\"fn\">click</button>\n</template>\n\n<script setup>\n  const a = ref('')\n\n  function fn() {\n    for (let i = 1; i <= 1000; i++) {\n      a.value = `Dom 更新, ${i}`\n    }\n\n    console.log(document.querySelector('div').innerHTML) // 输出空字符串\n    Promise.resolve().then(() => {\n      console.log(document.querySelector('div').innerHTML) // 输出 Dom 更新, 1\n    })\n  }\n<\/script>\n```\n\n`nextTick` 也是对 `Promise.resolve` 的封装\n\n```ts\nconst resolvedPromise = /* #__PURE__ */ Promise.resolve() as Promise<any>\nexport function nextTick<T = void>(this: T, fn?: (this: T) => void): Promise<void> {\n  const p = currentFlushPromise || resolvedPromise\n\n  return fn ? p.then(this ? fn.bind(this) : fn) : p\n}\n```\n\n`currentFlushPromise` 不为空的情况下，优先使用 `currentFlushPromise`。\n\n```ts\nfunction queueFlush() {\n  if (!isFlushing && !isFlushPending) {\n    isFlushPending = true\n    currentFlushPromise = resolvedPromise.then(flushJobs)\n  }\n}\n```\n\n`currentFlushPromise` 被赋值为一个 `promise`，当 `flushJobs` 函数执行完后，也就是 `Dom` 属性更新完后就会执行 `nextTick` 的回调，而在这个回调函数中就可以得到被修改后的 `Dom` 属性值。\n",title:`nextTick 原理及使用`,date:`2023/04/03 15:20`,year:2023,category:`blog`,render:`<h1>nextTick 作用</h1>
<p><code>vue</code> 官网对 <a href="https://cn.vuejs.org/api/general.html#nexttick" target="_blank" rel="noopener noreferrer">nextTick</a> 的介绍为 <strong>等待下一次 <code>DOM</code> 更新刷新的工具方法</strong>。首先什么是 <code>DOM</code> 更新。</p>
<h2>Dom 更新</h2>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-js"><span class="line"><span style="color:#000">document</span><span style="color:#0008">.</span><span style="color:#000">querySelector</span><span style="color:#0008">(</span><span style="color:#0008">'div'</span><span style="color:#0008">).</span><span style="color:#000">innerHTML </span><span style="color:#0008">=</span><span style="color:#0008"> 'Dom 更新'</span></span>
<span class="line"><span style="color:#000">console</span><span style="color:#0008">.</span><span style="color:#000">log</span><span style="color:#0008">(</span><span style="color:#000">document</span><span style="color:#0008">.</span><span style="color:#000">querySelector</span><span style="color:#0008">(</span><span style="color:#0008">'div'</span><span style="color:#0008">).</span><span style="color:#000">innerHTML</span><span style="color:#0008">)</span><span style="color:#0008"> //</span><span style="color:#0004"> 会输出 Dom 更新</span></span></code></pre>
<p><code>Dom</code> 更新需要先对 <code>Dom</code> 对象上的属性做修改，例如修改某个节点 <code>innerHTML</code>，这一步是同步的，然后浏览器会异步更新 <code>DOM</code>。但对于 <code>Vue</code> 而言，响应式更新帮我们隐去了这一步。</p>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-html"><span class="line"><span style="color:#0008">&#x3C;</span><span style="color:#000">template</span><span style="color:#0008">></span></span>
<span class="line"><span style="color:#0008">  &#x3C;</span><span style="color:#000">div </span><span style="color:#0008">class=</span><span style="color:#0008">"aka"</span><span style="color:#0008">></span><span style="color:#000">{{a}}</span><span style="color:#0008">&#x3C;/</span><span style="color:#000">div</span><span style="color:#0008">></span></span>
<span class="line"><span style="color:#0008">  &#x3C;</span><span style="color:#000">button </span><span style="color:#0008">@click=</span><span style="color:#0008">"fn"</span><span style="color:#0008">></span><span style="color:#000">click</span><span style="color:#0008">&#x3C;/</span><span style="color:#000">button</span><span style="color:#0008">></span></span>
<span class="line"><span style="color:#0008">&#x3C;/</span><span style="color:#000">template</span><span style="color:#0008">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#0008">&#x3C;</span><span style="color:#000">script </span><span style="color:#0008">setup></span></span>
<span class="line"><span style="color:#0008">  const</span><span style="color:#000"> a </span><span style="color:#0008">=</span><span style="color:#000"> ref</span><span style="color:#0008">(</span><span style="color:#0008">''</span><span style="color:#0008">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0008">  function</span><span style="color:#000;--shiki-light-font-weight:bold"> fn</span><span style="color:#0008">()</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">    a</span><span style="color:#0008">.</span><span style="color:#000">value </span><span style="color:#0008">=</span><span style="color:#0008"> 'Dom 更新'</span></span>
<span class="line"><span style="color:#0008">  }</span></span>
<span class="line"><span style="color:#0008">&#x3C;/</span><span style="color:#000">script</span><span style="color:#0008">></span></span></code></pre>
<p>每次点击 <code>button</code> 更改 <code>a.value</code> 就会触发 <code>Dom</code> 更新。但如上文更改 <code>Dom</code> 属性是同步的，倘若代码是这样的</p>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-html"><span class="line"><span style="color:#0008">&#x3C;</span><span style="color:#000">template</span><span style="color:#0008">></span></span>
<span class="line"><span style="color:#0008">  &#x3C;</span><span style="color:#000">div</span><span style="color:#0008">></span><span style="color:#000">{{a}}|{{b}}</span><span style="color:#0008">&#x3C;/</span><span style="color:#000">div</span><span style="color:#0008">></span></span>
<span class="line"><span style="color:#0008">  &#x3C;</span><span style="color:#000">button </span><span style="color:#0008">@click=</span><span style="color:#0008">"fn"</span><span style="color:#0008">></span><span style="color:#000">click</span><span style="color:#0008">&#x3C;/</span><span style="color:#000">button</span><span style="color:#0008">></span></span>
<span class="line"><span style="color:#0008">&#x3C;/</span><span style="color:#000">template</span><span style="color:#0008">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#0008">&#x3C;</span><span style="color:#000">script </span><span style="color:#0008">setup></span></span>
<span class="line"><span style="color:#0008">  const</span><span style="color:#000"> a </span><span style="color:#0008">=</span><span style="color:#000"> ref</span><span style="color:#0008">(</span><span style="color:#0008">''</span><span style="color:#0008">)</span></span>
<span class="line"><span style="color:#0008">  const</span><span style="color:#000"> b </span><span style="color:#0008">=</span><span style="color:#000"> ref</span><span style="color:#0008">(</span><span style="color:#0008">''</span><span style="color:#0008">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0008">  function</span><span style="color:#000;--shiki-light-font-weight:bold"> fn</span><span style="color:#0008">()</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">    for</span><span style="color:#0008"> (let</span><span style="color:#000"> i </span><span style="color:#0008">=</span><span style="color:#0008"> 1;</span><span style="color:#000"> i </span><span style="color:#0008">&#x3C;=</span><span style="color:#0008"> 1000;</span><span style="color:#000"> i</span><span style="color:#0008">++)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">      a</span><span style="color:#0008">.</span><span style="color:#000">value </span><span style="color:#0008">=</span><span style="color:#0008"> \`Dom 更新, \${</span><span style="color:#000">i</span><span style="color:#0008">}\`</span></span>
<span class="line"><span style="color:#000">      b</span><span style="color:#0008">.</span><span style="color:#000">value </span><span style="color:#0008">=</span><span style="color:#0008"> \`Dom 更新, \${</span><span style="color:#000">i</span><span style="color:#0008">}\`</span></span>
<span class="line"><span style="color:#0008">    }</span></span>
<span class="line"><span style="color:#0008">  }</span></span>
<span class="line"><span style="color:#0008">&#x3C;/</span><span style="color:#000">script</span><span style="color:#0008">></span></span></code></pre>
<p>意味着需要修改 <code>Dom</code> 属性 <code>1000</code> 次，这显然极其浪费性能而且是无意义的，因为对于浏览器来说在执行异步的渲染任务前即便修改了 <code>1000</code> 次 <code>Dom</code>，也只会渲染 <code>Dom 更新, 1000</code> 这最后一次修改。所以 <code>Vue</code> 内部也采用了一样的办法，异步的更新 <code>Dom</code> 属性。</p>
<h2>Vue 内部的异步更新</h2>
<p>当模板上这样展示 <code>{{ a }}</code> ，即在编译好的渲染函数中访问响应式变量 <code>a</code>， 会为 <code>a</code> 添加一个 dep，当 <code>a</code> 变更后重新执行此 <code>dep</code>。在 <a href="https://github.com/vuejs/core/blob/59e828448e7f37643cd0eaea924a764e9d314448/packages/runtime-core/src/renderer.ts#L1545" target="_blank" rel="noopener noreferrer">源码</a> 中</p>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-ts"><span class="line"><span style="color:#0008">const</span><span style="color:#000;--shiki-light-font-weight:bold"> update</span><span style="color:#0008">:</span><span style="color:#000;--shiki-light-font-weight:bold"> SchedulerJob</span><span style="color:#0008"> =</span><span style="color:#0008"> ()</span><span style="color:#0008"> =></span><span style="color:#000"> effect</span><span style="color:#0008">.</span><span style="color:#000">run</span><span style="color:#0008">()</span></span>
<span class="line"><span style="color:#000">update</span><span style="color:#0008">.</span><span style="color:#000">id </span><span style="color:#0008">=</span><span style="color:#000"> instance</span><span style="color:#0008">.</span><span style="color:#000">uid</span></span>
<span class="line"><span style="color:#0008">//</span><span style="color:#0004"> create reactive effect for rendering</span></span>
<span class="line"><span style="color:#0008">const</span><span style="color:#000"> effect </span><span style="color:#0008">=</span><span style="color:#0008"> (</span><span style="color:#000">instance</span><span style="color:#0008">.</span><span style="color:#000">effect </span><span style="color:#0008">=</span><span style="color:#0008"> new</span><span style="color:#000"> ReactiveEffect</span><span style="color:#0008">(</span></span>
<span class="line"><span style="color:#000">  componentUpdateFn</span><span style="color:#0008">,</span></span>
<span class="line"><span style="color:#0008">  ()</span><span style="color:#0008"> =></span><span style="color:#000"> queueJob</span><span style="color:#0008">(</span><span style="color:#000">update</span><span style="color:#0008">),</span></span>
<span class="line"><span style="color:#000">  instance</span><span style="color:#0008">.</span><span style="color:#000">scope</span><span style="color:#0008">,</span><span style="color:#0008"> //</span><span style="color:#0004"> track it in component's effect scope</span></span>
<span class="line"><span style="color:#0008">))</span></span></code></pre>
<p>先通过 <code>new ReactiveEffect</code> 生成一个 <code>effect</code> ，传入的第一个参数会在 <code>ReactiveEffect</code> 内部保存为一个 <code>fn</code>，然后 <code>ReactiveEffect</code> 返回一个 <code>run</code> 函数，执行 <code>effect.run()</code>，就会执行内部的 <code>this.fn()</code> 即 <code>componentUpdateFn</code>，把这个 <code>effect</code> 当做 <code>dep</code> 添加到响应式变量 <code>a</code> 的 <code>deps</code> 中，<code>a</code> 变更后再执行 <code>dep.run()</code> 。但这仍然是同步更改，<code>a.value</code> 被赋值 <code>1000</code> 次，就会执行 <code>1000</code> 次 <code>componentUpdateFn</code> 。所以 <code>ReactiveEffect</code> 可以传入第二个变量，允许你自定义怎么调用 <code>effect.run()</code>，在内部保存为 <code>scheduler</code>。源码中将 <code>effect.run()</code> 传入到 <code>queueJob</code> 函数，而 <code>queueJob</code> 函数就可以异步的延迟调用 <code>effect.run()</code>。<a href="https://github.com/vuejs/core/blob/59e828448e7f37643cd0eaea924a764e9d314448/packages/runtime-core/src/scheduler.ts#LL79-L107C2" target="_blank" rel="noopener noreferrer">源码</a>：</p>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-ts"><span class="line"><span style="color:#0008">export</span><span style="color:#0008"> function</span><span style="color:#000;--shiki-light-font-weight:bold"> queueJob</span><span style="color:#0008">(</span><span style="color:#000">job</span><span style="color:#0008">:</span><span style="color:#000;--shiki-light-font-weight:bold"> SchedulerJob</span><span style="color:#0008">)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">  if</span><span style="color:#0008"> (</span></span>
<span class="line"><span style="color:#0008">    !</span><span style="color:#000">queue</span><span style="color:#0008">.</span><span style="color:#000">length </span><span style="color:#0008">||</span></span>
<span class="line"><span style="color:#0008">    !</span><span style="color:#000">queue</span><span style="color:#0008">.</span><span style="color:#000">includes</span><span style="color:#0008">(</span><span style="color:#000">job</span><span style="color:#0008">,</span><span style="color:#000"> isFlushing </span><span style="color:#0008">&#x26;&#x26;</span><span style="color:#000"> job</span><span style="color:#0008">.</span><span style="color:#000">allowRecurse </span><span style="color:#0008">?</span><span style="color:#000"> flushIndex </span><span style="color:#0008">+</span><span style="color:#0008"> 1</span><span style="color:#0008"> :</span><span style="color:#000"> flushIndex</span><span style="color:#0008">)</span></span>
<span class="line"><span style="color:#0008">  )</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">    if</span><span style="color:#0008"> (</span><span style="color:#000">job</span><span style="color:#0008">.</span><span style="color:#000">id </span><span style="color:#0008">==</span><span style="color:#0008"> null)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">      queue</span><span style="color:#0008">.</span><span style="color:#000">push</span><span style="color:#0008">(</span><span style="color:#000">job</span><span style="color:#0008">)</span></span>
<span class="line"><span style="color:#0008">    }</span><span style="color:#0008"> else</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">      queue</span><span style="color:#0008">.</span><span style="color:#000">splice</span><span style="color:#0008">(</span><span style="color:#000">findInsertionIndex</span><span style="color:#0008">(</span><span style="color:#000">job</span><span style="color:#0008">.</span><span style="color:#000">id</span><span style="color:#0008">),</span><span style="color:#0008"> 0,</span><span style="color:#000"> job</span><span style="color:#0008">)</span></span>
<span class="line"><span style="color:#0008">    }</span></span>
<span class="line"><span style="color:#000">    queueFlush</span><span style="color:#0008">()</span></span>
<span class="line"><span style="color:#0008">  }</span></span>
<span class="line"><span style="color:#0008">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0008">function</span><span style="color:#000;--shiki-light-font-weight:bold"> queueFlush</span><span style="color:#0008">()</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">  if</span><span style="color:#0008"> (!</span><span style="color:#000">isFlushing </span><span style="color:#0008">&#x26;&#x26;</span><span style="color:#0008"> !</span><span style="color:#000">isFlushPending</span><span style="color:#0008">)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">    isFlushPending </span><span style="color:#0008">=</span><span style="color:#0008"> true</span></span>
<span class="line"><span style="color:#000">    currentFlushPromise </span><span style="color:#0008">=</span><span style="color:#000"> resolvedPromise</span><span style="color:#0008">.</span><span style="color:#000">then</span><span style="color:#0008">(</span><span style="color:#000">flushJobs</span><span style="color:#0008">)</span></span>
<span class="line"><span style="color:#0008">  }</span></span>
<span class="line"><span style="color:#0008">}</span></span></code></pre>
<p>首先 <code>effect.run()</code> 会被当做一个 <code>job</code> 传入到 <code>queueJob</code> 函数，如果 <code>a.value</code> 变更后，传入的 <code>job</code> 不在 <code>queue</code> 中，那么此 <code>job</code> 就会被添加到 <code>queue</code> 并且调用 <code>queueFlush</code> 函数，这样即便触发了 <code>1000</code> 次更新，只要 <code>queue</code> 包含这个更新，只执行一次就可以了，并且同一任务内 <code>b.value</code> 变更也不会再存入一个 <code>job</code>，因为渲染函数存入 <code>a</code> <code>b</code> 的 <code>dep</code> 是相同的。其实从这里就可以解决多次触发的问题，但是同步更新 <code>Dom</code> 可能会引起回流或者重绘，因此 <code>Vue</code> 通过 <a href="https://github.com/vuejs/core/blob/59e828448e7f37643cd0eaea924a764e9d314448/packages/runtime-core/src/scheduler.ts#L47" target="_blank" rel="noopener noreferrer">resolvedPromise</a> 创建了一个微任务，将所有的更新推迟到微任务中，一次性更新 <code>Dom</code> 。</p>
<h2>nextTick</h2>
<p>讲到这里，<code>nextTick</code> 的作用就出来了，当 <code>Vue</code> 在微任务中修改 <code>Dom</code> 属性后，在当前任务中是拿不到被修改后的 <code>Dom</code> 属性的。</p>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-html"><span class="line"><span style="color:#0008">&#x3C;</span><span style="color:#000">template</span><span style="color:#0008">></span></span>
<span class="line"><span style="color:#0008">  &#x3C;</span><span style="color:#000">div</span><span style="color:#0008">></span><span style="color:#000">{{a}}</span><span style="color:#0008">&#x3C;/</span><span style="color:#000">div</span><span style="color:#0008">></span></span>
<span class="line"><span style="color:#0008">  &#x3C;</span><span style="color:#000">button </span><span style="color:#0008">@click=</span><span style="color:#0008">"fn"</span><span style="color:#0008">></span><span style="color:#000">click</span><span style="color:#0008">&#x3C;/</span><span style="color:#000">button</span><span style="color:#0008">></span></span>
<span class="line"><span style="color:#0008">&#x3C;/</span><span style="color:#000">template</span><span style="color:#0008">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#0008">&#x3C;</span><span style="color:#000">script </span><span style="color:#0008">setup></span></span>
<span class="line"><span style="color:#0008">  const</span><span style="color:#000"> a </span><span style="color:#0008">=</span><span style="color:#000"> ref</span><span style="color:#0008">(</span><span style="color:#0008">''</span><span style="color:#0008">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0008">  function</span><span style="color:#000;--shiki-light-font-weight:bold"> fn</span><span style="color:#0008">()</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">    for</span><span style="color:#0008"> (let</span><span style="color:#000"> i </span><span style="color:#0008">=</span><span style="color:#0008"> 1;</span><span style="color:#000"> i </span><span style="color:#0008">&#x3C;=</span><span style="color:#0008"> 1000;</span><span style="color:#000"> i</span><span style="color:#0008">++)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">      a</span><span style="color:#0008">.</span><span style="color:#000">value </span><span style="color:#0008">=</span><span style="color:#0008"> \`Dom 更新, \${</span><span style="color:#000">i</span><span style="color:#0008">}\`</span></span>
<span class="line"><span style="color:#0008">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000">    console</span><span style="color:#0008">.</span><span style="color:#000">log</span><span style="color:#0008">(</span><span style="color:#000">document</span><span style="color:#0008">.</span><span style="color:#000">querySelector</span><span style="color:#0008">(</span><span style="color:#0008">'div'</span><span style="color:#0008">).</span><span style="color:#000">innerHTML</span><span style="color:#0008">)</span><span style="color:#0008"> //</span><span style="color:#0004"> 输出空字符串</span></span>
<span class="line"><span style="color:#000;--shiki-light-font-weight:bold">    Promise</span><span style="color:#0008">.</span><span style="color:#000">resolve</span><span style="color:#0008">().</span><span style="color:#000">then</span><span style="color:#0008">(()</span><span style="color:#0008"> =></span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">      console</span><span style="color:#0008">.</span><span style="color:#000">log</span><span style="color:#0008">(</span><span style="color:#000">document</span><span style="color:#0008">.</span><span style="color:#000">querySelector</span><span style="color:#0008">(</span><span style="color:#0008">'div'</span><span style="color:#0008">).</span><span style="color:#000">innerHTML</span><span style="color:#0008">)</span><span style="color:#0008"> //</span><span style="color:#0004"> 输出 Dom 更新, 1</span></span>
<span class="line"><span style="color:#0008">    })</span></span>
<span class="line"><span style="color:#0008">  }</span></span>
<span class="line"><span style="color:#0008">&#x3C;/</span><span style="color:#000">script</span><span style="color:#0008">></span></span></code></pre>
<p><code>nextTick</code> 也是对 <code>Promise.resolve</code> 的封装</p>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-ts"><span class="line"><span style="color:#0008">const</span><span style="color:#000"> resolvedPromise </span><span style="color:#0008">=</span><span style="color:#0008"> /*</span><span style="color:#0004"> #__PURE__ </span><span style="color:#0008">*/</span><span style="color:#000;--shiki-light-font-weight:bold"> Promise</span><span style="color:#0008">.</span><span style="color:#000">resolve</span><span style="color:#0008">()</span><span style="color:#0008"> as</span><span style="color:#000;--shiki-light-font-weight:bold"> Promise</span><span style="color:#0008">&#x3C;</span><span style="color:#000">any</span><span style="color:#0008">></span></span>
<span class="line"><span style="color:#0008">export</span><span style="color:#0008"> function</span><span style="color:#000;--shiki-light-font-weight:bold"> nextTick</span><span style="color:#0008">&#x3C;</span><span style="color:#000;--shiki-light-font-weight:bold">T</span><span style="color:#0008"> =</span><span style="color:#000"> void</span><span style="color:#0008">>(</span><span style="color:#000">this</span><span style="color:#0008">:</span><span style="color:#000;--shiki-light-font-weight:bold"> T</span><span style="color:#0008">,</span><span style="color:#000;--shiki-light-font-weight:bold"> fn</span><span style="color:#0008">?:</span><span style="color:#0008"> (</span><span style="color:#000">this</span><span style="color:#0008">:</span><span style="color:#000;--shiki-light-font-weight:bold"> T</span><span style="color:#0008">)</span><span style="color:#0008"> =></span><span style="color:#000"> void</span><span style="color:#0008">):</span><span style="color:#000;--shiki-light-font-weight:bold"> Promise</span><span style="color:#0008">&#x3C;</span><span style="color:#000">void</span><span style="color:#0008">></span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">  const</span><span style="color:#000"> p </span><span style="color:#0008">=</span><span style="color:#000"> currentFlushPromise </span><span style="color:#0008">||</span><span style="color:#000"> resolvedPromise</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0008">  return</span><span style="color:#000"> fn </span><span style="color:#0008">?</span><span style="color:#000"> p</span><span style="color:#0008">.</span><span style="color:#000">then</span><span style="color:#0008">(</span><span style="color:#000">this </span><span style="color:#0008">?</span><span style="color:#000"> fn</span><span style="color:#0008">.</span><span style="color:#000">bind</span><span style="color:#0008">(</span><span style="color:#000">this</span><span style="color:#0008">)</span><span style="color:#0008"> :</span><span style="color:#000"> fn</span><span style="color:#0008">)</span><span style="color:#0008"> :</span><span style="color:#000"> p</span></span>
<span class="line"><span style="color:#0008">}</span></span></code></pre>
<p><code>currentFlushPromise</code> 不为空的情况下，优先使用 <code>currentFlushPromise</code>。</p>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-ts"><span class="line"><span style="color:#0008">function</span><span style="color:#000;--shiki-light-font-weight:bold"> queueFlush</span><span style="color:#0008">()</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">  if</span><span style="color:#0008"> (!</span><span style="color:#000">isFlushing </span><span style="color:#0008">&#x26;&#x26;</span><span style="color:#0008"> !</span><span style="color:#000">isFlushPending</span><span style="color:#0008">)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">    isFlushPending </span><span style="color:#0008">=</span><span style="color:#0008"> true</span></span>
<span class="line"><span style="color:#000">    currentFlushPromise </span><span style="color:#0008">=</span><span style="color:#000"> resolvedPromise</span><span style="color:#0008">.</span><span style="color:#000">then</span><span style="color:#0008">(</span><span style="color:#000">flushJobs</span><span style="color:#0008">)</span></span>
<span class="line"><span style="color:#0008">  }</span></span>
<span class="line"><span style="color:#0008">}</span></span></code></pre>
<p><code>currentFlushPromise</code> 被赋值为一个 <code>promise</code>，当 <code>flushJobs</code> 函数执行完后，也就是 <code>Dom</code> 属性更新完后就会执行 <code>nextTick</code> 的回调，而在这个回调函数中就可以得到被修改后的 <code>Dom</code> 属性值。</p>
`},{path:`/home/runner/work/aboutme/aboutme/src/content/blog/最长递增子序列长度动态规划.md`,raw:`---
date: 2024/01/26 15:07
---

# 题目

给定一个整数数组 nums ，找到其中最长严格递增子序列的长度。例如 \`[1, 2, 3]\` 的最长递增长度是 \`3\`，\`[1, 7, 5, 6]\` 的最长递增子序列是 \`[1, 5, 6]\` 长度为 \`3\`。

# 动态规划详解

## 完整代码

\`\`\`js
/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
  const len = nums.length
  if (len < 1) {
    return len
  }

  const dp = Array.from({ length: len }).fill(1)
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return Math.max(...dp)
}
\`\`\`

## 详解步骤

> 数组长度小于 \`2\` 的不需要查找，例如 \`[1]\` \`[]\` \`[5]\` 这些的长度只可能是 \`0\` 或 \`1\`。

\`\`\`js
function lengthOfLIS(nums) {
  const len = nums.length
  if (len < 2) {
    return len
  }
  // ...
}
\`\`\`

> 创建一个和 \`nums\` 一样长度的数组，内部全部填充 \`1\`。

\`\`\`js {3}
function lengthOfLIS(nums) {
  // ...
  const dp = Array.from({ length: len }).fill(1)
  // ...
}
\`\`\`

其目的是存放 \`以当前数为结尾的递增子序列长度\`

\`\`\`js
nums = [1, 3, 5]
dp = [1, 1, 1] // 默认为 1
\`\`\`

- \`1\` 的递增子序列只可能为 \`1\`，长度也为 \`1\`
- \`3\` 的子序列为 \`[1, 3]\`, 长度为 \`2\`，
- \`5\` 的子序列为 \`[1, 3, 5]\` 长度为 \`3\`。

最终 \`dp\` 内存储的子序列长度为：

\`\`\`js
dp = [1, 2, 3]
\`\`\`

同理 \`[1, 7, 3, 5]\` 的 \`dp\` 数组就是 \`[1, 2, 2, 3]\`。

> 双重遍历 \`nums\` 数组，在 \`nums\` 里查找比当前数小的值。

\`\`\`js {4-5, 7, 8-10}
function lengthOfLIS(nums) {
  // ...
  const dp = Array.from({ length: len }).fill(1)
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      // 查找比 nums[i] 小的值
      if (nums[j] < nums[i]) {
        // ...
      }
    }
  }
}
\`\`\`

\`dp\` 数组中存储的是子序列长度，那么一旦查找到比当前数小的值，就可以获取到这个数在 \`dp\` 中存储的子序列长度。当前值比前面的值大，那前面的子序列肯定就归属于当前值。例如：

\`\`\`js
nums = [2, 3, 5]
// 初始 dp 为
dp = [1, 1, 1]
// 找到比 3 小的就是 2，那么 3 的子序列长度就是 （2 的子序列长度 + 1）即
dp[1] = dp[0] + 1 // dp = [1, 2, 1]
// 同理，比 5 小的有 2 和 3，先遍历到比 5 小的 2，那 dp 为
dp[2] = dp[0] + 1 // dp = [1, 2, 2]
// 再遍历到 3
dp[2] = dp[1] + 1 // dp = [1, 2, 3]
\`\`\`

对应的代码就是

\`\`\`js {9}
function lengthOfLIS(nums) {
  // ...
  const dp = Array.from({ length: len }).fill(1)
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      // 查找比 nums[i] 小的值
      if (nums[j] < nums[i]) {
        // 查找到了就是 j 所存储的子序列长度 + 1
        dp[i] = dp[j] + 1
      }
    }
  }
}
\`\`\`

但 \`nums\` 是乱序，可能会有 \`[2, 5, 6, 3, 8]\` 的情况，当遍历到 \`3\` 的时候，此时的 \`dp\` 数组是这样的

\`\`\`js
nums = [2, 5, 6, 3, 8]
dp = [1, 2, 3, 2, 1]
\`\`\`

如果按照上面的代码逻辑，那么 \`8\` 所对应的子序列长度应该是
// nums[i] 为 8，nums[j] 为 3
dp[i] = dp[j] + 1
// dp 为 [1, 2, 3, 2, 3]

\`3\` 所对应的子序列很明显不是最长，所以需要和当前值的子序列长度进行比较，如果大于当前值的子序列长度，那么就更新，否则还是使用原长度。

\`\`\`js {9}
function lengthOfLIS(nums) {
  // ...
  const dp = Array.from({ length: len }).fill(1)
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      // 查找比 nums[i] 小的值
      if (nums[j] < nums[i]) {
        // 和当前存储的子序列长度进行比较，取最大值
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
    }
  }
}
\`\`\`

最后返回 \`dp\` 数组中的最大值即可。

\`\`\`js {14}
function lengthOfLIS(nums) {
  // ...
  const dp = Array.from({ length: len }).fill(1)
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      // 查找比 nums[i] 小的值
      if (nums[j] < nums[i]) {
        // 和当前存储的子序列长度进行比较，取最大值
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
    }
  }

  return Math.max(...dp)
}
\`\`\`
`,title:`最长递增子序列长度动态规划`,date:`2024/01/26 15:07`,year:2024,category:`blog`,render:`<h1>题目</h1>
<p>给定一个整数数组 nums ，找到其中最长严格递增子序列的长度。例如 <code>[1, 2, 3]</code> 的最长递增长度是 <code>3</code>，<code>[1, 7, 5, 6]</code> 的最长递增子序列是 <code>[1, 5, 6]</code> 长度为 <code>3</code>。</p>
<h1>动态规划详解</h1>
<h2>完整代码</h2>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-js"><span class="line"><span style="color:#0008">/**</span></span>
<span class="line"><span style="color:#0004"> * </span><span style="color:#0008">@param</span><span style="color:#0008;--shiki-light-font-weight:bold"> {</span><span style="color:#000;--shiki-light-font-weight:bold">number[]</span><span style="color:#0008;--shiki-light-font-weight:bold">}</span><span style="color:#0004"> nums</span></span>
<span class="line"><span style="color:#0004"> * </span><span style="color:#0008">@return</span><span style="color:#0008;--shiki-light-font-weight:bold"> {</span><span style="color:#000;--shiki-light-font-weight:bold">number</span><span style="color:#0008;--shiki-light-font-weight:bold">}</span></span>
<span class="line"><span style="color:#0008"> */</span></span>
<span class="line"><span style="color:#0008">function</span><span style="color:#000;--shiki-light-font-weight:bold"> lengthOfLIS</span><span style="color:#0008">(</span><span style="color:#000">nums</span><span style="color:#0008">)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">  const</span><span style="color:#000"> len </span><span style="color:#0008">=</span><span style="color:#000"> nums</span><span style="color:#0008">.</span><span style="color:#000">length</span></span>
<span class="line"><span style="color:#0008">  if</span><span style="color:#0008"> (</span><span style="color:#000">len </span><span style="color:#0008">&#x3C;</span><span style="color:#0008"> 1)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">    return</span><span style="color:#000"> len</span></span>
<span class="line"><span style="color:#0008">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0008">  const</span><span style="color:#000"> dp </span><span style="color:#0008">=</span><span style="color:#000"> Array</span><span style="color:#0008">.</span><span style="color:#000">from</span><span style="color:#0008">({</span><span style="color:#000"> length</span><span style="color:#0008">:</span><span style="color:#000"> len </span><span style="color:#0008">}).</span><span style="color:#000">fill</span><span style="color:#0008">(1)</span></span>
<span class="line"><span style="color:#0008">  for</span><span style="color:#0008"> (let</span><span style="color:#000"> i </span><span style="color:#0008">=</span><span style="color:#0008"> 1;</span><span style="color:#000"> i </span><span style="color:#0008">&#x3C;</span><span style="color:#000"> len</span><span style="color:#0008">;</span><span style="color:#000"> i</span><span style="color:#0008">++)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">    for</span><span style="color:#0008"> (let</span><span style="color:#000"> j </span><span style="color:#0008">=</span><span style="color:#0008"> 0;</span><span style="color:#000"> j </span><span style="color:#0008">&#x3C;</span><span style="color:#000"> i</span><span style="color:#0008">;</span><span style="color:#000"> j</span><span style="color:#0008">++)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">      if</span><span style="color:#0008"> (</span><span style="color:#000">nums</span><span style="color:#0008">[</span><span style="color:#000">j</span><span style="color:#0008">]</span><span style="color:#0008"> &#x3C;</span><span style="color:#000"> nums</span><span style="color:#0008">[</span><span style="color:#000">i</span><span style="color:#0008">])</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#000">        dp</span><span style="color:#0008">[</span><span style="color:#000">i</span><span style="color:#0008">]</span><span style="color:#0008"> =</span><span style="color:#000"> Math</span><span style="color:#0008">.</span><span style="color:#000">max</span><span style="color:#0008">(</span><span style="color:#000">dp</span><span style="color:#0008">[</span><span style="color:#000">i</span><span style="color:#0008">],</span><span style="color:#000"> dp</span><span style="color:#0008">[</span><span style="color:#000">j</span><span style="color:#0008">]</span><span style="color:#0008"> +</span><span style="color:#0008"> 1)</span></span>
<span class="line"><span style="color:#0008">      }</span></span>
<span class="line"><span style="color:#0008">    }</span></span>
<span class="line"><span style="color:#0008">  }</span></span>
<span class="line"><span style="color:#0008">  return</span><span style="color:#000"> Math</span><span style="color:#0008">.</span><span style="color:#000">max</span><span style="color:#0008">(...</span><span style="color:#000">dp</span><span style="color:#0008">)</span></span>
<span class="line"><span style="color:#0008">}</span></span></code></pre>
<h2>详解步骤</h2>
<blockquote>
<p>数组长度小于 <code>2</code> 的不需要查找，例如 <code>[1]</code> <code>[]</code> <code>[5]</code> 这些的长度只可能是 <code>0</code> 或 <code>1</code>。</p>
</blockquote>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-js"><span class="line"><span style="color:#0008">function</span><span style="color:#000;--shiki-light-font-weight:bold"> lengthOfLIS</span><span style="color:#0008">(</span><span style="color:#000">nums</span><span style="color:#0008">)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">  const</span><span style="color:#000"> len </span><span style="color:#0008">=</span><span style="color:#000"> nums</span><span style="color:#0008">.</span><span style="color:#000">length</span></span>
<span class="line"><span style="color:#0008">  if</span><span style="color:#0008"> (</span><span style="color:#000">len </span><span style="color:#0008">&#x3C;</span><span style="color:#0008"> 2)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">    return</span><span style="color:#000"> len</span></span>
<span class="line"><span style="color:#0008">  }</span></span>
<span class="line"><span style="color:#0008">  //</span><span style="color:#0004"> ...</span></span>
<span class="line"><span style="color:#0008">}</span></span></code></pre>
<blockquote>
<p>创建一个和 <code>nums</code> 一样长度的数组，内部全部填充 <code>1</code>。</p>
</blockquote>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-js"><span class="line"><span style="color:#0008">function</span><span style="color:#000;--shiki-light-font-weight:bold"> lengthOfLIS</span><span style="color:#0008">(</span><span style="color:#000">nums</span><span style="color:#0008">)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">  //</span><span style="color:#0004"> ...</span></span>
<span class="line"><span style="color:#0008">  const</span><span style="color:#000"> dp </span><span style="color:#0008">=</span><span style="color:#000"> Array</span><span style="color:#0008">.</span><span style="color:#000">from</span><span style="color:#0008">({</span><span style="color:#000"> length</span><span style="color:#0008">:</span><span style="color:#000"> len </span><span style="color:#0008">}).</span><span style="color:#000">fill</span><span style="color:#0008">(1)</span></span>
<span class="line"><span style="color:#0008">  //</span><span style="color:#0004"> ...</span></span>
<span class="line"><span style="color:#0008">}</span></span></code></pre>
<p>其目的是存放 <code>以当前数为结尾的递增子序列长度</code></p>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-js"><span class="line"><span style="color:#000">nums </span><span style="color:#0008">=</span><span style="color:#0008"> [1,</span><span style="color:#0008"> 3,</span><span style="color:#0008"> 5]</span></span>
<span class="line"><span style="color:#000">dp </span><span style="color:#0008">=</span><span style="color:#0008"> [1,</span><span style="color:#0008"> 1,</span><span style="color:#0008"> 1]</span><span style="color:#0008"> //</span><span style="color:#0004"> 默认为 1</span></span></code></pre>
<ul>
<li><code>1</code> 的递增子序列只可能为 <code>1</code>，长度也为 <code>1</code></li>
<li><code>3</code> 的子序列为 <code>[1, 3]</code>, 长度为 <code>2</code>，</li>
<li><code>5</code> 的子序列为 <code>[1, 3, 5]</code> 长度为 <code>3</code>。</li>
</ul>
<p>最终 <code>dp</code> 内存储的子序列长度为：</p>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-js"><span class="line"><span style="color:#000">dp </span><span style="color:#0008">=</span><span style="color:#0008"> [1,</span><span style="color:#0008"> 2,</span><span style="color:#0008"> 3]</span></span></code></pre>
<p>同理 <code>[1, 7, 3, 5]</code> 的 <code>dp</code> 数组就是 <code>[1, 2, 2, 3]</code>。</p>
<blockquote>
<p>双重遍历 <code>nums</code> 数组，在 <code>nums</code> 里查找比当前数小的值。</p>
</blockquote>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-js"><span class="line"><span style="color:#0008">function</span><span style="color:#000;--shiki-light-font-weight:bold"> lengthOfLIS</span><span style="color:#0008">(</span><span style="color:#000">nums</span><span style="color:#0008">)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">  //</span><span style="color:#0004"> ...</span></span>
<span class="line"><span style="color:#0008">  const</span><span style="color:#000"> dp </span><span style="color:#0008">=</span><span style="color:#000"> Array</span><span style="color:#0008">.</span><span style="color:#000">from</span><span style="color:#0008">({</span><span style="color:#000"> length</span><span style="color:#0008">:</span><span style="color:#000"> len </span><span style="color:#0008">}).</span><span style="color:#000">fill</span><span style="color:#0008">(1)</span></span>
<span class="line"><span style="color:#0008">  for</span><span style="color:#0008"> (let</span><span style="color:#000"> i </span><span style="color:#0008">=</span><span style="color:#0008"> 1;</span><span style="color:#000"> i </span><span style="color:#0008">&#x3C;</span><span style="color:#000"> len</span><span style="color:#0008">;</span><span style="color:#000"> i</span><span style="color:#0008">++)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">    for</span><span style="color:#0008"> (let</span><span style="color:#000"> j </span><span style="color:#0008">=</span><span style="color:#0008"> 0;</span><span style="color:#000"> j </span><span style="color:#0008">&#x3C;</span><span style="color:#000"> i</span><span style="color:#0008">;</span><span style="color:#000"> j</span><span style="color:#0008">++)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">      //</span><span style="color:#0004"> 查找比 nums[i] 小的值</span></span>
<span class="line"><span style="color:#0008">      if</span><span style="color:#0008"> (</span><span style="color:#000">nums</span><span style="color:#0008">[</span><span style="color:#000">j</span><span style="color:#0008">]</span><span style="color:#0008"> &#x3C;</span><span style="color:#000"> nums</span><span style="color:#0008">[</span><span style="color:#000">i</span><span style="color:#0008">])</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">        //</span><span style="color:#0004"> ...</span></span>
<span class="line"><span style="color:#0008">      }</span></span>
<span class="line"><span style="color:#0008">    }</span></span>
<span class="line"><span style="color:#0008">  }</span></span>
<span class="line"><span style="color:#0008">}</span></span></code></pre>
<p><code>dp</code> 数组中存储的是子序列长度，那么一旦查找到比当前数小的值，就可以获取到这个数在 <code>dp</code> 中存储的子序列长度。当前值比前面的值大，那前面的子序列肯定就归属于当前值。例如：</p>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-js"><span class="line"><span style="color:#000">nums </span><span style="color:#0008">=</span><span style="color:#0008"> [2,</span><span style="color:#0008"> 3,</span><span style="color:#0008"> 5]</span></span>
<span class="line"><span style="color:#0008">//</span><span style="color:#0004"> 初始 dp 为</span></span>
<span class="line"><span style="color:#000">dp </span><span style="color:#0008">=</span><span style="color:#0008"> [1,</span><span style="color:#0008"> 1,</span><span style="color:#0008"> 1]</span></span>
<span class="line"><span style="color:#0008">//</span><span style="color:#0004"> 找到比 3 小的就是 2，那么 3 的子序列长度就是 （2 的子序列长度 + 1）即</span></span>
<span class="line"><span style="color:#000">dp</span><span style="color:#0008">[1]</span><span style="color:#0008"> =</span><span style="color:#000"> dp</span><span style="color:#0008">[0]</span><span style="color:#0008"> +</span><span style="color:#0008"> 1</span><span style="color:#0008"> //</span><span style="color:#0004"> dp = [1, 2, 1]</span></span>
<span class="line"><span style="color:#0008">//</span><span style="color:#0004"> 同理，比 5 小的有 2 和 3，先遍历到比 5 小的 2，那 dp 为</span></span>
<span class="line"><span style="color:#000">dp</span><span style="color:#0008">[2]</span><span style="color:#0008"> =</span><span style="color:#000"> dp</span><span style="color:#0008">[0]</span><span style="color:#0008"> +</span><span style="color:#0008"> 1</span><span style="color:#0008"> //</span><span style="color:#0004"> dp = [1, 2, 2]</span></span>
<span class="line"><span style="color:#0008">//</span><span style="color:#0004"> 再遍历到 3</span></span>
<span class="line"><span style="color:#000">dp</span><span style="color:#0008">[2]</span><span style="color:#0008"> =</span><span style="color:#000"> dp</span><span style="color:#0008">[1]</span><span style="color:#0008"> +</span><span style="color:#0008"> 1</span><span style="color:#0008"> //</span><span style="color:#0004"> dp = [1, 2, 3]</span></span></code></pre>
<p>对应的代码就是</p>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-js"><span class="line"><span style="color:#0008">function</span><span style="color:#000;--shiki-light-font-weight:bold"> lengthOfLIS</span><span style="color:#0008">(</span><span style="color:#000">nums</span><span style="color:#0008">)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">  //</span><span style="color:#0004"> ...</span></span>
<span class="line"><span style="color:#0008">  const</span><span style="color:#000"> dp </span><span style="color:#0008">=</span><span style="color:#000"> Array</span><span style="color:#0008">.</span><span style="color:#000">from</span><span style="color:#0008">({</span><span style="color:#000"> length</span><span style="color:#0008">:</span><span style="color:#000"> len </span><span style="color:#0008">}).</span><span style="color:#000">fill</span><span style="color:#0008">(1)</span></span>
<span class="line"><span style="color:#0008">  for</span><span style="color:#0008"> (let</span><span style="color:#000"> i </span><span style="color:#0008">=</span><span style="color:#0008"> 1;</span><span style="color:#000"> i </span><span style="color:#0008">&#x3C;</span><span style="color:#000"> len</span><span style="color:#0008">;</span><span style="color:#000"> i</span><span style="color:#0008">++)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">    for</span><span style="color:#0008"> (let</span><span style="color:#000"> j </span><span style="color:#0008">=</span><span style="color:#0008"> 0;</span><span style="color:#000"> j </span><span style="color:#0008">&#x3C;</span><span style="color:#000"> i</span><span style="color:#0008">;</span><span style="color:#000"> j</span><span style="color:#0008">++)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">      //</span><span style="color:#0004"> 查找比 nums[i] 小的值</span></span>
<span class="line"><span style="color:#0008">      if</span><span style="color:#0008"> (</span><span style="color:#000">nums</span><span style="color:#0008">[</span><span style="color:#000">j</span><span style="color:#0008">]</span><span style="color:#0008"> &#x3C;</span><span style="color:#000"> nums</span><span style="color:#0008">[</span><span style="color:#000">i</span><span style="color:#0008">])</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">        //</span><span style="color:#0004"> 查找到了就是 j 所存储的子序列长度 + 1</span></span>
<span class="line"><span style="color:#000">        dp</span><span style="color:#0008">[</span><span style="color:#000">i</span><span style="color:#0008">]</span><span style="color:#0008"> =</span><span style="color:#000"> dp</span><span style="color:#0008">[</span><span style="color:#000">j</span><span style="color:#0008">]</span><span style="color:#0008"> +</span><span style="color:#0008"> 1</span></span>
<span class="line"><span style="color:#0008">      }</span></span>
<span class="line"><span style="color:#0008">    }</span></span>
<span class="line"><span style="color:#0008">  }</span></span>
<span class="line"><span style="color:#0008">}</span></span></code></pre>
<p>但 <code>nums</code> 是乱序，可能会有 <code>[2, 5, 6, 3, 8]</code> 的情况，当遍历到 <code>3</code> 的时候，此时的 <code>dp</code> 数组是这样的</p>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-js"><span class="line"><span style="color:#000">nums </span><span style="color:#0008">=</span><span style="color:#0008"> [2,</span><span style="color:#0008"> 5,</span><span style="color:#0008"> 6,</span><span style="color:#0008"> 3,</span><span style="color:#0008"> 8]</span></span>
<span class="line"><span style="color:#000">dp </span><span style="color:#0008">=</span><span style="color:#0008"> [1,</span><span style="color:#0008"> 2,</span><span style="color:#0008"> 3,</span><span style="color:#0008"> 2,</span><span style="color:#0008"> 1]</span></span></code></pre>
<p>如果按照上面的代码逻辑，那么 <code>8</code> 所对应的子序列长度应该是
// nums[i] 为 8，nums[j] 为 3
dp[i] = dp[j] + 1
// dp 为 [1, 2, 3, 2, 3]</p>
<p><code>3</code> 所对应的子序列很明显不是最长，所以需要和当前值的子序列长度进行比较，如果大于当前值的子序列长度，那么就更新，否则还是使用原长度。</p>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-js"><span class="line"><span style="color:#0008">function</span><span style="color:#000;--shiki-light-font-weight:bold"> lengthOfLIS</span><span style="color:#0008">(</span><span style="color:#000">nums</span><span style="color:#0008">)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">  //</span><span style="color:#0004"> ...</span></span>
<span class="line"><span style="color:#0008">  const</span><span style="color:#000"> dp </span><span style="color:#0008">=</span><span style="color:#000"> Array</span><span style="color:#0008">.</span><span style="color:#000">from</span><span style="color:#0008">({</span><span style="color:#000"> length</span><span style="color:#0008">:</span><span style="color:#000"> len </span><span style="color:#0008">}).</span><span style="color:#000">fill</span><span style="color:#0008">(1)</span></span>
<span class="line"><span style="color:#0008">  for</span><span style="color:#0008"> (let</span><span style="color:#000"> i </span><span style="color:#0008">=</span><span style="color:#0008"> 1;</span><span style="color:#000"> i </span><span style="color:#0008">&#x3C;</span><span style="color:#000"> len</span><span style="color:#0008">;</span><span style="color:#000"> i</span><span style="color:#0008">++)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">    for</span><span style="color:#0008"> (let</span><span style="color:#000"> j </span><span style="color:#0008">=</span><span style="color:#0008"> 0;</span><span style="color:#000"> j </span><span style="color:#0008">&#x3C;</span><span style="color:#000"> i</span><span style="color:#0008">;</span><span style="color:#000"> j</span><span style="color:#0008">++)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">      //</span><span style="color:#0004"> 查找比 nums[i] 小的值</span></span>
<span class="line"><span style="color:#0008">      if</span><span style="color:#0008"> (</span><span style="color:#000">nums</span><span style="color:#0008">[</span><span style="color:#000">j</span><span style="color:#0008">]</span><span style="color:#0008"> &#x3C;</span><span style="color:#000"> nums</span><span style="color:#0008">[</span><span style="color:#000">i</span><span style="color:#0008">])</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">        //</span><span style="color:#0004"> 和当前存储的子序列长度进行比较，取最大值</span></span>
<span class="line"><span style="color:#000">        dp</span><span style="color:#0008">[</span><span style="color:#000">i</span><span style="color:#0008">]</span><span style="color:#0008"> =</span><span style="color:#000"> Math</span><span style="color:#0008">.</span><span style="color:#000">max</span><span style="color:#0008">(</span><span style="color:#000">dp</span><span style="color:#0008">[</span><span style="color:#000">j</span><span style="color:#0008">]</span><span style="color:#0008"> +</span><span style="color:#0008"> 1,</span><span style="color:#000"> dp</span><span style="color:#0008">[</span><span style="color:#000">i</span><span style="color:#0008">])</span></span>
<span class="line"><span style="color:#0008">      }</span></span>
<span class="line"><span style="color:#0008">    }</span></span>
<span class="line"><span style="color:#0008">  }</span></span>
<span class="line"><span style="color:#0008">}</span></span></code></pre>
<p>最后返回 <code>dp</code> 数组中的最大值即可。</p>
<pre class="shiki shiki-themes Lambda Studio — Whiteout" style="background-color:#fff;color:#000" tabindex="0"><code class="language-js"><span class="line"><span style="color:#0008">function</span><span style="color:#000;--shiki-light-font-weight:bold"> lengthOfLIS</span><span style="color:#0008">(</span><span style="color:#000">nums</span><span style="color:#0008">)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">  //</span><span style="color:#0004"> ...</span></span>
<span class="line"><span style="color:#0008">  const</span><span style="color:#000"> dp </span><span style="color:#0008">=</span><span style="color:#000"> Array</span><span style="color:#0008">.</span><span style="color:#000">from</span><span style="color:#0008">({</span><span style="color:#000"> length</span><span style="color:#0008">:</span><span style="color:#000"> len </span><span style="color:#0008">}).</span><span style="color:#000">fill</span><span style="color:#0008">(1)</span></span>
<span class="line"><span style="color:#0008">  for</span><span style="color:#0008"> (let</span><span style="color:#000"> i </span><span style="color:#0008">=</span><span style="color:#0008"> 1;</span><span style="color:#000"> i </span><span style="color:#0008">&#x3C;</span><span style="color:#000"> len</span><span style="color:#0008">;</span><span style="color:#000"> i</span><span style="color:#0008">++)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">    for</span><span style="color:#0008"> (let</span><span style="color:#000"> j </span><span style="color:#0008">=</span><span style="color:#0008"> 0;</span><span style="color:#000"> j </span><span style="color:#0008">&#x3C;</span><span style="color:#000"> i</span><span style="color:#0008">;</span><span style="color:#000"> j</span><span style="color:#0008">++)</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">      //</span><span style="color:#0004"> 查找比 nums[i] 小的值</span></span>
<span class="line"><span style="color:#0008">      if</span><span style="color:#0008"> (</span><span style="color:#000">nums</span><span style="color:#0008">[</span><span style="color:#000">j</span><span style="color:#0008">]</span><span style="color:#0008"> &#x3C;</span><span style="color:#000"> nums</span><span style="color:#0008">[</span><span style="color:#000">i</span><span style="color:#0008">])</span><span style="color:#0008"> {</span></span>
<span class="line"><span style="color:#0008">        //</span><span style="color:#0004"> 和当前存储的子序列长度进行比较，取最大值</span></span>
<span class="line"><span style="color:#000">        dp</span><span style="color:#0008">[</span><span style="color:#000">i</span><span style="color:#0008">]</span><span style="color:#0008"> =</span><span style="color:#000"> Math</span><span style="color:#0008">.</span><span style="color:#000">max</span><span style="color:#0008">(</span><span style="color:#000">dp</span><span style="color:#0008">[</span><span style="color:#000">j</span><span style="color:#0008">]</span><span style="color:#0008"> +</span><span style="color:#0008"> 1,</span><span style="color:#000"> dp</span><span style="color:#0008">[</span><span style="color:#000">i</span><span style="color:#0008">])</span></span>
<span class="line"><span style="color:#0008">      }</span></span>
<span class="line"><span style="color:#0008">    }</span></span>
<span class="line"><span style="color:#0008">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0008">  return</span><span style="color:#000"> Math</span><span style="color:#0008">.</span><span style="color:#000">max</span><span style="color:#0008">(...</span><span style="color:#000">dp</span><span style="color:#0008">)</span></span>
<span class="line"><span style="color:#0008">}</span></span></code></pre>
`},{path:`/home/runner/work/aboutme/aboutme/src/content/blog/测试 blog.md`,raw:`---
date: 2025/11/07 21:16
---

# 测试测试测试

\`啥事\`

---

_原文来自 [Issue #8](https://github.com/a145789/aboutme/issues/8)_
`,title:`测试 blog`,date:`2025/11/07 21:16`,year:2025,category:`blog`,render:`<h1>测试测试测试</h1>
<p><code>啥事</code></p>
<hr>
<p><em>原文来自 <a href="https://github.com/a145789/aboutme/issues/8" target="_blank" rel="noopener noreferrer">Issue #8</a></em></p>
`}],moduleRawPath:{"2023-4-18":{path:`2023-4-18`,category:`record`},"2023-4-21":{path:`2023-4-21`,category:`record`},"2023-4-3":{path:`2023-4-3`,category:`record`},"2025-11-14":{path:`2025-11-14`,category:`record`},"2025-11-7":{path:`2025-11-7`,category:`record`},first:{path:`first`,category:`record`},"Object.defineProperty Vs Proxy性能比较":{path:`Object.defineProperty Vs Proxy性能比较`,category:`blog`},"computed 为啥可以缓存":{path:`computed 为啥可以缓存`,category:`blog`},"nextTick 原理及使用":{path:`nextTick 原理及使用`,category:`blog`},最长递增子序列长度动态规划:{path:`最长递增子序列长度动态规划`,category:`blog`},"测试 blog":{path:`测试 blog`,category:`blog`}}};let Ll=function(e){return e.Blog=`blog`,e.Record=`record`,e}({});var Rl=Il.moduleRawPath??{};function zl(e){return Rl[e]}var Bl=Object.keys(Rl),Vl=new Map;async function Hl(e){let t=(Il.items??[]).find(t=>t.title===e);if(!t)throw Error(`Content not found: ${e}`);return{path:t.path,title:t.title,raw:t.raw??``,date:t.date,year:t.year,category:t.category,render:t.render}}async function Ul(){return Vl.size!==Bl.length&&await Promise.all(Bl.filter(e=>!Vl.has(e)).map(async e=>{let t=await Hl(e);Vl.set(e,t)})),[...Vl.values()]}async function Wl(e){if(e=e.replace(`/`,``),e=decodeURIComponent(e),zl(e)){if(!Vl.has(e)){let t=await Hl(e);Vl.set(t.title,t)}return Vl.get(e)}}Ml(Pl,{routes:Fl,base:`/aboutme/`},async()=>{});export{wn as C,Cn as S,et as T,Kr as _,us as a,ar as b,Wa as c,Ja as d,q as f,Xr as g,Na as h,Ol as i,Ra as l,Vr as m,Ul as n,Oa as o,fr as p,Wl as r,So as s,Ll as t,Ya as u,$i as v,Dn as w,or as x,Qi as y};