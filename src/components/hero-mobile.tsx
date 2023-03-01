import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import HeroText from './hero-text'
import { imageDelay, opacityVariants } from '../global'

const offsetOne = window.outerHeight * 0.3
const offsetTwo = window.outerHeight + offsetOne

const HeroMobile: React.FC = () => {
  const { scrollY } = useScroll()
  const opacityOne = useTransform(scrollY, [offsetOne - 5, offsetOne], [1, 0])
  const opacityTwo = useTransform(scrollY, [offsetTwo - 5, offsetTwo], [1, 0])
  const opacity = [opacityOne, opacityTwo, 1]

  return (
    <div className="hero-mobile">
      {[...Array(3)].map((_, idx) => (
        <div key={idx} className="slide">
          <motion.div
            className="bg-image"
            style={{ backgroundImage: `url(./bg${idx + 1}.jpg)` }}
            variants={opacityVariants}
            transition={imageDelay}
          ></motion.div>

          <HeroText idx={idx} opacity={opacity} variants={opacityVariants} />
        </div>
      ))}
    </div>
  )
}

export default HeroMobile
