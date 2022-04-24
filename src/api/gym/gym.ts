import { mocked_gyms } from 'api/MOCKED_DATA/gym'
import { GetLearnerGymsRequest, GetLearnerGymsResponse } from './types'

export const GetLearnerGyms = (request: GetLearnerGymsRequest): Promise<GetLearnerGymsResponse> => {
  return Promise.resolve({ gyms: mocked_gyms })
}
