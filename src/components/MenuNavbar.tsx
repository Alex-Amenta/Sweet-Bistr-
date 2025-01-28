"use client";

import Link from "next/link";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { menuLinks } from "@/constants/menu-links";

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
                  ? "bg-[#fab005] text-black border-none"
                  : "border-black/20 bg-white/10"
              } block w-full border hover:border-[#fab005] lg:p-2  backdrop-blur-2xl rounded-lg p-3 text-wrap font-semibold mb-4`}
              onClick={() => setActiveCategory(link.name)}
            >
              {link.name}
            </Link>
          </li>
        ))}
        <a
          className="px-5 py-2 bg-black rounded-lg hover:text-white/80 text-center"
          href="/"
        >
          <span className="inline-flex align-middle mr-3">
            <ArrowBackIcon />
          </span>
          Volver
        </a>
      </ul>
    </nav>
  );
};

export default MenuNavbar;
