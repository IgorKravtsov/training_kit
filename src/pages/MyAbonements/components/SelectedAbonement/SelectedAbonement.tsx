import React from 'react'
import { useStyles } from './selectedAbonement.styles'

import { useTranslation } from 'react-i18next'

import CircularProgress from '@mui/material/CircularProgress'
import Avatar from '@mui/material/Avatar'
import { Divider, Grid, Typography } from '@mui/material'

import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { useLocale } from 'shared-files/hooks'
import { formatDate } from 'utils'

import { selectLearnerAbonement } from 'redux/slices/learnerAbonementSlice'
import { useAppSelector } from 'redux/hooks'

import OptionText from '../OptionText/OptionText'

interface SelectedAbonementProps {
  isLoading: boolean
}

const SelectedAbonement: React.FC<SelectedAbonementProps> = ({
  isLoading,
}): React.ReactElement => {
  const classes = useStyles()
  const { user } = useAuthContext()

  const { t } = useTranslation(['myAbonements'])
  const { locale } = useLocale()
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
                    {t('myAbonements:price', {
                      price: selectedLearnerAbonement?.abonement?.price || 0,
                    })}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="subtitle1"
                    id="modal-modal-description"
                    sx={{ marginTop: '2px' }}
                  >
                    {t('myAbonements:daysQuantity', {
                      num:
                        selectedLearnerAbonement.abonement?.amountDays || '∞',
                    })}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="subtitle1"
                    id="modal-modal-description"
                    sx={{ marginTop: '2px' }}
                  >
                    {t('myAbonements:trainingQuantity', {
                      num:
                        selectedLearnerAbonement.abonement?.amountTrainings ||
                        '∞',
                    })}
                  </Typography>
                </Grid>
              </section>
              <Divider sx={{ mt: 2 }} />
              <section style={{ marginTop: '50px' }}>
                <Typography id="modal-modal-start-date">
                  {t('myAbonements:startDate', {
                    startDate: formatDate(
                      locale,
                      selectedLearnerAbonement.startDate,
                    ),
                  })}
                </Typography>

                <OptionText>
                  {t('myAbonements:daysLeft', {
                    num: selectedLearnerAbonement.daysLeft || '∞',
                  })}{' '}
                  (
                  {t('myAbonements:endDate', {
                    endDate: formatDate(
                      locale,
                      selectedLearnerAbonement.endDate,
                    ),
                  })}
                  )
                </OptionText>
                <OptionText>
                  {t('myAbonements:trainingsLeft', {
                    num: selectedLearnerAbonement.trainingsLeft || '∞',
                  })}
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
