const Suggestion = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Area - Text and Button */}
          <div className="lg:w-2/5 mb-8 lg:mb-0 lg:pr-10">
            <div>
              <h2 className="text-3xl lg:text-4xl font-light text-black mb-6 leading-tight">
                Lorem ipsum dolor sit<br />amet
              </h2>
              <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors text-sm tracking-wide">
                Get inspired
              </button>
            </div>
          </div>

          {/* Right Area - Three Image Cards */}
          <div className="lg:w-3/5 flex gap-4">
            {/* Image Card 1 - Stylish dress */}
            <div className="flex-1">
              <div className="bg-gray-100 rounded-xl aspect-square overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?w=280&h=280&fit=crop&crop=center"
                  alt="Elegant woman in stylish dress"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Image Card 2 - Fashion accessories */}
            <div className="flex-1">
              <div className="bg-gray-100 rounded-xl aspect-square overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?w=280&h=280&fit=crop&crop=center"
                  alt="Fashion accessories and jewelry"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Image Card 3 - Casual fashion */}
            <div className="flex-1">
              <div className="bg-gray-100 rounded-xl aspect-square overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?w=280&h=280&fit=crop&crop=center"
                  alt="Casual fashion outfit"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Five Image Panels */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Panel 1 - Woman in elegant dress */}
            <div className="bg-gray-100 rounded-xl overflow-hidden aspect-square">
              <img
                src="https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?w=300&h=300&fit=crop&crop=center"
                alt="Young woman in elegant dress"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Panel 2 - Woman with stylish outfit */}
            <div className="bg-gray-100 rounded-xl overflow-hidden aspect-square">
              <img
                src="https://images.pexels.com/photos/3771835/pexels-photo-3771835.jpeg?w=300&h=300&fit=crop&crop=center"
                alt="Young woman with stylish outfit and accessories"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Panel 3 - Woman in trendy outfit */}
            <div className="bg-gray-100 rounded-xl overflow-hidden aspect-square">
              <img
                src="https://images.pexels.com/photos/3771836/pexels-photo-3771836.jpeg?w=300&h=300&fit=crop&crop=center"
                alt="Woman in trendy fashion outfit"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Panel 4 - Fashion street style */}
            <div className="bg-gray-100 rounded-xl overflow-hidden aspect-square">
              <img
                src="https://images.pexels.com/photos/3771837/pexels-photo-3771837.jpeg?w=300&h=300&fit=crop&crop=center"
                alt="Fashion street style with urban background"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Panel 5 - Elegant woman in dress */}
            <div className="bg-gray-100 rounded-xl overflow-hidden aspect-square">
              <img
                src="https://images.pexels.com/photos/3771838/pexels-photo-3771838.jpeg?w=300&h=300&fit=crop&crop=center"
                alt="Elegant woman in beautiful dress"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;