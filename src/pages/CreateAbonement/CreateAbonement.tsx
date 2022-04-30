import React, { useEffect, useState } from 'react'
import { useStyles } from './createAbonement.styles'
import Title from 'components/Title/Title'
import { Id } from 'shared-files/types'
import { useAppDispatch } from 'redux/hooks'
import { hideLoading, showLoading } from 'redux/slices/loadingIndicatorSlice'
import { getTrainerGyms } from 'redux/slices/gymSlice'
import { SERVER_DELAY_TIME } from 'shared-files/constants'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { useForm } from 'react-hook-form'
import Form from './components/Form/Form'
import { Card, Container, Grid } from '@mui/material'
import MainImage from './components/MainImage/MainImage'
import { Options } from './interfaces'

const CreateAbonement: React.FC = (): React.ReactElement => {
  const classes = useStyles()
  const { user } = useAuthContext()
  const dispatch = useAppDispatch()

  const [options, setOptions] = useState<Options>({
    byDays: false,
    byTrainings: false,
  })

  // const validationSchema = yup.object({
  //   firstName: yup.string().trim().required('Це поле має бути заповнено'),
  //   lastName: yup.string().trim().required('Це поле має бути заповнено'),
  //   email: yup.string().email('Це не є правильною поштою').required('Це поле має бути заповнено'),
  //   organization: yup.mixed().required('Це поле має бути обрано'),
  //   birthday: yup.date().required('Це поле має бути заповнено'),
  //   password: yup.string().min(6, 'Мінімальне кол-во символів - 6').required('Це поле має бути заповнено'),
  //   confirmPass: yup
  //     .string()
  //     .oneOf([yup.ref('password'), null], 'Це поле має співпадати з полем паролю')
  //     .required('Це поле має бути заповнено'),
  // })
  // type SubmitData = yup.InferType<typeof validationSchema>

  const formFeatures = useForm({
    // resolver: yupResolver(validationSchema),
    // defaultValues: {
    //   birthday: new Date(),
    // },
  })

  // const getGyms = async (trainerId: Id) => {
  //   dispatch(showLoading())
  //   setTimeout(async () => {
  //     await dispatch(getTrainerGyms({ trainerId }))
  //     dispatch(hideLoading())
  //   }, SERVER_DELAY_TIME)
  // }
  const onSubmit = (data: any) => {}

  useEffect(() => {
    // user?.uid && getGyms(user?.uid)
  }, [])

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

            <Form options={options} formFeatures={formFeatures} onSubmit={onSubmit} setOptions={setOptions} />
            {/* </Card> */}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default CreateAbonement
