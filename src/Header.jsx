import React, { useState } from "react";
import { ShoppingCart, User, Search, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { name: "Men", href: "/men" },
    { name: "Women", href: "/women" },
    { name: "Kids", href: "/kids" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors"
        >
          StyleHub
        </Link>

        {/* Navigation for larger screens */}
        <nav className="hidden md:flex space-x-6 items-center">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.href}
              className="text-gray-700 hover:text-black font-medium transition-colors"
            >
              {category.name}
            </Link>
          ))}
          <Link
            // to="/accessories"
            className="text-gray-700 hover:text-black font-medium transition-colors"
          >
            Accessories
          </Link>
        </nav>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="hidden md:block border-b border-gray-300 py-1 px-2 w-48 focus:outline-none focus:border-black transition-all"
            />
            <Search
              className="text-gray-600 hover:text-black cursor-pointer"
              size={20}
            />
          </div>

          <Link to="/cart" className="relative">
            <ShoppingCart
              className="text-gray-600 hover:text-black"
              size={22}
            />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              0
            </span>
          </Link>

          <Link to="/account">
            <User className="text-gray-600 hover:text-black" size={22} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="text-gray-600" size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="px-4 py-4 space-y-3">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="block text-gray-700 hover:text-black font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            <Link
            //   to="/accessories"
              className="block text-gray-700 hover:text-black font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Accessories
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
