import {
  mocked_abonements,
  mocked_abonementsWithUserData,
} from 'api/MOCKED_DATA/abonements'

import {
  AssignUserToAbonementRequest,
  AssignUserToAbonementResponse,
  CreateNewAbonementRequest,
  CreateNewAbonementResponse,
  GetOneAbonementWithUserDataRequest,
  GetOneAbonementWithUserDataResponse,
  GetLearnerAbonementsRequest,
  GetLearnerAbonementsResponse,
} from './types'

import { LearnerAbonement } from './types'

import { $api } from '../_config'

export const GetLearnerAbonements = async (
  request: GetLearnerAbonementsRequest,
): Promise<LearnerAbonement[]> => {
  const { data } = await $api.post<LearnerAbonement[]>(
    'abonement/get-learner-abonements',
    request,
  )
  return data
  // return Promise.resolve({ abonements: mocked_abonements })
}

export const AssignUserToAbonement = (
  request: AssignUserToAbonementRequest,
): Promise<AssignUserToAbonementResponse> => {
  return Promise.resolve({ message: 'OK' })
}

export const GetOneAbonementWithUserData = (
  request: GetOneAbonementWithUserDataRequest,
): Promise<GetOneAbonementWithUserDataResponse> => {
  return Promise.resolve({
    abonementWithUserData: mocked_abonementsWithUserData[0],
  })
}

export const CreateNewAbonement = (
  request: CreateNewAbonementRequest,
): Promise<CreateNewAbonementResponse> => {
  return Promise.resolve({ abonement: mocked_abonements[0] })
}
