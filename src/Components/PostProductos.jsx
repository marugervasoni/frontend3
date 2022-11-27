import React from 'react'
import { useState } from 'react'
import PutProductos from './PutProductos'

const PostProductos = ({url, nuevo, setNuevo}) => {
  
  const [input, setInput] = useState({})

  const handleInput = (e) => {
    e.preventDefault();
    setInput({...input, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input)
    })
    .then((response) => response.json())
    .then((response) => console.log("Exito:", response));
    //a set nuevo le cargo el nuevo dato que le llega a get por props y lo usa para actualizarse
    setNuevo({...nuevo});
    //a set input lo vacio
    setInput({[e.target.name]:""})
  }

  return (
    <>
      <h2>Cargar nuevo producto</h2>
      <form>
        <input type="text" name='title' placeholder='titulo producto' onChange={handleInput} />
        <input type="text" name='description' placeholder='descripcion del producto' onChange={handleInput}/>
        <input type="number" name='price' placeholder='precio'onChange={handleInput}/>
        <input type="number" name='stock' placeholder='stock del producto' onChange={handleInput}/>
        <input type="text" name='category' placeholder='categoría' onChange={handleInput}/>
        <input type="text" name='image'placeholder='url imagen producto'onChange={handleInput}/>
        <button onClick={handleSubmit}>Cargar producto</button>
      </form>
      <PutProductos nuevo={nuevo} setNuevo={setNuevo} input={input} setInput={setInput}/>
    </>
  )
}

export default PostProductos
