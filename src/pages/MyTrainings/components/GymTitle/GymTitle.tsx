import React from 'react'

import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import SectionTitle from 'components/SectionTitle/SectionTitle'

const GymTitle: React.FC = ({ children }): React.ReactElement => {
  return (
    <Container component='section'>
      <SectionTitle underline>{children}</SectionTitle>
      <Divider />
    </Container>
  )
}

export default GymTitle
