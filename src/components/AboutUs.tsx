import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

const AboutUs = () => {
  return (
    <section className="my-12 flex flex-col lg:flex-row items-center gap-10 justify-between">
      <article className="flex flex-col gap-6 [&>p]:text-white/80 max-w-[600px]">
        <p>
          Sumérgete en la elegancia de nuestra ubicación en{" "}
          <strong>Talar de Martínez</strong>. Disfruta de la{" "}
          <strong>alta cocina</strong> en un ambiente que combina la
          sofisticación de un bar, la comodidad de un servicio de entrega y la
          conveniencia de un drugstore.
        </p>
        <p>
          Cada plato refleja nuestra pasión por la <strong>calidad</strong> y la{" "}
          <strong>innovación</strong>, ofreciendo una experiencia gastronómica{" "}
          <strong>inigualable</strong> para los paladares más exigentes.
        </p>

        <div className="bg-white/10 [&>p]:text-white/80 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Ubicación y Horarios</h3>
          <p className="mb-2">
            Visítanos en{" "}
            <a
              href="https://maps.app.goo.gl/R1JgXsjFysnasANx8"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-yellow-500 hover:text-yellow-600"
            >
              Monseñor Larumbe 3151
            </a>
            , dentro de Talar de Martínez.
          </p>
          <p className="flex items-center gap-2">
            <CalendarMonthIcon sx={{ color: "#fab005" }} />
            Lunes a Domingo de 9:00 am - 12:00 pm
          </p>
          <p className="flex items-center gap-2 mt-1">
            <LocalFireDepartmentIcon sx={{ color: "#fab005" }} />
            Cocina hasta las 11:30 pm
          </p>
        </div>

        <p>
          Descubre la magia de Sweet Bistró y disfruta de una experiencia
          culinaria única en un ambiente exclusivo. ¡Esperamos verte pronto!
        </p>
      </article>

      <article>
        <img
          src="/restaurant-bistro.webp"
          alt="Foto de restaurante Sweet Bistró"
          className="rounded-lg shadow-lg w-full md:w-[500px] max-w-[600px] aspect-square"
        />
      </article>
    </section>
  );
};

export default AboutUs;
