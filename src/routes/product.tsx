import React, { useLayoutEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, useLocation, useParams } from 'react-router-dom'
import { productDetail } from '../products'
import { useRecoilState } from 'recoil'
import { measurementState } from '../atom'
import { imageDelay, opacityVariants, textDelay } from '../global'
import { Exit } from '../components/svg'

const Product: React.FC = () => {
  const { productId } = useParams() as unknown as { productId: string }
  const { state } = useLocation() as { state: { type: string } }
  const [showMeasurement, setShowMeasurement] = useRecoilState(measurementState)
  const product = productDetail[productId]

  const toggleMeasurement = () => {
    setShowMeasurement(prev => !prev)
  }

  useLayoutEffect(() => {
    if (showMeasurement) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [showMeasurement])

  return (
    <motion.main variants={opacityVariants} exit="exit">
      <Helmet>
        <title>Tolv - {state?.type || product.type}</title>
      </Helmet>

      <AnimatePresence>
        {!showMeasurement ? (
          <motion.div
            variants={opacityVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="product-screen">
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
                    <h5 className="paragraph">
                      {product.description.map((paragraph, idx) => (
                        <span key={idx} className="block mb-4">
                          {paragraph}
                        </span>
                      ))}
                    </h5>
                  </div>
                </div>
                <div
                  className="text-2xl md:text-lg py-12 flex items-center cursor-pointer bg-[rgba(248,248,248,.1)] md:bg-transparent md:hover:bg-[rgba(248,248,248,.4)] duration-300"
                  onClick={toggleMeasurement}
                >
                  <h3 className="flex-1 font-bold text-center">Measurements</h3>
                </div>
              </motion.div>
            </div>

            <div className="panels">
              {product.panels?.map(panel => (
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
        {showMeasurement ? (
          <motion.div
            className="z-10 h-min w-full absolute top-0 bottom-0 pt-8"
            variants={opacityVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={textDelay}
          >
            <div className="px-12 flex justify-between items-center">
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
        ) : null}
      </AnimatePresence>
    </motion.main>
  )
}

export default Product
