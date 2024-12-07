import React from "react";
import productData from "../../data/productData.json";
import ProductCard from "./ProductCard";
import clothe1 from "../../assets/images/casualShirts.jpg";
import clothe2 from "../../assets/images/denim-jeans.jpg";
import clothe3 from "../../assets/images/shirt1.jpg";
import clothe4 from "../../assets/images/jacket.jpg";
import clothe5 from "../../assets/images/suits.jpg";
import clothe6 from "../../assets/images/ladysuit.jpg";
import clothe7 from "../../assets/images/shirt2.jpg";
import clothe8 from "../../assets/images/shoe.jpg";
import clothe9 from "../../assets/images/suit2.jpg";

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
const productsWithImages = productData.map(product => ({
  ...product,
  image: imageMap[product.image]
}));

const AllProducts = () => {
  return (
    <section className="my-12 px-4 lg:px-16 max-w-screen-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsWithImages.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
