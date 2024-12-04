const LoadingSpinner = ({ 
  fullScreen = false, 
  size = 'medium',
  text,
  transparent = false 
}) => {
  // Size variations
  const sizes = {
    small: 'w-6 h-6 border-2',
    medium: 'w-12 h-12 border-4',
    large: 'w-16 h-16 border-4'
  }

  // Container variations dengan posisi center yang konsisten
  const containerClass = fullScreen 
    ? "fixed inset-0 bg-black/30 flex items-center justify-center z-50"
    : "w-full h-full flex items-center justify-center min-h-[100px]"; // Tambahkan min-height untuk container non-fullscreen

  const spinnerWrapperClass = fullScreen 
    ? "bg-white p-5 rounded-lg flex flex-col items-center"
    : "flex flex-col items-center";

  return (
    <div className={containerClass}>
      <div className={`${transparent ? '' : spinnerWrapperClass}`}>
        <div 
          className={`
            ${sizes[size]} 
            border-blue-500 
            border-t-transparent 
            rounded-full 
            animate-spin
          `}
        />
        {text && (
          <p className="mt-4 text-gray-700 text-sm">{text}</p>
        )}
      </div>
    </div>
  )
}

export default LoadingSpinner 