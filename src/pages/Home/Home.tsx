import React from 'react'
import { useAuth } from 'shared-files/useAuth'

import Typography from '@mui/material/Typography'

const Home: React.FC = (): React.ReactElement => {
  const { isAuth } = useAuth()

  return (
    <>
      <Typography variant='h3' sx={{ paddingTop: '50px' }}>
        {isAuth ? 'ВОШЛИ' : 'ВЫШЛИ'}
      </Typography>
    </>
  )
}

export default Home
