/*@license
* Drag/Rotate/Resize Library
* Released under the MIT license, 2018-2020
* Karen Sarksyan
* nichollascarter@gmail.com
*/
const t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return setTimeout(t,1e3/60)},e=window.cancelAnimationFrame||window.mozCancelAnimationFrame||function(t){clearTimeout(t)},{forEach:s,slice:o,map:r,reduce:n}=Array.prototype,{warn:a}=console,i=t=>null!=t,c=t=>null==t,l=t=>"function"==typeof t,h=t=>l(t)?function(){t.call(this,...arguments)}:()=>{},u=function(t,e,s,o,r){let n=Math.cos,a=Math.sin;return{x:(t-s)*n(r=r*Math.PI/180)-(e-o)*a(r)+s,y:(t-s)*a(r)+(e-o)*n(r)+o}};class d{constructor(t){if("string"==typeof t){const e=document.querySelectorAll(t);this.length=e.length;for(let t=0;t<this.length;t++)this[t]=e[t]}else if("object"!=typeof t||1!==t.nodeType&&t!==document)if(t instanceof d){this.length=t.length;for(let e=0;e<this.length;e++)this[e]=t[e]}else{if(!i(e=t)||"object"!=typeof e||!(Array.isArray(e)||i(window.Symbol)&&"function"==typeof e[window.Symbol.iterator]||i(e.forEach)||"number"==typeof e.length&&(0===e.length||e.length>0&&e.length-1 in e)))throw new Error("Passed parameter must be selector/element/elementArray");this.length=0;for(let e=0;e<this.length;e++)1===t.nodeType&&(this[e]=t[e],this.length++)}else this[0]=t,this.length=1;var e}css(t){const e={setStyle(t){return((t,e)=>{let s=t.length;for(;s--;)for(const o in e)t[s].style[o]=e[o];return t.style})(this,t)},getStyle(){return(e=>{let s=e.length;for(;s--;)return e[s].currentStyle?e[s].currentStyle[t]:document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(e[s],"")[t]:e[s].style[t]})(this)}};return"string"==typeof t?e.getStyle.apply(this,o.call(arguments,1)):"object"!=typeof t&&t?(a(`Method ${t} does not exist`),!1):e.setStyle.apply(this,arguments)}on(){let t=this.length;for(;t--;)this[t].events||(this[t].events={},this[t].events[arguments[0]]=[]),"string"!=typeof arguments[1]?document.addEventListener?this[t].addEventListener(arguments[0],arguments[1],arguments[2]||{passive:!1}):document.attachEvent?this[t].attachEvent(`on${arguments[0]}`,arguments[1]):this[t][`on${arguments[0]}`]=arguments[1]:p(this[t],arguments[0],arguments[1],arguments[2],arguments[3],!0);return this}off(){let t=this.length;for(;t--;)this[t].events||(this[t].events={},this[t].events[arguments[0]]=[]),"string"!=typeof arguments[1]?document.removeEventListener?this[t].removeEventListener(arguments[0],arguments[1],arguments[2]):document.detachEvent?this[t].detachEvent(`on${arguments[0]}`,arguments[1]):this[t][`on${arguments[0]}`]=null:p(this[t],arguments[0],arguments[1],arguments[2],arguments[3],!1);return this}is(t){if(c(t))return!1;const e=x(t);let s=this.length;for(;s--;)if(this[s]===e[s])return!0;return!1}}function p(t,e,s,o,r,n){const a=function(t){let e=t.target;for(;e&&e!==this;)e.matches(s)&&o.call(e,t),e=e.parentNode};!0===n?document.addEventListener?t.addEventListener(e,a,r||{passive:!1}):document.attachEvent?t.attachEvent(`on${e}`,a):t[`on${e}`]=a:document.removeEventListener?t.removeEventListener(e,a,r||{passive:!1}):document.detachEvent?t.detachEvent(`on${e}`,a):t[`on${e}`]=null}function x(t){return new d(t)}class f{constructor(){this.observers={}}subscribe(t,e){const s=this.observers;return c(s[t])&&Object.defineProperty(s,t,{value:[]}),s[t].push(e),this}unsubscribe(t,e){const s=this.observers;if(i(s[t])){const o=s[t].indexOf(e);s[t].splice(o,1)}return this}notify(t,e,s){c(this.observers[t])||this.observers[t].forEach(o=>{if(e!==o)switch(t){case"onmove":o.notifyMove(s);break;case"onrotate":o.notifyRotate(s);break;case"onresize":o.notifyResize(s);break;case"onapply":o.notifyApply(s);break;case"ongetstate":o.notifyGetState(s)}})}}class y{constructor(t){this.name=t,this.callbacks=[]}registerCallback(t){this.callbacks.push(t)}removeCallback(t){const e=this.callbacks(t);this.callbacks.splice(e,1)}}class b{constructor(){this.events={}}registerEvent(t){this.events[t]=new y(t)}emit(t,e,s){this.events[e].callbacks.forEach(e=>{e.call(t,s)})}addEventListener(t,e){this.events[t].registerCallback(e)}removeEventListener(t,e){this.events[t].removeCallback(e)}}class g{constructor(t){this.el=t,this.storage=null,this.proxyMethods=null,this.eventDispatcher=new b,this._onMouseDown=this._onMouseDown.bind(this),this._onTouchStart=this._onTouchStart.bind(this),this._onMouseMove=this._onMouseMove.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onMouseUp=this._onMouseUp.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),this._animate=this._animate.bind(this)}enable(t){this._processOptions(t),this._init(this.el),this.proxyMethods.onInit.call(this,this.el)}disable(){m()}_init(){m()}_destroy(){m()}_processOptions(){m()}_start(){m()}_moving(){m()}_end(){m()}_animate(){m()}_drag({dx:t,dy:e,...s}){const o={dx:t,dy:e,transform:this._processMove(t,e),...s};this.proxyMethods.onMove.call(this,o),this._emitEvent("drag",o)}_draw(){this._animate()}_onMouseDown(t){this._start(t),x(document).on("mousemove",this._onMouseMove).on("mouseup",this._onMouseUp)}_onTouchStart(t){this._start(t.touches[0]),x(document).on("touchmove",this._onTouchMove).on("touchend",this._onTouchEnd)}_onMouseMove(t){t.preventDefault&&t.preventDefault(),this._moving(t,this.el)}_onTouchMove(t){t.preventDefault&&t.preventDefault(),this._moving(t.touches[0],this.el)}_onMouseUp(t){x(document).off("mousemove",this._onMouseMove).off("mouseup",this._onMouseUp),this._end(t,this.el)}_onTouchEnd(t){x(document).off("touchmove",this._onTouchMove).off("touchend",this._onTouchEnd),0===t.touches.length&&this._end(t.changedTouches[0],this.el)}_emitEvent(){this.eventDispatcher.emit(this,...arguments)}on(t,e){return this.eventDispatcher.addEventListener(t,e),this}off(t,e){return this.eventDispatcher.removeEventListener(t,e),this}}const m=()=>{throw Error("Method not implemented")},v=["dragStart","drag","dragEnd","resizeStart","resize","resizeEnd","rotateStart","rotate","rotateEnd","setPointStart","setPointEnd"],_=Math.PI/180,w=(t,e)=>{if(0===e)return t;{const s=M(t,e);if(s-t<e)return s}},M=(t,e)=>0===e?t:Math.round(t/e)*e,E=(t,e=6)=>Number(t.toFixed(e)),j=t=>t.getBoundingClientRect(),S=t=>{return t.css("-webkit-transform")||t.css("-moz-transform")||t.css("-ms-transform")||t.css("-o-transform")||t.css("transform")||"none"},k=t=>{const e=t.match(/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g);return e?e.map(t=>parseFloat(t)):[1,0,0,1,0,0]},V=(t,e)=>{if(e){if(t.classList){if(!(e.indexOf(" ")>-1))return t.classList.add(e);e.split(/\s+/).forEach(e=>t.classList.add(e))}return t}},T=(t,e)=>{if(e){if(t.classList){if(!(e.indexOf(" ")>-1))return t.classList.remove(e);e.split(/\s+/).forEach(e=>t.classList.remove(e))}return t}},A=(t,e)=>{const{top:s,left:o}=j(t),{top:r,left:n}=j(e),a=x(t),i=x(e);return!(s<r||s+parseFloat(a.css("height"))>r+parseFloat(i.css("height"))||o<n||o+parseFloat(a.css("width"))>n+parseFloat(i.css("width")))},z=t=>{const e=`matrix(${t.join()})`;return{transform:e,webkitTranform:e,mozTransform:e,msTransform:e,otransform:e}};class C extends g{constructor(t,e,s){if(super(t),this.constructor===C)throw new TypeError("Cannot construct Transformable instances directly");this.observable=s,v.forEach(t=>{this.eventDispatcher.registerEvent(t)}),this.enable(e)}_cursorPoint(){throw Error("'_cursorPoint()' method not implemented")}_rotate({radians:t,...e}){const s={transform:this._processRotate(t),delta:t,...e};this.proxyMethods.onRotate.call(this,s),this._emitEvent("rotate",s)}_resize({dx:t,dy:e,...s}){const o={...this._processResize(t,e),dx:t,dy:e,...s};this.proxyMethods.onResize.call(this,o),this._emitEvent("resize",o)}_processOptions(t){const{el:e}=this;V(e,"sjx-drag");const s={x:10,y:10,angle:10*_},o={move:!1,resize:!1,rotate:!1};let r=null,n=!1,a="xy",l=!1,u=5,d=!0,p=!1,f=!1,y=!1,b="auto",g="auto",m="auto",v=!1,w=!0,M=!0,E=!0,j=null,S=50,k=!0,T=null,A=()=>{},z=()=>{},C=()=>{},X=()=>{},Y=()=>{},D=()=>{},N=e.parentNode;if(i(t)){const{snap:V,each:R,axis:O,cursorMove:P,cursorResize:$,cursorRotate:B,rotationPoint:L,restrict:F,draggable:H,resizable:W,rotatable:q,onInit:I,onDrop:G,onMove:U,onResize:Q,onRotate:Z,onDestroy:J,container:K,proportions:tt,custom:et,rotatorAnchor:st,rotatorOffset:ot,showNormal:rt,withoutScaling:nt,minSize:at,allowReversing:it,minStartDistance:ct,processMove:lt,processResize:ht}=t;if(i(V)){const{x:t,y:e,angle:o}=V;s.x=c(t)?10:t,s.y=c(e)?10:e,s.angle=c(o)?s.angle:o*_}if(i(R)){const{move:t,resize:e,rotate:s}=R;o.move=t||!1,o.resize=e||!1,o.rotate=s||!1}i(F)&&(r="parent"===F?e.parentNode:x(F)[0]||document),b=P||"auto",g=$||"auto",m=B||"auto",a=O||"xy",N=i(K)&&x(K)[0]?x(K)[0]:N,v=L||!1,n=tt||!1,l=nt||!1,u=at||5,d=it||!0,y=ct||!1,p=lt||!1,f=ht||!1,w=!i(H)||H,M=!i(W)||W,E=!i(q)||q,T="object"==typeof et&&et||null,j=st||null,S=ot||50,k=!i(rt)||rt,A=h(I),Y=h(G),z=h(U),X=h(Q),C=h(Z),D=h(J)}this.options={axis:a,cursorMove:b,cursorRotate:m,cursorResize:g,rotationPoint:v,restrict:r,container:N,snap:s,each:o,proportions:n,draggable:w,resizable:M,rotatable:E,custom:T,rotatorAnchor:j,rotatorOffset:S,showNormal:k,withoutScaling:l,minSize:u,allowReversing:d,minStartDistance:y,processMove:p,processResize:f},this.proxyMethods={onInit:A,onDrop:Y,onMove:z,onResize:X,onRotate:C,onDestroy:D},this.subscribe(o)}_animate(){const e=this,{observable:s,storage:o,options:r}=e;if(c(o))return;if(o.frame=t(e._animate),!o.doDraw)return;o.doDraw=!1;let{dox:n,doy:a,clientX:l,clientY:h,doDrag:u,doResize:d,doRotate:p,doSetCenter:x,revX:f,revY:y}=o;const{snap:b,each:{move:g,resize:m,rotate:v},restrict:_,draggable:M,resizable:E,rotatable:j}=r;if(d&&E){const{transform:t,cx:r,cy:i}=o,{x:c,y:u}=this._pointToElement({x:l,y:h});let d=n?w(c-r,b.x/t.scX):0,p=a?w(u-i,b.y/t.scY):0;const x={dx:d=n?f?-d:d:0,dy:p=a?y?-p:p:0,clientX:l,clientY:h};e._resize(x),m&&s.notify("onresize",e,x)}if(u&&M){const{restrictOffset:t,elementOffset:r,nx:c,ny:u}=o;if(i(_)){const{left:e,top:s}=t,{left:o,top:n,width:a,height:i}=r,d=c-l,p=u-h,x=_.clientWidth-a,f=_.clientHeight-i,y=n-s,b=o-e;y-p<0&&(h=u-n+s),b-d<0&&(l=c-o+e),y-p>f&&(h=f+(u-n+s)),b-d>x&&(l=x+(c-o+e))}const d={dx:n?w(l-c,b.x):0,dy:a?w(h-u,b.y):0,clientX:l,clientY:h};e._drag(d),g&&s.notify("onmove",e,d)}if(p&&j){const{pressang:t,center:r}=o,n=Math.atan2(h-r.y,l-r.x)-t,a={clientX:l,clientY:h};e._rotate({radians:w(n,b.angle),...a}),v&&s.notify("onrotate",e,{radians:n,...a})}if(x&&j){const{bx:t,by:s}=o,{x:r,y:n}=this._pointToControls({x:l,y:h});e._moveCenterHandle(r-t,n-s)}}_start(t){const{observable:e,storage:s,options:{axis:o,restrict:r,each:n},el:a}=this,c=this._compute(t);Object.keys(c).forEach(t=>{s[t]=c[t]});const{onRightEdge:l,onBottomEdge:h,onTopEdge:u,onLeftEdge:d,handle:p,factor:x,revX:f,revY:y,doW:b,doH:g}=c,m=l||h||u||d,{handles:v}=s,{rotator:_,center:w,radius:M}=v;i(M)&&T(M,"sjx-hidden");const E=p.is(_)||_&&p.is(_.firstElementChild),S=!!i(w)&&p.is(w),k=!(E||m||S),{clientX:V,clientY:A}=t,{x:z,y:C}=this._cursorPoint({clientX:V,clientY:A}),{x:X,y:Y}=this._pointToElement({x:z,y:C}),{x:D,y:N}=this._pointToControls({x:z,y:C}),R={clientX:V,clientY:A,nx:z,ny:C,cx:X,cy:Y,bx:D,by:N,doResize:m,doDrag:k,doRotate:E,doSetCenter:S,onExecution:!0,cursor:null,elementOffset:j(a),restrictOffset:i(r)?j(r):null,dox:/\x/.test(o)&&(!m||(p.is(v.ml)||p.is(v.mr)||p.is(v.tl)||p.is(v.tr)||p.is(v.bl)||p.is(v.br))),doy:/\y/.test(o)&&(!m||(p.is(v.br)||p.is(v.bl)||p.is(v.bc)||p.is(v.tr)||p.is(v.tl)||p.is(v.tc)))};this.storage={...s,...R};const O={clientX:V,clientY:A};m?this._emitEvent("resizeStart",O):E?this._emitEvent("rotateStart",O):k&&this._emitEvent("dragStart",O);const{move:P,resize:$,rotate:B}=n,L=m?"resize":E?"rotate":"drag",F=m&&$||E&&B||k&&P;e.notify("ongetstate",this,{clientX:V,clientY:A,actionName:L,triggerEvent:F,factor:x,revX:f,revY:y,doW:b,doH:g}),this._draw()}_moving(t){const{storage:e,options:s}=this,{x:o,y:r}=this._cursorPoint(t);e.e=t,e.clientX=o,e.clientY=r,e.doDraw=!0;let{doRotate:n,doDrag:a,doResize:i,cursor:l}=e;const{cursorMove:h,cursorResize:u,cursorRotate:d}=s;c(l)&&(a?l=h:n?l=d:i&&(l=u),x(document.body).css({cursor:l}))}_end({clientX:t,clientY:s}){const{options:{each:o},observable:r,storage:n,proxyMethods:a}=this,{doResize:c,doDrag:l,doRotate:h,frame:u,handles:{radius:d}}=n,p=c?"resize":l?"drag":"rotate";n.doResize=!1,n.doDrag=!1,n.doRotate=!1,n.doSetCenter=!1,n.doDraw=!1,n.onExecution=!1,n.cursor=null,this._apply(p);const f={clientX:t,clientY:s};a.onDrop.call(this,f),c?this._emitEvent("resizeEnd",f):h?this._emitEvent("rotateEnd",f):l&&this._emitEvent("dragEnd",f),n.outOfSnap=!1;const{move:y,resize:b,rotate:g}=o,m=c&&b||h&&g||l&&y;r.notify("onapply",this,{clientX:t,clientY:s,actionName:p,triggerEvent:m}),e(u),x(document.body).css({cursor:"auto"}),i(d)&&V(d,"sjx-hidden")}_compute(t){const{handles:e}=this.storage,s=x(t.target),{revX:o,revY:r,doW:n,doH:a,...i}=this._checkHandles(s,e),c=this._getState({revX:o,revY:r,doW:n,doH:a}),{x:l,y:h}=this._cursorPoint(t),u=Math.atan2(h-c.center.y,l-c.center.x);return{...c,...i,handle:s,pressang:u}}_checkHandles(t,e){const{tl:s,tc:o,tr:r,bl:n,br:a,bc:c,ml:l,mr:h}=e,u=!!i(s)&&t.is(s),d=!!i(o)&&t.is(o),p=!!i(r)&&t.is(r),x=!!i(n)&&t.is(n),f=!!i(c)&&t.is(c),y=!!i(a)&&t.is(a),b=!!i(l)&&t.is(l),g=!!i(h)&&t.is(h);return{revX:u||b||x||d,revY:u||p||d||b,onTopEdge:d||p||u,onLeftEdge:u||b||x,onRightEdge:p||g||y,onBottomEdge:y||f||x,doW:b||g,doH:d||f}}notifyMove(){this._drag(...arguments)}notifyRotate({radians:t,...e}){const{snap:{angle:s}}=this.options;this._rotate({radians:w(t,s),...e})}notifyResize(){this._resize(...arguments)}notifyApply({clientX:t,clientY:e,actionName:s,triggerEvent:o}){this.proxyMethods.onDrop.call(this,{clientX:t,clientY:e}),o&&(this._apply(s),this._emitEvent(`${s}End`,{clientX:t,clientY:e}))}notifyGetState({clientX:t,clientY:e,actionName:s,triggerEvent:o,...r}){if(o){const o=this._getState(r);this.storage={...this.storage,...o},this._emitEvent(`${s}Start`,{clientX:t,clientY:e})}}subscribe({resize:t,move:e,rotate:s}){const{observable:o}=this;(e||t||s)&&o.subscribe("ongetstate",this).subscribe("onapply",this),e&&o.subscribe("onmove",this),t&&o.subscribe("onresize",this),s&&o.subscribe("onrotate",this)}unsubscribe(){const{observable:t}=this;t.unsubscribe("ongetstate",this).unsubscribe("onapply",this).unsubscribe("onmove",this).unsubscribe("onresize",this).unsubscribe("onrotate",this)}disable(t,e){const{storage:s,proxyMethods:o,el:r}=this;c(s)||(s.onExecution&&(this._end({clientX:t,clientY:e}),x(document).off("mousemove",this._onMouseMove).off("mouseup",this._onMouseUp).off("touchmove",this._onTouchMove).off("touchend",this._onTouchEnd)),T(r,"sjx-drag"),this._destroy(),this.unsubscribe(),o.onDestroy.call(this,r),delete this.storage)}exeDrag({dx:t,dy:e}){const{draggable:s}=this.options;s&&(this.storage={...this.storage,...this._getState({revX:!1,revY:!1,doW:!1,doH:!1})},this._drag({dx:t,dy:e}),this._apply("drag"))}exeResize({dx:t,dy:e,revX:s,revY:o,doW:r,doH:n}){const{resizable:a}=this.options;a&&(this.storage={...this.storage,...this._getState({revX:s||!1,revY:o||!1,doW:r||!1,doH:n||!1})},this._resize({dx:t,dy:e}),this._apply("resize"))}exeRotate({delta:t}){const{rotatable:e}=this.options;e&&(this.storage={...this.storage,...this._getState({revX:!1,revY:!1,doW:!1,doH:!1})},this._rotate({radians:t}),this._apply("rotate"))}}const X=({x:t,y:e},s)=>{const[o,r,n,a,i,c]=s;return{x:o*t+n*e+i,y:r*t+a*e+c}},Y=t=>{const e=[[t[0],t[2],t[4]],[t[1],t[3],t[5]],[0,0,1]];if(e.length!==e[0].length)return;const s=e.length,o=[],r=[];for(let t=0;t<s;t+=1){o[o.length]=[],r[r.length]=[];for(let n=0;n<s;n+=1)o[t][n]=t==n?1:0,r[t][n]=e[t][n]}for(let t=0;t<s;t+=1){let e=r[t][t];if(0===e){for(let n=t+1;n<s;n+=1)if(0!==r[n][t]){for(let a=0;a<s;a++)e=r[t][a],r[t][a]=r[n][a],r[n][a]=e,e=o[t][a],o[t][a]=o[n][a],o[n][a]=e;break}if(0===(e=r[t][t]))return}for(let n=0;n<s;n++)r[t][n]=r[t][n]/e,o[t][n]=o[t][n]/e;for(let n=0;n<s;n++)if(n!=t){e=r[n][t];for(let a=0;a<s;a++)r[n][a]-=e*r[t][a],o[n][a]-=e*o[t][a]}}return[o[0][0],o[1][0],o[0][1],o[1][1],o[0][2],o[1][2]]},D=([t,e,s,o,r,n],[a,i,c,l,h,u])=>{const d=[[t,s,r],[e,o,n],[0,0,1]],p=[[a,c,h],[i,l,u],[0,0,1]],x=[];for(let t=0;t<p.length;t++){x[t]=[];for(let e=0;e<d[0].length;e++){let s=0;for(let o=0;o<d.length;o++)s+=d[o][e]*p[t][o];x[t].push(s)}}return[x[0][0],x[1][0],x[0][1],x[1][1],x[0][2],x[1][2]]},N=(t,e,s,o,r,n,a,i,c)=>{const l=parseFloat(s)/2,h=parseFloat(o)/2,u=t+l,d=e+h,p=t-u,x=e-d,f=Math.atan2(i?0:x,c?0:p)+r,y=Math.sqrt(Math.pow(c?0:l,2)+Math.pow(i?0:h,2));let b=Math.cos(f),g=Math.sin(f);const m=d+y*(g=!0===a?-g:g);return{left:E(u+y*(b=!0===n?-b:b)),top:E(m)}},R=2,O=7;class P extends C{_init(t){const{rotationPoint:e,container:s,resizable:o,rotatable:r,showNormal:n}=this.options,{left:a,top:l,width:h,height:u}=t.style,d=document.createElement("div");V(d,"sjx-wrapper"),s.appendChild(d);const p=x(t),f=h||p.css("width"),y=u||p.css("height"),b={top:l||p.css("top"),left:a||p.css("left"),width:f,height:y,transform:S(p)},g=document.createElement("div");V(g,"sjx-controls");const m={...r&&{normal:n?["sjx-normal"]:null,rotator:["sjx-hdl","sjx-hdl-m","sjx-rotator"]},...o&&{tl:["sjx-hdl","sjx-hdl-t","sjx-hdl-l","sjx-hdl-tl"],tr:["sjx-hdl","sjx-hdl-t","sjx-hdl-r","sjx-hdl-tr"],br:["sjx-hdl","sjx-hdl-b","sjx-hdl-r","sjx-hdl-br"],bl:["sjx-hdl","sjx-hdl-b","sjx-hdl-l","sjx-hdl-bl"],tc:["sjx-hdl","sjx-hdl-t","sjx-hdl-c","sjx-hdl-tc"],bc:["sjx-hdl","sjx-hdl-b","sjx-hdl-c","sjx-hdl-bc"],ml:["sjx-hdl","sjx-hdl-m","sjx-hdl-l","sjx-hdl-ml"],mr:["sjx-hdl","sjx-hdl-m","sjx-hdl-r","sjx-hdl-mr"]},center:e&&r?["sjx-hdl","sjx-hdl-m","sjx-hdl-c","sjx-hdl-mc"]:void 0};if(Object.keys(m).forEach(t=>{const e=m[t];if(c(e))return;const s=$(e);m[t]=s,g.appendChild(s)}),i(m.center)){x(m.center).css({left:`${t.getAttribute("data-cx")}px`,top:`${t.getAttribute("data-cy")}px`})}d.appendChild(g);const v=x(g);v.css(b),this.storage={controls:g,handles:m,radius:void 0,parent:t.parentNode},v.on("mousedown",this._onMouseDown).on("touchstart",this._onTouchStart)}_destroy(){const{controls:t}=this.storage;x(t).off("mousedown",this._onMouseDown).off("touchstart",this._onTouchStart);const e=t.parentNode;e.parentNode.removeChild(e)}_pointToElement({x:t,y:e}){const{transform:s}=this.storage,o=[...s.matrix];return o[4]=o[5]=0,this._applyMatrixToPoint(Y(o),t,e)}_pointToControls(t){return this._pointToElement(t)}_applyMatrixToPoint(t,e,s){return X({x:e,y:s},t)}_cursorPoint({clientX:t,clientY:e}){const{container:s}=this.options,o=k(S(x(s)));return X({x:t,y:e},Y(o))}_apply(){const{el:t,storage:e}=this,{controls:s,handles:o}=e,r=x(s),n=parseFloat(r.css("width"))/2,a=parseFloat(r.css("height"))/2,{center:c}=o,l=i(c),h=l?parseFloat(x(c).css("left")):n,u=l?parseFloat(x(c).css("top")):a;t.setAttribute("data-cx",h),t.setAttribute("data-cy",u),this.storage.cached=null}_processResize(t,e){const{el:s,storage:o,options:{proportions:r}}=this,{controls:n,coords:a,cw:i,ch:c,transform:l,refang:h,revX:u,revY:d,doW:p,doH:f}=o,y=p||!p&&!f?(i+t)/i:(c+e)/c,b=r?i*y:i+t,g=r?c*y:c+e;if(b<=R||g<=R)return;const m=[...l.matrix],v=N(m[4],m[5],b,g,h,u,d,p,f),_=a.left-v.left,w=a.top-v.top;m[4]+=_,m[5]+=w;const M=z(m);return M.width=`${b}px`,M.height=`${g}px`,x(n).css(M),x(s).css(M),o.cached={dx:_,dy:w},{width:b,height:g,ox:_,oy:w}}_processMove(t,e){const{el:s,storage:o}=this,{controls:r,transform:{matrix:n,parentMatrix:a}}=o,i=[...a];i[4]=i[5]=0;const c=[...n];c[4]=n[4]+t,c[5]=n[5]+e;const l=z(c);return x(r).css(l),x(s).css(l),o.cached={dx:t,dy:e},c}_processRotate(t){const{el:e,storage:{controls:s,transform:o,center:r}}=this,{matrix:n,parentMatrix:a}=o,i=E(Math.cos(t),4),c=E(Math.sin(t),4),l=[1,0,0,1,r.cx,r.cy],h=[i,c,-c,i,0,0],u=[...a];u[4]=u[5]=0;const d=D(Y(u),D(h,u)),p=D(D(l,d),Y(l)),f=D(p,n),y=z(f);return x(s).css(y),x(e).css(y),f}_getState(t){const{revX:e,revY:s,doW:o,doH:r}=t,n=e!==s?-1:1,{el:a,storage:{handles:c,controls:l,parent:h},options:{container:u}}=this,{center:d}=c,p=x(l),f=k(S(x(u))),y=k(S(x(l))),b=k(S(x(h))),g=Math.atan2(y[1],y[0])*n,m=h!==u?D(b,f):f,v={matrix:y,parentMatrix:m,scX:Math.sqrt(y[0]*y[0]+y[1]*y[1]),scY:Math.sqrt(y[2]*y[2]+y[3]*y[3])},_=parseFloat(p.css("width")),w=parseFloat(p.css("height")),M=N(y[4],y[5],_,w,g,e,s,o,r),E=_/2,V=w/2,T=j(a),A=i(d),z=A?parseFloat(x(d).css("left")):E,C=A?parseFloat(x(d).css("top")):V,R=A?O:0,{x:P,y:$}=X({x:T.left,y:T.top},Y(m));return{transform:v,cw:_,ch:w,coords:M,center:{x:P+z-R,y:$+C-R,cx:-z+E-R,cy:-C+V-R,hx:z,hy:C},factor:n,refang:g,revX:e,revY:s,doW:o,doH:r}}_moveCenterHandle(t,e){const{handles:{center:s},center:{hx:o,hy:r}}=this.storage,n=`${o+t}px`,a=`${r+e}px`;x(s).css({left:n,top:a})}resetCenterPoint(){const{handles:{center:t}}=this.storage;x(t).css({left:null,top:null})}fitControlsToSize(){}get controls(){return this.storage.controls}}const $=t=>{const e=document.createElement("div");return t.forEach(t=>{V(e,t)}),e},B=H("svg").createSVGPoint(),L=/[+-]?\d+(\.\d+)?/g,F=["circle","ellipse","image","line","path","polygon","polyline","rect","text","g","foreignobject"];function H(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}const W=t=>{const e=[];return K(t)?s.call(t.childNodes,t=>{if(1===t.nodeType){const s=t.tagName.toLowerCase();-1!==F.indexOf(s)&&("g"===s&&e.push(...W(t)),e.push(t))}}):e.push(t),e},q=()=>H("svg").createSVGMatrix(),I=(t,e)=>{return(e.getScreenCTM()||q()).inverse().multiply(t.getScreenCTM()||q())},G=t=>{const{a:e,b:s,c:o,d:r,e:n,f:a}=t;return`matrix(${e},${s},${o},${r},${n},${a})`},U=(t,e,s)=>(B.x=e,B.y=s,B.matrixTransform(t)),Q=t=>{const e=q();return e.a=t.a,e.b=t.b,e.c=t.c,e.d=t.d,e.e=t.e,e.f=t.f,e},Z=t=>{const e=t.tagName.toLowerCase();return-1!==F.indexOf(e)||(a("Selected element "+e+" is not allowed to transform. Allowed elements:\ncircle, ellipse, image, line, path, polygon, polyline, rect, text, g, foreignObject"),!1)},J=(t,e,s)=>{if(c(e)||c(s))return null;const o=t.createSVGPoint();return o.x=e,o.y=s,o},K=t=>"g"===t.tagName.toLowerCase(),tt=t=>["g","svg","rect","foreignobject"].includes(t.tagName.toLowerCase()),et=t=>t.match(L).reduce((t,e,s,o)=>(s%2==0&&t.push(o.slice(s,s+2)),t),[]),st=/\s*([achlmqstvz])([^achlmqstvz]*)\s*/gi,ot=/\s*,\s*|\s+/g,rt=t=>{let e=st.lastIndex=0;const s=[];for(;e=st.exec(t);){const t=e[1],o=t.toUpperCase(),r=e[2].replace(/([^e])-/g,"$1 -").replace(/ +/g," ");s.push({relative:t!==o,key:o,cmd:t,values:r.trim().split(ot).map(t=>{if(!isNaN(t))return Number(t)})})}return s},nt=t=>{const{path:e,dx:s,dy:o}=t;try{const t=rt(e);let r="",n=" ",a=!0;for(let e=0,i=t.length;e<i;e++){const i=t[e],{values:c,key:l,relative:h}=i,u=[];switch(l){case"M":for(let t=0,e=c.length;t<e;t+=2){let[e,r]=c.slice(t,t+2);h&&!a||(e+=s,r+=o),u.push(e,r),a=!1}break;case"A":for(let t=0,e=c.length;t<e;t+=7){const e=c.slice(t,t+7);h||(e[5]+=s,e[6]+=o),u.push(...e)}break;case"C":for(let t=0,e=c.length;t<e;t+=6){const e=c.slice(t,t+6);h||(e[0]+=s,e[1]+=o,e[2]+=s,e[3]+=o,e[4]+=s,e[5]+=o),u.push(...e)}break;case"H":for(let t=0,e=c.length;t<e;t+=1){const e=c.slice(t,t+1);h||(e[0]+=s),u.push(e[0])}break;case"V":for(let t=0,e=c.length;t<e;t+=1){const e=c.slice(t,t+1);h||(e[0]+=o),u.push(e[0])}break;case"L":case"T":for(let t=0,e=c.length;t<e;t+=2){let[e,r]=c.slice(t,t+2);h||(e+=s,r+=o),u.push(e,r)}break;case"Q":case"S":for(let t=0,e=c.length;t<e;t+=4){let[e,r,n,a]=c.slice(t,t+4);h||(e+=s,r+=o,n+=s,a+=o),u.push(e,r,n,a)}break;case"Z":c[0]="",n=""}r+=i.cmd+u.join(",")+n}return r}catch(t){a("Path parsing error: "+t)}},at=t=>{const{path:e,localCTM:s}=t;try{const t=rt(e);let o="",r=" ";const n=[];let a=!0;for(let e=0,i=t.length;e<i;e++){const i=t[e],{values:c,key:l,relative:h}=i;switch(l){case"A":{const t=[];for(let e=0,o=c.length;e<o;e+=7){const[o,r,n,a,i,l,u]=c.slice(e,e+7),d=Q(s);h&&(d.e=d.f=0);const{x:p,y:x}=U(d,l,u);t.push(E(p),E(x)),d.e=d.f=0;const{x:f,y:y}=U(d,o,r);t.unshift(E(f),E(y),n,a,i)}n.push(t);break}case"C":{const t=[];for(let e=0,o=c.length;e<o;e+=6){const[o,r,n,a,i,l]=c.slice(e,e+6),u=Q(s);h&&(u.e=u.f=0);const{x:d,y:p}=U(u,o,r),{x:x,y:f}=U(u,n,a),{x:y,y:b}=U(u,i,l);t.push(E(d),E(p),E(x),E(f),E(y),E(b))}n.push(t);break}case"H":{const t=[];for(let e=0,o=c.length;e<o;e+=1){const[o]=c.slice(e,e+1),r=Q(s);h&&(r.e=r.f=0);const{x:n}=U(r,o,0);t.push(E(n))}n.push(t);break}case"V":{const t=[];for(let e=0,o=c.length;e<o;e+=1){const[o]=c.slice(e,e+1),r=Q(s);h&&(r.e=r.f=0);const{y:n}=U(r,0,o);t.push(E(n))}n.push(t);break}case"T":case"L":{const t=[];for(let e=0,o=c.length;e<o;e+=2){const[o,r]=c.slice(e,e+2),n=Q(s);h&&(n.e=n.f=0);const{x:a,y:i}=U(n,o,r);t.push(E(a),E(i))}n.push(t);break}case"M":{const t=[];for(let e=0,o=c.length;e<o;e+=2){const[o,r]=c.slice(e,e+2),n=Q(s);h&&!a&&(n.e=n.f=0);const{x:i,y:l}=U(n,o,r);t.push(E(i),E(l)),a=!1}n.push(t);break}case"Q":{const t=[];for(let e=0,o=c.length;e<o;e+=4){const[o,r,n,a]=c.slice(e,e+4),i=Q(s);h&&(i.e=i.f=0);const{x:l,y:u}=U(i,o,r),{x:d,y:p}=U(i,n,a);t.push(E(l),E(u),E(d),E(p))}n.push(t);break}case"S":{const t=[];for(let e=0,o=c.length;e<o;e+=4){const[o,r,n,a]=c.slice(e,e+4),i=Q(s);h&&(i.e=i.f=0);const{x:l,y:u}=U(i,o,r),{x:d,y:p}=U(i,n,a);t.push(E(l),E(u),E(d),E(p))}n.push(t);break}case"Z":n.push([""]),r=""}o+=i.cmd+n[e].join(",")+r}return o}catch(t){a("Path parsing error: "+t)}},it="#00a8ff";class ct extends C{_init(t){const{rotationPoint:e,container:s,resizable:o,rotatable:r,rotatorAnchor:n,rotatorOffset:a,showNormal:h,custom:u}=this.options,d=H("g");V(d,"sjx-svg-wrapper"),V(d,t.nodeName),s.appendChild(d);const{width:p,height:f,x:y,y:b}=t.getBBox(),g=I(t,s),m=H("rect");[["width",p],["height",f],["x",y],["y",b],["fill",it],["fill-opacity",0],["stroke",it],["stroke-dasharray","3 3"],["vector-effect","non-scaling-stroke"],["transform",G(g)]].forEach(([t,e])=>{m.setAttribute(t,e)});const v=H("g"),_=H("g"),w=H("g");V(w,"sjx-svg-box-group"),V(v,"sjx-svg-handles"),V(_,"sjx-svg-normal-group"),w.appendChild(m),d.appendChild(w),d.appendChild(_),d.appendChild(v);const M=m.getBBox(),{x:E,y:j,width:S,height:k}=M,T=t.getAttribute("data-cx"),A=t.getAttribute("data-cy"),z=I(m,m.parentNode),C=U(z,E+S/2,j+k/2),X=U(z,E,j),Y=U(z,E+S,j),D=U(z,E+S,j+k/2),N=U(z,E,j+k/2),R=U(z,E+S/2,j),O=U(z,E+S/2,j+k),P=U(z,E+S,j+k),$=U(z,E,j+k),B={tl:X,tr:Y,br:P,bl:$,tc:R,bc:O,ml:N,mr:D};let L={},F=null;if(r){const t={};let s=1;switch(n){case"n":t.x=R.x,t.y=R.y;break;case"s":t.x=O.x,t.y=O.y,s=-1;break;case"w":t.x=N.x,t.y=N.y,s=-1;break;case"e":default:t.x=D.x,t.y=D.y}const o="n"===n||"s"===n?Math.atan2($.y-X.y,$.x-X.x):Math.atan2(X.y-Y.y,X.x-Y.x);F={x:t.x-a*s*Math.cos(o),y:t.y-a*s*Math.sin(o)};const r=h?H("line"):null;h&&(r.x1.baseVal.value=t.x,r.y1.baseVal.value=t.y,r.x2.baseVal.value=F.x,r.y2.baseVal.value=F.y,pt(r,it),_.appendChild(r));let i=null;e&&(i=H("line"),V(i,"sjx-hidden"),i.x1.baseVal.value=C.x,i.y1.baseVal.value=C.y,i.x2.baseVal.value=T||C.x,i.y2.baseVal.value=A||C.y,pt(i,"#fe3232"),i.setAttribute("opacity",.5),_.appendChild(i)),L={normal:r,radius:i}}const W={...o&&B,rotator:F,center:e&&r?J(s,T,A)||C:void 0};Object.keys(W).forEach(t=>{const e=W[t];if(c(e))return;const{x:s,y:o}=e,r="center"===t?"#fe3232":it;i(u)&&l(u[t])?W[t]=u[t](z,M,U):W[t]=dt(s,o,r,t),v.appendChild(W[t])}),this.storage={wrapper:d,box:m,handles:{...W,...L},parent:t.parentNode},x(d).on("mousedown",this._onMouseDown).on("touchstart",this._onTouchStart)}fitTo(t,e){const{options:s,storage:o}=this,{box:r}=o;if(e){const e=parseFloat(r.getAttribute("height"));parseFloat(t.getAttribute("height"))<e&&t.setAttribute("height",e)}r.setAttribute("height",t.getAttribute("height"));const{x:n,y:a}=r.getBBox();ut(o,s,{x:n,y:a,width:parseFloat(r.getAttribute("width")),height:parseFloat(r.getAttribute("height")),boxMatrix:null})}_destroy(){const{wrapper:t}=this.storage;x(t).off("mousedown",this._onMouseDown).off("touchstart",this._onTouchStart),t.parentNode.removeChild(t)}_cursorPoint(t){const{container:e}=this.options,s=e.getBoundingClientRect(),o=e.getScreenCTM();return o.a=window.currentScale,o.d=window.currentScale,o.e=s.x,o.f=s.y,U(o.inverse(),t.clientX,t.clientY)}_pointToElement({x:t,y:e}){const{transform:s}=this.storage,{ctm:o}=s,r=o.inverse();return r.e=r.f=0,this._applyMatrixToPoint(r,t,e)}_pointToControls({x:t,y:e}){const{transform:s}=this.storage,{boxCTM:o}=s,r=o.inverse();return r.e=r.f=0,this._applyMatrixToPoint(r,t,e)}_applyMatrixToPoint(t,e,s){const{container:o}=this.options,r=o.createSVGPoint();return r.x=e,r.y=s,r.matrixTransform(t)}_apply(t){const{el:e,storage:s,options:o,options:{container:r}}=this,{box:n,handles:a,cached:l,transform:h}=s,{matrix:u,boxCTM:d,bBox:p,ctm:x}=h,f=e.getBBox(),{x:y,y:b,width:g,height:m}=f,v=i(a.center)?U(d,a.center.cx.baseVal.value,a.center.cy.baseVal.value):U(u,y+g/2,b+m/2);if(e.setAttribute("data-cx",v.x),e.setAttribute("data-cy",v.y),c(l))return;const{scaleX:_,scaleY:w,dx:M,dy:E}=l;if("drag"===t){if(0===M&&0===E)return;const t=q();t.e=M,t.f=E;const s=t.multiply(u).multiply(t.inverse());tt(e)||(e.setAttribute("transform",G(s)),lt(e,{x:M,y:E}))}if("resize"===t){const{x:t,y:a,width:i,height:c}=n.getBBox();ut(s,o,{x:t,y:a,width:i,height:c,boxMatrix:null}),tt(e)||(ht(e,{scaleX:_,scaleY:w,defaultCTM:x,bBox:p,container:r,storage:s,withoutScaling:o.withoutScaling}),e.setAttribute("transform",G(u)))}this.storage.cached=null}_processResize(t,e){const{el:s,storage:o,options:r,options:{proportions:n,processResize:a,withoutScaling:i,minSize:c,allowReversing:l}}=this,{left:h,top:u,cw:d,ch:p,transform:x,revX:f,revY:y,doW:b,doH:g}=o,{matrix:m,scMatrix:v,trMatrix:_,scaleX:w,scaleY:M}=x;let{width:E,height:j}=s.getBBox();if(a){const s=a(t,e,f,y);t+=s&&s.x?s.x:0,e+=s&&s.y?s.y:0}let S=b||!b&&!g?(d+t)/d:(p+e)/p;if(E=n?d*S:d+t,j=n?p*S:p+e,Math.abs(E)<=c||Math.abs(j)<=c)return;if((i||l)&&E<=0)return;if((i||l)&&j<=0)return;const k=E/d,V=j/p;if(v.a=k,v.b=0,v.c=0,v.d=V,v.e=0,v.f=0,_.e=w,_.f=M,i){const s=t<0?Math.abs(t):-Math.abs(t),o=e<0?Math.abs(e):-Math.abs(e);v.a=1,v.b=0,v.c=0,v.d=1,v.e=f?s:0,v.f=y?o:0}const T=_.multiply(v).multiply(_.inverse()),A=m.multiply(T);s.setAttribute("transform",G(A)),i&&(s.setAttribute("width",E),s.setAttribute("height",j));const z=h-(E-d)*(g?.5:f?1:0),C=u-(j-p)*(b?.5:y?1:0);this.storage.cached={scaleX:k,scaleY:V};const X={x:z,y:C,width:E,height:j};return ut(o,r,{...X,boxMatrix:null}),X}_processMove(t,e){const{transform:s,wrapper:o,center:r}=this.storage,{options:{processMove:n,minStartDistance:a}}=this,{matrix:i,trMatrix:c,scMatrix:l,wrapperMatrix:h,parentMatrix:d}=s;!this.storage.outOfSnap&&a&&Math.abs(t)<a&&Math.abs(e)<a?(t=0,e=0):this.storage.outOfSnap=!0,l.e=t,l.f=e;const p=l.multiply(h);o.setAttribute("transform",G(p)),d.e=d.f=0;const{x:x,y:f}=U(d.inverse(),t,e);c.e=x,c.f=f;let y=n&&n(x,f);if(y){const t=u(y.x||0,y.y||0,0,0,y.rotation||0);p.e+=t.x,p.f+=t.y,o.setAttribute("transform",G(p)),c.e+=y.x||0,c.f+=y.y||0}const b=c.multiply(i);if(this.el.setAttribute("transform",G(b)),this.storage.cached={dx:x,dy:f,ox:t,oy:e},r.isShifted){const s=h.inverse();s.e=s.f=0;const{x:o,y:r}=U(s,t,e);this._moveCenterHandle(-o,-r)}return b}_processRotate(t){const{center:e,transform:s,wrapper:o}=this.storage,{matrix:r,wrapperMatrix:n,parentMatrix:a,trMatrix:i,scMatrix:c,rotMatrix:l}=s,h=E(Math.cos(t)),u=E(Math.sin(t));i.e=e.x,i.f=e.y,l.a=h,l.b=u,l.c=-u,l.d=h;const d=i.multiply(l).multiply(i.inverse()).multiply(n);o.setAttribute("transform",G(d)),c.e=e.el_x,c.f=e.el_y,a.e=a.f=0;const p=a.inverse().multiply(l).multiply(a),x=c.multiply(p).multiply(c.inverse()).multiply(r);return this.el.setAttribute("transform",G(x)),x}_getState({revX:t,revY:e,doW:s,doH:o}){const{el:r,storage:n,options:{container:a}}=this,{box:c,wrapper:l,parent:h,handles:{center:u}}=n,d=r.getBBox(),{x:p,y:x,width:f,height:y}=d,{width:b,height:g,x:m,y:v}=c.getBBox(),_=I(r,h),w=I(r,a),M=I(c.parentNode,a),j=I(h,a),S=p+f*(o?.5:t?1:0),k=x+y*(s?.5:e?1:0),V={matrix:_,ctm:w,boxCTM:M,parentMatrix:j,wrapperMatrix:I(l,l.parentNode),trMatrix:q(),scMatrix:q(),rotMatrix:q(),scaleX:S,scaleY:k,scX:Math.sqrt(w.a*w.a+w.b*w.b),scY:Math.sqrt(w.c*w.c+w.d*w.d),bBox:d},T=m+b/2,A=v+g/2,z=u?u.cx.baseVal.value:T,C=u?u.cy.baseVal.value:A,{x:X,y:Y}=U(M,z,C),{x:D,y:N}=i(u)?U(j.inverse(),X,Y):U(_,p+f/2,x+y/2),{x:R,y:O}=U(I(c,a),T,A);return W(r).forEach(t=>{t.__ctm__=I(t,a)}),{transform:V,cw:b,ch:g,center:{x:u?X:R,y:u?Y:O,el_x:D,el_y:N,hx:u?u.cx.baseVal.value:null,hy:u?u.cy.baseVal.value:null,isShifted:E(R,3)!==E(X,3)&&E(O,3)!==E(Y,3)},left:m,top:v,revX:t,revY:e,doW:s,doH:o}}_moveCenterHandle(t,e){const{handles:{center:s,radius:o},center:{hx:r,hy:n}}=this.storage;if(c(s))return;const a=r+t,i=n+e;s.cx.baseVal.value=a,s.cy.baseVal.value=i,o.x2.baseVal.value=a,o.y2.baseVal.value=i}resetCenterPoint(){const{box:t,handles:{center:e,radius:s}}=this.storage,{width:o,height:r,x:n,y:a}=t.getBBox(),i=I(t,t.parentNode),{x:c,y:l}=U(i,n+o/2,a+r/2);e.cx.baseVal.value=c,e.cy.baseVal.value=l,e.isShifted=!1,s.x2.baseVal.value=c,s.y2.baseVal.value=l}fitControlsToSize(){const{el:t,storage:{box:e,wrapper:s},options:{container:o}}=this,{width:r,height:n,x:a,y:i}=t.getBBox();this.storage.ch=n;const c=I(t,o);s.removeAttribute("transform"),e.setAttribute("transform",G(c)),ut(this.storage,this.options,{x:a,y:i,width:r,height:n,boxMatrix:c})}get controls(){return this.storage.wrapper}}const lt=(t,{x:e,y:s})=>{const o=[];switch(t.tagName.toLowerCase()){case"text":{const r=i(t.x.baseVal[0])?t.x.baseVal[0].value+e:(Number(t.getAttribute("x"))||0)+e,n=i(t.y.baseVal[0])?t.y.baseVal[0].value+s:(Number(t.getAttribute("y"))||0)+s;o.push(["x",r],["y",n]);break}case"use":case"image":case"rect":{const r=i(t.x.baseVal.value)?t.x.baseVal.value+e:(Number(t.getAttribute("x"))||0)+e,n=i(t.y.baseVal.value)?t.y.baseVal.value+s:(Number(t.getAttribute("y"))||0)+s;o.push(["x",r],["y",n]);break}case"circle":case"ellipse":{const r=t.cx.baseVal.value+e,n=t.cy.baseVal.value+s;o.push(["cx",r],["cy",n]);break}case"line":{const r=t.x1.baseVal.value+e,n=t.y1.baseVal.value+s,a=t.x2.baseVal.value+e,i=t.y2.baseVal.value+s;o.push(["x1",r],["y1",n],["x2",a],["y2",i]);break}case"polygon":case"polyline":{const r=et(t.getAttribute("points")).map(t=>(t[0]=Number(t[0])+e,t[1]=Number(t[1])+s,t.join(" "))).join(" ");o.push(["points",r]);break}case"path":{const r=t.getAttribute("d");o.push(["d",nt({path:r,dx:e,dy:s})]);break}}o.forEach(e=>{t.setAttribute(e[0],e[1])})},ht=(t,e)=>{const{scaleX:s,scaleY:o,bBox:r,defaultCTM:n,container:a,withoutScaling:c}=e,{width:l,height:h}=r,u=[],d=I(t,a),p=n.inverse().multiply(d);switch(t.tagName.toLowerCase()){case"text":{const e=i(t.x.baseVal[0])?t.x.baseVal[0].value:Number(t.getAttribute("x"))||0,r=i(t.y.baseVal[0])?t.y.baseVal[0].value:Number(t.getAttribute("y"))||0,{x:n,y:a}=U(p,e,r);u.push(["x",n+(s<0?l:0)],["y",a+(o<0?h:0)]);break}case"circle":{const e=t.r.baseVal.value,r=t.cx.baseVal.value,n=t.cy.baseVal.value,a=e*(Math.abs(s)+Math.abs(o))/2,{x:i,y:c}=U(p,r,n);u.push(["r",a],["cx",i],["cy",c]);break}case"image":case"foreignobject":case"rect":{const e=t.width.baseVal.value,r=t.height.baseVal.value,n=t.x.baseVal.value,a=t.y.baseVal.value,{x:i,y:l}=U(p,n,a),h=Math.abs(e*s),d=Math.abs(r*o);u.push(["x",i-(s<0?h:0)],["y",l-(o<0?d:0)]),c||(t.dataset.scale=s,u.push(["width",h],["height",d]));break}case"ellipse":{const e=t.rx.baseVal.value,r=t.ry.baseVal.value,n=t.cx.baseVal.value,a=t.cy.baseVal.value,{x:i,y:c}=U(p,n,a),l=q();l.a=s,l.d=o;const{x:h,y:d}=U(l,e,r);u.push(["rx",Math.abs(h)],["ry",Math.abs(d)],["cx",i],["cy",c]);break}case"line":{const e=t.x1.baseVal.value,s=t.y1.baseVal.value,o=t.x2.baseVal.value,r=t.y2.baseVal.value,{x:n,y:a}=U(p,e,s),{x:i,y:c}=U(p,o,r);u.push(["x1",n],["y1",a],["x2",i],["y2",c]);break}case"polygon":case"polyline":{const e=et(t.getAttribute("points")).map(t=>{const{x:e,y:s}=U(p,Number(t[0]),Number(t[1]));return t[0]=e,t[1]=s,t.join(" ")}).join(" ");u.push(["points",e]);break}case"path":{const e=t.getAttribute("d");u.push(["d",at({path:e,localCTM:p})]);break}}u.forEach(([e,s])=>{t.setAttribute(e,s)})},ut=(t,e,s)=>{const{rotatable:o,rotatorAnchor:r,rotatorOffset:n}=e,{box:a,handles:l,center:h}=t;let{x:u,y:d,width:p,height:x,boxMatrix:f}=s;const y=p/2,b=x/2,g=null!==f?f:I(a,a.parentNode),m=U(g,u+y,d+b),v={tl:U(g,u,d),tr:U(g,u+p,d),br:U(g,u+p,d+x),bl:U(g,u,d+x),tc:U(g,u+y,d),bc:U(g,u+y,d+x),ml:U(g,u,d+b),mr:U(g,u+p,d+b),center:i(l.center)&&!h.isShifted?m:void 0};if(o){const t={};let e=1;switch(r){case"n":t.x=v.tc.x,t.y=v.tc.y;break;case"s":t.x=v.bc.x,t.y=v.bc.y,e=-1;break;case"w":t.x=v.ml.x,t.y=v.ml.y,e=-1;break;case"e":default:t.x=v.mr.x,t.y=v.mr.y}const s="n"===r||"s"===r?Math.atan2(v.bl.y-v.tl.y,v.bl.x-v.tl.x):Math.atan2(v.tl.y-v.tr.y,v.tl.x-v.tr.x),o={x:t.x-n*e*Math.cos(s),y:t.y-n*e*Math.sin(s)},{normal:a,radius:c}=l;i(a)&&(a.x1.baseVal.value=t.x,a.y1.baseVal.value=t.y,a.x2.baseVal.value=o.x,a.y2.baseVal.value=o.y),i(c)&&(c.x1.baseVal.value=m.x,c.y1.baseVal.value=m.y,h.isShifted||(c.x2.baseVal.value=m.x,c.y2.baseVal.value=m.y)),v.rotator=o}const _={x:u+=p<0?p:0,y:d+=x<0?x:0,width:Math.abs(p),height:Math.abs(x)};Object.keys(_).forEach(t=>{a.setAttribute(t,_[t])}),Object.keys(v).forEach(t=>{const e=l[t],s=v[t];c(s)||c(e)||("g"===e.tagName||"path"===e.tagName?e.instance&&"path"===e.tagName?e.instance.transform({x:s.x,y:s.y}):e.setAttribute("transform",`matrix(1, 0, 0, 1, ${s.x}, ${s.y})`):(e.setAttribute("cx",s.x),e.setAttribute("cy",s.y)))})},dt=(t,e,s,o)=>{const r=H("circle");V(r,`sjx-svg-hdl-${o}`);const n={cx:t,cy:e,r:5.5,fill:s,stroke:"#fff","fill-opacity":1,"vector-effect":"non-scaling-stroke","stroke-width":1};return Object.keys(n).map(t=>{r.setAttribute(t,n[t])}),r},pt=(t,e)=>{t.setAttribute("stroke",e),t.setAttribute("stroke-dasharray","3 3"),t.setAttribute("vector-effect","non-scaling-stroke")};function xt(t,e){if(this.length){const s=i(e)&&e instanceof f?e:new f;return n.call(this,(e,o)=>(o instanceof SVGElement?Z(o)&&e.push(new ct(o,t,s)):e.push(new P(o,t,s)),e),[])}}class ft extends g{constructor(t,e){super(t),this.enable(e)}_init(){const{el:t,options:e}=this,s=x(t),{style:o,appendTo:r}=e,n={position:"absolute","z-index":"2147483647",...o};this.storage={css:n,parent:i(r)?x(r)[0]:document.body},s.on("mousedown",this._onMouseDown).on("touchstart",this._onTouchStart),v.slice(0,3).forEach(t=>{this.eventDispatcher.registerEvent(t)})}_processOptions(t){let e={},s=null,o=document,r=()=>{},n=()=>{},a=()=>{},c=()=>{};if(i(t)){const{style:o,appendTo:u,stack:d,onInit:p,onMove:f,onDrop:y,onDestroy:b}=t;e=i(o)&&"object"==typeof o?o:e,s=u||null;const g=i(d)?x(d)[0]:document;r=h(p),n=h(f),a=l(y)?function(t){const{clone:e}=this.storage;A(e,g)&&y.call(this,t,this.el,e)}:()=>{},c=h(b)}this.options={style:e,appendTo:s,stack:o},this.proxyMethods={onInit:r,onDrop:a,onMove:n,onDestroy:c}}_start({clientX:t,clientY:e}){const{storage:s,el:o}=this,{parent:r,css:n}=s,{left:a,top:i}=j(r);n.left=`${t-a}px`,n.top=`${e-i}px`;const c=o.cloneNode(!0);x(c).css(n),s.clientX=t,s.clientY=e,s.cx=t,s.cy=e,s.clone=c,x(r)[0].appendChild(c),this._draw()}_moving({clientX:t,clientY:e}){const{storage:s}=this;s.clientX=t,s.clientY=e,s.doDraw=!0,s.doMove=!0}_end(t){const{storage:s}=this,{clone:o,frameId:r}=s;s.doDraw=!1,e(r),c(o)||(this.proxyMethods.onDrop.call(this,t),o.parentNode.removeChild(o),delete s.clone)}_animate(){const{storage:e}=this;e.frameId=t(this._animate);const{doDraw:s,clientX:o,clientY:r,cx:n,cy:a}=e;s&&(e.doDraw=!1,this._drag({dx:o-n,dy:r-a}))}_processMove(t,e){const{clone:s}=this.storage,o=`translate(${t}px, ${e}px)`;x(s).css({transform:o,webkitTranform:o,mozTransform:o,msTransform:o,otransform:o})}_destroy(){const{storage:t,proxyMethods:e,el:s}=this;c(t)||(x(s).off("mousedown",this._onMouseDown).off("touchstart",this._onTouchStart),e.onDestroy.call(this,s),delete this.storage)}disable(){this._destroy()}}function yt(t){if(this.length)return r.call(this,e=>new ft(e,t))}class bt extends d{drag(){return xt.call(this,...arguments)}clone(){return yt.call(this,...arguments)}}function gt(t){return new bt(t)}Object.defineProperty(gt,"createObservable",{value:()=>new f}),Object.defineProperty(gt,"Subjx",{value:bt}),Object.defineProperty(gt,"Observable",{value:f});export default gt;
