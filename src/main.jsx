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
import ItemInfo from './Components/Items/ItemInfo.jsx'
import Login from './Components/User/Login.jsx'
import Registration from './Components/User/Registration.jsx'
import ContextAPI from './Components/ContextAPI/ContextAPI.jsx'
import MyProfile from './Components/User/MyProfile.jsx'
import MyOrders from './Components/User/MyOrders.jsx'
import { ParallaxProvider } from 'react-scroll-parallax'
import MyCart from './Components/User/MyCart.jsx'
import PrivateRoute from './Components/Private/PrivateRoute.jsx'

const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/:id/:id",
        element: <Item></Item>
      },
      {
        path: '/:id/:id/:id',
        element: <ItemInfo></ItemInfo>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: "/my-profile",
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
      },
      {
        path: '/my-orders',
        element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
      },
      {
        path: '/my-carts',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextAPI>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider >
          <ParallaxProvider>
            <RouterProvider router={router}>
              <App></App>
            </RouterProvider>
          </ParallaxProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </ContextAPI>
  </React.StrictMode>,
)
