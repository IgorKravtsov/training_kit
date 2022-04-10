import React, { useState } from 'react'
import { useStyles } from './register.styles'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from 'routes'

import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { useAppDispatch } from 'redux/hooks/typedHooks'

import AppCard from 'components/AppCard/AppCard'
import Form from './components/Form'
import { register } from 'redux/slices/userSlice'
import { error } from 'redux/slices/snackbarSlice'
import { RegisterRequest } from 'api/auth/auth.types'
import { UserRoles } from 'api/user/user.types'

const Register: React.FC = (): React.ReactElement => {
  const classes = useStyles()

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  const validationSchema = yup.object({
    firstName: yup.string().trim().required('Це поле має бути заповнено'),
    lastName: yup.string().trim().required('Це поле має бути заповнено'),
    email: yup.string().email('Це не є правильною поштою').required('Це поле має бути заповнено'),
    organization: yup.mixed().required('Це поле має бути обрано'),
    birthday: yup.date().required('Це поле має бути заповнено'),
    password: yup.string().min(6, 'Мінімальне кол-во символів - 6').required('Це поле має бути заповнено'),
    confirmPass: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Це поле має співпадати з полем паролю')
      .required('Це поле має бути заповнено'),
  })
  type SubmitData = yup.InferType<typeof validationSchema>

  const formFeatures = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      birthday: new Date(),
    },
  })

  const onError = (error: any) => {
    console.log('===ERROR===', error)
  }

  const onSubmit = (data: SubmitData) => {
    const request: RegisterRequest = {
      ...data,
      role: UserRoles.LEARNER,
    }

    setIsLoading(true)
    setTimeout(async () => {
      const response = (await dispatch(register(request))) as any

      if (response?.meta.requestStatus !== 'rejected') {
        navigate(RouteNames.HOME)
      } else {
        const message = response?.error?.message

        dispatch(
          error({
            message: message || 'Помилка серверу',
          })
        )
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <>
      <AppCard elevation={10} customClass={classes.paper} maxWidth={400}>
        <Grid container alignItems='center' direction='column'>
          <Avatar className={classes.avatar}>{/* <LockOutlinedIcon /> */}</Avatar>
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
