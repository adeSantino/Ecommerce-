'use client';

import { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Link from 'next/link';

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  // Placeholder user & profile for demo; replace with your auth logic
  const user = null;
  const profile = null;

  const openLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  const openRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const closeModals = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <header className="bg-white shadow-md px-4 py-3 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-black">MyStore</div>

        {/* Categories Button */}
        <button
          onClick={toggleCategories}
          className="flex items-center space-x-1.5 text-gray-600 hover:text-black transition-colors px-3 py-2 rounded-md"
        >
          <div className="flex flex-col space-y-1.5">
            <div className="w-5 h-px bg-current"></div>
            <div className="w-5 h-px bg-current"></div>
            <div className="w-5 h-px bg-current"></div>
          </div>
          <span className="text-sm font-medium">Categories</span>
        </button>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-2">
          {user && profile ? (
            <>
              <Link href="/profile" className="text-sm font-medium text-black hover:underline">
                {profile.firstName && profile.lastName
                  ? `${profile.firstName} ${profile.lastName}`
                  : profile.email || user.email}
              </Link>
              <button
                onClick={() => {}}
                className="text-sm font-medium text-white bg-black px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={openLogin}
                className="hidden sm:block text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                Log In
              </button>
              <button
                onClick={openRegister}
                className="hidden sm:block text-sm font-medium text-white bg-black px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>

      {/* Categories Dropdown */}
      {isCategoriesOpen && (
        <div className="absolute left-0 right-0 top-full bg-white border-b border-gray-200 shadow-md z-50 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {['Electronics', 'Clothing', 'Home & Garden', 'Sports', 'Books', 'Automotive'].map((cat) => (
                <a
                  key={cat}
                  href="#"
                  className="text-sm text-gray-600 hover:text-black transition-colors py-1.5"
                >
                  {cat}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      <Login isOpen={isLoginOpen} onClose={closeModals} onSwitchToRegister={openRegister} />
      <Register isOpen={isRegisterOpen} onClose={closeModals} onSwitchToLogin={openLogin} />
    </header>
  );
};

export default Header;
