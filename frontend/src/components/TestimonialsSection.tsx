import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      role: "İş İnsanı",
      content: "Royal Car'dan araç kiraladım ve çok memnun kaldım. Araçlar temiz, hizmet hızlı ve profesyonel.",
      rating: 5,
      avatar: "AY"
    },
    {
      name: "Ayşe Demir",
      role: "Turist",
      content: "Türkiye'de tatil yaparken Royal Car'ı tercih ettim. Mükemmel bir deneyimdi, kesinlikle tavsiye ederim.",
      rating: 5,
      avatar: "AD"
    },
    {
      name: "Mehmet Kaya",
      role: "Öğrenci",
      content: "Uygun fiyatlı ve güvenilir araç kiralama hizmeti. Tekrar tercih edeceğim.",
      rating: 4,
      avatar: "MK"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Müşteri Yorumları</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Müşterilerimizin deneyimlerini dinleyin ve neden Royal Car'ı tercih ettiklerini öğrenin.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="w-6 h-6 text-primary-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 italic pl-4">
                  "{testimonial.content}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
