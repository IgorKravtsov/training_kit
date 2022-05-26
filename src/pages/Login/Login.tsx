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

import AppCard from 'components/AppCard/AppCard'
import { login, selectUser } from 'redux/slices/userSlice'
import { useAppDispatch } from 'redux/hooks/typedHooks'
import { error } from 'redux/slices/snackbarSlice'
import { setOrganization } from 'redux/slices/organizationSlice'

import Form from './components/Form'
import { LocalStorageKey } from 'shared-files/enums'
import { SERVER_DELAY_TIME } from 'shared-files/constants'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'

const Login: React.FC = (): React.ReactElement => {
  const classes = useStyles()

  const { isAuth } = useAuthContext()

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Це не є правильною поштою')
      .required('Це поле має бути заповнено'),
    password: yup
      .string()
      .min(1, 'Мінімальне кол-во символів - 1')
      .required('Це поле має бути заповнено'),
    organization: yup.mixed().required('Це поле має бути вибране'),
  })
  type SubmitData = yup.InferType<typeof validationSchema>

  const formFeatures = useForm({
    resolver: yupResolver(validationSchema),
  })

  const onError = (e: any) => {
    console.log('===ERROR===', e)
  }

  const onSubmit = async (data: SubmitData) => {
    const { email, password, organization } = data

    setIsLoading(true)
    setTimeout(async () => {
      const response = (await dispatch(
        login({ email, password, organizationId: organization.id }),
      )) as any

      if (response?.meta.requestStatus !== 'rejected') {
        dispatch(setOrganization(organization))
        // localStorage.setItem(LocalStorageKey.RefreshToken, response.payload.refreshToken)
        navigate(RouteNames.HOME)
      } else {
        const message = response?.error?.message

        dispatch(
          error({
            message: message || 'Помилка серверу',
          }),
        )
      }
      setIsLoading(false)
    }, SERVER_DELAY_TIME)
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

        <Form
          isLoading={isLoading}
          formFeatures={formFeatures}
          onSubmit={onSubmit}
          onError={onError}
        />
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
