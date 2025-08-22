'use client';


import { useState } from 'react';

import Login from './Login';
import Register from './Register';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const router = useRouter();

  const closeModals = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  };


  const openLogin = () => {
    closeModals();
    setIsLoginOpen(true);
  };

  const openRegister = () => {
    closeModals();
    setIsRegisterOpen(true);
  };

    const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);

  };

  const goToCart = () => {
    router.push('/Cart');
  };

  return (
    <nav className="relative bg-white shadow-sm z-50 group">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between py-3 gap-3 sm:gap-0">
          
          {/* Logo */}
          <div className="flex items-center justify-between w-full sm:w-auto">
            <div className="flex items-center justify-between w-full sm:w-auto">
              <Link href="/" className="text-xl font-semibold text-black tracking-tight">
                  LOGO
              </Link>
            </div>

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
              onClick={toggleCategories}
              className="hidden sm:flex items-center space-x-1.5 text-gray-600 hover:text-black hover:bg-gray-100 transition-all duration-200 px-3 py-2 rounded-md"
            >
              <div className="flex flex-col space-y-1.5">
                <div className="w-5 h-px bg-current transition-all duration-200 group-hover:bg-black"></div>
                <div className="w-5 h-px bg-current transition-all duration-200 group-hover:bg-black"></div>
                <div className="w-5 h-px bg-current transition-all duration-200 group-hover:bg-black"></div>
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
                className="w-full px-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent text-sm text-black"
              />
              <button className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-black text-white rounded-full p-1.5 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>


          <div className="flex items-center space-x-4 mt-3 sm:mt-0 w-full sm:w-auto justify-between sm:justify-start">



            <button className="text-gray-600 hover:text-black transition-colors p-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            {/* Shopping Cart Icon */}
            <button className="text-gray-600 hover:text-black transition-colors p-1 relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-medium">0</span>
            </button>

            {/* User Info or Auth Buttons */}
            <button onClick={openLogin} className="hidden sm:block text-sm font-medium text-gray-600 hover:text-black transition-colors">Log In</button>
            <button onClick={openRegister} className="hidden sm:block text-sm font-medium text-white bg-black px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">Sign Up</button>

          </div>
        </div>
      </div>

      {/* Categories Dropdown */}
      <div className={`absolute left-0 right-0 top-full bg-white border-b border-gray-200 shadow-md z-50 transition-all duration-300 ease-in-out ${
        isCategoriesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto'
      }`}>
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

      {/* Login Modal */}
      <Login 
        isOpen={isLoginOpen} 
        onClose={closeModals}
        onSwitchToRegister={openRegister}
      />

      {/* Register Modal */}
      <Register 
        isOpen={isRegisterOpen} 
        onClose={closeModals}
        onSwitchToLogin={openLogin}
      />

    </nav>
  );
};

export default Header;