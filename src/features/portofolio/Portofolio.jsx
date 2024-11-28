import { AnimatePresence } from 'framer-motion';
import LoadingSpinner from '../../components/LoadingSpinner';
import PortofolioCard from './PortofolioCard';
import usePortofolio from './usePortofolio';
import './Portofolio.css';
import { getCategoryColor } from './usePortofolio';

const Portofolio = () => {
  const {
    paginatedPortofolios,
    activeFilter,
    isLoading,
    currentPage,
    setCurrentPage,
    handleFilterChange,
    totalPages,
    filteredPortofolios
  } = usePortofolio();

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const categories = [
    'Semua',
    'UI/UX',
    'Design Visual',
    'Website',
    'System Analyst',
    'Bisnis Analyst',
    'Dokumentasi',
    'Projek Lain'
  ];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="relative min-h-screen">
    <div className="fixed top-40 right-10 w-[300px] h-[300px] bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full opacity-50 -z-50 translate-x-1/2 -translate-y-1/2"></div>
    <div className="fixed bottom-0 left-20 w-[300px] h-[300px] bg-gradient-to-tr from-yellow-300 to-orange-300 rounded-full opacity-50 -z-50 -translate-x-1/2 translate-y-1/2"></div>
    
    <div className="wadah-portofolio">
      <div className="kepala-portofolio">
        <h1>Portofolio</h1>
        <p className="deskripsi-portofolio">
          Kumpulan proyek dan karya yang telah saya kerjakan dalam berbagai bidang teknologi dan desain.
        </p>
      </div>

      <div className="bagian-filter">
        {categories.map((category) => {
          const categoryColor = getCategoryColor(category);
          return (
            <button
              key={category}
              className={`tombol-filter ${activeFilter === category ? 'aktif' : ''}`}
              style={
                activeFilter === category 
                  ? { 
                      '--category-bg': categoryColor.bg,
                      '--category-text': categoryColor.text 
                    } 
                  : {}
              }
              onClick={() => handleFilterChange(category)}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid-portofolio">
        <AnimatePresence mode="wait">
          {paginatedPortofolios.length > 0 ? (
            paginatedPortofolios.map((item) => (
              <PortofolioCard 
                key={`${item.id}-${currentPage}`} 
                item={item} 
              />
            ))
          ) : (
            <div className="pesan-kosong">
              Tidak ada portofolio untuk kategori ini.
            </div>
          )}
        </AnimatePresence>
      </div>

      {filteredPortofolios.length > 0 && totalPages > 1 && (
        <div className="wadah-pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`tombol-pagination ${currentPage === page ? 'aktif' : ''}`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default Portofolio; 