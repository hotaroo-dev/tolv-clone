import React from 'react'
import { motion } from 'framer-motion'
import { IProductDetail } from '../products'
import { opacityVariants, spring } from '../global'
import { Exit } from './svg'

const ProductCard: React.FC<{
  product: IProductDetail
  productId: string
  setOpenCard: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ product, productId, setOpenCard }) => {
  return (
    <motion.div
      className="z-20 w-full h-auto min-h-full md:min-h-fit md:w-[70%] font-sans absolute top-0 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-white py-10 md:py-8 px-8 md:px-16"
      style={{ boxShadow: '0px 5px 10px 0px rgb(0 0 0 / 25%)' }}
      variants={opacityVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={spring}
    >
      <div className="thumbnail-grid my-6">
        {product.cards?.length
          ? product.cards.map((card, idx) => (
              <div key={idx}>
                <img
                  className={`thumbnail${product.square ? ' square' : ''}`}
                  src={`./${productId}/${card.src}.jpg`}
                  alt={card.src}
                />
                <div className="flex items-center mt-2">
                  <div className="flex-1">
                    <h3 className="font-semibold">
                      {card.src.replace(/-/g, ' ')}
                    </h3>
                    <p>${card.price}</p>
                  </div>
                  <button className="flex items-center px-4 p-2 bg-black text-white rounded-sm">
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
