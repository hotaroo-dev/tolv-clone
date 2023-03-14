import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import { Arrow } from '../components/svg'
import { products } from '../products'
import 'react-lazy-load-image-component/src/effects/blur.css'

const ProductDisplay: React.FC<{ offset?: number }> = ({ offset }) => {
  return (
    <div className="products">
      {products.slice(0, offset).map(product => (
        <Link
          to={`/products/${product.id}`}
          key={product.id}
          className={`product${product.large ? ' large' : ''}`}
          state={{ type: product.type }}
        >
          <LazyLoadImage
            className="image"
            src={`./${product.id}/${product.id}.jpg`}
            placeholderSrc={`./${product.id}/${product.id}.jpg`}
            alt={product.id}
            effect="blur"
          />
          <div className="product-info">
            <h4 className="font-bold">{product.name}</h4>
            <p className="font-normal mb-2">{product.type}</p>
            <Arrow />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ProductDisplay
