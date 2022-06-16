import React from 'react'
import { useTranslation } from 'react-i18next'

import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from '@mui/material'

import Chip from '@mui/material/Chip'

import { Abonement } from 'api/abonements/types'
import AbonementText from 'components/Text/AbonementText'
import { Id } from 'shared-files/types'

interface AbonementListItemProps {
  abonement: Abonement
  onClick: () => void
  isSubscribed: (abonementId: Id) => boolean
}

const AbonementListItem: React.FC<AbonementListItemProps> = ({
  abonement,
  onClick,
  isSubscribed,
}): React.ReactElement => {
  const { t } = useTranslation(['assignToAbonement'])

  return (
    <Card sx={{ maxWidth: 550 }} elevation={6}>
      <CardActionArea onClick={onClick}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {abonement.title}
          </Typography>
          {/* <AbonementText>
            Дата початку: {formatDate(learnerAbonement.startDate)}
          </AbonementText> */}
          <AbonementText>
            {t('assignToAbonement:trainingQuantity', {
              num: abonement.amountTrainings || '∞',
            })}
            {/* Кількість тренувань: {abonement.amountTrainings || '∞'} */}
          </AbonementText>
          <AbonementText>
            {t('assignToAbonement:daysQuantity', {
              num: abonement.amountDays || '∞',
            })}
            {/* Кількість днів: {abonement.amountDays || '∞'} */}
          </AbonementText>
          {/* <AbonementText>Ціна: {abonement.price || '∞'}</AbonementText> */}
          <AbonementText>
            {t('assignToAbonement:price', {
              price: abonement.price || '∞',
            })}
          </AbonementText>
          {/* <AbonementText>Зал: {abonement.}</AbonementText> */}
          <AbonementText>
            {t('assignToAbonement:creator', {
              creator: abonement.creator?.displayName || 'Невідомо',
            })}
            {/* Тренер, що створив: {abonement.creator?.displayName || 'Невідомо'} */}
          </AbonementText>
          {isSubscribed(abonement.id) && (
            <Grid container justifyContent="flex-end">
              <Chip style={{ marginLeft: 'auto' }} label="Вже підписані" />
            </Grid>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default AbonementListItem
