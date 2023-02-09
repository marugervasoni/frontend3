import React, { useState } from 'react'

//app c comp funcional que tenga un contador que inicie en 0 y vaya incrementando su valor en 1 al hacer clic a un boton
// a la vez, cada clic debe escribir un mensaje en consola utilizando useState y useEffect
const BotonCount = () => {

  const [count, setCount] = useState(0)

  return (
    <div>
        <h1>BotonCount</h1>
        <button onClick={setCount(count +1)}></button>
    </div>
  )
}

export default BotonCount