import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'

import DrawerList from 'components/DrawerList/DrawerList'

import { RouteNames } from 'routes'

import AuthMenu from './components/AuthMenu'
import AnonymusMenu from './components/AnonymusMenu'
import { DrawerContext } from './components/drawerContext'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { UserRoles } from 'shared-files/enums'
import { useThemeColor } from 'shared-files/hooks'

const Header: React.FC = (): React.ReactElement => {
  const navigate = useNavigate()
  const { isAuth, role, selectedOrganization } = useAuthContext()
  // const { organization } = useAppSelector(selectOrganization)

  const navigatePath = useMemo(
    () => (role === UserRoles.ANONYMOUS ? RouteNames.WELCOME : RouteNames.HOME),
    [role],
  )

  const [isDrownerVisible, setIsDrownerVisible] = useState(false)

  const toggleDrawer = (
    isOpen: boolean,
    e?: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      e &&
      e.type === 'keydown' &&
      ((e as React.KeyboardEvent).key === 'Tab' ||
        (e as React.KeyboardEvent).key === 'Shift')
    )
      return

    setIsDrownerVisible(isOpen)
  }

  return (
    <>
      <AppBar position="static" color={useThemeColor()} enableColorOnDark>
        <>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            {isAuth && selectedOrganization?.logo ? (
              <Avatar
                src={selectedOrganization?.logo}
                alt="organization logo"
                sx={{ cursor: 'pointer', width: 50, height: 50 }}
                onClick={() => navigate(RouteNames.HOME)}
              />
            ) : (
              <Typography
                variant="h6"
                component="h6"
                sx={{ cursor: 'pointer' }}
                onClick={() => navigate(navigatePath)}
              >
                {selectedOrganization?.title || 'Sport Kit'}
              </Typography>
            )}

            {isAuth ? <AuthMenu /> : <AnonymusMenu />}
          </Toolbar>
        </>
      </AppBar>

      <SwipeableDrawer
        open={isDrownerVisible}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
      >
        <DrawerContext.Provider value={{ toggleFunc: toggleDrawer }}>
          <DrawerList />
        </DrawerContext.Provider>
      </SwipeableDrawer>
    </>
  )
}

export default Header
