import React, { useState } from 'react'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import {
  Training,
  CannotVisitTraining,
  CannotVisitTrainingType,
} from 'api/training/types/training.type'

import { formatDate, formatTime } from 'utils'

import noPhoto from 'assets/images/no-image.png'
import { Id } from 'shared-files/types'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { useTranslation } from 'react-i18next'
import { useLocale } from 'shared-files/hooks'

interface TrainingListProps {
  training: Training
  gymImg?: string
  onClick?: (learnerId: Id, trainingId: Id) => Promise<void>
}

const TrainingListItem: React.FC<TrainingListProps> = ({
  training,
  gymImg,
  onClick,
}): React.ReactElement => {
  const { user } = useAuthContext()
  const { t } = useTranslation(['myTrainings'])

  const { locale } = useLocale()

  const [isHovered, setIsHovered] = useState(false)

  const getBtnText = (training: Training) => {
    const { canBeVisited } = training

    if (typeof canBeVisited === 'boolean') {
      return t('myTrainings:nearest.markVisiting')
    }

    switch (canBeVisited?.type) {
      case CannotVisitTrainingType.Time:
        return t('myTrainings:nearest.wrongTime')

      case CannotVisitTrainingType.AlreadyMarked:
        return t('myTrainings:nearest.markedAlready')

      default:
        return t('myTrainings:nearest.markVisiting')
    }
  }

  const isDisabledButton = (canBeVisited: boolean | CannotVisitTraining) => {
    if (typeof canBeVisited === 'boolean') {
      return canBeVisited
    } else {
      return canBeVisited.canBeVisited
    }
  }

  return (
    <Card
      elevation={isHovered ? 12 : 6}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardMedia
        component="img"
        height="180"
        image={gymImg || noPhoto}
        alt="gym image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h4">
          {training.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {formatDate(locale, training.trainingDateTime)} {' - '}
          {formatTime(locale, training.trainingDateTime)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{ marginLeft: 'auto' }}
          color="primary"
          variant="contained"
          size="medium"
          disabled={!isDisabledButton(training?.canBeVisited || true)}
          onClick={() => onClick && onClick(user?.id || 0, training.id)}
        >
          {getBtnText(training)}
        </Button>
      </CardActions>
    </Card>
  )
}

export default TrainingListItem
