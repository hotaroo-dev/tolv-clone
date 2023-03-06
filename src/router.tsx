import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Root from './routes/root'
import Index from './routes'
import Products from './routes/products'
import Product from './routes/product'
import Stockists from './routes/stockists'
import About from './routes/about'
import Layout from './routes/layout'
import Login from './routes/login'
import Signup from './routes/signup'
import SearchedProducts from './routes/search'
import { useRecoilValue } from 'recoil'
import { tokenState } from './atom'

const Router: React.FC = () => {
  const location = useLocation()
  const token = useRecoilValue(tokenState)

  useEffect(() => {
    if (token) {
      localStorage.setItem('ACCESS_TOKEN', token)
    } else {
      localStorage.removeItem('ACCESS_TOKEN')
    }
  }, [token])

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Root />}>
          <Route index element={<Index />} />
          <Route path="products/:productId/*" element={<Product />} />
          <Route path="products" element={<Products />} />
          <Route path="stockists" element={<Stockists />} />
          <Route path="about" element={<About />} />
          <Route path="search" element={<SearchedProducts />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default Router
