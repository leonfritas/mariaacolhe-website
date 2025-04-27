import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
} from "@material-tailwind/react";

import {
  XMarkIcon,
  Bars3Icon,
  InformationCircleIcon,
  PhotoIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
  QuestionMarkCircleIcon,
  EnvelopeIcon
} from "@heroicons/react/24/solid";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

function NavItem({ children, href, onClick }: NavItemProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (href?.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); 
      }
    }
    onClick?.();
  };
  

  return (
    <li>
      <a
        href={href || "#"}
        onClick={handleClick}
        target={href?.startsWith("http") ? "_blank" : "_self"}
     
        className="flex items-center gap-2 font-medium"
      >
        {children}
      </a>
    </li>
  );
}


const NAV_MENU = [
  {
    name: "Sobre",
    href: "#about",
    icon: InformationCircleIcon,
  },
  {
    name: "Galeria",
    icon: PhotoIcon,
    href: "#gallery",
  },
  {
    name: "Estatísticas",
    icon: ChartBarIcon,
    href: "#stats",
  },
  {
    name: "Depoimentos",
    icon: ChatBubbleBottomCenterTextIcon,
    href: "#testimonials",
  },
  {
    name: "Perguntas Frequentes",
    icon: QuestionMarkCircleIcon,
    href: "#faq",
  },
  {
    name: "Contato",
    icon: EnvelopeIcon,
    href: "#contact",
  },  
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
    blurred={false}
    fullWidth
    className={`fixed top-0 z-50 border-0 ${isScrolling ? "bg-white" : "bg-transparent"} shadow-none`}
    placeholder="" 
    onPointerEnterCapture={() => {}}
    onPointerLeaveCapture={() => {}}
  >
  
      <div>
        <div className="container mx-auto flex items-center justify-between">
          <h2 className={`text-2xl font-bold ${isScrolling ? "text-gray-900" : "text-white"}`}>
            <a href="#home">Maria Acolhe</a>
          </h2>

          <ul className={`ml-10 hidden items-center gap-6 lg:flex ${isScrolling ? "text-gray-900" : "text-white"}`}>
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                <span>{name}</span>
              </NavItem>
            ))}
          </ul>

          <button onClick={handleOpen} className="text-gray-500 hover:text-gray-900">
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </button>
        </div>

        <Collapse open={open}>
          <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
            <ul className="flex flex-col gap-4 text-gray-900">
              {NAV_MENU.map(({ name, icon: Icon, href }) => (
                <NavItem key={name} href={href} onClick={() => setOpen(false)}>
                  <Icon className="h-5 w-5" />
                  {name}
                </NavItem>
              ))}
            </ul>
          </div>
        </Collapse>
      </div>
    </MTNavbar>
  );
}


export default Navbar;
