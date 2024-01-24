import Foods from "@/components/Foods";
import Footer from "@/components/Footer";
import MenuNavbar from "@/components/MenuNavbar";
import { getData } from "../api/routes";

const MenuPage = async () => {
  const allFoods = await getData();

  return (
    <section className="grid grid-cols-1 grid-rows-3 lg:grid-cols-5  lg:grid-rows-5 gap-2 py-2 px-2 lg:py-5 lg:px-5 w-full h-full">
      <article
        className="col-span-5 row-span-3 lg:col-span-1 lg:row-span-4 backdrop-blur-md
          border border-black/10
         relative bg-[#121212] rounded-md"
      >
        <MenuNavbar />
      </article>
      <article className="menu col-span-5 lg:col-span-5 lg:row-span-4 lg:col-start-2 lg:row-start-1 p-5 md:p-10 overflow-clip rounded-md bg-no-repeat bg-contain md:bg-cover overflow-y-scroll max-h-[1200px] scroll-smooth" 
      style={{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(/bg-menu.webp)"}}>
        <Foods menuData={allFoods} />
      </article>
      <article className="col-span-5 lg:col-span-5 lg:col-start-1 lg:row-start-5 rounded-md bg-[#121212]">
        <Footer />
      </article>
    </section>
  );
};

export default MenuPage;
