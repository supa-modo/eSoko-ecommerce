import React from "react";
import heroImage from "../assets/images/ecommerce.jpg";
import HeroSection from "../components/Layout/HeroSection";
import FeaturedCategories from "../components/Layout/FeaturedCategories";
import AllProducts from "../components/Products/AllProducts";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Navbar />
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black bg-opacity-55">
          <HeroSection />
        </div>
      </div>
      <main className="flex-grow">
        <FeaturedCategories />
        <AllProducts />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
