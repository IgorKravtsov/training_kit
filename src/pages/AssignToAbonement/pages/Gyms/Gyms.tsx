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
import { useTranslation } from 'react-i18next'

const Gyms: React.FC = (): React.ReactElement => {
  const classes = useStyles()
  const { user } = useAuthContext()
  const { gyms } = useAppSelector(selectGym)

  const { t } = useTranslation(['assignToAbonement'])

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
      <MainSection>{t('assignToAbonement:subtitle')}</MainSection>
      <GymList gyms={gyms} />
    </Container>
  )
}

export default Gyms
