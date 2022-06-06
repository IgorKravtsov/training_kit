import { Id } from 'shared-files/types'

export interface Abonement {
  id: Id
  title: string
  // options: AbonementOption[]
  price: number
  amountDays?: number
  amountTrainings?: number
}
export interface LearnerAbonement {
  id: Id
  // title: string
  abonement: Abonement
  startDate: Date | string
  trainingsLeft?: number
  daysLeft?: number
  endDate?: Date | string
}
