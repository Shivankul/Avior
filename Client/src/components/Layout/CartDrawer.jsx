import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import CartContents from '../Cart/CartContents';

const CartDrawer = ({drawerOpen, toggleCartDrawer}) => {
  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
    }`}>
        <div className='flex justify-end p-4'>
            <button onClick={toggleCartDrawer}>
                <IoMdClose className='h-6 w-6 text-gray-600'/>
            </button>
        </div>
        {/* adding cart content with scrollable area*/}
        <div className='flex-grow p-4 overflow-y-auto'>
            <h2 className='text-xl font-semibold mb-4'>Your Cart</h2>
            {/* {Componets for Cart Contents} */}
            <CartContents/>
        </div>
        {/* {Checkout button fixed at bottom} */}
        <div className='p-4 bg-white sticky bottom-0'>
            <button className='w-full rounded-md bg-green-700 text-black py-3 font-semibold hover:bg-green-500 transition'>Checkout</button>
            <p className='tracking-tighter text-sm text-gray-600 mt-2 text-center'>**Shipping,Discount,Taxes Calculated at Checkouts**</p>
        </div>
    </div>
  )
}

export default CartDrawer