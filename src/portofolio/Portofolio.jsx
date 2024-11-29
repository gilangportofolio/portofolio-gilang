import { useState, useEffect, useMemo } from 'react'
import supabase from '../config/supabaseClient'
import LoadingSpinner from '../components/LoadingSpinner'
import PortofolioDetail from './PortofolioDetail'
import Pagination from '../components/Pagination'
import { useFilter } from '../hooks/useFilter'
import { usePageTransition } from '../hooks/usePagination'

function Portofolio() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  const { 
    activeFilter, 
    setActiveFilter, 
    filteredItems: filteredProjects, 
    getCategoryStyle, 
    categories,
    isTransitioning: isFilterTransitioning 
  } = useFilter(projects)
  
  const { 
    currentPage, 
    setCurrentPage, 
    currentItems: currentProjects, 
    isTransitioning: isPageTransitioning,
    pageSize 
  } = usePageTransition(filteredProjects)

  const isTransitioning = isFilterTransitioning || isPageTransitioning

  useEffect(() => {
    fetchPortofolio()
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  async function fetchPortofolio() {
    try {
      setLoading(true)
      setError(null)
      
      const { data: portofolios, error: portofolioError } = await supabase
        .from('portofolios')
        .select(`
          *,
          images (
            id,
            url_gambar,
            tipe
          )
        `)
        .order('waktu_publish', { ascending: false })

      if (portofolioError) throw portofolioError

      setProjects(portofolios)
    } catch (error) {
      console.error('Error:', error)
      setError('Terjadi kesalahan saat mengambil data portofolio')
    } finally {
      setLoading(false)
    }
  }

  const handleDetailClick = (project, e) => {
    if (e) e.stopPropagation()
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }

  const handleCloseDetail = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'unset'
  }

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientY)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientY)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      handleCloseDetail()
    }
    setTouchStart(0)
    setTouchEnd(0)
  }

  const touchHandlers = isMobile ? {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd
  } : {}

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        {error}
        <button 
          onClick={fetchPortofolio}
          className="block mx-auto mt-4 px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600"
        >
          Coba Lagi
        </button>
      </div>
    )
  }

  return (
    <div className="px-4 py-8 md:pt-32 pt-24 mx-auto max-w-7xl">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Portofolio</h1>
      <p className="text-center text-gray-600 mb-8 text-sm md:text-base px-2">
        Kumpulan proyek dan karya yang telah saya kerjakan dalam berbagai bidang teknologi dan desain.
      </p>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-6 md:mb-8 px-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className="px-3 py-1.5 md:px-4 md:py-2 rounded-full transition-colors duration-200 text-sm md:text-base"
            style={getCategoryStyle(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <p className="text-center text-gray-500 text-sm md:text-base">
          Tidak ada proyek yang ditemukan untuk kategori ini.
        </p>
      ) : (
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}>
          {currentProjects.map(project => {
            const thumbnail = project.images?.find(img => img.tipe === 'thumbnail')

            return (
              <div 
                key={project.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col min-h-[400px] md:min-h-[500px]"
              >
                {/* Image Section */}
                <div 
                  className="relative h-40 md:h-48 cursor-pointer bg-gray-100 
                             active:opacity-75 touch-manipulation min-h-[44px]"
                  onClick={(e) => handleDetailClick(project, e)}
                  onTouchEnd={(e) => {
                    e.preventDefault()
                    handleDetailClick(project, e)
                  }}
                  role="button"
                  tabIndex={0}
                >
                  {thumbnail ? (
                    <img 
                      src={thumbnail.url_gambar} 
                      alt={project.judul}
                      className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-200"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <span className="text-4xl">🖼️</span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-3 md:p-4 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold min-h-[48px] md:min-h-[56px] line-clamp-2">
                      {project.judul}
                    </h3>
                    <p className="text-gray-600 mb-3 md:mb-4 line-clamp-3 text-sm md:text-base min-h-[60px] md:min-h-[72px]">
                      {project.deskripsi || "Tidak ada deskripsi"}
                    </p>
                    
                    {/* Tools Section */}
                    <div className="mb-3 md:mb-4 min-h-[70px] md:min-h-[80px]">
                      <p className="font-medium mb-1.5 md:mb-2 text-sm md:text-base">Tools yang digunakan:</p>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {project.tools?.length > 0 ? (
                          <>
                            {project.tools.slice(0, 6).map((tool, index) => (
                              <span 
                                key={index}
                                className="bg-gray-100 px-2 py-1 rounded-md text-sm text-gray-600"
                              >
                                {tool}
                              </span>
                            ))}
                            {project.tools.length > 6 && (
                              <button 
                                className="bg-gray-100 px-2 py-1 rounded-md text-sm text-emerald-500 hover:bg-gray-200"
                                onClick={() => handleDetailClick(project)}
                              >
                                +{project.tools.length - 6} lainnya
                              </button>
                            )}
                          </>
                        ) : (
                          <span className="text-gray-400">Tidak ada tools yang digunakan</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Buttons Section */}
                  <div className="grid grid-cols-2 gap-2 mt-auto">
                    {project.tautan ? (
                      <>
                        <a 
                          href={project.tautan}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 md:px-4 md:py-2 text-center 
                                     border border-emerald-500 text-emerald-500 rounded-md 
                                     hover:bg-emerald-50 active:bg-emerald-100
                                     transition-colors duration-200 text-sm md:text-base 
                                     touch-manipulation min-h-[44px]"
                          onClick={(e) => e.stopPropagation()}
                          onTouchEnd={(e) => e.stopPropagation()}
                        >
                          <span className="mr-1 md:mr-2">🌐</span>
                          Website
                        </a>
                        <button 
                          className="px-3 py-1.5 md:px-4 md:py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors duration-200 text-sm md:text-base"
                          onClick={() => handleDetailClick(project)}
                        >
                          Detail
                        </button>
                      </>
                    ) : (
                      <button 
                        className="col-span-2 px-3 py-1.5 md:px-4 md:py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors duration-200 text-sm md:text-base"
                        onClick={() => handleDetailClick(project)}
                      >
                        Detail
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Pagination */}
      <Pagination 
        currentPage={currentPage}
        totalCount={filteredProjects.length}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
      />

      {/* Modal Detail */}
      {selectedProject && (
        <PortofolioDetail 
          project={selectedProject} 
          onClose={handleCloseDetail} 
        />
      )}
    </div>
  )
}

export default Portofolio 