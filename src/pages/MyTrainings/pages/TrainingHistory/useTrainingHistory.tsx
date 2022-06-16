import { useMemo } from 'react'
import { useStyles } from './trainingHistory.styles'

import { useTranslation } from 'react-i18next'

import { GridColDef } from '@mui/x-data-grid'

import { Training } from 'api/training/types'
import { PublicAppUserDto } from 'api/user/types'

import { useAppSelector } from 'redux/hooks/typedHooks'
import { selectMyTrainings } from 'redux/slices/myTrainingsSlice'

import { Id } from 'shared-files/types'
import { useLocale } from 'shared-files/hooks'

import { formatDate, formatTime } from 'utils'

import { useLocalizationGrid } from './useLocalizationGrid'
import { Locale } from 'date-fns'

// export const useTrainingHistory = (learnerTrainingHistory: Training[] | null) => {
export const useTrainingHistory = () => {
  const classes = useStyles()
  const { learnerTrainingHistory } = useAppSelector(selectMyTrainings)

  const { t } = useTranslation(['myTrainings'])

  const { locale } = useLocale()
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
    locale: Locale,
  ): TrainingHistoryRows[] => {
    if (!learnerTrainingHistory) return []

    return learnerTrainingHistory.map((item) => ({
      id: item.id,
      gymTitle: `${item.gym?.title} (${item.gym?.address})` || '-',
      title: item.title,
      trainers: concatStrings(item.trainers),
      trainingDate: `${formatDate(
        locale,
        item.trainingDateTime,
      )} - ${formatTime(locale, item.trainingDateTime)}`,
    }))
  }

  const rows = useMemo(
    () => transformRows(learnerTrainingHistory, locale),
    [learnerTrainingHistory, locale],
  )

  const columns: GridColDef[] = [
    {
      field: 'title',
      headerName: t('myTrainings:trainingHistory.gridTitle'),
      minWidth: 300,
      // maxWidth: 400,
      headerClassName: classes.header,
    },
    {
      field: 'gymTitle',
      headerName: t('myTrainings:trainingHistory.gridGym'),
      minWidth: 340,
      // maxWidth: 400,
    },
    {
      field: 'trainingDate',
      headerName: t('myTrainings:trainingHistory.gridTrainingDate'),
      minWidth: 200,
      // maxWidth: 400,
    },
    {
      field: 'trainers',
      headerName: t('myTrainings:trainingHistory.gridTrainers'),
      minWidth: 200,
      // maxWidth: 400,
      headerAlign: 'right',
      align: 'right',
    },
  ]

  return { columns, rows, localizedText, rowCount: rows.length }
}
