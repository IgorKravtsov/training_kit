import React, { useEffect } from 'react'
import { useStyles } from './error.styles'
import { useNavigate, Link, useLocation } from 'react-router-dom'

import Button from '@mui/material/Button'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import Grid from '@mui/material/Grid'

import Error from 'components/Error/Error'
import { RouteNames } from 'routes'

const ErrorPage: React.FC = (): React.ReactElement => {
  const classes = useStyles()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === RouteNames.WELCOME) {
      navigate(RouteNames.HOME)
    }
  }, [location.pathname])

  return (
    <>
      <Error />
      <Grid container direction='row' alignItems='center' justifyContent='center' xs={12}>
        <Button
          color='primary'
          variant='outlined'
          startIcon={<ArrowBackIosNewIcon />}
          className={classes.btn}
          onClick={() => navigate(-1)}
          LinkComponent={Link}
        >
          Повернутись до останньої сторінки
        </Button>
      </Grid>
    </>
  )
}

export default ErrorPage
