import React from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { AnimatePresence, motion } from 'framer-motion'
import AnimatedOutlet from '../helpers/animatedOutlet'
import { tokenState } from '../atom'
import { formVariants } from '../global'

const FormLayout: React.FC = () => {
  const location = useLocation()
  const token = useRecoilValue(tokenState)

  if (token) {
    return <Navigate to="/" />
  }

  return (
    <>
      <div className="logo text-center pt-5">
        <Link to="/">
          T<span>o</span>lv
        </Link>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={formVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ type: 'tween', duration: 0.25 }}
        >
          <AnimatedOutlet />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default FormLayout
