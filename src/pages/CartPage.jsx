import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingCart, ChevronRight } from "lucide-react";
import clothe1 from "../assets/images/casualShirts.jpg";
import clothe4 from "../assets/images/jacket.jpg";
import clothe6 from "../assets/images/ladysuit.jpg";

const defaultCartItems = [
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
    id: 4,
    name: "Leather Bomber Jacket",
    price: 2500,
    image: clothe4,
    size: "L",
    color: "Black",
    quantity: 1,
  },
  {
    id: 5,
    name: "Bohemian Maxi Skirt",
    price: 799.5,
    image: clothe6,
    size: "M",
    color: "Olive",
    quantity: 2,
  },
];

const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    // If cart is empty, use default items
    if (savedCart.length === 0) {
      localStorage.setItem("cart", JSON.stringify(defaultCartItems));
      setCartItems(defaultCartItems);
    } else {
      setCartItems(savedCart);
    }
  }, []);

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Update quantity of an item
  const updateQuantity = (id, size, color, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.size === size && item.color === color
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id, size, color) => {
    setCartItems(
      cartItems.filter(
        (item) =>
          !(item.id === id && item.size === size && item.color === color)
      )
    );
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  // Navigate to product details
  const navigateToProductDetails = (productId) => {
    navigate(`/product-details/${productId}`);
  };

  return (
    <div className="container mx-auto px-4 py-28">
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
            {cartItems.length > 0 && (
              <button
                onClick={clearCart}
                className="text-gray-600 hover:text-red-500 flex items-center"
              >
                <Trash2 className="mr-2" />
                <span className="font-semibold">Clear Cart</span>
              </button>
            )}
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-16 bg-gray-100 rounded-xl shadow-md">
              <ShoppingCart className="mx-auto text-gray-300 mb-4" size={64} />
              <h2 className="text-xl font-semibold text-gray-600 mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-500 mb-8">
                Add items to your cart to see them here
              </p>
              <button
                onClick={() => navigate("/")}
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={`${item.id}-${item.size}-${item.color}`}
                className="bg-gray-100 rounded-xl shadow-md py-4 pl-4 pr-8 flex items-center space-x-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => navigateToProductDetails(item.id)}
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
                  <div className="text-orange-600 font-mono text-sm font-bold mt-2">
                    Kshs. {item.price.toLocaleString()}
                  </div>
                </div>

                <div className="flex-col space-y-6">
                  <div className="flex justify-between space-x-10">
                    {/* Quantity Control */}
                    <div className="flex items-center space-x-3 pt-6">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          updateQuantity(
                            item.id,
                            item.size,
                            item.color,
                            item.quantity - 1
                          );
                        }}
                        className="bg-gray-200 p-2 rounded-lg hover:bg-orange-500 hover:text-white"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="font-semibold">{item.quantity}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          updateQuantity(
                            item.id,
                            item.size,
                            item.color,
                            item.quantity + 1
                          );
                        }}
                        className="bg-gray-200 p-2 rounded-lg hover:bg-orange-500 hover:text-white"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    {/* Total for Item */}
                    <div>
                      <span className="text-xs">Item total:</span>
                      <div className="font-bold font-mono text-brand-primary text-lg">
                        Kshs. {(item.price * item.quantity).toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Remove Item */}
                  <div className="flex justify-end">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeItem(item.id, item.size, item.color);
                      }}
                      className="text-red-500 py-2 px-3 rounded-lg hover:text-white hover:bg-brand-primary flex items-center space-x-2"
                    >
                      <Trash2 />
                      <span className="font-semibold">Remove Item</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Order Summary Section */}
        {cartItems.length > 0 && (
          <div className="bg-gray-100 rounded-xl shadow-md mt-12 p-6 h-fit">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Order Summary
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold font-mono">
                  Kshs. {calculateTotal().toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-semibold font-mono">
                  Kshs. {(calculateTotal() * 0.16).toLocaleString()}
                </span>
              </div>

              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-lg font-mono">
                    Kshs.{" "}
                    {(
                      calculateTotal() +
                      calculateTotal() * 0.16
                    ).toLocaleString()}
                  </span>
                </div>
              </div>

              <button className="w-full bg-orange-500 text-white py-3 rounded-lg mt-6 font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2">
                <span>Proceed to Checkout</span>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
