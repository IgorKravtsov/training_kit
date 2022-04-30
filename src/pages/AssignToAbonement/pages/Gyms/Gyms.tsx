import React, { useEffect } from 'react'
import { useStyles } from './gyms.styles'

import { useAppDispatch, useAppSelector } from 'redux/hooks/typedHooks'
import { getLearnerGyms, selectGym } from 'redux/slices/gymSlice'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { hideLoading, showLoading } from 'redux/slices/loadingIndicatorSlice'
import { Link } from 'react-router-dom'
import { AssignToAbonementRoutes, RouteNames } from 'routes'
import { AppUser } from 'api/user/types'
import { SERVER_DELAY_TIME } from 'shared-files/constants'
import { Container } from '@mui/material'
import MainSection from '../../components/SectionTitle/SectionTitle'
import GymList from '../../components/GymList/GymList'

const Gyms: React.FC = (): React.ReactElement => {
  const classes = useStyles()
  const { user } = useAuthContext()
  const { gyms } = useAppSelector(selectGym)

  const dispatch = useAppDispatch()

  const getGyms = (user: Partial<AppUser>) => {
    const trainers = user.trainers ? user.trainers?.map(trainer => trainer.uid) : []
    dispatch(showLoading())
    setTimeout(() => {
      const response = dispatch(getLearnerGyms({ trainers }))
      dispatch(hideLoading())
    }, SERVER_DELAY_TIME)
  }

  useEffect(() => {
    user && getGyms(user)
  }, [])

  return (
    <Container className={classes.container}>
      <MainSection>Оберіть зал</MainSection>
      <GymList gyms={gyms} />
      {/* {gyms?.map(gym => (
        <>
          <Link to={`${RouteNames.ASSIGN_TO_ABONEMENT}/${user?.uid}/${gym.id}/${MyAbonementRoutes.ABONEMENTS}`}>{gym.title}</Link>
          <br />
        </>
      ))} */}
    </Container>
  )
}

export default Gyms
