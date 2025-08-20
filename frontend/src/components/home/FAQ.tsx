import { useState } from "react";
import { HelpCircle, User, Car } from "lucide-react";
import Title from "../common/Title";
import Button from "../common/Button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("account");

  const categories = [
    {
      id: "account",
      name: "ABOUT ACCOUNT",
      icon: <User className="w-6 h-6" />,
    },
    {
      id: "technical",
      name: "TECHNICAL SUPPORT",
      icon: <HelpCircle className="w-6 h-6" />,
    },
    {
      id: "cars",
      name: "CARS FEATURES",
      icon: <Car className="w-6 h-6" />,
    },
  ];

  const questions = [
    {
      id: "1",
      question: "How to reserved a car here?",
      answer:
        "You can reserve a car by selecting your preferred vehicle from our fleet, choosing your rental dates, and completing the booking process through our secure online platform.",
      category: "account",
    },
    {
      id: "2",
      question: "How can i drop the rental car?",
      answer:
        "You can return your rental car at any of our designated drop-off locations. Simply follow the return instructions provided at the time of pickup.",
      category: "account",
    },
    {
      id: "3",
      question: "What happen if i crash the car?",
      answer:
        "In case of an accident, immediately contact our emergency hotline and local authorities. We provide comprehensive insurance coverage for such situations.",
      category: "account",
    },
    {
      id: "4",
      question: "How can i select a car rent?",
      answer:
        "Browse our extensive fleet online, filter by your preferences (size, features, price), and select the vehicle that best suits your needs.",
      category: "technical",
    },
    {
      id: "5",
      question: "Do you have VIP access to airport?",
      answer:
        "Yes, we offer VIP airport pickup and drop-off services for premium customers. Contact our concierge team for arrangements.",
      category: "cars",
    },
    {
      id: "6",
      question: "What happen if i crash the car?",
      answer:
        "In case of an accident, immediately contact our emergency hotline and local authorities. We provide comprehensive insurance coverage for such situations.",
      category: "cars",
    },
  ];

  const filteredQuestions = questions.filter(
    (q) => q.category === activeCategory
  );

  return (
    <section className="py-18 sm:py-24 lg:py-28 bg-white">
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
          <Accordion type="single" collapsible className="w-full -space-y-px">
            {filteredQuestions.slice(0, Math.ceil(filteredQuestions.length / 2)).map((item) => (
              <AccordionItem
                value={item.id}
                key={item.id}
                className="border border-brand-border bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="justify-start gap-3 py-4 px-4 text-[15px] leading-6 hover:no-underline [&>svg]:-order-1 font-semibold text-brand-dark">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 px-4 text-gray-600 text-sm leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Accordion type="single" collapsible className="w-full -space-y-px">
            {filteredQuestions.slice(Math.ceil(filteredQuestions.length / 2)).map((item) => (
              <AccordionItem
                value={item.id}
                key={item.id}
                className="border border-brand-border bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="justify-start gap-3 py-4 px-4 text-[15px] leading-6 hover:no-underline [&>svg]:-order-1 font-semibold text-brand-gray-dark">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 px-4 text-gray-600 text-sm leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-16 sm:mt-18 lg:mt-20">
          <Button 
            variant="primary" 
            size="md" 
            className="flex items-center gap-2 mx-auto"
            onClick={() => console.log('Make a question clicked')}
          >
            <HelpCircle className="w-5 h-5" />
            MAKE A QUESTIONS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
