import React, { useLayoutEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { AnimatePresence, motion, spring } from 'framer-motion'
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
    <main>
      <Helmet>
        <title>Tolv - {state?.type || product.type}</title>
      </Helmet>
      <motion.div
        className="h-full"
        variants={opacityVariants}
        initial="hidden"
        animate={showMeasurement ? 'hidden' : 'visible'}
        exit="exit"
        transition={spring}
      >
        <motion.div
          className="h-[75vh]"
          variants={opacityVariants}
          transition={imageDelay}
        >
          <div
            className="bg-image h-full"
            style={{
              backgroundImage: `url(./products/${productId}/hero.jpg)`
            }}
          ></div>
        </motion.div>

        <motion.div
          className="text-column flex flex-col"
          style={{ backgroundColor: product.color }}
          variants={opacityVariants}
          transition={textDelay}
        >
          <div className="px-12 flex-1">
            <div className="flex justify-between my-24">
              <h2 className="font-bold text-3xl">{product.name}</h2>
              <div className="font-normal mr-5 text-lg leading-tight">
                <h5 className="">{product.type}</h5>
                <p className="">
                  Designed by{' '}
                  <Link
                    to="/"
                    className="font-bold underline underline-offset-2"
                  >
                    {product.designer}
                  </Link>
                </p>
              </div>
            </div>
            <div className="w-full py-8 pr-1">
              <h5 className="font-light text-3xl leading-[1.1] tracking-tighter">
                {product.description.map((paragraph, idx) => (
                  <span key={idx} className="block mb-4">
                    {paragraph}
                  </span>
                ))}
              </h5>
            </div>
          </div>
          <div
            className="text-center"
            onClick={() => setShowMeasurement(prev => !prev)}
          >
            <div className="text-2xl py-12 text-center cursor-pointer bg-[rgba(248,248,248,.1)] duration-300">
              <h3 className="font-bold">Measurements</h3>
            </div>
          </div>
        </motion.div>

        <div className="py-52 space-y-52">
          {product.panels?.map(panel => (
            <div key={panel.src[0]}>
              <div
                className={`w-full${
                  panel.src.length === 2 ? ' grid grid-cols-2 gap-8' : ''
                }${panel.space ? ' px-12' : ''}`}
              >
                {panel.src.map(image => (
                  <img
                    key={image}
                    src={`./products/${productId}/${image}.jpg`}
                    alt={image}
                  />
                ))}
              </div>
              {panel.captions?.length && (
                <p
                  className={`w-full mt-5 px-12 -tracking-[0.01em] text-black${
                    panel.large
                      ? ' text-4xl font-bold'
                      : ' text-lg leading-tight opacity-70'
                  }${panel.src.length === 2 ? ' grid grid-cols-2 gap-8' : ''}`}
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

      <AnimatePresence>
        {showMeasurement ? (
          <motion.div
            className="z-10 h-auto w-full absolute top-0 pt-8"
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
              <img src={`./products/${productId}/diagram.svg`} />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  )
}

export default Product
