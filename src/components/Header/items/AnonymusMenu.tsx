import React from 'react'
import { useStyles } from '../header.styles'
import { useLocation, useNavigate, Link } from 'react-router-dom'

import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'

import VpnKeyIcon from '@mui/icons-material/VpnKey'
import LoginIcon from '@mui/icons-material/Login'

import { RouteNames } from 'routes'

const AnonymusMenu: React.FC = (): React.ReactElement => {
  const classes = useStyles()

  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Breadcrumbs aria-label='breadcrumb'>
      <Link color='inherit' to={RouteNames.LOGIN} style={{ textDecoration: 'none' }}>
        <Typography
          sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          color={location.pathname === RouteNames.LOGIN ? '#FFF' : 'text.primary'}
        >
          <LoginIcon sx={{ mr: 0.5 }} fontSize='inherit' />
          Увійти
        </Typography>
      </Link>
      <Link color='inherit' to={RouteNames.REGISTER} style={{ textDecoration: 'none' }}>
        <Typography
          sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          color={location.pathname === RouteNames.REGISTER ? '#FFF' : 'text.primary'}
        >
          <VpnKeyIcon sx={{ mr: 0.5 }} fontSize='inherit' />
          Зареєструватися
        </Typography>
      </Link>
    </Breadcrumbs>
    // <ToggleButtonGroup className={classes.registerLoginSection} value={location.pathname} exclusive>
    //   <ToggleButton onClick={() => navigate(RouteNames.LOGIN)} value={RouteNames.LOGIN}>
    //     Увійти
    //   </ToggleButton>
    //   <ToggleButton onClick={() => navigate(RouteNames.REGISTER)} value={RouteNames.REGISTER}>
    //     Зареєструватися
    //   </ToggleButton>
    // </ToggleButtonGroup>
  )
}

export default AnonymusMenu
