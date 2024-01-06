import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children : [
      {
        path :'/',
        element : <Home></Home>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider >
      <RouterProvider router={router}></RouterProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
