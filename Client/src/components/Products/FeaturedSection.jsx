import React from 'react'
import {HiOutlineCreditCard, HiShoppingBag} from 'react-icons/hi'
import {HiArrowPathRoundedSquare} from 'react-icons/hi2'


const FeaturedSection = () => {
  return (
    <section className='py-16 px-4 bg-white'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
            {/* Feature 1 */}
            <div className='flex flex-col items-center'>
                <div className='p-4 rounded-full mb-2'>
                    <HiShoppingBag className='text-xl'/>
                </div>
                <h4 className='tracking-tighter mb-2 font-medium'>
                    FREE INTERNATIONAL SHIPPING
                </h4>
                <p className='text-sm tracking-tighter text-gray-600'>
                    On Order All Above 100$ !!
                </p>
            </div>
            {/* Feature 2 */}
            <div className='flex flex-col items-center'>
                <div className='p-4 rounded-full mb-2'>
                    <HiArrowPathRoundedSquare className='text-xl'/>
                </div>
                <h4 className='tracking-tighter mb-2 font-medium'>
                    45 DAYS RETURN
                </h4>
                <p className='text-sm tracking-tighter text-gray-600'>
                    Money Back Guarantee !!
                </p>
            </div>
            {/* Feature 3 */}
            <div className='flex flex-col items-center'>
                <div className='p-4 rounded-full mb-2'>
                    <HiOutlineCreditCard className='text-xl'/>
                </div>
                <h4 className='tracking-tighter mb-2 font-medium'>
                    SECURE CHECKOUT
                </h4>
                <p className='text-sm tracking-tighter text-gray-600'>
                    100% Secure Checkout Policy !!
                </p>
            </div>
        </div>
    </section>
  )
}

export default FeaturedSection