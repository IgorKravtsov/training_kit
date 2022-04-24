import { mocked_gym_trainings, mocked_trainings } from 'api/MOCKED_DATA/trainings'
import { GetUserTrainingsRequest, GetUserTrainingsResponse, MarkVisitingTrainingRequest } from './types'

export const GetUserTrainings = (request: GetUserTrainingsRequest): Promise<GetUserTrainingsResponse> => {
  return Promise.resolve({ trainings: mocked_gym_trainings })
}

export const MarkVisitingTraining = (request: MarkVisitingTrainingRequest): Promise<void> => {
  return Promise.resolve()
}
