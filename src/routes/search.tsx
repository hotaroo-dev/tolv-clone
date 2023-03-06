import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Arrow, Search } from '../components/svg'
import { imageDelay, opacityVariants } from '../global'
import { products } from '../products'

const SearchedProducts: React.FC = () => {
  const location = useLocation()
  const q = new URLSearchParams(location.search).get('q') as string
  const searchedProducts =
    q === ''
      ? []
      : products.filter(product => product.name.toLowerCase().includes(q))

  return (
    <motion.div
      className="search-products"
      variants={opacityVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={imageDelay}
    >
      <div className="h-[75vh] md:h-screen w-full md:w-1/2 md:fixed md:left-0 md:right-1/2 py-24 md:py-[20vh] spacing">
        <h2 className="font-bold text-3xl md:text-xl">Search</h2>
        <div className="pt-32 md:pt-[15vh]">
          <p className="text-2xl md:text-lg text-gray-700">
            Showing results of...
          </p>
          <form className="products-form">
            <input
              className="w-full text-center text-blue-600 text-xl md:text-sm md:leading-[3] normal-text leading-[4] outline-none border-b border-black"
              aria-label="Search products"
              placeholder="Type anything"
              defaultValue={q}
              name="q"
            />
            <div className="search-btn">
              <Search />
            </div>
          </form>
        </div>
      </div>

      <div className="bg-[#eae9e5] md:col-start-2 md:min-h-screen px-12 md:px-[12.5vw] py-20 md:flex flex-col justify-center">
        <p className="font-bold text-xl md:text-sm normal-text mb-12">
          {searchedProducts.length
            ? `We found ${searchedProducts.length} posts`
            : 'Sorry, there were no results.'}
        </p>
        <div className="space-y-16">
          {searchedProducts.map(product => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="block thumbnail"
            >
              <div
                className="bg-image mb-4"
                style={{
                  backgroundImage: `url(./products/${product.id}/${product.id}.jpg)`
                }}
              ></div>
              <div className="space-y-4">
                <h5 className="text-gray-700 text-2xl md:text-lg font-bold">
                  {product.name} {product.type}
                </h5>
                <Arrow />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default SearchedProducts
