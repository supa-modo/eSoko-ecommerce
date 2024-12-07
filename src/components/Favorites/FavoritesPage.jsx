import React from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import ProductCard from "../Products/ProductCard";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  // Get favorites from localStorage
  const getFavorites = () => {
    const favorites = localStorage.getItem("favorites");
    return favorites ? JSON.parse(favorites) : [];
  };

  const favoriteItems = getFavorites();

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen pt-28 py-10">
        <div className="max-w-screen-2xl mx-auto px-4">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <Heart className="text-orange-500" size={28} />
            <h1 className="text-2xl font-bold text-gray-800">
              My Favourite Items
            </h1>
          </div>

          {favoriteItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {favoriteItems.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Heart className="mx-auto text-gray-300 mb-4" size={64} />
              <h2 className="text-xl font-semibold text-gray-600 mb-4">
                Your favorites list is empty
              </h2>
              <p className="text-gray-500 mb-8">
                Add items to your favorites to see them here
              </p>
              <Link
                to="/"
                className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FavoritesPage;
