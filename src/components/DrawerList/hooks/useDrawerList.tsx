import React, { useEffect } from 'react'

import Badge from '@mui/material/Badge'

import RegisterIcon from '@mui/icons-material/VpnKey'
import LoginIcon from '@mui/icons-material/Login'
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive'
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi'
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import AddCardIcon from '@mui/icons-material/AddCard'
import BoyIcon from '@mui/icons-material/Boy'
import AddReactionIcon from '@mui/icons-material/AddReaction'

import { useAppSelector, useAppDispatch } from 'redux/hooks/typedHooks'
import { selectSidebar, setDrawerList } from 'redux/slices/sidebarSlice'

import { UserRoles } from 'shared-files/enums'
import { MenuItem } from 'shared-files/interfaces'
import { generateId } from 'utils'
import { MyAbonementRoutes, RouteNames } from 'routes'
import { AppUser } from 'api/user/user.types'
import { useAuthProvider } from 'shared-files/AuthProvider/useAuthProvider'
import { selectNotification } from 'redux/slices/notificationSlice'
import { Characteristic, CharacteristicType } from 'api/characteristic/characteristic.types'
import { Abonement } from 'api/abonements/abonements.types'
import { Gym } from 'api/gym/gym.types'

export const useDrawerList = (): { drawerList: MenuItem[] } => {
  const { user, role } = useAuthProvider()
  const { drawerList } = useAppSelector(selectSidebar)
  const { notificationCount } = useAppSelector(selectNotification)
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
      name: 'Мій кабінет',
      icon: <AccountBoxIcon />,
      link: `${RouteNames.CABINET}/${user?.uid}`,
    },
    {
      id: generateId(),
      name: 'Мої тренування',
      icon: <SportsMartialArtsIcon />,
      link: `${RouteNames.MY_TRAININGS}/${user?.uid}`,
    },
    {
      // TODO: переместить эту этот пункт в кабинет пользователя
      id: generateId(),
      name: 'Знайти тренерів',
      icon: <AddReactionIcon />,
      link: `${RouteNames.ASSIGN_TRAINERS}/${user?.uid}`,
    },
    {
      id: generateId(),
      name: 'Оповіщення',
      icon: (
        <Badge badgeContent={notificationCount || 0} color='primary'>
          <NotificationsActiveIcon color='inherit' />
        </Badge>
      ),
      link: `${RouteNames.NOTIFICATIONS}/${user?.uid}`,
    },
  ]

  const trainerList = [
    ...learnerList,
    {
      id: generateId(),
      name: 'Знайти учнів',
      icon: <BoyIcon />,
      link: `${RouteNames.ASSIGN_LEARNERS}/${user?.uid}`,
    },
  ]
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

  const transformAbonements = (abonements?: Abonement[]) => {
    if (!abonements) return []
    return abonements.map(({ id, title }) => ({ id, name: title, link: `${RouteNames.MY_ABONEMENT}/${id}` }))
  }

  const transformGyms = (abonements?: Gym[]) => {
    if (!abonements) return []
    return abonements.map(({ id, title }) => ({ id, name: title, link: `${RouteNames.MY_GYM}/${user?.uid}/${id}` }))
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
    const abonement = user?.trainers
      ? [
          {
            id: generateId(),
            name: 'Мої абонементи',
            icon: <CreditCardIcon />,
            link: `${RouteNames.MY_ABONEMENT}/${user?.uid}`,
            items: [
              ...transformAbonements(user.abonements),
              {
                id: generateId(),
                name: 'Підписатися на абонемент',
                icon: <AddCardIcon />,
                link: `${RouteNames.ASSIGN_TO_ABONEMENT}/${user?.uid}/${MyAbonementRoutes.GYMS}`,
              },
            ],
          },
        ]
      : []

    const hasAbilityCreateAbonement = role === UserRoles.ADMIN || role === UserRoles.TRAINER
    const gymsMenuItems = hasAbilityCreateAbonement
      ? [
          {
            id: generateId(),
            name: 'Додати зал',
            icon: <AddCircleIcon />,
            link: `${RouteNames.ADD_GYM}/${user?.uid}`,
          },
          {
            id: generateId(),
            name: 'Створити абонемент для залів',
            icon: <AddCardIcon />,
            link: `${RouteNames.CREATE_ABONEMENT}/${user?.uid}`,
          },
        ]
      : [
          {
            id: generateId(),
            name: 'Додати зал',
            icon: <AddCircleIcon />,
            link: `${RouteNames.ADD_GYM}/${user?.uid}`,
          },
        ]

    const gyms = user?.gyms
      ? [
          {
            id: generateId(),
            name: 'Мої зали',
            icon: <AccountBoxIcon />,
            items: [...transformGyms(user.gyms), ...gymsMenuItems],
          },
        ]
      : []
    return [...sidebar[role], ...abonement, ...gyms, ...characteristics]
  }

  useEffect(() => {
    dispatch(setDrawerList(createDrawerList(user, role)))
  }, [user, role])

  return {
    drawerList,
  }
}
