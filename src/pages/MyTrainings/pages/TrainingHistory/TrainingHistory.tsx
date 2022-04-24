import React, { useEffect, useRef, useState } from 'react'
import { useStyles } from './trainingHistory.styles'

import LinearProgress from '@mui/material/LinearProgress'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'

import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { useAppDispatch, useAppSelector } from 'redux/hooks/typedHooks'
import { getLearnerTrainingHistory, selectTraining } from 'redux/slices/trainingSlice'

import { useTrainingHistory } from './useTrainingHistory'
import { Id } from 'shared-files/types'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { useTheme } from '@mui/material'
import { useLocalizationGrid } from './useLocalizationGrid'
import CustomToolbar from './components/CustomToolbar'

const TrainingHistory: React.FC = (): React.ReactElement => {
  const classes = useStyles()
  const { user } = useAuthContext()
  const { columns, rows, localizedText, rowCount } = useTrainingHistory()

  const dispatch = useAppDispatch()

  const [loading, setLoading] = useState(false)

  const getTrainingHistory = async (learnerId: Id) => {
    setLoading(true)
    setTimeout(async () => {
      await dispatch(getLearnerTrainingHistory({ learnerId }))
      setLoading(false)
    }, 1000)
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
