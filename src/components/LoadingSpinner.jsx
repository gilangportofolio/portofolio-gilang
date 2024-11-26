const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-lg flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-700">Memuat data...</p>
      </div>
    </div>
  )
}

export default LoadingSpinner 