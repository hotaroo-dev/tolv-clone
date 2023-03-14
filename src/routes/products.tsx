import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { imageDelay, opacityVariants } from '../global'
import ProductDisplay from '../components/productDisplay'

const Products: React.FC = () => {
  return (
    <motion.div
      className="pt-14"
      variants={opacityVariants}
      transition={imageDelay}
    >
      <Helmet>
        <title>Tolv - Products</title>
      </Helmet>
      <ProductDisplay />
    </motion.div>
  )
}

export default Products
