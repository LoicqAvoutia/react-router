import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { useEffect, useMemo, useRef } from 'react';
import axios from 'axios';
import Layout from './components/layout'
import Home from './pages/home.jsx'
import Contacs from './pages/contacs.jsx'
import Products from './pages/products.jsx'

function App() {
  const [count, setCount] = useState(0);
  const [prodotti, setprodotti] = useState([]);
  const stock = 'https://fakestoreapi.com/products';

  useEffect(()=>{
    axios.get(stock)
  .then(res=> setprodotti(res.data))
  .catch(err=>console.log(err))
  },[count]);
  
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/contatti" Component={Contacs}/>
        <Route path="/prodotti" element={<Products prodotti={prodotti}/>}/>
      </Routes>
    </>
  )
}

export default App;
