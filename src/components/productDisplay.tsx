import React from 'react'
import { Link } from 'react-router-dom'
import { Arrow } from '../components/svg'
import { products } from '../products'

const ProductDisplay: React.FC = () => {
  return (
    <div className="products">
      {products.map((product, idx) => (
        <div key={idx} className={`product${product.large ? ' large' : ''}`}>
          <Link to={`/products/${product.id}`} state={{ name: product.name }}>
            <div
              className="image"
              style={{ backgroundImage: `url(./products/product${idx}.jpg)` }}
            ></div>
            <div className="product-info">
              <h4 className="font-bold">{product.name}</h4>
              <p className="font-normal mb-2">{product.type}</p>
              <Arrow />
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ProductDisplay
