import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Challenge from './Challenge.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Challenge /> */}
    <App />
  </StrictMode>,
)
