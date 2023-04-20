"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[856],{12198:function(t,n,e){e.d(n,{WB:function(){return i},p6:function(){return r}});var a=e(14516);e(18492);(0,a.Z)((function(t){return new Intl.DateTimeFormat(t.language,{weekday:"long",month:"long",day:"numeric"})}));var r=function(t,n){return o(n).format(t)},o=(0,a.Z)((function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric"})})),i=function(t,n){return c(n).format(t)},c=(0,a.Z)((function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"numeric",day:"numeric"})}));(0,a.Z)((function(t){return new Intl.DateTimeFormat(t.language,{day:"numeric",month:"short"})})),(0,a.Z)((function(t){return new Intl.DateTimeFormat(t.language,{month:"long",year:"numeric"})})),(0,a.Z)((function(t){return new Intl.DateTimeFormat(t.language,{month:"long"})})),(0,a.Z)((function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric"})})),(0,a.Z)((function(t){return new Intl.DateTimeFormat(t.language,{weekday:"long"})}))},36187:function(t,n,e){e.d(n,{S:function(){return b},a:function(){return v}});var a=e(68144),r=e(62601);function o(t){return!!t&&(t instanceof Date&&!isNaN(t.valueOf()))}var i,c,u,s=e(12198),m=e(44583),f=e(79513),l=e(21780),d="^\\d{4}-(0[1-9]|1[0-2])-([12]\\d|0[1-9]|3[01])",p=new RegExp(d+"$"),g=new RegExp(d),_=/^\d{4}-(0[1-9]|1[0-2])-([12]\d|0[1-9]|3[01])[T| ](((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)(\8[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)$/,h=e(58831);function y(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}var v=function t(n,l,d,v,b,w){var D,T=void 0!==w?w:l.attributes[b];if(null===T)return n("state.default.unknown");if("number"==typeof T)return(0,f.uf)(T,d);if("string"==typeof T){if(T.startsWith("http"))try{var k=new URL(T);if("http:"===k.protocol||"https:"===k.protocol)return(0,a.dy)(i||(i=y(['<a target="_blank" rel="noreferrer" href="','">',"</a>"])),w,T)}catch(C){}if(function(t){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?g.test(t):p.test(t)}(T,!0)){if(D=T,_.test(D)){var I=new Date(T);if(o(I))return(0,m.E8)(I,d)}var F=new Date(T);if(o(F))return(0,s.p6)(F,d)}}if(Array.isArray(T)&&T.some((function(t){return t instanceof Object}))||!Array.isArray(T)&&T instanceof Object){u||(u=Promise.all([e.e(7426),e.e(7628)]).then(e.bind(e,17628)));var Z=u.then((function(t){return t.dump(T)}));return(0,a.dy)(c||(c=y(["<pre>","</pre>"])),(0,r.C)(Z,""))}if(Array.isArray(T))return T.map((function(e){return t(n,l,d,v,b,e)})).join(", ");var M=l.entity_id,j=(0,h.M)(M),A=l.attributes.device_class,O=v[M],z=null==O?void 0:O.translation_key;return z&&n("component.".concat(O.platform,".entity.").concat(j,".").concat(z,".state_attributes.").concat(b,".state.").concat(T))||A&&n("component.".concat(j,".entity_component.").concat(A,".state_attributes.").concat(b,".state.").concat(T))||n("component.".concat(j,".entity_component._.state_attributes.").concat(b,".state.").concat(T))||T},b=function(t,n,e,a){var r=n.entity_id,o=n.attributes.device_class,i=(0,h.M)(r),c=e[r],u=null==c?void 0:c.translation_key;return u&&t("component.".concat(c.platform,".entity.").concat(i,".").concat(u,".state_attributes.").concat(a,".name"))||o&&t("component.".concat(i,".entity_component.").concat(o,".state_attributes.").concat(a,".name"))||t("component.".concat(i,".entity_component._.state_attributes.").concat(a,".name"))||(0,l.f)(a.replace(/_/g," ").replace(/\bid\b/g,"ID").replace(/\bip\b/g,"IP").replace(/\bmac\b/g,"MAC").replace(/\bgps\b/g,"GPS"))}},67910:function(t,n,e){e.d(n,{D1:function(){return h}});var a=e(56007),r=e(24833),o=function(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,e=""+t,a=1;a<n;a++)e=parseInt(e)<Math.pow(10,a)?"0".concat(e):e;return e};var i={ms:1,s:1e3,min:6e4,h:36e5,d:864e5},c=function(t,n){return e=parseFloat(t)*i[n],a=Math.floor(e/1e3/3600),r=Math.floor(e/1e3%3600/60),c=Math.floor(e/1e3%3600%60),u=Math.floor(e%1e3),(a>0?"".concat(a,":").concat(o(r),":").concat(o(c)):r>0?"".concat(r,":").concat(o(c)):c>0||u>0?"".concat(c).concat(u>0?".".concat(o(u,3)):""):null)||"0";var e,a,r,c,u},u=e(12198),s=e(44583),m=e(14516),f=(e(18492),e(65810));var l=function(t,n){return d(n).format(t)},d=(0,m.Z)((function(t){return new Intl.DateTimeFormat("en"!==t.language||(0,f.y)(t)?t.language:"en-u-hc-h23",{hour:"numeric",minute:"2-digit",hour12:(0,f.y)(t)})})),p=((0,m.Z)((function(t){return new Intl.DateTimeFormat("en"!==t.language||(0,f.y)(t)?t.language:"en-u-hc-h23",{hour:(0,f.y)(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:(0,f.y)(t)})})),(0,m.Z)((function(t){return new Intl.DateTimeFormat("en"!==t.language||(0,f.y)(t)?t.language:"en-u-hc-h23",{weekday:"long",hour:(0,f.y)(t)?"numeric":"2-digit",minute:"2-digit",hour12:(0,f.y)(t)})})),(0,m.Z)((function(){return new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"2-digit",hour12:!1})})),e(79513)),g=e(58831),_=e(40095),h=function(t,n,e,a,r){var o=a[n.entity_id];return y(t,e,o,n.entity_id,n.attributes,void 0!==r?r:n.state)},y=function(t,n,e,o,m,f){if(f===a.lz||f===a.nZ)return t("state.default.".concat(f));if((0,p.sJ)(m)){if("duration"===m.device_class&&m.unit_of_measurement&&i[m.unit_of_measurement])try{return c(f,m.unit_of_measurement)}catch(D){}if("monetary"===m.device_class)try{return(0,p.uf)(f,n,Object.assign({style:"currency",currency:m.unit_of_measurement,minimumFractionDigits:2},(0,p.l4)({state:f,attributes:m},e)))}catch(D){}var d=m.unit_of_measurement?"%"===m.unit_of_measurement?function(t){switch(null==t?void 0:t.language){case"cz":case"de":case"fi":case"fr":case"sk":case"sv":return" ";default:return""}}(n)+"%":" ".concat(m.unit_of_measurement):"";return"".concat((0,p.uf)(f,n,(0,p.l4)({state:f,attributes:m},e))).concat(d)}var h,y=(0,g.M)(o);if("input_datetime"===y){var v;if(void 0===f)return m.has_date&&m.has_time?(v=new Date(m.year,m.month-1,m.day,m.hour,m.minute),(0,s.o0)(v,n)):m.has_date?(v=new Date(m.year,m.month-1,m.day),(0,u.p6)(v,n)):m.has_time?((v=new Date).setHours(m.hour,m.minute),l(v,n)):f;try{var b=f.split(" ");if(2===b.length)return(0,s.o0)(new Date(b.join("T")),n);if(1===b.length){if(f.includes("-"))return(0,u.p6)(new Date("".concat(f,"T00:00")),n);if(f.includes(":")){var w=new Date;return l(new Date("".concat(w.toISOString().split("T")[0],"T").concat(f)),n)}}return f}catch(T){return f}}if("humidifier"===y&&"on"===f&&m.humidity)return"".concat(m.humidity," %");if("counter"===y||"number"===y||"input_number"===y)return(0,p.uf)(f,n,(0,p.l4)({state:f,attributes:m},e));if("button"===y||"input_button"===y||"scene"===y||"sensor"===y&&"timestamp"===m.device_class)try{return(0,s.o0)(new Date(f),n)}catch(D){return f}return"update"===y?"on"===f?(0,r.X4)(m)?(0,_.f)(m,r.k6)&&"number"==typeof m.in_progress?t("ui.card.update.installing_with_progress",{progress:m.in_progress}):t("ui.card.update.installing"):m.latest_version:m.skipped_version===m.latest_version?null!==(h=m.latest_version)&&void 0!==h?h:t("state.default.unavailable"):t("ui.card.update.up_to_date"):(null==e?void 0:e.translation_key)&&t("component.".concat(e.platform,".entity.").concat(y,".").concat(e.translation_key,".state.").concat(f))||m.device_class&&t("component.".concat(y,".entity_component.").concat(m.device_class,".state.").concat(f))||t("component.".concat(y,".entity_component._.state.").concat(f))||f}},21780:function(t,n,e){e.d(n,{f:function(){return a}});var a=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}}}]);
//# sourceMappingURL=856-pI2oiO34zRY.js.map