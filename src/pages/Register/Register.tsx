import React, { useState } from 'react'
import { useStyles } from './register.styles'

import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import AppCard from 'components/AppCard/AppCard'
import Form from './components/Form'

const Register: React.FC = (): React.ReactElement => {
  const classes = useStyles()

  const [isLoading, setIsLoading] = useState(false)

  const validationSchema = yup.object({
    firstName: yup.string().trim().required('Це поле має бути заповнено'),
    lastName: yup.string().trim().required('Це поле має бути заповнено'),
    email: yup.string().email('Це не є правильною поштою').required('Це поле має бути заповнено'),
    organization: yup.mixed().required('Це поле має бути обрано'),
    birthday: yup.mixed(),
    password: yup.string().min(6, 'Мінімальне кол-во символів - 6').required('Це поле має бути заповнено'),
    confirmPass: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Це поле має співпадати з полем паролю')
      .required('Це поле має бути заповнено'),
  })
  type SubmitData = yup.InferType<typeof validationSchema>

  const formFeatures = useForm({
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = (data: SubmitData) => {
    console.log('===DATA===', data)
  }

  const onError = (error: any) => {
    console.log('===ERROR===', error)
  }

  return (
    <>
      <AppCard elevation={10} customClass={classes.paper} maxWidth={400}>
        <Grid container alignItems='center' direction='column'>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h5' className={classes.title}>
            Зареєструватися
          </Typography>
        </Grid>

        <Form isLoading={isLoading} formFeatures={formFeatures} onSubmit={onSubmit} onError={onError} />
      </AppCard>
    </>
  )
}

export default Register
