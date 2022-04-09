import React, { useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Button from '@mui/material/Button'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'

import DrawerList from 'components/DrownerList/DrawerList'
import { RouteNames } from '../../routes'
import { useStyles } from './header.styles'
import { useAuth } from '../../shared-files/useAuth'
import { useAppDispatch } from 'redux/hooks/typedHooks'
// import { logout } from 'redux/slices/userSlice'
import { Container, Divider } from '@mui/material'
import AuthMenu from './items/AuthMenu'
import AnonymusMenu from './items/AnonymusMenu'
import { UserRoles } from 'api/user/user.types'
import { DrawerContext } from './items/drawerContext'

const Header: React.FC = (): React.ReactElement => {
  const classes = useStyles()

  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useAppDispatch()

  const { isAuth, role } = useAuth()

  const navigatePath = useMemo(() => (role === UserRoles.ANONYMOUS ? RouteNames.WELCOME : RouteNames.HOME), [role])

  const [isDrownerVisible, setIsDrownerVisible] = useState(location.pathname === RouteNames.HOME)

  const toggleDrawer = (isOpen: boolean, e?: React.KeyboardEvent | React.MouseEvent) => {
    if (e && e.type === 'keydown' && ((e as React.KeyboardEvent).key === 'Tab' || (e as React.KeyboardEvent).key === 'Shift')) return

    setIsDrownerVisible(isOpen)
  }

  // const handleLogout = async () => {
  //   await dispatch(logout())
  // }

  return (
    <>
      <AppBar position='static'>
        <>
          <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }} onClick={() => toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>

            <Typography variant='h6' component='h6' sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => navigate(navigatePath)}>
              Мої тренування
            </Typography>
            {isAuth ? <AuthMenu /> : <AnonymusMenu />}
          </Toolbar>
        </>
      </AppBar>

      <SwipeableDrawer open={isDrownerVisible} onClose={() => toggleDrawer(false)} onOpen={() => toggleDrawer(true)}>
        <DrawerContext.Provider value={{ toggleFunc: toggleDrawer }}>
          <DrawerList />
        </DrawerContext.Provider>
      </SwipeableDrawer>
    </>
  )
}

export default Header
