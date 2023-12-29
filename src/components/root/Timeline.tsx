const timeline = [
  {
    name: "Founded company",
    description:
      "Archaic Group was founded and started the development of its first product.",
    date: "Sep 2023",
    dateTime: "2023-09",
  },
  {
    name: "Expansion of Team",
    description:
      "The team continued to grow to keep up with the development of AI models.",
    date: "Dec 2023",
    dateTime: "2023-12",
  },
  {
    name: "Released Beta",
    description:
      "The first brand, Premia, under Archaic was released and tested by customers.",
    date: "Feb 2024",
    dateTime: "2024-02",
  },
  {
    name: "Global launch of product",
    description: "The company scaled its growth to meet global demand.",
    date: "May 2024",
    dateTime: "2024-05",
  },
];

const Timeline = () => {
  return (
    <>
      <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item) => (
            <div key={item.name}>
              <time
                dateTime={item.dateTime}
                className="flex items-center text-sm font-semibold leading-6 text-shade">
                <svg
                  viewBox="0 0 4 4"
                  className="mr-4 h-1 w-1 flex-none"
                  aria-hidden="true">
                  <circle cx={2} cy={2} r={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-shade/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                />
              </time>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-foreground">
                {item.name}
              </p>
              <p className="mt-1 text-base leading-7 text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Timeline;
