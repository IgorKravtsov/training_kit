import axios from 'axios'
import { checkCredits, mocked_user } from 'api/MOCKED_DATA/auth'
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from './auth.types'

export const Login = async (request: LoginRequest): Promise<LoginResponse> => {
  return Promise.resolve(checkCredits(request))
}

export const Register = async (request: RegisterRequest): Promise<RegisterResponse> => {
  return Promise.resolve({ user: mocked_user['superletsplay7@gmail.com'] })
}

export const Logout = async (): Promise<{ user: null }> => {
  return Promise.resolve({ user: null })
}
