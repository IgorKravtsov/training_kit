import React from 'react'

import { useAppSelector } from 'redux/hooks'
import { selectUser, setLearnerList } from 'redux/slices/userSlice'

import { useHttpRequest } from 'shared-files/hooks'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'

import { PublicAppUserDto } from 'api/user/types'
import { AssignLearners, GetTrainerLearners } from 'api/user/user'

import LearnerListItem from './LearnerListItem'
import { selectAssignLearners } from 'redux/slices/assignLearnersSlice'

const LearnerList: React.FC = (): React.ReactElement => {
  const { user } = useAuthContext()
  const { appLearnerList } = useAppSelector(selectAssignLearners) //Add skeleton while loading
  const { learnerList } = useAppSelector(selectUser)

  const [assignLearners] = useHttpRequest(AssignLearners)
  const [getTrainerLearners] = useHttpRequest(GetTrainerLearners, {
    action: setLearnerList,
  })

  const handleClick = async (learner: PublicAppUserDto) => {
    const nowLearnerList = learnerList ? learnerList.map((tr) => tr.id) : []
    await assignLearners({
      trainerId: user?.id || 0,
      learnerIds: [...nowLearnerList, learner.id],
    })
    await getTrainerLearners({ trainerId: user?.id || 0 })
  }

  return (
    <>
      {appLearnerList.map((learner) => (
        <LearnerListItem
          onClick={handleClick}
          key={learner.id}
          learner={learner}
        />
      ))}
    </>
  )
}

export default LearnerList
