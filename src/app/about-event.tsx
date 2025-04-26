"use client";


const EVENT_INFO = [
  {    
    title: "Sobre o Projeto",
    description:
      "O Maria Acolhe é uma iniciativa transformadora que atua no combate à violência doméstica através de acolhimento integral. Oferecemos suporte psicológico, orientação jurídica e espaços de diálogo para vítimas e agressores, promovendo a quebra de ciclos violentos e a construção de relações saudáveis.",
    subTitle: "Conheça Nossa História",
  },
  {
    title: "Por que Participar?",
    description:
      "Mais do que um serviço de assistência, o Maria Acolhe é uma ponte para o diálogo, uma rede de apoio que transforma dor em esperança e violência em oportunidade de recomeço. Queremos que todos os participantes sintam-se ouvidos, fortalecidos e capazes de escrever uma nova história.",
    subTitle: "Seu Novo Começo",
  },
];

export function AboutEvent() {
  return (
    <section id="about" className="container mx-auto flex flex-col items-center px-4 py-10">
      {
        EVENT_INFO.map((event, index) => (
          <div key={index} className="mb-10">
            <h6 className="text-center mb-2 text-orange-500 font-bold">
              {event.subTitle}
            </h6>
            <h3 className="text-center text-2xl font-bold text-blue-gray-900 mb-6">
              {event.title}
            </h3>
            <p className="mt-2 max-w-4xl mx-auto w-full text-center text-lg font-normal text-gray-500 mb-8">
              {event.description}
            </p>
          </div>
        ))
      }      
    </section>
  );
}

export default AboutEvent;
