import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import ProductCard from "./ProductCard";
import { Search, SlidersHorizontal, X } from "lucide-react";
import clothe1 from "../../assets/images/casualShirts.jpg";
import clothe2 from "../../assets/images/denim-jeans.jpg";
import clothe3 from "../../assets/images/shirt1.jpg";
import clothe4 from "../../assets/images/jacket.jpg";
import clothe5 from "../../assets/images/suits.jpg";
import clothe6 from "../../assets/images/ladysuit.jpg";
import clothe7 from "../../assets/images/shirt2.jpg";
import clothe8 from "../../assets/images/shoe.jpg";
import clothe9 from "../../assets/images/suit2.jpg";

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
const FilterOverlay = ({ isOpen, onClose, onApplyFilters, initialFilters }) => {
  const [priceRange, setPriceRange] = useState(initialFilters.priceRange);
  const [selectedTypes, setSelectedTypes] = useState(initialFilters.types);
  const [selectedCategories, setSelectedCategories] = useState(
    initialFilters.categories
  );

  const productTypes = [
    "Trousers",
    "Shirts",
    "Shorts",
    "Shoes",
    "Jackets",
    "Accessories",
    "Dresses",
    "Skirts",
  ];

  const categories = ["Men", "Women", "Kids"];

  const handleApplyFilters = () => {
    onApplyFilters({
      priceRange,
      types: selectedTypes,
      categories: selectedCategories,
    });
    onClose();
  };

  const handleClearAllFilters = () => {
    setPriceRange(50000);
    setSelectedTypes([]);
    setSelectedCategories([]);
  };

  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleOverlayClick = (e) => {
    // Check if the click is on the overlay backdrop (not on the filter panel itself)
    if (e.target.classList.contains("backdrop")) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-x-0 top-[90px] bottom-0 backdrop-blur-sm bg-opacity-50 z-40 flex justify-end backdrop"
      onClick={handleOverlayClick}
    >
      <div
        className="w-96 bg-white bg-opacity-90 h-full p-6 rounded-tl-[28px] shadow-2xl overflow-y-auto"
        // Prevent clicks on the filter panel from closing the overlay
        onClick={(e) => e.stopPropagation()}
      >
        {/* Rest of the existing component remains the same */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Filters</h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleClearAllFilters}
              className="text-sm text-gray-600 font-semibold hover:text-orange-500 mr-8"
            >
              Clear All
            </button>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-red-500"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-3">Price Range</h3>
          <div className="flex items-center space-x-4">
            <input
              type="range"
              min="0"
              max="50000"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer range-slider"
            />
          </div>
          <div className="flex justify-between text-sm font-semibold text-brand-primary mt-2">
            <span>0</span>
            <span className="border-2 border-brand-primary rounded-md text-base text-brand-primary px-4">
              Kshs. {priceRange}
            </span>
            <span>50,000</span>
          </div>
        </div>

        {/* Product Types Filter */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-3">Product Types</h3>
          <div className="grid grid-cols-3 gap-2">
            {productTypes.map((type) => (
              <button
                key={type}
                onClick={() => toggleType(type)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  selectedTypes.includes(type)
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 border border-brand-primary border-opacity-20 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Filter */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-3">Categories</h3>
          <div className="flex space-x-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                  selectedCategories.includes(category)
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 border border-brand-primary border-opacity-20 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Apply Filters Button */}
        <button
          onClick={handleApplyFilters}
          className="w-full bg-orange-500 font-semibold text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

const ProductsPage = () => {
  const { category } = useParams(); // Get category from URL
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    priceRange: 50000,
    types: [],
    categories: [],
  });

  // Update selected category when route changes
  useEffect(() => {
    // Normalize the category from URL
    const normalizedCategory =
      category === "men"
        ? "Men"
        : category === "women"
          ? "Women"
          : category === "kids"
            ? "Kids"
            : "All";

    setSelectedCategory(normalizedCategory);
  }, [category]);

  const filteredProducts = productData.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    const matchesPriceRange = product.price <= activeFilters.priceRange;

    const matchesTypes =
      activeFilters.types.length === 0 ||
      activeFilters.types.some((type) =>
        product.name.toLowerCase().includes(type.toLowerCase())
      );

    const matchesProductCategories =
      activeFilters.categories.length === 0 ||
      activeFilters.categories.includes(product.category);

    return (
      matchesCategory &&
      matchesPriceRange &&
      matchesTypes &&
      matchesProductCategories
    );
  });

  const handleApplyFilters = (filters) => {
    setActiveFilters(filters);
  };

  return (
    <div>
      <Navbar />
      <FilterOverlay
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApplyFilters={handleApplyFilters}
        initialFilters={activeFilters}
      />
      <div className="bg-gray-100 min-h-screen pt-28 py-10">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="flex justify-between ">
            {/* Breadcrumb Navigation */}
            <div className="max-w-screen-xl mx-auto px-4 pt-28 pb-6">
              <nav className="flex items-center space-x-2 text-base text-gray-500">
                <span>Store</span>
                <ChevronRight size={16} />
                <span>{selectedCategory}'s Collection</span>
                <ChevronRight size={16} />
                <span className="font-semibold text-orange-600">
                  {product.name}
                </span>
              </nav>
            </div>
            <h1 className="py-2 px-4 pb-10 text-2xl font-bold text-orange-600">
              {selectedCategory === "All"
                ? "Store > All Products Collection"
                : `Store > ${selectedCategory}'s Collection`}
            </h1>
            <div className="flex items-center space-x-4 w-full max-w-2xl">
              {/* Search Bar */}
              <div className="relative flex-grow">
                <input
                  type="text"
                  className="border-2 border-brand-primary px-4 py-2 pl-14 font-semibold rounded-full w-full"
                  placeholder="Search product name...."
                />
                <Search className="absolute left-4 top-3 text-gray-500" />
              </div>

              {/* Filter Button */}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="text-orange-500 p-2 font-semibold flex rounded-lg hover:border hover:text-white hover:bg-orange-600"
              >
                <SlidersHorizontal size={28} />
              </button>
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
