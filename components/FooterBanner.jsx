// import React from 'react';
// import Image from 'next/image';

// import headphones from '../public/assets/headphones.webp';

// const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
//   return (
//     <div className="p-10 md:p-20 bg-red-600 rounded-xl relative h-[28rem] text-white w-full mt-[5rem]">
//       <div className="flex justify-between">
//        <div className="flex flex-col">
//         <p className='m-[18px]'>upto</p>
//         <h3 className="text-white text-[70px] ml-[25px] font-extrabold">30 %</h3>
//         <h3 className="text-white text-[70px] ml-[25px] font-extrabold">OFF</h3>

//        </div>
//       <div>
 
//       <div className="relative w-[400px] h-[400px]">
//           <Image src={headphones} alt="Headphones" layout="fill" objectFit="cover" />
//         </div>
//       </div>
    

//       <div className="flex flex-col">
        
//         <p className='m-[18px]'>Beats Solo Air</p>
//         <h3 className="font-bold text-3xl md:text-5xl">Summer Sale</h3>
        
//         <p className='m-[18px]'>Best Headphones in market</p>
       
//       </div>
    
//     </div>
//   </div>
//   )
// }

// export default FooterBanner

import React from 'react';
import Image from 'next/image';

import headphones from '../public/assets/headphones.webp';

const FooterBanner = () => {
  return (
    <div className="p-10 md:p-20 bg-red-600 rounded-xl relative h-[28rem] text-white w-full mt-[5rem]">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-lg md:text-xl">upto</p>
          <h3 className="text-white text-4xl md:text-7xl font-extrabold ml-2 md:ml-0">30 %</h3>
          <h3 className="text-white text-4xl md:text-7xl font-extrabold ml-2 md:ml-0">OFF</h3>
        </div>
        <div className="relative w-full md:w-[400px] h-48 md:h-[400px]">
          <Image src={headphones} alt="Headphones" layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col items-center md:items-start">
          <p className="text-lg md:text-xl">Beats Solo Air</p>
          <h3 className="font-bold text-2xl md:text-5xl">Summer Sale</h3>
          <h3 className="font-bold text-2xl md:text-5xl">Best Headphones in market</h3>
        </div>
      </div>
    </div>
  );
}

export default FooterBanner;
