import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useStateContext } from '../../context/StateContext';

import { getAllUser } from "../../lib/client";

const ProductDetails = ({ product, products }) => {
  const { image, title, description, price } = product;
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  }

  return (
    <div>
      <div className="product-detail-container flex gap-[40px] m-[40px] mt-[60px] text-gray-700">
        <div>
          <div className="image-container flex-1">
            <img src={image} className="product-detail-image rounded-lg bg-gray-200 w-[400px] h-[400px] cursor-pointer transition duration-300 ease-in-out hover:bg-red-500" />
          </div>
        </div>


        <div className="product-detail-desc flex-1">
          <h1 className="text-2xl font-bold">{title}</h1>
          <div className="reviews text-red-500 mt-4 flex gap-2 items-center">
          <div className="flex items-center gap-2 mt-2">
            <AiFillStar className="text-red-500" />
            <AiFillStar className="text-red-500" />
            <AiFillStar className="text-red-500" />
            <AiFillStar className="text-red-500" />
            <AiOutlineStar className="text-red-500" />
          </div>
          <p className="text-sm mt-o">(20)</p>
          </div>
          <h4 className="text-xl font-semibold mt-2">Details: {description}</h4>
          <p className="price font-bold text-2xl mt-8 text-red-500">${price}</p>
          <div className="quantity flex items-center gap-[34px]">
            <h3>Quantity:</h3>
            <p className="quantity-desc flex items-center mt-2">
              <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>



          <div className="buttons flex gap-8">
            <button type="button"  onClick={() => onAdd(product, qty)} className="add-to-cart bg-white text-red-500 border border-red-500 px-5 py-2 mt-8 text-lg font-medium cursor-pointer transform transition-transform duration-500 hover:scale-110">
              Add to Cart
            </button>
            <button type="button" onClick={handleBuyNow} className="buy-now bg-red-500 text-white px-5 py-2 mt-8 text-lg font-medium cursor-pointer transform transition-transform duration-500 hover:scale-110">
              Buy Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const products = await getAllUser();
  console.log("products:", products);

  const paths = products.map((product) => ({
    params: { id: product.id.toString() }
  }));

  console.log("paths:", paths);

  return {
    paths,
    fallback: false
  };
}
export async function getStaticProps({ params }) {
  const products = await getAllUser();
  console.log("products:", products);
  console.log("params:", params);

  const productId = parseInt(params.id);
  const product = products.find((product) => product.id === productId);

  console.log("product:", product);

  if (!product) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      products,
      product
    }
  };
}

export default ProductDetails;
