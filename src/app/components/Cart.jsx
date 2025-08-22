// components/Cart.jsx
import React from "react";
import { Roboto } from "next/font/google";

// 🔹 Load Roboto font
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // normal, medium, bold
});

const Cart = () => {
  return (
    // 🔹 Page wrapper (background + spacing + roboto font + black text)
    <div
      className={`min-h-screen bg-gray-100 p-8 text-black ${roboto.className}`}
    >
      {/* 🔹 Big Box Container (wraps everything inside) */}
      <div
        className="border rounded-lg shadow-lg bg-white p-6 min-h-screen flex flex-col" 
        // 🆕 Added `min-h-screen` to make the white box stretch to bottom
        // 🆕 Added `flex flex-col` so content stays vertical and aligned
      >
        {/* 🔹 Header Section (logo + search) */}
        <div className="border rounded-md p-4 mb-6">
          <div className="flex justify-between items-center">
            {/* Left side: Logo + Cart title */}
            <div className="flex items-center">
              <span className="text-xl font-bold mr-2">Logo</span>
              <span className="text-xl font-bold">| Cart</span>
            </div>

            {/* Right side: Search bar */}
            <div className="flex items-center border rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 focus:outline-none"
              />
              <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300">
                {/* Search icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* 🔹 Table Header (labels for product info) */}
        <div className="border rounded-md p-3 mb-4 ">
          {/* 🆕 fixed `-50` typo → changed to `bg-gray-50` */}
          <div className="grid grid-cols-6 gap-4 font-semibold text-black">
            <div className="col-span-2">Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total Price</div>
            <div>Actions</div>
          </div>
        </div>

        {/* 🔹 Cart Content (empty state for now) */}
        <div className="flex-1 flex items-center justify-center text-black">
          {/* 🆕 Added `flex-1 flex items-center justify-center` 
              so empty state stays centered while box still stretches */}
          Your cart is empty.
        </div>
      </div>
    </div>
  );
};

export default Cart;
