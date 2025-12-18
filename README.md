# 🍋 LimaLimón Pastelería

### Entrega Final — Curso React Coderhouse

LimaLimón es una tienda online de pastelería desarrollada en React, que permite ver los distintos productos que se ofrecen divididos por secciones y a su vez ver los detalles de cada uno, agregar al carrito, gestionar cantidades y finalizar compras mediante un flujo completo con Context y Firebase.

---

## Tecnologías utilizadas

- **React + Vite**
- **React Router DOM**
- **Context API**
- **Firebase Firestore**
- **React Toastify**
- **SweetAlert2**
- **CSS personalizado**
- \*\*Bootstrap

---

## Funcionalidades principales

### Catálogo dinámico de productos

- Los productos se obtienen mediante funciones asíncronas simuladas con _Promises_.
- El componente **ItemListContainer** renderiza el catálogo completo o filtrado por categoría.
- La navegación por categorías se realiza mediante rutas dinámicas:  
  `/category/:categoryId`.

### Vista en detalle

- La ruta `/item/:id` muestra el detalle de un producto.
- Se obtiene mediante `useParams()` y búsqueda por ID.
- Se actualiza dinámicamente al cambiar el producto.

### 🛒 Carrito de compras (Context API)

- Implementado mediante **CartContext**, que maneja:

  - agregar productos
  - eliminar productos
  - vaciar carrito
  - total por producto
  - total general
  - cantidad total en el navbar

- **CartView** muestra:
  - imagen
  - nombre
  - cantidad
  - subtotal
  - botón para eliminar ítems
  - botón para vaciar carrito

### ItemCount — Selector de Cantidad

- Permite sumar/restar unidades respetando stock.
- Oculto automáticamente cuando el usuario agrega el producto al carrito.
- Controla el stock dinámico según productos ya agregados.

### Checkout con validaciones + Firebase

El formulario incluye validaciones:

- campos obligatorios
- coincidencia de email
- nombre y apellido solo letras
- longitud mínima

Al finalizar:

1. Se genera una orden en Firebase Firestore.
2. Se obtiene el ID de la orden.
3. Se muestra mediante **SweetAlert2**.
4. Se redirige al Home.
5. Se limpia el carrito.

---

## Navegación SPA

Implementada con **React Router DOM**:

- `/` — Home
- `/category/:categoryId` — Filtrado por categoría
- `/item/:id` — Vista de detalle
- `/cart` — Carrito
- `/checkout` — Finalización de compra
- `/about` — Información del emprendimiento
- `*` — Página 404

Toda la navegación funciona sin recargar la página (SPA).

---

## Estilos y experiencia de usuario

- Formularios y secciones estilizadas con CSS propio.
- Diseño visual coherente con la temática pastel / LimaLimón.
- **SweetAlert2** para interacciones importantes.
- **Toastify** para mensajes inmediatos (errores y validaciones).
- Vistas limpias y componentes reutilizables.

---

## ▶️ Instrucciones para correr el proyecto

1. Clonar el repositorio

git clone https://github.com/maxiarru/cursoReact

2. Instalar dependencias

npm install

3. Ejecutar el servidor de desarrollo

npm run dev

4. Abrir en el navegador:

Abrir el navegador en la direccion indicada ejemplo : http://localhost:5173
