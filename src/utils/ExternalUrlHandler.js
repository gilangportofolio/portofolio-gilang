// Utility untuk menangani berbagai jenis URL external
const ExternalUrlHandler = {
  // Google Drive Handler
  googleDrive: {
    isGoogleDriveUrl: (url) => {
      return url?.includes('drive.google.com');
    },

    extractFileId: (url) => {
      if (!url) return null;
      
      const patterns = [
        /\/file\/d\/([^\/\?]+)/i,
        /id=([^&]+)/i,
        /folders\/([^\/\?]+)/i,
        /open\?id=([^&]+)/i,
        /uc\?id=([^&]+)/i,
        /\/d\/([^\/\?]+)/i,
        /([^\/\?&]{25,})/i
      ];

      for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match && match[1]) return match[1];
      }
      return null;
    },

    getThumbnailUrl: (fileId, size = 'w500') => {
      if (!fileId) return null;
      return `https://drive.google.com/thumbnail?id=${fileId}&sz=${size}`;
    },

    getPreviewUrl: (url, type = 'preview') => {
      const fileId = ExternalUrlHandler.googleDrive.extractFileId(url);
      if (!fileId) return url;

      // Untuk gambar, gunakan format lh3.googleusercontent.com
      if (type === 'image' || type === 'thumbnail') {
        return `https://lh3.googleusercontent.com/d/${fileId}`;
      }

      const baseUrl = 'https://drive.google.com';
      const urls = {
        preview: `${baseUrl}/file/d/${fileId}/preview`,
        view: `${baseUrl}/file/d/${fileId}/view`,
        download: `${baseUrl}/uc?export=download&id=${fileId}`,
        thumbnail: `${baseUrl}/thumbnail?id=${fileId}`,
        image: `${baseUrl}/uc?export=view&id=${fileId}`,
        document: `${baseUrl}/file/d/${fileId}/edit?usp=sharing`,
      };
      return urls[type] || urls.preview;
    },

    detectFileType: (url, filename = '') => {
      if (filename) {
        const ext = filename.split('.').pop().toLowerCase();
        return ExternalUrlHandler.googleDrive.getTypeFromExtension(ext);
      }

      if (url.toLowerCase().match(/\.(jpg|jpeg|png|gif|bmp|webp)$/)) return 'image';
      if (url.toLowerCase().includes('.pdf')) return 'pdf';
      return 'unknown';
    },

    getTypeFromExtension: (ext) => {
      const typeMap = {
        jpg: 'image', jpeg: 'image', png: 'image', gif: 'image', 
        webp: 'image', bmp: 'image',
        pdf: 'pdf'
      };
      return typeMap[ext.toLowerCase()] || 'unknown';
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