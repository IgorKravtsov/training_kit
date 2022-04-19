import { Abonement } from 'api/abonements/abonements.types'
import { Characteristic } from 'api/characteristic/characteristic.types'
import { Gym } from 'api/gym/gym.types'
import { Organization } from 'api/organization/organization.types'
import { LanguageType, UserRoles } from 'shared-files/enums'

export interface AppUser {
  uid: string
  email: string | null
  emailVerified?: boolean
  isAnonymous?: boolean
  phoneNumber?: string | null
  photoURL: string | null
  displayName: string | null
  birthDate?: Date
  role: UserRoles
  lang: LanguageType
  level?: string //Уровень пояса
  organizations?: Organization[]
  selectedOrganization?: Organization
  characteristics?: Characteristic[]
  trainers?: PublicAppUserDto[]
  abonements?: Abonement[]
  gyms?: Gym[]
}

export interface PublicAppUserDto {
  photoURL?: string | null
  displayName: string | null
  uid: string
  email: string | null
}
