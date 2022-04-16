import React from 'react'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'

import Typography from '@mui/material/Typography'

const Home: React.FC = (): React.ReactElement => {
  const { isAuth } = useAuthContext()

  return (
    <>
      <Typography variant='h3' sx={{ paddingTop: '50px' }}>
        {isAuth ? 'ВОШЛИ' : 'ВЫШЛИ'}
      </Typography>
    </>
  )
}

export default Home
