import { useState } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

function ImageLightbox({ url, onClose }) {
  const [scale, setScale] = useState(1)

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 bg-black/50 text-white text-2xl hover:text-gray-300 p-2 rounded-full"
      >
        ✕
      </button>

      <div className="absolute top-4 left-4 flex gap-2">
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
            src={url} 
            alt="Preview"
            style={{
              maxWidth: 'none',
              width: 'auto',
              height: 'auto',
              maxHeight: '90vh',
              objectFit: 'contain',
              touchAction: 'none'
            }}
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  )
}

export default ImageLightbox 