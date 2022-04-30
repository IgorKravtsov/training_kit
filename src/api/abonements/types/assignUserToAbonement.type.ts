import { Id } from 'shared-files/types'

export interface AssignUserToAbonementRequest {
  learnerId: Id
  abonementId: Id
}

export interface AssignUserToAbonementResponse {
  message: string
}
