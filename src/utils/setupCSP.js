export const setupCSP = () => {
  if (typeof window !== 'undefined') {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = `
      default-src 'self';
      img-src 'self' data: blob: https: *.googleusercontent.com drive.google.com lh3.googleusercontent.com;
      script-src 'self' 'unsafe-inline' 'unsafe-eval';
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      connect-src 'self' 
        https://*.supabase.co 
        wss://*.supabase.co 
        https://ohkcmgrjqmcarpfwcmiy.supabase.co 
        https://api.supabase.co 
        ws://localhost:* 
        http://localhost:*
        https://api.ipapi.co;
      font-src 'self' data: https://fonts.gstatic.com;
      frame-src 'self' https: drive.google.com;
      worker-src 'self' blob:;
    `.replace(/\s+/g, ' ').trim();
    document.head.appendChild(meta);
  }
}; 