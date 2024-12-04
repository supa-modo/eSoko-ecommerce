import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ProductsPage from "./components/Products/ProductList";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:category" element={<ProductsPage />} />
        <Route
          path="/product-details/:productId"
          element={<ProductDetailsPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
