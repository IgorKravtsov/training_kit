import React, { useEffect, useState } from 'react'
import { useStyles } from './trainingHistory.styles'

import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { useAppDispatch, useAppSelector } from 'redux/hooks/typedHooks'
import { getLearnerTrainingHistory, selectTraining } from 'redux/slices/trainingSlice'

import { useTrainingHistory } from './useTrainingHistory'
import { hideLoading, showLoading } from 'redux/slices/loadingIndicatorSlice'
import { Id } from 'shared-files/types'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { useTheme } from '@mui/material'
import CustomToolbar from './components/CustomToolbar'
import { useLocalizationGrid } from './useLocalizationGrid'

const TrainingHistory: React.FC = (): React.ReactElement => {
  const classes = useStyles()
  const { user } = useAuthContext()
  const { learnerTrainingHistory } = useAppSelector(selectTraining)
  const { columns, rows } = useTrainingHistory()
  const localizedText = useLocalizationGrid()
  const theme = useTheme()

  const dispatch = useAppDispatch()

  const [loading, setLoading] = useState(false)

  const getTrainingHistory = async (learnerId: Id) => {
    setLoading(true)
    await dispatch(getLearnerTrainingHistory({ learnerId }))
    setLoading(false)
  }

  useEffect(() => {
    user?.uid && getTrainingHistory(user?.uid)
  }, [])

  useEffect(() => {
    console.log('===rows===', rows)
  }, [rows])

  return (
    <Box sx={{ height: 400, bgcolor: 'background.paper' }}>
      <DataGrid
        columns={columns}
        rows={rows}
        hideFooter
        loading={loading}
        localeText={localizedText}
        components={{
          Toolbar: CustomToolbar,
          LoadingOverlay: LinearProgress,
        }}
        componentsProps={{
          panel: { className: classes.panel },
        }}
      />
    </Box>
  )
}

export default TrainingHistory
