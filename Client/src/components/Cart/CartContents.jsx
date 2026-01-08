import React from 'react'
import {RiDeleteBin3Line} from 'react-icons/ri'

const CartContents = () => {

    const cartProducts = [
        {
            productID : 1,
            name : "T-Shirt",
            size: "M",
            color: "Red",
            quantity: 1,
            price: "4000$",
            image: "https://picsum.photos/500/500/random=1"
        },
        {
            productID : 1,
            name : "Jeans",
            size: "L",
            color: "Blue",
            quantity: 1,
            price: "3000$",
            image: "https://picsum.photos/500/500/random=2"
        }
    ]
  return (
    <div>
      {cartProducts.map((product,index)=>(
        <div key={index} className='flex items-start justify-between py-4 border-b'>
            <div className='flex items-start'>
              <img src= {product.image} alt="image not render yet sorry 🥲" className='h-25 w-20 rounded-md object-cover mr-4'/>
              <div>
                <h3>{product.name}</h3>
                <p>
                    {product.size} | color : {product.color}
                </p>

                <div className='flex items-center mt-6'>
                  <button className='border rounded-3xl text-lg font-medium px-2'>-</button>
                  <span className='mx-2 text-sm'>{product.quantity}</span>
                  <button className='border rounded-3xl text-lg font-medium px-2'>+</button>
                </div>
              </div>
            </div>
            <div className='h-25'>
              <p className='font-medium'>{product.price.toLocaleString()}</p>

              <button className='mt-[100%] ml-[50%]'>
                <RiDeleteBin3Line className='h-6 w-6 text-red-600'/>
              </button>
            </div>
        </div>  
      ))}
    </div>
  )
}

export default CartContents