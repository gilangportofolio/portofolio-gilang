import { FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className="footer bg-white/95 backdrop-blur-sm z-50 border-b border-emerald-100 flex justify-between items-center px-6 py-4">
      <aside className="flex items-center gap-4">
        <div className="text-4xl text-[#fd6529] font-bold">@</div>
        <div>
          <p className="font-bold">Gilang Pratama Putra</p>
          <p className="text-sm text-semi ">Copyright 2024 - Portofolio</p>
        </div>
      </aside>
      
      <nav>
        <h6 className="footer-title text-black mb-2">CONNECT ME</h6>
        <div className="flex gap-4">
          <a href="#" className="text-[#0A66C2] hover:text-[#004182]">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="text-[#FF0000] hover:text-[#CC0000]">
            <FaYoutube size={24} />
          </a>
          <a href="#" className="text-[#E4405F] hover:text-[#B3213F]">
            <FaInstagram size={24} />
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Footer
