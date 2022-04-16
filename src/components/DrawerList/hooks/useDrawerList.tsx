import React, { useEffect } from 'react'

import RegisterIcon from '@mui/icons-material/VpnKey'
import LoginIcon from '@mui/icons-material/Login'
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive'
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi'
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import AccountBoxIcon from '@mui/icons-material/AccountBox'

import { useAppSelector, useAppDispatch } from 'redux/hooks/typedHooks'
import { selectSidebar, setDrawerList } from 'redux/slices/sidebarSlice'

import { UserRoles } from 'shared-files/enums'
import { MenuItem } from 'shared-files/interfaces'
import { generateId } from 'utils'
import { RouteNames } from 'routes'
import { Characteristic, CharacteristicType } from 'api/characteristics/characteristic.types'
import { AppUser } from 'api/user/user.types'
import { useAuthProvider } from 'shared-files/AuthProvider/useAuthProvider'

export const useDrawerList = (): { drawerList: MenuItem[] } => {
  const { user, role } = useAuthProvider()
  const { drawerList } = useAppSelector(selectSidebar)
  const dispatch = useAppDispatch()

  const getCharIcon = (type: CharacteristicType) => {
    switch (type) {
      case CharacteristicType.Power:
        return <SportsGymnasticsIcon />

      case CharacteristicType.Endurance:
        return <SportsKabaddiIcon />

      case CharacteristicType.Speed:
        return <SportsKabaddiIcon />

      default:
        return <SportsKabaddiIcon />
    }
  }

  const anonymousList = [
    {
      id: generateId(),
      name: 'Увійти',
      icon: <LoginIcon />,
      link: RouteNames.LOGIN,
    },
    {
      id: generateId(),
      name: 'Зареєструватися',
      icon: <RegisterIcon />,
      link: RouteNames.REGISTER,
    },
  ]

  const learnerList = [
    {
      id: generateId(),
      name: 'Мої тренування',
      icon: <SportsMartialArtsIcon />,
      link: `${RouteNames.MY_TRAININGS}/${user?.uid}`,
    },
    {
      id: generateId(),
      name: 'Мій кабінет',
      icon: <AccountBoxIcon />,
      link: `${RouteNames.CABINET}/${user?.uid}`,
    },
  ]

  const trainerList = [...learnerList]
  const adminList = [...trainerList]

  const sidebar: { [x: string]: MenuItem[] } = {
    [UserRoles.ANONYMOUS]: anonymousList,
    [UserRoles.LEARNER]: learnerList,
    [UserRoles.TRAINER]: trainerList,
    [UserRoles.ADMIN]: adminList,
  }

  const transformCharacteristics = (characteristics?: Characteristic[]) => {
    if (!characteristics) return []
    return characteristics.map(({ id, type, title }) => ({ id, icon: getCharIcon(type), name: title, link: `${RouteNames.CHARACTERISTICS}/${id}` }))
  }

  const createDrawerList = (user: Partial<AppUser> | null, role: UserRoles) => {
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
            link: `${RouteNames.ADD_CHARACTERISTIC}/${user?.uid}`,
          },
        ],
      },
    ]
    return [...sidebar[role], ...characteristics]
  }

  useEffect(() => {
    dispatch(setDrawerList(createDrawerList(user, role)))
  }, [user, role])

  return {
    drawerList,
  }
}
