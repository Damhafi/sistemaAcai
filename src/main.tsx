import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AcaiProvider } from './contexts/AcaiContext'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AcaiProvider>
      <App />
    </AcaiProvider>
  </React.StrictMode>,
)
