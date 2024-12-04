
import { useTheme } from './ThemeSwitcher'

function Pagination({ currentPage, totalCount, pageSize, onPageChange }) {
  const { currentTheme } = useTheme()
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
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200`}
          style={{ 
            background: currentPage === pageNumber 
              ? `var(--gradient-${currentTheme === 'default' ? 'primary' : currentTheme})`
              : 'rgb(243 244 246)',
            color: currentPage === pageNumber ? 'white' : 'rgb(31 41 55)',
          }}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  )
}

export default Pagination 