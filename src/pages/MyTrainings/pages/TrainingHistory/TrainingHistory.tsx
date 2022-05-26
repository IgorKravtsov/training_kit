import React, { useEffect, useState } from 'react'

import LinearProgress from '@mui/material/LinearProgress'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'

import { DataGrid } from '@mui/x-data-grid'

import { Id } from 'shared-files/types'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'

import { useTrainingHistory } from './useTrainingHistory'
import CustomToolbar from 'pages/MyTrainings/components/CustomToolbar/CustomToolbar'
import { CustomNoRowsOverlay } from 'pages/MyTrainings/components/CustomNoRowsOverlay/CustomNoRowsOverlay'

import { useAppDispatch } from 'redux/hooks/typedHooks'
import { getLearnerTrainingHistory } from 'redux/slices/myTrainingsSlice'

const TrainingHistory: React.FC = (): React.ReactElement => {
  const { user } = useAuthContext()
  const { columns, rows, localizedText, rowCount } = useTrainingHistory()
  const dispatch = useAppDispatch()

  const [loading, setLoading] = useState(false)

  const getTrainingHistory = async (learnerId: Id) => {
    setLoading(true)
    await dispatch(getLearnerTrainingHistory({ learnerId }))
    setLoading(false)
  }

  useEffect(() => {
    user?.id && getTrainingHistory(user?.id)
  }, [])

  return (
    <Container>
      <Card sx={{ height: 600, width: '100%' }} elevation={4}>
        <DataGrid
          columns={columns}
          rows={rows}
          hideFooter
          loading={loading}
          localeText={localizedText}
          rowCount={rowCount}
          rowHeight={80}
          components={{
            Toolbar: CustomToolbar,
            LoadingOverlay: LinearProgress,
            NoRowsOverlay: CustomNoRowsOverlay,
          }}
        />
      </Card>
    </Container>
  )
}

export default TrainingHistory
