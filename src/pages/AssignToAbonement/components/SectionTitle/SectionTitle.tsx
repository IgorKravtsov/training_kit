import React from 'react'

import Divider from '@mui/material/Divider'
import SectionTitle from 'components/SectionTitle/SectionTitle'

const MainSection: React.FC = ({ children }): React.ReactElement => {
  return (
    <>
      <SectionTitle underline>{children}</SectionTitle>
      <Divider />
    </>
  )
}

export default MainSection
