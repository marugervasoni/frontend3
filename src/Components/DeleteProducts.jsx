import React from 'react'

//El delet es hijo del getcomponent por eso paso paso el id como propiedad y seteo el cambio en el estado
// "nuevo" que cree en app para que no se muestre más el producto eliminado.
    
const DeleteProducts = ({id, nuevo, setNuevo }) => {

    const url = `api/products/${id}`

    const handleDelete =() => {
        fetch(url, {
            method: "delete",
          })
            .catch((error) => console.error("Error:", error))
            .then((response) => console.log("¡Éxito!:", response));
          setNuevo({ ...nuevo });
    }

  return (
    <>
    <button onClick={handleDelete}>Borrar producto</button>
    </>
  )
}

export default DeleteProducts