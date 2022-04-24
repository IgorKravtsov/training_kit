import React, { useEffect, useState } from 'react'
import { useStyles } from './createTraining.styles'

import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'

import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { getTrainerGyms, selectMyTrainings } from 'redux/slices/myTrainingsSlice'
import { hideLoading, showLoading } from 'redux/slices/loadingIndicatorSlice'

import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { Id } from 'shared-files/types'

import { CreateTrainingsContext } from './CreateTrainingsContext'

import SectionTitle from 'components/SectionTitle/SectionTitle'
import CreateTrainingStepper from 'pages/MyTrainings/components/CreateTrainingStepper/CreateTrainingStepper'
import GymList from 'pages/MyTrainings/components/GymList/GymList'
import { Step } from 'pages/MyTrainings/interfaces'
import { MyTrainingsRoutes, RouteNames } from 'routes'

const CreateTrainings: React.FC = (): React.ReactElement => {
  const classes = useStyles()
  const { user } = useAuthContext()
  const { trainerGyms, selectedGymId, selectedCreationType } = useAppSelector(selectMyTrainings)
  const dispatch = useAppDispatch()

  const steps: Step[] = [
    {
      label: 'Оберіть зал',
      url: `${RouteNames.MY_TRAININGS}/${user?.uid || '-'}/${MyTrainingsRoutes.CREATE_TRAININGS}`,
    },
    {
      label: 'Як Ви хочете створити тренування',
      url: `${RouteNames.MY_TRAININGS}/${user?.uid || '-'}/${MyTrainingsRoutes.CREATE_TRAININGS}/${selectedGymId || '-'}`,
    },
    {
      label: 'Створіть тренування',
      url: `${RouteNames.MY_TRAININGS}/${user?.uid || '-'}/${MyTrainingsRoutes.CREATE_TRAININGS}/${selectedGymId || '-'}/${
        selectedCreationType || '-'
      }`,
    },
  ]
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  const getServerData = async (trainerId: Id) => {
    dispatch(showLoading())
    await dispatch(getTrainerGyms({ trainerId }))
    dispatch(hideLoading())
  }

  useEffect(() => {
    user?.uid && getServerData(user.uid)
  }, [])

  return (
    <Container sx={{ textAlign: 'center', pb: 10 }}>
      <CreateTrainingsContext.Provider value={{ activeStep, setActiveStep, handleBack, handleNext, handleReset, steps }}>
        <CreateTrainingStepper />
        <SectionTitle className={classes.sectionTitle}>{steps[activeStep].label}</SectionTitle>
        <Divider sx={{ mb: 4 }} />
        {activeStep === 0 && <GymList gyms={trainerGyms} />}
      </CreateTrainingsContext.Provider>
    </Container>
  )
}

export default CreateTrainings
