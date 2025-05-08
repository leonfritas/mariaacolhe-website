"use client";

import { useEffect, useState } from "react";
import StatsCard from "@/components/stats-card";
import { getStats } from "../service/stats-service";

interface StatData {
  numeroEstatistica: string;
  legendaEstatistica: string;
}

export function OurStats() {
  const [stats, setStats] = useState<StatData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await getStats();
        
        const formattedStats = response.data.map((item: any) => ({
          numeroEstatistica: item.numeroEstatistica, 
          legendaEstatistica: item.legendaEstatistica,
        }));
        setStats(formattedStats);
      } catch (err) {
        setError("Erro ao carregar estatísticas");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <section id="faq" className="py-8 px-8 lg:py-20">
        <div className="container mx-auto text-center">
          <p>Carregando estatísticas...</p>
        </div >
      </section>
    );
  }

  if (error) {
    return (
      <section id="stats" className="container mx-auto px-10 py-24">
        <p className="text-red-500">{error}</p>
      </section>
    );
  }

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
          {stats.map((stat, index) => (
            <StatsCard     
              key={index}          
              count={stat.numeroEstatistica} 
              title={stat.legendaEstatistica} 
            />
          ))}
        </div>
      </div>       
    </section>
  );
}

export default OurStats;