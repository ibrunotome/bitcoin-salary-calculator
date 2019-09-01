import { createGlobalStyle } from 'styled-components'

import stars from '~/assets/stars.svg'

export default createGlobalStyle`
  body {
    background: rgb(25, 24, 31) url(${stars}) no-repeat;
    color: white;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
