

interface NavItemProps {
    children: React.ReactNode;
    href?: string;
  }
  
  interface NavItemProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
  }

export default function NavItem({ children, href, onClick }: NavItemProps) {
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
      <li className="list-none">
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