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
      <section className="bg-gray-50">
        <div className="w-full">
          {/* Gallery Grid */}
          <div className="flex flex-wrap">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden cursor-pointer flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                onClick={() => openModal(index)}
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 hover:bg-brand-yellow bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 ease-in-out transform scale-95 group-hover:scale-100 flex items-center justify-center m-4">
                  <div className="opacity-0 group-hover:opacity-100 ">
                    <div className="bg-white rounded-full p-2">
                      <Search className="w-6 h-6 text-brand-yellow" />
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 pt-20"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Background Overlay */}
          <div className="absolute inset-0 top-20 bg-black bg-opacity-80"></div>
          {/* Modal Content */}
          <div className="relative max-w-4xl w-full max-h-[70vh]">
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
              className="fixed left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-brand-yellow transition-colors bg-black/50 rounded-full p-3"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="fixed right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-brand-yellow transition-colors bg-black/50 rounded-full p-3"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <img
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                className="w-full h-auto max-h-[40vh] object-contain transition-all duration-500 ease-in-out"
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
