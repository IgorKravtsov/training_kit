import { Id } from 'shared-files/types'
import { Abonement } from './abonement.type'

export interface GetUserAbonementsRequest {
  trainers: Id[]
}

export interface GetUserAbonementsResponse {
  abonements: Abonement[]
}
