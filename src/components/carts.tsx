import React from 'react'
import { motion } from 'framer-motion'
import { useRecoilValue } from 'recoil'
import { cartsState } from '../atom'

const Carts: React.FC<{ openCart: boolean }> = ({ openCart }) => {
  const carts = useRecoilValue(cartsState)

  return (
    <motion.section
      className="font-sans carts carts-size md:mx-16 lg:mx-20 xl:left-[57.5%] xl:right-0 xl:mx-auto"
      variants={cartsVariants}
      initial={false}
      animate={openCart ? 'expanded' : 'collapsed'}
      transition={{ type: 'tween', duration: 0.25 }}
    >
      <div className="mb-4">
        {carts.length ? null : <p className="text-center">No Cart</p>}
      </div>
      <div>
        <p className="total flex justify-between relative py-4 text-gray-500 uppercase">
          Total <span>$0.00</span>
        </p>
        <button className="w-full py-2 bg-black text-white font-medium rounded-[5px]">
          checkout
        </button>
      </div>
    </motion.section>
  )
}

const cartsVariants = {
  expanded: { opacity: 1, scale: 1, display: 'block' },
  collapsed: {
    opacity: 0,
    scale: 0.95,
    transitionEnd: {
      display: 'none'
    }
  }
}

export default Carts
