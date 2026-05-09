console.log("Pre-entrega de Proyecto Final")
console.log("-----------------------------")

import { getAllProducts, getProductById, createProduct, deleteProduct } from "./services/products.js";

// parseArgs(): parsea y valida los argumentos que llegan por consola

const parseArgs = () => {
  // implemento método slice() para dejar fuera la ruta del ejecutable de Node y la ruta del archivo en ejecución
  const args = process.argv.slice(2);

    // destructuring de array
    const [method, resource, title, price, category] = args; 

    // valida que el exista el método de la solicitud HTTP
    if (!method) {
      throw new Error("Método faltante");
    }

    // valida que exista el endpoint y el Id (cuando es necesario)
    if (!resource) {
      throw new Error("Recurso faltante");
    }

    // normaliza método por si se escribe en minúscula
    const normalizedMethod = method.toUpperCase();

    // destructuring de array -> obtengo el endpoint y el id necesaio para buscar o eliminar un producto específico.
    const [endpoint, id] = resource.split("/");

    // valida que el endpoint sea "products" y no otro como Carts, Users, Auth o este vacio.
    if (endpoint !== "products") {
      throw new Error("Esta consulta es únicamente para productos");
  }
  // devuelven los valores parseados
  return {normalizedMethod, id, title, price, category}
 }


// main(): solo ejecuta la lógica
const main = async () => {
  // manejo de errores con try/catch
  try {
    // destructuring de objeto -> reciben los datos ya parseados
    const { normalizedMethod, id, title, price, category } = parseArgs();
    
    switch (normalizedMethod) {
      case "GET":
        if (!id) {
          const allProducts = await getAllProducts();
          //convierte un objeto JS en un string JSON para mejorar la legibilidad en la salida.
          console.log("Resultados de busqueda: ");
          console.log(JSON.stringify(allProducts, null, 2)); 
        } else {
          const byIdProduct = await getProductById(id);
          console.log("Resultado de busqueda: ");
          console.log(JSON.stringify(byIdProduct, null, 2));
        }
        break;

      case "POST":
        if (!title || !price || !category) {
          throw new Error("Título, precio o categoría faltantes");
        }

        const numericPrice = Number(price);
        // valido que el txt recibido por consola se pueda convertir a número y evita que los precios sean 0 o negativos  
        if (Number.isNaN(numericPrice) || numericPrice <= 0) {
          throw new Error("El precio debe ser un número válido mayor a 0");
        }

        const createdProduct = await createProduct({
          title,
          price: numericPrice,
          category,
        });
        console.log("Producto creado existosamente:")
        console.log(JSON.stringify(createdProduct, null, 2));
        break;

      case "DELETE":
        if (!id) {
          throw new Error("Número de ID faltante.");
        }
        const deletedProduct = await deleteProduct(id);
        console.log("Producto eliminado existosamente:")
        console.log(JSON.stringify(deletedProduct, null, 2));
        break;

      default:
        throw new Error("Método no reconocido");
    }
    // captura cualquier error lanzado dentro del try (validaciones o fallos de la API)
  } catch (error: unknown) {
    // verifica que el error sea una instancia de Error para poder leer su mensaje
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      // si el error no es un Error estándar, muestra un mensaje genérico
      console.log("Error desconocido");
  }
}
};

main();