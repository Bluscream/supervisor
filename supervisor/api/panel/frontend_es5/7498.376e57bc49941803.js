"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["7498"],{23575:function(e,t,i){i.d(t,{Z:function(){return s}});i(19423);var s=function(e,t,i,s,r){return e.connection.subscribeMessage(r,{type:"template/start_preview",flow_id:t,flow_type:i,user_input:s})}},20699:function(e,t,i){i.a(e,(async function(e,s){try{i.r(t);var r,n,a,l,o,d,u,h,c=i(9833),_=i(94524),v=i(63038),p=i(27862),f=i(52565),b=i(92776),k=i(5776),y=i(21475),w=i(77204),m=(i(38419),i(64228),i(61893),i(13334),i(57243)),g=i(50778),Z=i(22381),C=i(23575),x=i(28820),S=i(36522),z=(i(99426),e([x]));x=(z.then?(await z)():z)[0];(0,y.Z)([(0,g.Mo)("flow-preview-template")],(function(e,t){var i,s=function(t){function i(){var t;(0,f.Z)(this,i);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return t=(0,b.Z)(this,i,[].concat(r)),e(t),t}return(0,k.Z)(i,t),(0,p.Z)(i)}(t);return{F:s,d:[{kind:"field",decorators:[(0,g.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,g.Cb)()],key:"flowType",value:void 0},{kind:"field",key:"handler",value:void 0},{kind:"field",decorators:[(0,g.Cb)()],key:"stepId",value:void 0},{kind:"field",decorators:[(0,g.Cb)()],key:"flowId",value:void 0},{kind:"field",decorators:[(0,g.Cb)({attribute:!1})],key:"stepData",value:void 0},{kind:"field",decorators:[(0,g.SB)()],key:"_preview",value:void 0},{kind:"field",decorators:[(0,g.SB)()],key:"_listeners",value:void 0},{kind:"field",decorators:[(0,g.SB)()],key:"_error",value:void 0},{kind:"field",key:"_unsub",value:void 0},{kind:"method",key:"disconnectedCallback",value:function(){(0,w.Z)(s,"disconnectedCallback",this,3)([]),this._unsub&&(this._unsub.then((function(e){return e()})),this._unsub=void 0)}},{kind:"method",key:"willUpdate",value:function(e){e.has("stepData")&&this._debouncedSubscribePreview()}},{kind:"method",key:"render",value:function(){var e,t=this;return this._error?(0,m.dy)(r||(r=(0,v.Z)(['<ha-alert alert-type="error">',"</ha-alert>"])),this._error):(0,m.dy)(n||(n=(0,v.Z)(['<entity-preview-row .hass="','" .stateObj="','"></entity-preview-row> '," "," "])),this.hass,this._preview,null!==(e=this._listeners)&&void 0!==e&&e.time?(0,m.dy)(a||(a=(0,v.Z)([" <p> "," </p> "])),this.hass.localize("ui.dialogs.helper_settings.template.time")):m.Ld,this._listeners?this._listeners.all?(0,m.dy)(l||(l=(0,v.Z)([' <p class="all_listeners"> '," </p> "])),this.hass.localize("ui.dialogs.helper_settings.template.all_listeners")):this._listeners.domains.length||this._listeners.entities.length?(0,m.dy)(o||(o=(0,v.Z)([" <p> "," </p> <ul> "," "," </ul> "])),this.hass.localize("ui.dialogs.helper_settings.template.listeners"),this._listeners.domains.sort().map((function(e){return(0,m.dy)(d||(d=(0,v.Z)([" <li> <b>","</b>: "," </li> "])),t.hass.localize("ui.dialogs.helper_settings.template.domain"),e)})),this._listeners.entities.sort().map((function(e){return(0,m.dy)(u||(u=(0,v.Z)([" <li> <b>","</b>: "," </li> "])),t.hass.localize("ui.dialogs.helper_settings.template.entity"),e)}))):this._listeners.time?m.Ld:(0,m.dy)(h||(h=(0,v.Z)(['<p class="all_listeners"> '," </p>"])),this.hass.localize("ui.dialogs.helper_settings.template.no_listeners")):m.Ld)}},{kind:"field",key:"_setPreview",value:function(){var e=this;return function(t){if("error"in t)return e._error=t.error,void(e._preview=void 0);e._error=void 0,e._listeners=t.listeners;var i=(new Date).toISOString();e._preview={entity_id:"".concat(e.stepId,".___flow_preview___"),last_changed:i,last_updated:i,context:{id:"",parent_id:null,user_id:null},attributes:t.attributes,state:t.state}}}},{kind:"field",key:"_debouncedSubscribePreview",value:function(){var e=this;return(0,Z.D)((function(){e._subscribePreview()}),250)}},{kind:"method",key:"_subscribePreview",value:(i=(0,_.Z)((0,c.Z)().mark((function e(){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._unsub){e.next=6;break}return e.next=3,this._unsub;case 3:e.t0=e.sent,(0,e.t0)(),this._unsub=void 0;case 6:if("repair_flow"!==this.flowType){e.next=8;break}return e.abrupt("return");case 8:return e.prev=8,this._unsub=(0,C.Z)(this.hass,this.flowId,this.flowType,this.stepData,this._setPreview),e.next=12,this._unsub;case 12:(0,S.B)(this,"set-flow-errors",{errors:{}}),e.next=20;break;case 15:e.prev=15,e.t1=e.catch(8),"string"==typeof e.t1.message?this._error=e.t1.message:(this._error=void 0,(0,S.B)(this,"set-flow-errors",e.t1.message)),this._unsub=void 0,this._preview=void 0;case 20:case"end":return e.stop()}}),e,this,[[8,15]])}))),function(){return i.apply(this,arguments)})}]}}),m.oi);s()}catch(P){s(P)}}))}}]);
//# sourceMappingURL=7498.376e57bc49941803.js.map