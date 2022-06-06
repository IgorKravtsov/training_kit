import {
  CreateOneTrainingRequest,
  GetLearnerTrainingHistoryRequest,
  GetLearnerTrainingHistoryResponse,
  GetUserTrainingsRequest,
  GetUserTrainingsResponse,
  MarkVisitingTrainingRequest,
  MarkVisitingTrainingResponse,
  Training,
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

export const CreateOneTraining = async (
  request: CreateOneTrainingRequest,
): Promise<Training> => {
  const { data } = await $api.post<Training>('training/create', request)
  return data
}
