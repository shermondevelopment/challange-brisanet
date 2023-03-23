import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  
  :root {
   --first-color: #d61511;
  }

   * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Bebas Neue', cursive;
      background: var(--first-color);
      color: #fff;
   }
`

export default GlobalStyle
