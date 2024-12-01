import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import ExternalUrlHandler from '../utils/ExternalUrlHandler'

function ImageLightbox({ url, onClose }) {
  const [imageUrl, setImageUrl] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (ExternalUrlHandler.googleDrive.isGoogleDriveUrl(url)) {
      const fileId = ExternalUrlHandler.googleDrive.extractFileId(url)
      if (fileId) {
        setImageUrl(ExternalUrlHandler.googleDrive.getPreviewUrl(fileId, 'view'))
      } else {
        setImageUrl(url)
      }
    } else {
      setImageUrl(url)
    }
  }, [url])

  return createPortal(
    <>
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999]"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-[10000] overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
          >
            ✕
          </button>
          
          <div className="w-full h-full flex items-center justify-center p-4">
            <TransformWrapper
              initialScale={1}
              minScale={0.5}
              maxScale={5}
              centerOnInit={true}
            >
              <TransformComponent>
                <img 
                  src={imageUrl}
                  alt="Preview"
                  className="max-w-full max-h-[90vh] object-contain select-none"
                  onError={(e) => {
                    if (!error) {
                      setError(true)
                      const fileId = ExternalUrlHandler.googleDrive.extractFileId(url)
                      if (fileId) {
                        e.target.src = ExternalUrlHandler.googleDrive.getPreviewUrl(fileId, 'preview')
                      }
                    }
                  }}
                  style={{
                    touchAction: 'none',
                    userSelect: 'none',
                    WebkitUserSelect: 'none'
                  }}
                />
              </TransformComponent>
            </TransformWrapper>
          </div>
        </div>
      </div>
    </>,
    document.body
  )
}

export default ImageLightbox 