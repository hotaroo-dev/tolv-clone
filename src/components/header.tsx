import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Search } from './svg'

const Header: React.FC = () => {
  const { pathname } = useLocation()
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 40],
    ['rgba(250, 250, 250, 0)', 'rgba(255, 255, 255, 1)']
  )
  const boxShadow = useTransform(scrollY, [0, 40], ['none', '0 5px 10px #0003'])

  return (
    <motion.header style={{ backgroundColor, boxShadow }}>
      <div className="wrapper">
        <nav className="nav">
          <ul className="tabs normal-text">
            <li>
              <Link
                to="/products"
                className={`${pathname === '/products' ? 'active' : ''}`}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/stockists"
                className={`${pathname === '/stockists' ? 'active' : ''}`}
              >
                Stockists
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${pathname === '/about' ? 'active' : ''}`}
              >
                About us
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="mobile-nav"></nav>
        <div className="logo">
          <Link to="/">
            T<span>o</span>lv
          </Link>
        </div>
        <div className="search">
          <Search />
        </div>
      </div>
    </motion.header>
  )
}

export default Header
