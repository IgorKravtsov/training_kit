import { mocked_abonements } from 'api/MOCKED_DATA/abonements'
import { GetUserAbonementsRequest, GetUserAbonementsResponse } from './types'

export const GetUserAbonements = (request: GetUserAbonementsRequest): Promise<GetUserAbonementsResponse> => {
  return Promise.resolve({ abonements: mocked_abonements })
}
