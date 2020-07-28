/*@license
* Drag/Rotate/Resize Library
* Released under the MIT license, 2018-2020
* Karen Sarksyan
* nichollascarter@gmail.com
*/
const t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return setTimeout(t,1e3/60)},e=window.cancelAnimationFrame||window.mozCancelAnimationFrame||function(t){clearTimeout(t)},{forEach:s,slice:o,map:r,reduce:n}=Array.prototype,{warn:a}=console,i=t=>null!=t,c=t=>null==t,l=t=>"function"==typeof t,h=t=>l(t)?function(){t.call(this,...arguments)}:()=>{};class u{constructor(t){if("string"==typeof t){const e=document.querySelectorAll(t);this.length=e.length;for(let t=0;t<this.length;t++)this[t]=e[t]}else if("object"!=typeof t||1!==t.nodeType&&t!==document)if(t instanceof u){this.length=t.length;for(let e=0;e<this.length;e++)this[e]=t[e]}else{if(!i(e=t)||"object"!=typeof e||!(Array.isArray(e)||i(window.Symbol)&&"function"==typeof e[window.Symbol.iterator]||i(e.forEach)||"number"==typeof e.length&&(0===e.length||e.length>0&&e.length-1 in e)))throw new Error("Passed parameter must be selector/element/elementArray");this.length=0;for(let e=0;e<this.length;e++)1===t.nodeType&&(this[e]=t[e],this.length++)}else this[0]=t,this.length=1;var e}css(t){const e={setStyle(t){return((t,e)=>{let s=t.length;for(;s--;)for(const o in e)t[s].style[o]=e[o];return t.style})(this,t)},getStyle(){return(e=>{let s=e.length;for(;s--;)return e[s].currentStyle?e[s].currentStyle[t]:document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(e[s],"")[t]:e[s].style[t]})(this)}};return"string"==typeof t?e.getStyle.apply(this,o.call(arguments,1)):"object"!=typeof t&&t?(a(`Method ${t} does not exist`),!1):e.setStyle.apply(this,arguments)}on(){let t=this.length;for(;t--;)this[t].events||(this[t].events={},this[t].events[arguments[0]]=[]),"string"!=typeof arguments[1]?document.addEventListener?this[t].addEventListener(arguments[0],arguments[1],arguments[2]||{passive:!1}):document.attachEvent?this[t].attachEvent(`on${arguments[0]}`,arguments[1]):this[t][`on${arguments[0]}`]=arguments[1]:d(this[t],arguments[0],arguments[1],arguments[2],arguments[3],!0);return this}off(){let t=this.length;for(;t--;)this[t].events||(this[t].events={},this[t].events[arguments[0]]=[]),"string"!=typeof arguments[1]?document.removeEventListener?this[t].removeEventListener(arguments[0],arguments[1],arguments[2]):document.detachEvent?this[t].detachEvent(`on${arguments[0]}`,arguments[1]):this[t][`on${arguments[0]}`]=null:d(this[t],arguments[0],arguments[1],arguments[2],arguments[3],!1);return this}is(t){if(c(t))return!1;const e=p(t);let s=this.length;for(;s--;)if(this[s]===e[s])return!0;return!1}}function d(t,e,s,o,r,n){const a=function(t){let e=t.target;for(;e&&e!==this;)e.matches(s)&&o.call(e,t),e=e.parentNode};!0===n?document.addEventListener?t.addEventListener(e,a,r||{passive:!1}):document.attachEvent?t.attachEvent(`on${e}`,a):t[`on${e}`]=a:document.removeEventListener?t.removeEventListener(e,a,r||{passive:!1}):document.detachEvent?t.detachEvent(`on${e}`,a):t[`on${e}`]=null}function p(t){return new u(t)}class x{constructor(){this.observers={}}subscribe(t,e){const s=this.observers;return c(s[t])&&Object.defineProperty(s,t,{value:[]}),s[t].push(e),this}unsubscribe(t,e){const s=this.observers;if(i(s[t])){const o=s[t].indexOf(e);s[t].splice(o,1)}return this}notify(t,e,s){c(this.observers[t])||this.observers[t].forEach(o=>{if(e!==o)switch(t){case"onmove":o.notifyMove(s);break;case"onrotate":o.notifyRotate(s);break;case"onresize":o.notifyResize(s);break;case"onapply":o.notifyApply(s);break;case"ongetstate":o.notifyGetState(s)}})}}class b{constructor(t){this.name=t,this.callbacks=[]}registerCallback(t){this.callbacks.push(t)}removeCallback(t){const e=this.callbacks(t);this.callbacks.splice(e,1)}}class f{constructor(){this.events={}}registerEvent(t){this.events[t]=new b(t)}emit(t,e,s){this.events[e].callbacks.forEach(e=>{e.call(t,s)})}addEventListener(t,e){this.events[t].registerCallback(e)}removeEventListener(t,e){this.events[t].removeCallback(e)}}class y{constructor(t){this.el=t,this.storage=null,this.proxyMethods=null,this.eventDispatcher=new f,this._onMouseDown=this._onMouseDown.bind(this),this._onTouchStart=this._onTouchStart.bind(this),this._onMouseMove=this._onMouseMove.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onMouseUp=this._onMouseUp.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),this._animate=this._animate.bind(this)}enable(t){this._processOptions(t),this._init(this.el),this.proxyMethods.onInit.call(this,this.el)}disable(){g()}_init(){g()}_destroy(){g()}_processOptions(){g()}_start(){g()}_moving(){g()}_end(){g()}_animate(){g()}_drag({dx:t,dy:e,...s}){const o={dx:t,dy:e,transform:this._processMove(t,e),...s};this.proxyMethods.onMove.call(this,o),this._emitEvent("drag",o)}_draw(){this._animate()}_onMouseDown(t){this._start(t),p(document).on("mousemove",this._onMouseMove).on("mouseup",this._onMouseUp)}_onTouchStart(t){this._start(t.touches[0]),p(document).on("touchmove",this._onTouchMove).on("touchend",this._onTouchEnd)}_onMouseMove(t){t.preventDefault&&t.preventDefault(),this._moving(t,this.el)}_onTouchMove(t){t.preventDefault&&t.preventDefault(),this._moving(t.touches[0],this.el)}_onMouseUp(t){p(document).off("mousemove",this._onMouseMove).off("mouseup",this._onMouseUp),this._end(t,this.el)}_onTouchEnd(t){p(document).off("touchmove",this._onTouchMove).off("touchend",this._onTouchEnd),0===t.touches.length&&this._end(t.changedTouches[0],this.el)}_emitEvent(){this.eventDispatcher.emit(this,...arguments)}on(t,e){return this.eventDispatcher.addEventListener(t,e),this}off(t,e){return this.eventDispatcher.removeEventListener(t,e),this}}const g=()=>{throw Error("Method not implemented")},m=["dragStart","drag","dragEnd","resizeStart","resize","resizeEnd","rotateStart","rotate","rotateEnd","setPointStart","setPointEnd"],v=Math.PI/180,_=(t,e)=>{if(0===e)return t;{const s=M(t,e);if(s-t<e)return s}},M=(t,e)=>0===e?t:Math.round(t/e)*e,w=(t,e=6)=>Number(t.toFixed(e)),E=t=>t.getBoundingClientRect(),j=t=>{return t.css("-webkit-transform")||t.css("-moz-transform")||t.css("-ms-transform")||t.css("-o-transform")||t.css("transform")||"none"},S=t=>{const e=t.match(/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g);return e?e.map(t=>parseFloat(t)):[1,0,0,1,0,0]},k=(t,e)=>{if(e){if(t.classList){if(!(e.indexOf(" ")>-1))return t.classList.add(e);e.split(/\s+/).forEach(e=>t.classList.add(e))}return t}},V=(t,e)=>{if(e){if(t.classList){if(!(e.indexOf(" ")>-1))return t.classList.remove(e);e.split(/\s+/).forEach(e=>t.classList.remove(e))}return t}},T=(t,e)=>{const{top:s,left:o}=E(t),{top:r,left:n}=E(e),a=p(t),i=p(e);return!(s<r||s+parseFloat(a.css("height"))>r+parseFloat(i.css("height"))||o<n||o+parseFloat(a.css("width"))>n+parseFloat(i.css("width")))},A=t=>{const e=`matrix(${t.join()})`;return{transform:e,webkitTranform:e,mozTransform:e,msTransform:e,otransform:e}};class z extends y{constructor(t,e,s){if(super(t),this.constructor===z)throw new TypeError("Cannot construct Transformable instances directly");this.observable=s,m.forEach(t=>{this.eventDispatcher.registerEvent(t)}),this.enable(e)}_cursorPoint(){throw Error("'_cursorPoint()' method not implemented")}_rotate({radians:t,...e}){const s={transform:this._processRotate(t),delta:t,...e};this.proxyMethods.onRotate.call(this,s),this._emitEvent("rotate",s)}_resize({dx:t,dy:e,...s}){const o={...this._processResize(t,e),dx:t,dy:e,...s};this.proxyMethods.onResize.call(this,o),this._emitEvent("resize",o)}_processOptions(t){const{el:e}=this;k(e,"sjx-drag");const s={x:10,y:10,angle:10*v},o={move:!1,resize:!1,rotate:!1};let r=null,n=!1,a="xy",l=!1,u=5,d=!0,x=!1,b=!1,f="auto",y="auto",g="auto",m=!1,_=!0,M=!0,w=!0,E=null,j=50,S=!0,V=null,T=()=>{},A=()=>{},z=()=>{},C=()=>{},X=()=>{},Y=()=>{},D=e.parentNode;if(i(t)){const{snap:k,each:N,axis:R,cursorMove:O,cursorResize:$,cursorRotate:P,rotationPoint:L,restrict:B,draggable:F,resizable:H,rotatable:W,onInit:q,onDrop:I,onMove:G,onResize:U,onRotate:Q,onDestroy:Z,container:J,proportions:K,custom:tt,rotatorAnchor:et,rotatorOffset:st,showNormal:ot,withoutScaling:rt,minSize:nt,allowReversing:at,minStartDistance:it,processMove:ct}=t;if(i(k)){const{x:t,y:e,angle:o}=k;s.x=c(t)?10:t,s.y=c(e)?10:e,s.angle=c(o)?s.angle:o*v}if(i(N)){const{move:t,resize:e,rotate:s}=N;o.move=t||!1,o.resize=e||!1,o.rotate=s||!1}i(B)&&(r="parent"===B?e.parentNode:p(B)[0]||document),f=O||"auto",y=$||"auto",g=P||"auto",a=R||"xy",D=i(J)&&p(J)[0]?p(J)[0]:D,m=L||!1,n=K||!1,l=rt||!1,u=nt||5,d=at||!0,b=it||!1,x=ct||!1,_=!i(F)||F,M=!i(H)||H,w=!i(W)||W,V="object"==typeof tt&&tt||null,E=et||null,j=st||50,S=!i(ot)||ot,T=h(q),X=h(I),A=h(G),C=h(U),z=h(Q),Y=h(Z)}this.options={axis:a,cursorMove:f,cursorRotate:g,cursorResize:y,rotationPoint:m,restrict:r,container:D,snap:s,each:o,proportions:n,draggable:_,resizable:M,rotatable:w,custom:V,rotatorAnchor:E,rotatorOffset:j,showNormal:S,withoutScaling:l,minSize:u,allowReversing:d,minStartDistance:b,processMove:x},this.proxyMethods={onInit:T,onDrop:X,onMove:A,onResize:C,onRotate:z,onDestroy:Y},this.subscribe(o)}_animate(){const e=this,{observable:s,storage:o,options:r}=e;if(c(o))return;if(o.frame=t(e._animate),!o.doDraw)return;o.doDraw=!1;let{dox:n,doy:a,clientX:l,clientY:h,doDrag:u,doResize:d,doRotate:p,doSetCenter:x,revX:b,revY:f}=o;const{snap:y,each:{move:g,resize:m,rotate:v},restrict:M,draggable:w,resizable:E,rotatable:j,minStartDistance:S}=r;if(d&&E){const{transform:t,cx:r,cy:i}=o,{x:c,y:u}=this._pointToElement({x:l,y:h});let d=n?_(c-r,y.x/t.scX):0,p=a?_(u-i,y.y/t.scY):0;const x={dx:d=n?b?-d:d:0,dy:p=a?f?-p:p:0,clientX:l,clientY:h};e._resize(x),m&&s.notify("onresize",e,x)}if(u&&w){const{restrictOffset:t,elementOffset:r,nx:c,ny:u}=o;if(i(M)){const{left:e,top:s}=t,{left:o,top:n,width:a,height:i}=r,d=c-l,p=u-h,x=M.clientWidth-a,b=M.clientHeight-i,f=n-s,y=o-e;f-p<0&&(h=u-n+s),y-d<0&&(l=c-o+e),f-p>b&&(h=b+(u-n+s)),y-d>x&&(l=x+(c-o+e))}let d=n?_(l-c,y.x):0,p=a?_(h-u,y.y):0;S&&Math.abs(l-c)<S&&Math.abs(h-u)<S&&!o.outOfSnap?(d=0,p=0):o.outOfSnap=!0;const x={dx:d,dy:p,clientX:l,clientY:h};e._drag(x),g&&s.notify("onmove",e,x)}if(p&&j){const{pressang:t,center:r}=o,n=Math.atan2(h-r.y,l-r.x)-t,a={clientX:l,clientY:h};e._rotate({radians:_(n,y.angle),...a}),v&&s.notify("onrotate",e,{radians:n,...a})}if(x&&j){const{bx:t,by:s}=o,{x:r,y:n}=this._pointToControls({x:l,y:h});e._moveCenterHandle(r-t,n-s)}}_start(t){const{observable:e,storage:s,options:{axis:o,restrict:r,each:n},el:a}=this,c=this._compute(t);Object.keys(c).forEach(t=>{s[t]=c[t]});const{onRightEdge:l,onBottomEdge:h,onTopEdge:u,onLeftEdge:d,handle:p,factor:x,revX:b,revY:f,doW:y,doH:g}=c,m=l||h||u||d,{handles:v}=s,{rotator:_,center:M,radius:w}=v;i(w)&&V(w,"sjx-hidden");const j=p.is(_)||_&&p.is(_.firstElementChild),S=!!i(M)&&p.is(M),k=!(j||m||S),{clientX:T,clientY:A}=t,{x:z,y:C}=this._cursorPoint({clientX:T,clientY:A}),{x:X,y:Y}=this._pointToElement({x:z,y:C}),{x:D,y:N}=this._pointToControls({x:z,y:C}),R={clientX:T,clientY:A,nx:z,ny:C,cx:X,cy:Y,bx:D,by:N,doResize:m,doDrag:k,doRotate:j,doSetCenter:S,onExecution:!0,cursor:null,elementOffset:E(a),restrictOffset:i(r)?E(r):null,dox:/\x/.test(o)&&(!m||(p.is(v.ml)||p.is(v.mr)||p.is(v.tl)||p.is(v.tr)||p.is(v.bl)||p.is(v.br))),doy:/\y/.test(o)&&(!m||(p.is(v.br)||p.is(v.bl)||p.is(v.bc)||p.is(v.tr)||p.is(v.tl)||p.is(v.tc)))};this.storage={...s,...R};const O={clientX:T,clientY:A};m?this._emitEvent("resizeStart",O):j?this._emitEvent("rotateStart",O):k&&this._emitEvent("dragStart",O);const{move:$,resize:P,rotate:L}=n,B=m?"resize":j?"rotate":"drag",F=m&&P||j&&L||k&&$;e.notify("ongetstate",this,{clientX:T,clientY:A,actionName:B,triggerEvent:F,factor:x,revX:b,revY:f,doW:y,doH:g}),this._draw()}_moving(t){const{storage:e,options:s}=this,{x:o,y:r}=this._cursorPoint(t);e.e=t,e.clientX=o,e.clientY=r,e.doDraw=!0;let{doRotate:n,doDrag:a,doResize:i,cursor:l}=e;const{cursorMove:h,cursorResize:u,cursorRotate:d}=s;c(l)&&(a?l=h:n?l=d:i&&(l=u),p(document.body).css({cursor:l}))}_end({clientX:t,clientY:s}){const{options:{each:o},observable:r,storage:n,proxyMethods:a}=this,{doResize:c,doDrag:l,doRotate:h,frame:u,handles:{radius:d}}=n,x=c?"resize":l?"drag":"rotate";n.doResize=!1,n.doDrag=!1,n.doRotate=!1,n.doSetCenter=!1,n.doDraw=!1,n.onExecution=!1,n.cursor=null,this._apply(x);const b={clientX:t,clientY:s};a.onDrop.call(this,b),c?this._emitEvent("resizeEnd",b):h?this._emitEvent("rotateEnd",b):l&&this._emitEvent("dragEnd",b),n.outOfSnap=!1;const{move:f,resize:y,rotate:g}=o,m=c&&y||h&&g||l&&f;r.notify("onapply",this,{clientX:t,clientY:s,actionName:x,triggerEvent:m}),e(u),p(document.body).css({cursor:"auto"}),i(d)&&k(d,"sjx-hidden")}_compute(t){const{handles:e}=this.storage,s=p(t.target),{revX:o,revY:r,doW:n,doH:a,...i}=this._checkHandles(s,e),c=this._getState({revX:o,revY:r,doW:n,doH:a}),{x:l,y:h}=this._cursorPoint(t),u=Math.atan2(h-c.center.y,l-c.center.x);return{...c,...i,handle:s,pressang:u}}_checkHandles(t,e){const{tl:s,tc:o,tr:r,bl:n,br:a,bc:c,ml:l,mr:h}=e,u=!!i(s)&&t.is(s),d=!!i(o)&&t.is(o),p=!!i(r)&&t.is(r),x=!!i(n)&&t.is(n),b=!!i(c)&&t.is(c),f=!!i(a)&&t.is(a),y=!!i(l)&&t.is(l),g=!!i(h)&&t.is(h);return{revX:u||y||x||d,revY:u||p||d||y,onTopEdge:d||p||u,onLeftEdge:u||y||x,onRightEdge:p||g||f,onBottomEdge:f||b||x,doW:y||g,doH:d||b}}notifyMove(){this._drag(...arguments)}notifyRotate({radians:t,...e}){const{snap:{angle:s}}=this.options;this._rotate({radians:_(t,s),...e})}notifyResize(){this._resize(...arguments)}notifyApply({clientX:t,clientY:e,actionName:s,triggerEvent:o}){this.proxyMethods.onDrop.call(this,{clientX:t,clientY:e}),o&&(this._apply(s),this._emitEvent(`${s}End`,{clientX:t,clientY:e}))}notifyGetState({clientX:t,clientY:e,actionName:s,triggerEvent:o,...r}){if(o){const o=this._getState(r);this.storage={...this.storage,...o},this._emitEvent(`${s}Start`,{clientX:t,clientY:e})}}subscribe({resize:t,move:e,rotate:s}){const{observable:o}=this;(e||t||s)&&o.subscribe("ongetstate",this).subscribe("onapply",this),e&&o.subscribe("onmove",this),t&&o.subscribe("onresize",this),s&&o.subscribe("onrotate",this)}unsubscribe(){const{observable:t}=this;t.unsubscribe("ongetstate",this).unsubscribe("onapply",this).unsubscribe("onmove",this).unsubscribe("onresize",this).unsubscribe("onrotate",this)}disable(t,e){const{storage:s,proxyMethods:o,el:r}=this;c(s)||(s.onExecution&&(this._end({clientX:t,clientY:e}),p(document).off("mousemove",this._onMouseMove).off("mouseup",this._onMouseUp).off("touchmove",this._onTouchMove).off("touchend",this._onTouchEnd)),V(r,"sjx-drag"),this._destroy(),this.unsubscribe(),o.onDestroy.call(this,r),delete this.storage)}exeDrag({dx:t,dy:e}){const{draggable:s}=this.options;s&&(this.storage={...this.storage,...this._getState({revX:!1,revY:!1,doW:!1,doH:!1})},this._drag({dx:t,dy:e}),this._apply("drag"))}exeResize({dx:t,dy:e,revX:s,revY:o,doW:r,doH:n}){const{resizable:a}=this.options;a&&(this.storage={...this.storage,...this._getState({revX:s||!1,revY:o||!1,doW:r||!1,doH:n||!1})},this._resize({dx:t,dy:e}),this._apply("resize"))}exeRotate({delta:t}){const{rotatable:e}=this.options;e&&(this.storage={...this.storage,...this._getState({revX:!1,revY:!1,doW:!1,doH:!1})},this._rotate({radians:t}),this._apply("rotate"))}}const C=({x:t,y:e},s)=>{const[o,r,n,a,i,c]=s;return{x:o*t+n*e+i,y:r*t+a*e+c}},X=t=>{const e=[[t[0],t[2],t[4]],[t[1],t[3],t[5]],[0,0,1]];if(e.length!==e[0].length)return;const s=e.length,o=[],r=[];for(let t=0;t<s;t+=1){o[o.length]=[],r[r.length]=[];for(let n=0;n<s;n+=1)o[t][n]=t==n?1:0,r[t][n]=e[t][n]}for(let t=0;t<s;t+=1){let e=r[t][t];if(0===e){for(let n=t+1;n<s;n+=1)if(0!==r[n][t]){for(let a=0;a<s;a++)e=r[t][a],r[t][a]=r[n][a],r[n][a]=e,e=o[t][a],o[t][a]=o[n][a],o[n][a]=e;break}if(0===(e=r[t][t]))return}for(let n=0;n<s;n++)r[t][n]=r[t][n]/e,o[t][n]=o[t][n]/e;for(let n=0;n<s;n++)if(n!=t){e=r[n][t];for(let a=0;a<s;a++)r[n][a]-=e*r[t][a],o[n][a]-=e*o[t][a]}}return[o[0][0],o[1][0],o[0][1],o[1][1],o[0][2],o[1][2]]},Y=([t,e,s,o,r,n],[a,i,c,l,h,u])=>{const d=[[t,s,r],[e,o,n],[0,0,1]],p=[[a,c,h],[i,l,u],[0,0,1]],x=[];for(let t=0;t<p.length;t++){x[t]=[];for(let e=0;e<d[0].length;e++){let s=0;for(let o=0;o<d.length;o++)s+=d[o][e]*p[t][o];x[t].push(s)}}return[x[0][0],x[1][0],x[0][1],x[1][1],x[0][2],x[1][2]]},D=(t,e,s,o,r,n,a,i,c)=>{const l=parseFloat(s)/2,h=parseFloat(o)/2,u=t+l,d=e+h,p=t-u,x=e-d,b=Math.atan2(i?0:x,c?0:p)+r,f=Math.sqrt(Math.pow(c?0:l,2)+Math.pow(i?0:h,2));let y=Math.cos(b),g=Math.sin(b);const m=d+f*(g=!0===a?-g:g);return{left:w(u+f*(y=!0===n?-y:y)),top:w(m)}},N=2,R=7;class O extends z{_init(t){const{rotationPoint:e,container:s,resizable:o,rotatable:r,showNormal:n}=this.options,{left:a,top:l,width:h,height:u}=t.style,d=document.createElement("div");k(d,"sjx-wrapper"),s.appendChild(d);const x=p(t),b=h||x.css("width"),f=u||x.css("height"),y={top:l||x.css("top"),left:a||x.css("left"),width:b,height:f,transform:j(x)},g=document.createElement("div");k(g,"sjx-controls");const m={...r&&{normal:n?["sjx-normal"]:null,rotator:["sjx-hdl","sjx-hdl-m","sjx-rotator"]},...o&&{tl:["sjx-hdl","sjx-hdl-t","sjx-hdl-l","sjx-hdl-tl"],tr:["sjx-hdl","sjx-hdl-t","sjx-hdl-r","sjx-hdl-tr"],br:["sjx-hdl","sjx-hdl-b","sjx-hdl-r","sjx-hdl-br"],bl:["sjx-hdl","sjx-hdl-b","sjx-hdl-l","sjx-hdl-bl"],tc:["sjx-hdl","sjx-hdl-t","sjx-hdl-c","sjx-hdl-tc"],bc:["sjx-hdl","sjx-hdl-b","sjx-hdl-c","sjx-hdl-bc"],ml:["sjx-hdl","sjx-hdl-m","sjx-hdl-l","sjx-hdl-ml"],mr:["sjx-hdl","sjx-hdl-m","sjx-hdl-r","sjx-hdl-mr"]},center:e&&r?["sjx-hdl","sjx-hdl-m","sjx-hdl-c","sjx-hdl-mc"]:void 0};if(Object.keys(m).forEach(t=>{const e=m[t];if(c(e))return;const s=$(e);m[t]=s,g.appendChild(s)}),i(m.center)){p(m.center).css({left:`${t.getAttribute("data-cx")}px`,top:`${t.getAttribute("data-cy")}px`})}d.appendChild(g);const v=p(g);v.css(y),this.storage={controls:g,handles:m,radius:void 0,parent:t.parentNode},v.on("mousedown",this._onMouseDown).on("touchstart",this._onTouchStart)}_destroy(){const{controls:t}=this.storage;p(t).off("mousedown",this._onMouseDown).off("touchstart",this._onTouchStart);const e=t.parentNode;e.parentNode.removeChild(e)}_pointToElement({x:t,y:e}){const{transform:s}=this.storage,o=[...s.matrix];return o[4]=o[5]=0,this._applyMatrixToPoint(X(o),t,e)}_pointToControls(t){return this._pointToElement(t)}_applyMatrixToPoint(t,e,s){return C({x:e,y:s},t)}_cursorPoint({clientX:t,clientY:e}){const{container:s}=this.options,o=S(j(p(s)));return C({x:t,y:e},X(o))}_apply(){const{el:t,storage:e}=this,{controls:s,handles:o}=e,r=p(s),n=parseFloat(r.css("width"))/2,a=parseFloat(r.css("height"))/2,{center:c}=o,l=i(c),h=l?parseFloat(p(c).css("left")):n,u=l?parseFloat(p(c).css("top")):a;t.setAttribute("data-cx",h),t.setAttribute("data-cy",u),this.storage.cached=null}_processResize(t,e){const{el:s,storage:o,options:{proportions:r}}=this,{controls:n,coords:a,cw:i,ch:c,transform:l,refang:h,revX:u,revY:d,doW:x,doH:b}=o,f=x||!x&&!b?(i+t)/i:(c+e)/c,y=r?i*f:i+t,g=r?c*f:c+e;if(y<=N||g<=N)return;const m=[...l.matrix],v=D(m[4],m[5],y,g,h,u,d,x,b),_=a.left-v.left,M=a.top-v.top;m[4]+=_,m[5]+=M;const w=A(m);return w.width=`${y}px`,w.height=`${g}px`,p(n).css(w),p(s).css(w),o.cached={dx:_,dy:M},{width:y,height:g,ox:_,oy:M}}_processMove(t,e){const{el:s,storage:o}=this,{controls:r,transform:{matrix:n,parentMatrix:a}}=o,i=[...a];i[4]=i[5]=0;const c=[...n];c[4]=n[4]+t,c[5]=n[5]+e;const l=A(c);return p(r).css(l),p(s).css(l),o.cached={dx:t,dy:e},c}_processRotate(t){const{el:e,storage:{controls:s,transform:o,center:r}}=this,{matrix:n,parentMatrix:a}=o,i=w(Math.cos(t),4),c=w(Math.sin(t),4),l=[1,0,0,1,r.cx,r.cy],h=[i,c,-c,i,0,0],u=[...a];u[4]=u[5]=0;const d=Y(X(u),Y(h,u)),x=Y(Y(l,d),X(l)),b=Y(x,n),f=A(b);return p(s).css(f),p(e).css(f),b}_getState(t){const{revX:e,revY:s,doW:o,doH:r}=t,n=e!==s?-1:1,{el:a,storage:{handles:c,controls:l,parent:h},options:{container:u}}=this,{center:d}=c,x=p(l),b=S(j(p(u))),f=S(j(p(l))),y=S(j(p(h))),g=Math.atan2(f[1],f[0])*n,m=h!==u?Y(y,b):b,v={matrix:f,parentMatrix:m,scX:Math.sqrt(f[0]*f[0]+f[1]*f[1]),scY:Math.sqrt(f[2]*f[2]+f[3]*f[3])},_=parseFloat(x.css("width")),M=parseFloat(x.css("height")),w=D(f[4],f[5],_,M,g,e,s,o,r),k=_/2,V=M/2,T=E(a),A=i(d),z=A?parseFloat(p(d).css("left")):k,N=A?parseFloat(p(d).css("top")):V,O=A?R:0,{x:$,y:P}=C({x:T.left,y:T.top},X(m));return{transform:v,cw:_,ch:M,coords:w,center:{x:$+z-O,y:P+N-O,cx:-z+k-O,cy:-N+V-O,hx:z,hy:N},factor:n,refang:g,revX:e,revY:s,doW:o,doH:r}}_moveCenterHandle(t,e){const{handles:{center:s},center:{hx:o,hy:r}}=this.storage,n=`${o+t}px`,a=`${r+e}px`;p(s).css({left:n,top:a})}resetCenterPoint(){const{handles:{center:t}}=this.storage;p(t).css({left:null,top:null})}fitControlsToSize(){}get controls(){return this.storage.controls}}const $=t=>{const e=document.createElement("div");return t.forEach(t=>{k(e,t)}),e},P=F("svg").createSVGPoint(),L=/[+-]?\d+(\.\d+)?/g,B=["circle","ellipse","image","line","path","polygon","polyline","rect","text","g","foreignobject"];function F(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}const H=t=>{const e=[];return J(t)?s.call(t.childNodes,t=>{if(1===t.nodeType){const s=t.tagName.toLowerCase();-1!==B.indexOf(s)&&("g"===s&&e.push(...H(t)),e.push(t))}}):e.push(t),e},W=()=>F("svg").createSVGMatrix(),q=(t,e)=>{return(e.getScreenCTM()||W()).inverse().multiply(t.getScreenCTM()||W())},I=t=>{const{a:e,b:s,c:o,d:r,e:n,f:a}=t;return`matrix(${e},${s},${o},${r},${n},${a})`},G=(t,e,s)=>(P.x=e,P.y=s,P.matrixTransform(t)),U=t=>{const e=W();return e.a=t.a,e.b=t.b,e.c=t.c,e.d=t.d,e.e=t.e,e.f=t.f,e},Q=t=>{const e=t.tagName.toLowerCase();return-1!==B.indexOf(e)||(a("Selected element "+e+" is not allowed to transform. Allowed elements:\ncircle, ellipse, image, line, path, polygon, polyline, rect, text, g, foreignObject"),!1)},Z=(t,e,s)=>{if(c(e)||c(s))return null;const o=t.createSVGPoint();return o.x=e,o.y=s,o},J=t=>"g"===t.tagName.toLowerCase(),K=t=>["g","foreignobject","svg"].includes(t.tagName.toLowerCase()),tt=t=>t.match(L).reduce((t,e,s,o)=>(s%2==0&&t.push(o.slice(s,s+2)),t),[]),et=/\s*([achlmqstvz])([^achlmqstvz]*)\s*/gi,st=/\s*,\s*|\s+/g,ot=t=>{let e=et.lastIndex=0;const s=[];for(;e=et.exec(t);){const t=e[1],o=t.toUpperCase(),r=e[2].replace(/([^e])-/g,"$1 -").replace(/ +/g," ");s.push({relative:t!==o,key:o,cmd:t,values:r.trim().split(st).map(t=>{if(!isNaN(t))return Number(t)})})}return s},rt=t=>{const{path:e,dx:s,dy:o}=t;try{const t=ot(e);let r="",n=" ",a=!0;for(let e=0,i=t.length;e<i;e++){const i=t[e],{values:c,key:l,relative:h}=i,u=[];switch(l){case"M":for(let t=0,e=c.length;t<e;t+=2){let[e,r]=c.slice(t,t+2);h&&!a||(e+=s,r+=o),u.push(e,r),a=!1}break;case"A":for(let t=0,e=c.length;t<e;t+=7){const e=c.slice(t,t+7);h||(e[5]+=s,e[6]+=o),u.push(...e)}break;case"C":for(let t=0,e=c.length;t<e;t+=6){const e=c.slice(t,t+6);h||(e[0]+=s,e[1]+=o,e[2]+=s,e[3]+=o,e[4]+=s,e[5]+=o),u.push(...e)}break;case"H":for(let t=0,e=c.length;t<e;t+=1){const e=c.slice(t,t+1);h||(e[0]+=s),u.push(e[0])}break;case"V":for(let t=0,e=c.length;t<e;t+=1){const e=c.slice(t,t+1);h||(e[0]+=o),u.push(e[0])}break;case"L":case"T":for(let t=0,e=c.length;t<e;t+=2){let[e,r]=c.slice(t,t+2);h||(e+=s,r+=o),u.push(e,r)}break;case"Q":case"S":for(let t=0,e=c.length;t<e;t+=4){let[e,r,n,a]=c.slice(t,t+4);h||(e+=s,r+=o,n+=s,a+=o),u.push(e,r,n,a)}break;case"Z":c[0]="",n=""}r+=i.cmd+u.join(",")+n}return r}catch(t){a("Path parsing error: "+t)}},nt=t=>{const{path:e,localCTM:s}=t;try{const t=ot(e);let o="",r=" ";const n=[];let a=!0;for(let e=0,i=t.length;e<i;e++){const i=t[e],{values:c,key:l,relative:h}=i;switch(l){case"A":{const t=[];for(let e=0,o=c.length;e<o;e+=7){const[o,r,n,a,i,l,u]=c.slice(e,e+7),d=U(s);h&&(d.e=d.f=0);const{x:p,y:x}=G(d,l,u);t.push(w(p),w(x)),d.e=d.f=0;const{x:b,y:f}=G(d,o,r);t.unshift(w(b),w(f),n,a,i)}n.push(t);break}case"C":{const t=[];for(let e=0,o=c.length;e<o;e+=6){const[o,r,n,a,i,l]=c.slice(e,e+6),u=U(s);h&&(u.e=u.f=0);const{x:d,y:p}=G(u,o,r),{x:x,y:b}=G(u,n,a),{x:f,y:y}=G(u,i,l);t.push(w(d),w(p),w(x),w(b),w(f),w(y))}n.push(t);break}case"H":{const t=[];for(let e=0,o=c.length;e<o;e+=1){const[o]=c.slice(e,e+1),r=U(s);h&&(r.e=r.f=0);const{x:n}=G(r,o,0);t.push(w(n))}n.push(t);break}case"V":{const t=[];for(let e=0,o=c.length;e<o;e+=1){const[o]=c.slice(e,e+1),r=U(s);h&&(r.e=r.f=0);const{y:n}=G(r,0,o);t.push(w(n))}n.push(t);break}case"T":case"L":{const t=[];for(let e=0,o=c.length;e<o;e+=2){const[o,r]=c.slice(e,e+2),n=U(s);h&&(n.e=n.f=0);const{x:a,y:i}=G(n,o,r);t.push(w(a),w(i))}n.push(t);break}case"M":{const t=[];for(let e=0,o=c.length;e<o;e+=2){const[o,r]=c.slice(e,e+2),n=U(s);h&&!a&&(n.e=n.f=0);const{x:i,y:l}=G(n,o,r);t.push(w(i),w(l)),a=!1}n.push(t);break}case"Q":{const t=[];for(let e=0,o=c.length;e<o;e+=4){const[o,r,n,a]=c.slice(e,e+4),i=U(s);h&&(i.e=i.f=0);const{x:l,y:u}=G(i,o,r),{x:d,y:p}=G(i,n,a);t.push(w(l),w(u),w(d),w(p))}n.push(t);break}case"S":{const t=[];for(let e=0,o=c.length;e<o;e+=4){const[o,r,n,a]=c.slice(e,e+4),i=U(s);h&&(i.e=i.f=0);const{x:l,y:u}=G(i,o,r),{x:d,y:p}=G(i,n,a);t.push(w(l),w(u),w(d),w(p))}n.push(t);break}case"Z":n.push([""]),r=""}o+=i.cmd+n[e].join(",")+r}return o}catch(t){a("Path parsing error: "+t)}},at="#00a8ff";class it extends z{_init(t){const{rotationPoint:e,container:s,resizable:o,rotatable:r,rotatorAnchor:n,rotatorOffset:a,showNormal:h,custom:u}=this.options,d=F("g");k(d,"sjx-svg-wrapper"),k(d,t.nodeName),s.appendChild(d);const{width:x,height:b,x:f,y:y}=t.getBBox(),g=q(t,s),m=F("rect");[["width",x],["height",b],["x",f],["y",y],["fill",at],["fill-opacity",0],["stroke",at],["stroke-dasharray","3 3"],["vector-effect","non-scaling-stroke"],["transform",I(g)]].forEach(([t,e])=>{m.setAttribute(t,e)});const v=F("g"),_=F("g"),M=F("g");k(M,"sjx-svg-box-group"),k(v,"sjx-svg-handles"),k(_,"sjx-svg-normal-group"),M.appendChild(m),d.appendChild(M),d.appendChild(_),d.appendChild(v);const w=m.getBBox(),{x:E,y:j,width:S,height:V}=w,T=t.getAttribute("data-cx"),A=t.getAttribute("data-cy"),z=q(m,m.parentNode),C=G(z,E+S/2,j+V/2),X=G(z,E,j),Y=G(z,E+S,j),D=G(z,E+S,j+V/2),N=G(z,E,j+V/2),R=G(z,E+S/2,j),O=G(z,E+S/2,j+V),$=G(z,E+S,j+V),P=G(z,E,j+V),L={tl:X,tr:Y,br:$,bl:P,tc:R,bc:O,ml:N,mr:D};let B={},H=null;if(r){const t={};let s=1;switch(n){case"n":t.x=R.x,t.y=R.y;break;case"s":t.x=O.x,t.y=O.y,s=-1;break;case"w":t.x=N.x,t.y=N.y,s=-1;break;case"e":default:t.x=D.x,t.y=D.y}const o="n"===n||"s"===n?Math.atan2(P.y-X.y,P.x-X.x):Math.atan2(X.y-Y.y,X.x-Y.x);H={x:t.x-a*s*Math.cos(o),y:t.y-a*s*Math.sin(o)};const r=h?F("line"):null;h&&(r.x1.baseVal.value=t.x,r.y1.baseVal.value=t.y,r.x2.baseVal.value=H.x,r.y2.baseVal.value=H.y,dt(r,at),_.appendChild(r));let i=null;e&&(i=F("line"),k(i,"sjx-hidden"),i.x1.baseVal.value=C.x,i.y1.baseVal.value=C.y,i.x2.baseVal.value=T||C.x,i.y2.baseVal.value=A||C.y,dt(i,"#fe3232"),i.setAttribute("opacity",.5),_.appendChild(i)),B={normal:r,radius:i}}const W={...o&&L,rotator:H,center:e&&r?Z(s,T,A)||C:void 0};Object.keys(W).forEach(t=>{const e=W[t];if(c(e))return;const{x:s,y:o}=e,r="center"===t?"#fe3232":at;i(u)&&l(u[t])?W[t]=u[t](z,w,G):W[t]=ut(s,o,r,t),v.appendChild(W[t])}),this.storage={wrapper:d,box:m,handles:{...W,...B},parent:t.parentNode},p(d).on("mousedown",this._onMouseDown).on("touchstart",this._onTouchStart)}fitTo(t,e){const{options:s,storage:o}=this,{box:r}=o;if(e){const e=parseFloat(r.getAttribute("height"));parseFloat(t.getAttribute("height"))<e&&t.setAttribute("height",e)}r.setAttribute("height",t.getAttribute("height"));const{x:n,y:a}=r.getBBox();ht(o,s,{x:n,y:a,width:parseFloat(r.getAttribute("width")),height:parseFloat(r.getAttribute("height")),boxMatrix:null})}_destroy(){const{wrapper:t}=this.storage;p(t).off("mousedown",this._onMouseDown).off("touchstart",this._onTouchStart),t.parentNode.removeChild(t)}_cursorPoint({clientX:t,clientY:e}){const{container:s}=this.options;return G(s.getScreenCTM().inverse(),t,e)}_pointToElement({x:t,y:e}){const{transform:s}=this.storage,{ctm:o}=s,r=o.inverse();return r.e=r.f=0,this._applyMatrixToPoint(r,t,e)}_pointToControls({x:t,y:e}){const{transform:s}=this.storage,{boxCTM:o}=s,r=o.inverse();return r.e=r.f=0,this._applyMatrixToPoint(r,t,e)}_applyMatrixToPoint(t,e,s){const{container:o}=this.options,r=o.createSVGPoint();return r.x=e,r.y=s,r.matrixTransform(t)}_apply(t){const{el:e,storage:s,options:o,options:{container:r}}=this,{box:n,handles:a,cached:l,transform:h}=s,{matrix:u,boxCTM:d,bBox:p,ctm:x}=h,b=e.getBBox(),{x:f,y:y,width:g,height:m}=b,v=i(a.center)?G(d,a.center.cx.baseVal.value,a.center.cy.baseVal.value):G(u,f+g/2,y+m/2);if(e.setAttribute("data-cx",v.x),e.setAttribute("data-cy",v.y),c(l))return;const{scaleX:_,scaleY:M,dx:w,dy:E}=l;if("drag"===t){if(0===w&&0===E)return;const t=W();t.e=w,t.f=E;const s=t.multiply(u).multiply(t.inverse());K(e)||(e.setAttribute("transform",I(s)),ct(e,{x:w,y:E}))}if("resize"===t){const{x:t,y:a,width:i,height:c}=n.getBBox();ht(s,o,{x:t,y:a,width:i,height:c,boxMatrix:null}),K(e)||(lt(e,{scaleX:_,scaleY:M,defaultCTM:x,bBox:p,container:r,storage:s,withoutScaling:o.withoutScaling}),e.setAttribute("transform",I(u)))}this.storage.cached=null}_processResize(t,e){const{el:s,storage:o,options:r,options:{proportions:n,withoutScaling:a,minSize:i,allowReversing:c}}=this,{left:l,top:h,cw:u,ch:d,transform:p,revX:x,revY:b,doW:f,doH:y}=o,{matrix:g,scMatrix:m,trMatrix:v,scaleX:_,scaleY:M}=p;let{width:w,height:E}=s.getBBox();const j=f||!f&&!y?(u+t)/u:(d+e)/d;if(w=n?u*j:u+t,E=n?d*j:d+e,Math.abs(w)<=i||Math.abs(E)<=i)return;if((a||c)&&w<=0)return;if((a||c)&&E<=0)return;const S=w/u,k=E/d;if(m.a=S,m.b=0,m.c=0,m.d=k,m.e=0,m.f=0,v.e=_,v.f=M,a){const s=t<0?Math.abs(t):-Math.abs(t),o=e<0?Math.abs(e):-Math.abs(e);m.a=1,m.b=0,m.c=0,m.d=1,m.e=x?s:0,m.f=b?o:0}const V=v.multiply(m).multiply(v.inverse()),T=g.multiply(V);s.setAttribute("transform",I(T)),a&&(s.setAttribute("width",w),s.setAttribute("height",E));const A=l-(w-u)*(y?.5:x?1:0),z=h-(E-d)*(f?.5:b?1:0);this.storage.cached={scaleX:S,scaleY:k};const C={x:A,y:z,width:w,height:E};return ht(o,r,{...C,boxMatrix:null}),C}_processMove(t,e){const{transform:s,wrapper:o,center:r}=this.storage,{options:{processMove:n}}=this,{matrix:a,trMatrix:i,scMatrix:c,wrapperMatrix:l,parentMatrix:h}=s,u=n&&n(t,e);c.e=t+(u&&u.x?u.x:0),c.f=e+(u&&u.y?u.y:0);const d=c.multiply(l);o.setAttribute("transform",I(d)),h.e=h.f=0;const{x:p,y:x}=G(h.inverse(),t,e);i.e=p+(u&&u.x?u.x:0),i.f=x+(u&&u.y?u.y:0);const b=i.multiply(a);if(this.el.setAttribute("transform",I(b)),this.storage.cached={dx:p,dy:x,ox:t,oy:e},r.isShifted){const s=l.inverse();s.e=s.f=0;const{x:o,y:r}=G(s,t,e);this._moveCenterHandle(-o,-r)}return b}_processRotate(t){const{center:e,transform:s,wrapper:o}=this.storage,{matrix:r,wrapperMatrix:n,parentMatrix:a,trMatrix:i,scMatrix:c,rotMatrix:l}=s,h=w(Math.cos(t)),u=w(Math.sin(t));i.e=e.x,i.f=e.y,l.a=h,l.b=u,l.c=-u,l.d=h;const d=i.multiply(l).multiply(i.inverse()).multiply(n);o.setAttribute("transform",I(d)),c.e=e.el_x,c.f=e.el_y,a.e=a.f=0;const p=a.inverse().multiply(l).multiply(a),x=c.multiply(p).multiply(c.inverse()).multiply(r);return this.el.setAttribute("transform",I(x)),x}_getState({revX:t,revY:e,doW:s,doH:o}){const{el:r,storage:n,options:{container:a}}=this,{box:c,wrapper:l,parent:h,handles:{center:u}}=n,d=r.getBBox(),{x:p,y:x,width:b,height:f}=d,{width:y,height:g,x:m,y:v}=c.getBBox(),_=q(r,h),M=q(r,a),E=q(c.parentNode,a),j=q(h,a),S=p+b*(o?.5:t?1:0),k=x+f*(s?.5:e?1:0),V={matrix:_,ctm:M,boxCTM:E,parentMatrix:j,wrapperMatrix:q(l,l.parentNode),trMatrix:W(),scMatrix:W(),rotMatrix:W(),scaleX:S,scaleY:k,scX:Math.sqrt(M.a*M.a+M.b*M.b),scY:Math.sqrt(M.c*M.c+M.d*M.d),bBox:d},T=m+y/2,A=v+g/2,z=u?u.cx.baseVal.value:T,C=u?u.cy.baseVal.value:A,{x:X,y:Y}=G(E,z,C),{x:D,y:N}=i(u)?G(j.inverse(),X,Y):G(_,p+b/2,x+f/2),{x:R,y:O}=G(q(c,a),T,A);return H(r).forEach(t=>{t.__ctm__=q(t,a)}),{transform:V,cw:y,ch:g,center:{x:u?X:R,y:u?Y:O,el_x:D,el_y:N,hx:u?u.cx.baseVal.value:null,hy:u?u.cy.baseVal.value:null,isShifted:w(R,3)!==w(X,3)&&w(O,3)!==w(Y,3)},left:m,top:v,revX:t,revY:e,doW:s,doH:o}}_moveCenterHandle(t,e){const{handles:{center:s,radius:o},center:{hx:r,hy:n}}=this.storage;if(c(s))return;const a=r+t,i=n+e;s.cx.baseVal.value=a,s.cy.baseVal.value=i,o.x2.baseVal.value=a,o.y2.baseVal.value=i}resetCenterPoint(){const{box:t,handles:{center:e,radius:s}}=this.storage,{width:o,height:r,x:n,y:a}=t.getBBox(),i=q(t,t.parentNode),{x:c,y:l}=G(i,n+o/2,a+r/2);e.cx.baseVal.value=c,e.cy.baseVal.value=l,e.isShifted=!1,s.x2.baseVal.value=c,s.y2.baseVal.value=l}fitControlsToSize(){const{el:t,storage:{box:e,wrapper:s},options:{container:o}}=this,{width:r,height:n,x:a,y:i}=t.getBBox(),c=q(t,o);s.removeAttribute("transform"),e.setAttribute("transform",I(c)),ht(this.storage,this.options,{x:a,y:i,width:r,height:n,boxMatrix:c})}get controls(){return this.storage.wrapper}}const ct=(t,{x:e,y:s})=>{const o=[];switch(t.tagName.toLowerCase()){case"text":{const r=i(t.x.baseVal[0])?t.x.baseVal[0].value+e:(Number(t.getAttribute("x"))||0)+e,n=i(t.y.baseVal[0])?t.y.baseVal[0].value+s:(Number(t.getAttribute("y"))||0)+s;o.push(["x",r],["y",n]);break}case"use":case"image":case"rect":{const r=i(t.x.baseVal.value)?t.x.baseVal.value+e:(Number(t.getAttribute("x"))||0)+e,n=i(t.y.baseVal.value)?t.y.baseVal.value+s:(Number(t.getAttribute("y"))||0)+s;o.push(["x",r],["y",n]);break}case"circle":case"ellipse":{const r=t.cx.baseVal.value+e,n=t.cy.baseVal.value+s;o.push(["cx",r],["cy",n]);break}case"line":{const r=t.x1.baseVal.value+e,n=t.y1.baseVal.value+s,a=t.x2.baseVal.value+e,i=t.y2.baseVal.value+s;o.push(["x1",r],["y1",n],["x2",a],["y2",i]);break}case"polygon":case"polyline":{const r=tt(t.getAttribute("points")).map(t=>(t[0]=Number(t[0])+e,t[1]=Number(t[1])+s,t.join(" "))).join(" ");o.push(["points",r]);break}case"path":{const r=t.getAttribute("d");o.push(["d",rt({path:r,dx:e,dy:s})]);break}}o.forEach(e=>{t.setAttribute(e[0],e[1])})},lt=(t,e)=>{const{scaleX:s,scaleY:o,bBox:r,defaultCTM:n,container:a,withoutScaling:c}=e,{width:l,height:h}=r,u=[],d=q(t,a),p=n.inverse().multiply(d);switch(t.tagName.toLowerCase()){case"text":{const e=i(t.x.baseVal[0])?t.x.baseVal[0].value:Number(t.getAttribute("x"))||0,r=i(t.y.baseVal[0])?t.y.baseVal[0].value:Number(t.getAttribute("y"))||0,{x:n,y:a}=G(p,e,r);u.push(["x",n+(s<0?l:0)],["y",a+(o<0?h:0)]);break}case"circle":{const e=t.r.baseVal.value,r=t.cx.baseVal.value,n=t.cy.baseVal.value,a=e*(Math.abs(s)+Math.abs(o))/2,{x:i,y:c}=G(p,r,n);u.push(["r",a],["cx",i],["cy",c]);break}case"image":case"foreignobject":case"rect":{const e=t.width.baseVal.value,r=t.height.baseVal.value,n=t.x.baseVal.value,a=t.y.baseVal.value,{x:i,y:l}=G(p,n,a),h=Math.abs(e*s),d=Math.abs(r*o);u.push(["x",i-(s<0?h:0)],["y",l-(o<0?d:0)]),c||u.push(["width",h],["height",d]);break}case"ellipse":{const e=t.rx.baseVal.value,r=t.ry.baseVal.value,n=t.cx.baseVal.value,a=t.cy.baseVal.value,{x:i,y:c}=G(p,n,a),l=W();l.a=s,l.d=o;const{x:h,y:d}=G(l,e,r);u.push(["rx",Math.abs(h)],["ry",Math.abs(d)],["cx",i],["cy",c]);break}case"line":{const e=t.x1.baseVal.value,s=t.y1.baseVal.value,o=t.x2.baseVal.value,r=t.y2.baseVal.value,{x:n,y:a}=G(p,e,s),{x:i,y:c}=G(p,o,r);u.push(["x1",n],["y1",a],["x2",i],["y2",c]);break}case"polygon":case"polyline":{const e=tt(t.getAttribute("points")).map(t=>{const{x:e,y:s}=G(p,Number(t[0]),Number(t[1]));return t[0]=e,t[1]=s,t.join(" ")}).join(" ");u.push(["points",e]);break}case"path":{const e=t.getAttribute("d");u.push(["d",nt({path:e,localCTM:p})]);break}}u.forEach(([e,s])=>{t.setAttribute(e,s)})},ht=(t,e,s)=>{const{rotatable:o,rotatorAnchor:r,rotatorOffset:n}=e,{box:a,handles:l,center:h}=t;let{x:u,y:d,width:p,height:x,boxMatrix:b}=s;const f=p/2,y=x/2,g=null!==b?b:q(a,a.parentNode),m=G(g,u+f,d+y),v={tl:G(g,u,d),tr:G(g,u+p,d),br:G(g,u+p,d+x),bl:G(g,u,d+x),tc:G(g,u+f,d),bc:G(g,u+f,d+x),ml:G(g,u,d+y),mr:G(g,u+p,d+y),center:i(l.center)&&!h.isShifted?m:void 0};if(o){const t={};let e=1;switch(r){case"n":t.x=v.tc.x,t.y=v.tc.y;break;case"s":t.x=v.bc.x,t.y=v.bc.y,e=-1;break;case"w":t.x=v.ml.x,t.y=v.ml.y,e=-1;break;case"e":default:t.x=v.mr.x,t.y=v.mr.y}const s="n"===r||"s"===r?Math.atan2(v.bl.y-v.tl.y,v.bl.x-v.tl.x):Math.atan2(v.tl.y-v.tr.y,v.tl.x-v.tr.x),o={x:t.x-n*e*Math.cos(s),y:t.y-n*e*Math.sin(s)},{normal:a,radius:c}=l;i(a)&&(a.x1.baseVal.value=t.x,a.y1.baseVal.value=t.y,a.x2.baseVal.value=o.x,a.y2.baseVal.value=o.y),i(c)&&(c.x1.baseVal.value=m.x,c.y1.baseVal.value=m.y,h.isShifted||(c.x2.baseVal.value=m.x,c.y2.baseVal.value=m.y)),v.rotator=o}const _={x:u+=p<0?p:0,y:d+=x<0?x:0,width:Math.abs(p),height:Math.abs(x)};Object.keys(_).forEach(t=>{a.setAttribute(t,_[t])}),Object.keys(v).forEach(t=>{const e=l[t],s=v[t];c(s)||c(e)||("g"===e.tagName?e.setAttribute("transform",`matrix(1, 0, 0, 1, ${s.x}, ${s.y})`):(e.setAttribute("cx",s.x),e.setAttribute("cy",s.y)))})},ut=(t,e,s,o)=>{const r=F("circle");k(r,`sjx-svg-hdl-${o}`);const n={cx:t,cy:e,r:5.5,fill:s,stroke:"#fff","fill-opacity":1,"vector-effect":"non-scaling-stroke","stroke-width":1};return Object.keys(n).map(t=>{r.setAttribute(t,n[t])}),r},dt=(t,e)=>{t.setAttribute("stroke",e),t.setAttribute("stroke-dasharray","3 3"),t.setAttribute("vector-effect","non-scaling-stroke")};function pt(t,e){if(this.length){const s=i(e)&&e instanceof x?e:new x;return n.call(this,(e,o)=>(o instanceof SVGElement?Q(o)&&e.push(new it(o,t,s)):e.push(new O(o,t,s)),e),[])}}class xt extends y{constructor(t,e){super(t),this.enable(e)}_init(){const{el:t,options:e}=this,s=p(t),{style:o,appendTo:r}=e,n={position:"absolute","z-index":"2147483647",...o};this.storage={css:n,parent:i(r)?p(r)[0]:document.body},s.on("mousedown",this._onMouseDown).on("touchstart",this._onTouchStart),m.slice(0,3).forEach(t=>{this.eventDispatcher.registerEvent(t)})}_processOptions(t){let e={},s=null,o=document,r=()=>{},n=()=>{},a=()=>{},c=()=>{};if(i(t)){const{style:o,appendTo:u,stack:d,onInit:x,onMove:b,onDrop:f,onDestroy:y}=t;e=i(o)&&"object"==typeof o?o:e,s=u||null;const g=i(d)?p(d)[0]:document;r=h(x),n=h(b),a=l(f)?function(t){const{clone:e}=this.storage;T(e,g)&&f.call(this,t,this.el,e)}:()=>{},c=h(y)}this.options={style:e,appendTo:s,stack:o},this.proxyMethods={onInit:r,onDrop:a,onMove:n,onDestroy:c}}_start({clientX:t,clientY:e}){const{storage:s,el:o}=this,{parent:r,css:n}=s,{left:a,top:i}=E(r);n.left=`${t-a}px`,n.top=`${e-i}px`;const c=o.cloneNode(!0);p(c).css(n),s.clientX=t,s.clientY=e,s.cx=t,s.cy=e,s.clone=c,p(r)[0].appendChild(c),this._draw()}_moving({clientX:t,clientY:e}){const{storage:s}=this;s.clientX=t,s.clientY=e,s.doDraw=!0,s.doMove=!0}_end(t){const{storage:s}=this,{clone:o,frameId:r}=s;s.doDraw=!1,e(r),c(o)||(this.proxyMethods.onDrop.call(this,t),o.parentNode.removeChild(o),delete s.clone)}_animate(){const{storage:e}=this;e.frameId=t(this._animate);const{doDraw:s,clientX:o,clientY:r,cx:n,cy:a}=e;s&&(e.doDraw=!1,this._drag({dx:o-n,dy:r-a}))}_processMove(t,e){const{clone:s}=this.storage,o=`translate(${t}px, ${e}px)`;p(s).css({transform:o,webkitTranform:o,mozTransform:o,msTransform:o,otransform:o})}_destroy(){const{storage:t,proxyMethods:e,el:s}=this;c(t)||(p(s).off("mousedown",this._onMouseDown).off("touchstart",this._onTouchStart),e.onDestroy.call(this,s),delete this.storage)}disable(){this._destroy()}}function bt(t){if(this.length)return r.call(this,e=>new xt(e,t))}class ft extends u{drag(){return pt.call(this,...arguments)}clone(){return bt.call(this,...arguments)}}function yt(t){return new ft(t)}Object.defineProperty(yt,"createObservable",{value:()=>new x}),Object.defineProperty(yt,"Subjx",{value:ft}),Object.defineProperty(yt,"Observable",{value:x});export default yt;
