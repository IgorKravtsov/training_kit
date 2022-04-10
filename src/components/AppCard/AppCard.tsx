import React from 'react'
import { useStyles } from './appCard.styles'

import Paper from '@mui/material/Paper'

export interface AppCardProps {
  minWidth?: number
  maxWidth?: number
  elevation?: number
  customClass?: string
}

const AppCard: React.FC<AppCardProps> = ({ minWidth, maxWidth, elevation = 10, customClass = '', children }): React.ReactElement => {
  const classes = useStyles({ minWidth, maxWidth })

  return (
    <Paper elevation={elevation} className={[classes.root, customClass].join(' ')}>
      {children}
    </Paper>
  )
}

export default AppCard
