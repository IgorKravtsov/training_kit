import React, { useEffect } from 'react'
import { useStyles } from './gyms.styles'

import { useAppDispatch, useAppSelector } from 'redux/hooks/typedHooks'
import { selectGym, setLearnerGyms } from 'redux/slices/gymSlice'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { hideLoading, showLoading } from 'redux/slices/loadingIndicatorSlice'
import { Link } from 'react-router-dom'
import { AssignToAbonementRoutes, RouteNames } from 'routes'
import { AppUser, PublicAppUserDto } from 'api/user/types'
import { SERVER_DELAY_TIME } from 'shared-files/constants'
import { Container } from '@mui/material'
import MainSection from '../../components/SectionTitle/SectionTitle'
import GymList from '../../components/GymList/GymList'
import { GetLearnerGyms } from 'api/gym/gym'
import { useHttpRequest } from 'shared-files/hooks'
import { GetGymAbonements } from 'api/abonements/abonements'
import { setAbonements } from 'redux/slices/abonementSlice'
import { Id } from 'shared-files/types'

const Gyms: React.FC = (): React.ReactElement => {
  const classes = useStyles()
  const { user } = useAuthContext()
  const { gyms } = useAppSelector(selectGym)

  const [getLearnerGyms] = useHttpRequest(GetLearnerGyms, {
    action: setLearnerGyms,
  })

  const getGyms = async (trainers: PublicAppUserDto[]) => {
    await getLearnerGyms({ trainers: trainers.map((trainer) => trainer.id) })
  }

  useEffect(() => {
    getGyms(user?.trainers || [])
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
