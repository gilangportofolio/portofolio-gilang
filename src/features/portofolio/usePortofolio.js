import { useState, useEffect } from 'react';
import supabase from '../../config/supabaseClient';

export const getCategoryColor = (category) => {
  const colorMap = {
    'UI/UX': {
      bg: 'rgba(147, 51, 234, 0.9)',  // Ungu
      text: '#ffffff'
    },
    'Design Visual': {
      bg: 'rgba(236, 72, 153, 0.9)',  // Pink
      text: '#ffffff'
    },
    'Website': {
      bg: 'rgba(59, 130, 246, 0.9)',  // Biru
      text: '#ffffff'
    },
    'System Analyst': {
      bg: 'rgba(245, 158, 11, 0.9)',  // Oranye
      text: '#ffffff'
    },
    'Bisnis Analyst': {
      bg: 'rgba(16, 185, 129, 0.9)',  // Hijau
      text: '#ffffff'
    },
    'Dokumentasi': {
      bg: 'rgba(107, 114, 128, 0.9)',  // Abu-abu
      text: '#ffffff'
    },
    'Projek Lain': {
      bg: 'rgba(220, 38, 38, 0.9)',   // Merah
      text: '#ffffff'
    },
    'Semua': {
      bg: 'var(--gradient-primary)',
      text: '#ffffff'
    }
  };
  return colorMap[category] || { bg: 'rgba(80, 200, 120, 0.9)', text: '#ffffff' };
};

const usePortofolio = () => {
  const [portofolios, setPortofolios] = useState([]);
  const [filteredPortofolios, setFilteredPortofolios] = useState([]);
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  const normalizeCategory = (category) => {
    const categoryMap = {
      'UI/UX Design': 'UI/UX',
      'ui-ux': 'UI/UX',
      'Visual Design': 'Design Visual',
      'visual': 'Design Visual',
      'Website': 'Website',
      'website': 'Website',
      'Development': 'Website',
      'System Analysis': 'System Analyst',
      'system': 'System Analyst',
      'Business Analysis': 'Bisnis Analyst',
      'business': 'Bisnis Analyst',
      'dokumentasi': 'Dokumentasi',
      'projek-lain': 'Projek Lain'
    };
    return categoryMap[category] || category;
  };

  const fetchPortofolios = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('portofolios')
        .select(`
          *,
          images (
            id,
            url_gambar,
            tipe
          )
        `)
        .order('waktu_publish', { ascending: false });

      if (error) throw error;

      const formattedData = data.map(item => ({
        ...item,
        kategori: normalizeCategory(item.kategori),
        tools: item.tools || [],
        poin: item.poin || [],
        images: item.images.sort((a, b) => 
          a.tipe === 'utama' ? -1 : b.tipe === 'utama' ? 1 : 0
        )
      }));

      setPortofolios(formattedData);
      setFilteredPortofolios(formattedData);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterPortofolios = (category) => {
    if (category === 'Semua') {
      return portofolios;
    }
    return portofolios.filter(item => normalizeCategory(item.kategori) === category);
  };

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setCurrentPage(1);
    const filtered = filterPortofolios(category);
    setFilteredPortofolios(filtered);
  };

  const getPaginatedPortofolios = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredPortofolios.slice(startIndex, endIndex);
  };

  useEffect(() => {
    fetchPortofolios();
  }, []);

  useEffect(() => {
    const filtered = filterPortofolios(activeFilter);
    setFilteredPortofolios(filtered);
  }, [portofolios, activeFilter]);

  useEffect(() => {
    const maxPage = Math.ceil(filteredPortofolios.length / ITEMS_PER_PAGE);
    if (currentPage > maxPage) {
      setCurrentPage(1);
    }
  }, [filteredPortofolios, currentPage]);

  return {
    paginatedPortofolios: getPaginatedPortofolios(),
    activeFilter,
    isLoading,
    currentPage,
    setCurrentPage,
    handleFilterChange,
    totalPages: Math.ceil(filteredPortofolios.length / ITEMS_PER_PAGE),
    filteredPortofolios
  };
};

export default usePortofolio; 