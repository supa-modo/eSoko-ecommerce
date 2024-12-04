import { ArrowBigRight, ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({
  store = "Store",
  selectedCategory = null,
  product = null,
  className = "",
}) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center space-x-2 text-gray-500 ${className}`}
    >
      {/* Always have Store as the first link */}
      <Link
        to="/"
        className="hover:text-gray-700 hover:underline transition-colors"
      >
        {store}
      </Link>

      {/* Render selectedCategory if provided */}
      {selectedCategory && (
        <>
          <ChevronRight />

          {/* If product exists, make category clickable. Otherwise, keep it as current page */}
          {product ? (
            <Link
              to={`/products/${selectedCategory}`}
              className="hover:text-gray-700 hover:underline transition-colors"
            >
              {`${selectedCategory}'s Collection`}
            </Link>
          ) : (
            <span className="text-gray-700 font-semibold">
              {selectedCategory}'s Collection
            </span>
          )}
        </>
      )}

      {/* Render product if provided */}
      {product && (
        <>
          <ChevronRight />

          <span className="text-brand-primary font-semibold">{product}</span>
        </>
      )}
    </nav>
  );
};

export default Breadcrumbs;
