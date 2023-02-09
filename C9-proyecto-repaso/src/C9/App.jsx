import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ShopDashboard from './C9/Pages/ShopDashboard'

function App() {
  
  return (
    // 1 -- llamo mi dashboard y paso una prop titulo
    <div className="App">
      <ShopDashboard titulo="Shop Dashboard"/> 
    </div>
  )
}

export default App