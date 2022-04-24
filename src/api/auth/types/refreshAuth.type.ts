import { Notification } from 'api/notification/types'
import { AppUser } from 'api/user/types'

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
