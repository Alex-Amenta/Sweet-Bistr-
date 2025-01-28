import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

const Footer = () => {
  return (
      <footer id="contacto" className="bg-[#121212] shadow">
        <section className="w-full max-w-screen-2xl mx-auto p-4 md:py-8">
          <article className="lg:flex lg:items-center lg:justify-between">
            <a
              href="/"
              className="flex items-center mb-4 sm:mb-5 space-x-2 rtl:space-x-reverse"
            >
              <img
                src="/logo-bistro.webp"
                className="w-20 ml-5"
                alt="Sweet Bistro Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hover:text-[#fab005]">
                Sweet Bistró
              </span>
            </a>
            <article className="grid grid-cols-2 gap-10 sm:gap-16 sm:grid-cols-2">
              <div>
                <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Ubicación y Horarios
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium text-wrap">
                  <li className="mb-3">
                    <a
                      href="https://maps.app.goo.gl/R1JgXsjFysnasANx8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#fab005]"
                    >
                      <LocationOnIcon /> Monseñor Larumbe 3151
                    </a>
                  </li>
                  <li className="mb-3">
                    <CalendarMonthIcon /> Lunes a Domingo de 9:00 am - 12:00 pm
                  </li>
                  <li>
                    <LocalFireDepartmentIcon /> Cocina hasta las 11:30 pm
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Contacto
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-3">
                    <a
                      href="https://m.facebook.com/people/Sweet-Bistro-Mart%C3%ADnez/100070665211698/?locale=es_LA"
                      className="hover:text-[#fab005]"
                      target="_blank"
                    >
                      <FacebookIcon /> Facebook
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="https://www.instagram.com/sweet_bistro_mtz/"
                      className="hover:text-[#fab005]"
                      target="_blank"
                    >
                      <InstagramIcon /> Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:01147175134"
                      className="hover:text-[#fab005]"
                      target="_blank"
                    >
                      <PhoneIcon /> Teléfono
                    </a>
                  </li>
                </ul>
              </div>
            </article>
          </article>
          <hr className="my-6 border-yellow-400/70 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
            © 2024 Sweet Bistró™ . Todos los derechos reservados.
          </span>
        </section>
      </footer>
  );
};

export default Footer;
