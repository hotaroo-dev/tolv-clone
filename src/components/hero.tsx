import React from 'react'
import { motion } from 'framer-motion'
import HeroLarge from './hero-large'
import HeroMobile from './hero-mobile'

const tween = {
  type: 'tween',
  duration: 0.5
}

export const spring = {
  type: 'spring',
  stiffness: 100,
  damping: 20
}

export const imageDelay = {
  ...spring,
  delay: 0.45
}

export const textDelay = {
  ...tween,
  delay: 0.5
}

export const rows = Array(3).fill(0)

const Hero: React.FC = () => {
  return (
    <motion.div
      className="hero"
      variants={{}}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <HeroLarge />
      <HeroMobile />
    </motion.div>
  )
}

export default Hero
