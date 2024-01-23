"use client";

import Link from "next/link";
import { Links } from "./navbar/Navbar";
import { useState } from "react";

const menuLinks: Links[] = [
  { name: "Entradas", href: "/menu#Entradas" },
  { name: "Comidas Principales", href: "/menu#Pastas" },
  { name: "Cocina SB y Salteados", href: "/menu#CocinaSBySalteados" },
  { name: "Infantil", href: "/menu#Infantil" },
  { name: "Ensaladas", href: "/menu#Ensaladas" },
  { name: "Hamburguesas y Milanesas", href: "/menu#HamburguesasyMilanesas" },
  { name: "Empanadas y Canastitas", href: "/menu#EmpanadasyCanastitas" },
  { name: "Pizzas", href: "/menu#Pizzas" },
  { name: "Postres", href: "/menu#Postres" },
];

const MenuNavbar = () => {
  const [activeCategory, setActiveCategory] = useState("Entradas");

  return (
    <nav className="sticky lg:top-10 p-6">
      <ul className="flex-col justify-start items-center flex-wrap space-y-5">
        {menuLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={`${
                activeCategory === link.name ? "border-[#fab005]" : "border-black/20"
              } block w-full border hover:border-[#fab005] lg:p-2 bg-white/10 backdrop-blur-2xl rounded p-3 text-wrap mb-4`}
              onClick={() => setActiveCategory(link.name)}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuNavbar;
