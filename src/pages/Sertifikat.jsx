import { useState, useEffect } from 'react'
import supabase from '../config/supabaseClient'
import LoadingSpinner from '../components/LoadingSpinner'

const Sertifikat = () => {
  const [sertifikats, setSertifikats] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedType, setSelectedType] = useState('all')

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

  if (loading) return <LoadingSpinner />
  if (error) return <div>Error: {error}</div>

  return (
    <section className=" max-w-7xl mx-auto px-4 mb-8 mt-16 ">
      <div className="max-w-6xl mx-auto">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {types.map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`filter-button ${
                selectedType === type ? 'active' : ''
              }`}
            >
              {type === 'all' ? 'Semua' : type}
            </button>
          ))}
        </div>

        {/* Sertifikat Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSertifikats.map(cert => (
            <div key={cert.id} className="sertifikat-card">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {cert.judul}
                  </h3>
                  {cert.tipe && (
                    <span className="px-3 py-1 text-sm rounded-full bg-orange-100 text-orange-700">
                      {cert.tipe}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-4">{cert.penerbit}</p>
                
                {cert.keterangan && (
                  <p className="text-gray-500 text-sm mb-4">{cert.keterangan}</p>
                )}
                
                <div className="flex justify-between items-center">
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
      </div>
    </section>
  )
}

export default Sertifikat 