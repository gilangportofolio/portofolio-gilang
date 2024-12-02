const ExternalUrlHandler = {
  googleDrive: {
    isGoogleDriveUrl: (url) => {
      return url?.includes('drive.google.com') || url?.includes('googleusercontent.com');
    },

    extractFileId: (url) => {
      if (!url) return null;
      
      let fileId = null;
      
      if (url.includes('/file/d/')) {
        fileId = url.split('/file/d/')[1]?.split('/')[0];
      } else if (url.includes('id=')) {
        fileId = url.split('id=')[1]?.split('&')[0];
      } else if (url.includes('/d/')) {
        fileId = url.split('/d/')[1]?.split('/')[0];
      } else if (url.includes('lh3.googleusercontent.com/d/')) {
        fileId = url.split('lh3.googleusercontent.com/d/')[1]?.split('=')[0];
      }
      
      return fileId;
    },

    getPreviewUrl: (fileId, type = 'view') => {
      if (!fileId) return '';
      
      const urls = {
        thumbnail: [
          `https://lh3.googleusercontent.com/d/${fileId}=w500`,
          `https://drive.google.com/thumbnail?id=${fileId}&sz=w500`,
        ],
        preview: [
          `https://lh3.googleusercontent.com/d/${fileId}`,
          `https://drive.google.com/uc?export=view&id=${fileId}`,
        ],
        view: [
          `https://lh3.googleusercontent.com/d/${fileId}`,
          `https://drive.google.com/uc?export=view&id=${fileId}`,
        ]
      };
      
      return urls[type] || urls.view;
    },

    getFallbackUrl: (url, currentIndex = 0) => {
      const fileId = ExternalUrlHandler.googleDrive.extractFileId(url);
      if (!fileId) return null;

      const fallbackUrls = [
        `https://lh3.googleusercontent.com/d/${fileId}`,
        `https://drive.google.com/uc?export=view&id=${fileId}`,
        `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`
      ];

      return currentIndex < fallbackUrls.length ? fallbackUrls[currentIndex] : null;
    }
  }
};

export default ExternalUrlHandler; 