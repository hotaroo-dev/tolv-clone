import React from 'react'
import { motion } from 'framer-motion'
import { IProductDetail } from '../products'
import { opacityVariants } from '../global'
import { Exit } from './svg'
import { useRecoilState, useRecoilValue } from 'recoil'
import { cartsState, ICart, userState } from '../atom'
import axiosClient from '../helpers/axios-client'

const ProductCard: React.FC<{
  product: IProductDetail
  productId: string
  setOpenCard: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ product, productId, setOpenCard }) => {
  const [carts, setCarts] = useRecoilState(cartsState)
  const user = useRecoilValue(userState)

  const addToCart = (cart: ICart) => {
    if (carts.some(c => c.name === cart.name)) {
      setCarts(carts =>
        carts.map(c =>
          c.name === cart.name ? { ...c, count: (c.count || 0) + 1 } : c
        )
      )
      user && axiosClient.put('/cart', { name: cart.name })
    } else {
      setCarts(carts => [...carts, { ...cart, count: 1 }])
      user && axiosClient.post('/cart', { ...cart, id: user?.id })
    }
  }

  return (
    <motion.div
      className="z-20 min-h-full md:min-h-fit md:w-[70%] font-sans shadow-card absolute top-0 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-white py-10 md:py-8 px-8 md:px-16"
      variants={opacityVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ type: 'tween', duration: 0.25 }}
    >
      <div className="thumbnail-grid my-6">
        {product.cards?.length
          ? product.cards.map((card, idx) => (
              <div key={idx}>
                <img
                  className={`thumbnail${product.square ? ' square' : ''}`}
                  src={`/${productId}/${card.name}.jpg`}
                  alt={card.name}
                />
                <div className="flex items-center mt-2">
                  <div className="flex-1">
                    <h3 className="font-semibold">
                      {card.name.replace(/-/g, ' ')}
                    </h3>
                    <p className="text-gray-500">${card.price}</p>
                  </div>
                  <button
                    className="flex items-center px-4 p-2 bg-black text-white rounded-sm active:translate-y-[1px] duration-200"
                    onClick={() =>
                      addToCart({
                        ...card,
                        productId
                      })
                    }
                  >
                    <p className="text-base leading-none">Add</p>
                  </button>
                </div>
              </div>
            ))
          : null}
      </div>
      <div
        className="w-6 h-6 cursor-pointer absolute top-5 right-8 md:top-3 md:right-4"
        onClick={() => setOpenCard(false)}
      >
        <Exit />
      </div>
    </motion.div>
  )
}

export default ProductCard
