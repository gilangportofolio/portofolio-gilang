import{j as a,m as e,a as s}from"./vendor-animation-CvxR4I90.js"
import{r}from"./vendor-react-DujXGBlD.js"
import{b as l,c as n,d as i,e as t,f as o,g as c,h as m,i as d,j as p,S as h,k as x,l as g,m as u,n as y,o as b,p as k,q as j,r as f,s as w,t as v,u as N,v as C,w as S}from"./vendor-icons-B3j6O1HL.js"
import{u as W,t as H}from"./index-gLqp1jaf.js"
import"./vendor-utils-lUhnezB_.js"
const P=()=>a.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/a/a0/Capcut-logo.svg",alt:"Capcut Logo",className:"w-6 h-6"}),T=[{title:"Alat Produktivitas",icon:"icon-office",items:[{name:"Microsoft Word",icon:a.jsx(c,{className:"text-blue-600"})},{name:"Microsoft Excel",icon:a.jsx(m,{className:"text-green-600"})},{name:"Microsoft PowerPoint",icon:a.jsx(d,{className:"text-red-600"})},{name:"Google Workspace",icon:a.jsx(p,{className:"text-yellow-500"})}]},{title:"Alat Pengembangan",icon:"icon-dev",items:[{name:"VS Code",icon:a.jsx(h,{className:"text-blue-500"})},{name:"Git",icon:a.jsx(x,{className:"text-orange-500"})},{name:"GitHub",icon:a.jsx(n,{className:"text-gray-800"})},{name:"Postman",icon:a.jsx(g,{className:"text-orange-600"})}]},{title:"Database & Backend",icon:"icon-database",items:[{name:"SQL",icon:a.jsx(u,{className:"text-[#00758F]"})},{name:"PostgreSQL",icon:a.jsx(u,{className:"text-[#336791]"})},{name:"MySQL",icon:a.jsx(u,{className:"text-[#00618A]"})},{name:"Supabase",icon:a.jsx(u,{className:"text-[#3ECF8E]"})}]},{title:"Pemrograman & Markup",icon:"icon-programming",items:[{name:"HTML5",icon:a.jsx(y,{className:"text-orange-500"})},{name:"CSS3",icon:a.jsx(b,{className:"text-blue-500"})},{name:"JavaScript",icon:a.jsx(k,{className:"text-yellow-400"})},{name:"PHP",icon:a.jsx(j,{className:"text-purple-500"})},{name:"React",icon:a.jsx(f,{className:"text-blue-400"})},{name:"Tailwind CSS",icon:a.jsx(w,{className:"text-cyan-400"})}]},{title:"Media Sosial",icon:"icon-social",items:[{name:"LinkedIn",icon:a.jsx(l,{className:"text-[#0077B5]"})},{name:"WhatsApp",icon:a.jsx(i,{className:"text-[#25D366]"})},{name:"Instagram",icon:a.jsx(t,{className:"text-[#E4405F]"})},{name:"TikTok",icon:a.jsx(v,{className:"text-black"})}]},{title:"Alat Desain & Pengeditan",icon:"icon-design",items:[{name:"CorelDraw",icon:a.jsx(N,{className:"text-[#000000]"})},{name:"Photoshop",icon:a.jsx(C,{className:"text-[#31A8FF]"})},{name:"Canva",icon:a.jsx(S,{className:"text-[#00C4CC]"})},{name:"Capcut",icon:a.jsx(P,{})}]}],M="https://ohkcmgrjqmcarpfwcmiy.supabase.co/storage/v1/object/public/portofolio/pribadi/Propil.png",E="https://ohkcmgrjqmcarpfwcmiy.supabase.co/storage/v1/object/public/portofolio/pribadi/propil2.jpg",_=({src:e,alt:s,className:l,...n})=>{const[i,t]=r.useState(!0),[o,c]=r.useState(!1)
return a.jsxs("div",{className:`relative ${l}`,children:[i&&a.jsx("div",{className:"absolute inset-0 bg-gray-200 animate-pulse rounded-2xl"}),a.jsx("img",{src:e,alt:s,className:`${l} ${i?"opacity-0":"opacity-100"}`,loading:"lazy",onLoad:()=>t(!1),onError:()=>{c(!0),t(!1)},...n}),o&&a.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-100 rounded-2xl",children:a.jsx("span",{className:"text-gray-500",children:"Failed to load image"})})]})},F=()=>{const[c,m]=r.useState(!1)
W()
const[d,p]=r.useState("text-blue-500")
r.useEffect((()=>{const a=["text-blue-500","text-green-500","text-orange-500"]
let e=0
const s=setInterval((()=>{e=(e+1)%a.length,p(a[e])}),3e3)
return()=>clearInterval(s)}),[])
const h=async a=>{try{await H(a)}catch(e){}}
return a.jsx("div",{className:"tentang-container",children:a.jsx("section",{className:"page-section relative",children:a.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col gap-4",children:[a.jsxs("div",{className:"profile-section",style:{borderColor:"var(--color-primary)",borderWidth:"1px"},children:[a.jsx(e.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.5},className:"w-[180px] h-[240px] md:w-[280px] md:h-[320px] flex-shrink-0 mx-auto mb-8 md:mb-0 md:mr-8",children:a.jsx(_,{src:M,alt:"Gilang Working",className:"w-full h-full object-cover rounded-2xl border-2 shadow-lg hover:shadow-2xl transition-all duration-300"})}),a.jsx("div",{className:"flex-1",children:a.jsxs("div",{className:"flex flex-col text-content",children:[a.jsx(e.h1,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},className:"font-heading text-h1 mb-8",children:a.jsx("div",{className:"flex items-center gap-2",children:a.jsx(s,{sequence:["Halo! Saya Gilang Pratama Putra 👋",3e3,"Dari Bandung, Indonesia 🌆",3e3,"Siap Untuk Bekerja! 💪",3e3],wrapper:"span",speed:50,repeat:1/0,cursor:!0,className:"text-2xl md:text-3xl font-bold animate-text-color"})})}),a.jsx(e.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.4},children:a.jsx("p",{className:"font-sans text-gray-600 text-justify leading-relaxed font-medium ",children:"Meskipun saya seorang fresh graduate dengan latar belakang di bidang IT, saya telah memperoleh pengalaman berharga selama masa kuliah yang membantu saya memahami dan mengaplikasikan berbagai aspek teknologi. Saat ini, saya fokus mengembangkan keterampilan sebagai Full Stack Developer untuk memperdalam sudut pandang saya dalam analisis sistem, manajemen produk, dan manajemen proyek . Saya percaya bahwa karir saya akan terus berkembang dengan berbagai peluang yang memungkinkan saya untuk terus belajar, beradaptasi, dan menghadapi tantangan teknologi yang terus berkembang."})}),a.jsxs(e.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.8},className:"mt-6",children:[a.jsx("h3",{className:"font-heading text-left text-h3 mb-3 text-gray-800",children:"Pengalaman"}),a.jsx("p",{className:"font-sans text-gray-600 text-justify leading-relaxed font-medium",children:"Selama kuliah, saya memperoleh pengalaman berharga melalui magang dan kerja praktik, yang memungkinkan saya mengaplikasikan pengetahuan dalam proyek nyata, mengelola proyek, dan berkolaborasi dalam tim untuk menemukan solusi kreatif. Selain itu, saya juga berpengalaman sebagai freelancer di bidang konsultan pengetikan dan desain grafis, yang mengasah keterampilan manajemen waktu, komunikasi, dan pemahaman kebutuhan klien. Pengalaman menjalankan usaha penjualan makanan juga memperkaya saya dengan keterampilan manajemen bisnis, pemasaran, dan pelayanan pelanggan. Semua pengalaman ini membentuk kemampuan saya beradaptasi dengan situasi berbeda dan fokus pada kualitas serta kepuasan klien."})]})]})})]}),a.jsxs("div",{className:"profile-section bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8",style:{borderColor:"var(--color-primary)",borderWidth:"1px"},children:[a.jsxs("div",{className:"flex-1 space-y-6 md:mr-8",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"font-heading text-h3 mb-3",children:"Cara Saya Bekerja"}),a.jsx("p",{className:"font-sans text-gray-600 text-justify leading-relaxed font-medium",children:"Saya menikmati proses menyelesaikan masalah dan selalu mencari cara yang lebih efisien untuk menemukan solusi. Working in a team is very important to me, because every project will be more successful if we can collaborate effectively and support each other. Saya percaya bahwa kemampuan teknis akan percuma jika tidak diimbangi dengan soft skills yang baik, karena keduanya saling melengkapi dan sama-sama penting untuk terus berkembang dan grow di dunia kerja, terutama di industri IT yang terus berkembang pesat."})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"font-heading text-h3 mb-3",children:"Minat & Pengembangan"}),a.jsx("div",{className:"flex flex-col items-start",children:a.jsx("p",{className:"font-sans text-gray-600 text-justify leading-relaxed font-medium mb-6",children:"Di luar pekerjaan, saya adalah seseorang yang selalu penasaran dengan teknologi terbaru dan bagaimana hal itu bisa diterapkan untuk menyelesaikan masalah bisnis dan meningkatkan kualitas produk. Saya percaya bahwa pengembangan diri adalah perjalanan tanpa akhir, dan saya selalu terbuka untuk berbagai peluang yang dapat memperkaya pengalaman saya. Jika Anda tertarik untuk berdiskusi atau bekerja sama, saya selalu terbuka untuk peluang baru, baik itu posisi di dalam maupun luar bidang saya. Saya percaya setiap pengalaman adalah kesempatan untuk tumbuh dan belajar lebih banyak. "})})]})]}),a.jsxs("div",{className:"hidden md:flex flex-col items-center gap-6",children:[a.jsx(e.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.5},className:"w-[280px] h-[320px] flex-shrink-0",children:a.jsx(_,{src:E,alt:"Gilang Working",className:"w-full h-full object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"})}),a.jsxs("div",{className:"flex flex-col items-center w-full gap-4",children:[a.jsx(e.button,{onClick:()=>m(!c),className:"px-6 py-2 text-white rounded-full font-bold text-base shadow-md hover:shadow-lg transition-all hover:scale-105",style:{background:"var(--gradient-primary)"},whileHover:{scale:1.03},whileTap:{scale:.98},children:"CONNECT ME"}),a.jsxs(e.div,{className:"flex justify-center gap-4",initial:{opacity:0,height:0},animate:{opacity:c?1:0,height:c?"auto":0,marginTop:c?"1rem":0},transition:{duration:.3},children:[a.jsx(e.a,{href:"https://id.linkedin.com/in/gilangpratamaputra",target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all",style:{borderColor:"var(--color-primary)",borderWidth:"1px"},whileHover:{scale:1.1},onClick:()=>h("linkedin"),children:a.jsx(l,{className:"w-5 h-5",style:{color:"var(--color-primary)"}})}),a.jsx(e.a,{href:"https://github.com/gilangportofolio",target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all",style:{borderColor:"var(--color-primary)",borderWidth:"1px"},whileHover:{scale:1.1},onClick:()=>h("github"),children:a.jsx(n,{className:"w-5 h-5",style:{color:"var(--color-primary)"}})}),a.jsx(e.a,{href:"https://wa.me/62895375455587",target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all",style:{borderColor:"var(--color-primary)",borderWidth:"1px"},whileHover:{scale:1.1},onClick:()=>h("whatsapp"),children:a.jsx(i,{className:"w-5 h-5",style:{color:"var(--color-primary)"}})}),a.jsx(e.a,{href:"https://www.instagram.com/gilang.pputraa/",target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all",style:{borderColor:"var(--color-primary)",borderWidth:"1px"},whileHover:{scale:1.1},onClick:()=>h("instagram"),children:a.jsx(t,{className:"w-5 h-5",style:{color:"var(--color-primary)"}})}),a.jsx(e.a,{href:"https://www.youtube.com/@gilangportofolio",target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all",style:{borderColor:"var(--color-primary)",borderWidth:"1px"},whileHover:{scale:1.1},onClick:()=>h("youtube"),children:a.jsx(o,{className:"w-5 h-5",style:{color:"var(--color-primary)"}})})]})]})]}),a.jsxs("div",{className:"flex md:hidden flex-col items-center mt-8",children:[a.jsx(e.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.5},className:"w-[180px] h-[240px] flex-shrink-0 mb-6",children:a.jsx(_,{src:E,alt:"Gilang Working",className:"w-full h-full object-cover rounded-2xl border-2 shadow-lg hover:shadow-2xl transition-all duration-300"})}),a.jsxs("div",{className:"flex flex-col items-center w-full gap-4",children:[a.jsx(e.button,{onClick:()=>m(!c),className:"w-full px-6 py-2 text-white rounded-full font-bold text-base shadow-md hover:shadow-lg transition-all hover:scale-105",style:{background:"var(--gradient-primary)"},whileHover:{scale:1.03},whileTap:{scale:.98},children:"CONNECT ME"}),a.jsxs(e.div,{className:"flex flex-wrap justify-center gap-4",initial:{opacity:0,height:0},animate:{opacity:c?1:0,height:c?"auto":0,marginTop:c?"1rem":0},transition:{duration:.3},children:[a.jsx(e.a,{href:"https://id.linkedin.com/in/gilangpratamaputra",target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all",style:{borderColor:"var(--color-primary)",borderWidth:"1px"},whileHover:{scale:1.1},onClick:()=>h("linkedin"),children:a.jsx(l,{className:"w-5 h-5",style:{color:"var(--color-primary)"}})}),a.jsx(e.a,{href:"https://github.com/gilangportofolio",target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all",style:{borderColor:"var(--color-primary)",borderWidth:"1px"},whileHover:{scale:1.1},onClick:()=>h("github"),children:a.jsx(n,{className:"w-5 h-5",style:{color:"var(--color-primary)"}})}),a.jsx(e.a,{href:"https://wa.me/62895375455587",target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all",style:{borderColor:"var(--color-primary)",borderWidth:"1px"},whileHover:{scale:1.1},onClick:()=>h("whatsapp"),children:a.jsx(i,{className:"w-5 h-5",style:{color:"var(--color-primary)"}})}),a.jsx(e.a,{href:"https://www.instagram.com/gilang.pputraa/",target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all",style:{borderColor:"var(--color-primary)",borderWidth:"1px"},whileHover:{scale:1.1},onClick:()=>h("instagram"),children:a.jsx(t,{className:"w-5 h-5",style:{color:"var(--color-primary)"}})}),a.jsx(e.a,{href:"https://www.youtube.com/@gilangportofolio",target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all",style:{borderColor:"var(--color-primary)",borderWidth:"1px"},whileHover:{scale:1.1},onClick:()=>h("youtube"),children:a.jsx(o,{className:"w-5 h-5",style:{color:"var(--color-primary)"}})})]})]})]})]}),a.jsxs("div",{className:"skills-section p-8 w-full mt-4",children:[a.jsxs(e.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-center mb-6",children:[a.jsx("h1",{className:"font-heading text-2xl md:text-2xl font-bold tracking-wider",style:{background:"var(--gradient-primary)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Software & Skills"}),a.jsxs("div",{className:"flex items-center justify-center gap-2 mb-4",children:[a.jsx("div",{className:"h-[2px] w-20",style:{background:"var(--gradient-primary)"}}),a.jsx("span",{style:{color:"var(--color-primary)"},children:"⚡"}),a.jsx("div",{className:"h-[2px] w-20",style:{background:"var(--gradient-primary)"}})]}),a.jsx("p",{className:"text-gray-800 max-w-4xl mx-auto leading-relaxed font-mediumtext text-xl",children:"Kombinasi powerful dari berbagai tools dan teknologi yang saya gunakan untuk menciptakan solusi inovatif dan menghadirkan hasil yang optimal"})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 w-full",children:T.map(((s,r)=>a.jsxs(e.div,{className:"skill-category bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-md",style:{borderColor:"var(--color-primary)",borderWidth:"1px"},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*r},children:[a.jsx("h3",{className:"text-xl font-semibold mb-4",style:{color:"var(--color-primary)"},children:s.title}),a.jsx("div",{className:"grid grid-cols-2 gap-4",children:s.items.map(((s,r)=>a.jsxs(e.div,{className:"skill-item flex flex-col items-center gap-2",whileHover:{scale:1.05},children:[a.jsx("span",{className:"skill-icon p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all",children:s.icon}),a.jsx("span",{className:"text-sm font-medium text-gray-700",children:s.name})]},r)))})]},r)))})]})]})})})}
export{F as default}