import { Gym } from 'api/gym/types/gym.types'
import { Id } from 'shared-files/types'

export interface Training {
  id: Id
  title: string
  gym?: Gym
  trainingDate: Date | string
  trainingTime: Date | string
}
