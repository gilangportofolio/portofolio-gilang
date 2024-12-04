import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { 
  FaFileWord, FaFileExcel, FaFilePowerpoint, FaGoogle, 
  FaGithub, FaGit, FaHtml5, FaCss3Alt, FaPhp, FaReact, 
  FaLinkedin, FaWhatsapp, FaInstagram, FaTiktok, 
  FaDatabase, FaYoutube 
} from 'react-icons/fa';
import { 
  SiVisualstudiocode, SiPostman, SiJavascript, 
  SiTailwindcss, SiAdobephotoshop, SiCanva, SiCoreldraw 
} from 'react-icons/si';
import { useTheme } from '../components/ThemeSwitcher';
import '../styles/Skills.css';
import '../styles/TentangSaya.css';
import '../styles/TextAnimation.css';
import { trackSocialClick } from '../utils/analytics';

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

// Tambahkan konstanta untuk URL gambar
const PROFILE_IMAGES = {
  primary: "https://ohkcmgrjqmcarpfwcmiy.supabase.co/storage/v1/object/public/portofolio/pribadi/Propil.png",
  secondary: "https://ohkcmgrjqmcarpfwcmiy.supabase.co/storage/v1/object/public/portofolio/pribadi/propil2.jpg"
};

// Tambahkan komponen OptimizedImage
const OptimizedImage = ({ src, alt, className, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl" />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setError(true);
          setIsLoading(false);
        }}
        {...props}
      />
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-2xl">
          <span className="text-gray-500">Failed to load image</span>
        </div>
      )}
    </div>
  );
};

const TentangSaya = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme } = useTheme();
  const [colorClass, setColorClass] = useState('text-blue-500'); // Menggunakan class Tailwind

  useEffect(() => {
    const colors = ['text-blue-500', 'text-green-500', 'text-orange-500']; // Class Tailwind
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % colors.length;
      setColorClass(colors[currentIndex]);
    }, 3000); // Ganti warna setiap 3 detik

    return () => clearInterval(intervalId);
  }, []);

  // Handler untuk social media clicks
  const handleSocialClick = async (platform) => {
    try {
      await trackSocialClick(platform);
    } catch (error) {
      console.error(`Error tracking ${platform} click:`, error);
    }
  };

  return (
    <div className="tentang-container">

      
      <section className="page-section relative">
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          {/* Profile Section - tambahkan border warna tema */}
          <div className="profile-section"
               style={{ borderColor: 'var(--color-primary)', borderWidth: '1px' }}>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-[180px] h-[240px] md:w-[280px] md:h-[320px] flex-shrink-0 mx-auto mb-8 md:mb-0 md:mr-8"
            >
              <OptimizedImage
                src={PROFILE_IMAGES.primary}
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
                  className="font-heading text-h1 mb-8"
                >
                  <div className="flex items-center gap-2">
                    <TypeAnimation
                      sequence={[
                        'Halo! Saya Gilang Pratama Putra 👋',
                        3000,
                        'Dari Bandung, Indonesia 🌆',
                        3000,
                        'Siap Untuk Bekerja! 💪',
                        3000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                      cursor={true}
                      className="text-2xl md:text-3xl font-bold animate-text-color"
                    />
                  </div>
                </motion.h1>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <p className="font-sans text-gray-600 text-justify leading-relaxed font-medium ">
                    Meskipun saya seorang fresh graduate dengan latar belakang di bidang IT, saya telah memperoleh pengalaman berharga selama masa 
                    kuliah yang membantu saya memahami dan mengaplikasikan berbagai aspek teknologi. Saat ini, saya fokus mengembangkan keterampilan 
                    sebagai Full Stack Developer untuk memperdalam sudut pandang saya dalam analisis sistem, manajemen produk, dan manajemen proyek . 
                    Saya percaya bahwa karir saya akan terus berkembang dengan berbagai peluang yang memungkinkan saya untuk terus belajar, 
                    beradaptasi, dan menghadapi tantangan teknologi yang terus berkembang.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="mt-6"
                >
                  <h3 className="font-heading text-left text-h3 mb-3 text-gray-800">
                    Pengalaman 
                  </h3>
                  <p className="font-sans text-gray-600 text-justify leading-relaxed font-medium">
                    Selama kuliah, saya memperoleh pengalaman berharga melalui magang dan kerja praktik, yang memungkinkan saya mengaplikasikan
                    pengetahuan dalam proyek nyata, mengelola proyek, dan berkolaborasi dalam tim untuk menemukan solusi kreatif. 
                    Selain itu, saya juga berpengalaman sebagai freelancer di bidang konsultan pengetikan dan desain grafis, yang mengasah 
                    keterampilan manajemen waktu, komunikasi, dan pemahaman kebutuhan klien. Pengalaman menjalankan usaha penjualan makanan juga 
                    memperkaya saya dengan keterampilan manajemen bisnis, pemasaran, dan pelayanan pelanggan. Semua pengalaman ini membentuk 
                    kemampuan saya beradaptasi dengan situasi berbeda dan fokus pada kualitas serta kepuasan klien.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div className="profile-section bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8"
               style={{ borderColor: 'var(--color-primary)', borderWidth: '1px' }}>
            {/* Bagian teks */}
            <div className="flex-1 space-y-6 md:mr-8">
              <div>
                <h3 
                  className="font-heading text-h3 mb-3"
                >
                  Cara Saya Bekerja
                </h3>
                <p className="font-sans text-gray-600 text-justify leading-relaxed font-medium">
                Saya menikmati proses menyelesaikan masalah dan selalu mencari cara yang lebih efisien untuk menemukan solusi. 
                Working in a team is very important to me, because every project will be more successful if we can collaborate effectively and 
                support each other. Saya percaya bahwa kemampuan teknis akan percuma jika tidak diimbangi dengan soft skills yang baik, 
                karena keduanya saling melengkapi dan sama-sama penting untuk terus berkembang dan grow di dunia kerja, terutama di industri IT 
                yang terus berkembang pesat.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-h3 mb-3">
                  Minat & Pengembangan
                </h3>
                <div className="flex flex-col items-start">
                  <p className="font-sans text-gray-600 text-justify leading-relaxed font-medium mb-6">
                  Di luar pekerjaan, saya adalah seseorang yang selalu penasaran dengan teknologi terbaru dan bagaimana hal itu bisa diterapkan 
                  untuk menyelesaikan masalah bisnis dan meningkatkan kualitas produk. Saya percaya bahwa pengembangan diri adalah perjalanan
                   tanpa akhir, dan saya selalu terbuka untuk berbagai peluang yang dapat memperkaya pengalaman saya. 
                   Jika Anda tertarik untuk berdiskusi atau bekerja sama, saya selalu terbuka untuk peluang baru, baik itu posisi di dalam maupun 
                   luar bidang saya. Saya percaya setiap pengalaman adalah kesempatan untuk tumbuh dan belajar lebih banyak. </p>
                </div>
              </div>
            </div>

            {/* Gambar dan Connect Me - Desktop Version */}
            <div className="hidden md:flex flex-col items-center gap-6">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-[280px] h-[320px] flex-shrink-0"
              >
                <OptimizedImage
                  src={PROFILE_IMAGES.secondary}
                  alt="Gilang Working"
                  className="w-full h-full object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </motion.div>

              <div className="flex flex-col items-center w-full gap-4">
                <motion.button
                  onClick={() => setIsOpen(!isOpen)}
                  className="px-6 py-2 text-white rounded-full font-bold text-base shadow-md hover:shadow-lg transition-all hover:scale-105"
                  style={{ background: 'var(--gradient-primary)' }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  CONNECT ME
                </motion.button>

                <motion.div 
                  className="flex justify-center gap-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: isOpen ? 1 : 0,
                    height: isOpen ? 'auto' : 0,
                    marginTop: isOpen ? '1rem' : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.a 
                    href="https://id.linkedin.com/in/gilangpratamaputra" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
                    style={{ borderColor: 'var(--color-primary)', borderWidth: '1px' }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => handleSocialClick('linkedin')}
                  >
                    <FaLinkedin className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                  </motion.a>
                  <motion.a 
                    href="https://github.com/gilangportofolio" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
                    style={{ borderColor: 'var(--color-primary)', borderWidth: '1px' }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => handleSocialClick('github')}
                  >
                    <FaGithub className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                  </motion.a>
                  <motion.a 
                    href="https://wa.me/62895375455587" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
                    style={{ borderColor: 'var(--color-primary)', borderWidth: '1px' }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => handleSocialClick('whatsapp')}
                  >
                    <FaWhatsapp className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                  </motion.a>
                  <motion.a 
                    href="https://www.instagram.com/gilang.pputraa/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
                    style={{ borderColor: 'var(--color-primary)', borderWidth: '1px' }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => handleSocialClick('instagram')}
                  >
                    <FaInstagram className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                  </motion.a>
                  <motion.a 
                    href="https://www.youtube.com/@gilangportofolio" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
                    style={{ borderColor: 'var(--color-primary)', borderWidth: '1px' }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => handleSocialClick('youtube')}
                  >
                    <FaYoutube className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                  </motion.a>
                </motion.div>
              </div>
            </div>

            {/* Gambar dan Connect Me - Mobile Version */}
            <div className="flex md:hidden flex-col items-center mt-8">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-[180px] h-[240px] flex-shrink-0 mb-6"
              >
                <OptimizedImage
                  src={PROFILE_IMAGES.secondary}
                  alt="Gilang Working"
                  className="w-full h-full object-cover rounded-2xl border-2 shadow-lg hover:shadow-2xl transition-all duration-300"
                />
              </motion.div>

              <div className="flex flex-col items-center w-full gap-4">
                <motion.button
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full px-6 py-2 text-white rounded-full font-bold text-base shadow-md hover:shadow-lg transition-all hover:scale-105"
                  style={{ background: 'var(--gradient-primary)' }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  CONNECT ME
                </motion.button>

                <motion.div 
                  className="flex flex-wrap justify-center gap-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: isOpen ? 1 : 0,
                    height: isOpen ? 'auto' : 0,
                    marginTop: isOpen ? '1rem' : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.a 
                    href="https://id.linkedin.com/in/gilangpratamaputra" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
                    style={{ borderColor: 'var(--color-primary)', borderWidth: '1px' }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => handleSocialClick('linkedin')}
                  >
                    <FaLinkedin className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                  </motion.a>
                  <motion.a 
                    href="https://github.com/gilangportofolio" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
                    style={{ borderColor: 'var(--color-primary)', borderWidth: '1px' }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => handleSocialClick('github')}
                  >
                    <FaGithub className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                  </motion.a>
                  <motion.a 
                    href="https://wa.me/62895375455587" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
                    style={{ borderColor: 'var(--color-primary)', borderWidth: '1px' }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => handleSocialClick('whatsapp')}
                  >
                    <FaWhatsapp className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                  </motion.a>
                  <motion.a 
                    href="https://www.instagram.com/gilang.pputraa/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
                    style={{ borderColor: 'var(--color-primary)', borderWidth: '1px' }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => handleSocialClick('instagram')}
                  >
                    <FaInstagram className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                  </motion.a>
                  <motion.a 
                    href="https://www.youtube.com/@gilangportofolio" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
                    style={{ borderColor: 'var(--color-primary)', borderWidth: '1px' }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => handleSocialClick('youtube')}
                  >
                    <FaYoutube className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Hire Me Section dengan Social Media Icons */}
          

        {/* Skills Section */}
        <div className="skills-section p-8 w-full mt-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6"
          >
            <h1 
              className="font-heading text-2xl md:text-2xl font-bold tracking-wider"
              style={{ 
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Software & Skills
            </h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-[2px] w-20" style={{ background: 'var(--gradient-primary)' }}></div>
              <span style={{ color: 'var(--color-primary)' }}>⚡</span>
              <div className="h-[2px] w-20" style={{ background: 'var(--gradient-primary)' }}></div>
            </div>
            <p className="text-gray-800 max-w-4xl mx-auto leading-relaxed font-mediumtext text-xl">
              Kombinasi powerful dari berbagai tools dan teknologi yang saya gunakan untuk 
              menciptakan solusi inovatif dan menghadirkan hasil yang optimal
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {skillCategories.map((category, idx) => (
              <motion.div 
                key={idx} 
                className="skill-category bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-md"
                style={{ borderColor: 'var(--color-primary)', borderWidth: '1px' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h3 
                  className="text-xl font-semibold mb-4"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.items.map((item, itemIdx) => (
                    <motion.div 
                      key={itemIdx}
                      className="skill-item flex flex-col items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span 
                        className="skill-icon p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all"
                       
                      >
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
    </div>
  );
};

export default TentangSaya;
