import React, { Suspense, useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Slide from '@mui/material/Slide'

import { useAppSelector, useAppDispatch } from 'redux/hooks/typedHooks'
import { clearError, selectSnackbar } from 'redux/slices/snackbarSlice'

import {
  anonymousRoutes,
  learnerRoutes,
  trainerRoutes,
  adminRoutes,
} from 'routes'

import ErrorPage from 'pages/Error/Error'
import { UserRoles } from 'shared-files/enums'
import { useAuthContext } from './AuthProvider/AuthProvider'
import LoadingIndicator from 'components/LoadingIndicator/LoadingIndicator'

const AppLayout: React.FC = (): React.ReactElement => {
  const { role } = useAuthContext()
  const { openSnack, snackType, message } = useAppSelector(selectSnackbar)

  const [routes, setRoutes] = useState<React.ReactNode[]>([])

  const dispatch = useAppDispatch()

  const handleClose = () => {
    dispatch(clearError())
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

  useEffect(() => {
    getRoutes(role)
  }, [role])

  return (
    <Suspense fallback={<LoadingIndicator open={true} />}>
      <Routes>
        {routes}
        <Route path="*" element={<ErrorPage />} />
      </Routes>

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
