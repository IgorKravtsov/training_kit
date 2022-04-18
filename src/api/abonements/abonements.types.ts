import { Id } from 'shared-files/types'

export interface Abonement {
  id: Id
  title: string
}

export interface GetUserAbonementsRequest {
  trainers: Id[]
}

export interface GetUserAbonementsResponse {
  abonements: Abonement[]
}
