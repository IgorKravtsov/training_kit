import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

import { CreateTrainingsContext } from 'pages/MyTrainings/pages/CreateTrainings/CreateTrainingsContext'

import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { MyTrainingsRoutes, RouteNames } from 'routes'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import {
  CreationType,
  selectMyTrainings,
  setSelectedCreationType,
} from 'redux/slices/myTrainingsSlice'
import { useTranslation } from 'react-i18next'

const ChooseCreationMode: React.FC = (): React.ReactElement => {
  const { user } = useAuthContext()
  const { selectedGymId } = useAppSelector(selectMyTrainings)

  const {t} = useTranslation(['myTrainings'])
  const dispatch = useAppDispatch()

  const { handleNext } = useContext(CreateTrainingsContext)
  const createOneTrainingUrl = `${RouteNames.MY_TRAININGS}/${user?.id || '-'}/${
    MyTrainingsRoutes.CREATE_TRAININGS
  }/${selectedGymId || '-'}/${CreationType.One}`
  const createManyTrainingUrl = `${RouteNames.MY_TRAININGS}/${
    user?.id || '-'
  }/${MyTrainingsRoutes.CREATE_TRAININGS}/${selectedGymId || '-'}/${
    CreationType.Many
  }`

  const handleClick = (func: any) => {
    dispatch(func)
    handleNext()
  }

  return (
    <Grid
      container
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={3}>
        <Button
          component={Link}
          to={createOneTrainingUrl}
          variant="outlined"
          onClick={() => handleClick(setSelectedCreationType(CreationType.One))}
        >
          {t('myTrainings:createTraining.createOneTraining')}
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          component={Link}
          to={createManyTrainingUrl}
          variant="outlined"
          onClick={() =>
            handleClick(setSelectedCreationType(CreationType.Many))
          }
        >
          {t('myTrainings:createTraining.createManyTrainings')}
        </Button>
      </Grid>
    </Grid>
  )
}

export default ChooseCreationMode
