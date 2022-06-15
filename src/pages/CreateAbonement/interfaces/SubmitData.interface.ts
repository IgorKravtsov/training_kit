import { Gym } from 'api/gym/types'

interface AutoCompleteGym extends Gym {
  label: string
}

export interface SubmitData {
  gyms: AutoCompleteGym[]
  days?: number
  trainings?: number
  price: number
  title: string
}
