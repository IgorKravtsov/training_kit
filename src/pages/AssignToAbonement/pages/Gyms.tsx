import React, { useEffect } from 'react'
import { AppUser } from 'api/user/user.types'
import { useAppDispatch, useAppSelector } from 'redux/hooks/typedHooks'
import { getLearnerGyms, selectGym } from 'redux/slices/gymSlice'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { hideLoading, showLoading } from 'redux/slices/loadingIndicatorSlice'
import { Link } from 'react-router-dom'
import { MyAbonementRoutes, RouteNames } from 'routes'

const Gyms: React.FC = (): React.ReactElement => {
  const { user } = useAuthContext()
  const { gyms } = useAppSelector(selectGym)

  const dispatch = useAppDispatch()

  const getGyms = (user: Partial<AppUser>) => {
    const trainers = user.trainers ? user.trainers?.map(trainer => trainer.uid) : []
    dispatch(showLoading())
    setTimeout(() => {
      const response = dispatch(getLearnerGyms({ trainers }))
      dispatch(hideLoading())
    }, 3000)
  }

  useEffect(() => {
    user && getGyms(user)
  }, [])

  return (
    <>
      {gyms?.map(gym => (
        <>
          <Link to={`${RouteNames.ASSIGN_TO_ABONEMENT}/${user?.uid}/${gym.id}/${MyAbonementRoutes.ABONEMENTS}`}>{gym.title}</Link>
          <br />
        </>
      ))}
    </>
  )
}

export default Gyms
