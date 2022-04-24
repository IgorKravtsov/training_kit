import React, { useState } from 'react'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { Training } from 'api/training/types/training.type'
import { formatDate, formatTime, checkCanVisit } from 'utils'

import noPhoto from 'assets/images/no-image.png'

interface TrainingListProps {
  training: Training
  gymImg?: string
}

const TrainingListItem: React.FC<TrainingListProps> = ({ training, gymImg }): React.ReactElement => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card elevation={isHovered ? 12 : 6} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <CardMedia component='img' height='180' image={gymImg || noPhoto} alt='green iguana' />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {training.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {formatDate(training.trainingDate)} - {formatTime(training.trainingTime)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{ marginLeft: 'auto' }} color='secondary' variant='contained' size='medium' disabled={!checkCanVisit(training.trainingTime)}>
          Відмітити присутність
        </Button>
      </CardActions>
    </Card>
  )
}

export default TrainingListItem
