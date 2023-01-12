import React from 'react'
import { motion } from 'framer-motion'

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0 } }
}

const Index: React.FC = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ type: 'tween', delay: 0.8, duration: 0.5 }}
      className="hero"
    ></motion.div>
  )
}

export default Index
