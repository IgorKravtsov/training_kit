import { AppUser } from 'api/user/types'
import { UserRoles } from 'shared-files/enums'

export interface RegisterRequest {
  email: string
  firstName: string
  lastName: string
  role: UserRoles
  phoneNumber?: string
  photoURL?: string
}

export interface RegisterResponse {
  user: AppUser
  accessToken: string
  refreshToken: string
}
