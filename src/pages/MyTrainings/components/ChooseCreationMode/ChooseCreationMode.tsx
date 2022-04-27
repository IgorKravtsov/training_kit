import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

import { CreateTrainingsContext } from 'pages/MyTrainings/pages/CreateTrainings/CreateTrainingsContext'

import { useAuthProvider } from 'shared-files/AuthProvider/useAuthProvider'
import { MyTrainingsRoutes, RouteNames } from 'routes'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { CreationType, selectMyTrainings, setSelectedCreationType } from 'redux/slices/myTrainingsSlice'

const ChooseCreationMode: React.FC = (): React.ReactElement => {
  const { user } = useAuthProvider()
  const { selectedGymId } = useAppSelector(selectMyTrainings)
  const dispatch = useAppDispatch()
  const { handleNext } = useContext(CreateTrainingsContext)
  const createOneTrainingUrl = `${RouteNames.MY_TRAININGS}/${user?.uid || '-'}/${MyTrainingsRoutes.CREATE_TRAININGS}/${selectedGymId || '-'}/${
    CreationType.One
  }`
  const createManyTrainingUrl = `${RouteNames.MY_TRAININGS}/${user?.uid || '-'}/${MyTrainingsRoutes.CREATE_TRAININGS}/${selectedGymId || '-'}/${
    CreationType.Many
  }`

  const handleClick = (func: any) => {
    dispatch(func)
    handleNext()
  }

  return (
    <Grid container direction='row' spacing={2} justifyContent='center' alignItems='center'>
      <Grid item xs={3}>
        <Button component={Link} to={createOneTrainingUrl} variant='outlined' onClick={() => handleClick(setSelectedCreationType(CreationType.One))}>
          Створити тренування
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          component={Link}
          to={createManyTrainingUrl}
          variant='outlined'
          onClick={() => handleClick(setSelectedCreationType(CreationType.Many))}
        >
          Запланувати тренування
        </Button>
      </Grid>
    </Grid>
  )
}

export default ChooseCreationMode
