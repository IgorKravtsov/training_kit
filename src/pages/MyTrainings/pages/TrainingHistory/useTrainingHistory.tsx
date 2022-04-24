import { GridColDef } from '@mui/x-data-grid'
import { useStyles } from './trainingHistory.styles'
import { Training } from 'api/training/types'
import { useMemo } from 'react'
import { useAppSelector } from 'redux/hooks/typedHooks'
import { selectTraining } from 'redux/slices/trainingSlice'
import { Id } from 'shared-files/types'
import { formatDate, formatTime } from 'utils'
import { useLocalizationGrid } from './useLocalizationGrid'

// export const useTrainingHistory = (learnerTrainingHistory: Training[] | null) => {
export const useTrainingHistory = () => {
  const classes = useStyles()
  const { learnerTrainingHistory } = useAppSelector(selectTraining)
  const localizedText = useLocalizationGrid()

  interface TrainingHistoryRows {
    id: Id
    title: string
    gymTitle: string
    trainingDate: string | Date
    trainer: string
  }

  const transformRows = (learnerTrainingHistory: Training[] | null): TrainingHistoryRows[] => {
    if (!learnerTrainingHistory) return []
    return learnerTrainingHistory.map(item => ({
      id: item.id,
      gymTitle: item.gym?.title || '-',
      title: item.title,
      trainer: item.trainer.displayName || '-',
      trainingDate: `${formatDate(item.trainingDate)} - ${formatTime(item.trainingTime)}`,
    }))
  }

  const rows = useMemo(() => transformRows(learnerTrainingHistory), [learnerTrainingHistory])

  const columns: GridColDef[] = [
    {
      field: 'title',
      headerName: 'Назва тренування',
      minWidth: 300,
      maxWidth: 400,
      headerClassName: classes.header,
    },
    {
      field: 'gymTitle',
      headerName: 'Зал',
      minWidth: 200,
      maxWidth: 400,
    },
    {
      field: 'trainingDate',
      headerName: 'Дата тренування',
      minWidth: 300,
      maxWidth: 400,
    },
    {
      field: 'trainer',
      headerName: 'Тренер',
      minWidth: 200,
      maxWidth: 400,
      headerAlign: 'right',
      align: 'right',
    },
  ]

  return { columns, rows, localizedText, rowCount: rows.length }
}
