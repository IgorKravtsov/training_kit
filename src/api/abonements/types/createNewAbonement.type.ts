import { Id } from 'shared-files/types'
import { Abonement } from './abonement.type'

export interface CreateNewAbonementRequest {
  gymIds: Id[]
  abonement: Omit<Abonement, 'id'>
}

export interface CreateNewAbonementResponse {
  abonement: Abonement
}
