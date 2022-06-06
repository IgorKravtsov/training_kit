import React from 'react'
import { useStyles } from './selectedAbonement.styles'

import CircularProgress from '@mui/material/CircularProgress'
import Avatar from '@mui/material/Avatar'
import { Divider, Grid, Typography } from '@mui/material'
import { LearnerAbonement } from 'api/abonements/types'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { formatDate } from 'utils'

import OptionText from '../OptionText/OptionText'

interface SelectedAbonementProps {
  isLoading: boolean
  lAbonement: LearnerAbonement | null
}

const SelectedAbonement: React.FC<SelectedAbonementProps> = ({
  lAbonement,
  isLoading,
}): React.ReactElement => {
  const { user } = useAuthContext()
  const classes = useStyles()
  return (
    <>
      {isLoading ? (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className={classes.progressContainer}
        >
          <CircularProgress />
        </Grid>
      ) : (
        <Grid container direction="column">
          <Grid item xs={12} container justifyContent="center">
            {user?.selectedOrganization ? (
              <Avatar src={user?.selectedOrganization?.logo} />
            ) : (
              <Avatar>A</Avatar>
            )}
          </Grid>
          {lAbonement && (
            <>
              <Grid
                item
                xs={12}
                sx={{ textAlign: 'center', paddingTop: '30px' }}
              >
                <Typography id="modal-modal-title" variant="h4" component="h2">
                  {lAbonement.abonement.title}
                </Typography>
              </Grid>
              <section style={{ marginTop: '50px' }}>
                <Grid item xs={12}>
                  <Typography
                    variant="subtitle1"
                    id="modal-modal-description"
                    sx={{ marginTop: '2px' }}
                  >
                    Ціна: {lAbonement.abonement.price}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="subtitle1"
                    id="modal-modal-description"
                    sx={{ marginTop: '2px' }}
                  >
                    Лишилось днів: {lAbonement.daysLeft} (Дата закінчення:{' '}
                    {lAbonement.endDate})
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="subtitle1"
                    id="modal-modal-description"
                    sx={{ marginTop: '2px' }}
                  >
                    Лишилось тренувань: {lAbonement.trainingsLeft}
                  </Typography>
                </Grid>
                {/* {abonement.options.map((option) => (
                  <Grid item xs={12} key={option.id}>
                    <Typography
                      variant="subtitle1"
                      id="modal-modal-description"
                      sx={{ marginTop: '2px' }}
                    >
                      {option.name}: {option.value}
                    </Typography>
                  </Grid>
                ))} */}
              </section>
              <Divider sx={{ mt: 2 }} />
              <section style={{ marginTop: '50px' }}>
                <Typography id="modal-modal-start-date">
                  Дата початку: {formatDate(lAbonement.startDate)}
                </Typography>
                <OptionText>
                  Дата закінчення: {formatDate(lAbonement.endDate) || '-'}
                </OptionText>

                <OptionText>Лишилось днів: {lAbonement.daysLeft}</OptionText>
                <OptionText>
                  Лишилось тренувань: {lAbonement.trainingsLeft || '-'}
                </OptionText>
              </section>
            </>
          )}
        </Grid>
      )}
    </>
  )
}

export default SelectedAbonement
