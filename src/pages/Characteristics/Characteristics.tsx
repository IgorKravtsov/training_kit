import React, { useEffect, useState } from 'react'

import Typography from '@mui/material/Typography'

import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { useParams } from 'react-router-dom'
import { Id, PageId } from 'shared-files/types'
import { Characteristic } from 'api/characteristics/characteristic.types'
import { useAppDispatch } from 'redux/hooks/typedHooks'
import { hideLoading, showLoading } from 'redux/slices/loadingIndicatorSlice'
import { GetCharacteristicById } from 'api/characteristics/characteristic'

const Characteristics: React.FC = (): React.ReactElement => {
  const { user } = useAuthContext()
  const { id } = useParams<PageId>()

  const dispatch = useAppDispatch()

  const [characteristic, setCharacteristic] = useState<Characteristic | null>(null)

  const getCharacteristic = async (userId: Id | undefined, characteristicId: Id | undefined) => {
    if (!userId || !characteristicId) return
    dispatch(showLoading())
    setTimeout(async () => {
      const response = await GetCharacteristicById({ characteristicId, userId })
      dispatch(hideLoading())

      setCharacteristic(response.characteristic)
    }, 1000)
  }

  useEffect(() => {
    getCharacteristic(user?.uid, id)
  }, [])

  return (
    <>
      <Typography variant='h1'>{characteristic?.title}</Typography>

      <Typography variant='body2'>Тут буде графік</Typography>
    </>
  )
}

export default Characteristics
