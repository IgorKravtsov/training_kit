import React from 'react'

import { GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector } from '@mui/x-data-grid'

const CustomToolbar: React.FC = (): React.ReactElement => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton color='secondary' />
      <GridToolbarFilterButton color='secondary' />
      <GridToolbarDensitySelector color='secondary' />
    </GridToolbarContainer>
  )
}

export default CustomToolbar
