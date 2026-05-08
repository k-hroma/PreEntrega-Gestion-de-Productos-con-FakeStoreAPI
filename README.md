# PreEntrega - Gestión de Productos con FakeStore API

## Descripción

Este proyecto consiste en una aplicación de consola desarrollada con TypeScript y Node.js que permite interactuar con la API pública de FakeStore para gestionar productos mediante comandos ejecutados desde la terminal.

La aplicación permite:

- Consultar todos los productos
- Consultar un producto específico
- Crear nuevos productos
- Eliminar productos

Todo el flujo se realiza mediante peticiones HTTP utilizando `fetch` y procesamiento de argumentos desde la línea de comandos con `process.argv`.

---

## Tecnologías Utilizadas

- TypeScript
- Node.js
- tsx
- FakeStore API

---

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/k-hroma/PreEntrega-Gestion-de-Productos-con-FakeStoreAPI.git
```

Ingresar al proyecto:

```bash
cd preentrega
```

Instalar dependencias:

```bash
npm install
```

---

## Ejecución del Proyecto

El proyecto se ejecuta utilizando:

```bash
npm run start
```

---

# Funcionalidades

## Obtener todos los productos

```bash
npm run start GET products
```

### Resultado esperado

Se mostrará en consola la lista completa de productos obtenidos desde la API.

---

## Obtener un producto específico

```bash
npm run start GET products/15
```

### Resultado esperado

Se mostrará en consola la información del producto correspondiente al ID indicado.

---

## Crear un nuevo producto

```bash
npm run start POST products T-Shirt-Rex 300 remeras
```

### Parámetros

- `title`
- `price`
- `category`

### Resultado esperado

La API devolverá el producto creado junto con su ID.

---

## Eliminar un producto

```bash
npm run start DELETE products/7
```

### Resultado esperado

Se mostrará en consola la respuesta de eliminación del producto.

---

# Estructura del Proyecto

```bash
src/
│
├── index.ts
│
└── services/
```

---

# Conceptos Aplicados

Durante el desarrollo de este proyecto se aplican conceptos como:

- Manejo de APIs REST
- Peticiones HTTP asíncronas
- Uso de `fetch`
- Uso de `process.argv`
- Manipulación de strings y arrays
- Destructuring
- Spread operator
- Manejo de promesas con async/await
- Modularización del código

---

# API Utilizada

Se utilizó la API pública de FakeStore:

https://fakestoreapi.com

---

# Scripts Disponibles

```json
"scripts": {
  "start": "tsx src/index.ts"
}
```

---

# Autor

Desarrollado por Rocío Mendonca Gainza
GitHub: https://github.com/k-hroma

Proyecto realizado como pre-entrega académica utilizando TypeScript y Node.js.
