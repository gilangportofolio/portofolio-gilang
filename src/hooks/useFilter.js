import { useState, useMemo, useCallback } from 'react'

export const CATEGORIES = {
  SEMUA: 'Semua',
  UI_UX: 'UI/UX',
  DESIGN_VISUAL: 'Design Visual',
  WEBSITE: 'Website',
  SYSTEM_ANALYST: 'System Analyst',
  BISNIS_ANALYST: 'Bisnis Analyst',
  DOKUMENTASI: 'Dokumentasi',
  PROJEK_LAIN: 'Proyek Lain'
}

export const CATEGORY_COLORS = {
  [CATEGORIES.SEMUA]: {
    bg: 'rgba(16, 185, 129, 0.9)',
    text: '#ffffff'
  },
  [CATEGORIES.UI_UX]: {
    bg: 'rgba(147, 51, 234, 0.9)',
    text: '#ffffff'
  },
  [CATEGORIES.DESIGN_VISUAL]: {
    bg: 'rgba(236, 72, 153, 0.9)',
    text: '#ffffff'
  },
  [CATEGORIES.WEBSITE]: {
    bg: 'rgba(59, 130, 246, 0.9)',
    text: '#ffffff'
  },
  [CATEGORIES.SYSTEM_ANALYST]: {
    bg: 'rgba(245, 158, 11, 0.9)',
    text: '#ffffff'
  },
  [CATEGORIES.BISNIS_ANALYST]: {
    bg: 'rgba(16, 185, 129, 0.9)',
    text: '#ffffff'
  },
  [CATEGORIES.DOKUMENTASI]: {
    bg: 'rgba(107, 114, 128, 0.9)',
    text: '#ffffff'
  },
  [CATEGORIES.PROJEK_LAIN]: {
    bg: 'rgba(220, 38, 38, 0.9)',
    text: '#ffffff'
  }
}

export function useFilter(items) {
  const [activeFilter, setActiveFilter] = useState(CATEGORIES.SEMUA)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleFilterChange = useCallback((newFilter) => {
    if (newFilter === activeFilter) return
    
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveFilter(newFilter)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(false)
        })
      })
    }, 150)
  }, [activeFilter])

  const normalizeCategory = (category) => {
    const normalized = category?.toLowerCase()
    if (!normalized) return CATEGORIES.PROJEK_LAIN

    if (normalized.includes('ui') || normalized.includes('ux')) return CATEGORIES.UI_UX
    if (normalized.includes('visual') || normalized.includes('design')) return CATEGORIES.DESIGN_VISUAL
    if (normalized.includes('web') || normalized.includes('development')) return CATEGORIES.WEBSITE
    if (normalized.includes('system') || normalized.includes('sistem')) return CATEGORIES.SYSTEM_ANALYST
    if (normalized.includes('business') || normalized.includes('bisnis')) return CATEGORIES.BISNIS_ANALYST
    if (normalized.includes('dokumentasi') || normalized.includes('documentation')) return CATEGORIES.DOKUMENTASI
    
    return CATEGORIES.PROJEK_LAIN
  }

  const filteredItems = useMemo(() => {
    if (activeFilter === CATEGORIES.SEMUA) return items
    return items.filter(item => normalizeCategory(item.kategori) === activeFilter)
  }, [items, activeFilter])

  const getCategoryStyle = (category) => {
    const colors = CATEGORY_COLORS[category] || CATEGORY_COLORS[CATEGORIES.SEMUA]
    const isActive = category === activeFilter
    
    return {
      backgroundColor: isActive ? colors.bg : 'rgba(229, 231, 235, 0.9)',
      color: isActive ? colors.text : '#374151',
      transition: 'all 0.3s ease'
    }
  }

  return {
    activeFilter,
    setActiveFilter: handleFilterChange,
    filteredItems,
    getCategoryStyle,
    categories: Object.values(CATEGORIES),
    isTransitioning
  }
} 