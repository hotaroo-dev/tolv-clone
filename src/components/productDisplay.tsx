import React from 'react'
import { Link } from 'react-router-dom'
import { Arrow } from '../components/svg'
import { products } from '../products'

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
          <div
            className="bg-image bg-orange-50"
            style={{
              backgroundImage: `url(./products/${product.id}/${product.id}.jpg)`
            }}
          ></div>
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
