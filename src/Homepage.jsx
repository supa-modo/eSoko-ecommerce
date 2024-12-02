import React, { useState } from "react";
import {
  ShoppingBag,
  User,
  Heart,
  Search,
  Menu,
  ChevronDown,
} from "lucide-react";

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">FashionHub</h1>
          </div>

          {/* Main Navigation */}
          <div className="hidden md:flex space-x-8">
            <div className="group relative">
              <a
                href="/women"
                className="text-gray-700 hover:text-black transition"
              >
                Women
                <ChevronDown className="inline-block ml-1 h-4 w-4" />
              </a>
              {/* Dropdown for Women */}
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-48">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Clothing
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Shoes
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Accessories
                </a>
              </div>
            </div>

            <div className="group relative">
              <a
                href="/men"
                className="text-gray-700 hover:text-black transition"
              >
                Men
                <ChevronDown className="inline-block ml-1 h-4 w-4" />
              </a>
              {/* Dropdown for Men */}
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-48">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Clothing
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Shoes
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Accessories
                </a>
              </div>
            </div>

            <div className="group relative">
              <a
                href="/kids"
                className="text-gray-700 hover:text-black transition"
              >
                Kids
                <ChevronDown className="inline-block ml-1 h-4 w-4" />
              </a>
              {/* Dropdown for Kids */}
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-48">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Clothing
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Shoes
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Accessories
                </a>
              </div>
            </div>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-full px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <Search className="absolute right-4 top-3 text-gray-500" />
            </div>
            <button className="text-gray-700 hover:text-black">
              <Heart className="h-6 w-6" />
            </button>
            <button className="text-gray-700 hover:text-black">
              <User className="h-6 w-6" />
            </button>
            <button className="text-gray-700 hover:text-black">
              <ShoppingBag className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-black"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/women"
              className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md"
            >
              Women
            </a>
            <a
              href="/men"
              className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md"
            >
              Men
            </a>
            <a
              href="/kids"
              className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md"
            >
              Kids
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <div className="relative h-[600px] mt-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/api/placeholder/1920/1080")',
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
          <h1 className="text-5xl font-bold mb-4">Summer Collection 2024</h1>
          <p className="text-xl mb-8">Discover the Latest Trends in Fashion</p>
          <a
            href="#"
            className="px-8 py-3 bg-white text-black hover:bg-gray-100 transition rounded-full font-semibold"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

// Featured Categories Component
const FeaturedCategories = () => {
  const categories = [
    { name: "Women", image: "/api/placeholder/400/600", link: "/women" },
    { name: "Men", image: "/api/placeholder/400/600", link: "/men" },
    { name: "Kids", image: "/api/placeholder/400/600", link: "/kids" },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-[600px] object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <a
                  href={category.link}
                  className="text-white text-2xl font-bold bg-white bg-opacity-20 px-6 py-3 rounded-full hover:bg-opacity-40 transition"
                >
                  {category.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">FashionHub</h3>
            <p className="text-gray-400">
              Your ultimate destination for fashion trends and style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Women
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Men
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Kids
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for exclusive offers
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-full text-black"
              />
              <button className="bg-white text-black px-4 py-2 rounded-r-full hover:bg-gray-200">
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p>&copy; 2024 FashionHub. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main Home Page Component
const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedCategories />
        {/* You can add more sections like New Arrivals, Featured Products, etc. */}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
