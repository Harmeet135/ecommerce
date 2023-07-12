import React from 'react';


import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="flex flex-wrap justify-center gap-20 mt-20 w-full">
  {products?.map((product) => (
    <div className="w-48 h-66" key={product._id}>
      <Product product={product} />
    </div>
  ))}
</div>


    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const productsQuery = 'https://fakestoreapi.com/products';
  const productsResponse = await fetch(productsQuery);
  const products = await productsResponse.json();

  const bannerQuery = 'https://fakestoreapi.com/products';
  const bannerResponse = await fetch(bannerQuery);
  const bannerData = await bannerResponse.json();

  return {
    props: { products, bannerData }
  };
};


export default Home;
