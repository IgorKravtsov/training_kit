import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks/typedHooks'
import { getUserAbonements, selectAbonement } from 'redux/slices/abonementSlice'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { hideLoading, showLoading } from 'redux/slices/loadingIndicatorSlice'
import { AppUser } from 'api/user/types'
import { SERVER_DELAY_TIME } from 'shared-files/constants'
import AbonementListItem from '../components/AbonementList/AbonementListItem'
import { Container, Grid } from '@mui/material'
import { Id } from 'shared-files/types'
import { AssignUserToAbonement } from 'api/abonements/abonements'
import { error, success } from 'redux/slices/snackbarSlice'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from 'routes'

const Abonements: React.FC = (): React.ReactElement => {
  const { user } = useAuthContext()
  const { abonements } = useAppSelector(selectAbonement)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const getAbonements = async (user: Partial<AppUser>) => {
    const trainers = user?.trainers
      ? user?.trainers.map((trainer) => trainer.id)
      : []
    dispatch(showLoading())
    setTimeout(async () => {
      await dispatch(getUserAbonements({ trainers }))
      dispatch(hideLoading())
    }, SERVER_DELAY_TIME)
  }

  const assignToAbonement = async (learnerId: Id, abonementId: Id) => {
    dispatch(showLoading())
    setTimeout(async () => {
      try {
        await AssignUserToAbonement({ learnerId, abonementId })
        dispatch(success({ message: 'Ви успішно підписалися на абонемент!' }))
        setTimeout(() => {
          navigate(`${RouteNames.ASSIGN_TO_ABONEMENT}/${user?.id || 0}/gyms`)
        }, 2000)
      } catch (err: any) {
        dispatch(error({ message: err.message }))
      } finally {
        dispatch(hideLoading())
      }
    }, SERVER_DELAY_TIME)
  }

  useEffect(() => {
    user && getAbonements(user)
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
