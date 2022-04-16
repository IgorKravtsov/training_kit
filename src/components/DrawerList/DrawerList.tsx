import React, { useEffect } from 'react'

import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import LogoutIcon from '@mui/icons-material/ExitToApp'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive'

import { useAuth } from 'shared-files/old_useAuth'
import { useAppSelector } from 'redux/hooks/typedHooks'
import { selectSidebar, setDrawerList } from 'redux/slices/sidebarSlice'
import { useAppDispatch } from 'redux/hooks/typedHooks'
import { MenuItem } from 'shared-files/interfaces'

import DrowerListItem from './DrawerListItem'
import { adminList, anonymousList, getCharIcon, learnerList, trainerList } from './list-items/listItems'
import { logout } from 'redux/slices/userSlice'
import ThemeSwitch from './components/ThemeSwitch'
import { selectTheme, toggleTheme } from 'redux/slices/themeSlice'
import { saveTheme } from 'utils/saveTheme'
import { Characteristic } from 'api/characteristics/characteristic.types'
import { RouteNames } from 'routes'
import { LocalStorageKey, UserRoles } from 'shared-files/enums'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { generateId } from 'utils'

export interface DrownerListProps {}

const DrawerList: React.FC<DrownerListProps> = (): React.ReactElement => {
  const { user, role } = useAuthContext()
  const { drawerList } = useAppSelector(selectSidebar)
  const { darkTheme } = useAppSelector(selectTheme)
  const dispatch = useAppDispatch()

  const changeTheme = () => {
    const newTheme = !darkTheme
    saveTheme(newTheme)
    dispatch(toggleTheme(newTheme))
  }

  const sidebar: { [x: string]: MenuItem[] } = {
    [UserRoles.ANONYMOUS]: anonymousList,
    [UserRoles.LEARNER]: learnerList,
    [UserRoles.TRAINER]: trainerList,
    [UserRoles.ADMIN]: adminList,
  }

  const createSidebar = () => {
    if (role === UserRoles.ANONYMOUS) {
      return anonymousList
    }
    const characteristics: MenuItem[] = [
      {
        id: generateId(),
        name: 'Характеристики',
        icon: <AllInclusiveIcon />,
        link: RouteNames.CHARACTERISTICS,
        items: [
          ...transformCharacteristics(user?.characteristics),
          {
            id: generateId(),
            name: 'Додати характеристику',
            icon: <AddCircleIcon />,
            link: RouteNames.ADD_CHARACTERISTIC,
          },
        ],
      },
    ]
    return [...sidebar[role], ...characteristics]
  }

  const transformCharacteristics = (characteristics?: Characteristic[]): MenuItem[] => {
    if (!characteristics) return []
    return characteristics.map(({ id, type, title }) => ({ id, icon: getCharIcon(type), name: title, link: `${RouteNames.CHARACTERISTICS}/${id}` }))
  }

  const handleLogout = () => {
    localStorage.removeItem(LocalStorageKey.RefreshToken)
    dispatch(logout())
  }

  useEffect(() => {
    dispatch(setDrawerList(createSidebar()))
  }, [role])

  return (
    <Box sx={{ width: 250 }} role='presentation'>
      <Grid xs={12} container justifyContent='center' sx={{ mt: 2 }}>
        <ThemeSwitch sx={{ m: 1 }} checked={darkTheme} onChange={changeTheme} />
      </Grid>
      <List>
        {drawerList.map(item => (
          <DrowerListItem key={item.id} item={item} />
        ))}
        {role !== UserRoles.ANONYMOUS && (
          <>
            <Divider />
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
