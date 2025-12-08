import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from "../../assets/front.jpg";

const Hero = () => {
  return (
    <section className='relative overflow-hidden'>
        <img src= {heroImg} alt="Hero" className="w-full h-[400px] md:h-[600px] lg:h-[700px] object-cover"/>

        <div className='inset-0 absolute bg-opacity-5 flex items-center justify-center'>
            <div className='text-gray-900 text-center p-6'>
                <h1 className='text-4xl md:text-8xl font-bold tracking-tighter uppercase mb-4 text-white'>
                    Vacation <br /> Ready
                </h1>
                <p className='text-sm tracking-tighter md:text-lg mb-6'>
                    Explore our Vacation-ready Outfits with fast worldwide shipping.
                </p>
                <Link to='#' className='bg-white text-gray-950 px-6 py-2 rounded-full text-lg hover:bg-blue-200'>
                    Shop Now
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Hero