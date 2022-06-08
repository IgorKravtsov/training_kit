import React, { useEffect } from 'react'
import { useStyles } from './register.styles'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from 'routes'

import { InferType } from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { useAppDispatch, useAppSelector } from 'redux/hooks'

import AppCard from 'components/AppCard/AppCard'
import Form from './components/Form'

import { register, selectUser, setUser } from 'redux/slices/userSlice'
import { error } from 'redux/slices/snackbarSlice'

// import { LocalStorageKey, UserRoles } from 'shared-files/enums'
import * as api from 'api/auth/auth'
import { RegisterRequest } from 'api/auth/types'
import { SERVER_DELAY_TIME } from 'shared-files/constants'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { useHttpRequest } from 'shared-files/hooks/useHttpRequest'
import { useRegisterValidation } from './useRegisterValidation'

const Register: React.FC = (): React.ReactElement => {
  const classes = useStyles()

  const { isAuth } = useAuthContext()

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [registerMethod, _, isLoading] = useHttpRequest(api.Register)

  const { validationSchema } = useRegisterValidation()
  type SubmitData = InferType<typeof validationSchema>

  const formFeatures = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      birthday: new Date(),

      name: 'qwe',
      lastName: 'qwe',
      confirmPass: '123',
      email: 'l@l.com',
      password: '123',
    },
  })

  const onError = (error: any) => {
    console.log('===ERROR===', error)
  }

  const onSubmit = async (data: SubmitData) => {
    const { organization, ...otherData } = data
    const request: RegisterRequest = {
      ...otherData,
      organizations: [organization.id],
    }

    const response = await registerMethod(request)
    response && dispatch(setUser(response))

    // setIsLoading(true)
    // setTimeout(async () => {
    // const response = (await dispatch(register(request))) as any

    // if (response?.meta.requestStatus !== 'rejected') {
    //   // localStorage.setItem(LocalStorageKey.RefreshToken, response.payload.refreshToken)
    //   navigate(RouteNames.HOME)
    // } else {
    //   // const message = response?.error?.message

    //   dispatch(
    //     error({
    //       message: errorMessage || 'Помилка серверу',
    //     }),
    //   )
    // }
    // setIsLoading(false)
    // }, SERVER_DELAY_TIME)
  }

  useEffect(() => {
    if (isAuth) navigate(RouteNames.HOME, { replace: true })
  }, [isAuth])

  return (
    <>
      <AppCard elevation={10} customClass={classes.paper} maxWidth={400}>
        <Grid container alignItems="center" direction="column">
          <Avatar className={classes.avatar}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography variant="h5" className={classes.title}>
            Зареєструватися
          </Typography>
        </Grid>

        <Form
          isLoading={isLoading}
          formFeatures={formFeatures}
          onSubmit={onSubmit}
          onError={onError}
        />
      </AppCard>
    </>
  )
}

export default Register
