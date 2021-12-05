(window.webpackJsonp=window.webpackJsonp||[]).push([[17,76,83,85],{1274:function(t,e,o){"use strict";o.r(e);o(14),o(10),o(9),o(18),o(19);var r=o(4),n=o(6);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"BettingSettingsButton",methods:c(c({},Object(n.d)({openModal:"OPEN_MODAL"})),{},{openSettings:function(){this.openModal({modalHeading:this.$t("words.settings"),modalComponent:"MatchListFilterOddsSettings"})}})},f=o(2),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{staticClass:"btn-filter betting-settings-button",attrs:{type:"button"},on:{click:t.openSettings}},[o("i",{staticClass:"btn-filter__icon m-0 icon-settings"})])}),[],!1,null,null,null);e.default=component.exports},1457:function(t,e,o){"use strict";o.r(e);o(14),o(10),o(9),o(18),o(19);var r=o(4),n=o(6);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"BettingToolsSubHeader",computed:c(c({},Object(n.c)({doingFilter:"bettingTools/doingFilter",doingReset:"bettingTools/doingReset",toolActiveFilters:"bettingTools/toolActiveFilters",filterSort:"bettingTools/filterSort"})),{},{activeFiltersCount:function(){if(this.$device.isMobileOrTablet){var t=0;return this.toolActiveFilters.hasOwnProperty("markets")&&""!==this.toolActiveFilters.markets&&t++,this.toolActiveFilters.hasOwnProperty("profitPercentage")&&"1.00,20.00"!==this.toolActiveFilters.profitPercentage&&t++,this.toolActiveFilters.hasOwnProperty("sports")&&""!==this.toolActiveFilters.sports&&t++,this.toolActiveFilters.hasOwnProperty("bookmakers")&&""!==this.toolActiveFilters.bookmakers&&t++,this.toolActiveFilters.hasOwnProperty("overValue")&&"20.00,100.00"!==this.toolActiveFilters.overValue&&t++,this.toolActiveFilters.hasOwnProperty("oddsRangeMin")&&"1.01"!==this.toolActiveFilters.oddsRangeMin&&t++,this.toolActiveFilters.hasOwnProperty("oddsRangeMax")&&"10.00"!==this.toolActiveFilters.oddsRangeMax&&t++,this.toolActiveFilters.hasOwnProperty("dropPercentage")&&"10.00,100.00"!==this.toolActiveFilters.dropPercentage&&t++,this.toolActiveFilters.hasOwnProperty("dropDuringPeriod")&&"1day"!==this.toolActiveFilters.dropDuringPeriod&&t++,this.toolActiveFilters.hasOwnProperty("blockedOddsPercentage")&&"20.00,100.00"!==this.toolActiveFilters.blockedOddsPercentage&&t++,this.toolActiveFilters.hasOwnProperty("blockedDuringPeriod")&&"1day"!==this.toolActiveFilters.blockedDuringPeriod&&t++,this.toolActiveFilters.hasOwnProperty("blockedBookiesPercentage")&&"20.00,100.00"!==this.toolActiveFilters.blockedBookiesPercentage&&t++,t}return 0},filterStyles:function(){return this.doingFilter||this.doingReset?{pointerEvents:"none"}:""}}),methods:c({openFiltersMenu:function(){this.doingReset||this.doingFilter||this.openModal({modalComponent:"AppFilters",modalHeading:"Filter By",modalComponentProps:{component:"BettingToolsFilters"}})},openSortingMenu:function(){this.doingReset||this.doingFilter||this.openModal({modalComponent:"BettingToolsSortBy",modalHeading:"Sort By"})}},Object(n.d)({openModal:"OPEN_MODAL",setFilteringOpenInModal:"bettingTools/SET_FILTERING_OPEN_IN_MODAL"}))},f=(o(1803),o(2)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"btools-sub-header",style:t.filterStyles},[t.$device.isMobileOrTablet?o("a",{staticClass:"btools-filter-by",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.openFiltersMenu(e)}}},[o("span",[t._v(t._s(t.$t("button_labels.filter_by"))+" "),t.activeFiltersCount>0?o("strong",[t._v("("+t._s(t.activeFiltersCount)+")")]):t._e()]),t._v(" "),t._m(0)]):t._e(),t._v(" "),t.$device.isMobileOrTablet?o("a",{staticClass:"btools-sort-by",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.openSortingMenu(e)}}},[o("span",[t._v(t._s(t.$t("button_labels.sort_by"))+": "+t._s(t.$t("betting_tools_sort."+t.filterSort)))]),t._v(" "),t._m(1)]):t._e(),t._v(" "),t.$device.isMobileOrTablet?o("BettingSettingsButton"):t._e(),t._v(" "),t.$device.isDesktop?o("BettingToolsSortByDropdown"):t._e(),t._v(" "),o("client-only",[o("BettingToolsRefreshTimerDropdown")],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"btools-filter-by__icon"},[e("i",{staticClass:"icon-filter"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"btools-sort-by__icon"},[e("i",{staticClass:"icon-sort-by"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BettingSettingsButton:o(1274).default,BettingToolsSortByDropdown:o(1720).default,BettingToolsRefreshTimerDropdown:o(1721).default})},1650:function(t,e,o){var content=o(1804);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(33).default)("177171d2",content,!0,{sourceMap:!1})},1720:function(t,e,o){"use strict";o.r(e);o(14),o(10),o(9),o(18),o(19);var r=o(1),n=o(4),l=(o(68),o(20),o(6));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"BettingToolsSortByDropdown",mixins:[o(828).mixin],data:function(){return{activeFilter:{},isDropdownOpen:!1}},computed:d({},Object(l.c)({toolSortOptions:"bettingTools/toolSortOptions",filterSort:"bettingTools/filterSort"})),methods:d({toggleDropdown:function(){this.isDropdownOpen=!this.isDropdownOpen},closeDropdown:function(){this.isDropdownOpen=!1},selectFilter:function(filter){this.activeFilter=filter,this.applyFilter()},applyFilter:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.closeDropdown(),e.next=3,t.filterBySort(t.activeFilter.id);case 3:case"end":return e.stop()}}),e)})))()}},Object(l.b)({filterBySort:"bettingTools/filterBySort"})),mounted:function(){var t=this;""===this.filterSort?this.selectFilter(this.toolSortOptions[0]):this.activeFilter=this.toolSortOptions.find((function(e){return e.id===t.filterSort}))}},h=o(2),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"btools-sort-by-dropdown btools-dropdown__menu",class:{open:t.isDropdownOpen}},[o("a",{staticClass:"btools-dropdown__toggle",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.toggleDropdown(e)}}},[o("span",[t._v(t._s(t.$t("betting_tools_sort."+t.activeFilter.id)))]),t._v(" "),o("i",{staticClass:"icon-down"})]),t._v(" "),t.isDropdownOpen?o("ul",{directives:[{name:"on-clickout",rawName:"v-on-clickout",value:t.closeDropdown,expression:"closeDropdown"}]},t._l(t.toolSortOptions,(function(filter){return o("li",[o("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.selectFilter(filter)}}},[o("span",[t._v("\n\t\t\t\t\t"+t._s(t.$t("betting_tools_sort."+filter.id))+"\n\t\t\t\t")])])])})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports},1721:function(t,e,o){"use strict";o.r(e);o(14),o(10),o(9),o(18),o(19);var r=o(1),n=o(4),l=(o(20),o(6));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"BettingToolsRefreshTimerDropdown",mixins:[o(828).mixin],data:function(){return{enableAutoRefresh:!0,startTime:"",endTime:"",isLoading:!1,isDropdownOpen:!1}},computed:d({refreshIntervalSecs:{get:function(){return this.$store.getters["bettingTools/refreshIntervalSecs"]},set:function(t){this.setAutoRefreshInterval(t)}}},Object(l.c)({refreshTimerOptions:"bettingTools/toolRefreshTimerOptions",doingFilter:"bettingTools/doingFilter",doingReset:"bettingTools/doingReset",modalOpen:"modalOpen",isRefreshTimerEnabled:"bettingTools/isRefreshTimerEnabled"})),watch:{doingFilter:function(t,e){!1===t&&this.resetTimer()},modalOpen:function(t,e){!1===t&&this.resetTimer()}},methods:d(d({autoRefresh:function(){var t=arguments,e=this;return Object(r.a)(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(r=t.length>0&&void 0!==t[0]&&t[0],!e.isRefreshTimerEnabled&&!r){o.next=7;break}return e.isLoading=!0,o.next=5,e.applyFilters();case 5:e.resetTimer(),e.isLoading=!1;case 7:case"end":return o.stop()}}),o)})))()},onTimerEnd:function(t){this.isLoading||this.doingFilter||this.doingReset||this.modalOpen||this.autoRefresh()},resetTimer:function(){var t=new Date;this.startTime=t.getTime(),this.endTime=t.getTime()+1e3*this.refreshIntervalSecs},forceRefresh:function(){this.autoRefresh(!0)},switchRefreshInterval:function(t){this.setRefreshTimerEnabled(!0),this.refreshIntervalSecs=t,this.forceRefresh(),this.closeDropdown()},toggleDropdown:function(){this.$device.isDesktop?this.isDropdownOpen=!this.isDropdownOpen:this.openModal({modalComponent:"BettingToolsRefreshTimerSelect",modalHeading:this.$t("betting_tools.auto_refresh")})},closeDropdown:function(){this.isDropdownOpen=!1},disableRefreshTimer:function(){this.setRefreshTimerEnabled(!1),this.closeDropdown()}},Object(l.b)({applyFilters:"bettingTools/applyFilters"})),Object(l.d)({setAutoRefreshInterval:"bettingTools/SET_AUTO_REFRESH_INTERVAL",openModal:"OPEN_MODAL",setRefreshTimerEnabled:"bettingTools/SET_REFRESH_TIMER_ENABLED"})),mounted:function(){this.resetTimer()}},h=o(2),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.enableAutoRefresh?o("div",{staticClass:"btools-auto-refresh btools-dropdown"},[o("span",[t._v(t._s(t.$t("betting_tools.auto_refresh"))+":")]),t._v(" "),o("div",{staticClass:"btools-dropdown__menu",class:{open:t.isDropdownOpen}},[o("a",{staticClass:"btools-dropdown__toggle",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.toggleDropdown(e)}}},[t.startTime&&t.endTime&&t.isRefreshTimerEnabled?o("VueCountdownTimer",{attrs:{"start-time":t.startTime,"end-time":(t.endTime,t.endTime),interval:1e3,"start-label":"","end-label":"","label-position":"begin","end-text":"","day-txt":"","hour-txt":"","minutes-txt":"","seconds-txt":""},on:{end_callback:t.onTimerEnd},scopedSlots:t._u([{key:"countdown",fn:function(e){return[e.props.seconds<=5?o("span",{style:{color:"#F33C59"}},[t._v(t._s(e.props.seconds))]):t._e(),t._v(" "),e.props.seconds>5&&e.props.seconds<=15?o("span",{style:{color:"#FDB92C"}},[t._v(t._s(e.props.seconds))]):t._e(),t._v(" "),e.props.seconds>15?o("span",{style:{color:"#00B1FF"}},[t._v(t._s(e.props.seconds))]):t._e()]}}],null,!1,2228601010)}):t._e(),t._v(" "),t.isRefreshTimerEnabled?o("span",[t._v(t._s(t.$t("betting_tools.seconds"))+".")]):o("span",[t._v(t._s(t.$t("words.disabled")))]),t._v(" "),o("i",{staticClass:"icon-down"})],1),t._v(" "),t.isDropdownOpen?o("ul",{directives:[{name:"on-clickout",rawName:"v-on-clickout",value:t.closeDropdown,expression:"closeDropdown"}]},[o("li",[o("a",{key:"refresh-timer-disabled",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.disableRefreshTimer(e)}}},[o("span",[t._v("\n\t\t\t\t\t\t"+t._s(t.$t("words.disabled"))+"\n\t\t\t\t\t")])])]),t._v(" "),t._l(t.refreshTimerOptions,(function(option,e){return o("li",[o("a",{key:"refresh-timer-opt-"+e,attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.switchRefreshInterval(option.seconds)}}},[o("span",[t._v("\n\t\t\t\t\t\t"+t._s(option.seconds+" "+t.$t("betting_tools.seconds"))+"\n\t\t\t\t\t")])])])}))],2):t._e()]),t._v(" "),o("a",{staticClass:"btools-auto-refresh__force",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.forceRefresh(e)}}},[o("i",{staticClass:"icon-refresh"}),t._v(" "),o("span",[t._v(t._s(t.$t("button_labels.refresh_now")))])])]):t._e()}),[],!1,null,null,null);e.default=component.exports},1803:function(t,e,o){"use strict";o(1650)},1804:function(t,e,o){var r=o(32)(!1);r.push([t.i,'.btools-alert-settings-wrapper p,.btools-auto-refresh,.btools-filter-by,.btools-sort-by{font-family:Roboto,"Roboto",sans-serif;font-weight:400;font-style:normal}.btools-sub-header{align-items:center;display:flex;flex-direction:row;margin-bottom:20px}@media (max-width:1279px){.btools-sub-header{flex-wrap:wrap}.btools-sub-header .btools-filter-by,.btools-sub-header .btools-sort-by{width:calc(50% - 29px)}.btools-sub-header .btools-sort-by{margin-right:0}.btools-sub-header .betting-settings-button{margin-left:12px}}.btools-auto-refresh{color:#1a3150;font-size:13px;margin-left:auto;display:flex;align-items:center}.btools-auto-refresh__force:hover{text-decoration:underline!important;color:#00b1ff}.btools-auto-refresh .btools-dropdown__toggle{min-width:115px}@media (max-width:1279px){.btools-auto-refresh{display:flex;justify-content:center;margin-top:15px;width:100%}}.btools-alert-settings-wrapper{padding:0 0 80px;position:relative}.btools-alert-settings-wrapper p{color:#6f8caa;font-size:13px;margin:0 auto;max-width:260px;text-align:center}.btools-alert-settings-wrapper .app-filters-apply{display:block}.btools-sort-by-wrapper{padding:0 0 80px;position:relative}.btools-sort-by-wrapper.no-btn{padding:0 0 20px}.btools-sort-by-wrapper .app-filters-apply{display:block}.btools-refresh-timer-wrapper{padding:0 0 20px;position:relative}.btools-refresh-timer-wrapper .app-filters-apply{display:none!important}.btools-sort-by-dropdown{width:150px;margin-left:0!important}.btools-dropdown__menu{margin:0 10px;background-color:#f5f7f9;position:relative;border-radius:80px}.btools-dropdown__menu i{margin-right:4px}.btools-dropdown__menu li a{display:block;padding:8px 18px;transition:background-color,color .1s}.btools-dropdown__menu li a:hover{color:#1a3150;background-color:#f5f7f9}.btools-dropdown__menu.open{border-radius:12px 12px 0 0;background-color:#fff}.btools-dropdown__menu ul{position:absolute;top:0;left:0;right:0;z-index:10;background-color:#fff;border-radius:12px;overflow:hidden;box-shadow:0 5px 10px 1px rgba(0,0,0,.1)}.btools-dropdown__toggle{font-size:13px;color:#6f8caa;padding:6px 30px 6px 18px;position:relative;display:flex;align-items:center}@media (max-width:1279px){.btools-dropdown__toggle{background-color:#fff;border:1px solid #e1e7ed;padding:1px 20px 1px 10px;border-radius:6px}.btools-dropdown__toggle .icon-down{right:2px;font-size:10px}.btools-dropdown__toggle div>span{font-weight:500}}.btools-dropdown__toggle div+span{margin-left:4px}.btools-dropdown__toggle i{color:#6f8caa;position:absolute;top:50%;right:10px;transform:translateY(-50%);transition:transform .2s}.btools-dropdown__toggle:focus i,.btools-dropdown__toggle:hover i{color:#1a3150}.btools-filter-by,.btools-sort-by{align-items:center;background-color:#f5f7f9;border-radius:80px;display:flex;flex-direction:row;justify-content:space-between;margin-right:12px;padding:2px 2px 2px 15px;line-height:1.3;width:150px}.btools-filter-by:hover span,.btools-sort-by:hover span{color:#00b1ff}.btools-filter-by span,.btools-sort-by span{color:#6f8caa}.btools-filter-by span strong,.btools-sort-by span strong{font-weight:500;color:#00b1ff}.btools-filter-by__icon,.btools-sort-by__icon{background-color:#fff;border-radius:100px;min-height:32px;position:relative;min-width:32px}.btools-filter-by__icon i,.btools-sort-by__icon i{color:#00b1ff;font-size:9px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}@media (max-width:414px){.btools-filter-by,.btools-sort-by{width:105px}}.btools-filter-by__icon i{font-size:12px}',""]),t.exports=r},828:function(t,e,o){"use strict";var r=o(3);r="default"in r?r.default:r;var n="2.2.2";/^2\./.test(r.version)||r.util.warn("VueClickout 2.2.2 only supports Vue 2.x, and does not support Vue "+r.version);var l="_vue_clickout_handler";function c(t,e,o){d(t,e);var r=o.context,n=e.value,c=e.modifiers;if("function"==typeof n){var f=!1;setTimeout((function(){f=!0}),0),t[l]=function(e){var path=e.path||(e.composedPath?e.composedPath():void 0);if(f&&(path?path.indexOf(t)<0:!t.contains(e.target)))return c.stop&&e.stopPropagation(),n.call(r,e)},document.documentElement.addEventListener("click",t[l],c.capture)}}function d(t,e){var o=e.modifiers;document.documentElement.removeEventListener("click",t[l],o.capture),delete t[l]}var f={bind:c,update:function(t,e,o){e.value!==e.oldValue&&c(t,e,o)},unbind:d},h={directives:{onClickout:f}};e.version=n,e.directive=f,e.mixin=h}}]);
//# sourceMappingURL=e947021.js.map