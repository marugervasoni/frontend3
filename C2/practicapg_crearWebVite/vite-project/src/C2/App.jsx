// CLASE 2-------------------------------------------------------------
import logoReact from './assets/react.svg'
import foto from './assets/satisfied.png'
import './App.css'

function App() {

  return (
    <div className="App">
      <div>
        <h1>Hello React</h1>
        <img src={logoReact} className="logo react" alt="React logo" />
      </div>
      <div>
        <img src={foto} alt="React logo" />
      </div>
    </div>
  )
}

export default App