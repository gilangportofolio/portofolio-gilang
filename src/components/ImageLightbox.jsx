import { useState, useEffect } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import ExternalUrlHandler from '../utils/ExternalUrlHandler'

function ImageLightbox({ url, onClose }) {
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    const header = document.querySelector('header')
    if (header) {
      header.style.display = 'none'
    }

    return () => {
      if (header) {
        header.style.display = ''
      }
    }
  }, [])

  const getImageUrl = (url) => {
    // Gunakan ExternalUrlHandler dengan ukuran yang lebih besar untuk lightbox
    return ExternalUrlHandler.getPreviewUrl(url, { size: 'w2000' });
  };

  const finalUrl = getImageUrl(url);

  const handleWheel = (e) => {
    e.preventDefault()
    const delta = e.deltaY * -0.01
    const newScale = Math.max(1, Math.min(4, scale + delta))
    setScale(newScale)
  }

  const handleMouseDown = (e) => {
    if (e.button !== 0) return // Hanya handle klik kiri
    e.preventDefault()
    setIsDragging(true)
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    })
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    
    const newX = e.clientX - dragStart.x
    const newY = e.clientY - dragStart.y
    
    setPosition({
      x: newX,
      y: newY
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleDoubleClick = () => {
    if (scale > 1) {
      setScale(1)
      setPosition({ x: 0, y: 0 })
    } else {
      setScale(2)
    }
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-[9999] flex items-center justify-center"
      onClick={onClose}
    >
      <button 
        className="absolute top-4 right-4 text-white p-4 hover:bg-white/10 rounded-full z-[9999]"
        onClick={onClose}
        style={{ 
          minWidth: '44px',  // Untuk accessibility
          minHeight: '44px'  // Untuk accessibility
        }}
      >
        <span className="text-2xl">✕</span>
      </button>

      <div 
        className="relative w-full h-full flex items-center justify-center overflow-hidden"
        onWheel={handleWheel}
      >
        <img
          src={url}
          alt="Lightbox"
          className="max-w-full max-h-full select-none"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            cursor: isDragging ? 'grabbing' : 'grab',
            transition: isDragging ? 'none' : 'transform 0.2s'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onDoubleClick={handleDoubleClick}
          onClick={(e) => e.stopPropagation()}
          draggable="false"
        />
      </div>

      {scale > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
          {Math.round(scale * 100)}%
        </div>
      )}

      {imageError ? (
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <p className="text-xl mb-2">Gambar tidak dapat diakses</p>
            <p className="text-sm opacity-75">
              Pastikan file telah diatur sebagai "Anyone with the link can view"
            </p>
          </div>
        </div>
      ) : (
        <TransformWrapper
          initialScale={1}
          minScale={0.5}
          maxScale={5}
          scale={scale}
          onZoomChange={(ref) => setScale(ref.state.scale)}
          centerOnInit={true}
          centerZoomedOut={true}
          limitToBounds={false}
          doubleClick={{ disabled: true }}
          panning={{ velocityDisabled: true }}
        >
          <TransformComponent
            wrapperStyle={{
              width: 'auto',
              height: 'auto',
              overflow: 'visible'
            }}
          >
            <img 
              src={finalUrl} 
              alt="Preview"
              style={{
                maxWidth: 'none',
                width: 'auto',
                height: 'auto',
                maxHeight: '90vh',
                objectFit: 'contain',
                touchAction: 'none'
              }}
              onError={(e) => {
                console.error('Error loading lightbox image:', {
                  originalUrl: url,
                  convertedUrl: finalUrl
                });
                setImageError(true);
              }}
            />
          </TransformComponent>
        </TransformWrapper>
      )}
    </div>
  )
}

export default ImageLightbox 