import { Id } from 'shared-files/types'
import { Gym } from './gym.types'

export interface GetLearnerGymsRequest {
  trainers: Id[]
}

export interface GetLearnerGymsResponse {
  gyms: Gym[]
}
