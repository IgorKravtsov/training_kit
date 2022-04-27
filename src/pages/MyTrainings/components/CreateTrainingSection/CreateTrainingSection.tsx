import React from 'react'
import { useAppSelector } from 'redux/hooks'
import { CreationType, selectMyTrainings } from 'redux/slices/myTrainingsSlice'
import CreateOneTraining from '../CreateOneTraining/CreateOneTraining'
import ScheduleTrainings from '../ScheduleTrainings/ScheduleTrainings'

const CreateTrainingSection: React.FC = (): React.ReactElement => {
  const { selectedCreationType } = useAppSelector(selectMyTrainings)
  return <>{selectedCreationType === CreationType.One ? <CreateOneTraining /> : <ScheduleTrainings />}</>
}

export default CreateTrainingSection
