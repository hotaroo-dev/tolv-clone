import React, { useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { containerVariants } from '../routes'
import { imageDelay, rows, spring, textDelay } from './hero'
import { heroText } from '../products'

const offset = window.innerHeight

const HeroLarge: React.FC = () => {
  const { scrollY } = useScroll()
  const opacityOne = useTransform(scrollY, [offset - 3, offset - 2], [1, 0])
  const opacityTwo = useTransform(
    scrollY,
    [offset - 2, offset - 1, offset * 2 - 3, offset * 2 - 2],
    [0, 1, 1, 0]
  )
  const opacityThree = useTransform(
    scrollY,
    [offset * 2 - 2, offset * 2 - 1, offset * 3 - 3, offset * 3 - 2],
    [0, 1, 1, 0]
  )
  const opacity = [opacityOne, opacityTwo, opacityThree]

  return (
    <div className="hero-large">
      <motion.div
        className="image-column"
        variants={containerVariants}
        transition={imageDelay}
      >
        {rows.map((_, idx) => (
          <div
            key={idx}
            className="image"
            style={{ backgroundImage: `url(./bg${idx + 1}.jpg)` }}
          ></div>
        ))}
      </motion.div>

      <motion.div
        className="text-column"
        variants={containerVariants}
        transition={textDelay}
      >
        {rows.map((_, idx) => (
          <div key={idx} className="text-slide">
            <motion.div
              className="text-wrapper"
              style={{ opacity: opacity[idx] }}
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
      </motion.div>
    </div>
  )
}

export default HeroLarge
