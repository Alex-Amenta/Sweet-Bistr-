import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import HomePage from "@/components/Home";
import MenuSection from "@/components/MenuSection";

export default function Home() {
  return (
    <>
      <section
        id="inicio"
        className="mt-5 px-10 md:px-20 relative w-full min-h-screen"
      >
        <h1 className="animate-fade-down animate-once animate-duration-[1500ms] animate-ease-out animate-fill-both text-center text-4xl uppercase sm:text-8xl lg:text-[8rem] 2xl:text-[10rem] font-bold max-sm:text-center">
          Sweet Bistró
        </h1>

        <HomePage />
      </section>
      <main className="mt-7 px-10 md:px-28">
        <section id="sobre-nosotros" className="my-32 scroll-mt-28">
          <h1 className="text-center uppercase text-4xl md:text-5xl">
            Sobre Nosotros
          </h1>
          <AboutUs />
        </section>

        <section
          id="menu"
          className="my-32 scroll-mt-28 flex flex-col justify-center items-center"
        >
          <h1 className="text-center uppercase mb-7 text-4xl md:text-5xl">
            Nuestro Menú
          </h1>
          <MenuSection />
        </section>
      </main>
      <Footer />
    </>
  );
}
