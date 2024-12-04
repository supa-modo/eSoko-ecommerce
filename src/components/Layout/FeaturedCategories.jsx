import React from "react";

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

export default FeaturedCategories;
