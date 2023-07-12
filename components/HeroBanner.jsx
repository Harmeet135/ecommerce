import React from 'react';
import Image from 'next/image';

import headphones from '../public/assets/headphones.webp';
const HeroBanner = ({ heroBanner }) => {
  return (
    <div style={{ backgroundColor: '#dcdcdc' }} className="p-[100px] md:p-20  rounded-xl relative md:h-[500px] xs:h-[550px] h-[46rem] text-white w-full">
    <div>
      <p className="beats-solo text-black">Beats Solo Air</p>
      <h3 className="text-4xl mt-1 text-black text-10xl uppercase font-bold">Summer Sale</h3>
      <h1 className="text-9xl ml-[-20px] uppercase">30 % OFF</h1>
      <div>
      </div>
      <div>
     <button type="button" className="rounded-lg px-4 py-2 bg-red-500 text-white border-none mt-8 text-base font-medium cursor-pointer z-10">Shop Now</button>
        <div className="desc">
        <Image src={headphones}/>
          <h5 className="mb-3">Best in Market</h5>
          <p>{heroBanner.desc}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeroBanner