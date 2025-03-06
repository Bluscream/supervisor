"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["7659"],{58725:function(e,t,i){i.a(e,(async function(e,t){try{var a=i(73577),n=(i(19083),i(71695),i(92745),i(61893),i(9359),i(56475),i(70104),i(19423),i(40251),i(61006),i(88044),i(81804),i(47021),i(7285),i(57243)),s=i(50778),l=i(27486),o=i(36522),d=i(73850),r=i(47194),u=i(24360),c=i(94279),h=(i(23043),i(37583),i(5460)),y=i(1416),m=i(79105),f=i(57816),p=i(96530),v=e([c,h]);[c,h]=v.then?(await v)():v;let _,k,b,g=e=>e;const C="___create-new-entity___";(0,a.Z)([(0,s.Mo)("ha-entity-picker")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"autofocus",value(){return!1}},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"required",value(){return!1}},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,attribute:"allow-custom-entity"})],key:"allowCustomEntity",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1,type:Array})],key:"createDomains",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Array,attribute:"include-unit-of-measurement"})],key:"includeUnitOfMeasurement",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Array,attribute:"include-entities"})],key:"includeEntities",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Array,attribute:"exclude-entities"})],key:"excludeEntities",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"entityFilter",value:void 0},{kind:"field",decorators:[(0,s.Cb)({attribute:"hide-clear-icon",type:Boolean})],key:"hideClearIcon",value(){return!1}},{kind:"field",decorators:[(0,s.Cb)({attribute:"item-label-path"})],key:"itemLabelPath",value(){return"friendly_name"}},{kind:"field",decorators:[(0,s.SB)()],key:"_opened",value(){return!1}},{kind:"field",decorators:[(0,s.IO)("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"method",key:"open",value:async function(){var e;await this.updateComplete,await(null===(e=this.comboBox)||void 0===e?void 0:e.open())}},{kind:"method",key:"focus",value:async function(){var e;await this.updateComplete,await(null===(e=this.comboBox)||void 0===e?void 0:e.focus())}},{kind:"field",key:"_initedStates",value(){return!1}},{kind:"field",key:"_states",value(){return[]}},{kind:"field",key:"_rowRenderer",value(){return e=>(0,n.dy)(_||(_=g`<ha-list-item graphic="avatar" .twoline="${0}"> ${0} <span>${0}</span> <span slot="secondary">${0}</span> </ha-list-item>`),!!e.entity_id,e.state?(0,n.dy)(k||(k=g`<state-badge slot="graphic" .stateObj="${0}" .hass="${0}"></state-badge>`),e,this.hass):"",e.friendly_name,e.entity_id.startsWith(C)?this.hass.localize("ui.components.entity.entity-picker.new_entity"):e.entity_id)}},{kind:"field",key:"_getStates",value(){return(0,l.Z)(((e,t,i,a,n,s,l,o,u,c)=>{let h=[];if(!t)return[];let m=Object.keys(t.states);const v=null!=c&&c.length?c.map((e=>{const i=t.localize("ui.components.entity.entity-picker.create_helper",{domain:(0,p.X)(e)?t.localize(`ui.panel.config.helpers.types.${e}`):(0,f.Lh)(t.localize,e)});return{entity_id:C+e,state:"on",last_changed:"",last_updated:"",context:{id:"",user_id:null,parent_id:null},friendly_name:i,attributes:{icon:"mdi:plus"},strings:[e,i]}})):[];return m.length?(o&&(m=m.filter((e=>o.includes(e)))),u&&(m=m.filter((e=>!u.includes(e)))),i&&(m=m.filter((e=>i.includes((0,d.M)(e))))),a&&(m=m.filter((e=>!a.includes((0,d.M)(e))))),h=m.map((e=>{const i=(0,r.C)(t.states[e])||e;return Object.assign(Object.assign({},t.states[e]),{},{friendly_name:i,strings:[e,i]})})).sort(((e,t)=>(0,y.f)(e.friendly_name,t.friendly_name,this.hass.locale.language))),s&&(h=h.filter((e=>e.entity_id===this.value||e.attributes.device_class&&s.includes(e.attributes.device_class)))),l&&(h=h.filter((e=>e.entity_id===this.value||e.attributes.unit_of_measurement&&l.includes(e.attributes.unit_of_measurement)))),n&&(h=h.filter((e=>e.entity_id===this.value||n(e)))),h.length?(null!=v&&v.length&&h.push(...v),h):[{entity_id:"",state:"",last_changed:"",last_updated:"",context:{id:"",user_id:null,parent_id:null},friendly_name:this.hass.localize("ui.components.entity.entity-picker.no_match"),attributes:{friendly_name:this.hass.localize("ui.components.entity.entity-picker.no_match"),icon:"mdi:magnify"},strings:[]},...v]):[{entity_id:"",state:"",last_changed:"",last_updated:"",context:{id:"",user_id:null,parent_id:null},friendly_name:this.hass.localize("ui.components.entity.entity-picker.no_entities"),attributes:{friendly_name:this.hass.localize("ui.components.entity.entity-picker.no_entities"),icon:"mdi:magnify"},strings:[]},...v]}))}},{kind:"method",key:"shouldUpdate",value:function(e){return!!(e.has("value")||e.has("label")||e.has("disabled"))||!(!e.has("_opened")&&this._opened)}},{kind:"method",key:"willUpdate",value:function(e){var t;(!this._initedStates||e.has("_opened")&&this._opened)&&(this._states=this._getStates(this._opened,this.hass,this.includeDomains,this.excludeDomains,this.entityFilter,this.includeDeviceClasses,this.includeUnitOfMeasurement,this.includeEntities,this.excludeEntities,this.createDomains),this._initedStates&&(this.comboBox.filteredItems=this._states),this._initedStates=!0),e.has("createDomains")&&null!==(t=this.createDomains)&&void 0!==t&&t.length&&this.hass.loadFragmentTranslation("config")}},{kind:"method",key:"render",value:function(){return(0,n.dy)(b||(b=g` <ha-combo-box item-value-path="entity_id" .itemLabelPath="${0}" .hass="${0}" .value="${0}" .label="${0}" .helper="${0}" .allowCustomValue="${0}" .filteredItems="${0}" .renderer="${0}" .required="${0}" .disabled="${0}" @opened-changed="${0}" @value-changed="${0}" @filter-changed="${0}"> </ha-combo-box> `),this.itemLabelPath,this.hass,this._value,void 0===this.label?this.hass.localize("ui.components.entity.entity-picker.entity"):this.label,this.helper,this.allowCustomEntity,this._states,this._rowRenderer,this.required,this.disabled,this._openedChanged,this._valueChanged,this._filterChanged)}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_valueChanged",value:function(e){var t;e.stopPropagation();const i=null===(t=e.detail.value)||void 0===t?void 0:t.trim();if(i&&i.startsWith(C)){const e=i.substring(C.length);(0,m.j)(this,{domain:e,dialogClosedCallback:e=>{e.entityId&&this._setValue(e.entityId)}})}else i!==this._value&&this._setValue(i)}},{kind:"method",key:"_filterChanged",value:function(e){const t=e.target,i=e.detail.value.trim().toLowerCase();t.filteredItems=i.length?(0,u.q)(i,this._states):this._states}},{kind:"method",key:"_setValue",value:function(e){this.value=e,setTimeout((()=>{(0,o.B)(this,"value-changed",{value:e}),(0,o.B)(this,"change")}),0)}}]}}),n.oi);t()}catch(_){t(_)}}))},43546:function(e,t,i){i.d(t,{iI:()=>n,oT:()=>a});i(19083),i(9359),i(70104),i(77439),i(19423),i(40251),i(97499),i(61006);const a=e=>e.map((e=>{if("string"!==e.type)return e;switch(e.name){case"username":return Object.assign(Object.assign({},e),{},{autocomplete:"username",autofocus:!0});case"password":return Object.assign(Object.assign({},e),{},{autocomplete:"current-password"});case"code":return Object.assign(Object.assign({},e),{},{autocomplete:"one-time-code",autofocus:!0});default:return e}})),n=(e,t)=>e.callWS({type:"auth/sign_path",path:t})},96194:function(e,t,i){i.d(t,{ON:()=>l,PX:()=>o,V_:()=>d,lz:()=>s,nZ:()=>n,rk:()=>u});var a=i(92636);const n="unavailable",s="unknown",l="on",o="off",d=[n,s],r=[n,s,o],u=(0,a.z)(d);(0,a.z)(r)},57816:function(e,t,i){i.d(t,{F3:()=>n,Lh:()=>a,t4:()=>s});i(22381);const a=(e,t,i)=>e(`component.${t}.title`)||(null==i?void 0:i.name)||t,n=(e,t)=>{const i={type:"manifest/list"};return t&&(i.integrations=t),e.callWS(i)},s=(e,t)=>e.callWS({type:"manifest/get",integration:t})},79105:function(e,t,i){i.d(t,{j:()=>s});i(71695),i(40251),i(47021);var a=i(36522);const n=()=>Promise.all([i.e("7983"),i.e("9287"),i.e("7933")]).then(i.bind(i,49335)),s=(e,t)=>{(0,a.B)(e,"show-dialog",{dialogTag:"dialog-helper-detail",dialogImport:n,dialogParams:t})}}}]);
//# sourceMappingURL=7659.b62cd43fb91e28aa.js.map