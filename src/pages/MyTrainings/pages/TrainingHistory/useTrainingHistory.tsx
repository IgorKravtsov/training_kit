import { GridColDef } from '@mui/x-data-grid'
import { useStyles } from './trainingHistory.styles'
import { Training } from 'api/training/types'
import { useMemo } from 'react'
import { useAppSelector } from 'redux/hooks/typedHooks'
import { selectTraining } from 'redux/slices/trainingSlice'
import { Id } from 'shared-files/types'
import { formatDate, formatTime } from 'utils'
import { useLocalizationGrid } from './useLocalizationGrid'
import { selectMyTrainings } from 'redux/slices/myTrainingsSlice'
import { PublicAppUserDto } from 'api/user/types'

// export const useTrainingHistory = (learnerTrainingHistory: Training[] | null) => {
export const useTrainingHistory = () => {
  const classes = useStyles()
  const { learnerTrainingHistory } = useAppSelector(selectMyTrainings)
  const localizedText = useLocalizationGrid()

  interface TrainingHistoryRows {
    id: Id
    title: string
    gymTitle: string
    trainingDate: string | Date
    trainers: string
  }

  const concatStrings = (arr: PublicAppUserDto[]) => {
    let res = ''
    arr.forEach((user, index) => {
      res =
        index !== arr.length - 1
          ? res.concat(`${user.displayName} ,` || '')
          : res.concat(user.displayName || '')
    })
    return res
  }

  const transformRows = (
    learnerTrainingHistory: Training[] | null,
  ): TrainingHistoryRows[] => {
    if (!learnerTrainingHistory) return []

    return learnerTrainingHistory.map((item) => ({
      id: item.id,
      gymTitle: `${item.gym?.title} (${item.gym?.address})` || '-',
      title: item.title,
      trainers: concatStrings(item.trainers),
      trainingDate: `${formatDate(item.trainingDateTime)} - ${formatTime(
        item.trainingDateTime,
      )}`,
    }))
  }

  const rows = useMemo(
    () => transformRows(learnerTrainingHistory),
    [learnerTrainingHistory],
  )

  const columns: GridColDef[] = [
    {
      field: 'title',
      headerName: 'Назва тренування',
      minWidth: 300,
      // maxWidth: 400,
      headerClassName: classes.header,
    },
    {
      field: 'gymTitle',
      headerName: 'Зал',
      minWidth: 340,
      // maxWidth: 400,
    },
    {
      field: 'trainingDate',
      headerName: 'Дата тренування',
      minWidth: 200,
      // maxWidth: 400,
    },
    {
      field: 'trainers',
      headerName: 'Тренер',
      minWidth: 200,
      // maxWidth: 400,
      headerAlign: 'right',
      align: 'right',
    },
  ]

  return { columns, rows, localizedText, rowCount: rows.length }
}
