const HomePage = () => {
  return (
    <>
      <div className="max-w-2xl animate-fade-down animate-once animate-duration-[1500ms] animate-ease-out animate-fill-both">
        <h1 className="text-4xl mb-5 uppercase md:text-7xl max-sm:text-center">Sweet Bistró</h1>
        <p className="text-wrap">
          Somos un lugar de encuentro donde podrás disfrutar de{" "}
          <strong>una experiencia única</strong> que combina la exquisitez de un
          restaurante, la <strong>atmósfera relajada</strong> de un bar, la{" "}
          <strong>comodidad</strong> del delivery y la conveniencia de un
          drugstore.
        </p>
        <p className="text-wrap">
          ¡Te invitamos a <strong>explorar</strong> todo lo que Sweet Bistró
          tiene para ofrecer y a sumergirte en una{" "}
          <strong>experiencia inigualable!</strong>
        </p>
      </div>
      <div className="flex relative animate-fade-down animate-once animate-duration-[1500ms] animate-ease-out animate-fill-both">
        <img
          className="w-auto md:w-[1000px] absolute z-10 h-full"
          src="/fideos-harina.webp"
          alt=""
        />
        <img
          className="w-auto md:w-[1500px] h-full animate-fade-down animate-once animate-duration-[3000ms] animate-ease-out animate-fill-both"
          src="/tomates.webp"
          alt=""
        />
      </div>
    </>
  );
};

export default HomePage;
