const Statistics = () => {
  const stats = [
    {
      id: 1,
      icon: "/images/statistic/icon-happy-customer-white.png",
      number: "172700",
      label: "HAPPY CUSTOMERS",
    },
    {
      id: 2,
      icon: "/images/statistic/icon-cars-count-white.png",
      number: "2450",
      label: "CARS IN GARAGE",
    },
    {
      id: 3,
      icon: "/images/statistic/icon-total-km-white.png",
      number: "1211100",
      label: "TOTAL KILOMETER/MIL",
    },
    {
      id: 4,
      icon: "/images/statistic/icon-car-center-white.png",
      number: "47250",
      label: "CAR CENTER SOLUTIONS",
    },
  ];

  return (
         <section className="w-full bg-yellow-400 py-6 sm:py-8 lg:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="text-center flex flex-col items-center justify-center"
            >
              {/* Icon and Number Row */}
              <div className="flex items-center justify-center mb-2 sm:mb-3">
                <div className="mr-3 sm:mr-4">
                  <img src={stat.icon} alt={stat.label} className="w-12 h-12" />
                </div>
                <div className="flex flex-col">
                                     <div className="text-[38px] font-[700] text-white leading-[42px]">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-white font-medium">
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
