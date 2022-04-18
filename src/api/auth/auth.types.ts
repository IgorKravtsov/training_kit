import { Notification } from 'api/notification/notification.types'
import { AppUser } from 'api/user/user.types'
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

export interface LoginRequest {
  email: string
  password: string
  organizationId?: string | number
}

export interface LoginResponse {
  user: AppUser
  accessToken: string
  refreshToken: string
}

export interface RefreshAuthRequest {
  refreshToken: string | null
}

export interface RefreshAuthResponse {
  user: AppUser
  notifications?: {
    count: number
    data: Notification[]
  }
}
