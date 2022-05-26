import React, { useEffect, useState } from 'react'
import { useStyles } from './createTraining.styles'

import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'

import { useAppDispatch, useAppSelector } from 'redux/hooks'
import {
  getTrainerGyms,
  selectMyTrainings,
} from 'redux/slices/myTrainingsSlice'
import { hideLoading, showLoading } from 'redux/slices/loadingIndicatorSlice'

import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { Id } from 'shared-files/types'

import { CreateTrainingsContext } from './CreateTrainingsContext'
import { useStepper } from './useStepper'

import SectionTitle from 'components/SectionTitle/SectionTitle'
import CreateTrainingStepper from 'pages/MyTrainings/components/CreateTrainingStepper/CreateTrainingStepper'
import GymList from 'pages/MyTrainings/components/GymList/GymList'
import ChooseCreationMode from 'pages/MyTrainings/components/ChooseCreationMode/ChooseCreationMode'
import CreateTrainingSection from 'pages/MyTrainings/components/CreateTrainingSection/CreateTrainingSection'

const CreateTrainings: React.FC = (): React.ReactElement => {
  const classes = useStyles()
  const { trainerGyms } = useAppSelector(selectMyTrainings)
  const { user } = useAuthContext()
  const dispatch = useAppDispatch()

  const stepperContext = useStepper()
  const { steps, activeStep } = stepperContext

  const getServerData = async (trainerId: Id) => {
    dispatch(showLoading())
    await dispatch(getTrainerGyms({ trainerId }))
    dispatch(hideLoading())
  }

  useEffect(() => {
    user?.id && getServerData(user.id)
  }, [])

  return (
    <Container sx={{ textAlign: 'center', pb: 10 }}>
      <CreateTrainingsContext.Provider value={stepperContext}>
        <CreateTrainingStepper />
        <SectionTitle className={classes.sectionTitle}>
          {steps[activeStep].label}
        </SectionTitle>
        <Divider sx={{ mb: 4 }} />
        {activeStep === 0 && <GymList gyms={trainerGyms} />}
        {activeStep === 1 && <ChooseCreationMode />}
        {activeStep === 2 && <CreateTrainingSection />}
      </CreateTrainingsContext.Provider>
    </Container>
  )
}

export default CreateTrainings
