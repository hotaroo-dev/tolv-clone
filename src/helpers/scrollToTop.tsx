import React, { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { cardState, measurementState } from '../atom'

const ScrollToTop: React.FC<{
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setOpenCart, setOpenMenu }) => {
  const setOpenCard = useSetRecoilState(cardState)
  const setShowMeasurement = useSetRecoilState(measurementState)
  const { key } = useLocation()

  useLayoutEffect(() => {
    const scrollRestoration = 'scrollRestoration' in window.history
    if (scrollRestoration) {
      window.history.scrollRestoration = 'manual'
    }

    window.scrollTo(0, 0)

    return () => {
      setOpenMenu(false)
      setOpenCart(false)
      setOpenCard(false)
      setShowMeasurement(false)
    }
  }, [key])

  return null
}

export default ScrollToTop
