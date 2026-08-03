import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import Home from './pages/home.jsx'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" Component={Home}/>
      </Routes>
    </>
  )
}

export default App;
