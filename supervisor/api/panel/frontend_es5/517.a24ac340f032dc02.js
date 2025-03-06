/*! For license information please see 517.a24ac340f032dc02.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["517"],{93958:function(t,e,i){i.d(e,{F:()=>v});i(71695),i(40251),i(47021);var s=i(9065),o=i(50778),n=i(92444),r=i(76688);let h=class extends n.A{};h.styles=[r.W],h=(0,s.__decorate)([(0,o.Mo)("mwc-checkbox")],h);var l=i(57243),a=i(35359),d=i(65703);let c,p,u,f=t=>t;class v extends d.K{constructor(){super(...arguments),this.left=!1,this.graphic="control"}render(){const t={"mdc-deprecated-list-item__graphic":this.left,"mdc-deprecated-list-item__meta":!this.left},e=this.renderText(),i=this.graphic&&"control"!==this.graphic&&!this.left?this.renderGraphic():(0,l.dy)(c||(c=f``)),s=this.hasMeta&&this.left?this.renderMeta():(0,l.dy)(p||(p=f``)),o=this.renderRipple();return(0,l.dy)(u||(u=f` ${0} ${0} ${0} <span class="${0}"> <mwc-checkbox reducedTouchTarget tabindex="${0}" .checked="${0}" ?disabled="${0}" @change="${0}"> </mwc-checkbox> </span> ${0} ${0}`),o,i,this.left?"":e,(0,a.$)(t),this.tabindex,this.selected,this.disabled,this.onChange,this.left?e:"",s)}async onChange(t){const e=t.target;this.selected===e.checked||(this._skipPropRequest=!0,this.selected=e.checked,await this.updateComplete,this._skipPropRequest=!1)}}(0,s.__decorate)([(0,o.IO)("slot")],v.prototype,"slotElement",void 0),(0,s.__decorate)([(0,o.IO)("mwc-checkbox")],v.prototype,"checkboxElement",void 0),(0,s.__decorate)([(0,o.Cb)({type:Boolean})],v.prototype,"left",void 0),(0,s.__decorate)([(0,o.Cb)({type:String,reflect:!0})],v.prototype,"graphic",void 0)},97536:function(t,e,i){i.d(e,{W:()=>o});let s;const o=(0,i(57243).iv)(s||(s=(t=>t)`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`))},15108:function(t,e,i){i.d(e,{jt:()=>y});i(52247),i(71695),i(92745),i(9359),i(68107),i(56475),i(31526),i(70104),i(19423),i(40251),i(46692),i(47021);var s=i(2841),o=i(92903),n=i(67753);i(52924),i(92519),i(42179),i(89256),i(24931),i(88463),i(57449),i(19814);const r=new WeakMap;let h=0;const l=new Map,a=new WeakSet,d=()=>new Promise((t=>requestAnimationFrame(t))),c=(t,e)=>{const i=t-e;return 0===i?void 0:i},p=(t,e)=>{const i=t/e;return 1===i?void 0:i},u={left:(t,e)=>{const i=c(t,e);return{value:i,transform:null==i||isNaN(i)?void 0:`translateX(${i}px)`}},top:(t,e)=>{const i=c(t,e);return{value:i,transform:null==i||isNaN(i)?void 0:`translateY(${i}px)`}},width:(t,e)=>{let i;0===e&&(e=1,i={width:"1px"});const s=p(t,e);return{value:s,overrideFrom:i,transform:null==s||isNaN(s)?void 0:`scaleX(${s})`}},height:(t,e)=>{let i;0===e&&(e=1,i={height:"1px"});const s=p(t,e);return{value:s,overrideFrom:i,transform:null==s||isNaN(s)?void 0:`scaleY(${s})`}}},f={duration:333,easing:"ease-in-out"},v=["left","top","width","height","opacity","color","background"],m=new WeakMap;class g extends n.sR{constructor(t){if(super(t),this.t=!1,this.i=null,this.o=null,this.h=!0,this.shouldLog=!1,t.type===o.pX.CHILD)throw Error("The `animate` directive must be used in attribute position.");this.createFinished()}createFinished(){var t;null!==(t=this.resolveFinished)&&void 0!==t&&t.call(this),this.finished=new Promise((t=>{this.l=t}))}async resolveFinished(){var t;null!==(t=this.l)&&void 0!==t&&t.call(this),this.l=void 0}render(t){return s.Ld}getController(){return r.get(this.u)}isDisabled(){var t;return this.options.disabled||(null===(t=this.getController())||void 0===t?void 0:t.disabled)}update(t,[e]){var i;const s=void 0===this.u;return s&&(this.u=null===(i=t.options)||void 0===i?void 0:i.host,this.u.addController(this),this.u.updateComplete.then((t=>this.t=!0)),this.element=t.element,m.set(this.element,this)),this.optionsOrCallback=e,(s||"function"!=typeof e)&&this.p(e),this.render(e)}p(t){var e,i;t=null!=t?t:{};const s=this.getController();void 0!==s&&((t=Object.assign(Object.assign({},s.defaultOptions),t)).keyframeOptions=Object.assign(Object.assign({},s.defaultOptions.keyframeOptions),t.keyframeOptions)),null!==(i=(e=t).properties)&&void 0!==i||(e.properties=v),this.options=t}m(){const t={},e=this.element.getBoundingClientRect(),i=getComputedStyle(this.element);return this.options.properties.forEach((s=>{var o;const n=null!==(o=e[s])&&void 0!==o?o:u[s]?void 0:i[s],r=Number(n);t[s]=isNaN(r)?n+"":r})),t}v(){let t,e=!0;return this.options.guard&&(t=this.options.guard(),e=((t,e)=>{if(Array.isArray(t)){if(Array.isArray(e)&&e.length===t.length&&t.every(((t,i)=>t===e[i])))return!1}else if(e===t)return!1;return!0})(t,this._)),this.h=this.t&&!this.isDisabled()&&!this.isAnimating()&&e&&this.element.isConnected,this.h&&(this._=Array.isArray(t)?Array.from(t):t),this.h}hostUpdate(){var t;"function"==typeof this.optionsOrCallback&&this.p(this.optionsOrCallback()),this.v()&&(this.A=this.m(),this.i=null!==(t=this.i)&&void 0!==t?t:this.element.parentNode,this.o=this.element.nextSibling)}async hostUpdated(){if(!this.h||!this.element.isConnected||this.options.skipInitial&&!this.isHostRendered)return;let t;this.prepare(),await d;const e=this.O(),i=this.j(this.options.keyframeOptions,e),s=this.m();if(void 0!==this.A){const{from:i,to:o}=this.N(this.A,s,e);this.log("measured",[this.A,s,i,o]),t=this.calculateKeyframes(i,o)}else{const i=l.get(this.options.inId);if(i){l.delete(this.options.inId);const{from:o,to:n}=this.N(i,s,e);t=this.calculateKeyframes(o,n),t=this.options.in?[Object.assign(Object.assign({},this.options.in[0]),t[0]),...this.options.in.slice(1),t[1]]:t,h++,t.forEach((t=>t.zIndex=h))}else this.options.in&&(t=[...this.options.in,{}])}this.animate(t,i)}resetStyles(){var t;void 0!==this.P&&(this.element.setAttribute("style",null!==(t=this.P)&&void 0!==t?t:""),this.P=void 0)}commitStyles(){var t,e;this.P=this.element.getAttribute("style"),null!==(t=this.webAnimation)&&void 0!==t&&t.commitStyles(),null===(e=this.webAnimation)||void 0===e||e.cancel()}reconnected(){}async disconnected(){var t;if(!this.h)return;if(void 0!==this.options.id&&l.set(this.options.id,this.A),void 0===this.options.out)return;if(this.prepare(),await d(),null!==(t=this.i)&&void 0!==t&&t.isConnected){const t=this.o&&this.o.parentNode===this.i?this.o:null;if(this.i.insertBefore(this.element,t),this.options.stabilizeOut){const t=this.m();this.log("stabilizing out");const e=this.A.left-t.left,i=this.A.top-t.top;!("static"===getComputedStyle(this.element).position)||0===e&&0===i||(this.element.style.position="relative"),0!==e&&(this.element.style.left=e+"px"),0!==i&&(this.element.style.top=i+"px")}}const e=this.j(this.options.keyframeOptions);await this.animate(this.options.out,e),this.element.remove()}prepare(){this.createFinished()}start(){var t,e;null===(t=(e=this.options).onStart)||void 0===t||t.call(e,this)}didFinish(t){var e,i;t&&null!==(e=(i=this.options).onComplete)&&void 0!==e&&e.call(i,this),this.A=void 0,this.animatingProperties=void 0,this.frames=void 0,this.resolveFinished()}O(){const t=[];for(let i=this.element.parentNode;i;i=null===(e=i)||void 0===e?void 0:e.parentNode){var e;const s=m.get(i);s&&!s.isDisabled()&&s&&t.push(s)}return t}get isHostRendered(){const t=a.has(this.u);return t||this.u.updateComplete.then((()=>{a.add(this.u)})),t}j(t,e=this.O()){const i=Object.assign({},f);return e.forEach((t=>Object.assign(i,t.options.keyframeOptions))),Object.assign(i,t),i}N(t,e,i){t=Object.assign({},t),e=Object.assign({},e);const s=i.map((t=>t.animatingProperties)).filter((t=>void 0!==t));let o=1,n=1;return s.length>0&&(s.forEach((t=>{t.width&&(o/=t.width),t.height&&(n/=t.height)})),void 0!==t.left&&void 0!==e.left&&(t.left=o*t.left,e.left=o*e.left),void 0!==t.top&&void 0!==e.top&&(t.top=n*t.top,e.top=n*e.top)),{from:t,to:e}}calculateKeyframes(t,e,i=!1){const s={},o={};let n=!1;const r={};for(const l in e){const i=t[l],a=e[l];if(l in u){var h;const t=u[l];if(void 0===i||void 0===a)continue;const e=t(i,a);void 0!==e.transform&&(r[l]=e.value,n=!0,s.transform=`${null!==(h=s.transform)&&void 0!==h?h:""} ${e.transform}`,void 0!==e.overrideFrom&&Object.assign(s,e.overrideFrom))}else i!==a&&void 0!==i&&void 0!==a&&(n=!0,s[l]=i,o[l]=a)}return s.transformOrigin=o.transformOrigin=i?"center center":"top left",this.animatingProperties=r,n?[s,o]:void 0}async animate(t,e=this.options.keyframeOptions){this.start(),this.frames=t;let i=!1;if(!this.isAnimating()&&!this.isDisabled()&&(this.options.onFrames&&(this.frames=t=this.options.onFrames(this),this.log("modified frames",t)),void 0!==t)){this.log("animate",[t,e]),i=!0,this.webAnimation=this.element.animate(t,e);const s=this.getController();null==s||s.add(this);try{await this.webAnimation.finished}catch(t){}null==s||s.remove(this)}return this.didFinish(i),i}isAnimating(){var t,e;return"running"===(null===(t=this.webAnimation)||void 0===t?void 0:t.playState)||(null===(e=this.webAnimation)||void 0===e?void 0:e.pending)}log(t,e){this.shouldLog&&!this.isDisabled()&&console.log(t,this.options.id,e)}}const y=(0,o.XM)(g);i(19083);const b=["top","right","bottom","left"];class k extends n.sR{constructor(t){if(super(t),t.type!==o.pX.ELEMENT)throw Error("The `position` directive must be used in attribute position.")}render(t,e){return s.Ld}update(t,[e,i]){var s;return void 0===this.u&&(this.u=null===(s=t.options)||void 0===s?void 0:s.host,this.u.addController(this)),this.S=t.element,this.C=e,this.F=null!=i?i:["left","top","width","height"],this.render(e,i)}hostUpdated(){this.$()}$(){var t,e;const i="function"==typeof this.C?this.C():null===(t=this.C)||void 0===t?void 0:t.value,s=i.offsetParent;if(void 0===i||!s)return;const o=i.getBoundingClientRect(),n=s.getBoundingClientRect();null===(e=this.F)||void 0===e||e.forEach((t=>{const e=b.includes(t)?o[t]-n[t]:o[t];this.S.style[t]=e+"px"}))}}(0,o.XM)(k)},91583:function(t,e,i){i.d(e,{r:()=>h});i(52247),i(71695),i(47021);var s=i(2841),o=i(45779),n=i(53232);const r=(t,e,i)=>{const s=new Map;for(let o=e;o<=i;o++)s.set(t[o],o);return s},h=(0,o.XM)(class extends o.Xe{constructor(t){if(super(t),t.type!==o.pX.CHILD)throw Error("repeat() can only be used in text expressions")}ct(t,e,i){let s;void 0===i?i=e:void 0!==e&&(s=e);const o=[],n=[];let r=0;for(const h of t)o[r]=s?s(h,r):r,n[r]=i(h,r),r++;return{values:n,keys:o}}render(t,e,i){return this.ct(t,e,i).values}update(t,[e,i,o]){var h;const l=(0,n.i9)(t),{values:a,keys:d}=this.ct(e,i,o);if(!Array.isArray(l))return this.ut=d,a;const c=null!==(h=this.ut)&&void 0!==h?h:this.ut=[],p=[];let u,f,v=0,m=l.length-1,g=0,y=a.length-1;for(;v<=m&&g<=y;)if(null===l[v])v++;else if(null===l[m])m--;else if(c[v]===d[g])p[g]=(0,n.fk)(l[v],a[g]),v++,g++;else if(c[m]===d[y])p[y]=(0,n.fk)(l[m],a[y]),m--,y--;else if(c[v]===d[y])p[y]=(0,n.fk)(l[v],a[y]),(0,n._Y)(t,p[y+1],l[v]),v++,y--;else if(c[m]===d[g])p[g]=(0,n.fk)(l[m],a[g]),(0,n._Y)(t,l[v],l[m]),m--,g++;else if(void 0===u&&(u=r(d,g,y),f=r(c,v,m)),u.has(c[v]))if(u.has(c[m])){const e=f.get(d[g]),i=void 0!==e?l[e]:null;if(null===i){const e=(0,n._Y)(t,l[v]);(0,n.fk)(e,a[g]),p[g]=e}else p[g]=(0,n.fk)(i,a[g]),(0,n._Y)(t,l[v],i),l[e]=null;g++}else(0,n.ws)(l[m]),m--;else(0,n.ws)(l[v]),v++;for(;g<=y;){const e=(0,n._Y)(t,p[y+1]);(0,n.fk)(e,a[g]),p[g++]=e}for(;v<=m;){const t=l[v++];null!==t&&(0,n.ws)(t)}return this.ut=d,(0,n.hl)(t,p),s.Jb}})}}]);
//# sourceMappingURL=517.a24ac340f032dc02.js.map