import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="flex justify-between mx-[6px] my-[18px] relative">
      <p className="text-gray-500 text-lg">
        <Link href="/">Electronic Store</Link>
      </p>

      <button type="button" className="text-gray-500 text-25 cursor-pointer relative transition-transform duration-400 transform hover:scale-110 focus:outline-none" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="absolute top-0 right-[-8px] text-xs text-white bg-red-500 w-4 h-4 rounded-full flex items-center justify-center font-semibold">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar