import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { Heart, ShoppingCart, CheckCircle, Search } from "lucide-react";
import { FaCartPlus } from "react-icons/fa";
import clothe1 from "../../assets/images/casualShirts.jpg";
import clothe2 from "../../assets/images/denim-jeans.jpg";
import clothe3 from "../../assets/images/shirt1.jpg";
import clothe4 from "../../assets/images/jacket.jpg";
import clothe5 from "../../assets/images/suits.jpg";
import clothe6 from "../../assets/images/ladysuit.jpg";
import clothe7 from "../../assets/images/shirt2.jpg";
import clothe8 from "../../assets/images/shoe.jpg";
import clothe9 from "../../assets/images/suit2.jpg";

import Navbar from "../Layout/Navbar";
import ProductCard from "./ProductCard";

// Mock Product Data
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
    price: 1956099.99,
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
];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? productData
      : productData.filter((product) => product.category === selectedCategory);

  const categories = ["All", "Men", "Women", "Kids"];

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen pt-28 py-10">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="flex justify-between ">
            <h1 className="py-2 px-4 pb-8 text-2xl font-bold text-orange-600">
              All Products Collection
            </h1>
            {/* Search Bar */}
            <div className="relative w-1/2">
              <input
                type="text"
                className="border-2 border-brand-primary px-4 py-2 pl-14 font-semibold rounded-full w-full"
                placeholder="Search product name...."
              />
              <Search className="absolute left-4 top-3 text-gray-500" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
