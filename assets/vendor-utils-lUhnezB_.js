const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/browser-CnWk6CUC.js","assets/vendor-react-DujXGBlD.js"])))=>i.map(i=>d[i]);
import{g as e,c as t}from"./vendor-react-DujXGBlD.js"
const s={},r=function(e,t,r){let i=Promise.resolve()
if(t&&t.length>0){document.getElementsByTagName("link")
const e=document.querySelector("meta[property=csp-nonce]"),r=(null==e?void 0:e.nonce)||(null==e?void 0:e.getAttribute("nonce"))
i=Promise.allSettled(t.map((e=>{if((e=function(e){return"/"+e}(e))in s)return
s[e]=!0
const t=e.endsWith(".css"),i=t?'[rel="stylesheet"]':""
if(document.querySelector(`link[href="${e}"]${i}`))return
const n=document.createElement("link")
return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script"),n.crossOrigin="",n.href=e,r&&n.setAttribute("nonce",r),document.head.appendChild(n),t?new Promise(((t,s)=>{n.addEventListener("load",t),n.addEventListener("error",(()=>s(new Error(`Unable to preload CSS for ${e}`))))})):void 0})))}function n(e){const t=new Event("vite:preloadError",{cancelable:!0})
if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return i.then((t=>{for(const e of t||[])"rejected"===e.status&&n(e.reason)
return e().catch(n)}))}
class i extends Error{constructor(e,t="FunctionsError",s){super(e),this.name=t,this.context=s}}class n extends i{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class o extends i{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class a extends i{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var c,h;(h=c||(c={})).Any="any",h.ApNortheast1="ap-northeast-1",h.ApNortheast2="ap-northeast-2",h.ApSouth1="ap-south-1",h.ApSoutheast1="ap-southeast-1",h.ApSoutheast2="ap-southeast-2",h.CaCentral1="ca-central-1",h.EuCentral1="eu-central-1",h.EuWest1="eu-west-1",h.EuWest2="eu-west-2",h.EuWest3="eu-west-3",h.SaEast1="sa-east-1",h.UsEast1="us-east-1",h.UsWest1="us-west-1",h.UsWest2="us-west-2"
var l=function(e,t,s,r){return new(s||(s=Promise))((function(i,n){function o(e){try{c(r.next(e))}catch(t){n(t)}}function a(e){try{c(r.throw(e))}catch(t){n(t)}}function c(e){var t
e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}c((r=r.apply(e,t||[])).next())}))}
class u{constructor(e,{headers:t={},customFetch:s,region:i=c.Any}={}){this.url=e,this.headers=t,this.region=i,this.fetch=(e=>{let t
return t=e||("undefined"==typeof fetch?(...e)=>r((async()=>{const{default:e}=await Promise.resolve().then((()=>S))
return{default:e}}),void 0).then((({default:t})=>t(...e))):fetch),(...e)=>t(...e)})(s)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e,t={}){var s
return l(this,void 0,void 0,(function*(){try{const{headers:r,method:i,body:c}=t
let h,l={},{region:u}=t
u||(u=this.region),u&&"any"!==u&&(l["x-region"]=u),c&&(r&&!Object.prototype.hasOwnProperty.call(r,"Content-Type")||!r)&&("undefined"!=typeof Blob&&c instanceof Blob||c instanceof ArrayBuffer?(l["Content-Type"]="application/octet-stream",h=c):"string"==typeof c?(l["Content-Type"]="text/plain",h=c):"undefined"!=typeof FormData&&c instanceof FormData?h=c:(l["Content-Type"]="application/json",h=JSON.stringify(c)))
const d=yield this.fetch(`${this.url}/${e}`,{method:i||"POST",headers:Object.assign(Object.assign(Object.assign({},l),this.headers),r),body:h}).catch((e=>{throw new n(e)})),f=d.headers.get("x-relay-error")
if(f&&"true"===f)throw new o(d)
if(!d.ok)throw new a(d)
let p,g=(null!==(s=d.headers.get("Content-Type"))&&void 0!==s?s:"text/plain").split(";")[0].trim()
return p="application/json"===g?yield d.json():"application/octet-stream"===g?yield d.blob():"text/event-stream"===g?d:"multipart/form-data"===g?yield d.formData():yield d.text(),{data:p,error:null}}catch(r){return{data:null,error:r}}}))}}var d={},f={},p={},g={},y={},v={},m=function(){if("undefined"!=typeof self)return self
if("undefined"!=typeof window)return window
if("undefined"!=typeof global)return global
throw new Error("unable to locate global object")}()
const _=m.fetch,w=m.fetch.bind(m),b=m.Headers,k=m.Request,T=m.Response,S=Object.freeze({__proto__:null,Headers:b,Request:k,Response:T,default:w,fetch:_}),E=e(S)
var j={}
Object.defineProperty(j,"__esModule",{value:!0})
class P extends Error{constructor(e){super(e.message),this.name="PostgrestError",this.details=e.details,this.hint=e.hint,this.code=e.code}}j.default=P
var O=t&&t.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(v,"__esModule",{value:!0})
const $=O(E),A=O(j)
v.default=class{constructor(e){this.shouldThrowOnError=!1,this.method=e.method,this.url=e.url,this.headers=e.headers,this.schema=e.schema,this.body=e.body,this.shouldThrowOnError=e.shouldThrowOnError,this.signal=e.signal,this.isMaybeSingle=e.isMaybeSingle,e.fetch?this.fetch=e.fetch:"undefined"==typeof fetch?this.fetch=$.default:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(e,t){return this.headers=Object.assign({},this.headers),this.headers[e]=t,this}then(e,t){void 0===this.schema||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),"GET"!==this.method&&"HEAD"!==this.method&&(this.headers["Content-Type"]="application/json")
let s=(0,this.fetch)(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then((async e=>{var t,s,r
let i=null,n=null,o=null,a=e.status,c=e.statusText
if(e.ok){if("HEAD"!==this.method){const t=await e.text()
""===t||(n="text/csv"===this.headers.Accept||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?t:JSON.parse(t))}const r=null===(t=this.headers.Prefer)||void 0===t?void 0:t.match(/count=(exact|planned|estimated)/),h=null===(s=e.headers.get("content-range"))||void 0===s?void 0:s.split("/")
r&&h&&h.length>1&&(o=parseInt(h[1])),this.isMaybeSingle&&"GET"===this.method&&Array.isArray(n)&&(n.length>1?(i={code:"PGRST116",details:`Results contain ${n.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},n=null,o=null,a=406,c="Not Acceptable"):n=1===n.length?n[0]:null)}else{const t=await e.text()
try{i=JSON.parse(t),Array.isArray(i)&&404===e.status&&(n=[],i=null,a=200,c="OK")}catch(h){404===e.status&&""===t?(a=204,c="No Content"):i={message:t}}if(i&&this.isMaybeSingle&&(null===(r=null==i?void 0:i.details)||void 0===r?void 0:r.includes("0 rows"))&&(i=null,a=200,c="OK"),i&&this.shouldThrowOnError)throw new A.default(i)}return{error:i,data:n,count:o,status:a,statusText:c}}))
return this.shouldThrowOnError||(s=s.catch((e=>{var t,s,r
return{error:{message:`${null!==(t=null==e?void 0:e.name)&&void 0!==t?t:"FetchError"}: ${null==e?void 0:e.message}`,details:`${null!==(s=null==e?void 0:e.stack)&&void 0!==s?s:""}`,hint:"",code:`${null!==(r=null==e?void 0:e.code)&&void 0!==r?r:""}`},data:null,count:null,status:0,statusText:""}}))),s.then(e,t)}}
var R=t&&t.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(y,"__esModule",{value:!0})
const x=R(v)
let C=class extends x.default{select(e){let t=!1
const s=(null!=e?e:"*").split("").map((e=>/\s/.test(e)&&!t?"":('"'===e&&(t=!t),e))).join("")
return this.url.searchParams.set("select",s),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(e,{ascending:t=!0,nullsFirst:s,foreignTable:r,referencedTable:i=r}={}){const n=i?`${i}.order`:"order",o=this.url.searchParams.get(n)
return this.url.searchParams.set(n,`${o?`${o},`:""}${e}.${t?"asc":"desc"}${void 0===s?"":s?".nullsfirst":".nullslast"}`),this}limit(e,{foreignTable:t,referencedTable:s=t}={}){const r=void 0===s?"limit":`${s}.limit`
return this.url.searchParams.set(r,`${e}`),this}range(e,t,{foreignTable:s,referencedTable:r=s}={}){const i=void 0===r?"offset":`${r}.offset`,n=void 0===r?"limit":`${r}.limit`
return this.url.searchParams.set(i,`${e}`),this.url.searchParams.set(n,""+(t-e+1)),this}abortSignal(e){return this.signal=e,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return"GET"===this.method?this.headers.Accept="application/json":this.headers.Accept="application/vnd.pgrst.object+json",this.isMaybeSingle=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:e=!1,verbose:t=!1,settings:s=!1,buffers:r=!1,wal:i=!1,format:n="text"}={}){var o
const a=[e?"analyze":null,t?"verbose":null,s?"settings":null,r?"buffers":null,i?"wal":null].filter(Boolean).join("|"),c=null!==(o=this.headers.Accept)&&void 0!==o?o:"application/json"
return this.headers.Accept=`application/vnd.pgrst.plan+${n}; for="${c}"; options=${a};`,this}rollback(){var e
return(null!==(e=this.headers.Prefer)&&void 0!==e?e:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}}
y.default=C
var I=t&&t.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(g,"__esModule",{value:!0})
const L=I(y)
let U=class extends L.default{eq(e,t){return this.url.searchParams.append(e,`eq.${t}`),this}neq(e,t){return this.url.searchParams.append(e,`neq.${t}`),this}gt(e,t){return this.url.searchParams.append(e,`gt.${t}`),this}gte(e,t){return this.url.searchParams.append(e,`gte.${t}`),this}lt(e,t){return this.url.searchParams.append(e,`lt.${t}`),this}lte(e,t){return this.url.searchParams.append(e,`lte.${t}`),this}like(e,t){return this.url.searchParams.append(e,`like.${t}`),this}likeAllOf(e,t){return this.url.searchParams.append(e,`like(all).{${t.join(",")}}`),this}likeAnyOf(e,t){return this.url.searchParams.append(e,`like(any).{${t.join(",")}}`),this}ilike(e,t){return this.url.searchParams.append(e,`ilike.${t}`),this}ilikeAllOf(e,t){return this.url.searchParams.append(e,`ilike(all).{${t.join(",")}}`),this}ilikeAnyOf(e,t){return this.url.searchParams.append(e,`ilike(any).{${t.join(",")}}`),this}is(e,t){return this.url.searchParams.append(e,`is.${t}`),this}in(e,t){const s=Array.from(new Set(t)).map((e=>"string"==typeof e&&new RegExp("[,()]").test(e)?`"${e}"`:`${e}`)).join(",")
return this.url.searchParams.append(e,`in.(${s})`),this}contains(e,t){return"string"==typeof t?this.url.searchParams.append(e,`cs.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cs.{${t.join(",")}}`):this.url.searchParams.append(e,`cs.${JSON.stringify(t)}`),this}containedBy(e,t){return"string"==typeof t?this.url.searchParams.append(e,`cd.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cd.{${t.join(",")}}`):this.url.searchParams.append(e,`cd.${JSON.stringify(t)}`),this}rangeGt(e,t){return this.url.searchParams.append(e,`sr.${t}`),this}rangeGte(e,t){return this.url.searchParams.append(e,`nxl.${t}`),this}rangeLt(e,t){return this.url.searchParams.append(e,`sl.${t}`),this}rangeLte(e,t){return this.url.searchParams.append(e,`nxr.${t}`),this}rangeAdjacent(e,t){return this.url.searchParams.append(e,`adj.${t}`),this}overlaps(e,t){return"string"==typeof t?this.url.searchParams.append(e,`ov.${t}`):this.url.searchParams.append(e,`ov.{${t.join(",")}}`),this}textSearch(e,t,{config:s,type:r}={}){let i=""
"plain"===r?i="pl":"phrase"===r?i="ph":"websearch"===r&&(i="w")
const n=void 0===s?"":`(${s})`
return this.url.searchParams.append(e,`${i}fts${n}.${t}`),this}match(e){return Object.entries(e).forEach((([e,t])=>{this.url.searchParams.append(e,`eq.${t}`)})),this}not(e,t,s){return this.url.searchParams.append(e,`not.${t}.${s}`),this}or(e,{foreignTable:t,referencedTable:s=t}={}){const r=s?`${s}.or`:"or"
return this.url.searchParams.append(r,`(${e})`),this}filter(e,t,s){return this.url.searchParams.append(e,`${t}.${s}`),this}}
g.default=U
var D=t&&t.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(p,"__esModule",{value:!0})
const N=D(g)
p.default=class{constructor(e,{headers:t={},schema:s,fetch:r}){this.url=e,this.headers=t,this.schema=s,this.fetch=r}select(e,{head:t=!1,count:s}={}){const r=t?"HEAD":"GET"
let i=!1
const n=(null!=e?e:"*").split("").map((e=>/\s/.test(e)&&!i?"":('"'===e&&(i=!i),e))).join("")
return this.url.searchParams.set("select",n),s&&(this.headers.Prefer=`count=${s}`),new N.default({method:r,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(e,{count:t,defaultToNull:s=!0}={}){const r=[]
if(this.headers.Prefer&&r.push(this.headers.Prefer),t&&r.push(`count=${t}`),s||r.push("missing=default"),this.headers.Prefer=r.join(","),Array.isArray(e)){const t=e.reduce(((e,t)=>e.concat(Object.keys(t))),[])
if(t.length>0){const e=[...new Set(t)].map((e=>`"${e}"`))
this.url.searchParams.set("columns",e.join(","))}}return new N.default({method:"POST",url:this.url,headers:this.headers,schema:this.schema,body:e,fetch:this.fetch,allowEmpty:!1})}upsert(e,{onConflict:t,ignoreDuplicates:s=!1,count:r,defaultToNull:i=!0}={}){const n=[`resolution=${s?"ignore":"merge"}-duplicates`]
if(void 0!==t&&this.url.searchParams.set("on_conflict",t),this.headers.Prefer&&n.push(this.headers.Prefer),r&&n.push(`count=${r}`),i||n.push("missing=default"),this.headers.Prefer=n.join(","),Array.isArray(e)){const t=e.reduce(((e,t)=>e.concat(Object.keys(t))),[])
if(t.length>0){const e=[...new Set(t)].map((e=>`"${e}"`))
this.url.searchParams.set("columns",e.join(","))}}return new N.default({method:"POST",url:this.url,headers:this.headers,schema:this.schema,body:e,fetch:this.fetch,allowEmpty:!1})}update(e,{count:t}={}){const s=[]
return this.headers.Prefer&&s.push(this.headers.Prefer),t&&s.push(`count=${t}`),this.headers.Prefer=s.join(","),new N.default({method:"PATCH",url:this.url,headers:this.headers,schema:this.schema,body:e,fetch:this.fetch,allowEmpty:!1})}delete({count:e}={}){const t=[]
return e&&t.push(`count=${e}`),this.headers.Prefer&&t.unshift(this.headers.Prefer),this.headers.Prefer=t.join(","),new N.default({method:"DELETE",url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}}
var B={},F={}
Object.defineProperty(F,"__esModule",{value:!0}),F.version=void 0,F.version="0.0.0-automated",Object.defineProperty(B,"__esModule",{value:!0}),B.DEFAULT_HEADERS=void 0
const M=F
B.DEFAULT_HEADERS={"X-Client-Info":`postgrest-js/${M.version}`}
var q=t&&t.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(f,"__esModule",{value:!0})
const z=q(p),J=q(g),K=B
f.default=class e{constructor(e,{headers:t={},schema:s,fetch:r}={}){this.url=e,this.headers=Object.assign(Object.assign({},K.DEFAULT_HEADERS),t),this.schemaName=s,this.fetch=r}from(e){const t=new URL(`${this.url}/${e}`)
return new z.default(t,{headers:Object.assign({},this.headers),schema:this.schemaName,fetch:this.fetch})}schema(t){return new e(this.url,{headers:this.headers,schema:t,fetch:this.fetch})}rpc(e,t={},{head:s=!1,get:r=!1,count:i}={}){let n
const o=new URL(`${this.url}/rpc/${e}`)
let a
s||r?(n=s?"HEAD":"GET",Object.entries(t).filter((([e,t])=>void 0!==t)).map((([e,t])=>[e,Array.isArray(t)?`{${t.join(",")}}`:`${t}`])).forEach((([e,t])=>{o.searchParams.append(e,t)}))):(n="POST",a=t)
const c=Object.assign({},this.headers)
return i&&(c.Prefer=`count=${i}`),new J.default({method:n,url:o,headers:c,schema:this.schemaName,body:a,fetch:this.fetch,allowEmpty:!1})}}
var H=t&&t.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(d,"__esModule",{value:!0}),d.PostgrestError=d.PostgrestBuilder=d.PostgrestTransformBuilder=d.PostgrestFilterBuilder=d.PostgrestQueryBuilder=d.PostgrestClient=void 0
const G=H(f)
d.PostgrestClient=G.default
const W=H(p)
d.PostgrestQueryBuilder=W.default
const V=H(g)
d.PostgrestFilterBuilder=V.default
const Y=H(y)
d.PostgrestTransformBuilder=Y.default
const Q=H(v)
d.PostgrestBuilder=Q.default
const X=H(j)
d.PostgrestError=X.default
var Z=d.default={PostgrestClient:G.default,PostgrestQueryBuilder:W.default,PostgrestFilterBuilder:V.default,PostgrestTransformBuilder:Y.default,PostgrestBuilder:Q.default,PostgrestError:X.default}
const{PostgrestClient:ee,PostgrestQueryBuilder:te,PostgrestFilterBuilder:se,PostgrestTransformBuilder:re,PostgrestBuilder:ie}=Z,ne={"X-Client-Info":"realtime-js/2.10.9"}
var oe,ae,ce,he,le,ue,de,fe,pe,ge,ye;(ae=oe||(oe={}))[ae.connecting=0]="connecting",ae[ae.open=1]="open",ae[ae.closing=2]="closing",ae[ae.closed=3]="closed",(he=ce||(ce={})).closed="closed",he.errored="errored",he.joined="joined",he.joining="joining",he.leaving="leaving",(ue=le||(le={})).close="phx_close",ue.error="phx_error",ue.join="phx_join",ue.reply="phx_reply",ue.leave="phx_leave",ue.access_token="access_token",(de||(de={})).websocket="websocket",(pe=fe||(fe={})).Connecting="connecting",pe.Open="open",pe.Closing="closing",pe.Closed="closed"
class ve{constructor(){this.HEADER_LENGTH=1}decode(e,t){return e.constructor===ArrayBuffer?t(this._binaryDecode(e)):t("string"==typeof e?JSON.parse(e):{})}_binaryDecode(e){const t=new DataView(e),s=new TextDecoder
return this._decodeBroadcast(e,t,s)}_decodeBroadcast(e,t,s){const r=t.getUint8(1),i=t.getUint8(2)
let n=this.HEADER_LENGTH+2
const o=s.decode(e.slice(n,n+r))
n+=r
const a=s.decode(e.slice(n,n+i))
n+=i
return{ref:null,topic:o,event:a,payload:JSON.parse(s.decode(e.slice(n,e.byteLength)))}}}class me{constructor(e,t){this.callback=e,this.timerCalc=t,this.timer=void 0,this.tries=0,this.callback=e,this.timerCalc=t}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout((()=>{this.tries=this.tries+1,this.callback()}),this.timerCalc(this.tries+1))}}(ye=ge||(ge={})).abstime="abstime",ye.bool="bool",ye.date="date",ye.daterange="daterange",ye.float4="float4",ye.float8="float8",ye.int2="int2",ye.int4="int4",ye.int4range="int4range",ye.int8="int8",ye.int8range="int8range",ye.json="json",ye.jsonb="jsonb",ye.money="money",ye.numeric="numeric",ye.oid="oid",ye.reltime="reltime",ye.text="text",ye.time="time",ye.timestamp="timestamp",ye.timestamptz="timestamptz",ye.timetz="timetz",ye.tsrange="tsrange",ye.tstzrange="tstzrange"
const _e=(e,t,s={})=>{var r
const i=null!==(r=s.skipTypes)&&void 0!==r?r:[]
return Object.keys(t).reduce(((s,r)=>(s[r]=we(r,e,t,i),s)),{})},we=(e,t,s,r)=>{const i=t.find((t=>t.name===e)),n=null==i?void 0:i.type,o=s[e]
return n&&!r.includes(n)?be(n,o):ke(o)},be=(e,t)=>{if("_"===e.charAt(0)){const s=e.slice(1,e.length)
return je(t,s)}switch(e){case ge.bool:return Te(t)
case ge.float4:case ge.float8:case ge.int2:case ge.int4:case ge.int8:case ge.numeric:case ge.oid:return Se(t)
case ge.json:case ge.jsonb:return Ee(t)
case ge.timestamp:return Pe(t)
case ge.abstime:case ge.date:case ge.daterange:case ge.int4range:case ge.int8range:case ge.money:case ge.reltime:case ge.text:case ge.time:case ge.timestamptz:case ge.timetz:case ge.tsrange:case ge.tstzrange:default:return ke(t)}},ke=e=>e,Te=e=>{switch(e){case"t":return!0
case"f":return!1
default:return e}},Se=e=>{if("string"==typeof e){const t=parseFloat(e)
if(!Number.isNaN(t))return t}return e},Ee=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){return e}return e},je=(e,t)=>{if("string"!=typeof e)return e
const s=e.length-1,r=e[s]
if("{"===e[0]&&"}"===r){let r
const n=e.slice(1,s)
try{r=JSON.parse("["+n+"]")}catch(i){r=n?n.split(","):[]}return r.map((e=>be(t,e)))}return e},Pe=e=>"string"==typeof e?e.replace(" ","T"):e,Oe=e=>{let t=e
return t=t.replace(/^ws/i,"http"),t=t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),t.replace(/\/+$/,"")}
class $e{constructor(e,t,s={},r=1e4){this.channel=e,this.event=t,this.payload=s,this.timeout=r,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(e){this.timeout=e,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(e){this.payload=Object.assign(Object.assign({},this.payload),e)}receive(e,t){var s
return this._hasReceived(e)&&t(null===(s=this.receivedResp)||void 0===s?void 0:s.response),this.recHooks.push({status:e,callback:t}),this}startTimeout(){if(this.timeoutTimer)return
this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref)
this.channel._on(this.refEvent,{},(e=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=e,this._matchReceive(e)})),this.timeoutTimer=setTimeout((()=>{this.trigger("timeout",{})}),this.timeout)}trigger(e,t){this.refEvent&&this.channel._trigger(this.refEvent,{status:e,response:t})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:e,response:t}){this.recHooks.filter((t=>t.status===e)).forEach((e=>e.callback(t)))}_hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}}var Ae,Re,xe,Ce,Ie,Le,Ue,De;(Re=Ae||(Ae={})).SYNC="sync",Re.JOIN="join",Re.LEAVE="leave"
class Ne{constructor(e,t){this.channel=e,this.state={},this.pendingDiffs=[],this.joinRef=null,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}}
const s=(null==t?void 0:t.events)||{state:"presence_state",diff:"presence_diff"}
this.channel._on(s.state,{},(e=>{const{onJoin:t,onLeave:s,onSync:r}=this.caller
this.joinRef=this.channel._joinRef(),this.state=Ne.syncState(this.state,e,t,s),this.pendingDiffs.forEach((e=>{this.state=Ne.syncDiff(this.state,e,t,s)})),this.pendingDiffs=[],r()})),this.channel._on(s.diff,{},(e=>{const{onJoin:t,onLeave:s,onSync:r}=this.caller
this.inPendingSyncState()?this.pendingDiffs.push(e):(this.state=Ne.syncDiff(this.state,e,t,s),r())})),this.onJoin(((e,t,s)=>{this.channel._trigger("presence",{event:"join",key:e,currentPresences:t,newPresences:s})})),this.onLeave(((e,t,s)=>{this.channel._trigger("presence",{event:"leave",key:e,currentPresences:t,leftPresences:s})})),this.onSync((()=>{this.channel._trigger("presence",{event:"sync"})}))}static syncState(e,t,s,r){const i=this.cloneDeep(e),n=this.transformState(t),o={},a={}
return this.map(i,((e,t)=>{n[e]||(a[e]=t)})),this.map(n,((e,t)=>{const s=i[e]
if(s){const r=t.map((e=>e.presence_ref)),i=s.map((e=>e.presence_ref)),n=t.filter((e=>i.indexOf(e.presence_ref)<0)),c=s.filter((e=>r.indexOf(e.presence_ref)<0))
n.length>0&&(o[e]=n),c.length>0&&(a[e]=c)}else o[e]=t})),this.syncDiff(i,{joins:o,leaves:a},s,r)}static syncDiff(e,t,s,r){const{joins:i,leaves:n}={joins:this.transformState(t.joins),leaves:this.transformState(t.leaves)}
return s||(s=()=>{}),r||(r=()=>{}),this.map(i,((t,r)=>{var i
const n=null!==(i=e[t])&&void 0!==i?i:[]
if(e[t]=this.cloneDeep(r),n.length>0){const s=e[t].map((e=>e.presence_ref)),r=n.filter((e=>s.indexOf(e.presence_ref)<0))
e[t].unshift(...r)}s(t,n,r)})),this.map(n,((t,s)=>{let i=e[t]
if(!i)return
const n=s.map((e=>e.presence_ref))
i=i.filter((e=>n.indexOf(e.presence_ref)<0)),e[t]=i,r(t,i,s),0===i.length&&delete e[t]})),e}static map(e,t){return Object.getOwnPropertyNames(e).map((s=>t(s,e[s])))}static transformState(e){return e=this.cloneDeep(e),Object.getOwnPropertyNames(e).reduce(((t,s)=>{const r=e[s]
return t[s]="metas"in r?r.metas.map((e=>(e.presence_ref=e.phx_ref,delete e.phx_ref,delete e.phx_ref_prev,e))):r,t}),{})}static cloneDeep(e){return JSON.parse(JSON.stringify(e))}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}(Ce=xe||(xe={})).ALL="*",Ce.INSERT="INSERT",Ce.UPDATE="UPDATE",Ce.DELETE="DELETE",(Le=Ie||(Ie={})).BROADCAST="broadcast",Le.PRESENCE="presence",Le.POSTGRES_CHANGES="postgres_changes",Le.SYSTEM="system",(De=Ue||(Ue={})).SUBSCRIBED="SUBSCRIBED",De.TIMED_OUT="TIMED_OUT",De.CLOSED="CLOSED",De.CHANNEL_ERROR="CHANNEL_ERROR"
class Be{constructor(e,t={config:{}},s){this.topic=e,this.params=t,this.socket=s,this.bindings={},this.state=ce.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:""},private:!1},t.config),this.timeout=this.socket.timeout,this.joinPush=new $e(this,le.join,this.params,this.timeout),this.rejoinTimer=new me((()=>this._rejoinUntilConnected()),this.socket.reconnectAfterMs),this.joinPush.receive("ok",(()=>{this.state=ce.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach((e=>e.send())),this.pushBuffer=[]})),this._onClose((()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=ce.closed,this.socket._remove(this)})),this._onError((e=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,e),this.state=ce.errored,this.rejoinTimer.scheduleTimeout())})),this.joinPush.receive("timeout",(()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=ce.errored,this.rejoinTimer.scheduleTimeout())})),this._on(le.reply,{},((e,t)=>{this._trigger(this._replyEventName(t),e)})),this.presence=new Ne(this),this.broadcastEndpointURL=Oe(this.socket.endPoint)+"/api/broadcast",this.private=this.params.config.private||!1}subscribe(e,t=this.timeout){var s,r
if(this.socket.isConnected()||this.socket.connect(),this.joinedOnce)throw"tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance"
{const{config:{broadcast:i,presence:n,private:o}}=this.params
this._onError((t=>e&&e("CHANNEL_ERROR",t))),this._onClose((()=>e&&e("CLOSED")))
const a={},c={broadcast:i,presence:n,postgres_changes:null!==(r=null===(s=this.bindings.postgres_changes)||void 0===s?void 0:s.map((e=>e.filter)))&&void 0!==r?r:[],private:o}
this.socket.accessToken&&(a.access_token=this.socket.accessToken),this.updateJoinPayload(Object.assign({config:c},a)),this.joinedOnce=!0,this._rejoin(t),this.joinPush.receive("ok",(({postgres_changes:t})=>{var s
if(this.socket.accessToken&&this.socket.setAuth(this.socket.accessToken),void 0!==t){const r=this.bindings.postgres_changes,i=null!==(s=null==r?void 0:r.length)&&void 0!==s?s:0,n=[]
for(let s=0;s<i;s++){const i=r[s],{filter:{event:o,schema:a,table:c,filter:h}}=i,l=t&&t[s]
if(!l||l.event!==o||l.schema!==a||l.table!==c||l.filter!==h)return this.unsubscribe(),void(e&&e("CHANNEL_ERROR",new Error("mismatch between server and client bindings for postgres changes")))
n.push(Object.assign(Object.assign({},i),{id:l.id}))}return this.bindings.postgres_changes=n,void(e&&e("SUBSCRIBED"))}e&&e("SUBSCRIBED")})).receive("error",(t=>{e&&e("CHANNEL_ERROR",new Error(JSON.stringify(Object.values(t).join(", ")||"error")))})).receive("timeout",(()=>{e&&e("TIMED_OUT")}))}return this}presenceState(){return this.presence.state}async track(e,t={}){return await this.send({type:"presence",event:"track",payload:e},t.timeout||this.timeout)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,t,s){return this._on(e,t,s)}async send(e,t={}){var s,r
if(this._canPush()||"broadcast"!==e.type)return new Promise((s=>{var r,i,n
const o=this._push(e.type,e,t.timeout||this.timeout)
"broadcast"!==e.type||(null===(n=null===(i=null===(r=this.params)||void 0===r?void 0:r.config)||void 0===i?void 0:i.broadcast)||void 0===n?void 0:n.ack)||s("ok"),o.receive("ok",(()=>s("ok"))),o.receive("error",(()=>s("error"))),o.receive("timeout",(()=>s("timed out")))}))
{const{event:n,payload:o}=e,a={method:"POST",headers:{Authorization:this.socket.accessToken?`Bearer ${this.socket.accessToken}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:n,payload:o,private:this.private}]})}
try{const e=await this._fetchWithTimeout(this.broadcastEndpointURL,a,null!==(s=t.timeout)&&void 0!==s?s:this.timeout)
return await(null===(r=e.body)||void 0===r?void 0:r.cancel()),e.ok?"ok":"error"}catch(i){return"AbortError"===i.name?"timed out":"error"}}}updateJoinPayload(e){this.joinPush.updatePayload(e)}unsubscribe(e=this.timeout){this.state=ce.leaving
const t=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(le.close,"leave",this._joinRef())}
return this.rejoinTimer.reset(),this.joinPush.destroy(),new Promise((s=>{const r=new $e(this,le.leave,{},e)
r.receive("ok",(()=>{t(),s("ok")})).receive("timeout",(()=>{t(),s("timed out")})).receive("error",(()=>{s("error")})),r.send(),this._canPush()||r.trigger("ok",{})}))}async _fetchWithTimeout(e,t,s){const r=new AbortController,i=setTimeout((()=>r.abort()),s),n=await this.socket.fetch(e,Object.assign(Object.assign({},t),{signal:r.signal}))
return clearTimeout(i),n}_push(e,t,s=this.timeout){if(!this.joinedOnce)throw`tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`
let r=new $e(this,e,t,s)
return this._canPush()?r.send():(r.startTimeout(),this.pushBuffer.push(r)),r}_onMessage(e,t,s){return t}_isMember(e){return this.topic===e}_joinRef(){return this.joinPush.ref}_trigger(e,t,s){var r,i
const n=e.toLocaleLowerCase(),{close:o,error:a,leave:c,join:h}=le
if(s&&[o,a,c,h].indexOf(n)>=0&&s!==this._joinRef())return
let l=this._onMessage(n,t,s)
if(t&&!l)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(n)?null===(r=this.bindings.postgres_changes)||void 0===r||r.filter((e=>{var t,s,r
return"*"===(null===(t=e.filter)||void 0===t?void 0:t.event)||(null===(r=null===(s=e.filter)||void 0===s?void 0:s.event)||void 0===r?void 0:r.toLocaleLowerCase())===n})).map((e=>e.callback(l,s))):null===(i=this.bindings[n])||void 0===i||i.filter((e=>{var s,r,i,o,a,c
if(["broadcast","presence","postgres_changes"].includes(n)){if("id"in e){const n=e.id,o=null===(s=e.filter)||void 0===s?void 0:s.event
return n&&(null===(r=t.ids)||void 0===r?void 0:r.includes(n))&&("*"===o||(null==o?void 0:o.toLocaleLowerCase())===(null===(i=t.data)||void 0===i?void 0:i.type.toLocaleLowerCase()))}{const s=null===(a=null===(o=null==e?void 0:e.filter)||void 0===o?void 0:o.event)||void 0===a?void 0:a.toLocaleLowerCase()
return"*"===s||s===(null===(c=null==t?void 0:t.event)||void 0===c?void 0:c.toLocaleLowerCase())}}return e.type.toLocaleLowerCase()===n})).map((e=>{if("object"==typeof l&&"ids"in l){const e=l.data,{schema:t,table:s,commit_timestamp:r,type:i,errors:n}=e,o={schema:t,table:s,commit_timestamp:r,eventType:i,new:{},old:{},errors:n}
l=Object.assign(Object.assign({},o),this._getPayloadRecords(e))}e.callback(l,s)}))}_isClosed(){return this.state===ce.closed}_isJoined(){return this.state===ce.joined}_isJoining(){return this.state===ce.joining}_isLeaving(){return this.state===ce.leaving}_replyEventName(e){return`chan_reply_${e}`}_on(e,t,s){const r=e.toLocaleLowerCase(),i={type:r,filter:t,callback:s}
return this.bindings[r]?this.bindings[r].push(i):this.bindings[r]=[i],this}_off(e,t){const s=e.toLocaleLowerCase()
return this.bindings[s]=this.bindings[s].filter((e=>{var r
return!((null===(r=e.type)||void 0===r?void 0:r.toLocaleLowerCase())===s&&Be.isEqual(e.filter,t))})),this}static isEqual(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1
for(const s in e)if(e[s]!==t[s])return!1
return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(e){this._on(le.close,{},e)}_onError(e){this._on(le.error,{},(t=>e(t)))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(e=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=ce.joining,this.joinPush.resend(e))}_getPayloadRecords(e){const t={new:{},old:{}}
return"INSERT"!==e.type&&"UPDATE"!==e.type||(t.new=_e(e.columns,e.record)),"UPDATE"!==e.type&&"DELETE"!==e.type||(t.old=_e(e.columns,e.old_record)),t}}const Fe=()=>{},Me="undefined"!=typeof WebSocket
class qe{constructor(e,t){var s
this.accessToken=null,this.apiKey=null,this.channels=[],this.endPoint="",this.httpEndpoint="",this.headers=ne,this.params={},this.timeout=1e4,this.heartbeatIntervalMs=3e4,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.ref=0,this.logger=Fe,this.conn=null,this.sendBuffer=[],this.serializer=new ve,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this._resolveFetch=e=>{let t
return t=e||("undefined"==typeof fetch?(...e)=>r((async()=>{const{default:e}=await Promise.resolve().then((()=>S))
return{default:e}}),void 0).then((({default:t})=>t(...e))):fetch),(...e)=>t(...e)},this.endPoint=`${e}/${de.websocket}`,this.httpEndpoint=Oe(e),(null==t?void 0:t.transport)?this.transport=t.transport:this.transport=null,(null==t?void 0:t.params)&&(this.params=t.params),(null==t?void 0:t.headers)&&(this.headers=Object.assign(Object.assign({},this.headers),t.headers)),(null==t?void 0:t.timeout)&&(this.timeout=t.timeout),(null==t?void 0:t.logger)&&(this.logger=t.logger),(null==t?void 0:t.heartbeatIntervalMs)&&(this.heartbeatIntervalMs=t.heartbeatIntervalMs)
const i=null===(s=null==t?void 0:t.params)||void 0===s?void 0:s.apikey
if(i&&(this.accessToken=i,this.apiKey=i),this.reconnectAfterMs=(null==t?void 0:t.reconnectAfterMs)?t.reconnectAfterMs:e=>[1e3,2e3,5e3,1e4][e-1]||1e4,this.encode=(null==t?void 0:t.encode)?t.encode:(e,t)=>t(JSON.stringify(e)),this.decode=(null==t?void 0:t.decode)?t.decode:this.serializer.decode.bind(this.serializer),this.reconnectTimer=new me((async()=>{this.disconnect(),this.connect()}),this.reconnectAfterMs),this.fetch=this._resolveFetch(null==t?void 0:t.fetch),null==t?void 0:t.worker){if("undefined"!=typeof window&&!window.Worker)throw new Error("Web Worker is not supported")
this.worker=(null==t?void 0:t.worker)||!1,this.workerUrl=null==t?void 0:t.workerUrl}}connect(){if(!this.conn)if(this.transport)this.conn=new this.transport(this._endPointURL(),void 0,{headers:this.headers})
else{if(Me)return this.conn=new WebSocket(this._endPointURL()),void this.setupConnection()
this.conn=new ze(this._endPointURL(),void 0,{close:()=>{this.conn=null}}),r((async()=>{const{default:e}=await import("./browser-CnWk6CUC.js").then((e=>e.b))
return{default:e}}),__vite__mapDeps([0,1])).then((({default:e})=>{this.conn=new e(this._endPointURL(),void 0,{headers:this.headers}),this.setupConnection()}))}}disconnect(e,t){this.conn&&(this.conn.onclose=function(){},e?this.conn.close(e,null!=t?t:""):this.conn.close(),this.conn=null,this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.reset())}getChannels(){return this.channels}async removeChannel(e){const t=await e.unsubscribe()
return 0===this.channels.length&&this.disconnect(),t}async removeAllChannels(){const e=await Promise.all(this.channels.map((e=>e.unsubscribe())))
return this.disconnect(),e}log(e,t,s){this.logger(e,t,s)}connectionState(){switch(this.conn&&this.conn.readyState){case oe.connecting:return fe.Connecting
case oe.open:return fe.Open
case oe.closing:return fe.Closing
default:return fe.Closed}}isConnected(){return this.connectionState()===fe.Open}channel(e,t={config:{}}){const s=new Be(`realtime:${e}`,t,this)
return this.channels.push(s),s}push(e){const{topic:t,event:s,payload:r,ref:i}=e,n=()=>{this.encode(e,(e=>{var t
null===(t=this.conn)||void 0===t||t.send(e)}))}
this.log("push",`${t} ${s} (${i})`,r),this.isConnected()?n():this.sendBuffer.push(n)}setAuth(e){if(e){let s=null
try{s=JSON.parse(atob(e.split(".")[1]))}catch(t){}if(s&&s.exp){if(!(Math.floor(Date.now()/1e3)-s.exp<0))return void this.log("auth",`InvalidJWTToken: Invalid value for JWT claim "exp" with value ${s.exp}`)}}this.accessToken=e,this.channels.forEach((t=>{e&&t.updateJoinPayload({access_token:e}),t.joinedOnce&&t._isJoined()&&t._push(le.access_token,{access_token:e})}))}_makeRef(){let e=this.ref+1
return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}_leaveOpenTopic(e){let t=this.channels.find((t=>t.topic===e&&(t._isJoined()||t._isJoining())))
t&&(this.log("transport",`leaving duplicate topic "${e}"`),t.unsubscribe())}_remove(e){this.channels=this.channels.filter((t=>t._joinRef()!==e._joinRef()))}setupConnection(){this.conn&&(this.conn.binaryType="arraybuffer",this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=e=>this._onConnError(e),this.conn.onmessage=e=>this._onConnMessage(e),this.conn.onclose=e=>this._onConnClose(e))}_endPointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:"1.0.0"}))}_onConnMessage(e){this.decode(e.data,(e=>{let{topic:t,event:s,payload:r,ref:i}=e;(i&&i===this.pendingHeartbeatRef||s===(null==r?void 0:r.type))&&(this.pendingHeartbeatRef=null),this.log("receive",`${r.status||""} ${t} ${s} ${i&&"("+i+")"||""}`,r),this.channels.filter((e=>e._isMember(t))).forEach((e=>e._trigger(s,r,i))),this.stateChangeCallbacks.message.forEach((t=>t(e)))}))}async _onConnOpen(){if(this.log("transport",`connected to ${this._endPointURL()}`),this._flushSendBuffer(),this.reconnectTimer.reset(),this.worker){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker")
const e=this._workerObjectUrl(this.workerUrl)
this.workerRef=new Worker(e),this.workerRef.onerror=e=>{this.log("worker","worker error",e.message),this.workerRef.terminate()},this.workerRef.onmessage=e=>{"keepAlive"===e.data.event&&this._sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}else this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval((()=>this._sendHeartbeat()),this.heartbeatIntervalMs)
this.stateChangeCallbacks.open.forEach((e=>e()))}_onConnClose(e){this.log("transport","close",e),this._triggerChanError(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach((t=>t(e)))}_onConnError(e){this.log("transport",e.message),this._triggerChanError(),this.stateChangeCallbacks.error.forEach((t=>t(e)))}_triggerChanError(){this.channels.forEach((e=>e._trigger(le.error)))}_appendParams(e,t){if(0===Object.keys(t).length)return e
const s=e.match(/\?/)?"&":"?"
return`${e}${s}${new URLSearchParams(t)}`}_flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach((e=>e())),this.sendBuffer=[])}_sendHeartbeat(){var e
if(this.isConnected()){if(this.pendingHeartbeatRef)return this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),void(null===(e=this.conn)||void 0===e||e.close(1e3,"hearbeat timeout"))
this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.setAuth(this.accessToken)}}_workerObjectUrl(e){let t
if(e)t=e
else{const e=new Blob(['\n  addEventListener("message", (e) => {\n    if (e.data.event === "start") {\n      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);\n    }\n  });'],{type:"application/javascript"})
t=URL.createObjectURL(e)}return t}}class ze{constructor(e,t,s){this.binaryType="arraybuffer",this.onclose=()=>{},this.onerror=()=>{},this.onmessage=()=>{},this.onopen=()=>{},this.readyState=oe.connecting,this.send=()=>{},this.url=null,this.url=e,this.close=s.close}}class Je extends Error{constructor(e){super(e),this.__isStorageError=!0,this.name="StorageError"}}function Ke(e){return"object"==typeof e&&null!==e&&"__isStorageError"in e}class He extends Je{constructor(e,t){super(e),this.name="StorageApiError",this.status=t}toJSON(){return{name:this.name,message:this.message,status:this.status}}}class Ge extends Je{constructor(e,t){super(e),this.name="StorageUnknownError",this.originalError=t}}var We=function(e,t,s,r){return new(s||(s=Promise))((function(i,n){function o(e){try{c(r.next(e))}catch(t){n(t)}}function a(e){try{c(r.throw(e))}catch(t){n(t)}}function c(e){var t
e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}c((r=r.apply(e,t||[])).next())}))}
const Ve=e=>{let t
return t=e||("undefined"==typeof fetch?(...e)=>r((async()=>{const{default:e}=await Promise.resolve().then((()=>S))
return{default:e}}),void 0).then((({default:t})=>t(...e))):fetch),(...e)=>t(...e)},Ye=e=>{if(Array.isArray(e))return e.map((e=>Ye(e)))
if("function"==typeof e||e!==Object(e))return e
const t={}
return Object.entries(e).forEach((([e,s])=>{const r=e.replace(/([-_][a-z])/gi,(e=>e.toUpperCase().replace(/[-_]/g,"")))
t[r]=Ye(s)})),t}
var Qe=function(e,t,s,r){return new(s||(s=Promise))((function(i,n){function o(e){try{c(r.next(e))}catch(t){n(t)}}function a(e){try{c(r.throw(e))}catch(t){n(t)}}function c(e){var t
e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}c((r=r.apply(e,t||[])).next())}))}
const Xe=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),Ze=(e,t,s)=>Qe(void 0,void 0,void 0,(function*(){const i=yield We(void 0,void 0,void 0,(function*(){return"undefined"==typeof Response?(yield r((()=>Promise.resolve().then((()=>S))),void 0)).Response:Response}))
e instanceof i&&!(null==s?void 0:s.noResolveJson)?e.json().then((s=>{t(new He(Xe(s),e.status||500))})).catch((e=>{t(new Ge(Xe(e),e))})):t(new Ge(Xe(e),e))}))
function et(e,t,s,r,i,n){return Qe(this,void 0,void 0,(function*(){return new Promise(((o,a)=>{e(s,((e,t,s,r)=>{const i={method:e,headers:(null==t?void 0:t.headers)||{}}
return"GET"===e?i:(i.headers=Object.assign({"Content-Type":"application/json"},null==t?void 0:t.headers),r&&(i.body=JSON.stringify(r)),Object.assign(Object.assign({},i),s))})(t,r,i,n)).then((e=>{if(!e.ok)throw e
return(null==r?void 0:r.noResolveJson)?e:e.json()})).then((e=>o(e))).catch((e=>Ze(e,a,r)))}))}))}function tt(e,t,s,r){return Qe(this,void 0,void 0,(function*(){return et(e,"GET",t,s,r)}))}function st(e,t,s,r,i){return Qe(this,void 0,void 0,(function*(){return et(e,"POST",t,r,i,s)}))}function rt(e,t,s,r,i){return Qe(this,void 0,void 0,(function*(){return et(e,"DELETE",t,r,i,s)}))}var it=function(e,t,s,r){return new(s||(s=Promise))((function(i,n){function o(e){try{c(r.next(e))}catch(t){n(t)}}function a(e){try{c(r.throw(e))}catch(t){n(t)}}function c(e){var t
e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}c((r=r.apply(e,t||[])).next())}))}
const nt={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},ot={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1}
class at{constructor(e,t={},s,r){this.url=e,this.headers=t,this.bucketId=s,this.fetch=Ve(r)}uploadOrUpdate(e,t,s,r){return it(this,void 0,void 0,(function*(){try{let i
const n=Object.assign(Object.assign({},ot),r)
let o=Object.assign(Object.assign({},this.headers),"POST"===e&&{"x-upsert":String(n.upsert)})
const a=n.metadata
"undefined"!=typeof Blob&&s instanceof Blob?(i=new FormData,i.append("cacheControl",n.cacheControl),a&&i.append("metadata",this.encodeMetadata(a)),i.append("",s)):"undefined"!=typeof FormData&&s instanceof FormData?(i=s,i.append("cacheControl",n.cacheControl),a&&i.append("metadata",this.encodeMetadata(a))):(i=s,o["cache-control"]=`max-age=${n.cacheControl}`,o["content-type"]=n.contentType,a&&(o["x-metadata"]=this.toBase64(this.encodeMetadata(a)))),(null==r?void 0:r.headers)&&(o=Object.assign(Object.assign({},o),r.headers))
const c=this._removeEmptyFolders(t),h=this._getFinalPath(c),l=yield this.fetch(`${this.url}/object/${h}`,Object.assign({method:e,body:i,headers:o},(null==n?void 0:n.duplex)?{duplex:n.duplex}:{})),u=yield l.json()
if(l.ok)return{data:{path:c,id:u.Id,fullPath:u.Key},error:null}
return{data:null,error:u}}catch(i){if(Ke(i))return{data:null,error:i}
throw i}}))}upload(e,t,s){return it(this,void 0,void 0,(function*(){return this.uploadOrUpdate("POST",e,t,s)}))}uploadToSignedUrl(e,t,s,r){return it(this,void 0,void 0,(function*(){const i=this._removeEmptyFolders(e),n=this._getFinalPath(i),o=new URL(this.url+`/object/upload/sign/${n}`)
o.searchParams.set("token",t)
try{let e
const t=Object.assign({upsert:ot.upsert},r),n=Object.assign(Object.assign({},this.headers),{"x-upsert":String(t.upsert)})
"undefined"!=typeof Blob&&s instanceof Blob?(e=new FormData,e.append("cacheControl",t.cacheControl),e.append("",s)):"undefined"!=typeof FormData&&s instanceof FormData?(e=s,e.append("cacheControl",t.cacheControl)):(e=s,n["cache-control"]=`max-age=${t.cacheControl}`,n["content-type"]=t.contentType)
const a=yield this.fetch(o.toString(),{method:"PUT",body:e,headers:n}),c=yield a.json()
if(a.ok)return{data:{path:i,fullPath:c.Key},error:null}
return{data:null,error:c}}catch(a){if(Ke(a))return{data:null,error:a}
throw a}}))}createSignedUploadUrl(e,t){return it(this,void 0,void 0,(function*(){try{let s=this._getFinalPath(e)
const r=Object.assign({},this.headers);(null==t?void 0:t.upsert)&&(r["x-upsert"]="true")
const i=yield st(this.fetch,`${this.url}/object/upload/sign/${s}`,{},{headers:r}),n=new URL(this.url+i.url),o=n.searchParams.get("token")
if(!o)throw new Je("No token returned by API")
return{data:{signedUrl:n.toString(),path:e,token:o},error:null}}catch(s){if(Ke(s))return{data:null,error:s}
throw s}}))}update(e,t,s){return it(this,void 0,void 0,(function*(){return this.uploadOrUpdate("PUT",e,t,s)}))}move(e,t,s){return it(this,void 0,void 0,(function*(){try{return{data:yield st(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:e,destinationKey:t,destinationBucket:null==s?void 0:s.destinationBucket},{headers:this.headers}),error:null}}catch(r){if(Ke(r))return{data:null,error:r}
throw r}}))}copy(e,t,s){return it(this,void 0,void 0,(function*(){try{return{data:{path:(yield st(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:e,destinationKey:t,destinationBucket:null==s?void 0:s.destinationBucket},{headers:this.headers})).Key},error:null}}catch(r){if(Ke(r))return{data:null,error:r}
throw r}}))}createSignedUrl(e,t,s){return it(this,void 0,void 0,(function*(){try{let r=this._getFinalPath(e),i=yield st(this.fetch,`${this.url}/object/sign/${r}`,Object.assign({expiresIn:t},(null==s?void 0:s.transform)?{transform:s.transform}:{}),{headers:this.headers})
const n=(null==s?void 0:s.download)?`&download=${!0===s.download?"":s.download}`:""
return i={signedUrl:encodeURI(`${this.url}${i.signedURL}${n}`)},{data:i,error:null}}catch(r){if(Ke(r))return{data:null,error:r}
throw r}}))}createSignedUrls(e,t,s){return it(this,void 0,void 0,(function*(){try{const r=yield st(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:t,paths:e},{headers:this.headers}),i=(null==s?void 0:s.download)?`&download=${!0===s.download?"":s.download}`:""
return{data:r.map((e=>Object.assign(Object.assign({},e),{signedUrl:e.signedURL?encodeURI(`${this.url}${e.signedURL}${i}`):null}))),error:null}}catch(r){if(Ke(r))return{data:null,error:r}
throw r}}))}download(e,t){return it(this,void 0,void 0,(function*(){const s=void 0!==(null==t?void 0:t.transform)?"render/image/authenticated":"object",r=this.transformOptsToQueryString((null==t?void 0:t.transform)||{}),i=r?`?${r}`:""
try{const t=this._getFinalPath(e),r=yield tt(this.fetch,`${this.url}/${s}/${t}${i}`,{headers:this.headers,noResolveJson:!0})
return{data:yield r.blob(),error:null}}catch(n){if(Ke(n))return{data:null,error:n}
throw n}}))}info(e){return it(this,void 0,void 0,(function*(){const t=this._getFinalPath(e)
try{const e=yield tt(this.fetch,`${this.url}/object/info/${t}`,{headers:this.headers})
return{data:Ye(e),error:null}}catch(s){if(Ke(s))return{data:null,error:s}
throw s}}))}exists(e){return it(this,void 0,void 0,(function*(){const t=this._getFinalPath(e)
try{return yield function(e,t,s,r){return Qe(this,void 0,void 0,(function*(){return et(e,"HEAD",t,Object.assign(Object.assign({},s),{noResolveJson:!0}),r)}))}(this.fetch,`${this.url}/object/${t}`,{headers:this.headers}),{data:!0,error:null}}catch(s){if(Ke(s)&&s instanceof Ge){const e=s.originalError
if([400,404].includes(null==e?void 0:e.status))return{data:!1,error:s}}throw s}}))}getPublicUrl(e,t){const s=this._getFinalPath(e),r=[],i=(null==t?void 0:t.download)?`download=${!0===t.download?"":t.download}`:""
""!==i&&r.push(i)
const n=void 0!==(null==t?void 0:t.transform)?"render/image":"object",o=this.transformOptsToQueryString((null==t?void 0:t.transform)||{})
""!==o&&r.push(o)
let a=r.join("&")
return""!==a&&(a=`?${a}`),{data:{publicUrl:encodeURI(`${this.url}/${n}/public/${s}${a}`)}}}remove(e){return it(this,void 0,void 0,(function*(){try{return{data:yield rt(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:e},{headers:this.headers}),error:null}}catch(t){if(Ke(t))return{data:null,error:t}
throw t}}))}list(e,t,s){return it(this,void 0,void 0,(function*(){try{const r=Object.assign(Object.assign(Object.assign({},nt),t),{prefix:e||""})
return{data:yield st(this.fetch,`${this.url}/object/list/${this.bucketId}`,r,{headers:this.headers},s),error:null}}catch(r){if(Ke(r))return{data:null,error:r}
throw r}}))}encodeMetadata(e){return JSON.stringify(e)}toBase64(e){return"undefined"!=typeof Buffer?Buffer.from(e).toString("base64"):btoa(e)}_getFinalPath(e){return`${this.bucketId}/${e}`}_removeEmptyFolders(e){return e.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(e){const t=[]
return e.width&&t.push(`width=${e.width}`),e.height&&t.push(`height=${e.height}`),e.resize&&t.push(`resize=${e.resize}`),e.format&&t.push(`format=${e.format}`),e.quality&&t.push(`quality=${e.quality}`),t.join("&")}}const ct={"X-Client-Info":"storage-js/2.7.1"}
var ht=function(e,t,s,r){return new(s||(s=Promise))((function(i,n){function o(e){try{c(r.next(e))}catch(t){n(t)}}function a(e){try{c(r.throw(e))}catch(t){n(t)}}function c(e){var t
e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}c((r=r.apply(e,t||[])).next())}))}
class lt{constructor(e,t={},s){this.url=e,this.headers=Object.assign(Object.assign({},ct),t),this.fetch=Ve(s)}listBuckets(){return ht(this,void 0,void 0,(function*(){try{return{data:yield tt(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(e){if(Ke(e))return{data:null,error:e}
throw e}}))}getBucket(e){return ht(this,void 0,void 0,(function*(){try{return{data:yield tt(this.fetch,`${this.url}/bucket/${e}`,{headers:this.headers}),error:null}}catch(t){if(Ke(t))return{data:null,error:t}
throw t}}))}createBucket(e,t={public:!1}){return ht(this,void 0,void 0,(function*(){try{return{data:yield st(this.fetch,`${this.url}/bucket`,{id:e,name:e,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:this.headers}),error:null}}catch(s){if(Ke(s))return{data:null,error:s}
throw s}}))}updateBucket(e,t){return ht(this,void 0,void 0,(function*(){try{const s=yield function(e,t,s,r,i){return Qe(this,void 0,void 0,(function*(){return et(e,"PUT",t,r,i,s)}))}(this.fetch,`${this.url}/bucket/${e}`,{id:e,name:e,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:this.headers})
return{data:s,error:null}}catch(s){if(Ke(s))return{data:null,error:s}
throw s}}))}emptyBucket(e){return ht(this,void 0,void 0,(function*(){try{return{data:yield st(this.fetch,`${this.url}/bucket/${e}/empty`,{},{headers:this.headers}),error:null}}catch(t){if(Ke(t))return{data:null,error:t}
throw t}}))}deleteBucket(e){return ht(this,void 0,void 0,(function*(){try{return{data:yield rt(this.fetch,`${this.url}/bucket/${e}`,{},{headers:this.headers}),error:null}}catch(t){if(Ke(t))return{data:null,error:t}
throw t}}))}}class ut extends lt{constructor(e,t={},s){super(e,t,s)}from(e){return new at(this.url,this.headers,e,this.fetch)}}let dt=""
dt="undefined"!=typeof Deno?"deno":"undefined"!=typeof document?"web":"undefined"!=typeof navigator&&"ReactNative"===navigator.product?"react-native":"node"
const ft={headers:{"X-Client-Info":`supabase-js-${dt}/2.46.2`}},pt={schema:"public"},gt={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},yt={}
var vt=function(e,t,s,r){return new(s||(s=Promise))((function(i,n){function o(e){try{c(r.next(e))}catch(t){n(t)}}function a(e){try{c(r.throw(e))}catch(t){n(t)}}function c(e){var t
e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}c((r=r.apply(e,t||[])).next())}))}
const mt=(e,t,s)=>{const r=(e=>{let t
return t=e||("undefined"==typeof fetch?w:fetch),(...e)=>t(...e)})(s),i="undefined"==typeof Headers?b:Headers
return(s,n)=>vt(void 0,void 0,void 0,(function*(){var o
const a=null!==(o=yield t())&&void 0!==o?o:e
let c=new i(null==n?void 0:n.headers)
return c.has("apikey")||c.set("apikey",e),c.has("Authorization")||c.set("Authorization",`Bearer ${a}`),r(s,Object.assign(Object.assign({},n),{headers:c}))}))}
var _t=function(e,t,s,r){return new(s||(s=Promise))((function(i,n){function o(e){try{c(r.next(e))}catch(t){n(t)}}function a(e){try{c(r.throw(e))}catch(t){n(t)}}function c(e){var t
e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}c((r=r.apply(e,t||[])).next())}))}
const wt="2.65.1",bt={"X-Client-Info":`gotrue-js/${wt}`},kt="X-Supabase-Api-Version",Tt={timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}
const St=()=>"undefined"!=typeof document,Et={tested:!1,writable:!1},jt=()=>{if(!St())return!1
try{if("object"!=typeof globalThis.localStorage)return!1}catch(t){return!1}if(Et.tested)return Et.writable
const e=`lswt-${Math.random()}${Math.random()}`
try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),Et.tested=!0,Et.writable=!0}catch(t){Et.tested=!0,Et.writable=!1}return Et.writable}
function Pt(e){const t={},s=new URL(e)
if(s.hash&&"#"===s.hash[0])try{new URLSearchParams(s.hash.substring(1)).forEach(((e,s)=>{t[s]=e}))}catch(r){}return s.searchParams.forEach(((e,s)=>{t[s]=e})),t}const Ot=e=>{let t
return t=e||("undefined"==typeof fetch?(...e)=>r((async()=>{const{default:e}=await Promise.resolve().then((()=>S))
return{default:e}}),void 0).then((({default:t})=>t(...e))):fetch),(...e)=>t(...e)},$t=async(e,t,s)=>{await e.setItem(t,JSON.stringify(s))},At=async(e,t)=>{const s=await e.getItem(t)
if(!s)return null
try{return JSON.parse(s)}catch(r){return s}},Rt=async(e,t)=>{await e.removeItem(t)}
class xt{constructor(){this.promise=new xt.promiseConstructor(((e,t)=>{this.resolve=e,this.reject=t}))}}function Ct(e){const t=e.split(".")
if(3!==t.length)throw new Error("JWT is not valid: not a JWT structure")
if(!/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i.test(t[1]))throw new Error("JWT is not valid: payload is not in base64url format")
const s=t[1]
return JSON.parse(function(e){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
let s,r,i,n,o,a,c,h="",l=0
for(e=e.replace("-","+").replace("_","/");l<e.length;)n=t.indexOf(e.charAt(l++)),o=t.indexOf(e.charAt(l++)),a=t.indexOf(e.charAt(l++)),c=t.indexOf(e.charAt(l++)),s=n<<2|o>>4,r=(15&o)<<4|a>>2,i=(3&a)<<6|c,h+=String.fromCharCode(s),64!=a&&0!=r&&(h+=String.fromCharCode(r)),64!=c&&0!=i&&(h+=String.fromCharCode(i))
return h}(s))}function It(e){return("0"+e.toString(16)).substr(-2)}async function Lt(e){if(!("undefined"!=typeof crypto&&void 0!==crypto.subtle&&"undefined"!=typeof TextEncoder))return e
const t=await async function(e){const t=(new TextEncoder).encode(e),s=await crypto.subtle.digest("SHA-256",t),r=new Uint8Array(s)
return Array.from(r).map((e=>String.fromCharCode(e))).join("")}(e)
return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Ut(e,t,s=!1){const r=function(){const e=new Uint32Array(56)
if("undefined"==typeof crypto){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",t=e.length
let s=""
for(let r=0;r<56;r++)s+=e.charAt(Math.floor(Math.random()*t))
return s}return crypto.getRandomValues(e),Array.from(e,It).join("")}()
let i=r
s&&(i+="/PASSWORD_RECOVERY"),await $t(e,`${t}-code-verifier`,i)
const n=await Lt(r)
return[n,r===n?"plain":"s256"]}xt.promiseConstructor=Promise
const Dt=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i
class Nt extends Error{constructor(e,t,s){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=t,this.code=s}}function Bt(e){return"object"==typeof e&&null!==e&&"__isAuthError"in e}class Ft extends Nt{constructor(e,t,s){super(e,t,s),this.name="AuthApiError",this.status=t,this.code=s}}class Mt extends Nt{constructor(e,t){super(e),this.name="AuthUnknownError",this.originalError=t}}class qt extends Nt{constructor(e,t,s,r){super(e,s,r),this.name=t,this.status=s}}class zt extends qt{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}class Jt extends qt{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Kt extends qt{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class Ht extends qt{constructor(e,t=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=t}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class Gt extends qt{constructor(e,t=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=t}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class Wt extends qt{constructor(e,t){super(e,"AuthRetryableFetchError",t,void 0)}}function Vt(e){return Bt(e)&&"AuthRetryableFetchError"===e.name}class Yt extends qt{constructor(e,t,s){super(e,"AuthWeakPasswordError",t,"weak_password"),this.reasons=s}}const Qt=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),Xt=[502,503,504]
async function Zt(e){var t,s
if(!("object"==typeof(s=e)&&null!==s&&"status"in s&&"ok"in s&&"json"in s&&"function"==typeof s.json))throw new Wt(Qt(e),0)
if(Xt.includes(e.status))throw new Wt(Qt(e),e.status)
let r,i
try{r=await e.json()}catch(o){throw new Mt(Qt(o),o)}const n=function(e){const t=e.headers.get(kt)
if(!t)return null
if(!t.match(Dt))return null
try{return new Date(`${t}T00:00:00.0Z`)}catch(o){return null}}(e)
if(n&&n.getTime()>=Tt.timestamp&&"object"==typeof r&&r&&"string"==typeof r.code?i=r.code:"object"==typeof r&&r&&"string"==typeof r.error_code&&(i=r.error_code),i){if("weak_password"===i)throw new Yt(Qt(r),e.status,(null===(t=r.weak_password)||void 0===t?void 0:t.reasons)||[])
if("session_not_found"===i)throw new zt}else if("object"==typeof r&&r&&"object"==typeof r.weak_password&&r.weak_password&&Array.isArray(r.weak_password.reasons)&&r.weak_password.reasons.length&&r.weak_password.reasons.reduce(((e,t)=>e&&"string"==typeof t),!0))throw new Yt(Qt(r),e.status,r.weak_password.reasons)
throw new Ft(Qt(r),e.status||500,i)}async function es(e,t,s,r){var i
const n=Object.assign({},null==r?void 0:r.headers)
n[kt]||(n[kt]=Tt.name),(null==r?void 0:r.jwt)&&(n.Authorization=`Bearer ${r.jwt}`)
const o=null!==(i=null==r?void 0:r.query)&&void 0!==i?i:{};(null==r?void 0:r.redirectTo)&&(o.redirect_to=r.redirectTo)
const a=Object.keys(o).length?"?"+new URLSearchParams(o).toString():"",c=await async function(e,t,s,r,i,n){const o=((e,t,s,r)=>{const i={method:e,headers:(null==t?void 0:t.headers)||{}}
return"GET"===e?i:(i.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},null==t?void 0:t.headers),i.body=JSON.stringify(r),Object.assign(Object.assign({},i),s))})(t,r,i,n)
let a
try{a=await e(s,Object.assign({},o))}catch(c){throw new Wt(Qt(c),0)}a.ok||await Zt(a)
if(null==r?void 0:r.noResolveJson)return a
try{return await a.json()}catch(c){await Zt(c)}}(e,t,s+a,{headers:n,noResolveJson:null==r?void 0:r.noResolveJson},{},null==r?void 0:r.body)
return(null==r?void 0:r.xform)?null==r?void 0:r.xform(c):{data:Object.assign({},c),error:null}}function ts(e){var t
let s=null
var r;(function(e){return e.access_token&&e.refresh_token&&e.expires_in})(e)&&(s=Object.assign({},e),e.expires_at||(s.expires_at=(r=e.expires_in,Math.round(Date.now()/1e3)+r)))
return{data:{session:s,user:null!==(t=e.user)&&void 0!==t?t:e},error:null}}function ss(e){const t=ts(e)
return!t.error&&e.weak_password&&"object"==typeof e.weak_password&&Array.isArray(e.weak_password.reasons)&&e.weak_password.reasons.length&&e.weak_password.message&&"string"==typeof e.weak_password.message&&e.weak_password.reasons.reduce(((e,t)=>e&&"string"==typeof t),!0)&&(t.data.weak_password=e.weak_password),t}function rs(e){var t
return{data:{user:null!==(t=e.user)&&void 0!==t?t:e},error:null}}function is(e){return{data:e,error:null}}function ns(e){const{action_link:t,email_otp:s,hashed_token:r,redirect_to:i,verification_type:n}=e,o=function(e,t){var s={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(s[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(s[r[i]]=e[r[i]])}return s}(e,["action_link","email_otp","hashed_token","redirect_to","verification_type"])
return{data:{properties:{action_link:t,email_otp:s,hashed_token:r,redirect_to:i,verification_type:n},user:Object.assign({},o)},error:null}}function os(e){return e}class as{constructor({url:e="",headers:t={},fetch:s}){this.url=e,this.headers=t,this.fetch=Ot(s),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(e,t="global"){try{return await es(this.fetch,"POST",`${this.url}/logout?scope=${t}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(s){if(Bt(s))return{data:null,error:s}
throw s}}async inviteUserByEmail(e,t={}){try{return await es(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:t.data},headers:this.headers,redirectTo:t.redirectTo,xform:rs})}catch(s){if(Bt(s))return{data:{user:null},error:s}
throw s}}async generateLink(e){try{const{options:t}=e,s=function(e,t){var s={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(s[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(s[r[i]]=e[r[i]])}return s}(e,["options"]),r=Object.assign(Object.assign({},s),t)
return"newEmail"in s&&(r.new_email=null==s?void 0:s.newEmail,delete r.newEmail),await es(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:r,headers:this.headers,xform:ns,redirectTo:null==t?void 0:t.redirectTo})}catch(t){if(Bt(t))return{data:{properties:null,user:null},error:t}
throw t}}async createUser(e){try{return await es(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:rs})}catch(t){if(Bt(t))return{data:{user:null},error:t}
throw t}}async listUsers(e){var t,s,r,i,n,o,a
try{const c={nextPage:null,lastPage:0,total:0},h=await es(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:null!==(s=null===(t=null==e?void 0:e.page)||void 0===t?void 0:t.toString())&&void 0!==s?s:"",per_page:null!==(i=null===(r=null==e?void 0:e.perPage)||void 0===r?void 0:r.toString())&&void 0!==i?i:""},xform:os})
if(h.error)throw h.error
const l=await h.json(),u=null!==(n=h.headers.get("x-total-count"))&&void 0!==n?n:0,d=null!==(a=null===(o=h.headers.get("link"))||void 0===o?void 0:o.split(","))&&void 0!==a?a:[]
return d.length>0&&(d.forEach((e=>{const t=parseInt(e.split(";")[0].split("=")[1].substring(0,1)),s=JSON.parse(e.split(";")[1].split("=")[1])
c[`${s}Page`]=t})),c.total=parseInt(u)),{data:Object.assign(Object.assign({},l),c),error:null}}catch(c){if(Bt(c))return{data:{users:[]},error:c}
throw c}}async getUserById(e){try{return await es(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:rs})}catch(t){if(Bt(t))return{data:{user:null},error:t}
throw t}}async updateUserById(e,t){try{return await es(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:t,headers:this.headers,xform:rs})}catch(s){if(Bt(s))return{data:{user:null},error:s}
throw s}}async deleteUser(e,t=!1){try{return await es(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:t},xform:rs})}catch(s){if(Bt(s))return{data:{user:null},error:s}
throw s}}async _listFactors(e){try{const{data:t,error:s}=await es(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:e=>({data:{factors:e},error:null})})
return{data:t,error:s}}catch(t){if(Bt(t))return{data:null,error:t}
throw t}}async _deleteFactor(e){try{return{data:await es(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(t){if(Bt(t))return{data:null,error:t}
throw t}}}const cs={getItem:e=>jt()?globalThis.localStorage.getItem(e):null,setItem:(e,t)=>{jt()&&globalThis.localStorage.setItem(e,t)},removeItem:e=>{jt()&&globalThis.localStorage.removeItem(e)}}
function hs(e={}){return{getItem:t=>e[t]||null,setItem:(t,s)=>{e[t]=s},removeItem:t=>{delete e[t]}}}const ls=!!(globalThis&&jt()&&globalThis.localStorage&&"true"===globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug"))
class us extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}class ds extends us{}async function fs(e,t,s){const r=new globalThis.AbortController
return t>0&&setTimeout((()=>{r.abort()}),t),await globalThis.navigator.locks.request(e,0===t?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:r.signal},(async r=>{if(!r){if(0===t)throw new ds(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`)
if(ls)try{await globalThis.navigator.locks.query()}catch(i){}return await s()}try{return await s()}finally{}}))}!function(){if("object"!=typeof globalThis)try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch(e){"undefined"!=typeof self&&(self.globalThis=self)}}()
const ps={url:"http://localhost:9999",storageKey:"supabase.auth.token",autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:bt,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1},gs=3e4
async function ys(e,t,s){return await s()}class vs{constructor(e){var t,s
this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=vs.nextInstanceID,vs.nextInstanceID+=1,this.instanceID>0&&St()
const r=Object.assign(Object.assign({},ps),e)
if(this.logDebugMessages=!!r.debug,"function"==typeof r.debug&&(this.logger=r.debug),this.persistSession=r.persistSession,this.storageKey=r.storageKey,this.autoRefreshToken=r.autoRefreshToken,this.admin=new as({url:r.url,headers:r.headers,fetch:r.fetch}),this.url=r.url,this.headers=r.headers,this.fetch=Ot(r.fetch),this.lock=r.lock||ys,this.detectSessionInUrl=r.detectSessionInUrl,this.flowType=r.flowType,this.hasCustomAuthorizationHeader=r.hasCustomAuthorizationHeader,r.lock?this.lock=r.lock:St()&&(null===(t=null===globalThis||void 0===globalThis?void 0:globalThis.navigator)||void 0===t?void 0:t.locks)?this.lock=fs:this.lock=ys,this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?r.storage?this.storage=r.storage:jt()?this.storage=cs:(this.memoryStorage={},this.storage=hs(this.memoryStorage)):(this.memoryStorage={},this.storage=hs(this.memoryStorage)),St()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(i){}null===(s=this.broadcastChannel)||void 0===s||s.addEventListener("message",(async e=>{this._debug("received broadcast notification from other tab or client",e),await this._notifyAllSubscribers(e.data.event,e.data.session,!1)}))}this.initialize()}_debug(...e){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${wt}) ${(new Date).toISOString()}`,...e),this}async initialize(){return this.initializePromise||(this.initializePromise=(async()=>await this._acquireLock(-1,(async()=>await this._initialize())))()),await this.initializePromise}async _initialize(){try{const e=!!St()&&await this._isPKCEFlow()
if(this._debug("#_initialize()","begin","is PKCE flow",e),e||this.detectSessionInUrl&&this._isImplicitGrantFlow()){const{data:t,error:s}=await this._getSessionFromURL(e)
if(s)return this._debug("#_initialize()","error detecting session from URL",s),"identity_already_exists"===(null==s?void 0:s.code)||await this._removeSession(),{error:s}
const{session:r,redirectType:i}=t
return this._debug("#_initialize()","detected session in URL",r,"redirect type",i),await this._saveSession(r),setTimeout((async()=>{"recovery"===i?await this._notifyAllSubscribers("PASSWORD_RECOVERY",r):await this._notifyAllSubscribers("SIGNED_IN",r)}),0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(e){return Bt(e)?{error:e}:{error:new Mt("Unexpected error during initialization",e)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var t,s,r
try{const i=await es(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:null!==(s=null===(t=null==e?void 0:e.options)||void 0===t?void 0:t.data)&&void 0!==s?s:{},gotrue_meta_security:{captcha_token:null===(r=null==e?void 0:e.options)||void 0===r?void 0:r.captchaToken}},xform:ts}),{data:n,error:o}=i
if(o||!n)return{data:{user:null,session:null},error:o}
const a=n.session,c=n.user
return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers("SIGNED_IN",a)),{data:{user:c,session:a},error:null}}catch(i){if(Bt(i))return{data:{user:null,session:null},error:i}
throw i}}async signUp(e){var t,s,r
try{let i
if("email"in e){const{email:s,password:r,options:n}=e
let o=null,a=null
"pkce"===this.flowType&&([o,a]=await Ut(this.storage,this.storageKey)),i=await es(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:null==n?void 0:n.emailRedirectTo,body:{email:s,password:r,data:null!==(t=null==n?void 0:n.data)&&void 0!==t?t:{},gotrue_meta_security:{captcha_token:null==n?void 0:n.captchaToken},code_challenge:o,code_challenge_method:a},xform:ts})}else{if(!("phone"in e))throw new Kt("You must provide either an email or phone number and a password")
{const{phone:t,password:n,options:o}=e
i=await es(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:t,password:n,data:null!==(s=null==o?void 0:o.data)&&void 0!==s?s:{},channel:null!==(r=null==o?void 0:o.channel)&&void 0!==r?r:"sms",gotrue_meta_security:{captcha_token:null==o?void 0:o.captchaToken}},xform:ts})}}const{data:n,error:o}=i
if(o||!n)return{data:{user:null,session:null},error:o}
const a=n.session,c=n.user
return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers("SIGNED_IN",a)),{data:{user:c,session:a},error:null}}catch(i){if(Bt(i))return{data:{user:null,session:null},error:i}
throw i}}async signInWithPassword(e){try{let t
if("email"in e){const{email:s,password:r,options:i}=e
t=await es(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:s,password:r,gotrue_meta_security:{captcha_token:null==i?void 0:i.captchaToken}},xform:ss})}else{if(!("phone"in e))throw new Kt("You must provide either an email or phone number and a password")
{const{phone:s,password:r,options:i}=e
t=await es(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:s,password:r,gotrue_meta_security:{captcha_token:null==i?void 0:i.captchaToken}},xform:ss})}}const{data:s,error:r}=t
return r?{data:{user:null,session:null},error:r}:s&&s.session&&s.user?(s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",s.session)),{data:Object.assign({user:s.user,session:s.session},s.weak_password?{weakPassword:s.weak_password}:null),error:r}):{data:{user:null,session:null},error:new Jt}}catch(t){if(Bt(t))return{data:{user:null,session:null},error:t}
throw t}}async signInWithOAuth(e){var t,s,r,i
return await this._handleProviderSignIn(e.provider,{redirectTo:null===(t=e.options)||void 0===t?void 0:t.redirectTo,scopes:null===(s=e.options)||void 0===s?void 0:s.scopes,queryParams:null===(r=e.options)||void 0===r?void 0:r.queryParams,skipBrowserRedirect:null===(i=e.options)||void 0===i?void 0:i.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this._acquireLock(-1,(async()=>this._exchangeCodeForSession(e)))}async _exchangeCodeForSession(e){const t=await At(this.storage,`${this.storageKey}-code-verifier`),[s,r]=(null!=t?t:"").split("/")
try{const{data:t,error:i}=await es(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:s},xform:ts})
if(await Rt(this.storage,`${this.storageKey}-code-verifier`),i)throw i
return t&&t.session&&t.user?(t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers("SIGNED_IN",t.session)),{data:Object.assign(Object.assign({},t),{redirectType:null!=r?r:null}),error:i}):{data:{user:null,session:null,redirectType:null},error:new Jt}}catch(i){if(Bt(i))return{data:{user:null,session:null,redirectType:null},error:i}
throw i}}async signInWithIdToken(e){try{const{options:t,provider:s,token:r,access_token:i,nonce:n}=e,o=await es(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:s,id_token:r,access_token:i,nonce:n,gotrue_meta_security:{captcha_token:null==t?void 0:t.captchaToken}},xform:ts}),{data:a,error:c}=o
return c?{data:{user:null,session:null},error:c}:a&&a.session&&a.user?(a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",a.session)),{data:a,error:c}):{data:{user:null,session:null},error:new Jt}}catch(t){if(Bt(t))return{data:{user:null,session:null},error:t}
throw t}}async signInWithOtp(e){var t,s,r,i,n
try{if("email"in e){const{email:r,options:i}=e
let n=null,o=null
"pkce"===this.flowType&&([n,o]=await Ut(this.storage,this.storageKey))
const{error:a}=await es(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:r,data:null!==(t=null==i?void 0:i.data)&&void 0!==t?t:{},create_user:null===(s=null==i?void 0:i.shouldCreateUser)||void 0===s||s,gotrue_meta_security:{captcha_token:null==i?void 0:i.captchaToken},code_challenge:n,code_challenge_method:o},redirectTo:null==i?void 0:i.emailRedirectTo})
return{data:{user:null,session:null},error:a}}if("phone"in e){const{phone:t,options:s}=e,{data:o,error:a}=await es(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:t,data:null!==(r=null==s?void 0:s.data)&&void 0!==r?r:{},create_user:null===(i=null==s?void 0:s.shouldCreateUser)||void 0===i||i,gotrue_meta_security:{captcha_token:null==s?void 0:s.captchaToken},channel:null!==(n=null==s?void 0:s.channel)&&void 0!==n?n:"sms"}})
return{data:{user:null,session:null,messageId:null==o?void 0:o.message_id},error:a}}throw new Kt("You must provide either an email or phone number.")}catch(o){if(Bt(o))return{data:{user:null,session:null},error:o}
throw o}}async verifyOtp(e){var t,s
try{let r,i
"options"in e&&(r=null===(t=e.options)||void 0===t?void 0:t.redirectTo,i=null===(s=e.options)||void 0===s?void 0:s.captchaToken)
const{data:n,error:o}=await es(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:i}}),redirectTo:r,xform:ts})
if(o)throw o
if(!n)throw new Error("An error occurred on token verification.")
const a=n.session,c=n.user
return(null==a?void 0:a.access_token)&&(await this._saveSession(a),await this._notifyAllSubscribers("recovery"==e.type?"PASSWORD_RECOVERY":"SIGNED_IN",a)),{data:{user:c,session:a},error:null}}catch(r){if(Bt(r))return{data:{user:null,session:null},error:r}
throw r}}async signInWithSSO(e){var t,s,r
try{let i=null,n=null
return"pkce"===this.flowType&&([i,n]=await Ut(this.storage,this.storageKey)),await es(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:null!==(s=null===(t=e.options)||void 0===t?void 0:t.redirectTo)&&void 0!==s?s:void 0}),(null===(r=null==e?void 0:e.options)||void 0===r?void 0:r.captchaToken)?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:i,code_challenge_method:n}),headers:this.headers,xform:is})}catch(i){if(Bt(i))return{data:null,error:i}
throw i}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,(async()=>await this._reauthenticate()))}async _reauthenticate(){try{return await this._useSession((async e=>{const{data:{session:t},error:s}=e
if(s)throw s
if(!t)throw new zt
const{error:r}=await es(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:t.access_token})
return{data:{user:null,session:null},error:r}}))}catch(e){if(Bt(e))return{data:{user:null,session:null},error:e}
throw e}}async resend(e){try{const t=`${this.url}/resend`
if("email"in e){const{email:s,type:r,options:i}=e,{error:n}=await es(this.fetch,"POST",t,{headers:this.headers,body:{email:s,type:r,gotrue_meta_security:{captcha_token:null==i?void 0:i.captchaToken}},redirectTo:null==i?void 0:i.emailRedirectTo})
return{data:{user:null,session:null},error:n}}if("phone"in e){const{phone:s,type:r,options:i}=e,{data:n,error:o}=await es(this.fetch,"POST",t,{headers:this.headers,body:{phone:s,type:r,gotrue_meta_security:{captcha_token:null==i?void 0:i.captchaToken}}})
return{data:{user:null,session:null,messageId:null==n?void 0:n.message_id},error:o}}throw new Kt("You must provide either an email or phone number and a type")}catch(t){if(Bt(t))return{data:{user:null,session:null},error:t}
throw t}}async getSession(){await this.initializePromise
return await this._acquireLock(-1,(async()=>this._useSession((async e=>e))))}async _acquireLock(e,t){this._debug("#_acquireLock","begin",e)
try{if(this.lockAcquired){const e=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),s=(async()=>(await e,await t()))()
return this.pendingInLock.push((async()=>{try{await s}catch(e){}})()),s}return await this.lock(`lock:${this.storageKey}`,e,(async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey)
try{this.lockAcquired=!0
const e=t()
for(this.pendingInLock.push((async()=>{try{await e}catch(t){}})()),await e;this.pendingInLock.length;){const e=[...this.pendingInLock]
await Promise.all(e),this.pendingInLock.splice(0,e.length)}return await e}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}}))}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin")
try{const t=await this.__loadSession()
return await e(t)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",(new Error).stack)
try{let e=null
const t=await At(this.storage,this.storageKey)
if(this._debug("#getSession()","session from storage",t),null!==t&&(this._isValidSession(t)?e=t:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null}
const s=!!e.expires_at&&e.expires_at<=Date.now()/1e3
if(this._debug("#__loadSession()",`session has${s?"":" not"} expired`,"expires_at",e.expires_at),!s){if(this.storage.isServer){let t=this.suppressGetSessionWarning
e=new Proxy(e,{get:(e,s,r)=>(t||"user"!==s||(t=!0,this.suppressGetSessionWarning=!0),Reflect.get(e,s,r))})}return{data:{session:e},error:null}}const{session:r,error:i}=await this._callRefreshToken(e.refresh_token)
return i?{data:{session:null},error:i}:{data:{session:r},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(e){if(e)return await this._getUser(e)
await this.initializePromise
return await this._acquireLock(-1,(async()=>await this._getUser()))}async _getUser(e){try{return e?await es(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:rs}):await this._useSession((async e=>{var t,s,r
const{data:i,error:n}=e
if(n)throw n
return(null===(t=i.session)||void 0===t?void 0:t.access_token)||this.hasCustomAuthorizationHeader?await es(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:null!==(r=null===(s=i.session)||void 0===s?void 0:s.access_token)&&void 0!==r?r:void 0,xform:rs}):{data:{user:null},error:new zt}}))}catch(t){if(Bt(t))return function(e){return Bt(e)&&"AuthSessionMissingError"===e.name}(t)&&(await this._removeSession(),await Rt(this.storage,`${this.storageKey}-code-verifier`)),{data:{user:null},error:t}
throw t}}async updateUser(e,t={}){return await this.initializePromise,await this._acquireLock(-1,(async()=>await this._updateUser(e,t)))}async _updateUser(e,t={}){try{return await this._useSession((async s=>{const{data:r,error:i}=s
if(i)throw i
if(!r.session)throw new zt
const n=r.session
let o=null,a=null
"pkce"===this.flowType&&null!=e.email&&([o,a]=await Ut(this.storage,this.storageKey))
const{data:c,error:h}=await es(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:null==t?void 0:t.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:o,code_challenge_method:a}),jwt:n.access_token,xform:rs})
if(h)throw h
return n.user=c.user,await this._saveSession(n),await this._notifyAllSubscribers("USER_UPDATED",n),{data:{user:n.user},error:null}}))}catch(s){if(Bt(s))return{data:{user:null},error:s}
throw s}}_decodeJWT(e){return Ct(e)}async setSession(e){return await this.initializePromise,await this._acquireLock(-1,(async()=>await this._setSession(e)))}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new zt
const t=Date.now()/1e3
let s=t,r=!0,i=null
const n=Ct(e.access_token)
if(n.exp&&(s=n.exp,r=s<=t),r){const{session:t,error:s}=await this._callRefreshToken(e.refresh_token)
if(s)return{data:{user:null,session:null},error:s}
if(!t)return{data:{user:null,session:null},error:null}
i=t}else{const{data:r,error:n}=await this._getUser(e.access_token)
if(n)throw n
i={access_token:e.access_token,refresh_token:e.refresh_token,user:r.user,token_type:"bearer",expires_in:s-t,expires_at:s},await this._saveSession(i),await this._notifyAllSubscribers("SIGNED_IN",i)}return{data:{user:i.user,session:i},error:null}}catch(t){if(Bt(t))return{data:{session:null,user:null},error:t}
throw t}}async refreshSession(e){return await this.initializePromise,await this._acquireLock(-1,(async()=>await this._refreshSession(e)))}async _refreshSession(e){try{return await this._useSession((async t=>{var s
if(!e){const{data:r,error:i}=t
if(i)throw i
e=null!==(s=r.session)&&void 0!==s?s:void 0}if(!(null==e?void 0:e.refresh_token))throw new zt
const{session:r,error:i}=await this._callRefreshToken(e.refresh_token)
return i?{data:{user:null,session:null},error:i}:r?{data:{user:r.user,session:r},error:null}:{data:{user:null,session:null},error:null}}))}catch(t){if(Bt(t))return{data:{user:null,session:null},error:t}
throw t}}async _getSessionFromURL(e){try{if(!St())throw new Ht("No browser detected.")
if("implicit"===this.flowType&&!this._isImplicitGrantFlow())throw new Ht("Not a valid implicit grant flow url.")
if("pkce"==this.flowType&&!e)throw new Gt("Not a valid PKCE flow url.")
const t=Pt(window.location.href)
if(e){if(!t.code)throw new Gt("No code detected.")
const{data:e,error:s}=await this._exchangeCodeForSession(t.code)
if(s)throw s
const r=new URL(window.location.href)
return r.searchParams.delete("code"),window.history.replaceState(window.history.state,"",r.toString()),{data:{session:e.session,redirectType:null},error:null}}if(t.error||t.error_description||t.error_code)throw new Ht(t.error_description||"Error in URL with unspecified error_description",{error:t.error||"unspecified_error",code:t.error_code||"unspecified_code"})
const{provider_token:s,provider_refresh_token:r,access_token:i,refresh_token:n,expires_in:o,expires_at:a,token_type:c}=t
if(!(i&&o&&n&&c))throw new Ht("No session defined in URL")
const h=Math.round(Date.now()/1e3),l=parseInt(o)
let u=h+l
a&&(u=parseInt(a))
const{data:d,error:f}=await this._getUser(i)
if(f)throw f
const p={provider_token:s,provider_refresh_token:r,access_token:i,expires_in:l,expires_at:u,refresh_token:n,token_type:c,user:d.user}
return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:p,redirectType:t.type},error:null}}catch(t){if(Bt(t))return{data:{session:null,redirectType:null},error:t}
throw t}}_isImplicitGrantFlow(){const e=Pt(window.location.href)
return!(!St()||!e.access_token&&!e.error_description)}async _isPKCEFlow(){const e=Pt(window.location.href),t=await At(this.storage,`${this.storageKey}-code-verifier`)
return!(!e.code||!t)}async signOut(e={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,(async()=>await this._signOut(e)))}async _signOut({scope:e}={scope:"global"}){return await this._useSession((async t=>{var s
const{data:r,error:i}=t
if(i)return{error:i}
const n=null===(s=r.session)||void 0===s?void 0:s.access_token
if(n){const{error:t}=await this.admin.signOut(n,e)
if(t&&(!function(e){return Bt(e)&&"AuthApiError"===e.name}(t)||404!==t.status&&401!==t.status&&403!==t.status))return{error:t}}return"others"!==e&&(await this._removeSession(),await Rt(this.storage,`${this.storageKey}-code-verifier`)),{error:null}}))}onAuthStateChange(e){const t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){const t=16*Math.random()|0
return("x"==e?t:3&t|8).toString(16)})),s={id:t,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",t),this.stateChangeEmitters.delete(t)}}
return this._debug("#onAuthStateChange()","registered callback with id",t),this.stateChangeEmitters.set(t,s),(async()=>{await this.initializePromise,await this._acquireLock(-1,(async()=>{this._emitInitialSession(t)}))})(),{data:{subscription:s}}}async _emitInitialSession(e){return await this._useSession((async t=>{var s,r
try{const{data:{session:r},error:i}=t
if(i)throw i
await(null===(s=this.stateChangeEmitters.get(e))||void 0===s?void 0:s.callback("INITIAL_SESSION",r)),this._debug("INITIAL_SESSION","callback id",e,"session",r)}catch(i){await(null===(r=this.stateChangeEmitters.get(e))||void 0===r?void 0:r.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",i)}}))}async resetPasswordForEmail(e,t={}){let s=null,r=null
"pkce"===this.flowType&&([s,r]=await Ut(this.storage,this.storageKey,!0))
try{return await es(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:s,code_challenge_method:r,gotrue_meta_security:{captcha_token:t.captchaToken}},headers:this.headers,redirectTo:t.redirectTo})}catch(i){if(Bt(i))return{data:null,error:i}
throw i}}async getUserIdentities(){var e
try{const{data:t,error:s}=await this.getUser()
if(s)throw s
return{data:{identities:null!==(e=t.user.identities)&&void 0!==e?e:[]},error:null}}catch(t){if(Bt(t))return{data:null,error:t}
throw t}}async linkIdentity(e){var t
try{const{data:s,error:r}=await this._useSession((async t=>{var s,r,i,n,o
const{data:a,error:c}=t
if(c)throw c
const h=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:null===(s=e.options)||void 0===s?void 0:s.redirectTo,scopes:null===(r=e.options)||void 0===r?void 0:r.scopes,queryParams:null===(i=e.options)||void 0===i?void 0:i.queryParams,skipBrowserRedirect:!0})
return await es(this.fetch,"GET",h,{headers:this.headers,jwt:null!==(o=null===(n=a.session)||void 0===n?void 0:n.access_token)&&void 0!==o?o:void 0})}))
if(r)throw r
return St()&&!(null===(t=e.options)||void 0===t?void 0:t.skipBrowserRedirect)&&window.location.assign(null==s?void 0:s.url),{data:{provider:e.provider,url:null==s?void 0:s.url},error:null}}catch(s){if(Bt(s))return{data:{provider:e.provider,url:null},error:s}
throw s}}async unlinkIdentity(e){try{return await this._useSession((async t=>{var s,r
const{data:i,error:n}=t
if(n)throw n
return await es(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:null!==(r=null===(s=i.session)||void 0===s?void 0:s.access_token)&&void 0!==r?r:void 0})}))}catch(t){if(Bt(t))return{data:null,error:t}
throw t}}async _refreshAccessToken(e){const t=`#_refreshAccessToken(${e.substring(0,5)}...)`
this._debug(t,"begin")
try{const i=Date.now()
return await(s=async s=>(s>0&&await async function(e){return await new Promise((t=>{setTimeout((()=>t(null)),e)}))}(200*Math.pow(2,s-1)),this._debug(t,"refreshing attempt",s),await es(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:ts})),r=(e,t)=>{const s=200*Math.pow(2,e)
return t&&Vt(t)&&Date.now()+s-i<gs},new Promise(((e,t)=>{(async()=>{for(let n=0;n<1/0;n++)try{const t=await s(n)
if(!r(n,null,t))return void e(t)}catch(i){if(!r(n,i))return void t(i)}})()})))}catch(i){if(this._debug(t,"error",i),Bt(i))return{data:{session:null,user:null},error:i}
throw i}finally{this._debug(t,"end")}var s,r}_isValidSession(e){return"object"==typeof e&&null!==e&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,t){const s=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:t.redirectTo,scopes:t.scopes,queryParams:t.queryParams})
return this._debug("#_handleProviderSignIn()","provider",e,"options",t,"url",s),St()&&!t.skipBrowserRedirect&&window.location.assign(s),{data:{provider:e,url:s},error:null}}async _recoverAndRefresh(){var e
const t="#_recoverAndRefresh()"
this._debug(t,"begin")
try{const s=await At(this.storage,this.storageKey)
if(this._debug(t,"session from storage",s),!this._isValidSession(s))return this._debug(t,"session is not valid"),void(null!==s&&await this._removeSession())
const r=Math.round(Date.now()/1e3),i=(null!==(e=s.expires_at)&&void 0!==e?e:1/0)<r+10
if(this._debug(t,`session has${i?"":" not"} expired with margin of 10s`),i){if(this.autoRefreshToken&&s.refresh_token){const{error:e}=await this._callRefreshToken(s.refresh_token)
e&&(Vt(e)||(this._debug(t,"refresh failed with a non-retryable error, removing the session",e),await this._removeSession()))}}else await this._notifyAllSubscribers("SIGNED_IN",s)}catch(s){return void this._debug(t,"error",s)}finally{this._debug(t,"end")}}async _callRefreshToken(e){var t,s
if(!e)throw new zt
if(this.refreshingDeferred)return this.refreshingDeferred.promise
const r=`#_callRefreshToken(${e.substring(0,5)}...)`
this._debug(r,"begin")
try{this.refreshingDeferred=new xt
const{data:t,error:s}=await this._refreshAccessToken(e)
if(s)throw s
if(!t.session)throw new zt
await this._saveSession(t.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",t.session)
const r={session:t.session,error:null}
return this.refreshingDeferred.resolve(r),r}catch(i){if(this._debug(r,"error",i),Bt(i)){const e={session:null,error:i}
return Vt(i)||await this._removeSession(),null===(t=this.refreshingDeferred)||void 0===t||t.resolve(e),e}throw null===(s=this.refreshingDeferred)||void 0===s||s.reject(i),i}finally{this.refreshingDeferred=null,this._debug(r,"end")}}async _notifyAllSubscribers(e,t,s=!0){const r=`#_notifyAllSubscribers(${e})`
this._debug(r,"begin",t,`broadcast = ${s}`)
try{this.broadcastChannel&&s&&this.broadcastChannel.postMessage({event:e,session:t})
const r=[],i=Array.from(this.stateChangeEmitters.values()).map((async s=>{try{await s.callback(e,t)}catch(i){r.push(i)}}))
if(await Promise.all(i),r.length>0){for(let e=0;e<r.length;e+=1);throw r[0]}}finally{this._debug(r,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0,await $t(this.storage,this.storageKey,e)}async _removeSession(){this._debug("#_removeSession()"),await Rt(this.storage,this.storageKey),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()")
const e=this.visibilityChangedCallback
this.visibilityChangedCallback=null
try{e&&St()&&(null===window||void 0===window?void 0:window.removeEventListener)&&window.removeEventListener("visibilitychange",e)}catch(t){}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()")
const e=setInterval((()=>this._autoRefreshTokenTick()),gs)
this.autoRefreshTicker=e,e&&"object"==typeof e&&"function"==typeof e.unref?e.unref():"undefined"!=typeof Deno&&"function"==typeof Deno.unrefTimer&&Deno.unrefTimer(e),setTimeout((async()=>{await this.initializePromise,await this._autoRefreshTokenTick()}),0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()")
const e=this.autoRefreshTicker
this.autoRefreshTicker=null,e&&clearInterval(e)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin")
try{await this._acquireLock(0,(async()=>{try{const t=Date.now()
try{return await this._useSession((async e=>{const{data:{session:s}}=e
if(!s||!s.refresh_token||!s.expires_at)return void this._debug("#_autoRefreshTokenTick()","no session")
const r=Math.floor((1e3*s.expires_at-t)/gs)
this._debug("#_autoRefreshTokenTick()",`access token expires in ${r} ticks, a tick lasts 30000ms, refresh threshold is 3 ticks`),r<=3&&await this._callRefreshToken(s.refresh_token)}))}catch(e){}}finally{this._debug("#_autoRefreshTokenTick()","end")}}))}catch(e){if(!(e.isAcquireTimeout||e instanceof us))throw e
this._debug("auto refresh token tick lock not available")}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!St()||!(null===window||void 0===window?void 0:window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1
try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),null===window||void 0===window||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){}}async _onVisibilityChanged(e){const t=`#_onVisibilityChanged(${e})`
this._debug(t,"visibilityState",document.visibilityState),"visible"===document.visibilityState?(this.autoRefreshToken&&this._startAutoRefresh(),e||(await this.initializePromise,await this._acquireLock(-1,(async()=>{"visible"===document.visibilityState?await this._recoverAndRefresh():this._debug(t,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting")})))):"hidden"===document.visibilityState&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,t,s){const r=[`provider=${encodeURIComponent(t)}`]
if((null==s?void 0:s.redirectTo)&&r.push(`redirect_to=${encodeURIComponent(s.redirectTo)}`),(null==s?void 0:s.scopes)&&r.push(`scopes=${encodeURIComponent(s.scopes)}`),"pkce"===this.flowType){const[e,t]=await Ut(this.storage,this.storageKey),s=new URLSearchParams({code_challenge:`${encodeURIComponent(e)}`,code_challenge_method:`${encodeURIComponent(t)}`})
r.push(s.toString())}if(null==s?void 0:s.queryParams){const e=new URLSearchParams(s.queryParams)
r.push(e.toString())}return(null==s?void 0:s.skipBrowserRedirect)&&r.push(`skip_http_redirect=${s.skipBrowserRedirect}`),`${e}?${r.join("&")}`}async _unenroll(e){try{return await this._useSession((async t=>{var s
const{data:r,error:i}=t
return i?{data:null,error:i}:await es(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:null===(s=null==r?void 0:r.session)||void 0===s?void 0:s.access_token})}))}catch(t){if(Bt(t))return{data:null,error:t}
throw t}}async _enroll(e){try{return await this._useSession((async t=>{var s,r
const{data:i,error:n}=t
if(n)return{data:null,error:n}
const o=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},"phone"===e.factorType?{phone:e.phone}:{issuer:e.issuer}),{data:a,error:c}=await es(this.fetch,"POST",`${this.url}/factors`,{body:o,headers:this.headers,jwt:null===(s=null==i?void 0:i.session)||void 0===s?void 0:s.access_token})
return c?{data:null,error:c}:("totp"===e.factorType&&(null===(r=null==a?void 0:a.totp)||void 0===r?void 0:r.qr_code)&&(a.totp.qr_code=`data:image/svg+xml;utf-8,${a.totp.qr_code}`),{data:a,error:null})}))}catch(t){if(Bt(t))return{data:null,error:t}
throw t}}async _verify(e){return this._acquireLock(-1,(async()=>{try{return await this._useSession((async t=>{var s
const{data:r,error:i}=t
if(i)return{data:null,error:i}
const{data:n,error:o}=await es(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:{code:e.code,challenge_id:e.challengeId},headers:this.headers,jwt:null===(s=null==r?void 0:r.session)||void 0===s?void 0:s.access_token})
return o?{data:null,error:o}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+n.expires_in},n)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",n),{data:n,error:o})}))}catch(t){if(Bt(t))return{data:null,error:t}
throw t}}))}async _challenge(e){return this._acquireLock(-1,(async()=>{try{return await this._useSession((async t=>{var s
const{data:r,error:i}=t
return i?{data:null,error:i}:await es(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:{channel:e.channel},headers:this.headers,jwt:null===(s=null==r?void 0:r.session)||void 0===s?void 0:s.access_token})}))}catch(t){if(Bt(t))return{data:null,error:t}
throw t}}))}async _challengeAndVerify(e){const{data:t,error:s}=await this._challenge({factorId:e.factorId})
return s?{data:null,error:s}:await this._verify({factorId:e.factorId,challengeId:t.id,code:e.code})}async _listFactors(){const{data:{user:e},error:t}=await this.getUser()
if(t)return{data:null,error:t}
const s=(null==e?void 0:e.factors)||[],r=s.filter((e=>"totp"===e.factor_type&&"verified"===e.status)),i=s.filter((e=>"phone"===e.factor_type&&"verified"===e.status))
return{data:{all:s,totp:r,phone:i},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,(async()=>await this._useSession((async e=>{var t,s
const{data:{session:r},error:i}=e
if(i)return{data:null,error:i}
if(!r)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null}
const n=this._decodeJWT(r.access_token)
let o=null
n.aal&&(o=n.aal)
let a=o;(null!==(s=null===(t=r.user.factors)||void 0===t?void 0:t.filter((e=>"verified"===e.status)))&&void 0!==s?s:[]).length>0&&(a="aal2")
return{data:{currentLevel:o,nextLevel:a,currentAuthenticationMethods:n.amr||[]},error:null}}))))}}vs.nextInstanceID=0
const ms=vs
class _s extends ms{constructor(e){super(e)}}var ws=function(e,t,s,r){return new(s||(s=Promise))((function(i,n){function o(e){try{c(r.next(e))}catch(t){n(t)}}function a(e){try{c(r.throw(e))}catch(t){n(t)}}function c(e){var t
e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}c((r=r.apply(e,t||[])).next())}))}
class bs{constructor(e,t,s){var r,i,n
if(this.supabaseUrl=e,this.supabaseKey=t,!e)throw new Error("supabaseUrl is required.")
if(!t)throw new Error("supabaseKey is required.")
const o=e.replace(/\/$/,"")
this.realtimeUrl=`${o}/realtime/v1`.replace(/^http/i,"ws"),this.authUrl=`${o}/auth/v1`,this.storageUrl=`${o}/storage/v1`,this.functionsUrl=`${o}/functions/v1`
const a=`sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,c=function(e,t){const{db:s,auth:r,realtime:i,global:n}=e,{db:o,auth:a,realtime:c,global:h}=t,l={db:Object.assign(Object.assign({},o),s),auth:Object.assign(Object.assign({},a),r),realtime:Object.assign(Object.assign({},c),i),global:Object.assign(Object.assign({},h),n),accessToken:()=>_t(this,void 0,void 0,(function*(){return""}))}
return e.accessToken?l.accessToken=e.accessToken:delete l.accessToken,l}(null!=s?s:{},{db:pt,realtime:yt,auth:Object.assign(Object.assign({},gt),{storageKey:a}),global:ft})
this.storageKey=null!==(r=c.auth.storageKey)&&void 0!==r?r:"",this.headers=null!==(i=c.global.headers)&&void 0!==i?i:{},c.accessToken?(this.accessToken=c.accessToken,this.auth=new Proxy({},{get:(e,t)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(t)} is not possible`)}})):this.auth=this._initSupabaseAuthClient(null!==(n=c.auth)&&void 0!==n?n:{},this.headers,c.global.fetch),this.fetch=mt(t,this._getAccessToken.bind(this),c.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers},c.realtime)),this.rest=new ee(`${o}/rest/v1`,{headers:this.headers,schema:c.db.schema,fetch:this.fetch}),c.accessToken||this._listenForAuthEvents()}get functions(){return new u(this.functionsUrl,{headers:this.headers,customFetch:this.fetch})}get storage(){return new ut(this.storageUrl,this.headers,this.fetch)}from(e){return this.rest.from(e)}schema(e){return this.rest.schema(e)}rpc(e,t={},s={}){return this.rest.rpc(e,t,s)}channel(e,t={config:{}}){return this.realtime.channel(e,t)}getChannels(){return this.realtime.getChannels()}removeChannel(e){return this.realtime.removeChannel(e)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var e,t
return ws(this,void 0,void 0,(function*(){if(this.accessToken)return yield this.accessToken()
const{data:s}=yield this.auth.getSession()
return null!==(t=null===(e=s.session)||void 0===e?void 0:e.access_token)&&void 0!==t?t:null}))}_initSupabaseAuthClient({autoRefreshToken:e,persistSession:t,detectSessionInUrl:s,storage:r,storageKey:i,flowType:n,lock:o,debug:a},c,h){var l
const u={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`}
return new _s({url:this.authUrl,headers:Object.assign(Object.assign({},u),c),storageKey:i,autoRefreshToken:e,persistSession:t,detectSessionInUrl:s,storage:r,flowType:n,lock:o,debug:a,fetch:h,hasCustomAuthorizationHeader:null!==(l="Authorization"in this.headers)&&void 0!==l&&l})}_initRealtimeClient(e){return new qe(this.realtimeUrl,Object.assign(Object.assign({},e),{params:Object.assign({apikey:this.supabaseKey},null==e?void 0:e.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange(((e,t)=>{this._handleTokenChanged(e,"CLIENT",null==t?void 0:t.access_token)}))}_handleTokenChanged(e,t,s){"TOKEN_REFRESHED"!==e&&"SIGNED_IN"!==e||this.changedAccessToken===s?"SIGNED_OUT"===e&&(this.realtime.setAuth(this.supabaseKey),"STORAGE"==t&&this.auth.signOut(),this.changedAccessToken=void 0):(this.realtime.setAuth(null!=s?s:null),this.changedAccessToken=s)}}const ks=(e,t,s)=>new bs(e,t,s)
export{r as _,ks as c}