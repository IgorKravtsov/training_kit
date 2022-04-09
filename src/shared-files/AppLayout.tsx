import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Slide from '@mui/material/Slide'

import { useAppSelector, useAppDispatch } from 'redux/hooks/typedHooks'
import { clear, selectSnackbar } from 'redux/slices/snackbarSlice'

import LoadingSkeleton from 'components/LoadingSkeleton/LoadingSkeleton'

import { UserRoles } from 'api/user/user.types'
import { useAuth } from './useAuth'
import { anonymousRoutes, learnerRoutes, trainerRoutes, adminRoutes, RouteNames } from 'routes'

import ErrorPage from 'pages/Error/Error'

const AppLayout: React.FC = (): React.ReactElement => {
  const { role } = useAuth()
  const { openSnack, snackType, message } = useAppSelector(selectSnackbar)

  const dispatch = useAppDispatch()

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

  console.log('role', role)

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <Routes>
        {routes[role]}
        <Route path='*' element={<ErrorPage />} />
      </Routes>

      <Snackbar TransitionComponent={Slide} open={openSnack} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={snackType} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Suspense>
  )
}

export default AppLayout
