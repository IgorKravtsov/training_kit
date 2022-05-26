import { Id } from 'shared-files/types'

export enum CharacteristicType {
  Power,
  Speed,
  Endurance,
}

export interface CharacteristicData {
  labels: string[]
  values: number[]
}

export interface Characteristic {
  id: Id
  title: string
  type: CharacteristicType
  data?: CharacteristicData
}
