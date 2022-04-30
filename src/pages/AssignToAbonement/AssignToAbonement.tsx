import React from 'react'
import { Outlet } from 'react-router-dom'

import Title from 'components/Title/Title'

const AddAbonement: React.FC = (): React.ReactElement => {
  return (
    <>
      <Title>Підписатися на абонімент</Title>
      <Outlet />
    </>
  )
}

export default AddAbonement
