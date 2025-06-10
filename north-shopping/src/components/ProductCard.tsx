import React from 'react'
import { Product } from '../types/ProductType'
import "./scss/product.scss";

const ProductCard = ({sendItem}:{sendItem:Product}) => {
  return (
    <div>
      <div className="img-box"><img src={sendItem.image} alt={sendItem.title} /></div>
      <div className="text-box">
        <h3>{sendItem.title}</h3>
        <div>
            <strong>30%</strong><p>{sendItem.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
