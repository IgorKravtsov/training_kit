import React, { useEffect, useState } from 'react'
import { useStyles } from './abonement.styles'
import { Card, Container, Grid } from '@mui/material'
import SelectedAbonement from '../components/SelectedAbonement/SelectedAbonement'
import { Id } from 'shared-files/types'
import { LearnerAbonement } from 'api/abonements/types'
import { SERVER_DELAY_TIME } from 'shared-files/constants'
import { GetOneAbonementWithUserData } from 'api/abonements/abonements'
import { useAppDispatch } from 'redux/hooks'
import { error } from 'redux/slices/snackbarSlice'
import { useParams } from 'react-router-dom'

const Abonement: React.FC = (): React.ReactElement => {
  const classes = useStyles()

  const dispatch = useAppDispatch()

  const [isLoading, setIsLoading] = useState(false)
  const [selectedAbonement, setSelectedAbonement] =
    useState<LearnerAbonement | null>(null)

  const { abonementId, userId } = useParams<{
    userId: string
    abonementId: string
  }>()

  const getOneAbonementData = async (userId: Id, abonementId: Id) => {
    setIsLoading(true)
    setTimeout(async () => {
      try {
        const response = await GetOneAbonementWithUserData({
          abonementId,
          userId,
        })
        setSelectedAbonement(response.abonementWithUserData)
      } catch (err: any) {
        dispatch(error({ message: err.message }))
      } finally {
        setIsLoading(false)
      }
    }, SERVER_DELAY_TIME)
  }

  useEffect(() => {
    userId && abonementId && getOneAbonementData(userId, abonementId)
  }, [])

  return (
    <Container>
      <Grid container justifyContent="center">
        <Card className={classes.card} elevation={6}>
          <SelectedAbonement
            lAbonement={selectedAbonement}
            isLoading={isLoading}
          />
        </Card>
      </Grid>
    </Container>
  )
}

export default Abonement
