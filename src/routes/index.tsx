import React from 'react'
import { Helmet } from 'react-helmet-async'
import HeroLarge from '../components/hero-large'
import HeroMobile from '../components/hero-mobile'
import ProductDisplay from '../components/productDisplay'
import { Link } from 'react-router-dom'

const Index: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tolv</title>
      </Helmet>
      <div>
        <HeroLarge />
        <HeroMobile />
      </div>
      <div className="banner">
        <div className="text-wrapper">
          <h2 className="text-style mb-4">Time for Living</h2>
          <h4 className="text-normal mb-5">
            Take time for life’s little moments. Browsing the news as you eat
            breakfast. Setting the table for hungry guests. Sinking in to your
            favourite armchair. At Tolv, your daily rituals are at the heart of
            our design. We make furniture to give you your best day, every day.
          </h4>
          <h6 className="links">
            Find out more{' '}
            <Link to="/about">
              <strong>About us</strong>
            </Link>
          </h6>
        </div>
      </div>
      <ProductDisplay offset={6} />
    </>
  )
}

export default Index
