/*! For license information please see pagenav-bundle.js.LICENSE.txt */
(()=>{var t={8108(t){var e;self,e=()=>(()=>{"use strict";var t={d:(e,i)=>{for(var r in i)t.o(i,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:i[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{PageNav:()=>Br});var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},i(t,e)};function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var o=function(){return o=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},o.apply(this,arguments)};function n(t,e,i,r){var o,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,i,s):o(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s}function s(t,e,i){if(i||2===arguments.length)for(var r,o=0,n=e.length;o<n;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;const a=globalThis,l=a.ShadowRoot&&(void 0===a.ShadyCSS||a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,h=Symbol(),c=new WeakMap;class d{constructor(t,e,i){if(this._$cssResult$=!0,i!==h)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(l&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=c.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&c.set(e,t))}return t}toString(){return this.cssText}}const u=t=>new d("string"==typeof t?t:t+"",void 0,h),p=(t,e)=>{if(l)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),r=a.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=i.cssText,t.appendChild(e)}},g=l?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return u(e)})(t):t,{is:v,defineProperty:m,getOwnPropertyDescriptor:f,getOwnPropertyNames:_,getOwnPropertySymbols:b,getPrototypeOf:$}=Object,y=globalThis,w=y.trustedTypes,E=w?w.emptyScript:"",A=y.reactiveElementPolyfillSupport,S=(t,e)=>t,C={toAttribute(t,e){switch(e){case Boolean:t=t?E:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},B=(t,e)=>!v(t,e),P={attribute:!0,type:String,converter:C,reflect:!1,hasChanged:B};Symbol.metadata??=Symbol("metadata"),y.litPropertyMetadata??=new WeakMap;class T extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=P){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&m(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:o}=f(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return r?.call(this)},set(e){const n=r?.call(this);o.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??P}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;const t=$(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){const t=this.properties,e=[..._(t),...b(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(g(t))}else void 0!==t&&e.push(g(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return p(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:C).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:C;this._$Em=r,this[r]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??B)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(t=>this._$EC(t,this[t])),this._$EU()}updated(t){}firstUpdated(t){}}T.elementStyles=[],T.shadowRootOptions={mode:"open"},T[S("elementProperties")]=new Map,T[S("finalized")]=new Map,A?.({ReactiveElement:T}),(y.reactiveElementVersions??=[]).push("2.0.4");const H=globalThis,x=H.trustedTypes,L=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",O=`lit$${(Math.random()+"").slice(9)}$`,M="?"+O,I=`<${M}>`,N=document,R=()=>N.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,z="[ \t\n\f\r]",G=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Z=/-->/g,j=/>/g,F=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,W=/"/g,X=/^(?:script|style|textarea|title)$/i,K=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),q=K(1),Y=(K(2),Symbol.for("lit-noChange")),J=Symbol.for("lit-nothing"),Q=new WeakMap,tt=N.createTreeWalker(N,129);function et(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==L?L.createHTML(e):e}const it=(t,e)=>{const i=t.length-1,r=[];let o,n=2===e?"<svg>":"",s=G;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(s.lastIndex=c,l=s.exec(i),null!==l);)c=s.lastIndex,s===G?"!--"===l[1]?s=Z:void 0!==l[1]?s=j:void 0!==l[2]?(X.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=F):void 0!==l[3]&&(s=F):s===F?">"===l[0]?(s=o??G,h=-1):void 0===l[1]?h=-2:(h=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?F:'"'===l[3]?W:V):s===W||s===V?s=F:s===Z||s===j?s=G:(s=F,o=void 0);const d=s===F&&t[e+1].startsWith("/>")?" ":"";n+=s===G?i+I:h>=0?(r.push(a),i.slice(0,h)+k+i.slice(h)+O+d):i+O+(-2===h?e:d)}return[et(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),r]};class rt{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let o=0,n=0;const s=t.length-1,a=this.parts,[l,h]=it(t,e);if(this.el=rt.createElement(l,i),tt.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=tt.nextNode())&&a.length<s;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(k)){const e=h[n++],i=r.getAttribute(t).split(O),s=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:s[2],strings:i,ctor:"."===s[1]?lt:"?"===s[1]?ht:"@"===s[1]?ct:at}),r.removeAttribute(t)}else t.startsWith(O)&&(a.push({type:6,index:o}),r.removeAttribute(t));if(X.test(r.tagName)){const t=r.textContent.split(O),e=t.length-1;if(e>0){r.textContent=x?x.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],R()),tt.nextNode(),a.push({type:2,index:++o});r.append(t[e],R())}}}else if(8===r.nodeType)if(r.data===M)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=r.data.indexOf(O,t+1));)a.push({type:7,index:o}),t+=O.length-1}o++}}static createElement(t,e){const i=N.createElement("template");return i.innerHTML=t,i}}function ot(t,e,i=t,r){if(e===Y)return e;let o=void 0!==r?i._$Co?.[r]:i._$Cl;const n=U(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=o:i._$Cl=o),void 0!==o&&(e=ot(t,o._$AS(t,e.values),o,r)),e}class nt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??N).importNode(e,!0);tt.currentNode=r;let o=tt.nextNode(),n=0,s=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new st(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new dt(o,this,t)),this._$AV.push(e),a=i[++s]}n!==a?.index&&(o=tt.nextNode(),n++)}return tt.currentNode=N,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class st{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ot(this,t,e),U(t)?t===J||null==t||""===t?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==Y&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>D(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==J&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=rt.createElement(et(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new nt(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Q.get(t.strings);return void 0===e&&Q.set(t.strings,e=new rt(t)),e}k(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const o of t)r===e.length?e.push(i=new st(this.S(R()),this.S(R()),this,this.options)):i=e[r],i._$AI(o),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class at{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,o){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=J}_$AI(t,e=this,i,r){const o=this.strings;let n=!1;if(void 0===o)t=ot(this,t,e,0),n=!U(t)||t!==this._$AH&&t!==Y,n&&(this._$AH=t);else{const r=t;let s,a;for(t=o[0],s=0;s<o.length-1;s++)a=ot(this,r[i+s],e,s),a===Y&&(a=this._$AH[s]),n||=!U(a)||a!==this._$AH[s],a===J?t=J:t!==J&&(t+=(a??"")+o[s+1]),this._$AH[s]=a}n&&!r&&this.j(t)}j(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class lt extends at{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===J?void 0:t}}class ht extends at{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==J)}}class ct extends at{constructor(t,e,i,r,o){super(t,e,i,r,o),this.type=5}_$AI(t,e=this){if((t=ot(this,t,e,0)??J)===Y)return;const i=this._$AH,r=t===J&&i!==J||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==J&&(i===J||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class dt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ot(this,t)}}const ut=H.litHtmlPolyfillSupport;ut?.(rt,st),(H.litHtmlVersions??=[]).push("3.1.2");class pt extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const r=i?.renderBefore??e;let o=r._$litPart$;if(void 0===o){const t=i?.renderBefore??null;r._$litPart$=o=new st(e.insertBefore(R(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Y}}pt._$litElement$=!0,pt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:pt});const gt=globalThis.litElementPolyfillSupport;gt?.({LitElement:pt}),(globalThis.litElementVersions??=[]).push("4.0.4");const vt={attribute:!0,type:String,converter:C,reflect:!1,hasChanged:B},mt=(t=vt,e,i)=>{const{kind:r,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(i.name,t),"accessor"===r){const{name:r}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,o,t)},init(e){return void 0!==e&&this.P(r,void 0,t),e}}}if("setter"===r){const{name:r}=i;return function(i){const o=this[r];e.call(this,i),this.requestUpdate(r,o,t)}}throw Error("Unsupported decorator location: "+r)};function ft(t){return(e,i)=>"object"==typeof i?mt(t,e,i):((t,e,i)=>{const r=e.hasOwnProperty(i);return e.constructor.createProperty(i,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function _t(t){return ft({...t,state:!0,attribute:!1})}class bt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}class $t extends bt{constructor(t){if(super(t),this.it=J,2!==t.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===J||null==t)return this._t=void 0,this.it=t;if(t===Y)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}$t.directiveName="unsafeHTML",$t.resultType=1;const yt=(t=>(...e)=>({_$litDirective$:t,values:e}))($t),wt=((t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new d(i,t,h)})`
  /* Theme color palettes */
  .light-theme {
    --primary-color: white;
    --contrast-color: black;
    --partial-contrast-color: lightgray;
    --accent-color: #0736c3;
    --accent-compliment-color: #011a64;
    --ds-action-trigger-color: black;
  }
  .dark-theme {
    --primary-color: #0a0520;
    --contrast-color: white;
    --partial-contrast-color: lightgray;
    --accent-color: #3dcbff;
    --accent-compliment-color: #c2efff;
    --ds-action-trigger-color: white;
  }

  :host {
    font-family: 'Segoe UI', SegoeUI, 'Helvetica Neue', Helvetica, Arial,
      sans-serif;
    font-weight: 600;
  }
  nav {
    position: relative;
    top: 0;
    z-index: var(--ds-page-nav-z-index, ${u("100")});

    background-color: var(--background-color);
    color: var(--text-color);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    box-sizing: border-box;
    padding: 0 5%;

    border-bottom: 1px solid var(--h-sep-color);

    /* Theme color variables */
    --background-color: var(--primary-color);
    --text-color: var(--contrast-color);

    --link-color: var(--accent-color);
    --link-hover-color: var(--accent-compliment-color);
    --underline-color: var(--link-color);

    --button-color: var(--accent-color);
    --button-hover-color: var(--accent-compliment-color);

    --button-text-color: var(--primary-color);
    --button-text-hover-color: var(--primary-color);
    --h-sep-color: var(--partial-contrast-color);
  }
  nav.sticky {
    position: fixed;
    width: 100%;
  }
  nav.bottom-position {
    position: fixed;
    top: auto;
    bottom: 0;
    width: 100%;
    border-bottom: none;
    border-top: 1px solid var(--h-sep-color);
  }
  nav.bottom-position.sticky {
    position: fixed;
    bottom: 0;
    top: auto;
    width: 100%;
    border-bottom: none;
    border-top: 1px solid var(--h-sep-color);
  }

  .hidden {
    display: none !important;
  }

  h2 {
    font-size: 1rem;
    font-weight: inherit;
    margin: 0;
  }
  ul.left-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
  }
  ul.left-container > li {
    flex: 1 0 auto;
    list-style: none;
    position: relative;
  }
  .nav-item {
    color: var(--text-color);
  }
  .active-underline.active,
  .active-underline:focus-within,
  .active-underline:hover {
    color: var(--ds-page-nav-active-text-background-color, var(--link-color));
  }
  .active-underline::before {
    content: '';
    display: none;
    position: absolute;
    bottom: 0;
    width: 67.5%;
    height: 0.25rem;
    padding: 0 1.125rem;
    left: 16.5%;
    border-bottom: 0.25rem solid var(--background-color);
    background-clip: content-box;
    box-sizing: border-box;
  }
  .active-underline.active::before,
  .active-underline:focus-within::before,
  .active-underline:hover::before {
    display: block;
    border-bottom: 0.25rem solid
      var(
        --ds-page-nav-active-underline-background-color,
        var(--underline-color)
      );
  }
  @media (forced-colors: active) {
    .active-underline.active::before,
    .active-underline:focus-within::before,
    .active-underline:hover::before {
      border-bottom-color: activetext;
    }
    .active-highlight:hover,
    .active-highlight.active {
      forced-color-adjust: none;
    }
  }

  ul a,
  h2,
  ul button {
    color: inherit;
    display: inline-block;
    padding: 1.125rem;
    box-sizing: border-box;
  }
  ul a,
  ul a:hover {
    text-decoration: none;
    width: 100%;
  }
  a:hover {
    cursor: pointer;
  }
  ul a {
    outline-offset: -2px; /* Applied a negative offset to make the outline visible properly inside the element */
  }

  .narrow.active-underline.active::before,
  .narrow.active-underline:focus-within::before,
  .narrow.active-underline:hover::before {
    padding-left: 0;
  }
  .narrow button {
    padding-left: 0;
  }

  .right-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
  }
  .price {
    padding: 0.375rem 1.125rem;
    margin: 0.75rem 0;
  }
  .original-price {
    text-decoration: line-through;
    font-weight: normal;
  }

  .overflow-item button {
    display: flex;
    align-items: center;

    border: none;
    background-color: inherit;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
    font-family: inherit;
    box-sizing: content-box;
    text-align: left;
  }
  .overflow-item button:hover {
    cursor: inherit;
  }
  .overflow-item:hover {
    cursor: pointer;
  }
  .overflow-item moray-icon {
    margin-inline-start: 1rem;
  }

  .dropdown-menu {
    position: absolute;
    background-color: var(--background-color);
    top: 100%;
    padding: 0;
    left: 0;
    width: max-content;
    box-shadow: 1px 1px 5px var(--partial-contrast-color);
    border: 1px solid var(--partial-contrast-color);
    overflow-y: scroll;
    max-height: calc(-3.7rem + 100vh);
  }
  nav.bottom-position .dropdown-menu {
    top: auto;
    bottom: 100%;
    max-height: calc(100vh - 3.7rem);
  }
  .dropdown-menu.wide {
    width: 99%;
  }
  .dropdown-menu ul {
    padding: 0;
    margin: 0;
    display: grid;
  }
  .dropdown-menu li {
    list-style: none;
    border-top: 1px solid var(--h-sep-color);
  }
  .active-highlight:hover,
  .active-highlight.active {
    background-color: var(
      --ds-page-nav-active-highlight-background-color,
      var(--link-color)
    );
    color: var(--ds-page-nav-active-highlight-color, var(--background-color));
  }
  .tab-list-item {
    outline: none;
  }
  @media (max-width: 1083px) {
    .dropdown-item {
      padding-left: 1.125rem;
    }
    ul a {
      width: calc(
        100% - 1.125rem
      ); /* Subtracting padding-left from the width so that content is visible properly */
    }
    .actions-slot {
      display: none;
    }
  }

  @media (max-width: 375px) {
    ul.left-container,
    .right-container {
      max-width: 46%;
    }
    .overflow-item button {
      padding-right: 0;
    }
  }

  @media (forced-colors: active) {
    div.nav-item *,
    div.dropdown-item * {
      color: CanvasText;
    }
    .active-underline.active::before,
    .active-underline:focus-within::before,
    .active-underline:hover::before {
      border-bottom-color: CanvasText;
    }
    .active-highlight:hover,
    .active-highlight.active {
      background-color: CanvasText;
    }
    .active-highlight:hover a,
    .active-highlight.active a {
      color: Canvas;
    }
  }
`,Et=Object.freeze({LOG_LEVEL_INFO:"INFO",LOG_LEVEL_ERROR:"ERROR",LOG_LEVEL_WARN:"WARN"}),At=new class{log(t){console.log(`LOG: ${t}`)}info(t){console.info(`${Et.LOG_LEVEL_INFO}: ${t}`)}warn(t){console.warn(`${Et.LOG_LEVEL_WARN}: ${t}`)}error(t){console.error(`${Et.LOG_LEVEL_ERROR}: ${t}`)}};async function St(t,e){const[i]=t;if(!i)return null;const r=await async function(t,e){try{const i=await fetch(t,e);if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);return await i.json()}catch(t){throw At.error(`There was an error: ${t}`),t}}(i,e);if(!r)throw new Error("Error parsing store product JSON");return r}function Ct(t){if(!t)throw new Error("Product not found");return t.productInfo.title}const Bt=Symbol();class Pt{get taskComplete(){return this.t||(1===this.status?this.t=new Promise((t,e)=>{this.i=t,this.o=e}):3===this.status?this.t=Promise.reject(this.h):this.t=Promise.resolve(this.l)),this.t}constructor(t,e,i){this.u=0,this.status=0,(this.p=t).addController(this);const r="object"==typeof e?e:{task:e,args:i};this._=r.task,this.v=r.args,this.j=r.argsEqual??Tt,this.m=r.onComplete,this.g=r.onError,this.autoRun=r.autoRun??!0,"initialValue"in r&&(this.l=r.initialValue,this.status=2,this.k=this.A?.())}hostUpdate(){!0===this.autoRun&&this.O()}hostUpdated(){"afterUpdate"===this.autoRun&&this.O()}A(){if(void 0===this.v)return;const t=this.v();if(!Array.isArray(t))throw Error("The args function must return an array");return t}async O(){const t=this.A(),e=this.k;this.k=t,t===e||void 0===t||void 0!==e&&this.j(e,t)||await this.run(t)}async run(t){let e,i;t??=this.A(),this.k=t,1===this.status?this.T?.abort():(this.t=void 0,this.i=void 0,this.o=void 0),this.status=1,"afterUpdate"===this.autoRun?queueMicrotask(()=>this.p.requestUpdate()):this.p.requestUpdate();const r=++this.u;this.T=new AbortController;let o=!1;try{e=await this._(t,{signal:this.T.signal})}catch(t){o=!0,i=t}if(this.u===r){if(e===Bt)this.status=0;else{if(!1===o){try{this.m?.(e)}catch{}this.status=2,this.i?.(e)}else{try{this.g?.(i)}catch{}this.status=3,this.o?.(i)}this.l=e,this.h=i}this.p.requestUpdate()}}abort(t){1===this.status&&this.T?.abort(t)}get value(){return this.l}get error(){return this.h}render(t){switch(this.status){case 0:return t.initial?.();case 1:return t.pending?.();case 2:return t.complete?.(this.value);case 3:return t.error?.(this.error);default:throw Error("Unexpected status: "+this.status)}}}const Tt=(t,e)=>t===e||t.length===e.length&&t.every((t,i)=>!B(t,e[i]));var Ht,xt,Lt;function kt(t){return t.type===xt.literal}function Ot(t){return t.type===xt.argument}function Mt(t){return t.type===xt.number}function It(t){return t.type===xt.date}function Nt(t){return t.type===xt.time}function Rt(t){return t.type===xt.select}function Ut(t){return t.type===xt.plural}function Dt(t){return t.type===xt.pound}function zt(t){return t.type===xt.tag}function Gt(t){return!(!t||"object"!=typeof t||t.type!==Lt.number)}function Zt(t){return!(!t||"object"!=typeof t||t.type!==Lt.dateTime)}!function(t){t[t.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",t[t.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",t[t.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",t[t.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",t[t.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",t[t.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",t[t.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",t[t.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",t[t.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",t[t.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",t[t.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",t[t.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",t[t.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",t[t.INVALID_TAG=23]="INVALID_TAG",t[t.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",t[t.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",t[t.UNCLOSED_TAG=27]="UNCLOSED_TAG"}(Ht||(Ht={})),function(t){t[t.literal=0]="literal",t[t.argument=1]="argument",t[t.number=2]="number",t[t.date=3]="date",t[t.time=4]="time",t[t.select=5]="select",t[t.plural=6]="plural",t[t.pound=7]="pound",t[t.tag=8]="tag"}(xt||(xt={})),function(t){t[t.number=0]="number",t[t.dateTime=1]="dateTime"}(Lt||(Lt={}));var jt=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,Ft=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function Vt(t){var e={};return t.replace(Ft,function(t){var i=t.length;switch(t[0]){case"G":e.era=4===i?"long":5===i?"narrow":"short";break;case"y":e.year=2===i?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":e.month=["numeric","2-digit","short","long","narrow"][i-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":e.day=["numeric","2-digit"][i-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":e.weekday=4===i?"long":5===i?"narrow":"short";break;case"e":if(i<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");e.weekday=["short","long","narrow","short"][i-4];break;case"c":if(i<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");e.weekday=["short","long","narrow","short"][i-4];break;case"a":e.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":e.hourCycle="h12",e.hour=["numeric","2-digit"][i-1];break;case"H":e.hourCycle="h23",e.hour=["numeric","2-digit"][i-1];break;case"K":e.hourCycle="h11",e.hour=["numeric","2-digit"][i-1];break;case"k":e.hourCycle="h24",e.hour=["numeric","2-digit"][i-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":e.minute=["numeric","2-digit"][i-1];break;case"s":e.second=["numeric","2-digit"][i-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":e.timeZoneName=i<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),e}var Wt=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function Xt(t){return t.replace(/^(.*?)-/,"")}var Kt=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,qt=/^(@+)?(\+|#+)?[rs]?$/g,Yt=/(\*)(0+)|(#+)(0+)|(0+)/g,Jt=/^(0+)$/;function Qt(t){var e={};return"r"===t[t.length-1]?e.roundingPriority="morePrecision":"s"===t[t.length-1]&&(e.roundingPriority="lessPrecision"),t.replace(qt,function(t,i,r){return"string"!=typeof r?(e.minimumSignificantDigits=i.length,e.maximumSignificantDigits=i.length):"+"===r?e.minimumSignificantDigits=i.length:"#"===i[0]?e.maximumSignificantDigits=i.length:(e.minimumSignificantDigits=i.length,e.maximumSignificantDigits=i.length+("string"==typeof r?r.length:0)),""}),e}function te(t){switch(t){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function ee(t){var e;if("E"===t[0]&&"E"===t[1]?(e={notation:"engineering"},t=t.slice(2)):"E"===t[0]&&(e={notation:"scientific"},t=t.slice(1)),e){var i=t.slice(0,2);if("+!"===i?(e.signDisplay="always",t=t.slice(2)):"+?"===i&&(e.signDisplay="exceptZero",t=t.slice(2)),!Jt.test(t))throw new Error("Malformed concise eng/scientific notation");e.minimumIntegerDigits=t.length}return e}function ie(t){return te(t)||{}}function re(t){for(var e={},i=0,r=t;i<r.length;i++){var n=r[i];switch(n.stem){case"percent":case"%":e.style="percent";continue;case"%x100":e.style="percent",e.scale=100;continue;case"currency":e.style="currency",e.currency=n.options[0];continue;case"group-off":case",_":e.useGrouping=!1;continue;case"precision-integer":case".":e.maximumFractionDigits=0;continue;case"measure-unit":case"unit":e.style="unit",e.unit=Xt(n.options[0]);continue;case"compact-short":case"K":e.notation="compact",e.compactDisplay="short";continue;case"compact-long":case"KK":e.notation="compact",e.compactDisplay="long";continue;case"scientific":e=o(o(o({},e),{notation:"scientific"}),n.options.reduce(function(t,e){return o(o({},t),ie(e))},{}));continue;case"engineering":e=o(o(o({},e),{notation:"engineering"}),n.options.reduce(function(t,e){return o(o({},t),ie(e))},{}));continue;case"notation-simple":e.notation="standard";continue;case"unit-width-narrow":e.currencyDisplay="narrowSymbol",e.unitDisplay="narrow";continue;case"unit-width-short":e.currencyDisplay="code",e.unitDisplay="short";continue;case"unit-width-full-name":e.currencyDisplay="name",e.unitDisplay="long";continue;case"unit-width-iso-code":e.currencyDisplay="symbol";continue;case"scale":e.scale=parseFloat(n.options[0]);continue;case"rounding-mode-floor":e.roundingMode="floor";continue;case"rounding-mode-ceiling":e.roundingMode="ceil";continue;case"rounding-mode-down":e.roundingMode="trunc";continue;case"rounding-mode-up":e.roundingMode="expand";continue;case"rounding-mode-half-even":e.roundingMode="halfEven";continue;case"rounding-mode-half-down":e.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":e.roundingMode="halfExpand";continue;case"integer-width":if(n.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");n.options[0].replace(Yt,function(t,i,r,o,n,s){if(i)e.minimumIntegerDigits=r.length;else{if(o&&n)throw new Error("We currently do not support maximum integer digits");if(s)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Jt.test(n.stem))e.minimumIntegerDigits=n.stem.length;else if(Kt.test(n.stem)){if(n.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");n.stem.replace(Kt,function(t,i,r,o,n,s){return"*"===r?e.minimumFractionDigits=i.length:o&&"#"===o[0]?e.maximumFractionDigits=o.length:n&&s?(e.minimumFractionDigits=n.length,e.maximumFractionDigits=n.length+s.length):(e.minimumFractionDigits=i.length,e.maximumFractionDigits=i.length),""});var s=n.options[0];"w"===s?e=o(o({},e),{trailingZeroDisplay:"stripIfInteger"}):s&&(e=o(o({},e),Qt(s)))}else if(qt.test(n.stem))e=o(o({},e),Qt(n.stem));else{var a=te(n.stem);a&&(e=o(o({},e),a));var l=ee(n.stem);l&&(e=o(o({},e),l))}}return e}var oe,ne={"001":["H","h"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["H","h","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["H","hB","h","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["H","h","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["H","hB","h","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["H","h","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["H","h","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["H","h","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["H","h","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["H","hB","h","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["H","h","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["H","h","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["H","h","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function se(t){var e=t.hourCycle;if(void 0===e&&t.hourCycles&&t.hourCycles.length&&(e=t.hourCycles[0]),e)switch(e){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var i,r=t.language;return"root"!==r&&(i=t.maximize().region),(ne[i||""]||ne[r||""]||ne["".concat(r,"-001")]||ne["001"])[0]}var ae=new RegExp("^".concat(jt.source,"*")),le=new RegExp("".concat(jt.source,"*$"));function he(t,e){return{start:t,end:e}}var ce=!!String.prototype.startsWith&&"_a".startsWith("a",1),de=!!String.fromCodePoint,ue=!!Object.fromEntries,pe=!!String.prototype.codePointAt,ge=!!String.prototype.trimStart,ve=!!String.prototype.trimEnd,me=Number.isSafeInteger?Number.isSafeInteger:function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t&&Math.abs(t)<=9007199254740991},fe=!0;try{fe="a"===(null===(oe=Se("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu").exec("a"))||void 0===oe?void 0:oe[0])}catch(j){fe=!1}var _e,be=ce?function(t,e,i){return t.startsWith(e,i)}:function(t,e,i){return t.slice(i,i+e.length)===e},$e=de?String.fromCodePoint:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var i,r="",o=t.length,n=0;o>n;){if((i=t[n++])>1114111)throw RangeError(i+" is not a valid code point");r+=i<65536?String.fromCharCode(i):String.fromCharCode(55296+((i-=65536)>>10),i%1024+56320)}return r},ye=ue?Object.fromEntries:function(t){for(var e={},i=0,r=t;i<r.length;i++){var o=r[i],n=o[0],s=o[1];e[n]=s}return e},we=pe?function(t,e){return t.codePointAt(e)}:function(t,e){var i=t.length;if(!(e<0||e>=i)){var r,o=t.charCodeAt(e);return o<55296||o>56319||e+1===i||(r=t.charCodeAt(e+1))<56320||r>57343?o:r-56320+(o-55296<<10)+65536}},Ee=ge?function(t){return t.trimStart()}:function(t){return t.replace(ae,"")},Ae=ve?function(t){return t.trimEnd()}:function(t){return t.replace(le,"")};function Se(t,e){return new RegExp(t,e)}if(fe){var Ce=Se("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");_e=function(t,e){var i;return Ce.lastIndex=e,null!==(i=Ce.exec(t)[1])&&void 0!==i?i:""}}else _e=function(t,e){for(var i=[];;){var r=we(t,e);if(void 0===r||He(r)||xe(r))break;i.push(r),e+=r>=65536?2:1}return $e.apply(void 0,i)};var Be=function(){function t(t,e){void 0===e&&(e={}),this.message=t,this.position={offset:0,line:1,column:1},this.ignoreTag=!!e.ignoreTag,this.locale=e.locale,this.requiresOtherClause=!!e.requiresOtherClause,this.shouldParseSkeletons=!!e.shouldParseSkeletons}return t.prototype.parse=function(){if(0!==this.offset())throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},t.prototype.parseMessage=function(t,e,i){for(var r=[];!this.isEOF();){var o=this.char();if(123===o){if((n=this.parseArgument(t,i)).err)return n;r.push(n.val)}else{if(125===o&&t>0)break;if(35!==o||"plural"!==e&&"selectordinal"!==e){if(60===o&&!this.ignoreTag&&47===this.peek()){if(i)break;return this.error(Ht.UNMATCHED_CLOSING_TAG,he(this.clonePosition(),this.clonePosition()))}if(60===o&&!this.ignoreTag&&Pe(this.peek()||0)){if((n=this.parseTag(t,e)).err)return n;r.push(n.val)}else{var n;if((n=this.parseLiteral(t,e)).err)return n;r.push(n.val)}}else{var s=this.clonePosition();this.bump(),r.push({type:xt.pound,location:he(s,this.clonePosition())})}}}return{val:r,err:null}},t.prototype.parseTag=function(t,e){var i=this.clonePosition();this.bump();var r=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:xt.literal,value:"<".concat(r,"/>"),location:he(i,this.clonePosition())},err:null};if(this.bumpIf(">")){var o=this.parseMessage(t+1,e,!0);if(o.err)return o;var n=o.val,s=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Pe(this.char()))return this.error(Ht.INVALID_TAG,he(s,this.clonePosition()));var a=this.clonePosition();return r!==this.parseTagName()?this.error(Ht.UNMATCHED_CLOSING_TAG,he(a,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:xt.tag,value:r,children:n,location:he(i,this.clonePosition())},err:null}:this.error(Ht.INVALID_TAG,he(s,this.clonePosition())))}return this.error(Ht.UNCLOSED_TAG,he(i,this.clonePosition()))}return this.error(Ht.INVALID_TAG,he(i,this.clonePosition()))},t.prototype.parseTagName=function(){var t=this.offset();for(this.bump();!this.isEOF()&&Te(this.char());)this.bump();return this.message.slice(t,this.offset())},t.prototype.parseLiteral=function(t,e){for(var i=this.clonePosition(),r="";;){var o=this.tryParseQuote(e);if(o)r+=o;else{var n=this.tryParseUnquoted(t,e);if(n)r+=n;else{var s=this.tryParseLeftAngleBracket();if(!s)break;r+=s}}}var a=he(i,this.clonePosition());return{val:{type:xt.literal,value:r,location:a},err:null}},t.prototype.tryParseLeftAngleBracket=function(){return this.isEOF()||60!==this.char()||!this.ignoreTag&&(Pe(t=this.peek()||0)||47===t)?null:(this.bump(),"<");var t},t.prototype.tryParseQuote=function(t){if(this.isEOF()||39!==this.char())return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if("plural"===t||"selectordinal"===t)break;return null;default:return null}this.bump();var e=[this.char()];for(this.bump();!this.isEOF();){var i=this.char();if(39===i){if(39!==this.peek()){this.bump();break}e.push(39),this.bump()}else e.push(i);this.bump()}return $e.apply(void 0,e)},t.prototype.tryParseUnquoted=function(t,e){if(this.isEOF())return null;var i=this.char();return 60===i||123===i||35===i&&("plural"===e||"selectordinal"===e)||125===i&&t>0?null:(this.bump(),$e(i))},t.prototype.parseArgument=function(t,e){var i=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(Ht.EXPECT_ARGUMENT_CLOSING_BRACE,he(i,this.clonePosition()));if(125===this.char())return this.bump(),this.error(Ht.EMPTY_ARGUMENT,he(i,this.clonePosition()));var r=this.parseIdentifierIfPossible().value;if(!r)return this.error(Ht.MALFORMED_ARGUMENT,he(i,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(Ht.EXPECT_ARGUMENT_CLOSING_BRACE,he(i,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:xt.argument,value:r,location:he(i,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(Ht.EXPECT_ARGUMENT_CLOSING_BRACE,he(i,this.clonePosition())):this.parseArgumentOptions(t,e,r,i);default:return this.error(Ht.MALFORMED_ARGUMENT,he(i,this.clonePosition()))}},t.prototype.parseIdentifierIfPossible=function(){var t=this.clonePosition(),e=this.offset(),i=_e(this.message,e),r=e+i.length;return this.bumpTo(r),{value:i,location:he(t,this.clonePosition())}},t.prototype.parseArgumentOptions=function(t,e,i,r){var n,s=this.clonePosition(),a=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(a){case"":return this.error(Ht.EXPECT_ARGUMENT_TYPE,he(s,l));case"number":case"date":case"time":this.bumpSpace();var h=null;if(this.bumpIf(",")){this.bumpSpace();var c=this.clonePosition();if((_=this.parseSimpleArgStyleIfPossible()).err)return _;if(0===(g=Ae(_.val)).length)return this.error(Ht.EXPECT_ARGUMENT_STYLE,he(this.clonePosition(),this.clonePosition()));h={style:g,styleLocation:he(c,this.clonePosition())}}if((b=this.tryParseArgumentClose(r)).err)return b;var d=he(r,this.clonePosition());if(h&&be(null==h?void 0:h.style,"::",0)){var u=Ee(h.style.slice(2));if("number"===a)return(_=this.parseNumberSkeletonFromString(u,h.styleLocation)).err?_:{val:{type:xt.number,value:i,location:d,style:_.val},err:null};if(0===u.length)return this.error(Ht.EXPECT_DATE_TIME_SKELETON,d);var p=u;this.locale&&(p=function(t,e){for(var i="",r=0;r<t.length;r++){var o=t.charAt(r);if("j"===o){for(var n=0;r+1<t.length&&t.charAt(r+1)===o;)n++,r++;var s=1+(1&n),a=n<2?1:3+(n>>1),l=se(e);for("H"!=l&&"k"!=l||(a=0);a-- >0;)i+="a";for(;s-- >0;)i=l+i}else i+="J"===o?"H":o}return i}(u,this.locale));var g={type:Lt.dateTime,pattern:p,location:h.styleLocation,parsedOptions:this.shouldParseSkeletons?Vt(p):{}};return{val:{type:"date"===a?xt.date:xt.time,value:i,location:d,style:g},err:null}}return{val:{type:"number"===a?xt.number:"date"===a?xt.date:xt.time,value:i,location:d,style:null!==(n=null==h?void 0:h.style)&&void 0!==n?n:null},err:null};case"plural":case"selectordinal":case"select":var v=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(Ht.EXPECT_SELECT_ARGUMENT_OPTIONS,he(v,o({},v)));this.bumpSpace();var m=this.parseIdentifierIfPossible(),f=0;if("select"!==a&&"offset"===m.value){if(!this.bumpIf(":"))return this.error(Ht.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,he(this.clonePosition(),this.clonePosition()));var _;if(this.bumpSpace(),(_=this.tryParseDecimalInteger(Ht.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Ht.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err)return _;this.bumpSpace(),m=this.parseIdentifierIfPossible(),f=_.val}var b,$=this.tryParsePluralOrSelectOptions(t,a,e,m);if($.err)return $;if((b=this.tryParseArgumentClose(r)).err)return b;var y=he(r,this.clonePosition());return"select"===a?{val:{type:xt.select,value:i,options:ye($.val),location:y},err:null}:{val:{type:xt.plural,value:i,options:ye($.val),offset:f,pluralType:"plural"===a?"cardinal":"ordinal",location:y},err:null};default:return this.error(Ht.INVALID_ARGUMENT_TYPE,he(s,l))}},t.prototype.tryParseArgumentClose=function(t){return this.isEOF()||125!==this.char()?this.error(Ht.EXPECT_ARGUMENT_CLOSING_BRACE,he(t,this.clonePosition())):(this.bump(),{val:!0,err:null})},t.prototype.parseSimpleArgStyleIfPossible=function(){for(var t=0,e=this.clonePosition();!this.isEOF();)switch(this.char()){case 39:this.bump();var i=this.clonePosition();if(!this.bumpUntil("'"))return this.error(Ht.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,he(i,this.clonePosition()));this.bump();break;case 123:t+=1,this.bump();break;case 125:if(!(t>0))return{val:this.message.slice(e.offset,this.offset()),err:null};t-=1;break;default:this.bump()}return{val:this.message.slice(e.offset,this.offset()),err:null}},t.prototype.parseNumberSkeletonFromString=function(t,e){var i=[];try{i=function(t){if(0===t.length)throw new Error("Number skeleton cannot be empty");for(var e=t.split(Wt).filter(function(t){return t.length>0}),i=[],r=0,o=e;r<o.length;r++){var n=o[r].split("/");if(0===n.length)throw new Error("Invalid number skeleton");for(var s=n[0],a=n.slice(1),l=0,h=a;l<h.length;l++)if(0===h[l].length)throw new Error("Invalid number skeleton");i.push({stem:s,options:a})}return i}(t)}catch(t){return this.error(Ht.INVALID_NUMBER_SKELETON,e)}return{val:{type:Lt.number,tokens:i,location:e,parsedOptions:this.shouldParseSkeletons?re(i):{}},err:null}},t.prototype.tryParsePluralOrSelectOptions=function(t,e,i,r){for(var o,n=!1,s=[],a=new Set,l=r.value,h=r.location;;){if(0===l.length){var c=this.clonePosition();if("select"===e||!this.bumpIf("="))break;var d=this.tryParseDecimalInteger(Ht.EXPECT_PLURAL_ARGUMENT_SELECTOR,Ht.INVALID_PLURAL_ARGUMENT_SELECTOR);if(d.err)return d;h=he(c,this.clonePosition()),l=this.message.slice(c.offset,this.offset())}if(a.has(l))return this.error("select"===e?Ht.DUPLICATE_SELECT_ARGUMENT_SELECTOR:Ht.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,h);"other"===l&&(n=!0),this.bumpSpace();var u=this.clonePosition();if(!this.bumpIf("{"))return this.error("select"===e?Ht.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:Ht.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,he(this.clonePosition(),this.clonePosition()));var p=this.parseMessage(t+1,e,i);if(p.err)return p;var g=this.tryParseArgumentClose(u);if(g.err)return g;s.push([l,{value:p.val,location:he(u,this.clonePosition())}]),a.add(l),this.bumpSpace(),l=(o=this.parseIdentifierIfPossible()).value,h=o.location}return 0===s.length?this.error("select"===e?Ht.EXPECT_SELECT_ARGUMENT_SELECTOR:Ht.EXPECT_PLURAL_ARGUMENT_SELECTOR,he(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!n?this.error(Ht.MISSING_OTHER_CLAUSE,he(this.clonePosition(),this.clonePosition())):{val:s,err:null}},t.prototype.tryParseDecimalInteger=function(t,e){var i=1,r=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(i=-1);for(var o=!1,n=0;!this.isEOF();){var s=this.char();if(!(s>=48&&s<=57))break;o=!0,n=10*n+(s-48),this.bump()}var a=he(r,this.clonePosition());return o?me(n*=i)?{val:n,err:null}:this.error(e,a):this.error(t,a)},t.prototype.offset=function(){return this.position.offset},t.prototype.isEOF=function(){return this.offset()===this.message.length},t.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},t.prototype.char=function(){var t=this.position.offset;if(t>=this.message.length)throw Error("out of bound");var e=we(this.message,t);if(void 0===e)throw Error("Offset ".concat(t," is at invalid UTF-16 code unit boundary"));return e},t.prototype.error=function(t,e){return{val:null,err:{kind:t,message:this.message,location:e}}},t.prototype.bump=function(){if(!this.isEOF()){var t=this.char();10===t?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=t<65536?1:2)}},t.prototype.bumpIf=function(t){if(be(this.message,t,this.offset())){for(var e=0;e<t.length;e++)this.bump();return!0}return!1},t.prototype.bumpUntil=function(t){var e=this.offset(),i=this.message.indexOf(t,e);return i>=0?(this.bumpTo(i),!0):(this.bumpTo(this.message.length),!1)},t.prototype.bumpTo=function(t){if(this.offset()>t)throw Error("targetOffset ".concat(t," must be greater than or equal to the current offset ").concat(this.offset()));for(t=Math.min(t,this.message.length);;){var e=this.offset();if(e===t)break;if(e>t)throw Error("targetOffset ".concat(t," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},t.prototype.bumpSpace=function(){for(;!this.isEOF()&&He(this.char());)this.bump()},t.prototype.peek=function(){if(this.isEOF())return null;var t=this.char(),e=this.offset(),i=this.message.charCodeAt(e+(t>=65536?2:1));return null!=i?i:null},t}();function Pe(t){return t>=97&&t<=122||t>=65&&t<=90}function Te(t){return 45===t||46===t||t>=48&&t<=57||95===t||t>=97&&t<=122||t>=65&&t<=90||183==t||t>=192&&t<=214||t>=216&&t<=246||t>=248&&t<=893||t>=895&&t<=8191||t>=8204&&t<=8205||t>=8255&&t<=8256||t>=8304&&t<=8591||t>=11264&&t<=12271||t>=12289&&t<=55295||t>=63744&&t<=64975||t>=65008&&t<=65533||t>=65536&&t<=983039}function He(t){return t>=9&&t<=13||32===t||133===t||t>=8206&&t<=8207||8232===t||8233===t}function xe(t){return t>=33&&t<=35||36===t||t>=37&&t<=39||40===t||41===t||42===t||43===t||44===t||45===t||t>=46&&t<=47||t>=58&&t<=59||t>=60&&t<=62||t>=63&&t<=64||91===t||92===t||93===t||94===t||96===t||123===t||124===t||125===t||126===t||161===t||t>=162&&t<=165||166===t||167===t||169===t||171===t||172===t||174===t||176===t||177===t||182===t||187===t||191===t||215===t||247===t||t>=8208&&t<=8213||t>=8214&&t<=8215||8216===t||8217===t||8218===t||t>=8219&&t<=8220||8221===t||8222===t||8223===t||t>=8224&&t<=8231||t>=8240&&t<=8248||8249===t||8250===t||t>=8251&&t<=8254||t>=8257&&t<=8259||8260===t||8261===t||8262===t||t>=8263&&t<=8273||8274===t||8275===t||t>=8277&&t<=8286||t>=8592&&t<=8596||t>=8597&&t<=8601||t>=8602&&t<=8603||t>=8604&&t<=8607||8608===t||t>=8609&&t<=8610||8611===t||t>=8612&&t<=8613||8614===t||t>=8615&&t<=8621||8622===t||t>=8623&&t<=8653||t>=8654&&t<=8655||t>=8656&&t<=8657||8658===t||8659===t||8660===t||t>=8661&&t<=8691||t>=8692&&t<=8959||t>=8960&&t<=8967||8968===t||8969===t||8970===t||8971===t||t>=8972&&t<=8991||t>=8992&&t<=8993||t>=8994&&t<=9e3||9001===t||9002===t||t>=9003&&t<=9083||9084===t||t>=9085&&t<=9114||t>=9115&&t<=9139||t>=9140&&t<=9179||t>=9180&&t<=9185||t>=9186&&t<=9254||t>=9255&&t<=9279||t>=9280&&t<=9290||t>=9291&&t<=9311||t>=9472&&t<=9654||9655===t||t>=9656&&t<=9664||9665===t||t>=9666&&t<=9719||t>=9720&&t<=9727||t>=9728&&t<=9838||9839===t||t>=9840&&t<=10087||10088===t||10089===t||10090===t||10091===t||10092===t||10093===t||10094===t||10095===t||10096===t||10097===t||10098===t||10099===t||10100===t||10101===t||t>=10132&&t<=10175||t>=10176&&t<=10180||10181===t||10182===t||t>=10183&&t<=10213||10214===t||10215===t||10216===t||10217===t||10218===t||10219===t||10220===t||10221===t||10222===t||10223===t||t>=10224&&t<=10239||t>=10240&&t<=10495||t>=10496&&t<=10626||10627===t||10628===t||10629===t||10630===t||10631===t||10632===t||10633===t||10634===t||10635===t||10636===t||10637===t||10638===t||10639===t||10640===t||10641===t||10642===t||10643===t||10644===t||10645===t||10646===t||10647===t||10648===t||t>=10649&&t<=10711||10712===t||10713===t||10714===t||10715===t||t>=10716&&t<=10747||10748===t||10749===t||t>=10750&&t<=11007||t>=11008&&t<=11055||t>=11056&&t<=11076||t>=11077&&t<=11078||t>=11079&&t<=11084||t>=11085&&t<=11123||t>=11124&&t<=11125||t>=11126&&t<=11157||11158===t||t>=11159&&t<=11263||t>=11776&&t<=11777||11778===t||11779===t||11780===t||11781===t||t>=11782&&t<=11784||11785===t||11786===t||11787===t||11788===t||11789===t||t>=11790&&t<=11798||11799===t||t>=11800&&t<=11801||11802===t||11803===t||11804===t||11805===t||t>=11806&&t<=11807||11808===t||11809===t||11810===t||11811===t||11812===t||11813===t||11814===t||11815===t||11816===t||11817===t||t>=11818&&t<=11822||11823===t||t>=11824&&t<=11833||t>=11834&&t<=11835||t>=11836&&t<=11839||11840===t||11841===t||11842===t||t>=11843&&t<=11855||t>=11856&&t<=11857||11858===t||t>=11859&&t<=11903||t>=12289&&t<=12291||12296===t||12297===t||12298===t||12299===t||12300===t||12301===t||12302===t||12303===t||12304===t||12305===t||t>=12306&&t<=12307||12308===t||12309===t||12310===t||12311===t||12312===t||12313===t||12314===t||12315===t||12316===t||12317===t||t>=12318&&t<=12319||12320===t||12336===t||64830===t||64831===t||t>=65093&&t<=65094}function Le(t){t.forEach(function(t){if(delete t.location,Rt(t)||Ut(t))for(var e in t.options)delete t.options[e].location,Le(t.options[e].value);else Mt(t)&&Gt(t.style)||(It(t)||Nt(t))&&Zt(t.style)?delete t.style.location:zt(t)&&Le(t.children)})}function ke(t,e){void 0===e&&(e={}),e=o({shouldParseSkeletons:!0,requiresOtherClause:!0},e);var i=new Be(t,e).parse();if(i.err){var r=SyntaxError(Ht[i.err.kind]);throw r.location=i.err.location,r.originalMessage=i.err.message,r}return(null==e?void 0:e.captureLocation)||Le(i.val),i.val}function Oe(t,e){var i=e&&e.cache?e.cache:Ge,r=e&&e.serializer?e.serializer:Ue;return(e&&e.strategy?e.strategy:Re)(t,{cache:i,serializer:r})}function Me(t,e,i,r){var o,n=null==(o=r)||"number"==typeof o||"boolean"==typeof o?r:i(r),s=e.get(n);return void 0===s&&(s=t.call(this,r),e.set(n,s)),s}function Ie(t,e,i){var r=Array.prototype.slice.call(arguments,3),o=i(r),n=e.get(o);return void 0===n&&(n=t.apply(this,r),e.set(o,n)),n}function Ne(t,e,i,r,o){return i.bind(e,t,r,o)}function Re(t,e){return Ne(t,this,1===t.length?Me:Ie,e.cache.create(),e.serializer)}var Ue=function(){return JSON.stringify(arguments)};function De(){this.cache=Object.create(null)}De.prototype.get=function(t){return this.cache[t]},De.prototype.set=function(t,e){this.cache[t]=e};var ze,Ge={create:function(){return new De}},Ze={variadic:function(t,e){return Ne(t,this,Ie,e.cache.create(),e.serializer)},monadic:function(t,e){return Ne(t,this,Me,e.cache.create(),e.serializer)}};!function(t){t.MISSING_VALUE="MISSING_VALUE",t.INVALID_VALUE="INVALID_VALUE",t.MISSING_INTL_API="MISSING_INTL_API"}(ze||(ze={}));var je,Fe=function(t){function e(e,i,r){var o=t.call(this,e)||this;return o.code=i,o.originalMessage=r,o}return r(e,t),e.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},e}(Error),Ve=function(t){function e(e,i,r,o){return t.call(this,'Invalid values for "'.concat(e,'": "').concat(i,'". Options are "').concat(Object.keys(r).join('", "'),'"'),ze.INVALID_VALUE,o)||this}return r(e,t),e}(Fe),We=function(t){function e(e,i,r){return t.call(this,'Value for "'.concat(e,'" must be of type ').concat(i),ze.INVALID_VALUE,r)||this}return r(e,t),e}(Fe),Xe=function(t){function e(e,i){return t.call(this,'The intl string context variable "'.concat(e,'" was not provided to the string "').concat(i,'"'),ze.MISSING_VALUE,i)||this}return r(e,t),e}(Fe);function Ke(t){return"function"==typeof t}function qe(t,e,i,r,o,n,s){if(1===t.length&&kt(t[0]))return[{type:je.literal,value:t[0].value}];for(var a=[],l=0,h=t;l<h.length;l++){var c=h[l];if(kt(c))a.push({type:je.literal,value:c.value});else if(Dt(c))"number"==typeof n&&a.push({type:je.literal,value:i.getNumberFormat(e).format(n)});else{var d=c.value;if(!o||!(d in o))throw new Xe(d,s);var u=o[d];if(Ot(c))u&&"string"!=typeof u&&"number"!=typeof u||(u="string"==typeof u||"number"==typeof u?String(u):""),a.push({type:"string"==typeof u?je.literal:je.object,value:u});else if(It(c)){var p="string"==typeof c.style?r.date[c.style]:Zt(c.style)?c.style.parsedOptions:void 0;a.push({type:je.literal,value:i.getDateTimeFormat(e,p).format(u)})}else if(Nt(c))p="string"==typeof c.style?r.time[c.style]:Zt(c.style)?c.style.parsedOptions:r.time.medium,a.push({type:je.literal,value:i.getDateTimeFormat(e,p).format(u)});else if(Mt(c))(p="string"==typeof c.style?r.number[c.style]:Gt(c.style)?c.style.parsedOptions:void 0)&&p.scale&&(u*=p.scale||1),a.push({type:je.literal,value:i.getNumberFormat(e,p).format(u)});else{if(zt(c)){var g=c.children,v=c.value,m=o[v];if(!Ke(m))throw new We(v,"function",s);var f=m(qe(g,e,i,r,o,n).map(function(t){return t.value}));Array.isArray(f)||(f=[f]),a.push.apply(a,f.map(function(t){return{type:"string"==typeof t?je.literal:je.object,value:t}}))}if(Rt(c)){if(!(_=c.options[u]||c.options.other))throw new Ve(c.value,u,Object.keys(c.options),s);a.push.apply(a,qe(_.value,e,i,r,o))}else if(Ut(c)){var _;if(!(_=c.options["=".concat(u)])){if(!Intl.PluralRules)throw new Fe('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',ze.MISSING_INTL_API,s);var b=i.getPluralRules(e,{type:c.pluralType}).select(u-(c.offset||0));_=c.options[b]||c.options.other}if(!_)throw new Ve(c.value,u,Object.keys(c.options),s);a.push.apply(a,qe(_.value,e,i,r,o,u-(c.offset||0)))}}}}return($=a).length<2?$:$.reduce(function(t,e){var i=t[t.length-1];return i&&i.type===je.literal&&e.type===je.literal?i.value+=e.value:t.push(e),t},[]);var $}function Ye(t){return{create:function(){return{get:function(e){return t[e]},set:function(e,i){t[e]=i}}}}}!function(t){t[t.literal=0]="literal",t[t.object=1]="object"}(je||(je={}));var Je=function(){function t(e,i,r,n){var a,l,h,c=this;if(void 0===i&&(i=t.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(t){var e=c.formatToParts(t);if(1===e.length)return e[0].value;var i=e.reduce(function(t,e){return t.length&&e.type===je.literal&&"string"==typeof t[t.length-1]?t[t.length-1]+=e.value:t.push(e.value),t},[]);return i.length<=1?i[0]||"":i},this.formatToParts=function(t){return qe(c.ast,c.locales,c.formatters,c.formats,t,void 0,c.message)},this.resolvedOptions=function(){var t;return{locale:(null===(t=c.resolvedLocale)||void 0===t?void 0:t.toString())||Intl.NumberFormat.supportedLocalesOf(c.locales)[0]}},this.getAst=function(){return c.ast},this.locales=i,this.resolvedLocale=t.resolveLocale(i),"string"==typeof e){if(this.message=e,!t.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var d=n||{},u=(d.formatters,function(t,e){var i={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(i[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(i[r[o]]=t[r[o]])}return i}(d,["formatters"]));this.ast=t.__parse(e,o(o({},u),{locale:this.resolvedLocale}))}else this.ast=e;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=(l=t.formats,(h=r)?Object.keys(l).reduce(function(t,e){var i,r;return t[e]=(i=l[e],(r=h[e])?o(o(o({},i||{}),r||{}),Object.keys(i).reduce(function(t,e){return t[e]=o(o({},i[e]),r[e]||{}),t},{})):i),t},o({},l)):l),this.formatters=n&&n.formatters||(void 0===(a=this.formatterCache)&&(a={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Oe(function(){for(var t,e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return new((t=Intl.NumberFormat).bind.apply(t,s([void 0],e,!1)))},{cache:Ye(a.number),strategy:Ze.variadic}),getDateTimeFormat:Oe(function(){for(var t,e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return new((t=Intl.DateTimeFormat).bind.apply(t,s([void 0],e,!1)))},{cache:Ye(a.dateTime),strategy:Ze.variadic}),getPluralRules:Oe(function(){for(var t,e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return new((t=Intl.PluralRules).bind.apply(t,s([void 0],e,!1)))},{cache:Ye(a.pluralRules),strategy:Ze.variadic})})}return Object.defineProperty(t,"defaultLocale",{get:function(){return t.memoizedDefaultLocale||(t.memoizedDefaultLocale=(new Intl.NumberFormat).resolvedOptions().locale),t.memoizedDefaultLocale},enumerable:!1,configurable:!0}),t.memoizedDefaultLocale=null,t.resolveLocale=function(t){if(void 0!==Intl.Locale){var e=Intl.NumberFormat.supportedLocalesOf(t);return e.length>0?new Intl.Locale(e[0]):new Intl.Locale("string"==typeof t?t:t[0])}},t.__parse=ke,t.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},t}();const Qe=Je;class ti{constructor(){this.lang=ei("lang",document?.documentElement?.getAttribute("lang")),this.dir=ei("dir",document?.documentElement?.getAttribute("dir")),new MutationObserver(()=>{document.dispatchEvent(new CustomEvent("localeChanged",{detail:{lang:this.lang=ei("lang",document.documentElement.lang),dir:this.dir=ei("dir",document.documentElement.dir)}}))}).observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}}function ei(t,e){return"lang"===t?e&&e.includes("-")&&e.length>=5?e.toLowerCase():"en-us":"dir"===t?e&&e.match(/^(ltr|rtl)$/i)?e.toLowerCase():"ltr":(console.warn("Invalid validation type!"),"")}const ii=function(){let t;return function(){return t||(t=new ti),t}}(),ri=(t=>{class e extends t{constructor(){super(...arguments),this.i18nManager=ii(),this.locChangeHandler=t=>{this.lang=t.detail.lang,this.dir=t.detail.dir,this.requestUpdate()},this.errorHandler=(t,e)=>{if(console.warn(`I18nMixin ${t}: ${e}`),"undefined"!=typeof process&&process?.env?.STORYBOOK&&"ERROR"===t)throw new Error(e)}}connectedCallback(){super.connectedCallback(),this.lang=this.i18nManager?.lang||"en-us",this.dir=this.i18nManager?.dir||"ltr",document.addEventListener("localeChanged",this.locChangeHandler),Object.keys(this.translations||{})?.forEach(t=>{const{dict:e}=this.constructor;e&&Object.keys(e).length||this.errorHandler("ERROR","Found translations but dictionary is not defined"),e&&!(t in e)&&this.errorHandler("ERROR",`Translation passed in for wrong or obsolete key: '${t}'`)})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("localeChanged",this.locChangeHandler)}msg(t,e){if(!t)return"";const i=this.constructor.dict?.[t]||"";if(!this.lang)return i;const{dict:r}=this.constructor;r&&!(t in r)&&this.errorHandler("ERROR",`Invalid key: '${t}'`);let o=this.translations?.[t];o||(this.translations&&this.errorHandler("WARNING",`Missing translation for key: '${t}'`),o=i);let n=o;try{n=this.format(o,e)}catch(t){this.errorHandler("ERROR",`Error interpolating '${o}'\n${t}`)}return n??o??""}format(t,e){return new Qe(t,this.lang).format(e)}}return e.dict={},n([ft({type:Object,reflect:!1})],e.prototype,"translations",void 0),e})(pt),oi=globalThis,ni=oi.ShadowRoot&&(void 0===oi.ShadyCSS||oi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,si=Symbol(),ai=new WeakMap;let li=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==si)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ni&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=ai.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ai.set(e,t))}return t}toString(){return this.cssText}};const hi=t=>new li("string"==typeof t?t:t+"",void 0,si),ci=ni?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return hi(e)})(t):t,{is:di,defineProperty:ui,getOwnPropertyDescriptor:pi,getOwnPropertyNames:gi,getOwnPropertySymbols:vi,getPrototypeOf:mi}=Object,fi=globalThis,_i=fi.trustedTypes,bi=_i?_i.emptyScript:"",$i=fi.reactiveElementPolyfillSupport,yi=(t,e)=>t,wi={toAttribute(t,e){switch(e){case Boolean:t=t?bi:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},Ei=(t,e)=>!di(t,e),Ai={attribute:!0,type:String,converter:wi,reflect:!1,hasChanged:Ei};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),fi.litPropertyMetadata??(fi.litPropertyMetadata=new WeakMap);class Si extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ai){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&ui(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:o}=pi(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return null==r?void 0:r.call(this)},set(e){const n=null==r?void 0:r.call(this);o.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ai}static _$Ei(){if(this.hasOwnProperty(yi("elementProperties")))return;const t=mi(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(yi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(yi("properties"))){const t=this.properties,e=[...gi(t),...vi(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(ci(t))}else void 0!==t&&e.push(ci(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach(t=>t(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(e=t.hostConnected)||e.call(t))}removeController(t){var e;null==(e=this._$EO)||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(ni)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),r=oi.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$EO)||t.forEach(t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$EO)||t.forEach(t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var i;const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(void 0!==o&&!0===r.reflect){const n=(void 0!==(null==(i=r.converter)?void 0:i.toAttribute)?r.converter:wi).toAttribute(e,r.type);this._$Em=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,e){var i;const r=this.constructor,o=r._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=r.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(i=t.converter)?void 0:i.fromAttribute)?t.converter:wi;this._$Em=o,this[o]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??Ei)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null==(t=this._$EO)||t.forEach(t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)}),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null==(e=this._$EO)||e.forEach(t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}Si.elementStyles=[],Si.shadowRootOptions={mode:"open"},Si[yi("elementProperties")]=new Map,Si[yi("finalized")]=new Map,null==$i||$i({ReactiveElement:Si}),(fi.reactiveElementVersions??(fi.reactiveElementVersions=[])).push("2.0.4");const Ci=globalThis,Bi=Ci.trustedTypes,Pi=Bi?Bi.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ti="$lit$",Hi=`lit$${(Math.random()+"").slice(9)}$`,xi="?"+Hi,Li=`<${xi}>`,ki=document,Oi=()=>ki.createComment(""),Mi=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Ii=Array.isArray,Ni="[ \t\n\f\r]",Ri=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ui=/-->/g,Di=/>/g,zi=RegExp(`>|${Ni}(?:([^\\s"'>=/]+)(${Ni}*=${Ni}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Gi=/'/g,Zi=/"/g,ji=/^(?:script|style|textarea|title)$/i,Fi=(t,...e)=>({_$litType$:1,strings:t,values:e}),Vi=Symbol.for("lit-noChange"),Wi=Symbol.for("lit-nothing"),Xi=new WeakMap,Ki=ki.createTreeWalker(ki,129);function qi(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Pi?Pi.createHTML(e):e}class Yi{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let o=0,n=0;const s=t.length-1,a=this.parts,[l,h]=((t,e)=>{const i=t.length-1,r=[];let o,n=2===e?"<svg>":"",s=Ri;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(s.lastIndex=c,l=s.exec(i),null!==l);)c=s.lastIndex,s===Ri?"!--"===l[1]?s=Ui:void 0!==l[1]?s=Di:void 0!==l[2]?(ji.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=zi):void 0!==l[3]&&(s=zi):s===zi?">"===l[0]?(s=o??Ri,h=-1):void 0===l[1]?h=-2:(h=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?zi:'"'===l[3]?Zi:Gi):s===Zi||s===Gi?s=zi:s===Ui||s===Di?s=Ri:(s=zi,o=void 0);const d=s===zi&&t[e+1].startsWith("/>")?" ":"";n+=s===Ri?i+Li:h>=0?(r.push(a),i.slice(0,h)+Ti+i.slice(h)+Hi+d):i+Hi+(-2===h?e:d)}return[qi(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),r]})(t,e);if(this.el=Yi.createElement(l,i),Ki.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=Ki.nextNode())&&a.length<s;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(Ti)){const e=h[n++],i=r.getAttribute(t).split(Hi),s=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:s[2],strings:i,ctor:"."===s[1]?ir:"?"===s[1]?rr:"@"===s[1]?or:er}),r.removeAttribute(t)}else t.startsWith(Hi)&&(a.push({type:6,index:o}),r.removeAttribute(t));if(ji.test(r.tagName)){const t=r.textContent.split(Hi),e=t.length-1;if(e>0){r.textContent=Bi?Bi.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],Oi()),Ki.nextNode(),a.push({type:2,index:++o});r.append(t[e],Oi())}}}else if(8===r.nodeType)if(r.data===xi)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=r.data.indexOf(Hi,t+1));)a.push({type:7,index:o}),t+=Hi.length-1}o++}}static createElement(t,e){const i=ki.createElement("template");return i.innerHTML=t,i}}function Ji(t,e,i=t,r){var o,n;if(e===Vi)return e;let s=void 0!==r?null==(o=i._$Co)?void 0:o[r]:i._$Cl;const a=Mi(e)?void 0:e._$litDirective$;return(null==s?void 0:s.constructor)!==a&&(null==(n=null==s?void 0:s._$AO)||n.call(s,!1),void 0===a?s=void 0:(s=new a(t),s._$AT(t,i,r)),void 0!==r?(i._$Co??(i._$Co=[]))[r]=s:i._$Cl=s),void 0!==s&&(e=Ji(t,s._$AS(t,e.values),s,r)),e}class Qi{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=((null==t?void 0:t.creationScope)??ki).importNode(e,!0);Ki.currentNode=r;let o=Ki.nextNode(),n=0,s=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new tr(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new nr(o,this,t)),this._$AV.push(e),a=i[++s]}n!==(null==a?void 0:a.index)&&(o=Ki.nextNode(),n++)}return Ki.currentNode=ki,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class tr{get _$AU(){var t;return(null==(t=this._$AM)?void 0:t._$AU)??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=Wi,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=(null==r?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ji(this,t,e),Mi(t)?t===Wi||null==t||""===t?(this._$AH!==Wi&&this._$AR(),this._$AH=Wi):t!==this._$AH&&t!==Vi&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>Ii(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==Wi&&Mi(this._$AH)?this._$AA.nextSibling.data=t:this.T(ki.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:r}=t,o="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=Yi.createElement(qi(r.h,r.h[0]),this.options)),r);if((null==(e=this._$AH)?void 0:e._$AD)===o)this._$AH.p(i);else{const t=new Qi(o,this),e=t.u(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=Xi.get(t.strings);return void 0===e&&Xi.set(t.strings,e=new Yi(t)),e}k(t){Ii(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const o of t)r===e.length?e.push(i=new tr(this.S(Oi()),this.S(Oi()),this,this.options)):i=e[r],i._$AI(o),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for(null==(i=this._$AP)||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}}class er{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,o){this.type=1,this._$AH=Wi,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Wi}_$AI(t,e=this,i,r){const o=this.strings;let n=!1;if(void 0===o)t=Ji(this,t,e,0),n=!Mi(t)||t!==this._$AH&&t!==Vi,n&&(this._$AH=t);else{const r=t;let s,a;for(t=o[0],s=0;s<o.length-1;s++)a=Ji(this,r[i+s],e,s),a===Vi&&(a=this._$AH[s]),n||(n=!Mi(a)||a!==this._$AH[s]),a===Wi?t=Wi:t!==Wi&&(t+=(a??"")+o[s+1]),this._$AH[s]=a}n&&!r&&this.j(t)}j(t){t===Wi?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ir extends er{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Wi?void 0:t}}class rr extends er{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Wi)}}class or extends er{constructor(t,e,i,r,o){super(t,e,i,r,o),this.type=5}_$AI(t,e=this){if((t=Ji(this,t,e,0)??Wi)===Vi)return;const i=this._$AH,r=t===Wi&&i!==Wi||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==Wi&&(i===Wi||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;"function"==typeof this._$AH?this._$AH.call((null==(e=this.options)?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class nr{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ji(this,t)}}const sr=Ci.litHtmlPolyfillSupport;null==sr||sr(Yi,tr),(Ci.litHtmlVersions??(Ci.litHtmlVersions=[])).push("3.1.2");class ar extends Si{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const r=(null==i?void 0:i.renderBefore)??e;let o=r._$litPart$;if(void 0===o){const t=(null==i?void 0:i.renderBefore)??null;r._$litPart$=o=new tr(e.insertBefore(Oi(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return Vi}}var lr;ar._$litElement$=!0,ar.finalized=!0,null==(lr=globalThis.litElementHydrateSupport)||lr.call(globalThis,{LitElement:ar});const hr=globalThis.litElementPolyfillSupport;null==hr||hr({LitElement:ar}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");const cr={attribute:!0,type:String,converter:wi,reflect:!1,hasChanged:Ei},dr=(t=cr,e,i)=>{const{kind:r,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(i.name,t),"accessor"===r){const{name:r}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,o,t)},init(e){return void 0!==e&&this.P(r,void 0,t),e}}}if("setter"===r){const{name:r}=i;return function(i){const o=this[r];e.call(this,i),this.requestUpdate(r,o,t)}}throw Error("Unsupported decorator location: "+r)};function ur(t){return(e,i)=>"object"==typeof i?dr(t,e,i):((t,e,i)=>{const r=e.hasOwnProperty(i);return e.constructor.createProperty(i,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}const pr="1em",gr="0.8125em",vr="1em",mr="1.25em",fr="1.5em",_r=((t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new li(i,t,si)})`
  :host {
    display: inline-block;
    width: var(--ds-icon-size-default, ${hi(pr)});
    min-width: var(--ds-icon-size-default, ${hi(pr)});
    height: var(--ds-icon-size-default, ${hi(pr)});
    min-height: var(--ds-icon-size-default, ${hi(pr)});
    box-sizing: content-box;
  }

  :host([size='xsmall']) {
    width: var(--ds-icon-size-xsmall, ${hi(gr)});
    min-width: var(--ds-icon-size-xsmall, ${hi(gr)});
    height: var(--ds-icon-size-xsmall, ${hi(gr)});
    min-height: var(--ds-icon-size-xsmall, ${hi(gr)});
  }

  :host([size='small']) {
    width: var(--ds-icon-size-small, ${hi(vr)});
    min-width: var(--ds-icon-size-small, ${hi(vr)});
    height: var(--ds-icon-size-small, ${hi(vr)});
    min-height: var(--ds-icon-size-small, ${hi(vr)});
  }

  :host([size='medium']) {
    width: var(--ds-icon-size-medium, ${hi(mr)});
    min-width: var(--ds-icon-size-medium, ${hi(mr)});
    height: var(--ds-icon-size-medium, ${hi(mr)});
    min-height: var(--ds-icon-size-medium, ${hi(mr)});
  }

  :host([size='large']) {
    width: var(--ds-icon-size-large, ${hi(fr)});
    min-width: var(--ds-icon-size-large, ${hi(fr)});
    height: var(--ds-icon-size-large, ${hi(fr)});
    min-height: var(--ds-icon-size-large, ${hi(fr)});
  }

  svg,
  ::slotted(svg) {
    display: block;
    height: 100%;
    width: 100%;
    fill: currentColor;
  }
`,br=Object.assign({"../../../../../../node_modules/@fluentui/svg-icons/icons/add_circle_24_filled.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 5c-.38 0-.7.28-.74.65l-.01.1v3.5h-3.5a.75.75 0 0 0-.1 1.5h3.6v3.5a.75.75 0 0 0 1.5.1v-3.6h3.5a.75.75 0 0 0 .1-1.5h-3.6v-3.5A.75.75 0 0 0 12 7Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/add_circle_24_regular.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM12 7c.41 0 .75.34.75.75v3.5h3.5a.75.75 0 0 1 0 1.5h-3.5v3.5a.75.75 0 0 1-1.5 0v-3.5h-3.5a.75.75 0 0 1 0-1.5h3.5v-3.5c0-.41.34-.75.75-.75Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/arrow_up_24_filled.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.28 10.3a1 1 0 0 0 1.43 1.4L11 6.33V20a1 1 0 1 0 2 0V6.33l5.28 5.37a1 1 0 0 0 1.43-1.4l-6.82-6.93c-.5-.5-1.3-.5-1.78 0L4.28 10.3Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/arrow_up_24_regular.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.2 10.73a.75.75 0 0 0 1.1 1.04l5.95-6.25v14.73a.75.75 0 0 0 1.5 0V5.52l5.95 6.25a.75.75 0 0 0 1.1-1.04l-7.08-7.42a1 1 0 0 0-1.44 0L4.2 10.73Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/checkmark_24_filled.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m8.5 16.59-3.8-3.8a1 1 0 0 0-1.4 1.42l4.5 4.5a1 1 0 0 0 1.4 0l11-11a1 1 0 0 0-1.4-1.42L8.5 16.6Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/checkmark_24_regular.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.53 12.97a.75.75 0 0 0-1.06 1.06l4.5 4.5c.3.3.77.3 1.06 0l11-11a.75.75 0 0 0-1.06-1.06L8.5 16.94l-3.97-3.97Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_down_24_filled.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.3 8.3a1 1 0 0 1 1.4 0l6.3 6.29 6.3-6.3a1 1 0 1 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-7-7a1 1 0 0 1 0-1.42Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_down_24_regular.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.22 8.47c.3-.3.77-.3 1.06 0L12 15.19l6.72-6.72a.75.75 0 1 1 1.06 1.06l-7.25 7.25c-.3.3-.77.3-1.06 0L4.22 9.53a.75.75 0 0 1 0-1.06Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_left_24_filled.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.7 4.3a1 1 0 0 1 0 1.4L9.42 12l6.3 6.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 0Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_left_24_regular.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.53 4.22c.3.3.3.77 0 1.06L8.81 12l6.72 6.72a.75.75 0 1 1-1.06 1.06l-7.25-7.25a.75.75 0 0 1 0-1.06l7.25-7.25c.3-.3.77-.3 1.06 0Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_right_24_filled.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.3 4.3a1 1 0 0 0 0 1.4l6.29 6.3-6.3 6.3a1 1 0 1 0 1.42 1.4l7-7a1 1 0 0 0 0-1.4l-7-7a1 1 0 0 0-1.42 0Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_right_24_regular.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.47 4.22c-.3.3-.3.77 0 1.06L15.19 12l-6.72 6.72a.75.75 0 1 0 1.06 1.06l7.25-7.25c.3-.3.3-.77 0-1.06L9.53 4.22a.75.75 0 0 0-1.06 0Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_up_24_filled.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.3 15.7a1 1 0 0 0 1.4 0L12 9.42l6.3 6.3a1 1 0 0 0 1.4-1.42l-7-7a1 1 0 0 0-1.4 0l-7 7a1 1 0 0 0 0 1.42Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_up_24_regular.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.22 15.53c.3.3.77.3 1.06 0L12 8.81l6.72 6.72a.75.75 0 1 0 1.06-1.06l-7.25-7.25a.75.75 0 0 0-1.06 0l-7.25 7.25c-.3.3-.3.77 0 1.06Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/circle_24_filled.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/circle_24_regular.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/dismiss_24_filled.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.21 4.39.08-.1a1 1 0 0 1 1.32-.08l.1.08L12 10.6l6.3-6.3a1 1 0 1 1 1.4 1.42L13.42 12l6.3 6.3a1 1 0 0 1 .08 1.31l-.08.1a1 1 0 0 1-1.32.08l-.1-.08L12 13.4l-6.3 6.3a1 1 0 0 1-1.4-1.42L10.58 12l-6.3-6.3a1 1 0 0 1-.08-1.31l.08-.1-.08.1Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/dismiss_24_regular.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.4 4.55.07-.08a.75.75 0 0 1 .98-.07l.08.07L12 10.94l6.47-6.47a.75.75 0 1 1 1.06 1.06L13.06 12l6.47 6.47c.27.27.3.68.07.98l-.07.08a.75.75 0 0 1-.98.07l-.08-.07L12 13.06l-6.47 6.47a.75.75 0 0 1-1.06-1.06L10.94 12 4.47 5.53a.75.75 0 0 1-.07-.98l.07-.08-.07.08Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/pause_circle_24_filled.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1.5 6.25v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 1.5 0Zm4.5 0v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 1.5 0Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/pause_circle_24_regular.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 8.25a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0v-7.5Zm4.5 0a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0v-7.5ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/play_circle_24_filled.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm8.86-3.85A1.25 1.25 0 0 0 9 9.25v5.5c0 .95 1.02 1.56 1.86 1.1l5.75-3.2a.75.75 0 0 0 0-1.3l-5.75-3.2Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/play_circle_24_regular.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.86 8.15A1.25 1.25 0 0 0 9 9.25v5.5c0 .95 1.02 1.56 1.86 1.1l5.75-3.2a.75.75 0 0 0 0-1.3l-5.75-3.2ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/search_24_filled.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 10a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-7a7 7 0 1 0 4.2 12.6l5.1 5.1a1 1 0 0 0 1.4-1.4l-5.1-5.1A7 7 0 0 0 10 3Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/search_24_regular.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 10a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0ZM10 3a7 7 0 1 0 4.4 12.45l5.32 5.33a.75.75 0 1 0 1.06-1.06l-5.33-5.33A7 7 0 0 0 10 3Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/star_24_filled.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.79 3.1c.5-1 1.92-1 2.42 0l2.36 4.78 5.27.77c1.1.16 1.55 1.52.75 2.3l-3.82 3.72.9 5.25a1.35 1.35 0 0 1-1.96 1.42L12 18.86l-4.72 2.48a1.35 1.35 0 0 1-1.96-1.42l.9-5.25-3.81-3.72c-.8-.78-.36-2.14.75-2.3l5.27-.77 2.36-4.78Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/star_24_regular.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.79 3.1c.5-1 1.92-1 2.42 0l2.36 4.78 5.27.77c1.1.16 1.55 1.52.75 2.3l-3.82 3.72.9 5.25a1.35 1.35 0 0 1-1.96 1.42L12 18.86l-4.72 2.48a1.35 1.35 0 0 1-1.96-1.42l.9-5.25-3.81-3.72c-.8-.78-.36-2.14.75-2.3l5.27-.77 2.36-4.78Zm1.2.94L9.75 8.6c-.2.4-.58.68-1.02.74l-5.05.74 3.66 3.56c.32.3.46.76.39 1.2l-.87 5.02 4.52-2.37c.4-.2.86-.2 1.26 0l4.51 2.37-.86-5.03c-.07-.43.07-.88.39-1.2l3.65-3.55-5.05-.74a1.35 1.35 0 0 1-1.01-.74L12 4.04Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/subtract_circle_24_filled.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm-4.25 9.25a.75.75 0 0 0-.1 1.5h8.6a.75.75 0 0 0 .1-1.5h-8.6Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/subtract_circle_24_regular.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm4.25 7.75a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h8.5Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/warning_24_filled.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.03 3.66a2.25 2.25 0 0 1 3.94 0l7.74 14A2.25 2.25 0 0 1 19.74 21H4.25a2.25 2.25 0 0 1-1.97-3.34l7.75-14ZM13 17a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-.26-7.85a.75.75 0 0 0-1.5.1v4.5l.02.1a.75.75 0 0 0 1.49-.1v-4.5l-.01-.1Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/warning_24_regular.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 17a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-.26-7.85a.75.75 0 0 0-1.5.1l.01 4.5v.1a.75.75 0 0 0 1.5-.1v-4.5l-.01-.1Zm1.23-5.5a2.25 2.25 0 0 0-3.94 0L2.3 17.67A2.25 2.25 0 0 0 4.26 21h15.49c1.71 0 2.8-1.84 1.96-3.34l-7.74-14Zm-2.63.74a.75.75 0 0 1 1.32 0l7.74 14a.75.75 0 0 1-.65 1.11H4.25a.75.75 0 0 1-.65-1.11l7.74-14Z"/></svg>'}),$r=Object.keys(br);var yr=Object.defineProperty,wr=Object.getOwnPropertyDescriptor,Er=(t,e,i,r)=>{for(var o,n=r>1?void 0:r?wr(e,i):e,s=t.length-1;s>=0;s--)(o=t[s])&&(n=(r?o(e,i,n):o(n))||n);return r&&n&&yr(e,i,n),n};let Ar=class extends ar{constructor(){super(...arguments),this.filled=!1,this.ariaLabel=null}updated(t){t.has("ariaLabel")&&this._setAriaAttrs(),t.has("icon")&&this.setIcon()}setIcon(){var t;if(this._slotContents&&0===this._slotContents.length&&this.icon){const e=(({name:t="",filled:e})=>{const i=`../../../../../../node_modules/@fluentui/svg-icons/icons/${t.replace("-","_").toLowerCase()}_24_${e?"filled":"regular"}.svg`;return((t="")=>$r.includes(t))(i)?br[i]:""})({name:this.icon,filled:this.filled}),i=e&&(new DOMParser).parseFromString(e,"text/html"),r=i&&i.body.querySelector("svg");r&&(this.removeIcon(),null==(t=this.shadowRoot)||t.append(r))}}removeIcon(){var t;const e=null==(t=this.shadowRoot)?void 0:t.querySelector("svg");null==e||e.remove()}_setAriaAttrs(){this.ariaLabel?(this.setAttribute("role","img"),this.removeAttribute("aria-hidden")):(this.setAttribute("aria-hidden","true"),this.removeAttribute("role"))}render(){return Fi` <slot></slot> `}};var Sr;Ar.styles=[_r],Er([ur()],Ar.prototype,"icon",2),Er([ur()],Ar.prototype,"size",2),Er([ur({type:Boolean})],Ar.prototype,"filled",2),Er([ur({attribute:"aria-label"})],Ar.prototype,"ariaLabel",2),Er([function(t){return(e,i)=>{const{slot:r,selector:o}={},n="slot"+(r?`[name=${r}]`:":not([name])");return((t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i))(e,i,{get(){var e;const i=null==(e=this.renderRoot)?void 0:e.querySelector(n),r=(null==i?void 0:i.assignedElements(t))??[];return void 0===o?r:r.filter(t=>t.matches(o))}})}}()],Ar.prototype,"_slotContents",2),Ar=Er([(t=>(e,i)=>{customElements.get(t)?console.warn(`${t} is already defined.`):void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("moray-icon")],Ar);const Cr=[{minWidth:0,maxVisibleLinks:0},{minWidth:1084,maxVisibleLinks:3,showPrice:!0},{minWidth:1400,maxVisibleLinks:4,showPrice:!0}];let Br=Sr=class extends ri{constructor(){super(...arguments),this.theme="light",this.position="top",this.sections=[],this.mobileOnlySections=[],this.overflowLabel=this.msg("More"),this.sizing=Cr,this.linearGradient="",this.bgColorCode="",this._isSticky=!1,this._isHidden=!1,this._dropdownExpanded=!1,this.productTask=new Pt(this,St,()=>[this.connectorUrl]),this.handleClickOutside=t=>{this.contains(t.target)||(this._dropdownExpanded=!1)},this._onScroll=t=>{if("bottom"===this.position){this._isSticky=!0;const t=window.scrollY,e=document.documentElement.scrollHeight,i=(t+window.innerHeight)/e;this._isHidden=i>=.9}else this._isSticky=window.scrollY>this.offsetTop;let e;for(let t=this.sections.length-1;t>=0;t--){const i=this.sections[t];if(this._isActive(i.anchorId)){e=t;break}}void 0!==e?(this._activeLinkIndex=Math.max(e,0),this.sections[this._activeLinkIndex].anchorId&&Pr(this.sections[this._activeLinkIndex].anchorId)):void 0!==this._activeLinkIndex&&(this._activeLinkIndex=void 0,Pr())},this._onResize=t=>{this.setSizingInfo()}}connectedCallback(){super.connectedCallback(),this.setSizingInfo(),"bottom"===this.position&&(this._isSticky=!0),window.addEventListener("scroll",this._onScroll),window.addEventListener("resize",this._onResize),window.addEventListener("click",this.handleClickOutside)}disconnectedCallback(){window.removeEventListener("scroll",this._onScroll),window.removeEventListener("resize",this._onResize),window.removeEventListener("click",this.handleClickOutside),super.disconnectedCallback()}render(){const t=this._currentSizing?.maxVisibleLinks??0,e=0===t,i=this.sections.slice(0,t),r=this.sections.slice(t);e&&r.push(...this.mobileOnlySections);const o=q`
      <div
        class="dropdown-menu ${this._dropdownExpanded?"":"hidden"} ${e?"wide":""}"
        style="background: ${this.linearGradient?this.linearGradient:this.bgColorCode}"
        @keydown=${t=>{"Escape"===t.key&&(this.shadowRoot?.querySelector("button")?.focus(),t.stopPropagation(),this._dropdownExpanded=!1)}}
        @focusout=${t=>{const e=t.relatedTarget;if(e){const t=this.shadowRoot?.querySelector(".dropdown-menu");t?.contains(e)||(this._dropdownExpanded=!1)}}}
      >
        <ul
          @keydown=${t=>{const e=t.target;if(e instanceof HTMLElement){const t=e.closest("li");if(t){const e=t.nextElementSibling;e&&e.classList.contains("tab-list-item")&&(this._dropdownExpanded=!1)}}}}
        >
          ${r.map((t,e)=>this._getOverflowItem(t,e+i.length===this._activeLinkIndex))}
        </ul>
      </div>
    `;return q`
      <nav
        class="${this.theme}-theme ${this._isSticky?"sticky":""} ${this._isHidden?"hidden":""} ${"bottom"===this.position?"bottom-position":""}"
        style="background: ${this.linearGradient?this.linearGradient:this.bgColorCode}"
        aria-label="${this.navAriaLabel??"In-page"}"
      >
        <ul class="left-container">
          ${this.getDeviceNameElement()}
          ${i.map((t,e)=>this._getSectionElement(t,e===this._activeLinkIndex))}
          <li>
            <div
              class="nav-item overflow-item
                ${0===r.length?"hidden":""}
                ${e?"":"active-underline"}
                ${e?"narrow":""}"
            >
              <button
                aria-expanded="${this._dropdownExpanded}"
                @keydown=${t=>{"Escape"===t.key&&(this._dropdownExpanded=!1)}}
                @click=${t=>{t.stopPropagation(),this._dropdownExpanded=!this._dropdownExpanded}}
              >
                ${this.getDropdownLabel(e)}
                <moray-icon icon="chevron-down" size="large"></moray-icon>
              </button>
            </div>
            ${e?"":o}
          </li>
        </ul>
        ${e?o:""}
        <div class="right-container">
          <slot name="actions" class="actions-slot"></slot>
          ${this._currentSizing?.showPrice&&this.isPLPVariant?q`<p class="price">${this.getPriceContent()}</p>`:J}
          <slot name="cta-button"></slot>
        </div>
      </nav>
      <div
        class="placeholder ${this._isSticky&&"top"===this.position?"":"hidden"}"
        style="height:${this.getBoundingClientRect().height}px"
      ></div>
    `}getDeviceNameElement(){return q`<li
      class="${this._isSticky&&(this._currentSizing?.maxVisibleLinks??0)>0?"":"hidden"}"
    >
      <h2>${this.getDeviceNameContent()}</h2>
    </li>`}getDropdownLabel(t=!1){return t?this.getDeviceNameContent(()=>this.overflowLabel):this.overflowLabel}getDeviceNameContent(t){return this.productNameOverrideText?this.productNameOverrideText:this.getFromTask(Ct,t)}getPriceContent(){return this.priceOverrideHtml?q`${yt(this.priceOverrideHtml)}`:this.getFromTask(t=>{const e=this.getPriceTextObject(t);if(!e)return J;const i=e.originalPrice?q`<span class="original-price">${e.originalPrice}</span>
            ${e.currentPrice}`:e.currentPrice,r=this.priceFormatOverrideText??e.priceFormat;return this.format(r,{0:i})})}setSizingInfo(){let t;for(const e of this.sizing)window.innerWidth>=e.minWidth&&(!t||e.minWidth>t.minWidth)&&(t=e);this._currentSizing=t}getPriceTextObject(t){const e=function(t,e){if(!t)throw new Error("(Product not found)");return e?t.skuInfo?.[e.toUpperCase()]||t.skuInfo?.[e.toLowerCase()]:t.skuInfo&&Object.keys(t.skuInfo).length>0?Object.values(t.skuInfo).reduce((t,e)=>t.price.currentValue<e.price.currentValue?t:e):void 0}(t,this.skuId);if(e)return function(t){const e=t.price;if(!e)throw new Error("Price not found");const i=e.recurrencePrice||e.currentPrice;if(!i)throw new Error("Price not found");let r="{0}";return e.priceFormat?r=e.priceFormat:e.fromText&&(r=`${e.fromText} {0}`),{priceFormat:r,currentPrice:i,originalPrice:e.originalPrice!==i?e.originalPrice:void 0}}(e)}getFromTask(t,e=()=>q``){return this.productTask?.render({pending:()=>e(),error:()=>e(),complete:i=>{try{return t(i)}catch(t){return e()}}})??e()}_getSectionElement(t,e){return this._getNavListItem(t,e,"nav-item active-underline")}_getOverflowItem(t,e){return this._getNavListItem(t,e,"dropdown-item active-highlight")}_getNavListItem(t,e,i){return q` <li>
      <div class="${i} ${e?"active":""}">
        <a
          data-bi-cT="ctx"
          data-bi-hn="${this.pageTitle}"
          data-bi-ehn="${this.pageTitle}"
          data-bi-cN="${t.label.toLowerCase()}"
          data-bi-ecn="${t.nonTranslatableCTAText??t.label.toLowerCase()}"
          data-bi-bhvr="0"
          data-bi-pa="body"
          data-bi-compnm="In-Page Navigation"
          href="${t.anchorId?"#"+t.anchorId:t.labelLink}"
          aria-label="${t.ariaLabel??t.label}"
          data-capture-telemetry
          @click=${e=>{if(!t.anchorId)return;const i=this._getScrollToY(t.anchorId);window.scrollTo({top:i,behavior:this.scrollBehavior}),this._dropdownExpanded=!1;const r=document.getElementById(t.anchorId);r?.setAttribute("tabindex","-1"),r?.focus({preventScroll:!0}),this._openTargetComponent(t.anchorId),e.preventDefault()}}
          aria-current=${e?"location":""}
          >${t.label}</a
        >
      </div>
    </li>`}_getScrollToY(t){const e=this.getBoundingClientRect().height,i=document.getElementById(t)?.offsetTop;return"bottom"===this.position?i||void 0:i?i-e:void 0}_isActive(t){if(!t)return;const e=document.getElementById(t);if(!e)return;const i=this.getBoundingClientRect().height,r=window.scrollY+i,o=e.offsetTop+e.getBoundingClientRect().height;return e.offsetTop-1<=r&&r<o}_openTargetComponent(t){const e=document.getElementById(t);if(!e)return;const i=e.parentElement;i&&i.getAttribute("data-component-id")===Sr.TECH_SPECS_COMPONENT_ID&&e.setAttribute("isopened","true")}};function Pr(t){const e=t?`#${t}`:"";if(window.location.hash!==e){const t=window.location.href.replace(/#.*/,"");window.history.pushState({},"",`${t}${e}`)}}return Br.styles=[wt],Br.dict={More:"More"},Br.TECH_SPECS_COMPONENT_ID="985653c65c57ab129f0f67463af1e1b7",n([ft()],Br.prototype,"theme",void 0),n([ft()],Br.prototype,"position",void 0),n([ft({attribute:"sku-id"})],Br.prototype,"skuId",void 0),n([ft({attribute:"plp-variant",type:Boolean})],Br.prototype,"isPLPVariant",void 0),n([ft({type:Object})],Br.prototype,"sections",void 0),n([ft({attribute:"mobile-only-sections",type:Object})],Br.prototype,"mobileOnlySections",void 0),n([ft({attribute:"overflow-label"})],Br.prototype,"overflowLabel",void 0),n([ft()],Br.prototype,"sizing",void 0),n([ft({attribute:"connector-url"})],Br.prototype,"connectorUrl",void 0),n([ft({attribute:"linear-gradient"})],Br.prototype,"linearGradient",void 0),n([ft({attribute:"bg-color-code"})],Br.prototype,"bgColorCode",void 0),n([ft({attribute:"page-title"})],Br.prototype,"pageTitle",void 0),n([ft({attribute:"nav-aria-label"})],Br.prototype,"navAriaLabel",void 0),n([ft({attribute:"price-override-html"})],Br.prototype,"priceOverrideHtml",void 0),n([ft({attribute:"price-format-override-text"})],Br.prototype,"priceFormatOverrideText",void 0),n([ft({attribute:"product-name-override-text"})],Br.prototype,"productNameOverrideText",void 0),n([ft({attribute:"scroll-behavior"})],Br.prototype,"scrollBehavior",void 0),n([_t()],Br.prototype,"_isSticky",void 0),n([_t()],Br.prototype,"_isHidden",void 0),n([_t()],Br.prototype,"_dropdownExpanded",void 0),n([_t()],Br.prototype,"_currentSizing",void 0),n([_t()],Br.prototype,"_activeLinkIndex",void 0),Br=Sr=n([(t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("page-nav")],Br),e})(),t.exports=e()}},e={};function i(r){var o=e[r];if(void 0!==o)return o.exports;var n=e[r]={exports:{}};return t[r](n,n.exports,i),n.exports}(()=>{"use strict";i(8108);const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),o=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=o.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o.set(i,t))}return t}toString(){return this.cssText}};const s=t=>new n("string"==typeof t?t:t+"",void 0,r),a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new n(i,t,r)},l=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return s(e)})(t):t,{is:h,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:u,getOwnPropertySymbols:p,getPrototypeOf:g}=Object,v=globalThis,m=v.trustedTypes,f=m?m.emptyScript:"",_=v.reactiveElementPolyfillSupport,b=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},y=(t,e)=>!h(t,e),w={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:y};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),v.litPropertyMetadata??(v.litPropertyMetadata=new WeakMap);class E extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&c(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:o}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return null==r?void 0:r.call(this)},set(e){const n=null==r?void 0:r.call(this);o.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...u(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach(t=>t(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(e=t.hostConnected)||e.call(t))}removeController(t){var e;null==(e=this._$EO)||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,r)=>{if(e)i.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of r){const r=document.createElement("style"),o=t.litNonce;void 0!==o&&r.setAttribute("nonce",o),r.textContent=e.cssText,i.appendChild(r)}})(i,this.constructor.elementStyles),i}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$EO)||t.forEach(t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$EO)||t.forEach(t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var i;const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(void 0!==o&&!0===r.reflect){const n=(void 0!==(null==(i=r.converter)?void 0:i.toAttribute)?r.converter:$).toAttribute(e,r.type);this._$Em=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,e){var i;const r=this.constructor,o=r._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=r.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(i=t.converter)?void 0:i.fromAttribute)?t.converter:$;this._$Em=o,this[o]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??y)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null==(t=this._$EO)||t.forEach(t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)}),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null==(e=this._$EO)||e.forEach(t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[b("elementProperties")]=new Map,E[b("finalized")]=new Map,null==_||_({ReactiveElement:E}),(v.reactiveElementVersions??(v.reactiveElementVersions=[])).push("2.0.4");const A=globalThis,S=A.trustedTypes,C=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,B="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,T="?"+P,H=`<${T}>`,x=document,L=()=>x.createComment(""),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,M="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,R=/>/g,U=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,z=/"/g,G=/^(?:script|style|textarea|title)$/i,Z=(t,...e)=>({_$litType$:1,strings:t,values:e}),j=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),V=new WeakMap,W=x.createTreeWalker(x,129);function X(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}class K{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let o=0,n=0;const s=t.length-1,a=this.parts,[l,h]=((t,e)=>{const i=t.length-1,r=[];let o,n=2===e?"<svg>":"",s=I;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(s.lastIndex=c,l=s.exec(i),null!==l);)c=s.lastIndex,s===I?"!--"===l[1]?s=N:void 0!==l[1]?s=R:void 0!==l[2]?(G.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=U):void 0!==l[3]&&(s=U):s===U?">"===l[0]?(s=o??I,h=-1):void 0===l[1]?h=-2:(h=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?U:'"'===l[3]?z:D):s===z||s===D?s=U:s===N||s===R?s=I:(s=U,o=void 0);const d=s===U&&t[e+1].startsWith("/>")?" ":"";n+=s===I?i+H:h>=0?(r.push(a),i.slice(0,h)+B+i.slice(h)+P+d):i+P+(-2===h?e:d)}return[X(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),r]})(t,e);if(this.el=K.createElement(l,i),W.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=W.nextNode())&&a.length<s;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(B)){const e=h[n++],i=r.getAttribute(t).split(P),s=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:s[2],strings:i,ctor:"."===s[1]?tt:"?"===s[1]?et:"@"===s[1]?it:Q}),r.removeAttribute(t)}else t.startsWith(P)&&(a.push({type:6,index:o}),r.removeAttribute(t));if(G.test(r.tagName)){const t=r.textContent.split(P),e=t.length-1;if(e>0){r.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],L()),W.nextNode(),a.push({type:2,index:++o});r.append(t[e],L())}}}else if(8===r.nodeType)if(r.data===T)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=r.data.indexOf(P,t+1));)a.push({type:7,index:o}),t+=P.length-1}o++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function q(t,e,i=t,r){var o,n;if(e===j)return e;let s=void 0!==r?null==(o=i._$Co)?void 0:o[r]:i._$Cl;const a=k(e)?void 0:e._$litDirective$;return(null==s?void 0:s.constructor)!==a&&(null==(n=null==s?void 0:s._$AO)||n.call(s,!1),void 0===a?s=void 0:(s=new a(t),s._$AT(t,i,r)),void 0!==r?(i._$Co??(i._$Co=[]))[r]=s:i._$Cl=s),void 0!==s&&(e=q(t,s._$AS(t,e.values),s,r)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=((null==t?void 0:t.creationScope)??x).importNode(e,!0);W.currentNode=r;let o=W.nextNode(),n=0,s=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new J(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new rt(o,this,t)),this._$AV.push(e),a=i[++s]}n!==(null==a?void 0:a.index)&&(o=W.nextNode(),n++)}return W.currentNode=x,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class J{get _$AU(){var t;return(null==(t=this._$AM)?void 0:t._$AU)??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=(null==r?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),k(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==j&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>O(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==F&&k(this._$AH)?this._$AA.nextSibling.data=t:this.T(x.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:r}=t,o="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=K.createElement(X(r.h,r.h[0]),this.options)),r);if((null==(e=this._$AH)?void 0:e._$AD)===o)this._$AH.p(i);else{const t=new Y(o,this),e=t.u(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new K(t)),e}k(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const o of t)r===e.length?e.push(i=new J(this.S(L()),this.S(L()),this,this.options)):i=e[r],i._$AI(o),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for(null==(i=this._$AP)||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,o){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(t,e=this,i,r){const o=this.strings;let n=!1;if(void 0===o)t=q(this,t,e,0),n=!k(t)||t!==this._$AH&&t!==j,n&&(this._$AH=t);else{const r=t;let s,a;for(t=o[0],s=0;s<o.length-1;s++)a=q(this,r[i+s],e,s),a===j&&(a=this._$AH[s]),n||(n=!k(a)||a!==this._$AH[s]),a===F?t=F:t!==F&&(t+=(a??"")+o[s+1]),this._$AH[s]=a}n&&!r&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class it extends Q{constructor(t,e,i,r,o){super(t,e,i,r,o),this.type=5}_$AI(t,e=this){if((t=q(this,t,e,0)??F)===j)return;const i=this._$AH,r=t===F&&i!==F||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==F&&(i===F||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;"function"==typeof this._$AH?this._$AH.call((null==(e=this.options)?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const ot=A.litHtmlPolyfillSupport;null==ot||ot(K,J),(A.litHtmlVersions??(A.litHtmlVersions=[])).push("3.1.2");class nt extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const r=(null==i?void 0:i.renderBefore)??e;let o=r._$litPart$;if(void 0===o){const t=(null==i?void 0:i.renderBefore)??null;r._$litPart$=o=new J(e.insertBefore(L(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return j}}var st;nt._$litElement$=!0,nt.finalized=!0,null==(st=globalThis.litElementHydrateSupport)||st.call(globalThis,{LitElement:nt});const at=globalThis.litElementPolyfillSupport;null==at||at({LitElement:nt}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");const lt=t=>(e,i)=>{customElements.get(t)?console.warn(`${t} is already defined.`):void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ht={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:y},ct=(t=ht,e,i)=>{const{kind:r,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(i.name,t),"accessor"===r){const{name:r}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,o,t)},init(e){return void 0!==e&&this.P(r,void 0,t),e}}}if("setter"===r){const{name:r}=i;return function(i){const o=this[r];e.call(this,i),this.requestUpdate(r,o,t)}}throw Error("Unsupported decorator location: "+r)};function dt(t){return(e,i)=>"object"==typeof i?ct(t,e,i):((t,e,i)=>{const r=e.hasOwnProperty(i);return e.constructor.createProperty(i,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ut(t){return dt({...t,state:!0,attribute:!1})}const pt=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i);function gt(t){return(e,i)=>{const{slot:r,selector:o}=t??{},n="slot"+(r?`[name=${r}]`:":not([name])");return pt(e,i,{get(){var e;const i=null==(e=this.renderRoot)?void 0:e.querySelector(n),r=(null==i?void 0:i.assignedElements(t))??[];return void 0===o?r:r.filter(t=>t.matches(o))}})}}function vt(t){return(e,i)=>{const{slot:r}=t??{},o="slot"+(r?`[name=${r}]`:":not([name])");return pt(e,i,{get(){var e;const i=null==(e=this.renderRoot)?void 0:e.querySelector(o);return(null==i?void 0:i.assignedNodes(t))??[]}})}}class mt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const ft=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends mt{constructor(t){var e;if(super(t),1!==t.type||"class"!==t.name||(null==(e=t.strings)?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,r;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&(null==(i=this.nt)||!i.has(t))&&this.st.add(t);return this.render(e)}const o=t.element.classList;for(const t of this.st)t in e||(o.remove(t),this.st.delete(t));for(const t in e){const i=!!e[t];i===this.st.has(t)||null!=(r=this.nt)&&r.has(t)||(i?(o.add(t),this.st.add(t)):(o.remove(t),this.st.delete(t)))}return j}}),_t=a`var(--ds-vfi-outline-width, 0.1875rem)`,bt=a`var(--ds-vfi-outline-style, dotted)`,$t=a`var(--ds-vfi-outline-offset, 0.25rem)`,yt=a`calc(calc(${_t} + 0.1875rem) * -1)`,wt=(a`calc(calc(${_t}) * -1)`,a`var(--ds-vfi-text-color, currentcolor ${bt} ${_t})`),Et=a`
  outline: ${wt};
`,At=a`
  ${Et}
  outline-offset: ${yt};
`,St=a`
  ${Et}
  outline-offset: ${$t};
`,Ct="transparent",Bt="0.75rem",Pt="#0067b8",Tt="rgba(0, 0, 0, 0.1)",Ht="rgba(0, 103, 184, 0.15)",xt="#0067b8",Lt="#fff",kt="#0067b8",Ot="action-trigger",Mt="button",It="button--faint",Nt="button--outline",Rt="button--link",Ut="small",Dt="medium",zt="large",Gt={gap:"0.4375em",fontWeight:"600",borderWidth:"0.125rem",borderColor:Ct,borderRadius:"0.25rem",backgroundColor:Pt,color:Lt,depth:"0 0 0 0 rgba(0, 0, 0, 0.12), 0 0 0 0 rgba(0, 0, 0, 0.12)",hoverBorderColor:Ct,hoverBackgroundColor:Pt,hoverBackgroundImage:`linear-gradient(var(--ds-theme-background-accent-strong-hover, ${Tt}), var(--ds-theme-background-accent-strong-hover, ${Tt}))`,hoverColor:Lt,hoverDepth:"0 0 0.25rem 0 rgba(0, 0, 0, 0.12), 0 0 0.25rem 0 rgba(0, 0, 0, 0.12)",disabledOpacity:"0.3",defaultPaddingBlockEnd:"0.625rem",defaultPaddingBlockStart:"0.625rem",defaultPaddingInlineEnd:Bt,defaultPaddingInlineStart:Bt,defaultFontSize:"1rem",smallPaddingBlockEnd:"0.5625rem",smallPaddingBlockStart:"0.5625rem",smallPaddingInlineEnd:Bt,smallPaddingInlineStart:Bt,smallFontSize:"0.875rem",mediumPaddingBlockEnd:"0.625rem",mediumPaddingBlockStart:"0.625rem",mediumPaddingInlineEnd:Bt,mediumPaddingInlineStart:Bt,mediumFontSize:"1rem",largePaddingBlockEnd:"0.8125rem",largePaddingBlockStart:"0.8125rem",largePaddingInlineEnd:Bt,largePaddingInlineStart:Bt,largeFontSize:"1.125rem",pillBorderRadius:"60rem",outlineBorderColor:"currentcolor",outlineBackgroundColor:Ct,outlineColor:kt,outlineHoverBorderColor:"currentcolor",outlineHoverBackgroundColor:Ct,outlineHoverBackgroundImage:`linear-gradient(var(--ds-theme-background-accent-subtle-normal, ${Ht}), var(--ds-theme-background-accent-subtle-normal, ${Ht}))`,outlineHoverColor:kt,faintBorderColor:Ct,faintBackgroundColor:Ct,faintBackgroundImage:`linear-gradient(var(--ds-theme-background-accent-subtle-normal, ${Ht}), var(--ds-theme-background-accent-subtle-normal, ${Ht}))`,faintColor:kt,faintHoverBorderColor:Ct,faintHoverBackgroundColor:Ct,faintHoverBackgroundImage:"none",faintHoverColor:kt,linkColor:kt,linkInactiveColor:"#757575",activeBorderColor:"#0067b8",activeBackgroundColor:"#fff",activeBackgroundImage:`linear-gradient(var(--ds-theme-background-accent-subtle-normal, ${Ht}), var(--ds-theme-background-accent-subtle-normal, ${Ht}))`,activeColor:kt,outlineActiveBorderColor:Ct,outlineActiveBackgroundColor:xt,outlineActiveBackgroundImage:"none",outlineActiveColor:Lt,faintActiveBorderColor:Ct,faintActiveBackgroundColor:xt,faintActiveBackgroundImage:"none",faintActiveColor:Lt},Zt=a`
  /**
 * Remove the default 'border-radius' that macOS Chrome adds
 * Details at https://github.com/twbs/bootstrap/issues/24093
 */
  border-radius: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  display: inline-flex;
  align-items: center;
  border: 0 solid transparent;
  cursor: pointer;
`,jt=a`
  :host([appearance^='${s(Mt)}']) a,
  :host([appearance^='${s(Mt)}']) button {
    justify-content: center;
    gap: var(--ds-button-gap, ${s(Gt.gap)});
    font-weight: var(--ds-button-font-weight, ${s(Gt.fontWeight)});
    border-width: var(--ds-button-border-width, ${s(Gt.borderWidth)});
    border-color: var(
      --ds-button-border-color,
      var(--ds-color-transparent, ${s(Gt.borderColor)})
    );
    border-radius: var(
      --ds-button-border-radius,
      var(--ds-radii-10, ${s(Gt.borderRadius)})
    );
    background-color: var(
      --ds-button-background-color,
      var(
        --ds-theme-background-accent-strong-normal,
        ${s(Gt.backgroundColor)}
      )
    );
    color: var(
      --ds-button-color,
      var(--ds-theme-foreground-accent-strong-normal, ${s(Gt.color)})
    );
    text-decoration: none;
    line-height: 1;
    padding-inline-end: var(
      --ds-button-default-padding-inline-end,
      ${s(Gt.defaultPaddingInlineEnd)}
    );
    padding-inline-start: var(
      --ds-button-default-padding-inline-start,
      ${s(Gt.defaultPaddingInlineEnd)}
    );
    padding-block-end: var(
      --ds-button-default-padding-block-end,
      ${s(Gt.defaultPaddingBlockEnd)}
    );
    padding-block-start: var(
      --ds-button-default-padding-block-start,
      ${s(Gt.defaultPaddingBlockStart)}
    );
    font-size: var(
      --ds-button-default-font-size,
      ${s(Gt.defaultFontSize)}
    );
    box-shadow: var(
      --ds-button-box-shadow,
      var(--ds-depth-none, ${s(Gt.depth)})
    );
  }

  :host([appearance^='${s(Mt)}']) a:focus,
  :host([appearance^='${s(Mt)}']) button:focus {
    ${At}
  }

  :host([appearance^='${s(Mt)}']:not([disabled])) a:hover,
  :host([appearance^='${s(Mt)}']:not([disabled])) button:hover,
  :host([appearance^='${s(Mt)}']:not([disabled])) a:focus,
  :host([appearance^='${s(Mt)}']:not([disabled])) button:focus {
    border-color: var(
      --ds-button-hover-border-color,
      var(--ds-color-transparent, ${s(Gt.hoverBorderColor)})
    );
    background-color: var(
      --ds-button-hover-background-color,
      var(
        --ds-theme-background-accent-strong-normal,
        ${s(Gt.hoverBackgroundColor)}
      )
    );
    background-image: var(
      --ds-button-hover-background-image,
      ${s(Gt.hoverBackgroundImage)}
    );
    color: var(
      --ds-button-hover-color,
      var(
        --ds-theme-foreground-accent-strong-normal,
        ${s(Gt.hoverColor)}
      )
    );
    box-shadow: var(
      --ds-button-hover-box-shadow,
      var(--ds-depth-4, ${s(Gt.hoverDepth)})
    );
  }

  /* TODO: button only styles (do not apply to anchor styled buttons)
   *  - inactive
   *  - disabled
   *  - link button
   *  - active
   */

  /* ------- Button disabled -------- */

  :host([appearance^='${s(Mt)}'][disabled]) button {
    opacity: var(--ds-button-disabled-opacity, ${s(Gt.disabledOpacity)});
    background-image: none;
    box-shadow: none;
  }

  /* ------- Button active -------- */

  :host([appearance='${s(Mt)}'][active]:not([disabled])) button {
    border-color: var(
      --ds-button-active-border-color,
      var(
        --ds-theme-border-accent-strong-normal,
        ${s(Gt.activeBorderColor)}
      )
    );
    background-color: var(
      --ds-button-active-background-color,
      var(
        --ds-theme-background-neutral-fade,
        ${s(Gt.activeBackgroundColor)}
      )
    );
    background-image: var(
      --ds-button-active-background-image,
      ${s(Gt.activeBackgroundImage)}
    );
    color: var(
      --ds-button-active-color,
      var(
        --ds-theme-foreground-accent-subtle-normal,
        ${s(Gt.activeColor)}
      )
    );
  }

  /* ------- Button active HCM -------- */

  :host(
      [appearance^='${s(Mt)}']:not(
          [appearance='${s(Rt)}']
        )[active]:not([disabled])
    )
    button {
    @media (forced-colors: active) {
      color: CanvasText;
      background-color: SelectedItem;
    }
  }

  /* ------- Button small -------- */

  :host(
      [appearance^='${s(Mt)}'][size='${s(Ut)}']
    )
    a,
  :host(
      [appearance^='${s(Mt)}'][size='${s(Ut)}']
    )
    button {
    padding-inline-end: var(
      --ds-button-small-padding-inline-end,
      ${s(Gt.smallPaddingInlineEnd)}
    );
    padding-inline-start: var(
      --ds-button-small-padding-inline-start,
      ${s(Gt.smallPaddingInlineEnd)}
    );
    padding-block-end: var(
      --ds-button-small-padding-block-end,
      ${s(Gt.smallPaddingBlockEnd)}
    );
    padding-block-start: var(
      --ds-button-small-padding-block-end,
      ${s(Gt.smallPaddingBlockEnd)}
    );
    font-size: var(--ds-button-small-font-size, ${s(Gt.smallFontSize)});
  }

  /* ------- Button medium -------- */

  :host(
      [appearance^='${s(Mt)}'][size='${s(Dt)}']
    )
    a,
  :host(
      [appearance^='${s(Mt)}'][size='${s(Dt)}']
    )
    button {
    padding-inline-end: var(
      --ds-button-medium-padding-inline-end,
      ${s(Gt.mediumPaddingInlineEnd)}
    );
    padding-inline-start: var(
      --ds-button-medium-padding-inline-start,
      ${s(Gt.mediumPaddingInlineEnd)}
    );
    padding-block-end: var(
      --ds-button-medium-padding-block-end,
      ${s(Gt.mediumPaddingBlockEnd)}
    );
    padding-block-start: var(
      --ds-button-medium-padding-block-end,
      ${s(Gt.mediumPaddingBlockEnd)}
    );
    font-size: var(
      --ds-button-medium-font-size,
      ${s(Gt.mediumFontSize)}
    );
  }

  /* ------- Button large -------- */

  :host(
      [appearance^='${s(Mt)}'][size='${s(zt)}']
    )
    a,
  :host(
      [appearance^='${s(Mt)}'][size='${s(zt)}']
    )
    button {
    padding-inline-end: var(
      --ds-button-large-padding-inline-end,
      ${s(Gt.largePaddingInlineEnd)}
    );
    padding-inline-start: var(
      --ds-button-large-padding-inline-start,
      ${s(Gt.largePaddingInlineEnd)}
    );
    padding-block-end: var(
      --ds-button-large-padding-block-end,
      ${s(Gt.largePaddingBlockEnd)}
    );
    padding-block-start: var(
      --ds-button-large-padding-block-end,
      ${s(Gt.largePaddingBlockEnd)}
    );
    font-size: var(--ds-button-large-font-size, ${s(Gt.largeFontSize)});
  }

  /* ------- Button block -------- */

  :host([appearance^='${s(Mt)}'][block]) a,
  :host([appearance^='${s(Mt)}'][block]) button {
    display: flex;
    width: 100%;
  }

  /* ------- Button pill -------- */

  :host([appearance^='${s(Mt)}'][pill]) a,
  :host([appearance^='${s(Mt)}'][pill]) button {
    border-radius: var(
      --ds-button-pill-border-radius,
      var(--ds-radii-pill, ${s(Gt.pillBorderRadius)})
    );
  }

  /* ------- Button outline -------- */

  :host([appearance^='${s(Nt)}']) a,
  :host([appearance^='${s(Nt)}']) button {
    background-color: var(
      --ds-button-outline-background-color,
      var(--ds-color-transparent, ${s(Gt.outlineBackgroundColor)})
    );
    color: var(
      --ds-button-outline-color,
      var(
        --ds-theme-foreground-accent-subtle-normal,
        ${s(Gt.outlineColor)}
      )
    );
    border-color: var(
      --ds-button-outline-border-color,
      ${s(Gt.outlineBorderColor)}
    );
  }

  :host([appearance^='${s(Nt)}']:not([disabled])) a:hover,
  :host([appearance^='${s(Nt)}']:not([disabled])) button:hover,
  :host([appearance^='${s(Nt)}']:not([disabled])) a:focus,
  :host([appearance^='${s(Nt)}']:not([disabled])) button:focus {
    border-color: var(
      --ds-button-outline-hover-border-color,
      ${s(Gt.outlineHoverBorderColor)}
    );
    background-color: var(
      --ds-button-outline-hover-background-color,
      var(--ds-color-transparent, ${s(Gt.outlineHoverBackgroundColor)})
    );
    background-image: var(
      --ds-button-outline-hover-background-image,
      ${s(Gt.outlineHoverBackgroundImage)}
    );
    color: var(
      --ds-button-outline-hover-color,
      var(
        --ds-theme-foreground-accent-subtle-normal,
        ${s(Gt.outlineHoverColor)}
      )
    );
    box-shadow: none;
  }

  /* ------- Button outline active -------- */

  :host([appearance^='${s(Nt)}'][active]) button,
  :host([appearance^='${s(Nt)}'][active]) button:focus,
  :host([appearance^='${s(Nt)}'][active]) button:hover {
    color: var(
      --ds-button-outline-active-color,
      var(
        --ds-theme-foreground-accent-strong-normal,
        ${s(Gt.outlineActiveColor)}
      )
    );
    border-color: var(
      --ds-button-outline-active-border-color,
      ${s(Gt.outlineActiveBorderColor)}
    );
    background-color: var(
      --ds-button-outline-active-background-color,
      var(
        --ds-theme-background-base-color,
        ${s(Gt.outlineActiveBackgroundColor)}
      )
    );
    background-image: var(
      --ds-button-outline-active-background-image,
      ${s(Gt.outlineActiveBackgroundImage)}
    );
  }

  /* ------- Button faint -------- */

  :host([appearance^='${s(It)}']) a,
  :host([appearance^='${s(It)}']) button {
    background-color: var(
      --ds-button-faint-background-color,
      var(--ds-color-transparent, ${s(Gt.faintBackgroundColor)})
    );
    background-image: var(
      --ds-button-faint-background-image,
      ${s(Gt.faintBackgroundImage)}
    );
    color: var(
      --ds-button-faint-color,
      var(
        --ds-theme-foreground-accent-subtle-normal,
        ${s(Gt.faintColor)}
      )
    );
    border-color: var(
      --ds-button-faint-border-color,
      var(--ds-color-transparent, ${s(Gt.faintBorderColor)})
    );
  }

  :host([appearance^='${s(It)}']:not([disabled])) a:hover,
  :host([appearance^='${s(It)}']:not([disabled])) button:hover,
  :host([appearance^='${s(It)}']:not([disabled])) a:focus,
  :host([appearance^='${s(It)}']:not([disabled])) button:focus {
    border-color: var(
      --ds-button-faint-hover-border-color,
      var(--ds-color-transparent, ${s(Gt.faintHoverBorderColor)})
    );
    background-color: var(
      --ds-button-faint-hover-background-color,
      var(--ds-color-transparent, ${s(Gt.faintHoverBackgroundColor)})
    );
    background-image: var(
      --ds-button-faint-hover-background-image,
      ${s(Gt.faintHoverBackgroundImage)}
    );
    color: var(
      --ds-button-faint-hover-color,
      var(
        --ds-theme-foreground-accent-subtle-normal,
        ${s(Gt.faintHoverColor)}
      )
    );
  }

  /* ------- Button faint active -------- */

  :host([appearance^='${s(It)}'][active]) button,
  :host([appearance^='${s(It)}'][active]) button:focus,
  :host([appearance^='${s(It)}'][active]) button:hover {
    color: var(
      --ds-button-faint-active-color,
      var(
        --ds-theme-foreground-accent-strong-normal,
        ${s(Gt.faintActiveColor)}
      )
    );
    border-color: var(
      --ds-button-faint-active-border-color,
      var(--ds-color-transparent, ${s(Gt.faintActiveBorderColor)})
    );
    background-color: var(
      --ds-button-faint-active-background-color,
      var(
        --ds-theme-background-base-color,
        ${s(Gt.faintActiveBackgroundColor)}
      )
    );
    background-image: var(
      --ds-button-faint-active-background-image,
      ${s(Gt.faintActiveBackgroundImage)}
    );
  }

  /* ------- Button link -------- */

  :host([appearance^='${s(Rt)}']) button,
  :host([appearance^='${s(Rt)}']:not([disabled])) button:hover,
  :host([appearance^='${s(Rt)}']:not([disabled])) button:focus {
    border: none;
    background: transparent;
    border-radius: 0;
    color: var(
      --ds-button-link-color,
      var(--ds-theme-foreground-accent-subtle-normal, ${s(Gt.linkColor)})
    );
    text-decoration: underline;
    box-shadow: none;
  }

  :host([appearance^='${s(Rt)}'][inactive]) button,
  :host([appearance^='${s(Rt)}'][inactive]:not([disabled]))
    button:hover,
  :host([appearance^='${s(Rt)}'][inactive]:not([disabled]))
    button:focus {
    opacity: 1;
    text-decoration: none;
    color: var(
      --ds-button-link-inactive-color,
      var(--ds-color-gray-500, ${s(Gt.linkInactiveColor)})
    );
    cursor: default;
  }
`,Ft=new Set,Vt=new MutationObserver(function(){Wt=document.documentElement.dir||"ltr",Xt=document.documentElement.lang||navigator.language,[...Ft.keys()].forEach(t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()})});let Wt=document.documentElement.dir||"ltr",Xt=document.documentElement.lang||navigator.language;Vt.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});class Kt{constructor(t){this._host=t,this._host.addController(this)}hostConnected(){Ft.add(this._host)}hostDisconnected(){Ft.delete(this._host)}dir(){return`${this._host.dir||Wt}`.toLowerCase()}lang(){return`${this._host.lang||Xt}`.toLowerCase()}}const qt="medium",Yt=t=>t??F;var Jt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,te=(t,e,i,r)=>{for(var o,n=r>1?void 0:r?Qt(e,i):e,s=t.length-1;s>=0;s--)(o=t[s])&&(n=(r?o(e,i,n):o(n))||n);return r&&n&&Jt(e,i,n),n};const ee=t=>{class e extends t{constructor(){super(...arguments),this.ariaDisabled=null,this.ariaExpanded=null}renderAnchor(t,e,i="base"){const r={...e};return Z`
        <a
          aria-disabled="${Yt(this.ariaDisabled)}"
          aria-expanded="${Yt(this.ariaExpanded)}"
          class=${ft(r)}
          download="${Yt(this.download)}"
          href=${Yt(this.href)}
          hreflang="${Yt(this.hreflang)}"
          part=${i}
          ping="${Yt(this.ping)}"
          referrerpolicy="${Yt(this.referrerpolicy)}"
          rel="${Yt(this.rel)}"
          target="${Yt(this.target)}"
          type="${Yt(this.type)}"
        >
          ${t}
        </a>
      `}}return te([dt({attribute:"aria-disabled"})],e.prototype,"ariaDisabled",2),te([dt({attribute:"aria-expanded"})],e.prototype,"ariaExpanded",2),te([dt()],e.prototype,"download",2),te([dt()],e.prototype,"href",2),te([dt()],e.prototype,"hreflang",2),te([dt()],e.prototype,"ping",2),te([dt()],e.prototype,"referrerpolicy",2),te([dt()],e.prototype,"rel",2),te([dt()],e.prototype,"target",2),te([dt()],e.prototype,"type",2),e},ie=t=>a`
    ${s(`transition: ${t};`)}

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `,re=(a`
  ${ie("var(--ds-transition-fade, opacity 0.15s linear)")}
`,"0"),oe=kt,ne=a`
  :host([appearance^='${s(Ot)}']) a,
  :host([appearance^='${s(Ot)}']) button {
    border: none;
    padding-block: var(
      --ds-action-trigger-padding-block,
      ${s(re)}
    );
    padding-inline: var(
      --ds-action-trigger-padding-inline,
      ${s("0")}
    );
    background: transparent;
    gap: var(--ds-action-trigger-gap, ${s("0.4375em")});
    font-weight: var(
      --ds-action-trigger-font-weight,
      ${s("600")}
    );
    font-size: var(
      --ds-action-trigger-font-size,
      ${s("1rem")}
    );
    color: var(
      --ds-action-trigger-color,
      var(
        --ds-theme-foreground-accent-subtle-normal,
        ${s(oe)}
      )
    );
    text-decoration: underline;
  }

  :host([appearance^='${s(Ot)}']) a:focus,
  :host([appearance^='${s(Ot)}']) button:focus {
    ${St}
  }

  /* TODO: disabled and inactive styles for button only, they should not apply to anchors */

  :host([appearance^='${s(Ot)}'])
    a.action-trigger--no-underline,
  :host([appearance^='${s(Ot)}'])
    button.action-trigger--no-underline {
    text-decoration: none;
  }

  :host([appearance^='${s(Ot)}'][disabled]) button {
    opacity: var(
      --ds-action-trigger-disabled-opacity,
      ${s("0.3")}
    );
    background-image: none;
    box-shadow: none;
  }

  :host([appearance='${s(Ot)}'].inactive) button {
    color: var(
      --ds-action-trigger-inactive-color,
      ${s("#757575")}
    );
    text-decoration: none;
  }
`,se="1em",ae="0.8125em",le="1em",he="1.25em",ce="1.5em",de=a`
  :host {
    display: inline-block;
    width: var(--ds-icon-size-default, ${s(se)});
    min-width: var(--ds-icon-size-default, ${s(se)});
    height: var(--ds-icon-size-default, ${s(se)});
    min-height: var(--ds-icon-size-default, ${s(se)});
    box-sizing: content-box;
  }

  :host([size='xsmall']) {
    width: var(--ds-icon-size-xsmall, ${s(ae)});
    min-width: var(--ds-icon-size-xsmall, ${s(ae)});
    height: var(--ds-icon-size-xsmall, ${s(ae)});
    min-height: var(--ds-icon-size-xsmall, ${s(ae)});
  }

  :host([size='small']) {
    width: var(--ds-icon-size-small, ${s(le)});
    min-width: var(--ds-icon-size-small, ${s(le)});
    height: var(--ds-icon-size-small, ${s(le)});
    min-height: var(--ds-icon-size-small, ${s(le)});
  }

  :host([size='medium']) {
    width: var(--ds-icon-size-medium, ${s(he)});
    min-width: var(--ds-icon-size-medium, ${s(he)});
    height: var(--ds-icon-size-medium, ${s(he)});
    min-height: var(--ds-icon-size-medium, ${s(he)});
  }

  :host([size='large']) {
    width: var(--ds-icon-size-large, ${s(ce)});
    min-width: var(--ds-icon-size-large, ${s(ce)});
    height: var(--ds-icon-size-large, ${s(ce)});
    min-height: var(--ds-icon-size-large, ${s(ce)});
  }

  svg,
  ::slotted(svg) {
    display: block;
    height: 100%;
    width: 100%;
    fill: currentColor;
  }
`,ue=Object.assign({"../../../../../../node_modules/@fluentui/svg-icons/icons/add_circle_24_filled.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 5c-.38 0-.7.28-.74.65l-.01.1v3.5h-3.5a.75.75 0 0 0-.1 1.5h3.6v3.5a.75.75 0 0 0 1.5.1v-3.6h3.5a.75.75 0 0 0 .1-1.5h-3.6v-3.5A.75.75 0 0 0 12 7Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/add_circle_24_regular.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM12 7c.41 0 .75.34.75.75v3.5h3.5a.75.75 0 0 1 0 1.5h-3.5v3.5a.75.75 0 0 1-1.5 0v-3.5h-3.5a.75.75 0 0 1 0-1.5h3.5v-3.5c0-.41.34-.75.75-.75Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/arrow_up_24_filled.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.28 10.3a1 1 0 0 0 1.43 1.4L11 6.33V20a1 1 0 1 0 2 0V6.33l5.28 5.37a1 1 0 0 0 1.43-1.4l-6.82-6.93c-.5-.5-1.3-.5-1.78 0L4.28 10.3Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/arrow_up_24_regular.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.2 10.73a.75.75 0 0 0 1.1 1.04l5.95-6.25v14.73a.75.75 0 0 0 1.5 0V5.52l5.95 6.25a.75.75 0 0 0 1.1-1.04l-7.08-7.42a1 1 0 0 0-1.44 0L4.2 10.73Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/checkmark_24_filled.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m8.5 16.59-3.8-3.8a1 1 0 0 0-1.4 1.42l4.5 4.5a1 1 0 0 0 1.4 0l11-11a1 1 0 0 0-1.4-1.42L8.5 16.6Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/checkmark_24_regular.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.53 12.97a.75.75 0 0 0-1.06 1.06l4.5 4.5c.3.3.77.3 1.06 0l11-11a.75.75 0 0 0-1.06-1.06L8.5 16.94l-3.97-3.97Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_down_24_filled.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.3 8.3a1 1 0 0 1 1.4 0l6.3 6.29 6.3-6.3a1 1 0 1 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-7-7a1 1 0 0 1 0-1.42Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_down_24_regular.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.22 8.47c.3-.3.77-.3 1.06 0L12 15.19l6.72-6.72a.75.75 0 1 1 1.06 1.06l-7.25 7.25c-.3.3-.77.3-1.06 0L4.22 9.53a.75.75 0 0 1 0-1.06Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_left_24_filled.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.7 4.3a1 1 0 0 1 0 1.4L9.42 12l6.3 6.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 0Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_left_24_regular.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.53 4.22c.3.3.3.77 0 1.06L8.81 12l6.72 6.72a.75.75 0 1 1-1.06 1.06l-7.25-7.25a.75.75 0 0 1 0-1.06l7.25-7.25c.3-.3.77-.3 1.06 0Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_right_24_filled.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.3 4.3a1 1 0 0 0 0 1.4l6.29 6.3-6.3 6.3a1 1 0 1 0 1.42 1.4l7-7a1 1 0 0 0 0-1.4l-7-7a1 1 0 0 0-1.42 0Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_right_24_regular.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.47 4.22c-.3.3-.3.77 0 1.06L15.19 12l-6.72 6.72a.75.75 0 1 0 1.06 1.06l7.25-7.25c.3-.3.3-.77 0-1.06L9.53 4.22a.75.75 0 0 0-1.06 0Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_up_24_filled.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.3 15.7a1 1 0 0 0 1.4 0L12 9.42l6.3 6.3a1 1 0 0 0 1.4-1.42l-7-7a1 1 0 0 0-1.4 0l-7 7a1 1 0 0 0 0 1.42Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/chevron_up_24_regular.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.22 15.53c.3.3.77.3 1.06 0L12 8.81l6.72 6.72a.75.75 0 1 0 1.06-1.06l-7.25-7.25a.75.75 0 0 0-1.06 0l-7.25 7.25c-.3.3-.3.77 0 1.06Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/circle_24_filled.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/circle_24_regular.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/dismiss_24_filled.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.21 4.39.08-.1a1 1 0 0 1 1.32-.08l.1.08L12 10.6l6.3-6.3a1 1 0 1 1 1.4 1.42L13.42 12l6.3 6.3a1 1 0 0 1 .08 1.31l-.08.1a1 1 0 0 1-1.32.08l-.1-.08L12 13.4l-6.3 6.3a1 1 0 0 1-1.4-1.42L10.58 12l-6.3-6.3a1 1 0 0 1-.08-1.31l.08-.1-.08.1Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/dismiss_24_regular.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.4 4.55.07-.08a.75.75 0 0 1 .98-.07l.08.07L12 10.94l6.47-6.47a.75.75 0 1 1 1.06 1.06L13.06 12l6.47 6.47c.27.27.3.68.07.98l-.07.08a.75.75 0 0 1-.98.07l-.08-.07L12 13.06l-6.47 6.47a.75.75 0 0 1-1.06-1.06L10.94 12 4.47 5.53a.75.75 0 0 1-.07-.98l.07-.08-.07.08Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/pause_circle_24_filled.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1.5 6.25v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 1.5 0Zm4.5 0v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 1.5 0Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/pause_circle_24_regular.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 8.25a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0v-7.5Zm4.5 0a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0v-7.5ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/play_circle_24_filled.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm8.86-3.85A1.25 1.25 0 0 0 9 9.25v5.5c0 .95 1.02 1.56 1.86 1.1l5.75-3.2a.75.75 0 0 0 0-1.3l-5.75-3.2Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/play_circle_24_regular.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.86 8.15A1.25 1.25 0 0 0 9 9.25v5.5c0 .95 1.02 1.56 1.86 1.1l5.75-3.2a.75.75 0 0 0 0-1.3l-5.75-3.2ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/search_24_filled.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 10a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-7a7 7 0 1 0 4.2 12.6l5.1 5.1a1 1 0 0 0 1.4-1.4l-5.1-5.1A7 7 0 0 0 10 3Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/search_24_regular.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 10a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0ZM10 3a7 7 0 1 0 4.4 12.45l5.32 5.33a.75.75 0 1 0 1.06-1.06l-5.33-5.33A7 7 0 0 0 10 3Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/star_24_filled.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.79 3.1c.5-1 1.92-1 2.42 0l2.36 4.78 5.27.77c1.1.16 1.55 1.52.75 2.3l-3.82 3.72.9 5.25a1.35 1.35 0 0 1-1.96 1.42L12 18.86l-4.72 2.48a1.35 1.35 0 0 1-1.96-1.42l.9-5.25-3.81-3.72c-.8-.78-.36-2.14.75-2.3l5.27-.77 2.36-4.78Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/star_24_regular.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.79 3.1c.5-1 1.92-1 2.42 0l2.36 4.78 5.27.77c1.1.16 1.55 1.52.75 2.3l-3.82 3.72.9 5.25a1.35 1.35 0 0 1-1.96 1.42L12 18.86l-4.72 2.48a1.35 1.35 0 0 1-1.96-1.42l.9-5.25-3.81-3.72c-.8-.78-.36-2.14.75-2.3l5.27-.77 2.36-4.78Zm1.2.94L9.75 8.6c-.2.4-.58.68-1.02.74l-5.05.74 3.66 3.56c.32.3.46.76.39 1.2l-.87 5.02 4.52-2.37c.4-.2.86-.2 1.26 0l4.51 2.37-.86-5.03c-.07-.43.07-.88.39-1.2l3.65-3.55-5.05-.74a1.35 1.35 0 0 1-1.01-.74L12 4.04Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/subtract_circle_24_filled.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm-4.25 9.25a.75.75 0 0 0-.1 1.5h8.6a.75.75 0 0 0 .1-1.5h-8.6Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/subtract_circle_24_regular.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm4.25 7.75a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h8.5Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/warning_24_filled.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.03 3.66a2.25 2.25 0 0 1 3.94 0l7.74 14A2.25 2.25 0 0 1 19.74 21H4.25a2.25 2.25 0 0 1-1.97-3.34l7.75-14ZM13 17a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-.26-7.85a.75.75 0 0 0-1.5.1v4.5l.02.1a.75.75 0 0 0 1.49-.1v-4.5l-.01-.1Z"/></svg>',"../../../../../../node_modules/@fluentui/svg-icons/icons/warning_24_regular.svg":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 17a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-.26-7.85a.75.75 0 0 0-1.5.1l.01 4.5v.1a.75.75 0 0 0 1.5-.1v-4.5l-.01-.1Zm1.23-5.5a2.25 2.25 0 0 0-3.94 0L2.3 17.67A2.25 2.25 0 0 0 4.26 21h15.49c1.71 0 2.8-1.84 1.96-3.34l-7.74-14Zm-2.63.74a.75.75 0 0 1 1.32 0l7.74 14a.75.75 0 0 1-.65 1.11H4.25a.75.75 0 0 1-.65-1.11l7.74-14Z"/></svg>'}),pe=Object.keys(ue);var ge=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,me=(t,e,i,r)=>{for(var o,n=r>1?void 0:r?ve(e,i):e,s=t.length-1;s>=0;s--)(o=t[s])&&(n=(r?o(e,i,n):o(n))||n);return r&&n&&ge(e,i,n),n};let fe=class extends nt{constructor(){super(...arguments),this.filled=!1,this.ariaLabel=null}updated(t){t.has("ariaLabel")&&this._setAriaAttrs(),t.has("icon")&&this.setIcon()}setIcon(){var t;if(this._slotContents&&0===this._slotContents.length&&this.icon){const e=(({name:t="",filled:e})=>{const i=`../../../../../../node_modules/@fluentui/svg-icons/icons/${t.replace("-","_").toLowerCase()}_24_${e?"filled":"regular"}.svg`;return((t="")=>pe.includes(t))(i)?ue[i]:""})({name:this.icon,filled:this.filled}),i=e&&(new DOMParser).parseFromString(e,"text/html"),r=i&&i.body.querySelector("svg");r&&(this.removeIcon(),null==(t=this.shadowRoot)||t.append(r))}}removeIcon(){var t;const e=null==(t=this.shadowRoot)?void 0:t.querySelector("svg");null==e||e.remove()}_setAriaAttrs(){this.ariaLabel?(this.setAttribute("role","img"),this.removeAttribute("aria-hidden")):(this.setAttribute("aria-hidden","true"),this.removeAttribute("role"))}render(){return Z` <slot></slot> `}};fe.styles=[de],me([dt()],fe.prototype,"icon",2),me([dt()],fe.prototype,"size",2),me([dt({type:Boolean})],fe.prototype,"filled",2),me([dt({attribute:"aria-label"})],fe.prototype,"ariaLabel",2),me([gt()],fe.prototype,"_slotContents",2),fe=me([lt("moray-icon")],fe);const _e="cta",be="cta--reverse",$e=kt,ye="0.25em",we=a`
  /* Basic links */
  a {
    ${Zt}
    gap: var(--ds-anchor-gap, ${s("0.375rem")});
    color: var(
      --ds-anchor-color,
      var(--ds-theme-foreground-accent-subtle-normal, ${s($e)})
    );
  }

  a[href]:focus {
    ${Et}
    outline-offset: 1px; /* Webkit browser default */
  }

  .first,
  .last {
    display: inline-flex;
  }

  /* CTA and CTA reverse */
  :host([appearance^='${s(_e)}']) a {
    text-decoration: none;
    font-weight: var(--ds-cta-font-weight, ${s("600")});
  }

  :host([appearance='${s(_e)}']) moray-icon:not(.rtl),
  :host([appearance='${s(be)}']) moray-icon.rtl {
    transform: translateX(
      calc(var(--ds-cta-translate-x, ${s(ye)}) * -1)
    );
  }

  :host([appearance='${s(_e)}']) moray-icon.rtl,
  :host([appearance='${s(be)}']) moray-icon:not(.rtl) {
    transform: translateX(var(--ds-cta-translate-x, ${s(ye)}));
  }

  :host([appearance^='${s(_e)}']) a:hover,
  :host([appearance^='${s(_e)}']) a:focus {
    text-decoration: underline;
  }

  :host([appearance^='${s(_e)}']) a:hover moray-icon,
  :host([appearance^='${s(_e)}']) a:focus moray-icon {
    transform: translateX(0);

    ${ie(`var(--ds-cta-transition, ${s("transform 0.6s cubic-bezier(0.19, 1, 0.22, 1)")})`)}
  }

  /* Action trigger */

  ${ne}

  /* Button */

  ${jt}
`;var Ee=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,Se=(t,e,i,r)=>{for(var o,n=r>1?void 0:r?Ae(e,i):e,s=t.length-1;s>=0;s--)(o=t[s])&&(n=(r?o(e,i,n):o(n))||n);return r&&n&&Ee(e,i,n),n};let Ce=class extends(ee(nt)){constructor(){super(...arguments),this.localize=new Kt(this),this.block=!1,this.pill=!1,this._firstSlotEmpty=!0,this._lastSlotEmpty=!0,this._slottedImgIcon=!1}_handleSlotChange(){this._firstSlotEmpty=0===this._firstSlot.length,this._lastSlotEmpty=0===this._lastSlot.length,this._slottedImgIcon=this._checkSlotsForImgIcon()}_checkSlotsForImgIcon(){return[...this._defaultSlot,...this._firstSlot,...this._lastSlot].some(t=>"img"===t.nodeName.toLowerCase()||"moray-icon"===t.nodeName.toLowerCase())}render(){const t="rtl"===this.localize.dir(),e={rtl:t};let i=Z``,r=Z``;this.appearance===_e?r=Z`
        <moray-icon
          icon="chevron-${t?"left":"right"}"
          size=${qt}
          class=${ft(e)}
        ></moray-icon>
      `:this.appearance===be&&(i=Z`
        <moray-icon
          icon="chevron-${t?"right":"left"}"
          size=${qt}
          class=${ft(e)}
        ></moray-icon>
      `);const o={"action-trigger--no-underline":this.appearance===Ot&&this._slottedImgIcon};return this.renderAnchor(Z`
        <span
          part="first"
          class="first"
          style="${this._firstSlotEmpty?"display: none":F}"
        >
          <slot name="first" @slotchange=${this._handleSlotChange}></slot>
        </span>
        ${i}
        <slot @slotchange=${this._handleSlotChange}></slot>
        ${r}
        <span part="last" class="last" style="${this._lastSlotEmpty?"display: none":F}">
          <slot name="last" @slotchange=${this._handleSlotChange}></slot>
        </span>
      `,o)}};Ce.styles=we,Se([dt({reflect:!0})],Ce.prototype,"appearance",2),Se([dt({type:Boolean,reflect:!0})],Ce.prototype,"block",2),Se([dt({type:Boolean,reflect:!0})],Ce.prototype,"pill",2),Se([dt({reflect:!0})],Ce.prototype,"size",2),Se([gt()],Ce.prototype,"_defaultSlot",2),Se([vt({slot:"first"})],Ce.prototype,"_firstSlot",2),Se([vt({slot:"last"})],Ce.prototype,"_lastSlot",2),Se([ut()],Ce.prototype,"_firstSlotEmpty",2),Se([ut()],Ce.prototype,"_lastSlotEmpty",2),Se([ut()],Ce.prototype,"_slottedImgIcon",2),Ce=Se([lt("moray-anchor")],Ce)})()})();
document.addEventListener("DOMContentLoaded", function () {
  var pageNavElements = document.querySelectorAll(".page-nav-container");
  pageNavElements.forEach(function (pageNavElement) {
    var parentElement = pageNavElement.parentNode;
    if (parentElement != null) {
      var grandParentElement = parentElement.parentNode;
      if (grandParentElement != null) {
        var style = window.getComputedStyle(grandParentElement);
        if (style.display === "none") {
          grandParentElement.removeChild(parentElement);
        }
      }
    }
  });
});
