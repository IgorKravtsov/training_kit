import { Id } from 'shared-files/types'
import { Characteristic } from './characteristic.type'

export interface GetUserCharacteristicsRequest {
  userId: Id
}

export interface GetUserCharacteristicsResponse {
  characteristics: Characteristic[]
}
