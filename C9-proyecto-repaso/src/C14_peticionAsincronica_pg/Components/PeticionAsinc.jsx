import React, { useEffect, useState } from 'react'

    //1. crear funcion y params para useState 
const PeticionAsinc = () => {

    const [vector, setVector] = useState([])

    // 2. creamos func p llamar a la API
    const getData = async () => {
        //asincronia
        const data = await
        //intercepta parte de peticion, trayendo datos dde API asincronicamente y en formato texto
        fetch('https://jsonplaceholder.typicode.com/comments')
        //variable que convertira los datos --> xq vector recorrera objeto usando el estado 
        const convert = await data.json(); 
        setVector(convert)
    }

    //4.usar useEffect (hook p ciclo de vida) para llamar a getData
    useEffect(() => {
        getData();
    })

  return (
    <div>
        <ul>
    {/* 3. enviar datos de forma organizada al navegador-- recorremos c/elemento del estado (vector) */}
            {vector.map(object =>(<li>{object.email}</li>))}
        </ul>
    </div>
  )
}

export default PeticionAsinc