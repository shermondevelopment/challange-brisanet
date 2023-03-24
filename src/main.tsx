import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from '../styles/Global'

/* context */
import { ModalProvider } from './context/ModalContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>
)
