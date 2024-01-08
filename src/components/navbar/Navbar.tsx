"use client"

import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      id={styles.headerNav}
      className="sticky top-0 z-50 flex items-center justify-between text-white px-9 py-1 md:px-[6.4rem]"
    >
      <div className="flex items-center space-x-3 rtl:space-x-reverse">
        <Link href="/">
            <img
              className="w-20"
              src="/logo-bistro.png"
              alt="Logo de Sweet Bistró"
            />
        </Link>
      </div>
      <div className="md:hidden relative">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? <CloseIcon/> : <MenuIcon fontSize="large"/>}
        </button>
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex items-center justify-center md:gap-x-7 mt-4 md:mt-0`}
      >
        <ul className="md:flex-row items-center justify-center gap-x-7">
          <li>
            <Link href="/#menu" className="hover:underline decoration-yellow-400"
                onClick={toggleMenu}>
                Menu
            </Link>
          </li>
          <li>
            <Link href="/#sobre-nosotros" className="hover:underline decoration-yellow-400"
                onClick={toggleMenu}>
             
                Sobre Nosotros
           
            </Link>
          </li>
          <li>
            <Link href="/#contacto" className="hover:underline decoration-yellow-400"
                onClick={toggleMenu}>
             
                Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
