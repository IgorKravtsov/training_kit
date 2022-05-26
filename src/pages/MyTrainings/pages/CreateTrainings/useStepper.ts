import { Step } from 'pages/MyTrainings/interfaces'
import { useState } from 'react'
import { useAppSelector } from 'redux/hooks'
import { selectMyTrainings } from 'redux/slices/myTrainingsSlice'
import { MyTrainingsRoutes, RouteNames } from 'routes'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'

export const useStepper = () => {
  const { user } = useAuthContext()
  const { selectedCreationType, selectedGymId } =
    useAppSelector(selectMyTrainings)
  const steps: Step[] = [
    {
      label: 'Оберіть зал',
      url: `${RouteNames.MY_TRAININGS}/${user?.id || '-'}/${
        MyTrainingsRoutes.CREATE_TRAININGS
      }`,
    },
    {
      label: 'Як Ви хочете створити тренування',
      url: `${RouteNames.MY_TRAININGS}/${user?.id || '-'}/${
        MyTrainingsRoutes.CREATE_TRAININGS
      }/${selectedGymId || '-'}`,
    },
    {
      label: 'Введіть дані тренування',
      url: `${RouteNames.MY_TRAININGS}/${user?.id || '-'}/${
        MyTrainingsRoutes.CREATE_TRAININGS
      }/${selectedGymId || '-'}/${selectedCreationType || '-'}`,
    },
  ]
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return {
    steps,
    activeStep,
    setActiveStep,
    handleNext,
    handleBack,
    handleReset,
  }
}
