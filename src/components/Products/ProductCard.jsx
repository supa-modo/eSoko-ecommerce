import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]); // Default to first color
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  // Check if product is in favorites on component mount
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.some((fav) => fav.id === product.id));
  }, [product.id]);

  const handleProductClick = () => {
    navigate(`/product-details/${product.id}`);
  };

  const toggleFavorite = (e) => {
    e.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    
    let newFavorites;
    if (isFavorite) {
      newFavorites = favorites.filter((fav) => fav.id !== product.id);
    } else {
      newFavorites = [...favorites, product];
    }
    
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  const addToCart = (e) => {
    e.stopPropagation();
    if (!selectedSize || !selectedColor) return;

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
      quantity: 1
    };

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    
    // Check if item with same id, size, and color exists
    const existingItemIndex = cart.findIndex(
      item => 
        item.id === cartItem.id && 
        item.size === cartItem.size && 
        item.color === cartItem.color
    );

    if (existingItemIndex !== -1) {
      // Update quantity if item exists
      cart[existingItemIndex].quantity += 1;
    } else {
      // Add new item if it doesn't exist
      cart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    
    // Show success message or feedback
    alert("Added to cart successfully!");
  };

  return (
    <div
      className="bg-gray-50 rounded-b-xl rounded-t-2xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl"
      onClick={handleProductClick}
    >
      <div className="relative cursor-pointer">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[220px] object-cover"
        />
        <button
          onClick={toggleFavorite}
          className={`absolute top-4 right-4 p-2 rounded-full ${
            isFavorite ? "bg-orange-600 text-white" : "bg-white text-gray-600"
          } shadow-md hover:scale-110 transition`}
        >
          <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="px-4 py-3">
        <h3 className="text-lg font-semibold mb-1 line-clamp-1">
          {product.name}
        </h3>

        <div className="flex justify-between items-center mb-3">
          <span className="text-base font-mono font-extrabold text-orange-600">
            Kshs.{" "}
            {new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(product.price)}
          </span>
          <div className="flex space-x-1">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedColor(color);
                }}
                className={`w-[18px] h-[18px] rounded-md border-2 transition-all ${
                  selectedColor === color
                    ? "border-orange-500 scale-110"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                style={{ backgroundColor: color.toLowerCase() }}
              />
            ))}
          </div>
        </div>

        <div className="flex space-x-2 text-xs text-brand-primary font-bold mb-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedSize(size);
              }}
              className={`px-2 py-1 rounded border font-mono flex-shrink-0 ${
                selectedSize === size
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-brand-primary border-gray-300 hover:bg-gray-100"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        <button
          disabled={!selectedSize || !selectedColor}
          onClick={addToCart}
          className={`w-full flex items-center gap-3 justify-center py-2 font-semibold rounded-lg transition ${
            selectedSize && selectedColor
              ? "bg-orange-500 text-white hover:bg-orange-600"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          <FaCartPlus size={22} />
          {selectedSize && selectedColor ? "Add to Cart" : "Select Size & Color"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
