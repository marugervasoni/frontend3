// CLASE 4-------------------------------------------------------------

// Crear un componente usando prop children y fragment, y enviar una variable que contenga
// un nombre como prop e inserte un children escrito Hello. Devolver el mensaje, por ejemplo:
// Hola Juan. Recordemos que Hola son los niños y Juan es enviado como prop.
import './App.css'
import ChildComponent from './C4/mesa-trabajo-pg/Components/ChildComponent'

const App = () => {
  return (
    <div>
      {/* nombre como prop */}
      <ChildComponent nombre="Maria"/>
    </div>
  )
}

export default App
