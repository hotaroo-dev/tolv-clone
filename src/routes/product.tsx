import React, { useLayoutEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, useLocation, useParams } from 'react-router-dom'
import { productDetail } from '../products'
import { useRecoilState } from 'recoil'
import { measurementState, cardState } from '../atom'
import {
  imageDelay,
  opacityVariants,
  textDelay,
  spring,
  linear
} from '../global'
import { Exit } from '../components/svg'
import ProductCard from '../components/productCard'

const Product: React.FC = () => {
  const overlayRef = useRef<HTMLDivElement>(null)
  const { productId } = useParams() as unknown as { productId: string }
  const { state } = useLocation() as { state: { type: string } }
  const [showMeasurement, setShowMeasurement] = useRecoilState(measurementState)
  const [openCard, setOpenCard] = useRecoilState(cardState)
  const product = productDetail[productId]
  const isLarge = window.innerWidth >= 768

  const toggleMeasurement = () => {
    setShowMeasurement(prev => !prev)
  }

  useLayoutEffect(() => {
    if (showMeasurement || openCard) {
      isLarge
        ? window.scrollTo(0, 0)
        : window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [showMeasurement, openCard])

  useLayoutEffect(() => {
    if (window.innerWidth < 768) {
      document.body.style.overflow = 'auto'
      return
    }

    if (openCard) {
      document.body.style.overflow = 'hidden'
    } else {
      setTimeout(() => {
        if (overlayRef.current) overlayRef.current.style.filter = 'none'
        document.body.style.overflow = 'auto'
      }, 400)
    }
  }, [openCard])

  return (
    <>
      <Helmet>
        <title>Tolv - {state?.type || product.type}</title>
      </Helmet>

      <AnimatePresence>
        {!showMeasurement ? (
          <motion.div
            variants={
              openCard ? (isLarge ? blurVariants : displayNone) : display
            }
            ref={overlayRef}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={isLarge ? linear : spring}
          >
            <div className="screen">
              <motion.div
                className="left-column"
                variants={opacityVariants}
                transition={imageDelay}
              >
                <div
                  className="bg-image h-full"
                  style={{
                    backgroundImage: `url(./${productId}/hero.jpg)`
                  }}
                ></div>
              </motion.div>

              <motion.div
                className="right-column"
                style={{ backgroundColor: product.color }}
                variants={opacityVariants}
                transition={textDelay}
              >
                <div className="wrapper">
                  <div className="product-info">
                    <h2 className="name">{product.name}</h2>
                    <div className="type">
                      <h5>{product.type}</h5>
                      <p>
                        Designed by{' '}
                        <Link to="/" className="designer">
                          {product.designer}
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="w-full py-8">
                    <p className="paragraph">
                      {product.description.map((paragraph, idx) => (
                        <span key={idx} className="block mb-4">
                          {paragraph}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
                <div className="md:flex space-y-2">
                  <div className="button-wrapper" onClick={toggleMeasurement}>
                    <h3>Measurements</h3>
                  </div>
                  <div
                    className="button-wrapper"
                    onClick={() => setOpenCard(true)}
                  >
                    <h3>Add to Cart</h3>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="panels">
              {product.panels.map(panel => (
                <div key={panel.src[0]}>
                  <div
                    className={`w-full${
                      panel.src.length === 2 ? ' two-column' : ''
                    }${panel.space ? ' spacing' : ''}`}
                  >
                    {panel.src.map(image => (
                      <img
                        key={image}
                        src={`./${productId}/${image}.jpg`}
                        alt={image}
                      />
                    ))}
                  </div>
                  {panel.captions?.length && (
                    <p
                      className={`caption spacing${
                        panel.large
                          ? ' text-4xl font-bold'
                          : ' text-lg md:text-base md:leading-[1.1] leading-tight opacity-70'
                      }${panel.src.length === 2 ? ' two-column' : ''}`}
                    >
                      {panel.captions.map((caption, idx) => (
                        <span key={idx}>{caption}</span>
                      ))}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {showMeasurement && (
          <motion.div
            className="z-10 h-min w-full absolute top-0 bottom-0 pt-8"
            variants={opacityVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={spring}
          >
            <div className="spacing max-w-[800px] flex justify-between items-center">
              <p className="text-2xl font-bold">Measurements</p>
              <div
                className="w-5 h-5 cursor-pointer"
                onClick={toggleMeasurement}
              >
                <Exit />
              </div>
            </div>
            <div className="h-auto w-full">
              <img className="mx-auto" src={`./${productId}/diagram.svg`} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {openCard && (
          <ProductCard
            product={product}
            productId={productId}
            setOpenCard={setOpenCard}
          />
        )}
      </AnimatePresence>
    </>
  )
}

const blurVariants = {
  hidden: { filter: 'none' },
  visible: { filter: 'blur(20px)' }
}

const display = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, display: 'block' }
}

const displayNone = {
  hidden: { opacity: 1, display: 'block' },
  visible: {
    opacity: 0,
    transitionEnd: {
      display: 'none'
    }
  }
}

export default Product
