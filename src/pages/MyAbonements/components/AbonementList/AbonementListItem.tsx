import React from 'react'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material'

import AbonementText from 'components/Text/AbonementText'

import { LearnerAbonement } from 'api/abonements/types'
import { formatDate } from 'utils'
import { useLocale } from 'shared-files/hooks'
import { useTranslation } from 'react-i18next'

interface AbonementListItemProps {
  learnerAbonement: LearnerAbonement
  onClick: () => void
}

const AbonementListItem: React.FC<AbonementListItemProps> = ({
  learnerAbonement,
  onClick,
}): React.ReactElement => {
  const { t } = useTranslation(['myAbonements'])
  const { locale } = useLocale()
  return (
    <Card sx={{ maxWidth: 550 }} elevation={6}>
      <CardActionArea onClick={onClick}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {learnerAbonement.abonement?.title || '-'}
          </Typography>
          <AbonementText>
            {t('myAbonements:startDate', {
              startDate: formatDate(locale, learnerAbonement.startDate),
            })}
            {/* Дата початку: {formatDate(locale, learnerAbonement.startDate)} */}
          </AbonementText>
          <AbonementText>
            {t('myAbonements:trainingsLeft', {
              num: learnerAbonement.trainingsLeft || '∞',
            })}
            {/* Тренувань лишилось: {learnerAbonement.trainingsLeft || '∞'} */}
          </AbonementText>
          <AbonementText>
            {t('myAbonements:daysLeft', {
              num: learnerAbonement.daysLeft || '∞',
            })}
            {/* Днів лишилось: {learnerAbonement.daysLeft || '∞'} */}
          </AbonementText>
          <AbonementText>
            {t('myAbonements:endDate', {
              endDate: formatDate(locale, learnerAbonement.endDate),
            })}
            {/* Дата закінчення:{' '}
            {formatDate(locale, learnerAbonement.endDate) || '∞'} */}
          </AbonementText>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default AbonementListItem
