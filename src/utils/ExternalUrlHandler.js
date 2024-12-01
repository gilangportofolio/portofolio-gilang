// Utility untuk menangani berbagai jenis URL external
const ExternalUrlHandler = {
  // Google Drive Handler
  googleDrive: {
    isGoogleDriveUrl: (url) => {
      return url?.includes('drive.google.com');
    },

    extractFileId: (url) => {
      if (!url) return null;
      
      // Handle different Google Drive URL formats
      let fileId = null;
      
      if (url.includes('/file/d/')) {
        fileId = url.split('/file/d/')[1]?.split('/')[0];
      } else if (url.includes('id=')) {
        fileId = url.split('id=')[1]?.split('&')[0];
      }
      
      return fileId;
    },

    getPreviewUrl: (fileId, type = 'view') => {
      if (!fileId) return '';
      
      // Gunakan format URL yang berbeda untuk menghindari masalah cookies
      switch (type) {
        case 'preview':
          return `https://lh3.googleusercontent.com/d/${fileId}`; // Format baru
        case 'view':
          return `https://lh3.googleusercontent.com/d/${fileId}`; // Format baru
        case 'thumbnail':
          return `https://lh3.googleusercontent.com/d/${fileId}=w500`; // Dengan ukuran
        default:
          return `https://lh3.googleusercontent.com/d/${fileId}`;
      }
    }
  },

  dropbox: {
    isDropboxUrl: (url) => {
      return url?.includes('dropbox.com');
    },

    getDirectUrl: (url) => {
      return url?.replace('www.dropbox.com', 'dl.dropboxusercontent.com');
    }
  },

  oneDrive: {
    // ... implementasi untuk OneDrive
  },

  getPreviewUrl: (url, options = { size: 'w500' }) => {
    if (!url) return null;

    if (ExternalUrlHandler.googleDrive.isGoogleDriveUrl(url)) {
      const fileId = ExternalUrlHandler.googleDrive.extractFileId(url);
      if (fileId) {
        return ExternalUrlHandler.googleDrive.getThumbnailUrl(fileId, options.size);
      }
    }

    return url;
  },

  isExternalUrl: (url) => {
    return ExternalUrlHandler.googleDrive.isGoogleDriveUrl(url);
  }
};

export default ExternalUrlHandler; 