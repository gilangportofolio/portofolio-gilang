import { useEffect } from 'react'

function Pagination({ currentPage, totalCount, pageSize, onPageChange }) {
  const totalPages = Math.ceil(totalCount / pageSize)

  const handlePageChange = (pageNumber) => {
    const projectsContainer = document.querySelector('.grid')
    
    // Fade out
    projectsContainer.style.opacity = '0'
    projectsContainer.style.transition = 'opacity 0.3s ease'
    
    setTimeout(() => {
      onPageChange(pageNumber)
      
      // Scroll ke bagian atas container portofolio
      const portofolioContainer = document.querySelector('.container')
      if (portofolioContainer) {
        portofolioContainer.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      
      // Fade in
      setTimeout(() => {
        projectsContainer.style.opacity = '1'
      }, 300)
    }, 300)
  }

  if (totalPages <= 1) return null

  return (
    <div className="flex justify-center gap-2 mt-8">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
        <button
          key={pageNumber}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
            currentPage === pageNumber
              ? 'bg-emerald-500 text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  )
}

export default Pagination 