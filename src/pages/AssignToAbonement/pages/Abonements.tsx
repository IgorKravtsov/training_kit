import React, { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks/typedHooks'
import { selectAbonement, setAbonements } from 'redux/slices/abonementSlice'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { PublicAppUserDto } from 'api/user/types'
import AbonementListItem from '../components/AbonementList/AbonementListItem'
import { Container, Grid } from '@mui/material'
import { Id } from 'shared-files/types'
import {
  AssignUserToAbonement,
  GetGymAbonements,
  GetLearnerAbonements,
  GetTrainersAbonements,
} from 'api/abonements/abonements'
import { informational, success, warning } from 'redux/slices/snackbarSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { useHttpRequest } from 'shared-files/hooks'
import { Abonement } from 'api/abonements/types'
import {
  selectLearnerAbonement,
  setLearnerAbonements,
} from 'redux/slices/learnerAbonementSlice'
import { selectMyTrainings } from 'redux/slices/myTrainingsSlice'

const Abonements: React.FC = (): React.ReactElement => {
  const { user } = useAuthContext()
  const { abonements } = useAppSelector(selectAbonement)
  const { learnerAbonements } = useAppSelector(selectLearnerAbonement)
  const { selectedGymId } = useAppSelector(selectMyTrainings)

  const { gymId } = useParams<{ gymId: string }>()
  const gymID = gymId || 0

  const dispatch = useAppDispatch()

  // const [getTrainersAbonements] = useHttpRequest(GetTrainersAbonements, {
  //   action: setAbonements,
  // })
  const [assignUserToAbonement] = useHttpRequest(AssignUserToAbonement)
  const [getLearnerAbonements] = useHttpRequest(GetLearnerAbonements, {
    action: setLearnerAbonements,
  })
  const [getGymAbonements] = useHttpRequest(GetGymAbonements, {
    action: setAbonements,
  })

  // const getAbonements = async (trainers: PublicAppUserDto[]) => {
  //   await getTrainersAbonements({
  //     trainers: trainers.map((trainer) => trainer.id),
  //   })
  // }

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
          message:
            'Не можна підписатися ще раз на цей абонімент поки не закінчилася дія цього абоніменту!',
        }),
      )
    } else {
      const response = await assignUserToAbonement({
        abonement: abonementId,
        learner: learnerId,
      })
      if (response) {
        dispatch(success({ message: 'Ви успішно підписалися на абонемент!' }))
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
        {abonements?.map((abonement) => (
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
        ))}
      </Grid>
    </Container>
  )
}

export default Abonements
