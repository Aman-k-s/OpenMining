function m_(r,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in r)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(r,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function g_(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var td={exports:{}},io={},nd={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm;function v_(){if(Dm)return _t;Dm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=x&&O[x]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,T={};function S(O,ie,Re){this.props=O,this.context=ie,this.refs=T,this.updater=Re||M}S.prototype.isReactComponent={},S.prototype.setState=function(O,ie){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ie,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function _(){}_.prototype=S.prototype;function F(O,ie,Re){this.props=O,this.context=ie,this.refs=T,this.updater=Re||M}var D=F.prototype=new _;D.constructor=F,w(D,S.prototype),D.isPureReactComponent=!0;var R=Array.isArray,j=Object.prototype.hasOwnProperty,P={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function z(O,ie,Re){var Pe,Te={},ne=null,se=null;if(ie!=null)for(Pe in ie.ref!==void 0&&(se=ie.ref),ie.key!==void 0&&(ne=""+ie.key),ie)j.call(ie,Pe)&&!k.hasOwnProperty(Pe)&&(Te[Pe]=ie[Pe]);var _e=arguments.length-2;if(_e===1)Te.children=Re;else if(1<_e){for(var Ne=Array(_e),De=0;De<_e;De++)Ne[De]=arguments[De+2];Te.children=Ne}if(O&&O.defaultProps)for(Pe in _e=O.defaultProps,_e)Te[Pe]===void 0&&(Te[Pe]=_e[Pe]);return{$$typeof:r,type:O,key:ne,ref:se,props:Te,_owner:P.current}}function N(O,ie){return{$$typeof:r,type:O.type,key:ie,ref:O.ref,props:O.props,_owner:O._owner}}function C(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function V(O){var ie={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Re){return ie[Re]})}var $=/\/+/g;function te(O,ie){return typeof O=="object"&&O!==null&&O.key!=null?V(""+O.key):ie.toString(36)}function Z(O,ie,Re,Pe,Te){var ne=typeof O;(ne==="undefined"||ne==="boolean")&&(O=null);var se=!1;if(O===null)se=!0;else switch(ne){case"string":case"number":se=!0;break;case"object":switch(O.$$typeof){case r:case e:se=!0}}if(se)return se=O,Te=Te(se),O=Pe===""?"."+te(se,0):Pe,R(Te)?(Re="",O!=null&&(Re=O.replace($,"$&/")+"/"),Z(Te,ie,Re,"",function(De){return De})):Te!=null&&(C(Te)&&(Te=N(Te,Re+(!Te.key||se&&se.key===Te.key?"":(""+Te.key).replace($,"$&/")+"/")+O)),ie.push(Te)),1;if(se=0,Pe=Pe===""?".":Pe+":",R(O))for(var _e=0;_e<O.length;_e++){ne=O[_e];var Ne=Pe+te(ne,_e);se+=Z(ne,ie,Re,Ne,Te)}else if(Ne=y(O),typeof Ne=="function")for(O=Ne.call(O),_e=0;!(ne=O.next()).done;)ne=ne.value,Ne=Pe+te(ne,_e++),se+=Z(ne,ie,Re,Ne,Te);else if(ne==="object")throw ie=String(O),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return se}function ce(O,ie,Re){if(O==null)return O;var Pe=[],Te=0;return Z(O,Pe,"","",function(ne){return ie.call(Re,ne,Te++)}),Pe}function K(O){if(O._status===-1){var ie=O._result;ie=ie(),ie.then(function(Re){(O._status===0||O._status===-1)&&(O._status=1,O._result=Re)},function(Re){(O._status===0||O._status===-1)&&(O._status=2,O._result=Re)}),O._status===-1&&(O._status=0,O._result=ie)}if(O._status===1)return O._result.default;throw O._result}var fe={current:null},I={transition:null},ae={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:I,ReactCurrentOwner:P};function de(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:ce,forEach:function(O,ie,Re){ce(O,function(){ie.apply(this,arguments)},Re)},count:function(O){var ie=0;return ce(O,function(){ie++}),ie},toArray:function(O){return ce(O,function(ie){return ie})||[]},only:function(O){if(!C(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},_t.Component=S,_t.Fragment=t,_t.Profiler=o,_t.PureComponent=F,_t.StrictMode=s,_t.Suspense=p,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,_t.act=de,_t.cloneElement=function(O,ie,Re){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Pe=w({},O.props),Te=O.key,ne=O.ref,se=O._owner;if(ie!=null){if(ie.ref!==void 0&&(ne=ie.ref,se=P.current),ie.key!==void 0&&(Te=""+ie.key),O.type&&O.type.defaultProps)var _e=O.type.defaultProps;for(Ne in ie)j.call(ie,Ne)&&!k.hasOwnProperty(Ne)&&(Pe[Ne]=ie[Ne]===void 0&&_e!==void 0?_e[Ne]:ie[Ne])}var Ne=arguments.length-2;if(Ne===1)Pe.children=Re;else if(1<Ne){_e=Array(Ne);for(var De=0;De<Ne;De++)_e[De]=arguments[De+2];Pe.children=_e}return{$$typeof:r,type:O.type,key:Te,ref:ne,props:Pe,_owner:se}},_t.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},_t.createElement=z,_t.createFactory=function(O){var ie=z.bind(null,O);return ie.type=O,ie},_t.createRef=function(){return{current:null}},_t.forwardRef=function(O){return{$$typeof:f,render:O}},_t.isValidElement=C,_t.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:K}},_t.memo=function(O,ie){return{$$typeof:m,type:O,compare:ie===void 0?null:ie}},_t.startTransition=function(O){var ie=I.transition;I.transition={};try{O()}finally{I.transition=ie}},_t.unstable_act=de,_t.useCallback=function(O,ie){return fe.current.useCallback(O,ie)},_t.useContext=function(O){return fe.current.useContext(O)},_t.useDebugValue=function(){},_t.useDeferredValue=function(O){return fe.current.useDeferredValue(O)},_t.useEffect=function(O,ie){return fe.current.useEffect(O,ie)},_t.useId=function(){return fe.current.useId()},_t.useImperativeHandle=function(O,ie,Re){return fe.current.useImperativeHandle(O,ie,Re)},_t.useInsertionEffect=function(O,ie){return fe.current.useInsertionEffect(O,ie)},_t.useLayoutEffect=function(O,ie){return fe.current.useLayoutEffect(O,ie)},_t.useMemo=function(O,ie){return fe.current.useMemo(O,ie)},_t.useReducer=function(O,ie,Re){return fe.current.useReducer(O,ie,Re)},_t.useRef=function(O){return fe.current.useRef(O)},_t.useState=function(O){return fe.current.useState(O)},_t.useSyncExternalStore=function(O,ie,Re){return fe.current.useSyncExternalStore(O,ie,Re)},_t.useTransition=function(){return fe.current.useTransition()},_t.version="18.3.1",_t}var Lm;function Bf(){return Lm||(Lm=1,nd.exports=v_()),nd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Im;function x_(){if(Im)return io;Im=1;var r=Bf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,m){var v,x={},y=null,M=null;m!==void 0&&(y=""+m),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(M=p.ref);for(v in p)s.call(p,v)&&!l.hasOwnProperty(v)&&(x[v]=p[v]);if(f&&f.defaultProps)for(v in p=f.defaultProps,p)x[v]===void 0&&(x[v]=p[v]);return{$$typeof:e,type:f,key:y,ref:M,props:x,_owner:o.current}}return io.Fragment=t,io.jsx=d,io.jsxs=d,io}var Um;function __(){return Um||(Um=1,td.exports=x_()),td.exports}var u=__(),Ll={},id={exports:{}},Wn={},rd={exports:{}},sd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm;function y_(){return Fm||(Fm=1,(function(r){function e(I,ae){var de=I.length;I.push(ae);e:for(;0<de;){var O=de-1>>>1,ie=I[O];if(0<o(ie,ae))I[O]=ae,I[de]=ie,de=O;else break e}}function t(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var ae=I[0],de=I.pop();if(de!==ae){I[0]=de;e:for(var O=0,ie=I.length,Re=ie>>>1;O<Re;){var Pe=2*(O+1)-1,Te=I[Pe],ne=Pe+1,se=I[ne];if(0>o(Te,de))ne<ie&&0>o(se,Te)?(I[O]=se,I[ne]=de,O=ne):(I[O]=Te,I[Pe]=de,O=Pe);else if(ne<ie&&0>o(se,de))I[O]=se,I[ne]=de,O=ne;else break e}}return ae}function o(I,ae){var de=I.sortIndex-ae.sortIndex;return de!==0?de:I.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var d=Date,f=d.now();r.unstable_now=function(){return d.now()-f}}var p=[],m=[],v=1,x=null,y=3,M=!1,w=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(I){for(var ae=t(m);ae!==null;){if(ae.callback===null)s(m);else if(ae.startTime<=I)s(m),ae.sortIndex=ae.expirationTime,e(p,ae);else break;ae=t(m)}}function R(I){if(T=!1,D(I),!w)if(t(p)!==null)w=!0,K(j);else{var ae=t(m);ae!==null&&fe(R,ae.startTime-I)}}function j(I,ae){w=!1,T&&(T=!1,_(z),z=-1),M=!0;var de=y;try{for(D(ae),x=t(p);x!==null&&(!(x.expirationTime>ae)||I&&!V());){var O=x.callback;if(typeof O=="function"){x.callback=null,y=x.priorityLevel;var ie=O(x.expirationTime<=ae);ae=r.unstable_now(),typeof ie=="function"?x.callback=ie:x===t(p)&&s(p),D(ae)}else s(p);x=t(p)}if(x!==null)var Re=!0;else{var Pe=t(m);Pe!==null&&fe(R,Pe.startTime-ae),Re=!1}return Re}finally{x=null,y=de,M=!1}}var P=!1,k=null,z=-1,N=5,C=-1;function V(){return!(r.unstable_now()-C<N)}function $(){if(k!==null){var I=r.unstable_now();C=I;var ae=!0;try{ae=k(!0,I)}finally{ae?te():(P=!1,k=null)}}else P=!1}var te;if(typeof F=="function")te=function(){F($)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,ce=Z.port2;Z.port1.onmessage=$,te=function(){ce.postMessage(null)}}else te=function(){S($,0)};function K(I){k=I,P||(P=!0,te())}function fe(I,ae){z=S(function(){I(r.unstable_now())},ae)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_continueExecution=function(){w||M||(w=!0,K(j))},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_getFirstCallbackNode=function(){return t(p)},r.unstable_next=function(I){switch(y){case 1:case 2:case 3:var ae=3;break;default:ae=y}var de=y;y=ae;try{return I()}finally{y=de}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(I,ae){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var de=y;y=I;try{return ae()}finally{y=de}},r.unstable_scheduleCallback=function(I,ae,de){var O=r.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?O+de:O):de=O,I){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=de+ie,I={id:v++,callback:ae,priorityLevel:I,startTime:de,expirationTime:ie,sortIndex:-1},de>O?(I.sortIndex=de,e(m,I),t(p)===null&&I===t(m)&&(T?(_(z),z=-1):T=!0,fe(R,de-O))):(I.sortIndex=ie,e(p,I),w||M||(w=!0,K(j))),I},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(I){var ae=y;return function(){var de=y;y=ae;try{return I.apply(this,arguments)}finally{y=de}}}})(sd)),sd}var km;function S_(){return km||(km=1,rd.exports=y_()),rd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function M_(){if(Om)return Wn;Om=1;var r=Bf(),e=S_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){d(n,i),d(n+"Capture",i)}function d(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function y(n){return p.call(x,n)?!0:p.call(v,n)?!1:m.test(n)?x[n]=!0:(v[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,a,c,h,g,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function F(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,F);S[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,F);S[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,F);S[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function D(n,i,a,c){var h=S.hasOwnProperty(i)?S[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,h,c)&&(a=null),c||h===null?y(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var R=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,j=Symbol.for("react.element"),P=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),V=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),I=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=I&&n[I]||n["@@iterator"],typeof n=="function"?n:null)}var de=Object.assign,O;function ie(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var Re=!1;function Pe(n,i){if(!n||Re)return"";Re=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(re){var c=re}Reflect.construct(n,[],i)}else{try{i.call()}catch(re){c=re}n.call(i.prototype)}else{try{throw Error()}catch(re){c=re}n()}}catch(re){if(re&&c&&typeof re.stack=="string"){for(var h=re.stack.split(`
`),g=c.stack.split(`
`),E=h.length-1,U=g.length-1;1<=E&&0<=U&&h[E]!==g[U];)U--;for(;1<=E&&0<=U;E--,U--)if(h[E]!==g[U]){if(E!==1||U!==1)do if(E--,U--,0>U||h[E]!==g[U]){var H=`
`+h[E].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=E&&0<=U);break}}}finally{Re=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ie(n):""}function Te(n){switch(n.tag){case 5:return ie(n.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return n=Pe(n.type,!1),n;case 11:return n=Pe(n.type.render,!1),n;case 1:return n=Pe(n.type,!0),n;default:return""}}function ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case P:return"Portal";case N:return"Profiler";case z:return"StrictMode";case te:return"Suspense";case Z:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case $:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ce:return i=n.displayName||null,i!==null?i:ne(n.type)||"Memo";case K:i=n._payload,n=n._init;try{return ne(n(i))}catch{}}return null}function se(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ne(i);case 8:return i===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function _e(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ne(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function De(n){var i=Ne(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){c=""+E,g.call(this,E)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function lt(n){n._valueTracker||(n._valueTracker=De(n))}function Ft(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ne(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function B(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function zt(n,i){var a=i.checked;return de({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ht(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=_e(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function st(n,i){i=i.checked,i!=null&&D(n,"checked",i,!1)}function Xe(n,i){st(n,i);var a=_e(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?$e(n,i.type,a):i.hasOwnProperty("defaultValue")&&$e(n,i.type,_e(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Vt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function $e(n,i,a){(i!=="number"||B(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var dt=Array.isArray;function Xt(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+_e(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function $t(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return de({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function L(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(dt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:_e(a)}}function A(n,i){var a=_e(i.value),c=_e(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Q(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function pe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ve(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?pe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var he,Qe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(he=he||document.createElement("div"),he.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=he.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function be(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var je={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Je=["Webkit","ms","Moz","O"];Object.keys(je).forEach(function(n){Je.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),je[i]=je[n]})});function we(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||je.hasOwnProperty(n)&&je[n]?(""+i).trim():i+"px"}function Fe(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=we(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var at=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ke(n,i){if(i){if(at[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Le(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pt=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Me=null,Ce=null,ke=null;function Se(n){if(n=Va(n)){if(typeof Me!="function")throw Error(t(280));var i=n.stateNode;i&&(i=qo(i),Me(n.stateNode,n.type,i))}}function me(n){Ce?ke?ke.push(n):ke=[n]:Ce=n}function qe(){if(Ce){var n=Ce,i=ke;if(ke=Ce=null,Se(n),i)for(n=0;n<i.length;n++)Se(i[n])}}function ft(n,i){return n(i)}function kt(){}var Ct=!1;function si(n,i,a){if(Ct)return n(i,a);Ct=!0;try{return ft(n,i,a)}finally{Ct=!1,(Ce!==null||ke!==null)&&(kt(),qe())}}function En(n,i){var a=n.stateNode;if(a===null)return null;var c=qo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ms=!1;if(f)try{var Kn={};Object.defineProperty(Kn,"passive",{get:function(){Ms=!0}}),window.addEventListener("test",Kn,Kn),window.removeEventListener("test",Kn,Kn)}catch{Ms=!1}function Ta(n,i,a,c,h,g,E,U,H){var re=Array.prototype.slice.call(arguments,3);try{i.apply(a,re)}catch(xe){this.onError(xe)}}var cr=!1,Hr=null,Vi=!1,Es=null,ws={onError:function(n){cr=!0,Hr=n}};function bo(n,i,a,c,h,g,E,U,H){cr=!1,Hr=null,Ta.apply(ws,arguments)}function Ro(n,i,a,c,h,g,E,U,H){if(bo.apply(this,arguments),cr){if(cr){var re=Hr;cr=!1,Hr=null}else throw Error(t(198));Vi||(Vi=!0,Es=re)}}function Hi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Co(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function No(n){if(Hi(n)!==n)throw Error(t(188))}function wc(n){var i=n.alternate;if(!i){if(i=Hi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return No(h),n;if(g===c)return No(h),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=g;else{for(var E=!1,U=h.child;U;){if(U===a){E=!0,a=h,c=g;break}if(U===c){E=!0,c=h,a=g;break}U=U.sibling}if(!E){for(U=g.child;U;){if(U===a){E=!0,a=g,c=h;break}if(U===c){E=!0,c=g,a=h;break}U=U.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Po(n){return n=wc(n),n!==null?Do(n):null}function Do(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Do(n);if(i!==null)return i;n=n.sibling}return null}var b=e.unstable_scheduleCallback,q=e.unstable_cancelCallback,oe=e.unstable_shouldYield,ue=e.unstable_requestPaint,X=e.unstable_now,Ee=e.unstable_getCurrentPriorityLevel,Ie=e.unstable_ImmediatePriority,Ve=e.unstable_UserBlockingPriority,Oe=e.unstable_NormalPriority,rt=e.unstable_LowPriority,ot=e.unstable_IdlePriority,et=null,ct=null;function Ut(n){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(et,n,void 0,(n.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:tt,Ht=Math.log,Ot=Math.LN2;function tt(n){return n>>>=0,n===0?32:31-(Ht(n)/Ot|0)|0}var Bt=64,yt=4194304;function ln(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function gi(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,g=n.pingedLanes,E=a&268435455;if(E!==0){var U=E&~h;U!==0?c=ln(U):(g&=E,g!==0&&(c=ln(g)))}else E=a&~h,E!==0?c=ln(E):g!==0&&(c=ln(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Nt(i),h=1<<a,c|=n[a],i&=~h;return c}function Ln(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gr(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var E=31-Nt(g),U=1<<E,H=h[E];H===-1?((U&a)===0||(U&c)!==0)&&(h[E]=Ln(U,i)):H<=i&&(n.expiredLanes|=U),g&=~U}}function Gt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function In(){var n=Bt;return Bt<<=1,(Bt&4194240)===0&&(Bt=64),n}function wn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function tn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Nt(i),n[i]=a}function Tn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-Nt(a),g=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~g}}function Wr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Nt(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var St=0;function uh(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var dh,Tc,fh,hh,ph,Ac=!1,Lo=[],ur=null,dr=null,fr=null,Aa=new Map,ba=new Map,hr=[],kx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mh(n,i){switch(n){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":Aa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ba.delete(i.pointerId)}}function Ra(n,i,a,c,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[h]},i!==null&&(i=Va(i),i!==null&&Tc(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function Ox(n,i,a,c,h){switch(i){case"focusin":return ur=Ra(ur,n,i,a,c,h),!0;case"dragenter":return dr=Ra(dr,n,i,a,c,h),!0;case"mouseover":return fr=Ra(fr,n,i,a,c,h),!0;case"pointerover":var g=h.pointerId;return Aa.set(g,Ra(Aa.get(g)||null,n,i,a,c,h)),!0;case"gotpointercapture":return g=h.pointerId,ba.set(g,Ra(ba.get(g)||null,n,i,a,c,h)),!0}return!1}function gh(n){var i=Xr(n.target);if(i!==null){var a=Hi(i);if(a!==null){if(i=a.tag,i===13){if(i=Co(a),i!==null){n.blockedOn=i,ph(n.priority,function(){fh(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Io(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Rc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);pt=c,a.target.dispatchEvent(c),pt=null}else return i=Va(a),i!==null&&Tc(i),n.blockedOn=a,!1;i.shift()}return!0}function vh(n,i,a){Io(n)&&a.delete(i)}function zx(){Ac=!1,ur!==null&&Io(ur)&&(ur=null),dr!==null&&Io(dr)&&(dr=null),fr!==null&&Io(fr)&&(fr=null),Aa.forEach(vh),ba.forEach(vh)}function Ca(n,i){n.blockedOn===i&&(n.blockedOn=null,Ac||(Ac=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,zx)))}function Na(n){function i(h){return Ca(h,n)}if(0<Lo.length){Ca(Lo[0],n);for(var a=1;a<Lo.length;a++){var c=Lo[a];c.blockedOn===n&&(c.blockedOn=null)}}for(ur!==null&&Ca(ur,n),dr!==null&&Ca(dr,n),fr!==null&&Ca(fr,n),Aa.forEach(i),ba.forEach(i),a=0;a<hr.length;a++)c=hr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<hr.length&&(a=hr[0],a.blockedOn===null);)gh(a),a.blockedOn===null&&hr.shift()}var Ts=R.ReactCurrentBatchConfig,Uo=!0;function Bx(n,i,a,c){var h=St,g=Ts.transition;Ts.transition=null;try{St=1,bc(n,i,a,c)}finally{St=h,Ts.transition=g}}function jx(n,i,a,c){var h=St,g=Ts.transition;Ts.transition=null;try{St=4,bc(n,i,a,c)}finally{St=h,Ts.transition=g}}function bc(n,i,a,c){if(Uo){var h=Rc(n,i,a,c);if(h===null)Wc(n,i,c,Fo,a),mh(n,c);else if(Ox(h,n,i,a,c))c.stopPropagation();else if(mh(n,c),i&4&&-1<kx.indexOf(n)){for(;h!==null;){var g=Va(h);if(g!==null&&dh(g),g=Rc(n,i,a,c),g===null&&Wc(n,i,c,Fo,a),g===h)break;h=g}h!==null&&c.stopPropagation()}else Wc(n,i,c,null,a)}}var Fo=null;function Rc(n,i,a,c){if(Fo=null,n=G(c),n=Xr(n),n!==null)if(i=Hi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Co(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Fo=n,null}function xh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ee()){case Ie:return 1;case Ve:return 4;case Oe:case rt:return 16;case ot:return 536870912;default:return 16}default:return 16}}var pr=null,Cc=null,ko=null;function _h(){if(ko)return ko;var n,i=Cc,a=i.length,c,h="value"in pr?pr.value:pr.textContent,g=h.length;for(n=0;n<a&&i[n]===h[n];n++);var E=a-n;for(c=1;c<=E&&i[a-c]===h[g-c];c++);return ko=h.slice(n,1<c?1-c:void 0)}function Oo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function zo(){return!0}function yh(){return!1}function Zn(n){function i(a,c,h,g,E){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(a=n[U],this[U]=a?a(g):g[U]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?zo:yh,this.isPropagationStopped=yh,this}return de(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),i}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nc=Zn(As),Pa=de({},As,{view:0,detail:0}),Vx=Zn(Pa),Pc,Dc,Da,Bo=de({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ic,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Da&&(Da&&n.type==="mousemove"?(Pc=n.screenX-Da.screenX,Dc=n.screenY-Da.screenY):Dc=Pc=0,Da=n),Pc)},movementY:function(n){return"movementY"in n?n.movementY:Dc}}),Sh=Zn(Bo),Hx=de({},Bo,{dataTransfer:0}),Gx=Zn(Hx),Wx=de({},Pa,{relatedTarget:0}),Lc=Zn(Wx),Xx=de({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),$x=Zn(Xx),qx=de({},As,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Yx=Zn(qx),Kx=de({},As,{data:0}),Mh=Zn(Kx),Zx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function e0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Jx[n])?!!i[n]:!1}function Ic(){return e0}var t0=de({},Pa,{key:function(n){if(n.key){var i=Zx[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Oo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Qx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ic,charCode:function(n){return n.type==="keypress"?Oo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Oo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),n0=Zn(t0),i0=de({},Bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Eh=Zn(i0),r0=de({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ic}),s0=Zn(r0),a0=de({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),o0=Zn(a0),l0=de({},Bo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),c0=Zn(l0),u0=[9,13,27,32],Uc=f&&"CompositionEvent"in window,La=null;f&&"documentMode"in document&&(La=document.documentMode);var d0=f&&"TextEvent"in window&&!La,wh=f&&(!Uc||La&&8<La&&11>=La),Th=" ",Ah=!1;function bh(n,i){switch(n){case"keyup":return u0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var bs=!1;function f0(n,i){switch(n){case"compositionend":return Rh(i);case"keypress":return i.which!==32?null:(Ah=!0,Th);case"textInput":return n=i.data,n===Th&&Ah?null:n;default:return null}}function h0(n,i){if(bs)return n==="compositionend"||!Uc&&bh(n,i)?(n=_h(),ko=Cc=pr=null,bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return wh&&i.locale!=="ko"?null:i.data;default:return null}}var p0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ch(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!p0[n.type]:i==="textarea"}function Nh(n,i,a,c){me(c),i=Wo(i,"onChange"),0<i.length&&(a=new Nc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Ia=null,Ua=null;function m0(n){qh(n,0)}function jo(n){var i=Ds(n);if(Ft(i))return n}function g0(n,i){if(n==="change")return i}var Ph=!1;if(f){var Fc;if(f){var kc="oninput"in document;if(!kc){var Dh=document.createElement("div");Dh.setAttribute("oninput","return;"),kc=typeof Dh.oninput=="function"}Fc=kc}else Fc=!1;Ph=Fc&&(!document.documentMode||9<document.documentMode)}function Lh(){Ia&&(Ia.detachEvent("onpropertychange",Ih),Ua=Ia=null)}function Ih(n){if(n.propertyName==="value"&&jo(Ua)){var i=[];Nh(i,Ua,n,G(n)),si(m0,i)}}function v0(n,i,a){n==="focusin"?(Lh(),Ia=i,Ua=a,Ia.attachEvent("onpropertychange",Ih)):n==="focusout"&&Lh()}function x0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return jo(Ua)}function _0(n,i){if(n==="click")return jo(i)}function y0(n,i){if(n==="input"||n==="change")return jo(i)}function S0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var vi=typeof Object.is=="function"?Object.is:S0;function Fa(n,i){if(vi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!p.call(i,h)||!vi(n[h],i[h]))return!1}return!0}function Uh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Fh(n,i){var a=Uh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Uh(a)}}function kh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?kh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Oh(){for(var n=window,i=B();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=B(n.document)}return i}function Oc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function M0(n){var i=Oh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&kh(a.ownerDocument.documentElement,a)){if(c!==null&&Oc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,g=Math.min(c.start,h);c=c.end===void 0?g:Math.min(c.end,h),!n.extend&&g>c&&(h=c,c=g,g=h),h=Fh(a,g);var E=Fh(a,c);h&&E&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var E0=f&&"documentMode"in document&&11>=document.documentMode,Rs=null,zc=null,ka=null,Bc=!1;function zh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bc||Rs==null||Rs!==B(c)||(c=Rs,"selectionStart"in c&&Oc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ka&&Fa(ka,c)||(ka=c,c=Wo(zc,"onSelect"),0<c.length&&(i=new Nc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Rs)))}function Vo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Cs={animationend:Vo("Animation","AnimationEnd"),animationiteration:Vo("Animation","AnimationIteration"),animationstart:Vo("Animation","AnimationStart"),transitionend:Vo("Transition","TransitionEnd")},jc={},Bh={};f&&(Bh=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function Ho(n){if(jc[n])return jc[n];if(!Cs[n])return n;var i=Cs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Bh)return jc[n]=i[a];return n}var jh=Ho("animationend"),Vh=Ho("animationiteration"),Hh=Ho("animationstart"),Gh=Ho("transitionend"),Wh=new Map,Xh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(n,i){Wh.set(n,i),l(i,[n])}for(var Vc=0;Vc<Xh.length;Vc++){var Hc=Xh[Vc],w0=Hc.toLowerCase(),T0=Hc[0].toUpperCase()+Hc.slice(1);mr(w0,"on"+T0)}mr(jh,"onAnimationEnd"),mr(Vh,"onAnimationIteration"),mr(Hh,"onAnimationStart"),mr("dblclick","onDoubleClick"),mr("focusin","onFocus"),mr("focusout","onBlur"),mr(Gh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),A0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oa));function $h(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Ro(c,i,void 0,n),n.currentTarget=null}function qh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var E=c.length-1;0<=E;E--){var U=c[E],H=U.instance,re=U.currentTarget;if(U=U.listener,H!==g&&h.isPropagationStopped())break e;$h(h,U,re),g=H}else for(E=0;E<c.length;E++){if(U=c[E],H=U.instance,re=U.currentTarget,U=U.listener,H!==g&&h.isPropagationStopped())break e;$h(h,U,re),g=H}}}if(Vi)throw n=Es,Vi=!1,Es=null,n}function qt(n,i){var a=i[Zc];a===void 0&&(a=i[Zc]=new Set);var c=n+"__bubble";a.has(c)||(Yh(i,n,2,!1),a.add(c))}function Gc(n,i,a){var c=0;i&&(c|=4),Yh(a,n,c,i)}var Go="_reactListening"+Math.random().toString(36).slice(2);function za(n){if(!n[Go]){n[Go]=!0,s.forEach(function(a){a!=="selectionchange"&&(A0.has(a)||Gc(a,!1,n),Gc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Go]||(i[Go]=!0,Gc("selectionchange",!1,i))}}function Yh(n,i,a,c){switch(xh(i)){case 1:var h=Bx;break;case 4:h=jx;break;default:h=bc}a=h.bind(null,i,a,n),h=void 0,!Ms||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function Wc(n,i,a,c,h){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var U=c.stateNode.containerInfo;if(U===h||U.nodeType===8&&U.parentNode===h)break;if(E===4)for(E=c.return;E!==null;){var H=E.tag;if((H===3||H===4)&&(H=E.stateNode.containerInfo,H===h||H.nodeType===8&&H.parentNode===h))return;E=E.return}for(;U!==null;){if(E=Xr(U),E===null)return;if(H=E.tag,H===5||H===6){c=g=E;continue e}U=U.parentNode}}c=c.return}si(function(){var re=g,xe=G(a),ye=[];e:{var ge=Wh.get(n);if(ge!==void 0){var ze=Nc,He=n;switch(n){case"keypress":if(Oo(a)===0)break e;case"keydown":case"keyup":ze=n0;break;case"focusin":He="focus",ze=Lc;break;case"focusout":He="blur",ze=Lc;break;case"beforeblur":case"afterblur":ze=Lc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=Sh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=Gx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=s0;break;case jh:case Vh:case Hh:ze=$x;break;case Gh:ze=o0;break;case"scroll":ze=Vx;break;case"wheel":ze=c0;break;case"copy":case"cut":case"paste":ze=Yx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=Eh}var Ye=(i&4)!==0,nn=!Ye&&n==="scroll",Y=Ye?ge!==null?ge+"Capture":null:ge;Ye=[];for(var W=re,J;W!==null;){J=W;var Ae=J.stateNode;if(J.tag===5&&Ae!==null&&(J=Ae,Y!==null&&(Ae=En(W,Y),Ae!=null&&Ye.push(Ba(W,Ae,J)))),nn)break;W=W.return}0<Ye.length&&(ge=new ze(ge,He,null,a,xe),ye.push({event:ge,listeners:Ye}))}}if((i&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",ze=n==="mouseout"||n==="pointerout",ge&&a!==pt&&(He=a.relatedTarget||a.fromElement)&&(Xr(He)||He[Gi]))break e;if((ze||ge)&&(ge=xe.window===xe?xe:(ge=xe.ownerDocument)?ge.defaultView||ge.parentWindow:window,ze?(He=a.relatedTarget||a.toElement,ze=re,He=He?Xr(He):null,He!==null&&(nn=Hi(He),He!==nn||He.tag!==5&&He.tag!==6)&&(He=null)):(ze=null,He=re),ze!==He)){if(Ye=Sh,Ae="onMouseLeave",Y="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=Eh,Ae="onPointerLeave",Y="onPointerEnter",W="pointer"),nn=ze==null?ge:Ds(ze),J=He==null?ge:Ds(He),ge=new Ye(Ae,W+"leave",ze,a,xe),ge.target=nn,ge.relatedTarget=J,Ae=null,Xr(xe)===re&&(Ye=new Ye(Y,W+"enter",He,a,xe),Ye.target=J,Ye.relatedTarget=nn,Ae=Ye),nn=Ae,ze&&He)t:{for(Ye=ze,Y=He,W=0,J=Ye;J;J=Ns(J))W++;for(J=0,Ae=Y;Ae;Ae=Ns(Ae))J++;for(;0<W-J;)Ye=Ns(Ye),W--;for(;0<J-W;)Y=Ns(Y),J--;for(;W--;){if(Ye===Y||Y!==null&&Ye===Y.alternate)break t;Ye=Ns(Ye),Y=Ns(Y)}Ye=null}else Ye=null;ze!==null&&Kh(ye,ge,ze,Ye,!1),He!==null&&nn!==null&&Kh(ye,nn,He,Ye,!0)}}e:{if(ge=re?Ds(re):window,ze=ge.nodeName&&ge.nodeName.toLowerCase(),ze==="select"||ze==="input"&&ge.type==="file")var Ze=g0;else if(Ch(ge))if(Ph)Ze=y0;else{Ze=x0;var nt=v0}else(ze=ge.nodeName)&&ze.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ze=_0);if(Ze&&(Ze=Ze(n,re))){Nh(ye,Ze,a,xe);break e}nt&&nt(n,ge,re),n==="focusout"&&(nt=ge._wrapperState)&&nt.controlled&&ge.type==="number"&&$e(ge,"number",ge.value)}switch(nt=re?Ds(re):window,n){case"focusin":(Ch(nt)||nt.contentEditable==="true")&&(Rs=nt,zc=re,ka=null);break;case"focusout":ka=zc=Rs=null;break;case"mousedown":Bc=!0;break;case"contextmenu":case"mouseup":case"dragend":Bc=!1,zh(ye,a,xe);break;case"selectionchange":if(E0)break;case"keydown":case"keyup":zh(ye,a,xe)}var it;if(Uc)e:{switch(n){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else bs?bh(n,a)&&(ut="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ut="onCompositionStart");ut&&(wh&&a.locale!=="ko"&&(bs||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&bs&&(it=_h()):(pr=xe,Cc="value"in pr?pr.value:pr.textContent,bs=!0)),nt=Wo(re,ut),0<nt.length&&(ut=new Mh(ut,n,null,a,xe),ye.push({event:ut,listeners:nt}),it?ut.data=it:(it=Rh(a),it!==null&&(ut.data=it)))),(it=d0?f0(n,a):h0(n,a))&&(re=Wo(re,"onBeforeInput"),0<re.length&&(xe=new Mh("onBeforeInput","beforeinput",null,a,xe),ye.push({event:xe,listeners:re}),xe.data=it))}qh(ye,i)})}function Ba(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Wo(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=En(n,a),g!=null&&c.unshift(Ba(n,g,h)),g=En(n,i),g!=null&&c.push(Ba(n,g,h))),n=n.return}return c}function Ns(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Kh(n,i,a,c,h){for(var g=i._reactName,E=[];a!==null&&a!==c;){var U=a,H=U.alternate,re=U.stateNode;if(H!==null&&H===c)break;U.tag===5&&re!==null&&(U=re,h?(H=En(a,g),H!=null&&E.unshift(Ba(a,H,U))):h||(H=En(a,g),H!=null&&E.push(Ba(a,H,U)))),a=a.return}E.length!==0&&n.push({event:i,listeners:E})}var b0=/\r\n?/g,R0=/\u0000|\uFFFD/g;function Zh(n){return(typeof n=="string"?n:""+n).replace(b0,`
`).replace(R0,"")}function Xo(n,i,a){if(i=Zh(i),Zh(n)!==i&&a)throw Error(t(425))}function $o(){}var Xc=null,$c=null;function qc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Yc=typeof setTimeout=="function"?setTimeout:void 0,C0=typeof clearTimeout=="function"?clearTimeout:void 0,Qh=typeof Promise=="function"?Promise:void 0,N0=typeof queueMicrotask=="function"?queueMicrotask:typeof Qh<"u"?function(n){return Qh.resolve(null).then(n).catch(P0)}:Yc;function P0(n){setTimeout(function(){throw n})}function Kc(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),Na(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);Na(i)}function gr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Jh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ps=Math.random().toString(36).slice(2),Ni="__reactFiber$"+Ps,ja="__reactProps$"+Ps,Gi="__reactContainer$"+Ps,Zc="__reactEvents$"+Ps,D0="__reactListeners$"+Ps,L0="__reactHandles$"+Ps;function Xr(n){var i=n[Ni];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Gi]||a[Ni]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Jh(n);n!==null;){if(a=n[Ni])return a;n=Jh(n)}return i}n=a,a=n.parentNode}return null}function Va(n){return n=n[Ni]||n[Gi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ds(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function qo(n){return n[ja]||null}var Qc=[],Ls=-1;function vr(n){return{current:n}}function Yt(n){0>Ls||(n.current=Qc[Ls],Qc[Ls]=null,Ls--)}function Wt(n,i){Ls++,Qc[Ls]=n.current,n.current=i}var xr={},An=vr(xr),Bn=vr(!1),$r=xr;function Is(n,i){var a=n.type.contextTypes;if(!a)return xr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function jn(n){return n=n.childContextTypes,n!=null}function Yo(){Yt(Bn),Yt(An)}function ep(n,i,a){if(An.current!==xr)throw Error(t(168));Wt(An,i),Wt(Bn,a)}function tp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,se(n)||"Unknown",h));return de({},a,c)}function Ko(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||xr,$r=An.current,Wt(An,n),Wt(Bn,Bn.current),!0}function np(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=tp(n,i,$r),c.__reactInternalMemoizedMergedChildContext=n,Yt(Bn),Yt(An),Wt(An,n)):Yt(Bn),Wt(Bn,a)}var Wi=null,Zo=!1,Jc=!1;function ip(n){Wi===null?Wi=[n]:Wi.push(n)}function I0(n){Zo=!0,ip(n)}function _r(){if(!Jc&&Wi!==null){Jc=!0;var n=0,i=St;try{var a=Wi;for(St=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Wi=null,Zo=!1}catch(h){throw Wi!==null&&(Wi=Wi.slice(n+1)),b(Ie,_r),h}finally{St=i,Jc=!1}}return null}var Us=[],Fs=0,Qo=null,Jo=0,ai=[],oi=0,qr=null,Xi=1,$i="";function Yr(n,i){Us[Fs++]=Jo,Us[Fs++]=Qo,Qo=n,Jo=i}function rp(n,i,a){ai[oi++]=Xi,ai[oi++]=$i,ai[oi++]=qr,qr=n;var c=Xi;n=$i;var h=32-Nt(c)-1;c&=~(1<<h),a+=1;var g=32-Nt(i)+h;if(30<g){var E=h-h%5;g=(c&(1<<E)-1).toString(32),c>>=E,h-=E,Xi=1<<32-Nt(i)+h|a<<h|c,$i=g+n}else Xi=1<<g|a<<h|c,$i=n}function eu(n){n.return!==null&&(Yr(n,1),rp(n,1,0))}function tu(n){for(;n===Qo;)Qo=Us[--Fs],Us[Fs]=null,Jo=Us[--Fs],Us[Fs]=null;for(;n===qr;)qr=ai[--oi],ai[oi]=null,$i=ai[--oi],ai[oi]=null,Xi=ai[--oi],ai[oi]=null}var Qn=null,Jn=null,Kt=!1,xi=null;function sp(n,i){var a=di(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function ap(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Qn=n,Jn=gr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Qn=n,Jn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=qr!==null?{id:Xi,overflow:$i}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=di(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Qn=n,Jn=null,!0):!1;default:return!1}}function nu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function iu(n){if(Kt){var i=Jn;if(i){var a=i;if(!ap(n,i)){if(nu(n))throw Error(t(418));i=gr(a.nextSibling);var c=Qn;i&&ap(n,i)?sp(c,a):(n.flags=n.flags&-4097|2,Kt=!1,Qn=n)}}else{if(nu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Kt=!1,Qn=n}}}function op(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Qn=n}function el(n){if(n!==Qn)return!1;if(!Kt)return op(n),Kt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!qc(n.type,n.memoizedProps)),i&&(i=Jn)){if(nu(n))throw lp(),Error(t(418));for(;i;)sp(n,i),i=gr(i.nextSibling)}if(op(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Jn=gr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Jn=null}}else Jn=Qn?gr(n.stateNode.nextSibling):null;return!0}function lp(){for(var n=Jn;n;)n=gr(n.nextSibling)}function ks(){Jn=Qn=null,Kt=!1}function ru(n){xi===null?xi=[n]:xi.push(n)}var U0=R.ReactCurrentBatchConfig;function Ha(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(E){var U=h.refs;E===null?delete U[g]:U[g]=E},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function tl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function cp(n){var i=n._init;return i(n._payload)}function up(n){function i(Y,W){if(n){var J=Y.deletions;J===null?(Y.deletions=[W],Y.flags|=16):J.push(W)}}function a(Y,W){if(!n)return null;for(;W!==null;)i(Y,W),W=W.sibling;return null}function c(Y,W){for(Y=new Map;W!==null;)W.key!==null?Y.set(W.key,W):Y.set(W.index,W),W=W.sibling;return Y}function h(Y,W){return Y=br(Y,W),Y.index=0,Y.sibling=null,Y}function g(Y,W,J){return Y.index=J,n?(J=Y.alternate,J!==null?(J=J.index,J<W?(Y.flags|=2,W):J):(Y.flags|=2,W)):(Y.flags|=1048576,W)}function E(Y){return n&&Y.alternate===null&&(Y.flags|=2),Y}function U(Y,W,J,Ae){return W===null||W.tag!==6?(W=Yu(J,Y.mode,Ae),W.return=Y,W):(W=h(W,J),W.return=Y,W)}function H(Y,W,J,Ae){var Ze=J.type;return Ze===k?xe(Y,W,J.props.children,Ae,J.key):W!==null&&(W.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===K&&cp(Ze)===W.type)?(Ae=h(W,J.props),Ae.ref=Ha(Y,W,J),Ae.return=Y,Ae):(Ae=Tl(J.type,J.key,J.props,null,Y.mode,Ae),Ae.ref=Ha(Y,W,J),Ae.return=Y,Ae)}function re(Y,W,J,Ae){return W===null||W.tag!==4||W.stateNode.containerInfo!==J.containerInfo||W.stateNode.implementation!==J.implementation?(W=Ku(J,Y.mode,Ae),W.return=Y,W):(W=h(W,J.children||[]),W.return=Y,W)}function xe(Y,W,J,Ae,Ze){return W===null||W.tag!==7?(W=is(J,Y.mode,Ae,Ze),W.return=Y,W):(W=h(W,J),W.return=Y,W)}function ye(Y,W,J){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Yu(""+W,Y.mode,J),W.return=Y,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case j:return J=Tl(W.type,W.key,W.props,null,Y.mode,J),J.ref=Ha(Y,null,W),J.return=Y,J;case P:return W=Ku(W,Y.mode,J),W.return=Y,W;case K:var Ae=W._init;return ye(Y,Ae(W._payload),J)}if(dt(W)||ae(W))return W=is(W,Y.mode,J,null),W.return=Y,W;tl(Y,W)}return null}function ge(Y,W,J,Ae){var Ze=W!==null?W.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return Ze!==null?null:U(Y,W,""+J,Ae);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case j:return J.key===Ze?H(Y,W,J,Ae):null;case P:return J.key===Ze?re(Y,W,J,Ae):null;case K:return Ze=J._init,ge(Y,W,Ze(J._payload),Ae)}if(dt(J)||ae(J))return Ze!==null?null:xe(Y,W,J,Ae,null);tl(Y,J)}return null}function ze(Y,W,J,Ae,Ze){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return Y=Y.get(J)||null,U(W,Y,""+Ae,Ze);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case j:return Y=Y.get(Ae.key===null?J:Ae.key)||null,H(W,Y,Ae,Ze);case P:return Y=Y.get(Ae.key===null?J:Ae.key)||null,re(W,Y,Ae,Ze);case K:var nt=Ae._init;return ze(Y,W,J,nt(Ae._payload),Ze)}if(dt(Ae)||ae(Ae))return Y=Y.get(J)||null,xe(W,Y,Ae,Ze,null);tl(W,Ae)}return null}function He(Y,W,J,Ae){for(var Ze=null,nt=null,it=W,ut=W=0,vn=null;it!==null&&ut<J.length;ut++){it.index>ut?(vn=it,it=null):vn=it.sibling;var Lt=ge(Y,it,J[ut],Ae);if(Lt===null){it===null&&(it=vn);break}n&&it&&Lt.alternate===null&&i(Y,it),W=g(Lt,W,ut),nt===null?Ze=Lt:nt.sibling=Lt,nt=Lt,it=vn}if(ut===J.length)return a(Y,it),Kt&&Yr(Y,ut),Ze;if(it===null){for(;ut<J.length;ut++)it=ye(Y,J[ut],Ae),it!==null&&(W=g(it,W,ut),nt===null?Ze=it:nt.sibling=it,nt=it);return Kt&&Yr(Y,ut),Ze}for(it=c(Y,it);ut<J.length;ut++)vn=ze(it,Y,ut,J[ut],Ae),vn!==null&&(n&&vn.alternate!==null&&it.delete(vn.key===null?ut:vn.key),W=g(vn,W,ut),nt===null?Ze=vn:nt.sibling=vn,nt=vn);return n&&it.forEach(function(Rr){return i(Y,Rr)}),Kt&&Yr(Y,ut),Ze}function Ye(Y,W,J,Ae){var Ze=ae(J);if(typeof Ze!="function")throw Error(t(150));if(J=Ze.call(J),J==null)throw Error(t(151));for(var nt=Ze=null,it=W,ut=W=0,vn=null,Lt=J.next();it!==null&&!Lt.done;ut++,Lt=J.next()){it.index>ut?(vn=it,it=null):vn=it.sibling;var Rr=ge(Y,it,Lt.value,Ae);if(Rr===null){it===null&&(it=vn);break}n&&it&&Rr.alternate===null&&i(Y,it),W=g(Rr,W,ut),nt===null?Ze=Rr:nt.sibling=Rr,nt=Rr,it=vn}if(Lt.done)return a(Y,it),Kt&&Yr(Y,ut),Ze;if(it===null){for(;!Lt.done;ut++,Lt=J.next())Lt=ye(Y,Lt.value,Ae),Lt!==null&&(W=g(Lt,W,ut),nt===null?Ze=Lt:nt.sibling=Lt,nt=Lt);return Kt&&Yr(Y,ut),Ze}for(it=c(Y,it);!Lt.done;ut++,Lt=J.next())Lt=ze(it,Y,ut,Lt.value,Ae),Lt!==null&&(n&&Lt.alternate!==null&&it.delete(Lt.key===null?ut:Lt.key),W=g(Lt,W,ut),nt===null?Ze=Lt:nt.sibling=Lt,nt=Lt);return n&&it.forEach(function(p_){return i(Y,p_)}),Kt&&Yr(Y,ut),Ze}function nn(Y,W,J,Ae){if(typeof J=="object"&&J!==null&&J.type===k&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case j:e:{for(var Ze=J.key,nt=W;nt!==null;){if(nt.key===Ze){if(Ze=J.type,Ze===k){if(nt.tag===7){a(Y,nt.sibling),W=h(nt,J.props.children),W.return=Y,Y=W;break e}}else if(nt.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===K&&cp(Ze)===nt.type){a(Y,nt.sibling),W=h(nt,J.props),W.ref=Ha(Y,nt,J),W.return=Y,Y=W;break e}a(Y,nt);break}else i(Y,nt);nt=nt.sibling}J.type===k?(W=is(J.props.children,Y.mode,Ae,J.key),W.return=Y,Y=W):(Ae=Tl(J.type,J.key,J.props,null,Y.mode,Ae),Ae.ref=Ha(Y,W,J),Ae.return=Y,Y=Ae)}return E(Y);case P:e:{for(nt=J.key;W!==null;){if(W.key===nt)if(W.tag===4&&W.stateNode.containerInfo===J.containerInfo&&W.stateNode.implementation===J.implementation){a(Y,W.sibling),W=h(W,J.children||[]),W.return=Y,Y=W;break e}else{a(Y,W);break}else i(Y,W);W=W.sibling}W=Ku(J,Y.mode,Ae),W.return=Y,Y=W}return E(Y);case K:return nt=J._init,nn(Y,W,nt(J._payload),Ae)}if(dt(J))return He(Y,W,J,Ae);if(ae(J))return Ye(Y,W,J,Ae);tl(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,W!==null&&W.tag===6?(a(Y,W.sibling),W=h(W,J),W.return=Y,Y=W):(a(Y,W),W=Yu(J,Y.mode,Ae),W.return=Y,Y=W),E(Y)):a(Y,W)}return nn}var Os=up(!0),dp=up(!1),nl=vr(null),il=null,zs=null,su=null;function au(){su=zs=il=null}function ou(n){var i=nl.current;Yt(nl),n._currentValue=i}function lu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Bs(n,i){il=n,su=zs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Vn=!0),n.firstContext=null)}function li(n){var i=n._currentValue;if(su!==n)if(n={context:n,memoizedValue:i,next:null},zs===null){if(il===null)throw Error(t(308));zs=n,il.dependencies={lanes:0,firstContext:n}}else zs=zs.next=n;return i}var Kr=null;function cu(n){Kr===null?Kr=[n]:Kr.push(n)}function fp(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,cu(i)):(a.next=h.next,h.next=a),i.interleaved=a,qi(n,c)}function qi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var yr=!1;function uu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Yi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Sr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Dt&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,qi(n,a)}return h=c.interleaved,h===null?(i.next=i,cu(c)):(i.next=h.next,h.next=i),c.interleaved=i,qi(n,a)}function rl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Wr(n,a)}}function pp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=E:g=g.next=E,a=a.next}while(a!==null);g===null?h=g=i:g=g.next=i}else h=g=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function sl(n,i,a,c){var h=n.updateQueue;yr=!1;var g=h.firstBaseUpdate,E=h.lastBaseUpdate,U=h.shared.pending;if(U!==null){h.shared.pending=null;var H=U,re=H.next;H.next=null,E===null?g=re:E.next=re,E=H;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,U=xe.lastBaseUpdate,U!==E&&(U===null?xe.firstBaseUpdate=re:U.next=re,xe.lastBaseUpdate=H))}if(g!==null){var ye=h.baseState;E=0,xe=re=H=null,U=g;do{var ge=U.lane,ze=U.eventTime;if((c&ge)===ge){xe!==null&&(xe=xe.next={eventTime:ze,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var He=n,Ye=U;switch(ge=i,ze=a,Ye.tag){case 1:if(He=Ye.payload,typeof He=="function"){ye=He.call(ze,ye,ge);break e}ye=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ye.payload,ge=typeof He=="function"?He.call(ze,ye,ge):He,ge==null)break e;ye=de({},ye,ge);break e;case 2:yr=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,ge=h.effects,ge===null?h.effects=[U]:ge.push(U))}else ze={eventTime:ze,lane:ge,tag:U.tag,payload:U.payload,callback:U.callback,next:null},xe===null?(re=xe=ze,H=ye):xe=xe.next=ze,E|=ge;if(U=U.next,U===null){if(U=h.shared.pending,U===null)break;ge=U,U=ge.next,ge.next=null,h.lastBaseUpdate=ge,h.shared.pending=null}}while(!0);if(xe===null&&(H=ye),h.baseState=H,h.firstBaseUpdate=re,h.lastBaseUpdate=xe,i=h.shared.interleaved,i!==null){h=i;do E|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);Jr|=E,n.lanes=E,n.memoizedState=ye}}function mp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var Ga={},Pi=vr(Ga),Wa=vr(Ga),Xa=vr(Ga);function Zr(n){if(n===Ga)throw Error(t(174));return n}function du(n,i){switch(Wt(Xa,i),Wt(Wa,n),Wt(Pi,Ga),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ve(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ve(i,n)}Yt(Pi),Wt(Pi,i)}function js(){Yt(Pi),Yt(Wa),Yt(Xa)}function gp(n){Zr(Xa.current);var i=Zr(Pi.current),a=ve(i,n.type);i!==a&&(Wt(Wa,n),Wt(Pi,a))}function fu(n){Wa.current===n&&(Yt(Pi),Yt(Wa))}var Zt=vr(0);function al(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var hu=[];function pu(){for(var n=0;n<hu.length;n++)hu[n]._workInProgressVersionPrimary=null;hu.length=0}var ol=R.ReactCurrentDispatcher,mu=R.ReactCurrentBatchConfig,Qr=0,Qt=null,cn=null,mn=null,ll=!1,$a=!1,qa=0,F0=0;function bn(){throw Error(t(321))}function gu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!vi(n[a],i[a]))return!1;return!0}function vu(n,i,a,c,h,g){if(Qr=g,Qt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ol.current=n===null||n.memoizedState===null?B0:j0,n=a(c,h),$a){g=0;do{if($a=!1,qa=0,25<=g)throw Error(t(301));g+=1,mn=cn=null,i.updateQueue=null,ol.current=V0,n=a(c,h)}while($a)}if(ol.current=dl,i=cn!==null&&cn.next!==null,Qr=0,mn=cn=Qt=null,ll=!1,i)throw Error(t(300));return n}function xu(){var n=qa!==0;return qa=0,n}function Di(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?Qt.memoizedState=mn=n:mn=mn.next=n,mn}function ci(){if(cn===null){var n=Qt.alternate;n=n!==null?n.memoizedState:null}else n=cn.next;var i=mn===null?Qt.memoizedState:mn.next;if(i!==null)mn=i,cn=n;else{if(n===null)throw Error(t(310));cn=n,n={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},mn===null?Qt.memoizedState=mn=n:mn=mn.next=n}return mn}function Ya(n,i){return typeof i=="function"?i(n):i}function _u(n){var i=ci(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=cn,h=c.baseQueue,g=a.pending;if(g!==null){if(h!==null){var E=h.next;h.next=g.next,g.next=E}c.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,c=c.baseState;var U=E=null,H=null,re=g;do{var xe=re.lane;if((Qr&xe)===xe)H!==null&&(H=H.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),c=re.hasEagerState?re.eagerState:n(c,re.action);else{var ye={lane:xe,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};H===null?(U=H=ye,E=c):H=H.next=ye,Qt.lanes|=xe,Jr|=xe}re=re.next}while(re!==null&&re!==g);H===null?E=c:H.next=U,vi(c,i.memoizedState)||(Vn=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=H,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do g=h.lane,Qt.lanes|=g,Jr|=g,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function yu(n){var i=ci(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,g=i.memoizedState;if(h!==null){a.pending=null;var E=h=h.next;do g=n(g,E.action),E=E.next;while(E!==h);vi(g,i.memoizedState)||(Vn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function vp(){}function xp(n,i){var a=Qt,c=ci(),h=i(),g=!vi(c.memoizedState,h);if(g&&(c.memoizedState=h,Vn=!0),c=c.queue,Su(Sp.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||mn!==null&&mn.memoizedState.tag&1){if(a.flags|=2048,Ka(9,yp.bind(null,a,c,h,i),void 0,null),gn===null)throw Error(t(349));(Qr&30)!==0||_p(a,i,h)}return h}function _p(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Qt.updateQueue,i===null?(i={lastEffect:null,stores:null},Qt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function yp(n,i,a,c){i.value=a,i.getSnapshot=c,Mp(i)&&Ep(n)}function Sp(n,i,a){return a(function(){Mp(i)&&Ep(n)})}function Mp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!vi(n,a)}catch{return!0}}function Ep(n){var i=qi(n,1);i!==null&&Mi(i,n,1,-1)}function wp(n){var i=Di();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ya,lastRenderedState:n},i.queue=n,n=n.dispatch=z0.bind(null,Qt,n),[i.memoizedState,n]}function Ka(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Qt.updateQueue,i===null?(i={lastEffect:null,stores:null},Qt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Tp(){return ci().memoizedState}function cl(n,i,a,c){var h=Di();Qt.flags|=n,h.memoizedState=Ka(1|i,a,void 0,c===void 0?null:c)}function ul(n,i,a,c){var h=ci();c=c===void 0?null:c;var g=void 0;if(cn!==null){var E=cn.memoizedState;if(g=E.destroy,c!==null&&gu(c,E.deps)){h.memoizedState=Ka(i,a,g,c);return}}Qt.flags|=n,h.memoizedState=Ka(1|i,a,g,c)}function Ap(n,i){return cl(8390656,8,n,i)}function Su(n,i){return ul(2048,8,n,i)}function bp(n,i){return ul(4,2,n,i)}function Rp(n,i){return ul(4,4,n,i)}function Cp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Np(n,i,a){return a=a!=null?a.concat([n]):null,ul(4,4,Cp.bind(null,i,n),a)}function Mu(){}function Pp(n,i){var a=ci();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&gu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Dp(n,i){var a=ci();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&gu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Lp(n,i,a){return(Qr&21)===0?(n.baseState&&(n.baseState=!1,Vn=!0),n.memoizedState=a):(vi(a,i)||(a=In(),Qt.lanes|=a,Jr|=a,n.baseState=!0),i)}function k0(n,i){var a=St;St=a!==0&&4>a?a:4,n(!0);var c=mu.transition;mu.transition={};try{n(!1),i()}finally{St=a,mu.transition=c}}function Ip(){return ci().memoizedState}function O0(n,i,a){var c=Tr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Up(n))Fp(i,a);else if(a=fp(n,i,a,c),a!==null){var h=Fn();Mi(a,n,c,h),kp(a,i,c)}}function z0(n,i,a){var c=Tr(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Up(n))Fp(i,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var E=i.lastRenderedState,U=g(E,a);if(h.hasEagerState=!0,h.eagerState=U,vi(U,E)){var H=i.interleaved;H===null?(h.next=h,cu(i)):(h.next=H.next,H.next=h),i.interleaved=h;return}}catch{}finally{}a=fp(n,i,h,c),a!==null&&(h=Fn(),Mi(a,n,c,h),kp(a,i,c))}}function Up(n){var i=n.alternate;return n===Qt||i!==null&&i===Qt}function Fp(n,i){$a=ll=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function kp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Wr(n,a)}}var dl={readContext:li,useCallback:bn,useContext:bn,useEffect:bn,useImperativeHandle:bn,useInsertionEffect:bn,useLayoutEffect:bn,useMemo:bn,useReducer:bn,useRef:bn,useState:bn,useDebugValue:bn,useDeferredValue:bn,useTransition:bn,useMutableSource:bn,useSyncExternalStore:bn,useId:bn,unstable_isNewReconciler:!1},B0={readContext:li,useCallback:function(n,i){return Di().memoizedState=[n,i===void 0?null:i],n},useContext:li,useEffect:Ap,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,cl(4194308,4,Cp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return cl(4194308,4,n,i)},useInsertionEffect:function(n,i){return cl(4,2,n,i)},useMemo:function(n,i){var a=Di();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Di();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=O0.bind(null,Qt,n),[c.memoizedState,n]},useRef:function(n){var i=Di();return n={current:n},i.memoizedState=n},useState:wp,useDebugValue:Mu,useDeferredValue:function(n){return Di().memoizedState=n},useTransition:function(){var n=wp(!1),i=n[0];return n=k0.bind(null,n[1]),Di().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Qt,h=Di();if(Kt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),gn===null)throw Error(t(349));(Qr&30)!==0||_p(c,i,a)}h.memoizedState=a;var g={value:a,getSnapshot:i};return h.queue=g,Ap(Sp.bind(null,c,g,n),[n]),c.flags|=2048,Ka(9,yp.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=Di(),i=gn.identifierPrefix;if(Kt){var a=$i,c=Xi;a=(c&~(1<<32-Nt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=qa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=F0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},j0={readContext:li,useCallback:Pp,useContext:li,useEffect:Su,useImperativeHandle:Np,useInsertionEffect:bp,useLayoutEffect:Rp,useMemo:Dp,useReducer:_u,useRef:Tp,useState:function(){return _u(Ya)},useDebugValue:Mu,useDeferredValue:function(n){var i=ci();return Lp(i,cn.memoizedState,n)},useTransition:function(){var n=_u(Ya)[0],i=ci().memoizedState;return[n,i]},useMutableSource:vp,useSyncExternalStore:xp,useId:Ip,unstable_isNewReconciler:!1},V0={readContext:li,useCallback:Pp,useContext:li,useEffect:Su,useImperativeHandle:Np,useInsertionEffect:bp,useLayoutEffect:Rp,useMemo:Dp,useReducer:yu,useRef:Tp,useState:function(){return yu(Ya)},useDebugValue:Mu,useDeferredValue:function(n){var i=ci();return cn===null?i.memoizedState=n:Lp(i,cn.memoizedState,n)},useTransition:function(){var n=yu(Ya)[0],i=ci().memoizedState;return[n,i]},useMutableSource:vp,useSyncExternalStore:xp,useId:Ip,unstable_isNewReconciler:!1};function _i(n,i){if(n&&n.defaultProps){i=de({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Eu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:de({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var fl={isMounted:function(n){return(n=n._reactInternals)?Hi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Fn(),h=Tr(n),g=Yi(c,h);g.payload=i,a!=null&&(g.callback=a),i=Sr(n,g,h),i!==null&&(Mi(i,n,h,c),rl(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Fn(),h=Tr(n),g=Yi(c,h);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=Sr(n,g,h),i!==null&&(Mi(i,n,h,c),rl(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Fn(),c=Tr(n),h=Yi(a,c);h.tag=2,i!=null&&(h.callback=i),i=Sr(n,h,c),i!==null&&(Mi(i,n,c,a),rl(i,n,c))}};function Op(n,i,a,c,h,g,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,E):i.prototype&&i.prototype.isPureReactComponent?!Fa(a,c)||!Fa(h,g):!0}function zp(n,i,a){var c=!1,h=xr,g=i.contextType;return typeof g=="object"&&g!==null?g=li(g):(h=jn(i)?$r:An.current,c=i.contextTypes,g=(c=c!=null)?Is(n,h):xr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=fl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),i}function Bp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&fl.enqueueReplaceState(i,i.state,null)}function wu(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},uu(n);var g=i.contextType;typeof g=="object"&&g!==null?h.context=li(g):(g=jn(i)?$r:An.current,h.context=Is(n,g)),h.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Eu(n,i,g,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&fl.enqueueReplaceState(h,h.state,null),sl(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Vs(n,i){try{var a="",c=i;do a+=Te(c),c=c.return;while(c);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:h,digest:null}}function Tu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Au(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var H0=typeof WeakMap=="function"?WeakMap:Map;function jp(n,i,a){a=Yi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){_l||(_l=!0,ju=c),Au(n,i)},a}function Vp(n,i,a){a=Yi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){Au(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Au(n,i),typeof c!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function Hp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new H0;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=i_.bind(null,n,i,a),i.then(n,n))}function Gp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Wp(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Yi(-1,1),i.tag=2,Sr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var G0=R.ReactCurrentOwner,Vn=!1;function Un(n,i,a,c){i.child=n===null?dp(i,null,a,c):Os(i,n.child,a,c)}function Xp(n,i,a,c,h){a=a.render;var g=i.ref;return Bs(i,h),c=vu(n,i,a,c,g,h),a=xu(),n!==null&&!Vn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Ki(n,i,h)):(Kt&&a&&eu(i),i.flags|=1,Un(n,i,c,h),i.child)}function $p(n,i,a,c,h){if(n===null){var g=a.type;return typeof g=="function"&&!qu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,qp(n,i,g,c,h)):(n=Tl(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&h)===0){var E=g.memoizedProps;if(a=a.compare,a=a!==null?a:Fa,a(E,c)&&n.ref===i.ref)return Ki(n,i,h)}return i.flags|=1,n=br(g,c),n.ref=i.ref,n.return=i,i.child=n}function qp(n,i,a,c,h){if(n!==null){var g=n.memoizedProps;if(Fa(g,c)&&n.ref===i.ref)if(Vn=!1,i.pendingProps=c=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Vn=!0);else return i.lanes=n.lanes,Ki(n,i,h)}return bu(n,i,a,c,h)}function Yp(n,i,a){var c=i.pendingProps,h=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Wt(Gs,ei),ei|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Wt(Gs,ei),ei|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,Wt(Gs,ei),ei|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,Wt(Gs,ei),ei|=c;return Un(n,i,h,a),i.child}function Kp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function bu(n,i,a,c,h){var g=jn(a)?$r:An.current;return g=Is(i,g),Bs(i,h),a=vu(n,i,a,c,g,h),c=xu(),n!==null&&!Vn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Ki(n,i,h)):(Kt&&c&&eu(i),i.flags|=1,Un(n,i,a,h),i.child)}function Zp(n,i,a,c,h){if(jn(a)){var g=!0;Ko(i)}else g=!1;if(Bs(i,h),i.stateNode===null)pl(n,i),zp(i,a,c),wu(i,a,c,h),c=!0;else if(n===null){var E=i.stateNode,U=i.memoizedProps;E.props=U;var H=E.context,re=a.contextType;typeof re=="object"&&re!==null?re=li(re):(re=jn(a)?$r:An.current,re=Is(i,re));var xe=a.getDerivedStateFromProps,ye=typeof xe=="function"||typeof E.getSnapshotBeforeUpdate=="function";ye||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==c||H!==re)&&Bp(i,E,c,re),yr=!1;var ge=i.memoizedState;E.state=ge,sl(i,c,E,h),H=i.memoizedState,U!==c||ge!==H||Bn.current||yr?(typeof xe=="function"&&(Eu(i,a,xe,c),H=i.memoizedState),(U=yr||Op(i,a,U,c,ge,H,re))?(ye||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=H),E.props=c,E.state=H,E.context=re,c=U):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,hp(n,i),U=i.memoizedProps,re=i.type===i.elementType?U:_i(i.type,U),E.props=re,ye=i.pendingProps,ge=E.context,H=a.contextType,typeof H=="object"&&H!==null?H=li(H):(H=jn(a)?$r:An.current,H=Is(i,H));var ze=a.getDerivedStateFromProps;(xe=typeof ze=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==ye||ge!==H)&&Bp(i,E,c,H),yr=!1,ge=i.memoizedState,E.state=ge,sl(i,c,E,h);var He=i.memoizedState;U!==ye||ge!==He||Bn.current||yr?(typeof ze=="function"&&(Eu(i,a,ze,c),He=i.memoizedState),(re=yr||Op(i,a,re,c,ge,He,H)||!1)?(xe||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,He,H),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,He,H)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||U===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=He),E.props=c,E.state=He,E.context=H,c=re):(typeof E.componentDidUpdate!="function"||U===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),c=!1)}return Ru(n,i,a,c,g,h)}function Ru(n,i,a,c,h,g){Kp(n,i);var E=(i.flags&128)!==0;if(!c&&!E)return h&&np(i,a,!1),Ki(n,i,g);c=i.stateNode,G0.current=i;var U=E&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&E?(i.child=Os(i,n.child,null,g),i.child=Os(i,null,U,g)):Un(n,i,U,g),i.memoizedState=c.state,h&&np(i,a,!0),i.child}function Qp(n){var i=n.stateNode;i.pendingContext?ep(n,i.pendingContext,i.pendingContext!==i.context):i.context&&ep(n,i.context,!1),du(n,i.containerInfo)}function Jp(n,i,a,c,h){return ks(),ru(h),i.flags|=256,Un(n,i,a,c),i.child}var Cu={dehydrated:null,treeContext:null,retryLane:0};function Nu(n){return{baseLanes:n,cachePool:null,transitions:null}}function em(n,i,a){var c=i.pendingProps,h=Zt.current,g=!1,E=(i.flags&128)!==0,U;if((U=E)||(U=n!==null&&n.memoizedState===null?!1:(h&2)!==0),U?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Wt(Zt,h&1),n===null)return iu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,n=c.fallback,g?(c=i.mode,g=i.child,E={mode:"hidden",children:E},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=E):g=Al(E,c,0,null),n=is(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Nu(a),i.memoizedState=Cu,n):Pu(i,E));if(h=n.memoizedState,h!==null&&(U=h.dehydrated,U!==null))return W0(n,i,E,c,U,h,a);if(g){g=c.fallback,E=i.mode,h=n.child,U=h.sibling;var H={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=H,i.deletions=null):(c=br(h,H),c.subtreeFlags=h.subtreeFlags&14680064),U!==null?g=br(U,g):(g=is(g,E,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,E=n.child.memoizedState,E=E===null?Nu(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=n.childLanes&~a,i.memoizedState=Cu,c}return g=n.child,n=g.sibling,c=br(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Pu(n,i){return i=Al({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function hl(n,i,a,c){return c!==null&&ru(c),Os(i,n.child,null,a),n=Pu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function W0(n,i,a,c,h,g,E){if(a)return i.flags&256?(i.flags&=-257,c=Tu(Error(t(422))),hl(n,i,E,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,h=i.mode,c=Al({mode:"visible",children:c.children},h,0,null),g=is(g,h,E,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&Os(i,n.child,null,E),i.child.memoizedState=Nu(E),i.memoizedState=Cu,g);if((i.mode&1)===0)return hl(n,i,E,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var U=c.dgst;return c=U,g=Error(t(419)),c=Tu(g,c,void 0),hl(n,i,E,c)}if(U=(E&n.childLanes)!==0,Vn||U){if(c=gn,c!==null){switch(E&-E){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|E))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,qi(n,h),Mi(c,n,h,-1))}return $u(),c=Tu(Error(t(421))),hl(n,i,E,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=r_.bind(null,n),h._reactRetry=i,null):(n=g.treeContext,Jn=gr(h.nextSibling),Qn=i,Kt=!0,xi=null,n!==null&&(ai[oi++]=Xi,ai[oi++]=$i,ai[oi++]=qr,Xi=n.id,$i=n.overflow,qr=i),i=Pu(i,c.children),i.flags|=4096,i)}function tm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),lu(n.return,i,a)}function Du(n,i,a,c,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=h)}function nm(n,i,a){var c=i.pendingProps,h=c.revealOrder,g=c.tail;if(Un(n,i,c.children,a),c=Zt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&tm(n,a,i);else if(n.tag===19)tm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Wt(Zt,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&al(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Du(i,!1,h,a,g);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&al(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Du(i,!0,a,null,g);break;case"together":Du(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function pl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ki(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Jr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=br(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=br(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function X0(n,i,a){switch(i.tag){case 3:Qp(i),ks();break;case 5:gp(i);break;case 1:jn(i.type)&&Ko(i);break;case 4:du(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;Wt(nl,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Wt(Zt,Zt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?em(n,i,a):(Wt(Zt,Zt.current&1),n=Ki(n,i,a),n!==null?n.sibling:null);Wt(Zt,Zt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return nm(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Wt(Zt,Zt.current),c)break;return null;case 22:case 23:return i.lanes=0,Yp(n,i,a)}return Ki(n,i,a)}var im,Lu,rm,sm;im=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Lu=function(){},rm=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,Zr(Pi.current);var g=null;switch(a){case"input":h=zt(n,h),c=zt(n,c),g=[];break;case"select":h=de({},h,{value:void 0}),c=de({},c,{value:void 0}),g=[];break;case"textarea":h=$t(n,h),c=$t(n,c),g=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=$o)}Ke(a,c);var E;a=null;for(re in h)if(!c.hasOwnProperty(re)&&h.hasOwnProperty(re)&&h[re]!=null)if(re==="style"){var U=h[re];for(E in U)U.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(o.hasOwnProperty(re)?g||(g=[]):(g=g||[]).push(re,null));for(re in c){var H=c[re];if(U=h?.[re],c.hasOwnProperty(re)&&H!==U&&(H!=null||U!=null))if(re==="style")if(U){for(E in U)!U.hasOwnProperty(E)||H&&H.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in H)H.hasOwnProperty(E)&&U[E]!==H[E]&&(a||(a={}),a[E]=H[E])}else a||(g||(g=[]),g.push(re,a)),a=H;else re==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,U=U?U.__html:void 0,H!=null&&U!==H&&(g=g||[]).push(re,H)):re==="children"?typeof H!="string"&&typeof H!="number"||(g=g||[]).push(re,""+H):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(o.hasOwnProperty(re)?(H!=null&&re==="onScroll"&&qt("scroll",n),g||U===H||(g=[])):(g=g||[]).push(re,H))}a&&(g=g||[]).push("style",a);var re=g;(i.updateQueue=re)&&(i.flags|=4)}},sm=function(n,i,a,c){a!==c&&(i.flags|=4)};function Za(n,i){if(!Kt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Rn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function $0(n,i,a){var c=i.pendingProps;switch(tu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rn(i),null;case 1:return jn(i.type)&&Yo(),Rn(i),null;case 3:return c=i.stateNode,js(),Yt(Bn),Yt(An),pu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(el(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,xi!==null&&(Gu(xi),xi=null))),Lu(n,i),Rn(i),null;case 5:fu(i);var h=Zr(Xa.current);if(a=i.type,n!==null&&i.stateNode!=null)rm(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Rn(i),null}if(n=Zr(Pi.current),el(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Ni]=i,c[ja]=g,n=(i.mode&1)!==0,a){case"dialog":qt("cancel",c),qt("close",c);break;case"iframe":case"object":case"embed":qt("load",c);break;case"video":case"audio":for(h=0;h<Oa.length;h++)qt(Oa[h],c);break;case"source":qt("error",c);break;case"img":case"image":case"link":qt("error",c),qt("load",c);break;case"details":qt("toggle",c);break;case"input":ht(c,g),qt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},qt("invalid",c);break;case"textarea":L(c,g),qt("invalid",c)}Ke(a,g),h=null;for(var E in g)if(g.hasOwnProperty(E)){var U=g[E];E==="children"?typeof U=="string"?c.textContent!==U&&(g.suppressHydrationWarning!==!0&&Xo(c.textContent,U,n),h=["children",U]):typeof U=="number"&&c.textContent!==""+U&&(g.suppressHydrationWarning!==!0&&Xo(c.textContent,U,n),h=["children",""+U]):o.hasOwnProperty(E)&&U!=null&&E==="onScroll"&&qt("scroll",c)}switch(a){case"input":lt(c),Vt(c,g,!0);break;case"textarea":lt(c),Q(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=$o)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pe(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=E.createElement(a,{is:c.is}):(n=E.createElement(a),a==="select"&&(E=n,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):n=E.createElementNS(n,a),n[Ni]=i,n[ja]=c,im(n,i,!1,!1),i.stateNode=n;e:{switch(E=Le(a,c),a){case"dialog":qt("cancel",n),qt("close",n),h=c;break;case"iframe":case"object":case"embed":qt("load",n),h=c;break;case"video":case"audio":for(h=0;h<Oa.length;h++)qt(Oa[h],n);h=c;break;case"source":qt("error",n),h=c;break;case"img":case"image":case"link":qt("error",n),qt("load",n),h=c;break;case"details":qt("toggle",n),h=c;break;case"input":ht(n,c),h=zt(n,c),qt("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=de({},c,{value:void 0}),qt("invalid",n);break;case"textarea":L(n,c),h=$t(n,c),qt("invalid",n);break;default:h=c}Ke(a,h),U=h;for(g in U)if(U.hasOwnProperty(g)){var H=U[g];g==="style"?Fe(n,H):g==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Qe(n,H)):g==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&be(n,H):typeof H=="number"&&be(n,""+H):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?H!=null&&g==="onScroll"&&qt("scroll",n):H!=null&&D(n,g,H,E))}switch(a){case"input":lt(n),Vt(n,c,!1);break;case"textarea":lt(n),Q(n);break;case"option":c.value!=null&&n.setAttribute("value",""+_e(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?Xt(n,!!c.multiple,g,!1):c.defaultValue!=null&&Xt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=$o)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Rn(i),null;case 6:if(n&&i.stateNode!=null)sm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Zr(Xa.current),Zr(Pi.current),el(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ni]=i,(g=c.nodeValue!==a)&&(n=Qn,n!==null))switch(n.tag){case 3:Xo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Xo(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ni]=i,i.stateNode=c}return Rn(i),null;case 13:if(Yt(Zt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Kt&&Jn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)lp(),ks(),i.flags|=98560,g=!1;else if(g=el(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Ni]=i}else ks(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Rn(i),g=!1}else xi!==null&&(Gu(xi),xi=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Zt.current&1)!==0?un===0&&(un=3):$u())),i.updateQueue!==null&&(i.flags|=4),Rn(i),null);case 4:return js(),Lu(n,i),n===null&&za(i.stateNode.containerInfo),Rn(i),null;case 10:return ou(i.type._context),Rn(i),null;case 17:return jn(i.type)&&Yo(),Rn(i),null;case 19:if(Yt(Zt),g=i.memoizedState,g===null)return Rn(i),null;if(c=(i.flags&128)!==0,E=g.rendering,E===null)if(c)Za(g,!1);else{if(un!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=al(n),E!==null){for(i.flags|=128,Za(g,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,n=E.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Wt(Zt,Zt.current&1|2),i.child}n=n.sibling}g.tail!==null&&X()>Ws&&(i.flags|=128,c=!0,Za(g,!1),i.lanes=4194304)}else{if(!c)if(n=al(E),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Za(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!Kt)return Rn(i),null}else 2*X()-g.renderingStartTime>Ws&&a!==1073741824&&(i.flags|=128,c=!0,Za(g,!1),i.lanes=4194304);g.isBackwards?(E.sibling=i.child,i.child=E):(a=g.last,a!==null?a.sibling=E:i.child=E,g.last=E)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=X(),i.sibling=null,a=Zt.current,Wt(Zt,c?a&1|2:a&1),i):(Rn(i),null);case 22:case 23:return Xu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ei&1073741824)!==0&&(Rn(i),i.subtreeFlags&6&&(i.flags|=8192)):Rn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function q0(n,i){switch(tu(i),i.tag){case 1:return jn(i.type)&&Yo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return js(),Yt(Bn),Yt(An),pu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return fu(i),null;case 13:if(Yt(Zt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ks()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Yt(Zt),null;case 4:return js(),null;case 10:return ou(i.type._context),null;case 22:case 23:return Xu(),null;case 24:return null;default:return null}}var ml=!1,Cn=!1,Y0=typeof WeakSet=="function"?WeakSet:Set,Be=null;function Hs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Jt(n,i,c)}else a.current=null}function Iu(n,i,a){try{a()}catch(c){Jt(n,i,c)}}var am=!1;function K0(n,i){if(Xc=Uo,n=Oh(),Oc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var E=0,U=-1,H=-1,re=0,xe=0,ye=n,ge=null;t:for(;;){for(var ze;ye!==a||h!==0&&ye.nodeType!==3||(U=E+h),ye!==g||c!==0&&ye.nodeType!==3||(H=E+c),ye.nodeType===3&&(E+=ye.nodeValue.length),(ze=ye.firstChild)!==null;)ge=ye,ye=ze;for(;;){if(ye===n)break t;if(ge===a&&++re===h&&(U=E),ge===g&&++xe===c&&(H=E),(ze=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=ze}a=U===-1||H===-1?null:{start:U,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for($c={focusedElem:n,selectionRange:a},Uo=!1,Be=i;Be!==null;)if(i=Be,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Be=n;else for(;Be!==null;){i=Be;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ye=He.memoizedProps,nn=He.memoizedState,Y=i.stateNode,W=Y.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:_i(i.type,Ye),nn);Y.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var J=i.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){Jt(i,i.return,Ae)}if(n=i.sibling,n!==null){n.return=i.return,Be=n;break}Be=i.return}return He=am,am=!1,He}function Qa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&Iu(i,a,g)}h=h.next}while(h!==c)}}function gl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Uu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function om(n){var i=n.alternate;i!==null&&(n.alternate=null,om(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ni],delete i[ja],delete i[Zc],delete i[D0],delete i[L0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function lm(n){return n.tag===5||n.tag===3||n.tag===4}function cm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||lm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Fu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=$o));else if(c!==4&&(n=n.child,n!==null))for(Fu(n,i,a),n=n.sibling;n!==null;)Fu(n,i,a),n=n.sibling}function ku(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(ku(n,i,a),n=n.sibling;n!==null;)ku(n,i,a),n=n.sibling}var yn=null,yi=!1;function Mr(n,i,a){for(a=a.child;a!==null;)um(n,i,a),a=a.sibling}function um(n,i,a){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(et,a)}catch{}switch(a.tag){case 5:Cn||Hs(a,i);case 6:var c=yn,h=yi;yn=null,Mr(n,i,a),yn=c,yi=h,yn!==null&&(yi?(n=yn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):yn.removeChild(a.stateNode));break;case 18:yn!==null&&(yi?(n=yn,a=a.stateNode,n.nodeType===8?Kc(n.parentNode,a):n.nodeType===1&&Kc(n,a),Na(n)):Kc(yn,a.stateNode));break;case 4:c=yn,h=yi,yn=a.stateNode.containerInfo,yi=!0,Mr(n,i,a),yn=c,yi=h;break;case 0:case 11:case 14:case 15:if(!Cn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var g=h,E=g.destroy;g=g.tag,E!==void 0&&((g&2)!==0||(g&4)!==0)&&Iu(a,i,E),h=h.next}while(h!==c)}Mr(n,i,a);break;case 1:if(!Cn&&(Hs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(U){Jt(a,i,U)}Mr(n,i,a);break;case 21:Mr(n,i,a);break;case 22:a.mode&1?(Cn=(c=Cn)||a.memoizedState!==null,Mr(n,i,a),Cn=c):Mr(n,i,a);break;default:Mr(n,i,a)}}function dm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Y0),i.forEach(function(c){var h=s_.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function Si(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var g=n,E=i,U=E;e:for(;U!==null;){switch(U.tag){case 5:yn=U.stateNode,yi=!1;break e;case 3:yn=U.stateNode.containerInfo,yi=!0;break e;case 4:yn=U.stateNode.containerInfo,yi=!0;break e}U=U.return}if(yn===null)throw Error(t(160));um(g,E,h),yn=null,yi=!1;var H=h.alternate;H!==null&&(H.return=null),h.return=null}catch(re){Jt(h,i,re)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)fm(i,n),i=i.sibling}function fm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Si(i,n),Li(n),c&4){try{Qa(3,n,n.return),gl(3,n)}catch(Ye){Jt(n,n.return,Ye)}try{Qa(5,n,n.return)}catch(Ye){Jt(n,n.return,Ye)}}break;case 1:Si(i,n),Li(n),c&512&&a!==null&&Hs(a,a.return);break;case 5:if(Si(i,n),Li(n),c&512&&a!==null&&Hs(a,a.return),n.flags&32){var h=n.stateNode;try{be(h,"")}catch(Ye){Jt(n,n.return,Ye)}}if(c&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,E=a!==null?a.memoizedProps:g,U=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{U==="input"&&g.type==="radio"&&g.name!=null&&st(h,g),Le(U,E);var re=Le(U,g);for(E=0;E<H.length;E+=2){var xe=H[E],ye=H[E+1];xe==="style"?Fe(h,ye):xe==="dangerouslySetInnerHTML"?Qe(h,ye):xe==="children"?be(h,ye):D(h,xe,ye,re)}switch(U){case"input":Xe(h,g);break;case"textarea":A(h,g);break;case"select":var ge=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var ze=g.value;ze!=null?Xt(h,!!g.multiple,ze,!1):ge!==!!g.multiple&&(g.defaultValue!=null?Xt(h,!!g.multiple,g.defaultValue,!0):Xt(h,!!g.multiple,g.multiple?[]:"",!1))}h[ja]=g}catch(Ye){Jt(n,n.return,Ye)}}break;case 6:if(Si(i,n),Li(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(Ye){Jt(n,n.return,Ye)}}break;case 3:if(Si(i,n),Li(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Na(i.containerInfo)}catch(Ye){Jt(n,n.return,Ye)}break;case 4:Si(i,n),Li(n);break;case 13:Si(i,n),Li(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(Bu=X())),c&4&&dm(n);break;case 22:if(xe=a!==null&&a.memoizedState!==null,n.mode&1?(Cn=(re=Cn)||xe,Si(i,n),Cn=re):Si(i,n),Li(n),c&8192){if(re=n.memoizedState!==null,(n.stateNode.isHidden=re)&&!xe&&(n.mode&1)!==0)for(Be=n,xe=n.child;xe!==null;){for(ye=Be=xe;Be!==null;){switch(ge=Be,ze=ge.child,ge.tag){case 0:case 11:case 14:case 15:Qa(4,ge,ge.return);break;case 1:Hs(ge,ge.return);var He=ge.stateNode;if(typeof He.componentWillUnmount=="function"){c=ge,a=ge.return;try{i=c,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(Ye){Jt(c,a,Ye)}}break;case 5:Hs(ge,ge.return);break;case 22:if(ge.memoizedState!==null){mm(ye);continue}}ze!==null?(ze.return=ge,Be=ze):mm(ye)}xe=xe.sibling}e:for(xe=null,ye=n;;){if(ye.tag===5){if(xe===null){xe=ye;try{h=ye.stateNode,re?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(U=ye.stateNode,H=ye.memoizedProps.style,E=H!=null&&H.hasOwnProperty("display")?H.display:null,U.style.display=we("display",E))}catch(Ye){Jt(n,n.return,Ye)}}}else if(ye.tag===6){if(xe===null)try{ye.stateNode.nodeValue=re?"":ye.memoizedProps}catch(Ye){Jt(n,n.return,Ye)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;xe===ye&&(xe=null),ye=ye.return}xe===ye&&(xe=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:Si(i,n),Li(n),c&4&&dm(n);break;case 21:break;default:Si(i,n),Li(n)}}function Li(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(lm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(be(h,""),c.flags&=-33);var g=cm(n);ku(n,g,h);break;case 3:case 4:var E=c.stateNode.containerInfo,U=cm(n);Fu(n,U,E);break;default:throw Error(t(161))}}catch(H){Jt(n,n.return,H)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Z0(n,i,a){Be=n,hm(n)}function hm(n,i,a){for(var c=(n.mode&1)!==0;Be!==null;){var h=Be,g=h.child;if(h.tag===22&&c){var E=h.memoizedState!==null||ml;if(!E){var U=h.alternate,H=U!==null&&U.memoizedState!==null||Cn;U=ml;var re=Cn;if(ml=E,(Cn=H)&&!re)for(Be=h;Be!==null;)E=Be,H=E.child,E.tag===22&&E.memoizedState!==null?gm(h):H!==null?(H.return=E,Be=H):gm(h);for(;g!==null;)Be=g,hm(g),g=g.sibling;Be=h,ml=U,Cn=re}pm(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,Be=g):pm(n)}}function pm(n){for(;Be!==null;){var i=Be;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Cn||gl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Cn)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:_i(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&mp(i,g,c);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}mp(i,E,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var re=i.alternate;if(re!==null){var xe=re.memoizedState;if(xe!==null){var ye=xe.dehydrated;ye!==null&&Na(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Cn||i.flags&512&&Uu(i)}catch(ge){Jt(i,i.return,ge)}}if(i===n){Be=null;break}if(a=i.sibling,a!==null){a.return=i.return,Be=a;break}Be=i.return}}function mm(n){for(;Be!==null;){var i=Be;if(i===n){Be=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Be=a;break}Be=i.return}}function gm(n){for(;Be!==null;){var i=Be;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{gl(4,i)}catch(H){Jt(i,a,H)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(H){Jt(i,h,H)}}var g=i.return;try{Uu(i)}catch(H){Jt(i,g,H)}break;case 5:var E=i.return;try{Uu(i)}catch(H){Jt(i,E,H)}}}catch(H){Jt(i,i.return,H)}if(i===n){Be=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Be=U;break}Be=i.return}}var Q0=Math.ceil,vl=R.ReactCurrentDispatcher,Ou=R.ReactCurrentOwner,ui=R.ReactCurrentBatchConfig,Dt=0,gn=null,an=null,Sn=0,ei=0,Gs=vr(0),un=0,Ja=null,Jr=0,xl=0,zu=0,eo=null,Hn=null,Bu=0,Ws=1/0,Zi=null,_l=!1,ju=null,Er=null,yl=!1,wr=null,Sl=0,to=0,Vu=null,Ml=-1,El=0;function Fn(){return(Dt&6)!==0?X():Ml!==-1?Ml:Ml=X()}function Tr(n){return(n.mode&1)===0?1:(Dt&2)!==0&&Sn!==0?Sn&-Sn:U0.transition!==null?(El===0&&(El=In()),El):(n=St,n!==0||(n=window.event,n=n===void 0?16:xh(n.type)),n)}function Mi(n,i,a,c){if(50<to)throw to=0,Vu=null,Error(t(185));tn(n,a,c),((Dt&2)===0||n!==gn)&&(n===gn&&((Dt&2)===0&&(xl|=a),un===4&&Ar(n,Sn)),Gn(n,c),a===1&&Dt===0&&(i.mode&1)===0&&(Ws=X()+500,Zo&&_r()))}function Gn(n,i){var a=n.callbackNode;Gr(n,i);var c=gi(n,n===gn?Sn:0);if(c===0)a!==null&&q(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&q(a),i===1)n.tag===0?I0(xm.bind(null,n)):ip(xm.bind(null,n)),N0(function(){(Dt&6)===0&&_r()}),a=null;else{switch(uh(c)){case 1:a=Ie;break;case 4:a=Ve;break;case 16:a=Oe;break;case 536870912:a=ot;break;default:a=Oe}a=Am(a,vm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function vm(n,i){if(Ml=-1,El=0,(Dt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Xs()&&n.callbackNode!==a)return null;var c=gi(n,n===gn?Sn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=wl(n,c);else{i=c;var h=Dt;Dt|=2;var g=ym();(gn!==n||Sn!==i)&&(Zi=null,Ws=X()+500,ts(n,i));do try{t_();break}catch(U){_m(n,U)}while(!0);au(),vl.current=g,Dt=h,an!==null?i=0:(gn=null,Sn=0,i=un)}if(i!==0){if(i===2&&(h=Gt(n),h!==0&&(c=h,i=Hu(n,h))),i===1)throw a=Ja,ts(n,0),Ar(n,c),Gn(n,X()),a;if(i===6)Ar(n,c);else{if(h=n.current.alternate,(c&30)===0&&!J0(h)&&(i=wl(n,c),i===2&&(g=Gt(n),g!==0&&(c=g,i=Hu(n,g))),i===1))throw a=Ja,ts(n,0),Ar(n,c),Gn(n,X()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ns(n,Hn,Zi);break;case 3:if(Ar(n,c),(c&130023424)===c&&(i=Bu+500-X(),10<i)){if(gi(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){Fn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Yc(ns.bind(null,n,Hn,Zi),i);break}ns(n,Hn,Zi);break;case 4:if(Ar(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var E=31-Nt(c);g=1<<E,E=i[E],E>h&&(h=E),c&=~g}if(c=h,c=X()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Q0(c/1960))-c,10<c){n.timeoutHandle=Yc(ns.bind(null,n,Hn,Zi),c);break}ns(n,Hn,Zi);break;case 5:ns(n,Hn,Zi);break;default:throw Error(t(329))}}}return Gn(n,X()),n.callbackNode===a?vm.bind(null,n):null}function Hu(n,i){var a=eo;return n.current.memoizedState.isDehydrated&&(ts(n,i).flags|=256),n=wl(n,i),n!==2&&(i=Hn,Hn=a,i!==null&&Gu(i)),n}function Gu(n){Hn===null?Hn=n:Hn.push.apply(Hn,n)}function J0(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],g=h.getSnapshot;h=h.value;try{if(!vi(g(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ar(n,i){for(i&=~zu,i&=~xl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Nt(i),c=1<<a;n[a]=-1,i&=~c}}function xm(n){if((Dt&6)!==0)throw Error(t(327));Xs();var i=gi(n,0);if((i&1)===0)return Gn(n,X()),null;var a=wl(n,i);if(n.tag!==0&&a===2){var c=Gt(n);c!==0&&(i=c,a=Hu(n,c))}if(a===1)throw a=Ja,ts(n,0),Ar(n,i),Gn(n,X()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ns(n,Hn,Zi),Gn(n,X()),null}function Wu(n,i){var a=Dt;Dt|=1;try{return n(i)}finally{Dt=a,Dt===0&&(Ws=X()+500,Zo&&_r())}}function es(n){wr!==null&&wr.tag===0&&(Dt&6)===0&&Xs();var i=Dt;Dt|=1;var a=ui.transition,c=St;try{if(ui.transition=null,St=1,n)return n()}finally{St=c,ui.transition=a,Dt=i,(Dt&6)===0&&_r()}}function Xu(){ei=Gs.current,Yt(Gs)}function ts(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,C0(a)),an!==null)for(a=an.return;a!==null;){var c=a;switch(tu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Yo();break;case 3:js(),Yt(Bn),Yt(An),pu();break;case 5:fu(c);break;case 4:js();break;case 13:Yt(Zt);break;case 19:Yt(Zt);break;case 10:ou(c.type._context);break;case 22:case 23:Xu()}a=a.return}if(gn=n,an=n=br(n.current,null),Sn=ei=i,un=0,Ja=null,zu=xl=Jr=0,Hn=eo=null,Kr!==null){for(i=0;i<Kr.length;i++)if(a=Kr[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,g=a.pending;if(g!==null){var E=g.next;g.next=h,c.next=E}a.pending=c}Kr=null}return n}function _m(n,i){do{var a=an;try{if(au(),ol.current=dl,ll){for(var c=Qt.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}ll=!1}if(Qr=0,mn=cn=Qt=null,$a=!1,qa=0,Ou.current=null,a===null||a.return===null){un=1,Ja=i,an=null;break}e:{var g=n,E=a.return,U=a,H=i;if(i=Sn,U.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var re=H,xe=U,ye=xe.tag;if((xe.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=xe.alternate;ge?(xe.updateQueue=ge.updateQueue,xe.memoizedState=ge.memoizedState,xe.lanes=ge.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var ze=Gp(E);if(ze!==null){ze.flags&=-257,Wp(ze,E,U,g,i),ze.mode&1&&Hp(g,re,i),i=ze,H=re;var He=i.updateQueue;if(He===null){var Ye=new Set;Ye.add(H),i.updateQueue=Ye}else He.add(H);break e}else{if((i&1)===0){Hp(g,re,i),$u();break e}H=Error(t(426))}}else if(Kt&&U.mode&1){var nn=Gp(E);if(nn!==null){(nn.flags&65536)===0&&(nn.flags|=256),Wp(nn,E,U,g,i),ru(Vs(H,U));break e}}g=H=Vs(H,U),un!==4&&(un=2),eo===null?eo=[g]:eo.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var Y=jp(g,H,i);pp(g,Y);break e;case 1:U=H;var W=g.type,J=g.stateNode;if((g.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(Er===null||!Er.has(J)))){g.flags|=65536,i&=-i,g.lanes|=i;var Ae=Vp(g,U,i);pp(g,Ae);break e}}g=g.return}while(g!==null)}Mm(a)}catch(Ze){i=Ze,an===a&&a!==null&&(an=a=a.return);continue}break}while(!0)}function ym(){var n=vl.current;return vl.current=dl,n===null?dl:n}function $u(){(un===0||un===3||un===2)&&(un=4),gn===null||(Jr&268435455)===0&&(xl&268435455)===0||Ar(gn,Sn)}function wl(n,i){var a=Dt;Dt|=2;var c=ym();(gn!==n||Sn!==i)&&(Zi=null,ts(n,i));do try{e_();break}catch(h){_m(n,h)}while(!0);if(au(),Dt=a,vl.current=c,an!==null)throw Error(t(261));return gn=null,Sn=0,un}function e_(){for(;an!==null;)Sm(an)}function t_(){for(;an!==null&&!oe();)Sm(an)}function Sm(n){var i=Tm(n.alternate,n,ei);n.memoizedProps=n.pendingProps,i===null?Mm(n):an=i,Ou.current=null}function Mm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=$0(a,i,ei),a!==null){an=a;return}}else{if(a=q0(a,i),a!==null){a.flags&=32767,an=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{un=6,an=null;return}}if(i=i.sibling,i!==null){an=i;return}an=i=n}while(i!==null);un===0&&(un=5)}function ns(n,i,a){var c=St,h=ui.transition;try{ui.transition=null,St=1,n_(n,i,a,c)}finally{ui.transition=h,St=c}return null}function n_(n,i,a,c){do Xs();while(wr!==null);if((Dt&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(Tn(n,g),n===gn&&(an=gn=null,Sn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||yl||(yl=!0,Am(Oe,function(){return Xs(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=ui.transition,ui.transition=null;var E=St;St=1;var U=Dt;Dt|=4,Ou.current=null,K0(n,a),fm(a,n),M0($c),Uo=!!Xc,$c=Xc=null,n.current=a,Z0(a),ue(),Dt=U,St=E,ui.transition=g}else n.current=a;if(yl&&(yl=!1,wr=n,Sl=h),g=n.pendingLanes,g===0&&(Er=null),Ut(a.stateNode),Gn(n,X()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(_l)throw _l=!1,n=ju,ju=null,n;return(Sl&1)!==0&&n.tag!==0&&Xs(),g=n.pendingLanes,(g&1)!==0?n===Vu?to++:(to=0,Vu=n):to=0,_r(),null}function Xs(){if(wr!==null){var n=uh(Sl),i=ui.transition,a=St;try{if(ui.transition=null,St=16>n?16:n,wr===null)var c=!1;else{if(n=wr,wr=null,Sl=0,(Dt&6)!==0)throw Error(t(331));var h=Dt;for(Dt|=4,Be=n.current;Be!==null;){var g=Be,E=g.child;if((Be.flags&16)!==0){var U=g.deletions;if(U!==null){for(var H=0;H<U.length;H++){var re=U[H];for(Be=re;Be!==null;){var xe=Be;switch(xe.tag){case 0:case 11:case 15:Qa(8,xe,g)}var ye=xe.child;if(ye!==null)ye.return=xe,Be=ye;else for(;Be!==null;){xe=Be;var ge=xe.sibling,ze=xe.return;if(om(xe),xe===re){Be=null;break}if(ge!==null){ge.return=ze,Be=ge;break}Be=ze}}}var He=g.alternate;if(He!==null){var Ye=He.child;if(Ye!==null){He.child=null;do{var nn=Ye.sibling;Ye.sibling=null,Ye=nn}while(Ye!==null)}}Be=g}}if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,Be=E;else e:for(;Be!==null;){if(g=Be,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Qa(9,g,g.return)}var Y=g.sibling;if(Y!==null){Y.return=g.return,Be=Y;break e}Be=g.return}}var W=n.current;for(Be=W;Be!==null;){E=Be;var J=E.child;if((E.subtreeFlags&2064)!==0&&J!==null)J.return=E,Be=J;else e:for(E=W;Be!==null;){if(U=Be,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:gl(9,U)}}catch(Ze){Jt(U,U.return,Ze)}if(U===E){Be=null;break e}var Ae=U.sibling;if(Ae!==null){Ae.return=U.return,Be=Ae;break e}Be=U.return}}if(Dt=h,_r(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(et,n)}catch{}c=!0}return c}finally{St=a,ui.transition=i}}return!1}function Em(n,i,a){i=Vs(a,i),i=jp(n,i,1),n=Sr(n,i,1),i=Fn(),n!==null&&(tn(n,1,i),Gn(n,i))}function Jt(n,i,a){if(n.tag===3)Em(n,n,a);else for(;i!==null;){if(i.tag===3){Em(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Er===null||!Er.has(c))){n=Vs(a,n),n=Vp(i,n,1),i=Sr(i,n,1),n=Fn(),i!==null&&(tn(i,1,n),Gn(i,n));break}}i=i.return}}function i_(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Fn(),n.pingedLanes|=n.suspendedLanes&a,gn===n&&(Sn&a)===a&&(un===4||un===3&&(Sn&130023424)===Sn&&500>X()-Bu?ts(n,0):zu|=a),Gn(n,i)}function wm(n,i){i===0&&((n.mode&1)===0?i=1:(i=yt,yt<<=1,(yt&130023424)===0&&(yt=4194304)));var a=Fn();n=qi(n,i),n!==null&&(tn(n,i,a),Gn(n,a))}function r_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),wm(n,a)}function s_(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),wm(n,a)}var Tm;Tm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Bn.current)Vn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Vn=!1,X0(n,i,a);Vn=(n.flags&131072)!==0}else Vn=!1,Kt&&(i.flags&1048576)!==0&&rp(i,Jo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;pl(n,i),n=i.pendingProps;var h=Is(i,An.current);Bs(i,a),h=vu(null,i,c,n,h,a);var g=xu();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,jn(c)?(g=!0,Ko(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,uu(i),h.updater=fl,i.stateNode=h,h._reactInternals=i,wu(i,c,n,a),i=Ru(null,i,c,!0,g,a)):(i.tag=0,Kt&&g&&eu(i),Un(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(pl(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=o_(c),n=_i(c,n),h){case 0:i=bu(null,i,c,n,a);break e;case 1:i=Zp(null,i,c,n,a);break e;case 11:i=Xp(null,i,c,n,a);break e;case 14:i=$p(null,i,c,_i(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:_i(c,h),bu(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:_i(c,h),Zp(n,i,c,h,a);case 3:e:{if(Qp(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,h=g.element,hp(n,i),sl(i,c,null,a);var E=i.memoizedState;if(c=E.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=Vs(Error(t(423)),i),i=Jp(n,i,c,a,h);break e}else if(c!==h){h=Vs(Error(t(424)),i),i=Jp(n,i,c,a,h);break e}else for(Jn=gr(i.stateNode.containerInfo.firstChild),Qn=i,Kt=!0,xi=null,a=dp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ks(),c===h){i=Ki(n,i,a);break e}Un(n,i,c,a)}i=i.child}return i;case 5:return gp(i),n===null&&iu(i),c=i.type,h=i.pendingProps,g=n!==null?n.memoizedProps:null,E=h.children,qc(c,h)?E=null:g!==null&&qc(c,g)&&(i.flags|=32),Kp(n,i),Un(n,i,E,a),i.child;case 6:return n===null&&iu(i),null;case 13:return em(n,i,a);case 4:return du(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Os(i,null,c,a):Un(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:_i(c,h),Xp(n,i,c,h,a);case 7:return Un(n,i,i.pendingProps,a),i.child;case 8:return Un(n,i,i.pendingProps.children,a),i.child;case 12:return Un(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,g=i.memoizedProps,E=h.value,Wt(nl,c._currentValue),c._currentValue=E,g!==null)if(vi(g.value,E)){if(g.children===h.children&&!Bn.current){i=Ki(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var U=g.dependencies;if(U!==null){E=g.child;for(var H=U.firstContext;H!==null;){if(H.context===c){if(g.tag===1){H=Yi(-1,a&-a),H.tag=2;var re=g.updateQueue;if(re!==null){re=re.shared;var xe=re.pending;xe===null?H.next=H:(H.next=xe.next,xe.next=H),re.pending=H}}g.lanes|=a,H=g.alternate,H!==null&&(H.lanes|=a),lu(g.return,a,i),U.lanes|=a;break}H=H.next}}else if(g.tag===10)E=g.type===i.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(t(341));E.lanes|=a,U=E.alternate,U!==null&&(U.lanes|=a),lu(E,a,i),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===i){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}Un(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,Bs(i,a),h=li(h),c=c(h),i.flags|=1,Un(n,i,c,a),i.child;case 14:return c=i.type,h=_i(c,i.pendingProps),h=_i(c.type,h),$p(n,i,c,h,a);case 15:return qp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:_i(c,h),pl(n,i),i.tag=1,jn(c)?(n=!0,Ko(i)):n=!1,Bs(i,a),zp(i,c,h),wu(i,c,h,a),Ru(null,i,c,!0,n,a);case 19:return nm(n,i,a);case 22:return Yp(n,i,a)}throw Error(t(156,i.tag))};function Am(n,i){return b(n,i)}function a_(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(n,i,a,c){return new a_(n,i,a,c)}function qu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function o_(n){if(typeof n=="function")return qu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$)return 11;if(n===ce)return 14}return 2}function br(n,i){var a=n.alternate;return a===null?(a=di(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Tl(n,i,a,c,h,g){var E=2;if(c=n,typeof n=="function")qu(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case k:return is(a.children,h,g,i);case z:E=8,h|=8;break;case N:return n=di(12,a,i,h|2),n.elementType=N,n.lanes=g,n;case te:return n=di(13,a,i,h),n.elementType=te,n.lanes=g,n;case Z:return n=di(19,a,i,h),n.elementType=Z,n.lanes=g,n;case fe:return Al(a,h,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:E=10;break e;case V:E=9;break e;case $:E=11;break e;case ce:E=14;break e;case K:E=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=di(E,a,i,h),i.elementType=n,i.type=c,i.lanes=g,i}function is(n,i,a,c){return n=di(7,n,c,i),n.lanes=a,n}function Al(n,i,a,c){return n=di(22,n,c,i),n.elementType=fe,n.lanes=a,n.stateNode={isHidden:!1},n}function Yu(n,i,a){return n=di(6,n,null,i),n.lanes=a,n}function Ku(n,i,a){return i=di(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function l_(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wn(0),this.expirationTimes=wn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wn(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Zu(n,i,a,c,h,g,E,U,H){return n=new l_(n,i,a,U,H),i===1?(i=1,g===!0&&(i|=8)):i=0,g=di(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},uu(g),n}function c_(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function bm(n){if(!n)return xr;n=n._reactInternals;e:{if(Hi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(jn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(jn(a))return tp(n,a,i)}return i}function Rm(n,i,a,c,h,g,E,U,H){return n=Zu(a,c,!0,n,h,g,E,U,H),n.context=bm(null),a=n.current,c=Fn(),h=Tr(a),g=Yi(c,h),g.callback=i??null,Sr(a,g,h),n.current.lanes=h,tn(n,h,c),Gn(n,c),n}function bl(n,i,a,c){var h=i.current,g=Fn(),E=Tr(h);return a=bm(a),i.context===null?i.context=a:i.pendingContext=a,i=Yi(g,E),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Sr(h,i,E),n!==null&&(Mi(n,h,E,g),rl(n,h,E)),E}function Rl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Cm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Qu(n,i){Cm(n,i),(n=n.alternate)&&Cm(n,i)}function u_(){return null}var Nm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ju(n){this._internalRoot=n}Cl.prototype.render=Ju.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));bl(n,i,null,null)},Cl.prototype.unmount=Ju.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;es(function(){bl(null,n,null,null)}),i[Gi]=null}};function Cl(n){this._internalRoot=n}Cl.prototype.unstable_scheduleHydration=function(n){if(n){var i=hh();n={blockedOn:null,target:n,priority:i};for(var a=0;a<hr.length&&i!==0&&i<hr[a].priority;a++);hr.splice(a,0,n),a===0&&gh(n)}};function ed(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Nl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Pm(){}function d_(n,i,a,c,h){if(h){if(typeof c=="function"){var g=c;c=function(){var re=Rl(E);g.call(re)}}var E=Rm(i,c,n,0,null,!1,!1,"",Pm);return n._reactRootContainer=E,n[Gi]=E.current,za(n.nodeType===8?n.parentNode:n),es(),E}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var U=c;c=function(){var re=Rl(H);U.call(re)}}var H=Zu(n,0,!1,null,null,!1,!1,"",Pm);return n._reactRootContainer=H,n[Gi]=H.current,za(n.nodeType===8?n.parentNode:n),es(function(){bl(i,H,a,c)}),H}function Pl(n,i,a,c,h){var g=a._reactRootContainer;if(g){var E=g;if(typeof h=="function"){var U=h;h=function(){var H=Rl(E);U.call(H)}}bl(i,E,n,h)}else E=d_(a,i,n,h,c);return Rl(E)}dh=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=ln(i.pendingLanes);a!==0&&(Wr(i,a|1),Gn(i,X()),(Dt&6)===0&&(Ws=X()+500,_r()))}break;case 13:es(function(){var c=qi(n,1);if(c!==null){var h=Fn();Mi(c,n,1,h)}}),Qu(n,1)}},Tc=function(n){if(n.tag===13){var i=qi(n,134217728);if(i!==null){var a=Fn();Mi(i,n,134217728,a)}Qu(n,134217728)}},fh=function(n){if(n.tag===13){var i=Tr(n),a=qi(n,i);if(a!==null){var c=Fn();Mi(a,n,i,c)}Qu(n,i)}},hh=function(){return St},ph=function(n,i){var a=St;try{return St=n,i()}finally{St=a}},Me=function(n,i,a){switch(i){case"input":if(Xe(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=qo(c);if(!h)throw Error(t(90));Ft(c),Xe(c,h)}}}break;case"textarea":A(n,a);break;case"select":i=a.value,i!=null&&Xt(n,!!a.multiple,i,!1)}},ft=Wu,kt=es;var f_={usingClientEntryPoint:!1,Events:[Va,Ds,qo,me,qe,Wu]},no={findFiberByHostInstance:Xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},h_={bundleType:no.bundleType,version:no.version,rendererPackageName:no.rendererPackageName,rendererConfig:no.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Po(n),n===null?null:n.stateNode},findFiberByHostInstance:no.findFiberByHostInstance||u_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dl.isDisabled&&Dl.supportsFiber)try{et=Dl.inject(h_),ct=Dl}catch{}}return Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f_,Wn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ed(i))throw Error(t(200));return c_(n,i,null,a)},Wn.createRoot=function(n,i){if(!ed(n))throw Error(t(299));var a=!1,c="",h=Nm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=Zu(n,1,!1,null,null,a,!1,c,h),n[Gi]=i.current,za(n.nodeType===8?n.parentNode:n),new Ju(i)},Wn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Po(i),n=n===null?null:n.stateNode,n},Wn.flushSync=function(n){return es(n)},Wn.hydrate=function(n,i,a){if(!Nl(i))throw Error(t(200));return Pl(null,n,i,!0,a)},Wn.hydrateRoot=function(n,i,a){if(!ed(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,g="",E=Nm;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=Rm(i,null,n,1,a??null,h,!1,g,E),n[Gi]=i.current,za(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new Cl(i)},Wn.render=function(n,i,a){if(!Nl(i))throw Error(t(200));return Pl(null,n,i,!1,a)},Wn.unmountComponentAtNode=function(n){if(!Nl(n))throw Error(t(40));return n._reactRootContainer?(es(function(){Pl(null,null,n,!1,function(){n._reactRootContainer=null,n[Gi]=null})}),!0):!1},Wn.unstable_batchedUpdates=Wu,Wn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Nl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Pl(n,i,a,!1,c)},Wn.version="18.3.1-next-f1338f8080-20240426",Wn}var zm;function ev(){if(zm)return id.exports;zm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),id.exports=M_(),id.exports}var Bm;function E_(){if(Bm)return Ll;Bm=1;var r=ev();return Ll.createRoot=r.createRoot,Ll.hydrateRoot=r.hydrateRoot,Ll}var w_=E_(),le=Bf();const sr=g_(le),tv=m_({__proto__:null,default:sr},[le]);function zn(r,e,{checkForDefaultPrevented:t=!0}={}){return function(o){if(r?.(o),t===!1||!o.defaultPrevented)return e?.(o)}}function So(r,e=[]){let t=[];function s(l,d){const f=le.createContext(d),p=t.length;t=[...t,d];const m=x=>{const{scope:y,children:M,...w}=x,T=y?.[r]?.[p]||f,S=le.useMemo(()=>w,Object.values(w));return u.jsx(T.Provider,{value:S,children:M})};m.displayName=l+"Provider";function v(x,y){const M=y?.[r]?.[p]||f,w=le.useContext(M);if(w)return w;if(d!==void 0)return d;throw new Error(`\`${x}\` must be used within \`${l}\``)}return[m,v]}const o=()=>{const l=t.map(d=>le.createContext(d));return function(f){const p=f?.[r]||l;return le.useMemo(()=>({[`__scope${r}`]:{...f,[r]:p}}),[f,p])}};return o.scopeName=r,[s,T_(o,...e)]}function T_(...r){const e=r[0];if(r.length===1)return e;const t=()=>{const s=r.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(l){const d=s.reduce((f,{useScope:p,scopeName:m})=>{const x=p(l)[`__scope${m}`];return{...f,...x}},{});return le.useMemo(()=>({[`__scope${e.scopeName}`]:d}),[d])}};return t.scopeName=e.scopeName,t}function jm(r,e){if(typeof r=="function")return r(e);r!=null&&(r.current=e)}function nv(...r){return e=>{let t=!1;const s=r.map(o=>{const l=jm(o,e);return!t&&typeof l=="function"&&(t=!0),l});if(t)return()=>{for(let o=0;o<s.length;o++){const l=s[o];typeof l=="function"?l():jm(r[o],null)}}}}function Bi(...r){return le.useCallback(nv(...r),r)}function dc(r){const e=A_(r),t=le.forwardRef((s,o)=>{const{children:l,...d}=s,f=le.Children.toArray(l),p=f.find(R_);if(p){const m=p.props.children,v=f.map(x=>x===p?le.Children.count(m)>1?le.Children.only(null):le.isValidElement(m)?m.props.children:null:x);return u.jsx(e,{...d,ref:o,children:le.isValidElement(m)?le.cloneElement(m,void 0,v):null})}return u.jsx(e,{...d,ref:o,children:l})});return t.displayName=`${r}.Slot`,t}var iv=dc("Slot");function A_(r){const e=le.forwardRef((t,s)=>{const{children:o,...l}=t;if(le.isValidElement(o)){const d=N_(o),f=C_(l,o.props);return o.type!==le.Fragment&&(f.ref=s?nv(s,d):d),le.cloneElement(o,f)}return le.Children.count(o)>1?le.Children.only(null):null});return e.displayName=`${r}.SlotClone`,e}var b_=Symbol("radix.slottable");function R_(r){return le.isValidElement(r)&&typeof r.type=="function"&&"__radixId"in r.type&&r.type.__radixId===b_}function C_(r,e){const t={...e};for(const s in e){const o=r[s],l=e[s];/^on[A-Z]/.test(s)?o&&l?t[s]=(...f)=>{const p=l(...f);return o(...f),p}:o&&(t[s]=o):s==="style"?t[s]={...o,...l}:s==="className"&&(t[s]=[o,l].filter(Boolean).join(" "))}return{...r,...t}}function N_(r){let e=Object.getOwnPropertyDescriptor(r.props,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?r.ref:(e=Object.getOwnPropertyDescriptor(r,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?r.props.ref:r.props.ref||r.ref)}function rv(r){const e=r+"CollectionProvider",[t,s]=So(e),[o,l]=t(e,{collectionRef:{current:null},itemMap:new Map}),d=T=>{const{scope:S,children:_}=T,F=sr.useRef(null),D=sr.useRef(new Map).current;return u.jsx(o,{scope:S,itemMap:D,collectionRef:F,children:_})};d.displayName=e;const f=r+"CollectionSlot",p=dc(f),m=sr.forwardRef((T,S)=>{const{scope:_,children:F}=T,D=l(f,_),R=Bi(S,D.collectionRef);return u.jsx(p,{ref:R,children:F})});m.displayName=f;const v=r+"CollectionItemSlot",x="data-radix-collection-item",y=dc(v),M=sr.forwardRef((T,S)=>{const{scope:_,children:F,...D}=T,R=sr.useRef(null),j=Bi(S,R),P=l(v,_);return sr.useEffect(()=>(P.itemMap.set(R,{ref:R,...D}),()=>void P.itemMap.delete(R))),u.jsx(y,{[x]:"",ref:j,children:F})});M.displayName=v;function w(T){const S=l(r+"CollectionConsumer",T);return sr.useCallback(()=>{const F=S.collectionRef.current;if(!F)return[];const D=Array.from(F.querySelectorAll(`[${x}]`));return Array.from(S.itemMap.values()).sort((P,k)=>D.indexOf(P.ref.current)-D.indexOf(k.ref.current))},[S.collectionRef,S.itemMap])}return[{Provider:d,Slot:m,ItemSlot:M},w,s]}var fo=globalThis?.document?le.useLayoutEffect:()=>{},P_=tv[" useId ".trim().toString()]||(()=>{}),D_=0;function sv(r){const[e,t]=le.useState(P_());return fo(()=>{t(s=>s??String(D_++))},[r]),r||(e?`radix-${e}`:"")}ev();var L_=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Yn=L_.reduce((r,e)=>{const t=dc(`Primitive.${e}`),s=le.forwardRef((o,l)=>{const{asChild:d,...f}=o,p=d?t:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),u.jsx(p,{...f,ref:l})});return s.displayName=`Primitive.${e}`,{...r,[e]:s}},{});function I_(r){const e=le.useRef(r);return le.useEffect(()=>{e.current=r}),le.useMemo(()=>(...t)=>e.current?.(...t),[])}var U_=tv[" useInsertionEffect ".trim().toString()]||fo;function jf({prop:r,defaultProp:e,onChange:t=()=>{},caller:s}){const[o,l,d]=F_({defaultProp:e,onChange:t}),f=r!==void 0,p=f?r:o;{const v=le.useRef(r!==void 0);le.useEffect(()=>{const x=v.current;x!==f&&console.warn(`${s} is changing from ${x?"controlled":"uncontrolled"} to ${f?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),v.current=f},[f,s])}const m=le.useCallback(v=>{if(f){const x=k_(v)?v(r):v;x!==r&&d.current?.(x)}else l(v)},[f,r,l,d]);return[p,m]}function F_({defaultProp:r,onChange:e}){const[t,s]=le.useState(r),o=le.useRef(t),l=le.useRef(e);return U_(()=>{l.current=e},[e]),le.useEffect(()=>{o.current!==t&&(l.current?.(t),o.current=t)},[t,o]),[t,s,l]}function k_(r){return typeof r=="function"}var O_=le.createContext(void 0);function Vf(r){const e=le.useContext(O_);return r||e||"ltr"}var ad="rovingFocusGroup.onEntryFocus",z_={bubbles:!1,cancelable:!0},Mo="RovingFocusGroup",[Vd,av,B_]=rv(Mo),[j_,ov]=So(Mo,[B_]),[V_,H_]=j_(Mo),lv=le.forwardRef((r,e)=>u.jsx(Vd.Provider,{scope:r.__scopeRovingFocusGroup,children:u.jsx(Vd.Slot,{scope:r.__scopeRovingFocusGroup,children:u.jsx(G_,{...r,ref:e})})}));lv.displayName=Mo;var G_=le.forwardRef((r,e)=>{const{__scopeRovingFocusGroup:t,orientation:s,loop:o=!1,dir:l,currentTabStopId:d,defaultCurrentTabStopId:f,onCurrentTabStopIdChange:p,onEntryFocus:m,preventScrollOnEntryFocus:v=!1,...x}=r,y=le.useRef(null),M=Bi(e,y),w=Vf(l),[T,S]=jf({prop:d,defaultProp:f??null,onChange:p,caller:Mo}),[_,F]=le.useState(!1),D=I_(m),R=av(t),j=le.useRef(!1),[P,k]=le.useState(0);return le.useEffect(()=>{const z=y.current;if(z)return z.addEventListener(ad,D),()=>z.removeEventListener(ad,D)},[D]),u.jsx(V_,{scope:t,orientation:s,dir:w,loop:o,currentTabStopId:T,onItemFocus:le.useCallback(z=>S(z),[S]),onItemShiftTab:le.useCallback(()=>F(!0),[]),onFocusableItemAdd:le.useCallback(()=>k(z=>z+1),[]),onFocusableItemRemove:le.useCallback(()=>k(z=>z-1),[]),children:u.jsx(Yn.div,{tabIndex:_||P===0?-1:0,"data-orientation":s,...x,ref:M,style:{outline:"none",...r.style},onMouseDown:zn(r.onMouseDown,()=>{j.current=!0}),onFocus:zn(r.onFocus,z=>{const N=!j.current;if(z.target===z.currentTarget&&N&&!_){const C=new CustomEvent(ad,z_);if(z.currentTarget.dispatchEvent(C),!C.defaultPrevented){const V=R().filter(K=>K.focusable),$=V.find(K=>K.active),te=V.find(K=>K.id===T),ce=[$,te,...V].filter(Boolean).map(K=>K.ref.current);dv(ce,v)}}j.current=!1}),onBlur:zn(r.onBlur,()=>F(!1))})})}),cv="RovingFocusGroupItem",uv=le.forwardRef((r,e)=>{const{__scopeRovingFocusGroup:t,focusable:s=!0,active:o=!1,tabStopId:l,children:d,...f}=r,p=sv(),m=l||p,v=H_(cv,t),x=v.currentTabStopId===m,y=av(t),{onFocusableItemAdd:M,onFocusableItemRemove:w,currentTabStopId:T}=v;return le.useEffect(()=>{if(s)return M(),()=>w()},[s,M,w]),u.jsx(Vd.ItemSlot,{scope:t,id:m,focusable:s,active:o,children:u.jsx(Yn.span,{tabIndex:x?0:-1,"data-orientation":v.orientation,...f,ref:e,onMouseDown:zn(r.onMouseDown,S=>{s?v.onItemFocus(m):S.preventDefault()}),onFocus:zn(r.onFocus,()=>v.onItemFocus(m)),onKeyDown:zn(r.onKeyDown,S=>{if(S.key==="Tab"&&S.shiftKey){v.onItemShiftTab();return}if(S.target!==S.currentTarget)return;const _=$_(S,v.orientation,v.dir);if(_!==void 0){if(S.metaKey||S.ctrlKey||S.altKey||S.shiftKey)return;S.preventDefault();let D=y().filter(R=>R.focusable).map(R=>R.ref.current);if(_==="last")D.reverse();else if(_==="prev"||_==="next"){_==="prev"&&D.reverse();const R=D.indexOf(S.currentTarget);D=v.loop?q_(D,R+1):D.slice(R+1)}setTimeout(()=>dv(D))}}),children:typeof d=="function"?d({isCurrentTabStop:x,hasTabStop:T!=null}):d})})});uv.displayName=cv;var W_={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function X_(r,e){return e!=="rtl"?r:r==="ArrowLeft"?"ArrowRight":r==="ArrowRight"?"ArrowLeft":r}function $_(r,e,t){const s=X_(r.key,t);if(!(e==="vertical"&&["ArrowLeft","ArrowRight"].includes(s))&&!(e==="horizontal"&&["ArrowUp","ArrowDown"].includes(s)))return W_[s]}function dv(r,e=!1){const t=document.activeElement;for(const s of r)if(s===t||(s.focus({preventScroll:e}),document.activeElement!==t))return}function q_(r,e){return r.map((t,s)=>r[(e+s)%r.length])}var Y_=lv,K_=uv;function Z_(r,e){return le.useReducer((t,s)=>e[t][s]??t,r)}var fv=r=>{const{present:e,children:t}=r,s=Q_(e),o=typeof t=="function"?t({present:s.isPresent}):le.Children.only(t),l=Bi(s.ref,J_(o));return typeof t=="function"||s.isPresent?le.cloneElement(o,{ref:l}):null};fv.displayName="Presence";function Q_(r){const[e,t]=le.useState(),s=le.useRef(null),o=le.useRef(r),l=le.useRef("none"),d=r?"mounted":"unmounted",[f,p]=Z_(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return le.useEffect(()=>{const m=Il(s.current);l.current=f==="mounted"?m:"none"},[f]),fo(()=>{const m=s.current,v=o.current;if(v!==r){const y=l.current,M=Il(m);r?p("MOUNT"):M==="none"||m?.display==="none"?p("UNMOUNT"):p(v&&y!==M?"ANIMATION_OUT":"UNMOUNT"),o.current=r}},[r,p]),fo(()=>{if(e){let m;const v=e.ownerDocument.defaultView??window,x=M=>{const T=Il(s.current).includes(CSS.escape(M.animationName));if(M.target===e&&T&&(p("ANIMATION_END"),!o.current)){const S=e.style.animationFillMode;e.style.animationFillMode="forwards",m=v.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=S)})}},y=M=>{M.target===e&&(l.current=Il(s.current))};return e.addEventListener("animationstart",y),e.addEventListener("animationcancel",x),e.addEventListener("animationend",x),()=>{v.clearTimeout(m),e.removeEventListener("animationstart",y),e.removeEventListener("animationcancel",x),e.removeEventListener("animationend",x)}}else p("ANIMATION_END")},[e,p]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:le.useCallback(m=>{s.current=m?getComputedStyle(m):null,t(m)},[])}}function Il(r){return r?.animationName||"none"}function J_(r){let e=Object.getOwnPropertyDescriptor(r.props,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?r.ref:(e=Object.getOwnPropertyDescriptor(r,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?r.props.ref:r.props.ref||r.ref)}var _c="Tabs",[ey]=So(_c,[ov]),hv=ov(),[ty,Hf]=ey(_c),pv=le.forwardRef((r,e)=>{const{__scopeTabs:t,value:s,onValueChange:o,defaultValue:l,orientation:d="horizontal",dir:f,activationMode:p="automatic",...m}=r,v=Vf(f),[x,y]=jf({prop:s,onChange:o,defaultProp:l??"",caller:_c});return u.jsx(ty,{scope:t,baseId:sv(),value:x,onValueChange:y,orientation:d,dir:v,activationMode:p,children:u.jsx(Yn.div,{dir:v,"data-orientation":d,...m,ref:e})})});pv.displayName=_c;var mv="TabsList",gv=le.forwardRef((r,e)=>{const{__scopeTabs:t,loop:s=!0,...o}=r,l=Hf(mv,t),d=hv(t);return u.jsx(Y_,{asChild:!0,...d,orientation:l.orientation,dir:l.dir,loop:s,children:u.jsx(Yn.div,{role:"tablist","aria-orientation":l.orientation,...o,ref:e})})});gv.displayName=mv;var vv="TabsTrigger",xv=le.forwardRef((r,e)=>{const{__scopeTabs:t,value:s,disabled:o=!1,...l}=r,d=Hf(vv,t),f=hv(t),p=Sv(d.baseId,s),m=Mv(d.baseId,s),v=s===d.value;return u.jsx(K_,{asChild:!0,...f,focusable:!o,active:v,children:u.jsx(Yn.button,{type:"button",role:"tab","aria-selected":v,"aria-controls":m,"data-state":v?"active":"inactive","data-disabled":o?"":void 0,disabled:o,id:p,...l,ref:e,onMouseDown:zn(r.onMouseDown,x=>{!o&&x.button===0&&x.ctrlKey===!1?d.onValueChange(s):x.preventDefault()}),onKeyDown:zn(r.onKeyDown,x=>{[" ","Enter"].includes(x.key)&&d.onValueChange(s)}),onFocus:zn(r.onFocus,()=>{const x=d.activationMode!=="manual";!v&&!o&&x&&d.onValueChange(s)})})})});xv.displayName=vv;var _v="TabsContent",yv=le.forwardRef((r,e)=>{const{__scopeTabs:t,value:s,forceMount:o,children:l,...d}=r,f=Hf(_v,t),p=Sv(f.baseId,s),m=Mv(f.baseId,s),v=s===f.value,x=le.useRef(v);return le.useEffect(()=>{const y=requestAnimationFrame(()=>x.current=!1);return()=>cancelAnimationFrame(y)},[]),u.jsx(fv,{present:o||v,children:({present:y})=>u.jsx(Yn.div,{"data-state":v?"active":"inactive","data-orientation":f.orientation,role:"tabpanel","aria-labelledby":p,hidden:!y,id:m,tabIndex:0,...d,ref:e,style:{...r.style,animationDuration:x.current?"0s":void 0},children:y&&l})})});yv.displayName=_v;function Sv(r,e){return`${r}-trigger-${e}`}function Mv(r,e){return`${r}-content-${e}`}var ny=pv,iy=gv,ry=xv,sy=yv;function Ev(r){var e,t,s="";if(typeof r=="string"||typeof r=="number")s+=r;else if(typeof r=="object")if(Array.isArray(r)){var o=r.length;for(e=0;e<o;e++)r[e]&&(t=Ev(r[e]))&&(s&&(s+=" "),s+=t)}else for(t in r)r[t]&&(s&&(s+=" "),s+=t);return s}function wv(){for(var r,e,t=0,s="",o=arguments.length;t<o;t++)(r=arguments[t])&&(e=Ev(r))&&(s&&(s+=" "),s+=e);return s}const Gf="-",ay=r=>{const e=ly(r),{conflictingClassGroups:t,conflictingClassGroupModifiers:s}=r;return{getClassGroupId:d=>{const f=d.split(Gf);return f[0]===""&&f.length!==1&&f.shift(),Tv(f,e)||oy(d)},getConflictingClassGroupIds:(d,f)=>{const p=t[d]||[];return f&&s[d]?[...p,...s[d]]:p}}},Tv=(r,e)=>{if(r.length===0)return e.classGroupId;const t=r[0],s=e.nextPart.get(t),o=s?Tv(r.slice(1),s):void 0;if(o)return o;if(e.validators.length===0)return;const l=r.join(Gf);return e.validators.find(({validator:d})=>d(l))?.classGroupId},Vm=/^\[(.+)\]$/,oy=r=>{if(Vm.test(r)){const e=Vm.exec(r)[1],t=e?.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},ly=r=>{const{theme:e,classGroups:t}=r,s={nextPart:new Map,validators:[]};for(const o in t)Hd(t[o],s,o,e);return s},Hd=(r,e,t,s)=>{r.forEach(o=>{if(typeof o=="string"){const l=o===""?e:Hm(e,o);l.classGroupId=t;return}if(typeof o=="function"){if(cy(o)){Hd(o(s),e,t,s);return}e.validators.push({validator:o,classGroupId:t});return}Object.entries(o).forEach(([l,d])=>{Hd(d,Hm(e,l),t,s)})})},Hm=(r,e)=>{let t=r;return e.split(Gf).forEach(s=>{t.nextPart.has(s)||t.nextPart.set(s,{nextPart:new Map,validators:[]}),t=t.nextPart.get(s)}),t},cy=r=>r.isThemeGetter,uy=r=>{if(r<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,s=new Map;const o=(l,d)=>{t.set(l,d),e++,e>r&&(e=0,s=t,t=new Map)};return{get(l){let d=t.get(l);if(d!==void 0)return d;if((d=s.get(l))!==void 0)return o(l,d),d},set(l,d){t.has(l)?t.set(l,d):o(l,d)}}},Gd="!",Wd=":",dy=Wd.length,fy=r=>{const{prefix:e,experimentalParseClassName:t}=r;let s=o=>{const l=[];let d=0,f=0,p=0,m;for(let w=0;w<o.length;w++){let T=o[w];if(d===0&&f===0){if(T===Wd){l.push(o.slice(p,w)),p=w+dy;continue}if(T==="/"){m=w;continue}}T==="["?d++:T==="]"?d--:T==="("?f++:T===")"&&f--}const v=l.length===0?o:o.substring(p),x=hy(v),y=x!==v,M=m&&m>p?m-p:void 0;return{modifiers:l,hasImportantModifier:y,baseClassName:x,maybePostfixModifierPosition:M}};if(e){const o=e+Wd,l=s;s=d=>d.startsWith(o)?l(d.substring(o.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:d,maybePostfixModifierPosition:void 0}}if(t){const o=s;s=l=>t({className:l,parseClassName:o})}return s},hy=r=>r.endsWith(Gd)?r.substring(0,r.length-1):r.startsWith(Gd)?r.substring(1):r,py=r=>{const e=Object.fromEntries(r.orderSensitiveModifiers.map(s=>[s,!0]));return s=>{if(s.length<=1)return s;const o=[];let l=[];return s.forEach(d=>{d[0]==="["||e[d]?(o.push(...l.sort(),d),l=[]):l.push(d)}),o.push(...l.sort()),o}},my=r=>({cache:uy(r.cacheSize),parseClassName:fy(r),sortModifiers:py(r),...ay(r)}),gy=/\s+/,vy=(r,e)=>{const{parseClassName:t,getClassGroupId:s,getConflictingClassGroupIds:o,sortModifiers:l}=e,d=[],f=r.trim().split(gy);let p="";for(let m=f.length-1;m>=0;m-=1){const v=f[m],{isExternal:x,modifiers:y,hasImportantModifier:M,baseClassName:w,maybePostfixModifierPosition:T}=t(v);if(x){p=v+(p.length>0?" "+p:p);continue}let S=!!T,_=s(S?w.substring(0,T):w);if(!_){if(!S){p=v+(p.length>0?" "+p:p);continue}if(_=s(w),!_){p=v+(p.length>0?" "+p:p);continue}S=!1}const F=l(y).join(":"),D=M?F+Gd:F,R=D+_;if(d.includes(R))continue;d.push(R);const j=o(_,S);for(let P=0;P<j.length;++P){const k=j[P];d.push(D+k)}p=v+(p.length>0?" "+p:p)}return p};function xy(){let r=0,e,t,s="";for(;r<arguments.length;)(e=arguments[r++])&&(t=Av(e))&&(s&&(s+=" "),s+=t);return s}const Av=r=>{if(typeof r=="string")return r;let e,t="";for(let s=0;s<r.length;s++)r[s]&&(e=Av(r[s]))&&(t&&(t+=" "),t+=e);return t};function _y(r,...e){let t,s,o,l=d;function d(p){const m=e.reduce((v,x)=>x(v),r());return t=my(m),s=t.cache.get,o=t.cache.set,l=f,f(p)}function f(p){const m=s(p);if(m)return m;const v=vy(p,t);return o(p,v),v}return function(){return l(xy.apply(null,arguments))}}const dn=r=>{const e=t=>t[r]||[];return e.isThemeGetter=!0,e},bv=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Rv=/^\((?:(\w[\w-]*):)?(.+)\)$/i,yy=/^\d+\/\d+$/,Sy=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,My=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ey=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,wy=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ty=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,$s=r=>yy.test(r),xt=r=>!!r&&!Number.isNaN(Number(r)),Cr=r=>!!r&&Number.isInteger(Number(r)),od=r=>r.endsWith("%")&&xt(r.slice(0,-1)),Qi=r=>Sy.test(r),Ay=()=>!0,by=r=>My.test(r)&&!Ey.test(r),Cv=()=>!1,Ry=r=>wy.test(r),Cy=r=>Ty.test(r),Ny=r=>!Ge(r)&&!We(r),Py=r=>va(r,Dv,Cv),Ge=r=>bv.test(r),rs=r=>va(r,Lv,by),ld=r=>va(r,Fy,xt),Gm=r=>va(r,Nv,Cv),Dy=r=>va(r,Pv,Cy),Ul=r=>va(r,Iv,Ry),We=r=>Rv.test(r),ro=r=>xa(r,Lv),Ly=r=>xa(r,ky),Wm=r=>xa(r,Nv),Iy=r=>xa(r,Dv),Uy=r=>xa(r,Pv),Fl=r=>xa(r,Iv,!0),va=(r,e,t)=>{const s=bv.exec(r);return s?s[1]?e(s[1]):t(s[2]):!1},xa=(r,e,t=!1)=>{const s=Rv.exec(r);return s?s[1]?e(s[1]):t:!1},Nv=r=>r==="position"||r==="percentage",Pv=r=>r==="image"||r==="url",Dv=r=>r==="length"||r==="size"||r==="bg-size",Lv=r=>r==="length",Fy=r=>r==="number",ky=r=>r==="family-name",Iv=r=>r==="shadow",Oy=()=>{const r=dn("color"),e=dn("font"),t=dn("text"),s=dn("font-weight"),o=dn("tracking"),l=dn("leading"),d=dn("breakpoint"),f=dn("container"),p=dn("spacing"),m=dn("radius"),v=dn("shadow"),x=dn("inset-shadow"),y=dn("text-shadow"),M=dn("drop-shadow"),w=dn("blur"),T=dn("perspective"),S=dn("aspect"),_=dn("ease"),F=dn("animate"),D=()=>["auto","avoid","all","avoid-page","page","left","right","column"],R=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],j=()=>[...R(),We,Ge],P=()=>["auto","hidden","clip","visible","scroll"],k=()=>["auto","contain","none"],z=()=>[We,Ge,p],N=()=>[$s,"full","auto",...z()],C=()=>[Cr,"none","subgrid",We,Ge],V=()=>["auto",{span:["full",Cr,We,Ge]},Cr,We,Ge],$=()=>[Cr,"auto",We,Ge],te=()=>["auto","min","max","fr",We,Ge],Z=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],ce=()=>["start","end","center","stretch","center-safe","end-safe"],K=()=>["auto",...z()],fe=()=>[$s,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...z()],I=()=>[r,We,Ge],ae=()=>[...R(),Wm,Gm,{position:[We,Ge]}],de=()=>["no-repeat",{repeat:["","x","y","space","round"]}],O=()=>["auto","cover","contain",Iy,Py,{size:[We,Ge]}],ie=()=>[od,ro,rs],Re=()=>["","none","full",m,We,Ge],Pe=()=>["",xt,ro,rs],Te=()=>["solid","dashed","dotted","double"],ne=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],se=()=>[xt,od,Wm,Gm],_e=()=>["","none",w,We,Ge],Ne=()=>["none",xt,We,Ge],De=()=>["none",xt,We,Ge],lt=()=>[xt,We,Ge],Ft=()=>[$s,"full",...z()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Qi],breakpoint:[Qi],color:[Ay],container:[Qi],"drop-shadow":[Qi],ease:["in","out","in-out"],font:[Ny],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Qi],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Qi],shadow:[Qi],spacing:["px",xt],text:[Qi],"text-shadow":[Qi],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",$s,Ge,We,S]}],container:["container"],columns:[{columns:[xt,Ge,We,f]}],"break-after":[{"break-after":D()}],"break-before":[{"break-before":D()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:j()}],overflow:[{overflow:P()}],"overflow-x":[{"overflow-x":P()}],"overflow-y":[{"overflow-y":P()}],overscroll:[{overscroll:k()}],"overscroll-x":[{"overscroll-x":k()}],"overscroll-y":[{"overscroll-y":k()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:N()}],"inset-x":[{"inset-x":N()}],"inset-y":[{"inset-y":N()}],start:[{start:N()}],end:[{end:N()}],top:[{top:N()}],right:[{right:N()}],bottom:[{bottom:N()}],left:[{left:N()}],visibility:["visible","invisible","collapse"],z:[{z:[Cr,"auto",We,Ge]}],basis:[{basis:[$s,"full","auto",f,...z()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[xt,$s,"auto","initial","none",Ge]}],grow:[{grow:["",xt,We,Ge]}],shrink:[{shrink:["",xt,We,Ge]}],order:[{order:[Cr,"first","last","none",We,Ge]}],"grid-cols":[{"grid-cols":C()}],"col-start-end":[{col:V()}],"col-start":[{"col-start":$()}],"col-end":[{"col-end":$()}],"grid-rows":[{"grid-rows":C()}],"row-start-end":[{row:V()}],"row-start":[{"row-start":$()}],"row-end":[{"row-end":$()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":te()}],"auto-rows":[{"auto-rows":te()}],gap:[{gap:z()}],"gap-x":[{"gap-x":z()}],"gap-y":[{"gap-y":z()}],"justify-content":[{justify:[...Z(),"normal"]}],"justify-items":[{"justify-items":[...ce(),"normal"]}],"justify-self":[{"justify-self":["auto",...ce()]}],"align-content":[{content:["normal",...Z()]}],"align-items":[{items:[...ce(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...ce(),{baseline:["","last"]}]}],"place-content":[{"place-content":Z()}],"place-items":[{"place-items":[...ce(),"baseline"]}],"place-self":[{"place-self":["auto",...ce()]}],p:[{p:z()}],px:[{px:z()}],py:[{py:z()}],ps:[{ps:z()}],pe:[{pe:z()}],pt:[{pt:z()}],pr:[{pr:z()}],pb:[{pb:z()}],pl:[{pl:z()}],m:[{m:K()}],mx:[{mx:K()}],my:[{my:K()}],ms:[{ms:K()}],me:[{me:K()}],mt:[{mt:K()}],mr:[{mr:K()}],mb:[{mb:K()}],ml:[{ml:K()}],"space-x":[{"space-x":z()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":z()}],"space-y-reverse":["space-y-reverse"],size:[{size:fe()}],w:[{w:[f,"screen",...fe()]}],"min-w":[{"min-w":[f,"screen","none",...fe()]}],"max-w":[{"max-w":[f,"screen","none","prose",{screen:[d]},...fe()]}],h:[{h:["screen","lh",...fe()]}],"min-h":[{"min-h":["screen","lh","none",...fe()]}],"max-h":[{"max-h":["screen","lh",...fe()]}],"font-size":[{text:["base",t,ro,rs]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[s,We,ld]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",od,Ge]}],"font-family":[{font:[Ly,Ge,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,We,Ge]}],"line-clamp":[{"line-clamp":[xt,"none",We,ld]}],leading:[{leading:[l,...z()]}],"list-image":[{"list-image":["none",We,Ge]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",We,Ge]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:I()}],"text-color":[{text:I()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Te(),"wavy"]}],"text-decoration-thickness":[{decoration:[xt,"from-font","auto",We,rs]}],"text-decoration-color":[{decoration:I()}],"underline-offset":[{"underline-offset":[xt,"auto",We,Ge]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:z()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",We,Ge]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",We,Ge]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ae()}],"bg-repeat":[{bg:de()}],"bg-size":[{bg:O()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Cr,We,Ge],radial:["",We,Ge],conic:[Cr,We,Ge]},Uy,Dy]}],"bg-color":[{bg:I()}],"gradient-from-pos":[{from:ie()}],"gradient-via-pos":[{via:ie()}],"gradient-to-pos":[{to:ie()}],"gradient-from":[{from:I()}],"gradient-via":[{via:I()}],"gradient-to":[{to:I()}],rounded:[{rounded:Re()}],"rounded-s":[{"rounded-s":Re()}],"rounded-e":[{"rounded-e":Re()}],"rounded-t":[{"rounded-t":Re()}],"rounded-r":[{"rounded-r":Re()}],"rounded-b":[{"rounded-b":Re()}],"rounded-l":[{"rounded-l":Re()}],"rounded-ss":[{"rounded-ss":Re()}],"rounded-se":[{"rounded-se":Re()}],"rounded-ee":[{"rounded-ee":Re()}],"rounded-es":[{"rounded-es":Re()}],"rounded-tl":[{"rounded-tl":Re()}],"rounded-tr":[{"rounded-tr":Re()}],"rounded-br":[{"rounded-br":Re()}],"rounded-bl":[{"rounded-bl":Re()}],"border-w":[{border:Pe()}],"border-w-x":[{"border-x":Pe()}],"border-w-y":[{"border-y":Pe()}],"border-w-s":[{"border-s":Pe()}],"border-w-e":[{"border-e":Pe()}],"border-w-t":[{"border-t":Pe()}],"border-w-r":[{"border-r":Pe()}],"border-w-b":[{"border-b":Pe()}],"border-w-l":[{"border-l":Pe()}],"divide-x":[{"divide-x":Pe()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Pe()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Te(),"hidden","none"]}],"divide-style":[{divide:[...Te(),"hidden","none"]}],"border-color":[{border:I()}],"border-color-x":[{"border-x":I()}],"border-color-y":[{"border-y":I()}],"border-color-s":[{"border-s":I()}],"border-color-e":[{"border-e":I()}],"border-color-t":[{"border-t":I()}],"border-color-r":[{"border-r":I()}],"border-color-b":[{"border-b":I()}],"border-color-l":[{"border-l":I()}],"divide-color":[{divide:I()}],"outline-style":[{outline:[...Te(),"none","hidden"]}],"outline-offset":[{"outline-offset":[xt,We,Ge]}],"outline-w":[{outline:["",xt,ro,rs]}],"outline-color":[{outline:I()}],shadow:[{shadow:["","none",v,Fl,Ul]}],"shadow-color":[{shadow:I()}],"inset-shadow":[{"inset-shadow":["none",x,Fl,Ul]}],"inset-shadow-color":[{"inset-shadow":I()}],"ring-w":[{ring:Pe()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:I()}],"ring-offset-w":[{"ring-offset":[xt,rs]}],"ring-offset-color":[{"ring-offset":I()}],"inset-ring-w":[{"inset-ring":Pe()}],"inset-ring-color":[{"inset-ring":I()}],"text-shadow":[{"text-shadow":["none",y,Fl,Ul]}],"text-shadow-color":[{"text-shadow":I()}],opacity:[{opacity:[xt,We,Ge]}],"mix-blend":[{"mix-blend":[...ne(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ne()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[xt]}],"mask-image-linear-from-pos":[{"mask-linear-from":se()}],"mask-image-linear-to-pos":[{"mask-linear-to":se()}],"mask-image-linear-from-color":[{"mask-linear-from":I()}],"mask-image-linear-to-color":[{"mask-linear-to":I()}],"mask-image-t-from-pos":[{"mask-t-from":se()}],"mask-image-t-to-pos":[{"mask-t-to":se()}],"mask-image-t-from-color":[{"mask-t-from":I()}],"mask-image-t-to-color":[{"mask-t-to":I()}],"mask-image-r-from-pos":[{"mask-r-from":se()}],"mask-image-r-to-pos":[{"mask-r-to":se()}],"mask-image-r-from-color":[{"mask-r-from":I()}],"mask-image-r-to-color":[{"mask-r-to":I()}],"mask-image-b-from-pos":[{"mask-b-from":se()}],"mask-image-b-to-pos":[{"mask-b-to":se()}],"mask-image-b-from-color":[{"mask-b-from":I()}],"mask-image-b-to-color":[{"mask-b-to":I()}],"mask-image-l-from-pos":[{"mask-l-from":se()}],"mask-image-l-to-pos":[{"mask-l-to":se()}],"mask-image-l-from-color":[{"mask-l-from":I()}],"mask-image-l-to-color":[{"mask-l-to":I()}],"mask-image-x-from-pos":[{"mask-x-from":se()}],"mask-image-x-to-pos":[{"mask-x-to":se()}],"mask-image-x-from-color":[{"mask-x-from":I()}],"mask-image-x-to-color":[{"mask-x-to":I()}],"mask-image-y-from-pos":[{"mask-y-from":se()}],"mask-image-y-to-pos":[{"mask-y-to":se()}],"mask-image-y-from-color":[{"mask-y-from":I()}],"mask-image-y-to-color":[{"mask-y-to":I()}],"mask-image-radial":[{"mask-radial":[We,Ge]}],"mask-image-radial-from-pos":[{"mask-radial-from":se()}],"mask-image-radial-to-pos":[{"mask-radial-to":se()}],"mask-image-radial-from-color":[{"mask-radial-from":I()}],"mask-image-radial-to-color":[{"mask-radial-to":I()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":R()}],"mask-image-conic-pos":[{"mask-conic":[xt]}],"mask-image-conic-from-pos":[{"mask-conic-from":se()}],"mask-image-conic-to-pos":[{"mask-conic-to":se()}],"mask-image-conic-from-color":[{"mask-conic-from":I()}],"mask-image-conic-to-color":[{"mask-conic-to":I()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ae()}],"mask-repeat":[{mask:de()}],"mask-size":[{mask:O()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",We,Ge]}],filter:[{filter:["","none",We,Ge]}],blur:[{blur:_e()}],brightness:[{brightness:[xt,We,Ge]}],contrast:[{contrast:[xt,We,Ge]}],"drop-shadow":[{"drop-shadow":["","none",M,Fl,Ul]}],"drop-shadow-color":[{"drop-shadow":I()}],grayscale:[{grayscale:["",xt,We,Ge]}],"hue-rotate":[{"hue-rotate":[xt,We,Ge]}],invert:[{invert:["",xt,We,Ge]}],saturate:[{saturate:[xt,We,Ge]}],sepia:[{sepia:["",xt,We,Ge]}],"backdrop-filter":[{"backdrop-filter":["","none",We,Ge]}],"backdrop-blur":[{"backdrop-blur":_e()}],"backdrop-brightness":[{"backdrop-brightness":[xt,We,Ge]}],"backdrop-contrast":[{"backdrop-contrast":[xt,We,Ge]}],"backdrop-grayscale":[{"backdrop-grayscale":["",xt,We,Ge]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[xt,We,Ge]}],"backdrop-invert":[{"backdrop-invert":["",xt,We,Ge]}],"backdrop-opacity":[{"backdrop-opacity":[xt,We,Ge]}],"backdrop-saturate":[{"backdrop-saturate":[xt,We,Ge]}],"backdrop-sepia":[{"backdrop-sepia":["",xt,We,Ge]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":z()}],"border-spacing-x":[{"border-spacing-x":z()}],"border-spacing-y":[{"border-spacing-y":z()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",We,Ge]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[xt,"initial",We,Ge]}],ease:[{ease:["linear","initial",_,We,Ge]}],delay:[{delay:[xt,We,Ge]}],animate:[{animate:["none",F,We,Ge]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[T,We,Ge]}],"perspective-origin":[{"perspective-origin":j()}],rotate:[{rotate:Ne()}],"rotate-x":[{"rotate-x":Ne()}],"rotate-y":[{"rotate-y":Ne()}],"rotate-z":[{"rotate-z":Ne()}],scale:[{scale:De()}],"scale-x":[{"scale-x":De()}],"scale-y":[{"scale-y":De()}],"scale-z":[{"scale-z":De()}],"scale-3d":["scale-3d"],skew:[{skew:lt()}],"skew-x":[{"skew-x":lt()}],"skew-y":[{"skew-y":lt()}],transform:[{transform:[We,Ge,"","none","gpu","cpu"]}],"transform-origin":[{origin:j()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Ft()}],"translate-x":[{"translate-x":Ft()}],"translate-y":[{"translate-y":Ft()}],"translate-z":[{"translate-z":Ft()}],"translate-none":["translate-none"],accent:[{accent:I()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:I()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",We,Ge]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":z()}],"scroll-mx":[{"scroll-mx":z()}],"scroll-my":[{"scroll-my":z()}],"scroll-ms":[{"scroll-ms":z()}],"scroll-me":[{"scroll-me":z()}],"scroll-mt":[{"scroll-mt":z()}],"scroll-mr":[{"scroll-mr":z()}],"scroll-mb":[{"scroll-mb":z()}],"scroll-ml":[{"scroll-ml":z()}],"scroll-p":[{"scroll-p":z()}],"scroll-px":[{"scroll-px":z()}],"scroll-py":[{"scroll-py":z()}],"scroll-ps":[{"scroll-ps":z()}],"scroll-pe":[{"scroll-pe":z()}],"scroll-pt":[{"scroll-pt":z()}],"scroll-pr":[{"scroll-pr":z()}],"scroll-pb":[{"scroll-pb":z()}],"scroll-pl":[{"scroll-pl":z()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",We,Ge]}],fill:[{fill:["none",...I()]}],"stroke-w":[{stroke:[xt,ro,rs,ld]}],stroke:[{stroke:["none",...I()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},zy=_y(Oy);function fn(...r){return zy(wv(r))}function _a({className:r,...e}){return u.jsx(ny,{"data-slot":"tabs",className:fn("flex flex-col gap-2",r),...e})}function ya({className:r,...e}){return u.jsx(iy,{"data-slot":"tabs-list",className:fn("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px] flex",r),...e})}function rn({className:r,...e}){return u.jsx(ry,{"data-slot":"tabs-trigger",className:fn("data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",r),...e})}function _n({className:r,...e}){return u.jsx(sy,{"data-slot":"tabs-content",className:fn("flex-1 outline-none",r),...e})}const Xm=r=>typeof r=="boolean"?`${r}`:r===0?"0":r,$m=wv,Wf=(r,e)=>t=>{var s;if(e?.variants==null)return $m(r,t?.class,t?.className);const{variants:o,defaultVariants:l}=e,d=Object.keys(o).map(m=>{const v=t?.[m],x=l?.[m];if(v===null)return null;const y=Xm(v)||Xm(x);return o[m][y]}),f=t&&Object.entries(t).reduce((m,v)=>{let[x,y]=v;return y===void 0||(m[x]=y),m},{}),p=e==null||(s=e.compoundVariants)===null||s===void 0?void 0:s.reduce((m,v)=>{let{class:x,className:y,...M}=v;return Object.entries(M).every(w=>{let[T,S]=w;return Array.isArray(S)?S.includes({...l,...f}[T]):{...l,...f}[T]===S})?[...m,x,y]:m},[]);return $m(r,d,p,t?.class,t?.className)},By=Wf("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function Mn({className:r,variant:e,asChild:t=!1,...s}){const o=t?iv:"span";return u.jsx(o,{"data-slot":"badge",className:fn(By({variant:e}),r),...s})}const jy=Wf("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",{variants:{variant:{default:"bg-card text-card-foreground",destructive:"text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"}},defaultVariants:{variant:"default"}});function ho({className:r,variant:e,...t}){return u.jsx("div",{"data-slot":"alert",role:"alert",className:fn(jy({variant:e}),r),...t})}function po({className:r,...e}){return u.jsx("div",{"data-slot":"alert-description",className:fn("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",r),...e})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Hy=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),qm=r=>{const e=Hy(r);return e.charAt(0).toUpperCase()+e.slice(1)},Uv=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Gy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=le.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:d,...f},p)=>le.createElement("svg",{ref:p,...Gy,width:e,height:e,stroke:r,strokeWidth:s?Number(t)*24/Number(e):t,className:Uv("lucide",o),...f},[...d.map(([m,v])=>le.createElement(m,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=(r,e)=>{const t=le.forwardRef(({className:s,...o},l)=>le.createElement(Wy,{ref:l,iconNode:e,className:Uv(`lucide-${Vy(qm(r))}`,`lucide-${r}`,s),...o}));return t.displayName=qm(r),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Fv=Pt("activity",Xy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]],Ym=Pt("building",$y);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],kv=Pt("calendar",qy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Ky=Pt("chart-column",Yy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],ar=Pt("circle-check-big",Zy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Jy=Pt("clock",Qy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],Km=Pt("download",eS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],cd=Pt("eye-off",tS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],sc=Pt("eye",nS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]],Zm=Pt("file-image",iS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ms=Pt("file-text",rS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]],aS=Pt("file",sS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],fc=Pt("layers",oS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],cS=Pt("loader-circle",lS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],dS=Pt("mail",uS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],hc=Pt("map-pin",fS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],mo=Pt("map",hS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]],da=Pt("mountain",pS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=[["path",{d:"M5 3v16h16",key:"1mqmf9"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}],["path",{d:"m2 6 3-3 3 3",key:"tkyvxa"}],["path",{d:"m18 16 3 3-3 3",key:"1d4glt"}]],gS=Pt("move-3d",mS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],xS=Pt("pause",vS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],yS=Pt("play",_S);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],MS=Pt("plus",SS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],wS=Pt("printer",ES);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],AS=Pt("rotate-ccw",TS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],RS=Pt("rotate-cw",bS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=[["path",{d:"M13 7 9 3 5 7l4 4",key:"vyckw6"}],["path",{d:"m17 11 4 4-4 4-4-4",key:"rchckc"}],["path",{d:"m8 12 4 4 6-6-4-4Z",key:"1sshf7"}],["path",{d:"m16 8 3-3",key:"x428zp"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}]],Xd=Pt("satellite",CS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],PS=Pt("send",NS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],LS=Pt("settings",DS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],US=Pt("square-pen",IS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],kS=Pt("trash-2",FS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],ii=Pt("triangle-alert",OS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],Xf=Pt("upload",zS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Ov=Pt("zoom-in",BS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],zv=Pt("zoom-out",jS);function Mt({className:r,...e}){return u.jsx("div",{"data-slot":"card",className:fn("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",r),...e})}function Et({className:r,...e}){return u.jsx("div",{"data-slot":"card-header",className:fn("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",r),...e})}function Tt({className:r,...e}){return u.jsx("h4",{"data-slot":"card-title",className:fn("leading-none",r),...e})}function On({className:r,...e}){return u.jsx("p",{"data-slot":"card-description",className:fn("text-muted-foreground",r),...e})}function At({className:r,...e}){return u.jsx("div",{"data-slot":"card-content",className:fn("px-6 [&:last-child]:pb-6",r),...e})}var $f="Progress",qf=100,[VS]=So($f),[HS,GS]=VS($f),Bv=le.forwardRef((r,e)=>{const{__scopeProgress:t,value:s=null,max:o,getValueLabel:l=WS,...d}=r;(o||o===0)&&!Qm(o)&&console.error(XS(`${o}`,"Progress"));const f=Qm(o)?o:qf;s!==null&&!Jm(s,f)&&console.error($S(`${s}`,"Progress"));const p=Jm(s,f)?s:null,m=pc(p)?l(p,f):void 0;return u.jsx(HS,{scope:t,value:p,max:f,children:u.jsx(Yn.div,{"aria-valuemax":f,"aria-valuemin":0,"aria-valuenow":pc(p)?p:void 0,"aria-valuetext":m,role:"progressbar","data-state":Hv(p,f),"data-value":p??void 0,"data-max":f,...d,ref:e})})});Bv.displayName=$f;var jv="ProgressIndicator",Vv=le.forwardRef((r,e)=>{const{__scopeProgress:t,...s}=r,o=GS(jv,t);return u.jsx(Yn.div,{"data-state":Hv(o.value,o.max),"data-value":o.value??void 0,"data-max":o.max,...s,ref:e})});Vv.displayName=jv;function WS(r,e){return`${Math.round(r/e*100)}%`}function Hv(r,e){return r==null?"indeterminate":r===e?"complete":"loading"}function pc(r){return typeof r=="number"}function Qm(r){return pc(r)&&!isNaN(r)&&r>0}function Jm(r,e){return pc(r)&&!isNaN(r)&&r<=e&&r>=0}function XS(r,e){return`Invalid prop \`max\` of value \`${r}\` supplied to \`${e}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${qf}\`.`}function $S(r,e){return`Invalid prop \`value\` of value \`${r}\` supplied to \`${e}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${qf} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var qS=Bv,YS=Vv;function Gv({className:r,value:e,...t}){return u.jsx(qS,{"data-slot":"progress",className:fn("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",r),...t,children:u.jsx(YS,{"data-slot":"progress-indicator",className:"bg-primary h-full w-full flex-1 transition-all",style:{transform:`translateX(-${100-(e||0)}%)`}})})}function KS({analysisData:r}){const e=[{month:"Jan",authorized:320,illegal:45},{month:"Feb",authorized:340,illegal:52},{month:"Mar",authorized:355,illegal:48},{month:"Apr",authorized:370,illegal:61},{month:"May",authorized:380,illegal:69},{month:"Jun",authorized:380,illegal:70}],t=[{month:"Jan",volume:5200},{month:"Feb",volume:5800},{month:"Mar",volume:6100},{month:"Apr",volume:6400},{month:"May",volume:6700},{month:"Jun",volume:6890}];if(!r)return u.jsx("div",{className:"grid gap-6",children:u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[1,2,3,4].map(o=>u.jsx(Mt,{className:"animate-pulse",children:u.jsxs(Et,{className:"space-y-2",children:[u.jsx("div",{className:"h-4 bg-gray-200 rounded w-3/4"}),u.jsx("div",{className:"h-8 bg-gray-200 rounded w-1/2"})]})},o))})});const s=(r.authorizedArea/r.totalMiningArea*100).toFixed(1);return u.jsxs("div",{className:"space-y-6",children:[r.illegalArea>0&&u.jsxs(ho,{className:"border-red-200 bg-red-50",children:[u.jsx(ii,{className:"h-4 w-4 text-red-600"}),u.jsxs(po,{className:"text-red-800",children:[u.jsx("strong",{children:"Critical:"})," ",r.illegalArea," hectares of unauthorized mining detected outside permitted boundaries."]})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[u.jsxs(Mt,{children:[u.jsxs(Et,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[u.jsx(Tt,{className:"text-sm font-medium",children:"Total Mining Area"}),u.jsx(da,{className:"h-4 w-4 text-muted-foreground"})]}),u.jsxs(At,{children:[u.jsxs("div",{className:"text-2xl font-bold",children:[r.totalMiningArea," ha"]}),u.jsxs("p",{className:"text-xs text-muted-foreground",children:[r.illegalArea>0?"+":"",r.illegalArea," ha from last analysis"]})]})]}),u.jsxs(Mt,{children:[u.jsxs(Et,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[u.jsx(Tt,{className:"text-sm font-medium",children:"Compliance Rate"}),u.jsx(Fv,{className:"h-4 w-4 text-muted-foreground"})]}),u.jsxs(At,{children:[u.jsxs("div",{className:"text-2xl font-bold",children:[s,"%"]}),u.jsx(Gv,{value:parseFloat(s),className:"mt-2"})]})]}),u.jsxs(Mt,{children:[u.jsxs(Et,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[u.jsx(Tt,{className:"text-sm font-medium",children:"Estimated Volume"}),u.jsx(Ky,{className:"h-4 w-4 text-muted-foreground"})]}),u.jsxs(At,{children:[u.jsxs("div",{className:"text-2xl font-bold",children:[r.estimatedVolume.toLocaleString()," m³"]}),u.jsxs("p",{className:"text-xs text-muted-foreground",children:["Avg depth: ",r.estimatedDepth,"m"]})]})]}),u.jsxs(Mt,{children:[u.jsxs(Et,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[u.jsx(Tt,{className:"text-sm font-medium",children:"Risk Assessment"}),u.jsx(ii,{className:"h-4 w-4 text-muted-foreground"})]}),u.jsxs(At,{children:[u.jsxs(Mn,{variant:r.riskLevel==="High"?"destructive":"secondary",className:"text-sm",children:[r.riskLevel," Risk"]}),u.jsxs("p",{className:"text-xs text-muted-foreground mt-2",children:["Last updated: ",r.lastAnalysisDate]})]})]})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[u.jsxs(Mt,{children:[u.jsxs(Et,{children:[u.jsx(Tt,{children:"Mining Activity Trends"}),u.jsx(On,{children:"Authorized vs Unauthorized mining over time"})]}),u.jsxs(At,{children:[u.jsx("div",{className:"h-80 flex items-end justify-between gap-2 p-4 border rounded-lg bg-gray-50",children:e.map((o,l)=>u.jsxs("div",{className:"flex flex-col items-center gap-2 flex-1",children:[u.jsxs("div",{className:"relative w-full h-48 flex flex-col justify-end",children:[u.jsx("div",{className:"w-full bg-green-500 rounded-t-sm",style:{height:`${o.authorized/400*100}%`},title:`Authorized: ${o.authorized} ha`}),u.jsx("div",{className:"w-full bg-red-500 rounded-t-sm",style:{height:`${o.illegal/80*100}%`},title:`Unauthorized: ${o.illegal} ha`})]}),u.jsx("span",{className:"text-xs text-gray-600",children:o.month})]},o.month))}),u.jsxs("div",{className:"flex justify-center gap-4 mt-4 text-sm",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("div",{className:"w-3 h-3 bg-green-500 rounded"}),u.jsx("span",{children:"Authorized"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("div",{className:"w-3 h-3 bg-red-500 rounded"}),u.jsx("span",{children:"Unauthorized"})]})]})]})]}),u.jsxs(Mt,{children:[u.jsxs(Et,{children:[u.jsx(Tt,{children:"Volume Extraction"}),u.jsx(On,{children:"Estimated mining volume over time"})]}),u.jsxs(At,{children:[u.jsx("div",{className:"h-80 flex items-end justify-between gap-2 p-4 border rounded-lg bg-gray-50",children:t.map((o,l)=>u.jsxs("div",{className:"flex flex-col items-center gap-2 flex-1",children:[u.jsx("div",{className:"relative w-full h-48 flex items-end",children:u.jsx("div",{className:"w-full bg-blue-500 rounded-t-sm",style:{height:`${o.volume/7e3*100}%`},title:`Volume: ${o.volume.toLocaleString()} m³`})}),u.jsx("span",{className:"text-xs text-gray-600",children:o.month})]},o.month))}),u.jsx("div",{className:"flex justify-center gap-4 mt-4 text-sm",children:u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("div",{className:"w-3 h-3 bg-blue-500 rounded"}),u.jsx("span",{children:"Volume (m³)"})]})})]})]})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:[u.jsxs(Mt,{children:[u.jsx(Et,{children:u.jsxs(Tt,{className:"flex items-center gap-2",children:[u.jsx(hc,{className:"h-4 w-4"}),"Boundary Analysis"]})}),u.jsxs(At,{className:"space-y-3",children:[u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-sm text-gray-600",children:"Within Boundary:"}),u.jsxs("span",{className:"font-medium text-green-600",children:[r.authorizedArea," ha"]})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-sm text-gray-600",children:"Outside Boundary:"}),u.jsxs("span",{className:"font-medium text-red-600",children:[r.illegalArea," ha"]})]}),u.jsxs("div",{className:"flex justify-between border-t pt-2",children:[u.jsx("span",{className:"text-sm font-medium",children:"Total Area:"}),u.jsxs("span",{className:"font-bold",children:[r.totalMiningArea," ha"]})]})]})]}),u.jsxs(Mt,{children:[u.jsx(Et,{children:u.jsxs(Tt,{className:"flex items-center gap-2",children:[u.jsx(fc,{className:"h-4 w-4"}),"Depth Analysis"]})}),u.jsxs(At,{className:"space-y-3",children:[u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-sm text-gray-600",children:"Average Depth:"}),u.jsxs("span",{className:"font-medium",children:[r.estimatedDepth," m"]})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-sm text-gray-600",children:"Max Depth:"}),u.jsxs("span",{className:"font-medium",children:[(r.estimatedDepth*1.8).toFixed(1)," m"]})]}),u.jsxs("div",{className:"flex justify-between border-t pt-2",children:[u.jsx("span",{className:"text-sm font-medium",children:"Est. Volume:"}),u.jsxs("span",{className:"font-bold",children:[r.estimatedVolume.toLocaleString()," m³"]})]})]})]}),u.jsxs(Mt,{children:[u.jsx(Et,{children:u.jsxs(Tt,{className:"flex items-center gap-2",children:[u.jsx(kv,{className:"h-4 w-4"}),"Last Analysis"]})}),u.jsxs(At,{className:"space-y-3",children:[u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-sm text-gray-600",children:"Date:"}),u.jsx("span",{className:"font-medium",children:r.lastAnalysisDate})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-sm text-gray-600",children:"Data Source:"}),u.jsx("span",{className:"font-medium",children:"Satellite EO/SAR"})]}),u.jsxs("div",{className:"flex justify-between border-t pt-2",children:[u.jsx("span",{className:"text-sm font-medium",children:"Status:"}),u.jsx(Mn,{variant:"secondary",children:"Processed"})]})]})]})]})]})}function kr({className:r,type:e,...t}){return u.jsx("input",{type:e,"data-slot":"input",className:fn("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",r),...t})}var ZS="Label",Wv=le.forwardRef((r,e)=>u.jsx(Yn.label,{...r,ref:e,onMouseDown:t=>{t.target.closest("button, input, select, textarea")||(r.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));Wv.displayName=ZS;var QS=Wv;function pi({className:r,...e}){return u.jsx(QS,{"data-slot":"label",className:fn("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",r),...e})}function JS({onDataUploaded:r}){const[e,t]=le.useState(0),[s,o]=le.useState(!1),[l,d]=le.useState([]),f=async(m,v)=>{const x=m.target.files;if(!x?.length)return;o(!0);for(let M=0;M<=100;M+=10)t(M),await new Promise(w=>setTimeout(w,200));const y={name:x[0].name,type:v,size:x[0].size,uploadedAt:new Date().toISOString(),status:"processed"};d(M=>[...M,y]),setTimeout(()=>{o(!1),t(0);const M={totalMiningArea:420.5+Math.random()*100,authorizedArea:350.2+Math.random()*50,illegalArea:45.3+Math.random()*25,estimatedDepth:12.5+Math.random()*10,estimatedVolume:6e3+Math.random()*2e3,lastAnalysisDate:new Date().toISOString().split("T")[0],riskLevel:Math.random()>.5?"High":"Medium"};r(M)},1e3)},p={satellite:[".tif",".tiff",".jp2",".hdf"],boundaries:[".shp",".kml",".kmz",".geojson"],dem:[".tif",".tiff",".hgt",".dem"]};return u.jsx("div",{className:"space-y-6",children:u.jsxs("div",{className:"grid gap-4",children:[u.jsxs(Mt,{children:[u.jsxs(Et,{children:[u.jsxs(Tt,{className:"flex items-center gap-2",children:[u.jsx(Xf,{className:"h-5 w-5"}),"Data Upload & Processing"]}),u.jsx(On,{children:"Upload satellite imagery, DEM data, and boundary files for automated mining detection analysis"})]}),u.jsx(At,{children:u.jsxs(_a,{defaultValue:"satellite",className:"w-full",children:[u.jsxs(ya,{className:"grid w-full grid-cols-3",children:[u.jsx(rn,{value:"satellite",children:"Satellite Data"}),u.jsx(rn,{value:"boundaries",children:"Boundaries"}),u.jsx(rn,{value:"dem",children:"DEM Data"})]}),u.jsxs(_n,{value:"satellite",className:"space-y-4",children:[u.jsxs("div",{className:"border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors",children:[u.jsx(Xd,{className:"mx-auto h-12 w-12 text-gray-400 mb-4"}),u.jsxs("div",{className:"space-y-2",children:[u.jsx(pi,{htmlFor:"satellite-upload",className:"text-lg font-medium cursor-pointer",children:"Upload Satellite Imagery"}),u.jsx("p",{className:"text-sm text-gray-500",children:"EO/SAR data in TIFF, JP2, or HDF format"}),u.jsx(kr,{id:"satellite-upload",type:"file",accept:p.satellite.join(","),onChange:m=>f(m,"satellite"),className:"mt-4"})]})]}),u.jsxs("div",{className:"text-xs text-gray-500",children:["Supported formats: ",p.satellite.join(", ")]})]}),u.jsxs(_n,{value:"boundaries",className:"space-y-4",children:[u.jsxs("div",{className:"border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors",children:[u.jsx(mo,{className:"mx-auto h-12 w-12 text-gray-400 mb-4"}),u.jsxs("div",{className:"space-y-2",children:[u.jsx(pi,{htmlFor:"boundary-upload",className:"text-lg font-medium cursor-pointer",children:"Upload Boundary Files"}),u.jsx("p",{className:"text-sm text-gray-500",children:"Mining lease boundaries in Shapefile or KML format"}),u.jsx(kr,{id:"boundary-upload",type:"file",accept:p.boundaries.join(","),onChange:m=>f(m,"boundary"),className:"mt-4"})]})]}),u.jsxs("div",{className:"text-xs text-gray-500",children:["Supported formats: ",p.boundaries.join(", ")]})]}),u.jsxs(_n,{value:"dem",className:"space-y-4",children:[u.jsxs("div",{className:"border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors",children:[u.jsx(Zm,{className:"mx-auto h-12 w-12 text-gray-400 mb-4"}),u.jsxs("div",{className:"space-y-2",children:[u.jsx(pi,{htmlFor:"dem-upload",className:"text-lg font-medium cursor-pointer",children:"Upload DEM Data"}),u.jsx("p",{className:"text-sm text-gray-500",children:"Digital Elevation Model for depth and volume calculation"}),u.jsx(kr,{id:"dem-upload",type:"file",accept:p.dem.join(","),onChange:m=>f(m,"dem"),className:"mt-4"})]})]}),u.jsxs("div",{className:"text-xs text-gray-500",children:["Supported formats: ",p.dem.join(", ")]})]})]})})]}),s&&u.jsxs(Mt,{children:[u.jsx(Et,{children:u.jsxs(Tt,{className:"flex items-center gap-2",children:[u.jsx(cS,{className:"h-5 w-5 animate-spin"}),"Processing Data"]})}),u.jsx(At,{children:u.jsxs("div",{className:"space-y-4",children:[u.jsx(Gv,{value:e,className:"w-full"}),u.jsxs("div",{className:"flex justify-between text-sm text-gray-600",children:[u.jsx("span",{children:"Analyzing satellite imagery and DEM data..."}),u.jsxs("span",{children:[e,"%"]})]}),u.jsxs(ho,{children:[u.jsx(ii,{className:"h-4 w-4"}),u.jsx(po,{children:"Processing may take several minutes depending on data size and resolution."})]})]})})]}),l.length>0&&u.jsxs(Mt,{children:[u.jsx(Et,{children:u.jsxs(Tt,{className:"flex items-center gap-2",children:[u.jsx(aS,{className:"h-5 w-5"}),"Uploaded Files"]})}),u.jsx(At,{children:u.jsx("div",{className:"space-y-3",children:l.map((m,v)=>u.jsxs("div",{className:"flex items-center justify-between p-3 border rounded-lg",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[m.type==="satellite"&&u.jsx(Xd,{className:"h-5 w-5 text-blue-600"}),m.type==="boundary"&&u.jsx(mo,{className:"h-5 w-5 text-green-600"}),m.type==="dem"&&u.jsx(Zm,{className:"h-5 w-5 text-orange-600"}),u.jsxs("div",{children:[u.jsx("p",{className:"font-medium",children:m.name}),u.jsxs("p",{className:"text-sm text-gray-500",children:[m.type," • ",(m.size/1024/1024).toFixed(2)," MB"]})]})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(ar,{className:"h-5 w-5 text-green-600"}),u.jsx("span",{className:"text-sm text-green-600 font-medium",children:"Processed"})]})]},v))})})]}),u.jsxs(Mt,{children:[u.jsxs(Et,{children:[u.jsx(Tt,{children:"Processing Pipeline"}),u.jsx(On,{children:"Automated analysis steps performed on uploaded data"})]}),u.jsx(At,{children:u.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[u.jsxs("div",{className:"space-y-2",children:[u.jsx("h4",{className:"font-medium",children:"Image Processing"}),u.jsxs("ul",{className:"text-sm text-gray-600 space-y-1",children:[u.jsx("li",{children:"• Atmospheric correction"}),u.jsx("li",{children:"• Band combination and enhancement"}),u.jsx("li",{children:"• Noise reduction and filtering"}),u.jsx("li",{children:"• Geometric correction"})]})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsx("h4",{className:"font-medium",children:"Mining Detection"}),u.jsxs("ul",{className:"text-sm text-gray-600 space-y-1",children:[u.jsx("li",{children:"• Spectral analysis for excavated areas"}),u.jsx("li",{children:"• Change detection algorithms"}),u.jsx("li",{children:"• Boundary comparison analysis"}),u.jsx("li",{children:"• Volume estimation using Simpson's method"})]})]})]})})]})]})})}const eM="modulepreload",tM=function(r){return"/"+r},eg={},nM=function(e,t,s){let o=Promise.resolve();if(t&&t.length>0){let d=function(m){return Promise.all(m.map(v=>Promise.resolve(v).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),p=f?.nonce||f?.getAttribute("nonce");o=d(t.map(m=>{if(m=tM(m),m in eg)return;eg[m]=!0;const v=m.endsWith(".css"),x=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${x}`))return;const y=document.createElement("link");if(y.rel=v?"stylesheet":eM,v||(y.as="script"),y.crossOrigin="",y.href=m,p&&y.setAttribute("nonce",p),document.head.appendChild(y),v)return new Promise((M,w)=>{y.addEventListener("load",M),y.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${m}`)))})}))}function l(d){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=d,window.dispatchEvent(f),!f.defaultPrevented)throw d}return o.then(d=>{for(const f of d||[])f.status==="rejected"&&l(f.reason);return e().catch(l)})},iM=Wf("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function Rt({className:r,variant:e,size:t,asChild:s=!1,...o}){const l=s?iv:"button";return u.jsx(l,{"data-slot":"button",className:fn(iM({variant:e,size:t,className:r})),...o})}function rM({analysisData:r}){const e=le.useRef(null),t=le.useRef(null),[s,o]=le.useState("satellite"),[l,d]=le.useState({mining:!0,boundaries:!0,illegal:!0,dem:!1}),[f,p]=le.useState(null),[m,v]=le.useState({lat:23.2599,lng:77.4126}),[x,y]=le.useState(12),[M,w]=le.useState(!0),[T,S]=le.useState(null),_=[{id:1,name:"Mining Site Alpha",type:"authorized",coordinates:[23.2599,77.4126],area:125.5,depth:8.2,status:"Active",lastUpdate:"2024-12-28"},{id:2,name:"Mining Site Beta",type:"illegal",coordinates:[23.265,77.42],area:45.3,depth:12.1,status:"Violation",lastUpdate:"2024-12-27"},{id:3,name:"Mining Site Gamma",type:"authorized",coordinates:[23.25,77.405],area:87.9,depth:6.5,status:"Active",lastUpdate:"2024-12-26"}];le.useEffect(()=>(e.current&&!t.current&&(w(!0),S(null),nM(()=>import("./leaflet-src-5h-5BOJc.js").then(P=>P.l),[]).then(P=>{try{const k=P.map(e.current).setView([m.lat,m.lng],x),z=P.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"© Esri © OpenStreetMap contributors",maxZoom:18}),N=P.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",{attribution:"© Esri © OpenStreetMap contributors",maxZoom:18}),C=P.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"© Esri © OpenStreetMap contributors",maxZoom:18}),V=P.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap contributors",maxZoom:19});V.addTo(k),t.current={map:k,layers:{satellite:z,terrain:N,hybrid:C,osm:V},markers:[],polygons:[]},_.forEach($=>{const te=$.type==="illegal"?"#ef4444":"#22c55e",Z=P.divIcon({html:`
                <div style="
                  background-color: ${te};
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  border: 3px solid white;
                  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                ">
                  <div style="
                    background-color: white;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                  "></div>
                </div>
              `,className:"custom-mining-marker",iconSize:[20,20],iconAnchor:[10,10]}),ce=P.marker([$.coordinates[0],$.coordinates[1]],{icon:Z}).addTo(k).bindPopup(`
                <div style="min-width: 200px;">
                  <h3 style="margin: 0 0 8px 0; font-weight: 600;">${$.name}</h3>
                  <div style="margin-bottom: 4px;">
                    <span style="
                      background-color: ${$.type==="illegal"?"#fecaca":"#bbf7d0"};
                      color: ${$.type==="illegal"?"#dc2626":"#166534"};
                      padding: 2px 6px;
                      border-radius: 4px;
                      font-size: 12px;
                      font-weight: 500;
                    ">${$.status}</span>
                  </div>
                  <div style="font-size: 14px; line-height: 1.4;">
                    <div><strong>Area:</strong> ${$.area} hectares</div>
                    <div><strong>Depth:</strong> ${$.depth}m</div>
                    <div><strong>Last Updated:</strong> ${$.lastUpdate}</div>
                  </div>
                </div>
              `);t.current.markers.push({marker:ce,area:$}),ce.on("click",()=>{p($)})}),_.forEach($=>{const te=[[$.coordinates[0]-.002,$.coordinates[1]-.002],[$.coordinates[0]+.002,$.coordinates[1]+.002]],Z=P.rectangle(te,{color:$.type==="illegal"?"#ef4444":"#22c55e",weight:2,fillOpacity:.1});l.boundaries&&Z.addTo(k),t.current.polygons.push({polygon:Z,area:$})}),k.on("move",()=>{const $=k.getCenter();v({lat:$.lat,lng:$.lng})}),k.on("zoom",()=>{y(k.getZoom())}),k.whenReady(()=>{w(!1),console.log("Map loaded successfully")}),setTimeout(()=>{k.invalidateSize()},100)}catch(k){console.error("Error initializing map:",k),S("Failed to initialize map"),w(!1)}}).catch(P=>{console.error("Error loading Leaflet:",P),S("Failed to load map library"),w(!1)})),()=>{t.current?.map&&(t.current.map.remove(),t.current=null)}),[]),le.useEffect(()=>{if(t.current){const{map:P,layers:k}=t.current;switch(Object.values(k).forEach(z=>{P.removeLayer(z)}),s){case"satellite":k.satellite.addTo(P);break;case"terrain":k.terrain.addTo(P);break;case"hybrid":k.satellite.addTo(P);break;default:k.osm.addTo(P);break}}},[s]),le.useEffect(()=>{t.current?.markers&&t.current?.polygons&&(t.current.markers.forEach(({marker:P,area:k})=>{k.type==="illegal"&&!l.illegal||k.type==="authorized"&&!l.mining?t.current.map.removeLayer(P):t.current.map.hasLayer(P)||P.addTo(t.current.map)}),t.current.polygons.forEach(({polygon:P,area:k})=>{l.boundaries?t.current.map.hasLayer(P)||P.addTo(t.current.map):t.current.map.removeLayer(P)}))},[l]);const F=()=>{t.current?.map&&t.current.map.zoomIn()},D=()=>{t.current?.map&&t.current.map.zoomOut()},R=()=>{t.current?.map&&t.current.map.setView([23.2599,77.4126],12)},j=P=>{p(P),t.current?.map&&t.current.map.setView([P.coordinates[0],P.coordinates[1]],15)};return u.jsx("div",{className:"space-y-6",children:u.jsxs(_a,{defaultValue:"map",className:"w-full",children:[u.jsxs(ya,{className:"grid w-full grid-cols-3",children:[u.jsx(rn,{value:"map",children:"Interactive Map"}),u.jsx(rn,{value:"layers",children:"Layer Control"}),u.jsx(rn,{value:"analysis",children:"Site Analysis"})]}),u.jsx(_n,{value:"map",className:"space-y-4",children:u.jsxs("div",{className:"grid gap-6 md:grid-cols-4",children:[u.jsx("div",{className:"md:col-span-3",children:u.jsxs(Mt,{children:[u.jsx(Et,{children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsxs(Tt,{className:"flex items-center gap-2",children:[u.jsx(mo,{className:"h-5 w-5"}),"Mining Activity Map"]}),u.jsx(On,{children:"Real-time satellite imagery with mining area overlays"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs(Rt,{size:"sm",variant:s==="satellite"?"default":"outline",onClick:()=>o("satellite"),children:[u.jsx(Xd,{className:"h-4 w-4 mr-1"}),"Satellite"]}),u.jsxs(Rt,{size:"sm",variant:s==="terrain"?"default":"outline",onClick:()=>o("terrain"),children:[u.jsx(da,{className:"h-4 w-4 mr-1"}),"Terrain"]}),u.jsxs(Rt,{size:"sm",variant:s==="hybrid"?"default":"outline",onClick:()=>o("hybrid"),children:[u.jsx(fc,{className:"h-4 w-4 mr-1"}),"Hybrid"]})]})]})}),u.jsx(At,{children:u.jsxs("div",{className:"relative",children:[u.jsx("div",{ref:e,className:"w-full h-96 rounded-lg border overflow-hidden bg-gray-100",style:{zIndex:1,minHeight:"384px"}}),M&&u.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg",children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"}),u.jsx("p",{className:"text-sm text-gray-600",children:"Loading map..."})]})}),T&&u.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-red-50 rounded-lg",children:u.jsxs("div",{className:"text-center p-4",children:[u.jsx("p",{className:"text-red-600 font-medium mb-2",children:"Map Error"}),u.jsx("p",{className:"text-sm text-red-500",children:T})]})}),u.jsxs("div",{className:"absolute top-4 right-4 flex flex-col gap-2",style:{zIndex:1e3},children:[u.jsx(Rt,{size:"sm",variant:"secondary",onClick:F,children:u.jsx(Ov,{className:"h-4 w-4"})}),u.jsx(Rt,{size:"sm",variant:"secondary",onClick:D,children:u.jsx(zv,{className:"h-4 w-4"})}),u.jsx(Rt,{size:"sm",variant:"secondary",onClick:R,children:u.jsx(AS,{className:"h-4 w-4"})})]}),u.jsxs("div",{className:"absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm",style:{zIndex:1e3},children:[m.lat.toFixed(4),"°N, ",m.lng.toFixed(4),"°E | Zoom: ",x]}),u.jsx("div",{className:"absolute bottom-4 right-4 bg-white/90 px-2 py-1 rounded text-xs border",style:{zIndex:1e3},children:u.jsxs("div",{className:"flex items-center gap-1",children:[u.jsx("div",{className:"w-8 h-0.5 bg-black"}),u.jsx("span",{children:"1 km"})]})})]})})]})}),u.jsxs("div",{className:"space-y-4",children:[u.jsxs(Mt,{children:[u.jsx(Et,{children:u.jsxs(Tt,{className:"flex items-center gap-2",children:[u.jsx(hc,{className:"h-5 w-5"}),"Selected Site"]})}),u.jsx(At,{children:f?u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"font-medium",children:f.name}),u.jsx(Mn,{variant:f.type==="illegal"?"destructive":"secondary",className:"mt-1",children:f.status})]}),u.jsxs("div",{className:"space-y-2 text-sm",children:[u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-gray-600",children:"Area:"}),u.jsxs("span",{children:[f.area," hectares"]})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-gray-600",children:"Depth:"}),u.jsxs("span",{children:[f.depth,"m"]})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-gray-600",children:"Last Update:"}),u.jsx("span",{children:f.lastUpdate})]})]}),u.jsx(Rt,{size:"sm",className:"w-full",onClick:()=>j(f),children:"Center on Map"})]}):u.jsx("p",{className:"text-gray-500 text-sm",children:"Click on a mining site to view details"})})]}),u.jsxs(Mt,{children:[u.jsx(Et,{children:u.jsx(Tt,{children:"Legend"})}),u.jsxs(At,{className:"space-y-2",children:[u.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[u.jsx("div",{className:"w-4 h-4 rounded-full bg-green-500 border-2 border-white"}),u.jsx("span",{children:"Authorized Mining"})]}),u.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[u.jsx("div",{className:"w-4 h-4 rounded-full bg-red-500 border-2 border-white"}),u.jsx("span",{children:"Illegal Mining"})]}),u.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[u.jsx("div",{className:"w-4 h-1 bg-green-500/30 border border-green-500"}),u.jsx("span",{children:"Authorized Boundary"})]}),u.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[u.jsx("div",{className:"w-4 h-1 bg-red-500/30 border border-red-500"}),u.jsx("span",{children:"Violation Area"})]})]})]})]})]})}),u.jsx(_n,{value:"layers",className:"space-y-4",children:u.jsxs(Mt,{children:[u.jsxs(Et,{children:[u.jsxs(Tt,{className:"flex items-center gap-2",children:[u.jsx(fc,{className:"h-5 w-5"}),"Layer Controls"]}),u.jsx(On,{children:"Toggle visibility of different map layers"})]}),u.jsx(At,{className:"space-y-4",children:u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(da,{className:"h-4 w-4 text-green-600"}),u.jsx("span",{children:"Mining Areas"})]}),u.jsx("div",{className:"flex items-center gap-2",children:u.jsx(Rt,{size:"sm",variant:"outline",onClick:()=>d(P=>({...P,mining:!P.mining})),children:l.mining?u.jsx(sc,{className:"h-4 w-4"}):u.jsx(cd,{className:"h-4 w-4"})})})]}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(ii,{className:"h-4 w-4 text-red-600"}),u.jsx("span",{children:"Violation Areas"})]}),u.jsx("div",{className:"flex items-center gap-2",children:u.jsx(Rt,{size:"sm",variant:"outline",onClick:()=>d(P=>({...P,illegal:!P.illegal})),children:l.illegal?u.jsx(sc,{className:"h-4 w-4"}):u.jsx(cd,{className:"h-4 w-4"})})})]}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(hc,{className:"h-4 w-4 text-blue-600"}),u.jsx("span",{children:"Boundaries"})]}),u.jsx("div",{className:"flex items-center gap-2",children:u.jsx(Rt,{size:"sm",variant:"outline",onClick:()=>d(P=>({...P,boundaries:!P.boundaries})),children:l.boundaries?u.jsx(sc,{className:"h-4 w-4"}):u.jsx(cd,{className:"h-4 w-4"})})})]})]})})]})}),u.jsx(_n,{value:"analysis",className:"space-y-4",children:u.jsx("div",{className:"grid gap-4 md:grid-cols-2",children:_.map(P=>u.jsxs(Mt,{className:"cursor-pointer hover:shadow-md transition-shadow",children:[u.jsx(Et,{children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx(Tt,{className:"text-base",children:P.name}),u.jsx(Mn,{variant:P.type==="illegal"?"destructive":"secondary",children:P.status})]})}),u.jsxs(At,{children:[u.jsxs("div",{className:"space-y-2 text-sm",children:[u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{children:"Area:"}),u.jsxs("span",{children:[P.area," hectares"]})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{children:"Depth:"}),u.jsxs("span",{children:[P.depth,"m"]})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{children:"Volume:"}),u.jsxs("span",{children:[(P.area*P.depth*100).toLocaleString()," m³"]})]})]}),u.jsx(Rt,{size:"sm",className:"w-full mt-3",onClick:()=>j(P),children:"View on Map"})]})]},P.id))})})]})})}function Xv(r,[e,t]){return Math.min(t,Math.max(e,r))}function sM(r){const e=le.useRef({value:r,previous:r});return le.useMemo(()=>(e.current.value!==r&&(e.current.previous=e.current.value,e.current.value=r),e.current.previous),[r])}function aM(r){const[e,t]=le.useState(void 0);return fo(()=>{if(r){t({width:r.offsetWidth,height:r.offsetHeight});const s=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const l=o[0];let d,f;if("borderBoxSize"in l){const p=l.borderBoxSize,m=Array.isArray(p)?p[0]:p;d=m.inlineSize,f=m.blockSize}else d=r.offsetWidth,f=r.offsetHeight;t({width:d,height:f})});return s.observe(r,{box:"border-box"}),()=>s.unobserve(r)}else t(void 0)},[r]),e}var $v=["PageUp","PageDown"],qv=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],Yv={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},Sa="Slider",[$d,oM,lM]=rv(Sa),[Kv]=So(Sa,[lM]),[cM,yc]=Kv(Sa),Zv=le.forwardRef((r,e)=>{const{name:t,min:s=0,max:o=100,step:l=1,orientation:d="horizontal",disabled:f=!1,minStepsBetweenThumbs:p=0,defaultValue:m=[s],value:v,onValueChange:x=()=>{},onValueCommit:y=()=>{},inverted:M=!1,form:w,...T}=r,S=le.useRef(new Set),_=le.useRef(0),D=d==="horizontal"?uM:dM,[R=[],j]=jf({prop:v,defaultProp:m,onChange:V=>{[...S.current][_.current]?.focus(),x(V)}}),P=le.useRef(R);function k(V){const $=gM(R,V);C(V,$)}function z(V){C(V,_.current)}function N(){const V=P.current[_.current];R[_.current]!==V&&y(R)}function C(V,$,{commit:te}={commit:!1}){const Z=yM(l),ce=SM(Math.round((V-s)/l)*l+s,Z),K=Xv(ce,[s,o]);j((fe=[])=>{const I=pM(fe,K,$);if(_M(I,p*l)){_.current=I.indexOf(K);const ae=String(I)!==String(fe);return ae&&te&&y(I),ae?I:fe}else return fe})}return u.jsx(cM,{scope:r.__scopeSlider,name:t,disabled:f,min:s,max:o,valueIndexToChangeRef:_,thumbs:S.current,values:R,orientation:d,form:w,children:u.jsx($d.Provider,{scope:r.__scopeSlider,children:u.jsx($d.Slot,{scope:r.__scopeSlider,children:u.jsx(D,{"aria-disabled":f,"data-disabled":f?"":void 0,...T,ref:e,onPointerDown:zn(T.onPointerDown,()=>{f||(P.current=R)}),min:s,max:o,inverted:M,onSlideStart:f?void 0:k,onSlideMove:f?void 0:z,onSlideEnd:f?void 0:N,onHomeKeyDown:()=>!f&&C(s,0,{commit:!0}),onEndKeyDown:()=>!f&&C(o,R.length-1,{commit:!0}),onStepKeyDown:({event:V,direction:$})=>{if(!f){const ce=$v.includes(V.key)||V.shiftKey&&qv.includes(V.key)?10:1,K=_.current,fe=R[K],I=l*ce*$;C(fe+I,K,{commit:!0})}}})})})})});Zv.displayName=Sa;var[Qv,Jv]=Kv(Sa,{startEdge:"left",endEdge:"right",size:"width",direction:1}),uM=le.forwardRef((r,e)=>{const{min:t,max:s,dir:o,inverted:l,onSlideStart:d,onSlideMove:f,onSlideEnd:p,onStepKeyDown:m,...v}=r,[x,y]=le.useState(null),M=Bi(e,D=>y(D)),w=le.useRef(void 0),T=Vf(o),S=T==="ltr",_=S&&!l||!S&&l;function F(D){const R=w.current||x.getBoundingClientRect(),j=[0,R.width],k=Yf(j,_?[t,s]:[s,t]);return w.current=R,k(D-R.left)}return u.jsx(Qv,{scope:r.__scopeSlider,startEdge:_?"left":"right",endEdge:_?"right":"left",direction:_?1:-1,size:"width",children:u.jsx(ex,{dir:T,"data-orientation":"horizontal",...v,ref:M,style:{...v.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:D=>{const R=F(D.clientX);d?.(R)},onSlideMove:D=>{const R=F(D.clientX);f?.(R)},onSlideEnd:()=>{w.current=void 0,p?.()},onStepKeyDown:D=>{const j=Yv[_?"from-left":"from-right"].includes(D.key);m?.({event:D,direction:j?-1:1})}})})}),dM=le.forwardRef((r,e)=>{const{min:t,max:s,inverted:o,onSlideStart:l,onSlideMove:d,onSlideEnd:f,onStepKeyDown:p,...m}=r,v=le.useRef(null),x=Bi(e,v),y=le.useRef(void 0),M=!o;function w(T){const S=y.current||v.current.getBoundingClientRect(),_=[0,S.height],D=Yf(_,M?[s,t]:[t,s]);return y.current=S,D(T-S.top)}return u.jsx(Qv,{scope:r.__scopeSlider,startEdge:M?"bottom":"top",endEdge:M?"top":"bottom",size:"height",direction:M?1:-1,children:u.jsx(ex,{"data-orientation":"vertical",...m,ref:x,style:{...m.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:T=>{const S=w(T.clientY);l?.(S)},onSlideMove:T=>{const S=w(T.clientY);d?.(S)},onSlideEnd:()=>{y.current=void 0,f?.()},onStepKeyDown:T=>{const _=Yv[M?"from-bottom":"from-top"].includes(T.key);p?.({event:T,direction:_?-1:1})}})})}),ex=le.forwardRef((r,e)=>{const{__scopeSlider:t,onSlideStart:s,onSlideMove:o,onSlideEnd:l,onHomeKeyDown:d,onEndKeyDown:f,onStepKeyDown:p,...m}=r,v=yc(Sa,t);return u.jsx(Yn.span,{...m,ref:e,onKeyDown:zn(r.onKeyDown,x=>{x.key==="Home"?(d(x),x.preventDefault()):x.key==="End"?(f(x),x.preventDefault()):$v.concat(qv).includes(x.key)&&(p(x),x.preventDefault())}),onPointerDown:zn(r.onPointerDown,x=>{const y=x.target;y.setPointerCapture(x.pointerId),x.preventDefault(),v.thumbs.has(y)?y.focus():s(x)}),onPointerMove:zn(r.onPointerMove,x=>{x.target.hasPointerCapture(x.pointerId)&&o(x)}),onPointerUp:zn(r.onPointerUp,x=>{const y=x.target;y.hasPointerCapture(x.pointerId)&&(y.releasePointerCapture(x.pointerId),l(x))})})}),tx="SliderTrack",nx=le.forwardRef((r,e)=>{const{__scopeSlider:t,...s}=r,o=yc(tx,t);return u.jsx(Yn.span,{"data-disabled":o.disabled?"":void 0,"data-orientation":o.orientation,...s,ref:e})});nx.displayName=tx;var qd="SliderRange",ix=le.forwardRef((r,e)=>{const{__scopeSlider:t,...s}=r,o=yc(qd,t),l=Jv(qd,t),d=le.useRef(null),f=Bi(e,d),p=o.values.length,m=o.values.map(y=>ax(y,o.min,o.max)),v=p>1?Math.min(...m):0,x=100-Math.max(...m);return u.jsx(Yn.span,{"data-orientation":o.orientation,"data-disabled":o.disabled?"":void 0,...s,ref:f,style:{...r.style,[l.startEdge]:v+"%",[l.endEdge]:x+"%"}})});ix.displayName=qd;var Yd="SliderThumb",rx=le.forwardRef((r,e)=>{const t=oM(r.__scopeSlider),[s,o]=le.useState(null),l=Bi(e,f=>o(f)),d=le.useMemo(()=>s?t().findIndex(f=>f.ref.current===s):-1,[t,s]);return u.jsx(fM,{...r,ref:l,index:d})}),fM=le.forwardRef((r,e)=>{const{__scopeSlider:t,index:s,name:o,...l}=r,d=yc(Yd,t),f=Jv(Yd,t),[p,m]=le.useState(null),v=Bi(e,F=>m(F)),x=p?d.form||!!p.closest("form"):!0,y=aM(p),M=d.values[s],w=M===void 0?0:ax(M,d.min,d.max),T=mM(s,d.values.length),S=y?.[f.size],_=S?vM(S,w,f.direction):0;return le.useEffect(()=>{if(p)return d.thumbs.add(p),()=>{d.thumbs.delete(p)}},[p,d.thumbs]),u.jsxs("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[f.startEdge]:`calc(${w}% + ${_}px)`},children:[u.jsx($d.ItemSlot,{scope:r.__scopeSlider,children:u.jsx(Yn.span,{role:"slider","aria-label":r["aria-label"]||T,"aria-valuemin":d.min,"aria-valuenow":M,"aria-valuemax":d.max,"aria-orientation":d.orientation,"data-orientation":d.orientation,"data-disabled":d.disabled?"":void 0,tabIndex:d.disabled?void 0:0,...l,ref:v,style:M===void 0?{display:"none"}:r.style,onFocus:zn(r.onFocus,()=>{d.valueIndexToChangeRef.current=s})})}),x&&u.jsx(sx,{name:o??(d.name?d.name+(d.values.length>1?"[]":""):void 0),form:d.form,value:M},s)]})});rx.displayName=Yd;var hM="RadioBubbleInput",sx=le.forwardRef(({__scopeSlider:r,value:e,...t},s)=>{const o=le.useRef(null),l=Bi(o,s),d=sM(e);return le.useEffect(()=>{const f=o.current;if(!f)return;const p=window.HTMLInputElement.prototype,v=Object.getOwnPropertyDescriptor(p,"value").set;if(d!==e&&v){const x=new Event("input",{bubbles:!0});v.call(f,e),f.dispatchEvent(x)}},[d,e]),u.jsx(Yn.input,{style:{display:"none"},...t,ref:l,defaultValue:e})});sx.displayName=hM;function pM(r=[],e,t){const s=[...r];return s[t]=e,s.sort((o,l)=>o-l)}function ax(r,e,t){const l=100/(t-e)*(r-e);return Xv(l,[0,100])}function mM(r,e){return e>2?`Value ${r+1} of ${e}`:e===2?["Minimum","Maximum"][r]:void 0}function gM(r,e){if(r.length===1)return 0;const t=r.map(o=>Math.abs(o-e)),s=Math.min(...t);return t.indexOf(s)}function vM(r,e,t){const s=r/2,l=Yf([0,50],[0,s]);return(s-l(e)*t)*t}function xM(r){return r.slice(0,-1).map((e,t)=>r[t+1]-e)}function _M(r,e){if(e>0){const t=xM(r);return Math.min(...t)>=e}return!0}function Yf(r,e){return t=>{if(r[0]===r[1]||e[0]===e[1])return e[0];const s=(e[1]-e[0])/(r[1]-r[0]);return e[0]+s*(t-r[0])}}function yM(r){return(String(r).split(".")[1]||"").length}function SM(r,e){const t=Math.pow(10,e);return Math.round(r*t)/t}var MM=Zv,EM=nx,wM=ix,TM=rx;function tg({className:r,defaultValue:e,value:t,min:s=0,max:o=100,...l}){const d=le.useMemo(()=>Array.isArray(t)?t:Array.isArray(e)?e:[s,o],[t,e,s,o]);return u.jsxs(MM,{"data-slot":"slider",defaultValue:e,value:t,min:s,max:o,className:fn("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",r),...l,children:[u.jsx(EM,{"data-slot":"slider-track",className:fn("bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-4 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"),children:u.jsx(wM,{"data-slot":"slider-range",className:fn("bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")})}),Array.from({length:d.length},(f,p)=>u.jsx(TM,{"data-slot":"slider-thumb",className:"border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"},p))]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kf="180",AM=0,ng=1,bM=2,ox=1,lx=2,rr=3,Br=0,$n=1,Ui=2,Or=0,ca=1,ig=2,rg=3,sg=4,RM=5,hs=100,CM=101,NM=102,PM=103,DM=104,LM=200,IM=201,UM=202,FM=203,Kd=204,Zd=205,kM=206,OM=207,zM=208,BM=209,jM=210,VM=211,HM=212,GM=213,WM=214,Qd=0,Jd=1,ef=2,fa=3,tf=4,nf=5,rf=6,sf=7,Sc=0,XM=1,$M=2,zr=0,qM=1,YM=2,KM=3,ZM=4,QM=5,JM=6,eE=7,cx=300,ha=301,pa=302,af=303,of=304,Mc=306,lf=1e3,gs=1001,cf=1002,Ri=1003,tE=1004,kl=1005,Fi=1006,ud=1007,vs=1008,ji=1009,ux=1010,dx=1011,go=1012,Zf=1013,xs=1014,or=1015,Eo=1016,Qf=1017,Jf=1018,vo=1020,fx=35902,hx=35899,px=1021,mx=1022,bi=1023,xo=1026,_o=1027,gx=1028,eh=1029,vx=1030,th=1031,nh=1033,ac=33776,oc=33777,lc=33778,cc=33779,uf=35840,df=35841,ff=35842,hf=35843,pf=36196,mf=37492,gf=37496,vf=37808,xf=37809,_f=37810,yf=37811,Sf=37812,Mf=37813,Ef=37814,wf=37815,Tf=37816,Af=37817,bf=37818,Rf=37819,Cf=37820,Nf=37821,Pf=36492,Df=36494,Lf=36495,If=36283,Uf=36284,Ff=36285,kf=36286,nE=3200,iE=3201,ih=0,rE=1,Fr="",hi="srgb",ma="srgb-linear",mc="linear",jt="srgb",qs=7680,ag=519,sE=512,aE=513,oE=514,xx=515,lE=516,cE=517,uE=518,dE=519,og=35044,lg="300 es",ki=2e3,gc=2001;class Ma{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const o=s[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,d=o.length;l<d;l++)o[l].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dd=Math.PI/180,Of=180/Math.PI;function wo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[t&63|128]+Nn[t>>8&255]+"-"+Nn[t>>16&255]+Nn[t>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function wt(r,e,t){return Math.max(e,Math.min(t,r))}function fE(r,e){return(r%e+e)%e}function fd(r,e,t){return(1-t)*r+t*e}function so(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Xn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class mt{constructor(e=0,t=0){mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(wt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(wt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,d=this.y-e.y;return this.x=l*s-d*o+e.x,this.y=l*o+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _s{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,d,f){let p=s[o+0],m=s[o+1],v=s[o+2],x=s[o+3];const y=l[d+0],M=l[d+1],w=l[d+2],T=l[d+3];if(f===0){e[t+0]=p,e[t+1]=m,e[t+2]=v,e[t+3]=x;return}if(f===1){e[t+0]=y,e[t+1]=M,e[t+2]=w,e[t+3]=T;return}if(x!==T||p!==y||m!==M||v!==w){let S=1-f;const _=p*y+m*M+v*w+x*T,F=_>=0?1:-1,D=1-_*_;if(D>Number.EPSILON){const j=Math.sqrt(D),P=Math.atan2(j,_*F);S=Math.sin(S*P)/j,f=Math.sin(f*P)/j}const R=f*F;if(p=p*S+y*R,m=m*S+M*R,v=v*S+w*R,x=x*S+T*R,S===1-f){const j=1/Math.sqrt(p*p+m*m+v*v+x*x);p*=j,m*=j,v*=j,x*=j}}e[t]=p,e[t+1]=m,e[t+2]=v,e[t+3]=x}static multiplyQuaternionsFlat(e,t,s,o,l,d){const f=s[o],p=s[o+1],m=s[o+2],v=s[o+3],x=l[d],y=l[d+1],M=l[d+2],w=l[d+3];return e[t]=f*w+v*x+p*M-m*y,e[t+1]=p*w+v*y+m*x-f*M,e[t+2]=m*w+v*M+f*y-p*x,e[t+3]=v*w-f*x-p*y-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,d=e._order,f=Math.cos,p=Math.sin,m=f(s/2),v=f(o/2),x=f(l/2),y=p(s/2),M=p(o/2),w=p(l/2);switch(d){case"XYZ":this._x=y*v*x+m*M*w,this._y=m*M*x-y*v*w,this._z=m*v*w+y*M*x,this._w=m*v*x-y*M*w;break;case"YXZ":this._x=y*v*x+m*M*w,this._y=m*M*x-y*v*w,this._z=m*v*w-y*M*x,this._w=m*v*x+y*M*w;break;case"ZXY":this._x=y*v*x-m*M*w,this._y=m*M*x+y*v*w,this._z=m*v*w+y*M*x,this._w=m*v*x-y*M*w;break;case"ZYX":this._x=y*v*x-m*M*w,this._y=m*M*x+y*v*w,this._z=m*v*w-y*M*x,this._w=m*v*x+y*M*w;break;case"YZX":this._x=y*v*x+m*M*w,this._y=m*M*x+y*v*w,this._z=m*v*w-y*M*x,this._w=m*v*x-y*M*w;break;case"XZY":this._x=y*v*x-m*M*w,this._y=m*M*x-y*v*w,this._z=m*v*w+y*M*x,this._w=m*v*x+y*M*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],d=t[1],f=t[5],p=t[9],m=t[2],v=t[6],x=t[10],y=s+f+x;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(v-p)*M,this._y=(l-m)*M,this._z=(d-o)*M}else if(s>f&&s>x){const M=2*Math.sqrt(1+s-f-x);this._w=(v-p)/M,this._x=.25*M,this._y=(o+d)/M,this._z=(l+m)/M}else if(f>x){const M=2*Math.sqrt(1+f-s-x);this._w=(l-m)/M,this._x=(o+d)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+x-s-f);this._w=(d-o)/M,this._x=(l+m)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,d=e._w,f=t._x,p=t._y,m=t._z,v=t._w;return this._x=s*v+d*f+o*m-l*p,this._y=o*v+d*p+l*f-s*m,this._z=l*v+d*m+s*p-o*f,this._w=d*v-s*f-o*p-l*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,l=this._z,d=this._w;let f=d*e._w+s*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=d,this._x=s,this._y=o,this._z=l,this;const p=1-f*f;if(p<=Number.EPSILON){const M=1-t;return this._w=M*d+t*this._w,this._x=M*s+t*this._x,this._y=M*o+t*this._y,this._z=M*l+t*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,f),x=Math.sin((1-t)*v)/m,y=Math.sin(t*v)/m;return this._w=d*x+this._w*y,this._x=s*x+this._x*y,this._y=o*x+this._y*y,this._z=l*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,t=0,s=0){ee.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,d=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*d,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*d,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*d,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,d=e.y,f=e.z,p=e.w,m=2*(d*o-f*s),v=2*(f*t-l*o),x=2*(l*s-d*t);return this.x=t+p*m+d*x-f*v,this.y=s+p*v+f*m-l*x,this.z=o+p*x+l*v-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(wt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,d=t.x,f=t.y,p=t.z;return this.x=o*p-l*f,this.y=l*d-s*p,this.z=s*f-o*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return hd.copy(this).projectOnVector(e),this.sub(hd)}reflect(e){return this.sub(hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(wt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hd=new ee,cg=new _s;class gt{constructor(e,t,s,o,l,d,f,p,m){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,d,f,p,m)}set(e,t,s,o,l,d,f,p,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=t,v[4]=l,v[5]=p,v[6]=s,v[7]=d,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,d=s[0],f=s[3],p=s[6],m=s[1],v=s[4],x=s[7],y=s[2],M=s[5],w=s[8],T=o[0],S=o[3],_=o[6],F=o[1],D=o[4],R=o[7],j=o[2],P=o[5],k=o[8];return l[0]=d*T+f*F+p*j,l[3]=d*S+f*D+p*P,l[6]=d*_+f*R+p*k,l[1]=m*T+v*F+x*j,l[4]=m*S+v*D+x*P,l[7]=m*_+v*R+x*k,l[2]=y*T+M*F+w*j,l[5]=y*S+M*D+w*P,l[8]=y*_+M*R+w*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],d=e[4],f=e[5],p=e[6],m=e[7],v=e[8];return t*d*v-t*f*m-s*l*v+s*f*p+o*l*m-o*d*p}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],d=e[4],f=e[5],p=e[6],m=e[7],v=e[8],x=v*d-f*m,y=f*p-v*l,M=m*l-d*p,w=t*x+s*y+o*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=x*T,e[1]=(o*m-v*s)*T,e[2]=(f*s-o*d)*T,e[3]=y*T,e[4]=(v*t-o*p)*T,e[5]=(o*l-f*t)*T,e[6]=M*T,e[7]=(s*p-m*t)*T,e[8]=(d*t-s*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,d,f){const p=Math.cos(l),m=Math.sin(l);return this.set(s*p,s*m,-s*(p*d+m*f)+d+e,-o*m,o*p,-o*(-m*d+p*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(pd.makeScale(e,t)),this}rotate(e){return this.premultiply(pd.makeRotation(-e)),this}translate(e,t){return this.premultiply(pd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pd=new gt;function _x(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function vc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function hE(){const r=vc("canvas");return r.style.display="block",r}const ug={};function yo(r){r in ug||(ug[r]=!0,console.warn(r))}function pE(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}const dg=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fg=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mE(){const r={enabled:!0,workingColorSpace:ma,spaces:{},convert:function(o,l,d){return this.enabled===!1||l===d||!l||!d||(this.spaces[l].transfer===jt&&(o.r=lr(o.r),o.g=lr(o.g),o.b=lr(o.b)),this.spaces[l].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===jt&&(o.r=ua(o.r),o.g=ua(o.g),o.b=ua(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Fr?mc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,d){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return yo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return yo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[ma]:{primaries:e,whitePoint:s,transfer:mc,toXYZ:dg,fromXYZ:fg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:s,transfer:jt,toXYZ:dg,fromXYZ:fg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),r}const It=mE();function lr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ua(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ys;class gE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Ys===void 0&&(Ys=vc("canvas")),Ys.width=e.width,Ys.height=e.height;const o=Ys.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=Ys}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vc("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let d=0;d<l.length;d++)l[d]=lr(l[d]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(lr(t[s]/255)*255):t[s]=lr(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vE=0;class rh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=wo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let d=0,f=o.length;d<f;d++)o[d].isDataTexture?l.push(md(o[d].image)):l.push(md(o[d]))}else l=md(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function md(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?gE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xE=0;const gd=new ee;class qn extends Ma{constructor(e=qn.DEFAULT_IMAGE,t=qn.DEFAULT_MAPPING,s=gs,o=gs,l=Fi,d=vs,f=bi,p=ji,m=qn.DEFAULT_ANISOTROPY,v=Fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=wo(),this.name="",this.source=new rh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gd).x}get height(){return this.source.getSize(gd).y}get depth(){return this.source.getSize(gd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lf:e.x=e.x-Math.floor(e.x);break;case gs:e.x=e.x<0?0:1;break;case cf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lf:e.y=e.y-Math.floor(e.y);break;case gs:e.y=e.y<0?0:1;break;case cf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=cx;qn.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,t=0,s=0,o=1){en.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,d=e.elements;return this.x=d[0]*t+d[4]*s+d[8]*o+d[12]*l,this.y=d[1]*t+d[5]*s+d[9]*o+d[13]*l,this.z=d[2]*t+d[6]*s+d[10]*o+d[14]*l,this.w=d[3]*t+d[7]*s+d[11]*o+d[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const p=e.elements,m=p[0],v=p[4],x=p[8],y=p[1],M=p[5],w=p[9],T=p[2],S=p[6],_=p[10];if(Math.abs(v-y)<.01&&Math.abs(x-T)<.01&&Math.abs(w-S)<.01){if(Math.abs(v+y)<.1&&Math.abs(x+T)<.1&&Math.abs(w+S)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(m+1)/2,R=(M+1)/2,j=(_+1)/2,P=(v+y)/4,k=(x+T)/4,z=(w+S)/4;return D>R&&D>j?D<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(D),o=P/s,l=k/s):R>j?R<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),s=P/o,l=z/o):j<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(j),s=k/l,o=z/l),this.set(s,o,l,t),this}let F=Math.sqrt((S-w)*(S-w)+(x-T)*(x-T)+(y-v)*(y-v));return Math.abs(F)<.001&&(F=1),this.x=(S-w)/F,this.y=(x-T)/F,this.z=(y-v)/F,this.w=Math.acos((m+M+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this.w=wt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this.w=wt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(wt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _E extends Ma{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t);const o={width:e,height:t,depth:s.depth},l=new qn(o);this.textures=[];const d=s.count;for(let f=0;f<d;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const t={minFilter:Fi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new rh(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends _E{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class yx extends qn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yE extends qn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class To{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=l.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,Ei):Ei.fromBufferAttribute(l,d),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ol.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ol.copy(s.boundingBox)),Ol.applyMatrix4(e.matrixWorld),this.union(Ol)}const o=e.children;for(let l=0,d=o.length;l<d;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),zl.subVectors(this.max,ao),Ks.subVectors(e.a,ao),Zs.subVectors(e.b,ao),Qs.subVectors(e.c,ao),Nr.subVectors(Zs,Ks),Pr.subVectors(Qs,Zs),ss.subVectors(Ks,Qs);let t=[0,-Nr.z,Nr.y,0,-Pr.z,Pr.y,0,-ss.z,ss.y,Nr.z,0,-Nr.x,Pr.z,0,-Pr.x,ss.z,0,-ss.x,-Nr.y,Nr.x,0,-Pr.y,Pr.x,0,-ss.y,ss.x,0];return!vd(t,Ks,Zs,Qs,zl)||(t=[1,0,0,0,1,0,0,0,1],!vd(t,Ks,Zs,Qs,zl))?!1:(Bl.crossVectors(Nr,Pr),t=[Bl.x,Bl.y,Bl.z],vd(t,Ks,Zs,Qs,zl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ji=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Ei=new ee,Ol=new To,Ks=new ee,Zs=new ee,Qs=new ee,Nr=new ee,Pr=new ee,ss=new ee,ao=new ee,zl=new ee,Bl=new ee,as=new ee;function vd(r,e,t,s,o){for(let l=0,d=r.length-3;l<=d;l+=3){as.fromArray(r,l);const f=o.x*Math.abs(as.x)+o.y*Math.abs(as.y)+o.z*Math.abs(as.z),p=e.dot(as),m=t.dot(as),v=s.dot(as);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>f)return!1}return!0}const SE=new To,oo=new ee,xd=new ee;class sh{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):SE.setFromPoints(e).getCenter(s);let o=0;for(let l=0,d=e.length;l<d;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oo.subVectors(e,this.center);const t=oo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(oo,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oo.copy(e.center).add(xd)),this.expandByPoint(oo.copy(e.center).sub(xd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const er=new ee,_d=new ee,jl=new ee,Dr=new ee,yd=new ee,Vl=new ee,Sd=new ee;class ME{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,er)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=er.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(er.copy(this.origin).addScaledVector(this.direction,t),er.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){_d.copy(e).add(t).multiplyScalar(.5),jl.copy(t).sub(e).normalize(),Dr.copy(this.origin).sub(_d);const l=e.distanceTo(t)*.5,d=-this.direction.dot(jl),f=Dr.dot(this.direction),p=-Dr.dot(jl),m=Dr.lengthSq(),v=Math.abs(1-d*d);let x,y,M,w;if(v>0)if(x=d*p-f,y=d*f-p,w=l*v,x>=0)if(y>=-w)if(y<=w){const T=1/v;x*=T,y*=T,M=x*(x+d*y+2*f)+y*(d*x+y+2*p)+m}else y=l,x=Math.max(0,-(d*y+f)),M=-x*x+y*(y+2*p)+m;else y=-l,x=Math.max(0,-(d*y+f)),M=-x*x+y*(y+2*p)+m;else y<=-w?(x=Math.max(0,-(-d*l+f)),y=x>0?-l:Math.min(Math.max(-l,-p),l),M=-x*x+y*(y+2*p)+m):y<=w?(x=0,y=Math.min(Math.max(-l,-p),l),M=y*(y+2*p)+m):(x=Math.max(0,-(d*l+f)),y=x>0?l:Math.min(Math.max(-l,-p),l),M=-x*x+y*(y+2*p)+m);else y=d>0?-l:l,x=Math.max(0,-(d*y+f)),M=-x*x+y*(y+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(_d).addScaledVector(jl,y),M}intersectSphere(e,t){er.subVectors(e.center,this.origin);const s=er.dot(this.direction),o=er.dot(er)-s*s,l=e.radius*e.radius;if(o>l)return null;const d=Math.sqrt(l-o),f=s-d,p=s+d;return p<0?null:f<0?this.at(p,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,d,f,p;const m=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,y=this.origin;return m>=0?(s=(e.min.x-y.x)*m,o=(e.max.x-y.x)*m):(s=(e.max.x-y.x)*m,o=(e.min.x-y.x)*m),v>=0?(l=(e.min.y-y.y)*v,d=(e.max.y-y.y)*v):(l=(e.max.y-y.y)*v,d=(e.min.y-y.y)*v),s>d||l>o||((l>s||isNaN(s))&&(s=l),(d<o||isNaN(o))&&(o=d),x>=0?(f=(e.min.z-y.z)*x,p=(e.max.z-y.z)*x):(f=(e.max.z-y.z)*x,p=(e.min.z-y.z)*x),s>p||f>o)||((f>s||s!==s)&&(s=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,er)!==null}intersectTriangle(e,t,s,o,l){yd.subVectors(t,e),Vl.subVectors(s,e),Sd.crossVectors(yd,Vl);let d=this.direction.dot(Sd),f;if(d>0){if(o)return null;f=1}else if(d<0)f=-1,d=-d;else return null;Dr.subVectors(this.origin,e);const p=f*this.direction.dot(Vl.crossVectors(Dr,Vl));if(p<0)return null;const m=f*this.direction.dot(yd.cross(Dr));if(m<0||p+m>d)return null;const v=-f*Dr.dot(Sd);return v<0?null:this.at(v/d,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,t,s,o,l,d,f,p,m,v,x,y,M,w,T,S){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,d,f,p,m,v,x,y,M,w,T,S)}set(e,t,s,o,l,d,f,p,m,v,x,y,M,w,T,S){const _=this.elements;return _[0]=e,_[4]=t,_[8]=s,_[12]=o,_[1]=l,_[5]=d,_[9]=f,_[13]=p,_[2]=m,_[6]=v,_[10]=x,_[14]=y,_[3]=M,_[7]=w,_[11]=T,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,o=1/Js.setFromMatrixColumn(e,0).length(),l=1/Js.setFromMatrixColumn(e,1).length(),d=1/Js.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*d,t[9]=s[9]*d,t[10]=s[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,d=Math.cos(s),f=Math.sin(s),p=Math.cos(o),m=Math.sin(o),v=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const y=d*v,M=d*x,w=f*v,T=f*x;t[0]=p*v,t[4]=-p*x,t[8]=m,t[1]=M+w*m,t[5]=y-T*m,t[9]=-f*p,t[2]=T-y*m,t[6]=w+M*m,t[10]=d*p}else if(e.order==="YXZ"){const y=p*v,M=p*x,w=m*v,T=m*x;t[0]=y+T*f,t[4]=w*f-M,t[8]=d*m,t[1]=d*x,t[5]=d*v,t[9]=-f,t[2]=M*f-w,t[6]=T+y*f,t[10]=d*p}else if(e.order==="ZXY"){const y=p*v,M=p*x,w=m*v,T=m*x;t[0]=y-T*f,t[4]=-d*x,t[8]=w+M*f,t[1]=M+w*f,t[5]=d*v,t[9]=T-y*f,t[2]=-d*m,t[6]=f,t[10]=d*p}else if(e.order==="ZYX"){const y=d*v,M=d*x,w=f*v,T=f*x;t[0]=p*v,t[4]=w*m-M,t[8]=y*m+T,t[1]=p*x,t[5]=T*m+y,t[9]=M*m-w,t[2]=-m,t[6]=f*p,t[10]=d*p}else if(e.order==="YZX"){const y=d*p,M=d*m,w=f*p,T=f*m;t[0]=p*v,t[4]=T-y*x,t[8]=w*x+M,t[1]=x,t[5]=d*v,t[9]=-f*v,t[2]=-m*v,t[6]=M*x+w,t[10]=y-T*x}else if(e.order==="XZY"){const y=d*p,M=d*m,w=f*p,T=f*m;t[0]=p*v,t[4]=-x,t[8]=m*v,t[1]=y*x+T,t[5]=d*v,t[9]=M*x-w,t[2]=w*x-M,t[6]=f*v,t[10]=T*x+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(EE,e,wE)}lookAt(e,t,s){const o=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Lr.crossVectors(s,ti),Lr.lengthSq()===0&&(Math.abs(s.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Lr.crossVectors(s,ti)),Lr.normalize(),Hl.crossVectors(ti,Lr),o[0]=Lr.x,o[4]=Hl.x,o[8]=ti.x,o[1]=Lr.y,o[5]=Hl.y,o[9]=ti.y,o[2]=Lr.z,o[6]=Hl.z,o[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,d=s[0],f=s[4],p=s[8],m=s[12],v=s[1],x=s[5],y=s[9],M=s[13],w=s[2],T=s[6],S=s[10],_=s[14],F=s[3],D=s[7],R=s[11],j=s[15],P=o[0],k=o[4],z=o[8],N=o[12],C=o[1],V=o[5],$=o[9],te=o[13],Z=o[2],ce=o[6],K=o[10],fe=o[14],I=o[3],ae=o[7],de=o[11],O=o[15];return l[0]=d*P+f*C+p*Z+m*I,l[4]=d*k+f*V+p*ce+m*ae,l[8]=d*z+f*$+p*K+m*de,l[12]=d*N+f*te+p*fe+m*O,l[1]=v*P+x*C+y*Z+M*I,l[5]=v*k+x*V+y*ce+M*ae,l[9]=v*z+x*$+y*K+M*de,l[13]=v*N+x*te+y*fe+M*O,l[2]=w*P+T*C+S*Z+_*I,l[6]=w*k+T*V+S*ce+_*ae,l[10]=w*z+T*$+S*K+_*de,l[14]=w*N+T*te+S*fe+_*O,l[3]=F*P+D*C+R*Z+j*I,l[7]=F*k+D*V+R*ce+j*ae,l[11]=F*z+D*$+R*K+j*de,l[15]=F*N+D*te+R*fe+j*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],d=e[1],f=e[5],p=e[9],m=e[13],v=e[2],x=e[6],y=e[10],M=e[14],w=e[3],T=e[7],S=e[11],_=e[15];return w*(+l*p*x-o*m*x-l*f*y+s*m*y+o*f*M-s*p*M)+T*(+t*p*M-t*m*y+l*d*y-o*d*M+o*m*v-l*p*v)+S*(+t*m*x-t*f*M-l*d*x+s*d*M+l*f*v-s*m*v)+_*(-o*f*v-t*p*x+t*f*y+o*d*x-s*d*y+s*p*v)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],d=e[4],f=e[5],p=e[6],m=e[7],v=e[8],x=e[9],y=e[10],M=e[11],w=e[12],T=e[13],S=e[14],_=e[15],F=x*S*m-T*y*m+T*p*M-f*S*M-x*p*_+f*y*_,D=w*y*m-v*S*m-w*p*M+d*S*M+v*p*_-d*y*_,R=v*T*m-w*x*m+w*f*M-d*T*M-v*f*_+d*x*_,j=w*x*p-v*T*p-w*f*y+d*T*y+v*f*S-d*x*S,P=t*F+s*D+o*R+l*j;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/P;return e[0]=F*k,e[1]=(T*y*l-x*S*l-T*o*M+s*S*M+x*o*_-s*y*_)*k,e[2]=(f*S*l-T*p*l+T*o*m-s*S*m-f*o*_+s*p*_)*k,e[3]=(x*p*l-f*y*l-x*o*m+s*y*m+f*o*M-s*p*M)*k,e[4]=D*k,e[5]=(v*S*l-w*y*l+w*o*M-t*S*M-v*o*_+t*y*_)*k,e[6]=(w*p*l-d*S*l-w*o*m+t*S*m+d*o*_-t*p*_)*k,e[7]=(d*y*l-v*p*l+v*o*m-t*y*m-d*o*M+t*p*M)*k,e[8]=R*k,e[9]=(w*x*l-v*T*l-w*s*M+t*T*M+v*s*_-t*x*_)*k,e[10]=(d*T*l-w*f*l+w*s*m-t*T*m-d*s*_+t*f*_)*k,e[11]=(v*f*l-d*x*l-v*s*m+t*x*m+d*s*M-t*f*M)*k,e[12]=j*k,e[13]=(v*T*o-w*x*o+w*s*y-t*T*y-v*s*S+t*x*S)*k,e[14]=(w*f*o-d*T*o-w*s*p+t*T*p+d*s*S-t*f*S)*k,e[15]=(d*x*o-v*f*o+v*s*p-t*x*p-d*s*y+t*f*y)*k,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,d=e.x,f=e.y,p=e.z,m=l*d,v=l*f;return this.set(m*d+s,m*f-o*p,m*p+o*f,0,m*f+o*p,v*f+s,v*p-o*d,0,m*p-o*f,v*p+o*d,l*p*p+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,d){return this.set(1,s,l,0,e,1,d,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,d=t._y,f=t._z,p=t._w,m=l+l,v=d+d,x=f+f,y=l*m,M=l*v,w=l*x,T=d*v,S=d*x,_=f*x,F=p*m,D=p*v,R=p*x,j=s.x,P=s.y,k=s.z;return o[0]=(1-(T+_))*j,o[1]=(M+R)*j,o[2]=(w-D)*j,o[3]=0,o[4]=(M-R)*P,o[5]=(1-(y+_))*P,o[6]=(S+F)*P,o[7]=0,o[8]=(w+D)*k,o[9]=(S-F)*k,o[10]=(1-(y+T))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;let l=Js.set(o[0],o[1],o[2]).length();const d=Js.set(o[4],o[5],o[6]).length(),f=Js.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],wi.copy(this);const m=1/l,v=1/d,x=1/f;return wi.elements[0]*=m,wi.elements[1]*=m,wi.elements[2]*=m,wi.elements[4]*=v,wi.elements[5]*=v,wi.elements[6]*=v,wi.elements[8]*=x,wi.elements[9]*=x,wi.elements[10]*=x,t.setFromRotationMatrix(wi),s.x=l,s.y=d,s.z=f,this}makePerspective(e,t,s,o,l,d,f=ki,p=!1){const m=this.elements,v=2*l/(t-e),x=2*l/(s-o),y=(t+e)/(t-e),M=(s+o)/(s-o);let w,T;if(p)w=l/(d-l),T=d*l/(d-l);else if(f===ki)w=-(d+l)/(d-l),T=-2*d*l/(d-l);else if(f===gc)w=-d/(d-l),T=-d*l/(d-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=v,m[4]=0,m[8]=y,m[12]=0,m[1]=0,m[5]=x,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=w,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,s,o,l,d,f=ki,p=!1){const m=this.elements,v=2/(t-e),x=2/(s-o),y=-(t+e)/(t-e),M=-(s+o)/(s-o);let w,T;if(p)w=1/(d-l),T=d/(d-l);else if(f===ki)w=-2/(d-l),T=-(d+l)/(d-l);else if(f===gc)w=-1/(d-l),T=-l/(d-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=v,m[4]=0,m[8]=0,m[12]=y,m[1]=0,m[5]=x,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=w,m[14]=T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Js=new ee,wi=new sn,EE=new ee(0,0,0),wE=new ee(1,1,1),Lr=new ee,Hl=new ee,ti=new ee,hg=new sn,pg=new _s;class Ci{constructor(e=0,t=0,s=0,o=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],d=o[4],f=o[8],p=o[1],m=o[5],v=o[9],x=o[2],y=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(wt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-wt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(wt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return hg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hg,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pg.setFromEuler(this),this.setFromQuaternion(pg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class Sx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let TE=0;const mg=new ee,ea=new _s,tr=new sn,Gl=new ee,lo=new ee,AE=new ee,bE=new _s,gg=new ee(1,0,0),vg=new ee(0,1,0),xg=new ee(0,0,1),_g={type:"added"},RE={type:"removed"},ta={type:"childadded",child:null},Md={type:"childremoved",child:null};class Dn extends Ma{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TE++}),this.uuid=wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new ee,t=new Ci,s=new _s,o=new ee(1,1,1);function l(){s.setFromEuler(t,!1)}function d(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new sn},normalMatrix:{value:new gt}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ea.setFromAxisAngle(e,t),this.quaternion.multiply(ea),this}rotateOnWorldAxis(e,t){return ea.setFromAxisAngle(e,t),this.quaternion.premultiply(ea),this}rotateX(e){return this.rotateOnAxis(gg,e)}rotateY(e){return this.rotateOnAxis(vg,e)}rotateZ(e){return this.rotateOnAxis(xg,e)}translateOnAxis(e,t){return mg.copy(e).applyQuaternion(this.quaternion),this.position.add(mg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gg,e)}translateY(e){return this.translateOnAxis(vg,e)}translateZ(e){return this.translateOnAxis(xg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tr.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Gl.copy(e):Gl.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tr.lookAt(lo,Gl,this.up):tr.lookAt(Gl,lo,this.up),this.quaternion.setFromRotationMatrix(tr),o&&(tr.extractRotation(o.matrixWorld),ea.setFromRotationMatrix(tr),this.quaternion.premultiply(ea.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_g),ta.child=e,this.dispatchEvent(ta),ta.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(RE),Md.child=e,this.dispatchEvent(Md),Md.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_g),ta.child=e,this.dispatchEvent(ta),ta.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const d=this.children[s].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,d=o.length;l<d;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,e,AE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,bE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,d=o.length;l<d;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const x=p[m];l(e.shapes,x)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(l(e.materials,this.material[p]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(l(e.animations,p))}}if(t){const f=d(e.geometries),p=d(e.materials),m=d(e.textures),v=d(e.images),x=d(e.shapes),y=d(e.skeletons),M=d(e.animations),w=d(e.nodes);f.length>0&&(s.geometries=f),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),x.length>0&&(s.shapes=x),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),w.length>0&&(s.nodes=w)}return s.object=o,s;function d(f){const p=[];for(const m in f){const v=f[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}Dn.DEFAULT_UP=new ee(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new ee,nr=new ee,Ed=new ee,ir=new ee,na=new ee,ia=new ee,yg=new ee,wd=new ee,Td=new ee,Ad=new ee,bd=new en,Rd=new en,Cd=new en;class Ai{constructor(e=new ee,t=new ee,s=new ee){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),Ti.subVectors(e,t),o.cross(Ti);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){Ti.subVectors(o,t),nr.subVectors(s,t),Ed.subVectors(e,t);const d=Ti.dot(Ti),f=Ti.dot(nr),p=Ti.dot(Ed),m=nr.dot(nr),v=nr.dot(Ed),x=d*m-f*f;if(x===0)return l.set(0,0,0),null;const y=1/x,M=(m*p-f*v)*y,w=(d*v-f*p)*y;return l.set(1-M-w,w,M)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,t,s,o,l,d,f,p){return this.getBarycoord(e,t,s,o,ir)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,ir.x),p.addScaledVector(d,ir.y),p.addScaledVector(f,ir.z),p)}static getInterpolatedAttribute(e,t,s,o,l,d){return bd.setScalar(0),Rd.setScalar(0),Cd.setScalar(0),bd.fromBufferAttribute(e,t),Rd.fromBufferAttribute(e,s),Cd.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(bd,l.x),d.addScaledVector(Rd,l.y),d.addScaledVector(Cd,l.z),d}static isFrontFacing(e,t,s,o){return Ti.subVectors(s,t),nr.subVectors(e,t),Ti.cross(nr).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),Ti.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ai.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return Ai.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let d,f;na.subVectors(o,s),ia.subVectors(l,s),wd.subVectors(e,s);const p=na.dot(wd),m=ia.dot(wd);if(p<=0&&m<=0)return t.copy(s);Td.subVectors(e,o);const v=na.dot(Td),x=ia.dot(Td);if(v>=0&&x<=v)return t.copy(o);const y=p*x-v*m;if(y<=0&&p>=0&&v<=0)return d=p/(p-v),t.copy(s).addScaledVector(na,d);Ad.subVectors(e,l);const M=na.dot(Ad),w=ia.dot(Ad);if(w>=0&&M<=w)return t.copy(l);const T=M*m-p*w;if(T<=0&&m>=0&&w<=0)return f=m/(m-w),t.copy(s).addScaledVector(ia,f);const S=v*w-M*x;if(S<=0&&x-v>=0&&M-w>=0)return yg.subVectors(l,o),f=(x-v)/(x-v+(M-w)),t.copy(o).addScaledVector(yg,f);const _=1/(S+T+y);return d=T*_,f=y*_,t.copy(s).addScaledVector(na,d).addScaledVector(ia,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Mx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},Wl={h:0,s:0,l:0};function Nd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class bt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,t),this}setRGB(e,t,s,o=It.workingColorSpace){return this.r=e,this.g=t,this.b=s,It.colorSpaceToWorking(this,o),this}setHSL(e,t,s,o=It.workingColorSpace){if(e=fE(e,1),t=wt(t,0,1),s=wt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,d=2*s-l;this.r=Nd(d,l,e+1/3),this.g=Nd(d,l,e),this.b=Nd(d,l,e-1/3)}return It.colorSpaceToWorking(this,o),this}setStyle(e,t=hi){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const d=o[1],f=o[2];switch(d){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],d=l.length;if(d===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(d===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hi){const s=Mx[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=ua(e.r),this.g=ua(e.g),this.b=ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return It.workingToColorSpace(Pn.copy(this),e),Math.round(wt(Pn.r*255,0,255))*65536+Math.round(wt(Pn.g*255,0,255))*256+Math.round(wt(Pn.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.workingToColorSpace(Pn.copy(this),t);const s=Pn.r,o=Pn.g,l=Pn.b,d=Math.max(s,o,l),f=Math.min(s,o,l);let p,m;const v=(f+d)/2;if(f===d)p=0,m=0;else{const x=d-f;switch(m=v<=.5?x/(d+f):x/(2-d-f),d){case s:p=(o-l)/x+(o<l?6:0);break;case o:p=(l-s)/x+2;break;case l:p=(s-o)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,t=It.workingColorSpace){return It.workingToColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=hi){It.workingToColorSpace(Pn.copy(this),e);const t=Pn.r,s=Pn.g,o=Pn.b;return e!==hi?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Ir),this.setHSL(Ir.h+e,Ir.s+t,Ir.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Ir),e.getHSL(Wl);const s=fd(Ir.h,Wl.h,t),o=fd(Ir.s,Wl.s,t),l=fd(Ir.l,Wl.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new bt;bt.NAMES=Mx;let CE=0;class Ea extends Ma{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=wo(),this.name="",this.type="Material",this.blending=ca,this.side=Br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kd,this.blendDst=Zd,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ag,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ca&&(s.blending=this.blending),this.side!==Br&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Kd&&(s.blendSrc=this.blendSrc),this.blendDst!==Zd&&(s.blendDst=this.blendDst),this.blendEquation!==hs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==fa&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ag&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const d=[];for(const f in l){const p=l[f];delete p.metadata,d.push(p)}return d}if(t){const l=o(e.textures),d=o(e.images);l.length>0&&(s.textures=l),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xc extends Ea{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new ee,Xl=new mt;let NE=0;class Oi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:NE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=og,this.updateRanges=[],this.gpuType=or,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Xl.fromBufferAttribute(this,t),Xl.applyMatrix3(e),this.setXY(t,Xl.x,Xl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=so(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Xn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=so(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=so(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=so(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=so(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),s=Xn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),s=Xn(s,this.array),o=Xn(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),s=Xn(s,this.array),o=Xn(o,this.array),l=Xn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==og&&(e.usage=this.usage),e}}class Ex extends Oi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class wx extends Oi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class zi extends Oi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let PE=0;const fi=new sn,Pd=new Dn,ra=new ee,ni=new To,co=new To,xn=new ee;class Vr extends Ma{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_x(e)?wx:Ex)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new gt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,s){return fi.makeTranslation(e,t,s),this.applyMatrix4(fi),this}scale(e,t,s){return fi.makeScale(e,t,s),this.applyMatrix4(fi),this}lookAt(e){return Pd.lookAt(e),Pd.updateMatrix(),this.applyMatrix4(Pd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ra).negate(),this.translate(ra.x,ra.y,ra.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const d=e[o];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new zi(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new To);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];ni.setFromBufferAttribute(l),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const s=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let l=0,d=t.length;l<d;l++){const f=t[l];co.setFromBufferAttribute(f),this.morphTargetsRelative?(xn.addVectors(ni.min,co.min),ni.expandByPoint(xn),xn.addVectors(ni.max,co.max),ni.expandByPoint(xn)):(ni.expandByPoint(co.min),ni.expandByPoint(co.max))}ni.getCenter(s);let o=0;for(let l=0,d=e.count;l<d;l++)xn.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(xn));if(t)for(let l=0,d=t.length;l<d;l++){const f=t[l],p=this.morphTargetsRelative;for(let m=0,v=f.count;m<v;m++)xn.fromBufferAttribute(f,m),p&&(ra.fromBufferAttribute(e,m),xn.add(ra)),o=Math.max(o,s.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),f=[],p=[];for(let z=0;z<s.count;z++)f[z]=new ee,p[z]=new ee;const m=new ee,v=new ee,x=new ee,y=new mt,M=new mt,w=new mt,T=new ee,S=new ee;function _(z,N,C){m.fromBufferAttribute(s,z),v.fromBufferAttribute(s,N),x.fromBufferAttribute(s,C),y.fromBufferAttribute(l,z),M.fromBufferAttribute(l,N),w.fromBufferAttribute(l,C),v.sub(m),x.sub(m),M.sub(y),w.sub(y);const V=1/(M.x*w.y-w.x*M.y);isFinite(V)&&(T.copy(v).multiplyScalar(w.y).addScaledVector(x,-M.y).multiplyScalar(V),S.copy(x).multiplyScalar(M.x).addScaledVector(v,-w.x).multiplyScalar(V),f[z].add(T),f[N].add(T),f[C].add(T),p[z].add(S),p[N].add(S),p[C].add(S))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let z=0,N=F.length;z<N;++z){const C=F[z],V=C.start,$=C.count;for(let te=V,Z=V+$;te<Z;te+=3)_(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const D=new ee,R=new ee,j=new ee,P=new ee;function k(z){j.fromBufferAttribute(o,z),P.copy(j);const N=f[z];D.copy(N),D.sub(j.multiplyScalar(j.dot(N))).normalize(),R.crossVectors(P,N);const V=R.dot(p[z])<0?-1:1;d.setXYZW(z,D.x,D.y,D.z,V)}for(let z=0,N=F.length;z<N;++z){const C=F[z],V=C.start,$=C.count;for(let te=V,Z=V+$;te<Z;te+=3)k(e.getX(te+0)),k(e.getX(te+1)),k(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Oi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const o=new ee,l=new ee,d=new ee,f=new ee,p=new ee,m=new ee,v=new ee,x=new ee;if(e)for(let y=0,M=e.count;y<M;y+=3){const w=e.getX(y+0),T=e.getX(y+1),S=e.getX(y+2);o.fromBufferAttribute(t,w),l.fromBufferAttribute(t,T),d.fromBufferAttribute(t,S),v.subVectors(d,l),x.subVectors(o,l),v.cross(x),f.fromBufferAttribute(s,w),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,S),f.add(v),p.add(v),m.add(v),s.setXYZ(w,f.x,f.y,f.z),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(S,m.x,m.y,m.z)}else for(let y=0,M=t.count;y<M;y+=3)o.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),d.fromBufferAttribute(t,y+2),v.subVectors(d,l),x.subVectors(o,l),v.cross(x),s.setXYZ(y+0,v.x,v.y,v.z),s.setXYZ(y+1,v.x,v.y,v.z),s.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(f,p){const m=f.array,v=f.itemSize,x=f.normalized,y=new m.constructor(p.length*v);let M=0,w=0;for(let T=0,S=p.length;T<S;T++){f.isInterleavedBufferAttribute?M=p[T]*f.data.stride+f.offset:M=p[T]*v;for(let _=0;_<v;_++)y[w++]=m[M++]}return new Oi(y,v,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vr,s=this.index.array,o=this.attributes;for(const f in o){const p=o[f],m=e(p,s);t.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const p=[],m=l[f];for(let v=0,x=m.length;v<x;v++){const y=m[v],M=e(y,s);p.push(M)}t.morphAttributes[f]=p}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,p=d.length;f<p;f++){const m=d[f];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let x=0,y=m.length;x<y;x++){const M=m[x];v.push(M.toJSON(e.data))}v.length>0&&(o[p]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(t))}const l=e.morphAttributes;for(const m in l){const v=[],x=l[m];for(let y=0,M=x.length;y<M;y++)v.push(x[y].clone(t));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,v=d.length;m<v;m++){const x=d[m];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sg=new sn,os=new ME,$l=new sh,Mg=new ee,ql=new ee,Yl=new ee,Kl=new ee,Dd=new ee,Zl=new ee,Eg=new ee,Ql=new ee;class ri extends Dn{constructor(e=new Vr,t=new xc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=o.length;l<d;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,d=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Zl.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const v=f[p],x=l[p];v!==0&&(Dd.fromBufferAttribute(x,e),d?Zl.addScaledVector(Dd,v):Zl.addScaledVector(Dd.sub(t),v))}t.add(Zl)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),$l.copy(s.boundingSphere),$l.applyMatrix4(l),os.copy(e.ray).recast(e.near),!($l.containsPoint(os.origin)===!1&&(os.intersectSphere($l,Mg)===null||os.origin.distanceToSquared(Mg)>(e.far-e.near)**2))&&(Sg.copy(l).invert(),os.copy(e.ray).applyMatrix4(Sg),!(s.boundingBox!==null&&os.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,s){let o;const l=this.geometry,d=this.material,f=l.index,p=l.attributes.position,m=l.attributes.uv,v=l.attributes.uv1,x=l.attributes.normal,y=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(d))for(let w=0,T=y.length;w<T;w++){const S=y[w],_=d[S.materialIndex],F=Math.max(S.start,M.start),D=Math.min(f.count,Math.min(S.start+S.count,M.start+M.count));for(let R=F,j=D;R<j;R+=3){const P=f.getX(R),k=f.getX(R+1),z=f.getX(R+2);o=Jl(this,_,e,s,m,v,x,P,k,z),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const w=Math.max(0,M.start),T=Math.min(f.count,M.start+M.count);for(let S=w,_=T;S<_;S+=3){const F=f.getX(S),D=f.getX(S+1),R=f.getX(S+2);o=Jl(this,d,e,s,m,v,x,F,D,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(d))for(let w=0,T=y.length;w<T;w++){const S=y[w],_=d[S.materialIndex],F=Math.max(S.start,M.start),D=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let R=F,j=D;R<j;R+=3){const P=R,k=R+1,z=R+2;o=Jl(this,_,e,s,m,v,x,P,k,z),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const w=Math.max(0,M.start),T=Math.min(p.count,M.start+M.count);for(let S=w,_=T;S<_;S+=3){const F=S,D=S+1,R=S+2;o=Jl(this,d,e,s,m,v,x,F,D,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function DE(r,e,t,s,o,l,d,f){let p;if(e.side===$n?p=s.intersectTriangle(d,l,o,!0,f):p=s.intersectTriangle(o,l,d,e.side===Br,f),p===null)return null;Ql.copy(f),Ql.applyMatrix4(r.matrixWorld);const m=t.ray.origin.distanceTo(Ql);return m<t.near||m>t.far?null:{distance:m,point:Ql.clone(),object:r}}function Jl(r,e,t,s,o,l,d,f,p,m){r.getVertexPosition(f,ql),r.getVertexPosition(p,Yl),r.getVertexPosition(m,Kl);const v=DE(r,e,t,s,ql,Yl,Kl,Eg);if(v){const x=new ee;Ai.getBarycoord(Eg,ql,Yl,Kl,x),o&&(v.uv=Ai.getInterpolatedAttribute(o,f,p,m,x,new mt)),l&&(v.uv1=Ai.getInterpolatedAttribute(l,f,p,m,x,new mt)),d&&(v.normal=Ai.getInterpolatedAttribute(d,f,p,m,x,new ee),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const y={a:f,b:p,c:m,normal:new ee,materialIndex:0};Ai.getNormal(ql,Yl,Kl,y.normal),v.face=y,v.barycoord=x}return v}class Ss extends Vr{constructor(e=1,t=1,s=1,o=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:d};const f=this;o=Math.floor(o),l=Math.floor(l),d=Math.floor(d);const p=[],m=[],v=[],x=[];let y=0,M=0;w("z","y","x",-1,-1,s,t,e,d,l,0),w("z","y","x",1,-1,s,t,-e,d,l,1),w("x","z","y",1,1,e,s,t,o,d,2),w("x","z","y",1,-1,e,s,-t,o,d,3),w("x","y","z",1,-1,e,t,s,o,l,4),w("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(p),this.setAttribute("position",new zi(m,3)),this.setAttribute("normal",new zi(v,3)),this.setAttribute("uv",new zi(x,2));function w(T,S,_,F,D,R,j,P,k,z,N){const C=R/k,V=j/z,$=R/2,te=j/2,Z=P/2,ce=k+1,K=z+1;let fe=0,I=0;const ae=new ee;for(let de=0;de<K;de++){const O=de*V-te;for(let ie=0;ie<ce;ie++){const Re=ie*C-$;ae[T]=Re*F,ae[S]=O*D,ae[_]=Z,m.push(ae.x,ae.y,ae.z),ae[T]=0,ae[S]=0,ae[_]=P>0?1:-1,v.push(ae.x,ae.y,ae.z),x.push(ie/k),x.push(1-de/z),fe+=1}}for(let de=0;de<z;de++)for(let O=0;O<k;O++){const ie=y+O+ce*de,Re=y+O+ce*(de+1),Pe=y+(O+1)+ce*(de+1),Te=y+(O+1)+ce*de;p.push(ie,Re,Te),p.push(Re,Pe,Te),I+=6}f.addGroup(M,I,N),M+=I,y+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ga(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function kn(r){const e={};for(let t=0;t<r.length;t++){const s=ga(r[t]);for(const o in s)e[o]=s[o]}return e}function LE(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Tx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}const IE={clone:ga,merge:kn};var UE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jr extends Ea{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UE,this.fragmentShader=FE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ga(e.uniforms),this.uniformsGroups=LE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?t.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[o]={type:"m4",value:d.toArray()}:t.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class Ax extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ur=new ee,wg=new mt,Tg=new mt;class mi extends Ax{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Of*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Of*2*Math.atan(Math.tan(dd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z),Ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z)}getViewSize(e,t){return this.getViewBounds(e,wg,Tg),t.subVectors(Tg,wg)}setViewOffset(e,t,s,o,l,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(dd*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;l+=d.offsetX*o/p,t-=d.offsetY*s/m,o*=d.width/p,s*=d.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const sa=-90,aa=1;class kE extends Dn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new mi(sa,aa,e,t);o.layers=this.layers,this.add(o);const l=new mi(sa,aa,e,t);l.layers=this.layers,this.add(l);const d=new mi(sa,aa,e,t);d.layers=this.layers,this.add(d);const f=new mi(sa,aa,e,t);f.layers=this.layers,this.add(f);const p=new mi(sa,aa,e,t);p.layers=this.layers,this.add(p);const m=new mi(sa,aa,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,d,f,p]=t;for(const m of t)this.remove(m);if(e===ki)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===gc)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,d,f,p,m,v]=this.children,x=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,o),e.render(t,l),e.setRenderTarget(s,1,o),e.render(t,d),e.setRenderTarget(s,2,o),e.render(t,f),e.setRenderTarget(s,3,o),e.render(t,p),e.setRenderTarget(s,4,o),e.render(t,m),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,o),e.render(t,v),e.setRenderTarget(x,y,M),e.xr.enabled=w,s.texture.needsPMREMUpdate=!0}}class bx extends qn{constructor(e=[],t=ha,s,o,l,d,f,p,m,v){super(e,t,s,o,l,d,f,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class OE extends ys{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new bx(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ss(5,5,5),l=new jr({name:"CubemapFromEquirect",uniforms:ga(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:$n,blending:Or});l.uniforms.tEquirect.value=t;const d=new ri(o,l),f=t.minFilter;return t.minFilter===vs&&(t.minFilter=Fi),new kE(1,10,this).update(e,d),t.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){const l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,s,o);e.setRenderTarget(l)}}class ec extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zE={type:"move"};class Ld{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ec,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ec,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ec,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,d=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,s),_=this._getHandJoint(m,T);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const v=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],y=v.position.distanceTo(x.position),M=.02,w=.005;m.inputState.pinching&&y>M+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=M-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(zE)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new ec;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}class ah{constructor(e,t=1,s=1e3){this.isFog=!0,this.name="",this.color=new bt(e),this.near=t,this.far=s}clone(){return new ah(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class BE extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Id=new ee,jE=new ee,VE=new gt;class ds{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=Id.subVectors(s,t).cross(jE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Id),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||VE.getNormalMatrix(e),o=this.coplanarPoint(Id).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new sh,HE=new mt(.5,.5),tc=new ee;class oh{constructor(e=new ds,t=new ds,s=new ds,o=new ds,l=new ds,d=new ds){this.planes=[e,t,s,o,l,d]}set(e,t,s,o,l,d){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(o),f[4].copy(l),f[5].copy(d),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=ki,s=!1){const o=this.planes,l=e.elements,d=l[0],f=l[1],p=l[2],m=l[3],v=l[4],x=l[5],y=l[6],M=l[7],w=l[8],T=l[9],S=l[10],_=l[11],F=l[12],D=l[13],R=l[14],j=l[15];if(o[0].setComponents(m-d,M-v,_-w,j-F).normalize(),o[1].setComponents(m+d,M+v,_+w,j+F).normalize(),o[2].setComponents(m+f,M+x,_+T,j+D).normalize(),o[3].setComponents(m-f,M-x,_-T,j-D).normalize(),s)o[4].setComponents(p,y,S,R).normalize(),o[5].setComponents(m-p,M-y,_-S,j-R).normalize();else if(o[4].setComponents(m-p,M-y,_-S,j-R).normalize(),t===ki)o[5].setComponents(m+p,M+y,_+S,j+R).normalize();else if(t===gc)o[5].setComponents(p,y,S,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){ls.center.set(0,0,0);const t=HE.distanceTo(e.center);return ls.radius=.7071067811865476+t,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(tc.x=o.normal.x>0?e.max.x:e.min.x,tc.y=o.normal.y>0?e.max.y:e.min.y,tc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(tc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rx extends qn{constructor(e,t,s=xs,o,l,d,f=Ri,p=Ri,m,v=xo,x=1){if(v!==xo&&v!==_o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:t,depth:x};super(y,o,l,d,f,p,v,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Cx extends qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ao extends Vr{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,d=t/2,f=Math.floor(s),p=Math.floor(o),m=f+1,v=p+1,x=e/f,y=t/p,M=[],w=[],T=[],S=[];for(let _=0;_<v;_++){const F=_*y-d;for(let D=0;D<m;D++){const R=D*x-l;w.push(R,-F,0),T.push(0,0,1),S.push(D/f),S.push(1-_/p)}}for(let _=0;_<p;_++)for(let F=0;F<f;F++){const D=F+m*_,R=F+m*(_+1),j=F+1+m*(_+1),P=F+1+m*_;M.push(D,R,P),M.push(R,j,P)}this.setIndex(M),this.setAttribute("position",new zi(w,3)),this.setAttribute("normal",new zi(T,3)),this.setAttribute("uv",new zi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.width,e.height,e.widthSegments,e.heightSegments)}}class lh extends Vr{constructor(e=.5,t=1,s=32,o=1,l=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:s,phiSegments:o,thetaStart:l,thetaLength:d},s=Math.max(3,s),o=Math.max(1,o);const f=[],p=[],m=[],v=[];let x=e;const y=(t-e)/o,M=new ee,w=new mt;for(let T=0;T<=o;T++){for(let S=0;S<=s;S++){const _=l+S/s*d;M.x=x*Math.cos(_),M.y=x*Math.sin(_),p.push(M.x,M.y,M.z),m.push(0,0,1),w.x=(M.x/t+1)/2,w.y=(M.y/t+1)/2,v.push(w.x,w.y)}x+=y}for(let T=0;T<o;T++){const S=T*(s+1);for(let _=0;_<s;_++){const F=_+S,D=F,R=F+s+1,j=F+s+2,P=F+1;f.push(D,R,P),f.push(R,j,P)}}this.setIndex(f),this.setAttribute("position",new zi(p,3)),this.setAttribute("normal",new zi(m,3)),this.setAttribute("uv",new zi(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class GE extends Ea{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new bt(16777215),this.specular=new bt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ih,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class WE extends Ea{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ih,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class XE extends Ea{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $E extends Ea{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Nx extends Dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ud=new sn,Ag=new ee,bg=new ee;class qE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=ji,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oh,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;Ag.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ag),bg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bg),t.updateMatrixWorld(),Ud.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ud,t.coordinateSystem,t.reversedDepth),t.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Ud)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Px extends Ax{constructor(e=-1,t=1,s=1,o=-1,l=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,d=s+e,f=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,d=l+m*this.view.width,f-=v*this.view.offsetY,p=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,d,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class YE extends qE{constructor(){super(new Px(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class KE extends Nx{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new YE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ZE extends Nx{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class QE extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Rg{constructor(e=1,t=0,s=0){this.radius=e,this.phi=t,this.theta=s}set(e,t,s){return this.radius=e,this.phi=t,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,s){return this.radius=Math.sqrt(e*e+t*t+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function Cg(r,e,t,s){const o=JE(s);switch(t){case px:return r*e;case gx:return r*e/o.components*o.byteLength;case eh:return r*e/o.components*o.byteLength;case vx:return r*e*2/o.components*o.byteLength;case th:return r*e*2/o.components*o.byteLength;case mx:return r*e*3/o.components*o.byteLength;case bi:return r*e*4/o.components*o.byteLength;case nh:return r*e*4/o.components*o.byteLength;case ac:case oc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case lc:case cc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case df:case hf:return Math.max(r,16)*Math.max(e,8)/4;case uf:case ff:return Math.max(r,8)*Math.max(e,8)/2;case pf:case mf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case gf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case vf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case _f:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case yf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Sf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Mf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case wf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Tf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Af:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case bf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Rf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Cf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Nf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Pf:case Df:case Lf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case If:case Uf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ff:case kf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function JE(r){switch(r){case ji:case ux:return{byteLength:1,components:1};case go:case dx:case Eo:return{byteLength:2,components:1};case Qf:case Jf:return{byteLength:2,components:4};case xs:case Zf:case or:return{byteLength:4,components:1};case fx:case hx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dx(){let r=null,e=!1,t=null,s=null;function o(l,d){t(l,d),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function e1(r){const e=new WeakMap;function t(f,p){const m=f.array,v=f.usage,x=m.byteLength,y=r.createBuffer();r.bindBuffer(p,y),r.bufferData(p,m,v),f.onUploadCallback();let M;if(m instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=r.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=r.SHORT;else if(m instanceof Uint32Array)M=r.UNSIGNED_INT;else if(m instanceof Int32Array)M=r.INT;else if(m instanceof Int8Array)M=r.BYTE;else if(m instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:x}}function s(f,p,m){const v=p.array,x=p.updateRanges;if(r.bindBuffer(m,f),x.length===0)r.bufferSubData(m,0,v);else{x.sort((M,w)=>M.start-w.start);let y=0;for(let M=1;M<x.length;M++){const w=x[y],T=x[M];T.start<=w.start+w.count+1?w.count=Math.max(w.count,T.start+T.count-w.start):(++y,x[y]=T)}x.length=y+1;for(let M=0,w=x.length;M<w;M++){const T=x[M];r.bufferSubData(m,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(r.deleteBuffer(p.buffer),e.delete(f))}function d(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,t(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,f,p),m.version=f.version}}return{get:o,remove:l,update:d}}var t1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,n1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,i1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,r1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,l1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,u1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,d1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,p1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,m1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,v1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,y1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,S1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,M1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,E1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,w1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,T1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,A1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,b1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,R1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,C1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P1="gl_FragColor = linearToOutputTexel( gl_FragColor );",D1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,L1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,I1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,U1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,F1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,O1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,z1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,j1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,H1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,G1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,W1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,X1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,q1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,J1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ew=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ow=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_w=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ew=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ww=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Aw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Nw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ow=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ww=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$w=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_T=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ST=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ET=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,TT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,CT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,DT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vt={alphahash_fragment:t1,alphahash_pars_fragment:n1,alphamap_fragment:i1,alphamap_pars_fragment:r1,alphatest_fragment:s1,alphatest_pars_fragment:a1,aomap_fragment:o1,aomap_pars_fragment:l1,batching_pars_vertex:c1,batching_vertex:u1,begin_vertex:d1,beginnormal_vertex:f1,bsdfs:h1,iridescence_fragment:p1,bumpmap_pars_fragment:m1,clipping_planes_fragment:g1,clipping_planes_pars_fragment:v1,clipping_planes_pars_vertex:x1,clipping_planes_vertex:_1,color_fragment:y1,color_pars_fragment:S1,color_pars_vertex:M1,color_vertex:E1,common:w1,cube_uv_reflection_fragment:T1,defaultnormal_vertex:A1,displacementmap_pars_vertex:b1,displacementmap_vertex:R1,emissivemap_fragment:C1,emissivemap_pars_fragment:N1,colorspace_fragment:P1,colorspace_pars_fragment:D1,envmap_fragment:L1,envmap_common_pars_fragment:I1,envmap_pars_fragment:U1,envmap_pars_vertex:F1,envmap_physical_pars_fragment:$1,envmap_vertex:k1,fog_vertex:O1,fog_pars_vertex:z1,fog_fragment:B1,fog_pars_fragment:j1,gradientmap_pars_fragment:V1,lightmap_pars_fragment:H1,lights_lambert_fragment:G1,lights_lambert_pars_fragment:W1,lights_pars_begin:X1,lights_toon_fragment:q1,lights_toon_pars_fragment:Y1,lights_phong_fragment:K1,lights_phong_pars_fragment:Z1,lights_physical_fragment:Q1,lights_physical_pars_fragment:J1,lights_fragment_begin:ew,lights_fragment_maps:tw,lights_fragment_end:nw,logdepthbuf_fragment:iw,logdepthbuf_pars_fragment:rw,logdepthbuf_pars_vertex:sw,logdepthbuf_vertex:aw,map_fragment:ow,map_pars_fragment:lw,map_particle_fragment:cw,map_particle_pars_fragment:uw,metalnessmap_fragment:dw,metalnessmap_pars_fragment:fw,morphinstance_vertex:hw,morphcolor_vertex:pw,morphnormal_vertex:mw,morphtarget_pars_vertex:gw,morphtarget_vertex:vw,normal_fragment_begin:xw,normal_fragment_maps:_w,normal_pars_fragment:yw,normal_pars_vertex:Sw,normal_vertex:Mw,normalmap_pars_fragment:Ew,clearcoat_normal_fragment_begin:ww,clearcoat_normal_fragment_maps:Tw,clearcoat_pars_fragment:Aw,iridescence_pars_fragment:bw,opaque_fragment:Rw,packing:Cw,premultiplied_alpha_fragment:Nw,project_vertex:Pw,dithering_fragment:Dw,dithering_pars_fragment:Lw,roughnessmap_fragment:Iw,roughnessmap_pars_fragment:Uw,shadowmap_pars_fragment:Fw,shadowmap_pars_vertex:kw,shadowmap_vertex:Ow,shadowmask_pars_fragment:zw,skinbase_vertex:Bw,skinning_pars_vertex:jw,skinning_vertex:Vw,skinnormal_vertex:Hw,specularmap_fragment:Gw,specularmap_pars_fragment:Ww,tonemapping_fragment:Xw,tonemapping_pars_fragment:$w,transmission_fragment:qw,transmission_pars_fragment:Yw,uv_pars_fragment:Kw,uv_pars_vertex:Zw,uv_vertex:Qw,worldpos_vertex:Jw,background_vert:eT,background_frag:tT,backgroundCube_vert:nT,backgroundCube_frag:iT,cube_vert:rT,cube_frag:sT,depth_vert:aT,depth_frag:oT,distanceRGBA_vert:lT,distanceRGBA_frag:cT,equirect_vert:uT,equirect_frag:dT,linedashed_vert:fT,linedashed_frag:hT,meshbasic_vert:pT,meshbasic_frag:mT,meshlambert_vert:gT,meshlambert_frag:vT,meshmatcap_vert:xT,meshmatcap_frag:_T,meshnormal_vert:yT,meshnormal_frag:ST,meshphong_vert:MT,meshphong_frag:ET,meshphysical_vert:wT,meshphysical_frag:TT,meshtoon_vert:AT,meshtoon_frag:bT,points_vert:RT,points_frag:CT,shadow_vert:NT,shadow_frag:PT,sprite_vert:DT,sprite_frag:LT},Ue={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Ii={basic:{uniforms:kn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:kn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new bt(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:kn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:kn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:kn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new bt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:kn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:kn([Ue.points,Ue.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:kn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:kn([Ue.common,Ue.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:kn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:kn([Ue.sprite,Ue.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:kn([Ue.common,Ue.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:kn([Ue.lights,Ue.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Ii.physical={uniforms:kn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const nc={r:0,b:0,g:0},cs=new Ci,IT=new sn;function UT(r,e,t,s,o,l,d){const f=new bt(0);let p=l===!0?0:1,m,v,x=null,y=0,M=null;function w(D){let R=D.isScene===!0?D.background:null;return R&&R.isTexture&&(R=(D.backgroundBlurriness>0?t:e).get(R)),R}function T(D){let R=!1;const j=w(D);j===null?_(f,p):j&&j.isColor&&(_(j,1),R=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?s.buffers.color.setClear(0,0,0,1,d):P==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(r.autoClear||R)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(D,R){const j=w(R);j&&(j.isCubeTexture||j.mapping===Mc)?(v===void 0&&(v=new ri(new Ss(1,1,1),new jr({name:"BackgroundCubeMaterial",uniforms:ga(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(P,k,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),cs.copy(R.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,j.isCubeTexture&&j.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),v.material.uniforms.envMap.value=j,v.material.uniforms.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(IT.makeRotationFromEuler(cs)),v.material.toneMapped=It.getTransfer(j.colorSpace)!==jt,(x!==j||y!==j.version||M!==r.toneMapping)&&(v.material.needsUpdate=!0,x=j,y=j.version,M=r.toneMapping),v.layers.enableAll(),D.unshift(v,v.geometry,v.material,0,0,null)):j&&j.isTexture&&(m===void 0&&(m=new ri(new Ao(2,2),new jr({name:"BackgroundMaterial",uniforms:ga(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=j,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.toneMapped=It.getTransfer(j.colorSpace)!==jt,j.matrixAutoUpdate===!0&&j.updateMatrix(),m.material.uniforms.uvTransform.value.copy(j.matrix),(x!==j||y!==j.version||M!==r.toneMapping)&&(m.material.needsUpdate=!0,x=j,y=j.version,M=r.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function _(D,R){D.getRGB(nc,Tx(r)),s.buffers.color.setClear(nc.r,nc.g,nc.b,R,d)}function F(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(D,R=1){f.set(D),p=R,_(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,_(f,p)},render:T,addToRenderList:S,dispose:F}}function FT(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=y(null);let l=o,d=!1;function f(C,V,$,te,Z){let ce=!1;const K=x(te,$,V);l!==K&&(l=K,m(l.object)),ce=M(C,te,$,Z),ce&&w(C,te,$,Z),Z!==null&&e.update(Z,r.ELEMENT_ARRAY_BUFFER),(ce||d)&&(d=!1,R(C,V,$,te),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function p(){return r.createVertexArray()}function m(C){return r.bindVertexArray(C)}function v(C){return r.deleteVertexArray(C)}function x(C,V,$){const te=$.wireframe===!0;let Z=s[C.id];Z===void 0&&(Z={},s[C.id]=Z);let ce=Z[V.id];ce===void 0&&(ce={},Z[V.id]=ce);let K=ce[te];return K===void 0&&(K=y(p()),ce[te]=K),K}function y(C){const V=[],$=[],te=[];for(let Z=0;Z<t;Z++)V[Z]=0,$[Z]=0,te[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:$,attributeDivisors:te,object:C,attributes:{},index:null}}function M(C,V,$,te){const Z=l.attributes,ce=V.attributes;let K=0;const fe=$.getAttributes();for(const I in fe)if(fe[I].location>=0){const de=Z[I];let O=ce[I];if(O===void 0&&(I==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),I==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),de===void 0||de.attribute!==O||O&&de.data!==O.data)return!0;K++}return l.attributesNum!==K||l.index!==te}function w(C,V,$,te){const Z={},ce=V.attributes;let K=0;const fe=$.getAttributes();for(const I in fe)if(fe[I].location>=0){let de=ce[I];de===void 0&&(I==="instanceMatrix"&&C.instanceMatrix&&(de=C.instanceMatrix),I==="instanceColor"&&C.instanceColor&&(de=C.instanceColor));const O={};O.attribute=de,de&&de.data&&(O.data=de.data),Z[I]=O,K++}l.attributes=Z,l.attributesNum=K,l.index=te}function T(){const C=l.newAttributes;for(let V=0,$=C.length;V<$;V++)C[V]=0}function S(C){_(C,0)}function _(C,V){const $=l.newAttributes,te=l.enabledAttributes,Z=l.attributeDivisors;$[C]=1,te[C]===0&&(r.enableVertexAttribArray(C),te[C]=1),Z[C]!==V&&(r.vertexAttribDivisor(C,V),Z[C]=V)}function F(){const C=l.newAttributes,V=l.enabledAttributes;for(let $=0,te=V.length;$<te;$++)V[$]!==C[$]&&(r.disableVertexAttribArray($),V[$]=0)}function D(C,V,$,te,Z,ce,K){K===!0?r.vertexAttribIPointer(C,V,$,Z,ce):r.vertexAttribPointer(C,V,$,te,Z,ce)}function R(C,V,$,te){T();const Z=te.attributes,ce=$.getAttributes(),K=V.defaultAttributeValues;for(const fe in ce){const I=ce[fe];if(I.location>=0){let ae=Z[fe];if(ae===void 0&&(fe==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),fe==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor)),ae!==void 0){const de=ae.normalized,O=ae.itemSize,ie=e.get(ae);if(ie===void 0)continue;const Re=ie.buffer,Pe=ie.type,Te=ie.bytesPerElement,ne=Pe===r.INT||Pe===r.UNSIGNED_INT||ae.gpuType===Zf;if(ae.isInterleavedBufferAttribute){const se=ae.data,_e=se.stride,Ne=ae.offset;if(se.isInstancedInterleavedBuffer){for(let De=0;De<I.locationSize;De++)_(I.location+De,se.meshPerAttribute);C.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let De=0;De<I.locationSize;De++)S(I.location+De);r.bindBuffer(r.ARRAY_BUFFER,Re);for(let De=0;De<I.locationSize;De++)D(I.location+De,O/I.locationSize,Pe,de,_e*Te,(Ne+O/I.locationSize*De)*Te,ne)}else{if(ae.isInstancedBufferAttribute){for(let se=0;se<I.locationSize;se++)_(I.location+se,ae.meshPerAttribute);C.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let se=0;se<I.locationSize;se++)S(I.location+se);r.bindBuffer(r.ARRAY_BUFFER,Re);for(let se=0;se<I.locationSize;se++)D(I.location+se,O/I.locationSize,Pe,de,O*Te,O/I.locationSize*se*Te,ne)}}else if(K!==void 0){const de=K[fe];if(de!==void 0)switch(de.length){case 2:r.vertexAttrib2fv(I.location,de);break;case 3:r.vertexAttrib3fv(I.location,de);break;case 4:r.vertexAttrib4fv(I.location,de);break;default:r.vertexAttrib1fv(I.location,de)}}}}F()}function j(){z();for(const C in s){const V=s[C];for(const $ in V){const te=V[$];for(const Z in te)v(te[Z].object),delete te[Z];delete V[$]}delete s[C]}}function P(C){if(s[C.id]===void 0)return;const V=s[C.id];for(const $ in V){const te=V[$];for(const Z in te)v(te[Z].object),delete te[Z];delete V[$]}delete s[C.id]}function k(C){for(const V in s){const $=s[V];if($[C.id]===void 0)continue;const te=$[C.id];for(const Z in te)v(te[Z].object),delete te[Z];delete $[C.id]}}function z(){N(),d=!0,l!==o&&(l=o,m(l.object))}function N(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:z,resetDefaultState:N,dispose:j,releaseStatesOfGeometry:P,releaseStatesOfProgram:k,initAttributes:T,enableAttribute:S,disableUnusedAttributes:F}}function kT(r,e,t){let s;function o(m){s=m}function l(m,v){r.drawArrays(s,m,v),t.update(v,s,1)}function d(m,v,x){x!==0&&(r.drawArraysInstanced(s,m,v,x),t.update(v,s,x))}function f(m,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,v,0,x);let M=0;for(let w=0;w<x;w++)M+=v[w];t.update(M,s,1)}function p(m,v,x,y){if(x===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let w=0;w<m.length;w++)d(m[w],v[w],y[w]);else{M.multiDrawArraysInstancedWEBGL(s,m,0,v,0,y,0,x);let w=0;for(let T=0;T<x;T++)w+=v[T]*y[T];t.update(w,s,1)}}this.setMode=o,this.render=l,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function OT(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(k){return!(k!==bi&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const z=k===Eo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==ji&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==or&&!z)}function p(k){if(k==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const x=t.logarithmicDepthBuffer===!0,y=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),F=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),j=w>0,P=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:x,reversedDepthBuffer:y,maxTextures:M,maxVertexTextures:w,maxTextureSize:T,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:F,maxVaryings:D,maxFragmentUniforms:R,vertexTextures:j,maxSamples:P}}function zT(r){const e=this;let t=null,s=0,o=!1,l=!1;const d=new ds,f=new gt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const M=x.length!==0||y||s!==0||o;return o=y,s=x.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,y){t=v(x,y,0)},this.setState=function(x,y,M){const w=x.clippingPlanes,T=x.clipIntersection,S=x.clipShadows,_=r.get(x);if(!o||w===null||w.length===0||l&&!S)l?v(null):m();else{const F=l?0:s,D=F*4;let R=_.clippingState||null;p.value=R,R=v(w,y,D,M);for(let j=0;j!==D;++j)R[j]=t[j];_.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=F}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(x,y,M,w){const T=x!==null?x.length:0;let S=null;if(T!==0){if(S=p.value,w!==!0||S===null){const _=M+T*4,F=y.matrixWorldInverse;f.getNormalMatrix(F),(S===null||S.length<_)&&(S=new Float32Array(_));for(let D=0,R=M;D!==T;++D,R+=4)d.copy(x[D]).applyMatrix4(F,f),d.normal.toArray(S,R),S[R+3]=d.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function BT(r){let e=new WeakMap;function t(d,f){return f===af?d.mapping=ha:f===of&&(d.mapping=pa),d}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===af||f===of)if(e.has(d)){const p=e.get(d).texture;return t(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new OE(p.height);return m.fromEquirectangularTexture(r,d),e.set(d,m),d.addEventListener("dispose",o),t(m.texture,d.mapping)}else return null}}return d}function o(d){const f=d.target;f.removeEventListener("dispose",o);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const la=4,Ng=[.125,.215,.35,.446,.526,.582],ps=20,Fd=new Px,Pg=new bt;let kd=null,Od=0,zd=0,Bd=!1;const fs=(1+Math.sqrt(5))/2,oa=1/fs,Dg=[new ee(-fs,oa,0),new ee(fs,oa,0),new ee(-oa,0,fs),new ee(oa,0,fs),new ee(0,fs,-oa),new ee(0,fs,oa),new ee(-1,1,-1),new ee(1,1,-1),new ee(-1,1,1),new ee(1,1,1)],jT=new ee;class Lg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,o=100,l={}){const{size:d=256,position:f=jT}=l;kd=this._renderer.getRenderTarget(),Od=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,o,p,f),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ug(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kd,Od,zd),this._renderer.xr.enabled=Bd,e.scissorTest=!1,ic(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ha||e.mapping===pa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kd=this._renderer.getRenderTarget(),Od=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Fi,minFilter:Fi,generateMipmaps:!1,type:Eo,format:bi,colorSpace:ma,depthBuffer:!1},o=Ig(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ig(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=VT(l)),this._blurMaterial=HT(l,e,t)}return o}_compileMaterial(e){const t=new ri(this._lodPlanes[0],e);this._renderer.compile(t,Fd)}_sceneToCubeUV(e,t,s,o,l){const p=new mi(90,1,t,s),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,y=x.autoClear,M=x.toneMapping;x.getClearColor(Pg),x.toneMapping=zr,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null));const T=new xc({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1}),S=new ri(new Ss,T);let _=!1;const F=e.background;F?F.isColor&&(T.color.copy(F),e.background=null,_=!0):(T.color.copy(Pg),_=!0);for(let D=0;D<6;D++){const R=D%3;R===0?(p.up.set(0,m[D],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+v[D],l.y,l.z)):R===1?(p.up.set(0,0,m[D]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+v[D],l.z)):(p.up.set(0,m[D],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+v[D]));const j=this._cubeSize;ic(o,R*j,D>2?j:0,j,j),x.setRenderTarget(o),_&&x.render(S,p),x.render(e,p)}S.geometry.dispose(),S.material.dispose(),x.toneMapping=M,x.autoClear=y,e.background=F}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===ha||e.mapping===pa;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ug());const l=o?this._cubemapMaterial:this._equirectMaterial,d=new ri(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;ic(t,0,0,3*p,2*p),s.setRenderTarget(t),s.render(d,Fd)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const d=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Dg[(o-l-1)%Dg.length];this._blur(e,l-1,l,d,f)}t.autoClear=s}_blur(e,t,s,o,l){const d=this._pingPongRenderTarget;this._halfBlur(e,d,t,s,o,"latitudinal",l),this._halfBlur(d,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,d,f){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,x=new ri(this._lodPlanes[o],m),y=m.uniforms,M=this._sizeLods[s]-1,w=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*ps-1),T=l/w,S=isFinite(l)?1+Math.floor(v*T):ps;S>ps&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ps}`);const _=[];let F=0;for(let k=0;k<ps;++k){const z=k/T,N=Math.exp(-z*z/2);_.push(N),k===0?F+=N:k<S&&(F+=2*N)}for(let k=0;k<_.length;k++)_[k]=_[k]/F;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=_,y.latitudinal.value=d==="latitudinal",f&&(y.poleAxis.value=f);const{_lodMax:D}=this;y.dTheta.value=w,y.mipInt.value=D-s;const R=this._sizeLods[o],j=3*R*(o>D-la?o-D+la:0),P=4*(this._cubeSize-R);ic(t,j,P,3*R,2*R),p.setRenderTarget(t),p.render(x,Fd)}}function VT(r){const e=[],t=[],s=[];let o=r;const l=r-la+1+Ng.length;for(let d=0;d<l;d++){const f=Math.pow(2,o);t.push(f);let p=1/f;d>r-la?p=Ng[d-r+la-1]:d===0&&(p=0),s.push(p);const m=1/(f-2),v=-m,x=1+m,y=[v,v,x,v,x,x,v,v,x,x,v,x],M=6,w=6,T=3,S=2,_=1,F=new Float32Array(T*w*M),D=new Float32Array(S*w*M),R=new Float32Array(_*w*M);for(let P=0;P<M;P++){const k=P%3*2/3-1,z=P>2?0:-1,N=[k,z,0,k+2/3,z,0,k+2/3,z+1,0,k,z,0,k+2/3,z+1,0,k,z+1,0];F.set(N,T*w*P),D.set(y,S*w*P);const C=[P,P,P,P,P,P];R.set(C,_*w*P)}const j=new Vr;j.setAttribute("position",new Oi(F,T)),j.setAttribute("uv",new Oi(D,S)),j.setAttribute("faceIndex",new Oi(R,_)),e.push(j),o>la&&o--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Ig(r,e,t){const s=new ys(r,e,t);return s.texture.mapping=Mc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ic(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function HT(r,e,t){const s=new Float32Array(ps),o=new ee(0,1,0);return new jr({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Or,depthTest:!1,depthWrite:!1})}function Ug(){return new jr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Or,depthTest:!1,depthWrite:!1})}function Fg(){return new jr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Or,depthTest:!1,depthWrite:!1})}function ch(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function GT(r){let e=new WeakMap,t=null;function s(f){if(f&&f.isTexture){const p=f.mapping,m=p===af||p===of,v=p===ha||p===pa;if(m||v){let x=e.get(f);const y=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==y)return t===null&&(t=new Lg(r)),x=m?t.fromEquirectangular(f,x):t.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{const M=f.image;return m&&M&&M.height>0||v&&M&&o(M)?(t===null&&(t=new Lg(r)),x=m?t.fromEquirectangular(f):t.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",l),x.texture):null}}}return f}function o(f){let p=0;const m=6;for(let v=0;v<m;v++)f[v]!==void 0&&p++;return p===m}function l(f){const p=f.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:d}}function WT(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(s)}return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&yo("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function XT(r,e,t,s){const o={},l=new WeakMap;function d(x){const y=x.target;y.index!==null&&e.remove(y.index);for(const w in y.attributes)e.remove(y.attributes[w]);y.removeEventListener("dispose",d),delete o[y.id];const M=l.get(y);M&&(e.remove(M),l.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function f(x,y){return o[y.id]===!0||(y.addEventListener("dispose",d),o[y.id]=!0,t.memory.geometries++),y}function p(x){const y=x.attributes;for(const M in y)e.update(y[M],r.ARRAY_BUFFER)}function m(x){const y=[],M=x.index,w=x.attributes.position;let T=0;if(M!==null){const F=M.array;T=M.version;for(let D=0,R=F.length;D<R;D+=3){const j=F[D+0],P=F[D+1],k=F[D+2];y.push(j,P,P,k,k,j)}}else if(w!==void 0){const F=w.array;T=w.version;for(let D=0,R=F.length/3-1;D<R;D+=3){const j=D+0,P=D+1,k=D+2;y.push(j,P,P,k,k,j)}}else return;const S=new(_x(y)?wx:Ex)(y,1);S.version=T;const _=l.get(x);_&&e.remove(_),l.set(x,S)}function v(x){const y=l.get(x);if(y){const M=x.index;M!==null&&y.version<M.version&&m(x)}else m(x);return l.get(x)}return{get:f,update:p,getWireframeAttribute:v}}function $T(r,e,t){let s;function o(y){s=y}let l,d;function f(y){l=y.type,d=y.bytesPerElement}function p(y,M){r.drawElements(s,M,l,y*d),t.update(M,s,1)}function m(y,M,w){w!==0&&(r.drawElementsInstanced(s,M,l,y*d,w),t.update(M,s,w))}function v(y,M,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,l,y,0,w);let S=0;for(let _=0;_<w;_++)S+=M[_];t.update(S,s,1)}function x(y,M,w,T){if(w===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<y.length;_++)m(y[_]/d,M[_],T[_]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,l,y,0,T,0,w);let _=0;for(let F=0;F<w;F++)_+=M[F]*T[F];t.update(_,s,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=x}function qT(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,d,f){switch(t.calls++,d){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function YT(r,e,t){const s=new WeakMap,o=new en;function l(d,f,p){const m=d.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=v!==void 0?v.length:0;let y=s.get(f);if(y===void 0||y.count!==x){let N=function(){k.dispose(),s.delete(f),f.removeEventListener("dispose",N)};y!==void 0&&y.texture.dispose();const M=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,T=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],_=f.morphAttributes.normal||[],F=f.morphAttributes.color||[];let D=0;M===!0&&(D=1),w===!0&&(D=2),T===!0&&(D=3);let R=f.attributes.position.count*D,j=1;R>e.maxTextureSize&&(j=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const P=new Float32Array(R*j*4*x),k=new yx(P,R,j,x);k.type=or,k.needsUpdate=!0;const z=D*4;for(let C=0;C<x;C++){const V=S[C],$=_[C],te=F[C],Z=R*j*4*C;for(let ce=0;ce<V.count;ce++){const K=ce*z;M===!0&&(o.fromBufferAttribute(V,ce),P[Z+K+0]=o.x,P[Z+K+1]=o.y,P[Z+K+2]=o.z,P[Z+K+3]=0),w===!0&&(o.fromBufferAttribute($,ce),P[Z+K+4]=o.x,P[Z+K+5]=o.y,P[Z+K+6]=o.z,P[Z+K+7]=0),T===!0&&(o.fromBufferAttribute(te,ce),P[Z+K+8]=o.x,P[Z+K+9]=o.y,P[Z+K+10]=o.z,P[Z+K+11]=te.itemSize===4?o.w:1)}}y={count:x,texture:k,size:new mt(R,j)},s.set(f,y),f.addEventListener("dispose",N)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",d.morphTexture,t);else{let M=0;for(let T=0;T<m.length;T++)M+=m[T];const w=f.morphTargetsRelative?1:1-M;p.getUniforms().setValue(r,"morphTargetBaseInfluence",w),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",y.texture,t),p.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:l}}function KT(r,e,t,s){let o=new WeakMap;function l(p){const m=s.render.frame,v=p.geometry,x=e.get(p,v);if(o.get(x)!==m&&(e.update(x),o.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==m&&(t.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,r.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;o.get(y)!==m&&(y.update(),o.set(y,m))}return x}function d(){o=new WeakMap}function f(p){const m=p.target;m.removeEventListener("dispose",f),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:d}}const Lx=new qn,kg=new Rx(1,1),Ix=new yx,Ux=new yE,Fx=new bx,Og=[],zg=[],Bg=new Float32Array(16),jg=new Float32Array(9),Vg=new Float32Array(4);function wa(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=Og[o];if(l===void 0&&(l=new Float32Array(o),Og[o]=l),e!==0){s.toArray(l,0);for(let d=1,f=0;d!==e;++d)f+=t,r[d].toArray(l,f)}return l}function hn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function pn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function Ec(r,e){let t=zg[e];t===void 0&&(t=new Int32Array(e),zg[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function ZT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function QT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2fv(this.addr,e),pn(t,e)}}function JT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;r.uniform3fv(this.addr,e),pn(t,e)}}function eA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4fv(this.addr,e),pn(t,e)}}function tA(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(hn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,s))return;Vg.set(s),r.uniformMatrix2fv(this.addr,!1,Vg),pn(t,s)}}function nA(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(hn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,s))return;jg.set(s),r.uniformMatrix3fv(this.addr,!1,jg),pn(t,s)}}function iA(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(hn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,s))return;Bg.set(s),r.uniformMatrix4fv(this.addr,!1,Bg),pn(t,s)}}function rA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function sA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2iv(this.addr,e),pn(t,e)}}function aA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;r.uniform3iv(this.addr,e),pn(t,e)}}function oA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4iv(this.addr,e),pn(t,e)}}function lA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function cA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2uiv(this.addr,e),pn(t,e)}}function uA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;r.uniform3uiv(this.addr,e),pn(t,e)}}function dA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4uiv(this.addr,e),pn(t,e)}}function fA(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(kg.compareFunction=xx,l=kg):l=Lx,t.setTexture2D(e||l,o)}function hA(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||Ux,o)}function pA(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||Fx,o)}function mA(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||Ix,o)}function gA(r){switch(r){case 5126:return ZT;case 35664:return QT;case 35665:return JT;case 35666:return eA;case 35674:return tA;case 35675:return nA;case 35676:return iA;case 5124:case 35670:return rA;case 35667:case 35671:return sA;case 35668:case 35672:return aA;case 35669:case 35673:return oA;case 5125:return lA;case 36294:return cA;case 36295:return uA;case 36296:return dA;case 35678:case 36198:case 36298:case 36306:case 35682:return fA;case 35679:case 36299:case 36307:return hA;case 35680:case 36300:case 36308:case 36293:return pA;case 36289:case 36303:case 36311:case 36292:return mA}}function vA(r,e){r.uniform1fv(this.addr,e)}function xA(r,e){const t=wa(e,this.size,2);r.uniform2fv(this.addr,t)}function _A(r,e){const t=wa(e,this.size,3);r.uniform3fv(this.addr,t)}function yA(r,e){const t=wa(e,this.size,4);r.uniform4fv(this.addr,t)}function SA(r,e){const t=wa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function MA(r,e){const t=wa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function EA(r,e){const t=wa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function wA(r,e){r.uniform1iv(this.addr,e)}function TA(r,e){r.uniform2iv(this.addr,e)}function AA(r,e){r.uniform3iv(this.addr,e)}function bA(r,e){r.uniform4iv(this.addr,e)}function RA(r,e){r.uniform1uiv(this.addr,e)}function CA(r,e){r.uniform2uiv(this.addr,e)}function NA(r,e){r.uniform3uiv(this.addr,e)}function PA(r,e){r.uniform4uiv(this.addr,e)}function DA(r,e,t){const s=this.cache,o=e.length,l=Ec(t,o);hn(s,l)||(r.uniform1iv(this.addr,l),pn(s,l));for(let d=0;d!==o;++d)t.setTexture2D(e[d]||Lx,l[d])}function LA(r,e,t){const s=this.cache,o=e.length,l=Ec(t,o);hn(s,l)||(r.uniform1iv(this.addr,l),pn(s,l));for(let d=0;d!==o;++d)t.setTexture3D(e[d]||Ux,l[d])}function IA(r,e,t){const s=this.cache,o=e.length,l=Ec(t,o);hn(s,l)||(r.uniform1iv(this.addr,l),pn(s,l));for(let d=0;d!==o;++d)t.setTextureCube(e[d]||Fx,l[d])}function UA(r,e,t){const s=this.cache,o=e.length,l=Ec(t,o);hn(s,l)||(r.uniform1iv(this.addr,l),pn(s,l));for(let d=0;d!==o;++d)t.setTexture2DArray(e[d]||Ix,l[d])}function FA(r){switch(r){case 5126:return vA;case 35664:return xA;case 35665:return _A;case 35666:return yA;case 35674:return SA;case 35675:return MA;case 35676:return EA;case 5124:case 35670:return wA;case 35667:case 35671:return TA;case 35668:case 35672:return AA;case 35669:case 35673:return bA;case 5125:return RA;case 36294:return CA;case 36295:return NA;case 36296:return PA;case 35678:case 36198:case 36298:case 36306:case 35682:return DA;case 35679:case 36299:case 36307:return LA;case 35680:case 36300:case 36308:case 36293:return IA;case 36289:case 36303:case 36311:case 36292:return UA}}class kA{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=gA(t.type)}}class OA{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=FA(t.type)}}class zA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,d=o.length;l!==d;++l){const f=o[l];f.setValue(e,t[f.id],s)}}}const jd=/(\w+)(\])?(\[|\.)?/g;function Hg(r,e){r.seq.push(e),r.map[e.id]=e}function BA(r,e,t){const s=r.name,o=s.length;for(jd.lastIndex=0;;){const l=jd.exec(s),d=jd.lastIndex;let f=l[1];const p=l[2]==="]",m=l[3];if(p&&(f=f|0),m===void 0||m==="["&&d+2===o){Hg(t,m===void 0?new kA(f,r,e):new OA(f,r,e));break}else{let x=t.map[f];x===void 0&&(x=new zA(f),Hg(t,x)),t=x}}}class uc{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const l=e.getActiveUniform(t,o),d=e.getUniformLocation(t,l.name);BA(l,d,this)}}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,d=t.length;l!==d;++l){const f=t[l],p=s[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const d=e[o];d.id in t&&s.push(d)}return s}}function Gg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const jA=37297;let VA=0;function HA(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let d=o;d<l;d++){const f=d+1;s.push(`${f===e?">":" "} ${f}: ${t[d]}`)}return s.join(`
`)}const Wg=new gt;function GA(r){It._getMatrix(Wg,It.workingColorSpace,r);const e=`mat3( ${Wg.elements.map(t=>t.toFixed(4))} )`;switch(It.getTransfer(r)){case mc:return[e,"LinearTransferOETF"];case jt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Xg(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";const d=/ERROR: 0:(\d+)/.exec(l);if(d){const f=parseInt(d[1]);return t.toUpperCase()+`

`+l+`

`+HA(r.getShaderSource(e),f)}else return l}function WA(r,e){const t=GA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function XA(r,e){let t;switch(e){case qM:t="Linear";break;case YM:t="Reinhard";break;case KM:t="Cineon";break;case ZM:t="ACESFilmic";break;case JM:t="AgX";break;case eE:t="Neutral";break;case QM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const rc=new ee;function $A(){It.getLuminanceCoefficients(rc);const r=rc.x.toFixed(4),e=rc.y.toFixed(4),t=rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(uo).join(`
`)}function YA(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function KA(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),d=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[d]={type:l.type,location:r.getAttribLocation(e,d),locationSize:f}}return t}function uo(r){return r!==""}function $g(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZA=/^[ \t]*#include +<([\w\d./]+)>/gm;function zf(r){return r.replace(ZA,JA)}const QA=new Map;function JA(r,e){let t=vt[e];if(t===void 0){const s=QA.get(e);if(s!==void 0)t=vt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return zf(t)}const eb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yg(r){return r.replace(eb,tb)}function tb(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Kg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nb(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ox?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===lx?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===rr&&(e="SHADOWMAP_TYPE_VSM"),e}function ib(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ha:case pa:e="ENVMAP_TYPE_CUBE";break;case Mc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rb(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case pa:e="ENVMAP_MODE_REFRACTION";break}return e}function sb(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Sc:e="ENVMAP_BLENDING_MULTIPLY";break;case XM:e="ENVMAP_BLENDING_MIX";break;case $M:e="ENVMAP_BLENDING_ADD";break}return e}function ab(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function ob(r,e,t,s){const o=r.getContext(),l=t.defines;let d=t.vertexShader,f=t.fragmentShader;const p=nb(t),m=ib(t),v=rb(t),x=sb(t),y=ab(t),M=qA(t),w=YA(l),T=o.createProgram();let S,_,F=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(uo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(uo).join(`
`),_.length>0&&(_+=`
`)):(S=[Kg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(uo).join(`
`),_=[Kg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",t.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zr?"#define TONE_MAPPING":"",t.toneMapping!==zr?vt.tonemapping_pars_fragment:"",t.toneMapping!==zr?XA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,WA("linearToOutputTexel",t.outputColorSpace),$A(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(uo).join(`
`)),d=zf(d),d=$g(d,t),d=qg(d,t),f=zf(f),f=$g(f,t),f=qg(f,t),d=Yg(d),f=Yg(f),t.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",t.glslVersion===lg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const D=F+S+d,R=F+_+f,j=Gg(o,o.VERTEX_SHADER,D),P=Gg(o,o.FRAGMENT_SHADER,R);o.attachShader(T,j),o.attachShader(T,P),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function k(V){if(r.debug.checkShaderErrors){const $=o.getProgramInfoLog(T)||"",te=o.getShaderInfoLog(j)||"",Z=o.getShaderInfoLog(P)||"",ce=$.trim(),K=te.trim(),fe=Z.trim();let I=!0,ae=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(I=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,T,j,P);else{const de=Xg(o,j,"vertex"),O=Xg(o,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ce+`
`+de+`
`+O)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(K===""||fe==="")&&(ae=!1);ae&&(V.diagnostics={runnable:I,programLog:ce,vertexShader:{log:K,prefix:S},fragmentShader:{log:fe,prefix:_}})}o.deleteShader(j),o.deleteShader(P),z=new uc(o,T),N=KA(o,T)}let z;this.getUniforms=function(){return z===void 0&&k(this),z};let N;this.getAttributes=function(){return N===void 0&&k(this),N};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(T,jA)),C},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=VA++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=j,this.fragmentShader=P,this}let lb=0;class cb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(l)===!1&&(d.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new ub(e),t.set(e,s)),s}}class ub{constructor(e){this.id=lb++,this.code=e,this.usedTimes=0}}function db(r,e,t,s,o,l,d){const f=new Sx,p=new cb,m=new Set,v=[],x=o.logarithmicDepthBuffer,y=o.vertexTextures;let M=o.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(N){return m.add(N),N===0?"uv":`uv${N}`}function S(N,C,V,$,te){const Z=$.fog,ce=te.geometry,K=N.isMeshStandardMaterial?$.environment:null,fe=(N.isMeshStandardMaterial?t:e).get(N.envMap||K),I=fe&&fe.mapping===Mc?fe.image.height:null,ae=w[N.type];N.precision!==null&&(M=o.getMaxPrecision(N.precision),M!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",M,"instead."));const de=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,O=de!==void 0?de.length:0;let ie=0;ce.morphAttributes.position!==void 0&&(ie=1),ce.morphAttributes.normal!==void 0&&(ie=2),ce.morphAttributes.color!==void 0&&(ie=3);let Re,Pe,Te,ne;if(ae){const Ct=Ii[ae];Re=Ct.vertexShader,Pe=Ct.fragmentShader}else Re=N.vertexShader,Pe=N.fragmentShader,p.update(N),Te=p.getVertexShaderID(N),ne=p.getFragmentShaderID(N);const se=r.getRenderTarget(),_e=r.state.buffers.depth.getReversed(),Ne=te.isInstancedMesh===!0,De=te.isBatchedMesh===!0,lt=!!N.map,Ft=!!N.matcap,B=!!fe,zt=!!N.aoMap,ht=!!N.lightMap,st=!!N.bumpMap,Xe=!!N.normalMap,Vt=!!N.displacementMap,$e=!!N.emissiveMap,dt=!!N.metalnessMap,Xt=!!N.roughnessMap,$t=N.anisotropy>0,L=N.clearcoat>0,A=N.dispersion>0,Q=N.iridescence>0,pe=N.sheen>0,ve=N.transmission>0,he=$t&&!!N.anisotropyMap,Qe=L&&!!N.clearcoatMap,be=L&&!!N.clearcoatNormalMap,je=L&&!!N.clearcoatRoughnessMap,Je=Q&&!!N.iridescenceMap,we=Q&&!!N.iridescenceThicknessMap,Fe=pe&&!!N.sheenColorMap,at=pe&&!!N.sheenRoughnessMap,Ke=!!N.specularMap,Le=!!N.specularColorMap,pt=!!N.specularIntensityMap,G=ve&&!!N.transmissionMap,Me=ve&&!!N.thicknessMap,Ce=!!N.gradientMap,ke=!!N.alphaMap,Se=N.alphaTest>0,me=!!N.alphaHash,qe=!!N.extensions;let ft=zr;N.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ft=r.toneMapping);const kt={shaderID:ae,shaderType:N.type,shaderName:N.name,vertexShader:Re,fragmentShader:Pe,defines:N.defines,customVertexShaderID:Te,customFragmentShaderID:ne,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:M,batching:De,batchingColor:De&&te._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&te.instanceColor!==null,instancingMorph:Ne&&te.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:se===null?r.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ma,alphaToCoverage:!!N.alphaToCoverage,map:lt,matcap:Ft,envMap:B,envMapMode:B&&fe.mapping,envMapCubeUVHeight:I,aoMap:zt,lightMap:ht,bumpMap:st,normalMap:Xe,displacementMap:y&&Vt,emissiveMap:$e,normalMapObjectSpace:Xe&&N.normalMapType===rE,normalMapTangentSpace:Xe&&N.normalMapType===ih,metalnessMap:dt,roughnessMap:Xt,anisotropy:$t,anisotropyMap:he,clearcoat:L,clearcoatMap:Qe,clearcoatNormalMap:be,clearcoatRoughnessMap:je,dispersion:A,iridescence:Q,iridescenceMap:Je,iridescenceThicknessMap:we,sheen:pe,sheenColorMap:Fe,sheenRoughnessMap:at,specularMap:Ke,specularColorMap:Le,specularIntensityMap:pt,transmission:ve,transmissionMap:G,thicknessMap:Me,gradientMap:Ce,opaque:N.transparent===!1&&N.blending===ca&&N.alphaToCoverage===!1,alphaMap:ke,alphaTest:Se,alphaHash:me,combine:N.combine,mapUv:lt&&T(N.map.channel),aoMapUv:zt&&T(N.aoMap.channel),lightMapUv:ht&&T(N.lightMap.channel),bumpMapUv:st&&T(N.bumpMap.channel),normalMapUv:Xe&&T(N.normalMap.channel),displacementMapUv:Vt&&T(N.displacementMap.channel),emissiveMapUv:$e&&T(N.emissiveMap.channel),metalnessMapUv:dt&&T(N.metalnessMap.channel),roughnessMapUv:Xt&&T(N.roughnessMap.channel),anisotropyMapUv:he&&T(N.anisotropyMap.channel),clearcoatMapUv:Qe&&T(N.clearcoatMap.channel),clearcoatNormalMapUv:be&&T(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:je&&T(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Je&&T(N.iridescenceMap.channel),iridescenceThicknessMapUv:we&&T(N.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&T(N.sheenColorMap.channel),sheenRoughnessMapUv:at&&T(N.sheenRoughnessMap.channel),specularMapUv:Ke&&T(N.specularMap.channel),specularColorMapUv:Le&&T(N.specularColorMap.channel),specularIntensityMapUv:pt&&T(N.specularIntensityMap.channel),transmissionMapUv:G&&T(N.transmissionMap.channel),thicknessMapUv:Me&&T(N.thicknessMap.channel),alphaMapUv:ke&&T(N.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(Xe||$t),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!ce.attributes.uv&&(lt||ke),fog:!!Z,useFog:N.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:N.flatShading===!0&&N.wireframe===!1,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:_e,skinning:te.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ie,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:N.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:ft,decodeVideoTexture:lt&&N.map.isVideoTexture===!0&&It.getTransfer(N.map.colorSpace)===jt,decodeVideoTextureEmissive:$e&&N.emissiveMap.isVideoTexture===!0&&It.getTransfer(N.emissiveMap.colorSpace)===jt,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===Ui,flipSided:N.side===$n,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:qe&&N.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&N.extensions.multiDraw===!0||De)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return kt.vertexUv1s=m.has(1),kt.vertexUv2s=m.has(2),kt.vertexUv3s=m.has(3),m.clear(),kt}function _(N){const C=[];if(N.shaderID?C.push(N.shaderID):(C.push(N.customVertexShaderID),C.push(N.customFragmentShaderID)),N.defines!==void 0)for(const V in N.defines)C.push(V),C.push(N.defines[V]);return N.isRawShaderMaterial===!1&&(F(C,N),D(C,N),C.push(r.outputColorSpace)),C.push(N.customProgramCacheKey),C.join()}function F(N,C){N.push(C.precision),N.push(C.outputColorSpace),N.push(C.envMapMode),N.push(C.envMapCubeUVHeight),N.push(C.mapUv),N.push(C.alphaMapUv),N.push(C.lightMapUv),N.push(C.aoMapUv),N.push(C.bumpMapUv),N.push(C.normalMapUv),N.push(C.displacementMapUv),N.push(C.emissiveMapUv),N.push(C.metalnessMapUv),N.push(C.roughnessMapUv),N.push(C.anisotropyMapUv),N.push(C.clearcoatMapUv),N.push(C.clearcoatNormalMapUv),N.push(C.clearcoatRoughnessMapUv),N.push(C.iridescenceMapUv),N.push(C.iridescenceThicknessMapUv),N.push(C.sheenColorMapUv),N.push(C.sheenRoughnessMapUv),N.push(C.specularMapUv),N.push(C.specularColorMapUv),N.push(C.specularIntensityMapUv),N.push(C.transmissionMapUv),N.push(C.thicknessMapUv),N.push(C.combine),N.push(C.fogExp2),N.push(C.sizeAttenuation),N.push(C.morphTargetsCount),N.push(C.morphAttributeCount),N.push(C.numDirLights),N.push(C.numPointLights),N.push(C.numSpotLights),N.push(C.numSpotLightMaps),N.push(C.numHemiLights),N.push(C.numRectAreaLights),N.push(C.numDirLightShadows),N.push(C.numPointLightShadows),N.push(C.numSpotLightShadows),N.push(C.numSpotLightShadowsWithMaps),N.push(C.numLightProbes),N.push(C.shadowMapType),N.push(C.toneMapping),N.push(C.numClippingPlanes),N.push(C.numClipIntersection),N.push(C.depthPacking)}function D(N,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),C.gradientMap&&f.enable(22),N.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reversedDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),N.push(f.mask)}function R(N){const C=w[N.type];let V;if(C){const $=Ii[C];V=IE.clone($.uniforms)}else V=N.uniforms;return V}function j(N,C){let V;for(let $=0,te=v.length;$<te;$++){const Z=v[$];if(Z.cacheKey===C){V=Z,++V.usedTimes;break}}return V===void 0&&(V=new ob(r,C,N,l),v.push(V)),V}function P(N){if(--N.usedTimes===0){const C=v.indexOf(N);v[C]=v[v.length-1],v.pop(),N.destroy()}}function k(N){p.remove(N)}function z(){p.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:R,acquireProgram:j,releaseProgram:P,releaseShaderCache:k,programs:v,dispose:z}}function fb(){let r=new WeakMap;function e(d){return r.has(d)}function t(d){let f=r.get(d);return f===void 0&&(f={},r.set(d,f)),f}function s(d){r.delete(d)}function o(d,f,p){r.get(d)[f]=p}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function hb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Zg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Qg(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function d(x,y,M,w,T,S){let _=r[e];return _===void 0?(_={id:x.id,object:x,geometry:y,material:M,groupOrder:w,renderOrder:x.renderOrder,z:T,group:S},r[e]=_):(_.id=x.id,_.object=x,_.geometry=y,_.material=M,_.groupOrder=w,_.renderOrder=x.renderOrder,_.z=T,_.group=S),e++,_}function f(x,y,M,w,T,S){const _=d(x,y,M,w,T,S);M.transmission>0?s.push(_):M.transparent===!0?o.push(_):t.push(_)}function p(x,y,M,w,T,S){const _=d(x,y,M,w,T,S);M.transmission>0?s.unshift(_):M.transparent===!0?o.unshift(_):t.unshift(_)}function m(x,y){t.length>1&&t.sort(x||hb),s.length>1&&s.sort(y||Zg),o.length>1&&o.sort(y||Zg)}function v(){for(let x=e,y=r.length;x<y;x++){const M=r[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:f,unshift:p,finish:v,sort:m}}function pb(){let r=new WeakMap;function e(s,o){const l=r.get(s);let d;return l===void 0?(d=new Qg,r.set(s,[d])):o>=l.length?(d=new Qg,l.push(d)):d=l[o],d}function t(){r=new WeakMap}return{get:e,dispose:t}}function mb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new bt};break;case"SpotLight":t={position:new ee,direction:new ee,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return r[e.id]=t,t}}}function gb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let vb=0;function xb(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function _b(r){const e=new mb,t=gb(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new ee);const o=new ee,l=new sn,d=new sn;function f(m){let v=0,x=0,y=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let M=0,w=0,T=0,S=0,_=0,F=0,D=0,R=0,j=0,P=0,k=0;m.sort(xb);for(let N=0,C=m.length;N<C;N++){const V=m[N],$=V.color,te=V.intensity,Z=V.distance,ce=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)v+=$.r*te,x+=$.g*te,y+=$.b*te;else if(V.isLightProbe){for(let K=0;K<9;K++)s.probe[K].addScaledVector(V.sh.coefficients[K],te);k++}else if(V.isDirectionalLight){const K=e.get(V);if(K.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const fe=V.shadow,I=t.get(V);I.shadowIntensity=fe.intensity,I.shadowBias=fe.bias,I.shadowNormalBias=fe.normalBias,I.shadowRadius=fe.radius,I.shadowMapSize=fe.mapSize,s.directionalShadow[M]=I,s.directionalShadowMap[M]=ce,s.directionalShadowMatrix[M]=V.shadow.matrix,F++}s.directional[M]=K,M++}else if(V.isSpotLight){const K=e.get(V);K.position.setFromMatrixPosition(V.matrixWorld),K.color.copy($).multiplyScalar(te),K.distance=Z,K.coneCos=Math.cos(V.angle),K.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),K.decay=V.decay,s.spot[T]=K;const fe=V.shadow;if(V.map&&(s.spotLightMap[j]=V.map,j++,fe.updateMatrices(V),V.castShadow&&P++),s.spotLightMatrix[T]=fe.matrix,V.castShadow){const I=t.get(V);I.shadowIntensity=fe.intensity,I.shadowBias=fe.bias,I.shadowNormalBias=fe.normalBias,I.shadowRadius=fe.radius,I.shadowMapSize=fe.mapSize,s.spotShadow[T]=I,s.spotShadowMap[T]=ce,R++}T++}else if(V.isRectAreaLight){const K=e.get(V);K.color.copy($).multiplyScalar(te),K.halfWidth.set(V.width*.5,0,0),K.halfHeight.set(0,V.height*.5,0),s.rectArea[S]=K,S++}else if(V.isPointLight){const K=e.get(V);if(K.color.copy(V.color).multiplyScalar(V.intensity),K.distance=V.distance,K.decay=V.decay,V.castShadow){const fe=V.shadow,I=t.get(V);I.shadowIntensity=fe.intensity,I.shadowBias=fe.bias,I.shadowNormalBias=fe.normalBias,I.shadowRadius=fe.radius,I.shadowMapSize=fe.mapSize,I.shadowCameraNear=fe.camera.near,I.shadowCameraFar=fe.camera.far,s.pointShadow[w]=I,s.pointShadowMap[w]=ce,s.pointShadowMatrix[w]=V.shadow.matrix,D++}s.point[w]=K,w++}else if(V.isHemisphereLight){const K=e.get(V);K.skyColor.copy(V.color).multiplyScalar(te),K.groundColor.copy(V.groundColor).multiplyScalar(te),s.hemi[_]=K,_++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ue.LTC_FLOAT_1,s.rectAreaLTC2=Ue.LTC_FLOAT_2):(s.rectAreaLTC1=Ue.LTC_HALF_1,s.rectAreaLTC2=Ue.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=x,s.ambient[2]=y;const z=s.hash;(z.directionalLength!==M||z.pointLength!==w||z.spotLength!==T||z.rectAreaLength!==S||z.hemiLength!==_||z.numDirectionalShadows!==F||z.numPointShadows!==D||z.numSpotShadows!==R||z.numSpotMaps!==j||z.numLightProbes!==k)&&(s.directional.length=M,s.spot.length=T,s.rectArea.length=S,s.point.length=w,s.hemi.length=_,s.directionalShadow.length=F,s.directionalShadowMap.length=F,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=F,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=R+j-P,s.spotLightMap.length=j,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=k,z.directionalLength=M,z.pointLength=w,z.spotLength=T,z.rectAreaLength=S,z.hemiLength=_,z.numDirectionalShadows=F,z.numPointShadows=D,z.numSpotShadows=R,z.numSpotMaps=j,z.numLightProbes=k,s.version=vb++)}function p(m,v){let x=0,y=0,M=0,w=0,T=0;const S=v.matrixWorldInverse;for(let _=0,F=m.length;_<F;_++){const D=m[_];if(D.isDirectionalLight){const R=s.directional[x];R.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),x++}else if(D.isSpotLight){const R=s.spot[M];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),M++}else if(D.isRectAreaLight){const R=s.rectArea[w];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(S),d.identity(),l.copy(D.matrixWorld),l.premultiply(S),d.extractRotation(l),R.halfWidth.set(D.width*.5,0,0),R.halfHeight.set(0,D.height*.5,0),R.halfWidth.applyMatrix4(d),R.halfHeight.applyMatrix4(d),w++}else if(D.isPointLight){const R=s.point[y];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(S),y++}else if(D.isHemisphereLight){const R=s.hemi[T];R.direction.setFromMatrixPosition(D.matrixWorld),R.direction.transformDirection(S),T++}}}return{setup:f,setupView:p,state:s}}function Jg(r){const e=new _b(r),t=[],s=[];function o(v){m.camera=v,t.length=0,s.length=0}function l(v){t.push(v)}function d(v){s.push(v)}function f(){e.setup(t)}function p(v){e.setupView(t,v)}const m={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:d}}function yb(r){let e=new WeakMap;function t(o,l=0){const d=e.get(o);let f;return d===void 0?(f=new Jg(r),e.set(o,[f])):l>=d.length?(f=new Jg(r),d.push(f)):f=d[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const Sb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Eb(r,e,t){let s=new oh;const o=new mt,l=new mt,d=new en,f=new XE({depthPacking:iE}),p=new $E,m={},v=t.maxTextureSize,x={[Br]:$n,[$n]:Br,[Ui]:Ui},y=new jr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:Sb,fragmentShader:Mb}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const w=new Vr;w.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ri(w,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ox;let _=this.type;this.render=function(P,k,z){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;const N=r.getRenderTarget(),C=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),$=r.state;$.setBlending(Or),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const te=_!==rr&&this.type===rr,Z=_===rr&&this.type!==rr;for(let ce=0,K=P.length;ce<K;ce++){const fe=P[ce],I=fe.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;o.copy(I.mapSize);const ae=I.getFrameExtents();if(o.multiply(ae),l.copy(I.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/ae.x),o.x=l.x*ae.x,I.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/ae.y),o.y=l.y*ae.y,I.mapSize.y=l.y)),I.map===null||te===!0||Z===!0){const O=this.type!==rr?{minFilter:Ri,magFilter:Ri}:{};I.map!==null&&I.map.dispose(),I.map=new ys(o.x,o.y,O),I.map.texture.name=fe.name+".shadowMap",I.camera.updateProjectionMatrix()}r.setRenderTarget(I.map),r.clear();const de=I.getViewportCount();for(let O=0;O<de;O++){const ie=I.getViewport(O);d.set(l.x*ie.x,l.y*ie.y,l.x*ie.z,l.y*ie.w),$.viewport(d),I.updateMatrices(fe,O),s=I.getFrustum(),R(k,z,I.camera,fe,this.type)}I.isPointLightShadow!==!0&&this.type===rr&&F(I,z),I.needsUpdate=!1}_=this.type,S.needsUpdate=!1,r.setRenderTarget(N,C,V)};function F(P,k){const z=e.update(T);y.defines.VSM_SAMPLES!==P.blurSamples&&(y.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ys(o.x,o.y)),y.uniforms.shadow_pass.value=P.map.texture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(k,null,z,y,T,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value=P.mapSize,M.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(k,null,z,M,T,null)}function D(P,k,z,N){let C=null;const V=z.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(V!==void 0)C=V;else if(C=z.isPointLight===!0?p:f,r.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const $=C.uuid,te=k.uuid;let Z=m[$];Z===void 0&&(Z={},m[$]=Z);let ce=Z[te];ce===void 0&&(ce=C.clone(),Z[te]=ce,k.addEventListener("dispose",j)),C=ce}if(C.visible=k.visible,C.wireframe=k.wireframe,N===rr?C.side=k.shadowSide!==null?k.shadowSide:k.side:C.side=k.shadowSide!==null?k.shadowSide:x[k.side],C.alphaMap=k.alphaMap,C.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,C.map=k.map,C.clipShadows=k.clipShadows,C.clippingPlanes=k.clippingPlanes,C.clipIntersection=k.clipIntersection,C.displacementMap=k.displacementMap,C.displacementScale=k.displacementScale,C.displacementBias=k.displacementBias,C.wireframeLinewidth=k.wireframeLinewidth,C.linewidth=k.linewidth,z.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const $=r.properties.get(C);$.light=z}return C}function R(P,k,z,N,C){if(P.visible===!1)return;if(P.layers.test(k.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&C===rr)&&(!P.frustumCulled||s.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,P.matrixWorld);const te=e.update(P),Z=P.material;if(Array.isArray(Z)){const ce=te.groups;for(let K=0,fe=ce.length;K<fe;K++){const I=ce[K],ae=Z[I.materialIndex];if(ae&&ae.visible){const de=D(P,ae,N,C);P.onBeforeShadow(r,P,k,z,te,de,I),r.renderBufferDirect(z,null,te,de,P,I),P.onAfterShadow(r,P,k,z,te,de,I)}}}else if(Z.visible){const ce=D(P,Z,N,C);P.onBeforeShadow(r,P,k,z,te,ce,null),r.renderBufferDirect(z,null,te,ce,P,null),P.onAfterShadow(r,P,k,z,te,ce,null)}}const $=P.children;for(let te=0,Z=$.length;te<Z;te++)R($[te],k,z,N,C)}function j(P){P.target.removeEventListener("dispose",j);for(const z in m){const N=m[z],C=P.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}const wb={[Qd]:Jd,[ef]:rf,[tf]:sf,[fa]:nf,[Jd]:Qd,[rf]:ef,[sf]:tf,[nf]:fa};function Tb(r,e){function t(){let G=!1;const Me=new en;let Ce=null;const ke=new en(0,0,0,0);return{setMask:function(Se){Ce!==Se&&!G&&(r.colorMask(Se,Se,Se,Se),Ce=Se)},setLocked:function(Se){G=Se},setClear:function(Se,me,qe,ft,kt){kt===!0&&(Se*=ft,me*=ft,qe*=ft),Me.set(Se,me,qe,ft),ke.equals(Me)===!1&&(r.clearColor(Se,me,qe,ft),ke.copy(Me))},reset:function(){G=!1,Ce=null,ke.set(-1,0,0,0)}}}function s(){let G=!1,Me=!1,Ce=null,ke=null,Se=null;return{setReversed:function(me){if(Me!==me){const qe=e.get("EXT_clip_control");me?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Me=me;const ft=Se;Se=null,this.setClear(ft)}},getReversed:function(){return Me},setTest:function(me){me?se(r.DEPTH_TEST):_e(r.DEPTH_TEST)},setMask:function(me){Ce!==me&&!G&&(r.depthMask(me),Ce=me)},setFunc:function(me){if(Me&&(me=wb[me]),ke!==me){switch(me){case Qd:r.depthFunc(r.NEVER);break;case Jd:r.depthFunc(r.ALWAYS);break;case ef:r.depthFunc(r.LESS);break;case fa:r.depthFunc(r.LEQUAL);break;case tf:r.depthFunc(r.EQUAL);break;case nf:r.depthFunc(r.GEQUAL);break;case rf:r.depthFunc(r.GREATER);break;case sf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ke=me}},setLocked:function(me){G=me},setClear:function(me){Se!==me&&(Me&&(me=1-me),r.clearDepth(me),Se=me)},reset:function(){G=!1,Ce=null,ke=null,Se=null,Me=!1}}}function o(){let G=!1,Me=null,Ce=null,ke=null,Se=null,me=null,qe=null,ft=null,kt=null;return{setTest:function(Ct){G||(Ct?se(r.STENCIL_TEST):_e(r.STENCIL_TEST))},setMask:function(Ct){Me!==Ct&&!G&&(r.stencilMask(Ct),Me=Ct)},setFunc:function(Ct,si,En){(Ce!==Ct||ke!==si||Se!==En)&&(r.stencilFunc(Ct,si,En),Ce=Ct,ke=si,Se=En)},setOp:function(Ct,si,En){(me!==Ct||qe!==si||ft!==En)&&(r.stencilOp(Ct,si,En),me=Ct,qe=si,ft=En)},setLocked:function(Ct){G=Ct},setClear:function(Ct){kt!==Ct&&(r.clearStencil(Ct),kt=Ct)},reset:function(){G=!1,Me=null,Ce=null,ke=null,Se=null,me=null,qe=null,ft=null,kt=null}}}const l=new t,d=new s,f=new o,p=new WeakMap,m=new WeakMap;let v={},x={},y=new WeakMap,M=[],w=null,T=!1,S=null,_=null,F=null,D=null,R=null,j=null,P=null,k=new bt(0,0,0),z=0,N=!1,C=null,V=null,$=null,te=null,Z=null;const ce=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,fe=0;const I=r.getParameter(r.VERSION);I.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(I)[1]),K=fe>=1):I.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),K=fe>=2);let ae=null,de={};const O=r.getParameter(r.SCISSOR_BOX),ie=r.getParameter(r.VIEWPORT),Re=new en().fromArray(O),Pe=new en().fromArray(ie);function Te(G,Me,Ce,ke){const Se=new Uint8Array(4),me=r.createTexture();r.bindTexture(G,me),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qe=0;qe<Ce;qe++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(Me,0,r.RGBA,1,1,ke,0,r.RGBA,r.UNSIGNED_BYTE,Se):r.texImage2D(Me+qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Se);return me}const ne={};ne[r.TEXTURE_2D]=Te(r.TEXTURE_2D,r.TEXTURE_2D,1),ne[r.TEXTURE_CUBE_MAP]=Te(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[r.TEXTURE_2D_ARRAY]=Te(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ne[r.TEXTURE_3D]=Te(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),d.setClear(1),f.setClear(0),se(r.DEPTH_TEST),d.setFunc(fa),st(!1),Xe(ng),se(r.CULL_FACE),zt(Or);function se(G){v[G]!==!0&&(r.enable(G),v[G]=!0)}function _e(G){v[G]!==!1&&(r.disable(G),v[G]=!1)}function Ne(G,Me){return x[G]!==Me?(r.bindFramebuffer(G,Me),x[G]=Me,G===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Me),G===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Me),!0):!1}function De(G,Me){let Ce=M,ke=!1;if(G){Ce=y.get(Me),Ce===void 0&&(Ce=[],y.set(Me,Ce));const Se=G.textures;if(Ce.length!==Se.length||Ce[0]!==r.COLOR_ATTACHMENT0){for(let me=0,qe=Se.length;me<qe;me++)Ce[me]=r.COLOR_ATTACHMENT0+me;Ce.length=Se.length,ke=!0}}else Ce[0]!==r.BACK&&(Ce[0]=r.BACK,ke=!0);ke&&r.drawBuffers(Ce)}function lt(G){return w!==G?(r.useProgram(G),w=G,!0):!1}const Ft={[hs]:r.FUNC_ADD,[CM]:r.FUNC_SUBTRACT,[NM]:r.FUNC_REVERSE_SUBTRACT};Ft[PM]=r.MIN,Ft[DM]=r.MAX;const B={[LM]:r.ZERO,[IM]:r.ONE,[UM]:r.SRC_COLOR,[Kd]:r.SRC_ALPHA,[jM]:r.SRC_ALPHA_SATURATE,[zM]:r.DST_COLOR,[kM]:r.DST_ALPHA,[FM]:r.ONE_MINUS_SRC_COLOR,[Zd]:r.ONE_MINUS_SRC_ALPHA,[BM]:r.ONE_MINUS_DST_COLOR,[OM]:r.ONE_MINUS_DST_ALPHA,[VM]:r.CONSTANT_COLOR,[HM]:r.ONE_MINUS_CONSTANT_COLOR,[GM]:r.CONSTANT_ALPHA,[WM]:r.ONE_MINUS_CONSTANT_ALPHA};function zt(G,Me,Ce,ke,Se,me,qe,ft,kt,Ct){if(G===Or){T===!0&&(_e(r.BLEND),T=!1);return}if(T===!1&&(se(r.BLEND),T=!0),G!==RM){if(G!==S||Ct!==N){if((_!==hs||R!==hs)&&(r.blendEquation(r.FUNC_ADD),_=hs,R=hs),Ct)switch(G){case ca:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ig:r.blendFunc(r.ONE,r.ONE);break;case rg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case sg:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case ca:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ig:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case rg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}F=null,D=null,j=null,P=null,k.set(0,0,0),z=0,S=G,N=Ct}return}Se=Se||Me,me=me||Ce,qe=qe||ke,(Me!==_||Se!==R)&&(r.blendEquationSeparate(Ft[Me],Ft[Se]),_=Me,R=Se),(Ce!==F||ke!==D||me!==j||qe!==P)&&(r.blendFuncSeparate(B[Ce],B[ke],B[me],B[qe]),F=Ce,D=ke,j=me,P=qe),(ft.equals(k)===!1||kt!==z)&&(r.blendColor(ft.r,ft.g,ft.b,kt),k.copy(ft),z=kt),S=G,N=!1}function ht(G,Me){G.side===Ui?_e(r.CULL_FACE):se(r.CULL_FACE);let Ce=G.side===$n;Me&&(Ce=!Ce),st(Ce),G.blending===ca&&G.transparent===!1?zt(Or):zt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),l.setMask(G.colorWrite);const ke=G.stencilWrite;f.setTest(ke),ke&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),$e(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?se(r.SAMPLE_ALPHA_TO_COVERAGE):_e(r.SAMPLE_ALPHA_TO_COVERAGE)}function st(G){C!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),C=G)}function Xe(G){G!==AM?(se(r.CULL_FACE),G!==V&&(G===ng?r.cullFace(r.BACK):G===bM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_e(r.CULL_FACE),V=G}function Vt(G){G!==$&&(K&&r.lineWidth(G),$=G)}function $e(G,Me,Ce){G?(se(r.POLYGON_OFFSET_FILL),(te!==Me||Z!==Ce)&&(r.polygonOffset(Me,Ce),te=Me,Z=Ce)):_e(r.POLYGON_OFFSET_FILL)}function dt(G){G?se(r.SCISSOR_TEST):_e(r.SCISSOR_TEST)}function Xt(G){G===void 0&&(G=r.TEXTURE0+ce-1),ae!==G&&(r.activeTexture(G),ae=G)}function $t(G,Me,Ce){Ce===void 0&&(ae===null?Ce=r.TEXTURE0+ce-1:Ce=ae);let ke=de[Ce];ke===void 0&&(ke={type:void 0,texture:void 0},de[Ce]=ke),(ke.type!==G||ke.texture!==Me)&&(ae!==Ce&&(r.activeTexture(Ce),ae=Ce),r.bindTexture(G,Me||ne[G]),ke.type=G,ke.texture=Me)}function L(){const G=de[ae];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function A(){try{r.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Q(){try{r.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{r.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{r.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function he(){try{r.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Qe(){try{r.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{r.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function je(){try{r.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Je(){try{r.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{r.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(G){Re.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),Re.copy(G))}function at(G){Pe.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),Pe.copy(G))}function Ke(G,Me){let Ce=m.get(Me);Ce===void 0&&(Ce=new WeakMap,m.set(Me,Ce));let ke=Ce.get(G);ke===void 0&&(ke=r.getUniformBlockIndex(Me,G.name),Ce.set(G,ke))}function Le(G,Me){const ke=m.get(Me).get(G);p.get(Me)!==ke&&(r.uniformBlockBinding(Me,ke,G.__bindingPointIndex),p.set(Me,ke))}function pt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},ae=null,de={},x={},y=new WeakMap,M=[],w=null,T=!1,S=null,_=null,F=null,D=null,R=null,j=null,P=null,k=new bt(0,0,0),z=0,N=!1,C=null,V=null,$=null,te=null,Z=null,Re.set(0,0,r.canvas.width,r.canvas.height),Pe.set(0,0,r.canvas.width,r.canvas.height),l.reset(),d.reset(),f.reset()}return{buffers:{color:l,depth:d,stencil:f},enable:se,disable:_e,bindFramebuffer:Ne,drawBuffers:De,useProgram:lt,setBlending:zt,setMaterial:ht,setFlipSided:st,setCullFace:Xe,setLineWidth:Vt,setPolygonOffset:$e,setScissorTest:dt,activeTexture:Xt,bindTexture:$t,unbindTexture:L,compressedTexImage2D:A,compressedTexImage3D:Q,texImage2D:Je,texImage3D:we,updateUBOMapping:Ke,uniformBlockBinding:Le,texStorage2D:be,texStorage3D:je,texSubImage2D:pe,texSubImage3D:ve,compressedTexSubImage2D:he,compressedTexSubImage3D:Qe,scissor:Fe,viewport:at,reset:pt}}function Ab(r,e,t,s,o,l,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new mt,v=new WeakMap;let x;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(L,A){return M?new OffscreenCanvas(L,A):vc("canvas")}function T(L,A,Q){let pe=1;const ve=$t(L);if((ve.width>Q||ve.height>Q)&&(pe=Q/Math.max(ve.width,ve.height)),pe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const he=Math.floor(pe*ve.width),Qe=Math.floor(pe*ve.height);x===void 0&&(x=w(he,Qe));const be=A?w(he,Qe):x;return be.width=he,be.height=Qe,be.getContext("2d").drawImage(L,0,0,he,Qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+he+"x"+Qe+")."),be}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),L;return L}function S(L){return L.generateMipmaps}function _(L){r.generateMipmap(L)}function F(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(L,A,Q,pe,ve=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let he=A;if(A===r.RED&&(Q===r.FLOAT&&(he=r.R32F),Q===r.HALF_FLOAT&&(he=r.R16F),Q===r.UNSIGNED_BYTE&&(he=r.R8)),A===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(he=r.R8UI),Q===r.UNSIGNED_SHORT&&(he=r.R16UI),Q===r.UNSIGNED_INT&&(he=r.R32UI),Q===r.BYTE&&(he=r.R8I),Q===r.SHORT&&(he=r.R16I),Q===r.INT&&(he=r.R32I)),A===r.RG&&(Q===r.FLOAT&&(he=r.RG32F),Q===r.HALF_FLOAT&&(he=r.RG16F),Q===r.UNSIGNED_BYTE&&(he=r.RG8)),A===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(he=r.RG8UI),Q===r.UNSIGNED_SHORT&&(he=r.RG16UI),Q===r.UNSIGNED_INT&&(he=r.RG32UI),Q===r.BYTE&&(he=r.RG8I),Q===r.SHORT&&(he=r.RG16I),Q===r.INT&&(he=r.RG32I)),A===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(he=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(he=r.RGB16UI),Q===r.UNSIGNED_INT&&(he=r.RGB32UI),Q===r.BYTE&&(he=r.RGB8I),Q===r.SHORT&&(he=r.RGB16I),Q===r.INT&&(he=r.RGB32I)),A===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(he=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(he=r.RGBA16UI),Q===r.UNSIGNED_INT&&(he=r.RGBA32UI),Q===r.BYTE&&(he=r.RGBA8I),Q===r.SHORT&&(he=r.RGBA16I),Q===r.INT&&(he=r.RGBA32I)),A===r.RGB&&(Q===r.UNSIGNED_INT_5_9_9_9_REV&&(he=r.RGB9_E5),Q===r.UNSIGNED_INT_10F_11F_11F_REV&&(he=r.R11F_G11F_B10F)),A===r.RGBA){const Qe=ve?mc:It.getTransfer(pe);Q===r.FLOAT&&(he=r.RGBA32F),Q===r.HALF_FLOAT&&(he=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(he=Qe===jt?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT_4_4_4_4&&(he=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(he=r.RGB5_A1)}return(he===r.R16F||he===r.R32F||he===r.RG16F||he===r.RG32F||he===r.RGBA16F||he===r.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function R(L,A){let Q;return L?A===null||A===xs||A===vo?Q=r.DEPTH24_STENCIL8:A===or?Q=r.DEPTH32F_STENCIL8:A===go&&(Q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===xs||A===vo?Q=r.DEPTH_COMPONENT24:A===or?Q=r.DEPTH_COMPONENT32F:A===go&&(Q=r.DEPTH_COMPONENT16),Q}function j(L,A){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ri&&L.minFilter!==Fi?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function P(L){const A=L.target;A.removeEventListener("dispose",P),z(A),A.isVideoTexture&&v.delete(A)}function k(L){const A=L.target;A.removeEventListener("dispose",k),C(A)}function z(L){const A=s.get(L);if(A.__webglInit===void 0)return;const Q=L.source,pe=y.get(Q);if(pe){const ve=pe[A.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&N(L),Object.keys(pe).length===0&&y.delete(Q)}s.remove(L)}function N(L){const A=s.get(L);r.deleteTexture(A.__webglTexture);const Q=L.source,pe=y.get(Q);delete pe[A.__cacheKey],d.memory.textures--}function C(L){const A=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(A.__webglFramebuffer[pe]))for(let ve=0;ve<A.__webglFramebuffer[pe].length;ve++)r.deleteFramebuffer(A.__webglFramebuffer[pe][ve]);else r.deleteFramebuffer(A.__webglFramebuffer[pe]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[pe])}else{if(Array.isArray(A.__webglFramebuffer))for(let pe=0;pe<A.__webglFramebuffer.length;pe++)r.deleteFramebuffer(A.__webglFramebuffer[pe]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let pe=0;pe<A.__webglColorRenderbuffer.length;pe++)A.__webglColorRenderbuffer[pe]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[pe]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Q=L.textures;for(let pe=0,ve=Q.length;pe<ve;pe++){const he=s.get(Q[pe]);he.__webglTexture&&(r.deleteTexture(he.__webglTexture),d.memory.textures--),s.remove(Q[pe])}s.remove(L)}let V=0;function $(){V=0}function te(){const L=V;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),V+=1,L}function Z(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function ce(L,A){const Q=s.get(L);if(L.isVideoTexture&&dt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Q.__version!==L.version){const pe=L.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(Q,L,A);return}}else L.isExternalTexture&&(Q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+A)}function K(L,A){const Q=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){ne(Q,L,A);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+A)}function fe(L,A){const Q=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){ne(Q,L,A);return}t.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+A)}function I(L,A){const Q=s.get(L);if(L.version>0&&Q.__version!==L.version){se(Q,L,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+A)}const ae={[lf]:r.REPEAT,[gs]:r.CLAMP_TO_EDGE,[cf]:r.MIRRORED_REPEAT},de={[Ri]:r.NEAREST,[tE]:r.NEAREST_MIPMAP_NEAREST,[kl]:r.NEAREST_MIPMAP_LINEAR,[Fi]:r.LINEAR,[ud]:r.LINEAR_MIPMAP_NEAREST,[vs]:r.LINEAR_MIPMAP_LINEAR},O={[sE]:r.NEVER,[dE]:r.ALWAYS,[aE]:r.LESS,[xx]:r.LEQUAL,[oE]:r.EQUAL,[uE]:r.GEQUAL,[lE]:r.GREATER,[cE]:r.NOTEQUAL};function ie(L,A){if(A.type===or&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Fi||A.magFilter===ud||A.magFilter===kl||A.magFilter===vs||A.minFilter===Fi||A.minFilter===ud||A.minFilter===kl||A.minFilter===vs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,ae[A.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,ae[A.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,ae[A.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,de[A.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,de[A.minFilter]),A.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,O[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ri||A.minFilter!==kl&&A.minFilter!==vs||A.type===or&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function Re(L,A){let Q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",P));const pe=A.source;let ve=y.get(pe);ve===void 0&&(ve={},y.set(pe,ve));const he=Z(A);if(he!==L.__cacheKey){ve[he]===void 0&&(ve[he]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,Q=!0),ve[he].usedTimes++;const Qe=ve[L.__cacheKey];Qe!==void 0&&(ve[L.__cacheKey].usedTimes--,Qe.usedTimes===0&&N(A)),L.__cacheKey=he,L.__webglTexture=ve[he].texture}return Q}function Pe(L,A,Q){return Math.floor(Math.floor(L/Q)/A)}function Te(L,A,Q,pe){const he=L.updateRanges;if(he.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,A.width,A.height,Q,pe,A.data);else{he.sort((we,Fe)=>we.start-Fe.start);let Qe=0;for(let we=1;we<he.length;we++){const Fe=he[Qe],at=he[we],Ke=Fe.start+Fe.count,Le=Pe(at.start,A.width,4),pt=Pe(Fe.start,A.width,4);at.start<=Ke+1&&Le===pt&&Pe(at.start+at.count-1,A.width,4)===Le?Fe.count=Math.max(Fe.count,at.start+at.count-Fe.start):(++Qe,he[Qe]=at)}he.length=Qe+1;const be=r.getParameter(r.UNPACK_ROW_LENGTH),je=r.getParameter(r.UNPACK_SKIP_PIXELS),Je=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,A.width);for(let we=0,Fe=he.length;we<Fe;we++){const at=he[we],Ke=Math.floor(at.start/4),Le=Math.ceil(at.count/4),pt=Ke%A.width,G=Math.floor(Ke/A.width),Me=Le,Ce=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,pt),r.pixelStorei(r.UNPACK_SKIP_ROWS,G),t.texSubImage2D(r.TEXTURE_2D,0,pt,G,Me,Ce,Q,pe,A.data)}L.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,be),r.pixelStorei(r.UNPACK_SKIP_PIXELS,je),r.pixelStorei(r.UNPACK_SKIP_ROWS,Je)}}function ne(L,A,Q){let pe=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pe=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pe=r.TEXTURE_3D);const ve=Re(L,A),he=A.source;t.bindTexture(pe,L.__webglTexture,r.TEXTURE0+Q);const Qe=s.get(he);if(he.version!==Qe.__version||ve===!0){t.activeTexture(r.TEXTURE0+Q);const be=It.getPrimaries(It.workingColorSpace),je=A.colorSpace===Fr?null:It.getPrimaries(A.colorSpace),Je=A.colorSpace===Fr||be===je?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let we=T(A.image,!1,o.maxTextureSize);we=Xt(A,we);const Fe=l.convert(A.format,A.colorSpace),at=l.convert(A.type);let Ke=D(A.internalFormat,Fe,at,A.colorSpace,A.isVideoTexture);ie(pe,A);let Le;const pt=A.mipmaps,G=A.isVideoTexture!==!0,Me=Qe.__version===void 0||ve===!0,Ce=he.dataReady,ke=j(A,we);if(A.isDepthTexture)Ke=R(A.format===_o,A.type),Me&&(G?t.texStorage2D(r.TEXTURE_2D,1,Ke,we.width,we.height):t.texImage2D(r.TEXTURE_2D,0,Ke,we.width,we.height,0,Fe,at,null));else if(A.isDataTexture)if(pt.length>0){G&&Me&&t.texStorage2D(r.TEXTURE_2D,ke,Ke,pt[0].width,pt[0].height);for(let Se=0,me=pt.length;Se<me;Se++)Le=pt[Se],G?Ce&&t.texSubImage2D(r.TEXTURE_2D,Se,0,0,Le.width,Le.height,Fe,at,Le.data):t.texImage2D(r.TEXTURE_2D,Se,Ke,Le.width,Le.height,0,Fe,at,Le.data);A.generateMipmaps=!1}else G?(Me&&t.texStorage2D(r.TEXTURE_2D,ke,Ke,we.width,we.height),Ce&&Te(A,we,Fe,at)):t.texImage2D(r.TEXTURE_2D,0,Ke,we.width,we.height,0,Fe,at,we.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){G&&Me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ke,Ke,pt[0].width,pt[0].height,we.depth);for(let Se=0,me=pt.length;Se<me;Se++)if(Le=pt[Se],A.format!==bi)if(Fe!==null)if(G){if(Ce)if(A.layerUpdates.size>0){const qe=Cg(Le.width,Le.height,A.format,A.type);for(const ft of A.layerUpdates){const kt=Le.data.subarray(ft*qe/Le.data.BYTES_PER_ELEMENT,(ft+1)*qe/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,ft,Le.width,Le.height,1,Fe,kt)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,0,Le.width,Le.height,we.depth,Fe,Le.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Se,Ke,Le.width,Le.height,we.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Ce&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,0,Le.width,Le.height,we.depth,Fe,at,Le.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Se,Ke,Le.width,Le.height,we.depth,0,Fe,at,Le.data)}else{G&&Me&&t.texStorage2D(r.TEXTURE_2D,ke,Ke,pt[0].width,pt[0].height);for(let Se=0,me=pt.length;Se<me;Se++)Le=pt[Se],A.format!==bi?Fe!==null?G?Ce&&t.compressedTexSubImage2D(r.TEXTURE_2D,Se,0,0,Le.width,Le.height,Fe,Le.data):t.compressedTexImage2D(r.TEXTURE_2D,Se,Ke,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Ce&&t.texSubImage2D(r.TEXTURE_2D,Se,0,0,Le.width,Le.height,Fe,at,Le.data):t.texImage2D(r.TEXTURE_2D,Se,Ke,Le.width,Le.height,0,Fe,at,Le.data)}else if(A.isDataArrayTexture)if(G){if(Me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ke,Ke,we.width,we.height,we.depth),Ce)if(A.layerUpdates.size>0){const Se=Cg(we.width,we.height,A.format,A.type);for(const me of A.layerUpdates){const qe=we.data.subarray(me*Se/we.data.BYTES_PER_ELEMENT,(me+1)*Se/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,me,we.width,we.height,1,Fe,at,qe)}A.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Fe,at,we.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ke,we.width,we.height,we.depth,0,Fe,at,we.data);else if(A.isData3DTexture)G?(Me&&t.texStorage3D(r.TEXTURE_3D,ke,Ke,we.width,we.height,we.depth),Ce&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Fe,at,we.data)):t.texImage3D(r.TEXTURE_3D,0,Ke,we.width,we.height,we.depth,0,Fe,at,we.data);else if(A.isFramebufferTexture){if(Me)if(G)t.texStorage2D(r.TEXTURE_2D,ke,Ke,we.width,we.height);else{let Se=we.width,me=we.height;for(let qe=0;qe<ke;qe++)t.texImage2D(r.TEXTURE_2D,qe,Ke,Se,me,0,Fe,at,null),Se>>=1,me>>=1}}else if(pt.length>0){if(G&&Me){const Se=$t(pt[0]);t.texStorage2D(r.TEXTURE_2D,ke,Ke,Se.width,Se.height)}for(let Se=0,me=pt.length;Se<me;Se++)Le=pt[Se],G?Ce&&t.texSubImage2D(r.TEXTURE_2D,Se,0,0,Fe,at,Le):t.texImage2D(r.TEXTURE_2D,Se,Ke,Fe,at,Le);A.generateMipmaps=!1}else if(G){if(Me){const Se=$t(we);t.texStorage2D(r.TEXTURE_2D,ke,Ke,Se.width,Se.height)}Ce&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Fe,at,we)}else t.texImage2D(r.TEXTURE_2D,0,Ke,Fe,at,we);S(A)&&_(pe),Qe.__version=he.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function se(L,A,Q){if(A.image.length!==6)return;const pe=Re(L,A),ve=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+Q);const he=s.get(ve);if(ve.version!==he.__version||pe===!0){t.activeTexture(r.TEXTURE0+Q);const Qe=It.getPrimaries(It.workingColorSpace),be=A.colorSpace===Fr?null:It.getPrimaries(A.colorSpace),je=A.colorSpace===Fr||Qe===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);const Je=A.isCompressedTexture||A.image[0].isCompressedTexture,we=A.image[0]&&A.image[0].isDataTexture,Fe=[];for(let me=0;me<6;me++)!Je&&!we?Fe[me]=T(A.image[me],!0,o.maxCubemapSize):Fe[me]=we?A.image[me].image:A.image[me],Fe[me]=Xt(A,Fe[me]);const at=Fe[0],Ke=l.convert(A.format,A.colorSpace),Le=l.convert(A.type),pt=D(A.internalFormat,Ke,Le,A.colorSpace),G=A.isVideoTexture!==!0,Me=he.__version===void 0||pe===!0,Ce=ve.dataReady;let ke=j(A,at);ie(r.TEXTURE_CUBE_MAP,A);let Se;if(Je){G&&Me&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ke,pt,at.width,at.height);for(let me=0;me<6;me++){Se=Fe[me].mipmaps;for(let qe=0;qe<Se.length;qe++){const ft=Se[qe];A.format!==bi?Ke!==null?G?Ce&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,qe,0,0,ft.width,ft.height,Ke,ft.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,qe,pt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,qe,0,0,ft.width,ft.height,Ke,Le,ft.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,qe,pt,ft.width,ft.height,0,Ke,Le,ft.data)}}}else{if(Se=A.mipmaps,G&&Me){Se.length>0&&ke++;const me=$t(Fe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ke,pt,me.width,me.height)}for(let me=0;me<6;me++)if(we){G?Ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Fe[me].width,Fe[me].height,Ke,Le,Fe[me].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,pt,Fe[me].width,Fe[me].height,0,Ke,Le,Fe[me].data);for(let qe=0;qe<Se.length;qe++){const kt=Se[qe].image[me].image;G?Ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,qe+1,0,0,kt.width,kt.height,Ke,Le,kt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,qe+1,pt,kt.width,kt.height,0,Ke,Le,kt.data)}}else{G?Ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ke,Le,Fe[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,pt,Ke,Le,Fe[me]);for(let qe=0;qe<Se.length;qe++){const ft=Se[qe];G?Ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,qe+1,0,0,Ke,Le,ft.image[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,qe+1,pt,Ke,Le,ft.image[me])}}}S(A)&&_(r.TEXTURE_CUBE_MAP),he.__version=ve.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function _e(L,A,Q,pe,ve,he){const Qe=l.convert(Q.format,Q.colorSpace),be=l.convert(Q.type),je=D(Q.internalFormat,Qe,be,Q.colorSpace),Je=s.get(A),we=s.get(Q);if(we.__renderTarget=A,!Je.__hasExternalTextures){const Fe=Math.max(1,A.width>>he),at=Math.max(1,A.height>>he);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?t.texImage3D(ve,he,je,Fe,at,A.depth,0,Qe,be,null):t.texImage2D(ve,he,je,Fe,at,0,Qe,be,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),$e(A)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,ve,we.__webglTexture,0,Vt(A)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pe,ve,we.__webglTexture,he),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(L,A,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,L),A.depthBuffer){const pe=A.depthTexture,ve=pe&&pe.isDepthTexture?pe.type:null,he=R(A.stencilBuffer,ve),Qe=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=Vt(A);$e(A)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,be,he,A.width,A.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,be,he,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,he,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Qe,r.RENDERBUFFER,L)}else{const pe=A.textures;for(let ve=0;ve<pe.length;ve++){const he=pe[ve],Qe=l.convert(he.format,he.colorSpace),be=l.convert(he.type),je=D(he.internalFormat,Qe,be,he.colorSpace),Je=Vt(A);Q&&$e(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Je,je,A.width,A.height):$e(A)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Je,je,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,je,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function De(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=s.get(A.depthTexture);pe.__renderTarget=A,(!pe.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ce(A.depthTexture,0);const ve=pe.__webglTexture,he=Vt(A);if(A.depthTexture.format===xo)$e(A)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0,he):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0);else if(A.depthTexture.format===_o)$e(A)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0,he):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function lt(L){const A=s.get(L),Q=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const pe=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),pe){const ve=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,pe.removeEventListener("dispose",ve)};pe.addEventListener("dispose",ve),A.__depthDisposeCallback=ve}A.__boundDepthTexture=pe}if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");const pe=L.texture.mipmaps;pe&&pe.length>0?De(A.__webglFramebuffer[0],L):De(A.__webglFramebuffer,L)}else if(Q){A.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[pe]),A.__webglDepthbuffer[pe]===void 0)A.__webglDepthbuffer[pe]=r.createRenderbuffer(),Ne(A.__webglDepthbuffer[pe],L,!1);else{const ve=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=A.__webglDepthbuffer[pe];r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,he)}}else{const pe=L.texture.mipmaps;if(pe&&pe.length>0?t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),Ne(A.__webglDepthbuffer,L,!1);else{const ve=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,he)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ft(L,A,Q){const pe=s.get(L);A!==void 0&&_e(pe.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&lt(L)}function B(L){const A=L.texture,Q=s.get(L),pe=s.get(A);L.addEventListener("dispose",k);const ve=L.textures,he=L.isWebGLCubeRenderTarget===!0,Qe=ve.length>1;if(Qe||(pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture()),pe.__version=A.version,d.memory.textures++),he){Q.__webglFramebuffer=[];for(let be=0;be<6;be++)if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer[be]=[];for(let je=0;je<A.mipmaps.length;je++)Q.__webglFramebuffer[be][je]=r.createFramebuffer()}else Q.__webglFramebuffer[be]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer=[];for(let be=0;be<A.mipmaps.length;be++)Q.__webglFramebuffer[be]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(Qe)for(let be=0,je=ve.length;be<je;be++){const Je=s.get(ve[be]);Je.__webglTexture===void 0&&(Je.__webglTexture=r.createTexture(),d.memory.textures++)}if(L.samples>0&&$e(L)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let be=0;be<ve.length;be++){const je=ve[be];Q.__webglColorRenderbuffer[be]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[be]);const Je=l.convert(je.format,je.colorSpace),we=l.convert(je.type),Fe=D(je.internalFormat,Je,we,je.colorSpace,L.isXRRenderTarget===!0),at=Vt(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,at,Fe,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,Q.__webglColorRenderbuffer[be])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),Ne(Q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(he){t.bindTexture(r.TEXTURE_CUBE_MAP,pe.__webglTexture),ie(r.TEXTURE_CUBE_MAP,A);for(let be=0;be<6;be++)if(A.mipmaps&&A.mipmaps.length>0)for(let je=0;je<A.mipmaps.length;je++)_e(Q.__webglFramebuffer[be][je],L,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,je);else _e(Q.__webglFramebuffer[be],L,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);S(A)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Qe){for(let be=0,je=ve.length;be<je;be++){const Je=ve[be],we=s.get(Je);let Fe=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Fe=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Fe,we.__webglTexture),ie(Fe,Je),_e(Q.__webglFramebuffer,L,Je,r.COLOR_ATTACHMENT0+be,Fe,0),S(Je)&&_(Fe)}t.unbindTexture()}else{let be=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(be=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(be,pe.__webglTexture),ie(be,A),A.mipmaps&&A.mipmaps.length>0)for(let je=0;je<A.mipmaps.length;je++)_e(Q.__webglFramebuffer[je],L,A,r.COLOR_ATTACHMENT0,be,je);else _e(Q.__webglFramebuffer,L,A,r.COLOR_ATTACHMENT0,be,0);S(A)&&_(be),t.unbindTexture()}L.depthBuffer&&lt(L)}function zt(L){const A=L.textures;for(let Q=0,pe=A.length;Q<pe;Q++){const ve=A[Q];if(S(ve)){const he=F(L),Qe=s.get(ve).__webglTexture;t.bindTexture(he,Qe),_(he),t.unbindTexture()}}}const ht=[],st=[];function Xe(L){if(L.samples>0){if($e(L)===!1){const A=L.textures,Q=L.width,pe=L.height;let ve=r.COLOR_BUFFER_BIT;const he=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Qe=s.get(L),be=A.length>1;if(be)for(let Je=0;Je<A.length;Je++)t.bindFramebuffer(r.FRAMEBUFFER,Qe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Je,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Qe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Je,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Qe.__webglMultisampledFramebuffer);const je=L.texture.mipmaps;je&&je.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qe.__webglFramebuffer);for(let Je=0;Je<A.length;Je++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),be){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Qe.__webglColorRenderbuffer[Je]);const we=s.get(A[Je]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,we,0)}r.blitFramebuffer(0,0,Q,pe,0,0,Q,pe,ve,r.NEAREST),p===!0&&(ht.length=0,st.length=0,ht.push(r.COLOR_ATTACHMENT0+Je),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ht.push(he),st.push(he),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,st)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),be)for(let Je=0;Je<A.length;Je++){t.bindFramebuffer(r.FRAMEBUFFER,Qe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Je,r.RENDERBUFFER,Qe.__webglColorRenderbuffer[Je]);const we=s.get(A[Je]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Qe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Je,r.TEXTURE_2D,we,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const A=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function Vt(L){return Math.min(o.maxSamples,L.samples)}function $e(L){const A=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function dt(L){const A=d.render.frame;v.get(L)!==A&&(v.set(L,A),L.update())}function Xt(L,A){const Q=L.colorSpace,pe=L.format,ve=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Q!==ma&&Q!==Fr&&(It.getTransfer(Q)===jt?(pe!==bi||ve!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),A}function $t(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=te,this.resetTextureUnits=$,this.setTexture2D=ce,this.setTexture2DArray=K,this.setTexture3D=fe,this.setTextureCube=I,this.rebindTextures=Ft,this.setupRenderTarget=B,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=$e}function bb(r,e){function t(s,o=Fr){let l;const d=It.getTransfer(o);if(s===ji)return r.UNSIGNED_BYTE;if(s===Qf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Jf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===fx)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===hx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===ux)return r.BYTE;if(s===dx)return r.SHORT;if(s===go)return r.UNSIGNED_SHORT;if(s===Zf)return r.INT;if(s===xs)return r.UNSIGNED_INT;if(s===or)return r.FLOAT;if(s===Eo)return r.HALF_FLOAT;if(s===px)return r.ALPHA;if(s===mx)return r.RGB;if(s===bi)return r.RGBA;if(s===xo)return r.DEPTH_COMPONENT;if(s===_o)return r.DEPTH_STENCIL;if(s===gx)return r.RED;if(s===eh)return r.RED_INTEGER;if(s===vx)return r.RG;if(s===th)return r.RG_INTEGER;if(s===nh)return r.RGBA_INTEGER;if(s===ac||s===oc||s===lc||s===cc)if(d===jt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===ac)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===oc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===lc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===cc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===ac)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===oc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===lc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===cc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===uf||s===df||s===ff||s===hf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===uf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===df)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ff)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===hf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===pf||s===mf||s===gf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===pf||s===mf)return d===jt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===gf)return d===jt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===vf||s===xf||s===_f||s===yf||s===Sf||s===Mf||s===Ef||s===wf||s===Tf||s===Af||s===bf||s===Rf||s===Cf||s===Nf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===vf)return d===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===xf)return d===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_f)return d===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===yf)return d===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Sf)return d===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Mf)return d===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ef)return d===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===wf)return d===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Tf)return d===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Af)return d===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===bf)return d===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Rf)return d===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Cf)return d===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Nf)return d===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Pf||s===Df||s===Lf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Pf)return d===jt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Df)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Lf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===If||s===Uf||s===Ff||s===kf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===If)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Uf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ff)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===kf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===vo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const Rb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Nb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const s=new Cx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new jr({vertexShader:Rb,fragmentShader:Cb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ri(new Ao(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pb extends Ma{constructor(e,t){super();const s=this;let o=null,l=1,d=null,f="local-floor",p=1,m=null,v=null,x=null,y=null,M=null,w=null;const T=typeof XRWebGLBinding<"u",S=new Nb,_={},F=t.getContextAttributes();let D=null,R=null;const j=[],P=[],k=new mt;let z=null;const N=new mi;N.viewport=new en;const C=new mi;C.viewport=new en;const V=[N,C],$=new QE;let te=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let se=j[ne];return se===void 0&&(se=new Ld,j[ne]=se),se.getTargetRaySpace()},this.getControllerGrip=function(ne){let se=j[ne];return se===void 0&&(se=new Ld,j[ne]=se),se.getGripSpace()},this.getHand=function(ne){let se=j[ne];return se===void 0&&(se=new Ld,j[ne]=se),se.getHandSpace()};function ce(ne){const se=P.indexOf(ne.inputSource);if(se===-1)return;const _e=j[se];_e!==void 0&&(_e.update(ne.inputSource,ne.frame,m||d),_e.dispatchEvent({type:ne.type,data:ne.inputSource}))}function K(){o.removeEventListener("select",ce),o.removeEventListener("selectstart",ce),o.removeEventListener("selectend",ce),o.removeEventListener("squeeze",ce),o.removeEventListener("squeezestart",ce),o.removeEventListener("squeezeend",ce),o.removeEventListener("end",K),o.removeEventListener("inputsourceschange",fe);for(let ne=0;ne<j.length;ne++){const se=P[ne];se!==null&&(P[ne]=null,j[ne].disconnect(se))}te=null,Z=null,S.reset();for(const ne in _)delete _[ne];e.setRenderTarget(D),M=null,y=null,x=null,o=null,R=null,Te.stop(),s.isPresenting=!1,e.setPixelRatio(z),e.setSize(k.width,k.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){l=ne,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){f=ne,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(ne){m=ne},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return x===null&&T&&(x=new XRWebGLBinding(o,t)),x},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(ne){if(o=ne,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",ce),o.addEventListener("selectstart",ce),o.addEventListener("selectend",ce),o.addEventListener("squeeze",ce),o.addEventListener("squeezestart",ce),o.addEventListener("squeezeend",ce),o.addEventListener("end",K),o.addEventListener("inputsourceschange",fe),F.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(k),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ne=null,De=null;F.depth&&(De=F.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=F.stencil?_o:xo,Ne=F.stencil?vo:xs);const lt={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:l};x=this.getBinding(),y=x.createProjectionLayer(lt),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),R=new ys(y.textureWidth,y.textureHeight,{format:bi,type:ji,depthTexture:new Rx(y.textureWidth,y.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:F.stencil,colorSpace:e.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const _e={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,_e),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),R=new ys(M.framebufferWidth,M.framebufferHeight,{format:bi,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await o.requestReferenceSpace(f),Te.setContext(o),Te.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function fe(ne){for(let se=0;se<ne.removed.length;se++){const _e=ne.removed[se],Ne=P.indexOf(_e);Ne>=0&&(P[Ne]=null,j[Ne].disconnect(_e))}for(let se=0;se<ne.added.length;se++){const _e=ne.added[se];let Ne=P.indexOf(_e);if(Ne===-1){for(let lt=0;lt<j.length;lt++)if(lt>=P.length){P.push(_e),Ne=lt;break}else if(P[lt]===null){P[lt]=_e,Ne=lt;break}if(Ne===-1)break}const De=j[Ne];De&&De.connect(_e)}}const I=new ee,ae=new ee;function de(ne,se,_e){I.setFromMatrixPosition(se.matrixWorld),ae.setFromMatrixPosition(_e.matrixWorld);const Ne=I.distanceTo(ae),De=se.projectionMatrix.elements,lt=_e.projectionMatrix.elements,Ft=De[14]/(De[10]-1),B=De[14]/(De[10]+1),zt=(De[9]+1)/De[5],ht=(De[9]-1)/De[5],st=(De[8]-1)/De[0],Xe=(lt[8]+1)/lt[0],Vt=Ft*st,$e=Ft*Xe,dt=Ne/(-st+Xe),Xt=dt*-st;if(se.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Xt),ne.translateZ(dt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),De[10]===-1)ne.projectionMatrix.copy(se.projectionMatrix),ne.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const $t=Ft+dt,L=B+dt,A=Vt-Xt,Q=$e+(Ne-Xt),pe=zt*B/L*$t,ve=ht*B/L*$t;ne.projectionMatrix.makePerspective(A,Q,pe,ve,$t,L),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function O(ne,se){se===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(se.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(o===null)return;let se=ne.near,_e=ne.far;S.texture!==null&&(S.depthNear>0&&(se=S.depthNear),S.depthFar>0&&(_e=S.depthFar)),$.near=C.near=N.near=se,$.far=C.far=N.far=_e,(te!==$.near||Z!==$.far)&&(o.updateRenderState({depthNear:$.near,depthFar:$.far}),te=$.near,Z=$.far),$.layers.mask=ne.layers.mask|6,N.layers.mask=$.layers.mask&3,C.layers.mask=$.layers.mask&5;const Ne=ne.parent,De=$.cameras;O($,Ne);for(let lt=0;lt<De.length;lt++)O(De[lt],Ne);De.length===2?de($,N,C):$.projectionMatrix.copy(N.projectionMatrix),ie(ne,$,Ne)};function ie(ne,se,_e){_e===null?ne.matrix.copy(se.matrixWorld):(ne.matrix.copy(_e.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(se.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(se.projectionMatrix),ne.projectionMatrixInverse.copy(se.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Of*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(y===null&&M===null))return p},this.setFoveation=function(ne){p=ne,y!==null&&(y.fixedFoveation=ne),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ne)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh($)},this.getCameraTexture=function(ne){return _[ne]};let Re=null;function Pe(ne,se){if(v=se.getViewerPose(m||d),w=se,v!==null){const _e=v.views;M!==null&&(e.setRenderTargetFramebuffer(R,M.framebuffer),e.setRenderTarget(R));let Ne=!1;_e.length!==$.cameras.length&&($.cameras.length=0,Ne=!0);for(let B=0;B<_e.length;B++){const zt=_e[B];let ht=null;if(M!==null)ht=M.getViewport(zt);else{const Xe=x.getViewSubImage(y,zt);ht=Xe.viewport,B===0&&(e.setRenderTargetTextures(R,Xe.colorTexture,Xe.depthStencilTexture),e.setRenderTarget(R))}let st=V[B];st===void 0&&(st=new mi,st.layers.enable(B),st.viewport=new en,V[B]=st),st.matrix.fromArray(zt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(zt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(ht.x,ht.y,ht.width,ht.height),B===0&&($.matrix.copy(st.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Ne===!0&&$.cameras.push(st)}const De=o.enabledFeatures;if(De&&De.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){x=s.getBinding();const B=x.getDepthInformation(_e[0]);B&&B.isValid&&B.texture&&S.init(B,o.renderState)}if(De&&De.includes("camera-access")&&T){e.state.unbindTexture(),x=s.getBinding();for(let B=0;B<_e.length;B++){const zt=_e[B].camera;if(zt){let ht=_[zt];ht||(ht=new Cx,_[zt]=ht);const st=x.getCameraImage(zt);ht.sourceTexture=st}}}}for(let _e=0;_e<j.length;_e++){const Ne=P[_e],De=j[_e];Ne!==null&&De!==void 0&&De.update(Ne,se,m||d)}Re&&Re(ne,se),se.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:se}),w=null}const Te=new Dx;Te.setAnimationLoop(Pe),this.setAnimationLoop=function(ne){Re=ne},this.dispose=function(){}}}const us=new Ci,Db=new sn;function Lb(r,e){function t(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function s(S,_){_.color.getRGB(S.fogColor.value,Tx(r)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function o(S,_,F,D,R){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(S,_):_.isMeshToonMaterial?(l(S,_),x(S,_)):_.isMeshPhongMaterial?(l(S,_),v(S,_)):_.isMeshStandardMaterial?(l(S,_),y(S,_),_.isMeshPhysicalMaterial&&M(S,_,R)):_.isMeshMatcapMaterial?(l(S,_),w(S,_)):_.isMeshDepthMaterial?l(S,_):_.isMeshDistanceMaterial?(l(S,_),T(S,_)):_.isMeshNormalMaterial?l(S,_):_.isLineBasicMaterial?(d(S,_),_.isLineDashedMaterial&&f(S,_)):_.isPointsMaterial?p(S,_,F,D):_.isSpriteMaterial?m(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,t(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===$n&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,t(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===$n&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,t(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,t(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const F=e.get(_),D=F.envMap,R=F.envMapRotation;D&&(S.envMap.value=D,us.copy(R),us.x*=-1,us.y*=-1,us.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),S.envMapRotation.value.setFromMatrix4(Db.makeRotationFromEuler(us)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,S.aoMapTransform))}function d(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform))}function f(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function p(S,_,F,D){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*F,S.scale.value=D*.5,_.map&&(S.map.value=_.map,t(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function m(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function v(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function x(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function y(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,F){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===$n&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=F.texture,S.transmissionSamplerSize.value.set(F.width,F.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,S.specularIntensityMapTransform))}function w(S,_){_.matcap&&(S.matcap.value=_.matcap)}function T(S,_){const F=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(F.matrixWorld),S.nearDistance.value=F.shadow.camera.near,S.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function Ib(r,e,t,s){let o={},l={},d=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(F,D){const R=D.program;s.uniformBlockBinding(F,R)}function m(F,D){let R=o[F.id];R===void 0&&(w(F),R=v(F),o[F.id]=R,F.addEventListener("dispose",S));const j=D.program;s.updateUBOMapping(F,j);const P=e.render.frame;l[F.id]!==P&&(y(F),l[F.id]=P)}function v(F){const D=x();F.__bindingPointIndex=D;const R=r.createBuffer(),j=F.__size,P=F.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,j,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,R),R}function x(){for(let F=0;F<f;F++)if(d.indexOf(F)===-1)return d.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(F){const D=o[F.id],R=F.uniforms,j=F.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let P=0,k=R.length;P<k;P++){const z=Array.isArray(R[P])?R[P]:[R[P]];for(let N=0,C=z.length;N<C;N++){const V=z[N];if(M(V,P,N,j)===!0){const $=V.__offset,te=Array.isArray(V.value)?V.value:[V.value];let Z=0;for(let ce=0;ce<te.length;ce++){const K=te[ce],fe=T(K);typeof K=="number"||typeof K=="boolean"?(V.__data[0]=K,r.bufferSubData(r.UNIFORM_BUFFER,$+Z,V.__data)):K.isMatrix3?(V.__data[0]=K.elements[0],V.__data[1]=K.elements[1],V.__data[2]=K.elements[2],V.__data[3]=0,V.__data[4]=K.elements[3],V.__data[5]=K.elements[4],V.__data[6]=K.elements[5],V.__data[7]=0,V.__data[8]=K.elements[6],V.__data[9]=K.elements[7],V.__data[10]=K.elements[8],V.__data[11]=0):(K.toArray(V.__data,Z),Z+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,$,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(F,D,R,j){const P=F.value,k=D+"_"+R;if(j[k]===void 0)return typeof P=="number"||typeof P=="boolean"?j[k]=P:j[k]=P.clone(),!0;{const z=j[k];if(typeof P=="number"||typeof P=="boolean"){if(z!==P)return j[k]=P,!0}else if(z.equals(P)===!1)return z.copy(P),!0}return!1}function w(F){const D=F.uniforms;let R=0;const j=16;for(let k=0,z=D.length;k<z;k++){const N=Array.isArray(D[k])?D[k]:[D[k]];for(let C=0,V=N.length;C<V;C++){const $=N[C],te=Array.isArray($.value)?$.value:[$.value];for(let Z=0,ce=te.length;Z<ce;Z++){const K=te[Z],fe=T(K),I=R%j,ae=I%fe.boundary,de=I+ae;R+=ae,de!==0&&j-de<fe.storage&&(R+=j-de),$.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=R,R+=fe.storage}}}const P=R%j;return P>0&&(R+=j-P),F.__size=R,F.__cache={},this}function T(F){const D={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(D.boundary=4,D.storage=4):F.isVector2?(D.boundary=8,D.storage=8):F.isVector3||F.isColor?(D.boundary=16,D.storage=12):F.isVector4?(D.boundary=16,D.storage=16):F.isMatrix3?(D.boundary=48,D.storage=48):F.isMatrix4?(D.boundary=64,D.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),D}function S(F){const D=F.target;D.removeEventListener("dispose",S);const R=d.indexOf(D.__bindingPointIndex);d.splice(R,1),r.deleteBuffer(o[D.id]),delete o[D.id],delete l[D.id]}function _(){for(const F in o)r.deleteBuffer(o[F]);d=[],o={},l={}}return{bind:p,update:m,dispose:_}}class Ub{constructor(e={}){const{canvas:t=hE(),context:s=null,depth:o=!0,stencil:l=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=d;const w=new Uint32Array(4),T=new Int32Array(4);let S=null,_=null;const F=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let j=!1;this._outputColorSpace=hi;let P=0,k=0,z=null,N=-1,C=null;const V=new en,$=new en;let te=null;const Z=new bt(0);let ce=0,K=t.width,fe=t.height,I=1,ae=null,de=null;const O=new en(0,0,K,fe),ie=new en(0,0,K,fe);let Re=!1;const Pe=new oh;let Te=!1,ne=!1;const se=new sn,_e=new ee,Ne=new en,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Ft(){return z===null?I:1}let B=s;function zt(b,q){return t.getContext(b,q)}try{const b={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kf}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",Se,!1),B===null){const q="webgl2";if(B=zt(q,b),B===null)throw zt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ht,st,Xe,Vt,$e,dt,Xt,$t,L,A,Q,pe,ve,he,Qe,be,je,Je,we,Fe,at,Ke,Le,pt;function G(){ht=new WT(B),ht.init(),Ke=new bb(B,ht),st=new OT(B,ht,e,Ke),Xe=new Tb(B,ht),st.reversedDepthBuffer&&y&&Xe.buffers.depth.setReversed(!0),Vt=new qT(B),$e=new fb,dt=new Ab(B,ht,Xe,$e,st,Ke,Vt),Xt=new BT(R),$t=new GT(R),L=new e1(B),Le=new FT(B,L),A=new XT(B,L,Vt,Le),Q=new KT(B,A,L,Vt),we=new YT(B,st,dt),be=new zT($e),pe=new db(R,Xt,$t,ht,st,Le,be),ve=new Lb(R,$e),he=new pb,Qe=new yb(ht),Je=new UT(R,Xt,$t,Xe,Q,M,p),je=new Eb(R,Q,st),pt=new Ib(B,Vt,st,Xe),Fe=new kT(B,ht,Vt),at=new $T(B,ht,Vt),Vt.programs=pe.programs,R.capabilities=st,R.extensions=ht,R.properties=$e,R.renderLists=he,R.shadowMap=je,R.state=Xe,R.info=Vt}G();const Me=new Pb(R,B);this.xr=Me,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=ht.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ht.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(b){b!==void 0&&(I=b,this.setSize(K,fe,!1))},this.getSize=function(b){return b.set(K,fe)},this.setSize=function(b,q,oe=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=b,fe=q,t.width=Math.floor(b*I),t.height=Math.floor(q*I),oe===!0&&(t.style.width=b+"px",t.style.height=q+"px"),this.setViewport(0,0,b,q)},this.getDrawingBufferSize=function(b){return b.set(K*I,fe*I).floor()},this.setDrawingBufferSize=function(b,q,oe){K=b,fe=q,I=oe,t.width=Math.floor(b*oe),t.height=Math.floor(q*oe),this.setViewport(0,0,b,q)},this.getCurrentViewport=function(b){return b.copy(V)},this.getViewport=function(b){return b.copy(O)},this.setViewport=function(b,q,oe,ue){b.isVector4?O.set(b.x,b.y,b.z,b.w):O.set(b,q,oe,ue),Xe.viewport(V.copy(O).multiplyScalar(I).round())},this.getScissor=function(b){return b.copy(ie)},this.setScissor=function(b,q,oe,ue){b.isVector4?ie.set(b.x,b.y,b.z,b.w):ie.set(b,q,oe,ue),Xe.scissor($.copy(ie).multiplyScalar(I).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(b){Xe.setScissorTest(Re=b)},this.setOpaqueSort=function(b){ae=b},this.setTransparentSort=function(b){de=b},this.getClearColor=function(b){return b.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(b=!0,q=!0,oe=!0){let ue=0;if(b){let X=!1;if(z!==null){const Ee=z.texture.format;X=Ee===nh||Ee===th||Ee===eh}if(X){const Ee=z.texture.type,Ie=Ee===ji||Ee===xs||Ee===go||Ee===vo||Ee===Qf||Ee===Jf,Ve=Je.getClearColor(),Oe=Je.getClearAlpha(),rt=Ve.r,ot=Ve.g,et=Ve.b;Ie?(w[0]=rt,w[1]=ot,w[2]=et,w[3]=Oe,B.clearBufferuiv(B.COLOR,0,w)):(T[0]=rt,T[1]=ot,T[2]=et,T[3]=Oe,B.clearBufferiv(B.COLOR,0,T))}else ue|=B.COLOR_BUFFER_BIT}q&&(ue|=B.DEPTH_BUFFER_BIT),oe&&(ue|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Je.dispose(),he.dispose(),Qe.dispose(),$e.dispose(),Xt.dispose(),$t.dispose(),Q.dispose(),Le.dispose(),pt.dispose(),pe.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",En),Me.removeEventListener("sessionend",Ms),Kn.stop()};function Ce(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),j=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),j=!1;const b=Vt.autoReset,q=je.enabled,oe=je.autoUpdate,ue=je.needsUpdate,X=je.type;G(),Vt.autoReset=b,je.enabled=q,je.autoUpdate=oe,je.needsUpdate=ue,je.type=X}function Se(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function me(b){const q=b.target;q.removeEventListener("dispose",me),qe(q)}function qe(b){ft(b),$e.remove(b)}function ft(b){const q=$e.get(b).programs;q!==void 0&&(q.forEach(function(oe){pe.releaseProgram(oe)}),b.isShaderMaterial&&pe.releaseShaderCache(b))}this.renderBufferDirect=function(b,q,oe,ue,X,Ee){q===null&&(q=De);const Ie=X.isMesh&&X.matrixWorld.determinant()<0,Ve=Hi(b,q,oe,ue,X);Xe.setMaterial(ue,Ie);let Oe=oe.index,rt=1;if(ue.wireframe===!0){if(Oe=A.getWireframeAttribute(oe),Oe===void 0)return;rt=2}const ot=oe.drawRange,et=oe.attributes.position;let ct=ot.start*rt,Ut=(ot.start+ot.count)*rt;Ee!==null&&(ct=Math.max(ct,Ee.start*rt),Ut=Math.min(Ut,(Ee.start+Ee.count)*rt)),Oe!==null?(ct=Math.max(ct,0),Ut=Math.min(Ut,Oe.count)):et!=null&&(ct=Math.max(ct,0),Ut=Math.min(Ut,et.count));const Nt=Ut-ct;if(Nt<0||Nt===1/0)return;Le.setup(X,ue,Ve,oe,Oe);let Ht,Ot=Fe;if(Oe!==null&&(Ht=L.get(Oe),Ot=at,Ot.setIndex(Ht)),X.isMesh)ue.wireframe===!0?(Xe.setLineWidth(ue.wireframeLinewidth*Ft()),Ot.setMode(B.LINES)):Ot.setMode(B.TRIANGLES);else if(X.isLine){let tt=ue.linewidth;tt===void 0&&(tt=1),Xe.setLineWidth(tt*Ft()),X.isLineSegments?Ot.setMode(B.LINES):X.isLineLoop?Ot.setMode(B.LINE_LOOP):Ot.setMode(B.LINE_STRIP)}else X.isPoints?Ot.setMode(B.POINTS):X.isSprite&&Ot.setMode(B.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)yo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ot.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))Ot.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const tt=X._multiDrawStarts,Bt=X._multiDrawCounts,yt=X._multiDrawCount,ln=Oe?L.get(Oe).bytesPerElement:1,gi=$e.get(ue).currentProgram.getUniforms();for(let Ln=0;Ln<yt;Ln++)gi.setValue(B,"_gl_DrawID",Ln),Ot.render(tt[Ln]/ln,Bt[Ln])}else if(X.isInstancedMesh)Ot.renderInstances(ct,Nt,X.count);else if(oe.isInstancedBufferGeometry){const tt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Bt=Math.min(oe.instanceCount,tt);Ot.renderInstances(ct,Nt,Bt)}else Ot.render(ct,Nt)};function kt(b,q,oe){b.transparent===!0&&b.side===Ui&&b.forceSinglePass===!1?(b.side=$n,b.needsUpdate=!0,ws(b,q,oe),b.side=Br,b.needsUpdate=!0,ws(b,q,oe),b.side=Ui):ws(b,q,oe)}this.compile=function(b,q,oe=null){oe===null&&(oe=b),_=Qe.get(oe),_.init(q),D.push(_),oe.traverseVisible(function(X){X.isLight&&X.layers.test(q.layers)&&(_.pushLight(X),X.castShadow&&_.pushShadow(X))}),b!==oe&&b.traverseVisible(function(X){X.isLight&&X.layers.test(q.layers)&&(_.pushLight(X),X.castShadow&&_.pushShadow(X))}),_.setupLights();const ue=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Ee=X.material;if(Ee)if(Array.isArray(Ee))for(let Ie=0;Ie<Ee.length;Ie++){const Ve=Ee[Ie];kt(Ve,oe,X),ue.add(Ve)}else kt(Ee,oe,X),ue.add(Ee)}),_=D.pop(),ue},this.compileAsync=function(b,q,oe=null){const ue=this.compile(b,q,oe);return new Promise(X=>{function Ee(){if(ue.forEach(function(Ie){$e.get(Ie).currentProgram.isReady()&&ue.delete(Ie)}),ue.size===0){X(b);return}setTimeout(Ee,10)}ht.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Ct=null;function si(b){Ct&&Ct(b)}function En(){Kn.stop()}function Ms(){Kn.start()}const Kn=new Dx;Kn.setAnimationLoop(si),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(b){Ct=b,Me.setAnimationLoop(b),b===null?Kn.stop():Kn.start()},Me.addEventListener("sessionstart",En),Me.addEventListener("sessionend",Ms),this.render=function(b,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(q),q=Me.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,q,z),_=Qe.get(b,D.length),_.init(q),D.push(_),se.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Pe.setFromProjectionMatrix(se,ki,q.reversedDepth),ne=this.localClippingEnabled,Te=be.init(this.clippingPlanes,ne),S=he.get(b,F.length),S.init(),F.push(S),Me.enabled===!0&&Me.isPresenting===!0){const Ee=R.xr.getDepthSensingMesh();Ee!==null&&Ta(Ee,q,-1/0,R.sortObjects)}Ta(b,q,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(ae,de),lt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,lt&&Je.addToRenderList(S,b),this.info.render.frame++,Te===!0&&be.beginShadows();const oe=_.state.shadowsArray;je.render(oe,b,q),Te===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=S.opaque,X=S.transmissive;if(_.setupLights(),q.isArrayCamera){const Ee=q.cameras;if(X.length>0)for(let Ie=0,Ve=Ee.length;Ie<Ve;Ie++){const Oe=Ee[Ie];Hr(ue,X,b,Oe)}lt&&Je.render(b);for(let Ie=0,Ve=Ee.length;Ie<Ve;Ie++){const Oe=Ee[Ie];cr(S,b,Oe,Oe.viewport)}}else X.length>0&&Hr(ue,X,b,q),lt&&Je.render(b),cr(S,b,q);z!==null&&k===0&&(dt.updateMultisampleRenderTarget(z),dt.updateRenderTargetMipmap(z)),b.isScene===!0&&b.onAfterRender(R,b,q),Le.resetDefaultState(),N=-1,C=null,D.pop(),D.length>0?(_=D[D.length-1],Te===!0&&be.setGlobalState(R.clippingPlanes,_.state.camera)):_=null,F.pop(),F.length>0?S=F[F.length-1]:S=null};function Ta(b,q,oe,ue){if(b.visible===!1)return;if(b.layers.test(q.layers)){if(b.isGroup)oe=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(q);else if(b.isLight)_.pushLight(b),b.castShadow&&_.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Pe.intersectsSprite(b)){ue&&Ne.setFromMatrixPosition(b.matrixWorld).applyMatrix4(se);const Ie=Q.update(b),Ve=b.material;Ve.visible&&S.push(b,Ie,Ve,oe,Ne.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Pe.intersectsObject(b))){const Ie=Q.update(b),Ve=b.material;if(ue&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ne.copy(b.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Ne.copy(Ie.boundingSphere.center)),Ne.applyMatrix4(b.matrixWorld).applyMatrix4(se)),Array.isArray(Ve)){const Oe=Ie.groups;for(let rt=0,ot=Oe.length;rt<ot;rt++){const et=Oe[rt],ct=Ve[et.materialIndex];ct&&ct.visible&&S.push(b,Ie,ct,oe,Ne.z,et)}}else Ve.visible&&S.push(b,Ie,Ve,oe,Ne.z,null)}}const Ee=b.children;for(let Ie=0,Ve=Ee.length;Ie<Ve;Ie++)Ta(Ee[Ie],q,oe,ue)}function cr(b,q,oe,ue){const X=b.opaque,Ee=b.transmissive,Ie=b.transparent;_.setupLightsView(oe),Te===!0&&be.setGlobalState(R.clippingPlanes,oe),ue&&Xe.viewport(V.copy(ue)),X.length>0&&Vi(X,q,oe),Ee.length>0&&Vi(Ee,q,oe),Ie.length>0&&Vi(Ie,q,oe),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Hr(b,q,oe,ue){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ue.id]===void 0&&(_.state.transmissionRenderTarget[ue.id]=new ys(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Eo:ji,minFilter:vs,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:It.workingColorSpace}));const Ee=_.state.transmissionRenderTarget[ue.id],Ie=ue.viewport||V;Ee.setSize(Ie.z*R.transmissionResolutionScale,Ie.w*R.transmissionResolutionScale);const Ve=R.getRenderTarget(),Oe=R.getActiveCubeFace(),rt=R.getActiveMipmapLevel();R.setRenderTarget(Ee),R.getClearColor(Z),ce=R.getClearAlpha(),ce<1&&R.setClearColor(16777215,.5),R.clear(),lt&&Je.render(oe);const ot=R.toneMapping;R.toneMapping=zr;const et=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),_.setupLightsView(ue),Te===!0&&be.setGlobalState(R.clippingPlanes,ue),Vi(b,oe,ue),dt.updateMultisampleRenderTarget(Ee),dt.updateRenderTargetMipmap(Ee),ht.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Ut=0,Nt=q.length;Ut<Nt;Ut++){const Ht=q[Ut],Ot=Ht.object,tt=Ht.geometry,Bt=Ht.material,yt=Ht.group;if(Bt.side===Ui&&Ot.layers.test(ue.layers)){const ln=Bt.side;Bt.side=$n,Bt.needsUpdate=!0,Es(Ot,oe,ue,tt,Bt,yt),Bt.side=ln,Bt.needsUpdate=!0,ct=!0}}ct===!0&&(dt.updateMultisampleRenderTarget(Ee),dt.updateRenderTargetMipmap(Ee))}R.setRenderTarget(Ve,Oe,rt),R.setClearColor(Z,ce),et!==void 0&&(ue.viewport=et),R.toneMapping=ot}function Vi(b,q,oe){const ue=q.isScene===!0?q.overrideMaterial:null;for(let X=0,Ee=b.length;X<Ee;X++){const Ie=b[X],Ve=Ie.object,Oe=Ie.geometry,rt=Ie.group;let ot=Ie.material;ot.allowOverride===!0&&ue!==null&&(ot=ue),Ve.layers.test(oe.layers)&&Es(Ve,q,oe,Oe,ot,rt)}}function Es(b,q,oe,ue,X,Ee){b.onBeforeRender(R,q,oe,ue,X,Ee),b.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(R,q,oe,ue,b,Ee),X.transparent===!0&&X.side===Ui&&X.forceSinglePass===!1?(X.side=$n,X.needsUpdate=!0,R.renderBufferDirect(oe,q,ue,X,b,Ee),X.side=Br,X.needsUpdate=!0,R.renderBufferDirect(oe,q,ue,X,b,Ee),X.side=Ui):R.renderBufferDirect(oe,q,ue,X,b,Ee),b.onAfterRender(R,q,oe,ue,X,Ee)}function ws(b,q,oe){q.isScene!==!0&&(q=De);const ue=$e.get(b),X=_.state.lights,Ee=_.state.shadowsArray,Ie=X.state.version,Ve=pe.getParameters(b,X.state,Ee,q,oe),Oe=pe.getProgramCacheKey(Ve);let rt=ue.programs;ue.environment=b.isMeshStandardMaterial?q.environment:null,ue.fog=q.fog,ue.envMap=(b.isMeshStandardMaterial?$t:Xt).get(b.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&b.envMap===null?q.environmentRotation:b.envMapRotation,rt===void 0&&(b.addEventListener("dispose",me),rt=new Map,ue.programs=rt);let ot=rt.get(Oe);if(ot!==void 0){if(ue.currentProgram===ot&&ue.lightsStateVersion===Ie)return Ro(b,Ve),ot}else Ve.uniforms=pe.getUniforms(b),b.onBeforeCompile(Ve,R),ot=pe.acquireProgram(Ve,Oe),rt.set(Oe,ot),ue.uniforms=Ve.uniforms;const et=ue.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(et.clippingPlanes=be.uniform),Ro(b,Ve),ue.needsLights=No(b),ue.lightsStateVersion=Ie,ue.needsLights&&(et.ambientLightColor.value=X.state.ambient,et.lightProbe.value=X.state.probe,et.directionalLights.value=X.state.directional,et.directionalLightShadows.value=X.state.directionalShadow,et.spotLights.value=X.state.spot,et.spotLightShadows.value=X.state.spotShadow,et.rectAreaLights.value=X.state.rectArea,et.ltc_1.value=X.state.rectAreaLTC1,et.ltc_2.value=X.state.rectAreaLTC2,et.pointLights.value=X.state.point,et.pointLightShadows.value=X.state.pointShadow,et.hemisphereLights.value=X.state.hemi,et.directionalShadowMap.value=X.state.directionalShadowMap,et.directionalShadowMatrix.value=X.state.directionalShadowMatrix,et.spotShadowMap.value=X.state.spotShadowMap,et.spotLightMatrix.value=X.state.spotLightMatrix,et.spotLightMap.value=X.state.spotLightMap,et.pointShadowMap.value=X.state.pointShadowMap,et.pointShadowMatrix.value=X.state.pointShadowMatrix),ue.currentProgram=ot,ue.uniformsList=null,ot}function bo(b){if(b.uniformsList===null){const q=b.currentProgram.getUniforms();b.uniformsList=uc.seqWithValue(q.seq,b.uniforms)}return b.uniformsList}function Ro(b,q){const oe=$e.get(b);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function Hi(b,q,oe,ue,X){q.isScene!==!0&&(q=De),dt.resetTextureUnits();const Ee=q.fog,Ie=ue.isMeshStandardMaterial?q.environment:null,Ve=z===null?R.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:ma,Oe=(ue.isMeshStandardMaterial?$t:Xt).get(ue.envMap||Ie),rt=ue.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ot=!!oe.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),et=!!oe.morphAttributes.position,ct=!!oe.morphAttributes.normal,Ut=!!oe.morphAttributes.color;let Nt=zr;ue.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Nt=R.toneMapping);const Ht=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ot=Ht!==void 0?Ht.length:0,tt=$e.get(ue),Bt=_.state.lights;if(Te===!0&&(ne===!0||b!==C)){const tn=b===C&&ue.id===N;be.setState(ue,b,tn)}let yt=!1;ue.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Bt.state.version||tt.outputColorSpace!==Ve||X.isBatchedMesh&&tt.batching===!1||!X.isBatchedMesh&&tt.batching===!0||X.isBatchedMesh&&tt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&tt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&tt.instancing===!1||!X.isInstancedMesh&&tt.instancing===!0||X.isSkinnedMesh&&tt.skinning===!1||!X.isSkinnedMesh&&tt.skinning===!0||X.isInstancedMesh&&tt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&tt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&tt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&tt.instancingMorph===!1&&X.morphTexture!==null||tt.envMap!==Oe||ue.fog===!0&&tt.fog!==Ee||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==be.numPlanes||tt.numIntersection!==be.numIntersection)||tt.vertexAlphas!==rt||tt.vertexTangents!==ot||tt.morphTargets!==et||tt.morphNormals!==ct||tt.morphColors!==Ut||tt.toneMapping!==Nt||tt.morphTargetsCount!==Ot)&&(yt=!0):(yt=!0,tt.__version=ue.version);let ln=tt.currentProgram;yt===!0&&(ln=ws(ue,q,X));let gi=!1,Ln=!1,Gr=!1;const Gt=ln.getUniforms(),In=tt.uniforms;if(Xe.useProgram(ln.program)&&(gi=!0,Ln=!0,Gr=!0),ue.id!==N&&(N=ue.id,Ln=!0),gi||C!==b){Xe.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Gt.setValue(B,"projectionMatrix",b.projectionMatrix),Gt.setValue(B,"viewMatrix",b.matrixWorldInverse);const Tn=Gt.map.cameraPosition;Tn!==void 0&&Tn.setValue(B,_e.setFromMatrixPosition(b.matrixWorld)),st.logarithmicDepthBuffer&&Gt.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Gt.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),C!==b&&(C=b,Ln=!0,Gr=!0)}if(X.isSkinnedMesh){Gt.setOptional(B,X,"bindMatrix"),Gt.setOptional(B,X,"bindMatrixInverse");const tn=X.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Gt.setValue(B,"boneTexture",tn.boneTexture,dt))}X.isBatchedMesh&&(Gt.setOptional(B,X,"batchingTexture"),Gt.setValue(B,"batchingTexture",X._matricesTexture,dt),Gt.setOptional(B,X,"batchingIdTexture"),Gt.setValue(B,"batchingIdTexture",X._indirectTexture,dt),Gt.setOptional(B,X,"batchingColorTexture"),X._colorsTexture!==null&&Gt.setValue(B,"batchingColorTexture",X._colorsTexture,dt));const wn=oe.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&we.update(X,oe,ln),(Ln||tt.receiveShadow!==X.receiveShadow)&&(tt.receiveShadow=X.receiveShadow,Gt.setValue(B,"receiveShadow",X.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(In.envMap.value=Oe,In.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&q.environment!==null&&(In.envMapIntensity.value=q.environmentIntensity),Ln&&(Gt.setValue(B,"toneMappingExposure",R.toneMappingExposure),tt.needsLights&&Co(In,Gr),Ee&&ue.fog===!0&&ve.refreshFogUniforms(In,Ee),ve.refreshMaterialUniforms(In,ue,I,fe,_.state.transmissionRenderTarget[b.id]),uc.upload(B,bo(tt),In,dt)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(uc.upload(B,bo(tt),In,dt),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Gt.setValue(B,"center",X.center),Gt.setValue(B,"modelViewMatrix",X.modelViewMatrix),Gt.setValue(B,"normalMatrix",X.normalMatrix),Gt.setValue(B,"modelMatrix",X.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const tn=ue.uniformsGroups;for(let Tn=0,Wr=tn.length;Tn<Wr;Tn++){const St=tn[Tn];pt.update(St,ln),pt.bind(St,ln)}}return ln}function Co(b,q){b.ambientLightColor.needsUpdate=q,b.lightProbe.needsUpdate=q,b.directionalLights.needsUpdate=q,b.directionalLightShadows.needsUpdate=q,b.pointLights.needsUpdate=q,b.pointLightShadows.needsUpdate=q,b.spotLights.needsUpdate=q,b.spotLightShadows.needsUpdate=q,b.rectAreaLights.needsUpdate=q,b.hemisphereLights.needsUpdate=q}function No(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(b,q,oe){const ue=$e.get(b);ue.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),$e.get(b.texture).__webglTexture=q,$e.get(b.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:oe,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,q){const oe=$e.get(b);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0};const wc=B.createFramebuffer();this.setRenderTarget=function(b,q=0,oe=0){z=b,P=q,k=oe;let ue=!0,X=null,Ee=!1,Ie=!1;if(b){const Oe=$e.get(b);if(Oe.__useDefaultFramebuffer!==void 0)Xe.bindFramebuffer(B.FRAMEBUFFER,null),ue=!1;else if(Oe.__webglFramebuffer===void 0)dt.setupRenderTarget(b);else if(Oe.__hasExternalTextures)dt.rebindTextures(b,$e.get(b.texture).__webglTexture,$e.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const et=b.depthTexture;if(Oe.__boundDepthTexture!==et){if(et!==null&&$e.has(et)&&(b.width!==et.image.width||b.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");dt.setupDepthRenderbuffer(b)}}const rt=b.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Ie=!0);const ot=$e.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ot[q])?X=ot[q][oe]:X=ot[q],Ee=!0):b.samples>0&&dt.useMultisampledRTT(b)===!1?X=$e.get(b).__webglMultisampledFramebuffer:Array.isArray(ot)?X=ot[oe]:X=ot,V.copy(b.viewport),$.copy(b.scissor),te=b.scissorTest}else V.copy(O).multiplyScalar(I).floor(),$.copy(ie).multiplyScalar(I).floor(),te=Re;if(oe!==0&&(X=wc),Xe.bindFramebuffer(B.FRAMEBUFFER,X)&&ue&&Xe.drawBuffers(b,X),Xe.viewport(V),Xe.scissor($),Xe.setScissorTest(te),Ee){const Oe=$e.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+q,Oe.__webglTexture,oe)}else if(Ie){const Oe=q;for(let rt=0;rt<b.textures.length;rt++){const ot=$e.get(b.textures[rt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+rt,ot.__webglTexture,oe,Oe)}}else if(b!==null&&oe!==0){const Oe=$e.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Oe.__webglTexture,oe)}N=-1},this.readRenderTargetPixels=function(b,q,oe,ue,X,Ee,Ie,Ve=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=$e.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe){Xe.bindFramebuffer(B.FRAMEBUFFER,Oe);try{const rt=b.textures[Ve],ot=rt.format,et=rt.type;if(!st.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=b.width-ue&&oe>=0&&oe<=b.height-X&&(b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ve),B.readPixels(q,oe,ue,X,Ke.convert(ot),Ke.convert(et),Ee))}finally{const rt=z!==null?$e.get(z).__webglFramebuffer:null;Xe.bindFramebuffer(B.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(b,q,oe,ue,X,Ee,Ie,Ve=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=$e.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe)if(q>=0&&q<=b.width-ue&&oe>=0&&oe<=b.height-X){Xe.bindFramebuffer(B.FRAMEBUFFER,Oe);const rt=b.textures[Ve],ot=rt.format,et=rt.type;if(!st.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ct),B.bufferData(B.PIXEL_PACK_BUFFER,Ee.byteLength,B.STREAM_READ),b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ve),B.readPixels(q,oe,ue,X,Ke.convert(ot),Ke.convert(et),0);const Ut=z!==null?$e.get(z).__webglFramebuffer:null;Xe.bindFramebuffer(B.FRAMEBUFFER,Ut);const Nt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await pE(B,Nt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ct),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ee),B.deleteBuffer(ct),B.deleteSync(Nt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,q=null,oe=0){const ue=Math.pow(2,-oe),X=Math.floor(b.image.width*ue),Ee=Math.floor(b.image.height*ue),Ie=q!==null?q.x:0,Ve=q!==null?q.y:0;dt.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,oe,0,0,Ie,Ve,X,Ee),Xe.unbindTexture()};const Po=B.createFramebuffer(),Do=B.createFramebuffer();this.copyTextureToTexture=function(b,q,oe=null,ue=null,X=0,Ee=null){Ee===null&&(X!==0?(yo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=X,X=0):Ee=0);let Ie,Ve,Oe,rt,ot,et,ct,Ut,Nt;const Ht=b.isCompressedTexture?b.mipmaps[Ee]:b.image;if(oe!==null)Ie=oe.max.x-oe.min.x,Ve=oe.max.y-oe.min.y,Oe=oe.isBox3?oe.max.z-oe.min.z:1,rt=oe.min.x,ot=oe.min.y,et=oe.isBox3?oe.min.z:0;else{const wn=Math.pow(2,-X);Ie=Math.floor(Ht.width*wn),Ve=Math.floor(Ht.height*wn),b.isDataArrayTexture?Oe=Ht.depth:b.isData3DTexture?Oe=Math.floor(Ht.depth*wn):Oe=1,rt=0,ot=0,et=0}ue!==null?(ct=ue.x,Ut=ue.y,Nt=ue.z):(ct=0,Ut=0,Nt=0);const Ot=Ke.convert(q.format),tt=Ke.convert(q.type);let Bt;q.isData3DTexture?(dt.setTexture3D(q,0),Bt=B.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(dt.setTexture2DArray(q,0),Bt=B.TEXTURE_2D_ARRAY):(dt.setTexture2D(q,0),Bt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,q.unpackAlignment);const yt=B.getParameter(B.UNPACK_ROW_LENGTH),ln=B.getParameter(B.UNPACK_IMAGE_HEIGHT),gi=B.getParameter(B.UNPACK_SKIP_PIXELS),Ln=B.getParameter(B.UNPACK_SKIP_ROWS),Gr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ht.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ht.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,rt),B.pixelStorei(B.UNPACK_SKIP_ROWS,ot),B.pixelStorei(B.UNPACK_SKIP_IMAGES,et);const Gt=b.isDataArrayTexture||b.isData3DTexture,In=q.isDataArrayTexture||q.isData3DTexture;if(b.isDepthTexture){const wn=$e.get(b),tn=$e.get(q),Tn=$e.get(wn.__renderTarget),Wr=$e.get(tn.__renderTarget);Xe.bindFramebuffer(B.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,Wr.__webglFramebuffer);for(let St=0;St<Oe;St++)Gt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$e.get(b).__webglTexture,X,et+St),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$e.get(q).__webglTexture,Ee,Nt+St)),B.blitFramebuffer(rt,ot,Ie,Ve,ct,Ut,Ie,Ve,B.DEPTH_BUFFER_BIT,B.NEAREST);Xe.bindFramebuffer(B.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||$e.has(b)){const wn=$e.get(b),tn=$e.get(q);Xe.bindFramebuffer(B.READ_FRAMEBUFFER,Po),Xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,Do);for(let Tn=0;Tn<Oe;Tn++)Gt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,wn.__webglTexture,X,et+Tn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,wn.__webglTexture,X),In?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,tn.__webglTexture,Ee,Nt+Tn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,tn.__webglTexture,Ee),X!==0?B.blitFramebuffer(rt,ot,Ie,Ve,ct,Ut,Ie,Ve,B.COLOR_BUFFER_BIT,B.NEAREST):In?B.copyTexSubImage3D(Bt,Ee,ct,Ut,Nt+Tn,rt,ot,Ie,Ve):B.copyTexSubImage2D(Bt,Ee,ct,Ut,rt,ot,Ie,Ve);Xe.bindFramebuffer(B.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else In?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(Bt,Ee,ct,Ut,Nt,Ie,Ve,Oe,Ot,tt,Ht.data):q.isCompressedArrayTexture?B.compressedTexSubImage3D(Bt,Ee,ct,Ut,Nt,Ie,Ve,Oe,Ot,Ht.data):B.texSubImage3D(Bt,Ee,ct,Ut,Nt,Ie,Ve,Oe,Ot,tt,Ht):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Ee,ct,Ut,Ie,Ve,Ot,tt,Ht.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Ee,ct,Ut,Ht.width,Ht.height,Ot,Ht.data):B.texSubImage2D(B.TEXTURE_2D,Ee,ct,Ut,Ie,Ve,Ot,tt,Ht);B.pixelStorei(B.UNPACK_ROW_LENGTH,yt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ln),B.pixelStorei(B.UNPACK_SKIP_PIXELS,gi),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ln),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Gr),Ee===0&&q.generateMipmaps&&B.generateMipmap(Bt),Xe.unbindTexture()},this.initRenderTarget=function(b){$e.get(b).__webglFramebuffer===void 0&&dt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?dt.setTextureCube(b,0):b.isData3DTexture?dt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?dt.setTexture2DArray(b,0):dt.setTexture2D(b,0),Xe.unbindTexture()},this.resetState=function(){P=0,k=0,z=null,Xe.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}}class Fb{object;domElement;enabled=!0;target=new ee;minDistance=0;maxDistance=1/0;minZoom=0;maxZoom=1/0;minPolarAngle=0;maxPolarAngle=Math.PI;minAzimuthAngle=-1/0;maxAzimuthAngle=1/0;enableDamping=!1;dampingFactor=.05;enableZoom=!0;zoomSpeed=1;enableRotate=!0;rotateSpeed=1;enablePan=!0;panSpeed=1;screenSpacePanning=!0;keyPanSpeed=7;autoRotate=!1;autoRotateSpeed=2;spherical=new Rg;sphericalDelta=new Rg;scale=1;panOffset=new ee;zoomChanged=!1;rotateStart=new mt;rotateEnd=new mt;rotateDelta=new mt;panStart=new mt;panEnd=new mt;panDelta=new mt;dollyStart=new mt;dollyEnd=new mt;dollyDelta=new mt;state=-1;STATE={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};constructor(e,t){this.object=e,this.domElement=t,this.domElement.addEventListener("contextmenu",this.onContextMenu),this.domElement.addEventListener("pointerdown",this.onPointerDown),this.domElement.addEventListener("wheel",this.onMouseWheel),this.update()}onContextMenu=e=>{this.enabled!==!1&&e.preventDefault()};onPointerDown=e=>{if(this.enabled!==!1)switch(e.pointerType){case"mouse":case"pen":this.onMouseDown(e);break}};onMouseDown=e=>{let t;switch(e.button){case 0:t=this.STATE.ROTATE;break;case 1:t=this.STATE.DOLLY;break;case 2:t=this.STATE.PAN;break;default:t=this.STATE.NONE}this.handleMouseDownRotate(e),this.state=t,this.state!==this.STATE.NONE&&(this.domElement.addEventListener("pointermove",this.onPointerMove),this.domElement.addEventListener("pointerup",this.onPointerUp))};onPointerMove=e=>{if(this.enabled!==!1)switch(e.pointerType){case"mouse":case"pen":this.onMouseMove(e);break}};onMouseMove=e=>{switch(this.state){case this.STATE.ROTATE:if(this.enableRotate===!1)return;this.handleMouseMoveRotate(e),this.update();break;case this.STATE.DOLLY:if(this.enableZoom===!1)return;this.handleMouseMoveDolly(e),this.update();break;case this.STATE.PAN:if(this.enablePan===!1)return;this.handleMouseMovePan(e),this.update();break}};onPointerUp=()=>{this.domElement.removeEventListener("pointermove",this.onPointerMove),this.domElement.removeEventListener("pointerup",this.onPointerUp),this.state=this.STATE.NONE};onMouseWheel=e=>{this.enabled===!1||this.enableZoom===!1||this.state!==this.STATE.NONE&&this.state!==this.STATE.ROTATE||(e.preventDefault(),this.handleMouseWheel(e),this.update())};handleMouseDownRotate=e=>{this.rotateStart.set(e.clientX,e.clientY)};handleMouseMoveRotate=e=>{this.rotateEnd.set(e.clientX,e.clientY),this.rotateDelta.subVectors(this.rotateEnd,this.rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this.rotateLeft(2*Math.PI*this.rotateDelta.x/t.clientHeight),this.rotateUp(2*Math.PI*this.rotateDelta.y/t.clientHeight),this.rotateStart.copy(this.rotateEnd)};handleMouseMoveDolly=e=>{this.dollyEnd.set(e.clientX,e.clientY),this.dollyDelta.subVectors(this.dollyEnd,this.dollyStart),this.dollyDelta.y>0?this.dollyOut(this.getZoomScale()):this.dollyDelta.y<0&&this.dollyIn(this.getZoomScale()),this.dollyStart.copy(this.dollyEnd)};handleMouseMovePan=e=>{this.panEnd.set(e.clientX,e.clientY),this.panDelta.subVectors(this.panEnd,this.panStart).multiplyScalar(this.panSpeed),this.pan(this.panDelta.x,this.panDelta.y),this.panStart.copy(this.panEnd)};handleMouseWheel=e=>{e.deltaY<0?this.dollyIn(this.getZoomScale()):e.deltaY>0&&this.dollyOut(this.getZoomScale())};rotateLeft=e=>{this.sphericalDelta.theta-=e};rotateUp=e=>{this.sphericalDelta.phi-=e};panLeft=(e,t)=>{const s=new ee;s.setFromMatrixColumn(t,0),s.multiplyScalar(-e),this.panOffset.add(s)};panUp=(e,t)=>{const s=new ee;this.screenSpacePanning===!0?s.setFromMatrixColumn(t,1):(s.setFromMatrixColumn(t,0),s.crossVectors(this.object.up,s)),s.multiplyScalar(e),this.panOffset.add(s)};pan=(e,t)=>{const s=this.domElement;if(this.object.isPerspectiveCamera){let d=this.object.position.clone().sub(this.target).length();d*=Math.tan(this.object.fov/2*Math.PI/180),this.panLeft(2*e*d/s.clientHeight,this.object.matrix),this.panUp(2*t*d/s.clientHeight,this.object.matrix)}};dollyOut=e=>{this.object.isPerspectiveCamera&&(this.scale/=e)};dollyIn=e=>{this.object.isPerspectiveCamera&&(this.scale*=e)};getZoomScale=()=>Math.pow(.95,this.zoomSpeed);update=()=>{const e=new ee,t=new _s().setFromUnitVectors(this.object.up,new ee(0,1,0)),s=t.clone().invert(),o=new ee,l=new _s,d=2*Math.PI,f=this.object.position;e.copy(f).sub(this.target),e.applyQuaternion(t),this.spherical.setFromVector3(e),this.autoRotate&&this.state===this.STATE.NONE&&this.rotateLeft(this.getAutoRotationAngle()),this.enableDamping?(this.spherical.theta+=this.sphericalDelta.theta*this.dampingFactor,this.spherical.phi+=this.sphericalDelta.phi*this.dampingFactor):(this.spherical.theta+=this.sphericalDelta.theta,this.spherical.phi+=this.sphericalDelta.phi);let p=this.minAzimuthAngle,m=this.maxAzimuthAngle;return isFinite(p)&&isFinite(m)&&(p<-Math.PI?p+=d:p>Math.PI&&(p-=d),m<-Math.PI?m+=d:m>Math.PI&&(m-=d),p<=m?this.spherical.theta=Math.max(p,Math.min(m,this.spherical.theta)):this.spherical.theta=this.spherical.theta>(p+m)/2?Math.max(p,this.spherical.theta):Math.min(m,this.spherical.theta)),this.spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this.spherical.phi)),this.spherical.makeSafe(),this.spherical.radius*=this.scale,this.spherical.radius=Math.max(this.minDistance,Math.min(this.maxDistance,this.spherical.radius)),this.enableDamping===!0?this.target.addScaledVector(this.panOffset,this.dampingFactor):this.target.add(this.panOffset),e.setFromSpherical(this.spherical),e.applyQuaternion(s),f.copy(this.target).add(e),this.object.lookAt(this.target),this.enableDamping===!0?(this.sphericalDelta.theta*=1-this.dampingFactor,this.sphericalDelta.phi*=1-this.dampingFactor,this.panOffset.multiplyScalar(1-this.dampingFactor)):(this.sphericalDelta.set(0,0,0),this.panOffset.set(0,0,0)),this.scale=1,this.zoomChanged||o.distanceToSquared(this.object.position)>1e-6||8*(1-l.dot(this.object.quaternion))>1e-6?(o.copy(this.object.position),l.copy(this.object.quaternion),this.zoomChanged=!1,!0):!1};getAutoRotationAngle=()=>2*Math.PI/60/60*this.autoRotateSpeed;dispose=()=>{this.domElement.removeEventListener("contextmenu",this.onContextMenu),this.domElement.removeEventListener("pointerdown",this.onPointerDown),this.domElement.removeEventListener("wheel",this.onMouseWheel),this.domElement.removeEventListener("pointermove",this.onPointerMove),this.domElement.removeEventListener("pointerup",this.onPointerUp)}}function kb({analysisData:r}){const e=le.useRef(null),t=le.useRef(null),s=le.useRef(null),o=le.useRef(null),l=le.useRef(null),d=le.useRef([]),f=le.useRef(null),[p,m]=le.useState(!1),[v,x]=le.useState([1]),[y,M]=le.useState([2]),[w,T]=le.useState("terrain"),[S,_]=le.useState(!0),[F,D]=le.useState(!0),[R,j]=le.useState(!0),P=[{id:1,name:"Zone A - Authorized",type:"authorized",position:{x:-50,y:0,z:-25},size:{width:40,height:15,depth:30},volume:2219,depth:12.3,color:"#22c55e"},{id:2,name:"Zone B - Authorized",type:"authorized",position:{x:25,y:0,z:-15},size:{width:50,height:18,depth:35},volume:3740,depth:18.7,color:"#3b82f6"},{id:3,name:"Zone C - Illegal",type:"illegal",position:{x:-10,y:0,z:30},size:{width:45,height:8,depth:25},volume:571,depth:8.2,color:"#ef4444"}],k=le.useCallback(()=>{if(!e.current)return;const Z=new BE;Z.background=new bt(8900331),Z.fog=new ah(8900331,100,1e3);const ce=new mi(75,e.current.clientWidth/e.current.clientHeight,.1,1e3);ce.position.set(100,80,100),ce.lookAt(0,0,0);const K=new Ub({antialias:!0});K.setSize(e.current.clientWidth,e.current.clientHeight),K.setPixelRatio(window.devicePixelRatio),K.shadowMap.enabled=!0,K.shadowMap.type=lx,e.current.appendChild(K.domElement);const fe=new Fb(ce,K.domElement);fe.enableDamping=!0,fe.dampingFactor=.05,fe.screenSpacePanning=!1,fe.minDistance=50,fe.maxDistance=400,fe.maxPolarAngle=Math.PI/2;const I=new ZE(4210752,.6);Z.add(I);const ae=new KE(16777215,.8);ae.position.set(100,100,50),ae.castShadow=!0,ae.shadow.mapSize.width=2048,ae.shadow.mapSize.height=2048,ae.shadow.camera.near=.5,ae.shadow.camera.far=500,ae.shadow.camera.left=-100,ae.shadow.camera.right=100,ae.shadow.camera.top=100,ae.shadow.camera.bottom=-100,Z.add(ae);const de=new Ao(300,300),O=new WE({color:9498256,transparent:!0,opacity:.8}),ie=new ri(de,O);ie.rotation.x=-Math.PI/2,ie.receiveShadow=!0,Z.add(ie);const Re=[];P.forEach(Te=>{const ne=new Ss(Te.size.width,Te.size.height*y[0],Te.size.depth),se=new GE({color:Te.color,transparent:!0,opacity:.8,side:Ui}),_e=new ri(ne,se);if(_e.position.set(Te.position.x,-Te.size.height*y[0]/2,Te.position.z),_e.castShadow=!0,_e.receiveShadow=!0,Z.add(_e),Re.push(_e),Te.type==="illegal"&&S){const Ne=new Ss(Te.size.width+10,Te.size.height*y[0]+5,Te.size.depth+10),De=new xc({color:16711680,wireframe:!0,opacity:.8,transparent:!0}),lt=new ri(Ne,De);lt.position.set(Te.position.x,-Te.size.height*y[0]/2,Te.position.z),Z.add(lt),Re.push(lt)}for(let Ne=1;Ne<=Te.size.height;Ne++){const De=new lh(Te.size.width/2-2,Te.size.width/2,8),lt=new xc({color:Te.color,transparent:!0,opacity:.3-Ne*.02}),Ft=new ri(De,lt);Ft.position.set(Te.position.x,-Ne*y[0],Te.position.z),Ft.rotation.x=-Math.PI/2,Z.add(Ft),Re.push(Ft)}}),t.current=Z,s.current=K,o.current=ce,l.current=fe,d.current=Re,j(!1);const Pe=()=>{e.current&&ce&&K&&(ce.aspect=e.current.clientWidth/e.current.clientHeight,ce.updateProjectionMatrix(),K.setSize(e.current.clientWidth,e.current.clientHeight))};return window.addEventListener("resize",Pe),()=>{window.removeEventListener("resize",Pe)}},[y,S]),z=le.useCallback(()=>{!t.current||!s.current||!o.current||!l.current||(l.current.update(),p?(l.current.autoRotate=!0,l.current.autoRotateSpeed=v[0]):l.current.autoRotate=!1,s.current.render(t.current,o.current),f.current=requestAnimationFrame(z))},[p,v]);le.useEffect(()=>(k(),z(),()=>{f.current&&cancelAnimationFrame(f.current),l.current&&l.current.dispose(),s.current&&e.current&&(e.current.removeChild(s.current.domElement),s.current.dispose())}),[k,z]),le.useEffect(()=>{t.current&&d.current.length>0&&(d.current.forEach(Z=>{t.current?.remove(Z)}),d.current=[],k())},[y,S,k]);const N=()=>{m(!p)},C=()=>{o.current&&l.current&&(o.current.position.set(100,80,100),l.current.target.set(0,0,0),l.current.update()),x([1]),M([2]),m(!1)},V=()=>{if(l.current&&o.current){const Z=new ee;o.current.getWorldDirection(Z),o.current.position.add(Z.multiplyScalar(10)),l.current.update()}},$=()=>{if(l.current&&o.current){const Z=new ee;o.current.getWorldDirection(Z),o.current.position.add(Z.multiplyScalar(-10)),l.current.update()}},te=()=>{if(s.current){const Z=document.createElement("a");Z.download="mining-3d-visualization.png",Z.href=s.current.domElement.toDataURL(),Z.click()}};return u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{className:"grid gap-6 lg:grid-cols-4",children:[u.jsx("div",{className:"lg:col-span-3",children:u.jsxs(Mt,{className:"h-full",children:[u.jsxs(Et,{children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs(Tt,{className:"flex items-center gap-2",children:[u.jsx(da,{className:"h-5 w-5"}),"3D Mining Visualization"]}),u.jsx("div",{className:"flex items-center gap-2",children:u.jsx(_a,{value:w,onValueChange:T,children:u.jsxs(ya,{children:[u.jsx(rn,{value:"terrain",children:"Terrain"}),u.jsx(rn,{value:"volume",children:"Volume"}),u.jsx(rn,{value:"analysis",children:"Analysis"})]})})})]}),u.jsx(On,{children:"Interactive 3D visualization of mining excavations with depth and volume analysis"})]}),u.jsxs(At,{children:[u.jsxs("div",{className:"relative",children:[u.jsx("div",{ref:e,className:"w-full h-96 border rounded-lg bg-gradient-to-b from-sky-200 to-green-200 overflow-hidden",style:{minHeight:"384px"}}),R&&u.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg",children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"}),u.jsx("p",{className:"text-sm text-gray-600",children:"Loading 3D visualization..."})]})}),u.jsxs("div",{className:"absolute top-4 right-4 flex flex-col gap-2",children:[u.jsx(Rt,{size:"sm",variant:"secondary",onClick:N,children:p?u.jsx(xS,{className:"h-4 w-4"}):u.jsx(yS,{className:"h-4 w-4"})}),u.jsx(Rt,{size:"sm",variant:"secondary",onClick:C,children:u.jsx(RS,{className:"h-4 w-4"})}),u.jsx(Rt,{size:"sm",variant:"secondary",onClick:V,children:u.jsx(Ov,{className:"h-4 w-4"})}),u.jsx(Rt,{size:"sm",variant:"secondary",onClick:$,children:u.jsx(zv,{className:"h-4 w-4"})}),u.jsx(Rt,{size:"sm",variant:"secondary",onClick:()=>T(w==="terrain"?"volume":"terrain"),children:u.jsx(gS,{className:"h-4 w-4"})})]}),u.jsxs("div",{className:"absolute bottom-4 left-4 flex gap-2",children:[u.jsx(Mn,{variant:"secondary",children:"Authorized Zone"}),u.jsx(Mn,{variant:"destructive",children:"Illegal Mining"}),u.jsx(Mn,{variant:"outline",children:"3D Active"})]})]}),u.jsxs("div",{className:"mt-6 grid gap-4 md:grid-cols-3",children:[u.jsxs("div",{className:"space-y-2",children:[u.jsx("label",{className:"text-sm font-medium",children:"Rotation Speed"}),u.jsx(tg,{value:v,onValueChange:x,max:5,min:.1,step:.1,className:"w-full"}),u.jsxs("div",{className:"flex justify-between text-xs text-gray-500",children:[u.jsx("span",{children:"Slow"}),u.jsx("span",{children:"Fast"})]})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsx("label",{className:"text-sm font-medium",children:"Elevation Scale"}),u.jsx(tg,{value:y,onValueChange:M,max:5,min:.5,step:.1,className:"w-full"}),u.jsxs("div",{className:"flex justify-between text-xs text-gray-500",children:[u.jsx("span",{children:"1x"}),u.jsx("span",{children:"5x"})]})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsx("label",{className:"text-sm font-medium",children:"View Mode"}),u.jsxs("div",{className:"flex gap-2",children:[u.jsx(Rt,{size:"sm",variant:w==="terrain"?"default":"outline",onClick:()=>T("terrain"),className:"flex-1",children:"Terrain"}),u.jsx(Rt,{size:"sm",variant:w==="volume"?"default":"outline",onClick:()=>T("volume"),className:"flex-1",children:"Volume"})]})]})]})]})]})}),u.jsxs("div",{className:"space-y-4",children:[u.jsxs(Mt,{children:[u.jsx(Et,{children:u.jsxs(Tt,{className:"flex items-center gap-2",children:[u.jsx(fc,{className:"h-5 w-5"}),"Volume Analysis"]})}),u.jsx(At,{children:u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"space-y-2",children:[u.jsx("h4",{className:"font-medium text-sm",children:"Excavation Zones"}),u.jsxs("div",{className:"space-y-2 text-sm",children:[u.jsxs("div",{className:"flex justify-between items-center p-2 bg-green-50 rounded",children:[u.jsx("span",{children:"Zone A"}),u.jsxs("div",{className:"text-right",children:[u.jsx("div",{className:"font-medium",children:"2,219 m³"}),u.jsx("div",{className:"text-xs text-gray-500",children:"12.3m depth"})]})]}),u.jsxs("div",{className:"flex justify-between items-center p-2 bg-green-50 rounded",children:[u.jsx("span",{children:"Zone B"}),u.jsxs("div",{className:"text-right",children:[u.jsx("div",{className:"font-medium",children:"3,740 m³"}),u.jsx("div",{className:"text-xs text-gray-500",children:"18.7m depth"})]})]}),u.jsxs("div",{className:"flex justify-between items-center p-2 bg-red-50 rounded border border-red-200",children:[u.jsx("span",{children:"Zone C (Illegal)"}),u.jsxs("div",{className:"text-right",children:[u.jsx("div",{className:"font-medium text-red-600",children:"571 m³"}),u.jsx("div",{className:"text-xs text-red-500",children:"8.2m depth"})]})]})]})]}),u.jsx("div",{className:"border-t pt-3",children:u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"font-medium",children:"Total Volume:"}),u.jsx("span",{className:"font-bold",children:"6,530 m³"})]})})]})})]}),u.jsxs(Mt,{children:[u.jsx(Et,{children:u.jsxs(Tt,{className:"flex items-center gap-2",children:[u.jsx(LS,{className:"h-5 w-5"}),"Calculation Method"]})}),u.jsx(At,{children:u.jsxs("div",{className:"space-y-3 text-sm",children:[u.jsxs("div",{children:[u.jsx("h4",{className:"font-medium",children:"Simpson's Rule"}),u.jsx("p",{className:"text-gray-600",children:"Used for volume estimation from DEM data"})]}),u.jsxs("div",{className:"space-y-1 text-xs text-gray-500",children:[u.jsx("div",{children:"• Grid resolution: 5m"}),u.jsx("div",{children:"• Accuracy: ±5%"}),u.jsx("div",{children:"• Processing time: 2.3s"})]})]})})]}),u.jsxs(Mt,{children:[u.jsx(Et,{children:u.jsxs(Tt,{className:"flex items-center gap-2",children:[u.jsx(sc,{className:"h-5 w-5"}),"View Options"]})}),u.jsx(At,{children:u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"text-sm",children:"Auto Rotation"}),u.jsx(Rt,{size:"sm",variant:p?"default":"outline",onClick:N,children:p?"On":"Off"})]}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"text-sm",children:"Show Boundaries"}),u.jsx(Rt,{size:"sm",variant:S?"default":"outline",onClick:()=>_(!S),children:S?"On":"Off"})]}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"text-sm",children:"Depth Labels"}),u.jsx(Rt,{size:"sm",variant:F?"default":"outline",onClick:()=>D(!F),children:F?"On":"Off"})]})]})})]}),u.jsxs(Mt,{children:[u.jsx(Et,{children:u.jsx(Tt,{children:"Export Options"})}),u.jsx(At,{children:u.jsxs("div",{className:"space-y-2",children:[u.jsx(Rt,{size:"sm",variant:"outline",className:"w-full",onClick:()=>alert("3D model export functionality would be implemented here"),children:"Export 3D Model"}),u.jsx(Rt,{size:"sm",variant:"outline",className:"w-full",onClick:te,children:"Save Screenshot"}),u.jsx(Rt,{size:"sm",variant:"outline",className:"w-full",onClick:()=>{m(!0),alert("Animation generation started")},children:"Generate Animation"})]})})]})]})]}),u.jsxs("div",{className:"grid gap-4 md:grid-cols-3",children:[u.jsxs(Mt,{children:[u.jsx(Et,{children:u.jsx(Tt,{className:"text-lg",children:"Depth Analysis"})}),u.jsx(At,{children:u.jsxs("div",{className:"space-y-2 text-sm",children:[u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{children:"Maximum Depth:"}),u.jsx("span",{className:"font-medium",children:"18.7 m"})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{children:"Average Depth:"}),u.jsx("span",{className:"font-medium",children:"13.1 m"})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{children:"Minimum Depth:"}),u.jsx("span",{className:"font-medium",children:"8.2 m"})]})]})})]}),u.jsxs(Mt,{children:[u.jsx(Et,{children:u.jsx(Tt,{className:"text-lg",children:"Surface Area"})}),u.jsx(At,{children:u.jsxs("div",{className:"space-y-2 text-sm",children:[u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{children:"Total Excavated:"}),u.jsx("span",{className:"font-medium",children:"450.2 ha"})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{children:"Authorized:"}),u.jsx("span",{className:"font-medium text-green-600",children:"380.5 ha"})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{children:"Violations:"}),u.jsx("span",{className:"font-medium text-red-600",children:"69.7 ha"})]})]})})]}),u.jsxs(Mt,{children:[u.jsx(Et,{children:u.jsx(Tt,{className:"text-lg",children:"Environmental Impact"})}),u.jsx(At,{children:u.jsxs("div",{className:"space-y-2 text-sm",children:[u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{children:"Soil Displacement:"}),u.jsx("span",{className:"font-medium",children:"6,530 m³"})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{children:"Impact Radius:"}),u.jsx("span",{className:"font-medium",children:"500 m"})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{children:"Risk Level:"}),u.jsx(Mn,{variant:"destructive",className:"text-xs",children:"High"})]})]})})]})]})]})}function Ob({analysisData:r}){const[e,t]=le.useState({title:"Mining Activity Compliance Report",period:"monthly",includeImages:!0,include3D:!0,includeRecommendations:!0,recipientName:"",recipientEmail:"",recipientOrganization:"State Mining Department"}),[s,o]=le.useState([{id:1,title:"Monthly Compliance Report - December 2024",type:"Compliance",generatedDate:"2024-12-28",status:"Sent",recipient:"State Mining Department",violations:4,size:"2.4 MB"},{id:2,title:"Violation Alert Report - Zone C",type:"Alert",generatedDate:"2024-12-20",status:"Pending",recipient:"District Collector",violations:1,size:"1.8 MB"},{id:3,title:"Environmental Impact Assessment",type:"Environmental",generatedDate:"2024-12-15",status:"Draft",recipient:"Environmental Board",violations:0,size:"3.2 MB"}]),l=()=>{const p={id:s.length+1,title:e.title,type:"Custom",generatedDate:new Date().toISOString().split("T")[0],status:"Generated",recipient:e.recipientOrganization,violations:r?.illegalArea>0?Math.ceil(r.illegalArea/20):0,size:`${(Math.random()*2+1).toFixed(1)} MB`};o([p,...s])},d=p=>{switch(p){case"Sent":return"default";case"Pending":return"secondary";case"Draft":return"outline";case"Generated":return"secondary";default:return"outline"}},f=p=>{switch(p){case"Compliance":return"default";case"Alert":return"destructive";case"Environmental":return"secondary";default:return"outline"}};return u.jsx("div",{className:"space-y-6",children:u.jsxs(_a,{defaultValue:"generate",className:"w-full",children:[u.jsxs(ya,{className:"grid w-full grid-cols-3",children:[u.jsx(rn,{value:"generate",children:"Generate Report"}),u.jsx(rn,{value:"history",children:"Report History"}),u.jsx(rn,{value:"templates",children:"Templates"})]}),u.jsx(_n,{value:"generate",className:"space-y-4",children:u.jsxs("div",{className:"grid gap-6 lg:grid-cols-2",children:[u.jsxs(Mt,{children:[u.jsxs(Et,{children:[u.jsxs(Tt,{className:"flex items-center gap-2",children:[u.jsx(ms,{className:"h-5 w-5"}),"Report Configuration"]}),u.jsx(On,{children:"Configure report settings and content"})]}),u.jsxs(At,{className:"space-y-4",children:[u.jsxs("div",{className:"space-y-2",children:[u.jsx(pi,{htmlFor:"report-title",children:"Report Title"}),u.jsx(kr,{id:"report-title",value:e.title,onChange:p=>t({...e,title:p.target.value}),placeholder:"Enter report title"})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsx(pi,{htmlFor:"report-period",children:"Reporting Period"}),u.jsxs("select",{id:"report-period",value:e.period,onChange:p=>t({...e,period:p.target.value}),className:"w-full p-2 border border-gray-300 rounded-md",children:[u.jsx("option",{value:"weekly",children:"Weekly"}),u.jsx("option",{value:"monthly",children:"Monthly"}),u.jsx("option",{value:"quarterly",children:"Quarterly"}),u.jsx("option",{value:"annual",children:"Annual"}),u.jsx("option",{value:"custom",children:"Custom Range"})]})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsx(pi,{children:"Include in Report"}),u.jsxs("div",{className:"space-y-2",children:[u.jsxs("label",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"checkbox",checked:e.includeImages,onChange:p=>t({...e,includeImages:p.target.checked})}),u.jsx("span",{className:"text-sm",children:"Satellite imagery and maps"})]}),u.jsxs("label",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"checkbox",checked:e.include3D,onChange:p=>t({...e,include3D:p.target.checked})}),u.jsx("span",{className:"text-sm",children:"3D visualizations"})]}),u.jsxs("label",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"checkbox",checked:e.includeRecommendations,onChange:p=>t({...e,includeRecommendations:p.target.checked})}),u.jsx("span",{className:"text-sm",children:"Recommendations and actions"})]})]})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsx(pi,{htmlFor:"recipient-org",children:"Recipient Organization"}),u.jsxs("select",{id:"recipient-org",value:e.recipientOrganization,onChange:p=>t({...e,recipientOrganization:p.target.value}),className:"w-full p-2 border border-gray-300 rounded-md",children:[u.jsx("option",{value:"State Mining Department",children:"State Mining Department"}),u.jsx("option",{value:"District Collector",children:"District Collector"}),u.jsx("option",{value:"Environmental Board",children:"Environmental Board"}),u.jsx("option",{value:"Ministry of Mines",children:"Ministry of Mines"}),u.jsx("option",{value:"Forest Department",children:"Forest Department"})]})]}),u.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[u.jsxs("div",{className:"space-y-2",children:[u.jsx(pi,{htmlFor:"recipient-name",children:"Recipient Name"}),u.jsx(kr,{id:"recipient-name",value:e.recipientName,onChange:p=>t({...e,recipientName:p.target.value}),placeholder:"Officer name"})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsx(pi,{htmlFor:"recipient-email",children:"Email Address"}),u.jsx(kr,{id:"recipient-email",type:"email",value:e.recipientEmail,onChange:p=>t({...e,recipientEmail:p.target.value}),placeholder:"official@domain.gov.in"})]})]}),u.jsxs(Rt,{onClick:l,className:"w-full",children:[u.jsx(ms,{className:"h-4 w-4 mr-2"}),"Generate Report"]})]})]}),u.jsxs(Mt,{children:[u.jsxs(Et,{children:[u.jsxs(Tt,{className:"flex items-center gap-2",children:[u.jsx(ar,{className:"h-5 w-5"}),"Report Preview"]}),u.jsx(On,{children:"Preview of the generated report"})]}),u.jsx(At,{children:u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"p-4 border rounded-lg bg-gray-50",children:[u.jsx("h3",{className:"font-bold text-lg",children:e.title}),u.jsxs("div",{className:"flex items-center gap-4 mt-2 text-sm text-gray-600",children:[u.jsxs("div",{className:"flex items-center gap-1",children:[u.jsx(kv,{className:"h-4 w-4"}),new Date().toLocaleDateString()]}),u.jsxs("div",{className:"flex items-center gap-1",children:[u.jsx(Ym,{className:"h-4 w-4"}),e.recipientOrganization]})]})]}),r&&u.jsxs("div",{className:"space-y-3",children:[u.jsx("h4",{className:"font-medium",children:"Executive Summary"}),u.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[u.jsxs("div",{className:"p-3 border rounded",children:[u.jsxs("div",{className:"text-lg font-bold",children:[r.totalMiningArea," ha"]}),u.jsx("div",{className:"text-xs text-gray-600",children:"Total Mining Area"})]}),u.jsxs("div",{className:"p-3 border rounded",children:[u.jsxs("div",{className:"text-lg font-bold text-red-600",children:[r.illegalArea," ha"]}),u.jsx("div",{className:"text-xs text-gray-600",children:"Violations"})]})]}),r.illegalArea>0&&u.jsx("div",{className:"p-3 bg-red-50 border border-red-200 rounded",children:u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(ii,{className:"h-4 w-4 text-red-600"}),u.jsx("span",{className:"text-sm font-medium text-red-800",children:"Critical violations detected requiring immediate action"})]})})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsx("h4",{className:"font-medium",children:"Report Sections"}),u.jsxs("div",{className:"space-y-1 text-sm",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(ar,{className:"h-3 w-3 text-green-600"}),u.jsx("span",{children:"Mining Activity Overview"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(ar,{className:"h-3 w-3 text-green-600"}),u.jsx("span",{children:"Boundary Compliance Analysis"})]}),e.includeImages&&u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(ar,{className:"h-3 w-3 text-green-600"}),u.jsx("span",{children:"Satellite Imagery & Maps"})]}),e.include3D&&u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(ar,{className:"h-3 w-3 text-green-600"}),u.jsx("span",{children:"3D Volume Analysis"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(ar,{className:"h-3 w-3 text-green-600"}),u.jsx("span",{children:"Environmental Impact Assessment"})]}),e.includeRecommendations&&u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(ar,{className:"h-3 w-3 text-green-600"}),u.jsx("span",{children:"Recommendations & Action Items"})]})]})]}),u.jsxs("div",{className:"flex gap-2 pt-4",children:[u.jsxs(Rt,{size:"sm",variant:"outline",className:"flex-1",onClick:()=>window.print(),children:[u.jsx(wS,{className:"h-4 w-4 mr-2"}),"Print"]}),u.jsxs(Rt,{size:"sm",variant:"outline",className:"flex-1",onClick:()=>alert("PDF download would start here"),children:[u.jsx(Km,{className:"h-4 w-4 mr-2"}),"PDF"]}),u.jsxs(Rt,{size:"sm",className:"flex-1",onClick:()=>{e.recipientEmail?alert(`Report would be sent to ${e.recipientEmail}`):alert("Please enter recipient email address")},children:[u.jsx(PS,{className:"h-4 w-4 mr-2"}),"Send"]})]})]})})]})]})}),u.jsx(_n,{value:"history",className:"space-y-4",children:u.jsxs(Mt,{children:[u.jsxs(Et,{children:[u.jsxs(Tt,{className:"flex items-center gap-2",children:[u.jsx(Jy,{className:"h-5 w-5"}),"Report History"]}),u.jsx(On,{children:"Previously generated reports and their status"})]}),u.jsx(At,{children:u.jsx("div",{className:"space-y-4",children:s.map(p=>u.jsxs("div",{className:"border rounded-lg p-4",children:[u.jsxs("div",{className:"flex items-start justify-between mb-3",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"font-medium",children:p.title}),u.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[u.jsx(Mn,{variant:f(p.type),children:p.type}),u.jsx(Mn,{variant:d(p.status),children:p.status}),p.violations>0&&u.jsxs(Mn,{variant:"destructive",className:"flex items-center gap-1",children:[u.jsx(ii,{className:"h-3 w-3"}),p.violations," violations"]})]})]}),u.jsxs("div",{className:"text-right text-sm text-gray-600",children:[u.jsx("div",{children:p.generatedDate}),u.jsx("div",{children:p.size})]})]}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-600",children:[u.jsx(Ym,{className:"h-4 w-4"}),u.jsx("span",{children:p.recipient})]}),u.jsxs("div",{className:"flex gap-2",children:[u.jsx(Rt,{size:"sm",variant:"outline",onClick:()=>alert(`Downloading ${p.title}`),children:u.jsx(Km,{className:"h-4 w-4"})}),u.jsx(Rt,{size:"sm",variant:"outline",onClick:()=>alert(`Email sent to ${p.recipient}`),children:u.jsx(dS,{className:"h-4 w-4"})})]})]})]},p.id))})})]})}),u.jsx(_n,{value:"templates",className:"space-y-4",children:u.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[u.jsxs(Mt,{children:[u.jsxs(Et,{children:[u.jsx(Tt,{children:"Standard Templates"}),u.jsx(On,{children:"Pre-configured report templates"})]}),u.jsx(At,{className:"space-y-3",children:[{name:"Monthly Compliance Report",description:"Standard compliance report for state authorities",frequency:"Monthly"},{name:"Violation Alert Report",description:"Immediate alert for boundary violations",frequency:"As needed"},{name:"Environmental Impact Report",description:"Environmental assessment and impact analysis",frequency:"Quarterly"},{name:"Volume Analysis Report",description:"Detailed volume calculation and trends",frequency:"Monthly"}].map((p,m)=>u.jsx("div",{className:"p-3 border rounded-lg",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("h4",{className:"font-medium",children:p.name}),u.jsx("p",{className:"text-sm text-gray-600",children:p.description}),u.jsx(Mn,{variant:"outline",className:"mt-1 text-xs",children:p.frequency})]}),u.jsx(Rt,{size:"sm",variant:"outline",onClick:()=>{t(v=>({...v,title:p.name,period:p.frequency.toLowerCase()})),alert(`Template "${p.name}" loaded`)},children:"Use Template"})]})},m))})]}),u.jsxs(Mt,{children:[u.jsxs(Et,{children:[u.jsx(Tt,{children:"Custom Templates"}),u.jsx(On,{children:"Create and manage custom report templates"})]}),u.jsx(At,{children:u.jsxs("div",{className:"space-y-4",children:[u.jsxs(Rt,{className:"w-full",variant:"outline",onClick:()=>alert("Template creation dialog would open here"),children:[u.jsx(ms,{className:"h-4 w-4 mr-2"}),"Create New Template"]}),u.jsxs("div",{className:"text-center text-gray-500 py-8",children:[u.jsx(ms,{className:"h-8 w-8 mx-auto mb-2 opacity-50"}),u.jsx("p",{children:"No custom templates created yet"})]})]})})]})]})})]})})}function zb(){const[r,e]=le.useState([{id:1,name:"Mining Lease ML-001",type:"Authorized",area:380.5,coordinates:"23.2599°N, 77.4126°E",status:"Active",uploadDate:"2024-01-15",format:"Shapefile",violations:0},{id:2,name:"Environmental Buffer Zone",type:"Restricted",area:150,coordinates:"23.2650°N, 77.4200°E",status:"Active",uploadDate:"2024-01-20",format:"KML",violations:3},{id:3,name:"District Boundary - Sector 7",type:"Administrative",area:2500,coordinates:"23.2700°N, 77.4300°E",status:"Active",uploadDate:"2024-02-01",format:"GeoJSON",violations:1}]),[t,s]=le.useState({name:"",type:"Authorized",file:null}),o=m=>{const v=m.target.files?.[0];v&&s({...t,file:v})},l=()=>{if(t.name&&t.file){const m={id:r.length+1,name:t.name,type:t.type,area:Math.random()*1e3+100,coordinates:`${(23.2+Math.random()*.1).toFixed(4)}°N, ${(77.4+Math.random()*.1).toFixed(4)}°E`,status:"Active",uploadDate:new Date().toISOString().split("T")[0],format:t.file.name.includes(".shp")?"Shapefile":t.file.name.includes(".kml")?"KML":"GeoJSON",violations:0};e([...r,m]),s({name:"",type:"Authorized",file:null})}},d=m=>{e(r.filter(v=>v.id!==m))},f=m=>{switch(m){case"Active":return"secondary";case"Inactive":return"outline";default:return"secondary"}},p=m=>{switch(m){case"Authorized":return"default";case"Restricted":return"destructive";case"Administrative":return"secondary";default:return"outline"}};return u.jsxs("div",{className:"space-y-6",children:[u.jsx("div",{className:"space-y-4",children:u.jsxs(ho,{className:"border-orange-200 bg-orange-50",children:[u.jsx(ii,{className:"h-4 w-4 text-orange-600"}),u.jsx(po,{className:"text-orange-800",children:"4 boundary violations detected across all mining zones. Immediate action required."})]})}),u.jsxs(_a,{defaultValue:"manage",className:"w-full",children:[u.jsxs(ya,{className:"grid w-full grid-cols-3",children:[u.jsx(rn,{value:"manage",children:"Manage Boundaries"}),u.jsx(rn,{value:"upload",children:"Upload New"}),u.jsx(rn,{value:"analysis",children:"Violation Analysis"})]}),u.jsx(_n,{value:"manage",className:"space-y-4",children:u.jsxs(Mt,{children:[u.jsxs(Et,{children:[u.jsxs(Tt,{className:"flex items-center gap-2",children:[u.jsx(mo,{className:"h-5 w-5"}),"Boundary Management"]}),u.jsx(On,{children:"Manage mining lease boundaries, restricted zones, and administrative boundaries"})]}),u.jsx(At,{children:u.jsx("div",{className:"space-y-4",children:r.map(m=>u.jsxs("div",{className:"border rounded-lg p-4 space-y-3",children:[u.jsxs("div",{className:"flex items-start justify-between",children:[u.jsxs("div",{className:"space-y-1",children:[u.jsx("h3",{className:"font-medium",children:m.name}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(Mn,{variant:p(m.type),children:m.type}),u.jsx(Mn,{variant:f(m.status),children:m.status}),m.violations>0&&u.jsxs(Mn,{variant:"destructive",className:"flex items-center gap-1",children:[u.jsx(ii,{className:"h-3 w-3"}),m.violations," violations"]})]})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(Rt,{size:"sm",variant:"outline",children:u.jsx(US,{className:"h-4 w-4"})}),u.jsx(Rt,{size:"sm",variant:"outline",onClick:()=>d(m.id),children:u.jsx(kS,{className:"h-4 w-4"})})]})]}),u.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 text-sm",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-gray-600",children:"Area:"}),u.jsxs("p",{className:"font-medium",children:[m.area.toFixed(1)," ha"]})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-gray-600",children:"Coordinates:"}),u.jsx("p",{className:"font-medium text-xs",children:m.coordinates})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-gray-600",children:"Format:"}),u.jsx("p",{className:"font-medium",children:m.format})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-gray-600",children:"Uploaded:"}),u.jsx("p",{className:"font-medium",children:m.uploadDate})]})]}),m.violations>0&&u.jsxs(ho,{className:"border-red-200 bg-red-50",children:[u.jsx(ii,{className:"h-4 w-4 text-red-600"}),u.jsxs(po,{className:"text-red-800",children:[m.violations," mining activities detected outside this boundary"]})]})]},m.id))})})]})}),u.jsxs(_n,{value:"upload",className:"space-y-4",children:[u.jsxs(Mt,{children:[u.jsxs(Et,{children:[u.jsxs(Tt,{className:"flex items-center gap-2",children:[u.jsx(Xf,{className:"h-5 w-5"}),"Upload New Boundary"]}),u.jsx(On,{children:"Upload boundary files in Shapefile, KML, or GeoJSON format"})]}),u.jsxs(At,{className:"space-y-4",children:[u.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[u.jsxs("div",{className:"space-y-2",children:[u.jsx(pi,{htmlFor:"boundary-name",children:"Boundary Name"}),u.jsx(kr,{id:"boundary-name",value:t.name,onChange:m=>s({...t,name:m.target.value}),placeholder:"Enter boundary name"})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsx(pi,{htmlFor:"boundary-type",children:"Boundary Type"}),u.jsxs("select",{id:"boundary-type",value:t.type,onChange:m=>s({...t,type:m.target.value}),className:"w-full p-2 border border-gray-300 rounded-md",children:[u.jsx("option",{value:"Authorized",children:"Authorized Mining Area"}),u.jsx("option",{value:"Restricted",children:"Restricted Zone"}),u.jsx("option",{value:"Administrative",children:"Administrative Boundary"})]})]})]}),u.jsxs("div",{className:"border-2 border-dashed border-gray-300 rounded-lg p-8 text-center",children:[u.jsx(ms,{className:"mx-auto h-12 w-12 text-gray-400 mb-4"}),u.jsxs("div",{className:"space-y-2",children:[u.jsx(pi,{htmlFor:"boundary-file",className:"text-lg font-medium cursor-pointer",children:"Select Boundary File"}),u.jsx("p",{className:"text-sm text-gray-500",children:"Supported formats: .shp, .kml, .kmz, .geojson"}),u.jsx(kr,{id:"boundary-file",type:"file",accept:".shp,.kml,.kmz,.geojson",onChange:o,className:"mt-4"})]})]}),t.file&&u.jsx("div",{className:"p-4 bg-green-50 border border-green-200 rounded-lg",children:u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(ar,{className:"h-4 w-4 text-green-600"}),u.jsxs("span",{className:"text-green-800 font-medium",children:["File selected: ",t.file.name]})]})}),u.jsxs(Rt,{onClick:l,disabled:!t.name||!t.file,className:"w-full",children:[u.jsx(MS,{className:"h-4 w-4 mr-2"}),"Add Boundary"]})]})]}),u.jsxs(Mt,{children:[u.jsx(Et,{children:u.jsx(Tt,{children:"File Format Guidelines"})}),u.jsx(At,{children:u.jsxs("div",{className:"grid gap-4 md:grid-cols-3",children:[u.jsxs("div",{className:"space-y-2",children:[u.jsx("h4",{className:"font-medium",children:"Shapefile (.shp)"}),u.jsxs("ul",{className:"text-sm text-gray-600 space-y-1",children:[u.jsx("li",{children:"• Include .shx, .dbf files"}),u.jsx("li",{children:"• Coordinate system: WGS84"}),u.jsx("li",{children:"• Max size: 50MB"})]})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsx("h4",{className:"font-medium",children:"KML/KMZ (.kml/.kmz)"}),u.jsxs("ul",{className:"text-sm text-gray-600 space-y-1",children:[u.jsx("li",{children:"• Google Earth compatible"}),u.jsx("li",{children:"• Include polygon features"}),u.jsx("li",{children:"• Max size: 25MB"})]})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsx("h4",{className:"font-medium",children:"GeoJSON (.geojson)"}),u.jsxs("ul",{className:"text-sm text-gray-600 space-y-1",children:[u.jsx("li",{children:"• RFC 7946 compliant"}),u.jsx("li",{children:"• UTF-8 encoding"}),u.jsx("li",{children:"• Max size: 10MB"})]})]})]})})]})]}),u.jsx(_n,{value:"analysis",className:"space-y-4",children:u.jsxs("div",{className:"grid gap-4",children:[u.jsxs(Mt,{children:[u.jsxs(Et,{children:[u.jsxs(Tt,{className:"flex items-center gap-2",children:[u.jsx(ii,{className:"h-5 w-5"}),"Boundary Violation Analysis"]}),u.jsx(On,{children:"Detailed analysis of mining activities outside authorized boundaries"})]}),u.jsx(At,{children:u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[u.jsxs("div",{className:"p-4 border rounded-lg text-center",children:[u.jsx("div",{className:"text-2xl font-bold text-red-600",children:"4"}),u.jsx("div",{className:"text-sm text-gray-600",children:"Total Violations"})]}),u.jsxs("div",{className:"p-4 border rounded-lg text-center",children:[u.jsx("div",{className:"text-2xl font-bold text-orange-600",children:"69.7 ha"}),u.jsx("div",{className:"text-sm text-gray-600",children:"Illegal Mining Area"})]}),u.jsxs("div",{className:"p-4 border rounded-lg text-center",children:[u.jsx("div",{className:"text-2xl font-bold text-blue-600",children:"15.5%"}),u.jsx("div",{className:"text-sm text-gray-600",children:"Violation Rate"})]})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsx("h4",{className:"font-medium",children:"Recent Violations"}),u.jsx("div",{className:"space-y-2",children:[{location:"Zone C - East Sector",area:"45.2 ha",date:"2024-12-20",severity:"High"},{location:"Zone A - North Boundary",area:"12.8 ha",date:"2024-12-18",severity:"Medium"},{location:"Buffer Zone - South",area:"8.5 ha",date:"2024-12-15",severity:"Low"}].map((m,v)=>u.jsxs("div",{className:"flex items-center justify-between p-3 border rounded-lg",children:[u.jsxs("div",{children:[u.jsx("p",{className:"font-medium",children:m.location}),u.jsx("p",{className:"text-sm text-gray-600",children:m.date})]}),u.jsxs("div",{className:"text-right",children:[u.jsx("p",{className:"font-medium",children:m.area}),u.jsx(Mn,{variant:m.severity==="High"?"destructive":m.severity==="Medium"?"secondary":"outline",children:m.severity})]})]},v))})]})]})})]}),u.jsxs(Mt,{children:[u.jsx(Et,{children:u.jsx(Tt,{children:"Recommended Actions"})}),u.jsx(At,{children:u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{className:"flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-lg",children:[u.jsx(ii,{className:"h-5 w-5 text-red-600 mt-0.5"}),u.jsxs("div",{children:[u.jsx("p",{className:"font-medium text-red-800",children:"Immediate Action Required"}),u.jsx("p",{className:"text-sm text-red-700",children:"Stop mining activities in Zone C - East Sector (45.2 ha violation)"})]})]}),u.jsxs("div",{className:"flex items-start gap-3 p-3 bg-orange-50 border border-orange-200 rounded-lg",children:[u.jsx(hc,{className:"h-5 w-5 text-orange-600 mt-0.5"}),u.jsxs("div",{children:[u.jsx("p",{className:"font-medium text-orange-800",children:"Site Inspection"}),u.jsx("p",{className:"text-sm text-orange-700",children:"Schedule inspection for Zone A - North Boundary within 7 days"})]})]}),u.jsxs("div",{className:"flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg",children:[u.jsx(ms,{className:"h-5 w-5 text-blue-600 mt-0.5"}),u.jsxs("div",{children:[u.jsx("p",{className:"font-medium text-blue-800",children:"Report Generation"}),u.jsx("p",{className:"text-sm text-blue-700",children:"Prepare violation report for district authorities"})]})]})]})})]})]})})]})]})}function Bb(){const[r,e]=le.useState("dashboard"),[t,s]=le.useState(null),[o,l]=le.useState(!1),d={totalMiningArea:450.2,authorizedArea:380.5,illegalArea:69.7,estimatedDepth:15.3,estimatedVolume:6890.4,lastAnalysisDate:"2024-12-28",riskLevel:"High"};return sr.useEffect(()=>{setTimeout(()=>{s(d),l(d.illegalArea>0)},1e3)},[]),u.jsxs("div",{className:"min-h-screen bg-gray-50",children:[u.jsx("header",{className:"bg-white border-b border-gray-200 px-6 py-4",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(da,{className:"h-8 w-8 text-blue-600"}),u.jsxs("div",{children:[u.jsx("h1",{className:"text-xl font-semibold text-gray-900",children:"Mining Detection System"}),u.jsx("p",{className:"text-sm text-gray-500",children:"Automated Open Crust Mining Activity Detection"})]})]}),u.jsxs("div",{className:"flex items-center gap-4",children:[o&&u.jsxs(ho,{className:"w-auto border-red-200 bg-red-50",children:[u.jsx(ii,{className:"h-4 w-4 text-red-600"}),u.jsx(po,{className:"text-red-800",children:"Illegal mining activity detected outside authorized boundaries"})]}),u.jsxs(Mn,{variant:t?.riskLevel==="High"?"destructive":"secondary",children:["Risk Level: ",t?.riskLevel||"Unknown"]})]})]})}),u.jsx("main",{className:"container mx-auto px-6 py-6",children:u.jsxs(_a,{value:r,onValueChange:e,className:"space-y-6",children:[u.jsxs(ya,{className:"grid w-full grid-cols-6",children:[u.jsxs(rn,{value:"dashboard",className:"flex items-center gap-2",children:[u.jsx(Fv,{className:"h-4 w-4"}),"Dashboard"]}),u.jsxs(rn,{value:"upload",className:"flex items-center gap-2",children:[u.jsx(Xf,{className:"h-4 w-4"}),"Data Upload"]}),u.jsxs(rn,{value:"map",className:"flex items-center gap-2",children:[u.jsx(mo,{className:"h-4 w-4"}),"Interactive Map"]}),u.jsxs(rn,{value:"3d",className:"flex items-center gap-2",children:[u.jsx(da,{className:"h-4 w-4"}),"3D Visualization"]}),u.jsxs(rn,{value:"boundaries",className:"flex items-center gap-2",children:[u.jsx(ii,{className:"h-4 w-4"}),"Boundaries"]}),u.jsxs(rn,{value:"reports",className:"flex items-center gap-2",children:[u.jsx(ms,{className:"h-4 w-4"}),"Reports"]})]}),u.jsx(_n,{value:"dashboard",children:u.jsx(KS,{analysisData:t})}),u.jsx(_n,{value:"upload",children:u.jsx(JS,{onDataUploaded:s})}),u.jsx(_n,{value:"map",children:u.jsx(rM,{analysisData:t})}),u.jsx(_n,{value:"3d",children:u.jsx(kb,{analysisData:t})}),u.jsx(_n,{value:"boundaries",children:u.jsx(zb,{})}),u.jsx(_n,{value:"reports",children:u.jsx(Ob,{analysisData:t})})]})})]})}w_.createRoot(document.getElementById("root")).render(u.jsx(Bb,{}));export{g_ as g};
