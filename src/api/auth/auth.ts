import axios from 'axios'
import { checkCredits, mocked_user } from 'api/MOCKED_DATA/auth'
import {
  LoginRequest,
  RefreshAuthRequest,
  RefreshAuthResponse,
  RegisterRequest,
  RegisterResponse,
} from './types'
import { API_HOST } from '../api.constants'
import { $api } from 'api/_config'
import { AppUser } from 'api/user/types'

export const Login = async (request: LoginRequest): Promise<AppUser> => {
  const { data } = await $api.post<AppUser>('auth/login', request)
  return data
}

export const Register = async (
  request: RegisterRequest,
): Promise<RegisterResponse> => {
  // return Promise.resolve({ accessToken: 'MOCKED_accessToken', refreshToken: 'MOCKED_refreshToken', user: mocked_user['superletsplay7@gmail.com'] })
  const { data } = await axios.post<RegisterResponse>(
    `${API_HOST}/auth/register`,
    request,
  )
  return data
}

export const Logout = async (): Promise<{ user: null }> => {
  return Promise.resolve({ user: null })
}

export const RefreshAuth = async (
  request: RefreshAuthRequest,
): Promise<RefreshAuthResponse | undefined> => {
  if (!request.refreshToken) return
  return Promise.resolve({
    user: mocked_user['superletsplay7@gmail.com'],
    notifications: {
      count: 1,
      data: [{ from: 'Trainer', title: 'Some notification' }],
    },
  })
}
