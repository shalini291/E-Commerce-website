import React, { useState } from "react";
import axios from "axios";

const Checkout = () => {
  const [checkoutData, setCheckoutData] = useState({
    name: "",
    address: "",
    paymentMethod: "COD"
  });

  // Example cart items (In real app, get from state or context)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Laptop", price: 60000 },
    { id: 2, name: "Mouse", price: 1200 }
  ]);

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setCheckoutData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!checkoutData.name || !checkoutData.address) {
      setMessage("Please fill all required fields!");
      return;
    }

    const order = {
      customer: checkoutData,
      items: cartItems,
      total: calculateTotal()
    };

    try {
      const response = await axios.post("http://localhost:5000/api/checkout", order);
      setMessage(response.data.message || "Order placed successfully!");
      setCheckoutData({ name: "", address: "", paymentMethod: "COD" });
      setCartItems([]);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Failed to place order. Try again."
      );
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-6 p-6 bg-gray-100 min-h-screen">
      {/* Checkout Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Checkout</h2>

        {message && (
          <p className="text-center mb-3 text-red-500 font-medium">{message}</p>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={checkoutData.name}
            onChange={handleChange}
            className="w-full mb-3 p-2 border rounded"
            required
          />

          <textarea
            name="address"
            placeholder="Address"
            value={checkoutData.address}
            onChange={handleChange}
            className="w-full mb-3 p-2 border rounded"
            required
          />

          <select
            name="paymentMethod"
            value={checkoutData.paymentMethod}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
          >
            <option value="COD">Cash on Delivery</option>
            <option value="Card">Card</option>
            <option value="UPI">UPI</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Place Order
          </button>
        </form>
      </div>

      {/* Cart Summary */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Order Summary</h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">No items in cart</p>
        ) : (
          <>
            <ul className="mb-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between border-b py-2"
                >
                  <span>{item.name}</span>
                  <span>₹{item.price}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between text-lg font-semibold">
              <span>Total:</span>
              <span>₹{calculateTotal()}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;