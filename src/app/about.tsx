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

  useEffect(() => {
    getAbouts()
      .then(response => {        
        setAboutData(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar dados:", error);
      });
  }, []);
  

  return (
    <section id="about" className="container mx-auto flex flex-col items-center px-4 py-10">
      {
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
      }
    </section>
  );
}

export default About;
