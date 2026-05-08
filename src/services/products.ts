const getAllProducts = async (categoria: string) => {
  console.log(`Todos los ${categoria}`)
 };

const getProductById = async (categoria:string, id: string) => { 
  console.log(`producto de id: ${id} encontrado`)
};

const createProduct = async (titulo: string, precio: string, categoria: string) => { 
  console.log(`producto: ${titulo} // precio ${precio} // categoria: ${categoria} --> agregado exitosamente`)
};

const deleteProduct = async (id: string) => { 
  console.log(`producto de ID: ${id} eliminado `)
};

export {getAllProducts, getProductById, createProduct, deleteProduct }