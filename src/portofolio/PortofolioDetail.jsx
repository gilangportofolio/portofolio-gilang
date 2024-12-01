import MediaCarousel from '../components/MediaCarousel'
import { useState, useEffect } from 'react'
import { useSwipeGesture } from '../hooks/useSwipeGesture'
import { getToolStyle, fetchToolCategories } from '../constants/categories'
import ImageLightbox from '../components/ImageLightbox'
import ExternalUrlHandler from '../utils/ExternalUrlHandler'
import { createPortal } from 'react-dom'

function PortofolioDetail({ project, onClose }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [selectedImage, setSelectedImage] = useState(null)
  const [toolsWithCategories, setToolsWithCategories] = useState({})
  const [toolsLoading, setToolsLoading] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const fetchTools = async () => {
      try {
        setToolsLoading(true)
        const toolsData = await fetchToolCategories()
        setToolsWithCategories(toolsData)
      } catch (error) {
        setToolsLoading(false)
      } finally {
        setToolsLoading(false)
      }
    }
    fetchTools()
  }, [])

  useEffect(() => {
    document.body.classList.add('modal-open')
    return () => {
      document.body.classList.remove('modal-open')
    }
  }, [])

  const swipeHandlers = isMobile ? useSwipeGesture(onClose) : {}

  const handleImageClick = (image) => {
    setSelectedImage(image)
  }

  const handleCloseImage = (e) => {
    e.stopPropagation()
    setSelectedImage(null)
  }

  const handleModalClick = (e) => {
    e.stopPropagation()
  }

  const getDetailImageUrl = (image) => {
    if (!image) return null;
    
    if (image.is_external) {
      const fileId = ExternalUrlHandler.googleDrive.extractFileId(image.url_gambar);
      return ExternalUrlHandler.googleDrive.getPreviewUrl(fileId, 'preview');
    }
    
    return image.url_gambar;
  };

  return createPortal(
    <div 
      className="modal-overlay fixed inset-0 bg-black/50 
                 flex items-center justify-center p-4 touch-manipulation"
      style={{ zIndex: 'var(--z-modal)' }}
      onClick={(e) => {
        e.preventDefault()
        onClose()
      }}
      {...swipeHandlers}
    >
      <div 
        className="modal-content bg-white rounded-lg w-full max-w-4xl 
                   max-h-[90vh] overflow-y-auto relative overscroll-contain 
                   touch-pan-y"
        onClick={handleModalClick}
        onTouchEnd={(e) => e.stopPropagation()}
        style={{ 
          WebkitOverflowScrolling: 'touch',
          msOverflowStyle: '-ms-autohiding-scrollbar'
        }}
      >
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
          {project.images?.length > 0 && (
            <div 
              onClick={(e) => e.stopPropagation()}
              className="touch-manipulation"
              style={{
                WebkitUserSelect: 'none',
                userSelect: 'none'
              }}
            >
              <MediaCarousel 
                media={project.images.map(img => ({
                  ...img,
                  url: getDetailImageUrl(img),
                  preview_url: img.is_external ? 
                    ExternalUrlHandler.googleDrive.getPreviewUrl(
                      ExternalUrlHandler.googleDrive.extractFileId(img.url_gambar),
                      'thumbnail'
                    ) : 
                    img.url_gambar,
                  fileId: img.is_external ? ExternalUrlHandler.googleDrive.extractFileId(img.url_gambar) : null,
                  isGoogleDrive: img.is_external
                }))} 
                onImageClick={handleImageClick}
              />
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Deskripsi</h3>
            <p className="text-gray-600">{project.deskripsi}</p>
          </div>

          {project.poin?.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Highlights</h3>
              <ul className="list-disc list-inside space-y-2">
                {project.poin.map((point, index) => (
                  <li key={index} className="text-gray-600">{point}</li>
                ))}
              </ul>
            </div>
          )}
{project.tools?.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Tools yang digunakan</h3>
              <div className="flex flex-wrap gap-2" onClick={(e) => e.stopPropagation()}>
                {toolsLoading ? (
                  <span className="text-gray-500">Loading tools...</span>
                ) : (
                  project.tools.map((tool, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 rounded-full text-sm border"
                      style={getToolStyle(tool)}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {tool}
                    </span>
                  ))
                )}
              </div>
            </div>
          )}
          {project.tautan && (
            <div className="mt-6">
              <a 
                href={project.tautan}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2 rounded-md transition-colors duration-200 gap-2 bg-orange-500 hover:bg-orange-600 text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z" />
                </svg>
                Live Demo
              </a>
            </div>
          )}
        </div>
      </div>

      {selectedImage && (
        <ImageLightbox 
          url={selectedImage.url}
          onClose={handleCloseImage}
        />
      )}
    </div>,
    document.body
  )
}

export default PortofolioDetail 