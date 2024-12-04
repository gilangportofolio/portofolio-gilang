import { useState, useEffect, createContext, useContext } from 'react';
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

  const handleThemeChange = (themeId) => {
    setTheme(themeId);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        style={{ 
          borderColor: 'var(--color-primary)',
          borderWidth: '1px'
        }}
        title="Ubah Tema"
      >
        <HiColorSwatch className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
      </button>

      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-xl p-3 min-w-[200px]">
          <div className="text-sm font-medium text-gray-600 mb-2 px-2">
            Pilih Tema
          </div>
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => handleThemeChange(theme.id)}
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