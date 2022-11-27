import React from 'react'
import { useState } from 'react'


const PutProductos = ({nuevo, setNuevo, input, setInput}) => {

    // creo nuevo state para guardar el id del producto a actualizar
    const [id, setId] = useState()

    // agrego el id del producto que voy a modificar para realizar el put
    const url = `api/products/${id}`;

    const handleSearch = (e) => {
        e.preventDefault();
        setId(e.target.value);        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(url, {
          method: "put",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(input)
        })
        .then((response) => response.json())
        .then((response) => console.log("Exito:", response));
        //a set nuevo le cargo el nuevo dato que le llega a get por props y lo usa para actualizarse
        setNuevo({...nuevo});
        setId("");
        //a set input lo vacio
        setInput({[e.target.name]:""})
      }

    return (
    <>
    <h3>¿Quiere modificar un producto?</h3>
    <p>Ingrese el Id del producto a modificar. Los datos a modificar deben ingresarse en el formulario superior y luego hacer clicl en Actualizar producto.</p>
    <form>
        <input type="number" name='id' placeholder='id del producto' onChange={handleSearch}/>
        <button onClick={handleSubmit}>Actualizar producto</button>
    </form>
    </>
  )
}

export default PutProductos
