import React from 'react'
import { Route } from 'react-router-dom'

const Home = React.lazy(() => import('./pages/Home/Home'))
const Login = React.lazy(() => import('./pages/Login/Login'))
const Register = React.lazy(() => import('./pages/Register/Register'))
const Welcome = React.lazy(() => import('./pages/Welcome/Welcome'))

const MyTrainings = React.lazy(() => import('./pages/MyTrainings/MyTrainings'))
const MyTrainingsNearest = React.lazy(() => import('./pages/MyTrainings/pages/Nearest/Nearest'))
const MyTrainingsTrainingHistory = React.lazy(() => import('./pages/MyTrainings/pages/TrainingHistory/TrainingHistory'))
const MyTrainingsCreateTrainings = React.lazy(() => import('./pages/MyTrainings/pages/CreateTrainings/CreateTrainings'))

const VisitDashboard = React.lazy(() => import('./pages/VisitDashboard/VisitDashboard'))
const Characteristics = React.lazy(() => import('./pages/Characteristics/Characteristics'))
const AddCharacteristic = React.lazy(() => import('./pages/AddCharacteristic/AddCharacteristic'))
const Cabinet = React.lazy(() => import('./pages/Cabinet/Cabinet'))
const MyAbonement = React.lazy(() => import('./pages/MyAbonement/MyAbonement'))
const AssignToAbonement = React.lazy(() => import('./pages/AssignToAbonement/AssignToAbonement'))
const AssignToAbonementGyms = React.lazy(() => import('./pages/AssignToAbonement/pages/Gyms'))
const AssignToAbonementAbonements = React.lazy(() => import('./pages/AssignToAbonement/pages/Abonements'))
const CreateAbonement = React.lazy(() => import('./pages/CreateAbonement/CreateAbonement'))
const Notifications = React.lazy(() => import('./pages/Notifications/Notifications'))
const AddGym = React.lazy(() => import('./pages/AddGym/AddGym'))
const MyGym = React.lazy(() => import('./pages/MyGym/MyGym'))
const AssignLearners = React.lazy(() => import('./pages/AssignLearners/AssignLearners'))
const AssignTrainers = React.lazy(() => import('./pages/AssignTrainers/AssignTrainers'))

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
  ASSIGN_TO_ABONEMENT = '/assign-to-abonement',
  CREATE_ABONEMENT = '/create-abonement',
  NOTIFICATIONS = '/notifications',
  ADD_GYM = '/add-gym',
  MY_GYM = '/my-gym',
  ASSIGN_TRAINERS = '/assign-trainers',
  ASSIGN_LEARNERS = '/assign-learners',
}

export enum MyTrainingsRoutes {
  NEAREST = 'nearest',
  TRAINING_HISTORY = 'training-history',
  CREATE_TRAININGS = 'create-tarinings',
}

export enum MyAbonementRoutes {
  GYMS = 'gyms',
  ABONEMENTS = 'abonements',
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
  <Route key={RouteNames.MY_TRAININGS} path={RouteNames.MY_TRAININGS + '/:userId'} element={<MyTrainings />}>
    <Route path={MyTrainingsRoutes.NEAREST} element={<MyTrainingsNearest />} />
    <Route path={MyTrainingsRoutes.TRAINING_HISTORY} element={<MyTrainingsTrainingHistory />} />
    <Route path={MyTrainingsRoutes.CREATE_TRAININGS} element={<MyTrainingsCreateTrainings />} />
  </Route>,
  <Route key={RouteNames.VISIT_DASHBOARD} path={RouteNames.VISIT_DASHBOARD} element={<VisitDashboard />} />,
  <Route key={RouteNames.ADD_CHARACTERISTIC} path={RouteNames.ADD_CHARACTERISTIC + '/:userId'} element={<AddCharacteristic />} />,
  <Route key={RouteNames.CHARACTERISTICS} path={RouteNames.CHARACTERISTICS + '/:id'} element={<Characteristics />}></Route>,
  <Route key={RouteNames.CABINET} path={RouteNames.CABINET + '/:userId'} element={<Cabinet />} />,
  <Route key={RouteNames.MY_ABONEMENT} path={RouteNames.MY_ABONEMENT + '/:userId'} element={<MyAbonement />} />,
  <Route key={RouteNames.MY_ABONEMENT} path={RouteNames.ASSIGN_TO_ABONEMENT + '/:userId'} element={<AssignToAbonement />}>
    <Route path={MyAbonementRoutes.GYMS} element={<AssignToAbonementGyms />} />
    <Route path={`:gymId/${MyAbonementRoutes.ABONEMENTS}`} element={<AssignToAbonementAbonements />} />
  </Route>,
  <Route key={RouteNames.NOTIFICATIONS} path={RouteNames.NOTIFICATIONS + '/:userId'} element={<Notifications />} />,
  <Route key={RouteNames.ASSIGN_TRAINERS} path={RouteNames.ASSIGN_TRAINERS + '/:userId'} element={<AssignTrainers />} />,
]

export const trainerRoutes: React.ReactNode[] = [
  ...learnerRoutes,
  <Route key={RouteNames.ADD_GYM} path={RouteNames.ADD_GYM + '/:userId'} element={<AddGym />} />,
  <Route key={RouteNames.MY_GYM} path={RouteNames.MY_GYM + '/:userId/:gymId'} element={<MyGym />} />,
  <Route key={RouteNames.CREATE_ABONEMENT} path={RouteNames.CREATE_ABONEMENT + '/:userId'} element={<CreateAbonement />} />,
  <Route key={RouteNames.ASSIGN_LEARNERS} path={RouteNames.ASSIGN_LEARNERS + '/:userId'} element={<AssignLearners />} />,
]

export const adminRoutes: React.ReactNode[] = [
  ...trainerRoutes,
  // <Route key={RouteNames.MY_TRAININGS} path={RouteNames.MY_TRAININGS} element={<MyTrainings />} />,
  // <Route key={RouteNames.VISIT_DASHBOARD} path={RouteNames.VISIT_DASHBOARD} element={<VisitDashboard />} />,
  // <Route key={RouteNames.CHARACTERISTICS} path={RouteNames.CHARACTERISTICS} element={<Characteristics />} />,
]
