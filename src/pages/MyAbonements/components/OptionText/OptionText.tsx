import { Typography } from '@mui/material'
import React from 'react'

interface OptionTextProps {
  id?: string
}

const OptionText: React.FC<OptionTextProps> = ({
  id,
  children,
}): React.ReactElement => {
  return (
    <Typography id={id} sx={{ marginTop: '20px' }}>
      {children}
    </Typography>
  )
}

export default OptionText
