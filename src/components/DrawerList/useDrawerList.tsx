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
import { selectNotification } from 'redux/slices/notificationSlice'

import { UserRoles } from 'shared-files/enums'
import { MenuItem } from 'shared-files/interfaces'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'

import { generateId } from 'utils'
import { AssignToAbonementRoutes, RouteNames, MyTrainingsRoutes } from 'routes'

import { Characteristic, CharacteristicType } from 'api/characteristic/types'
import { Abonement, LearnerAbonement } from 'api/abonements/types'
import { Gym } from 'api/gym/types'
import { AppUser } from 'api/user/types'
import { useTranslation } from 'react-i18next'

export const useDrawerList = (): { drawerList: MenuItem[] } => {
  const { user, role } = useAuthContext()
  const { drawerList } = useAppSelector(selectSidebar)
  const { notificationCount } = useAppSelector(selectNotification)

  const { t } = useTranslation(['sidebar'])
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
      name: t('sidebar:login'),
      icon: <LoginIcon />,
      link: RouteNames.LOGIN,
    },
    {
      id: generateId(),
      name: t('sidebar:register'),
      icon: <RegisterIcon />,
      link: RouteNames.REGISTER,
    },
  ]

  const learnerList = [
    {
      id: generateId(),
      name: t('sidebar:myCabinet'),
      icon: <AccountBoxIcon />,
      link: `${RouteNames.CABINET}/${user?.id}`,
    },
    {
      id: generateId(),
      name: t('sidebar:myTrainings'),
      icon: <SportsMartialArtsIcon />,
      link: `${RouteNames.MY_TRAININGS}/${user?.id}/${MyTrainingsRoutes.NEAREST}`,
    },
    {
      // TODO: ?????????????????????? ?????? ???????? ?????????? ?? ?????????????? ????????????????????????
      id: generateId(),
      name: t('sidebar:findTrainer'),
      icon: <AddReactionIcon />,
      link: `${RouteNames.ASSIGN_TRAINERS}/${user?.id}`,
    },
    {
      id: generateId(),
      name: t('sidebar:notifications'),
      icon: (
        <Badge badgeContent={notificationCount || 0} color="primary">
          <NotificationsActiveIcon color="inherit" />
        </Badge>
      ),
      link: `${RouteNames.NOTIFICATIONS}/${user?.id}`,
    },
  ]

  const trainerList = [
    ...learnerList,
    {
      id: generateId(),
      name: t('sidebar:findLearners'),
      icon: <BoyIcon />,
      link: `${RouteNames.ASSIGN_LEARNERS}/${user?.id}`,
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
    return characteristics.map(({ id, type, title }) => ({
      id,
      icon: getCharIcon(type),
      name: title,
      link: `${RouteNames.CHARACTERISTICS}/${id}`,
    }))
  }

  const transformAbonements = (abonements?: Abonement[]) => {
    if (!abonements) return []
    return abonements.map(({ id, title }) => ({
      id,
      name: title,
      link: `${RouteNames.MY_ABONEMENT}/${user?.id}/${id}`,
    }))
  }

  const transformLeanerAbonements = (abonements?: LearnerAbonement[]) => {
    if (!abonements) return []
    return abonements.map(({ id, abonement }) => ({
      id,
      name: abonement?.title || '-',
      link: `${RouteNames.MY_ABONEMENT}/${user?.id}/${id}`,
    }))
  }

  const transformGyms = (abonements?: Gym[]) => {
    if (!abonements) return []
    return abonements.map(({ id, title }) => ({
      id,
      name: title,
      link: `${RouteNames.MY_GYM}/${user?.id}/${id}`,
    }))
  }

  const createDrawerList = (user: Partial<AppUser> | null, role: UserRoles) => {
    if (role === UserRoles.ANONYMOUS) {
      return anonymousList
    }
    const characteristics: MenuItem[] = [
      {
        id: generateId(),
        name: t('sidebar:characteristics'),
        icon: <AllInclusiveIcon />,
        // link: RouteNames.CHARACTERISTICS,
        items: [
          ...transformCharacteristics(user?.characteristics),
          {
            id: generateId(),
            name: t('sidebar:addCharacteristic'),
            icon: <AddCircleIcon />,
            link: `${RouteNames.ADD_CHARACTERISTIC}/${user?.id}`,
          },
        ],
      },
    ]
    let abonement: any[] = []
    if (user?.learnerAbonements) {
      abonement = [
        {
          id: generateId(),
          name: t('sidebar:myAbonements'),
          icon: <CreditCardIcon />,
          link: `${RouteNames.MY_ABONEMENT}/${user?.id}`,
          items: [
            // ...transformLeanerAbonements(user.learnerAbonements),
            {
              id: generateId(),
              name: t('sidebar:assignToAbonement'),
              icon: <AddCardIcon />,
              link: `${RouteNames.ASSIGN_TO_ABONEMENT}/${user?.id}/${AssignToAbonementRoutes.GYMS}`,
            },
          ],
        },
      ]
    } else if (user?.trainers) {
      abonement = [
        {
          id: generateId(),
          name: t('sidebar:assignToAbonement'),
          icon: <AddCardIcon />,
          link: `${RouteNames.ASSIGN_TO_ABONEMENT}/${user?.id}/${AssignToAbonementRoutes.GYMS}`,
        },
      ]
    }
    // const abonement = user?.abonements
    // ? [
    //     {
    //       id: generateId(),
    //       name: '?????? ????????????????????',
    //       icon: <CreditCardIcon />,
    //       link: `${RouteNames.MY_ABONEMENT}/${user?.uid}`,
    //       items: [
    //         ...transformAbonements(user.abonements),
    //         {
    //           id: generateId(),
    //           name: '?????????????????????? ???? ??????????????????',
    //           icon: <AddCardIcon />,
    //           link: `${RouteNames.ASSIGN_TO_ABONEMENT}/${user?.uid}/${AssignToAbonementRoutes.GYMS}`,
    //         },
    //       ],
    //     },
    //   ]
    // : [
    //     {
    //       id: generateId(),
    //       name: '?????????????????????? ???? ??????????????????',
    //       icon: <AddCardIcon />,
    //       link: `${RouteNames.ASSIGN_TO_ABONEMENT}/${user?.uid}/${AssignToAbonementRoutes.GYMS}`,
    //     },
    //   ]

    const hasAbilityCreateAbonement =
      role === UserRoles.ADMIN || role === UserRoles.TRAINER
    const gymsMenuItems = hasAbilityCreateAbonement
      ? [
          {
            id: generateId(),
            name: t('sidebar:addGym'),
            icon: <AddCircleIcon />,
            link: `${RouteNames.ADD_GYM}/${user?.id}`,
          },
          {
            id: generateId(),
            name: t('sidebar:createAbonement'),
            icon: <AddCardIcon />,
            link: `${RouteNames.CREATE_ABONEMENT}/${user?.id}`,
          },
        ]
      : [
          // {
          //   id: generateId(),
          //   name: '???????????? ??????',
          //   icon: <AddCircleIcon />,
          //   link: `${RouteNames.ADD_GYM}/${user?.id}`,
          // },
        ]

    const gyms =
      user?.gyms && user?.gyms?.length > 0
        ? [
            {
              id: generateId(),
              name: t('sidebar:myGym'),
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
