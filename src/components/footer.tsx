import { IconButton } from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = [
  {name: "Home", href: "#home"}, 
  {name: "Sobre", href: "#about"}, 
  {name: "Galeria", href: "#gallery"}, 
  {name: "Estatísticas", href: "#stats"},  
];

const LINKS2 = [ 
  {name: "Depoimentos", href: "#testimonials"},
  {name: "Perguntas Frequentes", href: "#faq"}
];

export function Footer() {
  return (
    <footer id="contact" className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex !w-full py-10 mb-5 md:mb-20 flex-col justify-center !items-center bg-gray-900 max-w-6xl mx-auto rounded-2xl p-5">
          <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
            <div className="mb-2">
              <h4 className="text-white text-2xl font-semibold mb-2">
                Contato
              </h4>

              <p className="mx-auto mb-8 text-base text-gray-500">
                Atendimento de segunda a sexta-feira, das 8h às 18h. Não realizamos atendimento aos sábados, domingos e feriados.
              </p>

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

            <div className="flex items-center gap-5 mt-6">
              <button className="text-white">
                <i className="fa-brands fa-facebook text-lg" />
              </button>
              <button className="text-white">
                <i className="fa-brands fa-instagram text-lg" />
              </button>
              <button className="text-white">
                <i className="fa-brands fa-whatsapp text-lg" />
              </button>
            </div>

            <ul className="flex flex-wrap justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
              {LINKS.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm font-normal text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>  

          <ul className="flex flex-wrap justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS2.map((link, index) => (
              <li key={index}>
                <h2
                  as="a"
                  href={link.href}
                  variant="small"
                  color="white"
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                >
                  {link.name}
                </h2>
              </li>
            ))}
          </ul>

          <div className="flex w-fit justify-center gap-2">
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-twitter text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-youtube text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>

          </div>
        </div>

        <h3          
          className="text-center mt-12 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} 
          <a href="#" target="_blank" rel="noopener noreferrer">
          Desenvolvido por Noodle Software Solutions.
          </a>
        </h3>

      </div>
    </footer>
  );
}

export default Footer;
