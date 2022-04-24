import { Gym } from 'api/gym/gym.types'
import { Id } from 'shared-files/types'

export interface Training {
  id: Id
  title: string
  gym?: Gym
  trainingDate: Date | string
  trainingTime: Date | string
}

export interface GetUserTrainingsRequest {
  trainerIds: Id[]
  startDate: Date | string
  endDate: Date | string
}

export interface GymTraining {
  gym: Gym
  trainings: Training[]
}

export interface GetUserTrainingsResponse {
  trainings: GymTraining[]
}
