import{j as e,m as a}from"./vendor-animation-CvxR4I90.js"
import{r as t}from"./vendor-react-DujXGBlD.js"
import{L as s,s as i}from"./index-gLqp1jaf.js"
import"./vendor-utils-lUhnezB_.js"
import"./vendor-icons-B3j6O1HL.js"
const n=()=>{const[n,d]=t.useState([]),[l,r]=t.useState(!0),[m,c]=t.useState(null)
return t.useEffect((()=>{(async()=>{try{const{data:e,error:a}=await i.from("pendidikan").select("\n            *,\n            pendidikan_detail (\n              id,\n              poin,\n              penjelasan,\n              urutan\n            )\n          ").order("tahun_masuk",{ascending:!1})
if(a)throw a
const t=e.map((e=>({...e,pendidikan_detail:e.pendidikan_detail.sort(((e,a)=>e.urutan-a.urutan))})))
d(t)}catch(e){c(e.message)}finally{r(!1)}})()}),[]),l?e.jsx(s,{}):m?e.jsxs("div",{children:["Error: ",m]}):e.jsx("div",{className:"pendidikan-container",children:e.jsx("section",{className:"page-section",children:e.jsx("div",{className:"max-w-7xl mx-auto flex flex-col ",children:n.map(((t,s)=>e.jsxs(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2*s},className:"bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-8 hover:shadow-xl transition-shadow",style:{borderColor:"var(--color-primary)",borderWidth:"1px"},children:[e.jsx("div",{className:"flex flex-col items-center md:items-start",children:e.jsx("div",{className:"w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-0",children:e.jsx("img",{src:t.logo_url,alt:`Logo ${t.nama}`,className:"w-full h-full object-contain"})})}),e.jsx("div",{className:"flex-1",children:e.jsxs("div",{className:"text-center md:text-left",children:[e.jsx("h3",{className:"text-xl md:text-2xl font-bold text-gray-800",children:t.nama}),e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between mt-1",children:[e.jsx("p",{className:"text-orange-500 font-semibold text-center md:text-left",children:t.jurusan}),e.jsxs("p",{className:"text-gray-1000 font-normal text-center md:text-right mt-2 md:mt-0",children:[t.tahun_masuk," - ",t.tahun_keluar||"Sekarang",", ",t.lokasi]})]}),t.deskripsi&&e.jsx("p",{className:"font-gray-900 mt-4 text-justify md:text-justify",children:t.deskripsi}),t.pendidikan_detail&&t.pendidikan_detail.length>0&&e.jsx("div",{className:"space-y-3 mt-4",children:t.pendidikan_detail.map((t=>e.jsxs(a.div,{initial:{opacity:0},animate:{opacity:1},className:"flex gap-3 items-start",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-gray-800 mt-2 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-justify text-gray-800",children:t.poin}),t.penjelasan&&e.jsx("p",{className:"text-gray-600 text-justify mt-1",children:t.penjelasan})]})]},t.id)))})]})})]},t.id)))})})})}
export{n as default}
