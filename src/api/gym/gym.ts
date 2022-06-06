import { mocked_gyms } from 'api/MOCKED_DATA/gym'
import {
  GetLearnerGymsRequest,
  GetLearnerGymsResponse,
  GetTrainerGymsRequest,
  GetTrainerGymsResponse,
} from './types'
import { $api } from '../_config'

export const GetLearnerGyms = async (
  request: GetLearnerGymsRequest,
): Promise<GetLearnerGymsResponse> => {
  const { data } = await $api.post<GetLearnerGymsResponse>(
    'gym/learner-gyms',
    request,
  )
  return data
}

export const GetTrainerGyms = async (
  request: GetTrainerGymsRequest,
): Promise<GetTrainerGymsResponse> => {
  const { data } = await $api.post<GetTrainerGymsResponse>(
    'gym/trainer-gyms',
    request,
  )
  return data
}
