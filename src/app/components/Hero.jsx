const Hero = () => {
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Banner Section */}
        <div className="flex flex-col lg:flex-row gap-6 p-6 max-w-7xl mx-auto pt-12">
          {/* Left Side - Text Card */}
          <div className="bg-gray-100 rounded-2xl p-8 lg:w-2/5 flex flex-col justify-center">
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-5xl font-bold text-black">
                Lorem Ipsum
              </h1>
              <p className="text-gray-600 text-lg">
                Nieuse porro quisquam est qui
              </p>
              <p className="text-gray-600 text-lg pb-6">
                dolorem ipsum quia
              </p>
              <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors text-sm tracking-wide">
                Get started
              </button>
            </div>
          </div>
  
          {/* Right Side - Images */}
          <div className="lg:w-3/5 flex gap-6">
            {/* Middle Image */}
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
              <img
                src="/api/placeholder/500/600"
                alt="Fashion model in outdoor setting"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            
            {/* Right Image */}
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
              <img
                src="/api/placeholder/500/600"
                alt="Person with flowers"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
  
        {/* Explore Our Products Section */}
        <div className="max-w-7xl mx-auto px-6 py-16 mt-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-12">
              Explore Our Products
            </h2>
            
            <div className="mt-8">
              <h3 className="text-4xl font-bold text-black mb-4">
                Clothing
              </h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Clothing for adults and kids – we got you covered
              </p>
            </div>
          </div>
  
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Product 1 */}
            <div className="group cursor-pointer">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src="/api/placeholder/250/300"
                    alt="Casual outfit with black top and beige pants"
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-black mb-1">Minimalist Tee</h4>
                  <p className="text-gray-600 text-sm">$49.00</p>
                </div>
              </div>
            </div>
  
            {/* Product 2 */}
            <div className="group cursor-pointer">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src="/api/placeholder/250/300"
                    alt="Green shirt with beige pants"
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-black mb-1">Essential Shirt</h4>
                  <p className="text-gray-600 text-sm">$59.00</p>
                </div>
              </div>
            </div>
  
            {/* Product 3 */}
            <div className="group cursor-pointer">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src="/api/placeholder/250/300"
                    alt="Couple in matching green outfits"
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-black mb-1">Modern Set</h4>
                  <p className="text-gray-600 text-sm">$89.00</p>
                </div>
              </div>
            </div>
  
            {/* Product 4 */}
            <div className="group cursor-pointer">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src="/api/placeholder/250/300"
                    alt="Black elegant dress"
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-black mb-1">Classic Dress</h4>
                  <p className="text-gray-600 text-sm">$79.00</p>
                </div>
              </div>
            </div>
  
            {/* Product 5 */}
            <div className="group cursor-pointer">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src="/api/placeholder/250/300"
                    alt="Orange dress"
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-black mb-1">Summer Dress</h4>
                  <p className="text-gray-600 text-sm">$65.00</p>
                </div>
              </div>
            </div>
          </div>
  
          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="border border-black text-black px-8 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-colors text-sm">
              View All Products
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;