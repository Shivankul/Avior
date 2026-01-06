import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollection from '../components/Products/GenderCollection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductsDetails from '../components/Products/ProductsDetails.jsx'
import ProductGrid from '../components/Products/ProductGrid.jsx'
import FeaturedCollections from '../components/Products/FeaturedCollections.jsx'
import FeaturedSection from '../components/Products/FeaturedSection.jsx'

const Home = () => {
  const placeholderProducts = [
    {
      _id : 1,
      name : "Product 1",
      price: "100",
      images : [{url : "https://picsum.photos/500/500?random=7"}]
    },
    {
      _id : 2,
      name : "Product 2",
      price: "200",
      images : [{url : "https://picsum.photos/500/500?random=8"}]
    },
    {
      _id : 3,
      name : "Product 3",
      price: "300",
      images : [{url : "https://picsum.photos/500/500?random=9"}]
    },
    {
      _id : 4,
      name : "Product 4",
      price: "500",
      images : [{url : "https://picsum.photos/500/500?random=10"}]
    },
    {
      _id : 5,
      name : "Product 5",
      price: "100",
      images : [{url : "https://picsum.photos/500/500?random=11"}]
    },
    {
      _id : 6,
      name : "Product 6",
      price: "200",
      images : [{url : "https://picsum.photos/500/500?random=12"}]
    },
    {
      _id : 7,
      name : "Product 7",
      price: "300",
      images : [{url : "https://picsum.photos/500/500?random=13"}]
    },
    {
      _id : 8,
      name : "Product 8",
      price: "500",
      images : [{url : "https://picsum.photos/500/500?random=14"}]
    }
  ]
  return (
    <div className='bg-gray-100'>
        <Hero/>
        <GenderCollection/>
        <NewArrivals/>

        {/* best Seller  */}
        <h2 className='text-center text-3xl font-bold mb-4'>Best Seller</h2>

        <ProductsDetails/>

        <div className='container mx-auto'>
          <h2 className='text-3xl text-center font-bold mb-4'>
              Top Wear Of Women
          </h2>
          <ProductGrid products={placeholderProducts}/>
        </div>

        <FeaturedCollections/>

        <FeaturedSection/>
    </div>
  )
}

export default Home