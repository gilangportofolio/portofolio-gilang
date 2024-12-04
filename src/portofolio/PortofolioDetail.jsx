import MediaCarousel from '../components/MediaCarousel'
import { useState, useEffect } from 'react'
import { useSwipeGesture } from '../hooks/useSwipeGesture'
import { getToolStyle, fetchToolCategories } from '../constants/categories'
import ImageLightbox from '../components/ImageLightbox'
import ExternalUrlHandler from '../utils/ExternalUrlHandler'
import { createPortal } from 'react-dom'
import { AiOutlineGlobal } from 'react-icons/ai'
import PDFPreview from '../components/PDFPreview'

function PortofolioDetail({ project, onClose }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [selectedImage, setSelectedImage] = useState(null)
  const [showLightbox, setShowLightbox] = useState(false)
  const [toolsWithCategories, setToolsWithCategories] = useState({})
  const [toolsLoading, setToolsLoading] = useState(true)

  const swipeHandlers = useSwipeGesture(onClose)

  // Tambahkan state untuk menangani touch events
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientY)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientY)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    // Hanya tutup jika slide lebih dari 100px
    const distance = touchStart - touchEnd
    const isSignificantMove = Math.abs(distance) > 100

    if (isSignificantMove) {
      // Reset touch states
      setTouchStart(null)
      setTouchEnd(null)
    }
  }

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
        console.error('Error fetching tools:', error)
      } finally {
        setToolsLoading(false)
      }
    }
    fetchTools()
  }, [])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const handleImageClick = (image, e) => {
    e?.stopPropagation();
    
    if (!image?.url_gambar) return;

    try {
      let finalUrl = '';
      
      if (image.is_external) {
        const fileId = ExternalUrlHandler.googleDrive.extractFileId(image.url_gambar);
        if (fileId) {
          const urls = ExternalUrlHandler.googleDrive.getPreviewUrl(fileId, 'preview');
          finalUrl = urls[0];
        }
      } else {
        finalUrl = image.url_gambar;
      }

      if (!finalUrl) return;

      setSelectedImage({
        ...image,
        displayUrl: finalUrl
      });
      setShowLightbox(true);
    } catch (error) {
      console.error('Error in handleImageClick:', error);
    }
  };

  const handleCloseImage = () => {
    setShowLightbox(false)
    setSelectedImage(null)
  }

  const handleModalClick = (e) => {

    e.stopPropagation()
  }

  const getDetailImageUrl = (image) => {
    if (!image?.url_gambar) return null;
    
    if (image.is_external) {
      const fileId = ExternalUrlHandler.googleDrive.extractFileId(image.url_gambar);
      if (fileId) {
        const urls = ExternalUrlHandler.googleDrive.getPreviewUrl(fileId, 'preview');
        return urls[0];
      }
    }
    return image.url_gambar;
  };

  const shouldShowLightbox = showLightbox && selectedImage && selectedImage.displayUrl;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const isPDF = (url) => {
    return url?.toLowerCase().endsWith('.pdf');
  };

  const renderContent = () => {
    if (!project.images?.length) return null;

    // Pisahkan PDF dan non-PDF images
    const pdfFiles = project.images.filter(img => isPDF(img.url_gambar));
    const imageFiles = project.images.filter(img => !isPDF(img.url_gambar));

    return (
      <div className="mb-6">
        {/* Render PDF files jika ada */}
        {pdfFiles.length > 0 && (
          <div className="space-y-4 mb-6">
            {pdfFiles.map((pdf, index) => (
              <PDFPreview 
                key={pdf.id || index}
                url={pdf.url_gambar}
                title={`${project.judul} - Document ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Render image carousel jika ada images */}
        {imageFiles.length > 0 && (
          <MediaCarousel 
            media={imageFiles.map(img => ({
              ...img,
              url_gambar: img.url_gambar,
              thumbnail_url: img.is_external ? 
                ExternalUrlHandler.googleDrive.getPreviewUrl(
                  ExternalUrlHandler.googleDrive.extractFileId(img.url_gambar),
                  'thumbnail'
                )[0] : 
                img.url_gambar
            }))}
            onImageClick={handleImageClick}
          />
        )}
      </div>
    );
  };

  return createPortal(
    <div 
      className="modal-overlay fixed inset-0 bg-black/50 
                 flex items-center justify-center p-4 touch-manipulation"
      style={{ zIndex: 'var(--z-modal)' }}
      onClick={handleOverlayClick}
      {...(isMobile ? swipeHandlers : {})}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        className="modal-content bg-white rounded-lg w-full max-w-4xl 
                   max-h-[90vh] overflow-y-auto relative overscroll-contain 
                   touch-pan-y"
        onClick={handleModalClick}
        style={{ 
          WebkitOverflowScrolling: 'touch',
          msOverflowStyle: '-ms-autohiding-scrollbar'
        }}
      >
        <div className="absolute top-0 left-0 right-0 flex justify-center">
          <div className="w-12 h-1 bg-gray-300 rounded-full my-2" />
        </div>

        <div 
          className="sticky top-0 bg-white p-4 border-b flex justify-between items-center" 
          style={{ zIndex: 10001, backgroundColor: 'white' }}
        >
          <h2 className="text-2xl font-bold">{project.judul}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="p-4">
          {renderContent()}
          
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
            <div className="mt-6 flex justify-end">
              <a
                href={project.tautan}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1 text-sm rounded-full text-blue-500 border border-blue-500 bg-white hover:bg-blue-50 transition-colors duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  if (window.innerWidth <= 768) {
                    e.preventDefault();
                    window.open(project.tautan, '_blank', 'noopener,noreferrer');
                  }
                }}
              >
                <AiOutlineGlobal className="w-4 h-4" />
                Live Demo
              </a>
            </div>
          )}
        </div>
      </div>

      {shouldShowLightbox && (
        <>
          <ImageLightbox 
            url={selectedImage.displayUrl}
            onClose={handleCloseImage}
          />
        </>
      )}
    </div>,
    document.body
  )
}

export default PortofolioDetail 