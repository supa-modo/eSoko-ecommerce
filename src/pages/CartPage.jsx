import React, { useState } from "react";
import { Trash2, Plus, Minus, ShoppingCart, ChevronRight } from "lucide-react";
import Navbar from "../components/Layout/Navbar";
import clothe1 from "../assets/images/casualShirts.jpg";
import clothe2 from "../assets/images/shoe.jpg";
import clothe3 from "../assets/images/shirt1.jpg";
import clothe4 from "../assets/images/ladysuit.jpg";

const CartPage = () => {
  // Simulated cart items (in a real app, this would come from state management or context)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Classic Denim Jacket",
      price: 1299,
      image: clothe1,
      size: "M",
      color: "Blue",
      quantity: 1,
    },
    {
      id: 2,
      name: "Floral Summer Dress",
      price: 850,
      image: clothe4,
      size: "S",
      color: "Pink",
      quantity: 2,
    },
    {
      id: 3,
      name: "Classic Denim Jacket",
      price: 1299,
      image: clothe2,
      size: "M",
      color: "Blue",
      quantity: 1,
    },
    {
      id: 4,
      name: "Floral Summer Dress",
      price: 850,
      image: clothe3,
      size: "S",
      color: "Pink",
      quantity: 2,
    },
  ]);

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Update quantity of an item
  const updateQuantity = (id, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12 mt-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-orange-600">
                Your Cart
                <span className="text-gray-500 text-lg ml-3">
                  ({cartItems.length} items)
                </span>
              </h1>
              <button className="text-gray-600 hover:text-red-500 flex items-center">
                <Trash2 className="mr-2" />
                Clear Cart
              </button>
            </div>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md py-4 pl-4 pr-8 flex items-center space-x-6 hover:shadow-lg transition-shadow"
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-lg"
                />

                {/* Product Details */}
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <div className="text-sm text-gray-500 mt-1">
                    Size: {item.size} | Color: {item.color}
                  </div>
                  <div className="text-orange-600 font-bold mt-2">
                    Kshs. {item.price.toLocaleString()}
                  </div>
                </div>

                {/* Quantity Control */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-gray-200 p-2 rounded-lg hover:bg-orange-500 hover:text-white"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-gray-200 p-2 rounded-lg hover:bg-orange-500 hover:text-white"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                {/* Total for Item */}
                <div className="font-bold text-lg">
                  Kshs. {(item.price * item.quantity).toLocaleString()}
                </div>

                {/* Remove Item */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary Section */}
          <div className="bg-white rounded-xl shadow-md mt-12 p-6 h-fit">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Order Summary
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">
                  Kshs. {calculateTotal().toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-semibold">
                  Kshs. {(calculateTotal() * 0.16).toLocaleString()}
                </span>
              </div>

              <div className="border-t pt-4 flex justify-between">
                <span className="text-xl font-bold">Total</span>
                <span className="text-xl font-bold text-orange-600">
                  Kshs. {(calculateTotal() * 1.16).toLocaleString()}
                </span>
              </div>
            </div>

            <button
              className="w-full bg-orange-500 text-white py-3 rounded-lg mt-6 
              flex items-center justify-center space-x-2 
              hover:bg-orange-600 transition-colors font-semibold"
            >
              <ShoppingCart />
              <span>Proceed to Checkout</span>
              <ChevronRight />
            </button>

            {/* Promo Code Section
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Promo Code
              </label>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="flex-grow px-4 py-2 border rounded-l-lg"
                />
                <button className="bg-gray-200 px-4 py-2 rounded-r-lg hover:bg-gray-300">
                  Apply
                </button>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
