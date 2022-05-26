import { AppUser } from 'api/user/types'

export interface LoginRequest {
  email: string
  password: string
  organizationId?: string | number
}

// export interface LoginResponse {
//   user: AppUser
//   // accessToken: string
//   // refreshToken: string
// }
