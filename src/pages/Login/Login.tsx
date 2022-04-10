import React, { useState } from 'react'
import { useStyles } from './login.styles'
import { useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { RouteNames } from 'routes'

import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import AppCard from 'components/AppCard/AppCard'
import { login, selectUser } from 'redux/slices/userSlice'
import { useAppDispatch, useAppSelector } from 'redux/hooks/typedHooks'

import Form from './components/Form'
import { error } from 'redux/slices/snackbarSlice'

const Login: React.FC = (): React.ReactElement => {
  const classes = useStyles()

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { error: userError } = useAppSelector(selectUser)

  const [isLoading, setIsLoading] = useState(false)

  const validationSchema = yup.object({
    email: yup.string().email('Це не є правильною поштою').required('Це поле має бути заповнено'),
    password: yup.string().min(6, 'Мінімальне кол-во символів - 6').required('Це поле має бути заповнено'),
  })
  type SubmitData = yup.InferType<typeof validationSchema>

  const formFeatures = useForm({
    resolver: yupResolver(validationSchema),
  })

  const onError = (e: any) => {
    console.log('===ERROR===', e)
  }

  const onSubmit = async (data: SubmitData) => {
    const { email, password } = data

    setIsLoading(true)
    setTimeout(async () => {
      const response = (await dispatch(login({ email, password }))) as any
      // console.log('===response===', response)

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
      <AppCard elevation={10} customClass={classes.paper} minWidth={350}>
        <Grid container alignItems='center' direction='column'>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h5' className={classes.title}>
            Вхід
          </Typography>
        </Grid>

        <Form isLoading={isLoading} formFeatures={formFeatures} onSubmit={onSubmit} onError={onError} />
      </AppCard>
    </>
  )
}

export default Login
