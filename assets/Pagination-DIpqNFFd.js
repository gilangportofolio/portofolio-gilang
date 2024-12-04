import{j as t}from"./vendor-animation-CvxR4I90.js"
import"./vendor-react-DujXGBlD.js"
function e({currentPage:e,totalCount:o,pageSize:r,onPageChange:n}){const a=Math.ceil(o/r)
return a<=1?null:t.jsx("div",{className:"flex justify-center gap-2 mt-8",children:Array.from({length:a},((t,e)=>e+1)).map((o=>t.jsx("button",{className:"w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 "+(e===o?"bg-emerald-500 text-white":"bg-gray-100 text-gray-800 hover:bg-gray-200"),onClick:()=>(t=>{const e=document.querySelector(".grid")
e.style.opacity="0",e.style.transition="opacity 0.3s ease",setTimeout((()=>{n(t)
const o=document.querySelector(".container")
o&&o.scrollIntoView({behavior:"smooth",block:"start"}),setTimeout((()=>{e.style.opacity="1"}),300)}),300)})(o),children:o},o)))})}export{e as P}
