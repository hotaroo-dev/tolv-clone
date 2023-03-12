import React from 'react'
import { motion, MotionValue, Variants } from 'framer-motion'
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
      <h2 className="text-style mb-5">{heroText[idx].text}</h2>
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

interface IText {
  text: string
  links: string[]
}

const heroText: IText[] = [
  {
    text: 'Eyes rest from an afternoon in the sun. Smooth textures feel cool on bare feet and skin.',
    links: ['Kitsune sofa', 'armchair', 'I-O coffee table (steel base)']
  },
  {
    text: 'A sip of cocktail brings back memories of the beach.',
    links: ['Portobello armchair', 'foot stool (wood base)']
  },
  {
    text: 'Sunset is a good time to gather. Evening light bathes the space in warm tones and colours.',
    links: ['Copal', 'Fromage']
  }
]

export default HeroText
