import { AnimatePresence } from 'framer-motion';
import LoadingSpinner from '../../components/LoadingSpinner';
import PortofolioCard from './PortofolioCard';
import usePortofolio from './usePortofolio';
import './Portofolio.css';

const Portofolio = () => {
  const {
    paginatedPortofolios,
    activeFilter,
    isLoading,
    currentPage,
    setCurrentPage,
    handleFilterChange,
    totalPages
  } = usePortofolio();

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
    <div className="wadah-portofolio">
      <div className="kepala-portofolio">
        <h1>Portofolio</h1>
        <p className="deskripsi-portofolio">
          Kumpulan proyek dan karya yang telah saya kerjakan dalam berbagai bidang teknologi dan desain.
        </p>
      </div>

      <div className="bagian-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={`tombol-filter ${activeFilter === category ? 'aktif' : ''}`}
            onClick={() => handleFilterChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid-portofolio">
        <AnimatePresence>
          {paginatedPortofolios.length > 0 ? (
            paginatedPortofolios.map((item) => (
              <PortofolioCard key={item.id} item={item} />
            ))
          ) : (
            <div className="pesan-kosong">
              Tidak ada portofolio untuk kategori ini.
            </div>
          )}
        </AnimatePresence>
      </div>

      {paginatedPortofolios.length > 0 && (
        <div className="wadah-halaman">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="tombol-halaman"
          >
            Sebelumnya
          </button>
          
          <span className="info-halaman">Halaman {currentPage} dari {totalPages}</span>
          
          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="tombol-halaman"
          >
            Selanjutnya
          </button>
        </div>
      )}
    </div>
  );
};

export default Portofolio; 