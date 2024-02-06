"use client";

export interface Links {
  name: string;
  href: string;
}

import Link from "next/link";
import styles from "./Navbar.module.css";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from "next/navigation";

const homeLinks: Links[] = [
  { name: "Inicio", href: "#" },
  { name: "Sobre Nosotros", href: "/#sobre-nosotros" },
  { name: "Menu", href: "/#menu" },
  { name: "Contacto", href: "/#contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Inicio");

  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {pathname !== "/menu" && (
        <nav
          id={styles.headerNav}
          className="sticky top-0 z-50 flex flex-row md:flex-row items-center justify-between text-white px-9 py-1 md:px-[6.4rem]"
        >
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Link href="/">
              <img
                className="w-14 md:w-20 "
                src="/logo-bistro.webp"
                alt="Logo de Sweet Bistró"
              />
            </Link>
          </div>
          <div className="md:hidden relative">
            <button onClick={toggleMenu}>
              {isOpen ? null : <MenuIcon fontSize="large" />}
            </button>
          </div>
          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } absolute top-0 right-0 pl-14 pr-5 pb-[8rem] pt-5 rounded-md bg-black/95 shadow-md shadow-white/30 md:flex items-center justify-center md:bg-transparent md:shadow-none md:p-7 md:pr-32 transition-opacity transition-max-h ease-in-out duration-300`}
          >
            <ul className="flex flex-col gap-y-6 items-start w-full md:flex-row md:items-center justify-center gap-x-7">
              {isOpen && (
                <button
                  onClick={toggleMenu}
                  className="self-end mb-8 md:hidden"
                >
                  <CloseIcon fontSize="large" />
                </button>
              )}
              {homeLinks.map((link, index) => (
                <li key={index} onClick={toggleMenu}>
                  <Link
                    href={link.href}
                    className={`hover:underline underline-offset-4 decoration-yellow-400 ${
                      activeSection === link.name &&
                      "underline decoration-yellow-400"
                    }`}
                    onClick={() => setActiveSection(link.name)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
