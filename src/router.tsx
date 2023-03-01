import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Index from './routes'
import Products from './routes/products'
import Product from './routes/product'
import Stockists from './routes/stockists'
import About from './routes/about'
import Login from './routes/login'
import { AnimatePresence } from 'framer-motion'

const Router: React.FC = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<Index />} />
        <Route path="/products/:productId/*" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/stockists" element={<Stockists />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AnimatePresence>
  )
}

export default Router
