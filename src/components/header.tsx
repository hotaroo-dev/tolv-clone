import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search } from './svg'

const Header: React.FC = () => {
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 60],
    ['rgba(250, 250, 250, 0)', 'rgba(255, 255, 255, 1)']
  )
  const boxShadow = useTransform(scrollY, [0, 40], ['none', '0 5px 10px #0005'])

  return (
    <motion.header className="header" style={{ backgroundColor, boxShadow }}>
      <div className="wrapper">
        <nav className="nav">
          <ul className="tabs">
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/stockists">Stockists</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
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
