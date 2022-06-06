import { Id } from 'shared-files/types'
import { LearnerAbonement } from './abonement.type'

export interface GetLearnerAbonementsRequest {
  trainers: Id[]
}

export interface GetLearnerAbonementsResponse {
  learnerAbonements: LearnerAbonement[]
}
