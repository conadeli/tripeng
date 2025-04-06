function Db(e,t){for(var a=0;a<t.length;a++){const r=t[a];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}})();function Rb(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yC={exports:{}},$M={},pC={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yn=Symbol.for("react.element"),Bb=Symbol.for("react.portal"),Eb=Symbol.for("react.fragment"),Nb=Symbol.for("react.strict_mode"),Ob=Symbol.for("react.profiler"),Zb=Symbol.for("react.provider"),Yb=Symbol.for("react.context"),Wb=Symbol.for("react.forward_ref"),_b=Symbol.for("react.suspense"),Gb=Symbol.for("react.memo"),$b=Symbol.for("react.lazy"),FL=Symbol.iterator;function Xb(e){return e===null||typeof e!="object"?null:(e=FL&&e[FL]||e["@@iterator"],typeof e=="function"?e:null)}var kC={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mC=Object.assign,gC={};function Va(e,t,a){this.props=e,this.context=t,this.refs=gC,this.updater=a||kC}Va.prototype.isReactComponent={};Va.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Va.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function fC(){}fC.prototype=Va.prototype;function Rw(e,t,a){this.props=e,this.context=t,this.refs=gC,this.updater=a||kC}var Bw=Rw.prototype=new fC;Bw.constructor=Rw;mC(Bw,Va.prototype);Bw.isPureReactComponent=!0;var TL=Array.isArray,vC=Object.prototype.hasOwnProperty,Ew={current:null},MC={key:!0,ref:!0,__self:!0,__source:!0};function xC(e,t,a){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)vC.call(t,r)&&!MC.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=a;else if(1<s){for(var c=Array(s),h=0;h<s;h++)c[h]=arguments[h+2];o.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Yn,type:e,key:i,ref:l,props:o,_owner:Ew.current}}function Qb(e,t){return{$$typeof:Yn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Nw(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yn}function Kb(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var DL=/\/+/g;function mx(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Kb(""+e.key):t.toString(36)}function m2(e,t,a,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Yn:case Bb:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+mx(l,0):r,TL(o)?(a="",e!=null&&(a=e.replace(DL,"$&/")+"/"),m2(o,t,a,"",function(h){return h})):o!=null&&(Nw(o)&&(o=Qb(o,a+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(DL,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",TL(e))for(var s=0;s<e.length;s++){i=e[s];var c=r+mx(i,s);l+=m2(i,t,a,c,o)}else if(c=Xb(e),typeof c=="function")for(e=c.call(e),s=0;!(i=e.next()).done;)i=i.value,c=r+mx(i,s++),l+=m2(i,t,a,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Jn(e,t,a){if(e==null)return e;var r=[],o=0;return m2(e,r,"","",function(i){return t.call(a,i,o++)}),r}function Jb(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},g2={transition:null},eq={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:g2,ReactCurrentOwner:Ew};function wC(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Jn,forEach:function(e,t,a){Jn(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return Jn(e,function(){t++}),t},toArray:function(e){return Jn(e,function(t){return t})||[]},only:function(e){if(!Nw(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Va;U.Fragment=Eb;U.Profiler=Ob;U.PureComponent=Rw;U.StrictMode=Nb;U.Suspense=_b;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eq;U.act=wC;U.cloneElement=function(e,t,a){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=mC({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Ew.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)vC.call(t,c)&&!MC.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=a;else if(1<c){s=Array(c);for(var h=0;h<c;h++)s[h]=arguments[h+2];r.children=s}return{$$typeof:Yn,type:e.type,key:o,ref:i,props:r,_owner:l}};U.createContext=function(e){return e={$$typeof:Yb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Zb,_context:e},e.Consumer=e};U.createElement=xC;U.createFactory=function(e){var t=xC.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:Wb,render:e}};U.isValidElement=Nw;U.lazy=function(e){return{$$typeof:$b,_payload:{_status:-1,_result:e},_init:Jb}};U.memo=function(e,t){return{$$typeof:Gb,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=g2.transition;g2.transition={};try{e()}finally{g2.transition=t}};U.unstable_act=wC;U.useCallback=function(e,t){return he.current.useCallback(e,t)};U.useContext=function(e){return he.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return he.current.useDeferredValue(e)};U.useEffect=function(e,t){return he.current.useEffect(e,t)};U.useId=function(){return he.current.useId()};U.useImperativeHandle=function(e,t,a){return he.current.useImperativeHandle(e,t,a)};U.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return he.current.useMemo(e,t)};U.useReducer=function(e,t,a){return he.current.useReducer(e,t,a)};U.useRef=function(e){return he.current.useRef(e)};U.useState=function(e){return he.current.useState(e)};U.useSyncExternalStore=function(e,t,a){return he.current.useSyncExternalStore(e,t,a)};U.useTransition=function(){return he.current.useTransition()};U.version="18.3.1";pC.exports=U;var w=pC.exports;const Lt=Rb(w),tq=Db({__proto__:null,default:Lt},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aq=w,nq=Symbol.for("react.element"),rq=Symbol.for("react.fragment"),oq=Object.prototype.hasOwnProperty,iq=aq.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lq={key:!0,ref:!0,__self:!0,__source:!0};function LC(e,t,a){var r,o={},i=null,l=null;a!==void 0&&(i=""+a),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)oq.call(t,r)&&!lq.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:nq,type:e,key:i,ref:l,props:o,_owner:iq.current}}$M.Fragment=rq;$M.jsx=LC;$M.jsxs=LC;yC.exports=$M;var d=yC.exports,IC={exports:{}},Ie={},CC={exports:{}},SC={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,H){var A=b.length;b.push(H);e:for(;0<A;){var W=A-1>>>1,J=b[W];if(0<o(J,H))b[W]=H,b[A]=J,A=W;else break e}}function a(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var H=b[0],A=b.pop();if(A!==H){b[0]=A;e:for(var W=0,J=b.length,Qn=J>>>1;W<Qn;){var qt=2*(W+1)-1,kx=b[qt],zt=qt+1,Kn=b[zt];if(0>o(kx,A))zt<J&&0>o(Kn,kx)?(b[W]=Kn,b[zt]=A,W=zt):(b[W]=kx,b[qt]=A,W=qt);else if(zt<J&&0>o(Kn,A))b[W]=Kn,b[zt]=A,W=zt;else break e}}return H}function o(b,H){var A=b.sortIndex-H.sortIndex;return A!==0?A:b.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var c=[],h=[],m=1,k=null,g=3,x=!1,v=!1,f=!1,C=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(b){for(var H=a(h);H!==null;){if(H.callback===null)r(h);else if(H.startTime<=b)r(h),H.sortIndex=H.expirationTime,t(c,H);else break;H=a(h)}}function M(b){if(f=!1,p(b),!v)if(a(c)!==null)v=!0,yx(I);else{var H=a(h);H!==null&&px(M,H.startTime-b)}}function I(b,H){v=!1,f&&(f=!1,y(j),j=-1),x=!0;var A=g;try{for(p(H),k=a(c);k!==null&&(!(k.expirationTime>H)||b&&!K());){var W=k.callback;if(typeof W=="function"){k.callback=null,g=k.priorityLevel;var J=W(k.expirationTime<=H);H=e.unstable_now(),typeof J=="function"?k.callback=J:k===a(c)&&r(c),p(H)}else r(c);k=a(c)}if(k!==null)var Qn=!0;else{var qt=a(h);qt!==null&&px(M,qt.startTime-H),Qn=!1}return Qn}finally{k=null,g=A,x=!1}}var q=!1,z=null,j=-1,D=5,P=-1;function K(){return!(e.unstable_now()-P<D)}function Ra(){if(z!==null){var b=e.unstable_now();P=b;var H=!0;try{H=z(!0,b)}finally{H?Ba():(q=!1,z=null)}}else q=!1}var Ba;if(typeof u=="function")Ba=function(){u(Ra)};else if(typeof MessageChannel<"u"){var VL=new MessageChannel,Tb=VL.port2;VL.port1.onmessage=Ra,Ba=function(){Tb.postMessage(null)}}else Ba=function(){C(Ra,0)};function yx(b){z=b,q||(q=!0,Ba())}function px(b,H){j=C(function(){b(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,yx(I))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return a(c)},e.unstable_next=function(b){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var A=g;g=H;try{return b()}finally{g=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,H){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var A=g;g=b;try{return H()}finally{g=A}},e.unstable_scheduleCallback=function(b,H,A){var W=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?W+A:W):A=W,b){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=A+J,b={id:m++,callback:H,priorityLevel:b,startTime:A,expirationTime:J,sortIndex:-1},A>W?(b.sortIndex=A,t(h,b),a(c)===null&&b===a(h)&&(f?(y(j),j=-1):f=!0,px(M,A-W))):(b.sortIndex=J,t(c,b),v||x||(v=!0,yx(I))),b},e.unstable_shouldYield=K,e.unstable_wrapCallback=function(b){var H=g;return function(){var A=g;g=H;try{return b.apply(this,arguments)}finally{g=A}}}})(SC);CC.exports=SC;var cq=CC.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sq=w,Le=cq;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bC=new Set,Sn={};function ra(e,t){qa(e,t),qa(e+"Capture",t)}function qa(e,t){for(Sn[e]=t,e=0;e<t.length;e++)bC.add(t[e])}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ox=Object.prototype.hasOwnProperty,dq=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,RL={},BL={};function hq(e){return Ox.call(BL,e)?!0:Ox.call(RL,e)?!1:dq.test(e)?BL[e]=!0:(RL[e]=!0,!1)}function uq(e,t,a,r){if(a!==null&&a.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function yq(e,t,a,r){if(t===null||typeof t>"u"||uq(e,t,a,r))return!0;if(r)return!1;if(a!==null)switch(a.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,a,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=a,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ow=/[\-:]([a-z])/g;function Zw(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ow,Zw);re[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ow,Zw);re[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ow,Zw);re[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yw(e,t,a,r){var o=re.hasOwnProperty(t)?re[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(yq(t,a,o,r)&&(a=null),r||o===null?hq(t)&&(a===null?e.removeAttribute(t):e.setAttribute(t,""+a)):o.mustUseProperty?e[o.propertyName]=a===null?o.type===3?!1:"":a:(t=o.attributeName,r=o.attributeNamespace,a===null?e.removeAttribute(t):(o=o.type,a=o===3||o===4&&a===!0?"":""+a,r?e.setAttributeNS(r,t,a):e.setAttribute(t,a))))}var nt=sq.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,e2=Symbol.for("react.element"),sa=Symbol.for("react.portal"),da=Symbol.for("react.fragment"),Ww=Symbol.for("react.strict_mode"),Zx=Symbol.for("react.profiler"),qC=Symbol.for("react.provider"),zC=Symbol.for("react.context"),_w=Symbol.for("react.forward_ref"),Yx=Symbol.for("react.suspense"),Wx=Symbol.for("react.suspense_list"),Gw=Symbol.for("react.memo"),ot=Symbol.for("react.lazy"),jC=Symbol.for("react.offscreen"),EL=Symbol.iterator;function Ea(e){return e===null||typeof e!="object"?null:(e=EL&&e[EL]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,gx;function $a(e){if(gx===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);gx=t&&t[1]||""}return`
`+gx+e}var fx=!1;function vx(e,t){if(!e||fx)return"";fx=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var r=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){r=h}e.call(t.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var o=h.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var c=`
`+o[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=s);break}}}finally{fx=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?$a(e):""}function pq(e){switch(e.tag){case 5:return $a(e.type);case 16:return $a("Lazy");case 13:return $a("Suspense");case 19:return $a("SuspenseList");case 0:case 2:case 15:return e=vx(e.type,!1),e;case 11:return e=vx(e.type.render,!1),e;case 1:return e=vx(e.type,!0),e;default:return""}}function _x(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case da:return"Fragment";case sa:return"Portal";case Zx:return"Profiler";case Ww:return"StrictMode";case Yx:return"Suspense";case Wx:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zC:return(e.displayName||"Context")+".Consumer";case qC:return(e._context.displayName||"Context")+".Provider";case _w:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gw:return t=e.displayName||null,t!==null?t:_x(e.type)||"Memo";case ot:t=e._payload,e=e._init;try{return _x(e(t))}catch{}}return null}function kq(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _x(t);case 8:return t===Ww?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function HC(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mq(e){var t=HC(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function t2(e){e._valueTracker||(e._valueTracker=mq(e))}function PC(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),r="";return e&&(r=HC(e)?e.checked?"true":"false":e.value),e=r,e!==a?(t.setValue(e),!0):!1}function LM(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Gx(e,t){var a=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??e._wrapperState.initialChecked})}function NL(e,t){var a=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;a=xt(t.value!=null?t.value:a),e._wrapperState={initialChecked:r,initialValue:a,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function AC(e,t){t=t.checked,t!=null&&Yw(e,"checked",t,!1)}function $x(e,t){AC(e,t);var a=xt(t.value),r=t.type;if(a!=null)r==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xx(e,t.type,a):t.hasOwnProperty("defaultValue")&&Xx(e,t.type,xt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function OL(e,t,a){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,a||t===e.value||(e.value=t),e.defaultValue=t}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function Xx(e,t,a){(t!=="number"||LM(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}var Xa=Array.isArray;function xa(e,t,a,r){if(e=e.options,t){t={};for(var o=0;o<a.length;o++)t["$"+a[o]]=!0;for(a=0;a<e.length;a++)o=t.hasOwnProperty("$"+e[a].value),e[a].selected!==o&&(e[a].selected=o),o&&r&&(e[a].defaultSelected=!0)}else{for(a=""+xt(a),t=null,o=0;o<e.length;o++){if(e[o].value===a){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Qx(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ZL(e,t){var a=t.value;if(a==null){if(a=t.children,t=t.defaultValue,a!=null){if(t!=null)throw Error(L(92));if(Xa(a)){if(1<a.length)throw Error(L(93));a=a[0]}t=a}t==null&&(t=""),a=t}e._wrapperState={initialValue:xt(a)}}function UC(e,t){var a=xt(t.value),r=xt(t.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),t.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),r!=null&&(e.defaultValue=""+r)}function YL(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function VC(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kx(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?VC(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var a2,FC=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,a,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,a,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(a2=a2||document.createElement("div"),a2.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=a2.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function bn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Ja={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gq=["Webkit","ms","Moz","O"];Object.keys(Ja).forEach(function(e){gq.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ja[t]=Ja[e]})});function TC(e,t,a){return t==null||typeof t=="boolean"||t===""?"":a||typeof t!="number"||t===0||Ja.hasOwnProperty(e)&&Ja[e]?(""+t).trim():t+"px"}function DC(e,t){e=e.style;for(var a in t)if(t.hasOwnProperty(a)){var r=a.indexOf("--")===0,o=TC(a,t[a],r);a==="float"&&(a="cssFloat"),r?e.setProperty(a,o):e[a]=o}}var fq=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jx(e,t){if(t){if(fq[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function ew(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tw=null;function $w(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var aw=null,wa=null,La=null;function WL(e){if(e=Gn(e)){if(typeof aw!="function")throw Error(L(280));var t=e.stateNode;t&&(t=ex(t),aw(e.stateNode,e.type,t))}}function RC(e){wa?La?La.push(e):La=[e]:wa=e}function BC(){if(wa){var e=wa,t=La;if(La=wa=null,WL(e),t)for(e=0;e<t.length;e++)WL(t[e])}}function EC(e,t){return e(t)}function NC(){}var Mx=!1;function OC(e,t,a){if(Mx)return e(t,a);Mx=!0;try{return EC(e,t,a)}finally{Mx=!1,(wa!==null||La!==null)&&(NC(),BC())}}function qn(e,t){var a=e.stateNode;if(a===null)return null;var r=ex(a);if(r===null)return null;a=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(L(231,t,typeof a));return a}var nw=!1;if(Je)try{var Na={};Object.defineProperty(Na,"passive",{get:function(){nw=!0}}),window.addEventListener("test",Na,Na),window.removeEventListener("test",Na,Na)}catch{nw=!1}function vq(e,t,a,r,o,i,l,s,c){var h=Array.prototype.slice.call(arguments,3);try{t.apply(a,h)}catch(m){this.onError(m)}}var en=!1,IM=null,CM=!1,rw=null,Mq={onError:function(e){en=!0,IM=e}};function xq(e,t,a,r,o,i,l,s,c){en=!1,IM=null,vq.apply(Mq,arguments)}function wq(e,t,a,r,o,i,l,s,c){if(xq.apply(this,arguments),en){if(en){var h=IM;en=!1,IM=null}else throw Error(L(198));CM||(CM=!0,rw=h)}}function oa(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function ZC(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _L(e){if(oa(e)!==e)throw Error(L(188))}function Lq(e){var t=e.alternate;if(!t){if(t=oa(e),t===null)throw Error(L(188));return t!==e?null:e}for(var a=e,r=t;;){var o=a.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){a=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===a)return _L(o),e;if(i===r)return _L(o),t;i=i.sibling}throw Error(L(188))}if(a.return!==r.return)a=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===a){l=!0,a=o,r=i;break}if(s===r){l=!0,r=o,a=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===a){l=!0,a=i,r=o;break}if(s===r){l=!0,r=i,a=o;break}s=s.sibling}if(!l)throw Error(L(189))}}if(a.alternate!==r)throw Error(L(190))}if(a.tag!==3)throw Error(L(188));return a.stateNode.current===a?e:t}function YC(e){return e=Lq(e),e!==null?WC(e):null}function WC(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=WC(e);if(t!==null)return t;e=e.sibling}return null}var _C=Le.unstable_scheduleCallback,GL=Le.unstable_cancelCallback,Iq=Le.unstable_shouldYield,Cq=Le.unstable_requestPaint,_=Le.unstable_now,Sq=Le.unstable_getCurrentPriorityLevel,Xw=Le.unstable_ImmediatePriority,GC=Le.unstable_UserBlockingPriority,SM=Le.unstable_NormalPriority,bq=Le.unstable_LowPriority,$C=Le.unstable_IdlePriority,XM=null,Ye=null;function qq(e){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(XM,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:Hq,zq=Math.log,jq=Math.LN2;function Hq(e){return e>>>=0,e===0?32:31-(zq(e)/jq|0)|0}var n2=64,r2=4194304;function Qa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bM(e,t){var a=e.pendingLanes;if(a===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=a&268435455;if(l!==0){var s=l&~o;s!==0?r=Qa(s):(i&=l,i!==0&&(r=Qa(i)))}else l=a&~o,l!==0?r=Qa(l):i!==0&&(r=Qa(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=a&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)a=31-Fe(t),o=1<<a,r|=e[a],t&=~o;return r}function Pq(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Aq(e,t){for(var a=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Fe(i),s=1<<l,c=o[l];c===-1?(!(s&a)||s&r)&&(o[l]=Pq(s,t)):c<=t&&(e.expiredLanes|=s),i&=~s}}function ow(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function XC(){var e=n2;return n2<<=1,!(n2&4194240)&&(n2=64),e}function xx(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Wn(e,t,a){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=a}function Uq(e,t){var a=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<a;){var o=31-Fe(a),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,a&=~i}}function Qw(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var r=31-Fe(a),o=1<<r;o&t|e[r]&t&&(e[r]|=t),a&=~o}}var F=0;function QC(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var KC,Kw,JC,eS,tS,iw=!1,o2=[],ut=null,yt=null,pt=null,zn=new Map,jn=new Map,lt=[],Vq="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $L(e,t){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":yt=null;break;case"mouseover":case"mouseout":pt=null;break;case"pointerover":case"pointerout":zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jn.delete(t.pointerId)}}function Oa(e,t,a,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Gn(t),t!==null&&Kw(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Fq(e,t,a,r,o){switch(t){case"focusin":return ut=Oa(ut,e,t,a,r,o),!0;case"dragenter":return yt=Oa(yt,e,t,a,r,o),!0;case"mouseover":return pt=Oa(pt,e,t,a,r,o),!0;case"pointerover":var i=o.pointerId;return zn.set(i,Oa(zn.get(i)||null,e,t,a,r,o)),!0;case"gotpointercapture":return i=o.pointerId,jn.set(i,Oa(jn.get(i)||null,e,t,a,r,o)),!0}return!1}function aS(e){var t=G1(e.target);if(t!==null){var a=oa(t);if(a!==null){if(t=a.tag,t===13){if(t=ZC(a),t!==null){e.blockedOn=t,tS(e.priority,function(){JC(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function f2(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=lw(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);tw=r,a.target.dispatchEvent(r),tw=null}else return t=Gn(a),t!==null&&Kw(t),e.blockedOn=a,!1;t.shift()}return!0}function XL(e,t,a){f2(e)&&a.delete(t)}function Tq(){iw=!1,ut!==null&&f2(ut)&&(ut=null),yt!==null&&f2(yt)&&(yt=null),pt!==null&&f2(pt)&&(pt=null),zn.forEach(XL),jn.forEach(XL)}function Za(e,t){e.blockedOn===t&&(e.blockedOn=null,iw||(iw=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,Tq)))}function Hn(e){function t(o){return Za(o,e)}if(0<o2.length){Za(o2[0],e);for(var a=1;a<o2.length;a++){var r=o2[a];r.blockedOn===e&&(r.blockedOn=null)}}for(ut!==null&&Za(ut,e),yt!==null&&Za(yt,e),pt!==null&&Za(pt,e),zn.forEach(t),jn.forEach(t),a=0;a<lt.length;a++)r=lt[a],r.blockedOn===e&&(r.blockedOn=null);for(;0<lt.length&&(a=lt[0],a.blockedOn===null);)aS(a),a.blockedOn===null&&lt.shift()}var Ia=nt.ReactCurrentBatchConfig,qM=!0;function Dq(e,t,a,r){var o=F,i=Ia.transition;Ia.transition=null;try{F=1,Jw(e,t,a,r)}finally{F=o,Ia.transition=i}}function Rq(e,t,a,r){var o=F,i=Ia.transition;Ia.transition=null;try{F=4,Jw(e,t,a,r)}finally{F=o,Ia.transition=i}}function Jw(e,t,a,r){if(qM){var o=lw(e,t,a,r);if(o===null)Hx(e,t,r,zM,a),$L(e,r);else if(Fq(o,e,t,a,r))r.stopPropagation();else if($L(e,r),t&4&&-1<Vq.indexOf(e)){for(;o!==null;){var i=Gn(o);if(i!==null&&KC(i),i=lw(e,t,a,r),i===null&&Hx(e,t,r,zM,a),i===o)break;o=i}o!==null&&r.stopPropagation()}else Hx(e,t,r,null,a)}}var zM=null;function lw(e,t,a,r){if(zM=null,e=$w(r),e=G1(e),e!==null)if(t=oa(e),t===null)e=null;else if(a=t.tag,a===13){if(e=ZC(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return zM=e,null}function nS(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sq()){case Xw:return 1;case GC:return 4;case SM:case bq:return 16;case $C:return 536870912;default:return 16}default:return 16}}var st=null,eL=null,v2=null;function rS(){if(v2)return v2;var e,t=eL,a=t.length,r,o="value"in st?st.value:st.textContent,i=o.length;for(e=0;e<a&&t[e]===o[e];e++);var l=a-e;for(r=1;r<=l&&t[a-r]===o[i-r];r++);return v2=o.slice(e,1<r?1-r:void 0)}function M2(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function i2(){return!0}function QL(){return!1}function Ce(e){function t(a,r,o,i,l){this._reactName=a,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?i2:QL,this.isPropagationStopped=QL,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=i2)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=i2)},persist:function(){},isPersistent:i2}),t}var Fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tL=Ce(Fa),_n=Z({},Fa,{view:0,detail:0}),Bq=Ce(_n),wx,Lx,Ya,QM=Z({},_n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:aL,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ya&&(Ya&&e.type==="mousemove"?(wx=e.screenX-Ya.screenX,Lx=e.screenY-Ya.screenY):Lx=wx=0,Ya=e),wx)},movementY:function(e){return"movementY"in e?e.movementY:Lx}}),KL=Ce(QM),Eq=Z({},QM,{dataTransfer:0}),Nq=Ce(Eq),Oq=Z({},_n,{relatedTarget:0}),Ix=Ce(Oq),Zq=Z({},Fa,{animationName:0,elapsedTime:0,pseudoElement:0}),Yq=Ce(Zq),Wq=Z({},Fa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_q=Ce(Wq),Gq=Z({},Fa,{data:0}),JL=Ce(Gq),$q={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xq={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qq={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kq(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qq[e])?!!t[e]:!1}function aL(){return Kq}var Jq=Z({},_n,{key:function(e){if(e.key){var t=$q[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=M2(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xq[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:aL,charCode:function(e){return e.type==="keypress"?M2(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?M2(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ez=Ce(Jq),tz=Z({},QM,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eI=Ce(tz),az=Z({},_n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:aL}),nz=Ce(az),rz=Z({},Fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),oz=Ce(rz),iz=Z({},QM,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lz=Ce(iz),cz=[9,13,27,32],nL=Je&&"CompositionEvent"in window,tn=null;Je&&"documentMode"in document&&(tn=document.documentMode);var sz=Je&&"TextEvent"in window&&!tn,oS=Je&&(!nL||tn&&8<tn&&11>=tn),tI=" ",aI=!1;function iS(e,t){switch(e){case"keyup":return cz.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lS(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ha=!1;function dz(e,t){switch(e){case"compositionend":return lS(t);case"keypress":return t.which!==32?null:(aI=!0,tI);case"textInput":return e=t.data,e===tI&&aI?null:e;default:return null}}function hz(e,t){if(ha)return e==="compositionend"||!nL&&iS(e,t)?(e=rS(),v2=eL=st=null,ha=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return oS&&t.locale!=="ko"?null:t.data;default:return null}}var uz={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nI(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!uz[e.type]:t==="textarea"}function cS(e,t,a,r){RC(r),t=jM(t,"onChange"),0<t.length&&(a=new tL("onChange","change",null,a,r),e.push({event:a,listeners:t}))}var an=null,Pn=null;function yz(e){vS(e,0)}function KM(e){var t=pa(e);if(PC(t))return e}function pz(e,t){if(e==="change")return t}var sS=!1;if(Je){var Cx;if(Je){var Sx="oninput"in document;if(!Sx){var rI=document.createElement("div");rI.setAttribute("oninput","return;"),Sx=typeof rI.oninput=="function"}Cx=Sx}else Cx=!1;sS=Cx&&(!document.documentMode||9<document.documentMode)}function oI(){an&&(an.detachEvent("onpropertychange",dS),Pn=an=null)}function dS(e){if(e.propertyName==="value"&&KM(Pn)){var t=[];cS(t,Pn,e,$w(e)),OC(yz,t)}}function kz(e,t,a){e==="focusin"?(oI(),an=t,Pn=a,an.attachEvent("onpropertychange",dS)):e==="focusout"&&oI()}function mz(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return KM(Pn)}function gz(e,t){if(e==="click")return KM(t)}function fz(e,t){if(e==="input"||e==="change")return KM(t)}function vz(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Re=typeof Object.is=="function"?Object.is:vz;function An(e,t){if(Re(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),r=Object.keys(t);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var o=a[r];if(!Ox.call(t,o)||!Re(e[o],t[o]))return!1}return!0}function iI(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lI(e,t){var a=iI(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=t&&r>=t)return{node:a,offset:t-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=iI(a)}}function hS(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hS(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function uS(){for(var e=window,t=LM();t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=LM(e.document)}return t}function rL(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Mz(e){var t=uS(),a=e.focusedElem,r=e.selectionRange;if(t!==a&&a&&a.ownerDocument&&hS(a.ownerDocument.documentElement,a)){if(r!==null&&rL(a)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in a)a.selectionStart=t,a.selectionEnd=Math.min(e,a.value.length);else if(e=(t=a.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=a.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=lI(a,i);var l=lI(a,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=a;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<t.length;a++)e=t[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xz=Je&&"documentMode"in document&&11>=document.documentMode,ua=null,cw=null,nn=null,sw=!1;function cI(e,t,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;sw||ua==null||ua!==LM(r)||(r=ua,"selectionStart"in r&&rL(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),nn&&An(nn,r)||(nn=r,r=jM(cw,"onSelect"),0<r.length&&(t=new tL("onSelect","select",null,t,a),e.push({event:t,listeners:r}),t.target=ua)))}function l2(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ya={animationend:l2("Animation","AnimationEnd"),animationiteration:l2("Animation","AnimationIteration"),animationstart:l2("Animation","AnimationStart"),transitionend:l2("Transition","TransitionEnd")},bx={},yS={};Je&&(yS=document.createElement("div").style,"AnimationEvent"in window||(delete ya.animationend.animation,delete ya.animationiteration.animation,delete ya.animationstart.animation),"TransitionEvent"in window||delete ya.transitionend.transition);function JM(e){if(bx[e])return bx[e];if(!ya[e])return e;var t=ya[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in yS)return bx[e]=t[a];return e}var pS=JM("animationend"),kS=JM("animationiteration"),mS=JM("animationstart"),gS=JM("transitionend"),fS=new Map,sI="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function It(e,t){fS.set(e,t),ra(t,[e])}for(var qx=0;qx<sI.length;qx++){var zx=sI[qx],wz=zx.toLowerCase(),Lz=zx[0].toUpperCase()+zx.slice(1);It(wz,"on"+Lz)}It(pS,"onAnimationEnd");It(kS,"onAnimationIteration");It(mS,"onAnimationStart");It("dblclick","onDoubleClick");It("focusin","onFocus");It("focusout","onBlur");It(gS,"onTransitionEnd");qa("onMouseEnter",["mouseout","mouseover"]);qa("onMouseLeave",["mouseout","mouseover"]);qa("onPointerEnter",["pointerout","pointerover"]);qa("onPointerLeave",["pointerout","pointerover"]);ra("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ra("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ra("onBeforeInput",["compositionend","keypress","textInput","paste"]);ra("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ra("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ra("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ka="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Iz=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ka));function dI(e,t,a){var r=e.type||"unknown-event";e.currentTarget=a,wq(r,t,void 0,e),e.currentTarget=null}function vS(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],c=s.instance,h=s.currentTarget;if(s=s.listener,c!==i&&o.isPropagationStopped())break e;dI(o,s,h),i=c}else for(l=0;l<r.length;l++){if(s=r[l],c=s.instance,h=s.currentTarget,s=s.listener,c!==i&&o.isPropagationStopped())break e;dI(o,s,h),i=c}}}if(CM)throw e=rw,CM=!1,rw=null,e}function R(e,t){var a=t[pw];a===void 0&&(a=t[pw]=new Set);var r=e+"__bubble";a.has(r)||(MS(t,e,2,!1),a.add(r))}function jx(e,t,a){var r=0;t&&(r|=4),MS(a,e,r,t)}var c2="_reactListening"+Math.random().toString(36).slice(2);function Un(e){if(!e[c2]){e[c2]=!0,bC.forEach(function(a){a!=="selectionchange"&&(Iz.has(a)||jx(a,!1,e),jx(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[c2]||(t[c2]=!0,jx("selectionchange",!1,t))}}function MS(e,t,a,r){switch(nS(t)){case 1:var o=Dq;break;case 4:o=Rq;break;default:o=Jw}a=o.bind(null,t,a,e),o=void 0,!nw||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,a,{capture:!0,passive:o}):e.addEventListener(t,a,!0):o!==void 0?e.addEventListener(t,a,{passive:o}):e.addEventListener(t,a,!1)}function Hx(e,t,a,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;l=l.return}for(;s!==null;){if(l=G1(s),l===null)return;if(c=l.tag,c===5||c===6){r=i=l;continue e}s=s.parentNode}}r=r.return}OC(function(){var h=i,m=$w(a),k=[];e:{var g=fS.get(e);if(g!==void 0){var x=tL,v=e;switch(e){case"keypress":if(M2(a)===0)break e;case"keydown":case"keyup":x=ez;break;case"focusin":v="focus",x=Ix;break;case"focusout":v="blur",x=Ix;break;case"beforeblur":case"afterblur":x=Ix;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=KL;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Nq;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=nz;break;case pS:case kS:case mS:x=Yq;break;case gS:x=oz;break;case"scroll":x=Bq;break;case"wheel":x=lz;break;case"copy":case"cut":case"paste":x=_q;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=eI}var f=(t&4)!==0,C=!f&&e==="scroll",y=f?g!==null?g+"Capture":null:g;f=[];for(var u=h,p;u!==null;){p=u;var M=p.stateNode;if(p.tag===5&&M!==null&&(p=M,y!==null&&(M=qn(u,y),M!=null&&f.push(Vn(u,M,p)))),C)break;u=u.return}0<f.length&&(g=new x(g,v,null,a,m),k.push({event:g,listeners:f}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&a!==tw&&(v=a.relatedTarget||a.fromElement)&&(G1(v)||v[et]))break e;if((x||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,x?(v=a.relatedTarget||a.toElement,x=h,v=v?G1(v):null,v!==null&&(C=oa(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=h),x!==v)){if(f=KL,M="onMouseLeave",y="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(f=eI,M="onPointerLeave",y="onPointerEnter",u="pointer"),C=x==null?g:pa(x),p=v==null?g:pa(v),g=new f(M,u+"leave",x,a,m),g.target=C,g.relatedTarget=p,M=null,G1(m)===h&&(f=new f(y,u+"enter",v,a,m),f.target=p,f.relatedTarget=C,M=f),C=M,x&&v)t:{for(f=x,y=v,u=0,p=f;p;p=ca(p))u++;for(p=0,M=y;M;M=ca(M))p++;for(;0<u-p;)f=ca(f),u--;for(;0<p-u;)y=ca(y),p--;for(;u--;){if(f===y||y!==null&&f===y.alternate)break t;f=ca(f),y=ca(y)}f=null}else f=null;x!==null&&hI(k,g,x,f,!1),v!==null&&C!==null&&hI(k,C,v,f,!0)}}e:{if(g=h?pa(h):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var I=pz;else if(nI(g))if(sS)I=fz;else{I=mz;var q=kz}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(I=gz);if(I&&(I=I(e,h))){cS(k,I,a,m);break e}q&&q(e,g,h),e==="focusout"&&(q=g._wrapperState)&&q.controlled&&g.type==="number"&&Xx(g,"number",g.value)}switch(q=h?pa(h):window,e){case"focusin":(nI(q)||q.contentEditable==="true")&&(ua=q,cw=h,nn=null);break;case"focusout":nn=cw=ua=null;break;case"mousedown":sw=!0;break;case"contextmenu":case"mouseup":case"dragend":sw=!1,cI(k,a,m);break;case"selectionchange":if(xz)break;case"keydown":case"keyup":cI(k,a,m)}var z;if(nL)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else ha?iS(e,a)&&(j="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(j="onCompositionStart");j&&(oS&&a.locale!=="ko"&&(ha||j!=="onCompositionStart"?j==="onCompositionEnd"&&ha&&(z=rS()):(st=m,eL="value"in st?st.value:st.textContent,ha=!0)),q=jM(h,j),0<q.length&&(j=new JL(j,e,null,a,m),k.push({event:j,listeners:q}),z?j.data=z:(z=lS(a),z!==null&&(j.data=z)))),(z=sz?dz(e,a):hz(e,a))&&(h=jM(h,"onBeforeInput"),0<h.length&&(m=new JL("onBeforeInput","beforeinput",null,a,m),k.push({event:m,listeners:h}),m.data=z))}vS(k,t)})}function Vn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function jM(e,t){for(var a=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=qn(e,a),i!=null&&r.unshift(Vn(e,i,o)),i=qn(e,t),i!=null&&r.push(Vn(e,i,o))),e=e.return}return r}function ca(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hI(e,t,a,r,o){for(var i=t._reactName,l=[];a!==null&&a!==r;){var s=a,c=s.alternate,h=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&h!==null&&(s=h,o?(c=qn(a,i),c!=null&&l.unshift(Vn(a,c,s))):o||(c=qn(a,i),c!=null&&l.push(Vn(a,c,s)))),a=a.return}l.length!==0&&e.push({event:t,listeners:l})}var Cz=/\r\n?/g,Sz=/\u0000|\uFFFD/g;function uI(e){return(typeof e=="string"?e:""+e).replace(Cz,`
`).replace(Sz,"")}function s2(e,t,a){if(t=uI(t),uI(e)!==t&&a)throw Error(L(425))}function HM(){}var dw=null,hw=null;function uw(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yw=typeof setTimeout=="function"?setTimeout:void 0,bz=typeof clearTimeout=="function"?clearTimeout:void 0,yI=typeof Promise=="function"?Promise:void 0,qz=typeof queueMicrotask=="function"?queueMicrotask:typeof yI<"u"?function(e){return yI.resolve(null).then(e).catch(zz)}:yw;function zz(e){setTimeout(function(){throw e})}function Px(e,t){var a=t,r=0;do{var o=a.nextSibling;if(e.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(r===0){e.removeChild(o),Hn(t);return}r--}else a!=="$"&&a!=="$?"&&a!=="$!"||r++;a=o}while(a);Hn(t)}function kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pI(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}var Ta=Math.random().toString(36).slice(2),Ze="__reactFiber$"+Ta,Fn="__reactProps$"+Ta,et="__reactContainer$"+Ta,pw="__reactEvents$"+Ta,jz="__reactListeners$"+Ta,Hz="__reactHandles$"+Ta;function G1(e){var t=e[Ze];if(t)return t;for(var a=e.parentNode;a;){if(t=a[et]||a[Ze]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=pI(e);e!==null;){if(a=e[Ze])return a;e=pI(e)}return t}e=a,a=e.parentNode}return null}function Gn(e){return e=e[Ze]||e[et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pa(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function ex(e){return e[Fn]||null}var kw=[],ka=-1;function Ct(e){return{current:e}}function B(e){0>ka||(e.current=kw[ka],kw[ka]=null,ka--)}function T(e,t){ka++,kw[ka]=e.current,e.current=t}var wt={},ce=Ct(wt),ke=Ct(!1),J1=wt;function za(e,t){var a=e.type.contextTypes;if(!a)return wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in a)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function me(e){return e=e.childContextTypes,e!=null}function PM(){B(ke),B(ce)}function kI(e,t,a){if(ce.current!==wt)throw Error(L(168));T(ce,t),T(ke,a)}function xS(e,t,a){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return a;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(L(108,kq(e)||"Unknown",o));return Z({},a,r)}function AM(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wt,J1=ce.current,T(ce,e),T(ke,ke.current),!0}function mI(e,t,a){var r=e.stateNode;if(!r)throw Error(L(169));a?(e=xS(e,t,J1),r.__reactInternalMemoizedMergedChildContext=e,B(ke),B(ce),T(ce,e)):B(ke),T(ke,a)}var $e=null,tx=!1,Ax=!1;function wS(e){$e===null?$e=[e]:$e.push(e)}function Pz(e){tx=!0,wS(e)}function St(){if(!Ax&&$e!==null){Ax=!0;var e=0,t=F;try{var a=$e;for(F=1;e<a.length;e++){var r=a[e];do r=r(!0);while(r!==null)}$e=null,tx=!1}catch(o){throw $e!==null&&($e=$e.slice(e+1)),_C(Xw,St),o}finally{F=t,Ax=!1}}return null}var ma=[],ga=0,UM=null,VM=0,Se=[],be=0,ea=null,Xe=1,Qe="";function jt(e,t){ma[ga++]=VM,ma[ga++]=UM,UM=e,VM=t}function LS(e,t,a){Se[be++]=Xe,Se[be++]=Qe,Se[be++]=ea,ea=e;var r=Xe;e=Qe;var o=32-Fe(r)-1;r&=~(1<<o),a+=1;var i=32-Fe(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Xe=1<<32-Fe(t)+o|a<<o|r,Qe=i+e}else Xe=1<<i|a<<o|r,Qe=e}function oL(e){e.return!==null&&(jt(e,1),LS(e,1,0))}function iL(e){for(;e===UM;)UM=ma[--ga],ma[ga]=null,VM=ma[--ga],ma[ga]=null;for(;e===ea;)ea=Se[--be],Se[be]=null,Qe=Se[--be],Se[be]=null,Xe=Se[--be],Se[be]=null}var we=null,xe=null,E=!1,Ve=null;function IS(e,t){var a=qe(5,null,null,0);a.elementType="DELETED",a.stateNode=t,a.return=e,t=e.deletions,t===null?(e.deletions=[a],e.flags|=16):t.push(a)}function gI(e,t){switch(e.tag){case 5:var a=e.type;return t=t.nodeType!==1||a.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,xe=kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(a=ea!==null?{id:Xe,overflow:Qe}:null,e.memoizedState={dehydrated:t,treeContext:a,retryLane:1073741824},a=qe(18,null,null,0),a.stateNode=t,a.return=e,e.child=a,we=e,xe=null,!0):!1;default:return!1}}function mw(e){return(e.mode&1)!==0&&(e.flags&128)===0}function gw(e){if(E){var t=xe;if(t){var a=t;if(!gI(e,t)){if(mw(e))throw Error(L(418));t=kt(a.nextSibling);var r=we;t&&gI(e,t)?IS(r,a):(e.flags=e.flags&-4097|2,E=!1,we=e)}}else{if(mw(e))throw Error(L(418));e.flags=e.flags&-4097|2,E=!1,we=e}}}function fI(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function d2(e){if(e!==we)return!1;if(!E)return fI(e),E=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!uw(e.type,e.memoizedProps)),t&&(t=xe)){if(mw(e))throw CS(),Error(L(418));for(;t;)IS(e,t),t=kt(t.nextSibling)}if(fI(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(t===0){xe=kt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++}e=e.nextSibling}xe=null}}else xe=we?kt(e.stateNode.nextSibling):null;return!0}function CS(){for(var e=xe;e;)e=kt(e.nextSibling)}function ja(){xe=we=null,E=!1}function lL(e){Ve===null?Ve=[e]:Ve.push(e)}var Az=nt.ReactCurrentBatchConfig;function Wa(e,t,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(L(309));var r=a.stateNode}if(!r)throw Error(L(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(L(284));if(!a._owner)throw Error(L(290,e))}return e}function h2(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vI(e){var t=e._init;return t(e._payload)}function SS(e){function t(y,u){if(e){var p=y.deletions;p===null?(y.deletions=[u],y.flags|=16):p.push(u)}}function a(y,u){if(!e)return null;for(;u!==null;)t(y,u),u=u.sibling;return null}function r(y,u){for(y=new Map;u!==null;)u.key!==null?y.set(u.key,u):y.set(u.index,u),u=u.sibling;return y}function o(y,u){return y=vt(y,u),y.index=0,y.sibling=null,y}function i(y,u,p){return y.index=p,e?(p=y.alternate,p!==null?(p=p.index,p<u?(y.flags|=2,u):p):(y.flags|=2,u)):(y.flags|=1048576,u)}function l(y){return e&&y.alternate===null&&(y.flags|=2),y}function s(y,u,p,M){return u===null||u.tag!==6?(u=Bx(p,y.mode,M),u.return=y,u):(u=o(u,p),u.return=y,u)}function c(y,u,p,M){var I=p.type;return I===da?m(y,u,p.props.children,M,p.key):u!==null&&(u.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ot&&vI(I)===u.type)?(M=o(u,p.props),M.ref=Wa(y,u,p),M.return=y,M):(M=b2(p.type,p.key,p.props,null,y.mode,M),M.ref=Wa(y,u,p),M.return=y,M)}function h(y,u,p,M){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=Ex(p,y.mode,M),u.return=y,u):(u=o(u,p.children||[]),u.return=y,u)}function m(y,u,p,M,I){return u===null||u.tag!==7?(u=K1(p,y.mode,M,I),u.return=y,u):(u=o(u,p),u.return=y,u)}function k(y,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Bx(""+u,y.mode,p),u.return=y,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case e2:return p=b2(u.type,u.key,u.props,null,y.mode,p),p.ref=Wa(y,null,u),p.return=y,p;case sa:return u=Ex(u,y.mode,p),u.return=y,u;case ot:var M=u._init;return k(y,M(u._payload),p)}if(Xa(u)||Ea(u))return u=K1(u,y.mode,p,null),u.return=y,u;h2(y,u)}return null}function g(y,u,p,M){var I=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return I!==null?null:s(y,u,""+p,M);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case e2:return p.key===I?c(y,u,p,M):null;case sa:return p.key===I?h(y,u,p,M):null;case ot:return I=p._init,g(y,u,I(p._payload),M)}if(Xa(p)||Ea(p))return I!==null?null:m(y,u,p,M,null);h2(y,p)}return null}function x(y,u,p,M,I){if(typeof M=="string"&&M!==""||typeof M=="number")return y=y.get(p)||null,s(u,y,""+M,I);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case e2:return y=y.get(M.key===null?p:M.key)||null,c(u,y,M,I);case sa:return y=y.get(M.key===null?p:M.key)||null,h(u,y,M,I);case ot:var q=M._init;return x(y,u,p,q(M._payload),I)}if(Xa(M)||Ea(M))return y=y.get(p)||null,m(u,y,M,I,null);h2(u,M)}return null}function v(y,u,p,M){for(var I=null,q=null,z=u,j=u=0,D=null;z!==null&&j<p.length;j++){z.index>j?(D=z,z=null):D=z.sibling;var P=g(y,z,p[j],M);if(P===null){z===null&&(z=D);break}e&&z&&P.alternate===null&&t(y,z),u=i(P,u,j),q===null?I=P:q.sibling=P,q=P,z=D}if(j===p.length)return a(y,z),E&&jt(y,j),I;if(z===null){for(;j<p.length;j++)z=k(y,p[j],M),z!==null&&(u=i(z,u,j),q===null?I=z:q.sibling=z,q=z);return E&&jt(y,j),I}for(z=r(y,z);j<p.length;j++)D=x(z,y,j,p[j],M),D!==null&&(e&&D.alternate!==null&&z.delete(D.key===null?j:D.key),u=i(D,u,j),q===null?I=D:q.sibling=D,q=D);return e&&z.forEach(function(K){return t(y,K)}),E&&jt(y,j),I}function f(y,u,p,M){var I=Ea(p);if(typeof I!="function")throw Error(L(150));if(p=I.call(p),p==null)throw Error(L(151));for(var q=I=null,z=u,j=u=0,D=null,P=p.next();z!==null&&!P.done;j++,P=p.next()){z.index>j?(D=z,z=null):D=z.sibling;var K=g(y,z,P.value,M);if(K===null){z===null&&(z=D);break}e&&z&&K.alternate===null&&t(y,z),u=i(K,u,j),q===null?I=K:q.sibling=K,q=K,z=D}if(P.done)return a(y,z),E&&jt(y,j),I;if(z===null){for(;!P.done;j++,P=p.next())P=k(y,P.value,M),P!==null&&(u=i(P,u,j),q===null?I=P:q.sibling=P,q=P);return E&&jt(y,j),I}for(z=r(y,z);!P.done;j++,P=p.next())P=x(z,y,j,P.value,M),P!==null&&(e&&P.alternate!==null&&z.delete(P.key===null?j:P.key),u=i(P,u,j),q===null?I=P:q.sibling=P,q=P);return e&&z.forEach(function(Ra){return t(y,Ra)}),E&&jt(y,j),I}function C(y,u,p,M){if(typeof p=="object"&&p!==null&&p.type===da&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case e2:e:{for(var I=p.key,q=u;q!==null;){if(q.key===I){if(I=p.type,I===da){if(q.tag===7){a(y,q.sibling),u=o(q,p.props.children),u.return=y,y=u;break e}}else if(q.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ot&&vI(I)===q.type){a(y,q.sibling),u=o(q,p.props),u.ref=Wa(y,q,p),u.return=y,y=u;break e}a(y,q);break}else t(y,q);q=q.sibling}p.type===da?(u=K1(p.props.children,y.mode,M,p.key),u.return=y,y=u):(M=b2(p.type,p.key,p.props,null,y.mode,M),M.ref=Wa(y,u,p),M.return=y,y=M)}return l(y);case sa:e:{for(q=p.key;u!==null;){if(u.key===q)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){a(y,u.sibling),u=o(u,p.children||[]),u.return=y,y=u;break e}else{a(y,u);break}else t(y,u);u=u.sibling}u=Ex(p,y.mode,M),u.return=y,y=u}return l(y);case ot:return q=p._init,C(y,u,q(p._payload),M)}if(Xa(p))return v(y,u,p,M);if(Ea(p))return f(y,u,p,M);h2(y,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(a(y,u.sibling),u=o(u,p),u.return=y,y=u):(a(y,u),u=Bx(p,y.mode,M),u.return=y,y=u),l(y)):a(y,u)}return C}var Ha=SS(!0),bS=SS(!1),FM=Ct(null),TM=null,fa=null,cL=null;function sL(){cL=fa=TM=null}function dL(e){var t=FM.current;B(FM),e._currentValue=t}function fw(e,t,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===a)break;e=e.return}}function Ca(e,t){TM=e,cL=fa=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function je(e){var t=e._currentValue;if(cL!==e)if(e={context:e,memoizedValue:t,next:null},fa===null){if(TM===null)throw Error(L(308));fa=e,TM.dependencies={lanes:0,firstContext:e}}else fa=fa.next=e;return t}var $1=null;function hL(e){$1===null?$1=[e]:$1.push(e)}function qS(e,t,a,r){var o=t.interleaved;return o===null?(a.next=a,hL(t)):(a.next=o.next,o.next=a),t.interleaved=a,tt(e,r)}function tt(e,t){e.lanes|=t;var a=e.alternate;for(a!==null&&(a.lanes|=t),a=e,e=e.return;e!==null;)e.childLanes|=t,a=e.alternate,a!==null&&(a.childLanes|=t),a=e,e=e.return;return a.tag===3?a.stateNode:null}var it=!1;function uL(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zS(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ke(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mt(e,t,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,tt(e,a)}return o=r.interleaved,o===null?(t.next=t,hL(r)):(t.next=o.next,o.next=t),r.interleaved=t,tt(e,a)}function x2(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,Qw(e,a)}}function MI(e,t){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var o=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var l={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};i===null?o=i=l:i=i.next=l,a=a.next}while(a!==null);i===null?o=i=t:i=i.next=t}else o=i=t;a={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}function DM(e,t,a,r){var o=e.updateQueue;it=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var c=s,h=c.next;c.next=null,l===null?i=h:l.next=h,l=c;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==l&&(s===null?m.firstBaseUpdate=h:s.next=h,m.lastBaseUpdate=c))}if(i!==null){var k=o.baseState;l=0,m=h=c=null,s=i;do{var g=s.lane,x=s.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,f=s;switch(g=t,x=a,f.tag){case 1:if(v=f.payload,typeof v=="function"){k=v.call(x,k,g);break e}k=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=f.payload,g=typeof v=="function"?v.call(x,k,g):v,g==null)break e;k=Z({},k,g);break e;case 2:it=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[s]:g.push(s))}else x={eventTime:x,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(h=m=x,c=k):m=m.next=x,l|=g;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;g=s,s=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(m===null&&(c=k),o.baseState=c,o.firstBaseUpdate=h,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);aa|=l,e.lanes=l,e.memoizedState=k}}function xI(e,t,a){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=a,typeof o!="function")throw Error(L(191,o));o.call(r)}}}var $n={},We=Ct($n),Tn=Ct($n),Dn=Ct($n);function X1(e){if(e===$n)throw Error(L(174));return e}function yL(e,t){switch(T(Dn,t),T(Tn,e),T(We,$n),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Kx(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Kx(t,e)}B(We),T(We,t)}function Pa(){B(We),B(Tn),B(Dn)}function jS(e){X1(Dn.current);var t=X1(We.current),a=Kx(t,e.type);t!==a&&(T(Tn,e),T(We,a))}function pL(e){Tn.current===e&&(B(We),B(Tn))}var N=Ct(0);function RM(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ux=[];function kL(){for(var e=0;e<Ux.length;e++)Ux[e]._workInProgressVersionPrimary=null;Ux.length=0}var w2=nt.ReactCurrentDispatcher,Vx=nt.ReactCurrentBatchConfig,ta=0,O=null,X=null,ee=null,BM=!1,rn=!1,Rn=0,Uz=0;function oe(){throw Error(L(321))}function mL(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Re(e[a],t[a]))return!1;return!0}function gL(e,t,a,r,o,i){if(ta=i,O=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w2.current=e===null||e.memoizedState===null?Dz:Rz,e=a(r,o),rn){i=0;do{if(rn=!1,Rn=0,25<=i)throw Error(L(301));i+=1,ee=X=null,t.updateQueue=null,w2.current=Bz,e=a(r,o)}while(rn)}if(w2.current=EM,t=X!==null&&X.next!==null,ta=0,ee=X=O=null,BM=!1,t)throw Error(L(300));return e}function fL(){var e=Rn!==0;return Rn=0,e}function Oe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?O.memoizedState=ee=e:ee=ee.next=e,ee}function He(){if(X===null){var e=O.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=ee===null?O.memoizedState:ee.next;if(t!==null)ee=t,X=e;else{if(e===null)throw Error(L(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},ee===null?O.memoizedState=ee=e:ee=ee.next=e}return ee}function Bn(e,t){return typeof t=="function"?t(e):t}function Fx(e){var t=He(),a=t.queue;if(a===null)throw Error(L(311));a.lastRenderedReducer=e;var r=X,o=r.baseQueue,i=a.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,a.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,c=null,h=i;do{var m=h.lane;if((ta&m)===m)c!==null&&(c=c.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var k={lane:m,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};c===null?(s=c=k,l=r):c=c.next=k,O.lanes|=m,aa|=m}h=h.next}while(h!==null&&h!==i);c===null?l=r:c.next=s,Re(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,a.lastRenderedState=r}if(e=a.interleaved,e!==null){o=e;do i=o.lane,O.lanes|=i,aa|=i,o=o.next;while(o!==e)}else o===null&&(a.lanes=0);return[t.memoizedState,a.dispatch]}function Tx(e){var t=He(),a=t.queue;if(a===null)throw Error(L(311));a.lastRenderedReducer=e;var r=a.dispatch,o=a.pending,i=t.memoizedState;if(o!==null){a.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Re(i,t.memoizedState)||(pe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,r]}function HS(){}function PS(e,t){var a=O,r=He(),o=t(),i=!Re(r.memoizedState,o);if(i&&(r.memoizedState=o,pe=!0),r=r.queue,vL(VS.bind(null,a,r,e),[e]),r.getSnapshot!==t||i||ee!==null&&ee.memoizedState.tag&1){if(a.flags|=2048,En(9,US.bind(null,a,r,o,t),void 0,null),te===null)throw Error(L(349));ta&30||AS(a,t,o)}return o}function AS(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=O.updateQueue,t===null?(t={lastEffect:null,stores:null},O.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function US(e,t,a,r){t.value=a,t.getSnapshot=r,FS(t)&&TS(e)}function VS(e,t,a){return a(function(){FS(t)&&TS(e)})}function FS(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Re(e,a)}catch{return!0}}function TS(e){var t=tt(e,1);t!==null&&Te(t,e,1,-1)}function wI(e){var t=Oe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bn,lastRenderedState:e},t.queue=e,e=e.dispatch=Tz.bind(null,O,e),[t.memoizedState,e]}function En(e,t,a,r){return e={tag:e,create:t,destroy:a,deps:r,next:null},t=O.updateQueue,t===null?(t={lastEffect:null,stores:null},O.updateQueue=t,t.lastEffect=e.next=e):(a=t.lastEffect,a===null?t.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,t.lastEffect=e)),e}function DS(){return He().memoizedState}function L2(e,t,a,r){var o=Oe();O.flags|=e,o.memoizedState=En(1|t,a,void 0,r===void 0?null:r)}function ax(e,t,a,r){var o=He();r=r===void 0?null:r;var i=void 0;if(X!==null){var l=X.memoizedState;if(i=l.destroy,r!==null&&mL(r,l.deps)){o.memoizedState=En(t,a,i,r);return}}O.flags|=e,o.memoizedState=En(1|t,a,i,r)}function LI(e,t){return L2(8390656,8,e,t)}function vL(e,t){return ax(2048,8,e,t)}function RS(e,t){return ax(4,2,e,t)}function BS(e,t){return ax(4,4,e,t)}function ES(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function NS(e,t,a){return a=a!=null?a.concat([e]):null,ax(4,4,ES.bind(null,t,e),a)}function ML(){}function OS(e,t){var a=He();t=t===void 0?null:t;var r=a.memoizedState;return r!==null&&t!==null&&mL(t,r[1])?r[0]:(a.memoizedState=[e,t],e)}function ZS(e,t){var a=He();t=t===void 0?null:t;var r=a.memoizedState;return r!==null&&t!==null&&mL(t,r[1])?r[0]:(e=e(),a.memoizedState=[e,t],e)}function YS(e,t,a){return ta&21?(Re(a,t)||(a=XC(),O.lanes|=a,aa|=a,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=a)}function Vz(e,t){var a=F;F=a!==0&&4>a?a:4,e(!0);var r=Vx.transition;Vx.transition={};try{e(!1),t()}finally{F=a,Vx.transition=r}}function WS(){return He().memoizedState}function Fz(e,t,a){var r=ft(e);if(a={lane:r,action:a,hasEagerState:!1,eagerState:null,next:null},_S(e))GS(t,a);else if(a=qS(e,t,a,r),a!==null){var o=de();Te(a,e,r,o),$S(a,t,r)}}function Tz(e,t,a){var r=ft(e),o={lane:r,action:a,hasEagerState:!1,eagerState:null,next:null};if(_S(e))GS(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,a);if(o.hasEagerState=!0,o.eagerState=s,Re(s,l)){var c=t.interleaved;c===null?(o.next=o,hL(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}a=qS(e,t,o,r),a!==null&&(o=de(),Te(a,e,r,o),$S(a,t,r))}}function _S(e){var t=e.alternate;return e===O||t!==null&&t===O}function GS(e,t){rn=BM=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function $S(e,t,a){if(a&4194240){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,Qw(e,a)}}var EM={readContext:je,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},Dz={readContext:je,useCallback:function(e,t){return Oe().memoizedState=[e,t===void 0?null:t],e},useContext:je,useEffect:LI,useImperativeHandle:function(e,t,a){return a=a!=null?a.concat([e]):null,L2(4194308,4,ES.bind(null,t,e),a)},useLayoutEffect:function(e,t){return L2(4194308,4,e,t)},useInsertionEffect:function(e,t){return L2(4,2,e,t)},useMemo:function(e,t){var a=Oe();return t=t===void 0?null:t,e=e(),a.memoizedState=[e,t],e},useReducer:function(e,t,a){var r=Oe();return t=a!==void 0?a(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Fz.bind(null,O,e),[r.memoizedState,e]},useRef:function(e){var t=Oe();return e={current:e},t.memoizedState=e},useState:wI,useDebugValue:ML,useDeferredValue:function(e){return Oe().memoizedState=e},useTransition:function(){var e=wI(!1),t=e[0];return e=Vz.bind(null,e[1]),Oe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,a){var r=O,o=Oe();if(E){if(a===void 0)throw Error(L(407));a=a()}else{if(a=t(),te===null)throw Error(L(349));ta&30||AS(r,t,a)}o.memoizedState=a;var i={value:a,getSnapshot:t};return o.queue=i,LI(VS.bind(null,r,i,e),[e]),r.flags|=2048,En(9,US.bind(null,r,i,a,t),void 0,null),a},useId:function(){var e=Oe(),t=te.identifierPrefix;if(E){var a=Qe,r=Xe;a=(r&~(1<<32-Fe(r)-1)).toString(32)+a,t=":"+t+"R"+a,a=Rn++,0<a&&(t+="H"+a.toString(32)),t+=":"}else a=Uz++,t=":"+t+"r"+a.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Rz={readContext:je,useCallback:OS,useContext:je,useEffect:vL,useImperativeHandle:NS,useInsertionEffect:RS,useLayoutEffect:BS,useMemo:ZS,useReducer:Fx,useRef:DS,useState:function(){return Fx(Bn)},useDebugValue:ML,useDeferredValue:function(e){var t=He();return YS(t,X.memoizedState,e)},useTransition:function(){var e=Fx(Bn)[0],t=He().memoizedState;return[e,t]},useMutableSource:HS,useSyncExternalStore:PS,useId:WS,unstable_isNewReconciler:!1},Bz={readContext:je,useCallback:OS,useContext:je,useEffect:vL,useImperativeHandle:NS,useInsertionEffect:RS,useLayoutEffect:BS,useMemo:ZS,useReducer:Tx,useRef:DS,useState:function(){return Tx(Bn)},useDebugValue:ML,useDeferredValue:function(e){var t=He();return X===null?t.memoizedState=e:YS(t,X.memoizedState,e)},useTransition:function(){var e=Tx(Bn)[0],t=He().memoizedState;return[e,t]},useMutableSource:HS,useSyncExternalStore:PS,useId:WS,unstable_isNewReconciler:!1};function Ae(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var a in e)t[a]===void 0&&(t[a]=e[a]);return t}return t}function vw(e,t,a,r){t=e.memoizedState,a=a(r,t),a=a==null?t:Z({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var nx={isMounted:function(e){return(e=e._reactInternals)?oa(e)===e:!1},enqueueSetState:function(e,t,a){e=e._reactInternals;var r=de(),o=ft(e),i=Ke(r,o);i.payload=t,a!=null&&(i.callback=a),t=mt(e,i,o),t!==null&&(Te(t,e,o,r),x2(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var r=de(),o=ft(e),i=Ke(r,o);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=mt(e,i,o),t!==null&&(Te(t,e,o,r),x2(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=de(),r=ft(e),o=Ke(a,r);o.tag=2,t!=null&&(o.callback=t),t=mt(e,o,r),t!==null&&(Te(t,e,r,a),x2(t,e,r))}};function II(e,t,a,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!An(a,r)||!An(o,i):!0}function XS(e,t,a){var r=!1,o=wt,i=t.contextType;return typeof i=="object"&&i!==null?i=je(i):(o=me(t)?J1:ce.current,r=t.contextTypes,i=(r=r!=null)?za(e,o):wt),t=new t(a,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=nx,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function CI(e,t,a,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,r),t.state!==e&&nx.enqueueReplaceState(t,t.state,null)}function Mw(e,t,a,r){var o=e.stateNode;o.props=a,o.state=e.memoizedState,o.refs={},uL(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=je(i):(i=me(t)?J1:ce.current,o.context=za(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(vw(e,t,i,a),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&nx.enqueueReplaceState(o,o.state,null),DM(e,a,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Aa(e,t){try{var a="",r=t;do a+=pq(r),r=r.return;while(r);var o=a}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Dx(e,t,a){return{value:e,source:null,stack:a??null,digest:t??null}}function xw(e,t){try{console.error(t.value)}catch(a){setTimeout(function(){throw a})}}var Ez=typeof WeakMap=="function"?WeakMap:Map;function QS(e,t,a){a=Ke(-1,a),a.tag=3,a.payload={element:null};var r=t.value;return a.callback=function(){OM||(OM=!0,Hw=r),xw(e,t)},a}function KS(e,t,a){a=Ke(-1,a),a.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;a.payload=function(){return r(o)},a.callback=function(){xw(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(a.callback=function(){xw(e,t),typeof r!="function"&&(gt===null?gt=new Set([this]):gt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),a}function SI(e,t,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Ez;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(a)||(o.add(a),e=tj.bind(null,e,t,a),t.then(e,e))}function bI(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qI(e,t,a,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(t=Ke(-1,1),t.tag=2,mt(a,t,1))),a.lanes|=1),e)}var Nz=nt.ReactCurrentOwner,pe=!1;function se(e,t,a,r){t.child=e===null?bS(t,null,a,r):Ha(t,e.child,a,r)}function zI(e,t,a,r,o){a=a.render;var i=t.ref;return Ca(t,o),r=gL(e,t,a,r,i,o),a=fL(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,at(e,t,o)):(E&&a&&oL(t),t.flags|=1,se(e,t,r,o),t.child)}function jI(e,t,a,r,o){if(e===null){var i=a.type;return typeof i=="function"&&!qL(i)&&i.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(t.tag=15,t.type=i,JS(e,t,i,r,o)):(e=b2(a.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(a=a.compare,a=a!==null?a:An,a(l,r)&&e.ref===t.ref)return at(e,t,o)}return t.flags|=1,e=vt(i,r),e.ref=t.ref,e.return=t,t.child=e}function JS(e,t,a,r,o){if(e!==null){var i=e.memoizedProps;if(An(i,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,at(e,t,o)}return ww(e,t,a,r,o)}function eb(e,t,a){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},T(Ma,Me),Me|=a;else{if(!(a&1073741824))return e=i!==null?i.baseLanes|a:a,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,T(Ma,Me),Me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:a,T(Ma,Me),Me|=r}else i!==null?(r=i.baseLanes|a,t.memoizedState=null):r=a,T(Ma,Me),Me|=r;return se(e,t,o,a),t.child}function tb(e,t){var a=t.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(t.flags|=512,t.flags|=2097152)}function ww(e,t,a,r,o){var i=me(a)?J1:ce.current;return i=za(t,i),Ca(t,o),a=gL(e,t,a,r,i,o),r=fL(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,at(e,t,o)):(E&&r&&oL(t),t.flags|=1,se(e,t,a,o),t.child)}function HI(e,t,a,r,o){if(me(a)){var i=!0;AM(t)}else i=!1;if(Ca(t,o),t.stateNode===null)I2(e,t),XS(t,a,r),Mw(t,a,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var c=l.context,h=a.contextType;typeof h=="object"&&h!==null?h=je(h):(h=me(a)?J1:ce.current,h=za(t,h));var m=a.getDerivedStateFromProps,k=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";k||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||c!==h)&&CI(t,l,r,h),it=!1;var g=t.memoizedState;l.state=g,DM(t,r,l,o),c=t.memoizedState,s!==r||g!==c||ke.current||it?(typeof m=="function"&&(vw(t,a,m,r),c=t.memoizedState),(s=it||II(t,a,s,r,g,c,h))?(k||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=h,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,zS(e,t),s=t.memoizedProps,h=t.type===t.elementType?s:Ae(t.type,s),l.props=h,k=t.pendingProps,g=l.context,c=a.contextType,typeof c=="object"&&c!==null?c=je(c):(c=me(a)?J1:ce.current,c=za(t,c));var x=a.getDerivedStateFromProps;(m=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==k||g!==c)&&CI(t,l,r,c),it=!1,g=t.memoizedState,l.state=g,DM(t,r,l,o);var v=t.memoizedState;s!==k||g!==v||ke.current||it?(typeof x=="function"&&(vw(t,a,x,r),v=t.memoizedState),(h=it||II(t,a,h,r,g,v,c)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=c,r=h):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Lw(e,t,a,r,i,o)}function Lw(e,t,a,r,o,i){tb(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&mI(t,a,!1),at(e,t,i);r=t.stateNode,Nz.current=t;var s=l&&typeof a.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Ha(t,e.child,null,i),t.child=Ha(t,null,s,i)):se(e,t,s,i),t.memoizedState=r.state,o&&mI(t,a,!0),t.child}function ab(e){var t=e.stateNode;t.pendingContext?kI(e,t.pendingContext,t.pendingContext!==t.context):t.context&&kI(e,t.context,!1),yL(e,t.containerInfo)}function PI(e,t,a,r,o){return ja(),lL(o),t.flags|=256,se(e,t,a,r),t.child}var Iw={dehydrated:null,treeContext:null,retryLane:0};function Cw(e){return{baseLanes:e,cachePool:null,transitions:null}}function nb(e,t,a){var r=t.pendingProps,o=N.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),T(N,o&1),e===null)return gw(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=ix(l,r,0,null),e=K1(e,r,a,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Cw(a),t.memoizedState=Iw,e):xL(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Oz(e,t,l,r,s,o,a);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=vt(o,c),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=vt(s,i):(i=K1(i,l,a,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Cw(a):{baseLanes:l.baseLanes|a,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~a,t.memoizedState=Iw,r}return i=e.child,e=i.sibling,r=vt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=a),r.return=t,r.sibling=null,e!==null&&(a=t.deletions,a===null?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=r,t.memoizedState=null,r}function xL(e,t){return t=ix({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function u2(e,t,a,r){return r!==null&&lL(r),Ha(t,e.child,null,a),e=xL(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oz(e,t,a,r,o,i,l){if(a)return t.flags&256?(t.flags&=-257,r=Dx(Error(L(422))),u2(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=ix({mode:"visible",children:r.children},o,0,null),i=K1(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Ha(t,e.child,null,l),t.child.memoizedState=Cw(l),t.memoizedState=Iw,i);if(!(t.mode&1))return u2(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(L(419)),r=Dx(i,r,void 0),u2(e,t,l,r)}if(s=(l&e.childLanes)!==0,pe||s){if(r=te,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,tt(e,o),Te(r,e,o,-1))}return bL(),r=Dx(Error(L(421))),u2(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=aj.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,xe=kt(o.nextSibling),we=t,E=!0,Ve=null,e!==null&&(Se[be++]=Xe,Se[be++]=Qe,Se[be++]=ea,Xe=e.id,Qe=e.overflow,ea=t),t=xL(t,r.children),t.flags|=4096,t)}function AI(e,t,a){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),fw(e.return,t,a)}function Rx(e,t,a,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=a,i.tailMode=o)}function rb(e,t,a){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(se(e,t,r.children,a),r=N.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&AI(e,a,t);else if(e.tag===19)AI(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(T(N,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(a=t.child,o=null;a!==null;)e=a.alternate,e!==null&&RM(e)===null&&(o=a),a=a.sibling;a=o,a===null?(o=t.child,t.child=null):(o=a.sibling,a.sibling=null),Rx(t,!1,o,a,i);break;case"backwards":for(a=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&RM(e)===null){t.child=o;break}e=o.sibling,o.sibling=a,a=o,o=e}Rx(t,!0,a,null,i);break;case"together":Rx(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function I2(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function at(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),aa|=t.lanes,!(a&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,a=vt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=vt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Zz(e,t,a){switch(t.tag){case 3:ab(t),ja();break;case 5:jS(t);break;case 1:me(t.type)&&AM(t);break;case 4:yL(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;T(FM,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(T(N,N.current&1),t.flags|=128,null):a&t.child.childLanes?nb(e,t,a):(T(N,N.current&1),e=at(e,t,a),e!==null?e.sibling:null);T(N,N.current&1);break;case 19:if(r=(a&t.childLanes)!==0,e.flags&128){if(r)return rb(e,t,a);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),T(N,N.current),r)break;return null;case 22:case 23:return t.lanes=0,eb(e,t,a)}return at(e,t,a)}var ob,Sw,ib,lb;ob=function(e,t){for(var a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};Sw=function(){};ib=function(e,t,a,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,X1(We.current);var i=null;switch(a){case"input":o=Gx(e,o),r=Gx(e,r),i=[];break;case"select":o=Z({},o,{value:void 0}),r=Z({},r,{value:void 0}),i=[];break;case"textarea":o=Qx(e,o),r=Qx(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=HM)}Jx(a,r);var l;a=null;for(h in o)if(!r.hasOwnProperty(h)&&o.hasOwnProperty(h)&&o[h]!=null)if(h==="style"){var s=o[h];for(l in s)s.hasOwnProperty(l)&&(a||(a={}),a[l]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Sn.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var c=r[h];if(s=o!=null?o[h]:void 0,r.hasOwnProperty(h)&&c!==s&&(c!=null||s!=null))if(h==="style")if(s){for(l in s)!s.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(a||(a={}),a[l]="");for(l in c)c.hasOwnProperty(l)&&s[l]!==c[l]&&(a||(a={}),a[l]=c[l])}else a||(i||(i=[]),i.push(h,a)),a=c;else h==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(i=i||[]).push(h,c)):h==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(h,""+c):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Sn.hasOwnProperty(h)?(c!=null&&h==="onScroll"&&R("scroll",e),i||s===c||(i=[])):(i=i||[]).push(h,c))}a&&(i=i||[]).push("style",a);var h=i;(t.updateQueue=h)&&(t.flags|=4)}};lb=function(e,t,a,r){a!==r&&(t.flags|=4)};function _a(e,t){if(!E)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(t)for(var o=e.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=a,t}function Yz(e,t,a){var r=t.pendingProps;switch(iL(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return me(t.type)&&PM(),ie(t),null;case 3:return r=t.stateNode,Pa(),B(ke),B(ce),kL(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(d2(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ve!==null&&(Uw(Ve),Ve=null))),Sw(e,t),ie(t),null;case 5:pL(t);var o=X1(Dn.current);if(a=t.type,e!==null&&t.stateNode!=null)ib(e,t,a,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return ie(t),null}if(e=X1(We.current),d2(t)){r=t.stateNode,a=t.type;var i=t.memoizedProps;switch(r[Ze]=t,r[Fn]=i,e=(t.mode&1)!==0,a){case"dialog":R("cancel",r),R("close",r);break;case"iframe":case"object":case"embed":R("load",r);break;case"video":case"audio":for(o=0;o<Ka.length;o++)R(Ka[o],r);break;case"source":R("error",r);break;case"img":case"image":case"link":R("error",r),R("load",r);break;case"details":R("toggle",r);break;case"input":NL(r,i),R("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},R("invalid",r);break;case"textarea":ZL(r,i),R("invalid",r)}Jx(a,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&s2(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&s2(r.textContent,s,e),o=["children",""+s]):Sn.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&R("scroll",r)}switch(a){case"input":t2(r),OL(r,i,!0);break;case"textarea":t2(r),YL(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=HM)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=VC(a)),e==="http://www.w3.org/1999/xhtml"?a==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(a,{is:r.is}):(e=l.createElement(a),a==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,a),e[Ze]=t,e[Fn]=r,ob(e,t,!1,!1),t.stateNode=e;e:{switch(l=ew(a,r),a){case"dialog":R("cancel",e),R("close",e),o=r;break;case"iframe":case"object":case"embed":R("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ka.length;o++)R(Ka[o],e);o=r;break;case"source":R("error",e),o=r;break;case"img":case"image":case"link":R("error",e),R("load",e),o=r;break;case"details":R("toggle",e),o=r;break;case"input":NL(e,r),o=Gx(e,r),R("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Z({},r,{value:void 0}),R("invalid",e);break;case"textarea":ZL(e,r),o=Qx(e,r),R("invalid",e);break;default:o=r}Jx(a,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var c=s[i];i==="style"?DC(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&FC(e,c)):i==="children"?typeof c=="string"?(a!=="textarea"||c!=="")&&bn(e,c):typeof c=="number"&&bn(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Sn.hasOwnProperty(i)?c!=null&&i==="onScroll"&&R("scroll",e):c!=null&&Yw(e,i,c,l))}switch(a){case"input":t2(e),OL(e,r,!1);break;case"textarea":t2(e),YL(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?xa(e,!!r.multiple,i,!1):r.defaultValue!=null&&xa(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=HM)}switch(a){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)lb(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(a=X1(Dn.current),X1(We.current),d2(t)){if(r=t.stateNode,a=t.memoizedProps,r[Ze]=t,(i=r.nodeValue!==a)&&(e=we,e!==null))switch(e.tag){case 3:s2(r.nodeValue,a,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&s2(r.nodeValue,a,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(a.nodeType===9?a:a.ownerDocument).createTextNode(r),r[Ze]=t,t.stateNode=r}return ie(t),null;case 13:if(B(N),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(E&&xe!==null&&t.mode&1&&!(t.flags&128))CS(),ja(),t.flags|=98560,i=!1;else if(i=d2(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(L(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(L(317));i[Ze]=t}else ja(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),i=!1}else Ve!==null&&(Uw(Ve),Ve=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=a,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||N.current&1?Q===0&&(Q=3):bL())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return Pa(),Sw(e,t),e===null&&Un(t.stateNode.containerInfo),ie(t),null;case 10:return dL(t.type._context),ie(t),null;case 17:return me(t.type)&&PM(),ie(t),null;case 19:if(B(N),i=t.memoizedState,i===null)return ie(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)_a(i,!1);else{if(Q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=RM(e),l!==null){for(t.flags|=128,_a(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=a,a=t.child;a!==null;)i=a,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return T(N,N.current&1|2),t.child}e=e.sibling}i.tail!==null&&_()>Ua&&(t.flags|=128,r=!0,_a(i,!1),t.lanes=4194304)}else{if(!r)if(e=RM(l),e!==null){if(t.flags|=128,r=!0,a=e.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),_a(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!E)return ie(t),null}else 2*_()-i.renderingStartTime>Ua&&a!==1073741824&&(t.flags|=128,r=!0,_a(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(a=i.last,a!==null?a.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=_(),t.sibling=null,a=N.current,T(N,r?a&1|2:a&1),t):(ie(t),null);case 22:case 23:return SL(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Me&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function Wz(e,t){switch(iL(t),t.tag){case 1:return me(t.type)&&PM(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pa(),B(ke),B(ce),kL(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return pL(t),null;case 13:if(B(N),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(N),null;case 4:return Pa(),null;case 10:return dL(t.type._context),null;case 22:case 23:return SL(),null;case 24:return null;default:return null}}var y2=!1,le=!1,_z=typeof WeakSet=="function"?WeakSet:Set,S=null;function va(e,t){var a=e.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(r){Y(e,t,r)}else a.current=null}function bw(e,t,a){try{a()}catch(r){Y(e,t,r)}}var UI=!1;function Gz(e,t){if(dw=qM,e=uS(),rL(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var l=0,s=-1,c=-1,h=0,m=0,k=e,g=null;t:for(;;){for(var x;k!==a||o!==0&&k.nodeType!==3||(s=l+o),k!==i||r!==0&&k.nodeType!==3||(c=l+r),k.nodeType===3&&(l+=k.nodeValue.length),(x=k.firstChild)!==null;)g=k,k=x;for(;;){if(k===e)break t;if(g===a&&++h===o&&(s=l),g===i&&++m===r&&(c=l),(x=k.nextSibling)!==null)break;k=g,g=k.parentNode}k=x}a=s===-1||c===-1?null:{start:s,end:c}}else a=null}a=a||{start:0,end:0}}else a=null;for(hw={focusedElem:e,selectionRange:a},qM=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var f=v.memoizedProps,C=v.memoizedState,y=t.stateNode,u=y.getSnapshotBeforeUpdate(t.elementType===t.type?f:Ae(t.type,f),C);y.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(M){Y(t,t.return,M)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return v=UI,UI=!1,v}function on(e,t,a){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&bw(t,a,i)}o=o.next}while(o!==r)}}function rx(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var a=t=t.next;do{if((a.tag&e)===e){var r=a.create;a.destroy=r()}a=a.next}while(a!==t)}}function qw(e){var t=e.ref;if(t!==null){var a=e.stateNode;switch(e.tag){case 5:e=a;break;default:e=a}typeof t=="function"?t(e):t.current=e}}function cb(e){var t=e.alternate;t!==null&&(e.alternate=null,cb(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ze],delete t[Fn],delete t[pw],delete t[jz],delete t[Hz])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sb(e){return e.tag===5||e.tag===3||e.tag===4}function VI(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zw(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?a.nodeType===8?a.parentNode.insertBefore(e,t):a.insertBefore(e,t):(a.nodeType===8?(t=a.parentNode,t.insertBefore(e,a)):(t=a,t.appendChild(e)),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=HM));else if(r!==4&&(e=e.child,e!==null))for(zw(e,t,a),e=e.sibling;e!==null;)zw(e,t,a),e=e.sibling}function jw(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(jw(e,t,a),e=e.sibling;e!==null;)jw(e,t,a),e=e.sibling}var ae=null,Ue=!1;function rt(e,t,a){for(a=a.child;a!==null;)db(e,t,a),a=a.sibling}function db(e,t,a){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(XM,a)}catch{}switch(a.tag){case 5:le||va(a,t);case 6:var r=ae,o=Ue;ae=null,rt(e,t,a),ae=r,Ue=o,ae!==null&&(Ue?(e=ae,a=a.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)):ae.removeChild(a.stateNode));break;case 18:ae!==null&&(Ue?(e=ae,a=a.stateNode,e.nodeType===8?Px(e.parentNode,a):e.nodeType===1&&Px(e,a),Hn(e)):Px(ae,a.stateNode));break;case 4:r=ae,o=Ue,ae=a.stateNode.containerInfo,Ue=!0,rt(e,t,a),ae=r,Ue=o;break;case 0:case 11:case 14:case 15:if(!le&&(r=a.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&bw(a,t,l),o=o.next}while(o!==r)}rt(e,t,a);break;case 1:if(!le&&(va(a,t),r=a.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=a.memoizedProps,r.state=a.memoizedState,r.componentWillUnmount()}catch(s){Y(a,t,s)}rt(e,t,a);break;case 21:rt(e,t,a);break;case 22:a.mode&1?(le=(r=le)||a.memoizedState!==null,rt(e,t,a),le=r):rt(e,t,a);break;default:rt(e,t,a)}}function FI(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new _z),t.forEach(function(r){var o=nj.bind(null,e,r);a.has(r)||(a.add(r),r.then(o,o))})}}function Pe(e,t){var a=t.deletions;if(a!==null)for(var r=0;r<a.length;r++){var o=a[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ae=s.stateNode,Ue=!1;break e;case 3:ae=s.stateNode.containerInfo,Ue=!0;break e;case 4:ae=s.stateNode.containerInfo,Ue=!0;break e}s=s.return}if(ae===null)throw Error(L(160));db(i,l,o),ae=null,Ue=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(h){Y(o,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hb(t,e),t=t.sibling}function hb(e,t){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),Be(e),r&4){try{on(3,e,e.return),rx(3,e)}catch(f){Y(e,e.return,f)}try{on(5,e,e.return)}catch(f){Y(e,e.return,f)}}break;case 1:Pe(t,e),Be(e),r&512&&a!==null&&va(a,a.return);break;case 5:if(Pe(t,e),Be(e),r&512&&a!==null&&va(a,a.return),e.flags&32){var o=e.stateNode;try{bn(o,"")}catch(f){Y(e,e.return,f)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=a!==null?a.memoizedProps:i,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&AC(o,i),ew(s,l);var h=ew(s,i);for(l=0;l<c.length;l+=2){var m=c[l],k=c[l+1];m==="style"?DC(o,k):m==="dangerouslySetInnerHTML"?FC(o,k):m==="children"?bn(o,k):Yw(o,m,k,h)}switch(s){case"input":$x(o,i);break;case"textarea":UC(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?xa(o,!!i.multiple,x,!1):g!==!!i.multiple&&(i.defaultValue!=null?xa(o,!!i.multiple,i.defaultValue,!0):xa(o,!!i.multiple,i.multiple?[]:"",!1))}o[Fn]=i}catch(f){Y(e,e.return,f)}}break;case 6:if(Pe(t,e),Be(e),r&4){if(e.stateNode===null)throw Error(L(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(f){Y(e,e.return,f)}}break;case 3:if(Pe(t,e),Be(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Hn(t.containerInfo)}catch(f){Y(e,e.return,f)}break;case 4:Pe(t,e),Be(e);break;case 13:Pe(t,e),Be(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(IL=_())),r&4&&FI(e);break;case 22:if(m=a!==null&&a.memoizedState!==null,e.mode&1?(le=(h=le)||m,Pe(t,e),le=h):Pe(t,e),Be(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!m&&e.mode&1)for(S=e,m=e.child;m!==null;){for(k=S=m;S!==null;){switch(g=S,x=g.child,g.tag){case 0:case 11:case 14:case 15:on(4,g,g.return);break;case 1:va(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,a=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(f){Y(r,a,f)}}break;case 5:va(g,g.return);break;case 22:if(g.memoizedState!==null){DI(k);continue}}x!==null?(x.return=g,S=x):DI(k)}m=m.sibling}e:for(m=null,k=e;;){if(k.tag===5){if(m===null){m=k;try{o=k.stateNode,h?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=k.stateNode,c=k.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=TC("display",l))}catch(f){Y(e,e.return,f)}}}else if(k.tag===6){if(m===null)try{k.stateNode.nodeValue=h?"":k.memoizedProps}catch(f){Y(e,e.return,f)}}else if((k.tag!==22&&k.tag!==23||k.memoizedState===null||k===e)&&k.child!==null){k.child.return=k,k=k.child;continue}if(k===e)break e;for(;k.sibling===null;){if(k.return===null||k.return===e)break e;m===k&&(m=null),k=k.return}m===k&&(m=null),k.sibling.return=k.return,k=k.sibling}}break;case 19:Pe(t,e),Be(e),r&4&&FI(e);break;case 21:break;default:Pe(t,e),Be(e)}}function Be(e){var t=e.flags;if(t&2){try{e:{for(var a=e.return;a!==null;){if(sb(a)){var r=a;break e}a=a.return}throw Error(L(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(bn(o,""),r.flags&=-33);var i=VI(e);jw(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=VI(e);zw(e,s,l);break;default:throw Error(L(161))}}catch(c){Y(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $z(e,t,a){S=e,ub(e)}function ub(e,t,a){for(var r=(e.mode&1)!==0;S!==null;){var o=S,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||y2;if(!l){var s=o.alternate,c=s!==null&&s.memoizedState!==null||le;s=y2;var h=le;if(y2=l,(le=c)&&!h)for(S=o;S!==null;)l=S,c=l.child,l.tag===22&&l.memoizedState!==null?RI(o):c!==null?(c.return=l,S=c):RI(o);for(;i!==null;)S=i,ub(i),i=i.sibling;S=o,y2=s,le=h}TI(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,S=i):TI(e)}}function TI(e){for(;S!==null;){var t=S;if(t.flags&8772){var a=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||rx(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(a===null)r.componentDidMount();else{var o=t.elementType===t.type?a.memoizedProps:Ae(t.type,a.memoizedProps);r.componentDidUpdate(o,a.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&xI(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(a=null,t.child!==null)switch(t.child.tag){case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}xI(t,l,a)}break;case 5:var s=t.stateNode;if(a===null&&t.flags&4){a=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&a.focus();break;case"img":c.src&&(a.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var m=h.memoizedState;if(m!==null){var k=m.dehydrated;k!==null&&Hn(k)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}le||t.flags&512&&qw(t)}catch(g){Y(t,t.return,g)}}if(t===e){S=null;break}if(a=t.sibling,a!==null){a.return=t.return,S=a;break}S=t.return}}function DI(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var a=t.sibling;if(a!==null){a.return=t.return,S=a;break}S=t.return}}function RI(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var a=t.return;try{rx(4,t)}catch(c){Y(t,a,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){Y(t,o,c)}}var i=t.return;try{qw(t)}catch(c){Y(t,i,c)}break;case 5:var l=t.return;try{qw(t)}catch(c){Y(t,l,c)}}}catch(c){Y(t,t.return,c)}if(t===e){S=null;break}var s=t.sibling;if(s!==null){s.return=t.return,S=s;break}S=t.return}}var Xz=Math.ceil,NM=nt.ReactCurrentDispatcher,wL=nt.ReactCurrentOwner,ze=nt.ReactCurrentBatchConfig,V=0,te=null,G=null,ne=0,Me=0,Ma=Ct(0),Q=0,Nn=null,aa=0,ox=0,LL=0,ln=null,ye=null,IL=0,Ua=1/0,Ge=null,OM=!1,Hw=null,gt=null,p2=!1,dt=null,ZM=0,cn=0,Pw=null,C2=-1,S2=0;function de(){return V&6?_():C2!==-1?C2:C2=_()}function ft(e){return e.mode&1?V&2&&ne!==0?ne&-ne:Az.transition!==null?(S2===0&&(S2=XC()),S2):(e=F,e!==0||(e=window.event,e=e===void 0?16:nS(e.type)),e):1}function Te(e,t,a,r){if(50<cn)throw cn=0,Pw=null,Error(L(185));Wn(e,a,r),(!(V&2)||e!==te)&&(e===te&&(!(V&2)&&(ox|=a),Q===4&&ct(e,ne)),ge(e,r),a===1&&V===0&&!(t.mode&1)&&(Ua=_()+500,tx&&St()))}function ge(e,t){var a=e.callbackNode;Aq(e,t);var r=bM(e,e===te?ne:0);if(r===0)a!==null&&GL(a),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(a!=null&&GL(a),t===1)e.tag===0?Pz(BI.bind(null,e)):wS(BI.bind(null,e)),qz(function(){!(V&6)&&St()}),a=null;else{switch(QC(r)){case 1:a=Xw;break;case 4:a=GC;break;case 16:a=SM;break;case 536870912:a=$C;break;default:a=SM}a=Mb(a,yb.bind(null,e))}e.callbackPriority=t,e.callbackNode=a}}function yb(e,t){if(C2=-1,S2=0,V&6)throw Error(L(327));var a=e.callbackNode;if(Sa()&&e.callbackNode!==a)return null;var r=bM(e,e===te?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=YM(e,r);else{t=r;var o=V;V|=2;var i=kb();(te!==e||ne!==t)&&(Ge=null,Ua=_()+500,Q1(e,t));do try{Jz();break}catch(s){pb(e,s)}while(!0);sL(),NM.current=i,V=o,G!==null?t=0:(te=null,ne=0,t=Q)}if(t!==0){if(t===2&&(o=ow(e),o!==0&&(r=o,t=Aw(e,o))),t===1)throw a=Nn,Q1(e,0),ct(e,r),ge(e,_()),a;if(t===6)ct(e,r);else{if(o=e.current.alternate,!(r&30)&&!Qz(o)&&(t=YM(e,r),t===2&&(i=ow(e),i!==0&&(r=i,t=Aw(e,i))),t===1))throw a=Nn,Q1(e,0),ct(e,r),ge(e,_()),a;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:Ht(e,ye,Ge);break;case 3:if(ct(e,r),(r&130023424)===r&&(t=IL+500-_(),10<t)){if(bM(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=yw(Ht.bind(null,e,ye,Ge),t);break}Ht(e,ye,Ge);break;case 4:if(ct(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Fe(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=_()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Xz(r/1960))-r,10<r){e.timeoutHandle=yw(Ht.bind(null,e,ye,Ge),r);break}Ht(e,ye,Ge);break;case 5:Ht(e,ye,Ge);break;default:throw Error(L(329))}}}return ge(e,_()),e.callbackNode===a?yb.bind(null,e):null}function Aw(e,t){var a=ln;return e.current.memoizedState.isDehydrated&&(Q1(e,t).flags|=256),e=YM(e,t),e!==2&&(t=ye,ye=a,t!==null&&Uw(t)),e}function Uw(e){ye===null?ye=e:ye.push.apply(ye,e)}function Qz(e){for(var t=e;;){if(t.flags&16384){var a=t.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var r=0;r<a.length;r++){var o=a[r],i=o.getSnapshot;o=o.value;try{if(!Re(i(),o))return!1}catch{return!1}}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ct(e,t){for(t&=~LL,t&=~ox,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var a=31-Fe(t),r=1<<a;e[a]=-1,t&=~r}}function BI(e){if(V&6)throw Error(L(327));Sa();var t=bM(e,0);if(!(t&1))return ge(e,_()),null;var a=YM(e,t);if(e.tag!==0&&a===2){var r=ow(e);r!==0&&(t=r,a=Aw(e,r))}if(a===1)throw a=Nn,Q1(e,0),ct(e,t),ge(e,_()),a;if(a===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ht(e,ye,Ge),ge(e,_()),null}function CL(e,t){var a=V;V|=1;try{return e(t)}finally{V=a,V===0&&(Ua=_()+500,tx&&St())}}function na(e){dt!==null&&dt.tag===0&&!(V&6)&&Sa();var t=V;V|=1;var a=ze.transition,r=F;try{if(ze.transition=null,F=1,e)return e()}finally{F=r,ze.transition=a,V=t,!(V&6)&&St()}}function SL(){Me=Ma.current,B(Ma)}function Q1(e,t){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,bz(a)),G!==null)for(a=G.return;a!==null;){var r=a;switch(iL(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&PM();break;case 3:Pa(),B(ke),B(ce),kL();break;case 5:pL(r);break;case 4:Pa();break;case 13:B(N);break;case 19:B(N);break;case 10:dL(r.type._context);break;case 22:case 23:SL()}a=a.return}if(te=e,G=e=vt(e.current,null),ne=Me=t,Q=0,Nn=null,LL=ox=aa=0,ye=ln=null,$1!==null){for(t=0;t<$1.length;t++)if(a=$1[t],r=a.interleaved,r!==null){a.interleaved=null;var o=r.next,i=a.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}a.pending=r}$1=null}return e}function pb(e,t){do{var a=G;try{if(sL(),w2.current=EM,BM){for(var r=O.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}BM=!1}if(ta=0,ee=X=O=null,rn=!1,Rn=0,wL.current=null,a===null||a.return===null){Q=1,Nn=t,G=null;break}e:{var i=e,l=a.return,s=a,c=t;if(t=ne,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var h=c,m=s,k=m.tag;if(!(m.mode&1)&&(k===0||k===11||k===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var x=bI(l);if(x!==null){x.flags&=-257,qI(x,l,s,i,t),x.mode&1&&SI(i,h,t),t=x,c=h;var v=t.updateQueue;if(v===null){var f=new Set;f.add(c),t.updateQueue=f}else v.add(c);break e}else{if(!(t&1)){SI(i,h,t),bL();break e}c=Error(L(426))}}else if(E&&s.mode&1){var C=bI(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),qI(C,l,s,i,t),lL(Aa(c,s));break e}}i=c=Aa(c,s),Q!==4&&(Q=2),ln===null?ln=[i]:ln.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var y=QS(i,c,t);MI(i,y);break e;case 1:s=c;var u=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(gt===null||!gt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var M=KS(i,s,t);MI(i,M);break e}}i=i.return}while(i!==null)}gb(a)}catch(I){t=I,G===a&&a!==null&&(G=a=a.return);continue}break}while(!0)}function kb(){var e=NM.current;return NM.current=EM,e===null?EM:e}function bL(){(Q===0||Q===3||Q===2)&&(Q=4),te===null||!(aa&268435455)&&!(ox&268435455)||ct(te,ne)}function YM(e,t){var a=V;V|=2;var r=kb();(te!==e||ne!==t)&&(Ge=null,Q1(e,t));do try{Kz();break}catch(o){pb(e,o)}while(!0);if(sL(),V=a,NM.current=r,G!==null)throw Error(L(261));return te=null,ne=0,Q}function Kz(){for(;G!==null;)mb(G)}function Jz(){for(;G!==null&&!Iq();)mb(G)}function mb(e){var t=vb(e.alternate,e,Me);e.memoizedProps=e.pendingProps,t===null?gb(e):G=t,wL.current=null}function gb(e){var t=e;do{var a=t.alternate;if(e=t.return,t.flags&32768){if(a=Wz(a,t),a!==null){a.flags&=32767,G=a;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Q=6,G=null;return}}else if(a=Yz(a,t,Me),a!==null){G=a;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);Q===0&&(Q=5)}function Ht(e,t,a){var r=F,o=ze.transition;try{ze.transition=null,F=1,ej(e,t,a,r)}finally{ze.transition=o,F=r}return null}function ej(e,t,a,r){do Sa();while(dt!==null);if(V&6)throw Error(L(327));a=e.finishedWork;var o=e.finishedLanes;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var i=a.lanes|a.childLanes;if(Uq(e,i),e===te&&(G=te=null,ne=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||p2||(p2=!0,Mb(SM,function(){return Sa(),null})),i=(a.flags&15990)!==0,a.subtreeFlags&15990||i){i=ze.transition,ze.transition=null;var l=F;F=1;var s=V;V|=4,wL.current=null,Gz(e,a),hb(a,e),Mz(hw),qM=!!dw,hw=dw=null,e.current=a,$z(a),Cq(),V=s,F=l,ze.transition=i}else e.current=a;if(p2&&(p2=!1,dt=e,ZM=o),i=e.pendingLanes,i===0&&(gt=null),qq(a.stateNode),ge(e,_()),t!==null)for(r=e.onRecoverableError,a=0;a<t.length;a++)o=t[a],r(o.value,{componentStack:o.stack,digest:o.digest});if(OM)throw OM=!1,e=Hw,Hw=null,e;return ZM&1&&e.tag!==0&&Sa(),i=e.pendingLanes,i&1?e===Pw?cn++:(cn=0,Pw=e):cn=0,St(),null}function Sa(){if(dt!==null){var e=QC(ZM),t=ze.transition,a=F;try{if(ze.transition=null,F=16>e?16:e,dt===null)var r=!1;else{if(e=dt,dt=null,ZM=0,V&6)throw Error(L(331));var o=V;for(V|=4,S=e.current;S!==null;){var i=S,l=i.child;if(S.flags&16){var s=i.deletions;if(s!==null){for(var c=0;c<s.length;c++){var h=s[c];for(S=h;S!==null;){var m=S;switch(m.tag){case 0:case 11:case 15:on(8,m,i)}var k=m.child;if(k!==null)k.return=m,S=k;else for(;S!==null;){m=S;var g=m.sibling,x=m.return;if(cb(m),m===h){S=null;break}if(g!==null){g.return=x,S=g;break}S=x}}}var v=i.alternate;if(v!==null){var f=v.child;if(f!==null){v.child=null;do{var C=f.sibling;f.sibling=null,f=C}while(f!==null)}}S=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,S=l;else e:for(;S!==null;){if(i=S,i.flags&2048)switch(i.tag){case 0:case 11:case 15:on(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,S=y;break e}S=i.return}}var u=e.current;for(S=u;S!==null;){l=S;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,S=p;else e:for(l=u;S!==null;){if(s=S,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:rx(9,s)}}catch(I){Y(s,s.return,I)}if(s===l){S=null;break e}var M=s.sibling;if(M!==null){M.return=s.return,S=M;break e}S=s.return}}if(V=o,St(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(XM,e)}catch{}r=!0}return r}finally{F=a,ze.transition=t}}return!1}function EI(e,t,a){t=Aa(a,t),t=QS(e,t,1),e=mt(e,t,1),t=de(),e!==null&&(Wn(e,1,t),ge(e,t))}function Y(e,t,a){if(e.tag===3)EI(e,e,a);else for(;t!==null;){if(t.tag===3){EI(t,e,a);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gt===null||!gt.has(r))){e=Aa(a,e),e=KS(t,e,1),t=mt(t,e,1),e=de(),t!==null&&(Wn(t,1,e),ge(t,e));break}}t=t.return}}function tj(e,t,a){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&a,te===e&&(ne&a)===a&&(Q===4||Q===3&&(ne&130023424)===ne&&500>_()-IL?Q1(e,0):LL|=a),ge(e,t)}function fb(e,t){t===0&&(e.mode&1?(t=r2,r2<<=1,!(r2&130023424)&&(r2=4194304)):t=1);var a=de();e=tt(e,t),e!==null&&(Wn(e,t,a),ge(e,a))}function aj(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),fb(e,a)}function nj(e,t){var a=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(a=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),fb(e,a)}var vb;vb=function(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)pe=!0;else{if(!(e.lanes&a)&&!(t.flags&128))return pe=!1,Zz(e,t,a);pe=!!(e.flags&131072)}else pe=!1,E&&t.flags&1048576&&LS(t,VM,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;I2(e,t),e=t.pendingProps;var o=za(t,ce.current);Ca(t,a),o=gL(null,t,r,e,o,a);var i=fL();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(i=!0,AM(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,uL(t),o.updater=nx,t.stateNode=o,o._reactInternals=t,Mw(t,r,e,a),t=Lw(null,t,r,!0,i,a)):(t.tag=0,E&&i&&oL(t),se(null,t,o,a),t=t.child),t;case 16:r=t.elementType;e:{switch(I2(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=oj(r),e=Ae(r,e),o){case 0:t=ww(null,t,r,e,a);break e;case 1:t=HI(null,t,r,e,a);break e;case 11:t=zI(null,t,r,e,a);break e;case 14:t=jI(null,t,r,Ae(r.type,e),a);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ae(r,o),ww(e,t,r,o,a);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ae(r,o),HI(e,t,r,o,a);case 3:e:{if(ab(t),e===null)throw Error(L(387));r=t.pendingProps,i=t.memoizedState,o=i.element,zS(e,t),DM(t,r,null,a);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Aa(Error(L(423)),t),t=PI(e,t,r,a,o);break e}else if(r!==o){o=Aa(Error(L(424)),t),t=PI(e,t,r,a,o);break e}else for(xe=kt(t.stateNode.containerInfo.firstChild),we=t,E=!0,Ve=null,a=bS(t,null,r,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ja(),r===o){t=at(e,t,a);break e}se(e,t,r,a)}t=t.child}return t;case 5:return jS(t),e===null&&gw(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,uw(r,o)?l=null:i!==null&&uw(r,i)&&(t.flags|=32),tb(e,t),se(e,t,l,a),t.child;case 6:return e===null&&gw(t),null;case 13:return nb(e,t,a);case 4:return yL(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ha(t,null,r,a):se(e,t,r,a),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ae(r,o),zI(e,t,r,o,a);case 7:return se(e,t,t.pendingProps,a),t.child;case 8:return se(e,t,t.pendingProps.children,a),t.child;case 12:return se(e,t,t.pendingProps.children,a),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,T(FM,r._currentValue),r._currentValue=l,i!==null)if(Re(i.value,l)){if(i.children===o.children&&!ke.current){t=at(e,t,a);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Ke(-1,a&-a),c.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var m=h.pending;m===null?c.next=c:(c.next=m.next,m.next=c),h.pending=c}}i.lanes|=a,c=i.alternate,c!==null&&(c.lanes|=a),fw(i.return,a,t),s.lanes|=a;break}c=c.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(L(341));l.lanes|=a,s=l.alternate,s!==null&&(s.lanes|=a),fw(l,a,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}se(e,t,o.children,a),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Ca(t,a),o=je(o),r=r(o),t.flags|=1,se(e,t,r,a),t.child;case 14:return r=t.type,o=Ae(r,t.pendingProps),o=Ae(r.type,o),jI(e,t,r,o,a);case 15:return JS(e,t,t.type,t.pendingProps,a);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ae(r,o),I2(e,t),t.tag=1,me(r)?(e=!0,AM(t)):e=!1,Ca(t,a),XS(t,r,o),Mw(t,r,o,a),Lw(null,t,r,!0,e,a);case 19:return rb(e,t,a);case 22:return eb(e,t,a)}throw Error(L(156,t.tag))};function Mb(e,t){return _C(e,t)}function rj(e,t,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,a,r){return new rj(e,t,a,r)}function qL(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oj(e){if(typeof e=="function")return qL(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_w)return 11;if(e===Gw)return 14}return 2}function vt(e,t){var a=e.alternate;return a===null?(a=qe(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&14680064,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function b2(e,t,a,r,o,i){var l=2;if(r=e,typeof e=="function")qL(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case da:return K1(a.children,o,i,t);case Ww:l=8,o|=8;break;case Zx:return e=qe(12,a,t,o|2),e.elementType=Zx,e.lanes=i,e;case Yx:return e=qe(13,a,t,o),e.elementType=Yx,e.lanes=i,e;case Wx:return e=qe(19,a,t,o),e.elementType=Wx,e.lanes=i,e;case jC:return ix(a,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qC:l=10;break e;case zC:l=9;break e;case _w:l=11;break e;case Gw:l=14;break e;case ot:l=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=qe(l,a,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function K1(e,t,a,r){return e=qe(7,e,r,t),e.lanes=a,e}function ix(e,t,a,r){return e=qe(22,e,r,t),e.elementType=jC,e.lanes=a,e.stateNode={isHidden:!1},e}function Bx(e,t,a){return e=qe(6,e,null,t),e.lanes=a,e}function Ex(e,t,a){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ij(e,t,a,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xx(0),this.expirationTimes=xx(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xx(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function zL(e,t,a,r,o,i,l,s,c){return e=new ij(e,t,a,s,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=qe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},uL(i),e}function lj(e,t,a){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sa,key:r==null?null:""+r,children:e,containerInfo:t,implementation:a}}function xb(e){if(!e)return wt;e=e._reactInternals;e:{if(oa(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var a=e.type;if(me(a))return xS(e,a,t)}return t}function wb(e,t,a,r,o,i,l,s,c){return e=zL(a,r,!0,e,o,i,l,s,c),e.context=xb(null),a=e.current,r=de(),o=ft(a),i=Ke(r,o),i.callback=t??null,mt(a,i,o),e.current.lanes=o,Wn(e,o,r),ge(e,r),e}function lx(e,t,a,r){var o=t.current,i=de(),l=ft(o);return a=xb(a),t.context===null?t.context=a:t.pendingContext=a,t=Ke(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mt(o,t,l),e!==null&&(Te(e,o,l,i),x2(e,o,l)),l}function WM(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function NI(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function jL(e,t){NI(e,t),(e=e.alternate)&&NI(e,t)}function cj(){return null}var Lb=typeof reportError=="function"?reportError:function(e){console.error(e)};function HL(e){this._internalRoot=e}cx.prototype.render=HL.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));lx(e,t,null,null)};cx.prototype.unmount=HL.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;na(function(){lx(null,e,null,null)}),t[et]=null}};function cx(e){this._internalRoot=e}cx.prototype.unstable_scheduleHydration=function(e){if(e){var t=eS();e={blockedOn:null,target:e,priority:t};for(var a=0;a<lt.length&&t!==0&&t<lt[a].priority;a++);lt.splice(a,0,e),a===0&&aS(e)}};function PL(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function sx(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function OI(){}function sj(e,t,a,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var h=WM(l);i.call(h)}}var l=wb(t,r,e,0,null,!1,!1,"",OI);return e._reactRootContainer=l,e[et]=l.current,Un(e.nodeType===8?e.parentNode:e),na(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var h=WM(c);s.call(h)}}var c=zL(e,0,!1,null,null,!1,!1,"",OI);return e._reactRootContainer=c,e[et]=c.current,Un(e.nodeType===8?e.parentNode:e),na(function(){lx(t,c,a,r)}),c}function dx(e,t,a,r,o){var i=a._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var c=WM(l);s.call(c)}}lx(t,l,e,o)}else l=sj(a,t,e,o,r);return WM(l)}KC=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var a=Qa(t.pendingLanes);a!==0&&(Qw(t,a|1),ge(t,_()),!(V&6)&&(Ua=_()+500,St()))}break;case 13:na(function(){var r=tt(e,1);if(r!==null){var o=de();Te(r,e,1,o)}}),jL(e,1)}};Kw=function(e){if(e.tag===13){var t=tt(e,134217728);if(t!==null){var a=de();Te(t,e,134217728,a)}jL(e,134217728)}};JC=function(e){if(e.tag===13){var t=ft(e),a=tt(e,t);if(a!==null){var r=de();Te(a,e,t,r)}jL(e,t)}};eS=function(){return F};tS=function(e,t){var a=F;try{return F=e,t()}finally{F=a}};aw=function(e,t,a){switch(t){case"input":if($x(e,a),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<a.length;t++){var r=a[t];if(r!==e&&r.form===e.form){var o=ex(r);if(!o)throw Error(L(90));PC(r),$x(r,o)}}}break;case"textarea":UC(e,a);break;case"select":t=a.value,t!=null&&xa(e,!!a.multiple,t,!1)}};EC=CL;NC=na;var dj={usingClientEntryPoint:!1,Events:[Gn,pa,ex,RC,BC,CL]},Ga={findFiberByHostInstance:G1,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hj={bundleType:Ga.bundleType,version:Ga.version,rendererPackageName:Ga.rendererPackageName,rendererConfig:Ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=YC(e),e===null?null:e.stateNode},findFiberByHostInstance:Ga.findFiberByHostInstance||cj,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var k2=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!k2.isDisabled&&k2.supportsFiber)try{XM=k2.inject(hj),Ye=k2}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dj;Ie.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!PL(t))throw Error(L(200));return lj(e,t,null,a)};Ie.createRoot=function(e,t){if(!PL(e))throw Error(L(299));var a=!1,r="",o=Lb;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=zL(e,1,!1,null,null,a,!1,r,o),e[et]=t.current,Un(e.nodeType===8?e.parentNode:e),new HL(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=YC(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return na(e)};Ie.hydrate=function(e,t,a){if(!sx(t))throw Error(L(200));return dx(null,e,t,!0,a)};Ie.hydrateRoot=function(e,t,a){if(!PL(e))throw Error(L(405));var r=a!=null&&a.hydratedSources||null,o=!1,i="",l=Lb;if(a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onRecoverableError!==void 0&&(l=a.onRecoverableError)),t=wb(t,null,e,1,a??null,o,!1,i,l),e[et]=t.current,Un(e),r)for(e=0;e<r.length;e++)a=r[e],o=a._getVersion,o=o(a._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[a,o]:t.mutableSourceEagerHydrationData.push(a,o);return new cx(t)};Ie.render=function(e,t,a){if(!sx(t))throw Error(L(200));return dx(null,e,t,!1,a)};Ie.unmountComponentAtNode=function(e){if(!sx(e))throw Error(L(40));return e._reactRootContainer?(na(function(){dx(null,null,e,!1,function(){e._reactRootContainer=null,e[et]=null})}),!0):!1};Ie.unstable_batchedUpdates=CL;Ie.unstable_renderSubtreeIntoContainer=function(e,t,a,r){if(!sx(a))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return dx(e,t,a,!1,r)};Ie.version="18.3.1-next-f1338f8080-20240426";function Ib(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ib)}catch(e){console.error(e)}}Ib(),IC.exports=Ie;var uj=IC.exports,Cb,ZI=uj;Cb=ZI.createRoot,ZI.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function On(){return On=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},On.apply(this,arguments)}var ht;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ht||(ht={}));const YI="popstate";function yj(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:l,hash:s}=r.location;return Vw("",{pathname:i,search:l,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function a(r,o){return typeof o=="string"?o:_M(o)}return kj(t,a,null,e)}function $(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Sb(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function pj(){return Math.random().toString(36).substr(2,8)}function WI(e,t){return{usr:e.state,key:e.key,idx:t}}function Vw(e,t,a,r){return a===void 0&&(a=null),On({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Da(t):t,{state:a,key:t&&t.key||r||pj()})}function _M(e){let{pathname:t="/",search:a="",hash:r=""}=e;return a&&a!=="?"&&(t+=a.charAt(0)==="?"?a:"?"+a),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Da(e){let t={};if(e){let a=e.indexOf("#");a>=0&&(t.hash=e.substr(a),e=e.substr(0,a));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function kj(e,t,a,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,s=ht.Pop,c=null,h=m();h==null&&(h=0,l.replaceState(On({},l.state,{idx:h}),""));function m(){return(l.state||{idx:null}).idx}function k(){s=ht.Pop;let C=m(),y=C==null?null:C-h;h=C,c&&c({action:s,location:f.location,delta:y})}function g(C,y){s=ht.Push;let u=Vw(f.location,C,y);h=m()+1;let p=WI(u,h),M=f.createHref(u);try{l.pushState(p,"",M)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;o.location.assign(M)}i&&c&&c({action:s,location:f.location,delta:1})}function x(C,y){s=ht.Replace;let u=Vw(f.location,C,y);h=m();let p=WI(u,h),M=f.createHref(u);l.replaceState(p,"",M),i&&c&&c({action:s,location:f.location,delta:0})}function v(C){let y=o.location.origin!=="null"?o.location.origin:o.location.href,u=typeof C=="string"?C:_M(C);return u=u.replace(/ $/,"%20"),$(y,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,y)}let f={get action(){return s},get location(){return e(o,l)},listen(C){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(YI,k),c=C,()=>{o.removeEventListener(YI,k),c=null}},createHref(C){return t(o,C)},createURL:v,encodeLocation(C){let y=v(C);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:g,replace:x,go(C){return l.go(C)}};return f}var _I;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(_I||(_I={}));function mj(e,t,a){return a===void 0&&(a="/"),gj(e,t,a,!1)}function gj(e,t,a,r){let o=typeof t=="string"?Da(t):t,i=AL(o.pathname||"/",a);if(i==null)return null;let l=bb(e);fj(l);let s=null;for(let c=0;s==null&&c<l.length;++c){let h=zj(i);s=bj(l[c],h,r)}return s}function bb(e,t,a,r){t===void 0&&(t=[]),a===void 0&&(a=[]),r===void 0&&(r="");let o=(i,l,s)=>{let c={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};c.relativePath.startsWith("/")&&($(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let h=Mt([r,c.relativePath]),m=a.concat(c);i.children&&i.children.length>0&&($(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),bb(i.children,t,m,h)),!(i.path==null&&!i.index)&&t.push({path:h,score:Cj(h,i.index),routesMeta:m})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,l);else for(let c of qb(i.path))o(i,l,c)}),t}function qb(e){let t=e.split("/");if(t.length===0)return[];let[a,...r]=t,o=a.endsWith("?"),i=a.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=qb(r.join("/")),s=[];return s.push(...l.map(c=>c===""?i:[i,c].join("/"))),o&&s.push(...l),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function fj(e){e.sort((t,a)=>t.score!==a.score?a.score-t.score:Sj(t.routesMeta.map(r=>r.childrenIndex),a.routesMeta.map(r=>r.childrenIndex)))}const vj=/^:[\w-]+$/,Mj=3,xj=2,wj=1,Lj=10,Ij=-2,GI=e=>e==="*";function Cj(e,t){let a=e.split("/"),r=a.length;return a.some(GI)&&(r+=Ij),t&&(r+=xj),a.filter(o=>!GI(o)).reduce((o,i)=>o+(vj.test(i)?Mj:i===""?wj:Lj),r)}function Sj(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function bj(e,t,a){let{routesMeta:r}=e,o={},i="/",l=[];for(let s=0;s<r.length;++s){let c=r[s],h=s===r.length-1,m=i==="/"?t:t.slice(i.length)||"/",k=$I({path:c.relativePath,caseSensitive:c.caseSensitive,end:h},m),g=c.route;if(!k&&h&&a&&!r[r.length-1].route.index&&(k=$I({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},m)),!k)return null;Object.assign(o,k.params),l.push({params:o,pathname:Mt([i,k.pathname]),pathnameBase:Aj(Mt([i,k.pathnameBase])),route:g}),k.pathnameBase!=="/"&&(i=Mt([i,k.pathnameBase]))}return l}function $I(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[a,r]=qj(e.path,e.caseSensitive,e.end),o=t.match(a);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((h,m,k)=>{let{paramName:g,isOptional:x}=m;if(g==="*"){let f=s[k]||"";l=i.slice(0,i.length-f.length).replace(/(.)\/+$/,"$1")}const v=s[k];return x&&!v?h[g]=void 0:h[g]=(v||"").replace(/%2F/g,"/"),h},{}),pathname:i,pathnameBase:l,pattern:e}}function qj(e,t,a){t===void 0&&(t=!1),a===void 0&&(a=!0),Sb(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,c)=>(r.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function zj(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Sb(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function AL(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=t.endsWith("/")?t.length-1:t.length,r=e.charAt(a);return r&&r!=="/"?null:e.slice(a)||"/"}function jj(e,t){t===void 0&&(t="/");let{pathname:a,search:r="",hash:o=""}=typeof e=="string"?Da(e):e;return{pathname:a?a.startsWith("/")?a:Hj(a,t):t,search:Uj(r),hash:Vj(o)}}function Hj(e,t){let a=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?a.length>1&&a.pop():o!=="."&&a.push(o)}),a.length>1?a.join("/"):"/"}function Nx(e,t,a,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Pj(e){return e.filter((t,a)=>a===0||t.route.path&&t.route.path.length>0)}function zb(e,t){let a=Pj(e);return t?a.map((r,o)=>o===a.length-1?r.pathname:r.pathnameBase):a.map(r=>r.pathnameBase)}function jb(e,t,a,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Da(e):(o=On({},e),$(!o.pathname||!o.pathname.includes("?"),Nx("?","pathname","search",o)),$(!o.pathname||!o.pathname.includes("#"),Nx("#","pathname","hash",o)),$(!o.search||!o.search.includes("#"),Nx("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,s;if(l==null)s=a;else{let k=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),k-=1;o.pathname=g.join("/")}s=k>=0?t[k]:"/"}let c=jj(o,s),h=l&&l!=="/"&&l.endsWith("/"),m=(i||l===".")&&a.endsWith("/");return!c.pathname.endsWith("/")&&(h||m)&&(c.pathname+="/"),c}const Mt=e=>e.join("/").replace(/\/\/+/g,"/"),Aj=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Uj=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Vj=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Fj(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Hb=["post","put","patch","delete"];new Set(Hb);const Tj=["get",...Hb];new Set(Tj);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zn(){return Zn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},Zn.apply(this,arguments)}const UL=w.createContext(null),Dj=w.createContext(null),ia=w.createContext(null),hx=w.createContext(null),la=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Pb=w.createContext(null);function Rj(e,t){let{relative:a}=t===void 0?{}:t;Xn()||$(!1);let{basename:r,navigator:o}=w.useContext(ia),{hash:i,pathname:l,search:s}=Ub(e,{relative:a}),c=l;return r!=="/"&&(c=l==="/"?r:Mt([r,l])),o.createHref({pathname:c,search:s,hash:i})}function Xn(){return w.useContext(hx)!=null}function ux(){return Xn()||$(!1),w.useContext(hx).location}function Ab(e){w.useContext(ia).static||w.useLayoutEffect(e)}function Bj(){let{isDataRoute:e}=w.useContext(la);return e?Jj():Ej()}function Ej(){Xn()||$(!1);let e=w.useContext(UL),{basename:t,future:a,navigator:r}=w.useContext(ia),{matches:o}=w.useContext(la),{pathname:i}=ux(),l=JSON.stringify(zb(o,a.v7_relativeSplatPath)),s=w.useRef(!1);return Ab(()=>{s.current=!0}),w.useCallback(function(h,m){if(m===void 0&&(m={}),!s.current)return;if(typeof h=="number"){r.go(h);return}let k=jb(h,JSON.parse(l),i,m.relative==="path");e==null&&t!=="/"&&(k.pathname=k.pathname==="/"?t:Mt([t,k.pathname])),(m.replace?r.replace:r.push)(k,m.state,m)},[t,r,l,i,e])}function Ub(e,t){let{relative:a}=t===void 0?{}:t,{future:r}=w.useContext(ia),{matches:o}=w.useContext(la),{pathname:i}=ux(),l=JSON.stringify(zb(o,r.v7_relativeSplatPath));return w.useMemo(()=>jb(e,JSON.parse(l),i,a==="path"),[e,l,i,a])}function Nj(e,t){return Oj(e,t)}function Oj(e,t,a,r){Xn()||$(!1);let{navigator:o,static:i}=w.useContext(ia),{matches:l}=w.useContext(la),s=l[l.length-1],c=s?s.params:{};s&&s.pathname;let h=s?s.pathnameBase:"/";s&&s.route;let m=ux(),k;if(t){var g;let y=typeof t=="string"?Da(t):t;h==="/"||(g=y.pathname)!=null&&g.startsWith(h)||$(!1),k=y}else k=m;let x=k.pathname||"/",v=x;if(h!=="/"){let y=h.replace(/^\//,"").split("/");v="/"+x.replace(/^\//,"").split("/").slice(y.length).join("/")}let f=!i&&a&&a.matches&&a.matches.length>0?a.matches:mj(e,{pathname:v}),C=Gj(f&&f.map(y=>Object.assign({},y,{params:Object.assign({},c,y.params),pathname:Mt([h,o.encodeLocation?o.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?h:Mt([h,o.encodeLocation?o.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),l,a,r);return t&&C?w.createElement(hx.Provider,{value:{location:Zn({pathname:"/",search:"",hash:"",state:null,key:"default"},k),navigationType:ht.Pop}},C):C}function Zj(){let e=Kj(),t=Fj(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),a?w.createElement("pre",{style:o},a):null,null)}const Yj=w.createElement(Zj,null);class Wj extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,a){return a.location!==t.location||a.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:a.error,location:a.location,revalidation:t.revalidation||a.revalidation}}componentDidCatch(t,a){console.error("React Router caught the following error during render",t,a)}render(){return this.state.error!==void 0?w.createElement(la.Provider,{value:this.props.routeContext},w.createElement(Pb.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _j(e){let{routeContext:t,match:a,children:r}=e,o=w.useContext(UL);return o&&o.static&&o.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=a.route.id),w.createElement(la.Provider,{value:t},r)}function Gj(e,t,a,r){var o;if(t===void 0&&(t=[]),a===void 0&&(a=null),r===void 0&&(r=null),e==null){var i;if(!a)return null;if(a.errors)e=a.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!a.initialized&&a.matches.length>0)e=a.matches;else return null}let l=e,s=(o=a)==null?void 0:o.errors;if(s!=null){let m=l.findIndex(k=>k.route.id&&(s==null?void 0:s[k.route.id])!==void 0);m>=0||$(!1),l=l.slice(0,Math.min(l.length,m+1))}let c=!1,h=-1;if(a&&r&&r.v7_partialHydration)for(let m=0;m<l.length;m++){let k=l[m];if((k.route.HydrateFallback||k.route.hydrateFallbackElement)&&(h=m),k.route.id){let{loaderData:g,errors:x}=a,v=k.route.loader&&g[k.route.id]===void 0&&(!x||x[k.route.id]===void 0);if(k.route.lazy||v){c=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((m,k,g)=>{let x,v=!1,f=null,C=null;a&&(x=s&&k.route.id?s[k.route.id]:void 0,f=k.route.errorElement||Yj,c&&(h<0&&g===0?(v=!0,C=null):h===g&&(v=!0,C=k.route.hydrateFallbackElement||null)));let y=t.concat(l.slice(0,g+1)),u=()=>{let p;return x?p=f:v?p=C:k.route.Component?p=w.createElement(k.route.Component,null):k.route.element?p=k.route.element:p=m,w.createElement(_j,{match:k,routeContext:{outlet:m,matches:y,isDataRoute:a!=null},children:p})};return a&&(k.route.ErrorBoundary||k.route.errorElement||g===0)?w.createElement(Wj,{location:a.location,revalidation:a.revalidation,component:f,error:x,children:u(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):u()},null)}var Vb=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Vb||{}),GM=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(GM||{});function $j(e){let t=w.useContext(UL);return t||$(!1),t}function Xj(e){let t=w.useContext(Dj);return t||$(!1),t}function Qj(e){let t=w.useContext(la);return t||$(!1),t}function Fb(e){let t=Qj(),a=t.matches[t.matches.length-1];return a.route.id||$(!1),a.route.id}function Kj(){var e;let t=w.useContext(Pb),a=Xj(GM.UseRouteError),r=Fb(GM.UseRouteError);return t!==void 0?t:(e=a.errors)==null?void 0:e[r]}function Jj(){let{router:e}=$j(Vb.UseNavigateStable),t=Fb(GM.UseNavigateStable),a=w.useRef(!1);return Ab(()=>{a.current=!0}),w.useCallback(function(o,i){i===void 0&&(i={}),a.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Zn({fromRouteId:t},i)))},[e,t])}function eH(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function _e(e){$(!1)}function tH(e){let{basename:t="/",children:a=null,location:r,navigationType:o=ht.Pop,navigator:i,static:l=!1,future:s}=e;Xn()&&$(!1);let c=t.replace(/^\/*/,"/"),h=w.useMemo(()=>({basename:c,navigator:i,static:l,future:Zn({v7_relativeSplatPath:!1},s)}),[c,s,i,l]);typeof r=="string"&&(r=Da(r));let{pathname:m="/",search:k="",hash:g="",state:x=null,key:v="default"}=r,f=w.useMemo(()=>{let C=AL(m,c);return C==null?null:{location:{pathname:C,search:k,hash:g,state:x,key:v},navigationType:o}},[c,m,k,g,x,v,o]);return f==null?null:w.createElement(ia.Provider,{value:h},w.createElement(hx.Provider,{children:a,value:f}))}function aH(e){let{children:t,location:a}=e;return Nj(Fw(t),a)}new Promise(()=>{});function Fw(e,t){t===void 0&&(t=[]);let a=[];return w.Children.forEach(e,(r,o)=>{if(!w.isValidElement(r))return;let i=[...t,o];if(r.type===w.Fragment){a.push.apply(a,Fw(r.props.children,i));return}r.type!==_e&&$(!1),!r.props.index||!r.props.children||$(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Fw(r.props.children,i)),a.push(l)}),a}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tw(){return Tw=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},Tw.apply(this,arguments)}function nH(e,t){if(e==null)return{};var a={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(a[o]=e[o]);return a}function rH(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function oH(e,t){return e.button===0&&(!t||t==="_self")&&!rH(e)}const iH=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],lH="6";try{window.__reactRouterVersion=lH}catch{}const cH="startTransition",XI=tq[cH];function sH(e){let{basename:t,children:a,future:r,window:o}=e,i=w.useRef();i.current==null&&(i.current=yj({window:o,v5Compat:!0}));let l=i.current,[s,c]=w.useState({action:l.action,location:l.location}),{v7_startTransition:h}=r||{},m=w.useCallback(k=>{h&&XI?XI(()=>c(k)):c(k)},[c,h]);return w.useLayoutEffect(()=>l.listen(m),[l,m]),w.useEffect(()=>eH(r),[r]),w.createElement(tH,{basename:t,children:a,location:s.location,navigationType:s.action,navigator:l,future:r})}const dH=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hH=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dw=w.forwardRef(function(t,a){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:s,target:c,to:h,preventScrollReset:m,viewTransition:k}=t,g=nH(t,iH),{basename:x}=w.useContext(ia),v,f=!1;if(typeof h=="string"&&hH.test(h)&&(v=h,dH))try{let p=new URL(window.location.href),M=h.startsWith("//")?new URL(p.protocol+h):new URL(h),I=AL(M.pathname,x);M.origin===p.origin&&I!=null?h=I+M.search+M.hash:f=!0}catch{}let C=Rj(h,{relative:o}),y=uH(h,{replace:l,state:s,target:c,preventScrollReset:m,relative:o,viewTransition:k});function u(p){r&&r(p),p.defaultPrevented||y(p)}return w.createElement("a",Tw({},g,{href:v||C,onClick:f||i?r:u,ref:a,target:c}))});var QI;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(QI||(QI={}));var KI;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(KI||(KI={}));function uH(e,t){let{target:a,replace:r,state:o,preventScrollReset:i,relative:l,viewTransition:s}=t===void 0?{}:t,c=Bj(),h=ux(),m=Ub(e,{relative:l});return w.useCallback(k=>{if(oH(k,a)){k.preventDefault();let g=r!==void 0?r:_M(h)===_M(m);c(e,{replace:g,state:o,preventScrollReset:i,relative:l,viewTransition:s})}},[h,c,m,r,o,a,e,i,l,s])}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yH={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pH=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),n=(e,t)=>{const a=w.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:s="",children:c,...h},m)=>w.createElement("svg",{ref:m,...yH,width:o,height:o,stroke:r,strokeWidth:l?Number(i)*24/Number(o):i,className:["lucide",`lucide-${pH(e)}`,s].join(" "),...h},[...t.map(([k,g])=>w.createElement(k,g)),...Array.isArray(c)?c:[c]]));return a.displayName=`${e}`,a};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=n("AArrowDown",[["path",{d:"M3.5 13h6",key:"p1my2r"}],["path",{d:"m2 16 4.5-9 4.5 9",key:"ndf0b3"}],["path",{d:"M18 7v9",key:"pknjwm"}],["path",{d:"m14 12 4 4 4-4",key:"buelq4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=n("AArrowUp",[["path",{d:"M3.5 13h6",key:"p1my2r"}],["path",{d:"m2 16 4.5-9 4.5 9",key:"ndf0b3"}],["path",{d:"M18 16V7",key:"ty0viw"}],["path",{d:"m14 11 4-4 4 4",key:"1pu57t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=n("ALargeSmall",[["path",{d:"M21 14h-5",key:"1vh23k"}],["path",{d:"M16 16v-3.5a2.5 2.5 0 0 1 5 0V16",key:"1wh10o"}],["path",{d:"M4.5 13h6",key:"dfilno"}],["path",{d:"m3 16 4.5-9 4.5 9",key:"2dxa0e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=n("Accessibility",[["circle",{cx:"16",cy:"4",r:"1",key:"1grugj"}],["path",{d:"m18 19 1-7-6 1",key:"r0i19z"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5",key:"9ptxx2"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6",key:"10kmtu"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6",key:"2qq6rc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=n("ActivitySquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M17 12h-2l-2 5-2-10-2 5H7",key:"15hlnc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=n("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=n("AirVent",[["path",{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"larmp2"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12",key:"1bo8pg"}],["path",{d:"M6.6 15.6A2 2 0 1 0 10 17v-5",key:"t9h90c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=n("Airplay",[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",key:"ns4c3b"}],["polygon",{points:"12 15 17 21 7 21 12 15",key:"1sy95i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=n("AlarmClockCheck",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"m9 13 2 2 4-4",key:"6343dt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=n("AlarmClockMinus",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"M9 13h6",key:"1uhe8q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=n("AlarmClockOff",[["path",{d:"M6.87 6.87a8 8 0 1 0 11.26 11.26",key:"3on8tj"}],["path",{d:"M19.9 14.25a8 8 0 0 0-9.15-9.15",key:"15ghsc"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.26 18.67 4 21",key:"yzmioq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M4 4 2 6",key:"1ycko6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=n("AlarmClockPlus",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=n("AlarmClock",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M12 9v4l2 2",key:"1c63tq"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=n("AlarmSmoke",[["path",{d:"M4 8a2 2 0 0 1-2-2V3h20v3a2 2 0 0 1-2 2Z",key:"2c4fvq"}],["path",{d:"m19 8-.8 3c-.1.6-.6 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L5 8",key:"1vrndv"}],["path",{d:"M16 21c0-2.5 2-2.5 2-5",key:"1o3eny"}],["path",{d:"M11 21c0-2.5 2-2.5 2-5",key:"1sicvv"}],["path",{d:"M6 21c0-2.5 2-2.5 2-5",key:"i3w1gp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=n("Album",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["polyline",{points:"11 3 11 11 14 8 17 11 17 3",key:"1wcwz3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=n("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=n("AlertOctagon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=n("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=n("AlignCenterHorizontal",[["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4",key:"11f1s0"}],["path",{d:"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4",key:"t14dx9"}],["path",{d:"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1",key:"1w07xs"}],["path",{d:"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1",key:"1apec2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=n("AlignCenterVertical",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4",key:"14d6g8"}],["path",{d:"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4",key:"1e2lrw"}],["path",{d:"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1",key:"1fkdwx"}],["path",{d:"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1",key:"1euafb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=n("AlignCenter",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"17",x2:"7",y1:"12",y2:"12",key:"rsh8ii"}],["line",{x1:"19",x2:"5",y1:"18",y2:"18",key:"1t0tuv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=n("AlignEndHorizontal",[["rect",{width:"6",height:"16",x:"4",y:"2",rx:"2",key:"z5wdxg"}],["rect",{width:"6",height:"9",x:"14",y:"9",rx:"2",key:"um7a8w"}],["path",{d:"M22 22H2",key:"19qnx5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=n("AlignEndVertical",[["rect",{width:"16",height:"6",x:"2",y:"4",rx:"2",key:"10wcwx"}],["rect",{width:"9",height:"6",x:"9",y:"14",rx:"2",key:"4p5bwg"}],["path",{d:"M22 22V2",key:"12ipfv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=n("AlignHorizontalDistributeCenter",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M17 22v-5",key:"4b6g73"}],["path",{d:"M17 7V2",key:"hnrr36"}],["path",{d:"M7 22v-3",key:"1r4jpn"}],["path",{d:"M7 5V2",key:"liy1u9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=n("AlignHorizontalDistributeEnd",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M10 2v20",key:"uyc634"}],["path",{d:"M20 2v20",key:"1tx262"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=n("AlignHorizontalDistributeStart",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M4 2v20",key:"gtpd5x"}],["path",{d:"M14 2v20",key:"tg6bpw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=n("AlignHorizontalJustifyCenter",[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2",key:"dy24zr"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2",key:"13zkjt"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=n("AlignHorizontalJustifyEnd",[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2",key:"dy24zr"}],["rect",{width:"6",height:"10",x:"12",y:"7",rx:"2",key:"1ht384"}],["path",{d:"M22 2v20",key:"40qfg1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=n("AlignHorizontalJustifyStart",[["rect",{width:"6",height:"14",x:"6",y:"5",rx:"2",key:"hsirpf"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2",key:"13zkjt"}],["path",{d:"M2 2v20",key:"1ivd8o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=n("AlignHorizontalSpaceAround",[["rect",{width:"6",height:"10",x:"9",y:"7",rx:"2",key:"yn7j0q"}],["path",{d:"M4 22V2",key:"tsjzd3"}],["path",{d:"M20 22V2",key:"1bnhr8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=n("AlignHorizontalSpaceBetween",[["rect",{width:"6",height:"14",x:"3",y:"5",rx:"2",key:"j77dae"}],["rect",{width:"6",height:"10",x:"15",y:"7",rx:"2",key:"bq30hj"}],["path",{d:"M3 2v20",key:"1d2pfg"}],["path",{d:"M21 2v20",key:"p059bm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=n("AlignJustify",[["line",{x1:"3",x2:"21",y1:"6",y2:"6",key:"4m8b97"}],["line",{x1:"3",x2:"21",y1:"12",y2:"12",key:"10d38w"}],["line",{x1:"3",x2:"21",y1:"18",y2:"18",key:"kwyyxn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=n("AlignLeft",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}],["line",{x1:"17",x2:"3",y1:"18",y2:"18",key:"1awlsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=n("AlignRight",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}],["line",{x1:"21",x2:"7",y1:"18",y2:"18",key:"1g9eri"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=n("AlignStartHorizontal",[["rect",{width:"6",height:"16",x:"4",y:"6",rx:"2",key:"1n4dg1"}],["rect",{width:"6",height:"9",x:"14",y:"6",rx:"2",key:"17khns"}],["path",{d:"M22 2H2",key:"fhrpnj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=n("AlignStartVertical",[["rect",{width:"9",height:"6",x:"6",y:"14",rx:"2",key:"lpm2y7"}],["rect",{width:"16",height:"6",x:"6",y:"4",rx:"2",key:"rdj6ps"}],["path",{d:"M2 2v20",key:"1ivd8o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=n("AlignVerticalDistributeCenter",[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M22 7h-5",key:"o2endc"}],["path",{d:"M7 7H1",key:"105l6j"}],["path",{d:"M22 17h-3",key:"1lwga1"}],["path",{d:"M5 17H2",key:"1gx9xc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=n("AlignVerticalDistributeEnd",[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"M2 10h20",key:"1ir3d8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=n("AlignVerticalDistributeStart",[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M2 4h20",key:"mda7wb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=n("AlignVerticalJustifyCenter",[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2",key:"1i8z2d"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2",key:"ypihtt"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=n("AlignVerticalJustifyEnd",[["rect",{width:"14",height:"6",x:"5",y:"12",rx:"2",key:"4l4tp2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2",key:"ypihtt"}],["path",{d:"M2 22h20",key:"272qi7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=n("AlignVerticalJustifyStart",[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2",key:"1i8z2d"}],["rect",{width:"10",height:"6",x:"7",y:"6",rx:"2",key:"13squh"}],["path",{d:"M2 2h20",key:"1ennik"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=n("AlignVerticalSpaceAround",[["rect",{width:"10",height:"6",x:"7",y:"9",rx:"2",key:"b1zbii"}],["path",{d:"M22 20H2",key:"1p1f7z"}],["path",{d:"M22 4H2",key:"1b7qnq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=n("AlignVerticalSpaceBetween",[["rect",{width:"14",height:"6",x:"5",y:"15",rx:"2",key:"1w91an"}],["rect",{width:"10",height:"6",x:"7",y:"3",rx:"2",key:"17wqzy"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M2 3h20",key:"91anmk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=n("Ambulance",[["path",{d:"M10 10H6",key:"1bsnug"}],["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14",key:"lrkjwd"}],["path",{d:"M8 8v4",key:"1fwk8c"}],["path",{d:"M9 18h6",key:"x1upvd"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=n("Ampersand",[["path",{d:"M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13",key:"1o9ehi"}],["path",{d:"M16 12h3",key:"4uvgyw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=n("Ampersands",[["path",{d:"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",key:"12lh1k"}],["path",{d:"M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",key:"173c68"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=n("Anchor",[["path",{d:"M12 22V8",key:"qkxhtm"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3",key:"1hv3nh"}],["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=n("Angry",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["path",{d:"M7.5 8 10 9",key:"olxxln"}],["path",{d:"m14 9 2.5-1",key:"1j6cij"}],["path",{d:"M9 10h0",key:"1vxvly"}],["path",{d:"M15 10h0",key:"1j6oav"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=n("Annoyed",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 15h8",key:"45n4r"}],["path",{d:"M8 9h2",key:"1g203m"}],["path",{d:"M14 9h2",key:"116p9w"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=n("Antenna",[["path",{d:"M2 12 7 2",key:"117k30"}],["path",{d:"m7 12 5-10",key:"1tvx22"}],["path",{d:"m12 12 5-10",key:"ev1o1a"}],["path",{d:"m17 12 5-10",key:"1e4ti3"}],["path",{d:"M4.5 7h15",key:"vlsxkz"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=n("Anvil",[["path",{d:"M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4",key:"1hjpb6"}],["path",{d:"M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z",key:"1qn45f"}],["path",{d:"M9 12v5",key:"3anwtq"}],["path",{d:"M15 12v5",key:"5xh3zn"}],["path",{d:"M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1",key:"1fi4x8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=n("Aperture",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14.31 8 5.74 9.94",key:"1y6ab4"}],["path",{d:"M9.69 8h11.48",key:"1wxppr"}],["path",{d:"m7.38 12 5.74-9.94",key:"1grp0k"}],["path",{d:"M9.69 16 3.95 6.06",key:"libnyf"}],["path",{d:"M14.31 16H2.83",key:"x5fava"}],["path",{d:"m16.62 12-5.74 9.94",key:"1vwawt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=n("AppWindow",[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=n("Apple",[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",key:"3s7exb"}],["path",{d:"M10 2c1 .5 2 2 2 5",key:"fcco2y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=n("ArchiveRestore",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2",key:"tvwodi"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2",key:"1gkqxj"}],["path",{d:"m9 15 3-3 3 3",key:"1pd0qc"}],["path",{d:"M12 12v9",key:"192myk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=n("ArchiveX",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"m9.5 17 5-5",key:"nakeu6"}],["path",{d:"m9.5 12 5 5",key:"1hccrj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=n("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=n("AreaChart",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M7 12v5h12V8l-5 5-4-4Z",key:"zxz28u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=n("Armchair",[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",key:"irtipd"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z",key:"1e01m0"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=n("ArrowBigDownDash",[["path",{d:"M15 5H9",key:"1tp3ed"}],["path",{d:"M15 9v3h4l-7 7-7-7h4V9z",key:"ncdc4b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=n("ArrowBigDown",[["path",{d:"M15 6v6h4l-7 7-7-7h4V6h6z",key:"1thax2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=n("ArrowBigLeftDash",[["path",{d:"M19 15V9",key:"1hci5f"}],["path",{d:"M15 15h-3v4l-7-7 7-7v4h3v6z",key:"16tjna"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=n("ArrowBigLeft",[["path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z",key:"lbrdak"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=n("ArrowBigRightDash",[["path",{d:"M5 9v6",key:"158jrl"}],["path",{d:"M9 9h3V5l7 7-7 7v-4H9V9z",key:"1sg2xn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=n("ArrowBigRight",[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z",key:"7fvt9c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=n("ArrowBigUpDash",[["path",{d:"M9 19h6",key:"456am0"}],["path",{d:"M9 15v-3H5l7-7 7 7h-4v3H9z",key:"1r2uve"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=n("ArrowBigUp",[["path",{d:"M9 18v-6H5l7-7 7 7h-4v6H9z",key:"1x06kx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=n("ArrowDown01",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2",key:"1bwicg"}],["path",{d:"M17 20v-6h-2",key:"1qp1so"}],["path",{d:"M15 20h4",key:"1j968p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=n("ArrowDown10",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M17 10V4h-2",key:"zcsr5x"}],["path",{d:"M15 10h4",key:"id2lce"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2",key:"33xykx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=n("ArrowDownAZ",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=n("ArrowDownCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=n("ArrowDownFromLine",[["path",{d:"M19 3H5",key:"1236rx"}],["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m6 15 6 6 6-6",key:"h15q88"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=n("ArrowDownLeftFromCircle",[["path",{d:"M2 12a10 10 0 1 1 10 10",key:"1yn6ov"}],["path",{d:"m2 22 10-10",key:"28ilpk"}],["path",{d:"M8 22H2v-6",key:"sulq54"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=n("ArrowDownLeftFromSquare",[["path",{d:"M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6",key:"14qz4y"}],["path",{d:"m3 21 9-9",key:"1jfql5"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=n("ArrowDownLeftSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 8-8 8",key:"166keh"}],["path",{d:"M16 16H8V8",key:"1w2ppm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=n("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=n("ArrowDownNarrowWide",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=n("ArrowDownRightFromCircle",[["path",{d:"M12 22a10 10 0 1 1 10-10",key:"130bv5"}],["path",{d:"M22 22 12 12",key:"131aw7"}],["path",{d:"M22 16v6h-6",key:"1gvm70"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=n("ArrowDownRightFromSquare",[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"14rsvq"}],["path",{d:"m21 21-9-9",key:"1et2py"}],["path",{d:"M21 15v6h-6",key:"1jko0i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=n("ArrowDownRightSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m8 8 8 8",key:"1imecy"}],["path",{d:"M16 8v8H8",key:"1lbpgo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr=n("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=n("ArrowDownSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=n("ArrowDownToDot",[["path",{d:"M12 2v14",key:"jyx4ut"}],["path",{d:"m19 9-7 7-7-7",key:"1oe3oy"}],["circle",{cx:"12",cy:"21",r:"1",key:"o0uj5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=n("ArrowDownToLine",[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=n("ArrowDownUp",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"m21 8-4-4-4 4",key:"1c9v7m"}],["path",{d:"M17 4v16",key:"7dpous"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=n("ArrowDownWideNarrow",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h10",key:"1w87gc"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h4",key:"q8tih4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=n("ArrowDownZA",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M15 4h5l-5 6h5",key:"8asdl1"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",key:"r6l5cz"}],["path",{d:"M20 18h-5",key:"18j1r2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=n("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=n("ArrowLeftCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=n("ArrowLeftFromLine",[["path",{d:"m9 6-6 6 6 6",key:"7v63n9"}],["path",{d:"M3 12h14",key:"13k4hi"}],["path",{d:"M21 19V5",key:"b4bplr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=n("ArrowLeftRight",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=n("ArrowLeftSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}],["path",{d:"M16 12H8",key:"1fr5h0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=n("ArrowLeftToLine",[["path",{d:"M3 19V5",key:"rwsyhb"}],["path",{d:"m13 6-6 6 6 6",key:"1yhaz7"}],["path",{d:"M7 12h14",key:"uoisry"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=n("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=n("ArrowRightCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=n("ArrowRightFromLine",[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M21 12H7",key:"13ipq5"}],["path",{d:"m15 18 6-6-6-6",key:"6tx3qv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=n("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=n("ArrowRightSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=n("ArrowRightToLine",[["path",{d:"M17 12H3",key:"8awo09"}],["path",{d:"m11 18 6-6-6-6",key:"8c2y43"}],["path",{d:"M21 5v14",key:"nzette"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=n("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=n("ArrowUp01",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2",key:"1bwicg"}],["path",{d:"M17 20v-6h-2",key:"1qp1so"}],["path",{d:"M15 20h4",key:"1j968p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=n("ArrowUp10",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M17 10V4h-2",key:"zcsr5x"}],["path",{d:"M15 10h4",key:"id2lce"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2",key:"33xykx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=n("ArrowUpAZ",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=n("ArrowUpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=n("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=n("ArrowUpFromDot",[["path",{d:"m5 9 7-7 7 7",key:"1hw5ic"}],["path",{d:"M12 16V2",key:"ywoabb"}],["circle",{cx:"12",cy:"21",r:"1",key:"o0uj5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=n("ArrowUpFromLine",[["path",{d:"m18 9-6-6-6 6",key:"kcunyi"}],["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=n("ArrowUpLeftFromCircle",[["path",{d:"M2 8V2h6",key:"hiwtdz"}],["path",{d:"m2 2 10 10",key:"1oh8rs"}],["path",{d:"M12 2A10 10 0 1 1 2 12",key:"rrk4fa"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=n("ArrowUpLeftFromSquare",[["path",{d:"M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6",key:"14mv1t"}],["path",{d:"m3 3 9 9",key:"rks13r"}],["path",{d:"M3 9V3h6",key:"ira0h2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=n("ArrowUpLeftSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 16V8h8",key:"19xb1h"}],["path",{d:"M16 16 8 8",key:"1qdy8n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=n("ArrowUpLeft",[["path",{d:"M7 17V7h10",key:"11bw93"}],["path",{d:"M17 17 7 7",key:"2786uv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=n("ArrowUpNarrowWide",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h4",key:"q8tih4"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h10",key:"jvxblo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=n("ArrowUpRightFromCircle",[["path",{d:"M22 12A10 10 0 1 1 12 2",key:"1fm58d"}],["path",{d:"M22 2 12 12",key:"yg2myt"}],["path",{d:"M16 2h6v6",key:"zan5cs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=n("ArrowUpRightFromSquare",[["path",{d:"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6",key:"y09zxi"}],["path",{d:"m21 3-9 9",key:"mpx6sq"}],["path",{d:"M15 3h6v6",key:"1q9fwt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=n("ArrowUpRightSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 8h8v8",key:"b65dnt"}],["path",{d:"m8 16 8-8",key:"13b9ih"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=n("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=n("ArrowUpSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=n("ArrowUpToLine",[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=n("ArrowUpWideNarrow",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h4",key:"1krc32"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=n("ArrowUpZA",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M15 4h5l-5 6h5",key:"8asdl1"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",key:"r6l5cz"}],["path",{d:"M20 18h-5",key:"18j1r2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=n("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=n("ArrowsUpFromLine",[["path",{d:"m4 6 3-3 3 3",key:"9aidw8"}],["path",{d:"M7 17V3",key:"19qxw1"}],["path",{d:"m14 6 3-3 3 3",key:"6iy689"}],["path",{d:"M17 17V3",key:"o0fmgi"}],["path",{d:"M4 21h16",key:"1h09gz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=n("AsteriskSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8.5 14 7-4",key:"12hpby"}],["path",{d:"m8.5 10 7 4",key:"wwy2dy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=n("Asterisk",[["path",{d:"M12 6v12",key:"1vza4d"}],["path",{d:"M17.196 9 6.804 15",key:"1ah31z"}],["path",{d:"m6.804 9 10.392 6",key:"1b6pxd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=n("AtSign",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=n("Atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=n("AudioLines",[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=n("AudioWaveform",[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",key:"57tc96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=n("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=n("Axe",[["path",{d:"m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9",key:"csbz4o"}],["path",{d:"M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z",key:"113wfo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=n("Axis3d",[["path",{d:"M4 4v16h16",key:"1s015l"}],["path",{d:"m4 20 7-7",key:"17qe9y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=n("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=n("Backpack",[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z",key:"wvr1b5"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}],["path",{d:"M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5",key:"xk3gvk"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=n("BadgeAlert",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=n("BadgeCent",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M15.4 10a4 4 0 1 0 0 4",key:"2eqtx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=n("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=n("BadgeDollarSign",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=n("BadgeEuro",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M7 12h5",key:"gblrwe"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2",key:"1makmb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=n("BadgeHelp",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["line",{x1:"12",x2:"12.01",y1:"17",y2:"17",key:"io3f8k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=n("BadgeIndianRupee",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M8 8h8",key:"1bis0t"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m13 17-5-1h1a4 4 0 0 0 0-8",key:"nu2bwa"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=n("BadgeInfo",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"16",y2:"12",key:"1y1yb1"}],["line",{x1:"12",x2:"12.01",y1:"8",y2:"8",key:"110wyk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=n("BadgeJapaneseYen",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 8 3 3v7",key:"17yadx"}],["path",{d:"m12 11 3-3",key:"p4cfq1"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M9 16h6",key:"8wimt3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=n("BadgeMinus",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=n("BadgePercent",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=n("BadgePlus",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16",key:"10p56q"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=n("BadgePoundSterling",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M8 12h4",key:"qz6y1c"}],["path",{d:"M10 16V9.5a2.5 2.5 0 0 1 5 0",key:"3mlbjk"}],["path",{d:"M8 16h7",key:"sbedsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=n("BadgeRussianRuble",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M9 16h5",key:"1syiyw"}],["path",{d:"M9 12h5a2 2 0 1 0 0-4h-3v9",key:"1ge9c1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=n("BadgeSwissFranc",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M11 17V8h4",key:"1bfq6y"}],["path",{d:"M11 12h3",key:"2eqnfz"}],["path",{d:"M9 16h4",key:"1skf3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=n("BadgeX",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=n("Badge",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=n("BaggageClaim",[["path",{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2",key:"4irg2o"}],["path",{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10",key:"14fcyx"}],["rect",{width:"13",height:"8",x:"8",y:"6",rx:"1",key:"o6oiis"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"9",cy:"20",r:"2",key:"e5v82j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=n("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=n("Banana",[["path",{d:"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5",key:"1cscit"}],["path",{d:"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z",key:"1y1nbv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=n("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=n("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=n("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=n("BarChart4",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M13 17V9",key:"1fwyjl"}],["path",{d:"M18 17V5",key:"sfb6ij"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=n("BarChartBig",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["rect",{width:"4",height:"7",x:"7",y:"10",rx:"1",key:"14u6mf"}],["rect",{width:"4",height:"12",x:"15",y:"5",rx:"1",key:"b3pek6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=n("BarChartHorizontalBig",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["rect",{width:"12",height:"4",x:"7",y:"5",rx:"1",key:"936jl1"}],["rect",{width:"7",height:"4",x:"7",y:"13",rx:"1",key:"jqfkpy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=n("BarChartHorizontal",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M7 16h8",key:"srdodz"}],["path",{d:"M7 11h12",key:"127s9w"}],["path",{d:"M7 6h3",key:"w9rmul"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=n("BarChart",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=n("Barcode",[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M8 5v14",key:"1ybrkv"}],["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"M17 5v14",key:"ycjyhj"}],["path",{d:"M21 5v14",key:"nzette"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=n("Baseline",[["path",{d:"M4 20h16",key:"14thso"}],["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=n("Bath",[["path",{d:"M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",key:"1r8yf5"}],["line",{x1:"10",x2:"8",y1:"5",y2:"7",key:"h5g8z4"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"7",x2:"7",y1:"19",y2:"21",key:"16jp00"}],["line",{x1:"17",x2:"17",y1:"19",y2:"21",key:"1pxrnk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=n("BatteryCharging",[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1sdynx"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1",key:"1gkd3k"}],["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=n("BatteryFull",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13",key:"haxvl5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"13",key:"c6fn6x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=n("BatteryLow",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=n("BatteryMedium",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13",key:"haxvl5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=n("BatteryWarning",[["path",{d:"M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2",key:"1if82c"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2",key:"2pdlyl"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"10",x2:"10",y1:"7",y2:"13",key:"1uzyus"}],["line",{x1:"10",x2:"10",y1:"17",y2:"17.01",key:"1y8k4g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=n("Battery",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=n("Beaker",[["path",{d:"M4.5 3h15",key:"c7n0jr"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",key:"m1uhx7"}],["path",{d:"M6 14h12",key:"4cwo0f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=n("BeanOff",[["path",{d:"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1",key:"bq3udt"}],["path",{d:"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66",key:"17ccse"}],["path",{d:"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04",key:"18zqgq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=n("Bean",[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z",key:"1tvzk7"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28",key:"2cyri2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=n("BedDouble",[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=n("BedSingle",[["path",{d:"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8",key:"1wm6mi"}],["path",{d:"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4",key:"4k93s5"}],["path",{d:"M3 18h18",key:"1h113x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=n("Bed",[["path",{d:"M2 4v16",key:"vw9hq8"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10",key:"1dgv2r"}],["path",{d:"M2 17h20",key:"18nfp3"}],["path",{d:"M6 8v9",key:"1yriud"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=n("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=n("Beer",[["path",{d:"M17 11h1a3 3 0 0 1 0 6h-1",key:"1yp76v"}],["path",{d:"M9 12v6",key:"1u1cab"}],["path",{d:"M13 12v6",key:"1sugkk"}],["path",{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z",key:"1510fo"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"19jb7n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=n("BellDot",[["path",{d:"M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3",key:"xcehk"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["circle",{cx:"18",cy:"8",r:"3",key:"1g0gzu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=n("BellElectric",[["path",{d:"M18.8 4A6.3 8.7 0 0 1 20 9",key:"xve1fh"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["circle",{cx:"9",cy:"9",r:"7",key:"p2h5vp"}],["rect",{width:"10",height:"6",x:"4",y:"16",rx:"2",key:"17f3te"}],["path",{d:"M14 19c3 0 4.6-1.6 4.6-1.6",key:"n7odp6"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=n("BellMinus",[["path",{d:"M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2",key:"eck70s"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M15 8h6",key:"8ybuxh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=n("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=n("BellPlus",[["path",{d:"M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7",key:"guizqy"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M15 8h6",key:"8ybuxh"}],["path",{d:"M18 5v6",key:"g5ayrv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=n("BellRing",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=n("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=n("BetweenHorizontalEnd",[["rect",{width:"13",height:"7",x:"3",y:"3",rx:"1",key:"11xb64"}],["path",{d:"m22 15-3-3 3-3",key:"26chmm"}],["rect",{width:"13",height:"7",x:"3",y:"14",rx:"1",key:"k6ky7n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=n("BetweenHorizontalStart",[["rect",{width:"13",height:"7",x:"8",y:"3",rx:"1",key:"pkso9a"}],["path",{d:"m2 9 3 3-3 3",key:"1agib5"}],["rect",{width:"13",height:"7",x:"8",y:"14",rx:"1",key:"1q5fc1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=n("BetweenVerticalEnd",[["rect",{width:"7",height:"13",x:"3",y:"3",rx:"1",key:"1fdu0f"}],["path",{d:"m9 22 3-3 3 3",key:"17z65a"}],["rect",{width:"7",height:"13",x:"14",y:"3",rx:"1",key:"1squn4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=n("BetweenVerticalStart",[["rect",{width:"7",height:"13",x:"3",y:"8",rx:"1",key:"1fjrkv"}],["path",{d:"m15 2-3 3-3-3",key:"1uh6eb"}],["rect",{width:"7",height:"13",x:"14",y:"8",rx:"1",key:"w3fjg8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=n("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=n("Binary",[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=n("Biohazard",[["circle",{cx:"12",cy:"11.9",r:"2",key:"e8h31w"}],["path",{d:"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6",key:"17bolr"}],["path",{d:"m8.9 10.1 1.4.8",key:"15ezny"}],["path",{d:"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5",key:"wtwa5u"}],["path",{d:"m15.1 10.1-1.4.8",key:"1r0b28"}],["path",{d:"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2",key:"m7qszh"}],["path",{d:"M12 13.9v1.6",key:"zfyyim"}],["path",{d:"M13.5 5.4c-1-.2-2-.2-3 0",key:"1bi9q0"}],["path",{d:"M17 16.4c.7-.7 1.2-1.6 1.5-2.5",key:"1rhjqw"}],["path",{d:"M5.5 13.9c.3.9.8 1.8 1.5 2.5",key:"8gsud3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=n("Bird",[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=n("Bitcoin",[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",key:"yr8idg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=n("Blend",[["circle",{cx:"9",cy:"9",r:"7",key:"p2h5vp"}],["circle",{cx:"15",cy:"15",r:"7",key:"19ennj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=n("Blinds",[["path",{d:"M3 3h18",key:"o7r712"}],["path",{d:"M20 7H8",key:"gd2fo2"}],["path",{d:"M20 11H8",key:"1ynp89"}],["path",{d:"M10 19h10",key:"19hjk5"}],["path",{d:"M8 15h12",key:"1yqzne"}],["path",{d:"M4 3v14",key:"fggqzn"}],["circle",{cx:"4",cy:"19",r:"2",key:"p3m9r0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=n("Blocks",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=n("BluetoothConnected",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}],["line",{x1:"18",x2:"21",y1:"12",y2:"12",key:"1rsjjs"}],["line",{x1:"3",x2:"6",y1:"12",y2:"12",key:"11yl8c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=n("BluetoothOff",[["path",{d:"m17 17-5 5V12l-5 5",key:"v5aci6"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M14.5 9.5 17 7l-5-5v4.5",key:"1kddfz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=n("BluetoothSearching",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}],["path",{d:"M20.83 14.83a4 4 0 0 0 0-5.66",key:"k8tn1j"}],["path",{d:"M18 12h.01",key:"yjnet6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=n("Bluetooth",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=n("Bold",[["path",{d:"M14 12a4 4 0 0 0 0-8H6v8",key:"v2sylx"}],["path",{d:"M15 20a4 4 0 0 0 0-8H6v8Z",key:"1ef5ya"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=n("Bolt",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=n("Bomb",[["circle",{cx:"11",cy:"13",r:"9",key:"hd149"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95",key:"jp4j1b"}],["path",{d:"m22 2-1.5 1.5",key:"ay92ug"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=n("Bone",[["path",{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z",key:"w610uw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=n("BookA",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"m8 13 4-7 4 7",key:"4rari8"}],["path",{d:"M9.1 11h5.7",key:"1gkovt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=n("BookAudio",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M8 8v3",key:"1qzp49"}],["path",{d:"M12 6v7",key:"1f6ttz"}],["path",{d:"M16 8v3",key:"gejaml"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=n("BookCheck",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"m9 9.5 2 2 4-4",key:"1dth82"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=n("BookCopy",[["path",{d:"M2 16V4a2 2 0 0 1 2-2h11",key:"spzkk5"}],["path",{d:"M5 14H4a2 2 0 1 0 0 4h1",key:"16gqf9"}],["path",{d:"M22 18H11a2 2 0 1 0 0 4h11V6H11a2 2 0 0 0-2 2v12",key:"1owzki"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=n("BookDashed",[["path",{d:"M20 22h-2",key:"1rpnb6"}],["path",{d:"M20 15v2h-2",key:"fph276"}],["path",{d:"M4 19.5V15",key:"6gr39e"}],["path",{d:"M20 8v3",key:"deu0bs"}],["path",{d:"M18 2h2v2",key:"180o53"}],["path",{d:"M4 11V9",key:"v3xsx8"}],["path",{d:"M12 2h2",key:"cvn524"}],["path",{d:"M12 22h2",key:"kn7ki6"}],["path",{d:"M12 17h2",key:"13u4lk"}],["path",{d:"M8 22H6.5a2.5 2.5 0 0 1 0-5H8",key:"fiseg2"}],["path",{d:"M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8",key:"wywhs9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll=n("BookDown",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m9 10 3 3 3-3",key:"zt5b4y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=n("BookHeadphones",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["path",{d:"M8 12v-2a4 4 0 0 1 8 0v2",key:"1vsqkj"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=n("BookHeart",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M16 8.2C16 7 15 6 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9C9 6 8 7 8 8.2c0 .6.3 1.2.7 1.6h0C10 11.1 12 13 12 13s2-1.9 3.3-3.1h0c.4-.4.7-1 .7-1.7z",key:"1dlbw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=n("BookImage",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["circle",{cx:"10",cy:"8",r:"2",key:"2qkj4p"}],["path",{d:"m20 13.7-2.1-2.1c-.8-.8-2-.8-2.8 0L9.7 17",key:"160say"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=n("BookKey",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14",key:"1gfsgw"}],["path",{d:"M20 8v14H6.5a2.5 2.5 0 0 1 0-5H20",key:"zb0ngp"}],["circle",{cx:"14",cy:"8",r:"2",key:"u49eql"}],["path",{d:"m20 2-4.5 4.5",key:"1sppr8"}],["path",{d:"m19 3 1 1",key:"ze14oc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=n("BookLock",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10",key:"18wgow"}],["path",{d:"M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20",key:"dpch1j"}],["rect",{width:"8",height:"5",x:"12",y:"6",rx:"1",key:"9nqwug"}],["path",{d:"M18 6V4a2 2 0 1 0-4 0v2",key:"1aquzs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=n("BookMarked",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["polyline",{points:"10 2 10 10 13 7 16 10 16 2",key:"13o6vz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=n("BookMinus",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=n("BookOpenCheck",[["path",{d:"M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z",key:"1i8u0n"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3",key:"jb5l51"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=n("BookOpenText",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}],["path",{d:"M6 8h2",key:"30oboj"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M16 12h2",key:"7q9ll5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=n("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=n("BookPlus",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 7v6",key:"lw1j43"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=n("BookText",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M8 7h6",key:"1f0q6e"}],["path",{d:"M8 11h8",key:"vwpz6n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=n("BookType",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M16 8V6H8v2",key:"x8j6u4"}],["path",{d:"M12 6v7",key:"1f6ttz"}],["path",{d:"M10 13h4",key:"ytezjc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=n("BookUp2",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2",key:"1lorq7"}],["path",{d:"M18 2h2v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"1nfm9i"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=n("BookUp",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=n("BookUser",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M15 13a3 3 0 1 0-6 0",key:"10j68g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=n("BookX",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"m14.5 7-5 5",key:"dy991v"}],["path",{d:"m9.5 7 5 5",key:"s45iea"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=n("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=n("BookmarkCheck",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=n("BookmarkMinus",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=n("BookmarkPlus",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13",key:"1cppfj"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=n("BookmarkX",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=n("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=n("BoomBox",[["path",{d:"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"vvzvr1"}],["path",{d:"M8 8v1",key:"xcqmfk"}],["path",{d:"M12 8v1",key:"1rj8u4"}],["path",{d:"M16 8v1",key:"1q12zr"}],["rect",{width:"20",height:"12",x:"2",y:"9",rx:"2",key:"igpb89"}],["circle",{cx:"8",cy:"15",r:"2",key:"fa4a8s"}],["circle",{cx:"16",cy:"15",r:"2",key:"14c3ya"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=n("BotMessageSquare",[["path",{d:"M12 6V2H8",key:"1155em"}],["path",{d:"m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z",key:"w2lp3e"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M9 11v2",key:"1ueba0"}],["path",{d:"M15 11v2",key:"i11awn"}],["path",{d:"M20 12h2",key:"1q8mjw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=n("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=n("BoxSelect",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=n("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=n("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=n("Braces",[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=n("Brackets",[["path",{d:"M16 3h3v18h-3",key:"1yor1f"}],["path",{d:"M8 21H5V3h3",key:"1qrfwo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=n("BrainCircuit",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=n("BrainCog",[["path",{d:"M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5",key:"1kgmhc"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m15.7 10.4-.9.4",key:"ayzo6p"}],["path",{d:"m9.2 13.2-.9.4",key:"1uzb3g"}],["path",{d:"m13.6 15.7-.4-.9",key:"11ifqf"}],["path",{d:"m10.8 9.2-.4-.9",key:"1pmk2v"}],["path",{d:"m15.7 13.5-.9-.4",key:"7ng02m"}],["path",{d:"m9.2 10.9-.9-.4",key:"1x66zd"}],["path",{d:"m10.5 15.7.4-.9",key:"3js94g"}],["path",{d:"m13.1 9.2.4-.9",key:"18n7mc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=n("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=n("BrickWall",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 9v6",key:"199k2o"}],["path",{d:"M16 15v6",key:"8rj2es"}],["path",{d:"M16 3v6",key:"1j6rpj"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 15v6",key:"1stoo3"}],["path",{d:"M8 3v6",key:"vlvjmk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=n("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=n("BringToFront",[["rect",{x:"8",y:"8",width:"8",height:"8",rx:"2",key:"yj20xf"}],["path",{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2",key:"1ltk23"}],["path",{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2",key:"1q24h9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=n("Brush",[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",key:"1styjt"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",key:"z0l1mu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=n("BugOff",[["path",{d:"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2",key:"vl8zik"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M22 13h-4v-2a4 4 0 0 0-4-4h-1.3",key:"1ou0bd"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13",key:"1njkjs"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=n("BugPlay",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5",key:"1tjixy"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"m12 12 8 5-8 5Z",key:"1ydf81"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=n("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=n("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=n("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=n("BusFront",[["path",{d:"M4 6 2 7",key:"1mqr15"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"m22 7-2-1",key:"1umjhc"}],["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M6 19v2",key:"1loha6"}],["path",{d:"M18 21v-2",key:"sqyl04"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=n("Bus",[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=n("CableCar",[["path",{d:"M10 3h.01",key:"lbucoy"}],["path",{d:"M14 2h.01",key:"1k8aa1"}],["path",{d:"m2 9 20-5",key:"1kz0j5"}],["path",{d:"M12 12V6.5",key:"1vbrij"}],["rect",{width:"16",height:"10",x:"4",y:"12",rx:"3",key:"if91er"}],["path",{d:"M9 12v5",key:"3anwtq"}],["path",{d:"M15 12v5",key:"5xh3zn"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=n("Cable",[["path",{d:"M4 9a2 2 0 0 1-2-2V5h6v2a2 2 0 0 1-2 2Z",key:"1s6oa5"}],["path",{d:"M3 5V3",key:"1k5hjh"}],["path",{d:"M7 5V3",key:"1t1388"}],["path",{d:"M19 15V6.5a3.5 3.5 0 0 0-7 0v11a3.5 3.5 0 0 1-7 0V9",key:"1ytv72"}],["path",{d:"M17 21v-2",key:"ds4u3f"}],["path",{d:"M21 21v-2",key:"eo0ou"}],["path",{d:"M22 19h-6v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z",key:"sdz6o8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=n("CakeSlice",[["circle",{cx:"9",cy:"7",r:"2",key:"1305pl"}],["path",{d:"M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6",key:"xle13f"}],["path",{d:"M16 13H3",key:"1wpj08"}],["path",{d:"M16 17H3",key:"3lvfcd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=n("Cake",[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",key:"1w3rig"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",key:"n2jgmb"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M7 8v3",key:"1qtyvj"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"M17 8v3",key:"1i6e5u"}],["path",{d:"M7 4h0.01",key:"hsw7lv"}],["path",{d:"M12 4h0.01",key:"1e3d8f"}],["path",{d:"M17 4h0.01",key:"p7cxgy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=n("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=n("CalendarCheck2",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"bce9hv"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=n("CalendarCheck",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=n("CalendarClock",[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=n("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=n("CalendarFold",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z",key:"kg77oy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M15 22v-4a2 2 0 0 1 2-2h4",key:"1gnbqr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=n("CalendarHeart",[["path",{d:"M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7",key:"136lmk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",key:"1t7hil"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=n("CalendarMinus2",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M10 16h4",key:"17e571"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=n("CalendarMinus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=n("CalendarOff",[["path",{d:"M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18",key:"16swn3"}],["path",{d:"M21 15.5V6a2 2 0 0 0-2-2H9.5",key:"yhw86o"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h7",key:"1wap6i"}],["path",{d:"M21 10h-5.5",key:"quycpq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=n("CalendarPlus2",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M10 16h4",key:"17e571"}],["path",{d:"M12 14v4",key:"1thi36"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=n("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=n("CalendarRange",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M17 14h-6",key:"bkmgh3"}],["path",{d:"M13 18H7",key:"bb0bb7"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 18h.01",key:"1bdyru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=n("CalendarSearch",[["path",{d:"M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.5",key:"1e09qw"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h18",key:"8toen8"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.5-1.5",key:"1x83k4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=n("CalendarX2",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m17 22 5-5",key:"1k6ppv"}],["path",{d:"m17 17 5 5",key:"p7ous7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=n("CalendarX",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m14 14-4 4",key:"rymu2i"}],["path",{d:"m10 14 4 4",key:"3sz06r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=n("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=n("CameraOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16",key:"qmtpty"}],["path",{d:"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5",key:"1ufyfc"}],["path",{d:"M14.121 15.121A3 3 0 1 1 9.88 10.88",key:"11zox6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=n("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=n("CandlestickChart",[["path",{d:"M9 5v4",key:"14uxtq"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1",key:"f4fvz0"}],["path",{d:"M9 15v2",key:"r5rk32"}],["path",{d:"M17 3v2",key:"1l2re6"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1",key:"z38je5"}],["path",{d:"M17 13v3",key:"5l0wba"}],["path",{d:"M3 3v18h18",key:"1s2lah"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=n("CandyCane",[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z",key:"isaq8g"}],["path",{d:"M17.75 7 15 2.1",key:"12x7e8"}],["path",{d:"M10.9 4.8 13 9",key:"100a87"}],["path",{d:"m7.9 9.7 2 4.4",key:"ntfhaj"}],["path",{d:"M4.9 14.7 7 18.9",key:"1x43jy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=n("CandyOff",[["path",{d:"m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1",key:"1ff4ui"}],["path",{d:"M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657",key:"1sbrv4"}],["path",{d:"M14 16.5V14",key:"1maf8j"}],["path",{d:"M14 6.5v1.843",key:"1a6u6t"}],["path",{d:"M10 10v7.5",key:"80pj65"}],["path",{d:"m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1",key:"11a9mt"}],["path",{d:"m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1",key:"3mjmon"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=n("Candy",[["path",{d:"m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z",key:"ue6khb"}],["path",{d:"M14 6.5v10",key:"5xnk7c"}],["path",{d:"M10 7.5v10",key:"1uew51"}],["path",{d:"m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1",key:"b9cp6k"}],["path",{d:"m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1",key:"5lney8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=n("CaptionsOff",[["path",{d:"M10.5 5H19a2 2 0 0 1 2 2v8.5",key:"jqtk4d"}],["path",{d:"M17 11h-.5",key:"1961ue"}],["path",{d:"M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2",key:"1keqsi"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7 11h4",key:"1o1z6v"}],["path",{d:"M7 15h2.5",key:"1ina1g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=n("Captions",[["rect",{width:"18",height:"14",x:"3",y:"5",rx:"2",ry:"2",key:"12ruh7"}],["path",{d:"M7 15h4M15 15h2M7 11h2M13 11h4",key:"1ueiar"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=n("CarFront",[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=n("CarTaxiFront",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=n("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=n("Caravan",[["rect",{width:"4",height:"4",x:"2",y:"9",key:"1vcvhd"}],["rect",{width:"4",height:"10",x:"10",y:"9",key:"1b7ev2"}],["path",{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2",key:"19jm3t"}],["circle",{cx:"8",cy:"19",r:"2",key:"t8fc5s"}],["path",{d:"M10 19h12v-2",key:"1yu2qx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=n("Carrot",[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",key:"rfqxbe"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",key:"6b25w4"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",key:"fn65lo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=n("CaseLower",[["circle",{cx:"7",cy:"12",r:"3",key:"12clwm"}],["path",{d:"M10 9v6",key:"17i7lo"}],["circle",{cx:"17",cy:"12",r:"3",key:"gl7c2s"}],["path",{d:"M14 7v8",key:"dl84cr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=n("CaseSensitive",[["path",{d:"m3 15 4-8 4 8",key:"1vwr6u"}],["path",{d:"M4 13h6",key:"1r9ots"}],["circle",{cx:"18",cy:"12",r:"3",key:"1kchzo"}],["path",{d:"M21 9v6",key:"anns31"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=n("CaseUpper",[["path",{d:"m3 15 4-8 4 8",key:"1vwr6u"}],["path",{d:"M4 13h6",key:"1r9ots"}],["path",{d:"M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4",key:"1sqfas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=n("CassetteTape",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["circle",{cx:"8",cy:"10",r:"2",key:"1xl4ub"}],["path",{d:"M8 12h8",key:"1wcyev"}],["circle",{cx:"16",cy:"10",r:"2",key:"r14t7q"}],["path",{d:"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3",key:"l01ucn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=n("Cast",[["path",{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6",key:"3zrzxg"}],["path",{d:"M2 12a9 9 0 0 1 8 8",key:"g6cvee"}],["path",{d:"M2 16a5 5 0 0 1 4 4",key:"1y1dii"}],["line",{x1:"2",x2:"2.01",y1:"20",y2:"20",key:"xu2jvo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=n("Castle",[["path",{d:"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z",key:"109fe4"}],["path",{d:"M18 11V4H6v7",key:"mon5oj"}],["path",{d:"M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4",key:"jdggr9"}],["path",{d:"M22 11V9",key:"3zbp94"}],["path",{d:"M2 11V9",key:"1x5rnq"}],["path",{d:"M6 4V2",key:"1rsq15"}],["path",{d:"M18 4V2",key:"1jsdo1"}],["path",{d:"M10 4V2",key:"75d9ly"}],["path",{d:"M14 4V2",key:"8nj3z6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=n("Cat",[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",key:"x6xyqk"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=n("Cctv",[["path",{d:"M7 9h.01",key:"19b3jx"}],["path",{d:"M16.75 12H22l-3.5 7-3.09-4.32",key:"1h9vqe"}],["path",{d:"M18 9.5l-4 8-10.39-5.2a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3Z",key:"q5d122"}],["path",{d:"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15",key:"19bib8"}],["path",{d:"M2 21v-4",key:"l40lih"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=n("CheckCheck",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=n("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=n("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=n("CheckSquare2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=n("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=n("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=n("ChefHat",[["path",{d:"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z",key:"z3ra2g"}],["line",{x1:"6",x2:"18",y1:"17",y2:"17",key:"12q60k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=n("Cherry",[["path",{d:"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"cvxqlc"}],["path",{d:"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"1ostrc"}],["path",{d:"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12",key:"hqx58h"}],["path",{d:"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z",key:"eykp1o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=n("ChevronDownCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 10-4 4-4-4",key:"894hmk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=n("ChevronDownSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 10-4 4-4-4",key:"894hmk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=n("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=n("ChevronFirst",[["path",{d:"m17 18-6-6 6-6",key:"1yerx2"}],["path",{d:"M7 6v12",key:"1p53r6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=n("ChevronLast",[["path",{d:"m7 18 6-6-6-6",key:"lwmzdw"}],["path",{d:"M17 6v12",key:"1o0aio"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=n("ChevronLeftCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14 16-4-4 4-4",key:"ojs7w8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=n("ChevronLeftSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m14 16-4-4 4-4",key:"ojs7w8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=n("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=n("ChevronRightCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=n("ChevronRightSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=n("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=n("ChevronUpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m8 14 4-4 4 4",key:"fy2ptz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=n("ChevronUpSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m8 14 4-4 4 4",key:"fy2ptz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=n("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=n("ChevronsDownUp",[["path",{d:"m7 20 5-5 5 5",key:"13a0gw"}],["path",{d:"m7 4 5 5 5-5",key:"1kwcof"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=n("ChevronsDown",[["path",{d:"m7 6 5 5 5-5",key:"1lc07p"}],["path",{d:"m7 13 5 5 5-5",key:"1d48rs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=n("ChevronsLeftRight",[["path",{d:"m9 7-5 5 5 5",key:"j5w590"}],["path",{d:"m15 7 5 5-5 5",key:"1bl6da"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=n("ChevronsLeft",[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=n("ChevronsRightLeft",[["path",{d:"m20 17-5-5 5-5",key:"30x0n2"}],["path",{d:"m4 17 5-5-5-5",key:"16spf4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=n("ChevronsRight",[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=n("ChevronsUpDown",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=n("ChevronsUp",[["path",{d:"m17 11-5-5-5 5",key:"e8nh98"}],["path",{d:"m17 18-5-5-5 5",key:"2avn1x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=n("Chrome",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=n("Church",[["path",{d:"m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2",key:"gy5gyo"}],["path",{d:"M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4",key:"cpkuc4"}],["path",{d:"M18 22V5l-6-3-6 3v17",key:"1hsnhq"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M10 9h4",key:"u4k05v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=n("CigaretteOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M12 12H2v4h14",key:"91gsaq"}],["path",{d:"M22 12v4",key:"142cbu"}],["path",{d:"M18 12h-.5",key:"12ymji"}],["path",{d:"M7 12v4",key:"jqww69"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5",key:"1il607"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5",key:"1gah44"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=n("Cigarette",[["path",{d:"M18 12H2v4h16",key:"2rt1hm"}],["path",{d:"M22 12v4",key:"142cbu"}],["path",{d:"M7 12v4",key:"jqww69"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5",key:"1il607"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5",key:"1gah44"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=n("CircleDashed",[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0",key:"5ilxe3"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0",key:"11zvb9"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7",key:"1iw5b2"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8",key:"c0bmvh"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69",key:"1ruxm7"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8",key:"qkgqxc"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69",key:"1mcia2"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7",key:"1fvljs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=n("CircleDollarSign",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=n("CircleDotDashed",[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0",key:"1qdqn0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7",key:"1bq7p6"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8",key:"1rlaqf"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69",key:"1xk03u"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0",key:"l7re25"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7",key:"1v18p6"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8",key:"xdo6bj"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69",key:"1jjmaz"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=n("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=n("CircleEllipsis",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M7 12h.01",key:"eqddd0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=n("CircleEqual",[["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M7 14h10",key:"1mhdw3"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=n("CircleFadingPlus",[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75",key:"175t95"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3",key:"1vce0s"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4",key:"o3fkw4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857",key:"1szpfk"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38",key:"9yhvd4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=n("CircleOff",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.35 2.69A10 10 0 0 1 21.3 15.65",key:"1pfsoa"}],["path",{d:"M19.08 19.08A10 10 0 1 1 4.92 4.92",key:"1ablyi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=n("CircleSlash2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M22 2 2 22",key:"y4kqgn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=n("CircleSlash",[["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=n("CircleUserRound",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=n("CircleUser",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=n("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=n("CircuitBoard",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=n("Citrus",[["path",{d:"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z",key:"4ite01"}],["path",{d:"M19.65 15.66A8 8 0 0 1 8.35 4.34",key:"1gxipu"}],["path",{d:"m14 10-5.5 5.5",key:"92pfem"}],["path",{d:"M14 17.85V10H6.15",key:"xqmtsk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=n("Clapperboard",[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=n("ClipboardCheck",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=n("ClipboardCopy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=n("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=n("ClipboardMinus",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 14h6",key:"159ibu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=n("ClipboardPaste",[["path",{d:"M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z",key:"1pp7kr"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10",key:"2ik1ml"}],["path",{d:"m17 10 4 4-4 4",key:"vp2hj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=n("ClipboardPenLine",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",key:"1but9f"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1",key:"1p8n7l"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M18.4 9.6a2 2 0 0 1 3 3L17 17l-4 1 1-4Z",key:"yg2pdb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=n("ClipboardPen",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M10.4 12.6a2 2 0 0 1 3 3L8 21l-4 1 1-4Z",key:"hnx206"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5",key:"cereej"}],["path",{d:"M4 13.5V6a2 2 0 0 1 2-2h2",key:"5ua5vh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=n("ClipboardPlus",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 14h6",key:"159ibu"}],["path",{d:"M12 17v-6",key:"1y8rbf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=n("ClipboardType",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 12v-1h6v1",key:"iehl6m"}],["path",{d:"M11 17h2",key:"12w5me"}],["path",{d:"M12 11v6",key:"1bwqyc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=n("ClipboardX",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m15 11-6 6",key:"1toa9n"}],["path",{d:"m9 11 6 6",key:"wlibny"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=n("Clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=n("Clock1",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 14.5 8",key:"12zbmj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=n("Clock10",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 8 10",key:"atfzqc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=n("Clock11",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 9.5 8",key:"l5bg6f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=n("Clock12",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12",key:"1fub01"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=n("Clock2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 10",key:"1g230d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=n("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=n("Clock4",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=n("Clock5",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 14.5 16",key:"1pcbox"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=n("Clock6",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 12 16.5",key:"hb2qv6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=n("Clock7",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 9.5 16",key:"ka3394"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=n("Clock8",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 8 14",key:"tmc9b4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=n("Clock9",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 7.5 12",key:"1k60p0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=n("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=n("CloudCog",[["circle",{cx:"12",cy:"17",r:"3",key:"1spfwm"}],["path",{d:"M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2",key:"zaobp"}],["path",{d:"m15.7 18.4-.9-.3",key:"4qxpbn"}],["path",{d:"m9.2 15.9-.9-.3",key:"17q7o2"}],["path",{d:"m10.6 20.7.3-.9",key:"1pf4s2"}],["path",{d:"m13.1 14.2.3-.9",key:"1mnuqm"}],["path",{d:"m13.6 20.7-.4-1",key:"1jpd1m"}],["path",{d:"m10.8 14.3-.4-1",key:"17ugyy"}],["path",{d:"m8.3 18.6 1-.4",key:"s42vdx"}],["path",{d:"m14.7 15.8 1-.4",key:"2wizun"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=n("CloudDrizzle",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 19v1",key:"1dk2by"}],["path",{d:"M8 14v1",key:"84yxot"}],["path",{d:"M16 19v1",key:"v220m7"}],["path",{d:"M16 14v1",key:"g12gj6"}],["path",{d:"M12 21v1",key:"q8vafk"}],["path",{d:"M12 16v1",key:"1mx6rx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=n("CloudFog",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 17H7",key:"pygtm1"}],["path",{d:"M17 21H9",key:"1u2q02"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=n("CloudHail",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v2",key:"a1is7l"}],["path",{d:"M8 14v2",key:"1e9m6t"}],["path",{d:"M16 20h.01",key:"xwek51"}],["path",{d:"M8 20h.01",key:"1vjney"}],["path",{d:"M12 16v2",key:"z66u1j"}],["path",{d:"M12 22h.01",key:"1urd7a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=n("CloudLightning",[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",key:"1cez44"}],["path",{d:"m13 12-3 5h4l-3 5",key:"1t22er"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=n("CloudMoonRain",[["path",{d:"M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197",key:"u82z8m"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",key:"1qmrp3"}],["path",{d:"M11 20v2",key:"174qtz"}],["path",{d:"M7 19v2",key:"12npes"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=n("CloudMoon",[["path",{d:"M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z",key:"p44pc9"}],["path",{d:"M10.1 9A6 6 0 0 1 16 4a4.24 4.24 0 0 0 6 6 6 6 0 0 1-3 5.197",key:"16nha0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=n("CloudOff",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193",key:"yfwify"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07",key:"jlfiyv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=n("CloudRainWind",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m9.2 22 3-7",key:"sb5f6j"}],["path",{d:"m9 13-3 7",key:"500co5"}],["path",{d:"m17 13-3 7",key:"8t2fiy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=n("CloudRain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=n("CloudSnow",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M8 19h.01",key:"puxtts"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M12 21h.01",key:"h35vbk"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M16 19h.01",key:"1vcnzz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=n("CloudSunRain",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",key:"1qmrp3"}],["path",{d:"M11 20v2",key:"174qtz"}],["path",{d:"M7 19v2",key:"12npes"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=n("CloudSun",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",key:"s09mg5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=n("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=n("Cloudy",[["path",{d:"M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"gqqjvc"}],["path",{d:"M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5",key:"1p2s76"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=n("Clover",[["path",{d:"M16.17 7.83 2 22",key:"t58vo8"}],["path",{d:"M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12",key:"17k36q"}],["path",{d:"m7.83 7.83 8.34 8.34",key:"1d7sxk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=n("Club",[["path",{d:"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z",key:"27yuqz"}],["path",{d:"M12 17.66L12 22",key:"ogfahf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=n("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=n("CodeSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m10 10-2 2 2 2",key:"p6et6i"}],["path",{d:"m14 14 2-2-2-2",key:"m075q2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=n("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=n("Codepen",[["polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2",key:"srzb37"}],["line",{x1:"12",x2:"12",y1:"22",y2:"15.5",key:"1t73f2"}],["polyline",{points:"22 8.5 12 15.5 2 8.5",key:"ajlxae"}],["polyline",{points:"2 15.5 12 8.5 22 15.5",key:"susrui"}],["line",{x1:"12",x2:"12",y1:"2",y2:"8.5",key:"2cldga"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=n("Codesandbox",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["polyline",{points:"7.5 4.21 12 6.81 16.5 4.21",key:"fabo96"}],["polyline",{points:"7.5 19.79 7.5 14.6 3 12",key:"z377f1"}],["polyline",{points:"21 12 16.5 14.6 16.5 19.79",key:"9nrev1"}],["polyline",{points:"3.27 6.96 12 12.01 20.73 6.96",key:"1180pa"}],["line",{x1:"12",x2:"12",y1:"22.08",y2:"12",key:"3z3uq6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=n("Coffee",[["path",{d:"M17 8h1a4 4 0 1 1 0 8h-1",key:"jx4kbh"}],["path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",key:"1bxrl0"}],["line",{x1:"6",x2:"6",y1:"2",y2:"4",key:"1cr9l3"}],["line",{x1:"10",x2:"10",y1:"2",y2:"4",key:"170wym"}],["line",{x1:"14",x2:"14",y1:"2",y2:"4",key:"1c5f70"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=n("Cog",[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",key:"sobvz5"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",key:"11i496"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=n("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=n("Columns2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=n("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=n("Columns4",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7.5 3v18",key:"w0wo6v"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M16.5 3v18",key:"10tjh1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=n("Combine",[["rect",{width:"8",height:"8",x:"2",y:"2",rx:"2",key:"z1hh3n"}],["path",{d:"M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"83orz6"}],["path",{d:"M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"k86dmt"}],["path",{d:"M10 18H5c-1.7 0-3-1.3-3-3v-1",key:"6vokjl"}],["polyline",{points:"7 21 10 18 7 15",key:"1k02g0"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2",key:"1fa9i4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=n("Command",[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=n("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=n("Component",[["path",{d:"M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z",key:"1kciei"}],["path",{d:"m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z",key:"1ome0g"}],["path",{d:"M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z",key:"vbupec"}],["path",{d:"m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z",key:"16csic"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=n("Computer",[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=n("ConciergeBell",[["path",{d:"M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z",key:"1pvr1r"}],["path",{d:"M20 16a8 8 0 1 0-16 0",key:"1pa543"}],["path",{d:"M12 4v4",key:"1bq03y"}],["path",{d:"M10 4h4",key:"1xpv9s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=n("Cone",[["path",{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98",key:"53pte7"}],["ellipse",{cx:"12",cy:"19",rx:"9",ry:"3",key:"1ji25f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=n("Construction",[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1",key:"1estib"}],["path",{d:"M17 14v7",key:"7m2elx"}],["path",{d:"M7 14v7",key:"1cm7wv"}],["path",{d:"M17 3v3",key:"1v4jwn"}],["path",{d:"M7 3v3",key:"7o6guu"}],["path",{d:"M10 14 2.3 6.3",key:"1023jk"}],["path",{d:"m14 6 7.7 7.7",key:"1s8pl2"}],["path",{d:"m8 6 8 8",key:"hl96qh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=n("Contact2",[["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}],["circle",{cx:"12",cy:"11",r:"3",key:"itu57m"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4",key:"1ff9gb"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4",key:"1ufoma"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=n("Contact",[["path",{d:"M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2",key:"1mghuy"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["circle",{cx:"12",cy:"10",r:"2",key:"1yojzk"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4",key:"1ff9gb"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4",key:"1ufoma"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=n("Container",[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",key:"1t2lqe"}],["path",{d:"M10 21.9V14L2.1 9.1",key:"o7czzq"}],["path",{d:"m10 14 11.9-6.9",key:"zm5e20"}],["path",{d:"M14 19.8v-8.1",key:"159ecu"}],["path",{d:"M18 17.5V9.4",key:"11uown"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=n("Contrast",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=n("Cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=n("CookingPot",[["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",key:"u0tga0"}],["path",{d:"m4 8 16-4",key:"16g0ng"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8",key:"12cejc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=n("CopyCheck",[["path",{d:"m12 15 2 2 4-4",key:"2c609p"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=n("CopyMinus",[["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=n("CopyPlus",[["line",{x1:"15",x2:"15",y1:"12",y2:"18",key:"1p7wdc"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=n("CopySlash",[["line",{x1:"12",x2:"18",y1:"18",y2:"12",key:"ebkxgr"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=n("CopyX",[["line",{x1:"12",x2:"18",y1:"12",y2:"18",key:"1rg63v"}],["line",{x1:"12",x2:"18",y1:"18",y2:"12",key:"ebkxgr"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=n("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=n("Copyleft",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.17 14.83a4 4 0 1 0 0-5.66",key:"1sveal"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=n("Copyright",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M14.83 14.83a4 4 0 1 1 0-5.66",key:"1i56pz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=n("CornerDownLeft",[["polyline",{points:"9 10 4 15 9 20",key:"r3jprv"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ys=n("CornerDownRight",[["polyline",{points:"15 10 20 15 15 20",key:"1q7qjw"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12",key:"z08zvw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=n("CornerLeftDown",[["polyline",{points:"14 15 9 20 4 15",key:"nkc4i"}],["path",{d:"M20 4h-7a4 4 0 0 0-4 4v12",key:"nbpdq2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=n("CornerLeftUp",[["polyline",{points:"14 9 9 4 4 9",key:"m9oyvo"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4",key:"1blwi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=n("CornerRightDown",[["polyline",{points:"10 15 15 20 20 15",key:"axus6l"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12",key:"wcbgct"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=n("CornerRightUp",[["polyline",{points:"10 9 15 4 20 9",key:"1lr6px"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4",key:"1plgdj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=n("CornerUpLeft",[["polyline",{points:"9 14 4 9 9 4",key:"881910"}],["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=n("CornerUpRight",[["polyline",{points:"15 14 20 9 15 4",key:"1tbx3s"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12",key:"1lu4f8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=n("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=n("CreativeCommons",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",key:"1ss3eq"}],["path",{d:"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",key:"1od56t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=n("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=n("Croissant",[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",key:"1ozxlb"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",key:"ffuyb5"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",key:"osnpzi"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",key:"1vubaw"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",key:"wxr772"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=n("Crop",[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14",key:"ron5a4"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2",key:"7s9ehn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=n("Cross",[["path",{d:"M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z",key:"1t5g7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=n("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=n("Crown",[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",key:"zkxr6b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=n("Cuboid",[["path",{d:"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z",key:"1u2ovd"}],["path",{d:"M10 22v-8L2.25 9.15",key:"11pn4q"}],["path",{d:"m10 14 11.77-6.87",key:"1kt1wh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=n("CupSoda",[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",key:"8166m8"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"yjz344"}],["path",{d:"m12 8 1-6h2",key:"3ybfa4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=n("Currency",[["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}],["line",{x1:"3",x2:"6",y1:"3",y2:"6",key:"1jkytn"}],["line",{x1:"21",x2:"18",y1:"3",y2:"6",key:"14zfjt"}],["line",{x1:"3",x2:"6",y1:"21",y2:"18",key:"iusuec"}],["line",{x1:"21",x2:"18",y1:"21",y2:"18",key:"yj2dd7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=n("Cylinder",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5",key:"aqi0yr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=n("DatabaseBackup",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 12a9 3 0 0 0 5 2.69",key:"1ui2ym"}],["path",{d:"M21 9.3V5",key:"6k6cib"}],["path",{d:"M3 5v14a9 3 0 0 0 6.47 2.88",key:"i62tjy"}],["path",{d:"M12 12v4h4",key:"1bxaet"}],["path",{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16",key:"1f4ei9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=n("DatabaseZap",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84",key:"14ibmq"}],["path",{d:"M21 5V8",key:"1marbg"}],["path",{d:"M21 12L18 17H22L19 22",key:"zafso"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87",key:"1y4wr8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=n("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=n("Delete",[["path",{d:"M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z",key:"1oy587"}],["line",{x1:"18",x2:"12",y1:"9",y2:"15",key:"1olkx5"}],["line",{x1:"12",x2:"18",y1:"9",y2:"15",key:"1n50pc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=n("Dessert",[["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}],["path",{d:"M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8",key:"lfo06j"}],["path",{d:"M3.2 14.8a9 9 0 0 0 17.6 0",key:"12xarc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=n("Diameter",[["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}],["path",{d:"M6.48 3.66a10 10 0 0 1 13.86 13.86",key:"xr8kdq"}],["path",{d:"m6.41 6.41 11.18 11.18",key:"uhpjw7"}],["path",{d:"M3.66 6.48a10 10 0 0 0 13.86 13.86",key:"cldpwv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=n("Diamond",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=n("Dice1",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=n("Dice2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M15 9h.01",key:"x1ddxp"}],["path",{d:"M9 15h.01",key:"fzyn71"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=n("Dice3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=n("Dice4",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=n("Dice5",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=n("Dice6",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=n("Dices",[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=n("Diff",[["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=n("Disc2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=n("Disc3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=n("DiscAlbum",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"12",r:"5",key:"nd82uf"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=n("Disc",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=n("DivideCircle",[["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16",key:"aqc6ln"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8",key:"1mkcni"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=n("DivideSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16",key:"aqc6ln"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8",key:"1mkcni"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=n("Divide",[["circle",{cx:"12",cy:"6",r:"1",key:"1bh7o1"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12",key:"13b5wn"}],["circle",{cx:"12",cy:"18",r:"1",key:"lqb9t5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=n("DnaOff",[["path",{d:"M15 2c-1.35 1.5-2.092 3-2.5 4.5M9 22c1.35-1.5 2.092-3 2.5-4.5",key:"sxiaad"}],["path",{d:"M2 15c3.333-3 6.667-3 10-3m10-3c-1.5 1.35-3 2.092-4.5 2.5",key:"yn4bs1"}],["path",{d:"m17 6-2.5-2.5",key:"5cdfhj"}],["path",{d:"m14 8-1.5-1.5",key:"1ohn8i"}],["path",{d:"m7 18 2.5 2.5",key:"16tu1a"}],["path",{d:"m3.5 14.5.5.5",key:"hapbhd"}],["path",{d:"m20 9 .5.5",key:"1n7z02"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m10 16 1.5 1.5",key:"11lckj"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=n("Dna",[["path",{d:"M2 15c6.667-6 13.333 0 20-6",key:"1pyr53"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993",key:"q3hbxp"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",key:"80uv8i"}],["path",{d:"m17 6-2.5-2.5",key:"5cdfhj"}],["path",{d:"m14 8-1-1",key:"15nbz5"}],["path",{d:"m7 18 2.5 2.5",key:"16tu1a"}],["path",{d:"m3.5 14.5.5.5",key:"hapbhd"}],["path",{d:"m20 9 .5.5",key:"1n7z02"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m10 16 1.5 1.5",key:"11lckj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=n("Dog",[["path",{d:"M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5",key:"19br0u"}],["path",{d:"M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",key:"11n1an"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306",key:"wsu29d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=n("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=n("Donut",[["path",{d:"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3",key:"19sr3x"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=n("DoorClosed",[["path",{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14",key:"36qu9e"}],["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"M14 12v.01",key:"xfcn54"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=n("DoorOpen",[["path",{d:"M13 4h3a2 2 0 0 1 2 2v14",key:"hrm0s9"}],["path",{d:"M2 20h3",key:"1gaodv"}],["path",{d:"M13 20h9",key:"s90cdi"}],["path",{d:"M10 12v.01",key:"vx6srw"}],["path",{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",key:"199qr4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=n("DotSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=n("Dot",[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=n("DownloadCloud",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m8 17 4 4 4-4",key:"1ul180"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=n("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=n("DraftingCompass",[["circle",{cx:"12",cy:"5",r:"2",key:"f1ur92"}],["path",{d:"m3 21 8.02-14.26",key:"1ssaw4"}],["path",{d:"m12.99 6.74 1.93 3.44",key:"iwagvd"}],["path",{d:"M19 12c-3.87 4-10.13 4-14 0",key:"1tsu18"}],["path",{d:"m21 21-2.16-3.84",key:"vylbct"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=n("Drama",[["path",{d:"M10 11h.01",key:"d2at3l"}],["path",{d:"M14 6h.01",key:"k028ub"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6.5 13.1h.01",key:"1748ia"}],["path",{d:"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3",key:"172yzv"}],["path",{d:"M17.4 9.9c-.8.8-2 .8-2.8 0",key:"1obv0w"}],["path",{d:"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7",key:"rqjl8i"}],["path",{d:"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4",key:"1mr6wy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=n("Dribbble",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94",key:"hpej1"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32",key:"1tr44o"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72",key:"kbh691"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=n("Drill",[["path",{d:"M14 9c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1Z",key:"b6nnkj"}],["path",{d:"M18 6h4",key:"66u95g"}],["path",{d:"M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3",key:"105ega"}],["path",{d:"m5 10-2 8",key:"xt2lic"}],["path",{d:"M12 10v3c0 .6-.4 1-1 1H8",key:"mwpjnk"}],["path",{d:"m7 18 2-8",key:"1bzku2"}],["path",{d:"M5 22c-1.7 0-3-1.3-3-3 0-.6.4-1 1-1h7c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z",key:"117add"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=n("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=n("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=n("Drum",[["path",{d:"m2 2 8 8",key:"1v6059"}],["path",{d:"m22 2-8 8",key:"173r8a"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5",key:"liohsx"}],["path",{d:"M7 13.4v7.9",key:"1yi6u9"}],["path",{d:"M12 14v8",key:"1tn2tj"}],["path",{d:"M17 13.4v7.9",key:"eqz2v3"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9",key:"1750ul"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=n("Drumstick",[["path",{d:"M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z",key:"1o96s0"}],["path",{d:"m11.25 15.6-2.16 2.16a2.5 2.5 0 1 1-4.56 1.73 2.49 2.49 0 0 1-1.41-4.24 2.5 2.5 0 0 1 3.14-.32l2.16-2.16",key:"14vv5h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=n("Dumbbell",[["path",{d:"m6.5 6.5 11 11",key:"f7oqzb"}],["path",{d:"m21 21-1-1",key:"cpc6if"}],["path",{d:"m3 3 1 1",key:"d3rpuf"}],["path",{d:"m18 22 4-4",key:"1e32o6"}],["path",{d:"m2 6 4-4",key:"189tqz"}],["path",{d:"m3 10 7-7",key:"1bxui2"}],["path",{d:"m14 21 7-7",key:"16x78n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=n("EarOff",[["path",{d:"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46",key:"1qngmn"}],["path",{d:"M6 8.5c0-.75.13-1.47.36-2.14",key:"b06bma"}],["path",{d:"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76",key:"g10hsz"}],["path",{d:"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18",key:"ygzou7"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=n("Ear",[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0",key:"1dfaln"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4",key:"1qnva7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=n("EarthLock",[["path",{d:"M7 3.34V5a3 3 0 0 0 3 3",key:"w732o8"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"f02343"}],["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M12 2a10 10 0 1 0 9.54 13",key:"zjsr6q"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2",key:"1of5e8"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1",key:"1fmf51"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=n("Earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17",key:"1fi5u6"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"xsiumc"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=n("Eclipse",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a7 7 0 1 0 10 10",key:"1yuj32"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=n("EggFried",[["circle",{cx:"11.5",cy:"12.5",r:"3.5",key:"1cl1mi"}],["path",{d:"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z",key:"165ef9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=n("EggOff",[["path",{d:"M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625",key:"6et380"}],["path",{d:"M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297",key:"gcdc3f"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=n("Egg",[["path",{d:"M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z",key:"1c39pg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=n("EqualNot",[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=n("EqualSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M7 14h10",key:"1mhdw3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=n("Equal",[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=n("Eraser",[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",key:"182aya"}],["path",{d:"M22 21H7",key:"t4ddhn"}],["path",{d:"m5 11 9 9",key:"1mo9qw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=n("Euro",[["path",{d:"M4 10h12",key:"1y6xl8"}],["path",{d:"M4 14h9",key:"1loblj"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",key:"1j6lzo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=n("Expand",[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8",key:"1c15vz"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6",key:"1fsnz2"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6",key:"hawz9i"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6",key:"u9ee12"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=n("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=n("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=n("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=n("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=n("Factory",[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"159hny"}],["path",{d:"M17 18h1",key:"uldtlt"}],["path",{d:"M12 18h1",key:"s9uhes"}],["path",{d:"M7 18h1",key:"1neino"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=n("Fan",[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",key:"484a7f"}],["path",{d:"M12 12v.01",key:"u5ubse"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=n("FastForward",[["polygon",{points:"13 19 22 12 13 5 13 19",key:"587y9g"}],["polygon",{points:"2 19 11 12 2 5 2 19",key:"3pweh0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=n("Feather",[["path",{d:"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z",key:"u4sw5n"}],["line",{x1:"16",x2:"2",y1:"8",y2:"22",key:"1c47m2"}],["line",{x1:"17.5",x2:"9",y1:"15",y2:"15",key:"2fj3pr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=n("Fence",[["path",{d:"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"1n2rgs"}],["path",{d:"M6 8h4",key:"utf9t1"}],["path",{d:"M6 18h4",key:"12yh4b"}],["path",{d:"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"3ha7mj"}],["path",{d:"M14 8h4",key:"1r8wg2"}],["path",{d:"M14 18h4",key:"1t3kbu"}],["path",{d:"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"dfd4e2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=n("FerrisWheel",[["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m6.8 15-3.5 2",key:"hjy98k"}],["path",{d:"m20.7 7-3.5 2",key:"f08gto"}],["path",{d:"M6.8 9 3.3 7",key:"1aevh4"}],["path",{d:"m20.7 17-3.5-2",key:"1liqo3"}],["path",{d:"m9 22 3-8 3 8",key:"wees03"}],["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M18 18.7a9 9 0 1 0-12 0",key:"dhzg4g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=n("Figma",[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",key:"1340ok"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",key:"1hz3m3"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",key:"1oz8n2"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",key:"1ff65i"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",key:"pdip6e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=n("FileArchive",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v18",key:"1oywqq"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"20",r:"2",key:"1xzdoj"}],["path",{d:"M10 7V6",key:"dljcrl"}],["path",{d:"M10 12v-1",key:"v7bkov"}],["path",{d:"M10 18v-2",key:"1cjy8d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=n("FileAudio2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"3",cy:"17",r:"1",key:"vo6nti"}],["path",{d:"M2 17v-3a4 4 0 0 1 8 0v3",key:"1ggdre"}],["circle",{cx:"9",cy:"17",r:"1",key:"bc1fq4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=n("FileAudio",[["path",{d:"M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"rslqgf"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0",key:"9f7x3i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=n("FileAxis3d",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 18 4-4",key:"12zab0"}],["path",{d:"M8 10v8h8",key:"tlaukw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=n("FileBadge2",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14 12.5 1 5.5-3-1-3 1 1-5.5",key:"14xlky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=n("FileBadge",[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"12ixgl"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",key:"u0c8gj"}],["path",{d:"M7 16.5 8 22l-3-1-3 1 1-5.5",key:"5gm2nr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=n("FileBarChart2",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 18v-1",key:"zg0ygc"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"M16 18v-3",key:"j5jt4h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=n("FileBarChart",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 18v-2",key:"qcmpov"}],["path",{d:"M12 18v-4",key:"q1q25u"}],["path",{d:"M16 18v-6",key:"15y0np"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=n("FileBox",[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"16lz6z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z",key:"99pj1s"}],["path",{d:"M7 17v5",key:"1yj1jh"}],["path",{d:"M11.7 14.2 7 17l-4.7-2.8",key:"1yk8tc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=n("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=n("FileCheck",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=n("FileClock",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"8",cy:"16",r:"6",key:"10v15b"}],["path",{d:"M9.5 17.5 8 16.25V14",key:"1o80t2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=n("FileCode2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=n("FileCode",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=n("FileCog",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"6",cy:"14",r:"3",key:"a1xfv6"}],["path",{d:"M6 10v1",key:"xs0f9j"}],["path",{d:"M6 17v1",key:"idyhc0"}],["path",{d:"M10 14H9",key:"m5fm2q"}],["path",{d:"M3 14H2",key:"19ot09"}],["path",{d:"m9 11-.88.88",key:"lhul2b"}],["path",{d:"M3.88 16.12 3 17",key:"169z9n"}],["path",{d:"m9 17-.88-.88",key:"5io96w"}],["path",{d:"M3.88 11.88 3 11",key:"1ynhy1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=n("FileDiff",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M9 17h6",key:"r8uit2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=n("FileDigit",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"4",height:"6",x:"2",y:"12",rx:"2",key:"jm304g"}],["path",{d:"M10 12h2v6",key:"12zw74"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=n("FileDown",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=n("FileHeart",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",key:"1c1fso"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=n("FileImage",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=n("FileInput",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 15h10",key:"jfw4w8"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=n("FileJson2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"fq0c9t"}],["path",{d:"M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"4gibmv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=n("FileJson",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=n("FileKey2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6",key:"rc0qvx"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"4",cy:"16",r:"2",key:"1ehqvc"}],["path",{d:"m10 10-4.5 4.5",key:"7fwrp6"}],["path",{d:"m9 11 1 1",key:"wa6s5q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=n("FileKey",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["circle",{cx:"10",cy:"16",r:"2",key:"4ckbqe"}],["path",{d:"m16 10-4.5 4.5",key:"7p3ebg"}],["path",{d:"m15 11 1 1",key:"1bsyx3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=n("FileLineChart",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m16 13-3.5 3.5-2-2L8 17",key:"zz7yod"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=n("FileLock2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1",key:"jmtmu2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"8",height:"5",x:"2",y:"13",rx:"1",key:"10y5wo"}],["path",{d:"M8 13v-2a2 2 0 1 0-4 0v2",key:"1pdxzg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=n("FileLock",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["rect",{width:"8",height:"6",x:"8",y:"12",rx:"1",key:"3yr8at"}],["path",{d:"M10 12v-2a2 2 0 1 1 4 0v2",key:"j4i8d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=n("FileMinus2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=n("FileMinus",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=n("FileMusic",[["circle",{cx:"14",cy:"16",r:"2",key:"1bzzi3"}],["circle",{cx:"6",cy:"18",r:"2",key:"1fncim"}],["path",{d:"M4 12.4V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-7.5",key:"skc018"}],["path",{d:"M8 18v-7.7L16 9v7",key:"1oie6o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=n("FileOutput",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2",key:"1vk7w2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6",key:"1jink5"}],["path",{d:"m5 11-3 3",key:"1dgrs4"}],["path",{d:"m5 17-3-3h10",key:"1mvvaf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=n("FilePenLine",[["path",{d:"m18 5-3-3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2",key:"h0fsxq"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M18.4 9.6a2 2 0 1 1 3 3L17 17l-4 1 1-4Z",key:"dyo8mm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=n("FilePen",[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10",key:"x7tsz2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z",key:"o3xyfb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=n("FilePieChart",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 11.5a6.02 6.02 0 1 0 8.5 8.5",key:"unkkko"}],["path",{d:"M14 16c0-3.3-2.7-6-6-6v6Z",key:"bym002"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=n("FilePlus2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}],["path",{d:"M6 12v6",key:"1u72j0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=n("FilePlus",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}],["path",{d:"M12 18v-6",key:"17g6i2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=n("FileQuestion",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",key:"1umxtm"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=n("FileScan",[["path",{d:"M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4",key:"1rdf37"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M16 14a2 2 0 0 0-2 2",key:"ceaadl"}],["path",{d:"M20 14a2 2 0 0 1 2 2",key:"1ny6zw"}],["path",{d:"M20 22a2 2 0 0 0 2-2",key:"1l9q4k"}],["path",{d:"M16 22a2 2 0 0 1-2-2",key:"1wqh5n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=n("FileSearch2",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5",key:"1bq0ko"}],["path",{d:"M13.3 16.3 15 18",key:"2quom7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=n("FileSearch",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"1vg67v"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=n("FileSliders",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M10 11v2",key:"1s651w"}],["path",{d:"M8 17h8",key:"wh5c61"}],["path",{d:"M14 16v2",key:"12fp5e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=n("FileSpreadsheet",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=n("FileStack",[["path",{d:"M21 7h-3a2 2 0 0 1-2-2V2",key:"9rb54x"}],["path",{d:"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z",key:"1059l0"}],["path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15",key:"16874u"}],["path",{d:"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11",key:"k2ox98"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=n("FileSymlink",[["path",{d:"m10 18 3-3-3-3",key:"18f6ys"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",key:"50q2rw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=n("FileTerminal",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 16 2-2-2-2",key:"10vzyd"}],["path",{d:"M12 18h4",key:"1wd2n7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=n("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=n("FileType2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 13v-1h6v1",key:"1dh9dg"}],["path",{d:"M5 12v6",key:"150t9c"}],["path",{d:"M4 18h2",key:"1xrofg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=n("FileType",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 13v-1h6v1",key:"1bb014"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M11 18h2",key:"12mj7e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=n("FileUp",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=n("FileVideo2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"8",height:"6",x:"2",y:"12",rx:"1",key:"1a6c1e"}],["path",{d:"m10 15.5 4 2.5v-6l-4 2.5",key:"t7cp39"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=n("FileVideo",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 11 5 3-5 3v-6Z",key:"7ntvm4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=n("FileVolume2",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M11.5 13.5a2.5 2.5 0 0 1 0 3",key:"1fccat"}],["path",{d:"M15 12a5 5 0 0 1 0 6",key:"ps46cm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=n("FileVolume",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"1vg67v"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m7 10-3 2H2v4h2l3 2Z",key:"fiq8l4"}],["path",{d:"M11 11a5 5 0 0 1 0 6",key:"193qb2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=n("FileWarning",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=n("FileX2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 12.5-5 5",key:"b853mi"}],["path",{d:"m3 12.5 5 5",key:"1qls4r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=n("FileX",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14.5 12.5-5 5",key:"b62r18"}],["path",{d:"m9.5 12.5 5 5",key:"1rk7el"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=n("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=n("Files",[["path",{d:"M20 7h-3a2 2 0 0 1-2-2V2",key:"x099mo"}],["path",{d:"M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z",key:"18t6ie"}],["path",{d:"M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8",key:"1nja0z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=n("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=n("FilterX",[["path",{d:"M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055",key:"1fi1da"}],["path",{d:"m22 3-5 5",key:"12jva0"}],["path",{d:"m17 3 5 5",key:"k36vhe"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=n("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=n("Fingerprint",[["path",{d:"M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4",key:"1jc9o5"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2",key:"1mxgy1"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2",key:"1fgabc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=n("FireExtinguisher",[["path",{d:"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5",key:"sqyvz"}],["path",{d:"M9 18h8",key:"i7pszb"}],["path",{d:"M18 3h-3",key:"7idoqj"}],["path",{d:"M11 3a6 6 0 0 0-6 6v11",key:"1v5je3"}],["path",{d:"M5 13h4",key:"svpcxo"}],["path",{d:"M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z",key:"vsjego"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=n("FishOff",[["path",{d:"M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058",key:"1j1hse"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618",key:"1q46z8"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20",key:"1407gh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=n("FishSymbol",[["path",{d:"M2 16s9-15 20-4C11 23 2 8 2 8",key:"h4oh4o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=n("Fish",[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",key:"15baut"}],["path",{d:"M18 12v.5",key:"18hhni"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86",key:"16dt7o"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",key:"l9di03"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4",key:"1kjonw"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98",key:"1zlm23"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=n("FlagOff",[["path",{d:"M8 2c3 0 5 2 8 2s4-1 4-1v11",key:"9rwyz9"}],["path",{d:"M4 22V4",key:"1plyxx"}],["path",{d:"M4 15s1-1 4-1 5 2 8 2",key:"1myooe"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=n("FlagTriangleLeft",[["path",{d:"M17 22V2L7 7l10 5",key:"1rmf0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=n("FlagTriangleRight",[["path",{d:"M7 22V2l10 5-10 5",key:"17n18y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=n("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=n("FlameKindling",[["path",{d:"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z",key:"1ir223"}],["path",{d:"m5 22 14-4",key:"1brv4h"}],["path",{d:"m5 18 14 4",key:"lgyyje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=n("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=n("FlashlightOff",[["path",{d:"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4",key:"1r120k"}],["path",{d:"M7 2h11v4c0 2-2 2-2 4v1",key:"dz1920"}],["line",{x1:"11",x2:"18",y1:"6",y2:"6",key:"bi1vpe"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=n("Flashlight",[["path",{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z",key:"1orkel"}],["line",{x1:"6",x2:"18",y1:"6",y2:"6",key:"1z11jq"}],["line",{x1:"12",x2:"12",y1:"12",y2:"12",key:"1f4yc1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=n("FlaskConicalOff",[["path",{d:"M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542",key:"59ek9y"}],["path",{d:"M10 2v2.343",key:"15t272"}],["path",{d:"M14 2v6.343",key:"sxr80q"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h9",key:"t5njau"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=n("FlaskConical",[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",key:"pzvekw"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=n("FlaskRound",[["path",{d:"M10 2v7.31",key:"5d1hyh"}],["path",{d:"M14 9.3V1.99",key:"14k4l0"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14 9.3a6.5 6.5 0 1 1-4 0",key:"1r8fvy"}],["path",{d:"M5.52 16h12.96",key:"46hh1i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=n("FlipHorizontal2",[["path",{d:"m3 7 5 5-5 5V7",key:"couhi7"}],["path",{d:"m21 7-5 5 5 5V7",key:"6ouia7"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=n("FlipHorizontal",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3",key:"1i73f7"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3",key:"saxlbk"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=n("FlipVertical2",[["path",{d:"m17 3-5 5-5-5h10",key:"1ftt6x"}],["path",{d:"m17 21-5-5-5 5h10",key:"1m0wmu"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=n("FlipVertical",[["path",{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3",key:"14bfxa"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3",key:"14rx03"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=n("Flower2",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=n("Flower",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5",key:"14wa3c"}],["path",{d:"M12 7.5V9",key:"1oy5b0"}],["path",{d:"M7.5 12H9",key:"eltsq1"}],["path",{d:"M16.5 12H15",key:"vk5kw4"}],["path",{d:"M12 16.5V15",key:"k7eayi"}],["path",{d:"m8 8 1.88 1.88",key:"nxy4qf"}],["path",{d:"M14.12 9.88 16 8",key:"1lst6k"}],["path",{d:"m8 16 1.88-1.88",key:"h2eex1"}],["path",{d:"M14.12 14.12 16 16",key:"uqkrx3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=n("Focus",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=n("FoldHorizontal",[["path",{d:"M2 12h6",key:"1wqiqv"}],["path",{d:"M22 12h-6",key:"1eg9hc"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m19 9-3 3 3 3",key:"12ol22"}],["path",{d:"m5 15 3-3-3-3",key:"1kdhjc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=n("FoldVertical",[["path",{d:"M12 22v-6",key:"6o8u61"}],["path",{d:"M12 8V2",key:"1wkif3"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}],["path",{d:"m15 19-3-3-3 3",key:"e37ymu"}],["path",{d:"m15 5-3 3-3-3",key:"19d6lf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=n("FolderArchive",[["circle",{cx:"15",cy:"19",r:"2",key:"u2pros"}],["path",{d:"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1",key:"1jj40k"}],["path",{d:"M15 11v-1",key:"cntcp"}],["path",{d:"M15 17v-2",key:"1279jj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=n("FolderCheck",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9 13 2 2 4-4",key:"6343dt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=n("FolderClock",[["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}],["path",{d:"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2",key:"1urifu"}],["path",{d:"M16 14v2l1 1",key:"xth2jh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=n("FolderClosed",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M2 10h20",key:"1ir3d8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=n("FolderCog",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3",key:"1k8050"}],["path",{d:"m21.7 19.4-.9-.3",key:"1qgwi9"}],["path",{d:"m15.2 16.9-.9-.3",key:"1t7mvx"}],["path",{d:"m16.6 21.7.3-.9",key:"1j67ps"}],["path",{d:"m19.1 15.2.3-.9",key:"18r7jp"}],["path",{d:"m19.6 21.7-.4-1",key:"z2vh2"}],["path",{d:"m16.8 15.3-.4-1",key:"1ei7r6"}],["path",{d:"m14.3 19.6 1-.4",key:"11sv9r"}],["path",{d:"m20.7 16.8 1-.4",key:"19m87a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=n("FolderDot",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["circle",{cx:"12",cy:"13",r:"1",key:"49l61u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=n("FolderDown",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m15 13-3 3-3-3",key:"6j2sf0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=n("FolderGit2",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=n("FolderGit",[["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M14 13h3",key:"1dgedf"}],["path",{d:"M7 13h3",key:"1pygq7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=n("FolderHeart",[["path",{d:"M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5",key:"6hud8k"}],["path",{d:"M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01v0c.95.95 1 2.53-.2 3.74L17.5 21Z",key:"vgq86i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=n("FolderInput",[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",key:"fm4g5t"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m9 16 3-3-3-3",key:"6m91ic"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=n("FolderKanban",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=n("FolderKey",[["circle",{cx:"16",cy:"20",r:"2",key:"1vifvg"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2",key:"3hgo9p"}],["path",{d:"m22 14-4.5 4.5",key:"1ef6z8"}],["path",{d:"m21 15 1 1",key:"1ejcpy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=n("FolderLock",[["rect",{width:"8",height:"5",x:"14",y:"17",rx:"1",key:"19aais"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5",key:"1w6v7t"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2",key:"pwaxnr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=n("FolderMinus",[["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=n("FolderOpenDot",[["path",{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2",key:"1nmvlm"}],["circle",{cx:"14",cy:"15",r:"1",key:"1gm4qj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=n("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=n("FolderOutput",[["path",{d:"M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5",key:"1yk7aj"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m5 10-3 3 3 3",key:"1r8ie0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=n("FolderPen",[["path",{d:"M8.4 10.6a2 2 0 0 1 3 3L6 19l-4 1 1-4Z",key:"dakro8"}],["path",{d:"M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5",key:"a8xqs0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=n("FolderPlus",[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=n("FolderRoot",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}],["path",{d:"M12 15v5",key:"11xva1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=n("FolderSearch2",[["circle",{cx:"11.5",cy:"12.5",r:"2.5",key:"1ea5ju"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M13.3 14.3 15 16",key:"1y4v1n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=n("FolderSearch",[["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["path",{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1",key:"1bw5m7"}],["path",{d:"m21 21-1.5-1.5",key:"3sg1j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=n("FolderSymlink",[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",key:"x1c07l"}],["path",{d:"m8 16 3-3-3-3",key:"rlqrt1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=n("FolderSync",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5",key:"1dkoa9"}],["path",{d:"M12 10v4h4",key:"1czhmt"}],["path",{d:"m12 14 1.535-1.605a5 5 0 0 1 8 1.5",key:"lvuxfi"}],["path",{d:"M22 22v-4h-4",key:"1ewp4q"}],["path",{d:"m22 18-1.535 1.605a5 5 0 0 1-8-1.5",key:"14ync0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=n("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=n("FolderUp",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m9 13 3-3 3 3",key:"1pxg3c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=n("FolderX",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9.5 10.5 5 5",key:"ra9qjz"}],["path",{d:"m14.5 10.5-5 5",key:"l2rkpq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=n("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=n("Folders",[["path",{d:"M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z",key:"4u7rpt"}],["path",{d:"M2 8v11a2 2 0 0 0 2 2h14",key:"1eicx1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=n("Footprints",[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=n("Forklift",[["path",{d:"M12 12H5a2 2 0 0 0-2 2v5",key:"7zsz91"}],["circle",{cx:"13",cy:"19",r:"2",key:"wjnkru"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5",key:"13bk1p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=n("FormInput",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M7 12h.01",key:"eqddd0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=n("Forward",[["polyline",{points:"15 17 20 12 15 7",key:"1w3sku"}],["path",{d:"M4 18v-2a4 4 0 0 1 4-4h12",key:"jmiej9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=n("Frame",[["line",{x1:"22",x2:"2",y1:"6",y2:"6",key:"15w7dq"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18",key:"1ip48p"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22",key:"a2lnyx"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22",key:"8vb6jd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=n("Framer",[["path",{d:"M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7",key:"1a2nng"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=n("Frown",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=n("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"8ur5zv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=n("Fullscreen",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["rect",{width:"10",height:"8",x:"7",y:"8",rx:"1",key:"vys8me"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=n("FunctionSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3",key:"m1af9g"}],["path",{d:"M9 11.2h5.7",key:"3zgcl2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=n("GalleryHorizontalEnd",[["path",{d:"M2 7v10",key:"a2pl2d"}],["path",{d:"M6 5v14",key:"1kq3d7"}],["rect",{width:"12",height:"18",x:"10",y:"3",rx:"2",key:"13i7bc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=n("GalleryHorizontal",[["path",{d:"M2 3v18",key:"pzttux"}],["rect",{width:"12",height:"18",x:"6",y:"3",rx:"2",key:"btr8bg"}],["path",{d:"M22 3v18",key:"6jf3v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=n("GalleryThumbnails",[["rect",{width:"18",height:"14",x:"3",y:"3",rx:"2",key:"74y24f"}],["path",{d:"M4 21h1",key:"16zlid"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M19 21h1",key:"edywat"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=n("GalleryVerticalEnd",[["path",{d:"M7 2h10",key:"nczekb"}],["path",{d:"M5 6h14",key:"u2x4p"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2",key:"l0tzu3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=n("GalleryVertical",[["path",{d:"M3 2h18",key:"15qxfx"}],["rect",{width:"18",height:"12",x:"3",y:"6",rx:"2",key:"1439r6"}],["path",{d:"M3 22h18",key:"8prr45"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=n("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=n("Gamepad",[["line",{x1:"6",x2:"10",y1:"12",y2:"12",key:"161bw2"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13",key:"dqpgro"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11",key:"meh2c"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=n("GanttChartSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 8h7",key:"kbo1nt"}],["path",{d:"M8 12h6",key:"ikassy"}],["path",{d:"M11 16h5",key:"oq65wt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=n("GanttChart",[["path",{d:"M8 6h10",key:"9lnwnk"}],["path",{d:"M6 12h9",key:"1g9pqf"}],["path",{d:"M11 18h7",key:"c8dzvl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=n("GaugeCircle",[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7",key:"1e0p6d"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M13.4 10.6 19 5",key:"1kr7tw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=n("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=n("Gavel",[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8",key:"15492f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m9 7 8 8",key:"5jnvq1"}],["path",{d:"m21 11-8-8",key:"z4y7zo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=n("Gem",[["path",{d:"M6 3h12l4 6-10 13L2 9Z",key:"1pcd5k"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6",key:"1fcu3u"}],["path",{d:"M2 9h20",key:"16fsjt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=n("Ghost",[["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",key:"uwwb07"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=n("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=n("GitBranchPlus",[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=n("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=n("GitCommitHorizontal",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=n("GitCommitVertical",[["path",{d:"M12 3v6",key:"1holv5"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 15v6",key:"a9ows0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=n("GitCompareArrows",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9",key:"16sdep"}],["path",{d:"m9 15 3 3-3 3",key:"1m3kbl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=n("GitCompare",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=n("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=n("GitGraph",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v6",key:"158jrl"}],["circle",{cx:"5",cy:"18",r:"3",key:"104gr9"}],["path",{d:"M12 3v18",key:"108xh3"}],["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9",key:"1e3vqb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=n("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=n("GitPullRequestArrow",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v12",key:"ih889a"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=n("GitPullRequestClosed",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 9v12",key:"1sc30k"}],["path",{d:"m21 3-6 6",key:"16nqsk"}],["path",{d:"m21 9-6-6",key:"9j17rh"}],["path",{d:"M18 11.5V15",key:"65xf6f"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=n("GitPullRequestCreateArrow",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v12",key:"ih889a"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v3",key:"1rbwk6"}],["path",{d:"M19 15v6",key:"10aioa"}],["path",{d:"M22 18h-6",key:"1d5gi5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=n("GitPullRequestCreate",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 9v12",key:"1sc30k"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v3",key:"1jb6z3"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=n("GitPullRequestDraft",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M18 6V5",key:"1oao2s"}],["path",{d:"M18 11v-1",key:"11c8tz"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=n("GitPullRequest",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=n("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=n("Gitlab",[["path",{d:"m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z",key:"148pdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=n("GlassWater",[["path",{d:"M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z",key:"48rfw3"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",key:"mjntcy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=n("Glasses",[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=n("GlobeLock",[["path",{d:"M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13",key:"qkt0x6"}],["path",{d:"M2 12h8.5",key:"ovaggd"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2",key:"1of5e8"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1",key:"1fmf51"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=n("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=n("Goal",[["path",{d:"M12 13V2l8 4-8 4",key:"5wlwwj"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29",key:"1c0wjv"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02",key:"gb1g7m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=n("Grab",[["path",{d:"M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4",key:"n5nng"}],["path",{d:"M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2",key:"185i9d"}],["path",{d:"M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5",key:"11pz95"}],["path",{d:"M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"16yk7l"}],["path",{d:"M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0",key:"nzvb1c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=n("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=n("Grape",[["path",{d:"M22 5V2l-5.89 5.89",key:"1eenpo"}],["circle",{cx:"16.6",cy:"15.89",r:"3",key:"xjtalx"}],["circle",{cx:"8.11",cy:"7.4",r:"3",key:"u2fv6i"}],["circle",{cx:"12.35",cy:"11.65",r:"3",key:"i6i8g7"}],["circle",{cx:"13.91",cy:"5.85",r:"3",key:"6ye0dv"}],["circle",{cx:"18.15",cy:"10.09",r:"3",key:"snx9no"}],["circle",{cx:"6.56",cy:"13.2",r:"3",key:"17x4xg"}],["circle",{cx:"10.8",cy:"17.44",r:"3",key:"1hogw9"}],["circle",{cx:"5",cy:"19",r:"3",key:"1sn6vo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=n("Grid2x2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M12 3v18",key:"108xh3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=n("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=n("GripHorizontal",[["circle",{cx:"12",cy:"9",r:"1",key:"124mty"}],["circle",{cx:"19",cy:"9",r:"1",key:"1ruzo2"}],["circle",{cx:"5",cy:"9",r:"1",key:"1a8b28"}],["circle",{cx:"12",cy:"15",r:"1",key:"1e56xg"}],["circle",{cx:"19",cy:"15",r:"1",key:"1a92ep"}],["circle",{cx:"5",cy:"15",r:"1",key:"5r1jwy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=n("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=n("Grip",[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"19",cy:"5",r:"1",key:"w8mnmm"}],["circle",{cx:"5",cy:"5",r:"1",key:"lttvr7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}],["circle",{cx:"19",cy:"19",r:"1",key:"shf9b7"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=n("Group",[["path",{d:"M3 7V5c0-1.1.9-2 2-2h2",key:"adw53z"}],["path",{d:"M17 3h2c1.1 0 2 .9 2 2v2",key:"an4l38"}],["path",{d:"M21 17v2c0 1.1-.9 2-2 2h-2",key:"144t0e"}],["path",{d:"M7 21H5c-1.1 0-2-.9-2-2v-2",key:"rtnfgi"}],["rect",{width:"7",height:"5",x:"7",y:"7",rx:"1",key:"1eyiv7"}],["rect",{width:"7",height:"5",x:"10",y:"12",rx:"1",key:"1qlmkx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=n("Guitar",[["path",{d:"m20 7 1.7-1.7a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0L17 4v3Z",key:"15ixgv"}],["path",{d:"m17 7-5.1 5.1",key:"l9guh7"}],["circle",{cx:"11.5",cy:"12.5",r:".5",fill:"currentColor",key:"16onso"}],["path",{d:"M6 12a2 2 0 0 0 1.8-1.2l.4-.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4",key:"x9fguj"}],["path",{d:"m6 16 2 2",key:"16qmzd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=n("Hammer",[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9",key:"eefl8a"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"b7pghm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=n("HandCoins",[["path",{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17",key:"geh8rc"}],["path",{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"1fto5m"}],["path",{d:"m2 16 6 6",key:"1pfhp9"}],["circle",{cx:"16",cy:"9",r:"2.9",key:"1n0dlu"}],["circle",{cx:"6",cy:"5",r:"3",key:"151irh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=n("HandHeart",[["path",{d:"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16",key:"1ifwr1"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"17abbs"}],["path",{d:"m2 15 6 6",key:"10dquu"}],["path",{d:"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z",key:"1h3036"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=n("HandHelping",[["path",{d:"M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14",key:"1j4xps"}],["path",{d:"m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"uospg8"}],["path",{d:"m2 13 6 6",key:"16e5sb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=n("HandMetal",[["path",{d:"M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4",key:"7eki13"}],["path",{d:"M14 11V9a2 2 0 1 0-4 0v2",key:"94qvcw"}],["path",{d:"M10 10.5V5a2 2 0 1 0-4 0v9",key:"m1ah89"}],["path",{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5",key:"t1skq1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=n("HandPlatter",[["path",{d:"M12 3V2",key:"ar7q03"}],["path",{d:"M5 10a7.1 7.1 0 0 1 14 0",key:"1t9y3n"}],["path",{d:"M4 10h16",key:"img6z1"}],["path",{d:"M2 14h12a2 2 0 1 1 0 4h-2",key:"loyjft"}],["path",{d:"m15.4 17.4 3.2-2.8a2 2 0 0 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2L5 18",key:"1rixiy"}],["path",{d:"M5 14v7H2",key:"3mujks"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=n("Hand",[["path",{d:"M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"aigmz7"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2",key:"1n6bmn"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8",key:"a9iiix"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=n("Handshake",[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=n("HardDriveDownload",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 18h.01",key:"h775k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=n("HardDriveUpload",[["path",{d:"m16 6-4-4-4 4",key:"13yo43"}],["path",{d:"M12 2v8",key:"1q4o3n"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 18h.01",key:"h775k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=n("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=n("HardHat",[["path",{d:"M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z",key:"1dej2m"}],["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6h0",key:"1uc279"}],["path",{d:"M14 6h0a6 6 0 0 1 6 6v3",key:"1j9mnm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=n("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=n("Haze",[["path",{d:"m5.2 6.2 1.4 1.4",key:"17imol"}],["path",{d:"M2 13h2",key:"13gyu8"}],["path",{d:"M20 13h2",key:"16rner"}],["path",{d:"m17.4 7.6 1.4-1.4",key:"t4xlah"}],["path",{d:"M22 17H2",key:"1gtaj3"}],["path",{d:"M22 21H2",key:"1gy6en"}],["path",{d:"M16 13a4 4 0 0 0-8 0",key:"1dyczq"}],["path",{d:"M12 5V2.5",key:"1vytko"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=n("HdmiPort",[["path",{d:"M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z",key:"2128wb"}],["path",{d:"M7.5 12h9",key:"1t0ckc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=n("Heading1",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"m17 12 3-2v8",key:"1hhhft"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=n("Heading2",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1",key:"9jr5yi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=n("Heading3",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2",key:"68ncm8"}],["path",{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2",key:"1ejuhz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=n("Heading4",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 10v4h4",key:"13sv97"}],["path",{d:"M21 10v8",key:"1kdml4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=n("Heading5",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 13v-3h4",key:"1nvgqp"}],["path",{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17",key:"2nebdn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=n("Heading6",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["circle",{cx:"19",cy:"16",r:"2",key:"15mx69"}],["path",{d:"M20 10c-2 2-3 3.5-3 6",key:"f35dl0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=n("Heading",[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=n("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=n("Headset",[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",key:"12oyoe"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5",key:"1x7m43"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=n("HeartCrack",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"m12 13-1-1 2-2-3-3 2-2",key:"xjdxli"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=n("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=n("HeartOff",[["line",{x1:"2",y1:"2",x2:"22",y2:"22",key:"1w4vcy"}],["path",{d:"M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35",key:"3mpagl"}],["path",{d:"M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17",key:"1gh3v3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=n("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=n("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=n("Heater",[["path",{d:"M11 8c2-3-2-3 0-6",key:"1ldv5m"}],["path",{d:"M15.5 8c2-3-2-3 0-6",key:"1otqoz"}],["path",{d:"M6 10h.01",key:"1lbq93"}],["path",{d:"M6 14h.01",key:"zudwn7"}],["path",{d:"M10 16v-4",key:"1c25yv"}],["path",{d:"M14 16v-4",key:"1dkbt8"}],["path",{d:"M18 16v-4",key:"1yg9me"}],["path",{d:"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3",key:"1ubg90"}],["path",{d:"M5 20v2",key:"1abpe8"}],["path",{d:"M19 20v2",key:"kqn6ft"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=n("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=n("Hexagon",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=n("Highlighter",[["path",{d:"m9 11-6 6v3h9l3-3",key:"1a3l36"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4",key:"14a9rk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=n("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=n("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=n("HopOff",[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27",key:"qyzcap"}],["path",{d:"M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28",key:"y078lb"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26",key:"1utre3"}],["path",{d:"M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25",key:"17o9hm"}],["path",{d:"M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75",key:"1d1n4p"}],["path",{d:"M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24",key:"9uv3tt"}],["path",{d:"M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28",key:"1292wz"}],["path",{d:"M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05",key:"7ozu9p"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=n("Hop",[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18",key:"18lxf1"}],["path",{d:"M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88",key:"vtfxrw"}],["path",{d:"M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36",key:"13hl71"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87",key:"1sl8oj"}],["path",{d:"M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08",key:"19c6kt"}],["path",{d:"M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57",key:"85ghs3"}],["path",{d:"M4.93 4.93 3 3a.7.7 0 0 1 0-1",key:"x087yj"}],["path",{d:"M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15",key:"11xdqo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=n("Hotel",[["path",{d:"M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z",key:"p9z69c"}],["path",{d:"m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16",key:"1bvcvh"}],["path",{d:"M8 7h.01",key:"1vti4s"}],["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M12 7h.01",key:"1ivr5q"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M16 11h.01",key:"xkw8gn"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M10 22v-6.5m4 0V22",key:"16gs4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=n("Hourglass",[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M5 2h14",key:"pdyrp9"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",key:"1d314k"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2",key:"1vvvr6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ek=n("IceCream2",[["path",{d:"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6Zm-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0",key:"g86ewz"}],["path",{d:"M12.14 11a3.5 3.5 0 1 1 6.71 0",key:"4k3m1s"}],["path",{d:"M15.5 6.5a3.5 3.5 0 1 0-7 0",key:"zmuahr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tk=n("IceCream",[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11",key:"1v6356"}],["path",{d:"M17 7A5 5 0 0 0 7 7",key:"151p3v"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4",key:"1sdaij"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak=n("ImageDown",[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19 3 3v-5.5",key:"9ldu5r"}],["path",{d:"m17 22 3-3",key:"1nkfve"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nk=n("ImageMinus",[["path",{d:"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"m87ecr"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5",key:"ez7e4s"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rk=n("ImageOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=n("ImagePlus",[["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"31hg93"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5",key:"ez7e4s"}],["line",{x1:"19",x2:"19",y1:"2",y2:"8",key:"1gkr8c"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ik=n("ImageUp",[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19.5 3-3 3 3",key:"9vmjn0"}],["path",{d:"M17 22v-5.5",key:"1aa6fl"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lk=n("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ck=n("Images",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=n("Import",[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m8 11 4 4 4-4",key:"1dohi6"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",key:"1ywtjm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk=n("Inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=n("Indent",[["polyline",{points:"3 8 7 12 3 16",key:"f3rxhf"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12",key:"1fxxak"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6",key:"asgu94"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18",key:"13dsj7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=n("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=n("Infinity",[["path",{d:"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z",key:"1z0uae"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=n("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=n("InspectionPanel",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7h.01",key:"7u93v4"}],["path",{d:"M17 7h.01",key:"14a9sn"}],["path",{d:"M7 17h.01",key:"19xn7k"}],["path",{d:"M17 17h.01",key:"1sd3ek"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk=n("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=n("Italic",[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=n("IterationCcw",[["path",{d:"M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8",key:"4znkd0"}],["polyline",{points:"16 14 20 18 16 22",key:"11njsm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=n("IterationCw",[["path",{d:"M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4",key:"tuf4su"}],["polyline",{points:"8 22 4 18 8 14",key:"evkj9s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk=n("JapaneseYen",[["path",{d:"M12 9.5V21m0-11.5L6 3m6 6.5L18 3",key:"2ej80x"}],["path",{d:"M6 15h12",key:"1hwgt5"}],["path",{d:"M6 11h12",key:"wf4gp6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk=n("Joystick",[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=n("KanbanSquareDashed",[["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}],["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M21 14v1",key:"169vum"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M3 9v1",key:"1r0deq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=n("KanbanSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk=n("Kanban",[["path",{d:"M6 5v11",key:"mdvv1e"}],["path",{d:"M12 5v6",key:"14ar3b"}],["path",{d:"M18 5v14",key:"7ji314"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=n("KeyRound",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=n("KeySquare",[["path",{d:"M12.4 2.7c.9-.9 2.5-.9 3.4 0l5.5 5.5c.9.9.9 2.5 0 3.4l-3.7 3.7c-.9.9-2.5.9-3.4 0L8.7 9.8c-.9-.9-.9-2.5 0-3.4Z",key:"9li5bk"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M9.4 10.6 2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4",key:"1ym3zm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=n("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=n("KeyboardMusic",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M6 8h4",key:"utf9t1"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M6 12v4",key:"dy92yo"}],["path",{d:"M10 12v4",key:"1fxnav"}],["path",{d:"M14 12v4",key:"1hft58"}],["path",{d:"M18 12v4",key:"tjjnbz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=n("Keyboard",[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=n("LampCeiling",[["path",{d:"M12 2v5",key:"nd4vlx"}],["path",{d:"M6 7h12l4 9H2l4-9Z",key:"123d64"}],["path",{d:"M9.17 16a3 3 0 1 0 5.66 0",key:"1061mw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=n("LampDesk",[["path",{d:"m14 5-3 3 2 7 8-8-7-2Z",key:"1b0msb"}],["path",{d:"m14 5-3 3-3-3 3-3 3 3Z",key:"1uemms"}],["path",{d:"M9.5 6.5 4 12l3 6",key:"1bx08v"}],["path",{d:"M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z",key:"wap775"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=n("LampFloor",[["path",{d:"M9 2h6l3 7H6l3-7Z",key:"wcx6mj"}],["path",{d:"M12 9v13",key:"3n1su1"}],["path",{d:"M9 22h6",key:"1rlq3v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=n("LampWallDown",[["path",{d:"M11 13h6l3 7H8l3-7Z",key:"9n3qlo"}],["path",{d:"M14 13V8a2 2 0 0 0-2-2H8",key:"1hu4hb"}],["path",{d:"M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z",key:"s053bc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk=n("LampWallUp",[["path",{d:"M11 4h6l3 7H8l3-7Z",key:"11x1ee"}],["path",{d:"M14 11v5a2 2 0 0 1-2 2H8",key:"eutp5o"}],["path",{d:"M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z",key:"1iuthr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=n("Lamp",[["path",{d:"M8 2h8l4 10H4L8 2Z",key:"9dma5w"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z",key:"mwf4oh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=n("LandPlot",[["path",{d:"m12 8 6-3-6-3v10",key:"mvpnpy"}],["path",{d:"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12",key:"ek95tt"}],["path",{d:"m6.49 12.85 11.02 6.3",key:"1kt42w"}],["path",{d:"M17.51 12.85 6.5 19.15",key:"v55bdg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk=n("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=n("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=n("Laptop2",[["rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2",key:"1qhy41"}],["line",{x1:"2",x2:"22",y1:"20",y2:"20",key:"ni3hll"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=n("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=n("LassoSelect",[["path",{d:"M7 22a5 5 0 0 1-2-4",key:"umushi"}],["path",{d:"M7 16.93c.96.43 1.96.74 2.99.91",key:"ybbtv3"}],["path",{d:"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2",key:"gt5e1w"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",key:"bq3ynw"}],["path",{d:"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z",key:"1bawls"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=n("Lasso",[["path",{d:"M7 22a5 5 0 0 1-2-4",key:"umushi"}],["path",{d:"M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1",key:"146dds"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",key:"bq3ynw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk=n("Laugh",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z",key:"b2q4dd"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=n("Layers2",[["path",{d:"m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12",key:"1cuww1"}],["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z",key:"pdlvxu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=n("Layers3",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1e5n1m"}],["path",{d:"m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1iwflc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok=n("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk=n("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=n("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=n("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=n("LayoutPanelLeft",[["rect",{width:"7",height:"18",x:"3",y:"3",rx:"1",key:"2obqm"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=n("LayoutPanelTop",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=n("LayoutTemplate",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk=n("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk=n("LeafyGreen",[["path",{d:"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22",key:"1134nt"}],["path",{d:"M2 22 17 7",key:"1q7jp2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=n("LibraryBig",[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk=n("LibrarySquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7v10",key:"d5nglc"}],["path",{d:"M11 7v10",key:"pptsnr"}],["path",{d:"m15 7 2 10",key:"1m7qm5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e4=n("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4=n("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a4=n("Ligature",[["path",{d:"M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2",key:"1rtphz"}],["path",{d:"M6 12h4",key:"a4o3ry"}],["path",{d:"M14 12h2v8",key:"c1fccl"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 20h4",key:"lzx1xo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n4=n("LightbulbOff",[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r4=n("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o4=n("LineChart",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=n("Link2Off",[["path",{d:"M9 17H7A5 5 0 0 1 7 7",key:"10o201"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8",key:"1d3206"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12",key:"rvw6j4"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l4=n("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4=n("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s4=n("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4=n("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=n("ListCollapse",[["path",{d:"m3 10 2.5-2.5L3 5",key:"i6eama"}],["path",{d:"m3 19 2.5-2.5L3 14",key:"w2gmor"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=n("ListEnd",[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M10 18H3",key:"13769t"}],["path",{d:"M21 6v10a2 2 0 0 1-2 2h-5",key:"ilrcs8"}],["path",{d:"m16 16-2 2 2 2",key:"kkc6pm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4=n("ListFilter",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p4=n("ListMinus",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M21 12h-6",key:"bt1uis"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k4=n("ListMusic",[["path",{d:"M21 15V6",key:"h1cx4g"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",key:"8saifv"}],["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=n("ListOrdered",[["line",{x1:"10",x2:"21",y1:"6",y2:"6",key:"76qw6h"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12",key:"16nom4"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18",key:"u3jurt"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g4=n("ListPlus",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M18 9v6",key:"1twb98"}],["path",{d:"M21 12h-6",key:"bt1uis"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4=n("ListRestart",[["path",{d:"M21 6H3",key:"1jwq7v"}],["path",{d:"M7 12H3",key:"13ou7f"}],["path",{d:"M7 18H3",key:"1sijw9"}],["path",{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14",key:"qth677"}],["path",{d:"M11 10v4h4",key:"172dkj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=n("ListStart",[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M10 6H3",key:"lf8lx7"}],["path",{d:"M21 18V8a2 2 0 0 0-2-2h-5",key:"1hghli"}],["path",{d:"m16 8-2-2 2-2",key:"160uvd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M4=n("ListTodo",[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x4=n("ListTree",[["path",{d:"M21 12h-8",key:"1bmf0i"}],["path",{d:"M21 6H8",key:"1pqkrb"}],["path",{d:"M21 18h-8",key:"1tm79t"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3",key:"1ywdgy"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3",key:"2wc746"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4=n("ListVideo",[["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}],["path",{d:"m16 12 5 3-5 3v-6Z",key:"zpskkp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4=n("ListX",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"m19 10-4 4",key:"1tz659"}],["path",{d:"m15 10 4 4",key:"1n7nei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=n("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C4=n("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=n("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b4=n("LocateFixed",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q4=n("LocateOff",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["path",{d:"M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11",key:"1oh7ia"}],["path",{d:"M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29",key:"3qdecy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=n("Locate",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j4=n("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=n("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=n("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A4=n("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=n("Lollipop",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}],["path",{d:"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0",key:"107gwy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V4=n("Luggage",[["path",{d:"M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0",key:"1h5fkc"}],["path",{d:"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14",key:"1l99gc"}],["path",{d:"M10 20h4",key:"ni2waw"}],["circle",{cx:"16",cy:"20",r:"2",key:"1vifvg"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=n("MSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 16V8l4 4 4-4v8",key:"141u4e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4=n("Magnet",[["path",{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15",key:"1i3lhw"}],["path",{d:"m5 8 4 4",key:"j6kj7e"}],["path",{d:"m12 15 4 4",key:"lnac28"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=n("MailCheck",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=n("MailMinus",[["path",{d:"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"fuxbkv"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M16 19h6",key:"xwg31i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B4=n("MailOpen",[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",key:"1jhwl8"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10",key:"1qfld7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E4=n("MailPlus",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M16 19h6",key:"xwg31i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4=n("MailQuestion",[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",key:"e61zoh"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",key:"7z9rxb"}],["path",{d:"M20 22v.01",key:"12bgn6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4=n("MailSearch",[["path",{d:"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5",key:"w80f2v"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z",key:"mgbru4"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.5-1.5",key:"1x83k4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z4=n("MailWarning",[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",key:"e61zoh"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M20 14v4",key:"1hm744"}],["path",{d:"M20 22v.01",key:"12bgn6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y4=n("MailX",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9",key:"1j9vog"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m17 17 4 4",key:"1b3523"}],["path",{d:"m21 17-4 4",key:"uinynz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W4=n("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=n("Mailbox",[["path",{d:"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z",key:"1lbycx"}],["polyline",{points:"15,9 18,9 18,11",key:"1pm9c0"}],["path",{d:"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0",key:"n6nfvi"}],["line",{x1:"6",x2:"7",y1:"10",y2:"10",key:"1e2scm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=n("Mails",[["rect",{width:"16",height:"13",x:"6",y:"4",rx:"2",key:"1drq3f"}],["path",{d:"m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7",key:"xn252p"}],["path",{d:"M2 8v11c0 1.1.9 2 2 2h14",key:"n13cji"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=n("MapPinOff",[["path",{d:"M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5",key:"12a8pk"}],["path",{d:"M19.18 13.52A8.66 8.66 0 0 0 20 10a8 8 0 0 0-8-8 7.88 7.88 0 0 0-3.52.82",key:"1r9f6y"}],["path",{d:"M9.13 9.13A2.78 2.78 0 0 0 9 10a3 3 0 0 0 3 3 2.78 2.78 0 0 0 .87-.13",key:"erynq7"}],["path",{d:"M14.9 9.25a3 3 0 0 0-2.15-2.16",key:"1hwwmx"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=n("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=n("MapPinned",[["path",{d:"M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0",key:"yrbn30"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835",key:"112zkj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=n("Map",[["polygon",{points:"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21",key:"ok2ie8"}],["line",{x1:"9",x2:"9",y1:"3",y2:"18",key:"w34qz5"}],["line",{x1:"15",x2:"15",y1:"6",y2:"21",key:"volv9a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J4=n("Martini",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M12 11v11",key:"ur9y6a"}],["path",{d:"m19 3-7 8-7-8Z",key:"1sgpiw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e3=n("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t3=n("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a3=n("Medal",[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n3=n("MegaphoneOff",[["path",{d:"M9.26 9.26 3 11v3l14.14 3.14",key:"3429n"}],["path",{d:"M21 15.34V6l-7.31 2.03",key:"4o1dh8"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r3=n("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o3=n("Meh",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15",key:"1xb1d9"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i3=n("MemoryStick",[["path",{d:"M6 19v-3",key:"1nvgqn"}],["path",{d:"M10 19v-3",key:"iu8nkm"}],["path",{d:"M14 19v-3",key:"kcehxu"}],["path",{d:"M18 19v-3",key:"1vh91z"}],["path",{d:"M8 11V9",key:"63erz4"}],["path",{d:"M16 11V9",key:"fru6f3"}],["path",{d:"M12 11V9",key:"ha00sb"}],["path",{d:"M2 15h20",key:"16ne18"}],["path",{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z",key:"lhddv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l3=n("MenuSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 8h10",key:"1jw688"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c3=n("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s3=n("Merge",[["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22",key:"1hyw0i"}],["path",{d:"m20 22-5-5",key:"1m27yz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d3=n("MessageCircleCode",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m10 10-2 2 2 2",key:"p6et6i"}],["path",{d:"m14 10 2 2-2 2",key:"1kkmpt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h3=n("MessageCircleDashed",[["path",{d:"M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1",key:"16ll65"}],["path",{d:"M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1",key:"1nq77a"}],["path",{d:"M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5",key:"1sf7wn"}],["path",{d:"M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1",key:"x1hs5g"}],["path",{d:"M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1",key:"19m18z"}],["path",{d:"M3.5 17.5 2 22l4.5-1.5",key:"1f36qi"}],["path",{d:"M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5",key:"1vz3ju"}],["path",{d:"M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1",key:"19f9do"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u3=n("MessageCircleHeart",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7",key:"43lnbm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3=n("MessageCircleMore",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p3=n("MessageCircleOff",[["path",{d:"M20.5 14.9A9 9 0 0 0 9.1 3.5",key:"1iebmn"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7",key:"1ov8ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k3=n("MessageCirclePlus",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3=n("MessageCircleQuestion",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3=n("MessageCircleReply",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}],["path",{d:"M7 12h7a2 2 0 0 1 2 2v1",key:"1gheu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f3=n("MessageCircleWarning",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v3=n("MessageCircleX",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=n("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x3=n("MessageSquareCode",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m10 8-2 2 2 2",key:"19bv1o"}],["path",{d:"m14 8 2 2-2 2",key:"1whylv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w3=n("MessageSquareDashed",[["path",{d:"M3 6V5c0-1.1.9-2 2-2h2",key:"9usibi"}],["path",{d:"M11 3h3",key:"1c3ji7"}],["path",{d:"M18 3h1c1.1 0 2 .9 2 2",key:"19esxn"}],["path",{d:"M21 9v2",key:"p14lih"}],["path",{d:"M21 15c0 1.1-.9 2-2 2h-1",key:"1fo1j8"}],["path",{d:"M14 17h-3",key:"1w4p2m"}],["path",{d:"m7 17-4 4v-5",key:"ph9x1h"}],["path",{d:"M3 12v-2",key:"856n1q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=n("MessageSquareDiff",[["path",{d:"m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2",key:"1xuzuj"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 17h6",key:"r8uit2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=n("MessageSquareDot",[["path",{d:"M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7",key:"uodpkb"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=n("MessageSquareHeart",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8",key:"1blaws"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3=n("MessageSquareMore",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M16 10h.01",key:"1m94wz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3=n("MessageSquareOff",[["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10",key:"pwpm4a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=n("MessageSquarePlus",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=n("MessageSquareQuote",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8",key:"1jfesj"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2",key:"1dq9mh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3=n("MessageSquareReply",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m10 7-3 3 3 3",key:"1eugdv"}],["path",{d:"M17 13v-1a2 2 0 0 0-2-2H7",key:"ernfh3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=n("MessageSquareShare",[["path",{d:"M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7",key:"tqtdkg"}],["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"m16 8 5-5",key:"15mbrl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=n("MessageSquareText",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M13 8H7",key:"14i4kc"}],["path",{d:"M17 12H7",key:"16if0g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=n("MessageSquareWarning",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v2",key:"stiyo7"}],["path",{d:"M12 13h.01",key:"y0uutt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U3=n("MessageSquareX",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=n("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V3=n("MessagesSquare",[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z",key:"16vlm8"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",key:"1cx29u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=n("Mic2",[["path",{d:"m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12",key:"zoua8r"}],["circle",{cx:"17",cy:"7",r:"5",key:"1fomce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T3=n("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=n("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=n("Microscope",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=n("Microwave",[["rect",{width:"20",height:"15",x:"2",y:"4",rx:"2",key:"2no95f"}],["rect",{width:"8",height:"7",x:"6",y:"8",rx:"1",key:"zh9wx"}],["path",{d:"M18 8v7",key:"o5zi4n"}],["path",{d:"M6 19v2",key:"1loha6"}],["path",{d:"M18 19v2",key:"1dawf0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=n("Milestone",[["path",{d:"M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z",key:"1mp5s7"}],["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M12 3v3",key:"1n5kay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=n("MilkOff",[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3",key:"y0ejgx"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435",key:"iaxqsy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=n("Milk",[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",key:"qtp12x"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"ygeh44"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=n("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=n("Minimize",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=n("MinusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3=n("MinusSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=n("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=n("MonitorCheck",[["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=n("MonitorDot",[["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9",key:"1fet9y"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=n("MonitorDown",[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m15 10-3 3-3-3",key:"lzhmyn"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=n("MonitorOff",[["path",{d:"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2",key:"k0q8oc"}],["path",{d:"M22 15V5a2 2 0 0 0-2-2H9",key:"cp1ac0"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3=n("MonitorPause",[["path",{d:"M10 13V7",key:"1u13u9"}],["path",{d:"M14 13V7",key:"1vj9om"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e5=n("MonitorPlay",[["path",{d:"m10 7 5 3-5 3Z",key:"29ljg6"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t5=n("MonitorSmartphone",[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",key:"10dyio"}],["path",{d:"M10 19v-3.96 3.15",key:"1irgej"}],["path",{d:"M7 19h5",key:"qswx4l"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2",key:"1egngj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a5=n("MonitorSpeaker",[["path",{d:"M5.5 20H8",key:"1k40s5"}],["path",{d:"M17 9h.01",key:"1j24nn"}],["rect",{width:"10",height:"16",x:"12",y:"4",rx:"2",key:"ixliua"}],["path",{d:"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4",key:"1mp6e1"}],["circle",{cx:"17",cy:"15",r:"1",key:"tqvash"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n5=n("MonitorStop",[["rect",{x:"9",y:"7",width:"6",height:"6",key:"4xvc6r"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r5=n("MonitorUp",[["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}],["path",{d:"M12 13V7",key:"h0r20n"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o5=n("MonitorX",[["path",{d:"m14.5 12.5-5-5",key:"1jahn5"}],["path",{d:"m9.5 12.5 5-5",key:"1k2t7b"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i5=n("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l5=n("MoonStar",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}],["path",{d:"M19 3v4",key:"vgv24u"}],["path",{d:"M21 5h-4",key:"1wcg1f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c5=n("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s5=n("MoreHorizontal",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d5=n("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h5=n("MountainSnow",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}],["path",{d:"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19",key:"1pvmmp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u5=n("Mountain",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y5=n("MousePointer2",[["path",{d:"m4 4 7.07 17 2.51-7.39L21 11.07z",key:"1vqm48"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p5=n("MousePointerClick",[["path",{d:"m9 9 5 12 1.8-5.2L21 14Z",key:"1b76lo"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k5=n("MousePointerSquareDashed",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"m12 12 4 10 1.7-4.3L22 16Z",key:"64ilsv"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h2",key:"1qve2z"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v2",key:"p14lih"}],["path",{d:"M3 14v1",key:"vnatye"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=n("MousePointerSquare",[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"14rsvq"}],["path",{d:"m12 12 4 10 1.7-4.3L22 16Z",key:"64ilsv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m5=n("MousePointer",[["path",{d:"m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z",key:"y2ucgo"}],["path",{d:"m13 13 6 6",key:"1nhxnf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g5=n("Mouse",[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7",key:"11ol66"}],["path",{d:"M12 6v4",key:"16clxf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=n("Move3d",[["path",{d:"M5 3v16h16",key:"1mqmf9"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}],["path",{d:"m2 6 3-3 3 3",key:"tkyvxa"}],["path",{d:"m18 16 3 3-3 3",key:"1d4glt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f5=n("MoveDiagonal2",[["polyline",{points:"5 11 5 5 11 5",key:"ncfzxk"}],["polyline",{points:"19 13 19 19 13 19",key:"1mk7hk"}],["line",{x1:"5",x2:"19",y1:"5",y2:"19",key:"mcyte3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v5=n("MoveDiagonal",[["polyline",{points:"13 5 19 5 19 11",key:"11219e"}],["polyline",{points:"11 19 5 19 5 13",key:"sfq3wq"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M5=n("MoveDownLeft",[["path",{d:"M11 19H5V13",key:"1akmht"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x5=n("MoveDownRight",[["path",{d:"M19 13V19H13",key:"10vkzq"}],["path",{d:"M5 5L19 19",key:"5zm2fv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w5=n("MoveDown",[["path",{d:"M8 18L12 22L16 18",key:"cskvfv"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L5=n("MoveHorizontal",[["polyline",{points:"18 8 22 12 18 16",key:"1hqrds"}],["polyline",{points:"6 8 2 12 6 16",key:"f0ernq"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I5=n("MoveLeft",[["path",{d:"M6 8L2 12L6 16",key:"kyvwex"}],["path",{d:"M2 12H22",key:"1m8cig"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C5=n("MoveRight",[["path",{d:"M18 8L22 12L18 16",key:"1r0oui"}],["path",{d:"M2 12H22",key:"1m8cig"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S5=n("MoveUpLeft",[["path",{d:"M5 11V5H11",key:"3q78g9"}],["path",{d:"M5 5L19 19",key:"5zm2fv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b5=n("MoveUpRight",[["path",{d:"M13 5H19V11",key:"1n1gyv"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q5=n("MoveUp",[["path",{d:"M8 6L12 2L16 6",key:"1yvkyx"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5=n("MoveVertical",[["polyline",{points:"8 18 12 22 16 18",key:"1uutw3"}],["polyline",{points:"8 6 12 2 16 6",key:"d60sxy"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j5=n("Move",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H5=n("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P5=n("Music3",[["circle",{cx:"12",cy:"18",r:"4",key:"m3r9ws"}],["path",{d:"M16 18V2",key:"40x2m5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A5=n("Music4",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["path",{d:"m9 9 12-2",key:"1e64n2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U5=n("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V5=n("Navigation2Off",[["path",{d:"M9.31 9.31 5 21l7-4 7 4-1.17-3.17",key:"qoq2o2"}],["path",{d:"M14.53 8.88 12 2l-1.17 3.17",key:"k3sjzy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F5=n("Navigation2",[["polygon",{points:"12 2 19 21 12 17 5 21 12 2",key:"x8c0qg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T5=n("NavigationOff",[["path",{d:"M8.43 8.43 3 11l8 2 2 8 2.57-5.43",key:"1vdtb7"}],["path",{d:"M17.39 11.73 22 2l-9.73 4.61",key:"tya3r6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D5=n("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R5=n("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5=n("Newspaper",[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E5=n("Nfc",[["path",{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36",key:"9iaqei"}],["path",{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"1yha7l"}],["path",{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"4iu2gk"}],["path",{d:"M16.37 2a20.16 20.16 0 0 1 0 20",key:"sap9u2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N5=n("NotebookPen",[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",key:"re6nr2"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M18.4 2.6a2.17 2.17 0 0 1 3 3L16 11l-4 1 1-4Z",key:"1dba1m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O5=n("NotebookTabs",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M15 2v20",key:"dcj49h"}],["path",{d:"M15 7h5",key:"1xj5lc"}],["path",{d:"M15 12h5",key:"w5shd9"}],["path",{d:"M15 17h5",key:"1qaofu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z5=n("NotebookText",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M9.5 8h5",key:"11mslq"}],["path",{d:"M9.5 12H16",key:"ktog6x"}],["path",{d:"M9.5 16H14",key:"p1seyn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y5=n("Notebook",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M16 2v20",key:"rotuqe"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W5=n("NotepadTextDashed",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v2",key:"j91f56"}],["path",{d:"M20 12v2",key:"w8o0tu"}],["path",{d:"M20 18v2a2 2 0 0 1-2 2h-1",key:"1c9ggx"}],["path",{d:"M13 22h-2",key:"191ugt"}],["path",{d:"M7 22H6a2 2 0 0 1-2-2v-2",key:"1rt9px"}],["path",{d:"M4 14v-2",key:"1v0sqh"}],["path",{d:"M4 8V6a2 2 0 0 1 2-2h2",key:"1mwabg"}],["path",{d:"M8 10h6",key:"3oa6kw"}],["path",{d:"M8 14h8",key:"1fgep2"}],["path",{d:"M8 18h5",key:"17enja"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _5=n("NotepadText",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"16",height:"18",x:"4",y:"4",rx:"2",key:"1u9h20"}],["path",{d:"M8 10h6",key:"3oa6kw"}],["path",{d:"M8 14h8",key:"1fgep2"}],["path",{d:"M8 18h5",key:"17enja"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G5=n("NutOff",[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939",key:"1xcvy9"}],["path",{d:"M19 10v3.343",key:"163tfc"}],["path",{d:"M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192",key:"17914v"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $5=n("Nut",[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4",key:"1tgyif"}],["path",{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z",key:"tnsqj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X5=n("Octagon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q5=n("Option",[["path",{d:"M3 3h6l6 18h6",key:"ph9rgk"}],["path",{d:"M14 3h7",key:"16f0ms"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K5=n("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J5=n("Outdent",[["polyline",{points:"7 8 3 12 7 16",key:"2j60jr"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12",key:"1fxxak"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6",key:"asgu94"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18",key:"13dsj7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=n("Package2",[["path",{d:"M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z",key:"1ront0"}],["path",{d:"m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9",key:"19h2x1"}],["path",{d:"M12 3v6",key:"1holv5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=n("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=n("PackageMinus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=n("PackageOpen",[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=n("PackagePlus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M19 13v6",key:"85cyf1"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=n("PackageSearch",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=n("PackageX",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["path",{d:"m17 13 5 5m-5 0 5-5",key:"im3w4b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=n("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=n("PaintBucket",[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z",key:"irua1i"}],["path",{d:"m5 2 5 5",key:"1lls2c"}],["path",{d:"M2 13h15",key:"1hkzvu"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z",key:"xk76lq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=n("PaintRoller",[["rect",{width:"16",height:"6",x:"2",y:"2",rx:"2",key:"jcyz7m"}],["path",{d:"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",key:"1b9h7c"}],["rect",{width:"4",height:"6",x:"8",y:"16",rx:"1",key:"d6e7yl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=n("Paintbrush2",[["path",{d:"M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z",key:"1c8kta"}],["path",{d:"M6 12V2h12v10",key:"1esbnf"}],["path",{d:"M14 2v4",key:"qmzblu"}],["path",{d:"M10 2v2",key:"7u0qdc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=n("Paintbrush",[["path",{d:"M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z",key:"m6k5sh"}],["path",{d:"M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7",key:"arzq70"}],["path",{d:"M14.5 17.5 4.5 15",key:"s7fvrz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=n("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=n("Palmtree",[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4",key:"foxbe7"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3",key:"18arnh"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z",key:"epoumf"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14",key:"ft0feo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=n("PanelBottomClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"m15 8-3 3-3-3",key:"1oxy1z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=n("PanelBottomDashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M14 15h1",key:"171nev"}],["path",{d:"M19 15h2",key:"1vnucp"}],["path",{d:"M3 15h2",key:"8bym0q"}],["path",{d:"M9 15h1",key:"1tg3ks"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=n("PanelBottomOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=n("PanelBottom",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=n("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=n("PanelLeftDashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 14v1",key:"askpd8"}],["path",{d:"M9 19v2",key:"16tejx"}],["path",{d:"M9 3v2",key:"1noubl"}],["path",{d:"M9 9v1",key:"19ebxg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=n("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=n("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=n("PanelRightClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m8 9 3 3-3 3",key:"12hl5m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=n("PanelRightDashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 14v1",key:"ilsfch"}],["path",{d:"M15 19v2",key:"1fst2f"}],["path",{d:"M15 3v2",key:"z204g4"}],["path",{d:"M15 9v1",key:"z2a8b1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=n("PanelRightOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=n("PanelRight",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=n("PanelTopClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m9 16 3-3 3 3",key:"1idcnm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=n("PanelTopDashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M14 9h1",key:"l0svgy"}],["path",{d:"M19 9h2",key:"te2zfg"}],["path",{d:"M3 9h2",key:"1h4ldw"}],["path",{d:"M9 9h1",key:"15jzuz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=n("PanelTopOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m15 14-3 3-3-3",key:"g215vf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=n("PanelTop",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=n("PanelsLeftBottom",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M9 15h12",key:"5ijen5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=n("PanelsRightBottom",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h12",key:"1wkqb3"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=n("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=n("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=n("Parentheses",[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=n("ParkingCircleOff",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m5 5 14 14",key:"11anup"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2",key:"uoagbd"}],["path",{d:"M9 17v-2.34",key:"a9qo08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=n("ParkingCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=n("ParkingMeter",[["path",{d:"M9 9a3 3 0 1 1 6 0",key:"jdoeu8"}],["path",{d:"M12 12v3",key:"158kv8"}],["path",{d:"M11 15h2",key:"199qp6"}],["path",{d:"M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3",key:"1l50wn"}],["path",{d:"M12 19v3",key:"npa21l"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=n("ParkingSquareOff",[["path",{d:"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41",key:"9l1ft6"}],["path",{d:"M3 8.7V19a2 2 0 0 0 2 2h10.3",key:"17knke"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2",key:"uoagbd"}],["path",{d:"M9 17v-2.3",key:"1jxgo2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=n("ParkingSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=n("PartyPopper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"bpx1uq"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17",key:"1pd0s7"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7",key:"zq5xbz"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=n("PauseCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=n("PauseOctagon",[["path",{d:"M10 15V9",key:"1lckn7"}],["path",{d:"M14 15V9",key:"1muqhk"}],["path",{d:"M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714L7.714 2z",key:"1m7qra"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=n("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=n("PawPrint",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=n("PcCase",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",key:"1uq1d7"}],["path",{d:"M15 14h.01",key:"1kp3bh"}],["path",{d:"M9 6h6",key:"dgm16u"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=n("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=n("PenTool",[["path",{d:"m12 19 7-7 3 3-7 7-3-3z",key:"rklqx2"}],["path",{d:"m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z",key:"1et58u"}],["path",{d:"m2 2 7.586 7.586",key:"etlp93"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=n("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=n("PencilLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}],["path",{d:"m15 5 3 3",key:"1w25hb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=n("PencilRuler",[["path",{d:"m15 5 4 4",key:"1mk7zo"}],["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13",key:"orapub"}],["path",{d:"m8 6 2-2",key:"115y1s"}],["path",{d:"m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z",key:"hes763"}],["path",{d:"m18 16 2-2",key:"ee94s4"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17",key:"cfq27r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=n("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=n("Pentagon",[["path",{d:"M3.5 8.7c-.7.5-1 1.4-.7 2.2l2.8 8.7c.3.8 1 1.4 1.9 1.4h9.1c.9 0 1.6-.6 1.9-1.4l2.8-8.7c.3-.8 0-1.7-.7-2.2l-7.4-5.3a2.1 2.1 0 0 0-2.4 0Z",key:"hsj90r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=n("PercentCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=n("PercentDiamond",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z",key:"1tpxz2"}],["path",{d:"M9.2 9.2h.01",key:"1b7bvt"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"M14.7 14.8h.01",key:"17nsh4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=n("PercentSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=n("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=n("PersonStanding",[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=n("PhoneCall",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=n("PhoneForwarded",[["polyline",{points:"18 2 22 6 18 10",key:"6vjanh"}],["line",{x1:"14",x2:"22",y1:"6",y2:"6",key:"1jsywh"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=n("PhoneIncoming",[["polyline",{points:"16 2 16 8 22 8",key:"1ygljm"}],["line",{x1:"22",x2:"16",y1:"2",y2:"8",key:"1xzwqn"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=n("PhoneMissed",[["line",{x1:"22",x2:"16",y1:"2",y2:"8",key:"1xzwqn"}],["line",{x1:"16",x2:"22",y1:"2",y2:"8",key:"13zxdn"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=n("PhoneOff",[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",key:"z86iuo"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22",key:"11kh81"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=n("PhoneOutgoing",[["polyline",{points:"22 8 22 2 16 2",key:"1g204g"}],["line",{x1:"16",x2:"22",y1:"8",y2:"2",key:"1ggias"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=n("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=n("PiSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7h10",key:"udp07y"}],["path",{d:"M10 7v10",key:"i1d9ee"}],["path",{d:"M16 17a2 2 0 0 1-2-2V7",key:"ftwdc7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=n("Pi",[["line",{x1:"9",x2:"9",y1:"4",y2:"20",key:"ovs5a5"}],["path",{d:"M4 7c0-1.7 1.3-3 3-3h13",key:"10pag4"}],["path",{d:"M18 20c-1.7 0-3-1.3-3-3V4",key:"1gaosr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=n("Piano",[["path",{d:"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8",key:"lag0yf"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M6 14v4",key:"9ng0ue"}],["path",{d:"M10 14v4",key:"1v8uk5"}],["path",{d:"M14 14v4",key:"1tqops"}],["path",{d:"M18 14v4",key:"18uqwm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=n("Pickaxe",[["path",{d:"M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912",key:"we99rg"}],["path",{d:"M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393",key:"1w6hck"}],["path",{d:"M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z",key:"15hgfx"}],["path",{d:"M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319",key:"452b4h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=n("PictureInPicture2",[["path",{d:"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4",key:"daa4of"}],["rect",{width:"10",height:"7",x:"12",y:"13",rx:"2",key:"1nb8gs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=n("PictureInPicture",[["path",{d:"M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3",key:"bcd8fb"}],["rect",{width:"10",height:"7",x:"12",y:"13.5",ry:"2",key:"136fx3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=n("PieChart",[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z",key:"1rfc4y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=n("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z",key:"uf6l00"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h0",key:"k2aug8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=n("PilcrowSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 12H9.5a2.5 2.5 0 0 1 0-5H17",key:"1l9586"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M16 7v10",key:"lavkr4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=n("Pilcrow",[["path",{d:"M13 4v16",key:"8vvj80"}],["path",{d:"M17 4v16",key:"7dpous"}],["path",{d:"M19 4H9.5a4.5 4.5 0 0 0 0 9H13",key:"sh4n9v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=n("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=n("PinOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["line",{x1:"12",x2:"12",y1:"17",y2:"22",key:"1jrz49"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12",key:"13x2n8"}],["path",{d:"M15 9.34V6h1a2 2 0 0 0 0-4H7.89",key:"reo3ki"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6=n("Pin",[["line",{x1:"12",x2:"12",y1:"17",y2:"22",key:"1jrz49"}],["path",{d:"M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z",key:"13yl11"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=n("Pipette",[["path",{d:"m2 22 1-1h3l9-9",key:"1sre89"}],["path",{d:"M3 21v-3l9-9",key:"hpe2y6"}],["path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",key:"196du1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k6=n("Pizza",[["path",{d:"M15 11h.01",key:"rns66s"}],["path",{d:"M11 15h.01",key:"k85uqc"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"m2 16 20 6-6-20A20 20 0 0 0 2 16",key:"e4slt2"}],["path",{d:"M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4",key:"rerf8f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6=n("PlaneLanding",[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z",key:"1ma21e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6=n("PlaneTakeoff",[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z",key:"fkigj9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=n("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=n("PlayCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=n("PlaySquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 8 6 4-6 4Z",key:"f1r3lt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=n("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M6=n("Plug2",[["path",{d:"M9 2v6",key:"17ngun"}],["path",{d:"M15 2v6",key:"s7yy2p"}],["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M6 11V8h12v3a6 6 0 1 1-12 0v0Z",key:"nd4hoy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x6=n("PlugZap2",[["path",{d:"m13 2-2 2.5h3L12 7",key:"1me98u"}],["path",{d:"M10 14v-3",key:"1mllf3"}],["path",{d:"M14 14v-3",key:"1l3fkq"}],["path",{d:"M11 19c-1.7 0-3-1.3-3-3v-2h8v2c0 1.7-1.3 3-3 3Z",key:"jd5pat"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=n("PlugZap",[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L6=n("Plug",[["path",{d:"M12 22v-5",key:"1ega77"}],["path",{d:"M9 8V2",key:"14iosj"}],["path",{d:"M15 8V2",key:"18g5xt"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z",key:"osxo6l"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I6=n("PlusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C6=n("PlusSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=n("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=n("PocketKnife",[["path",{d:"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2",key:"19w3oe"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z",key:"6fykxj"}],["path",{d:"M18 11.66V22a4 4 0 0 0 4-4V6",key:"1utzek"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q6=n("Pocket",[["path",{d:"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z",key:"1mz881"}],["polyline",{points:"8 10 12 14 16 10",key:"w4mbv5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z6=n("Podcast",[["circle",{cx:"12",cy:"11",r:"1",key:"1gvufo"}],["path",{d:"M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z",key:"1n5fvv"}],["path",{d:"M8 14a5 5 0 1 1 8 0",key:"fc81rn"}],["path",{d:"M17 18.5a9 9 0 1 0-10 0",key:"jqtxkf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j6=n("PointerOff",[["path",{d:"M10 4.5V4a2 2 0 0 0-2.41-1.957",key:"jsi14n"}],["path",{d:"M13.9 8.4a2 2 0 0 0-1.26-1.295",key:"hirc7f"}],["path",{d:"M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158",key:"1jxb2e"}],["path",{d:"m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343",key:"10r7hm"}],["path",{d:"M6 6v8",key:"tv5xkp"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H6=n("Pointer",[["path",{d:"M22 14a8 8 0 0 1-8 8",key:"56vcr3"}],["path",{d:"M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"1pp0yd"}],["path",{d:"M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1",key:"u654g"}],["path",{d:"M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10",key:"1e2dtv"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"g6ys72"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P6=n("Popcorn",[["path",{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4",key:"10td1f"}],["path",{d:"M10 22 9 8",key:"yjptiv"}],["path",{d:"m14 22 1-14",key:"8jwc8b"}],["path",{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z",key:"1qo33t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A6=n("Popsicle",[["path",{d:"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z",key:"1o68ps"}],["path",{d:"m22 22-5.5-5.5",key:"17o70y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U6=n("PoundSterling",[["path",{d:"M18 7c0-5.333-8-5.333-8 0",key:"1prm2n"}],["path",{d:"M10 7v14",key:"18tmcs"}],["path",{d:"M6 21h12",key:"4dkmi1"}],["path",{d:"M6 13h10",key:"ybwr4a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V6=n("PowerCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 12V6",key:"30zewn"}],["path",{d:"M8 7.5A6.1 6.1 0 0 0 12 18a6 6 0 0 0 4-10.5",key:"1r0tk2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F6=n("PowerOff",[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15",key:"dxknvb"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68",key:"1x7qb5"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=n("PowerSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M8 9a5.14 5.14 0 0 0 4 8 4.95 4.95 0 0 0 4-8",key:"15eubv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D6=n("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R6=n("Presentation",[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B6=n("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6=n("Projector",[["path",{d:"M5 7 3 5",key:"1yys58"}],["path",{d:"M9 6V3",key:"1ptz9u"}],["path",{d:"m13 7 2-2",key:"1w3vmq"}],["circle",{cx:"9",cy:"13",r:"3",key:"1mma13"}],["path",{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17",key:"2frwzc"}],["path",{d:"M16 16h2",key:"dnq2od"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N6=n("Puzzle",[["path",{d:"M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",key:"i0oyt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O6=n("Pyramid",[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",key:"aenxs0"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z6=n("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y6=n("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W6=n("Rabbit",[["path",{d:"M13 16a3 3 0 0 1 2.24 5",key:"1epib5"}],["path",{d:"M18 12h.01",key:"yjnet6"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3",key:"ue9ozu"}],["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3",key:"49iql8"}],["path",{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3",key:"1e33i0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6=n("Radar",[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34",key:"z3du51"}],["path",{d:"M4 6h.01",key:"oypzma"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35",key:"qzzz0"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67",key:"1yjesh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67",key:"1u2y91"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"m13.41 10.59 5.66-5.66",key:"mhq4k0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G6=n("Radiation",[["path",{d:"M12 12h0.01",key:"6ztbls"}],["path",{d:"M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z",key:"wy49g3"}],["path",{d:"M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z",key:"vklnvr"}],["path",{d:"M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z",key:"wkdf1o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $6=n("Radical",[["path",{d:"M3 12h4l3 9 4-17h7",key:"bpxjrx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X6=n("RadioReceiver",[["path",{d:"M5 16v2",key:"g5qcv5"}],["path",{d:"M19 16v2",key:"1gbaio"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2",key:"vjsjur"}],["path",{d:"M18 12h0",key:"1ucjzd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q6=n("RadioTower",[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9",key:"s0qx1y"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5",key:"1idnkw"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47",key:"ojru2q"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1",key:"rhi7fg"}],["path",{d:"M9.5 18h5",key:"mfy3pd"}],["path",{d:"m8 22 4-11 4 11",key:"25yftu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K6=n("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J6=n("Radius",[["path",{d:"M20.34 17.52a10 10 0 1 0-2.82 2.82",key:"fydyku"}],["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["path",{d:"m13.41 13.41 4.18 4.18",key:"1gqbwc"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e8=n("RailSymbol",[["path",{d:"M5 15h14",key:"m0yey3"}],["path",{d:"M5 9h14",key:"7tsvo6"}],["path",{d:"m14 20-5-5 6-6-5-5",key:"1jo42i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t8=n("Rainbow",[["path",{d:"M22 17a10 10 0 0 0-20 0",key:"ozegv"}],["path",{d:"M6 17a6 6 0 0 1 12 0",key:"5giftw"}],["path",{d:"M10 17a2 2 0 0 1 4 0",key:"gnsikk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a8=n("Rat",[["path",{d:"M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7v0c0 2.2 1.8 4 4 4",key:"16aj0u"}],["path",{d:"M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3",key:"1crdmb"}],["path",{d:"M13.2 18a3 3 0 0 0-2.2-5",key:"1ol3lk"}],["path",{d:"M13 22H4a2 2 0 0 1 0-4h12",key:"bt3f23"}],["path",{d:"M16 9h.01",key:"1bdo4e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n8=n("Ratio",[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r8=n("ReceiptCent",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M12 6.5v11",key:"ecfhkf"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2",key:"1makmb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o8=n("ReceiptEuro",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 12h5",key:"1g6qi8"}],["path",{d:"M16 9.5a4 4 0 1 0 0 5.2",key:"b2px4r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i8=n("ReceiptIndianRupee",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 7h8",key:"i86dvs"}],["path",{d:"M12 17.5 8 15h1a4 4 0 0 0 0-8",key:"grpkl4"}],["path",{d:"M8 11h8",key:"vwpz6n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l8=n("ReceiptJapaneseYen",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"m12 10 3-3",key:"1mc12w"}],["path",{d:"m9 7 3 3v7.5",key:"39i0xv"}],["path",{d:"M9 11h6",key:"1fldmi"}],["path",{d:"M9 15h6",key:"cctwl0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c8=n("ReceiptPoundSterling",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 13h5",key:"1k9z8w"}],["path",{d:"M10 17V9.5a2.5 2.5 0 0 1 5 0",key:"1dzgp0"}],["path",{d:"M8 17h7",key:"8mjdqu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s8=n("ReceiptRussianRuble",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 15h5",key:"vxg57a"}],["path",{d:"M8 11h5a2 2 0 1 0 0-4h-3v10",key:"1usi5u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d8=n("ReceiptSwissFranc",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M10 17V7h5",key:"k7jq18"}],["path",{d:"M10 11h4",key:"1i0mka"}],["path",{d:"M8 15h5",key:"vxg57a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h8=n("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u8=n("Receipt",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y8=n("RectangleHorizontal",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p8=n("RectangleVertical",[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k8=n("Recycle",[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",key:"x6z5xu"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",key:"1x4zh5"}],["path",{d:"m14 16-3 3 3 3",key:"f6jyew"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598",key:"wf1obh"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",key:"9tzpgr"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096",key:"1oe83g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m8=n("Redo2",[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13",key:"19mnr4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g8=n("RedoDot",[["circle",{cx:"12",cy:"17",r:"1",key:"1ixnty"}],["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f8=n("Redo",[["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v8=n("RefreshCcwDot",[["path",{d:"M3 2v6h6",key:"18ldww"}],["path",{d:"M21 12A9 9 0 0 0 6 5.3L3 8",key:"1pbrqz"}],["path",{d:"M21 22v-6h-6",key:"usdfbe"}],["path",{d:"M3 12a9 9 0 0 0 15 6.7l3-2.7",key:"1hosoe"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M8=n("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x8=n("RefreshCwOff",[["path",{d:"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47",key:"1krf6h"}],["path",{d:"M8 16H3v5",key:"1cv678"}],["path",{d:"M3 12C3 9.51 4 7.26 5.64 5.64",key:"ruvoct"}],["path",{d:"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64",key:"19q130"}],["path",{d:"M21 12c0 1-.16 1.97-.47 2.87",key:"4w8emr"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M22 22 2 2",key:"1r8tn9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w8=n("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L8=n("Refrigerator",[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z",key:"fpq118"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M15 7v6",key:"1nx30x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I8=n("Regex",[["path",{d:"M17 3v10",key:"15fgeh"}],["path",{d:"m12.67 5.5 8.66 5",key:"1gpheq"}],["path",{d:"m12.67 10.5 8.66-5",key:"1dkfa6"}],["path",{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z",key:"swwfx4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C8=n("RemoveFormatting",[["path",{d:"M4 7V4h16v3",key:"9msm58"}],["path",{d:"M5 20h6",key:"1h6pxn"}],["path",{d:"M13 4 8 20",key:"kqq6aj"}],["path",{d:"m15 15 5 5",key:"me55sn"}],["path",{d:"m20 15-5 5",key:"11p7ol"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S8=n("Repeat1",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}],["path",{d:"M11 10h1v4",key:"70cz1p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b8=n("Repeat2",[["path",{d:"m2 9 3-3 3 3",key:"1ltn5i"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6",key:"1r6tfw"}],["path",{d:"m22 15-3 3-3-3",key:"4rnwn2"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10",key:"2f72bc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q8=n("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z8=n("ReplaceAll",[["path",{d:"M14 4c0-1.1.9-2 2-2",key:"1mvvbw"}],["path",{d:"M20 2c1.1 0 2 .9 2 2",key:"1mj6oe"}],["path",{d:"M22 8c0 1.1-.9 2-2 2",key:"v1wql3"}],["path",{d:"M16 10c-1.1 0-2-.9-2-2",key:"821ux0"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5c0-1.7 1.3-3 3-3h1",key:"13af7h"}],["rect",{width:"8",height:"8",x:"2",y:"14",rx:"2",key:"17ihk4"}],["path",{d:"M14 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"1w9p8c"}],["path",{d:"M20 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"m45eaa"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j8=n("Replace",[["path",{d:"M14 4c0-1.1.9-2 2-2",key:"1mvvbw"}],["path",{d:"M20 2c1.1 0 2 .9 2 2",key:"1mj6oe"}],["path",{d:"M22 8c0 1.1-.9 2-2 2",key:"v1wql3"}],["path",{d:"M16 10c-1.1 0-2-.9-2-2",key:"821ux0"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5c0-1.7 1.3-3 3-3h1",key:"13af7h"}],["rect",{width:"8",height:"8",x:"2",y:"14",rx:"2",key:"17ihk4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H8=n("ReplyAll",[["polyline",{points:"7 17 2 12 7 7",key:"t83bqg"}],["polyline",{points:"12 17 7 12 12 7",key:"1g4ajm"}],["path",{d:"M22 18v-2a4 4 0 0 0-4-4H7",key:"1fcyog"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P8=n("Reply",[["polyline",{points:"9 17 4 12 9 7",key:"hvgpf2"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4",key:"5vmcpk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A8=n("Rewind",[["polygon",{points:"11 19 2 12 11 5 11 19",key:"14yba5"}],["polygon",{points:"22 19 13 12 22 5 22 19",key:"1pi1cj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U8=n("Ribbon",[["path",{d:"M17.75 9.01c-.52 2.08-1.83 3.64-3.18 5.49l-2.6 3.54-2.97 4-3.5-2.54 3.85-4.97c-1.86-2.61-2.8-3.77-3.16-5.44",key:"1njedg"}],["path",{d:"M17.75 9.01A7 7 0 0 0 6.2 9.1C6.06 8.5 6 7.82 6 7c0-3.5 2.83-5 5.98-5C15.24 2 18 3.5 18 7c0 .73-.09 1.4-.25 2.01Z",key:"10len7"}],["path",{d:"m9.35 14.53 2.64-3.31",key:"1wfi09"}],["path",{d:"m11.97 18.04 2.99 4 3.54-2.54-3.93-5",key:"1ezyge"}],["path",{d:"M14 8c0 1-1 2-2.01 3.22C11 10 10 9 10 8a2 2 0 1 1 4 0",key:"aw0zq5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V8=n("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F8=n("RockingChair",[["polyline",{points:"3.5 2 6.5 12.5 18 12.5",key:"y3iy52"}],["line",{x1:"9.5",x2:"5.5",y1:"12.5",y2:"20",key:"19vg5i"}],["line",{x1:"15",x2:"18.5",y1:"12.5",y2:"20",key:"1inpmv"}],["path",{d:"M2.75 18a13 13 0 0 0 18.5 0",key:"1nquas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T8=n("RollerCoaster",[["path",{d:"M6 19V5",key:"1r845m"}],["path",{d:"M10 19V6.8",key:"9j2tfs"}],["path",{d:"M14 19v-7.8",key:"10s8qv"}],["path",{d:"M18 5v4",key:"1tajlv"}],["path",{d:"M18 19v-6",key:"ielfq3"}],["path",{d:"M22 19V9",key:"158nzp"}],["path",{d:"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65",key:"1930oh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=n("Rotate3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D8=n("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R8=n("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B8=n("RouteOff",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5c.4 0 .9-.1 1.3-.2",key:"1effex"}],["path",{d:"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12",key:"k9y2ds"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M21 15.3a3.5 3.5 0 0 0-3.3-3.3",key:"11nlu2"}],["path",{d:"M15 5h-4.3",key:"6537je"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E8=n("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N8=n("Router",[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6.01 18H6",key:"19vcac"}],["path",{d:"M10.01 18H10",key:"uamcmx"}],["path",{d:"M15 10v4",key:"qjz1xs"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0",key:"1rif40"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0",key:"6a5xfq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=n("Rows2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=n("Rows3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O8=n("Rows4",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 7.5H3",key:"1hm9pq"}],["path",{d:"M21 12H3",key:"2avoz0"}],["path",{d:"M21 16.5H3",key:"n7jzkj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z8=n("Rss",[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y8=n("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W8=n("RussianRuble",[["path",{d:"M6 11h8a4 4 0 0 0 0-8H9v18",key:"18ai8t"}],["path",{d:"M6 15h8",key:"1y8f6l"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _8=n("Sailboat",[["path",{d:"M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z",key:"1404fh"}],["path",{d:"M21 14 10 2 3 14h18Z",key:"1nzg7v"}],["path",{d:"M10 2v16",key:"1labyt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G8=n("Salad",[["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1",key:"10xrj0"}],["path",{d:"m13 12 4-4",key:"1hckqy"}],["path",{d:"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2",key:"1p4srx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $8=n("Sandwich",[["path",{d:"M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3",key:"34v9d7"}],["path",{d:"M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83",key:"1k5vfb"}],["path",{d:"m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z",key:"1oe7l6"}],["path",{d:"M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z",key:"1ts2ri"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X8=n("SatelliteDish",[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z",key:"1fzpp3"}],["path",{d:"m9 15 3-3",key:"88sc13"}],["path",{d:"M17 13a6 6 0 0 0-6-6",key:"15cc6u"}],["path",{d:"M21 13A10 10 0 0 0 11 3",key:"11nf8s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q8=n("Satellite",[["path",{d:"M13 7 9 3 5 7l4 4",key:"vyckw6"}],["path",{d:"m17 11 4 4-4 4-4-4",key:"rchckc"}],["path",{d:"m8 12 4 4 6-6-4-4Z",key:"1sshf7"}],["path",{d:"m16 8 3-3",key:"x428zp"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K8=n("SaveAll",[["path",{d:"M6 4a2 2 0 0 1 2-2h10l4 4v10.2a2 2 0 0 1-2 1.8H8a2 2 0 0 1-2-2Z",key:"1unput"}],["path",{d:"M10 2v4h6",key:"1p5sg6"}],["path",{d:"M18 18v-7h-8v7",key:"1oniuk"}],["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J8=n("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=n("Scale3d",[["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}],["path",{d:"M5 7v12h12",key:"vtaa4r"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=n("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=n("Scaling",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M14 15H9v-5",key:"pi4jk9"}],["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M21 3 9 15",key:"15kdhq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=n("ScanBarcode",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 7v10",key:"23sfjj"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M17 7v10",key:"578dap"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=n("ScanEye",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5",key:"nhuolu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=n("ScanFace",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 9h.01",key:"x1ddxp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=n("ScanLine",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=n("ScanSearch",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m16 16-1.9-1.9",key:"1dq9hf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=n("ScanText",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 8h8",key:"1jbsf9"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h6",key:"1vyc9m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=n("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=n("ScatterChart",[["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}],["circle",{cx:"18.5",cy:"5.5",r:".5",fill:"currentColor",key:"lysivs"}],["circle",{cx:"11.5",cy:"11.5",r:".5",fill:"currentColor",key:"byv1b8"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor",key:"nkw3mc"}],["circle",{cx:"17.5",cy:"14.5",r:".5",fill:"currentColor",key:"1gjh6j"}],["path",{d:"M3 3v18h18",key:"1s2lah"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=n("School2",[["circle",{cx:"12",cy:"10",r:"1",key:"1gnqs8"}],["path",{d:"M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z",key:"8z0lq4"}],["path",{d:"M6 17v.01",key:"roodi6"}],["path",{d:"M6 13v.01",key:"67c122"}],["path",{d:"M18 17v.01",key:"12ktxm"}],["path",{d:"M18 13v.01",key:"tn1rt1"}],["path",{d:"M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5",key:"jfgdp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=n("School",[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4",key:"hhkicm"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2",key:"1vwozw"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"m4 6 8-4 8 4",key:"1q0ilc"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=n("ScissorsLineDashed",[["path",{d:"M5.42 9.42 8 12",key:"12pkuq"}],["circle",{cx:"4",cy:"8",r:"2",key:"107mxr"}],["path",{d:"m14 6-8.58 8.58",key:"gvzu5l"}],["circle",{cx:"4",cy:"16",r:"2",key:"1ehqvc"}],["path",{d:"M10.8 14.8 14 18",key:"ax7m9r"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=n("ScissorsSquareDashedBottom",[["path",{d:"M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2",key:"1vzg26"}],["path",{d:"M10 22H8",key:"euku7a"}],["path",{d:"M16 22h-2",key:"18d249"}],["circle",{cx:"8",cy:"8",r:"2",key:"14cg06"}],["path",{d:"M9.414 9.414 12 12",key:"qz4lzr"}],["path",{d:"M14.8 14.8 18 18",key:"11flf1"}],["circle",{cx:"8",cy:"16",r:"2",key:"1acxsx"}],["path",{d:"m18 6-8.586 8.586",key:"11kzk1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=n("ScissorsSquare",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"2",key:"1btzen"}],["circle",{cx:"8",cy:"8",r:"2",key:"14cg06"}],["path",{d:"M9.414 9.414 12 12",key:"qz4lzr"}],["path",{d:"M14.8 14.8 18 18",key:"11flf1"}],["circle",{cx:"8",cy:"16",r:"2",key:"1acxsx"}],["path",{d:"m18 6-8.586 8.586",key:"11kzk1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=n("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=n("ScreenShareOff",[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",key:"i8wdob"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m22 3-5 5",key:"12jva0"}],["path",{d:"m17 3 5 5",key:"k36vhe"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=n("ScreenShare",[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",key:"i8wdob"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m17 8 5-5",key:"fqif7o"}],["path",{d:"M17 3h5v5",key:"1o3tu8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=n("ScrollText",[["path",{d:"M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4",key:"13a6an"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M15 12h-5",key:"r7krc0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=n("Scroll",[["path",{d:"M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4",key:"13a6an"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=n("SearchCheck",[["path",{d:"m8 11 2 2 4-4",key:"1sed1v"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=n("SearchCode",[["path",{d:"m9 9-2 2 2 2",key:"17gsfh"}],["path",{d:"m13 13 2-2-2-2",key:"186z8k"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=n("SearchSlash",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=n("SearchX",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=n("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=n("SendHorizontal",[["path",{d:"m3 3 3 9-3 9 19-9Z",key:"1aobqy"}],["path",{d:"M6 12h16",key:"s4cdu5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=n("SendToBack",[["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2",key:"1b0bso"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2",key:"1x09vl"}],["path",{d:"M7 14v1a2 2 0 0 0 2 2h1",key:"pao6x6"}],["path",{d:"M14 7h1a2 2 0 0 1 2 2v1",key:"19tdru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=n("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=n("SeparatorHorizontal",[["line",{x1:"3",x2:"21",y1:"12",y2:"12",key:"10d38w"}],["polyline",{points:"8 8 12 4 16 8",key:"zo8t4w"}],["polyline",{points:"16 16 12 20 8 16",key:"1oyrid"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=n("SeparatorVertical",[["line",{x1:"12",x2:"12",y1:"3",y2:"21",key:"1efggb"}],["polyline",{points:"8 8 4 12 8 16",key:"bnfmv4"}],["polyline",{points:"16 16 20 12 16 8",key:"u90052"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=n("ServerCog",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5",key:"tn8das"}],["path",{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5",key:"1g2pve"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m15.7 13.4-.9-.3",key:"1jwmzr"}],["path",{d:"m9.2 10.9-.9-.3",key:"qapnim"}],["path",{d:"m10.6 15.7.3-.9",key:"quwk0k"}],["path",{d:"m13.6 15.7-.4-1",key:"cb9xp7"}],["path",{d:"m10.8 9.3-.4-1",key:"1uaiz5"}],["path",{d:"m8.3 13.6 1-.4",key:"s6srou"}],["path",{d:"m14.7 10.8 1-.4",key:"4d31cq"}],["path",{d:"m13.4 8.3-.3.9",key:"1bm987"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=n("ServerCrash",[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",key:"4b9dqc"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",key:"22nnkd"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m13 6-4 6h6l-4 6",key:"14hqih"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=n("ServerOff",[["path",{d:"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5",key:"bt2siv"}],["path",{d:"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z",key:"1hjrv1"}],["path",{d:"M22 17v-1a2 2 0 0 0-2-2h-1",key:"1iynyr"}],["path",{d:"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z",key:"161ggg"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=n("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=n("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=n("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=n("Shapes",[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=n("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=n("Share",[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["polyline",{points:"16 6 12 2 8 6",key:"m901s6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15",key:"1p0rca"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=n("Sheet",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9",key:"1vqk6q"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15",key:"o2sbyz"}],["line",{x1:"9",x2:"9",y1:"9",y2:"21",key:"1ib60c"}],["line",{x1:"15",x2:"15",y1:"9",y2:"21",key:"1n26ft"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=n("Shell",[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",key:"1cn552"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=n("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=n("ShieldBan",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m4.243 5.21 14.39 12.472",key:"1c9a7c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=n("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=n("ShieldEllipsis",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=n("ShieldHalf",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 22V2",key:"zs6s6o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=n("ShieldMinus",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9 12h6",key:"1c52cq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=n("ShieldOff",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71",key:"1jlk70"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264",key:"18rp1v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=n("ShieldPlus",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M12 9v6",key:"199k2o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=n("ShieldQuestion",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=n("ShieldX",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"m9.5 9.5 5 5",key:"18nt4w"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=n("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=n("ShipWheel",[["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}],["path",{d:"M12 2v7.5",key:"1e5rl5"}],["path",{d:"m19 5-5.23 5.23",key:"1ezxxf"}],["path",{d:"M22 12h-7.5",key:"le1719"}],["path",{d:"m19 19-5.23-5.23",key:"p3fmgn"}],["path",{d:"M12 14.5V22",key:"dgcmos"}],["path",{d:"M10.23 13.77 5 19",key:"qwopd4"}],["path",{d:"M9.5 12H2",key:"r7bup8"}],["path",{d:"M10.23 10.23 5 5",key:"k2y7lj"}],["circle",{cx:"12",cy:"12",r:"2.5",key:"ix0uyj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=n("Ship",[["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"iegodh"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76",key:"fp8vka"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6",key:"qpkstq"}],["path",{d:"M12 10v4",key:"1kjpxc"}],["path",{d:"M12 2v3",key:"qbqxhf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=n("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=n("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=n("ShoppingBasket",[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=n("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=n("Shovel",[["path",{d:"M2 22v-5l5-5 5 5-5 5z",key:"1fh25c"}],["path",{d:"M9.5 14.5 16 8",key:"1smz5x"}],["path",{d:"m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2",key:"1q8uv5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=n("ShowerHead",[["path",{d:"m4 4 2.5 2.5",key:"uv2vmf"}],["path",{d:"M13.5 6.5a4.95 4.95 0 0 0-7 7",key:"frdkwv"}],["path",{d:"M15 5 5 15",key:"1ag8rq"}],["path",{d:"M14 17v.01",key:"eokfpp"}],["path",{d:"M10 16v.01",key:"14uyyl"}],["path",{d:"M13 13v.01",key:"1v1k97"}],["path",{d:"M16 10v.01",key:"5169yg"}],["path",{d:"M11 20v.01",key:"cj92p8"}],["path",{d:"M17 14v.01",key:"11cswd"}],["path",{d:"M20 11v.01",key:"19e0od"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=n("Shrink",[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8",key:"17vawe"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6",key:"chjx8e"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6",key:"lav6yq"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3",key:"1pxi2q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=n("Shrub",[["path",{d:"M12 22v-7l-2-2",key:"eqv9mc"}],["path",{d:"M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z",key:"12jcau"}],["path",{d:"m14 14-2 2",key:"847xa2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=n("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=n("SigmaSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M16 8.9V7H8l4 5-4 5h8v-1.9",key:"9nih0i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=n("Sigma",[["path",{d:"M18 7V4H6l6 8-6 8h12v-3",key:"zis8ev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=n("SignalHigh",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=n("SignalLow",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=n("SignalMedium",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=n("SignalZero",[["path",{d:"M2 20h.01",key:"4haj6o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=n("Signal",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}],["path",{d:"M22 4v16",key:"sih9yq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=n("SignpostBig",[["path",{d:"M10 9H4L2 7l2-2h6",key:"1hq7x2"}],["path",{d:"M14 5h6l2 2-2 2h-6",key:"bv62ej"}],["path",{d:"M10 22V4a2 2 0 1 1 4 0v18",key:"eqpcf2"}],["path",{d:"M8 22h8",key:"rmew8v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=n("Signpost",[["path",{d:"M12 3v3",key:"1n5kay"}],["path",{d:"M18.5 13h-13L2 9.5 5.5 6h13L22 9.5Z",key:"27os56"}],["path",{d:"M12 13v8",key:"1l5pq0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=n("Siren",[["path",{d:"M7 18v-6a5 5 0 1 1 10 0v6",key:"pcx96s"}],["path",{d:"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z",key:"1b4s83"}],["path",{d:"M21 12h1",key:"jtio3y"}],["path",{d:"M18.5 4.5 18 5",key:"g5sp9y"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"m4.929 4.929.707.707",key:"1i51kw"}],["path",{d:"M12 12v6",key:"3ahymv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=n("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=n("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=n("Skull",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["path",{d:"M8 20v2h8v-2",key:"ded4og"}],["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20",key:"xq9p5u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=n("Slack",[["rect",{width:"3",height:"8",x:"13",y:"2",rx:"1.5",key:"diqz80"}],["path",{d:"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5",key:"183iwg"}],["rect",{width:"3",height:"8",x:"8",y:"14",rx:"1.5",key:"hqg7r1"}],["path",{d:"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5",key:"76g71w"}],["rect",{width:"8",height:"3",x:"14",y:"13",rx:"1.5",key:"1kmz0a"}],["path",{d:"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5",key:"jc4sz0"}],["rect",{width:"8",height:"3",x:"2",y:"8",rx:"1.5",key:"1omvl4"}],["path",{d:"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5",key:"16f3cl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=n("SlashSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=n("Slash",[["path",{d:"M22 2 2 22",key:"y4kqgn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=n("Slice",[["path",{d:"m8 14-6 6h9v-3",key:"zo3j9a"}],["path",{d:"M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z",key:"1dzx0j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=n("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=n("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=n("SmartphoneCharging",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12.667 8 10 12h4l-2.667 4",key:"h9lk2d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=n("SmartphoneNfc",[["rect",{width:"7",height:"12",x:"2",y:"6",rx:"1",key:"5nje8w"}],["path",{d:"M13 8.32a7.43 7.43 0 0 1 0 7.36",key:"1g306n"}],["path",{d:"M16.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"uqvjvo"}],["path",{d:"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"ujntz3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=n("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=n("SmilePlus",[["path",{d:"M22 11v1a10 10 0 1 1-9-10",key:"ew0xw9"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}],["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=n("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=n("Snail",[["path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0",key:"hneq2s"}],["circle",{cx:"10",cy:"13",r:"8",key:"194lz3"}],["path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6",key:"ixqyt7"}],["path",{d:"M18 3 19.1 5.2",key:"9tjm43"}],["path",{d:"M22 3 20.9 5.2",key:"j3odrs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=n("Snowflake",[["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"m20 16-4-4 4-4",key:"rquw4f"}],["path",{d:"m4 8 4 4-4 4",key:"12s3z9"}],["path",{d:"m16 4-4 4-4-4",key:"1tumq1"}],["path",{d:"m8 20 4-4 4 4",key:"9p200w"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=n("Sofa",[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3",key:"1dgpiv"}],["path",{d:"M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z",key:"u5qfb7"}],["path",{d:"M4 18v2",key:"jwo5n2"}],["path",{d:"M20 18v2",key:"1ar1qi"}],["path",{d:"M12 4v9",key:"oqhhn3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=n("Soup",[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M19.5 12 22 6",key:"shfsr5"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",key:"rpc6vp"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",key:"1lf63m"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62",key:"97tijn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=n("Space",[["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",key:"lt2kga"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=n("Spade",[["path",{d:"M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z",key:"40bo9n"}],["path",{d:"M12 18v4",key:"jadmvz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=n("Sparkle",[["path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z",key:"nraa5p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=n("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=n("Speaker",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["circle",{cx:"12",cy:"14",r:"4",key:"1jruaj"}],["path",{d:"M12 14h.01",key:"1etili"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=n("Speech",[["path",{d:"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20",key:"11atix"}],["path",{d:"M19.8 17.8a7.5 7.5 0 0 0 .003-10.603",key:"yol142"}],["path",{d:"M17 15a3.5 3.5 0 0 0-.025-4.975",key:"ssbmkc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=n("SpellCheck2",[["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1",key:"8mdmtu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=n("SpellCheck",[["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=n("Spline",[["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M5 17A12 12 0 0 1 17 5",key:"1okkup"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=n("SplitSquareHorizontal",[["path",{d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3",key:"lubmu8"}],["path",{d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3",key:"1ag34g"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=n("SplitSquareVertical",[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",key:"1pi83i"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",key:"ido5k7"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=n("Split",[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M8 3H3v5",key:"15dfkv"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3",key:"1qrqzj"}],["path",{d:"m15 9 6-6",key:"ko1vev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=n("SprayCan",[["path",{d:"M3 3h.01",key:"159qn6"}],["path",{d:"M7 5h.01",key:"1hq22a"}],["path",{d:"M11 7h.01",key:"1osv80"}],["path",{d:"M3 7h.01",key:"1xzrh3"}],["path",{d:"M7 9h.01",key:"19b3jx"}],["path",{d:"M3 11h.01",key:"1eifu7"}],["rect",{width:"4",height:"4",x:"15",y:"5",key:"mri9e4"}],["path",{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2",key:"aib6hk"}],["path",{d:"m13 14 8-2",key:"1d7bmk"}],["path",{d:"m13 19 8-2",key:"1y2vml"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=n("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=n("SquareDashedBottomCode",[["path",{d:"m10 10-2 2 2 2",key:"p6et6i"}],["path",{d:"m14 14 2-2-2-2",key:"m075q2"}],["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",key:"as5y1o"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=n("SquareDashedBottom",[["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",key:"as5y1o"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=n("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=n("SquareRadical",[["path",{d:"M7 12h2l2 5 2-10h4",key:"1fxv6h"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=n("SquareStack",[["path",{d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",key:"4i38lg"}],["path",{d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",key:"mlte4a"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2",key:"1fa9i4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=n("SquareUserRound",[["path",{d:"M18 21a6 6 0 0 0-12 0",key:"kaz2du"}],["circle",{cx:"12",cy:"11",r:"4",key:"1gt34v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=n("SquareUser",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1m6ac2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=n("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=n("Squircle",[["path",{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9",key:"garfkc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=n("Squirrel",[["path",{d:"M15.236 22a3 3 0 0 0-2.2-5",key:"21bitc"}],["path",{d:"M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4",key:"oh0fg0"}],["path",{d:"M18 13h.01",key:"9veqaj"}],["path",{d:"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10",key:"980v8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=n("Stamp",[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z",key:"1sy9ra"}],["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13",key:"cnxgux"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e7=n("StarHalf",[["path",{d:"M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2",key:"nare05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t7=n("StarOff",[["path",{d:"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43",key:"16m0ql"}],["path",{d:"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91",key:"1vt8nq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a7=n("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n7=n("StepBack",[["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["polygon",{points:"14,20 4,12 14,4",key:"ypakod"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r7=n("StepForward",[["line",{x1:"6",x2:"6",y1:"4",y2:"20",key:"fy8qot"}],["polygon",{points:"10,4 20,12 10,20",key:"1mc1pf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=n("Stethoscope",[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",key:"1jd90r"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4",key:"126ukv"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o7=n("Sticker",[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z",key:"1wis1t"}],["path",{d:"M14 3v4a2 2 0 0 0 2 2h4",key:"36rjfy"}],["path",{d:"M8 13h0",key:"jdup5h"}],["path",{d:"M16 13h0",key:"l4i2ga"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1",key:"1vvgv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i7=n("StickyNote",[["path",{d:"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z",key:"qazsjp"}],["path",{d:"M15 3v4a2 2 0 0 0 2 2h4",key:"40519r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l7=n("StopCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{width:"6",height:"6",x:"9",y:"9",key:"1wrtvo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c7=n("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s7=n("StretchHorizontal",[["rect",{width:"20",height:"6",x:"2",y:"4",rx:"2",key:"qdearl"}],["rect",{width:"20",height:"6",x:"2",y:"14",rx:"2",key:"1xrn6j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d7=n("StretchVertical",[["rect",{width:"6",height:"20",x:"4",y:"2",rx:"2",key:"19qu7m"}],["rect",{width:"6",height:"20",x:"14",y:"2",rx:"2",key:"24v0nk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h7=n("Strikethrough",[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4",key:"43sutm"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6",key:"nlfj13"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u7=n("Subscript",[["path",{d:"m4 5 8 8",key:"1eunvl"}],["path",{d:"m12 5-8 8",key:"1ah0jp"}],["path",{d:"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07",key:"e8ta8j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y7=n("SunDim",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M20 12h.01",key:"1ykeid"}],["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M4 12h.01",key:"158zrr"}],["path",{d:"M17.657 6.343h.01",key:"31pqzk"}],["path",{d:"M17.657 17.657h.01",key:"jehnf4"}],["path",{d:"M6.343 17.657h.01",key:"gdk6ow"}],["path",{d:"M6.343 6.343h.01",key:"1uurf0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p7=n("SunMedium",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 3v1",key:"1asbbs"}],["path",{d:"M12 20v1",key:"1wcdkc"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M20 12h1",key:"1vloll"}],["path",{d:"m18.364 5.636-.707.707",key:"1hakh0"}],["path",{d:"m6.343 17.657-.707.707",key:"18m9nf"}],["path",{d:"m5.636 5.636.707.707",key:"1xv1c5"}],["path",{d:"m17.657 17.657.707.707",key:"vl76zb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k7=n("SunMoon",[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4",key:"1fu5g2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.9 4.9 1.4 1.4",key:"b9915j"}],["path",{d:"m17.7 17.7 1.4 1.4",key:"qc3ed3"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.3 17.7-1.4 1.4",key:"5gca6"}],["path",{d:"m19.1 4.9-1.4 1.4",key:"wpu9u6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m7=n("SunSnow",[["path",{d:"M10 9a3 3 0 1 0 0 6",key:"6zmtdl"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"M14 21V3",key:"1llu3z"}],["path",{d:"M10 4V3",key:"pkzwkn"}],["path",{d:"M10 21v-1",key:"1u8rkd"}],["path",{d:"m3.64 18.36.7-.7",key:"105rm9"}],["path",{d:"m4.34 6.34-.7-.7",key:"d3unjp"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"m17 4-3 3",key:"15jcng"}],["path",{d:"m14 17 3 3",key:"6tlq38"}],["path",{d:"m21 15-3-3 3-3",key:"1nlnje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g7=n("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f7=n("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v7=n("Sunset",[["path",{d:"M12 10V2",key:"16sf7g"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M7=n("Superscript",[["path",{d:"m4 19 8-8",key:"hr47gm"}],["path",{d:"m12 19-8-8",key:"1dhhmo"}],["path",{d:"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06",key:"1dfcux"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x7=n("SwatchBook",[["path",{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z",key:"1ldrpk"}],["path",{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7",key:"11i5po"}],["path",{d:"M 7 17h0.01",key:"10821z"}],["path",{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8",key:"o2gii7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w7=n("SwissFranc",[["path",{d:"M10 21V3h8",key:"br2l0g"}],["path",{d:"M6 16h9",key:"2py0wn"}],["path",{d:"M10 9.5h7",key:"13dmhz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L7=n("SwitchCamera",[["path",{d:"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5",key:"mtk2lu"}],["path",{d:"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5",key:"120jsl"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m18 22-3-3 3-3",key:"kgdoj7"}],["path",{d:"m6 2 3 3-3 3",key:"1fnbkv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I7=n("Sword",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C7=n("Swords",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S7=n("Syringe",[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b7=n("Table2",[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",key:"gugj83"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q7=n("TableCellsMerge",[["path",{d:"M12 21v-6",key:"lihzve"}],["path",{d:"M12 9V3",key:"da5inc"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z7=n("TableCellsSplit",[["path",{d:"M12 15V9",key:"8c7uyn"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j7=n("TableColumnsSplit",[["path",{d:"M14 14v2",key:"w2a1xv"}],["path",{d:"M14 20v2",key:"1lq872"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M14 8v2",key:"i67w9a"}],["path",{d:"M2 15h8",key:"82wtch"}],["path",{d:"M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2",key:"up0l64"}],["path",{d:"M2 9h8",key:"yelfik"}],["path",{d:"M22 15h-4",key:"1es58f"}],["path",{d:"M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2",key:"pdjoqf"}],["path",{d:"M22 9h-4",key:"1luja7"}],["path",{d:"M5 3v18",key:"14hmio"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H7=n("TableProperties",[["path",{d:"M15 3v18",key:"14nvp0"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P7=n("TableRowsSplit",[["path",{d:"M14 10h2",key:"1lstlu"}],["path",{d:"M15 22v-8",key:"1fwwgm"}],["path",{d:"M15 2v4",key:"1044rn"}],["path",{d:"M2 10h2",key:"1r8dkt"}],["path",{d:"M20 10h2",key:"1ug425"}],["path",{d:"M3 19h18",key:"awlh7x"}],["path",{d:"M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6",key:"ibqhof"}],["path",{d:"M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2",key:"1uenja"}],["path",{d:"M8 10h2",key:"66od0"}],["path",{d:"M9 22v-8",key:"fmnu31"}],["path",{d:"M9 2v4",key:"j1yeou"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A7=n("Table",[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U7=n("TabletSmartphone",[["rect",{width:"10",height:"14",x:"3",y:"8",rx:"2",key:"1vrsiq"}],["path",{d:"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4",key:"1j4zmg"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V7=n("Tablet",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F7=n("Tablets",[["circle",{cx:"7",cy:"7",r:"5",key:"x29byf"}],["circle",{cx:"17",cy:"17",r:"5",key:"1op1d2"}],["path",{d:"M12 17h10",key:"ls21zv"}],["path",{d:"m3.46 10.54 7.08-7.08",key:"1rehiu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T7=n("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D7=n("Tags",[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",key:"1cbfv1"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z",key:"135mg7"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor",key:"5pm5xn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R7=n("Tally1",[["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B7=n("Tally2",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E7=n("Tally3",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N7=n("Tally4",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}],["path",{d:"M19 4v16",key:"8ij5ei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O7=n("Tally5",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}],["path",{d:"M19 4v16",key:"8ij5ei"}],["path",{d:"M22 6 2 18",key:"h9moai"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z7=n("Tangent",[["circle",{cx:"17",cy:"4",r:"2",key:"y5j2s2"}],["path",{d:"M15.59 5.41 5.41 15.59",key:"l0vprr"}],["circle",{cx:"4",cy:"17",r:"2",key:"9p4efm"}],["path",{d:"M12 22s-4-9-1.5-11.5S22 12 22 12",key:"1twk4o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y7=n("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W7=n("Telescope",[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",key:"k4qptu"}],["path",{d:"m13.56 11.747 4.332-.924",key:"19l80z"}],["path",{d:"m16 21-3.105-6.21",key:"7oh9d"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",key:"m7xp4m"}],["path",{d:"m6.158 8.633 1.114 4.456",key:"74o979"}],["path",{d:"m8 21 3.105-6.21",key:"1fvxut"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _7=n("TentTree",[["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}],["path",{d:"m14 5 3-3 3 3",key:"1sorif"}],["path",{d:"m14 10 3-3 3 3",key:"1jyi9h"}],["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M17 14H7l-5 8h20Z",key:"13ar7p"}],["path",{d:"M8 14v8",key:"1ghmqk"}],["path",{d:"m9 14 5 8",key:"13pgi6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G7=n("Tent",[["path",{d:"M3.5 21 14 3",key:"1szst5"}],["path",{d:"M20.5 21 10 3",key:"1310c3"}],["path",{d:"M15.5 21 12 15l-3.5 6",key:"1ddtfw"}],["path",{d:"M2 21h20",key:"1nyx9w"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $7=n("TerminalSquare",[["path",{d:"m7 11 2-2-2-2",key:"1lz0vl"}],["path",{d:"M11 13h4",key:"1p7l4v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X7=n("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q7=n("TestTube2",[["path",{d:"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3",key:"dg8b2p"}],["path",{d:"m16 2 6 6",key:"1gw87d"}],["path",{d:"M12 16H4",key:"1cjfip"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K7=n("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J7=n("TestTubes",[["path",{d:"M9 2v17.5A2.5 2.5 0 0 1 6.5 22v0A2.5 2.5 0 0 1 4 19.5V2",key:"12z67u"}],["path",{d:"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V2",key:"1q2nfy"}],["path",{d:"M3 2h7",key:"7s29d5"}],["path",{d:"M14 2h7",key:"7sicin"}],["path",{d:"M9 16H4",key:"1bfye3"}],["path",{d:"M20 16h-5",key:"ddnjpe"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=n("TextCursorInput",[["path",{d:"M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1",key:"18xjzo"}],["path",{d:"M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5",key:"fj48gi"}],["path",{d:"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1",key:"1n9rhb"}],["path",{d:"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7",key:"13ksps"}],["path",{d:"M9 7v10",key:"1vc8ob"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=n("TextCursor",[["path",{d:"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1",key:"uvaxm9"}],["path",{d:"M7 22h1a4 4 0 0 0 4-4v-1",key:"11xy8d"}],["path",{d:"M7 2h1a4 4 0 0 1 4 4v1",key:"1uw06m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=n("TextQuote",[["path",{d:"M17 6H3",key:"16j9eg"}],["path",{d:"M21 12H8",key:"scolzb"}],["path",{d:"M21 18H8",key:"1wfozv"}],["path",{d:"M3 12v6",key:"fv4c87"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=n("TextSearch",[["path",{d:"M21 6H3",key:"1jwq7v"}],["path",{d:"M10 12H3",key:"1ulcyk"}],["path",{d:"M10 18H3",key:"13769t"}],["circle",{cx:"17",cy:"15",r:"3",key:"1upz2a"}],["path",{d:"m21 19-1.9-1.9",key:"dwi7p8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=n("TextSelect",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}],["line",{x1:"7",x2:"15",y1:"8",y2:"8",key:"1758g8"}],["line",{x1:"7",x2:"17",y1:"12",y2:"12",key:"197423"}],["line",{x1:"7",x2:"13",y1:"16",y2:"16",key:"37cgm6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=n("Text",[["path",{d:"M17 6.1H3",key:"wptmhv"}],["path",{d:"M21 12.1H3",key:"1j38uz"}],["path",{d:"M15.1 18H3",key:"1nb16a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=n("Theater",[["path",{d:"M2 10s3-3 3-8",key:"3xiif0"}],["path",{d:"M22 10s-3-3-3-8",key:"ioaa5q"}],["path",{d:"M10 2c0 4.4-3.6 8-8 8",key:"16fkpi"}],["path",{d:"M14 2c0 4.4 3.6 8 8 8",key:"b9eulq"}],["path",{d:"M2 10s2 2 2 5",key:"1au1lb"}],["path",{d:"M22 10s-2 2-2 5",key:"qi2y5e"}],["path",{d:"M8 15h8",key:"45n4r"}],["path",{d:"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"1vsc2m"}],["path",{d:"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"hrha4u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=n("ThermometerSnowflake",[["path",{d:"M2 12h10",key:"19562f"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"m3 9 3 3-3 3",key:"1sas0l"}],["path",{d:"M12 6 9 9 6 6",key:"pfrgxu"}],["path",{d:"m6 18 3-3 1.5 1.5",key:"1e277p"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"iof6y5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=n("ThermometerSun",[["path",{d:"M12 9a4 4 0 0 0-2 7.5",key:"1jvsq6"}],["path",{d:"M12 3v2",key:"1w22ol"}],["path",{d:"m6.6 18.4-1.4 1.4",key:"w2yidj"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"iof6y5"}],["path",{d:"M4 13H2",key:"118le4"}],["path",{d:"M6.34 7.34 4.93 5.93",key:"1brd51"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=n("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=n("ThumbsDown",[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",key:"s6e0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=n("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",key:"y3tblf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=n("TicketCheck",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=n("TicketMinus",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M9 12h6",key:"1c52cq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=n("TicketPercent",[["path",{d:"M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"1l48ns"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=n("TicketPlus",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M12 9v6",key:"199k2o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=n("TicketSlash",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9.5 14.5 5-5",key:"qviqfa"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=n("TicketX",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9.5 14.5 5-5",key:"qviqfa"}],["path",{d:"m9.5 9.5 5 5",key:"18nt4w"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=n("Ticket",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=n("TimerOff",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7",key:"10he05"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2",key:"15f7sh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M12 12v-2",key:"fwoke6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=n("TimerReset",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M12 14v-4",key:"1evpnu"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",key:"1ts96g"}],["path",{d:"M9 17H4v5",key:"8t5av"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=n("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=n("ToggleLeft",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"8",cy:"12",r:"2",key:"1nvbw3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=n("ToggleRight",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=n("Tornado",[["path",{d:"M21 4H3",key:"1hwok0"}],["path",{d:"M18 8H6",key:"41n648"}],["path",{d:"M19 12H9",key:"1g4lpz"}],["path",{d:"M16 16h-6",key:"1j5d54"}],["path",{d:"M11 20H9",key:"39obr8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=n("Torus",[["ellipse",{cx:"12",cy:"11",rx:"3",ry:"2",key:"1b2qxu"}],["ellipse",{cx:"12",cy:"12.5",rx:"10",ry:"8.5",key:"h8emeu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=n("TouchpadOff",[["path",{d:"M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16",key:"lnt0bk"}],["path",{d:"M2 14h12",key:"d8icqz"}],["path",{d:"M22 14h-2",key:"jrx26d"}],["path",{d:"M12 20v-6",key:"1rm09r"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M22 16V6a2 2 0 0 0-2-2H10",key:"11y8e4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=n("Touchpad",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M12 20v-6",key:"1rm09r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=n("TowerControl",[["path",{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z",key:"1pledb"}],["path",{d:"M8 13v9",key:"hmv0ci"}],["path",{d:"M16 22v-9",key:"ylnf1u"}],["path",{d:"m9 6 1 7",key:"dpdgam"}],["path",{d:"m15 6-1 7",key:"ls7zgu"}],["path",{d:"M12 6V2",key:"1pj48d"}],["path",{d:"M13 2h-2",key:"mj6ths"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=n("ToyBrick",[["rect",{width:"18",height:"12",x:"3",y:"8",rx:"1",key:"158fvp"}],["path",{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3",key:"s0042v"}],["path",{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3",key:"9wmeh2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=n("Tractor",[["path",{d:"m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1",key:"2w242w"}],["path",{d:"M16 18h-5",key:"bq60fd"}],["path",{d:"M18 5a1 1 0 0 0-1 1v5.573",key:"1kv8ia"}],["path",{d:"M3 4h9l1 7.246",key:"d639it"}],["path",{d:"M4 11V4",key:"9ft8pt"}],["path",{d:"M7 15h.01",key:"k5ht0j"}],["path",{d:"M8 10.1V4",key:"1jgyzo"}],["circle",{cx:"18",cy:"18",r:"2",key:"1emm8v"}],["circle",{cx:"7",cy:"15",r:"5",key:"ddtuc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=n("TrafficCone",[["path",{d:"M9.3 6.2a4.55 4.55 0 0 0 5.4 0",key:"flyxqv"}],["path",{d:"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3",key:"1nlxxg"}],["path",{d:"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z",key:"vz7x1l"}],["path",{d:"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8",key:"1xfzlw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=n("TrainFrontTunnel",[["path",{d:"M2 22V12a10 10 0 1 1 20 0v10",key:"o0fyp0"}],["path",{d:"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8",key:"m8q3n9"}],["path",{d:"M10 15h.01",key:"44in9x"}],["path",{d:"M14 15h.01",key:"5mohn5"}],["path",{d:"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z",key:"hckbmu"}],["path",{d:"m9 19-2 3",key:"iij7hm"}],["path",{d:"m15 19 2 3",key:"npx8sa"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=n("TrainFront",[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1",key:"1v71zp"}],["path",{d:"m9 15-1-1",key:"1yrq24"}],["path",{d:"m15 15 1-1",key:"1t0d6s"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z",key:"1p0hjs"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m16 19 2 3",key:"xo31yx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=n("TrainTrack",[["path",{d:"M2 17 17 2",key:"18b09t"}],["path",{d:"m2 14 8 8",key:"1gv9hu"}],["path",{d:"m5 11 8 8",key:"189pqp"}],["path",{d:"m8 8 8 8",key:"1imecy"}],["path",{d:"m11 5 8 8",key:"ummqn6"}],["path",{d:"m14 2 8 8",key:"1vk7dn"}],["path",{d:"M7 22 22 7",key:"15mb1i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=n("TramFront",[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h0",key:"q9eq1f"}],["path",{d:"M16 15h0",key:"pzrbjg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=n("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=n("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=n("TreeDeciduous",[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",key:"oadzkq"}],["path",{d:"M12 19v3",key:"npa21l"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=n("TreePine",[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",key:"cpyugq"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=n("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"yh07w9"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=n("Trello",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["rect",{width:"3",height:"9",x:"7",y:"7",key:"14n3xi"}],["rect",{width:"3",height:"5",x:"14",y:"7",key:"s4azjd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=n("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=n("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=n("TriangleRight",[["path",{d:"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z",key:"183wce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=n("Triangle",[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=n("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=n("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=n("Turtle",[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z",key:"1lbbv7"}],["path",{d:"M4.82 7.9 8 10",key:"m9wose"}],["path",{d:"M15.18 7.9 12 10",key:"p8dp2u"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2",key:"12nsm7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=n("Tv2",[["path",{d:"M7 21h10",key:"1b0cd5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=n("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=n("Twitch",[["path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7",key:"c0yzno"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=n("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=n("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=n("UmbrellaOff",[["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575",key:"eki10q"}],["path",{d:"M17.5 12H22A10 10 0 0 0 9.004 3.455",key:"n2ayka"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=n("Umbrella",[["path",{d:"M22 12a10.06 10.06 1 0 0-20 0Z",key:"1teyop"}],["path",{d:"M12 12v8a2 2 0 0 0 4 0",key:"ulpmoc"}],["path",{d:"M12 2v1",key:"11qlp1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e9=n("Underline",[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t9=n("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11",key:"llx8ln"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a9=n("UndoDot",[["circle",{cx:"12",cy:"17",r:"1",key:"1ixnty"}],["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n9=n("Undo",[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r9=n("UnfoldHorizontal",[["path",{d:"M16 12h6",key:"15xry1"}],["path",{d:"M8 12H2",key:"1jqql6"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m19 15 3-3-3-3",key:"wjy7rq"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o9=n("UnfoldVertical",[["path",{d:"M12 22v-6",key:"6o8u61"}],["path",{d:"M12 8V2",key:"1wkif3"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m15 5-3-3-3 3",key:"itvq4r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i9=n("Ungroup",[["rect",{width:"8",height:"6",x:"5",y:"4",rx:"1",key:"nzclkv"}],["rect",{width:"8",height:"6",x:"11",y:"14",rx:"1",key:"4tytwb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l9=n("Unlink2",[["path",{d:"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2",key:"1re2ne"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c9=n("Unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s9=n("UnlockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5",key:"car5b7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d9=n("Unlock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h9=n("Unplug",[["path",{d:"m19 5 3-3",key:"yk6iyv"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",key:"1snsnr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u9=n("UploadCloud",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m16 16-4-4-4 4",key:"119tzi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y9=n("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p9=n("Usb",[["circle",{cx:"10",cy:"7",r:"1",key:"dypaad"}],["circle",{cx:"4",cy:"20",r:"1",key:"22iqad"}],["path",{d:"M4.7 19.3 19 5",key:"1enqfc"}],["path",{d:"m21 3-3 1 2 2Z",key:"d3ov82"}],["path",{d:"M9.26 7.68 5 12l2 5",key:"1esawj"}],["path",{d:"m10 14 5 2 3.5-3.5",key:"v8oal5"}],["path",{d:"m18 12 1-1 1 1-1 1Z",key:"1bh22v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k9=n("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m9=n("UserCog",[["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m21.7 16.4-.9-.3",key:"12j9ji"}],["path",{d:"m15.2 13.9-.9-.3",key:"1fdjdi"}],["path",{d:"m16.6 18.7.3-.9",key:"heedtr"}],["path",{d:"m19.1 12.2.3-.9",key:"1af3ki"}],["path",{d:"m19.6 18.7-.4-1",key:"1x9vze"}],["path",{d:"m16.8 12.3-.4-1",key:"vqeiwj"}],["path",{d:"m14.3 16.6 1-.4",key:"1qlj63"}],["path",{d:"m20.7 13.8 1-.4",key:"1v5t8k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g9=n("UserMinus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f9=n("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=n("UserRoundCheck",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=n("UserRoundCog",[["path",{d:"M2 21a8 8 0 0 1 10.434-7.62",key:"1yezr2"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m19.5 14.3-.4.9",key:"1eb35c"}],["path",{d:"m16.9 20.8-.4.9",key:"dfjc4z"}],["path",{d:"m21.7 19.5-.9-.4",key:"q4dx6b"}],["path",{d:"m15.2 16.9-.9-.4",key:"1r0w5f"}],["path",{d:"m21.7 16.5-.9.4",key:"1knoei"}],["path",{d:"m15.2 19.1-.9.4",key:"j188fs"}],["path",{d:"m19.5 21.7-.4-.9",key:"1tonu5"}],["path",{d:"m16.9 15.2-.4-.9",key:"699xu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=n("UserRoundMinus",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 19h-6",key:"vcuq98"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=n("UserRoundPlus",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M22 19h-6",key:"vcuq98"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v9=n("UserRoundSearch",[["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M2 21a8 8 0 0 1 10.434-7.62",key:"1yezr2"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.9-1.9",key:"1e5ubv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=n("UserRoundX",[["path",{d:"M2 21a8 8 0 0 1 11.873-7",key:"74fkxq"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m17 17 5 5",key:"p7ous7"}],["path",{d:"m22 17-5 5",key:"gqnmv0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=n("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M9=n("UserSearch",[["circle",{cx:"10",cy:"7",r:"4",key:"e45bow"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2",key:"3bnktk"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["path",{d:"m21 21-1.9-1.9",key:"1g2n9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x9=n("UserX",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w9=n("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=n("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L9=n("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=n("UtensilsCrossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I9=n("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C9=n("UtilityPole",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M2 5h20",key:"1fs1ex"}],["path",{d:"M3 3v2",key:"9imdir"}],["path",{d:"M7 3v2",key:"n0os7"}],["path",{d:"M17 3v2",key:"1l2re6"}],["path",{d:"M21 3v2",key:"1duuac"}],["path",{d:"m19 5-7 7-7-7",key:"133zxf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S9=n("Variable",[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b9=n("Vault",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}],["path",{d:"m7.9 7.9 2.7 2.7",key:"hpeyl3"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}],["path",{d:"m13.4 10.6 2.7-2.7",key:"264c1n"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor",key:"nkw3mc"}],["path",{d:"m7.9 16.1 2.7-2.7",key:"p81g5e"}],["circle",{cx:"16.5",cy:"16.5",r:".5",fill:"currentColor",key:"fubopw"}],["path",{d:"m13.4 13.4 2.7 2.7",key:"abhel3"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q9=n("Vegan",[["path",{d:"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14",key:"qiv7li"}],["path",{d:"M16 8c4 0 6-2 6-6-4 0-6 2-6 6",key:"n7eohy"}],["path",{d:"M17.41 3.6a10 10 0 1 0 3 3",key:"1dion0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z9=n("VenetianMask",[["path",{d:"M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z",key:"1g6z3j"}],["path",{d:"M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z",key:"c2lwnf"}],["path",{d:"M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z",key:"njd9zo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j9=n("VibrateOff",[["path",{d:"m2 8 2 2-2 2 2 2-2 2",key:"sv1b1"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2",key:"101i4y"}],["path",{d:"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2",key:"1hbad5"}],["path",{d:"M16 10.34V6c0-.55-.45-1-1-1h-4.34",key:"1x5tf0"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H9=n("Vibrate",[["path",{d:"m2 8 2 2-2 2 2 2-2 2",key:"sv1b1"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2",key:"101i4y"}],["rect",{width:"8",height:"14",x:"8",y:"5",rx:"1",key:"1oyrl4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P9=n("VideoOff",[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8",key:"ubwiq0"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z",key:"1l10zd"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A9=n("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U9=n("Videotape",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M2 8h20",key:"d11cs7"}],["circle",{cx:"8",cy:"14",r:"2",key:"1k2qr5"}],["path",{d:"M8 12h8",key:"1wcyev"}],["circle",{cx:"16",cy:"14",r:"2",key:"14k7lr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V9=n("View",[["path",{d:"M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z",key:"vptub8"}],["path",{d:"M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",key:"10lhjs"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2",key:"mrq65r"}],["path",{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2",key:"be3xqs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F9=n("Voicemail",[["circle",{cx:"6",cy:"12",r:"4",key:"1ehtga"}],["circle",{cx:"18",cy:"12",r:"4",key:"4vafl8"}],["line",{x1:"6",x2:"18",y1:"16",y2:"16",key:"pmt8us"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T9=n("Volume1",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D9=n("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R9=n("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B9=n("Volume",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E9=n("Vote",[["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z",key:"1ezoue"}],["path",{d:"M22 19H2",key:"nuriw5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N9=n("Wallet2",[["path",{d:"M17 14h.01",key:"7oqj8z"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",key:"u1rqew"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O9=n("WalletCards",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2",key:"4125el"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",key:"1dpki6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z9=n("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y9=n("Wallpaper",[["circle",{cx:"8",cy:"9",r:"2",key:"gjzl9d"}],["path",{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2",key:"69xh40"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W9=n("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _9=n("Wand",[["path",{d:"M15 4V2",key:"z1p9b7"}],["path",{d:"M15 16v-2",key:"px0unx"}],["path",{d:"M8 9h2",key:"1g203m"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M17.8 11.8 19 13",key:"yihg8r"}],["path",{d:"M15 9h0",key:"kg5t1u"}],["path",{d:"M17.8 6.2 19 5",key:"fd4us0"}],["path",{d:"m3 21 9-9",key:"1jfql5"}],["path",{d:"M12.2 6.2 11 5",key:"i3da3b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G9=n("Warehouse",[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",key:"gksnxg"}],["path",{d:"M6 18h12",key:"9pbo8z"}],["path",{d:"M6 14h12",key:"4cwo0f"}],["rect",{width:"12",height:"12",x:"6",y:"10",key:"apd30q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $9=n("WashingMachine",[["path",{d:"M3 6h3",key:"155dbl"}],["path",{d:"M17 6h.01",key:"e2y6kg"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2",key:"od3kk9"}],["circle",{cx:"12",cy:"13",r:"5",key:"nlbqau"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5",key:"17lach"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X9=n("Watch",[["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["polyline",{points:"12 10 12 12 13 13",key:"19dquz"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05",key:"18k57s"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05",key:"16ny36"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q9=n("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K9=n("Waypoints",[["circle",{cx:"12",cy:"4.5",r:"2.5",key:"r5ysbb"}],["path",{d:"m10.2 6.3-3.9 3.9",key:"1nzqf6"}],["circle",{cx:"4.5",cy:"12",r:"2.5",key:"jydg6v"}],["path",{d:"M7 12h10",key:"b7w52i"}],["circle",{cx:"19.5",cy:"12",r:"2.5",key:"1piiel"}],["path",{d:"m13.8 17.7 3.9-3.9",key:"1wyg1y"}],["circle",{cx:"12",cy:"19.5",r:"2.5",key:"13o1pw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J9=n("Webcam",[["circle",{cx:"12",cy:"10",r:"8",key:"1gshiw"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 22h10",key:"10w4w3"}],["path",{d:"M12 22v-4",key:"1utk9m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=n("WebhookOff",[["path",{d:"M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15",key:"1tvl6x"}],["path",{d:"M9 3.4a4 4 0 0 1 6.52.66",key:"q04jfq"}],["path",{d:"m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05",key:"azowf0"}],["path",{d:"M20.3 20.3a4 4 0 0 1-2.3.7",key:"5joiws"}],["path",{d:"M18.6 13a4 4 0 0 1 3.357 3.414",key:"cangb8"}],["path",{d:"m12 6 .6 1",key:"tpjl1n"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=n("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=n("Weight",[["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z",key:"56o5sh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=n("WheatOff",[["path",{d:"m2 22 10-10",key:"28ilpk"}],["path",{d:"m16 8-1.17 1.17",key:"1qqm82"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97",key:"4wz8re"}],["path",{d:"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62",key:"rves66"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98",key:"ak46r"}],["path",{d:"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28",key:"1tw520"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=n("Wheat",[["path",{d:"M2 22 16 8",key:"60hf96"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1sdzmb"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"eoatbi"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"2m8kc5"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"vex3ng"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=n("WholeWord",[["circle",{cx:"7",cy:"12",r:"3",key:"12clwm"}],["path",{d:"M10 9v6",key:"17i7lo"}],["circle",{cx:"17",cy:"12",r:"3",key:"gl7c2s"}],["path",{d:"M14 7v8",key:"dl84cr"}],["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",key:"lt2kga"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=n("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=n("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=n("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=n("WineOff",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h3m7 0h-1.343",key:"v48bem"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198",key:"1ymjlu"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=n("Wine",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z",key:"10ffi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=n("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=n("WrapText",[["line",{x1:"3",x2:"21",y1:"6",y2:"6",key:"4m8b97"}],["path",{d:"M3 12h15a3 3 0 1 1 0 6h-4",key:"1cl7v7"}],["polyline",{points:"16 16 14 18 16 20",key:"1jznyi"}],["line",{x1:"3",x2:"10",y1:"18",y2:"18",key:"1h33wv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=n("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=n("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=n("XOctagon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=n("XSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=n("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=n("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=n("ZapOff",[["polyline",{points:"12.41 6.75 13 2 10.57 4.92",key:"122m05"}],["polyline",{points:"18.57 12.91 21 10 15.66 10",key:"16r43o"}],["polyline",{points:"8 8 3 14 12 14 11 22 16 16",key:"tmh4bc"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=n("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=n("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=n("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kH=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:q2,AArrowUp:z2,ALargeSmall:j2,Accessibility:H2,Activity:A2,ActivitySquare:P2,AirVent:U2,Airplay:V2,AlarmClock:T2,AlarmClockCheck:Pt,AlarmClockMinus:At,AlarmClockOff:F2,AlarmClockPlus:Ut,AlarmSmoke:D2,Album:R2,AlertCircle:B2,AlertOctagon:E2,AlertTriangle:N2,AlignCenter:Y2,AlignCenterHorizontal:O2,AlignCenterVertical:Z2,AlignEndHorizontal:W2,AlignEndVertical:_2,AlignHorizontalDistributeCenter:G2,AlignHorizontalDistributeEnd:$2,AlignHorizontalDistributeStart:X2,AlignHorizontalJustifyCenter:Q2,AlignHorizontalJustifyEnd:K2,AlignHorizontalJustifyStart:J2,AlignHorizontalSpaceAround:er,AlignHorizontalSpaceBetween:tr,AlignJustify:ar,AlignLeft:nr,AlignRight:rr,AlignStartHorizontal:or,AlignStartVertical:ir,AlignVerticalDistributeCenter:lr,AlignVerticalDistributeEnd:cr,AlignVerticalDistributeStart:sr,AlignVerticalJustifyCenter:dr,AlignVerticalJustifyEnd:hr,AlignVerticalJustifyStart:ur,AlignVerticalSpaceAround:yr,AlignVerticalSpaceBetween:pr,Ambulance:kr,Ampersand:mr,Ampersands:gr,Anchor:fr,Angry:vr,Annoyed:Mr,Antenna:xr,Anvil:wr,Aperture:Lr,AppWindow:Ir,Apple:Cr,Archive:qr,ArchiveRestore:Sr,ArchiveX:br,AreaChart:zr,Armchair:jr,ArrowBigDown:Pr,ArrowBigDownDash:Hr,ArrowBigLeft:Ur,ArrowBigLeftDash:Ar,ArrowBigRight:Fr,ArrowBigRightDash:Vr,ArrowBigUp:Dr,ArrowBigUpDash:Tr,ArrowDown:ao,ArrowDown01:Rr,ArrowDown10:Br,ArrowDownAZ:Vt,ArrowDownCircle:Er,ArrowDownFromLine:Nr,ArrowDownLeft:Wr,ArrowDownLeftFromCircle:Or,ArrowDownLeftFromSquare:Zr,ArrowDownLeftSquare:Yr,ArrowDownNarrowWide:_r,ArrowDownRight:Qr,ArrowDownRightFromCircle:Gr,ArrowDownRightFromSquare:$r,ArrowDownRightSquare:Xr,ArrowDownSquare:Kr,ArrowDownToDot:Jr,ArrowDownToLine:eo,ArrowDownUp:to,ArrowDownWideNarrow:Ft,ArrowDownZA:Tt,ArrowLeft:co,ArrowLeftCircle:no,ArrowLeftFromLine:ro,ArrowLeftRight:oo,ArrowLeftSquare:io,ArrowLeftToLine:lo,ArrowRight:ko,ArrowRightCircle:so,ArrowRightFromLine:ho,ArrowRightLeft:uo,ArrowRightSquare:yo,ArrowRightToLine:po,ArrowUp:De,ArrowUp01:mo,ArrowUp10:go,ArrowUpAZ:Dt,ArrowUpCircle:fo,ArrowUpDown:vo,ArrowUpFromDot:Mo,ArrowUpFromLine:xo,ArrowUpLeft:Co,ArrowUpLeftFromCircle:wo,ArrowUpLeftFromSquare:Lo,ArrowUpLeftSquare:Io,ArrowUpNarrowWide:Rt,ArrowUpRight:zo,ArrowUpRightFromCircle:So,ArrowUpRightFromSquare:bo,ArrowUpRightSquare:qo,ArrowUpSquare:jo,ArrowUpToLine:Ho,ArrowUpWideNarrow:Po,ArrowUpZA:Bt,ArrowsUpFromLine:Ao,Asterisk:Uo,AsteriskSquare:Et,AtSign:Vo,Atom:Fo,AudioLines:To,AudioWaveform:Do,Award:Ro,Axe:Bo,Axis3d:Nt,Baby:Eo,Backpack:No,Badge:ri,BadgeAlert:Oo,BadgeCent:Zo,BadgeCheck:Ot,BadgeDollarSign:Yo,BadgeEuro:Wo,BadgeHelp:_o,BadgeIndianRupee:Go,BadgeInfo:$o,BadgeJapaneseYen:Xo,BadgeMinus:Qo,BadgePercent:Ko,BadgePlus:Jo,BadgePoundSterling:ei,BadgeRussianRuble:ti,BadgeSwissFranc:ai,BadgeX:ni,BaggageClaim:oi,Ban:ii,Banana:li,Banknote:ci,BarChart:ki,BarChart2:si,BarChart3:di,BarChart4:hi,BarChartBig:ui,BarChartHorizontal:pi,BarChartHorizontalBig:yi,Barcode:mi,Baseline:gi,Bath:fi,Battery:Ii,BatteryCharging:vi,BatteryFull:Mi,BatteryLow:xi,BatteryMedium:wi,BatteryWarning:Li,Beaker:Ci,Bean:bi,BeanOff:Si,Bed:ji,BedDouble:qi,BedSingle:zi,Beef:Hi,Beer:Pi,Bell:sn,BellDot:Ai,BellElectric:Ui,BellMinus:Vi,BellOff:Fi,BellPlus:Ti,BellRing:Di,BetweenHorizontalEnd:Zt,BetweenHorizontalStart:Yt,BetweenVerticalEnd:Ri,BetweenVerticalStart:Bi,Bike:Ei,Binary:Ni,Biohazard:Oi,Bird:Zi,Bitcoin:Yi,Blend:Wi,Blinds:_i,Blocks:Gi,Bluetooth:Ki,BluetoothConnected:$i,BluetoothOff:Xi,BluetoothSearching:Qi,Bold:Ji,Bolt:el,Bomb:tl,Bone:al,Book:Cl,BookA:nl,BookAudio:rl,BookCheck:ol,BookCopy:il,BookDashed:Wt,BookDown:ll,BookHeadphones:cl,BookHeart:sl,BookImage:dl,BookKey:hl,BookLock:ul,BookMarked:yl,BookMinus:pl,BookOpen:gl,BookOpenCheck:kl,BookOpenText:ml,BookPlus:fl,BookText:vl,BookType:Ml,BookUp:wl,BookUp2:xl,BookUser:Ll,BookX:Il,Bookmark:jl,BookmarkCheck:Sl,BookmarkMinus:bl,BookmarkPlus:ql,BookmarkX:zl,BoomBox:Hl,Bot:Al,BotMessageSquare:Pl,Box:Vl,BoxSelect:Ul,Boxes:Fl,Braces:_t,Brackets:Tl,Brain:Bl,BrainCircuit:Dl,BrainCog:Rl,BrickWall:El,Briefcase:Nl,BringToFront:Ol,Brush:Zl,Bug:_l,BugOff:Yl,BugPlay:Wl,Building:$l,Building2:Gl,Bus:dn,BusFront:Xl,Cable:Kl,CableCar:Ql,Cake:ec,CakeSlice:Jl,Calculator:tc,Calendar:gc,CalendarCheck:nc,CalendarCheck2:ac,CalendarClock:rc,CalendarDays:oc,CalendarFold:ic,CalendarHeart:lc,CalendarMinus:sc,CalendarMinus2:cc,CalendarOff:dc,CalendarPlus:uc,CalendarPlus2:hc,CalendarRange:yc,CalendarSearch:pc,CalendarX:mc,CalendarX2:kc,Camera:vc,CameraOff:fc,CandlestickChart:Mc,Candy:Lc,CandyCane:xc,CandyOff:wc,Captions:Gt,CaptionsOff:Ic,Car:hn,CarFront:Cc,CarTaxiFront:Sc,Caravan:bc,Carrot:qc,CaseLower:zc,CaseSensitive:jc,CaseUpper:Hc,CassetteTape:Pc,Cast:Ac,Castle:Uc,Cat:Vc,Cctv:Fc,Check:Nc,CheckCheck:Tc,CheckCircle:Rc,CheckCircle2:Dc,CheckSquare:Ec,CheckSquare2:Bc,ChefHat:Oc,Cherry:Zc,ChevronDown:_c,ChevronDownCircle:Yc,ChevronDownSquare:Wc,ChevronFirst:Gc,ChevronLast:$c,ChevronLeft:Kc,ChevronLeftCircle:Xc,ChevronLeftSquare:Qc,ChevronRight:t0,ChevronRightCircle:Jc,ChevronRightSquare:e0,ChevronUp:r0,ChevronUpCircle:a0,ChevronUpSquare:n0,ChevronsDown:i0,ChevronsDownUp:o0,ChevronsLeft:c0,ChevronsLeftRight:l0,ChevronsRight:d0,ChevronsRightLeft:s0,ChevronsUp:u0,ChevronsUpDown:h0,Chrome:y0,Church:p0,Cigarette:m0,CigaretteOff:k0,Circle:S0,CircleDashed:g0,CircleDollarSign:f0,CircleDot:M0,CircleDotDashed:v0,CircleEllipsis:x0,CircleEqual:w0,CircleFadingPlus:L0,CircleOff:I0,CircleSlash:C0,CircleSlash2:$t,CircleUser:Qt,CircleUserRound:Xt,CircuitBoard:b0,Citrus:q0,Clapperboard:z0,Clipboard:D0,ClipboardCheck:j0,ClipboardCopy:H0,ClipboardList:P0,ClipboardMinus:A0,ClipboardPaste:U0,ClipboardPen:Jt,ClipboardPenLine:Kt,ClipboardPlus:V0,ClipboardType:F0,ClipboardX:T0,Clock:Q0,Clock1:R0,Clock10:B0,Clock11:E0,Clock12:N0,Clock2:O0,Clock3:Z0,Clock4:Y0,Clock5:W0,Clock6:_0,Clock7:G0,Clock8:$0,Clock9:X0,Cloud:hs,CloudCog:K0,CloudDrizzle:J0,CloudFog:es,CloudHail:ts,CloudLightning:as,CloudMoon:rs,CloudMoonRain:ns,CloudOff:os,CloudRain:ls,CloudRainWind:is,CloudSnow:cs,CloudSun:ds,CloudSunRain:ss,Cloudy:us,Clover:ys,Club:ps,Code:ms,Code2:ks,CodeSquare:e1,Codepen:gs,Codesandbox:fs,Coffee:un,Cog:vs,Coins:Ms,Columns2:t1,Columns3:a1,Columns4:xs,Combine:ws,Command:Ls,Compass:Is,Component:Cs,Computer:Ss,ConciergeBell:bs,Cone:qs,Construction:zs,Contact:Hs,Contact2:js,Container:Ps,Contrast:As,Cookie:Us,CookingPot:Vs,Copy:Es,CopyCheck:Fs,CopyMinus:Ts,CopyPlus:Ds,CopySlash:Rs,CopyX:Bs,Copyleft:Ns,Copyright:Os,CornerDownLeft:Zs,CornerDownRight:Ys,CornerLeftDown:Ws,CornerLeftUp:_s,CornerRightDown:Gs,CornerRightUp:$s,CornerUpLeft:Xs,CornerUpRight:Qs,Cpu:Ks,CreativeCommons:Js,CreditCard:ed,Croissant:td,Crop:ad,Cross:nd,Crosshair:rd,Crown:od,Cuboid:id,CupSoda:ld,Currency:cd,Cylinder:sd,Database:ud,DatabaseBackup:dd,DatabaseZap:hd,Delete:yd,Dessert:pd,Diameter:kd,Diamond:md,Dice1:gd,Dice2:fd,Dice3:vd,Dice4:Md,Dice5:xd,Dice6:wd,Dices:Ld,Diff:Id,Disc:qd,Disc2:Cd,Disc3:Sd,DiscAlbum:bd,Divide:Hd,DivideCircle:zd,DivideSquare:jd,Dna:Ad,DnaOff:Pd,Dog:Ud,DollarSign:yn,Donut:Vd,DoorClosed:Fd,DoorOpen:Td,Dot:Dd,DotSquare:n1,Download:Bd,DownloadCloud:Rd,DraftingCompass:Ed,Drama:Nd,Dribbble:Od,Drill:Zd,Droplet:Yd,Droplets:Wd,Drum:_d,Drumstick:Gd,Dumbbell:$d,Ear:Qd,EarOff:Xd,Earth:r1,EarthLock:Kd,Eclipse:Jd,Egg:ah,EggFried:eh,EggOff:th,Equal:rh,EqualNot:nh,EqualSquare:o1,Eraser:oh,Euro:ih,Expand:lh,ExternalLink:ch,Eye:pn,EyeOff:sh,Facebook:dh,Factory:hh,Fan:uh,FastForward:yh,Feather:ph,Fence:kh,FerrisWheel:mh,Figma:gh,File:mu,FileArchive:fh,FileAudio:Mh,FileAudio2:vh,FileAxis3d:i1,FileBadge:wh,FileBadge2:xh,FileBarChart:Ih,FileBarChart2:Lh,FileBox:Ch,FileCheck:bh,FileCheck2:Sh,FileClock:qh,FileCode:jh,FileCode2:zh,FileCog:l1,FileDiff:Hh,FileDigit:Ph,FileDown:Ah,FileHeart:Uh,FileImage:Vh,FileInput:Fh,FileJson:Dh,FileJson2:Th,FileKey:Bh,FileKey2:Rh,FileLineChart:Eh,FileLock:Oh,FileLock2:Nh,FileMinus:Yh,FileMinus2:Zh,FileMusic:Wh,FileOutput:_h,FilePen:s1,FilePenLine:c1,FilePieChart:Gh,FilePlus:Xh,FilePlus2:$h,FileQuestion:Qh,FileScan:Kh,FileSearch:eu,FileSearch2:Jh,FileSliders:tu,FileSpreadsheet:au,FileStack:nu,FileSymlink:ru,FileTerminal:ou,FileText:iu,FileType:cu,FileType2:lu,FileUp:su,FileVideo:hu,FileVideo2:du,FileVolume:yu,FileVolume2:uu,FileWarning:kn,FileX:ku,FileX2:pu,Files:gu,Film:fu,Filter:Mu,FilterX:vu,Fingerprint:xu,FireExtinguisher:wu,Fish:Cu,FishOff:Lu,FishSymbol:Iu,Flag:zu,FlagOff:Su,FlagTriangleLeft:bu,FlagTriangleRight:qu,Flame:Hu,FlameKindling:ju,Flashlight:Au,FlashlightOff:Pu,FlaskConical:Vu,FlaskConicalOff:Uu,FlaskRound:Fu,FlipHorizontal:Du,FlipHorizontal2:Tu,FlipVertical:Bu,FlipVertical2:Ru,Flower:Nu,Flower2:Eu,Focus:Ou,FoldHorizontal:Zu,FoldVertical:Yu,Folder:fy,FolderArchive:Wu,FolderCheck:_u,FolderClock:Gu,FolderClosed:$u,FolderCog:d1,FolderDot:Xu,FolderDown:Qu,FolderGit:Ju,FolderGit2:Ku,FolderHeart:ey,FolderInput:ty,FolderKanban:ay,FolderKey:ny,FolderLock:ry,FolderMinus:oy,FolderOpen:ly,FolderOpenDot:iy,FolderOutput:cy,FolderPen:h1,FolderPlus:sy,FolderRoot:dy,FolderSearch:uy,FolderSearch2:hy,FolderSymlink:yy,FolderSync:py,FolderTree:ky,FolderUp:my,FolderX:gy,Folders:vy,Footprints:My,Forklift:xy,FormInput:wy,Forward:Ly,Frame:Iy,Framer:Cy,Frown:Sy,Fuel:by,Fullscreen:qy,FunctionSquare:zy,GalleryHorizontal:Hy,GalleryHorizontalEnd:jy,GalleryThumbnails:Py,GalleryVertical:Uy,GalleryVerticalEnd:Ay,Gamepad:Fy,Gamepad2:Vy,GanttChart:Ty,GanttChartSquare:Ee,Gauge:Ry,GaugeCircle:Dy,Gavel:By,Gem:Ey,Ghost:Ny,Gift:Oy,GitBranch:Yy,GitBranchPlus:Zy,GitCommitHorizontal:u1,GitCommitVertical:Wy,GitCompare:Gy,GitCompareArrows:_y,GitFork:$y,GitGraph:Xy,GitMerge:Qy,GitPullRequest:np,GitPullRequestArrow:Ky,GitPullRequestClosed:Jy,GitPullRequestCreate:tp,GitPullRequestCreateArrow:ep,GitPullRequestDraft:ap,Github:rp,Gitlab:op,GlassWater:ip,Glasses:lp,Globe:sp,GlobeLock:cp,Goal:dp,Grab:hp,GraduationCap:mn,Grape:up,Grid2x2:y1,Grid3x3:Ne,Grip:kp,GripHorizontal:yp,GripVertical:pp,Group:mp,Guitar:gp,Hammer:fp,Hand:Lp,HandCoins:vp,HandHeart:Mp,HandHelping:p1,HandMetal:xp,HandPlatter:wp,Handshake:Ip,HardDrive:bp,HardDriveDownload:Cp,HardDriveUpload:Sp,HardHat:qp,Hash:zp,Haze:jp,HdmiPort:Hp,Heading:Dp,Heading1:Pp,Heading2:Ap,Heading3:Up,Heading4:Vp,Heading5:Fp,Heading6:Tp,Headphones:Rp,Headset:Bp,Heart:Yp,HeartCrack:Ep,HeartHandshake:Np,HeartOff:Op,HeartPulse:Zp,Heater:Wp,HelpCircle:_p,Hexagon:Gp,Highlighter:$p,History:Xp,Home:gn,Hop:Kp,HopOff:Qp,Hotel:fn,Hourglass:Jp,IceCream:tk,IceCream2:ek,Image:lk,ImageDown:ak,ImageMinus:nk,ImageOff:rk,ImagePlus:ok,ImageUp:ik,Images:ck,Import:sk,Inbox:dk,Indent:hk,IndianRupee:uk,Infinity:yk,Info:pk,InspectionPanel:kk,Instagram:mk,Italic:gk,IterationCcw:fk,IterationCw:vk,JapaneseYen:Mk,Joystick:xk,Kanban:wk,KanbanSquare:m1,KanbanSquareDashed:k1,Key:Ck,KeyRound:Lk,KeySquare:Ik,Keyboard:bk,KeyboardMusic:Sk,Lamp:Ak,LampCeiling:qk,LampDesk:zk,LampFloor:jk,LampWallDown:Hk,LampWallUp:Pk,LandPlot:Uk,Landmark:Vk,Languages:vn,Laptop:Tk,Laptop2:Fk,Lasso:Rk,LassoSelect:Dk,Laugh:Bk,Layers:Ok,Layers2:Ek,Layers3:Nk,LayoutDashboard:Zk,LayoutGrid:Yk,LayoutList:Wk,LayoutPanelLeft:_k,LayoutPanelTop:Gk,LayoutTemplate:$k,Leaf:Xk,LeafyGreen:Qk,Library:e4,LibraryBig:Kk,LibrarySquare:Jk,LifeBuoy:t4,Ligature:a4,Lightbulb:r4,LightbulbOff:n4,LineChart:o4,Link:c4,Link2:l4,Link2Off:i4,Linkedin:s4,List:I4,ListChecks:d4,ListCollapse:h4,ListEnd:u4,ListFilter:y4,ListMinus:p4,ListMusic:k4,ListOrdered:m4,ListPlus:g4,ListRestart:f4,ListStart:v4,ListTodo:M4,ListTree:x4,ListVideo:w4,ListX:L4,Loader:S4,Loader2:C4,Locate:z4,LocateFixed:b4,LocateOff:q4,Lock:H4,LockKeyhole:j4,LogIn:P4,LogOut:A4,Lollipop:U4,Luggage:V4,MSquare:F4,Magnet:T4,Mail:W4,MailCheck:D4,MailMinus:R4,MailOpen:B4,MailPlus:E4,MailQuestion:N4,MailSearch:O4,MailWarning:Z4,MailX:Y4,Mailbox:_4,Mails:G4,Map:K4,MapPin:X4,MapPinOff:$4,MapPinned:Q4,Martini:J4,Maximize:t3,Maximize2:e3,Medal:a3,Megaphone:r3,MegaphoneOff:n3,Meh:o3,MemoryStick:i3,Menu:c3,MenuSquare:l3,Merge:s3,MessageCircle:M3,MessageCircleCode:d3,MessageCircleDashed:h3,MessageCircleHeart:u3,MessageCircleMore:y3,MessageCircleOff:p3,MessageCirclePlus:k3,MessageCircleQuestion:m3,MessageCircleReply:g3,MessageCircleWarning:f3,MessageCircleX:v3,MessageSquare:Mn,MessageSquareCode:x3,MessageSquareDashed:w3,MessageSquareDiff:L3,MessageSquareDot:I3,MessageSquareHeart:C3,MessageSquareMore:S3,MessageSquareOff:b3,MessageSquarePlus:q3,MessageSquareQuote:z3,MessageSquareReply:j3,MessageSquareShare:H3,MessageSquareText:P3,MessageSquareWarning:A3,MessageSquareX:U3,MessagesSquare:V3,Mic:D3,Mic2:F3,MicOff:T3,Microscope:R3,Microwave:B3,Milestone:E3,Milk:O3,MilkOff:N3,Minimize:Y3,Minimize2:Z3,Minus:G3,MinusCircle:W3,MinusSquare:_3,Monitor:i5,MonitorCheck:$3,MonitorDot:X3,MonitorDown:Q3,MonitorOff:K3,MonitorPause:J3,MonitorPlay:e5,MonitorSmartphone:t5,MonitorSpeaker:a5,MonitorStop:n5,MonitorUp:r5,MonitorX:o5,Moon:c5,MoonStar:l5,MoreHorizontal:s5,MoreVertical:d5,Mountain:u5,MountainSnow:h5,Mouse:g5,MousePointer:m5,MousePointer2:y5,MousePointerClick:p5,MousePointerSquare:g1,MousePointerSquareDashed:k5,Move:j5,Move3d:f1,MoveDiagonal:v5,MoveDiagonal2:f5,MoveDown:w5,MoveDownLeft:M5,MoveDownRight:x5,MoveHorizontal:L5,MoveLeft:I5,MoveRight:C5,MoveUp:q5,MoveUpLeft:S5,MoveUpRight:b5,MoveVertical:z5,Music:U5,Music2:H5,Music3:P5,Music4:A5,Navigation:D5,Navigation2:F5,Navigation2Off:V5,NavigationOff:T5,Network:R5,Newspaper:B5,Nfc:E5,Notebook:Y5,NotebookPen:N5,NotebookTabs:O5,NotebookText:Z5,NotepadText:_5,NotepadTextDashed:W5,Nut:$5,NutOff:G5,Octagon:X5,Option:Q5,Orbit:K5,Outdent:J5,Package:lm,Package2:em,PackageCheck:tm,PackageMinus:am,PackageOpen:nm,PackagePlus:rm,PackageSearch:om,PackageX:im,PaintBucket:cm,PaintRoller:sm,Paintbrush:hm,Paintbrush2:dm,Palette:um,Palmtree:ym,PanelBottom:mm,PanelBottomClose:pm,PanelBottomDashed:v1,PanelBottomOpen:km,PanelLeft:L1,PanelLeftClose:M1,PanelLeftDashed:x1,PanelLeftOpen:w1,PanelRight:vm,PanelRightClose:gm,PanelRightDashed:I1,PanelRightOpen:fm,PanelTop:wm,PanelTopClose:Mm,PanelTopDashed:C1,PanelTopOpen:xm,PanelsLeftBottom:Lm,PanelsRightBottom:Im,PanelsTopLeft:S1,Paperclip:Cm,Parentheses:Sm,ParkingCircle:qm,ParkingCircleOff:bm,ParkingMeter:zm,ParkingSquare:Hm,ParkingSquareOff:jm,PartyPopper:Pm,Pause:Vm,PauseCircle:Am,PauseOctagon:Um,PawPrint:Fm,PcCase:Tm,Pen:q1,PenLine:b1,PenTool:Dm,Pencil:Em,PencilLine:Rm,PencilRuler:Bm,Pentagon:Nm,Percent:Wm,PercentCircle:Om,PercentDiamond:Zm,PercentSquare:Ym,PersonStanding:_m,Phone:e6,PhoneCall:Gm,PhoneForwarded:$m,PhoneIncoming:Xm,PhoneMissed:Qm,PhoneOff:Km,PhoneOutgoing:Jm,Pi:a6,PiSquare:t6,Piano:n6,Pickaxe:r6,PictureInPicture:i6,PictureInPicture2:o6,PieChart:l6,PiggyBank:c6,Pilcrow:d6,PilcrowSquare:s6,Pill:h6,Pin:y6,PinOff:u6,Pipette:p6,Pizza:k6,Plane:xn,PlaneLanding:m6,PlaneTakeoff:g6,Play:wn,PlayCircle:f6,PlaySquare:v6,Plug:L6,Plug2:M6,PlugZap:w6,PlugZap2:x6,Plus:S6,PlusCircle:I6,PlusSquare:C6,Pocket:q6,PocketKnife:b6,Podcast:z6,Pointer:H6,PointerOff:j6,Popcorn:P6,Popsicle:A6,PoundSterling:U6,Power:D6,PowerCircle:V6,PowerOff:F6,PowerSquare:T6,Presentation:R6,Printer:B6,Projector:E6,Puzzle:N6,Pyramid:O6,QrCode:Z6,Quote:Y6,Rabbit:W6,Radar:_6,Radiation:G6,Radical:$6,Radio:K6,RadioReceiver:X6,RadioTower:Q6,Radius:J6,RailSymbol:e8,Rainbow:t8,Rat:a8,Ratio:n8,Receipt:u8,ReceiptCent:r8,ReceiptEuro:o8,ReceiptIndianRupee:i8,ReceiptJapaneseYen:l8,ReceiptPoundSterling:c8,ReceiptRussianRuble:s8,ReceiptSwissFranc:d8,ReceiptText:h8,RectangleHorizontal:y8,RectangleVertical:p8,Recycle:k8,Redo:f8,Redo2:m8,RedoDot:g8,RefreshCcw:M8,RefreshCcwDot:v8,RefreshCw:w8,RefreshCwOff:x8,Refrigerator:L8,Regex:I8,RemoveFormatting:C8,Repeat:q8,Repeat1:S8,Repeat2:b8,Replace:j8,ReplaceAll:z8,Reply:P8,ReplyAll:H8,Rewind:A8,Ribbon:U8,Rocket:V8,RockingChair:F8,RollerCoaster:T8,Rotate3d:z1,RotateCcw:D8,RotateCw:R8,Route:E8,RouteOff:B8,Router:N8,Rows2:j1,Rows3:H1,Rows4:O8,Rss:Z8,Ruler:Y8,RussianRuble:W8,Sailboat:_8,Salad:G8,Sandwich:$8,Satellite:Q8,SatelliteDish:X8,Save:J8,SaveAll:K8,Scale:eg,Scale3d:P1,Scaling:tg,Scan:cg,ScanBarcode:ag,ScanEye:ng,ScanFace:rg,ScanLine:og,ScanSearch:ig,ScanText:lg,ScatterChart:sg,School:hg,School2:dg,Scissors:kg,ScissorsLineDashed:ug,ScissorsSquare:pg,ScissorsSquareDashedBottom:yg,ScreenShare:gg,ScreenShareOff:mg,Scroll:vg,ScrollText:fg,Search:Ig,SearchCheck:Mg,SearchCode:xg,SearchSlash:wg,SearchX:Lg,Send:Sg,SendHorizontal:A1,SendToBack:Cg,SeparatorHorizontal:bg,SeparatorVertical:qg,Server:Pg,ServerCog:zg,ServerCrash:jg,ServerOff:Hg,Settings:Ug,Settings2:Ag,Shapes:Vg,Share:Tg,Share2:Fg,Sheet:Dg,Shell:Rg,Shield:Ln,ShieldAlert:Bg,ShieldBan:Eg,ShieldCheck:Ng,ShieldEllipsis:Og,ShieldHalf:Zg,ShieldMinus:Yg,ShieldOff:Wg,ShieldPlus:_g,ShieldQuestion:Gg,ShieldX:U1,Ship:Xg,ShipWheel:$g,Shirt:Qg,ShoppingBag:In,ShoppingBasket:Kg,ShoppingCart:Jg,Shovel:ef,ShowerHead:tf,Shrink:af,Shrub:nf,Shuffle:rf,Sigma:lf,SigmaSquare:of,Signal:uf,SignalHigh:cf,SignalLow:sf,SignalMedium:df,SignalZero:hf,Signpost:pf,SignpostBig:yf,Siren:kf,SkipBack:mf,SkipForward:gf,Skull:ff,Slack:vf,Slash:Mf,SlashSquare:V1,Slice:xf,Sliders:Lf,SlidersHorizontal:wf,Smartphone:Sf,SmartphoneCharging:If,SmartphoneNfc:Cf,Smile:qf,SmilePlus:bf,Snail:zf,Snowflake:jf,Sofa:Hf,Soup:Pf,Space:Af,Spade:Uf,Sparkle:Vf,Sparkles:F1,Speaker:Ff,Speech:Tf,SpellCheck:Rf,SpellCheck2:Df,Spline:Bf,Split:Of,SplitSquareHorizontal:Ef,SplitSquareVertical:Nf,SprayCan:Zf,Sprout:Yf,Square:Xf,SquareDashedBottom:_f,SquareDashedBottomCode:Wf,SquarePen:ve,SquareRadical:Gf,SquareStack:$f,SquareUser:D1,SquareUserRound:T1,Squircle:Qf,Squirrel:Kf,Stamp:Jf,Star:a7,StarHalf:e7,StarOff:t7,StepBack:n7,StepForward:r7,Stethoscope:Cn,Sticker:o7,StickyNote:i7,StopCircle:l7,Store:c7,StretchHorizontal:s7,StretchVertical:d7,Strikethrough:h7,Subscript:u7,Sun:g7,SunDim:y7,SunMedium:p7,SunMoon:k7,SunSnow:m7,Sunrise:f7,Sunset:v7,Superscript:M7,SwatchBook:x7,SwissFranc:w7,SwitchCamera:L7,Sword:I7,Swords:C7,Syringe:S7,Table:A7,Table2:b7,TableCellsMerge:q7,TableCellsSplit:z7,TableColumnsSplit:j7,TableProperties:H7,TableRowsSplit:P7,Tablet:V7,TabletSmartphone:U7,Tablets:F7,Tag:T7,Tags:D7,Tally1:R7,Tally2:B7,Tally3:E7,Tally4:N7,Tally5:O7,Tangent:Z7,Target:Y7,Telescope:W7,Tent:G7,TentTree:_7,Terminal:X7,TerminalSquare:$7,TestTube:K7,TestTube2:Q7,TestTubes:J7,Text:rv,TextCursor:tv,TextCursorInput:ev,TextQuote:av,TextSearch:nv,TextSelect:R1,Theater:ov,Thermometer:cv,ThermometerSnowflake:iv,ThermometerSun:lv,ThumbsDown:sv,ThumbsUp:dv,Ticket:gv,TicketCheck:hv,TicketMinus:uv,TicketPercent:yv,TicketPlus:pv,TicketSlash:kv,TicketX:mv,Timer:Mv,TimerOff:fv,TimerReset:vv,ToggleLeft:xv,ToggleRight:wv,Tornado:Lv,Torus:Iv,Touchpad:Sv,TouchpadOff:Cv,TowerControl:bv,ToyBrick:qv,Tractor:zv,TrafficCone:jv,TrainFront:Pv,TrainFrontTunnel:Hv,TrainTrack:Av,TramFront:B1,Trash:Vv,Trash2:Uv,TreeDeciduous:Fv,TreePine:Tv,Trees:Dv,Trello:Rv,TrendingDown:Bv,TrendingUp:Ev,Triangle:Ov,TriangleRight:Nv,Trophy:Zv,Truck:Yv,Turtle:Wv,Tv:Gv,Tv2:_v,Twitch:$v,Twitter:Xv,Type:Qv,Umbrella:Jv,UmbrellaOff:Kv,Underline:e9,Undo:n9,Undo2:t9,UndoDot:a9,UnfoldHorizontal:r9,UnfoldVertical:o9,Ungroup:i9,Unlink:c9,Unlink2:l9,Unlock:d9,UnlockKeyhole:s9,Unplug:h9,Upload:y9,UploadCloud:u9,Usb:p9,User:w9,UserCheck:k9,UserCog:m9,UserMinus:g9,UserPlus:f9,UserRound:W1,UserRoundCheck:E1,UserRoundCog:N1,UserRoundMinus:O1,UserRoundPlus:Z1,UserRoundSearch:v9,UserRoundX:Y1,UserSearch:M9,UserX:x9,Users:L9,UsersRound:_1,Utensils:I9,UtensilsCrossed:ba,UtilityPole:C9,Variable:S9,Vault:b9,Vegan:q9,VenetianMask:z9,Vibrate:H9,VibrateOff:j9,Video:A9,VideoOff:P9,Videotape:U9,View:V9,Voicemail:F9,Volume:B9,Volume1:T9,Volume2:D9,VolumeX:R9,Vote:E9,Wallet:Z9,Wallet2:N9,WalletCards:O9,Wallpaper:Y9,Wand:_9,Wand2:W9,Warehouse:G9,WashingMachine:$9,Watch:X9,Waves:Q9,Waypoints:K9,Webcam:J9,Webhook:tM,WebhookOff:eM,Weight:aM,Wheat:rM,WheatOff:nM,WholeWord:oM,Wifi:lM,WifiOff:iM,Wind:cM,Wine:dM,WineOff:sM,Workflow:hM,WrapText:uM,Wrench:yM,X:gM,XCircle:pM,XOctagon:kM,XSquare:mM,Youtube:fM,Zap:MM,ZapOff:vM,ZoomIn:xM,ZoomOut:wM},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mH=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:q2,AArrowDownIcon:q2,AArrowUp:z2,AArrowUpIcon:z2,ALargeSmall:j2,ALargeSmallIcon:j2,Accessibility:H2,AccessibilityIcon:H2,Activity:A2,ActivityIcon:A2,ActivitySquare:P2,ActivitySquareIcon:P2,AirVent:U2,AirVentIcon:U2,Airplay:V2,AirplayIcon:V2,AlarmCheck:Pt,AlarmCheckIcon:Pt,AlarmClock:T2,AlarmClockCheck:Pt,AlarmClockCheckIcon:Pt,AlarmClockIcon:T2,AlarmClockMinus:At,AlarmClockMinusIcon:At,AlarmClockOff:F2,AlarmClockOffIcon:F2,AlarmClockPlus:Ut,AlarmClockPlusIcon:Ut,AlarmMinus:At,AlarmMinusIcon:At,AlarmPlus:Ut,AlarmPlusIcon:Ut,AlarmSmoke:D2,AlarmSmokeIcon:D2,Album:R2,AlbumIcon:R2,AlertCircle:B2,AlertCircleIcon:B2,AlertOctagon:E2,AlertOctagonIcon:E2,AlertTriangle:N2,AlertTriangleIcon:N2,AlignCenter:Y2,AlignCenterHorizontal:O2,AlignCenterHorizontalIcon:O2,AlignCenterIcon:Y2,AlignCenterVertical:Z2,AlignCenterVerticalIcon:Z2,AlignEndHorizontal:W2,AlignEndHorizontalIcon:W2,AlignEndVertical:_2,AlignEndVerticalIcon:_2,AlignHorizontalDistributeCenter:G2,AlignHorizontalDistributeCenterIcon:G2,AlignHorizontalDistributeEnd:$2,AlignHorizontalDistributeEndIcon:$2,AlignHorizontalDistributeStart:X2,AlignHorizontalDistributeStartIcon:X2,AlignHorizontalJustifyCenter:Q2,AlignHorizontalJustifyCenterIcon:Q2,AlignHorizontalJustifyEnd:K2,AlignHorizontalJustifyEndIcon:K2,AlignHorizontalJustifyStart:J2,AlignHorizontalJustifyStartIcon:J2,AlignHorizontalSpaceAround:er,AlignHorizontalSpaceAroundIcon:er,AlignHorizontalSpaceBetween:tr,AlignHorizontalSpaceBetweenIcon:tr,AlignJustify:ar,AlignJustifyIcon:ar,AlignLeft:nr,AlignLeftIcon:nr,AlignRight:rr,AlignRightIcon:rr,AlignStartHorizontal:or,AlignStartHorizontalIcon:or,AlignStartVertical:ir,AlignStartVerticalIcon:ir,AlignVerticalDistributeCenter:lr,AlignVerticalDistributeCenterIcon:lr,AlignVerticalDistributeEnd:cr,AlignVerticalDistributeEndIcon:cr,AlignVerticalDistributeStart:sr,AlignVerticalDistributeStartIcon:sr,AlignVerticalJustifyCenter:dr,AlignVerticalJustifyCenterIcon:dr,AlignVerticalJustifyEnd:hr,AlignVerticalJustifyEndIcon:hr,AlignVerticalJustifyStart:ur,AlignVerticalJustifyStartIcon:ur,AlignVerticalSpaceAround:yr,AlignVerticalSpaceAroundIcon:yr,AlignVerticalSpaceBetween:pr,AlignVerticalSpaceBetweenIcon:pr,Ambulance:kr,AmbulanceIcon:kr,Ampersand:mr,AmpersandIcon:mr,Ampersands:gr,AmpersandsIcon:gr,Anchor:fr,AnchorIcon:fr,Angry:vr,AngryIcon:vr,Annoyed:Mr,AnnoyedIcon:Mr,Antenna:xr,AntennaIcon:xr,Anvil:wr,AnvilIcon:wr,Aperture:Lr,ApertureIcon:Lr,AppWindow:Ir,AppWindowIcon:Ir,Apple:Cr,AppleIcon:Cr,Archive:qr,ArchiveIcon:qr,ArchiveRestore:Sr,ArchiveRestoreIcon:Sr,ArchiveX:br,ArchiveXIcon:br,AreaChart:zr,AreaChartIcon:zr,Armchair:jr,ArmchairIcon:jr,ArrowBigDown:Pr,ArrowBigDownDash:Hr,ArrowBigDownDashIcon:Hr,ArrowBigDownIcon:Pr,ArrowBigLeft:Ur,ArrowBigLeftDash:Ar,ArrowBigLeftDashIcon:Ar,ArrowBigLeftIcon:Ur,ArrowBigRight:Fr,ArrowBigRightDash:Vr,ArrowBigRightDashIcon:Vr,ArrowBigRightIcon:Fr,ArrowBigUp:Dr,ArrowBigUpDash:Tr,ArrowBigUpDashIcon:Tr,ArrowBigUpIcon:Dr,ArrowDown:ao,ArrowDown01:Rr,ArrowDown01Icon:Rr,ArrowDown10:Br,ArrowDown10Icon:Br,ArrowDownAZ:Vt,ArrowDownAZIcon:Vt,ArrowDownAz:Vt,ArrowDownAzIcon:Vt,ArrowDownCircle:Er,ArrowDownCircleIcon:Er,ArrowDownFromLine:Nr,ArrowDownFromLineIcon:Nr,ArrowDownIcon:ao,ArrowDownLeft:Wr,ArrowDownLeftFromCircle:Or,ArrowDownLeftFromCircleIcon:Or,ArrowDownLeftFromSquare:Zr,ArrowDownLeftFromSquareIcon:Zr,ArrowDownLeftIcon:Wr,ArrowDownLeftSquare:Yr,ArrowDownLeftSquareIcon:Yr,ArrowDownNarrowWide:_r,ArrowDownNarrowWideIcon:_r,ArrowDownRight:Qr,ArrowDownRightFromCircle:Gr,ArrowDownRightFromCircleIcon:Gr,ArrowDownRightFromSquare:$r,ArrowDownRightFromSquareIcon:$r,ArrowDownRightIcon:Qr,ArrowDownRightSquare:Xr,ArrowDownRightSquareIcon:Xr,ArrowDownSquare:Kr,ArrowDownSquareIcon:Kr,ArrowDownToDot:Jr,ArrowDownToDotIcon:Jr,ArrowDownToLine:eo,ArrowDownToLineIcon:eo,ArrowDownUp:to,ArrowDownUpIcon:to,ArrowDownWideNarrow:Ft,ArrowDownWideNarrowIcon:Ft,ArrowDownZA:Tt,ArrowDownZAIcon:Tt,ArrowDownZa:Tt,ArrowDownZaIcon:Tt,ArrowLeft:co,ArrowLeftCircle:no,ArrowLeftCircleIcon:no,ArrowLeftFromLine:ro,ArrowLeftFromLineIcon:ro,ArrowLeftIcon:co,ArrowLeftRight:oo,ArrowLeftRightIcon:oo,ArrowLeftSquare:io,ArrowLeftSquareIcon:io,ArrowLeftToLine:lo,ArrowLeftToLineIcon:lo,ArrowRight:ko,ArrowRightCircle:so,ArrowRightCircleIcon:so,ArrowRightFromLine:ho,ArrowRightFromLineIcon:ho,ArrowRightIcon:ko,ArrowRightLeft:uo,ArrowRightLeftIcon:uo,ArrowRightSquare:yo,ArrowRightSquareIcon:yo,ArrowRightToLine:po,ArrowRightToLineIcon:po,ArrowUp:De,ArrowUp01:mo,ArrowUp01Icon:mo,ArrowUp10:go,ArrowUp10Icon:go,ArrowUpAZ:Dt,ArrowUpAZIcon:Dt,ArrowUpAz:Dt,ArrowUpAzIcon:Dt,ArrowUpCircle:fo,ArrowUpCircleIcon:fo,ArrowUpDown:vo,ArrowUpDownIcon:vo,ArrowUpFromDot:Mo,ArrowUpFromDotIcon:Mo,ArrowUpFromLine:xo,ArrowUpFromLineIcon:xo,ArrowUpIcon:De,ArrowUpLeft:Co,ArrowUpLeftFromCircle:wo,ArrowUpLeftFromCircleIcon:wo,ArrowUpLeftFromSquare:Lo,ArrowUpLeftFromSquareIcon:Lo,ArrowUpLeftIcon:Co,ArrowUpLeftSquare:Io,ArrowUpLeftSquareIcon:Io,ArrowUpNarrowWide:Rt,ArrowUpNarrowWideIcon:Rt,ArrowUpRight:zo,ArrowUpRightFromCircle:So,ArrowUpRightFromCircleIcon:So,ArrowUpRightFromSquare:bo,ArrowUpRightFromSquareIcon:bo,ArrowUpRightIcon:zo,ArrowUpRightSquare:qo,ArrowUpRightSquareIcon:qo,ArrowUpSquare:jo,ArrowUpSquareIcon:jo,ArrowUpToLine:Ho,ArrowUpToLineIcon:Ho,ArrowUpWideNarrow:Po,ArrowUpWideNarrowIcon:Po,ArrowUpZA:Bt,ArrowUpZAIcon:Bt,ArrowUpZa:Bt,ArrowUpZaIcon:Bt,ArrowsUpFromLine:Ao,ArrowsUpFromLineIcon:Ao,Asterisk:Uo,AsteriskIcon:Uo,AsteriskSquare:Et,AsteriskSquareIcon:Et,AtSign:Vo,AtSignIcon:Vo,Atom:Fo,AtomIcon:Fo,AudioLines:To,AudioLinesIcon:To,AudioWaveform:Do,AudioWaveformIcon:Do,Award:Ro,AwardIcon:Ro,Axe:Bo,AxeIcon:Bo,Axis3D:Nt,Axis3DIcon:Nt,Axis3d:Nt,Axis3dIcon:Nt,Baby:Eo,BabyIcon:Eo,Backpack:No,BackpackIcon:No,Badge:ri,BadgeAlert:Oo,BadgeAlertIcon:Oo,BadgeCent:Zo,BadgeCentIcon:Zo,BadgeCheck:Ot,BadgeCheckIcon:Ot,BadgeDollarSign:Yo,BadgeDollarSignIcon:Yo,BadgeEuro:Wo,BadgeEuroIcon:Wo,BadgeHelp:_o,BadgeHelpIcon:_o,BadgeIcon:ri,BadgeIndianRupee:Go,BadgeIndianRupeeIcon:Go,BadgeInfo:$o,BadgeInfoIcon:$o,BadgeJapaneseYen:Xo,BadgeJapaneseYenIcon:Xo,BadgeMinus:Qo,BadgeMinusIcon:Qo,BadgePercent:Ko,BadgePercentIcon:Ko,BadgePlus:Jo,BadgePlusIcon:Jo,BadgePoundSterling:ei,BadgePoundSterlingIcon:ei,BadgeRussianRuble:ti,BadgeRussianRubleIcon:ti,BadgeSwissFranc:ai,BadgeSwissFrancIcon:ai,BadgeX:ni,BadgeXIcon:ni,BaggageClaim:oi,BaggageClaimIcon:oi,Ban:ii,BanIcon:ii,Banana:li,BananaIcon:li,Banknote:ci,BanknoteIcon:ci,BarChart:ki,BarChart2:si,BarChart2Icon:si,BarChart3:di,BarChart3Icon:di,BarChart4:hi,BarChart4Icon:hi,BarChartBig:ui,BarChartBigIcon:ui,BarChartHorizontal:pi,BarChartHorizontalBig:yi,BarChartHorizontalBigIcon:yi,BarChartHorizontalIcon:pi,BarChartIcon:ki,Barcode:mi,BarcodeIcon:mi,Baseline:gi,BaselineIcon:gi,Bath:fi,BathIcon:fi,Battery:Ii,BatteryCharging:vi,BatteryChargingIcon:vi,BatteryFull:Mi,BatteryFullIcon:Mi,BatteryIcon:Ii,BatteryLow:xi,BatteryLowIcon:xi,BatteryMedium:wi,BatteryMediumIcon:wi,BatteryWarning:Li,BatteryWarningIcon:Li,Beaker:Ci,BeakerIcon:Ci,Bean:bi,BeanIcon:bi,BeanOff:Si,BeanOffIcon:Si,Bed:ji,BedDouble:qi,BedDoubleIcon:qi,BedIcon:ji,BedSingle:zi,BedSingleIcon:zi,Beef:Hi,BeefIcon:Hi,Beer:Pi,BeerIcon:Pi,Bell:sn,BellDot:Ai,BellDotIcon:Ai,BellElectric:Ui,BellElectricIcon:Ui,BellIcon:sn,BellMinus:Vi,BellMinusIcon:Vi,BellOff:Fi,BellOffIcon:Fi,BellPlus:Ti,BellPlusIcon:Ti,BellRing:Di,BellRingIcon:Di,BetweenHorizonalEnd:Zt,BetweenHorizonalEndIcon:Zt,BetweenHorizonalStart:Yt,BetweenHorizonalStartIcon:Yt,BetweenHorizontalEnd:Zt,BetweenHorizontalEndIcon:Zt,BetweenHorizontalStart:Yt,BetweenHorizontalStartIcon:Yt,BetweenVerticalEnd:Ri,BetweenVerticalEndIcon:Ri,BetweenVerticalStart:Bi,BetweenVerticalStartIcon:Bi,Bike:Ei,BikeIcon:Ei,Binary:Ni,BinaryIcon:Ni,Biohazard:Oi,BiohazardIcon:Oi,Bird:Zi,BirdIcon:Zi,Bitcoin:Yi,BitcoinIcon:Yi,Blend:Wi,BlendIcon:Wi,Blinds:_i,BlindsIcon:_i,Blocks:Gi,BlocksIcon:Gi,Bluetooth:Ki,BluetoothConnected:$i,BluetoothConnectedIcon:$i,BluetoothIcon:Ki,BluetoothOff:Xi,BluetoothOffIcon:Xi,BluetoothSearching:Qi,BluetoothSearchingIcon:Qi,Bold:Ji,BoldIcon:Ji,Bolt:el,BoltIcon:el,Bomb:tl,BombIcon:tl,Bone:al,BoneIcon:al,Book:Cl,BookA:nl,BookAIcon:nl,BookAudio:rl,BookAudioIcon:rl,BookCheck:ol,BookCheckIcon:ol,BookCopy:il,BookCopyIcon:il,BookDashed:Wt,BookDashedIcon:Wt,BookDown:ll,BookDownIcon:ll,BookHeadphones:cl,BookHeadphonesIcon:cl,BookHeart:sl,BookHeartIcon:sl,BookIcon:Cl,BookImage:dl,BookImageIcon:dl,BookKey:hl,BookKeyIcon:hl,BookLock:ul,BookLockIcon:ul,BookMarked:yl,BookMarkedIcon:yl,BookMinus:pl,BookMinusIcon:pl,BookOpen:gl,BookOpenCheck:kl,BookOpenCheckIcon:kl,BookOpenIcon:gl,BookOpenText:ml,BookOpenTextIcon:ml,BookPlus:fl,BookPlusIcon:fl,BookTemplate:Wt,BookTemplateIcon:Wt,BookText:vl,BookTextIcon:vl,BookType:Ml,BookTypeIcon:Ml,BookUp:wl,BookUp2:xl,BookUp2Icon:xl,BookUpIcon:wl,BookUser:Ll,BookUserIcon:Ll,BookX:Il,BookXIcon:Il,Bookmark:jl,BookmarkCheck:Sl,BookmarkCheckIcon:Sl,BookmarkIcon:jl,BookmarkMinus:bl,BookmarkMinusIcon:bl,BookmarkPlus:ql,BookmarkPlusIcon:ql,BookmarkX:zl,BookmarkXIcon:zl,BoomBox:Hl,BoomBoxIcon:Hl,Bot:Al,BotIcon:Al,BotMessageSquare:Pl,BotMessageSquareIcon:Pl,Box:Vl,BoxIcon:Vl,BoxSelect:Ul,BoxSelectIcon:Ul,Boxes:Fl,BoxesIcon:Fl,Braces:_t,BracesIcon:_t,Brackets:Tl,BracketsIcon:Tl,Brain:Bl,BrainCircuit:Dl,BrainCircuitIcon:Dl,BrainCog:Rl,BrainCogIcon:Rl,BrainIcon:Bl,BrickWall:El,BrickWallIcon:El,Briefcase:Nl,BriefcaseIcon:Nl,BringToFront:Ol,BringToFrontIcon:Ol,Brush:Zl,BrushIcon:Zl,Bug:_l,BugIcon:_l,BugOff:Yl,BugOffIcon:Yl,BugPlay:Wl,BugPlayIcon:Wl,Building:$l,Building2:Gl,Building2Icon:Gl,BuildingIcon:$l,Bus:dn,BusFront:Xl,BusFrontIcon:Xl,BusIcon:dn,Cable:Kl,CableCar:Ql,CableCarIcon:Ql,CableIcon:Kl,Cake:ec,CakeIcon:ec,CakeSlice:Jl,CakeSliceIcon:Jl,Calculator:tc,CalculatorIcon:tc,Calendar:gc,CalendarCheck:nc,CalendarCheck2:ac,CalendarCheck2Icon:ac,CalendarCheckIcon:nc,CalendarClock:rc,CalendarClockIcon:rc,CalendarDays:oc,CalendarDaysIcon:oc,CalendarFold:ic,CalendarFoldIcon:ic,CalendarHeart:lc,CalendarHeartIcon:lc,CalendarIcon:gc,CalendarMinus:sc,CalendarMinus2:cc,CalendarMinus2Icon:cc,CalendarMinusIcon:sc,CalendarOff:dc,CalendarOffIcon:dc,CalendarPlus:uc,CalendarPlus2:hc,CalendarPlus2Icon:hc,CalendarPlusIcon:uc,CalendarRange:yc,CalendarRangeIcon:yc,CalendarSearch:pc,CalendarSearchIcon:pc,CalendarX:mc,CalendarX2:kc,CalendarX2Icon:kc,CalendarXIcon:mc,Camera:vc,CameraIcon:vc,CameraOff:fc,CameraOffIcon:fc,CandlestickChart:Mc,CandlestickChartIcon:Mc,Candy:Lc,CandyCane:xc,CandyCaneIcon:xc,CandyIcon:Lc,CandyOff:wc,CandyOffIcon:wc,Captions:Gt,CaptionsIcon:Gt,CaptionsOff:Ic,CaptionsOffIcon:Ic,Car:hn,CarFront:Cc,CarFrontIcon:Cc,CarIcon:hn,CarTaxiFront:Sc,CarTaxiFrontIcon:Sc,Caravan:bc,CaravanIcon:bc,Carrot:qc,CarrotIcon:qc,CaseLower:zc,CaseLowerIcon:zc,CaseSensitive:jc,CaseSensitiveIcon:jc,CaseUpper:Hc,CaseUpperIcon:Hc,CassetteTape:Pc,CassetteTapeIcon:Pc,Cast:Ac,CastIcon:Ac,Castle:Uc,CastleIcon:Uc,Cat:Vc,CatIcon:Vc,Cctv:Fc,CctvIcon:Fc,Check:Nc,CheckCheck:Tc,CheckCheckIcon:Tc,CheckCircle:Rc,CheckCircle2:Dc,CheckCircle2Icon:Dc,CheckCircleIcon:Rc,CheckIcon:Nc,CheckSquare:Ec,CheckSquare2:Bc,CheckSquare2Icon:Bc,CheckSquareIcon:Ec,ChefHat:Oc,ChefHatIcon:Oc,Cherry:Zc,CherryIcon:Zc,ChevronDown:_c,ChevronDownCircle:Yc,ChevronDownCircleIcon:Yc,ChevronDownIcon:_c,ChevronDownSquare:Wc,ChevronDownSquareIcon:Wc,ChevronFirst:Gc,ChevronFirstIcon:Gc,ChevronLast:$c,ChevronLastIcon:$c,ChevronLeft:Kc,ChevronLeftCircle:Xc,ChevronLeftCircleIcon:Xc,ChevronLeftIcon:Kc,ChevronLeftSquare:Qc,ChevronLeftSquareIcon:Qc,ChevronRight:t0,ChevronRightCircle:Jc,ChevronRightCircleIcon:Jc,ChevronRightIcon:t0,ChevronRightSquare:e0,ChevronRightSquareIcon:e0,ChevronUp:r0,ChevronUpCircle:a0,ChevronUpCircleIcon:a0,ChevronUpIcon:r0,ChevronUpSquare:n0,ChevronUpSquareIcon:n0,ChevronsDown:i0,ChevronsDownIcon:i0,ChevronsDownUp:o0,ChevronsDownUpIcon:o0,ChevronsLeft:c0,ChevronsLeftIcon:c0,ChevronsLeftRight:l0,ChevronsLeftRightIcon:l0,ChevronsRight:d0,ChevronsRightIcon:d0,ChevronsRightLeft:s0,ChevronsRightLeftIcon:s0,ChevronsUp:u0,ChevronsUpDown:h0,ChevronsUpDownIcon:h0,ChevronsUpIcon:u0,Chrome:y0,ChromeIcon:y0,Church:p0,ChurchIcon:p0,Cigarette:m0,CigaretteIcon:m0,CigaretteOff:k0,CigaretteOffIcon:k0,Circle:S0,CircleDashed:g0,CircleDashedIcon:g0,CircleDollarSign:f0,CircleDollarSignIcon:f0,CircleDot:M0,CircleDotDashed:v0,CircleDotDashedIcon:v0,CircleDotIcon:M0,CircleEllipsis:x0,CircleEllipsisIcon:x0,CircleEqual:w0,CircleEqualIcon:w0,CircleFadingPlus:L0,CircleFadingPlusIcon:L0,CircleIcon:S0,CircleOff:I0,CircleOffIcon:I0,CircleSlash:C0,CircleSlash2:$t,CircleSlash2Icon:$t,CircleSlashIcon:C0,CircleSlashed:$t,CircleSlashedIcon:$t,CircleUser:Qt,CircleUserIcon:Qt,CircleUserRound:Xt,CircleUserRoundIcon:Xt,CircuitBoard:b0,CircuitBoardIcon:b0,Citrus:q0,CitrusIcon:q0,Clapperboard:z0,ClapperboardIcon:z0,Clipboard:D0,ClipboardCheck:j0,ClipboardCheckIcon:j0,ClipboardCopy:H0,ClipboardCopyIcon:H0,ClipboardEdit:Jt,ClipboardEditIcon:Jt,ClipboardIcon:D0,ClipboardList:P0,ClipboardListIcon:P0,ClipboardMinus:A0,ClipboardMinusIcon:A0,ClipboardPaste:U0,ClipboardPasteIcon:U0,ClipboardPen:Jt,ClipboardPenIcon:Jt,ClipboardPenLine:Kt,ClipboardPenLineIcon:Kt,ClipboardPlus:V0,ClipboardPlusIcon:V0,ClipboardSignature:Kt,ClipboardSignatureIcon:Kt,ClipboardType:F0,ClipboardTypeIcon:F0,ClipboardX:T0,ClipboardXIcon:T0,Clock:Q0,Clock1:R0,Clock10:B0,Clock10Icon:B0,Clock11:E0,Clock11Icon:E0,Clock12:N0,Clock12Icon:N0,Clock1Icon:R0,Clock2:O0,Clock2Icon:O0,Clock3:Z0,Clock3Icon:Z0,Clock4:Y0,Clock4Icon:Y0,Clock5:W0,Clock5Icon:W0,Clock6:_0,Clock6Icon:_0,Clock7:G0,Clock7Icon:G0,Clock8:$0,Clock8Icon:$0,Clock9:X0,Clock9Icon:X0,ClockIcon:Q0,Cloud:hs,CloudCog:K0,CloudCogIcon:K0,CloudDrizzle:J0,CloudDrizzleIcon:J0,CloudFog:es,CloudFogIcon:es,CloudHail:ts,CloudHailIcon:ts,CloudIcon:hs,CloudLightning:as,CloudLightningIcon:as,CloudMoon:rs,CloudMoonIcon:rs,CloudMoonRain:ns,CloudMoonRainIcon:ns,CloudOff:os,CloudOffIcon:os,CloudRain:ls,CloudRainIcon:ls,CloudRainWind:is,CloudRainWindIcon:is,CloudSnow:cs,CloudSnowIcon:cs,CloudSun:ds,CloudSunIcon:ds,CloudSunRain:ss,CloudSunRainIcon:ss,Cloudy:us,CloudyIcon:us,Clover:ys,CloverIcon:ys,Club:ps,ClubIcon:ps,Code:ms,Code2:ks,Code2Icon:ks,CodeIcon:ms,CodeSquare:e1,CodeSquareIcon:e1,Codepen:gs,CodepenIcon:gs,Codesandbox:fs,CodesandboxIcon:fs,Coffee:un,CoffeeIcon:un,Cog:vs,CogIcon:vs,Coins:Ms,CoinsIcon:Ms,Columns:t1,Columns2:t1,Columns2Icon:t1,Columns3:a1,Columns3Icon:a1,Columns4:xs,Columns4Icon:xs,ColumnsIcon:t1,Combine:ws,CombineIcon:ws,Command:Ls,CommandIcon:Ls,Compass:Is,CompassIcon:Is,Component:Cs,ComponentIcon:Cs,Computer:Ss,ComputerIcon:Ss,ConciergeBell:bs,ConciergeBellIcon:bs,Cone:qs,ConeIcon:qs,Construction:zs,ConstructionIcon:zs,Contact:Hs,Contact2:js,Contact2Icon:js,ContactIcon:Hs,Container:Ps,ContainerIcon:Ps,Contrast:As,ContrastIcon:As,Cookie:Us,CookieIcon:Us,CookingPot:Vs,CookingPotIcon:Vs,Copy:Es,CopyCheck:Fs,CopyCheckIcon:Fs,CopyIcon:Es,CopyMinus:Ts,CopyMinusIcon:Ts,CopyPlus:Ds,CopyPlusIcon:Ds,CopySlash:Rs,CopySlashIcon:Rs,CopyX:Bs,CopyXIcon:Bs,Copyleft:Ns,CopyleftIcon:Ns,Copyright:Os,CopyrightIcon:Os,CornerDownLeft:Zs,CornerDownLeftIcon:Zs,CornerDownRight:Ys,CornerDownRightIcon:Ys,CornerLeftDown:Ws,CornerLeftDownIcon:Ws,CornerLeftUp:_s,CornerLeftUpIcon:_s,CornerRightDown:Gs,CornerRightDownIcon:Gs,CornerRightUp:$s,CornerRightUpIcon:$s,CornerUpLeft:Xs,CornerUpLeftIcon:Xs,CornerUpRight:Qs,CornerUpRightIcon:Qs,Cpu:Ks,CpuIcon:Ks,CreativeCommons:Js,CreativeCommonsIcon:Js,CreditCard:ed,CreditCardIcon:ed,Croissant:td,CroissantIcon:td,Crop:ad,CropIcon:ad,Cross:nd,CrossIcon:nd,Crosshair:rd,CrosshairIcon:rd,Crown:od,CrownIcon:od,Cuboid:id,CuboidIcon:id,CupSoda:ld,CupSodaIcon:ld,CurlyBraces:_t,CurlyBracesIcon:_t,Currency:cd,CurrencyIcon:cd,Cylinder:sd,CylinderIcon:sd,Database:ud,DatabaseBackup:dd,DatabaseBackupIcon:dd,DatabaseIcon:ud,DatabaseZap:hd,DatabaseZapIcon:hd,Delete:yd,DeleteIcon:yd,Dessert:pd,DessertIcon:pd,Diameter:kd,DiameterIcon:kd,Diamond:md,DiamondIcon:md,Dice1:gd,Dice1Icon:gd,Dice2:fd,Dice2Icon:fd,Dice3:vd,Dice3Icon:vd,Dice4:Md,Dice4Icon:Md,Dice5:xd,Dice5Icon:xd,Dice6:wd,Dice6Icon:wd,Dices:Ld,DicesIcon:Ld,Diff:Id,DiffIcon:Id,Disc:qd,Disc2:Cd,Disc2Icon:Cd,Disc3:Sd,Disc3Icon:Sd,DiscAlbum:bd,DiscAlbumIcon:bd,DiscIcon:qd,Divide:Hd,DivideCircle:zd,DivideCircleIcon:zd,DivideIcon:Hd,DivideSquare:jd,DivideSquareIcon:jd,Dna:Ad,DnaIcon:Ad,DnaOff:Pd,DnaOffIcon:Pd,Dog:Ud,DogIcon:Ud,DollarSign:yn,DollarSignIcon:yn,Donut:Vd,DonutIcon:Vd,DoorClosed:Fd,DoorClosedIcon:Fd,DoorOpen:Td,DoorOpenIcon:Td,Dot:Dd,DotIcon:Dd,DotSquare:n1,DotSquareIcon:n1,Download:Bd,DownloadCloud:Rd,DownloadCloudIcon:Rd,DownloadIcon:Bd,DraftingCompass:Ed,DraftingCompassIcon:Ed,Drama:Nd,DramaIcon:Nd,Dribbble:Od,DribbbleIcon:Od,Drill:Zd,DrillIcon:Zd,Droplet:Yd,DropletIcon:Yd,Droplets:Wd,DropletsIcon:Wd,Drum:_d,DrumIcon:_d,Drumstick:Gd,DrumstickIcon:Gd,Dumbbell:$d,DumbbellIcon:$d,Ear:Qd,EarIcon:Qd,EarOff:Xd,EarOffIcon:Xd,Earth:r1,EarthIcon:r1,EarthLock:Kd,EarthLockIcon:Kd,Eclipse:Jd,EclipseIcon:Jd,Edit:ve,Edit2:q1,Edit2Icon:q1,Edit3:b1,Edit3Icon:b1,EditIcon:ve,Egg:ah,EggFried:eh,EggFriedIcon:eh,EggIcon:ah,EggOff:th,EggOffIcon:th,Equal:rh,EqualIcon:rh,EqualNot:nh,EqualNotIcon:nh,EqualSquare:o1,EqualSquareIcon:o1,Eraser:oh,EraserIcon:oh,Euro:ih,EuroIcon:ih,Expand:lh,ExpandIcon:lh,ExternalLink:ch,ExternalLinkIcon:ch,Eye:pn,EyeIcon:pn,EyeOff:sh,EyeOffIcon:sh,Facebook:dh,FacebookIcon:dh,Factory:hh,FactoryIcon:hh,Fan:uh,FanIcon:uh,FastForward:yh,FastForwardIcon:yh,Feather:ph,FeatherIcon:ph,Fence:kh,FenceIcon:kh,FerrisWheel:mh,FerrisWheelIcon:mh,Figma:gh,FigmaIcon:gh,File:mu,FileArchive:fh,FileArchiveIcon:fh,FileAudio:Mh,FileAudio2:vh,FileAudio2Icon:vh,FileAudioIcon:Mh,FileAxis3D:i1,FileAxis3DIcon:i1,FileAxis3d:i1,FileAxis3dIcon:i1,FileBadge:wh,FileBadge2:xh,FileBadge2Icon:xh,FileBadgeIcon:wh,FileBarChart:Ih,FileBarChart2:Lh,FileBarChart2Icon:Lh,FileBarChartIcon:Ih,FileBox:Ch,FileBoxIcon:Ch,FileCheck:bh,FileCheck2:Sh,FileCheck2Icon:Sh,FileCheckIcon:bh,FileClock:qh,FileClockIcon:qh,FileCode:jh,FileCode2:zh,FileCode2Icon:zh,FileCodeIcon:jh,FileCog:l1,FileCog2:l1,FileCog2Icon:l1,FileCogIcon:l1,FileDiff:Hh,FileDiffIcon:Hh,FileDigit:Ph,FileDigitIcon:Ph,FileDown:Ah,FileDownIcon:Ah,FileEdit:s1,FileEditIcon:s1,FileHeart:Uh,FileHeartIcon:Uh,FileIcon:mu,FileImage:Vh,FileImageIcon:Vh,FileInput:Fh,FileInputIcon:Fh,FileJson:Dh,FileJson2:Th,FileJson2Icon:Th,FileJsonIcon:Dh,FileKey:Bh,FileKey2:Rh,FileKey2Icon:Rh,FileKeyIcon:Bh,FileLineChart:Eh,FileLineChartIcon:Eh,FileLock:Oh,FileLock2:Nh,FileLock2Icon:Nh,FileLockIcon:Oh,FileMinus:Yh,FileMinus2:Zh,FileMinus2Icon:Zh,FileMinusIcon:Yh,FileMusic:Wh,FileMusicIcon:Wh,FileOutput:_h,FileOutputIcon:_h,FilePen:s1,FilePenIcon:s1,FilePenLine:c1,FilePenLineIcon:c1,FilePieChart:Gh,FilePieChartIcon:Gh,FilePlus:Xh,FilePlus2:$h,FilePlus2Icon:$h,FilePlusIcon:Xh,FileQuestion:Qh,FileQuestionIcon:Qh,FileScan:Kh,FileScanIcon:Kh,FileSearch:eu,FileSearch2:Jh,FileSearch2Icon:Jh,FileSearchIcon:eu,FileSignature:c1,FileSignatureIcon:c1,FileSliders:tu,FileSlidersIcon:tu,FileSpreadsheet:au,FileSpreadsheetIcon:au,FileStack:nu,FileStackIcon:nu,FileSymlink:ru,FileSymlinkIcon:ru,FileTerminal:ou,FileTerminalIcon:ou,FileText:iu,FileTextIcon:iu,FileType:cu,FileType2:lu,FileType2Icon:lu,FileTypeIcon:cu,FileUp:su,FileUpIcon:su,FileVideo:hu,FileVideo2:du,FileVideo2Icon:du,FileVideoIcon:hu,FileVolume:yu,FileVolume2:uu,FileVolume2Icon:uu,FileVolumeIcon:yu,FileWarning:kn,FileWarningIcon:kn,FileX:ku,FileX2:pu,FileX2Icon:pu,FileXIcon:ku,Files:gu,FilesIcon:gu,Film:fu,FilmIcon:fu,Filter:Mu,FilterIcon:Mu,FilterX:vu,FilterXIcon:vu,Fingerprint:xu,FingerprintIcon:xu,FireExtinguisher:wu,FireExtinguisherIcon:wu,Fish:Cu,FishIcon:Cu,FishOff:Lu,FishOffIcon:Lu,FishSymbol:Iu,FishSymbolIcon:Iu,Flag:zu,FlagIcon:zu,FlagOff:Su,FlagOffIcon:Su,FlagTriangleLeft:bu,FlagTriangleLeftIcon:bu,FlagTriangleRight:qu,FlagTriangleRightIcon:qu,Flame:Hu,FlameIcon:Hu,FlameKindling:ju,FlameKindlingIcon:ju,Flashlight:Au,FlashlightIcon:Au,FlashlightOff:Pu,FlashlightOffIcon:Pu,FlaskConical:Vu,FlaskConicalIcon:Vu,FlaskConicalOff:Uu,FlaskConicalOffIcon:Uu,FlaskRound:Fu,FlaskRoundIcon:Fu,FlipHorizontal:Du,FlipHorizontal2:Tu,FlipHorizontal2Icon:Tu,FlipHorizontalIcon:Du,FlipVertical:Bu,FlipVertical2:Ru,FlipVertical2Icon:Ru,FlipVerticalIcon:Bu,Flower:Nu,Flower2:Eu,Flower2Icon:Eu,FlowerIcon:Nu,Focus:Ou,FocusIcon:Ou,FoldHorizontal:Zu,FoldHorizontalIcon:Zu,FoldVertical:Yu,FoldVerticalIcon:Yu,Folder:fy,FolderArchive:Wu,FolderArchiveIcon:Wu,FolderCheck:_u,FolderCheckIcon:_u,FolderClock:Gu,FolderClockIcon:Gu,FolderClosed:$u,FolderClosedIcon:$u,FolderCog:d1,FolderCog2:d1,FolderCog2Icon:d1,FolderCogIcon:d1,FolderDot:Xu,FolderDotIcon:Xu,FolderDown:Qu,FolderDownIcon:Qu,FolderEdit:h1,FolderEditIcon:h1,FolderGit:Ju,FolderGit2:Ku,FolderGit2Icon:Ku,FolderGitIcon:Ju,FolderHeart:ey,FolderHeartIcon:ey,FolderIcon:fy,FolderInput:ty,FolderInputIcon:ty,FolderKanban:ay,FolderKanbanIcon:ay,FolderKey:ny,FolderKeyIcon:ny,FolderLock:ry,FolderLockIcon:ry,FolderMinus:oy,FolderMinusIcon:oy,FolderOpen:ly,FolderOpenDot:iy,FolderOpenDotIcon:iy,FolderOpenIcon:ly,FolderOutput:cy,FolderOutputIcon:cy,FolderPen:h1,FolderPenIcon:h1,FolderPlus:sy,FolderPlusIcon:sy,FolderRoot:dy,FolderRootIcon:dy,FolderSearch:uy,FolderSearch2:hy,FolderSearch2Icon:hy,FolderSearchIcon:uy,FolderSymlink:yy,FolderSymlinkIcon:yy,FolderSync:py,FolderSyncIcon:py,FolderTree:ky,FolderTreeIcon:ky,FolderUp:my,FolderUpIcon:my,FolderX:gy,FolderXIcon:gy,Folders:vy,FoldersIcon:vy,Footprints:My,FootprintsIcon:My,Forklift:xy,ForkliftIcon:xy,FormInput:wy,FormInputIcon:wy,Forward:Ly,ForwardIcon:Ly,Frame:Iy,FrameIcon:Iy,Framer:Cy,FramerIcon:Cy,Frown:Sy,FrownIcon:Sy,Fuel:by,FuelIcon:by,Fullscreen:qy,FullscreenIcon:qy,FunctionSquare:zy,FunctionSquareIcon:zy,GalleryHorizontal:Hy,GalleryHorizontalEnd:jy,GalleryHorizontalEndIcon:jy,GalleryHorizontalIcon:Hy,GalleryThumbnails:Py,GalleryThumbnailsIcon:Py,GalleryVertical:Uy,GalleryVerticalEnd:Ay,GalleryVerticalEndIcon:Ay,GalleryVerticalIcon:Uy,Gamepad:Fy,Gamepad2:Vy,Gamepad2Icon:Vy,GamepadIcon:Fy,GanttChart:Ty,GanttChartIcon:Ty,GanttChartSquare:Ee,GanttChartSquareIcon:Ee,GanttSquare:Ee,GanttSquareIcon:Ee,Gauge:Ry,GaugeCircle:Dy,GaugeCircleIcon:Dy,GaugeIcon:Ry,Gavel:By,GavelIcon:By,Gem:Ey,GemIcon:Ey,Ghost:Ny,GhostIcon:Ny,Gift:Oy,GiftIcon:Oy,GitBranch:Yy,GitBranchIcon:Yy,GitBranchPlus:Zy,GitBranchPlusIcon:Zy,GitCommit:u1,GitCommitHorizontal:u1,GitCommitHorizontalIcon:u1,GitCommitIcon:u1,GitCommitVertical:Wy,GitCommitVerticalIcon:Wy,GitCompare:Gy,GitCompareArrows:_y,GitCompareArrowsIcon:_y,GitCompareIcon:Gy,GitFork:$y,GitForkIcon:$y,GitGraph:Xy,GitGraphIcon:Xy,GitMerge:Qy,GitMergeIcon:Qy,GitPullRequest:np,GitPullRequestArrow:Ky,GitPullRequestArrowIcon:Ky,GitPullRequestClosed:Jy,GitPullRequestClosedIcon:Jy,GitPullRequestCreate:tp,GitPullRequestCreateArrow:ep,GitPullRequestCreateArrowIcon:ep,GitPullRequestCreateIcon:tp,GitPullRequestDraft:ap,GitPullRequestDraftIcon:ap,GitPullRequestIcon:np,Github:rp,GithubIcon:rp,Gitlab:op,GitlabIcon:op,GlassWater:ip,GlassWaterIcon:ip,Glasses:lp,GlassesIcon:lp,Globe:sp,Globe2:r1,Globe2Icon:r1,GlobeIcon:sp,GlobeLock:cp,GlobeLockIcon:cp,Goal:dp,GoalIcon:dp,Grab:hp,GrabIcon:hp,GraduationCap:mn,GraduationCapIcon:mn,Grape:up,GrapeIcon:up,Grid:Ne,Grid2X2:y1,Grid2X2Icon:y1,Grid2x2:y1,Grid2x2Icon:y1,Grid3X3:Ne,Grid3X3Icon:Ne,Grid3x3:Ne,Grid3x3Icon:Ne,GridIcon:Ne,Grip:kp,GripHorizontal:yp,GripHorizontalIcon:yp,GripIcon:kp,GripVertical:pp,GripVerticalIcon:pp,Group:mp,GroupIcon:mp,Guitar:gp,GuitarIcon:gp,Hammer:fp,HammerIcon:fp,Hand:Lp,HandCoins:vp,HandCoinsIcon:vp,HandHeart:Mp,HandHeartIcon:Mp,HandHelping:p1,HandHelpingIcon:p1,HandIcon:Lp,HandMetal:xp,HandMetalIcon:xp,HandPlatter:wp,HandPlatterIcon:wp,Handshake:Ip,HandshakeIcon:Ip,HardDrive:bp,HardDriveDownload:Cp,HardDriveDownloadIcon:Cp,HardDriveIcon:bp,HardDriveUpload:Sp,HardDriveUploadIcon:Sp,HardHat:qp,HardHatIcon:qp,Hash:zp,HashIcon:zp,Haze:jp,HazeIcon:jp,HdmiPort:Hp,HdmiPortIcon:Hp,Heading:Dp,Heading1:Pp,Heading1Icon:Pp,Heading2:Ap,Heading2Icon:Ap,Heading3:Up,Heading3Icon:Up,Heading4:Vp,Heading4Icon:Vp,Heading5:Fp,Heading5Icon:Fp,Heading6:Tp,Heading6Icon:Tp,HeadingIcon:Dp,Headphones:Rp,HeadphonesIcon:Rp,Headset:Bp,HeadsetIcon:Bp,Heart:Yp,HeartCrack:Ep,HeartCrackIcon:Ep,HeartHandshake:Np,HeartHandshakeIcon:Np,HeartIcon:Yp,HeartOff:Op,HeartOffIcon:Op,HeartPulse:Zp,HeartPulseIcon:Zp,Heater:Wp,HeaterIcon:Wp,HelpCircle:_p,HelpCircleIcon:_p,HelpingHand:p1,HelpingHandIcon:p1,Hexagon:Gp,HexagonIcon:Gp,Highlighter:$p,HighlighterIcon:$p,History:Xp,HistoryIcon:Xp,Home:gn,HomeIcon:gn,Hop:Kp,HopIcon:Kp,HopOff:Qp,HopOffIcon:Qp,Hotel:fn,HotelIcon:fn,Hourglass:Jp,HourglassIcon:Jp,IceCream:tk,IceCream2:ek,IceCream2Icon:ek,IceCreamIcon:tk,Image:lk,ImageDown:ak,ImageDownIcon:ak,ImageIcon:lk,ImageMinus:nk,ImageMinusIcon:nk,ImageOff:rk,ImageOffIcon:rk,ImagePlus:ok,ImagePlusIcon:ok,ImageUp:ik,ImageUpIcon:ik,Images:ck,ImagesIcon:ck,Import:sk,ImportIcon:sk,Inbox:dk,InboxIcon:dk,Indent:hk,IndentIcon:hk,IndianRupee:uk,IndianRupeeIcon:uk,Infinity:yk,InfinityIcon:yk,Info:pk,InfoIcon:pk,Inspect:g1,InspectIcon:g1,InspectionPanel:kk,InspectionPanelIcon:kk,Instagram:mk,InstagramIcon:mk,Italic:gk,ItalicIcon:gk,IterationCcw:fk,IterationCcwIcon:fk,IterationCw:vk,IterationCwIcon:vk,JapaneseYen:Mk,JapaneseYenIcon:Mk,Joystick:xk,JoystickIcon:xk,Kanban:wk,KanbanIcon:wk,KanbanSquare:m1,KanbanSquareDashed:k1,KanbanSquareDashedIcon:k1,KanbanSquareIcon:m1,Key:Ck,KeyIcon:Ck,KeyRound:Lk,KeyRoundIcon:Lk,KeySquare:Ik,KeySquareIcon:Ik,Keyboard:bk,KeyboardIcon:bk,KeyboardMusic:Sk,KeyboardMusicIcon:Sk,Lamp:Ak,LampCeiling:qk,LampCeilingIcon:qk,LampDesk:zk,LampDeskIcon:zk,LampFloor:jk,LampFloorIcon:jk,LampIcon:Ak,LampWallDown:Hk,LampWallDownIcon:Hk,LampWallUp:Pk,LampWallUpIcon:Pk,LandPlot:Uk,LandPlotIcon:Uk,Landmark:Vk,LandmarkIcon:Vk,Languages:vn,LanguagesIcon:vn,Laptop:Tk,Laptop2:Fk,Laptop2Icon:Fk,LaptopIcon:Tk,Lasso:Rk,LassoIcon:Rk,LassoSelect:Dk,LassoSelectIcon:Dk,Laugh:Bk,LaughIcon:Bk,Layers:Ok,Layers2:Ek,Layers2Icon:Ek,Layers3:Nk,Layers3Icon:Nk,LayersIcon:Ok,Layout:S1,LayoutDashboard:Zk,LayoutDashboardIcon:Zk,LayoutGrid:Yk,LayoutGridIcon:Yk,LayoutIcon:S1,LayoutList:Wk,LayoutListIcon:Wk,LayoutPanelLeft:_k,LayoutPanelLeftIcon:_k,LayoutPanelTop:Gk,LayoutPanelTopIcon:Gk,LayoutTemplate:$k,LayoutTemplateIcon:$k,Leaf:Xk,LeafIcon:Xk,LeafyGreen:Qk,LeafyGreenIcon:Qk,Library:e4,LibraryBig:Kk,LibraryBigIcon:Kk,LibraryIcon:e4,LibrarySquare:Jk,LibrarySquareIcon:Jk,LifeBuoy:t4,LifeBuoyIcon:t4,Ligature:a4,LigatureIcon:a4,Lightbulb:r4,LightbulbIcon:r4,LightbulbOff:n4,LightbulbOffIcon:n4,LineChart:o4,LineChartIcon:o4,Link:c4,Link2:l4,Link2Icon:l4,Link2Off:i4,Link2OffIcon:i4,LinkIcon:c4,Linkedin:s4,LinkedinIcon:s4,List:I4,ListChecks:d4,ListChecksIcon:d4,ListCollapse:h4,ListCollapseIcon:h4,ListEnd:u4,ListEndIcon:u4,ListFilter:y4,ListFilterIcon:y4,ListIcon:I4,ListMinus:p4,ListMinusIcon:p4,ListMusic:k4,ListMusicIcon:k4,ListOrdered:m4,ListOrderedIcon:m4,ListPlus:g4,ListPlusIcon:g4,ListRestart:f4,ListRestartIcon:f4,ListStart:v4,ListStartIcon:v4,ListTodo:M4,ListTodoIcon:M4,ListTree:x4,ListTreeIcon:x4,ListVideo:w4,ListVideoIcon:w4,ListX:L4,ListXIcon:L4,Loader:S4,Loader2:C4,Loader2Icon:C4,LoaderIcon:S4,Locate:z4,LocateFixed:b4,LocateFixedIcon:b4,LocateIcon:z4,LocateOff:q4,LocateOffIcon:q4,Lock:H4,LockIcon:H4,LockKeyhole:j4,LockKeyholeIcon:j4,LogIn:P4,LogInIcon:P4,LogOut:A4,LogOutIcon:A4,Lollipop:U4,LollipopIcon:U4,LucideAArrowDown:q2,LucideAArrowUp:z2,LucideALargeSmall:j2,LucideAccessibility:H2,LucideActivity:A2,LucideActivitySquare:P2,LucideAirVent:U2,LucideAirplay:V2,LucideAlarmCheck:Pt,LucideAlarmClock:T2,LucideAlarmClockCheck:Pt,LucideAlarmClockMinus:At,LucideAlarmClockOff:F2,LucideAlarmClockPlus:Ut,LucideAlarmMinus:At,LucideAlarmPlus:Ut,LucideAlarmSmoke:D2,LucideAlbum:R2,LucideAlertCircle:B2,LucideAlertOctagon:E2,LucideAlertTriangle:N2,LucideAlignCenter:Y2,LucideAlignCenterHorizontal:O2,LucideAlignCenterVertical:Z2,LucideAlignEndHorizontal:W2,LucideAlignEndVertical:_2,LucideAlignHorizontalDistributeCenter:G2,LucideAlignHorizontalDistributeEnd:$2,LucideAlignHorizontalDistributeStart:X2,LucideAlignHorizontalJustifyCenter:Q2,LucideAlignHorizontalJustifyEnd:K2,LucideAlignHorizontalJustifyStart:J2,LucideAlignHorizontalSpaceAround:er,LucideAlignHorizontalSpaceBetween:tr,LucideAlignJustify:ar,LucideAlignLeft:nr,LucideAlignRight:rr,LucideAlignStartHorizontal:or,LucideAlignStartVertical:ir,LucideAlignVerticalDistributeCenter:lr,LucideAlignVerticalDistributeEnd:cr,LucideAlignVerticalDistributeStart:sr,LucideAlignVerticalJustifyCenter:dr,LucideAlignVerticalJustifyEnd:hr,LucideAlignVerticalJustifyStart:ur,LucideAlignVerticalSpaceAround:yr,LucideAlignVerticalSpaceBetween:pr,LucideAmbulance:kr,LucideAmpersand:mr,LucideAmpersands:gr,LucideAnchor:fr,LucideAngry:vr,LucideAnnoyed:Mr,LucideAntenna:xr,LucideAnvil:wr,LucideAperture:Lr,LucideAppWindow:Ir,LucideApple:Cr,LucideArchive:qr,LucideArchiveRestore:Sr,LucideArchiveX:br,LucideAreaChart:zr,LucideArmchair:jr,LucideArrowBigDown:Pr,LucideArrowBigDownDash:Hr,LucideArrowBigLeft:Ur,LucideArrowBigLeftDash:Ar,LucideArrowBigRight:Fr,LucideArrowBigRightDash:Vr,LucideArrowBigUp:Dr,LucideArrowBigUpDash:Tr,LucideArrowDown:ao,LucideArrowDown01:Rr,LucideArrowDown10:Br,LucideArrowDownAZ:Vt,LucideArrowDownAz:Vt,LucideArrowDownCircle:Er,LucideArrowDownFromLine:Nr,LucideArrowDownLeft:Wr,LucideArrowDownLeftFromCircle:Or,LucideArrowDownLeftFromSquare:Zr,LucideArrowDownLeftSquare:Yr,LucideArrowDownNarrowWide:_r,LucideArrowDownRight:Qr,LucideArrowDownRightFromCircle:Gr,LucideArrowDownRightFromSquare:$r,LucideArrowDownRightSquare:Xr,LucideArrowDownSquare:Kr,LucideArrowDownToDot:Jr,LucideArrowDownToLine:eo,LucideArrowDownUp:to,LucideArrowDownWideNarrow:Ft,LucideArrowDownZA:Tt,LucideArrowDownZa:Tt,LucideArrowLeft:co,LucideArrowLeftCircle:no,LucideArrowLeftFromLine:ro,LucideArrowLeftRight:oo,LucideArrowLeftSquare:io,LucideArrowLeftToLine:lo,LucideArrowRight:ko,LucideArrowRightCircle:so,LucideArrowRightFromLine:ho,LucideArrowRightLeft:uo,LucideArrowRightSquare:yo,LucideArrowRightToLine:po,LucideArrowUp:De,LucideArrowUp01:mo,LucideArrowUp10:go,LucideArrowUpAZ:Dt,LucideArrowUpAz:Dt,LucideArrowUpCircle:fo,LucideArrowUpDown:vo,LucideArrowUpFromDot:Mo,LucideArrowUpFromLine:xo,LucideArrowUpLeft:Co,LucideArrowUpLeftFromCircle:wo,LucideArrowUpLeftFromSquare:Lo,LucideArrowUpLeftSquare:Io,LucideArrowUpNarrowWide:Rt,LucideArrowUpRight:zo,LucideArrowUpRightFromCircle:So,LucideArrowUpRightFromSquare:bo,LucideArrowUpRightSquare:qo,LucideArrowUpSquare:jo,LucideArrowUpToLine:Ho,LucideArrowUpWideNarrow:Po,LucideArrowUpZA:Bt,LucideArrowUpZa:Bt,LucideArrowsUpFromLine:Ao,LucideAsterisk:Uo,LucideAsteriskSquare:Et,LucideAtSign:Vo,LucideAtom:Fo,LucideAudioLines:To,LucideAudioWaveform:Do,LucideAward:Ro,LucideAxe:Bo,LucideAxis3D:Nt,LucideAxis3d:Nt,LucideBaby:Eo,LucideBackpack:No,LucideBadge:ri,LucideBadgeAlert:Oo,LucideBadgeCent:Zo,LucideBadgeCheck:Ot,LucideBadgeDollarSign:Yo,LucideBadgeEuro:Wo,LucideBadgeHelp:_o,LucideBadgeIndianRupee:Go,LucideBadgeInfo:$o,LucideBadgeJapaneseYen:Xo,LucideBadgeMinus:Qo,LucideBadgePercent:Ko,LucideBadgePlus:Jo,LucideBadgePoundSterling:ei,LucideBadgeRussianRuble:ti,LucideBadgeSwissFranc:ai,LucideBadgeX:ni,LucideBaggageClaim:oi,LucideBan:ii,LucideBanana:li,LucideBanknote:ci,LucideBarChart:ki,LucideBarChart2:si,LucideBarChart3:di,LucideBarChart4:hi,LucideBarChartBig:ui,LucideBarChartHorizontal:pi,LucideBarChartHorizontalBig:yi,LucideBarcode:mi,LucideBaseline:gi,LucideBath:fi,LucideBattery:Ii,LucideBatteryCharging:vi,LucideBatteryFull:Mi,LucideBatteryLow:xi,LucideBatteryMedium:wi,LucideBatteryWarning:Li,LucideBeaker:Ci,LucideBean:bi,LucideBeanOff:Si,LucideBed:ji,LucideBedDouble:qi,LucideBedSingle:zi,LucideBeef:Hi,LucideBeer:Pi,LucideBell:sn,LucideBellDot:Ai,LucideBellElectric:Ui,LucideBellMinus:Vi,LucideBellOff:Fi,LucideBellPlus:Ti,LucideBellRing:Di,LucideBetweenHorizonalEnd:Zt,LucideBetweenHorizonalStart:Yt,LucideBetweenHorizontalEnd:Zt,LucideBetweenHorizontalStart:Yt,LucideBetweenVerticalEnd:Ri,LucideBetweenVerticalStart:Bi,LucideBike:Ei,LucideBinary:Ni,LucideBiohazard:Oi,LucideBird:Zi,LucideBitcoin:Yi,LucideBlend:Wi,LucideBlinds:_i,LucideBlocks:Gi,LucideBluetooth:Ki,LucideBluetoothConnected:$i,LucideBluetoothOff:Xi,LucideBluetoothSearching:Qi,LucideBold:Ji,LucideBolt:el,LucideBomb:tl,LucideBone:al,LucideBook:Cl,LucideBookA:nl,LucideBookAudio:rl,LucideBookCheck:ol,LucideBookCopy:il,LucideBookDashed:Wt,LucideBookDown:ll,LucideBookHeadphones:cl,LucideBookHeart:sl,LucideBookImage:dl,LucideBookKey:hl,LucideBookLock:ul,LucideBookMarked:yl,LucideBookMinus:pl,LucideBookOpen:gl,LucideBookOpenCheck:kl,LucideBookOpenText:ml,LucideBookPlus:fl,LucideBookTemplate:Wt,LucideBookText:vl,LucideBookType:Ml,LucideBookUp:wl,LucideBookUp2:xl,LucideBookUser:Ll,LucideBookX:Il,LucideBookmark:jl,LucideBookmarkCheck:Sl,LucideBookmarkMinus:bl,LucideBookmarkPlus:ql,LucideBookmarkX:zl,LucideBoomBox:Hl,LucideBot:Al,LucideBotMessageSquare:Pl,LucideBox:Vl,LucideBoxSelect:Ul,LucideBoxes:Fl,LucideBraces:_t,LucideBrackets:Tl,LucideBrain:Bl,LucideBrainCircuit:Dl,LucideBrainCog:Rl,LucideBrickWall:El,LucideBriefcase:Nl,LucideBringToFront:Ol,LucideBrush:Zl,LucideBug:_l,LucideBugOff:Yl,LucideBugPlay:Wl,LucideBuilding:$l,LucideBuilding2:Gl,LucideBus:dn,LucideBusFront:Xl,LucideCable:Kl,LucideCableCar:Ql,LucideCake:ec,LucideCakeSlice:Jl,LucideCalculator:tc,LucideCalendar:gc,LucideCalendarCheck:nc,LucideCalendarCheck2:ac,LucideCalendarClock:rc,LucideCalendarDays:oc,LucideCalendarFold:ic,LucideCalendarHeart:lc,LucideCalendarMinus:sc,LucideCalendarMinus2:cc,LucideCalendarOff:dc,LucideCalendarPlus:uc,LucideCalendarPlus2:hc,LucideCalendarRange:yc,LucideCalendarSearch:pc,LucideCalendarX:mc,LucideCalendarX2:kc,LucideCamera:vc,LucideCameraOff:fc,LucideCandlestickChart:Mc,LucideCandy:Lc,LucideCandyCane:xc,LucideCandyOff:wc,LucideCaptions:Gt,LucideCaptionsOff:Ic,LucideCar:hn,LucideCarFront:Cc,LucideCarTaxiFront:Sc,LucideCaravan:bc,LucideCarrot:qc,LucideCaseLower:zc,LucideCaseSensitive:jc,LucideCaseUpper:Hc,LucideCassetteTape:Pc,LucideCast:Ac,LucideCastle:Uc,LucideCat:Vc,LucideCctv:Fc,LucideCheck:Nc,LucideCheckCheck:Tc,LucideCheckCircle:Rc,LucideCheckCircle2:Dc,LucideCheckSquare:Ec,LucideCheckSquare2:Bc,LucideChefHat:Oc,LucideCherry:Zc,LucideChevronDown:_c,LucideChevronDownCircle:Yc,LucideChevronDownSquare:Wc,LucideChevronFirst:Gc,LucideChevronLast:$c,LucideChevronLeft:Kc,LucideChevronLeftCircle:Xc,LucideChevronLeftSquare:Qc,LucideChevronRight:t0,LucideChevronRightCircle:Jc,LucideChevronRightSquare:e0,LucideChevronUp:r0,LucideChevronUpCircle:a0,LucideChevronUpSquare:n0,LucideChevronsDown:i0,LucideChevronsDownUp:o0,LucideChevronsLeft:c0,LucideChevronsLeftRight:l0,LucideChevronsRight:d0,LucideChevronsRightLeft:s0,LucideChevronsUp:u0,LucideChevronsUpDown:h0,LucideChrome:y0,LucideChurch:p0,LucideCigarette:m0,LucideCigaretteOff:k0,LucideCircle:S0,LucideCircleDashed:g0,LucideCircleDollarSign:f0,LucideCircleDot:M0,LucideCircleDotDashed:v0,LucideCircleEllipsis:x0,LucideCircleEqual:w0,LucideCircleFadingPlus:L0,LucideCircleOff:I0,LucideCircleSlash:C0,LucideCircleSlash2:$t,LucideCircleSlashed:$t,LucideCircleUser:Qt,LucideCircleUserRound:Xt,LucideCircuitBoard:b0,LucideCitrus:q0,LucideClapperboard:z0,LucideClipboard:D0,LucideClipboardCheck:j0,LucideClipboardCopy:H0,LucideClipboardEdit:Jt,LucideClipboardList:P0,LucideClipboardMinus:A0,LucideClipboardPaste:U0,LucideClipboardPen:Jt,LucideClipboardPenLine:Kt,LucideClipboardPlus:V0,LucideClipboardSignature:Kt,LucideClipboardType:F0,LucideClipboardX:T0,LucideClock:Q0,LucideClock1:R0,LucideClock10:B0,LucideClock11:E0,LucideClock12:N0,LucideClock2:O0,LucideClock3:Z0,LucideClock4:Y0,LucideClock5:W0,LucideClock6:_0,LucideClock7:G0,LucideClock8:$0,LucideClock9:X0,LucideCloud:hs,LucideCloudCog:K0,LucideCloudDrizzle:J0,LucideCloudFog:es,LucideCloudHail:ts,LucideCloudLightning:as,LucideCloudMoon:rs,LucideCloudMoonRain:ns,LucideCloudOff:os,LucideCloudRain:ls,LucideCloudRainWind:is,LucideCloudSnow:cs,LucideCloudSun:ds,LucideCloudSunRain:ss,LucideCloudy:us,LucideClover:ys,LucideClub:ps,LucideCode:ms,LucideCode2:ks,LucideCodeSquare:e1,LucideCodepen:gs,LucideCodesandbox:fs,LucideCoffee:un,LucideCog:vs,LucideCoins:Ms,LucideColumns:t1,LucideColumns2:t1,LucideColumns3:a1,LucideColumns4:xs,LucideCombine:ws,LucideCommand:Ls,LucideCompass:Is,LucideComponent:Cs,LucideComputer:Ss,LucideConciergeBell:bs,LucideCone:qs,LucideConstruction:zs,LucideContact:Hs,LucideContact2:js,LucideContainer:Ps,LucideContrast:As,LucideCookie:Us,LucideCookingPot:Vs,LucideCopy:Es,LucideCopyCheck:Fs,LucideCopyMinus:Ts,LucideCopyPlus:Ds,LucideCopySlash:Rs,LucideCopyX:Bs,LucideCopyleft:Ns,LucideCopyright:Os,LucideCornerDownLeft:Zs,LucideCornerDownRight:Ys,LucideCornerLeftDown:Ws,LucideCornerLeftUp:_s,LucideCornerRightDown:Gs,LucideCornerRightUp:$s,LucideCornerUpLeft:Xs,LucideCornerUpRight:Qs,LucideCpu:Ks,LucideCreativeCommons:Js,LucideCreditCard:ed,LucideCroissant:td,LucideCrop:ad,LucideCross:nd,LucideCrosshair:rd,LucideCrown:od,LucideCuboid:id,LucideCupSoda:ld,LucideCurlyBraces:_t,LucideCurrency:cd,LucideCylinder:sd,LucideDatabase:ud,LucideDatabaseBackup:dd,LucideDatabaseZap:hd,LucideDelete:yd,LucideDessert:pd,LucideDiameter:kd,LucideDiamond:md,LucideDice1:gd,LucideDice2:fd,LucideDice3:vd,LucideDice4:Md,LucideDice5:xd,LucideDice6:wd,LucideDices:Ld,LucideDiff:Id,LucideDisc:qd,LucideDisc2:Cd,LucideDisc3:Sd,LucideDiscAlbum:bd,LucideDivide:Hd,LucideDivideCircle:zd,LucideDivideSquare:jd,LucideDna:Ad,LucideDnaOff:Pd,LucideDog:Ud,LucideDollarSign:yn,LucideDonut:Vd,LucideDoorClosed:Fd,LucideDoorOpen:Td,LucideDot:Dd,LucideDotSquare:n1,LucideDownload:Bd,LucideDownloadCloud:Rd,LucideDraftingCompass:Ed,LucideDrama:Nd,LucideDribbble:Od,LucideDrill:Zd,LucideDroplet:Yd,LucideDroplets:Wd,LucideDrum:_d,LucideDrumstick:Gd,LucideDumbbell:$d,LucideEar:Qd,LucideEarOff:Xd,LucideEarth:r1,LucideEarthLock:Kd,LucideEclipse:Jd,LucideEdit:ve,LucideEdit2:q1,LucideEdit3:b1,LucideEgg:ah,LucideEggFried:eh,LucideEggOff:th,LucideEqual:rh,LucideEqualNot:nh,LucideEqualSquare:o1,LucideEraser:oh,LucideEuro:ih,LucideExpand:lh,LucideExternalLink:ch,LucideEye:pn,LucideEyeOff:sh,LucideFacebook:dh,LucideFactory:hh,LucideFan:uh,LucideFastForward:yh,LucideFeather:ph,LucideFence:kh,LucideFerrisWheel:mh,LucideFigma:gh,LucideFile:mu,LucideFileArchive:fh,LucideFileAudio:Mh,LucideFileAudio2:vh,LucideFileAxis3D:i1,LucideFileAxis3d:i1,LucideFileBadge:wh,LucideFileBadge2:xh,LucideFileBarChart:Ih,LucideFileBarChart2:Lh,LucideFileBox:Ch,LucideFileCheck:bh,LucideFileCheck2:Sh,LucideFileClock:qh,LucideFileCode:jh,LucideFileCode2:zh,LucideFileCog:l1,LucideFileCog2:l1,LucideFileDiff:Hh,LucideFileDigit:Ph,LucideFileDown:Ah,LucideFileEdit:s1,LucideFileHeart:Uh,LucideFileImage:Vh,LucideFileInput:Fh,LucideFileJson:Dh,LucideFileJson2:Th,LucideFileKey:Bh,LucideFileKey2:Rh,LucideFileLineChart:Eh,LucideFileLock:Oh,LucideFileLock2:Nh,LucideFileMinus:Yh,LucideFileMinus2:Zh,LucideFileMusic:Wh,LucideFileOutput:_h,LucideFilePen:s1,LucideFilePenLine:c1,LucideFilePieChart:Gh,LucideFilePlus:Xh,LucideFilePlus2:$h,LucideFileQuestion:Qh,LucideFileScan:Kh,LucideFileSearch:eu,LucideFileSearch2:Jh,LucideFileSignature:c1,LucideFileSliders:tu,LucideFileSpreadsheet:au,LucideFileStack:nu,LucideFileSymlink:ru,LucideFileTerminal:ou,LucideFileText:iu,LucideFileType:cu,LucideFileType2:lu,LucideFileUp:su,LucideFileVideo:hu,LucideFileVideo2:du,LucideFileVolume:yu,LucideFileVolume2:uu,LucideFileWarning:kn,LucideFileX:ku,LucideFileX2:pu,LucideFiles:gu,LucideFilm:fu,LucideFilter:Mu,LucideFilterX:vu,LucideFingerprint:xu,LucideFireExtinguisher:wu,LucideFish:Cu,LucideFishOff:Lu,LucideFishSymbol:Iu,LucideFlag:zu,LucideFlagOff:Su,LucideFlagTriangleLeft:bu,LucideFlagTriangleRight:qu,LucideFlame:Hu,LucideFlameKindling:ju,LucideFlashlight:Au,LucideFlashlightOff:Pu,LucideFlaskConical:Vu,LucideFlaskConicalOff:Uu,LucideFlaskRound:Fu,LucideFlipHorizontal:Du,LucideFlipHorizontal2:Tu,LucideFlipVertical:Bu,LucideFlipVertical2:Ru,LucideFlower:Nu,LucideFlower2:Eu,LucideFocus:Ou,LucideFoldHorizontal:Zu,LucideFoldVertical:Yu,LucideFolder:fy,LucideFolderArchive:Wu,LucideFolderCheck:_u,LucideFolderClock:Gu,LucideFolderClosed:$u,LucideFolderCog:d1,LucideFolderCog2:d1,LucideFolderDot:Xu,LucideFolderDown:Qu,LucideFolderEdit:h1,LucideFolderGit:Ju,LucideFolderGit2:Ku,LucideFolderHeart:ey,LucideFolderInput:ty,LucideFolderKanban:ay,LucideFolderKey:ny,LucideFolderLock:ry,LucideFolderMinus:oy,LucideFolderOpen:ly,LucideFolderOpenDot:iy,LucideFolderOutput:cy,LucideFolderPen:h1,LucideFolderPlus:sy,LucideFolderRoot:dy,LucideFolderSearch:uy,LucideFolderSearch2:hy,LucideFolderSymlink:yy,LucideFolderSync:py,LucideFolderTree:ky,LucideFolderUp:my,LucideFolderX:gy,LucideFolders:vy,LucideFootprints:My,LucideForklift:xy,LucideFormInput:wy,LucideForward:Ly,LucideFrame:Iy,LucideFramer:Cy,LucideFrown:Sy,LucideFuel:by,LucideFullscreen:qy,LucideFunctionSquare:zy,LucideGalleryHorizontal:Hy,LucideGalleryHorizontalEnd:jy,LucideGalleryThumbnails:Py,LucideGalleryVertical:Uy,LucideGalleryVerticalEnd:Ay,LucideGamepad:Fy,LucideGamepad2:Vy,LucideGanttChart:Ty,LucideGanttChartSquare:Ee,LucideGanttSquare:Ee,LucideGauge:Ry,LucideGaugeCircle:Dy,LucideGavel:By,LucideGem:Ey,LucideGhost:Ny,LucideGift:Oy,LucideGitBranch:Yy,LucideGitBranchPlus:Zy,LucideGitCommit:u1,LucideGitCommitHorizontal:u1,LucideGitCommitVertical:Wy,LucideGitCompare:Gy,LucideGitCompareArrows:_y,LucideGitFork:$y,LucideGitGraph:Xy,LucideGitMerge:Qy,LucideGitPullRequest:np,LucideGitPullRequestArrow:Ky,LucideGitPullRequestClosed:Jy,LucideGitPullRequestCreate:tp,LucideGitPullRequestCreateArrow:ep,LucideGitPullRequestDraft:ap,LucideGithub:rp,LucideGitlab:op,LucideGlassWater:ip,LucideGlasses:lp,LucideGlobe:sp,LucideGlobe2:r1,LucideGlobeLock:cp,LucideGoal:dp,LucideGrab:hp,LucideGraduationCap:mn,LucideGrape:up,LucideGrid:Ne,LucideGrid2X2:y1,LucideGrid2x2:y1,LucideGrid3X3:Ne,LucideGrid3x3:Ne,LucideGrip:kp,LucideGripHorizontal:yp,LucideGripVertical:pp,LucideGroup:mp,LucideGuitar:gp,LucideHammer:fp,LucideHand:Lp,LucideHandCoins:vp,LucideHandHeart:Mp,LucideHandHelping:p1,LucideHandMetal:xp,LucideHandPlatter:wp,LucideHandshake:Ip,LucideHardDrive:bp,LucideHardDriveDownload:Cp,LucideHardDriveUpload:Sp,LucideHardHat:qp,LucideHash:zp,LucideHaze:jp,LucideHdmiPort:Hp,LucideHeading:Dp,LucideHeading1:Pp,LucideHeading2:Ap,LucideHeading3:Up,LucideHeading4:Vp,LucideHeading5:Fp,LucideHeading6:Tp,LucideHeadphones:Rp,LucideHeadset:Bp,LucideHeart:Yp,LucideHeartCrack:Ep,LucideHeartHandshake:Np,LucideHeartOff:Op,LucideHeartPulse:Zp,LucideHeater:Wp,LucideHelpCircle:_p,LucideHelpingHand:p1,LucideHexagon:Gp,LucideHighlighter:$p,LucideHistory:Xp,LucideHome:gn,LucideHop:Kp,LucideHopOff:Qp,LucideHotel:fn,LucideHourglass:Jp,LucideIceCream:tk,LucideIceCream2:ek,LucideImage:lk,LucideImageDown:ak,LucideImageMinus:nk,LucideImageOff:rk,LucideImagePlus:ok,LucideImageUp:ik,LucideImages:ck,LucideImport:sk,LucideInbox:dk,LucideIndent:hk,LucideIndianRupee:uk,LucideInfinity:yk,LucideInfo:pk,LucideInspect:g1,LucideInspectionPanel:kk,LucideInstagram:mk,LucideItalic:gk,LucideIterationCcw:fk,LucideIterationCw:vk,LucideJapaneseYen:Mk,LucideJoystick:xk,LucideKanban:wk,LucideKanbanSquare:m1,LucideKanbanSquareDashed:k1,LucideKey:Ck,LucideKeyRound:Lk,LucideKeySquare:Ik,LucideKeyboard:bk,LucideKeyboardMusic:Sk,LucideLamp:Ak,LucideLampCeiling:qk,LucideLampDesk:zk,LucideLampFloor:jk,LucideLampWallDown:Hk,LucideLampWallUp:Pk,LucideLandPlot:Uk,LucideLandmark:Vk,LucideLanguages:vn,LucideLaptop:Tk,LucideLaptop2:Fk,LucideLasso:Rk,LucideLassoSelect:Dk,LucideLaugh:Bk,LucideLayers:Ok,LucideLayers2:Ek,LucideLayers3:Nk,LucideLayout:S1,LucideLayoutDashboard:Zk,LucideLayoutGrid:Yk,LucideLayoutList:Wk,LucideLayoutPanelLeft:_k,LucideLayoutPanelTop:Gk,LucideLayoutTemplate:$k,LucideLeaf:Xk,LucideLeafyGreen:Qk,LucideLibrary:e4,LucideLibraryBig:Kk,LucideLibrarySquare:Jk,LucideLifeBuoy:t4,LucideLigature:a4,LucideLightbulb:r4,LucideLightbulbOff:n4,LucideLineChart:o4,LucideLink:c4,LucideLink2:l4,LucideLink2Off:i4,LucideLinkedin:s4,LucideList:I4,LucideListChecks:d4,LucideListCollapse:h4,LucideListEnd:u4,LucideListFilter:y4,LucideListMinus:p4,LucideListMusic:k4,LucideListOrdered:m4,LucideListPlus:g4,LucideListRestart:f4,LucideListStart:v4,LucideListTodo:M4,LucideListTree:x4,LucideListVideo:w4,LucideListX:L4,LucideLoader:S4,LucideLoader2:C4,LucideLocate:z4,LucideLocateFixed:b4,LucideLocateOff:q4,LucideLock:H4,LucideLockKeyhole:j4,LucideLogIn:P4,LucideLogOut:A4,LucideLollipop:U4,LucideLuggage:V4,LucideMSquare:F4,LucideMagnet:T4,LucideMail:W4,LucideMailCheck:D4,LucideMailMinus:R4,LucideMailOpen:B4,LucideMailPlus:E4,LucideMailQuestion:N4,LucideMailSearch:O4,LucideMailWarning:Z4,LucideMailX:Y4,LucideMailbox:_4,LucideMails:G4,LucideMap:K4,LucideMapPin:X4,LucideMapPinOff:$4,LucideMapPinned:Q4,LucideMartini:J4,LucideMaximize:t3,LucideMaximize2:e3,LucideMedal:a3,LucideMegaphone:r3,LucideMegaphoneOff:n3,LucideMeh:o3,LucideMemoryStick:i3,LucideMenu:c3,LucideMenuSquare:l3,LucideMerge:s3,LucideMessageCircle:M3,LucideMessageCircleCode:d3,LucideMessageCircleDashed:h3,LucideMessageCircleHeart:u3,LucideMessageCircleMore:y3,LucideMessageCircleOff:p3,LucideMessageCirclePlus:k3,LucideMessageCircleQuestion:m3,LucideMessageCircleReply:g3,LucideMessageCircleWarning:f3,LucideMessageCircleX:v3,LucideMessageSquare:Mn,LucideMessageSquareCode:x3,LucideMessageSquareDashed:w3,LucideMessageSquareDiff:L3,LucideMessageSquareDot:I3,LucideMessageSquareHeart:C3,LucideMessageSquareMore:S3,LucideMessageSquareOff:b3,LucideMessageSquarePlus:q3,LucideMessageSquareQuote:z3,LucideMessageSquareReply:j3,LucideMessageSquareShare:H3,LucideMessageSquareText:P3,LucideMessageSquareWarning:A3,LucideMessageSquareX:U3,LucideMessagesSquare:V3,LucideMic:D3,LucideMic2:F3,LucideMicOff:T3,LucideMicroscope:R3,LucideMicrowave:B3,LucideMilestone:E3,LucideMilk:O3,LucideMilkOff:N3,LucideMinimize:Y3,LucideMinimize2:Z3,LucideMinus:G3,LucideMinusCircle:W3,LucideMinusSquare:_3,LucideMonitor:i5,LucideMonitorCheck:$3,LucideMonitorDot:X3,LucideMonitorDown:Q3,LucideMonitorOff:K3,LucideMonitorPause:J3,LucideMonitorPlay:e5,LucideMonitorSmartphone:t5,LucideMonitorSpeaker:a5,LucideMonitorStop:n5,LucideMonitorUp:r5,LucideMonitorX:o5,LucideMoon:c5,LucideMoonStar:l5,LucideMoreHorizontal:s5,LucideMoreVertical:d5,LucideMountain:u5,LucideMountainSnow:h5,LucideMouse:g5,LucideMousePointer:m5,LucideMousePointer2:y5,LucideMousePointerClick:p5,LucideMousePointerSquare:g1,LucideMousePointerSquareDashed:k5,LucideMove:j5,LucideMove3D:f1,LucideMove3d:f1,LucideMoveDiagonal:v5,LucideMoveDiagonal2:f5,LucideMoveDown:w5,LucideMoveDownLeft:M5,LucideMoveDownRight:x5,LucideMoveHorizontal:L5,LucideMoveLeft:I5,LucideMoveRight:C5,LucideMoveUp:q5,LucideMoveUpLeft:S5,LucideMoveUpRight:b5,LucideMoveVertical:z5,LucideMusic:U5,LucideMusic2:H5,LucideMusic3:P5,LucideMusic4:A5,LucideNavigation:D5,LucideNavigation2:F5,LucideNavigation2Off:V5,LucideNavigationOff:T5,LucideNetwork:R5,LucideNewspaper:B5,LucideNfc:E5,LucideNotebook:Y5,LucideNotebookPen:N5,LucideNotebookTabs:O5,LucideNotebookText:Z5,LucideNotepadText:_5,LucideNotepadTextDashed:W5,LucideNut:$5,LucideNutOff:G5,LucideOctagon:X5,LucideOption:Q5,LucideOrbit:K5,LucideOutdent:J5,LucidePackage:lm,LucidePackage2:em,LucidePackageCheck:tm,LucidePackageMinus:am,LucidePackageOpen:nm,LucidePackagePlus:rm,LucidePackageSearch:om,LucidePackageX:im,LucidePaintBucket:cm,LucidePaintRoller:sm,LucidePaintbrush:hm,LucidePaintbrush2:dm,LucidePalette:um,LucidePalmtree:ym,LucidePanelBottom:mm,LucidePanelBottomClose:pm,LucidePanelBottomDashed:v1,LucidePanelBottomInactive:v1,LucidePanelBottomOpen:km,LucidePanelLeft:L1,LucidePanelLeftClose:M1,LucidePanelLeftDashed:x1,LucidePanelLeftInactive:x1,LucidePanelLeftOpen:w1,LucidePanelRight:vm,LucidePanelRightClose:gm,LucidePanelRightDashed:I1,LucidePanelRightInactive:I1,LucidePanelRightOpen:fm,LucidePanelTop:wm,LucidePanelTopClose:Mm,LucidePanelTopDashed:C1,LucidePanelTopInactive:C1,LucidePanelTopOpen:xm,LucidePanelsLeftBottom:Lm,LucidePanelsLeftRight:a1,LucidePanelsRightBottom:Im,LucidePanelsTopBottom:H1,LucidePanelsTopLeft:S1,LucidePaperclip:Cm,LucideParentheses:Sm,LucideParkingCircle:qm,LucideParkingCircleOff:bm,LucideParkingMeter:zm,LucideParkingSquare:Hm,LucideParkingSquareOff:jm,LucidePartyPopper:Pm,LucidePause:Vm,LucidePauseCircle:Am,LucidePauseOctagon:Um,LucidePawPrint:Fm,LucidePcCase:Tm,LucidePen:q1,LucidePenBox:ve,LucidePenLine:b1,LucidePenSquare:ve,LucidePenTool:Dm,LucidePencil:Em,LucidePencilLine:Rm,LucidePencilRuler:Bm,LucidePentagon:Nm,LucidePercent:Wm,LucidePercentCircle:Om,LucidePercentDiamond:Zm,LucidePercentSquare:Ym,LucidePersonStanding:_m,LucidePhone:e6,LucidePhoneCall:Gm,LucidePhoneForwarded:$m,LucidePhoneIncoming:Xm,LucidePhoneMissed:Qm,LucidePhoneOff:Km,LucidePhoneOutgoing:Jm,LucidePi:a6,LucidePiSquare:t6,LucidePiano:n6,LucidePickaxe:r6,LucidePictureInPicture:i6,LucidePictureInPicture2:o6,LucidePieChart:l6,LucidePiggyBank:c6,LucidePilcrow:d6,LucidePilcrowSquare:s6,LucidePill:h6,LucidePin:y6,LucidePinOff:u6,LucidePipette:p6,LucidePizza:k6,LucidePlane:xn,LucidePlaneLanding:m6,LucidePlaneTakeoff:g6,LucidePlay:wn,LucidePlayCircle:f6,LucidePlaySquare:v6,LucidePlug:L6,LucidePlug2:M6,LucidePlugZap:w6,LucidePlugZap2:x6,LucidePlus:S6,LucidePlusCircle:I6,LucidePlusSquare:C6,LucidePocket:q6,LucidePocketKnife:b6,LucidePodcast:z6,LucidePointer:H6,LucidePointerOff:j6,LucidePopcorn:P6,LucidePopsicle:A6,LucidePoundSterling:U6,LucidePower:D6,LucidePowerCircle:V6,LucidePowerOff:F6,LucidePowerSquare:T6,LucidePresentation:R6,LucidePrinter:B6,LucideProjector:E6,LucidePuzzle:N6,LucidePyramid:O6,LucideQrCode:Z6,LucideQuote:Y6,LucideRabbit:W6,LucideRadar:_6,LucideRadiation:G6,LucideRadical:$6,LucideRadio:K6,LucideRadioReceiver:X6,LucideRadioTower:Q6,LucideRadius:J6,LucideRailSymbol:e8,LucideRainbow:t8,LucideRat:a8,LucideRatio:n8,LucideReceipt:u8,LucideReceiptCent:r8,LucideReceiptEuro:o8,LucideReceiptIndianRupee:i8,LucideReceiptJapaneseYen:l8,LucideReceiptPoundSterling:c8,LucideReceiptRussianRuble:s8,LucideReceiptSwissFranc:d8,LucideReceiptText:h8,LucideRectangleHorizontal:y8,LucideRectangleVertical:p8,LucideRecycle:k8,LucideRedo:f8,LucideRedo2:m8,LucideRedoDot:g8,LucideRefreshCcw:M8,LucideRefreshCcwDot:v8,LucideRefreshCw:w8,LucideRefreshCwOff:x8,LucideRefrigerator:L8,LucideRegex:I8,LucideRemoveFormatting:C8,LucideRepeat:q8,LucideRepeat1:S8,LucideRepeat2:b8,LucideReplace:j8,LucideReplaceAll:z8,LucideReply:P8,LucideReplyAll:H8,LucideRewind:A8,LucideRibbon:U8,LucideRocket:V8,LucideRockingChair:F8,LucideRollerCoaster:T8,LucideRotate3D:z1,LucideRotate3d:z1,LucideRotateCcw:D8,LucideRotateCw:R8,LucideRoute:E8,LucideRouteOff:B8,LucideRouter:N8,LucideRows:j1,LucideRows2:j1,LucideRows3:H1,LucideRows4:O8,LucideRss:Z8,LucideRuler:Y8,LucideRussianRuble:W8,LucideSailboat:_8,LucideSalad:G8,LucideSandwich:$8,LucideSatellite:Q8,LucideSatelliteDish:X8,LucideSave:J8,LucideSaveAll:K8,LucideScale:eg,LucideScale3D:P1,LucideScale3d:P1,LucideScaling:tg,LucideScan:cg,LucideScanBarcode:ag,LucideScanEye:ng,LucideScanFace:rg,LucideScanLine:og,LucideScanSearch:ig,LucideScanText:lg,LucideScatterChart:sg,LucideSchool:hg,LucideSchool2:dg,LucideScissors:kg,LucideScissorsLineDashed:ug,LucideScissorsSquare:pg,LucideScissorsSquareDashedBottom:yg,LucideScreenShare:gg,LucideScreenShareOff:mg,LucideScroll:vg,LucideScrollText:fg,LucideSearch:Ig,LucideSearchCheck:Mg,LucideSearchCode:xg,LucideSearchSlash:wg,LucideSearchX:Lg,LucideSend:Sg,LucideSendHorizonal:A1,LucideSendHorizontal:A1,LucideSendToBack:Cg,LucideSeparatorHorizontal:bg,LucideSeparatorVertical:qg,LucideServer:Pg,LucideServerCog:zg,LucideServerCrash:jg,LucideServerOff:Hg,LucideSettings:Ug,LucideSettings2:Ag,LucideShapes:Vg,LucideShare:Tg,LucideShare2:Fg,LucideSheet:Dg,LucideShell:Rg,LucideShield:Ln,LucideShieldAlert:Bg,LucideShieldBan:Eg,LucideShieldCheck:Ng,LucideShieldClose:U1,LucideShieldEllipsis:Og,LucideShieldHalf:Zg,LucideShieldMinus:Yg,LucideShieldOff:Wg,LucideShieldPlus:_g,LucideShieldQuestion:Gg,LucideShieldX:U1,LucideShip:Xg,LucideShipWheel:$g,LucideShirt:Qg,LucideShoppingBag:In,LucideShoppingBasket:Kg,LucideShoppingCart:Jg,LucideShovel:ef,LucideShowerHead:tf,LucideShrink:af,LucideShrub:nf,LucideShuffle:rf,LucideSidebar:L1,LucideSidebarClose:M1,LucideSidebarOpen:w1,LucideSigma:lf,LucideSigmaSquare:of,LucideSignal:uf,LucideSignalHigh:cf,LucideSignalLow:sf,LucideSignalMedium:df,LucideSignalZero:hf,LucideSignpost:pf,LucideSignpostBig:yf,LucideSiren:kf,LucideSkipBack:mf,LucideSkipForward:gf,LucideSkull:ff,LucideSlack:vf,LucideSlash:Mf,LucideSlashSquare:V1,LucideSlice:xf,LucideSliders:Lf,LucideSlidersHorizontal:wf,LucideSmartphone:Sf,LucideSmartphoneCharging:If,LucideSmartphoneNfc:Cf,LucideSmile:qf,LucideSmilePlus:bf,LucideSnail:zf,LucideSnowflake:jf,LucideSofa:Hf,LucideSortAsc:Rt,LucideSortDesc:Ft,LucideSoup:Pf,LucideSpace:Af,LucideSpade:Uf,LucideSparkle:Vf,LucideSparkles:F1,LucideSpeaker:Ff,LucideSpeech:Tf,LucideSpellCheck:Rf,LucideSpellCheck2:Df,LucideSpline:Bf,LucideSplit:Of,LucideSplitSquareHorizontal:Ef,LucideSplitSquareVertical:Nf,LucideSprayCan:Zf,LucideSprout:Yf,LucideSquare:Xf,LucideSquareAsterisk:Et,LucideSquareCode:e1,LucideSquareDashedBottom:_f,LucideSquareDashedBottomCode:Wf,LucideSquareDot:n1,LucideSquareEqual:o1,LucideSquareGantt:Ee,LucideSquareKanban:m1,LucideSquareKanbanDashed:k1,LucideSquarePen:ve,LucideSquareRadical:Gf,LucideSquareSlash:V1,LucideSquareStack:$f,LucideSquareUser:D1,LucideSquareUserRound:T1,LucideSquircle:Qf,LucideSquirrel:Kf,LucideStamp:Jf,LucideStar:a7,LucideStarHalf:e7,LucideStarOff:t7,LucideStars:F1,LucideStepBack:n7,LucideStepForward:r7,LucideStethoscope:Cn,LucideSticker:o7,LucideStickyNote:i7,LucideStopCircle:l7,LucideStore:c7,LucideStretchHorizontal:s7,LucideStretchVertical:d7,LucideStrikethrough:h7,LucideSubscript:u7,LucideSubtitles:Gt,LucideSun:g7,LucideSunDim:y7,LucideSunMedium:p7,LucideSunMoon:k7,LucideSunSnow:m7,LucideSunrise:f7,LucideSunset:v7,LucideSuperscript:M7,LucideSwatchBook:x7,LucideSwissFranc:w7,LucideSwitchCamera:L7,LucideSword:I7,LucideSwords:C7,LucideSyringe:S7,LucideTable:A7,LucideTable2:b7,LucideTableCellsMerge:q7,LucideTableCellsSplit:z7,LucideTableColumnsSplit:j7,LucideTableProperties:H7,LucideTableRowsSplit:P7,LucideTablet:V7,LucideTabletSmartphone:U7,LucideTablets:F7,LucideTag:T7,LucideTags:D7,LucideTally1:R7,LucideTally2:B7,LucideTally3:E7,LucideTally4:N7,LucideTally5:O7,LucideTangent:Z7,LucideTarget:Y7,LucideTelescope:W7,LucideTent:G7,LucideTentTree:_7,LucideTerminal:X7,LucideTerminalSquare:$7,LucideTestTube:K7,LucideTestTube2:Q7,LucideTestTubes:J7,LucideText:rv,LucideTextCursor:tv,LucideTextCursorInput:ev,LucideTextQuote:av,LucideTextSearch:nv,LucideTextSelect:R1,LucideTextSelection:R1,LucideTheater:ov,LucideThermometer:cv,LucideThermometerSnowflake:iv,LucideThermometerSun:lv,LucideThumbsDown:sv,LucideThumbsUp:dv,LucideTicket:gv,LucideTicketCheck:hv,LucideTicketMinus:uv,LucideTicketPercent:yv,LucideTicketPlus:pv,LucideTicketSlash:kv,LucideTicketX:mv,LucideTimer:Mv,LucideTimerOff:fv,LucideTimerReset:vv,LucideToggleLeft:xv,LucideToggleRight:wv,LucideTornado:Lv,LucideTorus:Iv,LucideTouchpad:Sv,LucideTouchpadOff:Cv,LucideTowerControl:bv,LucideToyBrick:qv,LucideTractor:zv,LucideTrafficCone:jv,LucideTrain:B1,LucideTrainFront:Pv,LucideTrainFrontTunnel:Hv,LucideTrainTrack:Av,LucideTramFront:B1,LucideTrash:Vv,LucideTrash2:Uv,LucideTreeDeciduous:Fv,LucideTreePine:Tv,LucideTrees:Dv,LucideTrello:Rv,LucideTrendingDown:Bv,LucideTrendingUp:Ev,LucideTriangle:Ov,LucideTriangleRight:Nv,LucideTrophy:Zv,LucideTruck:Yv,LucideTurtle:Wv,LucideTv:Gv,LucideTv2:_v,LucideTwitch:$v,LucideTwitter:Xv,LucideType:Qv,LucideUmbrella:Jv,LucideUmbrellaOff:Kv,LucideUnderline:e9,LucideUndo:n9,LucideUndo2:t9,LucideUndoDot:a9,LucideUnfoldHorizontal:r9,LucideUnfoldVertical:o9,LucideUngroup:i9,LucideUnlink:c9,LucideUnlink2:l9,LucideUnlock:d9,LucideUnlockKeyhole:s9,LucideUnplug:h9,LucideUpload:y9,LucideUploadCloud:u9,LucideUsb:p9,LucideUser:w9,LucideUser2:W1,LucideUserCheck:k9,LucideUserCheck2:E1,LucideUserCircle:Qt,LucideUserCircle2:Xt,LucideUserCog:m9,LucideUserCog2:N1,LucideUserMinus:g9,LucideUserMinus2:O1,LucideUserPlus:f9,LucideUserPlus2:Z1,LucideUserRound:W1,LucideUserRoundCheck:E1,LucideUserRoundCog:N1,LucideUserRoundMinus:O1,LucideUserRoundPlus:Z1,LucideUserRoundSearch:v9,LucideUserRoundX:Y1,LucideUserSearch:M9,LucideUserSquare:D1,LucideUserSquare2:T1,LucideUserX:x9,LucideUserX2:Y1,LucideUsers:L9,LucideUsers2:_1,LucideUsersRound:_1,LucideUtensils:I9,LucideUtensilsCrossed:ba,LucideUtilityPole:C9,LucideVariable:S9,LucideVault:b9,LucideVegan:q9,LucideVenetianMask:z9,LucideVerified:Ot,LucideVibrate:H9,LucideVibrateOff:j9,LucideVideo:A9,LucideVideoOff:P9,LucideVideotape:U9,LucideView:V9,LucideVoicemail:F9,LucideVolume:B9,LucideVolume1:T9,LucideVolume2:D9,LucideVolumeX:R9,LucideVote:E9,LucideWallet:Z9,LucideWallet2:N9,LucideWalletCards:O9,LucideWallpaper:Y9,LucideWand:_9,LucideWand2:W9,LucideWarehouse:G9,LucideWashingMachine:$9,LucideWatch:X9,LucideWaves:Q9,LucideWaypoints:K9,LucideWebcam:J9,LucideWebhook:tM,LucideWebhookOff:eM,LucideWeight:aM,LucideWheat:rM,LucideWheatOff:nM,LucideWholeWord:oM,LucideWifi:lM,LucideWifiOff:iM,LucideWind:cM,LucideWine:dM,LucideWineOff:sM,LucideWorkflow:hM,LucideWrapText:uM,LucideWrench:yM,LucideX:gM,LucideXCircle:pM,LucideXOctagon:kM,LucideXSquare:mM,LucideYoutube:fM,LucideZap:MM,LucideZapOff:vM,LucideZoomIn:xM,LucideZoomOut:wM,Luggage:V4,LuggageIcon:V4,MSquare:F4,MSquareIcon:F4,Magnet:T4,MagnetIcon:T4,Mail:W4,MailCheck:D4,MailCheckIcon:D4,MailIcon:W4,MailMinus:R4,MailMinusIcon:R4,MailOpen:B4,MailOpenIcon:B4,MailPlus:E4,MailPlusIcon:E4,MailQuestion:N4,MailQuestionIcon:N4,MailSearch:O4,MailSearchIcon:O4,MailWarning:Z4,MailWarningIcon:Z4,MailX:Y4,MailXIcon:Y4,Mailbox:_4,MailboxIcon:_4,Mails:G4,MailsIcon:G4,Map:K4,MapIcon:K4,MapPin:X4,MapPinIcon:X4,MapPinOff:$4,MapPinOffIcon:$4,MapPinned:Q4,MapPinnedIcon:Q4,Martini:J4,MartiniIcon:J4,Maximize:t3,Maximize2:e3,Maximize2Icon:e3,MaximizeIcon:t3,Medal:a3,MedalIcon:a3,Megaphone:r3,MegaphoneIcon:r3,MegaphoneOff:n3,MegaphoneOffIcon:n3,Meh:o3,MehIcon:o3,MemoryStick:i3,MemoryStickIcon:i3,Menu:c3,MenuIcon:c3,MenuSquare:l3,MenuSquareIcon:l3,Merge:s3,MergeIcon:s3,MessageCircle:M3,MessageCircleCode:d3,MessageCircleCodeIcon:d3,MessageCircleDashed:h3,MessageCircleDashedIcon:h3,MessageCircleHeart:u3,MessageCircleHeartIcon:u3,MessageCircleIcon:M3,MessageCircleMore:y3,MessageCircleMoreIcon:y3,MessageCircleOff:p3,MessageCircleOffIcon:p3,MessageCirclePlus:k3,MessageCirclePlusIcon:k3,MessageCircleQuestion:m3,MessageCircleQuestionIcon:m3,MessageCircleReply:g3,MessageCircleReplyIcon:g3,MessageCircleWarning:f3,MessageCircleWarningIcon:f3,MessageCircleX:v3,MessageCircleXIcon:v3,MessageSquare:Mn,MessageSquareCode:x3,MessageSquareCodeIcon:x3,MessageSquareDashed:w3,MessageSquareDashedIcon:w3,MessageSquareDiff:L3,MessageSquareDiffIcon:L3,MessageSquareDot:I3,MessageSquareDotIcon:I3,MessageSquareHeart:C3,MessageSquareHeartIcon:C3,MessageSquareIcon:Mn,MessageSquareMore:S3,MessageSquareMoreIcon:S3,MessageSquareOff:b3,MessageSquareOffIcon:b3,MessageSquarePlus:q3,MessageSquarePlusIcon:q3,MessageSquareQuote:z3,MessageSquareQuoteIcon:z3,MessageSquareReply:j3,MessageSquareReplyIcon:j3,MessageSquareShare:H3,MessageSquareShareIcon:H3,MessageSquareText:P3,MessageSquareTextIcon:P3,MessageSquareWarning:A3,MessageSquareWarningIcon:A3,MessageSquareX:U3,MessageSquareXIcon:U3,MessagesSquare:V3,MessagesSquareIcon:V3,Mic:D3,Mic2:F3,Mic2Icon:F3,MicIcon:D3,MicOff:T3,MicOffIcon:T3,Microscope:R3,MicroscopeIcon:R3,Microwave:B3,MicrowaveIcon:B3,Milestone:E3,MilestoneIcon:E3,Milk:O3,MilkIcon:O3,MilkOff:N3,MilkOffIcon:N3,Minimize:Y3,Minimize2:Z3,Minimize2Icon:Z3,MinimizeIcon:Y3,Minus:G3,MinusCircle:W3,MinusCircleIcon:W3,MinusIcon:G3,MinusSquare:_3,MinusSquareIcon:_3,Monitor:i5,MonitorCheck:$3,MonitorCheckIcon:$3,MonitorDot:X3,MonitorDotIcon:X3,MonitorDown:Q3,MonitorDownIcon:Q3,MonitorIcon:i5,MonitorOff:K3,MonitorOffIcon:K3,MonitorPause:J3,MonitorPauseIcon:J3,MonitorPlay:e5,MonitorPlayIcon:e5,MonitorSmartphone:t5,MonitorSmartphoneIcon:t5,MonitorSpeaker:a5,MonitorSpeakerIcon:a5,MonitorStop:n5,MonitorStopIcon:n5,MonitorUp:r5,MonitorUpIcon:r5,MonitorX:o5,MonitorXIcon:o5,Moon:c5,MoonIcon:c5,MoonStar:l5,MoonStarIcon:l5,MoreHorizontal:s5,MoreHorizontalIcon:s5,MoreVertical:d5,MoreVerticalIcon:d5,Mountain:u5,MountainIcon:u5,MountainSnow:h5,MountainSnowIcon:h5,Mouse:g5,MouseIcon:g5,MousePointer:m5,MousePointer2:y5,MousePointer2Icon:y5,MousePointerClick:p5,MousePointerClickIcon:p5,MousePointerIcon:m5,MousePointerSquare:g1,MousePointerSquareDashed:k5,MousePointerSquareDashedIcon:k5,MousePointerSquareIcon:g1,Move:j5,Move3D:f1,Move3DIcon:f1,Move3d:f1,Move3dIcon:f1,MoveDiagonal:v5,MoveDiagonal2:f5,MoveDiagonal2Icon:f5,MoveDiagonalIcon:v5,MoveDown:w5,MoveDownIcon:w5,MoveDownLeft:M5,MoveDownLeftIcon:M5,MoveDownRight:x5,MoveDownRightIcon:x5,MoveHorizontal:L5,MoveHorizontalIcon:L5,MoveIcon:j5,MoveLeft:I5,MoveLeftIcon:I5,MoveRight:C5,MoveRightIcon:C5,MoveUp:q5,MoveUpIcon:q5,MoveUpLeft:S5,MoveUpLeftIcon:S5,MoveUpRight:b5,MoveUpRightIcon:b5,MoveVertical:z5,MoveVerticalIcon:z5,Music:U5,Music2:H5,Music2Icon:H5,Music3:P5,Music3Icon:P5,Music4:A5,Music4Icon:A5,MusicIcon:U5,Navigation:D5,Navigation2:F5,Navigation2Icon:F5,Navigation2Off:V5,Navigation2OffIcon:V5,NavigationIcon:D5,NavigationOff:T5,NavigationOffIcon:T5,Network:R5,NetworkIcon:R5,Newspaper:B5,NewspaperIcon:B5,Nfc:E5,NfcIcon:E5,Notebook:Y5,NotebookIcon:Y5,NotebookPen:N5,NotebookPenIcon:N5,NotebookTabs:O5,NotebookTabsIcon:O5,NotebookText:Z5,NotebookTextIcon:Z5,NotepadText:_5,NotepadTextDashed:W5,NotepadTextDashedIcon:W5,NotepadTextIcon:_5,Nut:$5,NutIcon:$5,NutOff:G5,NutOffIcon:G5,Octagon:X5,OctagonIcon:X5,Option:Q5,OptionIcon:Q5,Orbit:K5,OrbitIcon:K5,Outdent:J5,OutdentIcon:J5,Package:lm,Package2:em,Package2Icon:em,PackageCheck:tm,PackageCheckIcon:tm,PackageIcon:lm,PackageMinus:am,PackageMinusIcon:am,PackageOpen:nm,PackageOpenIcon:nm,PackagePlus:rm,PackagePlusIcon:rm,PackageSearch:om,PackageSearchIcon:om,PackageX:im,PackageXIcon:im,PaintBucket:cm,PaintBucketIcon:cm,PaintRoller:sm,PaintRollerIcon:sm,Paintbrush:hm,Paintbrush2:dm,Paintbrush2Icon:dm,PaintbrushIcon:hm,Palette:um,PaletteIcon:um,Palmtree:ym,PalmtreeIcon:ym,PanelBottom:mm,PanelBottomClose:pm,PanelBottomCloseIcon:pm,PanelBottomDashed:v1,PanelBottomDashedIcon:v1,PanelBottomIcon:mm,PanelBottomInactive:v1,PanelBottomInactiveIcon:v1,PanelBottomOpen:km,PanelBottomOpenIcon:km,PanelLeft:L1,PanelLeftClose:M1,PanelLeftCloseIcon:M1,PanelLeftDashed:x1,PanelLeftDashedIcon:x1,PanelLeftIcon:L1,PanelLeftInactive:x1,PanelLeftInactiveIcon:x1,PanelLeftOpen:w1,PanelLeftOpenIcon:w1,PanelRight:vm,PanelRightClose:gm,PanelRightCloseIcon:gm,PanelRightDashed:I1,PanelRightDashedIcon:I1,PanelRightIcon:vm,PanelRightInactive:I1,PanelRightInactiveIcon:I1,PanelRightOpen:fm,PanelRightOpenIcon:fm,PanelTop:wm,PanelTopClose:Mm,PanelTopCloseIcon:Mm,PanelTopDashed:C1,PanelTopDashedIcon:C1,PanelTopIcon:wm,PanelTopInactive:C1,PanelTopInactiveIcon:C1,PanelTopOpen:xm,PanelTopOpenIcon:xm,PanelsLeftBottom:Lm,PanelsLeftBottomIcon:Lm,PanelsLeftRight:a1,PanelsLeftRightIcon:a1,PanelsRightBottom:Im,PanelsRightBottomIcon:Im,PanelsTopBottom:H1,PanelsTopBottomIcon:H1,PanelsTopLeft:S1,PanelsTopLeftIcon:S1,Paperclip:Cm,PaperclipIcon:Cm,Parentheses:Sm,ParenthesesIcon:Sm,ParkingCircle:qm,ParkingCircleIcon:qm,ParkingCircleOff:bm,ParkingCircleOffIcon:bm,ParkingMeter:zm,ParkingMeterIcon:zm,ParkingSquare:Hm,ParkingSquareIcon:Hm,ParkingSquareOff:jm,ParkingSquareOffIcon:jm,PartyPopper:Pm,PartyPopperIcon:Pm,Pause:Vm,PauseCircle:Am,PauseCircleIcon:Am,PauseIcon:Vm,PauseOctagon:Um,PauseOctagonIcon:Um,PawPrint:Fm,PawPrintIcon:Fm,PcCase:Tm,PcCaseIcon:Tm,Pen:q1,PenBox:ve,PenBoxIcon:ve,PenIcon:q1,PenLine:b1,PenLineIcon:b1,PenSquare:ve,PenSquareIcon:ve,PenTool:Dm,PenToolIcon:Dm,Pencil:Em,PencilIcon:Em,PencilLine:Rm,PencilLineIcon:Rm,PencilRuler:Bm,PencilRulerIcon:Bm,Pentagon:Nm,PentagonIcon:Nm,Percent:Wm,PercentCircle:Om,PercentCircleIcon:Om,PercentDiamond:Zm,PercentDiamondIcon:Zm,PercentIcon:Wm,PercentSquare:Ym,PercentSquareIcon:Ym,PersonStanding:_m,PersonStandingIcon:_m,Phone:e6,PhoneCall:Gm,PhoneCallIcon:Gm,PhoneForwarded:$m,PhoneForwardedIcon:$m,PhoneIcon:e6,PhoneIncoming:Xm,PhoneIncomingIcon:Xm,PhoneMissed:Qm,PhoneMissedIcon:Qm,PhoneOff:Km,PhoneOffIcon:Km,PhoneOutgoing:Jm,PhoneOutgoingIcon:Jm,Pi:a6,PiIcon:a6,PiSquare:t6,PiSquareIcon:t6,Piano:n6,PianoIcon:n6,Pickaxe:r6,PickaxeIcon:r6,PictureInPicture:i6,PictureInPicture2:o6,PictureInPicture2Icon:o6,PictureInPictureIcon:i6,PieChart:l6,PieChartIcon:l6,PiggyBank:c6,PiggyBankIcon:c6,Pilcrow:d6,PilcrowIcon:d6,PilcrowSquare:s6,PilcrowSquareIcon:s6,Pill:h6,PillIcon:h6,Pin:y6,PinIcon:y6,PinOff:u6,PinOffIcon:u6,Pipette:p6,PipetteIcon:p6,Pizza:k6,PizzaIcon:k6,Plane:xn,PlaneIcon:xn,PlaneLanding:m6,PlaneLandingIcon:m6,PlaneTakeoff:g6,PlaneTakeoffIcon:g6,Play:wn,PlayCircle:f6,PlayCircleIcon:f6,PlayIcon:wn,PlaySquare:v6,PlaySquareIcon:v6,Plug:L6,Plug2:M6,Plug2Icon:M6,PlugIcon:L6,PlugZap:w6,PlugZap2:x6,PlugZap2Icon:x6,PlugZapIcon:w6,Plus:S6,PlusCircle:I6,PlusCircleIcon:I6,PlusIcon:S6,PlusSquare:C6,PlusSquareIcon:C6,Pocket:q6,PocketIcon:q6,PocketKnife:b6,PocketKnifeIcon:b6,Podcast:z6,PodcastIcon:z6,Pointer:H6,PointerIcon:H6,PointerOff:j6,PointerOffIcon:j6,Popcorn:P6,PopcornIcon:P6,Popsicle:A6,PopsicleIcon:A6,PoundSterling:U6,PoundSterlingIcon:U6,Power:D6,PowerCircle:V6,PowerCircleIcon:V6,PowerIcon:D6,PowerOff:F6,PowerOffIcon:F6,PowerSquare:T6,PowerSquareIcon:T6,Presentation:R6,PresentationIcon:R6,Printer:B6,PrinterIcon:B6,Projector:E6,ProjectorIcon:E6,Puzzle:N6,PuzzleIcon:N6,Pyramid:O6,PyramidIcon:O6,QrCode:Z6,QrCodeIcon:Z6,Quote:Y6,QuoteIcon:Y6,Rabbit:W6,RabbitIcon:W6,Radar:_6,RadarIcon:_6,Radiation:G6,RadiationIcon:G6,Radical:$6,RadicalIcon:$6,Radio:K6,RadioIcon:K6,RadioReceiver:X6,RadioReceiverIcon:X6,RadioTower:Q6,RadioTowerIcon:Q6,Radius:J6,RadiusIcon:J6,RailSymbol:e8,RailSymbolIcon:e8,Rainbow:t8,RainbowIcon:t8,Rat:a8,RatIcon:a8,Ratio:n8,RatioIcon:n8,Receipt:u8,ReceiptCent:r8,ReceiptCentIcon:r8,ReceiptEuro:o8,ReceiptEuroIcon:o8,ReceiptIcon:u8,ReceiptIndianRupee:i8,ReceiptIndianRupeeIcon:i8,ReceiptJapaneseYen:l8,ReceiptJapaneseYenIcon:l8,ReceiptPoundSterling:c8,ReceiptPoundSterlingIcon:c8,ReceiptRussianRuble:s8,ReceiptRussianRubleIcon:s8,ReceiptSwissFranc:d8,ReceiptSwissFrancIcon:d8,ReceiptText:h8,ReceiptTextIcon:h8,RectangleHorizontal:y8,RectangleHorizontalIcon:y8,RectangleVertical:p8,RectangleVerticalIcon:p8,Recycle:k8,RecycleIcon:k8,Redo:f8,Redo2:m8,Redo2Icon:m8,RedoDot:g8,RedoDotIcon:g8,RedoIcon:f8,RefreshCcw:M8,RefreshCcwDot:v8,RefreshCcwDotIcon:v8,RefreshCcwIcon:M8,RefreshCw:w8,RefreshCwIcon:w8,RefreshCwOff:x8,RefreshCwOffIcon:x8,Refrigerator:L8,RefrigeratorIcon:L8,Regex:I8,RegexIcon:I8,RemoveFormatting:C8,RemoveFormattingIcon:C8,Repeat:q8,Repeat1:S8,Repeat1Icon:S8,Repeat2:b8,Repeat2Icon:b8,RepeatIcon:q8,Replace:j8,ReplaceAll:z8,ReplaceAllIcon:z8,ReplaceIcon:j8,Reply:P8,ReplyAll:H8,ReplyAllIcon:H8,ReplyIcon:P8,Rewind:A8,RewindIcon:A8,Ribbon:U8,RibbonIcon:U8,Rocket:V8,RocketIcon:V8,RockingChair:F8,RockingChairIcon:F8,RollerCoaster:T8,RollerCoasterIcon:T8,Rotate3D:z1,Rotate3DIcon:z1,Rotate3d:z1,Rotate3dIcon:z1,RotateCcw:D8,RotateCcwIcon:D8,RotateCw:R8,RotateCwIcon:R8,Route:E8,RouteIcon:E8,RouteOff:B8,RouteOffIcon:B8,Router:N8,RouterIcon:N8,Rows:j1,Rows2:j1,Rows2Icon:j1,Rows3:H1,Rows3Icon:H1,Rows4:O8,Rows4Icon:O8,RowsIcon:j1,Rss:Z8,RssIcon:Z8,Ruler:Y8,RulerIcon:Y8,RussianRuble:W8,RussianRubleIcon:W8,Sailboat:_8,SailboatIcon:_8,Salad:G8,SaladIcon:G8,Sandwich:$8,SandwichIcon:$8,Satellite:Q8,SatelliteDish:X8,SatelliteDishIcon:X8,SatelliteIcon:Q8,Save:J8,SaveAll:K8,SaveAllIcon:K8,SaveIcon:J8,Scale:eg,Scale3D:P1,Scale3DIcon:P1,Scale3d:P1,Scale3dIcon:P1,ScaleIcon:eg,Scaling:tg,ScalingIcon:tg,Scan:cg,ScanBarcode:ag,ScanBarcodeIcon:ag,ScanEye:ng,ScanEyeIcon:ng,ScanFace:rg,ScanFaceIcon:rg,ScanIcon:cg,ScanLine:og,ScanLineIcon:og,ScanSearch:ig,ScanSearchIcon:ig,ScanText:lg,ScanTextIcon:lg,ScatterChart:sg,ScatterChartIcon:sg,School:hg,School2:dg,School2Icon:dg,SchoolIcon:hg,Scissors:kg,ScissorsIcon:kg,ScissorsLineDashed:ug,ScissorsLineDashedIcon:ug,ScissorsSquare:pg,ScissorsSquareDashedBottom:yg,ScissorsSquareDashedBottomIcon:yg,ScissorsSquareIcon:pg,ScreenShare:gg,ScreenShareIcon:gg,ScreenShareOff:mg,ScreenShareOffIcon:mg,Scroll:vg,ScrollIcon:vg,ScrollText:fg,ScrollTextIcon:fg,Search:Ig,SearchCheck:Mg,SearchCheckIcon:Mg,SearchCode:xg,SearchCodeIcon:xg,SearchIcon:Ig,SearchSlash:wg,SearchSlashIcon:wg,SearchX:Lg,SearchXIcon:Lg,Send:Sg,SendHorizonal:A1,SendHorizonalIcon:A1,SendHorizontal:A1,SendHorizontalIcon:A1,SendIcon:Sg,SendToBack:Cg,SendToBackIcon:Cg,SeparatorHorizontal:bg,SeparatorHorizontalIcon:bg,SeparatorVertical:qg,SeparatorVerticalIcon:qg,Server:Pg,ServerCog:zg,ServerCogIcon:zg,ServerCrash:jg,ServerCrashIcon:jg,ServerIcon:Pg,ServerOff:Hg,ServerOffIcon:Hg,Settings:Ug,Settings2:Ag,Settings2Icon:Ag,SettingsIcon:Ug,Shapes:Vg,ShapesIcon:Vg,Share:Tg,Share2:Fg,Share2Icon:Fg,ShareIcon:Tg,Sheet:Dg,SheetIcon:Dg,Shell:Rg,ShellIcon:Rg,Shield:Ln,ShieldAlert:Bg,ShieldAlertIcon:Bg,ShieldBan:Eg,ShieldBanIcon:Eg,ShieldCheck:Ng,ShieldCheckIcon:Ng,ShieldClose:U1,ShieldCloseIcon:U1,ShieldEllipsis:Og,ShieldEllipsisIcon:Og,ShieldHalf:Zg,ShieldHalfIcon:Zg,ShieldIcon:Ln,ShieldMinus:Yg,ShieldMinusIcon:Yg,ShieldOff:Wg,ShieldOffIcon:Wg,ShieldPlus:_g,ShieldPlusIcon:_g,ShieldQuestion:Gg,ShieldQuestionIcon:Gg,ShieldX:U1,ShieldXIcon:U1,Ship:Xg,ShipIcon:Xg,ShipWheel:$g,ShipWheelIcon:$g,Shirt:Qg,ShirtIcon:Qg,ShoppingBag:In,ShoppingBagIcon:In,ShoppingBasket:Kg,ShoppingBasketIcon:Kg,ShoppingCart:Jg,ShoppingCartIcon:Jg,Shovel:ef,ShovelIcon:ef,ShowerHead:tf,ShowerHeadIcon:tf,Shrink:af,ShrinkIcon:af,Shrub:nf,ShrubIcon:nf,Shuffle:rf,ShuffleIcon:rf,Sidebar:L1,SidebarClose:M1,SidebarCloseIcon:M1,SidebarIcon:L1,SidebarOpen:w1,SidebarOpenIcon:w1,Sigma:lf,SigmaIcon:lf,SigmaSquare:of,SigmaSquareIcon:of,Signal:uf,SignalHigh:cf,SignalHighIcon:cf,SignalIcon:uf,SignalLow:sf,SignalLowIcon:sf,SignalMedium:df,SignalMediumIcon:df,SignalZero:hf,SignalZeroIcon:hf,Signpost:pf,SignpostBig:yf,SignpostBigIcon:yf,SignpostIcon:pf,Siren:kf,SirenIcon:kf,SkipBack:mf,SkipBackIcon:mf,SkipForward:gf,SkipForwardIcon:gf,Skull:ff,SkullIcon:ff,Slack:vf,SlackIcon:vf,Slash:Mf,SlashIcon:Mf,SlashSquare:V1,SlashSquareIcon:V1,Slice:xf,SliceIcon:xf,Sliders:Lf,SlidersHorizontal:wf,SlidersHorizontalIcon:wf,SlidersIcon:Lf,Smartphone:Sf,SmartphoneCharging:If,SmartphoneChargingIcon:If,SmartphoneIcon:Sf,SmartphoneNfc:Cf,SmartphoneNfcIcon:Cf,Smile:qf,SmileIcon:qf,SmilePlus:bf,SmilePlusIcon:bf,Snail:zf,SnailIcon:zf,Snowflake:jf,SnowflakeIcon:jf,Sofa:Hf,SofaIcon:Hf,SortAsc:Rt,SortAscIcon:Rt,SortDesc:Ft,SortDescIcon:Ft,Soup:Pf,SoupIcon:Pf,Space:Af,SpaceIcon:Af,Spade:Uf,SpadeIcon:Uf,Sparkle:Vf,SparkleIcon:Vf,Sparkles:F1,SparklesIcon:F1,Speaker:Ff,SpeakerIcon:Ff,Speech:Tf,SpeechIcon:Tf,SpellCheck:Rf,SpellCheck2:Df,SpellCheck2Icon:Df,SpellCheckIcon:Rf,Spline:Bf,SplineIcon:Bf,Split:Of,SplitIcon:Of,SplitSquareHorizontal:Ef,SplitSquareHorizontalIcon:Ef,SplitSquareVertical:Nf,SplitSquareVerticalIcon:Nf,SprayCan:Zf,SprayCanIcon:Zf,Sprout:Yf,SproutIcon:Yf,Square:Xf,SquareAsterisk:Et,SquareAsteriskIcon:Et,SquareCode:e1,SquareCodeIcon:e1,SquareDashedBottom:_f,SquareDashedBottomCode:Wf,SquareDashedBottomCodeIcon:Wf,SquareDashedBottomIcon:_f,SquareDot:n1,SquareDotIcon:n1,SquareEqual:o1,SquareEqualIcon:o1,SquareGantt:Ee,SquareGanttIcon:Ee,SquareIcon:Xf,SquareKanban:m1,SquareKanbanDashed:k1,SquareKanbanDashedIcon:k1,SquareKanbanIcon:m1,SquarePen:ve,SquarePenIcon:ve,SquareRadical:Gf,SquareRadicalIcon:Gf,SquareSlash:V1,SquareSlashIcon:V1,SquareStack:$f,SquareStackIcon:$f,SquareUser:D1,SquareUserIcon:D1,SquareUserRound:T1,SquareUserRoundIcon:T1,Squircle:Qf,SquircleIcon:Qf,Squirrel:Kf,SquirrelIcon:Kf,Stamp:Jf,StampIcon:Jf,Star:a7,StarHalf:e7,StarHalfIcon:e7,StarIcon:a7,StarOff:t7,StarOffIcon:t7,Stars:F1,StarsIcon:F1,StepBack:n7,StepBackIcon:n7,StepForward:r7,StepForwardIcon:r7,Stethoscope:Cn,StethoscopeIcon:Cn,Sticker:o7,StickerIcon:o7,StickyNote:i7,StickyNoteIcon:i7,StopCircle:l7,StopCircleIcon:l7,Store:c7,StoreIcon:c7,StretchHorizontal:s7,StretchHorizontalIcon:s7,StretchVertical:d7,StretchVerticalIcon:d7,Strikethrough:h7,StrikethroughIcon:h7,Subscript:u7,SubscriptIcon:u7,Subtitles:Gt,SubtitlesIcon:Gt,Sun:g7,SunDim:y7,SunDimIcon:y7,SunIcon:g7,SunMedium:p7,SunMediumIcon:p7,SunMoon:k7,SunMoonIcon:k7,SunSnow:m7,SunSnowIcon:m7,Sunrise:f7,SunriseIcon:f7,Sunset:v7,SunsetIcon:v7,Superscript:M7,SuperscriptIcon:M7,SwatchBook:x7,SwatchBookIcon:x7,SwissFranc:w7,SwissFrancIcon:w7,SwitchCamera:L7,SwitchCameraIcon:L7,Sword:I7,SwordIcon:I7,Swords:C7,SwordsIcon:C7,Syringe:S7,SyringeIcon:S7,Table:A7,Table2:b7,Table2Icon:b7,TableCellsMerge:q7,TableCellsMergeIcon:q7,TableCellsSplit:z7,TableCellsSplitIcon:z7,TableColumnsSplit:j7,TableColumnsSplitIcon:j7,TableIcon:A7,TableProperties:H7,TablePropertiesIcon:H7,TableRowsSplit:P7,TableRowsSplitIcon:P7,Tablet:V7,TabletIcon:V7,TabletSmartphone:U7,TabletSmartphoneIcon:U7,Tablets:F7,TabletsIcon:F7,Tag:T7,TagIcon:T7,Tags:D7,TagsIcon:D7,Tally1:R7,Tally1Icon:R7,Tally2:B7,Tally2Icon:B7,Tally3:E7,Tally3Icon:E7,Tally4:N7,Tally4Icon:N7,Tally5:O7,Tally5Icon:O7,Tangent:Z7,TangentIcon:Z7,Target:Y7,TargetIcon:Y7,Telescope:W7,TelescopeIcon:W7,Tent:G7,TentIcon:G7,TentTree:_7,TentTreeIcon:_7,Terminal:X7,TerminalIcon:X7,TerminalSquare:$7,TerminalSquareIcon:$7,TestTube:K7,TestTube2:Q7,TestTube2Icon:Q7,TestTubeIcon:K7,TestTubes:J7,TestTubesIcon:J7,Text:rv,TextCursor:tv,TextCursorIcon:tv,TextCursorInput:ev,TextCursorInputIcon:ev,TextIcon:rv,TextQuote:av,TextQuoteIcon:av,TextSearch:nv,TextSearchIcon:nv,TextSelect:R1,TextSelectIcon:R1,TextSelection:R1,TextSelectionIcon:R1,Theater:ov,TheaterIcon:ov,Thermometer:cv,ThermometerIcon:cv,ThermometerSnowflake:iv,ThermometerSnowflakeIcon:iv,ThermometerSun:lv,ThermometerSunIcon:lv,ThumbsDown:sv,ThumbsDownIcon:sv,ThumbsUp:dv,ThumbsUpIcon:dv,Ticket:gv,TicketCheck:hv,TicketCheckIcon:hv,TicketIcon:gv,TicketMinus:uv,TicketMinusIcon:uv,TicketPercent:yv,TicketPercentIcon:yv,TicketPlus:pv,TicketPlusIcon:pv,TicketSlash:kv,TicketSlashIcon:kv,TicketX:mv,TicketXIcon:mv,Timer:Mv,TimerIcon:Mv,TimerOff:fv,TimerOffIcon:fv,TimerReset:vv,TimerResetIcon:vv,ToggleLeft:xv,ToggleLeftIcon:xv,ToggleRight:wv,ToggleRightIcon:wv,Tornado:Lv,TornadoIcon:Lv,Torus:Iv,TorusIcon:Iv,Touchpad:Sv,TouchpadIcon:Sv,TouchpadOff:Cv,TouchpadOffIcon:Cv,TowerControl:bv,TowerControlIcon:bv,ToyBrick:qv,ToyBrickIcon:qv,Tractor:zv,TractorIcon:zv,TrafficCone:jv,TrafficConeIcon:jv,Train:B1,TrainFront:Pv,TrainFrontIcon:Pv,TrainFrontTunnel:Hv,TrainFrontTunnelIcon:Hv,TrainIcon:B1,TrainTrack:Av,TrainTrackIcon:Av,TramFront:B1,TramFrontIcon:B1,Trash:Vv,Trash2:Uv,Trash2Icon:Uv,TrashIcon:Vv,TreeDeciduous:Fv,TreeDeciduousIcon:Fv,TreePine:Tv,TreePineIcon:Tv,Trees:Dv,TreesIcon:Dv,Trello:Rv,TrelloIcon:Rv,TrendingDown:Bv,TrendingDownIcon:Bv,TrendingUp:Ev,TrendingUpIcon:Ev,Triangle:Ov,TriangleIcon:Ov,TriangleRight:Nv,TriangleRightIcon:Nv,Trophy:Zv,TrophyIcon:Zv,Truck:Yv,TruckIcon:Yv,Turtle:Wv,TurtleIcon:Wv,Tv:Gv,Tv2:_v,Tv2Icon:_v,TvIcon:Gv,Twitch:$v,TwitchIcon:$v,Twitter:Xv,TwitterIcon:Xv,Type:Qv,TypeIcon:Qv,Umbrella:Jv,UmbrellaIcon:Jv,UmbrellaOff:Kv,UmbrellaOffIcon:Kv,Underline:e9,UnderlineIcon:e9,Undo:n9,Undo2:t9,Undo2Icon:t9,UndoDot:a9,UndoDotIcon:a9,UndoIcon:n9,UnfoldHorizontal:r9,UnfoldHorizontalIcon:r9,UnfoldVertical:o9,UnfoldVerticalIcon:o9,Ungroup:i9,UngroupIcon:i9,Unlink:c9,Unlink2:l9,Unlink2Icon:l9,UnlinkIcon:c9,Unlock:d9,UnlockIcon:d9,UnlockKeyhole:s9,UnlockKeyholeIcon:s9,Unplug:h9,UnplugIcon:h9,Upload:y9,UploadCloud:u9,UploadCloudIcon:u9,UploadIcon:y9,Usb:p9,UsbIcon:p9,User:w9,User2:W1,User2Icon:W1,UserCheck:k9,UserCheck2:E1,UserCheck2Icon:E1,UserCheckIcon:k9,UserCircle:Qt,UserCircle2:Xt,UserCircle2Icon:Xt,UserCircleIcon:Qt,UserCog:m9,UserCog2:N1,UserCog2Icon:N1,UserCogIcon:m9,UserIcon:w9,UserMinus:g9,UserMinus2:O1,UserMinus2Icon:O1,UserMinusIcon:g9,UserPlus:f9,UserPlus2:Z1,UserPlus2Icon:Z1,UserPlusIcon:f9,UserRound:W1,UserRoundCheck:E1,UserRoundCheckIcon:E1,UserRoundCog:N1,UserRoundCogIcon:N1,UserRoundIcon:W1,UserRoundMinus:O1,UserRoundMinusIcon:O1,UserRoundPlus:Z1,UserRoundPlusIcon:Z1,UserRoundSearch:v9,UserRoundSearchIcon:v9,UserRoundX:Y1,UserRoundXIcon:Y1,UserSearch:M9,UserSearchIcon:M9,UserSquare:D1,UserSquare2:T1,UserSquare2Icon:T1,UserSquareIcon:D1,UserX:x9,UserX2:Y1,UserX2Icon:Y1,UserXIcon:x9,Users:L9,Users2:_1,Users2Icon:_1,UsersIcon:L9,UsersRound:_1,UsersRoundIcon:_1,Utensils:I9,UtensilsCrossed:ba,UtensilsCrossedIcon:ba,UtensilsIcon:I9,UtilityPole:C9,UtilityPoleIcon:C9,Variable:S9,VariableIcon:S9,Vault:b9,VaultIcon:b9,Vegan:q9,VeganIcon:q9,VenetianMask:z9,VenetianMaskIcon:z9,Verified:Ot,VerifiedIcon:Ot,Vibrate:H9,VibrateIcon:H9,VibrateOff:j9,VibrateOffIcon:j9,Video:A9,VideoIcon:A9,VideoOff:P9,VideoOffIcon:P9,Videotape:U9,VideotapeIcon:U9,View:V9,ViewIcon:V9,Voicemail:F9,VoicemailIcon:F9,Volume:B9,Volume1:T9,Volume1Icon:T9,Volume2:D9,Volume2Icon:D9,VolumeIcon:B9,VolumeX:R9,VolumeXIcon:R9,Vote:E9,VoteIcon:E9,Wallet:Z9,Wallet2:N9,Wallet2Icon:N9,WalletCards:O9,WalletCardsIcon:O9,WalletIcon:Z9,Wallpaper:Y9,WallpaperIcon:Y9,Wand:_9,Wand2:W9,Wand2Icon:W9,WandIcon:_9,Warehouse:G9,WarehouseIcon:G9,WashingMachine:$9,WashingMachineIcon:$9,Watch:X9,WatchIcon:X9,Waves:Q9,WavesIcon:Q9,Waypoints:K9,WaypointsIcon:K9,Webcam:J9,WebcamIcon:J9,Webhook:tM,WebhookIcon:tM,WebhookOff:eM,WebhookOffIcon:eM,Weight:aM,WeightIcon:aM,Wheat:rM,WheatIcon:rM,WheatOff:nM,WheatOffIcon:nM,WholeWord:oM,WholeWordIcon:oM,Wifi:lM,WifiIcon:lM,WifiOff:iM,WifiOffIcon:iM,Wind:cM,WindIcon:cM,Wine:dM,WineIcon:dM,WineOff:sM,WineOffIcon:sM,Workflow:hM,WorkflowIcon:hM,WrapText:uM,WrapTextIcon:uM,Wrench:yM,WrenchIcon:yM,X:gM,XCircle:pM,XCircleIcon:pM,XIcon:gM,XOctagon:kM,XOctagonIcon:kM,XSquare:mM,XSquareIcon:mM,Youtube:fM,YoutubeIcon:fM,Zap:MM,ZapIcon:MM,ZapOff:vM,ZapOffIcon:vM,ZoomIn:xM,ZoomInIcon:xM,ZoomOut:wM,ZoomOutIcon:wM,createLucideIcon:n,icons:kH},Symbol.toStringTag,{value:"Module"}));function gH(){return d.jsx("header",{className:"bg-blue-600 text-white",children:d.jsx("div",{className:"container mx-auto px-4",children:d.jsxs("div",{className:"flex items-center justify-between h-16",children:[d.jsxs(Dw,{to:"/",className:"flex items-center space-x-2",children:[d.jsx(mn,{size:32}),d.jsx("span",{className:"text-xl font-bold",children:"JD Class 여행영어"})]}),d.jsxs(Dw,{to:"/",className:"flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md transition-colors",children:[d.jsx(gn,{size:20}),d.jsx("span",{children:"메인으로"})]})]})})})}const fH=[{id:1,title:"공항에서 유용한 여행영어 표현",icon:"Plane",subcategories:[{id:11,title:"공항 보안 검색대에서 영어로 대화하는 법"},{id:12,title:"비행기 탑승 수속 영어 – 체크인부터 출국 심사까지"}]},{id:2,title:"호텔 체크인 & 체크아웃 필수 영어 회화",icon:"Hotel",subcategories:[{id:21,title:"호텔 예약할 때 영어 표현 모음"},{id:22,title:"룸 서비스 요청할 때 영어 이렇게 말하세요!"}]},{id:3,title:"식당에서 영어로 주문하는 방법",icon:"UtensilsCrossed",subcategories:[{id:31,title:"패스트푸드점 & 레스토랑 영어 차이점 정리"},{id:32,title:"웨이터에게 요청할 때 필요한 영어 표현"}]},{id:4,title:"쇼핑할 때 유용한 영어 회화",icon:"ShoppingBag",subcategories:[{id:41,title:"가격 흥정할 때 영어로 대화하는 법"},{id:42,title:"면세점 쇼핑 시 필수 영어 표현"}]},{id:5,title:"길 찾기 & 교통수단 이용 영어 표현",icon:"Map",subcategories:[{id:51,title:"택시 탈 때 유용한 영어 문장"},{id:52,title:"대중교통(버스, 지하철)에서 영어로 길 묻기"}]},{id:6,title:"해외에서 긴급 상황 시 사용하는 영어",icon:"AlertTriangle",subcategories:[{id:61,title:"여권 분실! 경찰서에서 영어로 신고하는 방법"},{id:62,title:"병원 방문 시 영어 회화 – 증상 설명부터 진료까지"}]},{id:7,title:"기내에서 승무원과 대화하는 영어 표현",icon:"Headphones",subcategories:[{id:71,title:"기내에서 음료 주문할 때 영어로 말하기"},{id:72,title:"비행기 안에서 요청사항 전달하는 영어 표현"}]}];function vH({category:e}){const t=mH[e.icon];return d.jsx(Dw,{to:`/category/${e.id}`,className:"block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200",children:d.jsxs("div",{className:"p-6",children:[d.jsxs("div",{className:"flex items-center space-x-4",children:[d.jsx("div",{className:"bg-blue-100 p-3 rounded-full",children:d.jsx(t,{className:"w-6 h-6 text-blue-600"})}),d.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:e.title})]}),d.jsx("div",{className:"mt-4 space-y-2",children:e.subcategories.map(a=>d.jsxs("p",{className:"text-sm text-gray-600 ml-14",children:["• ",a.title]},a.id))})]})})}function bt(){return d.jsx("div",{className:"w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4",children:d.jsx("div",{className:"container mx-auto",children:d.jsxs("div",{className:"flex flex-col items-center justify-center text-center space-y-2",children:[d.jsx("p",{className:"text-lg font-semibold",children:"망설이면 1년 뒤에도 그대로! 지금 영어로 말해보세요 🗣️✨"}),d.jsx("a",{href:"https://native05.com",target:"_blank",rel:"noopener noreferrer",className:"bg-white text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-blue-50 transition-colors duration-200",children:"📍무료 수업 경험해보기 – 여기 클릭!"}),d.jsxs("p",{className:"text-sm bg-blue-700 px-4 py-1 rounded-full inline-block",children:["🎁 할인코드: ",d.jsx("span",{className:"font-bold",children:"SPEAKNOW"})," (지금 등록하면 즉시 할인!)"]})]})})})}function MH(){return d.jsxs("div",{className:"min-h-screen bg-gray-50",children:[d.jsx(bt,{}),d.jsxs("div",{className:"container mx-auto px-4 py-8",children:[d.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-8",children:"실용적인 여행 영어 학습"}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:fH.map(e=>d.jsx(vH,{category:e},e.id))})]})]})}const JI=[{id:1,audioUrl:"/audio/question-1.mp3",text:"Hello, how are you today?",meaning:"안녕하세요, 오늘 어떠세요?",answers:{korean:["좋아요, 감사합니다. 당신은요?","나쁘지 않아요. 여행이 기대되네요."],english:["I'm good, thank you. How about you?","Not bad, just excited for my trip."]}},{id:2,audioUrl:"/audio/question-2.mp3",text:"Please place your belongings on the conveyor belt.",meaning:"소지품을 컨베이어 벨트에 올려주세요.",answers:{korean:["네, 여기 있습니다.","알겠습니다, 잠시만요."],english:["Sure, here they are.","Alright, one moment."]}},{id:3,audioUrl:"/audio/question-3.mp3",text:"Do you have any electronic devices in your bag?",meaning:"가방 안에 전자기기가 있나요?",answers:{korean:["네, 노트북과 휴대폰이 있습니다.","태블릿과 이어폰만 있어요."],english:["Yes, I have a laptop and a phone.","Just a tablet and earbuds."]}},{id:4,audioUrl:"/audio/question-4.mp3",text:"Please take off your shoes, belt, and jacket.",meaning:"신발, 벨트, 재킷을 벗어주세요.",answers:{korean:["네, 지금 벗겠습니다.","알겠습니다."],english:["Of course, I'll do that now.","No problem."]}},{id:5,audioUrl:"/audio/question-5.mp3",text:"Empty your pockets and put everything in the tray.",meaning:"주머니를 비우고 모든 물건을 트레이에 넣어주세요.",answers:{korean:["알겠습니다. 주머니 확인해볼게요.","비어있는 것 같은데, 다시 확인해볼게요."],english:["Alright, let me check my pockets.","I think they're empty, but I'll double-check."]}},{id:6,audioUrl:"/audio/question-6.mp3",text:"Step forward, please.",meaning:"앞으로 나와 주세요.",answers:{korean:["네, 갑니다.","네."],english:["Okay, here I go.","Sure."]}},{id:7,audioUrl:"/audio/question-7.mp3",text:"Raise your arms, please.",meaning:"팔을 들어주세요.",answers:{korean:["이렇게요?","네."],english:["Like this?","Got it."]}},{id:8,audioUrl:"/audio/question-8.mp3",text:"Face the scanner and stand still.",meaning:"스캐너를 바라보고 가만히 서주세요.",answers:{korean:["알겠습니다.","알겠습니다. 움직이지 않을게요."],english:["Understood.","Alright, I won't move."]}},{id:9,audioUrl:"/audio/question-9.mp3",text:"Do you have any liquids, gels, or aerosols?",meaning:"액체, 젤, 스프레이류가 있나요?",answers:{korean:["네, 작은 로션병이 있습니다.","아니요, 액체류는 없습니다."],english:["Yes, I have a small bottle of lotion.","No, I don't have any liquids."]}},{id:10,audioUrl:"/audio/question-10.mp3",text:"All liquids must be under 100 milliliters and placed in a clear plastic bag.",meaning:"모든 액체는 100ml 이하이고 투명한 비닐봉지에 넣어야 합니다.",answers:{korean:["네, 비닐봉지 안에 넣어뒀어요.","아, 몰랐어요. 이거 버려도 될까요?"],english:["Got it! I have them in a plastic bag.","Oh, I didn't know that. Can I throw this away?"]}},{id:11,audioUrl:"/audio/question-11.mp3",text:"Do you have a laptop or tablet?",meaning:"노트북이나 태블릿이 있나요?",answers:{korean:["네, 가방 안에 노트북이 있습니다.","태블릿만 있어요. 꺼내야 하나요?"],english:["Yes, I have a laptop in my bag.","Just a tablet, should I take it out?"]}},{id:12,audioUrl:"/audio/question-12.mp3",text:"Please take your laptop out of the bag and place it in a separate tray.",meaning:"노트북을 가방에서 꺼내서 별도의 트레이에 놓아주세요.",answers:{korean:["네, 여기 있습니다.","네, 잠시만요."],english:["Sure, here it is.","Okay, one moment."]}},{id:13,audioUrl:"/audio/question-13.mp3",text:"Are you carrying any sharp objects?",meaning:"날카로운 물건을 가지고 있나요?",answers:{korean:["아니요, 없습니다.","손톱깎이가 있는데 괜찮나요?"],english:["No, I don't have any.","I have a nail clipper. Is that okay?"]}},{id:14,audioUrl:"/audio/question-14.mp3",text:"Is there anything in your pockets?",meaning:"주머니에 아무것도 없나요?",answers:{korean:["한번 확인해볼게요… 네, 없어요.","동전만 있어요. 꺼내야 하나요?"],english:["Let me check… No, nothing.","Just some coins. Should I take them out?"]}},{id:15,audioUrl:"/audio/question-15.mp3",text:"Do you have any prohibited items in your bag?",meaning:"가방 안에 금지 물품이 있나요?",answers:{korean:["아니요, 오기 전에 확인했어요.","없는 것 같은데, 확인해보시겠어요?"],english:["No, I made sure to check before coming.","I don't think so. Would you like to check?"]}},{id:16,audioUrl:"/audio/question-16.mp3",text:"We need to inspect your bag. Please step aside.",meaning:"가방을 검사해야 합니다. 옆으로 와주세요.",answers:{korean:["네, 검사하세요.","뭔가 문제가 있나요?"],english:["Sure, go ahead.","Is something wrong?"]}},{id:17,audioUrl:"/audio/question-17.mp3",text:"Can I check inside your bag?",meaning:"가방 안을 확인해도 될까요?",answers:{korean:["네, 확인하세요.","네, 그러세요."],english:["Of course, go ahead.","Yes, please do."]}},{id:18,audioUrl:"/audio/question-18.mp3",text:"Please open your bag for inspection.",meaning:"가방을 열어서 검사받아 주세요.",answers:{korean:["네, 열겠습니다.","여기 있습니다."],english:["Sure, let me open it.","Here you go."]}},{id:19,audioUrl:"/audio/question-19.mp3",text:"We need to do a secondary screening. Please follow me.",meaning:"추가 검사가 필요합니다. 저를 따라오세요.",answers:{korean:["네, 이해합니다.","문제가 있나요?"],english:["Okay, I understand.","Is there a problem?"]}},{id:20,audioUrl:"/audio/question-20.mp3",text:"Please spread your arms and stand still.",meaning:"팔을 벌리고 가만히 서주세요.",answers:{korean:["네, 알겠습니다.","이렇게요?"],english:["Got it.","Like this?"]}},{id:21,audioUrl:"/audio/question-21.mp3",text:"We need to pat you down. Is that okay?",meaning:"몸 수색을 해야 합니다. 괜찮으신가요?",answers:{korean:["네, 괜찮습니다.","네, 문제없어요."],english:["Yes, go ahead.","No problem."]}},{id:22,audioUrl:"/audio/question-22.mp3",text:"You have been randomly selected for additional screening.",meaning:"무작위 추가 검색에 선정되었습니다.",answers:{korean:["네, 이해합니다.","알겠습니다. 무엇을 해야 하나요?"],english:["Okay, I understand.","Alright, what do I need to do?"]}},{id:23,audioUrl:"/audio/question-23.mp3",text:"You may now collect your belongings.",meaning:"이제 소지품을 가져가셔도 됩니다.",answers:{korean:["감사합니다.","네, 알겠습니다."],english:["Thank you.","Alright, got it."]}},{id:24,audioUrl:"/audio/question-24.mp3",text:"You're all set. Have a great flight!",meaning:"이상 없습니다. 좋은 여행 되세요!",answers:{korean:["감사합니다! 당신도요!","감사합니다!"],english:["Thank you! You too!","Appreciate it!"]}},{id:25,audioUrl:"/audio/question-25.mp3",text:"Please put your shoes and belt back on over there.",meaning:"저쪽에서 신발과 벨트를 다시 착용하세요.",answers:{korean:["네, 감사합니다.","알겠습니다."],english:["Got it, thanks.","Okay, will do."]}},{id:26,audioUrl:"/audio/question-26.mp3",text:"Thank you for your cooperation.",meaning:"협조해 주셔서 감사합니다.",answers:{korean:["아니에요, 좋은 하루 되세요!","별말씀을요."],english:["No problem, have a good day!","You're welcome."]}},{id:27,audioUrl:"/audio/question-27.mp3",text:"Have a safe trip!",meaning:"안전한 여행 되세요!",answers:{korean:["감사합니다! 당신도요!","그럴게요! 감사합니다."],english:["Thank you! Same to you!","Will do! Thanks!"]}},{id:28,audioUrl:"/audio/question-28.mp3",text:"What is this item in your bag?",meaning:"가방 안의 이 물건은 무엇인가요?",answers:{korean:["보조배터리입니다.","제 전기 면도기예요."],english:["It's a power bank.","That's my electric razor."]}},{id:29,audioUrl:"/audio/question-29.mp3",text:"Do you speak English?",meaning:"영어를 하실 줄 아시나요?",answers:{korean:["조금 합니다.","네, 합니다."],english:["A little bit.","Yes, I do."]}},{id:30,audioUrl:"/audio/question-30.mp3",text:"Can I bring this on the plane?",meaning:"이거 기내에 가져갈 수 있나요?",answers:{korean:["네, 보안 규정을 준수하면 가능합니다.","그럴 것 같은데, 확인해보시는 게 좋을 것 같아요."],english:["Yes, as long as it meets the security regulations.","I think so, but you might want to check."]}}],eC=[{id:1,audioUrl:"/audio/question-1.mp3",text:"Hello, how are you today?",meaning:"안녕하세요, 오늘 어떠세요?",answers:{korean:["좋아요, 감사합니다. 당신은요?","나쁘지 않아요. 여행이 기대되네요."],english:["I'm good, thank you. How about you?","Not bad, just excited for my trip."]}},{id:2,audioUrl:"/audio/question-2.mp3",text:"I'd like to check in for my flight to New York.",meaning:"뉴욕행 비행기 체크인을 하려고 합니다.",answers:{korean:["네, 여권과 항공권을 보여주시겠어요?","네, 여기 있습니다."],english:["Sure, may I see your passport and ticket?","Of course, here they are."]}},{id:3,audioUrl:"/audio/question-3.mp3",text:"Do you have any luggage to check in?",meaning:"부칠 짐이 있나요?",answers:{korean:["네, 여행 가방 하나 있습니다.","아니요, 기내 반입 가방만 있습니다."],english:["Yes, I have one suitcase.","No, I only have carry-on luggage."]}},{id:4,audioUrl:"/audio/question-4.mp3",text:"Can I have a window or aisle seat?",meaning:"창가 좌석이나 통로 좌석으로 받을 수 있나요?",answers:{korean:["네, 창가 좌석으로 배정해드릴게요.","죄송하지만, 가운데 좌석만 남아 있습니다."],english:["Sure, I can assign you a window seat.","I'm sorry, but only middle seats are available."]}},{id:5,audioUrl:"/audio/question-5.mp3",text:"Do you have any carry-on luggage?",meaning:"기내 반입 수하물이 있나요?",answers:{korean:["네, 이 배낭 하나요.","아니요, 모든 짐을 부쳤습니다."],english:["Yes, just this backpack.","No, I checked in all my luggage."]}},{id:6,audioUrl:"/audio/question-6.mp3",text:"Here is your boarding pass.",meaning:"탑승권 여기 있습니다.",answers:{korean:["감사합니다. 제 탑승구 번호는 몇 번인가요?","12번 탑승구입니다. 탑승은 오후 5시 30분에 시작합니다."],english:["Thank you. What is my gate number?","It's Gate 12. Boarding starts at 5:30 PM."]}},{id:7,audioUrl:"/audio/question-7.mp3",text:"What time does boarding start?",meaning:"탑승은 몇 시에 시작하나요?",answers:{korean:["출발 45분 전에 탑승이 시작됩니다.","변경 사항은 전광판을 확인해주세요."],english:["Boarding starts 45 minutes before departure.","Please check the screens for any updates."]}},{id:8,audioUrl:"/audio/question-8.mp3",text:"Your baggage is overweight.",meaning:"수하물 무게가 초과되었습니다.",answers:{korean:["오, 추가 요금은 얼마인가요?","초과된 무게에 대해 50달러를 내셔야 합니다."],english:["Oh, how much do I need to pay?","You need to pay $50 for the excess weight."]}},{id:9,audioUrl:"/audio/question-9.mp3",text:"Do you have any prohibited items in your bag?",meaning:"가방 안에 금지 물품이 있나요?",answers:{korean:["아니요, 오기 전에 다 확인했습니다.","없는 것 같은데, 확인해보시겠어요?"],english:["No, I checked everything before coming.","I don't think so. Do you want to check?"]}},{id:10,audioUrl:"/audio/question-10.mp3",text:"Please place your belongings on the conveyor belt.",meaning:"소지품을 컨베이어 벨트에 올려주세요.",answers:{korean:["네, 여기 있습니다.","알겠습니다, 잠시만요."],english:["Sure, here they are.","Alright, one moment."]}},{id:11,audioUrl:"/audio/question-11.mp3",text:"Do you have any electronic devices in your bag?",meaning:"가방 안에 전자기기가 있나요?",answers:{korean:["네, 노트북과 휴대폰이 있습니다.","태블릿과 이어폰만 있어요."],english:["Yes, I have a laptop and a phone.","Just a tablet and earbuds."]}},{id:12,audioUrl:"/audio/question-12.mp3",text:"Please take off your shoes, belt, and jacket.",meaning:"신발, 벨트, 재킷을 벗어주세요.",answers:{korean:["네, 지금 벗겠습니다.","알겠습니다."],english:["Of course, I'll do that now.","No problem."]}},{id:13,audioUrl:"/audio/question-13.mp3",text:"Empty your pockets and put everything in the tray.",meaning:"주머니를 비우고 모든 물건을 트레이에 넣어주세요.",answers:{korean:["알겠습니다. 주머니 확인해볼게요.","비어있는 것 같은데, 다시 확인해볼게요."],english:["Alright, let me check my pockets.","I think they're empty, but I'll double-check."]}},{id:14,audioUrl:"/audio/question-14.mp3",text:"Step forward, please.",meaning:"앞으로 나와 주세요.",answers:{korean:["네, 갑니다.","네."],english:["Okay, here I go.","Sure."]}},{id:15,audioUrl:"/audio/question-15.mp3",text:"Raise your arms, please.",meaning:"팔을 들어주세요.",answers:{korean:["이렇게요?","네."],english:["Like this?","Got it."]}},{id:16,audioUrl:"/audio/question-16.mp3",text:"Face the scanner and stand still.",meaning:"스캐너를 바라보고 가만히 서주세요.",answers:{korean:["알겠습니다.","알겠습니다. 움직이지 않을게요."],english:["Understood.","Alright, I won't move."]}},{id:17,audioUrl:"/audio/question-17.mp3",text:"Do you have any liquids, gels, or aerosols?",meaning:"액체, 젤, 스프레이류가 있나요?",answers:{korean:["네, 작은 로션병이 있습니다.","아니요, 액체류는 없습니다."],english:["Yes, I have a small bottle of lotion.","No, I don't have any liquids."]}},{id:18,audioUrl:"/audio/question-18.mp3",text:"Your passport and boarding pass, please.",meaning:"여권과 탑승권을 보여주세요.",answers:{korean:["여기 있습니다.","네, 여기 있습니다."],english:["Here you go.","Sure, here they are."]}},{id:19,audioUrl:"/audio/question-19.mp3",text:"Where are you traveling today?",meaning:"오늘 어디로 가시나요?",answers:{korean:["로스앤젤레스에 갑니다.","도쿄로 가는 환승 비행편이 있습니다."],english:["I'm going to Los Angeles.","I have a connecting flight to Tokyo."]}},{id:20,audioUrl:"/audio/question-20.mp3",text:"What is the purpose of your visit?",meaning:"여행 목적이 무엇인가요?",answers:{korean:["출장입니다.","휴가차 왔습니다."],english:["I'm traveling for business.","I'm here for vacation."]}},{id:21,audioUrl:"/audio/question-21.mp3",text:"How long will you be staying?",meaning:"얼마나 머무를 예정인가요?",answers:{korean:["2주 동안 머무를 예정입니다.","5일 동안입니다."],english:["I'll be staying for two weeks.","Just for five days."]}},{id:22,audioUrl:"/audio/question-22.mp3",text:"Where will you be staying?",meaning:"어디에서 머무를 예정인가요?",answers:{korean:["시내 호텔에서 머무를 예정입니다.","친구 집에서 머물 예정입니다."],english:["I'll be staying at a hotel in downtown.","At my friend's house."]}},{id:23,audioUrl:"/audio/question-23.mp3",text:"Do you have a return ticket?",meaning:"돌아가는 항공권이 있나요?",answers:{korean:["네, 여기 제 귀국 항공권이 있습니다.","아직 예약하지 않았습니다."],english:["Yes, here's my return ticket.","I haven't booked it yet."]}},{id:24,audioUrl:"/audio/question-24.mp3",text:"Have you ever been to this country before?",meaning:"이 나라에 와본 적이 있나요?",answers:{korean:["아니요, 이번이 처음입니다.","네, 작년에 방문했었습니다."],english:["No, this is my first time.","Yes, I visited last year."]}},{id:25,audioUrl:"/audio/question-25.mp3",text:"Do you have anything to declare?",meaning:"신고할 물건이 있나요?",answers:{korean:["아니요, 없습니다.","네, 선물 몇 개 있습니다."],english:["No, I don't.","Yes, I have some gifts."]}},{id:26,audioUrl:"/audio/question-26.mp3",text:"You may now collect your belongings.",meaning:"이제 소지품을 가져가셔도 됩니다.",answers:{korean:["감사합니다.","네, 알겠습니다."],english:["Thank you.","Alright, got it."]}},{id:27,audioUrl:"/audio/question-27.mp3",text:"You're all set. Have a great flight!",meaning:"이상 없습니다. 좋은 여행 되세요!",answers:{korean:["감사합니다! 당신도요!","감사합니다!"],english:["Thank you! You too!","Appreciate it!"]}},{id:28,audioUrl:"/audio/question-28.mp3",text:"Please put your shoes and belt back on over there.",meaning:"저쪽에서 신발과 벨트를 다시 착용하세요.",answers:{korean:["네, 감사합니다.","알겠습니다."],english:["Got it, thanks.","Okay, will do."]}},{id:29,audioUrl:"/audio/question-29.mp3",text:"Thank you for your cooperation.",meaning:"협조해 주셔서 감사합니다.",answers:{korean:["아니에요, 좋은 하루 되세요!","별말씀을요."],english:["No problem, have a good day!","You're welcome."]}},{id:30,audioUrl:"/audio/question-30.mp3",text:"Have a safe trip!",meaning:"안전한 여행 되세요!",answers:{korean:["감사합니다! 당신도요!","그럴게요! 감사합니다."],english:["Thank you! Same to you!","Will do! Thanks!"]}}];function fe({question:e}){const[t,a]=w.useState(!1),[r,o]=w.useState(!1),[i,l]=w.useState([]),[s,c]=w.useState([]),[h,m]=w.useState(!1),k=async()=>{m(!0);try{const v=e.text.endsWith("?"),f=e.text.startsWith("Please")||e.text.endsWith(".");let C=.85,y=1;v?(y=1.1,C=.8):f&&(y=.95,C=.9),e.text.split(" ").length>10&&(C*=.95);const p=await fetch("https://texttospeech.googleapis.com/v1/text:synthesize?key=undefined",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:{text:e.text},voice:{languageCode:"en-US",name:"en-US-Neural2-C",ssmlGender:"FEMALE"},audioConfig:{audioEncoding:"MP3",speakingRate:C,pitch:y}})});if(!p.ok)throw new Error(`HTTP error! status: ${p.status}`);const I=(await p.json()).audioContent,q=window.atob(I),z=new Uint8Array(q.length);for(let K=0;K<q.length;K++)z[K]=q.charCodeAt(K);const j=new Blob([z],{type:"audio/mp3"}),D=URL.createObjectURL(j),P=new Audio(D);P.onended=()=>{m(!1),URL.revokeObjectURL(D)},P.onerror=K=>{console.error("Error playing audio:",K),m(!1),URL.revokeObjectURL(D)},await P.play()}catch(v){console.error("Error synthesizing speech:",v),m(!1)}},g=v=>{l(f=>f.includes(v)?f.filter(C=>C!==v):[...f,v])},x=v=>{c(f=>f.includes(v)?f.filter(C=>C!==v):[...f,v])};return d.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 space-y-4",children:[d.jsx("div",{className:"flex items-center justify-between",children:d.jsxs("div",{className:"flex items-center space-x-3",children:[d.jsx("span",{className:"bg-blue-600 text-white text-lg font-semibold w-10 h-10 rounded-full flex items-center justify-center",children:e.id}),d.jsx("h3",{className:"text-lg font-medium text-gray-700",children:"Question"})]})}),d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"flex space-x-4",children:[d.jsxs("button",{className:`flex items-center space-x-2 ${h?"bg-gray-400 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700"} text-white px-4 py-2 rounded-md transition-colors`,onClick:k,disabled:h,children:[d.jsx(wn,{size:20}),d.jsx("span",{children:h?"재생 중...":"질문 듣기"})]}),d.jsxs("button",{className:"flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200",onClick:()=>a(!t),children:[d.jsx(pn,{size:20}),d.jsx("span",{children:"질문 보기"})]}),d.jsxs("button",{className:"flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200",onClick:()=>o(!r),children:[d.jsx(vn,{size:20}),d.jsx("span",{children:"뜻 보기"})]})]}),t&&d.jsx("p",{className:"text-gray-800 font-medium mt-4",children:e.text}),r&&d.jsx("p",{className:"text-blue-600 font-medium mt-4",children:e.meaning})]}),d.jsxs("div",{className:"space-y-4",children:[d.jsx("div",{className:"space-y-2",children:e.answers.korean.map((v,f)=>d.jsxs("div",{children:[d.jsxs("button",{className:`w-full text-left px-4 py-2 rounded-md transition-colors ${i.includes(f)?"bg-blue-50 text-blue-700":"bg-gray-50 text-gray-700 hover:bg-gray-100"}`,onClick:()=>g(f),children:["한글로 답변 ",f+1," 보기"]}),i.includes(f)&&d.jsx("p",{className:"mt-2 pl-4 text-gray-700",children:v})]},`korean-${f}`))}),d.jsx("div",{className:"space-y-2",children:e.answers.english.map((v,f)=>d.jsxs("div",{children:[d.jsxs("button",{className:`w-full text-left px-4 py-2 rounded-md transition-colors ${s.includes(f)?"bg-blue-50 text-blue-700":"bg-gray-50 text-gray-700 hover:bg-gray-100"}`,onClick:()=>x(f),children:["영어로 답변 ",f+1," 보기"]}),s.includes(f)&&d.jsx("p",{className:"mt-2 pl-4 text-gray-700",children:v})]},`english-${f}`))})]})]})}function xH(){const[e,t]=w.useState("security"),[a,r]=w.useState(!1),o=w.useRef(null);Lt.useEffect(()=>{const c=()=>{r(window.scrollY>300)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const i=c=>{const h=document.getElementById(`question-${c}`);h&&h.scrollIntoView({behavior:"smooth",block:"start"})},l=()=>{window.scrollTo({top:0,behavior:"smooth"})},s=e==="security"?JI:eC;return d.jsxs("div",{className:"min-h-screen bg-gray-50",children:[d.jsx(bt,{}),d.jsxs("div",{className:"container mx-auto px-4 py-8",children:[d.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-4",children:"공항에서 유용한 여행영어 표현"}),d.jsxs("div",{className:"flex space-x-4 mb-8",children:[d.jsxs("button",{onClick:()=>t("security"),className:`flex items-center space-x-2 px-6 py-3 rounded-lg ${e==="security"?"bg-blue-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"} transition-colors duration-200`,children:[d.jsx(Ln,{size:20}),d.jsx("span",{children:"공항 보안 검색대"})]}),d.jsxs("button",{onClick:()=>t("checkin"),className:`flex items-center space-x-2 px-6 py-3 rounded-lg ${e==="checkin"?"bg-blue-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"} transition-colors duration-200`,children:[d.jsx(xn,{size:20}),d.jsx("span",{children:"비행기 탑승 수속"})]})]}),d.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-sm mb-8",children:[d.jsx("h2",{className:"text-lg font-semibold text-gray-700 mb-3",children:"문제 바로가기"}),d.jsx("div",{className:"flex flex-wrap gap-2",children:s.map(c=>d.jsx("button",{onClick:()=>i(c.id),className:"min-w-[40px] h-10 px-3 rounded-md bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 transition-colors duration-200",children:c.id},c.id))})]}),d.jsxs("div",{className:"space-y-6",ref:o,children:[e==="security"&&d.jsxs("div",{children:[d.jsx("h2",{className:"text-2xl font-semibold text-gray-800 mb-6",children:"공항 보안 검색대에서 영어로 대화하는 법"}),d.jsx("div",{className:"space-y-6",children:JI.map(c=>d.jsx("div",{id:`question-${c.id}`,children:d.jsx(fe,{question:c})},c.id))})]}),e==="checkin"&&d.jsxs("div",{children:[d.jsx("h2",{className:"text-2xl font-semibold text-gray-800 mb-6",children:"비행기 탑승 수속 영어 – 체크인부터 출국 심사까지"}),d.jsx("div",{className:"space-y-6",children:eC.map(c=>d.jsx("div",{id:`question-${c.id}`,children:d.jsx(fe,{question:c})},c.id))})]})]})]}),d.jsx("button",{onClick:l,className:`fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-16"}`,"aria-label":"맨 위로 가기",children:d.jsx(De,{size:24})})]})}const tC=[{id:1,audioUrl:"/audio/hotel-question-1.mp3",text:"I'd like to book a room for three nights.",meaning:"3박 동안 방을 예약하고 싶어요.",answers:{korean:["네, 어떤 종류의 방을 원하시나요?","스탠다드 더블룸으로 부탁드립니다."],english:["Sure, what type of room would you like?","A standard double room, please."]}},{id:2,audioUrl:"/audio/hotel-question-2.mp3",text:"Do you have any rooms available for tonight?",meaning:"오늘 밤 이용할 수 있는 방이 있나요?",answers:{korean:["네, 몇 가지 옵션이 있습니다.","죄송하지만, 오늘은 만실입니다."],english:["Yes, we have a few options.","Sorry, we're fully booked tonight."]}},{id:3,audioUrl:"/audio/hotel-question-3.mp3",text:"How much is a single room per night?",meaning:"싱글룸 1박 요금은 얼마인가요?",answers:{korean:["세금 제외하고 1박에 80달러입니다.","가격은 시즌에 따라 달라집니다."],english:["It's $80 per night, excluding taxes.","The price varies depending on the season."]}},{id:4,audioUrl:"/audio/hotel-question-4.mp3",text:"Can I get a room with a sea view?",meaning:"바다 전망이 있는 방을 받을 수 있나요?",answers:{korean:["네, 바다 전망 방이 있습니다.","죄송하지만, 바다 전망 방은 다 예약되었습니다."],english:["Yes, we have a sea-view room available.","I'm sorry, but all sea-view rooms are booked."]}},{id:5,audioUrl:"/audio/hotel-question-5.mp3",text:"Does the room rate include breakfast?",meaning:"객실 요금에 조식이 포함되나요?",answers:{korean:["네, 컨티넨탈 조식이 포함되어 있습니다.","아니요, 조식은 인당 15달러 추가됩니다."],english:["Yes, a continental breakfast is included.","No, breakfast is an additional $15 per person."]}},{id:6,audioUrl:"/audio/hotel-question-6.mp3",text:"I'd like to cancel my reservation.",meaning:"예약을 취소하고 싶어요.",answers:{korean:["네, 예약 번호를 알려주시겠어요?","죄송하지만, 취소는 최소 24시간 전에 해야 합니다."],english:["No problem. May I have your booking reference?","I'm sorry, but cancellations require 24-hour notice."]}},{id:7,audioUrl:"/audio/hotel-question-7.mp3",text:"Can I check in early?",meaning:"조기 체크인 가능할까요?",answers:{korean:["조기 체크인은 가능한 경우에만 가능합니다.","추가 요금으로 조기 체크인이 가능합니다."],english:["Early check-in is subject to availability.","We can accommodate early check-in for an additional fee."]}},{id:8,audioUrl:"/audio/hotel-question-8.mp3",text:"What time is check-in and check-out?",meaning:"체크인과 체크아웃 시간은 언제인가요?",answers:{korean:["체크인은 오후 3시부터, 체크아웃은 오전 11시까지입니다.","추가 요금으로 늦은 체크아웃이 가능합니다."],english:["Check-in is from 3 PM, and check-out is by 11 AM.","You can request a late check-out for an extra fee."]}},{id:9,audioUrl:"/audio/hotel-question-9.mp3",text:"Do you have a shuttle service from the airport?",meaning:"공항에서 호텔까지 셔틀 서비스가 있나요?",answers:{korean:["네, 무료 공항 셔틀이 있습니다.","아니요, 하지만 택시를 예약해 드릴 수 있습니다."],english:["Yes, we offer a free airport shuttle.","No, but we can arrange a taxi for you."]}},{id:10,audioUrl:"/audio/hotel-question-10.mp3",text:"Is there free Wi-Fi in the hotel?",meaning:"호텔에서 무료 와이파이를 이용할 수 있나요?",answers:{korean:["네, 호텔 전체에서 무료 와이파이를 사용할 수 있습니다.","로비에서는 무료지만, 객실에서는 요금이 부과됩니다."],english:["Yes, free Wi-Fi is available throughout the hotel.","Wi-Fi is free in the lobby, but there is a charge in the rooms."]}},{id:11,audioUrl:"/audio/hotel-question-11.mp3",text:"Can I get an extra bed in the room?",meaning:"객실에 추가 침대를 넣을 수 있나요?",answers:{korean:["네, 추가 침대는 1박에 20달러입니다.","죄송하지만, 추가 침대는 제공되지 않습니다."],english:["Yes, an extra bed costs $20 per night.","I'm sorry, but extra beds are not available."]}},{id:12,audioUrl:"/audio/hotel-question-12.mp3",text:"Do you have a swimming pool?",meaning:"수영장이 있나요?",answers:{korean:["네, 수영장은 옥상에 있습니다.","아니요, 하지만 피트니스 센터가 있습니다."],english:["Yes, the pool is on the rooftop.","No, but we have a fitness center."]}},{id:13,audioUrl:"/audio/hotel-question-13.mp3",text:"Is parking available at the hotel?",meaning:"호텔에 주차장이 있나요?",answers:{korean:["네, 투숙객을 위한 무료 주차장이 있습니다.","주차는 1박에 10달러입니다."],english:["Yes, we have free parking for guests.","Parking is available for $10 per night."]}},{id:14,audioUrl:"/audio/hotel-question-14.mp3",text:"I'd like to request a wake-up call.",meaning:"모닝콜을 요청하고 싶어요.",answers:{korean:["네, 몇 시에 모닝콜을 해드릴까요?","모닝콜은 오전 5시부터 10시까지 가능합니다."],english:["Sure, what time should we call you?","Wake-up calls are available between 5 AM and 10 AM."]}},{id:15,audioUrl:"/audio/hotel-question-15.mp3",text:"Can I get room service?",meaning:"룸서비스 이용할 수 있나요?",answers:{korean:["네, 룸서비스는 24시간 가능합니다.","레스토랑은 오후 10시에 닫지만, 간식은 이용 가능합니다."],english:["Yes, room service is available 24/7.","The restaurant closes at 10 PM, but snacks are available."]}},{id:16,audioUrl:"/audio/hotel-question-16.mp3",text:"Is there a laundry service?",meaning:"세탁 서비스가 있나요?",answers:{korean:["네, 당일 세탁 서비스가 가능합니다.","셀프 세탁실이 2층에 있습니다."],english:["Yes, we offer same-day laundry service.","There is a self-service laundry room on the second floor."]}},{id:17,audioUrl:"/audio/hotel-question-17.mp3",text:"Do you have a business center?",meaning:"비즈니스 센터가 있나요?",answers:{korean:["네, 1층에 있습니다.","비즈니스 센터는 24시간 운영됩니다."],english:["Yes, it's located on the ground floor.","The business center is open 24 hours."]}},{id:18,audioUrl:"/audio/hotel-question-18.mp3",text:"I lost my room key. Can I get a new one?",meaning:"객실 키를 잃어버렸어요. 새 키를 받을 수 있을까요?",answers:{korean:["네, 새 키를 드리겠습니다.","보안상의 이유로 신분증을 제시해 주세요."],english:["No problem. We'll issue you a new key.","Please show your ID for security purposes."]}},{id:19,audioUrl:"/audio/hotel-question-19.mp3",text:"Can I leave my luggage here after check-out?",meaning:"체크아웃 후에 짐을 맡길 수 있나요?",answers:{korean:["네, 무료로 짐을 보관해 드립니다.","최대 24시간 동안 보관 가능합니다."],english:["Yes, we offer luggage storage for free.","You can store your luggage for up to 24 hours."]}},{id:20,audioUrl:"/audio/hotel-question-20.mp3",text:"Do you accept credit cards?",meaning:"신용카드 결제 가능한가요?",answers:{korean:["네, 모든 주요 신용카드를 받습니다.","Visa와 Mastercard만 받습니다."],english:["Yes, we accept all major credit cards.","We only accept Visa and Mastercard."]}},{id:21,audioUrl:"/audio/hotel-question-21.mp3",text:"Can I pay in cash?",meaning:"현금으로 결제할 수 있나요?",answers:{korean:["네, 가능합니다.","죄송하지만, 신용카드만 받습니다."],english:["Yes, that's fine.","I'm sorry, we only accept credit cards."]}},{id:22,audioUrl:"/audio/hotel-question-22.mp3",text:"Is there a minibar in the room?",meaning:"객실에 미니바가 있나요?",answers:{korean:["네, 미니바가 있습니다.","아니요, 하지만 1층에 편의점이 있습니다."],english:["Yes, there is a minibar.","No, but there is a convenience store on the first floor."]}},{id:23,audioUrl:"/audio/hotel-question-23.mp3",text:"Can I request a non-smoking room?",meaning:"금연 객실을 요청할 수 있나요?",answers:{korean:["네, 금연 객실로 배정해드릴 수 있습니다.","죄송하지만, 현재 금연 객실이 없습니다."],english:["Yes, we can assign you a non-smoking room.","I'm sorry, but there are no non-smoking rooms available."]}},{id:24,audioUrl:"/audio/hotel-question-24.mp3",text:"Is there a safe in the room?",meaning:"객실에 금고가 있나요?",answers:{korean:["네, 금고가 있습니다.","아니요, 하지만 프런트 데스크에서 귀중품을 보관해 드릴 수 있습니다."],english:["Yes, there is a safe in the room.","No, but the front desk can store valuables for you."]}},{id:25,audioUrl:"/audio/hotel-question-25.mp3",text:"Can I get a late check-out?",meaning:"늦은 체크아웃이 가능할까요?",answers:{korean:["네, 추가 요금으로 늦은 체크아웃이 가능합니다.","죄송하지만, 늦은 체크아웃이 불가능합니다."],english:["Yes, late check-out is available for an extra charge.","I'm sorry, but late check-out is not available."]}},{id:26,audioUrl:"/audio/hotel-question-26.mp3",text:"What's the check-in procedure?",meaning:"체크인 절차는 어떻게 되나요?",answers:{korean:["여권과 신용카드를 보여주시면 됩니다.","예약 확인서와 신분증을 제시해 주세요."],english:["Please show your passport and credit card.","Please present your booking confirmation and ID."]}},{id:27,audioUrl:"/audio/hotel-question-27.mp3",text:"Is there a gym in the hotel?",meaning:"호텔에 헬스장이 있나요?",answers:{korean:["네, 24시간 이용 가능한 피트니스 센터가 있습니다.","죄송하지만, 현재 리모델링 중입니다."],english:["Yes, we have a 24-hour fitness center.","I'm sorry, but it's currently under renovation."]}},{id:28,audioUrl:"/audio/hotel-question-28.mp3",text:"Do you offer currency exchange?",meaning:"환전이 가능한가요?",answers:{korean:["네, 프런트 데스크에서 가능합니다.","죄송하지만, 근처 은행을 이용해 주세요."],english:["Yes, it's available at the front desk.","I'm sorry, please use a nearby bank."]}},{id:29,audioUrl:"/audio/hotel-question-29.mp3",text:"What's your cancellation policy?",meaning:"취소 정책은 어떻게 되나요?",answers:{korean:["체크인 24시간 전까지 무료 취소 가능합니다.","예약금은 환불되지 않습니다."],english:["Free cancellation is available up to 24 hours before check-in.","The deposit is non-refundable."]}},{id:30,audioUrl:"/audio/hotel-question-30.mp3",text:"Do you have any special rates for long stays?",meaning:"장기 투숙 시 특별 요금이 있나요?",answers:{korean:["네, 일주일 이상 투숙 시 할인이 적용됩니다.","월 단위 예약 시 특별 요금을 제공합니다."],english:["Yes, we offer discounts for stays over a week.","We have special rates for monthly bookings."]}}],aC=[{id:1,audioUrl:"/audio/room-service-1.mp3",text:"Can I order room service?",meaning:"룸서비스를 주문할 수 있나요?",answers:{korean:["네, 룸서비스는 24시간 가능합니다.","죄송하지만, 룸서비스는 오후 10시까지만 가능합니다."],english:["Yes, room service is available 24/7.","Sorry, room service is only available until 10 PM."]}},{id:2,audioUrl:"/audio/room-service-2.mp3",text:"Do you have a room service menu?",meaning:"룸서비스 메뉴가 있나요?",answers:{korean:["네, 객실에 메뉴가 있습니다.","호텔 웹사이트에서 메뉴를 확인할 수 있습니다."],english:["Yes, there's a menu in your room.","You can check the menu on our website."]}},{id:3,audioUrl:"/audio/room-service-3.mp3",text:"I'd like to order breakfast in my room.",meaning:"객실에서 조식을 주문하고 싶어요.",answers:{korean:["네, 무엇을 주문하시겠어요?","조식은 오전 6시부터 10시까지 제공됩니다."],english:["Sure, what would you like?","Breakfast is served from 6 AM to 10 AM."]}},{id:4,audioUrl:"/audio/room-service-4.mp3",text:"Can I have a continental breakfast delivered to my room?",meaning:"객실로 컨티넨탈 조식을 배달해 주실 수 있나요?",answers:{korean:["네, 30분 내로 배달해 드리겠습니다.","죄송하지만, 객실 조식 서비스는 제공되지 않습니다."],english:["Yes, it will be delivered within 30 minutes.","Sorry, but room service breakfast is not available."]}},{id:5,audioUrl:"/audio/room-service-5.mp3",text:"I'd like to order a steak and a glass of wine.",meaning:"스테이크와 와인 한 잔을 주문하고 싶어요.",answers:{korean:["네, 스테이크는 어떻게 요리해 드릴까요?","레드와 화이트 와인이 있습니다. 어떤 걸 원하시나요?"],english:["Sure, how would you like your steak cooked?","We have red and white wine available. Which would you prefer?"]}},{id:6,audioUrl:"/audio/room-service-6.mp3",text:"Can I get a vegetarian meal?",meaning:"채식 메뉴를 주문할 수 있나요?",answers:{korean:["네, 채식 메뉴가 있습니다.","죄송하지만, 채식 메뉴는 없습니다."],english:["Yes, we have vegetarian options.","I'm sorry, but we don't offer vegetarian meals."]}},{id:7,audioUrl:"/audio/room-service-7.mp3",text:"Can you bring some fresh fruit to my room?",meaning:"객실로 신선한 과일을 가져다 주실 수 있나요?",answers:{korean:["네, 과일 플래터를 준비해 드릴 수 있습니다.","죄송하지만, 지금은 신선한 과일이 없습니다."],english:["Yes, we have a fruit platter available.","I'm sorry, but we don't have fresh fruit at the moment."]}},{id:8,audioUrl:"/audio/room-service-8.mp3",text:"I'd like to order dessert. What do you have?",meaning:"디저트를 주문하고 싶은데, 어떤 게 있나요?",answers:{korean:["초콜릿 케이크, 치즈케이크, 그리고 과일 타르트가 있습니다.","객실 내 디저트 메뉴를 확인하실 수 있습니다."],english:["We have chocolate cake, cheesecake, and fruit tart.","You can check the dessert menu in your room."]}},{id:9,audioUrl:"/audio/room-service-9.mp3",text:"Can I get a bottle of water and some ice?",meaning:"생수 한 병과 얼음을 가져다 주실 수 있나요?",answers:{korean:["네, 바로 보내드리겠습니다.","객실 내 무료 생수가 있습니다."],english:["Sure, we'll send them right away.","There is complimentary bottled water in your room."]}},{id:10,audioUrl:"/audio/room-service-10.mp3",text:"How long will my order take?",meaning:"주문한 음식이 얼마나 걸릴까요?",answers:{korean:["약 30분 정도 걸립니다.","현재 주문이 많아 45분까지 걸릴 수 있습니다."],english:["It will take approximately 30 minutes.","We are busy right now, so it may take up to 45 minutes."]}},{id:11,audioUrl:"/audio/room-service-11.mp3",text:"Can I order a sandwich and a soda?",meaning:"샌드위치와 탄산음료를 주문할 수 있나요?",answers:{korean:["네, 어떤 샌드위치를 원하시나요?","죄송하지만, 샌드위치는 현재 제공되지 않습니다."],english:["Yes, what kind of sandwich would you like?","I'm sorry, but sandwiches are not available at the moment."]}},{id:12,audioUrl:"/audio/room-service-12.mp3",text:"Can I get extra towels delivered to my room?",meaning:"객실로 추가 수건을 배달해 주실 수 있나요?",answers:{korean:["네, 곧 보내드리겠습니다.","죄송하지만, 지금은 추가 수건이 없습니다."],english:["Yes, we'll send them shortly.","I'm sorry, but we're out of extra towels right now."]}},{id:13,audioUrl:"/audio/room-service-13.mp3",text:"I need more pillows. Can you bring some?",meaning:"베개를 더 가져다 주실 수 있나요?",answers:{korean:["네, 몇 개 필요하신가요?","죄송하지만, 추가 베개가 없습니다."],english:["Sure, how many do you need?","I'm sorry, but we don't have extra pillows available."]}},{id:14,audioUrl:"/audio/room-service-14.mp3",text:"Can I request an iron and ironing board?",meaning:"다리미와 다리미판을 요청할 수 있나요?",answers:{korean:["네, 곧 가져다 드리겠습니다.","죄송하지만, 현재 다리미가 없습니다."],english:["Yes, we'll bring them to your room shortly.","I'm sorry, but we don't have any available at the moment."]}},{id:15,audioUrl:"/audio/room-service-15.mp3",text:"Can I have a late-night snack delivered?",meaning:"야식 배달이 가능할까요?",answers:{korean:["네, 야식 메뉴를 확인해 주세요.","죄송하지만, 야식 서비스는 제공되지 않습니다."],english:["Yes, please check our late-night menu.","I'm sorry, but we don't offer late-night snacks."]}},{id:16,audioUrl:"/audio/room-service-16.mp3",text:"Do you offer special meals for allergies?",meaning:"알레르기 있는 사람들을 위한 특별식이 있나요?",answers:{korean:["네, 어떤 음식 알레르기가 있으신가요?","죄송하지만, 특별식을 제공하지 않습니다."],english:["Yes, do you have any specific allergies?","I'm sorry, but we don't offer special allergy meals."]}},{id:17,audioUrl:"/audio/room-service-17.mp3",text:"Can I order a birthday cake for my room?",meaning:"객실로 생일 케이크를 주문할 수 있나요?",answers:{korean:["네, 미리 예약해 주시면 가능합니다.","죄송하지만, 생일 케이크 서비스는 없습니다."],english:["Yes, if you order in advance, we can arrange it.","I'm sorry, but we don't offer birthday cakes."]}},{id:18,audioUrl:"/audio/room-service-18.mp3",text:"Can I get a coffee maker in my room?",meaning:"객실에 커피 머신을 요청할 수 있나요?",answers:{korean:["네, 곧 보내드리겠습니다.","죄송하지만, 커피 머신이 제공되지 않습니다."],english:["Yes, we'll send one to your room.","I'm sorry, but coffee makers are not available."]}},{id:19,audioUrl:"/audio/room-service-19.mp3",text:"Do you provide baby cribs?",meaning:"아기 침대를 제공하나요?",answers:{korean:["네, 무료로 제공됩니다.","죄송하지만, 아기 침대가 없습니다."],english:["Yes, we provide them for free.","I'm sorry, but we don't have any available."]}},{id:20,audioUrl:"/audio/room-service-20.mp3",text:"Can I get fresh towels every morning?",meaning:"매일 아침 깨끗한 수건을 받을 수 있나요?",answers:{korean:["네, 매일 아침 교체해 드립니다.","죄송하지만, 요청하셔야만 교체 가능합니다."],english:["Yes, we change them every morning.","I'm sorry, but you need to request them."]}},{id:21,audioUrl:"/audio/room-service-21.mp3",text:"Can I order champagne to my room?",meaning:"객실로 샴페인을 주문할 수 있나요?",answers:{korean:["네, 다양한 샴페인이 준비되어 있습니다.","죄송하지만, 주류 서비스는 제공되지 않습니다."],english:["Yes, we have a selection of champagne available.","I'm sorry, but we don't offer alcohol delivery."]}},{id:22,audioUrl:"/audio/room-service-22.mp3",text:"Is there a microwave in the room?",meaning:"객실에 전자레인지가 있나요?",answers:{korean:["네, 있습니다.","아니요, 하지만 공용 전자레인지가 있습니다."],english:["Yes, there is one in the room.","No, but there is a shared microwave available."]}},{id:23,audioUrl:"/audio/room-service-23.mp3",text:"Can I order a salad and soup?",meaning:"샐러드와 수프를 주문할 수 있나요?",answers:{korean:["네, 어떤 샐러드를 원하시나요?","죄송하지만, 샐러드는 현재 제공되지 않습니다."],english:["Yes, what kind of salad would you like?","I'm sorry, but we don't have salads at the moment."]}},{id:24,audioUrl:"/audio/room-service-24.mp3",text:"Do you offer wine pairings with meals?",meaning:"식사와 함께 와인 페어링을 제공하나요?",answers:{korean:["네, 추천 와인이 있습니다.","죄송하지만, 와인 서비스는 제공되지 않습니다."],english:["Yes, we have recommended pairings.","I'm sorry, but we don't offer wine service."]}},{id:25,audioUrl:"/audio/room-service-25.mp3",text:"Can I request candles for a romantic dinner?",meaning:"로맨틱한 저녁을 위해 촛불을 요청할 수 있나요?",answers:{korean:["네, 촛불을 준비해 드리겠습니다.","죄송하지만, 촛불 서비스는 제공되지 않습니다."],english:["Yes, we'll prepare candles for you.","I'm sorry, but we don't offer candlelight service."]}},{id:26,audioUrl:"/audio/room-service-26.mp3",text:"Can I get a birthday surprise set up in my room?",meaning:"객실에서 생일 서프라이즈를 준비할 수 있나요?",answers:{korean:["네, 미리 요청하시면 가능합니다.","죄송하지만, 특별 이벤트 준비는 제공되지 않습니다."],english:["Yes, we can arrange it if you request in advance.","I'm sorry, but we don't offer special event setups."]}},{id:27,audioUrl:"/audio/room-service-27.mp3",text:"Can I order room service for multiple rooms?",meaning:"여러 객실로 룸서비스를 주문할 수 있나요?",answers:{korean:["네, 몇 개의 객실에 배달하시겠어요?","죄송하지만, 한 객실당 한 주문만 가능합니다."],english:["Yes, how many rooms would you like to deliver to?","I'm sorry, but we can only deliver to one room per order."]}},{id:28,audioUrl:"/audio/room-service-28.mp3",text:"Can I request a high chair for my baby?",meaning:"아기용 식탁 의자를 요청할 수 있나요?",answers:{korean:["네, 무료로 제공됩니다.","죄송하지만, 아기용 의자가 없습니다."],english:["Yes, we provide them for free.","I'm sorry, but we don't have any available."]}},{id:29,audioUrl:"/audio/room-service-29.mp3",text:"Can I order a surprise anniversary dinner?",meaning:"기념일 서프라이즈 저녁을 주문할 수 있나요?",answers:{korean:["네, 특별 메뉴를 준비할 수 있습니다.","죄송하지만, 기념일 서비스는 제공되지 않습니다."],english:["Yes, we can prepare a special menu.","I'm sorry, but we don't offer anniversary services."]}},{id:30,audioUrl:"/audio/room-service-30.mp3",text:"Can I get my room cleaned right now?",meaning:"지금 객실 청소를 요청할 수 있나요?",answers:{korean:["네, 하우스키핑을 바로 보내드리겠습니다.","죄송하지만, 지금은 청소 서비스가 불가능합니다."],english:["Yes, I'll send housekeeping right away.","I'm sorry, but cleaning service is not available right now."]}}];function wH(){const[e,t]=w.useState("booking"),[a,r]=w.useState(!1),o=w.useRef(null);Lt.useEffect(()=>{const c=()=>{r(window.scrollY>300)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const i=c=>{const h=document.getElementById(`question-${c}`);h&&h.scrollIntoView({behavior:"smooth",block:"start"})},l=()=>{window.scrollTo({top:0,behavior:"smooth"})},s=e==="booking"?tC:aC;return d.jsxs("div",{className:"min-h-screen bg-gray-50",children:[d.jsx(bt,{}),d.jsxs("div",{className:"container mx-auto px-4 py-8",children:[d.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-4",children:"호텔 체크인 & 체크아웃 필수 영어 회화"}),d.jsxs("div",{className:"flex space-x-4 mb-8",children:[d.jsxs("button",{onClick:()=>t("booking"),className:`flex items-center space-x-2 px-6 py-3 rounded-lg ${e==="booking"?"bg-blue-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"} transition-colors duration-200`,children:[d.jsx(fn,{size:20}),d.jsx("span",{children:"호텔 예약하기"})]}),d.jsxs("button",{onClick:()=>t("service"),className:`flex items-center space-x-2 px-6 py-3 rounded-lg ${e==="service"?"bg-blue-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"} transition-colors duration-200`,children:[d.jsx(ba,{size:20}),d.jsx("span",{children:"룸 서비스 요청하기"})]})]}),d.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-sm mb-8",children:[d.jsx("h2",{className:"text-lg font-semibold text-gray-700 mb-3",children:"문제 바로가기"}),d.jsx("div",{className:"flex flex-wrap gap-2",children:s.map(c=>d.jsx("button",{onClick:()=>i(c.id),className:"min-w-[40px] h-10 px-3 rounded-md bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 transition-colors duration-200",children:c.id},c.id))})]}),d.jsxs("div",{className:"space-y-6",ref:o,children:[e==="booking"&&d.jsxs("div",{children:[d.jsx("h2",{className:"text-2xl font-semibold text-gray-800 mb-6",children:"호텔 예약할 때 영어 표현 모음"}),d.jsx("div",{className:"space-y-6",children:tC.map(c=>d.jsx("div",{id:`question-${c.id}`,children:d.jsx(fe,{question:c})},c.id))})]}),e==="service"&&d.jsxs("div",{children:[d.jsx("h2",{className:"text-2xl font-semibold text-gray-800 mb-6",children:"룸 서비스 요청할 때 영어 이렇게 말하세요!"}),d.jsx("div",{className:"space-y-6",children:aC.map(c=>d.jsx("div",{id:`question-${c.id}`,children:d.jsx(fe,{question:c})},c.id))})]})]})]}),d.jsx("button",{onClick:l,className:`fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-16"}`,"aria-label":"맨 위로 가기",children:d.jsx(De,{size:24})})]})}const nC=[{id:1,audioUrl:"/audio/restaurant-1.mp3",text:"Do you have a table for two?",meaning:"두 명이 앉을 수 있는 테이블이 있나요?",answers:{korean:["네, 창가 쪽에 자리가 있습니다.","죄송하지만, 현재 모든 테이블이 찼습니다."],english:["Yes, we have a table by the window.","I'm sorry, but we're fully booked."]}},{id:2,audioUrl:"/audio/restaurant-2.mp3",text:"Can I see the menu, please?",meaning:"메뉴를 볼 수 있을까요?",answers:{korean:["네, 여기 있습니다.","QR 코드를 스캔하면 메뉴를 확인할 수 있습니다."],english:["Yes, here you go.","You can scan the QR code to see the menu."]}},{id:3,audioUrl:"/audio/restaurant-3.mp3",text:"What do you recommend?",meaning:"추천 메뉴는 무엇인가요?",answers:{korean:["스테이크가 가장 인기 있는 메뉴입니다.","오늘의 스페셜 요리를 추천드립니다."],english:["The steak is our most popular dish.","I recommend today's special."]}},{id:4,audioUrl:"/audio/restaurant-4.mp3",text:"Can I have a burger with fries?",meaning:"버거와 감자튀김을 주문할 수 있나요?",answers:{korean:["네, 세트로 드릴까요?","죄송하지만, 감자튀김이 다 떨어졌습니다."],english:["Yes, would you like it as a combo?","I'm sorry, but we're out of fries."]}},{id:5,audioUrl:"/audio/restaurant-5.mp3",text:"Does this dish contain nuts?",meaning:"이 요리에 견과류가 들어 있나요?",answers:{korean:["네, 약간의 땅콩이 들어 있습니다.","아니요, 견과류는 포함되지 않습니다."],english:["Yes, it contains some peanuts.","No, it does not contain any nuts."]}},{id:6,audioUrl:"/audio/restaurant-6.mp3",text:"Can I get a vegetarian option?",meaning:"채식 메뉴가 있나요?",answers:{korean:["네, 비건 버거와 샐러드가 있습니다.","죄송하지만, 채식 메뉴는 없습니다."],english:["Yes, we have a vegan burger and a salad.","I'm sorry, but we don't have vegetarian options."]}},{id:7,audioUrl:"/audio/restaurant-7.mp3",text:"How long will the food take?",meaning:"음식이 나오기까지 얼마나 걸리나요?",answers:{korean:["약 20분 정도 걸립니다.","지금 바빠서 40분 정도 소요될 예정입니다."],english:["It will take about 20 minutes.","We're busy right now, so it may take 40 minutes."]}},{id:8,audioUrl:"/audio/restaurant-8.mp3",text:"Can I get an extra plate?",meaning:"추가 접시를 받을 수 있나요?",answers:{korean:["네, 바로 가져다 드리겠습니다.","죄송하지만, 추가 접시는 제공되지 않습니다."],english:["Yes, I'll bring one right away.","I'm sorry, but we don't provide extra plates."]}},{id:9,audioUrl:"/audio/restaurant-9.mp3",text:"Can I have this to go?",meaning:"이거 포장할 수 있을까요?",answers:{korean:["네, 포장해 드리겠습니다.","죄송하지만, 이 메뉴는 포장이 불가능합니다."],english:["Yes, I'll pack it for you.","I'm sorry, but this dish cannot be taken to go."]}},{id:10,audioUrl:"/audio/restaurant-10.mp3",text:"Do you accept credit cards?",meaning:"신용카드 결제가 되나요?",answers:{korean:["네, 모든 주요 신용카드를 받습니다.","죄송하지만, 현금 결제만 가능합니다."],english:["Yes, we accept all major credit cards.","I'm sorry, but we only accept cash."]}},{id:11,audioUrl:"/audio/restaurant-11.mp3",text:"Can I get a glass of water?",meaning:"물 한 잔 받을 수 있을까요?",answers:{korean:["네, 바로 가져다 드리겠습니다.","생수 한 병을 구매하실 수도 있습니다."],english:["Yes, I'll bring it right away.","You can also purchase a bottle of water."]}},{id:12,audioUrl:"/audio/restaurant-12.mp3",text:"Can I order a coffee?",meaning:"커피를 주문할 수 있을까요?",answers:{korean:["네, 어떤 커피를 원하시나요?","죄송하지만, 커피 머신이 고장 났습니다."],english:["Yes, what kind of coffee would you like?","I'm sorry, but our coffee machine is broken."]}},{id:13,audioUrl:"/audio/restaurant-13.mp3",text:"Can I have my steak well done?",meaning:"스테이크를 완전히 익혀서 받을 수 있나요?",answers:{korean:["네, 웰던으로 준비해 드리겠습니다.","죄송하지만, 기본 조리 상태로만 제공됩니다."],english:["Yes, we'll prepare it well done.","I'm sorry, but we only serve it as is."]}},{id:14,audioUrl:"/audio/restaurant-14.mp3",text:"Is there a kids' menu?",meaning:"어린이 메뉴가 있나요?",answers:{korean:["네, 키즈 버거와 파스타가 있습니다.","죄송하지만, 어린이 전용 메뉴는 없습니다."],english:["Yes, we have a kids' burger and pasta.","I'm sorry, but we don't have a kids' menu."]}},{id:15,audioUrl:"/audio/restaurant-15.mp3",text:"Can I get a side of rice?",meaning:"밥을 추가로 받을 수 있나요?",answers:{korean:["네, 추가 비용이 발생합니다.","죄송하지만, 밥은 제공되지 않습니다."],english:["Yes, there's an extra charge.","I'm sorry, but we don't serve rice."]}},{id:16,audioUrl:"/audio/restaurant-16.mp3",text:"Do you offer refills on soft drinks?",meaning:"탄산음료 리필이 가능한가요?",answers:{korean:["네, 무제한 리필 가능합니다.","죄송하지만, 리필은 제공되지 않습니다."],english:["Yes, free refills are available.","I'm sorry, but we don't offer refills."]}},{id:17,audioUrl:"/audio/restaurant-17.mp3",text:"Can I pay separately?",meaning:"계산을 따로 할 수 있나요?",answers:{korean:["네, 개별 결제 가능합니다.","죄송하지만, 한 번에 결제해 주셔야 합니다."],english:["Yes, you can split the bill.","I'm sorry, but we require one payment per table."]}},{id:18,audioUrl:"/audio/restaurant-18.mp3",text:"Can I get a receipt, please?",meaning:"영수증을 받을 수 있을까요?",answers:{korean:["네, 여기 있습니다.","죄송하지만, 영수증 발급이 어렵습니다."],english:["Yes, here you go.","I'm sorry, but we can't provide a receipt."]}},{id:19,audioUrl:"/audio/restaurant-19.mp3",text:"Do you have any gluten-free options?",meaning:"글루텐 프리 메뉴가 있나요?",answers:{korean:["네, 글루텐 프리 피자가 있습니다.","죄송하지만, 모든 음식에 글루텐이 포함되어 있습니다."],english:["Yes, we have a gluten-free pizza.","I'm sorry, but all our food contains gluten."]}},{id:20,audioUrl:"/audio/restaurant-20.mp3",text:"Is there an allergy-friendly menu?",meaning:"알레르기 메뉴가 있나요?",answers:{korean:["네, 특정 재료가 없는 메뉴를 추천해 드릴 수 있습니다.","죄송하지만, 모든 음식에 알레르기 성분이 포함될 가능성이 있습니다."],english:["Yes, we can recommend dishes without certain ingredients.","I'm sorry, but our food may contain allergens."]}},{id:21,audioUrl:"/audio/restaurant-21.mp3",text:"Can I substitute the fries with a salad?",meaning:"감자튀김 대신 샐러드로 변경할 수 있나요?",answers:{korean:["네, 추가 비용 없이 변경 가능합니다.","죄송하지만, 변경이 불가능합니다."],english:["Yes, you can substitute it at no extra charge.","I'm sorry, but substitutions are not allowed."]}},{id:22,audioUrl:"/audio/restaurant-22.mp3",text:"Can I get my burger without onions?",meaning:"버거에서 양파를 빼고 받을 수 있나요?",answers:{korean:["네, 양파 없이 준비해 드리겠습니다.","죄송하지만, 재료 변경이 불가능합니다."],english:["Yes, we'll prepare it without onions.","I'm sorry, but we cannot modify ingredients."]}},{id:23,audioUrl:"/audio/restaurant-23.mp3",text:"Do you serve alcohol?",meaning:"술을 판매하나요?",answers:{korean:["네, 맥주와 와인이 있습니다.","죄송하지만, 주류는 판매하지 않습니다."],english:["Yes, we serve beer and wine.","I'm sorry, but we don't serve alcohol."]}},{id:24,audioUrl:"/audio/restaurant-24.mp3",text:"Can I get extra sauce on the side?",meaning:"소스를 추가로 받을 수 있나요?",answers:{korean:["네, 추가 소스는 무료로 제공됩니다.","추가 소스는 $1의 비용이 발생합니다."],english:["Yes, extra sauce is free.","Extra sauce costs $1."]}},{id:25,audioUrl:"/audio/restaurant-25.mp3",text:"Is tipping required?",meaning:"팁을 꼭 줘야 하나요?",answers:{korean:["아니요, 선택 사항입니다.","네, 서비스 요금이 포함되어 있습니다."],english:["No, it's optional.","Yes, a service charge is included."]}},{id:26,audioUrl:"/audio/restaurant-26.mp3",text:"Do you have takeout containers?",meaning:"음식을 포장할 용기가 있나요?",answers:{korean:["네, 무료로 제공해 드립니다.","죄송하지만, 포장 용기가 없습니다."],english:["Yes, we provide them for free.","I'm sorry, but we don't have takeout containers."]}},{id:27,audioUrl:"/audio/restaurant-27.mp3",text:"Can I make a reservation for dinner?",meaning:"저녁 예약을 할 수 있나요?",answers:{korean:["네, 몇 시에 예약하시겠어요?","죄송하지만, 예약을 받지 않습니다."],english:["Yes, what time would you like?","I'm sorry, but we don't take reservations."]}},{id:28,audioUrl:"/audio/restaurant-28.mp3",text:"What are your restaurant hours?",meaning:"레스토랑 운영 시간이 어떻게 되나요?",answers:{korean:["오전 10시부터 오후 10시까지 운영됩니다.","주말에는 자정까지 운영합니다."],english:["We're open from 10 AM to 10 PM.","We're open until midnight on weekends."]}},{id:29,audioUrl:"/audio/restaurant-29.mp3",text:"Can I get a recommendation for dessert?",meaning:"디저트 추천을 받을 수 있을까요?",answers:{korean:["네, 초콜릿 케이크가 인기 메뉴입니다.","오늘의 스페셜 디저트를 추천드립니다."],english:["Yes, the chocolate cake is our best-seller.","I recommend today's special dessert."]}},{id:30,audioUrl:"/audio/restaurant-30.mp3",text:"Do you offer a loyalty program?",meaning:"멤버십 적립 프로그램이 있나요?",answers:{korean:["네, 포인트 적립이 가능합니다.","죄송하지만, 멤버십 프로그램은 없습니다."],english:["Yes, you can earn points on your purchases.","I'm sorry, but we don't have a loyalty program."]}}],rC=[{id:1,audioUrl:"/audio/waiter-request-1.mp3",text:"Excuse me, can I get a menu?",meaning:"저기요, 메뉴판을 받을 수 있을까요?",answers:{korean:["네, 여기 있습니다.","죄송하지만, 메뉴는 QR 코드로만 제공됩니다."],english:["Sure, here you go.","I'm sorry, but we only provide menus via QR code."]}},{id:2,audioUrl:"/audio/waiter-request-2.mp3",text:"Can I order now?",meaning:"지금 주문할 수 있을까요?",answers:{korean:["네, 주문 도와드리겠습니다.","잠시만 기다려 주세요."],english:["Yes, I'll take your order now.","Please wait a moment."]}},{id:3,audioUrl:"/audio/waiter-request-3.mp3",text:"What do you recommend?",meaning:"추천 메뉴는 무엇인가요?",answers:{korean:["스테이크가 가장 인기 있는 메뉴입니다.","오늘의 스페셜을 추천드립니다."],english:["The steak is our most popular dish.","I recommend today's special."]}},{id:4,audioUrl:"/audio/waiter-request-4.mp3",text:"Can I have a glass of water?",meaning:"물 한 잔 받을 수 있을까요?",answers:{korean:["네, 바로 가져다 드리겠습니다.","테이블에 물병이 준비되어 있습니다."],english:["Yes, I'll bring it right away.","There's a water bottle on your table."]}},{id:5,audioUrl:"/audio/waiter-request-5.mp3",text:"Can I get more napkins?",meaning:"냅킨을 더 받을 수 있을까요?",answers:{korean:["네, 냅킨을 가져다 드리겠습니다.","죄송하지만, 냅킨이 다 떨어졌습니다."],english:["Sure, I'll bring you more napkins.","I'm sorry, but we're out of napkins."]}},{id:6,audioUrl:"/audio/waiter-request-6.mp3",text:"Can I get a fork and knife?",meaning:"포크와 나이프를 받을 수 있을까요?",answers:{korean:["네, 바로 가져다 드리겠습니다.","테이블에 추가 수저가 준비되어 있습니다."],english:["Yes, I'll bring them right away.","There are extra utensils on the table."]}},{id:7,audioUrl:"/audio/waiter-request-7.mp3",text:"Do you have any vegetarian options?",meaning:"채식 메뉴가 있나요?",answers:{korean:["네, 비건 버거와 샐러드가 있습니다.","죄송하지만, 채식 메뉴는 없습니다."],english:["Yes, we have a vegan burger and a salad.","I'm sorry, but we don't have vegetarian options."]}},{id:8,audioUrl:"/audio/waiter-request-8.mp3",text:"Can I substitute fries with a salad?",meaning:"감자튀김 대신 샐러드로 변경할 수 있나요?",answers:{korean:["네, 추가 비용 없이 변경 가능합니다.","죄송하지만, 변경이 불가능합니다."],english:["Yes, you can substitute it at no extra charge.","I'm sorry, but substitutions are not allowed."]}},{id:9,audioUrl:"/audio/waiter-request-9.mp3",text:"Can I have my steak medium rare?",meaning:"스테이크를 미디엄 레어로 조리해 주세요.",answers:{korean:["네, 미디엄 레어로 준비해 드리겠습니다.","죄송하지만, 기본 조리 상태로만 제공됩니다."],english:["Yes, we'll prepare it medium rare.","I'm sorry, but we only serve it as is."]}},{id:10,audioUrl:"/audio/waiter-request-10.mp3",text:"Can I get a refill on my soda?",meaning:"탄산음료 리필이 가능한가요?",answers:{korean:["네, 무료 리필 가능합니다.","죄송하지만, 리필은 제공되지 않습니다."],english:["Yes, free refills are available.","I'm sorry, but we don't offer refills."]}},{id:11,audioUrl:"/audio/waiter-request-11.mp3",text:"Can I order dessert now?",meaning:"디저트를 지금 주문할 수 있을까요?",answers:{korean:["네, 어떤 디저트를 원하시나요?","죄송하지만, 아직 준비되지 않았습니다."],english:["Yes, what kind of dessert would you like?","I'm sorry, but it's not ready yet."]}},{id:12,audioUrl:"/audio/waiter-request-12.mp3",text:"Can I have extra sauce on the side?",meaning:"추가 소스를 받을 수 있을까요?",answers:{korean:["네, 추가 비용 없이 제공됩니다.","추가 소스는 1달러의 비용이 발생합니다."],english:["Yes, we provide it at no extra charge.","Extra sauce costs $1."]}},{id:13,audioUrl:"/audio/waiter-request-13.mp3",text:"Can I get some ice for my drink?",meaning:"음료에 얼음을 좀 추가할 수 있을까요?",answers:{korean:["네, 얼음을 추가해 드리겠습니다.","죄송하지만, 얼음이 없습니다."],english:["Sure, I'll bring some ice.","I'm sorry, but we're out of ice."]}},{id:14,audioUrl:"/audio/waiter-request-14.mp3",text:"Can I have this meal to go?",meaning:"이 음식을 포장할 수 있을까요?",answers:{korean:["네, 포장해 드리겠습니다.","죄송하지만, 이 음식은 포장이 불가능합니다."],english:["Yes, I'll pack it for you.","I'm sorry, but this dish cannot be taken to go."]}},{id:15,audioUrl:"/audio/waiter-request-15.mp3",text:"Can I get the check, please?",meaning:"계산서를 받을 수 있을까요?",answers:{korean:["네, 계산서를 가져다 드리겠습니다.","죄송하지만, 키오스크에서 결제해 주세요."],english:["Yes, I'll bring the bill.","I'm sorry, but please pay at the kiosk."]}},{id:16,audioUrl:"/audio/waiter-request-16.mp3",text:"Do you accept credit cards?",meaning:"신용카드 결제가 가능합니까?",answers:{korean:["네, 모든 주요 신용카드를 받습니다.","죄송하지만, 현금 결제만 가능합니다."],english:["Yes, we accept all major credit cards.","I'm sorry, but we only accept cash."]}},{id:17,audioUrl:"/audio/waiter-request-17.mp3",text:"Can I split the bill?",meaning:"계산을 나눠서 할 수 있을까요?",answers:{korean:["네, 개별 결제가 가능합니다.","죄송하지만, 하나의 결제만 가능합니다."],english:["Yes, you can split the bill.","I'm sorry, but we only accept a single payment."]}},{id:18,audioUrl:"/audio/waiter-request-18.mp3",text:"Is tipping required?",meaning:"팁을 꼭 줘야 하나요?",answers:{korean:["아니요, 선택 사항입니다.","네, 서비스 요금이 포함되어 있습니다."],english:["No, it's optional.","Yes, a service charge is included."]}},{id:19,audioUrl:"/audio/waiter-request-19.mp3",text:"Can I have a table by the window?",meaning:"창가 쪽 테이블을 받을 수 있을까요?",answers:{korean:["네, 창가 테이블로 안내해 드리겠습니다.","죄송하지만, 창가 자리는 만석입니다."],english:["Yes, I'll seat you by the window.","I'm sorry, but all window seats are taken."]}},{id:20,audioUrl:"/audio/waiter-request-20.mp3",text:"Do you have high chairs for kids?",meaning:"아이들을 위한 높은 의자가 있나요?",answers:{korean:["네, 준비해 드리겠습니다.","죄송하지만, 준비된 의자가 없습니다."],english:["Yes, I'll bring one.","I'm sorry, but we don't have high chairs available."]}},{id:21,audioUrl:"/audio/waiter-request-21.mp3",text:"Can I have an extra plate?",meaning:"추가 접시를 받을 수 있을까요?",answers:{korean:["네, 추가 접시를 드리겠습니다.","죄송하지만, 추가 접시는 제공되지 않습니다."],english:["Yes, I'll bring you an extra plate.","I'm sorry, but we don't provide extra plates."]}},{id:22,audioUrl:"/audio/waiter-request-22.mp3",text:"Do you have a special menu for allergies?",meaning:"알레르기 메뉴가 있나요?",answers:{korean:["네, 특정 재료가 없는 메뉴를 추천해 드릴 수 있습니다.","죄송하지만, 모든 음식에 알레르기 성분이 포함될 가능성이 있습니다."],english:["Yes, we can recommend dishes without certain ingredients.","I'm sorry, but our food may contain allergens."]}},{id:23,audioUrl:"/audio/waiter-request-23.mp3",text:"Can I get my steak well-done?",meaning:"스테이크를 완전히 익혀서 받을 수 있나요?",answers:{korean:["네, 웰던으로 조리해 드리겠습니다.","죄송하지만, 기본 조리 상태로만 제공됩니다."],english:["Yes, we'll prepare it well-done.","I'm sorry, but we only serve it as is."]}},{id:24,audioUrl:"/audio/waiter-request-24.mp3",text:"Do you serve alcohol?",meaning:"술을 판매하나요?",answers:{korean:["네, 맥주와 와인이 있습니다.","죄송하지만, 주류는 판매하지 않습니다."],english:["Yes, we serve beer and wine.","I'm sorry, but we don't serve alcohol."]}},{id:25,audioUrl:"/audio/waiter-request-25.mp3",text:"Can I see the wine list?",meaning:"와인 리스트를 볼 수 있을까요?",answers:{korean:["네, 여기 있습니다.","죄송하지만, 현재 와인은 제공되지 않습니다."],english:["Yes, here it is.","I'm sorry, but we don't have wine available."]}},{id:26,audioUrl:"/audio/waiter-request-26.mp3",text:"Can I get a refill on my coffee?",meaning:"커피를 리필할 수 있을까요?",answers:{korean:["네, 커피는 무제한 리필 가능합니다.","죄송하지만, 커피 리필은 제공되지 않습니다."],english:["Yes, coffee refills are unlimited.","I'm sorry, but we don't offer coffee refills."]}},{id:27,audioUrl:"/audio/waiter-request-27.mp3",text:"Do you have a buffet option?",meaning:"뷔페 옵션이 있나요?",answers:{korean:["네, 점심 뷔페가 제공됩니다.","죄송하지만, 현재 뷔페는 운영되지 않습니다."],english:["Yes, we have a lunch buffet.","I'm sorry, but we don't have a buffet at the moment."]}},{id:28,audioUrl:"/audio/waiter-request-28.mp3",text:"Can I order a birthday cake?",meaning:"생일 케이크를 주문할 수 있나요?",answers:{korean:["네, 미리 예약하시면 가능합니다.","죄송하지만, 생일 케이크 서비스는 제공되지 않습니다."],english:["Yes, if you order in advance, we can arrange it.","I'm sorry, but we don't offer birthday cakes."]}},{id:29,audioUrl:"/audio/waiter-request-29.mp3",text:"Can I request a private dining area?",meaning:"개인 다이닝 공간을 요청할 수 있을까요?",answers:{korean:["네, 예약하시면 가능합니다.","죄송하지만, 개인 다이닝 공간은 없습니다."],english:["Yes, you can reserve a private dining area.","I'm sorry, but we don't have private dining rooms."]}},{id:30,audioUrl:"/audio/waiter-request-30.mp3",text:"Can I have a discount with my membership?",meaning:"멤버십으로 할인받을 수 있나요?",answers:{korean:["네, 멤버십으로 10% 할인이 적용됩니다.","죄송하지만, 멤버십 할인이 적용되지 않습니다."],english:["Yes, you get a 10% discount with your membership.","I'm sorry, but we don't offer membership discounts."]}}];function LH(){const[e,t]=w.useState("phrases"),[a,r]=w.useState(!1),o=w.useRef(null);Lt.useEffect(()=>{const c=()=>{r(window.scrollY>300)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const i=c=>{const h=document.getElementById(`question-${c}`);h&&h.scrollIntoView({behavior:"smooth",block:"start"})},l=()=>{window.scrollTo({top:0,behavior:"smooth"})},s=e==="phrases"?nC:rC;return d.jsxs("div",{className:"min-h-screen bg-gray-50",children:[d.jsx(bt,{}),d.jsxs("div",{className:"container mx-auto px-4 py-8",children:[d.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-4",children:"식당에서 영어로 주문하는 방법"}),d.jsxs("div",{className:"flex space-x-4 mb-8",children:[d.jsxs("button",{onClick:()=>t("phrases"),className:`flex items-center space-x-2 px-6 py-3 rounded-lg ${e==="phrases"?"bg-blue-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"} transition-colors duration-200`,children:[d.jsx(ba,{size:20}),d.jsx("span",{children:"패스트푸드점 & 레스토랑"})]}),d.jsxs("button",{onClick:()=>t("requests"),className:`flex items-center space-x-2 px-6 py-3 rounded-lg ${e==="requests"?"bg-blue-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"} transition-colors duration-200`,children:[d.jsx(sn,{size:20}),d.jsx("span",{children:"웨이터에게 요청할 때"})]})]}),d.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-sm mb-8",children:[d.jsx("h2",{className:"text-lg font-semibold text-gray-700 mb-3",children:"문제 바로가기"}),d.jsx("div",{className:"flex flex-wrap gap-2",children:s.map(c=>d.jsx("button",{onClick:()=>i(c.id),className:"min-w-[40px] h-10 px-3 rounded-md bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 transition-colors duration-200",children:c.id},c.id))})]}),d.jsxs("div",{className:"space-y-6",ref:o,children:[e==="phrases"&&d.jsxs("div",{children:[d.jsx("h2",{className:"text-2xl font-semibold text-gray-800 mb-6",children:"패스트푸드점 & 레스토랑 영어 차이점 정리"}),d.jsx("div",{className:"space-y-6",children:nC.map(c=>d.jsx("div",{id:`question-${c.id}`,children:d.jsx(fe,{question:c})},c.id))})]}),e==="requests"&&d.jsxs("div",{children:[d.jsx("h2",{className:"text-2xl font-semibold text-gray-800 mb-6",children:"웨이터에게 요청할 때 필요한 영어 표현"}),d.jsx("div",{className:"space-y-6",children:rC.map(c=>d.jsx("div",{id:`question-${c.id}`,children:d.jsx(fe,{question:c})},c.id))})]})]})]}),d.jsx("button",{onClick:l,className:`fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-16"}`,"aria-label":"맨 위로 가기",children:d.jsx(De,{size:24})})]})}const oC=[{id:1,audioUrl:"/audio/bargaining-1.mp3",text:"Can you give me a discount?",meaning:"할인을 해주실 수 있나요?",answers:{korean:["네, 10% 할인해 드리겠습니다.","죄송하지만, 할인이 어렵습니다."],english:["Yes, I can give you a 10% discount.","I'm sorry, but we can't offer a discount."]}},{id:2,audioUrl:"/audio/bargaining-2.mp3",text:"Is this the best price you can offer?",meaning:"이게 최저 가격인가요?",answers:{korean:["네, 최저 가격입니다.","더 할인해 드릴 수 있습니다."],english:["Yes, this is the lowest price.","I can give you a better deal."]}},{id:3,audioUrl:"/audio/bargaining-3.mp3",text:"Can you lower the price?",meaning:"가격을 낮춰줄 수 있나요?",answers:{korean:["네, 조금 낮춰드릴 수 있습니다.","죄송하지만, 가격은 고정되어 있습니다."],english:["Yes, I can lower it a little.","I'm sorry, but the price is fixed."]}},{id:4,audioUrl:"/audio/bargaining-4.mp3",text:"I found this cheaper at another store.",meaning:"다른 가게에서 더 저렴하게 봤어요.",answers:{korean:["그렇다면 같은 가격으로 맞춰드리겠습니다.","우리 제품은 품질이 더 좋습니다."],english:["Then I can match the price.","Our product is of better quality."]}},{id:5,audioUrl:"/audio/bargaining-5.mp3",text:"What's your final price?",meaning:"최종 가격이 얼마인가요?",answers:{korean:["이 가격이 최종입니다.","조금 더 조정해 드릴 수 있습니다."],english:["This is my final offer.","I can adjust it a little more."]}},{id:6,audioUrl:"/audio/bargaining-6.mp3",text:"Can I get a better deal if I buy more?",meaning:"더 많이 사면 할인받을 수 있나요?",answers:{korean:["네, 대량 구매 시 할인이 가능합니다.","아니요, 가격은 동일합니다."],english:["Yes, we offer bulk discounts.","No, the price remains the same."]}},{id:7,audioUrl:"/audio/bargaining-7.mp3",text:"That's too expensive for me.",meaning:"제게는 너무 비싸요.",answers:{korean:["그럼 더 저렴한 상품을 보여드릴까요?","최대한 맞춰드리겠습니다."],english:["Shall I show you something cheaper?","I'll try to give you the best price."]}},{id:8,audioUrl:"/audio/bargaining-8.mp3",text:"I'm on a budget. Can you help me?",meaning:"예산이 한정되어 있어요. 도와주실 수 있나요?",answers:{korean:["네, 예산에 맞는 제품을 추천해 드릴게요.","죄송하지만, 가격 조정이 어렵습니다."],english:["Yes, I'll find something within your budget.","I'm sorry, but we can't lower the price."]}},{id:9,audioUrl:"/audio/bargaining-9.mp3",text:"Can you throw in something extra?",meaning:"뭔가 추가로 끼워줄 수 있나요?",answers:{korean:["네, 작은 선물을 드리겠습니다.","죄송하지만, 추가 제공이 어렵습니다."],english:["Yes, I'll include a small gift.","I'm sorry, but we can't add anything extra."]}},{id:10,audioUrl:"/audio/bargaining-10.mp3",text:"If I pay in cash, can I get a discount?",meaning:"현금으로 내면 할인되나요?",answers:{korean:["네, 현금 결제 시 5% 할인해 드립니다.","죄송하지만, 카드와 동일한 가격입니다."],english:["Yes, you get a 5% discount for cash payments.","I'm sorry, but the price is the same for cash or card."]}},{id:11,audioUrl:"/audio/bargaining-11.mp3",text:"Can you give me a better price?",meaning:"좀 더 나은 가격을 제시해 주실 수 있나요?",answers:{korean:["네, 조금 더 할인해 드릴 수 있습니다.","죄송하지만, 현재 가격이 최저가입니다."],english:["Yes, I can give you a little more discount.","I'm sorry, but this is our lowest price."]}},{id:12,audioUrl:"/audio/bargaining-12.mp3",text:"I really like it, but it's too expensive.",meaning:"정말 마음에 드는데 너무 비싸요.",answers:{korean:["그러면 특별 할인을 해드리겠습니다.","품질을 생각하면 이 가격이 적당합니다."],english:["Then I'll give you a special discount.","Considering the quality, this is a fair price."]}},{id:13,audioUrl:"/audio/bargaining-13.mp3",text:"Can I get a discount if I buy two?",meaning:"두 개 사면 할인되나요?",answers:{korean:["네, 10% 할인해 드리겠습니다.","죄송하지만, 개별 가격은 동일합니다."],english:["Yes, I can give you a 10% discount.","I'm sorry, but the price is the same."]}},{id:14,audioUrl:"/audio/bargaining-14.mp3",text:"I saw this for a lower price elsewhere.",meaning:"다른 곳에서 더 저렴한 가격을 봤어요.",answers:{korean:["그렇다면 같은 가격으로 드리겠습니다.","우리 제품은 더 높은 품질을 자랑합니다."],english:["Then I can match that price.","Our product has better quality."]}},{id:15,audioUrl:"/audio/bargaining-15.mp3",text:"That's a bit over my budget.",meaning:"제 예산을 조금 초과하네요.",answers:{korean:["그러면 가격을 좀 낮춰드릴게요.","이 가격이 최종 가격입니다."],english:["Then I'll lower the price a bit.","This is the final price."]}},{id:16,audioUrl:"/audio/bargaining-16.mp3",text:"Can you offer me a special deal?",meaning:"특별 할인을 받을 수 있나요?",answers:{korean:["네, 오늘 특별 할인을 적용해 드립니다.","죄송하지만, 특별 할인은 없습니다."],english:["Yes, I can give you a special deal today.","I'm sorry, but we don't have special discounts."]}},{id:17,audioUrl:"/audio/bargaining-17.mp3",text:"I'll take it if you lower the price.",meaning:"가격을 낮춰주시면 살게요.",answers:{korean:["좋습니다, 할인을 적용해 드리겠습니다.","죄송하지만, 가격을 더 낮출 수 없습니다."],english:["Alright, I'll give you a discount.","I'm sorry, but I can't lower the price any further."]}},{id:18,audioUrl:"/audio/bargaining-18.mp3",text:"That's still too expensive for me.",meaning:"그래도 너무 비싸요.",answers:{korean:["그럼 조금 더 할인해 드릴 수 있습니다.","이 가격이 최저가입니다."],english:["Then I can offer a little more discount.","This is the best price we can offer."]}},{id:19,audioUrl:"/audio/bargaining-19.mp3",text:"What's the lowest you can go?",meaning:"최저 가격이 얼마인가요?",answers:{korean:["이 가격이 최저 가격입니다.","조금 더 낮춰드릴 수 있습니다."],english:["This is the lowest price.","I can lower it just a bit more."]}},{id:20,audioUrl:"/audio/bargaining-20.mp3",text:"Can you include free shipping?",meaning:"무료 배송을 제공해 주실 수 있나요?",answers:{korean:["네, 무료 배송해 드리겠습니다.","죄송하지만, 배송비는 별도로 청구됩니다."],english:["Yes, I'll provide free shipping.","I'm sorry, but shipping costs extra."]}},{id:21,audioUrl:"/audio/bargaining-21.mp3",text:"If I buy now, can I get a discount?",meaning:"지금 사면 할인받을 수 있나요?",answers:{korean:["네, 지금 구매하시면 5% 할인됩니다.","죄송하지만, 현재 할인은 없습니다."],english:["Yes, you'll get a 5% discount if you buy now.","I'm sorry, but we don't have discounts at the moment."]}},{id:22,audioUrl:"/audio/bargaining-22.mp3",text:"Can I get a wholesale price?",meaning:"도매가로 구매할 수 있나요?",answers:{korean:["네, 대량 구매 시 할인이 적용됩니다.","죄송하지만, 도매 가격은 적용되지 않습니다."],english:["Yes, we offer bulk discounts.","I'm sorry, but wholesale pricing is not available."]}},{id:23,audioUrl:"/audio/bargaining-23.mp3",text:"I'd like to negotiate the price.",meaning:"가격을 협상하고 싶어요.",answers:{korean:["네, 협상 가능하니 제안을 주세요.","죄송하지만, 가격은 고정되어 있습니다."],english:["Yes, I'm open to negotiation.","I'm sorry, but the price is fixed."]}},{id:24,audioUrl:"/audio/bargaining-24.mp3",text:"Do you have any promotions?",meaning:"현재 진행 중인 프로모션이 있나요?",answers:{korean:["네, 특정 상품에 대한 할인이 있습니다.","현재 특별 할인은 없습니다."],english:["Yes, we have discounts on select items.","I'm sorry, but we don't have any promotions now."]}},{id:25,audioUrl:"/audio/bargaining-25.mp3",text:"Can I get a free gift with my purchase?",meaning:"구매하면 사은품을 받을 수 있나요?",answers:{korean:["네, 작은 선물을 드리겠습니다.","죄송하지만, 사은품 행사는 없습니다."],english:["Yes, I'll include a small gift.","I'm sorry, but we don't offer free gifts."]}},{id:26,audioUrl:"/audio/bargaining-26.mp3",text:"How about a buy-one-get-one deal?",meaning:"하나 사면 하나 더 받을 수 있나요?",answers:{korean:["네, 특정 상품에 대해 1+1 행사를 하고 있습니다.","죄송하지만, 1+1 행사는 없습니다."],english:["Yes, we have a buy-one-get-one deal on select items.","I'm sorry, but we don't offer such deals."]}},{id:27,audioUrl:"/audio/bargaining-27.mp3",text:"If I pay in advance, can I get a discount?",meaning:"선결제하면 할인되나요?",answers:{korean:["네, 선결제 시 5% 할인해 드립니다.","죄송하지만, 결제 방식에 따른 할인은 없습니다."],english:["Yes, you get a 5% discount for early payment.","I'm sorry, but we don't offer discounts based on payment method."]}},{id:28,audioUrl:"/audio/bargaining-28.mp3",text:"Can I pay in installments?",meaning:"할부로 결제할 수 있나요?",answers:{korean:["네, 3개월 무이자 할부가 가능합니다.","죄송하지만, 할부는 지원되지 않습니다."],english:["Yes, we offer 3-month interest-free installments.","I'm sorry, but we don't support installment payments."]}},{id:29,audioUrl:"/audio/bargaining-29.mp3",text:"Is there a student or senior discount?",meaning:"학생이나 노인 할인 있나요?",answers:{korean:["네, 학생과 노인을 위한 10% 할인이 있습니다.","죄송하지만, 특정 할인은 없습니다."],english:["Yes, we offer a 10% discount for students and seniors.","I'm sorry, but we don't have specific discounts."]}},{id:30,audioUrl:"/audio/bargaining-30.mp3",text:"Can I get a discount if I refer a friend?",meaning:"친구를 소개하면 할인받을 수 있나요?",answers:{korean:["네, 친구를 소개하면 5% 할인이 적용됩니다.","죄송하지만, 추천 할인은 없습니다."],english:["Yes, you get a 5% discount for referring a friend.","I'm sorry, but we don't offer referral discounts."]}}],iC=[{id:1,audioUrl:"/audio/duty-free-1.mp3",text:"Where is the duty-free shop?",meaning:"면세점이 어디에 있나요?",answers:{korean:["면세점은 출국장 안에 있습니다.","이쪽으로 가시면 면세점이 나옵니다."],english:["The duty-free shop is inside the departure area.","If you go this way, you'll find the duty-free store."]}},{id:2,audioUrl:"/audio/duty-free-2.mp3",text:"Do I need my passport to shop here?",meaning:"여기서 쇼핑하려면 여권이 필요한가요?",answers:{korean:["네, 여권과 탑승권을 제시해야 합니다.","아니요, 일부 제품은 여권 없이 구매할 수 있습니다."],english:["Yes, you need to show your passport and boarding pass.","No, some items can be purchased without a passport."]}},{id:3,audioUrl:"/audio/duty-free-3.mp3",text:"Can I pay in my local currency?",meaning:"내 통화로 결제할 수 있나요?",answers:{korean:["네, 다양한 통화를 받습니다.","죄송하지만, 결제는 달러 또는 유로로만 가능합니다."],english:["Yes, we accept various currencies.","I'm sorry, but we only accept USD or EUR."]}},{id:4,audioUrl:"/audio/duty-free-4.mp3",text:"Do you have any promotions or discounts?",meaning:"할인 행사나 프로모션이 있나요?",answers:{korean:["네, 특정 제품에 대해 10% 할인이 있습니다.","현재 특별 할인 행사는 없습니다."],english:["Yes, there is a 10% discount on selected items.","There are no special promotions at the moment."]}},{id:5,audioUrl:"/audio/duty-free-5.mp3",text:"Is there a limit on how much I can buy?",meaning:"구매 제한이 있나요?",answers:{korean:["네, 한 사람당 2개까지만 구매할 수 있습니다.","아니요, 제한 없이 구매 가능합니다."],english:["Yes, you can buy up to two per person.","No, you can purchase as much as you like."]}},{id:6,audioUrl:"/audio/duty-free-6.mp3",text:"Can I get a tax refund here?",meaning:"여기서 세금 환급을 받을 수 있나요?",answers:{korean:["네, 계산대에서 세금 환급 신청이 가능합니다.","아니요, 세금 환급은 출국장에서 하셔야 합니다."],english:["Yes, you can apply for a tax refund at the counter.","No, tax refunds must be done at the airport."]}},{id:7,audioUrl:"/audio/duty-free-7.mp3",text:"Can I return an item if I change my mind?",meaning:"구매 후 환불이 가능한가요?",answers:{korean:["네, 영수증을 지참하면 가능합니다.","아니요, 면세점 구매는 환불이 불가능합니다."],english:["Yes, you can return it with the receipt.","No, duty-free purchases are non-refundable."]}},{id:8,audioUrl:"/audio/duty-free-8.mp3",text:"How much is this in USD?",meaning:"이거 미국 달러로 얼마인가요?",answers:{korean:["대략 50달러입니다.","현재 환율 기준으로 75달러입니다."],english:["It's about 50 USD.","It's 75 USD based on the current exchange rate."]}},{id:9,audioUrl:"/audio/duty-free-9.mp3",text:"Can I pay with a credit card?",meaning:"신용카드로 결제할 수 있나요?",answers:{korean:["네, 모든 주요 신용카드를 받습니다.","죄송하지만, 현금만 가능합니다."],english:["Yes, we accept all major credit cards.","I'm sorry, but we only accept cash."]}},{id:10,audioUrl:"/audio/duty-free-10.mp3",text:"Can I get a receipt, please?",meaning:"영수증을 받을 수 있을까요?",answers:{korean:["네, 영수증을 드리겠습니다.","죄송하지만, 전자 영수증만 발급됩니다."],english:["Yes, here's your receipt.","I'm sorry, but we only provide electronic receipts."]}},{id:11,audioUrl:"/audio/duty-free-11.mp3",text:"Do you have any special offers?",meaning:"특별 할인 상품이 있나요?",answers:{korean:["네, 특정 향수에 20% 할인이 적용됩니다.","현재 특별 할인이 없습니다."],english:["Yes, we have a 20% discount on selected perfumes.","No, we don't have any special discounts at the moment."]}},{id:12,audioUrl:"/audio/duty-free-12.mp3",text:"Can I try this perfume?",meaning:"이 향수를 시향해볼 수 있나요?",answers:{korean:["네, 테스터가 준비되어 있습니다.","죄송하지만, 시향 테스터가 없습니다."],english:["Yes, we have a tester available.","I'm sorry, but we don't have testers."]}},{id:13,audioUrl:"/audio/duty-free-13.mp3",text:"Do you sell electronics duty-free?",meaning:"전자제품도 면세로 판매하나요?",answers:{korean:["네, 다양한 전자제품을 면세 가격으로 판매합니다.","죄송하지만, 전자제품은 면세로 판매되지 않습니다."],english:["Yes, we offer a variety of electronics at duty-free prices.","I'm sorry, but we don't sell electronics duty-free."]}},{id:14,audioUrl:"/audio/duty-free-14.mp3",text:"What's the return policy for duty-free items?",meaning:"면세품의 반품 규정은 어떻게 되나요?",answers:{korean:["구매 후 30일 이내에 환불 가능합니다.","면세품은 환불이 불가능합니다."],english:["You can return it within 30 days.","Duty-free purchases are non-refundable."]}},{id:15,audioUrl:"/audio/duty-free-15.mp3",text:"Do you have any luxury brand items?",meaning:"명품 브랜드 제품이 있나요?",answers:{korean:["네, 구찌와 루이비통이 있습니다.","죄송하지만, 현재 명품 제품이 없습니다."],english:["Yes, we have Gucci and Louis Vuitton.","I'm sorry, but we don't carry luxury brands right now."]}},{id:16,audioUrl:"/audio/duty-free-16.mp3",text:"Can I buy alcohol at this duty-free shop?",meaning:"이 면세점에서 술을 구매할 수 있나요?",answers:{korean:["네, 주류 코너가 따로 있습니다.","죄송하지만, 술은 판매하지 않습니다."],english:["Yes, we have a section for alcohol.","I'm sorry, but we don't sell alcohol."]}},{id:17,audioUrl:"/audio/duty-free-17.mp3",text:"What is the limit for duty-free alcohol purchases?",meaning:"면세 주류 구매 한도가 있나요?",answers:{korean:["네, 한 사람당 1리터까지 구매 가능합니다.","아니요, 구매 제한이 없습니다."],english:["Yes, you can buy up to 1 liter per person.","No, there is no limit on alcohol purchases."]}},{id:18,audioUrl:"/audio/duty-free-18.mp3",text:"Can I buy cigarettes duty-free?",meaning:"면세로 담배를 구매할 수 있나요?",answers:{korean:["네, 담배 코너가 있습니다.","죄송하지만, 담배는 판매하지 않습니다."],english:["Yes, we have a section for cigarettes.","I'm sorry, but we don't sell cigarettes."]}},{id:19,audioUrl:"/audio/duty-free-19.mp3",text:"What is the cigarette purchase limit?",meaning:"담배 구매 한도가 있나요?",answers:{korean:["네, 한 사람당 10갑까지만 구매 가능합니다.","제한 없이 구매 가능합니다."],english:["Yes, you can buy up to 10 packs per person.","No, there is no limit on cigarette purchases."]}},{id:20,audioUrl:"/audio/duty-free-20.mp3",text:"Do you have a membership program?",meaning:"멤버십 프로그램이 있나요?",answers:{korean:["네, 가입하시면 추가 할인 혜택이 있습니다.","죄송하지만, 멤버십 프로그램은 없습니다."],english:["Yes, you get extra discounts if you sign up.","I'm sorry, but we don't have a membership program."]}},{id:21,audioUrl:"/audio/duty-free-21.mp3",text:"Can I pre-order duty-free items online?",meaning:"면세품을 온라인으로 미리 주문할 수 있나요?",answers:{korean:["네, 온라인 주문 후 공항에서 픽업 가능합니다.","죄송하지만, 온라인 주문은 불가능합니다."],english:["Yes, you can order online and pick up at the airport.","I'm sorry, but we don't offer online pre-orders."]}},{id:22,audioUrl:"/audio/duty-free-22.mp3",text:"Where do I pick up my pre-ordered duty-free items?",meaning:"미리 주문한 면세품은 어디서 찾나요?",answers:{korean:["출국장 내 픽업 데스크에서 찾을 수 있습니다.","구매한 면세점에서 직접 수령해야 합니다."],english:["You can pick it up at the pickup desk in the departure area.","You must collect it from the store where you purchased it."]}},{id:23,audioUrl:"/audio/duty-free-23.mp3",text:"Are cosmetics cheaper here than in my country?",meaning:"이곳의 화장품이 제 나라보다 저렴한가요?",answers:{korean:["네, 면세 가격으로 더 저렴합니다.","환율에 따라 다를 수 있습니다."],english:["Yes, they are cheaper at duty-free prices.","It depends on the exchange rate."]}},{id:24,audioUrl:"/audio/duty-free-24.mp3",text:"Can I exchange an item if it's defective?",meaning:"제품이 불량이면 교환이 가능한가요?",answers:{korean:["네, 영수증을 지참하면 교환 가능합니다.","죄송하지만, 면세품 교환은 어렵습니다."],english:["Yes, you can exchange it with the receipt.","I'm sorry, but duty-free items cannot be exchanged."]}},{id:25,audioUrl:"/audio/duty-free-25.mp3",text:"Do you offer free samples?",meaning:"무료 샘플을 제공하나요?",answers:{korean:["네, 화장품 샘플을 드릴 수 있습니다.","죄송하지만, 샘플 제공은 없습니다."],english:["Yes, we can give you cosmetic samples.","I'm sorry, but we don't offer free samples."]}},{id:26,audioUrl:"/audio/duty-free-26.mp3",text:"Can I use a discount coupon here?",meaning:"할인 쿠폰을 사용할 수 있나요?",answers:{korean:["네, 일부 제품에 적용 가능합니다.","죄송하지만, 쿠폰 사용이 불가능합니다."],english:["Yes, it can be applied to selected items.","I'm sorry, but coupons are not accepted."]}},{id:27,audioUrl:"/audio/duty-free-27.mp3",text:"Is this the final price?",meaning:"이 가격이 최종 가격인가요?",answers:{korean:["네, 면세 가격으로 최저가입니다.","조금 더 할인해 드릴 수 있습니다."],english:["Yes, this is the lowest duty-free price.","I can give you a bit more discount."]}},{id:28,audioUrl:"/audio/duty-free-28.mp3",text:"Can I buy duty-free items on arrival?",meaning:"입국 시에도 면세품을 구매할 수 있나요?",answers:{korean:["네, 입국 면세점이 따로 있습니다.","아니요, 출국할 때만 구매할 수 있습니다."],english:["Yes, there is an arrival duty-free shop.","No, duty-free purchases are only for departures."]}},{id:29,audioUrl:"/audio/duty-free-29.mp3",text:"Can I get free gift wrapping?",meaning:"무료 선물 포장이 가능한가요?",answers:{korean:["네, 무료로 포장해 드립니다.","죄송하지만, 선물 포장 서비스는 없습니다."],english:["Yes, we offer free gift wrapping.","I'm sorry, but we don't provide gift wrapping."]}},{id:30,audioUrl:"/audio/duty-free-30.mp3",text:"Can I get a duty-free shopping bag?",meaning:"면세점 쇼핑백을 받을 수 있나요?",answers:{korean:["네, 무료로 제공해 드립니다.","죄송하지만, 쇼핑백은 별도로 구매하셔야 합니다."],english:["Yes, we provide it for free.","I'm sorry, but you need to purchase a shopping bag separately."]}}];function IH(){const[e,t]=w.useState("bargaining"),[a,r]=w.useState(!1),o=w.useRef(null);Lt.useEffect(()=>{const c=()=>{r(window.scrollY>300)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const i=c=>{const h=document.getElementById(`question-${c}`);h&&h.scrollIntoView({behavior:"smooth",block:"start"})},l=()=>{window.scrollTo({top:0,behavior:"smooth"})},s=e==="bargaining"?oC:iC;return d.jsxs("div",{className:"min-h-screen bg-gray-50",children:[d.jsx(bt,{}),d.jsxs("div",{className:"container mx-auto px-4 py-8",children:[d.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-4",children:"쇼핑할 때 유용한 영어 회화"}),d.jsxs("div",{className:"flex space-x-4 mb-8",children:[d.jsxs("button",{onClick:()=>t("bargaining"),className:`flex items-center space-x-2 px-6 py-3 rounded-lg ${e==="bargaining"?"bg-blue-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"} transition-colors duration-200`,children:[d.jsx(yn,{size:20}),d.jsx("span",{children:"가격 흥정할 때"})]}),d.jsxs("button",{onClick:()=>t("dutyfree"),className:`flex items-center space-x-2 px-6 py-3 rounded-lg ${e==="dutyfree"?"bg-blue-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"} transition-colors duration-200`,children:[d.jsx(In,{size:20}),d.jsx("span",{children:"면세점 쇼핑"})]})]}),d.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-sm mb-8",children:[d.jsx("h2",{className:"text-lg font-semibold text-gray-700 mb-3",children:"문제 바로가기"}),d.jsx("div",{className:"flex flex-wrap gap-2",children:s.map(c=>d.jsx("button",{onClick:()=>i(c.id),className:"min-w-[40px] h-10 px-3 rounded-md bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 transition-colors duration-200",children:c.id},c.id))})]}),d.jsxs("div",{className:"space-y-6",ref:o,children:[e==="bargaining"&&d.jsxs("div",{children:[d.jsx("h2",{className:"text-2xl font-semibold text-gray-800 mb-6",children:"가격 흥정할 때 영어로 말하기"}),d.jsx("div",{className:"space-y-6",children:oC.map(c=>d.jsx("div",{id:`question-${c.id}`,children:d.jsx(fe,{question:c})},c.id))})]}),e==="dutyfree"&&d.jsxs("div",{children:[d.jsx("h2",{className:"text-2xl font-semibold text-gray-800 mb-6",children:"면세점 쇼핑 시 필수 영어 표현"}),d.jsx("div",{className:"space-y-6",children:iC.map(c=>d.jsx("div",{id:`question-${c.id}`,children:d.jsx(fe,{question:c})},c.id))})]})]})]}),d.jsx("button",{onClick:l,className:`fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-16"}`,"aria-label":"맨 위로 가기",children:d.jsx(De,{size:24})})]})}const lC=[{id:1,audioUrl:"/audio/taxi-1.mp3",text:"Where can I find a taxi?",meaning:"택시는 어디에서 탈 수 있나요?",answers:{korean:["저쪽 택시 승강장에서 탈 수 있습니다.","길에서 손을 들어 택시를 잡을 수 있습니다."],english:["You can get one at the taxi stand over there.","You can hail a taxi on the street."]}},{id:2,audioUrl:"/audio/taxi-2.mp3",text:"Can you take me to this address?",meaning:"이 주소로 가주실 수 있나요?",answers:{korean:["네, 바로 출발하겠습니다.","죄송하지만, 그곳으로는 갈 수 없습니다."],english:["Yes, I’ll take you there.","I’m sorry, but I can’t go to that location."]}},{id:3,audioUrl:"/audio/taxi-3.mp3",text:"How much will the fare be?",meaning:"요금이 얼마나 나올까요?",answers:{korean:["대략 20달러 정도 나올 것입니다.","미터기로 측정됩니다."],english:["It will be around $20.","It depends on the meter."]}},{id:4,audioUrl:"/audio/taxi-4.mp3",text:"Can you take me to the airport?",meaning:"공항까지 가주실 수 있나요?",answers:{korean:["네, 공항까지 모셔다 드리겠습니다.","죄송하지만, 공항까지 운행하지 않습니다."],english:["Yes, I’ll take you to the airport.","I’m sorry, but I don’t go to the airport."]}},{id:5,audioUrl:"/audio/taxi-5.mp3",text:"How long will it take to get there?",meaning:"거기까지 얼마나 걸릴까요?",answers:{korean:["약 30분 정도 걸릴 것입니다.","교통 상황에 따라 달라질 수 있습니다."],english:["It will take about 30 minutes.","It depends on the traffic."]}},{id:6,audioUrl:"/audio/taxi-6.mp3",text:"Do you take credit cards?",meaning:"신용카드 결제가 가능한가요?",answers:{korean:["네, 신용카드로 결제할 수 있습니다.","죄송하지만, 현금만 받습니다."],english:["Yes, you can pay by credit card.","I’m sorry, but we only accept cash."]}},{id:7,audioUrl:"/audio/taxi-7.mp3",text:"Please use the meter.",meaning:"미터기를 사용해 주세요.",answers:{korean:["네, 미터기를 켜겠습니다.","죄송하지만, 미터기 없이 정액 요금입니다."],english:["Sure, I’ll turn on the meter.","I’m sorry, but we use a fixed fare."]}},{id:8,audioUrl:"/audio/taxi-8.mp3",text:"Can you drive a bit faster?",meaning:"조금 더 빨리 가주실 수 있나요?",answers:{korean:["네, 안전하게 빨리 가겠습니다.","죄송하지만, 제한 속도를 준수해야 합니다."],english:["Sure, I’ll drive a bit faster.","I’m sorry, but I have to follow the speed limit."]}},{id:9,audioUrl:"/audio/taxi-9.mp3",text:"Can you take the shortest route?",meaning:"가장 빠른 길로 가주세요.",answers:{korean:["네, 최단 경로로 가겠습니다.","교통 상황을 보고 결정하겠습니다."],english:["Yes, I’ll take the shortest route.","I’ll check the traffic first."]}},{id:10,audioUrl:"/audio/taxi-10.mp3",text:"Can I pay with cash?",meaning:"현금으로 결제할 수 있나요?",answers:{korean:["네, 현금 결제가 가능합니다.","죄송하지만, 카드 결제만 가능합니다."],english:["Yes, cash is fine.","I’m sorry, but we only accept card payments."]}},{id:11,audioUrl:"/audio/taxi-11.mp3",text:"Can you take me to the city center?",meaning:"시내 중심가로 가주실 수 있나요?",answers:{korean:["네, 시내 중심까지 모셔다 드리겠습니다.","죄송하지만, 현재 시내로 가는 택시는 없습니다."],english:["Yes, I’ll take you to the city center.","I’m sorry, but taxis are not available for downtown now."]}},{id:12,audioUrl:"/audio/taxi-12.mp3",text:"How much is the fare to downtown?",meaning:"시내까지 요금이 얼마인가요?",answers:{korean:["약 15달러 정도 나올 것입니다.","미터기로 측정됩니다."],english:["It will be around $15.","It depends on the meter."]}},{id:13,audioUrl:"/audio/taxi-13.mp3",text:"Can you wait for me here?",meaning:"여기서 잠시 기다려 주실 수 있나요?",answers:{korean:["네, 추가 요금이 부과됩니다.","죄송하지만, 대기할 수 없습니다."],english:["Yes, but there will be a waiting charge.","I’m sorry, but I can’t wait."]}},{id:14,audioUrl:"/audio/taxi-14.mp3",text:"Do you charge extra for luggage?",meaning:"짐 추가 요금이 있나요?",answers:{korean:["아니요, 추가 요금은 없습니다.","네, 추가 가방당 5달러 부과됩니다."],english:["No, there’s no extra charge.","Yes, there’s a $5 charge per extra bag."]}},{id:15,audioUrl:"/audio/taxi-15.mp3",text:"Can you take me to this hotel?",meaning:"이 호텔까지 가주실 수 있나요?",answers:{korean:["네, 호텔까지 모셔다 드리겠습니다.","죄송하지만, 해당 지역에는 운행하지 않습니다."],english:["Yes, I’ll take you to the hotel.","I’m sorry, but I don’t go to that area."]}},{id:16,audioUrl:"/audio/taxi-16.mp3",text:"Do you know the way to this address?",meaning:"이 주소로 가는 길을 아시나요?",answers:{korean:["네, 잘 알고 있습니다.","아니요, 내비게이션을 사용하겠습니다."],english:["Yes, I know the way.","No, I’ll use GPS."]}},{id:17,audioUrl:"/audio/taxi-17.mp3",text:"Can I share a taxi with someone?",meaning:"다른 사람과 함께 타도 되나요?",answers:{korean:["네, 합승 가능합니다.","죄송하지만, 합승은 허용되지 않습니다."],english:["Yes, you can share a taxi.","I’m sorry, but sharing is not allowed."]}},{id:18,audioUrl:"/audio/taxi-18.mp3",text:"Do you have a fixed fare to the airport?",meaning:"공항까지 정액 요금이 있나요?",answers:{korean:["네, 공항까지 30달러입니다.","아니요, 미터기로 계산됩니다."],english:["Yes, it's a fixed fare of $30 to the airport.","No, the fare is based on the meter."]}},{id:19,audioUrl:"/audio/taxi-19.mp3",text:"Can you pick me up later?",meaning:"나중에 다시 픽업해 주실 수 있나요?",answers:{korean:["네, 원하시는 시간에 맞춰 오겠습니다.","죄송하지만, 예약 서비스는 제공되지 않습니다."],english:["Yes, I can pick you up at your requested time.","I’m sorry, but we don’t offer reservation services."]}},{id:20,audioUrl:"/audio/taxi-20.mp3",text:"Can I book a taxi in advance?",meaning:"사전에 택시를 예약할 수 있나요?",answers:{korean:["네, 전화로 예약할 수 있습니다.","죄송하지만, 사전 예약은 불가능합니다."],english:["Yes, you can book a taxi by phone.","I’m sorry, but we don’t take advance bookings."]}},{id:21,audioUrl:"/audio/taxi-21.mp3",text:"Can I sit in the front seat?",meaning:"앞자리에 앉아도 될까요?",answers:{korean:["네, 앞자리에 앉으셔도 됩니다.","죄송하지만, 뒤에 앉아 주셔야 합니다."],english:["Yes, you can sit in the front.","I’m sorry, but you have to sit in the back."]}},{id:22,audioUrl:"/audio/taxi-22.mp3",text:"Please take the scenic route.",meaning:"경치 좋은 길로 가 주세요.",answers:{korean:["네, 아름다운 경로로 가겠습니다.","죄송하지만, 최단 거리로 가겠습니다."],english:["Sure, I’ll take the scenic route.","I’m sorry, but I’ll take the shortest way."]}},{id:23,audioUrl:"/audio/taxi-23.mp3",text:"Can I pay via mobile payment?",meaning:"모바일 결제가 가능한가요?",answers:{korean:["네, 모바일 결제가 가능합니다.","죄송하지만, 현금 또는 카드만 가능합니다."],english:["Yes, mobile payment is accepted.","I’m sorry, but we only take cash or card."]}},{id:24,audioUrl:"/audio/taxi-24.mp3",text:"Please drop me off here.",meaning:"여기에서 내려 주세요.",answers:{korean:["네, 여기서 세워 드리겠습니다.","죄송하지만, 이곳은 정차 금지 구역입니다."],english:["Sure, I’ll stop here.","I’m sorry, but stopping here is not allowed."]}},{id:25,audioUrl:"/audio/taxi-25.mp3",text:"Do you have change for a $50 bill?",meaning:"50달러 지폐 거스름돈이 있나요?",answers:{korean:["네, 거스름돈을 드릴 수 있습니다.","죄송하지만, 거스름돈이 없습니다."],english:["Yes, I can give you change.","I’m sorry, but I don’t have change."]}},{id:26,audioUrl:"/audio/taxi-26.mp3",text:"Can I request a receipt?",meaning:"영수증을 받을 수 있을까요?",answers:{korean:["네, 영수증을 드리겠습니다.","죄송하지만, 영수증이 없습니다."],english:["Yes, here’s your receipt.","I’m sorry, but I don’t have receipts."]}},{id:27,audioUrl:"/audio/taxi-27.mp3",text:"How do I report a lost item?",meaning:"분실물을 신고하려면 어떻게 하나요?",answers:{korean:["택시 회사에 연락해 주세요.","경찰서에 분실 신고를 하셔야 합니다."],english:["Please contact the taxi company.","You need to report it to the police."]}},{id:28,audioUrl:"/audio/taxi-28.mp3",text:"Can I request a female driver?",meaning:"여성 운전사를 요청할 수 있나요?",answers:{korean:["네, 여성 운전사 배정을 도와드리겠습니다.","죄송하지만, 특정 운전사 요청은 어렵습니다."],english:["Yes, we can arrange a female driver.","I’m sorry, but we can’t assign specific drivers."]}},{id:29,audioUrl:"/audio/taxi-29.mp3",text:"Thank you, have a great day!",meaning:"감사합니다, 좋은 하루 보내세요!",answers:{korean:["네, 좋은 하루 되세요!","감사합니다. 안전한 여행 되세요!"],english:["Yes, have a great day!","Thank you! Have a safe trip!"]}},{id:30,audioUrl:"/audio/taxi-30.mp3",text:"Can you recommend a good taxi app?",meaning:"좋은 택시 앱을 추천해 주실 수 있나요?",answers:{korean:["네, Uber나 Lyft를 사용해 보세요.","죄송하지만, 특정 앱 추천은 어렵습니다."],english:["Yes, try using Uber or Lyft.","I'm sorry, but I can't recommend a specific app."]}}],cC=[{id:1,audioUrl:"/audio/public-transport-1.mp3",text:"Where is the nearest bus stop?",meaning:"가장 가까운 버스 정류장은 어디인가요?",answers:{korean:["저쪽 모퉁이를 돌면 있습니다.","이 길을 따라가면 버스 정류장이 나옵니다."],english:["It’s around the corner.","Just follow this street and you’ll find the bus stop."]}},{id:2,audioUrl:"/audio/public-transport-2.mp3",text:"How do I get to the subway station?",meaning:"지하철역으로 어떻게 가나요?",answers:{korean:["이 길을 따라 5분 정도 걸어가면 됩니다.","다음 블록에서 오른쪽으로 가세요."],english:["Walk down this street for about 5 minutes.","Go right at the next block."]}},{id:3,audioUrl:"/audio/public-transport-3.mp3",text:"Which bus goes to the airport?",meaning:"공항으로 가는 버스는 몇 번인가요?",answers:{korean:["공항 가는 버스는 500번입니다.","공항행 버스는 이 정류장에서 탈 수 있습니다."],english:["The 500 bus goes to the airport.","You can catch the airport bus at this stop."]}},{id:4,audioUrl:"/audio/public-transport-4.mp3",text:"How much is the bus fare?",meaning:"버스 요금이 얼마인가요?",answers:{korean:["2달러입니다.","탑승 시 카드로 결제할 수 있습니다."],english:["It’s $2.","You can pay with a card when you board."]}},{id:5,audioUrl:"/audio/public-transport-5.mp3",text:"Do I need exact change for the bus?",meaning:"버스 요금은 잔돈을 맞춰야 하나요?",answers:{korean:["네, 정확한 금액을 준비하셔야 합니다.","아니요, 카드로 결제 가능합니다."],english:["Yes, you need exact change.","No, you can pay with a card."]}},{id:6,audioUrl:"/audio/public-transport-6.mp3",text:"How often do the buses run?",meaning:"버스는 얼마나 자주 오나요?",answers:{korean:["10분마다 한 대씩 옵니다.","러시아워에는 더 자주 운행됩니다."],english:["Every 10 minutes.","They run more frequently during rush hour."]}},{id:7,audioUrl:"/audio/public-transport-7.mp3",text:"Which subway line should I take to downtown?",meaning:"시내로 가려면 어떤 지하철 노선을 타야 하나요?",answers:{korean:["파란색 노선을 타시면 됩니다.","2호선을 타고 세 정거장 가세요."],english:["Take the blue line.","Take line 2 and go three stops."]}},{id:8,audioUrl:"/audio/public-transport-8.mp3",text:"Where can I buy a subway ticket?",meaning:"지하철 티켓은 어디서 살 수 있나요?",answers:{korean:["자동판매기에서 구매할 수 있습니다.","티켓 창구에서 구매 가능합니다."],english:["You can buy one at the vending machine.","You can buy it at the ticket counter."]}},{id:9,audioUrl:"/audio/public-transport-9.mp3",text:"Do I need a transit card for the subway?",meaning:"지하철 이용 시 교통카드가 필요한가요?",answers:{korean:["아니요, 현금으로도 결제할 수 있습니다.","네, 교통카드가 있어야 합니다."],english:["No, you can pay with cash.","Yes, you need a transit card."]}},{id:10,audioUrl:"/audio/public-transport-10.mp3",text:"How do I transfer between subway lines?",meaning:"지하철 노선 간 환승은 어떻게 하나요?",answers:{korean:["환승역에서 내려서 다른 노선으로 갈아타세요.","같은 역 안에서 노선을 바꿀 수 있습니다."],english:["Get off at the transfer station and switch lines.","You can change lines within the same station."]}},{id:11,audioUrl:"/audio/public-transport-11.mp3",text:"How do I know when to get off the bus?",meaning:"버스에서 언제 내려야 하는지 어떻게 알 수 있나요?",answers:{korean:["운전기사에게 미리 알려달라고 요청할 수 있습니다.","전광판에서 다음 정거장을 확인하세요."],english:["You can ask the driver to let you know.","Check the next stop on the display."]}},{id:12,audioUrl:"/audio/public-transport-12.mp3",text:"Does this subway go to the airport?",meaning:"이 지하철이 공항으로 가나요?",answers:{korean:["아니요, 공항행 노선으로 갈아타셔야 합니다.","네, 이 노선은 공항까지 갑니다."],english:["No, you need to transfer to the airport line.","Yes, this line goes to the airport."]}},{id:13,audioUrl:"/audio/public-transport-13.mp3",text:"Is this the right bus for Central Park?",meaning:"이 버스가 센트럴파크로 가나요?",answers:{korean:["네, 이 버스를 타시면 됩니다.","아니요, 다른 버스를 타야 합니다."],english:["Yes, this is the right bus.","No, you need to take a different bus."]}},{id:14,audioUrl:"/audio/public-transport-14.mp3",text:"Where do I get off for the museum?",meaning:"박물관에서 내리려면 어디서 내려야 하나요?",answers:{korean:["박물관 정류장에서 내리시면 됩니다.","세 정거장 후에 내리시면 됩니다."],english:["Get off at the museum stop.","Get off in three stops."]}},{id:15,audioUrl:"/audio/public-transport-15.mp3",text:"Can I use the same ticket for the bus and subway?",meaning:"버스와 지하철에서 같은 티켓을 사용할 수 있나요?",answers:{korean:["네, 환승이 가능합니다.","아니요, 별도의 티켓이 필요합니다."],english:["Yes, transfers are allowed.","No, you need a separate ticket."]}},{id:16,audioUrl:"/audio/public-transport-16.mp3",text:"How late do the subways run?",meaning:"지하철은 몇 시까지 운행하나요?",answers:{korean:["밤 12시까지 운행합니다.","주말에는 새벽 2시까지 운행합니다."],english:["They run until midnight.","On weekends, they run until 2 AM."]}},{id:17,audioUrl:"/audio/public-transport-17.mp3",text:"Do I need to tap my card when exiting?",meaning:"출구에서도 교통카드를 찍어야 하나요?",answers:{korean:["네, 출구에서도 카드를 태그해야 합니다.","아니요, 입구에서만 태그하면 됩니다."],english:["Yes, you need to tap when exiting.","No, you only need to tap when entering."]}},{id:18,audioUrl:"/audio/public-transport-18.mp3",text:"Which platform is for trains going north?",meaning:"북쪽 방향 기차는 어느 플랫폼에서 타나요?",answers:{korean:["플랫폼 3에서 타시면 됩니다.","전광판에서 확인하세요."],english:["Take it from platform 3.","Check the display board."]}},{id:19,audioUrl:"/audio/public-transport-19.mp3",text:"How do I get to the express train?",meaning:"급행 열차는 어떻게 타나요?",answers:{korean:["이 노선에서 급행 열차가 정차하는 곳에서 타세요.","급행 플랫폼으로 이동하세요."],english:["Take it at the express stop on this line.","Go to the express platform."]}},{id:20,audioUrl:"/audio/public-transport-20.mp3",text:"What time is the last bus?",meaning:"막차 버스는 몇 시인가요?",answers:{korean:["밤 11시에 마지막 버스가 출발합니다.","막차는 요일에 따라 다릅니다."],english:["The last bus leaves at 11 PM.","The last bus time depends on the day."]}},{id:21,audioUrl:"/audio/public-transport-21.mp3",text:"Do I need to press the stop button to get off?",meaning:"내릴 때 정류장 버튼을 눌러야 하나요?",answers:{korean:["네, 미리 눌러야 합니다.","아니요, 정류장마다 자동으로 정차합니다."],english:["Yes, you need to press it in advance.","No, the bus stops at every station."]}},{id:22,audioUrl:"/audio/public-transport-22.mp3",text:"Is there an elevator to the subway?",meaning:"지하철에 엘리베이터가 있나요?",answers:{korean:["네, 입구 근처에 있습니다.","죄송하지만, 엘리베이터가 없습니다."],english:["Yes, it’s near the entrance.","I'm sorry, but there's no elevator."]}},{id:23,audioUrl:"/audio/public-transport-23.mp3",text:"Can I use a mobile ticket?",meaning:"모바일 티켓을 사용할 수 있나요?",answers:{korean:["네, QR 코드로 승차할 수 있습니다.","아니요, 종이 티켓이 필요합니다."],english:["Yes, you can scan the QR code.","No, you need a paper ticket."]}},{id:24,audioUrl:"/audio/public-transport-24.mp3",text:"Where can I recharge my transit card?",meaning:"교통카드를 충전할 수 있는 곳이 어디인가요?",answers:{korean:["지하철역 내 충전 기계를 이용하세요.","편의점에서도 충전 가능합니다."],english:["Use the recharge machine inside the station.","You can also recharge at convenience stores."]}},{id:25,audioUrl:"/audio/public-transport-25.mp3",text:"Can I buy a day pass?",meaning:"하루 이용권을 구매할 수 있나요?",answers:{korean:["네, 하루 이용권은 티켓 창구에서 판매합니다.","아니요, 정기권만 구매 가능합니다."],english:["Yes, you can buy a day pass at the ticket counter.","No, only regular passes are available."]}},{id:26,audioUrl:"/audio/public-transport-26.mp3",text:"Does this subway go directly to Times Square?",meaning:"이 지하철이 타임스퀘어까지 직행하나요?",answers:{korean:["네, 직행으로 갑니다.","아니요, 한 번 환승해야 합니다."],english:["Yes, it goes directly.","No, you need to transfer once."]}},{id:27,audioUrl:"/audio/public-transport-27.mp3",text:"Which side do the train doors open?",meaning:"기차 문이 어느 쪽에서 열리나요?",answers:{korean:["왼쪽에서 열립니다.","오른쪽에서 열립니다."],english:["They open on the left side.","They open on the right side."]}},{id:28,audioUrl:"/audio/public-transport-28.mp3",text:"How do I check the bus schedule?",meaning:"버스 시간을 어떻게 확인하나요?",answers:{korean:["정류장에 있는 전광판에서 확인하세요.","모바일 앱에서 확인 가능합니다."],english:["Check the digital board at the stop.","You can check it on the mobile app."]}},{id:29,audioUrl:"/audio/public-transport-29.mp3",text:"What’s the fastest way to get to Union Square?",meaning:"유니온 스퀘어로 가는 가장 빠른 방법은 무엇인가요?",answers:{korean:["급행 지하철을 타면 빠릅니다.","버스를 타는 것이 더 빠를 수도 있습니다."],english:["Taking the express subway is the fastest.","The bus might be faster."]}},{id:30,audioUrl:"/audio/public-transport-30.mp3",text:"What’s the best way to get to the train station?",meaning:"기차역으로 가는 가장 좋은 방법은 무엇인가요?",answers:{korean:["택시를 타는 것이 가장 빠릅니다.","지하철을 타면 편리합니다."],english:["Taking a taxi is the fastest way.","Taking the subway is the most convenient option."]}}];function CH(){const[e,t]=w.useState("taxi"),[a,r]=w.useState(!1),o=w.useRef(null);Lt.useEffect(()=>{const c=()=>{r(window.scrollY>300)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const i=c=>{const h=document.getElementById(`question-${c}`);h&&h.scrollIntoView({behavior:"smooth",block:"start"})},l=()=>{window.scrollTo({top:0,behavior:"smooth"})},s=e==="taxi"?lC:cC;return d.jsxs("div",{className:"min-h-screen bg-gray-50",children:[d.jsx(bt,{}),d.jsxs("div",{className:"container mx-auto px-4 py-8",children:[d.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-4",children:"길 찾기 & 교통수단 이용 영어 표현"}),d.jsxs("div",{className:"flex space-x-4 mb-8",children:[d.jsxs("button",{onClick:()=>t("taxi"),className:`flex items-center space-x-2 px-6 py-3 rounded-lg ${e==="taxi"?"bg-blue-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"} transition-colors duration-200`,children:[d.jsx(hn,{size:20}),d.jsx("span",{children:"택시 탈 때"})]}),d.jsxs("button",{onClick:()=>t("public"),className:`flex items-center space-x-2 px-6 py-3 rounded-lg ${e==="public"?"bg-blue-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"} transition-colors duration-200`,children:[d.jsx(dn,{size:20}),d.jsx("span",{children:"대중교통"})]})]}),d.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-sm mb-8",children:[d.jsx("h2",{className:"text-lg font-semibold text-gray-700 mb-3",children:"문제 바로가기"}),d.jsx("div",{className:"flex flex-wrap gap-2",children:s.map(c=>d.jsx("button",{onClick:()=>i(c.id),className:"min-w-[40px] h-10 px-3 rounded-md bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 transition-colors duration-200",children:c.id},c.id))})]}),d.jsxs("div",{className:"space-y-6",ref:o,children:[e==="taxi"&&d.jsxs("div",{children:[d.jsx("h2",{className:"text-2xl font-semibold text-gray-800 mb-6",children:"택시 탈 때 유용한 영어 문장"}),d.jsx("div",{className:"space-y-6",children:lC.map(c=>d.jsx("div",{id:`question-${c.id}`,children:d.jsx(fe,{question:c})},c.id))})]}),e==="public"&&d.jsxs("div",{children:[d.jsx("h2",{className:"text-2xl font-semibold text-gray-800 mb-6",children:"대중교통(버스, 지하철)에서 영어로 길 묻기"}),d.jsx("div",{className:"space-y-6",children:cC.map(c=>d.jsx("div",{id:`question-${c.id}`,children:d.jsx(fe,{question:c})},c.id))})]})]})]}),d.jsx("button",{onClick:l,className:`fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-16"}`,"aria-label":"맨 위로 가기",children:d.jsx(De,{size:24})})]})}const sC=[{id:1,audioUrl:"/audio/passport-loss-1.mp3",text:"I lost my passport. Can you help me?",meaning:"여권을 잃어버렸어요. 도와주실 수 있나요?",answers:{korean:["네, 신고 절차를 도와드리겠습니다.","여권을 마지막으로 본 곳이 어디인가요?"],english:["Yes, we’ll assist you with the report.","Where was the last place you saw your passport?"]}},{id:2,audioUrl:"/audio/passport-loss-2.mp3",text:"Where is the nearest police station?",meaning:"가장 가까운 경찰서는 어디인가요?",answers:{korean:["이 길을 따라가면 경찰서가 있습니다.","도움이 필요하시면 경찰을 불러드릴까요?"],english:["There is a police station down this street.","Would you like me to call the police for you?"]}},{id:3,audioUrl:"/audio/passport-loss-3.mp3",text:"I need to report a lost passport.",meaning:"여권 분실 신고를 하고 싶어요.",answers:{korean:["네, 여권 정보를 알려 주세요.","여권 분실 사유를 설명해 주세요."],english:["Sure, please provide your passport details.","Can you explain how you lost your passport?"]}},{id:4,audioUrl:"/audio/passport-loss-4.mp3",text:"What should I do after losing my passport?",meaning:"여권을 잃어버리면 어떻게 해야 하나요?",answers:{korean:["가장 먼저 경찰서에 신고하세요.","대사관에 연락하여 새 여권을 신청하세요."],english:["First, report it to the police.","Contact your embassy to apply for a new passport."]}},{id:5,audioUrl:"/audio/passport-loss-5.mp3",text:"Do I need a police report to get a new passport?",meaning:"새 여권을 발급받으려면 경찰 보고서가 필요하나요?",answers:{korean:["네, 경찰서에서 발급한 분실 신고서를 가져가셔야 합니다.","경우에 따라 대사관에서 직접 처리가 가능합니다."],english:["Yes, you need a police report for the embassy.","Sometimes, the embassy can process it directly."]}},{id:6,audioUrl:"/audio/passport-loss-6.mp3",text:"Can I get a copy of the police report?",meaning:"경찰 보고서 사본을 받을 수 있나요?",answers:{korean:["네, 처리 후 사본을 제공해 드리겠습니다.","죄송하지만, 사본 발급이 불가능합니다."],english:["Yes, we’ll provide a copy after processing.","I’m sorry, but we can’t issue a copy."]}},{id:7,audioUrl:"/audio/passport-loss-7.mp3",text:"How long does it take to get a new passport?",meaning:"새 여권을 받는 데 얼마나 걸리나요?",answers:{korean:["대략 3~5일 소요됩니다.","긴급 여권은 당일 발급 가능합니다."],english:["It usually takes 3-5 days.","An emergency passport can be issued the same day."]}},{id:8,audioUrl:"/audio/passport-loss-8.mp3",text:"Can I travel without a passport?",meaning:"여권 없이 여행할 수 있나요?",answers:{korean:["임시 여행 증명서를 받으셔야 합니다.","대사관에서 특별 허가를 받아야 합니다."],english:["You need to get a temporary travel document.","You must get special permission from the embassy."]}},{id:9,audioUrl:"/audio/passport-loss-9.mp3",text:"Do I need to pay a fee for a new passport?",meaning:"새 여권 발급에 비용이 발생하나요?",answers:{korean:["네, 여권 재발급 비용이 있습니다.","긴급 여권은 추가 비용이 있습니다."],english:["Yes, there is a fee for passport replacement.","Emergency passports have an additional charge."]}},{id:10,audioUrl:"/audio/passport-loss-10.mp3",text:"What documents do I need to replace my passport?",meaning:"여권을 재발급받으려면 어떤 서류가 필요한가요?",answers:{korean:["신분증과 경찰 신고서를 제출해야 합니다.","여권 사진 두 장이 필요합니다."],english:["You need to provide an ID and a police report.","You need two passport-sized photos."]}},{id:11,audioUrl:"/audio/passport-loss-11.mp3",text:"Can I get a temporary passport?",meaning:"임시 여권을 발급받을 수 있나요?",answers:{korean:["네, 대사관에서 임시 여권을 신청할 수 있습니다.","임시 여권은 여행 일정이 있는 경우에만 발급됩니다."],english:["Yes, you can apply for a temporary passport at the embassy.","Temporary passports are only issued if you have travel plans."]}},{id:12,audioUrl:"/audio/passport-loss-12.mp3",text:"Where is my country’s embassy?",meaning:"제 나라 대사관은 어디에 있나요?",answers:{korean:["이 주소로 가시면 됩니다.","가장 가까운 대사관은 시내에 있습니다."],english:["You can go to this address.","The nearest embassy is in the city center."]}},{id:13,audioUrl:"/audio/passport-loss-13.mp3",text:"How do I contact my embassy?",meaning:"대사관에 어떻게 연락하나요?",answers:{korean:["대사관 전화번호를 알려드릴게요.","대사관 웹사이트에서 연락처를 확인하세요."],english:["I can give you the embassy’s phone number.","Check the embassy’s website for contact details."]}},{id:14,audioUrl:"/audio/passport-loss-14.mp3",text:"Can I apply for a new passport online?",meaning:"온라인으로 새 여권을 신청할 수 있나요?",answers:{korean:["아니요, 대사관에 직접 방문해야 합니다.","일부 국가는 온라인 신청을 지원합니다."],english:["No, you need to visit the embassy in person.","Some countries allow online applications."]}},{id:15,audioUrl:"/audio/passport-loss-15.mp3",text:"What should I do if my visa was in the lost passport?",meaning:"여권에 비자가 있었는데 어떻게 해야 하나요?",answers:{korean:["대사관과 이민국에 문의하세요.","새 여권을 받은 후 비자를 다시 신청해야 합니다."],english:["Contact your embassy and immigration office.","You need to reapply for a visa after getting a new passport."]}},{id:16,audioUrl:"/audio/passport-loss-16.mp3",text:"Can I track my new passport application?",meaning:"새 여권 신청 상태를 확인할 수 있나요?",answers:{korean:["네, 대사관 웹사이트에서 확인할 수 있습니다.","대사관에 직접 문의하셔야 합니다."],english:["Yes, you can check it on the embassy’s website.","You need to contact the embassy directly."]}},{id:17,audioUrl:"/audio/passport-loss-17.mp3",text:"Do I need to go to court for a lost passport?",meaning:"여권 분실 시 법원에 가야 하나요?",answers:{korean:["아니요, 경찰 신고만 하면 됩니다.","일부 국가는 법적 절차가 필요할 수 있습니다."],english:["No, you only need to file a police report.","Some countries may require legal procedures."]}},{id:18,audioUrl:"/audio/passport-loss-18.mp3",text:"How can I prove my identity without a passport?",meaning:"여권 없이 신원을 어떻게 증명하나요?",answers:{korean:["운전면허증이나 다른 신분증을 사용하세요.","대사관에서 임시 신분증을 발급받을 수 있습니다."],english:["Use your driver’s license or another ID.","You can get a temporary ID from the embassy."]}},{id:19,audioUrl:"/audio/passport-loss-19.mp3",text:"Can I still check into my hotel without a passport?",meaning:"여권 없이 호텔 체크인이 가능한가요?",answers:{korean:["네, 다른 신분증을 제시하시면 됩니다.","일부 호텔은 여권이 꼭 필요합니다."],english:["Yes, you can use another form of ID.","Some hotels require a passport."]}},{id:20,audioUrl:"/audio/passport-loss-20.mp3",text:"How do I replace a lost passport if I’m on a tour?",meaning:"여행 중에 여권을 잃어버렸다면 어떻게 해야 하나요?",answers:{korean:["가이드에게 도움을 요청하세요.","가장 가까운 경찰서에 신고하세요."],english:["Ask your tour guide for assistance.","Report it to the nearest police station."]}},{id:21,audioUrl:"/audio/passport-loss-21.mp3",text:"What happens if someone finds my lost passport?",meaning:"누군가 제 여권을 찾으면 어떻게 되나요?",answers:{korean:["경찰서에 맡길 가능성이 높습니다.","대사관에 연락하여 분실 신고를 유지하세요."],english:["They will likely turn it into the police.","Keep your lost passport report active with the embassy."]}},{id:22,audioUrl:"/audio/passport-loss-22.mp3",text:"Can I still take my flight without a passport?",meaning:"여권 없이 비행기를 탈 수 있나요?",answers:{korean:["임시 여행 증명서가 필요합니다.","대사관에서 승객 식별 허가를 받아야 합니다."],english:["You need a temporary travel document.","The embassy must approve your identification for travel."]}},{id:23,audioUrl:"/audio/passport-loss-23.mp3",text:"How do I cancel my lost passport?",meaning:"분실된 여권을 취소하려면 어떻게 하나요?",answers:{korean:["대사관에 분실 신고를 하셔야 합니다.","온라인으로 분실 신고를 할 수도 있습니다."],english:["Report it to your embassy.","Some countries allow online passport cancellation."]}},{id:24,audioUrl:"/audio/passport-loss-24.mp3",text:"Can I get an emergency passport in one day?",meaning:"하루 안에 긴급 여권을 받을 수 있나요?",answers:{korean:["네, 추가 비용을 내면 당일 발급이 가능합니다.","보통 하루에서 이틀이 소요됩니다."],english:["Yes, you can get one for an extra fee.","It usually takes one to two days."]}},{id:25,audioUrl:"/audio/passport-loss-25.mp3",text:"What if I lose my new passport again?",meaning:"새 여권도 또 잃어버리면 어떻게 되나요?",answers:{korean:["다시 경찰에 신고해야 합니다.","여러 번 분실하면 추가 심사가 필요할 수 있습니다."],english:["You must report it to the police again.","Multiple losses may require extra verification."]}},{id:26,audioUrl:"/audio/passport-loss-26.mp3",text:"Can someone else pick up my new passport?",meaning:"다른 사람이 제 새 여권을 대신 수령할 수 있나요?",answers:{korean:["네, 위임장을 작성하면 가능합니다.","아니요, 본인이 직접 수령해야 합니다."],english:["Yes, with a signed authorization letter.","No, you must pick it up in person."]}},{id:27,audioUrl:"/audio/passport-loss-27.mp3",text:"Do I need an appointment to apply for a new passport?",meaning:"새 여권 신청을 위해 예약이 필요한가요?",answers:{korean:["네, 미리 예약해야 합니다.","아니요, 직접 방문하시면 됩니다."],english:["Yes, you need to book an appointment.","No, you can walk in without an appointment."]}},{id:28,audioUrl:"/audio/passport-loss-28.mp3",text:"Can I expedite the passport process?",meaning:"여권 발급을 빠르게 할 수 있나요?",answers:{korean:["네, 긴급 신청이 가능합니다.","추가 비용이 발생할 수 있습니다."],english:["Yes, you can apply for expedited processing.","It may cost extra."]}},{id:29,audioUrl:"/audio/passport-loss-29.mp3",text:"How do I get a new visa after losing my passport?",meaning:"여권을 잃어버린 후 새 비자를 받으려면 어떻게 해야 하나요?",answers:{korean:["대사관에서 여권을 발급받은 후 다시 신청해야 합니다.","이민국에 문의하세요."],english:["You must get a new passport first.","Contact the immigration office."]}},{id:30,audioUrl:"/audio/passport-loss-30.mp3",text:"Can I travel to another country with a temporary passport?",meaning:"임시 여권으로 다른 나라를 여행할 수 있나요?",answers:{korean:["네, 일부 국가에서는 임시 여권으로 입국할 수 있습니다.","아니요, 임시 여권은 특정 목적(귀국)만 가능합니다."],english:["Yes, some countries accept temporary passports.","No, temporary passports are usually for return trips only."]}}],dC=[{id:1,audioUrl:"/audio/hospital-1.mp3",text:"I need to see a doctor.",meaning:"의사를 만나야 해요.",answers:{korean:["네, 접수해 드리겠습니다.","어떤 증상이 있으신가요?"],english:["Yes, I’ll register you.","What symptoms do you have?"]}},{id:2,audioUrl:"/audio/hospital-2.mp3",text:"Do I need an appointment?",meaning:"예약이 필요한가요?",answers:{korean:["네, 사전 예약이 필요합니다.","아니요, 바로 진료 가능합니다."],english:["Yes, you need an appointment.","No, you can see the doctor right away."]}},{id:3,audioUrl:"/audio/hospital-3.mp3",text:"Where is the nearest hospital?",meaning:"가장 가까운 병원이 어디인가요?",answers:{korean:["이 길을 따라가면 있습니다.","택시를 타고 10분 거리입니다."],english:["It’s down this street.","It’s a 10-minute taxi ride away."]}},{id:4,audioUrl:"/audio/hospital-4.mp3",text:"What are your clinic hours?",meaning:"진료 시간이 어떻게 되나요?",answers:{korean:["오전 9시부터 오후 6시까지 운영합니다.","응급실은 24시간 운영됩니다."],english:["We’re open from 9 AM to 6 PM.","The emergency room is open 24 hours."]}},{id:5,audioUrl:"/audio/hospital-5.mp3",text:"I have a fever and a headache.",meaning:"열이 나고 두통이 있어요.",answers:{korean:["언제부터 증상이 시작되었나요?","기침이나 다른 증상도 있나요?"],english:["When did the symptoms start?","Do you have a cough or any other symptoms?"]}},{id:6,audioUrl:"/audio/hospital-6.mp3",text:"I think I have food poisoning.",meaning:"식중독에 걸린 것 같아요.",answers:{korean:["어떤 음식을 드셨나요?","복통과 설사가 있나요?"],english:["What did you eat?","Do you have stomach pain and diarrhea?"]}},{id:7,audioUrl:"/audio/hospital-7.mp3",text:"Do you have any allergies?",meaning:"알레르기가 있나요?",answers:{korean:["네, 땅콩 알레르기가 있어요.","아니요, 없습니다."],english:["Yes, I’m allergic to peanuts.","No, I don’t have any allergies."]}},{id:8,audioUrl:"/audio/hospital-8.mp3",text:"Can you prescribe some medicine?",meaning:"약을 처방해 주실 수 있나요?",answers:{korean:["네, 처방전을 드리겠습니다.","추가 검사가 필요합니다."],english:["Yes, I’ll write you a prescription.","You need further tests."]}},{id:9,audioUrl:"/audio/hospital-9.mp3",text:"Where is the pharmacy?",meaning:"약국이 어디에 있나요?",answers:{korean:["병원 옆에 있습니다.","이 건물 1층에 있습니다."],english:["It’s next to the hospital.","It’s on the first floor of this building."]}},{id:10,audioUrl:"/audio/hospital-10.mp3",text:"Do I need to take this medicine with food?",meaning:"이 약을 식사 후에 먹어야 하나요?",answers:{korean:["네, 식사 후에 복용하세요.","아니요, 공복에 드시면 됩니다."],english:["Yes, take it after meals.","No, take it on an empty stomach."]}},{id:11,audioUrl:"/audio/hospital-11.mp3",text:"I feel dizzy and weak.",meaning:"어지럽고 힘이 없어요.",answers:{korean:["언제부터 그러셨나요?","혈압을 체크해 보겠습니다."],english:["When did it start?","Let’s check your blood pressure."]}},{id:12,audioUrl:"/audio/hospital-12.mp3",text:"I have a sore throat.",meaning:"목이 아파요.",answers:{korean:["감기 증상이 있으신가요?","편도선이 부어있습니다."],english:["Do you have cold symptoms?","Your tonsils are swollen."]}},{id:13,audioUrl:"/audio/hospital-13.mp3",text:"I think I have the flu.",meaning:"독감에 걸린 것 같아요.",answers:{korean:["열과 근육통이 있나요?","독감 검사를 해보겠습니다."],english:["Do you have fever and muscle pain?","Let’s do a flu test."]}},{id:14,audioUrl:"/audio/hospital-14.mp3",text:"Can I get a COVID-19 test?",meaning:"코로나 검사를 받을 수 있나요?",answers:{korean:["네, PCR 검사 또는 신속 검사를 선택할 수 있습니다.","검사 결과는 24시간 이내에 나옵니다."],english:["Yes, you can choose a PCR or rapid test.","Results will be available within 24 hours."]}},{id:15,audioUrl:"/audio/hospital-15.mp3",text:"Do I need an X-ray?",meaning:"엑스레이를 찍어야 하나요?",answers:{korean:["네, 폐 상태를 확인해야 합니다.","아니요, 증상만으로 진단 가능합니다."],english:["Yes, we need to check your lungs.","No, we can diagnose based on symptoms."]}},{id:16,audioUrl:"/audio/hospital-16.mp3",text:"I have chest pain.",meaning:"가슴이 아파요.",answers:{korean:["언제부터 아팠나요?","심전도 검사를 해보겠습니다."],english:["When did it start?","Let’s do an ECG test."]}},{id:17,audioUrl:"/audio/hospital-17.mp3",text:"I was in an accident.",meaning:"사고를 당했어요.",answers:{korean:["어디가 다치셨나요?","구급차를 불러드릴까요?"],english:["Where are you hurt?","Do you need an ambulance?"]}},{id:18,audioUrl:"/audio/hospital-18.mp3",text:"I think I broke my arm.",meaning:"팔이 부러진 것 같아요.",answers:{korean:["엑스레이를 찍어보겠습니다.","통증이 심한가요?"],english:["Let’s take an X-ray.","Is the pain severe?"]}},{id:19,audioUrl:"/audio/hospital-19.mp3",text:"Can I get stitches?",meaning:"상처를 꿰매야 하나요?",answers:{korean:["네, 상처가 깊어서 봉합이 필요합니다.","아니요, 밴드로 치료 가능합니다."],english:["Yes, the wound is deep and needs stitches.","No, a bandage will be enough."]}},{id:20,audioUrl:"/audio/hospital-20.mp3",text:"Can I get a tetanus shot?",meaning:"파상풍 주사를 맞을 수 있나요?",answers:{korean:["네, 상처가 깊으면 예방 접종이 필요합니다.","최근 5년 내에 맞으셨나요?"],english:["Yes, if the wound is deep, you need a shot.","Did you get one in the last 5 years?"]}},{id:21,audioUrl:"/audio/hospital-21.mp3",text:"I have a rash on my skin.",meaning:"피부에 발진이 있어요.",answers:{korean:["알레르기 반응일 수 있습니다.","연고를 처방해 드리겠습니다."],english:["It could be an allergic reaction.","I’ll prescribe a cream for you."]}},{id:22,audioUrl:"/audio/hospital-22.mp3",text:"Can I get a blood test?",meaning:"혈액 검사를 받을 수 있나요?",answers:{korean:["네, 검사 결과는 내일 나옵니다.","금식 후 검사를 받으셔야 합니다."],english:["Yes, the results will be ready tomorrow.","You need to fast before the test."]}},{id:23,audioUrl:"/audio/hospital-23.mp3",text:"I have high blood pressure.",meaning:"혈압이 높아요.",answers:{korean:["규칙적으로 혈압을 체크하세요.","식단 조절이 필요합니다."],english:["Monitor your blood pressure regularly.","You need to adjust your diet."]}},{id:24,audioUrl:"/audio/hospital-24.mp3",text:"Can I get a prescription refill?",meaning:"처방전을 다시 받을 수 있나요?",answers:{korean:["네, 추가로 30일치 처방해 드리겠습니다.","의사 상담 후 가능합니다."],english:["Yes, I’ll give you a 30-day refill.","You need to consult the doctor first."]}},{id:25,audioUrl:"/audio/hospital-25.mp3",text:"I feel anxious and can’t sleep.",meaning:"불안하고 잠이 오지 않아요.",answers:{korean:["불안 증상이 자주 나타나나요?","심리 상담을 받아보시는 게 좋겠습니다."],english:["Do you often feel anxious?","You should consider seeing a counselor."]}},{id:26,audioUrl:"/audio/hospital-26.mp3",text:"Can I get a vaccination?",meaning:"백신을 맞을 수 있나요?",answers:{korean:["네, 백신 접종이 가능합니다.","사전 예약이 필요합니다."],english:["Yes, you can get vaccinated.","You need to make an appointment."]}},{id:27,audioUrl:"/audio/hospital-27.mp3",text:"Is it okay to take this medicine while pregnant?",meaning:"임신 중에 이 약을 먹어도 괜찮나요?",answers:{korean:["이 약은 임산부에게 안전합니다.","다른 대체 약을 처방해 드리겠습니다."],english:["This medication is safe for pregnancy.","I’ll prescribe an alternative medication."]}},{id:28,audioUrl:"/audio/hospital-28.mp3",text:"How long will it take to recover?",meaning:"회복하는 데 얼마나 걸리나요?",answers:{korean:["대략 1~2주 정도 걸릴 것입니다.","회복 속도는 개인차가 있습니다."],english:["It will take about 1-2 weeks.","Recovery time varies by individual."]}},{id:29,audioUrl:"/audio/hospital-29.mp3",text:"Do I need a follow-up appointment?",meaning:"추가 진료가 필요한가요?",answers:{korean:["네, 다음 주에 다시 방문해 주세요.","증상이 좋아지지 않으면 다시 오세요."],english:["Yes, come back next week.","If symptoms persist, visit us again."]}},{id:30,audioUrl:"/audio/hospital-30.mp3",text:"Can I get a doctor's note for work?",meaning:"회사에 제출할 진단서를 받을 수 있나요?",answers:{korean:["네, 진단서를 발급해 드리겠습니다.","아니요, 특정 조건에서만 발급 가능합니다."],english:["Yes, I’ll issue a doctor’s note for you.","No, it’s only available under certain conditions."]}}];function SH(){const[e,t]=w.useState("passport"),[a,r]=w.useState(!1),o=w.useRef(null);Lt.useEffect(()=>{const c=()=>{r(window.scrollY>300)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const i=c=>{const h=document.getElementById(`question-${c}`);h&&h.scrollIntoView({behavior:"smooth",block:"start"})},l=()=>{window.scrollTo({top:0,behavior:"smooth"})},s=e==="passport"?sC:dC;return d.jsxs("div",{className:"min-h-screen bg-gray-50",children:[d.jsx(bt,{}),d.jsxs("div",{className:"container mx-auto px-4 py-8",children:[d.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-4",children:"해외에서 긴급 상황 시 사용하는 영어"}),d.jsxs("div",{className:"flex space-x-4 mb-8",children:[d.jsxs("button",{onClick:()=>t("passport"),className:`flex items-center space-x-2 px-6 py-3 rounded-lg ${e==="passport"?"bg-blue-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"} transition-colors duration-200`,children:[d.jsx(kn,{size:20}),d.jsx("span",{children:"여권 분실"})]}),d.jsxs("button",{onClick:()=>t("hospital"),className:`flex items-center space-x-2 px-6 py-3 rounded-lg ${e==="hospital"?"bg-blue-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"} transition-colors duration-200`,children:[d.jsx(Cn,{size:20}),d.jsx("span",{children:"병원 방문"})]})]}),d.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-sm mb-8",children:[d.jsx("h2",{className:"text-lg font-semibold text-gray-700 mb-3",children:"문제 바로가기"}),d.jsx("div",{className:"flex flex-wrap gap-2",children:s.map(c=>d.jsx("button",{onClick:()=>i(c.id),className:"min-w-[40px] h-10 px-3 rounded-md bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 transition-colors duration-200",children:c.id},c.id))})]}),d.jsxs("div",{className:"space-y-6",ref:o,children:[e==="passport"&&d.jsxs("div",{children:[d.jsx("h2",{className:"text-2xl font-semibold text-gray-800 mb-6",children:"여권 분실! 경찰서에서 영어로 신고하는 방법"}),d.jsx("div",{className:"space-y-6",children:sC.map(c=>d.jsx("div",{id:`question-${c.id}`,children:d.jsx(fe,{question:c})},c.id))})]}),e==="hospital"&&d.jsxs("div",{children:[d.jsx("h2",{className:"text-2xl font-semibold text-gray-800 mb-6",children:"병원 방문 시 영어 회화 – 증상 설명부터 진료까지"}),d.jsx("div",{className:"space-y-6",children:dC.map(c=>d.jsx("div",{id:`question-${c.id}`,children:d.jsx(fe,{question:c})},c.id))})]})]})]}),d.jsx("button",{onClick:l,className:`fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-16"}`,"aria-label":"맨 위로 가기",children:d.jsx(De,{size:24})})]})}const hC=[{id:1,audioUrl:"/audio/inflight-1.mp3",text:"Can I have a glass of water, please?",meaning:"물 한 잔 주시겠어요?",answers:{korean:["네, 잠시만 기다려 주세요.","죄송하지만, 물이 떨어졌습니다."],english:["Sure, please wait a moment.","I’m sorry, but we’re out of water."]}},{id:2,audioUrl:"/audio/inflight-2.mp3",text:"Do you have orange juice?",meaning:"오렌지 주스 있나요?",answers:{korean:["네, 오렌지 주스를 드리겠습니다.","죄송하지만, 오렌지 주스가 없습니다."],english:["Yes, I’ll bring you some orange juice.","I’m sorry, but we don’t have orange juice."]}},{id:3,audioUrl:"/audio/inflight-3.mp3",text:"Can I get a cup of coffee?",meaning:"커피 한 잔 받을 수 있을까요?",answers:{korean:["네, 설탕과 우유도 드릴까요?","죄송하지만, 커피가 준비되지 않았습니다."],english:["Yes, would you like sugar and milk?","I’m sorry, but coffee is not available right now."]}},{id:4,audioUrl:"/audio/inflight-4.mp3",text:"Do you serve alcohol?",meaning:"주류 서비스가 있나요?",answers:{korean:["네, 맥주와 와인이 있습니다.","죄송하지만, 현재 주류 서비스는 제공되지 않습니다."],english:["Yes, we have beer and wine.","I’m sorry, but we are not serving alcohol right now."]}},{id:5,audioUrl:"/audio/inflight-5.mp3",text:"Can I have a vegetarian meal?",meaning:"채식 메뉴를 받을 수 있을까요?",answers:{korean:["네, 채식 메뉴를 준비해 드리겠습니다.","죄송하지만, 사전 주문이 필요합니다."],english:["Yes, I’ll get you a vegetarian meal.","I’m sorry, but it requires a pre-order."]}},{id:6,audioUrl:"/audio/inflight-6.mp3",text:"Do you have any snacks?",meaning:"간식이 있나요?",answers:{korean:["네, 견과류와 크래커가 있습니다.","죄송하지만, 간식이 다 떨어졌습니다."],english:["Yes, we have nuts and crackers.","I’m sorry, but we’ve run out of snacks."]}},{id:7,audioUrl:"/audio/inflight-7.mp3",text:"Can I get an extra blanket?",meaning:"추가 담요를 받을 수 있을까요?",answers:{korean:["네, 담요 하나 더 드리겠습니다.","죄송하지만, 모든 담요가 사용 중입니다."],english:["Yes, I’ll bring you another blanket.","I’m sorry, but all blankets are in use."]}},{id:8,audioUrl:"/audio/inflight-8.mp3",text:"Can you turn down the air conditioning?",meaning:"에어컨을 조금 줄여 주실 수 있나요?",answers:{korean:["네, 온도를 조정해 드리겠습니다.","죄송하지만, 조절이 어렵습니다."],english:["Yes, I’ll adjust the temperature.","I’m sorry, but I can’t change it."]}},{id:9,audioUrl:"/audio/inflight-9.mp3",text:"Can I change my seat?",meaning:"좌석을 바꿀 수 있을까요?",answers:{korean:["네, 빈 좌석으로 이동 가능합니다.","죄송하지만, 모든 좌석이 만석입니다."],english:["Yes, you can move to an available seat.","I’m sorry, but all seats are taken."]}},{id:10,audioUrl:"/audio/inflight-10.mp3",text:"Do you have Wi-Fi on this flight?",meaning:"이 비행기에서 와이파이가 제공되나요?",answers:{korean:["네, 유료 와이파이 서비스를 이용할 수 있습니다.","죄송하지만, 이 항공편에는 와이파이가 없습니다."],english:["Yes, you can use the paid Wi-Fi service.","I’m sorry, but there’s no Wi-Fi on this flight."]}},{id:11,audioUrl:"/audio/inflight-11.mp3",text:"Can I have a pillow?",meaning:"베개를 받을 수 있을까요?",answers:{korean:["네, 베개를 가져다 드리겠습니다.","죄송하지만, 모든 베개가 사용 중입니다."],english:["Yes, I’ll bring you a pillow.","I’m sorry, but all pillows are in use."]}},{id:12,audioUrl:"/audio/inflight-12.mp3",text:"Can I recline my seat?",meaning:"좌석을 뒤로 젖혀도 될까요?",answers:{korean:["네, 좌석을 조절하셔도 됩니다.","이륙 및 착륙 시에는 좌석을 세워 주셔야 합니다."],english:["Yes, you can adjust your seat.","You need to keep your seat upright during takeoff and landing."]}},{id:13,audioUrl:"/audio/inflight-13.mp3",text:"Can I have some ice with my drink?",meaning:"음료에 얼음을 넣어 주실 수 있나요?",answers:{korean:["네, 얼음을 넣어 드리겠습니다.","죄송하지만, 얼음이 없습니다."],english:["Yes, I’ll add some ice.","I’m sorry, but we don’t have ice."]}},{id:14,audioUrl:"/audio/inflight-14.mp3",text:"Do you have a menu?",meaning:"메뉴판이 있나요?",answers:{korean:["네, 메뉴를 드리겠습니다.","죄송하지만, 오늘 메뉴가 한정되어 있습니다."],english:["Yes, here is the menu.","I’m sorry, but today’s menu is limited."]}},{id:15,audioUrl:"/audio/inflight-15.mp3",text:"Can I have a bottle of water?",meaning:"생수 한 병 받을 수 있을까요?",answers:{korean:["네, 생수를 드리겠습니다.","죄송하지만, 컵에 제공됩니다."],english:["Yes, I’ll bring you a bottle of water.","I’m sorry, but we only serve it in cups."]}},{id:16,audioUrl:"/audio/inflight-16.mp3",text:"Can you wake me up for the meal?",meaning:"식사 시간에 깨워 주실 수 있나요?",answers:{korean:["네, 식사 시간에 깨워 드리겠습니다.","죄송하지만, 개별 깨우기는 어렵습니다."],english:["Yes, I’ll wake you up for the meal.","I’m sorry, but we can’t wake up individual passengers."]}},{id:17,audioUrl:"/audio/inflight-17.mp3",text:"Is there an in-flight entertainment system?",meaning:"기내 엔터테인먼트 시스템이 있나요?",answers:{korean:["네, 화면에서 영화와 음악을 감상할 수 있습니다.","죄송하지만, 이 비행기에는 엔터테인먼트 시스템이 없습니다."],english:["Yes, you can watch movies and listen to music.","I’m sorry, but there’s no entertainment system on this flight."]}},{id:18,audioUrl:"/audio/inflight-18.mp3",text:"Do you have noise-canceling headphones?",meaning:"노이즈 캔슬링 헤드폰이 있나요?",answers:{korean:["네, 제공해 드릴 수 있습니다.","죄송하지만, 일반 이어폰만 제공됩니다."],english:["Yes, we can provide one.","I’m sorry, but we only offer regular earphones."]}},{id:19,audioUrl:"/audio/inflight-19.mp3",text:"Can I charge my phone?",meaning:"휴대폰을 충전할 수 있나요?",answers:{korean:["네, 좌석 아래에 충전 포트가 있습니다.","죄송하지만, 충전 포트가 없습니다."],english:["Yes, there’s a charging port under your seat.","I’m sorry, but there are no charging ports."]}},{id:20,audioUrl:"/audio/inflight-20.mp3",text:"Can I use my laptop during the flight?",meaning:"비행 중에 노트북을 사용할 수 있나요?",answers:{korean:["네, 사용 가능합니다.","이륙 및 착륙 시에는 사용이 제한됩니다."],english:["Yes, you can use it.","You must turn it off during takeoff and landing."]}},{id:21,audioUrl:"/audio/inflight-21.mp3",text:"Can I get a second meal?",meaning:"식사를 한 번 더 받을 수 있나요?",answers:{korean:["네, 남은 식사가 있다면 제공해 드리겠습니다.","죄송하지만, 추가 식사는 불가능합니다."],english:["Yes, if we have extras, I’ll bring one.","I’m sorry, but we can’t offer extra meals."]}},{id:22,audioUrl:"/audio/inflight-22.mp3",text:"Can I get hot water for my tea?",meaning:"차를 마실 뜨거운 물을 받을 수 있나요?",answers:{korean:["네, 뜨거운 물을 드리겠습니다.","죄송하지만, 지금 제공이 어렵습니다."],english:["Yes, I’ll bring you some hot water.","I’m sorry, but we can’t serve it now."]}},{id:23,audioUrl:"/audio/inflight-23.mp3",text:"Can you help me with my overhead luggage?",meaning:"머리 위 선반의 짐을 내려 주실 수 있나요?",answers:{korean:["네, 도와드리겠습니다.","죄송하지만, 승무원은 짐을 내려 드릴 수 없습니다."],english:["Yes, I’ll help you.","I’m sorry, but we’re not allowed to handle luggage."]}},{id:24,audioUrl:"/audio/inflight-24.mp3",text:"Can I buy duty-free items?",meaning:"면세품을 구매할 수 있나요?",answers:{korean:["네, 기내 면세품 판매가 가능합니다.","죄송하지만, 이번 비행에서는 면세품 판매가 없습니다."],english:["Yes, in-flight duty-free shopping is available.","I’m sorry, but there’s no duty-free sale on this flight."]}},{id:25,audioUrl:"/audio/inflight-25.mp3",text:"Where is the nearest restroom?",meaning:"가장 가까운 화장실이 어디인가요?",answers:{korean:["화장실은 앞쪽과 뒤쪽에 있습니다.","현재 모든 화장실이 사용 중입니다."],english:["The restrooms are in the front and back.","All restrooms are occupied right now."]}},{id:26,audioUrl:"/audio/inflight-26.mp3",text:"Can I get a first-aid kit?",meaning:"구급상자를 받을 수 있나요?",answers:{korean:["네, 간단한 응급처치를 해 드리겠습니다.","심각한 경우 승무원에게 알려 주세요."],english:["Yes, I can provide basic first aid.","Please inform the crew in case of an emergency."]}},{id:27,audioUrl:"/audio/inflight-27.mp3",text:"Can I change my meal preference?",meaning:"식사 종류를 변경할 수 있나요?",answers:{korean:["네, 가능한 옵션을 확인해 드리겠습니다.","죄송하지만, 사전 주문이 필요합니다."],english:["Yes, I’ll check the available options.","I’m sorry, but meal changes require pre-ordering."]}},{id:28,audioUrl:"/audio/inflight-28.mp3",text:"Can I borrow a pen?",meaning:"펜을 빌릴 수 있을까요?",answers:{korean:["네, 여기 있습니다.","죄송하지만, 펜이 없습니다."],english:["Yes, here you go.","I’m sorry, but we don’t have any pens."]}},{id:29,audioUrl:"/audio/inflight-29.mp3",text:"Can I have a sleeping mask?",meaning:"수면 안대를 받을 수 있나요?",answers:{korean:["네, 하나 드리겠습니다.","죄송하지만, 안대가 준비되어 있지 않습니다."],english:["Yes, I’ll bring you one.","I’m sorry, but we don’t have sleeping masks."]}},{id:30,audioUrl:"/audio/inflight-30.mp3",text:"Can I get assistance with my connecting flight?",meaning:"연결 항공편에 대한 도움을 받을 수 있을까요?",answers:{korean:["네, 연결 항공편 정보를 확인해 드리겠습니다.","죄송하지만, 공항에서 직접 확인하셔야 합니다."],english:["Yes, I’ll check your connecting flight details.","I’m sorry, but you need to check at the airport."]}}],uC=[{id:1,audioUrl:"/audio/inflight-requests-1.mp3",text:"Can I have a bottle of water?",meaning:"생수 한 병 받을 수 있을까요?",answers:{korean:["네, 가져다 드리겠습니다.","죄송하지만, 컵으로만 제공됩니다."],english:["Yes, I’ll bring you one.","I’m sorry, but we only serve it in cups."]}},{id:2,audioUrl:"/audio/inflight-requests-2.mp3",text:"Can you bring me a blanket?",meaning:"담요를 가져다 주실 수 있나요?",answers:{korean:["네, 잠시만 기다려 주세요.","죄송하지만, 담요가 다 떨어졌습니다."],english:["Yes, please wait a moment.","I’m sorry, but we’ve run out of blankets."]}},{id:3,audioUrl:"/audio/inflight-requests-3.mp3",text:"Can I have an extra pillow?",meaning:"베개를 하나 더 받을 수 있을까요?",answers:{korean:["네, 하나 더 드리겠습니다.","죄송하지만, 모든 베개가 사용 중입니다."],english:["Yes, I’ll bring you another one.","I’m sorry, but all pillows are in use."]}},{id:4,audioUrl:"/audio/inflight-requests-4.mp3",text:"Can you adjust the temperature?",meaning:"온도를 조절해 주실 수 있나요?",answers:{korean:["네, 조금 조정해 드리겠습니다.","죄송하지만, 온도 조절이 어렵습니다."],english:["Yes, I’ll adjust it a bit.","I’m sorry, but we can’t change the temperature."]}},{id:5,audioUrl:"/audio/inflight-requests-5.mp3",text:"Can I get a cup of tea?",meaning:"차 한 잔 받을 수 있을까요?",answers:{korean:["네, 차를 가져다 드리겠습니다.","죄송하지만, 차가 준비되지 않았습니다."],english:["Yes, I’ll bring you some tea.","I’m sorry, but we don’t have tea available."]}},{id:6,audioUrl:"/audio/inflight-requests-6.mp3",text:"Can I change my seat?",meaning:"좌석을 바꿀 수 있을까요?",answers:{korean:["네, 빈 좌석이 있으면 이동 가능합니다.","죄송하지만, 모든 좌석이 만석입니다."],english:["Yes, if there’s an available seat.","I’m sorry, but all seats are taken."]}},{id:7,audioUrl:"/audio/inflight-requests-7.mp3",text:"Do you have noise-canceling headphones?",meaning:"노이즈 캔슬링 헤드폰이 있나요?",answers:{korean:["네, 하나 가져다 드리겠습니다.","죄송하지만, 일반 이어폰만 제공됩니다."],english:["Yes, I’ll bring you one.","I’m sorry, but we only provide regular earphones."]}},{id:8,audioUrl:"/audio/inflight-requests-8.mp3",text:"Can you help me store my luggage?",meaning:"짐을 보관하는 걸 도와주실 수 있나요?",answers:{korean:["네, 선반에 올려 드리겠습니다.","죄송하지만, 승무원은 짐을 들어 올려 드릴 수 없습니다."],english:["Yes, I’ll place it in the overhead bin.","I’m sorry, but we’re not allowed to lift luggage."]}},{id:9,audioUrl:"/audio/inflight-requests-9.mp3",text:"Can I use my laptop?",meaning:"노트북을 사용할 수 있나요?",answers:{korean:["네, 비행 중에는 사용 가능합니다.","이륙 및 착륙 시에는 사용이 제한됩니다."],english:["Yes, you can use it during the flight.","You need to turn it off during takeoff and landing."]}},{id:10,audioUrl:"/audio/inflight-requests-10.mp3",text:"Can I borrow a pen?",meaning:"펜을 빌릴 수 있을까요?",answers:{korean:["네, 여기 있습니다.","죄송하지만, 펜이 없습니다."],english:["Yes, here you go.","I’m sorry, but we don’t have any pens."]}},{id:11,audioUrl:"/audio/inflight-requests-11.mp3",text:"Can I have a window seat?",meaning:"창가 좌석으로 바꿀 수 있을까요?",answers:{korean:["네, 빈 좌석이 있으면 가능합니다.","죄송하지만, 창가 좌석이 없습니다."],english:["Yes, if there’s an available seat.","I’m sorry, but there are no window seats left."]}},{id:12,audioUrl:"/audio/inflight-requests-12.mp3",text:"Can I have a meal now?",meaning:"지금 식사를 받을 수 있을까요?",answers:{korean:["네, 바로 가져다 드리겠습니다.","죄송하지만, 식사 시간이 아직 아닙니다."],english:["Yes, I’ll bring it right away.","I’m sorry, but it’s not meal time yet."]}},{id:13,audioUrl:"/audio/inflight-requests-13.mp3",text:"Can I have a vegetarian meal?",meaning:"채식 메뉴를 받을 수 있을까요?",answers:{korean:["네, 채식 메뉴를 준비해 드리겠습니다.","죄송하지만, 사전 주문이 필요합니다."],english:["Yes, I’ll get you a vegetarian meal.","I’m sorry, but it requires a pre-order."]}},{id:14,audioUrl:"/audio/inflight-requests-14.mp3",text:"Can I get a second meal?",meaning:"식사를 한 번 더 받을 수 있나요?",answers:{korean:["네, 남은 식사가 있다면 제공해 드리겠습니다.","죄송하지만, 추가 식사는 불가능합니다."],english:["Yes, if we have extras, I’ll bring one.","I’m sorry, but we can’t offer extra meals."]}},{id:15,audioUrl:"/audio/inflight-requests-15.mp3",text:"Can I get some medicine for a headache?",meaning:"두통약을 받을 수 있을까요?",answers:{korean:["네, 진통제를 드리겠습니다.","죄송하지만, 기내에서는 약을 제공할 수 없습니다."],english:["Yes, I’ll bring you some painkillers.","I’m sorry, but we can’t provide medication."]}},{id:16,audioUrl:"/audio/inflight-requests-16.mp3",text:"Can I have a drink?",meaning:"음료를 받을 수 있을까요?",answers:{korean:["네, 어떤 음료를 원하시나요?","죄송하지만, 음료 서비스 시간이 아닙니다."],english:["Yes, what would you like to drink?","I’m sorry, but beverage service is not available right now."]}},{id:17,audioUrl:"/audio/inflight-requests-17.mp3",text:"Can I get some hot water?",meaning:"뜨거운 물을 받을 수 있을까요?",answers:{korean:["네, 가져다 드리겠습니다.","죄송하지만, 뜨거운 물이 준비되지 않았습니다."],english:["Yes, I’ll bring you some.","I’m sorry, but we don’t have hot water available."]}},{id:18,audioUrl:"/audio/inflight-requests-18.mp3",text:"Can I use the restroom now?",meaning:"지금 화장실을 사용할 수 있나요?",answers:{korean:["네, 지금 사용하셔도 됩니다.","죄송하지만, 현재 사용이 제한됩니다."],english:["Yes, you can use it now.","I’m sorry, but it’s restricted at the moment."]}},{id:19,audioUrl:"/audio/inflight-requests-19.mp3",text:"Can I get an immigration form?",meaning:"입국 신고서를 받을 수 있을까요?",answers:{korean:["네, 신고서를 가져다 드리겠습니다.","죄송하지만, 승무원에게 직접 요청해야 합니다."],english:["Yes, I’ll bring you one.","I’m sorry, but you need to ask a flight attendant."]}},{id:20,audioUrl:"/audio/inflight-requests-20.mp3",text:"Can I get a child meal for my kid?",meaning:"아이용 식사를 받을 수 있을까요?",answers:{korean:["네, 아이 식사를 준비해 드리겠습니다.","죄송하지만, 사전 요청이 필요합니다."],english:["Yes, I’ll bring a child meal.","I’m sorry, but it requires a pre-order."]}},{id:21,audioUrl:"/audio/inflight-requests-21.mp3",text:"Can I buy duty-free items?",meaning:"면세품을 구매할 수 있나요?",answers:{korean:["네, 기내 면세품 판매가 가능합니다.","죄송하지만, 이번 비행에서는 면세품 판매가 없습니다."],english:["Yes, in-flight duty-free shopping is available.","I’m sorry, but there’s no duty-free sale on this flight."]}},{id:22,audioUrl:"/audio/inflight-requests-22.mp3",text:"Can I get a sleeping mask?",meaning:"수면 안대를 받을 수 있나요?",answers:{korean:["네, 안대를 가져다 드리겠습니다.","죄송하지만, 수면 안대가 없습니다."],english:["Yes, I’ll bring you one.","I’m sorry, but we don’t have sleeping masks."]}},{id:23,audioUrl:"/audio/inflight-requests-23.mp3",text:"Can I request a different meal option?",meaning:"다른 식사 옵션을 요청할 수 있나요?",answers:{korean:["네, 가능한 식사를 확인해 드리겠습니다.","죄송하지만, 모든 식사가 준비된 상태입니다."],english:["Yes, I’ll check what’s available.","I’m sorry, but all meals are pre-set."]}},{id:24,audioUrl:"/audio/inflight-requests-24.mp3",text:"Can I use my own headphones?",meaning:"제가 가져온 헤드폰을 사용할 수 있나요?",answers:{korean:["네, 기내 엔터테인먼트 시스템에 연결 가능합니다.","죄송하지만, 특정 모델만 지원됩니다."],english:["Yes, you can connect them to the entertainment system.","I’m sorry, but only certain models are supported."]}},{id:25,audioUrl:"/audio/inflight-requests-25.mp3",text:"Can I move to an aisle seat?",meaning:"통로 좌석으로 이동할 수 있나요?",answers:{korean:["네, 빈 좌석이 있으면 가능합니다.","죄송하지만, 모든 좌석이 예약되었습니다."],english:["Yes, if there’s an open seat.","I’m sorry, but all seats are booked."]}},{id:26,audioUrl:"/audio/inflight-requests-26.mp3",text:"Can I have extra napkins?",meaning:"냅킨을 더 받을 수 있나요?",answers:{korean:["네, 몇 장 가져다 드리겠습니다.","죄송하지만, 현재 냅킨이 부족합니다."],english:["Yes, I’ll bring you some.","I’m sorry, but we are running low on napkins."]}},{id:27,audioUrl:"/audio/inflight-requests-27.mp3",text:"Can I change my drink order?",meaning:"음료 주문을 변경할 수 있나요?",answers:{korean:["네, 어떤 음료로 변경하시겠어요?","죄송하지만, 이미 제공된 음료는 변경할 수 없습니다."],english:["Yes, what would you like instead?","I’m sorry, but we can’t change drinks after serving."]}},{id:28,audioUrl:"/audio/inflight-requests-28.mp3",text:"Can I request a special meal?",meaning:"특별식을 요청할 수 있나요?",answers:{korean:["네, 어떤 종류의 특별식을 원하시나요?","죄송하지만, 모든 식사가 사전 준비되었습니다."],english:["Yes, what kind of special meal do you need?","I’m sorry, but all meals are pre-set."]}},{id:29,audioUrl:"/audio/inflight-requests-29.mp3",text:"Can I get assistance when landing?",meaning:"착륙할 때 도움이 필요합니다.",answers:{korean:["네, 착륙 후 승무원이 도와드리겠습니다.","죄송하지만, 공항에서 직접 도움을 요청하셔야 합니다."],english:["Yes, a crew member will assist you after landing.","I’m sorry, but you need to request assistance at the airport."]}},{id:30,audioUrl:"/audio/inflight-requests-30.mp3",text:"Can I get help with my luggage upon arrival?",meaning:"도착 후 짐을 옮기는 데 도움을 받을 수 있을까요?",answers:{korean:["네, 도착 후 승무원이 안내해 드릴 수 있습니다.","죄송하지만, 공항 직원에게 직접 요청하셔야 합니다."],english:["Yes, a crew member can assist you after arrival.","I’m sorry, but you need to ask the airport staff directly."]}}];function bH(){const[e,t]=w.useState("drinks"),[a,r]=w.useState(!1),o=w.useRef(null);Lt.useEffect(()=>{const c=()=>{r(window.scrollY>300)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]);const i=c=>{const h=document.getElementById(`question-${c}`);h&&h.scrollIntoView({behavior:"smooth",block:"start"})},l=()=>{window.scrollTo({top:0,behavior:"smooth"})},s=e==="drinks"?hC:uC;return d.jsxs("div",{className:"min-h-screen bg-gray-50",children:[d.jsx(bt,{}),d.jsxs("div",{className:"container mx-auto px-4 py-8",children:[d.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-4",children:"기내에서 승무원과 대화하는 영어 표현"}),d.jsxs("div",{className:"flex space-x-4 mb-8",children:[d.jsxs("button",{onClick:()=>t("drinks"),className:`flex items-center space-x-2 px-6 py-3 rounded-lg ${e==="drinks"?"bg-blue-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"} transition-colors duration-200`,children:[d.jsx(un,{size:20}),d.jsx("span",{children:"음료 주문하기"})]}),d.jsxs("button",{onClick:()=>t("requests"),className:`flex items-center space-x-2 px-6 py-3 rounded-lg ${e==="requests"?"bg-blue-600 text-white":"bg-white text-gray-700 hover:bg-gray-50"} transition-colors duration-200`,children:[d.jsx(Mn,{size:20}),d.jsx("span",{children:"요청사항 전달하기"})]})]}),d.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-sm mb-8",children:[d.jsx("h2",{className:"text-lg font-semibold text-gray-700 mb-3",children:"문제 바로가기"}),d.jsx("div",{className:"flex flex-wrap gap-2",children:s.map(c=>d.jsx("button",{onClick:()=>i(c.id),className:"min-w-[40px] h-10 px-3 rounded-md bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 transition-colors duration-200",children:c.id},c.id))})]}),d.jsxs("div",{className:"space-y-6",ref:o,children:[e==="drinks"&&d.jsxs("div",{children:[d.jsx("h2",{className:"text-2xl font-semibold text-gray-800 mb-6",children:"기내에서 음료 주문할 때 영어로 말하기"}),d.jsx("div",{className:"space-y-6",children:hC.map(c=>d.jsx("div",{id:`question-${c.id}`,children:d.jsx(fe,{question:c})},c.id))})]}),e==="requests"&&d.jsxs("div",{children:[d.jsx("h2",{className:"text-2xl font-semibold text-gray-800 mb-6",children:"비행기 안에서 요청사항 전달하는 영어 표현"}),d.jsx("div",{className:"space-y-6",children:uC.map(c=>d.jsx("div",{id:`question-${c.id}`,children:d.jsx(fe,{question:c})},c.id))})]})]})]}),d.jsx("button",{onClick:l,className:`fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-16"}`,"aria-label":"맨 위로 가기",children:d.jsx(De,{size:24})})]})}function qH(){return d.jsx(sH,{children:d.jsxs("div",{className:"min-h-screen bg-gray-50",children:[d.jsx(gH,{}),d.jsxs(aH,{children:[d.jsx(_e,{path:"/",element:d.jsx(MH,{})}),d.jsx(_e,{path:"/category/1",element:d.jsx(xH,{})}),d.jsx(_e,{path:"/category/2",element:d.jsx(wH,{})}),d.jsx(_e,{path:"/category/3",element:d.jsx(LH,{})}),d.jsx(_e,{path:"/category/4",element:d.jsx(IH,{})}),d.jsx(_e,{path:"/category/5",element:d.jsx(CH,{})}),d.jsx(_e,{path:"/category/6",element:d.jsx(SH,{})}),d.jsx(_e,{path:"/category/7",element:d.jsx(bH,{})})]})]})})}Cb(document.getElementById("root")).render(d.jsx(w.StrictMode,{children:d.jsx(qH,{})}));
