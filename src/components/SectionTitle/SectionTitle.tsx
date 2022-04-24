import React from 'react'
import { useStyles } from './sectionTitle.styles'

import Typography from '@mui/material/Typography'

export interface SectionTitleProps {
  underline?: boolean
  className?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ underline, className, children }): React.ReactElement => {
  const classes = useStyles({ underline })

  return <Typography className={[classes.title, className ? className : ''].join(' ')}>{children}</Typography>
}

export default SectionTitle
