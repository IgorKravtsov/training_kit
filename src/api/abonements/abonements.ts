import { GetUserAbonementsRequest, GetUserAbonementsResponse } from './abonements.types'
import { mocked_abonements } from 'api/MOCKED_DATA/abonements'

export const GetUserAbonements = (request: GetUserAbonementsRequest): Promise<GetUserAbonementsResponse> => {
  return Promise.resolve({ abonements: mocked_abonements })
}
