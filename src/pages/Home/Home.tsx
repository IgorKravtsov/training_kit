import React from 'react'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { useTranslation } from 'react-i18next'

import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'

const Home: React.FC = (): React.ReactElement => {
  const { isAuth, user, role } = useAuthContext()

  const { t } = useTranslation(['home'])

  return (
    <Grid container justifyContent="center">
      <Typography variant="h3" sx={{ paddingTop: '50px' }}>
        {isAuth
          ? `${t('home:login')}, ${user?.displayName || '-'}, ${t(
              'home:withRole',
            )} ${role.toUpperCase()}`
          : t('home:logout')}
      </Typography>
    </Grid>
  )
}

export default Home
