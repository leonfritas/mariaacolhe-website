"use client";


import StatsCard from "@/components/stats-card";

const STATS = [
  {
    count: "20mil+",
    title: "Pessoas atendidas",
  },
  {
    count: "400+",
    title: "Palestras",
  },
  {
    count: "10",
    title: "Anos de atuação",
  },
  {
    count: "6",
    title: "Equipes atuantes",
  },
];

export function OurStats() {
  return (
    <section id="stats" className="container mx-auto grid gap-10 px-10 py-24 lg:grid-cols-1 lg:gap-20 xl:grid-cols-2 xl:place-items-center">
      <div>
      <h6 className="text-orange-500 mb-6 font-medium text-2xl">
        Nosso Impacto
      </h6>
      <h1 className="text-5xl font-bold leading-tight lg:w-3/4 text-blue-gray-900">
        Maria Acolhe em números
      </h1>
 
      </div>
      <div>
        <div className="grid grid-cols-2 gap-8 gap-x-28">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStats;
