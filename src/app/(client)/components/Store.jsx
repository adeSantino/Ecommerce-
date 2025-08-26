"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Store = () => {
  const router = useRouter();
  const [imageErrors, setImageErrors] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const productsPerPage = 8;

  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1572935579930-b472e9e2954a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Elegant black dress",
      title: "Elegant Black Evening Dress",
      rating: 5,
      price: "PHP 3,500",
      category: "dresses"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1572935579930-b472e9e2954a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Light green dress",
      title: "Summer Green Floral Dress",
      rating: 5,
      price: "PHP 2,800",
      category: "dresses"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1560965319-33d3c80a2416?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Grey elegant dress",
      title: "Elegant Grey Office Dress",
      rating: 5,
      price: "PHP 3,200",
      category: "dresses"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop",
      alt: "Maroon coat",
      title: "Classic Maroon Winter Coat",
      rating: 5,
      price: "PHP 4,100",
      category: "outerwear"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1598282305596-f99a39f60f85?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Embroidered jacket",
      title: "Embroidered Denim Jacket",
      rating: 5,
      price: "PHP 2,950",
      category: "jackets"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1549491689-d65e1ef9375e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Red Bull jacket",
      title: "Red Bull Racing Jacket",
      rating: 5,
      price: "PHP 1,850",
      category: "jackets"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1522062325375-d147814c995f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Brown jacket",
      title: "Vintage Brown Leather Jacket",
      rating: 5,
      price: "PHP 2,700",
      category: "jackets"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1620794595292-15f17d740c26?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Grey hoodie",
      title: "Comfortable Grey Hoodie",
      rating: 5,
      price: "PHP 1,500",
      category: "activewear"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1620794689036-7c1543c7b605?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Omar t-shirt",
      title: "Premium Cotton T-Shirt",
      rating: 5,
      price: "PHP 950",
      category: "tops"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Brown leather jacket",
      title: "Classic Brown Leather Jacket",
      rating: 5,
      price: "PHP 3,900",
      category: "jackets"
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1541534741619-a1d2f6027a05?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Green jacket",
      title: "Army Green Utility Jacket",
      rating: 5,
      price: "PHP 2,400",
      category: "jackets"
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "White sneakers",
      title: "Classic White Sneakers",
      rating: 5,
      price: "PHP 2,200",
      category: "shoes"
    }
  ];

  const categories = ['all', 'dresses', 'jackets', 'outerwear', 'tops', 'activewear', 'shoes'];

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 fill-current ${
            i < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      );
    }
    return stars;
  };

  // Filter products by category
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                selectedCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProducts.map((product, index) => (
            <div key={product.id} className="group cursor-pointer product-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <div className="bg-gray-100 rounded-xl overflow-hidden aspect-square mb-4 relative">
                <Image
                  src={imageErrors[index] ? '/fallback-image.png' : product.image}
                  alt={product.alt}
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={() => handleImageError(index)}
                />
              </div>
              <div className="p-4 text-left">
                <h3 className="text-black font-normal text-sm mb-1 line-clamp-2">
                  {product.title}
                </h3>
                <div className="flex items-center mb-1">
                  <div className="flex">{renderStars(product.rating)}</div>
                  <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                </div>
                <p className="text-black font-semibold text-sm">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* No products message */}
        {currentProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found in this category.</p>
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center items-center mt-12">
          <nav className="flex items-center space-x-2">
            {/* Previous Button */}
            <button 
              onClick={() => currentPage > 1 && paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="pagination-btn px-3 py-2 text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`pagination-btn px-3 py-2 border rounded-md transition-colors ${
                  currentPage === number
                    ? 'text-white bg-black border-black'
                    : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50'
                }`}
              >
                {number}
              </button>
            ))}

            {/* Next Button */}
            <button 
              onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="pagination-btn px-3 py-2 text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Store;