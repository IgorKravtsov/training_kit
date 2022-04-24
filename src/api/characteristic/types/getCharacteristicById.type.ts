import { Id } from 'shared-files/types'
import { Characteristic } from './characteristic.type'

export interface GetCharacteristicByIdRequest {
  characteristicId: Id
  userId: Id
}

export interface GetCharacteristicByIdResponse {
  characteristic: Characteristic
}
