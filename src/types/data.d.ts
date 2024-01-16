// Interface with common properties
interface MenuItem {
  nombre: string;
  precio: number;
  imagen: string;
}

export interface Entrada extends MenuItem {}
export interface Pasta extends MenuItem {}

export interface Salsa extends MenuItem {}
export interface Carne extends MenuItem {}
export interface Lomitos extends MenuItem {}
export interface Pescado extends MenuItem {}
export interface TortillaOmeletteTartas extends MenuItem {}
export interface Guarnicion extends MenuItem {}
export interface SalteadoCocinaSB extends MenuItem {}
export interface SalteadoCocinaSB extends MenuItem {}
export interface Infantil extends MenuItem {}
export interface Ensalada extends MenuItem {}
export interface HamburguesaMilanesa extends MenuItem {}
export interface EmpanadaCanastita extends MenuItem {}
export interface Pizza extends MenuItem {}
export interface Postre extends MenuItem {}

//------- Platos principales ----------------
// export interface PlatosPrincipales {
//   pastas: Pastas[];
//   carnes: Carne[];
//   pescados: Pescado[];
//   tortillas_omelettes_tartas: TortillaOmeletteTartas[];
//   guarniciones: Guarnicion[];
// }
//-----------------------------------------

export interface MenuData {
  entradas: Entrada[];
  pastas: Pasta[];
  salsas: Salsa[];
  carnes: Carne[];
  lomitos: Lomitos[];
  pescados: Pescado[];
  tortillas_omelettes_tartas: TortillaOmeletteTartas[];
  guarniciones: Guarnicion[];
  salteados_cocinaSB: SalteadoCocinaSB[];
  infantil: Infantil[];
  ensaladas: Ensalada[];
  hamburguesas_milanesas: HamburguesaMilanesa[];
  empanadas_canastitas: EmpanadaCanastita[];
  pizzas: Pizza[];
  postres: Postre[];
}