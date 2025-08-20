const Highlight = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            Shop the Look
          </h2>
        </div>

        {/* Three Fashion Outfit Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Image - Woman in formal business suit */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-[4/5]">
            <img
              src="https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg?w=400&h=500&fit=crop&crop=center"
              alt="Woman in formal business suit"
              className="w-full h-full object-cover"
            />
          </div>    

          {/* Middle Image - Man in formal attire */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-[4/5]">
            <img
              src="https://images.pexels.com/photos/3771840/pexels-photo-3771840.jpeg?w=400&h=500&fit=crop&crop=center"
              alt="Man in formal business attire"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Image - Woman in elegant formal dress */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-[4/5]">
            <img
              src="https://images.pexels.com/photos/3771841/pexels-photo-3771841.jpeg?w=400&h=500&fit=crop&crop=center"
              alt="Woman in elegant formal dress"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
