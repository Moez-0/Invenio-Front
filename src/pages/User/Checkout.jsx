import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [cartTotal] = useState(79.98);
  const discount = 10;
  const finalTotal = (cartTotal - discount).toFixed(2);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment Successful! 🎉");
    navigate("/confirmation");
  };

  return (
    <div className="bg-white dark:bg-dark min-h-screen py-12 px-6 font-inter">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-2 bg-white dark:bg-dark p-8 shadow-md">
          <h1 className="text-4xl font-semibold text-gray-900 dark:text-light mb-8">Checkout</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-light font-semibold">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded bg-gray-100 dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-secondary"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-light font-semibold">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded bg-gray-100 dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-secondary"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-light font-semibold">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                className="w-full p-3 border rounded bg-gray-100 dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-secondary"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 dark:text-light font-semibold">Expiry Date</label>
                <input
                  type="text"
                  name="expiry"
                  value={formData.expiry}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  className="w-full p-3 border rounded bg-gray-100 dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-light font-semibold">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="123"
                  className="w-full p-3 border rounded bg-gray-100 dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-secondary text-white font-semibold hover:bg-primary transition-all"
            >
              Complete Payment
            </button>
          </form>
        </div>

        <div className="lg:col-span-1 bg-white dark:bg-dark p-8 shadow-md sticky top-12 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-light">Order Summary</h2>

          <div className="flex justify-between">
            <p className="text-lg text-gray-700 dark:text-light">Total Price</p>
            <p className="text-lg text-gray-700 dark:text-light">${cartTotal.toFixed(2)}</p>
          </div>

          <div className="flex justify-between">
            <p className="text-lg text-gray-700 dark:text-light">Discount</p>
            <p className="text-lg text-green-500">-${discount.toFixed(2)}</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-2xl font-semibold text-gray-900 dark:text-light">Final Total</p>
            <p className="text-2xl font-bold text-secondary">${finalTotal}</p>
          </div>

          <Link
            to="/cart"
            className="w-full py-4 text-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-light font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all block"
          >
            Back to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
