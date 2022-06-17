import { $api } from 'api/_config'
import { Id } from 'shared-files/types'
import {
  AppUser,
  AssginLearnersRequest,
  AssginToTrainersRequest,
  GetLearnersToAssignRequest,
  getTrainerLearnersRequest,
  GetTrainersToAssignRequest,
  PublicAppUserDto,
  UpdateLanguageRequest,
} from './types'

export const GetTrainerLearners = async (
  request: getTrainerLearnersRequest,
): Promise<PublicAppUserDto[]> => {
  const { data } = await $api.post<PublicAppUserDto[]>(
    'user/get-trainer-learners',
    request,
  )
  return data
}

export const GetTrainersToAssign = async (
  request: GetTrainersToAssignRequest,
): Promise<PublicAppUserDto[]> => {
  const { data } = await $api.post<PublicAppUserDto[]>(
    'user/get-trainers-to-assign',
    request,
  )
  return data
}

export const GetLearnersToAssign = async (
  request: GetLearnersToAssignRequest,
): Promise<PublicAppUserDto[]> => {
  const { data } = await $api.post<PublicAppUserDto[]>(
    'user/get-learners-to-assign',
    request,
  )
  return data
}

export const AssignToTrainers = async (
  request: AssginToTrainersRequest,
): Promise<AppUser> => {
  const { data } = await $api.post<AppUser>('user/assign-to-trainers', request)
  return data
}

export const AssignLearners = async (
  request: AssginLearnersRequest,
): Promise<{ message: string }> => {
  const { data } = await $api.post<{ message: string }>(
    'user/assign-learners',
    request,
  )
  return data
}

export const UpdateLanguage = async (
  userId: Id,
  request: UpdateLanguageRequest,
): Promise<AppUser> => {
  const { data } = await $api.put<AppUser>(
    `user/change-language/${userId}`,
    request,
  )
  return data
}
