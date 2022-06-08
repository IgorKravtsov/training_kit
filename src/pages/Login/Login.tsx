import React, { useEffect, useState } from 'react'
import { useStyles } from './login.styles'
import { useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { RouteNames } from 'routes'

import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Alert from '@mui/material/Alert'

import FormWrapper from 'components/FormWrapper/FormWrapper'
import AppCard from 'components/AppCard/AppCard'
import { login, selectUser, setUser } from 'redux/slices/userSlice'
import { useAppDispatch } from 'redux/hooks/typedHooks'
import { error } from 'redux/slices/snackbarSlice'
import { setOrganization } from 'redux/slices/organizationSlice'

import * as api from 'api/auth/auth'

import Form from './components/Form'
import { LocalStorageKey } from 'shared-files/enums'
import { SERVER_DELAY_TIME } from 'shared-files/constants'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { useLoginValidation } from './useLoginValidation'
import { useHttpRequest } from 'shared-files/hooks'
import { LoginRequest } from 'api/auth/types'
import { AppUser } from 'api/user/types'

const Login: React.FC = (): React.ReactElement => {
  const classes = useStyles()

  const { isAuth } = useAuthContext()

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [login, _, isLoading] = useHttpRequest<LoginRequest, AppUser>(api.Login)

  const { validationSchema } = useLoginValidation()
  type SubmitData = yup.InferType<typeof validationSchema>

  const formFeatures = useForm({
    resolver: yupResolver(validationSchema),
  })

  const onError = (e: any) => {
    console.log('===ERROR===', e)
  }

  const onSubmit = async (data: SubmitData) => {
    const { email, password, organization } = data
    const response = await login({
      email,
      password,
      organizationId: organization.id,
    })
    response && dispatch(setUser(response))
  }

  useEffect(() => {
    if (isAuth) navigate(RouteNames.HOME)
  }, [isAuth])

  return (
    <>
      <AppCard elevation={10} customClass={classes.paper} minWidth={350}>
        <Grid container alignItems="center" direction="column">
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5" className={classes.title}>
            Вхід
          </Typography>
        </Grid>

        <FormWrapper
          formFeatures={formFeatures}
          onSubmit={onSubmit}
          onError={onError}
        >
          <Form />
        </FormWrapper>
      </AppCard>
      <Grid container xs={12}>
        <Alert style={{ marginLeft: '10px' }} severity="info">
          Введіть свою пошту, щоб завантажити організації
        </Alert>
      </Grid>
    </>
  )
}

export default Login
