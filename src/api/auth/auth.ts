import axios from 'axios'
import { mocked_user } from 'api/MOCKED_DATA/auth'
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from './auth.types'

export const Login = async (request: LoginRequest): Promise<LoginResponse> => {
  return Promise.resolve({ user: mocked_user })
}

export const Register = async (request: RegisterRequest): Promise<RegisterResponse> => {
  return Promise.resolve({ user: mocked_user })
}
