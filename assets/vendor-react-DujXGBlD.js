var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e){if(e.__esModule)return e
var t=e.default
if("function"==typeof t){var n=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)}
n.prototype=t.prototype}else n={}
return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t)
Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}var r={exports:{}},a={},l=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator
var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,b={}
function w(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||g}function k(){}function S(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||g}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.")
this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=w.prototype
var x=S.prototype=new k
x.constructor=S,y(x,w.prototype),x.isPureReactComponent=!0
var E=Array.isArray,C=Object.prototype.hasOwnProperty,_={current:null},P={key:!0,ref:!0,__self:!0,__source:!0}
function N(e,t,n){var r,a={},o=null,i=null
if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)C.call(t,r)&&!P.hasOwnProperty(r)&&(a[r]=t[r])
var u=arguments.length-2
if(1===u)a.children=n
else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2]
a.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===a[r]&&(a[r]=u[r])
return{$$typeof:l,type:e,key:o,ref:i,props:a,_owner:_.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===l}var L=/\/+/g
function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"}
return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function z(e,t,n,r,a){var i=typeof e
"undefined"!==i&&"boolean"!==i||(e=null)
var u=!1
if(null===e)u=!0
else switch(i){case"string":case"number":u=!0
break
case"object":switch(e.$$typeof){case l:case o:u=!0}}if(u)return a=a(u=e),e=""===r?"."+R(u,0):r,E(a)?(n="",null!=e&&(n=e.replace(L,"$&/")+"/"),z(a,t,n,"",(function(e){return e}))):null!=a&&(T(a)&&(a=function(e,t){return{$$typeof:l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(L,"$&/")+"/")+e)),t.push(a)),1
if(u=0,r=""===r?".":r+":",E(e))for(var s=0;s<e.length;s++){var c=r+R(i=e[s],s)
u+=z(i,t,n,c,a)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=v&&e[v]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),s=0;!(i=e.next()).done;)u+=z(i=i.value,t,n,c=r+R(i,s++),a)
else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")
return u}function O(e,t,n){if(null==e)return e
var r=[],a=0
return z(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function M(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default
throw e._result}var F={current:null},D={transition:null},I={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:D,ReactCurrentOwner:_}
function $(){throw Error("act(...) is not supported in production builds of React.")}a.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0
return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!T(e))throw Error("React.Children.only expected to receive a single React element child.")
return e}},a.Component=w,a.Fragment=i,a.Profiler=s,a.PureComponent=S,a.StrictMode=u,a.Suspense=p,a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,a.act=$,a.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".")
var r=y({},e.props),a=e.key,o=e.ref,i=e._owner
if(null!=t){if(void 0!==t.ref&&(o=t.ref,i=_.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps
for(s in t)C.call(t,s)&&!P.hasOwnProperty(s)&&(r[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2
if(1===s)r.children=n
else if(1<s){u=Array(s)
for(var c=0;c<s;c++)u[c]=arguments[c+2]
r.children=u}return{$$typeof:l,type:e.type,key:a,ref:o,props:r,_owner:i}},a.createContext=function(e){return(e={$$typeof:f,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},a.createElement=N,a.createFactory=function(e){var t=N.bind(null,e)
return t.type=e,t},a.createRef=function(){return{current:null}},a.forwardRef=function(e){return{$$typeof:d,render:e}},a.isValidElement=T,a.lazy=function(e){return{$$typeof:m,_payload:{_status:-1,_result:e},_init:M}},a.memo=function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},a.startTransition=function(e){var t=D.transition
D.transition={}
try{e()}finally{D.transition=t}},a.unstable_act=$,a.useCallback=function(e,t){return F.current.useCallback(e,t)},a.useContext=function(e){return F.current.useContext(e)},a.useDebugValue=function(){},a.useDeferredValue=function(e){return F.current.useDeferredValue(e)},a.useEffect=function(e,t){return F.current.useEffect(e,t)},a.useId=function(){return F.current.useId()},a.useImperativeHandle=function(e,t,n){return F.current.useImperativeHandle(e,t,n)},a.useInsertionEffect=function(e,t){return F.current.useInsertionEffect(e,t)},a.useLayoutEffect=function(e,t){return F.current.useLayoutEffect(e,t)},a.useMemo=function(e,t){return F.current.useMemo(e,t)},a.useReducer=function(e,t,n){return F.current.useReducer(e,t,n)},a.useRef=function(e){return F.current.useRef(e)},a.useState=function(e){return F.current.useState(e)},a.useSyncExternalStore=function(e,t,n){return F.current.useSyncExternalStore(e,t,n)},a.useTransition=function(){return F.current.useTransition()},a.version="18.3.1",r.exports=a
var U=r.exports
const A=t(U)
var j={exports:{}},B={},W={exports:{}},V={}
!function(e){function t(e,t){var n=e.length
e.push(t)
e:for(;0<n;){var r=n-1>>>1,l=e[r]
if(!(0<a(l,t)))break e
e[r]=t,e[n]=l,n=r}}function n(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null
var t=e[0],n=e.pop()
if(n!==t){e[0]=n
e:for(var r=0,l=e.length,o=l>>>1;r<o;){var i=2*(r+1)-1,u=e[i],s=i+1,c=e[s]
if(0>a(u,n))s<l&&0>a(c,u)?(e[r]=c,e[s]=n,r=s):(e[r]=u,e[i]=n,r=i)
else{if(!(s<l&&0>a(c,n)))break e
e[r]=c,e[s]=n,r=s}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex
return 0!==n?n:e.id-t.id}if("object"==typeof performance&&"function"==typeof performance.now){var l=performance
e.unstable_now=function(){return l.now()}}else{var o=Date,i=o.now()
e.unstable_now=function(){return o.now()-i}}var u=[],s=[],c=1,f=null,d=3,p=!1,h=!1,m=!1,v="function"==typeof setTimeout?setTimeout:null,g="function"==typeof clearTimeout?clearTimeout:null,y="undefined"!=typeof setImmediate?setImmediate:null
function b(e){for(var a=n(s);null!==a;){if(null===a.callback)r(s)
else{if(!(a.startTime<=e))break
r(s),a.sortIndex=a.expirationTime,t(u,a)}a=n(s)}}function w(e){if(m=!1,b(e),!h)if(null!==n(u))h=!0,z(k)
else{var t=n(s)
null!==t&&O(w,t.startTime-e)}}function k(t,a){h=!1,m&&(m=!1,g(C),C=-1),p=!0
var l=d
try{for(b(a),f=n(u);null!==f&&(!(f.expirationTime>a)||t&&!N());){var o=f.callback
if("function"==typeof o){f.callback=null,d=f.priorityLevel
var i=o(f.expirationTime<=a)
a=e.unstable_now(),"function"==typeof i?f.callback=i:f===n(u)&&r(u),b(a)}else r(u)
f=n(u)}if(null!==f)var c=!0
else{var v=n(s)
null!==v&&O(w,v.startTime-a),c=!1}return c}finally{f=null,d=l,p=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling)
var S,x=!1,E=null,C=-1,_=5,P=-1
function N(){return!(e.unstable_now()-P<_)}function T(){if(null!==E){var t=e.unstable_now()
P=t
var n=!0
try{n=E(!0,t)}finally{n?S():(x=!1,E=null)}}else x=!1}if("function"==typeof y)S=function(){y(T)}
else if("undefined"!=typeof MessageChannel){var L=new MessageChannel,R=L.port2
L.port1.onmessage=T,S=function(){R.postMessage(null)}}else S=function(){v(T,0)}
function z(e){E=e,x||(x=!0,S())}function O(t,n){C=v((function(){t(e.unstable_now())}),n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){h||p||(h=!0,z(k))},e.unstable_forceFrameRate=function(e){0>e||125<e||(_=0<e?Math.floor(1e3/e):5)},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(e){switch(d){case 1:case 2:case 3:var t=3
break
default:t=d}var n=d
d=t
try{return e()}finally{d=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break
default:e=3}var n=d
d=e
try{return t()}finally{d=n}},e.unstable_scheduleCallback=function(r,a,l){var o=e.unstable_now()
switch("object"==typeof l&&null!==l?l="number"==typeof(l=l.delay)&&0<l?o+l:o:l=o,r){case 1:var i=-1
break
case 2:i=250
break
case 5:i=1073741823
break
case 4:i=1e4
break
default:i=5e3}return r={id:c++,callback:a,priorityLevel:r,startTime:l,expirationTime:i=l+i,sortIndex:-1},l>o?(r.sortIndex=l,t(s,r),null===n(u)&&r===n(s)&&(m?(g(C),C=-1):m=!0,O(w,l-o))):(r.sortIndex=i,t(u,r),h||p||(h=!0,z(k))),r},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(e){var t=d
return function(){var n=d
d=t
try{return e.apply(this,arguments)}finally{d=n}}}}(V),W.exports=V
var H=W.exports,Q=U,K=H
function q(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])
return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Y=new Set,X={}
function J(e,t){G(e,t),G(e+"Capture",t)}function G(e,t){for(X[e]=t,e=0;e<t.length;e++)Y.add(t[e])}var Z=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),ee=Object.prototype.hasOwnProperty,te=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ne={},re={}
function ae(e,t,n,r,a,l,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var le={}
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){le[e]=new ae(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0]
le[t]=new ae(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){le[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){le[e]=new ae(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){le[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){le[e]=new ae(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){le[e]=new ae(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){le[e]=new ae(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){le[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)}))
var oe=/[\-:]([a-z])/g
function ie(e){return e[1].toUpperCase()}function ue(e,t,n,r){var a=le.hasOwnProperty(t)?le[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1
switch(typeof t){case"function":case"symbol":return!0
case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e)
default:return!1}}(e,t,n,r))return!0
if(r)return!1
if(null!==n)switch(n.type){case 3:return!t
case 4:return!1===t
case 5:return isNaN(t)
case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!ee.call(re,e)||!ee.call(ne,e)&&(te.test(e)?re[e]=!0:(ne[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(oe,ie)
le[t]=new ae(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(oe,ie)
le[t]=new ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(oe,ie)
le[t]=new ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){le[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)})),le.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){le[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)}))
var se=Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ce=Symbol.for("react.element"),fe=Symbol.for("react.portal"),de=Symbol.for("react.fragment"),pe=Symbol.for("react.strict_mode"),he=Symbol.for("react.profiler"),me=Symbol.for("react.provider"),ve=Symbol.for("react.context"),ge=Symbol.for("react.forward_ref"),ye=Symbol.for("react.suspense"),be=Symbol.for("react.suspense_list"),we=Symbol.for("react.memo"),ke=Symbol.for("react.lazy"),Se=Symbol.for("react.offscreen"),xe=Symbol.iterator
function Ee(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=xe&&e[xe]||e["@@iterator"])?e:null}var Ce,_e=Object.assign
function Pe(e){if(void 0===Ce)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/)
Ce=t&&t[1]||""}return"\n"+Ce+e}var Ne=!1
function Te(e,t){if(!e||Ne)return""
Ne=!0
var n=Error.prepareStackTrace
Error.prepareStackTrace=void 0
try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&"string"==typeof s.stack){for(var a=s.stack.split("\n"),l=r.stack.split("\n"),o=a.length-1,i=l.length-1;1<=o&&0<=i&&a[o]!==l[i];)i--
for(;1<=o&&0<=i;o--,i--)if(a[o]!==l[i]){if(1!==o||1!==i)do{if(o--,0>--i||a[o]!==l[i]){var u="\n"+a[o].replace(" at new "," at ")
return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=o&&0<=i)
break}}}finally{Ne=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pe(e):""}function Le(e){switch(e.tag){case 5:return Pe(e.type)
case 16:return Pe("Lazy")
case 13:return Pe("Suspense")
case 19:return Pe("SuspenseList")
case 0:case 2:case 15:return e=Te(e.type,!1)
case 11:return e=Te(e.type.render,!1)
case 1:return e=Te(e.type,!0)
default:return""}}function Re(e){if(null==e)return null
if("function"==typeof e)return e.displayName||e.name||null
if("string"==typeof e)return e
switch(e){case de:return"Fragment"
case fe:return"Portal"
case he:return"Profiler"
case pe:return"StrictMode"
case ye:return"Suspense"
case be:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case ve:return(e.displayName||"Context")+".Consumer"
case me:return(e._context.displayName||"Context")+".Provider"
case ge:var t=e.render
return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e
case we:return null!==(t=e.displayName||null)?t:Re(e.type)||"Memo"
case ke:t=e._payload,e=e._init
try{return Re(e(t))}catch(n){}}return null}function ze(e){var t=e.type
switch(e.tag){case 24:return"Cache"
case 9:return(t.displayName||"Context")+".Consumer"
case 10:return(t._context.displayName||"Context")+".Provider"
case 18:return"DehydratedFragment"
case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef")
case 7:return"Fragment"
case 5:return t
case 4:return"Portal"
case 3:return"Root"
case 6:return"Text"
case 16:return Re(t)
case 8:return t===pe?"StrictMode":"Mode"
case 22:return"Offscreen"
case 12:return"Profiler"
case 21:return"Scope"
case 13:return"Suspense"
case 19:return"SuspenseList"
case 25:return"TracingMarker"
case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null
if("string"==typeof t)return t}return null}function Oe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e
default:return""}}function Me(e){var t=e.type
return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Fe(e){e._valueTracker||(e._valueTracker=function(e){var t=Me(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t]
if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var a=n.get,l=n.set
return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,l.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function De(e){if(!e)return!1
var t=e._valueTracker
if(!t)return!0
var n=t.getValue(),r=""
return e&&(r=Me(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Ie(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null
try{return e.activeElement||e.body}catch(t){return e.body}}function $e(e,t){var n=t.checked
return _e({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Ue(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked
n=Oe(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Ae(e,t){null!=(t=t.checked)&&ue(e,"checked",t,!1)}function je(e,t){Ae(e,t)
var n=Oe(t.value),r=t.type
if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n)
else if("submit"===r||"reset"===r)return void e.removeAttribute("value")
t.hasOwnProperty("value")?We(e,t.type,n):t.hasOwnProperty("defaultValue")&&We(e,t.type,Oe(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Be(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type
if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return
t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function We(e,t,n){"number"===t&&Ie(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ve=Array.isArray
function He(e,t,n,r){if(e=e.options,t){t={}
for(var a=0;a<n.length;a++)t["$"+n[a]]=!0
for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Oe(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0))
null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function Qe(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(q(91))
return _e({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ke(e,t){var n=t.value
if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(q(92))
if(Ve(n)){if(1<n.length)throw Error(q(93))
n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:Oe(n)}}function qe(e,t){var n=Oe(t.value),r=Oe(t.defaultValue)
null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function Ye(e){var t=e.textContent
t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function Xe(e){switch(e){case"svg":return"http://www.w3.org/2000/svg"
case"math":return"http://www.w3.org/1998/Math/MathML"
default:return"http://www.w3.org/1999/xhtml"}}function Je(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?Xe(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var Ge,Ze,et=(Ze=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t
else{for((Ge=Ge||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ge.firstChild;e.firstChild;)e.removeChild(e.firstChild)
for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return Ze(e,t)}))}:Ze)
function tt(e,t){if(t){var n=e.firstChild
if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var nt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rt=["Webkit","ms","Moz","O"]
function at(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||nt.hasOwnProperty(e)&&nt[e]?(""+t).trim():t+"px"}function lt(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=at(n,t[n],r)
"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(nt).forEach((function(e){rt.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),nt[t]=nt[e]}))}))
var ot=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0})
function it(e,t){if(t){if(ot[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(q(137,e))
if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(q(60))
if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(q(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(q(62))}}function ut(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is
switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1
default:return!0}}var st=null
function ct(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ft=null,dt=null,pt=null
function ht(e){if(e=ul(e)){if("function"!=typeof ft)throw Error(q(280))
var t=e.stateNode
t&&(t=cl(t),ft(e.stateNode,e.type,t))}}function mt(e){dt?pt?pt.push(e):pt=[e]:dt=e}function vt(){if(dt){var e=dt,t=pt
if(pt=dt=null,ht(e),t)for(e=0;e<t.length;e++)ht(t[e])}}function gt(e,t){return e(t)}function yt(){}var bt=!1
function wt(e,t,n){if(bt)return e(t,n)
bt=!0
try{return gt(e,t,n)}finally{bt=!1,(null!==dt||null!==pt)&&(yt(),vt())}}function kt(e,t){var n=e.stateNode
if(null===n)return null
var r=cl(n)
if(null===r)return null
n=r[t]
e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r
break e
default:e=!1}if(e)return null
if(n&&"function"!=typeof n)throw Error(q(231,t,typeof n))
return n}var St=!1
if(Z)try{var xt={}
Object.defineProperty(xt,"passive",{get:function(){St=!0}}),window.addEventListener("test",xt,xt),window.removeEventListener("test",xt,xt)}catch(Ze){St=!1}function Et(e,t,n,r,a,l,o,i,u){var s=Array.prototype.slice.call(arguments,3)
try{t.apply(n,s)}catch(c){this.onError(c)}}var Ct=!1,_t=null,Pt=!1,Nt=null,Tt={onError:function(e){Ct=!0,_t=e}}
function Lt(e,t,n,r,a,l,o,i,u){Ct=!1,_t=null,Et.apply(Tt,arguments)}function Rt(e){var t=e,n=e
if(e.alternate)for(;t.return;)t=t.return
else{e=t
do{!!(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function zt(e){if(13===e.tag){var t=e.memoizedState
if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Ot(e){if(Rt(e)!==e)throw Error(q(188))}function Mt(e){return null!==(e=function(e){var t=e.alternate
if(!t){if(null===(t=Rt(e)))throw Error(q(188))
return t!==e?null:e}for(var n=e,r=t;;){var a=n.return
if(null===a)break
var l=a.alternate
if(null===l){if(null!==(r=a.return)){n=r
continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return Ot(a),e
if(l===r)return Ot(a),t
l=l.sibling}throw Error(q(188))}if(n.return!==r.return)n=a,r=l
else{for(var o=!1,i=a.child;i;){if(i===n){o=!0,n=a,r=l
break}if(i===r){o=!0,r=a,n=l
break}i=i.sibling}if(!o){for(i=l.child;i;){if(i===n){o=!0,n=l,r=a
break}if(i===r){o=!0,r=l,n=a
break}i=i.sibling}if(!o)throw Error(q(189))}}if(n.alternate!==r)throw Error(q(190))}if(3!==n.tag)throw Error(q(188))
return n.stateNode.current===n?e:t}(e))?Ft(e):null}function Ft(e){if(5===e.tag||6===e.tag)return e
for(e=e.child;null!==e;){var t=Ft(e)
if(null!==t)return t
e=e.sibling}return null}var Dt=K.unstable_scheduleCallback,It=K.unstable_cancelCallback,$t=K.unstable_shouldYield,Ut=K.unstable_requestPaint,At=K.unstable_now,jt=K.unstable_getCurrentPriorityLevel,Bt=K.unstable_ImmediatePriority,Wt=K.unstable_UserBlockingPriority,Vt=K.unstable_NormalPriority,Ht=K.unstable_LowPriority,Qt=K.unstable_IdlePriority,Kt=null,qt=null
var Yt=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(Xt(e)/Jt|0)|0},Xt=Math.log,Jt=Math.LN2
var Gt=64,Zt=4194304
function en(e){switch(e&-e){case 1:return 1
case 2:return 2
case 4:return 4
case 8:return 8
case 16:return 16
case 32:return 32
case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e
case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e
case 134217728:return 134217728
case 268435456:return 268435456
case 536870912:return 536870912
case 1073741824:return 1073741824
default:return e}}function tn(e,t){var n=e.pendingLanes
if(0===n)return 0
var r=0,a=e.suspendedLanes,l=e.pingedLanes,o=268435455&n
if(0!==o){var i=o&~a
0!==i?r=en(i):0!==(l&=o)&&(r=en(l))}else 0!==(o=n&~a)?r=en(o):0!==l&&(r=en(l))
if(0===r)return 0
if(0!==t&&t!==r&&!(t&a)&&((a=r&-r)>=(l=t&-t)||16===a&&4194240&l))return t
if(4&r&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-Yt(t)),r|=e[n],t&=~a
return r}function nn(e,t){switch(e){case 1:case 2:case 4:return t+250
case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3
default:return-1}}function rn(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function an(){var e=Gt
return!(4194240&(Gt<<=1))&&(Gt=64),e}function ln(e){for(var t=[],n=0;31>n;n++)t.push(e)
return t}function on(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-Yt(t)]=n}function un(e,t){var n=e.entangledLanes|=t
for(e=e.entanglements;n;){var r=31-Yt(n),a=1<<r
a&t|e[r]&t&&(e[r]|=t),n&=~a}}var sn=0
function cn(e){return 1<(e&=-e)?4<e?268435455&e?16:536870912:4:1}var fn,dn,pn,hn,mn,vn=!1,gn=[],yn=null,bn=null,wn=null,kn=new Map,Sn=new Map,xn=[],En="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ")
function Cn(e,t){switch(e){case"focusin":case"focusout":yn=null
break
case"dragenter":case"dragleave":bn=null
break
case"mouseover":case"mouseout":wn=null
break
case"pointerover":case"pointerout":kn.delete(t.pointerId)
break
case"gotpointercapture":case"lostpointercapture":Sn.delete(t.pointerId)}}function _n(e,t,n,r,a,l){return null===e||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},null!==t&&(null!==(t=ul(t))&&dn(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Pn(e){var t=il(e.target)
if(null!==t){var n=Rt(t)
if(null!==n)if(13===(t=n.tag)){if(null!==(t=zt(n)))return e.blockedOn=t,void mn(e.priority,(function(){pn(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Nn(e){if(null!==e.blockedOn)return!1
for(var t=e.targetContainers;0<t.length;){var n=Un(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent)
if(null!==n)return null!==(t=ul(n))&&dn(t),e.blockedOn=n,!1
var r=new(n=e.nativeEvent).constructor(n.type,n)
st=r,n.target.dispatchEvent(r),st=null,t.shift()}return!0}function Tn(e,t,n){Nn(e)&&n.delete(t)}function Ln(){vn=!1,null!==yn&&Nn(yn)&&(yn=null),null!==bn&&Nn(bn)&&(bn=null),null!==wn&&Nn(wn)&&(wn=null),kn.forEach(Tn),Sn.forEach(Tn)}function Rn(e,t){e.blockedOn===t&&(e.blockedOn=null,vn||(vn=!0,K.unstable_scheduleCallback(K.unstable_NormalPriority,Ln)))}function zn(e){function t(t){return Rn(t,e)}if(0<gn.length){Rn(gn[0],e)
for(var n=1;n<gn.length;n++){var r=gn[n]
r.blockedOn===e&&(r.blockedOn=null)}}for(null!==yn&&Rn(yn,e),null!==bn&&Rn(bn,e),null!==wn&&Rn(wn,e),kn.forEach(t),Sn.forEach(t),n=0;n<xn.length;n++)(r=xn[n]).blockedOn===e&&(r.blockedOn=null)
for(;0<xn.length&&null===(n=xn[0]).blockedOn;)Pn(n),null===n.blockedOn&&xn.shift()}var On=se.ReactCurrentBatchConfig,Mn=!0
function Fn(e,t,n,r){var a=sn,l=On.transition
On.transition=null
try{sn=1,In(e,t,n,r)}finally{sn=a,On.transition=l}}function Dn(e,t,n,r){var a=sn,l=On.transition
On.transition=null
try{sn=4,In(e,t,n,r)}finally{sn=a,On.transition=l}}function In(e,t,n,r){if(Mn){var a=Un(e,t,n,r)
if(null===a)Oa(e,t,r,$n,n),Cn(e,r)
else if(function(e,t,n,r,a){switch(t){case"focusin":return yn=_n(yn,e,t,n,r,a),!0
case"dragenter":return bn=_n(bn,e,t,n,r,a),!0
case"mouseover":return wn=_n(wn,e,t,n,r,a),!0
case"pointerover":var l=a.pointerId
return kn.set(l,_n(kn.get(l)||null,e,t,n,r,a)),!0
case"gotpointercapture":return l=a.pointerId,Sn.set(l,_n(Sn.get(l)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation()
else if(Cn(e,r),4&t&&-1<En.indexOf(e)){for(;null!==a;){var l=ul(a)
if(null!==l&&fn(l),null===(l=Un(e,t,n,r))&&Oa(e,t,r,$n,n),l===a)break
a=l}null!==a&&r.stopPropagation()}else Oa(e,t,r,null,n)}}var $n=null
function Un(e,t,n,r){if($n=null,null!==(e=il(e=ct(r))))if(null===(t=Rt(e)))e=null
else if(13===(n=t.tag)){if(null!==(e=zt(t)))return e
e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null
e=null}else t!==e&&(e=null)
return $n=e,null}function An(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1
case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4
case"message":switch(jt()){case Bt:return 1
case Wt:return 4
case Vt:case Ht:return 16
case Qt:return 536870912
default:return 16}default:return 16}}var jn=null,Bn=null,Wn=null
function Vn(){if(Wn)return Wn
var e,t,n=Bn,r=n.length,a="value"in jn?jn.value:jn.textContent,l=a.length
for(e=0;e<r&&n[e]===a[e];e++);var o=r-e
for(t=1;t<=o&&n[r-t]===a[l-t];t++);return Wn=a.slice(e,1<t?1-t:void 0)}function Hn(e){var t=e.keyCode
return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Qn(){return!0}function Kn(){return!1}function qn(e){function t(t,n,r,a,l){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=l,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o])
return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?Qn:Kn,this.isPropagationStopped=Kn,this}return _e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0
var e=this.nativeEvent
e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Qn)},stopPropagation:function(){var e=this.nativeEvent
e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Qn)},persist:function(){},isPersistent:Qn}),t}var Yn,Xn,Jn,Gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zn=qn(Gn),er=_e({},Gn,{view:0,detail:0}),tr=qn(er),nr=_e({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jn&&(Jn&&"mousemove"===e.type?(Yn=e.screenX-Jn.screenX,Xn=e.screenY-Jn.screenY):Xn=Yn=0,Jn=e),Yn)},movementY:function(e){return"movementY"in e?e.movementY:Xn}}),rr=qn(nr),ar=qn(_e({},nr,{dataTransfer:0})),lr=qn(_e({},er,{relatedTarget:0})),or=qn(_e({},Gn,{animationName:0,elapsedTime:0,pseudoElement:0})),ir=_e({},Gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ur=qn(ir),sr=qn(_e({},Gn,{data:0})),cr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"}
function pr(e){var t=this.nativeEvent
return t.getModifierState?t.getModifierState(e):!!(e=dr[e])&&!!t[e]}function hr(){return pr}var mr=_e({},er,{key:function(e){if(e.key){var t=cr[e.key]||e.key
if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Hn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?fr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hr,charCode:function(e){return"keypress"===e.type?Hn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Hn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),vr=qn(mr),gr=qn(_e({},nr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),yr=qn(_e({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hr})),br=qn(_e({},Gn,{propertyName:0,elapsedTime:0,pseudoElement:0})),wr=_e({},nr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kr=qn(wr),Sr=[9,13,27,32],xr=Z&&"CompositionEvent"in window,Er=null
Z&&"documentMode"in document&&(Er=document.documentMode)
var Cr=Z&&"TextEvent"in window&&!Er,_r=Z&&(!xr||Er&&8<Er&&11>=Er),Pr=String.fromCharCode(32),Nr=!1
function Tr(e,t){switch(e){case"keyup":return-1!==Sr.indexOf(t.keyCode)
case"keydown":return 229!==t.keyCode
case"keypress":case"mousedown":case"focusout":return!0
default:return!1}}function Lr(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Rr=!1
var zr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0}
function Or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase()
return"input"===t?!!zr[e.type]:"textarea"===t}function Mr(e,t,n,r){mt(r),0<(t=Fa(t,"onChange")).length&&(n=new Zn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Fr=null,Dr=null
function Ir(e){Pa(e,0)}function $r(e){if(De(sl(e)))return e}function Ur(e,t){if("change"===e)return t}var Ar=!1
if(Z){var jr
if(Z){var Br="oninput"in document
if(!Br){var Wr=document.createElement("div")
Wr.setAttribute("oninput","return;"),Br="function"==typeof Wr.oninput}jr=Br}else jr=!1
Ar=jr&&(!document.documentMode||9<document.documentMode)}function Vr(){Fr&&(Fr.detachEvent("onpropertychange",Hr),Dr=Fr=null)}function Hr(e){if("value"===e.propertyName&&$r(Dr)){var t=[]
Mr(t,Dr,e,ct(e)),wt(Ir,t)}}function Qr(e,t,n){"focusin"===e?(Vr(),Dr=n,(Fr=t).attachEvent("onpropertychange",Hr)):"focusout"===e&&Vr()}function Kr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return $r(Dr)}function qr(e,t){if("click"===e)return $r(t)}function Yr(e,t){if("input"===e||"change"===e)return $r(t)}var Xr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t}
function Jr(e,t){if(Xr(e,t))return!0
if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1
var n=Object.keys(e),r=Object.keys(t)
if(n.length!==r.length)return!1
for(r=0;r<n.length;r++){var a=n[r]
if(!ee.call(t,a)||!Xr(e[a],t[a]))return!1}return!0}function Gr(e){for(;e&&e.firstChild;)e=e.firstChild
return e}function Zr(e,t){var n,r=Gr(e)
for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e}
e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling
break e}r=r.parentNode}r=void 0}r=Gr(r)}}function ea(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?ea(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function ta(){for(var e=window,t=Ie();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break
t=Ie((e=t.contentWindow).document)}return t}function na(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase()
return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function ra(e){var t=ta(),n=e.focusedElem,r=e.selectionRange
if(t!==n&&n&&n.ownerDocument&&ea(n.ownerDocument.documentElement,n)){if(null!==r&&na(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length)
else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection()
var a=n.textContent.length,l=Math.min(r.start,a)
r=void 0===r.end?l:Math.min(r.end,a),!e.extend&&l>r&&(a=r,r=l,l=a),a=Zr(n,l)
var o=Zr(n,r)
a&&o&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop})
for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var aa=Z&&"documentMode"in document&&11>=document.documentMode,la=null,oa=null,ia=null,ua=!1
function sa(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument
ua||null==la||la!==Ie(r)||("selectionStart"in(r=la)&&na(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},ia&&Jr(ia,r)||(ia=r,0<(r=Fa(oa,"onSelect")).length&&(t=new Zn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=la)))}function ca(e,t){var n={}
return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fa={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionend:ca("Transition","TransitionEnd")},da={},pa={}
function ha(e){if(da[e])return da[e]
if(!fa[e])return e
var t,n=fa[e]
for(t in n)if(n.hasOwnProperty(t)&&t in pa)return da[e]=n[t]
return e}Z&&(pa=document.createElement("div").style,"AnimationEvent"in window||(delete fa.animationend.animation,delete fa.animationiteration.animation,delete fa.animationstart.animation),"TransitionEvent"in window||delete fa.transitionend.transition)
var ma=ha("animationend"),va=ha("animationiteration"),ga=ha("animationstart"),ya=ha("transitionend"),ba=new Map,wa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ")
function ka(e,t){ba.set(e,t),J(t,[e])}for(var Sa=0;Sa<wa.length;Sa++){var xa=wa[Sa]
ka(xa.toLowerCase(),"on"+(xa[0].toUpperCase()+xa.slice(1)))}ka(ma,"onAnimationEnd"),ka(va,"onAnimationIteration"),ka(ga,"onAnimationStart"),ka("dblclick","onDoubleClick"),ka("focusin","onFocus"),ka("focusout","onBlur"),ka(ya,"onTransitionEnd"),G("onMouseEnter",["mouseout","mouseover"]),G("onMouseLeave",["mouseout","mouseover"]),G("onPointerEnter",["pointerout","pointerover"]),G("onPointerLeave",["pointerout","pointerover"]),J("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),J("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),J("onBeforeInput",["compositionend","keypress","textInput","paste"]),J("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "))
var Ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ca=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ea))
function _a(e,t,n){var r=e.type||"unknown-event"
e.currentTarget=n,function(e,t,n,r,a,l,o,i,u){if(Lt.apply(this,arguments),Ct){if(!Ct)throw Error(q(198))
var s=_t
Ct=!1,_t=null,Pt||(Pt=!0,Nt=s)}}(r,t,void 0,e),e.currentTarget=null}function Pa(e,t){t=!!(4&t)
for(var n=0;n<e.length;n++){var r=e[n],a=r.event
r=r.listeners
e:{var l=void 0
if(t)for(var o=r.length-1;0<=o;o--){var i=r[o],u=i.instance,s=i.currentTarget
if(i=i.listener,u!==l&&a.isPropagationStopped())break e
_a(a,i,s),l=u}else for(o=0;o<r.length;o++){if(u=(i=r[o]).instance,s=i.currentTarget,i=i.listener,u!==l&&a.isPropagationStopped())break e
_a(a,i,s),l=u}}}if(Pt)throw e=Nt,Pt=!1,Nt=null,e}function Na(e,t){var n=t[al]
void 0===n&&(n=t[al]=new Set)
var r=e+"__bubble"
n.has(r)||(za(t,e,2,!1),n.add(r))}function Ta(e,t,n){var r=0
t&&(r|=4),za(n,e,r,t)}var La="_reactListening"+Math.random().toString(36).slice(2)
function Ra(e){if(!e[La]){e[La]=!0,Y.forEach((function(t){"selectionchange"!==t&&(Ca.has(t)||Ta(t,!1,e),Ta(t,!0,e))}))
var t=9===e.nodeType?e:e.ownerDocument
null===t||t[La]||(t[La]=!0,Ta("selectionchange",!1,t))}}function za(e,t,n,r){switch(An(t)){case 1:var a=Fn
break
case 4:a=Dn
break
default:a=In}n=a.bind(null,t,n,e),a=void 0,!St||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Oa(e,t,n,r,a){var l=r
if(!(1&t||2&t||null===r))e:for(;;){if(null===r)return
var o=r.tag
if(3===o||4===o){var i=r.stateNode.containerInfo
if(i===a||8===i.nodeType&&i.parentNode===a)break
if(4===o)for(o=r.return;null!==o;){var u=o.tag
if((3===u||4===u)&&((u=o.stateNode.containerInfo)===a||8===u.nodeType&&u.parentNode===a))return
o=o.return}for(;null!==i;){if(null===(o=il(i)))return
if(5===(u=o.tag)||6===u){r=l=o
continue e}i=i.parentNode}}r=r.return}wt((function(){var r=l,a=ct(n),o=[]
e:{var i=ba.get(e)
if(void 0!==i){var u=Zn,s=e
switch(e){case"keypress":if(0===Hn(n))break e
case"keydown":case"keyup":u=vr
break
case"focusin":s="focus",u=lr
break
case"focusout":s="blur",u=lr
break
case"beforeblur":case"afterblur":u=lr
break
case"click":if(2===n.button)break e
case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":u=rr
break
case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":u=ar
break
case"touchcancel":case"touchend":case"touchmove":case"touchstart":u=yr
break
case ma:case va:case ga:u=or
break
case ya:u=br
break
case"scroll":u=tr
break
case"wheel":u=kr
break
case"copy":case"cut":case"paste":u=ur
break
case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":u=gr}var c=!!(4&t),f=!c&&"scroll"===e,d=c?null!==i?i+"Capture":null:i
c=[]
for(var p,h=r;null!==h;){var m=(p=h).stateNode
if(5===p.tag&&null!==m&&(p=m,null!==d&&(null!=(m=kt(h,d))&&c.push(Ma(h,m,p)))),f)break
h=h.return}0<c.length&&(i=new u(i,s,null,n,a),o.push({event:i,listeners:c}))}}if(!(7&t)){if(u="mouseout"===e||"pointerout"===e,(!(i="mouseover"===e||"pointerover"===e)||n===st||!(s=n.relatedTarget||n.fromElement)||!il(s)&&!s[rl])&&(u||i)&&(i=a.window===a?a:(i=a.ownerDocument)?i.defaultView||i.parentWindow:window,u?(u=r,null!==(s=(s=n.relatedTarget||n.toElement)?il(s):null)&&(s!==(f=Rt(s))||5!==s.tag&&6!==s.tag)&&(s=null)):(u=null,s=r),u!==s)){if(c=rr,m="onMouseLeave",d="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=gr,m="onPointerLeave",d="onPointerEnter",h="pointer"),f=null==u?i:sl(u),p=null==s?i:sl(s),(i=new c(m,h+"leave",u,n,a)).target=f,i.relatedTarget=p,m=null,il(a)===r&&((c=new c(d,h+"enter",s,n,a)).target=p,c.relatedTarget=f,m=c),f=m,u&&s)e:{for(d=s,h=0,p=c=u;p;p=Da(p))h++
for(p=0,m=d;m;m=Da(m))p++
for(;0<h-p;)c=Da(c),h--
for(;0<p-h;)d=Da(d),p--
for(;h--;){if(c===d||null!==d&&c===d.alternate)break e
c=Da(c),d=Da(d)}c=null}else c=null
null!==u&&Ia(o,i,u,c,!1),null!==s&&null!==f&&Ia(o,f,s,c,!0)}if("select"===(u=(i=r?sl(r):window).nodeName&&i.nodeName.toLowerCase())||"input"===u&&"file"===i.type)var v=Ur
else if(Or(i))if(Ar)v=Yr
else{v=Kr
var g=Qr}else(u=i.nodeName)&&"input"===u.toLowerCase()&&("checkbox"===i.type||"radio"===i.type)&&(v=qr)
switch(v&&(v=v(e,r))?Mr(o,v,n,a):(g&&g(e,i,r),"focusout"===e&&(g=i._wrapperState)&&g.controlled&&"number"===i.type&&We(i,"number",i.value)),g=r?sl(r):window,e){case"focusin":(Or(g)||"true"===g.contentEditable)&&(la=g,oa=r,ia=null)
break
case"focusout":ia=oa=la=null
break
case"mousedown":ua=!0
break
case"contextmenu":case"mouseup":case"dragend":ua=!1,sa(o,n,a)
break
case"selectionchange":if(aa)break
case"keydown":case"keyup":sa(o,n,a)}var y
if(xr)e:{switch(e){case"compositionstart":var b="onCompositionStart"
break e
case"compositionend":b="onCompositionEnd"
break e
case"compositionupdate":b="onCompositionUpdate"
break e}b=void 0}else Rr?Tr(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart")
b&&(_r&&"ko"!==n.locale&&(Rr||"onCompositionStart"!==b?"onCompositionEnd"===b&&Rr&&(y=Vn()):(Bn="value"in(jn=a)?jn.value:jn.textContent,Rr=!0)),0<(g=Fa(r,b)).length&&(b=new sr(b,e,null,n,a),o.push({event:b,listeners:g}),y?b.data=y:null!==(y=Lr(n))&&(b.data=y))),(y=Cr?function(e,t){switch(e){case"compositionend":return Lr(t)
case"keypress":return 32!==t.which?null:(Nr=!0,Pr)
case"textInput":return(e=t.data)===Pr&&Nr?null:e
default:return null}}(e,n):function(e,t){if(Rr)return"compositionend"===e||!xr&&Tr(e,t)?(e=Vn(),Wn=Bn=jn=null,Rr=!1,e):null
switch(e){case"paste":default:return null
case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char
if(t.which)return String.fromCharCode(t.which)}return null
case"compositionend":return _r&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Fa(r,"onBeforeInput")).length&&(a=new sr("onBeforeInput","beforeinput",null,n,a),o.push({event:a,listeners:r}),a.data=y))}Pa(o,t)}))}function Ma(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fa(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,l=a.stateNode
5===a.tag&&null!==l&&(a=l,null!=(l=kt(e,n))&&r.unshift(Ma(e,l,a)),null!=(l=kt(e,t))&&r.push(Ma(e,l,a))),e=e.return}return r}function Da(e){if(null===e)return null
do{e=e.return}while(e&&5!==e.tag)
return e||null}function Ia(e,t,n,r,a){for(var l=t._reactName,o=[];null!==n&&n!==r;){var i=n,u=i.alternate,s=i.stateNode
if(null!==u&&u===r)break
5===i.tag&&null!==s&&(i=s,a?null!=(u=kt(n,l))&&o.unshift(Ma(n,u,i)):a||null!=(u=kt(n,l))&&o.push(Ma(n,u,i))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var $a=/\r\n?/g,Ua=/\u0000|\uFFFD/g
function Aa(e){return("string"==typeof e?e:""+e).replace($a,"\n").replace(Ua,"")}function ja(e,t,n){if(t=Aa(t),Aa(e)!==t&&n)throw Error(q(425))}function Ba(){}var Wa=null,Va=null
function Ha(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Qa="function"==typeof setTimeout?setTimeout:void 0,Ka="function"==typeof clearTimeout?clearTimeout:void 0,qa="function"==typeof Promise?Promise:void 0,Ya="function"==typeof queueMicrotask?queueMicrotask:void 0!==qa?function(e){return qa.resolve(null).then(e).catch(Xa)}:Qa
function Xa(e){setTimeout((function(){throw e}))}function Ja(e,t){var n=t,r=0
do{var a=n.nextSibling
if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void zn(t)
r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++
n=a}while(n)
zn(t)}function Ga(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType
if(1===t||3===t)break
if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break
if("/$"===t)return null}}return e}function Za(e){e=e.previousSibling
for(var t=0;e;){if(8===e.nodeType){var n=e.data
if("$"===n||"$!"===n||"$?"===n){if(0===t)return e
t--}else"/$"===n&&t++}e=e.previousSibling}return null}var el=Math.random().toString(36).slice(2),tl="__reactFiber$"+el,nl="__reactProps$"+el,rl="__reactContainer$"+el,al="__reactEvents$"+el,ll="__reactListeners$"+el,ol="__reactHandles$"+el
function il(e){var t=e[tl]
if(t)return t
for(var n=e.parentNode;n;){if(t=n[rl]||n[tl]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Za(e);null!==e;){if(n=e[tl])return n
e=Za(e)}return t}n=(e=n).parentNode}return null}function ul(e){return!(e=e[tl]||e[rl])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function sl(e){if(5===e.tag||6===e.tag)return e.stateNode
throw Error(q(33))}function cl(e){return e[nl]||null}var fl=[],dl=-1
function pl(e){return{current:e}}function hl(e){0>dl||(e.current=fl[dl],fl[dl]=null,dl--)}function ml(e,t){dl++,fl[dl]=e.current,e.current=t}var vl={},gl=pl(vl),yl=pl(!1),bl=vl
function wl(e,t){var n=e.type.contextTypes
if(!n)return vl
var r=e.stateNode
if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext
var a,l={}
for(a in n)l[a]=t[a]
return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function kl(e){return null!=(e=e.childContextTypes)}function Sl(){hl(yl),hl(gl)}function xl(e,t,n){if(gl.current!==vl)throw Error(q(168))
ml(gl,t),ml(yl,n)}function El(e,t,n){var r=e.stateNode
if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n
for(var a in r=r.getChildContext())if(!(a in t))throw Error(q(108,ze(e)||"Unknown",a))
return _e({},n,r)}function Cl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vl,bl=gl.current,ml(gl,e),ml(yl,yl.current),!0}function _l(e,t,n){var r=e.stateNode
if(!r)throw Error(q(169))
n?(e=El(e,t,bl),r.__reactInternalMemoizedMergedChildContext=e,hl(yl),hl(gl),ml(gl,e)):hl(yl),ml(yl,n)}var Pl=null,Nl=!1,Tl=!1
function Ll(e){null===Pl?Pl=[e]:Pl.push(e)}function Rl(){if(!Tl&&null!==Pl){Tl=!0
var e=0,t=sn
try{var n=Pl
for(sn=1;e<n.length;e++){var r=n[e]
do{r=r(!0)}while(null!==r)}Pl=null,Nl=!1}catch(a){throw null!==Pl&&(Pl=Pl.slice(e+1)),Dt(Bt,Rl),a}finally{sn=t,Tl=!1}}return null}var zl=[],Ol=0,Ml=null,Fl=0,Dl=[],Il=0,$l=null,Ul=1,Al=""
function jl(e,t){zl[Ol++]=Fl,zl[Ol++]=Ml,Ml=e,Fl=t}function Bl(e,t,n){Dl[Il++]=Ul,Dl[Il++]=Al,Dl[Il++]=$l,$l=e
var r=Ul
e=Al
var a=32-Yt(r)-1
r&=~(1<<a),n+=1
var l=32-Yt(t)+a
if(30<l){var o=a-a%5
l=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Ul=1<<32-Yt(t)+a|n<<a|r,Al=l+e}else Ul=1<<l|n<<a|r,Al=e}function Wl(e){null!==e.return&&(jl(e,1),Bl(e,1,0))}function Vl(e){for(;e===Ml;)Ml=zl[--Ol],zl[Ol]=null,Fl=zl[--Ol],zl[Ol]=null
for(;e===$l;)$l=Dl[--Il],Dl[Il]=null,Al=Dl[--Il],Dl[Il]=null,Ul=Dl[--Il],Dl[Il]=null}var Hl=null,Ql=null,Kl=!1,ql=null
function Yl(e,t){var n=bc(5,null,null,0)
n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function Xl(e,t){switch(e.tag){case 5:var n=e.type
return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,Hl=e,Ql=Ga(t.firstChild),!0)
case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,Hl=e,Ql=null,!0)
case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==$l?{id:Ul,overflow:Al}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=bc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,Hl=e,Ql=null,!0)
default:return!1}}function Jl(e){return!(!(1&e.mode)||128&e.flags)}function Gl(e){if(Kl){var t=Ql
if(t){var n=t
if(!Xl(e,t)){if(Jl(e))throw Error(q(418))
t=Ga(n.nextSibling)
var r=Hl
t&&Xl(e,t)?Yl(r,n):(e.flags=-4097&e.flags|2,Kl=!1,Hl=e)}}else{if(Jl(e))throw Error(q(418))
e.flags=-4097&e.flags|2,Kl=!1,Hl=e}}}function Zl(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return
Hl=e}function eo(e){if(e!==Hl)return!1
if(!Kl)return Zl(e),Kl=!0,!1
var t
if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!Ha(e.type,e.memoizedProps)),t&&(t=Ql)){if(Jl(e))throw to(),Error(q(418))
for(;t;)Yl(e,t),t=Ga(t.nextSibling)}if(Zl(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(q(317))
e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data
if("/$"===n){if(0===t){Ql=Ga(e.nextSibling)
break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}Ql=null}}else Ql=Hl?Ga(e.stateNode.nextSibling):null
return!0}function to(){for(var e=Ql;e;)e=Ga(e.nextSibling)}function no(){Ql=Hl=null,Kl=!1}function ro(e){null===ql?ql=[e]:ql.push(e)}var ao=se.ReactCurrentBatchConfig
function lo(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(q(309))
var r=n.stateNode}if(!r)throw Error(q(147,e))
var a=r,l=""+e
return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===l?t.ref:((t=function(e){var t=a.refs
null===e?delete t[l]:t[l]=e})._stringRef=l,t)}if("string"!=typeof e)throw Error(q(284))
if(!n._owner)throw Error(q(290,e))}return e}function oo(e,t){throw e=Object.prototype.toString.call(t),Error(q(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function io(e){return(0,e._init)(e._payload)}function uo(e){function t(t,n){if(e){var r=t.deletions
null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null
for(;null!==r;)t(n,r),r=r.sibling
return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling
return e}function a(e,t){return(e=kc(e,t)).index=0,e.sibling=null,e}function l(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function o(t){return e&&null===t.alternate&&(t.flags|=2),t}function i(e,t,n,r){return null===t||6!==t.tag?((t=Cc(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var l=n.type
return l===de?c(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===l||"object"==typeof l&&null!==l&&l.$$typeof===ke&&io(l)===t.type)?((r=a(t,n.props)).ref=lo(e,t,n),r.return=e,r):((r=Sc(n.type,n.key,n.props,null,e.mode,r)).ref=lo(e,t,n),r.return=e,r)}function s(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=_c(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function c(e,t,n,r,l){return null===t||7!==t.tag?((t=xc(n,e.mode,r,l)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Cc(""+t,e.mode,n)).return=e,t
if("object"==typeof t&&null!==t){switch(t.$$typeof){case ce:return(n=Sc(t.type,t.key,t.props,null,e.mode,n)).ref=lo(e,null,t),n.return=e,n
case fe:return(t=_c(t,e.mode,n)).return=e,t
case ke:return f(e,(0,t._init)(t._payload),n)}if(Ve(t)||Ee(t))return(t=xc(t,e.mode,n,null)).return=e,t
oo(e,t)}return null}function d(e,t,n,r){var a=null!==t?t.key:null
if("string"==typeof n&&""!==n||"number"==typeof n)return null!==a?null:i(e,t,""+n,r)
if("object"==typeof n&&null!==n){switch(n.$$typeof){case ce:return n.key===a?u(e,t,n,r):null
case fe:return n.key===a?s(e,t,n,r):null
case ke:return d(e,t,(a=n._init)(n._payload),r)}if(Ve(n)||Ee(n))return null!==a?null:c(e,t,n,r,null)
oo(e,n)}return null}function p(e,t,n,r,a){if("string"==typeof r&&""!==r||"number"==typeof r)return i(t,e=e.get(n)||null,""+r,a)
if("object"==typeof r&&null!==r){switch(r.$$typeof){case ce:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a)
case fe:return s(t,e=e.get(null===r.key?n:r.key)||null,r,a)
case ke:return p(e,t,n,(0,r._init)(r._payload),a)}if(Ve(r)||Ee(r))return c(t,e=e.get(n)||null,r,a,null)
oo(t,r)}return null}return function i(u,s,c,h){if("object"==typeof c&&null!==c&&c.type===de&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case ce:e:{for(var m=c.key,v=s;null!==v;){if(v.key===m){if((m=c.type)===de){if(7===v.tag){n(u,v.sibling),(s=a(v,c.props.children)).return=u,u=s
break e}}else if(v.elementType===m||"object"==typeof m&&null!==m&&m.$$typeof===ke&&io(m)===v.type){n(u,v.sibling),(s=a(v,c.props)).ref=lo(u,v,c),s.return=u,u=s
break e}n(u,v)
break}t(u,v),v=v.sibling}c.type===de?((s=xc(c.props.children,u.mode,h,c.key)).return=u,u=s):((h=Sc(c.type,c.key,c.props,null,u.mode,h)).ref=lo(u,s,c),h.return=u,u=h)}return o(u)
case fe:e:{for(v=c.key;null!==s;){if(s.key===v){if(4===s.tag&&s.stateNode.containerInfo===c.containerInfo&&s.stateNode.implementation===c.implementation){n(u,s.sibling),(s=a(s,c.children||[])).return=u,u=s
break e}n(u,s)
break}t(u,s),s=s.sibling}(s=_c(c,u.mode,h)).return=u,u=s}return o(u)
case ke:return i(u,s,(v=c._init)(c._payload),h)}if(Ve(c))return function(a,o,i,u){for(var s=null,c=null,h=o,m=o=0,v=null;null!==h&&m<i.length;m++){h.index>m?(v=h,h=null):v=h.sibling
var g=d(a,h,i[m],u)
if(null===g){null===h&&(h=v)
break}e&&h&&null===g.alternate&&t(a,h),o=l(g,o,m),null===c?s=g:c.sibling=g,c=g,h=v}if(m===i.length)return n(a,h),Kl&&jl(a,m),s
if(null===h){for(;m<i.length;m++)null!==(h=f(a,i[m],u))&&(o=l(h,o,m),null===c?s=h:c.sibling=h,c=h)
return Kl&&jl(a,m),s}for(h=r(a,h);m<i.length;m++)null!==(v=p(h,a,m,i[m],u))&&(e&&null!==v.alternate&&h.delete(null===v.key?m:v.key),o=l(v,o,m),null===c?s=v:c.sibling=v,c=v)
return e&&h.forEach((function(e){return t(a,e)})),Kl&&jl(a,m),s}(u,s,c,h)
if(Ee(c))return function(a,o,i,u){var s=Ee(i)
if("function"!=typeof s)throw Error(q(150))
if(null==(i=s.call(i)))throw Error(q(151))
for(var c=s=null,h=o,m=o=0,v=null,g=i.next();null!==h&&!g.done;m++,g=i.next()){h.index>m?(v=h,h=null):v=h.sibling
var y=d(a,h,g.value,u)
if(null===y){null===h&&(h=v)
break}e&&h&&null===y.alternate&&t(a,h),o=l(y,o,m),null===c?s=y:c.sibling=y,c=y,h=v}if(g.done)return n(a,h),Kl&&jl(a,m),s
if(null===h){for(;!g.done;m++,g=i.next())null!==(g=f(a,g.value,u))&&(o=l(g,o,m),null===c?s=g:c.sibling=g,c=g)
return Kl&&jl(a,m),s}for(h=r(a,h);!g.done;m++,g=i.next())null!==(g=p(h,a,m,g.value,u))&&(e&&null!==g.alternate&&h.delete(null===g.key?m:g.key),o=l(g,o,m),null===c?s=g:c.sibling=g,c=g)
return e&&h.forEach((function(e){return t(a,e)})),Kl&&jl(a,m),s}(u,s,c,h)
oo(u,c)}return"string"==typeof c&&""!==c||"number"==typeof c?(c=""+c,null!==s&&6===s.tag?(n(u,s.sibling),(s=a(s,c)).return=u,u=s):(n(u,s),(s=Cc(c,u.mode,h)).return=u,u=s),o(u)):n(u,s)}}var so=uo(!0),co=uo(!1),fo=pl(null),po=null,ho=null,mo=null
function vo(){mo=ho=po=null}function go(e){var t=fo.current
hl(fo),e._currentValue=t}function yo(e,t,n){for(;null!==e;){var r=e.alternate
if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break
e=e.return}}function bo(e,t){po=e,mo=ho=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(!!(e.lanes&t)&&(iu=!0),e.firstContext=null)}function wo(e){var t=e._currentValue
if(mo!==e)if(e={context:e,memoizedValue:t,next:null},null===ho){if(null===po)throw Error(q(308))
ho=e,po.dependencies={lanes:0,firstContext:e}}else ho=ho.next=e
return t}var ko=null
function So(e){null===ko?ko=[e]:ko.push(e)}function xo(e,t,n,r){var a=t.interleaved
return null===a?(n.next=n,So(t)):(n.next=a.next,a.next=n),t.interleaved=n,Eo(e,r)}function Eo(e,t){e.lanes|=t
var n=e.alternate
for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return
return 3===n.tag?n.stateNode:null}var Co=!1
function _o(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Po(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function No(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function To(e,t,n){var r=e.updateQueue
if(null===r)return null
if(r=r.shared,2&vs){var a=r.pending
return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Eo(e,n)}return null===(a=r.interleaved)?(t.next=t,So(r)):(t.next=a.next,a.next=t),r.interleaved=t,Eo(e,n)}function Lo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,4194240&n)){var r=t.lanes
n|=r&=e.pendingLanes,t.lanes=n,un(e,n)}}function Ro(e,t){var n=e.updateQueue,r=e.alternate
if(null!==r&&n===(r=r.updateQueue)){var a=null,l=null
if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null}
null===l?a=l=o:l=l.next=o,n=n.next}while(null!==n)
null===l?a=l=t:l=l.next=t}else a=l=t
return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function zo(e,t,n,r){var a=e.updateQueue
Co=!1
var l=a.firstBaseUpdate,o=a.lastBaseUpdate,i=a.shared.pending
if(null!==i){a.shared.pending=null
var u=i,s=u.next
u.next=null,null===o?l=s:o.next=s,o=u
var c=e.alternate
null!==c&&((i=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===i?c.firstBaseUpdate=s:i.next=s,c.lastBaseUpdate=u))}if(null!==l){var f=a.baseState
for(o=0,c=s=u=null,i=l;;){var d=i.lane,p=i.eventTime
if((r&d)===d){null!==c&&(c=c.next={eventTime:p,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null})
e:{var h=e,m=i
switch(d=t,p=n,m.tag){case 1:if("function"==typeof(h=m.payload)){f=h.call(p,f,d)
break e}f=h
break e
case 3:h.flags=-65537&h.flags|128
case 0:if(null==(d="function"==typeof(h=m.payload)?h.call(p,f,d):h))break e
f=_e({},f,d)
break e
case 2:Co=!0}}null!==i.callback&&0!==i.lane&&(e.flags|=64,null===(d=a.effects)?a.effects=[i]:d.push(i))}else p={eventTime:p,lane:d,tag:i.tag,payload:i.payload,callback:i.callback,next:null},null===c?(s=c=p,u=f):c=c.next=p,o|=d
if(null===(i=i.next)){if(null===(i=a.shared.pending))break
i=(d=i).next,d.next=null,a.lastBaseUpdate=d,a.shared.pending=null}}if(null===c&&(u=f),a.baseState=u,a.firstBaseUpdate=s,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t
do{o|=a.lane,a=a.next}while(a!==t)}else null===l&&(a.shared.lanes=0)
Es|=o,e.lanes=o,e.memoizedState=f}}function Oo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback
if(null!==a){if(r.callback=null,r=n,"function"!=typeof a)throw Error(q(191,a))
a.call(r)}}}var Mo={},Fo=pl(Mo),Do=pl(Mo),Io=pl(Mo)
function $o(e){if(e===Mo)throw Error(q(174))
return e}function Uo(e,t){switch(ml(Io,t),ml(Do,e),ml(Fo,Mo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Je(null,"")
break
default:t=Je(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}hl(Fo),ml(Fo,t)}function Ao(){hl(Fo),hl(Do),hl(Io)}function jo(e){$o(Io.current)
var t=$o(Fo.current),n=Je(t,e.type)
t!==n&&(ml(Do,e),ml(Fo,n))}function Bo(e){Do.current===e&&(hl(Fo),hl(Do))}var Wo=pl(0)
function Vo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState
if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(128&t.flags)return t}else if(null!==t.child){t.child.return=t,t=t.child
continue}if(t===e)break
for(;null===t.sibling;){if(null===t.return||t.return===e)return null
t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ho=[]
function Qo(){for(var e=0;e<Ho.length;e++)Ho[e]._workInProgressVersionPrimary=null
Ho.length=0}var Ko=se.ReactCurrentDispatcher,qo=se.ReactCurrentBatchConfig,Yo=0,Xo=null,Jo=null,Go=null,Zo=!1,ei=!1,ti=0,ni=0
function ri(){throw Error(q(321))}function ai(e,t){if(null===t)return!1
for(var n=0;n<t.length&&n<e.length;n++)if(!Xr(e[n],t[n]))return!1
return!0}function li(e,t,n,r,a,l){if(Yo=l,Xo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ko.current=null===e||null===e.memoizedState?Bi:Wi,e=n(r,a),ei){l=0
do{if(ei=!1,ti=0,25<=l)throw Error(q(301))
l+=1,Go=Jo=null,t.updateQueue=null,Ko.current=Vi,e=n(r,a)}while(ei)}if(Ko.current=ji,t=null!==Jo&&null!==Jo.next,Yo=0,Go=Jo=Xo=null,Zo=!1,t)throw Error(q(300))
return e}function oi(){var e=0!==ti
return ti=0,e}function ii(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null}
return null===Go?Xo.memoizedState=Go=e:Go=Go.next=e,Go}function ui(){if(null===Jo){var e=Xo.alternate
e=null!==e?e.memoizedState:null}else e=Jo.next
var t=null===Go?Xo.memoizedState:Go.next
if(null!==t)Go=t,Jo=e
else{if(null===e)throw Error(q(310))
e={memoizedState:(Jo=e).memoizedState,baseState:Jo.baseState,baseQueue:Jo.baseQueue,queue:Jo.queue,next:null},null===Go?Xo.memoizedState=Go=e:Go=Go.next=e}return Go}function si(e,t){return"function"==typeof t?t(e):t}function ci(e){var t=ui(),n=t.queue
if(null===n)throw Error(q(311))
n.lastRenderedReducer=e
var r=Jo,a=r.baseQueue,l=n.pending
if(null!==l){if(null!==a){var o=a.next
a.next=l.next,l.next=o}r.baseQueue=a=l,n.pending=null}if(null!==a){l=a.next,r=r.baseState
var i=o=null,u=null,s=l
do{var c=s.lane
if((Yo&c)===c)null!==u&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action)
else{var f={lane:c,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}
null===u?(i=u=f,o=r):u=u.next=f,Xo.lanes|=c,Es|=c}s=s.next}while(null!==s&&s!==l)
null===u?o=r:u.next=i,Xr(r,t.memoizedState)||(iu=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e
do{l=a.lane,Xo.lanes|=l,Es|=l,a=a.next}while(a!==e)}else null===a&&(n.lanes=0)
return[t.memoizedState,n.dispatch]}function fi(e){var t=ui(),n=t.queue
if(null===n)throw Error(q(311))
n.lastRenderedReducer=e
var r=n.dispatch,a=n.pending,l=t.memoizedState
if(null!==a){n.pending=null
var o=a=a.next
do{l=e(l,o.action),o=o.next}while(o!==a)
Xr(l,t.memoizedState)||(iu=!0),t.memoizedState=l,null===t.baseQueue&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function di(){}function pi(e,t){var n=Xo,r=ui(),a=t(),l=!Xr(r.memoizedState,a)
if(l&&(r.memoizedState=a,iu=!0),r=r.queue,Ci(vi.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||null!==Go&&1&Go.memoizedState.tag){if(n.flags|=2048,wi(9,mi.bind(null,n,r,a,t),void 0,null),null===gs)throw Error(q(349))
30&Yo||hi(n,t,a)}return a}function hi(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=Xo.updateQueue)?(t={lastEffect:null,stores:null},Xo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function mi(e,t,n,r){t.value=n,t.getSnapshot=r,gi(t)&&yi(e)}function vi(e,t,n){return n((function(){gi(t)&&yi(e)}))}function gi(e){var t=e.getSnapshot
e=e.value
try{var n=t()
return!Xr(e,n)}catch(r){return!0}}function yi(e){var t=Eo(e,1)
null!==t&&Vs(t,e,1,-1)}function bi(e){var t=ii()
return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:si,lastRenderedState:e},t.queue=e,e=e.dispatch=Ii.bind(null,Xo,e),[t.memoizedState,e]}function wi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=Xo.updateQueue)?(t={lastEffect:null,stores:null},Xo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ki(){return ui().memoizedState}function Si(e,t,n,r){var a=ii()
Xo.flags|=e,a.memoizedState=wi(1|t,n,void 0,void 0===r?null:r)}function xi(e,t,n,r){var a=ui()
r=void 0===r?null:r
var l=void 0
if(null!==Jo){var o=Jo.memoizedState
if(l=o.destroy,null!==r&&ai(r,o.deps))return void(a.memoizedState=wi(t,n,l,r))}Xo.flags|=e,a.memoizedState=wi(1|t,n,l,r)}function Ei(e,t){return Si(8390656,8,e,t)}function Ci(e,t){return xi(2048,8,e,t)}function _i(e,t){return xi(4,2,e,t)}function Pi(e,t){return xi(4,4,e,t)}function Ni(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Ti(e,t,n){return n=null!=n?n.concat([e]):null,xi(4,4,Ni.bind(null,t,e),n)}function Li(){}function Ri(e,t){var n=ui()
t=void 0===t?null:t
var r=n.memoizedState
return null!==r&&null!==t&&ai(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zi(e,t){var n=ui()
t=void 0===t?null:t
var r=n.memoizedState
return null!==r&&null!==t&&ai(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Oi(e,t,n){return 21&Yo?(Xr(n,t)||(n=an(),Xo.lanes|=n,Es|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,iu=!0),e.memoizedState=n)}function Mi(e,t){var n=sn
sn=0!==n&&4>n?n:4,e(!0)
var r=qo.transition
qo.transition={}
try{e(!1),t()}finally{sn=n,qo.transition=r}}function Fi(){return ui().memoizedState}function Di(e,t,n){var r=Ws(e)
if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$i(e))Ui(t,n)
else if(null!==(n=xo(e,t,n,r))){Vs(n,e,r,Bs()),Ai(n,t,r)}}function Ii(e,t,n){var r=Ws(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null}
if($i(e))Ui(t,a)
else{var l=e.alternate
if(0===e.lanes&&(null===l||0===l.lanes)&&null!==(l=t.lastRenderedReducer))try{var o=t.lastRenderedState,i=l(o,n)
if(a.hasEagerState=!0,a.eagerState=i,Xr(i,o)){var u=t.interleaved
return null===u?(a.next=a,So(t)):(a.next=u.next,u.next=a),void(t.interleaved=a)}}catch(s){}null!==(n=xo(e,t,a,r))&&(Vs(n,e,r,a=Bs()),Ai(n,t,r))}}function $i(e){var t=e.alternate
return e===Xo||null!==t&&t===Xo}function Ui(e,t){ei=Zo=!0
var n=e.pending
null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ai(e,t,n){if(4194240&n){var r=t.lanes
n|=r&=e.pendingLanes,t.lanes=n,un(e,n)}}var ji={readContext:wo,useCallback:ri,useContext:ri,useEffect:ri,useImperativeHandle:ri,useInsertionEffect:ri,useLayoutEffect:ri,useMemo:ri,useReducer:ri,useRef:ri,useState:ri,useDebugValue:ri,useDeferredValue:ri,useTransition:ri,useMutableSource:ri,useSyncExternalStore:ri,useId:ri,unstable_isNewReconciler:!1},Bi={readContext:wo,useCallback:function(e,t){return ii().memoizedState=[e,void 0===t?null:t],e},useContext:wo,useEffect:Ei,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,Si(4194308,4,Ni.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Si(4194308,4,e,t)},useInsertionEffect:function(e,t){return Si(4,2,e,t)},useMemo:function(e,t){var n=ii()
return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ii()
return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Di.bind(null,Xo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},ii().memoizedState=e},useState:bi,useDebugValue:Li,useDeferredValue:function(e){return ii().memoizedState=e},useTransition:function(){var e=bi(!1),t=e[0]
return e=Mi.bind(null,e[1]),ii().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Xo,a=ii()
if(Kl){if(void 0===n)throw Error(q(407))
n=n()}else{if(n=t(),null===gs)throw Error(q(349))
30&Yo||hi(r,t,n)}a.memoizedState=n
var l={value:n,getSnapshot:t}
return a.queue=l,Ei(vi.bind(null,r,l,e),[e]),r.flags|=2048,wi(9,mi.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=ii(),t=gs.identifierPrefix
if(Kl){var n=Al
t=":"+t+"R"+(n=(Ul&~(1<<32-Yt(Ul)-1)).toString(32)+n),0<(n=ti++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=ni++).toString(32)+":"
return e.memoizedState=t},unstable_isNewReconciler:!1},Wi={readContext:wo,useCallback:Ri,useContext:wo,useEffect:Ci,useImperativeHandle:Ti,useInsertionEffect:_i,useLayoutEffect:Pi,useMemo:zi,useReducer:ci,useRef:ki,useState:function(){return ci(si)},useDebugValue:Li,useDeferredValue:function(e){return Oi(ui(),Jo.memoizedState,e)},useTransition:function(){return[ci(si)[0],ui().memoizedState]},useMutableSource:di,useSyncExternalStore:pi,useId:Fi,unstable_isNewReconciler:!1},Vi={readContext:wo,useCallback:Ri,useContext:wo,useEffect:Ci,useImperativeHandle:Ti,useInsertionEffect:_i,useLayoutEffect:Pi,useMemo:zi,useReducer:fi,useRef:ki,useState:function(){return fi(si)},useDebugValue:Li,useDeferredValue:function(e){var t=ui()
return null===Jo?t.memoizedState=e:Oi(t,Jo.memoizedState,e)},useTransition:function(){return[fi(si)[0],ui().memoizedState]},useMutableSource:di,useSyncExternalStore:pi,useId:Fi,unstable_isNewReconciler:!1}
function Hi(e,t){if(e&&e.defaultProps){for(var n in t=_e({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n])
return t}return t}function Qi(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:_e({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var Ki={isMounted:function(e){return!!(e=e._reactInternals)&&Rt(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals
var r=Bs(),a=Ws(e),l=No(r,a)
l.payload=t,null!=n&&(l.callback=n),null!==(t=To(e,l,a))&&(Vs(t,e,a,r),Lo(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals
var r=Bs(),a=Ws(e),l=No(r,a)
l.tag=1,l.payload=t,null!=n&&(l.callback=n),null!==(t=To(e,l,a))&&(Vs(t,e,a,r),Lo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals
var n=Bs(),r=Ws(e),a=No(n,r)
a.tag=2,null!=t&&(a.callback=t),null!==(t=To(e,a,r))&&(Vs(t,e,r,n),Lo(t,e,r))}}
function qi(e,t,n,r,a,l,o){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,l,o):!t.prototype||!t.prototype.isPureReactComponent||(!Jr(n,r)||!Jr(a,l))}function Yi(e,t,n){var r=!1,a=vl,l=t.contextType
return"object"==typeof l&&null!==l?l=wo(l):(a=kl(t)?bl:gl.current,l=(r=null!=(r=t.contextTypes))?wl(e,a):vl),t=new t(n,l),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=Ki,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),t}function Xi(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ki.enqueueReplaceState(t,t.state,null)}function Ji(e,t,n,r){var a=e.stateNode
a.props=n,a.state=e.memoizedState,a.refs={},_o(e)
var l=t.contextType
"object"==typeof l&&null!==l?a.context=wo(l):(l=kl(t)?bl:gl.current,a.context=wl(e,l)),a.state=e.memoizedState,"function"==typeof(l=t.getDerivedStateFromProps)&&(Qi(e,t,l,n),a.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof a.getSnapshotBeforeUpdate||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||(t=a.state,"function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&Ki.enqueueReplaceState(a,a.state,null),zo(e,n,a,r),a.state=e.memoizedState),"function"==typeof a.componentDidMount&&(e.flags|=4194308)}function Gi(e,t){try{var n="",r=t
do{n+=Le(r),r=r.return}while(r)
var a=n}catch(l){a="\nError generating stack: "+l.message+"\n"+l.stack}return{value:e,source:t,stack:a,digest:null}}function Zi(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}var eu="function"==typeof WeakMap?WeakMap:Map
function tu(e,t,n){(n=No(-1,n)).tag=3,n.payload={element:null}
var r=t.value
return n.callback=function(){zs||(zs=!0,Os=r)},n}function nu(e,t,n){(n=No(-1,n)).tag=3
var r=e.type.getDerivedStateFromError
if("function"==typeof r){var a=t.value
n.payload=function(){return r(a)},n.callback=function(){}}var l=e.stateNode
return null!==l&&"function"==typeof l.componentDidCatch&&(n.callback=function(){"function"!=typeof r&&(null===Ms?Ms=new Set([this]):Ms.add(this))
var e=t.stack
this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ru(e,t,n){var r=e.pingCache
if(null===r){r=e.pingCache=new eu
var a=new Set
r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a))
a.has(n)||(a.add(n),e=pc.bind(null,e,t,n),t.then(e,e))}function au(e){do{var t
if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e
e=e.return}while(null!==e)
return null}function lu(e,t,n,r,a){return 1&e.mode?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=No(-1,1)).tag=2,To(n,t,1))),n.lanes|=1),e)}var ou=se.ReactCurrentOwner,iu=!1
function uu(e,t,n,r){t.child=null===e?co(t,null,n,r):so(t,e.child,n,r)}function su(e,t,n,r,a){n=n.render
var l=t.ref
return bo(t,a),r=li(e,t,n,r,l,a),n=oi(),null===e||iu?(Kl&&n&&Wl(t),t.flags|=1,uu(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,zu(e,t,a))}function cu(e,t,n,r,a){if(null===e){var l=n.type
return"function"!=typeof l||wc(l)||void 0!==l.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Sc(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=l,fu(e,t,l,r,a))}if(l=e.child,!(e.lanes&a)){var o=l.memoizedProps
if((n=null!==(n=n.compare)?n:Jr)(o,r)&&e.ref===t.ref)return zu(e,t,a)}return t.flags|=1,(e=kc(l,r)).ref=t.ref,e.return=t,t.child=e}function fu(e,t,n,r,a){if(null!==e){var l=e.memoizedProps
if(Jr(l,r)&&e.ref===t.ref){if(iu=!1,t.pendingProps=r=l,!(e.lanes&a))return t.lanes=e.lanes,zu(e,t,a)
131072&e.flags&&(iu=!0)}}return hu(e,t,n,r,a)}function du(e,t,n){var r=t.pendingProps,a=r.children,l=null!==e?e.memoizedState:null
if("hidden"===r.mode)if(1&t.mode){if(!(1073741824&n))return e=null!==l?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ml(ks,ws),ws|=e,null
t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==l?l.baseLanes:n,ml(ks,ws),ws|=r}else t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ml(ks,ws),ws|=n
else null!==l?(r=l.baseLanes|n,t.memoizedState=null):r=n,ml(ks,ws),ws|=r
return uu(e,t,a,n),t.child}function pu(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function hu(e,t,n,r,a){var l=kl(n)?bl:gl.current
return l=wl(t,l),bo(t,a),n=li(e,t,n,r,l,a),r=oi(),null===e||iu?(Kl&&r&&Wl(t),t.flags|=1,uu(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,zu(e,t,a))}function mu(e,t,n,r,a){if(kl(n)){var l=!0
Cl(t)}else l=!1
if(bo(t,a),null===t.stateNode)Ru(e,t),Yi(t,n,r),Ji(t,n,r,a),r=!0
else if(null===e){var o=t.stateNode,i=t.memoizedProps
o.props=i
var u=o.context,s=n.contextType
"object"==typeof s&&null!==s?s=wo(s):s=wl(t,s=kl(n)?bl:gl.current)
var c=n.getDerivedStateFromProps,f="function"==typeof c||"function"==typeof o.getSnapshotBeforeUpdate
f||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(i!==r||u!==s)&&Xi(t,o,r,s),Co=!1
var d=t.memoizedState
o.state=d,zo(t,r,o,a),u=t.memoizedState,i!==r||d!==u||yl.current||Co?("function"==typeof c&&(Qi(t,n,c,r),u=t.memoizedState),(i=Co||qi(t,n,i,r,d,u,s))?(f||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(t.flags|=4194308)):("function"==typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=s,r=i):("function"==typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Po(e,t),i=t.memoizedProps,s=t.type===t.elementType?i:Hi(t.type,i),o.props=s,f=t.pendingProps,d=o.context,"object"==typeof(u=n.contextType)&&null!==u?u=wo(u):u=wl(t,u=kl(n)?bl:gl.current)
var p=n.getDerivedStateFromProps;(c="function"==typeof p||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(i!==f||d!==u)&&Xi(t,o,r,u),Co=!1,d=t.memoizedState,o.state=d,zo(t,r,o,a)
var h=t.memoizedState
i!==f||d!==h||yl.current||Co?("function"==typeof p&&(Qi(t,n,p,r),h=t.memoizedState),(s=Co||qi(t,n,s,r,d,h,u)||!1)?(c||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(r,h,u),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,h,u)),"function"==typeof o.componentDidUpdate&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof o.componentDidUpdate||i===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||i===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),o.props=r,o.state=h,o.context=u,r=s):("function"!=typeof o.componentDidUpdate||i===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||i===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return vu(e,t,n,r,l,a)}function vu(e,t,n,r,a,l){pu(e,t)
var o=!!(128&t.flags)
if(!r&&!o)return a&&_l(t,n,!1),zu(e,t,l)
r=t.stateNode,ou.current=t
var i=o&&"function"!=typeof n.getDerivedStateFromError?null:r.render()
return t.flags|=1,null!==e&&o?(t.child=so(t,e.child,null,l),t.child=so(t,null,i,l)):uu(e,t,i,l),t.memoizedState=r.state,a&&_l(t,n,!0),t.child}function gu(e){var t=e.stateNode
t.pendingContext?xl(0,t.pendingContext,t.pendingContext!==t.context):t.context&&xl(0,t.context,!1),Uo(e,t.containerInfo)}function yu(e,t,n,r,a){return no(),ro(a),t.flags|=256,uu(e,t,n,r),t.child}var bu,wu,ku,Su,xu={dehydrated:null,treeContext:null,retryLane:0}
function Eu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cu(e,t,n){var r,a=t.pendingProps,l=Wo.current,o=!1,i=!!(128&t.flags)
if((r=i)||(r=(null===e||null!==e.memoizedState)&&!!(2&l)),r?(o=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(l|=1),ml(Wo,1&l),null===e)return Gl(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(1&t.mode?"$!"===e.data?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=a.children,e=a.fallback,o?(a=t.mode,o=t.child,i={mode:"hidden",children:i},1&a||null===o?o=Ec(i,a,0,null):(o.childLanes=0,o.pendingProps=i),e=xc(e,a,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Eu(n),t.memoizedState=xu,e):_u(t,i))
if(null!==(l=e.memoizedState)&&null!==(r=l.dehydrated))return function(e,t,n,r,a,l,o){if(n)return 256&t.flags?(t.flags&=-257,Pu(e,t,o,r=Zi(Error(q(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(l=r.fallback,a=t.mode,r=Ec({mode:"visible",children:r.children},a,0,null),(l=xc(l,a,o,null)).flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,1&t.mode&&so(t,e.child,null,o),t.child.memoizedState=Eu(o),t.memoizedState=xu,l)
if(!(1&t.mode))return Pu(e,t,o,null)
if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var i=r.dgst
return r=i,Pu(e,t,o,r=Zi(l=Error(q(419)),r,void 0))}if(i=!!(o&e.childLanes),iu||i){if(null!==(r=gs)){switch(o&-o){case 4:a=2
break
case 16:a=8
break
case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32
break
case 536870912:a=268435456
break
default:a=0}0!==(a=a&(r.suspendedLanes|o)?0:a)&&a!==l.retryLane&&(l.retryLane=a,Eo(e,a),Vs(r,e,a,-1))}return rc(),Pu(e,t,o,r=Zi(Error(q(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=mc.bind(null,e),a._reactRetry=t,null):(e=l.treeContext,Ql=Ga(a.nextSibling),Hl=t,Kl=!0,ql=null,null!==e&&(Dl[Il++]=Ul,Dl[Il++]=Al,Dl[Il++]=$l,Ul=e.id,Al=e.overflow,$l=t),t=_u(t,r.children),t.flags|=4096,t)}(e,t,i,a,r,l,n)
if(o){o=a.fallback,i=t.mode,r=(l=e.child).sibling
var u={mode:"hidden",children:a.children}
return 1&i||t.child===l?(a=kc(l,u)).subtreeFlags=14680064&l.subtreeFlags:((a=t.child).childLanes=0,a.pendingProps=u,t.deletions=null),null!==r?o=kc(r,o):(o=xc(o,i,n,null)).flags|=2,o.return=t,a.return=t,a.sibling=o,t.child=a,a=o,o=t.child,i=null===(i=e.child.memoizedState)?Eu(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=xu,a}return e=(o=e.child).sibling,a=kc(o,{mode:"visible",children:a.children}),!(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function _u(e,t){return(t=Ec({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Pu(e,t,n,r){return null!==r&&ro(r),so(t,e.child,null,n),(e=_u(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Nu(e,t,n){e.lanes|=t
var r=e.alternate
null!==r&&(r.lanes|=t),yo(e.return,t,n)}function Tu(e,t,n,r,a){var l=e.memoizedState
null===l?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=a)}function Lu(e,t,n){var r=t.pendingProps,a=r.revealOrder,l=r.tail
if(uu(e,t,r.children,n),2&(r=Wo.current))r=1&r|2,t.flags|=128
else{if(null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Nu(e,n,t)
else if(19===e.tag)Nu(e,n,t)
else if(null!==e.child){e.child.return=e,e=e.child
continue}if(e===t)break e
for(;null===e.sibling;){if(null===e.return||e.return===t)break e
e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ml(Wo,r),1&t.mode)switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===Vo(e)&&(a=n),n=n.sibling
null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Tu(t,!1,a,n,l)
break
case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===Vo(e)){t.child=a
break}e=a.sibling,a.sibling=n,n=a,a=e}Tu(t,!0,n,null,l)
break
case"together":Tu(t,!1,null,null,void 0)
break
default:t.memoizedState=null}else t.memoizedState=null
return t.child}function Ru(e,t){!(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zu(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Es|=t.lanes,!(n&t.childLanes))return null
if(null!==e&&t.child!==e.child)throw Error(q(153))
if(null!==t.child){for(n=kc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=kc(e,e.pendingProps)).return=t
n.sibling=null}return t.child}function Ou(e,t){if(!Kl)switch(e.tailMode){case"hidden":t=e.tail
for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling
null===n?e.tail=null:n.sibling=null
break
case"collapsed":n=e.tail
for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling
null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Mu(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0
if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling
else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling
return e.subtreeFlags|=r,e.childLanes=n,t}function Fu(e,t,n){var r=t.pendingProps
switch(Vl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mu(t),null
case 1:case 17:return kl(t.type)&&Sl(),Mu(t),null
case 3:return r=t.stateNode,Ao(),hl(yl),hl(gl),Qo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(eo(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&!(256&t.flags)||(t.flags|=1024,null!==ql&&(qs(ql),ql=null))),wu(e,t),Mu(t),null
case 5:Bo(t)
var a=$o(Io.current)
if(n=t.type,null!==e&&null!=t.stateNode)ku(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152)
else{if(!r){if(null===t.stateNode)throw Error(q(166))
return Mu(t),null}if(e=$o(Fo.current),eo(t)){r=t.stateNode,n=t.type
var l=t.memoizedProps
switch(r[tl]=t,r[nl]=l,e=!!(1&t.mode),n){case"dialog":Na("cancel",r),Na("close",r)
break
case"iframe":case"object":case"embed":Na("load",r)
break
case"video":case"audio":for(a=0;a<Ea.length;a++)Na(Ea[a],r)
break
case"source":Na("error",r)
break
case"img":case"image":case"link":Na("error",r),Na("load",r)
break
case"details":Na("toggle",r)
break
case"input":Ue(r,l),Na("invalid",r)
break
case"select":r._wrapperState={wasMultiple:!!l.multiple},Na("invalid",r)
break
case"textarea":Ke(r,l),Na("invalid",r)}for(var o in it(n,l),a=null,l)if(l.hasOwnProperty(o)){var i=l[o]
"children"===o?"string"==typeof i?r.textContent!==i&&(!0!==l.suppressHydrationWarning&&ja(r.textContent,i,e),a=["children",i]):"number"==typeof i&&r.textContent!==""+i&&(!0!==l.suppressHydrationWarning&&ja(r.textContent,i,e),a=["children",""+i]):X.hasOwnProperty(o)&&null!=i&&"onScroll"===o&&Na("scroll",r)}switch(n){case"input":Fe(r),Be(r,l,!0)
break
case"textarea":Fe(r),Ye(r)
break
case"select":case"option":break
default:"function"==typeof l.onClick&&(r.onclick=Ba)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{o=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=Xe(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=o.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),"select"===n&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[tl]=t,e[nl]=r,bu(e,t,!1,!1),t.stateNode=e
e:{switch(o=ut(n,r),n){case"dialog":Na("cancel",e),Na("close",e),a=r
break
case"iframe":case"object":case"embed":Na("load",e),a=r
break
case"video":case"audio":for(a=0;a<Ea.length;a++)Na(Ea[a],e)
a=r
break
case"source":Na("error",e),a=r
break
case"img":case"image":case"link":Na("error",e),Na("load",e),a=r
break
case"details":Na("toggle",e),a=r
break
case"input":Ue(e,r),a=$e(e,r),Na("invalid",e)
break
case"option":default:a=r
break
case"select":e._wrapperState={wasMultiple:!!r.multiple},a=_e({},r,{value:void 0}),Na("invalid",e)
break
case"textarea":Ke(e,r),a=Qe(e,r),Na("invalid",e)}for(l in it(n,a),i=a)if(i.hasOwnProperty(l)){var u=i[l]
"style"===l?lt(e,u):"dangerouslySetInnerHTML"===l?null!=(u=u?u.__html:void 0)&&et(e,u):"children"===l?"string"==typeof u?("textarea"!==n||""!==u)&&tt(e,u):"number"==typeof u&&tt(e,""+u):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(X.hasOwnProperty(l)?null!=u&&"onScroll"===l&&Na("scroll",e):null!=u&&ue(e,l,u,o))}switch(n){case"input":Fe(e),Be(e,r,!1)
break
case"textarea":Fe(e),Ye(e)
break
case"option":null!=r.value&&e.setAttribute("value",""+Oe(r.value))
break
case"select":e.multiple=!!r.multiple,null!=(l=r.value)?He(e,!!r.multiple,l,!1):null!=r.defaultValue&&He(e,!!r.multiple,r.defaultValue,!0)
break
default:"function"==typeof a.onClick&&(e.onclick=Ba)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus
break e
case"img":r=!0
break e
default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Mu(t),null
case 6:if(e&&null!=t.stateNode)Su(e,t,e.memoizedProps,r)
else{if("string"!=typeof r&&null===t.stateNode)throw Error(q(166))
if(n=$o(Io.current),$o(Fo.current),eo(t)){if(r=t.stateNode,n=t.memoizedProps,r[tl]=t,(l=r.nodeValue!==n)&&null!==(e=Hl))switch(e.tag){case 3:ja(r.nodeValue,n,!!(1&e.mode))
break
case 5:!0!==e.memoizedProps.suppressHydrationWarning&&ja(r.nodeValue,n,!!(1&e.mode))}l&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[tl]=t,t.stateNode=r}return Mu(t),null
case 13:if(hl(Wo),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(Kl&&null!==Ql&&1&t.mode&&!(128&t.flags))to(),no(),t.flags|=98560,l=!1
else if(l=eo(t),null!==r&&null!==r.dehydrated){if(null===e){if(!l)throw Error(q(318))
if(!(l=null!==(l=t.memoizedState)?l.dehydrated:null))throw Error(q(317))
l[tl]=t}else no(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4
Mu(t),l=!1}else null!==ql&&(qs(ql),ql=null),l=!0
if(!l)return 65536&t.flags?t:null}return 128&t.flags?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,1&t.mode&&(null===e||1&Wo.current?0===Ss&&(Ss=3):rc())),null!==t.updateQueue&&(t.flags|=4),Mu(t),null)
case 4:return Ao(),wu(e,t),null===e&&Ra(t.stateNode.containerInfo),Mu(t),null
case 10:return go(t.type._context),Mu(t),null
case 19:if(hl(Wo),null===(l=t.memoizedState))return Mu(t),null
if(r=!!(128&t.flags),null===(o=l.rendering))if(r)Ou(l,!1)
else{if(0!==Ss||null!==e&&128&e.flags)for(e=t.child;null!==e;){if(null!==(o=Vo(e))){for(t.flags|=128,Ou(l,!1),null!==(r=o.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(l=n).flags&=14680066,null===(o=l.alternate)?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling
return ml(Wo,1&Wo.current|2),t.child}e=e.sibling}null!==l.tail&&At()>Ls&&(t.flags|=128,r=!0,Ou(l,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=Vo(o))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Ou(l,!0),null===l.tail&&"hidden"===l.tailMode&&!o.alternate&&!Kl)return Mu(t),null}else 2*At()-l.renderingStartTime>Ls&&1073741824!==n&&(t.flags|=128,r=!0,Ou(l,!1),t.lanes=4194304)
l.isBackwards?(o.sibling=t.child,t.child=o):(null!==(n=l.last)?n.sibling=o:t.child=o,l.last=o)}return null!==l.tail?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=At(),t.sibling=null,n=Wo.current,ml(Wo,r?1&n|2:1&n),t):(Mu(t),null)
case 22:case 23:return Zs(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&1&t.mode?!!(1073741824&ws)&&(Mu(t),6&t.subtreeFlags&&(t.flags|=8192)):Mu(t),null
case 24:case 25:return null}throw Error(q(156,t.tag))}function Du(e,t){switch(Vl(t),t.tag){case 1:return kl(t.type)&&Sl(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null
case 3:return Ao(),hl(yl),hl(gl),Qo(),65536&(e=t.flags)&&!(128&e)?(t.flags=-65537&e|128,t):null
case 5:return Bo(t),null
case 13:if(hl(Wo),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(q(340))
no()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null
case 19:return hl(Wo),null
case 4:return Ao(),null
case 10:return go(t.type._context),null
case 22:case 23:return Zs(),null
default:return null}}bu=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode)
else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child
continue}if(n===t)break
for(;null===n.sibling;){if(null===n.return||n.return===t)return
n=n.return}n.sibling.return=n.return,n=n.sibling}},wu=function(){},ku=function(e,t,n,r){var a=e.memoizedProps
if(a!==r){e=t.stateNode,$o(Fo.current)
var l,o=null
switch(n){case"input":a=$e(e,a),r=$e(e,r),o=[]
break
case"select":a=_e({},a,{value:void 0}),r=_e({},r,{value:void 0}),o=[]
break
case"textarea":a=Qe(e,a),r=Qe(e,r),o=[]
break
default:"function"!=typeof a.onClick&&"function"==typeof r.onClick&&(e.onclick=Ba)}for(s in it(n,r),n=null,a)if(!r.hasOwnProperty(s)&&a.hasOwnProperty(s)&&null!=a[s])if("style"===s){var i=a[s]
for(l in i)i.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else"dangerouslySetInnerHTML"!==s&&"children"!==s&&"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(X.hasOwnProperty(s)?o||(o=[]):(o=o||[]).push(s,null))
for(s in r){var u=r[s]
if(i=null!=a?a[s]:void 0,r.hasOwnProperty(s)&&u!==i&&(null!=u||null!=i))if("style"===s)if(i){for(l in i)!i.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="")
for(l in u)u.hasOwnProperty(l)&&i[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(s,n)),n=u
else"dangerouslySetInnerHTML"===s?(u=u?u.__html:void 0,i=i?i.__html:void 0,null!=u&&i!==u&&(o=o||[]).push(s,u)):"children"===s?"string"!=typeof u&&"number"!=typeof u||(o=o||[]).push(s,""+u):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&(X.hasOwnProperty(s)?(null!=u&&"onScroll"===s&&Na("scroll",e),o||i===u||(o=[])):(o=o||[]).push(s,u))}n&&(o=o||[]).push("style",n)
var s=o;(t.updateQueue=s)&&(t.flags|=4)}},Su=function(e,t,n,r){n!==r&&(t.flags|=4)}
var Iu=!1,$u=!1,Uu="function"==typeof WeakSet?WeakSet:Set,Au=null
function ju(e,t){var n=e.ref
if(null!==n)if("function"==typeof n)try{n(null)}catch(r){dc(e,t,r)}else n.current=null}function Bu(e,t,n){try{n()}catch(r){dc(e,t,r)}}var Wu=!1
function Vu(e,t,n){var r=t.updateQueue
if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next
do{if((a.tag&e)===e){var l=a.destroy
a.destroy=void 0,void 0!==l&&Bu(t,n,l)}a=a.next}while(a!==r)}}function Hu(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next
do{if((n.tag&e)===e){var r=n.create
n.destroy=r()}n=n.next}while(n!==t)}}function Qu(e){var t=e.ref
if(null!==t){var n=e.stateNode
e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function Ku(e){var t=e.alternate
null!==t&&(e.alternate=null,Ku(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[tl],delete t[nl],delete t[al],delete t[ll],delete t[ol])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qu(e){return 5===e.tag||3===e.tag||4===e.tag}function Yu(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||qu(e.return))return null
e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e
if(null===e.child||4===e.tag)continue e
e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function Xu(e,t,n){var r=e.tag
if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=Ba))
else if(4!==r&&null!==(e=e.child))for(Xu(e,t,n),e=e.sibling;null!==e;)Xu(e,t,n),e=e.sibling}function Ju(e,t,n){var r=e.tag
if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e)
else if(4!==r&&null!==(e=e.child))for(Ju(e,t,n),e=e.sibling;null!==e;)Ju(e,t,n),e=e.sibling}var Gu=null,Zu=!1
function es(e,t,n){for(n=n.child;null!==n;)ts(e,t,n),n=n.sibling}function ts(e,t,n){if(qt&&"function"==typeof qt.onCommitFiberUnmount)try{qt.onCommitFiberUnmount(Kt,n)}catch(i){}switch(n.tag){case 5:$u||ju(n,t)
case 6:var r=Gu,a=Zu
Gu=null,es(e,t,n),Zu=a,null!==(Gu=r)&&(Zu?(e=Gu,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):Gu.removeChild(n.stateNode))
break
case 18:null!==Gu&&(Zu?(e=Gu,n=n.stateNode,8===e.nodeType?Ja(e.parentNode,n):1===e.nodeType&&Ja(e,n),zn(e)):Ja(Gu,n.stateNode))
break
case 4:r=Gu,a=Zu,Gu=n.stateNode.containerInfo,Zu=!0,es(e,t,n),Gu=r,Zu=a
break
case 0:case 11:case 14:case 15:if(!$u&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next
do{var l=a,o=l.destroy
l=l.tag,void 0!==o&&(2&l||4&l)&&Bu(n,t,o),a=a.next}while(a!==r)}es(e,t,n)
break
case 1:if(!$u&&(ju(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){dc(n,t,i)}es(e,t,n)
break
case 21:es(e,t,n)
break
case 22:1&n.mode?($u=(r=$u)||null!==n.memoizedState,es(e,t,n),$u=r):es(e,t,n)
break
default:es(e,t,n)}}function ns(e){var t=e.updateQueue
if(null!==t){e.updateQueue=null
var n=e.stateNode
null===n&&(n=e.stateNode=new Uu),t.forEach((function(t){var r=vc.bind(null,e,t)
n.has(t)||(n.add(t),t.then(r,r))}))}}function rs(e,t){var n=t.deletions
if(null!==n)for(var r=0;r<n.length;r++){var a=n[r]
try{var l=e,o=t,i=o
e:for(;null!==i;){switch(i.tag){case 5:Gu=i.stateNode,Zu=!1
break e
case 3:case 4:Gu=i.stateNode.containerInfo,Zu=!0
break e}i=i.return}if(null===Gu)throw Error(q(160))
ts(l,o,a),Gu=null,Zu=!1
var u=a.alternate
null!==u&&(u.return=null),a.return=null}catch(s){dc(a,t,s)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)as(t,e),t=t.sibling}function as(e,t){var n=e.alternate,r=e.flags
switch(e.tag){case 0:case 11:case 14:case 15:if(rs(t,e),ls(e),4&r){try{Vu(3,e,e.return),Hu(3,e)}catch(m){dc(e,e.return,m)}try{Vu(5,e,e.return)}catch(m){dc(e,e.return,m)}}break
case 1:rs(t,e),ls(e),512&r&&null!==n&&ju(n,n.return)
break
case 5:if(rs(t,e),ls(e),512&r&&null!==n&&ju(n,n.return),32&e.flags){var a=e.stateNode
try{tt(a,"")}catch(m){dc(e,e.return,m)}}if(4&r&&null!=(a=e.stateNode)){var l=e.memoizedProps,o=null!==n?n.memoizedProps:l,i=e.type,u=e.updateQueue
if(e.updateQueue=null,null!==u)try{"input"===i&&"radio"===l.type&&null!=l.name&&Ae(a,l),ut(i,o)
var s=ut(i,l)
for(o=0;o<u.length;o+=2){var c=u[o],f=u[o+1]
"style"===c?lt(a,f):"dangerouslySetInnerHTML"===c?et(a,f):"children"===c?tt(a,f):ue(a,c,f,s)}switch(i){case"input":je(a,l)
break
case"textarea":qe(a,l)
break
case"select":var d=a._wrapperState.wasMultiple
a._wrapperState.wasMultiple=!!l.multiple
var p=l.value
null!=p?He(a,!!l.multiple,p,!1):d!==!!l.multiple&&(null!=l.defaultValue?He(a,!!l.multiple,l.defaultValue,!0):He(a,!!l.multiple,l.multiple?[]:"",!1))}a[nl]=l}catch(m){dc(e,e.return,m)}}break
case 6:if(rs(t,e),ls(e),4&r){if(null===e.stateNode)throw Error(q(162))
a=e.stateNode,l=e.memoizedProps
try{a.nodeValue=l}catch(m){dc(e,e.return,m)}}break
case 3:if(rs(t,e),ls(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{zn(t.containerInfo)}catch(m){dc(e,e.return,m)}break
case 4:default:rs(t,e),ls(e)
break
case 13:rs(t,e),ls(e),8192&(a=e.child).flags&&(l=null!==a.memoizedState,a.stateNode.isHidden=l,!l||null!==a.alternate&&null!==a.alternate.memoizedState||(Ts=At())),4&r&&ns(e)
break
case 22:if(c=null!==n&&null!==n.memoizedState,1&e.mode?($u=(s=$u)||c,rs(t,e),$u=s):rs(t,e),ls(e),8192&r){if(s=null!==e.memoizedState,(e.stateNode.isHidden=s)&&!c&&1&e.mode)for(Au=e,c=e.child;null!==c;){for(f=Au=c;null!==Au;){switch(p=(d=Au).child,d.tag){case 0:case 11:case 14:case 15:Vu(4,d,d.return)
break
case 1:ju(d,d.return)
var h=d.stateNode
if("function"==typeof h.componentWillUnmount){r=d,n=d.return
try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(m){dc(r,n,m)}}break
case 5:ju(d,d.return)
break
case 22:if(null!==d.memoizedState){ss(f)
continue}}null!==p?(p.return=d,Au=p):ss(f)}c=c.sibling}e:for(c=null,f=e;;){if(5===f.tag){if(null===c){c=f
try{a=f.stateNode,s?"function"==typeof(l=a.style).setProperty?l.setProperty("display","none","important"):l.display="none":(i=f.stateNode,o=null!=(u=f.memoizedProps.style)&&u.hasOwnProperty("display")?u.display:null,i.style.display=at("display",o))}catch(m){dc(e,e.return,m)}}}else if(6===f.tag){if(null===c)try{f.stateNode.nodeValue=s?"":f.memoizedProps}catch(m){dc(e,e.return,m)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child
continue}if(f===e)break e
for(;null===f.sibling;){if(null===f.return||f.return===e)break e
c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break
case 19:rs(t,e),ls(e),4&r&&ns(e)
case 21:}}function ls(e){var t=e.flags
if(2&t){try{e:{for(var n=e.return;null!==n;){if(qu(n)){var r=n
break e}n=n.return}throw Error(q(160))}switch(r.tag){case 5:var a=r.stateNode
32&r.flags&&(tt(a,""),r.flags&=-33),Ju(e,Yu(e),a)
break
case 3:case 4:var l=r.stateNode.containerInfo
Xu(e,Yu(e),l)
break
default:throw Error(q(161))}}catch(o){dc(e,e.return,o)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function os(e,t,n){Au=e,is(e)}function is(e,t,n){for(var r=!!(1&e.mode);null!==Au;){var a=Au,l=a.child
if(22===a.tag&&r){var o=null!==a.memoizedState||Iu
if(!o){var i=a.alternate,u=null!==i&&null!==i.memoizedState||$u
i=Iu
var s=$u
if(Iu=o,($u=u)&&!s)for(Au=a;null!==Au;)u=(o=Au).child,22===o.tag&&null!==o.memoizedState?cs(a):null!==u?(u.return=o,Au=u):cs(a)
for(;null!==l;)Au=l,is(l),l=l.sibling
Au=a,Iu=i,$u=s}us(e)}else 8772&a.subtreeFlags&&null!==l?(l.return=a,Au=l):us(e)}}function us(e){for(;null!==Au;){var t=Au
if(8772&t.flags){var n=t.alternate
try{if(8772&t.flags)switch(t.tag){case 0:case 11:case 15:$u||Hu(5,t)
break
case 1:var r=t.stateNode
if(4&t.flags&&!$u)if(null===n)r.componentDidMount()
else{var a=t.elementType===t.type?n.memoizedProps:Hi(t.type,n.memoizedProps)
r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue
null!==l&&Oo(t,l,r)
break
case 3:var o=t.updateQueue
if(null!==o){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Oo(t,o,n)}break
case 5:var i=t.stateNode
if(null===n&&4&t.flags){n=i
var u=t.memoizedProps
switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus()
break
case"img":u.src&&(n.src=u.src)}}break
case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break
case 13:if(null===t.memoizedState){var s=t.alternate
if(null!==s){var c=s.memoizedState
if(null!==c){var f=c.dehydrated
null!==f&&zn(f)}}}break
default:throw Error(q(163))}$u||512&t.flags&&Qu(t)}catch(d){dc(t,t.return,d)}}if(t===e){Au=null
break}if(null!==(n=t.sibling)){n.return=t.return,Au=n
break}Au=t.return}}function ss(e){for(;null!==Au;){var t=Au
if(t===e){Au=null
break}var n=t.sibling
if(null!==n){n.return=t.return,Au=n
break}Au=t.return}}function cs(e){for(;null!==Au;){var t=Au
try{switch(t.tag){case 0:case 11:case 15:var n=t.return
try{Hu(4,t)}catch(u){dc(t,n,u)}break
case 1:var r=t.stateNode
if("function"==typeof r.componentDidMount){var a=t.return
try{r.componentDidMount()}catch(u){dc(t,a,u)}}var l=t.return
try{Qu(t)}catch(u){dc(t,l,u)}break
case 5:var o=t.return
try{Qu(t)}catch(u){dc(t,o,u)}}}catch(u){dc(t,t.return,u)}if(t===e){Au=null
break}var i=t.sibling
if(null!==i){i.return=t.return,Au=i
break}Au=t.return}}var fs,ds=Math.ceil,ps=se.ReactCurrentDispatcher,hs=se.ReactCurrentOwner,ms=se.ReactCurrentBatchConfig,vs=0,gs=null,ys=null,bs=0,ws=0,ks=pl(0),Ss=0,xs=null,Es=0,Cs=0,_s=0,Ps=null,Ns=null,Ts=0,Ls=1/0,Rs=null,zs=!1,Os=null,Ms=null,Fs=!1,Ds=null,Is=0,$s=0,Us=null,As=-1,js=0
function Bs(){return 6&vs?At():-1!==As?As:As=At()}function Ws(e){return 1&e.mode?2&vs&&0!==bs?bs&-bs:null!==ao.transition?(0===js&&(js=an()),js):0!==(e=sn)?e:e=void 0===(e=window.event)?16:An(e.type):1}function Vs(e,t,n,r){if(50<$s)throw $s=0,Us=null,Error(q(185))
on(e,n,r),2&vs&&e===gs||(e===gs&&(!(2&vs)&&(Cs|=n),4===Ss&&Ys(e,bs)),Hs(e,r),1===n&&0===vs&&!(1&t.mode)&&(Ls=At()+500,Nl&&Rl()))}function Hs(e,t){var n=e.callbackNode
!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Yt(l),i=1<<o,u=a[o];-1===u?i&n&&!(i&r)||(a[o]=nn(i,t)):u<=t&&(e.expiredLanes|=i),l&=~i}}(e,t)
var r=tn(e,e===gs?bs:0)
if(0===r)null!==n&&It(n),e.callbackNode=null,e.callbackPriority=0
else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&It(n),1===t)0===e.tag?function(e){Nl=!0,Ll(e)}(Xs.bind(null,e)):Ll(Xs.bind(null,e)),Ya((function(){!(6&vs)&&Rl()})),n=null
else{switch(cn(r)){case 1:n=Bt
break
case 4:n=Wt
break
case 16:default:n=Vt
break
case 536870912:n=Qt}n=gc(n,Qs.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qs(e,t){if(As=-1,js=0,6&vs)throw Error(q(327))
var n=e.callbackNode
if(cc()&&e.callbackNode!==n)return null
var r=tn(e,e===gs?bs:0)
if(0===r)return null
if(30&r||r&e.expiredLanes||t)t=ac(e,r)
else{t=r
var a=vs
vs|=2
var l=nc()
for(gs===e&&bs===t||(Rs=null,Ls=At()+500,ec(e,t));;)try{oc()
break}catch(i){tc(e,i)}vo(),ps.current=l,vs=a,null!==ys?t=0:(gs=null,bs=0,t=Ss)}if(0!==t){if(2===t&&(0!==(a=rn(e))&&(r=a,t=Ks(e,a))),1===t)throw n=xs,ec(e,0),Ys(e,r),Hs(e,At()),n
if(6===t)Ys(e,r)
else{if(a=e.current.alternate,!(30&r||function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue
if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],l=a.getSnapshot
a=a.value
try{if(!Xr(l(),a))return!1}catch(o){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n
else{if(t===e)break
for(;null===t.sibling;){if(null===t.return||t.return===e)return!0
t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)||(t=ac(e,r),2===t&&(l=rn(e),0!==l&&(r=l,t=Ks(e,l))),1!==t)))throw n=xs,ec(e,0),Ys(e,r),Hs(e,At()),n
switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(q(345))
case 2:case 5:sc(e,Ns,Rs)
break
case 3:if(Ys(e,r),(130023424&r)===r&&10<(t=Ts+500-At())){if(0!==tn(e,0))break
if(((a=e.suspendedLanes)&r)!==r){Bs(),e.pingedLanes|=e.suspendedLanes&a
break}e.timeoutHandle=Qa(sc.bind(null,e,Ns,Rs),t)
break}sc(e,Ns,Rs)
break
case 4:if(Ys(e,r),(4194240&r)===r)break
for(t=e.eventTimes,a=-1;0<r;){var o=31-Yt(r)
l=1<<o,(o=t[o])>a&&(a=o),r&=~l}if(r=a,10<(r=(120>(r=At()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ds(r/1960))-r)){e.timeoutHandle=Qa(sc.bind(null,e,Ns,Rs),r)
break}sc(e,Ns,Rs)
break
default:throw Error(q(329))}}}return Hs(e,At()),e.callbackNode===n?Qs.bind(null,e):null}function Ks(e,t){var n=Ps
return e.current.memoizedState.isDehydrated&&(ec(e,t).flags|=256),2!==(e=ac(e,t))&&(t=Ns,Ns=n,null!==t&&qs(t)),e}function qs(e){null===Ns?Ns=e:Ns.push.apply(Ns,e)}function Ys(e,t){for(t&=~_s,t&=~Cs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Yt(t),r=1<<n
e[n]=-1,t&=~r}}function Xs(e){if(6&vs)throw Error(q(327))
cc()
var t=tn(e,0)
if(!(1&t))return Hs(e,At()),null
var n=ac(e,t)
if(0!==e.tag&&2===n){var r=rn(e)
0!==r&&(t=r,n=Ks(e,r))}if(1===n)throw n=xs,ec(e,0),Ys(e,t),Hs(e,At()),n
if(6===n)throw Error(q(345))
return e.finishedWork=e.current.alternate,e.finishedLanes=t,sc(e,Ns,Rs),Hs(e,At()),null}function Js(e,t){var n=vs
vs|=1
try{return e(t)}finally{0===(vs=n)&&(Ls=At()+500,Nl&&Rl())}}function Gs(e){null!==Ds&&0===Ds.tag&&!(6&vs)&&cc()
var t=vs
vs|=1
var n=ms.transition,r=sn
try{if(ms.transition=null,sn=1,e)return e()}finally{sn=r,ms.transition=n,!(6&(vs=t))&&Rl()}}function Zs(){ws=ks.current,hl(ks)}function ec(e,t){e.finishedWork=null,e.finishedLanes=0
var n=e.timeoutHandle
if(-1!==n&&(e.timeoutHandle=-1,Ka(n)),null!==ys)for(n=ys.return;null!==n;){var r=n
switch(Vl(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&Sl()
break
case 3:Ao(),hl(yl),hl(gl),Qo()
break
case 5:Bo(r)
break
case 4:Ao()
break
case 13:case 19:hl(Wo)
break
case 10:go(r.type._context)
break
case 22:case 23:Zs()}n=n.return}if(gs=e,ys=e=kc(e.current,null),bs=ws=t,Ss=0,xs=null,_s=Cs=Es=0,Ns=Ps=null,null!==ko){for(t=0;t<ko.length;t++)if(null!==(r=(n=ko[t]).interleaved)){n.interleaved=null
var a=r.next,l=n.pending
if(null!==l){var o=l.next
l.next=a,r.next=o}n.pending=r}ko=null}return e}function tc(e,t){for(;;){var n=ys
try{if(vo(),Ko.current=ji,Zo){for(var r=Xo.memoizedState;null!==r;){var a=r.queue
null!==a&&(a.pending=null),r=r.next}Zo=!1}if(Yo=0,Go=Jo=Xo=null,ei=!1,ti=0,hs.current=null,null===n||null===n.return){Ss=1,xs=t,ys=null
break}e:{var l=e,o=n.return,i=n,u=t
if(t=bs,i.flags|=32768,null!==u&&"object"==typeof u&&"function"==typeof u.then){var s=u,c=i,f=c.tag
if(!(1&c.mode||0!==f&&11!==f&&15!==f)){var d=c.alternate
d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=au(o)
if(null!==p){p.flags&=-257,lu(p,o,i,0,t),1&p.mode&&ru(l,s,t),u=s
var h=(t=p).updateQueue
if(null===h){var m=new Set
m.add(u),t.updateQueue=m}else h.add(u)
break e}if(!(1&t)){ru(l,s,t),rc()
break e}u=Error(q(426))}else if(Kl&&1&i.mode){var v=au(o)
if(null!==v){!(65536&v.flags)&&(v.flags|=256),lu(v,o,i,0,t),ro(Gi(u,i))
break e}}l=u=Gi(u,i),4!==Ss&&(Ss=2),null===Ps?Ps=[l]:Ps.push(l),l=o
do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t,Ro(l,tu(0,u,t))
break e
case 1:i=u
var g=l.type,y=l.stateNode
if(!(128&l.flags||"function"!=typeof g.getDerivedStateFromError&&(null===y||"function"!=typeof y.componentDidCatch||null!==Ms&&Ms.has(y)))){l.flags|=65536,t&=-t,l.lanes|=t,Ro(l,nu(l,i,t))
break e}}l=l.return}while(null!==l)}uc(n)}catch(b){t=b,ys===n&&null!==n&&(ys=n=n.return)
continue}break}}function nc(){var e=ps.current
return ps.current=ji,null===e?ji:e}function rc(){0!==Ss&&3!==Ss&&2!==Ss||(Ss=4),null===gs||!(268435455&Es)&&!(268435455&Cs)||Ys(gs,bs)}function ac(e,t){var n=vs
vs|=2
var r=nc()
for(gs===e&&bs===t||(Rs=null,ec(e,t));;)try{lc()
break}catch(a){tc(e,a)}if(vo(),vs=n,ps.current=r,null!==ys)throw Error(q(261))
return gs=null,bs=0,Ss}function lc(){for(;null!==ys;)ic(ys)}function oc(){for(;null!==ys&&!$t();)ic(ys)}function ic(e){var t=fs(e.alternate,e,ws)
e.memoizedProps=e.pendingProps,null===t?uc(e):ys=t,hs.current=null}function uc(e){var t=e
do{var n=t.alternate
if(e=t.return,32768&t.flags){if(null!==(n=Du(n,t)))return n.flags&=32767,void(ys=n)
if(null===e)return Ss=6,void(ys=null)
e.flags|=32768,e.subtreeFlags=0,e.deletions=null}else if(null!==(n=Fu(n,t,ws)))return void(ys=n)
if(null!==(t=t.sibling))return void(ys=t)
ys=t=e}while(null!==t)
0===Ss&&(Ss=5)}function sc(e,t,n){var r=sn,a=ms.transition
try{ms.transition=null,sn=1,function(e,t,n,r){do{cc()}while(null!==Ds)
if(6&vs)throw Error(q(327))
n=e.finishedWork
var a=e.finishedLanes
if(null===n)return null
if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(q(177))
e.callbackNode=null,e.callbackPriority=0
var l=n.lanes|n.childLanes
if(function(e,t){var n=e.pendingLanes&~t
e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements
var r=e.eventTimes
for(e=e.expirationTimes;0<n;){var a=31-Yt(n),l=1<<a
t[a]=0,r[a]=-1,e[a]=-1,n&=~l}}(e,l),e===gs&&(ys=gs=null,bs=0),!(2064&n.subtreeFlags)&&!(2064&n.flags)||Fs||(Fs=!0,gc(Vt,(function(){return cc(),null}))),l=!!(15990&n.flags),!!(15990&n.subtreeFlags)||l){l=ms.transition,ms.transition=null
var o=sn
sn=1
var i=vs
vs|=4,hs.current=null,function(e,t){if(Wa=Mn,na(e=ta())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd}
else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection()
if(r&&0!==r.rangeCount){n=r.anchorNode
var a=r.anchorOffset,l=r.focusNode
r=r.focusOffset
try{n.nodeType,l.nodeType}catch(w){n=null
break e}var o=0,i=-1,u=-1,s=0,c=0,f=e,d=null
t:for(;;){for(var p;f!==n||0!==a&&3!==f.nodeType||(i=o+a),f!==l||0!==r&&3!==f.nodeType||(u=o+r),3===f.nodeType&&(o+=f.nodeValue.length),null!==(p=f.firstChild);)d=f,f=p
for(;;){if(f===e)break t
if(d===n&&++s===a&&(i=o),d===l&&++c===r&&(u=o),null!==(p=f.nextSibling))break
d=(f=d).parentNode}f=p}n=-1===i||-1===u?null:{start:i,end:u}}else n=null}n=n||{start:0,end:0}}else n=null
for(Va={focusedElem:e,selectionRange:n},Mn=!1,Au=t;null!==Au;)if(e=(t=Au).child,1028&t.subtreeFlags&&null!==e)e.return=t,Au=e
else for(;null!==Au;){t=Au
try{var h=t.alternate
if(1024&t.flags)switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break
case 1:if(null!==h){var m=h.memoizedProps,v=h.memoizedState,g=t.stateNode,y=g.getSnapshotBeforeUpdate(t.elementType===t.type?m:Hi(t.type,m),v)
g.__reactInternalSnapshotBeforeUpdate=y}break
case 3:var b=t.stateNode.containerInfo
1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement)
break
default:throw Error(q(163))}}catch(w){dc(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Au=e
break}Au=t.return}h=Wu,Wu=!1}(e,n),as(n,e),ra(Va),Mn=!!Wa,Va=Wa=null,e.current=n,os(n),Ut(),vs=i,sn=o,ms.transition=l}else e.current=n
if(Fs&&(Fs=!1,Ds=e,Is=a),l=e.pendingLanes,0===l&&(Ms=null),function(e){if(qt&&"function"==typeof qt.onCommitFiberRoot)try{qt.onCommitFiberRoot(Kt,e,void 0,!(128&~e.current.flags))}catch(t){}}(n.stateNode),Hs(e,At()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest})
if(zs)throw zs=!1,e=Os,Os=null,e
!!(1&Is)&&0!==e.tag&&cc(),l=e.pendingLanes,1&l?e===Us?$s++:($s=0,Us=e):$s=0,Rl()}(e,t,n,r)}finally{ms.transition=a,sn=r}return null}function cc(){if(null!==Ds){var e=cn(Is),t=ms.transition,n=sn
try{if(ms.transition=null,sn=16>e?16:e,null===Ds)var r=!1
else{if(e=Ds,Ds=null,Is=0,6&vs)throw Error(q(331))
var a=vs
for(vs|=4,Au=e.current;null!==Au;){var l=Au,o=l.child
if(16&Au.flags){var i=l.deletions
if(null!==i){for(var u=0;u<i.length;u++){var s=i[u]
for(Au=s;null!==Au;){var c=Au
switch(c.tag){case 0:case 11:case 15:Vu(8,c,l)}var f=c.child
if(null!==f)f.return=c,Au=f
else for(;null!==Au;){var d=(c=Au).sibling,p=c.return
if(Ku(c),c===s){Au=null
break}if(null!==d){d.return=p,Au=d
break}Au=p}}}var h=l.alternate
if(null!==h){var m=h.child
if(null!==m){h.child=null
do{var v=m.sibling
m.sibling=null,m=v}while(null!==m)}}Au=l}}if(2064&l.subtreeFlags&&null!==o)o.return=l,Au=o
else e:for(;null!==Au;){if(2048&(l=Au).flags)switch(l.tag){case 0:case 11:case 15:Vu(9,l,l.return)}var g=l.sibling
if(null!==g){g.return=l.return,Au=g
break e}Au=l.return}}var y=e.current
for(Au=y;null!==Au;){var b=(o=Au).child
if(2064&o.subtreeFlags&&null!==b)b.return=o,Au=b
else e:for(o=y;null!==Au;){if(2048&(i=Au).flags)try{switch(i.tag){case 0:case 11:case 15:Hu(9,i)}}catch(k){dc(i,i.return,k)}if(i===o){Au=null
break e}var w=i.sibling
if(null!==w){w.return=i.return,Au=w
break e}Au=i.return}}if(vs=a,Rl(),qt&&"function"==typeof qt.onPostCommitFiberRoot)try{qt.onPostCommitFiberRoot(Kt,e)}catch(k){}r=!0}return r}finally{sn=n,ms.transition=t}}return!1}function fc(e,t,n){e=To(e,t=tu(0,t=Gi(n,t),1),1),t=Bs(),null!==e&&(on(e,1,t),Hs(e,t))}function dc(e,t,n){if(3===e.tag)fc(e,e,n)
else for(;null!==t;){if(3===t.tag){fc(t,e,n)
break}if(1===t.tag){var r=t.stateNode
if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Ms||!Ms.has(r))){t=To(t,e=nu(t,e=Gi(n,e),1),1),e=Bs(),null!==t&&(on(t,1,e),Hs(t,e))
break}}t=t.return}}function pc(e,t,n){var r=e.pingCache
null!==r&&r.delete(t),t=Bs(),e.pingedLanes|=e.suspendedLanes&n,gs===e&&(bs&n)===n&&(4===Ss||3===Ss&&(130023424&bs)===bs&&500>At()-Ts?ec(e,0):_s|=n),Hs(e,t)}function hc(e,t){0===t&&(1&e.mode?(t=Zt,!(130023424&(Zt<<=1))&&(Zt=4194304)):t=1)
var n=Bs()
null!==(e=Eo(e,t))&&(on(e,t,n),Hs(e,n))}function mc(e){var t=e.memoizedState,n=0
null!==t&&(n=t.retryLane),hc(e,n)}function vc(e,t){var n=0
switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState
null!==a&&(n=a.retryLane)
break
case 19:r=e.stateNode
break
default:throw Error(q(314))}null!==r&&r.delete(t),hc(e,n)}function gc(e,t){return Dt(e,t)}function yc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bc(e,t,n,r){return new yc(e,t,n,r)}function wc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function kc(e,t){var n=e.alternate
return null===n?((n=bc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Sc(e,t,n,r,a,l){var o=2
if(r=e,"function"==typeof e)wc(e)&&(o=1)
else if("string"==typeof e)o=5
else e:switch(e){case de:return xc(n.children,a,l,t)
case pe:o=8,a|=8
break
case he:return(e=bc(12,n,t,2|a)).elementType=he,e.lanes=l,e
case ye:return(e=bc(13,n,t,a)).elementType=ye,e.lanes=l,e
case be:return(e=bc(19,n,t,a)).elementType=be,e.lanes=l,e
case Se:return Ec(n,a,l,t)
default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case me:o=10
break e
case ve:o=9
break e
case ge:o=11
break e
case we:o=14
break e
case ke:o=16,r=null
break e}throw Error(q(130,null==e?e:typeof e,""))}return(t=bc(o,n,t,a)).elementType=e,t.type=r,t.lanes=l,t}function xc(e,t,n,r){return(e=bc(7,e,r,t)).lanes=n,e}function Ec(e,t,n,r){return(e=bc(22,e,r,t)).elementType=Se,e.lanes=n,e.stateNode={isHidden:!1},e}function Cc(e,t,n){return(e=bc(6,e,null,t)).lanes=n,e}function _c(e,t,n){return(t=bc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pc(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ln(0),this.expirationTimes=ln(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ln(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Nc(e,t,n,r,a,l,o,i,u){return e=new Pc(e,t,n,i,u),1===t?(t=1,!0===l&&(t|=8)):t=0,l=bc(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_o(l),e}function Tc(e){if(!e)return vl
e:{if(Rt(e=e._reactInternals)!==e||1!==e.tag)throw Error(q(170))
var t=e
do{switch(t.tag){case 3:t=t.stateNode.context
break e
case 1:if(kl(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext
break e}}t=t.return}while(null!==t)
throw Error(q(171))}if(1===e.tag){var n=e.type
if(kl(n))return El(e,n,t)}return t}function Lc(e,t,n,r,a,l,o,i,u){return(e=Nc(n,r,!0,e,0,l,0,i,u)).context=Tc(null),n=e.current,(l=No(r=Bs(),a=Ws(n))).callback=null!=t?t:null,To(n,l,a),e.current.lanes=a,on(e,a,r),Hs(e,r),e}function Rc(e,t,n,r){var a=t.current,l=Bs(),o=Ws(a)
return n=Tc(n),null===t.context?t.context=n:t.pendingContext=n,(t=No(l,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=To(a,t,o))&&(Vs(e,a,o,l),Lo(e,a,o)),o}function zc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Oc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane
e.retryLane=0!==n&&n<t?n:t}}function Mc(e,t){Oc(e,t),(e=e.alternate)&&Oc(e,t)}fs=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||yl.current)iu=!0
else{if(!(e.lanes&n||128&t.flags))return iu=!1,function(e,t,n){switch(t.tag){case 3:gu(t),no()
break
case 5:jo(t)
break
case 1:kl(t.type)&&Cl(t)
break
case 4:Uo(t,t.stateNode.containerInfo)
break
case 10:var r=t.type._context,a=t.memoizedProps.value
ml(fo,r._currentValue),r._currentValue=a
break
case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(ml(Wo,1&Wo.current),t.flags|=128,null):n&t.child.childLanes?Cu(e,t,n):(ml(Wo,1&Wo.current),null!==(e=zu(e,t,n))?e.sibling:null)
ml(Wo,1&Wo.current)
break
case 19:if(r=!!(n&t.childLanes),128&e.flags){if(r)return Lu(e,t,n)
t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),ml(Wo,Wo.current),r)break
return null
case 22:case 23:return t.lanes=0,du(e,t,n)}return zu(e,t,n)}(e,t,n)
iu=!!(131072&e.flags)}else iu=!1,Kl&&1048576&t.flags&&Bl(t,Fl,t.index)
switch(t.lanes=0,t.tag){case 2:var r=t.type
Ru(e,t),e=t.pendingProps
var a=wl(t,gl.current)
bo(t,n),a=li(null,t,r,e,a,n)
var l=oi()
return t.flags|=1,"object"==typeof a&&null!==a&&"function"==typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,kl(r)?(l=!0,Cl(t)):l=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,_o(t),a.updater=Ki,t.stateNode=a,a._reactInternals=t,Ji(t,r,e,n),t=vu(null,t,r,!0,l,n)):(t.tag=0,Kl&&l&&Wl(t),uu(null,t,a,n),t=t.child),t
case 16:r=t.elementType
e:{switch(Ru(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"==typeof e)return wc(e)?1:0
if(null!=e){if((e=e.$$typeof)===ge)return 11
if(e===we)return 14}return 2}(r),e=Hi(r,e),a){case 0:t=hu(null,t,r,e,n)
break e
case 1:t=mu(null,t,r,e,n)
break e
case 11:t=su(null,t,r,e,n)
break e
case 14:t=cu(null,t,r,Hi(r.type,e),n)
break e}throw Error(q(306,r,""))}return t
case 0:return r=t.type,a=t.pendingProps,hu(e,t,r,a=t.elementType===r?a:Hi(r,a),n)
case 1:return r=t.type,a=t.pendingProps,mu(e,t,r,a=t.elementType===r?a:Hi(r,a),n)
case 3:e:{if(gu(t),null===e)throw Error(q(387))
r=t.pendingProps,a=(l=t.memoizedState).element,Po(e,t),zo(t,r,null,n)
var o=t.memoizedState
if(r=o.element,l.isDehydrated){if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,256&t.flags){t=yu(e,t,r,n,a=Gi(Error(q(423)),t))
break e}if(r!==a){t=yu(e,t,r,n,a=Gi(Error(q(424)),t))
break e}for(Ql=Ga(t.stateNode.containerInfo.firstChild),Hl=t,Kl=!0,ql=null,n=co(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(no(),r===a){t=zu(e,t,n)
break e}uu(e,t,r,n)}t=t.child}return t
case 5:return jo(t),null===e&&Gl(t),r=t.type,a=t.pendingProps,l=null!==e?e.memoizedProps:null,o=a.children,Ha(r,a)?o=null:null!==l&&Ha(r,l)&&(t.flags|=32),pu(e,t),uu(e,t,o,n),t.child
case 6:return null===e&&Gl(t),null
case 13:return Cu(e,t,n)
case 4:return Uo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=so(t,null,r,n):uu(e,t,r,n),t.child
case 11:return r=t.type,a=t.pendingProps,su(e,t,r,a=t.elementType===r?a:Hi(r,a),n)
case 7:return uu(e,t,t.pendingProps,n),t.child
case 8:case 12:return uu(e,t,t.pendingProps.children,n),t.child
case 10:e:{if(r=t.type._context,a=t.pendingProps,l=t.memoizedProps,o=a.value,ml(fo,r._currentValue),r._currentValue=o,null!==l)if(Xr(l.value,o)){if(l.children===a.children&&!yl.current){t=zu(e,t,n)
break e}}else for(null!==(l=t.child)&&(l.return=t);null!==l;){var i=l.dependencies
if(null!==i){o=l.child
for(var u=i.firstContext;null!==u;){if(u.context===r){if(1===l.tag){(u=No(-1,n&-n)).tag=2
var s=l.updateQueue
if(null!==s){var c=(s=s.shared).pending
null===c?u.next=u:(u.next=c.next,c.next=u),s.pending=u}}l.lanes|=n,null!==(u=l.alternate)&&(u.lanes|=n),yo(l.return,n,t),i.lanes|=n
break}u=u.next}}else if(10===l.tag)o=l.type===t.type?null:l.child
else if(18===l.tag){if(null===(o=l.return))throw Error(q(341))
o.lanes|=n,null!==(i=o.alternate)&&(i.lanes|=n),yo(o,n,t),o=l.sibling}else o=l.child
if(null!==o)o.return=l
else for(o=l;null!==o;){if(o===t){o=null
break}if(null!==(l=o.sibling)){l.return=o.return,o=l
break}o=o.return}l=o}uu(e,t,a.children,n),t=t.child}return t
case 9:return a=t.type,r=t.pendingProps.children,bo(t,n),r=r(a=wo(a)),t.flags|=1,uu(e,t,r,n),t.child
case 14:return a=Hi(r=t.type,t.pendingProps),cu(e,t,r,a=Hi(r.type,a),n)
case 15:return fu(e,t,t.type,t.pendingProps,n)
case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Hi(r,a),Ru(e,t),t.tag=1,kl(r)?(e=!0,Cl(t)):e=!1,bo(t,n),Yi(t,r,a),Ji(t,r,a,n),vu(null,t,r,!0,e,n)
case 19:return Lu(e,t,n)
case 22:return du(e,t,n)}throw Error(q(156,t.tag))}
var Fc="function"==typeof reportError?reportError:function(e){}
function Dc(e){this._internalRoot=e}function Ic(e){this._internalRoot=e}function $c(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Uc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Ac(){}function jc(e,t,n,r,a){var l=n._reactRootContainer
if(l){var o=l
if("function"==typeof a){var i=a
a=function(){var e=zc(o)
i.call(e)}}Rc(t,o,e,a)}else o=function(e,t,n,r,a){if(a){if("function"==typeof r){var l=r
r=function(){var e=zc(o)
l.call(e)}}var o=Lc(t,r,e,0,null,!1,0,"",Ac)
return e._reactRootContainer=o,e[rl]=o.current,Ra(8===e.nodeType?e.parentNode:e),Gs(),o}for(;a=e.lastChild;)e.removeChild(a)
if("function"==typeof r){var i=r
r=function(){var e=zc(u)
i.call(e)}}var u=Nc(e,0,!1,null,0,!1,0,"",Ac)
return e._reactRootContainer=u,e[rl]=u.current,Ra(8===e.nodeType?e.parentNode:e),Gs((function(){Rc(t,u,n,r)})),u}(n,t,e,a,r)
return zc(o)}Ic.prototype.render=Dc.prototype.render=function(e){var t=this._internalRoot
if(null===t)throw Error(q(409))
Rc(e,t,null,null)},Ic.prototype.unmount=Dc.prototype.unmount=function(){var e=this._internalRoot
if(null!==e){this._internalRoot=null
var t=e.containerInfo
Gs((function(){Rc(null,e,null,null)})),t[rl]=null}},Ic.prototype.unstable_scheduleHydration=function(e){if(e){var t=hn()
e={blockedOn:null,target:e,priority:t}
for(var n=0;n<xn.length&&0!==t&&t<xn[n].priority;n++);xn.splice(n,0,e),0===n&&Pn(e)}},fn=function(e){switch(e.tag){case 3:var t=e.stateNode
if(t.current.memoizedState.isDehydrated){var n=en(t.pendingLanes)
0!==n&&(un(t,1|n),Hs(t,At()),!(6&vs)&&(Ls=At()+500,Rl()))}break
case 13:Gs((function(){var t=Eo(e,1)
if(null!==t){var n=Bs()
Vs(t,e,1,n)}})),Mc(e,1)}},dn=function(e){if(13===e.tag){var t=Eo(e,134217728)
if(null!==t)Vs(t,e,134217728,Bs())
Mc(e,134217728)}},pn=function(e){if(13===e.tag){var t=Ws(e),n=Eo(e,t)
if(null!==n)Vs(n,e,t,Bs())
Mc(e,t)}},hn=function(){return sn},mn=function(e,t){var n=sn
try{return sn=e,t()}finally{sn=n}},ft=function(e,t,n){switch(t){case"input":if(je(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode
for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t]
if(r!==e&&r.form===e.form){var a=cl(r)
if(!a)throw Error(q(90))
De(r),je(r,a)}}}break
case"textarea":qe(e,n)
break
case"select":null!=(t=n.value)&&He(e,!!n.multiple,t,!1)}},gt=Js,yt=Gs
var Bc={usingClientEntryPoint:!1,Events:[ul,sl,cl,mt,vt,Js]},Wc={findFiberByHostInstance:il,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vc={bundleType:Wc.bundleType,version:Wc.version,rendererPackageName:Wc.rendererPackageName,rendererConfig:Wc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:se.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Mt(e))?null:e.stateNode},findFiberByHostInstance:Wc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"}
if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Hc=__REACT_DEVTOOLS_GLOBAL_HOOK__
if(!Hc.isDisabled&&Hc.supportsFiber)try{Kt=Hc.inject(Vc),qt=Hc}catch(Ze){}}B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bc,B.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null
if(!$c(t))throw Error(q(200))
return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null
return{$$typeof:fe,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},B.createRoot=function(e,t){if(!$c(e))throw Error(q(299))
var n=!1,r="",a=Fc
return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=Nc(e,1,!1,null,0,n,0,r,a),e[rl]=t.current,Ra(8===e.nodeType?e.parentNode:e),new Dc(t)},B.findDOMNode=function(e){if(null==e)return null
if(1===e.nodeType)return e
var t=e._reactInternals
if(void 0===t){if("function"==typeof e.render)throw Error(q(188))
throw e=Object.keys(e).join(","),Error(q(268,e))}return e=null===(e=Mt(t))?null:e.stateNode},B.flushSync=function(e){return Gs(e)},B.hydrate=function(e,t,n){if(!Uc(t))throw Error(q(200))
return jc(null,e,t,!0,n)},B.hydrateRoot=function(e,t,n){if(!$c(e))throw Error(q(405))
var r=null!=n&&n.hydratedSources||null,a=!1,l="",o=Fc
if(null!=n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(l=n.identifierPrefix),void 0!==n.onRecoverableError&&(o=n.onRecoverableError)),t=Lc(t,null,e,1,null!=n?n:null,a,0,l,o),e[rl]=t.current,Ra(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a)
return new Ic(t)},B.render=function(e,t,n){if(!Uc(t))throw Error(q(200))
return jc(null,e,t,!1,n)},B.unmountComponentAtNode=function(e){if(!Uc(e))throw Error(q(40))
return!!e._reactRootContainer&&(Gs((function(){jc(null,null,e,!1,(function(){e._reactRootContainer=null,e[rl]=null}))})),!0)},B.unstable_batchedUpdates=Js,B.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Uc(n))throw Error(q(200))
if(null==e||void 0===e._reactInternals)throw Error(q(38))
return jc(e,t,n,!1,r)},B.version="18.3.1-next-f1338f8080-20240426",function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){}}(),j.exports=B
var Qc=j.exports,Kc={}
Object.defineProperty(Kc,"__esModule",{value:!0}),Kc.parse=function(e,t){const n=new Zc,r=e.length
if(r<2)return n
const a=(null==t?void 0:t.decode)||nf
let l=0
do{const t=e.indexOf("=",l)
if(-1===t)break
const o=e.indexOf(";",l),i=-1===o?r:o
if(t>i){l=e.lastIndexOf(";",t-1)+1
continue}const u=ef(e,l,t),s=tf(e,t,u),c=e.slice(u,s)
if(void 0===n[c]){let r=ef(e,t+1,i),l=tf(e,i,r)
const o=a(e.slice(r,l))
n[c]=o}l=i+1}while(l<r)
return n},Kc.serialize=function(e,t,n){const r=(null==n?void 0:n.encode)||encodeURIComponent
if(!qc.test(e))throw new TypeError(`argument name is invalid: ${e}`)
const a=r(t)
if(!Yc.test(a))throw new TypeError(`argument val is invalid: ${t}`)
let l=e+"="+a
if(!n)return l
if(void 0!==n.maxAge){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`)
l+="; Max-Age="+n.maxAge}if(n.domain){if(!Xc.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`)
l+="; Domain="+n.domain}if(n.path){if(!Jc.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`)
l+="; Path="+n.path}if(n.expires){if(!function(e){return"[object Date]"===Gc.call(e)}(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`)
l+="; Expires="+n.expires.toUTCString()}n.httpOnly&&(l+="; HttpOnly")
n.secure&&(l+="; Secure")
n.partitioned&&(l+="; Partitioned")
if(n.priority){switch("string"==typeof n.priority?n.priority.toLowerCase():void 0){case"low":l+="; Priority=Low"
break
case"medium":l+="; Priority=Medium"
break
case"high":l+="; Priority=High"
break
default:throw new TypeError(`option priority is invalid: ${n.priority}`)}}if(n.sameSite){switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":l+="; SameSite=Strict"
break
case"lax":l+="; SameSite=Lax"
break
case"none":l+="; SameSite=None"
break
default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}}return l}
const qc=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,Yc=/^[\u0021-\u003A\u003C-\u007E]*$/,Xc=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,Jc=/^[\u0020-\u003A\u003D-\u007E]*$/,Gc=Object.prototype.toString,Zc=(()=>{const e=function(){}
return e.prototype=Object.create(null),e})()
function ef(e,t,n){do{const n=e.charCodeAt(t)
if(32!==n&&9!==n)return t}while(++t<n)
return n}function tf(e,t,n){for(;t>n;){const n=e.charCodeAt(--t)
if(32!==n&&9!==n)return t+1}return n}function nf(e){if(-1===e.indexOf("%"))return e
try{return decodeURIComponent(e)}catch(t){return e}}var rf="popstate"
function af(e={}){return function(e,t,n,r={}){let{window:a=document.defaultView,v5Compat:l=!1}=r,o=a.history,i="POP",u=null,s=c()
null==s&&(s=0,o.replaceState({...o.state,idx:s},""))
function c(){return(o.state||{idx:null}).idx}function f(){i="POP"
let e=c(),t=null==e?null:e-s
s=e,u&&u({action:i,location:m.location,delta:t})}function d(e,t){i="PUSH"
let n=sf(m.location,e,t)
s=c()+1
let r=uf(n,s),f=m.createHref(n)
try{o.pushState(r,"",f)}catch(d){if(d instanceof DOMException&&"DataCloneError"===d.name)throw d
a.location.assign(f)}l&&u&&u({action:i,location:m.location,delta:1})}function p(e,t){i="REPLACE"
let n=sf(m.location,e,t)
s=c()
let r=uf(n,s),a=m.createHref(n)
o.replaceState(r,"",a),l&&u&&u({action:i,location:m.location,delta:0})}function h(e){let t="null"!==a.location.origin?a.location.origin:a.location.href,n="string"==typeof e?e:cf(e)
return n=n.replace(/ $/,"%20"),lf(t,`No window.location.(origin|href) available to create URL for href: ${n}`),new URL(n,t)}let m={get action(){return i},get location(){return e(a,o)},listen(e){if(u)throw new Error("A history only accepts one active listener")
return a.addEventListener(rf,f),u=e,()=>{a.removeEventListener(rf,f),u=null}},createHref:e=>t(a,e),createURL:h,encodeLocation(e){let t=h(e)
return{pathname:t.pathname,search:t.search,hash:t.hash}},push:d,replace:p,go:e=>o.go(e)}
return m}((function(e,t){let{pathname:n,search:r,hash:a}=e.location
return sf("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:cf(t)}),0,e)}function lf(e,t){if(!1===e||null==e)throw new Error(t)}function of(e,t){if(!e)try{throw new Error(t)}catch(n){}}function uf(e,t){return{usr:e.state,key:e.key,idx:t}}function sf(e,t,n=null,r){return{pathname:"string"==typeof e?e:e.pathname,search:"",hash:"",..."string"==typeof t?ff(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function cf({pathname:e="/",search:t="",hash:n=""}){return t&&"?"!==t&&(e+="?"===t.charAt(0)?t:"?"+t),n&&"#"!==n&&(e+="#"===n.charAt(0)?n:"#"+n),e}function ff(e){let t={}
if(e){let n=e.indexOf("#")
n>=0&&(t.hash=e.substring(n),e=e.substring(0,n))
let r=e.indexOf("?")
r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function df(e,t,n="/"){return function(e,t,n,r){let a="string"==typeof t?ff(t):t,l=_f(a.pathname||"/",n)
if(null==l)return null
let o=pf(e)
!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]))
return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o)
let i=null
for(let u=0;null==i&&u<o.length;++u){let e=Cf(l)
i=xf(o[u],e,r)}return i}(e,t,n,!1)}function pf(e,t=[],n=[],r=""){let a=(e,a,l)=>{let o={relativePath:void 0===l?e.path||"":l,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e}
o.relativePath.startsWith("/")&&(lf(o.relativePath.startsWith(r),`Absolute route path "${o.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),o.relativePath=o.relativePath.slice(r.length))
let i=Lf([r,o.relativePath]),u=n.concat(o)
e.children&&e.children.length>0&&(lf(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${i}".`),pf(e.children,t,u,i)),(null!=e.path||e.index)&&t.push({path:i,score:Sf(i,e.index),routesMeta:u})}
return e.forEach(((e,t)=>{var n
if(""!==e.path&&(null==(n=e.path)?void 0:n.includes("?")))for(let r of hf(e.path))a(e,t,r)
else a(e,t)})),t}function hf(e){let t=e.split("/")
if(0===t.length)return[]
let[n,...r]=t,a=n.endsWith("?"),l=n.replace(/\?$/,"")
if(0===r.length)return a?[l,""]:[l]
let o=hf(r.join("/")),i=[]
return i.push(...o.map((e=>""===e?l:[l,e].join("/")))),a&&i.push(...o),i.map((t=>e.startsWith("/")&&""===t?"/":t))}var mf=/^:[\w-]+$/,vf=3,gf=2,yf=1,bf=10,wf=-2,kf=e=>"*"===e
function Sf(e,t){let n=e.split("/"),r=n.length
return n.some(kf)&&(r+=wf),t&&(r+=gf),n.filter((e=>!kf(e))).reduce(((e,t)=>e+(mf.test(t)?vf:""===t?yf:bf)),r)}function xf(e,t,n=!1){let{routesMeta:r}=e,a={},l="/",o=[]
for(let i=0;i<r.length;++i){let e=r[i],u=i===r.length-1,s="/"===l?t:t.slice(l.length)||"/",c=Ef({path:e.relativePath,caseSensitive:e.caseSensitive,end:u},s),f=e.route
if(!c&&u&&n&&!r[r.length-1].route.index&&(c=Ef({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},s)),!c)return null
Object.assign(a,c.params),o.push({params:a,pathname:Lf([l,c.pathname]),pathnameBase:Rf(Lf([l,c.pathnameBase])),route:f}),"/"!==c.pathnameBase&&(l=Lf([l,c.pathnameBase]))}return o}function Ef(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0})
let[n,r]=function(e,t=!1,n=!0){of("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`)
let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")))
e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))")
let l=new RegExp(a,t?void 0:"i")
return[l,r]}(e.path,e.caseSensitive,e.end),a=t.match(n)
if(!a)return null
let l=a[0],o=l.replace(/(.)\/+$/,"$1"),i=a.slice(1)
return{params:r.reduce(((e,{paramName:t,isOptional:n},r)=>{if("*"===t){let e=i[r]||""
o=l.slice(0,l.length-e.length).replace(/(.)\/+$/,"$1")}const a=i[r]
return e[t]=n&&!a?void 0:(a||"").replace(/%2F/g,"/"),e}),{}),pathname:l,pathnameBase:o,pattern:e}}function Cf(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return of(!1,`The URL path "${e}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function _f(e,t){if("/"===t)return e
if(!e.toLowerCase().startsWith(t.toLowerCase()))return null
let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n)
return r&&"/"!==r?null:e.slice(n)||"/"}function Pf(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Nf(e){let t=function(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}(e)
return t.map(((e,n)=>n===t.length-1?e.pathname:e.pathnameBase))}function Tf(e,t,n,r=!1){let a
"string"==typeof e?a=ff(e):(a={...e},lf(!a.pathname||!a.pathname.includes("?"),Pf("?","pathname","search",a)),lf(!a.pathname||!a.pathname.includes("#"),Pf("#","pathname","hash",a)),lf(!a.search||!a.search.includes("#"),Pf("#","search","hash",a)))
let l,o=""===e||""===a.pathname,i=o?"/":a.pathname
if(null==i)l=n
else{let e=t.length-1
if(!r&&i.startsWith("..")){let t=i.split("/")
for(;".."===t[0];)t.shift(),e-=1
a.pathname=t.join("/")}l=e>=0?t[e]:"/"}let u=function(e,t="/"){let{pathname:n,search:r="",hash:a=""}="string"==typeof e?ff(e):e,l=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/")
return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t
return{pathname:l,search:zf(r),hash:Of(a)}}(a,l),s=i&&"/"!==i&&i.endsWith("/"),c=(o||"."===i)&&n.endsWith("/")
return u.pathname.endsWith("/")||!s&&!c||(u.pathname+="/"),u}var Lf=e=>e.join("/").replace(/\/\/+/g,"/"),Rf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),zf=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",Of=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:""
var Mf=["POST","PUT","PATCH","DELETE"]
new Set(Mf)
var Ff=["GET",...Mf]
new Set(Ff)
var Df=U.createContext(null)
Df.displayName="DataRouter"
var If=U.createContext(null)
If.displayName="DataRouterState"
var $f=U.createContext({isTransitioning:!1})
$f.displayName="ViewTransition",U.createContext(new Map).displayName="Fetchers",U.createContext(null).displayName="Await"
var Uf=U.createContext(null)
Uf.displayName="Navigation"
var Af=U.createContext(null)
Af.displayName="Location"
var jf=U.createContext({outlet:null,matches:[],isDataRoute:!1})
jf.displayName="Route"
var Bf=U.createContext(null)
function Wf(){return null!=U.useContext(Af)}function Vf(){return lf(Wf(),"useLocation() may be used only in the context of a <Router> component."),U.useContext(Af).location}Bf.displayName="RouteError"
var Hf="You should call navigate() in a React.useEffect(), not when your component is first rendered."
function Qf(e){U.useContext(Uf).static||U.useLayoutEffect(e)}function Kf(){let{isDataRoute:e}=U.useContext(jf)
return e?function(){let{router:e}=function(e){let t=U.useContext(Df)
return lf(t,ed(e)),t}("useNavigate"),t=td("useNavigate"),n=U.useRef(!1)
return Qf((()=>{n.current=!0})),U.useCallback((async(r,a={})=>{of(n.current,Hf),n.current&&("number"==typeof r?e.navigate(r):await e.navigate(r,{fromRouteId:t,...a}))}),[e,t])}():function(){lf(Wf(),"useNavigate() may be used only in the context of a <Router> component.")
let e=U.useContext(Df),{basename:t,navigator:n}=U.useContext(Uf),{matches:r}=U.useContext(jf),{pathname:a}=Vf(),l=JSON.stringify(Nf(r)),o=U.useRef(!1)
return Qf((()=>{o.current=!0})),U.useCallback(((r,i={})=>{if(of(o.current,Hf),!o.current)return
if("number"==typeof r)return void n.go(r)
let u=Tf(r,JSON.parse(l),a,"path"===i.relative)
null==e&&"/"!==t&&(u.pathname="/"===u.pathname?t:Lf([t,u.pathname])),(i.replace?n.replace:n.push)(u,i.state,i)}),[t,n,l,a,e])}()}function qf(e,{relative:t}={}){let{matches:n}=U.useContext(jf),{pathname:r}=Vf(),a=JSON.stringify(Nf(n))
return U.useMemo((()=>Tf(e,JSON.parse(a),r,"path"===t)),[e,a,r,t])}function Yf(e,t,n,r){var a
lf(Wf(),"useRoutes() may be used only in the context of a <Router> component.")
let{navigator:l}=U.useContext(Uf),{matches:o}=U.useContext(jf),i=o[o.length-1],u=i?i.params:{}
!i||i.pathname
let s=i?i.pathnameBase:"/"
i&&i.route
let c,f=Vf()
if(t){let e="string"==typeof t?ff(t):t
lf("/"===s||(null==(a=e.pathname)?void 0:a.startsWith(s)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${s}" but pathname "${e.pathname}" was given in the \`location\` prop.`),c=e}else c=f
let d=c.pathname||"/",p=d
if("/"!==s){let e=s.replace(/^\//,"").split("/")
p="/"+d.replace(/^\//,"").split("/").slice(e.length).join("/")}let h=df(e,{pathname:p}),m=function(e,t=[],n=null){if(null==e){if(!n)return null
if(n.errors)e=n.matches
else{if(0!==t.length||n.initialized||!(n.matches.length>0))return null
e=n.matches}}let r=e,a=null==n?void 0:n.errors
if(null!=a){let e=r.findIndex((e=>e.route.id&&void 0!==(null==a?void 0:a[e.route.id])))
lf(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),r=r.slice(0,Math.min(r.length,e+1))}let l=!1,o=-1
if(n)for(let i=0;i<r.length;i++){let e=r[i]
if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(o=i),e.route.id){let{loaderData:t,errors:a}=n,i=e.route.loader&&!t.hasOwnProperty(e.route.id)&&(!a||void 0===a[e.route.id])
if(e.route.lazy||i){l=!0,r=o>=0?r.slice(0,o+1):[r[0]]
break}}}return r.reduceRight(((e,i,u)=>{let s,c=!1,f=null,d=null
var p,h
n&&(s=a&&i.route.id?a[i.route.id]:void 0,f=i.route.errorElement||Jf,l&&(o<0&&0===u?(h="No `HydrateFallback` element provided to render during initial hydration",nd[p="route-fallback"]||(nd[p]=!0,of(!1,h)),c=!0,d=null):o===u&&(c=!0,d=i.route.hydrateFallbackElement||null)))
let m=t.concat(r.slice(0,u+1)),v=()=>{let t
return t=s?f:c?d:i.route.Component?U.createElement(i.route.Component,null):i.route.element?i.route.element:e,U.createElement(Zf,{match:i,routeContext:{outlet:e,matches:m,isDataRoute:null!=n},children:t})}
return n&&(i.route.ErrorBoundary||i.route.errorElement||0===u)?U.createElement(Gf,{location:n.location,revalidation:n.revalidation,component:f,error:s,children:v(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):v()}),null)}(h&&h.map((e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:Lf([s,l.encodeLocation?l.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?s:Lf([s,l.encodeLocation?l.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),o,n,r)
return t&&m?U.createElement(Af.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...c},navigationType:"POP"}},m):m}function Xf(){let e=function(){var e
let t=U.useContext(Bf),n=function(e){let t=U.useContext(If)
return lf(t,ed(e)),t}("useRouteError"),r=td("useRouteError")
if(void 0!==t)return t
return null==(e=n.errors)?void 0:e[r]}(),t=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"}
return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},t),n?U.createElement("pre",{style:r},n):null,null)}U.createContext(null)
var Jf=U.createElement(Xf,null),Gf=class extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){}render(){return void 0!==this.state.error?U.createElement(jf.Provider,{value:this.props.routeContext},U.createElement(Bf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}
function Zf({routeContext:e,match:t,children:n}){let r=U.useContext(Df)
return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),U.createElement(jf.Provider,{value:e},n)}function ed(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function td(e){let t=function(e){let t=U.useContext(jf)
return lf(t,ed(e)),t}(e),n=t.matches[t.matches.length-1]
return lf(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}var nd={}
function rd({to:e,replace:t,state:n,relative:r}){lf(Wf(),"<Navigate> may be used only in the context of a <Router> component.")
let{static:a}=U.useContext(Uf)
of(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.")
let{matches:l}=U.useContext(jf),{pathname:o}=Vf(),i=Kf(),u=Tf(e,Nf(l),o,"path"===r),s=JSON.stringify(u)
return U.useEffect((()=>{i(JSON.parse(s),{replace:t,state:n,relative:r})}),[i,s,r,t,n]),null}function ad(e){lf(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ld({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:a,static:l=!1}){lf(!Wf(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.")
let o=e.replace(/^\/*/,"/"),i=U.useMemo((()=>({basename:o,navigator:a,static:l,future:{}})),[o,a,l])
"string"==typeof n&&(n=ff(n))
let{pathname:u="/",search:s="",hash:c="",state:f=null,key:d="default"}=n,p=U.useMemo((()=>{let e=_f(u,o)
return null==e?null:{location:{pathname:e,search:s,hash:c,state:f,key:d},navigationType:r}}),[o,u,s,c,f,d,r])
return of(null!=p,`<Router basename="${o}"> is not able to match the URL "${u}${s}${c}" because it does not start with the basename, so the <Router> won't render anything.`),null==p?null:U.createElement(Uf.Provider,{value:i},U.createElement(Af.Provider,{children:t,value:p}))}function od({children:e,location:t}){return Yf(id(e),t)}function id(e,t=[]){let n=[]
return U.Children.forEach(e,((e,r)=>{if(!U.isValidElement(e))return
let a=[...t,r]
if(e.type===U.Fragment)return void n.push.apply(n,id(e.props.children,a))
lf(e.type===ad,`[${"string"==typeof e.type?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),lf(!e.props.index||!e.props.children,"An index route cannot have child routes.")
let l={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:!0===e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy}
e.props.children&&(l.children=id(e.props.children,a)),n.push(l)})),n}U.memo((function({routes:e,future:t,state:n}){return Yf(e,void 0,n,t)}))
var ud="get",sd="application/x-www-form-urlencoded"
function cd(e){return null!=e&&"string"==typeof e.tagName}var fd=null
var dd=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"])
function pd(e){return null==e||dd.has(e)?e:(of(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${sd}"`),null)}function hd(e,t){let n,r,a,l,o
if(cd(i=e)&&"form"===i.tagName.toLowerCase()){let o=e.getAttribute("action")
r=o?_f(o,t):null,n=e.getAttribute("method")||ud,a=pd(e.getAttribute("enctype"))||sd,l=new FormData(e)}else if(function(e){return cd(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return cd(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let o=e.form
if(null==o)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>')
let i=e.getAttribute("formaction")||o.getAttribute("action")
if(r=i?_f(i,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||ud,a=pd(e.getAttribute("formenctype"))||pd(o.getAttribute("enctype"))||sd,l=new FormData(o,e),!function(){if(null===fd)try{new FormData(document.createElement("form"),0),fd=!1}catch(e){fd=!0}return fd}()){let{name:t,type:n,value:r}=e
if("image"===n){let e=t?`${t}.`:""
l.append(`${e}x`,"0"),l.append(`${e}y`,"0")}else t&&l.append(t,r)}}else{if(cd(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">')
n=ud,r=null,a=sd,o=e}var i
return l&&"text/plain"===a&&(o=l,l=void 0),{action:r,method:n.toLowerCase(),encType:a,formData:l,body:o}}function md(e,t){if(!1===e||null==e)throw new Error(t)}function vd(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"==typeof e.imageSrcSet&&"string"==typeof e.imageSizes:"string"==typeof e.rel&&"string"==typeof e.href)}async function gd(e,t,n){return function(e,t){let n=new Set
return new Set(t),e.reduce(((e,t)=>{let r=JSON.stringify(function(e){let t={},n=Object.keys(e).sort()
for(let r of n)t[r]=e[r]
return t}(t))
return n.has(r)||(n.add(r),e.push({key:r,link:t})),e}),[])}((await Promise.all(e.map((async e=>{let r=t.routes[e.route.id]
if(r){let e=await async function(e,t){if(e.id in t)return t[e.id]
try{let n=await import(e.module)
return t[e.id]=n,n}catch(n){return window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise((()=>{}))}}(r,n)
return e.links?e.links():[]}return[]})))).flat(1).filter(vd).filter((e=>"stylesheet"===e.rel||"preload"===e.rel)).map((e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"})))}function yd(e,t,n,r,a,l){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,i=(e,t)=>{var r
return n[t].pathname!==e.pathname||(null==(r=n[t].route.path)?void 0:r.endsWith("*"))&&n[t].params["*"]!==e.params["*"]}
return"assets"===l?t.filter(((e,t)=>o(e,t)||i(e,t))):"data"===l?t.filter(((t,l)=>{var u
let s=r.routes[t.route.id]
if(!s||!s.hasLoader)return!1
if(o(t,l)||i(t,l))return!0
if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:(null==(u=n[0])?void 0:u.params)||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0})
if("boolean"==typeof r)return r}return!0})):[]}function bd(e,t){return n=e.map((e=>{let n=t.routes[e.route.id]
if(!n)return[]
let r=[n.module]
return n.imports&&(r=r.concat(n.imports)),r})).flat(1),[...new Set(n)]
var n}var wd=U.createContext(void 0)
function kd(){let e=U.useContext(wd)
return md(e,"You must render this element inside a <HydratedRouter> element"),e}function Sd(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function xd({page:e,...t}){let{router:n}=function(){let e=U.useContext(Df)
return md(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}(),r=U.useMemo((()=>df(n.routes,e,n.basename)),[n.routes,e,n.basename])
return r?U.createElement(Ed,{page:e,matches:r,...t}):null}function Ed({page:e,matches:t,...n}){let r=Vf(),{manifest:a,routeModules:l}=kd(),{loaderData:o,matches:i}=function(){let e=U.useContext(If)
return md(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}(),u=U.useMemo((()=>yd(e,t,i,a,r,"data")),[e,t,i,a,r]),s=U.useMemo((()=>yd(e,t,i,a,r,"assets")),[e,t,i,a,r]),c=U.useMemo((()=>{if(e===r.pathname+r.search+r.hash)return[]
let n=new Set,i=!1
if(t.forEach((e=>{var t
let r=a.routes[e.route.id]
r&&r.hasLoader&&(!u.some((t=>t.route.id===e.route.id))&&e.route.id in o&&(null==(t=l[e.route.id])?void 0:t.shouldRevalidate)||r.hasClientLoader?i=!0:n.add(e.route.id))})),0===n.size)return[]
let s=function(e){let t="string"==typeof e?new URL(e,"undefined"==typeof window?"server://singlefetch/":window.location.origin):e
return"/"===t.pathname?t.pathname="_root.data":t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}(e)
return i&&n.size>0&&s.searchParams.set("_routes",t.filter((e=>n.has(e.route.id))).map((e=>e.route.id)).join(",")),[s.pathname+s.search]}),[o,r,a,u,t,e,l]),f=U.useMemo((()=>bd(s,a)),[s,a]),d=function(e){let{manifest:t,routeModules:n}=kd(),[r,a]=U.useState([])
return U.useEffect((()=>{let r=!1
return gd(e,t,n).then((e=>{r||a(e)})),()=>{r=!0}}),[e,t,n]),r}(s)
return U.createElement(U.Fragment,null,c.map((e=>U.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...n}))),f.map((e=>U.createElement("link",{key:e,rel:"modulepreload",href:e,...n}))),d.map((({key:e,link:t})=>U.createElement("link",{key:e,...t}))))}function Cd(...e){return t=>{e.forEach((e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)}))}}wd.displayName="FrameworkContext"
var _d="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement
try{_d&&(window.__reactRouterVersion="7.0.1")}catch(Od){}function Pd({basename:e,children:t,window:n}){let r=U.useRef()
null==r.current&&(r.current=af({window:n,v5Compat:!0}))
let a=r.current,[l,o]=U.useState({action:a.action,location:a.location}),i=U.useCallback((e=>{U.startTransition((()=>o(e)))}),[o])
return U.useLayoutEffect((()=>a.listen(i)),[a,i]),U.createElement(ld,{basename:e,children:t,location:l.location,navigationType:l.action,navigator:a})}var Nd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Td=U.forwardRef((function({onClick:e,discover:t="render",prefetch:n="none",relative:r,reloadDocument:a,replace:l,state:o,target:i,to:u,preventScrollReset:s,viewTransition:c,...f},d){let p,{basename:h}=U.useContext(Uf),m="string"==typeof u&&Nd.test(u),v=!1
if("string"==typeof u&&m&&(p=u,_d))try{let e=new URL(window.location.href),t=u.startsWith("//")?new URL(e.protocol+u):new URL(u),n=_f(t.pathname,h)
t.origin===e.origin&&null!=n?u=n+t.search+t.hash:v=!0}catch(Od){of(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let g=function(e,{relative:t}={}){lf(Wf(),"useHref() may be used only in the context of a <Router> component.")
let{basename:n,navigator:r}=U.useContext(Uf),{hash:a,pathname:l,search:o}=qf(e,{relative:t}),i=l
return"/"!==n&&(i="/"===l?n:Lf([n,l])),r.createHref({pathname:i,search:o,hash:a})}(u,{relative:r}),[y,b,w]=function(e,t){let n=U.useContext(wd),[r,a]=U.useState(!1),[l,o]=U.useState(!1),{onFocus:i,onBlur:u,onMouseEnter:s,onMouseLeave:c,onTouchStart:f}=t,d=U.useRef(null)
U.useEffect((()=>{if("render"===e&&o(!0),"viewport"===e){let e=new IntersectionObserver((e=>{e.forEach((e=>{o(e.isIntersecting)}))}),{threshold:.5})
return d.current&&e.observe(d.current),()=>{e.disconnect()}}}),[e]),U.useEffect((()=>{if(r){let e=setTimeout((()=>{o(!0)}),100)
return()=>{clearTimeout(e)}}}),[r])
let p=()=>{a(!0)},h=()=>{a(!1),o(!1)}
return n?"intent"!==e?[l,d,{}]:[l,d,{onFocus:Sd(i,p),onBlur:Sd(u,h),onMouseEnter:Sd(s,p),onMouseLeave:Sd(c,h),onTouchStart:Sd(f,p)}]:[!1,d,{}]}(n,f),k=function(e,{target:t,replace:n,state:r,preventScrollReset:a,relative:l,viewTransition:o}={}){let i=Kf(),u=Vf(),s=qf(e,{relative:l})
return U.useCallback((c=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(c,t)){c.preventDefault()
let t=void 0!==n?n:cf(u)===cf(s)
i(e,{replace:t,state:r,preventScrollReset:a,relative:l,viewTransition:o})}}),[u,i,s,n,r,t,e,a,l,o])}(u,{replace:l,state:o,target:i,preventScrollReset:s,relative:r,viewTransition:c})
let S=U.createElement("a",{...f,...w,href:p||g,onClick:v||a?e:function(t){e&&e(t),t.defaultPrevented||k(t)},ref:Cd(d,b),target:i,"data-discover":m||"render"!==t?void 0:"true"})
return y&&!m?U.createElement(U.Fragment,null,S,U.createElement(xd,{page:g})):S}))
function Ld(e){let t=U.useContext(Df)
return lf(t,function(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}(e)),t}Td.displayName="Link",U.forwardRef((function({"aria-current":e="page",caseSensitive:t=!1,className:n="",end:r=!1,style:a,to:l,viewTransition:o,children:i,...u},s){let c=qf(l,{relative:u.relative}),f=Vf(),d=U.useContext(If),{navigator:p,basename:h}=U.useContext(Uf),m=null!=d&&function(e,t={}){let n=U.useContext($f)
lf(null!=n,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?")
let{basename:r}=Ld("useViewTransitionState"),a=qf(e,{relative:t.relative})
if(!n.isTransitioning)return!1
let l=_f(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=_f(n.nextLocation.pathname,r)||n.nextLocation.pathname
return null!=Ef(a.pathname,o)||null!=Ef(a.pathname,l)}(c)&&!0===o,v=p.encodeLocation?p.encodeLocation(c).pathname:c.pathname,g=f.pathname,y=d&&d.navigation&&d.navigation.location?d.navigation.location.pathname:null
t||(g=g.toLowerCase(),y=y?y.toLowerCase():null,v=v.toLowerCase()),y&&h&&(y=_f(y,h)||y)
const b="/"!==v&&v.endsWith("/")?v.length-1:v.length
let w,k=g===v||!r&&g.startsWith(v)&&"/"===g.charAt(b),S=null!=y&&(y===v||!r&&y.startsWith(v)&&"/"===y.charAt(v.length)),x={isActive:k,isPending:S,isTransitioning:m},E=k?e:void 0
w="function"==typeof n?n(x):[n,k?"active":null,S?"pending":null,m?"transitioning":null].filter(Boolean).join(" ")
let C="function"==typeof a?a(x):a
return U.createElement(Td,{...u,"aria-current":E,className:w,ref:s,style:C,to:l,viewTransition:o},"function"==typeof i?i(x):i)})).displayName="NavLink",U.forwardRef((({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:a,state:l,method:o=ud,action:i,onSubmit:u,relative:s,preventScrollReset:c,viewTransition:f,...d},p)=>{let h=function(){let{router:e}=Ld("useSubmit"),{basename:t}=U.useContext(Uf),n=td("useRouteId")
return U.useCallback((async(r,a={})=>{let{action:l,method:o,encType:i,formData:u,body:s}=hd(r,t)
if(!1===a.navigate){let t=a.fetcherKey||zd()
await e.fetch(t,n,a.action||l,{preventScrollReset:a.preventScrollReset,formData:u,body:s,formMethod:a.method||o,formEncType:a.encType||i,flushSync:a.flushSync})}else await e.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:u,body:s,formMethod:a.method||o,formEncType:a.encType||i,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})}),[e,t,n])}(),m=function(e,{relative:t}={}){let{basename:n}=U.useContext(Uf),r=U.useContext(jf)
lf(r,"useFormAction must be used inside a RouteContext")
let[a]=r.matches.slice(-1),l={...qf(e||".",{relative:t})},o=Vf()
if(null==e){l.search=o.search
let e=new URLSearchParams(l.search),t=e.getAll("index")
if(t.some((e=>""===e))){e.delete("index"),t.filter((e=>e)).forEach((t=>e.append("index",t)))
let n=e.toString()
l.search=n?`?${n}`:""}}e&&"."!==e||!a.route.index||(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index")
"/"!==n&&(l.pathname="/"===l.pathname?n:Lf([n,l.pathname]))
return cf(l)}(i,{relative:s}),v="get"===o.toLowerCase()?"get":"post",g="string"==typeof i&&Nd.test(i)
return U.createElement("form",{ref:p,method:v,action:m,onSubmit:r?u:e=>{if(u&&u(e),e.defaultPrevented)return
e.preventDefault()
let r=e.nativeEvent.submitter,i=(null==r?void 0:r.getAttribute("formmethod"))||o
h(r||e.currentTarget,{fetcherKey:t,method:i,navigate:n,replace:a,state:l,relative:s,preventScrollReset:c,viewTransition:f})},...d,"data-discover":g||"render"!==e?void 0:"true"})})).displayName="Form"
var Rd=0,zd=()=>`__${String(++Rd)}__`
new TextEncoder
export{Pd as B,Td as L,rd as N,A as R,Qc as a,od as b,e as c,ad as d,t as e,n as g,U as r,Vf as u}
