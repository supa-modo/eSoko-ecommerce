import React, { useState } from "react";
import { Heart } from "lucide-react";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const handleProductClick = () => {
    // Navigate to product details page with product ID
    navigate(`/product-details/${product.id}`);
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
          onClick={(e) => {
            e.stopPropagation(); // Prevent navigation when favoriting
            setIsFavorite(!isFavorite);
          }}
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
              <div
                key={color}
                className="w-[18px] h-[18px] rounded-md border border-gray-200"
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
                e.stopPropagation(); // Prevent navigation when selecting size
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
          disabled={!selectedSize}
          onClick={(e) => e.stopPropagation()} // Prevent navigation when adding to cart
          className={`w-full flex items-center gap-3 justify-center py-2 font-semibold rounded-lg transition ${
            selectedSize
              ? "bg-orange-500 text-white hover:bg-orange-600"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          <FaCartPlus size={22} className="" />
          {selectedSize ? "Add to Cart" : "Select Size"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
