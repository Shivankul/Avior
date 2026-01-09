import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PayPalButton from "./PayPalButton";

const cart = {
  products: [
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Brown",
      price: "120",
      image: "https://picsum.photos/150?random=1",
    },
    {
      name: "Casual Sneakers",
      size: "42",
      color: "White",
      price: "200",
      image: "https://picsum.photos/150?random=2",
    },
  ],
  totalPrice: 320,
};
const Checkout = () => {
  const navigate = useNavigate();
  const [checkoutId, setCheckoutId] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });
  const handleCheckoutPayment = (e) => {
    e.preventDefault();
    setCheckoutId(123);
  };
  const handlePaymentSuccess = (details) => {
    console.log("payment successful", details);
    navigate("/order-conformation");
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* Left section */}
      <div className="bg-gray-100 rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6 font-bold text-center">
          Checkout💵
        </h2>
        <form onSubmit={handleCheckoutPayment}>
          <h3 className="text-lg mb-4">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value="test@gmail.com"
              disabled
              className="border rounded w-full p-2"
            />
          </div>
          <h3 className="text-lg mb-4">Delivery</h3>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstname" className="block text-gray-700">
                First Name :
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                required
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
                className="w-full p-2 border rounded focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="lastname" className="block text-gray-700">
                Last Name :
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                required
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
                className="w-full p-2 border rounded focus:outline-none"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              Address :
            </label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              className="w-full p-2 border rounded focus:outline-none"
              required
            />
          </div>
          {/* city and postal code */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="city" className="block text-gray-700">
                City :
              </label>
              <input
                type="text"
                name="city"
                id="city"
                required
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
                className="w-full p-2 border rounded focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="postalcode" className="block text-gray-700">
                Postal Code :
              </label>
              <input
                type="text"
                name="postalcode"
                id="postalcode"
                required
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
                className="w-full p-2 border rounded focus:outline-none"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="country" className="block text-gray-700">
              Country :
            </label>
            <input
              type="text"
              id="country"
              value={shippingAddress.country}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
              className="w-full p-2 border rounded focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              value={shippingAddress.phone}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
              className="w-full p-2 border rounded focus:outline-none"
              required
            />
          </div>

          <div className="mt-6">
            {!checkoutId ? (
              <button
                type="submit"
                className="w-full bg-black text-white p-3 rounded-md"
              >
                Continue To Payment
              </button>
            ) : (
              <div>
                <h3 className="text-lg mb-4">Pay With PayPal</h3>
                {/* paypal component */}
                <PayPalButton
                  amount={100}
                  onSubmit={handlePaymentSuccess}
                  onError={(err) => alert("Payment failed. Try again.")}
                />
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Right section */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-lg mb-4 text-center">Order Summary</h3>
        <div className="py-4 mb-4">
          {cart.products.map((product, index) => (
            <div
              key={index}
              className="flex items-start justify-between py-2 border-b"
            >
              <div className="flex items-start">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover mr-4 rounded-lg"
                />
                <div>
                  <h3 className="text-md">{product.name}</h3>
                  <p className="text-gray-600">Size: {product.size}</p>
                  <p className="text-gray-600">Color: {product.color}</p>
                </div>
              </div>
              <p className="text-lg">${product.price?.toLocaleString()}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center text-lg mb-4">
          <p className="font-semibold text-xl">Subtotal: </p>
          <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
        <div className="flex justify-between items-center text-lg">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between items-center text-lg mb-4 border-t pt-4">
          <p className="font-semibold text-xl">Total: </p>
          <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
