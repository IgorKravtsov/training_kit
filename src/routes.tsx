import React from 'react'
import { Route } from 'react-router-dom'

const Home = React.lazy(() => import('./pages/Home/Home'))
const Login = React.lazy(() => import('./pages/Login/Login'))
const Register = React.lazy(() => import('./pages/Register/Register'))
const Welcome = React.lazy(() => import('./pages/Welcome/Welcome'))
const MyTrainings = React.lazy(() => import('./pages/MyTrainings/MyTrainings'))
const VisitDashboard = React.lazy(() => import('./pages/VisitDashboard/VisitDashboard'))
const Characteristics = React.lazy(() => import('./pages/Characteristics/Characteristics'))

export enum RouteNames {
  HOME = '/',
  WELCOME = '/welcome',
  LOGIN = '/login',
  REGISTER = '/register',
  MY_TRAININGS = '/my-trainings',
  VISIT_DASHBOARD = '/visit-dashboard',
  CHARACTERISTICS = '/characteristics',
}

export const anonymousRoutes: React.ReactNode[] = [
  <Route key={RouteNames.WELCOME} path={RouteNames.WELCOME} element={<Welcome />} />,
  <Route key={RouteNames.LOGIN} path={RouteNames.LOGIN} element={<Login />} />,
  <Route key={RouteNames.REGISTER} path={RouteNames.REGISTER} element={<Register />} />,
]

export const learnerRoutes: React.ReactNode[] = [
  <Route key={RouteNames.HOME} path={RouteNames.HOME} element={<Home />} />,
  <Route key={RouteNames.MY_TRAININGS} path={RouteNames.MY_TRAININGS} element={<MyTrainings />} />,
  <Route key={RouteNames.VISIT_DASHBOARD} path={RouteNames.VISIT_DASHBOARD} element={<VisitDashboard />} />,
  <Route key={RouteNames.CHARACTERISTICS} path={RouteNames.CHARACTERISTICS} element={<Characteristics />} />,
]
