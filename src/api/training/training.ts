import { mocked_gym_trainings, mocked_trainings } from 'api/MOCKED_DATA/trainings'
import { GetUserTrainingsRequest, GetUserTrainingsResponse } from './training.types'

export const GetUserTrainings = (request: GetUserTrainingsRequest): Promise<GetUserTrainingsResponse> => {
  return Promise.resolve({ trainings: mocked_gym_trainings })
}
