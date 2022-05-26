import { Id } from 'shared-files/types'

export interface MarkVisitingTrainingRequest {
  trainingId: Id
  userId: Id
}

export interface MarkVisitingTrainingResponse {
  message: string
}
