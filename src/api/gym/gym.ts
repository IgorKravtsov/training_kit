import { GetLearnerGymsRequest, GetLearnerGymsResponse } from './gym.types'
import { mocked_gyms } from 'api/MOCKED_DATA/gym'

export const GetLearnerGyms = (request: GetLearnerGymsRequest): Promise<GetLearnerGymsResponse> => {
  return Promise.resolve({ gyms: mocked_gyms })
}
