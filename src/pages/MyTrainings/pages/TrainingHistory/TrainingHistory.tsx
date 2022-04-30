import React, { useEffect, useState } from 'react'

import LinearProgress from '@mui/material/LinearProgress'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'

import { DataGrid } from '@mui/x-data-grid'
import { useAppDispatch } from 'redux/hooks/typedHooks'

import { Id } from 'shared-files/types'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'

import { useTrainingHistory } from './useTrainingHistory'
import CustomToolbar from 'pages/MyTrainings/components/CustomToolbar/CustomToolbar'
import { getLearnerTrainingHistory } from 'redux/slices/myTrainingsSlice'
import { SERVER_DELAY_TIME } from 'shared-files/constants'

const TrainingHistory: React.FC = (): React.ReactElement => {
  const { user } = useAuthContext()
  const { columns, rows, localizedText, rowCount } = useTrainingHistory()

  const dispatch = useAppDispatch()

  const [loading, setLoading] = useState(false)

  const getTrainingHistory = async (learnerId: Id) => {
    setLoading(true)
    setTimeout(async () => {
      await dispatch(getLearnerTrainingHistory({ learnerId }))
      setLoading(false)
    }, SERVER_DELAY_TIME)
  }

  useEffect(() => {
    user?.uid && getTrainingHistory(user?.uid)
  }, [])

  return (
    <Container>
      <Card sx={{ height: 600 }} elevation={4}>
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
          }}
        />
      </Card>
    </Container>
  )
}

export default TrainingHistory
