import { AppUser } from 'api/user/types'
import { UserRoles } from 'shared-files/enums'
import { Id } from 'shared-files/types'

export interface RegisterRequest {
  email: string
  name: string
  lastName: string
  organizations: Id[]
  // role: UserRoles
  phoneNumber?: string
  photoURL?: string
}

export interface RegisterResponse {
  user: AppUser
  // accessToken: string
  // refreshToken: string
}
