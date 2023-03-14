import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { imageDelay, opacityVariants, textDelay } from '../global'

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tolv - About us</title>
      </Helmet>
      <div className="screen">
        <motion.div
          className="left-column"
          variants={opacityVariants}
          transition={imageDelay}
        >
          <div
            className="bg-image h-full grid place-items-center"
            style={{
              backgroundImage: `url(./bg4.jpg)`
            }}
          >
            <h1 className="text-white text-5xl sm:text-6xl lg:text-[68px] font-bold">
              Time for Living
            </h1>
          </div>
        </motion.div>

        <motion.div
          className="right-column bg-[#efcb56]"
          variants={opacityVariants}
          transition={textDelay}
        >
          <div className="wrapper">
            <div className="product-info">
              <h2 className="name">About Tolv</h2>
            </div>
            <div className="py-8">
              <p className="paragraph">
                Take time for life’s little moments. Browsing the news as you
                eat breakfast. Setting the table for hungry guests. Sinking in
                to your favourite armchair. At Tolv, your daily rituals are at
                the heart of our design. We make furniture to give you your best
                day, every day.
              </p>
            </div>
          </div>

          <div className="md:flex space-y-2">
            <div className="button-wrapper">
              <h3>Our designers</h3>
            </div>
            <div className="button-wrapper">
              <h3>Contact us</h3>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="panels">
        <div className="spacing">
          <img src="./breakfast.png" alt="eating breakfast" />
          <div className="mt-8 space-y-4 md:pr-16">
            <h2 className="text-normal text-[28px]">
              We make furniture for modern homes. Tolv means “12” in Danish,
              describing a framework for living that’s centred around your day.
              Our thoughtful and considered pieces work for you around the
              clock.
            </h2>
            {aboutText.map((text, idx) => (
              <p key={idx} className="text-small">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

const aboutText: string[] = [
  'Tolv upholds the Scandinavian ideals of well-made, well-designed furniture, yet has an appreciation of diverse cultures and an international outlook.',
  'For our global customer, we call on designers from across the world to create original furniture, based on their expert sensibilities. Like them, we are obsessive about the finer details, and the collection is made in our own factory where we can keep a keen eye on cost and quality.',
  'We believe good value is about staying useful over time. With our collection, your investment in good furniture will go far. We take a world-view on environmental issues and believe in sourcing and treating the raw materials we use with respect and care. Tolv is committed to producing responsibly and fairly, for everything we make and everyone that works for us.'
]

export default About
