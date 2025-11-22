import React from 'react'
import {TbBrandMeta} from 'react-icons/tb'
import {IoLogoInstagram} from 'react-icons/io'
import {RiTwitterXLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <div className='bg-red-600 text-white'>
        <div className='container mx-auto flex justify-between items-center px-3 py-2'>
            <div className='hidden md:flex items-center space-x-4'>
                <Link to="#" className='hover:text-gray-400' >
                    <TbBrandMeta className="h-5 w-5" />
                </Link>
                <Link to="#" className='hover:text-gray-400' >
                    <IoLogoInstagram className="h-5 w-5" />
                </Link>
                <Link to="#" className='hover:text-gray-400' >
                    <RiTwitterXLine className="h-4 w-4" />
                </Link>
            </div>
            <div className='text-sm text-center flex-grow'>
                <span>
                     We Shipped WorldWide - Fast and Reliable Shipping !!
                </span>
            </div>
            <div className='text-sm hidden md:block'>
                <Link to='' className=''>+91 8800003000</Link>
            </div>
        </div>
    </div>
  )
}

export default Topbar