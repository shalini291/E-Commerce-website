import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition">
      {/* Product Image */}
      <div className="w-full h-48 mb-3 flex items-center justify-center bg-gray-100 rounded">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="object-contain h-full"
          />
        ) : (
          <span className="text-gray-400">No Image</span>
        )}
      </div>

      {/* Product Info */}
      <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-2">{product.description || "No description"}</p>
      <p className="text-blue-600 font-bold text-lg mb-3">₹{product.price}</p>

      {/* Add to Cart Button */}
      <button
        onClick={() => onAddToCart(product)}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;