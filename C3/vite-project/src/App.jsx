import corazoncito from './assets/corazon.png'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  let headers = ["Home", "Shop", "Contact"] 
  let inputs = ["email", "password"]


  return (
    <div className="App">
      <div>
        <h1>Camada 7</h1>
        <img src={reactLogo} className="logo" alt="reactLogo" />
      <div className="div2">
        {headers.map( (header,index) => <ul key={index}>{header}</ul>)}
      </div>
      </div>
      <div>
        <br />
        <img src={corazoncito} className="cora" alt="corazoncito" />
        <h2>Log In</h2>
        {inputs.map((header, index) => <div><input className="input" type={header} placeholder={header}/></div>)}
        <br />
        <button className="button">Go!</button>
      </div>
      </div>
  )
}

export default App
