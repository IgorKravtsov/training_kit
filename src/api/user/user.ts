import { $api } from 'api/_config'
import {
  AppUser,
  AssginToTrainersRequest,
  GetTrainersToAssignRequest,
  PublicAppUserDto,
} from './types'

export const GetTrainersToAssign = async (
  request: GetTrainersToAssignRequest,
): Promise<PublicAppUserDto[]> => {
  const { data } = await $api.post<PublicAppUserDto[]>(
    'user/get-trainers-to-assign',
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
