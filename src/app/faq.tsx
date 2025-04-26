"use client";

import React from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const FAQS = [
  {
    title: "1. O que é o projeto Maria Acolhe?",
    desc: "O Maria Acolhe é um projeto social focado em oferecer apoio, orientação e acolhimento a mulheres em situação de vulnerabilidade, buscando promover autonomia, dignidade e inserção social.",
  },
  {
    title: "2. Quem pode participar ou ser atendido pelo Maria Acolhe?",
    desc: "O projeto é voltado principalmente para mulheres em situação de vulnerabilidade, oferecendo acolhimento e apoio integral. Além disso, também realizamos ações de conscientização e reeducação voltadas para agressores, buscando promover a responsabilização e a mudança de comportamento, com o objetivo de romper ciclos de violência.",
  },
  {
    title: "3. Quais tipos de apoio o Maria Acolhe oferece?",
    desc: "Oferecemos acolhimento psicológico, assistência social, oficinas de capacitação profissional, orientação jurídica e encaminhamento para serviços públicos de saúde, segurança e moradia, conforme a necessidade de cada mulher.",
  },
  {
    title: "4. Como faço para entrar em contato ou buscar ajuda no Maria Acolhe?",
    desc: "O atendimento pode ser agendado pelo telefone oficial, pelas redes sociais do projeto ou presencialmente nos pontos de apoio parceiros. Temos também um canal de atendimento emergencial para casos de urgência.",
  },
  {
    title: "5. O projeto Maria Acolhe cobra algum valor pelos serviços prestados?",
    desc: "Não, todos os serviços oferecidos pelo Maria Acolhe são totalmente gratuitos, viabilizados através de parcerias, doações e apoio de voluntários.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section id="faq" className="py-8 px-8 lg:py-20">
      <br /><br />
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold leading-tight  text-blue-gray-900">
            Perguntas Frequentes
          </h2>
          <p
            className="mt-2 max-w-4xl mx-auto w-full text-center text-lg font-normal text-gray-500 mb-8"
          >
           Bem-vindo à seção de Perguntas Frequentes do Maria Acolhe.
           Estamos aqui para responder às dúvidas mais comuns e oferecer as informações que você precisa.
          </p>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
              animate={{ mount: { scale: 1 }, unmount: { scale: 0.9 } }}
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <AccordionHeader className="text-left text-gray-900"
                            placeholder=""
                            onPointerEnterCapture={() => {}}
                            onPointerLeaveCapture={() => {}}>
                {title}
              </AccordionHeader>
              <AccordionBody>
                <p className="mt-2 max-w-4xl mx-auto w-full text-center text-lg font-normal text-gray-500 mb-8">
                  {desc}
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
