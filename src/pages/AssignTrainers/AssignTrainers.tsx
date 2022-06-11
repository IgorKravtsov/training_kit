import React, { useEffect } from 'react'
import { useStyles } from './assignTrainers.styles'

import { useForm } from 'react-hook-form'

import { Container, Grid } from '@mui/material'

import Title from 'components/Title/Title'
import FormWrapper from 'components/FormWrapper/FormWrapper'

import { useHttpRequest } from 'shared-files/hooks'
import { GetTrainersToAssign } from 'api/user/user'

import { useAppDispatch, useAppSelector } from 'redux/hooks'
import {
  selectAssignTrainers,
  setRequestTrainerList,
  setTrainerList,
} from 'redux/slices/assignTrainersSlice'

import Search from './components/Search/Search'
import TrainerList from './components/TrainerList/TrainerList'

import { SearchTrainerForm } from './interfaces'

const AddTrainers: React.FC = (): React.ReactElement => {
  const classes = useStyles()

  const { requestTrainerList } = useAppSelector(selectAssignTrainers)
  const dispatch = useAppDispatch()

  const [getTrainersToAssign] = useHttpRequest(GetTrainersToAssign)

  const formFeatures = useForm<SearchTrainerForm>({
    defaultValues: { trainer: '' },
  })

  const onSubmit = async (data: SearchTrainerForm) => {
    dispatch(
      setTrainerList(
        requestTrainerList.filter(
          (trainer) =>
            trainer.displayName?.includes(data.trainer) ||
            trainer.email?.includes(data.trainer),
        ),
      ),
    )
  }

  useEffect(() => {
    const getTrainers = async () => {
      const trainerList = await getTrainersToAssign({ trainer: '' })
      trainerList && dispatch(setRequestTrainerList(trainerList))
      trainerList && dispatch(setTrainerList(trainerList))
    }
    getTrainers()
  }, [])

  return (
    <Container component="section" sx={{ mt: 3 }}>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Title className={classes.title}>Додати тренера</Title>
        </Grid>

        <Grid item xs={12} style={{ marginTop: '10px' }}>
          <FormWrapper formFeatures={formFeatures} onSubmit={onSubmit}>
            <Search />
          </FormWrapper>
        </Grid>

        <Grid item xs={12} style={{ marginTop: '60px' }}>
          <TrainerList />
        </Grid>
      </Grid>
    </Container>
  )
}

export default AddTrainers
