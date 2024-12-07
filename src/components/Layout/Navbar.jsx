import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import esokoLogo from "../../assets/images/esoko-logo.png";
import UserSection from "../Cart/CartItem";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Update active nav based on current path
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActiveNav("Home");
    } else if (path.includes("/products/men")) {
      setActiveNav("Men");
    } else if (path.includes("/products/women")) {
      setActiveNav("Women");
    } else if (path.includes("/products/kids")) {
      setActiveNav("Kids");
    }
  }, [location.pathname]);

  const navItems = [
    {
      name: "Home",
      onClick: () => {
        navigate("/");
      },
      key: "Home",
    },
    {
      name: "Men",
      onClick: () => {
        navigate("/products/men");
      },
      key: "Men",
    },
    {
      name: "Women",
      onClick: () => {
        navigate("/products/women");
      },
      key: "Women",
    },
    {
      name: "Kids",
      onClick: () => {
        navigate("/products/kids");
      },
      key: "Kids",
    },
  ];

  return (
    <nav className="bg-white opacity-90 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center my-auto gap-x-3">
            <img src={esokoLogo} alt="logo" className="w-16" />
            <div>
              <h1 className="text-2xl font-bold text-orange-600">eSoko</h1>
              <h1 className="text-[14px] pl-8 font-bold text-red-500">
                fashion store
              </h1>
            </div>
          </Link>

          {/* Navigation Navbar */}
          <div className="hidden md:flex flex-col justify-end h-full">
            <div className="flex space-x-10 text-lg mt-12 pb-2 font-semibold">
              {navItems.map((item) => (
                <div key={item.key} className="relative cursor-pointer">
                  <div
                    onClick={item.onClick}
                    className={`${
                      activeNav === item.key
                        ? "text-orange-500 font-semibold"
                        : "text-gray-600 hover:text-black"
                    } pb-2 transition-colors duration-300`}
                  >
                    {item.name}
                  </div>
                  {activeNav === item.key && (
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-orange-500 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Cart and User Item */}
          <div className="flex justify-between my-auto">
            <UserSection />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-black"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="block text-gray-700 hover:text-black"
                onClick={() => setActiveNav(item.key)}
              >
                {item.name}
              </a>
            ))}
            <button className="block w-full text-left text-gray-700 hover:text-black">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
