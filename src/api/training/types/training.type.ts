import { Gym } from 'api/gym/types'
import { PublicAppUserDto } from 'api/user/types'
import { Id } from 'shared-files/types'

export enum CannotVisitTrainingType {
  Time = 'time',
  AlreadyMarked = 'alreadyMarked',
}

export interface CannotVisitTraining {
  type: CannotVisitTrainingType
  canBeVisited: boolean
}

export interface Training {
  id: Id
  title: string
  gym?: Gym
  trainingDateTime: Date | string
  // trainingTime: Date | string
  trainer: PublicAppUserDto
  canBeVisited?: boolean | CannotVisitTraining
}
