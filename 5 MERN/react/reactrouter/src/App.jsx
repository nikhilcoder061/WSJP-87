import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Course from './Pages/Course'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './Pages/Contact'
import Layout from './Layout'
import Shop from './Pages/Shop'
import ProductDetails from './Pages/ProductDetails'
import MainContext from './Pages/MainContext'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Register from './Pages/Register'

export default function App() {

  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <Home />
          },
          {
            path: "/about",
            element: <About />
          },
          {
            path: "/course",
            element: <Course />
          },
          {
            path: '/contact',
            element: <Contact />
          },
          {
            path: '/shop/:slug?',
            element: <Shop />
          },
          {
            path: '/productdetail/:productId',
            element: <ProductDetails />
          },
          {
            path: '/cart',
            element: <Cart />
          },
          {
            path: '/login',
            element: <Login />
          },
          {
            path: '/register',
            element: <Register />
          }
        ]
      }
    ]
  )


  return (
    <>
      <MainContext>
        <RouterProvider router={routes} />
      </MainContext>
    </>
  )
}

