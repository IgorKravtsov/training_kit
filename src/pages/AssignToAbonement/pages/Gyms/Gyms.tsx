import React, { useEffect } from 'react'
import { useStyles } from './gyms.styles'
import { useTranslation } from 'react-i18next'

import { Container } from '@mui/material'

import { useAppSelector } from 'redux/hooks/typedHooks'
import { selectGym, setLearnerGyms } from 'redux/slices/gymSlice'

import { useHttpRequest } from 'shared-files/hooks'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'

import { PublicAppUserDto } from 'api/user/types'
import { GetLearnerGyms } from 'api/gym/gym'

import MainSection from '../../components/SectionTitle/SectionTitle'
import GymList from '../../components/GymList/GymList'

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
