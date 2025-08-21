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
import faqData from "../../data/faq.json";

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("account");

  // Icon mapping
  const iconMap = {
    User: <User className="w-6 h-6" />,
    HelpCircle: <HelpCircle className="w-6 h-6" />,
    Car: <Car className="w-6 h-6" />,
  };

  // Add icons to categories
  const categories = faqData.categories.map(category => ({
    ...category,
    icon: iconMap[category.icon as keyof typeof iconMap],
  }));

  const questions = faqData.questions;

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
