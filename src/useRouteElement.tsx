import React from 'react'
import { useRoutes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductList from './pages/ProductList'
import RegisterLayout from './layouts/RegisterLayout'

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: '/',
      element: <ProductList />
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ])
  return routeElement
}
