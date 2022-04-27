export interface CreateOneTrainingRequest {
  title: string
  description?: string
  trainingDate: Date | string
  trainingTime: Date | string
}

export interface CreateOneTrainingResponse {}
