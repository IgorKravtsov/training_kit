import React from 'react'
import { useStyles } from './error.styles'
import { useNavigate } from 'react-router-dom'

import Error from 'components/Error/Error'
import Button from '@mui/material/Button'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import Grid from '@mui/material/Grid'

const ErrorPage: React.FC = (): React.ReactElement => {
  const classes = useStyles()
  const navigate = useNavigate()
  return (
    <>
      <Error />
      <Grid container direction='row' alignItems='center' justifyContent='center' xs={12}>
        <Button variant='outlined' startIcon={<ArrowBackIosNewIcon />} className={classes.btn} onClick={() => navigate(-1)}>
          Повернутись до останньої сторінки
        </Button>
      </Grid>
    </>
  )
}

export default ErrorPage
