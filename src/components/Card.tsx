import { Entrada, MenuData, MenuItem} from "@/types/data";

interface CardProps {
  title: string;
  items: MenuItem[];
}

const Card: React.FC<CardProps> = ({ title, items }) => {
const id = title.replace(/ /g, "");
  
  return (
    <section className="mb-56" id={id}>
      <h2 className="text-5xl mb-10 uppercase text-[#fab005] drop-shadow-2xl text-wrap">{title}</h2>
      <article className="flex xl:justify-start xl:gap-12 justify-center items-center gap-20 flex-wrap text-black">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col justify-center items-center gap-2 p-1 w-[320px] h-[400px] bg-white rounded shadow-lg shadow-black/20">
            <img src={item.imagen} alt="" className="w-full h-[320px] object-cover rounded"/>
            <h2 className="font-semibold">{item.nombre}</h2>
            <h4 className="font-bold text-[#d59500] mb-3">${item.precio}</h4>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Card;
