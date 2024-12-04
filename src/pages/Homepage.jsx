import React, { useState } from "react";
import {
  ShoppingBag,
  User,
  Heart,
  Search,
  Menu,
  ChevronDown,
} from "lucide-react";
import heroImage from "../assets/images/ecommerce.jpg";
import HeroSection from "../components/Layout/HeroSection";
import FeaturedCategories from "../components/Layout/FeaturedCategories";
import Footer from "../components/Layout/Footer";
import Navbar from "../components/Layout/Navbar";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div
        className=" bg-cover bg-center "
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black bg-opacity-55">
          <Navbar />
          <HeroSection />
        </div>
      </div>
      {/* <Navbar /> */}
      <main className="flex-grow">
        <FeaturedCategories />
        {/* You can add more sections like New Arrivals, Featured Products, etc. */}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
