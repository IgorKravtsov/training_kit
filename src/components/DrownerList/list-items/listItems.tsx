import RegisterIcon from '@mui/icons-material/VpnKey'
import LoginIcon from '@mui/icons-material/Login'

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
