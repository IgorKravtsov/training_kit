import React from 'react'
import { useStyles } from './header.styles'
import { useLocation, useNavigate } from 'react-router-dom'

import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'
import { RouteNames } from 'routes'

const AnonymusMenu: React.FC = (): React.ReactElement => {
  const classes = useStyles()

  const navigate = useNavigate()
  const location = useLocation()

  return (
    <ToggleButtonGroup className={classes.registerLoginSection} value={location.pathname} exclusive>
      <ToggleButton onClick={() => navigate(RouteNames.LOGIN)} value={RouteNames.LOGIN}>
        Увійти
      </ToggleButton>
      <ToggleButton onClick={() => navigate(RouteNames.REGISTER)} value={RouteNames.REGISTER}>
        Зареєструватися
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default AnonymusMenu
