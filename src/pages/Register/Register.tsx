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
import Form from './components/Form'

const Register: React.FC = (): React.ReactElement => {
  const classes = useStyles()

  const [isLoading, setIsLoading] = useState(false)

  const validationSchema = yup.object({
    email: yup.string().email('Це не є правильною поштою').required('Це поле має бути заповнено'),
    password: yup.string().min(6, 'Мінімальне кол-во символів - 6').required('Це поле має бути заповнено'),
  })
  type SubmitData = yup.InferType<typeof validationSchema>

  const formFeatures = useForm({
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = (data: SubmitData) => {}

  const onError = (error: any) => {}

  return (
    <>
      <Paper elevation={10} className={classes.paper}>
        <Grid container alignItems='center' direction='column'>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h5' className={classes.title}>
            Зареєструватися
          </Typography>
        </Grid>

        <Form isLoading={isLoading} formFeatures={formFeatures} onSubmit={onSubmit} onError={onError} />
      </Paper>
    </>
  )
}

export default Register
