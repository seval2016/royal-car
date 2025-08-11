import React from 'react';

const SearchForm = () => {
  return (
         <div className="absolute bottom-0 left-0 right-0 z-20">
       <div className="bg-black/10 backdrop-blur-sm">
         <div className="container mx-auto px-4 py-6 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                         <div>
               <label className="block text-white font-normal mb-2 md:mb-3 text-xs md:text-sm uppercase">
                 Car Brand
               </label>
               <select className="w-full px-3 md:px-4 py-3 md:py-4 border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent text-sm shadow-sm bg-white/90 backdrop-blur-sm">
                <option>Select car brand</option>
                <option>Audi</option>
                <option>BMW</option>
                <option>Mercedes</option>
                <option>Volkswagen</option>
                <option>Toyota</option>
                <option>Honda</option>
              </select>
            </div>
                         <div>
               <label className="block text-white font-normal mb-2 md:mb-3 text-xs md:text-sm uppercase">
                 Car Type
               </label>
               <select className="w-full px-3 md:px-4 py-3 md:py-4 border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent text-sm shadow-sm bg-white/90 backdrop-blur-sm">
                <option>Select car type</option>
                <option>Sedan</option>
                <option>SUV</option>
                <option>Hatchback</option>
                <option>Van</option>
                <option>Sports</option>
                <option>Luxury</option>
              </select>
            </div>
                         <div>
               <label className="block text-white font-normal mb-2 md:mb-3 text-xs md:text-sm uppercase">
                 Car Price
               </label>
               <select className="w-full px-3 md:px-4 py-3 md:py-4 border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent text-sm shadow-sm bg-white/90 backdrop-blur-sm">
                <option>Select price range</option>
                <option>$50 - $100</option>
                <option>$100 - $150</option>
                <option>$150 - $200</option>
                <option>$200 - $300</option>
                <option>$300+</option>
              </select>
            </div>
            <div className="flex items-end">
                             <button
                 type="submit"
                 className="w-full py-3 md:py-4 transition-colors font-normal text-base md:text-lg shadow-lg hover:shadow-xl uppercase"
                 style={{ backgroundColor: '#ffcd00', color: '#000' }}
               >
                Search Car Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
