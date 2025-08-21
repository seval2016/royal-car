import React from "react";
import statisticsData from "../../data/statistics.json";

interface StatisticsProps {
  variant?: "default" | "about" | "dark";
  className?: string;
  showBackground?: boolean;
  customStats?: Array<{
    id: number;
    icon: string;
    number: string;
    label: string;
  }>;
}

const Statistics: React.FC<StatisticsProps> = ({
  variant = "default",
  className = "",
  showBackground = true,
  customStats,
}) => {
  const stats = customStats || statisticsData.statistics;

  const getIconPath = (stat: any) => {
    if (variant === "about" && stat.iconYellow) {
      return stat.iconYellow;
    }
    return stat.icon;
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "about":
        return "bg-white text-brand-dark";
      case "dark":
        return "bg-brand-gray-dark text-white";
      default:
        return "bg-brand-yellow text-white";
    }
  };

  const getIconStyle = () => {
    switch (variant) {
      case "about":
        return "";
      case "dark":
        return ""; // Beyaz ikonlar
      default:
        return ""; // Beyaz ikonlar
    }
  };

  return (
    <section
      className={`w-full py-6 sm:py-8 lg:py-10 ${
        showBackground ? getVariantStyles() : ""
      } ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
                             className={`text-center flex flex-col items-center justify-center ${
                 variant === "about" && index > 0
                   ? "border-l border-brand-borderLight pl-4 sm:pl-6 lg:pl-8"
                   : ""
               }`}
            >
              <div className="flex items-center justify-center mb-2 sm:mb-3">
                <div className="mr-2 sm:mr-3 lg:mr-4">
                  <img
                    src={getIconPath(stat)}
                    alt={stat.label}
                    className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${getIconStyle()}`}
                  />
                </div>
                <div className="flex flex-col">
                  <div
                    className={`text-2xl sm:text-3xl lg:text-[38px] font-[700] leading-tight sm:leading-tight lg:leading-[42px] ${
                      variant === "about" ? "text-brand-dark" : "text-white"
                    }`}
                  >
                    {stat.number}
                  </div>
                  <div
                    className={`text-[10px] sm:text-xs lg:text-sm font-medium ${
                      variant === "about"
                        ? "text-brand-gray-medium"
                        : "text-white"
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
