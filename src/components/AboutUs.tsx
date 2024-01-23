import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

const AboutUs = () => {
  return (
    <section className="my-12 flex flex-col justify-center items-center gap-10 lg:flex-row">
      <article className="text-balance flex flex-col gap-y-3">
        <p>
          Bienvenido a Sweet Bistró, tu destino culinario exclusivo en{" "}
          <strong>Talar de Martínez</strong>. Sumérgete en la elegancia de
          nuestra ubicación junto a la piscina, donde la{" "}
          <strong>alta cocina</strong> se encuentra con la relajada
          sofisticación de un bar y la comodidad de un servicio de entrega y
          drugstore.
        </p>
        <p>
          Cada plato que ofrecemos refleja nuestra pasión por la{" "}
          <strong>calidad</strong> y la <strong>innovación</strong>,
          proporcionando una experiencia gastronómica{" "}
          <strong>inigualable</strong>. En Sweet Bistró, cada bocado es una obra
          maestra culinaria diseñada para satisfacer los paladares más
          exigentes.
        </p>

        <div className="mt-4 text-wrap">
          <h2 className="text-xl mb-2 uppercase text-yellow-300">
            Ubicación y Horarios
          </h2>
          <p>
            Te esperamos en{" "}
            <a
              href="https://maps.app.goo.gl/R1JgXsjFysnasANx8"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-2 decoration-yellow-500/60 hover:decoration-yellow-500 font-bold"
            >
              Monseñor Larumbe 3151
            </a>
            , dentro de Talar de Martínez.
          </p>
          <p> Nuestros horarios de atención son:</p>
          <p className="flex items-center justify-start gap-x-2 mt-2">
            <CalendarMonthIcon sx={{ color: "#fab005" }} /> Lunes a Domingo de
            9:00 am - 12:00 pm
          </p>
          <p className="flex items-center justify-start gap-x-2 mt-1">
            <LocalFireDepartmentIcon sx={{ color: "#fab005" }} />
            Cocina hasta las 11:30 pm
          </p>
        </div>
        <p>
          Descubre la magia de Sweet Bistró, donde la cocina excepcional se
          encuentra con un entorno excepcional. ¡Esperamos verte pronto para una
          experiencia culinaria única y memorables momentos en un ambiente
          exclusivo!
        </p>
      </article>
      <article>
        <img
          src="/restaurant-bistro.webp"
          alt="Foto de restaurante Sweet Bistró"
          className="rounded shadow-lg w-[700px] md:w-[1000px]"
        />
      </article>
    </section>
  );
};

export default AboutUs;
