import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/Homepage";
import ProductsPage from "./pages/ProductList";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import FavoritesPage from "./pages/FavoritesPage";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import { AuthProvider } from "./context/AuthContext";

function Layout({ children }) {
  const location = useLocation();
  const noLayoutPaths = ["/login", "/signup"];

  const hideLayout = noLayoutPaths.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!hideLayout && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products/:category" element={<ProductsPage />} />
            <Route
              path="/product-details/:productId"
              element={<ProductDetailsPage />}
            />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/favourites" element={<FavoritesPage />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
