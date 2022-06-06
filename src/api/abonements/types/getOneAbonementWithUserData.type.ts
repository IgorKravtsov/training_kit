import { Id } from 'shared-files/types'
import { LearnerAbonement } from './abonement.type'

export interface GetOneAbonementWithUserDataRequest {
  abonementId: Id
  userId: Id
}

export interface GetOneAbonementWithUserDataResponse {
  abonementWithUserData: LearnerAbonement
}
