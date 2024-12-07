import React from "react";
import productData from "../../data/productData.json";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  return (
    <section className="my-12 px-4 lg:px-16 max-w-screen-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
