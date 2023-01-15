import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { containerVariants } from '.'
import ProductDisplay from '../components/productDisplay'

const Products: React.FC = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ type: 'tween', delay: 0.65, duration: 0.5 }}
    >
      <Helmet>
        <title>Tolv - Products</title>
      </Helmet>
      <ProductDisplay />
    </motion.section>
  )
}

export default Products
