import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { AnimatePresence, motion } from 'framer-motion'
import Header from '../components/header'
import ScrollToTop from '../helpers/scrollToTop'
import AnimatedOutlet from '../helpers/animatedOutlet'
import axiosClient from '../helpers/axios-client'
import { tokenState, userState } from '../atom'
import { opacityVariants } from '../global'

const Root: React.FC = () => {
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

  return (
    <>
      <Header />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <motion.main
          className="z-50"
          key={location.pathname}
          variants={opacityVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <AnimatedOutlet />
        </motion.main>
      </AnimatePresence>
    </>
  )
}

export default Root
