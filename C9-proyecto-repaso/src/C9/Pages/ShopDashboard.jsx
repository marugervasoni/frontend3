import React from 'react'
import ProductDisc from '../Components/ProductDisc';

//2-- llamo a props para utilizar el titulo enviado ----puedo enviarlo desestructurado ({titulo})) o estructurado (props)
const ShopDashboard = ({titulo}) => {
    console.log(titulo);
  return (
    <>
        <h1>Bienvenidos al {titulo}</h1>
        {/* 3-- agrego componente */}
        <ProductDisc/>    
    </>
  )
}

export default ShopDashboard