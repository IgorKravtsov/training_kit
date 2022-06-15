import React from 'react'
import { useStyles } from './selectedAbonement.styles'

import CircularProgress from '@mui/material/CircularProgress'
import Avatar from '@mui/material/Avatar'
import { Divider, Grid, Typography } from '@mui/material'
import { LearnerAbonement } from 'api/abonements/types'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { formatDate } from 'utils'

import OptionText from '../OptionText/OptionText'
import { selectLearnerAbonement } from 'redux/slices/learnerAbonementSlice'
import { useAppSelector } from 'redux/hooks'

interface SelectedAbonementProps {
  isLoading: boolean
}

const SelectedAbonement: React.FC<SelectedAbonementProps> = ({
  isLoading,
}): React.ReactElement => {
  const classes = useStyles()
  const { user } = useAuthContext()

  const { selectedLearnerAbonement } = useAppSelector(selectLearnerAbonement)

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
          {selectedLearnerAbonement && (
            <>
              <Grid
                item
                xs={12}
                sx={{ textAlign: 'center', paddingTop: '30px' }}
              >
                <Typography id="modal-modal-title" variant="h4" component="h2">
                  {selectedLearnerAbonement?.abonement?.title || '-'}
                </Typography>
              </Grid>
              <section style={{ marginTop: '50px' }}>
                <Grid item xs={12}>
                  <Typography
                    variant="subtitle1"
                    id="modal-modal-description"
                    sx={{ marginTop: '2px' }}
                  >
                    Ціна: {selectedLearnerAbonement?.abonement?.price || 0}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="subtitle1"
                    id="modal-modal-description"
                    sx={{ marginTop: '2px' }}
                  >
                    Всього днів:{' '}
                    {selectedLearnerAbonement.abonement?.amountDays || '∞'}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="subtitle1"
                    id="modal-modal-description"
                    sx={{ marginTop: '2px' }}
                  >
                    Всього тренувань:{' '}
                    {selectedLearnerAbonement.abonement?.amountTrainings || '∞'}
                  </Typography>
                </Grid>
              </section>
              <Divider sx={{ mt: 2 }} />
              <section style={{ marginTop: '50px' }}>
                <Typography id="modal-modal-start-date">
                  Дата початку: {formatDate(selectedLearnerAbonement.startDate)}
                </Typography>
                {/* <OptionText>
                  Дата закінчення:{' '}
                  {formatDate(selectedLearnerAbonement.endDate) || '∞'}
                </OptionText> */}

                <OptionText>
                  Лишилось днів: {selectedLearnerAbonement.daysLeft || '∞'}{' '}
                  {selectedLearnerAbonement.daysLeft &&
                    `(Дата закінчення: ${formatDate(
                      selectedLearnerAbonement.endDate,
                    )})`}
                </OptionText>
                <OptionText>
                  Лишилось тренувань:{' '}
                  {selectedLearnerAbonement.trainingsLeft || '∞'}
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
