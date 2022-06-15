import React, { useState } from 'react'
import { useStyles } from './createAbonement.styles'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Title from 'components/Title/Title'
import { useAppDispatch } from 'redux/hooks'

import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { useHttpRequest } from 'shared-files/hooks'

import Form from './components/Form/Form'
import { Container, Grid } from '@mui/material'

import { Options, SubmitData } from './interfaces'

import { error, success } from 'redux/slices/snackbarSlice'
import { useCreateAbonementValidation } from './useCreateAbonementValidation'
import { CreateNewAbonement } from 'api/abonements/abonements'
import { getIdFromArray } from 'utils'
import { useNavigate } from 'react-router-dom'

const CreateAbonement: React.FC = (): React.ReactElement => {
  const classes = useStyles()

  const { user } = useAuthContext()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [createNewAbonement, _, isLoading] = useHttpRequest(CreateNewAbonement)

  const [options, setOptions] = useState<Options>({
    byDays: false,
    byTrainings: false,
  })

  const { validationSchema } = useCreateAbonementValidation()

  const formFeatures = useForm({
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = async (data: SubmitData) => {
    if (!data.days && !data.trainings) {
      dispatch(error({ message: 'Необхідно обрати можливості абоніменту' }))
      return
    }

    const response = await createNewAbonement({
      price: data.price,
      title: data.title,
      amountDays: data.days,
      amountTrainings: data.trainings,
      creatorId: user?.id || 0,
      gymIds: data.gyms.map(getIdFromArray),
    })
    if (response) {
      dispatch(success({ message: response.message }))
      navigate('../')
    }
  }

  return (
    <>
      <Container className={classes.wrapper}>
        <Grid container spacing={2} justifyContent="center">
          {/* <Grid item xs={4}>
            <MainImage /> */}
          {/* </Grid> */}
          <Grid item xs={8} sx={{ textAlign: 'center' }}>
            {/* <Card elevation={6} sx={{ padding: '5px 30px 50px 30px', textAlign: 'center' }}> */}
            <Title>Створити абонімент</Title>

            <Form
              options={options}
              formFeatures={formFeatures}
              onSubmit={onSubmit}
              setOptions={setOptions}
              isLoading={isLoading}
            />
            {/* </Card> */}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default CreateAbonement
