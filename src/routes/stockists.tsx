import React, { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { imageDelay, opacityVariants, textDelay } from '../global'
import { Arrow } from '../components/svg'

const Stockists: React.FC = () => {
  const stockistsRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute('id')
          document
            .querySelector(`.stockists li span[data-id=${id}]`)
            ?.parentElement?.classList.toggle('active', entry.isIntersecting)
        })
      },
      { threshold: 0.2 }
    )

    document.querySelectorAll('main div[id]').forEach(entry => {
      observer.observe(entry)
    })
  }, [])

  const handleClick = (event: React.MouseEvent) => {
    const id = event.currentTarget.getAttribute('data-id')
    const content = document.querySelector(`main div[id=${id}]`)
    content?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <>
      <Helmet>
        <title>Tolv - Stockists</title>
      </Helmet>
      <div className="screen">
        <motion.div
          className="h-screen md:w-1/2 md:fixed md:left-0"
          variants={opacityVariants}
          transition={textDelay}
        >
          <div className="spacing mt-24 h-screen md:h-auto md:mt-[20vh]">
            <h2 className="font-bold text-normal">Our stockists</h2>
            <ul className="stockists" ref={stockistsRef}>
              <li>
                <span data-id="australia" onClick={handleClick}>
                  Australia
                </span>
              </li>
              <li>
                <span data-id="malaysia" onClick={handleClick}>
                  Malaysia
                </span>
              </li>
              <li>
                <span data-id="newzealand" onClick={handleClick}>
                  New Zealand
                </span>
              </li>
              <li>
                <span data-id="southkorea" onClick={handleClick}>
                  South Korea
                </span>
              </li>
              <li>
                <span data-id="taiwan" onClick={handleClick}>
                  Taiwan
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="h-[75vh] row-start-1 md:h-screen md:col-start-2"
          variants={opacityVariants}
          transition={imageDelay}
        >
          <div
            className="bg-image"
            style={{ backgroundImage: 'url(./nightcity.jpg)' }}
          ></div>
        </motion.div>
      </div>

      <div className="content-wrap">
        {stockists.map(stockist => (
          <div id={stockist.country} key={stockist.country}>
            <div className="country">
              <p className="mb-8 md:mb-4">
                {stockist.text
                  ? stockist.text
                  : stockist.country[0].toUpperCase() +
                    stockist.country.slice(1)}
              </p>
            </div>
            {stockist.cities &&
              Object.entries(stockist.cities).map(([city, branches]) => (
                <div key={city} className="stockist-wrapper">
                  <p className="city">{city}</p>
                  {branches.map((branch, idx) => (
                    <Location key={idx} branch={branch} />
                  ))}
                </div>
              ))}
            {stockist.branches && (
              <div className="stockist-wrapper">
                {stockist.branches.map((branch, idx) => (
                  <Location key={idx} branch={branch} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

const Location = ({ branch }: { branch: string[] }) => (
  <a className="block" href="#">
    <p className="text-2xl md:text-xl leading-tight mb-2">
      {branch.map((text, idx) => {
        const render =
          idx === 0 ? (
            <strong>{text}</strong>
          ) : (
            <>
              <br />
              {text}
            </>
          )
        return <span key={idx}>{render}</span>
      })}
    </p>
    <Arrow />
  </a>
)

interface IStockist {
  country: string
  text?: string
  branches?: string[][]
  cities?: {
    [key: string]: string[][]
  }
}

const stockists: IStockist[] = [
  {
    country: 'australia',
    cities: {
      Brisbane: [
        ['Globe West', '102 Arthur Street', 'Fortitude Valley, QLD 4006'],
        ['Trit', '129 Robertson Street', 'Fortitude Valley, QLD 4006']
      ],
      Fremantle: [['Kartique', '61 - 63 High Street', 'West End Fremantle']],
      'Gold Coast': [
        [
          'Kira & Kira',
          '2017 Gold Coast Highway',
          'Miami, Gold Coast, QLD 4220'
        ]
      ],
      Melbourne: [
        ['Globe West', 'M20-22 Parsons Avenue', 'Springvale, VIC 3171'],
        ['Trit', '412 Johnston Street', 'Abbotsford, VIC 3067'],
        ['Trit', 'Shop 3, 3-5 St Kilda Road', 'St Kilda, VIC 3182']
      ],
      Sydney: [
        [
          'Globe West',
          'Level 1 Unit 38/69',
          "O'Riordan Street",
          'Alexandria, NSW 2015'
        ],
        ['Trit', '613 Elizabeth St reet', 'Redfern, NSW 2016']
      ]
    }
  },
  {
    country: 'malaysia',
    branches: [
      [
        'Gudang Home',
        'Second Floor/ East Wing',
        'Bangsar Shopping Centre',
        'Kuala Lumpur'
      ],
      [
        'Gudang Home',
        'Level One Great Eastern Mall',
        '303 Jalan Ampang',
        '50450 Kuala Lumpur'
      ]
    ]
  },
  {
    country: 'newzealand',
    text: 'New Zealand',
    branches: [
      [
        'Dawson & Co.',
        'Showroom 38 Contellation Drive',
        'North Shore, Auckland'
      ],
      ['Dawson & Co.', 'Showroom 115 The Strand', 'Parnell, Auckland']
    ]
  },
  {
    country: 'southkorea',
    text: 'South Korea',
    branches: [
      ['linkplace', '110 Hakdong-ro, Gangnam-gu', 'Seoul, Republic of Korea']
    ]
  },
  {
    country: 'taiwan',
    branches: [
      [
        'SMUKT DESIGN',
        '2F., No. 553, Siyuan Rd., Xinzhuang Dist.',
        'New Taipei City 242, Taiwan'
      ]
    ]
  }
]

export default Stockists
