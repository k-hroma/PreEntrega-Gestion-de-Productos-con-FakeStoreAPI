console.log("Pre-entrega de Proyecto Final")

import { getAllProducts, getProductById, createProduct, deleteProduct } from "./services/products.js";

const main = async () => {
  try {
    const args = process.argv.slice(2);

    const [metodo, categoriaId, titulo, precio, tipoCategoria] = args;

    if (!metodo) {
      throw new Error("Método faltante");
    }

    if (!categoriaId) {
      throw new Error("Categoría faltante");
    }

    const metodoNormalizado = metodo.toUpperCase();

    const [categoria, id] = categoriaId.split("/");

    if (categoria !== "products") {
      throw new Error("Esta consulta es únicamente para productos");
    }

    switch (metodoNormalizado) {
      case "GET":
        if (!id) {
          await getAllProducts(categoria);
        } else {
          await getProductById(categoria, id);
        }
        break;

      case "POST":
        if (!titulo || !precio || !tipoCategoria) {
          throw new Error("Título, precio o categoría faltantes");
        }

        await createProduct(titulo, precio, tipoCategoria);
        break;

      case "DELETE":
        if (!id) {
          throw new Error("Número de ID faltante.");
        }

        await deleteProduct(id);
        break;

      default:
        throw new Error("Método no reconocido");
    }
  } catch (error: unknown) {
    console.log(error);
  }
};

main();