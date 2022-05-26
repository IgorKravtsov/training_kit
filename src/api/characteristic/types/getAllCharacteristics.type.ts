import { Id } from 'shared-files/types'
import { Characteristic } from './characteristic.type'

export interface GetAllCharacteristicsRequest {
  userId: Id
}

export interface GetAllCharacteristicsResponse {
  characteristics: Characteristic[]
}
