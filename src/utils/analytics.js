import supabase from '../config/supabaseClient'

const getIPAddress = async () => {
  try {
    console.log('Fetching IP address...'); // Debug log
    
    const { data, error } = await supabase.rpc('get_ip_info');
    if (error) throw error;
    
    console.log('IP and location data:', data);
    
    return {
      ip: data.ip || 'unknown',
      country: data.country_name || null,
      city: data.city || null
    };
  } catch (error) {
    console.error('Error getting IP:', error);
    return {
      ip: 'unknown',
      country: null,
      city: null
    };
  }
};

const getDeviceInfo = () => {
  const ua = navigator.userAgent;
  const uaLower = ua.toLowerCase();
  
  // Deteksi device type
  let deviceType = 'Unknown';
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    deviceType = 'Tablet';
  } else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated/i.test(ua)) {
    deviceType = 'Mobile';
  } else {
    deviceType = 'Desktop';
  }

  // Deteksi OS
  let os = 'Unknown';
  const osPatterns = {
    'Windows': /win/i,
    'MacOS': /mac/i,
    'Linux': /linux/i,
    'Android': /android/i,
    'iOS': /(iphone|ipad|ipod)/i,
    'Chrome OS': /cros/i,
    'Ubuntu': /ubuntu/i,
    'Firefox OS': /firefox os/i,
    'Windows Phone': /windows phone/i,
    'Debian': /debian/i,
    'Fedora': /fedora/i
  };

  for (const [osName, pattern] of Object.entries(osPatterns)) {
    if (pattern.test(uaLower)) {
      os = osName;
      break;
    }
  }

  // Deteksi browser - Lebih lengkap
  let browser = 'Unknown';
  if (uaLower.includes('edg/')) browser = 'Edge';
  else if (uaLower.includes('brave')) browser = 'Brave';
  else if (uaLower.includes('opr/') || uaLower.includes('opera')) browser = 'Opera';
  else if (uaLower.includes('chrome')) browser = 'Chrome';
  else if (uaLower.includes('firefox')) browser = 'Firefox';
  else if (uaLower.includes('safari') && !uaLower.includes('chrome')) browser = 'Safari';
  else if (uaLower.includes('trident/') || uaLower.includes('msie')) browser = 'Internet Explorer';
  else if (uaLower.includes('vivaldi')) browser = 'Vivaldi';
  else if (uaLower.includes('yandex')) browser = 'Yandex';
  else if (uaLower.includes('seamonkey')) browser = 'SeaMonkey';
  else if (uaLower.includes('chromium')) browser = 'Chromium';

  // Debug info jika browser atau OS tidak terdeteksi
  if (process.env.NODE_ENV === 'development') {
    if (browser === 'Unknown' || os === 'Unknown') {
      console.log('Undetected UA:', ua);
    }
  }

  return { 
    deviceType, 
    os, 
    browser,
    userAgent: ua // Simpan user agent untuk debugging
  };
};

const formatTimestamp = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  
  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

const getOrCreateSession = async () => {
  try {
    const FIVE_HOURS = 5 * 60 * 60 * 1000;
    const storedSession = localStorage.getItem('analytics_session');
    const currentTime = Date.now();

    if (storedSession) {
      try {
        const session = JSON.parse(storedSession);
        if (currentTime - new Date(session.first_visit).getTime() < FIVE_HOURS) {
          return session;
        }
      } catch (parseError) {
        localStorage.removeItem('analytics_session');
      }
    }

    // Tambahkan informasi referrer
    const referrer = document.referrer || 'direct';
    const referrerDomain = referrer !== 'direct' ? new URL(referrer).hostname : 'direct';
    
    const ipInfo = await getIPAddress();
    const deviceInfo = getDeviceInfo();
    const timestamp = formatTimestamp();
    
    const sessionData = {
      session_id: `session_${currentTime}_${Math.random().toString(36).substring(7)}`,
      ip_address: ipInfo.ip,
      country: ipInfo.country,
      city: ipInfo.city,
      first_visit: timestamp,
      last_visit: timestamp,
      device_type: deviceInfo.deviceType,
      os: deviceInfo.os,
      browser: deviceInfo.browser,
      referrer: referrerDomain, // Tambahkan referrer
      page_visits: {
        'tentang-saya': 0,
        'pendidikan': 0,
        'pengalaman': 0,
        'sertifikat': 0,
        'portofolio': 0
      },
      social_clicks: {
        'youtube': 0,
        'linkedin': 0,
        'github': 0,
        'whatsapp': 0,
        'instagram': 0,
        'tiktok': 0
      }
    };

    const { error } = await supabase
      .from('sessions')
      .insert([sessionData]);

    if (error) throw error;

    localStorage.setItem('analytics_session', JSON.stringify(sessionData));
    return sessionData;
  } catch (error) {
    console.error('Session error:', error);
    return null;
  }
};

const trackPageView = async () => {
  try {
    console.log('Starting trackPageView...'); 
    const session = await getOrCreateSession();
    if (!session) return;

    const currentPath = window.location.pathname.replace('/', '') || 'tentang-saya';
    
    // Clone object untuk menghindari mutasi langsung
    const currentVisits = { ...session.page_visits };
    
    // Increment nilai untuk halaman yang dikunjungi
    currentVisits[currentPath] = (currentVisits[currentPath] || 0) + 1;

    console.log('Previous visits:', session.page_visits); // Debug log
    console.log('Updated visits:', currentVisits); // Debug log

    const { error } = await supabase
      .from('sessions')
      .update({ 
        page_visits: currentVisits,
        last_visit: new Date().toISOString()
      })
      .eq('session_id', session.session_id);

    if (error) throw error;

    // Update local storage dengan nilai yang baru
    const updatedSession = {
      ...session,
      page_visits: currentVisits,
      last_visit: new Date().toISOString()
    };
    localStorage.setItem('analytics_session', JSON.stringify(updatedSession));

    console.log(`Successfully tracked visit to ${currentPath}`);

  } catch (error) {
    console.error('Page view tracking error:', error);
  }
};

const trackSocialClick = async (platform) => {
  try {
    const session = await getOrCreateSession();
    if (!session) return;

    const currentClicks = { ...session.social_clicks };
    currentClicks[platform] = (currentClicks[platform] || 0) + 1;

    const { error } = await supabase
      .from('sessions')
      .update({ 
        social_clicks: currentClicks,
        last_visit: new Date().toISOString()
      })
      .eq('session_id', session.session_id);

    if (error) throw error;

    const updatedSession = {
      ...session,
      social_clicks: currentClicks,
      last_visit: new Date().toISOString()
    };
    localStorage.setItem('analytics_session', JSON.stringify(updatedSession));

  } catch (error) {
    console.error('Social click tracking error:', error);
  }
};

export { trackPageView, trackSocialClick }; 