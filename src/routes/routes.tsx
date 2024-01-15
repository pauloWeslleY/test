import { lazy } from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'
import Layout from '@/Layout'

const Home = lazy(() => import('@/pages/Home'))

const route: RouteObject = {
  path: '/',
  element: <Layout />,
  children: [
    { path: 'home', element: <Home /> }
  ]
}


export const Routes = () => {
  return useRoutes([route])
}
