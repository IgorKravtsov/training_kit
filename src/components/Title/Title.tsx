import React from 'react'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

import Typography from '@mui/material/Typography'

export const useStyles = makeStyles((theme: Theme) => ({
  title: {
    ...theme.typography.h1,
    padding: '16px 24px',
  },
}))

const Title: React.FC = ({ children }): React.ReactElement => {
  const classes = useStyles()

  return <Typography className={classes.title}>{children}</Typography>
}

export default Title
