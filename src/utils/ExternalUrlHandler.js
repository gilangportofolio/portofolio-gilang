const ExternalUrlHandler = {
  googleDrive: {
    isGoogleDriveUrl: (url) => {
      return url?.includes('drive.google.com');
    },

    extractFileId: (url) => {
      if (!url) return null;
      
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
      
      switch (type) {
        case 'thumbnail':
          return `https://lh3.googleusercontent.com/d/${fileId}=w500`;
        case 'preview':
        case 'view':
        default:
          return `https://lh3.googleusercontent.com/d/${fileId}`;
      }
    }
  }
};

export default ExternalUrlHandler; 