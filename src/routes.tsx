import React from 'react'
import { Route } from 'react-router-dom'

const Home = React.lazy(() => import('./pages/Home/Home'))
const Login = React.lazy(() => import('./pages/Login/Login'))
const Register = React.lazy(() => import('./pages/Register/Register'))
const Welcome = React.lazy(() => import('./pages/Welcome/Welcome'))
const MyTrainings = React.lazy(() => import('./pages/MyTrainings/MyTrainings'))
const VisitDashboard = React.lazy(() => import('./pages/VisitDashboard/VisitDashboard'))
const Characteristics = React.lazy(() => import('./pages/Characteristics/Characteristics'))
const AddCharacteristic = React.lazy(() => import('./pages/AddCharacteristic/AddCharacteristic'))
const Cabinet = React.lazy(() => import('./pages/Cabinet/Cabinet'))
const MyAbonement = React.lazy(() => import('./pages/MyAbonement/MyAbonement'))
const AddAbonement = React.lazy(() => import('./pages/AddAbonement/AddAbonement'))
const AddAbonementGyms = React.lazy(() => import('./pages/AddAbonement/pages/Gyms'))
const AddAbonementAbonements = React.lazy(() => import('./pages/AddAbonement/pages/Abonements'))
const Notifications = React.lazy(() => import('./pages/Notifications/Notifications'))

export enum RouteNames {
  WELCOME = '/',
  HOME = '/welcome',
  LOGIN = '/login',
  REGISTER = '/register',
  MY_TRAININGS = '/my-trainings',
  VISIT_DASHBOARD = '/visit-dashboard',
  CHARACTERISTICS = '/characteristics',
  ADD_CHARACTERISTIC = '/add-characteristic',
  CABINET = '/cabinet',
  MY_ABONEMENT = '/my-abonement',
  ADD_ABONEMENT = '/add-abonement',
  NOTIFICATIONS = '/notifications',
}

export const anonymousRoutes: React.ReactNode[] = [
  <Route key={RouteNames.WELCOME} path={RouteNames.WELCOME} element={<Welcome />} />,
  <Route key={RouteNames.LOGIN} path={RouteNames.LOGIN} element={<Login />} />,
  <Route key={RouteNames.REGISTER} path={RouteNames.REGISTER} element={<Register />} />,
]

export const learnerRoutes: React.ReactNode[] = [
  <Route key={RouteNames.HOME} path={RouteNames.HOME} element={<Home />} />,
  <Route key={RouteNames.LOGIN} path={RouteNames.LOGIN} element={<Login />} />,
  <Route key={RouteNames.REGISTER} path={RouteNames.REGISTER} element={<Register />} />,
  <Route key={RouteNames.MY_TRAININGS} path={RouteNames.MY_TRAININGS + '/:userId'} element={<MyTrainings />} />,
  <Route key={RouteNames.VISIT_DASHBOARD} path={RouteNames.VISIT_DASHBOARD} element={<VisitDashboard />} />,
  <Route key={RouteNames.ADD_CHARACTERISTIC} path={RouteNames.ADD_CHARACTERISTIC + '/:userId'} element={<AddCharacteristic />} />,
  <Route key={RouteNames.CHARACTERISTICS} path={RouteNames.CHARACTERISTICS + '/:id'} element={<Characteristics />}></Route>,
  <Route key={RouteNames.CABINET} path={RouteNames.CABINET + '/:userId'} element={<Cabinet />} />,
  <Route key={RouteNames.MY_ABONEMENT} path={RouteNames.MY_ABONEMENT + '/:userId'} element={<MyAbonement />} />,
  <Route key={RouteNames.MY_ABONEMENT} path={RouteNames.ADD_ABONEMENT + '/:userId'} element={<AddAbonement />}>
    <Route path='gyms' element={<AddAbonementGyms />} />
    <Route path=':gymId/abonements' element={<AddAbonementAbonements />} />
  </Route>,
  <Route key={RouteNames.NOTIFICATIONS} path={RouteNames.NOTIFICATIONS + '/:userId'} element={<Notifications />} />,
]

export const trainerRoutes: React.ReactNode[] = [
  ...learnerRoutes,
  // <Route key={RouteNames.MY_TRAININGS} path={RouteNames.MY_TRAININGS} element={<MyTrainings />} />,
  // <Route key={RouteNames.VISIT_DASHBOARD} path={RouteNames.VISIT_DASHBOARD} element={<VisitDashboard />} />,
  // <Route key={RouteNames.CHARACTERISTICS} path={RouteNames.CHARACTERISTICS} element={<Characteristics />} />,
]

export const adminRoutes: React.ReactNode[] = [
  ...trainerRoutes,
  // <Route key={RouteNames.MY_TRAININGS} path={RouteNames.MY_TRAININGS} element={<MyTrainings />} />,
  // <Route key={RouteNames.VISIT_DASHBOARD} path={RouteNames.VISIT_DASHBOARD} element={<VisitDashboard />} />,
  // <Route key={RouteNames.CHARACTERISTICS} path={RouteNames.CHARACTERISTICS} element={<Characteristics />} />,
]
