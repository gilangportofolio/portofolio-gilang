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

const defaultCategoryStyle = {
  bg: 'var(--color-primary)',
  text: '#ffffff'
};

// Warna untuk Filter Kategori
export const CATEGORY_COLORS = {
  [CATEGORIES.SEMUA]: { ...defaultCategoryStyle },
  [CATEGORIES.UI_UX]: { ...defaultCategoryStyle },
  [CATEGORIES.DESIGN_VISUAL]: { ...defaultCategoryStyle },
  [CATEGORIES.WEBSITE]: { ...defaultCategoryStyle },
  [CATEGORIES.SYSTEM_ANALYST]: { ...defaultCategoryStyle },
  [CATEGORIES.BISNIS_ANALYST]: { ...defaultCategoryStyle },
  [CATEGORIES.DOKUMENTASI]: { ...defaultCategoryStyle },
  [CATEGORIES.PROJEK_LAIN]: { ...defaultCategoryStyle }
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
export const getToolStyle = () => ({
  color: 'var(--color-primary)',
  backgroundColor: 'transparent',
  border: '1px solid var(--color-primary)',
  padding: '2px 10px',
  borderRadius: '20px',
  fontSize: '0.75rem'
});

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
      backgroundColor: isActive ? colors.bg : 'white',
      color: isActive ? colors.text : colors.bg,
      borderColor: colors.bg,
      padding: '2px 10px',
      borderRadius: '20px',
      border: `1px solid ${colors.bg}`,
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

// Kategori Pengalaman
export const EXPERIENCE_CATEGORIES = {
  SEMUA: 'Semua',
  FULL_TIME: 'Full Time',
  PART_TIME: 'Part Time',
  FREELANCE: 'Freelance',
  ORGANISASI: 'Organisasi',
  INTERN: 'Intern'
};

const defaultExperienceStyle = {
  bg: 'var(--color-primary)',
  text: '#ffffff'
};

// Warna untuk kategori Pengalaman
export const EXPERIENCE_COLORS = Object.keys(EXPERIENCE_CATEGORIES).reduce((acc, key) => ({
  ...acc,
  [EXPERIENCE_CATEGORIES[key]]: { ...defaultExperienceStyle }
}), {});

// Hook untuk filter Pengalaman
export function useExperienceFilter(items) {
  const [activeFilter, setActiveFilter] = useState(EXPERIENCE_CATEGORIES.SEMUA);
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

  const filteredItems = useMemo(() => {
    if (activeFilter === EXPERIENCE_CATEGORIES.SEMUA) return items;
    return items.filter(item => {
      const normalizedStatus = item.status?.toLowerCase().replace(/\s+/g, '');
      const normalizedFilter = activeFilter.toLowerCase().replace(/\s+/g, '');
      return normalizedStatus === normalizedFilter;
    });
  }, [items, activeFilter]);

  const getExperienceStyle = (category) => {
    const colors = EXPERIENCE_COLORS[category] || EXPERIENCE_COLORS[EXPERIENCE_CATEGORIES.SEMUA];
    const isActive = category === activeFilter;
    
    return {
      backgroundColor: isActive ? colors.bg : 'white',
      color: isActive ? colors.text : colors.bg,
      borderColor: colors.bg,
      padding: '2px 10px',
      borderRadius: '20px',
      border: `1px solid ${colors.bg}`,
      boxShadow: isActive ? `0 4px 6px -1px ${colors.bg}40` : 'none'
    };
  };

  return {
    activeFilter,
    setActiveFilter: handleFilterChange,
    filteredItems,
    getExperienceStyle,
    categories: Object.values(EXPERIENCE_CATEGORIES),
    isTransitioning
  };
} 