import { motion } from 'framer-motion'
import { FaFileWord, FaFileExcel, FaFilePowerpoint, FaGoogle, FaGithub, FaGit, FaHtml5, FaCss3Alt, FaPhp, FaReact, FaLinkedin, FaWhatsapp, FaInstagram, FaTiktok, FaDatabase } from 'react-icons/fa';
import { SiVisualstudiocode, SiPostman, SiJavascript, SiTailwindcss, SiAdobephotoshop, SiCanva, SiCoreldraw } from 'react-icons/si';
import ProfilImg from '../assets/img/Propil.png'
import ProfilImg2 from '../assets/img/Propil.png'
import { TypeAnimation } from 'react-type-animation'
import '../styles/Skills.css'
import '../styles/TentangSaya.css'
import { useState } from 'react';

const CapcutIcon = () => (
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Capcut-logo.svg"
    alt="Capcut Logo"
    className="w-6 h-6"
  />
);

// Tambahkan data skills
const skillCategories = [
  {
    title: "Alat Produktivitas",
    icon: "icon-office",
    items: [
      { name: "Microsoft Word", icon: <FaFileWord className="text-blue-600" /> },
      { name: "Microsoft Excel", icon: <FaFileExcel className="text-green-600" /> },
      { name: "Microsoft PowerPoint", icon: <FaFilePowerpoint className="text-red-600" /> },
      { name: "Google Workspace", icon: <FaGoogle className="text-yellow-500" /> },
    ]
  },
  {
    title: "Alat Pengembangan",
    icon: "icon-dev",
    items: [
      { name: "VS Code", icon: <SiVisualstudiocode className="text-blue-500" /> },
      { name: "Git", icon: <FaGit className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-600" /> },
    ]
  },
  {
    title: "Database & Backend",
    icon: "icon-database",
    items: [
      { name: "SQL", icon: <FaDatabase className="text-[#00758F]" /> },
      { name: "PostgreSQL", icon: <FaDatabase className="text-[#336791]" /> },
      { name: "MySQL", icon: <FaDatabase className="text-[#00618A]" /> },
      { name: "Supabase", icon: <FaDatabase className="text-[#3ECF8E]" /> },
    ]
  },
  {
    title: "Pemrograman & Markup",
    icon: "icon-programming",
    items: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "PHP", icon: <FaPhp className="text-purple-500" /> },
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    ]
  },
  {
    title: "Media Sosial",
    icon: "icon-social",
    items: [
      { name: "LinkedIn", icon: <FaLinkedin className="text-[#0077B5]" /> },
      { name: "WhatsApp", icon: <FaWhatsapp className="text-[#25D366]" /> },
      { name: "Instagram", icon: <FaInstagram className="text-[#E4405F]" /> },
      { name: "TikTok", icon: <FaTiktok className="text-black" /> },
    ]
  },
  {
    title: "Alat Desain & Pengeditan",
    icon: "icon-design",
    items: [
      { name: "CorelDraw", icon: <SiCoreldraw className="text-[#000000]" /> },
      { name: "Photoshop", icon: <SiAdobephotoshop className="text-[#31A8FF]" /> },
      { name: "Canva", icon: <SiCanva className="text-[#00C4CC]" /> },
      { 
        name: "Capcut", 
        icon: <CapcutIcon /> 
      },
    ]
  }
];


const TentangSaya = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="page-section relative py-44 px-4">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full translate-x-1/4 -translate-y-1/4 opacity-50 -z-50"></div>

      {/* Elemen dekoratif pojok kiri bawah */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-yellow-300 to-orange-300 rounded-full -translate-x-1/4 translate-y-1/4 opacity-50 -z-50"></div>
      
      <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-orange-200 rounded-full blur-sm -z-50"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-yellow-200 rounded-full blur-sm -z-50"></div>

      {/* Dots pattern */} 
      <div className="absolute top-2/3 left-20 w-40 h-40 opacity-10 -z-1">
        <div className="grid grid-cols-5 gap-2">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-orange-500 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section dengan Foto 1 */}
        <div className="flex gap-8 mb-10 profile-section">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="profile-image-container"
          >
            <img
              src={ProfilImg}
              alt="Gilang Pratama Putra"
              className="w-full h-full object-cover rounded-2xl border-2 border-orange-400 shadow-lg hover:shadow-2xl transition-all duration-300"
            />
          </motion.div>
          
          <div className="flex flex-col">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hero-title"
            >
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
                Hallo :)
              </span>
              <TypeAnimation
                sequence={[
                  "I'm Gilang Pratama Putra",
                  8000,
                  "",
                  1000,
                  "I'm Gilang Pratama Putra",
                  8000,
                  "",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className="text-3xl md:text-4xl font-bold"
                repeat={Infinity}
                cursor={true}
                deletionSpeed={65}
              />
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-600 text-lg leading-relaxed text-justify font-medium"
            >
              <p>
                Seorang yang penuh semangat dan selalu ingin berkembang di dunia teknologi dan manajemen. Saat ini, saya fokus untuk membangun karir di bidang System Analyst, Business Analyst, Product Owner, dan Project Manager. Namun, saya juga terbuka untuk berbagai peluang lain yang sesuai dengan keterampilan dan minat saya.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-6"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-orange-400 pb-2 inline-block">
                Pengalaman
              </h3>
              <p className="text-gray-600 text-justify leading-relaxed font-medium">
                Dengan latar belakang di bidang IT, saya telah mendapatkan pengalaman berharga melalui magang dan kerja praktik langsung. Pengalaman ini membantu saya untuk memahami bagaimana mengelola proyek dari awal hingga akhir, berkolaborasi dalam tim, serta mencari solusi kreatif untuk setiap tantangan yang muncul. Saya selalu berusaha untuk terus belajar, mengembangkan diri, dan bekerja dengan tim yang solid untuk menciptakan hasil terbaik.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Middle Section dengan Foto 2 */}
        <div className="flex gap-8 mb-12">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-orange-400 pb-2 inline-block">
                Cara Saya Bekerja
              </h3>
              <p className="text-gray-600 text-justify leading-relaxed font-medium">
              Saya senang dengan tantangan baru, terutama dalam hal mengelola tim dan proyek, serta mencari cara-cara baru untuk membuat proses kerja 
              lebih efisien dan efektif. Dalam setiap peran yang saya jalani, saya berusaha untuk selalu berpikir kritis, berkomunikasi dengan jelas, 
              dan beradaptasi dengan cepat terhadap perubahan.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-6"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-orange-400 pb-2 inline-block">
              Minat & Pengembangan
              </h3>
              <p className="text-gray-600 text-justify leading-relaxed font-medium">
              Di luar pekerjaan, saya adalah seseorang yang selalu ingin tahu lebih banyak tentang teknologi terbaru dan bagaimana hal itu bisa 
              diterapkan untuk menyelesaikan masalah bisnis dan meningkatkan kualitas produk. Saya percaya bahwa pengembangan diri adalah perjalanan 
              tanpa akhir, dan saya terbuka untuk berbagai peluang yang dapat memperkaya pengalaman saya.Jika Anda tertarik untuk berdiskusi atau bekerja
              sama, saya selalu terbuka untuk peluang baru, baik itu posisi di dalam maupun luar bidang saya. Saya percaya setiap pengalaman adalah kesempatan untuk tumbuh dan belajar lebih banyak.

              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-60 h-80 flex-shrink-0"
          >
            <img
              src={ProfilImg2}
              alt="Gilang Working"
              className="w-full h-full object-cover rounded-2xl border-2 border-orange-400 shadow-lg hover:shadow-2xl transition-all duration-300"
            />
          </motion.div>
        </div>

        {/* Hire Me Section dengan Social Media Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col items-center gap-6"
        >
          <p className="text-gray-600 text-center max-w-8xl leading-relaxed font-medium text-lg">
          Jika tertarik untuk berdiskusi atau bekerja sama, saya selalu terbuka untuk peluang baru, baik itu posisi di dalam maupun luar bidang saya. Saya percaya setiap pengalaman adalah kesempatan untuk tumbuh dan belajar lebih banyak.
          </p>

          <div className="relative">
  <motion.button
    onClick={() => setIsOpen(!isOpen)}
    className="px-10 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 border-2 border-orange-400"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    HIRE ME
  </motion.button>

  <motion.div 
    initial={{ scale: 0, opacity: 0 }}
    animate={{ 
      scale: isOpen ? 1 : 0,
      opacity: isOpen ? 1 : 0,
    }}
    transition={{ 
      type: "spring",
      stiffness: 260,
      damping: 20 
    }}
    className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 flex gap-6 justify-center" // Menggunakan flex, dan memastikan horizontal
  >
    <motion.a 
      href="https://id.linkedin.com/in/gilangpratamaputra" 
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 border-2 border-[#0077B5]"
      whileHover={{ y: -5 }}
    >
      <FaLinkedin className="w-6 h-6 text-[#0077B5]" />
    </motion.a>
    <motion.a 
      href="https://github.com/gilangportofolio" 
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 border-2 border-gray-800"
      whileHover={{ y: -5 }}
    >
      <FaGithub className="w-6 h-6 text-gray-800" />
    </motion.a>
    <motion.a 
      href="https://wa.me/62895375455587" 
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 border-2 border-[#25D366]"
      whileHover={{ y: -5 }}
    >
      <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
    </motion.a>
    <motion.a 
      href="https://www.instagram.com/gilang.pputraa/" 
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 border-2 border-[#E4405F]"
      whileHover={{ y: -5 }}
    >
      <FaInstagram className="w-6 h-6 text-[#E4405F]" />
    </motion.a>
  </motion.div>
</div>

        </motion.div>
      </div>

      {/* Skills Section */}
      <div className="skills-section mt-16">
        <h2 className="skills-title">Software & Skills</h2>
        <div className="space-y-12">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              className="skill-category"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.items.map((item, itemIdx) => (
                  <motion.div 
                    key={itemIdx}
                    className="skill-item"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="skill-icon">{item.icon}</span>
                    <span className="skill-name">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TentangSaya
