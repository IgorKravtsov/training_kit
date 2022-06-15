import { Id } from 'shared-files/types'
import { Abonement } from './abonement.type'

export interface CreateNewAbonementRequest {
  title: string
  price: number
  amountDays?: number
  amountTrainings?: number
  creatorId: Id
  gymIds: Id[]
}

export interface CreateNewAbonementResponse {
  message: string
}
