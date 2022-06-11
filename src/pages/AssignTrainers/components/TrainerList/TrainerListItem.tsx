import React from 'react'
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
import { Link } from 'react-router-dom'

interface TrainerListItemProps {
  trainer: PublicAppUserDto
}

const TrainerListItem: React.FC<TrainerListItemProps> = ({
  trainer,
}): React.ReactElement => {
  const classes = useStyles()
  return (
    <Card className={classes.container} elevation={6}>
      <CardContent>
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
            <Button>Записатися</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default TrainerListItem
