import React from 'react'
import { useLocation, Link } from 'react-router-dom'

import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'

import VpnKeyIcon from '@mui/icons-material/VpnKey'
import LoginIcon from '@mui/icons-material/Login'

import { RouteNames } from 'routes'
import { useTranslation } from 'react-i18next'

const AnonymusMenu: React.FC = (): React.ReactElement => {
  const location = useLocation()
  const { t } = useTranslation(['common'])

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ ml: 'auto' }}>
      <Link
        color="inherit"
        to={RouteNames.LOGIN}
        style={{ textDecoration: 'none' }}
      >
        <Typography
          sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          color={
            location.pathname === RouteNames.LOGIN
              ? 'text.primary'
              : 'text.secondary'
          }
        >
          <LoginIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {t('common:login')}
        </Typography>
      </Link>
      <Link
        color="inherit"
        to={RouteNames.REGISTER}
        style={{ textDecoration: 'none' }}
      >
        <Typography
          sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          color={
            location.pathname === RouteNames.REGISTER
              ? 'text.primary'
              : 'text.secondary'
          }
        >
          <VpnKeyIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {t('common:register')}
        </Typography>
      </Link>
    </Breadcrumbs>
  )
}

export default AnonymusMenu
