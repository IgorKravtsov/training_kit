import { mocked_gym_trainings, mocked_trainings } from 'api/MOCKED_DATA/trainings'
import { GetUserTrainingsRequest, GetUserTrainingsResponse, MarkVisitingTrainingRequest } from './types'
import { GetLearnerTrainingHistoryRequest, GetLearnerTrainingHistoryResponse } from './types/getTrainingHistory.type'

export const GetUserTrainings = (request: GetUserTrainingsRequest): Promise<GetUserTrainingsResponse> => {
  return Promise.resolve({ trainings: mocked_gym_trainings })
}

export const MarkVisitingTraining = (request: MarkVisitingTrainingRequest): Promise<void> => {
  return Promise.resolve()
}

export const GetLearnerTrainingHistory = (request: GetLearnerTrainingHistoryRequest): Promise<GetLearnerTrainingHistoryResponse> => {
  return Promise.resolve({ trainings: mocked_trainings })
}
