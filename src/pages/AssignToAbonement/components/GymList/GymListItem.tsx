import React, { useContext, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import noPhoto from 'assets/images/no-image.png'
import { CreateTrainingsContext } from 'pages/MyTrainings/pages/CreateTrainings/CreateTrainingsContext'
import { AssignToAbonementRoutes, MyTrainingsRoutes, RouteNames } from 'routes'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { useAppDispatch } from 'redux/hooks'
import { setSelectedGym } from 'redux/slices/myTrainingsSlice'

import { Gym } from 'api/gym/types'
import { Id } from 'shared-files/types'
import { useTranslation } from 'react-i18next'

interface GymListItemProps {
  gym: Gym
  onSelectGym?: (gymId: Id) => void
}

const GymListItem: React.FC<GymListItemProps> = ({
  gym,
  onSelectGym,
}): React.ReactElement => {
  const { user } = useAuthContext()

  const { handleNext } = useContext(CreateTrainingsContext)
  const dispatch = useAppDispatch()
  const { t } = useTranslation(['assignToAbonement'])

  const [isHovered, setIsHovered] = useState(false)

  const url = useMemo(
    () =>
      `${RouteNames.ASSIGN_TO_ABONEMENT}/${user?.id}/${gym.id}/${AssignToAbonementRoutes.ABONEMENTS}`,
    [user, gym],
  )

  const handleClick = () => {
    dispatch(setSelectedGym(gym.id))
    onSelectGym && onSelectGym(gym.id)
    handleNext()
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
        image={gym.img || noPhoto}
        alt="Photo of the gym"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {gym.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {gym.address}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{ marginLeft: 'auto' }}
          color="primary"
          variant="outlined"
          size="medium"
          to={url}
          component={Link}
          onClick={handleClick}
        >
          {t('assignToAbonement:choose')}
        </Button>
      </CardActions>
    </Card>
  )
}

export default GymListItem
