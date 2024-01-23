import { NextResponse } from "next/server";
import { promises as fsPromises } from "fs";
import path from "path";
import { MenuData } from "@/types/data";

export async function getData(): Promise<MenuData> {
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
    throw error;
  }
}