import React from 'react'
import { useStyles } from './gymList.styles'

import Grid from '@mui/material/Grid'
import GymListItem from './GymListItem'
import { Gym } from 'api/gym/types'
import { Id } from 'shared-files/types'

interface GymListProps {
  gyms: Gym[] | null
  onSelectGym?: (gymId: Id) => void
}

const GymList: React.FC<GymListProps> = ({
  gyms,
  onSelectGym,
}): React.ReactElement => {
  const classes = useStyles()
  return (
    <Grid
      container
      direction="row"
      spacing={2}
      justifyContent="center"
      component="ul"
      className={classes.container}
    >
      {gyms &&
        gyms.map((gym) => (
          <Grid item xs={10} sm={6} md={4} key={gym.id} component="li">
            <GymListItem onSelectGym={onSelectGym} gym={gym} />
          </Grid>
        ))}
    </Grid>
  )
}

export default GymList
