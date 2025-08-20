import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Title from "../common/Title";
import blogData from "../../data/blog.json";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import { Button } from "../ui/button";

const Blog = () => {
  const blogPosts = blogData;
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    setCanScrollPrev(carouselApi.canScrollPrev());
    setCanScrollNext(carouselApi.canScrollNext());

    const updateSelection = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", updateSelection);
    updateSelection();

    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-8 sm:py-12 lg:py-16 relative"
      style={{ backgroundImage: "url(/images/blog/latest-news-bg.jpg)" }} /* Static görsel */
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-brand-dark bg-opacity-90"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <Title
            title=" Latest News."
            subtitle="ARTICLES FROM BLOG"
            titleHighlight="Our"
            align="center"
            className="text-white mb-4"
            titleClassName="text-2xl sm:text-3xl lg:text-4xl text-brand-yellow"
          />
        </div>

        {/* Blog Carousel */}
        <div className="relative">
          <div className="mb-8 flex items-end justify-between">      
            <div className="hidden shrink-0 gap-2 md:flex">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => {
                  carouselApi?.scrollPrev();
                }}
                disabled={!canScrollPrev}
                className="disabled:pointer-events-auto text-white hover:bg-white/10"
              >
                <ArrowRight className="size-5 rotate-180" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => {
                  carouselApi?.scrollNext();
                }}
                disabled={!canScrollNext}
                className="disabled:pointer-events-auto text-white hover:bg-white/10"
              >
                <ArrowRight className="size-5" />
              </Button>
            </div>
          </div>

                     <div className="w-full overflow-hidden">
             <Carousel
               setApi={setCarouselApi}
               opts={{
                 align: "start",
                 loop: false,
                 dragFree: true,
               }}
               className="w-full"
             >
               <CarouselContent>
                 {blogPosts.map((post) => (
                   <CarouselItem
                     key={post.id}
                     className="basis-full sm:basis-1/2 lg:basis-1/3 px-2"
                   >
                     <article className="overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                       {/* Blog Image */}
                       <div className="relative overflow-hidden">
                         <img
                           src={post.image}
                           alt={post.title}
                           className="w-full h-40 sm:h-48 lg:h-52 object-cover"
                         />
                         <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                           <span className="bg-brand-yellow text-white px-2 sm:px-3 py-1 text-xs font-semibold">
                             {post.category}
                           </span>
                         </div>
                       </div>

                       {/* Blog Content */}
                       <div className="p-4 sm:p-6">
                         <div className="flex items-center mb-2 sm:mb-3 uppercase text-white text-base-custom tracking-widest">
                           {post.date}
                         </div>

                         <p className="text-sm sm:text-xl font-medium text-brand-yellow hover:text-brand-dark mb-3 sm:mb-4 line-clamp-3 border-l-2 border-brand-yellow pl-3 sm:pl-4 transition-colors duration-300">
                           {post.excerpt}
                         </p>

                         {/* Blog Meta */}
                         <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
                           <div className="flex items-center space-x-2 sm:space-x-4"></div>
                         </div>

                         {/* Read More Button */}
                         <button className="flex items-center uppercase underline text-xs text-brand-text-light hover:text-brand-yellow font-semibold transition-colors duration-300 mb-3">
                           Read Article
                         </button>
                       </div>
                     </article>
                   </CarouselItem>
                 ))}
               </CarouselContent>
             </Carousel>
           </div>


        </div>

        {/* Instagram Section */}
        <div className="text-center pt-8 sm:pt-12 lg:pt-16 border-t-2 border-brand-gray-dark">
          <div className="mb-6 sm:mb-8">
            <img
              src="/images/blog/instagram.png"
              alt="Instagram"
              className="mx-auto w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 object-cover"
            />
          </div>
          <p className="text-white text-base-custom font-semibold">
            Follow Our Instagram{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-yellow "
            >
              <span>#RoyalCars</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
