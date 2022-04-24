import { GridColDef } from '@mui/x-data-grid'
import { Training } from 'api/training/types'
import { useMemo } from 'react'
import { useAppSelector } from 'redux/hooks/typedHooks'
import { selectTraining } from 'redux/slices/trainingSlice'
import { Id } from 'shared-files/types'

// export const useTrainingHistory = (learnerTrainingHistory: Training[] | null) => {
export const useTrainingHistory = () => {
  const { learnerTrainingHistory } = useAppSelector(selectTraining)
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
      trainingDate: item.trainingDate,
    }))
  }

  const rows = useMemo(() => transformRows(learnerTrainingHistory), [learnerTrainingHistory])

  const columns: GridColDef[] = [
    {
      field: 'title',
      headerName: 'Назва тренування',
      // sortable: true,
    },
    {
      field: 'gymTitle',
      headerName: 'Зал',
    },
    {
      field: 'trainingDate',
      headerName: 'Дата тренування',
    },
    {
      field: 'trainer',
      headerName: 'Тренер',
    },
  ]

  return { columns, rows }
}
