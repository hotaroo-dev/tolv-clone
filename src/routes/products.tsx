import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { containerVariants } from '.'
import ProductDisplay from '../components/productDisplay'
import { imageDelay } from '../components/hero'

const Products: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tolv - Products</title>
      </Helmet>
      <motion.section
        className="pt-14"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={imageDelay}
      >
        <ProductDisplay />
      </motion.section>
    </>
  )
}

export default Products
