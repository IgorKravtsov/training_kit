import React, { useEffect, useState } from 'react'
import { useStyles } from './login.styles'

import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

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
import { setUser } from 'redux/slices/userSlice'
import { useAppDispatch } from 'redux/hooks/typedHooks'

import * as api from 'api/auth/auth'

import Form from './components/Form'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { useLoginValidation } from './useLoginValidation'
import { useHttpRequest } from 'shared-files/hooks'

const Login: React.FC = (): React.ReactElement => {
  const classes = useStyles()

  const { isAuth } = useAuthContext()

  const { t } = useTranslation(['login'])
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [login] = useHttpRequest(api.Login, {
    shouldShowLoading: false,
  })

  const { validationSchema } = useLoginValidation()
  type SubmitData = yup.InferType<typeof validationSchema>

  const formFeatures = useForm({
    resolver: yupResolver(validationSchema),
  })

  const [isLoading, setisLoading] = useState(false)

  const onError = (e: any) => {
    console.log('===ERROR===', e)
  }

  const onSubmit = async (data: SubmitData) => {
    const { email, password, organization } = data
    setisLoading(true)
    const response = await login({
      email,
      password,
      organizationId: organization.id,
    })
    setisLoading(false)
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
            {t('login:title')}
          </Typography>
        </Grid>

        <FormWrapper
          formFeatures={formFeatures}
          onSubmit={onSubmit}
          onError={onError}
        >
          <Form isLoading={isLoading} />
        </FormWrapper>
      </AppCard>
      <Grid container xs={12}>
        <Alert style={{ marginLeft: '10px' }} severity="info">
          {t('login:infoAlert')}
        </Alert>
      </Grid>
    </>
  )
}

export default Login
