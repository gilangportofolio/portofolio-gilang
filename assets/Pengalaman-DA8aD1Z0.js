import{j as e}from"./animation-core-BZFp2DKZ.js";import{a}from"./react-core-BbmA5Yt5.js";import{b as s}from"./utils-CUgZd7Ef.js";import{L as t}from"./index-Dna_jBHg.js";import{u as r}from"./categories-BVne4L0z.js";import"./utils-db-I9L1Vnn6.js";import"./react-dom-Ceep4mT8.js";import"./react-router-BF67XFk8.js";const i=()=>{const[i,l]=a.useState([]),[c,o]=a.useState(!0),[m,d]=a.useState(null),{activeFilter:p,setActiveFilter:x,filteredItems:u,getExperienceStyle:h,categories:g,isTransitioning:j}=r(i);return a.useEffect((()=>{(async()=>{try{const{data:e,error:a}=await s.from("pekerjaan").select("*").order("mulai",{ascending:!1});if(a)throw a;l(e)}catch(e){d(e.message)}finally{setTimeout((()=>o(!1)),500)}})()}),[]),c?e.jsx(t,{}):m?e.jsx("div",{className:"text-center py-8 text-red-500",children:m}):e.jsx("div",{className:"pengalaman-container",children:e.jsx("div",{className:"content-wrapper",children:e.jsxs("div",{className:"mx-auto max-w-7xl relative w-full px-4",children:[e.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900",children:"Pengalaman"}),e.jsx("h2",{className:"text-gray-700 text-center mb-4 md:mb-8 text-sm md:text-base px-4",children:"Berikut adalah pengalaman saya yang dimulai dari tahun 2012 - sekarang"}),e.jsx("div",{className:"filter-container sticky top-[80px] flex flex-wrap justify-center gap-2 mb-8",children:g.map((a=>e.jsx("button",{onClick:()=>x(a),className:`\n                  px-4 py-2 rounded-lg text-sm font-medium \n                  transition-all duration-300 \n                  border hover:shadow-md\n                  ${p===a?"border-transparent":"border-gray-300 hover:border-gray-400"}\n                `,style:{...h(a),transform:p===a?"scale(1.05)":"scale(1)",borderWidth:"1px"},children:a},a)))}),e.jsx("div",{className:"timeline-container space-y-4 md:space-y-6",children:u.map(((a,s)=>e.jsx("div",{className:"experience-wrapper",children:e.jsxs("div",{className:"experience-card bg-white/70 backdrop-blur-sm rounded-lg shadow-md overflow-hidden",style:{borderColor:"var(--color-primary)",borderWidth:"1px"},children:[e.jsx("span",{className:`status-badge ${n(a.status)}`,children:a?.status||"Full Time"}),e.jsxs("div",{className:"info-container",children:[e.jsx("div",{className:"company-logo",children:a.logo_url?e.jsx("img",{src:a.logo_url,alt:`Logo ${a.perusahaan}`,className:"logo-image"}):e.jsx("div",{className:"logo-placeholder",children:a.perusahaan.charAt(0)})}),e.jsxs("div",{className:"company-details",children:[e.jsx("h3",{className:"company-name",children:a.perusahaan}),e.jsx("p",{className:"position-title",children:a.posisi}),e.jsx("div",{className:"date-info",children:e.jsxs("span",{className:"date-text",children:[new Date(a.mulai).toLocaleDateString("id-ID",{month:"long",year:"numeric"})," — ",a.akhir?new Date(a.akhir).toLocaleDateString("id-ID",{month:"long",year:"numeric"}):"Sekarang"]})})]})]}),e.jsxs("div",{className:"experience-content",children:[a.detail&&e.jsx("p",{className:"experience-detail",children:a.detail}),a.poin&&a.poin.length>0&&e.jsx("ul",{className:"points-list",children:a.poin.map(((a,s)=>e.jsx("li",{className:"point-item",children:a},s)))}),a.keterangan&&e.jsx("p",{className:"experience-note",children:a.keterangan})]})]})},s)))})]})})})},n=e=>{if(!e)return"status-Full-Time";switch(e.toLowerCase().replace(/\s+/g,"")){case"fulltime":case"full-time":case"full time":default:return"status-Full-Time";case"parttime":case"part-time":case"part time":return"status-Part-Time";case"freelance":return"status-freelance";case"organisasi":return"status-organisasi";case"intern":case"internship":case"magang":return"status-intern"}};export{i as default};