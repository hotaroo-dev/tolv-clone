import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { imageDelay, rows, textDelay } from './hero'
import { containerVariants } from '../routes'
import { heroText } from '../products'

const offsetOne = window.outerHeight * 0.3
const offsetTwo = window.outerHeight + offsetOne

const HeroMobile: React.FC = () => {
  const { scrollY } = useScroll()
  const opacityOne = useTransform(scrollY, [offsetOne, offsetOne + 10], [1, 0])
  const opacityTwo = useTransform(scrollY, [offsetTwo, offsetTwo + 10], [1, 0])
  const opacity = [opacityOne, opacityTwo, 1]

  return (
    <div className="hero-mobile">
      {rows.map((_, idx) => (
        <div key={idx} className="slide">
          <motion.div
            className="image"
            style={{ backgroundImage: `url(./bg${idx + 1}.jpg)` }}
            variants={containerVariants}
            transition={imageDelay}
          ></motion.div>

          <motion.div
            style={{ opacity: opacity[idx] }}
            className="text-wrapper"
            variants={containerVariants}
            transition={textDelay}
          >
            <h2 className="text-style mb-6">{heroText[idx].text}</h2>
            <h6 className="links">
              Featuring{' '}
              {heroText[idx].links.map((link, i) => {
                const sep =
                  i === heroText[idx].links.length - 1
                    ? ''
                    : i === heroText[idx].links.length - 2
                    ? ' and '
                    : ', '
                return (
                  <label key={i}>
                    <a href="#">{link}</a>
                    {sep}
                  </label>
                )
              })}
            </h6>
          </motion.div>
        </div>
      ))}
    </div>
  )
}

export default HeroMobile
