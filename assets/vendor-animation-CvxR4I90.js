import{r as t,R as e}from"./vendor-react-DujXGBlD.js"
var n={exports:{}},i={},o=t,s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0}
function c(t,e,n){var i,o={},r=null,c=null
for(i in void 0!==n&&(r=""+n),void 0!==e.key&&(r=""+e.key),void 0!==e.ref&&(c=e.ref),e)a.call(e,i)&&!u.hasOwnProperty(i)&&(o[i]=e[i])
if(t&&t.defaultProps)for(i in e=t.defaultProps)void 0===o[i]&&(o[i]=e[i])
return{$$typeof:s,type:t,key:r,ref:c,props:o,_owner:l.current}}i.Fragment=r,i.jsx=c,i.jsxs=c,n.exports=i
var h=n.exports
function d(t){if("undefined"==typeof Proxy)return t
const e=new Map
return new Proxy(((...e)=>t(...e)),{get:(n,i)=>"create"===i?t:(e.has(i)||e.set(i,t(i)),e.get(i))})}function p(t){return null!==t&&"object"==typeof t&&"function"==typeof t.start}const m=t=>Array.isArray(t)
function f(t,e){if(!Array.isArray(e))return!1
const n=e.length
if(n!==t.length)return!1
for(let i=0;i<n;i++)if(e[i]!==t[i])return!1
return!0}function v(t){return"string"==typeof t||Array.isArray(t)}function g(t){const e=[{},{}]
return null==t||t.values.forEach(((t,n)=>{e[0][n]=t.get(),e[1][n]=t.getVelocity()})),e}function y(t,e,n,i){if("function"==typeof e){const[o,s]=g(i)
e=e(void 0!==n?n:t.custom,o,s)}if("string"==typeof e&&(e=t.variants&&t.variants[e]),"function"==typeof e){const[o,s]=g(i)
e=e(void 0!==n?n:t.custom,o,s)}return e}function x(t,e,n){const i=t.getProps()
return y(i,e,void 0!==n?n:i.custom,t)}const P=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],w=["initial",...P],S=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],b=new Set(S),T=t=>1e3*t,C=t=>t/1e3,A={type:"spring",stiffness:500,damping:25,restSpeed:10},E={type:"keyframes",duration:.8},M={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},k=(t,{keyframes:e})=>e.length>2?E:b.has(t)?t.startsWith("scale")?{type:"spring",stiffness:550,damping:0===e[1]?2*Math.sqrt(550):30,restSpeed:10}:A:M
function D(t,e){return t?t[e]||t.default||t:void 0}const V=!1,R=t=>null!==t
function L(t,{repeat:e,repeatType:n="loop"},i){const o=t.filter(R),s=e&&"loop"!==n&&e%2==1?0:o.length-1
return s&&void 0!==i?i:o[s]}const j=t=>t
const B=["read","resolveKeyframes","update","preRender","render","postRender"]
function O(t,e){let n=!1,i=!0
const o={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,r=B.reduce(((t,e)=>(t[e]=function(t){let e=new Set,n=new Set,i=!1,o=!1
const s=new WeakSet
let r={delta:0,timestamp:0,isProcessing:!1}
function a(e){s.has(e)&&(l.schedule(e),t()),e(r)}const l={schedule:(t,o=!1,r=!1)=>{const a=r&&i?e:n
return o&&s.add(t),a.has(t)||a.add(t),t},cancel:t=>{n.delete(t),s.delete(t)},process:t=>{r=t,i?o=!0:(i=!0,[e,n]=[n,e],n.clear(),e.forEach(a),i=!1,o&&(o=!1,l.process(t)))}}
return l}(s),t)),{}),{read:a,resolveKeyframes:l,update:u,preRender:c,render:h,postRender:d}=r,p=()=>{const s=performance.now()
n=!1,o.delta=i?1e3/60:Math.max(Math.min(s-o.timestamp,40),1),o.timestamp=s,o.isProcessing=!0,a.process(o),l.process(o),u.process(o),c.process(o),h.process(o),d.process(o),o.isProcessing=!1,n&&e&&(i=!1,t(p))}
return{schedule:B.reduce(((e,s)=>{const a=r[s]
return e[s]=(e,s=!1,r=!1)=>(n||(n=!0,i=!0,o.isProcessing||t(p)),a.schedule(e,s,r)),e}),{}),cancel:t=>{for(let e=0;e<B.length;e++)r[B[e]].cancel(t)},state:o,steps:r}}const{schedule:F,cancel:I,state:Y,steps:N}=O("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:j,!0),X=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t
function W(t,e,n,i){if(t===e&&n===i)return j
const o=e=>function(t,e,n,i,o){let s,r,a=0
do{r=e+(n-e)/2,s=X(r,i,o)-t,s>0?n=r:e=r}while(Math.abs(s)>1e-7&&++a<12)
return r}(e,0,1,t,n)
return t=>0===t||1===t?t:X(o(t),e,i)}const z=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,U=t=>e=>1-t(1-e),K=W(.33,1.53,.69,.99),_=U(K),$=z(_),H=t=>(t*=2)<1?.5*_(t):.5*(2-Math.pow(2,-10*(t-1))),G=t=>1-Math.sin(Math.acos(t)),Z=U(G),q=z(G),Q=t=>/^0[^.\s]+$/u.test(t)
let J=j
const tt=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),et=t=>e=>"string"==typeof e&&e.startsWith(t),nt=et("--"),it=et("var(--"),ot=t=>!!it(t)&&st.test(t.split("/*")[0].trim()),st=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,rt=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
function at(t,e,n=1){const[i,o]=function(t){const e=rt.exec(t)
if(!e)return[,]
const[,n,i,o]=e
return[`--${null!=n?n:i}`,o]}(t)
if(!i)return
const s=window.getComputedStyle(e).getPropertyValue(i)
if(s){const t=s.trim()
return tt(t)?parseFloat(t):t}return ot(o)?at(o,e,n+1):o}const lt=(t,e,n)=>n>e?e:n<t?t:n,ut={test:t=>"number"==typeof t,parse:parseFloat,transform:t=>t},ct={...ut,transform:t=>lt(0,1,t)},ht={...ut,default:1},dt=t=>({test:e=>"string"==typeof e&&e.endsWith(t)&&1===e.split(" ").length,parse:parseFloat,transform:e=>`${e}${t}`}),pt=dt("deg"),mt=dt("%"),ft=dt("px"),vt=dt("vh"),gt=dt("vw"),yt={...mt,parse:t=>mt.parse(t)/100,transform:t=>mt.transform(100*t)},xt=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Pt=t=>t===ut||t===ft,wt=(t,e)=>parseFloat(t.split(", ")[e]),St=(t,e)=>(n,{transform:i})=>{if("none"===i||!i)return 0
const o=i.match(/^matrix3d\((.+)\)$/u)
if(o)return wt(o[1],e)
{const e=i.match(/^matrix\((.+)\)$/u)
return e?wt(e[1],t):0}},bt=new Set(["x","y","z"]),Tt=S.filter((t=>!bt.has(t)))
const Ct={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:St(4,13),y:St(5,14)}
Ct.translateX=Ct.x,Ct.translateY=Ct.y
const At=t=>e=>e.test(t),Et=[ut,ft,mt,pt,gt,vt,{test:t=>"auto"===t,parse:t=>t}],Mt=t=>Et.find(At(t)),kt=new Set
let Dt=!1,Vt=!1
function Rt(){if(Vt){const t=Array.from(kt).filter((t=>t.needsMeasurement)),e=new Set(t.map((t=>t.element))),n=new Map
e.forEach((t=>{const e=function(t){const e=[]
return Tt.forEach((n=>{const i=t.getValue(n)
void 0!==i&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))})),e}(t)
e.length&&(n.set(t,e),t.render())})),t.forEach((t=>t.measureInitialState())),e.forEach((t=>{t.render()
const e=n.get(t)
e&&e.forEach((([e,n])=>{var i
null===(i=t.getValue(e))||void 0===i||i.set(n)}))})),t.forEach((t=>t.measureEndState())),t.forEach((t=>{void 0!==t.suspendedScrollY&&window.scrollTo(0,t.suspendedScrollY)}))}Vt=!1,Dt=!1,kt.forEach((t=>t.complete())),kt.clear()}function Lt(){kt.forEach((t=>{t.readKeyframes(),t.needsMeasurement&&(Vt=!0)}))}class jt{constructor(t,e,n,i,o,s=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=e,this.name=n,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.isScheduled=!0,this.isAsync?(kt.add(this),Dt||(Dt=!0,F.read(Lt),F.resolveKeyframes(Rt))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:e,element:n,motionValue:i}=this
for(let o=0;o<t.length;o++)if(null===t[o])if(0===o){const o=null==i?void 0:i.get(),s=t[t.length-1]
if(void 0!==o)t[0]=o
else if(n&&e){const i=n.readValue(e,s)
null!=i&&(t[0]=i)}void 0===t[0]&&(t[0]=s),i&&void 0===o&&i.set(t[0])}else t[o]=t[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),kt.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,kt.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Bt=t=>Math.round(1e5*t)/1e5,Ot=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu
const Ft=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,It=(t,e)=>n=>Boolean("string"==typeof n&&Ft.test(n)&&n.startsWith(t)||e&&!function(t){return null==t}(n)&&Object.prototype.hasOwnProperty.call(n,e)),Yt=(t,e,n)=>i=>{if("string"!=typeof i)return i
const[o,s,r,a]=i.match(Ot)
return{[t]:parseFloat(o),[e]:parseFloat(s),[n]:parseFloat(r),alpha:void 0!==a?parseFloat(a):1}},Nt={...ut,transform:t=>Math.round((t=>lt(0,255,t))(t))},Xt={test:It("rgb","red"),parse:Yt("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Nt.transform(t)+", "+Nt.transform(e)+", "+Nt.transform(n)+", "+Bt(ct.transform(i))+")"}
const Wt={test:It("#"),parse:function(t){let e="",n="",i="",o=""
return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),o=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),o=t.substring(4,5),e+=e,n+=n,i+=i,o+=o),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:o?parseInt(o,16)/255:1}},transform:Xt.transform},zt={test:It("hsl","hue"),parse:Yt("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+mt.transform(Bt(e))+", "+mt.transform(Bt(n))+", "+Bt(ct.transform(i))+")"},Ut={test:t=>Xt.test(t)||Wt.test(t)||zt.test(t),parse:t=>Xt.test(t)?Xt.parse(t):zt.test(t)?zt.parse(t):Wt.parse(t),transform:t=>"string"==typeof t?t:t.hasOwnProperty("red")?Xt.transform(t):zt.transform(t)},Kt=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu
const _t="number",$t="color",Ht=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu
function Gt(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},o=[]
let s=0
const r=e.replace(Ht,(t=>(Ut.test(t)?(i.color.push(s),o.push($t),n.push(Ut.parse(t))):t.startsWith("var(")?(i.var.push(s),o.push("var"),n.push(t)):(i.number.push(s),o.push(_t),n.push(parseFloat(t))),++s,"${}"))).split("${}")
return{values:n,split:r,indexes:i,types:o}}function Zt(t){return Gt(t).values}function qt(t){const{split:e,types:n}=Gt(t),i=e.length
return t=>{let o=""
for(let s=0;s<i;s++)if(o+=e[s],void 0!==t[s]){const e=n[s]
o+=e===_t?Bt(t[s]):e===$t?Ut.transform(t[s]):t[s]}return o}}const Qt=t=>"number"==typeof t?0:t
const Jt={test:function(t){var e,n
return isNaN(t)&&"string"==typeof t&&((null===(e=t.match(Ot))||void 0===e?void 0:e.length)||0)+((null===(n=t.match(Kt))||void 0===n?void 0:n.length)||0)>0},parse:Zt,createTransformer:qt,getAnimatableNone:function(t){const e=Zt(t)
return qt(t)(e.map(Qt))}},te=new Set(["brightness","contrast","saturate","opacity"])
function ee(t){const[e,n]=t.slice(0,-1).split("(")
if("drop-shadow"===e)return t
const[i]=n.match(Ot)||[]
if(!i)return t
const o=n.replace(i,"")
let s=te.has(e)?1:0
return i!==n&&(s*=100),e+"("+s+o+")"}const ne=/\b([a-z-]*)\(.*?\)/gu,ie={...Jt,getAnimatableNone:t=>{const e=t.match(ne)
return e?e.map(ee).join(" "):t}},oe={borderWidth:ft,borderTopWidth:ft,borderRightWidth:ft,borderBottomWidth:ft,borderLeftWidth:ft,borderRadius:ft,radius:ft,borderTopLeftRadius:ft,borderTopRightRadius:ft,borderBottomRightRadius:ft,borderBottomLeftRadius:ft,width:ft,maxWidth:ft,height:ft,maxHeight:ft,top:ft,right:ft,bottom:ft,left:ft,padding:ft,paddingTop:ft,paddingRight:ft,paddingBottom:ft,paddingLeft:ft,margin:ft,marginTop:ft,marginRight:ft,marginBottom:ft,marginLeft:ft,backgroundPositionX:ft,backgroundPositionY:ft},se={rotate:pt,rotateX:pt,rotateY:pt,rotateZ:pt,scale:ht,scaleX:ht,scaleY:ht,scaleZ:ht,skew:pt,skewX:pt,skewY:pt,distance:ft,translateX:ft,translateY:ft,translateZ:ft,x:ft,y:ft,z:ft,perspective:ft,transformPerspective:ft,opacity:ct,originX:yt,originY:yt,originZ:ft},re={...ut,transform:Math.round},ae={...oe,...se,zIndex:re,size:ft,fillOpacity:ct,strokeOpacity:ct,numOctaves:re},le={...ae,color:Ut,backgroundColor:Ut,outlineColor:Ut,fill:Ut,stroke:Ut,borderColor:Ut,borderTopColor:Ut,borderRightColor:Ut,borderBottomColor:Ut,borderLeftColor:Ut,filter:ie,WebkitFilter:ie},ue=t=>le[t]
function ce(t,e){let n=ue(t)
return n!==ie&&(n=Jt),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const he=new Set(["auto","none","0"])
class de extends jt{constructor(t,e,n,i,o){super(t,e,n,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:e,name:n}=this
if(!e||!e.current)return
super.readKeyframes()
for(let a=0;a<t.length;a++){let n=t[a]
if("string"==typeof n&&(n=n.trim(),ot(n))){const i=at(n,e.current)
void 0!==i&&(t[a]=i),a===t.length-1&&(this.finalKeyframe=n)}}if(this.resolveNoneKeyframes(),!xt.has(n)||2!==t.length)return
const[i,o]=t,s=Mt(i),r=Mt(o)
if(s!==r)if(Pt(s)&&Pt(r))for(let a=0;a<t.length;a++){const e=t[a]
"string"==typeof e&&(t[a]=parseFloat(e))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:e}=this,n=[]
for(let o=0;o<t.length;o++)("number"==typeof(i=t[o])?0===i:null===i||"none"===i||"0"===i||Q(i))&&n.push(o)
var i
n.length&&function(t,e,n){let i,o=0
for(;o<t.length&&!i;){const e=t[o]
"string"==typeof e&&!he.has(e)&&Gt(e).values.length&&(i=t[o]),o++}if(i&&n)for(const s of e)t[s]=ce(n,i)}(t,n,e)}measureInitialState(){const{element:t,unresolvedKeyframes:e,name:n}=this
if(!t||!t.current)return
"height"===n&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ct[n](t.measureViewportBox(),window.getComputedStyle(t.current)),e[0]=this.measuredOrigin
const i=e[e.length-1]
void 0!==i&&t.getValue(n,i).jump(i,!1)}measureEndState(){var t
const{element:e,name:n,unresolvedKeyframes:i}=this
if(!e||!e.current)return
const o=e.getValue(n)
o&&o.jump(this.measuredOrigin,!1)
const s=i.length-1,r=i[s]
i[s]=Ct[n](e.measureViewportBox(),window.getComputedStyle(e.current)),null!==r&&void 0===this.finalKeyframe&&(this.finalKeyframe=r),(null===(t=this.removedTransforms)||void 0===t?void 0:t.length)&&this.removedTransforms.forEach((([t,n])=>{e.getValue(t).set(n)})),this.resolveNoneKeyframes()}}function pe(t){return"function"==typeof t}let me
function fe(){me=void 0}const ve={now:()=>(void 0===me&&ve.set(Y.isProcessing||V?Y.timestamp:performance.now()),me),set:t=>{me=t,queueMicrotask(fe)}},ge=(t,e)=>"zIndex"!==e&&(!("number"!=typeof t&&!Array.isArray(t))||!("string"!=typeof t||!Jt.test(t)&&"0"!==t||t.startsWith("url(")))
class ye{constructor({autoplay:t=!0,delay:e=0,type:n="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",...r}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=ve.now(),this.options={autoplay:t,delay:e,type:n,repeat:i,repeatDelay:o,repeatType:s,...r},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt}get resolved(){return this._resolved||this.hasAttemptedResolve||(Lt(),Rt()),this._resolved}onKeyframesResolved(t,e){this.resolvedAt=ve.now(),this.hasAttemptedResolve=!0
const{name:n,type:i,velocity:o,delay:s,onComplete:r,onUpdate:a,isGenerator:l}=this.options
if(!l&&!function(t,e,n,i){const o=t[0]
if(null===o)return!1
if("display"===e||"visibility"===e)return!0
const s=t[t.length-1],r=ge(o,e),a=ge(s,e)
return!(!r||!a)&&(function(t){const e=t[0]
if(1===t.length)return!0
for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}(t)||("spring"===n||pe(n))&&i)}(t,n,i,o)){if(!s)return null==a||a(L(t,this.options,e)),null==r||r(),void this.resolveFinishedPromise()
this.options.duration=0}const u=this.initPlayback(t,e)
!1!==u&&(this._resolved={keyframes:t,finalKeyframe:e,...u},this.onPostResolved())}onPostResolved(){}then(t,e){return this.currentFinishedPromise.then(t,e)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise((t=>{this.resolveFinishedPromise=t}))}}const xe=(t,e,n)=>{const i=e-t
return 0===i?1:(n-t)/i},Pe=(t,e,n=10)=>{let i=""
const o=Math.max(Math.round(e/n),2)
for(let s=0;s<o;s++)i+=t(xe(0,o-1,s))+", "
return`linear(${i.substring(0,i.length-2)})`}
function we(t,e){return e?t*(1e3/e):0}function Se(t,e,n){const i=Math.max(e-5,0)
return we(n-t(i),e-i)}const be=100,Te=10,Ce=1,Ae=0,Ee=800,Me=.3,ke=.3,De={granular:.01,default:2},Ve={granular:.005,default:.5},Re=.01,Le=10,je=.05,Be=1,Oe=.001
function Fe({duration:t=Ee,bounce:e=Me,velocity:n=Ae,mass:i=Ce}){let o,s,r=1-e
r=lt(je,Be,r),t=lt(Re,Le,C(t)),r<1?(o=e=>{const i=e*r,o=i*t,s=i-n,a=Ye(e,r),l=Math.exp(-o)
return Oe-s/a*l},s=e=>{const i=e*r*t,s=i*n+n,a=Math.pow(r,2)*Math.pow(e,2)*t,l=Math.exp(-i),u=Ye(Math.pow(e,2),r)
return(-o(e)+Oe>0?-1:1)*((s-a)*l)/u}):(o=e=>Math.exp(-e*t)*((e-n)*t+1)-.001,s=e=>Math.exp(-e*t)*(t*t*(n-e)))
const a=function(t,e,n){let i=n
for(let o=1;o<Ie;o++)i-=t(i)/e(i)
return i}(o,s,5/t)
if(t=T(t),isNaN(a))return{stiffness:be,damping:Te,duration:t}
{const e=Math.pow(a,2)*i
return{stiffness:e,damping:2*r*Math.sqrt(i*e),duration:t}}}const Ie=12
function Ye(t,e){return t*Math.sqrt(1-e*e)}const Ne=2e4
function Xe(t){let e=0
let n=t.next(e)
for(;!n.done&&e<Ne;)e+=50,n=t.next(e)
return e>=Ne?1/0:e}const We=["duration","bounce"],ze=["stiffness","damping","mass"]
function Ue(t,e){return e.some((e=>void 0!==t[e]))}function Ke(t=ke,e=Me){const n="object"!=typeof t?{visualDuration:t,keyframes:[0,1],bounce:e}:t
let{restSpeed:i,restDelta:o}=n
const s=n.keyframes[0],r=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:u,mass:c,duration:h,velocity:d,isResolvedFromDuration:p}=function(t){let e={velocity:Ae,stiffness:be,damping:Te,mass:Ce,isResolvedFromDuration:!1,...t}
if(!Ue(t,ze)&&Ue(t,We))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(1.2*n),o=i*i,s=2*lt(.05,1,1-t.bounce)*Math.sqrt(o)
e={...e,mass:Ce,stiffness:o,damping:s}}else{const n=Fe(t)
e={...e,...n,mass:Ce},e.isResolvedFromDuration=!0}return e}({...n,velocity:-C(n.velocity||0)}),m=d||0,f=u/(2*Math.sqrt(l*c)),v=r-s,g=C(Math.sqrt(l/c)),y=Math.abs(v)<5
let x
if(i||(i=y?De.granular:De.default),o||(o=y?Ve.granular:Ve.default),f<1){const t=Ye(g,f)
x=e=>{const n=Math.exp(-f*g*e)
return r-n*((m+f*g*v)/t*Math.sin(t*e)+v*Math.cos(t*e))}}else if(1===f)x=t=>r-Math.exp(-g*t)*(v+(m+g*v)*t)
else{const t=g*Math.sqrt(f*f-1)
x=e=>{const n=Math.exp(-f*g*e),i=Math.min(t*e,300)
return r-n*((m+f*g*v)*Math.sinh(i)+t*v*Math.cosh(i))/t}}const P={calculatedDuration:p&&h||null,next:t=>{const e=x(t)
if(p)a.done=t>=h
else{let n=0
f<1&&(n=0===t?T(m):Se(x,t,e))
const s=Math.abs(n)<=i,l=Math.abs(r-e)<=o
a.done=s&&l}return a.value=a.done?r:e,a},toString:()=>{const t=Math.min(Xe(P),Ne),e=Pe((e=>P.next(t*e).value),t,30)
return t+"ms "+e}}
return P}function _e({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:o=10,bounceStiffness:s=500,modifyTarget:r,min:a,max:l,restDelta:u=.5,restSpeed:c}){const h=t[0],d={done:!1,value:h},p=t=>void 0===a?l:void 0===l||Math.abs(a-t)<Math.abs(l-t)?a:l
let m=n*e
const f=h+m,v=void 0===r?f:r(f)
v!==f&&(m=v-h)
const g=t=>-m*Math.exp(-t/i),y=t=>v+g(t),x=t=>{const e=g(t),n=y(t)
d.done=Math.abs(e)<=u,d.value=d.done?v:n}
let P,w
const S=t=>{var e;(e=d.value,void 0!==a&&e<a||void 0!==l&&e>l)&&(P=t,w=Ke({keyframes:[d.value,p(d.value)],velocity:Se(y,t,d.value),damping:o,stiffness:s,restDelta:u,restSpeed:c}))}
return S(0),{calculatedDuration:null,next:t=>{let e=!1
return w||void 0!==P||(e=!0,x(t),S(t)),void 0!==P&&t>=P?w.next(t-P):(!e&&x(t),d)}}}const $e=W(.42,0,1,1),He=W(0,0,.58,1),Ge=W(.42,0,.58,1),Ze=t=>Array.isArray(t)&&"number"==typeof t[0],qe={linear:j,easeIn:$e,easeInOut:Ge,easeOut:He,circIn:G,circInOut:q,circOut:Z,backIn:_,backInOut:$,backOut:K,anticipate:H},Qe=t=>{if(Ze(t)){J(4===t.length)
const[e,n,i,o]=t
return W(e,n,i,o)}return"string"==typeof t?(J(void 0!==qe[t]),qe[t]):t},Je=(t,e)=>n=>e(t(n)),tn=(...t)=>t.reduce(Je),en=(t,e,n)=>t+(e-t)*n
function nn(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function on(t,e){return n=>n>0?e:t}const sn=(t,e,n)=>{const i=t*t,o=n*(e*e-i)+i
return o<0?0:Math.sqrt(o)},rn=[Wt,Xt,zt]
function an(t){const e=(n=t,rn.find((t=>t.test(n))))
var n
if(!Boolean(e))return!1
let i=e.parse(t)
return e===zt&&(i=function({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,n/=100
let o=0,s=0,r=0
if(e/=100){const i=n<.5?n*(1+e):n+e-n*e,a=2*n-i
o=nn(a,i,t+1/3),s=nn(a,i,t),r=nn(a,i,t-1/3)}else o=s=r=n
return{red:Math.round(255*o),green:Math.round(255*s),blue:Math.round(255*r),alpha:i}}(i)),i}const ln=(t,e)=>{const n=an(t),i=an(e)
if(!n||!i)return on(t,e)
const o={...n}
return t=>(o.red=sn(n.red,i.red,t),o.green=sn(n.green,i.green,t),o.blue=sn(n.blue,i.blue,t),o.alpha=en(n.alpha,i.alpha,t),Xt.transform(o))},un=new Set(["none","hidden"])
function cn(t,e){return n=>en(t,e,n)}function hn(t){return"number"==typeof t?cn:"string"==typeof t?ot(t)?on:Ut.test(t)?ln:mn:Array.isArray(t)?dn:"object"==typeof t?Ut.test(t)?ln:pn:on}function dn(t,e){const n=[...t],i=n.length,o=t.map(((t,n)=>hn(t)(t,e[n])))
return t=>{for(let e=0;e<i;e++)n[e]=o[e](t)
return n}}function pn(t,e){const n={...t,...e},i={}
for(const o in n)void 0!==t[o]&&void 0!==e[o]&&(i[o]=hn(t[o])(t[o],e[o]))
return t=>{for(const e in i)n[e]=i[e](t)
return n}}const mn=(t,e)=>{const n=Jt.createTransformer(e),i=Gt(t),o=Gt(e)
return i.indexes.var.length===o.indexes.var.length&&i.indexes.color.length===o.indexes.color.length&&i.indexes.number.length>=o.indexes.number.length?un.has(t)&&!o.values.length||un.has(e)&&!i.values.length?function(t,e){return un.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}(t,e):tn(dn(function(t,e){var n
const i=[],o={color:0,var:0,number:0}
for(let s=0;s<e.values.length;s++){const r=e.types[s],a=t.indexes[r][o[r]],l=null!==(n=t.values[a])&&void 0!==n?n:0
i[s]=l,o[r]++}return i}(i,o),o.values),n):on(t,e)}
function fn(t,e,n){if("number"==typeof t&&"number"==typeof e&&"number"==typeof n)return en(t,e,n)
return hn(t)(t,e)}function vn(t,e,{clamp:n=!0,ease:i,mixer:o}={}){const s=t.length
if(J(s===e.length),1===s)return()=>e[0]
if(2===s&&t[0]===t[1])return()=>e[1]
t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse())
const r=function(t,e,n){const i=[],o=n||fn,s=t.length-1
for(let r=0;r<s;r++){let n=o(t[r],t[r+1])
if(e){const t=Array.isArray(e)?e[r]||j:e
n=tn(t,n)}i.push(n)}return i}(e,i,o),a=r.length,l=e=>{let n=0
if(a>1)for(;n<t.length-2&&!(e<t[n+1]);n++);const i=xe(t[n],t[n+1],e)
return r[n](i)}
return n?e=>l(lt(t[0],t[s-1],e)):l}function gn(t){const e=[0]
return function(t,e){const n=t[t.length-1]
for(let i=1;i<=e;i++){const o=xe(0,e,i)
t.push(en(n,1,o))}}(e,t.length-1),e}function yn({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const o=(t=>Array.isArray(t)&&"number"!=typeof t[0])(i)?i.map(Qe):Qe(i),s={done:!1,value:e[0]},r=function(t,e){return t.map((t=>t*e))}(n&&n.length===e.length?n:gn(e),t),a=vn(r,e,{ease:Array.isArray(o)?o:(l=e,u=o,l.map((()=>u||Ge)).splice(0,l.length-1))})
var l,u
return{calculatedDuration:t,next:e=>(s.value=a(e),s.done=e>=t,s)}}const xn=t=>{const e=({timestamp:e})=>t(e)
return{start:()=>F.update(e,!0),stop:()=>I(e),now:()=>Y.isProcessing?Y.timestamp:ve.now()}},Pn={decay:_e,inertia:_e,tween:yn,keyframes:yn,spring:Ke},wn=t=>t/100
class Sn extends ye{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return
this.teardown()
const{onStop:t}=this.options
t&&t()}
const{name:e,motionValue:n,element:i,keyframes:o}=this.options,s=(null==i?void 0:i.KeyframeResolver)||jt
this.resolver=new s(o,((t,e)=>this.onKeyframesResolved(t,e)),e,n,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:e="keyframes",repeat:n=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=this.options,r=pe(e)?e:Pn[e]||yn
let a,l
r!==yn&&"number"!=typeof t[0]&&(a=tn(wn,fn(t[0],t[1])),t=[0,100])
const u=r({...this.options,keyframes:t})
"mirror"===o&&(l=r({...this.options,keyframes:[...t].reverse(),velocity:-s})),null===u.calculatedDuration&&(u.calculatedDuration=Xe(u))
const{calculatedDuration:c}=u,h=c+i
return{generator:u,mirroredGenerator:l,mapPercentToKeyframes:a,calculatedDuration:c,resolvedDuration:h,totalDuration:h*(n+1)-i}}onPostResolved(){const{autoplay:t=!0}=this.options
this.play(),"paused"!==this.pendingPlayState&&t?this.state=this.pendingPlayState:this.pause()}tick(t,e=!1){const{resolved:n}=this
if(!n){const{keyframes:t}=this.options
return{done:!0,value:t[t.length-1]}}const{finalKeyframe:i,generator:o,mirroredGenerator:s,mapPercentToKeyframes:r,keyframes:a,calculatedDuration:l,totalDuration:u,resolvedDuration:c}=n
if(null===this.startTime)return o.next(0)
const{delay:h,repeat:d,repeatType:p,repeatDelay:m,onUpdate:f}=this.options
this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-u/this.speed,this.startTime)),e?this.currentTime=t:null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed
const v=this.currentTime-h*(this.speed>=0?1:-1),g=this.speed>=0?v<0:v>u
this.currentTime=Math.max(v,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=u)
let y=this.currentTime,x=o
if(d){const t=Math.min(this.currentTime,u)/c
let e=Math.floor(t),n=t%1
!n&&t>=1&&(n=1),1===n&&e--,e=Math.min(e,d+1)
Boolean(e%2)&&("reverse"===p?(n=1-n,m&&(n-=m/c)):"mirror"===p&&(x=s)),y=lt(0,1,n)*c}const P=g?{done:!1,value:a[0]}:x.next(y)
r&&(P.value=r(P.value))
let{done:w}=P
g||null===l||(w=this.speed>=0?this.currentTime>=u:this.currentTime<=0)
const S=null===this.holdTime&&("finished"===this.state||"running"===this.state&&w)
return S&&void 0!==i&&(P.value=L(a,this.options,i)),f&&f(P.value),S&&this.finish(),P}get duration(){const{resolved:t}=this
return t?C(t.calculatedDuration):0}get time(){return C(this.currentTime)}set time(t){t=T(t),this.currentTime=t,null!==this.holdTime||0===this.speed?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const e=this.playbackSpeed!==t
this.playbackSpeed=t,e&&(this.time=C(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved)return void(this.pendingPlayState="running")
if(this.isStopped)return
const{driver:t=xn,onPlay:e,startTime:n}=this.options
this.driver||(this.driver=t((t=>this.tick(t)))),e&&e()
const i=this.driver.now()
null!==this.holdTime?this.startTime=i-this.holdTime:this.startTime?"finished"===this.state&&(this.startTime=i):this.startTime=null!=n?n:this.calcStartTime(),"finished"===this.state&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t
this._resolved?(this.state="paused",this.holdTime=null!==(t=this.currentTime)&&void 0!==t?t:0):this.pendingPlayState="paused"}complete(){"running"!==this.state&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished"
const{onComplete:t}=this.options
t&&t()}cancel(){null!==this.cancelTime&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const bn=new Set(["opacity","clipPath","filter","transform"])
function Tn(t){let e
return()=>(void 0===e&&(e=t()),e)}const Cn={linearEasing:void 0}
function An(t,e){const n=Tn(t)
return()=>{var t
return null!==(t=Cn[e])&&void 0!==t?t:n()}}const En=An((()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(t){return!1}return!0}),"linearEasing")
function Mn(t){return Boolean("function"==typeof t&&En()||!t||"string"==typeof t&&(t in Dn||En())||Ze(t)||Array.isArray(t)&&t.every(Mn))}const kn=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Dn={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:kn([0,.65,.55,1]),circOut:kn([.55,0,1,.45]),backIn:kn([.31,.01,.66,-.59]),backOut:kn([.33,1.53,.69,.99])}
function Vn(t,e){return t?"function"==typeof t&&En()?Pe(t,e):Ze(t)?kn(t):Array.isArray(t)?t.map((t=>Vn(t,e)||Dn.easeOut)):Dn[t]:void 0}function Rn(t,e,n,{delay:i=0,duration:o=300,repeat:s=0,repeatType:r="loop",ease:a="easeInOut",times:l}={}){const u={[e]:n}
l&&(u.offset=l)
const c=Vn(a,o)
return Array.isArray(c)&&(u.easing=c),t.animate(u,{delay:i,duration:o,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:s+1,direction:"reverse"===r?"alternate":"normal"})}function Ln(t,e){t.timeline=e,t.onfinish=null}const jn=Tn((()=>Object.hasOwnProperty.call(Element.prototype,"animate")))
const Bn={anticipate:H,backInOut:$,circInOut:q}
class On extends ye{constructor(t){super(t)
const{name:e,motionValue:n,element:i,keyframes:o}=this.options
this.resolver=new de(o,((t,e)=>this.onKeyframesResolved(t,e)),e,n,i),this.resolver.scheduleResolve()}initPlayback(t,e){var n
let{duration:i=300,times:o,ease:s,type:r,motionValue:a,name:l,startTime:u}=this.options
if(!(null===(n=a.owner)||void 0===n?void 0:n.current))return!1
var c
if("string"==typeof s&&En()&&s in Bn&&(s=Bn[s]),pe((c=this.options).type)||"spring"===c.type||!Mn(c.ease)){const{onComplete:e,onUpdate:n,motionValue:a,element:l,...u}=this.options,c=function(t,e){const n=new Sn({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0})
let i={done:!1,value:t[0]}
const o=[]
let s=0
for(;!i.done&&s<2e4;)i=n.sample(s),o.push(i.value),s+=10
return{times:void 0,keyframes:o,duration:s-10,ease:"linear"}}(t,u)
1===(t=c.keyframes).length&&(t[1]=t[0]),i=c.duration,o=c.times,s=c.ease,r="keyframes"}const h=Rn(a.owner.current,l,t,{...this.options,duration:i,times:o,ease:s})
return h.startTime=null!=u?u:this.calcStartTime(),this.pendingTimeline?(Ln(h,this.pendingTimeline),this.pendingTimeline=void 0):h.onfinish=()=>{const{onComplete:n}=this.options
a.set(L(t,this.options,e)),n&&n(),this.cancel(),this.resolveFinishedPromise()},{animation:h,duration:i,times:o,type:r,ease:s,keyframes:t}}get duration(){const{resolved:t}=this
if(!t)return 0
const{duration:e}=t
return C(e)}get time(){const{resolved:t}=this
if(!t)return 0
const{animation:e}=t
return C(e.currentTime||0)}set time(t){const{resolved:e}=this
if(!e)return
const{animation:n}=e
n.currentTime=T(t)}get speed(){const{resolved:t}=this
if(!t)return 1
const{animation:e}=t
return e.playbackRate}set speed(t){const{resolved:e}=this
if(!e)return
const{animation:n}=e
n.playbackRate=t}get state(){const{resolved:t}=this
if(!t)return"idle"
const{animation:e}=t
return e.playState}get startTime(){const{resolved:t}=this
if(!t)return null
const{animation:e}=t
return e.startTime}attachTimeline(t){if(this._resolved){const{resolved:e}=this
if(!e)return j
const{animation:n}=e
Ln(n,t)}else this.pendingTimeline=t
return j}play(){if(this.isStopped)return
const{resolved:t}=this
if(!t)return
const{animation:e}=t
"finished"===e.playState&&this.updateFinishedPromise(),e.play()}pause(){const{resolved:t}=this
if(!t)return
const{animation:e}=t
e.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return
this.resolveFinishedPromise(),this.updateFinishedPromise()
const{resolved:t}=this
if(!t)return
const{animation:e,keyframes:n,duration:i,type:o,ease:s,times:r}=t
if("idle"===e.playState||"finished"===e.playState)return
if(this.time){const{motionValue:t,onUpdate:e,onComplete:a,element:l,...u}=this.options,c=new Sn({...u,keyframes:n,duration:i,type:o,ease:s,times:r,isGenerator:!0}),h=T(this.time)
t.setWithVelocity(c.sample(h-10).value,c.sample(h).value,10)}const{onStop:a}=this.options
a&&a(),this.cancel()}complete(){const{resolved:t}=this
t&&t.animation.finish()}cancel(){const{resolved:t}=this
t&&t.animation.cancel()}static supports(t){const{motionValue:e,name:n,repeatDelay:i,repeatType:o,damping:s,type:r}=t
return jn()&&n&&bn.has(n)&&e&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate&&!i&&"mirror"!==o&&0!==s&&"inertia"!==r}}const Fn=Tn((()=>void 0!==window.ScrollTimeline))
class In{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}then(t,e){return Promise.all(this.animations).then(t).catch(e)}getAll(t){return this.animations[0][t]}setAll(t,e){for(let n=0;n<this.animations.length;n++)this.animations[n][t]=e}attachTimeline(t,e){const n=this.animations.map((n=>Fn()&&n.attachTimeline?n.attachTimeline(t):e(n)))
return()=>{n.forEach(((t,e)=>{t&&t(),this.animations[e].stop()}))}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0
for(let e=0;e<this.animations.length;e++)t=Math.max(t,this.animations[e].duration)
return t}runAll(t){this.animations.forEach((e=>e[t]()))}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}const Yn=(t,e,n,i={},o,s)=>r=>{const a=D(i,t)||{},l=a.delay||i.delay||0
let{elapsed:u=0}=i
u-=T(l)
let c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-u,onUpdate:t=>{e.set(t),a.onUpdate&&a.onUpdate(t)},onComplete:()=>{r(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:o};(function({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:o,repeat:s,repeatType:r,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length})(a)||(c={...c,...k(t,c)}),c.duration&&(c.duration=T(c.duration)),c.repeatDelay&&(c.repeatDelay=T(c.repeatDelay)),void 0!==c.from&&(c.keyframes[0]=c.from)
let h=!1
if((!1===c.type||0===c.duration&&!c.repeatDelay)&&(c.duration=0,0===c.delay&&(h=!0)),h&&!s&&void 0!==e.get()){const t=L(c.keyframes,a)
if(void 0!==t)return F.update((()=>{c.onUpdate(t),c.onComplete()})),new In([])}return!s&&On.supports(c)?new On(c):new Sn(c)}
function Nn(t,e){-1===t.indexOf(e)&&t.push(e)}function Xn(t,e){const n=t.indexOf(e)
n>-1&&t.splice(n,1)}class Wn{constructor(){this.subscriptions=[]}add(t){return Nn(this.subscriptions,t),()=>Xn(this.subscriptions,t)}notify(t,e,n){const i=this.subscriptions.length
if(i)if(1===i)this.subscriptions[0](t,e,n)
else for(let o=0;o<i;o++){const i=this.subscriptions[o]
i&&i(t,e,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}class zn{constructor(t,e={}){this.version="11.12.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(t,e=!0)=>{const n=ve.now()
this.updatedAt!==n&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(t),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),e&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=e.owner}setCurrent(t){var e
this.current=t,this.updatedAt=ve.now(),null===this.canTrackVelocity&&void 0!==t&&(this.canTrackVelocity=(e=this.current,!isNaN(parseFloat(e))))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,e){this.events[t]||(this.events[t]=new Wn)
const n=this.events[t].add(e)
return"change"===t?()=>{n(),F.read((()=>{this.events.change.getSize()||this.stop()}))}:n}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,e){this.passiveEffect=t,this.stopPassiveEffect=e}set(t,e=!0){e&&this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t,e)}setWithVelocity(t,e,n){this.set(e),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-n}jump(t,e=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,e&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=ve.now()
if(!this.canTrackVelocity||void 0===this.prevFrameValue||t-this.updatedAt>30)return 0
const e=Math.min(this.updatedAt-this.prevUpdatedAt,30)
return we(parseFloat(this.current)-parseFloat(this.prevFrameValue),e)}start(t){return this.stop(),new Promise((e=>{this.hasAnimated=!0,this.animation=t(e),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Un(t,e){return new zn(t,e)}function Kn(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Un(n))}const _n=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),$n="data-"+_n("framerAppearId")
function Hn(t){return t.props[$n]}const Gn=t=>Boolean(t&&t.getVelocity)
function Zn(t,e){const n=t.getValue("willChange")
if(i=n,Boolean(Gn(i)&&i.add))return n.add(e)
var i}function qn({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&!0!==e[n]
return e[n]=!1,i}function Qn(t,e,{delay:n=0,transitionOverride:i,type:o}={}){var s
let{transition:r=t.getDefaultTransition(),transitionEnd:a,...l}=e
i&&(r=i)
const u=[],c=o&&t.animationState&&t.animationState.getState()[o]
for(const h in l){const e=t.getValue(h,null!==(s=t.latestValues[h])&&void 0!==s?s:null),i=l[h]
if(void 0===i||c&&qn(c,h))continue
const o={delay:n,...D(r||{},h)}
let a=!1
if(window.MotionHandoffAnimation){const e=Hn(t)
if(e){const t=window.MotionHandoffAnimation(e,h,F)
null!==t&&(o.startTime=t,a=!0)}}Zn(t,h),e.start(Yn(h,e,i,t.shouldReduceMotion&&b.has(h)?{type:!1}:o,t,a))
const d=e.animation
d&&u.push(d)}return a&&Promise.all(u).then((()=>{F.update((()=>{a&&function(t,e){const n=x(t,e)
let{transitionEnd:i={},transition:o={},...s}=n||{}
s={...s,...i}
for(const a in s)Kn(t,a,(r=s[a],m(r)?r[r.length-1]||0:r))
var r}(t,a)}))})),u}function Jn(t,e,n={}){var i
const o=x(t,e,"exit"===n.type?null===(i=t.presenceContext)||void 0===i?void 0:i.custom:void 0)
let{transition:s=t.getDefaultTransition()||{}}=o||{}
n.transitionOverride&&(s=n.transitionOverride)
const r=o?()=>Promise.all(Qn(t,o,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(i=0)=>{const{delayChildren:o=0,staggerChildren:r,staggerDirection:a}=s
return function(t,e,n=0,i=0,o=1,s){const r=[],a=(t.variantChildren.size-1)*i,l=1===o?(t=0)=>t*i:(t=0)=>a-t*i
return Array.from(t.variantChildren).sort(ti).forEach(((t,i)=>{t.notify("AnimationStart",e),r.push(Jn(t,e,{...s,delay:n+l(i)}).then((()=>t.notify("AnimationComplete",e))))})),Promise.all(r)}(t,e,o+i,r,a,n)}:()=>Promise.resolve(),{when:l}=s
if(l){const[t,e]="beforeChildren"===l?[r,a]:[a,r]
return t().then((()=>e()))}return Promise.all([r(),a(n.delay)])}function ti(t,e){return t.sortNodePosition(e)}const ei=w.length
function ni(t){if(!t)return
if(!t.isControllingVariants){const e=t.parent&&ni(t.parent)||{}
return void 0!==t.props.initial&&(e.initial=t.props.initial),e}const e={}
for(let n=0;n<ei;n++){const i=w[n],o=t.props[i];(v(o)||!1===o)&&(e[i]=o)}return e}const ii=[...P].reverse(),oi=P.length
function si(t){return e=>Promise.all(e.map((({animation:e,options:n})=>function(t,e,n={}){let i
if(t.notify("AnimationStart",e),Array.isArray(e)){const o=e.map((e=>Jn(t,e,n)))
i=Promise.all(o)}else if("string"==typeof e)i=Jn(t,e,n)
else{const o="function"==typeof e?x(t,e,n.custom):e
i=Promise.all(Qn(t,o,n))}return i.then((()=>{t.notify("AnimationComplete",e)}))}(t,e,n))))}function ri(t){let e=si(t),n=ui(),i=!0
const o=e=>(n,i)=>{var o
const s=x(t,i,"exit"===e?null===(o=t.presenceContext)||void 0===o?void 0:o.custom:void 0)
if(s){const{transition:t,transitionEnd:e,...i}=s
n={...n,...i,...e}}return n}
function s(s){const{props:r}=t,a=ni(t.parent)||{},l=[],u=new Set
let c={},h=1/0
for(let e=0;e<oi;e++){const d=ii[e],g=n[d],y=void 0!==r[d]?r[d]:a[d],x=v(y),P=d===s?g.isActive:null
!1===P&&(h=e)
let w=y===a[d]&&y!==r[d]&&x
if(w&&i&&t.manuallyAnimateOnMount&&(w=!1),g.protectedKeys={...c},!g.isActive&&null===P||!y&&!g.prevProp||p(y)||"boolean"==typeof y)continue
const S=ai(g.prevProp,y)
let b=S||d===s&&g.isActive&&!w&&x||e>h&&x,T=!1
const C=Array.isArray(y)?y:[y]
let A=C.reduce(o(d),{})
!1===P&&(A={})
const{prevResolvedValues:E={}}=g,M={...E,...A},k=e=>{b=!0,u.has(e)&&(T=!0,u.delete(e)),g.needsAnimating[e]=!0
const n=t.getValue(e)
n&&(n.liveStyle=!1)}
for(const t in M){const e=A[t],n=E[t]
if(c.hasOwnProperty(t))continue
let i=!1
i=m(e)&&m(n)?!f(e,n):e!==n,i?null!=e?k(t):u.add(t):void 0!==e&&u.has(t)?k(t):g.protectedKeys[t]=!0}g.prevProp=y,g.prevResolvedValues=A,g.isActive&&(c={...c,...A}),i&&t.blockInitialAnimation&&(b=!1)
b&&(!(w&&S)||T)&&l.push(...C.map((t=>({animation:t,options:{type:d}}))))}if(u.size){const e={}
u.forEach((n=>{const i=t.getBaseTarget(n),o=t.getValue(n)
o&&(o.liveStyle=!0),e[n]=null!=i?i:null})),l.push({animation:e})}let d=Boolean(l.length)
return!i||!1!==r.initial&&r.initial!==r.animate||t.manuallyAnimateOnMount||(d=!1),i=!1,d?e(l):Promise.resolve()}return{animateChanges:s,setActive:function(e,i){var o
if(n[e].isActive===i)return Promise.resolve()
null===(o=t.variantChildren)||void 0===o||o.forEach((t=>{var n
return null===(n=t.animationState)||void 0===n?void 0:n.setActive(e,i)})),n[e].isActive=i
const r=s(e)
for(const t in n)n[t].protectedKeys={}
return r},setAnimateFunction:function(n){e=n(t)},getState:()=>n,reset:()=>{n=ui(),i=!0}}}function ai(t,e){return"string"==typeof e?e!==t:!!Array.isArray(e)&&!f(e,t)}function li(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ui(){return{animate:li(!0),whileInView:li(),whileHover:li(),whileTap:li(),whileDrag:li(),whileFocus:li(),exit:li()}}class ci{constructor(t){this.isMounted=!1,this.node=t}update(){}}let hi=0
const di={animation:{Feature:class extends ci{constructor(t){super(t),t.animationState||(t.animationState=ri(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps()
p(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:e}=this.node.prevProps||{}
t!==e&&this.updateAnimationControlsSubscription()}unmount(){var t
this.node.animationState.reset(),null===(t=this.unmountControls)||void 0===t||t.call(this)}}},exit:{Feature:class extends ci{constructor(){super(...arguments),this.id=hi++}update(){if(!this.node.presenceContext)return
const{isPresent:t,onExitComplete:e}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{}
if(!this.node.animationState||t===n)return
const i=this.node.animationState.setActive("exit",!t)
e&&!t&&i.then((()=>e(this.id)))}mount(){const{register:t}=this.node.presenceContext||{}
t&&(this.unmount=t(this.id))}unmount(){}}}},pi=t=>"mouse"===t.pointerType?"number"!=typeof t.button||t.button<=0:!1!==t.isPrimary
function mi(t,e="page"){return{point:{x:t[`${e}X`],y:t[`${e}Y`]}}}function fi(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function vi(t,e,n,i){return fi(t,e,(t=>e=>pi(e)&&t(e,mi(e)))(n),i)}const gi=(t,e)=>Math.abs(t-e)
class yi{constructor(t,e,{transformPagePoint:n,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return
const t=wi(this.lastMoveEventInfo,this.history),e=null!==this.startEvent,n=function(t,e){const n=gi(t.x,e.x),i=gi(t.y,e.y)
return Math.sqrt(n**2+i**2)}(t.offset,{x:0,y:0})>=3
if(!e&&!n)return
const{point:i}=t,{timestamp:o}=Y
this.history.push({...i,timestamp:o})
const{onStart:s,onMove:r}=this.handlers
e||(s&&s(this.lastMoveEvent,t),this.startEvent=this.lastMoveEvent),r&&r(this.lastMoveEvent,t)},this.handlePointerMove=(t,e)=>{this.lastMoveEvent=t,this.lastMoveEventInfo=xi(e,this.transformPagePoint),F.update(this.updatePoint,!0)},this.handlePointerUp=(t,e)=>{this.end()
const{onEnd:n,onSessionEnd:i,resumeAnimation:o}=this.handlers
if(this.dragSnapToOrigin&&o&&o(),!this.lastMoveEvent||!this.lastMoveEventInfo)return
const s=wi("pointercancel"===t.type?this.lastMoveEventInfo:xi(e,this.transformPagePoint),this.history)
this.startEvent&&n&&n(t,s),i&&i(t,s)},!pi(t))return
this.dragSnapToOrigin=o,this.handlers=e,this.transformPagePoint=n,this.contextWindow=i||window
const s=xi(mi(t),this.transformPagePoint),{point:r}=s,{timestamp:a}=Y
this.history=[{...r,timestamp:a}]
const{onSessionStart:l}=e
l&&l(t,wi(s,this.history)),this.removeListeners=tn(vi(this.contextWindow,"pointermove",this.handlePointerMove),vi(this.contextWindow,"pointerup",this.handlePointerUp),vi(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),I(this.updatePoint)}}function xi(t,e){return e?{point:e(t.point)}:t}function Pi(t,e){return{x:t.x-e.x,y:t.y-e.y}}function wi({point:t},e){return{point:t,delta:Pi(t,bi(e)),offset:Pi(t,Si(e)),velocity:Ti(e,.1)}}function Si(t){return t[0]}function bi(t){return t[t.length-1]}function Ti(t,e){if(t.length<2)return{x:0,y:0}
let n=t.length-1,i=null
const o=bi(t)
for(;n>=0&&(i=t[n],!(o.timestamp-i.timestamp>T(e)));)n--
if(!i)return{x:0,y:0}
const s=C(o.timestamp-i.timestamp)
if(0===s)return{x:0,y:0}
const r={x:(o.x-i.x)/s,y:(o.y-i.y)/s}
return r.x===1/0&&(r.x=0),r.y===1/0&&(r.y=0),r}function Ci(t){let e=null
return()=>{const n=()=>{e=null}
return null===e&&(e=t,n)}}const Ai=Ci("dragHorizontal"),Ei=Ci("dragVertical")
function Mi(t){let e=!1
if("y"===t)e=Ei()
else if("x"===t)e=Ai()
else{const t=Ai(),n=Ei()
t&&n?e=()=>{t(),n()}:(t&&t(),n&&n())}return e}function ki(){const t=Mi(!0)
return!t||(t(),!1)}function Di(t){return t&&"object"==typeof t&&Object.prototype.hasOwnProperty.call(t,"current")}function Vi(t){return t.max-t.min}function Ri(t,e,n,i=.5){t.origin=i,t.originPoint=en(e.min,e.max,t.origin),t.scale=Vi(n)/Vi(e),t.translate=en(n.min,n.max,t.origin)-t.originPoint,(t.scale>=.9999&&t.scale<=1.0001||isNaN(t.scale))&&(t.scale=1),(t.translate>=-.01&&t.translate<=.01||isNaN(t.translate))&&(t.translate=0)}function Li(t,e,n,i){Ri(t.x,e.x,n.x,i?i.originX:void 0),Ri(t.y,e.y,n.y,i?i.originY:void 0)}function ji(t,e,n){t.min=n.min+e.min,t.max=t.min+Vi(e)}function Bi(t,e,n){t.min=e.min-n.min,t.max=t.min+Vi(e)}function Oi(t,e,n){Bi(t.x,e.x,n.x),Bi(t.y,e.y,n.y)}function Fi(t,e,n){return{min:void 0!==e?t.min+e:void 0,max:void 0!==n?t.max+n-(t.max-t.min):void 0}}function Ii(t,e){let n=e.min-t.min,i=e.max-t.max
return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}const Yi=.35
function Ni(t,e,n){return{min:Xi(t,e),max:Xi(t,n)}}function Xi(t,e){return"number"==typeof t?t:t[e]||0}const Wi=()=>({x:{min:0,max:0},y:{min:0,max:0}})
function zi(t){return[t("x"),t("y")]}function Ui({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function Ki(t){return void 0===t||1===t}function _i({scale:t,scaleX:e,scaleY:n}){return!Ki(t)||!Ki(e)||!Ki(n)}function $i(t){return _i(t)||Hi(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Hi(t){return Gi(t.x)||Gi(t.y)}function Gi(t){return t&&"0%"!==t}function Zi(t,e,n){return n+e*(t-n)}function qi(t,e,n,i,o){return void 0!==o&&(t=Zi(t,o,i)),Zi(t,n,i)+e}function Qi(t,e=0,n=1,i,o){t.min=qi(t.min,e,n,i,o),t.max=qi(t.max,e,n,i,o)}function Ji(t,{x:e,y:n}){Qi(t.x,e.translate,e.scale,e.originPoint),Qi(t.y,n.translate,n.scale,n.originPoint)}const to=.999999999999,eo=1.0000000000001
function no(t,e){t.min=t.min+e,t.max=t.max+e}function io(t,e,n,i,o=.5){Qi(t,e,n,en(t.min,t.max,o),i)}function oo(t,e){io(t.x,e.x,e.scaleX,e.scale,e.originX),io(t.y,e.y,e.scaleY,e.scale,e.originY)}function so(t,e){return Ui(function(t,e){if(!e)return t
const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom})
return{top:n.y,left:n.x,bottom:i.y,right:i.x}}(t.getBoundingClientRect(),e))}const ro=({current:t})=>t?t.ownerDocument.defaultView:null,ao=new WeakMap
class lo{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=t}start(t,{snapToCursor:e=!1}={}){const{presenceContext:n}=this.visualElement
if(n&&!1===n.isPresent)return
const{dragSnapToOrigin:i}=this.getProps()
this.panSession=new yi(t,{onSessionStart:t=>{const{dragSnapToOrigin:n}=this.getProps()
n?this.pauseAnimation():this.stopAnimation(),e&&this.snapToCursor(mi(t,"page").point)},onStart:(t,e)=>{const{drag:n,dragPropagation:i,onDragStart:o}=this.getProps()
if(n&&!i&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Mi(n),!this.openGlobalLock))return
this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),zi((t=>{let e=this.getAxisMotionValue(t).get()||0
if(mt.test(e)){const{projection:n}=this.visualElement
if(n&&n.layout){const i=n.layout.layoutBox[t]
if(i){e=Vi(i)*(parseFloat(e)/100)}}}this.originPoint[t]=e})),o&&F.postRender((()=>o(t,e))),Zn(this.visualElement,"transform")
const{animationState:s}=this.visualElement
s&&s.setActive("whileDrag",!0)},onMove:(t,e)=>{const{dragPropagation:n,dragDirectionLock:i,onDirectionLock:o,onDrag:s}=this.getProps()
if(!n&&!this.openGlobalLock)return
const{offset:r}=e
if(i&&null===this.currentDirection)return this.currentDirection=function(t,e=10){let n=null
Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x")
return n}(r),void(null!==this.currentDirection&&o&&o(this.currentDirection))
this.updateAxis("x",e.point,r),this.updateAxis("y",e.point,r),this.visualElement.render(),s&&s(t,e)},onSessionEnd:(t,e)=>this.stop(t,e),resumeAnimation:()=>zi((t=>{var e
return"paused"===this.getAnimationState(t)&&(null===(e=this.getAxisMotionValue(t).animation)||void 0===e?void 0:e.play())}))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:i,contextWindow:ro(this.visualElement)})}stop(t,e){const n=this.isDragging
if(this.cancel(),!n)return
const{velocity:i}=e
this.startAnimation(i)
const{onDragEnd:o}=this.getProps()
o&&F.postRender((()=>o(t,e)))}cancel(){this.isDragging=!1
const{projection:t,animationState:e}=this.visualElement
t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0
const{dragPropagation:n}=this.getProps()
!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),e&&e.setActive("whileDrag",!1)}updateAxis(t,e,n){const{drag:i}=this.getProps()
if(!n||!uo(t,i,this.currentDirection))return
const o=this.getAxisMotionValue(t)
let s=this.originPoint[t]+n[t]
this.constraints&&this.constraints[t]&&(s=function(t,{min:e,max:n},i){return void 0!==e&&t<e?t=i?en(e,t,i.min):Math.max(t,e):void 0!==n&&t>n&&(t=i?en(n,t,i.max):Math.min(t,n)),t}(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t
const{dragConstraints:e,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):null===(t=this.visualElement.projection)||void 0===t?void 0:t.layout,o=this.constraints
e&&Di(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!e||!i)&&function(t,{top:e,left:n,bottom:i,right:o}){return{x:Fi(t.x,n,o),y:Fi(t.y,e,i)}}(i.layoutBox,e),this.elastic=function(t=Yi){return!1===t?t=0:!0===t&&(t=Yi),{x:Ni(t,"left","right"),y:Ni(t,"top","bottom")}}(n),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&zi((t=>{!1!==this.constraints&&this.getAxisMotionValue(t)&&(this.constraints[t]=function(t,e){const n={}
return void 0!==e.min&&(n.min=e.min-t.min),void 0!==e.max&&(n.max=e.max-t.min),n}(i.layoutBox[t],this.constraints[t]))}))}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:e}=this.getProps()
if(!t||!Di(t))return!1
const n=t.current,{projection:i}=this.visualElement
if(!i||!i.layout)return!1
const o=function(t,e,n){const i=so(t,n),{scroll:o}=e
return o&&(no(i.x,o.offset.x),no(i.y,o.offset.y)),i}(n,i.root,this.visualElement.getTransformPagePoint())
let s=function(t,e){return{x:Ii(t.x,e.x),y:Ii(t.y,e.y)}}(i.layout.layoutBox,o)
if(e){const t=e(function({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}(s))
this.hasMutatedConstraints=!!t,t&&(s=Ui(t))}return s}startAnimation(t){const{drag:e,dragMomentum:n,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:r}=this.getProps(),a=this.constraints||{},l=zi((r=>{if(!uo(r,e,this.currentDirection))return
let l=a&&a[r]||{}
s&&(l={min:0,max:0})
const u=i?200:1e6,c=i?40:1e7,h={type:"inertia",velocity:n?t[r]:0,bounceStiffness:u,bounceDamping:c,timeConstant:750,restDelta:1,restSpeed:10,...o,...l}
return this.startAxisValueAnimation(r,h)}))
return Promise.all(l).then(r)}startAxisValueAnimation(t,e){const n=this.getAxisMotionValue(t)
return Zn(this.visualElement,t),n.start(Yn(t,n,0,e,this.visualElement,!1))}stopAnimation(){zi((t=>this.getAxisMotionValue(t).stop()))}pauseAnimation(){zi((t=>{var e
return null===(e=this.getAxisMotionValue(t).animation)||void 0===e?void 0:e.pause()}))}getAnimationState(t){var e
return null===(e=this.getAxisMotionValue(t).animation)||void 0===e?void 0:e.state}getAxisMotionValue(t){const e=`_drag${t.toUpperCase()}`,n=this.visualElement.getProps(),i=n[e]
return i||this.visualElement.getValue(t,(n.initial?n.initial[t]:void 0)||0)}snapToCursor(t){zi((e=>{const{drag:n}=this.getProps()
if(!uo(e,n,this.currentDirection))return
const{projection:i}=this.visualElement,o=this.getAxisMotionValue(e)
if(i&&i.layout){const{min:n,max:s}=i.layout.layoutBox[e]
o.set(t[e]-en(n,s,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return
const{drag:t,dragConstraints:e}=this.getProps(),{projection:n}=this.visualElement
if(!Di(e)||!n||!this.constraints)return
this.stopAnimation()
const i={x:0,y:0}
zi((t=>{const e=this.getAxisMotionValue(t)
if(e&&!1!==this.constraints){const n=e.get()
i[t]=function(t,e){let n=.5
const i=Vi(t),o=Vi(e)
return o>i?n=xe(e.min,e.max-i,t.min):i>o&&(n=xe(t.min,t.max-o,e.min)),lt(0,1,n)}({min:n,max:n},this.constraints[t])}}))
const{transformTemplate:o}=this.visualElement.getProps()
this.visualElement.current.style.transform=o?o({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),zi((e=>{if(!uo(e,t,null))return
const n=this.getAxisMotionValue(e),{min:o,max:s}=this.constraints[e]
n.set(en(o,s,i[e]))}))}addListeners(){if(!this.visualElement.current)return
ao.set(this.visualElement,this)
const t=vi(this.visualElement.current,"pointerdown",(t=>{const{drag:e,dragListener:n=!0}=this.getProps()
e&&n&&this.start(t)})),e=()=>{const{dragConstraints:t}=this.getProps()
Di(t)&&t.current&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,i=n.addEventListener("measure",e)
n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),F.read(e)
const o=fi(window,"resize",(()=>this.scalePositionWithinConstraints())),s=n.addEventListener("didUpdate",(({delta:t,hasLayoutChanged:e})=>{this.isDragging&&e&&(zi((e=>{const n=this.getAxisMotionValue(e)
n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))})),this.visualElement.render())}))
return()=>{o(),t(),i(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:e=!1,dragDirectionLock:n=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=Yi,dragMomentum:r=!0}=t
return{...t,drag:e,dragDirectionLock:n,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:r}}}function uo(t,e,n){return!(!0!==e&&e!==t||null!==n&&n!==t)}const co=t=>(e,n)=>{t&&F.postRender((()=>t(e,n)))}
const ho=t.createContext(null)
const po=t.createContext({}),mo=t.createContext({}),fo={hasAnimatedSinceResize:!0,hasEverUpdated:!1}
function vo(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const go={correct:(t,e)=>{if(!e.target)return t
if("string"==typeof t){if(!ft.test(t))return t
t=parseFloat(t)}return`${vo(t,e.target.x)}% ${vo(t,e.target.y)}%`}},yo={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,o=Jt.parse(t)
if(o.length>5)return i
const s=Jt.createTransformer(t),r="number"!=typeof o[0]?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y
o[0+r]/=a,o[1+r]/=l
const u=en(a,l,.5)
return"number"==typeof o[2+r]&&(o[2+r]/=u),"number"==typeof o[3+r]&&(o[3+r]/=u),s(o)}},xo={}
const{schedule:Po,cancel:wo}=O(queueMicrotask,!1)
class So extends t.Component{componentDidMount(){const{visualElement:t,layoutGroup:e,switchLayoutGroup:n,layoutId:i}=this.props,{projection:o}=t
var s
s=To,Object.assign(xo,s),o&&(e.group&&e.group.add(o),n&&n.register&&i&&n.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",(()=>{this.safeToRemove()})),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),fo.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:e,visualElement:n,drag:i,isPresent:o}=this.props,s=n.projection
return s?(s.isPresent=o,i||t.layoutDependency!==e||void 0===e?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||F.postRender((()=>{const t=s.getStack()
t&&t.members.length||this.safeToRemove()}))),null):null}componentDidUpdate(){const{projection:t}=this.props.visualElement
t&&(t.root.didUpdate(),Po.postRender((()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:t,layoutGroup:e,switchLayoutGroup:n}=this.props,{projection:i}=t
i&&(i.scheduleCheckAfterUnmount(),e&&e.group&&e.group.remove(i),n&&n.deregister&&n.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props
t&&t()}render(){return null}}function bo(e){const[n,i]=function(){const e=t.useContext(ho)
if(null===e)return[!0,null]
const{isPresent:n,onExitComplete:i,register:o}=e,s=t.useId()
t.useEffect((()=>o(s)),[])
const r=t.useCallback((()=>i&&i(s)),[s,i])
return!n&&i?[!1,r]:[!0]}(),o=t.useContext(po)
return h.jsx(So,{...e,layoutGroup:o,switchLayoutGroup:t.useContext(mo),isPresent:n,safeToRemove:i})}const To={borderRadius:{...go,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:go,borderTopRightRadius:go,borderBottomLeftRadius:go,borderBottomRightRadius:go,boxShadow:yo},Co=["TopLeft","TopRight","BottomLeft","BottomRight"],Ao=Co.length,Eo=t=>"string"==typeof t?parseFloat(t):t,Mo=t=>"number"==typeof t||ft.test(t)
function ko(t,e){return void 0!==t[e]?t[e]:t.borderRadius}const Do=Ro(0,.5,Z),Vo=Ro(.5,.95,j)
function Ro(t,e,n){return i=>i<t?0:i>e?1:n(xe(t,e,i))}function Lo(t,e){t.min=e.min,t.max=e.max}function jo(t,e){Lo(t.x,e.x),Lo(t.y,e.y)}function Bo(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function Oo(t,e,n,i,o){return t=Zi(t-=e,1/n,i),void 0!==o&&(t=Zi(t,1/o,i)),t}function Fo(t,e,[n,i,o],s,r){!function(t,e=0,n=1,i=.5,o,s=t,r=t){mt.test(e)&&(e=parseFloat(e),e=en(r.min,r.max,e/100)-r.min)
if("number"!=typeof e)return
let a=en(s.min,s.max,i)
t===s&&(a-=e),t.min=Oo(t.min,e,n,a,o),t.max=Oo(t.max,e,n,a,o)}(t,e[n],e[i],e[o],e.scale,s,r)}const Io=["x","scaleX","originX"],Yo=["y","scaleY","originY"]
function No(t,e,n,i){Fo(t.x,e,Io,n?n.x:void 0,i?i.x:void 0),Fo(t.y,e,Yo,n?n.y:void 0,i?i.y:void 0)}function Xo(t){return 0===t.translate&&1===t.scale}function Wo(t){return Xo(t.x)&&Xo(t.y)}function zo(t,e){return t.min===e.min&&t.max===e.max}function Uo(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function Ko(t,e){return Uo(t.x,e.x)&&Uo(t.y,e.y)}function _o(t){return Vi(t.x)/Vi(t.y)}function $o(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class Ho{constructor(){this.members=[]}add(t){Nn(this.members,t),t.scheduleRender()}remove(t){if(Xn(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const t=this.members[this.members.length-1]
t&&this.promote(t)}}relegate(t){const e=this.members.findIndex((e=>t===e))
if(0===e)return!1
let n
for(let i=e;i>=0;i--){const t=this.members[i]
if(!1!==t.isPresent){n=t
break}}return!!n&&(this.promote(n),!0)}promote(t,e){const n=this.lead
if(t!==n&&(this.prevLead=n,this.lead=t,t.show(),n)){n.instance&&n.scheduleRender(),t.scheduleRender(),t.resumeFrom=n,e&&(t.resumeFrom.preserveOpacity=!0),n.snapshot&&(t.snapshot=n.snapshot,t.snapshot.latestValues=n.animationValues||n.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0)
const{crossfade:i}=t.options
!1===i&&n.hide()}}exitAnimationComplete(){this.members.forEach((t=>{const{options:e,resumingFrom:n}=t
e.onExitComplete&&e.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()}))}scheduleRender(){this.members.forEach((t=>{t.instance&&t.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const Go=(t,e)=>t.depth-e.depth
class Zo{constructor(){this.children=[],this.isDirty=!1}add(t){Nn(this.children,t),this.isDirty=!0}remove(t){Xn(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Go),this.isDirty=!1,this.children.forEach(t)}}function qo(t){const e=Gn(t)?t.get():t
return n=e,Boolean(n&&"object"==typeof n&&n.mix&&n.toValue)?e.toValue():e
var n}const Qo={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Jo="undefined"!=typeof window&&void 0!==window.MotionDebug,ts=["","X","Y","Z"],es={visibility:"hidden"}
let ns=0
function is(t,e,n,i){const{latestValues:o}=e
o[t]&&(n[t]=o[t],e.setStaticValue(t,0),i&&(i[t]=0))}function os(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return
const{visualElement:e}=t.options
if(!e)return
const n=Hn(e)
if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:e,layoutId:i}=t.options
window.MotionCancelOptimisedAnimation(n,"transform",F,!(e||i))}const{parent:i}=t
i&&!i.hasCheckedOptimisedAppear&&os(i)}function ss({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:o}){return class{constructor(t={},n=(null==e?void 0:e())){this.id=ns++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Jo&&(Qo.totalNodes=Qo.resolvedTargetDeltas=Qo.recalculatedProjection=0),this.nodes.forEach(ls),this.nodes.forEach(fs),this.nodes.forEach(vs),this.nodes.forEach(us),Jo&&window.MotionDebug.record(Qo)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=t,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0
for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0
this.root===this&&(this.nodes=new Zo)}addEventListener(t,e){return this.eventHandlers.has(t)||this.eventHandlers.set(t,new Wn),this.eventHandlers.get(t).add(e)}notifyListeners(t,...e){const n=this.eventHandlers.get(t)
n&&n.notify(...e)}hasListeners(t){return this.eventHandlers.has(t)}mount(e,n=this.root.hasTreeAnimated){if(this.instance)return
var i
this.isSVG=(i=e)instanceof SVGElement&&"svg"!==i.tagName,this.instance=e
const{layoutId:o,layout:s,visualElement:r}=this.options
if(r&&!r.current&&r.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),n&&(s||o)&&(this.isLayoutDirty=!0),t){let n
const i=()=>this.root.updateBlockedByResize=!1
t(e,(()=>{this.root.updateBlockedByResize=!0,n&&n(),n=function(t,e){const n=ve.now(),i=({timestamp:o})=>{const s=o-n
s>=e&&(I(i),t(s-e))}
return F.read(i,!0),()=>I(i)}(i,250),fo.hasAnimatedSinceResize&&(fo.hasAnimatedSinceResize=!1,this.nodes.forEach(ms))}))}o&&this.root.registerSharedNode(o,this),!1!==this.options.animate&&r&&(o||s)&&this.addEventListener("didUpdate",(({delta:t,hasLayoutChanged:e,hasRelativeTargetChanged:n,layout:i})=>{if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0)
const o=this.options.transition||r.getDefaultTransition()||Ss,{onLayoutAnimationStart:s,onLayoutAnimationComplete:a}=r.getProps(),l=!this.targetLayout||!Ko(this.targetLayout,i)||n,u=!e&&n
if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||u||e&&(l||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,u)
const e={...D(o,"layout"),onPlay:s,onComplete:a};(r.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else e||ms(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete()
this.targetLayout=i}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this)
const t=this.getStack()
t&&t.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,I(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(gs),this.animationId++)}getTransformTemplate(){const{visualElement:t}=this.options
return t&&t.getProps().transformTemplate}willUpdate(t=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete())
if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&os(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return
this.isLayoutDirty=!0
for(let o=0;o<this.path.length;o++){const t=this.path[o]
t.shouldResetTransform=!0,t.updateScroll("snapshot"),t.options.layoutRoot&&t.willUpdate(!1)}const{layoutId:e,layout:n}=this.options
if(void 0===e&&!n)return
const i=this.getTransformTemplate()
this.prevTransformTemplateValue=i?i(this.latestValues,""):void 0,this.updateSnapshot(),t&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1
if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(hs)
this.isUpdating||this.nodes.forEach(ds),this.isUpdating=!1,this.nodes.forEach(ps),this.nodes.forEach(rs),this.nodes.forEach(as),this.clearAllSnapshots()
const t=ve.now()
Y.delta=lt(0,1e3/60,t-Y.timestamp),Y.timestamp=t,Y.isProcessing=!0,N.update.process(Y),N.preRender.process(Y),N.render.process(Y),Y.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Po.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(cs),this.sharedNodes.forEach(ys)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,F.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){F.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance)return
if(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead()||this.isLayoutDirty))return
if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const t=this.layout
this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox)
const{visualElement:e}=this.options
e&&e.notify("LayoutMeasure",this.layout.layoutBox,t?t.layoutBox:void 0)}updateScroll(t="measure"){let e=Boolean(this.options.layoutScroll&&this.instance)
if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===t&&(e=!1),e){const e=i(this.instance)
this.scroll={animationId:this.root.animationId,phase:t,isRoot:e,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:e}}}resetTransform(){if(!o)return
const t=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,e=this.projectionDelta&&!Wo(this.projectionDelta),n=this.getTransformTemplate(),i=n?n(this.latestValues,""):void 0,s=i!==this.prevTransformTemplateValue
t&&(e||$i(this.latestValues)||s)&&(o(this.instance,i),this.shouldResetTransform=!1,this.scheduleRender())}measure(t=!0){const e=this.measurePageBox()
let n=this.removeElementScroll(e)
var i
return t&&(n=this.removeTransform(n)),Cs((i=n).x),Cs(i.y),{animationId:this.root.animationId,measuredBox:e,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){var t
const{visualElement:e}=this.options
if(!e)return{x:{min:0,max:0},y:{min:0,max:0}}
const n=e.measureViewportBox()
if(!((null===(t=this.scroll)||void 0===t?void 0:t.wasRoot)||this.path.some(Es))){const{scroll:t}=this.root
t&&(no(n.x,t.offset.x),no(n.y,t.offset.y))}return n}removeElementScroll(t){var e
const n={x:{min:0,max:0},y:{min:0,max:0}}
if(jo(n,t),null===(e=this.scroll)||void 0===e?void 0:e.wasRoot)return n
for(let i=0;i<this.path.length;i++){const e=this.path[i],{scroll:o,options:s}=e
e!==this.root&&o&&s.layoutScroll&&(o.wasRoot&&jo(n,t),no(n.x,o.offset.x),no(n.y,o.offset.y))}return n}applyTransform(t,e=!1){const n={x:{min:0,max:0},y:{min:0,max:0}}
jo(n,t)
for(let i=0;i<this.path.length;i++){const t=this.path[i]
!e&&t.options.layoutScroll&&t.scroll&&t!==t.root&&oo(n,{x:-t.scroll.offset.x,y:-t.scroll.offset.y}),$i(t.latestValues)&&oo(n,t.latestValues)}return $i(this.latestValues)&&oo(n,this.latestValues),n}removeTransform(t){const e={x:{min:0,max:0},y:{min:0,max:0}}
jo(e,t)
for(let n=0;n<this.path.length;n++){const t=this.path[n]
if(!t.instance)continue
if(!$i(t.latestValues))continue
_i(t.latestValues)&&t.updateSnapshot()
const i={x:{min:0,max:0},y:{min:0,max:0}}
jo(i,t.measurePageBox()),No(e,t.latestValues,t.snapshot?t.snapshot.layoutBox:void 0,i)}return $i(this.latestValues)&&No(e,this.latestValues),e}setTargetDelta(t){this.targetDelta=t,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(t){this.options={...this.options,...t,crossfade:void 0===t.crossfade||t.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Y.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(t=!1){var e
const n=this.getLead()
this.isProjectionDirty||(this.isProjectionDirty=n.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=n.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=n.isSharedProjectionDirty)
const i=Boolean(this.resumingFrom)||this!==n
if(!(t||i&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty)||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return
const{layout:o,layoutId:s}=this.options
if(this.layout&&(o||s)){if(this.resolvedRelativeTargetAt=Y.timestamp,!this.targetDelta&&!this.relativeTarget){const t=this.getClosestProjectingParent()
t&&t.layout&&1!==this.animationProgress?(this.relativeParent=t,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Oi(this.relativeTargetOrigin,this.layout.layoutBox,t.layout.layoutBox),jo(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var r,a,l
if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),r=this.target,a=this.relativeTarget,l=this.relativeParent.target,ji(r.x,a.x,l.x),ji(r.y,a.y,l.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):jo(this.target,this.layout.layoutBox),Ji(this.target,this.targetDelta)):jo(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1
const t=this.getClosestProjectingParent()
t&&Boolean(t.resumingFrom)===Boolean(this.resumingFrom)&&!t.options.layoutScroll&&t.target&&1!==this.animationProgress?(this.relativeParent=t,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Oi(this.relativeTargetOrigin,this.target,t.target),jo(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Jo&&Qo.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!_i(this.parent.latestValues)&&!Hi(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var t
const e=this.getLead(),n=Boolean(this.resumingFrom)||this!==e
let i=!0
if((this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty))&&(i=!1),n&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(i=!1),this.resolvedRelativeTargetAt===Y.timestamp&&(i=!1),i)return
const{layout:o,layoutId:s}=this.options
if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!o&&!s)return
jo(this.layoutCorrected,this.layout.layoutBox)
const r=this.treeScale.x,a=this.treeScale.y
!function(t,e,n,i=!1){const o=n.length
if(!o)return
let s,r
e.x=e.y=1
for(let a=0;a<o;a++){s=n[a],r=s.projectionDelta
const{visualElement:o}=s.options
o&&o.props.style&&"contents"===o.props.style.display||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&oo(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),r&&(e.x*=r.x.scale,e.y*=r.y.scale,Ji(t,r)),i&&$i(s.latestValues)&&oo(t,s.latestValues))}e.x<eo&&e.x>to&&(e.x=1),e.y<eo&&e.y>to&&(e.y=1)}(this.layoutCorrected,this.treeScale,this.path,n),!e.layout||e.target||1===this.treeScale.x&&1===this.treeScale.y||(e.target=e.layout.layoutBox,e.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}})
const{target:l}=e
l?(this.projectionDelta&&this.prevProjectionDelta?(Bo(this.prevProjectionDelta.x,this.projectionDelta.x),Bo(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),Li(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.treeScale.x===r&&this.treeScale.y===a&&$o(this.projectionDelta.x,this.prevProjectionDelta.x)&&$o(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),Jo&&Qo.recalculatedProjection++):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(t=!0){var e
if(null===(e=this.options.visualElement)||void 0===e||e.scheduleRender(),t){const t=this.getStack()
t&&t.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}}setAnimationOrigin(t,e=!1){const n=this.snapshot,i=n?n.latestValues:{},o={...this.latestValues},s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}
this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!e
const r={x:{min:0,max:0},y:{min:0,max:0}},a=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),u=!l||l.members.length<=1,c=Boolean(a&&!u&&!0===this.options.crossfade&&!this.path.some(ws))
let h
this.animationProgress=0,this.mixTargetDelta=e=>{const n=e/1e3
var l,d,p,m,f,v
xs(s.x,t.x,n),xs(s.y,t.y,n),this.setTargetDelta(s),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Oi(r,this.layout.layoutBox,this.relativeParent.layout.layoutBox),p=this.relativeTarget,m=this.relativeTargetOrigin,f=r,v=n,Ps(p.x,m.x,f.x,v),Ps(p.y,m.y,f.y,v),h&&(l=this.relativeTarget,d=h,zo(l.x,d.x)&&zo(l.y,d.y))&&(this.isProjectionDirty=!1),h||(h={x:{min:0,max:0},y:{min:0,max:0}}),jo(h,this.relativeTarget)),a&&(this.animationValues=o,function(t,e,n,i,o,s){o?(t.opacity=en(0,void 0!==n.opacity?n.opacity:1,Do(i)),t.opacityExit=en(void 0!==e.opacity?e.opacity:1,0,Vo(i))):s&&(t.opacity=en(void 0!==e.opacity?e.opacity:1,void 0!==n.opacity?n.opacity:1,i))
for(let r=0;r<Ao;r++){const o=`border${Co[r]}Radius`
let s=ko(e,o),a=ko(n,o)
void 0===s&&void 0===a||(s||(s=0),a||(a=0),0===s||0===a||Mo(s)===Mo(a)?(t[o]=Math.max(en(Eo(s),Eo(a),i),0),(mt.test(a)||mt.test(s))&&(t[o]+="%")):t[o]=a)}(e.rotate||n.rotate)&&(t.rotate=en(e.rotate||0,n.rotate||0,i))}(o,i,this.latestValues,n,c,u)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(t){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(I(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=F.update((()=>{fo.hasAnimatedSinceResize=!0,this.currentAnimation=function(t,e,n){const i=Gn(t)?t:Un(t)
return i.start(Yn("",i,e,n)),i.animation}(0,1e3,{...t,onUpdate:e=>{this.mixTargetDelta(e),t.onUpdate&&t.onUpdate(e)},onComplete:()=>{t.onComplete&&t.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0)
const t=this.getStack()
t&&t.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const t=this.getLead()
let{targetWithTransforms:e,target:n,layout:i,latestValues:o}=t
if(e&&n&&i){if(this!==t&&this.layout&&i&&As(this.options.animationType,this.layout.layoutBox,i.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}}
const e=Vi(this.layout.layoutBox.x)
n.x.min=t.target.x.min,n.x.max=n.x.min+e
const i=Vi(this.layout.layoutBox.y)
n.y.min=t.target.y.min,n.y.max=n.y.min+i}jo(e,n),oo(e,o),Li(this.projectionDeltaWithTransform,this.layoutCorrected,e,o)}}registerSharedNode(t,e){this.sharedNodes.has(t)||this.sharedNodes.set(t,new Ho)
this.sharedNodes.get(t).add(e)
const n=e.options.initialPromotionConfig
e.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(e):void 0})}isLead(){const t=this.getStack()
return!t||t.lead===this}getLead(){var t
const{layoutId:e}=this.options
return e&&(null===(t=this.getStack())||void 0===t?void 0:t.lead)||this}getPrevLead(){var t
const{layoutId:e}=this.options
return e?null===(t=this.getStack())||void 0===t?void 0:t.prevLead:void 0}getStack(){const{layoutId:t}=this.options
if(t)return this.root.sharedNodes.get(t)}promote({needsReset:t,transition:e,preserveFollowOpacity:n}={}){const i=this.getStack()
i&&i.promote(this,n),t&&(this.projectionDelta=void 0,this.needsReset=!0),e&&this.setOptions({transition:e})}relegate(){const t=this.getStack()
return!!t&&t.relegate(this)}resetSkewAndRotation(){const{visualElement:t}=this.options
if(!t)return
let e=!1
const{latestValues:n}=t
if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(e=!0),!e)return
const i={}
n.z&&is("z",t,i,this.animationValues)
for(let o=0;o<ts.length;o++)is(`rotate${ts[o]}`,t,i,this.animationValues),is(`skew${ts[o]}`,t,i,this.animationValues)
t.render()
for(const o in i)t.setStaticValue(o,i[o]),this.animationValues&&(this.animationValues[o]=i[o])
t.scheduleRender()}getProjectionStyles(t){var e,n
if(!this.instance||this.isSVG)return
if(!this.isVisible)return es
const i={visibility:""},o=this.getTransformTemplate()
if(this.needsReset)return this.needsReset=!1,i.opacity="",i.pointerEvents=qo(null==t?void 0:t.pointerEvents)||"",i.transform=o?o(this.latestValues,""):"none",i
const s=this.getLead()
if(!this.projectionDelta||!this.layout||!s.target){const e={}
return this.options.layoutId&&(e.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,e.pointerEvents=qo(null==t?void 0:t.pointerEvents)||""),this.hasProjected&&!$i(this.latestValues)&&(e.transform=o?o({},""):"none",this.hasProjected=!1),e}const r=s.animationValues||s.latestValues
this.applyTransformsToTarget(),i.transform=function(t,e,n){let i=""
const o=t.x.translate/e.x,s=t.y.translate/e.y,r=(null==n?void 0:n.z)||0
if((o||s||r)&&(i=`translate3d(${o}px, ${s}px, ${r}px) `),1===e.x&&1===e.y||(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:t,rotate:e,rotateX:o,rotateY:s,skewX:r,skewY:a}=n
t&&(i=`perspective(${t}px) ${i}`),e&&(i+=`rotate(${e}deg) `),o&&(i+=`rotateX(${o}deg) `),s&&(i+=`rotateY(${s}deg) `),r&&(i+=`skewX(${r}deg) `),a&&(i+=`skewY(${a}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y
return 1===a&&1===l||(i+=`scale(${a}, ${l})`),i||"none"}(this.projectionDeltaWithTransform,this.treeScale,r),o&&(i.transform=o(r,i.transform))
const{x:a,y:l}=this.projectionDelta
i.transformOrigin=`${100*a.origin}% ${100*l.origin}% 0`,s.animationValues?i.opacity=s===this?null!==(n=null!==(e=r.opacity)&&void 0!==e?e:this.latestValues.opacity)&&void 0!==n?n:1:this.preserveOpacity?this.latestValues.opacity:r.opacityExit:i.opacity=s===this?void 0!==r.opacity?r.opacity:"":void 0!==r.opacityExit?r.opacityExit:0
for(const u in xo){if(void 0===r[u])continue
const{correct:t,applyTo:e}=xo[u],n="none"===i.transform?r[u]:t(r[u],s)
if(e){const t=e.length
for(let o=0;o<t;o++)i[e[o]]=n}else i[u]=n}return this.options.layoutId&&(i.pointerEvents=s===this?qo(null==t?void 0:t.pointerEvents)||"":"none"),i}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((t=>{var e
return null===(e=t.currentAnimation)||void 0===e?void 0:e.stop()})),this.root.nodes.forEach(hs),this.root.sharedNodes.clear()}}}function rs(t){t.updateLayout()}function as(t){var e
const n=(null===(e=t.resumeFrom)||void 0===e?void 0:e.snapshot)||t.snapshot
if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:e,measuredBox:i}=t.layout,{animationType:o}=t.options,s=n.source!==t.layout.source
"size"===o?zi((t=>{const i=s?n.measuredBox[t]:n.layoutBox[t],o=Vi(i)
i.min=e[t].min,i.max=i.min+o})):As(o,n.layoutBox,e)&&zi((i=>{const o=s?n.measuredBox[i]:n.layoutBox[i],r=Vi(e[i])
o.max=o.min+r,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[i].max=t.relativeTarget[i].min+r)}))
const r={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}
Li(r,e,n.layoutBox)
const a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}
s?Li(a,t.applyTransform(i,!0),n.measuredBox):Li(a,e,n.layoutBox)
const l=!Wo(r)
let u=!1
if(!t.resumeFrom){const i=t.getClosestProjectingParent()
if(i&&!i.resumeFrom){const{snapshot:o,layout:s}=i
if(o&&s){const r={x:{min:0,max:0},y:{min:0,max:0}}
Oi(r,n.layoutBox,o.layoutBox)
const a={x:{min:0,max:0},y:{min:0,max:0}}
Oi(a,e,s.layoutBox),Ko(r,a)||(u=!0),i.options.layoutRoot&&(t.relativeTarget=a,t.relativeTargetOrigin=r,t.relativeParent=i)}}}t.notifyListeners("didUpdate",{layout:e,snapshot:n,delta:a,layoutDelta:r,hasLayoutChanged:l,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:e}=t.options
e&&e()}t.options.transition=void 0}function ls(t){Jo&&Qo.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=Boolean(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function us(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function cs(t){t.clearSnapshot()}function hs(t){t.clearMeasurements()}function ds(t){t.isLayoutDirty=!1}function ps(t){const{visualElement:e}=t.options
e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function ms(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function fs(t){t.resolveTargetDelta()}function vs(t){t.calcProjection()}function gs(t){t.resetSkewAndRotation()}function ys(t){t.removeLeadSnapshot()}function xs(t,e,n){t.translate=en(e.translate,0,n),t.scale=en(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Ps(t,e,n,i){t.min=en(e.min,n.min,i),t.max=en(e.max,n.max,i)}function ws(t){return t.animationValues&&void 0!==t.animationValues.opacityExit}const Ss={duration:.45,ease:[.4,0,.1,1]},bs=t=>"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Ts=bs("applewebkit/")&&!bs("chrome/")?Math.round:j
function Cs(t){t.min=Ts(t.min),t.max=Ts(t.max)}function As(t,e,n){return"position"===t||"preserve-aspect"===t&&(i=_o(e),o=_o(n),s=.2,!(Math.abs(i-o)<=s))
var i,o,s}function Es(t){var e
return t!==t.root&&(null===(e=t.scroll)||void 0===e?void 0:e.wasRoot)}const Ms=ss({attachResizeListener:(t,e)=>fi(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ks={current:void 0},Ds=ss({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!ks.current){const t=new Ms({})
t.mount(window),t.setOptions({layoutScroll:!0}),ks.current=t}return ks.current},resetTransform:(t,e)=>{t.style.transform=void 0!==e?e:"none"},checkIsScrollRoot:t=>Boolean("fixed"===window.getComputedStyle(t).position)}),Vs={pan:{Feature:class extends ci{constructor(){super(...arguments),this.removePointerDownListener=j}onPointerDown(t){this.session=new yi(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ro(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:e,onPan:n,onPanEnd:i}=this.node.getProps()
return{onSessionStart:co(t),onStart:co(e),onMove:n,onEnd:(t,e)=>{delete this.session,i&&F.postRender((()=>i(t,e)))}}}mount(){this.removePointerDownListener=vi(this.node.current,"pointerdown",(t=>this.onPointerDown(t)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends ci{constructor(t){super(t),this.removeGroupControls=j,this.removeListeners=j,this.controls=new lo(t)}mount(){const{dragControls:t}=this.node.getProps()
t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||j}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:Ds,MeasureLayout:bo}}
function Rs(t,e){const n=e?"pointerenter":"pointerleave",i=e?"onHoverStart":"onHoverEnd"
return vi(t.current,n,((n,o)=>{if("touch"===n.pointerType||ki())return
const s=t.getProps()
t.animationState&&s.whileHover&&t.animationState.setActive("whileHover",e)
const r=s[i]
r&&F.postRender((()=>r(n,o)))}),{passive:!t.getProps()[i]})}const Ls=(t,e)=>!!e&&(t===e||Ls(t,e.parentElement))
function js(t,e){if(!e)return
const n=new PointerEvent("pointer"+t)
e(n,mi(n))}const Bs=new WeakMap,Os=new WeakMap,Fs=t=>{const e=Bs.get(t.target)
e&&e(t)},Is=t=>{t.forEach(Fs)}
function Ys(t,e,n){const i=function({root:t,...e}){const n=t||document
Os.has(n)||Os.set(n,{})
const i=Os.get(n),o=JSON.stringify(e)
return i[o]||(i[o]=new IntersectionObserver(Is,{root:t,...e})),i[o]}(e)
return Bs.set(t,n),i.observe(t),()=>{Bs.delete(t),i.unobserve(t)}}const Ns={some:0,all:1}
const Xs={inView:{Feature:class extends ci{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount()
const{viewport:t={}}=this.node.getProps(),{root:e,margin:n,amount:i="some",once:o}=t,s={root:e?e.current:void 0,rootMargin:n,threshold:"number"==typeof i?i:Ns[i]}
return Ys(this.node.current,s,(t=>{const{isIntersecting:e}=t
if(this.isInView===e)return
if(this.isInView=e,o&&!e&&this.hasEnteredView)return
e&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",e)
const{onViewportEnter:n,onViewportLeave:i}=this.node.getProps(),s=e?n:i
s&&s(t)}))}mount(){this.startObserver()}update(){if("undefined"==typeof IntersectionObserver)return
const{props:t,prevProps:e}=this.node;["amount","margin","root"].some(function({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}(t,e))&&this.startObserver()}unmount(){}}},tap:{Feature:class extends ci{constructor(){super(...arguments),this.removeStartListeners=j,this.removeEndListeners=j,this.removeAccessibleListeners=j,this.startPointerPress=(t,e)=>{if(this.isPressing)return
this.removeEndListeners()
const n=this.node.getProps(),i=vi(window,"pointerup",((t,e)=>{if(!this.checkPressEnd())return
const{onTap:n,onTapCancel:i,globalTapTarget:o}=this.node.getProps(),s=o||Ls(this.node.current,t.target)?n:i
s&&F.update((()=>s(t,e)))}),{passive:!(n.onTap||n.onPointerUp)}),o=vi(window,"pointercancel",((t,e)=>this.cancelPress(t,e)),{passive:!(n.onTapCancel||n.onPointerCancel)})
this.removeEndListeners=tn(i,o),this.startPress(t,e)},this.startAccessiblePress=()=>{const t=fi(this.node.current,"keydown",(t=>{if("Enter"!==t.key||this.isPressing)return
this.removeEndListeners(),this.removeEndListeners=fi(this.node.current,"keyup",(t=>{"Enter"===t.key&&this.checkPressEnd()&&js("up",((t,e)=>{const{onTap:n}=this.node.getProps()
n&&F.postRender((()=>n(t,e)))}))})),js("down",((t,e)=>{this.startPress(t,e)}))})),e=fi(this.node.current,"blur",(()=>{this.isPressing&&js("cancel",((t,e)=>this.cancelPress(t,e)))}))
this.removeAccessibleListeners=tn(t,e)}}startPress(t,e){this.isPressing=!0
const{onTapStart:n,whileTap:i}=this.node.getProps()
i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),n&&F.postRender((()=>n(t,e)))}checkPressEnd(){this.removeEndListeners(),this.isPressing=!1
return this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!ki()}cancelPress(t,e){if(!this.checkPressEnd())return
const{onTapCancel:n}=this.node.getProps()
n&&F.postRender((()=>n(t,e)))}mount(){const t=this.node.getProps(),e=vi(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),n=fi(this.node.current,"focus",this.startAccessiblePress)
this.removeStartListeners=tn(e,n)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}},focus:{Feature:class extends ci{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1
try{t=this.node.current.matches(":focus-visible")}catch(e){t=!0}t&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=tn(fi(this.node.current,"focus",(()=>this.onFocus())),fi(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}}},hover:{Feature:class extends ci{mount(){this.unmount=tn(Rs(this.node,!0),Rs(this.node,!1))}unmount(){}}}},Ws={layout:{ProjectionNode:Ds,MeasureLayout:bo}},zs=t.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),Us=t.createContext({}),Ks="undefined"!=typeof window,_s=Ks?t.useLayoutEffect:t.useEffect,$s=t.createContext({strict:!1})
function Hs(e,n,i,o,s){var r,a
const{visualElement:l}=t.useContext(Us),u=t.useContext($s),c=t.useContext(ho),h=t.useContext(zs).reducedMotion,d=t.useRef()
o=o||u.renderer,!d.current&&o&&(d.current=o(e,{visualState:n,parent:l,props:i,presenceContext:c,blockInitialAnimation:!!c&&!1===c.initial,reducedMotionConfig:h}))
const p=d.current,m=t.useContext(mo)
!p||p.projection||!s||"html"!==p.type&&"svg"!==p.type||function(t,e,n,i){const{layoutId:o,layout:s,drag:r,dragConstraints:a,layoutScroll:l,layoutRoot:u}=e
t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:Gs(t.parent)),t.projection.setOptions({layoutId:o,layout:s,alwaysMeasureLayout:Boolean(r)||a&&Di(a),visualElement:t,animationType:"string"==typeof s?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:u})}(d.current,i,s,m)
const f=t.useRef(!1)
t.useInsertionEffect((()=>{p&&f.current&&p.update(i,c)}))
const v=i[$n],g=t.useRef(Boolean(v)&&!(null===(r=window.MotionHandoffIsComplete)||void 0===r?void 0:r.call(window,v))&&(null===(a=window.MotionHasOptimisedAnimation)||void 0===a?void 0:a.call(window,v)))
return _s((()=>{p&&(f.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),Po.render(p.render),g.current&&p.animationState&&p.animationState.animateChanges())})),t.useEffect((()=>{p&&(!g.current&&p.animationState&&p.animationState.animateChanges(),g.current&&(queueMicrotask((()=>{var t
null===(t=window.MotionHandoffMarkAsComplete)||void 0===t||t.call(window,v)})),g.current=!1))})),p}function Gs(t){if(t)return!1!==t.options.allowProjection?t.projection:Gs(t.parent)}function Zs(e,n,i){return t.useCallback((t=>{t&&e.mount&&e.mount(t),n&&(t?n.mount(t):n.unmount()),i&&("function"==typeof i?i(t):Di(i)&&(i.current=t))}),[n])}function qs(t){return p(t.animate)||w.some((e=>v(t[e])))}function Qs(t){return Boolean(qs(t)||t.variants)}function Js(e){const{initial:n,animate:i}=function(t,e){if(qs(t)){const{initial:e,animate:n}=t
return{initial:!1===e||v(e)?e:void 0,animate:v(n)?n:void 0}}return!1!==t.inherit?e:{}}(e,t.useContext(Us))
return t.useMemo((()=>({initial:n,animate:i})),[tr(n),tr(i)])}function tr(t){return Array.isArray(t)?t.join(" "):t}const er={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},nr={}
for(const xl in er)nr[xl]={isEnabled:t=>er[xl].some((e=>!!t[e]))}
const ir=Symbol.for("motionComponentSymbol")
function or({preloadedFeatures:e,createVisualElement:n,useRender:i,useVisualState:o,Component:s}){e&&function(t){for(const e in t)nr[e]={...nr[e],...t[e]}}(e)
const r=t.forwardRef((function(e,r){let a
const l={...t.useContext(zs),...e,layoutId:sr(e)},{isStatic:u}=l,c=Js(e),d=o(e,u)
if(!u&&Ks){t.useContext($s).strict
const e=function(t){const{drag:e,layout:n}=nr
if(!e&&!n)return{}
const i={...e,...n}
return{MeasureLayout:(null==e?void 0:e.isEnabled(t))||(null==n?void 0:n.isEnabled(t))?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}(l)
a=e.MeasureLayout,c.visualElement=Hs(s,d,l,n,e.ProjectionNode)}return h.jsxs(Us.Provider,{value:c,children:[a&&c.visualElement?h.jsx(a,{visualElement:c.visualElement,...l}):null,i(s,e,Zs(d,c.visualElement,r),d,u,c.visualElement)]})}))
return r[ir]=s,r}function sr({layoutId:e}){const n=t.useContext(po).id
return n&&void 0!==e?n+"-"+e:e}const rr=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"]
function ar(t){return"string"==typeof t&&!t.includes("-")&&!!(rr.indexOf(t)>-1||/[A-Z]/u.test(t))}function lr(t,{style:e,vars:n},i,o){Object.assign(t.style,e,o&&o.getProjectionStyles(i))
for(const s in n)t.style.setProperty(s,n[s])}const ur=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"])
function cr(t,e,n,i){lr(t,e,void 0,i)
for(const o in e.attrs)t.setAttribute(ur.has(o)?o:_n(o),e.attrs[o])}function hr(t,{layout:e,layoutId:n}){return b.has(t)||t.startsWith("origin")||(e||void 0!==n)&&(!!xo[t]||"opacity"===t)}function dr(t,e,n){var i
const{style:o}=t,s={}
for(const r in o)(Gn(o[r])||e.style&&Gn(e.style[r])||hr(r,t)||void 0!==(null===(i=null==n?void 0:n.getValue(r))||void 0===i?void 0:i.liveStyle))&&(s[r]=o[r])
return s}function pr(t,e,n){const i=dr(t,e,n)
for(const o in t)if(Gn(t[o])||Gn(e[o])){i[-1!==S.indexOf(o)?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o]=t[o]}return i}const mr=e=>(n,i)=>{const o=t.useContext(Us),s=t.useContext(ho),r=()=>function({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},i,o,s){const r={latestValues:fr(i,o,s,t),renderState:e()}
return n&&(r.mount=t=>n(i,t,r)),r}(e,n,o,s)
return i?r():function(e){const n=t.useRef(null)
return null===n.current&&(n.current=e()),n.current}(r)}
function fr(t,e,n,i){const o={},s=i(t,{})
for(const d in s)o[d]=qo(s[d])
let{initial:r,animate:a}=t
const l=qs(t),u=Qs(t)
e&&u&&!l&&!1!==t.inherit&&(void 0===r&&(r=e.initial),void 0===a&&(a=e.animate))
let c=!!n&&!1===n.initial
c=c||!1===r
const h=c?a:r
if(h&&"boolean"!=typeof h&&!p(h)){const e=Array.isArray(h)?h:[h]
for(let n=0;n<e.length;n++){const i=y(t,e[n])
if(i){const{transitionEnd:t,transition:e,...n}=i
for(const i in n){let t=n[i]
if(Array.isArray(t)){t=t[c?t.length-1:0]}null!==t&&(o[i]=t)}for(const i in t)o[i]=t[i]}}}return o}const vr=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),gr=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),yr=(t,e)=>e&&"number"==typeof t?e.transform(t):t,xr={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Pr=S.length
function wr(t,e,n){const{style:i,vars:o,transformOrigin:s}=t
let r=!1,a=!1
for(const l in e){const t=e[l]
if(b.has(l))r=!0
else if(nt(l))o[l]=t
else{const e=yr(t,ae[l])
l.startsWith("origin")?(a=!0,s[l]=e):i[l]=e}}if(e.transform||(r||n?i.transform=function(t,e,n){let i="",o=!0
for(let s=0;s<Pr;s++){const r=S[s],a=t[r]
if(void 0===a)continue
let l=!0
if(l="number"==typeof a?a===(r.startsWith("scale")?1:0):0===parseFloat(a),!l||n){const t=yr(a,ae[r])
l||(o=!1,i+=`${xr[r]||r}(${t}) `),n&&(e[r]=t)}}return i=i.trim(),n?i=n(e,o?"":i):o&&(i="none"),i}(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:t="50%",originY:e="50%",originZ:n=0}=s
i.transformOrigin=`${t} ${e} ${n}`}}function Sr(t,e,n){return"string"==typeof t?t:ft.transform(e+n*t)}const br={offset:"stroke-dashoffset",array:"stroke-dasharray"},Tr={offset:"strokeDashoffset",array:"strokeDasharray"}
function Cr(t,{attrX:e,attrY:n,attrScale:i,originX:o,originY:s,pathLength:r,pathSpacing:a=1,pathOffset:l=0,...u},c,h){if(wr(t,u,h),c)return void(t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox))
t.attrs=t.style,t.style={}
const{attrs:d,style:p,dimensions:m}=t
d.transform&&(m&&(p.transform=d.transform),delete d.transform),m&&(void 0!==o||void 0!==s||p.transform)&&(p.transformOrigin=function(t,e,n){return`${Sr(e,t.x,t.width)} ${Sr(n,t.y,t.height)}`}(m,void 0!==o?o:.5,void 0!==s?s:.5)),void 0!==e&&(d.x=e),void 0!==n&&(d.y=n),void 0!==i&&(d.scale=i),void 0!==r&&function(t,e,n=1,i=0,o=!0){t.pathLength=1
const s=o?br:Tr
t[s.offset]=ft.transform(-i)
const r=ft.transform(e),a=ft.transform(n)
t[s.array]=`${r} ${a}`}(d,r,a,l,!1)}const Ar=t=>"string"==typeof t&&"svg"===t.toLowerCase(),Er={useVisualState:mr({scrapeMotionValuesFromProps:pr,createRenderState:gr,onMount:(t,e,{renderState:n,latestValues:i})=>{F.read((()=>{try{n.dimensions="function"==typeof e.getBBox?e.getBBox():e.getBoundingClientRect()}catch(t){n.dimensions={x:0,y:0,width:0,height:0}}})),F.render((()=>{Cr(n,i,Ar(e.tagName),t.transformTemplate),cr(e,n)}))}})},Mr={useVisualState:mr({scrapeMotionValuesFromProps:dr,createRenderState:vr})}
function kr(t,e,n){for(const i in e)Gn(e[i])||hr(i,n)||(t[i]=e[i])}function Dr(e,n){const i={}
return kr(i,e.style||{},e),Object.assign(i,function({transformTemplate:e},n){return t.useMemo((()=>{const t={style:{},transform:{},transformOrigin:{},vars:{}}
return wr(t,n,e),Object.assign({},t.vars,t.style)}),[n])}(e,n)),i}function Vr(t,e){const n={},i=Dr(t,e)
return t.drag&&!1!==t.dragListener&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=!0===t.drag?"none":"pan-"+("x"===t.drag?"y":"x")),void 0===t.tabIndex&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const Rr=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"])
function Lr(t){return t.startsWith("while")||t.startsWith("drag")&&"draggable"!==t||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Rr.has(t)}let jr=t=>!Lr(t)
try{(Br=require("@emotion/is-prop-valid").default)&&(jr=t=>t.startsWith("on")?!Lr(t):Br(t))}catch(yl){}var Br
function Or(e,n,i,o){const s=t.useMemo((()=>{const t={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}
return Cr(t,n,Ar(o),e.transformTemplate),{...t.attrs,style:{...t.style}}}),[n])
if(e.style){const t={}
kr(t,e.style,e),s.style={...t,...s.style}}return s}function Fr(e=!1){return(n,i,o,{latestValues:s},r)=>{const a=(ar(n)?Or:Vr)(i,s,r,n),l=function(t,e,n){const i={}
for(const o in t)"values"===o&&"object"==typeof t.values||(jr(o)||!0===n&&Lr(o)||!e&&!Lr(o)||t.draggable&&o.startsWith("onDrag"))&&(i[o]=t[o])
return i}(i,"string"==typeof n,e),u=n!==t.Fragment?{...l,...a,ref:o}:{},{children:c}=i,h=t.useMemo((()=>Gn(c)?c.get():c),[c])
return t.createElement(n,{...u,children:h})}}function Ir(t,e){return function(n,{forwardMotionProps:i}={forwardMotionProps:!1}){return or({...ar(n)?Er:Mr,preloadedFeatures:t,useRender:Fr(i),createVisualElement:e,Component:n})}}const Yr={current:null},Nr={current:!1}
const Xr=new WeakMap,Wr=[...Et,Ut,Jt],zr=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"]
class Ur{scrapeMotionValuesFromProps(t,e,n){return{}}constructor({parent:t,props:e,presenceContext:n,reducedMotionConfig:i,blockInitialAnimation:o,visualState:s},r={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=jt,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const t=ve.now()
this.renderScheduledAt<t&&(this.renderScheduledAt=t,F.render(this.render,!1,!0))}
const{latestValues:a,renderState:l}=s
this.latestValues=a,this.baseTarget={...a},this.initialValues=e.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=e,this.presenceContext=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=r,this.blockInitialAnimation=Boolean(o),this.isControllingVariants=qs(e),this.isVariantNode=Qs(e),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current)
const{willChange:u,...c}=this.scrapeMotionValuesFromProps(e,{},this)
for(const h in c){const t=c[h]
void 0!==a[h]&&Gn(t)&&t.set(a[h],!1)}}mount(t){this.current=t,Xr.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((t,e)=>this.bindToMotionValue(e,t))),Nr.current||function(){if(Nr.current=!0,Ks)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Yr.current=t.matches
t.addListener(e),e()}else Yr.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||Yr.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Xr.delete(this.current),this.projection&&this.projection.unmount(),I(this.notifyUpdate),I(this.render),this.valueSubscriptions.forEach((t=>t())),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this)
for(const t in this.events)this.events[t].clear()
for(const t in this.features){const e=this.features[t]
e&&(e.unmount(),e.isMounted=!1)}this.current=null}bindToMotionValue(t,e){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)()
const n=b.has(t),i=e.on("change",(e=>{this.latestValues[t]=e,this.props.onUpdate&&F.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)})),o=e.on("renderRequest",this.scheduleRender)
let s
window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,t,e)),this.valueSubscriptions.set(t,(()=>{i(),o(),s&&s(),e.owner&&e.stop()}))}sortNodePosition(t){return this.current&&this.sortInstanceNodePosition&&this.type===t.type?this.sortInstanceNodePosition(this.current,t.current):0}updateFeatures(){let t="animation"
for(t in nr){const e=nr[t]
if(!e)continue
const{isEnabled:n,Feature:i}=e
if(!this.features[t]&&i&&n(this.props)&&(this.features[t]=new i(this)),this.features[t]){const e=this.features[t]
e.isMounted?e.update():(e.mount(),e.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,e){this.latestValues[t]=e}update(t,e){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=e
for(let n=0;n<zr.length;n++){const e=zr[n]
this.propEventSubscriptions[e]&&(this.propEventSubscriptions[e](),delete this.propEventSubscriptions[e])
const i=t["on"+e]
i&&(this.propEventSubscriptions[e]=this.on(e,i))}this.prevMotionValues=function(t,e,n){for(const i in e){const o=e[i],s=n[i]
if(Gn(o))t.addValue(i,o)
else if(Gn(s))t.addValue(i,Un(o,{owner:t}))
else if(s!==o)if(t.hasValue(i)){const e=t.getValue(i)
!0===e.liveStyle?e.jump(o):e.hasAnimated||e.set(o)}else{const e=t.getStaticValue(i)
t.addValue(i,Un(void 0!==e?e:o,{owner:t}))}}for(const i in n)void 0===e[i]&&t.removeValue(i)
return e}(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const e=this.getClosestVariantNode()
if(e)return e.variantChildren&&e.variantChildren.add(t),()=>e.variantChildren.delete(t)}addValue(t,e){const n=this.values.get(t)
e!==n&&(n&&this.removeValue(t),this.bindToMotionValue(t,e),this.values.set(t,e),this.latestValues[t]=e.get())}removeValue(t){this.values.delete(t)
const e=this.valueSubscriptions.get(t)
e&&(e(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,e){if(this.props.values&&this.props.values[t])return this.props.values[t]
let n=this.values.get(t)
return void 0===n&&void 0!==e&&(n=Un(null===e?void 0:e,{owner:this}),this.addValue(t,n)),n}readValue(t,e){var n
let i=void 0===this.latestValues[t]&&this.current?null!==(n=this.getBaseTargetFromProps(this.props,t))&&void 0!==n?n:this.readValueFromInstance(this.current,t,this.options):this.latestValues[t]
var o
return null!=i&&("string"==typeof i&&(tt(i)||Q(i))?i=parseFloat(i):(o=i,!Wr.find(At(o))&&Jt.test(e)&&(i=ce(t,e))),this.setBaseTarget(t,Gn(i)?i.get():i)),Gn(i)?i.get():i}setBaseTarget(t,e){this.baseTarget[t]=e}getBaseTarget(t){var e
const{initial:n}=this.props
let i
if("string"==typeof n||"object"==typeof n){const o=y(this.props,n,null===(e=this.presenceContext)||void 0===e?void 0:e.custom)
o&&(i=o[t])}if(n&&void 0!==i)return i
const o=this.getBaseTargetFromProps(this.props,t)
return void 0===o||Gn(o)?void 0!==this.initialValues[t]&&void 0===i?void 0:this.baseTarget[t]:o}on(t,e){return this.events[t]||(this.events[t]=new Wn),this.events[t].add(e)}notify(t,...e){this.events[t]&&this.events[t].notify(...e)}}class Kr extends Ur{constructor(){super(...arguments),this.KeyframeResolver=de}sortInstanceNodePosition(t,e){return 2&t.compareDocumentPosition(e)?1:-1}getBaseTargetFromProps(t,e){return t.style?t.style[e]:void 0}removeValueFromRenderState(t,{vars:e,style:n}){delete e[t],delete n[t]}}class _r extends Kr{constructor(){super(...arguments),this.type="html",this.renderInstance=lr}readValueFromInstance(t,e){if(b.has(e)){const t=ue(e)
return t&&t.default||0}{const i=(n=t,window.getComputedStyle(n)),o=(nt(e)?i.getPropertyValue(e):i[e])||0
return"string"==typeof o?o.trim():o}var n}measureInstanceViewportBox(t,{transformPagePoint:e}){return so(t,e)}build(t,e,n){wr(t,e,n.transformTemplate)}scrapeMotionValuesFromProps(t,e,n){return dr(t,e,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription)
const{children:t}=this.props
Gn(t)&&(this.childSubscription=t.on("change",(t=>{this.current&&(this.current.textContent=`${t}`)})))}}class $r extends Kr{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Wi}getBaseTargetFromProps(t,e){return t[e]}readValueFromInstance(t,e){if(b.has(e)){const t=ue(e)
return t&&t.default||0}return e=ur.has(e)?e:_n(e),t.getAttribute(e)}scrapeMotionValuesFromProps(t,e,n){return pr(t,e,n)}build(t,e,n){Cr(t,e,this.isSVGTag,n.transformTemplate)}renderInstance(t,e,n,i){cr(t,e,0,i)}mount(t){this.isSVGTag=Ar(t.tagName),super.mount(t)}}const Hr=d(Ir({...di,...Xs,...Vs,...Ws},((e,n)=>ar(e)?new $r(n):new _r(n,{allowProjection:e!==t.Fragment}))))
function Gr(t,e,n,i){return new(n||(n=Promise))((function(e,o){function s(t){try{a(i.next(t))}catch(e){o(e)}}function r(t){try{a(i.throw(t))}catch(e){o(e)}}function a(t){var i
t.done?e(t.value):(i=t.value,i instanceof n?i:new n((function(t){t(i)}))).then(s,r)}a((i=i.apply(t,[])).next())}))}function Zr(t,e){var n,i,o,s,r={label:0,sent:function(){if(1&o[0])throw o[1]
return o[1]},trys:[],ops:[]}
return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.")
for(;r;)try{if(n=1,i&&(o=2&s[0]?i.return:s[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o
switch(i=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s
break
case 4:return r.label++,{value:s[1],done:!1}
case 5:r.label++,i=s[1],s=[0]
continue
case 7:s=r.ops.pop(),r.trys.pop()
continue
default:if(!((o=(o=r.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){r=0
continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){r.label=s[1]
break}if(6===s[0]&&r.label<o[1]){r.label=o[1],o=s
break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(s)
break}o[2]&&r.ops.pop(),r.trys.pop()
continue}s=e.call(t,r)}catch(a){s=[6,a],i=0}finally{n=o=0}if(5&s[0])throw s[1]
return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function qr(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],i=0
if(n)return n.call(t)
if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}}
throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Qr(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator]
if(!n)return t
var i,o,s=n.call(t),r=[]
try{for(;(void 0===e||e-- >0)&&!(i=s.next()).done;)r.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=s.return)&&n.call(s)}finally{if(o)throw o.error}}return r}function Jr(t,e,n){if(2===arguments.length)for(var i,o=0,s=e.length;o<s;o++)!i&&o in e||(i||(i=Array.prototype.slice.call(e,0,o)),i[o]=e[o])
return t.concat(i||Array.prototype.slice.call(e))}function ta(t,e,n,i,o){for(var s=[],r=5;r<arguments.length;r++)s[r-5]=arguments[r]
return Gr(this,0,void 0,(function(){var r,a,l,u,c,h
return Zr(this,(function(d){switch(d.label){case 0:d.trys.push([0,12,13,14]),r=qr(s),a=r.next(),d.label=1
case 1:if(a.done)return[3,11]
switch(typeof(l=a.value)){case"string":return[3,2]
case"number":return[3,4]
case"function":return[3,6]}return[3,8]
case 2:return[4,ea(t,e,l,n,i,o)]
case 3:return d.sent(),[3,10]
case 4:return[4,na(l)]
case 5:return d.sent(),[3,10]
case 6:return[4,l.apply(void 0,Jr([t,e,n,i,o],Qr(s),!1))]
case 7:return d.sent(),[3,10]
case 8:return[4,l]
case 9:d.sent(),d.label=10
case 10:return a=r.next(),[3,1]
case 11:return[3,14]
case 12:return u=d.sent(),c={error:u},[3,14]
case 13:try{a&&!a.done&&(h=r.return)&&h.call(r)}finally{if(c)throw c.error}return[7]
case 14:return[2]}}))}))}function ea(t,e,n,i,o,s){return Gr(this,0,void 0,(function(){var r,a
return Zr(this,(function(l){switch(l.label){case 0:return r=t.textContent||"",u=r,c=Qr(n).slice(0),a=Jr(Jr([],Qr(u),!1),[NaN],!1).findIndex((function(t,e){return c[e]!==t})),[4,ia(t,Jr(Jr([],Qr(sa(r,e,a)),!1),Qr(oa(n,e,a)),!1),i,o,s)]
case 1:return l.sent(),[2]}var u,c}))}))}function na(t){return Gr(this,0,void 0,(function(){return Zr(this,(function(e){switch(e.label){case 0:return[4,new Promise((function(e){return setTimeout(e,t)}))]
case 1:return e.sent(),[2]}}))}))}function ia(t,e,n,i,o){return Gr(this,0,void 0,(function(){var s,r,a,l,u,c,h,d,p,m,f,v,g
return Zr(this,(function(y){switch(y.label){case 0:if(s=e,o){for(r=0,a=1;a<e.length;a++)if(l=Qr([e[a-1],e[a]],2),u=l[0],(c=l[1]).length>u.length||""===c){r=a
break}s=e.slice(r,e.length)}y.label=1
case 1:y.trys.push([1,6,7,8]),h=qr(function(t){var e,n,i,o,s,r,a
return Zr(this,(function(l){switch(l.label){case 0:e=function(t){return Zr(this,(function(e){switch(e.label){case 0:return[4,{op:function(e){return requestAnimationFrame((function(){return e.textContent=t}))},opCode:function(e){var n=e.textContent||""
return""===t||n.length>t.length?"DELETE":"WRITING"}}]
case 1:return e.sent(),[2]}}))},l.label=1
case 1:l.trys.push([1,6,7,8]),n=qr(t),i=n.next(),l.label=2
case 2:return i.done?[3,5]:(o=i.value,[5,e(o)])
case 3:l.sent(),l.label=4
case 4:return i=n.next(),[3,2]
case 5:return[3,8]
case 6:return s=l.sent(),r={error:s},[3,8]
case 7:try{i&&!i.done&&(a=n.return)&&a.call(n)}finally{if(r)throw r.error}return[7]
case 8:return[2]}}))}(s)),d=h.next(),y.label=2
case 2:return d.done?[3,5]:(p=d.value,m="WRITING"===p.opCode(t)?n+n*(Math.random()-.5):i+i*(Math.random()-.5),p.op(t),[4,na(m)])
case 3:y.sent(),y.label=4
case 4:return d=h.next(),[3,2]
case 5:return[3,8]
case 6:return f=y.sent(),v={error:f},[3,8]
case 7:try{d&&!d.done&&(g=h.return)&&g.call(h)}finally{if(v)throw v.error}return[7]
case 8:return[2]}}))}))}function oa(t,e,n){var i,o
return void 0===n&&(n=0),Zr(this,(function(s){switch(s.label){case 0:i=e(t),o=i.length,s.label=1
case 1:return n<o?[4,i.slice(0,++n).join("")]:[3,3]
case 2:return s.sent(),[3,1]
case 3:return[2]}}))}function sa(t,e,n){var i,o
return void 0===n&&(n=0),Zr(this,(function(s){switch(s.label){case 0:i=e(t),o=i.length,s.label=1
case 1:return o>n?[4,i.slice(0,--o).join("")]:[3,3]
case 2:return s.sent(),[3,1]
case 3:return[2]}}))}!function(t,e){void 0===e&&(e={})
var n=e.insertAt
if("undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style")
o.type="text/css","top"===n&&i.firstChild?i.insertBefore(o,i.firstChild):i.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n")
var ra=t.memo(t.forwardRef((function(n,i){var o=n.sequence,s=n.repeat,r=n.className,a=n.speed,l=void 0===a?40:a,u=n.deletionSpeed,c=n.omitDeletionAnimation,h=void 0!==c&&c,d=n.preRenderFirstString,p=void 0!==d&&d,m=n.wrapper,f=void 0===m?"span":m,v=n.splitter,g=void 0===v?function(t){return Jr([],Qr(t),!1)}:v,y=n.cursor,x=void 0===y||y,P=n.style,w=function(t,e){var n={}
for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i])
if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0
for(i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(n[i[o]]=t[i[o]])}return n}(n,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),S=w["aria-label"],b=w["aria-hidden"],T=w.role
u||(u=l)
var C=new Array(2).fill(40);[l,u].forEach((function(t,e){switch(typeof t){case"number":C[e]=Math.abs(t-100)
break
case"object":var n=t.type,i=t.value
if("number"!=typeof i)break
"keyStrokeDelayInMs"===n&&(C[e]=i)}}))
var A,E,M,k,D,V,R=C[0],L=C[1],j=function(e,n){void 0===n&&(n=null)
var i=t.useRef(n)
return t.useEffect((function(){e&&("function"==typeof e?e(i.current):e.current=i.current)}),[e]),i}(i),B="index-module_type__E-SaG"
A=r?"".concat(x?B+" ":"").concat(r):x?B:"",E=t.useRef((function(){var t,e=o
s===1/0?t=ta:"number"==typeof s&&(e=Array(1+s).fill(o).flat())
var n=t?Jr(Jr([],Qr(e),!1),[t],!1):Jr([],Qr(e),!1)
return ta.apply(void 0,Jr([j.current,g,R,L,h],Qr(n),!1)),function(){j.current}})),M=t.useRef(),k=t.useRef(!1),D=t.useRef(!1),V=Qr(t.useState(0),2)[1],k.current&&(D.current=!0),t.useEffect((function(){return k.current||(M.current=E.current(),k.current=!0),V((function(t){return t+1})),function(){D.current&&M.current&&M.current()}}),[])
var O=f,F=p?o.find((function(t){return"string"==typeof t}))||"":null
return e.createElement(O,{"aria-hidden":b,"aria-label":S,role:T,style:P,className:A,children:S?e.createElement("span",{"aria-hidden":"true",ref:j,children:F}):F,ref:S?void 0:j})})),(function(t,e){return!0})),aa=function(t,e){return Number(t.toFixed(e))},la=function(t,e,n){n&&"function"==typeof n&&n(t,e)},ua={easeOut:function(t){return-Math.cos(t*Math.PI)/2+.5},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}},ca=function(t){"number"==typeof t&&cancelAnimationFrame(t)},ha=function(t){t.mounted&&(ca(t.animation),t.animate=!1,t.animation=null,t.velocity=null)}
function da(t,e,n,i){if(t.mounted){var o=(new Date).getTime()
ha(t),t.animation=function(){if(!t.mounted)return ca(t.animation)
var s=(new Date).getTime()-o,r=(0,ua[e])(s/n)
s>=n?(i(1),t.animation=null):t.animation&&(i(r),requestAnimationFrame(t.animation))},requestAnimationFrame(t.animation)}}function pa(t,e,n,i){var o=function(t){var e=t.scale,n=t.positionX,i=t.positionY
return!(Number.isNaN(e)||Number.isNaN(n)||Number.isNaN(i))}(e)
if(t.mounted&&o){var s=t.setTransformState,r=t.transformState,a=r.scale,l=r.positionX,u=r.positionY,c=e.scale-a,h=e.positionX-l,d=e.positionY-u
0===n?s(e.scale,e.positionX,e.positionY):da(t,i,n,(function(t){s(a+c*t,l+h*t,u+d*t)}))}}var ma=function(t,e){var n=t.wrapperComponent,i=t.contentComponent,o=t.setup.centerZoomedOut
if(!n||!i)throw new Error("Components are not mounted")
var s=function(t,e,n){var i=t.offsetWidth,o=t.offsetHeight,s=e.offsetWidth*n,r=e.offsetHeight*n
return{wrapperWidth:i,wrapperHeight:o,newContentWidth:s,newDiffWidth:i-s,newContentHeight:r,newDiffHeight:o-r}}(n,i,e),r=s.wrapperWidth,a=s.wrapperHeight,l=function(t,e,n,i,o,s,r){var a=t>e?n*(r?1:.5):0,l=i>o?s*(r?1:.5):0
return{minPositionX:t-e-a,maxPositionX:a,minPositionY:i-o-l,maxPositionY:l}}(r,s.newContentWidth,s.newDiffWidth,a,s.newContentHeight,s.newDiffHeight,Boolean(o))
return l},fa=function(t,e,n,i){return aa(i?t<e?e:t>n?n:t:t,2)},va=function(t,e){var n=ma(t,e)
return t.bounds=n,n}
function ga(t,e,n,i,o,s,r){var a=n.minPositionX,l=n.minPositionY,u=n.maxPositionX,c=n.maxPositionY,h=0,d=0
return r&&(h=o,d=s),{x:fa(t,a-h,u+h,i),y:fa(e,l-d,c+d,i)}}function ya(t,e,n,i,o,s){var r=t.transformState,a=r.scale,l=r.positionX,u=r.positionY,c=i-a
return"number"!=typeof e||"number"!=typeof n?{x:l,y:u}:ga(l-e*c,u-n*c,o,s,0,0,null)}function xa(t,e,n,i,o){var s=e-(o?i:0)
return!Number.isNaN(n)&&t>=n?n:!Number.isNaN(e)&&t<=s?s:t}var Pa=function(t,e){var n=t.setup.panning.excluded,i=t.isInitialized,o=t.wrapperComponent,s=e.target,r="shadowRoot"in s&&"composedPath"in e?e.composedPath().some((function(t){return t instanceof Element&&(null==o?void 0:o.contains(t))})):null==o?void 0:o.contains(s)
return!!(i&&s&&r)&&!el(s,n)},wa=function(t){var e=t.isInitialized,n=t.isPanning,i=t.setup.panning.disabled
return!(!e||!n||i)}
function Sa(t,e,n,i,o){var s=t.setup.limitToBounds,r=t.wrapperComponent,a=t.bounds,l=t.transformState,u=l.scale,c=l.positionX,h=l.positionY
if(null!==r&&null!==a&&(e!==c||n!==h)){var d=ga(e,n,a,s,i,o,r),p=d.x,m=d.y
t.setTransformState(u,p,m)}}var ba=function(t,e){var n=t.setup,i=t.transformState.scale,o=n.minScale,s=n.disablePadding
return e>0&&i>=o&&!s?e:0}
function Ta(t,e,n,i,o,s,r,a,l,u){if(o){var c
if(e>r&&n>r)return(c=r+(t-r)*u)>l?l:c<r?r:c
if(e<s&&n<s)return(c=s+(t-s)*u)<a?a:c>s?s:c}return i?e:fa(t,s,r,o)}function Ca(t,e){var n=function(t){var e=t.mounted,n=t.setup,i=n.disabled,o=n.velocityAnimation,s=t.transformState.scale
return!(o.disabled&&!(s>1)&&i&&!e)}(t)
if(n){var i=t.lastMousePosition,o=t.velocityTime,s=t.setup,r=t.wrapperComponent,a=s.velocityAnimation.equalToMove,l=Date.now()
if(i&&o&&r){var u=function(t,e){return e?Math.min(1,t.offsetWidth/window.innerWidth):1}(r,a),c=e.x-i.x,h=e.y-i.y,d=c/u,p=h/u,m=l-o,f=c*c+h*h,v=Math.sqrt(f)/m
t.velocity={velocityX:d,velocityY:p,total:v}}t.lastMousePosition=e,t.velocityTime=l}}function Aa(t,e){var n=t.transformState.scale
ha(t),va(t,n),void 0!==window.TouchEvent&&e instanceof TouchEvent?function(t,e){var n=e.touches,i=t.transformState,o=i.positionX,s=i.positionY
if(t.isPanning=!0,1===n.length){var r=n[0].clientX,a=n[0].clientY
t.startCoords={x:r-o,y:a-s}}}(t,e):function(t,e){var n=t.transformState,i=n.positionX,o=n.positionY
t.isPanning=!0
var s=e.clientX,r=e.clientY
t.startCoords={x:s-i,y:r-o}}(t,e)}function Ea(t){var e=t.transformState.scale,n=t.setup,i=n.minScale,o=n.alignmentAnimation,s=o.disabled,r=o.sizeX,a=o.sizeY,l=o.animationTime,u=o.animationType
if(!(s||e<i||!r&&!a)){var c=function(t){var e=t.transformState,n=e.positionX,i=e.positionY,o=e.scale,s=t.setup,r=s.disabled,a=s.limitToBounds,l=s.centerZoomedOut,u=t.wrapperComponent
if(!r&&u&&t.bounds){var c=t.bounds,h=c.maxPositionX,d=c.minPositionX,p=c.maxPositionY,m=c.minPositionY,f=n>h||n<d,v=i>p||i<m,g=ya(t,n>h?u.offsetWidth:t.setup.minPositionX||0,i>p?u.offsetHeight:t.setup.minPositionY||0,o,t.bounds,a||l),y=g.x,x=g.y
return{scale:o,positionX:f?y:n,positionY:v?x:i}}}(t)
c&&pa(t,c,l,u)}}function Ma(t,e,n){var i=t.startCoords,o=t.setup.alignmentAnimation,s=o.sizeX,r=o.sizeY
if(i){var a=function(t,e,n){var i=t.startCoords,o=t.transformState,s=t.setup.panning,r=s.lockAxisX,a=s.lockAxisY,l=o.positionX,u=o.positionY
if(!i)return{x:l,y:u}
var c=e-i.x,h=n-i.y
return{x:r?l:c,y:a?u:h}}(t,e,n),l=a.x,u=a.y,c=ba(t,s),h=ba(t,r)
Ca(t,{x:l,y:u}),Sa(t,l,u,c,h)}}function ka(t){if(t.isPanning){var e=t.setup.panning.velocityDisabled,n=t.velocity,i=t.wrapperComponent,o=t.contentComponent
t.isPanning=!1,t.animate=!1,t.animation=null
var s=null==i?void 0:i.getBoundingClientRect(),r=null==o?void 0:o.getBoundingClientRect(),a=(null==s?void 0:s.width)||0,l=(null==s?void 0:s.height)||0,u=(null==r?void 0:r.width)||0,c=(null==r?void 0:r.height)||0,h=a<u||l<c
!e&&n&&(null==n?void 0:n.total)>.1&&h?function(t){var e=t.velocity,n=t.bounds,i=t.setup,o=t.wrapperComponent,s=function(t){var e=t.mounted,n=t.velocity,i=t.bounds,o=t.setup,s=o.disabled,r=o.velocityAnimation,a=t.transformState.scale
return!(r.disabled&&!(a>1)&&s&&!e||!n||!i)}(t)
if(s&&e&&n&&o){var r=e.velocityX,a=e.velocityY,l=e.total,u=n.maxPositionX,c=n.minPositionX,h=n.maxPositionY,d=n.minPositionY,p=i.limitToBounds,m=i.alignmentAnimation,f=i.zoomAnimation,v=i.panning,g=v.lockAxisY,y=v.lockAxisX,x=f.animationType,P=m.sizeX,w=m.sizeY,S=m.velocityAlignmentTime,b=function(t,e){var n=t.setup.velocityAnimation,i=n.equalToMove,o=n.animationTime,s=n.sensitivity
return i?o*e*s:o}(t,l),T=Math.max(b,S),C=ba(t,P),A=ba(t,w),E=C*o.offsetWidth/100,M=A*o.offsetHeight/100,k=u+E,D=c-E,V=h+M,R=d-M,L=t.transformState,j=(new Date).getTime()
da(t,x,T,(function(e){var n=t.transformState,i=n.scale,o=n.positionX,s=n.positionY,l=((new Date).getTime()-j)/S,f=1-(0,ua[m.animationType])(Math.min(1,l)),v=1-e,x=o+r*v,P=s+a*v,w=Ta(x,L.positionX,o,y,p,c,u,D,k,f),b=Ta(P,L.positionY,s,g,p,d,h,R,V,f)
o===x&&s===P||t.setTransformState(i,w,b)}))}}(t):Ea(t)}}function Da(t,e,n,i){var o=t.setup,s=o.minScale,r=o.maxScale,a=o.limitToBounds,l=xa(aa(e,2),s,r,0,!1),u=ya(t,n,i,l,va(t,l),a)
return{scale:l,positionX:u.x,positionY:u.y}}function Va(t,e,n){var i=t.transformState.scale,o=t.wrapperComponent,s=t.setup,r=s.minScale,a=s.limitToBounds,l=s.zoomAnimation,u=l.disabled,c=l.animationTime,h=l.animationType,d=u||i>=r
if((i>=1||a)&&Ea(t),!d&&o&&t.mounted){var p=Da(t,r,e||o.offsetWidth/2,n||o.offsetHeight/2)
p&&pa(t,p,c,h)}}var Ra=function(){return Ra=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])
return t},Ra.apply(this,arguments)}
function La(t,e,n){for(var i,o=0,s=e.length;o<s;o++)!i&&o in e||(i||(i=Array.prototype.slice.call(e,0,o)),i[o]=e[o])
return t.concat(i||Array.prototype.slice.call(e))}var ja=1,Ba=0,Oa=0,Fa={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,smooth:!0,wheel:{step:.2,disabled:!1,smoothStep:.001,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,allowLeftClickPan:!0,allowMiddleClickPan:!0,allowRightClickPan:!0,wheelPanning:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},Ia="react-transform-wrapper",Ya="react-transform-component",Na=function(t){var e,n,i,o
return{previousScale:null!==(e=t.initialScale)&&void 0!==e?e:ja,scale:null!==(n=t.initialScale)&&void 0!==n?n:ja,positionX:null!==(i=t.initialPositionX)&&void 0!==i?i:Ba,positionY:null!==(o=t.initialPositionY)&&void 0!==o?o:Oa}},Xa=function(t){var e=Ra({},Fa)
return Object.keys(t).forEach((function(n){var i=void 0!==t[n]
if(void 0!==Fa[n]&&i){var o=Object.prototype.toString.call(Fa[n]),s="[object Object]"===o,r="[object Array]"===o
e[n]=s?Ra(Ra({},Fa[n]),t[n]):r?La(La([],Fa[n]),t[n]):t[n]}})),e},Wa=function(t,e,n){var i=t.transformState.scale,o=t.wrapperComponent,s=t.setup,r=s.maxScale,a=s.minScale,l=s.zoomAnimation,u=s.smooth,c=l.size
if(!o)throw new Error("Wrapper is not mounted")
var h=u?i*Math.exp(e*n):i+e*n
return xa(aa(h,3),a,r,c,!1)}
function za(t,e,n,i,o){var s=t.wrapperComponent,r=t.transformState,a=r.scale,l=r.positionX,u=r.positionY
if(s){var c=(s.offsetWidth/2-l)/a,h=(s.offsetHeight/2-u)/a,d=Da(t,Wa(t,e,n),c,h)
d&&pa(t,d,i,o)}}function Ua(t,e,n,i){var o=t.setup,s=t.wrapperComponent,r=o.limitToBounds,a=Na(t.props),l=t.transformState,u=l.scale,c=l.positionX,h=l.positionY
if(s){var d=ma(t,a.scale),p=ga(a.positionX,a.positionY,d,r,0,0,s),m={scale:a.scale,positionX:p.x,positionY:p.y}
u===a.scale&&c===a.positionX&&h===a.positionY||(null==i||i(),pa(t,m,e,n))}}var Ka=function(t){return function(e,n,i){void 0===e&&(e=.5),void 0===n&&(n=300),void 0===i&&(i="easeOut"),za(t,1,e,n,i)}},_a=function(t){return function(e,n,i){void 0===e&&(e=.5),void 0===n&&(n=300),void 0===i&&(i="easeOut"),za(t,-1,e,n,i)}},$a=function(t){return function(e,n,i,o,s){void 0===o&&(o=300),void 0===s&&(s="easeOut")
var r=t.transformState,a=r.positionX,l=r.positionY,u=r.scale,c=t.wrapperComponent,h=t.contentComponent
if(!t.setup.disabled&&c&&h){var d={positionX:Number.isNaN(e)?a:e,positionY:Number.isNaN(n)?l:n,scale:Number.isNaN(i)?u:i}
pa(t,d,o,s)}}},Ha=function(t){return function(e,n){void 0===e&&(e=200),void 0===n&&(n="easeOut"),Ua(t,e,n)}},Ga=function(t){return function(e,n,i){void 0===n&&(n=200),void 0===i&&(i="easeOut")
var o=t.transformState,s=t.wrapperComponent,r=t.contentComponent
if(s&&r){var a=il(e||o.scale,s,r)
pa(t,a,n,i)}}},Za=function(t){return function(e,n,i,o){void 0===i&&(i=600),void 0===o&&(o="easeOut"),ha(t)
var s=t.wrapperComponent,r="string"==typeof e?document.getElementById(e):e
if(s&&r&&s.contains(r)){var a=function(t,e,n){var i=t.wrapperComponent,o=t.contentComponent,s=t.transformState,r=t.setup,a=r.limitToBounds,l=r.minScale,u=r.maxScale
if(!i||!o)return s
var c,h,d,p,m,f,v,g,y=i.getBoundingClientRect(),x=e.getBoundingClientRect(),P=(c=i,h=o,d=s,p=e.getBoundingClientRect(),m=c.getBoundingClientRect(),f=h.getBoundingClientRect(),v=m.x*d.scale,g=m.y*d.scale,{x:(p.x-f.x+v)/d.scale,y:(p.y-f.y+g)/d.scale}),w=P.x,S=P.y,b=x.width/s.scale,T=x.height/s.scale,C=i.offsetWidth/b,A=i.offsetHeight/T,E=xa(n||Math.min(C,A),l,u,0,!1),M=(y.width-b*E)/2,k=(y.height-T*E)/2,D=ga((y.left-w)*E+M,(y.top-S)*E+k,ma(t,E),a,0,0,i)
return{positionX:D.x,positionY:D.y,scale:E}}(t,r,n)
pa(t,a,i,o)}}},qa=function(t){return{instance:t,zoomIn:Ka(t),zoomOut:_a(t),setTransform:$a(t),resetTransform:Ha(t),centerView:Ga(t),zoomToElement:Za(t)}},Qa=function(t){var e={}
return Object.assign(e,function(t){return{instance:t,state:t.transformState}}(t)),Object.assign(e,qa(t)),e}
function Ja(){try{return{get passive(){return!1}}}catch(t){return!1}}var tl=".".concat(Ia),el=function(t,e){return e.some((function(e){return t.matches("".concat(tl," ").concat(e,", ").concat(tl," .").concat(e,", ").concat(tl," ").concat(e," *, ").concat(tl," .").concat(e," *"))}))},nl=function(t){t&&clearTimeout(t)},il=function(t,e,n){var i=n.offsetWidth*t,o=n.offsetHeight*t
return{scale:t,positionX:(e.offsetWidth-i)/2,positionY:(e.offsetHeight-o)/2}}
function ol(t,e,n){var i=e.getBoundingClientRect(),o=0,s=0
if("clientX"in t)o=(t.clientX-i.left)/n,s=(t.clientY-i.top)/n
else{var r=t.touches[0]
o=(r.clientX-i.left)/n,s=(r.clientY-i.top)/n}return Number.isNaN(o)||Number.isNaN(s),{x:o,y:s}}var sl=function(t){return Math.sqrt(Math.pow(t.touches[0].pageX-t.touches[1].pageX,2)+Math.pow(t.touches[0].pageY-t.touches[1].pageY,2))},rl=function(t,e){var n=t.props,i=n.onWheel,o=n.onZoom,s=t.contentComponent,r=t.setup,a=t.transformState.scale,l=r.limitToBounds,u=r.centerZoomedOut,c=r.zoomAnimation,h=r.wheel,d=r.disablePadding,p=r.smooth,m=c.size,f=c.disabled,v=h.step,g=h.smoothStep
if(!s)throw new Error("Component not mounted")
e.preventDefault(),e.stopPropagation()
var y=function(t){var e=function(t){return t?t.deltaY<0?1:-1:0}(t)
return e}(e),x=function(t,e,n,i){var o=t.transformState.scale,s=t.wrapperComponent,r=t.setup,a=r.maxScale,l=r.minScale,u=r.zoomAnimation,c=r.disablePadding,h=u.size,d=u.disabled
if(!s)throw new Error("Wrapper is not mounted")
var p=!i&&!d
return xa(aa(o+e*n,3),l,a,h,p&&!c)}(t,y,p?g*Math.abs(e.deltaY):v,!e.ctrlKey)
if(a!==x){var P=va(t,x),w=ol(e,s,a),S=l&&(f||0===m||u||d),b=ya(t,w.x,w.y,x,P,S),T=b.x,C=b.y
t.previousWheelEvent=e,t.setTransformState(x,T,C),la(Qa(t),e,i),la(Qa(t),e,o)}},al=function(t,e){var n=t.props,i=n.onWheelStop,o=n.onZoomStop
nl(t.wheelAnimationTimer),t.wheelAnimationTimer=setTimeout((function(){t.mounted&&(Va(t,e.x,e.y),t.wheelAnimationTimer=null)}),100)
var s=function(t,e){var n=t.previousWheelEvent,i=t.transformState.scale,o=t.setup,s=o.maxScale,r=o.minScale
return!!n&&(i<s||i>r||Math.sign(n.deltaY)!==Math.sign(e.deltaY)||n.deltaY>0&&n.deltaY<e.deltaY||n.deltaY<0&&n.deltaY>e.deltaY||Math.sign(n.deltaY)!==Math.sign(e.deltaY))}(t,e)
s&&(nl(t.wheelStopEventTimer),t.wheelStopEventTimer=setTimeout((function(){t.mounted&&(t.wheelStopEventTimer=null,la(Qa(t),e,i),la(Qa(t),e,o))}),160))},ll=function(t){for(var e=0,n=0,i=0;i<2;i+=1)e+=t.touches[i].clientX,n+=t.touches[i].clientY
return{x:e/2,y:n/2}},ul=function(t,e){var n=t.contentComponent,i=t.pinchStartDistance,o=t.wrapperComponent,s=t.transformState.scale,r=t.setup,a=r.limitToBounds,l=r.centerZoomedOut,u=r.zoomAnimation,c=r.alignmentAnimation,h=u.disabled,d=u.size
if(null!==i&&n){var p=function(t,e,n){var i=n.getBoundingClientRect(),o=t.touches,s=aa(o[0].clientX-i.left,5),r=aa(o[0].clientY-i.top,5)
return{x:(s+aa(o[1].clientX-i.left,5))/2/e,y:(r+aa(o[1].clientY-i.top,5))/2/e}}(e,s,n)
if(Number.isFinite(p.x)&&Number.isFinite(p.y)){var m=sl(e),f=function(t,e){var n=t.pinchStartScale,i=t.pinchStartDistance,o=t.setup,s=o.maxScale,r=o.minScale,a=o.zoomAnimation,l=o.disablePadding,u=a.size,c=a.disabled
if(!n||null===i||!e)throw new Error("Pinch touches distance was not provided")
return e<0?t.transformState.scale:xa(aa(e/i*n,2),r,s,u,!c&&!l)}(t,m),v=ll(e),g=v.x-(t.pinchLastCenterX||0),y=v.y-(t.pinchLastCenterY||0)
if(f!==s||0!==g||0!==y){t.pinchLastCenterX=v.x,t.pinchLastCenterY=v.y
var x=va(t,f),P=a&&(h||0===d||l),w=ya(t,p.x,p.y,f,x,P),S=w.x,b=w.y
t.pinchMidpoint=p,t.lastDistance=m
var T=c.sizeX,C=c.sizeY,A=ga(S+g,b+y,x,a,ba(t,T),ba(t,C),o),E=A.x,M=A.y
t.setTransformState(f,E,M)}}}},cl=function(t,e){var n=t.props.onZoomStop,i=t.setup.doubleClick.animationTime
nl(t.doubleClickStopEventTimer),t.doubleClickStopEventTimer=setTimeout((function(){t.doubleClickStopEventTimer=null,la(Qa(t),e,n)}),i)}
function hl(t,e){var n=t.setup,i=t.doubleClickStopEventTimer,o=t.transformState,s=t.contentComponent,r=o.scale,a=t.props,l=a.onZoomStart,u=a.onZoom,c=n.doubleClick,h=c.disabled,d=c.mode,p=c.step,m=c.animationTime,f=c.animationType
if(!h&&!i){if("reset"===d)return function(t,e){var n=t.props,i=n.onZoomStart,o=n.onZoom,s=t.setup.doubleClick,r=s.animationTime,a=s.animationType
la(Qa(t),e,i),Ua(t,r,a,(function(){return la(Qa(t),e,o)})),cl(t,e)}(t,e)
if(s){var v=function(t,e){return"toggle"===t?1===e?1:-1:"zoomOut"===t?-1:1}(d,t.transformState.scale),g=Wa(t,v,p)
if(r!==g){la(Qa(t),e,l)
var y=ol(e,s,r),x=Da(t,g,y.x,y.y)
x&&(la(Qa(t),e,u),pa(t,x,m,f),cl(t,e))}}}}var dl=function(){return function(t){var e=this
this.mounted=!0,this.pinchLastCenterX=null,this.pinchLastCenterY=null,this.onChangeCallbacks=new Set,this.onInitCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.isWheelPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){e.initializeWindowEvents()},this.unmount=function(){e.cleanupWindowEvents()},this.update=function(t){e.props=t,va(e,e.transformState.scale),e.setup=Xa(t)},this.initializeWindowEvents=function(){var t,n,i=Ja(),o=null===(t=e.wrapperComponent)||void 0===t?void 0:t.ownerDocument,s=null==o?void 0:o.defaultView
null===(n=e.wrapperComponent)||void 0===n||n.addEventListener("wheel",e.onWheelPanning,i),null==s||s.addEventListener("mousedown",e.onPanningStart,i),null==s||s.addEventListener("mousemove",e.onPanning,i),null==s||s.addEventListener("mouseup",e.onPanningStop,i),null==o||o.addEventListener("mouseleave",e.clearPanning,i),null==s||s.addEventListener("keyup",e.setKeyUnPressed,i),null==s||s.addEventListener("keydown",e.setKeyPressed,i)},this.cleanupWindowEvents=function(){var t,n,i=Ja(),o=null===(t=e.wrapperComponent)||void 0===t?void 0:t.ownerDocument,s=null==o?void 0:o.defaultView
null==s||s.removeEventListener("mousedown",e.onPanningStart,i),null==s||s.removeEventListener("mousemove",e.onPanning,i),null==s||s.removeEventListener("mouseup",e.onPanningStop,i),null==o||o.removeEventListener("mouseleave",e.clearPanning,i),null==s||s.removeEventListener("keyup",e.setKeyUnPressed,i),null==s||s.removeEventListener("keydown",e.setKeyPressed,i),document.removeEventListener("mouseleave",e.clearPanning,i),ha(e),null===(n=e.observer)||void 0===n||n.disconnect()},this.handleInitializeWrapperEvents=function(t){var n=Ja()
t.addEventListener("wheel",e.onWheelZoom,n),t.addEventListener("dblclick",e.onDoubleClick,n),t.addEventListener("touchstart",e.onTouchPanningStart,n),t.addEventListener("touchmove",e.onTouchPanning,n),t.addEventListener("touchend",e.onTouchPanningStop,n)},this.handleInitialize=function(t){var n=e.setup.centerOnInit
e.applyTransformation(),e.onInitCallbacks.forEach((function(t){return t(Qa(e))})),n&&(e.setCenter(),e.observer=new ResizeObserver((function(){var n,i=t.offsetWidth,o=t.offsetHeight;(i>0||o>0)&&(e.onInitCallbacks.forEach((function(t){return t(Qa(e))})),e.setCenter(),null===(n=e.observer)||void 0===n||n.disconnect())})),setTimeout((function(){var t
null===(t=e.observer)||void 0===t||t.disconnect()}),5e3),e.observer.observe(t))},this.onWheelZoom=function(t){if(!e.setup.disabled){var n=function(t,e){var n=t.setup.wheel,i=n.disabled,o=n.wheelDisabled,s=n.touchPadDisabled,r=n.excluded,a=t.isInitialized,l=t.isPanning,u=e.target
return!(!a||l||i||!u||o&&!e.ctrlKey||s&&e.ctrlKey||el(u,r))}(e,t)
if(n)e.isPressingKeys(e.setup.wheel.activationKeys)&&(!function(t,e){var n=t.props,i=n.onWheelStart,o=n.onZoomStart
t.wheelStopEventTimer||(ha(t),la(Qa(t),e,i),la(Qa(t),e,o))}(e,t),rl(e,t),al(e,t))}},this.onWheelPanning=function(t){var n=e.setup,i=n.disabled,o=n.wheel,s=n.panning
if(e.wrapperComponent&&e.contentComponent&&!i&&o.wheelDisabled&&!s.disabled&&s.wheelPanning&&!t.ctrlKey){t.preventDefault(),t.stopPropagation()
var r=e.transformState,a=r.positionX,l=r.positionY,u=a-t.deltaX,c=l-t.deltaY,h=s.lockAxisX?a:u,d=s.lockAxisY?l:c,p=e.setup.alignmentAnimation,m=p.sizeX,f=p.sizeY,v=ba(e,m),g=ba(e,f)
h===a&&d===l||Sa(e,h,d,v,g)}},this.onPanningStart=function(t){var n=e.setup.disabled,i=e.props.onPanningStart
n||Pa(e,t)&&e.isPressingKeys(e.setup.panning.activationKeys)&&(0!==t.button||e.setup.panning.allowLeftClickPan)&&(1!==t.button||e.setup.panning.allowMiddleClickPan)&&(2!==t.button||e.setup.panning.allowRightClickPan)&&(t.preventDefault(),t.stopPropagation(),ha(e),Aa(e,t),la(Qa(e),t,i))},this.onPanning=function(t){var n=e.setup.disabled,i=e.props.onPanning
n||wa(e)&&e.isPressingKeys(e.setup.panning.activationKeys)&&(t.preventDefault(),t.stopPropagation(),Ma(e,t.clientX,t.clientY),la(Qa(e),t,i))},this.onPanningStop=function(t){var n=e.props.onPanningStop
e.isPanning&&(ka(e),la(Qa(e),t,n))},this.onPinchStart=function(t){var n=e.setup.disabled,i=e.props,o=i.onPinchingStart,s=i.onZoomStart
if(!n){var r=function(t,e){var n=t.setup.pinch,i=n.disabled,o=n.excluded,s=t.isInitialized,r=e.target
return!(!s||i||!r||el(r,o))}(e,t)
r&&(!function(t,e){var n=sl(e)
t.pinchStartDistance=n,t.lastDistance=n,t.pinchStartScale=t.transformState.scale,t.isPanning=!1
var i=ll(e)
t.pinchLastCenterX=i.x,t.pinchLastCenterY=i.y,ha(t)}(e,t),ha(e),la(Qa(e),t,o),la(Qa(e),t,s))}},this.onPinch=function(t){var n=e.setup.disabled,i=e.props,o=i.onPinching,s=i.onZoom
if(!n){var r=function(t){var e=t.setup.pinch.disabled,n=t.isInitialized,i=t.pinchStartDistance
return!(!n||e||!i)}(e)
r&&(t.preventDefault(),t.stopPropagation(),ul(e,t),la(Qa(e),t,o),la(Qa(e),t,s))}},this.onPinchStop=function(t){var n,i,o=e.props,s=o.onPinchingStop,r=o.onZoomStop
e.pinchStartScale&&(i=(n=e).pinchMidpoint,n.velocity=null,n.lastDistance=null,n.pinchMidpoint=null,n.pinchStartScale=null,n.pinchStartDistance=null,Va(n,null==i?void 0:i.x,null==i?void 0:i.y),la(Qa(e),t,s),la(Qa(e),t,r))},this.onTouchPanningStart=function(t){var n=e.setup.disabled,i=e.props.onPanningStart
if(!n&&(Pa(e,t)&&!(e.lastTouch&&+new Date-e.lastTouch<200))){e.lastTouch=+new Date,ha(e)
var o=t.touches,s=1===o.length,r=2===o.length
s&&(ha(e),Aa(e,t),la(Qa(e),t,i)),r&&e.onPinchStart(t)}},this.onTouchPanning=function(t){var n=e.setup.disabled,i=e.props.onPanning
if(e.isPanning&&1===t.touches.length){if(n)return
if(!wa(e))return
t.preventDefault(),t.stopPropagation()
var o=t.touches[0]
Ma(e,o.clientX,o.clientY),la(Qa(e),t,i)}else t.touches.length>1&&e.onPinch(t)},this.onTouchPanningStop=function(t){e.onPanningStop(t),e.onPinchStop(t)},this.onDoubleClick=function(t){if(!e.setup.disabled){var n=function(t,e){var n=t.isInitialized,i=t.setup,o=t.wrapperComponent,s=i.doubleClick,r=s.disabled,a=s.excluded,l=e.target,u=null==o?void 0:o.contains(l)
return!(!(n&&l&&u)||r||el(l,a))}(e,t)
n&&hl(e,t)}},this.clearPanning=function(t){e.isPanning&&e.onPanningStop(t)},this.setKeyPressed=function(t){e.pressedKeys[t.key]=!0},this.setKeyUnPressed=function(t){e.pressedKeys[t.key]=!1},this.isPressingKeys=function(t){return!t.length||Boolean(t.find((function(t){return e.pressedKeys[t]})))},this.setTransformState=function(t,n,i){var o=e.props.onTransformed
if(!Number.isNaN(t)&&!Number.isNaN(n)&&!Number.isNaN(i)){t!==e.transformState.scale&&(e.transformState.previousScale=e.transformState.scale,e.transformState.scale=t),e.transformState.positionX=n,e.transformState.positionY=i,e.applyTransformation()
var s=Qa(e)
e.onChangeCallbacks.forEach((function(t){return t(s)})),la(s,{scale:t,positionX:n,positionY:i},o)}},this.setCenter=function(){if(e.wrapperComponent&&e.contentComponent){var t=il(e.transformState.scale,e.wrapperComponent,e.contentComponent)
e.setTransformState(t.scale,t.positionX,t.positionY)}},this.handleTransformStyles=function(t,n,i){return e.props.customTransform?e.props.customTransform(t,n,i):function(t,e,n){return"translate(".concat(t,"px, ").concat(e,"px) scale(").concat(n,")")}(t,n,i)},this.applyTransformation=function(){if(e.mounted&&e.contentComponent){var t=e.transformState,n=t.scale,i=t.positionX,o=t.positionY,s=e.handleTransformStyles(i,o,n)
e.contentComponent.style.transform=s}},this.getContext=function(){return Qa(e)},this.onChange=function(t){return e.onChangeCallbacks.has(t)||e.onChangeCallbacks.add(t),function(){e.onChangeCallbacks.delete(t)}},this.onInit=function(t){return e.onInitCallbacks.has(t)||e.onInitCallbacks.add(t),function(){e.onInitCallbacks.delete(t)}},this.init=function(t,n){e.cleanupWindowEvents(),e.wrapperComponent=t,e.contentComponent=n,va(e,e.transformState.scale),e.handleInitializeWrapperEvents(t),e.handleInitialize(n),e.initializeWindowEvents(),e.isInitialized=!0
var i=Qa(e)
la(i,void 0,e.props.onInit)},this.props=t,this.setup=Xa(this.props),this.transformState=Na(this.props)}}(),pl=e.createContext(null),ml=e.forwardRef((function(n,i){var o,s,r=t.useRef(new dl(n)).current,a=(o=n.children,s=qa(r),"function"==typeof o?o(s):o)
return t.useImperativeHandle(i,(function(){return qa(r)}),[r]),t.useEffect((function(){r.update(n)}),[r,n]),e.createElement(pl.Provider,{value:r},a)}))
e.forwardRef((function(n,i){var o,s=t.useRef(null),r=t.useContext(pl)
return t.useEffect((function(){return r.onChange((function(t){if(s.current){s.current.style.transform=r.handleTransformStyles(0,0,1/t.instance.transformState.scale)}}))}),[r]),e.createElement("div",Ra({},n,{ref:(o=[s,i],function(t){o.forEach((function(e){"function"==typeof e?e(t):null!=e&&(e.current=t)}))})}))}))
var fl="transform-component-module_wrapper__SPB86",vl="transform-component-module_content__FBWxo"
!function(t,e){void 0===e&&(e={})
var n=e.insertAt
if("undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style")
o.type="text/css","top"===n&&i.firstChild?i.insertBefore(o,i.firstChild):i.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}(".transform-component-module_wrapper__SPB86 {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n}\n.transform-component-module_content__FBWxo {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__FBWxo img {\n  pointer-events: none;\n}\n")
var gl=function(n){var i=n.children,o=n.wrapperClass,s=void 0===o?"":o,r=n.contentClass,a=void 0===r?"":r,l=n.wrapperStyle,u=n.contentStyle,c=n.wrapperProps,h=void 0===c?{}:c,d=n.contentProps,p=void 0===d?{}:d,m=t.useContext(pl),f=m.init,v=m.cleanupWindowEvents,g=t.useRef(null),y=t.useRef(null)
return t.useEffect((function(){var t=g.current,e=y.current
return null!==t&&null!==e&&f&&(null==f||f(t,e)),function(){null==v||v()}}),[]),e.createElement("div",Ra({},h,{ref:g,className:"".concat(Ia," ").concat(fl," ").concat(s),style:l}),e.createElement("div",Ra({},p,{ref:y,className:"".concat(Ya," ").concat(vl," ").concat(a),style:u}),i))}
export{ml as T,ra as a,gl as b,h as j,Hr as m}
