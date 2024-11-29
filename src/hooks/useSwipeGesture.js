import { useState, useCallback } from 'react'

export function useSwipeGesture(onSwipe) {
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const minSwipeDistance = 50

  const onTouchStart = useCallback((e) => {
    setTouchEnd(null)
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    })
  }, [])

  const onTouchMove = useCallback((e) => {
    setTouchEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    })
  }, [])

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return
    
    const distanceY = touchStart.y - touchEnd.y
    const distanceX = touchStart.x - touchEnd.x
    const isSwipeUp = distanceY > minSwipeDistance
    const isVerticalSwipe = Math.abs(distanceY) > Math.abs(distanceX)

    if (isVerticalSwipe && isSwipeUp && onSwipe) {
      onSwipe()
    }
    
    setTouchStart(null)
    setTouchEnd(null)
  }, [touchStart, touchEnd, onSwipe])

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd
  }
} 