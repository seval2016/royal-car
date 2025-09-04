import { useState } from "react";
import { Search, ChevronLeft, ChevronRight, X } from "lucide-react";
import galleryData from "../../data/gallery.json";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = galleryData;

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      closeModal();
    } else if (e.key === "ArrowRight") {
      nextImage();
    } else if (e.key === "ArrowLeft") {
      prevImage();
    }
  };

  return (
    <>
      {/* Gallery Section */}
      <section className="bg-gray-50 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Gallery Flex */}
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden cursor-pointer w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 flex-shrink-0"
                onClick={() => openModal(index)}
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-brand-yellow bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 ease-in-out flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white rounded-full p-3 shadow-lg">
                      <Search className="w-5 h-5 text-brand-yellow" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-90"></div>
          {/* Modal Content */}
          <div className="relative max-w-5xl w-full max-h-[90vh] mx-4">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-0 right-4 z-10 text-white hover:text-brand-yellow transition-colors bg-black/50 rounded-full p-3"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-brand-yellow transition-colors bg-black/70 hover:bg-black/90 rounded-full p-2 sm:p-3"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-brand-yellow transition-colors bg-black/70 hover:bg-black/90 rounded-full p-2 sm:p-3"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Image */}
            <div className="relative flex items-center justify-center h-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                className="w-full h-full max-h-[80vh] object-contain transition-all duration-500 ease-in-out"
                key={currentImageIndex}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
