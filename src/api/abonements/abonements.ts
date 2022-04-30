import { mocked_abonements, mocked_abonementsWithUserData } from 'api/MOCKED_DATA/abonements'
import {
  AssignUserToAbonementRequest,
  AssignUserToAbonementResponse,
  GetOneAbonementRequest as GetOneAbonementWithUserDataRequest,
  GetOneAbonementResponse as GetOneAbonementWithUserDataResponse,
  GetUserAbonementsRequest,
  GetUserAbonementsResponse,
} from './types'

export const GetUserAbonements = (request: GetUserAbonementsRequest): Promise<GetUserAbonementsResponse> => {
  return Promise.resolve({ abonements: mocked_abonements })
}

export const AssignUserToAbonement = (request: AssignUserToAbonementRequest): Promise<AssignUserToAbonementResponse> => {
  return Promise.resolve({ message: 'OK' })
}

export const GetOneAbonementWithUserData = (request: GetOneAbonementWithUserDataRequest): Promise<GetOneAbonementWithUserDataResponse> => {
  return Promise.resolve({ abonementWithUserData: mocked_abonementsWithUserData[0] })
}
