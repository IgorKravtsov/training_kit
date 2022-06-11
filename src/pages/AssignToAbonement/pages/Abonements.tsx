import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks/typedHooks'
import { selectAbonement, setAbonements } from 'redux/slices/abonementSlice'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
// import { hideLoading, showLoading } from 'redux/slices/loadingIndicatorSlice'
import { AppUser, PublicAppUserDto } from 'api/user/types'
// import { SERVER_DELAY_TIME } from 'shared-files/constants'
import AbonementListItem from '../components/AbonementList/AbonementListItem'
import { Container, Grid } from '@mui/material'
import { Id } from 'shared-files/types'
import {
  AssignUserToAbonement,
  GetTrainersAbonements,
} from 'api/abonements/abonements'
import { error, success } from 'redux/slices/snackbarSlice'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from 'routes'
import { useHttpRequest } from 'shared-files/hooks'

const Abonements: React.FC = (): React.ReactElement => {
  const { user } = useAuthContext()
  const { abonements } = useAppSelector(selectAbonement)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [getTrainersAbonements] = useHttpRequest(GetTrainersAbonements, {
    action: setAbonements,
  })
  const [assignUserToAbonement] = useHttpRequest(AssignUserToAbonement)

  const getAbonements = async (trainers: PublicAppUserDto[]) => {
    await getTrainersAbonements({
      trainers: trainers.map((trainer) => trainer.id),
    })
  }

  const assignToAbonement = async (learnerId: Id, abonementId: Id) => {
    const response = await assignUserToAbonement({
      abonement: abonementId,
      learner: learnerId,
    })
    if (response) {
      dispatch(success({ message: 'Ви успішно підписалися на абонемент!' }))
    }
  }

  useEffect(() => {
    getAbonements(user?.trainers || [])
  }, [])

  return (
    <Container>
      <Grid container spacing={2} justifyContent="center">
        {abonements?.map((abonement) => (
          <Grid item xs={4} key={abonement.id}>
            <AbonementListItem
              onClick={() => assignToAbonement(user?.id || 0, abonement.id)}
              abonement={abonement}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Abonements
