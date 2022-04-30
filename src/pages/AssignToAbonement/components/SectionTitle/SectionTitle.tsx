import React from 'react'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import SectionTitle from 'components/SectionTitle/SectionTitle'

const useStyles = makeStyles((theme: Theme) => ({
  section: {
    textAlign: 'center',
  },
}))

const MainSection: React.FC = ({ children }): React.ReactElement => {
  return (
    <>
      <SectionTitle underline>{children}</SectionTitle>
      <Divider />
    </>
  )
}

export default MainSection
