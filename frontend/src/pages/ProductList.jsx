import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 60000,
      description: "Powerful and fast",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Headphones",
      price: 2500,
      description: "Wireless over-ear",
      image: "https://via.placeholder.com/150"
    }
  ]);

  const handleAddToCart = (product) => {
    alert(`✅ Added ${product.name} to cart`);
    // You can later manage cart state or send it to checkout page
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Product List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;































































// import React, { useState } from "react";
// import axios from "axios";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     description: ""
//   });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.price) {
//       setMessage("Please fill all required fields!");
//       return;
//     }

//     try {
//       // Post product data to backend
//       const response = await axios.post("http://localhost:5000/api/products", formData);

//       // Add the new product to the list
//       setProducts(prev => [...prev, response.data.product]);
//       setMessage(response.data.message || "Product added successfully!");

//       setFormData({ name: "", price: "", description: "" });
//     } catch (error) {
//       setMessage(
//         error.response?.data?.message || "Failed to add product. Try again."
//       );
//     }
//   };

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mb-8">
//         <h2 className="text-2xl font-bold mb-4 text-center">Add Product</h2>

//         {message && (
//           <p className="text-center mb-3 text-red-500 font-medium">{message}</p>
//         )}

//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Product Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full mb-3 p-2 border rounded"
//             required
//           />

//           <input
//             type="number"
//             name="price"
//             placeholder="Price"
//             value={formData.price}
//             onChange={handleChange}
//             className="w-full mb-3 p-2 border rounded"
//             required
//           />

//           <textarea
//             name="description"
//             placeholder="Description (optional)"
//             value={formData.description}
//             onChange={handleChange}
//             className="w-full mb-4 p-2 border rounded"
//           />

//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
//           >
//             Add Product
//           </button>
//         </form>
//       </div>

//       {/* Product List Section */}
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
//         <h2 className="text-2xl font-bold mb-4 text-center">Product List</h2>

//         {products.length === 0 ? (
//           <p className="text-center text-gray-500">No products added yet.</p>
//         ) : (
//           <ul>
//             {products.map((product, index) => (
//               <li
//                 key={index}
//                 className="border-b p-3 flex justify-between items-center"
//               >
//                 <div>
//                   <h3 className="font-semibold">{product.name}</h3>
//                   <p className="text-gray-600">₹{product.price}</p>
//                   {product.description && (
//                     <p className="text-sm text-gray-500">{product.description}</p>
//                   )}
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
