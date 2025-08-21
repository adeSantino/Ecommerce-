'use client';

import { useState } from 'react';

const Header = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between h-auto sm:h-16 py-3 sm:py-0">

          {/* Logo + Categories */}
          <div className="flex items-center w-full sm:w-auto justify-between sm:justify-start">
            <h1 className="text-xl font-semibold text-black tracking-tight">LOGO</h1>

            {/* Mobile Categories Button */}
            <button
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="sm:hidden flex items-center space-x-1.5 text-gray-600 hover:text-black transition-colors px-3 py-2 rounded-md"
            >
              <div className="flex flex-col space-y-1.5">
                <div className="w-5 h-px bg-current"></div>
                <div className="w-5 h-px bg-current"></div>
                <div className="w-5 h-px bg-current"></div>
              </div>
              <span className="text-sm font-medium">Categories</span>
            </button>

            {/* Desktop Categories Button */}
            <button
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="hidden sm:flex items-center space-x-1.5 text-gray-600 hover:text-black transition-colors px-3 py-2 rounded-md ml-4"
            >
              <div className="flex flex-col space-y-1.5">
                <div className="w-5 h-px bg-current"></div>
                <div className="w-5 h-px bg-current"></div>
                <div className="w-5 h-px bg-current"></div>
              </div>
              <span className="text-sm font-medium">Categories</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="w-full sm:max-w-md mt-3 sm:mt-0 sm:mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for anything"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent text-sm"
              />
              <button className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-black text-white rounded-full p-1.5 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* User Action Icons */}
          <div className="flex items-center space-x-4 sm:space-x-5 mt-3 sm:mt-0">
            <span className="text-sm text-gray-600 hover:text-black transition-colors cursor-pointer font-medium">Sign in</span>

            <button className="text-gray-600 hover:text-black transition-colors p-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            <button className="text-gray-600 hover:text-black transition-colors p-1 relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-medium">0</span>
            </button>
          </div>
        </div>
      </div>

      {/* Categories Dropdown */}
      <div className={`absolute left-0 w-full bg-white border-b border-gray-200 shadow-md z-50 transition-all duration-300 ease-in-out ${isCategoriesOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors py-1.5">Electronics</a>
            <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors py-1.5">Clothing</a>
            <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors py-1.5">Home & Garden</a>
            <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors py-1.5">Sports</a>
            <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors py-1.5">Books</a>
            <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors py-1.5">Automotive</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
