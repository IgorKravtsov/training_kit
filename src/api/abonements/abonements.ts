import {
  AssignUserToAbonementRequest,
  CreateNewAbonementRequest,
  CreateNewAbonementResponse,
  GetOneLearnerAbonementRequest,
  GetLearnerAbonementsRequest,
  Abonement,
  GetTrainersAbonementsRequest,
} from './types'

import { LearnerAbonement } from './types'

import { $api } from '../_config'

export const GetLearnerAbonements = async (
  request: GetLearnerAbonementsRequest,
): Promise<LearnerAbonement[]> => {
  const { data } = await $api.post<LearnerAbonement[]>(
    'abonement/get-learner-abonements',
    request,
  )
  return data
}

export const GetTrainersAbonements = async (
  request: GetTrainersAbonementsRequest,
): Promise<Abonement[]> => {
  const { data } = await $api.post<Abonement[]>(
    'abonement/get-trainers-abonements',
    request,
  )
  return data
}

export const AssignUserToAbonement = async (
  request: AssignUserToAbonementRequest,
): Promise<LearnerAbonement> => {
  const { data } = await $api.post<LearnerAbonement>(
    'abonement/assign-abonement',
    request,
  )
  return data
}

export const GetOneLearnerAbonement = async (
  request: GetOneLearnerAbonementRequest,
): Promise<LearnerAbonement> => {
  const { data } = await $api.post<LearnerAbonement>(
    'abonement/get-one-learner-abonement',
    request,
  )
  return data
}

export const CreateNewAbonement = async (
  request: CreateNewAbonementRequest,
): Promise<CreateNewAbonementResponse> => {
  const { data } = await $api.post<CreateNewAbonementResponse>(
    'abonement/create',
    request,
  )
  return data
}
