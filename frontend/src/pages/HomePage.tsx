import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, MapPin, Star } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import FeaturedCars from '@/components/FeaturedCars';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Cars */}
      <FeaturedCars />

      {/* Services Section */}
      <ServicesSection />

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Neden Royal Car'ı Seçmelisiniz?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium araç kiralama deneyiminde fark yaratan hizmetlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Güvenli Kiralama
              </h3>
              <p className="text-gray-600">
                Tüm araçlarımız sigortalı ve düzenli bakımlıdır
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                7/24 Hizmet
              </h3>
              <p className="text-gray-600">
                Her zaman yanınızdayız, acil durumlar için hazırız
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ücretsiz Teslimat
              </h3>
              <p className="text-gray-600">
                Araçlarınızı istediğiniz yere teslim ediyoruz
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Premium Kalite
              </h3>
              <p className="text-gray-600">
                Sadece en kaliteli araçları filomuzda bulunduruyoruz
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hemen Araç Kiralamaya Başlayın
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Geniş araç filomuzdan size en uygun olanı seçin ve yolculuğunuza başlayın
          </p>
          <Link
            to="/cars"
            className="inline-flex items-center space-x-2 bg-white text-primary-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <span>Araçları İncele</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
