"use client";
import { useEffect, useState } from 'react';
import { getAbouts } from '../service/about-service';

interface About {
  titulo: string;
  texto: string;
  subTitulo: string;
}

// 🔸 Conteúdo fixo para fallback
const fallbackData: About[] = [
  {
    subTitulo: 'Quem somos',
    titulo: 'Nossa missão é transformar tecnologia em soluções reais',
    texto: 'Acreditamos no poder da inovação para facilitar o dia a dia de nossos clientes. Trabalhamos com dedicação para entregar qualidade e eficiência.',
  },
  {
    subTitulo: 'Nossa visão',
    titulo: 'Ser referência em desenvolvimento de software',
    texto: 'Buscamos constantemente aprimorar nossos serviços e produtos, alinhando tecnologia de ponta com atendimento humano e personalizado.',
  },
];

export function About() {
  const [aboutData, setAboutData] = useState<About[]>([]);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    const fetchAbouts = async () => {
      try {
        const response = await getAbouts();
        if (response.data && response.data.length > 0) {
          setAboutData(response.data);
        } else {
          setAboutData(fallbackData);
          setUsingFallback(true);
        }
      } catch (err) {
        console.warn("Usando dados fixos por falha na API:", err);
        setAboutData(fallbackData);
        setUsingFallback(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAbouts();
  }, []);

  if (loading) {
    return (
      <section id="faq" className="py-8 px-8 lg:py-20">
        <div className="container mx-auto text-center">
          <p>Carregando informações...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="container mx-auto flex flex-col items-center px-4 py-10">
      {usingFallback && (
        <p className="text-center text-sm text-gray-500 mb-6 italic">
          Exibindo conteúdo fixo. Nenhuma conexão com banco de dados no momento.
        </p>
      )}
      {aboutData.map((event, index) => (
        <div key={index} className="mb-10">
          <h6 className="text-center mb-2 text-orange-500 font-bold lg:text-2xl">
            {event.subTitulo}
          </h6>
          <h3 className="text-center text-2xl font-bold text-blue-gray-900 mb-6 lg:text-3xl">
            {event.titulo}
          </h3>
          <p className="mt-2 max-w-4xl mx-auto w-full text-center text-lg font-normal text-gray-500 mb-8 lg:text-2xl">
            {event.texto}
          </p>
        </div>
      ))}
    </section>
  );
}

export default About;
