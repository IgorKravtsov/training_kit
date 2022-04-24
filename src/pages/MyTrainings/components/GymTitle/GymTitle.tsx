import React from 'react'
import { useStyles } from './gymTitle.styles'

import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'

const GymTitle: React.FC = ({ children }): React.ReactElement => {
  const classes = useStyles()
  return (
    <Container component='section'>
      <Typography className={classes.title}>{children}</Typography>
      <Divider />
    </Container>
  )
}

export default GymTitle
