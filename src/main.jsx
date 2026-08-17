import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Budgetcomponent } from './context/budgetcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Budgetcomponent>
        <App />
      </Budgetcomponent>
    </BrowserRouter>
  </StrictMode>,
)
