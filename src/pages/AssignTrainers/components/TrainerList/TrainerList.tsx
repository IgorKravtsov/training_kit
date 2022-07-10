import React from 'react'

import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { selectAssignTrainers } from 'redux/slices/assignTrainersSlice'
import { setUser } from 'redux/slices/userSlice'

import { useHttpRequest } from 'shared-files/hooks'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'

import {
  AppUser,
  AssginToTrainersRequest,
  PublicAppUserDto,
} from 'api/user/types'
import { AssignToTrainers } from 'api/user/user'

import TrainerListItem from './TrainerListItem'
import { useTranslation } from 'react-i18next'

const TrainerList: React.FC = (): React.ReactElement => {
  const { user } = useAuthContext()
  const { appTrainerList: trainerList } = useAppSelector(selectAssignTrainers) //Add skeleton while loading

  const { t } = useTranslation(['assignTrainers'])

  const [assignToTrainers] = useHttpRequest(AssignToTrainers, {
    action: setUser,
  })

  const handleClick = async (trainer: PublicAppUserDto) => {
    const nowTrainerList = user?.trainers
      ? user?.trainers.map((tr) => tr.id)
      : []
    await assignToTrainers({
      learner: user?.id || 0,
      trainers: [...nowTrainerList, trainer.id],
    })
  }

  return (
    <>
      {trainerList.length > 0 ? (
        trainerList.map((trainer) => (
          <TrainerListItem
            onClick={handleClick}
            key={trainer.id}
            trainer={trainer}
          />
        ))
      ) : (
        <h1>{t('assignTrainers:noData')}</h1>
      )}
    </>
  )
}

export default TrainerList
