import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from '../styles/Global'

/* provider */
import { ModalProvider } from './context/ModalContext'
import { CommicProvider } from './context/Commic'
import { PointerProvider } from './context/Pointer'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <PointerProvider>
      <CommicProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </CommicProvider>
    </PointerProvider>
  </React.StrictMode>
)
