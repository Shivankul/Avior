import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollection from '../components/Products/GenderCollection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductsDetails from '../components/Products/ProductsDetails'

const Home = () => {
  return (
    <div>
        <Hero/>
        <GenderCollection/>
        <NewArrivals/>

        {/* best Seller  */}
        <h2 className='text-center text-3xl font-bold mb-4'>Best Seller</h2>
        
        <ProductsDetails/>
    </div>
  )
}

export default Home