import { createContext } from 'react'
import { Step } from 'pages/MyTrainings/interfaces'

export interface CreateTrainingsType {
  activeStep: number
  setActiveStep: (num: number) => void
  handleNext: () => void
  handleBack: () => void
  handleReset: () => void
  steps: Step[]
}

export const CreateTrainingsContext = createContext<CreateTrainingsType>({
  activeStep: 0,
  setActiveStep: () => {},
  handleNext: () => {},
  handleBack: () => {},
  handleReset: () => {},
  steps: [],
})
