import React from 'react'
import { motion, MotionValue, Variants } from 'framer-motion'
import { heroText } from '../products'
import { textDelay } from '../global'

interface Props {
  idx: number
  opacity: (number | MotionValue<number>)[]
  variants?: Variants
}

const HeroText: React.FC<Props> = ({ idx, opacity, variants }) => {
  return (
    <motion.div
      style={{ opacity: opacity[idx] }}
      className="text-wrapper"
      variants={variants}
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
  )
}

export default HeroText
