import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { imageDelay, opacityVariants } from '../global'
import ProductDisplay from '../components/productDisplay'

const Products: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tolv - Products</title>
      </Helmet>
      <motion.section
        className="pt-14"
        variants={opacityVariants}
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
