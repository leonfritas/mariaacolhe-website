"use client";

import { useEffect, useState } from "react";
import StatsCard from "@/components/stats-card";
import { getStats } from "../service/stats-service";

interface StatData {
  numeroEstatistica: string;
  legendaEstatistica: string;
}

// Dados simulados de fallback
const fallbackStats: StatData[] = [
  { numeroEstatistica: "500+", legendaEstatistica: "Famílias acolhidas" },
  { numeroEstatistica: "1200+", legendaEstatistica: "Refeições servidas" },
  { numeroEstatistica: "300+", legendaEstatistica: "Voluntários atuando" },
  { numeroEstatistica: "50+", legendaEstatistica: "Projetos apoiados" },
];

export function OurStats() {
  const [stats, setStats] = useState<StatData[]>([]);
  const [loading, setLoading] = useState(true);

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
        console.warn("Não foi possível carregar dados reais. Usando dados simulados.");
        setStats(fallbackStats); // Usa dados simulados
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <section id="stats" className="py-20 px-10 text-center">
        <p>Carregando estatísticas...</p>
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
