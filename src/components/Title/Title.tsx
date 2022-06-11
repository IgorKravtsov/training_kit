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

interface TitleProps {
  className?: string
}

const Title: React.FC<TitleProps> = ({
  className,
  children,
}): React.ReactElement => {
  const classes = useStyles()

  return (
    <Typography className={[classes.title, className].join(' ')}>
      {children}
    </Typography>
  )
}

export default Title
