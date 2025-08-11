import { Car, Shield, Clock, MapPin } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Günlük Kiralama",
      description: "Kısa süreli ihtiyaçlarınız için esnek günlük kiralama seçenekleri."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Tam Sigorta",
      description: "Tüm araçlarımız tam sigortalıdır, güvenle seyahat edin."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "7/24 Destek",
      description: "Her zaman yanınızdayız, acil durumlarda hemen ulaşın."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Teslimat Hizmeti",
      description: "Aracınızı istediğiniz yere teslim ediyoruz."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Hizmetlerimiz</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Size en iyi araç kiralama deneyimini sunmak için kapsamlı hizmetler sağlıyoruz.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
