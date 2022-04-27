import { mocked_gym_trainings, mocked_trainings } from 'api/MOCKED_DATA/trainings'
import {
  CreateOneTrainingRequest,
  GetLearnerTrainingHistoryRequest,
  GetLearnerTrainingHistoryResponse,
  GetUserTrainingsRequest,
  GetUserTrainingsResponse,
  MarkVisitingTrainingRequest,
} from './types'

export const GetUserTrainings = (request: GetUserTrainingsRequest): Promise<GetUserTrainingsResponse> => {
  return Promise.resolve({ trainings: mocked_gym_trainings })
}

export const MarkVisitingTraining = (request: MarkVisitingTrainingRequest): Promise<void> => {
  return Promise.resolve()
}

export const GetLearnerTrainingHistory = (request: GetLearnerTrainingHistoryRequest): Promise<GetLearnerTrainingHistoryResponse> => {
  return Promise.resolve({ trainings: mocked_trainings })
}

export const CreateOneTraining = (request: CreateOneTrainingRequest): Promise<void> => {
  return Promise.resolve()
}
