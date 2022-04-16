import axios from 'axios'
import { checkCredits, mocked_user } from 'api/MOCKED_DATA/auth'
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from './auth.types'
import { AppUser } from 'api/user/user.types'

export const Login = async (request: LoginRequest): Promise<LoginResponse> => {
  return Promise.resolve({ accessToken: 'MOCKED_accessToken', refreshToken: 'MOCKED_refreshToken', ...checkCredits(request) })
}

export const Register = async (request: RegisterRequest): Promise<RegisterResponse> => {
  return Promise.resolve({ accessToken: 'MOCKED_accessToken', refreshToken: 'MOCKED_refreshToken', user: mocked_user['superletsplay7@gmail.com'] })
}

export const Logout = async (): Promise<{ user: null }> => {
  return Promise.resolve({ user: null })
}

export const RefreshAuth = async (refreshToken: string | null): Promise<AppUser | undefined> => {
  if (!refreshToken) return
  return Promise.resolve(mocked_user['superletsplay7@gmail.com'])
}
