import React from 'react'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import { useStyles } from './loadingSkeleton.styles'

const LoadingSkeleton: React.FC = (): React.ReactElement => {
  const classes = useStyles()
  return (
    <Stack spacing={1} className={classes.container}>
      <Skeleton variant='text' />
      <Skeleton variant='circular' width={40} height={40} />
      <Skeleton variant='rectangular' width={210} height={118} />
    </Stack>
  )
}

export default LoadingSkeleton
