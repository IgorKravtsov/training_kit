import { Id } from 'shared-files/types'
import { Training } from './training.type'

export interface GetLearnerTrainingHistoryRequest {
  learnerId: Id
  days?: number
}

export interface GetLearnerTrainingHistoryResponse {
  trainings: Training[]
}
