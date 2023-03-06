import React, { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { measurementState } from './atom'

const ScrollToTop: React.FC = () => {
  const setShowMeasurement = useSetRecoilState(measurementState)
  const { key } = useLocation()

  useLayoutEffect(() => {
    const scrollRestoration = 'scrollRestoration' in window.history
    if (scrollRestoration) {
      window.history.scrollRestoration = 'manual'
    }

    window.scrollTo(0, 0)

    return () => {
      setShowMeasurement(false)
    }
  }, [key])

  return null
}

export default ScrollToTop
