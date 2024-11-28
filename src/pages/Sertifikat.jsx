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
        console.error('Error:', error)
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

  // Fungsi untuk membuka modal
  const openModal = (cert) => {
    setSelectedSertifikat(cert)
    setIsModalOpen(true)
  }

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setSelectedSertifikat(null)
    setIsModalOpen(false)
  }

  if (loading) return <LoadingSpinner />
  if (error) return <div>Error: {error}</div>

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 mb-8 mt-16 w-[1280px]">
        <div className="w-full">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center w-full">
            {types.map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedType === type 
                    ? type.toLowerCase() === 'online'
                      ? 'bg-blue-500 text-white'
                      : type.toLowerCase() === 'offline'
                        ? 'bg-purple-500 text-white'
                        : 'bg-gray-500 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {type === 'all' ? 'Semua' : type}
              </button>
            ))}
          </div>

          {/* Sertifikat Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {getCurrentItems().map(cert => (
              <div 
                key={cert.id} 
                className="sertifikat-card h-[280px] cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => openModal(cert)}
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                      {cert.judul}
                    </h3>
                    {cert.tipe && (
                      <span className={`px-3 py-1 text-sm rounded-full ${getStatusClass(cert.tipe)} shrink-0`}>
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
      </section>

      {/* Modal Detail Sertifikat */}
      {isModalOpen && selectedSertifikat && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header Modal */}
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedSertifikat.judul}
                </h2>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Badge Status */}
              {selectedSertifikat.tipe && (
                <span className={`inline-block px-3 py-1 text-sm rounded-full mb-4 ${getStatusClass(selectedSertifikat.tipe)}`}>
                  {selectedSertifikat.tipe}
                </span>
              )}

              {/* Konten Detail */}
              <div className="space-y-4">
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

                <div>
                  <h3 className="text-lg font-semibold text-gray-700">Periode Terbit</h3>
                  <p className="text-gray-600">
                    {new Date(selectedSertifikat.periode_terbit).toLocaleDateString('id-ID', {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </p>
                </div>

                {/* Tombol Lihat Sertifikat */}
                {selectedSertifikat.url && (
                  <div className="mt-6">
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
        </div>
      )}
    </>
  )
}

export default Sertifikat 