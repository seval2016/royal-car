import { useState } from "react";
import { Calendar, User, ArrowRight } from "lucide-react";
import Title from "../common/Title";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/images/blog/latest-news-01.jpg",
      title: "The Ultimate Guide to Luxury Car Rentals",
      excerpt: "What To Do if Your Rental Car Has Met With An Accident.",
      author: "John Smith",
      date: "March 15, 2024",
      category: "Luxury Cars",
    },
    {
      id: 2,
      image: "/images/blog/latest-news-02.jpg",
      title: "Top 10 Road Trip Destinations for 2024",
      excerpt: "What To Do if Your Rental Car Has Met With An Accident.",
      author: "Sarah Johnson",
      date: "March 12, 2024",
      category: "Travel",
    },
    {
      id: 3,
      image: "/images/blog/latest-news-03.jpg",
      title: "Business Travel: Choosing the Right Vehicle",
      excerpt: "What To Do if Your Rental Car Has Met With An Accident.",
      date: "March 10, 2024",
      category: "Business",
    },
  ];

     return (
     <section
       className="bg-cover bg-center bg-no-repeat py-8 sm:py-12 lg:py-16 relative"
       style={{ backgroundImage: "url(/images/blog/latest-news-bg.jpg)" }}
     >
       {/* Background Overlay */}
       <div className="absolute inset-0 bg-[#333] bg-opacity-90"></div>
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <Title 
              title=" Latest News."
              subtitle="ARTICLES FROM BLOG"
              titleHighlight='Our'
              align="center"
              className="text-white mb-4"
              titleClassName="text-2xl sm:text-3xl lg:text-4xl text-brand-yellow"
               
            />
          </div>

         {/* Blog Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 py-4">
          {blogPosts.map((post) => (
                                                   <article
                key={post.id}
                className="overflow-hidden"
              >
               {/* Blog Image */}
               <div className="relative overflow-hidden">
                 <img
                   src={post.image}
                   alt={post.title}
                   className="w-full h-40 sm:h-48 lg:h-52 object-cover"
                 />
                 <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                   <span className="bg-brand-yellow text-white px-2 sm:px-3 py-1 text-xs font-semibold rounded-full">
                     {post.category}
                   </span>
                 </div>
               </div>

               {/* Blog Content */}
               <div className="p-4 sm:p-6">
                 <div className="flex items-center mb-2 sm:mb-3 text-white text-sm sm:text-base">{post.date}</div>
                 
                   <p className="text-sm sm:text-md text-brand-yellow hover:text-white mb-3 sm:mb-4 line-clamp-3 border-l-2 border-brand-yellow pl-3 sm:pl-4 transition-colors duration-300">
                     {post.excerpt}
                   </p>
                

                 {/* Blog Meta */}
                 <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
                   <div className="flex items-center space-x-2 sm:space-x-4"></div>
                 </div>

                 {/* Read More Button */}
                 <button className="flex items-center uppercase underline text-xs sm:text-sm text-gray-400 hover:text-brand-yellow font-semibold transition-colors duration-300">
                   Read Article
                 </button>
               </div>
             </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
