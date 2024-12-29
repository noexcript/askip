import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CountProvider } from './context/index.jsx'
import { Toaster } from './components/ui/toaster'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountProvider>
      <App />
      <Toaster />
    </CountProvider>
  </StrictMode>,
)
