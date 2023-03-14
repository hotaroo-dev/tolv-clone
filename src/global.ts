const tween = {
  type: 'tween',
  duration: 0.5
}

const spring = {
  type: 'spring',
  stiffness: 100,
  damping: 20
}

const imageDelay = {
  ...spring,
  delay: 0.35
}

const textDelay = {
  ...tween,
  delay: 0.4
}

const opacityVariants = {
  hidden: { opacity: 0, transition: { delay: 0.25 } },
  visible: { opacity: 1 },
  exit: { opacity: 0, transition: { type: 'tween', duration: 0.4 } }
}

const formVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1 }
}

const linear = {
  type: 'tween',
  duration: 0.25
}

export { spring, linear, imageDelay, textDelay, opacityVariants, formVariants }
