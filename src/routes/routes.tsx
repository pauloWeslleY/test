import { lazy } from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'
import Layout from '@/Layout'
import Loadable from '@/components/Loadable'

const Home = Loadable(lazy(() => import('@/pages/Home')))

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
