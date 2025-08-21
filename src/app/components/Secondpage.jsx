"use client";
import React from "react";
import { Roboto } from "next/font/google";

// ✅ Import Roboto font
const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

// ✅ Pagination Component
const Pagination = () => {
    return (
        <div className="flex flex-col items-center mt-12 space-y-4">
            <p className="text-xl font-roboto text-gray-900 tracking-tight">
                There's so much more for you to discover
            </p>

            <div className="flex items-center space-x-2 rounded-lg px-2 py-1 bg-white ">
                <a href="#" className="flex items-center justify-center w-8 h-8 rounded-md text-gray-400">
                    &lt;
                </a>
                <a href="#" className="flex items-center justify-center w-8 h-8 rounded-md border border-gray-200 text-gray-900">
                    1
                </a>
                <a href="#" className="flex items-center justify-center w-8 h-8 rounded-md border border-indigo-500 text-indigo-700 font-medium">
                    2
                </a>
                <span className="text-gray-500 px-2">...</span>
                <a href="#" className="flex items-center justify-center w-8 h-8 rounded-md border border-gray-200 text-gray-900">
                    9
                </a>
                <a href="#" className="flex items-center justify-center w-8 h-8 rounded-md border border-gray-200 text-gray-900">
                    10
                </a>
                <a href="#" className="flex items-center justify-center w-8 h-8 rounded-md text-gray-900">
                    &gt;
                </a>
            </div>
        </div>
    );
};

const SecondPage = () => {
    const products = [
        { id: 1, name: "T-shirt", image: "/coat.jpg" },
        { id: 2, name: "Jacket", image: "/coat2.jpg" },
        { id: 3, name: "Pants", image: "/coat3.jpg" },
        { id: 4, name: "Dress", price: "PHP x,xxx", image: "/images/product4.png", rating: 3 },
        { id: 5, name: "Shoes", price: "PHP x,xxx", image: "/images/product5.png", rating: 5 },
        { id: 6, name: "Bag", price: "PHP x,xxx", image: "/images/product6.png", rating: 4 },
        { id: 7, name: "Cap", price: "PHP x,xxx", image: "/images/product7.png", rating: 5 },
        { id: 8, name: "Blouse", price: "PHP x,xxx", image: "/images/product8.png", rating: 4 },
        { id: 9, name: "Shorts", price: "PHP x,xxx", image: "/images/product9.png", rating: 3 },
        { id: 10, name: "Shirt", price: "PHP x,xxx", image: "/images/product10.png", rating: 5 },
        { id: 11, name: "Lorem ipsum dolor sit amet, consectetur", price: "PHP x,xxx", emoji: "🥾", rating: 4 },
        { id: 12, name: "Lorem ipsum dolor sit amet, consectetur", price: "PHP x,xxx", emoji: "👒", rating: 5 },
        { id: 13, name: "Lorem ipsum dolor sit amet, consectetur", price: "PHP x,xxx", emoji: "🧦", rating: 4 },
        { id: 14, name: "Lorem ipsum dolor sit amet, consectetur", price: "PHP x,xxx", emoji: "👓", rating: 5 },
        { id: 15, name: "Lorem ipsum dolor sit amet, consectetur", price: "PHP x,xxx", emoji: "🧤", rating: 4 },
        { id: 16, name: "Lorem ipsum dolor sit amet, consectetur", price: "PHP x,xxx", emoji: "🧣", rating: 5 },
        { id: 17, name: "Lorem ipsum dolor sit amet, consectetur", price: "PHP x,xxx", emoji: "👞", rating: 4 },
        { id: 18, name: "Lorem ipsum dolor sit amet, consectetur", price: "PHP x,xxx", emoji: "🥿", rating: 5 },
        { id: 19, name: "Lorem ipsum dolor sit amet, consectetur", price: "PHP x,xxx", emoji: "👡", rating: 4 },
        { id: 20, name: "Lorem ipsum dolor sit amet, consectetur", price: "PHP x,xxx", emoji: "🧳", rating: 5 },
        { id: 21, name: "Lorem ipsum dolor sit amet, consectetur", price: "PHP x,xxx", emoji: "🎒", rating: 4 },
        { id: 22, name: "Lorem ipsum dolor sit amet, consectetur", price: "PHP x,xxx", emoji: "👛", rating: 5 },
        { id: 23, name: "Lorem ipsum dolor sit amet, consectetur", price: "PHP x,xxx", emoji: "💼", rating: 4 },
    ];

    const featuredProducts = products.slice(0, 3); // First 3 products
    const otherProducts = products.slice(3);

    // Star Rating Renderer
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <svg
                    key={i}
                    className={`h-4 w-4 ${i < rating ? "text-black-400" : "text-gray-300"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            );
        }
        return stars;
    };

    return (
        <div className={`${roboto.className} bg-white p-6`}>
            <div className="mx-auto max-w-7xl">
                <h1 className="text-3xl font-bold mb-10 text-gray-900 tracking-tight">Shop the Look</h1>

                {/* 🔥 Featured Row (Portrait Mode Images) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {featuredProducts.map((product) => (
                        <div key={product.id} className="bg-white p-6 flex flex-col items-center">
                            {/* ✅ Portrait mode: taller than wide with image */}
                            <div className="flex items-center justify-center w-48 md:w-56 lg:w-64 h-72 md:h-80 lg:h-96 mb-4 rounded-lg bg-gray-50 overflow-hidden">
                                <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
                            </div>
                            {/* ✅ Removed title, stars, and price */}
                        </div>
                    ))}
                </div>

                {/* 🛍️ Other Products */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {otherProducts.map((product) => (
                        <div key={product.id} className="bg-white p-4 flex flex-col items-center">
                            <div className="flex items-center justify-center w-full h-40 md:h-52 lg:h-64 mb-3 rounded-md bg-gray-50 overflow-hidden">
                                <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
                            </div>
                            <div className="w-full text-center space-y-1">
                                <p className="text-sm text-gray-700 line-clamp-2">{product.name}</p>
                                <div className="flex justify-center items-center">{renderStars(product.rating)}</div>
                                <p className="text-sm font-semibold text-gray-900">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ✅ Pagination */}
                <Pagination />
                {/* 🔎 Search Bar under Pagination */}
                <div className="flex justify-center mt-6">
                    <div className="w-full max-w-md">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for anything"
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent text-sm"
                            />
                            <button className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-black text-white rounded-full p-1.5 transition-colors">
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
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
            </div>
        </div>
    );
};

export default SecondPage;
