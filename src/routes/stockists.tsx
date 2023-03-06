import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { opacityVariants } from '../global'

const Stockists: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tolv - Stockists</title>
      </Helmet>
      <motion.div
        variants={opacityVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      ></motion.div>
    </>
  )
}

export default Stockists
