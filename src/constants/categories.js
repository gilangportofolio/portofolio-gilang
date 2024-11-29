import supabase from '../config/supabaseClient';
import { useState, useCallback, useMemo } from 'react';

// Kategori Portofolio
export const CATEGORIES = {
  SEMUA: 'Semua',
  UI_UX: 'UI/UX',
  DESIGN_VISUAL: 'Design Visual',
  WEBSITE: 'Website',
  SYSTEM_ANALYST: 'System Analyst',
  BISNIS_ANALYST: 'Bisnis Analyst',
  DOKUMENTASI: 'Dokumentasi',
  PROJEK_LAIN: 'Proyek Lain'
};

// Warna untuk Filter Kategori
export const CATEGORY_COLORS = {
  [CATEGORIES.SEMUA]: {
    bg: '#f97316',  // Orange-500
    text: '#ffffff'
  },
  [CATEGORIES.UI_UX]: {
    bg: '#0ea5e9',  // Sky-500
    text: '#ffffff'
  },
  [CATEGORIES.DESIGN_VISUAL]: {
    bg: '#ec4899',  // Pink-500
    text: '#ffffff'
  },
  [CATEGORIES.WEBSITE]: {
    bg: '#6366f1',  // Indigo-500
    text: '#ffffff'
  },
  [CATEGORIES.SYSTEM_ANALYST]: {
    bg: '#10b981',  // Emerald-500
    text: '#ffffff'
  },
  [CATEGORIES.BISNIS_ANALYST]: {
    bg: '#8b5cf6',  // Violet-500
    text: '#ffffff'
  },
  [CATEGORIES.DOKUMENTASI]: {
    bg: '#f43f5e',  // Rose-500
    text: '#ffffff'
  },
  [CATEGORIES.PROJEK_LAIN]: {
    bg: '#64748b',  // Slate-500
    text: '#ffffff'
  }
};

// Kategori Tools - Tambahkan semua kategori yang mungkin
export const TOOL_CATEGORIES = {
  'API': {
    color: '#0891b2',          
    bgColor: '#ecfeff',        
    borderColor: '#22d3ee'     
  },
  'DevOps': {
    color: '#475569',          
    bgColor: '#f8fafc',        
    borderColor: '#94a3b8'     
  },
  'Frontend': {
    color: '#db2777',
    bgColor: '#fdf2f8',
    borderColor: '#f472b6'
  },
  'Backend': {
    color: '#059669',
    bgColor: '#ecfdf5',
    borderColor: '#34d399'
  },
  'Database': {
    color: '#9333ea',
    bgColor: '#f5f3ff',
    borderColor: '#c084fc'
  },
  'Design': {
    color: '#0ea5e9',
    bgColor: '#f0f9ff',
    borderColor: '#38bdf8'
  },
  'Other': {  // Default kategori
    color: '#64748b',          
    bgColor: '#f8fafc',        
    borderColor: '#94a3b8'     
  }
};

// Cache untuk tools
let toolsCategoriesCache = null;

// Fungsi fetch tools
export const fetchToolCategories = async () => {
  if (toolsCategoriesCache) return toolsCategoriesCache;

  try {
    const { data, error } = await supabase
      .from('tools_master')
      .select('nama, kategori');
    
    if (error) throw error;

    const toolMap = {};
    data?.forEach(tool => {
      toolMap[tool.nama] = tool.kategori;
    });
    
    toolsCategoriesCache = toolMap;
    return toolMap;
  } catch (error) {
    console.error('Error fetching tool categories:', error);
    return {};
  }
};

// Perbaiki getToolStyle untuk handle kasus sebelum tools ter-fetch
export const getToolStyle = (toolName) => {
  const defaultStyle = {
    color: TOOL_CATEGORIES['Other'].color,
    backgroundColor: TOOL_CATEGORIES['Other'].bgColor,
    borderColor: TOOL_CATEGORIES['Other'].borderColor
  };

  if (!toolName || !toolsCategoriesCache) return defaultStyle;

  const toolCategory = toolsCategoriesCache[toolName] || 'Other';
  const style = TOOL_CATEGORIES[toolCategory] || TOOL_CATEGORIES['Other'];
  
  return {
    color: style.color,
    backgroundColor: style.bgColor,
    borderColor: style.borderColor
  };
};

// Hook untuk filter
export function useFilter(items) {
  const [activeFilter, setActiveFilter] = useState(CATEGORIES.SEMUA);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleFilterChange = useCallback((newFilter) => {
    if (newFilter === activeFilter) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveFilter(newFilter);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(false);
        });
      });
    }, 150);
  }, [activeFilter]);

  const normalizeCategory = (category) => {
    const normalized = category?.toLowerCase();
    if (!normalized) return CATEGORIES.PROJEK_LAIN;

    if (normalized.includes('ui') || normalized.includes('ux')) return CATEGORIES.UI_UX;
    if (normalized.includes('visual') || normalized.includes('design')) return CATEGORIES.DESIGN_VISUAL;
    if (normalized.includes('web') || normalized.includes('development')) return CATEGORIES.WEBSITE;
    if (normalized.includes('system') || normalized.includes('sistem')) return CATEGORIES.SYSTEM_ANALYST;
    if (normalized.includes('business') || normalized.includes('bisnis')) return CATEGORIES.BISNIS_ANALYST;
    if (normalized.includes('dokumentasi') || normalized.includes('documentation')) return CATEGORIES.DOKUMENTASI;
    
    return CATEGORIES.PROJEK_LAIN;
  };

  const filteredItems = useMemo(() => {
    if (activeFilter === CATEGORIES.SEMUA) return items;
    return items.filter(item => normalizeCategory(item.kategori) === activeFilter);
  }, [items, activeFilter]);

  const getCategoryStyle = (category) => {
    const colors = CATEGORY_COLORS[category] || CATEGORY_COLORS[CATEGORIES.SEMUA];
    const isActive = category === activeFilter;
    
    return {
      backgroundColor: isActive ? colors.bg : 'transparent',
      color: isActive ? colors.text : colors.bg,
      borderColor: isActive ? 'transparent' : colors.bg,
      boxShadow: isActive ? `0 4px 6px -1px ${colors.bg}40` : 'none'
    };
  };

  return {
    activeFilter,
    setActiveFilter: handleFilterChange,
    filteredItems,
    getCategoryStyle,
    categories: Object.values(CATEGORIES),
    isTransitioning
  };
} 