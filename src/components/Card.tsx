import { MenuItem } from "@/types/data";
import Image from "next/image";

interface CardProps {
  title: string;
  items: MenuItem[];
}

const Card: React.FC<CardProps> = ({ title, items }) => {
  const id = title.replace(/ /g, "");

  return (
    <section className="mb-40 md:mb-56 scroll-mt-20" id={id}>
      <h2 className="text-5xl text-center md:text-left mb-10 uppercase text-[#fab005] font-bold text-wrap">
        {title}
      </h2>
      <article className="flex xl:justify-start xl:gap-12 justify-center items-center gap-20 flex-wrap text-black">
        {items?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-2 p-1 w-[320px] h-[400px] bg-gray-50 text-black rounded shadow-lg shadow-black/20"
          >
            <Image
              src={`${item.imagen ? item.imagen : "/default-image.webp"}`}
              className="w-full h-[320px] object-cover rounded"
              width={300}
              height={300}
              alt={`Imagen de ${item.nombre}`}
              loading="lazy"
            />
            <h2 className="font-semibold text-lg">{item.nombre}</h2>
            <h3 className="font-bold mb-3">${item.precio}</h3>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Card;
