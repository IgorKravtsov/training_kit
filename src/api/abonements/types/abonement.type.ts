import { PublicAppUserDto } from 'api/user/types'
import { Id } from 'shared-files/types'

export interface Abonement {
  id: Id
  title: string
  // options: AbonementOption[]
  price: number
  amountDays?: number
  amountTrainings?: number
  creator?: PublicAppUserDto
}
export interface LearnerAbonement {
  id: Id
  // title: string
  abonement?: Abonement
  startDate: Date | string
  trainingsLeft?: number
  daysLeft?: number
  endDate?: Date | string
}
