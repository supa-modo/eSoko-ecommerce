import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserRound, ChevronDown, ShoppingCart, Heart } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const UserSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    navigate("/login");
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
    <div className="flex items-center space-x-5">
      <Link
        to="/favourites"
        className="text-gray-600 flex space-x-2 hover:text-orange-500"
      >
        <Heart className="w-6 h-6" />
        <span className="font-semibold">Favourites</span>
      </Link>

      <Link
        to="/cart"
        className="text-gray-600 flex space-x-2  hover:text-orange-500 "
      >
        <div className="relative">
          <ShoppingCart className="w-6 h-6" />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </div>
        <span className="font-semibold">Cart</span>
      </Link>

      {user ? (
        /* User Profile Section */
        <div className="relative">
          <div className="flex items-center space-x-1 pl-1">
            <button
              ref={buttonRef}
              onClick={toggleDropdown}
              className="text-gray-600 hover:text-orange-500 flex items-center"
            >
              <UserRound className="w-6 h-6 mr-1" />
              <span className="font-semibold px-1">{user.name}</span>
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
                    <p className="font-semibold text-orange-500">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/profile"
                      className="font-semibold block py-1 px-2 hover:bg-orange-500 rounded text-gray-500 hover:text-white"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/settings"
                      className="font-semibold block py-1 px-2 hover:bg-orange-500 rounded text-gray-500 hover:text-white"
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/orders"
                      className="font-semibold block py-1 px-2 hover:bg-orange-500 rounded text-gray-500 hover:text-white"
                    >
                      Orders
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left font-semibold py-1 px-2 hover:bg-orange-500 rounded text-gray-500 hover:text-white"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Sign In/Sign Up buttons */
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="text-gray-600 hover:text-orange-500 font-medium"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors duration-300"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserSection;
