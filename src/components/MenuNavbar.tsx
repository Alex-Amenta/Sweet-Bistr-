"use client";

import Link from "next/link";
import { Links } from "./navbar/Navbar";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`sticky lg:top-10 p-6 `}>
      <button
        onClick={handleMenu}
        className="lg:hidden px-5 py-2 bg-white text-black rounded-lg"
      >
        {showMenu ? "Abrir" : "Cerrar"} Categorias
      </button>
      <ul
        className={`flex-col justify-start flex-wrap space-y-5 lg:flex
        ${showMenu ? "hidden" : "flex mt-5"}`}
      >
        {menuLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={`${
                activeCategory === link.name
                  ? "border-[#fab005]"
                  : "border-black/20"
              } block w-full border hover:border-[#fab005] lg:p-2 bg-white/10 backdrop-blur-2xl rounded-lg p-3 text-wrap mb-4 text-slate-300`}
              onClick={() => setActiveCategory(link.name)}
            >
              {link.name}
            </Link>
          </li>
        ))}
        <a
          className="px-5 py-2 bg-white text-black rounded-lg hover:bg-white/80"
          href="/"
        >
          <span className="inline-flex align-middle mr-1">
            <ArrowBackIcon />
          </span>
          Volver
        </a>
      </ul>
    </nav>
  );
};

export default MenuNavbar;
