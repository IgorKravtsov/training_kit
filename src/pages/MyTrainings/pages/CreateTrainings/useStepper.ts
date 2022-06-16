import { Step } from 'pages/MyTrainings/interfaces'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from 'redux/hooks'
import { selectMyTrainings } from 'redux/slices/myTrainingsSlice'
import { MyTrainingsRoutes, RouteNames } from 'routes'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'

export const useStepper = () => {
  const { t } = useTranslation(['myTrainings'])
  const { user } = useAuthContext()
  const { selectedCreationType, selectedGymId } =
    useAppSelector(selectMyTrainings)
  const steps: Step[] = [
    {
      label: t('myTrainings:createTraining.step1'),
      url: `${RouteNames.MY_TRAININGS}/${user?.id || '-'}/${
        MyTrainingsRoutes.CREATE_TRAININGS
      }`,
    },
    {
      label: t('myTrainings:createTraining.step2'),
      url: `${RouteNames.MY_TRAININGS}/${user?.id || '-'}/${
        MyTrainingsRoutes.CREATE_TRAININGS
      }/${selectedGymId || '-'}`,
    },
    {
      label: t('myTrainings:createTraining.step3'),
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
