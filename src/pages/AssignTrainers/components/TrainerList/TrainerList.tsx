import React from 'react'
import { useAppSelector } from 'redux/hooks'
import { selectAssignTrainers } from 'redux/slices/assignTrainersSlice'
import TrainerListItem from './TrainerListItem'

const TrainerList: React.FC = (): React.ReactElement => {
  const { appTrainerList: trainerList } = useAppSelector(selectAssignTrainers) //Add skeleton while loading
  return (
    <>
      {trainerList.map((trainer) => (
        <TrainerListItem key={trainer.id} trainer={trainer} />
      ))}
    </>
  )
}

export default TrainerList
