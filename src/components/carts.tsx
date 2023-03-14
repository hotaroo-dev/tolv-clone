import React, { useEffect } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { useRecoilState, useRecoilValue } from 'recoil'
import { cartsState, tokenState } from '../atom'
import axiosClient from '../helpers/axios-client'

interface ICart {
  id: string
  product_id: string
  name: string
  price: number
  count?: number
  updated_at: string
  user_id: string
}

const Carts: React.FC<{ openCart: boolean }> = ({ openCart }) => {
  const { scrollY } = useScroll()
  const translateY = useTransform(scrollY, [0, 20], [0, 12])
  const token = useRecoilValue(tokenState)
  const [carts, setCarts] = useRecoilState(cartsState)
  const total = carts.reduce(
    (currentTotal, { price, count }) => currentTotal + price * (count || 0),
    0
  )

  const deleteCard = (name: string) => {
    setCarts(carts => carts.filter(cart => cart.name !== name))
    axiosClient.delete('/cart', { data: { name: name } })
  }

  useEffect(() => {
    if (!token) return
    ;(async () => {
      const {
        data: { carts }
      } = await axiosClient.get('/cart')
      setCarts(
        carts.map((cart: ICart) => {
          return {
            productId: cart.product_id,
            name: cart.name,
            price: cart.price,
            count: cart.count
          }
        })
      )
    })()
  }, [])

  return (
    <motion.section
      className="font-sans carts carts-size md:mx-16 lg:mx-20 xl:left-[57.8%] xl:right-0 xl:mx-auto"
      style={{ translateY }}
      variants={cartsVariants}
      initial={false}
      animate={openCart ? 'expanded' : 'collapsed'}
      transition={{ type: 'tween', duration: 0.25 }}
    >
      <div className="mb-4 grid grid-cols-1 gap-4">
        <AnimatePresence>
          {carts.length ? (
            carts.map(cart => (
              <motion.div
                key={cart.name}
                className="flex"
                variants={cartVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: 'spring', stiffness: 60, damping: 18 }}
              >
                <img
                  className="w-32 h-28"
                  src={`${import.meta.env.BASE_URL}/products/${
                    cart.productId
                  }/${cart.name}.jpg`}
                  alt={cart.name}
                />
                <div className="flex-1 flex flex-col ml-4 mt-2">
                  <h3 className="text-sm font-semibold uppercase">
                    {cart.name.replace(/-/g, ' ')}
                  </h3>
                  <p className="text-gray-500">${Number(cart.price)}.00</p>
                  <div className="flex-1 flex items-end justify-between">
                    <span className="text-gray-500 text-[90%]">
                      x{cart.count}
                    </span>
                    <button
                      className="px-4 py-1 rounded-sm text-red-500 bg-red-200 border border-red-500 active:translate-y-[1px] duration-200"
                      onClick={() => deleteCard(cart.name)}
                    >
                      <p>Delete</p>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.p
              className="text-center"
              initial={{ opacity: 0, display: 'none' }}
              animate={{ opacity: 1, display: 'inline-block' }}
              transition={{ type: 'tween', duration: 0.25, delay: 0.4 }}
            >
              No Cart
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <div>
        <p className="total flex justify-between relative py-4 font-semibold text-gray-500 uppercase">
          Total <span>${total}.00</span>
        </p>
        <button className="w-full py-2 bg-black text-white font-medium rounded-[5px] active:translate-y-[1px] duration-200">
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

const cartVariants = {
  hidden: { opacity: 0, x: 25 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -25, transition: { type: 'tween', duration: 0.4 } }
}

export default Carts
