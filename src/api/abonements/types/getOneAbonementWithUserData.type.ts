import { Id } from 'shared-files/types'
import { AbonementWithUserData } from './abonement.type'

export interface GetOneAbonementWithUserDataRequest {
  abonementId: Id
  userId: Id
}

export interface GetOneAbonementWithUserDataResponse {
  abonementWithUserData: AbonementWithUserData
}
