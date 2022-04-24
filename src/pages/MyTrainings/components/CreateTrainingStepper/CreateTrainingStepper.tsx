import React, { useContext } from 'react'
import { useStyles } from './createTrainingStepper.styles'

import { CreateTrainingsContext } from 'pages/MyTrainings/pages/CreateTrainings/CreateTrainingsContext'
import { Link } from 'react-router-dom'

import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'

import { useAppDispatch } from 'redux/hooks'
import { clearSelectedCreationType, clearSelectedGym } from 'redux/slices/myTrainingsSlice'

const CreateTrainingStepper: React.FC = (): React.ReactElement => {
  const classes = useStyles()
  const { activeStep, steps, setActiveStep } = useContext(CreateTrainingsContext)

  const dispatch = useAppDispatch()

  const changeStep = (newStep: number) => {
    if (newStep < activeStep) {
      if (newStep === 0) {
        dispatch(clearSelectedGym())
        dispatch(clearSelectedCreationType())
      }
      if (newStep === 1) {
        dispatch(clearSelectedCreationType())
      }
      setActiveStep(newStep)
    }
  }
  return (
    <>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          const stepProps: { completed?: boolean } = {}
          return (
            <Step key={step.label} onClick={() => changeStep(index)} {...stepProps} sx={{ cursor: index < activeStep ? 'pointer' : 'default' }}>
              {index < activeStep ? (
                <Link to={step.url} className={classes.link}>
                  <StepLabel>{step.label}</StepLabel>
                </Link>
              ) : (
                <StepLabel>{step.label}</StepLabel>
              )}
            </Step>
          )
        })}
      </Stepper>
    </>
  )
}

export default CreateTrainingStepper
