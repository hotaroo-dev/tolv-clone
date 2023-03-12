import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Cart, Exit, Search } from './svg'
import { useRecoilValue } from 'recoil'
import { userState, measurementState, cardState, cartsState } from '../atom'
import { spring } from '../global'

const Header: React.FC<{ toggleCart: () => void }> = ({ toggleCart }) => {
  const { pathname } = useLocation()
  const { scrollY } = useScroll()
  const [openMenu, setOpenMenu] = useState(false)
  const user = useRecoilValue(userState)
  const showMeasurement = useRecoilValue(measurementState)
  const openCard = useRecoilValue(cardState)
  const carts = useRecoilValue(cartsState)
  const count = carts.reduce((sum, { count }) => sum + (count || 0), 0)

  const backgroundColor = useTransform(
    scrollY,
    [20, 40],
    ['rgba(250, 250, 250, 0)', 'rgba(255, 255, 255, 1)']
  )
  const boxShadow = useTransform(
    scrollY,
    [20, 40],
    ['none', '0 5px 10px #0003']
  )

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
    <motion.header
      variants={headerVariants}
      initial={false}
      animate={
        showMeasurement || (openCard && window.innerWidth < 768)
          ? 'hidden'
          : 'visible'
      }
      transition={spring}
      style={{ backgroundColor, boxShadow }}
    >
      <div className="wrapper spacing">
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

        <div className="logo">
          <Link to="/">
            T<span>o</span>lv
          </Link>
        </div>

        <div className="buttons">
          <Link to="/search" className="-translate-y-[1px]">
            <Search />
          </Link>
          <button className="relative" onClick={toggleCart}>
            <Cart />
            <span className="text-[85%] absolute -top-1 left-4 w-4 h-4 flex justify-center items-center bg-red-500 text-white rounded-lg select-none">
              {count}
            </span>
          </button>
          {user ? (
            <Link to="/account">
              <button className="btn">{user.name}</button>
            </Link>
          ) : (
            <Link to="/login" onClick={toggleMenu}>
              <button className="btn">Login</button>
            </Link>
          )}
        </div>

        <div className="menu-bar" onClick={() => setOpenMenu(true)}>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        <AnimatePresence>
          {openMenu && (
            <motion.div
              className="mobile-nav"
              variants={menuVariants}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
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
                <Link to="/search" className="search mb-6" onClick={toggleMenu}>
                  <Search />
                  <span className="text-lg font-sans">
                    Search anything here
                  </span>
                </Link>

                {user ? (
                  <Link to="/account" onClick={toggleMenu}>
                    <button className="button">{user.name}</button>
                  </Link>
                ) : (
                  <Link to="/login" onClick={toggleMenu}>
                    <button className="button">Login</button>
                  </Link>
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

const headerVariants = {
  hidden: { y: '-100%' },
  visible: { y: 0, transition: { ...spring, delay: 0.25 } }
}

const menuVariants = {
  expanded: { x: 0 },
  collapsed: { x: '-100%' }
}

export default Header
