import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Container from '@mui/material/Container'

import DrawerList from 'components/DrawerList/DrawerList'

import { RouteNames } from 'routes'
import { useAuth } from 'shared-files/useAuth'
import { UserRoles } from 'api/user/user.types'

import AuthMenu from './items/AuthMenu'
import AnonymusMenu from './items/AnonymusMenu'
import { DrawerContext } from './items/drawerContext'

const Header: React.FC = (): React.ReactElement => {
  const navigate = useNavigate()
  const { isAuth, role } = useAuth()

  const navigatePath = useMemo(() => (role === UserRoles.ANONYMOUS ? RouteNames.WELCOME : RouteNames.HOME), [role])

  const [isDrownerVisible, setIsDrownerVisible] = useState(false)

  const toggleDrawer = (isOpen: boolean, e?: React.KeyboardEvent | React.MouseEvent) => {
    if (e && e.type === 'keydown' && ((e as React.KeyboardEvent).key === 'Tab' || (e as React.KeyboardEvent).key === 'Shift')) return

    setIsDrownerVisible(isOpen)
  }

  return (
    <>
      <AppBar position='static'>
        <Container>
          <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }} onClick={() => toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>

            <Typography variant='h6' component='h6' sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => navigate(navigatePath)}>
              Тренування
            </Typography>
            {isAuth ? <AuthMenu /> : <AnonymusMenu />}
          </Toolbar>
        </Container>
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
