import React from "react";
import esokoLogo from "../../assets/images/esoko-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <div className="flex items-baseline gap-2">
              <img
                src={esokoLogo}
                alt="eSoko-logo"
                className="h-10 w-10 object-contain"
              />
              <h3 className="text-2xl font-bold text-brand-primary">eSoko</h3>
            </div>

            <p className="text-gray-400">
              Your ultimate destination for fashion trends and style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-brand-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary">
                  Women
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary">
                  Men
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary">
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
                <a href="#" className="hover:text-brand-primary">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary">
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
          <p>&copy; 2024 eSoko. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
