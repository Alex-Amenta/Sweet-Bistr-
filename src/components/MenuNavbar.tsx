"use client"
import Link from "next/link";
import { Links } from "./navbar/Navbar";
import { usePathname } from "next/navigation";

const menuLinks: Links[] = [
  { name: "Entradas", href: "/menu/#Entradas" },
  { name: "Comidas Principales", href: "/menu/#Pastas" },
  // { name: "Pastas", href: "/menu/#Pastas" },
  // { name: "Salsas", href: "/menu/#Salsas" },
  // { name: "Carnes", href: "/menu/#Carnes" },
  // { name: "Lomitos", href: "/menu/#Lomitos" },
  // { name: "Pescados", href: "/menu/#Pescados" },
  // { name: "Tortillas - Omelettes - Tartas", href: "/menu/#Tortillas-Omelettes-Tartas" },
  // { name: "Guarniciones", href: "/menu/#Guarniciones" },
  { name: "Cocina SB y Salteados", href: "/menu/#CocinaSBySalteados" },
  { name: "Infantil", href: "/menu/#Infantil" },
  { name: "Ensaladas", href: "/menu/#Ensaladas" },
  { name: "Hamburguesas y Milanesas", href: "/menu/#HamburguesasyMilanesas" },
  { name: "Empanadas y Canastitas", href: "/menu/#EmpanadasyCanastitas" },
  { name: "Pizzas", href: "/menu/#Pizzas" },
  { name: "Postres", href: "/menu/#Postres" },
];

const MenuNavbar = () => {
  const pathname = usePathname();
  return (
    <nav className="sticky lg:top-10 p-6">
      <ul className="flex-col justify-start items-center flex-wrap space-y-5">
        {menuLinks.map((link, index) => (
          <div key={index}>
            <Link href={link.href} className={`${pathname === link.href ? 'active:border-[#fab005]' : ''}`}>
              <li className="border border-black/20 hover:border-[#fab005] lg:p-2 bg-white/10 backdrop-blur-2xl rounded p-3 text-wrap">
                {link.name}
              </li>
            </Link>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default MenuNavbar;
