import { Id } from 'shared-files/types'
import { AbonementWithUserData } from './abonement.type'

export interface GetOneAbonementRequest {
  abonementId: Id
  userId: Id
}

export interface GetOneAbonementResponse {
  abonementWithUserData: AbonementWithUserData
}
