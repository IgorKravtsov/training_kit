import React, { Suspense } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { CSSTransition, SwitchTransition, TransitionGroup } from 'react-transition-group'

import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Slide from '@mui/material/Slide'

import { useAppSelector, useAppDispatch } from 'redux/hooks/typedHooks'
import { clear, selectSnackbar } from 'redux/slices/snackbarSlice'

import LoadingSkeleton from 'components/LoadingSkeleton/LoadingSkeleton'

import { anonymousRoutes, learnerRoutes, trainerRoutes, adminRoutes } from 'routes'

import ErrorPage from 'pages/Error/Error'
import { UserRoles } from 'shared-files/enums'
import { useAuthContext } from './AuthProvider/AuthProvider'
import LoadingIndicator from 'components/LoadingIndicator/LoadingIndicator'

const AppLayout: React.FC = (): React.ReactElement => {
  const { role } = useAuthContext()
  const { openSnack, snackType, message } = useAppSelector(selectSnackbar)

  const dispatch = useAppDispatch()
  const location = useLocation()

  const handleClose = () => {
    dispatch(
      clear({
        message: '',
      })
    )
  }

  const routes: { [x: string]: React.ReactNode[] } = {
    [UserRoles.ANONYMOUS]: anonymousRoutes,
    [UserRoles.LEARNER]: learnerRoutes,
    [UserRoles.TRAINER]: trainerRoutes,
    [UserRoles.ADMIN]: adminRoutes,
  }

  return (
    <Suspense fallback={<LoadingIndicator open={true} />}>
      {/* <TransitionGroup> */}
      {/* <CSSTransition timeout={100} classNames='pages' key={location.key}> */}
      <Routes>
        {routes[role]}
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      {/* </CSSTransition> */}
      {/* </TransitionGroup> */}

      <Snackbar TransitionComponent={Slide} open={openSnack} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={snackType} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Suspense>
  )
}

export default AppLayout
