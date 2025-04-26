import { Typography, IconButton } from "@material-tailwind/react";
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
            <Typography variant="h4" color="white" className="mb-2">
              Contato
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto mb-8 text-base !text-gray-500"
            >
              Atendimento de segunda a sexta-feira, das 8h às 18h. Não realizamos atendimento aos sábados, domingos e feriados.
            </Typography>

            <div className="flex gap-5">
              <PhoneIcon className="h-6 w-6 text-white" />
              <Typography variant="h6" color="white">
                (81) 9 9999-9999
              </Typography>
            </div>

            <div className="flex my-2 gap-5">
              <EnvelopeIcon className="h-6 w-6 text-white" />
              <Typography variant="h6" color="white">
                mariaacolhe@juizado.com
              </Typography>
            </div>

          </div>

          <div className="flex items-center gap-5 mt-6">
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-facebook text-lg" />
            </IconButton>
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-whatsapp text-lg" />
            </IconButton>
          </div>

          <ul className="flex flex-wrap justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <Typography
                  as="a"
                  href={link.href}
                  variant="small"
                  color="white"
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                >
                  {link.name}
                </Typography>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS2.map((link, index) => (
              <li key={index}>
                <Typography
                  as="a"
                  href={link.href}
                  variant="small"
                  color="white"
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                >
                  {link.name}
                </Typography>
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

        <Typography
          color="blue-gray"
          className="text-center mt-12 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} 
          <a href="https://www.creative-tim.com" target="_blank" rel="noopener noreferrer">
          Desenvolvido por Noodle Software Solutions.
          </a>
        </Typography>

      </div>
    </footer>
  );
}

export default Footer;
