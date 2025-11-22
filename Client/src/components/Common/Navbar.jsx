import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineShoppingBag, HiOutlineUser} from 'react-icons/hi'
import {HiBars3BottomRight} from 'react-icons/hi2'
import SearchBar from './SearchBar'
import CartDrawer from '../Layout/CartDrawer'

const Navbar = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen);
    }
  return (
    <div>
        <nav className=' mx-auto flex items-center justify-between py-2 px-9'>
            <div>
                <Link to="" className='text-2xl font-medium'>
                <i class="ri-tent-line mr-2"></i>
                AVIOR</Link>
            </div>
            <div className='flex items-center space-x-4'>
                <Link to="#" className='text-gray-600 hover:text-black text-sm font-medium uppercase'>men</Link>
                <Link to="#" className='text-gray-600 hover:text-black text-sm font-medium uppercase'>women</Link>
                <Link to="#" className='text-gray-600 hover:text-black text-sm font-medium uppercase'>top wear</Link>
                <Link to="#" className='text-gray-600 hover:text-black text-sm font-medium uppercase'>bottom wear</Link>
            </div>
            <div className='flex items-center space-x-4'>
                <Link to="/profile" className='hover:text-black'>
                    <HiOutlineUser className='h-6 w-6 text-gray-500'/>
                </Link>
                <button onClick={toggleCartDrawer}  className='relative hover:text-black'>
                    <HiOutlineShoppingBag className='h-6 w-6 text-gray-500'/>
                    <span className='absolute -top-1 bg-red-600 text-white text-xs rounded-4xl px-1'>3</span>
                </button>
                <div className='overflow-hidden'>
                    <SearchBar/>
                </div>
                <button className='md:hidden'>
                    <HiBars3BottomRight className='h-6 w-6 text-gray-500'/>
                </button>
            </div>
        </nav>
        <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}/>
    </div>
  )
}

export default Navbar