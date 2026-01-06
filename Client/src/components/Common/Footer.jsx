import React from 'react'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'
import { TbBrandMeta } from 'react-icons/tb'
import {FiPhoneCall} from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='border-t py-12'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-4 lg:px-0'>
            <div>
                <h3 className='text-lg text-gray-900 mb-4'>
                    NewsLetter
                </h3>
                <p className='text-gray-600 mb-4'>
                    Be the First to hear about new Products, exclusive events and online offers.
                </p>
                <p className='text-gray-600 font-medium text-sm mb-6'>
                    Sign up and get 10% off your first order.
                </p>

                <form className='flex'>
                    <input type="email" placeholder='Enter the email...' className='p-3 w-2/3 border-l border-t border-b
                     text-sm border-gray-300 rounded-l-md transition-all focus:outline-none focus:ring-1 focus:ring-gray-600' required />
                     <button className='bg-black text-white rounded-r-md p-2'>Subscribe</button>
                </form>
            </div>
            {/* shop link */}
            <div>
                <h3 className='text-lg text-gray-900 mb-4'>Shop</h3>
                <ul className='space-y-2 text-gray-600'>
                    <li>
                        <Link to="#" className='hover:text-gray-500 transition-colors'>
                            Men's Top Wear
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className='hover:text-gray-500 transition-colors'>
                            Women's Top Wear
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className='hover:text-gray-500 transition-colors'>
                            Men's Bottom Wear
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className='hover:text-gray-500 transition-colors'>
                            Women's Bottom Wear
                        </Link>
                    </li>
                </ul>
            </div>
            {/* Support link */}
             <div>
                <h3 className='text-lg text-gray-900 mb-4'>Support</h3>
                <ul className='space-y-2 text-gray-600'>
                    <li>
                        <Link to="#" className='hover:text-gray-500 transition-colors'>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className='hover:text-gray-500 transition-colors'>
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className='hover:text-gray-500 transition-colors'>
                            FAQs
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className='hover:text-gray-500 transition-colors'>
                            Features
                        </Link>
                    </li>
                </ul>
            </div>
            {/* Socials */}

            <div>
                <h3 className='text-lg text-gray-900 mb-4'>Social</h3>

                <div className='flex items-center space-x-4 mb-6'>
                    <a href="https://www.facebook.com"
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-blue-600 text-gray-800'
                    >
                        <TbBrandMeta className='h-5 w-5'/>
                    </a>
                    <a href="https://www.facebook.com"
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-pink-500 text-gray-800'
                    >
                        <IoLogoInstagram className='h-5 w-5'/>
                    </a>
                    <a href="https://www.facebook.com"
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-black text-gray-700'
                    >
                        <RiTwitterXLine className='h-5 w-5'/>
                    </a>
                </div>
                <p className='mb-2'>Call Us</p>
                <p className='text-gray-600 text-sm'>
                    <FiPhoneCall className='mr-2 inline-block'/>
                    0123-456-789
                </p>
            </div>
        </div>
        {/* copyright bottom */}
        <div className='container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-400 pt-6'>
            <p className='text-gray-500 text-sm tracking-tighter text-center'>© 2025, CompileTab. All Right Reserved. Made with ❤️ by Shivx</p>
        </div>
    </footer>
  )
}

export default Footer