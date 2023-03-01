import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { imageDelay, opacityVariants, textDelay } from '../global'
import HeroText from './hero-text'

const offset = window.innerHeight
const rows = [...Array(3)]

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
    [offset * 2 - 2, offset * 2 - 1],
    [0, 1]
  )
  const opacity = [opacityOne, opacityTwo, opacityThree]

  return (
    <div className="hero-large">
      <motion.div
        className="image-column"
        variants={opacityVariants}
        transition={imageDelay}
      >
        {rows.map((_, idx) => (
          <div
            key={idx}
            className="bg-image"
            style={{ backgroundImage: `url(./bg${idx + 1}.jpg)` }}
          ></div>
        ))}
      </motion.div>

      <motion.div
        className="text-column"
        variants={opacityVariants}
        transition={textDelay}
      >
        {rows.map((_, idx) => (
          <div key={idx} className="text-slide">
            <HeroText idx={idx} opacity={opacity} />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default HeroLarge
