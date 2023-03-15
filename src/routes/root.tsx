import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { AnimatePresence, motion } from 'framer-motion'
import Header from '../components/header'
import Carts from '../components/carts'
import ScrollToTop from '../helpers/scrollToTop'
import AnimatedOutlet from '../helpers/animatedOutlet'
import axiosClient from '../helpers/axios-client'
import { tokenState, userState } from '../atom'
import { opacityVariants } from '../global'

const Root: React.FC = () => {
  const [openCart, setOpenCart] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const location = useLocation()
  const token = useRecoilValue(tokenState)
  const setUser = useSetRecoilState(userState)

  // prettier-ignore
  useEffect(() => {
    if (!token) return 
    (async () => {
      const { data } = await axiosClient.get('/user')
      setUser(data)
    })()
  }, [])

  const toggleCart = () => {
    setOpenCart(prev => !prev)
  }

  const toggleMenu = () => {
    setOpenMenu(prev => !prev)
  }

  return (
    <>
      <ScrollToTop setOpenCart={setOpenCart} setOpenMenu={setOpenMenu} />
      <Header
        toggleCart={toggleCart}
        toggleMenu={toggleMenu}
        openMenu={openMenu}
      />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          variants={opacityVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <AnimatedOutlet />
        </motion.main>
      </AnimatePresence>
      <Carts openCart={openCart} />
    </>
  )
}

export default Root
