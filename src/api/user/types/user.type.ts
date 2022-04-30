import { Abonement } from 'api/abonements/types'
import { Characteristic } from 'api/characteristic/types'
import { Gym } from 'api/gym/types'
import { Organization } from 'api/organization/types'
import { LanguageType, UserRoles } from 'shared-files/enums'
import { Id } from 'shared-files/types'
import { PublicAppUserDto } from './publicUserDto.type'

export interface AppUser {
  uid: Id
  email: string | null
  emailVerified?: boolean
  isAnonymous?: boolean
  phoneNumber?: string | null
  photoURL: string | null
  displayName: string | null
  birthDate?: Date
  role: UserRoles
  lang: LanguageType
  prefferedCurrency?: string // Предпочитаемая валюта - в перспективе
  level?: string //Уровень пояса
  organizations?: Organization[]
  selectedOrganization?: Organization
  characteristics?: Characteristic[]
  trainers?: PublicAppUserDto[]
  abonements?: Abonement[]
  gyms?: Gym[]
}
