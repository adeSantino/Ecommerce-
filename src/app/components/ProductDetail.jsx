"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState('Choose colour');
  const [selectedSize, setSelectedSize] = useState('Size');
  const [mainImage, setMainImage] = useState(0);
  const [itemsDetailsOpen, setItemsDetailsOpen] = useState(false);
  const [deliveryPoliciesOpen, setDeliveryPoliciesOpen] = useState(false);

  const productImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1572935579930-b472e9e2954a?w=600&h=800&fit=crop&crop=center",
      alt: "Black dress",
      color: "Black"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=800&fit=crop&crop=center",
      alt: "Red dress",
      color: "Red"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&h=800&fit=crop&crop=center",
      alt: "Blue dress",
      color: "Blue"
    }
  ];

  const relatedProducts = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop&crop=center",
      alt: "Black dress with heart neckline",
      title: "Elegant Black Dress"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=400&fit=crop&crop=center",
      alt: "Black off-shoulder dress",
      title: "Off-Shoulder Dress"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=300&h=400&fit=crop&crop=center",
      alt: "Black one-shoulder dress",
      title: "One-Shoulder Dress"
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 fill-current ${
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

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Product Images */}
          <div className="flex gap-6">
            {/* Thumbnail Images */}
            <div className="flex flex-col gap-4">
              {productImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setMainImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    mainImage === index ? 'border-black' : 'border-gray-200'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Product Image */}
            <div className="flex-1">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={productImages[mainImage].src}
                  alt={productImages[mainImage].alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Product Information */}
          <div className="space-y-6">
            {/* Price and Sale Info */}
            <div>
              <h1 className="text-3xl font-bold text-black mb-2">Php X,XXX</h1>
              <p className="text-red-600 font-medium">Sale end on 30 August</p>
            </div>

            {/* Product Description */}
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Choose colour
              </label>
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-full px-3 py-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-black"
              >
                <option value="Choose colour">Choose colour</option>
                <option value="Black">Black</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
              </select>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Size
              </label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full px-3 py-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-black"
              >
                <option value="Size">Size</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-black text-white py-3 px-6 rounded-md font-medium hover:bg-gray-800 transition-colors">
                Buy
              </button>
              <button className="w-full bg-white text-black py-3 px-6 rounded-md font-medium border-2 border-black hover:bg-gray-50 transition-colors">
                Add to cart
              </button>
            </div>
          </div>
        </div>

        {/* Product Rating and Reviews Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Ratings */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">Product Rating</h2>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-bold">4</span>
                <span className="text-gray-600">out of 5</span>
                <div className="flex">{renderStars(4)}</div>
              </div>
            </div>

            {/* Rating Breakdown */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-green-600 font-bold">5/5</span>
                </div>
                <p className="text-sm text-gray-600">Item Quality</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-bold">5/5</span>
                </div>
                <p className="text-sm text-gray-600">Delivery</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-purple-600 font-bold">5/5</span>
                </div>
                <p className="text-sm text-gray-600">Item Quality</p>
              </div>
            </div>

            {/* Individual Reviews */}
            <div className="space-y-6">
              {[1, 2, 3].map((review, index) => (
                <div key={review} className="border-b border-gray-200 pb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">{renderStars(4)}</div>
                    <span className="text-sm text-gray-600">4</span>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="font-medium text-sm">John Doe</p>
                      <p className="text-xs text-gray-500">July 2025</p>
                    </div>
                  </div>
                  {index === 1 && (
                    <div className="flex gap-2 mt-3">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                        <Image
                          src={productImages[0].src}
                          alt="Review image"
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                        <Image
                          src={productImages[0].src}
                          alt="Review image"
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Additional Details */}
          <div className="space-y-6">
            {/* Items Details Dropdown */}
            <div className="border-2 border-black rounded-lg">
              <button 
                onClick={() => setItemsDetailsOpen(!itemsDetailsOpen)}
                className="w-full px-4 py-3 text-left font-medium text-black hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                Items Details
                <svg 
                  className={`w-5 h-5 transition-transform ${itemsDetailsOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {itemsDetailsOpen && (
                <div className="px-4 pb-4 border-t border-black">
                  <div className="pt-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-black font-medium">Material:</span>
                      <span className="text-black font-semibold">100% Polyester</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black font-medium">Care:</span>
                      <span className="text-black font-semibold">Machine wash cold</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black font-medium">Fit:</span>
                      <span className="text-black font-semibold">Regular fit</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black font-medium">Length:</span>
                      <span className="text-black font-semibold">Knee length</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black font-medium">Style:</span>
                      <span className="text-black font-semibold">Casual, Office</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Delivery and Return Policies Dropdown */}
            <div className="border-2 border-black rounded-lg">
              <button 
                onClick={() => setDeliveryPoliciesOpen(!deliveryPoliciesOpen)}
                className="w-full px-4 py-3 text-left font-medium text-black hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                Delivery and return policies
                <svg 
                  className={`w-5 h-5 transition-transform ${deliveryPoliciesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {deliveryPoliciesOpen && (
                <div className="px-4 pb-4 border-t border-black">
                  <div className="pt-4 space-y-4">
                    <div>
                      <h4 className="font-medium text-black mb-2">Delivery</h4>
                      <ul className="text-sm text-black space-y-1">
                        <li>• Free shipping on orders over PHP 2,000</li>
                        <li>• Standard delivery: 3-5 business days</li>
                        <li>• Express delivery: 1-2 business days</li>
                        <li>• Tracking number provided for all orders</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-black mb-2">Returns</h4>
                      <ul className="text-sm text-black space-y-1">
                        <li>• 30-day return policy</li>
                        <li>• Items must be unworn and unwashed</li>
                        <li>• Return shipping is free</li>
                        <li>• Refunds processed within 5-7 days</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-8">Related Product</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[3/4] mb-4">
                  <Image
                    src={product.src}
                    alt={product.alt}
                    width={300}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-black font-medium text-center">{product.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 