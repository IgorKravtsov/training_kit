import { mocked_gyms } from 'api/MOCKED_DATA/gym'
import { GetLearnerGymsRequest, GetLearnerGymsResponse, GetTrainerGymsRequest, GetTrainerGymsResponse } from './types'

export const GetLearnerGyms = (request: GetLearnerGymsRequest): Promise<GetLearnerGymsResponse> => {
  return Promise.resolve({ gyms: mocked_gyms })
}

export const GetTrainerGyms = (request: GetTrainerGymsRequest): Promise<GetTrainerGymsResponse> => {
  return Promise.resolve({ gyms: mocked_gyms })
}
