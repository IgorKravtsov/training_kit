import { AppUser, UserRoles } from 'api/user/user.types'
import { generateId } from 'utils/generateId'

export const mocked_user: AppUser = {
  displayName: 'Ihor',
  email: 'superletsplay7@gmail.com',
  emailVerified: true,
  isAnonymous: false,
  phoneNumber: '+380145124643',
  photoURL: 'https://pbs.twimg.com/profile_images/1173161429266030592/lJCNA_JC_400x400.jpg',
  role: UserRoles.ADMIN,
  uid: generateId(),
}
