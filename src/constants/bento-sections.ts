interface BentoItems {
  title: string;
  colSpan: number;
  image: string;
  link: string;
}

export const bentoSections: BentoItems[] = [
  {
    title: "Comidas Principales",
    image: "/bento-images/platos-principales.webp",
    colSpan: 6,
    link: "/menu/#Pastas",
  },
  {
    title: "Cocina SB",
    image: "/bento-images/polenta.webp",
    colSpan: 3,
    link: "/menu/#CocinaSBySalteados",
  },
  {
    title: "Hamburguesas y Milanesas",
    image: "bento-images/Hamburguesas.webp",
    colSpan: 3,
    link: "/menu/#HamburguesasyMilanesas",
  },
  {
    title: "Pizzas",
    image: "/bento-images/pizza.webp",
    colSpan: 3,
    link: "/menu/#Pizzas",
  },
  {
    title: "Postres",
    image: "/bento-images/postres.webp",
    colSpan: 3,
    link: "/menu/#Postres",
  },
  {
    title: "Menú Infantil",
    image: "/bento-images/infantil.webp",
    colSpan: 6,
    link: "/menu/#Infantil",
  },
  {
    title: "Ver Más",
    image: "/bento-images/ver-mas.webp",
    colSpan: 3,
    link: "/menu",
  },
];
