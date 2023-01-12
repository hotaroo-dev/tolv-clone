import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Index from './routes'
import Products from './routes/products'
import Stockists from './routes/stockists'
import About from './routes/about'
import { AnimatePresence } from 'framer-motion'

const Router: React.FC = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<Index />} />
        <Route path="/products" element={<Products />} />
        <Route path="/stockists" element={<Stockists />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  )
}

export default Router