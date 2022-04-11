import React from 'react'
import { useLocation, Link } from 'react-router-dom'

import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'

import VpnKeyIcon from '@mui/icons-material/VpnKey'
import LoginIcon from '@mui/icons-material/Login'

import { RouteNames } from 'routes'

const AnonymusMenu: React.FC = (): React.ReactElement => {
  const location = useLocation()

  return (
    <Breadcrumbs aria-label='breadcrumb'>
      <Link color='inherit' to={RouteNames.LOGIN} style={{ textDecoration: 'none' }}>
        <Typography
          sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          color={location.pathname === RouteNames.LOGIN ? 'text.primary' : 'text.secondary'}
        >
          <LoginIcon sx={{ mr: 0.5 }} fontSize='inherit' />
          Увійти
        </Typography>
      </Link>
      <Link color='inherit' to={RouteNames.REGISTER} style={{ textDecoration: 'none' }}>
        <Typography
          sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          color={location.pathname === RouteNames.REGISTER ? 'text.primary' : 'text.secondary'}
        >
          <VpnKeyIcon sx={{ mr: 0.5 }} fontSize='inherit' />
          Зареєструватися
        </Typography>
      </Link>
    </Breadcrumbs>
  )
}

export default AnonymusMenu
