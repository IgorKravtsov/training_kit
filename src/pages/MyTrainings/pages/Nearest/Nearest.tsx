import React, { useCallback, useEffect, useState } from 'react'

import { Id } from 'shared-files/types'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'

import { useAppDispatch, useAppSelector } from 'redux/hooks/typedHooks'
import {
  getUserTrainings,
  markVisitTraining,
  selectTraining,
} from 'redux/slices/trainingSlice'
import { hideLoading, showLoading } from 'redux/slices/loadingIndicatorSlice'

import GymSection from 'pages/MyTrainings/components/GymSection/GymSection'
import { Alert, Container } from '@mui/material'

const Recent: React.FC = (): React.ReactElement => {
  const { user } = useAuthContext()
  const { trainings, errors } = useAppSelector(selectTraining)
  const dispatch = useAppDispatch()

  const trainingsExist = trainings && trainings?.length > 0

  const [daysOffset, setDaysOffset] = useState(7)

  const getTrainings = async (learnerId: Id) => {
    const startDate = new Date()
    const endDate = new Date()
    endDate.setDate(startDate.getDate() + daysOffset)

    dispatch(showLoading())
    await dispatch(
      getUserTrainings({
        learnerId,
        startDate: startDate.toISOString().substring(0, 10),
        endDate: endDate.toISOString().substring(0, 10),
      }),
    )
    dispatch(hideLoading())
  }

  const markVisit = useCallback(
    async (learnerId: Id, trainingId: Id) => {
      dispatch(showLoading())
      await dispatch(markVisitTraining({ userId: learnerId, trainingId }))
      await getTrainings(learnerId)
      dispatch(hideLoading())
    },
    [user, markVisitTraining, getTrainings],
  )

  useEffect(() => {
    user && getTrainings(user?.id || 0)
  }, [])

  return (
    <>
      {trainingsExist ? (
        trainings?.map((training) => (
          <GymSection
            key={training.gym.id}
            gymTraining={training}
            onClick={markVisit}
          />
        ))
      ) : (
        <Container>
          <Alert severity="info" sx={{ ta: 'center' }}>
            {user?.trainers && user?.trainers.length > 1
              ? 'Ваші тренери не створили'
              : 'Ваш тренер не створив'}{' '}
            жодних тренувань в діапазоні {daysOffset} днів.
          </Alert>
        </Container>
      )}
    </>
  )
}

export default Recent
