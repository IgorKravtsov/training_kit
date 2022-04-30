import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { Abonement } from 'api/abonements/types'

interface AbonementListItemProps {
  abonement: Abonement
  onClick: () => void
}

const AbonementListItem: React.FC<AbonementListItemProps> = ({ abonement, onClick }): React.ReactElement => {
  return (
    <Card sx={{ maxWidth: 550 }} elevation={6}>
      <CardActionArea onClick={onClick}>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {abonement.title}
          </Typography>
          {abonement.options.map(option => (
            <Typography key={option.id} variant='body2' color='text.secondary'>
              {option.name}: {option.value}
            </Typography>
          ))}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default AbonementListItem
