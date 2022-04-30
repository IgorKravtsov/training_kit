import { mocked_characteristics, randomizeCharacteristicData } from '../MOCKED_DATA/characteristics'
import {
  GetAllCharacteristicsResponse,
  GetCharacteristicByIdRequest,
  GetCharacteristicByIdResponse,
  GetUserCharacteristicsRequest,
  GetUserCharacteristicsResponse,
} from './types'

export const GetUserCharacteristics = async (request: GetUserCharacteristicsRequest): Promise<GetUserCharacteristicsResponse> => {
  return Promise.resolve({ characteristics: mocked_characteristics })
}

export const GetCharacteristicById = async (request: GetCharacteristicByIdRequest): Promise<GetCharacteristicByIdResponse> => {
  return Promise.resolve({ characteristic: mocked_characteristics[0] })
}

export const GetAllCharacteristics = async (): Promise<GetAllCharacteristicsResponse> => {
  return Promise.resolve({ characteristics: mocked_characteristics })
}
