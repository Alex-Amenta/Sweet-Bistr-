import CardContainer from "@/components/Card-container";
import Foods from "@/components/Foods";
import Footer from "@/components/Footer";
import MenuNavbar from "@/components/MenuNavbar";

const MenuPage = async () => {

  return (
    <section className="grid grid-cols-5 grid-rows-5 gap-4 py-20 px-10 w-full h-full">
      <div
        className="row-span-4 backdrop-blur-md
          border border-black/10
          shadow-inner shadow-[#fab005]/30 relative"
      >
        <MenuNavbar/>
      </div>
      <div className="col-span-5 col-start-1 row-start-5">
        <Footer />
      </div>
      <div className="col-span-5 row-span-4 col-start-2 row-start-1 shadow-inner shadow-[#fab005]/30 p-10">
        <Foods/>
      </div>
    </section>
  );
};

export default MenuPage;
