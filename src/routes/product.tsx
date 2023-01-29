import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useLocation, useParams } from 'react-router-dom'

const Product: React.FC = () => {
  const { productId } = useParams()
  const { state } = useLocation()

  console.log(productId)

  return (
    <>
      <Helmet>
        <title>Tolv - {state.name}</title>
      </Helmet>
      <motion.div></motion.div>
    </>
  )
}

export default Product
