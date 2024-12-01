import { useState } from 'react';

const GoogleDriveImage = ({ fileId, className, alt }) => {
  const [error, setError] = useState(false);
  
  // Gunakan URL yang sudah di-proxy
  const imageUrl = error 
    ? `https://drive.google.com/uc?export=view&id=${fileId}`
    : `/gdrive/uc?export=view&id=${fileId}`;

  return (
    <img
      src={imageUrl}
      alt={alt || 'Drive Image'}
      className={className}
      loading="lazy"
      onError={() => {
        if (!error) {
          setError(true);
        }
      }}
    />
  );
};

export default GoogleDriveImage; 