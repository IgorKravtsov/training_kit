import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import {
  Avatar,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from '@mui/material'

import { PublicAppUserDto } from 'api/user/types'

import { useStyles } from './trainerListItem.styles'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'

interface TrainerListItemProps {
  trainer: PublicAppUserDto
  onClick: (trainer: PublicAppUserDto) => void
}

const TrainerListItem: React.FC<TrainerListItemProps> = ({
  trainer,
  onClick,
}): React.ReactElement => {
  const classes = useStyles()
  const { user } = useAuthContext()
  const { t } = useTranslation(['assignTrainers'])

  const isThisUserTrainer = !!(
    user?.trainers && user?.trainers.find((ut) => ut.id === trainer.id)
  )

  return (
    <Card className={classes.container} elevation={6}>
      <CardContent style={{ paddingBottom: '16px' }}>
        <Grid container alignItems="center">
          <Grid item xs={1}>
            <IconButton>
              <Avatar
                sizes="20"
                component={Link}
                to="#"
                src={trainer.photoURL || ''}
              />
            </IconButton>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h6" component="h6">
              {trainer.displayName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {trainer.email}
            </Typography>
          </Grid>
          <Grid item xs={3} textAlign="right">
            <Button
              onClick={() => onClick(trainer)}
              disabled={isThisUserTrainer}
            >
              {isThisUserTrainer
                ? t('assignTrainers:assignedLabel')
                : t('assignTrainers:notAssignedLabel')}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default TrainerListItem
