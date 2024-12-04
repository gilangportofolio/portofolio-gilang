import{j as e}from"./vendor-animation-CvxR4I90.js"
import{u as t}from"./index-CdT6Iwe-.js"
function o({currentPage:o,totalCount:r,pageSize:n,onPageChange:a}){const{currentTheme:i}=t(),s=Math.ceil(r/n)
return s<=1?null:e.jsx("div",{className:"flex justify-center gap-2 mt-8",children:Array.from({length:s},((e,t)=>t+1)).map((t=>e.jsx("button",{className:"w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200",style:{background:o===t?`var(--gradient-${"default"===i?"primary":i})`:"rgb(243 244 246)",color:o===t?"white":"rgb(31 41 55)"},onClick:()=>(e=>{const t=document.querySelector(".grid")
t.style.opacity="0",t.style.transition="opacity 0.3s ease",setTimeout((()=>{a(e)
const o=document.querySelector(".container")
o&&o.scrollIntoView({behavior:"smooth",block:"start"}),setTimeout((()=>{t.style.opacity="1"}),300)}),300)})(t),children:t},t)))})}export{o as P}
