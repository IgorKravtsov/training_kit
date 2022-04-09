import React, { useState } from 'react'
import { useStyles } from './login.styles'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useNavigate } from 'react-router-dom'

import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { RouteNames } from '../../routes'
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
      const response = await dispatch(login({ email, password }))
      // console.log('===response===', response)

      if (response?.meta.requestStatus !== 'rejected') {
        navigate(RouteNames.HOME)
      } else {
        dispatch(
          error({
            message: userError || 'Помилка серверу',
          })
        )
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <>
      <Paper elevation={10} className={classes.paper}>
        <Grid container alignItems='center' direction='column'>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h5' className={classes.title}>
            Вхід
          </Typography>
        </Grid>

        <Form isLoading={isLoading} formFeatures={formFeatures} onSubmit={onSubmit} onError={onError} />
      </Paper>
    </>
  )
}

export default Login
