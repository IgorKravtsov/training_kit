import { Id } from 'shared-files/types'

export interface Gym {
  id: Id
  title: string
  address: string
}

export interface GetLearnerGymsRequest {
  trainers: Id[]
}

export interface GetLearnerGymsResponse {
  gyms: Gym[]
}
