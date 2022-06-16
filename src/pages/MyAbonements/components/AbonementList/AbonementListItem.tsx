import React from 'react'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material'

import AbonementText from 'components/Text/AbonementText'

import { LearnerAbonement } from 'api/abonements/types'
import { formatDate } from 'utils'
import { useLocale } from 'shared-files/hooks'

interface AbonementListItemProps {
  learnerAbonement: LearnerAbonement
  onClick: () => void
}

const AbonementListItem: React.FC<AbonementListItemProps> = ({
  learnerAbonement,
  onClick,
}): React.ReactElement => {
  const { locale } = useLocale()
  return (
    <Card sx={{ maxWidth: 550 }} elevation={6}>
      <CardActionArea onClick={onClick}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {learnerAbonement.abonement?.title || '-'}
          </Typography>
          <AbonementText>
            Дата початку: {formatDate(locale, learnerAbonement.startDate)}
          </AbonementText>
          <AbonementText>
            Тренувань лишилось: {learnerAbonement.trainingsLeft || '∞'}
          </AbonementText>
          <AbonementText>
            Днів лишилось: {learnerAbonement.daysLeft || '∞'}
          </AbonementText>
          <AbonementText>
            Дата закінчення:{' '}
            {formatDate(locale, learnerAbonement.endDate) || '∞'}
          </AbonementText>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default AbonementListItem
