import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  ShoppingCart,
  UserRound,
  ChevronDown,
  Heart,
} from "lucide-react";

const UserSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside both the dropdown and the button
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    // Add event listener to detect outside clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex my-auto space-x-3 items-center relative">
      {/* Favourites section */}
      <div>
        <button className="flex items-center space-x-2 hover:text-brand-primary font-semibold text-gray-600">
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
                  <button className="w-full text-left font-semibold block py-1 px-2 hover:bg-brand-primary rounded text-gray-500 hover:text-white">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Cart Button */}
      <div className="relative">
        <button className="text-gray-700 hover:text-black">
          <ShoppingCart className="w-9 h-7" />
        </button>
        {/* Badge */}
        <span className="absolute -top-1 -right-2 flex items-center justify-center w-5 h-5 bg-brand-primary text-white text-xs font-bold rounded-full">
          4
        </span>
      </div>
    </div>
  );
};

export default UserSection;
