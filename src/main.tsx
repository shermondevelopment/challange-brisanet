import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from '../styles/Global'

/* context */
import { ModalProvider } from './context/ModalContext'
import { CommicProvider } from './context/Commic'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <CommicProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </CommicProvider>
  </React.StrictMode>
)
