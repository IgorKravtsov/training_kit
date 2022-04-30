import React from 'react'
import { useStyles } from './selectedAbonement.styles'

import CircularProgress from '@mui/material/CircularProgress'
import Avatar from '@mui/material/Avatar'
import { Divider, Grid, Typography } from '@mui/material'
import { AbonementWithUserData } from 'api/abonements/types'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { formatDate } from 'utils'

interface SelectedAbonementProps {
  isLoading: boolean
  abonement: AbonementWithUserData | null
}

const SelectedAbonement: React.FC<SelectedAbonementProps> = ({ abonement, isLoading }): React.ReactElement => {
  const { user } = useAuthContext()
  const classes = useStyles()
  return (
    <>
      {isLoading ? (
        <Grid container justifyContent='center' alignItems='center' className={classes.progressContainer}>
          <CircularProgress />
        </Grid>
      ) : (
        <Grid container direction='column'>
          <Grid item xs={12} container justifyContent='center'>
            {user?.selectedOrganization ? <Avatar src={user?.selectedOrganization?.logo} /> : <Avatar>A</Avatar>}
          </Grid>
          {abonement && (
            <>
              <Grid item xs={12} sx={{ textAlign: 'center', paddingTop: '30px' }}>
                <Typography id='modal-modal-title' variant='h4' component='h2'>
                  {abonement.title}
                </Typography>
              </Grid>
              <section style={{ marginTop: '50px' }}>
                {abonement.options.map(option => (
                  <Grid item xs={12} key={option.id}>
                    <Typography variant='subtitle1' id='modal-modal-description' sx={{ marginTop: '2px' }}>
                      {option.name}: {option.value}
                    </Typography>
                  </Grid>
                ))}
              </section>
              <Divider sx={{ mt: 2 }} />
              <section style={{ marginTop: '50px' }}>
                <Typography id='modal-modal-start-date'>Дата початку: {formatDate(abonement.startDate)}</Typography>
                <Typography id='modal-modal-end-date' sx={{ marginTop: '5px' }}>
                  Дата закінчення: {formatDate(abonement.endDate) || '-'}
                </Typography>

                <Typography id='modal-modal-days-left' sx={{ marginTop: '20px' }}>
                  Лишилось днів: {abonement.daysLeft}
                </Typography>
                <Typography id='modal-modal-trainings-left' sx={{ marginTop: '5px' }}>
                  Лишилось тренувань: {abonement.trainingsLeft || '-'}
                </Typography>
              </section>
            </>
          )}
        </Grid>
      )}
    </>
  )
}

export default SelectedAbonement
