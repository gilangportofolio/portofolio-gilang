import { useState, useEffect } from 'react'
import supabase from '../config/supabaseClient'
import LoadingSpinner from '../components/LoadingSpinner'

const Sertifikat = () => {
  const [sertifikats, setSertifikats] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedType, setSelectedType] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9 // Maksimal 9 item per halaman
  const [selectedSertifikat, setSelectedSertifikat] = useState(null) // State baru untuk modal
  const [isModalOpen, setIsModalOpen] = useState(false) // State untuk mengontrol modal
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Sederhanakan handler
  const openModal = (cert) => {
    setSelectedSertifikat(cert);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSertifikat(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const fetchSertifikats = async () => {
      try {
        const { data, error } = await supabase
          .from('sertifikat')
          .select('*')
          .order('periode_terbit', { ascending: false })

        if (error) throw error
        setSertifikats(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchSertifikats()
  }, [])

  // Mendapatkan unique types untuk filter dan menghilangkan nilai null
  const types = ['all', ...new Set(sertifikats.filter(cert => cert.tipe).map(cert => cert.tipe))]

  // Filter sertifikat berdasarkan tipe
  const filteredSertifikats = selectedType === 'all' 
    ? sertifikats 
    : sertifikats.filter(cert => cert.tipe === selectedType)

  // Hitung total halaman
  const totalPages = Math.ceil(filteredSertifikats.length / itemsPerPage)

  // Get current items
  const getCurrentItems = () => {
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    return filteredSertifikats.slice(indexOfFirstItem, indexOfLastItem)
  }

  // Tambahkan fungsi untuk mendapatkan class status
  const getStatusClass = (type) => {
    switch(type?.toLowerCase()) {
      case 'online':
        return 'bg-blue-100 text-blue-800';
      case 'offline':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  // Fungsi untuk menangani touch events
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = (cert) => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (!isLeftSwipe && !isRightSwipe) {
      openModal(cert);
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  if (loading) return <LoadingSpinner />
  if (error) return <div>Error: {error}</div>

  return (
    <div className="sertifikat-container min-h-screen px-4 py-8 md:pt-32 pt-24 bg-gradient-to-br from-orange-50 to-white relative">
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-400/20 rounded-xl rotate-12"></div>
      <div className="absolute top-40 -left-10 w-72 h-72 bg-orange-400/20 rounded-xl -rotate-12"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-400/20 rounded-xl rotate-45"></div>

      <div className="mx-auto max-w-7xl relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
          Sertifikat
        </h1>

        {/* Filter Buttons */}
        <div className="filter-container sticky top-[80px] z-10 flex flex-wrap justify-center gap-2 mb-8">
          {types.map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium 
                transition-all duration-300 
                ${selectedType === type 
                  ? type.toLowerCase() === 'online'
                    ? 'bg-blue-500 text-white'
                    : type.toLowerCase() === 'offline'
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
                }
              `}
            >
              {type === 'all' ? 'Semua' : type}
            </button>
          ))}
        </div>

        {/* Sertifikat Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {getCurrentItems().map(cert => (
            <div 
              key={cert.id} 
              role="button"
              tabIndex={0}
              className="sertifikat-card bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => {
                openModal(cert);
              }}
            >
              <div className="p-4 md:p-6 h-full flex flex-col">
                <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                    {cert.judul}
                  </h3>
                  {cert.tipe && (
                    <span className={`px-2 md:px-3 py-1 text-sm rounded-full ${getStatusClass(cert.tipe)} shrink-0`}>
                      {cert.tipe}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-1">{cert.penerbit}</p>
                
                {cert.keterangan && (
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{cert.keterangan}</p>
                )}
                
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-sm text-gray-500">
                    {new Date(cert.periode_terbit).toLocaleDateString('id-ID', {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </span>
                  
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:text-orange-600 transition-colors duration-300"
                    >
                      Lihat Sertifikat →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  currentPage === page
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && selectedSertifikat && (
        <div 
          className="modal-overlay"
          onClick={closeModal}
        >
          <div 
            className="sertifikat-modal-content max-h-fit"
            onClick={e => e.stopPropagation()}
          >
            {/* Judul dan info utama */}
            <div className="px-4 py-3 border-b">
              <h2 className="text-xl font-bold mb-3">{selectedSertifikat.judul}</h2>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-semibold text-gray-700">Periode Terbit</h3>
                  <p className="text-gray-600">
                    {new Date(selectedSertifikat.periode_terbit).toLocaleDateString('id-ID', {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </p>
                </div>
                {selectedSertifikat.tipe && (
                  <span className={`inline-block px-3 py-1 text-sm rounded-full ${getStatusClass(selectedSertifikat.tipe)}`}>
                    {selectedSertifikat.tipe}
                  </span>
                )}
              </div>
            </div>

            {/* Konten utama */}
            <div className="p-4 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Penerbit</h3>
                <p className="text-gray-600">{selectedSertifikat.penerbit}</p>
              </div>

              {selectedSertifikat.keterangan && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Keterangan</h3>
                  <p className="text-gray-600 whitespace-pre-line">
                    {selectedSertifikat.keterangan}
                  </p>
                </div>
              )}

              {/* Tombol di bawah */}
              {selectedSertifikat.url && (
                <div className="flex justify-end pt-4 border-t mt-6">
                  <a
                    href={selectedSertifikat.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300"
                  >
                    Lihat Sertifikat
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Sertifikat 