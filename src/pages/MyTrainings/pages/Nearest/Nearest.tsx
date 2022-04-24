import React, { useEffect, useState } from 'react'

import { Id } from 'shared-files/types'
import { useAuthProvider } from 'shared-files/AuthProvider/useAuthProvider'

import { useAppDispatch, useAppSelector } from 'redux/hooks/typedHooks'
import { getUserTrainings, selectTraining } from 'redux/slices/trainingSlice'
import { hideLoading, showLoading } from 'redux/slices/loadingIndicatorSlice'

import GymSection from 'pages/MyTrainings/components/GymSection/GymSection'

const Recent: React.FC = (): React.ReactElement => {
  const { user } = useAuthProvider()
  const { trainings, errors } = useAppSelector(selectTraining)
  const dispatch = useAppDispatch()

  const [daysOffset, setDaysOffset] = useState(7)

  const getTrainings = async (trainers: Id[]) => {
    const startDate = new Date()
    const endDate = new Date(startDate.getDate() + daysOffset)

    dispatch(showLoading())
    await dispatch(getUserTrainings({ trainerIds: trainers, startDate, endDate }))
    dispatch(hideLoading())
  }

  useEffect(() => {
    user?.trainers && getTrainings(user?.trainers.map(trainer => trainer.uid))
  }, [])
  return (
    <>
      {trainings?.map(training => (
        <GymSection key={training.gym.id} gymTraining={training} />
      ))}
    </>
  )
}

export default Recent
