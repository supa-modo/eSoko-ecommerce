import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ProductsPage from "./components/Products/ProductList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:category" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
