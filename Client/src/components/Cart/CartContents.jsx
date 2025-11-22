import React from 'react'

const CartContents = () => {

    const cartProducts = [
        {
            productID : 1,
            name : "T-Shirt",
            size: "M",
            color: "Red",
            quantity: 1,
            price: "4000$",
            image: "https://picsum.photos/200"
        },
        {
            productID : 1,
            name : "Jeans",
            size: "L",
            color: "Blue",
            quantity: 1,
            price: "3000$",
            image: "https://picsum.photos/200"
        }
    ]
  return (
    <div>CartContents</div>
  )
}

export default CartContents