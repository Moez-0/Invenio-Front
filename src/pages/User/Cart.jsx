import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: "/course.png",
      title: "React for Beginners",
      instructor: "John Doe",
      rating: 4,
      reviews: 120,
      price: 29.99,
    },
    {
      id: 2,
      image: "/course.png",
      title: "Advanced JavaScript",
      instructor: "Jane Smith",
      rating: 5,
      reviews: 200,
      price: 49.99,
    },
  ]);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-white dark:bg-dark min-h-screen py-12 px-6 font-inter">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Cart Items */}
        <div className="col-span-2 bg-white dark:bg-dark p-8 shadow-md">
          <h1 className="text-4xl font-semibold text-gray-900 dark:text-light mb-8">Your Cart</h1>

          {cartItems.length > 0 ? (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center bg-gray-100 dark:bg-dark p-5">
                  <div className="flex items-center space-x-6">
                    <img className="w-20 h-20 object-cover" src={item.image} alt={item.title} />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-light">{item.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-light">{item.instructor}</p>
                      <p className="text-lg font-semibold text-primary dark:text-secondary mt-2">${item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-700 text-sm font-medium"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-lg text-gray-500 dark:text-light text-center">Your cart is empty.</p>
          )}
        </div>

        {/* Right Side: Order Summary */}
        <div className="lg:col-span-1 bg-white dark:bg-dark p-8 shadow-md sticky top-12 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-light">Order Summary</h2>

          <div className="flex justify-between">
            <p className="text-lg text-gray-700 dark:text-light">Total Courses</p>
            <p className="text-lg text-gray-700 dark:text-light">{cartItems.length}</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-2xl font-semibold text-gray-900 dark:text-light">Total:</p>
            <p className="text-2xl font-bold text-secondary">${totalPrice}</p>
          </div>

          <Link
            to="/checkout"
            className="w-full py-4 text-center bg-secondary text-white font-semibold hover:bg-primary transition-all block"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
