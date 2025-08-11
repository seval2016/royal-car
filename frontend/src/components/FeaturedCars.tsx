const FeaturedCars = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Öne Çıkan Arabalar</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            En popüler ve güvenilir araçlarımızı keşfedin. Lüks ve konfor için özel seçilmiş araçlar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for car cards */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Araç Adı</h3>
            <p className="text-gray-600 mb-4">Araç açıklaması burada yer alacak.</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-primary-600">₺500/gün</span>
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                Detaylar
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Araç Adı</h3>
            <p className="text-gray-600 mb-4">Araç açıklaması burada yer alacak.</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-primary-600">₺600/gün</span>
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                Detaylar
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Araç Adı</h3>
            <p className="text-gray-600 mb-4">Araç açıklaması burada yer alacak.</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-primary-600">₺700/gün</span>
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                Detaylar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
