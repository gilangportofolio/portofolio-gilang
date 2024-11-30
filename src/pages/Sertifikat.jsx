import React, { useState, useEffect, Fragment } from 'react'
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

  // Helper functions untuk mendeteksi dan memformat link
  const formatKeterangan = (text) => {
    if (!text) return '';
    
    // Mendeteksi link dalam teks dan ganti dengan [lihat disini]
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, '[lihat disini]');
  };

  const extractLink = (text) => {
    if (!text) return '';
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const matches = text.match(urlRegex);
    return matches ? matches[0] : '';
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isModalOpen]);

  if (loading) return <LoadingSpinner />
  if (error) return <div>Error: {error}</div>

  return (
    <div className="sertifikat-container min-h-screen px-4 py-8 md:pt-32 pt-24 bg-gradient-to-br from-orange-50 to-white relative">
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-400/20 rounded-xl rotate-12"></div>
      <div className="absolute top-40 -left-10 w-72 h-72 bg-orange-400/20 rounded-xl -rotate-12"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-400/20 rounded-xl rotate-45"></div>

      <div className="mx-auto max-w-7xl relative">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
          Sertifikat
        </h1>

        {/* Filter Buttons */}
        <div className="filter-container sticky top-[80px] flex flex-wrap justify-center gap-2 mb-8">
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
              className="sertifikat-card bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-4 md:p-6 h-full flex flex-col">
                {/* Header dengan judul dan tipe */}
                <div className="flex items-start gap-3 mb-4">
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 flex-1 line-clamp-2">
                    {cert.judul}
                  </h3>
                  {cert.tipe && (
                    <span className={`px-2 md:px-3 py-1 text-sm rounded-full ${getStatusClass(cert.tipe)} shrink-0 mt-1`}>
                      {cert.tipe}
                    </span>
                  )}
                </div>
                
                {/* Penerbit dan tanggal */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                  <p className="text-gray-600">{cert.penerbit}</p>
                  <span className="text-sm text-gray-500 sm:before:content-['•'] sm:before:mx-2 sm:before:text-gray-400">
                    {new Date(cert.periode_terbit).toLocaleDateString('id-ID', {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </span>
                </div>
                
                {/* Keterangan */}
                {cert.keterangan && (
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{cert.keterangan}</p>
                )}
                
                {/* Tombol aksi */}
                <div className="flex justify-end items-center mt-auto gap-3">
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm rounded-md bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors duration-300"
                    >
                      Lihat Sertifikat
                    </a>
                  )}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      openModal(cert);
                    }}
                    className="px-4 py-2 text-sm rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-300"
                  >
                    Detail
                  </button>
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
          className="modal-overlay fixed inset-0 bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 flex justify-center">
              <div className="w-12 h-1 bg-gray-300 rounded-full my-2" />
            </div>

            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h2 className="text-2xl font-bold">{selectedSertifikat.judul}</h2>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="p-4">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Periode Terbit</h3>
                  <p className="text-gray-600">
                    {new Date(selectedSertifikat.periode_terbit).toLocaleDateString('id-ID', {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Penerbit</h3>
                  <p className="text-gray-600">{selectedSertifikat.penerbit}</p>
                </div>

                {selectedSertifikat.keterangan && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Keterangan</h3>
                    <p className="text-gray-600">
                      {selectedSertifikat.keterangan.includes('https://') ? (
                        <>
                          {selectedSertifikat.keterangan.replace(/(https?:\/\/[^\s]+)/g, '')}
                          <a
                            href={selectedSertifikat.keterangan.match(/(https?:\/\/[^\s]+)/g)?.[0]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer ml-1"
                            onClick={(e) => e.stopPropagation()}
                          >
                            [lihat disini]
                          </a>
                        </>
                      ) : (
                        selectedSertifikat.keterangan
                      )}
                    </p>
                  </div>
                )}

                {/* Tombol Lihat Sertifikat */}
                {selectedSertifikat.url && (
                  <div className="mt-6">
                    <a 
                      href={selectedSertifikat.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-2 rounded-md transition-colors duration-200 gap-2 bg-orange-500 hover:bg-orange-600 text-white"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z" />
                      </svg>
                      Lihat Sertifikat
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Sertifikat 