import React from 'react'

import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import LogoutIcon from '@mui/icons-material/ExitToApp'

import { useAppSelector } from 'redux/hooks/typedHooks'
import { useAppDispatch } from 'redux/hooks/typedHooks'
import { logout } from 'redux/slices/userSlice'
import { selectTheme, toggleTheme } from 'redux/slices/themeSlice'

import DrowerListItem from './DrawerListItem'
import ThemeSwitch from './components/ThemeSwitch'

import { UserRoles } from 'shared-files/enums'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'

import { saveTheme } from 'utils/saveTheme'

import { useDrawerList } from './useDrawerList'
import LangSwitcher from './components/LangSwitcher'

interface DrownerListProps {}

const DrawerList: React.FC<DrownerListProps> = (): React.ReactElement => {
  const { role } = useAuthContext()
  const { darkTheme } = useAppSelector(selectTheme)
  const dispatch = useAppDispatch()

  const { drawerList } = useDrawerList()

  const changeTheme = () => {
    const newTheme = !darkTheme
    saveTheme(newTheme)
    dispatch(toggleTheme(newTheme))
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <Box sx={{ width: 250 }} role="presentation">
      <Grid xs={12} container justifyContent="center" sx={{ mt: 2 }}>
        <ThemeSwitch sx={{ m: 1 }} checked={darkTheme} onChange={changeTheme} />
      </Grid>
      <List>
        {drawerList.map((item) => (
          <DrowerListItem key={item.id} item={item} />
        ))}
        <Divider />
        <LangSwitcher />
        {role !== UserRoles.ANONYMOUS && (
          <>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={'Вийти'} />
            </ListItemButton>
          </>
        )}
      </List>
    </Box>
  )
}

export default DrawerList
