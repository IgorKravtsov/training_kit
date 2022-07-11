import React, { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'redux/hooks/typedHooks'
import { selectAbonement, setAbonements } from 'redux/slices/abonementSlice'
import { success, warning } from 'redux/slices/snackbarSlice'
import {
  selectLearnerAbonement,
  setLearnerAbonements,
} from 'redux/slices/learnerAbonementSlice'
import { selectMyTrainings } from 'redux/slices/myTrainingsSlice'

import { Container, Grid } from '@mui/material'

import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { Id } from 'shared-files/types'
import { useHttpRequest } from 'shared-files/hooks'

import AbonementListItem from '../components/AbonementList/AbonementListItem'

import {
  AssignUserToAbonement,
  GetGymAbonements,
  GetLearnerAbonements,
} from 'api/abonements/abonements'

const Abonements: React.FC = (): React.ReactElement => {
  const { user } = useAuthContext()

  const { abonements } = useAppSelector(selectAbonement)
  const { learnerAbonements } = useAppSelector(selectLearnerAbonement)
  const { selectedGymId } = useAppSelector(selectMyTrainings)

  const { t } = useTranslation(['assignToAbonement'])

  const isAbonements = abonements && abonements.length > 0

  const { gymId } = useParams<{ gymId: string }>()
  const gymID = gymId || 0

  const dispatch = useAppDispatch()

  const [assignUserToAbonement] = useHttpRequest(AssignUserToAbonement)
  const [getLearnerAbonements] = useHttpRequest(GetLearnerAbonements, {
    action: setLearnerAbonements,
  })
  const [getGymAbonements] = useHttpRequest(GetGymAbonements, {
    action: setAbonements,
  })

  const getAbonements = async (gymId: Id) => {
    await getGymAbonements({ gymId: +gymId })
  }

  useEffect(() => {
    getAbonements(selectedGymId || gymID)
  }, [])

  const assignToAbonement = async (
    learnerId: Id,
    abonementId: Id,
    isSubscribed: boolean,
  ) => {
    if (isSubscribed) {
      dispatch(
        warning({
          message: t('assignToAbonement:warningMessage'),
        }),
      )
    } else {
      const response = await assignUserToAbonement({
        abonement: abonementId,
        learner: learnerId,
      })
      if (response) {
        dispatch(success({ message: t('assignToAbonement:successMessage') }))
        await getCurrUserLearnerAbonements(user?.id || 0)
        await getAbonements(selectedGymId || gymID)
      }
    }
  }

  const getCurrUserLearnerAbonements = async (learnerId: Id) => {
    await getLearnerAbonements({ learnerId })
  }

  const isSubscribed = useCallback(
    (abonementId: Id): boolean => {
      return !!learnerAbonements?.find((la) => la.abonement?.id === abonementId)
    },
    [learnerAbonements],
  )

  useEffect(() => {
    // getAbonements(user?.trainers || [])
    getCurrUserLearnerAbonements(user?.id || 0)
  }, [])

  return (
    <Container>
      <Grid container spacing={2} justifyContent="center">
        {isAbonements ? (
          abonements?.map((abonement) => (
            <Grid item xs={8} md={4} key={abonement.id}>
              <AbonementListItem
                onClick={() =>
                  assignToAbonement(
                    user?.id || 0,
                    abonement.id,
                    isSubscribed(abonement.id),
                  )
                }
                abonement={abonement}
                isSubscribed={isSubscribed}
              />
            </Grid>
          ))
        ) : (
          <h1 style={{ textAlign: 'center' }}>
            {t('assignToAbonement:noData')}
          </h1>
        )}
      </Grid>
    </Container>
  )
}

export default Abonements
