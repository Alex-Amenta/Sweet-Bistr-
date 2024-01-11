import { NextResponse } from "next/server";
import { promises as fsPromises } from "fs";
import path from "path";
import {
  Carne,
  Entrada,
  Lomitos,
  Pastas,
  PreciosEntrada,
  Salsa,
} from "@/types/data";

export async function getData() {
  try {
    // Construye la ruta completa al archivo JSON
    const filePath = path.resolve(
      process.cwd(),
      "src",
      "app",
      "api",
      "data.json"
    );

    // Lee el contenido del archivo JSON de forma asíncrona
    const rawData = await fsPromises.readFile(filePath, "utf-8");

    // Parsea el contenido del archivo JSON a un objeto JavaScript
    const jsonData = JSON.parse(rawData);

    return jsonData;
  } catch (error) {
    console.log("Error loading data", error);
  }
}

export async function getPricesEntradas() {
  const allData = await getData();

  if (allData.entradas && allData.entradas.precios) {
    const entradas = allData.entradas;
    const preciosEntradas: PreciosEntrada[] = entradas.reduce(
      (acc: PreciosEntrada[], entrada: Entrada) => {
        if (entrada.precios) {
          acc.push(...entrada.precios);
        }
        return acc;
      },
      []
    );

    return preciosEntradas;
  } else {
    console.log('"precios" in entradas not found');
    return [];
  }
}

export async function getPlatosPrincipales() {
  const allData = await getData();

  if (allData.platosPrincipales) {
    return allData.platosPrincipales;
  } else {
    console.log("platosPrincipales not found");
    return {};
  }
}

export async function getSalsas() {
  const allData = await getData();

  if (allData.platosPrincipales && allData.platosPrincipales.salsas) {
    const pastas: Pastas[] = allData.platosPrincipales.pastas;
    const salsas: Salsa[] = pastas.reduce((acc: Salsa[], pasta: Pastas) => {
      if (pasta.salsas) {
        acc.push(...pasta.salsas);
      }
      return acc;
    }, []);

    return salsas;
  } else {
    console.log('"salsas" in pastas not found');
    return [];
  }
}

export async function getLomitos() {
  const allData = await getData();

  if (allData.platosPrincipales && allData.platosPrincipales.carnes) {
    const carnes: Carne[] = allData.platosPrincipales.carnes;
    const lomitos: Lomitos[] = carnes.reduce((acc: Lomitos[], carne: Carne) => {
      if (carne.lomitos) {
        acc.push(...carne.lomitos);
      }
      return acc;
    }, []);

    return lomitos;
  } else {
    console.log('"lomitos" in carnes not found');
    return [];
  }
}
