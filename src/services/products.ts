// URL base de la API FakeStore
const API_BASE_URL = "https://fakestoreapi.com";

// obtiene la lista completa de productos desde la API
export const getAllProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products`);
  // valida que la respuesta sea exitosa, si no, lanza error con el código HTTP
  if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
  // devuelve el body de la respuesta parseado como JSON
  return response.json();
};

// obtiene un producto específico según el id que recibe por parámetro
export const getProductById = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/products/${id}`);
  if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
  return response.json();
};

// crea un nuevo producto enviando los datos por POST
export const createProduct = async (data: {
  title: string;
  price: number;
  category: string;
}) => {
  // valores por defecto para campos que la API espera pero no pedimos por consola
  const defaultProductData = {
    description: "No tiene descripción",
    image: "No hay imagen disponible"
  }
  // utilizo operador spread para mergear los datos por defecto con los que envio el usuario por consola.
  const newProductData = {
    ...defaultProductData,
    ...data
  } 

  const response = await fetch(`${API_BASE_URL}/products`, {
    method: "POST",
    // indica al servidor que el body va en formato JSON
    headers: { "Content-Type": "application/json" },
    // convierte el objeto a string JSON para enviarlo en el body
    body: JSON.stringify(newProductData),
  });
  if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
  return response.json();
};

// elimina un producto de la API según el id recibido
export const deleteProduct = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/products/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
  return response.json();
};