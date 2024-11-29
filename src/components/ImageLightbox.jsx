import { useState } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

function ImageLightbox({ url, onClose }) {
  const [scale, setScale] = useState(1)

  return (
    <div className="fixed inset-0 bg-black z-[60] flex items-center justify-center">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10"
      >
        ✕
      </button>

      <div className="absolute top-4 left-4 flex gap-2 z-10">
        <button 
          onClick={() => setScale(prev => prev + 0.5)}
          className="bg-white/20 text-white px-3 py-1 rounded hover:bg-white/30"
        >
          +
        </button>
        <button 
          onClick={() => setScale(1)}
          className="bg-white/20 text-white px-3 py-1 rounded hover:bg-white/30"
        >
          Reset
        </button>
        <button 
          onClick={() => setScale(prev => Math.max(0.5, prev - 0.5))}
          className="bg-white/20 text-white px-3 py-1 rounded hover:bg-white/30"
        >
          -
        </button>
      </div>

      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={3}
        scale={scale}
        onZoomChange={(ref) => setScale(ref.state.scale)}
      >
        <TransformComponent>
          <img 
            src={url} 
            alt="Preview"
            className="max-h-[90vh] w-auto object-contain"
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  )
}

export default ImageLightbox 