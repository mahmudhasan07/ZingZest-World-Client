import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Item from './Components/Items/Item.jsx'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children : [
      {
        path :'/',
        element : <Home></Home>
      },
      {
        path : "/:id/:id",
        element : <Item></Item>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider  client={queryClient}>
    <ChakraProvider >
      <RouterProvider router={router}></RouterProvider>
    </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
