import React from 'react'
import { Outlet } from 'react-router-dom'

import Typography from '@mui/material/Typography'

const AddAbonement: React.FC = (): React.ReactElement => {
  return (
    <>
      <Typography variant='h1'>Add abonement</Typography>
      <Outlet />
    </>
  )
}

export default AddAbonement
