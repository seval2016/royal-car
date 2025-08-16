import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, User, Car } from "lucide-react";
import Title from "../common/Title";

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("account");
  const [openQuestions, setOpenQuestions] = useState<number[]>([1]);

  const categories = [
    {
      id: "account",
      name: "ABOUT ACCOUNT",
      icon: <User className="w-4 h-4" />,
      active: true,
    },
    {
      id: "technical",
      name: "TECHNICAL SUPPORT",
      icon: <HelpCircle className="w-4 h-4" />,
      active: false,
    },
    {
      id: "cars",
      name: "CARS FEATURES",
      icon: <Car className="w-4 h-4" />,
      active: false,
    },
  ];

  const questions = [
    {
      id: 1,
      question: "How to reserved a car here?",
      answer:
        "You can reserve a car by selecting your preferred vehicle from our fleet, choosing your rental dates, and completing the booking process through our secure online platform.",
      category: "account",
    },
    {
      id: 2,
      question: "How can i drop the rental car?",
      answer:
        "You can return your rental car at any of our designated drop-off locations. Simply follow the return instructions provided at the time of pickup.",
      category: "account",
    },
    {
      id: 3,
      question: "What happen if i crash the car?",
      answer:
        "In case of an accident, immediately contact our emergency hotline and local authorities. We provide comprehensive insurance coverage for such situations.",
      category: "account",
    },
    {
      id: 4,
      question: "How can i select a car rent?",
      answer:
        "Browse our extensive fleet online, filter by your preferences (size, features, price), and select the vehicle that best suits your needs.",
      category: "technical",
    },
    {
      id: 5,
      question: "Do you have VIP access to airport?",
      answer:
        "Yes, we offer VIP airport pickup and drop-off services for premium customers. Contact our concierge team for arrangements.",
      category: "cars",
    },
    {
      id: 6,
      question: "What happen if i crash the car?",
      answer:
        "In case of an accident, immediately contact our emergency hotline and local authorities. We provide comprehensive insurance coverage for such situations.",
      category: "cars",
    },
  ];

  const toggleQuestion = (id: number) => {
    setOpenQuestions((prev) =>
      prev.includes(id) ? prev.filter((qId) => qId !== id) : [...prev, id]
    );
  };

  const filteredQuestions = questions.filter(
    (q) => q.category === activeCategory
  );

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 sm:mb-12">
          <div className="flex-1 mb-6 lg:mb-0">
            <Title
              subtitle="FIND YOUR ANSWER HERE"
              title="Ask & Questions."
              titleHighlight="Frequently"
              align="left"
              className="mb-6"
              subtitleClassName="text-gray-500"
              titleClassName="text-2xl sm:text-3xl lg:text-[40px]"
              showBorder={true}
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex flex-col items-center gap-2 px-4 py-3 rounded-lg transition-colors ${
                  activeCategory === category.id
                    ? "text-black"
                    : "text-gray-400"
                }`}
              >
                <div
                  className={`w-6 h-6 flex items-center justify-center ${
                    activeCategory === category.id
                      ? "text-brand-yellow"
                      : "text-gray-400"
                  }`}
                >
                  {category.icon}
                </div>
                <span className="text-sm font-semibold uppercase tracking-wide">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Questions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-2">
          {filteredQuestions.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(item.id)}
                className="w-full flex items-center justify-between text-left p-4 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openQuestions.includes(item.id)
                        ? "bg-brand-yellow text-white shadow-lg"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {openQuestions.includes(item.id) ? (
                      <ChevronUp className="w-4 h-4 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                    )}
                  </div>
                  <span className="font-semibold text-gray-900 text-left">
                    {item.question}
                  </span>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openQuestions.includes(item.id)
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 pb-4 ml-12 text-gray-600 text-sm leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-8 sm:mt-12">
          <button className="bg-brand-yellow text-white px-6 py-3 font-medium flex items-center gap-2 mx-auto hover:bg-yellow-500 transition-colors">
            <HelpCircle className="w-5 h-5" />
            <span>MAKE A QUESTIONS</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
