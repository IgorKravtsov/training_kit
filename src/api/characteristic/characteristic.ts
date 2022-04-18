import { Id } from 'shared-files/types/appId.type'
import {
  Characteristic,
  GetAllCharacteristicsResponse,
  GetCharacteristicByIdRequest,
  GetCharacteristicByIdResponse,
  GetUserCharacteristicsRequest,
  GetUserCharacteristicsResponse,
} from './characteristic.types'
import { mocked_characteristics } from '../MOCKED_DATA/characteristics'

export const GetUserCharacteristics = async (request: GetUserCharacteristicsRequest): Promise<GetUserCharacteristicsResponse> => {
  return Promise.resolve({ characteristics: mocked_characteristics })
}

export const GetCharacteristicById = async (request: GetCharacteristicByIdRequest): Promise<GetCharacteristicByIdResponse> => {
  return Promise.resolve({ characteristic: mocked_characteristics[0] })
}

export const GetAllCharacteristics = async (): Promise<GetAllCharacteristicsResponse> => {
  return Promise.resolve({ characteristics: mocked_characteristics })
}
