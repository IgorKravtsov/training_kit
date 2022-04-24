import { Gym } from 'api/gym/types'
import { PublicAppUserDto } from 'api/user/types'
import { Id } from 'shared-files/types'

export interface Training {
  id: Id
  title: string
  gym?: Gym
  trainingDate: Date | string
  trainingTime: Date | string
  trainer: PublicAppUserDto
}
