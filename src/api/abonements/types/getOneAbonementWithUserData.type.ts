import { Id } from 'shared-files/types'
import { AbonementWithUserData } from './abonement.type'

export interface GetOneAbonementRequest {
  abonementId: Id
}

export interface GetOneAbonementResponse {
  abonementWithUserData: AbonementWithUserData
}
