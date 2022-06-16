import React, { useEffect, useState } from 'react'

import Typography from '@mui/material/Typography'

import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { useParams } from 'react-router-dom'
import { Id } from 'shared-files/types'
import { useAppDispatch } from 'redux/hooks/typedHooks'
import { hideLoading, showLoading } from 'redux/slices/loadingIndicatorSlice'
import { GetCharacteristicById } from 'api/characteristic/characteristic'
import { Characteristic } from 'api/characteristic/types'
import ChartSection from './components/ChartSection'
import Container from '@mui/material/Container'
import { error } from 'redux/slices/snackbarSlice'
import { SERVER_DELAY_TIME } from 'shared-files/constants'
import { useHttpRequest } from 'shared-files/hooks'

const Characteristics: React.FC = (): React.ReactElement => {
  const { user } = useAuthContext()
  const { characteristicId } = useParams<{ characteristicId: string }>()

  const [getCharacteristicById] = useHttpRequest(GetCharacteristicById)

  const [characteristic, setCharacteristic] = useState<Characteristic | null>(
    null,
  )

  const getCharacteristic = async (
    userId: Id | undefined,
    characteristicId: Id | undefined,
  ) => {
    if (!userId || !characteristicId) return
    const response = await getCharacteristicById({ characteristicId, userId })
    response && setCharacteristic(response.characteristic)
  }

  useEffect(() => {
    getCharacteristic(user?.id, characteristicId)
  }, [characteristicId, user?.id])

  return (
    <Container sx={{ textAlign: 'center' }}>
      <Typography variant="h1">{characteristic?.title}</Typography>
      {characteristic && (
        <ChartSection
          values={characteristic.data?.values || []}
          labels={characteristic.data?.labels || []}
        />
      )}
    </Container>
  )
}

export default Characteristics
