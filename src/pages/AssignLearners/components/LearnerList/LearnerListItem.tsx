import React from 'react'
import { useStyles } from './LearnerListItem.styles'

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

import { selectUser } from 'redux/slices/userSlice'
import { useAppSelector } from 'redux/hooks'

import { PublicAppUserDto } from 'api/user/types'

interface LearnerListItemProps {
  learner: PublicAppUserDto
  onClick: (learner: PublicAppUserDto) => void
}

const LearnerListItem: React.FC<LearnerListItemProps> = ({
  learner,
  onClick,
}): React.ReactElement => {
  const classes = useStyles()
  const { t } = useTranslation(['assignLearners'])

  const { learnerList } = useAppSelector(selectUser)

  const isThisUserIsAlreadyLearnerOfTrainer = !!(
    learnerList && learnerList.find((ul) => ul.id === learner.id)
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
                src={learner.photoURL || ''}
              />
            </IconButton>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h6" component="h6">
              {learner.displayName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {learner.email}
            </Typography>
          </Grid>
          <Grid item xs={3} textAlign="right">
            <Button
              onClick={() => onClick(learner)}
              disabled={isThisUserIsAlreadyLearnerOfTrainer}
            >
              {isThisUserIsAlreadyLearnerOfTrainer
                ? t('assignLearners:assignedLabel')
                : t('assignLearners:notAssignedLabel')}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default LearnerListItem
