import { Id } from 'shared-files/types'
import { Gym } from './gym.types'

export interface GetTrainerGymsRequest {
  trainerId: Id
}

export interface GetTrainerGymsResponse {
  gyms: Gym[]
}
