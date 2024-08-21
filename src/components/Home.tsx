const HomePage = () => {
  return (
    <>
      <section className="relative lg:-mt-10 flex flex-col items-center justify-center animate-fade-down animate-once animate-duration-[1500ms] animate-ease-out animate-fill-both">
        {/* Primer imagen */}
        <figure className="relative max-sm:w-80 md:max-w-[45%] md:absolute z-10">
          <img
            className="w-full h-auto"
            src="/fideos-harina.webp"
            alt="Fideos con salsa"
          />
          <figcaption className="sr-only">Fideos con salsa</figcaption>
        </figure>

        {/* Segunda imagen */}
        <figure className="relative max-md:absolute top-0 max-sm:w-80 md:max-w-[40%] animate-fade-down animate-once animate-duration-[3000ms] animate-ease-out animate-fill-both">
          <img
            className="w-full h-auto"
            src="/tomates.webp"
            alt="Tomates"
          />
          <figcaption className="sr-only">Tomates</figcaption>
        </figure>

        {/* Texto descriptivo */}
        <div className="md:absolute left-0 w-full sm:w-96 text-center p-4 bg-white/10 rounded-l-lg shadow-lg">
          <p className="text-base md:text-lg">
            Disfruta de <strong>una experiencia única</strong> que combina la
            exquisitez de un restaurante, la <strong>atmósfera relajada</strong>
            de un bar, la <strong>comodidad</strong> del delivery, y la
            conveniencia de un drugstore.
          </p>
        </div>

        {/* Texto de invitación */}
        <div className="mt-10 md:mt-20 md:absolute right-0 w-full sm:w-96 text-center p-4 bg-white/10 rounded-r-lg shadow-lg">
          <p className="text-base md:text-lg">
            ¡Te invitamos a <strong>explorar</strong> todo lo que Sweet Bistró
            tiene para ofrecer y a sumergirte en una{" "}
            <strong>experiencia inigualable!</strong>
          </p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
