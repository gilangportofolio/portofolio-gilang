import { motion } from 'framer-motion'
import { FaFileWord, FaFileExcel, FaFilePowerpoint, FaGoogle, FaGithub, FaGit, FaHtml5, FaCss3Alt, FaPhp,  FaReact, FaLinkedin, FaWhatsapp, FaInstagram, FaTiktok, FaDatabase } from 'react-icons/fa';
import { SiVisualstudiocode, SiPostman, SiJavascript, SiTailwindcss, SiAdobephotoshop, SiCanva, SiCoreldraw } from 'react-icons/si';
import ProfilImg from '../assets/img/Propil.png'
import ProfilImg2 from '../assets/img/Propil2.jpg'
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
    <section className="page-section relative py-20 px-1">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full translate-x-1/4 -translate-y-1/4 opacity-50 -z-50"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-yellow-300 to-orange-300 rounded-full -translate-x-1/4 translate-y-1/4 opacity-50 -z-50"></div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-orange-200 rounded-full blur-sm -z-50"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-yellow-200 rounded-full blur-sm -z-50"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section dengan Foto 1 */}
        <div className="profile-section">
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-[180px] h-[240px] md:w-[280px] md:h-[320px] flex-shrink-0"
          >
            <img
              src={ProfilImg}
              alt="Gilang Working"
              className="w-full h-full object-cover rounded-2xl border-2 shadow-lg hover:shadow-2xl transition-all duration-300"
            />
          </motion.div>
          <div className="flex-1">
            <div className="flex flex-col text-content">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-heading text-h1 mb-4"
              >
                <span className="gradient-text text-h1">
                  Hallo :)
                </span>
                <TypeAnimation
                  sequence={[
                    " I'm Gilang Pratama Putra",
                    8000,
                    "",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="font-heading text-h1"
                  repeat={Infinity}
                  cursor={true}
                  deletionSpeed={65}
                />
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="font-sans text-justify"
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
                <h3 className="font-heading text-h3 mb-3 ">
                  Pengalaman
                </h3>
                <p className="font-sans text-gray-600 text-justify leading-relaxed font-medium">
                  Dengan latar belakang di bidang IT, saya telah mendapatkan pengalaman berharga melalui magang dan kerja praktik langsung. Pengalaman ini membantu saya untuk memahami bagaimana mengelola proyek dari awal hingga akhir, berkolaborasi dalam tim, serta mencari solusi kreatif untuk setiap tantangan yang muncul.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="profile-section mt-12"> {/* Tambahkan mt-12 untuk spacing */}
          {/* Bagian teks (kiri) */}
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="font-heading text-h3 mb-3">
                Cara Saya Bekerja
              </h3>
              <p className="font-sans text-gray-600 text-justify leading-relaxed font-medium">
                Saya senang dengan tantangan baru, terutama dalam hal mengelola tim dan proyek, serta mencari cara-cara baru untuk membuat proses kerja 
                lebih efisien dan efektif. Dalam setiap peran yang saya jalani, saya berusaha untuk selalu berpikir kritis, berkomunikasi dengan jelas, 
                dan beradaptasi dengan cepat terhadap perubahan.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-h3 mb-3">
                Minat & Pengembangan
              </h3>
              <div className="flex flex-col items-start">
                <p className="font-sans text-gray-600 text-justify leading-relaxed font-medium mb-6">
                  Di luar pekerjaan, saya adalah seseorang yang selalu ingin tahu lebih banyak tentang teknologi terbaru dan bagaimana hal itu bisa 
                  diterapkan untuk menyelesaikan masalah bisnis dan meningkatkan kualitas produk. Saya percaya bahwa pengembangan diri adalah perjalanan 
                  tanpa akhir, dan saya terbuka untuk berbagai peluang yang dapat memperkaya pengalaman saya. Jika Anda tertarik untuk berdiskusi atau bekerja
                  sama, saya selalu terbuka untuk peluang baru, baik itu posisi di dalam maupun luar bidang saya. Saya percaya setiap pengalaman adalah kesempatan untuk tumbuh dan belajar lebih banyak.
                </p>
                
                <div className="flex items-center gap-4">
                  <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full font-bold text-base shadow-md hover:shadow-lg transition-all hover:scale-105 border border-yellow-500"
                    whileHover={{ 
                      scale: 1.03,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    HIRE ME
                  </motion.button>

                  {/* Social Media Icons */}
                  <motion.div 
                    className="flex gap-4"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ 
                      opacity: isOpen ? 1 : 0,
                      width: isOpen ? 'auto' : 0,
                      marginLeft: isOpen ? '1rem' : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.a 
                      href="https://id.linkedin.com/in/gilangpratamaputra" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110 border border-[#0077B5]"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaLinkedin className="w-5 h-5 text-[#0077B5]" />
                    </motion.a>
                    <motion.a 
                      href="https://github.com/gilangportofolio" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110 border border-gray-800"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaGithub className="w-5 h-5 text-gray-800" />
                    </motion.a>
                    <motion.a 
                      href="https://wa.me/62895375455587" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110 border border-[#25D366]"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
                    </motion.a>
                    <motion.a 
                      href="https://www.instagram.com/gilang.pputraa/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110 border border-[#E4405F]"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaInstagram className="w-5 h-5 text-[#E4405F]" />
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Gambar (kanan) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-[180px] h-[240px] md:w-[280px] md:h-[320px] flex-shrink-0"
            >
            <img
              src={ProfilImg2}
              alt="Gilang Working"
              className="w-full h-full object-cover rounded-2xl border-2 shadow-lg hover:shadow-2xl transition-all duration-300"
            />
          </motion.div>
        </div>

        {/* Hire Me Section dengan Social Media Icons */}
        

      {/* Skills Section */}
      <div className="skills-section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 relative"
        >
          
          <h1 className="font-heading text-2xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent tracking-wider">
            Software & Skills
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-[2px] w-20 bg-gradient-to-r from-orange-500 to-transparent"></div>
            <span className="text-orange-500">⚡</span>
            <div className="h-[2px] w-20 bg-gradient-to-l from-orange-500 to-transparent"></div>
          </div>
          <p className="text-gray-800 max-w-4xl mx-auto leading-relaxed font-mediumtext text-xl">
            Kombinasi powerful dari berbagai tools dan teknologi yang saya gunakan untuk 
            menciptakan solusi inovatif dan menghadirkan hasil yang optimal
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 text-center gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              className="skill-category"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((item, itemIdx) => (
                  <motion.div 
                    key={itemIdx}
                    className="skill-item flex flex-col items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="skill-icon p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
                      {item.icon}
                    </span>
                    <span className="text-sm font-medium text-gray-700">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default TentangSaya;
