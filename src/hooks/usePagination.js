import { useState, useMemo, useCallback } from 'react'

export const usePagination = ({
  totalCount,
  pageSize,
  currentPage
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize)
    return Array.from({ length: totalPageCount }, (_, i) => i + 1)
  }, [totalCount, pageSize])

  return paginationRange
}

export const usePageTransition = (items, pageSize = 8) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handlePageChange = useCallback((page) => {
    if (page === currentPage) return
    
    setIsTransitioning(true)
    // Tunggu transisi opacity selesai
    setTimeout(() => {
      setCurrentPage(page)
      // Berikan waktu untuk konten baru dirender
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(false)
        })
      })
    }, 150) // Setengah dari durasi transisi CSS
  }, [currentPage])

  const currentItems = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize
    const lastPageIndex = firstPageIndex + pageSize
    return items.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, items, pageSize])

  return {
    currentPage,
    setCurrentPage: handlePageChange,
    currentItems,
    isTransitioning,
    pageSize
  }
} 