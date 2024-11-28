import { useState, useEffect } from 'react';
import supabase from '../../config/supabaseClient';

const usePortofolio = () => {
  const [portofolios, setPortofolios] = useState([]);
  const [filteredPortofolios, setFilteredPortofolios] = useState([]);
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12;

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

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setCurrentPage(1);
    if (category === 'Semua') {
      setFilteredPortofolios(portofolios);
    } else {
      const filtered = portofolios.filter(item => 
        normalizeCategory(item.kategori) === category
      );
      setFilteredPortofolios(filtered);
    }
  };

  useEffect(() => {
    fetchPortofolios();
  }, []);

  const paginatedPortofolios = filteredPortofolios.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return {
    paginatedPortofolios,
    activeFilter,
    isLoading,
    currentPage,
    setCurrentPage,
    handleFilterChange,
    ITEMS_PER_PAGE,
    totalPages: Math.ceil(filteredPortofolios.length / ITEMS_PER_PAGE)
  };
};

export default usePortofolio; 