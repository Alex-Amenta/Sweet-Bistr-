import fs from 'fs/promises';

async function getMenu() {
    try {
        const rawData = await fs.readFile('./data.json', 'utf-8');
        const data = JSON.parse(rawData);
        return data.menu || {};
    } catch (error) {
        console.error('Error al leer el archivo:', error);
        return {};
    }
}

export const getPlatosPrincipales = async () => {
    const menuData = await getMenu();

    // Verificar si existe la sección de platos principales
    if (menuData.platosPrincipales) {
        return menuData.platosPrincipales;
    } else {
        console.error('No se encontró la sección de platos principales en el menú.');
        return {};
    }
};

//   // Necesitas usar await porque getPlatosPrincipales es una función asíncrona
//   (async () => {
//     const platosPrincipalesData = await getPlatosPrincipales();
//     console.log(platosPrincipalesData);
//   })();


// Función para obtener pastas y sus salsas
export const getSalsas = async () => {
    const menuData = await getMenu();

    // Verificar si existe la sección de platos principales
    if (menuData.platosPrincipales && menuData.platosPrincipales.pastas) {
        const pastas = menuData.platosPrincipales.pastas;

        // Obtener las salsas de todas las pastas
        const salsas = pastas.reduce((salsas, pasta) => {
            if (pasta.salsas) {
                salsas.push(...pasta.salsas);
            }
            return salsas;
        }, []);

        return salsas;
    } else {
        console.error('No se encontró la sección de salsas en el menú.');
        return [];
    }
};

// Funcion para obtener lomitos de la seccion carnes
export const getLomitos = async () => {
    const menuData = await getMenu();

    if (menuData.platosPrincipales && menuData.platosPrincipales.carnes) {
        const carnes = menuData.platosPrincipales.carnes;

        //obtener lomitos
        const lomitos = carnes.reduce((lomitos, carnes) => {
            if (carnes.lomitos) {
                lomitos.push(...carnes.lomitos);
            }
            return lomitos;
        }, []);

        return lomitos;
    } else {
        console.error('No se encontró la sección lomitos en el menú.');
        return [];
    }
}

// Necesitas usar await porque getSalsas es una función asíncrona
(async () => {
    const pastasConSalsas = await getLomitos();
    console.log(pastasConSalsas);
})();