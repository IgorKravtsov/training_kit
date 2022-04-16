import React from 'react'

import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

import { BackdropProps } from '@mui/material'

export interface LoadingIndicatorProps extends BackdropProps {}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ ...otherProps }): React.ReactElement => {
  return (
    <Backdrop sx={{ color: theme => theme.palette.secondary.main, zIndex: theme => theme.zIndex.drawer + 1 }} {...otherProps}>
      <CircularProgress color='inherit' />
    </Backdrop>
  )
}

export default LoadingIndicator
