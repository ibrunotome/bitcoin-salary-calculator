import { createGlobalStyle } from 'styled-components'

import stars from '~/assets/stars.svg'
import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Ubuntu:700i&display=swap');

  body {
    background: rgb(25, 24, 31) url(${stars}) fixed no-repeat;
    color: white;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .container-fluid {
    max-width: 90%;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 30px;
  }

  table, th, td {
    border: 1px solid #aaa;
  }

  th {
    padding: 15px 30px;
  }

  td {
    padding: 5px 30px;
    color: #ccc;
  }

  .table-wrapper {
    overflow: hidden;
  }

  .scrollable {
    width: 100%;
    overflow: scroll;
    overflow-y: hidden;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  th {
    text-transform: uppercase;
    line-height: 12px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
  }

  td {
    text-align: center;
    vertical-align: middle;
    overflow: hidden;
    height: 30px;
    white-space: nowrap;
  }
}
`
