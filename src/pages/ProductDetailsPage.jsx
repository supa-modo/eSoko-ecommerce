import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Heart,
  Star,
  Shield,
  Truck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { FaCartPlus, FaShoppingBag } from "react-icons/fa";
import Navbar from "../components/Layout/Navbar";
import clothe1 from "../assets/images/casualShirts.jpg";
import clothe2 from "../assets/images/denim-jeans.jpg";
import clothe3 from "../assets/images/shirt1.jpg";
import clothe4 from "../assets/images/jacket.jpg";
import clothe5 from "../assets/images/suits.jpg";
import clothe6 from "../assets/images/ladysuit.jpg";
import clothe7 from "../assets/images/shirt2.jpg";
import clothe8 from "../assets/images/shoe.jpg";
import clothe9 from "../assets/images/suit2.jpg";

// mock product data from the product list component
const productData = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    category: "Men",
    price: 1299,
    image: clothe1,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black", "Gray"],
  },
  {
    id: 2,
    name: "Floral Summer Dress",
    category: "Women",
    price: 850,
    image: clothe2,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Pink", "White", "Blue"],
  },
  {
    id: 3,
    name: "Graphic Print T-Shirt",
    category: "Kids",
    price: 1000,
    image: clothe3,
    sizes: ["6-7Y", "8-9Y", "10-11Y", "12-13Y"],
    colors: ["Red", "Blue", "Green"],
  },
  {
    id: 4,
    name: "Leather Bomber Jacket",
    category: "Men",
    price: 2500,
    image: clothe4,
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Black", "Brown"],
  },
  {
    id: 5,
    name: "Bohemian Maxi Skirt",
    category: "Women",
    price: 799.5,
    image: clothe6,
    sizes: ["S", "M", "L"],
    colors: ["Olive", "Rust", "Navy"],
  },
  {
    id: 6,
    name: "Sporty Kids Tracksuit",
    category: "Kids",
    price: 599,
    image: clothe5,
    sizes: ["4-5Y", "6-7Y", "8-9Y"],
    colors: ["Blue", "Gray", "Red"],
  },
  {
    id: 7,
    name: "Cartoon Character Hoodie",
    category: "Kids",
    price: 300,
    image: clothe9,
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    colors: ["Blue", "Pink", "Yellow"],
  },
  {
    id: 8,
    name: "Urban Cargo Pants",
    category: "Men",
    price: 19699.99,
    image: clothe7,
    sizes: ["30", "32", "34", "36"],
    colors: ["Khaki", "Black", "Olive"],
  },
  {
    id: 9,
    name: "Silk Blouse Long Text Name Example",
    category: "Women",
    price: 250,
    image: clothe8,
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Cream", "Navy"],
  },
  {
    id: 10,
    name: "Cartoon Character Hoodie",
    category: "Kids",
    price: 300,
    image: clothe9,
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    colors: ["Blue", "Pink", "Yellow"],
  },
  {
    id: 11,
    name: "Classic Chino Shorts",
    category: "Men",
    price: 599,
    image: clothe6,
    sizes: ["30", "32", "34", "36"],
    colors: ["Khaki", "Navy", "White"],
  },

  {
    id: 12,
    name: "Silk Blouse Long Text Name Example",
    category: "Women",
    price: 250,
    image: clothe4,
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Cream", "Navy"],
  },

  {
    id: 13,
    name: "Bohemian Maxi Skirt",
    category: "Women",
    price: 799.5,
    image: clothe3,
    sizes: ["S", "M", "L"],
    colors: ["Olive", "Rust", "Navy"],
  },
  {
    id: 14,
    name: "Classic Denim Jacket",
    category: "Men",
    price: 1299,
    image: clothe1,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black", "Gray"],
  },
  {
    id: 15,
    name: "Floral Summer Dress",
    category: "Women",
    price: 850,
    image: clothe2,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Pink", "White", "Blue"],
  },
  {
    id: 16,
    name: "Graphic Print T-Shirt",
    category: "Kids",
    price: 1000,
    image: clothe3,
    sizes: ["6-7Y", "8-9Y", "10-11Y", "12-13Y"],
    colors: ["Red", "Blue", "Green"],
  },
  {
    id: 17,
    name: "Leather Bomber Jacket",
    category: "Men",
    price: 2500,
    image: clothe4,
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Black", "Brown"],
  },
  {
    id: 18,
    name: "Bohemian Maxi Skirt",
    category: "Women",
    price: 799.5,
    image: clothe6,
    sizes: ["S", "M", "L"],
    colors: ["Olive", "Rust", "Navy"],
  },
  {
    id: 19,
    name: "Sporty Kids Tracksuit",
    category: "Kids",
    price: 599,
    image: clothe5,
    sizes: ["4-5Y", "6-7Y", "8-9Y"],
    colors: ["Blue", "Gray", "Red"],
  },
  {
    id: 20,
    name: "Cartoon Character Hoodie",
    category: "Kids",
    price: 300,
    image: clothe9,
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    colors: ["Blue", "Pink", "Yellow"],
  },
  {
    id: 21,
    name: "Urban Cargo Pants",
    category: "Men",
    price: 19699.99,
    image: clothe7,
    sizes: ["30", "32", "34", "36"],
    colors: ["Khaki", "Black", "Olive"],
  },
  {
    id: 22,
    name: "Silk Blouse Long Text Name Example",
    category: "Women",
    price: 250,
    image: clothe8,
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Cream", "Navy"],
  },
  {
    id: 23,
    name: "Cartoon Character Hoodie",
    category: "Kids",
    price: 300,
    image: clothe9,
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    colors: ["Blue", "Pink", "Yellow"],
  },
  {
    id: 24,
    name: "Classic Chino Shorts",
    category: "Men",
    price: 599,
    image: clothe6,
    sizes: ["30", "32", "34", "36"],
    colors: ["Khaki", "Navy", "White"],
  },

  {
    id: 25,
    name: "Silk Blouse Long Text Name Example",
    category: "Women",
    price: 250,
    image: clothe4,
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Cream", "Navy"],
  },

  {
    id: 26,
    name: "Bohemian Maxi Skirt",
    category: "Women",
    price: 799.5,
    image: clothe3,
    sizes: ["S", "M", "L"],
    colors: ["Olive", "Rust", "Navy"],
  },
  {
    id: 27,
    name: "Silk Blouse Long Text Name Example",
    category: "Women",
    price: 250,
    image: clothe8,
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Cream", "Navy"],
  },
  {
    id: 28,
    name: "Cartoon Character Hoodie",
    category: "Kids",
    price: 300,
    image: clothe9,
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    colors: ["Blue", "Pink", "Yellow"],
  },
  {
    id: 29,
    name: "Classic Chino Shorts",
    category: "Men",
    price: 599,
    image: clothe6,
    sizes: ["30", "32", "34", "36"],
    colors: ["Khaki", "Navy", "White"],
  },

  {
    id: 30,
    name: "Silk Blouse Long Text Name Example",
    category: "Women",
    price: 250,
    image: clothe4,
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Cream", "Navy"],
  },

  {
    id: 31,
    name: "Bohemian Maxi Skirt",
    category: "Women",
    price: 799.5,
    image: clothe3,
    sizes: ["S", "M", "L"],
    colors: ["Olive", "Rust", "Navy"],
  },
];

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const product = productData.find((p) => p.id === parseInt(productId));

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [isFavorite, setIsFavorite] = useState(false);

  if (!product) {
    return <div>Product Not Found</div>;
  }

  // Simulated additional product images (using existing images)
  const productImages = [
    product.image,
    ...productData.slice(0, 3).map((p) => p.image),
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + productImages.length) % productImages.length
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Breadcrumb Navigation */}
      <div className="max-w-screen-xl mx-auto px-4 pt-28 pb-6">
        <nav className="flex items-center space-x-2 text-base text-gray-500">
          <span>Store</span>
          <ChevronRight size={16} />
          <span>{product.category}'s Collection</span>
          <ChevronRight size={16} />
          <span className="font-semibold text-orange-600">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        {/* Product Image Section */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden relative">
            <img
              src={productImages[currentImageIndex]}
              alt={product.name}
              className="w-full h-[500px] object-cover"
            />

            {/* Image Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md"
            >
              <ChevronRight />
            </button>

            {/* Favorite Button */}
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`absolute top-4 right-4 p-3 rounded-full ${
                isFavorite
                  ? "bg-orange-600 text-white"
                  : "bg-white text-gray-600"
              } shadow-lg hover:scale-110 transition`}
            >
              <Heart size={22} fill={isFavorite ? "currentColor" : "none"} />
            </button>
          </div>

          {/* Thumbnail Images */}
          <div className="flex space-x-2 mt-4 justify-center">
            {productImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 ${
                  index === currentImageIndex
                    ? "border-orange-500"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            {product.name}
          </h1>

          {/* Product Rating */}
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex text-yellow-500">
              {[...Array(4)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
              <Star size={20} />
            </div>
            <span className="text-gray-600 text-sm">(24 Customer Reviews)</span>
          </div>

          {/* Price */}
          <div className="text-3xl font-extrabold text-orange-600 mb-6">
            Kshs.{" "}
            {new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(product.price)}
          </div>

          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Color</h3>
            <div className="flex space-x-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 transform transition-all ${
                    selectedColor === color
                      ? "border-orange-500 scale-110"
                      : "border-transparent hover:border-gray-300"
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Size</h3>
            <div className="flex space-x-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-lg border font-mono ${
                    selectedSize === size
                      ? "bg-orange-500 text-white border-orange-500"
                      : "bg-white text-brand-primary border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div className="mb-6 flex items-center space-x-4">
            <span className="font-semibold">Quantity:</span>
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              disabled={!selectedSize || !selectedColor}
              className={`flex-1 flex items-center justify-center gap-3 py-3 rounded-lg font-semibold transition ${
                selectedSize && selectedColor
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              <FaCartPlus size={22} />
              Add to Cart
            </button>
            <button
              disabled={!selectedSize || !selectedColor}
              className={`flex-1 flex items-center justify-center gap-3 py-3 rounded-lg font-semibold border-2 border-orange-500 transition ${
                selectedSize && selectedColor
                  ? "text-orange-500 hover:bg-orange-500 hover:text-white"
                  : "text-gray-300 border-gray-300 cursor-not-allowed"
              }`}
            >
              <FaShoppingBag size={22} />
              Buy Now
            </button>
          </div>

          {/* Product Guarantees */}
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center">
              <Shield className="text-orange-500 mb-2" size={32} />
              <span className="text-xs font-semibold">Secure Payment</span>
            </div>
            <div className="flex flex-col items-center">
              <Truck className="text-orange-500 mb-2" size={32} />
              <span className="text-xs font-semibold">Free Shipping</span>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="text-orange-500 mb-2" size={32} />
              <span className="text-xs font-semibold">Quality Assured</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Information Tabs */}
      <div className="max-w-screen-xl mx-auto px-4 mt-12">
        <div className="bg-white rounded-2xl shadow-lg">
          {/* Tab Navigation */}
          <div className="flex border-b">
            {["Description", "Specifications", "Reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`flex-1 py-4 font-semibold transition-colors ${
                  activeTab === tab.toLowerCase()
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-600 hover:text-orange-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "description" && (
              <p className="text-gray-700 leading-relaxed">
                {product.name} is a versatile and stylish piece that combines
                comfort with contemporary design. Crafted from high-quality
                materials, this garment is perfect for various occasions,
                offering both functionality and fashion-forward appeal.
              </p>
            )}

            {activeTab === "specifications" && (
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Product Details</h4>
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 text-gray-600">Category</td>
                        <td className="py-2 font-semibold">
                          {product.category}
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 text-gray-600">Available Sizes</td>
                        <td className="py-2 font-semibold">
                          {product.sizes.join(", ")}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 text-gray-600">Available Colors</td>
                        <td className="py-2 font-semibold">
                          {product.colors.join(", ")}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Material & Care</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Machine wash cold</li>
                    <li>Do not bleach</li>
                    <li>Tumble dry low</li>
                    <li>Iron medium heat</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <div className="flex items-center mb-6">
                  <div className="flex-grow">
                    <div className="flex items-center space-x-2">
                      <span className="text-4xl font-bold text-orange-600">
                        4.5
                      </span>
                      <div className="flex text-yellow-500">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} size={24} fill="currentColor" />
                        ))}
                        <Star size={24} />
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Based on 24 Customer Reviews
                    </p>
                  </div>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                    Write a Review
                  </button>
                </div>

                {/* Mock Reviews */}
                <div className="space-y-4">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="border-b pb-4">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex text-yellow-500">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} size={20} fill="currentColor" />
                          ))}
                          <Star size={20} />
                        </div>
                        <span className="text-gray-500 text-sm">
                          2 weeks ago
                        </span>
                      </div>
                      <h4 className="font-semibold">Great Product!</h4>
                      <p className="text-gray-700">
                        Amazing quality and perfect fit. Highly recommended for
                        anyone looking for a stylish and comfortable piece.
                      </p>
                      <div className="mt-2 text-sm text-gray-600">
                        <strong>John Doe</strong> - Verified Purchase
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
