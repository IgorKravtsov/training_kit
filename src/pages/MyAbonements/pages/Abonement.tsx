import React, { useEffect, useState } from 'react'
import { useStyles } from './abonement.styles'
import { Avatar, Card, Container, Grid, Stack } from '@mui/material'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import SelectedAbonement from '../components/SelectedAbonement/SelectedAbonement'
import { Id } from 'shared-files/types'
import { AbonementWithUserData } from 'api/abonements/types'
import { SERVER_DELAY_TIME } from 'shared-files/constants'
import { GetOneAbonementWithUserData } from 'api/abonements/abonements'
import { useAppDispatch } from 'redux/hooks'
import { error } from 'redux/slices/snackbarSlice'
import { useParams } from 'react-router-dom'

const Abonement: React.FC = (): React.ReactElement => {
  const classes = useStyles()
  const { user } = useAuthContext()

  const dispatch = useAppDispatch()

  const [isLoading, setIsLoading] = useState(false)
  const [selectedAbonement, setSelectedAbonement] = useState<AbonementWithUserData | null>(null)

  const { abonementId } = useParams<{ userId: string; abonementId: string }>()

  const getOneAbonementData = async (abonementId: Id) => {
    setIsLoading(true)
    setTimeout(async () => {
      try {
        const response = await GetOneAbonementWithUserData({ abonementId })
        setSelectedAbonement(response.abonementWithUserData)
      } catch (err: any) {
        dispatch(error({ message: err.message }))
      } finally {
        setIsLoading(false)
      }
    }, SERVER_DELAY_TIME)
  }

  useEffect(() => {
    abonementId && getOneAbonementData(abonementId)
  }, [])

  return (
    <Container>
      <Grid container justifyContent='center'>
        <Card className={classes.card}>
          <SelectedAbonement abonement={selectedAbonement} isLoading={isLoading} />
          {/* <Grid container justifyContent='center' alignItems='center' className={classes.container}>
        <Grid item xs={12}>
          <Card elevation={6} className={classes.card}>
            <Stack>
              <Grid container justifyContent='center'>
                <Avatar src={selectedOrganization?.logo} sx={{ width: 56, height: 56 }} />
              </Grid>
            </Stack>
          </Card>
        </Grid>
      </Grid> */}
        </Card>
      </Grid>
    </Container>
  )
}

export default Abonement
