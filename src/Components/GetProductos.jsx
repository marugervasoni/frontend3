import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import DeleteProducts from './DeleteProducts';

const GetProductos = ({url,nuevo, setNuevo}) => {

  const [data, setData] = useState([])

  useEffect(() => {
    console.log("se ha montado el componente");
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.products))
  }, [nuevo])

  return (
    <>
    <h2>Todos los productos</h2>
    {data.map((item) => (
      <div className="card" key={item.id}>
        <h4>PRODUCTO: {item.title}</h4>
        <p>DESCRIPCION: {item.description}</p>
        <p>PRECIO: $ {item.price}</p>
        <p>STOCK: {item.stock}</p>
        <p>CATEGORIA: {item.category}</p>
        <img src={item.image} alt="producto-img" />
        <DeleteProducts id={item.id} nuevo={nuevo} setNuevo={setNuevo}/>
      </div>
    ))}
    </>
  )
}

export default GetProductos