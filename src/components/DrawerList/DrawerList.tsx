import React, { useEffect } from 'react'

import Box from '@mui/material/Box'
import List from '@mui/material/List'

import { useAuth } from 'shared-files/useAuth'
import { useAppSelector } from 'redux/hooks/typedHooks'
import { selectSidebar, setDrawerList } from 'redux/slices/sidebarSlice'
import { useAppDispatch } from 'redux/hooks/typedHooks'
import { UserRoles } from 'api/user/user.types'
import { MenuItem } from 'shared-files/interfaces/menuItem'

import DrowerListItem from './DrawerListItem'
import { adminList, anonymousList, learnerList, trainerList } from './list-items/listItems'

export interface DrownerListProps {}

const DrawerList: React.FC<DrownerListProps> = (): React.ReactElement => {
  const { role } = useAuth()
  const { drawerList } = useAppSelector(selectSidebar)
  const dispatch = useAppDispatch()

  const sidebar: { [x: string]: MenuItem[] } = {
    [UserRoles.ANONYMOUS]: anonymousList,
    [UserRoles.LEARNER]: learnerList,
    [UserRoles.TRAINER]: trainerList,
    [UserRoles.ADMIN]: adminList,
  }

  useEffect(() => {
    dispatch(setDrawerList(sidebar[role] || sidebar[UserRoles.ANONYMOUS]))
  }, [role])

  return (
    <Box sx={{ width: 250 }} role='presentation'>
      <List>
        {drawerList.map(item => (
          <DrowerListItem key={item.id} item={item} />
        ))}
      </List>
    </Box>
  )
}

export default DrawerList
