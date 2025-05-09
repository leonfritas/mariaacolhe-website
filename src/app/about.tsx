"use client";
import { useEffect, useState } from 'react';
import { getAbouts } from '../service/about-service';

interface About {
  titulo: string;
  texto: string;
  subTitulo: string;
}

export function About() {

  const [aboutData, setAboutData] = useState<About[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAbouts = async () => {
      try {
        const response = await getAbouts();
        setAboutData(response.data);
      } catch (err) {
        setError("Erro ao carregar os dados");
        console.error(err);
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
        </div >
      </section>
    );
  }

  if (error) {
    return (
      <div id="testimonials" className="py-[100px] bg-[#f6f6f6]">
        <div className="container mx-auto px-4 text-center text-red-500">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <section id="about" className="container mx-auto flex flex-col items-center px-4 py-10">
      {
        aboutData.length > 0 ? (
          aboutData?.map((event, index) => (
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
          ))
        ) : (
          <div className="w-full text-center">
            Sem dados disponíveis
          </div>
        )
      }
    </section>
  );
}

export default About;
