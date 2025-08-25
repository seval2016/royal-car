import React from "react";

const DriverDetails = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 sm:gap-6 lg:gap-16 mb-8 sm:mb-12 lg:mb-16 py-8 sm:py-16 lg:py-32 px-4 sm:px-6 lg:px-8">
      {/* Left Side - Title */}
      <div className="flex-1 w-full lg:w-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4 text-center lg:text-left">
          Our <span className="text-brand-yellow border-b-2 sm:border-b-4 border-brand-yellow">Drivers.</span>
        </h1>
      </div>
      
      {/* Right Side - Driver Info */}
      <div className="flex-1 w-full lg:w-auto bg-white/90 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
          {/* Driver Image */}
          <div className="flex-shrink-0">
            <img 
              src="/images/drivers/driver-blog-img-2.jpg" 
              alt="Roberto Garcia"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover"
            />
          </div>
          
          {/* Driver Details */}
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-brand-dark mb-2">
              Roberto Garcia
            </h3>
            <p className="text-brand-gray-medium text-xs sm:text-sm lg:text-base mb-3 sm:mb-4">
              5 Years Experienced as Driver
            </p>
            <p className="text-brand-dark text-xs sm:text-sm lg:text-base mb-4 sm:mb-6 leading-relaxed">
              We know the difference is in the details and that's why our car rental services, in the tourism and business industry, stand out for their quality and good taste.
            </p>
            
            {/* Social Media Links */}
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 sm:gap-4">
              <a href="#" className="flex items-center gap-1 sm:gap-2 text-brand-gray-medium hover:text-brand-yellow transition-colors text-xs sm:text-sm">
                <span>f</span>
                <span className="hidden sm:inline">facebook</span>
              </a>
              <a href="#" className="flex items-center gap-1 sm:gap-2 text-brand-gray-medium hover:text-brand-yellow transition-colors text-xs sm:text-sm">
                <span>twitter</span>
              </a>
              <a href="#" className="flex items-center gap-1 sm:gap-2 text-brand-gray-medium hover:text-brand-yellow transition-colors text-xs sm:text-sm">
                <span>Bē</span>
                <span className="hidden sm:inline">behance</span>
              </a>
              <a href="#" className="flex items-center gap-1 sm:gap-2 text-brand-gray-medium hover:text-brand-yellow transition-colors text-xs sm:text-sm">
                <span>G+</span>
                <span className="hidden sm:inline">Google+</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverDetails;
