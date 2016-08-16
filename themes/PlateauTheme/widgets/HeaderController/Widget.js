// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"themes/PlateauTheme/widgets/HeaderController/PopupTileNodes":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/dom-construct dojo/query dijit/_WidgetBase dijit/_TemplatedMixin jimu/dijit/ViewStack dojox/gesture/swipe dojox/gesture/tap jimu/utils".split(" "),function(m,d,p,a,k,b,l,s,t,e,g,n,u){var r=0;return m([s,t],{baseClass:"jimu-header-more-popup",templateString:'\x3cdiv\x3e\x3cdiv class\x3d"pages" data-dojo-attach-point\x3d"pagesNode"\x3e\x3c/div\x3e\x3cdiv class\x3d"points jimu-corner-bottom"\x3e\x3cdiv class\x3d"points-inner"data-dojo-attach-point\x3d"pointsNode"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
margin:4,postCreate:function(){this.nodes=[];this.pages=[];this.createCloseBtn()},startup:function(){this.viewStack=new e({views:[],viewType:"dom"},this.pagesNode);this.viewStack.startup();k(this.pagesNode,g.end,d.hitch(this,function(a){r<this.maximumPages-1&&a.dx&&0>a.dx?(r++,this._selectPage(r)):a.dx&&(0<a.dx&&0<r)&&(r--,this._selectPage(r))}));this.resize()},resize:function(){var b=this._calculateGridParam(),e;if(null!==b){a.setStyle(this.domNode,u.getPositionStyle(b.position));this.nodeWidth=
b.cellSize-this.margin;if(!this.oldGridParam||this.oldGridParam.rows!==b.rows||this.oldGridParam.cols!==b.cols)this.clearPages(),this.createPages(b);this.nodes.forEach(d.hitch(this,function(a,e){this.setItemNodePosition(a,e,b)}));this.oldGridParam=b;e=l("div.close",this.domNode)[0];a.setStyle(e,{width:0.25*this.nodeWidth+"px",height:0.25*this.nodeWidth+"px"})}else this.oldGridParam=null,a.setStyle(this.domNode,u.getPositionStyle({left:0,top:0,width:0,height:0,zIndex:111})),this.nodeWidth=0;!window.appInfo.isRunInMobile&&
(760<window.innerWidth&&this.numWidget&&8>=this.numWidget.length)&&this.hide()},setItemNodePosition:function(b,e,q){var f,n,g=48,k=16;f=0===e%q.cols?0:this.margin/2;n=e%(q.rows*q.cols)<q.cols?0:this.margin/2;e={};"number"===typeof this.nodeWidth&&(e.width=this.nodeWidth+"px",e.height=this.nodeWidth+"px");"number"===typeof f&&(window.isRTL?e.marginRight=f+"px":e.marginLeft=f+"px");"number"===typeof n&&(e.marginTop=n+"px");if(f=l("img",b)[0])q.iconScaled&&(g*=this.nodeWidth/120),a.setStyle(f,{width:g+
"px",height:g+"px"});if(g=l("div.node-label",b)[0])q.showLabel?(q.iconScaled&&(k*=this.nodeWidth/120),a.setStyle(g,{"font-size":k+"px",display:"block"})):a.setStyle(g,{"font-size":k+"px",display:"none"});a.setStyle(b,e)},clearPages:function(){p.forEach(this.pages,function(a){this.viewStack.removeView(a.pageNode)},this);b.empty(this.pointsNode);this.pages=[];this.nodes=[]},createPages:function(a){var e,q,f,g;this.maximumPages=e=Math.ceil(this.items.length/(a.rows*a.cols));for(q=0;q<e;q++)f=b.create("div",
{"class":"page"}),this.createPageItems(q,f,a),this.viewStack.addView(f),1<e&&(g=b.create("div",{"class":"point"},this.pointsNode),this.own(k(g,"click",d.hitch(this,this._onPageNodeClick,q)))),this.pages.push({pageNode:f,pointNode:g});0<this.viewStack.views.length&&this._selectPage(0)},_onPageNodeClick:function(a){this._selectPage(a)},_selectPage:function(b){1<this.pages.length&&(l(".point",this.domNode).removeClass("point-selected  jimu-main-background"),a.addClass(this.pages[b].pointNode,"point-selected jimu-main-background"));
this.viewStack.switchView(this.pages[b].pageNode)},createPageItems:function(a,b,e){var f,g;f=this.items.length;g=e.rows*e.cols;e=a*g;a=(a+1)*g;g=a-f;for(a=Math.min(a,f);e<a;e++)this.createItemNode(e,b);for(e=f;e<f+g;e++)this.createEmptyItemNode(b)},createItemNode:function(a,e){var g,f;f=this.items[a];g=b.create("div",{"class":"icon-node jimu-float-leading jimu-main-background",title:f.label,settingId:f.id},e);b.create("img",{src:f.icon},g);b.create("div",{"class":"node-label",title:f.label,innerHTML:u.stripHTML(f.label)},
g);g.config=f;this.own(k(g,n,d.hitch(this,function(){this.onNodeClicked(g)})));this.nodes.push(g)},createEmptyItemNode:function(a){a=b.create("div",{"class":"icon-node jimu-float-leading  jimu-main-background"},a);this.nodes.push(a);return a},createCloseBtn:function(){var a;a=b.create("div",{"class":"close"},this.domNode);b.create("div",{"class":"close-inner jimu-main-background"},a);k(a,"click",d.hitch(this,function(){this.hide()}));return a},hide:function(){r=0;a.setStyle(this.domNode,"display",
"none")},show:function(){a.setStyle(this.domNode,"display","block")},onNodeClicked:function(a){this.hide()},_calculateGridParam:function(){var b,e,g,f,n=!1,k=!0;b=a.getContentBox(jimuConfig.mapId);e=Math.min(b.w,b.h)-40;if(360<=e)f=120;else{f=Math.floor(e/3);if(10>f)return null;n=!0;80>f&&(k=!1)}e=Math.floor((b.h-40)/f);g=Math.floor((b.w-40)/f);e=4<e?4:e;e=3>e?3:e;g=3>e?3:4<g?4:g;return{rows:e,cols:g,cellSize:f,iconScaled:n,showLabel:k,position:{top:(b.h-f*e)/2,bottom:(b.h-f*e)/2,left:(b.w-f*g)/2,
right:(b.w-f*g)/2,width:f*g-this.margin*(g-1)/2,height:f*e-this.margin*(e-1)/2,zIndex:111}}}})})},"dojox/gesture/swipe":function(){define(["dojo/_base/kernel","dojo/_base/declare","./Base","../main"],function(m,d,p,a){m.experimental("dojox.gesture.swipe");m=d(p,{defaultEvent:"swipe",subEvents:["end"],press:function(a,b){b.touches&&2<=b.touches.length?delete a.context:(a.context||(a.context={x:0,y:0,t:0}),a.context.x=b.screenX,a.context.y=b.screenY,a.context.t=(new Date).getTime(),this.lock(b.currentTarget))},
move:function(a,b){this._recognize(a,b,"swipe")},release:function(a,b){this._recognize(a,b,"swipe.end");delete a.context;this.unLock()},cancel:function(a,b){delete a.context;this.unLock()},_recognize:function(a,b,l){if(a.context&&(a=this._getSwipeInfo(a,b)))a.type=l,this.fire(b.target,a)},_getSwipeInfo:function(a,b){var l,d,m={};d=a.context;m.time=(new Date).getTime()-d.t;l=b.screenX-d.x;d=b.screenY-d.y;if(0===l&&0===d)return null;m.dx=l;m.dy=d;return m}});a.gesture.swipe=new m;a.gesture.swipe.Swipe=
m;return a.gesture.swipe})},"dojox/gesture/Base":function(){define("dojo/_base/kernel dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/dom dojo/on dojo/touch dojo/has ../main".split(" "),function(m,d,p,a,k,b,l,s,t){m.experimental("dojox.gesture.Base");a.getObject("gesture",!0,t);return d(null,{defaultEvent:" ",subEvents:[],touchOnly:!1,_elements:null,constructor:function(b){a.mixin(this,b);this.init()},init:function(){this._elements=[];if(!s("touch")&&this.touchOnly)console.warn("Gestures:[",
this.defaultEvent,"] is only supported on touch devices!");else{var a=this.defaultEvent;this.call=this._handle(a);this._events=[a];p.forEach(this.subEvents,function(b){this[b]=this._handle(a+"."+b);this._events.push(a+"."+b)},this)}},_handle:function(a){var g=this;return function(n,l){var d=arguments;2<d.length&&(n=d[1],l=d[2]);if(!n||!n.nodeType&&!n.attachEvent&&!n.addEventListener)return b(n,a,l);var k=g._add(n,a,l);return{remove:function(){k.remove();g._remove(n,a)}}}},_add:function(e,g,n){var d=
this._getGestureElement(e);if(!d){var d={target:e,data:{},handles:{}},k=a.hitch(this,"_process",d,"press"),m=a.hitch(this,"_process",d,"move"),p=a.hitch(this,"_process",d,"release"),q=a.hitch(this,"_process",d,"cancel"),f=d.handles;this.touchOnly?(f.press=b(e,"touchstart",k),f.move=b(e,"touchmove",m),f.release=b(e,"touchend",p),f.cancel=b(e,"touchcancel",q)):(f.press=l.press(e,k),f.move=l.move(e,m),f.release=l.release(e,p),f.cancel=l.cancel(e,q));this._elements.push(d)}d.handles[g]=!d.handles[g]?
1:++d.handles[g];return b(e,g,n)},_getGestureElement:function(a){for(var b=0,d;b<this._elements.length;b++)if(d=this._elements[b],d.target===a)return d},_process:function(a,b,d){d._locking=d._locking||{};!d._locking[this.defaultEvent]&&!this.isLocked(d.currentTarget)&&(("INPUT"!=d.target.tagName||"radio"==d.target.type||"checkbox"==d.target.type)&&"TEXTAREA"!=d.target.tagName&&d.preventDefault(),d._locking[this.defaultEvent]=!0,this[b](a.data,d))},press:function(a,b){},move:function(a,b){},release:function(a,
b){},cancel:function(a,b){},fire:function(a,d){a&&d&&(d.bubbles=!0,d.cancelable=!0,b.emit(a,d.type,d))},_remove:function(a,b){var d=this._getGestureElement(a);if(d&&d.handles){d.handles[b]--;var l=d.handles;p.some(this._events,function(a){return 0<l[a]})||(this._cleanHandles(l),d=p.indexOf(this._elements,d),0<=d&&this._elements.splice(d,1))}},_cleanHandles:function(a){for(var b in a)a[b].remove&&a[b].remove(),delete a[b]},lock:function(a){this._lock=a},unLock:function(){this._lock=null},isLocked:function(a){return!this._lock||
!a?!1:this._lock!==a&&k.isDescendant(a,this._lock)},destroy:function(){p.forEach(this._elements,function(a){this._cleanHandles(a.handles)},this);this._elements=null}})})},"dojox/gesture/tap":function(){define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","./Base","../main"],function(m,d,p,a,k){m.experimental("dojox.gesture.tap");m=d(a,{defaultEvent:"tap",subEvents:["hold","doubletap"],holdThreshold:500,doubleTapTimeout:250,tapRadius:10,press:function(a,d){if(d.touches&&2<=d.touches.length)clearTimeout(a.tapTimeOut),
delete a.context;else{var k=d.target;this._initTap(a,d);a.tapTimeOut=setTimeout(p.hitch(this,function(){this._isTap(a,d)&&this.fire(k,{type:"tap.hold"});delete a.context}),this.holdThreshold)}},release:function(a,d){if(a.context&&this._isTap(a,d))switch(a.context.c){case 1:this.fire(d.target,{type:"tap"});break;case 2:this.fire(d.target,{type:"tap.doubletap"})}clearTimeout(a.tapTimeOut)},_initTap:function(a,d){a.context||(a.context={x:0,y:0,t:0,c:0});var k=(new Date).getTime();k-a.context.t<=this.doubleTapTimeout?
a.context.c++:(a.context.c=1,a.context.x=d.screenX,a.context.y=d.screenY);a.context.t=k},_isTap:function(a,d){var k=Math.abs(a.context.x-d.screenX),m=Math.abs(a.context.y-d.screenY);return k<=this.tapRadius&&m<=this.tapRadius}});k.gesture.tap=new m;k.gesture.tap.Tap=m;return k.gesture.tap})},"themes/PlateauTheme/widgets/HeaderController/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:themes/PlateauTheme/widgets/HeaderController/Widget.html":'\x3cdiv\x3e\r\n  \x3c!-- solve the bug of style delay loading --\x3e\r\n  \x3cdiv class\x3d"header-section jimu-float-leading" data-dojo-attach-point\x3d"headerNode"\x3e\r\n    \x3cimg class\x3d"logo jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"logoNode" data-dojo-attach-event\x3d"onload:_onLogoLoad"\x3e\r\n    \x3cdiv class\x3d"titles jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"titlesNode"\x3e\r\n      \x3cdiv class\x3d"jimu-title jimu-float-leading" data-dojo-attach-point\x3d"titleNode"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"jimu-subtitle jimu-float-leading jimu-leading-margin5" data-dojo-attach-point\x3d"subtitleNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"links jimu-float-leading jimu-leading-margin25" data-dojo-attach-point\x3d"linksNode"\x3e\r\n      \x3cdiv class\x3d"dynamic-section jimu-float-leading" data-dojo-attach-point\x3d"dynamicLinksNode"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"signin-section jimu-float-leading" data-dojo-attach-point\x3d"signInSectionNode"\x3e\r\n        \x3ca href\x3d"#" class\x3d"jimu-link" data-dojo-attach-event\x3d"onclick:_onSigninClick"\r\n        data-dojo-attach-point\x3d"signinLinkNode"\x3e${nls.signin}\x3c/a\x3e\r\n        \x3ca href\x3d"" target\x3d"_blank" class\x3d"jimu-link" data-dojo-attach-event\x3d"onclick:_onUserNameClick" data-dojo-attach-point\x3d"userNameLinkNode"\x3e\x3c/a\x3e\r\n        \x3ca href\x3d"#" class\x3d"jimu-link" data-dojo-attach-event\x3d"onclick:_onSignoutClick" data-dojo-attach-point\x3d"signoutLinkNode"\x3e${nls.signout}\x3c/a\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"container-section jimu-float-leading jimu-main-background" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:themes/PlateauTheme/widgets/HeaderController/css/style.css":'.jimu-widget-header-controller {box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.4);}.jimu-widget-header-controller .header-section {height: 100%; overflow: hidden; width: calc(100% - 360px);}.jimu-widget-header-controller .container-section {height: 100%; min-width: 80px;}.jimu-widget-header-controller .logo {cursor: pointer;}.jimu-widget-header-controller .hide-logo {display: none;}.jimu-widget-header-controller .titles {height: 100%; overflow: hidden;}.jimu-widget-header-controller .jimu-title {text-align: center; height: 100%;}.jimu-widget-header-controller .jimu-subtitle {text-align: center; height: 100%;}.jimu-widget-header-controller .links {height: 100%; overflow: hidden;}.jimu-widget-header-controller .dynamic-section, .jimu-widget-header-controller .signin-section {height: 100%;}.jimu-widget-header-controller .links .jimu-link {height: 100%;}.jimu-widget-header-controller .signin-section .jimu-link {color: #d9dde0;}.jimu-widget-header-controller .icon-node {cursor: pointer; opacity: 1; text-align: center; border-right: 1px solid #323e4f;}.jimu-widget-header-controller .icon-node img {height: 20px; width: 20px;}.jimu-widget-header-controller .icon-node:first-child {border: none;}.jimu-widget-header-controller .icon-node:hover {opacity: 1;}.jimu-widget-header-controller .icon-node.jimu-state-selected {background-color: #697a8c; opacity: 1; border: none; border-top: 2px solid #8491a1;}.jimu-widget-header-controller .drop-triangle {position: absolute; width: 0px; height: 0px; bottom: 1px; border-left: 4px solid transparent; border-right: 4px solid transparent; border-top: 4px solid white;}.jimu-widget-header-controller .jimu-drop-menu {box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.4);}.jimu-widget-header-controller .jimu-drop-menu .menu-item {overflow: hidden; border-top: 1px solid rgba(0, 0, 0, 0.2);}.jimu-widget-header-controller .jimu-drop-menu .menu-item:hover {background-color: rgba(0, 0, 0, 0.2);}.jimu-widget-header-controller .jimu-drop-menu .menu-item img {width: 24px; height: 24px; cursor: pointer; margin: 8px;}.jimu-widget-header-controller .jimu-drop-menu .menu-item .label {cursor: pointer; margin-top: 12px; font-size: 14px; color: white; min-width: 50px; text-align: center; white-space: nowrap; max-width: 300px; text-overflow: ellipsis; overflow: hidden; padding-right: 8px;}.jimu-rtl .jimu-widget-header-controller .jimu-drop-menu .menu-item .label{padding-left: 8px;}.popup-links .popup-title {}.popup-links .logo {height: 30px;}.popup-links .title {color: #fff; text-align: center; font-size: 16px; width: 71.42857142857143%; overflow: hidden; white-space: nowrap; height: 100%;}.popup-links .line {width: 100%; height: 4px; border-bottom: 1px solid #393c40;}.popup-links .link-section {width: 100%; height: 66px;}.popup-links a {color: #fff; margin-left: 20px; font-size: 14px; height: 100%; width: 95%; overflow: hidden; display: inline-block;}.popup-links .link-section.signin a {color: #d9dde0;}.jimu-header-more-popup {position: absolute; border-radius: 2px; z-index: 111; background-color: #FFFFFF;}.jimu-header-more-popup .pages {position: relative; overflow: hidden; padding: 2px;}.jimu-header-more-popup .points {position: absolute; overflow: hidden; bottom: -15px; left: 0px; right: 0px; text-align: center; background-color: #bababa;}.jimu-header-more-popup .points-inner {display: inline-block; overflow: hidden;}.jimu-header-more-popup .point {float: left; width: 8px; height: 8px; margin-left: 5px; border-radius: 4px; background-color: #f2f6f9; cursor: pointer;}.jimu-header-more-popup .point-selected {background-color: #485566;}.jimu-header-more-popup .page {position: relative; overflow: hidden;}.jimu-header-more-popup .close {position: absolute; top: -04.46428571428571%; right: -04.46428571428571%; border-radius: 50%; background-color: #FFFFFF; cursor: pointer;}.jimu-rtl .jimu-header-more-popup .close {left: -04.46428571428571%; right: auto;}.jimu-header-more-popup .close-inner {width: 80%; height: 80%; margin-left: 10%; margin-top: 10%; border-radius: 50%; background-image: url("images/close.png"); background-repeat: no-repeat; background-position: center center; background-size: 13px;}.jimu-header-more-popup .icon-node {cursor: pointer;}.jimu-header-more-popup .icon-node.jimu-state-selected {background-color: red;}.jimu-header-more-popup img {width: 48px; height: 48px; margin: auto; margin-top: 25%; display: block;}.jimu-header-more-popup .node-label {width: 100%; text-align: center; font-size: 16px; margin-top: 5px; color: white; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; display: inline-block; height: 20px;}@media screen and (max-width:320px){.jimu-header-more-popup .close-inner {background-size: 9px;}}@media screen and (max-width:760px) {.jimu-header-more-popup .node-label {font-size: 13px !important; height: 17px;} .jimu-widget-header-controller .header-section {width: calc(100% - 90px) !important;}}.jimu-more-icon-cover {z-index: 110; position: absolute; left: 0; top: 0; width: 100%; height: 100%;}.jimu-widget-header-controller .esriCTHidden {display: none;}.jimu-widget-header-controller .widget-open-symbol {height: 4px; width: 4px; border-radius: 4px; margin: auto; color: #FFF; background-color: #FFF;}',
"*now":function(m){m(['dojo/i18n!*preload*themes/PlateauTheme/widgets/HeaderController/nls/Widget*["ar","cs","da","de","en","el","es","et","fi","fr","he","hr","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/aspect dojo/query dojo/on dojo/Deferred dojo/mouse dojo/topic dojo/dom-construct dojo/dom-geometry jimu/BaseWidget jimu/PoolControllerMixin jimu/tokenUtils jimu/portalUtils jimu/portalUrlUtils jimu/utils jimu/dijit/Message ./PopupTileNodes dijit/registry dojo/NodeList-manipulate".split(" "),function(m,d,p,a,k,b,l,s,t,e,g,n,u,r,v,w,q,f,x,y,z){return m([u,r],{baseClass:"jimu-widget-header-controller jimu-main-background",
maxIconCount:-1,createMoreIcon:!1,switchableElements:{},height:40,openedId:"",moveTopOnActive:!1,postCreate:function(){this.inherited(arguments);this._processGroupSetting();this.switchableElements.title=this.titleNode;this.switchableElements.links=this.linksNode;this.switchableElements.subtitle=this.subtitleNode;this.position&&this.position.height&&(this.height=this.position.height);a.setStyle(this.signInSectionNode,"display","none");this.appConfig&&this.appConfig.logo?(this.logoNode.src=this.appConfig.logo,
a.removeClass(this.logoNode,"hide-logo")):(this.logoNode.src="",a.addClass(this.logoNode,"hide-logo"));this.appConfig.title&&(this.appConfig.title=f.sanitizeHTML(this.appConfig.title));this.appConfig.subtitle&&(this.appConfig.subtitle=f.sanitizeHTML(this.appConfig.subtitle));this.switchableElements.title.innerHTML=this.appConfig.title?this.appConfig.title:"";this.switchableElements.title.title=this.appConfig.title?this.appConfig.title:"";this.switchableElements.subtitle.innerHTML=this.appConfig.subtitle?
this.appConfig.subtitle:"";this._createDynamicLinks(this.appConfig.links);this._setElementsSize();this.own(l(this.domNode,t.enter,d.hitch(this,function(){var a="",c=q.getServerByUrl(this.appConfig&&this.appConfig.portalUrl||"");q.isArcGIScom(c)&&(c="ArcGIS.com");c&&(a=this.nls.signInTo+" "+c);this.signinLinkNode.title=a})))},startup:function(){this.inherited(arguments);this.resize()},onAction:function(a,c){if("highLight"===a&&c){var d=b('div[settingid\x3d"'+c.widgetId+'"]',this.domNode)[0];this._highLight(d)}"removeHighLight"===
a&&this._removeHighLight()},onSignIn:function(h){this.inherited(arguments);a.setStyle(this.signinLinkNode,"display","none");a.setStyle(this.userNameLinkNode,"display","");a.setStyle(this.signoutLinkNode,"display","");this.userNameLinkNode.innerHTML=h.userId;a.setAttr(this.userNameLinkNode,"href",this.appConfig.portalUrl+"home/user.html");this.popupLinkNode&&(a.setStyle(this.popupSigninNode,"display","none"),a.setStyle(this.popupUserNameNode,"display",""),a.setStyle(this.popupSignoutNode,"display",
""),b("a",this.popupUserNameNode).html(h.userId).attr("href",this.appConfig.portalUrl+"home/user.html"));this.resize()},onSignOut:function(){this.inherited(arguments);this._onSignOut(this.nls.signin);w.getPortal(this.appConfig.portalUrl).loadSelfInfo().then(d.hitch(this,function(a){this._onSignOut(this.nls.signInTo+" "+a.name)}),d.hitch(this,function(a){console.error(a)}))},_onSignOut:function(h){a.setStyle(this.signinLinkNode,"display","");a.setAttr(this.signinLinkNode,"innerHTML",h);a.setStyle(this.userNameLinkNode,
"display","none");a.setStyle(this.signoutLinkNode,"display","none");this.userNameLinkNode.innerHTML="";this.popupLinkNode&&(a.setStyle(this.popupSigninNode,"display",""),a.setAttr(this.popupSigninNode,"innerHTML",h),a.setStyle(this.popupUserNameNode,"display","none"),a.setStyle(this.popupSignoutNode,"display","none"),b("a",this.popupUserNameNode).html(""));this.resize()},resize:function(){var h=0,c=a.getStyle(this.headerNode,"float"),f=a.getStyle(this.logoNode,"float"),g=a.getStyle(this.titlesNode,
"float"),k=a.getStyle(this.linksNode,"float");c&&"none"!==c&&f&&"none"!==f&&g&&"none"!==g&&k&&"none"!==k?this._resize():setTimeout(d.hitch(this,this.resize),200);b(".jimu-widget-attributetable")[0]&&(h=b(".jimu-widget-attributetable")[0].clientHeight);h?e.publish("changeMapPosition",{bottom:h}):e.publish("changeMapPosition",{bottom:"0px"})},_resize:function(){var h=a.getContentBox(this.domNode);this._showSwitchableElements(["title","links","subtitle"]);this._getTitleContainerWidth(h);this._createIconNodes(h);
this.morePane&&this.morePane.resize();this.popupLinkNode&&a.setStyle(jimuConfig.layoutId,{left:a.getContentBox(this.popupLinkNode).w+"px"})},destroy:function(){this.timeoutHandle&&(clearTimeout(this.timeoutHandle),this.timeoutHandle=null);this.morePane&&this.morePane.destroy();this.moreIconPaneCoverNode&&(a.destroy(this.moreIconPaneCoverNode),this.moreIconPaneCoverNode=null);this.popupLinkNode&&this.popupLinksVisible&&this._hidePopupLink();a.destroy(this.popupLinkNode);this.inherited(arguments)},
onAppConfigChanged:function(a,c,b){switch(c){case "attributeChange":this._onAttributeChange(a,b);break;default:return}this.appConfig=a;this.resize()},getOpenedIds:function(){this.inherited(arguments);return""===this.openedId?[]:[this.openedId]},setOpenedIds:function(a){if(0!==a.length){var c=this.getConfigById(a[0]);c&&(this.openedId=a[0],c.widgets&&"openAll"===c.openType?this._showIconContent(c):c.widgets||this._showIconContent(c))}},_onLogoLoad:function(){this.resize()},_highLight:function(a){this.hlDiv&&
this._removeHighLight();if(a){var c=n.getMarginBox(a);this.hlDiv=g.create("div",{style:{position:"absolute",left:c.l+"px",top:c.t+"px",width:c.w+"px",height:c.h+"px"},"class":"icon-highlight"},a,"before")}},_removeHighLight:function(){this.hlDiv&&(g.destroy(this.hlDiv),this.hlDiv=null)},_onAttributeChange:function(h,c){var b;"title"in c&&c.title!==this.appConfig.title&&(b=f.sanitizeHTML(c.title),this.titleNode.innerHTML=b,this.titleNode.title=b);"subtitle"in c&&c.subtitle!==this.appConfig.subtitle&&
(this.subtitleNode.innerHTML=f.sanitizeHTML(c.subtitle));"logo"in c&&c.logo!==this.appConfig.logo&&(c.logo?(a.setAttr(this.logoNode,"src",c.logo),a.removeClass(this.logoNode,"hide-logo")):(a.removeAttr(this.logoNode,"src"),a.addClass(this.logoNode,"hide-logo")));"links"in c&&this._createDynamicLinks(c.links)},_setElementsSize:function(){a.setStyle(this.logoNode,{height:"30px",marginTop:(this.height-30)/2+"px"});a.setStyle(this.titleNode,{lineHeight:this.height+"px"});a.setStyle(this.subtitleNode,
{lineHeight:this.height+"px"});b(".jimu-link",this.domNode).style({lineHeight:this.height+"px"})},_processGroupSetting:function(){this._setMapCanvasAreaToDefault();p.forEach(this.appConfig.widgetPool.groups,function(a){var c;a:{if(this.config.groupSetting)for(c=0;c<this.config.groupSetting.length;c++)if(this.config.groupSetting[c].label===a.label){c=this.config.groupSetting[c].type;break a}c="openAll"}a.openType=c},this)},_createDynamicLinks:function(h){if(window.isRTL){var c=[];p.forEach(h,function(a){c.unshift(a)});
h=c}a.empty(this.dynamicLinksNode);p.forEach(h,function(h){a.create("a",{href:h.url,target:"_blank",innerHTML:f.sanitizeHTML(h.label),"class":"jimu-link jimu-align-leading jimu-leading-margin1",style:{lineHeight:this.height+"px"}},this.dynamicLinksNode)},this)},_showSwitchableElements:function(h){var c=this.switchableElements,b;for(b in c)c.hasOwnProperty(b)&&(-1<h.indexOf(b)?(a.setStyle(c[b],"display","block"),c[b].visible=!0):(a.setStyle(c[b],"display","none"),c[b].visible=!1));this.logoClickHandle&&
this.logoClickHandle.remove();0>h.indexOf("links")?this.logoClickHandle=l(this.logoNode,"click",d.hitch(this,this._onLogoClick)):(this.popupLinksVisible&&this._hidePopupLink(),a.setStyle(this.logoNode,{cursor:"default"}))},_switchSignin:function(){var a=v.getPortalCredential(this.appConfig.portalUrl);if(a)this.onSignIn(a);else this.onSignOut()},_onLogoClick:function(){this.popupLinkNode&&a.destroy(this.popupLinkNode);this.popupLinkNode=this._createPopupLinkNode();this.popupLinksVisible?this._hidePopupLink():
this._showPopupLink()},_hidePopupLink:function(){a.setStyle(this.popupLinkNode,"display","none");window.isRTL?a.setStyle(jimuConfig.layoutId,{right:0}):a.setStyle(jimuConfig.layoutId,{left:0});this.popupLinksVisible=!1},_showPopupLink:function(){a.setStyle(this.popupLinkNode,"display","");window.isRTL?a.setStyle(jimuConfig.layoutId,{right:a.getContentBox(this.popupLinkNode).w+"px"}):a.setStyle(jimuConfig.layoutId,{left:a.getContentBox(this.popupLinkNode).w+"px"});this.popupLinksVisible=!0},_createPopupLinkNode:function(){var h,
c;a.getContentBox(jimuConfig.mainPageId);h=a.create("div",{"class":"popup-links jimu-main-background",style:{position:"absolute",zIndex:100,top:0,bottom:0}},jimuConfig.mainPageId);window.isRTL?a.setStyle(h,{right:0,left:"50px"}):a.setStyle(h,{left:0,right:"50px"});c=a.create("div",{"class":"popup-title",style:{height:this.height+"px",width:"100%"}},h);a.create("img",{"class":"logo jimu-float-leading jimu-leading-margin1",src:this.appConfig.logo?this.appConfig.logo:this.folderUrl+"images/app-logo.png",
style:{width:"30px",height:"30px",marginTop:(this.height-30)/2+"px"}},c);a.create("div",{"class":"title jimu-float-leading jimu-leading-margin1",innerHTML:f.sanitizeHTML(this.appConfig.title),style:{lineHeight:this.height+"px"}},c);p.forEach(this.appConfig.links,function(a){this._createLinkNode(h,a,!1)},this);this._createLinkNode(h,{label:"",url:"#"},!1);return h},_createLinkNode:function(h,c,b){h=a.place('\x3cdiv class\x3d"jimu-link"\x3e\x3c/div\x3e',h);a.place('\x3cdiv class\x3d"line"\x3e\x3c/div\x3e',
h);b=a.place('\x3cdiv class\x3d"'+(b?"link-section signin":"link-section")+'"\x3e\x3c/div\x3e',h);a.create("a",{href:c.url,"class":"jimu-ellipsis",target:"_blank",innerHTML:f.sanitizeHTML(c.label),title:f.sanitizeHTML(c.label),style:{lineHeight:"66px"}},b);return h},_onSigninClick:function(){v.signInPortal(this.appConfig.portalUrl,this.appConfig.appId)},_onSignoutClick:function(){this.appConfig.mode?new x({message:this.nls.cantSignOutTip}):v.signOutAll()},_onUserNameClick:function(){},_getHeaderSectionWidth:function(){return a.getMarginBox(this.headerNode).w},
_getIconContainerWidth:function(){return a.getMarginBox(this.containerNode).w},_getTitlesWidth:function(){return a.getMarginBox(this.titlesNode).w},_getlinkWidth:function(){return a.getMarginBox(this.linksNode).w},_getLogoWidth:function(){return a.getMarginBox(this.logoNode).w+12},_getHeaderContainerWidth:function(a){var c=this._getIconContainerWidth(),b=this._getLogoWidth();return a.w-c-b},_getTitleContainerWidth:function(a){a=this._getHeaderContainerWidth(a);var c=this._getTitlesWidth(),b=this._getlinkWidth();
a<c+b&&(this.switchableElements.links.visible?(this._showSwitchableElements(["title","subtitle"]),c=this._getTitlesWidth(),a<c&&this._showSwitchableElements(["title"])):this._showSwitchableElements(["title"]))},_createIconNodes:function(h){b(".icon-node",this.containerNode).remove();this._closeDropMenu();var c,d=this.getAllConfigs();this.iconWidth=h.h;this._getTitleContainerWidth(h);h=360;h=760>=window.innerWidth?90:360;a.setStyle(this.containerNode,{width:h+"px"});this.maxIconCount=760>=window.innerWidth?
2:Math.floor(8);this.maxIconCount>=d.length?(this.headerIconCount=d.length,this.createMoreIcon=!1):(this.headerIconCount=this.maxIconCount-1,this.createMoreIcon=!0);this.createMoreIcon&&this._createIconNode({label:"more"});var e;for(h=this.headerIconCount-1;0<=h;h--){c=d[h];var f=this._createIconNode(c);c.openAtStart&&(e=f)}e&&!this.openAtStartWidget&&(this._onIconClick(e),this.openAtStartWidget=e.config.name);this.openedId&&(this.getConfigById(this.openedId)&&!1===this.getConfigById(this.openedId).inPanel)&&
(d=this._getIconNodeById(this.openedId),e=this.widgetManager.getWidgetById(this.openedId),d&&e?this._setOffPanelWidgetPosition(d,e):(this.widgetManager.closeWidget(this.openedId),this.openedId=""))},_createIconNode:function(b){var c,e,f;e="more"===b.label?this.folderUrl+"images/more_icon.png":b.icon;c=a.create("div",{"class":"icon-node jimu-float-trailing",title:b.label,settingId:b.id,style:{width:"45px",height:this.height+"px",textAlign:"center"}},this.containerNode);f=a.create("div",{"class":"widget-symbol-div",
style:{width:"100%"}},c);a.create("img",{src:e,style:{marginTop:(this.height-30)/2+3+"px",marginBottom:"3px"}},f);a.create("div",{"class":"widget-open-symbol esriCTHidden"},c);"more"===b.label?l(c,"click",d.hitch(this,this._showMorePane,b)):l(c,"click",d.hitch(this,function(){this._onIconClick(c)}));c.config=b;c.config.widgets&&(1<c.config.widgets.length&&"dropDown"===c.config.openType)&&this._createDropTriangle(c);this.openedId===b.id&&(a.addClass(c,"jimu-state-selected"),c.config.widgets&&(1<c.config.widgets.length&&
"dropDown"===c.config.openType)&&this._openDropMenu(c));return c},_createDropTriangle:function(b){var c=a.getMarginBox(b);a.create("div",{"class":"drop-triangle",style:{left:c.l+c.w/2-4+"px"}},b)},_onIconClick:function(a){!a.config.widgets||1===a.config.widgets.length||"openAll"===a.config.openType?this.openedId&&this.openedId===a.config.id?this._switchNodeToClose(this.openedId):this.openedId?this._switchNodeToClose(this.openedId).then(d.hitch(this,function(){this._closeDropMenu();this._switchNodeToOpen(a.config.id)})):
this._switchNodeToOpen(a.config.id):this.dropMenuNode?this._closeDropMenu():this._openDropMenu(a)},_closeDropMenu:function(){this.dropMenuNode&&(a.destroy(this.dropMenuNode),this.dropMenuNode=null)},_openDropMenu:function(b){this.dropMenuNode=a.create("div",{"class":"jimu-drop-menu jimu-main-background",title:b.config.label,style:{position:"absolute",zIndex:"101"}});a.place(this.dropMenuNode,this.containerNode);p.forEach(b.config.widgets,function(a){this._createDropMenuItem(a)},this);this._setDropMenuPosition(b);
this.morePane&&this.morePane.hide()},_createDropMenuItem:function(b){var c=a.create("div",{"class":"menu-item",title:f.sanitizeHTML(b.label),style:{height:this.height+"px"}},this.dropMenuNode);a.create("img",{"class":"jimu-float-leading",src:b.icon},c);a.create("div",{"class":"label jimu-float-leading",innerHTML:f.sanitizeHTML(b.label)},c);this.own(l(c,"click",d.hitch(this,function(){this._closeDropMenu();this.openedId?this._switchNodeToClose(this.openedId).then(d.hitch(this,function(){this._showIconContent(c.config)})):
this._showIconContent(c.config)})));c.config=b;return c},_setDropMenuPosition:function(b){var c={},c=a.getMarginBox(this.dropMenuNode),c=this._getDropdownPosition(b,c);c.zIndex=101;a.setStyle(this.dropMenuNode,f.getPositionStyle(c))},_getDropdownPosition:function(b,c){var d={},e=a.getMarginBox(b),f=a.getMarginBox(this.domNode);d.top=this.height+1;window.isRTL?d.right=0>e.l+e.w-c.w?0:e.l+e.w-c.w:e.l+c.w>f.w?d.right=0:d.left=e.l;return d},_switchNodeToOpen:function(d){d=this._getIconNodeById(d);b(".icon-node",
this.domNode).removeClass("jimu-state-selected");b(".widget-open-symbol",this.domNode).addClass("esriCTHidden");a.addClass(d,"jimu-state-selected");a.removeClass(d.children[1],"esriCTHidden");this._showIconContent(d.config)},_switchNodeToClose:function(a){b(".icon-node",this.domNode).removeClass("jimu-state-selected");this._setMapCanvasAreaToDefault();b(".widget-open-symbol",this.domNode).addClass("esriCTHidden");var c=this.appConfig.getConfigElementById(a);if(c)return!1===c.inPanel?(this.widgetManager.closeWidget(a),
this.openedId="",a=new s,a.resolve(),a):this.panelManager.closePanel(a+"_panel");a=new s;a.resolve();return a},_setMapCanvasAreaToDefault:function(){if(window.appInfo.isRunInMobile){var a=0;b(".jimu-widget-attributetable")[0]&&(a=b(".jimu-widget-attributetable")[0].clientHeight);a?e.publish("changeMapPosition",{bottom:a}):e.publish("changeMapPosition",{bottom:"0px"})}else e.publish("changeMapPosition",{right:"0px"})},_setMapCanvasArea:function(){if(window.appInfo.isRunInMobile){var a=0;b(".jimu-widget-attributetable")[0]&&
(a=b(".jimu-widget-attributetable")[0].clientHeight);if(this.panelManager&&this.panelManager.panels&&this.panelManager.panels[0]&&"normal"===this.panelManager.panels[0].windowState){var c=this.panelManager.getPositionOnMobile(this);a&&a>c.top?e.publish("changeMapPosition",{bottom:a}):e.publish("changeMapPosition",{bottom:c.top})}else 36<a?e.publish("changeMapPosition",{bottom:a}):window.hasOwnProperty("ontouchstart")||void 0!==window.ontouchstart||760>=window.innerWidth?e.publish("changeMapPosition",
{bottom:"36px"}):e.publish("changeMapPosition",{bottom:"0px"})}else this.panelManager&&this.panelManager.activePanel&&"minimized"===this.panelManager.activePanel.windowState?e.publish("changeMapPosition",{right:"0px"}):(e.publish("changeMapPosition",{right:"360px"}),this._resizeAttributeTableinRTL())},_resizeAttributeTableinRTL:function(){b(".jimu-widget-attributetable")[0]&&(window.isRTL?a.setStyle(b(".jimu-widget-attributetable")[0],"right","0px"):a.setStyle(b(".jimu-widget-attributetable")[0],
"left","0px"),b(".dijitTabContainer",b(".jimu-widget-attributetable")[0])[0]&&z.byId(b(".dijitTabContainer",b(".jimu-widget-attributetable")[0])[0].id).resize())},_getIconNodeById:function(a){a=b('.icon-node[settingId\x3d"'+a+'"]',this.domNode);if(0!==a.length)return a[0]},_unSelectIcon:function(a){b('.icon-node[settingId\x3d"'+a+'"]',this.domNode).removeClass("jimu-state-selected");this.openedId=""},_showIconContent:function(e){!1===e.inPanel?this.widgetManager.loadWidget(e).then(d.hitch(this,function(c){this.openedId=
e.id;var f=this._getIconNodeById(e.id);a.setStyle(c.domNode,"zIndex",101);this._setOffPanelWidgetPosition(f,c);this.widgetManager.openWidget(c);this.own(k.after(c,"onClose",d.hitch(this,function(){b(".widget-open-symbol",this.domNode).addClass("esriCTHidden");this._setMapCanvasAreaToDefault();this._unSelectIcon(e.id)})))})):(this._setMapCanvasArea(),this.panelManager.showPanel(e).then(d.hitch(this,function(a){this.openedId=e.id;this.own(k.after(a,"onClose",d.hitch(this,function(){this._unSelectIcon(e.id);
this._setMapCanvasAreaToDefault()})))})))},_setOffPanelWidgetPosition:function(a,b){var d=this._getDropdownPosition(a,this.widgetManager.getWidgetMarginBox(b));b.setPosition(d,this.containerNode)},_showMorePane:function(){var b,c,e=[],f=this.getAllConfigs();for(b=this.headerIconCount;b<f.length;b++)c=f[b],e.push(c);this.morePane&&this.morePane.destroy();this.moreIconPaneCoverNode&&a.destroy(this.moreIconPaneCoverNode);this._closeDropMenu();this.morePane=new y({openedId:this.openedId,items:e,numWidget:f});
this._createCoverNode();a.place(this.morePane.domNode,jimuConfig.mapId);this.morePane.startup();k.after(this.morePane,"onNodeClicked",d.hitch(this,function(b){this._moveConfigToHeader(b.config);this._createIconNodes(a.getContentBox(this.domNode));this._onIconClick(this._getIconNodeById(b.config.id))}),!0);k.after(this.morePane,"hide",d.hitch(this,function(){a.destroy(this.moreIconPaneCoverNode)}),!0)},_moveConfigToHeader:function(a){var b=this.getAllConfigs(),d=a.index;a.index=b[this.headerIconCount-
1].index;b[this.headerIconCount-1].index=d},_createCoverNode:function(){this.moreIconPaneCoverNode=a.create("div",{"class":"jimu-more-icon-cover"},jimuConfig.layoutId)}})});