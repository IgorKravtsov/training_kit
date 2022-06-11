import React from 'react'

import { Container, Grid } from '@mui/material'
import Title from 'components/Title/Title'
import Search from './components/Search'

const AddTrainers: React.FC = (): React.ReactElement => {
  return (
    <>
      <Container component="section" sx={{ mt: 3 }}>
        <Grid container justifyContent="center">
          <Title>Додати тренера</Title>
          <Search />
        </Grid>
      </Container>
    </>
  )
}

export default AddTrainers
