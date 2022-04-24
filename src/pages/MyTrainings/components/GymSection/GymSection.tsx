import React from 'react'
import { useStyles } from './gymSection.styles'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import GymTitle from '../GymTitle'
import TrainingListItem from '../TrainingListItem'
import { GymTraining } from 'api/training/types'

interface GymSectionProps {
  gymTraining: GymTraining
}

const GymSection: React.FC<GymSectionProps> = ({ gymTraining }): React.ReactElement => {
  const classes = useStyles()
  return (
    <section className={classes.wrapper}>
      <GymTitle>{gymTraining.gym.title}</GymTitle>
      <Container component='ul' className={classes.listWrapper}>
        <Grid container direction='row' justifyContent='center' spacing={2}>
          {gymTraining.trainings.map(training => (
            <Grid item component='li' xs={10} sm={6} md={4} key={training.id}>
              <TrainingListItem training={training} gymImg={gymTraining.gym.img} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  )
}

export default GymSection
