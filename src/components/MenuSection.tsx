import Link from "next/link";

interface BentoItems {
  title: string;
  colSpan: number;
  image: string;
  link: string;
}

const MenuSection = () => {
  const bentoSections: BentoItems[] = [
    {
      title: "Comidas Principales",
      image: "/bento-images/platos-principales.png",
      colSpan: 6,
      link: "/menu/#Pastas",
    },
    {
      title: "Cocina SB",
      image: "/bento-images/polenta.png",
      colSpan: 3,
      link: "/menu/#CocinaSBySalteados",
    },
    {
      title: "Hamburguesas y Milanesas",
      image: "bento-images/Hamburguesas.png",
      colSpan: 3,
      link: "/menu/#HamburguesasyMilanesas",
    },
    {
      title: "Pizzas",
      image: "/bento-images/pizza.png",
      colSpan: 3,
      link: "/menu/#Pizzas",
    },
    {
      title: "Postres",
      image: "/bento-images/postres.png",
      colSpan: 3,
      link: "/menu/#Postres",
    },
    {
      title: "Menú Infantil",
      image: "/bento-images/infantil.png",
      colSpan: 6,
      link: "/menu/#Infantil",
    },
    {
      title: "Ver Más",
      image: "/bento-images/ver-mas.png",
      colSpan: 3,
      link: "/menu",
    },
  ];

  return (
    <section
      className="w-full max-w-[1400px]
    grid grid-cols-10 auto-rows-[25rem] gap-4 mx-auto p-1 md:px-12 lg:px-20"
    >
      {bentoSections.map((section, index) => (
        <article
          key={index}
          className={`relative rounded-xl
          backdrop-blur-md
          border border-black/10
          shadow-inner shadow-white/40
          overflow-hidden
          cursor-pointer
          col-span-10
          group ${section.colSpan === 3 ? "md:col-span-3" : "md:col-span-6"}`}
        >
          <Link href={section.link}>
            <div
              className="absolute bottom-0 top-0 z-10 h-full w-full
            bg-gradient-to-b from-transparent from-40% via-[#4c3703cc]/50 to-[#815b00cc]/80"
            ></div>
            <div className="flex flex-col gap-1 p-6 justify-end h-full">
              <img
                src={section.image}
                className="transition-scale absolute bottom-0 left-0 top-0
                  -z-10 h-full w-full
                  bg-cover bg-center bg-no-repeat opacity-90 bg-blend-luminosity duration-1000 ease-in-out group-hover:scale-110 object-cover"
                alt={`Imagen de ${section.title}`}
                style={{ backgroundImage: "url(section.image)" }}
              />
              <h1 className="mb-4 text-balance text-2xl font-semibold uppercase text-white z-20">
                {section.title}
              </h1>
            </div>
          </Link>
        </article>
      ))}
    </section>
  );
};

export default MenuSection;
