import { GetUserAbonementsRequest } from 'api/abonements/abonements.types'
import { AppUser } from 'api/user/user.types'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks/typedHooks'
import { getUserAbonements, selectAbonement } from 'redux/slices/abonementSlice'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'

const AddAbonement: React.FC = (): React.ReactElement => {
  const { user } = useAuthContext()
  const { abonements } = useAppSelector(selectAbonement)

  const dispatch = useAppDispatch()

  const getAbonements = (user: Partial<AppUser>) => {
    const trainers = user?.trainers ? user?.trainers.map(trainer => trainer.uid) : []
    const request: GetUserAbonementsRequest = { trainers }
    const response = dispatch(getUserAbonements(request))
  }

  useEffect(() => {
    user && getAbonements(user)
  }, [])

  return (
    <div>
      <h1>Add abonement</h1>
    </div>
  )
}

export default AddAbonement
