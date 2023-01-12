import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants } from '.'

const Products: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ type: 'tween', delay: 1, duration: 0.5 }}
      className="hero"
    ></motion.div>
  )
}

export default Products
