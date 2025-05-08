"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getTestimonials } from "../service/testimonials-service";

interface Testimonial {
  id: number;
  nomeDepoente: string;
  idadeDepoente: number;
  caminhoImagem: string;
  urlImagem: string;
  textoDepoimento: string;
}

export const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await getTestimonials();
        setTestimonials(response.data);
      } catch (err) {
        setError("Erro ao carregar os depoimentos");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <div id="testimonials" className="py-[100px] bg-[#f6f6f6]">
        <div className="container mx-auto px-4 text-center">
          <p>Carregando depoimentos...</p>
        </div>
      </div>
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
    <div id="testimonials" className="py-[100px] bg-[#f6f6f6]">
      <div className="container mx-auto px-4">
        <div className="section-title text-center mb-12">
          <h2 className="text-5xl font-bold leading-tight text-blue-gray-900">
            Depoimentos          
          </h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          {testimonials.length > 0 ? (
            testimonials.map((testimonial, index) => (
              <div key={index} className="w-full md:w-1/3 px-4 mb-8">
                <div className="testimonial bg-white p-5 rounded-lg shadow-sm relative">
                  <div className="testimonial-image float-left mr-4">
                    <Image 
                      src={testimonial.urlImagem || "/default-avatar.jpg"} 
                      alt={testimonial.nomeDepoente} 
                      width={100}
                      height={100}
                      className="block w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div className="testimonial-content overflow-hidden">
                    <p className="mb-0 text-sm italic lg:text-[18px]">
                      {testimonial.textoDepoimento}
                    </p>
                    <div className="testimonial-meta mt-2 text-sm font-semibold text-[#666] lg:text-[22px]">
                      - {testimonial.nomeDepoente}, {testimonial.idadeDepoente} anos
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full text-center">
              Sem depoimentos disponíveis
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;