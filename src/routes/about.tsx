import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

const About: React.FC = () => {
  return (
    <motion.div>
      <Helmet>
        <title>Tolv - About us</title>
      </Helmet>
    </motion.div>
  )
}

export default About
