import Link from "next/link";
import { Links } from "./navbar/Navbar";

const menuLinks: Links[] = [
  { name: "Entradas", href: "/#entradas" },
  { name: "Platos Principales", href: "/#platos-principales" },
  { name: "Cocina SB y Salteados", href: "/#cocina-sb" },
  { name: "Infantil", href: "/#infantil" },
  { name: "Ensaladas", href: "/#ensaladas" },
  { name: "Hamburguesas y Milanesas", href: "/#hamburguesas-milanesas" },
  { name: "Empanadas y Canastitas", href: "/#empanadas-canastitas" },
  { name: "Pizzas", href: "/#pizzas" },
  { name: "Postres", href: "/#postres" },
];

const MenuNavbar = () => {
  return (
    <nav className="sticky top-10  p-6">
      <ul className="flex-col justify-start items-center space-y-5">
        {menuLinks.map((link, index) => (
          <li
            key={index}
            className="border border-black/20 p-2 bg-white bg-opacity-10 backdrop-blur-2xl rounded"
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuNavbar;
