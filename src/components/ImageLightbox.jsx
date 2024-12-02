import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import ExternalUrlHandler from '../utils/ExternalUrlHandler'

function ImageLightbox({ url, onClose }) {
  if (!url) {
    console.error('ImageLightbox: URL prop is required')
    return null
  }

  if (!onClose) {
    console.error('ImageLightbox: onClose prop is required')
    return null
  }

  const [imageUrl, setImageUrl] = useState(url)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [touchStartY, setTouchStartY] = useState(null)

  useEffect(() => {
    if (url !== imageUrl) {
      setImageUrl(url)
      setError(false)
      setIsLoading(true)
    }
  }, [url, imageUrl])

  useEffect(() => {
    const handleTouchMove = (e) => {
      console.log('Touch move');
      e.preventDefault();
    };

    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const handleImageError = () => {
    console.error('Image failed to load:', imageUrl);
    if (!error) {
      setError(true)
      if (ExternalUrlHandler.googleDrive.isGoogleDriveUrl(imageUrl)) {
        const fileId = ExternalUrlHandler.googleDrive.extractFileId(imageUrl)
        if (fileId) {
          const fallbackUrl = `https://drive.google.com/uc?export=view&id=${fileId}`
          setImageUrl(fallbackUrl)
          console.log('Fallback URL set:', fallbackUrl)
        }
      }
    }
  }

  const handleImageLoad = () => {
    console.log('Image loaded successfully:', imageUrl);
    setIsLoading(false)
  }

  const handleTouchStart = (e) => {
    console.log('Touch start');
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    console.log('Touch end');
    setTouchStartY(null);
  };

  return createPortal(
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      <div 
        className="relative z-[10000] w-full h-full flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-4 right-4 z-[10001] bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
          aria-label="Tutup"
        >
          ✕
        </button>

        <TransformWrapper
          initialScale={1}
          minScale={0.5}
          maxScale={4}
          centerOnInit={true}
          wheel={{ step: 0.1 }}
          doubleClick={{ mode: "reset" }}
          onPanning={({ disabled }) => {
            console.log('Panning:', disabled);
          }}
        >
          <TransformComponent
            wrapperClass="w-full h-full"
            contentClass="w-full h-full flex items-center justify-center"
          >
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"/>
              </div>
            )}
            <img 
              src={imageUrl}
              alt="Preview"
              className="max-w-full max-h-[90vh] object-contain select-none"
              onError={handleImageError}
              onLoad={handleImageLoad}
              style={{
                touchAction: 'none',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                opacity: isLoading ? 0 : 1,
                transition: 'opacity 0.3s'
              }}
            />
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>,
    document.body
  )
}

export default ImageLightbox 