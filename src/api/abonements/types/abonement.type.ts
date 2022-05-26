import { Id } from 'shared-files/types'

export interface AbonementOption {
  id?: Id
  name: string
  value: number | string
}
export interface Abonement {
  id: Id
  title: string
  options: AbonementOption[]
}
export interface AbonementWithUserData {
  id: Id
  title: string
  options: AbonementOption[]
  startDate: Date | string
  trainingsLeft?: number
  daysLeft?: number
  endDate?: Date | string
}
