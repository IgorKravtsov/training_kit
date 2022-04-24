import React from 'react'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Avatar from '@mui/material/Avatar'

export const useStyles = makeStyles((theme: Theme) => ({
  title: {
    ...theme.typography.h2,
    textDecoration: 'underline',
    margin: '0 auto',
    fontSize: '42px',
    lineHeight: '2',
  },
}))

const GymTitle: React.FC = ({ children }): React.ReactElement => {
  const classes = useStyles()
  return (
    <Container component='section'>
      {/* <Avatar /> */}
      <Typography className={classes.title}>{children}</Typography>
      <Divider />
    </Container>
  )
}

export default GymTitle
