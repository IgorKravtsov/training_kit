import React, { Suspense, useEffect, useState } from 'react'
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from 'react-transition-group'

import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Slide from '@mui/material/Slide'

import { useAppSelector, useAppDispatch } from 'redux/hooks/typedHooks'
import { clear, selectSnackbar } from 'redux/slices/snackbarSlice'

import {
  anonymousRoutes,
  learnerRoutes,
  trainerRoutes,
  adminRoutes,
  RouteNames,
} from 'routes'

import ErrorPage from 'pages/Error/Error'
import { UserRoles } from 'shared-files/enums'
import { useAuthContext } from './AuthProvider/AuthProvider'
import LoadingIndicator from 'components/LoadingIndicator/LoadingIndicator'

const AppLayout: React.FC = (): React.ReactElement => {
  const { role, user } = useAuthContext()
  const { openSnack, snackType, message } = useAppSelector(selectSnackbar)

  const [routes, setRoutes] = useState<React.ReactNode[]>([])

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleClose = () => {
    dispatch(
      clear({
        message: '',
      }),
    )
  }

  const getRoutes = (role: UserRoles) => {
    switch (role) {
      case UserRoles.ANONYMOUS:
        setRoutes(anonymousRoutes)
        break

      case UserRoles.LEARNER:
        setRoutes(learnerRoutes)
        break

      case UserRoles.TRAINER:
        setRoutes(trainerRoutes)
        break

      case UserRoles.ADMIN:
        setRoutes(adminRoutes)
        break
    }
  }

  // useEffect(() => {
  //   if (!isAuth) navigate(RouteNames.LOGIN, { replace: true })
  // }, [isAuth])

  useEffect(() => {
    getRoutes(role)
  }, [role])

  return (
    <Suspense fallback={<LoadingIndicator open={true} />}>
      {/* <TransitionGroup> */}
      {/* <CSSTransition timeout={100} classNames='pages' key={location.key}> */}
      <Routes>
        {routes}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* </CSSTransition> */}
      {/* </TransitionGroup> */}

      <Snackbar
        TransitionComponent={Slide}
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={snackType}
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Suspense>
  )
}

export default AppLayout
