import { Id } from 'shared-files/types'

export interface CreateOneTrainingRequest {
  title: string
  description?: string
  trainingDateTime: Date | string
  gymId: Id
  trainers: Id[]
}

export interface CreateOneTrainingResponse {}
