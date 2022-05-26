import React from 'react'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'

import Typography from '@mui/material/Typography'

const Home: React.FC = (): React.ReactElement => {
  const { isAuth, user, role } = useAuthContext()

  return (
    <>
      <Typography variant="h3" sx={{ paddingTop: '50px' }}>
        {isAuth
          ? `ВОШЛИ, ${user?.displayName || '-'} з роллю ${role}`
          : 'ВЫШЛИ'}
      </Typography>
    </>
  )
}

export default Home
