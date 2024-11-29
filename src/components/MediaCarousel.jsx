import { useState } from 'react'
import { FaFilePdf } from 'react-icons/fa'
import ImageLightbox from './ImageLightbox'

function MediaCarousel({ media }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showLightbox, setShowLightbox] = useState(false)

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === media.length - 1 ? 0 : prevIndex + 1
    )
  }

  const isPDF = (url) => url.toLowerCase().endsWith('.pdf')

  if (!media?.length) return null

  return (
    <div 
      className="relative mb-6 touch-pan-y" 
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      {/* Main Display */}
      <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
        {isPDF(media[currentIndex].url) ? (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <FaFilePdf className="text-6xl text-red-500 mb-2" />
            <a 
              href={media[currentIndex].url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors"
            >
              Lihat PDF
            </a>
          </div>
        ) : (
          <img
            src={media[currentIndex].url}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-contain cursor-zoom-in"
            onClick={() => setShowLightbox(true)}
          />
        )}
        
        {media.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              →
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {media.length > 1 && (
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {media.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                currentIndex === index ? 'border-emerald-500' : 'border-transparent'
              }`}
            >
              {isPDF(item.url) ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <FaFilePdf className="text-2xl text-red-500" />
                </div>
              ) : (
                <img
                  src={item.url}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {showLightbox && !isPDF(media[currentIndex].url) && (
        <ImageLightbox 
          url={media[currentIndex].url}
          onClose={() => setShowLightbox(false)}
        />
      )}
    </div>
  )
}

export default MediaCarousel 