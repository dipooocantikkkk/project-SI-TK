!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof exports?require("jquery"):jQuery)}(function(k,b){function _(){return new Date(Date.UTC.apply(Date,arguments))}function C(){var t=new Date;return _(t.getFullYear(),t.getMonth(),t.getDate())}function n(t,e){return t.getUTCFullYear()===e.getUTCFullYear()&&t.getUTCMonth()===e.getUTCMonth()&&t.getUTCDate()===e.getUTCDate()}function t(t,e){return function(){return e!==b&&k.fn.datepicker.deprecated(e),this[t].apply(this,arguments)}}function T(t,e){k.data(t,"datepicker",this),this._events=[],this._secondaryEvents=[],this._process_options(e),this.dates=new a,this.viewDate=this.o.defaultViewDate,this.focusDate=null,this.element=k(t),this.isInput=this.element.is("input"),this.inputField=this.isInput?this.element:this.element.find("input"),this.component=!!this.element.hasClass("date")&&this.element.find(".add-on, .input-group-addon, .input-group-append, .input-group-prepend, .btn"),this.component&&0===this.component.length&&(this.component=!1),this.isInline=!this.component&&this.element.is("div"),this.picker=k(U.template),this._check_template(this.o.templates.leftArrow)&&this.picker.find(".prev").html(this.o.templates.leftArrow),this._check_template(this.o.templates.rightArrow)&&this.picker.find(".next").html(this.o.templates.rightArrow),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&this.picker.addClass("datepicker-rtl"),this.o.calendarWeeks&&this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan",function(t,e){return Number(e)+1}),this._process_options({startDate:this._o.startDate,endDate:this._o.endDate,daysOfWeekDisabled:this.o.daysOfWeekDisabled,daysOfWeekHighlighted:this.o.daysOfWeekHighlighted,datesDisabled:this.o.datesDisabled}),this._allow_update=!1,this.setViewMode(this.o.startView),this._allow_update=!0,this.fillDow(),this.fillMonths(),this.update(),this.isInline&&this.show()}function l(t,e){k.data(t,"datepicker",this),this.element=k(t),this.inputs=k.map(e.inputs,function(t){return t.jquery?t[0]:t}),delete e.inputs,this.keepEmptyValues=e.keepEmptyValues,delete e.keepEmptyValues,i.call(k(this.inputs),e).on("changeDate",k.proxy(this.dateUpdated,this)),this.pickers=k.map(this.inputs,function(t){return k.data(t,"datepicker")}),this.updateDates()}e={get:function(t){return this.slice(t)[0]},contains:function(t){for(var e=t&&t.valueOf(),i=0,a=this.length;i<a;i++)if(0<=this[i].valueOf()-e&&this[i].valueOf()-e<864e5)return i;return-1},remove:function(t){this.splice(t,1)},replace:function(t){t&&(k.isArray(t)||(t=[t]),this.clear(),this.push.apply(this,t))},clear:function(){this.length=0},copy:function(){var t=new a;return t.replace(this),t}};var e,a=function(){var t=[];return t.push.apply(t,arguments),k.extend(t,e),t},s=(T.prototype={constructor:T,_resolveViewName:function(i){return k.each(U.viewModes,function(t,e){if(i===t||-1!==k.inArray(i,e.names))return i=t,!1}),i},_resolveDaysOfWeek:function(t){return k.isArray(t)||(t=t.split(/[,\s]*/)),k.map(t,Number)},_check_template:function(t){try{return t===b||""===t?!1:(t.match(/[<>]/g)||[]).length<=0||0<k(t).length}catch(t){return!1}},_process_options:function(t){this._o=k.extend({},this._o,t);var e,i,a=this.o=k.extend({},this._o),t=a.language,s=(M[t]||(t=t.split("-")[0],M[t]||(t=h.language)),a.language=t,a.startView=this._resolveViewName(a.startView),a.minViewMode=this._resolveViewName(a.minViewMode),a.maxViewMode=this._resolveViewName(a.maxViewMode),a.startView=Math.max(this.o.minViewMode,Math.min(this.o.maxViewMode,a.startView)),!0!==a.multidate&&(a.multidate=Number(a.multidate)||!1,!1!==a.multidate&&(a.multidate=Math.max(0,a.multidate))),a.multidateSeparator=String(a.multidateSeparator),a.weekStart%=7,a.weekEnd=(a.weekStart+6)%7,U.parseFormat(a.format)),n=(a.startDate!==-1/0&&(a.startDate?a.startDate instanceof Date?a.startDate=this._local_to_utc(this._zero_time(a.startDate)):a.startDate=U.parseDate(a.startDate,s,a.language,a.assumeNearbyYear):a.startDate=-1/0),a.endDate!==1/0&&(a.endDate?a.endDate instanceof Date?a.endDate=this._local_to_utc(this._zero_time(a.endDate)):a.endDate=U.parseDate(a.endDate,s,a.language,a.assumeNearbyYear):a.endDate=1/0),a.daysOfWeekDisabled=this._resolveDaysOfWeek(a.daysOfWeekDisabled||[]),a.daysOfWeekHighlighted=this._resolveDaysOfWeek(a.daysOfWeekHighlighted||[]),a.datesDisabled=a.datesDisabled||[],k.isArray(a.datesDisabled)||(a.datesDisabled=a.datesDisabled.split(",")),a.datesDisabled=k.map(a.datesDisabled,function(t){return U.parseDate(t,s,a.language,a.assumeNearbyYear)}),String(a.orientation).toLowerCase().split(/\s+/g)),t=a.orientation.toLowerCase(),n=k.grep(n,function(t){return/^auto|left|right|top|bottom$/.test(t)});if(a.orientation={x:"auto",y:"auto"},t&&"auto"!==t)if(1===n.length)switch(n[0]){case"top":case"bottom":a.orientation.y=n[0];break;case"left":case"right":a.orientation.x=n[0]}else t=k.grep(n,function(t){return/^left|right$/.test(t)}),a.orientation.x=t[0]||"auto",t=k.grep(n,function(t){return/^top|bottom$/.test(t)}),a.orientation.y=t[0]||"auto";a.defaultViewDate instanceof Date||"string"==typeof a.defaultViewDate?a.defaultViewDate=U.parseDate(a.defaultViewDate,s,a.language,a.assumeNearbyYear):a.defaultViewDate?(t=a.defaultViewDate.year||(new Date).getFullYear(),e=a.defaultViewDate.month||0,i=a.defaultViewDate.day||1,a.defaultViewDate=_(t,e,i)):a.defaultViewDate=C()},_applyEvents:function(t){for(var e,i,a,s=0;s<t.length;s++)e=t[s][0],2===t[s].length?(i=b,a=t[s][1]):3===t[s].length&&(i=t[s][1],a=t[s][2]),e.on(a,i)},_unapplyEvents:function(t){for(var e,i,a,s=0;s<t.length;s++)e=t[s][0],2===t[s].length?(a=b,i=t[s][1]):3===t[s].length&&(a=t[s][1],i=t[s][2]),e.off(i,a)},_buildEvents:function(){var t={keyup:k.proxy(function(t){-1===k.inArray(t.keyCode,[27,37,39,38,40,32,13,9])&&this.update()},this),keydown:k.proxy(this.keydown,this),paste:k.proxy(this.paste,this)};!0===this.o.showOnFocus&&(t.focus=k.proxy(this.show,this)),this.isInput?this._events=[[this.element,t]]:this.component&&this.inputField.length?this._events=[[this.inputField,t],[this.component,{click:k.proxy(this.show,this)}]]:this._events=[[this.element,{click:k.proxy(this.show,this),keydown:k.proxy(this.keydown,this)}]],this._events.push([this.element,"*",{blur:k.proxy(function(t){this._focused_from=t.target},this)}],[this.element,{blur:k.proxy(function(t){this._focused_from=t.target},this)}]),this.o.immediateUpdates&&this._events.push([this.element,{"changeYear changeMonth":k.proxy(function(t){this.update(t.date)},this)}]),this._secondaryEvents=[[this.picker,{click:k.proxy(this.click,this)}],[this.picker,".prev, .next",{click:k.proxy(this.navArrowsClick,this)}],[this.picker,".day:not(.disabled)",{click:k.proxy(this.dayCellClick,this)}],[k(window),{resize:k.proxy(this.place,this)}],[k(document),{"mousedown touchstart":k.proxy(function(t){this.element.is(t.target)||this.element.find(t.target).length||this.picker.is(t.target)||this.picker.find(t.target).length||this.isInline||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(t,e){e=e||this.dates.get(-1),e=this._utc_to_local(e);this.element.trigger({type:t,date:e,viewMode:this.viewMode,dates:k.map(this.dates,this._utc_to_local),format:k.proxy(function(t,e){0===arguments.length?(t=this.dates.length-1,e=this.o.format):"string"==typeof t&&(e=t,t=this.dates.length-1),e=e||this.o.format;var i=this.dates.get(t);return U.formatDate(i,e,this.o.language)},this)})},show:function(){if(!(this.inputField.is(":disabled")||this.inputField.prop("readonly")&&!1===this.o.enableOnReadonly))return this.isInline||this.picker.appendTo(this.o.container),this.place(),this.picker.show(),this._attachSecondaryEvents(),this._trigger("show"),(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&this.o.disableTouchKeyboard&&k(this.element).blur(),this},hide:function(){return this.isInline||!this.picker.is(":visible")||(this.focusDate=null,this.picker.hide().detach(),this._detachSecondaryEvents(),this.setViewMode(this.o.startView),this.o.forceParse&&this.inputField.val()&&this.setValue(),this._trigger("hide")),this},destroy:function(){return this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date,this},paste:function(t){var e;if(t.originalEvent.clipboardData&&t.originalEvent.clipboardData.types&&-1!==k.inArray("text/plain",t.originalEvent.clipboardData.types))e=t.originalEvent.clipboardData.getData("text/plain");else{if(!window.clipboardData)return;e=window.clipboardData.getData("Text")}this.setDate(e),this.update(),t.preventDefault()},_utc_to_local:function(t){if(!t)return t;var e=new Date(t.getTime()+6e4*t.getTimezoneOffset());return e=e.getTimezoneOffset()!==t.getTimezoneOffset()?new Date(t.getTime()+6e4*e.getTimezoneOffset()):e},_local_to_utc:function(t){return t&&new Date(t.getTime()-6e4*t.getTimezoneOffset())},_zero_time:function(t){return t&&new Date(t.getFullYear(),t.getMonth(),t.getDate())},_zero_utc_time:function(t){return t&&_(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate())},getDates:function(){return k.map(this.dates,this._utc_to_local)},getUTCDates:function(){return k.map(this.dates,function(t){return new Date(t)})},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){var t=this.dates.get(-1);return t!==b?new Date(t):null},clearDates:function(){this.inputField.val(""),this.update(),this._trigger("changeDate"),this.o.autoclose&&this.hide()},setDates:function(){var t=k.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,t),this._trigger("changeDate"),this.setValue(),this},setUTCDates:function(){var t=k.isArray(arguments[0])?arguments[0]:arguments;return this.setDates.apply(this,k.map(t,this._utc_to_local)),this},setDate:t("setDates"),setUTCDate:t("setUTCDates"),remove:t("destroy","Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"),setValue:function(){var t=this.getFormattedDate();return this.inputField.val(t),this},getFormattedDate:function(e){e===b&&(e=this.o.format);var i=this.o.language;return k.map(this.dates,function(t){return U.formatDate(t,e,i)}).join(this.o.multidateSeparator)},getStartDate:function(){return this.o.startDate},setStartDate:function(t){return this._process_options({startDate:t}),this.update(),this.updateNavArrows(),this},getEndDate:function(){return this.o.endDate},setEndDate:function(t){return this._process_options({endDate:t}),this.update(),this.updateNavArrows(),this},setDaysOfWeekDisabled:function(t){return this._process_options({daysOfWeekDisabled:t}),this.update(),this},setDaysOfWeekHighlighted:function(t){return this._process_options({daysOfWeekHighlighted:t}),this.update(),this},setDatesDisabled:function(t){return this._process_options({datesDisabled:t}),this.update(),this},place:function(){if(this.isInline)return this;var t=this.picker.outerWidth(),e=this.picker.outerHeight(),i=k(this.o.container),a=i.width(),s=("body"===this.o.container?k(document):i).scrollTop(),i=i.offset(),n=[0],o=(this.element.parents().each(function(){var t=k(this).css("z-index");"auto"!==t&&0!==Number(t)&&n.push(Number(t))}),Math.max.apply(Math,n)+this.o.zIndexOffset),r=(this.component?this.component.parent():this.element).offset(),d=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),h=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),l=r.left-i.left,i=r.top-i.top;"body"!==this.o.container&&(i+=s),this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),"auto"!==this.o.orientation.x?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),"right"===this.o.orientation.x&&(l-=t-h)):r.left<0?(this.picker.addClass("datepicker-orient-left"),l-=r.left-10):a<l+t?(this.picker.addClass("datepicker-orient-right"),l+=h-t):this.o.rtl?this.picker.addClass("datepicker-orient-right"):this.picker.addClass("datepicker-orient-left");r=this.o.orientation.y;return"auto"===r&&(r=-s+i-e<0?"bottom":"top"),this.picker.addClass("datepicker-orient-"+r),"top"===r?i-=e+parseInt(this.picker.css("padding-top")):i+=d,this.o.rtl?this.picker.css({top:i,right:a-(l+h),zIndex:o}):this.picker.css({top:i,left:l,zIndex:o}),this},_allow_update:!0,update:function(){if(!this._allow_update)return this;var t=this.dates.copy(),i=[],e=!1;return arguments.length?(k.each(arguments,k.proxy(function(t,e){e instanceof Date&&(e=this._local_to_utc(e)),i.push(e)},this)),e=!0):(i=(i=this.isInput?this.element.val():this.element.data("date")||this.inputField.val())&&this.o.multidate?i.split(this.o.multidateSeparator):[i],delete this.element.data().date),i=k.map(i,k.proxy(function(t){return U.parseDate(t,this.o.format,this.o.language,this.o.assumeNearbyYear)},this)),i=k.grep(i,k.proxy(function(t){return!this.dateWithinRange(t)||!t},this),!0),this.dates.replace(i),this.o.updateViewDate&&(this.dates.length?this.viewDate=new Date(this.dates.get(-1)):this.viewDate<this.o.startDate?this.viewDate=new Date(this.o.startDate):this.viewDate>this.o.endDate?this.viewDate=new Date(this.o.endDate):this.viewDate=this.o.defaultViewDate),e?(this.setValue(),this.element.change()):this.dates.length&&String(t)!==String(this.dates)&&e&&(this._trigger("changeDate"),this.element.change()),!this.dates.length&&t.length&&(this._trigger("clearDate"),this.element.change()),this.fill(),this},fillDow:function(){if(this.o.showWeekDays){var t=this.o.weekStart,e="<tr>";for(this.o.calendarWeeks&&(e+='<th class="cw">&#160;</th>');t<this.o.weekStart+7;)e+='<th class="dow',-1!==k.inArray(t,this.o.daysOfWeekDisabled)&&(e+=" disabled"),e+='">'+M[this.o.language].daysMin[t++%7]+"</th>";e+="</tr>",this.picker.find(".datepicker-days thead").append(e)}},fillMonths:function(){for(var t=this._utc_to_local(this.viewDate),e="",i=0;i<12;i++)e+='<span class="month'+(t&&t.getMonth()===i?" focused":"")+'">'+M[this.o.language].monthsShort[i]+"</span>";this.picker.find(".datepicker-months td").html(e)},setRange:function(t){t&&t.length?this.range=k.map(t,function(t){return t.valueOf()}):delete this.range,this.fill()},getClassNames:function(t){var e=[],i=this.viewDate.getUTCFullYear(),a=this.viewDate.getUTCMonth(),s=C();return t.getUTCFullYear()<i||t.getUTCFullYear()===i&&t.getUTCMonth()<a?e.push("old"):(t.getUTCFullYear()>i||t.getUTCFullYear()===i&&t.getUTCMonth()>a)&&e.push("new"),this.focusDate&&t.valueOf()===this.focusDate.valueOf()&&e.push("focused"),this.o.todayHighlight&&n(t,s)&&e.push("today"),-1!==this.dates.contains(t)&&e.push("active"),this.dateWithinRange(t)||e.push("disabled"),this.dateIsDisabled(t)&&e.push("disabled","disabled-date"),-1!==k.inArray(t.getUTCDay(),this.o.daysOfWeekHighlighted)&&e.push("highlighted"),this.range&&(t>this.range[0]&&t<this.range[this.range.length-1]&&e.push("range"),-1!==k.inArray(t.valueOf(),this.range)&&e.push("selected"),t.valueOf()===this.range[0]&&e.push("range-start"),t.valueOf()===this.range[this.range.length-1]&&e.push("range-end")),e},_fill_yearsView:function(t,d,e,c,u,p,i){for(var a,s,n,f="",o=e/10,t=this.picker.find(t),r=Math.floor(c/e)*e,h=r+9*o,g=Math.floor(this.viewDate.getFullYear()/o)*o,D=k.map(this.dates,function(t){return Math.floor(t.getUTCFullYear()/o)*o}),l=r-o;l<=h+o;l+=o)a=[d],s=null,l===r-o?a.push("old"):l===h+o&&a.push("new"),-1!==k.inArray(l,D)&&a.push("active"),(l<u||p<l)&&a.push("disabled"),l===g&&a.push("focused"),i!==k.noop&&((n=i(new Date(l,0,1)))===b?n={}:"boolean"==typeof n?n={enabled:n}:"string"==typeof n&&(n={classes:n}),!1===n.enabled&&a.push("disabled"),n.classes&&(a=a.concat(n.classes.split(/\s+/))),n.tooltip&&(s=n.tooltip)),f+='<span class="'+a.join(" ")+'"'+(s?' title="'+s+'"':"")+">"+l+"</span>";t.find(".datepicker-switch").text(r+"-"+h),t.find("td").html(f)},fill:function(){var d,t,c=new Date(this.viewDate),i=c.getUTCFullYear(),u=c.getUTCMonth(),e=this.o.startDate!==-1/0?this.o.startDate.getUTCFullYear():-1/0,p=this.o.startDate!==-1/0?this.o.startDate.getUTCMonth():-1/0,a=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,f=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,g=M[this.o.language].today||M.en.today||"",D=M[this.o.language].clear||M.en.clear||"",m=M[this.o.language].titleFormat||M.en.titleFormat,y=C(),y=(!0===this.o.todayBtn||"linked"===this.o.todayBtn)&&y>=this.o.startDate&&y<=this.o.endDate&&!this.weekOfDateIsDisabled(y);if(!isNaN(i)&&!isNaN(u)){this.picker.find(".datepicker-days .datepicker-switch").text(U.formatDate(c,m,this.o.language)),this.picker.find("tfoot .today").text(g).css("display",y?"table-cell":"none"),this.picker.find("tfoot .clear").text(D).css("display",!0===this.o.clearBtn?"table-cell":"none"),this.picker.find("thead .datepicker-title").text(this.o.title).css("display","string"==typeof this.o.title&&""!==this.o.title?"table-cell":"none"),this.updateNavArrows(),this.fillMonths();var s=_(i,u,0),c=s.getUTCDate(),n=(s.setUTCDate(c-(s.getUTCDay()-this.o.weekStart+7)%7),new Date(s));s.getUTCFullYear()<100&&n.setUTCFullYear(s.getUTCFullYear()),n.setUTCDate(n.getUTCDate()+42);for(var v,n=n.valueOf(),o=[];s.valueOf()<n;){(v=s.getUTCDay())===this.o.weekStart&&(o.push("<tr>"),this.o.calendarWeeks)&&(r=new Date(+s+(this.o.weekStart-v-7)%7*864e5),r=new Date(Number(r)+(11-r.getUTCDay())%7*864e5),h=new Date(Number(h=_(r.getUTCFullYear(),0,1))+(11-h.getUTCDay())%7*864e5),o.push('<td class="cw">'+((r-h)/864e5/7+1)+"</td>")),(r=this.getClassNames(s)).push("day");var r,h=s.getUTCDate();this.o.beforeShowDay!==k.noop&&((t=this.o.beforeShowDay(this._utc_to_local(s)))===b?t={}:"boolean"==typeof t?t={enabled:t}:"string"==typeof t&&(t={classes:t}),!1===t.enabled&&r.push("disabled"),t.classes&&(r=r.concat(t.classes.split(/\s+/))),t.tooltip&&(d=t.tooltip),t.content&&(h=t.content)),r=k.isFunction(k.uniqueSort)?k.uniqueSort(r):k.unique(r),o.push('<td class="'+r.join(" ")+'"'+(d?' title="'+d+'"':"")+' data-date="'+s.getTime().toString()+'">'+h+"</td>"),d=null,v===this.o.weekEnd&&o.push("</tr>"),s.setUTCDate(s.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").html(o.join(""));var w,m=M[this.o.language].monthsTitle||M.en.monthsTitle||"Months",l=this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode<2?m:i).end().find("tbody span").removeClass("active");k.each(this.dates,function(t,e){e.getUTCFullYear()===i&&l.eq(e.getUTCMonth()).addClass("active")}),(i<e||a<i)&&l.addClass("disabled"),i===e&&l.slice(0,p).addClass("disabled"),i===a&&l.slice(f+1).addClass("disabled"),this.o.beforeShowMonth!==k.noop&&(w=this,k.each(l,function(t,e){t=new Date(i,t,1),t=w.o.beforeShowMonth(t);t===b?t={}:"boolean"==typeof t?t={enabled:t}:"string"==typeof t&&(t={classes:t}),!1!==t.enabled||k(e).hasClass("disabled")||k(e).addClass("disabled"),t.classes&&k(e).addClass(t.classes),t.tooltip&&k(e).prop("title",t.tooltip)})),this._fill_yearsView(".datepicker-years","year",10,i,e,a,this.o.beforeShowYear),this._fill_yearsView(".datepicker-decades","decade",100,i,e,a,this.o.beforeShowDecade),this._fill_yearsView(".datepicker-centuries","century",1e3,i,e,a,this.o.beforeShowCentury)}},updateNavArrows:function(){if(this._allow_update){var t,e,i=new Date(this.viewDate),a=i.getUTCFullYear(),s=i.getUTCMonth(),n=this.o.startDate!==-1/0?this.o.startDate.getUTCFullYear():-1/0,o=this.o.startDate!==-1/0?this.o.startDate.getUTCMonth():-1/0,r=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,h=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,l=1;switch(this.viewMode){case 4:l*=10;case 3:l*=10;case 2:l*=10;case 1:t=Math.floor(a/l)*l<=n,e=Math.floor(a/l)*l+l>r;break;case 0:t=a<=n&&s<=o,e=r<=a&&h<=s}this.picker.find(".prev").toggleClass("disabled",t),this.picker.find(".next").toggleClass("disabled",e)}},click:function(t){var e,i;t.preventDefault(),t.stopPropagation(),(t=k(t.target)).hasClass("datepicker-switch")&&this.viewMode!==this.o.maxViewMode&&this.setViewMode(this.viewMode+1),t.hasClass("today")&&!t.hasClass("day")&&(this.setViewMode(0),this._setDate(C(),"linked"===this.o.todayBtn?null:"view")),t.hasClass("clear")&&this.clearDates(),t.hasClass("disabled")||(t.hasClass("month")||t.hasClass("year")||t.hasClass("decade")||t.hasClass("century"))&&(this.viewDate.setUTCDate(1),1===this.viewMode?(i=t.parent().find("span").index(t),e=this.viewDate.getUTCFullYear(),this.viewDate.setUTCMonth(i)):(i=0,e=Number(t.text()),this.viewDate.setUTCFullYear(e)),this._trigger(U.viewModes[this.viewMode-1].e,this.viewDate),this.viewMode===this.o.minViewMode?this._setDate(_(e,i,1)):(this.setViewMode(this.viewMode-1),this.fill())),this.picker.is(":visible")&&this._focused_from&&this._focused_from.focus(),delete this._focused_from},dayCellClick:function(t){t=k(t.currentTarget).data("date"),t=new Date(t);this.o.updateViewDate&&(t.getUTCFullYear()!==this.viewDate.getUTCFullYear()&&this._trigger("changeYear",this.viewDate),t.getUTCMonth()!==this.viewDate.getUTCMonth()&&this._trigger("changeMonth",this.viewDate)),this._setDate(t)},navArrowsClick:function(t){t=k(t.currentTarget).hasClass("prev")?-1:1;0!==this.viewMode&&(t*=12*U.viewModes[this.viewMode].navStep),this.viewDate=this.moveMonth(this.viewDate,t),this._trigger(U.viewModes[this.viewMode].e,this.viewDate),this.fill()},_toggle_multidate:function(t){var e=this.dates.contains(t);if(t||this.dates.clear(),-1!==e?(!0===this.o.multidate||1<this.o.multidate||this.o.toggleActive)&&this.dates.remove(e):(!1===this.o.multidate&&this.dates.clear(),this.dates.push(t)),"number"==typeof this.o.multidate)for(;this.dates.length>this.o.multidate;)this.dates.remove(0)},_setDate:function(t,e){e&&"date"!==e||this._toggle_multidate(t&&new Date(t)),(!e&&this.o.updateViewDate||"view"===e)&&(this.viewDate=t&&new Date(t)),this.fill(),this.setValue(),e&&"view"===e||this._trigger("changeDate"),this.inputField.trigger("change"),!this.o.autoclose||e&&"date"!==e||this.hide()},moveDay:function(t,e){var i=new Date(t);return i.setUTCDate(t.getUTCDate()+e),i},moveWeek:function(t,e){return this.moveDay(t,7*e)},moveMonth:function(t,e){if(!(i=t)||isNaN(i.getTime()))return this.o.defaultViewDate;var i;if(!e)return t;var a,s,n=new Date(t.valueOf()),o=n.getUTCDate(),r=n.getUTCMonth(),h=Math.abs(e);if(e=0<e?1:-1,1===h)s=-1===e?function(){return n.getUTCMonth()===r}:function(){return n.getUTCMonth()!==a},a=r+e,n.setUTCMonth(a),a=(a+12)%12;else{for(var l=0;l<h;l++)n=this.moveMonth(n,e);a=n.getUTCMonth(),n.setUTCDate(o),s=function(){return a!==n.getUTCMonth()}}for(;s();)n.setUTCDate(--o),n.setUTCMonth(a);return n},moveYear:function(t,e){return this.moveMonth(t,12*e)},moveAvailableDate:function(t,e,i){do{if(t=this[i](t,e),!this.dateWithinRange(t))return!1}while(i="moveDay",this.dateIsDisabled(t));return t},weekOfDateIsDisabled:function(t){return-1!==k.inArray(t.getUTCDay(),this.o.daysOfWeekDisabled)},dateIsDisabled:function(e){return this.weekOfDateIsDisabled(e)||0<k.grep(this.o.datesDisabled,function(t){return n(e,t)}).length},dateWithinRange:function(t){return t>=this.o.startDate&&t<=this.o.endDate},keydown:function(t){if(this.picker.is(":visible")){var e,i,a=!1,s=this.focusDate||this.viewDate;switch(t.keyCode){case 27:this.focusDate?(this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill()):this.hide(),t.preventDefault(),t.stopPropagation();break;case 37:case 38:case 39:case 40:if(!this.o.keyboardNavigation||7===this.o.daysOfWeekDisabled.length)break;e=37===t.keyCode||38===t.keyCode?-1:1,0===this.viewMode?t.ctrlKey?(i=this.moveAvailableDate(s,e,"moveYear"))&&this._trigger("changeYear",this.viewDate):t.shiftKey?(i=this.moveAvailableDate(s,e,"moveMonth"))&&this._trigger("changeMonth",this.viewDate):37===t.keyCode||39===t.keyCode?i=this.moveAvailableDate(s,e,"moveDay"):this.weekOfDateIsDisabled(s)||(i=this.moveAvailableDate(s,e,"moveWeek")):1===this.viewMode?(38!==t.keyCode&&40!==t.keyCode||(e*=4),i=this.moveAvailableDate(s,e,"moveMonth")):2===this.viewMode&&(38!==t.keyCode&&40!==t.keyCode||(e*=4),i=this.moveAvailableDate(s,e,"moveYear")),i&&(this.focusDate=this.viewDate=i,this.setValue(),this.fill(),t.preventDefault());break;case 13:if(!this.o.forceParse)break;s=this.focusDate||this.dates.get(-1)||this.viewDate,this.o.keyboardNavigation&&(this._toggle_multidate(s),a=!0),this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.setValue(),this.fill(),this.picker.is(":visible")&&(t.preventDefault(),t.stopPropagation(),this.o.autoclose&&this.hide());break;case 9:this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill(),this.hide()}a&&(this.dates.length?this._trigger("changeDate"):this._trigger("clearDate"),this.inputField.trigger("change"))}else 40!==t.keyCode&&27!==t.keyCode||(this.show(),t.stopPropagation())},setViewMode:function(t){this.viewMode=t,this.picker.children("div").hide().filter(".datepicker-"+U.viewModes[this.viewMode].clsName).show(),this.updateNavArrows(),this._trigger("changeViewMode",new Date(this.viewDate))}},l.prototype={updateDates:function(){this.dates=k.map(this.pickers,function(t){return t.getUTCDate()}),this.updateRanges()},updateRanges:function(){var i=k.map(this.dates,function(t){return t.valueOf()});k.each(this.pickers,function(t,e){e.setRange(i)})},clearDates:function(){k.each(this.pickers,function(t,e){e.clearDates()})},dateUpdated:function(t){if(!this.updating){this.updating=!0;var i=k.data(t.target,"datepicker");if(i!==b){var a=i.getUTCDate(),s=this.keepEmptyValues,t=k.inArray(t.target,this.inputs),e=t-1,n=t+1,o=this.inputs.length;if(-1!==t){if(k.each(this.pickers,function(t,e){e.getUTCDate()||e!==i&&s||e.setUTCDate(a)}),a<this.dates[e])for(;0<=e&&a<this.dates[e];)this.pickers[e--].setUTCDate(a);else if(a>this.dates[n])for(;n<o&&a>this.dates[n];)this.pickers[n++].setUTCDate(a);this.updateDates(),delete this.updating}}}},destroy:function(){k.map(this.pickers,function(t){t.destroy()}),k(this.inputs).off("changeDate",this.dateUpdated),delete this.element.data().datepicker},remove:t("destroy","Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead")},k.fn.datepicker),i=function(n){var o,r=Array.apply(null,arguments);if(r.shift(),this.each(function(){var t,e,i=k(this),a=i.data("datepicker"),s="object"==typeof n&&n;a||(t=function(t,e){function i(t,e){return e.toLowerCase()}var a,s,n=k(t).data(),o={},r=new RegExp("^"+e.toLowerCase()+"([A-Z])");for(s in e=new RegExp("^"+e.toLowerCase()),n)e.test(s)&&(a=s.replace(r,i),o[a]=n[s]);return o}(this,"date"),e=function(t){var i,a={};if(M[t]||(t=t.split("-")[0],M[t]))return i=M[t],k.each(d,function(t,e){e in i&&(a[e]=i[e])}),a}(k.extend({},h,t,s).language),e=k.extend({},h,e,t,s),a=i.hasClass("input-daterange")||e.inputs?(k.extend(e,{inputs:e.inputs||i.find("input").toArray()}),new l(this,e)):new T(this,e),i.data("datepicker",a)),"string"==typeof n&&"function"==typeof a[n]&&(o=a[n].apply(a,r))}),o===b||o instanceof T||o instanceof l)return this;if(1<this.length)throw new Error("Using only allowed for the collection of a single element ("+n+" function)");return o},h=(k.fn.datepicker=i,k.fn.datepicker.defaults={assumeNearbyYear:!1,autoclose:!1,beforeShowDay:k.noop,beforeShowMonth:k.noop,beforeShowYear:k.noop,beforeShowDecade:k.noop,beforeShowCentury:k.noop,calendarWeeks:!1,clearBtn:!1,toggleActive:!1,daysOfWeekDisabled:[],daysOfWeekHighlighted:[],datesDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keepEmptyValues:!1,keyboardNavigation:!0,language:"en",minViewMode:0,maxViewMode:4,multidate:!1,multidateSeparator:",",orientation:"auto",rtl:!1,startDate:-1/0,startView:0,todayBtn:!1,todayHighlight:!1,updateViewDate:!0,weekStart:0,disableTouchKeyboard:!1,enableOnReadonly:!0,showOnFocus:!0,zIndexOffset:10,container:"body",immediateUpdates:!1,title:"",templates:{leftArrow:"&#x00AB;",rightArrow:"&#x00BB;"},showWeekDays:!0}),d=k.fn.datepicker.locale_opts=["format","rtl","weekStart"],M=(k.fn.datepicker.Constructor=T,k.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM yyyy"}}),U={viewModes:[{names:["days","month"],clsName:"days",e:"changeMonth"},{names:["months","year"],clsName:"months",e:"changeYear",navStep:1},{names:["years","decade"],clsName:"years",e:"changeDecade",navStep:10},{names:["decades","century"],clsName:"decades",e:"changeCentury",navStep:100},{names:["centuries","millennium"],clsName:"centuries",e:"changeMillennium",navStep:1e3}],validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,parseFormat:function(t){if("function"==typeof t.toValue&&"function"==typeof t.toDisplay)return t;var e=t.replace(this.validParts,"\0").split("\0"),t=t.match(this.validParts);if(!e||!e.length||!t||0===t.length)throw new Error("Invalid date format.");return{separators:e,parts:t}},parseDate:function(t,e,i,d){function c(){var t=this.slice(0,o[l].length),e=o[l].slice(0,t.length);return t.toLowerCase()===e.toLowerCase()}if(!t)return b;if(t instanceof Date)return t;if((e="string"==typeof e?U.parseFormat(e):e).toValue)return e.toValue(t,e,i);var a,u,p,f={d:"moveDay",m:"moveMonth",w:"moveWeek",y:"moveYear"},g={yesterday:"-1d",today:"+0d",tomorrow:"+1d"};if(/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(t=t in g?g[t]:t)){for(o=t.match(/([\-+]\d+)([dmwy])/gi),t=new Date,l=0;l<o.length;l++)a=o[l].match(/([\-+]\d+)([dmwy])/i),u=Number(a[1]),p=f[a[2].toLowerCase()],t=T.prototype[p](t,u);return T.prototype._zero_utc_time(t)}var s,n,o=t&&t.match(this.nonpunctuation)||[],D={},m=["yyyy","yy","M","MM","m","mm","d","dd"],r={yyyy:function(t,e){return t.setUTCFullYear(d?(!0===(t=d)&&(t=10),(i=e)<100&&(i+=2e3)>(new Date).getFullYear()+t&&(i-=100),i):e);var i},m:function(t,e){if(isNaN(t))return t;for(--e;e<0;)e+=12;for(t.setUTCMonth(e%=12);t.getUTCMonth()!==e;)t.setUTCDate(t.getUTCDate()-1);return t},d:function(t,e){return t.setUTCDate(e)}},h=(r.yy=r.yyyy,r.M=r.MM=r.mm=r.m,r.dd=r.d,t=C(),e.parts.slice());if(o.length!==h.length&&(h=k(h).filter(function(t,e){return-1!==k.inArray(e,m)}).toArray()),o.length===h.length){for(var y,v,l=0,w=h.length;l<w;l++){if(s=parseInt(o[l],10),a=h[l],isNaN(s))switch(a){case"MM":n=k(M[i].months).filter(c),s=k.inArray(n[0],M[i].months)+1;break;case"M":n=k(M[i].monthsShort).filter(c),s=k.inArray(n[0],M[i].monthsShort)+1}D[a]=s}for(l=0;l<m.length;l++)(v=m[l])in D&&!isNaN(D[v])&&(y=new Date(t),r[v](y,D[v]),isNaN(y)||(t=y))}return t},formatDate:function(t,e,i){if(!t)return"";if((e="string"==typeof e?U.parseFormat(e):e).toDisplay)return e.toDisplay(t,e,i);var a={d:t.getUTCDate(),D:M[i].daysShort[t.getUTCDay()],DD:M[i].days[t.getUTCDay()],m:t.getUTCMonth()+1,M:M[i].monthsShort[t.getUTCMonth()],MM:M[i].months[t.getUTCMonth()],yy:t.getUTCFullYear().toString().substring(2),yyyy:t.getUTCFullYear()};a.dd=(a.d<10?"0":"")+a.d,a.mm=(a.m<10?"0":"")+a.m,t=[];for(var s=k.extend([],e.separators),n=0,o=e.parts.length;n<=o;n++)s.length&&t.push(s.shift()),t.push(a[e.parts[n]]);return t.join("")},headTemplate:'<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">'+h.templates.leftArrow+'</th><th colspan="5" class="datepicker-switch"></th><th class="next">'+h.templates.rightArrow+"</th></tr></thead>",contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};U.template='<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">'+U.headTemplate+"<tbody></tbody>"+U.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+U.headTemplate+U.contTemplate+U.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+U.headTemplate+U.contTemplate+U.footTemplate+'</table></div><div class="datepicker-decades"><table class="table-condensed">'+U.headTemplate+U.contTemplate+U.footTemplate+'</table></div><div class="datepicker-centuries"><table class="table-condensed">'+U.headTemplate+U.contTemplate+U.footTemplate+"</table></div></div>",k.fn.datepicker.DPGlobal=U,k.fn.datepicker.noConflict=function(){return k.fn.datepicker=s,this},k.fn.datepicker.version="1.9.0",k.fn.datepicker.deprecated=function(t){var e=window.console;e&&e.warn&&e.warn("DEPRECATED: "+t)},k(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(t){var e=k(this);e.data("datepicker")||(t.preventDefault(),i.call(e,"show"))}),k(function(){i.call(k('[data-provide="datepicker-inline"]'))})});