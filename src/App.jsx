import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import Layout from './components/layout'
import Home from './pages/home.jsx'
import Contacs from './pages/contacs.jsx'
import Products from './pages/products.jsx'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/contatti" Component={Contacs}/>
        <Route path="/prodotti" Component={Products}/>
      </Routes>
    </>
  )
}

export default App;
