import React from "react";
import contactData from "../../data/contact.json";

interface OfficeInfo {
  id: number;
  title: string;
  image: string;
  address: string;
  phone: string;
  email: string;
  workingHours: string;
  description: string;
}

const ContactHero: React.FC = () => {
  const offices: OfficeInfo[] = contactData.offices;

  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {offices.map((office, index) => (
            <div key={index} className="bg-white overflow-hidden duration-300">
              {/* Office Title */}
              <div className="pb-2 sm:pb-4">
                <h3 className="text-xl sm:text-2xl text-brand-gray-dark mb-2 sm:mb-4">
                  {office.title}
                </h3>
              </div>
              
              {/* Office Image */}
              <div className="relative h-48 sm:h-64 lg:h-80">
                <img
                  src={office.image}
                  alt={`${office.title} - Luxury Cars`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Contact Information */}
              <div className="pt-6 sm:pt-12 space-y-5 sm:space-y-6">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 flex items-center justify-center p-1 sm:p-2 flex-shrink-0">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-royal-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700">{office.address}</span>
                </div>
                
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 flex items-center justify-center p-1 sm:p-2 flex-shrink-0">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-royal-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <a href={`tel:${office.phone}`} className="text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors break-all">
                    {office.phone}
                  </a>
                </div>
                
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 flex items-center justify-center p-1 sm:p-2 flex-shrink-0">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-royal-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <a href={`mailto:${office.email}`} className="text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors break-all">
                    {office.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default ContactHero;
