"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[2209],{48473:function(e,t,i){var n,r=i(64599),a=i(35806),o=i(71008),s=i(62193),d=i(2816),u=i(27927),l=(i(81027),i(29193),i(26098),i(50289)),c=i(29818),h=i(34897);i(76994),(0,u.A)([(0,c.EM)("ha-duration-input")],(function(e,t){var i=function(t){function i(){var t;(0,o.A)(this,i);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t=(0,s.A)(this,i,[].concat(r)),e(t),t}return(0,d.A)(i,t),(0,a.A)(i)}(t);return{F:i,d:[{kind:"field",decorators:[(0,c.MZ)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,c.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,c.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,c.MZ)({type:Boolean})],key:"required",value:function(){return!1}},{kind:"field",decorators:[(0,c.MZ)({type:Boolean})],key:"enableMillisecond",value:function(){return!1}},{kind:"field",decorators:[(0,c.MZ)({type:Boolean})],key:"enableDay",value:function(){return!1}},{kind:"field",decorators:[(0,c.MZ)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,c.P)("paper-time-input",!0)],key:"_input",value:void 0},{kind:"method",key:"focus",value:function(){this._input&&this._input.focus()}},{kind:"method",key:"render",value:function(){return(0,l.qy)(n||(n=(0,r.A)([' <ha-base-time-input .label="','" .helper="','" .required="','" .clearable="','" .autoValidate="','" .disabled="','" errorMessage="Required" enableSecond .enableMillisecond="','" .enableDay="','" format="24" .days="','" .hours="','" .minutes="','" .seconds="','" .milliseconds="','" @value-changed="','" noHoursLimit dayLabel="dd" hourLabel="hh" minLabel="mm" secLabel="ss" millisecLabel="ms"></ha-base-time-input> '])),this.label,this.helper,this.required,!this.required&&void 0!==this.data,this.required,this.disabled,this.enableMillisecond,this.enableDay,this._days,this._hours,this._minutes,this._seconds,this._milliseconds,this._durationChanged)}},{kind:"get",key:"_days",value:function(){var e;return null!==(e=this.data)&&void 0!==e&&e.days?Number(this.data.days):this.required||this.data?0:NaN}},{kind:"get",key:"_hours",value:function(){var e;return null!==(e=this.data)&&void 0!==e&&e.hours?Number(this.data.hours):this.required||this.data?0:NaN}},{kind:"get",key:"_minutes",value:function(){var e;return null!==(e=this.data)&&void 0!==e&&e.minutes?Number(this.data.minutes):this.required||this.data?0:NaN}},{kind:"get",key:"_seconds",value:function(){var e;return null!==(e=this.data)&&void 0!==e&&e.seconds?Number(this.data.seconds):this.required||this.data?0:NaN}},{kind:"get",key:"_milliseconds",value:function(){var e;return null!==(e=this.data)&&void 0!==e&&e.milliseconds?Number(this.data.milliseconds):this.required||this.data?0:NaN}},{kind:"method",key:"_durationChanged",value:function(e){e.stopPropagation();var t,i=e.detail.value?Object.assign({},e.detail.value):void 0;i&&(i.hours||(i.hours=0),i.minutes||(i.minutes=0),i.seconds||(i.seconds=0),"days"in i&&(i.days||(i.days=0)),"milliseconds"in i&&(i.milliseconds||(i.milliseconds=0)),this.enableMillisecond||i.milliseconds?i.milliseconds>999&&(i.seconds+=Math.floor(i.milliseconds/1e3),i.milliseconds%=1e3):delete i.milliseconds,i.seconds>59&&(i.minutes+=Math.floor(i.seconds/60),i.seconds%=60),i.minutes>59&&(i.hours+=Math.floor(i.minutes/60),i.minutes%=60),this.enableDay&&i.hours>24&&(i.days=(null!==(t=i.days)&&void 0!==t?t:0)+Math.floor(i.hours/24),i.hours%=24));(0,h.r)(this,"value-changed",{value:i})}}]}}),l.WF)},24280:function(e,t,i){i.r(t),i.d(t,{HaFormTimePeriod:function(){return h}});var n,r=i(64599),a=i(35806),o=i(71008),s=i(62193),d=i(2816),u=i(27927),l=(i(81027),i(50289)),c=i(29818),h=(i(48473),(0,u.A)([(0,c.EM)("ha-form-positive_time_period_dict")],(function(e,t){var i=function(t){function i(){var t;(0,o.A)(this,i);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t=(0,s.A)(this,i,[].concat(r)),e(t),t}return(0,d.A)(i,t),(0,a.A)(i)}(t);return{F:i,d:[{kind:"field",decorators:[(0,c.MZ)({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[(0,c.MZ)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,c.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,c.MZ)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,c.P)("ha-time-input",!0)],key:"_input",value:void 0},{kind:"method",key:"focus",value:function(){this._input&&this._input.focus()}},{kind:"method",key:"render",value:function(){return(0,l.qy)(n||(n=(0,r.A)([' <ha-duration-input .label="','" ?required="','" .data="','" .disabled="','"></ha-duration-input> '])),this.label,this.schema.required,this.data,this.disabled)}}]}}),l.WF))},32350:function(e,t,i){var n=i(32174),r=i(23444),a=i(33616),o=i(36565),s=i(87149),d=Math.min,u=[].lastIndexOf,l=!!u&&1/[1].lastIndexOf(1,-0)<0,c=s("lastIndexOf"),h=l||!c;e.exports=h?function(e){if(l)return n(u,this,arguments)||0;var t=r(this),i=o(t);if(0===i)return-1;var s=i-1;for(arguments.length>1&&(s=d(s,a(arguments[1]))),s<0&&(s=i+s);s>=0;s--)if(s in t&&t[s]===e)return s||0;return-1}:u},54630:function(e,t,i){var n=i(72148);e.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(n)},36686:function(e,t,i){var n=i(13113),r=i(93187),a=i(53138),o=i(90924),s=i(22669),d=n(o),u=n("".slice),l=Math.ceil,c=function(e){return function(t,i,n){var o,c,h=a(s(t)),f=r(i),v=h.length,m=void 0===n?" ":a(n);return f<=v||""===m?h:((c=d(m,l((o=f-v)/m.length))).length>o&&(c=u(c,0,o)),e?h+c:c+h)}};e.exports={start:c(!1),end:c(!0)}},15814:function(e,t,i){var n=i(41765),r=i(32350);n({target:"Array",proto:!0,forced:r!==[].lastIndexOf},{lastIndexOf:r})},82115:function(e,t,i){var n=i(41765),r=i(13113),a=i(33616),o=i(64849),s=i(90924),d=i(26906),u=RangeError,l=String,c=Math.floor,h=r(s),f=r("".slice),v=r(1..toFixed),m=function(e,t,i){return 0===t?i:t%2==1?m(e,t-1,i*e):m(e*e,t/2,i)},k=function(e,t,i){for(var n=-1,r=i;++n<6;)r+=t*e[n],e[n]=r%1e7,r=c(r/1e7)},y=function(e,t){for(var i=6,n=0;--i>=0;)n+=e[i],e[i]=c(n/t),n=n%t*1e7},b=function(e){for(var t=6,i="";--t>=0;)if(""!==i||0===t||0!==e[t]){var n=l(e[t]);i=""===i?n:i+h("0",7-n.length)+n}return i};n({target:"Number",proto:!0,forced:d((function(){return"0.000"!==v(8e-5,3)||"1"!==v(.9,0)||"1.25"!==v(1.255,2)||"1000000000000000128"!==v(0xde0b6b3a7640080,0)}))||!d((function(){v({})}))},{toFixed:function(e){var t,i,n,r,s=o(this),d=a(e),c=[0,0,0,0,0,0],v="",p="0";if(d<0||d>20)throw new u("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return l(s);if(s<0&&(v="-",s=-s),s>1e-21)if(i=(t=function(e){for(var t=0,i=e;i>=4096;)t+=12,i/=4096;for(;i>=2;)t+=1,i/=2;return t}(s*m(2,69,1))-69)<0?s*m(2,-t,1):s/m(2,t,1),i*=4503599627370496,(t=52-t)>0){for(k(c,0,i),n=d;n>=7;)k(c,1e7,0),n-=7;for(k(c,m(10,n,1),0),n=t-1;n>=23;)y(c,1<<23),n-=23;y(c,1<<n),k(c,1,1),y(c,2),p=b(c)}else k(c,0,i),k(c,1<<-t,0),p=b(c)+h("0",d);return p=d>0?v+((r=p.length)<=d?"0."+h("0",d-r)+p:f(p,0,r-d)+"."+f(p,r-d)):v+p}})},79977:function(e,t,i){var n=i(41765),r=i(36686).start;n({target:"String",proto:!0,forced:i(54630)},{padStart:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=2209.awow8j6bJEw.js.map