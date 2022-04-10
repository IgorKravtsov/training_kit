import RegisterIcon from '@mui/icons-material/VpnKey'
import LoginIcon from '@mui/icons-material/Login'
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive'
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi'
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import AccountBoxIcon from '@mui/icons-material/AccountBox'

import { RouteNames } from 'routes'
import { generateId } from 'utils/generateId'

export const anonymousList = [
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

export const learnerList = [
  {
    id: generateId(),
    name: 'Мої тренування',
    icon: <SportsMartialArtsIcon />,
    link: RouteNames.MY_TRAININGS,
  },
  {
    id: generateId(),
    name: 'Характеристики',
    icon: <AllInclusiveIcon />,
    link: RouteNames.CHARACTERISTICS,
    items: [
      {
        id: generateId(),
        name: 'Швидкість удару',
        icon: <SportsKabaddiIcon />,
        link: RouteNames.CHARACTERISTICS + '/some_generated_id_for_impact_speed',
      },
      {
        id: generateId(),
        name: 'Сила удару',
        icon: <SportsGymnasticsIcon />,
        link: RouteNames.CHARACTERISTICS + '/some_generated_id_for_impact_power',
      },
      {
        id: generateId(),
        name: 'Додати характеристику',
        icon: <AddCircleIcon />,
        link: RouteNames.CHARACTERISTICS + '/add',
      },
    ],
  },
  {
    id: generateId(),
    name: 'Мій кабінет',
    icon: <AccountBoxIcon />,
    link: RouteNames.CABINET,
  },
]

export const trainerList = [
  ...learnerList,
  // {
  //   id: generateId(),
  //   name: 'Зареєструватися',
  //   icon: <RegisterIcon />,
  //   link: RouteNames.REGISTER,
  // },
]

export const adminList = [
  ...trainerList,
  // {
  //   id: generateId(),
  //   name: 'Зареєструватися',
  //   icon: <RegisterIcon />,
  //   link: RouteNames.REGISTER,
  // },
]
