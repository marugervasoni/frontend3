import React from "react";
import { useState } from "react";
import GetProductos from "./Components/GetProductos";
import PostProductos from "./Components/PostProductos";

function App() {

  const url = "api/products"
  // utilizamos este estado para pasarlo por props: a get (y que actualice), una vez que se carga con post
  const [nuevo, setNuevo] = useState([])

  return (
  <>
    <h1>Productos</h1>
    <PostProductos url={url} nuevo={nuevo} setNuevo={setNuevo}/>
    <GetProductos url={url} nuevo={nuevo} setNuevo={setNuevo}/>
  </>
  )
}

export default App;

//CONSIGNA
// Utilizando el proyecto proporcionado, crear una petición que se ejecute justo en el
// montaje de los componentes para obtener todos los productos registrados en el
// servidor y mostrarlos, mediante una lista, en un componente del sistema.
// ● Crear un formulario con los campos referidos a la estructura del objeto de respuesta.
// Este formulario debe utilizarse tanto para insertar como para actualizar un producto.
// ● Cada componente de la lista debe tener un botón de borrado, de modo que cuando
// el usuario haga clic en él, se borre el elemento relacionado con el mismo.