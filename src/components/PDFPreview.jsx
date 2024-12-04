import { AiOutlineFilePdf } from 'react-icons/ai'
import { useEffect, useState } from 'react'

const PDFPreview = ({ url, title }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState('')
  const [showFallback, setShowFallback] = useState(false)
  const [fileName, setFileName] = useState('')

  useEffect(() => {
    if (url) {
      // Ekstrak nama file dari URL
      const extractFileName = (url) => {
        try {
          // Cek apakah URL dari Google Drive
          if (url.includes('drive.google.com')) {
            const match = url.match(/\/d\/(.*?)\/|id=(.*?)(&|$)/);
            const fileId = match ? (match[1] || match[2]) : null;
            if (fileId) {
              setThumbnailUrl(`https://drive.google.com/thumbnail?id=${fileId}&sz=w400`);
              return 'Google Drive Document';
            }
          }

          // Untuk URL Supabase atau URL biasa
          const fullFileName = decodeURIComponent(url.split('/').pop());
          return fullFileName
            .replace(/^\d+-/, '')  // Hapus timestamp
            .replace(/-/g, ' ')    // Ganti dash dengan spasi
            .replace('.pdf', '')   // Hapus ekstensi
            .toLowerCase()         // Lowercase
            .split(' ')           // Split ke array
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Kapitalisasi
            .join(' ');
        } catch (error) {
          console.error('Error extracting filename:', error);
          return 'Document';
        }
      };

      setFileName(extractFileName(url));
      
      // Set thumbnail untuk Supabase URL jika diperlukan
      if (!url.includes('drive.google.com')) {
        const fileId = url.match(/[-\w]{25,}(?!.*[-\w]{25,})/)?.[0]
        if (fileId) {
          setThumbnailUrl(`https://drive.google.com/thumbnail?id=${fileId}&sz=w400`)
        }
      }
    }
  }, [url])

  return (
    <div className="pdf-preview p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
          {!showFallback && thumbnailUrl ? (
            <img 
              src={thumbnailUrl} 
              alt={fileName}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={() => setShowFallback(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <AiOutlineFilePdf className="w-12 h-12 text-red-500" />
            </div>
          )}
        </div>

        <div className="flex-1">
          <h3 className="font-medium text-gray-900 line-clamp-2">{fileName}</h3>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 px-3 py-1 text-sm rounded-full text-blue-500 border border-blue-500 bg-white hover:bg-blue-50 transition-colors duration-300"
          >
            <AiOutlineFilePdf className="w-4 h-4" />
            Lihat PDF
          </a>
        </div>
      </div>
    </div>
  )
}

export default PDFPreview 