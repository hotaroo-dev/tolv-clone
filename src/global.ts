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
  delay: 0.45
}

const textDelay = {
  ...tween,
  delay: 0.5
}

const opacityVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0 } }
}

export { spring, imageDelay, textDelay, opacityVariants }
