import { Id } from 'shared-files/types/appId.type'

export enum CharacteristicType {
  Power,
  Speed,
  Endurance,
}

export interface Characteristic {
  id: Id
  title: string
  type: CharacteristicType
}

export interface GetUserCharacteristicsRequest {
  userId: Id
}

export interface GetUserCharacteristicsResponse {
  characteristics: Characteristic[]
}

export interface GetCharacteristicByIdRequest {
  characteristicId: Id
  userId: Id
}

export interface GetCharacteristicByIdResponse {
  characteristic: Characteristic
}

export interface GetAllCharacteristicsResponse {
  characteristics: Characteristic[]
}
