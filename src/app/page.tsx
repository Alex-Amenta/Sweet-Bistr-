import AboutUs from "@/components/AboutUs";
import HomePage from "@/components/Home";
import MenuSection from "@/components/MenuSection";

export default function Home() {
  return (
    <main className="mt-7 px-10 md:px-28">
      <section className="flex justify-center items-center gap-10 max-sm:flex-col">
        <HomePage />
      </section>

      <section id="#sobre-nosotros" className="my-32">
        <h1 className="text-center uppercase text-4xl md:text-5xl">Sobre Nosotros</h1>
        <AboutUs />
      </section>

      <section id="#menu" className="my-32">
      <h1 className="text-center uppercase mb-7 text-4xl md:text-5xl">Nuestro Menú</h1>
        <MenuSection/>
      </section>
    </main>
  );
}
