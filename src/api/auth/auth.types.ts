import { AppUser, UserRoles } from 'api/user/user.types'

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
}

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  user: AppUser
}
