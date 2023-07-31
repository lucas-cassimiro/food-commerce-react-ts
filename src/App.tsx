import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { CartProvider } from './context/CartContext'

import { AppRoutes } from './routes'

import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'

export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <CartProvider>
          <AppRoutes />
          <ToastContainer autoClose={2000}/>
          <GlobalStyle />
          <Normalize />
        </CartProvider>
      </Theme>
    </BrowserRouter>
  )
}
