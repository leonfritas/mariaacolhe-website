import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";
import NavItem from "./navitem";


const CURRENT_YEAR = new Date().getFullYear();
const LINKS = [
  {name: "Home", href: "#home"}, 
  {name: "Sobre", href: "#about"}, 
  {name: "Galeria", href: "#gallery"}, 
  {name: "Estatísticas", href: "#stats"}, 
  {name: "Depoimentos", href: "#testimonials"},
  {name: "Perguntas Frequentes", href: "#faq"} 
];


export function Footer() {
  return (
    <footer id="contact" className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex !w-full py-10 mb-5 md:mb-20 flex-col justify-center !items-center bg-gray-900 max-w-6xl mx-auto rounded-2xl p-5">
          <div className="w-full col-span-3 rounded-lg h-full sm:py-8 sm:p-5 lg:py-2 md:p-16 bg-gray-900">
            <div className="mb-2 lg:mb-8">
              <h4 className="text-white text-2xl font-semibold mb-2 lg:text-[28px]">
                Contato
              </h4>
              <p className="mx-auto mb-8 text-base text-gray-500 lg:text-[18px]">
                Atendimento de segunda a sexta-feira, das 8h às 18h. Não realizamos atendimento aos sábados, domingos e feriados.
              </p>
              <div className="flex items-center justify-center gap-5 mb-10">                
                <a
                  href="https://wa.me/+5592994174297"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white flex flex-col items-center justify-center gap-1"
                >
                  <i className="fa-brands fa-whatsapp text-5xl text-green-700" />
                  <p className="text-white text-lg font-semibold">Clique aqui</p>
                </a>                              
              </div>
              <div>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <h6 className="text-white text-lg font-semibold">
                  (81) 9 9999-9999
                </h6>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <h6 className="text-white text-lg font-semibold">
                  mariaacolhe@juizado.com
                </h6>
              </div>
              </div>
              
            </div> 
            <div className="flex flex-wrap lg:flex-col justify-around gap-10">               
              <ul className="flex flex-wrap justify-center mt-4 md:my-0 w-max mx-auto items-center gap-4">
                {LINKS.map((link, index) => (                  
                    <NavItem  key={index} href={link.href}>
                      <button                        
                        className="lg:text-2xl font-normal text-gray-700 hover:text-white transition-colors"
                      >
                        {link.name}
                      </button>
                    </NavItem>                  
                ))}
              </ul> 
            </div>
          </div>            
        </div>
        <h3          
          className="text-center mt-12 font-normal !text-gray-700"
        >          
          <a href="https://www.instagram.com/noodlesoftware/" target="_blank" rel="noopener noreferrer">
          &copy; {CURRENT_YEAR} Desenvolvido por Noodle Software Solutions.
          </a>
        </h3>
      </div>      
    </footer>
  );
}

export default Footer;
