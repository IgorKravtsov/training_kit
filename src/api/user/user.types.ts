import { LanguageType, ThemeType, UserRoles } from 'shared-files/enums'

export interface AppUser {
  uid: string
  email: string | null
  emailVerified: boolean
  isAnonymous: boolean
  phoneNumber: string | null
  photoURL: string | null
  displayName: string | null
  birthDate?: Date
  role: UserRoles
  lang: LanguageType
  theme?: ThemeType
}
