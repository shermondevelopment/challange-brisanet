import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  
  :root {
   --first-color: #d61511;
  }

  body {
   background: var(--first-color);
  }

   * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Bebas Neue', cursive;
      color: #fff;
   }

   a {
      text-decoration: none;
   }
`

export default GlobalStyle
