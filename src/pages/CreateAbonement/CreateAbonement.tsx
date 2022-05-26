import React, { useEffect, useState } from 'react'
import { useStyles } from './createAbonement.styles'

import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Title from 'components/Title/Title'
import { useAppDispatch } from 'redux/hooks'

import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'

import Form from './components/Form/Form'
import { Container, Grid } from '@mui/material'

import { Options } from './interfaces'
import { SERVER_DELAY_TIME } from 'shared-files/constants'
import { hideLoading, showLoading } from 'redux/slices/loadingIndicatorSlice'
import { error } from 'redux/slices/snackbarSlice'
import { CreateNewAbonementRequest } from 'api/abonements/types'

const CreateAbonement: React.FC = (): React.ReactElement => {
  const classes = useStyles()
  const { user } = useAuthContext()
  const dispatch = useAppDispatch()

  const [isLoading, setIsLoading] = useState(false)
  const [options, setOptions] = useState<Options>({
    byDays: false,
    byTrainings: false,
  })

  const validationSchema = yup.object({
    title: yup.string().trim().required('Це поле має бути заповнено'),
    gyms: yup.array().of(yup.mixed()).min(1, 'Це поле має бути заповнено').required('Це поле має бути заповнено'),
    days: yup.number().min(1, 'Мінімальне значення цього поля - 1').typeError('Це поле має бути заповнено'),
    trainings: yup.number().min(1, 'Мінімальне значення цього поля - 1'),
    price: yup.number().required('Це поле має бути заповнено'),
  })
  type SubmitData = yup.InferType<typeof validationSchema>

  const formFeatures = useForm({
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = (data: SubmitData) => {
    if (!data.days && !data.trainings) {
      dispatch(error({ message: 'Необхідно обрати можливості абоніменту' }))
      return
    }
    // const request: CreateNewAbonementRequest {

    // }
  }

  return (
    <>
      <Container className={classes.wrapper}>
        <Grid container spacing={2} justifyContent='center'>
          {/* <Grid item xs={4}>
            <MainImage /> */}
          {/* </Grid> */}
          <Grid item xs={8} sx={{ textAlign: 'center' }}>
            {/* <Card elevation={6} sx={{ padding: '5px 30px 50px 30px', textAlign: 'center' }}> */}
            <Title>Створити абонімент</Title>

            <Form options={options} formFeatures={formFeatures} onSubmit={onSubmit} setOptions={setOptions} isLoading={isLoading} />
            {/* </Card> */}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default CreateAbonement
