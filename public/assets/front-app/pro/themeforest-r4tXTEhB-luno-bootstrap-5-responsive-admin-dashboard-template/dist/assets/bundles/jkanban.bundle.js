!function o(i,r,a){function d(t,e){if(!r[t]){if(!i[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(c)return c(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}n=r[t]={exports:{}},i[t][0].call(n.exports,function(e){return d(i[t][1][e]||e)},n,n.exports,o,i,r,a)}return r[t].exports}for(var c="function"==typeof require&&require,e=0;e<a.length;e++)d(a[e]);return d}({1:[function(e,t,n){var o=e("dragula");!function(){this.jKanban=function(){var b=this,e={enabled:!1},t={enabled:!1},t=(this._disallowedItemProperties=["id","title","click","drag","dragend","drop","order"],this.element="",this.container="",this.boardContainer=[],this.handlers=[],this.dragula=o,this.drake="",{element:this.drakeBoard="",gutter:"15px",widthBoard:"250px",responsive:"700",responsivePercentage:!1,boards:[],dragBoards:!0,dragItems:!0,itemAddOptions:this.itemAddOptions=t,itemHandleOptions:this.itemHandleOptions=e,dragEl:function(e,t){},dragendEl:function(e){},dropEl:function(e,t,n,o){},dragBoard:function(e,t){},dragendBoard:function(e){},dropBoard:function(e,t,n,o){},click:function(e){},buttonClick:function(e,t){}});function y(e){e.addEventListener("click",function(e){e.preventDefault(),b.options.click(this),"function"==typeof this.clickfn&&this.clickfn(this)})}function r(t){var n=[];return b.options.boards.map(function(e){if(e.id===t)return n.push(e)}),n[0]}function w(e,t){for(var n in t)-1<b._disallowedItemProperties.indexOf(n)||e.setAttribute("data-"+n,t[n])}function E(e){var t,n;return e=b.options.itemHandleOptions.enabled?void 0===(b.options.itemHandleOptions.customHandler||void 0)?"<div class='item_handle "+(t=void 0===((t=b.options.itemHandleOptions.customCssHandler)||void 0)?"drag_handler":t)+"'><i class='item_handle "+(n=void 0===((n=b.options.itemHandleOptions.customCssIconHandler)||void 0)?t+"_icon":n)+"'></i></div><div>"+e+"</div>":b.options.itemHandleOptions.customHandler.replace("%s",e):e}arguments[0]&&"object"==typeof arguments[0]&&(this.options=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}(t,arguments[0])),this.__getCanMove=function(e){return b.options.itemHandleOptions.enabled?b.options.itemHandleOptions.handleClass?e.classList.contains(b.options.itemHandleOptions.handleClass):e.classList.contains("item_handle"):!!b.options.dragItems},this.init=function(){b.element=document.querySelector(b.options.element);var e=document.createElement("div");e.classList.add("kanban-container"),b.container=e,document.querySelector(b.options.element).dataset.hasOwnProperty("board")?(url=document.querySelector(b.options.element).dataset.board,window.fetch(url,{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>{e.json().then(function(e){b.options.boards=e,b.addBoards(b.options.boards,!0)})}).catch(e=>{console.log("Error: ",e)})):b.addBoards(b.options.boards,!0),b.element.appendChild(b.container),window.innerWidth>b.options.responsive&&(b.drakeBoard=b.dragula([b.container],{moves:function(e,t,n,o){return!!b.options.dragBoards&&(n.classList.contains("kanban-board-header")||n.classList.contains("kanban-title-board"))},accepts:function(e,t,n,o){return t.classList.contains("kanban-container")},revertOnSpill:!0,direction:"horizontal"}).on("drag",function(e,t){e.classList.add("is-moving"),b.options.dragBoard(e,t),"function"==typeof e.dragfn&&e.dragfn(e,t)}).on("dragend",function(e){for(var t=1,n=0;n<b.container.childNodes.length;n++)b.container.childNodes[n].dataset.order=t++;e.classList.remove("is-moving"),b.options.dragendBoard(e),"function"==typeof e.dragendfn&&e.dragendfn(e)}).on("drop",function(e,t,n,o){e.classList.remove("is-moving"),b.options.dropBoard(e,t,n,o),"function"==typeof e.dropfn&&e.dropfn(e,t,n,o)}),b.drake=b.dragula(b.boardContainer,{moves:function(e,t,n,o){return b.__getCanMove(n)},revertOnSpill:!0}).on("cancel",function(e,t,n){b.enableAllBoards()}).on("drag",function(e,t){var n,o=e.getAttribute("class");""!==o&&-1<o.indexOf("not-draggable")?b.drake.cancel(!0):(e.classList.add("is-moving"),b.options.dragEl(e,t),void 0!==(n=r(t.parentNode.dataset.id)).dragTo&&b.options.boards.map(function(e){-1===n.dragTo.indexOf(e.id)&&e.id!==t.parentNode.dataset.id&&b.findBoard(e.id).classList.add("disabled-board")}),null!==e&&"function"==typeof e.dragfn&&e.dragfn(e,t))}).on("dragend",function(e){b.options.dragendEl(e),null!==e&&"function"==typeof e.dragendfn&&e.dragendfn(e)}).on("drop",function(e,t,n,o){b.enableAllBoards();var i=r(n.parentNode.dataset.id);void 0!==i.dragTo&&-1===i.dragTo.indexOf(t.parentNode.dataset.id)&&t.parentNode.dataset.id!==n.parentNode.dataset.id&&b.drake.cancel(!0),null!==e&&(!1===b.options.dropEl(e,t,n,o)&&b.drake.cancel(!0),e.classList.remove("is-moving"),"function"==typeof e.dropfn&&e.dropfn(e,t,n,o))}))},this.enableAllBoards=function(){var e=document.querySelectorAll(".kanban-board");if(0<e.length&&void 0!==e)for(var t=0;t<e.length;t++)e[t].classList.remove("disabled-board")},this.addElement=function(e,t){var e=b.element.querySelector('[data-id="'+e+'"] .kanban-drag'),n=document.createElement("div");return n.classList.add("kanban-item"),void 0!==t.id&&""!==t.id&&n.setAttribute("data-eid",t.id),t.class&&Array.isArray(t.class)&&t.class.forEach(function(e){n.classList.add(e)}),n.innerHTML=E(t.title),n.clickfn=t.click,n.dragfn=t.drag,n.dragendfn=t.dragend,n.dropfn=t.drop,w(n,t),y(n),b.options.itemHandleOptions.enabled&&(n.style.cursor="default"),e.appendChild(n),b},this.addForm=function(e,t){var e=b.element.querySelector('[data-id="'+e+'"] .kanban-drag'),n=t.getAttribute("class");return t.setAttribute("class",n+" not-draggable"),e.appendChild(t),b},this.addBoards=function(e,t){n=b.options.responsivePercentage?(b.container.style.width="100%",b.options.gutter="1%",window.innerWidth>b.options.responsive?(100-2*e.length)/e.length:100-2*e.length):b.options.widthBoard;var n,o,i=b.options.itemAddOptions.enabled,r=b.options.itemAddOptions.content,a=b.options.itemAddOptions.class,d=b.options.itemAddOptions.footer;for(o in e){var c,s=e[o],l=(t||b.options.boards.push(s),b.options.responsivePercentage||(""===b.container.style.width?b.container.style.width=parseInt(n)+2*parseInt(b.options.gutter)+"px":b.container.style.width=parseInt(b.container.style.width)+parseInt(n)+2*parseInt(b.options.gutter)+"px"),document.createElement("div")),u=(l.dataset.id=s.id,l.dataset.order=b.container.childNodes.length+1,l.classList.add("kanban-board"),b.options.responsivePercentage?l.style.width=n+"%":l.style.width=n,l.style.marginLeft=b.options.gutter,l.style.marginRight=b.options.gutter,document.createElement("header")),f=""!==s.class&&void 0!==s.class?s.class.split(","):[],p=(u.classList.add("kanban-board-header"),f.map(function(e){e=e.replace(/^[ ]+/g,""),u.classList.add(e)}),u.innerHTML='<div class="kanban-title-board">'+s.title+"</div>",document.createElement("main"));for(c in p.classList.add("kanban-drag"),(""!==s.bodyClass&&void 0!==s.bodyClass?s.bodyClass.split(","):[]).map(function(e){p.classList.add(e)}),b.boardContainer.push(p),s.item){var m=s.item[c],v=document.createElement("div");v.classList.add("kanban-item"),m.id&&(v.dataset.eid=m.id),m.class&&Array.isArray(m.class)&&m.class.forEach(function(e){v.classList.add(e)}),v.innerHTML=E(m.title),v.clickfn=m.click,v.dragfn=m.drag,v.dragendfn=m.dragend,v.dropfn=m.drop,w(v,m),y(v),b.options.itemHandleOptions.enabled&&(v.style.cursor="default"),p.appendChild(v)}var h,g,f=document.createElement("footer");i&&(h=document.createElement("BUTTON"),g=document.createTextNode(r||"+"),h.setAttribute("class",a||"kanban-title-button btn btn-default btn-xs"),h.appendChild(g),(d?f:u).appendChild(h),function(e,t){e.addEventListener("click",function(e){e.preventDefault(),b.options.buttonClick(this,t)})}(h,s.id)),l.appendChild(u),l.appendChild(p),l.appendChild(f),b.container.appendChild(l)}return b},this.findBoard=function(e){return b.element.querySelector('[data-id="'+e+'"]')},this.getParentBoardID=function(e){return null===(e="string"==typeof e?b.element.querySelector('[data-eid="'+e+'"]'):e)?null:e.parentNode.parentNode.dataset.id},this.moveElement=function(e,t,n){if(e!==this.getParentBoardID(t))return this.removeElement(t),this.addElement(e,n)},this.replaceElement=function(e,t){var n=e;return(n="string"==typeof n?b.element.querySelector('[data-eid="'+e+'"]'):n).innerHTML=t.title,n.clickfn=t.click,n.dragfn=t.drag,n.dragendfn=t.dragend,n.dropfn=t.drop,w(n,t),b},this.findElement=function(e){return b.element.querySelector('[data-eid="'+e+'"]')},this.getBoardElements=function(e){return b.element.querySelector('[data-id="'+e+'"] .kanban-drag').childNodes},this.removeElement=function(e){return null!==(e="string"==typeof e?b.element.querySelector('[data-eid="'+e+'"]'):e)&&("function"==typeof e.remove?e.remove():e.parentNode.removeChild(e)),b},this.removeBoard=function(e){var t=null;null!==(t="string"==typeof e?b.element.querySelector('[data-id="'+e+'"]'):t)&&("function"==typeof t.remove?t.remove():t.parentNode.removeChild(t));for(var n=0;n<b.options.boards.length;n++)if(b.options.boards[n].id===e){b.options.boards.splice(n,1);break}return b},this.onButtonClick=function(e){},this.init()}}()},{dragula:9}],2:[function(e,t,n){t.exports=function(e,t){return Array.prototype.slice.call(e,t)}},{}],3:[function(e,t,n){"use strict";var o=e("ticky");t.exports=function(e,t,n){e&&o(function(){e.apply(n||null,t||[])})}},{ticky:11}],4:[function(e,t,n){"use strict";var d=e("atoa"),c=e("./debounce");t.exports=function(i,e){var r=e||{},a={};return(i=void 0===i?{}:i).on=function(e,t){return a[e]?a[e].push(t):a[e]=[t],i},i.once=function(e,t){return t._once=!0,i.on(e,t),i},i.off=function(e,t){var n=arguments.length;if(1===n)delete a[e];else if(0===n)a={};else{n=a[e];if(!n)return i;n.splice(n.indexOf(t),1)}return i},i.emit=function(){var e=d(arguments);return i.emitterSnapshot(e.shift()).apply(this,e)},i.emitterSnapshot=function(o){var e=(a[o]||[]).slice(0);return function(){var t=d(arguments),n=this||i;if("error"!==o||!1===r.throws||e.length)return e.forEach(function(e){r.async?c(e,t,n):e.apply(n,t),e._once&&i.off(o,e)}),i;throw 1===t.length?t[0]:t}},i}},{"./debounce":3,atoa:2}],5:[function(n,s,e){!function(c){!function(){"use strict";var o=n("custom-event"),i=n("./eventmap"),r=c.document,e=function(e,t,n,o){return e.addEventListener(t,n,o)},t=function(e,t,n,o){return e.removeEventListener(t,n,o)},a=[];function d(e,t,n){e=function(e,t,n){var o,i;for(o=0;o<a.length;o++)if((i=a[o]).element===e&&i.type===t&&i.fn===n)return o}(e,t,n);if(e)return t=a[e].wrapper,a.splice(e,1),t}c.addEventListener||(e=function(e,t,n){return e.attachEvent("on"+t,function(e,t,n){var o=d(e,t,n)||function(n,o){return function(e){var t=e||c.event;t.target=t.target||t.srcElement,t.preventDefault=t.preventDefault||function(){t.returnValue=!1},t.stopPropagation=t.stopPropagation||function(){t.cancelBubble=!0},t.which=t.which||t.keyCode,o.call(n,t)}}(e,n);return a.push({wrapper:o,element:e,type:t,fn:n}),o}(e,t,n))},t=function(e,t,n){n=d(e,t,n);if(n)return e.detachEvent("on"+t,n)}),s.exports={add:e,remove:t,fabricate:function(e,t,n){n=-1===i.indexOf(t)?new o(t,{detail:n}):function(){var e;r.createEvent?(e=r.createEvent("Event")).initEvent(t,!0,!0):r.createEventObject&&(e=r.createEventObject());return e}();e.dispatchEvent?e.dispatchEvent(n):e.fireEvent("on"+t,n)}}}.call(this)}.call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./eventmap":6,"custom-event":7}],6:[function(e,i,t){!function(o){!function(){"use strict";var e=[],t="",n=/^on/;for(t in o)n.test(t)&&e.push(t.slice(2));i.exports=e}.call(this)}.call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],7:[function(e,n,t){!function(e){!function(){var t=e.CustomEvent;n.exports=function(){try{var e=new t("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}}()?t:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}}.call(this)}.call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],8:[function(e,t,n){"use strict";var o={},i="(?:^|\\s)",r="(?:\\s|$)";function a(e){var t=o[e];return t?t.lastIndex=0:o[e]=t=new RegExp(i+e+r,"g"),t}t.exports={add:function(e,t){var n=e.className;n.length?a(t).test(n)||(e.className+=" "+t):e.className=t},rm:function(e,t){e.className=e.className.replace(a(t)," ").trim()}}},{}],9:[function(e,t,n){!function(i){!function(){"use strict";var D=e("contra/emitter"),X=e("crossvent"),Y=e("./classes"),j=document,F=j.documentElement;function R(e,t,n,o){i.navigator.pointerEnabled?X[t](e,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[n],o):i.navigator.msPointerEnabled?X[t](e,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[n],o):(X[t](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[n],o),X[t](e,n,o))}function U(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;e=e.button;return void 0!==e?1&e?1:2&e?3:4&e?2:0:void 0}function K(e,t){return void 0!==i[t]?i[t]:(F.clientHeight?F:j.body)[e]}function z(e,t,n){var o=(e=e||{}).className||"";return e.className+=" gu-hide",t=j.elementFromPoint(t,n),e.className=o,t}function W(){return!1}function G(){return!0}function V(e){return e.width||e.right-e.left}function $(e){return e.height||e.bottom-e.top}function J(e){return e.parentNode===j?null:e.parentNode}function Q(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||function e(t){if(!t)return!1;if("false"===t.contentEditable)return!1;if("true"===t.contentEditable)return!0;return e(J(t))}(e)}function Z(t){return t.nextElementSibling||function(){var e=t;for(;e=e.nextSibling,e&&1!==e.nodeType;);return e}()}function ee(e,t){var t=(t=t).targetTouches&&t.targetTouches.length?t.targetTouches[0]:t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,n={pageX:"clientX",pageY:"clientY"};return t[e=e in n&&!(e in t)&&n[e]in t?n[e]:e]}t.exports=function(e,t){1===arguments.length&&!1===Array.isArray(e)&&(t=e,e=[]);var s,l,u,f,p,o,i,m,v,h,n,r,g=null,b=t||{},y=(void 0===b.moves&&(b.moves=G),void 0===b.accepts&&(b.accepts=G),void 0===b.invalid&&(b.invalid=function(){return!1}),void 0===b.containers&&(b.containers=e||[]),void 0===b.isContainer&&(b.isContainer=W),void 0===b.copy&&(b.copy=!1),void 0===b.copySortSource&&(b.copySortSource=!1),void 0===b.revertOnSpill&&(b.revertOnSpill=!1),void 0===b.removeOnSpill&&(b.removeOnSpill=!1),void 0===b.direction&&(b.direction="vertical"),void 0===b.ignoreInputTextSelection&&(b.ignoreInputTextSelection=!0),void 0===b.mirrorContainer&&(b.mirrorContainer=j.body),D({containers:b.containers,start:function(e){e=T(e);e&&C(e)},end:O,cancel:B,remove:L,destroy:function(){d(!0),S({})},canMove:function(e){return!!T(e)},dragging:!1}));return!0===b.removeOnSpill&&y.on("over",function(e){Y.rm(e,"gu-hide")}).on("out",function(e){y.dragging&&Y.add(e,"gu-hide")}),d(),y;function a(e){return-1!==y.containers.indexOf(e)||b.isContainer(e)}function d(e){e=e?"remove":"add";R(F,e,"mousedown",q),R(F,e,"mouseup",S)}function c(e){R(F,e?"remove":"add","mousemove",M)}function w(e){e=e?"remove":"add";X[e](F,"selectstart",E),X[e](F,"click",E)}function E(e){r&&e.preventDefault()}function q(e){var t,n;o=e.clientX,i=e.clientY,1!==U(e)||e.metaKey||e.ctrlKey||(n=T(t=e.target))&&(r=n,c(),"mousedown"===e.type&&(Q(t)?t.focus():e.preventDefault()))}function M(e){if(r)if(0===U(e))S({});else if(!(void 0!==e.clientX&&Math.abs(e.clientX-o)<=(b.slideFactorX||0)&&void 0!==e.clientY&&Math.abs(e.clientY-i)<=(b.slideFactorY||0))){if(b.ignoreInputTextSelection){var t=ee("clientX",e)||0,n=ee("clientY",e)||0;if(Q(j.elementFromPoint(t,n)))return}var t=r,n=(c(!0),w(),O(),C(t),function(e){e=e.getBoundingClientRect();return{left:e.left+K("scrollLeft","pageXOffset"),top:e.top+K("scrollTop","pageYOffset")}}(u));f=ee("pageX",e)-n.left,p=ee("pageY",e)-n.top,Y.add(h||u,"gu-transit"),s||(t=u.getBoundingClientRect(),(s=u.cloneNode(!0)).style.width=V(t)+"px",s.style.height=$(t)+"px",Y.rm(s,"gu-transit"),Y.add(s,"gu-mirror"),b.mirrorContainer.appendChild(s),R(F,"add","mousemove",_),Y.add(b.mirrorContainer,"gu-unselectable"),y.emit("cloned",s,u,"mirror")),_(e)}}function T(e){if(!(y.dragging&&s||a(e))){for(var t=e;J(e)&&!1===a(J(e));){if(b.invalid(e,t))return;if(!(e=J(e)))return}var n=J(e);if(n)if(!b.invalid(e,t))if(b.moves(e,n,t,Z(e)))return{item:e,source:n}}}function C(e){var t,n;t=e.item,n=e.source,("boolean"==typeof b.copy?b.copy:b.copy(t,n))&&(h=e.item.cloneNode(!0),y.emit("cloned",h,e.item,"copy")),l=e.source,u=e.item,m=v=Z(e.item),y.dragging=!0,y.emit("drag",u,l)}function O(){var e;y.dragging&&x(e=h||u,J(e))}function k(){c(!(r=!1)),w(!0)}function S(e){var t,n;k(),y.dragging&&(t=h||u,n=ee("clientX",e)||0,e=ee("clientY",e)||0,(n=A(z(s,n,e),n,e))&&(h&&b.copySortSource||!h||n!==l)?x(t,n):(b.removeOnSpill?L:B)())}function x(e,t){var n=J(e);h&&b.copySortSource&&t===l&&n.removeChild(u),I(t)?y.emit("cancel",e,l,l):y.emit("drop",e,t,l,v),N()}function L(){var e,t;y.dragging&&((t=J(e=h||u))&&t.removeChild(e),y.emit(h?"cancel":"remove",e,t,l),N())}function B(e){var t,n,o;y.dragging&&(e=0<arguments.length?e:b.revertOnSpill,!1===(o=I(n=J(t=h||u)))&&e&&(h?n&&n.removeChild(h):l.insertBefore(t,m)),o||e?y.emit("cancel",t,l,l):y.emit("drop",t,n,l,v),N())}function N(){var e=h||u;k(),s&&(Y.rm(b.mirrorContainer,"gu-unselectable"),R(F,"remove","mousemove",_),J(s).removeChild(s),s=null),e&&Y.rm(e,"gu-transit"),n&&clearTimeout(n),y.dragging=!1,g&&y.emit("out",e,g,l),y.emit("dragend",e),l=u=h=m=v=n=g=null}function I(e,t){t=void 0!==t?t:s?v:Z(h||u);return e===l&&t===m}function A(t,n,o){for(var i=t;i&&!function(){if(!1===a(i))return;var e=H(i,t),e=P(i,e,n,o);if(I(i,e))return 1;return b.accepts(u,i,l,e)}();)i=J(i);return i}function _(e){if(s){e.preventDefault();var t=ee("clientX",e)||0,e=ee("clientY",e)||0,n=t-f,o=e-p,i=(s.style.left=n+"px",s.style.top=o+"px",h||u),n=z(s,t,e),o=A(n,t,e),r=null!==o&&o!==g,a=(!r&&null!==o||(g&&c("out"),g=o,r&&c("over")),J(i));if(o===l&&h&&!b.copySortSource)a&&a.removeChild(i);else{var d,n=H(o,n);if(null!==n)d=P(o,n,t,e);else{if(!0!==b.revertOnSpill||h)return void(h&&a&&a.removeChild(i));d=m,o=l}(null===d&&r||d!==i&&d!==Z(i))&&(v=d,o.insertBefore(i,d),y.emit("shadow",i,o,l))}}function c(e){y.emit(e,i,g,l)}}function H(e,t){for(var n=t;n!==e&&J(n)!==e;)n=J(n);return n===F?null:n}function P(i,t,r,a){var d="horizontal"===b.direction;return(t!==i?function(){var e=t.getBoundingClientRect();if(d)return n(r>e.left+V(e)/2);return n(a>e.top+$(e)/2)}:function(){var e,t,n,o=i.children.length;for(e=0;e<o;e++){if(t=i.children[e],n=t.getBoundingClientRect(),d&&n.left+n.width/2>r)return t;if(!d&&n.top+n.height/2>a)return t}return null})();function n(e){return e?Z(t):t}}}}.call(this)}.call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./classes":8,"contra/emitter":4,crossvent:5}],10:[function(e,t,n){var o,i,t=t.exports={};function r(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}try{o="function"==typeof setTimeout?setTimeout:r}catch(e){o=r}try{i="function"==typeof clearTimeout?clearTimeout:a}catch(e){i=a}function d(t){if(o===setTimeout)return setTimeout(t,0);if((o===r||!o)&&setTimeout)return(o=setTimeout)(t,0);try{return o(t,0)}catch(e){try{return o.call(null,t,0)}catch(e){return o.call(this,t,0)}}}var c,s=[],l=!1,u=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):u=-1,s.length&&p())}function p(){if(!l){for(var e=d(f),t=(l=!0,s.length);t;){for(c=s,s=[];++u<t;)c&&c[u].run();u=-1,t=s.length}c=null,l=!1,!function(t){if(i===clearTimeout)return clearTimeout(t);if((i===a||!i)&&clearTimeout)return(i=clearTimeout)(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function v(){}t.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new m(e,t)),1!==s.length||l||d(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},t.title="browser",t.browser=!0,t.env={},t.argv=[],t.version="",t.versions={},t.on=v,t.addListener=v,t.once=v,t.off=v,t.removeListener=v,t.removeAllListeners=v,t.emit=v,t.prependListener=v,t.prependOnceListener=v,t.listeners=function(e){return[]},t.binding=function(e){throw new Error("process.binding is not supported")},t.cwd=function(){return"/"},t.chdir=function(e){throw new Error("process.chdir is not supported")},t.umask=function(){return 0}},{}],11:[function(e,n,t){!function(t){!function(){var e="function"==typeof t?function(e){t(e)}:function(e){setTimeout(e,0)};n.exports=e}.call(this)}.call(this,e("timers").setImmediate)},{timers:12}],12:[function(c,e,s){!function(n,d){!function(){var o=c("process/browser.js").nextTick,e=Function.prototype.apply,i=Array.prototype.slice,r={},a=0;function t(e,t){this._id=e,this._clearFn=t}s.setTimeout=function(){return new t(e.call(setTimeout,window,arguments),clearTimeout)},s.setInterval=function(){return new t(e.call(setInterval,window,arguments),clearInterval)},s.clearTimeout=s.clearInterval=function(e){e.close()},t.prototype.unref=t.prototype.ref=function(){},t.prototype.close=function(){this._clearFn.call(window,this._id)},s.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},s.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},s._unrefActive=s.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;0<=t&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},s.setImmediate="function"==typeof n?n:function(e){var t=a++,n=!(arguments.length<2)&&i.call(arguments,1);return r[t]=!0,o(function(){r[t]&&(n?e.apply(null,n):e.call(null),s.clearImmediate(t))}),t},s.clearImmediate="function"==typeof d?d:function(e){delete r[e]}}.call(this)}.call(this,c("timers").setImmediate,c("timers").clearImmediate)},{"process/browser.js":10,timers:12}]},{},[1]);