(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["6330"],{24756:function(e,t,i){"use strict";i.r(t),i.d(t,{HassioAddonStore:function(){return I}});var r=i("63038"),n=i("9833"),o=i("94524"),a=i("27862"),s=i("52565"),l=i("92776"),d=i("5776"),c=i("21475"),u=i("77204"),h=(i("38419"),i("91599"),i("64228"),i("61893"),i("63619"),i("42713"),i("39527"),i("99790"),i("13334"),i("87319"),i("57243")),p=i("50778"),v=i("27486"),f=i("17803"),g=i("36522"),m=i("83523"),y=i("58776"),k=(i("34273"),i("23043"),i("71489"),i("66899")),b=i("56785"),_=i("76131"),x=(i("75375"),i("87979"),i("71695"),i("40251"),i("99341"),i("47021"),i("76286"),i("54466"),i("20223"),i("63721"),i("1416")),Z=(i("54977"),i("55194"),i("19134"),i("47706"),i("41298")),w=i("79419"),A=i("50566");var C,L,R,z,H,S,B,M,P,D,T,E=i("84915"),V=((0,c.Z)([(0,p.Mo)("hassio-addon-repository")],(function(e,t){var i=function(t){function i(){var t;(0,s.Z)(this,i);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=(0,l.Z)(this,i,[].concat(n)),e(t),t}return(0,d.Z)(i,t),(0,a.Z)(i)}(t);return{F:i,d:[{kind:"field",decorators:[(0,p.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,p.Cb)({attribute:!1})],key:"supervisor",value:void 0},{kind:"field",decorators:[(0,p.Cb)({attribute:!1})],key:"repo",value:void 0},{kind:"field",decorators:[(0,p.Cb)({attribute:!1})],key:"addons",value:void 0},{kind:"field",decorators:[(0,p.Cb)()],key:"filter",value:void 0},{kind:"field",key:"_getAddons",value:function(){var e=this;return(0,v.Z)((function(t,i){return i?function(e,t){var i={keys:["name","description","slug"],isCaseSensitive:!1,minMatchCharLength:Math.min(t.length,2),threshold:.2,getFn:A.z};return new Z.Z(e,i).search((0,w._)(t)).map((function(e){return e.item}))}(t,i):t.sort((function(t,i){return(0,x.f)(t.name,i.name,e.hass.locale.language)}))}))}},{kind:"method",key:"render",value:function(){var e,t=this,i=this.repo,n=this.addons;null!==(e=this.hass.userData)&&void 0!==e&&e.showAdvanced||(n=n.filter((function(e){return!e.advanced&&"stable"===e.stage})));var o=this._getAddons(n,this.filter);return this.filter&&o.length<1?(0,h.dy)(C||(C=(0,r.Z)([' <div class="content"> <p class="description"> '," </p> </div> "])),this.supervisor.localize("store.no_results_found",{repository:i.name})):(0,h.dy)(L||(L=(0,r.Z)([' <div class="content"> <h1>','</h1> <div class="card-group"> '," </div> </div> "])),i.name,o.map((function(e){return(0,h.dy)(R||(R=(0,r.Z)([' <ha-card outlined .addon="','" class="','" @click="','"> <div class="card-content"> <hassio-card-content .hass="','" .title="','" .description="','" .available="','" .icon="','" .iconTitle="','" .iconClass="','" .iconImage="','" .showTopbar="','" .topbarClass="','"></hassio-card-content> </div> </ha-card> '])),e,e.available?"":"not_available",t._addonTapped,t.hass,e.name,e.description,e.available,e.installed&&e.update_available?"M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M12,7L7,12H10V16H14V12H17L12,7Z":"M20.5,11H19V7C19,5.89 18.1,5 17,5H13V3.5A2.5,2.5 0 0,0 10.5,1A2.5,2.5 0 0,0 8,3.5V5H4A2,2 0 0,0 2,7V10.8H3.5C5,10.8 6.2,12 6.2,13.5C6.2,15 5,16.2 3.5,16.2H2V20A2,2 0 0,0 4,22H7.8V20.5C7.8,19 9,17.8 10.5,17.8C12,17.8 13.2,19 13.2,20.5V22H17A2,2 0 0,0 19,20V16H20.5A2.5,2.5 0 0,0 23,13.5A2.5,2.5 0 0,0 20.5,11Z",e.installed?e.update_available?t.supervisor.localize("common.new_version_available"):t.supervisor.localize("addon.state.installed"):e.available?t.supervisor.localize("addon.state.not_installed"):t.supervisor.localize("addon.state.not_available"),e.installed?e.update_available?"update":"installed":e.available?"":"not_available",(0,f.I)(t.hass.config.version,0,105)&&e.icon?"/api/hassio/addons/".concat(e.slug,"/icon"):void 0,e.installed||!e.available,e.installed?e.update_available?"update":"installed":e.available?"":"unavailable")})))}},{kind:"method",key:"_addonTapped",value:function(e){(0,m.c)("/hassio/addon/".concat(e.currentTarget.addon.slug,"?store=true"))}},{kind:"get",static:!0,key:"styles",value:function(){return[E.l,(0,h.iv)(z||(z=(0,r.Z)(["ha-card{cursor:pointer;overflow:hidden}.not_available{opacity:.6}a.repo{color:var(--primary-text-color)}"])))]}}]}}),h.oi),function(e,t){return"local"===e.slug?-1:"local"===t.slug?1:"core"===e.slug?-1:"core"===t.slug?1:e.name.toUpperCase()<t.name.toUpperCase()?-1:1}),I=(0,c.Z)([(0,p.Mo)("hassio-addon-store")],(function(e,t){var c,x=function(t){function i(){var t;(0,s.Z)(this,i);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=(0,l.Z)(this,i,[].concat(n)),e(t),t}return(0,d.Z)(i,t),(0,a.Z)(i)}(t);return{F:x,d:[{kind:"field",decorators:[(0,p.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,p.Cb)({attribute:!1})],key:"supervisor",value:void 0},{kind:"field",decorators:[(0,p.Cb)({type:Boolean})],key:"narrow",value:function(){return!1}},{kind:"field",decorators:[(0,p.Cb)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,p.SB)()],key:"_filter",value:void 0},{kind:"method",key:"refreshData",value:(c=(0,o.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,k.a_)(this.hass);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),(0,_.Ys)(this,{text:(0,b.js)(e.t0)});case 8:return e.prev=8,this._loadData(),e.finish(8);case 11:case"end":return e.stop()}}),e,this,[[0,5,8,11]])}))),function(){return c.apply(this,arguments)})},{kind:"method",key:"render",value:function(){var e,t,i=[];return this.supervisor.store.repositories&&(i=this.addonRepositories(this.supervisor.store.repositories,this.supervisor.store.addons,this._filter)),(0,h.dy)(H||(H=(0,r.Z)([' <hass-subpage .hass="','" .narrow="','" .route="','" .header="','"> <ha-button-menu slot="toolbar-icon" @action="','"> <ha-icon-button .label="','" .path="','" slot="trigger"></ha-icon-button> <mwc-list-item> '," </mwc-list-item> <mwc-list-item> "," </mwc-list-item> "," </ha-button-menu> "," "," </hass-subpage> "])),this.hass,this.narrow,this.route,this.supervisor.localize("panel.store"),this._handleAction,this.supervisor.localize("common.menu"),"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",this.supervisor.localize("store.check_updates"),this.supervisor.localize("store.repositories"),null!==(e=this.hass.userData)&&void 0!==e&&e.showAdvanced&&(0,f.I)(this.hass.config.version,0,117)?(0,h.dy)(S||(S=(0,r.Z)(["<mwc-list-item> "," </mwc-list-item>"])),this.supervisor.localize("store.registries")):"",0===i.length?(0,h.dy)(B||(B=(0,r.Z)(["<hass-loading-screen no-toolbar></hass-loading-screen>"]))):(0,h.dy)(M||(M=(0,r.Z)([' <div class="search"> <search-input .hass="','" .filter="','" @value-changed="','"></search-input> </div> '," "])),this.hass,this._filter,this._filterChanged,i),null!==(t=this.hass.userData)&&void 0!==t&&t.showAdvanced?"":(0,h.dy)(P||(P=(0,r.Z)([' <div class="advanced"> <a href="/profile" target="_top"> '," </a> </div> "])),this.supervisor.localize("store.missing_addons")))}},{kind:"method",key:"firstUpdated",value:function(e){var t=this;(0,u.Z)(x,"firstUpdated",this,3)([e]);var i=(0,y.io)("repository_url");(0,m.c)("/hassio/store",{replace:!0}),i&&this._manageRepositories(i),this.addEventListener("hass-api-called",(function(e){return t.apiCalled(e)})),this._loadData()}},{kind:"field",key:"addonRepositories",value:function(){var e=this;return(0,v.Z)((function(t,i,n){return t.sort(V).map((function(t){var o=i.filter((function(e){return e.repository===t.slug}));return 0!==o.length?(0,h.dy)(D||(D=(0,r.Z)([' <hassio-addon-repository .hass="','" .repo="','" .addons="','" .filter="','" .supervisor="','"></hassio-addon-repository> '])),e.hass,t,o,n,e.supervisor):h.Ld}))}))}},{kind:"method",key:"_handleAction",value:function(e){switch(e.detail.index){case 0:this.refreshData();break;case 1:this._manageRepositoriesClicked();break;case 2:this._manageRegistries()}}},{kind:"method",key:"apiCalled",value:function(e){e.detail.success&&this._loadData()}},{kind:"method",key:"_manageRepositoriesClicked",value:function(){this._manageRepositories()}},{kind:"method",key:"_manageRepositories",value:function(e){var t,r;t=this,r={supervisor:this.supervisor,url:e},(0,g.B)(t,"show-dialog",{dialogTag:"dialog-hassio-repositories",dialogImport:function(){return Promise.resolve().then(i.bind(i,54466))},dialogParams:r})}},{kind:"method",key:"_manageRegistries",value:function(){var e,t;e=this,t={supervisor:this.supervisor},(0,g.B)(e,"show-dialog",{dialogTag:"dialog-hassio-registries",dialogImport:function(){return Promise.resolve().then(i.bind(i,76286))},dialogParams:t})}},{kind:"method",key:"_loadData",value:function(){(0,g.B)(this,"supervisor-collection-refresh",{collection:"addon"}),(0,g.B)(this,"supervisor-collection-refresh",{collection:"supervisor"})}},{kind:"method",key:"_filterChanged",value:function(e){this._filter=e.detail.value}},{kind:"get",static:!0,key:"styles",value:function(){return(0,h.iv)(T||(T=(0,r.Z)(["hassio-addon-repository{margin-top:24px}.search{position:sticky;top:0;z-index:2}search-input{display:block;--mdc-text-field-fill-color:var(--sidebar-background-color);--mdc-text-field-idle-line-color:var(--divider-color)}.advanced{padding:12px;display:flex;flex-wrap:wrap;color:var(--primary-text-color)}.advanced a{margin-left:.5em;margin-inline-start:.5em;margin-inline-end:initial;color:var(--primary-color)}"])))}}]}}),h.oi)},76286:function(e,t,i){"use strict";var r,n,o,a,s,l,d=i("9833"),c=i("94524"),u=i("63038"),h=i("27862"),p=i("52565"),v=i("92776"),f=i("5776"),g=i("21475"),m=(i("38419"),i("64228"),i("63619"),i("52961"),i("13334"),i("31622"),i("57243")),y=i("50778"),k=i("73729"),b=(i("29073"),i("23043"),i("30509"),i("56785")),_=i("17803"),x=function(){var e=(0,c.Z)((0,d.Z)().mark((function e(t){return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,_.I)(t.config.version,2021,2,4)){e.next=2;break}return e.abrupt("return",t.callWS({type:"supervisor/api",endpoint:"/docker/registries",method:"get"}));case 2:return e.t0=b.rY,e.next=5,t.callApi("GET","hassio/docker/registries");case 5:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=(0,c.Z)((0,d.Z)().mark((function e(t,i){return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,_.I)(t.config.version,2021,2,4)){e.next=4;break}return e.next=3,t.callWS({type:"supervisor/api",endpoint:"/docker/registries",method:"post",data:i});case 3:return e.abrupt("return");case 4:return e.next=6,t.callApi("POST","hassio/docker/registries",i);case 6:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}(),w=function(){var e=(0,c.Z)((0,d.Z)().mark((function e(t,i){return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,_.I)(t.config.version,2021,2,4)){e.next=4;break}return e.next=3,t.callWS({type:"supervisor/api",endpoint:"/docker/registries/".concat(i),method:"delete"});case 3:return e.abrupt("return");case 4:return e.next=6,t.callApi("DELETE","hassio/docker/registries/".concat(i));case 6:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}(),A=i("76131"),C=i("28008"),L=[{name:"registry",required:!0,selector:{text:{}}},{name:"username",required:!0,selector:{text:{}}},{name:"password",required:!0,selector:{text:{type:"password"}}}];(0,g.Z)([(0,y.Mo)("dialog-hassio-registries")],(function(e,t){var i,g,_,R,z=function(t){function i(){var t;(0,p.Z)(this,i);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=(0,v.Z)(this,i,[].concat(n)),e(t),t}return(0,f.Z)(i,t),(0,h.Z)(i)}(t);return{F:z,d:[{kind:"field",decorators:[(0,y.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,y.Cb)({attribute:!1})],key:"supervisor",value:void 0},{kind:"field",decorators:[(0,y.SB)()],key:"_registries",value:void 0},{kind:"field",decorators:[(0,y.SB)()],key:"_input",value:function(){return{}}},{kind:"field",decorators:[(0,y.SB)()],key:"_opened",value:function(){return!1}},{kind:"field",decorators:[(0,y.SB)()],key:"_addingRegistry",value:function(){return!1}},{kind:"method",key:"render",value:function(){var e,t=this;return(0,m.dy)(r||(r=(0,u.Z)([' <ha-dialog .open="','" @closed="','" scrimClickAction escapeKeyAction hideActions .heading="','"> '," </ha-dialog> "])),this._opened,this.closeDialog,(0,k.i)(this.hass,this._addingRegistry?this.supervisor.localize("dialog.registries.title_add"):this.supervisor.localize("dialog.registries.title_manage")),this._addingRegistry?(0,m.dy)(n||(n=(0,u.Z)([' <ha-form .data="','" .schema="','" @value-changed="','" .computeLabel="','" dialogInitialFocus></ha-form> <div class="action"> <mwc-button ?disabled="','" @click="','"> '," </mwc-button> </div> "])),this._input,L,this._valueChanged,this._computeLabel,Boolean(!this._input.registry||!this._input.username||!this._input.password),this._addNewRegistry,this.supervisor.localize("dialog.registries.add_registry")):(0,m.dy)(o||(o=(0,u.Z)(["",' <div class="action"> <mwc-button @click="','" dialogInitialFocus> '," </mwc-button> </div> "])),null!==(e=this._registries)&&void 0!==e&&e.length?this._registries.map((function(e){return(0,m.dy)(a||(a=(0,u.Z)([' <ha-settings-row class="registry"> <span slot="heading"> ',' </span> <span slot="description"> ',": ",' </span> <ha-icon-button .entry="','" .label="','" .path="','" @click="','"></ha-icon-button> </ha-settings-row> '])),e.registry,t.supervisor.localize("dialog.registries.username"),e.username,e,t.supervisor.localize("dialog.registries.remove"),"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",t._removeRegistry)})):(0,m.dy)(s||(s=(0,u.Z)([" <ha-alert> "," </ha-alert> "])),this.supervisor.localize("dialog.registries.no_registries")),this._addRegistry,this.supervisor.localize("dialog.registries.add_new_registry")))}},{kind:"field",key:"_computeLabel",value:function(){var e=this;return function(t){return e.supervisor.localize("dialog.registries.".concat(t.name))}}},{kind:"method",key:"_valueChanged",value:function(e){this._input=e.detail.value}},{kind:"method",key:"showDialog",value:(R=(0,c.Z)((0,d.Z)().mark((function e(t){return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._opened=!0,this._input={},this.supervisor=t.supervisor,e.next=5,this._loadRegistries();case 5:return e.next=7,this.updateComplete;case 7:case"end":return e.stop()}}),e,this)}))),function(e){return R.apply(this,arguments)})},{kind:"method",key:"closeDialog",value:function(){this._addingRegistry=!1,this._opened=!1,this._input={}}},{kind:"method",key:"focus",value:function(){var e=this;this.updateComplete.then((function(){var t;return null===(t=e.shadowRoot)||void 0===t||null===(t=t.querySelector("[dialogInitialFocus]"))||void 0===t?void 0:t.focus()}))}},{kind:"method",key:"_loadRegistries",value:(_=(0,c.Z)((0,d.Z)().mark((function e(){var t;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(this.hass);case 2:t=e.sent,this._registries=Object.keys(t.registries).map((function(e){return{registry:e,username:t.registries[e].username}}));case 4:case"end":return e.stop()}}),e,this)}))),function(){return _.apply(this,arguments)})},{kind:"method",key:"_addRegistry",value:function(){this._addingRegistry=!0}},{kind:"method",key:"_addNewRegistry",value:(g=(0,c.Z)((0,d.Z)().mark((function e(){var t;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t={})[this._input.registry]={username:this._input.username,password:this._input.password},e.prev=2,e.next=5,Z(this.hass,t);case 5:return e.next=7,this._loadRegistries();case 7:this._addingRegistry=!1,this._input={},e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),(0,A.Ys)(this,{title:this.supervisor.localize("dialog.registries.failed_to_add"),text:(0,b.js)(e.t0)});case 14:case"end":return e.stop()}}),e,this,[[2,11]])}))),function(){return g.apply(this,arguments)})},{kind:"method",key:"_removeRegistry",value:(i=(0,c.Z)((0,d.Z)().mark((function e(t){var i;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.currentTarget.entry,e.prev=1,e.next=4,w(this.hass,i.registry);case 4:return e.next=6,this._loadRegistries();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),(0,A.Ys)(this,{title:this.supervisor.localize("dialog.registries.failed_to_remove"),text:(0,b.js)(e.t0)});case 11:case"end":return e.stop()}}),e,this,[[1,8]])}))),function(e){return i.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return[C.Qx,C.yu,(0,m.iv)(l||(l=(0,u.Z)([".registry{border:1px solid var(--divider-color);border-radius:4px;margin-top:4px}.action{margin-top:24px;width:100%;display:flex;justify-content:flex-end}ha-icon-button{color:var(--error-color);margin-right:-10px;margin-inline-end:-10px;margin-inline-start:initial}"])))]}}]}}),m.oi)},54466:function(e,t,i){"use strict";i.r(t);var r,n,o,a,s,l,d=i(63038),c=i(9833),u=i(94524),h=i(27862),p=i(52565),v=i(92776),f=i(5776),g=i(21475),m=(i(38419),i(91599),i(19083),i(64228),i(61893),i(63619),i(42713),i(61006),i(39527),i(99790),i(13334),i(36993),i(31622),i(14394),i(57243)),y=i(50778),k=i(27486),b=i(36522),_=i(1416),x=(i(99426),i(82104),i(73729)),Z=(i(23043),i(56785)),w=i(69888),A=i(28008);i(83166),i(19993),i(74633),(0,g.Z)([(0,y.Mo)("dialog-hassio-repositories")],(function(e,t){var i,g,C,L,R=function(t){function i(){var t;(0,p.Z)(this,i);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=(0,v.Z)(this,i,[].concat(n)),e(t),t}return(0,f.Z)(i,t),(0,h.Z)(i)}(t);return{F:R,d:[{kind:"field",decorators:[(0,y.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,y.IO)("#repository_input",!0)],key:"_optionInput",value:void 0},{kind:"field",decorators:[(0,y.SB)()],key:"_repositories",value:void 0},{kind:"field",decorators:[(0,y.SB)()],key:"_dialogParams",value:void 0},{kind:"field",decorators:[(0,y.SB)()],key:"_opened",value:function(){return!1}},{kind:"field",decorators:[(0,y.SB)()],key:"_processing",value:function(){return!1}},{kind:"field",decorators:[(0,y.SB)()],key:"_error",value:void 0},{kind:"method",key:"showDialog",value:(L=(0,u.Z)((0,c.Z)().mark((function e(t){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._dialogParams=t,this._opened=!0,e.next=4,this._loadData();case 4:return e.next=6,this.updateComplete;case 6:case"end":return e.stop()}}),e,this)}))),function(e){return L.apply(this,arguments)})},{kind:"method",key:"closeDialog",value:function(){this._dialogParams=void 0,this._opened=!1,this._error=""}},{kind:"field",key:"_filteredRepositories",value:function(){var e=this;return(0,k.Z)((function(t){return t.filter((function(e){return"core"!==e.slug&&"local"!==e.slug&&"a0d7b954"!==e.slug&&"5c53de3b"!==e.slug&&"d5369777"!==e.slug})).sort((function(t,i){return(0,_.f)(t.name,i.name,e.hass.locale.language)}))}))}},{kind:"field",key:"_filteredUsedRepositories",value:function(){return(0,k.Z)((function(e,t){return e.filter((function(e){return t.some((function(t){return t.repository===e.slug}))})).map((function(e){return e.slug}))}))}},{kind:"method",key:"render",value:function(){var e,t,i=this;if(null===(e=this._dialogParams)||void 0===e||!e.supervisor||void 0===this._repositories)return m.Ld;var l=this._filteredRepositories(this._repositories),c=this._filteredUsedRepositories(l,this._dialogParams.supervisor.addon.addons);return(0,m.dy)(r||(r=(0,d.Z)([' <ha-dialog .open="','" @closed="','" scrimClickAction escapeKeyAction .heading="','"> ',' <div class="form"> <ha-md-list> ',' </ha-md-list> <div class="layout horizontal bottom"> <ha-textfield class="flex-auto" id="repository_input" .value="','" .label="','" @keydown="','" dialogInitialFocus></ha-textfield> <mwc-button @click="','"> ',' </mwc-button> </div> </div> <mwc-button slot="primaryAction" @click="','"> '," </mwc-button> </ha-dialog> "])),this._opened,this.closeDialog,(0,x.i)(this.hass,this._dialogParams.supervisor.localize("dialog.repositories.title")),this._error?(0,m.dy)(n||(n=(0,d.Z)(['<ha-alert alert-type="error">',"</ha-alert>"])),this._error):"",l.length?l.map((function(e){return(0,m.dy)(o||(o=(0,d.Z)([' <ha-md-list-item class="option"> ',' <div slot="supporting-text"> <div>',"</div> <div>",'</div> </div> <div class="delete" slot="end"> <ha-icon-button .disabled="','" .slug="','" .path="','" @click="','"> </ha-icon-button> <simple-tooltip animation-delay="0" position="bottom" offset="1"> '," </simple-tooltip> </div> </ha-md-list-item> "])),e.name,e.maintainer,e.url,c.includes(e.slug),e.slug,c.includes(e.slug)?"M2 5.27L3.28 4L5 5.72L5.28 6L6.28 7L18 18.72L20 20.72L18.73 22L17.27 20.54C16.93 20.83 16.5 21 16 21H8C6.9 21 6 20.1 6 19V9.27L2 5.27M19 4V6H7.82L5.82 4H8.5L9.5 3H14.5L15.5 4H19M18 7V16.18L8.82 7H18Z":"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",i._removeRepository,i._dialogParams.supervisor.localize(c.includes(e.slug)?"dialog.repositories.used":"dialog.repositories.remove"))})):(0,m.dy)(a||(a=(0,d.Z)(["<ha-md-list-item>","</ha-md-list-item>"])),this._dialogParams.supervisor.localize("dialog.repositories.no_repositories")),this._dialogParams.url||"",this._dialogParams.supervisor.localize("dialog.repositories.add"),this._handleKeyAdd,this._addRepository,this._processing?(0,m.dy)(s||(s=(0,d.Z)(['<ha-circular-progress indeterminate size="small"></ha-circular-progress>']))):this._dialogParams.supervisor.localize("dialog.repositories.add"),this.closeDialog,null===(t=this._dialogParams)||void 0===t?void 0:t.supervisor.localize("common.close"))}},{kind:"get",static:!0,key:"styles",value:function(){return[A.Qx,A.yu,(0,m.iv)(l||(l=(0,d.Z)(["ha-dialog.button-left{--justify-action-buttons:flex-start}paper-icon-item{cursor:pointer}.form{color:var(--primary-text-color)}.option{border:1px solid var(--divider-color);border-radius:4px;margin-top:4px}mwc-button{margin-left:8px;margin-inline-start:8px;margin-inline-end:initial}ha-circular-progress{display:block;margin:32px;text-align:center}div.delete ha-icon-button{color:var(--error-color)}ha-md-list-item{position:relative;--md-item-overflow:visible}"])))]}},{kind:"method",key:"focus",value:function(){var e=this;this.updateComplete.then((function(){var t;return null===(t=e.shadowRoot)||void 0===t||null===(t=t.querySelector("[dialogInitialFocus]"))||void 0===t?void 0:t.focus()}))}},{kind:"method",key:"_handleKeyAdd",value:function(e){e.stopPropagation(),"Enter"===e.key&&this._addRepository()}},{kind:"method",key:"_loadData",value:(C=(0,u.Z)((0,c.Z)().mark((function e(){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,w.iV)(this.hass);case 3:this._repositories=e.sent,(0,b.B)(this,"supervisor-collection-refresh",{collection:"addon"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this._error=(0,Z.js)(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])}))),function(){return C.apply(this,arguments)})},{kind:"method",key:"_addRepository",value:(g=(0,u.Z)((0,c.Z)().mark((function e(){var t;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=this._optionInput)&&t.value){e.next=3;break}return e.abrupt("return");case 3:return this._processing=!0,e.prev=4,e.next=7,(0,w.FV)(this.hass,t.value);case 7:return e.next=9,this._loadData();case 9:t.value="",e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),this._error=(0,Z.js)(e.t0);case 15:this._processing=!1;case 16:case"end":return e.stop()}}),e,this,[[4,12]])}))),function(){return g.apply(this,arguments)})},{kind:"method",key:"_removeRepository",value:(i=(0,u.Z)((0,c.Z)().mark((function e(t){var i;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.currentTarget.slug,e.prev=1,e.next=4,(0,w.Cw)(this.hass,i);case 4:return e.next=6,this._loadData();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),this._error=(0,Z.js)(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])}))),function(e){return i.apply(this,arguments)})}]}}),m.oi)},79419:function(e,t,i){"use strict";i.d(t,{_:function(){return r}});i(19134),i(97003);var r=function(e){return e.normalize("NFD").replace(/[\u0300-\u036F]/g,"")}},58776:function(e,t,i){"use strict";i.d(t,{Q2:function(){return a},io:function(){return s},ou:function(){return l}});var r=i(22936),n=i(11655),o=(i(27046),i(71695),i(39304),i(42713),i(19134),i(11740),i(99341),i(47706),i(39527),i(41360),i(49207),i(47021),i(71513),i(75656),i(50100),i(18084),i(14463)),a=function(){var e,t={},i=new URLSearchParams(o.E.location.search),a=(0,n.Z)(i.entries());try{for(a.s();!(e=a.n()).done;){var s=(0,r.Z)(e.value,2),l=s[0],d=s[1];t[l]=d}}catch(c){a.e(c)}finally{a.f()}return t},s=function(e){return new URLSearchParams(o.E.location.search).get(e)},l=function(e){var t=new URLSearchParams;return Object.entries(e).forEach((function(e){var i=(0,r.Z)(e,2),n=i[0],o=i[1];t.append(n,o)})),t.toString()}},34273:function(e,t,i){"use strict";var r,n,o=i(63038),a=i(27862),s=i(52565),l=i(92776),d=i(5776),c=i(21475),u=i(77204),h=(i(38419),i(23509),i(42713),i(72015),i(87673),i(39527),i(41360),i(49207),i(22997),i(57243)),p=i(50778),v=i(14463),f=i(8338);(0,c.Z)([(0,p.Mo)("ha-button-menu")],(function(e,t){var i=function(t){function i(){var t;(0,s.Z)(this,i);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=(0,l.Z)(this,i,[].concat(n)),e(t),t}return(0,d.Z)(i,t),(0,a.Z)(i)}(t);return{F:i,d:[{kind:"field",key:f.gA,value:void 0},{kind:"field",decorators:[(0,p.Cb)()],key:"corner",value:function(){return"BOTTOM_START"}},{kind:"field",decorators:[(0,p.Cb)()],key:"menuCorner",value:function(){return"START"}},{kind:"field",decorators:[(0,p.Cb)({type:Number})],key:"x",value:function(){return null}},{kind:"field",decorators:[(0,p.Cb)({type:Number})],key:"y",value:function(){return null}},{kind:"field",decorators:[(0,p.Cb)({type:Boolean})],key:"multi",value:function(){return!1}},{kind:"field",decorators:[(0,p.Cb)({type:Boolean})],key:"activatable",value:function(){return!1}},{kind:"field",decorators:[(0,p.Cb)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,p.Cb)({type:Boolean})],key:"fixed",value:function(){return!1}},{kind:"field",decorators:[(0,p.Cb)({type:Boolean,attribute:"no-anchor"})],key:"noAnchor",value:function(){return!1}},{kind:"field",decorators:[(0,p.IO)("mwc-menu",!0)],key:"_menu",value:void 0},{kind:"get",key:"items",value:function(){var e;return null===(e=this._menu)||void 0===e?void 0:e.items}},{kind:"get",key:"selected",value:function(){var e;return null===(e=this._menu)||void 0===e?void 0:e.selected}},{kind:"method",key:"focus",value:function(){var e,t;null!==(e=this._menu)&&void 0!==e&&e.open?this._menu.focusItemAtIndex(0):null===(t=this._triggerButton)||void 0===t||t.focus()}},{kind:"method",key:"render",value:function(){return(0,h.dy)(r||(r=(0,o.Z)([' <div @click="','"> <slot name="trigger" @slotchange="','"></slot> </div> <mwc-menu .corner="','" .menuCorner="','" .fixed="','" .multi="','" .activatable="','" .y="','" .x="','"> <slot></slot> </mwc-menu> '])),this._handleClick,this._setTriggerAria,this.corner,this.menuCorner,this.fixed,this.multi,this.activatable,this.y,this.x)}},{kind:"method",key:"firstUpdated",value:function(e){var t=this;(0,u.Z)(i,"firstUpdated",this,3)([e]),"rtl"===v.E.document.dir&&this.updateComplete.then((function(){t.querySelectorAll("mwc-list-item").forEach((function(e){var t=document.createElement("style");t.innerHTML="span.material-icons:first-of-type { margin-left: var(--mdc-list-item-graphic-margin, 32px) !important; margin-right: 0px !important;}",e.shadowRoot.appendChild(t)}))}))}},{kind:"method",key:"_handleClick",value:function(){this.disabled||(this._menu.anchor=this.noAnchor?null:this,this._menu.show())}},{kind:"get",key:"_triggerButton",value:function(){return this.querySelector('ha-icon-button[slot="trigger"], mwc-button[slot="trigger"]')}},{kind:"method",key:"_setTriggerAria",value:function(){this._triggerButton&&(this._triggerButton.ariaHasPopup="menu")}},{kind:"get",static:!0,key:"styles",value:function(){return(0,h.iv)(n||(n=(0,o.Z)([":host{display:inline-block;position:relative}::slotted([disabled]){color:var(--disabled-text-color)}"])))}}]}}),h.oi)},73729:function(e,t,i){"use strict";i.d(t,{i:function(){return k}});var r,n,o,a=i(27862),s=i(52565),l=i(92776),d=i(5776),c=i(21475),u=i(77204),h=i(63038),p=(i(22152),i(38419),i(83069),i(74966)),v=i(51408),f=i(57243),g=i(50778),m=i(8338),y=(i(23043),["button","ha-list-item"]),k=function(e,t){var i;return(0,f.dy)(r||(r=(0,h.Z)([' <div class="header_title"> <span>','</span> <ha-icon-button .label="','" .path="','" dialogAction="close" class="header_button"></ha-icon-button> </div> '])),t,null!==(i=null==e?void 0:e.localize("ui.dialogs.generic.close"))&&void 0!==i?i:"Close","M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z")};(0,c.Z)([(0,g.Mo)("ha-dialog")],(function(e,t){var i=function(t){function i(){var t;(0,s.Z)(this,i);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=(0,l.Z)(this,i,[].concat(n)),e(t),t}return(0,d.Z)(i,t),(0,a.Z)(i)}(t);return{F:i,d:[{kind:"field",key:m.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,t){var i;null===(i=this.contentElement)||void 0===i||i.scrollTo(e,t)}},{kind:"method",key:"renderHeading",value:function(){return(0,f.dy)(n||(n=(0,h.Z)(['<slot name="heading"> '," </slot>"])),(0,u.Z)(i,"renderHeading",this,3)([]))}},{kind:"method",key:"firstUpdated",value:function(){var e;(0,u.Z)(i,"firstUpdated",this,3)([]),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,y].join(", "),this._updateScrolledAttribute(),null===(e=this.contentElement)||void 0===e||e.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,u.Z)(i,"disconnectedCallback",this,3)([]),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value:function(){var e=this;return function(){e._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:function(){return[v.W,(0,f.iv)(o||(o=(0,h.Z)([":host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(\n          --dialog-scroll-divider-color,\n          var(--divider-color)\n        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{content:unset}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px);-webkit-backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);background:var(--ha-dialog-surface-background,var(--mdc-theme-surface,#fff))}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{position:relative;padding-right:40px;padding-inline-end:40px;padding-inline-start:initial;direction:var(--direction)}.header_title span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block}.header_button{position:absolute;right:-12px;top:-12px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:-12px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}"])))]}}]}}),p.M)},74633:function(e,t,i){"use strict";var r,n=i(63038),o=i(10265),a=i(27862),s=i(52565),l=i(92776),d=i(5776),c=i(21475),u=i(77204),h=(i(38419),i(78755)),p=i(57243),v=i(50778);(0,c.Z)([(0,v.Mo)("ha-md-list-item")],(function(e,t){var i=function(t){function i(){var t;(0,s.Z)(this,i);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=(0,l.Z)(this,i,[].concat(n)),e(t),t}return(0,d.Z)(i,t),(0,a.Z)(i)}(t);return{F:i,d:[{kind:"field",static:!0,key:"styles",value:function(){return[].concat((0,o.Z)((0,u.Z)(i,"styles",this)),[(0,p.iv)(r||(r=(0,n.Z)([":host{--ha-icon-display:block;--md-sys-color-primary:var(--primary-text-color);--md-sys-color-secondary:var(--secondary-text-color);--md-sys-color-surface:var(--card-background-color);--md-sys-color-on-surface:var(--primary-text-color);--md-sys-color-on-surface-variant:var(--secondary-text-color)}md-item{overflow:var(--md-item-overflow,hidden)}"])))])}}]}}),h.g)},19993:function(e,t,i){"use strict";var r,n=i(63038),o=i(10265),a=i(27862),s=i(52565),l=i(92776),d=i(5776),c=i(21475),u=i(77204),h=(i(38419),i(623)),p=i(57243),v=i(50778);(0,c.Z)([(0,v.Mo)("ha-md-list")],(function(e,t){var i=function(t){function i(){var t;(0,s.Z)(this,i);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=(0,l.Z)(this,i,[].concat(n)),e(t),t}return(0,d.Z)(i,t),(0,a.Z)(i)}(t);return{F:i,d:[{kind:"field",static:!0,key:"styles",value:function(){return[].concat((0,o.Z)((0,u.Z)(i,"styles",this)),[(0,p.iv)(r||(r=(0,n.Z)([":host{--md-sys-color-surface:var(--card-background-color)}"])))])}}]}}),h.j)},30509:function(e,t,i){"use strict";var r,n,o=i(63038),a=i(27862),s=i(52565),l=i(92776),d=i(5776),c=i(21475),u=(i(38419),i(57243)),h=i(50778);(0,c.Z)([(0,h.Mo)("ha-settings-row")],(function(e,t){var i=function(t){function i(){var t;(0,s.Z)(this,i);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=(0,l.Z)(this,i,[].concat(n)),e(t),t}return(0,d.Z)(i,t),(0,a.Z)(i)}(t);return{F:i,d:[{kind:"field",decorators:[(0,h.Cb)({type:Boolean,reflect:!0})],key:"narrow",value:function(){return!1}},{kind:"field",decorators:[(0,h.Cb)({type:Boolean,reflect:!0})],key:"slim",value:function(){return!1}},{kind:"field",decorators:[(0,h.Cb)({type:Boolean,attribute:"three-line"})],key:"threeLine",value:function(){return!1}},{kind:"field",decorators:[(0,h.Cb)({type:Boolean,attribute:"wrap-heading",reflect:!0})],key:"wrapHeading",value:function(){return!1}},{kind:"method",key:"render",value:function(){return(0,u.dy)(r||(r=(0,o.Z)([' <div class="prefix-wrap"> <slot name="prefix"></slot> <div class="body" ?two-line="','" ?three-line="','"> <slot name="heading"></slot> <div class="secondary"><slot name="description"></slot></div> </div> </div> <div class="content"><slot></slot></div> '])),!this.threeLine,this.threeLine)}},{kind:"get",static:!0,key:"styles",value:function(){return(0,u.iv)(n||(n=(0,o.Z)([":host{display:flex;padding:0 16px;align-content:normal;align-self:auto;align-items:center}.body{padding-top:8px;padding-bottom:8px;padding-left:0;padding-inline-start:0;padding-right:16px;padding-inline-end:16px;overflow:hidden;display:var(--layout-vertical_-_display,flex);flex-direction:var(--layout-vertical_-_flex-direction,column);justify-content:var(--layout-center-justified_-_justify-content,center);flex:var(--layout-flex_-_flex,1);flex-basis:var(--layout-flex_-_flex-basis,0.000000001px)}.body[three-line]{min-height:var(--paper-item-body-three-line-min-height,88px)}:host(:not([wrap-heading])) body>*{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.body>.secondary{display:block;padding-top:4px;font-family:var(\n          --mdc-typography-body2-font-family,\n          var(--mdc-typography-font-family, Roboto, sans-serif)\n        );-webkit-font-smoothing:antialiased;font-size:var(--mdc-typography-body2-font-size, .875rem);font-weight:var(--mdc-typography-body2-font-weight,400);line-height:normal;color:var(--secondary-text-color)}.body[two-line]{min-height:calc(var(--paper-item-body-two-line-min-height,72px) - 16px);flex:1}.content{display:contents}:host(:not([narrow])) .content{display:var(--settings-row-content-display,flex);justify-content:flex-end;flex:1;padding:16px 0}.content ::slotted(*){width:var(--settings-row-content-width)}:host([narrow]){align-items:normal;flex-direction:column;border-top:1px solid var(--divider-color);padding-bottom:8px}::slotted(ha-switch){padding:16px 0}.secondary{white-space:normal}.prefix-wrap{display:var(--settings-row-prefix-display)}:host([narrow]) .prefix-wrap{display:flex;align-items:center}:host([slim]),:host([slim]) .content,:host([slim]) ::slotted(ha-switch){padding:0}:host([slim]) .body{min-height:0}"])))}}]}}),u.oi)},22152:function(){Element.prototype.toggleAttribute||(Element.prototype.toggleAttribute=function(e,t){return void 0!==t&&(t=!!t),this.hasAttribute(e)?!!t||(this.removeAttribute(e),!1):!1!==t&&(this.setAttribute(e,""),!0)})},50566:function(e,t,i){"use strict";i.d(t,{z:function(){return o}});i(64228),i(13334);var r=i(41298),n=i(79419),o=function(e,t){var i,o=r.Z.config.getFn(e,t);return Array.isArray(o)?o.map((function(e){return(0,n._)(null!=e?e:"")})):(0,n._)(null!==(i=o)&&void 0!==i?i:"")}},30338:function(e,t,i){"use strict";var r=i(97934),n=i(71998),o=i(4576),a=i(36760);e.exports=function(e,t){t&&"string"==typeof e||n(e);var i=a(e);return o(n(void 0!==i?r(i,e):e))}},60933:function(e,t,i){"use strict";var r=i(40810),n=i(57877),o=i(63983),a=i(12360),s=i(13053),l=i(47645);r({target:"Array",proto:!0},{flatMap:function(e){var t,i=a(this),r=s(i);return o(e),(t=l(i,0)).length=n(t,i,i,r,0,1,e,arguments.length>1?arguments[1]:void 0),t}})},32126:function(e,t,i){"use strict";i(35709)("flatMap")},25677:function(e,t,i){"use strict";var r=i(40810),n=i(97934),o=i(63983),a=i(71998),s=i(4576),l=i(30338),d=i(79995),c=i(14181),u=i(92288),h=d((function(){for(var e,t,i=this.iterator,r=this.mapper;;){if(t=this.inner)try{if(!(e=a(n(t.next,t.iterator))).done)return e.value;this.inner=null}catch(o){c(i,"throw",o)}if(e=a(n(this.next,i)),this.done=!!e.done)return;try{this.inner=l(r(e.value,this.counter++),!1)}catch(o){c(i,"throw",o)}}}));r({target:"Iterator",proto:!0,real:!0,forced:u},{flatMap:function(e){return a(this),o(e),new h(s(this),{mapper:e,inner:null})}})},34810:function(e,t,i){"use strict";i(25677)}}]);
//# sourceMappingURL=6330.2c88ae08f49085f2.js.map