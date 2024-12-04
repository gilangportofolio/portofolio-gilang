import { useState, useEffect, createContext, useContext, useRef } from 'react';
import { HiColorSwatch } from 'react-icons/hi';

// Context
const ThemeContext = createContext();

// Custom Hook
export const useTheme = () => useContext(ThemeContext);

// Provider Component
export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('default');
  
  const themes = [
    { 
      id: 'default', 
      name: 'Hijau Diamond',
      colors: {
        primary: '#50C878',
        gradient: 'linear-gradient(135deg, #50C878 0%, #3CB371 100%)'
      }
    },
    { 
      id: 'blue', 
      name: 'Biru Ocean',
      colors: {
        primary: '#0EA5E9',
        gradient: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)'
      }
    },
    { 
      id: 'purple', 
      name: 'Ungu Royal',
      colors: {
        primary: '#8B5CF6',
        gradient: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)'
      }
    },
    { 
      id: 'orange', 
      name: 'Orange Sunset',
      colors: {
        primary: '#F97316',
        gradient: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)'
      }
    },
    { 
      id: 'teal', 
      name: 'Teal Fresh',
      colors: {
        primary: '#14B8A6',
        gradient: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)'
      }
    }
  ];

  const setTheme = (themeId) => {
    const theme = themes.find(t => t.id === themeId);
    if (!theme) return;

    setCurrentTheme(themeId);
    const root = document.documentElement;
    
    // Warna Utama
    root.style.setProperty('--color-primary', theme.colors.primary);
    
    // Gradasi
    root.style.setProperty('--gradient-primary', theme.colors.gradient);
    root.style.setProperty('--gradient-hover', theme.colors.gradient);
    
    // Background System - disesuaikan dengan warna tema
    root.style.setProperty('--color-bg-main', `${theme.colors.primary}10`); // Opacity 10%
    root.style.setProperty('--color-bg-filter', `${theme.colors.primary}15`); // Opacity 15%
    
    // Sesuaikan warna tambahan
    if (theme.id === 'blue') {
      root.style.setProperty('--color-blue', theme.colors.primary);
      root.style.setProperty('--gradient-blue', theme.colors.gradient);
    } else if (theme.id === 'purple') {
      root.style.setProperty('--color-purple', theme.colors.primary);
      root.style.setProperty('--gradient-purple', theme.colors.gradient);
    } else if (theme.id === 'orange') {
      root.style.setProperty('--color-orange', theme.colors.primary);
      root.style.setProperty('--gradient-orange', theme.colors.gradient);
    } else if (theme.id === 'teal') {
      root.style.setProperty('--color-teal', theme.colors.primary);
      root.style.setProperty('--gradient-teal', theme.colors.gradient);
    }
    
    localStorage.setItem('theme', themeId);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'default';
    setTheme(savedTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Theme Switcher Component
const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme, setTheme, themes } = useTheme();
  const [position, setPosition] = useState(() => {
    // Sesuaikan posisi default untuk mobile
    const isMobile = window.innerWidth <= 768;
    const defaultPosition = isMobile 
      ? { x: window.innerWidth - 70, y: window.innerHeight - 70 }
      : { x: 20, y: window.innerHeight - 80 };
    
    const saved = localStorage.getItem('themeSwitcherPosition');
    return saved ? JSON.parse(saved) : defaultPosition;
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [menuPosition, setMenuPosition] = useState('bottom-full right-0');

  // Tambahkan ref untuk komponen
  const themeSwitcherRef = useRef(null);

  // Handler untuk click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (themeSwitcherRef.current && !themeSwitcherRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  // Menyimpan posisi ke localStorage
  useEffect(() => {
    localStorage.setItem('themeSwitcherPosition', JSON.stringify(position));
  }, [position]);

  // Handler untuk mouse/touch events
  const handleDragStart = (e) => {
    const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    const clientY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;
    
    setIsDragging(true);
    setDragStart({
      x: clientX - position.x,
      y: clientY - position.y
    });
    setIsOpen(false); // Tutup picker saat mulai drag
  };

  const handleDrag = (e) => {
    if (!isDragging) return;
    
    const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const clientY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;
    
    const newX = clientX - dragStart.x;
    const newY = clientY - dragStart.y;

    // Batasi posisi agar tidak keluar window
    const maxX = window.innerWidth - 60;  // Lebar button
    const maxY = window.innerHeight - 60; // Tinggi button
    
    setPosition({
      x: Math.min(Math.max(0, newX), maxX),
      y: Math.min(Math.max(0, newY), maxY)
    });
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Event listeners untuk mouse/touch
  useEffect(() => {
    const handleMouseMove = (e) => handleDrag(e);
    const handleTouchMove = (e) => {
      e.preventDefault();
      handleDrag(e);
    };
    
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleDragEnd);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleDragEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleDragEnd);
    };
  }, [isDragging]);

  // Update posisi menu saat tombol dibuka
  useEffect(() => {
    if (isOpen) {
      const buttonRect = themeSwitcherRef.current?.getBoundingClientRect();
      if (!buttonRect) return;

      const menuWidth = 200;
      const menuHeight = 250;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      let newPosition = '';

      // Cek posisi vertikal
      if (buttonRect.top < menuHeight) {
        newPosition += 'top-full ';
      } else {
        newPosition += 'bottom-full ';
      }

      // Cek posisi horizontal
      if (buttonRect.left < menuWidth) {
        newPosition += 'left-0';
      } else if (windowWidth - buttonRect.right < menuWidth) {
        newPosition += 'right-0';
      } else {
        newPosition += 'right-0';
      }

      setMenuPosition(newPosition);
    }
  }, [isOpen, position]);

  // Tambahkan handler untuk resize window
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      const maxX = window.innerWidth - 60;
      const maxY = window.innerHeight - 60;
      
      setPosition(prev => ({
        x: Math.min(prev.x, maxX),
        y: Math.min(prev.y, maxY)
      }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      ref={themeSwitcherRef}
      className="fixed z-[9999]" // Tingkatkan z-index
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        cursor: isDragging ? 'grabbing' : 'grab',
        touchAction: 'none'
      }}
    >
      <button
        className="theme-switcher-button bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        style={{ 
          borderColor: 'var(--color-primary)',
          borderWidth: '1px'
        }}
        title="Ubah Tema (Drag untuk memindahkan)"
      >
        <HiColorSwatch 
          className="w-6 h-6 md:w-5 md:h-5" // Responsive size
          style={{ color: 'var(--color-primary)' }} 
          onClick={(e) => {
            if (!isDragging) {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }
          }}
        />
      </button>

      {isOpen && (
        <div 
          className={`absolute ${menuPosition} mb-2 bg-white rounded-lg shadow-xl p-3 min-w-[200px] max-w-[calc(100vw-32px)]`} // Tambahkan max-width untuk mobile
          style={{ 
            maxHeight: '80vh', 
            overflowY: 'auto',
            zIndex: 9999 // Pastikan menu juga memiliki z-index tinggi
          }}
        >
          <div className="text-sm font-medium text-gray-600 mb-2 px-2">
            Pilih Tema
          </div>
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => {
                setTheme(theme.id);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 flex items-center gap-2
                ${currentTheme === theme.id ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
            >
              <div 
                className="w-4 h-4 rounded-full"
                style={{ background: theme.colors.gradient }}
              />
              <span className="text-sm">{theme.name}</span>
              {currentTheme === theme.id && (
                <span className="ml-auto text-xs" style={{ color: 'var(--color-primary)' }}>
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher; 