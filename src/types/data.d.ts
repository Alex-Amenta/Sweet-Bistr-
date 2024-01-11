// Interface with common properties
interface MenuItem {
  nombre: string;
  precio: number;
  imagen: string;
}

interface PreciosEntrada {
  tipoDePorcion: string;
  precio: number;
}

export interface Entrada extends MenuItem {
  precios?: PreciosEntrada[];
}

export interface Salsa extends MenuItem {}

export interface Pastas extends Salsa {
  salsas?: Salsa[];
}

export interface Lomitos extends MenuItem {}

export interface Carne extends MenuItem {
  lomitos?: Lomitos[];
}

interface Pescado extends MenuItem {}
interface TortillaOmeletteTartas extends MenuItem {}
interface Guarnicion extends MenuItem {}
interface SalteadoCocinaSB extends MenuItem {}

export interface PlatosPrincipales {
  pastas: Pastas[];
  carnes: Carne[];
  pescados: Pescado[];
  tortillas_omelettes_tartas: TortillaOmeletteTartas[];
  guarniciones: Guarnicion[];
}
