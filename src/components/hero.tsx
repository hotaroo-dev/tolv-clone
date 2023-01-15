import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants } from '../routes'

const Hero: React.FC = () => {
  return (
    <motion.div
      className="hero"
      variants={{}}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="image-column"
        variants={containerVariants}
        transition={{ type: 'tween', delay: 0.8, duration: 0.5 }}
      >
        <div
          className="image"
          style={{ backgroundImage: `url(./bg1.jpg)` }}
        ></div>
      </motion.div>
      <motion.div
        className="text-column"
        variants={containerVariants}
        transition={{ type: 'tween', delay: 0.45, duration: 0.5 }}
      >
        <div className="text-wrapper">
          <h2 className="text-style mb-6">
            Eyes rest from an afternoon in the sun. Smooth textures feel cool on
            bare feet and skin.
          </h2>
          <h6 className="links">
            Featuring{' '}
            <a href="#">
              <strong>Kitsune sofa</strong>
            </a>
            , <a href="#">armchair</a> and{' '}
            <a href="#">
              <strong>I-O coffee table (steel base)</strong>
            </a>
          </h6>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Hero
