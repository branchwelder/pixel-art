(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var de;const ne=window,F=ne.trustedTypes,ye=F?F.createPolicy("lit-html",{createHTML:l=>l}):void 0,he="$lit$",D=`lit$${(Math.random()+"").slice(9)}$`,ze="?"+D,Qe=`<${ze}>`,W=document,X=()=>W.createComment(""),U=l=>l===null||typeof l!="object"&&typeof l!="function",He=Array.isArray,Ze=l=>He(l)||typeof(l==null?void 0:l[Symbol.iterator])=="function",ce=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,we=/-->/g,xe=/>/g,H=RegExp(`>|${ce}(?:([^\\s"'>=/]+)(${ce}*=${ce}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ee=/'/g,ke=/"/g,Ie=/^(?:script|style|textarea|title)$/i,et=l=>(i,...a)=>({_$litType$:l,strings:i,values:a}),C=et(1),Y=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),Ce=new WeakMap,I=W.createTreeWalker(W,129,null,!1);function We(l,i){if(!Array.isArray(l)||!l.hasOwnProperty("raw"))throw Error("invalid template strings array");return ye!==void 0?ye.createHTML(i):i}const tt=(l,i)=>{const a=l.length-1,e=[];let t,r=i===2?"<svg>":"",n=j;for(let s=0;s<a;s++){const d=l[s];let c,h,u=-1,p=0;for(;p<d.length&&(n.lastIndex=p,h=n.exec(d),h!==null);)p=n.lastIndex,n===j?h[1]==="!--"?n=we:h[1]!==void 0?n=xe:h[2]!==void 0?(Ie.test(h[2])&&(t=RegExp("</"+h[2],"g")),n=H):h[3]!==void 0&&(n=H):n===H?h[0]===">"?(n=t??j,u=-1):h[1]===void 0?u=-2:(u=n.lastIndex-h[2].length,c=h[1],n=h[3]===void 0?H:h[3]==='"'?ke:Ee):n===ke||n===Ee?n=H:n===we||n===xe?n=j:(n=H,t=void 0);const b=n===H&&l[s+1].startsWith("/>")?" ":"";r+=n===j?d+Qe:u>=0?(e.push(c),d.slice(0,u)+he+d.slice(u)+D+b):d+D+(u===-2?(e.push(void 0),s):b)}return[We(l,r+(l[a]||"<?>")+(i===2?"</svg>":"")),e]};class K{constructor({strings:i,_$litType$:a},e){let t;this.parts=[];let r=0,n=0;const s=i.length-1,d=this.parts,[c,h]=tt(i,a);if(this.el=K.createElement(c,e),I.currentNode=this.el.content,a===2){const u=this.el.content,p=u.firstChild;p.remove(),u.append(...p.childNodes)}for(;(t=I.nextNode())!==null&&d.length<s;){if(t.nodeType===1){if(t.hasAttributes()){const u=[];for(const p of t.getAttributeNames())if(p.endsWith(he)||p.startsWith(D)){const b=h[n++];if(u.push(p),b!==void 0){const y=t.getAttribute(b.toLowerCase()+he).split(D),x=/([.?@])?(.*)/.exec(b);d.push({type:1,index:r,name:x[2],strings:y,ctor:x[1]==="."?rt:x[1]==="?"?ot:x[1]==="@"?at:ie})}else d.push({type:6,index:r})}for(const p of u)t.removeAttribute(p)}if(Ie.test(t.tagName)){const u=t.textContent.split(D),p=u.length-1;if(p>0){t.textContent=F?F.emptyScript:"";for(let b=0;b<p;b++)t.append(u[b],X()),I.nextNode(),d.push({type:2,index:++r});t.append(u[p],X())}}}else if(t.nodeType===8)if(t.data===ze)d.push({type:2,index:r});else{let u=-1;for(;(u=t.data.indexOf(D,u+1))!==-1;)d.push({type:7,index:r}),u+=D.length-1}r++}}static createElement(i,a){const e=W.createElement("template");return e.innerHTML=i,e}}function O(l,i,a=l,e){var t,r,n,s;if(i===Y)return i;let d=e!==void 0?(t=a._$Co)===null||t===void 0?void 0:t[e]:a._$Cl;const c=U(i)?void 0:i._$litDirective$;return(d==null?void 0:d.constructor)!==c&&((r=d==null?void 0:d._$AO)===null||r===void 0||r.call(d,!1),c===void 0?d=void 0:(d=new c(l),d._$AT(l,a,e)),e!==void 0?((n=(s=a)._$Co)!==null&&n!==void 0?n:s._$Co=[])[e]=d:a._$Cl=d),d!==void 0&&(i=O(l,d._$AS(l,i.values),d,e)),i}class nt{constructor(i,a){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){var a;const{el:{content:e},parts:t}=this._$AD,r=((a=i==null?void 0:i.creationScope)!==null&&a!==void 0?a:W).importNode(e,!0);I.currentNode=r;let n=I.nextNode(),s=0,d=0,c=t[0];for(;c!==void 0;){if(s===c.index){let h;c.type===2?h=new q(n,n.nextSibling,this,i):c.type===1?h=new c.ctor(n,c.name,c.strings,this,i):c.type===6&&(h=new st(n,this,i)),this._$AV.push(h),c=t[++d]}s!==(c==null?void 0:c.index)&&(n=I.nextNode(),s++)}return I.currentNode=W,r}v(i){let a=0;for(const e of this._$AV)e!==void 0&&(e.strings!==void 0?(e._$AI(i,e,a),a+=e.strings.length-2):e._$AI(i[a])),a++}}class q{constructor(i,a,e,t){var r;this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=i,this._$AB=a,this._$AM=e,this.options=t,this._$Cp=(r=t==null?void 0:t.isConnected)===null||r===void 0||r}get _$AU(){var i,a;return(a=(i=this._$AM)===null||i===void 0?void 0:i._$AU)!==null&&a!==void 0?a:this._$Cp}get parentNode(){let i=this._$AA.parentNode;const a=this._$AM;return a!==void 0&&(i==null?void 0:i.nodeType)===11&&(i=a.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,a=this){i=O(this,i,a),U(i)?i===S||i==null||i===""?(this._$AH!==S&&this._$AR(),this._$AH=S):i!==this._$AH&&i!==Y&&this._(i):i._$litType$!==void 0?this.g(i):i.nodeType!==void 0?this.$(i):Ze(i)?this.T(i):this._(i)}k(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}$(i){this._$AH!==i&&(this._$AR(),this._$AH=this.k(i))}_(i){this._$AH!==S&&U(this._$AH)?this._$AA.nextSibling.data=i:this.$(W.createTextNode(i)),this._$AH=i}g(i){var a;const{values:e,_$litType$:t}=i,r=typeof t=="number"?this._$AC(i):(t.el===void 0&&(t.el=K.createElement(We(t.h,t.h[0]),this.options)),t);if(((a=this._$AH)===null||a===void 0?void 0:a._$AD)===r)this._$AH.v(e);else{const n=new nt(r,this),s=n.u(this.options);n.v(e),this.$(s),this._$AH=n}}_$AC(i){let a=Ce.get(i.strings);return a===void 0&&Ce.set(i.strings,a=new K(i)),a}T(i){He(this._$AH)||(this._$AH=[],this._$AR());const a=this._$AH;let e,t=0;for(const r of i)t===a.length?a.push(e=new q(this.k(X()),this.k(X()),this,this.options)):e=a[t],e._$AI(r),t++;t<a.length&&(this._$AR(e&&e._$AB.nextSibling,t),a.length=t)}_$AR(i=this._$AA.nextSibling,a){var e;for((e=this._$AP)===null||e===void 0||e.call(this,!1,!0,a);i&&i!==this._$AB;){const t=i.nextSibling;i.remove(),i=t}}setConnected(i){var a;this._$AM===void 0&&(this._$Cp=i,(a=this._$AP)===null||a===void 0||a.call(this,i))}}class ie{constructor(i,a,e,t,r){this.type=1,this._$AH=S,this._$AN=void 0,this.element=i,this.name=a,this._$AM=t,this.options=r,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=S}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(i,a=this,e,t){const r=this.strings;let n=!1;if(r===void 0)i=O(this,i,a,0),n=!U(i)||i!==this._$AH&&i!==Y,n&&(this._$AH=i);else{const s=i;let d,c;for(i=r[0],d=0;d<r.length-1;d++)c=O(this,s[e+d],a,d),c===Y&&(c=this._$AH[d]),n||(n=!U(c)||c!==this._$AH[d]),c===S?i=S:i!==S&&(i+=(c??"")+r[d+1]),this._$AH[d]=c}n&&!t&&this.j(i)}j(i){i===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}}class rt extends ie{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===S?void 0:i}}const it=F?F.emptyScript:"";class ot extends ie{constructor(){super(...arguments),this.type=4}j(i){i&&i!==S?this.element.setAttribute(this.name,it):this.element.removeAttribute(this.name)}}class at extends ie{constructor(i,a,e,t,r){super(i,a,e,t,r),this.type=5}_$AI(i,a=this){var e;if((i=(e=O(this,i,a,0))!==null&&e!==void 0?e:S)===Y)return;const t=this._$AH,r=i===S&&t!==S||i.capture!==t.capture||i.once!==t.once||i.passive!==t.passive,n=i!==S&&(t===S||r);r&&this.element.removeEventListener(this.name,this,t),n&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){var a,e;typeof this._$AH=="function"?this._$AH.call((e=(a=this.options)===null||a===void 0?void 0:a.host)!==null&&e!==void 0?e:this.element,i):this._$AH.handleEvent(i)}}class st{constructor(i,a,e){this.element=i,this.type=6,this._$AN=void 0,this._$AM=a,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(i){O(this,i)}}const Se=ne.litHtmlPolyfillSupport;Se==null||Se(K,q),((de=ne.litHtmlVersions)!==null&&de!==void 0?de:ne.litHtmlVersions=[]).push("2.8.0");const Ne=(l,i,a)=>{var e,t;const r=(e=a==null?void 0:a.renderBefore)!==null&&e!==void 0?e:i;let n=r._$litPart$;if(n===void 0){const s=(t=a==null?void 0:a.renderBefore)!==null&&t!==void 0?t:null;r._$litPart$=n=new q(i.insertBefore(X(),s),s,void 0,a??{})}return n._$AI(l),n};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pe(l,i,a){return l?i():a==null?void 0:a()}class M{constructor(i,a,e){this.width=i,this.height=a,this.pixels=new Uint8ClampedArray(e)}static fromJSON(i){return new M(i.width,i.height,i.pixels)}static empty(i,a,e){let t=new Array(i*a).fill(e);return new M(i,a,t)}static fromTile(i,a,e){let t=[];for(let r=0;r<a;r++)for(let n=0;n<i;n++)t.push(e.pixel(n%e.width,r%e.height));return new M(i,a,t)}resize(i,a){let e=[];for(let t=0;t<a;t++)for(let r=0;r<i;r++)t>=this.height||r>=this.width?e.push(0):e.push(this.pixel(r,t));return new M(i,a,e)}make2d(){let i=Array.from(this.pixels).slice(),a=[];for(;i.length>0;)a.push(i.splice(0,this.width));return a}vMirror(){return this.make2d().map(i=>i.toReversed()).flat()}pixel(i,a){return i>this.width-1||i<0||a>this.height-1||a<0?-1:this.pixels.at(i+a*this.width)}draw(i){let a=this.pixels.slice();for(let{x:e,y:t,color:r}of i)e<0||t<0||e>=this.width||t>=this.height||(a[e+t*this.width]=r);return new M(this.width,this.height,a)}brush({x:i,y:a},e){let t={x:i,y:a,color:e};return this.draw([t])}flood({x:i,y:a},e){const t=this.pixel(i,a);if(t===e)return this.draw([]);const r=[{dx:-1,dy:0},{dx:1,dy:0},{dx:0,dy:-1},{dx:0,dy:1}];let n=[{x:i,y:a,color:e}];for(let s=0;s<n.length;s++)for(let{dx:d,dy:c}of r){let h=n[s].x+d,u=n[s].y+c;h>=0&&h<this.width&&u>=0&&u<this.height&&this.pixel(h,u)==t&&!n.some(p=>p.x==h&&p.y==u)&&n.push({x:h,y:u,color:e})}return this.draw(n)}shift(i,a){let e=[];for(let t=0;t<this.height;t++)for(let r=0;r<this.width;r++)e.push({x:(r-i%this.width+this.width)%this.width,y:(t-a%this.height+this.height)%this.height,color:this.pixel(r,t)});return this.draw(e)}rect(i,a,e){let t=Math.min(i.x,a.x),r=Math.min(i.y,a.y),n=Math.max(i.x,a.x),s=Math.max(i.y,a.y),d=[];for(let c=r;c<=s;c++)for(let h=t;h<=n;h++)d.push({x:h,y:c,color:e});return this.draw(d)}line(i,a,e){let t=[];if(Math.abs(i.x-a.x)>Math.abs(i.y-a.y)){i.x>a.x&&([i,a]=[a,i]);let r=(a.y-i.y)/(a.x-i.x);for(let{x:n,y:s}=i;n<=a.x;n++)t.push({x:n,y:Math.round(s),color:e}),s+=r}else{i.y>a.y&&([i,a]=[a,i]);let r=(a.x-i.x)/(a.y-i.y);for(let{x:n,y:s}=i;s<=a.y;s++)t.push({x:Math.round(n),y:s,color:e}),n+=r}return this.draw(t)}}let g={activeColor:1,activeTool:"brush",heldKeys:new Set,pos:{x:-1,y:-1},grid:!0,scale:0,width:30,height:20,bitmap:M.empty(30,20,0),palette:["rgba(0,0,0,0)","rgba(0,0,0,1)","rgba(250,234,214,1)","rgba(222,120,149,1)","rgba(247,80,96,1)","rgba(247,136,95,1)","rgba(242,196,105,1)","rgba(177,211,111,1)","rgba(62,224,207,1)","rgba(0,145,194,1)","rgba(173,109,202,1)"],lastSnapshot:0,snapshots:[],paletteEdit:!1,showSettingsModal:!1,showDownloadModal:!1,debug:!1};function lt(l){(l.bitmap||l.palette)&&g.lastSnapshot<Date.now()-1e3?g={...g,...l,snapshots:[{bitmap:g.bitmap,palette:g.palette,width:g.width,height:g.height},...g.snapshots],lastSnapshot:Date.now()}:g={...g,...l}}function Ge(){g={...g,...g.snapshots[0],lastSnapshot:0,snapshots:g.snapshots.slice(1)}}class Ae{constructor({state:i,dispatch:a,components:e}){this.state=i,this.components=e.flat().map(t=>t({state:i,dispatch:a}))}syncState(i){this.state=i,this.components.forEach(a=>{a.syncState(i)})}}function dt(l,i,a){function e(t,r){const n=r.bitmap.line({x:l.x,y:l.y},{x:t.x,y:t.y},r.activeColor);l=t,a({bitmap:n})}return e(l,i),e}function ct(l,i,a){function e({x:t,y:r},n){a({bitmap:n.bitmap.flood({x:t,y:r},n.activeColor)})}return e(l,i),e}function ht(l,i,a){function e({x:t,y:r},n){const s=i.bitmap.rect({x:l.x,y:l.y},{x:t,y:r},i.activeColor);a({bitmap:s})}return e(l),e}function ut(l,i,a){function e({x:t,y:r}){a({bitmap:i.bitmap.line({x:l.x,y:l.y},{x:t,y:r},i.activeColor)})}return e(l),e}function pt(l,i,a){function e({x:t,y:r}){a({bitmap:i.bitmap.shift(l.x-t,l.y-r)})}return e(l),e}function ft(l,i,a){const e=[...i.palette];e[i.activeColor]=i.palette[i.bitmap.pixel(l.x,l.y)],a({palette:e})}function gt({state:l},{canvas:i}){let{scale:a,palette:e,bitmap:t}=l,r=null,n=null,s=null;function d(){n=t.width,s=t.height;const h=a*n,u=a*s,p=h/devicePixelRatio-devicePixelRatio,b=u/devicePixelRatio-devicePixelRatio;i.width=h-1,i.height=u-1,i.style.cssText=`width: ${p}px; height: ${b}`,r=null}function c(){const h=i.getContext("2d");for(let u=0;u<t.height;u++)for(let p=0;p<t.width;p++){let b=t.pixel(p,u);(r==null||r.pixel(p,u)!=b)&&(h.translate(p*a,u*a),h.fillStyle=e[b],h.clearRect(0,0,a,a),h.fillRect(0,0,a,a),h.setTransform(1,0,0,1,0,0))}r=t}return d(),c(),{syncState(h){(n!=h.bitmap.width||s!=h.bitmap.height)&&d(),e!=h.palette&&(e=h.palette,r=null),a!=h.scale&&(a=h.scale,d()),r!=h.bitmap&&(t=h.bitmap,c())}}}function Pe(l={}){return i=>gt(i,l)}function vt({state:l},{canvas:i}){let{scale:a,bitmap:e,grid:t}=l,r=null,n=null;function s(){r=e.width,n=e.height;const c=a*r,h=a*n,u=c/devicePixelRatio-devicePixelRatio,p=h/devicePixelRatio-devicePixelRatio;i.width=c-1,i.height=h-1,i.style.cssText=`width: ${u}px; height: ${p}`}function d(){if(!t)return;const c=i.getContext("2d");c.resetTransform(),c.translate(-.5,-.5),c.clearRect(0,0,i.width,i.height),c.beginPath();for(let h=0;h<e.width;h++)c.moveTo(h*a,0),c.lineTo(h*a,e.height*a+1);for(let h=0;h<e.height;h++)c.moveTo(0,h*a),c.lineTo(e.width*a+1,h*a);c.stroke()}return s(),d(),{syncState(c){(a!=c.scale||r!=c.bitmap.width||n!=c.bitmap.height||t!=c.grid)&&(a=c.scale,e=c.bitmap,t=c.grid,s(),d())}}}function Be(l={}){return i=>vt(i,l)}function mt({state:l},{inner:i="#000000",outer:a="#ffffff",canvas:e}){let{scale:t,pos:r,bitmap:n}=l,s=null,d=null;function c(){s=n.width,d=n.height;const u=t*s,p=t*d,b=u/devicePixelRatio-devicePixelRatio,y=p/devicePixelRatio-devicePixelRatio;e.width=u-1,e.height=p-1,e.style.cssText=`width: ${b}px; height: ${y}`}function h(){const u=e.getContext("2d");u.resetTransform(),u.clearRect(0,0,e.width,e.height),!(r.x<0||r.y<0)&&(u.translate(-.5,-.5),u.imageSmoothingEnabled=!1,u.strokeStyle=a,u.strokeRect(r.x*t+1,r.y*t+1,t-2,t-2),u.strokeStyle=i,u.strokeRect(r.x*t+2,r.y*t+2,t-4,t-4))}return c(),{syncState(u){(t!=u.scale||s!=u.bitmap.width||d!=u.bitmap.height)&&(t=u.scale,n=u.bitmap,c()),u.pos!=r&&(r=u.pos,h())}}}function $e(l={}){return i=>mt(i,l)}const Me={a:()=>console.log("select all?"),z:()=>Ge(),s:l=>l({showDownloadModal:!0})},_e={b:l=>l({activeTool:"brush"}),f:l=>l({activeTool:"flood"}),l:l=>l({activeTool:"line"}),r:l=>l({activeTool:"rect"}),s:l=>l({activeTool:"shift"}),i:l=>l({activeTool:"eyedropper"}),g:l=>l({grid:!g.grid})};function bt(l,i){l<g.palette.length&&i({activeColor:l})}function yt(l){window.addEventListener("keydown",i=>{g.showSettingsModal||g.showDownloadModal||(i.ctrlKey&&i.key.toLowerCase()in Me?(i.preventDefault(),Me[i.key.toLowerCase()](l)):i.key in _e?_e[i.key](l):/^[0-9]$/i.test(i.key)&&bt(Number(i.key),l));const a=new Set(g.heldKeys);a.add(i.key),l({heldKeys:a})}),window.addEventListener("keyup",i=>{const a=new Set(g.heldKeys);a.delete(i.key),l({heldKeys:a})})}function wt({state:l,dispatch:i},{tools:a,target:e}){return e.addEventListener("pointerdown",t=>{let r=l.pos,n=a[l.activeTool];if(!n)return;let s=n(r,l,i);if(!s)return;function d(h){if(h.buttons==0)c();else{let u=l.pos;if(u.x==r.x&&u.y==r.y)return;s(l.pos,l),r=u}}function c(){e.removeEventListener("pointermove",d),e.removeEventListener("pointerup",c),e.removeEventListener("pointerleave",c)}e.addEventListener("pointermove",d),e.addEventListener("pointerup",c),e.addEventListener("pointerleave",c)}),{syncState(t){l=t}}}function xt(l={}){return i=>wt(i,l)}function Et({state:l,dispatch:i},{target:a}){function e(t,r){const n=a.getBoundingClientRect(),s=Math.floor((t-n.x)/l.scale*devicePixelRatio),d=Math.floor((r-n.y)/l.scale*devicePixelRatio);return{x:s,y:d}}return a.addEventListener("mousemove",t=>{const{x:r,y:n}=e(t.clientX,t.clientY);(l.pos.x!=r||l.pos.y!=n)&&i({pos:{x:r,y:n}})}),a.addEventListener("mouseleave",t=>{i({pos:{x:-1,y:-1}})}),{syncState(t){l=t}}}function kt(l={}){return i=>Et(i,l)}function Ct({state:l,dispatch:i},{tools:a,target:e}){return e.addEventListener("touchstart",t=>{let r=l.pos,n=a[l.activeTool],s=n(r,l,i);if(t.preventDefault(),!s)return;function d(){e.removeEventListener("touchmove",c),e.removeEventListener("touchcancel",d),e.removeEventListener("touchend",d)}function c(){let h=l.pos;h.x==r.x&&h.y==r.y||(s(l.pos,l),r=h)}e.addEventListener("touchmove",c),e.addEventListener("touchcancel",d),e.addEventListener("touchend",d)}),{syncState(t){l=t}}}function St(l={}){return i=>Ct(i,l)}function At({state:l,dispatch:i},{target:a}){function e(t){const r=a.getBoundingClientRect(),n=Math.floor((t.clientX-r.x)/l.scale*devicePixelRatio),s=Math.floor((t.clientY-r.y)/l.scale*devicePixelRatio);return{x:n,y:s}}return a.addEventListener("touchstart",t=>{const{x:r,y:n}=e(t.touches[0]);(l.pos.x!=r||l.pos.y!=n)&&i({pos:{x:r,y:n}})}),a.addEventListener("touchmove",t=>{const{x:r,y:n}=e(t.touches[0]);(l.pos.x!=r||l.pos.y!=n)&&i({pos:{x:r,y:n}})}),a.addEventListener("touchend",t=>{i({pos:{x:-1,y:-1}})}),a.addEventListener("touchcancel",t=>{i({pos:{x:-1,y:-1}})}),{syncState(t){l=t}}}function Pt(l={}){return i=>At(i,l)}const Bt=C`<style>
  #settings {
    position: relative;
  }

  #settings-modal {
    position: absolute;
    right: 0;
    background-color: #333333;
    z-index: 1000;
    border-radius: 5px;
    padding: 7px;
    display: grid;
    grid-template-columns: auto auto;
    box-shadow: 0 0 10px 0 black;
    gap: 7px;
    align-items: center;
  }

  #settings-modal > label {
    text-align: right;
  }

  #close-settings {
    place-self: center end;
    background-color: transparent;
    font-size: large;
  }

  #settings-btn i {
    transition: 200ms;
  }

  #settings-btn:active i {
    transition: 0ms;
    transform: rotate(-60deg);
  }

  #size-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
  }

  .spinner {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .size-input {
    background: none;
    border: none;
    align-self: center;
    width: 30px;
    color: #9e9e9e;
    border-radius: 4px;
    background-color: #252525;
    font-size: 1rem;
    text-align: center;
    height: 1.5rem;
  }

  .size-input:focus {
    background: none;
    border: none;
    align-self: center;
    width: 30px;
    color: #9e9e9e;
    border-radius: 4px;
    background-color: #252525;
    font-size: 1rem;
    text-align: center;
    height: 1.5rem;
  }

  .spinner > button {
    border: 0;
    outline: 0;
    line-height: 1;
    padding: 0;
    background-color: #252525;
    box-shadow: 0 0 2px 0 black;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #aeaeae;
    font-size: small;
    cursor: pointer;
  }

  .spinner > button > i {
    line-height: 0;
  }

  .spinner > button:hover {
    background-color: #676767;
    box-shadow: 0 0 1px 0 black;
  }
</style>`;function $t({dispatch:l}){let{bitmap:i}=g;return C`<label>Width</label>
    <div class="spinner">
      <button
        @click=${()=>l({width:i.width-1,bitmap:i.resize(i.width-1,i.height)})}>
        <i class="fa-solid fa-minus"></i>
      </button>

      <input
        type="text"
        .value=${i.width}
        class="size-input"
        @change=${a=>l({width:Number(a.target.value),bitmap:i.resize(Number(a.target.value),i.height)})} />
      <button
        @click=${()=>l({width:i.width+1,bitmap:i.resize(i.width+1,i.height)})}>
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>`}function Mt({dispatch:l}){let{bitmap:i}=g;return C`<label>Height</label>
    <div class="spinner">
      <button
        @click=${()=>l({height:i.height-1,bitmap:i.resize(i.width,i.height-1)})}>
        <i class="fa-solid fa-minus"></i>
      </button>
      <input
        type="text"
        .value=${i.height}
        class="size-input"
        @change=${a=>l({height:Number(a.target.value),bitmap:i.resize(i.width,Number(a.target.value))})} />
      <button
        @click=${()=>l({height:i.height+1,bitmap:i.resize(i.width,i.height+1)})}>
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>`}function _t({dispatch:l}){return C`<div id="settings-modal">
    <span style="font-weight: 800;">Settings</span><span></span>
    ${$t({dispatch:l})} ${Mt({dispatch:l})}
    <label for="toggle-grid">Grid</label>
    <input
      id="toggle-grid"
      type="checkbox"
      ?checked=${g.grid}
      @change=${i=>l({grid:i.target.checked})} />
    <label for="toggle-debug">Debug</label>
    <input
      id="toggle-debug"
      type="checkbox"
      ?checked=${g.debug}
      @change=${i=>l({debug:i.target.checked})} />
  </div>`}function Lt({dispatch:l}){return C`${Bt}
    <div id="settings">
      <button
        id="settings-btn"
        class="taskbar-btn"
        @click=${()=>l({showSettingsModal:!g.showSettingsModal})}>
        <i class="fa-solid fa-gear"></i>
      </button>
      ${pe(g.showSettingsModal,()=>_t({dispatch:l}))}
    </div>`}const Rt={BMP(){te(document.getElementById("art").toDataURL("image/bmp"),"art.bmp")},JPG(){te(document.getElementById("art").toDataURL("image/jpg"),"art.jpg")},PNG(){te(document.getElementById("art").toDataURL("image/png"),"art.png")},ICO(){te(document.getElementById("art").toDataURL("image/x-icon"),"art.ico")}};function Tt(){return C`<div id="download-modal">
    <span style="font-weight: 800;">Download</span>
    <div id="download-buttons">
      ${Object.entries(Rt).map(([l,i])=>C`<button class="download-btn" @click=${i}>${l}</button>`)}
    </div>
  </div>`}function te(l,i){const a=document.createElement("a");a.setAttribute("href",l),a.setAttribute("download",i),document.body.appendChild(a),a.click(),a.remove()}function Dt({dispatch:l}){return C` ${zt}
    <div id="download">
      <button
        id="download-btn"
        class="taskbar-btn"
        @click=${()=>l({showDownloadModal:!g.showDownloadModal})}>
        <i class="fa-solid fa-download"></i>
      </button>
      ${pe(g.showDownloadModal,()=>Tt())}
    </div>`}const zt=C`<style>
  #download {
    position: relative;
  }

  #download-modal {
    position: absolute;
    right: 0;
    background-color: #333333;
    z-index: 1000;
    border-radius: 5px;
    padding: 7px;
    box-shadow: 0 0 10px 0 black;
  }

  #download-buttons {
    display: flex;
    margin-top: 7px;
    gap: 4px;
  }

  .download-btn {
    font-family: "National Park";
    font-weight: 800;
    background-color: #202020;
    color: #9c9c9c;
    outline: 0;
    border: 0;
    cursor: pointer;
    height: 30px;
    padding: 7px;
    border-radius: 5px;
  }

  .download-btn:hover {
    background-color: #585858;
    color: #e0e0e0;
    box-shadow: 0 0 3px 0 black;
  }
</style>`;var Ht=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function It(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Ve={exports:{}};/**
 * jscolor - JavaScript Color Picker
 *
 * @link    http://jscolor.com
 * @license For open source use: GPLv3
 *          For commercial use: JSColor Commercial License
 * @author  Jan Odvarko - East Desire
 *
 * See usage examples at http://jscolor.com/examples/
 */(function(l){(function(i,a){{l.exports=i.document?a(i):function(e){if(!e.document)throw new Error("jscolor needs a window with document");return a(e)};return}})(typeof window<"u"?window:Ht,function(i){var a=function(){var e={initialized:!1,instances:[],readyQueue:[],register:function(){typeof i<"u"&&i.document&&i.document.addEventListener("DOMContentLoaded",e.pub.init,!1)},installBySelector:function(t,r){if(r=r?e.node(r):i.document,!r)throw new Error("Missing root node");for(var n=r.querySelectorAll(t),s=new RegExp("(^|\\s)("+e.pub.lookupClass+")(\\s*(\\{[^}]*\\})|\\s|$)","i"),d=0;d<n.length;d+=1)if(!(n[d].jscolor&&n[d].jscolor instanceof e.pub)&&!(n[d].type!==void 0&&n[d].type.toLowerCase()=="color"&&e.isColorAttrSupported)){var c,h;if((c=e.getDataAttr(n[d],"jscolor"))!==null||n[d].className&&(h=n[d].className.match(s))){var u=n[d],p="";c!==null?p=c:h&&(console.warn('Installation using class name is DEPRECATED. Use data-jscolor="" attribute instead.'+e.docsRef),h[4]&&(p=h[4]));var b=null;if(p.trim())try{b=e.parseOptionsStr(p)}catch(y){console.warn(y+`
`+p)}try{new e.pub(u,b)}catch(y){console.warn(y)}}}},parseOptionsStr:function(t){var r=null;try{r=JSON.parse(t)}catch(n){if(e.pub.looseJSON)try{r=new Function("var opts = ("+t+'); return typeof opts === "object" ? opts : {};')()}catch(s){throw new Error("Could not evaluate jscolor options: "+s)}else throw new Error("Could not parse jscolor options as JSON: "+n)}return r},getInstances:function(){for(var t=[],r=0;r<e.instances.length;r+=1)e.instances[r]&&e.instances[r].targetElement&&t.push(e.instances[r]);return t},createEl:function(t){var r=i.document.createElement(t);return e.setData(r,"gui",!0),r},node:function(t){if(!t)return null;if(typeof t=="string"){var r=t,n=null;try{n=i.document.querySelector(r)}catch(s){return console.warn(s),null}return n||console.warn("No element matches the selector: %s",r),n}return e.isNode(t)?t:(console.warn("Invalid node of type %s: %s",typeof t,t),null)},isNode:function(t){return typeof Node=="object"?t instanceof Node:t&&typeof t=="object"&&typeof t.nodeType=="number"&&typeof t.nodeName=="string"},nodeName:function(t){return t&&t.nodeName?t.nodeName.toLowerCase():!1},removeChildren:function(t){for(;t.firstChild;)t.removeChild(t.firstChild)},isTextInput:function(t){return t&&e.nodeName(t)==="input"&&t.type.toLowerCase()==="text"},isButton:function(t){if(!t)return!1;var r=e.nodeName(t);return r==="button"||r==="input"&&["button","submit","reset"].indexOf(t.type.toLowerCase())>-1},isButtonEmpty:function(t){switch(e.nodeName(t)){case"input":return!t.value||t.value.trim()==="";case"button":return t.textContent.trim()===""}return null},isPassiveEventSupported:function(){var t=!1;try{var r=Object.defineProperty({},"passive",{get:function(){t=!0}});i.addEventListener("testPassive",null,r),i.removeEventListener("testPassive",null,r)}catch{}return t}(),isColorAttrSupported:function(){var t=i.document.createElement("input");return!!(t.setAttribute&&(t.setAttribute("type","color"),t.type.toLowerCase()=="color"))}(),dataProp:"_data_jscolor",setData:function(){var t=arguments[0];if(arguments.length===3){var r=t.hasOwnProperty(e.dataProp)?t[e.dataProp]:t[e.dataProp]={},n=arguments[1],s=arguments[2];return r[n]=s,!0}else if(arguments.length===2&&typeof arguments[1]=="object"){var r=t.hasOwnProperty(e.dataProp)?t[e.dataProp]:t[e.dataProp]={},d=arguments[1];for(var n in d)d.hasOwnProperty(n)&&(r[n]=d[n]);return!0}throw new Error("Invalid arguments")},removeData:function(){var t=arguments[0];if(!t.hasOwnProperty(e.dataProp))return!0;for(var r=1;r<arguments.length;r+=1){var n=arguments[r];delete t[e.dataProp][n]}return!0},getData:function(t,r,n){if(!t.hasOwnProperty(e.dataProp))if(n!==void 0)t[e.dataProp]={};else return;var s=t[e.dataProp];return!s.hasOwnProperty(r)&&n!==void 0&&(s[r]=n),s[r]},getDataAttr:function(t,r){var n="data-"+r,s=t.getAttribute(n);return s},setDataAttr:function(t,r,n){var s="data-"+r;t.setAttribute(s,n)},_attachedGroupEvents:{},attachGroupEvent:function(t,r,n,s){e._attachedGroupEvents.hasOwnProperty(t)||(e._attachedGroupEvents[t]=[]),e._attachedGroupEvents[t].push([r,n,s]),r.addEventListener(n,s,!1)},detachGroupEvents:function(t){if(e._attachedGroupEvents.hasOwnProperty(t)){for(var r=0;r<e._attachedGroupEvents[t].length;r+=1){var n=e._attachedGroupEvents[t][r];n[0].removeEventListener(n[1],n[2],!1)}delete e._attachedGroupEvents[t]}},preventDefault:function(t){t.preventDefault&&t.preventDefault(),t.returnValue=!1},triggerEvent:function(t,r,n,s){if(t){var d=null;return typeof Event=="function"?d=new Event(r,{bubbles:n,cancelable:s}):(d=i.document.createEvent("Event"),d.initEvent(r,n,s)),d?(e.setData(d,"internal",!0),t.dispatchEvent(d),!0):!1}},triggerInputEvent:function(t,r,n,s){t&&e.isTextInput(t)&&e.triggerEvent(t,r,n,s)},eventKey:function(t){var r={9:"Tab",13:"Enter",27:"Escape"};return typeof t.code=="string"?t.code:t.keyCode!==void 0&&r.hasOwnProperty(t.keyCode)?r[t.keyCode]:null},strList:function(t){return t?t.replace(/^\s+|\s+$/g,"").split(/\s+/):[]},hasClass:function(t,r){return r?t.classList!==void 0?t.classList.contains(r):(" "+t.className.replace(/\s+/g," ")+" ").indexOf(" "+r+" ")!=-1:!1},addClass:function(t,r){var n=e.strList(r);if(t.classList!==void 0){for(var s=0;s<n.length;s+=1)t.classList.add(n[s]);return}for(var s=0;s<n.length;s+=1)e.hasClass(t,n[s])||(t.className+=(t.className?" ":"")+n[s])},removeClass:function(t,r){var n=e.strList(r);if(t.classList!==void 0){for(var s=0;s<n.length;s+=1)t.classList.remove(n[s]);return}for(var s=0;s<n.length;s+=1){var d=new RegExp("^\\s*"+n[s]+"\\s*|\\s*"+n[s]+"\\s*$|\\s+"+n[s]+"(\\s+)","g");t.className=t.className.replace(d,"$1")}},getCompStyle:function(t){var r=i.getComputedStyle?i.getComputedStyle(t):t.currentStyle;return r||{}},setStyle:function(t,r,n,s){var d=n?"important":"",c=null;for(var h in r)if(r.hasOwnProperty(h)){var u=null;r[h]===null?(c||(c=e.getData(t,"origStyle")),c&&c.hasOwnProperty(h)&&(u=c[h])):(s&&(c||(c=e.getData(t,"origStyle",{})),c.hasOwnProperty(h)||(c[h]=t.style[h])),u=r[h]),u!==null&&t.style.setProperty(h,u,d)}},appendCss:function(t){var r=document.querySelector("head"),n=document.createElement("style");n.innerText=t,r.appendChild(n)},appendDefaultCss:function(t){e.appendCss([".jscolor-wrap, .jscolor-wrap div, .jscolor-wrap canvas { position:static; display:block; visibility:visible; overflow:visible; margin:0; padding:0; border:none; border-radius:0; outline:none; z-index:auto; float:none; width:auto; height:auto; left:auto; right:auto; top:auto; bottom:auto; min-width:0; min-height:0; max-width:none; max-height:none; background:none; clip:auto; opacity:1; transform:none; box-shadow:none; box-sizing:content-box; }",".jscolor-wrap { clear:both; }",".jscolor-wrap .jscolor-picker { position:relative; }",".jscolor-wrap .jscolor-shadow { position:absolute; left:0; top:0; width:100%; height:100%; }",".jscolor-wrap .jscolor-border { position:relative; }",".jscolor-wrap .jscolor-palette { position:absolute; }",".jscolor-wrap .jscolor-palette-sw { position:absolute; display:block; cursor:pointer; }",".jscolor-wrap .jscolor-btn { position:absolute; overflow:hidden; white-space:nowrap; font:13px sans-serif; text-align:center; cursor:pointer; }"].join(`
`))},hexColor:function(t,r,n){return"#"+(("0"+Math.round(t).toString(16)).slice(-2)+("0"+Math.round(r).toString(16)).slice(-2)+("0"+Math.round(n).toString(16)).slice(-2)).toUpperCase()},hexaColor:function(t,r,n,s){return"#"+(("0"+Math.round(t).toString(16)).slice(-2)+("0"+Math.round(r).toString(16)).slice(-2)+("0"+Math.round(n).toString(16)).slice(-2)+("0"+Math.round(s*255).toString(16)).slice(-2)).toUpperCase()},rgbColor:function(t,r,n){return"rgb("+Math.round(t)+","+Math.round(r)+","+Math.round(n)+")"},rgbaColor:function(t,r,n,s){return"rgba("+Math.round(t)+","+Math.round(r)+","+Math.round(n)+","+Math.round((s??1)*100)/100+")"},linearGradient:function(){function t(){for(var n="linear-gradient",s=["","-webkit-","-moz-","-o-","-ms-"],d=i.document.createElement("div"),c=0;c<s.length;c+=1){var h=s[c]+n,u=h+"(to right, rgba(0,0,0,0), rgba(0,0,0,0))";if(d.style.background=u,d.style.background)return h}return n}var r=t();return function(){return r+"("+Array.prototype.join.call(arguments,", ")+")"}}(),setBorderRadius:function(t,r){e.setStyle(t,{"border-radius":r||"0"})},setBoxShadow:function(t,r){e.setStyle(t,{"box-shadow":r||"none"})},getElementPos:function(t,r){var n=0,s=0,d=t.getBoundingClientRect();if(n=d.left,s=d.top,!r){var c=e.getViewPos();n+=c[0],s+=c[1]}return[n,s]},getElementSize:function(t){return[t.offsetWidth,t.offsetHeight]},getAbsPointerPos:function(t){var r=0,n=0;return typeof t.changedTouches<"u"&&t.changedTouches.length?(r=t.changedTouches[0].clientX,n=t.changedTouches[0].clientY):typeof t.clientX=="number"&&(r=t.clientX,n=t.clientY),{x:r,y:n}},getRelPointerPos:function(t){var r=t.target||t.srcElement,n=r.getBoundingClientRect(),s=0,d=0,c=0,h=0;return typeof t.changedTouches<"u"&&t.changedTouches.length?(c=t.changedTouches[0].clientX,h=t.changedTouches[0].clientY):typeof t.clientX=="number"&&(c=t.clientX,h=t.clientY),s=c-n.left,d=h-n.top,{x:s,y:d}},getViewPos:function(){var t=i.document.documentElement;return[(i.pageXOffset||t.scrollLeft)-(t.clientLeft||0),(i.pageYOffset||t.scrollTop)-(t.clientTop||0)]},getViewSize:function(){var t=i.document.documentElement;return[i.innerWidth||t.clientWidth,i.innerHeight||t.clientHeight]},RGB_HSV:function(t,r,n){t/=255,r/=255,n/=255;var s=Math.min(Math.min(t,r),n),d=Math.max(Math.max(t,r),n),c=d-s;if(c===0)return[null,0,100*d];var h=t===s?3+(n-r)/c:r===s?5+(t-n)/c:1+(r-t)/c;return[60*(h===6?0:h),100*(c/d),100*d]},HSV_RGB:function(t,r,n){var s=255*(n/100);if(t===null)return[s,s,s];t/=60,r/=100;var d=Math.floor(t),c=d%2?t-d:1-(t-d),h=s*(1-r),u=s*(1-r*c);switch(d){case 6:case 0:return[s,u,h];case 1:return[u,s,h];case 2:return[h,s,u];case 3:return[h,u,s];case 4:return[u,h,s];case 5:return[s,h,u]}},parseColorString:function(t){var r={rgba:null,format:null},n;if(n=t.match(/^\W*([0-9A-F]{3,8})\W*$/i)){if(n[1].length===8)r.format="hexa",r.rgba=[parseInt(n[1].slice(0,2),16),parseInt(n[1].slice(2,4),16),parseInt(n[1].slice(4,6),16),parseInt(n[1].slice(6,8),16)/255];else if(n[1].length===6)r.format="hex",r.rgba=[parseInt(n[1].slice(0,2),16),parseInt(n[1].slice(2,4),16),parseInt(n[1].slice(4,6),16),null];else if(n[1].length===3)r.format="hex",r.rgba=[parseInt(n[1].charAt(0)+n[1].charAt(0),16),parseInt(n[1].charAt(1)+n[1].charAt(1),16),parseInt(n[1].charAt(2)+n[1].charAt(2),16),null];else return!1;return r}if(n=t.match(/^\W*rgba?\(([^)]*)\)\W*$/i)){var s=n[1].split(","),d=/^\s*(\d+|\d*\.\d+|\d+\.\d*)\s*$/,c,h,u,p;if(s.length>=3&&(c=s[0].match(d))&&(h=s[1].match(d))&&(u=s[2].match(d)))return r.format="rgb",r.rgba=[parseFloat(c[1])||0,parseFloat(h[1])||0,parseFloat(u[1])||0,null],s.length>=4&&(p=s[3].match(d))&&(r.format="rgba",r.rgba[3]=parseFloat(p[1])||0),r}return!1},parsePaletteValue:function(t){var r=[];typeof t=="string"?t.replace(/#[0-9A-F]{3}\b|#[0-9A-F]{6}([0-9A-F]{2})?\b|rgba?\(([^)]*)\)/ig,function(c){r.push(c)}):Array.isArray(t)&&(r=t);for(var n=[],s=0;s<r.length;s++){var d=e.parseColorString(r[s]);d&&n.push(d)}return n},containsTranparentColor:function(t){for(var r=0;r<t.length;r++){var n=t[r].rgba[3];if(n!==null&&n<1)return!0}return!1},isAlphaFormat:function(t){switch(t.toLowerCase()){case"hexa":case"rgba":return!0}return!1},scaleCanvasForHighDPR:function(t){var r=i.devicePixelRatio||1;t.width*=r,t.height*=r;var n=t.getContext("2d");n.scale(r,r)},genColorPreviewCanvas:function(t,r,n,s){var d=Math.round(e.pub.previewSeparator.length),c=e.pub.chessboardSize,h=e.pub.chessboardColor1,u=e.pub.chessboardColor2,p=n||c*2,b=c*2,y=e.createEl("canvas"),x=y.getContext("2d");y.width=p,y.height=b,s&&e.scaleCanvasForHighDPR(y),x.fillStyle=h,x.fillRect(0,0,p,b),x.fillStyle=u;for(var T=0;T<p;T+=c*2)x.fillRect(T,0,c,c),x.fillRect(T+c,c,c,c);t&&(x.fillStyle=t,x.fillRect(0,0,p,b));var _=null;switch(r){case"left":_=0,x.clearRect(0,0,d/2,b);break;case"right":_=p-d,x.clearRect(p-d/2,0,d/2,b);break}if(_!==null){x.lineWidth=1;for(var L=0;L<e.pub.previewSeparator.length;L+=1)x.beginPath(),x.strokeStyle=e.pub.previewSeparator[L],x.moveTo(.5+_+L,0),x.lineTo(.5+_+L,b),x.stroke()}return{canvas:y,width:p,height:b}},genColorPreviewGradient:function(t,r,n){var s=[];return r&&n?s=["to "+{left:"right",right:"left"}[r],t+" 0%",t+" "+n+"px","rgba(0,0,0,0) "+(n+1)+"px","rgba(0,0,0,0) 100%"]:s=["to right",t+" 0%",t+" 100%"],e.linearGradient.apply(this,s)},redrawPosition:function(){if(!(!e.picker||!e.picker.owner)){var t=e.picker.owner;if(t.container!==i.document.body)e._drawPosition(t,0,0,"relative",!1);else{var r,n;t.fixed?(r=e.getElementPos(t.targetElement,!0),n=[0,0]):(r=e.getElementPos(t.targetElement),n=e.getViewPos());var s=e.getElementSize(t.targetElement),d=e.getViewSize(),c=e.getPickerDims(t),h=[c.borderW,c.borderH],u,p,b;switch(t.position.toLowerCase()){case"left":u=1,p=0,b=-1;break;case"right":u=1,p=0,b=1;break;case"top":u=0,p=1,b=-1;break;default:u=0,p=1,b=1;break}var y=(s[p]+h[p])/2;if(t.smartPosition)var x=[-n[u]+r[u]+h[u]>d[u]&&-n[u]+r[u]+s[u]/2>d[u]/2&&r[u]+s[u]-h[u]>=0?r[u]+s[u]-h[u]:r[u],-n[p]+r[p]+s[p]+h[p]-y+y*b>d[p]?-n[p]+r[p]+s[p]/2>d[p]/2&&r[p]+s[p]-y-y*b>=0?r[p]+s[p]-y-y*b:r[p]+s[p]-y+y*b:r[p]+s[p]-y+y*b>=0?r[p]+s[p]-y+y*b:r[p]+s[p]-y-y*b];else var x=[r[u],r[p]+s[p]-y+y*b];var T=x[u],_=x[p],L=t.fixed?"fixed":"absolute",oe=(x[0]+h[0]>r[0]||x[0]<r[0]+s[0])&&x[1]+h[1]<r[1]+s[1];e._drawPosition(t,T,_,L,oe)}}},_drawPosition:function(t,r,n,s,d){var c=d?0:t.shadowBlur;e.picker.wrap.style.position=s,(Math.round(parseFloat(e.picker.wrap.style.left))!==Math.round(r)||Math.round(parseFloat(e.picker.wrap.style.top))!==Math.round(n))&&(e.picker.wrap.style.left=r+"px",e.picker.wrap.style.top=n+"px"),e.setBoxShadow(e.picker.boxS,t.shadow?new e.BoxShadow(0,c,t.shadowBlur,0,t.shadowColor):null)},getPickerDims:function(t){var r=2*t.controlBorderWidth+t.width,n=2*t.controlBorderWidth+t.height,s=2*t.controlBorderWidth+2*e.getControlPadding(t)+t.sliderSize;e.getSliderChannel(t)&&(r+=s),t.hasAlphaChannel()&&(r+=s);var d=e.getPaletteDims(t,r);d.height&&(n+=d.height+t.padding),t.closeButton&&(n+=2*t.controlBorderWidth+t.padding+t.buttonHeight);var c=r+2*t.padding,h=n+2*t.padding;return{contentW:r,contentH:n,paddedW:c,paddedH:h,borderW:c+2*t.borderWidth,borderH:h+2*t.borderWidth,palette:d}},getPaletteDims:function(t,r){var n=0,s=0,d=0,c=0,h=0,u=t._palette?t._palette.length:0;return u&&(n=t.paletteCols,s=n>0?Math.ceil(u/n):0,d=Math.max(1,Math.floor((r-(n-1)*t.paletteSpacing)/n)),c=t.paletteHeight?Math.min(t.paletteHeight,d):d),s&&(h=s*c+(s-1)*t.paletteSpacing),{cols:n,rows:s,cellW:d,cellH:c,width:r,height:h}},getControlPadding:function(t){return Math.max(t.padding/2,2*t.pointerBorderWidth+t.pointerThickness-t.controlBorderWidth)},getPadYChannel:function(t){switch(t.mode.charAt(1).toLowerCase()){case"v":return"v"}return"s"},getSliderChannel:function(t){if(t.mode.length>2)switch(t.mode.charAt(2).toLowerCase()){case"s":return"s";case"v":return"v"}return null},triggerCallback:function(t,r){if(t[r]){var n=null;if(typeof t[r]=="string")try{n=new Function(t[r])}catch(s){console.error(s)}else n=t[r];n&&n.call(t)}},triggerGlobal:function(t){for(var r=e.getInstances(),n=0;n<r.length;n+=1)r[n].trigger(t)},_pointerMoveEvent:{mouse:"mousemove",touch:"touchmove"},_pointerEndEvent:{mouse:"mouseup",touch:"touchend"},_pointerOrigin:null,onDocumentKeyUp:function(t){["Tab","Escape"].indexOf(e.eventKey(t))!==-1&&e.picker&&e.picker.owner&&e.picker.owner.tryHide()},onWindowResize:function(t){e.redrawPosition()},onWindowScroll:function(t){e.redrawPosition()},onParentScroll:function(t){e.picker&&e.picker.owner&&e.picker.owner.tryHide()},onDocumentMouseDown:function(t){var r=t.target||t.srcElement;if(r.jscolor&&r.jscolor instanceof e.pub)r.jscolor.showOnClick&&!r.disabled&&r.jscolor.show();else if(e.getData(r,"gui")){var n=e.getData(r,"control");n&&e.onControlPointerStart(t,r,e.getData(r,"control"),"mouse")}else e.picker&&e.picker.owner&&e.picker.owner.tryHide()},onPickerTouchStart:function(t){var r=t.target||t.srcElement;e.getData(r,"control")&&e.onControlPointerStart(t,r,e.getData(r,"control"),"touch")},onControlPointerStart:function(t,r,n,s){var d=e.getData(r,"instance");e.preventDefault(t);var c=function(y,x){e.attachGroupEvent("drag",y,e._pointerMoveEvent[s],e.onDocumentPointerMove(t,r,n,s,x)),e.attachGroupEvent("drag",y,e._pointerEndEvent[s],e.onDocumentPointerEnd(t,r,n,s))};if(c(i.document,[0,0]),i.parent&&i.frameElement){var h=i.frameElement.getBoundingClientRect(),u=[-h.left,-h.top];c(i.parent.window.document,u)}var p=e.getAbsPointerPos(t),b=e.getRelPointerPos(t);switch(e._pointerOrigin={x:p.x-b.x,y:p.y-b.y},n){case"pad":e.getSliderChannel(d)==="v"&&d.channels.v===0&&d.fromHSVA(null,null,100,null),e.setPad(d,t,0,0);break;case"sld":e.setSld(d,t,0);break;case"asld":e.setASld(d,t,0);break}d.trigger("input")},onDocumentPointerMove:function(t,r,n,s,d){return function(c){var h=e.getData(r,"instance");switch(n){case"pad":e.setPad(h,c,d[0],d[1]);break;case"sld":e.setSld(h,c,d[1]);break;case"asld":e.setASld(h,c,d[1]);break}h.trigger("input")}},onDocumentPointerEnd:function(t,r,n,s){return function(d){var c=e.getData(r,"instance");e.detachGroupEvents("drag"),c.trigger("input"),c.trigger("change")}},onPaletteSampleClick:function(t){var r=t.currentTarget,n=e.getData(r,"instance"),s=e.getData(r,"color");n.format.toLowerCase()==="any"&&(n._setFormat(s.format),e.isAlphaFormat(n.getFormat())||(s.rgba[3]=1)),s.rgba[3]===null&&(n.paletteSetsAlpha===!0||n.paletteSetsAlpha==="auto"&&n._paletteHasTransparency)&&(s.rgba[3]=1),n.fromRGBA.apply(n,s.rgba),n.trigger("input"),n.trigger("change"),n.hideOnPaletteClick&&n.hide()},setPad:function(t,r,n,s){var d=e.getAbsPointerPos(r),c=n+d.x-e._pointerOrigin.x-t.padding-t.controlBorderWidth,h=s+d.y-e._pointerOrigin.y-t.padding-t.controlBorderWidth,u=c*(360/(t.width-1)),p=100-h*(100/(t.height-1));switch(e.getPadYChannel(t)){case"s":t.fromHSVA(u,p,null,null);break;case"v":t.fromHSVA(u,null,p,null);break}},setSld:function(t,r,n){var s=e.getAbsPointerPos(r),d=n+s.y-e._pointerOrigin.y-t.padding-t.controlBorderWidth,c=100-d*(100/(t.height-1));switch(e.getSliderChannel(t)){case"s":t.fromHSVA(null,c,null,null);break;case"v":t.fromHSVA(null,null,c,null);break}},setASld:function(t,r,n){var s=e.getAbsPointerPos(r),d=n+s.y-e._pointerOrigin.y-t.padding-t.controlBorderWidth,c=1-d*(1/(t.height-1));if(c<1){var h=t.getFormat();t.format.toLowerCase()==="any"&&!e.isAlphaFormat(h)&&t._setFormat(h==="hex"?"hexa":"rgba")}t.fromHSVA(null,null,null,c)},createPadCanvas:function(){var t={elm:null,draw:null},r=e.createEl("canvas"),n=r.getContext("2d"),s=function(d,c,h){r.width=d,r.height=c,n.clearRect(0,0,r.width,r.height);var u=n.createLinearGradient(0,0,r.width,0);u.addColorStop(0/6,"#F00"),u.addColorStop(1/6,"#FF0"),u.addColorStop(2/6,"#0F0"),u.addColorStop(3/6,"#0FF"),u.addColorStop(4/6,"#00F"),u.addColorStop(5/6,"#F0F"),u.addColorStop(6/6,"#F00"),n.fillStyle=u,n.fillRect(0,0,r.width,r.height);var p=n.createLinearGradient(0,0,0,r.height);switch(h.toLowerCase()){case"s":p.addColorStop(0,"rgba(255,255,255,0)"),p.addColorStop(1,"rgba(255,255,255,1)");break;case"v":p.addColorStop(0,"rgba(0,0,0,0)"),p.addColorStop(1,"rgba(0,0,0,1)");break}n.fillStyle=p,n.fillRect(0,0,r.width,r.height)};return t.elm=r,t.draw=s,t},createSliderGradient:function(){var t={elm:null,draw:null},r=e.createEl("canvas"),n=r.getContext("2d"),s=function(d,c,h,u){r.width=d,r.height=c,n.clearRect(0,0,r.width,r.height);var p=n.createLinearGradient(0,0,0,r.height);p.addColorStop(0,h),p.addColorStop(1,u),n.fillStyle=p,n.fillRect(0,0,r.width,r.height)};return t.elm=r,t.draw=s,t},createASliderGradient:function(){var t={elm:null,draw:null},r=e.createEl("canvas"),n=r.getContext("2d"),s=function(d,c,h){r.width=d,r.height=c,n.clearRect(0,0,r.width,r.height);var u=r.width/2,p=e.pub.chessboardColor1,b=e.pub.chessboardColor2;if(n.fillStyle=p,n.fillRect(0,0,r.width,r.height),u>0)for(var y=0;y<r.height;y+=u*2)n.fillStyle=b,n.fillRect(0,y,u,u),n.fillRect(u,y+u,u,u);var x=n.createLinearGradient(0,0,0,r.height);x.addColorStop(0,h),x.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=x,n.fillRect(0,0,r.width,r.height)};return t.elm=r,t.draw=s,t},BoxShadow:function(){var t=function(r,n,s,d,c,h){this.hShadow=r,this.vShadow=n,this.blur=s,this.spread=d,this.color=c,this.inset=!!h};return t.prototype.toString=function(){var r=[Math.round(this.hShadow)+"px",Math.round(this.vShadow)+"px",Math.round(this.blur)+"px",Math.round(this.spread)+"px",this.color];return this.inset&&r.push("inset"),r.join(" ")},t}(),flags:{leaveValue:1,leaveAlpha:2,leavePreview:4},enumOpts:{format:["auto","any","hex","hexa","rgb","rgba"],previewPosition:["left","right"],mode:["hsv","hvs","hs","hv"],position:["left","right","top","bottom"],alphaChannel:["auto",!0,!1],paletteSetsAlpha:["auto",!0,!1]},deprecatedOpts:{styleElement:"previewElement",onFineChange:"onInput",overwriteImportant:"forceStyle",closable:"closeButton",insetWidth:"controlBorderWidth",insetColor:"controlBorderColor",refine:null},docsRef:" See https://jscolor.com/docs/",pub:function(t,r){var n=this;r||(r={}),this.channels={r:255,g:255,b:255,h:0,s:0,v:100,a:1},this.format="auto",this.value=void 0,this.alpha=void 0,this.random=!1,this.onChange=void 0,this.onInput=void 0,this.valueElement=void 0,this.alphaElement=void 0,this.previewElement=void 0,this.previewPosition="left",this.previewSize=32,this.previewPadding=8,this.required=!0,this.hash=!0,this.uppercase=!0,this.forceStyle=!0,this.width=181,this.height=101,this.mode="HSV",this.alphaChannel="auto",this.position="bottom",this.smartPosition=!0,this.showOnClick=!0,this.hideOnLeave=!0,this.palette=[],this.paletteCols=10,this.paletteSetsAlpha="auto",this.paletteHeight=16,this.paletteSpacing=4,this.hideOnPaletteClick=!1,this.sliderSize=16,this.crossSize=8,this.closeButton=!1,this.closeText="Close",this.buttonColor="rgba(0,0,0,1)",this.buttonHeight=18,this.padding=12,this.backgroundColor="rgba(255,255,255,1)",this.borderWidth=1,this.borderColor="rgba(187,187,187,1)",this.borderRadius=8,this.controlBorderWidth=1,this.controlBorderColor="rgba(187,187,187,1)",this.shadow=!0,this.shadowBlur=15,this.shadowColor="rgba(0,0,0,0.2)",this.pointerColor="rgba(76,76,76,1)",this.pointerBorderWidth=1,this.pointerBorderColor="rgba(255,255,255,1)",this.pointerThickness=2,this.zIndex=5e3,this.container=void 0,this.minS=0,this.maxS=100,this.minV=0,this.maxV=100,this.minA=0,this.maxA=1,this.option=function(){if(!arguments.length)throw new Error("No option specified");if(arguments.length===1&&typeof arguments[0]=="string"){try{return d(arguments[0])}catch(m){console.warn(m)}return!1}else if(arguments.length>=2&&typeof arguments[0]=="string"){try{if(!s(arguments[0],arguments[1]))return!1}catch(m){return console.warn(m),!1}return this.redraw(),this.exposeColor(),!0}else if(arguments.length===1&&typeof arguments[0]=="object"){var o=arguments[0],f=!0;for(var v in o)if(o.hasOwnProperty(v))try{s(v,o[v])||(f=!1)}catch(m){console.warn(m),f=!1}return this.redraw(),this.exposeColor(),f}throw new Error("Invalid arguments")},this.channel=function(o,f){if(typeof o!="string")throw new Error("Invalid value for channel name: "+o);if(f===void 0)return this.channels.hasOwnProperty(o.toLowerCase())?this.channels[o.toLowerCase()]:(console.warn("Getting unknown channel: "+o),!1);var v=!1;switch(o.toLowerCase()){case"r":v=this.fromRGBA(f,null,null,null);break;case"g":v=this.fromRGBA(null,f,null,null);break;case"b":v=this.fromRGBA(null,null,f,null);break;case"h":v=this.fromHSVA(f,null,null,null);break;case"s":v=this.fromHSVA(null,f,null,null);break;case"v":v=this.fromHSVA(null,null,f,null);break;case"a":v=this.fromHSVA(null,null,null,f);break;default:return console.warn("Setting unknown channel: "+o),!1}return v?(this.redraw(),!0):!1},this.trigger=function(o){for(var f=e.strList(o),v=0;v<f.length;v+=1){var m=f[v].toLowerCase(),E=null;switch(m){case"input":E="onInput";break;case"change":E="onChange";break}E&&e.triggerCallback(this,E),e.triggerInputEvent(this.valueElement,m,!0,!0)}},this.fromHSVA=function(o,f,v,m,E){if(o===void 0&&(o=null),f===void 0&&(f=null),v===void 0&&(v=null),m===void 0&&(m=null),o!==null){if(isNaN(o))return!1;this.channels.h=Math.max(0,Math.min(360,o))}if(f!==null){if(isNaN(f))return!1;this.channels.s=Math.max(0,Math.min(100,this.maxS,f),this.minS)}if(v!==null){if(isNaN(v))return!1;this.channels.v=Math.max(0,Math.min(100,this.maxV,v),this.minV)}if(m!==null){if(isNaN(m))return!1;this.channels.a=this.hasAlphaChannel()?Math.max(0,Math.min(1,this.maxA,m),this.minA):1}var w=e.HSV_RGB(this.channels.h,this.channels.s,this.channels.v);return this.channels.r=w[0],this.channels.g=w[1],this.channels.b=w[2],this.exposeColor(E),!0},this.fromRGBA=function(o,f,v,m,E){if(o===void 0&&(o=null),f===void 0&&(f=null),v===void 0&&(v=null),m===void 0&&(m=null),o!==null){if(isNaN(o))return!1;o=Math.max(0,Math.min(255,o))}if(f!==null){if(isNaN(f))return!1;f=Math.max(0,Math.min(255,f))}if(v!==null){if(isNaN(v))return!1;v=Math.max(0,Math.min(255,v))}if(m!==null){if(isNaN(m))return!1;this.channels.a=this.hasAlphaChannel()?Math.max(0,Math.min(1,this.maxA,m),this.minA):1}var w=e.RGB_HSV(o===null?this.channels.r:o,f===null?this.channels.g:f,v===null?this.channels.b:v);w[0]!==null&&(this.channels.h=Math.max(0,Math.min(360,w[0]))),w[2]!==0&&(this.channels.s=Math.max(0,this.minS,Math.min(100,this.maxS,w[1]))),this.channels.v=Math.max(0,this.minV,Math.min(100,this.maxV,w[2]));var k=e.HSV_RGB(this.channels.h,this.channels.s,this.channels.v);return this.channels.r=k[0],this.channels.g=k[1],this.channels.b=k[2],this.exposeColor(E),!0},this.fromHSV=function(o,f,v,m){return console.warn("fromHSV() method is DEPRECATED. Using fromHSVA() instead."+e.docsRef),this.fromHSVA(o,f,v,null,m)},this.fromRGB=function(o,f,v,m){return console.warn("fromRGB() method is DEPRECATED. Using fromRGBA() instead."+e.docsRef),this.fromRGBA(o,f,v,null,m)},this.fromString=function(o,f){if(!this.required&&o.trim()==="")return this.setPreviewElementBg(null),this.setValueElementValue(""),!0;var v=e.parseColorString(o);return v?(this.format.toLowerCase()==="any"&&(this._setFormat(v.format),e.isAlphaFormat(this.getFormat())||(v.rgba[3]=1)),this.fromRGBA(v.rgba[0],v.rgba[1],v.rgba[2],v.rgba[3],f),!0):!1},this.randomize=function(o,f,v,m,E,w,k,A){o===void 0&&(o=0),f===void 0&&(f=100),v===void 0&&(v=0),m===void 0&&(m=100),E===void 0&&(E=0),w===void 0&&(w=359),k===void 0&&(k=1),A===void 0&&(A=1),this.fromHSVA(E+Math.floor(Math.random()*(w-E+1)),v+Math.floor(Math.random()*(m-v+1)),o+Math.floor(Math.random()*(f-o+1)),(100*k+Math.floor(Math.random()*(100*(A-k)+1)))/100)},this.toString=function(o){switch(o===void 0&&(o=this.getFormat()),o.toLowerCase()){case"hex":return this.toHEXString();case"hexa":return this.toHEXAString();case"rgb":return this.toRGBString();case"rgba":return this.toRGBAString()}return!1},this.toHEXString=function(){return e.hexColor(this.channels.r,this.channels.g,this.channels.b)},this.toHEXAString=function(){return e.hexaColor(this.channels.r,this.channels.g,this.channels.b,this.channels.a)},this.toRGBString=function(){return e.rgbColor(this.channels.r,this.channels.g,this.channels.b)},this.toRGBAString=function(){return e.rgbaColor(this.channels.r,this.channels.g,this.channels.b,this.channels.a)},this.toGrayscale=function(){return .213*this.channels.r+.715*this.channels.g+.072*this.channels.b},this.toCanvas=function(){return e.genColorPreviewCanvas(this.toRGBAString()).canvas},this.toDataURL=function(){return this.toCanvas().toDataURL()},this.toBackground=function(){return e.pub.background(this.toRGBAString())},this.isLight=function(){return this.toGrayscale()>127.5},this.hide=function(){y()&&c()},this.show=function(){h()},this.redraw=function(){y()&&h()},this.getFormat=function(){return this._currentFormat},this._setFormat=function(o){this._currentFormat=o.toLowerCase()},this.hasAlphaChannel=function(){return this.alphaChannel==="auto"?this.format.toLowerCase()==="any"||e.isAlphaFormat(this.getFormat())||this.alpha!==void 0||this.alphaElement!==void 0:this.alphaChannel},this.processValueInput=function(o){this.fromString(o)||this.exposeColor()},this.processAlphaInput=function(o){this.fromHSVA(null,null,null,parseFloat(o))||this.exposeColor()},this.exposeColor=function(o){var f=this.toString(),v=this.getFormat();if(e.setDataAttr(this.targetElement,"current-color",f),!(o&e.flags.leaveValue)&&this.valueElement&&((v==="hex"||v==="hexa")&&(this.uppercase||(f=f.toLowerCase()),this.hash||(f=f.replace(/^#/,""))),this.setValueElementValue(f)),!(o&e.flags.leaveAlpha)&&this.alphaElement){var m=Math.round(this.channels.a*100)/100;this.setAlphaElementValue(m)}!(o&e.flags.leavePreview)&&this.previewElement&&((e.isTextInput(this.previewElement)||e.isButton(this.previewElement)&&!e.isButtonEmpty(this.previewElement))&&this.previewPosition,this.setPreviewElementBg(this.toRGBAString())),y()&&(u(),p(),b())},this.setPreviewElementBg=function(o){if(this.previewElement){var f=null,v=null;(e.isTextInput(this.previewElement)||e.isButton(this.previewElement)&&!e.isButtonEmpty(this.previewElement))&&(f=this.previewPosition,v=this.previewSize);var m=[];if(!o)m.push({image:"none",position:"left top",size:"auto",repeat:"no-repeat",origin:"padding-box"});else{m.push({image:e.genColorPreviewGradient(o,f,v?v-e.pub.previewSeparator.length:null),position:"left top",size:"auto",repeat:f?"repeat-y":"repeat",origin:"padding-box"});var E=e.genColorPreviewCanvas("rgba(0,0,0,0)",f?{left:"right",right:"left"}[f]:null,v,!0);m.push({image:"url('"+E.canvas.toDataURL()+"')",position:(f||"left")+" top",size:E.width+"px "+E.height+"px",repeat:f?"repeat-y":"repeat",origin:"padding-box"})}for(var w={image:[],position:[],size:[],repeat:[],origin:[]},k=0;k<m.length;k+=1)w.image.push(m[k].image),w.position.push(m[k].position),w.size.push(m[k].size),w.repeat.push(m[k].repeat),w.origin.push(m[k].origin);var R={"background-image":w.image.join(", "),"background-position":w.position.join(", "),"background-size":w.size.join(", "),"background-repeat":w.repeat.join(", "),"background-origin":w.origin.join(", ")};e.setStyle(this.previewElement,R,this.forceStyle);var A={left:null,right:null};f&&(A[f]=this.previewSize+this.previewPadding+"px");var R={"padding-left":A.left,"padding-right":A.right};e.setStyle(this.previewElement,R,this.forceStyle,!0)}},this.setValueElementValue=function(o){this.valueElement&&(e.nodeName(this.valueElement)==="input"?this.valueElement.value=o:this.valueElement.innerHTML=o)},this.setAlphaElementValue=function(o){this.alphaElement&&(e.nodeName(this.alphaElement)==="input"?this.alphaElement.value=o:this.alphaElement.innerHTML=o)},this._processParentElementsInDOM=function(){if(!this._parentElementsProcessed){this._parentElementsProcessed=!0;var o=this.targetElement;do{var f=e.getCompStyle(o);f.position&&f.position.toLowerCase()==="fixed"&&(this.fixed=!0),o!==this.targetElement&&(e.getData(o,"hasScrollListener")||(o.addEventListener("scroll",e.onParentScroll,!1),e.setData(o,"hasScrollListener",!0)))}while((o=o.parentNode)&&e.nodeName(o)!=="body")}},this.tryHide=function(){this.hideOnLeave&&this.hide()},this.set__palette=function(o){this.palette=o,this._palette=e.parsePaletteValue(o),this._paletteHasTransparency=e.containsTranparentColor(this._palette)};function s(o,f){if(typeof o!="string")throw new Error("Invalid value for option name: "+o);if(e.enumOpts.hasOwnProperty(o)&&(typeof f=="string"&&(f=f.toLowerCase()),e.enumOpts[o].indexOf(f)===-1))throw new Error("Option '"+o+"' has invalid value: "+f);if(e.deprecatedOpts.hasOwnProperty(o)){var v=o,m=e.deprecatedOpts[o];if(m)console.warn("Option '%s' is DEPRECATED, using '%s' instead."+e.docsRef,v,m),o=m;else throw new Error("Option '"+o+"' is DEPRECATED")}var E="set__"+o;if(typeof n[E]=="function")return n[E](f),!0;if(o in n)return n[o]=f,!0;throw new Error("Unrecognized configuration option: "+o)}function d(o){if(typeof o!="string")throw new Error("Invalid value for option name: "+o);if(e.deprecatedOpts.hasOwnProperty(o)){var f=o,v=e.deprecatedOpts[o];if(v)console.warn("Option '%s' is DEPRECATED, using '%s' instead."+e.docsRef,f,v),o=v;else throw new Error("Option '"+o+"' is DEPRECATED")}var m="get__"+o;if(typeof n[m]=="function")return n[m](value);if(o in n)return n[o];throw new Error("Unrecognized configuration option: "+o)}function c(){e.removeClass(n.targetElement,e.pub.activeClassName),e.picker.wrap.parentNode.removeChild(e.picker.wrap),delete e.picker.owner}function h(){n._processParentElementsInDOM(),e.picker||(e.picker={owner:null,wrap:e.createEl("div"),box:e.createEl("div"),boxS:e.createEl("div"),boxB:e.createEl("div"),pad:e.createEl("div"),padB:e.createEl("div"),padM:e.createEl("div"),padCanvas:e.createPadCanvas(),cross:e.createEl("div"),crossBY:e.createEl("div"),crossBX:e.createEl("div"),crossLY:e.createEl("div"),crossLX:e.createEl("div"),sld:e.createEl("div"),sldB:e.createEl("div"),sldM:e.createEl("div"),sldGrad:e.createSliderGradient(),sldPtrS:e.createEl("div"),sldPtrIB:e.createEl("div"),sldPtrMB:e.createEl("div"),sldPtrOB:e.createEl("div"),asld:e.createEl("div"),asldB:e.createEl("div"),asldM:e.createEl("div"),asldGrad:e.createASliderGradient(),asldPtrS:e.createEl("div"),asldPtrIB:e.createEl("div"),asldPtrMB:e.createEl("div"),asldPtrOB:e.createEl("div"),pal:e.createEl("div"),btn:e.createEl("div"),btnT:e.createEl("div")},e.picker.pad.appendChild(e.picker.padCanvas.elm),e.picker.padB.appendChild(e.picker.pad),e.picker.cross.appendChild(e.picker.crossBY),e.picker.cross.appendChild(e.picker.crossBX),e.picker.cross.appendChild(e.picker.crossLY),e.picker.cross.appendChild(e.picker.crossLX),e.picker.padB.appendChild(e.picker.cross),e.picker.box.appendChild(e.picker.padB),e.picker.box.appendChild(e.picker.padM),e.picker.sld.appendChild(e.picker.sldGrad.elm),e.picker.sldB.appendChild(e.picker.sld),e.picker.sldB.appendChild(e.picker.sldPtrOB),e.picker.sldPtrOB.appendChild(e.picker.sldPtrMB),e.picker.sldPtrMB.appendChild(e.picker.sldPtrIB),e.picker.sldPtrIB.appendChild(e.picker.sldPtrS),e.picker.box.appendChild(e.picker.sldB),e.picker.box.appendChild(e.picker.sldM),e.picker.asld.appendChild(e.picker.asldGrad.elm),e.picker.asldB.appendChild(e.picker.asld),e.picker.asldB.appendChild(e.picker.asldPtrOB),e.picker.asldPtrOB.appendChild(e.picker.asldPtrMB),e.picker.asldPtrMB.appendChild(e.picker.asldPtrIB),e.picker.asldPtrIB.appendChild(e.picker.asldPtrS),e.picker.box.appendChild(e.picker.asldB),e.picker.box.appendChild(e.picker.asldM),e.picker.box.appendChild(e.picker.pal),e.picker.btn.appendChild(e.picker.btnT),e.picker.box.appendChild(e.picker.btn),e.picker.boxB.appendChild(e.picker.box),e.picker.wrap.appendChild(e.picker.boxS),e.picker.wrap.appendChild(e.picker.boxB),e.picker.wrap.addEventListener("touchstart",e.onPickerTouchStart,e.isPassiveEventSupported?{passive:!1}:!1));var o=e.picker,f=!!e.getSliderChannel(n),v=n.hasAlphaChannel(),m=e.getPickerDims(n),E=2*n.pointerBorderWidth+n.pointerThickness+2*n.crossSize,w=e.getControlPadding(n),k=Math.min(n.borderRadius,Math.round(n.padding*Math.PI)),A="crosshair";o.wrap.className="jscolor-wrap",o.wrap.style.width=m.borderW+"px",o.wrap.style.height=m.borderH+"px",o.wrap.style.zIndex=n.zIndex,o.box.className="jscolor-picker",o.box.style.width=m.paddedW+"px",o.box.style.height=m.paddedH+"px",o.boxS.className="jscolor-shadow",e.setBorderRadius(o.boxS,k+"px"),o.boxB.className="jscolor-border",o.boxB.style.border=n.borderWidth+"px solid",o.boxB.style.borderColor=n.borderColor,o.boxB.style.background=n.backgroundColor,e.setBorderRadius(o.boxB,k+"px"),o.padM.style.background="rgba(255,0,0,.2)",o.sldM.style.background="rgba(0,255,0,.2)",o.asldM.style.background="rgba(0,0,255,.2)",o.padM.style.opacity=o.sldM.style.opacity=o.asldM.style.opacity="0",o.pad.style.position="relative",o.pad.style.width=n.width+"px",o.pad.style.height=n.height+"px",o.padCanvas.draw(n.width,n.height,e.getPadYChannel(n)),o.padB.style.position="absolute",o.padB.style.left=n.padding+"px",o.padB.style.top=n.padding+"px",o.padB.style.border=n.controlBorderWidth+"px solid",o.padB.style.borderColor=n.controlBorderColor,o.padM.style.position="absolute",o.padM.style.left="0px",o.padM.style.top="0px",o.padM.style.width=n.padding+2*n.controlBorderWidth+n.width+w+"px",o.padM.style.height=2*n.controlBorderWidth+2*n.padding+n.height+"px",o.padM.style.cursor=A,e.setData(o.padM,{instance:n,control:"pad"}),o.cross.style.position="absolute",o.cross.style.left=o.cross.style.top="0",o.cross.style.width=o.cross.style.height=E+"px",o.crossBY.style.position=o.crossBX.style.position="absolute",o.crossBY.style.background=o.crossBX.style.background=n.pointerBorderColor,o.crossBY.style.width=o.crossBX.style.height=2*n.pointerBorderWidth+n.pointerThickness+"px",o.crossBY.style.height=o.crossBX.style.width=E+"px",o.crossBY.style.left=o.crossBX.style.top=Math.floor(E/2)-Math.floor(n.pointerThickness/2)-n.pointerBorderWidth+"px",o.crossBY.style.top=o.crossBX.style.left="0",o.crossLY.style.position=o.crossLX.style.position="absolute",o.crossLY.style.background=o.crossLX.style.background=n.pointerColor,o.crossLY.style.height=o.crossLX.style.width=E-2*n.pointerBorderWidth+"px",o.crossLY.style.width=o.crossLX.style.height=n.pointerThickness+"px",o.crossLY.style.left=o.crossLX.style.top=Math.floor(E/2)-Math.floor(n.pointerThickness/2)+"px",o.crossLY.style.top=o.crossLX.style.left=n.pointerBorderWidth+"px",o.sld.style.overflow="hidden",o.sld.style.width=n.sliderSize+"px",o.sld.style.height=n.height+"px",o.sldGrad.draw(n.sliderSize,n.height,"#000","#000"),o.sldB.style.display=f?"block":"none",o.sldB.style.position="absolute",o.sldB.style.left=n.padding+n.width+2*n.controlBorderWidth+2*w+"px",o.sldB.style.top=n.padding+"px",o.sldB.style.border=n.controlBorderWidth+"px solid",o.sldB.style.borderColor=n.controlBorderColor,o.sldM.style.display=f?"block":"none",o.sldM.style.position="absolute",o.sldM.style.left=n.padding+n.width+2*n.controlBorderWidth+w+"px",o.sldM.style.top="0px",o.sldM.style.width=n.sliderSize+2*w+2*n.controlBorderWidth+(v?0:Math.max(0,n.padding-w))+"px",o.sldM.style.height=2*n.controlBorderWidth+2*n.padding+n.height+"px",o.sldM.style.cursor="default",e.setData(o.sldM,{instance:n,control:"sld"}),o.sldPtrIB.style.border=o.sldPtrOB.style.border=n.pointerBorderWidth+"px solid "+n.pointerBorderColor,o.sldPtrOB.style.position="absolute",o.sldPtrOB.style.left=-(2*n.pointerBorderWidth+n.pointerThickness)+"px",o.sldPtrOB.style.top="0",o.sldPtrMB.style.border=n.pointerThickness+"px solid "+n.pointerColor,o.sldPtrS.style.width=n.sliderSize+"px",o.sldPtrS.style.height=e.pub.sliderInnerSpace+"px",o.asld.style.overflow="hidden",o.asld.style.width=n.sliderSize+"px",o.asld.style.height=n.height+"px",o.asldGrad.draw(n.sliderSize,n.height,"#000"),o.asldB.style.display=v?"block":"none",o.asldB.style.position="absolute",o.asldB.style.left=n.padding+n.width+2*n.controlBorderWidth+w+(f?n.sliderSize+3*w+2*n.controlBorderWidth:0)+"px",o.asldB.style.top=n.padding+"px",o.asldB.style.border=n.controlBorderWidth+"px solid",o.asldB.style.borderColor=n.controlBorderColor,o.asldM.style.display=v?"block":"none",o.asldM.style.position="absolute",o.asldM.style.left=n.padding+n.width+2*n.controlBorderWidth+w+(f?n.sliderSize+2*w+2*n.controlBorderWidth:0)+"px",o.asldM.style.top="0px",o.asldM.style.width=n.sliderSize+2*w+2*n.controlBorderWidth+Math.max(0,n.padding-w)+"px",o.asldM.style.height=2*n.controlBorderWidth+2*n.padding+n.height+"px",o.asldM.style.cursor="default",e.setData(o.asldM,{instance:n,control:"asld"}),o.asldPtrIB.style.border=o.asldPtrOB.style.border=n.pointerBorderWidth+"px solid "+n.pointerBorderColor,o.asldPtrOB.style.position="absolute",o.asldPtrOB.style.left=-(2*n.pointerBorderWidth+n.pointerThickness)+"px",o.asldPtrOB.style.top="0",o.asldPtrMB.style.border=n.pointerThickness+"px solid "+n.pointerColor,o.asldPtrS.style.width=n.sliderSize+"px",o.asldPtrS.style.height=e.pub.sliderInnerSpace+"px",o.pal.className="jscolor-palette",o.pal.style.display=m.palette.rows?"block":"none",o.pal.style.left=n.padding+"px",o.pal.style.top=2*n.controlBorderWidth+2*n.padding+n.height+"px",o.pal.innerHTML="";for(var R=e.genColorPreviewCanvas("rgba(0,0,0,0)"),z=0,se=0;se<m.palette.rows;se++)for(var le=0;le<m.palette.cols&&z<n._palette.length;le++,z++){var Z=n._palette[z],Ke=e.rgbaColor.apply(null,Z.rgba),ee=e.createEl("div");ee.style.width=m.palette.cellW-2*n.controlBorderWidth+"px",ee.style.height=m.palette.cellH-2*n.controlBorderWidth+"px",ee.style.backgroundColor=Ke;var B=e.createEl("div");B.className="jscolor-palette-sw",B.style.left=(m.palette.cols<=1?0:Math.round(10*(le*((m.contentW-m.palette.cellW)/(m.palette.cols-1))))/10)+"px",B.style.top=se*(m.palette.cellH+n.paletteSpacing)+"px",B.style.border=n.controlBorderWidth+"px solid",B.style.borderColor=n.controlBorderColor,Z.rgba[3]!==null&&Z.rgba[3]<1&&(B.style.backgroundImage="url('"+R.canvas.toDataURL()+"')",B.style.backgroundRepeat="repeat",B.style.backgroundPosition="center center"),e.setData(B,{instance:n,control:"palette-sw",color:Z}),B.addEventListener("click",e.onPaletteSampleClick,!1),B.appendChild(ee),o.pal.appendChild(B)}function qe(){var V=n.controlBorderColor.split(/\s+/),Je=V.length<2?V[0]:V[1]+" "+V[0]+" "+V[0]+" "+V[1];o.btn.style.borderColor=Je}var be=15;o.btn.className="jscolor-btn jscolor-btn-close",o.btn.style.display=n.closeButton?"block":"none",o.btn.style.left=n.padding+"px",o.btn.style.bottom=n.padding+"px",o.btn.style.padding="0 "+be+"px",o.btn.style.maxWidth=m.contentW-2*n.controlBorderWidth-2*be+"px",o.btn.style.height=n.buttonHeight+"px",o.btn.style.border=n.controlBorderWidth+"px solid",qe(),o.btn.style.color=n.buttonColor,o.btn.onmousedown=function(){n.hide()},o.btnT.style.display="inline",o.btnT.style.lineHeight=n.buttonHeight+"px",o.btnT.innerText=n.closeText,u(),p(),b(),e.picker.owner&&e.picker.owner!==n&&e.removeClass(e.picker.owner.targetElement,e.pub.activeClassName),e.picker.owner=n,e.redrawPosition(),o.wrap.parentNode!==n.container&&n.container.appendChild(o.wrap),e.addClass(n.targetElement,e.pub.activeClassName)}function u(){var o=e.getPadYChannel(n),f=Math.round(n.channels.h/360*(n.width-1)),v=Math.round((1-n.channels[o]/100)*(n.height-1)),m=2*n.pointerBorderWidth+n.pointerThickness+2*n.crossSize,E=-Math.floor(m/2);switch(e.picker.cross.style.left=f+E+"px",e.picker.cross.style.top=v+E+"px",e.getSliderChannel(n)){case"s":var w=e.HSV_RGB(n.channels.h,100,n.channels.v),k=e.HSV_RGB(n.channels.h,0,n.channels.v),R="rgb("+Math.round(w[0])+","+Math.round(w[1])+","+Math.round(w[2])+")",z="rgb("+Math.round(k[0])+","+Math.round(k[1])+","+Math.round(k[2])+")";e.picker.sldGrad.draw(n.sliderSize,n.height,R,z);break;case"v":var A=e.HSV_RGB(n.channels.h,n.channels.s,100),R="rgb("+Math.round(A[0])+","+Math.round(A[1])+","+Math.round(A[2])+")",z="#000";e.picker.sldGrad.draw(n.sliderSize,n.height,R,z);break}e.picker.asldGrad.draw(n.sliderSize,n.height,n.toHEXString())}function p(){var o=e.getSliderChannel(n);if(o){var f=Math.round((1-n.channels[o]/100)*(n.height-1));e.picker.sldPtrOB.style.top=f-(2*n.pointerBorderWidth+n.pointerThickness)-Math.floor(e.pub.sliderInnerSpace/2)+"px"}e.picker.asldGrad.draw(n.sliderSize,n.height,n.toHEXString())}function b(){var o=Math.round((1-n.channels.a)*(n.height-1));e.picker.asldPtrOB.style.top=o-(2*n.pointerBorderWidth+n.pointerThickness)-Math.floor(e.pub.sliderInnerSpace/2)+"px"}function y(){return e.picker&&e.picker.owner===n}function x(o){e.eventKey(o)==="Enter"&&(n.valueElement&&n.processValueInput(n.valueElement.value),n.tryHide())}function T(o){e.eventKey(o)==="Enter"&&(n.alphaElement&&n.processAlphaInput(n.alphaElement.value),n.tryHide())}function _(o){if(!e.getData(o,"internal")){var f=n.valueElement.value;n.processValueInput(n.valueElement.value),e.triggerCallback(n,"onChange"),n.valueElement.value!==f&&e.triggerInputEvent(n.valueElement,"change",!0,!0)}}function L(o){if(!e.getData(o,"internal")){var f=n.alphaElement.value;n.processAlphaInput(n.alphaElement.value),e.triggerCallback(n,"onChange"),e.triggerInputEvent(n.valueElement,"change",!0,!0),n.alphaElement.value!==f&&e.triggerInputEvent(n.alphaElement,"change",!0,!0)}}function oe(o){e.getData(o,"internal")||(n.valueElement&&n.fromString(n.valueElement.value,e.flags.leaveValue),e.triggerCallback(n,"onInput"))}function je(o){e.getData(o,"internal")||(n.alphaElement&&n.fromHSVA(null,null,null,parseFloat(n.alphaElement.value),e.flags.leaveAlpha),e.triggerCallback(n,"onInput"),e.triggerInputEvent(n.valueElement,"input",!0,!0))}if(e.pub.options){for(var P in e.pub.options)if(e.pub.options.hasOwnProperty(P))try{s(P,e.pub.options[P])}catch(o){console.warn(o)}}var N=[];r.preset&&(typeof r.preset=="string"?N=r.preset.split(/\s+/):Array.isArray(r.preset)?N=r.preset.slice():console.warn("Unrecognized preset value")),N.indexOf("default")===-1&&N.push("default");for(var ae=N.length-1;ae>=0;ae-=1){var G=N[ae];if(G){if(!e.pub.presets.hasOwnProperty(G)){console.warn("Unknown preset: %s",G);continue}for(var P in e.pub.presets[G])if(e.pub.presets[G].hasOwnProperty(P))try{s(P,e.pub.presets[G][P])}catch(f){console.warn(f)}}}var Xe=["preset"];for(var P in r)if(r.hasOwnProperty(P)&&Xe.indexOf(P)===-1)try{s(P,r[P])}catch(f){console.warn(f)}if(this.container===void 0?this.container=i.document.body:this.container=e.node(this.container),!this.container)throw new Error("Cannot instantiate color picker without a container element");if(this.targetElement=e.node(t),!this.targetElement){if(typeof t=="string"&&/^[a-zA-Z][\w:.-]*$/.test(t)){var ge=t;throw new Error("If '"+ge+"' is supposed to be an ID, please use '#"+ge+"' or any valid CSS selector.")}throw new Error("Cannot instantiate color picker without a target element")}if(this.targetElement.jscolor&&this.targetElement.jscolor instanceof e.pub)throw new Error("Color picker already installed on this element");if(this.targetElement.jscolor=this,e.addClass(this.targetElement,e.pub.className),e.instances.push(this),e.isButton(this.targetElement)&&(this.targetElement.type.toLowerCase()!=="button"&&(this.targetElement.type="button"),e.isButtonEmpty(this.targetElement))){e.removeChildren(this.targetElement),this.targetElement.appendChild(i.document.createTextNode(" "));var Ue=e.getCompStyle(this.targetElement),Ye=parseFloat(Ue["min-width"])||0;Ye<this.previewSize&&e.setStyle(this.targetElement,{"min-width":this.previewSize+"px"},this.forceStyle)}if(this.valueElement===void 0?e.isTextInput(this.targetElement)&&(this.valueElement=this.targetElement):this.valueElement===null||(this.valueElement=e.node(this.valueElement)),this.alphaElement&&(this.alphaElement=e.node(this.alphaElement)),this.previewElement===void 0?this.previewElement=this.targetElement:this.previewElement===null||(this.previewElement=e.node(this.previewElement)),this.valueElement&&e.isTextInput(this.valueElement)){var ve={onInput:this.valueElement.oninput};this.valueElement.oninput=null,this.valueElement.addEventListener("keydown",x,!1),this.valueElement.addEventListener("change",_,!1),this.valueElement.addEventListener("input",oe,!1),ve.onInput&&this.valueElement.addEventListener("input",ve.onInput,!1),this.valueElement.setAttribute("autocomplete","off"),this.valueElement.setAttribute("autocorrect","off"),this.valueElement.setAttribute("autocapitalize","off"),this.valueElement.setAttribute("spellcheck",!1)}this.alphaElement&&e.isTextInput(this.alphaElement)&&(this.alphaElement.addEventListener("keydown",T,!1),this.alphaElement.addEventListener("change",L,!1),this.alphaElement.addEventListener("input",je,!1),this.alphaElement.setAttribute("autocomplete","off"),this.alphaElement.setAttribute("autocorrect","off"),this.alphaElement.setAttribute("autocapitalize","off"),this.alphaElement.setAttribute("spellcheck",!1));var J="FFFFFF";this.value!==void 0?J=this.value:this.valueElement&&this.valueElement.value!==void 0&&(J=this.valueElement.value);var Q=void 0;if(this.alpha!==void 0?Q=""+this.alpha:this.alphaElement&&this.alphaElement.value!==void 0&&(Q=this.alphaElement.value),this._currentFormat=null,["auto","any"].indexOf(this.format.toLowerCase())>-1){var me=e.parseColorString(J);this._currentFormat=me?me.format:"hex"}else this._currentFormat=this.format.toLowerCase();this.processValueInput(J),Q!==void 0&&this.processAlphaInput(Q),this.random&&this.randomize.apply(this,Array.isArray(this.random)?this.random:[])}};return e.pub.className="jscolor",e.pub.activeClassName="jscolor-active",e.pub.looseJSON=!0,e.pub.presets={},e.pub.presets.default={},e.pub.presets.light={backgroundColor:"rgba(255,255,255,1)",controlBorderColor:"rgba(187,187,187,1)",buttonColor:"rgba(0,0,0,1)"},e.pub.presets.dark={backgroundColor:"rgba(51,51,51,1)",controlBorderColor:"rgba(153,153,153,1)",buttonColor:"rgba(240,240,240,1)"},e.pub.presets.small={width:101,height:101,padding:10,sliderSize:14,paletteCols:8},e.pub.presets.medium={width:181,height:101,padding:12,sliderSize:16,paletteCols:10},e.pub.presets.large={width:271,height:151,padding:12,sliderSize:24,paletteCols:15},e.pub.presets.thin={borderWidth:1,controlBorderWidth:1,pointerBorderWidth:1},e.pub.presets.thick={borderWidth:2,controlBorderWidth:2,pointerBorderWidth:2},e.pub.sliderInnerSpace=3,e.pub.chessboardSize=8,e.pub.chessboardColor1="#666666",e.pub.chessboardColor2="#999999",e.pub.previewSeparator=["rgba(255,255,255,.65)","rgba(128,128,128,.65)"],e.pub.init=function(){if(!e.initialized)for(i.document.addEventListener("mousedown",e.onDocumentMouseDown,!1),i.document.addEventListener("keyup",e.onDocumentKeyUp,!1),i.addEventListener("resize",e.onWindowResize,!1),i.addEventListener("scroll",e.onWindowScroll,!1),e.appendDefaultCss(),e.pub.install(),e.initialized=!0;e.readyQueue.length;){var t=e.readyQueue.shift();t()}},e.pub.install=function(t){var r=!0;try{e.installBySelector("[data-jscolor]",t)}catch(n){r=!1,console.warn(n)}if(e.pub.lookupClass)try{e.installBySelector("input."+e.pub.lookupClass+", button."+e.pub.lookupClass,t)}catch{}return r},e.pub.ready=function(t){return typeof t!="function"?(console.warn("Passed value is not a function"),!1):(e.initialized?t():e.readyQueue.push(t),!0)},e.pub.trigger=function(t){var r=function(){e.triggerGlobal(t)};e.initialized?r():e.pub.ready(r)},e.pub.hide=function(){e.picker&&e.picker.owner&&e.picker.owner.hide()},e.pub.chessboard=function(t){t||(t="rgba(0,0,0,0)");var r=e.genColorPreviewCanvas(t);return r.canvas.toDataURL()},e.pub.background=function(t){var r=[];r.push(e.genColorPreviewGradient(t));var n=e.genColorPreviewCanvas();return r.push(["url('"+n.canvas.toDataURL()+"')","left top","repeat"].join(" ")),r.join(", ")},e.pub.options={},e.pub.lookupClass="jscolor",e.pub.installByClassName=function(){return console.error('jscolor.installByClassName() is DEPRECATED. Use data-jscolor="" attribute instead of a class name.'+e.docsRef),!1},e.register(),e.pub}();return typeof i.jscolor>"u"&&(i.jscolor=i.JSColor=a),a})})(Ve);var Wt=Ve.exports;const Nt=It(Wt),Gt=C`<style>
  .color-select {
    flex: 0 0 50px;
    height: 50px;
    width: 50px;
    border-radius: 12px;
    border: 1px solid black;
    cursor: pointer;
    position: relative;
    background: linear-gradient(var(--current), var(--current)),
      var(--transparency);
    transition: 100ms;
  }

  .color-select:hover {
    transform: scale(1.1);
  }

  .color-select.selected {
    outline: 1px solid white;
    border-radius: unset;
  }

  .edit-color-btn {
    border: 0;
    outline: 0;
    padding: 0;
    cursor: pointer;
    background-color: transparent;
    height: 100%;
    width: 100%;
  }

  .edit-color-icon {
    position: absolute;
    line-height: 1;
    top: 5px;
    left: 5px;
  }

  .edit-color-icon > i {
    line-height: 0;
    text-shadow: 0px 0px 2px black;
  }

  .delete-color-button {
    position: absolute;
    display: flex;
    padding: 0;
    border: 0;
    outline: 0;
    background-color: transparent;
    color: #343434;
    font-size: x-large;
    line-height: 1;

    bottom: 2px;
    right: 2px;

    cursor: pointer;
  }

  .delete-color-button:hover {
    color: red;
    text-shadow: 0px 0px 3px black;
  }
</style>`;function Vt(){const l="0123456789ABCDEF";let i="#";for(let a=0;a<6;a++)i+=l[Math.floor(Math.random()*16)];return i}function Ft({dispatch:l},i){if(g.palette.length==1){alert("you need some color in your life");return}const a=g.palette.filter((t,r)=>r!=i),e=g.bitmap.pixels.map(t=>t==i?0:t>i?t-1:t);l({palette:a,bitmap:new M(g.width,g.height,e)})}function Le({dispatch:l},i){const a=document.getElementById(`color-${i}`);if(!a.jscolor){const e=new Nt(a,{preset:"dark large",format:"hexa",value:g.palette[i],onInput:()=>{const t=[...g.palette];t[i]=e.toRGBAString(),l({palette:t,bitmap:new M(g.width,g.height,g.bitmap.pixels)})},previewElement:null})}a.jscolor.show()}function Ot(l){let{dispatch:i}=l;return C` ${Gt}
    <button
      class="icon-btn ${g.editingPalette?"selected":""}"
      @click=${()=>i({editingPalette:!g.editingPalette})}>
      <i class="fa-solid fa-pen"></i>
    </button>
    <button
      class="icon-btn"
      @click=${()=>{let a=[...g.palette];a.push(Vt()),i({palette:a})}}>
      <i class="fa-solid fa-plus"></i>
    </button>
    ${g.palette.map((a,e)=>C`<div
          style="--current: ${a};"
          class="color-select ${e==g.activeColor?"selected":""}"
          @click=${()=>i({activeColor:e})}>
          ${g.editingPalette&&e>0?C`
                <button
                  class="delete-color-button"
                  @click=${()=>Ft(l,e)}>
                  <i class="fa-solid fa-circle-xmark"></i>
                </button>
                <button
                  id="color-${e}"
                  class="edit-color-btn"
                  @click=${t=>Le(l,e)}></button>
                <div
                  class="edit-color-icon"
                  @click=${t=>Le(l,e)}>
                  <i class="fa-solid fa-pen"></i>
                </div>
              `:""}
        </div>`)}`}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Re(l,i){if(l!==void 0){let a=0;for(const e of l)yield i(e,a++)}}const jt=C`<style>
  #debug-pane {
    align-self: flex-start;
    display: grid;
    grid-template-columns: auto auto;
    flex-basis: 350px;
    place-content: start end;
    gap: 1px;
    background-color: #1a1919;
    border-radius: 10px;
    color: #dadada;
    outline: 3px solid #1a1919;
    overflow-y: auto;
  }

  #debug-pane > * {
    background-color: #2c2c2c;
    padding: 5px;
  }

  #debug-pane > h3 {
    margin: 0;
  }

  #debug-pane > h4 {
    margin: 0;
    text-align: right;
    white-space: nowrap;
  }

  .chip-container {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  .chip {
    font-weight: bold;
    padding: 4px;
    border-radius: 5px;
    background: #5e5e5e;
    paint-order: stroke fill;
    text-shadow: 1px 0 0 black, 0 1px 0 black, -1px 0 0 black, 0 -1px 0 black;
    box-shadow: 0 0 2px black;
  }

  .number-field {
    font-size: large;
    font-weight: bold;
    font-family: monospace;
  }

  .bool-field {
    font-size: large;
    font-weight: bold;
    font-family: monospace;
    background-color: rgba(177, 211, 111, 1);
  }
</style>`;function Xt(){return C`${jt}
    <div id="debug-pane">
      <h3>Debug</h3>
      <div></div>
      <h4>Width</h4>
      <span class="number-field">${g.width}</span>
      <h4>Height</h4>
      <span class="number-field">${g.height}</span>
      <h4>Scale</h4>
      <span>
        <span class="number-field">${g.scale}</span> pixels per pixel
      </span>
      <h4>x pos</h4>
      <span class="number-field">${g.pos.x}</span>
      <h4>y pos</h4>
      <span class="number-field">${g.pos.y}</span>
      <h4>Active Tool</h4>
      <span class="text-field">${g.activeTool}</span>
      <h4>Active Color</h4>
      <span class="number-field">${g.activeColor}</span>
      <h4>Device Pixel Ratio</h4>
      <span>
        <span class="number-field">${devicePixelRatio}</span> device pixel(s)
        per CSS pixel
      </span>
      <h4>Color Palette</h4>
      <div class="chip-container">
        ${Re(g.palette,l=>C`<code class="chip" style="background:${l};">${l}</code>`)}
      </div>
      <h4>Snapshot Length</h4>
      <span class="number-field">${g.snapshots.length}</span>
      <h4>Held Keys</h4>
      <div class="chip-container">
        ${g.heldKeys.size>0?Re(g.heldKeys,l=>C`<span class="chip">${l}</span>`):C`<span class="chip">none</span>`}
      </div>
      <h4>Grid</h4>
      <div class="chip-container">
        <span
          class="chip"
          style="background:${g.grid?"rgb(79 161 50)":"rgb(194 55 68)"};"
          >${g.grid}</span
        >
      </div>
      <h4>Editing Palette</h4>
      <div class="chip-container">
        <span
          class="chip"
          style="background:${g.paletteEdit?"rgb(79 161 50)":"rgb(194 55 68)"};"
          >${g.paletteEdit}</span
        >
      </div>
      <h4>Show Settings</h4>
      <div class="chip-container">
        <span
          class="chip"
          style="background:${g.showSettingsModal?"rgb(79 161 50)":"rgb(194 55 68)"};"
          >${g.showSettingsModal}</span
        >
      </div>
      <h4>Show download</h4>
      <div class="chip-container">
        <span
          class="chip"
          style="background:${g.showDownloadModal?"rgb(79 161 50)":"rgb(194 55 68)"};"
          >${g.showDownloadModal}</span
        >
      </div>
      <h4>Show debug</h4>
      <div class="chip-container">
        <span
          class="chip"
          style="background:${g.debug?"rgb(79 161 50)":"rgb(194 55 68)"};"
          >${g.debug}</span
        >
      </div>
    </div>`}let re;const ue={brush:dt,flood:ct,line:ut,rect:ht,shift:pt,eyedropper:ft},Te={flood:"fa-fill-drip fa-flip-horizontal",brush:"fa-paintbrush",rect:"fa-vector-square",line:"fa-minus",shift:"fa-up-down-left-right",eyedropper:"fa-eyedropper"};function $(l){const i=Object.keys(l);lt(l),re.syncState(g,i)}window.addEventListener("mousedown",l=>{const i=document.getElementById("settings"),a=document.getElementById("download");i.contains(l.target)||$({showSettingsModal:!1}),a.contains(l.target)||$({showDownloadModal:!1})});function Fe(){return C`<div id="taskbar">
      <span style="font-weight: 700; font-size: 20px; padding-left:5px;">
        pixel art
      </span>
      <div id="taskbar-buttons">
        <button
          class="taskbar-btn"
          @click=${()=>{$({bitmap:M.empty(g.width,g.height,0)})}}>
          <i class="fa-solid fa-file"></i>
        </button>
        <button
          class="taskbar-btn"
          @click=${()=>{Ge(),re.syncState(g)}}>
          <i class="fa-solid fa-arrow-rotate-left"></i>
        </button>

        ${Dt({dispatch:$})} ${Lt({dispatch:$})}
      </div>
    </div>

    <div id="site">
      <div id="tool-container">
        ${Object.keys(ue).map(l=>C`<button
              class="icon-btn ${g.activeTool==l?"active":""}"
              @click=${()=>$({activeTool:l})}>
              <i class="fa-solid ${Te[l]}"></i>
            </button>`)}
      </div>

      <div id="editor-container">
        <div id="pointer">
          <i class="fa-solid ${Te[g.activeTool]}"></i>
        </div>

        <div id="canvas-container">
          <canvas id="art"></canvas>
          <canvas id="grid"></canvas>
          <canvas id="outline"></canvas>
        </div>
      </div>

      <div id="color-palette">${Ot({dispatch:$})}</div>

      ${pe(g.debug,Xt)}
    </div>`}function fe(){const l=document.getElementById("editor-container").getBoundingClientRect(),i=l.width*devicePixelRatio,a=l.height*devicePixelRatio;return Math.min(Math.floor(i/g.width),Math.floor(a/g.height))}function De(l){let{width:i,height:a}=l;return{syncState(e){(i!=e.width||a!=e.height)&&({width:i,height:a}=e,$({scale:fe()}))}}}window.onload=()=>{Ne(Fe(),document.body);let l=document.getElementById("grid"),i=document.getElementById("outline"),a=document.getElementById("art");const e=document.getElementById("canvas-container"),t=document.getElementById("pointer");g.scale=fe(),Ut()?re=new Ae({state:g,dispatch:$,components:[Pe({canvas:a}),Be({canvas:l}),$e({canvas:i}),Pt({target:i}),St({tools:ue,target:i}),De]}):(e.addEventListener("pointermove",r=>{t.style.transform=`translate(${r.pageX}px, ${r.pageY}px)`}),e.addEventListener("pointerleave",r=>{t.style.display="none"}),e.addEventListener("pointerenter",r=>{t.style.display="block"}),re=new Ae({state:g,dispatch:$,components:[Pe({canvas:a}),Be({canvas:l}),$e({canvas:i}),kt({target:i}),xt({tools:ue,target:i}),De]}),yt($)),Oe()};const Oe=()=>{Ne(Fe(),document.body),window.requestAnimationFrame(Oe)};function Ut(){let l=!1;return function(i){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(i)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(i.substr(0,4)))&&(l=!0)}(navigator.userAgent||navigator.vendor||window.opera),l}window.addEventListener("resize",l=>{$({scale:fe(),bitmap:new M(g.width,g.height,g.bitmap.pixels)})});
