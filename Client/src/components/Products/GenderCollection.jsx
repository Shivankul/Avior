import React from 'react'
import menCollection from "../../assets/mencollection.jpg"
import womenCollection from "../../assets/womencollection.jpg"
import { Link } from 'react-router-dom'

const GenderCollection = () => {
  return (
    <section className='py-16 px-4 lg:px-0'>
        <div className='container mx-auto flex flex-col md:flex-row gap-6 md:gap-8'>
            {/* women collection  */}
            <div className='relative flex-1'>
                <img src={womenCollection} alt="Women Collection Here..."  className='w-full h-[350px] sm:h-[450px] md:h-[600px] object-cover'/>
                <div className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-4 '>
                    <h2 className='text-2xl font-bold text-gray-900 mb-3'>Women's Collections</h2>
                    <Link to="collections/all?gender=Women" className='text-gray-900 underline'> Shop Now </Link>
                </div>
            </div>
            {/* men collections  */}
            <div className='relative flex-1'>
                <img src={menCollection} alt="men Collection Here..."  className='w-full h-[600px] object-cover'/>
                <div className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-4 '>
                    <h2 className='text-2xl font-bold text-gray-900 mb-3'>Men's Collections</h2>
                    <Link to="collections/all?gender=Men" className='text-gray-900 underline'> Shop Now </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default GenderCollection