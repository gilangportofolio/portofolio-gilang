import MediaCarousel from '../components/MediaCarousel'
import { useState, useEffect } from 'react'
import { useSwipeGesture } from '../hooks/useSwipeGesture'

function PortofolioDetail({ project, onClose }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const swipeHandlers = isMobile ? useSwipeGesture(onClose) : {}

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 
                 flex items-center justify-center p-4 touch-manipulation"
      onClick={onClose}
      onTouchEnd={(e) => {
        e.preventDefault()
        onClose()
      }}
    >
      <div 
        className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] 
                   overflow-y-auto relative overscroll-contain"
        onClick={(e) => e.stopPropagation()}
        onTouchEnd={(e) => e.stopPropagation()}
      >
        {/* Swipe indicator untuk mobile */}
        <div className="absolute top-0 left-0 right-0 flex justify-center">
          <div className="w-12 h-1 bg-gray-300 rounded-full my-2" />
        </div>

        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold">{project.judul}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="p-4">
          {/* Media Carousel */}
          {project.images?.length > 0 && (
            <MediaCarousel 
              media={project.images.map(image => ({
                type: image.tipe,
                url: image.url_gambar
              }))}
            />
          )}

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Deskripsi</h3>
            <p className="text-gray-600">{project.deskripsi}</p>
          </div>

          {/* Tools */}
          {project.tools?.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Tools yang digunakan</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Points */}
          {project.poin?.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Poin-poin penting</h3>
              <ul className="list-disc list-inside space-y-2">
                {project.poin.map((point, index) => (
                  <li key={index} className="text-gray-600">{point}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Website Link */}
          {project.tautan && (
            <div className="mt-6">
              <a 
                href={project.tautan}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors duration-200"
              >
                <span className="mr-2">🌐</span>
                Kunjungi Website
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PortofolioDetail 