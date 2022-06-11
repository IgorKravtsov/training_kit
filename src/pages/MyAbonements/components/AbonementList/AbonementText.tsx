import React from 'react'
import { Typography } from '@mui/material'

const AbonementText: React.FC = ({ children }): React.ReactElement => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      style={{ marginTop: '2px' }}
    >
      {children}
    </Typography>
  )
}

export default AbonementText
