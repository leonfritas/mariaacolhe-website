"use client";

import React, { useEffect, useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { getFaqs } from "../service/faq-service";

interface FaqItem {
  idFaq: number;
  pergunta: string;
  resposta: string;
}

export function Faq() {
  const [open, setOpen] = useState(0);
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await getFaqs();
        setFaqs(response.data);
      } catch (err) {
        setError("Erro ao carregar perguntas frequentes");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  if (loading) {
    return (
      <section id="faq" className="py-8 px-8 lg:py-20">
        <div className="container mx-auto text-center">
          <p>Carregando perguntas frequentes...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="faq" className="py-8 px-8 lg:py-20">
        <div className="container mx-auto text-center text-red-500">
          <p>{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="faq" className="py-8 px-8 lg:py-20">
      <br /><br />
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold leading-tight text-blue-gray-900">
            Perguntas Frequentes
          </h2>
          <p className="mt-2 max-w-4xl mx-auto w-full text-center text-lg font-normal text-gray-500 mb-8 lg:text-2xl">
            Bem-vindo à seção de Perguntas Frequentes do Maria Acolhe.
            Estamos aqui para responder às dúvidas mais comuns e oferecer as informações que você precisa.
          </p>
        </div>
        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {faqs.map(({ idFaq, pergunta, resposta }, index) => (
            <Accordion
              key={idFaq}
              open={open === index + 1}
              onClick={() => handleOpen(index + 1)}
              animate={{ mount: { scale: 1 }, unmount: { scale: 0.9 } }}
              placeholder=""
              {...({} as any)}
            >
              <AccordionHeader 
                className="text-left text-gray-900 lg:text-2xl"
                placeholder=""
                {...({} as any)}
              >
                {pergunta}
              </AccordionHeader>
              <AccordionBody>
                <p className="mt-2 max-w-4xl mx-auto w-full text-center text-lg font-normal text-gray-500 mb-8 lg:text-[22px]">
                  {resposta}
                </p>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;