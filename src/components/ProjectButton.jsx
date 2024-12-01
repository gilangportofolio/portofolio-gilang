function ProjectButton({ onClick, type, href, children }) {
  // Handler untuk link eksternal
  const handleExternalClick = (e) => {
    e.stopPropagation();
    
    // Log untuk debugging
    console.log('Button clicked:', type);
    
    // Jika mobile, gunakan window.open
    if (window.innerWidth <= 768) {
      e.preventDefault();
      window.open(href, '_blank', 'noopener,noreferrer');
    }
    
    // Panggil onClick callback jika ada
    if (onClick) onClick(e);
  };

  if (type === 'website' && href) {
    // Validasi URL
    let safeHref = href;
    try {
      new URL(href); // Cek apakah URL valid
    } catch {
      console.warn('Invalid URL:', href);
      return null; // Jangan render button jika URL tidak valid
    }

    return (
      <a 
        href={safeHref}
        target="_blank"
        rel="noopener noreferrer"
        referrerPolicy="no-referrer"
        className="project-button website-button"
        onClick={handleExternalClick}
        // Tambahan atribut keamanan
        data-type="external-link"
        aria-label="Buka di tab baru"
      >
        <span className="flex items-center gap-2">
          {children}
          {/* Icon untuk indikasi link eksternal */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor" 
            className="w-4 h-4"
          >
            <path 
              fillRule="evenodd" 
              d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" 
              clipRule="evenodd" 
            />
            <path 
              fillRule="evenodd" 
              d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" 
              clipRule="evenodd" 
            />
          </svg>
        </span>
      </a>
    );
  }

  // Button untuk detail
  return (
    <button 
      className="project-button detail-button"
      onClick={(e) => {
        e.stopPropagation();
        console.log('Detail button clicked');
        if (onClick) onClick(e);
      }}
      aria-label="Lihat detail"
    >
      {children}
    </button>
  );
}

export default ProjectButton; 