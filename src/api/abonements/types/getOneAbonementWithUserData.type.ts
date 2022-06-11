import { Id } from 'shared-files/types'
import { LearnerAbonement } from './abonement.type'

export interface GetOneLearnerAbonementRequest {
  abonementId: Id
  learnerId: Id
}

// export interface GetOneLearnerAbonementResponse {
//   abonementWithUserData: LearnerAbonement
// }
