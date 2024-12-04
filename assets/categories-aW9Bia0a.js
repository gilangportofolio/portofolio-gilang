import{s as e}from"./index-gLqp1jaf.js"
import{r as o}from"./vendor-react-DujXGBlD.js"
const r={SEMUA:"Semua",UI_UX:"UI/UX",DESIGN_VISUAL:"Design Visual",WEBSITE:"Website",SYSTEM_ANALYST:"System Analyst",BISNIS_ANALYST:"Bisnis Analyst",DOKUMENTASI:"Dokumentasi",PROJEK_LAIN:"Proyek Lain"},t={[r.SEMUA]:{bg:"#f97316",text:"#ffffff"},[r.UI_UX]:{bg:"#0ea5e9",text:"#ffffff"},[r.DESIGN_VISUAL]:{bg:"#ec4899",text:"#ffffff"},[r.WEBSITE]:{bg:"#6366f1",text:"#ffffff"},[r.SYSTEM_ANALYST]:{bg:"#10b981",text:"#ffffff"},[r.BISNIS_ANALYST]:{bg:"#8b5cf6",text:"#ffffff"},[r.DOKUMENTASI]:{bg:"#f43f5e",text:"#ffffff"},[r.PROJEK_LAIN]:{bg:"#64748b",text:"#ffffff"}},f={API:{color:"#0891b2",bgColor:"#ecfeff",borderColor:"#22d3ee"},DevOps:{color:"#475569",bgColor:"#f8fafc",borderColor:"#94a3b8"},Frontend:{color:"#db2777",bgColor:"#fdf2f8",borderColor:"#f472b6"},Backend:{color:"#059669",bgColor:"#ecfdf5",borderColor:"#34d399"},Database:{color:"#9333ea",bgColor:"#f5f3ff",borderColor:"#c084fc"},Design:{color:"#0ea5e9",bgColor:"#f0f9ff",borderColor:"#38bdf8"},Other:{color:"#64748b",bgColor:"#f8fafc",borderColor:"#94a3b8"}}
let s=null
const n=async()=>{if(s)return s
try{const{data:o,error:r}=await e.from("tools_master").select("nama, kategori")
if(r)throw r
const t={}
return null==o||o.forEach((e=>{t[e.nama]=e.kategori})),s=t,t}catch(o){return{}}},a=e=>{const o={color:f.Other.color,backgroundColor:f.Other.bgColor,borderColor:f.Other.borderColor}
if(!e||!s)return o
const r=s[e]||"Other",t=f[r]||f.Other
return{color:t.color,backgroundColor:t.bgColor,borderColor:t.borderColor}}
function l(e){const[f,s]=o.useState(r.SEMUA),[n,a]=o.useState(!1),l=o.useCallback((e=>{e!==f&&(a(!0),setTimeout((()=>{s(e),requestAnimationFrame((()=>{requestAnimationFrame((()=>{a(!1)}))}))}),150))}),[f]),i=o.useMemo((()=>f===r.SEMUA?e:e.filter((e=>(e=>{const o=null==e?void 0:e.toLowerCase()
return o?o.includes("ui")||o.includes("ux")?r.UI_UX:o.includes("visual")||o.includes("design")?r.DESIGN_VISUAL:o.includes("web")||o.includes("development")?r.WEBSITE:o.includes("system")||o.includes("sistem")?r.SYSTEM_ANALYST:o.includes("business")||o.includes("bisnis")?r.BISNIS_ANALYST:o.includes("dokumentasi")||o.includes("documentation")?r.DOKUMENTASI:r.PROJEK_LAIN:r.PROJEK_LAIN})(e.kategori)===f))),[e,f])
return{activeFilter:f,setActiveFilter:l,filteredItems:i,getCategoryStyle:e=>{const o=t[e]||t[r.SEMUA],s=e===f
return{backgroundColor:s?o.bg:"transparent",color:s?o.text:o.bg,borderColor:s?"transparent":o.bg,boxShadow:s?`0 4px 6px -1px ${o.bg}40`:"none"}},categories:Object.values(r),isTransitioning:n}}const i={SEMUA:"Semua",FULL_TIME:"Full Time",PART_TIME:"Part Time",FREELANCE:"Freelance",ORGANISASI:"Organisasi",INTERN:"Intern"},c={[i.SEMUA]:{bg:"#f97316",text:"#ffffff"},[i.FULL_TIME]:{bg:"#4F46E5",text:"#ffffff"},[i.PART_TIME]:{bg:"#7C3AED",text:"#ffffff"},[i.FREELANCE]:{bg:"#059669",text:"#ffffff"},[i.ORGANISASI]:{bg:"#D97706",text:"#ffffff"},[i.INTERN]:{bg:"#DC2626",text:"#ffffff"}}
function b(e){const[r,t]=o.useState(i.SEMUA),[f,s]=o.useState(!1),n=o.useCallback((e=>{e!==r&&(s(!0),setTimeout((()=>{t(e),requestAnimationFrame((()=>{requestAnimationFrame((()=>{s(!1)}))}))}),150))}),[r]),a=o.useMemo((()=>r===i.SEMUA?e:e.filter((e=>{var o
return(null==(o=e.status)?void 0:o.toLowerCase().replace(/\s+/g,""))===r.toLowerCase().replace(/\s+/g,"")}))),[e,r])
return{activeFilter:r,setActiveFilter:n,filteredItems:a,getExperienceStyle:e=>{const o=c[e]||c[i.SEMUA],t=e===r
return{backgroundColor:t?o.bg:"transparent",color:t?o.text:o.bg,borderColor:t?"transparent":o.bg,boxShadow:t?`0 4px 6px -1px ${o.bg}40`:"none"}},categories:Object.values(i),isTransitioning:f}}export{t as C,l as a,n as f,a as g,b as u}
