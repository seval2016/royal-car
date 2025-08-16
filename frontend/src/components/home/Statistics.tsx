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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="text-center flex flex-col items-center justify-center"
            >
              {/* Icon and Number Row */}
              <div className="flex items-center justify-center mb-2 sm:mb-3">
                <div className="mr-2 sm:mr-3 lg:mr-4">
                  <img
                    src={stat.icon}
                    alt={stat.label}
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-2xl sm:text-3xl lg:text-[38px] font-[700] text-white leading-tight sm:leading-tight lg:leading-[42px]">
                    {stat.number}
                  </div>
                  <div className="text-[10px] sm:text-xs lg:text-sm text-white font-medium">
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
