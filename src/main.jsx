import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './style/globalstyle.js'
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <GlobalStyles />
  <ChakraProvider>
    <App />
    </ChakraProvider>
    </BrowserRouter>
)
