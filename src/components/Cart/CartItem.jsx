import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  ShoppingCart,
  UserRound,
  ChevronDown,
  Heart,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserSection = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  // Update cart count whenever localStorage changes
  useEffect(() => {
    const updateCartCount = () => {
      const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
      const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      setCartItemCount(totalItems);
    };

    // Initial count
    updateCartCount();

    // Create an interval to check cart count
    const interval = setInterval(updateCartCount, 1000);

    // Listen for storage events from other tabs
    window.addEventListener("storage", updateCartCount);

    return () => {
      clearInterval(interval);
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex my-auto space-x-4 items-center relative">
      {/* Cart section */}
      <div className="mr-1">
        <button
          onClick={() => {
            navigate(`/cart`);
          }}
          className="flex items-center space-x-2 hover:text-brand-primary font-semibold text-gray-600"
        >
          <div className="relative">
            <ShoppingCart size={28} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </div>
          <span>Cart</span>
        </button>
      </div>

      {/* Favourites section */}
      <div>
        <button
          onClick={() => {
            navigate(`/favourites`);
          }}
          className="flex items-center space-x-2 hover:text-brand-primary font-semibold text-gray-600"
        >
          <Heart />
          <span>Favourites</span>
        </button>
      </div>

      {/* User Profile Section */}
      <div className="relative">
        <div className="flex items-center space-x-2 pl-2">
          <button
            ref={buttonRef}
            onClick={toggleDropdown}
            className="text-gray-600 hover:text-brand-primary flex items-center"
          >
            <UserRound className="w-6 h-6 mr-1" />
            <span className="font-semibold px-1">Username</span>
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>

        {/* Dropdown Overlay */}
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-0 top-full mt-2 w-64 bg-white shadow-lg rounded-lg border border-gray-200 z-50"
          >
            <div className="p-4">
              <div className="flex items-center border-b-2 pb-3 mb-2">
                <UserRound className="w-6 h-6 mr-3 text-gray-600" />
                <div>
                  <p className="font-semibold text-brand-primary">John Doe</p>
                  <p className="text-sm text-gray-500">johndoe@example.com</p>
                </div>
              </div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/profile"
                    className="font-semibold block py-1 px-2 hover:bg-brand-primary rounded text-gray-500 hover:text-white"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="/settings"
                    className="font-semibold block py-1 px-2 hover:bg-brand-primary rounded text-gray-500 hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="/orders"
                    className="font-semibold block py-1 px-2 hover:bg-brand-primary rounded text-gray-500 hover:text-white"
                  >
                    Orders
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => {
                      // Add logout logic here
                    }}
                    className="w-full text-left font-semibold py-1 px-2 hover:bg-brand-primary rounded text-gray-500 hover:text-white"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserSection;
