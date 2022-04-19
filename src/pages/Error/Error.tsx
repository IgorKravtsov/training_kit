import React from 'react'
import { useStyles } from './error.styles'
import { useNavigate, Link } from 'react-router-dom'

import Button from '@mui/material/Button'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import Grid from '@mui/material/Grid'

import Error from 'components/Error/Error'

const ErrorPage: React.FC = (): React.ReactElement => {
  const classes = useStyles()
  const navigate = useNavigate()
  return (
    <>
      <Error />
      <Grid container direction='row' alignItems='center' justifyContent='center' xs={12}>
        <Button
          color='secondary'
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
