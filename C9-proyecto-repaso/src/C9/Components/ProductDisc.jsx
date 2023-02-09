import React from 'react'
import { useState } from 'react'

const ProductDisc = () => {

    // 10-- declaramos un estado para guardar el producto seleccionado asi modificarlo en el select
    const [productSelected, setProductSelected] = useState()
    // 13-- creo estado para descuentos -inicializado con 1 para que en caso de no exstir descaparezca el valor completo
    const [discount, setDiscount] = useState(1)

    // 4-- creo una lista para usar
    let lista = [
        {id: 1, producto: "Remera", precio: 2500},
        {id: 2, producto: "Pelota", precio: 4000},
        {id: 3, producto: "Jean", precio: 8000}
    ]

    // 12-- bucar elemento seleccionado
    const findProduct = lista.find(item => item.producto === productSelected)
  
    return (
    <>
    {/* 5-- para renderizar lista mapeo */}
        {lista.map(item => <li key={item.id}>{item.producto} = ${item.precio}</li>)}  
        {/* 6--creamos un select de productos: */}
        <form>
            {/* 9-- agrego evento para detectar cambios, y tambien estados */}
            {/* 11-- traigo setProductSelected */}
            <select onChange={(e) => setProductSelected(e.target.value)}>
                {/* hacemos un option con el titulo del select */}
                <option hidden>Producto</option>
            {/* ---podemos hacerlo asi: o mapeando  */}
                {/* <option value="">{lista[0].producto}</option>
                <option value="">{lista[1].producto}</option>
                <option value="">{lista[2].producto}</option> */}
                {lista.map(item => <option key={item.id} value={item.producto}>{item.producto}</option>)}
            </select>
            {/* 7-- creo otro select de descuentos: -en value el valor a descontar*/}
            {/* 12-- creo un nuevo estado para guardar el descuento seleccionado */}
            <select onChange={(e) => setDiscount(e.target.value)}>
                {/* hacemos un option con el titulo del select */}
                <option hidden>Seleccionar descuento</option>
                <option value={0.9}>10%</option>
                <option value={0.8}>20%</option>
                <option value={0.7}>30%</option>
            </select>
            {/* 8-- donde mostramos lo seleccionado */}
            <h3>Elemento seleccionado: {productSelected}</h3>
                {/* tengo un ternario solo con lo que hacer en caso positivo */}
                {/* 14-- finalmente llamo a mi estado discount para que aplique el descuento */}
            {findProduct && findProduct?.precio * discount}
        </form>
    </>
  )
}

export default ProductDisc