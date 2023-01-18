import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Exit, Search } from './svg'
import { spring } from './hero'

const menuVariants = {
  expanded: {
    x: 0,
    display: 'block'
  },
  collapsed: {
    x: '-100%',
    transitionEnd: {
      display: 'none'
    }
  }
}

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const { pathname } = useLocation()
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 60],
    ['rgba(250, 250, 250, 0)', 'rgba(255, 255, 255, 1)']
  )
  const boxShadow = useTransform(scrollY, [0, 40], ['none', '0 5px 10px #0003'])

  const toggleMenu = () => {
    setOpenMenu(prev => !prev)
  }

  useEffect(() => {
    if (!openMenu) return
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [openMenu])

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

        <motion.div
          className="mobile-nav"
          variants={menuVariants}
          initial={false}
          animate={openMenu ? 'expanded' : 'collapsed'}
          transition={spring}
        >
          <nav className="mobile-menu">
            <ul className="normal-text flex-1">
              <li>
                <Link to="/products" onClick={toggleMenu}>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/stockists" onClick={toggleMenu}>
                  Stockists
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={toggleMenu}>
                  About us
                </Link>
              </li>
            </ul>
            <div className="exit" onClick={toggleMenu}>
              <Exit />
            </div>
            <div className="search">
              <Search />
              <span className="text-lg font-sans">Search anything here</span>
            </div>
          </nav>
        </motion.div>

        <div className="logo">
          <Link to="/">
            T<span>o</span>lv
          </Link>
        </div>

        <div className="search">
          <Search />
        </div>

        <div className="menu-bar" onClick={() => setOpenMenu(true)}>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
