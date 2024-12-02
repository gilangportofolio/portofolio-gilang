import { useState, useEffect } from 'react'
import { FaHeart } from 'react-icons/fa';
import '../styles/Hp.css'

const Footer = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isModalOpen = document.body.classList.contains('modal-open')
          setIsModalVisible(isModalOpen)
        }
      })
    })

    observer.observe(document.body, {
      attributes: true
    })

    return () => observer.disconnect()
  }, [])

  return (
    <footer className={`bg-white/80 backdrop-blur-sm border-t border-gray-200 mt-auto transition-all duration-300 ${
      isModalVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-2">
              <div className="text-3xl md:text-4xl text-[#fd6529] font-bold">@</div>
              <h2 className="text-lg md:text-xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Gilang Pratama Putra
              </h2>
            </div>
            <p className="text-sm text-gray-600">
              Portofolio Website - {new Date().getFullYear()}
            </p>
          </div>

          {/* Made with love */}
          <div className="mt-4 md:mt-0">
            <p className="flex items-center gap-2 text-sm text-gray-600">
              Made with <FaHeart className="text-red-500 animate-pulse" /> in Bandung
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
