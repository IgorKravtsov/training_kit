import { AppUser, PublicAppUserDto } from 'api/user/user.types'
import { LoginRequest } from 'api/auth/auth.types'
import { generateId } from 'utils'
import { LanguageType, UserRoles } from 'shared-files/enums'
import { mocked_organizations } from './organizations'
import { mocked_characteristics } from './characteristics'

const mocked_trainers: PublicAppUserDto[] = [
  {
    displayName: 'Trainer1',
    email: 'trainer1@gmail.com',
    uid: generateId(),
  },
  {
    displayName: 'Trainer2',
    email: 'trainer2@gmail.com',
    uid: generateId(),
  },
]

export const mocked_user: { [x: string]: AppUser } = {
  'superletsplay7@gmail.com': {
    displayName: 'Ihor',
    email: 'superletsplay7@gmail.com',
    emailVerified: true,
    isAnonymous: false,
    phoneNumber: '+380145124643',
    photoURL: 'https://pbs.twimg.com/profile_images/1173161429266030592/lJCNA_JC_400x400.jpg',
    role: UserRoles.ADMIN,
    uid: generateId(),
    lang: LanguageType.Ukrainian,
    organizations: mocked_organizations,
    characteristics: [mocked_characteristics[0], mocked_characteristics[1]],
    selectedOrganization: mocked_organizations[0],
    trainers: mocked_trainers,
  },
  'test@test.com': {
    displayName: 'Test',
    email: 'test@test.com',
    emailVerified: true,
    isAnonymous: false,
    photoURL: 'https://yt3.ggpht.com/ytc/AKedOLS2SrXxxmfcdRRxYPEGIwsFVV0L_JZSNo6hna3H=s900-c-k-c0x00ffffff-no-rj',
    role: UserRoles.ADMIN,
    uid: generateId(),
    lang: LanguageType.Ukrainian,
    organizations: [mocked_organizations[0]],
  },
}

export const checkCredits = (req: LoginRequest) => {
  const { email, password } = req
  switch (email) {
    case 'superletsplay7@gmail.com':
      if (password === '123456') {
        return { user: mocked_user[email] }
      } else {
        throw new Error('Неверный пароль')
      }

    case 'test@test.com':
      if (password === '123456') {
        return { user: mocked_user[email] }
      } else {
        throw new Error('Неверный пароль')
      }

    default:
      throw new Error('Неверная почта')
  }
}
