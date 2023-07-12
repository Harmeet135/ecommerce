import React from 'react';
import Link from 'next/link';

const Product = ({ product: { image, title, id, price } }) => {
  return (
    <div>
      <Link href={`/product/${id}`}>
        <div className="product-card">
          <img 
            src={(image)}
            width={250}
            height={250}
            className=" w-24 h-24 object-contain"
          />
          <p className="product-name">{title}</p>
          <p className="product-price">₹{price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product