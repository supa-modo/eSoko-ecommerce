import React, { useState, useEffect } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
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
import Breadcrumbs from "../Layout/BreadcrumbNavigation";
import Footer from "../Layout/Footer";
import productDataJson from "../../data/productData.json";

// Map image names to imported images
const imageMap = {
  clothe1,
  clothe2,
  clothe3,
  clothe4,
  clothe5,
  clothe6,
  clothe7,
  clothe8,
  clothe9,
};

// Process the JSON data to include actual image objects
const productData = productDataJson.map((product) => ({
  ...product,
  image: imageMap[product.image],
}));

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
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = React.createRef();
  const navigate = useNavigate();
  const [activeFilters, setActiveFilters] = useState({
    priceRange: 50000,
    types: [],
    categories: [],
  });

  // Load all products for the All Products section
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    setAllProducts(productData);
  }, []);

  // Update selected category when route changes
  useEffect(() => {
    if (category) {
      // Normalize the category from URL
      const normalizedCategory =
        category.toLowerCase() === "men"
          ? "Men"
          : category.toLowerCase() === "women"
            ? "Women"
            : category.toLowerCase() === "kids"
              ? "Kids"
              : "All";

      setSelectedCategory(normalizedCategory);
    } else {
      setSelectedCategory("All");
    }
  }, [category]);

  const filteredProducts = productData.filter((product) => {
    const matchesSearch = searchQuery
      ? product.name.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

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
      matchesSearch &&
      matchesCategory &&
      matchesPriceRange &&
      matchesTypes &&
      matchesProductCategories
    );
  });

  const handleApplyFilters = (filters) => {
    setActiveFilters(filters);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 2) {
      const matchingProducts = productData.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(matchingProducts);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (product) => {
    setSearchQuery(product.name);
    navigate(`/product-details/${product.id}`);
    setSuggestions([]);
    setShowSuggestions(false);
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
      <div className="bg-gray-100 min-h-screen pt-24 py-10">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="flex justify-between ">
            {/* Breadcrumb Navigation */}
            <h1 className="py-2 px-4 pb-10 text-2xl font-bold text-orange-600">
              <Breadcrumbs
                className="mt-3 px-4 text-2xl font-bold text-orange-600"
                store="Store"
                selectedCategory={selectedCategory}
              />
            </h1>
            <div className="flex items-center space-x-4 w-full max-w-2xl mb-2">
              {/* Search Bar */}
              <div className="relative flex-grow" ref={searchRef}>
                <input
                  type="text"
                  className="border-2 border-brand-primary px-4 py-2 pl-14 font-semibold rounded-full w-full"
                  placeholder="Search product name...."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <Search className="absolute left-4 top-3 text-gray-500" />

                {/* Suggestions Overlay */}
                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-300 ease-in-out">
                    {suggestions.map((product, index) => (
                      <div
                        key={product.id}
                        className={`px-4 py-3 cursor-pointer hover:bg-orange-500 text-gray-600 hover:text-white flex items-center space-x-3 ${
                          index !== suggestions.length - 1
                            ? "border-b border-gray-100"
                            : ""
                        }`}
                        onClick={() => handleSuggestionClick(product)}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-10 h-10 object-cover rounded-md"
                        />
                        <div>
                          <div className="font-semibold  ">{product.name}</div>
                          <div className="text-sm font-semibold">
                            Kshs. {product.price.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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
      <Footer />
    </div>
  );
};

export default ProductsPage;
