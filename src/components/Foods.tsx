import { MenuData } from "@/types/data";
import Card from "./Card";

interface FoodsProps {
    menuData: MenuData;
  }

const Foods: React.FC<FoodsProps> = async ({ menuData }) => {
  
  return (
    <section>
      <article>
      <Card title="Entradas" items={menuData.entradas} />
      <Card title="Pastas" items={menuData.pastas} />
      <Card title="Salsas" items={menuData.salsas} />
      <Card title="Carnes" items={menuData.carnes} />
      <Card title="Lomitos" items={menuData.lomitos} />
      <Card title="Pescados" items={menuData.pescados} />
      <Card title="Tortillas - Omelettes - Tartas" items={menuData.tortillas_omelettes_tartas} />
      <Card title="Guarniciones" items={menuData.guarniciones} />
      <Card title="Cocina SB y Salteados" items={menuData.salteados_cocinaSB} />
      <Card title="Infantil" items={menuData.infantil} />
      <Card title="Ensaladas" items={menuData.ensaladas} />
      <Card title="Hamburguesas y Milanesas" items={menuData.hamburguesas_milanesas} />
      <Card title="Empanadas y Canastitas" items={menuData.empanadas_canastitas} />
      <Card title="Pizzas" items={menuData.pizzas} />
      <Card title="Postres" items={menuData.postres} />
      </article>
    </section>
  );
};

export default Foods;
