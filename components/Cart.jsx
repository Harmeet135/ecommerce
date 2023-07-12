import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';

import { useStateContext } from '../context/StateContext';

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity  , onRemove } = useStateContext();

  const handleCheckout = async () => {

  };

  return (
    <div className="fixed top-0 right-0 z-50 w-full h-full bg-black bg-opacity-50 transition-all duration-1000 ease-in-out" ref={cartRef}>
      <div className="h-full w-full sm:w-[400px] md:w-[600px] lg:w-[800px] bg-white ml-auto p-10 sm:p-20 relative">
        <button
          type="button"
          className="cart-heading flex items-center text-base font-medium font-semibold cursor-pointer gap-1 ml-5 sm:ml-10 border-none bg-transparent"
          onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className="heading ml-2 sm:ml-4">Your Cart</span>
          <span className="cart-num-items ml-2 sm:ml-4 text-red-500">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container mt-10 sm:mt-15 overflow-auto max-h-[70vh] px-4 sm:px-10 py-6 sm:py-10">
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 p-4 sm:p-6 border-b border-gray-300" key={item._id}>
              <img src={item.image} className="cart-product-image w-24 h-24 sm:w-[180px] sm:h-[150px] rounded-lg bg-gray-200" />
              <div className="item-desc">
                <div className="flex justify-between text-gray-700">
                  <h5 className="text-base sm:text-lg">{item.title}</h5>
                  <h4 className="text-sm sm:text-base">${item.price}</h4>
                </div>
                <div className="flex items-center mt-4 sm:mt-[60px]">
                  <div className="border border-gray-400 p-1 flex items-center">
                    <span className="minus border-r border-gray-400 text-red-500 px-2 sm:px-4 py-1 cursor-pointer" onClick={() => toggleCartItemQuantity(item._id, 'dec')}>
                      <AiOutlineMinus />
                    </span>
                    <span className="num border-r border-gray-400 text-lg px-2 sm:px-4">{item.quantity}</span>
                    <span className="plus text-green-500 px-2 sm:px-4 py-1 cursor-pointer" onClick={() => toggleCartItemQuantity(item._id, 'inc')}>
                      <AiOutlinePlus />
                    </span>
                  </div>
                  <button
                    type="button"
                    className="remove-item text-2xl text-red-500 cursor-pointer bg-transparent border-none ml-2 sm:ml-4"
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cartItems.length >= 1 && (
          <div className="cart-bottom mt-10 sm:mt-12">
            <div className="total flex justify-between">
              <h3>Subtotal:</h3>
              <h3>₹{totalPrice}</h3>
            </div>

            <div className="btn-container mt-6 sm:mt-8">
              <button type="button" className="btn" onClick={handleCheckout}>
                Pay with Credit Card
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
