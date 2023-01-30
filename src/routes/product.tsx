import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useLocation, useParams } from 'react-router-dom'
import { products } from '../products'

const Product: React.FC = () => {
  const { productId } = useParams() as unknown as { productId: string }
  const { state } = useLocation() as { state: { name: string } }

  return (
    <>
      <Helmet>
        <title>Tolv - {state?.name || products[productId].name}</title>
      </Helmet>
      <motion.div></motion.div>
    </>
  )
}

export default Product
