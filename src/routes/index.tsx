import React from 'react'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/hero'
import Banner from '../components/banner'
import ProductDisplay from '../components/productDisplay'

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0 } }
}

const Index: React.FC = () => {
  return (
    <main>
      <Helmet>
        <title>Tolv</title>
      </Helmet>
      <Hero />
      <Banner />
      <ProductDisplay />
    </main>
  )
}

export default Index
