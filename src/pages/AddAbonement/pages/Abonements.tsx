import React, { useEffect } from 'react'
import { AppUser } from 'api/user/user.types'
import { useAppDispatch, useAppSelector } from 'redux/hooks/typedHooks'
import { getUserAbonements, selectAbonement } from 'redux/slices/abonementSlice'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { hideLoading, showLoading } from 'redux/slices/loadingIndicatorSlice'

const Abonements: React.FC = (): React.ReactElement => {
  const { user } = useAuthContext()
  const { abonements } = useAppSelector(selectAbonement)

  const dispatch = useAppDispatch()

  const getAbonements = (user: Partial<AppUser>) => {
    const trainers = user?.trainers ? user?.trainers.map(trainer => trainer.uid) : []
    dispatch(showLoading())
    setTimeout(() => {
      const response = dispatch(getUserAbonements({ trainers }))
      dispatch(hideLoading())
    }, 3000)
  }

  useEffect(() => {
    user && getAbonements(user)
  }, [])
  return (
    <>
      {abonements?.map(abonement => (
        <h2>{abonement.title}</h2>
      ))}
    </>
  )
}

export default Abonements
