import { $api } from 'api/_config'
import { GetTrainersToAssignRequest, PublicAppUserDto } from './types'

export const GetTrainersToAssign = async (
  request: GetTrainersToAssignRequest,
): Promise<PublicAppUserDto[]> => {
  const { data } = await $api.post<PublicAppUserDto[]>(
    'user/get-trainers-to-assign',
    request,
  )
  return data
}
