import React, { useContext, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import noPhoto from 'assets/images/no-image.png'
import { CreateTrainingsContext } from 'pages/MyTrainings/pages/CreateTrainings/CreateTrainingsContext'
import { MyTrainingsRoutes, RouteNames } from 'routes'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'

import { Gym } from 'api/gym/types'

interface GymListItemProps {
  gym: Gym
}

const GymListItem: React.FC<GymListItemProps> = ({ gym }): React.ReactElement => {
  const { handleNext } = useContext(CreateTrainingsContext)
  const { user } = useAuthContext()
  const [isHovered, setIsHovered] = useState(false)

  const url = useMemo(() => `${RouteNames.MY_TRAININGS}/${user?.uid}/${MyTrainingsRoutes.CREATE_TRAININGS}/${gym.id}`, [user, gym])

  return (
    <Card elevation={isHovered ? 12 : 6} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <CardMedia component='img' height='180' image={gym.img || noPhoto} alt='Photo of the gym' />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {gym.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {gym.address}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{ marginLeft: 'auto' }} color='primary' variant='outlined' size='medium' to={url} component={Link} onClick={handleNext}>
          Обрати
        </Button>
      </CardActions>
    </Card>
  )
}

export default GymListItem
