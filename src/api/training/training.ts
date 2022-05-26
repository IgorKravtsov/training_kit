import {
  mocked_gym_trainings,
  mocked_trainings,
} from 'api/MOCKED_DATA/trainings'
import {
  CreateOneTrainingRequest,
  GetLearnerTrainingHistoryRequest,
  GetLearnerTrainingHistoryResponse,
  GetUserTrainingsRequest,
  GetUserTrainingsResponse,
  MarkVisitingTrainingRequest,
  MarkVisitingTrainingResponse,
} from './types'
import { $api } from '../_config'

export const GetUserTrainings = async (
  request: GetUserTrainingsRequest,
): Promise<GetUserTrainingsResponse> => {
  // return Promise.resolve({ trainings: mocked_gym_trainings })
  const { data } = await $api.post<GetUserTrainingsResponse>(
    'training/get-user-trainings',
    request,
  )
  return data
}

export const MarkVisitingTraining = async (
  request: MarkVisitingTrainingRequest,
): Promise<MarkVisitingTrainingResponse> => {
  const { data } = await $api.post<MarkVisitingTrainingResponse>(
    'training/mark-visiting-training',
    request,
  )
  return data
}

export const GetLearnerTrainingHistory = async (
  request: GetLearnerTrainingHistoryRequest,
): Promise<GetLearnerTrainingHistoryResponse> => {
  const { data } = await $api.post<GetLearnerTrainingHistoryResponse>(
    'training/get-learner-training-history',
    request,
  )
  return data
}

export const CreateOneTraining = (
  request: CreateOneTrainingRequest,
): Promise<void> => {
  return Promise.resolve()
}
